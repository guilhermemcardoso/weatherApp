import React, { Component } from 'react';
import {View, Image, Text, ProgressBarAndroid, Button} from 'react-native';
import style from './WeatherInfoStyle';

export class WeatherInfo extends Component {

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {

        if(this.props.showProgress) {
            return (
                <View style={style.progressContainer}>
                    <ProgressBarAndroid style={style.progressBar} styleAttr="Horizontal" color="#2196F3" />
                </View>
            );
        }

        if(!this.props.showInfo) {
            return null;
        }

        return (
            <View style={style.container}>
                <View style={style.titleContainer}>
                    <Text style={style.cityName}>{this.props.cityName}</Text>
                </View>

                <View style={style.currentInfoContainer}>
                        <Text style={style.currentWeather}>{Math.floor(this.props.temperature)}° C</Text>
                        <Image
                            style={style.icon}
                            source={require('../../../res/assets/weatherIcons/' + '10d' + '.png')}
                        />
                </View>

                <View style={style.minMaxContainer}>
                    <Text style={style.minMax}>Máx: {Math.floor(this.props.maxTemp)}° C</Text>
                    <Text style={style.minMax}>Min: {Math.floor(this.props.minTemp)}° C</Text>
                </View>

                <View style={style.bottomContainer}>
                    <Button
                        style={style.button}
                        onPress={() => {this.props.onMinMaxPress()}}
                        title="Mostrar Min/Máx"
                        color="#8aacc8"
                    />
                </View>
            </View>
        );
    }
}