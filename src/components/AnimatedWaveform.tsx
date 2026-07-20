"use client";

import { useEffect, useRef } from "react";

export function AnimatedWaveform() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const W = 1920;
    const H = 800;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const BAR_COUNT = 140;
    const BAR_WIDTH = 4;
    const BAR_GAP = W / BAR_COUNT;
    let frame: number;

    const baseHeights: number[] = [];
    for (let i = 0; i < BAR_COUNT; i++) {
      const pos = i / BAR_COUNT;
      const envelope = 0.08 + 0.92 * Math.pow(Math.sin(pos * Math.PI), 1.5);
      const noise =
        Math.sin(pos * 14.3) * 0.35 +
        Math.sin(pos * 28.7) * 0.2 +
        Math.sin(pos * 8.1) * 0.25 +
        Math.cos(pos * 19.5) * 0.15 +
        Math.sin(pos * 45.2) * 0.1;
      baseHeights.push(Math.max(0.05, envelope * (0.6 + noise * 0.4)));
    }

    function draw(t: number) {
      ctx!.clearRect(0, 0, W, H);
      const midY = H / 2;

      for (let i = 0; i < BAR_COUNT; i++) {
        const x = i * BAR_GAP + BAR_GAP / 2 - BAR_WIDTH / 2;

        const breathe =
          1 +
          Math.sin(t * 0.0008 + i * 0.1) * 0.08 +
          Math.sin(t * 0.0005 - i * 0.06) * 0.06;

        const h = Math.max(6, baseHeights[i] * H * 0.9 * breathe);
        const y = midY - h / 2;

        ctx!.fillStyle = "rgba(244, 242, 236, 0.5)";
        ctx!.beginPath();
        ctx!.roundRect(x, y, BAR_WIDTH, h, 2);
        ctx!.fill();
      }

      frame = requestAnimationFrame(draw);
    }

    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
