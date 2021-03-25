import { ASANA_URL } from "../utils/const";
import { AsanaTaskUrl } from "./AsanaTaskUrl";

describe("AsanaTaskUrl", () => {
  describe("インスタンスを生成できる", () => {
    type TestCase = {
      arg: string;
      expected: string;
    };

    const testCases: TestCase[] = [
      {
        arg: ASANA_URL("/foo/bar"),
        expected: ASANA_URL("/foo/bar")
      },
      {
        arg: ASANA_URL("/foo/bar/"),
        expected: ASANA_URL("/foo/bar")
      },
      {
        arg: ASANA_URL("/foo/bar/f"),
        expected: ASANA_URL("/foo/bar")
      }
    ];

    testCases.forEach(testCase => {
      it(`arg=${testCase.arg}, expected=${testCase.expected}`, () => {
        // WHEN
        const actual = AsanaTaskUrl.of(testCase.arg);

        // THEN
        expect(actual).toBeInstanceOf(AsanaTaskUrl);
        expect(actual.get()).toBe(testCase.expected);
      });
    });
  });

  describe("taskGidを取得できる", () => {
    type TestCase = {
      arg: string;
      expected: string;
    };

    const testCases: TestCase[] = [
      {
        arg: ASANA_URL("/foo/bar"),
        expected: "bar"
      },
      {
        arg: ASANA_URL("/foo/bar/"),
        expected: "bar"
      },
      {
        arg: ASANA_URL("/foo/bar/f"),
        expected: "bar"
      }
    ];

    testCases.forEach(testCase => {
      it(`arg=${testCase.arg}, expected=${testCase.expected}`, () => {
        // WHEN
        const actual = AsanaTaskUrl.of(testCase.arg);

        // THEN
        expect(actual).toBeInstanceOf(AsanaTaskUrl);
        expect(actual.taskGid()).toBe(testCase.expected);
      });
    });
  });
});
