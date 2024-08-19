let url = 'https://script.google.com/macros/s/AKfycbxcmsMjBYImUaD7RlRvD_gL6MFBtJmO2b6ISc2ZdKTa1dhmh9Of-DKFylqzYy9BswlU/exec';
let form = document.querySelector('#contactForm');

form.addEventListener("submit", (e)=>{
    e.target.btn.innerHTML="Submitting...";
    let d = new FormData(form);
    fetch(url, {
        method: "POST",
        body: d
    }).then((res)=>res.text())
    .then((finalRes)=>{
        e.target.btn.innerHTML="Submit";
        document.getElementById("res").innerHTML=finalRes;
        form.reset();
        setTimeout(()=>{
            document.getElementById("res").innerHTML='';
        },5000)
    })
    e.preventDefault();
})