function showClock() {
    const date = new Date();
    // const hour = date.getHours();
    // const minute = date.getMinutes();
    // const seconds = date.getSeconds();

    const hour = `${date.getHours()}`.padStart(2, '0');
    const minute = `${date.getMinutes()}`.padStart(2, '0');
    const seconds = `${date.getSeconds()}`.padStart(2, '0');

    document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + seconds;

}
setInterval(showClock, 1000)
// Dom manupulation 
// polling