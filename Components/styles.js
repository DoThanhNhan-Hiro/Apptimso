import { Dimensions, StyleSheet, Platform } from 'react-native';




export default StyleSheet.create({
    image: { flex: 1 },
    container: {
        flex: 1,
    },
    info: {
        marginBottom:20,
        flexDirection: 'row',
        paddingHorizontal: 25,
        paddingTop: (Platform.OS === 'ios') ? 0 : 23
    },
    infoScores: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    infoTime: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    icontext:{
        fontSize:15,
        color:'red',
        marginLeft:10
    },
    play:{
        flexDirection:'row'
        ,flexWrap:'wrap'
    }
});
