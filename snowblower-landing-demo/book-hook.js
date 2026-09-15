/* Sends landing CTAs to the shop-command 3-card /book wizard.
 * Pickup → ?job=Pickup
 * At-home / tune-up → ?job=Tune-up
 * Drop-off → ?job=Drop-off
 * Hides the on-page #booking form.
 * Leaves tel: and sms: alone.
 */
(function () {
  var BOOK_URL = "https://shop-command-phi.vercel.app/book";

  function jobFromPreset(preset) {
    var value = String(preset || "").toLowerCase();
    if (value.indexOf("home") !== -1 || value.indexOf("tune") !== -1) return "Tune-up";
    if (value.indexOf("drop") !== -1) return "Drop-off";
    return "Pickup";
  }

  function openBook(preset) {
    window.location.href = BOOK_URL + "?job=" + encodeURIComponent(jobFromPreset(preset));
  }

  function hideBottomForm() {
    var booking = document.getElementById("booking");
    if (booking) booking.style.display = "none";
  }

  function onReady() {
    hideBottomForm();
    var hero = document.getElementById("open-form");
    if (hero) {
      hero.addEventListener("click", function (event) {
        event.preventDefault();
        openBook("Pickup");
      });
    }
    document.querySelectorAll(".open-form").forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        openBook(button.getAttribute("data-service"));
      });
    });
    var form = document.getElementById("booking-form");
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var selected = document.querySelector('input[name="service-type"]:checked');
        openBook(selected ? selected.value : "Pickup");
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady);
  } else {
    onReady();
  }
})();
