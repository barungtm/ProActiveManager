import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
      <View style={styles.container}>
          {props.children}
      </View>
  );
};

const styles = {
    container: {
        padding: 5,
        flexDirection: 'row',
    }
}

export default CardSection;