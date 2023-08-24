const root = document.documentElement;
export const darkModeHandle = () => {
  const darkModeSwitcher = document.getElementById("toggleDarkMode");
  const htmlElement = document.documentElement; //при входе на страницу, проверяет, есть ли в localStorage сохраненный режим темной темы
  if (localStorage.getItem("mode") === "dark") {
    // если да, устанавливает темную тему
    htmlElement.classList.add("dark");
    darkModeSwitcher.checked = true;
    root.style.setProperty('--scrollbar-track-bg', 'rgb(39 39 42)');
    root.style.setProperty('--scrollbar-thumb-bg', '#888');
    const links = document.querySelectorAll('link[rel="apple-touch-icon"], link[rel="icon"]');
    links.forEach(function(link) {
      const newHref = link.getAttribute('href').replace('public/favicon/light/', 'public/favicon/dark/');
      link.setAttribute('href', newHref);
    });
  }
  // при нажатии на свитчер, меняется тема и сохраняется значение соответствующего режима в localStorage
  darkModeSwitcher.addEventListener("input", () => {
    htmlElement.classList.toggle("dark");

    if (htmlElement.classList.contains("dark")) {
      localStorage.setItem("mode", "dark");
      const links = document.querySelectorAll('link[rel="apple-touch-icon"], link[rel="icon"]');
      links.forEach(function(link) {
        const newHref = link.getAttribute('href').replace('public/favicon/light/', 'public/favicon/dark/');
        link.setAttribute('href', newHref);
      });
      root.style.setProperty('--scrollbar-track-bg', 'rgb(39 39 42)');
      root.style.setProperty('--scrollbar-thumb-bg', '#888');
    } else {
      localStorage.setItem("mode", "light");
      const links = document.querySelectorAll('link[rel="apple-touch-icon"], link[rel="icon"]');
      links.forEach(function(link) {
        const newHref = link.getAttribute('href').replace('public/favicon/dark/', 'public/favicon/light/');
        link.setAttribute('href', newHref);
      });
      root.style.setProperty('--scrollbar-track-bg', 'rgb(224 231 255)');
      root.style.setProperty('--scrollbar-thumb-bg', 'rgb(165 180 252)');
    }
  });
};
