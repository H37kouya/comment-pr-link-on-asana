import { getLastPath } from './url'

describe('url', () => {
  describe('getLastPath', () => {
    describe('取得できる', () => {
      type TestCase = {
        url: string
        expected: string | undefined
      };

      const testCases: TestCase[] = [
        { url: 'https://example.com', expected: undefined },
        { url: 'https://example.com/', expected: undefined },
        { url: 'https://example.com/foo', expected: 'foo' },
        { url: 'https://example.com/foo/', expected: 'foo' },
        { url: 'https://example.com/foo/bar', expected: 'bar' },
        { url: 'https://example.com/foo/bar/', expected: 'bar' },
      ]

      testCases.forEach(testCase => {
        it (`url = ${testCase.url}, expected = ${testCase.expected}`, () => {
          expect(getLastPath(testCase.url)).toBe(testCase.expected)
        })
      })
    })

    describe('URLでないとき、エラーを吐く', () => {
      type TestCase = {
        url: string
      };

      const testCases: TestCase[] = [
        { url: '' },
        { url: '/' },
        { url: '/foo' },
        { url: '/foo/' },
        { url: '/foo/bar' },
        { url: '/foo/bar/' },
      ]

      testCases.forEach(testCase => {
        it (`url = ${testCase.url}`, () => {
          expect(() => getLastPath(testCase.url)).toThrow(Error)
        })
      })
    })
  })
})
