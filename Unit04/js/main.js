function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  

  let fate = getRandomIntInclusive(1,5)

  function getMonthName(month) {
      let name 
      switch (month) {
            case 1:
            name = "January"
            break;
            case 2:
            name = "February"
            break;
            case 3:
            name = "March"
            break;
            case 4:
            name = "April"
            break;
            case 5:
            name = "May"
              break;
              case 6:
            name = "June"
              break;
              case 7:
            name = "July"
              break;
              case 8:
            name = "August"
              break;
              case 9:
            name = "September"
              break;
              case 10:
            name = "October"
              break;
              case 11:
            name = "November"
              break;
              case 12:
            name = "December"
              break;
          default:
              name = "Not a month"
              break;
      }
      return name
  }

  let fortuneMessage = getFortune(fate)
  function getFortune(fate) {
    let message
    switch (fate) {
        case 1:
        message = 'meet a person who will change your life.'
        break;
        case 2:
        message = 'be called to restore the jedi order!'
        break;
        case 3:
        message = 'eat the most delicious dessert of your life.'
        break;
        case 4:
        message = 'stumble upon a massive amount of money.'
        break;
        case 5:
        message = 'stub your pinky toe two times.'
        break;
    
        default:
            message = 'an error occured'
            break;
    }
    return message
  }

  let month = getRandomIntInclusive(1,12)
  let day = getRandomIntInclusive(1,30)
  const monthName = getMonthName(month)
  
  const fortuneTold = `On ${monthName} ${day}, you will ${fortuneMessage}`

document.querySelector('#fortune').innerText = fortuneTold

  console.log(monthName)