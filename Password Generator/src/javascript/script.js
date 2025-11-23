function getChartTypes() {
  const uppercase = document.querySelector('#include_uppercase').checked;
  const lowercase = document.querySelector('#include_lowercase').checked;
  const number = document.querySelector('#include_number').checked;
  const specialCharacter = document.querySelector('#include_special_character').checked;
  
  const charTypes = [];

  if (uppercase) {
    charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  }

  if (lowercase) {
    charTypes.push('abcdefghijklmnopqrstuvwxyz');
  }

  if (number) {
    charTypes.push('0123456789');
  }

  if (specialCharacter) {
    charTypes.push('!@#$%^&*()_+-=[]{}|;:,.<>?');
  }

  return charTypes;
}

function getPasswordLength() { 
  const size = Number(document.querySelector('#size').value);

  if (isNaN(size) || size < 4 || size > 128) {
    alert('Please enter a valid password length between 4 and 128.');
    return 0; // evita loop infinito
  }

  return size;
}

function randomCharTypes(charTypes) {
  const randomIndex = Math.floor(Math.random() * charTypes.length);

  // STRING aleatória escolhida
  const group = charTypes[randomIndex];

  // CARACTERE aleatório dessa string
  return group[Math.floor(Math.random() * group.length)];
}

function generatePassword(size, charTypes) {
  let passwordGenerated = '';  // estava escrito errado

  while (passwordGenerated.length < size) {
    passwordGenerated += randomCharTypes(charTypes);
  }

  return passwordGenerated;
}

document.querySelector('#Generate').addEventListener('click', function () {
  console.log(generatePassword(getPasswordLength(), getChartTypes()));
});

 

