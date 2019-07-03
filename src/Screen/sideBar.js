import React, { Component } from 'react';
import { Container, Header, Title, Content, Body, Icon } from 'native-base';
import { StyleSheet, View, Text, Image } from 'react-native';

class sideBar extends Component{
	render(){
		return(
			<Container>
				<Header>
					<Body>
						<Image 
							style={styles.Image}
							source={ require('../image/Logo.png')}
						/>
					</Body>
				</Header>
			</Container>
		)
	}
}

export default sideBar;

styles = StyleSheet.create({
	Image:{
		height: 150,
		width: 150
	}
});