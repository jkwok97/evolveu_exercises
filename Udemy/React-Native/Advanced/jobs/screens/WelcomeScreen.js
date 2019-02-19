import _ from 'lodash';
import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { View, Text, Dimensions, ImageBackground, AsyncStorage } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome To JobApp!' },
    { text: "We'll help you find jobs near you" },
    { text: 'Set your location' },
    { text: 'View jobs near your location' },
    { text: 'Pick your favorites' },
    { text: 'Apply to that job' },
];

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class WelcomeScreen extends Component {

    state = { token: null };

    async componentWillMount() {
        AsyncStorage.removeItem('fb_token'); //remove this line of code
        let token = await AsyncStorage.getItem('fb_token');
        if (token) {
            this.props.navigation.navigate('map');
            this.setState({ token });
        } else {
            this.setState({ token: false });
        }
    }

    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
    };

    render() {
        if (_.isNull(this.state.token)) {
            return <AppLoading />
        }
        return (
            <View>
                <ImageBackground
                    style={styles.backgroundImage}
                    source={require('../media/mf-evelyn-1365221-unsplash.jpg')} 
                >
                    <View style={styles.viewStyle}>
                        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = {
    backgroundImage: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    },
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
}

export default WelcomeScreen;