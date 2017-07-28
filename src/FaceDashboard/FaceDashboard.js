import React from 'react';
import { Tabs, Tab } from './components';
import { FaceHairIcon } from '../FaceHair/FaceHairIcon';
import { FaceShapeIcon } from '../FaceShape/FaceShapeIcon';
import { Store } from '../store';

// Preferences component should be created in order to store selected face parts and share this data
// across FacePreview and FaceDashboard components
let input;
let file;
let reader;
let download;
let link;


class FaceDashboard extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleImageSave = this.handleImageSave.bind(this);
    }

    handleFileChange(event) {
        file = input.files[0];
        reader = new FileReader();
        reader.onload = function(event) {
            Store.set(event.target.result);
        };
        reader.readAsDataURL(file);
    }

    handleImageSave() {
        const s = new XMLSerializer();
        const svg = document.querySelector('svg');
        const svgData = s.serializeToString(svg);

        const canvas = document.createElement( "canvas" );
        const ctx = canvas.getContext('2d');

        const img = document.createElement('img');

        img.setAttribute( "src", "data:image/svg+xml;base64," + btoa( svgData ) );

        img.onload = function() {
            ctx.drawImage(img, 0, 0);

            download = canvas.toDataURL('image/png');
            link.href = download;
        };
    }

    componentDidMount() {
        this.handleImageSave();
    }

    componentWillReceiveProps() {
        this.handleImageSave();
    }

    render() {
        return(
            <article className="FaceDashboard">
                <h1>Dashboard</h1>
                <Tabs>
                    <Tab label="Face shape" value="faceShape">
                        <FaceShapeIcon type={'OVAL'} />
                        <FaceShapeIcon type={'TRIANGLE'} />
                    </Tab>
                    <Tab label="Hair" value="faceHair">
                        {/* row content goes here */}
                        <FaceHairIcon type={'SHORT'} />
                        <FaceHairIcon type={'MEDIUM'} />
                    </Tab>
                </Tabs>
                <input type="file" name="background" id="background" onChange={this.handleFileChange} ref={(node) => { input = node;} }/>
                <a href={download} download ref={(node) => { link = node; }}>Download</a>
            </article>
        );
    }
}

export { FaceDashboard };