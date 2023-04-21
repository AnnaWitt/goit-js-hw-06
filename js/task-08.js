const form = document.querySelector('.login-form');

const sendForm = (event) => {
  event.preventDefault();
  const { elements: { email, password } } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    // eslint-disable-next-line no-alert
    alert('Please fill in all the fields!');
  } else {
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
  }
};
form.addEventListener('submit', sendForm);
