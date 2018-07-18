//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Header</Text>
                <TextInput
                    style={styles.texto}
                    onChangeText={ (value) => { this.props.onChangeText(value)  } }
                    placeholder="Aquí escribe tu texto"
                    onSubmitEditing={this.props.addTodo}
                    value={this.props.text}
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        backgroundColor: '#00ff00',
    },
    texto: {
        paddingHorizontal: 16
    }
});

//make this component available to the app
export default Header;
