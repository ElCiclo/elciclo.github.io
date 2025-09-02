window.onload= () =>{
    let icons = document.getElementsByClassName("cicloIcon");

        for (let icon of icons) {
            icon.onclick = () => {
                window.location.href = "../index.html";
            }
        }
}