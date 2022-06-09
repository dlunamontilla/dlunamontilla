# Explicación general del funcionamiento de los temas de Shopify

## Settings

### Campos del formulario

Estos son los campos del formulario admitidos en la
configuración de un theme de Shopify:

- Input Checkbox (casilla de verificación).
- Input Number (caja de número).
- Input Radio (Radio button). 
- Input Range (rango numérico).
- Select Box (lista desplegable de opciones).
- Input Text (caja de texto).
- TextArea (caja de texto de múltiples líneas).

**Input Checkbox:** estructura JSON para agregar la casilla de verificación:

```json
{
  "type": "checkbox", // Tipo de control de formulario.
  "id": "show_announcement", // Identificador.
  "label": "Show announcement", // Texto a mostrar.
  "default": true // Es el valor por defecto.
}
```

**Input Number:** estructura JSON para agrega un control de formulario de tipo numérico:

```json
{
  "type": "number", // Tipo de control de formulario.
  "id": "product_per_page", // Atributo ID.
  "label": "Product per page", // Texto a mostrar.
  "default": 50 // Es el valor por defecto.
}
```

**Input Radio:** este control de formulario puede permitir seleccionar una matriz de valores.

Ejemplo de su estructura JSON:

```json
{
  "type": "radio",
  "id": "logo_aligment",
  "label": "Logo alignment",
  "options": [
    {
      "value": "left",
      "label": "Left"
    },
    {
      "value": "centered",
      "label": "Centered"
    }
  ],
  "default": "left"
}
```

> **Nota:**
> Si `default` no se especifica, la primera opción se selecciona de forma predeterminada.

Los datos devueltos por este control de formulario es de tipo `string`.


**Input Range:** genera un campo de rango deslizante. Hay unos atributos a tomar en cuenta para su estructura JSON que no deben pasarse por alto, por ejemplo:

Atributo | Descripción | Requerido
|-|-|-|
`min`  | Valor mínimo de entrada. | Sí
`max`  | Valor máximo de entrada. | Sí
`step` | Tamaño del incremento de cada paso | Sí
`unit` | Selecciona el tipo de unidad de entrada. Puede seleccionar `px`, `%` o cualquier otro. | No

Ejemplo de su estructucta JSON:

```json
{
  "type": "range", // Tipo de campo de formulario.
  "id": "font_size", // Atributo id (identificador)
  "min": 12, // Valor mínimo de entrada.
  "max": 24, // Valor máximo de entrada.
  "step": 1, // Tamaño entre pasos.
  "unit": "px", // Tipo de unidad.
  "label": "Font size", // Texto que el usuario verá.
  "default": 16 // Valor por defecto.
}
```

> **Importante:** dado que el valor devuelto es un valor numérico, entonces, la propiedad `default` debe ser numérico y los atributos `min`, `max` y `step` son obligatorios.

**Select Box:** se trata de una lista desplegable de opciones que permite seleccionar una o más opciones según se haya definido su estructura.

| Atributo | Descripción | Requerido
|-|-|-|
**`options`** | Toma una matriz de definiciones `value`/`label` para cada opción del menú desplegable. | Sí
**`group`** | Este atributo es opcional y permite agregar grupo de opciones. | No

La estructura JSON que puede utilizarse es la siguiente:

```JSON
{
  "type": "select",
  "id": "vertical_alignment",
  "label": "Vertical alignment",

  "options": [
    {
      "value": "top",
      "label": "Top"
    },
    {
      "value": "middle",
      "label": "Middle"
    },
    {
      "value": "bottom",
      "label": "Bottom"
    }
  ],

  "default": "middle"
}
```

El valor devuelto por este campo es de tipo `string`.

