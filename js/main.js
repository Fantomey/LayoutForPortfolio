const darkModeBtn = document.querySelector(".dark-mode-btn");


// 1. Check Windows Scheme
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  darkModeBtn.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
}

// 2. Write in Local Storage

if (localStorage.getItem('darkMode') === 'dark') {

  darkModeBtn.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
} else if (localStorage.getItem('darkMode') === "light") {

  darkModeBtn.classList.remove("dark-mode-btn--active");
  document.body.classList.remove("dark");
}

// 3. Swap Windows Scheme
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener('change', (event) => {
    const newColorScheme = event.matches ? "dark" : "light";



    if (newColorScheme === 'dark') {

      darkModeBtn.classList.add("dark-mode-btn--active");
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "dark");

    } else {
      darkModeBtn.classList.remove("dark-mode-btn--active");
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "light");
    }
  })

// On Night mode 
darkModeBtn.onclick = function () {
  darkModeBtn.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle('dark');




  if (isDark) {
    localStorage.setItem('darkMode', 'dark')

  } else {
    localStorage.setItem('darkMode', 'light')
  }
}
