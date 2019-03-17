import React, { Component } from 'react';
import {Text, View, Button} from "react-native";

export default class Details extends Component {

    state = {
        showProgress: false,
        showWeather: false,
        currentCity: '',
        currentTemperature: 0,
        minTemp: 0,
        maxTemp: 0,
        humidity: 0,
        icon: ''
    };

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {

        return (
            <View>
                <Text>Texto</Text>
                <Button title="TITULO" onPress={() => {this.props.navigation.goBack()}}/>
            </View>
        );
    }
}