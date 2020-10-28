import React from 'react';
import{
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import{
    brugermenu,
    bell
}  from '../constants/images' ;

const Toolbar  = (props)=>{
    return(
        <View style={styles.toolbarView}>
            <TouchableOpacity onPress={()=> props.menuPress()}>
                     <Image
                     style={styles.image}
                     source={brugermenu}/>

            </TouchableOpacity>

            <TouchableOpacity onPress={()=> props.onNotificaitonPress()}>
            <Image 
                 style={styles.image}
                 source={bell}/>

            </TouchableOpacity>
       

        </View>

    )
}

const styles = StyleSheet.create({

    toolbarView:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:20,
        marginVertical:5,
        height:60
    },
    image:{
            width:20,
            height:20,
            resizeMode:'contain'
    }
})

export default Toolbar ;
