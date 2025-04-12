// プリローダー非表示処理（画像フェードイン後に消える）
const preloader = document.getElementById("preloader");
if (preloader) {
  setTimeout(() => {
    preloader.style.transition = "opacity 1s ease";
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000);
  }, 4500);
}