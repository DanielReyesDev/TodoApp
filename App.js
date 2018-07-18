import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Header from './Header';
import Body from './Body';


export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      tareas: [],
      text: ""
    }

  }

  establecerTexto = (value) => {
    console.log(value);
    this.setState({
      text: value
    });
  }


  addTodo = (todo) => {
    this.setState({
      tareas: [...this.state.tareas, {text : this.state.text, key: `${Date.now()}` }],
      text: ""
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          text={this.state.text}
          onChangeText={this.establecerTexto}
          addTodo={this.addTodo}/>
        <Text>{this.state.text}</Text>
        <Body todos={this.state.tareas}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
