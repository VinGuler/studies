// Complete the freqQuery function below.
function freqQuery(queries) {
  const data = {}
  const occurrences = {}
  const result = []
  for (const query of queries) {
    const [command, value] = query
    if (command === 1) {
      const occurrence = data[value] || 0
      const newOccurrence = occurrence + 1
      data[value] = newOccurrence
      if (occurrences[occurrence]) {
        occurrences[occurrence]--
      }
      occurrences[newOccurrence] = occurrences[newOccurrence] ? occurrences[newOccurrence] + 1 : 1
    } else if (command === 2) {
      if (data[value]) {
        const occurrence = data[value]
        occurrences[occurrence] = occurrences[occurrence] ? occurrences[occurrence] - 1 : occurrences[occurrence]
        const newOccurrence = occurrence - 1
        if (newOccurrence > 0) {
          data[value] = newOccurrence
          occurrences[occurrence] = occurrences[occurrence] ? occurrences[occurrence] + 1 : 1
        } else {
          data[value] = newOccurrence
          occurrences[newOccurrence] = newOccurrence
        }
      }
    } else if (command === 3) {
      const isExists = occurrences[value] && occurrences[value] > 0
      result.push(isExists ? 1 : 0)
    }
  }
  return result
}

const input = [
  [1, 5],
  [1, 6],
  [3, 2],
  [1, 10],
  [1, 10],
  [1, 6],
  [2, 5],
  [3, 2]
]
const res = freqQuery(input)
console.log('res', res)
