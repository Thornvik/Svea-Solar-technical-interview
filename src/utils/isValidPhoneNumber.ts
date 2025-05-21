const isValidPhoneNumber = (input: string) => {
  if (typeof input !== "string" || !input.trim()) return false;

  const phoneRegex =
    /^(?:\+46\s?7\d{1}(\s?\d{3}\s?\d{2}\s?\d{2})?|\+467\d{8}|07\d{1}(\s?\d{3}\s?\d{2}\s?\d{2})?|07\d{8})$/;

  const parsedInput = input.trim().split(" ").join("");

  return phoneRegex.test(parsedInput);
};

export default isValidPhoneNumber;
