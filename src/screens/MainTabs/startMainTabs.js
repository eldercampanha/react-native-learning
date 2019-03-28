import { Navigation } from 'react-native-navigation';

const startTabs = () => {
    Navigation.startTabBasedApp({
        tabs: [
            {
                screen: "awesome-places.FindPlaceScreen",
                title: "Find Place",
                label: "Find Place"
            },
            {
                screen: "awesome-places.SharePlaceScreen",
                title: "Share Place",
                label: "Share Place"
            }
        ]
    })
}

export default startTabs;

