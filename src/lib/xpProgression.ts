/**
 * AP Lab XP Level Progression
 * 
 * Formula:
 * - Level 1 to 2: 100 XP
 * - Level 2 to 3: 120 XP
 * - Level 3 to 4: 140 XP
 * - Level L to L+1: 100 + (L - 1) * 20 XP
 * 
 * Cumulative XP needed to reach Level L:
 * - threshold(L) = 10 * (L - 1) * (L + 8)
 */

export function getXpThresholdForLevel(level: number): number {
  if (level <= 1) return 0;
  return 10 * (level - 1) * (level + 8);
}

export function getLevelForXp(xp: number): number {
  if (xp <= 0) return 1;
  // Solving 10*(L-1)*(L+8) = xp => L^2 + 7L - (8 + xp/10) = 0
  // L = (-7 + sqrt(49 + 4*(8 + xp/10))) / 2 = (-7 + sqrt(81 + 0.4 * xp)) / 2
  const val = Math.floor((-7 + Math.sqrt(81 + 0.4 * xp)) / 2);
  return Math.max(1, Math.min(100, val));
}
