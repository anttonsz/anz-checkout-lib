# anz-checkout-lib

Librería de Web Components construida con Lit + Vite.

## Documentación para desarrolladores

### Scripts (package.json)

- `clean`: `rm -rf dist`  
  Limpia la salida de build.

- `typecheck`: `tsc --noEmit`  
  Valida TypeScript sin generar archivos.

- `build:types`: `tsc -p tsconfig.build.json`  
  Genera solo tipos (`.d.ts`).

- `build`: `npm run clean && npm run typecheck && vite build && npm run build:types`  
  Build completo de JS + tipos.

- `prepublishOnly`: `npm run build`  
  Fuerza build antes de publicar.

### Salidas del paquete (package.json)

- `main: "./dist/index.cjs"`  
  Entrada CommonJS (`require`).

- `module: "./dist/index.js"`  
  Entrada ESM (`import`).

- `types: "./dist/index.d.ts"`  
  Tipos TypeScript del paquete.

## Documentación de uso

Se recomienda importar por componente, no toda la librería.

### Import recomendado (granular)

```ts
import 'anz-checkout-lib/anz-button';
```

Luego en HTML:

```html
<anz-button></anz-button>
```

### Import global (evitar como principal)

```ts
import 'anz-checkout-lib';
```

Ese import raíz puede registrar/cargar más de lo necesario. El enfoque modular mejora control y performance.
