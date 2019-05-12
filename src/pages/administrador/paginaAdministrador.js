import React, { Component } from 'react';
import {Text,View} from 'react-native'
import { ApiRequest } from '../../services/api';
import { TokenValido} from '../../services/autenticacao';
import jwt from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';
import { DefaultStyleSheet } from '../../assets/estilizacao/padrao';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TituloPagina from "../../components/titulo" 

class PaginaAdministrador extends Component{

    constructor(){
        super();
    }

    componentDidMount() {
        if (TokenValido()) {
            this._verificarRole();
        }
    }

    _verificarRole = async () => {
        const TokenUsuario = jwt(await AsyncStorage.getItem("SvigufoTokenUsuario"));
        if (TokenUsuario.Role !== "Administrador") {
            AsyncStorage.clear();
            this.props.navigation.navigate("Login")
        }
        
    }

    render(){
        return(
            <View>
                <TituloPagina Titulo="Olá admin" Tipo="TituloPagina"/>
                <View>
                    <TituloPagina Titulo="Usuarios" Tipo="SubtituloPagina"/>
                    <TouchableOpacity>
                        <Text>Ver Usuarios</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default PaginaAdministrador;