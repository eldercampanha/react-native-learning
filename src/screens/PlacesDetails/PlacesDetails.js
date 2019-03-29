import React, {Component} from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { deletePlace } from "../../store/actions/index";

class PlaceDetails extends Component {

    itemDeletedHandler = () => {
        this.props.deleteItem(this.props.selectedPlace.key)
        this.props.navigator.pop()
    }

    render() {
        return (
            <View style={styles.container}>
            <View>
                <Image source={this.props.selectedPlace.image} style={styles.image} />
                <Text style={styles.placeTitle}>{this.props.selectedPlace.name}</Text>
            </View>
            <View>
                <Button title="Delete" color="red" onPress={this.itemDeletedHandler} />
                <Button title="Close" onPress={this.props.onItemClosed} />
            </View>
        </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    image: {
        width: "100%",
        height: 300,
    },
    placeTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});


const mapDispatchToProps = dispatch => {
    return{
        deleteItem: (key) => dispatch(deletePlace(key))
    };
}


export default connect(null,mapDispatchToProps)(PlaceDetails);