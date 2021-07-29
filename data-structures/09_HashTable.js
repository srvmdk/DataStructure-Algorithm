/**
 * @class HashTable
 * @link https://cs.slides.com/colt_steele/hash-tables
 */

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  // https://cs.slides.com/colt_steele/hash-tables#/25
  #hash(key) {
    const WIRED_PRIME = 13;
    let total = 0;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key.charCodeAt(i) - 96;
      total = (total * WIRED_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // https://cs.slides.com/colt_steele/hash-tables#/26
  set(key, value) {
    const index = this.#hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    } else {
      // current block overwrites the existing value for same key
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          this.keyMap[index][i][1] = value;
          return;
        }
      }
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this.#hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
      }
    }
  }

  #helper(option) {
    if (option === 'key') option = 0;
    else option = 1;

    const arr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // checking duplicates and restrict in output
          if (!arr.includes(this.keyMap[i][j][option])) {
            arr.push(this.keyMap[i][j][option]);
          }
        }
      }
    }
    return arr;
  }

  keys() {
    return this.#helper('key');
  }

  values() {
    return this.#helper('value');
  }
}

const hashTable = new HashTable();

hashTable.set('white', 'White');
hashTable.set('orange', 'Orange');
hashTable.set('cyan', 'Cyan');
hashTable.set('pink', 'Pink');
hashTable.set('whitishRed', 'Pink');
hashTable.set('pink', 'Pinki');
