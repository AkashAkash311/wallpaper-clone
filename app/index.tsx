import React from 'react';
import { View, Text, Button } from 'react-native';
import CounterApp from './CounterApp';

export default function App() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text>Hello World!</Text>
            <Button title="Press Me!" onPress={() => alert('Button Pressed!')} />
            
            <CounterApp/>

        </View>

    );
}
