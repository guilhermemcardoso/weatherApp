import React, { Component } from 'react';
import {View, Button, Text, StatusBar, Alert} from 'react-native';
import style from './HomeStyle';
import {WeatherInfo} from '../../general/WeatherInfo/WeatherInfo';
import {getWeatherInfoById} from '../../../service/weatherService';

export default class Home extends Component {

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

    updateWeatherInfo = (data) => {

        this.setState({
            showWeather: true,
            showProgress: false,
            currentCity: data.name,
            currentTemperature: data.main.temp,
            minTemp: data.main.temp_min,
            maxTemp: data.main.temp_max,
            humidity: data.main.humidity,
            icon: data.weather[0].icon
        });
    };

    onPressCityButton = (cityId) => {

        let self = this;
        this.setState({
            showProgress: true
        });

        getWeatherInfoById(cityId)
            .then(function (response) {

                self.updateWeatherInfo(response.data);
            })
            .catch(function (error) {

                if(error.length > 0) {
                    Alert.alert("ERRO", JSON.stringify(error));
                    self.setState({
                        showProgressBar: true
                    });
                }

            });
    };

    onPressMinMaxButton = () => {
        console.log("CLICOU");
        this.props.navigation.navigate('Details');
    };

    render() {

        return (
            <View style={style.screen}>
                <StatusBar style={style.statusBar} />
                <View style={style.titleContainer}>
                    <Text style={style.title}>Weather App</Text>
                </View>
                <View style={style.buttonContainer}>
                    <Button
                        style={style.button}
                        onPress={() => {this.onPressCityButton(3448439)}}
                        title="São Paulo"
                        color="#8aacc8"
                    />
                    <Button
                        style={style.button}
                        onPress={() => {this.onPressCityButton(2643743)}}
                        title="Londres"
                        color="#8aacc8"
                    />
                    <Button
                        style={style.button}
                        onPress={() => {this.onPressCityButton(6359304)}}
                        title="Madri"
                        color="#8aacc8"
                    />
                </View>
                <View style={style.hintContainer}>
                    <Text style={style.hint}>Selecione uma das cidades para visualizar a previsão do tempo</Text>
                </View>
                <View style={style.contentContainer}>
                    <WeatherInfo
                        cityName={this.state.currentCity}
                        temperature={this.state.currentTemperature}
                        minTemp={this.state.minTemp}
                        maxTemp={this.state.maxTemp}
                        humidity={this.state.humidity}
                        icon={this.state.icon}
                        onMinMaxPress={this.onPressMinMaxButton}
                        showProgress={this.state.showProgress}
                        showInfo={this.state.showWeather} />
                </View>
            </View>
        );
    }
}