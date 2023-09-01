class Formatter {

// Static method to capitalize the first letter of a string
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // Static method to sanitize a string
  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/g, "");
  }

  // Static method to titleize a string
  static titleize(str) {
    const lowercaseWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = str.split(' ');

    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !lowercaseWords.includes(word.toLowerCase())) {
        return this.capitalize(word);
      } else {
        return word;
      }
    });

    return titleizedWords.join(' ');
  }
}