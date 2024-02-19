// Get elements
// const editorContent = document.getElementById('json-editor');
const textContent = document.getElementById('text-editor');
const jsonContent = document.getElementById('json-editor');

const textLineNumbers = document.querySelector('.text-line-numbers');
const jsonLineNumbers = document.querySelector('.json-line-numbers');

// Update text line numbers
const updateTextLineNumbers = () => {
  const textLines = textContent.value.split('\n');
  const textLineNumbersHTML = textLines.map((_, index) => index + 1).join('\n');
  textLineNumbers.textContent = textLineNumbersHTML;
};

// Update json line numbers
const updateJsonLineNumbers = () => {
  const jsonLines = jsonContent.value.split('\n');
  const jsonLineNumbersHTML = jsonLines.map((_, index) => index + 1).join('\n');
  jsonLineNumbers.textContent = jsonLineNumbersHTML;
};

// Event listeners
textContent.addEventListener('input', updateTextLineNumbers);
jsonContent.addEventListener('input', updateJsonLineNumbers);

// saveBtn.addEventListener('click', saveContent);
// loadBtn.addEventListener('click', loadContent);

// const saveBtn = document.getElementById('save-btn');
// const loadBtn = document.getElementById('load-btn');

// // Save content to localStorage
// const saveContent = () => {
//   const content = editorContent.value;
//   localStorage.setItem('editorContent', content);
//   alert('Content saved successfully!');
// };

// // Load content from localStorage
// const loadContent = () => {
//   const content = localStorage.getItem('editorContent');
//   if (content) {
//     editorContent.value = content;
//     updateLineNumbers();
//     alert('Content loaded successfully!');
//   } else {
//     alert('No content found!');
//   }
// };
