import React, { Component } from 'react';
import {Text,View,ActivityIndicator,StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import { ApiRequest } from '../../services/api';
import { TokenValido} from '../../services/autenticacao';
import jwt from 'jwt-decode';

import { DefaultStyleSheet ,DefaultFormStyles, DefaultTextStyles} from '../../assets/estilizacao/padrao';

class PaginaAdministrador extends Component{

    constructor(){
        super();
        this.state={
            carregando:false
        }
    }

    componentDidMount() {
        if (TokenValido()) {
            this._verificarRole();
        }
    }

    _verificarRole = async () => {
        const TokenUsuario = jwt(await AsyncStorage.getItem("SvigufoTokenUsuario"));
        if (TokenUsuario.Role !== "Administrador") {
            await AsyncStorage.clear();
            this.props.navigation.navigate("Login")
        }
        
    }

    _carregando = async()=>{
        this.setState({carregando:!this.state.carregando})
        console.warn(this.state.carregando)
    }

    render(){
        return(
            <View>
                <Text style={styles.tituloPagina}>Olá admin</Text>
                <View style={DefaultStyleSheet.mainContent}>
                    <TouchableOpacity>
                        <Text>Logout</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.subtituloPagina}>Usuarios</Text>
                        <TouchableOpacity
                            style={styles.btnLogin}
                            onPress={this._carregando}
                            activeOpacity={0.0}
                        >
                            <Text style={DefaultFormStyles.submitButtonText}>Ver Usuarios</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    tituloPagina:{
        paddingBottom:15,
        borderBottomWidth:2,
        borderBottomColor:"#D1D1D1",
        width:"50%",
        fontFamily: "OpenSans-Bold",   
        fontSize:23,
        ...DefaultTextStyles.tituloPadrao
    },
    subtituloPagina:{
        paddingBottom:15,

        fontStyle:'italic',
        fontWeight:'400',
        fontFamily: "OpenSans-Bold",  
        fontSize:18,
        

        borderBottomWidth:2,
        borderBottomColor:"#D1D1D1",

        ...DefaultTextStyles.tituloPadrao
    },
    btnLogin: {
        width: 240,
        ...DefaultFormStyles.lightSubmitButton,
        ...DefaultFormStyles.submitButton
    }
});

export default PaginaAdministrador;