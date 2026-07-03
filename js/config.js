const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxxxpgdB_pgdK0vWqmvT9A97XSpOTSYSP_UUzma33HYNYZDOSVWuddUV_mfhW1nuTdpZg/exec";

fetch(SCRIPT_URL,{
  method:"POST",
  body:JSON.stringify(formData)
})
