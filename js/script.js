const addBtn = document.querySelector("#main .add");
const logo = document.querySelector(".logo");
let colors = [
  "var(--Yellow)",
  "var(--Green)",
  "var(--Pink)",
  "var(--Blue)",
  "var(--Lavender)",
  "var(--Orange)",
  "var(--Purple)",
  "var(--Lemon)",
  "var(--Cream)",
  "var(--Coral)",
  "var(--Lilac)"
];

function add() {
  let index = Math.floor(Math.random() * colors.length);
  let color = colors[index];

  // Create note container
  let noteContainer = document.createElement("div");
  noteContainer.classList.add("note-container");

  // Create textarea
  let textarea = document.createElement("textarea");
  textarea.placeholder = "Write your note here...";
  textarea.style.backgroundColor = color;
  textarea.style.width = "100%";
  textarea.style.minHeight = "250px";
  textarea.style.padding = "20px";
  textarea.style.fontSize = "22px";
  textarea.style.borderRadius = "10px";
  textarea.style.fontFamily = '"Patrick Hand", cursive';
  textarea.style.letterSpacing = "2px";
  textarea.style.border = "1px solid white";
  textarea.style.textAlign = "left";
  textarea.style.verticalAlign = "top";
  textarea.style.resize = "none"; // Prevent resizing

  // Create delete button
  let delBtn = document.createElement("button");
  delBtn.classList.add("delBtn");
  delBtn.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1"/></svg>`;
  delBtn.onclick = function() {
    noteContainer.remove();
  };

  // Append textarea and delete button to note container
  noteContainer.appendChild(textarea);
  noteContainer.appendChild(delBtn);

  // Append note container to notes section
  document.querySelector(".notes").prepend(noteContainer);

  // Update add button and logo color
  addBtn.style.backgroundColor = color;
  logo.style.color = color;
}

function del(elem) {
  elem.parentElement.remove();
}