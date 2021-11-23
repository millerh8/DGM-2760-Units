document.querySelector('#create-story').onclick = () => {
const nouns = document.querySelector('#text1').value
nounsArr = nouns.split(/\s+/); //.replace(/\s+/," ").split(" ")
console.log(nounsArr)
}