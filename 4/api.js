var name1 = document.getElementById("getname")
var btn = document.querySelector(".submit")
var age = document.getElementById("age1")

btn.addEventListener('click', function(name){
fetch('https://api.agify.io/?name='+name1.value)
.then(response => response.json())
.then(data => {
    console.log(data)
    var agevalue = data['age'];
    console.log(agevalue)
    age.innerHTML = `${agevalue}`
})})
