import { View,Image } from "react-native";
import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Thumbnail } from 'native-base';

export default class addNote extends Component {
    static navigationOptions ={
      drawerIcon:(
        <Image source={require('../image/portfolio.png')} style={{ height: 24, width: 24}}/>
      )
    }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: 'white'}}>
          <Left style={{flex:1}}>
            <Button transparent onPress={()=> this.props.navigation.goBack()}>
              <Icon style={{color:'#000000'}} name='arrow-back' />
            </Button>
          </Left>
          <Body style={{flex:1}}>
            <Title style={{ alignSelf: 'center',color:'#000000'}}>ADD NOTE</Title>
          </Body>
          <Right style={{flex:1}}>
            <Thumbnail square style={{ width: 30, height: 30, alignItems: 'center', paddingRight: 10}}source={ require('../image/checked.png')}/>
          </Right>
        </Header>
      </Container>
    );
  }
}