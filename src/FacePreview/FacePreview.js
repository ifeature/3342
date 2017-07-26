import React from 'react';
import PropTypes from 'prop-types';

import { FaceBuilder } from '../builders/FaceBuilder';
import { FaceBackground } from '../FaceBackground';
import { FaceShape } from '../FaceShape';
import { FaceHair } from '../FaceHair';
import {FACE_SHAPE, FACE_HAIR} from '../constants';

function buildFace(builder) {
    builder.buildFace();
    builder.addFaceShape();
    builder.addFaceHair();
    return builder.getFace();
}

/**
 * Director
 */
function FacePreview({ config }) {
    const builder = new FaceBuilder(Object.assign({}, FacePreview.defaultProps, config));
    const { data: { faceShape, faceHair } } = buildFace(builder);

    return (
        <article className="FacePreview">
            <svg id="svga-svgcanvas-elements-faceshape-0" xmlns="http://www.w3.org/2000/svg" version="1.1"
                 xlinkHref="http://www.w3.org/1999/xlink"
                 style={{
                     position: 'relative',
                     overflow: 'hidden',
                     left: 0,
                     top: 0
                 }} className="svga-svg" viewBox="0 0 200 200" preserveAspectRatio="xMinYMin meet">
                <FaceBackground />
                <FaceShape type={faceShape} />
                <FaceHair type={faceHair} />
            </svg>
        </article>
    );
}

FacePreview.propTypes = {
    config: PropTypes.shape({
        faceShape: PropTypes.oneOf([
            FACE_SHAPE.OVAL,
            FACE_SHAPE.TRIANGLE
        ]),
        faceHair: PropTypes.oneOf([
            FACE_HAIR.SHORT,
            FACE_HAIR.MEDIUM
        ])
    })
};

FacePreview.defaultProps = {
    faceShape: FACE_SHAPE.OVAL,
    faceHair: FACE_HAIR.SHORT
};

export {FacePreview};
