import React from 'react';
import {Text , Image } from 'react-native'
import { DefaultStyleSheet } from '../assets/estilizacao/padrao';
import { TokenValido } from '../services/autenticacao';

class Eventos extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            listaEventos:[]
        }
    }

    componentDidMount(){
        TokenValido().then(valido => {
                if(valido){
                    this.carregarEventos();
                }
            }
        ).catch(error => console.warn(error));
        
    }

    carregarEventos = async () => {
        
    }
    
    static navigationOptions = {
        tabBarIcon : ({tintColor}) => (
            <Image
                source={require("../assets/img/tabBarIcons/calendar.png")}
                style={DefaultStyleSheet.tabBarIcon}
            />
        )
    };
    render(){
        return(
            <Text style={{color:'green'}}>Main</Text>
        );
    }
}

export default Eventos;