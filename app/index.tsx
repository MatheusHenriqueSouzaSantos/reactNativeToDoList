import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Index() {
  const [inputValue, setInputValue] = useState("");
  const [inputList, setInputList] = useState<{Tarefa:string, DataDeCriacao:string}[]>([]);

  function appendInput() {
    setInputList([...inputList,{Tarefa: inputValue,DataDeCriacao:new Date().toLocaleDateString("pt-br",{
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    })}]);
    setInputValue("");
  }

  return (
    <ScrollView
      style={{
        backgroundColor: "#ECEFF7"
      }}
    >
        <View style={{display: "flex",flexDirection: "row"}}>
            <TextInput
            value={inputValue}
            onChangeText={setInputValue}
            style={{
            borderWidth: 1,
            padding: 10,
            marginBottom: 10,
            borderRadius: 5,
            }}
            />
            <TouchableOpacity
                onPress={appendInput}
                style={{ padding: 20, backgroundColor: "#474747", borderRadius: 10, marginLeft: 10, height: 40, justifyContent: "center" }}
            >
                <Text style={{ color: "white" }}>Adicionar Tarefa</Text>
            </TouchableOpacity>
        </View>
        {inputList.map((elemento,index)=>(
          <View key={index} style={{paddingLeft: "3%",
          display: "flex",
          justifyContent: "center",
           alignItems: "flex-start",
           backgroundColor: "#474747",
            borderRadius: 15,
            height: 55,
            width: 300,
            marginBottom: 10,
            }}>
            <Text style={{color: "white"}}>
              {"Tarefa: "+ elemento.Tarefa}
            </Text> 
            <Text style={{color: "white"}}>
              {"Data Criacao: "+ elemento.DataDeCriacao}
            </Text>
          </View>
        )
        )}
      {/* <Text style={{ padding: 10, fontSize: 20 }}>
        {JSON.stringify(inputList, null, 2)}
      </Text> */}
    </ScrollView>
  );
}
