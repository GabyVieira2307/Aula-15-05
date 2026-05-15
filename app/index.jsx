import { Text,View, FlatList, StyleSheet, Image, SafeAreaView } from "react-native";
import Header from "./componentes/Header";
import tarefas from './dados/tarefas';

function ItemTarefa({ item }) {
  return (
    <View style={estilos.card}>
      <Image source={{ uri: item.photo }} style={estilos.foto} />
      <View style={estilos.conteudo}>
        <View style={estilos.linha}>
          <Text style={estilos.titulo}>{item.title}</Text>
          <Text style={estilos.status}>{item.status}</Text>
        </View>
        <Text style={estilos.desc}>{item.description}</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    marginHorizontal: 18,
    marginVertical: 12,
    borderRadius: 24,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },

    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },

  foto: {
    width: '100%',
    height: 210,
  },

  conteudo: {
    padding: 18,
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#163845',
    flex: 1,
    letterSpacing: 0.3,
  },

  status: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2f8f5b',
    backgroundColor: '#dff5e8',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 30,
    overflow: 'hidden',
  },

  desc: {
    marginTop: 14,
    fontSize: 16,
    color: '#5c5c5c',
    lineHeight: 26,
  },
});

export default function Index(){
  return(
      <SafeAreaView style={{flex: 1}}>
        <Header titulo="Senai Tasks"/>
        <FlatList
          data={tarefas}
          keyExtractor={(item) => String(item.id)} 
          renderItem={({item}) => <ItemTarefa item={item}/>}
        />
      </SafeAreaView>
  )
};
