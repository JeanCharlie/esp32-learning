# 05 - ESP32 Access Point

The ESP32 creates its own Wi-Fi network. The mobile app connects directly
to the ESP32 without needing a router.

## Hardware needed
- Freenove ESP32-WROOM Board

## What you'll learn
- ESP32 in Access Point (AP) mode
- Direct device-to-device communication without a router
- Fixed IP addressing (192.168.4.1)

## How it works
The ESP32 creates a Wi-Fi network called "ESP32-Pulsera" with password "12345678".
The mobile app connects to that network and controls the LED via HTTP.
The ESP32 IP in AP mode is always 192.168.4.1 — no need to check Serial Monitor.

## Setup

### ESP32
1. Upload `firmware/main.ino` with Arduino IDE
2. The ESP32 creates a Wi-Fi network called "ESP32-Pulsera"

### Mobile app
1. On your phone go to Settings → Wi-Fi
2. Connect to "ESP32-Pulsera" with password "12345678"
3. Run `cd app && npm install && npx expo start`
4. Scan QR and test the buttons

## Why this matters
This is exactly how the HeyCyan W610 glasses work — and how the
couple bracelets project will work. The device creates its own AP
and the app connects directly to it.

## Connection diagram
No external wiring needed — uses the built-in LED on pin 2.