
/// <reference lib = "dom"/>
const startingminutes = 25;
let time = startingminutes * 60;


const clock = document.getElementById('clock');
const countdown = document.getElementById('countdown_minutes');
const counts = document.getElementById('countdown_seconds');


setInterval(updateCountdown_minutes, 1000)

function updateCountdown_minutes() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  

  seconds = seconds < 10 ? `0` + seconds : seconds;

  countdown.innerHTML = `${minutes}`;
  counts.innerHTML = `${seconds}`;
  time--;

  if(minutes === 25){
    clock.style.background = "#80ff80"
  }else if(minutes === 20) {
    clock.style.background = "#bfff80"
  }else if(minutes === 16) {
    clock.style.background = "#dfff80"
  }else if(minutes === 12) {
    clock.style.background = "#ffff80"
  }else if(minutes === 8) {
    clock.style.background = "#ffdf80"
  }else if(minutes === 5) {
    clock.style.background = "#ff4000"
  }else if(minutes === 2) {
    clock.style.background = "#ff0000"
  }

  //Trying to write a better redirect page code:)
  if(minutes==0 && seconds==0){
    window.location = "../../instruction pages/after MathsNoCalc/mathsCalc_instructions.html"
  }
}

const modal      = document.querySelector("#modal");
const openModal  = document.querySelector(".skip");
const closeModal = document.querySelector(".no");

openModal.addEventListener('click', () => {
  modal.showModal();
})
closeModal.addEventListener('click', () => {
  modal.close();
})

/*function noReturn() {
  if (localStorage.getItem("visited")) {
    window.location.href = "C:/Users/Igwe Peter/Desktop/SAT MOCK TEST SITE/instruction pages/after MathsNoCalc/mathsCalc_instructions.html"
  }
  localStorage.setItem("visited", "true");  
}

setTimeout("noReturn()", 1502000);*/




  
  //    // Restricts input for the given textbox to the given inputFilter function.
  //    function setInputFilter(textbox, inputFilter, errMsg) {
  //     ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function(event) {
  //         textbox.addEventListener(event, function(e) {
  //             if (inputFilter(this.value)) {
  //             this.classList.add('input-valid');
  //                 // Accepted value
  //                 if (["keydown","mousedown","focusout"].indexOf(e.type) >= 0){
  //                     this.classList.remove("input-error");
                      
  //                     this.setCustomValidity("");
  //                 }
  //                 this.oldValue = this.value;
  //                 this.oldSelectionStart = this.selectionStart;
  //                 this.oldSelectionEnd = this.selectionEnd;
  //             } else if (this.hasOwnProperty("oldValue") || this.value == "") {
  //                 // Rejected value - restore the previous one
  //                 this.classList.add("input-error");
  //                 this.setCustomValidity(errMsg);
  //                 this.reportValidity();
  //                 this.value = this.oldValue;
  //                 this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
  //             } else {
  //                 // Rejected value - nothing to restore
  //                 this.value = "";
  //             }
  //         });
  //     });
  // }
  
  // setInputFilter(document.getElementById("grid"), function(value) {
  //     return /^\d*\.?\d*$/.test(value); // Allow Positive digits and '.' only, using a RegExp
  // }, "Only Positive numbers are allowed!");
  
