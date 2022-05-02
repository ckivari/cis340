import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';

export default function App() {

  const csuLogo ={
    uri: "https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png",
    width: 80,
    height: 80

  };


  return (
    <View style={styles.container}>
      
      <Image
        style={styles.localCSUlogo}
        source={require('./assets/csulogo.png')}
      />

      <Image
        style={styles.urlCSUlogo}
        source={{
          uri: "https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png"
        }}

      />


        <Image
        style={styles.stretchLogo}
        source={csuLogo}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  
  localCSUlogo:{
    width: 55,
    height: 65,
  },

  urlCSUlogo:{
    width: 50,
    height: 50,
  },

  stretchLogo: {
    
    height: 200,
    resizeMode: 'center',
  }
});
