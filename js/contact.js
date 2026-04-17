

// PHONE VALIDATION FUNCTION
function isValidPhone(phone){
  return /^[0-9]{10}$/.test(phone);
}


// CONTACT FORM


function sendMessage(){

  let name = document.getElementById("contactName").value.trim();
  let phone = document.getElementById("contactPhone").value.trim();
  let subject = document.getElementById("contactSubject").value.trim();
  let message = document.getElementById("contactMessage").value.trim();

  if(!name || !phone || !subject || !message){
    alert("Please fill all fields ❗");
    return;
  }

  if(phone.length !== 10 || isNaN(phone)){
    alert("Enter valid 10 digit phone number ❗");
    return;
  }

  let data = { name, phone, subject, message };

  let messages = JSON.parse(localStorage.getItem("messages")) || [];
  messages.push(data);

  localStorage.setItem("messages", JSON.stringify(messages));

  alert("Message Saved Successfully ✅");

  // Clear fields
  document.getElementById("contactName").value="";
  document.getElementById("contactPhone").value="";
  document.getElementById("contactSubject").value="";
  document.getElementById("contactMessage").value="";
}



// DEMO FORM
function bookDemo(){

  let name = document.getElementById("demoName").value.trim();
  let phone = document.getElementById("demoPhone").value.trim();
  let age = document.getElementById("demoAge").value.trim();

  if(name === "" || phone === "" || age === ""){
    alert("Please fill all details");
    return;
  }

  if(!isValidPhone(phone)){
    alert("Phone number must be exactly 10 digits");
    return;
  }

  let text = `🎨 *Demo Class Booking*%0A
👤 Parent Name: ${name}%0A
📞 Phone: ${phone}%0A
👶 Child Age: ${age}`;

  let url = `https://wa.me/919939811805?text=${text}`;

  window.open(url, "_blank");
}

