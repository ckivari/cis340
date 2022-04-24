import React, { useState } from 'react';
import { Text, Image, View } from 'react-native';
import { Button } from 'react-native-web';

function TV() {
 
  const [isOff, setIsOff] = useState(true);
  return(
  <View>
    {"\n\n\n\n"}
    <Text>
      This is {props.name} TV, and is {isOff ? "OFF" : "Turned me on"}
    </Text>
    <Button
      onPress = {() => {
        setIsOff(false);
      }
      }
      disabled = {!isOff}
      title = {isOff ? "Turn me on, please!" : "Thank You!"}
    />
  </View>
  );
}

export default function MultiTVs(){
  return(
    <View>
      <TV name = "LG"/>
      <TV name = "Sony"/>
    </View>
  )
}

