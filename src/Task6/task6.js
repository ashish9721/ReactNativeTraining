
import React from 'react';
import {
    FlatList,
    StyleSheet, View, Text, SafeAreaView, ScrollView, Platform, TouchableOpacity, TextInput, Image
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { RNS3 } from 'react-native-aws3';
import { Imagepic } from '../components/imagepic';

export default class Task6 extends React.Component{
  
    
      
    constructor(){
        super()
        this.state={
            imageurl:'https://tse2.mm.bing.net/th?id=OIP.CueuouqUsNzhadxMw7xErwHaFI&pid=Api',
            imagepath:'' ,
            isloading:false ,
            isuploading:false,
            uploadimagepath:'file://',
            
        }
    }

    uploadImage = () => {
        S3_BUCKET="appinventiv-development"
        S3_REGION="us-east-1"
        S3_ACCESS_KEY_ID="AKIAJ3UHQTWRRT2AH3RA"
        S3_SECRET_ACCESS_KEY="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"
        console.warn(this.state.imagepath)
         const file = {
            // `uri` can also be a file system path (i.e. file://)
            uri: 'file://' + this.state.imagepath,
            name: "image.jpg",
            type: "image/jpg"
          }
          const options = {
            keyPrefix: "uploads/",
            bucket: "appinventiv-development",
            region: "us-east-1",
            accessKey: "AKIAJ3UHQTWRRT2AH3RA",
            secretKey: "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",
            successActionStatus: 201
          }
    
          RNS3.put(file, options).then(response => {
            if (response.status !== 201)
              throw new Error("Failed to upload image to S3");
              console.warn(response.body);
            console.log(response.body);
            /**
             * {
             *   postResponse: {
             *     bucket: "your-bucket",
             *     etag : "9f620878e06d28774406017480a59fd4",
             *     key: "uploads/image.png",
             *     location: "https://your-bucket.s3.amazonaws.com/uploads%2Fimage.png"
             *   }
             * }
             */
          });
          RNS3.put(file, options)
  .progress((e) => console.warn(e.loaded / e.total));
    }

    
    render(){
        return(<View style={{justifyContent:'center',alignItems:'center',backgroundColor:'lightblue',flex:1}}>
        <TouchableOpacity style={{backgroundColor:'#86D5E1d',margin:10,padding:10, borderRadius:50,borderColor:'gray',borderWidth:1}} onPress={()=>{
    
              Imagepic.imagepic((imagepathReceived)=>{
                  console.warn("hello");
                  console.warn(this.state.imagepath)
              this.setState({
                  imagepath:imagepathReceived,
              },()=>{console.warn(this.state.imagepath)
                this.setState({uploadimagepath:"file://"+this.state.imagepath,
                        isuploading:true})
                  // uncomment this to upload the image to the AWS3 server
                    //  this.uploadImage() 
                    
                    })
              })
            
           

    //     Platform.OS==='ios'?  ImagePicker.openPicker({
    //          width:300,
    //          height:400,
    //          cropping:true
    //         }).then(image => {console.log(image)
    //             this.setState({
    //                 imagepath:image.path
    //             }, () => {
    //                 this.uploadImage()
    //             })
    //         console.warn(image.path)
    //     })
    //     :   ImagePicker.openCamera({
    //         width:300,
    //         height:400,
    //         cropping:true
    //        }).then(image => {console.log(image)
    //            this.setState({
    //                imagepath:'file://' + image.path
    //            })

    //        console.warn(image.path)
    //    })
    
        }}>
            <Image onLoad={()=>this.setState({isloading:true})}
                 style={{width:300,height:300,borderRadius:50,borderColor:'gray',borderWidth:1}}  source={{uri:this.state.imagepath}}/>
                 {!this.state.isloading && <Image source={require('../../assets/person.png')} style={{position:'absolute',justifyContent:'center',alignItems:'center',marginTop:100,marginLeft:130}}/>}
                {/* never */}
                 {/* {this.state.isloading && (this.setState({imagepath:"file://"+this.state.imagepath, isuploading:true})  )} */}
                 {/* {this.state.isuploading && this.uploadImage()} */}
        </TouchableOpacity>
          <TouchableOpacity disabled={!this.state.isuploading} onPress={()=>{
             this.uploadImage()
          }}>
              <View style={{height:50,width:200,borderRadius:20,borderWidth:2,borderColor:'gray',justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontSize:25}}>Upload Image</Text>
              </View>
          </TouchableOpacity>
    
    
    </View> );
    
    } 
    }




//     S3_BUCKET="appinventiv-development"
// S3_REGION="us-east-1"
// S3_ACCESS_KEY_ID="AKIAJ3UHQTWRRT2AH3RA"
// S3_SECRET_ACCESS_KEY="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"