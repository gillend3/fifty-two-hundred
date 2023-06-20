const textInput = document.getElementById("textInput");
const wordCountElement = document.getElementById("wordCount");
const wordList = document.getElementById("wordList");

let wordCount = 0;
let uniqueWords = new Set();

function updateWordCount() {
  const text = textInput.value;
  const words = text.match(/\b\w+\b/g) || [];
  const currentWordCount = words.length;

  if (currentWordCount > 200) {
    textInput.value = text.substr(0, 200);
    return;
  }

  if (currentWordCount > wordCount) {
    // Update word count
    wordCount = currentWordCount;
    wordCountElement.textContent = "Word Count: " + wordCount;

    // Check for new unique words
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
