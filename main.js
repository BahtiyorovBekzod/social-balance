const baseUrl = "https://apis.socialbalance.uz/"
let obj = null;
const element = document.getElementById("video1");
const element2 = document.getElementById("video2");
async function logMovies() {
    const response = await fetch(baseUrl + "website/videos/");
    const movies = await response.json();
    element.src = movies[0]?.you_tube_link;
    element2.src = movies[1]?.you_tube_link;
}
logMovies();

let link1 = document.getElementById("link1");
let link2 = document.getElementById("link2");
let link3 = document.getElementById("link3");
let link4 = document.getElementById("link4");
let link5 = document.getElementById("link5");
let link6 = document.getElementById("link6");
let link7 = document.getElementById("link7");


async function getLink() {
    const response = await fetch(baseUrl + "website/contacts/");
    const movies = await response.json();
    link1.href = movies[0]?.link;
    link2.href = movies[1]?.link;
    link3.href = "mailto:" + movies[2]?.link;
    link4.href = "tel:" + movies[3]?.link;
    link5.href = movies[4]?.link;
    link6.href = movies[5]?.link;
    link7.innerText = movies[3]?.link
}
getLink();
let input = document.getElementById('input');
let submit = document.getElementById('submit')
async function post() {
    const response = await fetch(baseUrl + "website/feedback/create/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "text": input.value
        })
    });
    const movies = await response.json();
    input.value = ""
}
submit.addEventListener("click", () => {
    post()
})

