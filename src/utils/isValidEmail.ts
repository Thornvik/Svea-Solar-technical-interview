const isValidEmail = (input: string) => {
  if (typeof input !== "string" || !input.trim()) return false;

  const emailRegex =
    /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  return emailRegex.test(input);
};

export default isValidEmail;
