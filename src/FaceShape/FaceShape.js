import React from 'react';
import { FACE_SHAPE } from './constants';
import { FACE_SHAPES } from './FaceShapes';

function renderFaceShape(type) {
    return FACE_SHAPES.find(face => face.type === type).DOM;
}

function FaceShape({ type }) {
    const [faceShape] = renderFaceShape(type);
    return faceShape;
}

FaceShape.defaultProps = {
    type: FACE_SHAPE.OVAL
};

export { FaceShape };