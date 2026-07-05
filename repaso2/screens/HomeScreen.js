import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  ImageBackground,
  ActivityIndicator,
  Alert,
  StyleSheet,
  StatusBar,
} from "react-native";

export default function HomeScreen() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  const [libros, setLibros] = useState([]);
  const [guardando, setGuardando] = useState(false);

  const agregarLibro = () => {
    if (!titulo.trim() || !autor.trim() || !genero.trim()) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }

    setGuardando(true);

    setTimeout(() => {
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo,
        autor,
        genero,
      };

      setLibros((prev) => [nuevoLibro, ...prev]);
      setTitulo("");
      setAutor("");
      setGenero("");
      setGuardando(false);

      Alert.alert("Libro guardado", "Libro guardado correctamente.");
    }, 4000);
  };

  return (
    <ImageBackground
      source={require("../assets/fondo.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.overlay}>
        <Text style={styles.headerTitle}>Catálogo de Libros</Text>

        <TextInput
          style={styles.input}
          placeholder="Título del libro"
          placeholderTextColor="#eee"
          value={titulo}
          onChangeText={setTitulo}
          editable={!guardando}
        />
        <TextInput
          style={styles.input}
          placeholder="Autor"
          placeholderTextColor="#eee"
          value={autor}
          onChangeText={setAutor}
          editable={!guardando}
        />
        <TextInput
          style={styles.input}
          placeholder="Género"
          placeholderTextColor="#eee"
          value={genero}
          onChangeText={setGenero}
          editable={!guardando}
        />

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
            guardando && styles.buttonDisabled,
          ]}
          onPress={agregarLibro}
          disabled={guardando}
        >
          {guardando ? (
            <View style={styles.loadingRow}>
              <ActivityIndicator color="#fff" style={{ marginRight: 8 }} />
              <Text style={styles.buttonText}>Guardando...</Text>
            </View>
          ) : (
            <Text style={styles.buttonText}>Agregar Libro</Text>
          )}
        </Pressable>

        <Text style={styles.total}>Total de libros: {libros.length}</Text>

        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <View style={styles.libroCard}>
              <Text style={styles.libroTitulo}>{item.titulo}</Text>
              <Text style={styles.libroDetalle}>Autor: {item.autor}</Text>
              <Text style={styles.libroDetalle}>Género: {item.genero}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, width: "100%", height: "100%" },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 16,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: "#fff",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#1d4ed8",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 4,
    marginBottom: 12,
  },
  buttonPressed: { opacity: 0.8 },
  buttonDisabled: { backgroundColor: "#4b5fa8" },
  loadingRow: { flexDirection: "row", alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  total: { color: "#fff", fontWeight: "600", marginBottom: 8 },
  libroCard: {
    backgroundColor: "rgba(255,255,255,0.85)",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  libroTitulo: { fontSize: 16, fontWeight: "bold", color: "#111" },
  libroDetalle: { fontSize: 13, color: "#333" },
});
