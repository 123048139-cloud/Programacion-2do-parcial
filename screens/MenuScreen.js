import React from "react";
import { Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const opciones = [
  { nombre: "Tarjetas", ruta: "Tarjetas", color: "#FF6B6B" },
  { nombre: "SafeAreaView", ruta: "SafeArea", color: "#4ECDC4" },
  { nombre: "Pressable", ruta: "Pressable", color: "#45B7D1" },
  { nombre: "TextInput", ruta: "TextInput", color: "#96CEB4" },
  { nombre: "ActivityIndicator", ruta: "ActivityIndicator", color: "#FFEAA7" },
  { nombre: "ImageBackground", ruta: "ImageBackground", color: "#DDA0DD" },
  { nombre: "FlatList", ruta: "FlatList", color: "#98D8C8" },
  { nombre: "Modal", ruta: "Modal", color: "#F7DC6F" },
];

export default function MenuScreen({ navigation }) {
  return (
    <ScrollView style={styles.fondo} contentContainerStyle={styles.contenido}>
      <Text style={styles.titulo}>Componentes React Native</Text>
      <Text style={styles.subtitulo}>Toca uno para ver el ejemplo</Text>
      {opciones.map((item) => (
        <TouchableOpacity
          key={item.ruta}
          style={[styles.boton, { backgroundColor: item.color }]}
          onPress={() => navigation.navigate(item.ruta)}
          activeOpacity={0.7}
        >
          <Text style={styles.textoBoton}>{item.nombre}</Text>
          <Text style={styles.flecha}>›</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fondo: { flex: 1, backgroundColor: "#f5f5f5" },
  contenido: { padding: 16, paddingBottom: 40 },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 4,
    marginTop: 10,
  },
  subtitulo: {
    fontSize: 13,
    color: "#888",
    textAlign: "center",
    marginBottom: 20,
  },
  boton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
  },
  textoBoton: { fontSize: 16, fontWeight: "600", color: "#333" },
  flecha: { fontSize: 22, color: "#333" },
});
