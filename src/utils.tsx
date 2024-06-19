// function to check if email is valid
// rules:
// email has an @ symbol
// email has at least one character before the @ symbol
// email has at least one character after @ symbol and before . character
// email has dot after domain name
// email should have at least one character after the . character
export function isValidEmail(email: string): boolean {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
