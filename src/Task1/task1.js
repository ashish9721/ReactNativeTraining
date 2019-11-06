import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image,Dimensions } from 'react-native';
import { bold } from 'ansi-colors';
import  {FloatingBtn} from './floatingbutton';
import stringsOfApp from '../translations/local'
export const Header = () => {
    return (
        <View>
            <Image style={styles.imagestyle} source={{ uri: "https://tse2.mm.bing.net/th?id=OIP.J4_-1wKw4yqG5Eyl7svIkQAAAA&pid=Api" }}></Image>
        </View>
    );
}


export default class Task1 extends React.Component {
   
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header />
                </View>
                <ScrollView style={styles.content}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 8, paddingRight: 8 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', paddingTop: 10 }}>{stringsOfApp.roads}</Text>
                        <Text style={{ paddingTop: 18 }}>{stringsOfApp.Tprice}</Text>
                    </View >
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 8, paddingRight: 8 }} >
                        <Text style={{}}>{stringsOfApp.dayleft}</Text>
                        <Text style={{ color: '#f5aa42', fontSize: 20, fontWeight: 'bold', }}><Text style={{ fontSize: 14 }}>{stringsOfApp.currencysym}</Text>{stringsOfApp.price}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View style={styles.shadowViewStyle}>
                            <Image style={{ width: 40, height: 40 }} source={require('../../assets/goldMedal.png')} />
                            <View style={{}}>
                                <Text>
                                    {stringsOfApp.prize}
                           </Text>
                                <Text style={{ color: '#42f548', fontSize: 20, fontWeight: 'bold', }}><Text style={{ fontSize: 14 }}>{stringsOfApp.currencysym}</Text>{stringsOfApp.p1}</Text>
                            </View>
                        </View>

                        <View style={styles.shadowViewStyle}>
                            <Image style={{ width: 40, height: 40 }} source={require('../../assets/goldMedal.png')} />
                            <View style={{}}>
                                <Text>
                                    {stringsOfApp.prize}
                           </Text>
                                <Text style={{ color: '#42f548', fontSize: 20, fontWeight: 'bold', }}><Text style={{ fontSize: 14 }}>{stringsOfApp.currencysym}</Text>{stringsOfApp.p1}</Text>
                            </View>
                        </View>

                        <View style={styles.shadowViewStyle}>
                            <Image style={{ width: 40, height: 40 }} source={require('../../assets/goldMedal.png')} />
                            <View style={{}}>
                                <Text>
                                    {stringsOfApp.prize}
                           </Text>
                                <Text style={{ color: '#42f548', fontSize: 20, fontWeight: 'bold', }}><Text style={{ fontSize: 14 }}>{stringsOfApp.currencysym}</Text>{stringsOfApp.p1}</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ marginTop: 20, marginLeft: 10 }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Image style={{ width: 40, height: 40 }} source={require('../../assets/descriptionicon.png')} />
                            <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold', marginTop: 5, paddingLeft: 20 }}>{stringsOfApp.des}</Text>
                        </View>
                        <Text style={{ marginLeft: 10, marginTop: 5 }}>{stringsOfApp.desdata}</Text>
                    </View>
                    <View style={{ marginTop: 20, marginLeft: 10 }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Image style={{ width: 40, height: 40 }} source={require('../../assets/checkMark.png')} />
                            <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold', marginTop: 5, paddingLeft: 20 }}>{stringsOfApp.rule}</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
                        <View style={{ flexDirection: 'row', marginTop: 10 }} >
                            <Image style={{ width: 25, height: 25 }} source={require('../../assets/checkMark.png')} />
                            <Text style={{ paddingLeft: 20 }}>{stringsOfApp.rule0}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }} >
                            <Image style={{ width: 25, height: 25 }} source={require('../../assets/checkMark.png')} />
                            <Text style={{ paddingLeft: 20 }}>{stringsOfApp.rule1}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }} >
                            <Image style={{ width: 25, height: 25 }} source={require('../../assets/checkMark.png')} />
                            <Text style={{ paddingLeft: 20 }}>{stringsOfApp.rule2}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }} >
                            <Image style={{ width: 25, height: 25 }} source={require('../../assets/checkMark.png')} />
                            <Text style={{ paddingLeft: 20 }}>{stringsOfApp.rule3}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }} >
                            <Image style={{ width: 25, height: 25 }} source={require('../../assets/checkMark.png')} />
                            <Text style={{ paddingLeft: 20 }}>{stringsOfApp.rule4}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }} >
                            <Image style={{ width: 25, height: 25 }} source={require('../../assets/checkMark.png')} />
                            <Text style={{ paddingLeft: 20 }}>{stringsOfApp.rule5}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }} >
                            <Image style={{ width: 25, height: 25 }} source={require('../../assets/checkMark.png')} />
                            <Text style={{ paddingLeft: 20 }}>{stringsOfApp.rule5}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }} >
                            <Image style={{ width: 25, height: 25 }} source={require('../../assets/checkMark.png')} />
                            <Text style={{ paddingLeft: 20 }}>{stringsOfApp.rule5}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }} >
                            <Image style={{ width: 25, height: 25 }} source={require('../../assets/checkMark.png')} />
                            <Text style={{ paddingLeft: 20 }}>{stringsOfApp.rule5}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }} >
                            <Image style={{ width: 25, height: 25 }} source={require('../../assets/checkMark.png')} />
                            <Text style={{ paddingLeft: 20 }}>{stringsOfApp.rule5}</Text>
                        </View>

                    </View>
                 
                </ScrollView>
                <FloatingBtn />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    header: {
        width: '100%',
        flex: 0.3,
    },
    content: {
        width: '100%',
        flex: 0.7,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 0
    },
    imagestyle: {
        width: '100%',
        height: '100%',
    },
    shadowViewStyle: {
        marginTop: 10,
        flexDirection: 'row',
        width: (Dimensions.get("window").width - 50)/ 3,
        height: 100,
        shadowColor: 'lightgray',
        borderRadius: 5,
        borderColor: 'gray',
        // borderWidth: 1,
        backgroundColor: 'white',
        shadowOpacity: 0.8,
        elevation: 12,
        shadowOffset: { width: 5, height: 8},
        justifyContent: 'center',
        alignItems: 'center'
    },
floatingbtn:{

}

})

const DataToShow = {
    "Rules": ["You must own the image you submit.",
        "No nudity/inappropriate content.",
        "Stick to the theme of the challange.",
        "No voting with fake accounts.",
        "To receive prizes, you must have a legitimate PayPal account.",
        "Photos that violate any of the rules will be removed."],
    "Description":
        ["This challenge is all about uploading the posts about your recent travels to places usually less travelled. Post more of your travelling pictures and get the chance to win."]
}