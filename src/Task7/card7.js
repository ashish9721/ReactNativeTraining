import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'

export default class Card7 extends React.Component {

    // componentWillReceiveProps(){
    // }

    // renderData = (rowData) => {
    //     debugger
    //     let { item, index } = rowData;
    //     console.warn(item)
    //     return (
    //        // <React.Fragment>
    //             <View style={Styles.cardStyle}>
    //             <View style={{flexDirection:'row',paddingTop:5}}>
    //                 <Text>First Name : </Text>
    //                 <Text>{item.fname}</Text>
    //             </View>
    //             <View style={{flexDirection:'row',paddingTop:8}}>
    //                 <Text>Last Name : </Text>
    //                 <Text>{item.lname}</Text>
    //             </View>
    //             <View style={{flexDirection:'row',paddingTop:8}}>
    //                 <Text>Email : </Text>
    //                 <Text>{item.id}</Text>
    //             </View>
    //            <View style={{flexDirection:'row',paddingTop:5,justifyContent:'space-evenly'}}>
    //             <TouchableOpacity onPress={()=>this.props.edit(rowData.item.id)}>
    //                 <Text>Edit</Text>
    //             </TouchableOpacity>
    //             <TouchableOpacity onPress={()=>this.props.remove(rowData.item.id)}>
    //                 <Text>
    //                     Remove
    //                 </Text>
    //             </TouchableOpacity>
    //             </View>
    //             </View>
    //     //    </React.Fragment>
    //     )
    // }

    render() {
        return (
            
            <View style={{margin:15}}>
                    <FlatList
                    
                    data={this.props.item}
                    renderItem={rowData=>(
                        // this.renderData()
                        <View style={Styles.cardStyle}>
                                    <View style={{flexDirection:'row',paddingTop:5}}>
                                         <Text>First Name : </Text>
                                         <Text>{rowData.item.fname}</Text>
                                     </View>
                                     <View style={{flexDirection:'row',paddingTop:8}}>
                                     <Text>Last Name : </Text>
                                         <Text>{rowData.item.lname}</Text>
                                     </View>
                                     <View style={{flexDirection:'row',paddingTop:8}}>
                                         <Text>Email : </Text>
                                         <Text>{rowData.item.email}</Text>
                                     </View>
                                    <View style={{flexDirection:'row',paddingTop:5,justifyContent:'space-evenly'}}>
                                     <TouchableOpacity onPress={()=>this.props.edit(rowData.item.id)}>
                                         <Text>Edit</Text>
                                     </TouchableOpacity>
                                     <TouchableOpacity onPress={()=>this.props.remove(rowData.item.id)}>
                                         <Text>
                                             Remove
                                         </Text>
                                     </TouchableOpacity>
                                     </View>
                                    </View>
                    
                    )} 
                    keyExtractor={(item,index)=> index.toString}/>
                
            </View>

        );
    }
}

const Styles = StyleSheet.create({
   
    cardStyle: {
        marginTop: 20,
        borderWidth: 1,
        backgroundColor:'lightgray',
        borderColor:'gray',
        borderRadius:20,
        paddingLeft:5,
        paddingRight:5,
        // height:150,
        paddingTop: 10,
        paddingBottom: 10,
        shadowOffset:{width:10,height:10},
        shadowColor:'black',
        shadowOpacity:0.5,
        justifyContent:"space-evenly"
    
    },
   
})