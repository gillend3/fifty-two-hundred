const textInput = document.getElementById("textInput");
const wordCountElement = document.getElementById("wordCount");
const wordList = document.getElementById("wordList");

let wordCount = 0;
let uniqueWords = new Set();

function updateWordCount() {
  const text = textInput.value.trim();
  const words = text.match(/\b\w+\b/g);
  const currentWordCount = words ? words.length : 0;

  if (currentWordCount > 200) {
    const trimmedText = text.split(/\b\w+\b/).slice(0, 200).join(" ");
    textInput.value = trimmedText;
  }

  // Update word count
  wordCount = Math.min(currentWordCount, 200);
  wordCountElement.textContent = "Word Count: " + wordCount;

  // Check for new unique words
  if (currentWordCount > wordCount) {
    const newWords = words.slice(wordCount);
    newWords.forEach((word) => {
      if (!uniqueWords.has(word) && uniqueWords.size < 50) {
        uniqueWords.add(word);
        const listItem = document.createElement("li");
        listItem.textContent = word;
        wordList.appendChild(listItem);
      }
    });
  }
}

textInput.addEventListener("input", updateWordCount);
