export type BadgeInfo = { flag: boolean; label: "new" | "pro" };

export function getBadgeList(
  isNew: boolean,
  isPro: boolean
): BadgeInfo[] {
  return [
    { flag: isNew, label: "new" },
    { flag: isPro, label: "pro" },
  ];
}