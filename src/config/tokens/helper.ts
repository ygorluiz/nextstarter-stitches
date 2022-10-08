export function calculateScale(
  step: number,
  unit = "rem",
  baseScale = 1.618,
  halfStep = true
): string {
  const effectiveStep = halfStep ? baseScale ** 0.5 : baseScale;
  return effectiveStep ** step + unit;
}
