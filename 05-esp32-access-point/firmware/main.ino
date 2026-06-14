#include <WiFi.h>
#include <WebServer.h>

const char* ap_ssid = "ESP32-Pulsera";
const char* ap_password = "12345678";

#define LED 2
WebServer server(80);

void handleOn() {
  digitalWrite(LED, HIGH);
  server.send(200, "text/plain", "LED encendido");
}

void handleOff() {
  digitalWrite(LED, LOW);
  server.send(200, "text/plain", "LED apagado");
}

void handleRoot() {
  server.send(200, "text/plain", "ESP32 AP funcionando");
}

void setup() {
  Serial.begin(115200);
  pinMode(LED, OUTPUT);

  WiFi.softAP(ap_ssid, ap_password);
  
  Serial.println("Punto de acceso iniciado");
  Serial.print("IP: ");
  Serial.println(WiFi.softAPIP());

  server.on("/", handleRoot);
  server.on("/led/on", handleOn);
  server.on("/led/off", handleOff);
  server.begin();
}

void loop() {
  server.handleClient();
}