const hiddenBtn = Array.from(document.getElementsByClassName("nascondi"));
const saldi = document.getElementsByClassName("saldi-content")[0];
const welcomeSummer = document.getElementsByClassName(
  "welcome-summer-content"
)[0];

hiddenBtn[0].addEventListener("click", () => {
  saldi.classList.toggle("d-none");
  if (saldi.classList.contains("d-none")) {
    hiddenBtn[0].innerText = " Mostra sezione";
  } else {
    hiddenBtn[0].innerText = "Nascondi sezione";
  }
});
hiddenBtn[1].addEventListener("click", () => {
  welcomeSummer.classList.toggle("d-none");
  if (welcomeSummer.classList.contains("d-none")) {
    hiddenBtn[1].innerText = " Mostra sezione";
  } else {
    hiddenBtn[1].innerText = "Nascondi sezione";
  }
});

const allTravels = Array.from(document.getElementsByClassName("card-body"));
alert(`Attenzione, ci sono ${allTravels.length} viaggi disponibili`);
alert(
  "se desiderate distruggere i contenuti della pagina andate in console ed inizializzate la funzione 'destroyThePage()';"
);

const destroyThePage = () => {
  const allImg = Array.from(document.getElementsByTagName("img"));
  const allCards = Array.from(document.getElementsByClassName("card"));
  for (let i = 0; i < allImg.length; i++) {
    allImg[i].classList.add("d-none");
  }
  for (let y = 0; y < allCards.length; y++) {
    allCards[y].classList.add("d-none");
  }
};
