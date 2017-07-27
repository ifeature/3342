import React from 'react';
import { Tabs, Tab } from './components';
import { FaceHairIcon } from '../FaceHair/FaceHairIcon';
import { Store } from '../store';

// Preferences component should be created in order to store selected face parts and share this data
// across FacePreview and FaceDashboard components
function FaceDashboard() {
    let input;
    let file;
    let reader;
    function handleFileChange(event) {
        file = input.files[0];
        reader = new FileReader();
        reader.onload = function(event) {
            Store.set(event.target.result);
        };
        reader.readAsDataURL(file);
    }
    return(
        <article className="FaceDashboard">
            <h1>Dashboard</h1>
            <Tabs>
                <Tab label="Face shape" value="faceShape">
                    {/*<FaceHairIcon type={'SHORT'} />*/}
                </Tab>
                <Tab label="Hair" value="faceHair">
                    {/* row content goes here */}
                    <FaceHairIcon type={'SHORT'} />
                    <FaceHairIcon type={'MEDIUM'} />
                </Tab>
            </Tabs>
            <input type="file" name="background" id="background" onChange={handleFileChange} ref={(node) => { input = node;} }/>
        </article>
    );
}

export { FaceDashboard };