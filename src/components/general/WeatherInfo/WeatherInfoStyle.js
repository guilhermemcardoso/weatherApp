import {StyleSheet, Dimensions} from 'react-native';

const style = StyleSheet.create({

    container: {
        padding: 16,
        margin: 16,
        backgroundColor: '#eeffff',
        borderRadius: 4,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width - 32,
        shadowRadius: 4,
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 0.7,
        flex: 1
    },

    titleContainer: {
        flex: 1
    },

    currentInfoContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 2
    },

    minMaxContainer: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 2
    },

    bottomContainer: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: 8,
        flex: 1
    },

    progressContainer: {
        flex: 1,
        width: Dimensions.get('screen').width - 32,
        justifyContent: 'center'
    },

    cityName: {
        textAlign: 'center',
        fontSize: 20
    },

    currentWeather: {
        textAlign: 'center',
        fontSize: 36,
        marginRight: 24
    },

    icon: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    }

});

export default style;