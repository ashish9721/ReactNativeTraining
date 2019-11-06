import React from 'react';
import {} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker'

export const Imagepic = {
     imagepic:(callback)=>{
         ImagePicker.openPicker({
        width:300,
        height:400,
        cropping:true
       }).then(image => {console.log(image)
       console.warn(image.path)
       callback(image.path)
    })
},
     


} ;

