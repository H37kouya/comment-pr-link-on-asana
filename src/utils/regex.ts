/**
 * AsanaのURLを文中から取得する。
 * また、末尾のスラッシュは必ず存在しない。
 *
 * 取得する条件はtask: から始まるもの
 * task: ASANA_URL
 *
 * @param content
 */
export const extractionAsanaUrl = (
  content?: string | null
): string | undefined => {
  if (!content) {
    return undefined;
  }
  const linkList = content.match(
    /task: https?:\/\/app.asana.com\/0\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+/
  ) || content.match(
    /task:https?:\/\/app.asana.com\/0\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+/
  );

  if (!linkList || linkList.length === 0) {
    return undefined;
  }

  return (
    linkList[0]
      .replace(" ", "")
      // task:の削除
      .replace("task:", "")
      // 末尾のスラッシュ削除
      .replace(/\/$/, "")
  );
};
