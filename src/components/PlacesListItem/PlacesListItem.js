import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const placesListItem = (props) => (
    <TouchableOpacity onPress={props.onItemSelected}>
        <View style={styles.listItem}>
            <Image 
                resizeMode="contain"
            style={styles.listItemImage} source={props.placeImage} />
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee",
        flexDirection: 'row',
        alignItems: 'center',
    },
    listItemImage: {
        marginRight: 8,
        width: 60,
        height: 30
    }
});

export default placesListItem;