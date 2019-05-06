import React from 'react';
import {Text , Image , StyleSheet} from 'react-native'

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            listaEventos:[
                {
                    id: 1,
                    titulo:"teste"
                }
            ]
        }
    }

    componentDidMount(){
        this.carregarEventos();
    }

    carregarEventos = async () => {
        
    }
    
    static navigationOptions = {
        tabBarIcon : ({tintColor}) => (
            <Image
                source={require("../assets/img/calendar.png")}
                style={styles.tabNavigatorIconHome}
            />
        )
    };
    render(){
        return(
            <Text style={{color:'green'}}>Main</Text>
        );
    }
}

const styles= StyleSheet.create(
    {
        tabNavigatorIconHome: {
            width:25,
            height:25,
            tintColor:'#FFFFFF'
        }
    }
)

export default Main;