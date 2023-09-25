const str = 'xxxmystringxxxmynamexxxsomestrxxxmorexxxmoresxxx'

const dataset = {}
const genes = str.split('xxx')

const breakGene = (gene = '') => {
  const parts = gene.split('')
  let branch = dataset
  for (const part of parts) {
    if (!branch[part]) {
      branch[part] = {}
    }
    branch = branch[part]
  }
}

genes.forEach(breakGene)

console.log(JSON.stringify(dataset))

const searchDataset = (gene = '') => {
  const parts = gene.split('')
  let found = []
  let datasetCopy = dataset
  for (const part of parts) {
    if (datasetCopy[part]) {
      found.push(part)
      datasetCopy = datasetCopy[part]
    }
  }

  return found.join('')
}

const query = process.argv[2] ?? 'ing'
const found = searchDataset(query)
const exists = found === query
console.log(`query: ${query};\nfound ${found};\nexists ${exists}\n`)
