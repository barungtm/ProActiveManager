import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const ProjectDetail = ({ project }) => {
    const { name, email, image} = project;
    const { listItem } = styles;
    const imageUri = 'http://msoftech.net/accounts/public/images/users/' + image;
    const thumbUri = 'http://msoftech.net/accounts/public/images/users/thumbnail/thumb' + image;
    return (
        <Card>
            <CardSection>
                <View style={styles.cardImageSection}>
                    <Image style={styles.cardImage} source={{ uri: thumbUri }} />
                </View>
                <View style={styles.textSection}>
                    <Text style={styles.cardTitle}>{name}</Text>
                    <Text style={styles.cardSecondaryText}>{email}</Text>
                </View>

            </CardSection>
            <CardSection>
                <Image source={{ uri: imageUri }} style={styles.image} />
            </CardSection>
            <CardSection>
                <Button />
            </CardSection>

        </Card>

    );
};
const styles = {
    cardImageSection: {
        marginRight: 5
    },
    cardImage: {
        height: 50,
        width: 50
    },
    textSection: {
    },
    cardTitle: {

    },
    cardSecondaryText: {

    },
    image: {
        height: 300,
        width: null,
        flex: 1
    }
};
export default ProjectDetail;