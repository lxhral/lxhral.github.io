const NS = "http://www.w3.org/2000/svg";

function makeSVG(width, height) {
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.style.border = "1px solid #ddd";
  svg.style.borderRadius = "12px";
  return svg;
}

// ===== Visualization 1: simple bar chart =====
const data = [
  { label: "HTML", value: 80 },
  { label: "CSS", value: 70 },
  { label: "JS", value: 60 },
  { label: "Tableau", value: 65 },
];

(function drawBarChart() {
  const width = 700, height = 260;
  const svg = makeSVG(width, height);

  const padding = 40;
  const barH = 28;
  const gap = 14;

  data.forEach((d, i) => {
    const y = padding + i * (barH + gap);

    // label
    const text = document.createElementNS(NS, "text");
    text.setAttribute("x", 20);
    text.setAttribute("y", y + 18);
    text.textContent = d.label;
    text.setAttribute("font-size", "14");
    svg.appendChild(text);

    // bar
    const bar = document.createElementNS(NS, "rect");
    bar.setAttribute("x", 120);
    bar.setAttribute("y", y);
    bar.setAttribute("height", barH);
    bar.setAttribute("width", (d.value / 100) * 520);
    bar.setAttribute("rx", 10);
    svg.appendChild(bar);

    // value
    const v = document.createElementNS(NS, "text");
    v.setAttribute("x", 120 + (d.value / 100) * 520 + 10);
    v.setAttribute("y", y + 18);
    v.textContent = d.value;
    v.setAttribute("font-size", "14");
    svg.appendChild(v);
  });

  document.getElementById("viz1").appendChild(svg);
})();

// ===== Visualization 2: creative generative art =====
(function drawArt() {
  const width = 700, height = 300;
  const svg = makeSVG(width, height);

  for (let i = 0; i < 45; i++) {
    const c = document.createElementNS(NS, "circle");
    c.setAttribute("cx", Math.random() * width);
    c.setAttribute("cy", Math.random() * height);
    c.setAttribute("r", 8 + Math.random() * 35);
    c.setAttribute("opacity", "0.35");
    svg.appendChild(c);
  }

  document.getElementById("viz2").appendChild(svg);
})();
