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
import { connect } from 'react-redux'
import { addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index'

const marginTop = Platform.select({
  ios: 50,
  android: 15,
});

class App extends Component {

  onPlaceAddedHandler = placeName => {
   this.props.onAddPlace(placeName);
  }

  onPlaceDeleteHandler = () => {
    this.props.onDeletePlace()
  }

  onModalCloseHandler = () => {
    this.props.onDeselectPlace()
  }

  onPlaceSelectedHandler = key => {
    this.props.onSelectPlace(key)
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetails
          onItemClosed={this.onModalCloseHandler}
          onItemDeleted={this.onPlaceDeleteHandler}
          selectedPlace={this.props.selectedPlace}
        />
        <PlacesInput
          style={styles.inputContainer}
          onPlaceAdded={this.onPlaceAddedHandler}
        />
        <PlacesList
          style={styles.listContainer}
          places={this.props.places}
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

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);