import React from 'react'
import { View, FlatList, Text, StyleSheet,ActivityIndicator ,SafeAreaView} from 'react-native'
import axios from 'axios'
import Card from './card'
export default class Task2 extends React.Component {

    static navigationOptions = {
        title: 'Task2',
      };

    constructor() {
        super()
        this.state = {
            isLoading:true,
            datasource: []
        }
    }
    // getApi() {
    //     axios.get('https://abhiparker.herokuapp.com/').then(response => {
    //         console.log(response)
    //         this.setState({ userdata: response });
    //         () => { console.log("success") }
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // this.getHelper()

    // }

    getHelper = (success, error) => {
        // axios.get('https://abhiparker.herokuapp.com/').then(response => {
        //     this.setState({
        //         userdata:response.data.data
        //     })
        //     success(response);
        //     return(response);
        // }).catch(error => {
        //     error(error);
        // })

        axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {

            success(response)
        }).catch(error => {
            error(error);
        })
    }


    componentDidMount() {
        this.getHelper(
            (response) => {
                console.log(response)
                this.setState({
                    datasource: response.data,
                    isLoading: false
                })

            },
            (error) => {

            }
        );
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
                <FlatList data={this.state.datasource}
                    renderItem={(rowdata) => (
                        <SafeAreaView >
                            <Card title={rowdata.item.title} userId={rowdata.item.userId} id={rowdata.item.id} completed={`${rowdata.item.completed}`} />
                        </SafeAreaView>

                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }




})