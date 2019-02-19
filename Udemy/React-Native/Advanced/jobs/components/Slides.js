import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button, Avatar } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {

    renderLastSlide(index) {
        if (index === this.props.data.length -1) {
            return (
                <Button
                    title="Sign Up Today!"
                    type="outline"
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.titleStyle}
                    large
                    onPress={this.props.onComplete}
                />
            )
        }
    }
    renderFirstSlide(index) {
        if (index === 0) {
            return (
                <View>
                    <Avatar 
                        rounded
                        size='large'
                        containerStyle={{marginTop: 10}}
                        overlayContainerStyle={{backgroundColor: 'transparent', borderColor: 'white', borderStyle: 'solid', borderWidth: 2}}
                        icon={{ name: 'work', color: 'white' }}
                    />
                </View>
            )
        }
    }

    renderSlides() {
        return this.props.data.map((slide, index) => {
            return (
                <View key={slide.text} style={styles.slideStyle}>
                    <Text style={styles.slideText}>{slide.text}</Text>
                    {this.renderFirstSlide(index)}
                    {this.renderLastSlide(index)}
                </View>
            );
        });
    }

    render() {
        return (
            <ScrollView
                horizontal
                style={{ height: "100%" }}
                pagingEnabled
            >
                {this.renderSlides()}
            </ScrollView>
        );
    }
}

const styles = {
    titleStyle: {
        color: "white"
    },
    buttonStyle: {
        backgroundColor: 'transparent',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20,
        marginTop: 20
    },
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    slideText: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center'
    },
    containerStyle: {
        flex: 1,
        justifyContent: 'center'
    }
};

export default Slides;