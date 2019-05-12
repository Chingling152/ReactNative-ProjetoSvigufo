import React, { Component } from 'react';
import {Text , Image} from 'react-native'
import { DefaultStyleSheet } from '../../assets/estilizacao/padrao';
class Perfil extends Component{
    // nome deve ser fixo
    static navigationOptions = {
        tabBarIcon : ({ tintColor }) =>( 
            <Image
                source={require('../../assets/img/tabBarIcons/profile.png')}
                style={DefaultStyleSheet.tabBarIcon}
            />
        )
    };
    render(){
        return(
            <Text style={{color:'purple'}}>Profile 1</Text>
        );
    }
}

export default Perfil;