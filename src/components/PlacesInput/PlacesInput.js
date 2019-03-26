import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

export default class PlacesInput extends Component {

    state = {
        placeName: ""
    }

    onPlaceSubmitHandler = (placeName) => {
        if (this.state.placeName.trim() === "") {
            return;
        }
        this.props.onPlaceAdded(this.state.placeName)
    }

    onPlaceNameChanged = (placeName) => {
        this.setState({ placeName })
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Name"
                    style={styles.textInput}
                    value={this.state.placeName}
                    onChangeText={this.onPlaceNameChanged}
                />
                <Button
                    style={styles.buttonInput}
                    title='Add'
                    onPress={ () => this.onPlaceSubmitHandler(this.state.placeName)}  />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInput: {
        width: "70%",
    },
    buttonInput: {
        width: "30%",
    },
})

