
let button = document.getElementById("submit");
button.addEventListener("click", volumeOfSphere);
function volumeOfSphere(event)
{
    let form = document.getElementById("MyForm");
    let volumeField = document.getElementById("volume");
    let radius = form.radius.value, volume =(Math.PI * 1.3333) * Math.pow(radius, 3).toFixed(2);
    let roundedVolume = volume.toFixed(2);
    volumeField.value ="≈"+ roundedVolume;

    event.preventDefault();
};
