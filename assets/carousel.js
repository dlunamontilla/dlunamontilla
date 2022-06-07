/**
 * This function will find carousels to interact with them.
 *
 * @param { string } selector Selector
 */
const carousel = (selector) => {
  if (typeof selector !== "string") return;

  /**
   * @type { NodeListOf<HTMLElement> } Slider image containers
   */
  const sliderContainers = document.querySelectorAll(selector);

  sliderContainers.forEach((sliderContainer) => {
    const images = sliderContainer.querySelectorAll("[data-name='images']");
    const indicators = sliderContainer.querySelectorAll(
      "[data-name='indicators']"
    );

    console.log({ images, indicators });

    /**
     * @type { number } Images and indicators index
     */
    let index = 0;

    /**
     * @type { Object<string, function> } Carousel path
     */
    const direction = {
      /**
       *
       * @param { number } index Images or Indicators index
       * @param { number } length Images or indicators length.
       * @returns { number } Return a value number as index.
       */
      next: function (index, length) {
        index++;
        index = index >= length ? length - 1 : length;

        console.log({ index });
        return index;
      },

      previous: function (index) {
        index--;
        index = index ? 0 : index;

        console.log({ index });
        return index;
      },
    };

    sliderContainer.addEventListener("click", function (e) {
      const element = e.target;
      const { name } = element.dataset;
      if (!name || name !== "carousel") return;

      console.log("Esto es antes de visualizar el mensaje");

      //   Si no está contenido o no es una función no continuará
      if (!(name in direction) || !(typeof direction[name] !== "function")) {
        return;
      }

      console.log("Se ve este mensaje significa que funciona");
    });
  });
};

carousel("[data-name='carousel']");
