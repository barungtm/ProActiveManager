import React from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import Projects from './components/Projects';


const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'ProActive Manager'} />
        <Projects />
    </View>


);
export default App;

