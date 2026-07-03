<script>
document
.getElementById("contactForm")
.addEventListener("submit", async function(e){

  e.preventDefault();

  const formData = {
    name: document.querySelector(
      'input[placeholder="Your Full Name *"]'
    ).value,

    email: document.querySelector(
      'input[type="email"]'
    ).value,

    company: document.querySelector(
      'input[placeholder="Company / Business Name"]'
    ).value,

    country: document.querySelector(
      'input[placeholder="Country *"]'
    ).value,

    message: document.querySelector(
      "textarea"
    ).value
  };

  const response = await fetch(
    "1RW4uXSd5gusi16qR0sNuQ0uPjviW9fBdd2vBNDTpUCA_VyxNxp4_B3I4",
    {
      method: "POST",
      body: JSON.stringify(formData)
    }
  );

  if(response.ok){
      alert("Inquiry submitted!");
      this.reset();
  }else{
      alert("Submission failed");
  }

});
</script>
