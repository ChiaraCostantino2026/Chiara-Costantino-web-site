# Chiara Costantino — Sito Web Statico

Repository del sito web personale e professionale di Chiara Costantino (Sales Coach & Business Developer), pronto per la pubblicazione su **GitHub Pages**.

## Stato del Progetto
Il sito è stato recentemente refattorizzato da una logica Single Page Application (SPA) a un'architettura **multi-pagina statica** robusta e ottimizzata. Tutti i percorsi relativi sono stati allineati alla nuova struttura delle cartelle e le immagini originali sono state estratte e inserite correttamente in `assets/img/`.

## Struttura delle Directory

Il progetto utilizza una separazione netta dei file per tipologia:

- `index.html` — Homepage, si trova nella root dir.
- `page.html/` — Contiene tutte le pagine secondarie:
  - `servizi.html`
  - `consulenza-formazione.html`
  - `metodo.html`
  - `chi-sono.html`
  - `dicono-di-me.html`
  - `contatti.html`
- `style.css/` — Contiene `style.css` principale.
- `script.js/` — Contiene `main.js` (logiche del menu hamburger, animazioni scroll-fade, e header statico).
- `assets/img/` — Contiene tutte le foto di Chiara e il logo.
- `.github/copilot-instructions.md` — Regole di sistema (per AI) che documentano l'architettura dei path.

## Pubblicazione su GitHub Pages
Per attivare o aggiornare il sito:
1. Fai il push/commit dei file sul branch `main`.
2. Su GitHub, vai in **Settings**.
3. Seleziona **Pages** dal menu a sinistra.
4. Seleziona **Deploy from a branch**.
5. Seleziona il branch `main` e il folder `/ (root)`, poi clicca su Save.

Il tuo sito sarà automaticamente ospitato al link fornito da GitHub.
