const textarea = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

textarea.addEventListener("input", () => {
  const text = textarea.value.trim();
  const words = text === "" ? 0 : text.split(/\s+/).length;
  const chars = text.length;
  wordCount.textContent = words;
  charCount.textContent = chars;
});
