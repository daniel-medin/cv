# Daniel Medin — CV

A small, static portfolio and CV. The home page shows selected websites and software with real screenshots or project images, descriptions, and technology notes. A separate About page has Daniel's English biography and links to his audio and software work.

## Run locally

From this directory:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Open <http://127.0.0.1:4173/>. The biography is at <http://127.0.0.1:4173/about.html>. There is no build step or dependency installation.

## Structure

- `index.html` — page content, project entries, and the audio project register
- `about.html` — biography, professional background, and links back to the work filters
- `styles.css` — layout, typography, and responsive styles
- `work-filter.js` — the four-stop work filter; project entries and the audio register remain accessible without JavaScript
- `favicon.svg` — DM monogram used as the browser icon
- `assets/` — screenshots taken from live projects and project imagery from their repositories
- `AGENTS.md` — editing guidance for future contributors and agents

## Biography sources

The About page combines details Daniel supplied directly with the public descriptions on [Ljudbyrån's website](https://www.ljudbyran.se/) and [MRC Collective's website](https://mrccollective.se/). The studio's site identifies Daniel as a founder, owner, sound designer, engineer, producer, and creative director, and describes its sound, voice, music, and mastering work. MRC Collective describes its origins and its booking, reporting, and youth-work products. The site avoids adding unconfirmed personal history, dates, or individual credits.

## Adding a project

1. Check the live website when public, and inspect its source repository before writing about its purpose or stack.
2. Capture a genuine screenshot when the interface is accessible. For a private app or integration, use a clearly identified image from its own repository. Save it in `assets/`.
3. Add a project entry to `index.html` in alphabetical order by project name, with a working website or repository link, descriptive image alt text, a concise purpose, verified technologies, one `data-category` value (`professional`, `hobby`, or `audio`), and the matching visible category tag. Keep the list below in the same order.
4. Check the page at desktop and mobile widths. Keep claims about Daniel's background limited to facts he has confirmed.

The work filter has four stops: All work, Professional, Hobby, and Audio. All work shows the selected project cards and a collapsed audio register. Audio opens the full register. Without JavaScript, the project cards and expanded register are visible. Each featured project card has one category.

Each stop has a shareable link: `#work`, `#professional`, `#hobby`, or `#audio`. Opening one selects the matching filter; changing the filter updates the URL. Links to audio years such as `#audio-2024` also select Audio. Other section links such as `#contact` keep their normal behavior.

## Audio project register

The Audio register contains 1,193 entries from Daniel's preliminary project-folder inventory, his comparison of Dropbox/Work and Documents/Work against external-drive backups, a later inventory of older work, and his historical work and invoice notes. It is grouped from 2026 back to 2012, with entries alphabetized within each year. The source was an automatic first pass and may still contain closely related or duplicate projects. Asterisks marking backup-based years were removed; the page notes that these and some later additions are estimates, rather than verified production dates. The folder note on “Zinzino – Why” was removed, and “Sample (okänt projekt)” was omitted because it did not identify a project. No roles or outcomes were inferred.

Daniel later supplied “Autoliv” and “Stena Recycling – Social Media” as 2026 additions. “Tele2 – AI Sheep” was already listed under 2026 and was not added again. The new Autoliv entry retains the supplied name without assuming it is one of the more specifically named Autoliv projects.

Daniel asked for reasonable guesses where the new comparison lacked a firm year. The estimated placements are AEG, Polestar Episode 03, SCA Landslaget, Vattenfall CSN Flight 3, and Volvo Trucks VR in 2026; Fristads, Kavli, and the Volleyball World Championship bumpers in 2025; Burger King Böff, Chili Mayo, Gourmet Chicken campaign versions, and Gourmet Chipotle Nordic versions in 2024; and the additional ForSea campaign film and Maurten short films in 2023. The ForSea campaign film may overlap with “Utsikten” and should be checked later. Olka Express has separate 2024-version and 2025 entries. The general “Burger King – Nya reklamvarianter” note is represented by the specific campaigns listed for 2023–2024. Treat this as a working register until the names and years can be checked against the actual work.

The older-work inventory added 272 entries. Its five unheaded blocks were assigned to 2023, 2022, 2021, 2020, and 2019 in order, using dated project names within each block as the guide. “Gekås – Glasögonfabriken” and “Volvo – Dubai Expo” were moved to 2020 because their source notes explicitly named that year. The 48 entries with no source year were assigned estimated years from 2019–2022, except two folder aliases that were not made into separate projects: “Gothenburg Film Studios – Sleep Cycle Films” and “Matilda Hagård – Adapteo.” “Fagerhult – Voice-over” appeared in both the 2023 and 2019 blocks; it appears once, under 2019. Demo/Movies repeats were not counted again; only “BEM – Lev Hållbart” (2019) and “Caparol – MicDrop” (2021) added distinct films. “Volvo – VEP / VOAB-0001, voice-over” combines the folder entry and the matching Demo/Movies reference. Source notes such as “kontroll krävs” and “enligt mappnamn” were removed from visitor-facing titles. These editorial year assignments remain provisional.

### Historical work and invoice notes

Daniel supplied the 413-page `Invoice.pdf` and asked for projects from every year, adding only previously unlisted work for 2020–2026. The review added 633 project entries across 2012–2026. The PDF and its extracted billing information are not stored in this repository. Only project names were carried over; invoice recipients, contact people, addresses, prices, hours, billing references and internal project numbers were excluded from the additions. Brand names are retained where they identify the work itself.

| Year | Added entries |
| --- | ---: |
| 2026 | 3 |
| 2025 | 8 |
| 2024 | 10 |
| 2023 | 20 |
| 2022 | 35 |
| 2021 | 27 |
| 2020 | 24 |
| 2019 | 32 |
| 2018 | 99 |
| 2017 | 78 |
| 2016 | 63 |
| 2015 | 57 |
| 2014 | 77 |
| 2013 | 88 |
| 2012 | 12 |

New titles describe projects rather than production tasks: for example, “Skissmix Korrar POKEMON_FLASH_LIVE SE, NO, DK, FI” becomes “Nintendo – Pokémon Flash Live.” Triss was already represented in 2021; that title is now “Triss – Commercials,” with no additional row for its individual films, corrections or masters. Proper project titles remain in their original language; descriptive copy is English.

Repeated workdays, revisions, masters, cutdowns and language versions were consolidated before comparing against the entire existing register, including projects already filed under estimated years. Repeated references alone were not treated as new projects. The Atlas Copco Respect and Cultural films replace the existing code-based Atlas Copco title. The Wonder Elephant and Characters mixes are represented by the existing “Nintendo – Super Mario Bros. Wonder” entry. The later Titanex work is grouped with “Nexans – Titanex” (2017), and the making-of and general/trucker films share “Volvo – Reality Roads” (2015). Generic Autoliv scooter/crash-test references were not added separately from the specifically named e-scooter crash-test project. The Polestar/Öhlins reference was not added because it may overlap with the existing Öhlins entry. Anonymous sessions, performer-only notes, code-only jobs, unconfirmed estimates and non-audio app maintenance or subtitling were omitted where they did not identify a completed audio project. Ambiguous source titles such as “Ford – Modeo,” “Volvo – Stretch Break” and “OMOIIMAX” remain uncorrected.

A later privacy check removed agency and billing-person names from inherited Stena Recycling, volleyball, Cidan, Moxiam and I-tech titles. The agency-only recording note was removed, and the generic Moxiam addition was merged with its existing entry under 2019. Inherited internal project references were also removed from visitor-facing titles. Named films retain their titles; code-only labels now show the project brand. Within each year, unnamed Autoliv and Volvo AB/Trucks aliases that then became identical were merged. The long Volvo AB version remains covered by its project entry. No prices or billing information are published in the project register.

Years for the additions follow dated work notes where available, then the invoice heading. Some headings were reused: for example, work dated in 2026 appears under a 2025 heading, and work dated in 2015 appears under a 2014 heading. These are work or billing years, not verified release dates. Existing backup-based and estimated placements remain provisional. No roles, individual credits or results were inferred from these notes.

## Included projects

- [aVenue](https://avenue.lokalbokning.se/) — live demo screenshot; booking features and stack checked against the MRC Collective source repository.
- [BitStore](https://bitstore.mrcheng.se/) — live homepage screenshot; API purpose and features from the public page, stack from its served assets and Kestrel response.
- [Chrome Fact Check](https://chromewebstore.google.com/detail/chrome-fact-check/indnkfihnnflmakhihapclnjiabdnnai) — product screenshot from its Chrome Web Store listing; features and stack from the public `daniel-medin/ChromeFactCheck` repository.
- [Codex Account Switcher](https://github.com/daniel-medin/codex-account-switcher) — cropped screenshot from an isolated test in the local repository, showing no account details; features and stack checked against the local source. This is an independent Windows app.
- [Daisy Drums / Kicki Danielsson](https://mrcheng.github.io/Daisy/preview/kicki/) — screenshot of the browser preview; synth behavior and hardware stack checked against the public `mrcheng/Daisy` repository.
- [DAWG](https://github.com/daniel-medin/dawg) — official project artwork and details from the local `dawg` repository. This is a native desktop app.
- [Disc Golf Champions](https://discgolfchampions.mrcheng.se/) — live game start screen; gameplay and stack checked against the local `disc-golf-champions` repository.
- [Fat Check](https://fatcheck.mrcheng.se/) — live app screenshot, cropped to the app element without personal data; stack checked in the local `fatcheck` repository.
- [Home Assistant: Shoppingtajm](https://github.com/daniel-medin/home-assistant-shoppingtajm) — project logo from the local integration repository; features and stack checked against its README and source.
- [Home Assistant: Skickamejl](https://github.com/MRCCollective/home-assistant-skickamejl) — project logo from the local integration repository; features and stack checked against its README and source.
- [KEKS-tools](https://keks-tools.eu/) — live homepage screenshot; purpose from the public page, stack from its served assets and ASP.NET response. The footer credits MRC Collective.
- [Lokalbokning](https://lokalbokning.se/) — live homepage screenshot; purpose from the website and technology checked against the MRC Collective source repository.
- [Malmö Fritid](https://fritid.malmo.se/) — Daniel's supplied dashboard screenshot placed in an AI-generated youth centre scene for the preview image; the scene is illustrative. The staff portal redirects to Microsoft sign-in. Purpose and stack checked against the local `Malmo-Fritids` source.
- [Medins Mediacenter](https://github.com/daniel-medin/Neo-qled) — screenshot of the actual app's browser preview from the local `Neo-qled` project, rather than a TV screen capture. Streaming-app shortcuts, HDMI inputs, the locally saved watch list and the HTML, CSS, JavaScript and Tizen API stack were checked against its source. Automatic startup and SVT Play launching remain in progress.
- [Oddcoll](https://oddcoll.com/) — live homepage screenshot; purpose checked against the public Oddcoll website and platform source, stack against the local `Oddcoll` repository.
- [Shoppingtajm](https://shoppingtajm.se/) — live homepage screenshot with the cookie notice dismissed; features and stack checked against the local `shoppingtajm` repository.
- [Skickamejl](https://skickamejl.se/) — live homepage screenshot; API features from the public website and stack checked against the MRC Collective source repository.
- [Slack Bridge](https://slackbridge.mrcheng.se/) — live homepage screenshot; the page and local Shoppingtajm integration document the event API, templates and delivery features.
- [SnickSnack](https://snicksnack.mrcheng.se/) — live homepage screenshot; features and stack checked against the local `snicksnack` repository.
- [Strippr](https://github.com/daniel-medin/Strippr) — official project artwork and details from the public repository. This is a local app, not a hosted website.
- [SummitHub](https://summithub.se/) — live homepage screenshot; event and registration features from the public website and MRC Collective source repository.
- [Tant Ellens Fikalista](https://tantellensfikalista.mrcheng.se/) — live calendar screenshot; fika booking and leaderboard features checked against the deployed page and the local `tant-ellens-fikalista` React, TypeScript, Express and SQLite source.
- [The Logbook](https://thelogbook.eu/) — user-supplied [photo of the platform in use](https://images.squarespace-cdn.com/content/v1/62f13e2e4e905206dcaa0585/856b1e85-81a4-4257-ace7-603a7bbb26ac/TheLogbook.png), as the public site requires sign-in; purpose from Daniel's supplied KEKS description and stack checked against the local `KEKS` repository.
- [The Logbook mobile demo](https://mrccollective.github.io/thelogbook-wpa/) — screenshot captured from the live interactive demo's activity detail view. Its features and React, TypeScript, Vite, IndexedDB and PWA stack were checked against the local `thelogbook-wpa` repository. The demo uses browser storage and does not connect to KEKS.
- [Ticktack](https://ticktack.se/) — live mobile screenshot; features and stack checked against the local `ticktack` repository.
- [Vad var det jag sa?](https://vadvardetjagsa.mrcheng.se/sv/) — live Swedish homepage screenshot; educational features and stack checked against the MRC Collective source repository.
- [Webbstatistik](https://webbstatistik.se/) — live homepage screenshot; features and public tracking options from the website, stack from its served assets and ASP.NET response.

Daniel supplied his [LinkedIn](https://www.linkedin.com/in/medindaniel/) and [GitHub](https://github.com/daniel-medin/) profiles for the contact section. He also supplied the sound design, project management, Ljudbyrån and MRC Collective details used in the About page. LinkedIn profile details were inaccessible during this edit, so no biography was inferred from them.

## Content still to confirm

Apart from Ljudbyrån's establishment in 2000, this draft has no employment dates, qualifications or contact email. Add those when Daniel supplies them. Do not infer further details from the neighboring repositories.
