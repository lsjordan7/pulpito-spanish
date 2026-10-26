# Púlpito — your voice, in Spanish

A public, responsive learning app built around Lindsey Jordan's two preaching manuscripts: **Bound by Love** and **Now That You're Leaving — The Scene of the Crime**. The language target is Spanish as used in Spain, with familiar plural **vosotros**, pastoral singular **tú**, and **es-ES** speech.

## Practice

- 77 vocabulary and whole-phrase flashcards, categories, reverse direction, search and self-rated spaced review.
- 22 verbs, six persons and seven tenses: present, preterite, imperfect, present perfect, future, conditional and present subjunctive.
- Ten-question multiple-choice sessions, first-choice scoring, explanations and a persistent mistake queue. Verb sessions practise six forms of the selected tense, then four contrasting forms from present or preterite.
- Both complete manuscripts in 286 paragraph-aligned Spanish study renderings, alongside the supplied English. Natural-language adaptations preserve the meaning and preaching rhythm; they are not certified translations.
- Sermon playback with bookmarks, paragraph highlighting, optional browser word highlighting, English toggles, section jumps, shadowing pauses, looping and large text.
- Word audio throughout the sermons; glossary definitions for common and ministry vocabulary. Unlisted words display the full bilingual paragraph for context instead of an invented definition.
- Sentence frames, phrase shadowing and optional in-tab microphone recording.
- Ten grammar lessons, a theological vocabulary reference and a 15-minute daily practice path.
- Local XP, streaks, flashcard familiarity and session history. JSON export/import supports manual transfers between devices.

## Run

No dependencies, account, API key or build step is required.

```sh
npm start
```

Open http://localhost:4173. Run `npm run check` for JavaScript syntax checks. Deploy to Vercel as **Other**, with output directory **public**, and no build or install command.

## Audio

Audio uses the browser's Speech Synthesis API with a Spanish (Spain) voice. The app deliberately asks for an es-ES voice rather than silently substituting a different accent. Install/download a Spain Spanish system voice if the audio settings screen cannot detect one. Voice availability, offline support and word-boundary events vary by browser and operating system. Paragraph highlighting works independently of word boundary support. Long text is split into sentence-sized utterances.

Microphone recording is optional and requires a secure origin and permission. Recordings are held only in the current tab, are not uploaded, and disappear on reload.

## Data and scoring

Practice data is stored under `pulpito-v1` in localStorage. There is no automatic sync or remote learner database. Browser storage may be cleared or unavailable in private mode; export backups. Imports validate fields and require a final in-app replacement confirmation.

First correct quiz answers earn 10 XP per unique question per local calendar day; confident flashcard reviews earn 2 XP per card per day. A first heard paragraph earns 3 XP on completion. Self-reported or recorded speaking earns 5 XP once per day. Quiz accuracy always counts first choices. Self-rated flashcard familiarity is not a pronunciation score.

## Content notes

The English manuscripts were supplied by Lindsey. Spanish Bible passages are original study renderings of the supplied material, **not quotations from a published Spanish Bible edition**. Sermon interpretation, historical assertions and illustrations belong to the notes and should be reviewed for preaching independently of language practice. For example, Genesis does not explicitly call the clothing of skins the first sacrifice; the reader identifies that connection as the sermon's interpretation.

Translation decisions favour natural speech over English idioms and alliteration. *Filiación* is retained as a heading and explained with *saber a quién perteneces*. *Coger el teléfono* and *móvil* reflect everyday Spain usage. *Usted / ustedes* remains valid for formal address and in some Spanish regions and congregations.

## Files

- `public/sermons.js`: both aligned manuscripts.
- `public/data.js`: cards, verbs, conjugation rules, lessons and contextual quizzes.
- `public/app.js`: navigation, speech, practice, progress and browser recording.
- `public/style.css`: responsive dark visual design.
- `vercel.json`: static deployment settings.

The app does not grade free-form speech or generate live AI translations. Content is curated and can be extended in the data files. System speech providers may process text according to the selected system voice.
