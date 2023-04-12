import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";
import FontAwesome  from 'react-native-vector-icons/FontAwesome';

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
     
      <TouchableOpacity style={styles.header}>
      <FontAwesome name='long-arrow-left' size={20} className={styles.like}/>
      <Text style={styles.textHeader}>Hi, name !</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.categorie}>
        <View style={styles.iconView}>
        <FontAwesome name='calendar' size={20} className={styles.like}/>
        <Text style={styles.text}>Mon suivi</Text>
        </View>
        <View>
        <FontAwesome name='angle-right' size={20} className={styles.like}/>
        </View>
      </TouchableOpacity>
  

      <TouchableOpacity style={styles.categorie}> 
      <View style={styles.iconView}>
      <FontAwesome name='heart' size={20} className={styles.like}/>
      <Text style={styles.text}>Favoris</Text>
      </View>
      <View>
      <FontAwesome name='angle-right' size={20} className={styles.like}/>
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.categorie}>
        <View style={styles.iconView}>
        <FontAwesome name='user-circle' size={20}  className={styles.like}/>
        <Text style={styles.text}>Informations personnelles</Text>
        </View>
        <View>
        <FontAwesome name='angle-right' size={20} className={styles.like}/>
        </View>
      </TouchableOpacity>
    
      <TouchableOpacity style={styles.categorie}>
        <View style={styles.iconView}>
        <FontAwesome name='question-circle-o' size={20} className={styles.like}/>
        <Text style={styles.text}>Aide</Text>
        </View>
      <View>
      <FontAwesome name='angle-right' size={20}  className={styles.like}/>
      </View>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.categorie}>
        <View style={styles.iconView}>
        <FontAwesome name='sign-out' size={20} className={styles.like}/>
        <Text style={styles.text}>Deconnexion</Text>
        </View>
        <View>
        <FontAwesome name='angle-right' size={20}  className={styles.like}/>
        </View>
      </TouchableOpacity>
  

      <TouchableOpacity style={styles.categorie}>
        <View style={styles.iconView}>
        <FontAwesome name='eraser' size={20} className={styles.like}/>
        <Text style={styles.text}>Supprimer mon compte</Text>
        </View>
      <View styles={styles.arrow}>
      <FontAwesome name='angle-right' size={20} className={styles.like}/>
      </View>
      </TouchableOpacity>
  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: 'column',
    // alignItems: "flex-start",
    backgroundColor: "white",
  },
  categorie: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row', 
    // alignItems: 'center', 
    borderColor: 'red', 
    borderWidth: 1, 
    width: '100%',
    height: '10%',
    padding: '5%',
   
  }, 
  iconView: {
    flexDirection: 'row', 
    alignItems: 'center', 
    // borderColor: 'red', 
    // borderWidth: 1, 
  },

  arrow: {
    flexDirection: 'row', 
    // alignItems: 'flex-start',
    // borderColor: 'red', 
    // borderWidth: 1, 
  },

  text: {
    paddingLeft: '5%',
    marginRight: '50%'
  }, 
  textHeader: {
    paddingLeft: '5%',
    marginRight: '50%', 
    fontSize: 30,
  }, 
  header: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row', 
    padding: '10%',
  }
});
