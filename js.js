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
    "https://script.google.com/macros/s/AKfycbwvJZDhhdRHbiKSKlbpqB4wUPFcQv9dwS0Ob7qlyJDEqtLK_rKcRtIx78DWPawa_u4WwQ/exec",
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
