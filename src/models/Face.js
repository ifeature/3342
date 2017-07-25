class Face {
    constructor() {
        this.data = {};
    }

    setFaceShape(type) {
        this.data.faceShape = type;
    }

    setFaceHair(type) {
        this.data.faceHair = type;
    }
}

export { Face };