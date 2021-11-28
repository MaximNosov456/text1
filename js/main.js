$(function () {
  const swiper = new Swiper(".swiper-realization", {
    loop: true,
    navigation: {
      nextEl: ".swiper-realization-next",
      prevEl: ".swiper-realization-prev",
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
  });

  // Modal
  $(".realization__btn").on("click", function () {
    $(".modal-overlay").fadeIn();
  });

  $(".modal__close").on("click", function () {
    $(".modal-overlay").fadeOut();
  });

  $("input[name=phone]").mask("+7(999) 999-99-99");

  $(".modal__form").on("submit", function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      $(".modal__form").trigger("reset");
      $(".modal-overlay").fadeOut();
      return false;
    });
  });
});
