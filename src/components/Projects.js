import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class Projects extends Component {
    state = { users: [] };

    componentWillMount() {
        axios.get('http://msoftech.net/accounts/api/users')
            .then(response => this.setState({ albums: response.data }));
    }
    render() {
        return (
            <View>
                <Text>Projects</Text>
            </View>
        );
    }
}

export default Projects;