/* ===== CUSTOM CURSOR ===== */
(function () {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  var dot = document.createElement("div");
  dot.className = "cursor";
  document.body.appendChild(dot);

  document.addEventListener("mousemove", function (e) {
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
    dot.classList.add("visible");
  });
  document.addEventListener("mouseleave", function () {
    dot.classList.remove("visible");
  });
  document.addEventListener("mouseover", function (e) {
    if (e.target.closest("a, button, input, select, label, [role='button']")) {
      dot.classList.add("hover");
    }
  });
  document.addEventListener("mouseout", function (e) {
    if (e.target.closest("a, button, input, select, label, [role='button']")) {
      dot.classList.remove("hover");
    }
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
