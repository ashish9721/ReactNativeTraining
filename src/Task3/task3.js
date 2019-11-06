import React from 'react'
import { View, FlatList, Text, TextInput,StyleSheet,ActivityIndicator ,SafeAreaView,TouchableOpacity,Image} from 'react-native'
import axios from 'axios'
import Card from './card3'
import stringsOfApp from '../translations/local'
export default class ApiPost extends React.Component {


    constructor() {
        super()
        this.state = {
            enteredname:'',
            enteredemail:'',
            enteredpassword:'',
            isLoading:true,
            authToken:'',
            name:'',
            profile_pic:'',
            statusCode:0,
            isLoading:false
        }
    }
    getApi=()=> {
        this.setState({
            isLoading:true
        })
        axios.post('https://abhiparker.herokuapp.com/user/login',{'name':this.state.enteredname,
        'email':this.state.enteredemail,
    'password':this.state.enteredpassword}).then(response => {

            console.log(response.data)
            console.warn(response.data.data)
            this.setState({ authToken:  "Bearer "+response.data.data,
        isLoading:false });
            () => { console.log("success") }
            console.log(this.state.authToken)
        }).catch(error => {
            console.log(error)
        })

    }
    getDataFromApi= ()=>{

        // axios.get('https://abhiparker.herokuapp.com/user/',{"Authorization":this.state.authToken}).then(reponse=>{ })
            axios({
                method:"get",
                url:"https://abhiparker.herokuapp.com/user/",
                headers:{"Authorization": this.state.authToken }
            }).then(response => {console.log(response)
                console.warn(response.data)
                this.setState({
                    name:response.data.name,
                    profile_pic:response.data.data.profile_pic,
                })
            })
    }
    render() {
        return (
            <View style={styles.container}>
              {this.state.isLoading &&
        (<ActivityIndicator
            style={styles.activityIndicatorStyle}
            color="black"
            size="large"
            hidesWhenStopped={true}
        />)}
                <View style={styles.viewStyle}>
                    <Text style={styles.headerStyle}>{stringsOfApp.login}</Text>
                </View>
                <View style={{alignItems:'flex-start'}}>
                    <Text style={styles.nameStyle}>{stringsOfApp.name}</Text>
                    <TextInput
                        value={this.state.enteredname}
                        style={styles.textInputStyle}
                        onChangeText={(text) => this.setState({ enteredname: text })}
                        returnKeyType='next'
                        placeholder={stringsOfApp.placename}>
                    </TextInput>
                </View>
                <View >
                    <Text style={styles.nameStyle}>{stringsOfApp.password}</Text>
                    <TextInput
                        value={this.state.enteredpassword}
                        style={styles.textInputStyle}
                        onChangeText={(text) => this.setState({ enteredpassword: text })}
                        returnKeyType='next'
                        placeholder={stringsOfApp.placepassword}>
                    </TextInput>
                </View>
                <View >
                    <Text style={styles.nameStyle}>{stringsOfApp.email}</Text>
                    <TextInput
                        value={this.state.enteredemail}
                        style={styles.textInputStyle}
                        onChangeText={(text) => this.setState({ enteredemail: text })}
                        returnKeyType='next'
                        placeholder={stringsOfApp.placeemail}>
                    </TextInput>
                </View>
        {/* <Text style={{width:"100%",paddingLeft:10,paddingRight:10,fontSize:25}}>
            Name
        </Text> */}
        
       <TouchableOpacity onPress={this.getApi}  style={{height:60,width:200,justifyContent:'center',alignItems:"center",marginTop:30,marginLeft:60,borderRadius:40,backgroundColor:'#1E437D'}}>
           <Text style={{color:'white',fontSize:25}} >{stringsOfApp.clkit}</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={this.getDataFromApi}  style={{height:60,width:200,justifyContent:'center',alignItems:"center",marginTop:30,marginLeft:60,borderRadius:40,backgroundColor:'#1E437D'}}>
           <Text style={{color:'white',fontSize:25}}>{stringsOfApp.seeimg}</Text>
       </TouchableOpacity>

      <Image style={{width:150,height:150,borderRadius:20,marginLeft:60,marginTop:45}} source={{uri:this.state.profile_pic}}/>

                {/* <FlatList data={this.state.datasource}
                    renderItem={(rowdata) => (
                        <SafeAreaView >
                            <Card2 title={rowdata.item.title} userId={rowdata.item.userId} id={rowdata.item.id} completed={`${rowdata.item.completed}`} />
                        </SafeAreaView>

                    )}
                    keyExtractor={(item, index) => index.toString()}
                /> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft:20
    }
,viewStyle: {
    backgroundColor: '#124567',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:10,
    marginRight:10,
    paddingTop:20,width:"90%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
},
nameStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#127782',
    marginBottom: 8,
    marginTop: 8,
},
textInputStyle: {
    borderWidth: 1,
    height: 40,
    width:300,
    borderColor: '#127782',
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 50,
    backgroundColor: 'white',
    color: '#127782'
},
headerStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    marginLeft: 16,
    marginBottom: 8,
    marginTop: 8,
},

})