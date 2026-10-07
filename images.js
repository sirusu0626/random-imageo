const images = [
  "images/image01.jpg",
  "images/image02.jpg",
  "images/image03.jpg",
  "images/image04.jpg",
  "images/image05.png",
  "images/image06.jpg",
  "images/image07.png",
  "images/image08.png",
  "images/image09.png"
];

function drawRandomImage() {
  const index = Math.floor(Math.random() * images.length);
  const image = document.getElementById("result");
  image.src = images[index];
  image.alt = "ランダムに選ばれた画像";
  image.hidden = false;
}
