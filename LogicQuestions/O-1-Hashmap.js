/**
 * Implement a hashmap that has this API:
 * - get(key)
 * - set(key, value)
 * - setAll(value)
 * All should be done in O(1)
 */

class Hashmap {
  constructor () {
    this.master = { value: null, version: 0 }
    this.values = {}
  }
  get (key) {
    if (!this.values[key]) {
      return null
    }
    if (this.values[key].version > this.master.version) {
      return this.values[key].value
    } else {
      return this.master.value
    }
  }
  set (key, value) {
    this.values[key] = {
      value,
      version: this.master.version + 1
    }
  }
  setAll (value) {
    this.master = {
      value,
      version: this.master.version + 2
    }
  }
}
