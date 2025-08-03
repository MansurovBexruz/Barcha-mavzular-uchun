const lightMode = document.querySelector("#light-mode") as HTMLDivElement;
const darkMode = document.querySelector("#dark-mode") as HTMLDivElement;
const darkBtn = document.querySelector("#dark") as HTMLButtonElement;
const lightBtn = document.querySelector("#light") as HTMLButtonElement;

darkBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#141416";
  lightMode.style.display = "none";
  darkMode.style.display = "block";
});
lightBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#fff";
  darkMode.style.display = "none";
  lightMode.style.display = "block";
});
