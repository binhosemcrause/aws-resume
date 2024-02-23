const conter = document.querySelector(".conter");
async function updateCounter(){
    let response = await fetch("https://i432rqyay7b6o7dvxmmh5u2ede0jxytv.lambda-url.ap-southeast-2.on.aws/")
    let data = await response.json();
    counter.innerHTML = data;
}

updateCounter();

