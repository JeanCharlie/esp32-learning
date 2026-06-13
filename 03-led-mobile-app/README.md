# 03 - LED Mobile App Control

Control the ESP32 built-in LED from a React Native mobile app over Wi-Fi.

## Hardware needed
- Freenove ESP32-WROOM Board

## Stack
- Firmware: C++ with Arduino IDE
- Mobile app: React Native + Expo + TypeScript

## Structure
- `firmware/` — ESP32 HTTP server code
- `app/` — React Native app with on/off buttons

## How it works
The ESP32 runs an HTTP server. The React Native app makes fetch requests
to the ESP32 IP address to control the LED.

- `http://<ESP32_IP>/led/on` → turn LED on
- `http://<ESP32_IP>/led/off` → turn LED off

## Setup

### ESP32
1. Replace `TU_SSID` and `TU_PASSWORD` in `firmware/main.ino`
2. Upload to ESP32 with Arduino IDE (Upload Speed: 115200)
3. Note the IP address shown in Serial Monitor

### Mobile app
1. Replace `192.168.X.X` in `app/App.tsx` with your ESP32 IP
2. Run `cd app && npx expo start`
3. Scan QR with Expo Go
4. Tap the buttons to control the LED

## Connection diagram
No external wiring needed — uses the built-in LED on pin 2.