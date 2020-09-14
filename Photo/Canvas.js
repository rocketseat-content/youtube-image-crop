export default function(Photo) {
    // Canvas
    Photo.canvas = document.createElement('canvas')
    Photo.ctx = Photo.canvas.getContext('2d')
}