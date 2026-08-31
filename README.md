# Nur — Qur'an Recitations & Islamic Library

A prototype mobile app: browse and stream Qur'an recitations from six reciters,
explore an Islamic book catalog, and chat with an AI guide for reference and
research inside the app.

## Project structure

```
nur-app/
  App.js                    entry point
  app.json                  Expo config
  src/
    theme.js                colors, radius tokens
    config.js                points the app at your backend
    data/                   surahs, reciters, books
    context/PlayerContext.js shared audio player (expo-av)
    components/MiniPlayer.js docked mini-player
    screens/                Home, Recite, Library, Guide
    navigation/index.js     bottom tab navigator
  server/                   tiny backend that proxies the AI guide chat
```

## Run the app

You'll need [Node.js](https://nodejs.org) and the Expo Go app on your phone
(App Store / Play Store).

```bash
cd nur-app
npm install
npx expo start
```

Scan the QR code with your phone's camera (iOS) or the Expo Go app (Android).
Recitations should play immediately — the audio CDN isn't blocked here the way
it was in the browser preview.

## Run the AI guide backend

The app never talks to Anthropic directly — it calls your own small server,
which holds the API key. This keeps your key out of the app bundle.

```bash
cd server
npm install
echo "ANTHROPIC_API_KEY=sk-ant-your-key-here" > .env
node index.js
```

Get an API key at console.anthropic.com if you don't have one yet.

Then tell the app where your server is. Find your computer's LAN IP
(e.g. `192.168.1.42` — same Wi-Fi as your phone), and run the app with:

```bash
EXPO_PUBLIC_GUIDE_API_URL=http://192.168.1.42:3000/guide npx expo start
```

(`localhost` won't work here since your phone is a separate device on the
network — it needs your computer's actual IP.)

## What's real vs. placeholder right now

- **Recitations**: real, streamed from a public Qur'an audio CDN.
- **Library**: real book titles/authors/categories; descriptions are original
  summaries, not the books' actual text. A few entries link out to sunnah.com
  for full-text reading — add more links as you find sources you trust.
- **AI guide**: fully functional once your backend is running.

## Natural next steps

- Swap the custom tab bar / icons for a design pass matching your Look Good
  brand identity if you want visual continuity across your projects.
- Add offline caching for recitations (expo-file-system) so surahs can be
  downloaded for offline listening.
- Add a proper backend database (Postgres/Supabase) if you want user accounts,
  bookmarks, or listening history instead of everything living in memory.
- Deploy the `server/` folder somewhere persistent (Render, Railway, Fly.io)
  instead of running it locally, once you're ready to share the app beyond
  your own phone.
