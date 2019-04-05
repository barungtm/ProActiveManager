import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text>Like</Text>
        </TouchableOpacity>
    );
};

const styles = {
    button: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        backgroundColor: '#00aeef',
        padding: 10
    }
}

export default Button;