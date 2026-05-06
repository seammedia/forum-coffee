export function ForumLogo({ size = 26, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg viewBox="0 0 60 60" width={size} height={size} fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 18 Q14 12, 22 12 Q26 12, 26 16 Q26 20, 22 20 Q26 20, 26 24" />
      <path d="M46 18 Q46 12, 38 12 Q34 12, 34 16 Q34 20, 38 20 Q34 20, 34 24" />
      <line x1="12" y1="24" x2="48" y2="24" />
      <line x1="20" y1="24" x2="20" y2="46" />
      <line x1="40" y1="24" x2="40" y2="46" />
      <line x1="26" y1="24" x2="26" y2="46" strokeWidth="1.2" opacity="0.5" />
      <line x1="34" y1="24" x2="34" y2="46" strokeWidth="1.2" opacity="0.5" />
      <line x1="30" y1="24" x2="30" y2="46" strokeWidth="1.2" opacity="0.5" />
      <line x1="12" y1="46" x2="48" y2="46" />
      <line x1="10" y1="50" x2="50" y2="50" />
    </svg>
  );
}

export function Arrow({ size = 14 }: { size?: number }) {
  return (
    <svg className="arrow" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}
