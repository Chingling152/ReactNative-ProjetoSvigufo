import React, { Component } from 'react';
import {Text , Image , StyleSheet} from 'react-native'
class Profile extends Component{
    // nome deve ser fixo
    static navigationOptions = {
        tabBarIcon : ({ tintColor }) =>( 
            <Image
                source={require('../assets/img/profile.png')}
                style={styles.tabBarIcon}
            />
        )
    };
    render(){
        return(
            <Text style={{color:'purple'}}>Profile 1</Text>
        );
    }
}

const styles= StyleSheet.create(
    {
        tabBarIcon: {
            width:25,
            height:25,
            tintColor:'white'
        }
    }
)

export default Profile;