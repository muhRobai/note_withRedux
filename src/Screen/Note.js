import { View,Image } from "react-native";
import React, { Component } from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import {connect} from 'react-redux';
import {postNotes,getNotes} from '../public/redux/action/notes'

import { 
  Container, 
  Header, 
  Left, 
  Form, 
  Body, 
  Right,
  Input, 
  Textarea,
  Picker, 
  Button, 
  Icon, 
  Title, 
  Text, 
  Thumbnail, 
  Content, 
  Label 
} from 'native-base';

import {StyleSheet} from 'react-native';
//import dummycategory from '../component/dummyCategory';

class Note extends Component {

    constructor(props) {
    super(props);
    this.state = {
      selected: '',
      title:'',
      notes:'',
      id_category:'',
      showAlert: false
    };
    }

  onValueChange(value) {
      this.setState({
        selected: value,
        
      });
  }

  addNotes = (note) =>{
    this.props.dispatch(postNotes(note))
  }

  showAlert = () => {
    this.setState({
      showAlert: true
    })
  }
 
  hideAlert = () => {
    this.setState({
      showAlert: false
    })
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
            <Title style={{color: '#000'}}>ADD NOTE</Title>
        </Body>
        <Right style={{flex:1}}>
            <Button transparent onPress= {() => {
              this.addNotes({title: this.state.title, note: this.state.notes, id_category: this.state.id_category}),
              this.showAlert()
            }} 
            style={{padding: 10}}>
               <Thumbnail square style={{ width: 30, height: 30, alignItems: 'center', paddingRight: 15}}source={ require('../image/checked.png')}/>
            </Button>
        </Right>
      </Header>
        <Content>
            <Form>
                <Input placeholder="ADD TITLE..." placeholderIconColor='#ecf0f1' style={styles.textStyle} onChangeText={(text) => {this.setState({title: text})}}/>
                <Textarea rowSpan={12} placeholder="ADD DESCRIPTION..."style={styles.textAreaStyle} onChangeText={(text) => {this.setState({notes: text})}}/>
                <Label style={styles.labelstyle}>Category</Label>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    placeholder="Select Category"
                    placeholderStyle={{ color: "#eeeeee" }}
                    placeholderIconColor="#eee"
                    style={styles.pickerStyle}
                    selectedValue={this.state.selected}
                    onValueChange={(hasil) => (
                      this.setState({
                        id_category: hasil,
                        selected: hasil
                      })
                    )}>
                      <Picker.Item label="Choose Category"/>
                    {this.props.category.data.map(item =>(
                      <Picker.Item key={item.id} label={item.category} value={item.id_category}/>
                      )
                    )}
                  </Picker>
            </Form>
        </Content>
        <AwesomeAlert
              show={this.state.showAlert}
              showProgress={false}
              message="Note Has been Saved!"
              closeOnTouchOutside={true}
              closeOnHardwareBackPress={false}
              showConfirmButton={true}
              confirmText="OK"
              confirmButtonColor="#DD6B55"
              onConfirmPressed={() => {
                this.hideAlert(),
                this.props.navigation.goBack()
              }}
            />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      category: state.category
      // auth: state.auth
  }
}

export default connect(mapStateToProps)(Note)

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