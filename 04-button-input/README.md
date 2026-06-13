# 04 - Button Input

Read the physical BOOT button state from the ESP32 and display it in real time on a React Native app.

## Hardware needed
- Freenove ESP32-WROOM Board
- No external components — uses the built-in BOOT button on pin 0

## What you'll learn
- Read a GPIO pin as digital input
- Internal pull-up resistors
- HTTP polling from a mobile app
- Real-time UI updates with useEffect and setInterval

## How it works
The ESP32 reads pin 0 (BOOT button) every time the `/button` route is called.
The app polls that route every 500ms and updates the UI with the current state.

- `http://<ESP32_IP>/button` → returns `pressed` or `released`

## Setup

### ESP32
1. Replace `TU_SSID` and `TU_PASSWORD` in `firmware/main.ino`
2. Upload to ESP32 with Arduino IDE (Upload Speed: 115200)
3. Note the IP address shown in Serial Monitor

### Mobile app
1. Replace `192.168.X.X` in `app/App.tsx` with your ESP32 IP
2. Run `cd app && npx expo start`
3. Scan QR with Expo Go
4. Press the BOOT button on the board and watch the app react

## Concepts
- **Digital input**: reading HIGH or LOW from a pin
- **Pull-up resistor**: when the button is not pressed, the pin reads HIGH.
  When pressed, it connects to GND and reads LOW
- **Polling**: the app asks the ESP32 for the state periodically