import {StyleSheet, Dimensions} from 'react-native';

const style = StyleSheet.create({

    screen: {
        padding: 8,
        backgroundColor: '#bbdefb',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        flex: 1
    },

    statusBar: {
        backgroundColor: '#8aacc8'
    },

    buttonContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 1
    },

    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 2
    },

    hintContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 2
    },

    contentContainer: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 5
    },

    button: {
        margin: 4,
        flex: 1
    },

    title: {
        fontSize: 24,
        textAlign: 'center',
    },

    hint: {
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center',
        opacity: 0.5
    }


});

export default style;