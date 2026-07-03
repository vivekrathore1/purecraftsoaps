const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbysILpisfJopG6ht3PQ5v_mr2HwooM-aLWUaPz1iaxQ6T_pLsuYGG3WtWDoGcZsAFVoYA/exec";

fetch(SCRIPT_URL,{
  method:"POST",
  body:JSON.stringify(formData)
})
