module.exports = function mostCommonInArray(arr) {
  const array = typeof arr === "string" ? [].slice.call(arr) : arr

  if (!Array.isArray(array)) {
    throw new TypeError("input must be an array")
  }

  const counts = countValues(array)
  const common = sort(counts)

  return common[0].value
}

function countValues(array) {
  const counts = {}
  const len = array.length
  var i = -1

  while (i++ < len) {
    const token = array[i]

    if (!(token in counts)) {
      counts[token] = 1
      continue
    }

    counts[token] = ++counts[token]
  }

  return counts
}

function sort(counts) {
  const sortedCounts = []

  for (value in counts) {
    const count = counts[value]
    sortedCounts.push({ value, count })
  }

  sortedCounts.sort((a, b) => b.count - a.count)

  return sortedCounts
}
