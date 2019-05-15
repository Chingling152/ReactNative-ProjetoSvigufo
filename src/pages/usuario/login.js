import React, { Component } from 'react';
import { 
    Text, 
    StyleSheet, 
    ImageBackground, 
    View, 
    TextInput, 
    TouchableOpacity, 
    Image ,
    CheckBox,
    ActivityIndicator
} from 'react-native'
import { DefaultFormStyles, DefaultFeedbackStyles } from '../../assets/estilizacao/padrao';
import { ApiRequest } from '../../services/api';
import { TokenValido} from '../../services/autenticacao';
import AsyncStorage from '@react-native-community/async-storage';
import jwt from 'jwt-decode';

//import console = require('console');

class Login extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(){
        super();
        this.state={
            email:"",
            senha:"",
            erro:"",
            lembrar:false,
            carregando:false
        }
    }

    componentDidMount() {
        TokenValido().then(
            valido =>{
            if(valido){
                this._verificarRole();
            }else{
                if(this.state.email.length != 0 && this.state.senha.length != 0){
                    this._buscarDados();
                }
            }
        })
    }

    _buscarDados = async () =>{
        try{
            this.setState(
                {
                    email: await AsyncStorage.getItem("SvigufoEmailUsuario"),
                    senha: await AsyncStorage.getItem("SvigufoSenhaUsuario")
                }
            )
        }finally{
            if(this.state.email == null || this.state.senha== null){
                this.setState({
                    email:"",
                    senha:""
                })
            }
        }
    }
    
    _verificarRole = async () =>{
        const TokenUsuario = jwt(await AsyncStorage.getItem("SvigufoTokenUsuario"));
        switch (TokenUsuario.Role) {
            case "Administrador":
                this.props.navigation.navigate("AdminNavigator")
                break;
            default:
                this.props.navigation.navigate("MainNavigator")
                break;
        }
    }

    _realizarLogin = async () => {
        if(this.state.email.length == 0)this.setState({erro:"E email é obrigatorio"})
        if(this.state.senha.length == 0)this.setState({erro:"A senha é obrigatoria"})
        this.setState({carregando:true})
        await ApiRequest("Usuarios/login")
            .Cadastrar({
                email:this.state.email,
                senha:this.state.senha
            })
            .then(
                resultado =>{
                    switch (resultado.status) {
                        case 200:
                            resultado.json().then(
                                resposta =>{
                                    AsyncStorage.setItem("SvigufoTokenUsuario",resposta.token)
                                    this._verificarRole();
                                }
                            );
                            break;
                        case 400:
                        resultado.json().then(
                            resposta =>{
                                this.setState({erro:resposta.erro})
                            }
                        );
                            break;
                        default:
                            break;
                    }
                    this.setState({carregando:false})
                }
            )
            .catch(erro => console.warn(erro))
    }

    render() {
        return (
            <ImageBackground
                source={require("../../assets/img/login/login.png")}
                style={StyleSheet.absoluteFillObject}
            >
                <View style={styles.overlay} />
                <View style={DefaultFormStyles.mainForm}>
                    <Image
                        source={require("../../assets/img/login/loginIcon2x.png")}
                        style={styles.imagemLogin}
                    />
                    <TextInput
                        style={DefaultFormStyles.textInput}
                        placeholder="email"
                        placeholderTextColor="#FFFFFF"
                        underlineColorAndroid="#FFFFFF"
                        onChangeText={email => this.setState({ email })}
                        maxLength = {200}
                        textContentType="emailAddress"
                    />

                    <TextInput
                        style={DefaultFormStyles.textInput}
                        placeholder="senha"
                        placeholderTextColor="#FFFFFF"
                        password="true"
                        underlineColorAndroid="#FFFFFF"
                        onChangeText={senha => this.setState({ senha })}
                        maxLength = {200}
                        textContentType ="password"
                    />
                    <TouchableOpacity
                        style={styles.btnLogin}
                        onPress={this._realizarLogin}
                    >
                        <Text style={DefaultFormStyles.submitButtonText}>LOGIN</Text>
                    </TouchableOpacity>
                    <CheckBox
                        title='Lembre-se do meu Usuario'
                        value={this.state.checked}
                        onValueChange={() => {
                            this.setState(
                                {lembrar:!this.state.lembrar})
                            }
                        }
                    />
                    <Text style={DefaultFeedbackStyles.errorMessage}>{this.state.erro}</Text>
                    <ActivityIndicator size="large" color="#FFFFFF" animating={this.state.carregando} />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "#B727FFC9"
    },
    imagemLogin: {
        tintColor: "#FFFFFF",
        height: 100,
        width: 90,
        margin: 10
    },
    btnLogin: {
        width: 240,
        ...DefaultFormStyles.lightSubmitButton,
        ...DefaultFormStyles.submitButton
    }
});

export default Login;
