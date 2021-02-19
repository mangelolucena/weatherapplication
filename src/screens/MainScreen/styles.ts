import { StyleSheet } from 'react-native';

import AppStyles from "../../themes/AppStyles";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    linearGradientContainer: {
        flex: 1,
        padding: 20
    },
    weatherMainContainer: {
        alignItems: 'center',
        flex: 1
    },
    weatherDetailItems: {
        alignItems: 'center',
        marginTop: 8,
        padding: 20,
        flexDirection: 'row'
    },
    weatherIconContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    weatherMainDataContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    date: {
        position: 'absolute',
        marginTop: 10
    }
});