import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
export default class Task9 extends React.Component {
  static navigationOptions = {
    title: 'Task9',
  };
  render() {
    return (
      <View>
        <View style={styles.viewStyle}>
          <Image
            source={{
              uri:
                'https://tse3.mm.bing.net/th?id=OIP.0KIQ-UTdpUIr8kUWz5kVYgHaE8&pid=Api',
            }}
            style={styles.imgStyle}
          />
          <View>
            <Text style={styles.textStyle}>Devil of Diamonds</Text>
            <Text style={styles.textStyle2}>The Audible Rupture</Text>
          </View>
          <Text style={styles.textStyle2}>4:10</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 150,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: 'gray',
    paddingVertical: 4,
    marginHorizontal: 10
  },
  imgStyle: {
    width: 80,
    height: 80,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  textStyle2: {
    color: 'gray',
  },
});