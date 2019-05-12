import React, { Component } from 'react';
import { Text } from 'react-native'
import { TokenValido } from '../../services/autenticacao';
import AsyncStorage from '@react-native-community/async-storage';
import jwt from 'jwt-decode';

class CadastrarUsuario extends Component {

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

    render() {
        return (
            <Text style={{ color: 'purple' }}>Cadastrar Usuario</Text>
        );
    }
}

export default CadastrarUsuario;