Imagenes de blog

Estructura propuesta:

- public/imagenes-blog/
  - <slug>/
    - hero.jpg      -> imagen principal del post (desktop)
    - thumb.jpg     -> miniatura para cards (opcional)
    - hero.webp     -> alternativa optimizada (opcional)
    - placeholder.svg -> fallback si falta imagen
  - placeholder.svg  -> fallback global (se copia a cada carpeta por conveniencia)

Convenciones:
- Usa nombres en minúsculas y el slug del post como carpeta.
- Si subes `hero.jpg` Next.js servirá ese archivo directamente desde `public/`.
- Si no subes `hero.jpg`, el hero usará `hero.svg` o el `placeholder.svg`.

Cómo organizar automáticamente (PowerShell):

  cd repo-root (ejecuta desde la raíz del repositorio)
  .\scripts\organize-images.ps1

Si prefieres que yo mueva las imágenes por ti, súbelas al repo dentro de `public/imagenes-blog/` y ejecuto el script o hago los cambios necesarios.
