export default function TableValidation(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "Name is Required";
  }

  if (!values.position) {
    errors.position = "Position is Required";
  }

  if (!values.email) {
    errors.email = "Email Address required";
  } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  return errors;
}
