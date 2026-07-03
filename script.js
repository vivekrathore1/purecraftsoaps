<script>
document.getElementById("contactForm")
.addEventListener("submit", async function(e){

  e.preventDefault();

  const formData = {
    name: document.querySelector('[name="name"]').value,
    email: document.querySelector('[name="email"]').value,
    company: document.querySelector('[name="company"]').value,
    country: document.querySelector('[name="country"]').value,
    message: document.querySelector('[name="message"]').value
  };

  const response = await fetch(
    "PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE",
    {
      method: "POST",
      body: JSON.stringify(formData)
    }
  );

  if(response.ok){
      alert("Inquiry submitted successfully!");
      this.reset();
  } else {
      alert("Submission failed");
  }

});
</script>
