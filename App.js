import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  Button, 
  I18nManager,
  ImageBackground,
  TouchableOpacity,
  ScrollView


} from 'react-native';
import Task1 from './src/Task1/task1';
// import LocalizedStrings from 'react-native-localization';

import * as RNLocalize from "react-native-localize";
import i18n from "./src/translations/localtranslation";
import memoize from "lodash.memoize";
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
import Edit from './edit';
import stringsOfApp from './src/translations/local';
import Splash from './src/splashAndAll/splash';
import Login from './src/splashAndAll/login';
import SignUp from './src/splashAndAll/signup'
import Dashboard from './src/splashAndAll/dashboard';
import NewDashboard from './src/splashAndAll/newdashboard';

export class App extends React.Component {

  constructor() {
    super()
    this.state = {
      firstname: stringsOfApp.fname,
      lastname: stringsOfApp.lname,
      imagepath: '',
      isloading: false,
    }
  }

  updatemethod = (fname, lname, image) => {
    console.warn(fname)
    console.warn(lname)
    this.setState({
      firstname: fname,
      lastname: lname,
      imagepath: image
    })
  }
  render() {
    return (
      <ImageBackground style={{ width: "100%", height: "100%", flex: 1 }} source={require('./assets/ocean.jpg')}>
        <View style={styles.container}>
          {/* <Task1/> */}
        
          <View style={styles.usercontainer}>
            <Image onLoad={() => this.setState({ isloading: true })}
              style={{ width: 100, height: 100, borderRadius: 50, borderColor: 'white', borderWidth: 3, margin: 10 }} source={{ uri: this.state.imagepath }} />
            {!this.state.isloading && <Image source={require('./assets/person-white.png')} style={{ position: 'absolute',  borderRadius: 50, marginTop: 10, width: 100, height: 100 }} />}
            <View style={styles.headercontainer}>
              <Text style={styles.heaedertext}>{this.state.firstname} {this.state.lastname}</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Edit', { firstnameofuser: this.state.firstname, lastnameofuser: this.state.lastname, updatemethod: this.updatemethod })}>
                <View style={styles.btnstyle}>
                  <Text style={{ color: 'white', fontSize: 25 }}>{i18n.t('editinfo')}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Splash')}>
              <View style={styles.btnstyle}>
                <Text style={{ color: 'white', fontSize: 25 }}>{i18n.t('Splash')}</Text>
              </View>

            </TouchableOpacity>

            </View>
          </View>
          <ScrollView style={{ height: 300, width: '95%', padding: 10, borderRadius: 20, borderColor: 'ghostwhite', borderWidth: 2, paddingLeft: 50, marginBottom: 20, }} contentInset={{ top: 10, left: 0, right: 0, bottom: 50 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Task1')}>
              <View style={styles.btnstyle}>
                <Text style={{ color: 'white', fontSize: 25 }}>{i18n.t('task1')}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Task2')}>
              <View style={styles.btnstyle}>
                <Text style={{ color: 'white', fontSize: 25 }}>{i18n.t('task2')}</Text>
              </View>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Task3')}>
              <View style={styles.btnstyle}>
                <Text style={{ color: 'white', fontSize: 25 }}>{i18n.t('task3')}</Text>
              </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Task4')}>
              <View style={styles.btnstyle}>
                <Text style={{ color: 'white', fontSize: 25 }}>{i18n.t('task4')}</Text>
              </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Task5')}>
              <View style={styles.btnstyle}>
                <Text style={{ color: 'white', fontSize: 25 }}>{i18n.t('task5')}</Text>
              </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Task6')}>
              <View style={styles.btnstyle}>
                <Text style={{ color: 'white', fontSize: 25 }}>{i18n.t('task6')}</Text>
              </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Task7')}>
              <View style={styles.btnstyle}>
                <Text style={{ color: 'white', fontSize: 25 }}>{i18n.t('task7')}</Text>
              </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Task8')}>
              <View style={styles.btnstyle}>
                <Text style={{ color: 'white', fontSize: 25 }}>{i18n.t('task8')}</Text>
              </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Task9')}>
              <View style={styles.btnstyle}>
                <Text style={{ color: 'white', fontSize: 25 }}>{i18n.t('task9')}</Text>
              </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Task10')}>
              <View style={styles.btnstyle}>
                <Text style={{ color: 'white', fontSize: 25 }}>{i18n.t('task10')}</Text>
              </View>

            </TouchableOpacity>

          </ScrollView>

        </View>
      </ImageBackground>)
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: ({ navigation }) => ({
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
            onPress={() => { navigation.navigate('Task1') }}
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
  Edit: { screen: Edit },

  Task1: {
    screen: Task1,
    navigationOptions: ({ navigation }) => ({
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
            onPress={() => { navigation.navigate('Task2') }}
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
  Task2: {
    screen: Task2,
    navigationOptions: ({ navigation }) => ({
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
            onPress={() => { navigation.navigate('Task3') }}
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
  Task3: {
    screen: Task3,
    navigationOptions: ({ navigation }) => ({
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
            onPress={() => { navigation.navigate('Task4') }}
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
  Task4: {
    screen: Task4,
    navigationOptions: ({ navigation }) => ({
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
            onPress={() => { navigation.navigate('Task5') }}
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
  Task5: {
    screen: Task5,
    navigationOptions: ({ navigation }) => ({
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
            onPress={() => { navigation.navigate('Task6') }}
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
  Task6: {
    screen: Task6,
    navigationOptions: ({ navigation }) => ({
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
            onPress={() => { navigation.navigate('Task7') }}
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
  Task7: {
    screen: Task7,
    navigationOptions: ({ navigation }) => ({
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
            onPress={() => { navigation.navigate('Task8') }}
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
  Task8: {
    screen: Task8,
    navigationOptions: ({ navigation }) => ({
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
            onPress={() => { navigation.navigate('Task9') }}
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
  Task9: {
    screen: Task9,
    navigationOptions: ({ navigation }) => ({
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
            onPress={() => { navigation.navigate('Task10') }}
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
  Task10: {
    screen: Task10,
    navigationOptions: ({ navigation }) => ({
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
            onPress={() => { navigation.navigate('Home') }}
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
  Splash: {
    screen: Splash,
    // navigationOptions: ({ navigation }) => ({
    //   // title screen navigation option
    //   title: "Splash",
    //   headerStyle: {
    //     //#395B7C    #141F39
    //     backgroundColor: '#395B7C',
    //   },
    //   headerTintColor: 'ghostwhite',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //     fontSize: 22
    //   },
    //   headerRight: () => (
    //     <View style={{ flexDirection: 'row', }}>
    //       <TouchableOpacity
    //         onPress={() => alert('This is a button!')}
    //         style={styles.rightButtonStyle}>
    //         <Image
    //           source={require('./assets/infoicon.png')}
    //           style={styles.imageinfostyle}
    //         />
    //       </TouchableOpacity>
    //       <TouchableOpacity
    //         onPress={() => { navigation.navigate('Home') }}
    //         style={styles.rightButtonStyle}>
    //         <Image
    //           source={require('./assets/rightarrow.png')}
    //           style={styles.imageinfostyle}
    //         />
    //       </TouchableOpacity>

    //     </View>
    //   ),
    // })
  },
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      // title screen navigation option
      title: "Login",
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
            onPress={() => { navigation.navigate('Home') }}
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
  
  SignUp: {
    screen: SignUp,
    navigationOptions: ({ navigation }) => ({
      // title screen navigation option
      title: "SignUp",
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
            onPress={() => { navigation.navigate('Home') }}
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
  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      // title screen navigation option
      title: "Dashboard",
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
            onPress={() => { navigation.navigate('Home') }}
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
  NewDashboard: {
    screen: NewDashboard,
    navigationOptions: ({ navigation }) => ({
      // title screen navigation option
      title: "NewDashboard",
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
            onPress={() => { navigation.navigate('Home') }}
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
}
  // {
    // initialRouteName: 'Home',
    // headerMode: 'screen',
    // defaultNavigationOptions: {
    //   headerStyle: {
    //     //#395B7C    #141F39
    //     backgroundColor: '#395B7C',
    //   },
    //   headerTintColor: 'ghostwhite',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //     fontSize: 22
    //   },
      // headerRight: () => (
        // <TouchableOpacity
        //   onPress={() => alert('This is a button!')}
        //   style={styles.rightButtonStyle}>
        //   <Image
        //     source={require('./assets/rightarrow.png')}
        //     style={styles.imageinfostyle}
        //   />
        // </TouchableOpacity>

      // ),
  //   },
  // }
  );

const styles = StyleSheet.create({
  container: {

    opacity: 0.9,
    flex: 1,
    alignItems: 'center',
  },
  heaedertext: {
    fontSize: 30,
    color: 'white',
    tintColor: 'black'
  },
  headercontainer: {
    width: "90%",
    shadowOpacity: 0.9,
    shadowColor: 'gray',
    shadowOffset: { width: 5, height: 5 },
    elevation: 10,
    alignItems: 'center',
  },
  usercontainer: {
    margin: 10,
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'ghostwhite',
    width: '95%',
   paddingBottom:10
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
    borderColor: 'white',
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