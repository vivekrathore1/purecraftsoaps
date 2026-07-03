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
    "https://script.google.com/macros/s/AKfycbxxRO_3IxzFhn_iYocMo34tVF3qXBQx-ePLOedMpD7kZa-eaI_DjRTwqG9d_bPJt2l6zw/exec",
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
