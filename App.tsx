import React, { useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  TextInputBase,
  View,
} from 'react-native';


function App(): React.JSX.Element {
  const [data,setData]=useState("tushar")
  return (
    <View style={{width:"100%", height:"100%", backgroundColor:"red", padding:10}}>
      <Text style={{fontSize:30,padding:20}}>Welcome {data} !!</Text>
      <Button title='Press here' onPress={()=>{setData(data=="tushar"?"Bhatia":"tushar")}} ></Button>
      <Card name={data} setData={setData}/>
      <InputBox/>

    </View>
  );
}
const Card=(props)=>{
  return(
    <View style={{width:"100%",backgroundColor:"yellow" ,display:'flex',flexDirection:"row",justifyContent:"center",alignItems:"center",gap:10,marginTop:10}}>
      <Text>{props.name}</Text>
      <Button title='Press here' onPress={()=>{props.setData(props.name=="tushar"?"Bhatia":"tushar")}} ></Button>
    </View>
  )
}

const InputBox=()=>{
  const [name,setName]=useState("");
  return(
    <View style={{marginTop:20}}>
      <Text style={{fontSize:30}}>{name}</Text>
      <TextInput placeholder='Enter the text' style={{borderColor:"white", borderWidth:1}} onChangeText={(text)=>{setName(text)}}></TextInput>
    </View>
  )
}


export default App;
