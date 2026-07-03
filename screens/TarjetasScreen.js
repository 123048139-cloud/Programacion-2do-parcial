import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const tarjetas = [
  {
    titulo: "React Native",
    desc: "Framework para apps móviles",
    color: "#FF6B6B",
  },
  {
    titulo: "Expo",
    desc: "Herramienta para desarrollar con RN",
    color: "#4ECDC4",
  },
  {
    titulo: "JavaScript",
    desc: "Lenguaje base del proyecto",
    color: "#FFEAA7",
  },
  { titulo: "StyleSheet", desc: "Sistema de estilos en RN", color: "#96CEB4" },
];

export default function TarjetasScreen() {
  return (
    <ScrollView style={styles.fondo} contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.titulo}>Tarjetas</Text>
      {tarjetas.map((t, i) => (
        <View key={i} style={[styles.tarjeta, { backgroundColor: t.color }]}>
          <Text style={styles.tituloTarjeta}>{t.titulo}</Text>
          <Text style={styles.desc}>{t.desc}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fondo: { flex: 1, backgroundColor: "#f5f5f5" },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
    textAlign: "center",
  },
  tarjeta: { borderRadius: 10, padding: 20, marginBottom: 12 },
  tituloTarjeta: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  desc: { color: "#555", fontSize: 13 },
});
