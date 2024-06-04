const copyrightDate = document.querySelector(".copyright-date");

l
  let date = new Date();
  copyrightDate.innerText = date.getFullYear();

document.querySelector(".copyright-link").addEventListener("click", (e) => {
    const modalContainer = document.getElementById("modal-container");
    modalContainer.removeAttribute("class");
    modalContainer.classList.add("one");
  
    document.body.classList.add("modal-active");
  });
  
  document
    .getElementById("modal-container")
    .addEventListener("click", function (e) {
      if (e.target.classList == "modal-background") {
        this.classList.add("out");
        document.body.classList.remove("modal-active");
      }
    });