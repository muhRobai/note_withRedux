import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Icon} from 'react-native-elements';
import moment from "moment";
export default class HomePage extends React.Component {
static navigationOptions = {
  header: null
 };
constructor(props) {super(props);
 this.state = {
  currentDate: new Date(),
  markedDate: moment(new Date()).format("YYYY-MM-DD")
 };
}
render() {
const today = this.state.currentDate;
const day = moment(today).format("dddd");
const date = moment(today).format("MMMM D, YYYY");
return (
<View style={styles.container}>
  <Text style={styles.title}>Portfolio</Text>
  <View style={styles.content}>
    <Text style={styles.day}>{day}</Text>
    <Text style={styles.small}>{date}</Text>
  </View>
  <TouchableOpacity style={styles.circle} onPress={()=>     this.props.navigation.navigate('News')}>
   <Icon raised name='send' color="#000" size={60}/>
  </TouchableOpacity>
</View>
 );
 }
}
const styles = StyleSheet.create({
container:{
 position: "relative",
 backgroundColor: "orange"
},
title:{
 fontSize: 70,
 color: "#fff",
 letterSpacing: 2,
 top: 180,
left: 20