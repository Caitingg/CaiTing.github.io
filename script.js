// ====== EDIT YOUR CONTENT HERE ======
const projects = [
  {
    title: "Test Plan: Web Application",
    description: "Designed test cases, ran manual and exploratory testing, and documented defects for a course project.",
    tags: ["Software testing", "Test cases", "Bug reports"],
    link: "#"
  },
  {
    title: "Biomedical Device Project",
    description: "Describe the problem, what you built or analysed, and the result.",
    tags: ["Biomedical", "Engineering"],
    link: "#"
  },
  {
    title: "Game Prototype",
    description: "A small game you made. Mention the engine, your role and what you learned.",
    tags: ["Game dev", "Design"],
    link: "#"
  }
];

// Put image files in the images/ folder, then list them here.
const photos = [
  // { src: "images/photo1.jpg", alt: "Describe the photo" },
];
// ====================================

const list = document.getElementById("project-list");
projects.forEach(p => {
  const el = document.createElement("article");
  el.className = "card";
  el.innerHTML = `
    <h3>${p.title}</h3>
    <p>${p.description}</p>
    <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
    ${p.link && p.link !== "#" ? `<a class="link" href="${p.link}" target="_blank" rel="noopener">View project →</a>` : ""}`;
  list.appendChild(el);
});

const gallery = document.getElementById("gallery");
photos.forEach(ph => {
  const f = document.createElement("figure");
  f.innerHTML = `<img src="${ph.src}" alt="${ph.alt}" loading="lazy">`;
  gallery.appendChild(f);
});
if (!photos.length) gallery.style.display = "none";

document.getElementById("year").textContent = new Date().getFullYear();

const root = document.documentElement;
const saved = (() => { try { return localStorage.getItem("theme"); } catch { return null; } })();
if (saved) root.dataset.theme = saved;
document.getElementById("theme").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch {}
});
