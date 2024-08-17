# Model pentru un proiect React

## Puteti vedea codul de la fiecare lectie individual schimband branch-ul

Acest proiect a fost creat cu ajutorul
[Create React App](https://github.com/facebook/create-react-app). Pentru prezentări
și configurarea de funcții suplimentare
[consultă documentația](https://facebook.github.io/create-react-app/docs/getting-started).

## Crearea unui repository în baza modelului

Utilizează acest repository al organizației GoIT ca model pentru crearea unui repository
pentru proiectul tău. Pentru a face acest lucru, dă click pe "Use this template" și selectează opțiunea
`Create a new repository`, după cum se prezintă în imagine.

![Creating repo from a template step 1](./assets/template-step-1.png)

Următorul pas va deschide pagina de creare a unui nou repository. Completează câmpul
pentru numele acestuia, asigură-te că repository-ul este public, apoi dă click pe `Create repository from template`.

![Creating repo from a template step 2](./assets/template-step-2.png)

Odată ce repository-ul a fost creat, trebuie să accesezi setările repository-ului creat în fila `Settings > Actions > General`, după cum se prezintă în imagine.

![Settings GitHub Actions permissions step 1](./assets/gh-actions-perm-1.png)

După ce ai derulat până la sfârșitul paginii, în secțiunea `Workflow permissions`, selectează `Read and write permissions`, (Permisiuni de citire și scriere) și bifează caseta. Acest lucru
este necesar pentru a automatiza procesul de lansare a proiectului.

![Settings GitHub Actions permissions step 2](./assets/gh-actions-perm-2.png)

Avei acum un repository personal de proiecte, cu o structură de fișiere și foldere.

Lucrează apoi cu acesta așa cum ai face-o cu orice alt repository personal,
clonează-l pe computerul tău, scrie cod, confirmă-l și încarcă-l pe
GitHub.

## Pregătirea pentru muncă

1. Asigură-te că ai versiunea LTS a Node.js instalată pe computerul personal.
   [Descarcă și instalează](https://nodejs.org/en/) dacă este necesar.
2. Instalează dependențele de bază ale proiectului cu comanda `npm install`.
3. Pornește modul de dezvoltare utilizând comanda `npm start`.
4. Accesează [http://localhost:3000](http://localhost:3000) în browser-ul tău.
   Această pagină se va reîncărca automat după salvarea modificărilor în fișierele proiectului.

## Deploy

Versiunea de producție a proiectului va trece automat prin procesul de linting, va fi asamblată și implementată pe GitHub Pages, în ramura `gh-pages`, de fiecare dată când ramura `main` este actualizată. De exemplu, după un push direct sau o cerere de pull-request acceptată.

Pentru a face acest lucru, trebuie să editeezi câmpul "homepage" din fișierul package.json, înlocuind "your_username" și "your_repo_name" cu detaliile tale, apoi să trimiți aceste modificări pe GitHub.

json
"homepage": "https://your_username.github.io/your_repo_name/"

În continuare, mergi la setările repository-ului GitHub (`Settings` > `Pages`) și setează distribuirea versiunii de producție a fișierelor în folderul `/root` al ramurii `gh-pages`, dacă acest lucru nu a fost făcut în mod automat.

![GitHub Pages settings](./assets/repo-settings.png)

### Deployment status

Starea de implementare a celui mai recent commit este afișat printr-o iconiță lângă ID-ului acestuia.

- **Galben** - proiectul este în curs de asamblare și de implementare.
- **Verde** - implementarea a fost finalizată cu succes.
- **Roșu** - a apărut o eroare în timpul procesului de linting, asamblării sau implementării.

Pentru a obține informații mai detaliate despre starea implementării, poți da click pe iconița corespunzătoare și apoi accesează link-ul "Details" din fereastra pop-up care se deschide.

![Deployment status](./assets/deploy-status.png)

### Pagina live

După un anumit interval de timp, de obicei câteva minute, poți vizualiza pagina live la adresa indicată în proprietatea "homepage" editată. De exemplu, iată un link către versiunea live pentru acest repository:
[https://goitacademy.github.io/react-homework-template](https://goitacademy.github.io/react-homework-template).

Dacă se deschide o pagină goală, asigură-te că în fila "Console" nu există erori legate de căi greșite către fișierele CSS și JS ale proiectului (**Eroare 404**). Cel mai probabil, valoarea proprietății "homepage" din fișierul package.json este incorectă.

### Rutarea

Dacă aplicația utilizează biblioteca react-router-dom pentru rutare,
trebuie să configurezi suplimentar componenta `<BrowserRouter>`, trecând în prop-ul "basename" numele exact al repository-ului tău. Bara oblică la începutul șirului este obligatorie.

jsx
<BrowserRouter basename="/your_repo_name">
<App />
</BrowserRouter>

## Cum funcționează

![How it works](./assets/how-it-works.png)

1. După fiecare "push" în ramura `main` a repository-ului GitHub, se va crea un fișier special script (GitHub Action) din fișierul `.github/workflows/deploy.yml`.
2. Toate fișierele din repository sunt copiate pe server, unde proiectul este inițializat, este efectuat linting-ul și asamblarea înainte de implementare.
3. Dacă toți pașii sunt finalizați cu succes, versiunea asamblată în producție a fișierelor proiectului este trimisă în ramura `gh-pages`. În caz contrar, în jurnalul (log) de execuție al scriptului vor fi indicate problemele întâlnite.

# Întrebări de Interviu pentru Dezvoltare Web

Acest repository conține o listă de întrebări comune pentru interviuri în dezvoltare web, categorisite în trei secțiuni principale: **HTML + CSS**, **JavaScript** și **React**.

## HTML + CSS

1. **Ce este DOCTYPE și la ce este folosit? Ce se întâmplă dacă nu este specificat?**
2. **La ce sunt folosite metatag-urile?**
3. **Care este diferența dintre un element de tip bloc și unul de tip inline?**
4. **De ce unele caractere arată ca pătrate pe o pagină web?**
5. **Ce înseamnă HTML semantic și ce tag-uri semantice cunoști?**
6. **Ce tipuri de titluri există în HTML?**
7. **Ce înseamnă fluxul documentului în HTML? Poate fi modificat?**
8. **Care sunt metodele de adăugare a JavaScript într-o pagină HTML? Care este diferența dintre ele?**
9. **Care sunt metodele de adăugare a CSS într-o pagină?**
10. **Care este diferența dintre "reset.css" și "normalize.css"?**
11. **Ce este "CSS Critic"?**
12. **Ce înseamnă specificitatea selectorilor în CSS?**
13. **Care este diferența dintre o pseudo-clasă și un pseudo-element în CSS?**
14. **Ce reprezintă modelul blocului în CSS?**
15. **Care este rolul proprietății "box-sizing"?**
16. **Ce tipuri de poziționări ale elementelor există într-o pagină web?**
17. **Cum funcționează proprietatea "z-index"?**
18. **Care este diferența dintre unitățile de măsură "px", "em" și "rem"?**
19. **Ce reprezintă termenii "fluid", "adaptive" și "responsive" în dezvoltarea web? Care este diferența dintre aceștia?**
20. **Care este diferența dintre "visibility:hidden" și "display:none"?**
21. **Ce reprezintă "repaint" și "reflow"?**
22. **Care este diferența dintre o adresă relativă și una absolută?**
23. **Care este diferența dintre "tag" și "element"?**
24. **Când este folosit elementul "<button>" și când "<a>"?**
25. **La ce este folosit atributul "type" în buton?**
26. **Care este diferența dintre "checkbox" și "radio button"?**
27. **Ce reprezintă moștenirea stilurilor în CSS? Și ce este cascada în CSS?**
28. **Care este diferența dintre imagini cu conținut și cele decorative în web design?**
29. **De ce elementele "<img>" și "<input>" nu au pseudo-elemente "::before, ::after"?**
30. **Ce reprezintă "flex container" și "flex element"?**
31. **Ce reprezintă "flex axis"?**
32. **Care sunt avantajele SVG în comparație cu PNG sau JPEG?**

## JavaScript

1. **Care sunt tipurile de date în JavaScript?**
2. **Ce este "NaN"?**
3. **Care este diferența dintre "null" și "undefined"?**
4. **Care este diferența dintre egal strict (===) și egal (==)?**
5. **Cum funcționează operatorii logici !, &&, ||?**
6. **Ce înseamnă "use strict" și la ce este folosit?**
7. **De ce rezultatul comparației a două obiecte similare va fi "false"?**
8. **Cum se verifică identitatea a două obiecte?**
9. **Cum se creează copia unui obiect?**
10. **Care este diferența dintre variabilele "var", "let" și "const"?**
11. **Cum se verifică dacă un obiect este un "array"?**
12. **Ce metode de iterare a "array"-urilor cunoști?**
13. **Cum se unesc două "array"-uri?**
14. **Cum se verifică dacă un element se află într-un "array"?**
15. **Se poate utiliza un ciclu "for in" pentru "array"-uri? Care sunt dezavantajele acestui mod de abordare?**
16. **Ce înseamnă "hoisting"?**
17. **Care este valoarea variabilei "var" înainte de declararea sa?**
18. **Ce se întâmplă atunci când sunt accesate variabile "let/const" înainte de declararea lor?**
19. **Ce înseamnă "scope"? Care sunt tipurile?**
20. **Care este diferența dintre "Function Declaration" și "Function Expression"?**
21. **Ce sunt funcțiile de tip "callback"?**
22. **Care este diferența dintre o funcție "arrow" și o funcție obișnuită?**
23. **Există un analog al "arguments" pentru funcțiile "arrow"?**
24. **Cum se apelează o funcție cu o întârziere de 5 secunde?**
25. **Ce înseamnă "lexical environment"?**
26. **Care reprezintă un "lexical environment" global?**
27. **Ce sunt "closures"? La ce sunt folosite?**
28. **Ce înseamnă "IIFE"?**
29. **Care sunt principiile de bază ale programării orientate pe obiecte (OOP)?**
30. **Ce reprezintă "this"?**
31. **Cum poate fi schimbat contextul de apel al unei funcții?**
32. **Se poate schimba contextul unei funcții returnate de metoda "bind"?**
33. **Se poate schimba contextul unei funcții "arrow"?**
34. **Ce este un "object prototype"?**
35. **Cum funcționează moștenirea bazată pe prototipuri în JS?**
36. **Cum se creează un obiect fără prototip?**
37. **Cum se verifică dacă proprietatea unui obiect este propria sa proprietate sau este moștenită de la prototip?**
38. **Se poate interzice modificarea proprietăților unui prototip? Cum se face acest lucru?**
39. **Care este diferența dintre o funcție constructor și o clasă?**
40. **Cum se adaugă o metodă la o instanță a unei clase în JavaScript?**
41. **Ce înseamnă "LocalStorage" și "SessionStorage"?**
42. **Ce este un "Promise"?**
43. **La ce este folosită metoda "Promise.all" și "Promise.race"?**
44. **Ce este "async/await" și la se folosește?**
45. **Cum se pot gestiona erorile în "async/await"?**
46. **Ce este "event loop"?**
47. **Ce înseamnă "CRUD"?**

## React

1. **La ce este folosit "Virtual DOM" în React?**
2. **Care este diferența dintre "Virtual DOM" și "Shadow DOM"?**
3. **Care este diferența dintre "state" și "props"?**
4. **Care este diferența dintre un component bazat pe clasă și unul funcțional?**
5. **Care sunt metodele unui lifecycle în React?**
6. **Cum se actualizează "state" într-o componentă bazată pe clasă?**
7. **De ce este "setState" o funcție asincronă?**
8. **Cum se face actualizarea unei componente?**
9. **Cum se previne/restricționează actualizările inutile ale unei componente?**
10. **Ce este "PureComponent" și care este caracteristica sa specială?**
11. **La ce este folosit "key"?**
12. **La ce este folosit "Fragment"?**
13. **La ce sunt folosite "portals" în React?**
14. **Ce este "refs"?**
15. **Ce este "context"? Câte contexte pot exista într-un proiect?**
16. **La ce sunt folosite "render props"?**
17. **La ce sunt folosite "HOCs" (Higher Order Components)?**
18. **Cum se implementează un "Error Boundary"?**
19. **La ce sunt bune "hooks"? Ce "hooks" cunoști?**
20. **Care sunt regulile pentru utilizarea "hooks"?**
21. **La ce este folosit "useEffect"?**
22. **Care este diferența dintre "useEffect" și "useLayoutEffect"?**
23. **Ce este inițializarea "lazy" a stării în "useState" și "useReducer"?**
24. **Care este diferența dintre "useRef" și "createRef"?**
25. **La ce sunt folosite "useMemo" și "useCallback"?**
26. **La ce este folosit Redux? Care este fluxul său de date?**
27. **Ce sunt este Redux middleware?**
28. **Unde trebuie să se efectueze "side effects" în Redux?**
29. **Care este rolul funcției "next()" în Redux middleware?**
30. **La ce folosesc selectorii în Redux?**
31. **Care este diferența dintre "action" și "action creator"?**
