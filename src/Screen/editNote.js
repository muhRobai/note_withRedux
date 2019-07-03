import { View,Image } from "react-native";
import React, { Component } from 'react';
import { Container, Header, Left, Form, Body, Right,Input, Textarea,Picker, Button, Icon, Title, Text, Thumbnail, Content, Label } from 'native-base';
import {StyleSheet} from 'react-native';
import dummycategory from '../component/dummyCategory';

export default class Note extends Component {
    static navigationOptions ={
      drawerIcon:(
        <Image source={require('../image/portfolio.png')} style={{ height: 24, width: 24}}/>
      )
    }
    constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
      title: this.props.navigation.state.params.title,
      body: this.props.navigation.state.params.note,
      category: this.props.navigation.state.params.category,
    };
      }
    onValueChange(value: string) {
      this.setState({
        selected: value
      });
    }

    dummycategory = () => {
      let dummydata = []
      for(let i = 0; i < dummycategory.length; i++){
        dummydata.push(
            <Picker.Item key={i} label={dummycategory[i].category} value={dummycategory[i].category}/>
        )
      }
      return dummydata;
    }

  render() {
    return (
      <Container>
      <Header style={{backgroundColor: '#fff'}}>
        <Left style={{flex:1}}>
           <Button transparent onPress= {() => this.props.navigation.goBack()} style={{}}>
              <Icon style={{color:'#000000'}} name='arrow-back' />
            </Button> 
        </Left>
        <Body style={{flex:1}}>
            <Title style={{color: '#000'}}>EDIT NOTE</Title>
        </Body>
        <Right style={{flex:1}}>
            <Button transparent onPress= {() => this.props.navigation.openDrawer()} style={{padding: 10}}>
               <Thumbnail square style={{ width: 30, height: 30, alignItems: 'center', paddingRight: 15}}source={ require('../image/checked.png')}/>
            </Button>
        </Right>
      </Header>
        <Content>
            <Form>
                <Input value={this.state.title} placeholderIconColor='#ecf0f1' style={styles.textStyle}/>
                <Textarea rowSpan={12} value={this.state.body} style={styles.textAreaStyle}/>
                <Label style={styles.labelstyle}>Category</Label>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  placeholder="Select Category"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  style={styles.pickerStyle}
                  selectedValue={this.state.category}
                  onValueChange={()=>this.onValueChange()}>
                  {this.dummycategory()}
                </Picker>
            </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    textStyle: {
        width: '80%',
        paddingLeft: 15,
        marginLeft:'10%',
        fontSize: 20,
        fontWeight: "600",
        lineHeight: 27,
        marginTop: 10

    },
    textAreaStyle: {
        width: '80%',
        paddingLeft: 15,
        marginLeft:'10%',
        fontSize: 20,
        fontWeight: "600",
        lineHeight: 27,
        marginTop: 10
    },
    pickerStyle: {
        width: '50%',
        marginLeft: '10%',

    },
    labelstyle:{
        fontSize: 19, 
        fontWeight:"600", 
        color:'#000000',
        marginLeft: '10%',
        marginTop: 10
    }

});