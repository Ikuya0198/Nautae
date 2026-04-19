/* ===== CUSTOM CURSOR ===== */
(function () {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  var dot = document.createElement("div");
  dot.className = "cursor";
  var labelEl = document.createElement("span");
  labelEl.className = "cursor-label";
  dot.appendChild(labelEl);
  document.body.appendChild(dot);

  document.addEventListener("mousemove", function (e) {
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
    dot.classList.add("visible");
  });
  document.addEventListener("mouseleave", function () {
    dot.classList.remove("visible");
  });

  function getLabel(t) {
    if (t.closest(".nav-logo, .loader-logo-img, .footer-brand")) return null;
    if (t.closest("img")) return "View";
    if (t.closest(".btn-cart:not([disabled])")) return "Order";
    if (t.closest(".btn-outline, .tl-link, .btn-send-inquiry"))
      return "Explore";
    return null;
  }

  document.addEventListener("mouseover", function (e) {
    var isInteractive = e.target.closest(
      "a, button, input, select, label, [role='button']",
    );
    if (isInteractive) dot.classList.add("hover");
    var lbl = getLabel(e.target);
    if (lbl) {
      labelEl.textContent = lbl;
      dot.classList.add("labeled");
    }
  });
  document.addEventListener("mouseout", function (e) {
    if (e.target.closest("a, button, input, select, label, [role='button']")) {
      dot.classList.remove("hover");
    }
    if (getLabel(e.target)) {
      labelEl.textContent = "";
      dot.classList.remove("labeled");
    }
  });
})();

/* ===== SCROLL TO TOP ===== */
(function () {
  var btn = document.createElement("button");
  btn.id = "scroll-top";
  btn.setAttribute("aria-label", "Scroll to top");
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "14");
  svg.setAttribute("height", "14");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "1.8");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  var poly = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
  poly.setAttribute("points", "18 15 12 9 6 15");
  svg.appendChild(poly);
  btn.appendChild(svg);
  document.body.appendChild(btn);

  window.addEventListener(
    "scroll",
    function () {
      btn.classList.toggle("visible", window.scrollY > 400);
    },
    { passive: true },
  );
  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();

/* ===== HAMBURGER MENU ===== */
(function () {
  var burger = document.getElementById("nav-burger");
  var menu = document.getElementById("mobile-menu");
  if (!burger || !menu) return;

  burger.addEventListener("click", function () {
    var open = burger.classList.toggle("open");
    menu.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
  });

  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      burger.classList.remove("open");
      menu.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
})();
