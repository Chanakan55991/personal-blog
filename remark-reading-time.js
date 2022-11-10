import { toString } from 'mdast-util-to-string'
import readingTime from 'reading-time'

export function remarkReadingTime() {
  return function(tree, { data }) {
    const textOnPage = toString(tree)
    const rTime = readingTime(textOnPage)

    data.astro.frontmatter.readingTime = rTime.text
  }
}
