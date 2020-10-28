import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Dimensions,
    Image,
    FlatList,
    TouchableOpacity,
    ScrollView
} from 'react-native' ;
import React from 'react' 
import Toolbar from '../../constants/toolbar' ;
import {
    ImageUrl
} from '../../constants/https';
import colors from '../../constants/colors';

const HEIGTH  =  Dimensions.get('window').width ;
const WIDTH = Dimensions.get('window').height ;

 function DetailsScreen({ route, navigation }) {


    const { data } = route.params;
    console.log("descripo" , data)
    return (
      <View>
          <ScrollView>

        
          <ImageBackground style={styles.imagebackground} source={{uri : ImageUrl + data.coverImage}}>
                 <Toolbar/>

          </ImageBackground>

           <View
                style={styles.catItem}>
                <Image style={styles.image} source={{uri : ImageUrl + data.image}}/>
                <Text style={styles.blackText}>{data.title}</Text>
            </View>
          
        <Text style={styles.blackText}>House cleaning includes:</Text>

        <FlatList
        data={data.description}
        renderItem={({item})=>(
            <View style={{flexDirection:'row',padding:5}}>
                <View style={styles.roundView}/>
                <Text style={styles.itemText}>{item}</Text>
            </View>
        )}
        />
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.whiteText}>Book this Service</Text>
        </TouchableOpacity>       
        </ScrollView>
      </View>
    );
  }

  export default DetailsScreen ;


  const styles = StyleSheet.create({
    imagebackground:{
        width:'100%',
        height: HEIGTH /1.5
    },
    catItem:{
        backgroundColor:'white',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        width:WIDTH / 4.5,
        height:HEIGTH / 3,
        marginHorizontal:10,
        marginVertical:10,
        alignSelf:'center',
        marginTop:HEIGTH / -7
    },
    image:{
        width:30,
        height:30,
        resizeMode:'contain',
        marginVertical:5
    },
    roundView:{
        width:25,
        height:25,
        borderColor:colors.green,
        borderWidth:2,
        marginHorizontal:10,
        borderRadius:12.5

    },
    btn:{
        width:'80%',
        height:60,
        backgroundColor:colors.green,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:35,
        alignSelf:'center',
        marginVertical:10,
        marginBottom:50,
    },
    whiteText:{
        color:'white',
        fontFamily:'opensans'
    },
    blackText:{
        marginHorizontal:20,
        fontSize:15,
        marginVertical:10,
        fontFamily:'raleway'
    },
    itemText:{
        fontSize:12,
        width:'80%',
        fontFamily:'opensans'

    }
  })