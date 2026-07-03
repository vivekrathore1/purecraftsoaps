<script>

const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbysILpisfJopG6ht3PQ5v_mr2HwooM-aLWUaPz1iaxQ6T_pLsuYGG3WtWDoGcZsAFVoYA/exec";

document
.getElementById("contactForm")
.addEventListener(
"submit",
async function(e){

e.preventDefault();

const btn =
document.getElementById("submitBtn");

btn.textContent = "Sending...";

const formData = {

name:
document.querySelector('[name="name"]').value,

email:
document.querySelector('[name="email"]').value,

company:
document.querySelector('[name="company"]').value,

country:
document.querySelector('[name="country"]').value,

product:
document.querySelector('[name="product"]').value,

quantity:
document.querySelector('[name="quantity"]').value,

message:
document.querySelector('[name="message"]').value

};

try {

const response =
await fetch(
SCRIPT_URL,
{
method:"POST",
body:JSON.stringify(formData)
}
);

const result =
await response.json();

if(result.result==="success"){

document
.getElementById("successMsg")
.style.display="block";

btn.textContent =
"Inquiry Sent ✓";

document
.getElementById("contactForm")
.reset();

}
else{

alert(
"Error : " +
result.message
);

btn.textContent =
"Send Inquiry ✦";

}

}
catch(err){

alert(
"Submission failed."
);

btn.textContent =
"Send Inquiry ✦";

}

});

</script>
