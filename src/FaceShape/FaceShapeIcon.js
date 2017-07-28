import React from 'react';
import PropTypes from 'prop-types';
import { FACE_SHAPE } from './constants';
import { FACE_SHAPES } from './FaceShapes';

function renderFaceShapeIcon(type) {
    return FACE_SHAPES.find(face => face.type === type).icon;
}

function FaceShapeIcon({ type, active, onClick }) {
    const [faceShapeIcon] = renderFaceShapeIcon(type);
    return (
        <article className="FaceShapeIcon" onClick={onClick} style={{border: active ? '2px solid black' : 'none'}}>
            <svg id="svga-svgcanvas-elements-faceshape-0" xmlns="http://www.w3.org/2000/svg" version="1.1"
                 xlinkHref="http://www.w3.org/1999/xlink"
                 style={{
                     position: 'relative',
                     overflow: 'hidden',
                     left: 0,
                     top: 0
                 }}
                 className="svga-svg" viewBox="0 0 200 200" preserveAspectRatio="xMinYMin meet">
                { faceShapeIcon }
            </svg>
        </article>
    );
}

FaceShapeIcon.defaultProps = {
    type: FACE_SHAPE.OVAL
};

FaceShapeIcon.propTypes = {
    onClick: PropTypes.func
};

export { FaceShapeIcon };