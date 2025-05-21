const isValidPostalCode = (input: string) => {
  if (typeof input !== "string" || !input.trim()) return false;

  const postalCodeRegex = /^[0-9]{3}\s?[0-9]{2}$/;

  const parsedInput = input.trim().split(" ").join("");

  return postalCodeRegex.test(parsedInput);
};

export default isValidPostalCode;
