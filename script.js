// ページ読み込み後に初期アニメーションを制御
document.addEventListener("DOMContentLoaded", function () {

  // 第一プリローダーを4秒間表示
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("fade-out");

    // フェードアウト後、非表示 → 第二プリローダーfade-in
    setTimeout(() => {
      preloader.remove();

      const second = document.getElementById("second-preloader");
      second.classList.add("fade-in");
      second.style.pointerEvents = "auto";

      // 第二プリローダーを2.5秒表示
      setTimeout(() => {
        second.classList.add("fade-out");

        // 完全にfade-outした後に非表示 → mainフェードイン（構造を統一）
        setTimeout(() => {
          second.remove();

          const main = document.getElementById("main-container");
          main.classList.remove("hidden");
          main.classList.add("fade-in");
          document.body.style.overflow = "auto";

          // main.html の内容を挿入
          loadMainContent();
        }, 1000); // 第二fade-out後
      }, 2000); // 第二表示時間
    }, 1000); // 第一fade-out完了後
  }, 4000); // 第一表示時間

  // メイン画面の初期化（スライドショーやメニュー）
  // window.initializeMainScripts = function () {
  //   const menuBtn = document.querySelector('.hamburger');
  //   if (menuBtn) {
  //     menuBtn.onclick = function () {
  //       const menu = document.querySelector('.nav-menu');
  //       if (menu) {
  //         const current = window.getComputedStyle(menu).display;
  //         menu.style.display = (current === 'none') ? 'flex' : 'none';
  //       }
  //     };
  //   }
  // };
});



// main.html を読み込んで main-container に表示する関数
function loadMainContent() {
  fetch('main.html')
    .then(response => response.text())
    .then(html => {
      const main = document.getElementById("main-container");
      main.innerHTML = html;
      main.classList.remove("hidden");
      main.classList.add("fade-in");
      document.body.style.overflow = "auto";
      initializeMainScripts();
    });
}



window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader-wrapper");
  if (preloader) {
    console.log("💥 プリローダー削除します");
    preloader.remove();
  } else {
    console.warn("⚠️ プリローダー見つかりませんでした");
  }
});

function initializeMainScripts() {
  const slides = document.querySelectorAll('.slideshow .slide');
  let current = 0;

  if (window.slideshowInterval) clearInterval(window.slideshowInterval);

  if (slides.length > 0) {
    slides[current].classList.add('show');
    window.slideshowInterval = setInterval(() => {
      slides[current].classList.remove('show');
      current = (current + 1) % slides.length;
      slides[current].classList.add('show');
    }, 5000);
  }
}
