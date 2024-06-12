const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    // Your code here
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
    this.count = 0;
  }

  hash(key) {
    // Your code here

     // Step 1: Hash the key using SHA-256
     const hashValue = sha256(key);

     // Step 2: Extract the first 8 characters
     const first8Chars = hashValue.substring(0, 8);
 
     // Step 3: Convert these 8 characters from hexadecimal to integer
     const intHashValue = parseInt(first8Chars, 16);
 
     return intHashValue;
  }

  hashMod(key) {
    // Your code here
    const hashValue = this.hash(key);
    return hashValue % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    const index = this.hashMod(key);
    if (this.data[index] !== null) {
      throw new Error('hash collision or same key/value pair already exists!');
    }
    this.data[index] = new KeyValuePair(key, value);
    this.count++;
  }
  

  insertWithHashCollisions(key, value) {
    // Your code here
  }

  insert(key, value) {
    // Your code here
  }

}


module.exports = HashTable;