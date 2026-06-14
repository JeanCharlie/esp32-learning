import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ESP32_IP = "192.168.0.25"; // ← pon aquí la IP que viste en el Serial Monitor

export default function App() {
  const [estado, setEstado] = useState("desconocido");

  const controlarLED = async (accion: "on" | "off") => {
    try {
      const res = await fetch(`http://${ESP32_IP}/led/${accion}`);
      const texto = await res.text();
      setEstado(texto);
    } catch (e) {
      setEstado("Error de conexión");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Control ESP32</Text>
      <Text style={styles.estado}>{estado}</Text>

      <TouchableOpacity
        style={[styles.boton, styles.encender]}
        onPress={() => controlarLED("on")}
      >
        <Text style={styles.textoBoton}>Encender</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.boton, styles.apagar]}
        onPress={() => controlarLED("off")}
      >
        <Text style={styles.textoBoton}>Apagar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#111",
  },
  titulo: {
    fontSize: 28,
    color: "white",
    marginBottom: 20,
    fontWeight: "bold",
  },
  estado: { fontSize: 16, color: "#aaa", marginBottom: 40 },
  boton: {
    width: 200,
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
  },
  encender: { backgroundColor: "#22c55e" },
  apagar: { backgroundColor: "#ef4444" },
  textoBoton: { color: "white", fontSize: 18, fontWeight: "bold" },
});
