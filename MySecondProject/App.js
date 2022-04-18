import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';

export default function MyApp() {

 
  return (
    <View>
      <Text>
        {"\n\n\n\n\n"}
        Hello, I am a student in CIS340!{"\n"}
        </Text>
        <TextInpu></TextInpu>
    </View>
  );
}

export default function MultiComp(){
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'


    }}
    >
      <Text>Welcome to my class!</Text>
      <MyApp />
      <MyApp />
      <MyApp />
      <MyApp />
    </View>
  )
}