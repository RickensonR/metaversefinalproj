
import { StyleSheet, Text, View, SafeAreaView, Image,FlatList} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Post from '../components/Post';
import CarouselCards from '../components/CarouselCards';
import { Searchbar, FAB } from 'react-native-paper';
import carouselData from '../assets/data';


export default function World ({data}){

    return (
        <SafeAreaView style={styles.container}> 
      
        {/* <CarouselCards/> */}
            <View style = {styles.settings}>
            <Searchbar
                placeholder="Search"
        
            />
                
                {/* <MaterialCommunityIcons name="dots-horizontal-circle" size={45} color={"#aa7bb3"} /> */}
            </View>
       

            <View >
            <MaterialCommunityIcons name = "earth" size = {150} color = {"black"} />
            </View>

            <Text style = {styles.name}>
                    WORLDS
            </Text>

            <View style = {styles.biobox}> 
            <CarouselCards data = {carouselData.worlddata}/>

            </View>

            <FAB
    icon="plus"
    style={styles.fab}
    label = "Create"
    
  />

    
           

       
        </SafeAreaView>

    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start", 
        alignItems: 'center',
        backgroundColor: "white"

    }, 
    mainimg: {
        height: 200, 
        width: 200,
        borderRadius: 100,
        alignItems: "center"

    }, 
    mainimgbox : {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: 200,
        width: "90%", 
        backgroundColor: "red", 
        marginTop: 10

    }, 
    biobox: {
        backgroundColor: "white",
        height: 500,
        width: "90%"


    },
    settings: {
        alignItems: "flex-end",
        width: "90%",
        backgroundColor: "white",
        height: 50

    },
    name: {
        fontWeight: "bold", 
        fontSize: 50
    }, 
        fab: {
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0, 
          },

}

)