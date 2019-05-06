import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main.js';
import Profile from './pages/profile';

const MainNavigator = createBottomTabNavigator({
    Main,
    Profile
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

export default createAppContainer(MainNavigator);