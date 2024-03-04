const conter = document.querySelector(".conter");

async function updateCounter(){
    let response = await fetch("https://z2fhfwdp27.execute-api.ap-southeast-2.amazonaws.com/test/views")
    let data = await response.json();
    counter.innerHTML = data;
}

updateCounter();

