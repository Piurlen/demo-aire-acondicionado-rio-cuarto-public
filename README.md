# Fabián Fuentes — Servicio técnico de aire acondicionado

Landing comercial en Next.js para el servicio técnico de aire acondicionado de Fabián Fuentes, ubicado en Río Cuarto, Córdoba.

## Ejecutar

```bash
pnpm install
pnpm dev
```

Build de producción:

```bash
pnpm build
pnpm start
```

El proyecto no usa backend, base de datos, autenticación ni servicios externos obligatorios. Se puede importar directamente en Vercel. Para fijar la URL canónica de metadata se puede configurar `NEXT_PUBLIC_SITE_URL`.

La web presenta información de contacto, servicios y ubicación de atención de Fabián Fuentes.

## Contacto configurado

- Teléfono: `+54 358 438-2754`
- WhatsApp: `543584382754`
- Mensaje general: `Hola Fabián, quiero consultar por un servicio de aire acondicionado.`
- Dirección: Fernando Fader 405, Río Cuarto, Córdoba, Argentina.

Los CTA de Instalación, Mantenimiento y Reparación usan mensajes específicos para que el técnico reciba el contexto de la consulta. El resto de los accesos utiliza el mensaje general indicado arriba.

Las constantes editables están al inicio de `app/page.tsx`.

## Imágenes del sitio

Cada fotografía es un asset independiente consumido mediante `next/image`. Se puede reemplazar manteniendo el mismo nombre y una relación horizontal similar:

- `public/images/hero-technician.png`: técnico revisando un split en una vivienda luminosa; composición amplia para hero.
- `public/images/service-maintenance.png`: primer plano de mantenimiento profesional.
- `public/images/residential-result.png`: living residencial con instalación terminada.
- `public/images/commercial-installation.png`: instalación en pequeño comercio u oficina.

Prompt común de campaña: fotografía comercial hiperrealista, arquitectura argentina contemporánea plausible, luz natural, blancos y neutros con azules suaves, indumentaria azul marino sin marca, herramientas y procedimientos técnicos creíbles, sin texto, logos, teléfonos, marcas, manos deformes, cableado peligroso ni aspecto de render 3D.

Variaciones usadas:

1. Hero: técnico y equipo concentrados hacia la derecha, con espacio negativo calmo a la izquierda para la propuesta y los CTA.
2. Servicio: plano medio/cercano del técnico manteniendo filtros y componentes accesibles de un split abierto.
3. Resultado: living argentino moderno, cómodo y realista, con el equipo correctamente instalado como foco.
4. Comercio: oficina o local pequeño argentino, limpio y profesional, con la instalación terminada visible.
