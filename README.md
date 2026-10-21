# DigiTal Zwilling Wuppertal: Quellcode der Live-Anwendungen

Dieses Repository enthält den Quellcode, aus dem die öffentlich betriebenen Anwendungen des DigiTal Zwillings Wuppertal gebaut werden. Er ist ein Auszug aus dem Monorepo [carma](https://github.com/cismet/carma) der cismet GmbH und aus dem Repository [carma-wuppertal-collab](https://github.com/cismet-collab/carma-wuppertal-collab).

Der Inhalt wird automatisch aus carma erzeugt. Entwickelt wird in carma; Änderungen, die direkt hier eingereicht werden, überschreibt der nächste Abgleich.

## Enthaltene Anwendungen

- `stadtplan` (`apps/topicmaps/stadtplan`)
- `legals` (`apps/legals`)
- `kulturstadtplan` (`apps/topicmaps/kulturstadtplan`)
- `tz-leerstandsmanagement` (`apps/topicmaps/tz-leerstandsmanagement`)
- `x-and-ride` (`apps/topicmaps/x-and-ride`)
- `bplan-auskunft` (`apps/topicmaps/bplan-auskunft`)
- `e-bikes` (`apps/topicmaps/e-bikes`)
- `vorhabenkarte` (`apps/topicmaps/vorhabenkarte`)
- `fnp-inspektor` (`apps/topicmaps/fnp-inspektor`)
- `geoportal` (`apps/geoportal`)
- `luftmessstationen` (`apps/topicmaps/luftmessstationen`)
- `klimaorte` (`apps/topicmaps/klimaorte`)
- `kita-finder` (`apps/topicmaps/kita-finder`)
- `e-auto-ladestation` (`apps/topicmaps/e-auto-ladestation`)
- `baederkarte` (`apps/topicmaps/baederkarte`)
- `hitzeinderstadt` (`apps/topicmaps/hitzeinderstadt`)
- `verdis-desktop` (`apps/verdis/desktop`)
- `lagis-desktop` (`apps/lagis/desktop`)
- `generic-topicmap` (`apps/topicmaps/generic`)
- `potenzialflaechen-online` (`apps/wunda/potenzialflaechen`)
- `umweltalarm` (`apps/wunda/umweltalarm`)
- `belis-desktop` (`apps/belis/desktop`)

Zu jeder Anwendung gehören die Bibliotheken, von denen sie abhängt, und die Konfigurationsdateien für den Build.

## Stand

- carma: `25cea9f95470e9088987b5327f43655bba0843f5`
- carma-wuppertal-collab: `4636c9b7efcbfb4a05a28ccfad39a1c1e503f86f`

Ab der nächsten Live-Auslieferung legt jede Auslieferung einer Anwendung hier einen neuen Commit und ein Tag `<anwendung>/v<version>` an, und `LIVE.json` zeigt dann, welche Version welcher Anwendung live ist.

## Nicht enthaltene Erweiterungen

Einige Erweiterungen der Kartendarstellung liegen in einem nicht öffentlichen Repository der cismet GmbH und sind hier nicht enthalten, darunter die Überblendung zwischen WMS-Kartenebenen und die animierte Darstellung von Strömungsfeldern. Die Software lässt sich ohne sie bauen und betreiben, diese Funktionen fehlen dann.

## Bauen

Der Produktionsbuild großer Anwendungen wie des Geoportals braucht mehr Arbeitsspeicher, als Node.js standardmäßig zulässt, und bricht sonst mit „JavaScript heap out of memory“ ab. carma baut deshalb mit 8 GiB:

```bash
NODE_OPTIONS=--max-old-space-size=8192 npx nx run geoportal:build --configuration=production
```

## Lizenz

MIT, siehe [LICENSE](LICENSE). Eine nicht offizielle deutsche Übersetzung steht in [LICENSE.de.md](LICENSE.de.md). Für die Teile aus carma-wuppertal-collab gilt dessen eigene Lizenzdatei unter `libraries/collaboration/carma-wuppertal-collab/wuppertal-collab-submodule/`.
