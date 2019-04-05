import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    const { cardContainer } = styles;
  return (
    <View style={cardContainer}>
        {props.children}
    </View>
  );
};
const styles = {
    cardContainer: {
        padding: 5,
        margin: 1,
        backgroundColor: '#eeeeee',
        borderRadius: 5,
        elevation: 1,
    }
}

export default Card;