let bobwineImages = [
  "https://blizz.co.ug/images/news/438124b4c06f3a5caffab2c07863b617.jpg",
  "https://cyclonetimes.com/wp-content/uploads/2020/01/cyclone-times-robert-Kyagulanyi-Sentamu-images.jpg",
  "	https://observer.ug/images2/people/Bobi-Wine-addresses-media-at-People-Power-offices.png",
  "https://www.sqoop.co.ug/wp-content/uploads/2021/01/IMG-20201107-WA0008.jpg",
  "https://sonkonews.com/wp-content/uploads/2020/11/bobi.jpeg",
  "	https://jalangotv.com/wp-content/uploads/2021/01/B…e-and-Barbie-Share-First-Joint-Magazine-Cover.jpg",
  "	https://observer.ug/images2/people/mps/Bobi-Wine-in-deep-thoughts.jpg",
];

const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
  const randImgs = Math.floor(Math.random() * bobwineImages.length);
  imgs[i].src = bobwineImages[randImgs];
}

// const anchorTags = document.getElementsByTagName("a").text;
// for (let i = 0; i < anchorTags.length; i++) {
//   anchorTags[i].innerText = "Bob is the Next President";
// }
const pTags = document.getElementsByTagName("p");
for (let i = 0; i < pTags.length; i++) {
  pTags[i].innerText = "Bob Wine is the Next President";
}
const hTags = document.getElementsByTagName("h2");
for (let i = 0; i < hTags.length; i++) {
  hTags[i].innerText = "Bob Wine is the Next President";
}
const spanTags = document.getElementsByTagName("span");
for (let i = 0; i < spanTags.length; i++) {
  spanTags[i].innerText = "Bob Wine is the Next President";
}
