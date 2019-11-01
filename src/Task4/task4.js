import React from 'react';
import {
    View,
    SafeAreaView,
    Image,
    ScrollView,
    StyleSheet,
    Dimensions,
    Text,
} from 'react-native';

import { TabBar } from './tabBar';
// import { FloatingBtn } from './floatingbutton';
import Card4 from './card4';


export default class Task4 extends React.Component {
    static navigationOptions = {
        title: 'Task4',
      };
    render() {
        return (
            <View>
            <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.topheader}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' ,marginBottom:20}}>January</Text>
                        <Text>2 Challenges</Text>
                    </View>
            
                        <Card4 />
                  
                </View>

                <View style={styles.container}>
                    <View style={styles.topheader}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' ,marginBottom:20}}>January</Text>
                        <Text>2 Challenges</Text>
                    </View>
            
                        <Card4 />
                  
                </View>
                <View style={styles.container}>
                    <View style={styles.topheader}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold',marginBottom:20 }}>January</Text>
                        <Text>2 Challenges</Text>
                    </View>
            
                        <Card4 />
                  
                </View>

            </ScrollView>
            </SafeAreaView>
            {/* <FloatingBtn/> */}
            <View style={{bottom:200}}>
            <TabBar/>
            </View>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'ghostwhite',
        padding: 10
    },
    topheader: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },

})