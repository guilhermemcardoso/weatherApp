import React, {Component} from 'react';
import Home from './src/component/screen/Home/Home';
import Details from './src/component/screen/Details/Details';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
    {
      Home: Home,
      Details: Details
    },
    {
      initialRouteName: "Home",
        headerMode: "none"
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {

  render() {
    return (
      <AppContainer/>
    );
  }
}

