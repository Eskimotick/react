import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Component from './components/Component';

export default class App extends React.Component {
  state = {
    textState: false,
    text: ''
  }

  handlePress = () => {
    this.setState({textState: !this.state.textState});
  }

  render() {
    const { textState, text } = this.state;

    return (
      <View style={styles.container}>
        {textState &&
          <Text>Open up App.js to start working on your app!</Text>
        }
        <Button title="Oie loise" onPress={this.handlePress} /> 
        <Component />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
