import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import ProjectDetail from './ProjectDetail';

class Projects extends Component {
    state = { projects: [] };

    componentWillMount() {
        axios.get('http://msoftech.net/accounts/api/users')
            .then(response => this.setState({ projects: response.data }));
    }

    renderUsers() {
        return this.state.projects.map(project =>
            <ProjectDetail project={project} key={ project.id } />
        );
    }
    // http://msoftech.net/accounts/public/images/users/thumbnail/thumb5062850927247743442001465776267568968892416n_1549999546.jpg
    render() {
        return (
            <ScrollView>
                <View>
                    {this.renderUsers()}
                </View>
            </ScrollView>

        );
    }
}

export default Projects;