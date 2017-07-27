import React from 'react';
import { FACE_HAIR } from './constants';
import { HAIR_TYPES } from './FaceHairShapes';

function renderFaceHairIcon(type) {
    return HAIR_TYPES.find(hair => hair.type === type).icon;
}

function FaceHairIcon({ type }) {
    const [faceHairIcon] = renderFaceHairIcon(type);
    return (
        <article className="FaceHairIcon">
            <svg id="svga-svgcanvas-elements-faceshape-0" xmlns="http://www.w3.org/2000/svg" version="1.1"
                 xlink="http://www.w3.org/1999/xlink"
                 style={{
                     position: 'relative',
                     overflow: 'hidden',
                     left: 0,
                     top: 0
                 }}
                 className="svga-svg" viewBox="0 0 200 200" preserveAspectRatio="xMinYMin meet">
                { faceHairIcon }
            </svg>
        </article>
    );
}

FaceHairIcon.defaultProps = {
    type: FACE_HAIR.SHORT
};

export { FaceHairIcon };