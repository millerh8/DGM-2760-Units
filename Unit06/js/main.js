document.querySelector('#create-story').onclick = () => {
    const nouns = document.querySelector('#noun').value
    nounsArr = nouns.split(/\s+/); //.replace(/\s+/," ").split(" ")
    const adjectives = document.querySelector('#adjective').value
    adjArr = adjectives.split(/\s+/);
    const verbs = document.querySelector('#verb').value
    verbsArr = verbs.split(/\s+/);

    let story = `There once was a ${nounsArr[0]} that lived in a ${adjArr[0]} house with their friends: Rick, ${nounsArr[1]}, and James. 
    One day, while they ${verbsArr[0]}ed in their yard, they discovered a rare ${nounsArr[2]}. It began to ${verbsArr[1]} 
    ${adjArr[1]} colors and grew into a giant plant. They all wanted to ${verbsArr[2]} the plant, except for James, he was feeling too ${adjArr[2]}. 
    To this day James has not seen his friends.`

    document.querySelector('#story').innerText = story;
}