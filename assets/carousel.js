/**
 *
 * @param { string } selector Selector
 */
const carousel = (selector) => {
  if (typeof selector !== "string") return;

  /**
   * @type { HTMLDivElement } Slider image containers
   */
  const sliderContainers = document.querySelectorAll(selector);

  sliderContainers.forEach((sliderContainer) => {
    sliderContainer.addEventListener("click", function (e) {
      const element = e.target;
    });
  });
};
