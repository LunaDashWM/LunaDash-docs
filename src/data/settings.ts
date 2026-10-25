export interface SettingGroup {
  id: string;
  name: string;
  description: string;
  details: string[];
}

// The pages of the LunaDash shell's Settings, in sidebar order.
export const groups: SettingGroup[] = [
  {
    id: "appearance",
    name: "Appearance",
    description: "Colours, glass and motion for the whole desktop.",
    details: [
      "Mode follows the desktop or stays dark or light; on LunaDash applications follow through the portal colour scheme.",
      "Eight accent colours, or the palette's own; LunaDash can also derive its palette from the wallpaper.",
      "Transparency with an adjustable glass opacity, compact / default / round corners and 90–125 % text size.",
      "Animations with a fast, normal or relaxed speed, shared by the shell and window animations.",
      "Palettes from the shell's theme, including LunaDash dark and light.",
    ],
  },
  {
    id: "wallpaper",
    name: "Wallpaper",
    description: "Images and videos behind everything, and the clock on top of them.",
    details: [
      "Open the wallpaper library (also Super+W), browse any folder, or choose a single image or video file.",
      "Fit (fill screen, whole image or stretch) and dimming up to 60 %.",
      "The desktop clock: shown or hidden, bottom left / bottom right / top left / centre, three sizes, with or without the date.",
      "Shuffle picks a random wallpaper from the LunaDash library.",
    ],
  },
  {
    id: "panel",
    name: "Panel",
    description: "The bar with workspaces, clock and status.",
    details: [
      "Top or bottom edge; popups, overlays and the dock move out of its way.",
      "Workspaces as dots or numbers, the focused window's title, and the date next to the clock.",
      "24-hour clock, seconds and the first day of the week.",
    ],
  },
  {
    id: "dock",
    name: "Dock",
    description: "Pinned applications and running windows.",
    details: [
      "Show or hide the dock, hide it automatically until the pointer reaches the bottom edge, and choose small, medium or large icons.",
      "The launcher button can be removed; Unpin all clears the pinned applications.",
    ],
  },
  {
    id: "windows",
    name: "Windows",
    description: "How LunaDash arranges and draws application windows.",
    details: [
      "Tiling: Fill (the split tree fills the screen) or Normal (niri-like scrollable columns). Super+Shift+Space switches.",
      "Gaps between windows, window opacity, blur and blur strength.",
    ],
  },
  {
    id: "display",
    name: "Display",
    description: "Night light and the pointer.",
    details: [
      "Night light (Super+N) with a colour temperature from 2500 K to 6500 K.",
      "Cursor size; it applies after signing in again.",
    ],
  },
  {
    id: "notifications",
    name: "Notifications",
    description: "Pop-ups, do not disturb and the launcher layout.",
    details: [
      "Pop-ups top right, top centre or bottom right, shown for 3, 5 or 10 seconds; do not disturb lets only critical notifications through.",
      "The launcher can use a comfortable or a compact grid.",
    ],
  },
  {
    id: "power",
    name: "Power & lock",
    description: "Locking and staying awake.",
    details: [
      "Lock after 5, 10 or 30 minutes of inactivity, or never, and lock before sleep.",
      "Keep the screen awake until LunaDash restarts, or lock right away.",
    ],
  },
  {
    id: "language",
    name: "Language",
    description: "The interface language of the shell and, on LunaDash, the whole desktop.",
    details: ["English, Traditional Chinese and every other installed translation; the shell switches immediately."],
  },
];
