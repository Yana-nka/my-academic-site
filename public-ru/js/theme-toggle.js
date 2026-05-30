(function() {
  // Theme toggle functionality for Hugo Academic
  function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.contains("dark");
    if (isDark) {
      body.classList.remove("dark");
      localStorage.setItem("wcTheme", "light");
    } else {
      body.classList.add("dark");
      localStorage.setItem("wcTheme", "dark");
    }
  }

  // Add toggle button to navbar
  window.addEventListener("DOMContentLoaded", function() {
    const navIcons = document.querySelector(".nav-icons");
    if (navIcons) {
      const li = document.createElement("li");
      li.className = "nav-item";
      li.innerHTML = "<a class=\"nav-link js-dark-toggle\" href=\"#\" onclick=\"event.preventDefault(); toggleTheme(); return false;\"><i class=\"fas fa-moon\"></i></a>";
      navIcons.appendChild(li);
    }

    // Respect saved theme
    const saved = localStorage.getItem("wcTheme");
    if (saved === "light") {
      document.body.classList.remove("dark");
    } else if (saved === "dark") {
      document.body.classList.add("dark");
    }
  });

  window.toggleTheme = toggleTheme;
})();
