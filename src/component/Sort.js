import React, {Component} from 'react';
import {StyleSheet, Text, View, Modal, TouchableHighlight} from 'react-native';
import SimpanModal from './SimpanModal';

export default class Sort extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isModalVisible: false,
	  };
	}

	changeModalVisibility = (bool) =>{
		this.setState({ isModalVisible: bool});
	}

	render(){
		return(
			<View>
				<TouchableHighlight onPress={() => this.changeModalVisibility(true)}>
					<Text> Open Modal </Text>
				</TouchableHighlight>
			</View>

			<Modal visible={this.state.isModalVisible} onRequestClose={()=> this.changeModalVisibility(false)}>
					<SimpanModal changeModalVisibility={this.changeModalVisibility} />
			</Modal>
		);
	}
}