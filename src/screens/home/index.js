import React from 'react'
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    ImageBackground,
    ActivityIndicator,
    TouchableOpacity,
    FlatList,
    Image,
    ScrollView
} from 'react-native' ;
import colors from '../../constants/colors';

const WIDTH = Dimensions.get('window').width
const HEIGHT  = Dimensions.get('window').height ;
import{
    brugermenu,
    bell
} from '../../constants/images' ;
import Toolbar from '../../constants/toolbar' ;
import{
    BaseURl,
    ImageUrl
} from '../../constants/https' ;
import { SliderBox } from "react-native-image-slider-box";
import { Picker } from 'react-native'
import Swiper from 'react-native-swiper'

class Home extends React.Component{

    state={
        slidersArray:[],
        loading:true,
        citiesArray:[],
        categoriesArray:[],
        selectedValue:'Default',
        userValues:[
            {name:'one',username:'onee'},
            {name:'two',username:'oneee'},
            {name:'three',username:'oneeee'},
            {name:'four',username:'oneeeeee'},
        ],
        slidersImage:[
            "https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?girl",
            "https://source.unsplash.com/1024x768/?tree", 
        ],
        cityID:"5e1f78e9b17e82216f81ed16"

    }


    componentDidMount(){
        this.getSliders()
        this.getAllcities()
        this.getAllCategories()
    }
    getAllCategories =()=>{
        const URL =  BaseURl + `categories` ;

        return fetch(URL)
        .then((response) => response.json())
        .then((json) => {
            if(json.status === 1){
               // alert(json.categories.length)
                this.setState({
                    categoriesArray:json.categories,
                    loading:false
                })

            }
        })
        .catch((error) => {
            this.setState({loading:false})
        console.error(error);
        });
    }

    getAllcities =()=>{
        const URL = BaseURl +  "cities" ;

        return fetch(URL)
        .then((response) => response.json())
        .then((json) => {
            if(json.status === 1){
                //alert(json.status)
                this.setState({
                    citiesArray:json.cities,
                    loading:false
                })

            }
        })
        .catch((error) => {
            this.setState({loading:false})
        console.error(error);
        });
    }

    getSliders =()=>{
        const URL = BaseURl + "sliders" ;

        return fetch(URL)
        .then((response) => response.json())
        .then((json) => {
            if(json.status === 1){
                //alert(json.status)
                this.setState({
                    slidersArray:json.sliders,
                    loading:false
                })

            }
        })
        .catch((error) => {
            this.setState({loading:false})
        console.error(error);
        });
    }

    _renderItem=({item})=>{
        return(
            <TouchableOpacity   
                onPress={()=> this.props.navigation.navigate('Details',{
                    data:item
                })}
                style={styless.catItem}>
                <Image style={styless.image} source={{uri : ImageUrl + item.image}}/>
                <Text style={styless.text}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    _renderSLider=({item})=>{
        return(
            <View
                style={styless.SliderItem}>
                <ImageBackground style={{width:'100%',height:HEIGHT / 2}} source={{uri : ImageUrl + item.image}}>
                    <Toolbar/>
                    <Text style={styless.bigWhite}>WE DO</Text>
                    <Text style={styless.text1}>Provides High Quality Home/Office Maintenance services Book today or schedule your required</Text>
                </ImageBackground>
                
            </View>
        )
    }


    render(){
        const {loading} = this.state ;
        let myUsers = this.state.citiesArray.map((myValue,myIndex)=>{
            return(
            <Picker.Item label={myValue.name} value={myIndex} key={myIndex}/>
            )
            });

        return(
            <View style={styless.container}>
                    <ScrollView>

                    <FlatList
                style={{alignSelf:'center'}}
                horizontal
                data={this.state.slidersArray}
                renderItem={this._renderSLider}
                keyExtractor={(key,index)=> index.toString()}
                />
            
                <View style={styless.requestView}>

                        <View>
                            <Text style={styless.lokking}>Cant find What you are looking for?</Text>
                            <Text style={styless.boldText}>submit your request?</Text>
                        </View>

                        <TouchableOpacity style={styless.gobtn}>
                            <Text style={styless.whiteText}>GO</Text>
                        </TouchableOpacity>

                   
                </View>

                <View style={styless.rowView}>
                    <Text style={styless.boldText}>Popular Services</Text>

                    <View>
                        <Text style={styless.location}>Location</Text>
                        <Picker
                        style={{width:150,height:20}}
                        selectedValue={this.state.selectedValue} 
                        onValueChange={(value)=>this.setState({selectedValue:value})} >
                        {myUsers}
                        </Picker>
                        
                    </View>
                    
                </View>

                {loading && <ActivityIndicator size="large"  color={colors.green}/>}
                <FlatList
                style={{alignSelf:'center'}}
                numColumns={2}
                data={this.state.categoriesArray}
                renderItem={this._renderItem}
                keyExtractor={(key,index)=> index.toString()}
                />
            </ScrollView>
            </View>
        )
    }
}

export default Home ;


const styless= StyleSheet.create({

    slider:{
        width:'100%' ,
        height:HEIGHT / 3,
        backgroundColor:"grey",


    },
    text1:{
        marginHorizontal:20,
        fontFamily:'raleway',
        color:'white',
        fontSize:13
    },
    bigWhite:{
        color:'white',
        marginHorizontal:20,
        fontSize:50,
        fontFamily:'raleway'
    },
    location:{
        color:'grey',
        marginHorizontal:10,
        fontFamily:'opensans'
    },
    lokking:{
        color:'grey',
        fontFamily:'opensans'
    },
    requestView:{
        width:'90%',
        height:HEIGHT/10,
        borderRadius:15,
        alignSelf:'flex-end',
        backgroundColor:'white',
        marginTop:-30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    gobtn:{
        backgroundColor:colors.green,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        padding:15,
        fontFamily:'raleway'

    },
    rowView:{
        justifyContent:'space-between',
        marginHorizontal:20,
        marginVertical:10,
        flexDirection:'row',
        alignItems:'center'
    },
    catItem:{
        backgroundColor:'white',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        width:WIDTH / 2.3,
        height:HEIGHT / 4.5,
        marginHorizontal:10,
        marginVertical:10
    },
    SliderItem:{
        alignItems:'center',
        justifyContent:'center',
        width:WIDTH / 1,
        height:HEIGHT / 2,
    },
    image:{
        width:50,
        height:50,
        resizeMode:'contain',
        marginVertical:5
    },
    container:{
            backgroundColor:colors.backgroundColor
    },
    boldText:{
        fontFamily:'opensans',
        fontSize:15
    },
    whiteText:{
        color:'white',
        fontSize:15,
        fontFamily:'opensans'
    },
    text:{
        fontFamily:'raleway'
    }
})