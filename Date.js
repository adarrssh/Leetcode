class Node {
    constructor() {
      this.links = new Array(26).fill(null);
      this.flag = false;
    }
  
    containsKey(ch) {
      return this.links[ch.charCodeAt(0) - 'a'.charCodeAt(0)] !== null;
    }
  
    get(ch) {
      return this.links[ch.charCodeAt(0) - 'a'.charCodeAt(0)];
    }
  
    put(ch, node) {
      this.links[ch.charCodeAt(0) - 'a'.charCodeAt(0)] = node;
    }
  
    setEnd() {
      this.flag = true;
    }
  
    isEnd() {
      return this.flag;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new Node();
    }
  
    insert(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        if (!node.containsKey(word[i])) {
          node.put(word[i], new Node());
        }
        node = node.get(word[i]);
      }
      node.setEnd();
    }
  
     checkIfAllPrefixExists(word) {
      let node = this.root;
      let flag = true;
      for (let i = 0; i < word.length; i++) {
        if (node.containsKey(word[i])) {
          node = node.get(word[i]);
          flag = flag && node.isEnd();
        } else {
          return false;
        }
      }
      return flag;
    }
  }
  
  function completeString(n, a) {
    const obj = new Trie();
    for (const word of a) obj.insert(word);
  
    let longest = '';
    for (const word of a) {
      if (obj.checkIfAllPrefixExists(word)) {
        if (word.length > longest.length || (word.length === longest.length && word < longest)) {
          longest = word;
        }
      }
    }
  
    if (longest === '') return 'None';
    return longest;
  }
  
  // Example usage:
  const n = 5;
  const words = ['ab', 'abc', 'bp', 'a'];
  const result = completeString(n, words);
  console.log(result);
  