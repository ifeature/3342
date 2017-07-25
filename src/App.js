import React, { Component } from 'react';
import { FACE_SHAPE, FACE_HAIR } from './constants/index';
import { FacePreview } from './FacePreview/FacePreview';

import './App.css';

const config = {
    faceShape: FACE_SHAPE.TRIANGLE,
    faceHair: FACE_HAIR.MEDIUM
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App__FacePreview">
                    <FacePreview config={config} />
                </div>
                <div className="App__FaceDashboard">

                </div>
            </div>
        );
    }
}

export default App;
