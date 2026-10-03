# Mic 2.0 desktop build

This is an isolated desktop wrapper for the hosted Mic 2.0 application.

## Audio routing

- Physical microphone -> Mic 2.0 -> translated speech -> BlackHole 2ch -> Teams/Zoom microphone.
- Teams/Zoom speaker -> BlackHole 16ch -> Mic 2.0 -> translated speech -> your headphones.

BlackHole is a separate installation and is not bundled here.

The long-lived OpenAI API key remains server-side in the hosted Mic 2.0 backend. It is not embedded in the desktop app.

The GitHub Actions workflow builds unsigned test DMG and ZIP artifacts for both Apple Silicon and Intel Macs.
