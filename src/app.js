// SharePoint intranet demo — lists, library, metadata, permissions, audit.
// All data is local / sample data. No server calls, no real SharePoint tenant.
const sampleNews = [
  { title: "Intranet home page refresh", tag: "Intranet", owner: "Knowledge Team", date: "2026-11-01" },
  { title: "New HR policy documents published", tag: "HR", owner: "HR Team", date: "2026-10-28" },
  { title: "UAT for new team site starts next week", tag: "Testing", owner: "Capability Hub", date: "2026-10-25" }
];
const sampleDocs = [
  { name: "HR-Policy-2026.pdf", type: "PDF", owner: "HR Team", modified: "2026-10-28", tags: ["HR", "Policy"] },
  { name: "Intranet-Content-Guide.docx", type: "Word", owner: "Knowledge Team", modified: "2026-11-01", tags: ["Intranet", "Guide"] },
  { name: "Team-Site-Permissions.xlsx", type: "Excel", owner: "Capability Hub", modified: "2026-10-20", tags: ["Permissions", "Audit"] }
];
const permissions = [
  { area: "Home site", owners: "Knowledge Team", members: "All staff", visitors: "All staff" },
  { area: "HR site", owners: "HR Team", members: "HR Team", visitors: "All staff (read only)" },
  { area: "Projects site", owners: "Capability Hub", members: "Project team", visitors: "Managers" }
];
const audit = [
  { page: "Home page", status: "Current" },
  { page: "HR policies", status: "Needs review" },
  { page: "Old project pages (2024)", status: "Out of date — archive or delete" }
];

function renderNews(filter = "") {
  const list = document.getElementById("news-list");
  const home = document.getElementById("home-news");
  const items = sampleNews.filter(n => !filter || n.tag === filter);
  list.innerHTML = items.map(n => `<li><strong>${n.title}</strong> — ${n.tag} · ${n.owner} · ${n.date}</li>`).join("");
  home.innerHTML = sampleNews.slice(0, 3).map(n => `<li>${n.title}</li>`).join("");
  const sel = document.getElementById("news-filter");
  if (sel.options.length <= 1) {
    [...new Set(sampleNews.map(n => n.tag))].forEach(t => {
      const o = document.createElement("option"); o.value = t; o.textContent = t; sel.appendChild(o);
    });
  }
}
function renderDocs(query = "") {
  const list = document.getElementById("doc-list");
  const items = sampleDocs.filter(d => d.name.toLowerCase().includes(query.toLowerCase()));
  list.innerHTML = items.map(d => `<li><strong>${d.name}</strong> (${d.type}) — ${d.owner} · ${d.modified} · Tags: ${d.tags.join(", ")}</li>`).join("");
}
document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("nav button").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
  });
});
document.getElementById("news-filter").addEventListener("change", e => renderNews(e.target.value));
document.getElementById("doc-search").addEventListener("input", e => renderDocs(e.target.value));
document.getElementById("news-form").addEventListener("submit", e => {
  e.preventDefault();
  const title = document.getElementById("news-title").value.trim();
  const tag = document.getElementById("news-tag").value.trim() || "General";
  if (!title) return;
  sampleNews.unshift({ title, tag, owner: "Demo user", date: new Date().toISOString().slice(0, 10) });
  renderNews(); e.target.reset();
});
document.getElementById("home-events").innerHTML = "<li>UAT session — next week</li><li>Content audit — monthly</li>";
document.querySelector("#perm-table tbody").innerHTML = permissions.map(p => `<tr><td>${p.area}</td><td>${p.owners}</td><td>${p.members}</td><td>${p.visitors}</td></tr>`).join("");
document.getElementById("audit-list").innerHTML = audit.map(a => `<li><strong>${a.page}:</strong> ${a.status}</li>`).join("");
renderNews(); renderDocs();
