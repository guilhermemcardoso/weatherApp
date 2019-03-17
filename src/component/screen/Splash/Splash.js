import React, { Component } from 'react';
import {View, Text} from 'react-native';
import {getWeatherInfoById} from '../../../service/weatherService';

export class Splash extends Component {

    componentWillMount() {

        getWeatherInfoById(2172797)
            .then(function (response) {

            })
            .catch(function (error) {

            })
            .then(function () {

            });
    }

    componentDidMount() {

    }

    render() {

        return (
            <View>
                <Text>Splash Screen</Text>
            </View>
        );
    }
}