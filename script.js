var form_button = document.getElementById("button");


function Validate(event){
  event.preventDefault(); 
  var form_name = document.getElementById("name");

  var value = form_name.value; 

  var form_email = document.getElementById("email");

  var value_email = form_email.value;
  
  if (!value){
       form_name.style.border = "1px solid red";
    } else if (!value_email){
        form_email.style.border = "1px solid red";
         }else {form_name.style.border = "1px solid grey"; 
          form_email.style.border = "1px solid grey"; 
          }
          console.log(value);
          console.log(value_email);
         }
         
form_button.addEventListener("click", Validate); 

function showMessage(){
  var form_name = document.getElementById("name");

  var value = form_name.value; 

  var form_email = document.getElementById("email");

  var value_email = form_email.value;
  
  if (value&&value_email){
  alert("Спасибо, Ваше сообщение отправлено!");
  form.style.display = "none"
  }
}
