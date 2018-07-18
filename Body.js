//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// create a component
class Body extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Body</Text>
                <FlatList
                    data={this.props.todos}
                    renderItem={ ( {item} ) => {  return <Text>{item.text}</Text> } }
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 9,
        backgroundColor: '#98FB98',
    },
});

//make this component available to the app
export default Body;
