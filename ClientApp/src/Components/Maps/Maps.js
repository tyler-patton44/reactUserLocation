import React, { Component } from 'react';
import './Maps.css';
import ReactMapGL, {Marker} from 'react-map-gl';


const TOKEN = 'pk.eyJ1IjoidHlsZXJwYXR0b240NCIsImEiOiJjanNmN3Y1cmUwenY4NDN0MG1xdWRyMmh5In0.EaCbBLrw7cZ2XVG03sM9Zw';
const mapStyle = {
  display: 'block',
  margin: '0 auto'
};

class Maps extends Component {
  constructor(props){
    super(props);
    this.state = {
      viewport: {
        width: 800,
        height: 500,
        latitude: undefined,
        longitude: undefined,
        zoom: 15
      },
      marker1: {
        latitude: undefined,
        longitude: undefined,
      }
    };
    this.watchPosition();
  }
  watchPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.foundLocation(position.coords.latitude, position.coords.longitude);
      });
    }
    else{
      alert("Need location to use app");
    }
  }
  foundLocation(lat, long){
    console.log(lat, long);
    this.setState({viewport: {width: 800, height: 500, latitude: lat, longitude: long, zoom: 15}});
    this.setState({marker1: {latitude: lat, longitude: long}});
    console.log(this.state);
  }


  render() {
    return (
      <div className="movi">
        <h1 style = {{
          backgroundColor: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '5px',
          marginTop: '0',
          textAlign: 'center'
        }}>
        TyDye Maps
        </h1>
        {this.state.viewport.latitude !== undefined && this.state.marker1.latitude !== undefined &&
        <ReactMapGL
        style = {mapStyle}
        mapboxApiAccessToken = {TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}>

          <Marker 
          longitude={this.state.marker1.longitude}
          latitude={this.state.marker1.latitude}
          offsetTop={-20}
          offsetLeft={-10}>
            <i className="fas fa-child"></i>
          </Marker>

        </ReactMapGL>}
      </div>
    );
  }
}

export default Maps;
