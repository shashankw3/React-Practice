import React,{useState,useEffect} from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';




const App=()=> {
  const isDarkMode = useColorScheme() === 'dark';
  const [count, setCount] = useState(0)
  const [intervalId, setIntervalId] = useState(null)
 //setInterval(()=>handleIncrement(),1000)
    useEffect(() => {
        alert("here")
    }, [])
  const handleIncrement=async()=>{
    start()
    let id=setInterval(start,1000)
    setIntervalId(id)
    
  }
  const handleStop=async()=>{
    setCount(0)
    return clearInterval(intervalId)


    
  }
  const start=()=>{
    setCount((state)=>state+1)
  }
 
  return (
   
    <SafeAreaView style={styles.root}>
  

      <CircularProgress value={58} />
        <View style={styles.circle}>
        
          <Text style={styles.text}>
              {count}
            </Text>
      
      
        </View>
        
        
        <View style={styles.row}>
        <TouchableOpacity style={styles.StartBtn} onPress={handleIncrement}>
          <Text style={styles.startBtnText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stopBtn} onPress={handleStop}>
          <Text style={styles.stopBtnText}>Stop</Text>
        </TouchableOpacity>
        </View>
       
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root:{
      flex:1,
      backgroundColor:'black',
      justifyContent:'center',
      alignItems:'center'
  },
  circle:{
   // backgroundColor:'green',
    height:Platform.OS=='android'?'30%':'28%',
    width:Platform.OS=='android'?'50%':'56%',
    justifyContent:'center',
    alignItems:'center',
    borderColor:'green',
    borderWidth:20,
    borderRadius:100,
    //borderStartColor:'deeppink',
    
  },
  innerCircle:{
    position:'absolute',
    width:'100%',
    height:'100%',
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#3498db',
    borderTopColor: '#3498db'   ,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:20,
    borderRadius:10,
  },
  text:{
    fontSize:60,
    color:'white'
  },
  row:{
    flexDirection:'row',
    width:'100%',
    position:'relative',
    top:'30%',
    justifyContent:'space-around',
    alignItems:'center',
    padding:10,
    
  },
  StartBtn:{
    position:'relative',
   
    backgroundColor:'red',
    padding:20,
    borderRadius:100
  },
  startBtnText:{
    color:'white',
    fontWeight:'bold',
    fontSize:20
  },
  stopBtn:{
    position:'relative',
   
    backgroundColor:'black',
    borderColor:'red',
    borderWidth:2,
    padding:20,
    borderRadius:100

  },
  stopBtnText:{
    color:'white',
    fontWeight:'bold',
    fontSize:20
  },

});

export default App;
