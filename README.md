# Theme dlunamontilla

Este tema está construído con el objeto de lograr conocer un poco más Shopify.

## Estructura HTML de`carousels` de productos.

```html
<header class="product-grid__item__header" data-name="carousel">
  <!-- Imágenes del carousel -->
  <div class="images" data-name="images">
    <div class="images__item">...</div>
  </div>

  <!-- Indicadores de posición de imágenes -->
  <div class="indicators" data-name="indicators">
    <div class="indicators__item">...</div>
  </div>
</header>
```

Esta misma estructura aplica cuando se tratan de imágenes individuales, excepto que cambian algunas cosas como se muestran a continuación:

```html
<header class="product-grid__item__header" data-name="carousel">
  <picture>
    <img src="{{ ruta_de_imagen }}" srcset="{{ ruta_de_imagen }}" />
  </picture>
</header>
```

Es posible que en una imagen individual tenga que mantenerse la misma estructura..

## Manipulación de la estructura anterior

La estructura anterior será controlada por el archivo `carousel.js`, es decir, de forma más específica por `carousel()`. Por lo tanto, está incluido de la siguiente manera:

```liquid
<script src="{{ 'carousel.js' | asset_url }}" defer="defer"></script>
```
