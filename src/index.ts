const unique = (str: string): number => {
  const hash: { [key: string]: number } = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (hash[char]) {
      hash[char]++;
    } else {
      hash[char] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (hash[letter] === 1) return i;
  }

  return -1;
};

console.log(unique("9089078890"));
