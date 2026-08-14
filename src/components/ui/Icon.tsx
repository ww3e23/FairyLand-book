import { ICON_OVERRIDES } from "@/data/iconOverrides";

function withBasePath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/")) return path;
  return `${base}${path}`;
}

const ICONS: Record<string, React.ReactNode> = {
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  shield: (
    <path d="M12 3 5 6.5v5.2c0 4.2 2.9 8.1 7 9.3 4.1-1.2 7-5.1 7-9.3V6.5L12 3z" />
  ),
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5z" />
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    </>
  ),
  pet: (
    <>
      <circle cx="7" cy="8" r="2.2" />
      <circle cx="17" cy="8" r="2.2" />
      <circle cx="5" cy="13" r="2" />
      <circle cx="19" cy="13" r="2" />
      <ellipse cx="12" cy="15" rx="4.2" ry="3.8" />
    </>
  ),
  armor: (
    <>
      <path d="M12 3 6 6v4c0 5 2.5 8.5 6 10 3.5-1.5 6-5 6-10V6l-6-3z" />
      <path d="M9 11h6" />
    </>
  ),
  hammer: (
    <>
      <path d="m14 5 5 5-3 3-5-5z" />
      <path d="m11 8-7 9 3 3 9-7" />
    </>
  ),
  map: (
    <>
      <path d="M9 4 3 6.5v13.5L9 18l6 2.5L21 18V4.5L15 7 9 4z" />
      <path d="M9 4v14" />
      <path d="M15 7v14" />
    </>
  ),
  scroll: (
    <>
      <path d="M8 5h11a2 2 0 0 1 2 2v11H8" />
      <path d="M8 5a3 3 0 0 0-3 3v11a2 2 0 0 0 2 2h1" />
      <path d="M11 10h6" />
      <path d="M11 14h6" />
    </>
  ),
  potion: (
    <>
      <path d="M9 3h6" />
      <path d="M10 3v4.2L6.4 14a5.6 5.6 0 0 0 11.2 0L14 7.2V3" />
      <path d="M7.2 13.5h9.6" />
    </>
  ),
  wrench: (
    <path d="M14.5 6.5a4 4 0 0 0-5.6 5.6L3 18l3 3 5.9-5.9a4 4 0 0 0 5.6-5.6L15 12l-3-3z" />
  ),
  refresh: (
    <>
      <path d="M4 12a8 8 0 0 1 13.7-5.6L20 9" />
      <path d="M20 4v5h-5" />
      <path d="M20 12a8 8 0 0 1-13.7 5.6L4 15" />
      <path d="M4 20v-5h5" />
    </>
  ),
  flag: (
    <>
      <path d="M5 21V4" />
      <path d="M5 4h11l-2 3.5L16 11H5" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  grid: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1" />
      <rect x="13" y="4" width="7" height="7" rx="1" />
      <rect x="4" y="13" width="7" height="7" rx="1" />
      <rect x="13" y="13" width="7" height="7" rx="1" />
    </>
  ),
  star: (
    <path d="m12 3 2.4 6.6H21l-5.3 4.1 2 6.3L12 16.5 6.3 20l2-6.3L3 9.6h6.6L12 3z" />
  ),
  more: (
    <>
      <circle cx="5" cy="12" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="19" cy="12" r="1.6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M16 19a4.8 4.8 0 0 1 5-4.2" />
    </>
  ),
  spark: (
    <path d="M12 3v4M12 17v4M4.9 6.5l2.8 2.8M16.3 14.7l2.8 2.8M3 12h4M17 12h4M4.9 17.5l2.8-2.8M16.3 9.3l2.8-2.8" />
  ),
  image: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <circle cx="9" cy="10" r="1.5" />
      <path d="m8 16 3-3 3 2 4-4 2 2" />
    </>
  ),
  upload: (
    <>
      <path d="M12 16V6" />
      <path d="m8 10 4-4 4 4" />
      <path d="M5 18h14" />
    </>
  ),
};

export const ICON_NAMES = Object.keys(ICONS);

export function AppIcon({
  name,
  className = "h-5 w-5",
}: {
  name: string;
  className?: string;
}) {
  const custom = ICON_OVERRIDES[name];
  if (custom) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={withBasePath(custom)}
        alt=""
        className={`rounded-md object-contain ${className}`}
      />
    );
  }

  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {ICONS[name] ?? ICONS.spark}
    </svg>
  );
}
