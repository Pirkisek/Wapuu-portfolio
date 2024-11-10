console.log("Portfolio site loaded");
//theme change
const themeToggle = document.querySelector("#theme-toggle");
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.dataset.theme;
  document.documentElement.dataset.theme = currentTheme === "light" ? "dark" : "light";
});

function skibidi() {
    document.write('Skibidi Toilet');
}