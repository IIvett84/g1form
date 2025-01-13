document.addEventListener("DOMContentLoaded", function () {
    // Form és mezők kiválasztása
    const packageSelect = document.querySelector('select[name="pack"]');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#phone');
    const dateInput = document.querySelector('#date');
    const timeInput = document.querySelector('#time');
    const personInput = document.querySelector('#person');
    const roundInput = document.querySelector('#round');
    const msgInput = document.querySelector('#msg');
    const submitButton = document.querySelector('button');
  
    // Csomagbeállítások
    const packageSettings = {
      "Champion Mini": { min: 5, max: 100, round: 2 },
      "Champion Basic": { min: 5, max: 100, round: 3 },
      "Champion Advance": { min: 5, max: 100, round: 5 },
      "Champion Grand Prix": { min: 6, max: 9, round: 4 },
      "Champion Lemans": { min: 6, max: 9, round: 9 },
    };
  
    // Alapértelmezés: mezők letiltása
    function disableFields() {
      [nameInput, emailInput, phoneInput, dateInput, timeInput, personInput, roundInput, msgInput, submitButton].forEach(
        (field) => {
          field.disabled = true;
        }
      );
    }
  
    // Mezők engedélyezése a csomag alapján
    function enableFields(packageName) {
      if (packageSettings[packageName]) {
        const { min, max, round } = packageSettings[packageName];
        personInput.min = min;
        personInput.max = max;
        roundInput.value = round;
  
        [nameInput, emailInput, phoneInput, dateInput, timeInput, personInput, msgInput, submitButton].forEach(
          (field) => {
            field.disabled = false;
          }
        );
      } else {
        disableFields();
      }
    }
  
    // Kezdetben minden mező le van tiltva
    disableFields();
  
    // Legördülő menü változás figyelése
    packageSelect.addEventListener("change", function () {
      const selectedPackage = packageSelect.value;
      enableFields(selectedPackage);
    });
  });
  