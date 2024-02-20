export default function validation(values) {
  const errors = {};

  const regEmail =
    /^([a-zA-Z0-9]([a-zA-Z0-9.]+)?[a-zA-Z0-9])@([a-zA-Z0-9]([a-zA-Z0-9\-]+)?[a-zA-Z0-9])\.([a-zA-Z]{2,})(\.[a-zA-Z]{2,})?$/;

  const regPass = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#]).{4,8}$/;

  if (values.emailId === "") {
    errors.emailId = "Email-id required";
  } else if (!regEmail.test(values.emailId)) {
    errors.emailId = "Invalid Email-id";
  }
  if (values.password === "") {
    errors.password = "Password required";
  } else if (!regPass.test(values.password)) {
    errors.password = "Invalid password";
  }

  return errors;
}
