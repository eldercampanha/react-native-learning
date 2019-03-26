import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const placeDetails = (props) => {

    let modalContent = null;

    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image style={styles.image} source={props.selectedPlace.image} />
                <Text style={styles.placeTitle}>{props.selectedPlace.name}</Text>
            </View>
        );
    }

    return (
        <Modal  
        visible={props.selectedPlace !== null}
        animationType='slide'>
            <View style={styles.modalContent}>
                {modalContent}
                <View>
                    <Button title="Delete" color="red" onPress={props.onItemDeleted}/>
                    <Button title="Close" onPress={props.onItemClosed} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContent: {
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

export default placeDetails;