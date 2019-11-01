import React from 'react';
import {Image,
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity


} from 'react-native';
import Task1 from './src/Task1/task1';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Task2 from './src/Task2/task2';
import Task3 from './src/Task3/task3'
import Task4 from './src/Task4/task4';
import Task5 from './src/Task5/task5';
import Task6 from './src/Task6/task6';
import Task7 from './src/Task7/task7';
import Task8 from './src/Task8/task8';
import Task9 from './src/Task9/task9';
import Task10 from './src/Task10/task10';

export class App extends React.Component {  

  static navigationOptions = {
    title: 'Home',
  };
  render() {
    

    return (
      <ImageBackground style={{width:"100%",height:"100%",flex:1}} source={require('./assets/ocean.jpg')}>
    <View style={styles.container}>
            {/* <Task1/> */}
           
            <View style={styles.headercontainer}>
       <Text style={styles.heaedertext}>Home Screen</Text>
       </View>
        
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Task1')}>
            <View style={styles.btnstyle}>
             <Text style={{color:'white',fontSize:20}}>Go To Task One</Text>
            </View>

        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Task2')}>
            <View style={styles.btnstyle}>
             <Text style={{color:'white',fontSize:20}}>Go To Task Two</Text>
            </View>

        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Task3')}>
            <View style={styles.btnstyle}>
             <Text style={{color:'white',fontSize:20}}>Go To Task Three</Text>
            </View>

        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Task4')}>
            <View style={styles.btnstyle}>
             <Text style={{color:'white',fontSize:20}}>Go To Task Four</Text>
            </View>

        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Task5')}>
            <View style={styles.btnstyle}>
             <Text style={{color:'white',fontSize:20}}>Go To Task Five</Text>
            </View>

        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Task6')}>
            <View style={styles.btnstyle}>
             <Text style={{color:'white',fontSize:20}}>Go To Task Six</Text>
            </View>

        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Task7')}>
            <View style={styles.btnstyle}>
             <Text style={{color:'white',fontSize:20}}>Go To Task Seven</Text>
            </View>

        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Task8')}>
            <View style={styles.btnstyle}>
             <Text style={{color:'white',fontSize:20}}>Go To Task Eight</Text>
            </View>

        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Task9')}>
            <View style={styles.btnstyle}>
             <Text style={{color:'white',fontSize:20}}>Go To Task Nine</Text>
            </View>

        </TouchableOpacity>
      
 
    </View>
    </ImageBackground>)
  }
  }

  const AppNavigator = createStackNavigator({
     Home:{ screen : App},
     Task1:{screen : Task1},
     Task2:{screen : Task2},
     Task3:{screen : Task3},
     Task4:{screen : Task4},
     Task5:{screen:Task5},
     Task6:{screen:Task6},
     Task7:{screen:Task7},
     Task8:{screen:Task8},
     Task9:{screen:Task9},
     Task10:{screen:Task10}
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
    defaultNavigationOptions:{
      headerStyle: {
        //#395B7C    #141F39
        backgroundColor: '#395B7C',
      },
      headerTintColor: 'ghostwhite',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 22
      },
      headerRight: () => (
        <TouchableOpacity
          onPress={() => alert('This is a button!')}
          style = {styles.rightButtonStyle}>
            <Image
            source={require('./assets/infoicon.png')}
            style = {styles.imageinfostyle}
            />
          </TouchableOpacity>
      ),
    },
  });

  const styles = StyleSheet.create({
    container:{
   
      opacity:0.9,
      flex:1,
      alignItems:'center',
    },
    heaedertext:{
      fontSize:65,
      color:'white'
    },
    headercontainer:{
      width:"90%",
      height:70,
      shadowOpacity: 0.9,
        shadowColor: 'gray',
        shadowOffset: { width: 5, height: 5 },
        elevation:10,
        alignItems:'center',
        marginBottom:40
    },
    buttontextstyle:{
      color:'ghostwhite',
      fontSize:20

    },
    btnstyle:{
      width:300,
      height:60,
      elevation:20,
      borderRadius:40,
      borderWidth:1,
      borderColor:'black',
      padding:8,
      shadowOpacity: 0.7,
      shadowColor: 'white',
      shadowOffset: { width: 9, height: 5 },
      marginTop:10,
      alignItems:'center',
      justifyContent:'center'
      
    },
    imageinfostyle:{
      width:35,
      height:35,
      marginRight:10
    }
    })
    export default createAppContainer(AppNavigator);