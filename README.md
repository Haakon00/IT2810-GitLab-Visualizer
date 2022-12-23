![200589472-642ab23b-80d5-419e-bfe4-7b50c063a2a5](https://user-images.githubusercontent.com/78231350/209253740-cdd46fa3-a432-47fe-9df1-1582df2f42c2.png)


# Dokumentasjon

For å ta i bruk Context APIet har vi laget en “darkmode”-funksjon som kan bli slått på av en toggle-knapp. Hele appen blir “wrappet” med et komponent kalt “DarkModeProvider” som gir alle child-objektene tilgang til context-objektet som inneholder en boolean som sier om darkmode er på eller av, og en funksjon for å skru darkmode på eller av. Det er mulig det hadde vært en bedre løsning istedenfor en boolean, å putte fargene som skulle brukes i dark- og lightmode i kontekst-objektet ettersom man da bare trenger å endre fargene ett sted hvis man vil gjøre justeringer på temaet, men for en relativ enkel app som vår har det ikke så mye å si.

Vi har laget et klassebasert React-komponent som er en footer nederst på siden. Denne footeren bruker darkmode konteksten i likhet med de andre komponentene til å endre farge når man skrur av og på dark mode. Vi valgte å gjøre komponenten som måtte være klassebasert så enkel som mulig, ettersom vi mener funksjonelle komponenter er bedre og enklere, og ville lage siden mest mulig med funksjonelle komponenter.

Vi har laget en funksjonell Issue-komponent som tar inn informasjon om et GitLab issue via props, hvor props-objektet skal inneholde et issueInfo-objekt som vi har definert til å inneholde visse detaljer om issuet.

Issue-komponenten henter data fra Gitlab med AJAX, og vi har valgt å bruke fetch-api-et ettersom vi mener at fetch tilbyr en enkel måte å hente data asynkront.

Vi har laget en funksjonell komponent IssueList som bruker issues i from av et issueInfo-object. Denne komponenten
returnerer alle issues i form av en Issue-komponent, og man kan filtrere på status. Ved filtrering vises enten alle issues, åpne issues eller lukkede issues. Den leser av states for å kunne velge hvilke issues man skal se og bruker hooks for å få hentet ut data fra getIssues.ts

Vi har laget en getCommits.ts som tar inn en parameter definert av brukeren, slik at man kan hente ut data fra brukerens ønsket tidsrom. Denne dataen blir så returnert.

Vi har laget en CommitVisualizer.tsx som er en funksjonell komponent som viser en graf med antall commits gjort av hver enkelt email-brukernavn. Her brukes også states og hooks for å hente ut korrekt data og slik at brukeren kan velge et visst tidsrom og se antall commits fra.

Til automatisk testing har vi brukt jest. Vi har skrevet en snapshottest i tillegg til et par enkle tester som skal kontrollere at issue-kortene viser riktig informasjon og at utformingen matcher utformingen i snapshot-bildet.

Når det kommer til testing av brukergrensesnittet og responsivt design er det gjort i chrome. Ved bruk av "inspect element" er det mulig å endre dimensjonene på nettleservinduet til ulike enheter, slik at vi kan teste nettleseren på f.eks ipad, iphone eller ordinær pc-skjerm. Dette har vi gjort for å sørge for at løsningen har et responsivt web design og at den tilpasser seg til enhenten som blir brukt og skjermstørrelse. Tilslutt har vi også gått inn på enhetene iphone 11, ipad air og pc-monitor for å teste om de oppfører seg likt som i chrome.

Istedenfor separate css-filer har vi brukt verktøyet TailwindCSS som er en enkel måte å style komponentene rett i koden (inline-css). TailwindCSS gir muligheten til å bruke mange ferdiglagde css-klasser som kan kombineres og brukes på komponentene. Dette har vi brukt til både å få siden til å se pen ut, men også gi siden et fleksibelt layout. Hvis du ser f.eks. className="h-[80vh] w-full" betyr det at komponenten har en høyde som er 80% av viewport høyden og bredde som prøver å ta hele plassen i parent elementet. Dette er ekvivalent med css klassen {height: 80vh; width: 100%}. Dette kan også kombineres med media-queries som i Tailwind signaliseres som et prefiks foran css-klassen man vil bruke. F.eks className="lg:h-[80vh] lg:w-full", her er "lg" et navn på en ferdiglagd media-query. Tailwind følger med noen standard media-queryer hvorav "lg" er en av dem. "lg" er ekvivalent med å wrappe en css-klasse med @media (min-width: 1024px) {} slik at css-klassen bare blir brukt på skjermer med bredde over 1024 piksler. Vi har også definert vår egen Tailwind media-query i tailwind.config.js "sm" som er ekvivalent med @media (min-width: 200px). Vi har også brukt media queries et par steder i index.css for å vise at vi kan det :). Vi har i hovedsak brukt media-queries til å stable siden vertikalt ved små skjermbredder ved endre flex-direction til vertikal.

For å lagre og hente frem noe lokalt har vi brukt HTML web storage, hvor både Local- og Session-storage er implementert. Localstorage blir brukt for darkmode-knappen, slik at nettleseren husker om du foretrekker darkmode eller lightmode selv om du går ut av nettleseren eller laster inn nettsiden på nytt. SessionStorage blir brukt under input-feltene for "token" og "project-id". Slik husker nettleseren hva som er skrevet inn selv om man oppdaterer vinduet. Hvis "token" og "Project-id" ikke har noen verdier, vil disse bli satt til en standardverdi til vårt eget repo.

## Hvordan teste appen mot et repo?

Sett inn en gyldig prosjekt-id og token e.g. "17561" og "glpat-M5Vt7WnMHDnhqFcjsqbp" i input-feltene på toppen av siden.

# Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
