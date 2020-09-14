
// Imports: Dependencies
import React, { Component, useState, useEffect } from 'react';
import { useSelector} from 'react-redux'
import { Button, Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { CounterActions } from '@redux'
// Screen Dimensions
const { height, width } = Dimensions.get('window');
// Screen: Counter


const CouterComponent = (props) => {

    const [count, setCount] = useState(props.count)

    useEffect(() => {
        setCount(props.count)
    }, [props.count])

    const { increment, decrement } = props
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.counterTitle}>Counter</Text>
            <View style={styles.counterContainer}>
                <TouchableOpacity onPress={() => increment(1)}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <Text style={styles.counterText}>{count}</Text>
                <TouchableOpacity onPress={() => decrement(1)}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterTitle: {
        fontFamily: 'System',
        fontSize: 32,
        fontWeight: '700',
        color: '#000',
    },
    counterText: {
        fontFamily: 'System',
        fontSize: 36,
        fontWeight: '400',
        color: '#000',
    },
    buttonText: {
        fontFamily: 'System',
        fontSize: 50,
        fontWeight: '300',
        color: '#007AFF',
        marginLeft: 40,
        marginRight: 40,
    },
});


const mapStateToProps = (state) => {
    return {
        count: state.counter.count,
    }
}
const mapDispatchToProps = {
    increment: CounterActions.increment,
    decrement: CounterActions.decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(CouterComponent)