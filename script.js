document.addEventListener("DOMContentLoaded", function () {
    const packageSelect = document.querySelector('select[name="pack"]');
    const formFields = document.querySelectorAll("input, textarea, button");
    const personInput = document.querySelector("#person");
    const roundInput = document.querySelector("#round");
    const emailInput = document.querySelector("#email");
    const timeInput = document.querySelector("#time");
    const dateInput = document.querySelector("#date");
    const submitButton = document.querySelector("button");
  
    const packages = {
      "Champion Grand Prix": { min: 6, max: 9, round: 4 },
      "Champion Le Mans": { min: 6, max: 9, round: 6 },
      "Champion Mini": { min: 5, max: 100, round: 2 },
      "Champion Basic": { min: 5, max: 100, round: 3 },
      "Champion Advance": { min: 5, max: 100, round: 5 },
    };
  
    // Aktiválja az űrlapmezőket és beállítja az alapértékeket
    function activateFields(packageName) {
      const packageDetails = packages[packageName];
      formFields.forEach((field) => field.removeAttribute("disabled"));
      personInput.min = packageDetails.min;
      personInput.max = packageDetails.max;
      roundInput.value = packageDetails.round;
      roundInput.setAttribute("readonly", true); // Nem módosítható
    }
  
    // Mezők alaphelyzetbe állítása
    function resetFields() {
      formFields.forEach((field) => field.setAttribute("disabled", true));
      personInput.value = "";
      roundInput.value = "";
      emailInput.value = "";
      dateInput.value = "";
      timeInput.value = "";
    }
  
    // Email validáció
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // Ellenőrzi, hogy minden mező ki van-e töltve
    function validateForm() {
      const isEmpty = Array.from(formFields).some((field) => {
        if (field.required && !field.value) {
          return true;
        }
        return false;
      });
  
      const isValidEmail = validateEmail(emailInput.value);
      if (isEmpty) {
        alert("Minden mezőt ki kell tölteni!");
        return false;
      }
  
      if (!isValidEmail) {
        alert("Érvénytelen e-mail cím!");
        return false;
      }
  
      return true;
    }
  
    // Csomag választása esemény
    packageSelect.addEventListener("change", function () {
      const selectedPackage = this.value;
  
      resetFields(); // Alaphelyzet
      if (selectedPackage && packages[selectedPackage]) {
        activateFields(selectedPackage);
        alert(`Kiválasztott csomag: ${selectedPackage}`);
      } else {
        alert("Válassz egy érvényes csomagot!");
      }
    });
  
    // Beküldés esemény
    submitButton.addEventListener("click", function (e) {
      e.preventDefault();
      if (validateForm()) {
        alert("Foglalás elküldve!");
        // Az itt lévő kód elküldheti az űrlapot a backendnek (pl. AJAX-al)
      }
    });
  
    // Timepicker és datepicker integráció (pl. Flatpickr használatával)
    flatpickr("#time", { enableTime: true, noCalendar: true, dateFormat: "H:i" });
    flatpickr("#date", { dateFormat: "Y-m-d" });
  });
  