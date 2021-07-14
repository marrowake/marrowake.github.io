const AccelerationXElement = document.getElementById("acceleration-x");
const AccelerationYElement = document.getElementById("acceleration-y");
const AccelerationZElement = document.getElementById("acceleration-z");
const AccelerationMaxElement = document.getElementById("acceleration-max");

function onMotionChange(e) {
    const acceleration = e.accelerationIncludingGravity;
    let x, y, z;
    [x, y, z] = [acceleration.x, acceleration.y, acceleration.z];
    const oldMax = parseFloat(AccelerationMaxElement.innerText);
    const maxValue = Math.max(x, y, z, oldMax);
    [
        AccelerationXElement.innerText,
        AccelerationYElement.innerText,
        AccelerationZElement.innerText,
        AccelerationMaxElement.innerText
    ] = [x.toFixed(2), y.toFixed(2), z.toFixed(2), maxValue.toFixed(2)];
}
window.addEventListener('devicemotion', onMotionChange, true);