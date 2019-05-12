import React, { Component } from 'react';
import {Text,View,StyleSheet} from 'react-native'

class Titulo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        switch (this.props.Tipo) {
            case "Subtitulo":
                return(
                    <View>
                        <Text style={styles.tituloPadrao}>{this.props.Titulo}</Text>
                    </View>
                );
            case "TituloPagina":
                return(
                    <View style={styles.tituloPaginaDivisor}>
                        <Text style={{...styles.tituloPagina,...styles.tituloPadrao}}>{this.props.Titulo}</Text>
                    </View>
                ); 
            case "SubituloPagina":
                return(
                    <View style={styles.sutituloPaginaDivisor}>
                        <Text style={{...styles.subtituloPagina,...styles.tituloPadrao}}>{this.props.Titulo}</Text>
                    </View>
                ); 
            default:
                return(
                    <View>
                        <Text style={styles.tituloPadrao}>{this.props.Titulo}</Text>
                    </View>
                );
        }
    }
}

export default Titulo;

const styles = StyleSheet.create(
    {
        tituloPadrao:{
            marginVertical:15,
            textAlign:'center',
            //color:"#B727FF",
            //borderBottomColor:"#B727FF",
            letterSpacing: 4
        },
        tituloPagina:{
            paddingBottom:15,
            borderBottomWidth:2,
            width:"50%",
            alignSelf:'center',
            fontWeight:'600',
            fontSize:23,
            borderBottomColor:"#D1D1D1",
            fontFamily: "OpenSans-Bold",   
        },
        tituloPaginaDivisor:{
            
        }
    }
)