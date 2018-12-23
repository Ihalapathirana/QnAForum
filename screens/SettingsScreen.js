import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return(
      <View style={styles.container}>
       <Text>Edit third screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:'center'
  },
});