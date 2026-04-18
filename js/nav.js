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
