function getCharTypes() {
  const uppercase = document.querySelector('#include_uppercase').checked;
  const lowercase = document.querySelector('#include_lowercase').checked;
  const number = document.querySelector('#include_number').checked;
  const specialCharacter = document.querySelector('#include_special_character').checked;

  const charTypes = [];

  if (uppercase) charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  if (lowercase) charTypes.push('abcdefghijklmnopqrstuvwxyz');
  if (number) charTypes.push('0123456789');
  if (specialCharacter) charTypes.push('!@#$%^&*()_+-=[]{}|;:,.<>?');

  return charTypes;
}


function getPasswordLength() { 
  const size = Number(document.querySelector('#size').value);

  if (isNaN(size) || size < 4 || size > 128) {
    message('Invalid size. Please enter a number between 4 and 128.', 'warning');
    return null;
  }

  return size;
}


function randomCharTypes(charTypes) {
  const randomIndex = Math.floor(Math.random() * charTypes.length);
  const group = charTypes[randomIndex];
  return group[Math.floor(Math.random() * group.length)];
}


function generatePassword(size, charTypes) {
  let passwordGenerated = '';

  while (passwordGenerated.length < size) {
    passwordGenerated += randomCharTypes(charTypes);
  }

  return passwordGenerated;
}


function message(text, status = 'succsess') {
  Toastify({
    text: text,
    duration: 3000,
    style: {
      background: status === 'succsess' ? '#16a34a' : '#dc2626',
      boxShadow: 'none'
    }
  }).showToast();
}


document.querySelector('#generate').addEventListener('click', function () {
  const size = getPasswordLength();
  if (!size) return;

  const charTypes = getCharTypes();
  if (!charTypes.length) {
    message('Select at least one type of character.', 'warning');
    return; 
  }

  const passwordGenerated = generatePassword(size, charTypes);

  document.querySelector('#password_container').classList.add('show');
  document.querySelector('#password').textContent = passwordGenerated;
});
 
document.querySelector('#copy').addEventListener('click', function () {
  navigator.clipboard.writeText(document.querySelector('#password').textContent);
  message('Password copied to clipboard!', 'succsess');
});
 

