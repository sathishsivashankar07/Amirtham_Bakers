// Header -> social media content function
function toggleSocialContent() {
  const socialContent = document.getElementById("social-content");
  if (!socialContent) return;

  if (window.innerWidth < 768) {
    socialContent.style.display = "none";
  } else {
    socialContent.style.display = "flex";
  }
}
toggleSocialContent();
window.addEventListener("resize", toggleSocialContent);

// Navbar menu hide
function toggleNavbarContent() {
  const navbarContents = document.querySelectorAll(".navbar-hide");

  navbarContents.forEach((element) => {
    element.style.display = window.innerWidth < 1025 ? "none" : "flex";
  });

  const hamburger = document.getElementById("hamburger");
  if (window.innerWidth < 1025) {
    hamburger.style.display = "flex";
  } else {
    hamburger.style.display = "none";
  }
}
toggleNavbarContent();
window.addEventListener("resize", toggleNavbarContent);

// hamburger menu
function hamburgerFunction() {
  const menu = document.getElementById("mobile-menu");
  const hamburger = document.getElementById("hamburger");

  menu.classList.toggle("active");
  hamburger.classList.toggle("change");
}

// odometer ================
const createOdometer = (el, value) => {
  const odometer = new Odometer({
    el: el,
    value: 0,
  });

  let hasRun = false;

  const options = {
    threshold: 0.1,
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasRun) {
        odometer.update(value);
        hasRun = true;
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(el);
};

document.addEventListener("DOMContentLoaded", () => {
  const dailyVisitersOdometer = document.querySelector(
    ".daily-visiters-odometer"
  );
  createOdometer(dailyVisitersOdometer, 300);
});
document.addEventListener("DOMContentLoaded", () => {
  const dailyRecipesOdometer = document.querySelector(
    ".recipes-created-odometer"
  );
  createOdometer(dailyRecipesOdometer, 50);
});
document.addEventListener("DOMContentLoaded", () => {
  const eventsHostedOdometer = document.querySelector(
    ".events-hosted-odometer"
  );
  createOdometer(eventsHostedOdometer, 120);
});
document.addEventListener("DOMContentLoaded", () => {
  const happyCustomerOdometer = document.querySelector(
    ".happy-customer-odometer"
  );
  createOdometer(happyCustomerOdometer, 500);
});
// odometer end ============

// our pricing image change =============================
function changeImage(evt, imageName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(imageName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
// our pricing image change end =========================

// testimonials js =====================================
document.addEventListener("DOMContentLoaded", function () {
  let nextButton = document.getElementById("next");
  let prevButton = document.getElementById("prev");
  let list = [].slice.call(document.querySelector(".testContainer").children);

  function findActiveList() {
    let activeList = list.findIndex((e) => {
      return e.classList.contains("active");
    });

    list[activeList].classList.remove(
      "active",
      "animate__fadeInRight",
      "animate__fadeInLeft",
      "animate__animated"
    );
    return activeList;
  }

  function slideShow() {
    let activeList = findActiveList();

    activeList++;
    activeList = activeList === list.length ? 0 : activeList;

    list[activeList].classList.add(
      "active",
      "animate__fadeInRight",
      "animate__animated"
    );
  }

  setInterval(slideShow, 5000);

  nextButton.addEventListener("click", slideShow);

  prevButton.addEventListener("click", () => {
    let activeList = findActiveList();

    activeList--;
    activeList = activeList === -1 ? list.length - 1 : activeList;

    list[activeList].classList.add(
      "active",
      "animate__fadeInLeft",
      "animate__animated"
    );
  });
});
// testimonials js end =================================