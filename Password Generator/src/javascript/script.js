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
      
    message('Invalid size. Please enter a number between 4 and 128.', '#dc2626')
  
  }

  return size;
}

function randomCharTypes(charTypes) {
  const randomIndex = Math.floor(Math.random() * charTypes.length);


  const group = charTypes[randomIndex];

  
  return group[Math.floor(Math.random() * group.length)];
}

function generatePassword(size, charTypes) {
  let passwordGenerated = '';  // estava escrito errado

  while (passwordGenerated.length < size) {
    passwordGenerated += randomCharTypes(charTypes);
  }

  return passwordGenerated;
}

function message(text,background) {
  Toastify({
      text: text,
      duration:3000
      style: {
        background: background ,
        boxShadow: 'none' 
      }
    }).showToast();
}

document.querySelector('#Generate').addEventListener('click', function () {
  const size = getPasswordSize();
  const charTypes = getChartTypes();

  const passwordGenerated = generatePassword(size, charTypes);

  if (!charType.length) {
    message('Select at least one type of charactere.', '#dc2626);
    return; 
  }
  document.querySelector('#password_container').classList.add('show');
  document.querySelector('#password').textContent= passwordGenerated;
});

 




