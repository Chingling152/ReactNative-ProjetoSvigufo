import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Main from './pages/main.js';
import Perfil from './pages/usuario/perfil';
import Login from "./pages/usuario/login"

import CadastrarUsuario from './pages/administrador/cadastrarUsuario.js';
import PaginaAdministrador from './pages/administrador/paginaAdministrador.js';
import AlterarEvento from './pages/administrador/alterarEvento.js';

const AuthStack = createStackNavigator(
    {
        Login : Login
    }
)

const MainNavigator = createBottomTabNavigator({
    Inicio:Main,
    Perfil:Perfil
},{
    swipeEnabled:true,
    tabBarOptions:{
        showLabel:true,
        showIcon:true,
        inactiveBackgroundColor:'#B727FF',
        activeBackgroundColor:'#DD99FF',
        inactiveTintColor:'#FFFFFF',
        activeTintColor:'#FFFFFF',
        style:{
            height:50
        }
    }
});

const AdminNavigator = createStackNavigator({
    
    "Admin - Inicio":{
        screen:PaginaAdministrador,
        path:"admin",
        navigationOptions: {
            title: "Pagina Administrador",
            headerStyle: {
                backgroundColor: '#B727FF'
            },
            headerTitleStyle: {
                color: 'white'
            }
        },
        
    },
    "Admin - Cadastrar Usuario" :{
        screen: CadastrarUsuario,
        path:"admin/usuarios/cadastrar",
        navigationOptions: {
            title: "Cadastrar Usuario"
        },
    },
    "Admin - Ver Eventos": {
        screen: AlterarEvento,
        path:"admin/eventos",
        navigationOptions: {
            title: "Ver Eventos"
        },
    },
    "Admin - Alterar Evento": {
        screen: AlterarEvento,
        path:"admin/eventos/alterar",
        navigationOptions: {
            title: "Alterar Evento"
        },
    }
},{
    initialRouteName:"Inicio"
});

export default createAppContainer(
        createSwitchNavigator(
        {
            MainNavigator,
            AuthStack,
            AdminNavigator
        },{
            initialRouteName:"AuthStack"
        }
    )
);