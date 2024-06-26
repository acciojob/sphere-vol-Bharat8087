function volume_sphere() {
    let radius = parseFloat(document.getElementById("radius").value);

    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = 'NaN';
    } else {
        let volume = (4/3) * Math.PI * Math.pow(radius, 3);
        volume = volume.toFixed(4);
        document.getElementById("volume").value = volume;
    }
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = function(event) {
        event.preventDefault();
        volume_sphere();
    };
};

