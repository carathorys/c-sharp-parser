import { CategorizedKeywords } from './keyword.types'
export const IsCategorizedKeyword = (s: string): s is CategorizedKeywords => {
  return (s as CategorizedKeywords) != null
}
