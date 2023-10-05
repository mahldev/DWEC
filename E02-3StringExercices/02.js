const validateParams = ({ name = null, age = 0, comments = null }) => {
  return name === null || comments === null || age < 18
    ? null
    : { name, age, comments };
};

const displayValidateEmail = ({ name, age, comments }) => {
  const template = `"A user has posted a comment from the website:
    => name: ${name} 
    => age: ${age}
    => status: ${name} is a valid user
    => comments: ${comments}`;

  console.log(template);
};

function sendEmail(name, age, comments) {
  const validateEmail = validateParams({ name, age, comments });
  validateEmail ? displayValidateEmail(validateEmail) : null;
}

sendEmail("Roberto", 18, "Hola esto es un comentario");
