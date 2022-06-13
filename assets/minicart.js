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

  /**
   * Return a number as string.
   *
   * @param { number } number
   * @returns { string }
   */
  function numberFormat(number) {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(number);
  }

  const minicartForm = document.querySelectorAll(".minicart-form");

  minicartForm.forEach(form => {
      form.addEventListener("click", function(e) {
          const element = e.target;

      })
  });

  /**
   * 
   * @param { number } id Product identifier
   * @param { number } value Value to insert at product.
   * @returns { void }
   */
  function setValue(id, value) {

  }
})();
