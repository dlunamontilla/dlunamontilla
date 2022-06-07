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

  console.clear();
  sliderContainers.forEach((sliderContainer) => {
    const images = sliderContainer.querySelectorAll('[data-name="images"]');
    const indicators = sliderContainer.querySelectorAll(
      "[data-name='indicators']"
    );

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

      //   Si no está contenido o no es una función no continuará
      if (!(name in direction) || !(typeof direction[name] !== "function")) {
        return;
      }
    });
  });
};

/**
 * Get SVG files and debug them before inserting into HTML
 * @returns { void }
 */
const renderArrow = () => {
  const elements = document.querySelectorAll("[data-svg*='.svg']");

  console.log({ elements });

  elements.forEach(async (element) => {
    const { svg } = element.dataset;
    if (!svg) return;

    const response = await fetch(`${svg}`);
    if (!response.ok) {
      console.error(`No se pudo cargar ${svg}`);
      return;
    }

    const html = sanitizeText(await response.text());

    // Insert SVG to element HTML:
    element.insertAdjacentHTML("beforeend", html);
  });
};

/**
 *
 * @param { string } text Find all the script inject in the code before parsing.
 * @returns { string }
 */
const sanitizeText = (text) => {
  /**
   * @type { RegExp }
   */
  const findScript = /(<script.*|<\/[a-z]+pt>)/gim;
  return text.replace(findScript, "");
};

renderArrow();
carousel('[data-name="carousel"]');
