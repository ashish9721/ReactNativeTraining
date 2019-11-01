import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
  ScrollView


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

 
  render() {


    return (
      <ImageBackground style={{ width: "100%", height: "100%", flex: 1 }} source={require('./assets/ocean.jpg')}>
        <View style={styles.container}>
          {/* <Task1/> */}
        
          <View style={styles.headercontainer}>
            <Text style={styles.heaedertext}>Home Screen</Text>
          </View>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Task1')}>
            <View style={styles.btnstyle}>
              <Text style={{ color: 'white', fontSize: 25 }}>Go To Task One</Text>
            </View>

          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Task2')}>
            <View style={styles.btnstyle}>
              <Text style={{ color: 'white', fontSize: 25 }}>Go To Task Two</Text>
            </View>

          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Task3')}>
            <View style={styles.btnstyle}>
              <Text style={{ color: 'white', fontSize: 25 }}>Go To Task Three</Text>
            </View>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Task4')}>
            <View style={styles.btnstyle}>
              <Text style={{ color: 'white', fontSize: 25 }}>Go To Task Four</Text>
            </View>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Task5')}>
            <View style={styles.btnstyle}>
              <Text style={{ color: 'white', fontSize: 25 }}>Go To Task Five</Text>
            </View>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Task6')}>
            <View style={styles.btnstyle}>
              <Text style={{ color: 'white', fontSize: 25 }}>Go To Task Six</Text>
            </View>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Task7')}>
            <View style={styles.btnstyle}>
              <Text style={{ color: 'white', fontSize: 25 }}>Go To Task Seven</Text>
            </View>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Task8')}>
            <View style={styles.btnstyle}>
              <Text style={{ color: 'white', fontSize: 25 }}>Go To Task Eight</Text>
            </View>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Task9')}>
            <View style={styles.btnstyle}>
              <Text style={{ color: 'white', fontSize: 25 }}>Go To Task Nine</Text>
            </View>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Task10')}>
            <View style={styles.btnstyle}>
              <Text style={{ color: 'white', fontSize: 25 }}>Go To Task Ten</Text>
            </View>

          </TouchableOpacity>

        
        </View>
      </ImageBackground>)
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: ({navigation})=> ({
      // title screen navigation option
      title: "Home",
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
        <View style={{ flexDirection: 'row', }}>
          <TouchableOpacity
            onPress={() => alert('This is a button!')}
            style={styles.rightButtonStyle}>
            <Image
              source={require('./assets/infoicon.png')}
              style={styles.imageinfostyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {navigation.navigate('Task1') }}
            style={styles.rightButtonStyle}>
            <Image
              source={require('./assets/rightarrow.png')}
              style={styles.imageinfostyle}
            />
          </TouchableOpacity>

        </View>
      ),
    })
  },

  Task1: {
    screen: Task1, 
    navigationOptions: ({navigation})=> ({
      // title screen navigation option
      title: "Task1",
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
        <View style={{ flexDirection: 'row', }}>
          <TouchableOpacity
            onPress={() => alert('This is a button!')}
            style={styles.rightButtonStyle}>
            <Image
              source={require('./assets/infoicon.png')}
              style={styles.imageinfostyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {navigation.navigate('Task2') }}
            style={styles.rightButtonStyle}>
            <Image
              source={require('./assets/rightarrow.png')}
              style={styles.imageinfostyle}
            />
          </TouchableOpacity>

        </View>
      ),
    })
  },
  Task2: { screen: Task2,
    navigationOptions: ({navigation})=> ({
      // title screen navigation option
      title: "Task2",
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
        <View style={{ flexDirection: 'row', }}>
          <TouchableOpacity
            onPress={() => alert('This is a button!')}
            style={styles.rightButtonStyle}>
            <Image
              source={require('./assets/infoicon.png')}
              style={styles.imageinfostyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {navigation.navigate('Task3') }}
            style={styles.rightButtonStyle}>
            <Image
              source={require('./assets/rightarrow.png')}
              style={styles.imageinfostyle}
            />
          </TouchableOpacity>

        </View>
      ),
    }) },
  Task3: { screen: Task3 ,
    navigationOptions: ({navigation})=> ({
      // title screen navigation option
      title: "Task3",
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
        <View style={{ flexDirection: 'row', }}>
          <TouchableOpacity
            onPress={() => alert('This is a button!')}
            style={styles.rightButtonStyle}>
            <Image
              source={require('./assets/infoicon.png')}
              style={styles.imageinfostyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {navigation.navigate('Task4') }}
            style={styles.rightButtonStyle}>
            <Image
              source={require('./assets/rightarrow.png')}
              style={styles.imageinfostyle}
            />
          </TouchableOpacity>

        </View>
      ),
    })},
  Task4: { screen: Task4 ,
    navigationOptions: ({navigation})=> ({
      // title screen navigation option
      title: "Task4",
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
        <View style={{ flexDirection: 'row', }}>
          <TouchableOpacity
            onPress={() => alert('This is a button!')}
            style={styles.rightButtonStyle}>
            <Image
              source={require('./assets/infoicon.png')}
              style={styles.imageinfostyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {navigation.navigate('Task5') }}
            style={styles.rightButtonStyle}>
            <Image
              source={require('./assets/rightarrow.png')}
              style={styles.imageinfostyle}
            />
          </TouchableOpacity>

        </View>
      ),
    })},
  Task5: { screen: Task5,
    navigationOptions: ({navigation})=> ({
      // title screen navigation option
      title: "Gallery",
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
        <View style={{ flexDirection: 'row', }}>
          <TouchableOpacity
            onPress={() => alert('This is a button!')}
            style={styles.rightButtonStyle}>
            <Image
              source={require('./assets/infoicon.png')}
              style={styles.imageinfostyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {navigation.navigate('Task6') }}
            style={styles.rightButtonStyle}>
            <Image
              source={require('./assets/rightarrow.png')}
              style={styles.imageinfostyle}
            />
          </TouchableOpacity>

        </View>
      ),
    }) },
  Task6: { screen: Task6,
    navigationOptions: ({navigation})=> ({
      // title screen navigation option
      title: "Task6",
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
        <View style={{ flexDirection: 'row', }}>
          <TouchableOpacity
            onPress={() => alert('This is a button!')}
            style={styles.rightButtonStyle}>
            <Image
              source={require('./assets/infoicon.png')}
              style={styles.imageinfostyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {navigation.navigate('Task7') }}
            style={styles.rightButtonStyle}>
            <Image
              source={require('./assets/rightarrow.png')}
              style={styles.imageinfostyle}
            />
          </TouchableOpacity>

        </View>
      ),
    }) },
  Task7: { screen: Task7 ,
    navigationOptions: ({navigation})=> ({
      // title screen navigation option
      title: "Task7",
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
        <View style={{ flexDirection: 'row', }}>
          <TouchableOpacity
            onPress={() => alert('This is a button!')}
            style={styles.rightButtonStyle}>
            <Image
              source={require('./assets/infoicon.png')}
              style={styles.imageinfostyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {navigation.navigate('Task8') }}
            style={styles.rightButtonStyle}>
            <Image
              source={require('./assets/rightarrow.png')}
              style={styles.imageinfostyle}
            />
          </TouchableOpacity>

        </View>
      ),
    })},
  Task8: { screen: Task8 ,
    navigationOptions: ({navigation})=> ({
      // title screen navigation option
      title: "Task8",
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
        <View style={{ flexDirection: 'row', }}>
          <TouchableOpacity
            onPress={() => alert('This is a button!')}
            style={styles.rightButtonStyle}>
            <Image
              source={require('./assets/infoicon.png')}
              style={styles.imageinfostyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {navigation.navigate('Task9') }}
            style={styles.rightButtonStyle}>
            <Image
              source={require('./assets/rightarrow.png')}
              style={styles.imageinfostyle}
            />
          </TouchableOpacity>

        </View>
      ),
    })},
  Task9: { screen: Task9,
    navigationOptions: ({navigation})=> ({
      // title screen navigation option
      title: "Task9",
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
        <View style={{ flexDirection: 'row', }}>
          <TouchableOpacity
            onPress={() => alert('This is a button!')}
            style={styles.rightButtonStyle}>
            <Image
              source={require('./assets/infoicon.png')}
              style={styles.imageinfostyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {navigation.navigate('Task10') }}
            style={styles.rightButtonStyle}>
            <Image
              source={require('./assets/rightarrow.png')}
              style={styles.imageinfostyle}
            />
          </TouchableOpacity>

        </View>
      ),
    }) },
  Task10: { screen: Task10,
    navigationOptions: ({navigation})=> ({
      // title screen navigation option
      title: "Task10",
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
        <View style={{ flexDirection: 'row', }}>
          <TouchableOpacity
            onPress={() => alert('This is a button!')}
            style={styles.rightButtonStyle}>
            <Image
              source={require('./assets/infoicon.png')}
              style={styles.imageinfostyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {navigation.navigate('Home') }}
            style={styles.rightButtonStyle}>
            <Image
              source={require('./assets/rightarrow.png')}
              style={styles.imageinfostyle}
            />
          </TouchableOpacity>

        </View>
      ),
    }) }
},
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
    defaultNavigationOptions: {
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
          style={styles.rightButtonStyle}>
          <Image
            source={require('./assets/rightarrow.png')}
            style={styles.imageinfostyle}
          />
        </TouchableOpacity>

      ),
    },
  });

const styles = StyleSheet.create({
  container: {

    opacity: 0.9,
    flex: 1,
    alignItems: 'center',
  },
  heaedertext: {
    fontSize: 65,
    color: 'white',
    tintColor: 'black'
  },
  headercontainer: {
    width: "90%",
    height: 70,
    shadowOpacity: 0.9,
    shadowColor: 'gray',
    shadowOffset: { width: 5, height: 5 },
    elevation: 10,
    alignItems: 'center',
    marginBottom: 25
  },
  buttontextstyle: {
    color: 'ghostwhite',
    fontSize: 20

  },
  btnstyle: {
    width: 300,
    height: 60,
    elevation: 20,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    shadowOpacity: 0.7,
    shadowColor: 'white',
    shadowOffset: { width: 9, height: 5 },
    marginTop: 10,
    tintColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'

  },
  imageinfostyle: {
    width: 35,
    height: 35,
    marginRight: 10
  }
})
export default createAppContainer(AppNavigator);