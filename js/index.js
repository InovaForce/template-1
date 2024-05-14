document.querySelectorAll(".btn-map-icon").forEach(el => el.addEventListener("click", function (e) {
        const map = e.target.closest("div").querySelector(".map-iframe");
       if (map.style.display === "block") {
        map.style.display = "none";
       }else{
        map.style.display = "block";}
       
    }))
