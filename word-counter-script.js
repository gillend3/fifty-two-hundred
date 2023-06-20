<script>
    // Maximum word limit
    const MAX_WORDS = 200;
    
    // Maximum unique word limit
    const MAX_UNIQUE_WORDS = 50;
    
    // Event listener for text input
    const textInput = document.getElementById('textInput');
    textInput.addEventListener('input', updateWordCounter);
    
    function updateWordCounter() {
      const text = textInput.value.trim();
      
      // Count total words
      const wordCount = text === '' ? 0 : text.split(/\s+/).length;
      document.getElementById('wordCount').textContent = wordCount;
      
      // Count unique words
      const words = text.toLowerCase().match(/\b\w+\b/g) || [];
      const uniqueWords = [...new Set(words)];
      
      // Check if maximum unique word limit is reached
      const wordList = document.getElementById('wordList');
      if (uniqueWords.length > MAX_UNIQUE_WORDS) {
        textInput.value = removeExcessWords(text, words, uniqueWords);
        return;
      }
      
      // Display unique words in alphabetical order
      uniqueWords.sort();
      wordList.innerHTML = '';
      uniqueWords.forEach((word, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${word}`;
        wordList.appendChild(listItem);
      });
      
      // Check if maximum word limit is reached
      if (wordCount >= MAX_WORDS) {
        textInput.value = text.substr(0, textInput.selectionStart);
      }
    }
    
    // Helper function to remove excess words
    function removeExcessWords(text, words, uniqueWords) {
      const excessWords = uniqueWords.slice(MAX_UNIQUE_WORDS);
      const regex = new RegExp(`\\b(${excessWords.join('|')})\\b`, 'gi');
      return text.replace(regex, '');
    }
