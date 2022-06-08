/**
 * Get the product variants.
 * 
 * @returns { Array<Object<string, string|number|HTMLElement>> }
 */
const getVariants = () => {
    /**
     * @type { NodeListOf<HTMLElement> }
     */
    const variants = document.querySelectorAll('[data-variant-id]');

    console.log(variants);

    /**
     * 
     * @param {HTMLElement} variant HTML Element
     * @returns { Array<Object<string, number|string|HTMLElement>> }
     */
    function mapVariant(variant) {
        const { variantId } = variant.dataset;

        return {
            id: Number(variantId),
            variant,
            text: variant.textContent.toLocaleLowerCase().trim().trim()
        }
    };

    return [].map.call(variants, mapVariant);
};

const renderColor = () => {
    console.clear();
    const variants = getVariants();

    const variantsElement = document.querySelector("#variants");
    if (!variantsElement) return;

    variantsElement.onclick = (e) => {
        const element = e.target;

    };

    /**
     * Limited color dictionary
     * @type { Object<string, string> }
     */
    const colors = {
        blanco: "white",
        negro: "black",
        naranja: "orange",
        anaranjado: "orange",
        rosado: "pink",
        "verde oliva": "#737a2f",
        rojo: "#ff0000",
        roja: "#f00000",
        amarillo: "#f0c000",
        amarilla: "#f0c000",
        dorado: "#d3a01f",
        dorada: "#d3a01f",
        marron: "brown",
        beige: 'beige',
        plateado: 'silver',
        plateada: 'silver',
        azul: '#0030ff',
        gris: 'gray',

        /**
         * Return mixed colors
         * @param { string } textColor 
         * @returns { string }
         */
        default: function (textColor) {
            const _colors = textColor.split(/\s+con+\s+/i);
            console.log({ colors, textColor });

            const mixed = [];
            for (const color of _colors) {
                mixed[color] ??= this[color] ?? "white";
                mixed.push(this[color] ?? "white");
            }

            console.log({ mixed });
            return mixed;
        }
    };

    // Render color
    variants.forEach(variantElement => {
        let { id, variant, text } = variantElement;

        if (text in colors) {
            const color = colors[text];
            variant.setAttribute('style', `--color: ${color}`);
        }

        if (!(text in colors)) {
            const mixed = colors.default(text);
            variant.setAttribute('style', `--mixed: linear-gradient(${mixed.join(' 20%, ')})`);
        }
    });
};

renderColor();