import {View, Text, StyleSheet} from 'react-native';

export default function Header({titulo}){
    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo}>
                {titulo}
            </Text>
            <Text style={estilos.subtitulo}>Organize seus estudos</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
       backgroundColor: '#1c4858',
       paddingHorizontal:16,
       paddingVertical:20,
       alignItems:'center'
    },
    titulo:{
        fontSize:25,
        fontWeight:'700',
        color: 'white'
    },
    subtitulo:{
        fontSize:14,
        color:'#60bdef',
        marginTop: 4
    }
})
