import React from 'react';

const DEFAULT_COLOUR = '#ecf0f1';
const DEFAULT_IMAGE = 'https://c.tadst.com/gfx/750w/sunrise-sunset-sun-calculator.jpg?1';

const FILL_TYPE = {
    IMAGE: 'IMAGE',
    COLOR: 'COLOR'
};

function FaceBackground() {
    return (
        <g id="svga-group-backs-single" className="">
            <defs>
                <pattern id="attachedImage" height = "100%" width = "100%"
                         patternContentUnits = "objectBoundingBox">
                    <image xlinkHref="https://c.tadst.com/gfx/750w/sunrise-sunset-sun-calculator.jpg?1" preserveAspectRatio = "none"
                           width = "1" height = "1" />
                </pattern>
            </defs>
            <path id="SvgjsPath2877" d="M225 225H-25V-25h250V225z" data-colored="true" data-filltype="tone"
                  data-stroketype="none" fill="url(#attachedImage)" strokeWidth="none" opacity="1"></path>
        </g>
    );
}

export {FaceBackground};