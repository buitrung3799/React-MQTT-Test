# REACT MQTT TEST APP

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the MQTTJS and TS template.

## How to install

- Using 'yarn' command to install all dependencies
- Using 'yarn start' to start app

## How i built this app

Because I don't have NodeJS server, I created 2 custom hooks to connect to MQTT Broker and auto publish model , then for each component , i created side effect to subscribe and get message automatically and display them to UI

## How to use app

After entering Dashboard or Device screen:

- Wait for the connection to the MQTT broker to be established,
- 2 seconds later the first model will be published and then the component will subscribe (with successful subscription message displayed)
- Information will be displayed to the UI. Updates will take place every 2 seconds
