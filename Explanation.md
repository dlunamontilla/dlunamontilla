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
