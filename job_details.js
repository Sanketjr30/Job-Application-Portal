document.getElementById("jobForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const resume = document.getElementById("resume").files[0];

  if (!name) {
    alert("Please enter your name.");
    return;
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email.");
    return;
  }

  if (!resume) {
    alert("Please upload your resume.");
    return;
  }


  alert(" Your Application Successfully Submitted!");


  document.getElementById("jobForm").reset();
});


document.getElementById("jobForm").addEventListener("submit", function (event) {
  event.preventDefault();


  const popup = document.getElementById("popup");
  popup.classList.remove("hidden");
});

document.getElementById("closePopup").addEventListener("click", function () {

  const popup = document.getElementById("popup");
  popup.classList.add("hidden");


  document.getElementById("jobForm").reset();
});

