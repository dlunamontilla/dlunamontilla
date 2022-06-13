/**
 * Insolate code.
 */
(function () {
    const options = document.querySelectorAll("#options");

    /**
     * Set value to hidden field of the form to identify the product.
     * 
     * @param { string } identifier Product identifier by title.
     * @param { string } productId Value of the identifier of the product.
     * @returns { void }
     */
    const setValueId = (identifier, productId) => {
        /**
         * @type { HTMLInputElement } Get product identifier
         */
        const idField = document.querySelector(`#id-${identifier}`);
        if (idField) idField.value = productId;
    }

    /**
     * Set image of the product.
     * 
     * @param { string } identifier Product identifier title.
     * @param { string } image The path of the image.
     * @returns { void } 
     */
    const setImage = (identifier, image) => {
        /**
         * @type { NodeListOf<HTMLElement> } Images of the variants
         */
        const pictures = document.querySelectorAll(`#source-variant-${identifier}, #image-variant-${identifier}`);

        for (const picture of pictures) {
            if (picture.tagName === "SOURCE") {
                picture.srcset = image;
                continue;
            }

            picture.src = image;
        }
    }

    /**
     * 
     * @param { string } identifier Product identifier 
     * @param { Object<string, string|number> } param Product data
     */
    const setDescription = (identifier, param) => {
        const { price, title } = param;

        const variantPrice = document.querySelector(`#variant-price-${identifier}`);
        const variantName = document.querySelector(`#variant-name-${identifier}`);

        if (variantPrice && variantName) {
            variantPrice.textContent = price;
            variantName.textContent = title;
        }
    }

    options.forEach(option => {
        option.addEventListener("click", function (e) {
            /**
             * @type { HTMLElement }
             */
            const element = e.target;
            if (element.tagName !== "BUTTON") return;
            
            const { id, image, title, productTitle, price } = element.dataset;

            setValueId(productTitle, id);
            setImage(productTitle, image);

            setDescription(productTitle, {
                price,
                title
            });
        });
    });

}());