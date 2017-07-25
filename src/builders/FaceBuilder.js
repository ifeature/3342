import { Face } from '../models/Face';

class FaceBuilder {
    constructor(config) {
        this.config = config;
    }

    buildFace() {
        this.face = new Face();
    }

    addFaceShape() {
        this.face.setFaceShape(this.config.faceShape);
    }

    addFaceHair() {
        this.face.setFaceHair(this.config.faceHair);
    }

    getFace() {
        return this.face;
    }
}

export { FaceBuilder };