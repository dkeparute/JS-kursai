1. NPM didelė biblioteka

npm init - INSTALIAVIMAS

package name: PROJEKTO PAVADIMINAS
version: VERSIJA
description: APRAŠAYMAS
entry point: SKIRTA BACK ENDUI
test command: TESTO ŠABLONAS
git repository: GITE NURODYTA VIETA
keywords: RAKTAŽODŽIAI
author: AUTORIUS
license: LICENZIJA

Po komandos npm init ir iškviestų klausimų finale gavome package.json
JSON - sutektstintas JavasCriptinis objektas.

2. npm i live-server vs npm i -g live-server vs npm i -D live-server

i vs install = yra tas pats
-g  reiškia --global;

npm i live-server = suintstaliuojama tik šitame projekte
npm i -g live-server = suinstaliuoja visame kompiuteryje, reiškias live server paketu naudosis visi projektai(komandiniuose darbuose tai nėra gerai)
npm i -D live-server =  skirta programuotojams live server kai nesidalinama projektu su kitais

package.lock.jscon - yra suvestinė visų programų instaliuotų

3. BIBLIOTEKOS IŠTRYNIMAS
npm unintall ir kazkokia programa

4. LIVE-SERVER PALEIDIMAS
package.json įvedame komandą sukurtą: "pavadinimas": "live-server"
NIEKADA NERAŠYTI PORTO ŽEMIAU 1000
Live serveriui nurodome specifinį portą default būdu: --port=3000

5. .GITIGNORE 
Skirta sumažinti duomenų kiekį, kelti į githubą tik tai kas aktualu
Gitas trekitan tik turinio pasikeitima

Atsisiuntus bet kokį iš githubo projektą reikia paleisti SCRIPTĄ su npm i tam kad atsisiųstų biblioteka su reikiam papildomom bibliotekom