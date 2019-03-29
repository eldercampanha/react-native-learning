import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PlaceList from '../../components/PlacesList/PlacesList';

class FindPlaceScreen extends Component {

    itemSelectedHandler = (key) => {
        const selected = this.props.places.find(
            (place) => place.key === key
        )


        this.props.navigator.push({
            screen: "awesome-places.PlaceDetails", 
            title: selected.name, 
            passProps: {
                selectedPlace: selected
            }
        })
    }

    render() {
        return (
            <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        places: state.places.places
    };
}

export default connect(mapStateToProps)(FindPlaceScreen);