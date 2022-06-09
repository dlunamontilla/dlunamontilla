# Explicación general del funcionamiento de los temas de Shopify

La siguiente explicación ha sido tomada de la [documentación oficial de Shopify][fuente].

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

**Input Text:** es una caja de texto de una sola línea. Un valor de marcador de posición de entrada (`placeholder`) aparecen en los ajustes definidos en `settings_schema.json`.

Su estructura JSON para generarla es la siguiente:

```json
{
  "type": "text", // Tipo de control de formulario.
  "id": "footer_linklist_title", // Atributo identificador.
  "label": "Heading", // Etiqueta que verá el usuario.
  "default": "Quick links" // Valor por defecto.
}
```

Al ingresar una entrada devolverá una cadea (`string`), de lo contrario, devolverá un objeto de tipo `EmptyDrop`.

**TextArea:** es una caja de texto de múltiples líneas. Para generar esta caja de texto debemos utilizar la siguiente estructura JSON:

```json
{
  "type": "textarea", // Tipo de campo.
  "id": "home_welcome_message", // Atributo identificador.
  "label": "Welcome message", // Texto que verá el usuario.
  "default": "Welcome to my shop!" // Valor por defecto.
}
```

Esta caja de texto devuelve una cadena (`string`), de lo contrario, devolverá un objeto de tipo `EmptyDrop` en caso de estar vacío.

## Configuraciones de entrada especializadas

Tipos de ajustes especializados:

- **article:** genera un campo de selección de artículos que completa automáticamente con los artículos disponible para la tienda. Puede utilizar eestos campos para capturar una selección de artículos, como el artículo que se mostra en la página de inicio.

La estructura JSON para generarla es la siguiente:

```json
{
  "type": "article", 	// Tipo de ajuste.
  "id": "article", 		// Identificador.
  "label": "Article"	// Etiqueta que verá el usuario.
}
```

El resultado se visualiza en la siguiente imagen:

![](https://shopify.dev/assets/themes/settings/specialized/article.png)

Los datos que devuelven son:

- [Objeto de artículo](https://shopify.dev/api/liquid/objects/article "Leer documentación - En Inglés").
- **`blank`:** si no se ha seleccionado ningún artículo, bien sea, porque no existe o porque no se seleccionó como tal. Para más información [haga clic en este enlace](https://shopify.dev/themes/architecture/settings#legacy-resource-based-settings).

**blog:** genera un campo de selección de _blogs_ que se completa automáticamente con los **blogs** disponibles para la tienda.

Para crear esta opción de personalización se requiere la siguiente estructura JSON:

```json
{
  "type": "blog",
  "id": "blog",
  "label": "Blog"
}
```

Esto es lo que verá el usuario:

![](https://shopify.dev/assets/themes/settings/specialized/blog.png "Vista previa")

Los datos que devuelven son:

- Un [objeto de blog](https://shopify.dev/api/liquid/objects/blog).

- **`blank`:** en el caso de que no se haya seleccionado nada o no exista algún blog.

**collection:** genera un campo de selector de colección que se completa automáticamene con las colecciones disponibles para la tienda. Puede utilizar estos campos para capturar una selección de colección.

Su estructura JSON para generarla es la siguiente:

```json
{
  "type": "collection",
  "id": "collection",
  "label": "Collection"
}
```

Y esto es lo que observará el usuario:

![](https://shopify.dev/assets/themes/settings/specialized/collection.png "Vista previa")

Los datos que devuelve son los siguientes:

- Un [objeto de colección](https://shopify.dev/api/liquid/objects/collection "Leer la documentación en inglés").

- **`blank`:** si no se ha realizado ninguna selección es porque la selección no es visible o no existe.




[fuente]:https://shopify.dev/themes/architecture/settings/input-settings#article "Fuente de la documentación"