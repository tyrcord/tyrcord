export function parseAndInterpolateString(
  text: string,
  params: Record<string, string>
): string {
  const pattern = /{{(.*?)}}/g;

  return text.replace(pattern, (match, param) => {
    const [key, defaultValue] = param.split("=").map((s: string) => s.trim());
    const value = params[key] || defaultValue || `{{${key}}}`;

    return value;
  });
}
