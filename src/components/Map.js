import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.80995540879779,
      lng: -79.7295995571333
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys='AIzaSyDiY9-BJB7_E43FgwrxxsoVQOsqhfkqNOY'
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={43.80995540879779}
            lng={-79.7295995571333}
            text="Ontario Renovations"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;