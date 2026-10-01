# WhattaDocs Promotional Website

Questo repository contiene il codice sorgente del sito web promozionale dedicato a **WhattaDocs**, l'assistente conversazionale documentale basato su architettura RAG ideato dallo spin-off dell'Università degli Studi di Milano, **WhattaData**. 

Mentre la piattaforma principale si occupa di risolvere i limiti dei tradizionali sistemi di *information retrieval* in ambito enterprise e fortemente verticale, questo sito istituzionale assume il ruolo critico di canale informativo primario, deputato a veicolare con precisione la proposta di valore unica che contraddistingue WhattaDocs rispetto ai competitor.

## 🎯 Obiettivi del Progetto
* **Hub di Orientamento:** Fornire documentazione chiara, casi studio e linee guida pratiche capaci di illustrare il funzionamento del sistema, abbattendo la barriera d'ingresso cognitiva legata all'adozione di un nuovo strumento AI.
* **Riduzione delle Frizioni:** Strutturare l'architettura dell'interfaccia per rendere fluido e intuitivo il passaggio dalla fase di scoperta all'ingresso nella piattaforma applicativa vera e propria.

## 🧠 Strategia UX e Stack Tecnologico
Per garantire totale coerenza tra la fase di scoperta del prodotto e l'effettivo utilizzo dello stesso, la progettazione di questo sito ha adottato lo **stesso rigoroso framework di UX Design** utilizzato per l'applicativo principale.

A livello tecnico, il sito promozionale è stato sviluppato utilizzando **HTML5** e **Tailwind CSS** per garantire un layout personalizzato. Per ottimizzare i tempi di sviluppo mantenendo un'interfaccia pulita, coerente e accessibile, è stata integrata la libreria di componenti **DaisyUI**.

## 🛠 Vincoli di Sviluppo e Contenuti
In linea con i requisiti richiesti dal corso, lo sviluppo ha rispettato alcuni vincoli specifici:
* **Breakpoints:** La responsività del sito è stata ottimizzata esclusivamente per tre risoluzioni target: **576px, 768px e 1024px**.
* **Contenuti Placeholder:** Attualmente, i testi e le immagini presenti nel sito fungono da mockup strutturale. I contenuti definitivi saranno personalizzati e integrati in futuro, parallelamente al completamento della piattaforma WhattaDocs.

## ♿ Accessibilità (A11y)
L'intero sito ha subito interventi manuali rigorosi per garantire un livello base di accessibilità a tutti gli utenti, implementando le seguenti best practice:
* **Immagini con attributo *alt*:** Inserimento dell'attributo `alt` su tutti i contenuti visivi, affinché gli utenti che fanno uso di tecnologie assistive possano comprenderne il contesto.
* **Gerarchia Semantica HTML:** Uso gerarchico corretto dei tag di intestazione (`<h1>` - `<h6>`) e impiego semantico dei landmark HTML5 (es. `<header>`, `<main>`, `<footer>`).
* **Form Accessibili:** Collegamento esplicito tra i campi di input e le relative etichette (`<label>`).
* **Skip Links:** Inserimento di link per saltare direttamente al contenuto principale. Questo elemento, visibile unicamente alla ricezione del focus via tastiera, permette agli utenti di bypassare la barra di navigazione.
* **Attributi ARIA:** Integrazione degli attributi WAI-ARIA per far sì che le tecnologie assistive comprendano correttamente lo stato e il funzionamento dei componenti interattivi più complessi.
* **Navigabilità da Tastiera e Focus:** Tutti gli elementi interattivi (pulsanti, link, form) sono fruibili tramite i tasti `Tab`, `Enter` e `Space`, mantenendo sempre un indicatore visivo chiaro per lo stato di focus attivo sullo schermo.
