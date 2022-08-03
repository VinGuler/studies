/**
 * Insert Function
 * @description Inserts an elements in the given array at index
 * @param {number} i
 * @param {number} j
 * @param {Array} arr
 */
Array.prototype.insert = function (index, el) {
  let temp = el
  while (this[index] !== undefined) {
    const current = this[index]
    this[index] = temp
    temp = current
    index++
  }
  this.push(temp)
  return this
}

/**
 * Swap Function
 * @description Swaps the elements in the given array ( i <-> j )
 * @param {number} i
 * @param {number} j
 * @param {Array} arr
 */
Array.prototype.swap = function (i, j) {
  const temp = this[i]
  this[i] = this[j]
  this[j] = temp
}

/**
 * Bubble Sort
 * Time Complexity: O(n^2)
 * Worst case: When array is reverse sorted
 * Best case O(n): When array is already sorted
 * Auxiliary Space: O(1)
 * Sorting In Place: Yes
 * Stable: Yes
 */
function bubble_sort(arr) {
  let swapped = false
  let i = 0
  while (i < arr.length) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        arr.swap(j, j + 1)
        swapped = true
      }
    }
    // If a swap did not occur, it means the array is already sorted
    if (!swapped) {
      break
    }
    i++
  }
}

/**
 * Insertion Sort
 * Time Complexity: O(n^2).
 * Worst case: When array is reverse sorted
 * Best case O(n): When array is already sorted
 * Auxiliary Space: O(1)
 * Sorting In Place: Yes
 * Stable: Yes
 */
function insertion_sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > value) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = value
  }
}

/**
 * Quick Sort
 * Time Complexity: O(nLog(n))
 * Auxiliary Space: O(1)
 * Sorting In Place: Yes
 * Stable: Yes
 */
function partition(arr, low, high) {
  const pivot = arr[high]
  let i = low - 1
  for (j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++
      arr.swap(i, j)
    }
  }
  arr.swap(i + 1, high)
  return i + 1
}
// Used for the random pivot algorithm
function partition_random(arr, low, high) {
  const random_index = Math.floor(Math.random() * arr.length)
  arr.swap(random_index, high)
  return partition(arr, low, high)
}
// Quick Sort
function quick_sort(arr, low = null, high = null) {
  low = low === null ? 0 : low
  high = high === null ? arr.length - 1 : high
  if (low < high) {
    const p_index = partition(arr, low, high)
    quick_sort(arr, low, p_index - 1)
    quick_sort(arr, p_index, high)
  }
}
// Quick Sort Random Pivot
function quick_sort_random_pivot(arr, low = null, high = null) {
  low = low === null ? 0 : low
  high = high === null ? arr.length - 1 : high
  if (low < high) {
    const p_index = partition_random(arr, low, high)
    quick_sort(arr, low, p_index - 1)
    quick_sort(arr, p_index, high)
  }
}
// Quick Sort Optimized (reduced function calling)
function quick_sort_optimized(arr, low = null, high = null) {
  low = low === null ? 0 : low
  high = high === null ? arr.length - 1 : high
  while (low < high) {
    const p_index = partition(arr, low, high)
    quick_sort_optimized(arr, low, p_index - 1)
    low = p_index + 1
  }
}

/**
 * Merge Sort
 * Time Complexity: θ(nLog(n))
 * Auxiliary Space: O(n)
 * Sorting In Place: Not in the typical implementation, but here it is
 * Stable: Yes
 */
function merge(arr, left, mid, right) {
  let sub_array_one = mid - left + 1
  let sub_array_two = right - mid
  // Create temp arrays
  const left_array = new Array(sub_array_one)
  const right_array = new Array(sub_array_two)

  // Copy data to temp arrays leftArray[] and rightArray[]
  for (let i = 0; i < left_array.length; i++) {
    left_array[i] = arr[left + i]
  }
  for (let j = 0; j < right_array.length; j++) {
    right_array[j] = arr[mid + 1 + j]
  }

  let index_sub_array_one = 0
  let index_sub_array_two = 0
  let index_merged_array = left

  // Merge the temp arrays back into array[left..right]
  while (index_sub_array_one < sub_array_one && index_sub_array_two < sub_array_two) {
    if (left_array[index_sub_array_one] <= right_array[index_sub_array_two]) {
      arr[index_merged_array] = left_array[index_sub_array_one]
      index_sub_array_one++
    } else {
      arr[index_merged_array] = right_array[index_sub_array_two]
      index_sub_array_two++
    }
    index_merged_array++
  }
  // Copy the remaining elements of
  // left[], if there are any
  while (index_sub_array_one < sub_array_one) {
    arr[index_merged_array] = left_array[index_sub_array_one]
    index_sub_array_one++
    index_merged_array++
  }
  // Copy the remaining elements of
  // left[], if there are any
  while (index_sub_array_two < sub_array_two) {
    arr[index_merged_array] = right_array[index_sub_array_two]
    index_sub_array_two++
    index_merged_array++
  }
}
function merge_sort(arr, begin = null, end = null) {
  begin = begin === null ? 0 : begin
  end = end === null ? arr.length - 1 : end
  if (begin >= end) {
    return
  }
  const mid = Math.floor(begin + (end - begin) / 2)
  merge_sort(arr, begin, mid)
  merge_sort(arr, mid + 1, end)
  merge(arr, begin, mid, end)
}

function getArray() {
  return [6, 1, 5, 3, 4, 2]
}

function test() {
  let arr = getArray()
  console.log('before insertion', arr)
  arr.insert(2, 9)
  console.log('after insertion', arr)
  console.log('----------------')

  arr = getArray()
  console.log('not sorted', arr)
  bubble_sort(arr)
  console.log('bubble_sort', arr)
  console.log('----------------')

  arr = getArray()
  console.log('not sorted', arr)
  insertion_sort(arr)
  console.log('insertion_sort', arr)
  console.log('----------------')

  arr = getArray()
  console.log('not sorted', arr)
  quick_sort(arr)
  console.log('quick_sort', arr)
  console.log('----------------')

  arr = getArray()
  console.log('not sorted', arr)
  quick_sort_random_pivot(arr)
  console.log('quick_sort_random_pivot', arr)
  console.log('----------------')

  arr = getArray()
  console.log('not sorted', arr)
  quick_sort_optimized(arr)
  console.log('quick_sort_optimized', arr)
  console.log('----------------')

  arr = getArray()
  console.log('not sorted', arr)
  merge_sort(arr)
  console.log('merge_sort', arr)
  console.log('----------------')
}
test()
