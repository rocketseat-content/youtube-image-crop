export default function(Photo) {
    Photo.photoPreview = document.getElementById('photo-preview')
    
    Photo.preview = function() {
        Photo.photoPreview.src = Photo.canvas.toDataURL()
    }
}