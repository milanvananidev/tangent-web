export function TangentMark({ size = 64, color = "currentColor", stroke = 9 }: { size?: number; color?: string; stroke?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <path
        d="M14 52 C20 34 30 34 37 50 C42 62 49 59 54 50 L63 66 L87 28"
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TangentLockup({ size = 36, color = "currentColor", gap }: { size?: number; color?: string; gap?: number }) {
  const markSize = size * 1.12;
  const tracking = -0.035 * size;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: gap || size * 0.34, color }}>
      <TangentMark size={markSize} color={color} />
      <div style={{
        fontWeight: 700,
        fontSize: size,
        letterSpacing: tracking,
        lineHeight: 1,
      }}>Tangent</div>
    </div>
  );
}
