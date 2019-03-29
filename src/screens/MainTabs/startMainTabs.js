import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("md-map", 30),
        Icon.getImageSource("ios-share-alt", 30),
        Icon.getImageSource("ios-menu", 30)
    ]).then(source => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "awesome-places.FindPlaceScreen",
                    title: "Find Place",
                    label: "Find Place",
                    icon: source[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                id: "sideDrawerToggle",
                                icon: source[2],
                                title: "Menu"
                            }
                        ]
                    }
                },
                {
                    screen: "awesome-places.SharePlaceScreen",
                    title: "Share Place",
                    label: "Share Place",
                    icon: source[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                id: "sideDrawerToggle",
                                icon: source[2],
                                title: "Menu"
                            }

                        ]
                    }

                }
            ],
            drawer: {
                left: {
                    screen: "awesome-places.SideDrawer",
                }
            }
        })
    })

}

export default startTabs;

