// Define palettes
const themes = {
  moody: {
    "--bg": "#0f0f11",
    "--fg": "#f4f4f7",
    "--accent": "#7aa6ff",
    "--accent-hover": "#5a85e6",
    "--card-bg": "#1a1a1d",
    "--muted": "#ccc"
  },
  warm: {
    "--bg": "#faf3e0",
    "--fg": "#2c2c2c",
    "--accent": "#e67e22",
    "--accent-hover": "#cf711f",
    "--card-bg": "#fff5e1",
    "--muted": "#666"
  },
  crisp: {
    "--bg": "#ffffff",
    "--fg": "#222222",
    "--accent": "#0077cc",
    "--accent-hover": "#005fa3",
    "--card-bg": "#f4f4f7",
    "--muted": "#555"
  },
  fresh: {
    "--bg": "#f0fff4",
    "--fg": "#1a202c",
    "--accent": "#38a169",
    "--accent-hover": "#2f855a",
    "--card-bg": "#ffffff",
    "--muted": "#4a5568"
  }
};

let current = "moody"; // default

document.getElementById("theme-toggle").addEventListener("click", () => {
  // Cycle through themes
  const order = ["moody", "warm", "crisp", "fresh"];
  let next = order[(order.indexOf(current) + 1) % order.length];
  current = next;

  // Apply CSS variables
  const root = document.documentElement;
  Object.entries(themes[next]).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
});
