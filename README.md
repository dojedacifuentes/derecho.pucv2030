# Escuela de Derecho PUCV 2030

**Informe estratégico interactivo** sobre la oportunidad institucional de la Escuela de Derecho PUCV frente a la inteligencia artificial. Construido para presentar a la Dirección de la Escuela — sobrio, académico y navegable en computador y celular.

> _“La PUCV no parte desde cero. Parte desde una base fragmentada. La brecha no es de interés: es de institucionalización.”_

Preparado por **Diego Ojeda Cifuentes** · Derecho, IA y Tecnología (DIAT). Documento de trabajo para conversación estratégica.

---

## Qué es

Una aplicación web **sin backend, sin API keys, sin login y sin datos remotos**. Todo el contenido vive en archivos TypeScript dentro de `/data`. Se ejecuta localmente, se versiona en GitHub y se despliega en Vercel con un clic.

### Estructura de secciones

1. **Hero** — tesis y marco temporal.
2. **La aceleración externa** — curva de adopción 2023–2030 (ABA / Clio) + proyección.
3. **Cambio de paradigma** — de las herramientas a las capacidades; evolución 2023→2030.
4. **Estudiante tradicional vs. aumentado.**
5. **Benchmark nacional** — ranking de universidades + desglose PUCV (2,5).
6. **PUCV: activos y brechas.**
7. **El límite del modelo puente** — puente operativo vs. plataforma institucional.
8. **De programa-evento a plataforma** — DIAT actual → DIAT 2030.
9. **Tensiones institucionales** — cuatro tensiones, sin culpables.
10. **Ruta de profesionalización DIAT** — 7 niveles.
11. **Optativo propuesto.**
12. **Protocolo mínimo de IA.**
13. **Integración transversal** — IA en ramos, sin reforma radical.
14. **Plan 2026–2030.**
15. **Panel de proyección** — gráfico + **Modo escenarios** (3 trayectorias simulables).
16. **Modo Director** — “¿Qué pasa si no hacemos nada?”.
17. **Resumen ejecutivo** — copiable al portapapeles.
18. **Descargas** — 5 documentos imprimibles (HTML / PDF).
19. **Fuentes y enlaces.**
20. **Cierre y firma.**

---

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS 3** + sistema de diseño propio en `styles/globals.css`
- **Framer Motion** (animaciones sobrias: reveals, barras, líneas)
- **Lucide React** (íconos)
- Gráficos hechos a medida en SVG (sin librerías pesadas)

---

## Instalación y comandos

Requiere **Node.js 18.18+** (probado en Node 24).

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo  →  http://localhost:3000
npm run dev

# 3. Build de producción (debe pasar sin errores)
npm run build

# 4. Servir el build de producción localmente
npm start
```

---

## Cómo editar los datos

Todo el contenido es editable sin tocar componentes. Abre los archivos en **`/data`**:

| Archivo | Qué controla |
|---|---|
| `data/benchmark.ts` | Ranking de universidades y desglose PUCV. |
| `data/timeline.ts` | Curva de adopción 2023–2030, evolución del paradigma y el cambio Persona→Sistema→IA. |
| `data/roadmap.ts` | Plan 2026–2030 y la curva del panel de proyección. |
| `data/trainingRoute.ts` | Los 7 niveles de la ruta DIAT. |
| `data/proposals.ts` | Diagnóstico, modelo puente/plataforma, tensiones, optativo, protocolo, integración, escenarios, modo director y resumen ejecutivo. |
| `data/sources.ts` | Fuentes y enlaces. |

Ejemplo — cambiar un puntaje del benchmark:

```ts
// data/benchmark.ts
{ id: "pucv", name: "...", short: "PUCV", score: 2.5, highlight: true },
//                                              ^ edita aquí
```

Los gráficos, las barras y los textos se recalculan solos.

### Actualizar fuentes y enlaces

En `data/sources.ts`, cada fuente tiene `title`, `institution`, `year`, `url` y `category`.
Las marcadas con **`placeholder: true`** muestran una etiqueta **“Verificar URL”** en la app: corrige la `url` y elimina esa línea cuando el enlace sea definitivo.

```ts
{
  id: "ley-21719",
  title: "Ley 21.719 sobre protección de datos personales",
  institution: "Biblioteca del Congreso Nacional (BCN)",
  year: "2024",
  url: "https://www.bcn.cl/leychile/...",  // ← pega la URL exacta
  category: "regulacion",
  placeholder: true,                        // ← borra esta línea al verificar
},
```

---

## PDF imprimible (1 página de diagnóstico + 1 de propuesta)

Documento estratégico premium en **carta horizontal, 2 páginas**, pensado para entregar físicamente. Fondo claro (rinde bien en color y en blanco y negro), acentos cian/negro, nodos, radar y matriz 2×2 vectoriales.

```bash
npm run pdf
```

- Salida: **`output/derecho-pucv-2030-diagnostico-propuesta.pdf`**
- Generado con **PDFKit** (vectorial, fuentes del sistema Helvetica/Courier embebidas — sin internet ni fuentes externas).
- Reproducible y editable: todo el contenido y las posiciones están en [`scripts/generate-pdf.js`](scripts/generate-pdf.js).
- Para imprimir: abrir el PDF y usar _Imprimir_ a tamaño real (carta, horizontal).

## Subir a GitHub

```bash
git init
git add .
git commit -m "Informe estratégico Derecho PUCV 2030"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/derecho-pucv-2030.git
git push -u origin main
```

> `node_modules`, `.next` y los archivos locales ya están ignorados en `.gitignore`.

---

## Desplegar en Vercel

**Opción A — desde GitHub (recomendada):**

1. Entra a [vercel.com](https://vercel.com) e inicia sesión con GitHub.
2. **Add New → Project** y selecciona el repo `derecho-pucv-2030`.
3. Vercel detecta Next.js automáticamente. No hay variables de entorno que configurar.
4. **Deploy.** En ~1 minuto tendrás una URL pública (`https://derecho-pucv-2030.vercel.app`).

**Opción B — desde la terminal:**

```bash
npm i -g vercel
vercel          # despliegue de previsualización
vercel --prod   # despliegue de producción
```

---

## Cómo presentarlo en la reunión

- **Pantalla completa.** Empieza en el Hero y desplaza con calma; la barra superior marca el progreso de lectura.
- **Índice lateral** (derecha, en computador): salta a cualquier sección.
- **Modo escenarios** (Panel de proyección): cambia entre _Mantener estado actual → Transformación gradual → Liderazgo regional_ frente al Director; los indicadores se mueven en vivo.
- **Modo Director:** abre _“¿Qué pasa si no hacemos nada?”_ cuando quieras instalar la urgencia.
- **Resumen ejecutivo:** botón **Copiar** para pegarlo en un correo, o **Imprimir / Guardar PDF**.
- **Descargas:** cinco documentos de trabajo (optativo, ruta, protocolo, informe ejecutivo, benchmark) en formato imprimible.
- **Impresión:** `Ctrl/Cmd + P` genera una versión limpia en blanco para PDF.

---

## Accesibilidad y rendimiento

- Contraste alto, navegación por teclado, `aria-label` en navegación y gráficos.
- Respeta `prefers-reduced-motion` (desactiva animaciones).
- Sitio estático, sin dependencias remotas salvo las tipografías (Inter, IBM Plex Mono), que Next.js incrusta en el build.

---

## Nota sobre el lenguaje

El informe está redactado para **proponer una solución institucional**, no para personalizar conflictos. No nombra unidades ni personas como problema: presenta activos reales, una brecha solucionable y una hoja de ruta. La adopción se plantea **con método, no con prisa**.
