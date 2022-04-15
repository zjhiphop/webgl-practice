"use strict"

var gSquareVertexBuffer = null;

function initSqure() {
    // First: define the vertices for a square

    var verticesOfSquare = [

        0.5, 0.5, 0.0,

        -0.5, 0.5, 0.0,

        0.5, -0.5, 0.0,

        -0.5, -0.5, 0.0

    ];

    gSquareVertexBuffer = gGL.createBuffer()


    gGL.bindBuffer(gGL.ARRAY_BUFFER, gSquareVertexBuffer);

    // Step C: Loads verticesOfSquare into the vertexBuffer
    gGL.bufferData(gGL.ARRAY_BUFFER, new Float32Array(verticesOfSquare), gGL.STATIC_DRAW);


}

initSqure()