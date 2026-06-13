import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const ESP32_IP = "192.168.X.X"; // reemplaza con la IP de tu ESP32

export default function App() {
  const [estado, setEstado] = useState("desconocido");

  useEffect(() => {
    const intervalo = setInterval(async () => {
      try {
        const res = await fetch(`http://${ESP32_IP}/button`);
        const texto = await res.text();
        setEstado(texto);
      } catch (e) {
        setEstado("Error de conexión");
      }
    }, 500); // consulta cada 500ms

    return () => clearInterval(intervalo);
  }, []);

  const isPressed = estado === "pressed";

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Estado del botón</Text>

      <View style={[styles.circulo, isPressed ? styles.pulsado : styles.libre]}>
        <Text style={styles.textoCirculo}>
          {isPressed ? "PULSADO" : "LIBRE"}
        </Text>
      </View>

      <Text style={styles.instruccion}>
        Pulsa el botón BOOT de la placa
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#111" },
  titulo: { fontSize: 28, color: "white", marginBottom: 40, fontWeight: "bold" },
  circulo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  pulsado: { backgroundColor: "#22c55e" },
  libre: { backgroundColor: "#374151" },
  textoCirculo: { color: "white", fontSize: 22, fontWeight: "bold" },
  instruccion: { color: "#aaa", fontSize: 16 },
});