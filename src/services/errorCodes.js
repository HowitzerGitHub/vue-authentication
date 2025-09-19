export const getErrorMessageFromCode = (err) => {
  let msg = "";
  switch (err) {
    case "Firebase: Error (auth/email-already-in-use).":
      msg = "This email already Exists";
      break;
    case "Firebase: Error (auth/invalid-credential).":
      msg = "Invalid Credentials";
      break;
  }
  return msg;
};
