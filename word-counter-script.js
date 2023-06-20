const textInput = document.getElementById("textInput");
const wordCountElement = document.getElementById("wordCount");
const wordList = document.getElementById("wordList");

let wordCount = 0;
let uniqueWords = new Set();

function updateWordCount() {
  const text = textInput.value;
  const words = text.trim().split(/\s+/);
  const currentWordCount = words.length;

  if (currentWordCount > 200) {
    const trimmedWords = words.slice(0, 200);
    textInput.value = trimmedWords.join(" ");
  }

  // Update word count
  wordCount = Math.min(currentWordCount, 200);
  wordCountElement.textContent = "Word Count: " + wordCount;

  // Check for new unique words
  if (currentWordCount > wordCount) {
    words.slice(wordCount - 1).forEach((word) => {
      if (!uniqueWords.has(word) && uniqueWords.size < 50) {
        uniqueWords.add(word);
        const listItem = document.createElement("li");
        listItem.textContent = word;
        wordList.appendChild(listItem);
      }
    });
  }
}
