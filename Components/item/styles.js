import { Dimensions, StyleSheet, Platform, } from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height - 128;
export default StyleSheet.create({
    container: {
        width: Width / 5,
        height: Height / 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {

        backgroundColor: 'red',
        borderRadius: 100,
    },
    itemnumber: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 13,
        paddingVertical: 13,
        color: 'black'
    },
    bg_1: {
        backgroundColor: 'red'
    },
    bg_2: {
        backgroundColor: 'yellow'
    },
    bg_3: {
        backgroundColor: 'green'
    },
    bg_4: {
        backgroundColor: 'pink'
    },
    bg_5: {
        backgroundColor: 'blue'
    },
    bg_6: {
        backgroundColor: '#ff7f50'
    },
    bg_7: {
        backgroundColor: '#20b2aa'
    },
    bg_8: {
        backgroundColor: '#add8e6'
    },
    bg_9: {
        backgroundColor: '#00ced1'
    },
    active: {
        backgroundColor: 'white',
       
    },
    activenumber: {
        color: 'red'
    }
});
