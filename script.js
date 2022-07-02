
const subBtn = document.getElementById('sub-btn')
const buttons = document.querySelectorAll('input')
let clickedValue;


[...buttons].forEach(item => {
    item.addEventListener('click', () =>{
        clickedValue =item.value
       
    })
})
subBtn.addEventListener('click',() =>{
 

 if(!clickedValue){
    swal({
        title: "Alert!",
        text: "Please pick your ratings",
        icon: "info",
        button: "Ok!",
      });
 }else{
   let container  = document.querySelector('.container');
   swal({
    title: "Thank you",
    text: "Thanks for you response",
    icon: "success",
    buttons: true,
    dangerMode: false,
  })
  
    container.innerHTML = 
        `
        <div class="thanks container">
        <img src="./images/illustration-thank-you.svg" alt="" class="thanks-cta">
        <p style="background-color: hsla(213, 66%, 36%, 0.295);  width:100%; border-radius: 5pc;padding:8px 10px;color: hsl(216, 12%, 54%);">You selected ${clickedValue} out of 5</p>
        <h5>  Thank you!
    
        </h5>
        <p class="app">  We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!
        </p>
        </div>
    
        `
 }
})
