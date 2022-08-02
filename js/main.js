let usertexts =document.getElementsByClassName("user-text");
let userpics = document.getElementsByClassName("user-pic");

function showReview(){
    for(userpic of userpics){
        userpic.classList.remove("active-pic"); 
      }
      for(usertext of usertexts){
        usertext.classList.remove("active-text");

      }
      let i = Array.from(userpics).indexOf(event.target);
      userpics[i].classList.add("active-pic");
      usertexts[i].classList.add("active-text");
    };
