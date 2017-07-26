import React from 'react';
import { Tabs, Tab } from './components';

function FaceDashboard() {
    return(
        <article className="FaceDashboard">
            <h1>Dashboard</h1>
            <Tabs>
                <Tab label="Face shape">
                    Tab content - Face shape
                </Tab>
                <Tab label="Hair">
                    Tab content - Hair
                </Tab>
            </Tabs>
        </article>
    );
}

export { FaceDashboard };