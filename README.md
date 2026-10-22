# Daniel Medin — CV

A small, static portfolio and CV. The page introduces Daniel's sound design and project management experience in English and documents selected websites and software with a real screenshot or project image, a short description, and the technology used.

## Run locally

From this directory:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Open <http://127.0.0.1:4173/>. There is no build step or dependency installation.

## Structure

- `index.html` — page content, project entries, and the audio project register
- `styles.css` — layout, typography, and responsive styles
- `work-filter.js` — the four-stop work filter; project entries and the audio register remain accessible without JavaScript
- `favicon.svg` — DM monogram used as the browser icon
- `assets/` — screenshots taken from live projects and project imagery from their repositories
- `AGENTS.md` — editing guidance for future contributors and agents

## Adding a project

1. Check the live website when public, and inspect its source repository before writing about its purpose or stack.
2. Capture a genuine screenshot when the interface is accessible. For a private app or integration, use a clearly identified image from its own repository. Save it in `assets/`.
3. Add a project entry to `index.html` in alphabetical order by project name, with a working website or repository link, descriptive image alt text, a concise purpose, verified technologies, one `data-category` value (`professional`, `hobby`, or `audio`), and the matching visible category tag. Keep the list below in the same order.
4. Check the page at desktop and mobile widths. Keep claims about Daniel's background limited to facts he has confirmed.

The work filter has four stops: All work, Professional, Hobby, and Audio. All work shows the selected project cards and a collapsed audio register. Audio opens the full register. Without JavaScript, the project cards and expanded register are visible. Each featured project card has one category.

Each stop has a shareable link: `#work`, `#professional`, `#hobby`, or `#audio`. Opening one selects the matching filter; changing the filter updates the URL. Links to audio years such as `#audio-2024` also select Audio. Other section links such as `#contact` keep their normal behavior.

## Audio project register

The Audio register contains 250 names from Daniel's preliminary project-folder inventory, grouped by the source's year sections (2026, 2025, 2024, 2023, and 2021) and alphabetized within each year. The source was an automatic first pass and may still contain closely related or duplicate projects. Asterisks marking backup-based years were removed; the page notes that these may reflect the earliest backup rather than the production date. The folder note on “Zinzino – Why” was removed, and “Sample (okänt projekt)” was omitted because it did not identify a project. No roles, outcomes, or production types were invented. Treat this as a working register until the names and years can be checked against the actual work.

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
- [Oddcoll](https://oddcoll.com/) — live homepage screenshot; purpose checked against the public Oddcoll website and platform source, stack against the local `Oddcoll` repository.
- [Shoppingtajm](https://shoppingtajm.se/) — live homepage screenshot with the cookie notice dismissed; features and stack checked against the local `shoppingtajm` repository.
- [Skickamejl](https://skickamejl.se/) — live homepage screenshot; API features from the public website and stack checked against the MRC Collective source repository.
- [Slack Bridge](https://slackbridge.mrcheng.se/) — live homepage screenshot; the page and local Shoppingtajm integration document the event API, templates and delivery features.
- [SnickSnack](https://snicksnack.mrcheng.se/) — live homepage screenshot; features and stack checked against the local `snicksnack` repository.
- [Strippr](https://github.com/daniel-medin/Strippr) — official project artwork and details from the public repository. This is a local app, not a hosted website.
- [SummitHub](https://summithub.se/) — live homepage screenshot; event and registration features from the public website and MRC Collective source repository.
- [The Logbook](https://thelogbook.eu/) — user-supplied [photo of the platform in use](https://images.squarespace-cdn.com/content/v1/62f13e2e4e905206dcaa0585/856b1e85-81a4-4257-ace7-603a7bbb26ac/TheLogbook.png), as the public site requires sign-in; purpose from Daniel's supplied KEKS description and stack checked against the local `KEKS` repository.
- [Ticktack](https://ticktack.se/) — live mobile screenshot; features and stack checked against the local `ticktack` repository.
- [Vad var det jag sa?](https://vadvardetjagsa.mrcheng.se/sv/) — live Swedish homepage screenshot; educational features and stack checked against the MRC Collective source repository.
- [Webbstatistik](https://webbstatistik.se/) — live homepage screenshot; features and public tracking options from the website, stack from its served assets and ASP.NET response.

Daniel supplied his [LinkedIn](https://www.linkedin.com/in/medindaniel/) and [GitHub](https://github.com/daniel-medin/) profiles for the contact section. He also supplied the sound design, project management, Ljudbyrån and MRC Collective details used in the About and Experience sections. LinkedIn profile details were inaccessible during this edit, so no biography or experience was inferred from them.

## Content still to confirm

Apart from Ljudbyrån's establishment in 2000, this draft has no employment dates, qualifications or contact email. Add those when Daniel supplies them. Do not infer further details from the neighboring repositories.
