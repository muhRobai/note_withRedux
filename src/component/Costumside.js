import React, { Component } from 'react';
import {  Container, Header, Title, Content,Form, Input, Item, Button, Left, Right, Body, Fab, List, Thumbnail, ListItem } from 'native-base';
import { Dimensions,Modal, Alert, TouchableHighlight, StyleSheet, View, Text,FlatLis, Image,FlatList, TouchableOpacity,TextInput } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator,DrawerItems, SafeAreaView} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import {connect} from 'react-redux';
import {getCategory} from '../public/redux/action/category';

class Costumside extends Component{
	constructor(props) {
	  super(props);
	  this.state={
	  	modalVisible:false,
	  	nameCategory:'',
	  	iconCategory:'',
	  	// Data : [
		  // 	{	
		  // 		id : 1,
		  // 		name:"Person",
		  // 		icon:"user-circle",
		  // 	},
		  // 	{
		  // 		id: 2,
		  // 		name:"Work",
		  // 		icon:"briefcase"
		  // 	},
		  // 	{
		  // 		id: 3,
		  // 		name:"Wishlist",
		  // 		icon:"list-alt"
		  // 	}
	  	// ]
	  }
	
	  
	}

	fetchData = () => {
		this.props.dispatch(getCategory());
	}

	componentDidMount = () =>{
		this.fetchData();
	}

	setModalVisible(visible) {
    	this.setState({modalVisible: visible});
 	}

 	addCategoryRoutes = (data) =>{
 		// this.props.dispatch(postCategory(data))
 		console.warn(data);
 	}

 	_keyExtractor = (item, index) => item.id.toString();

 	renderItem = ({item, index}) =>(
 		<TouchableOpacity>
 			<ListItem
				noBorder
				style={{margin: -5}}>
				<Left>
					<Icon 
						name={item.image}
						style={{ color: '#000',fontSize: 28, width: 38}} />
					<Text style={{fontSize: 18, color: '#000000', fontWeight:"500"}}>{item.category}</Text>
				</Left>
			</ListItem>
 		</TouchableOpacity>
 	)

	render(){


		return(
			<Container>
			    <Header style={styles.drawerHeader} noShadow={true}>
			      <Body style={{alignItems: 'center'}}>
						<Image 
							style={styles.Image}
							source={ require('../image/Logo.png')}
						/>
						<Text style={{fontSize: 20, color:'#000000', fontWeight: "600", marginTop: 10}}>Shaloom Razade</Text>
					</Body>
			    </Header>
			    <Content>
			       <FlatList
		            style={styles.gridView}
		            data={this.props.category.data}
		            numColumns={1}
		            keyExtractor={this._keyExtraktor}
		            renderItem={this.renderItem}
		          />
			      <List>
			      	<ListItem
			      		onPress={() => {
		                  this.setModalVisible(!this.state.modalVisible);
		                }}
			      		noBorder
			      	>
			      		<Left>
			      			<Icon
			      				name={'plus-circle'}
			      				style={{fontSize: 28, width: 38, color:'#000', marginTop: -5}}
			      			/>
			      			<Text style={{fontSize: 18, color: '#000000', fontWeight:"500"}}>Add Category</Text>
			      		</Left>
			      	</ListItem>
			      </List>
			    </Content>
			     <Modal
		            transparent={true}
		            animationType="fade"
		            visible={this.state.modalVisible}
		            onRequestClose={() => {
		            Alert.alert('Modal has been closed.');
		            }}
		            onPress={() => {this.setModalVisible(!this.state.modalVisible); }}
		            >
		            <View style={{
		              flex:1,
		              backgroundColor: 'rgba(51,51,51,0.5)',
		              justifyContent: 'center', 
		              alignItems: 'center'

		            }}>
		            	<TouchableOpacity
			                activeOpacity={1}
			                onPress={() => this.setModalVisible(!this.state.modalVisible)}
			                style={{ position:'absolute', top:0,bottom:0,right:0,left:0, }}
			              />
			            <View style={{
	            			  width: "70%",
			                  height: 150,
			                  textAlign: "center",
			                  alignSelf: "center",
			                  position: "relative",
			                  backgroundColor: "white",
			                  borderRadius: 5,
			                  elevetion: 3
				          }}>
				           
				            	<View>
				            		<TextInput placeholder="add category" placeholderColor='#eee' style={{marginLeft: 20, marginRight:20, paddingLeft: 20,borderBottomColor: '#2ED1A2',
				            		borderBottomWidth: 2}} onChangeText={(text) => this.setState({nameCategory:text})}/>	            		
				            	</View>
				            	<View>
				            		<TextInput placeholder="add url image" style={{marginLeft: 20, marginRight:20,paddingLeft: 20, borderBottomColor: '#2ED1A2',
				            		borderBottomWidth: 2 }} onChangeText={(text) => this.setState({iconCategory:text})}/>
				            	</View>
				            	<View
				            	style={{
				            		alignItems: 'flex-end' 
				            	}}>
				            		<List>
				            			<ListItem
				            			noBorder>
				            				<TouchableOpacity onPress={()=> {this.addCategoryRoutes({catgory : this.state.nameCategory, image: this.state.iconCategory})}} style={{marginRight: 20}}>
				            					<Text style={{color: '#000', fontWeight:"600"}}>Add</Text>
				            				</TouchableOpacity>
				            				<TouchableOpacity onPress={()=> {this.setModalVisible(!this.state.modalVisible); }}>
				            					<Text style={{color: '#000', fontWeight:"600"}}>Cancel</Text>
				            				</TouchableOpacity>

				            			</ListItem>
				            		</List>
				            	</View>
			            </View>
		            </View>
		          </Modal>
			</Container>
		)
	}
}

const mapStateToProps = state => {
  return {
      category: state.category
      // auth: state.auth
  }
}

export default connect(mapStateToProps)(Costumside)

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white',
    marginBottom: 10,
    marginBottom: 50,

  },
  Image: {
    height: 120,
    width: 120,
    borderRadius: 54
  },
  ImageSide:{
  	marginRight: 10
  }

})