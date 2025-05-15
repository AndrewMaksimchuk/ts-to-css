export function namespace(url: string, prefix?: string) {
  if (prefix) {
    return `@namespace ${prefix} url(${url});\n`;
  }

  return `@namespace url(${url});\n`;
}
