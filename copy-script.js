function copyText() {
      const inputBox = document.querySelector('.input-box');
      const text = inputBox.innerText;

      // Create a temporary textarea element to perform the copying
      const tempTextarea = document.createElement('textarea');
      tempTextarea.value = text;

      // Append the textarea to the document and select its content
      document.body.appendChild(tempTextarea);
      tempTextarea.select();
      tempTextarea.setSelectionRange(0, tempTextarea.value.length);

      // Copy the selected text to the clipboard
      document.execCommand('copy');

      // Remove the temporary textarea
      document.body.removeChild(tempTextarea);
}
