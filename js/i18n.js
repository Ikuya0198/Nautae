/* ===== i18n.js — Nautae Wine Cellar shared language toggle ===== */
(function () {
  "use strict";
  window.NWC_I18N = function (en) {
    var orig = {};
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      orig[el.dataset.i18n] = el.innerHTML;
    });

    function apply(lang) {
      sessionStorage.setItem("nwc_lang", lang);
      document.querySelectorAll("[data-i18n]").forEach(function (el) {
        var k = el.dataset.i18n;
        el.innerHTML =
          lang === "en" && en[k]
            ? en[k]
            : orig[k] !== undefined
              ? orig[k]
              : el.innerHTML;
      });
      document.querySelectorAll(".lang-btn").forEach(function (b) {
        b.classList.toggle("active", b.dataset.lang === lang);
      });
    }

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        apply(btn.dataset.lang);
      });
    });

    apply(sessionStorage.getItem("nwc_lang") || "en");
  };
})();
