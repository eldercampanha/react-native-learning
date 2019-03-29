import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PlaceInput from '../../components/PlacesInput/PlacesInput'
import { connect } from "react-redux"
import { addPlace } from '../../store/actions/index'

class SharePlaceScreen extends Component {

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent =(event) => {
        if (event.type === "NavBarButtonPress"){
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left"
                })
            }
        }
    }

    onAddPlaceHandler = (name) => {
        this.props.onAddPlace(name)
    }

    render() {
        return (
            <View>
                <PlaceInput onPlaceAdded={this.onAddPlaceHandler} />
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    };
}

export default connect(null,mapDispatchToProps) (SharePlaceScreen);