
const date_one = document.getElementById("date_one")

date_one.addEventListener('change', (event) => {
    console.log(event.target.value);
    var a = document.getElementById("first_date");
    a.innerText = event.target.value;
});

const date_two = document.getElementById("date_two")

date_two.addEventListener('change', (event) => {
    console.log(event.target.value)
    var a = document.getElementById("second_date");
    a.innerText = event.target.value;
});



// var btnclick = document.getElementById("rangePicker");
// // var btnClick = document.querySelector(".rangePicker")
// btnclick.addEventListener('onclick', (event) => {
//     alert("")
//     // var a = document.getElementById("date_one").focus();
//     // document.getElementById("date_one").style.pointerEvents = "initial";
//     // document.getElementById("date_one").autofocus = true;
//     document.getElementById("demo").click();
// })

// class ConfirmLink extends HTMLInputElement {
//     connectedCallback() {
//       this.addEventListener("change", e => {
//         // const result = confirm(`Are you sure you want to go to '${this.href}'?`);
//         // if (!result) e.preventDefault();
//         alert(this.e.value)
//       });
//     }
//   }

//   customElements.define("confirm-link", ConfirmLink, { extends: "input" });