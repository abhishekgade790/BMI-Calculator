const form = document.querySelector('form');
const result = document.querySelector('#result');
const sms = document.querySelector('#sms');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  calculateBMI();
});

// Move focus to weight input when 'Enter' is pressed after height
heightInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {  // If the "Enter" key is pressed
    e.preventDefault();      // Prevent the default action
    weightInput.focus();     // Move focus to weight input
  }
});

// Handle form submission when pressing 'Enter' in the weight input
weightInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {  // If the "Enter" key is pressed in weight input
    e.preventDefault();      // Prevent the default action
    calculateBMI();          // Perform the BMI calculation
  }
});

function calculateBMI() {
  const height = parseInt(heightInput.value);
  const weight = parseInt(weightInput.value);

  if (height <= 0 || isNaN(height) || height === '') {
    result.innerHTML = 'Sahi height dal bhai centimeter me';
  } else if (weight <= 0 || isNaN(weight) || weight === '') {
    result.innerHTML = 'Sahi weight weight dal bhai kilo gram me';
  }
  else {
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    result.innerHTML = `BMI is ${bmi}`;

    // Display funny Hindi SMS based on BMI
    if (bmi < 18.5) {
      sms.innerHTML = `${weight}kg, Arre bhai, thoda khana khao! Aap to patle ho gaye ho! (Underweight)`;
      sms.style.color = 'red';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      sms.innerHTML = `${weight}kg, Bilkul sahi! Aap to perfect ho! (Normal weight)`;
      sms.style.color = 'green';
    } else if (bmi >= 25 && bmi <= 29.9) {
      sms.innerHTML = `${weight}kg, Thoda aur exercise karo, thoda kam karo! (Overweight)`;
      sms.style.color = 'red';
    } else if (bmi >= 30 && bmi <= 34.9) {
      sms.innerHTML = `${weight}kg, Bhai, gym jaana padega! Aapko thoda slim hona hoga! (Obese)`;
      sms.style.color = 'red';
    } else if (bmi >= 35) {
      sms.innerHTML = `${weight}kg, Aapko extra care ki zarurat hai, doctor se milo! (Extremely obese)`;
    }
  }
}
