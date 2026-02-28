# anz-checkout-lib

Librería de Web Components construida con Lit + Vite.

## Scripts (package.json)

- `clean`: `rm -rf dist`  
  Borra la carpeta `dist` para empezar limpio.

- `typecheck`: `tsc --noEmit`  
  Revisa tipos de TypeScript, pero no genera archivos.

- `build:types`: `tsc -p tsconfig.build.json`  
  Genera solo los archivos de tipos (`.d.ts`) usando configuración especial.

- `build`: `npm run clean && npm run typecheck && vite build && npm run build:types`  
  Flujo completo: limpiar, validar tipos, generar JS de la librería y generar tipos.

- `prepublishOnly`: `npm run build`  
  Antes de `npm publish`, obliga a compilar para no publicar algo roto.

## Campos `main`, `module`, `types` (package.json)

- `main: "./dist/index.cjs"`  
  Entrada para entornos CommonJS (`require`).

- `module: "./dist/index.js"`  
  Entrada ESM (`import`), usada por bundlers modernos.

- `types: "./dist/index.d.ts"`  
  Tipos TypeScript que verá quien instale tu librería.

## Uso recomendado de la librería (modular)

Se recomienda importar por componente, no toda la librería.

### Correcto (granular)

```ts
import 'anz-checkout-lib/anz-button';
```

Luego en HTML:

```html
<anz-button></anz-button>
```

### Evitar como uso principal

```ts
import 'anz-checkout-lib';
```

Ese import raíz puede registrar/cargar más de lo necesario. El enfoque modular mejora control y performance.
