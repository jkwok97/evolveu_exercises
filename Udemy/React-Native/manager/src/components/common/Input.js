import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                style={inputStyle} 
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
        </View>
    )
};

const styles = {
    inputStyle: {
        color: '#007aff',
        paddingRight: 5,
        paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 3,
        borderWidth: 1,
        borderColor: '#007aff',
        borderRadius: 5,
    },
    labelStyle: {
        fontSize: 18,
        paddingRight: 20,
        flex: 1,
        color: '#007aff',
        textAlign: 'right'
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}

export { Input };