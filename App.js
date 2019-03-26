/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PlacesList from './src/components/PlacesList/PlacesList'
import PlacesInput from './src/components/PlacesInput/PlacesInput'

const marginTop = Platform.select({
  ios: 50,
  android: 15,
});

export default class App extends Component {

  state = {
    places: []
  }

  onPlaceAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(
          { 
            // Flat List requires a string key
            key: Math.random().toString(), 
            value: placeName
          })
      };
    });
  }

  onPlaceDeleteHandler = key => {
    this.setState( prevState => {
      return {
        places: prevState.places.filter( (place) => {
          return place.key !== key
        })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlacesInput
          style={styles.inputContainer}
          onPlaceAdded={this.onPlaceAddedHandler}
        />
        <PlacesList
          style={styles.listContainer}
          places={this.state.places}
          onItemDeleted={this.onPlaceDeleteHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: marginTop,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
