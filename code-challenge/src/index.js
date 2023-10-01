// Your code here

///Fetch the json file
function fetchAnimal(){
    fetch('http://localhost:3000/characters')
    .then(response => response.json())
    .then(characters => characters.forEach(animal => renderCharacterName(animal)))
} 
// fetch character names and display them on the dom
function renderCharacterName(animal){
// create a span element to hold the character name
    CharacterName = document.createElement('span')
    CharacterName.innerHTML = `${animal.name}`
// grab the character bar and assign a child to it    
    document.getElementById('character-bar').appendChild(CharacterName)

 //grab the detailed info from the body   
    detail = document.getElementById('detailed-info')
 // add a click listener that listens to the click on the character name    
    detail += CharacterName.addEventListener('click',()=>{
        p = document.getElementById('name') 
        p.innerHTML= `${animal.name}`
        let imgImage = document.getElementById('image')
        imgImage.src =`${animal.image}`
        console.log(imgImage.src)
        vote = document.getElementById('vote-count')
        vote.innerHTML = `${animal.votes}`
    })
    
   
}
/// create a submit fUnction on the submit form
const form = document.getElementById("votes-form")
    form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const votesForm = e.target;
    const totalVotes = document.getElementById("vote-count")
    totalVotes.innerHTML = parseInt(votesForm.votes.value) + parseInt(totalVotes.innerHTML);
})
///reset the vote count
document.getElementById('reset-btn').addEventListener('click',()=>{
    form.reset()
    document.getElementById("vote-count").innerHTML = 0;
})
fetchAnimal()