import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      window.alert("Please choose a date in the future");
      document.querySelector('[data-start]').disabled = true;
    } else {
      document.querySelector('[data-start]').disabled = false;
      const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = selectedDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.querySelector('[data-days]').innerHTML = days.toString().padStart(2, '0');
        document.querySelector('[data-hours]').innerHTML = hours.toString().padStart(2, '0');
        document.querySelector('[data-minutes]').innerHTML = minutes.toString().padStart(2, '0');
        document.querySelector('[data-seconds]').innerHTML = seconds.toString().padStart(2, '0');
        if (distance < 0) {
          clearInterval(countdown);
          document.querySelector('[data-days]').innerHTML = '00';
          document.querySelector('[data-hours]').innerHTML = '00';
          document.querySelector('[data-minutes]').innerHTML = '00';
          document.querySelector('[data-seconds]').innerHTML = '00';
        }
      }, 1000);
    }
  },
};

flatpickr('#datetime-picker', options);

document.querySelector('[data-start]').addEventListener('click', function() {
  this.disabled = true;
});