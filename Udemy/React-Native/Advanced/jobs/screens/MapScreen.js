import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { fetchJobs } from '../actions';

class MapScreen extends Component {

    state = {
        mapLoaded: false,
        region: {
            longitude: -114.06,
            latitude: 51.05,
            longitudeDelta: 0.05,
            latitudeDelta: 0.05
        },
        jobTitle: ''
    }

    componentDidMount() {
        this.setState({ mapLoaded: true });
    }
    onRegionChangeComplete = (region) => {
        this.setState({ region });
    }
    onButtonPress = () => {
        this.props.fetchJobs(this.state.region, this.state.jobTitle);
    }

    render() {
        if (!this.state.mapLoaded) {
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size="large" />
                </View>
            )
        }
        return (
            <View style={{ flex: 1, backgroundColor: '#ededed' }}>
                <View style={styles.containerStyle}>
                    <Input 
                        inputContainerStyle={styles.inputStyle}
                        labelStyle={styles.labelStyle}
                        label="What Job Are You Looking For?"
                        onChangeText={ jobTitle => this.setState({ jobTitle })}
                    />
                    <Button 
                        title="Let's Look!"
                        buttonStyle={styles.buttonStyle}
                        onPress={this.onButtonPress}
                        icon={{ name: 'search', color: 'white' }}
                    />
                </View>
                <MapView 
                    region={this.state.region}
                    style={{ flex: 1 }}
                    onRegionChangeComplete={this.onRegionChangeComplete}
                />
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        marginTop: 50,
        backgroundColor: '#ededed'
    },
    inputStyle: {
        borderColor: "#4c4d4f",
        borderStyle: "solid",
    },
    labelStyle: {
        color: '#4c4d4f',
        fontSize: 20
    },
    buttonStyle: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 50,
        marginRight: 50,
        backgroundColor: '#4c4d4f'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 50,
        right: 50 
    },
    buttonStyleSearch: {
        backgroundColor: '#4c4d4f'
    }
}

export default connect(null, { fetchJobs })(MapScreen);