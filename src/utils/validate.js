export const checkisValid = (email, password,username) => {
  const isemailValid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const ispasswordvalid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isusername = /^[a-zA-Z0-9]+$/.test(username);

  if (!isemailValid) {
    return "Please enter a valid email address or phone number.";
  }
  if (!ispasswordvalid) {
    return "Password is not valid";
  }
  if (!isusername) {
    return "User Name is not valid";
  }

  return null;
};
