import React, {Component} from 'react';
import {StyleSheet, Text, View, Modal, TouchableHighlight, TouchableOpacity, ScrollView} from 'react-native';

export default class SimpanModal extends Component{

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	width: Dimensions.get('window').width,
	  };

	  Dimensions.addEventListener('change',(e) =>{
	  	this.setState(e.window);
	  })
	}

	closeModal = () => {
		this.props.changeModalVisibility(false);
	}

	render(){
		return(
			<TouchableOpacity activeOpacity={1} disabled={true} style={styles.container}>
				<View style={[styles.modal,{width: this.state.width - 80}]}>
					<View style={styles.modal}>
						<Text style={[styles.text,{fontSize:20}]}> Modal Header</Text>
						<Text style={styles.text}> Modal Text</Text>
					</View>
					<View style={styles.buttonsView}>
						<TouchableHighlight onPress={() => this.closeModal()} style={styles.TouchableHighlight} underlayColor={'#f1f1f1'}>
							<Text style={[styles.text,{fontSize:20}]}> Cancel </Text>
						</TouchableHighlight>
						<TouchableHighlight onPress={() => this.closeModal()}>
							<Text style={[styles.text,{fontSize:20}]}> Ok </Text>
						</TouchableHighlight>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	
})