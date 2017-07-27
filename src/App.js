import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FACE_SHAPE, FACE_HAIR } from './constants/index';
import { FacePreview } from './FacePreview';
import { FaceDashboard } from './FaceDashboard';
import { get, register} from './di';
import { Store } from './store';
import './App.css';

const config = {
    faceShape: FACE_SHAPE.TRIANGLE,
    faceHair: FACE_HAIR.MEDIUM
};

register('faceShape', config.faceShape);
register('faceHair', config.faceHair);

window.get = get;

class App extends Component {
    componentDidMount() {
        Store.onChange(this.forceUpdate.bind(this));
    }
    getChildContext() {
        return {
            get,
            register
        };
    }
    render() {
        return (
            <div className="App">
                <div className="App__FacePreview">
                    <FacePreview />
                </div>
                <div className="App__FaceDashboard">
                    <FaceDashboard />
                </div>
            </div>
        );
    }
}

App.childContextTypes = {
  get: PropTypes.func,
  register: PropTypes.func
};

export default App;
