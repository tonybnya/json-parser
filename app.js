// Get elements
const textContent = document.getElementById('text-editor');
const jsonContent = document.getElementById('json-editor');

const textLineNumbers = document.querySelector('.text-line-numbers');
const jsonLineNumbers = document.querySelector('.json-line-numbers');

const parseBtn = document.getElementById('btn-parse');

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

// JSON Parser function
const JSONParser = (input) => {
  const edgeCases = ["", "{}", "[]", "true", "false", "null"];

  if (edgeCases.includes(input)) {
    return JSON.stringify(input);
  }
};

// Event listeners
textContent.addEventListener('input', updateTextLineNumbers);
jsonContent.addEventListener('input', updateJsonLineNumbers);

parseBtn.addEventListener('click', () => {
  const input = textContent.value;
  
  jsonContent.innerText = JSONParser(input);
});