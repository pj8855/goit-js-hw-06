const form = document.querySelector("form.login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  };

  const userData = {
    [email.name]: email.value,
    [password.name]: password.value
  };

  console.log(userData);

  event.currentTarget.reset();
}