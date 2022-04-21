const inputs = Array.from(document.querySelectorAll('input[type="password"]'));

const form = document.getElementsByTagName('form')[0];


//Validity Checker. Checks if the "new" password meets the requirements.
const handleChange = ({ type }) => {
  const reportMethod = type === 'input' ? 'checkValidity' : 'reportValidity';
  const valid = inputs.every((input) => {
    input.setCustomValidity('');
    if (input.value.length < 8)
      input.setCustomValidity('Password must be at least 8 characters long - try again');
    return input[reportMethod]();
  });
  if (valid && inputs[0].value !== inputs[1].value) {
    inputs[1].setCustomValidity('Password and repeat password do not match - try again');
    inputs[1][reportMethod]();
  }
};

//Listener to detect if the password has been changed.
inputs.map((input) => {
  input.addEventListener('change', handleChange);
  input.addEventListener('input', handleChange);
});

//Verify that the password is valid, and has been changed.
form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Passowrd changed!');
});