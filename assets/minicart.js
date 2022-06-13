// Todo el código del minicart acá.

(function () {
  /**
   *
   * @param { any } any If value any is a form return true.
   * @returns { bool }
   */
  const isForm = (any) => {
    return Object.prototype.toString.call(any) === "[object HTMLFormElement]";
  };

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
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    }).format(number / 100);
  }

  const minicartForm = document.querySelectorAll(".minicart-form");

  minicartForm.forEach((form) => {
    let num = 0;

    form.addEventListener("click", function (e) {
      const element = e.target;
      const { action, price } = element.dataset;

      num = getValue(form);

      if (!action) return;

      if (price) {
        num = action === "remove" && action !== "add" ? --num : ++num;
        num = num < 0 ? 0 : num;

        setValue(this, num);

        updatePrice(this, {
          quantity: num,
          price: Number(price),
        });
      }

      if (action === "delete") {
        this.remove();
      }
    });
  });

  /**
   *
   * @param { number } form Product identifier
   * @param { number } quantity Product quantity
   * @returns { void }
   */
  function setValue(form, quantity) {
    if (!isForm(form)) return;
    const text = form.querySelector("[type='number']");
    if (!text) return;

    quantity = quantity > 20 ? 20 : quantity;

    text.value = quantity;
  }

  /**
   *
   * @param { HTMLFormElement } form Minicart form
   * @returns { number }
   */
  function getValue(form) {
    if (!isForm(form)) return 0;
    const text = form.querySelector("[type='number']");
    if (!text) return 0;
    return Number(text.value.trim());
  }

  /**
   * Updating the prices of the products.
   *
   * @param { HTMLFormElement } form Product price.
   * @param { Object<string, number> } param Products quantity.
   * @returns { void }
   */
  function updatePrice(form, param) {
    const { price, quantity } = param;
    if (!isForm(form) || !price || typeof quantity !== "number") return;

    const priceElement = form.querySelector('[data-name="price"]');
    if (!priceElement) return;

    priceElement.textContent = `${numberFormat(price * quantity)}`;
  }

  const buttonMinicartClose = document.querySelector("#button-minicart-close");

  if (buttonMinicartClose) buttonMinicartClose.addEventListener('click', function(e) {
      /**
       * Close the modal window
       */
      this.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
  })
})();
