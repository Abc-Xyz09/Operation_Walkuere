# Website lokal starten

Diese Website läuft nicht direkt durch einen Doppelklick auf die Datei `index.html`. Stattdessen muss ein kleiner lokaler Webserver gestartet werden. Dadurch funktioniert die Website genauso wie im Internet, bleibt aber vollständig auf deinem Computer.

## Windows

### 1. Prüfen, ob Python installiert ist

Öffne die **Eingabeaufforderung**:

* Drücke `Windows-Taste + R`
* Gib `cmd` ein
* Drücke Enter

Gib ein:

```
python --version
```

Wenn eine Versionsnummer angezeigt wird, ist alles bereit.

Falls nicht, installiere Python von:
https://www.python.org/downloads/

Achte bei der Installation darauf, die Option **"Add Python to PATH"** zu aktivieren.

### 2. Website starten

1. Öffne den Ordner der Website.
2. Klicke oben in die Adressleiste des Explorers.
3. Schreibe:

```
cmd
```

und drücke Enter.

4. Gib ein:

```
python -m http.server
```

5. Öffne im Browser:

```
http://localhost:8000
```

Die Website sollte nun funktionieren.

---

## macOS

### 1. Terminal öffnen

Öffne die App **Terminal**.

### 2. Zum Website-Ordner wechseln

Am einfachsten:

* Ziehe den Website-Ordner in das Terminalfenster.
* Schreibe davor:

```
cd 
```

Beispiel:

```
cd /Users/Name/Desktop/Website
```

### 3. Server starten

Gib ein:

```
python3 -m http.server
```

Öffne anschließend im Browser:

```
http://localhost:8000
```

---

## Linux

### 1. Terminal öffnen

Öffne ein Terminalfenster.

### 2. In den Website-Ordner wechseln

Zum Beispiel:

```
cd ~/Desktop/Website
```

### 3. Server starten

Gib ein:

```
python3 -m http.server
```

Öffne anschließend im Browser:

```
http://localhost:8000
```

---

## Server beenden

Wenn du fertig bist:

* Gehe zurück ins Terminal bzw. die Eingabeaufforderung.
* Drücke:

```
Strg + C
```

Danach kannst du das Fenster schließen.

## Hinweis

Die Website läuft nur auf deinem eigenen Computer. Sie wird nicht ins Internet hochgeladen und ist für andere Personen nicht erreichbar.

Datei erstellt mit ChatGPT
Prompt: could you quickly write instructions (in German) on how to set up a local server on the most common OSs? We're talking about 11th graders here