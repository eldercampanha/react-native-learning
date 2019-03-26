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
import placeImage from './src/assets/beautiful-place.jpg'
import PlaceDetails from './src/components/PlacesDetails/PlacesDetails'

const marginTop = Platform.select({
  ios: 50,
  android: 15,
});

export default class App extends Component {

  state = {
    places: [],
    selectedPlace: null
  }

  onPlaceAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(
          {
            // Flat List requires a string key
            key: Math.random().toString(),
            name: placeName,
            image: {
              uri: "https://helpx.adobe.com/in/stock/how-to/visual-reverse-image-search/_jcr_content/main-pars/image.img.jpg/visual-reverse-image-search-v2_1000x560.jpg"
            }
          })
      };
    });
  }

  onPlaceDeleteHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return prevState.selectedPlace.key !== place.key
        }),
        selectedPlace: null
      }
    })
  }

  onModalCloseHandler = () => {
    this.setState({ selectedPlace: null})
  }

  onPlaceSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find((place) => {
          return place.key === key
        })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetails
          onItemClosed={this.onModalCloseHandler}
          onItemDeleted={this.onPlaceDeleteHandler}
          selectedPlace={this.state.selectedPlace}
        />
        <PlacesInput
          style={styles.inputContainer}
          onPlaceAdded={this.onPlaceAddedHandler}
        />
        <PlacesList
          style={styles.listContainer}
          places={this.state.places}
          onItemSelected={this.onPlaceSelectedHandler}
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
