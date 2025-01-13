(function ($) {
    // A `packs` objektum a csomagok adatait tartalmazza
    var packs = {
      "Céges futam": {
        "Championship Grand Prix Race": {
          min: 6,
          max: 9,
          round: 4,
        },
        "Championship Le Mans Race": {
          min: 6,
          max: 9,
          round: 6,
        },
      },
      "Normál futam": {
        "Champion mini": {
          min: 5,
          max: 100,
          round: 2,
        },
        "Champion basic": {
          min: 5,
          max: 100,
          round: 3,
        },
        "Champion advance": {
          min: 5,
          max: 100,
          round: 5,
        },
      },
    };
  
    // Az űrlap mezők alapértelmezés szerint le vannak tiltva
    function disableFormFields() {
      $("input, textarea, button").prop("disabled", true);
    }
  
    function enableFormFields() {
      $("input, textarea, button").prop("disabled", false);
    }
  
    // Az űrlap betöltésekor az összes mező tiltása
    disableFormFields();
  
    // Eseménykezelő a legördülő menühöz
    $("select[name='type']").on("change", function () {
      var selectedType = $(this).val(); // Kiválasztott csomag típusa
      var selectedPackage = packs[selectedType];
  
      if (selectedPackage) {
        enableFormFields(); // Engedélyezzük az űrlap mezőit
      } else {
        disableFormFields(); // Ha nincs csomag kiválasztva, mezők letiltása
      }
    });
  
    // Az űrlap elküldésének validálása
    $("form").on("submit", function (e) {
      var selectedType = $("select[name='type']").val();
      var selectedPackage = packs[selectedType];
      var personCount = parseInt($("#person").val(), 10);
      var rounds = parseInt($("#round").val(), 10);
  
      if (!selectedPackage) {
        alert("Kérjük, válasszon egy csomagot!");
        e.preventDefault();
        return;
      }
  
      // Ellenőrizze a létszámot
      if (personCount < selectedPackage.min || personCount > selectedPackage.max) {
        alert(
          "A létszám nem megfelelő! Minimum: " +
            selectedPackage.min +
            ", Maximum: " +
            selectedPackage.max
        );
        e.preventDefault();
        return;
      }
  
      // Ellenőrizze a körök számát
      if (rounds !== selectedPackage.round) {
        alert(
          "Helytelen körök száma! Ennek a csomagnak a következő körszáma van: " +
            selectedPackage.round
        );
        e.preventDefault();
        return;
      }
  
      alert("Az űrlapot sikeresen elküldtük!");
    });
  })(jQuery);
  