/**
 *
 * @param { any } any Permite evaluar si el argumento es un formulario.
 * @returns { boolean }
 */
const isForm = (any) => {
  return Object.prototype.toString.call(any) === "[object HTMLFormElement]";
};

/**
 * Permite enviar el formulario mediante una petición Ajax.
 *
 * @param { HTMLFormElement } form Formulario HTML
 * @returns { Promise<any>}
 */
const post = async (form) => {
  const { method, action } = form;
  const formData = new FormData(form);

  console.log({ form });

  if (!isForm(form)) return [];

  console.log({ action });
  const response = await fetch(action, {
    method,
    body: formData,
  });

  if (!response.ok)
    console.error("No se pudo procesar la petición correctamente");

  const stringData = await response.text();
  return stringData;
};

/**
 *
 * @param { SubmitEvent } e Evento de envío de formulario
 * @returns { void }
 */
const handler = async function (e) {
  e.preventDefault();

  const form = e.target;
  if (isForm(form)) {
    const data = await post(form);
    console.log({ data });
  }
};

const products = document.querySelector("#products");
if (products) products.onsubmit = handler;
