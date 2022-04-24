import React from 'react';
import {Text, Image,  ScrollView } from 'react-native';

const dog = {url: 'https://hips.hearstapps.com/clv.h-cdn.co/assets/17/29/2048x1365/gallery-1500566326-gettyimages-512366437-1.jpg?resize=768:*',
            width: 64,
            height: 64};

export default MyScrollViewApp = () => {

  
   return( 
   <ScrollView style= {{padding: 40}}>
     <Text
     style = {{fontsize: 80}}>Try to scroll down</Text>
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
     <Text
     style = {{fontsize: 80}}>Try to scroll down, again if you like.</Text>
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
     <Text
     style = {{fontsize: 80}}>Try to scroll down, again if you like.</Text>
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
     <Text
     style = {{fontsize: 80}}>Try to scroll down, again if you like.</Text>
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
     <Text
     style = {{fontsize: 80}}>React Native Component!</Text>
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
     <Image source={dog} />
   </ScrollView> 
  
  );
}

  
