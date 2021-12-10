function duplicateMenu() {
    //get all anchor elements from top menu
    let topList = document.querySelectorAll('ul#primaryNavigation li a')

    //create new list items for bottom nav
    let newList = document.createElement('ul')
    
    topList.forEach(menuItem => {
        let newLI = document.createElement('li')
        let newLink = document.createElement('a')
        newLink.setAttribute('href', menuItem.getAttribute('href'))
        //'copy' the text content from uppder menu to botom menu
        let linkText = document.querySelector('ul#primaryNavigation a').textContent
        //append children to make them appear in the DOM
        newLink.textContent = linkText
        newLI.appendChild(newLink)
        newList.appendChild(newLI)
    })
        
        document.querySelector('#smallNavArea').appendChild(newList)
}

duplicateMenu()