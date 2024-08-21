document.addEventListener('DOMContentLoaded', function () {
    const userInput = document.getElementById('userInput');
    const saveButton = document.getElementById('saveButton');
    const messageDisplay = document.getElementById('messageDisplay');
  
    const savedName = localStorage.getItem('userName');
  
    if (savedName) {
      messageDisplay.textContent = `Olá, ${savedName}!`;
    }
  
    saveButton.addEventListener('click', function () {
      const name = userInput.value;
  
      if (name.trim() !== '') {
        localStorage.setItem('userName', name);
        messageDisplay.textContent = `Olá, ${name}!`;
        userInput.value = '';
      } else {
        alert('Por favor, digite seu nome.');
      }
    });
  });
  