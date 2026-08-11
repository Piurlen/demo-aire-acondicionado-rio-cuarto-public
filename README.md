# Demo — Servicio técnico de aire acondicionado

Landing page comercial en Next.js para un servicio técnico ubicado en Río Cuarto, Córdoba.

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

## Datos a confirmar antes de publicar

- Nombre comercial exacto.
- Servicios ofrecidos: instalación, mantenimiento y reparación aparecen como contenido editable y deben confirmarse.
- Textos descriptivos de cada servicio.
- Alcance geográfico y disponibilidad de atención.
- Reseñas: las tarjetas actuales son placeholders; deben reemplazarse exclusivamente por reseñas públicas reales autorizadas/verificadas.
- Condiciones de presupuestos o políticas comerciales, si se desean agregar.
- Fotografías: los assets actuales fueron generados con IA para esta demo.

Los recordatorios también aparecen visibles dentro de la página, en las tarjetas de servicios, la sección de reseñas y el footer.

## Contacto configurado

- Teléfono: `+54 358 438-2754`
- WhatsApp: `543584382754`
- Mensaje: `Hola, quería consultar por un servicio de aire acondicionado.`
- Dirección: Fernando Fader 405, Río Cuarto, Córdoba, Argentina.

Las constantes editables están al inicio de `app/page.tsx`.

## Imágenes IA reemplazables

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
