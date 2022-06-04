// function massModify(selector, attribute, value) {
//     let nodeList = document.querySelectorAll(selector);
//     for (let i = 0; i < nodeList.length; i++) {
//         nodeList[i][attribute] = value;
//     }
// }

// let helpText = document.createElement("small");
// helpText.className = "form-text text-muted";
// helpText.innerHTML = "Adja meg a feltéteket!";

// let parent = document.querySelector("div.form-group:nth-child(1)");
// parent.appendChild(helpText);


// let sendButton = document.querySelector("form .btn.btn-primary");

// sendButton.addEventListener("click", function() {
//     alert("Helló JS!");
// })

// window.addEventListener("resize", function(){
//     console.log(this.innerHeight, this.innerWidth);
// })

// let orderForm = document.querySelector("#orderForm");
// orderForm.addEventListener("submit", function(ev) {
//     ev.preventDefault();

    
//     let inputs = this.querySelectorAll("input");
//     let values = {};

//     for (let i = 0; i < inputs.length; i++) {
//         values[inputs[i].name] = inputs[i].value;
//     }

//     console.log (values);

// });