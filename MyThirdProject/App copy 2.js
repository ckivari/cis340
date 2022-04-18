import { StatusBar } from 'expo-status-bar';
import { Text, Image, View } from 'react-native';

export default function MyDog() {

  let pic = {url: 'https://raw.githubusercontent.com/RamadanAbdunabi/CIS340/master/images/2dog.png'}
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image source = {pic}
      style = {{width: 200, height: 200}}
      />
      <Text>Hello here is a dog!</Text>
    </View>
  );
}

