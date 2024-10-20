import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const CounterApp = () => {
    const [count, setCount] = useState(0);
  return (
    <View>
        <Text>Counter App</Text>
        <Button title='Increase Counter' onPress={() => setCount((prev)=> prev+1)}/>
        <Button title='Decrease Count ' onPress={() => setCount((prev)=> prev-1)}/>
        <Text>Count: {count}</Text>
    </View>
  )
}

export default CounterApp