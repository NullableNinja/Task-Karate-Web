const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string) {
  if (/^(?:https?:|mailto:|tel:|#)/.test(path)) return path;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}` || '/';
}
