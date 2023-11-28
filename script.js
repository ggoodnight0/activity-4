// script.js

function generatePassword() {
  
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()-=_+[]{}|;:,.<>?/';

  const length = 12; 
  const uppercase = true;
  const lowercase = true;
  const numbers = true;
  const symbols = true;

  let charset = '';
  if (uppercase) charset += uppercaseChars;
  if (lowercase) charset += lowercaseChars;
  if (numbers) charset += numberChars;
  if (symbols) charset += symbolChars;


  if (charset === '') {
      alert('Please select at least one character set.');
      return '';
  }

  // Generate password
  let password = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
  }

  return password;
}

// Function to update the displayed password
function updatePassword() {
  const password = generatePassword();
  document.getElementById('password').value = password;
}

// Add event listener to generate button
document.getElementById('generate').addEventListener('click', updatePassword);
