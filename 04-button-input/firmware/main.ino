#include <WiFi.h>
#include <WebServer.h>

const char* ssid     = "TU_SSID";
const char* password = "TU_PASSWORD";

#define LED 2
#define BUTTON 0  // pin del botón BOOT

WebServer server(80);

void handleButton() {
  int estado = digitalRead(BUTTON);
  if (estado == LOW) {
    server.send(200, "text/plain", "pressed");
  } else {
    server.send(200, "text/plain", "released");
  }
}

void setup() {
  Serial.begin(115200);
  pinMode(LED, OUTPUT);
  pinMode(BUTTON, INPUT_PULLUP);  // pull-up interno del ESP32

  WiFi.begin(ssid, password);
  Serial.print("Conectando a Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\nConectado!");
  Serial.print("IP: ");
  Serial.println(WiFi.localIP());

  server.on("/button", handleButton);
  server.begin();
}

void loop() {
  server.handleClient();
}