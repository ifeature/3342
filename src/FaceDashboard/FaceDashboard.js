import React from 'react';
import { Tabs, Tab } from './components';
import { FaceHairIcon } from '../FaceHair/FaceHairIcon';

// Preferences component should be created in order to store selected face parts and share this data
// across FacePreview and FaceDashboard components
function FaceDashboard() {
    return(
        <article className="FaceDashboard">
            <h1>Dashboard</h1>
            <Tabs>
                <Tab label="Face shape">
                    Tab content - Face shape
                </Tab>
                <Tab label="Hair">
                    {/* row content goes here */}
                    <FaceHairIcon type={'SHORT'} />
                    <FaceHairIcon type={'MEDIUM'} />
                </Tab>
            </Tabs>
        </article>
    );
}

export { FaceDashboard };