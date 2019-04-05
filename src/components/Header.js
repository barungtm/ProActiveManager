import React from 'react';
import {
    Text,
    View
} from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative',
        color: '#00aeef',
        marginBottom: 3,
    },
    textStyle: {
        fontSize: 25,
        color: '#00aeef'
    },
    listItem: {
        padding: 10,
    }
};

export default Header;

