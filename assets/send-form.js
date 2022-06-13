/**
 *
 * @param { any } any It allow evaluate if arguments is a form.
 * @returns { boolean }
 */
const isForm = (any) => {
  return Object.prototype.toString.call(any) === "[object HTMLFormElement]";
};

/**
 * It allow send the form through Ajax.
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
 * @param { SubmitEvent } e Form send event
 * @returns { void }
 */
const handler = async function (e) {
  e.preventDefault();

  const form = e.target;
  if (isForm(form)) {
    const data = await post(form);
    console.log({ data });

    const containerModal = document.querySelector("#app-modal");

    console.log({ info: containerModal });
    // if (!containerModal) return;

    // alert(containerModal.textContent);
  }
};

const products = document.querySelector("#products");
if (products) products.onsubmit = handler;
