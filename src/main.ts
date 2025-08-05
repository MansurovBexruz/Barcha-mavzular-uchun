const lightMode = document.querySelector('#light-mode') as HTMLDivElement;
const darkMode = document.querySelector('#dark-mode') as HTMLDivElement;
const darkBtn = document.querySelector('#dark') as HTMLButtonElement;
const lightBtn = document.querySelector('#light') as HTMLButtonElement;

darkBtn.addEventListener('click', () => {
  lightMode.classList.add('hidden');
  darkMode.classList.remove('hidden');
  document.body.style.backgroundColor = '#141416';
});

lightBtn.addEventListener('click', () => {
  darkMode.classList.add('hidden');
  lightMode.classList.remove('hidden');
  document.body.style.backgroundColor = '#FFFFFF';
});