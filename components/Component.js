import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { styles } from '../styles/Style';

class Component extends React.Component {
  state = {
    text: ''
  }

  handleChange = ({ value }) => {
    this.setState({text: value});
  }

  render() {
    const { text } = this.state;

    return(
      <View> 
        <Text style={styles.font}>Oie loise</Text>
        <TextInput value={text} onChangeText={this.handleChange} />
      </View>
    );
  }

}

export default Component;