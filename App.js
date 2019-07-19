import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <ImageBackground source={require('./assets/alien.png')}
        style={styles.container}>
        <View style={styles.content}>
          <Text>Click the button to join the Area 51 raid</Text>
          <Text>PS: dont actually go</Text>
          <View style={styles.button}>
            <Button
              onPress={() => this.onPress()}
              title="Do you Believe?"
              color="green"
            />
          </View>
          <Text>
            {this.state.count !== 0 ? 'You are raiding with a party of: ' + this.state.count : null}
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    opacity: .7
  },
  button: {
    marginTop: 5,
    marginBottom: 5
  }
});
