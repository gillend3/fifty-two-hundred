// Maximum word limit
const MAX_WORDS = 200;

// Maximum unique word limit
const MAX_UNIQUE_WORDS = 50;

// Sample text for testing
const sampleText = "This is a sample text. This text contains some words that are repeated. The word counter should count unique words.";

function updateWordCounter(text) {
  const trimmedText = text.trim();

  // Count total words
  const wordCount = trimmedText === '' ? 0 : trimmedText.split(/\s+/).length;
  console.log(`Word Count: ${wordCount}`);

  // Count unique words
  const words = trimmedText.toLowerCase().match(/\b\w+\b/g) || [];
  const uniqueWords = [...new Set(words)];

  // Check if maximum unique word limit is reached
  if (uniqueWords.length > MAX_UNIQUE_WORDS) {
    text = removeExcessWords(text, words, uniqueWords);
  }

  // Display unique words in alphabetical order
  uniqueWords.sort().forEach((word, index) => {
    console.log(`${index + 1}. ${word}`);
  });

  // Check if maximum word limit is reached
  if (wordCount >= MAX_WORDS) {
    text = text.substr(0, MAX_WORDS);
  }

  console.log('Updated text:', text);
}

// Helper function to remove excess words
function removeExcessWords(text, words, uniqueWords) {
  const excessWords = uniqueWords.slice(MAX_UNIQUE_WORDS);
  const regex = new RegExp(`\\b(${excessWords.join('|')})\\b`, 'gi');
  return text.replace(regex, '');
}

// Example usage
updateWordCounter(sampleText);
