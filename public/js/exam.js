const maxTime = document.querySelector('#countdown_minutes').textContent;


const startingminutes = maxTime;
let time = startingminutes * 60;


const clock = document.getElementById('clock');
const countdown = document.getElementById('countdown_minutes');
const counts = document.getElementById('countdown_seconds');


  
//Time countdown

function updateCountdown_minutes() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? `0` + seconds : seconds;
  
  // if ((minutes) > 0) {
  //   window.sessionStorage.setItem("minutes", minutes);
  //   window.sessionStorage.setItem("seconds", seconds);
  // } else {
  //   window.sessionStorage.removeItem("minutes");
  // }

  // window.onload = function() {
  //  const storedMinutes = window.sessionStorage.getItem("minutes") || 65;
  //  const storedSeconds = window.sessionStorage.getItem("seconds") || 0;
    
  // };
  
  countdown.innerHTML = `${minutes}`;

  counts.innerHTML = `${seconds}`;
  
  

  time--;

  


  
  //Changing Timer Colour
  const clockBgColours = ["#80ff80","#bfff80","#dfff80","#ffff80","#ffdf80","#ff4000","#ff0000"]
  const clockIntervalDigits = []
  
  for(i=1; i<clockBgColours.length-1; i++){
    let intervals = (document.querySelector('.maxTime').textContent / clockBgColours.length)*i;
    const intervalDigit = Math.floor(document.querySelector('.maxTime').textContent - intervals);
    
    clockIntervalDigits.push(intervalDigit)
  }
  
  for(i=0; i<clockIntervalDigits.length; i++){
   if(minutes === clockIntervalDigits[i]){
    clock.style.background = clockBgColours[i]
   }
  }
  //Trying to write a better redirect page code:)
  
    const Redirect = document.querySelector('.redirect').textContent;
    if(minutes===0 && seconds===0){
      window.location.href = Redirect;
    }
}
setInterval(updateCountdown_minutes, 1000);

  
  
  
  

//Code for modals and dialog
const modal      = document.querySelector("#modal");
const openModal  = document.querySelector(".skip");
const closeModal = document.querySelector(".no");

openModal.addEventListener('click', () => {
  modal.showModal();
})
closeModal.addEventListener('click', () => {
  modal.close();
})

const navForm = document.querySelector('.navForm');
const to = navForm.action
navForm.addEventListener('submit', (e) =>{
  e.preventDefault()
  
  return fetch(to, {method: 'get'})
  .catch((err) => {
    console.log(err)
  })
})








//RESIZE THE PASSAGE SECTION TO SEE PASSAGES PROPERLY
// const resizer = () => {
//   const passageSection = document.querySelector('.reading_section');
//   const resizeArrayForward = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//    const resizeArrayBackward = -1*(...resizeArrayForward)
//   //when(the resize button is dragged){
//     //for(each drag[i]){
//       //set(passageSection.style.gridTemplateColumns) == `${resizeArray[i]}fr ${1}fr`
//     //}
//   //}
//   // passageSection.style.gridTemplateColumns = `${resizeArray[i]}fr ${1}fr`
// }




// //WHEN TIME IS UP...({My wrong redirect code, leaving it here as a reminder of how little I knew when I began})
// function redirectpage(){
//   window.location = " C:/Users/Igwe Peter/Desktop/SAT MOCK TEST SITE/Instruction pages/after reading/writing_instructions.html"
// }
// setTimeout("redirectpage()", 3902000)




/*function noReturn() {
  if (localStorage.getItem("visited")) {
    window.location.href = "C:/Users/Igwe Peter/Desktop/SAT MOCK TEST SITE/instruction pages/after reading/writing_instructions.html"
  }
  localStorage.setItem("visited", "true");  
}

setTimeout("noReturn()", 3902000);*/






// Restricts input for the given textbox to the given inputFilter function.
// function setInputFilter(textbox, inputFilter, errMsg) {
//   ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function(event) {
//       textbox.addEventListener(event, function(e) {
//           if (inputFilter(this.value)) {
//               this.classList.add('input-valid');
//               // Accepted value
//               if (["keydown","mousedown","focusout"].indexOf(e.type) >= 0){
//                   this.classList.remove("input-error");
                  
//                   this.setCustomValidity("");
//               }
//               this.oldValue = this.value;
//               this.oldSelectionStart = this.selectionStart;
//               this.oldSelectionEnd = this.selectionEnd;
//           } else if (this.hasOwnProperty("oldValue")) {
//               // Rejected value - restore the previous one
//               this.classList.add("input-error");
//               this.setCustomValidity(errMsg);
//               this.reportValidity();
//               this.value = this.oldValue;
//               this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
//           } else {
//               // Rejected value - nothing to restore
//               this.value = "";
//           }
//       });
//   });
// }

// setInputFilter(document.getElementById("grid"), function(value) {
//   return /^\d*\.?\d*$/.test(value); // Allow Positive digits and '.' only, using a RegExp
// }, "Only Positive numbers are allowed!");




