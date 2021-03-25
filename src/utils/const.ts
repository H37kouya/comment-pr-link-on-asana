export const ASANA_BASE_URL = 'https://app.asana.com/0' as const

export const ASANA_URL = (path: string): `${typeof ASANA_BASE_URL}${string}` =>
  `${ASANA_BASE_URL}${path}` as `${typeof ASANA_BASE_URL}${string}`
