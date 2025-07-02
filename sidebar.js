




let main_page = document.querySelector(".okela")
let main_page2 = document.querySelector(".main_page")
let sidebar2 = document.getElementById("sidebar")
let giới_thiệu = document.querySelector(".giới_thiệu")
let info_contact = document.querySelector(".info_contact")
sidebar2.addEventListener("click", () => {
      main_page.classList.toggle("show");
      if(screen.width < 768) {
         if(main_page2.style.paddingLeft == "140px"){
            main_page2.style.paddingLeft = "0px";
            giới_thiệu.style.textAlign = "center";
            info_contact.style.color = "white";
         } else {
            main_page2.style.paddingLeft = "140px";
            giới_thiệu.style.textAlign = "left";
            info_contact.style.color = "lightblue";
           }
      } else {
          if(main_page2.style.paddingLeft == "300px"){
            main_page2.style.paddingLeft = "0px";
            giới_thiệu.style.textAlign = "center";
            info_contact.style.color = "white";
         } else {
            main_page2.style.paddingLeft = "300px";
            giới_thiệu.style.textAlign = "left";
            info_contact.style.color = "lightblue";
        }
      }    
})

