const bookingForm = document.getElementById('booking-form');
const bookingChoiceSelect = document.getElementById('booking-choice');
const dateContainer = document.querySelector('.date-container');
const timeContainer = document.querySelector('.time-container');
const slotContainer = document.querySelector('.slot-container');

bookingChoiceSelect.addEventListener('change', (e) => {
  const selectedOption = e.target.value;
  switch (selectedOption) {
    case 'full-day':
      dateContainer.style.display = 'block';
      timeContainer.style.display = 'none';
      slotContainer.style.display = 'none';
      break;
    case 'half-day':
      dateContainer.style.display = 'block';
      timeContainer.style.display = 'none';
      slotContainer.style.display = 'block';
      break;
    case 'hourly':
      dateContainer.style.display = 'block';
      timeContainer.style.display = 'block';
      slotContainer.style.display = 'none';
      break;
    
    default:
      dateContainer.style.display = 'none';
      timeContainer.style.display = 'none';
      slotContainer.style.display = 'none';
  }
});