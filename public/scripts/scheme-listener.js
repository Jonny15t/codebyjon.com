document.addEventListener("DOMContentLoaded", function () {
  const preferredScheme = localStorage.getItem("scheme");
  const systemPreference = getSystemPreference();

  if (preferredScheme) {
    return setColorScheme(preferredScheme);
  }

  setColorScheme(systemPreference);

  window
    .matchMedia("(prefers-color-scheme: dark")
    .addEventListener("change", function (e) {
      if (e.matches) {
        return setColorScheme("dark");
      }
      setColorScheme("light");
    });
});

function setColorScheme(scheme) {
  document.documentElement.setAttribute("scheme", scheme);
}

function getSystemPreference() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
