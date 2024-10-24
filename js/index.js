document.addEventListener("DOMContentLoaded", function() {
    const textDiv = document.getElementById("cmd");
    const originalHTML = textDiv.innerHTML;
    textDiv.innerHTML = "";
    let index = 0;

    const interval = setInterval(() => {
        if (index < originalHTML.length) {
            textDiv.innerHTML += originalHTML[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, 20);
});