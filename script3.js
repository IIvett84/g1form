(function ($) {
    // Csomagok definiálása
    var packs = {
      "Champion mini": { min: 5, max: 100, round: 2 },
      "Champion basic": { min: 5, max: 100, round: 3 },
      "Champion advance": { min: 5, max: 100, round: 5 },
      "Champion Grand Prix": { min: 6, max: 9, round: 4 },
      "Champion Lemans": { min: 6, max: 9, round: 6 },
    };
  
    // Minden mező tiltása alapértelmezés szerint
    function disableFormFields() {
      $("input, textarea, button").prop("disabled", true);
    }
  
    // Az űrlap mezőinek engedélyezése
    function enableFormFields() {
      $("input, textarea, button").prop("disabled", false);
    }
  
    // Betöltéskor az összes mező tiltása
    disableFormFields();
  
    // Csomag kiválasztásának kezelése
    $("select[name='type']").on("change", function () {
      var selectedPackage = $(this).val(); // Kiválasztott csomag neve
  
      if (!selectedPackage || !packs[selectedPackage]) {
        disableFormFields();
        return;
      }
  
      var packageData = packs[selectedPackage]; // Kiválasztott csomag adatai
  
      // Mezők engedélyezése
      enableFormFields();
  
      // Automatikus kitöltés és információk
      $("#round").val(packageData.round); // Alapértelmezett körök száma
      $("#person").attr("min", packageData.min).attr("max", packageData.max); // Létszám korlátai
  
      console.log(`Kiválasztott csomag: ${selectedPackage}`);
      console.log(`Minimum létszám: ${packageData.min}, Maximum létszám: ${packageData.max}`);
      console.log(`Körök száma: ${packageData.round}`);
    });
  
    // Az űrlap beküldésének validálása
    $("form").on("submit", function (e) {
      var selectedPackage = $("select[name='type']").val();
      if (!selectedPackage || !packs[selectedPackage]) {
        alert("Kérjük, válasszon egy érvényes csomagot!");
        e.preventDefault();
        return;
      }
  
      var packageData = packs[selectedPackage];
      var personCount = parseInt($("#person").val(), 10);
      var rounds = parseInt($("#round").val(), 10);
  
      if (
        isNaN(personCount) ||
        personCount < packageData.min ||
        personCount > packageData.max
      ) {
        alert(
          `A létszámnak ${packageData.min} és ${packageData.max} között kell lennie!`
        );
        e.preventDefault();
        return;
      }
  
      if (rounds !== packageData.round) {
        alert(
          `A körök száma hibás! Ennek a csomagnak pontosan ${packageData.round} körre van szüksége.`
        );
        e.preventDefault();
        return;
      }
  
      alert("Az űrlapot sikeresen elküldtük!");
    });
  });
  