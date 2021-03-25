import { URL } from "url";
import { ASANA_BASE_URL } from "../utils/const";
import { getLastPath } from "../utils/url";
import { InvalidArgumentError } from "./InvalidArgumentError";

declare const Unique: unique symbol;

export class AsanaTaskUrl {
  // @ts-ignore
  private [Unique]: void;

  constructor(protected value: string) {}

  public get() {
    return this.value;
  }

  public eq(valueObject: AsanaTaskUrl): boolean {
    return valueObject.get() === this.value;
  }

  public static of = function(
    this: new (value: string) => AsanaTaskUrl,
    value: string
  ) {
    // 末尾のスラッシュを削除
    const trimLastSlush = value.replace(/\/$/, "");
    // 末尾の /f を削除
    const trimF = trimLastSlush.replace(/\/f$/, "");

    const formatUrl = trimF;

    const newUrl = new URL(formatUrl);

    if (`${newUrl.origin}/0` !== ASANA_BASE_URL)
      throw new InvalidArgumentError(
        `有効なAsanaのタスクURLではありません。ASANA_BASE_URLが異なります。 origin=${newUrl.origin}/0, value=${value}`
      );
    if (newUrl.pathname.split("/").length !== 4)
      throw new InvalidArgumentError(
        `有効なAsanaのタスクURLではありません。パスの数が異なります。value=${value}`
      );

    return new this(formatUrl);
  };

  public taskGid() {
    return getLastPath(this.value);
  }
}
