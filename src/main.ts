// 🏆 Snack 1

// Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.
let datoSconosciuto: unknown;

// Se è una stringa: stampala in maiuscolo
if (typeof datoSconosciuto === "string") {
  console.log(datoSconosciuto.toUpperCase());
}
// Se è un numero: moltiplicalo per due e stampalo
else if (typeof datoSconosciuto === "number") {
  console.log(datoSconosciuto * 3);
}
// Se è un booleano: stampa “Sì” o “No” in base al suo valore
else if (typeof datoSconosciuto === "boolean") {
  datoSconosciuto ? console.log("sì") : console.log("no");
}
// Se è null: stampa “Il dato è vuoto”
else if (datoSconosciuto === null) {
  console.log("il dato è vuoto");
}

// Se è un array: stampa la sua lunghezza
else if (Array.isArray(datoSconosciuto)) {
  console.log(datoSconosciuto.length);
}
// Se è una Promise: attendi che si risolva e stampa il valore del resolve.
else if (datoSconosciuto instanceof Promise) {
  Promise.resolve(datoSconosciuto).then((val) => console.log(val));
}

// In tutti gli altri casi: stampa “Tipo non supportato”
else {
  console.log("tipo non supportato");
}

// 🏆 Snack 2
// Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:
type Dipendente = {
  // nome → stringa
  nome: string;
  // cognome → stringa
  cognome: string;
  // annoNascita → numero
  annoNascita: number;
  // sesso → Può essere solo "m" o "f".
  sesso: "m" | "f";
  // anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018])
  anniDiServizio: number[];
  // emailAziendale → Email assegnata al dipendente (non si può modificare)
  readonly emailAziendale: string;
  // contratto → Specifica il tipo di contratto del dipendente, con valori limitati a “indeterminato”, “determinato” o “freelance”.
  contratto: "indeterminato" | "determinato" | "freelance";
};

const dipendente: Dipendente = {
  nome: "Mario",
  cognome: "Stucchi",
  annoNascita: 1968,
  sesso: "m",
  anniDiServizio: [2013, 2014, 2016],
  emailAziendale: "amsdkaod@gmail.com",
  contratto: "freelance",
};

// 🏆 Snack 3
// Estendiamo Dipendente per definire due ruoli specifici all'interno dell'azienda:
type Developer = Dipendente & {
  // livelloEsperienza → Il livello di esperienza del developer (le scelte possibili sono solo “Junior”, “Mid” o “Senior”).
  livelloEsperienza: "Junior" | "Mid" | "Senior";
  // linguaggi → Un array contenente i linguaggi di programmazione utilizzati dal developer in azienda (opzionale, perché i neo assunti non hanno ancora dei linguaggi assegnati).
  linguaggi?: string[];
  // certificazioni → Un array di stringhe contenente certificazioni tecniche ottenute dal developer (può essere vuoto).
  certificazione: string[];
};
type ProjectManager = Dipendente & {
  // teamSize → Il numero di persone nel team gestito dal Project Manager (può essere null se non ha ancora un team assegnato).
  teamSize: null | number;
  // stakeholderPrincipali → Un array di stringhe con i nomi dei principali stakeholder con cui il PM collabora (può essere vuoto).
  stakeholderPrincipali: string[];
  // budgetGestito → Il totale del budget annuale gestito dal PM (opzionale).
  budgetGestito?: number;
};

// 🎯 BONUS
// Definiamo un nuovo type alias Team, che rappresenta un gruppo di lavoro all'interno dell'azienda:
// nome → Nome del team (stringa).
// progettoAttuale → Nome del progetto su cui lavora il team (può essere null se il team è in attesa di assegnazione).
// budget → Importo numerico del budget assegnato al team (sempre presente).
// membri → Una tuple in cui il primo elemento è sempre un Project Manager, seguito da uno o più Developers (almeno un developer obbligatorio).
type Team = {
  nome: string;
  progettoAttuale: null | string;
  budget: number;
  membri: [ProjectManager, Developer, ...Developer[]];
};
