var $tickerWrapper = $(".hero__name");
var $list = $tickerWrapper.find("ul.list");
var $clonedList = $list.clone();
var listWidth = 10;

$list.find("li").each(function (i) {
  listWidth += $(this, i).outerWidth(true);
});

var endPos = $tickerWrapper.width() - listWidth;

$list.add($clonedList).css({
  width: listWidth + "px",
});

$clonedList.addClass("cloned").appendTo($tickerWrapper);

//TimelineMax
var infinite = new TimelineMax({ repeat: -1, paused: true });
var time = 150;

infinite
  .fromTo(
    $list,
    time,
    { rotation: 0.01, x: 0 },
    { force3D: true, x: -listWidth, ease: Linear.easeNone },
    0
  )
  .fromTo(
    $clonedList,
    time,
    { rotation: 0.01, x: listWidth },
    { force3D: true, x: 0, ease: Linear.easeNone },
    0
  )
  .set($list, { force3D: true, rotation: 0.01, x: listWidth })
  .to(
    $clonedList,
    time,
    { force3D: true, rotation: 0.01, x: -listWidth, ease: Linear.easeNone },
    time
  )
  .to(
    $list,
    time,
    { force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone },
    time
  )
  .progress(1)
  .progress(0)
  .play();

//Pause/Play
$tickerWrapper
  .on("mouseenter", function () {
    infinite.pause();
  })
  .on("mouseleave", function () {
    infinite.play();
  });

document.querySelector(".menuCheckbox").addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const menuCheckbox = document.getElementById("menuCheckbox");
  const menuToggle = document.querySelector(".menuToggle");
  const menuLinks = document.querySelectorAll(".menu a");

  menuCheckbox.addEventListener("change", function () {
    if (menuCheckbox.checked) {
      menuToggle.classList.add("menu-open");
    } else {
      menuToggle.classList.remove("menu-open");
    }
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      menuToggle.classList.remove("menu-open");
      menuCheckbox.checked = false;
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 2) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
});
