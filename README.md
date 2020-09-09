# Be The Hero
> Be The Hero aims to connect NGOs (non-governmental organizations) to people willing to help through monetary values. This project was developed during the oministack 11.0 week provided by @ Rocketseat, where we developed a web and mobile application using a stack based on the javascript language.

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Demo](#demo)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
The application consists of a web and a mobile hybrid application (Android / IOS). NGOs use the web application to register and expose their cases, that is, a description for each exposed case as well as the amount needed to resolve it. People willing to help make use of the mobile application to view the cases and contact the NGOs to make donations.

## Screenshots
<table>
  <tr>
    <th width="100%">Web Aplication</th>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/jossiasmupandza/be-the-hero/blob/develop/screenshots/bethehero-web.gif" />
    </td>
  </tr>
</table>
<br/>
<table>
  <tr>
    <th colspan="3">Mobile Aplication</th>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/jossiasmupandza/be-the-hero/blob/develop/screenshots/bethehero-mobile-splash.png" />
    </td>
    <td>
      <img src="https://github.com/jossiasmupandza/be-the-hero/blob/develop/screenshots/bethehero-mobile-incidents.png" />
    </td>
    <td>
      <img src="https://github.com/jossiasmupandza/be-the-hero/blob/develop/screenshots/bethehero-mobile-details.png" />
    </td>
  </tr>
</table>
<img src="https://github.com/jossiasmupandza/be-the-hero/blob/develop/screenshots/bethehero-logo.png" />

## Technologies
**Data base**:
* SQLite 3 - version 4.1.1
* Knex query builder - version 0.20.13

**Backend**, is a resful API built with:
* Express framework - version 4.17.1
* Cors - version 2.8.5
* celebrate with joi, for route validation - version 12.2.0
* cross-env - 7.0.2
* nodemon as a dev depedency for fast reloads - version 2.0.2

**Web aplication**:
* React framework - version 16.13.1
* Axios for https requests - version 0.19.2
* Others

**Mobile aplication**:
* React Native - version 38.0.2
* Expo - version 38.0.8
* Others

**Automated unit and integration tests**:
* Jest - version 26.4.2
* Supertest fot https request in test enviroment - version 4.0.2

## Setup
To run this project install <a href="https://nodejs.org/en/">Node.js</a> on your machine, version 12.15.0 or higher. after insttal fallow the steps (On root of the project, using a terminal of your choice):

### 1. Start the api server
```python
cd backend
npm i
npm start
```

### 2. Start the website server
```python
cd frontend
npm i
npm start
```
### 3. Run the mobile aplication
**On Android**:
1.install <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt">Expo Apk</a> from play store on your mobile device.

2.On root of the project, using a terminal of your choice:
```python
npm install -g expo-cli
cd mobile
npm i
npm start
```
3. Open expo app and scan the QR Code shown on your browser (note: you must have internet connection).

## Demo
Website: [betheherojm.netlify.app](https://betheherojm.netlify.app/) </br>
Dowloand Apk: [betheherojm.apk](https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40jossiasmupandza/be-the-hero-c7053165295c46daa23f826794862618-signed.apk)

## Features
List of features 
* Registration of NGOs
* NGOs authentication
* NGOs can add cases with a detailed description and required value
* View list of cases
* Contact NGOs by Whatsapp
* Contact NGOs by email

## Status
Project is: _finished_, all the expected features were covered.

## Inspiration
This project was developed during the oministack 11.0 week provided by [Rocketseat](https://rocketseat.com.br/). 
**Instructor: [Diego Fernandes](https://github.com/diego3g) | CTO Rocketseat*

## Contact
Created by [@jossiasmupandza](https://github.com/jossiasmupandza) - feel free to contact me!
