document.addEventListener("DOMContentLoaded", function () {
  // visual slide
  AOS.init();
  const visualSlide = new Swiper(".visual-slide", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".visual-slide .arrow-right",
      prevEl: ".visual-slide .arrow-left",
    },
    pagination: {
      el: ".visual-slide .swiper-pagination",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return ("0" + number).slice(-2);
      },
      formatFractionTotal: function (number) {
        return ("0" + number).slice(-2);
      },
      renderFraction: function (currentClass, totalClass) {
        return (
          '<span class="' +
          currentClass +
          '"></span>' +
          " / " +
          '<span class="' +
          totalClass +
          '"></span>'
        );
      },
    },
    on: {
      init: function () {
        this.pagination.update();
      },
      slideChange: function () {
        this.pagination.update();
      },
    },
  });

  // program slide
  const programSwiper = new Swiper(".program-slide .swiper-container", {
    centeredSlides: true,
    navigation: {
      nextEl: ".program-slide .swiper-button-next",
      prevEl: ".program-slide .swiper-button-prev",
    },
    loop: true,
    initialSlide: 2, // 첫 번째 슬라이드를 중앙에 위치
    breakpoints: {
      // 태블릿 화면
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // 데스크톱 화면
      1024: {
        slidesPerView: 1.6,
        spaceBetween: 86,
      },
    },
  });


  // tab
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // 모든 탭에서 active 클래스 제거
      tabs.forEach((t) => t.classList.remove("active"));
      // 클릭된 탭에 active 클래스 추가
      this.classList.add("active");

      // 모든 탭 콘텐츠 숨기기
      tabContents.forEach((content) => content.classList.remove("active"));
      // 클릭된 탭에 해당하는 콘텐츠 표시
      const tabId = this.getAttribute("data-tab");
      const activeContent = document.getElementById(`${tabId}-content`);

      if (activeContent) {
        activeContent.classList.add("active");
      }
    });
  });
});
