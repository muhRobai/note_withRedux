
import React, { Component } from "react";
import { createStackNavigator, createAppContainer, createDrawerNavigator,DrawerItems, SafeAreaView} from "react-navigation";
import { Container, Header, Title, Content, Body, Icon, Button,Thumbnail } from 'native-base';
import { StyleSheet, View, Text, Image } from 'react-native'; 
import Note from "./Screen/Note";
import Home from "./Screen/Home";
import editNote from "./Screen/editNote";
import Costumside from "./component/Costumside";

const AppNavigator = createStackNavigator(
    	{
        Home: {
        	screen: Home,
        	navigationOptions:{
        		header: () => null	
        	}
        	
        },
        Note:{
        	screen: Note,
        	navigationOptions:{
        		header: () => null	
        	}
    	},
      Edit:{
        screen: editNote,
        navigationOptions:{
            header: () => null  
        }
      }
    });

					
const drawerNotes = createDrawerNavigator(
	{
		Person: {
			screen: AppNavigator,
		},
		Work: {
			screen: Note
		},
		Wishlist:{
			screen: editNote
		}
	},{
		initialRouteName: 'Person',
	    drawerPosition: 'left',
	    contentComponent: Costumside,
	    drawerOpenRoute: 'DrawerOpen',
	    drawerCloseRoute: 'DrawerClose',
		drawerToggleRoute: 'DrawerToggle'
	});


export default createAppContainer(drawerNotes);

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  Image: {
    height: 85,
    width: 86,
    borderRadius: 54
  }

})

