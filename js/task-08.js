const form = document.querySelector("form.login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  
  const {
    elements: { email, password }
  } = event.currentTarget;

  const userData = {
    [email.name]: email.value,
    [password.name]: password.value
  };

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    console.log(userData);
  };

  event.currentTarget.reset(); 
}