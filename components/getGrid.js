import { getImages } from "../helpers/http-provider";
const grillaPrincipal = document.querySelector(".grilla-principal");

export const createGrillaOne = () => {
  const images = getImages();
  const grillaOne = document.createElement("section");
  let html = "";
  grillaOne.classList.add("grilla");

  images
    .then((data) => {
      for (let i = 0; i < 3; i++) {
        html += `<img  class="image${i} fotografia" src='${data[i].image}' alt='image${i}'> \n`;
      }

      grillaOne.innerHTML = html;

      grillaPrincipal.appendChild(grillaOne);
    })
    .catch((err) => err);
};

export const createGrillaTwo = () => {
  const images = getImages();
  const grillaTwo = document.createElement("section");
  let html = "";
  grillaTwo.classList.add("grilla-dos");

  images
    .then((data) => {
      for (let i = 3; i < 6; i++) {
        html += `<img class="image${i}" src='${data[i].image}' alt='image${i}'> \n`;
      }

      grillaTwo.innerHTML = html;

      grillaPrincipal.appendChild(grillaTwo);
    })
    .catch((err) => err);
};

export const createGrillaThree = () => {
  const images = getImages();
  const grillaThree = document.createElement("section");
  let html = "";
  grillaThree.classList.add("grilla-tres");

  images
    .then((data) => {
      for (let i = 6; i < 10; i++) {
        html += `<img class="image${i}" src='${data[i].image}' alt='image${i}'> \n`;
      }

      grillaThree.innerHTML = html;

      grillaPrincipal.appendChild(grillaThree);
    })
    .catch((err) => err);
};

export const init = () => {
  createGrillaOne();
  createGrillaTwo();
  createGrillaThree();
};
