// Todo el código del minicart acá.

(function () {
  const quantityFields = document.querySelectorAll("[name='quantity']");

  /**
   * Truncar cualquier caracter que no sea numérico:
   */
  quantityFields.forEach((quantity) => {
    quantity.addEventListener("keydown", function (e) {
      const key = e.key;

      if (isNaN(key) && key !== "Backspace") {
          e.preventDefault();
      }
    });
  });
})();
