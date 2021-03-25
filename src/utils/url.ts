import { URL } from "url";

export const getLastPath = (url: string): string | undefined => {
  try {
    // 末尾のスラッシュを削除
    const formatUrl = url.replace(/\/$/, "");

    const urlEntity = new URL(formatUrl);

    const paths = urlEntity.pathname.split("/").reverse();

    return paths[0] || undefined;
  } catch (e) {
    throw new Error("有効なURLではありません");
  }
};
