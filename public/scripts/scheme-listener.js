document.addEventListener("DOMContentLoaded", function () {
  const preferredScheme = localStorage.getItem("scheme");
  if (preferredScheme) {
    return document.documentElement.setAttribute("scheme", preferredScheme);
  }
  const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";

  document.documentElement.setAttribute("scheme", systemPreference);
});
