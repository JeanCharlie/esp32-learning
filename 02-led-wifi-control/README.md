# 02 - LED Wi-Fi Control

Control the ESP32 built-in LED from a web browser over Wi-Fi.

## Hardware needed
- Freenove ESP32-WROOM Board

## What you'll learn
- Connect ESP32 to a Wi-Fi network
- Create an HTTP server on the ESP32
- Handle HTTP routes (GET requests)
- Control GPIO pins via HTTP

## How it works
The ESP32 connects to your Wi-Fi network and starts an HTTP server on port 80.
From any browser on the same network you can visit:

- `http://<ESP32_IP>/` → control panel with buttons
- `http://<ESP32_IP>/led/on` → turn LED on
- `http://<ESP32_IP>/led/off` → turn LED off

## Setup
1. Replace `TU_SSID` and `TU_PASSWORD` in `main.ino` with your Wi-Fi credentials
2. Open `main.ino` in Arduino IDE
3. Select `ESP32 Dev Module` in Tools → Board
4. Set Upload Speed to `115200`
5. Upload the code
6. Open Serial Monitor at 115200 baud
7. Copy the IP address that appears
8. Open that IP in your browser

## Connection diagram
No external wiring needed — uses the built-in LED on pin 2.