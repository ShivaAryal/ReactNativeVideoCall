/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import ZoomUs from 'react-native-zoom-us';

class App extends React.Component {
  state = {  }

  async componentDidMount() {
    try {
      const initializeResult = await ZoomUs.initialize(
        "3aGmqXptrSPmDNFlslQa9LWbDINQISzsXBt8",
        "gakaxCLfzMUTIS0aDREqWYX3A5mEL2bOwGoc",
        "zoom.us"
      );
      console.warn({ initializeResult });
    } catch(e) {
      console.warn({ e });
    }
  }

  async intializeZoom(){
    try{
      await ZoomUs.initialize(
        // config.zoom.appKey,
        // config.zoom.appSecret,
        // config.zoom.domain
        // "rWFeM6GVRlW9SlxO-qUeXA",
        // "MWt0hPlGJl3dti9qNk9Vm1OY6GehAzSlpDqN",

        // sdk ho hai yo
        "3aGmqXptrSPmDNFlslQa9LWbDINQISzsXBt8",
        "gakaxCLfzMUTIS0aDREqWYX3A5mEL2bOwGoc",
        "zoom.us"
      );
    } catch(e){
      return e
    }
  }

  async startMeeting(){ 
    await ZoomUs.startMeeting(
      'Shiva',
      '724648191',
      "2m6j_K_QTDKOq3SVv29Ekg",
      2,
      // null,
      "eyJ6bV9za20iOiJ6bV9vMm0iLCJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjbGllbnQiLCJ1aWQiOiIybTZqX0tfUVRES09xM1NWdjI5RWtnIiwiaXNzIjoid2ViIiwic3R5IjoxLCJ3Y2QiOiJ1czA0IiwiY2x0IjowLCJzdGsiOiJ0aWRUUUMxLXc3N18xMzBJY2otN0Z5VXV5QjhZR2JwNUYtTl95OXBCWjNRLkVnSUFBQUZ4WTVxaWxRQUFIQ0FnZENzNWRqQTNNa0ZwT0dsaVNVTXhVeTluWXpoRE5sUTBTWFozZERndloxY0FERE5EUWtGMWIybFpVek56UFFSMWN6QTAiLCJleHAiOjE1ODY1MjEyMTAsImlhdCI6MTU4NjUxNDAxMCwiYWlkIjoiMzFFNEhsSm5SNldaRU9tVkRPdkdldyIsImNpZCI6IiJ9.6fB-Ppp9mazmSnpBeqdV9lwdh-7A6bptX8iY7KAvFLE",
      null
    )
  }

  startTheMeeting = () => {
    this.startMeeting().then(res=>console.log(res)).catch(err=>console.log("err here",err))
  }

  async joinMeeting(){
    await ZoomUs.joinMeeting(
      "sfucsdf",
      "932096588"
    );
  }

  jointheMeeting = () => {
    this.joinMeeting().then(res=>console.log(res)).catch(err=>console.log("err hre",err))
  }

  render() {
    return (
      <View style={{flex:1}}>
        <TouchableOpacity
          onPress={this.startTheMeeting}
        >
          <Text style={{color:'#000',margin:40}}>Press to start meeting</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;


// https://us04web.zoom.us/s/724648191?zak=eyJ6bV9za20iOiJ6bV9vMm0iLCJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjbGllbnQiLCJ1aWQiOiIybTZqX0tfUVRES09xM1NWdjI5RWtnIiwiaXNzIjoid2ViIiwic3R5IjoxLCJ3Y2QiOiJ1czA0IiwiY2x0IjowLCJzdGsiOiIwd2pid0g3X1hOMkVTSzg3Q2xpUlhDelFpNzNfLTVlTzJmdFZtbU8ySi1vLkVnSUFBQUZ4WXBkdlNnQUFIQ0FnZENzNWRqQTNNa0ZwT0dsaVNVTXhVeTluWXpoRE5sUTBTWFozZERndloxY0FERE5EUWtGMWIybFpVek56UFFSMWN6QTAiLCJleHAiOjE1ODY1MDQyMjMsImlhdCI6MTU4NjQ5NzAyMywiYWlkIjoiMzFFNEhsSm5SNldaRU9tVkRPdkdldyIsImNpZCI6IiJ9.IHxxKjn0-dTSYjgHYfoASlGroacK7Ekt9CJEu3uMkEA