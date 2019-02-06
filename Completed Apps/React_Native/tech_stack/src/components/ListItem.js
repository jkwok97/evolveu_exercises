import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut();
    }

    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection styles={styles.cardSelectedStyle}>
                    <Text style={styles.descriptionStyle}>{library.item.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle, cardSelectedStyle } = styles;
        const { id, title } = this.props.library.item;

        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>  
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    descriptionStyle: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        color: '#1a6071'
    },
    cardSelectedStyle: {
        color: '#1a6071'
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id;
    return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);