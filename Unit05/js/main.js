//Create an array for tree list
const trees = ['oak', 'Pine', 'aspen', 'Bald Cypress'];
let errorElement = document.querySelector('#error');
const displayResults = document.querySelector('#display-results');

//Display list of trees in results div
const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`;
    })
    displayResults.innerHTML = `${treeList}`
}
listTrees()

//add redwood to end
document.querySelector('#add-redwood').onclick = () => {
    trees.push('redwood')
    listTrees()
    errorElement.textContnet = ''
}

//add a pear to start
document.querySelector('#add-pear').onclick = () => {
    trees.unshift('pear')
    listTrees()
}

//remove first item
document.querySelector('#remove-tree1').onclick = () => {
    if (trees.length > 0) {
        trees.shift()
        listTrees()
    } else {
        errorElement.textContent = 'Cannot remove first tree from an empty list'
    }
}

//remove second item
document.querySelector('#remove-tree2').onclick = () => {
    let pos = 1
    if (trees.length > 1) {
        trees.splice(pos, 1)
        listTrees()
    } else {
        errorElement.textContent = 'Cannot remove second tree from an empty list'
    }
}

//remove last item
document.querySelector('#remove-tree-last').onclick = () => {
    if (trees.length > 0) {
        trees.pop()
        listTrees()
    } else {
        errorElement.textContent = 'Cannot remove last tree from an empty list'
    }
}

//sort trees A-Z
document.querySelector('#sort-trees').onclick = () => {
    trees.sort()
    listTrees()
}

//set all array items to lowercase
document.querySelector('#lowercase-trees').onclick = () => {
    trees.map(v => v.toLowerCase())
    listTrees()
}

//get name of tree 3, error if none
document.querySelector('#tree-name3').onclick = () => {
    let tree3 = trees[2]
    if (trees.length >= 3){
        errorElement.textContent = tree3
    } else {
        errorElement.textContent = 'Cannot display third tree, the list is too short.'
    }
    listTrees()
}

//get name of tree 4, error if none
document.querySelector('#tree-name4').onclick = () => {
    let tree4 = trees[3]
    if (trees.length >= 4){
        errorElement.textContent = tree4
    } else {
        errorElement.textContent = 'Cannot display fourth tree, the list is too short.'
    }
    listTrees()
}