# KON-SPAW

Strona firmy KON-SPAW, która zajmuje się konstrukcjami stalowymi oraz cięciem laserem, CNC
i waterjetem. Na stronie są oferta, technologie, galeria realizacji, klienci i formularz kontaktowy.

Podgląd: https://mafu2k.github.io/kon-spaw/

## Technologie

React i Vite, style w Tailwindzie. Animacje przy przewijaniu robi GSAP, a efekt 3D w sekcji
hero Three.js. Każdy push na `main` buduje stronę i wrzuca ją na GitHub Pages
(`.github/workflows/deploy.yml`).

## Uruchomienie

```bash
npm install
npm run dev
npm run lint
npm run build    # wynik w dist/, ścieżki pod /kon-spaw/
```
