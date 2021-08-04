const getJson = () => {
  console.log("fired");
  let frm = document.forms.frm;
  let firstName = frm.elements.firstName.value;
  let lastName = frm.elements.lastName.value;
  console.log(firstName, lastName);

  let obj = {
    firstName,
    lastName,
  };

  let json = JSON.stringify(obj);
  console.log(json);
  return false;
};
