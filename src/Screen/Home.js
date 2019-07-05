import React, { Component } from 'react';
import {  Container, Header, Title, Content,Form, Input, Item, Button, Left, Right, Body, Icon, Fab, List, Thumbnail } from 'native-base';
import { Dimensions,Modal, TouchableHighlight, StyleSheet, View, Text,FlatLis, Image,FlatList, TouchableOpacity, ActivityIndicator, RefreshControl} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import {connect} from 'react-redux';
import {getNotes, deleteNotes, searctNotes} from '../public/redux/action/notes';

class Home extends Component {
 
static navigationOptions ={
  drawerIcon:(
    <Image source={require('../image/writing.png')} style={{ height: 24, width: 24}}/>
  )
}

constructor(props) {
  super(props);
  this.state = {
    modalVisible: false,
    id: '',
    search:'',
    refreshing: false
  }
}

sortRoute = (sort) =>{
  this.setModalVisible(!this.state.modalVisible),
  //console.warn(sort)
  this.props.dispatch(searctNotes(this.state.search,sort))
}

setModalVisible(visible) {
    this.setState({modalVisible: visible});
}

fetchData = () => {
    this.props.dispatch(getNotes());
    this.setState({
      refreshing: false
    })
}

componentWillMount = () => {
    
    this.fetchData();
};

deleteNoteRoute = (id) =>{
  this.setState({
    showAlert: true,
    id : id,
    
  })
}

hideAlert = () => {
  this.setState({
    showAlert: false
    })
 }

 searchEnter = (event) =>{
    this.props.dispatch(searctNotes(this.state.search))
 }

_keyExtractor = (item, index) => item.id.toString();

renderItem = ({item, index}) =>(
    <TouchableOpacity style={{
        flex: 1,
        paddingLeft: 10
        }}
        onPress={()=> this.props.navigation.navigate('Edit', item)}
        onLongPress={()=> this.deleteNoteRoute(item.id)}
        >
        <View style={{
          backgroundColor: 
          item.category.toLowerCase() == "horro" ? "#2FC2DF" :
          item.category.toLowerCase() == "fantasi" ? "#C0EB6A" :
          item.category.toLowerCase() == "action" ? "#FAD06C" :
          item.category.toLowerCase() == "fiksi" ? "#FF92A9" :
          "#1abc9c", borderRadius: 7, margin: 7}}>

          <View>
              <Text style={styles.itemDate}>{this.setDate(item.date)}</Text>
          </View>
          <View>
              <Text style={styles.itemTitle}>{item.title}</Text>
          </View>
          <View>
              <Text style={styles.itemNote}>{item.category}</Text>
          </View>
          <View style={{height: 75}}>
              <Text numberOfLines={4} style={styles.itemNote}>{item.note}</Text>
          </View>

        </View>
    </TouchableOpacity>
)

setDate = (datenote) => {
  let mount = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei','Jun', 'Jul','Agu', 'Sep', 'Okt', 'Nov','Des'];

  let date = new Date(datenote)
  let day = date.getDay()+1;
  let Month = date.getMonth();

  let fixDate = day+' '+mount[Month]

  return fixDate
}

getDataAgain = () =>{
  
}

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#fff'}}>
          <Left style={{flex:1}}>
            <Button transparent onPress= {() => this.props.navigation.openDrawer()} style={{padding: 10}}>
              <Thumbnail small source={ require('../image/Logo.png')}/>
            </Button>
          </Left>
          <Body style={{flex:1}}>
            <Title style={{color:'#000'}}>NOTE APP</Title>
          </Body>
          <Right style={{flex:1}}>
            <Button transparent onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }} style={{padding: 10}}>
              <Thumbnail square style={{ width: 20, height: 20}}source={ require('../image/Sort.png')}/>
            </Button>
          </Right>
        </Header>
          <Item style={{backgroundColor: 'transparent', borderBottomColor: 'transparent'}}>
            <Input style={styles.input} placeholder="Search" onChangeText={(text) => this.setState({
              search:text
            })}
            onEndEditing={() => {this.searchEnter()}}
            
            />
          </Item>

          { (this.props.notes.isError) ? <Text style={[styles.notFound, {marginLeft: 20}]}>Error Get Notes</Text> :
          (this.props.notes.isLoading) ? <ActivityIndicator size="large" color="red" /> :
            <View style={{flex: 1}}>
              <FlatList
                style={styles.gridView}
                data={this.props.notes.data}
                numColumns={2}
                keyExtractor={this._keyExtractor}
                renderItem={this.renderItem}
                refreshing={this.state.refreshing}
                onRefresh={()=> {this.fetchData()}}
              />
            </View>}
         <Fab
              direction="up"
              containerStyle={{ }}
              style={{ backgroundColor: '#ffffff' }}
              position="bottomRight"
              onPress={() => this.props.navigation.navigate('Note')}>
              <Icon name="add" style={{color: '#000000'}} />
          </Fab>
            <Modal
            transparent={true}
            animationType="fade"
            visible={this.state.modalVisible}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            }}
            onPress={() => {this.setModalVisible(!this.state.modalVisible); }}
            >
            <View style={
              {flex:1} 
            }>
            <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => this.setModalVisible(!this.state.modalVisible)}
                  style={{ position:'absolute', top:0,bottom:0,right:0,left:0, }}
                />
              <View style={{
                marginTop: 22,
                position: 'absolute',
                right: '2%',
                top:'6%',
                backgroundColor: '#fff'
              }}>
                <View style={{
                  paddingBottom: 20,
                  paddingTop: 20,
                  paddingLeft: 20,
                  paddingRight: 20,
                  borderRadius: 7
                }}>
                    <TouchableHighlight
                      onPress={() => {
                        this.sortRoute('asc')
                        // this.setModalVisible(!this.state.modalVisible),
                        // this.fetchData()
                    }}>
                    <Text style={{fontSize: 14, fontWeight:"500", color: '#000000'}}>ASCENDING</Text>
                  </TouchableHighlight>
                  
                </View>
                <View style={{
                  paddingBottom: 20,
                  paddingTop: 20,
                  paddingLeft: 20,
                  paddingRight: 20,
                  borderRadius: 7
                }}>
                  <TouchableHighlight onPress={() => {
                        this.sortRoute('desc')
                    }}>
                    <Text style={{fontSize: 14,fontWeight:"500", color: '#000000'}}>DESCENDING</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </Modal>
          <AwesomeAlert
		              show={this.state.showAlert}
		              showProgress={false}
		              title="WARNING"
		              message="Are you sure delete data?"
		              closeOnTouchOutside={true}
		              closeOnHardwareBackPress={false}
		              showCancelButton={true}
		              showConfirmButton={true}
		              cancelText="No"
		              confirmText="Yes"
		              confirmButtonColor="#DD6B55"
		              onCancelPressed={() => {
		                this.hideAlert();
		              }}
		              onConfirmPressed={() => {
                    this.props.dispatch(deleteNotes(this.state.id))
		                this.hideAlert();
		              }}
		           />
       </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
      notes: state.notes
      // auth: state.auth
  }
}

export default connect(mapStateToProps)(Home)

const styles = StyleSheet.create({
  gridView: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 20
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 5,
    marginBottom: 5,
    marginTop: 10,
  },
  itemTitle: {
    fontSize: 15,
    paddingLeft: 10,
    color: '#fff',
    fontWeight: '600',
  },
  itemDate:{
    marginTop: 10,
    paddingLeft: '65%',
    fontSize: 10,
    color: '#fff',
    fontWeight: '600',
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10
  },

  itemNote: {
    fontWeight: '600',
    fontSize: 10,
    color: '#fff',
    paddingLeft: 10,
  },
  input:{
    width: '86.5%',
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 50,
    backgroundColor: '#eeeeee',
    marginHorizontal: 25,
    marginTop: 10,
    marginBottom: 10,
  }
});