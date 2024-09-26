axios.get("like.php")
.then(function(response) {
    element.innerHTML = response.data.value
});

const like = document.querySelector('#like');
document.body.appendChild(like);

