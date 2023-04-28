import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Lista = () => {
  const [atividade, setAtividade] = useState("");
  const [valor, setValor] = useState("");
  const [lista, setLista] = useState([]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", marginTop: "20%" }}>
        <Text style={{ fontSize: 20 }}>Produto</Text>
        <TextInput
          value={atividade}
          onChangeText={setAtividade}
          style={{ borderWidth: 1, width: "50%" }}
        />
        <Text style={{ fontSize: 20 }}>Valor</Text>
        <TextInput
          value={valor}
          onChangeText={setValor}
          style={{ borderWidth: 1, width: "50%" }}
        />
        <Button
          onPress={() => {
            const obj = { atividade, valor };
            setLista([...lista, obj]);
          }}
          title="salvar"
        />
      </View>
      <View style={{ flex: 4, justifyContent: "center" }}>
        {lista.map((o, index) => (
          <View
            style={{
              alignItems: "center",
              width: "50%",
              justifyContent: "center",
              alignSelf: "center",
              flexDirection: 'row',
              margin: 10
            }}
          >
            <Text style={{fontSize: 30, position: 'relative', right: 40, flexDirection: 'row'}}>{index + 1}</Text>
            <View style={{ padding: 10}}>
              <Text style={{ fontSize: 30 }}>{o.atividade}</Text>
              <Text style={{fontSize: 20, color: 'red', textAlign: 'center'}}>{o.valor}</Text>
              <Button onPress={()=>{
                setLista([])
              }} title="X"/>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#8B8E65",
        }}
      >
        <Text style={{ fontSize: 35 }}>Lista de compra</Text>
      </View>
      <View style={{ flex: 3 }}>
        <Lista />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
