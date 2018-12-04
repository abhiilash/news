import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from '../component/Home/Container';

const AppNavigator = createStackNavigator({
  	Home: { 
	  	screen: Home,
	  	navigationOptions: {
			title: 'News',
		}
  	}
},	
{
    initialRouteName: 'Home',
    navigationOptions: {
    	headerStyle: {
      		backgroundColor: '#e91e63',
    	},
		headerTitleStyle:{
			fontWeight: 'bold',
			fontSize: 25
		},
		headerTintColor: '#fff',
    }
    
  });



export default AppNavigator;