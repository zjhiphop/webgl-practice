attribute vec4 a_position;
presision mediump float;

void main() {
    gl_Position = a_position;
    gl_FragColor = vec4(1,0,0.5,1);
}