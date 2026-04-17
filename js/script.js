// Navbar shadow on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

// Floating animation
const cards = document.querySelectorAll(".art-card");

cards.forEach((card, index) => {
    card.style.animation = `float 4s ease-in-out infinite`;
    card.style.animationDelay = `${index * 0.5}s`;
});



function openForm(){
  document.getElementById("registerForm").style.display = "flex";
}

function closeForm(){
  document.getElementById("registerForm").style.display = "none";
}

function submitForm(){

  let name = document.getElementById("parentName").value;
  let phone = document.getElementById("phone").value;
  let child = document.getElementById("childName").value;
  let age = document.getElementById("age").value;

  if(name=="" || phone=="" || child=="" || age==""){
    alert("Please fill all required fields");
    return;
  }

  if(!/^[0-9]{10}$/.test(phone)){
    alert("Phone must be 10 digits");
    return;
  }

  let text = `🎨 *New Student Registration*%0A
👤 Parent: ${name}%0A
📞 Phone: ${phone}%0A
👶 Child: ${child}%0A
🎂 Age: ${age}`;

  let url = `https://wa.me/919939811805?text=${text}`;

  window.open(url, "_blank");

  closeForm();
}





window.onclick = function(event) {

  let popup = document.getElementById("registerForm");
  let formBox = document.querySelector(".form-box");

  // If clicked outside the form-box
  if (event.target === popup) {
    popup.style.display = "none";
  }

}

