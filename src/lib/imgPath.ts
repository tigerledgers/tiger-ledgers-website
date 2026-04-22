const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function imgPath(src: string): string {
  return `${BASE_PATH}${src}`;
}
