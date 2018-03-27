class Dog {
  constructor(id, name, happiness, hunger, thirst, poopy, pipi, user_id){
    this.id = id
    this.name = name
    this.happiness = happiness
    this.hunger = hunger
    this.thirst = thirst
    this.poopy = poopy
    this.pipi = pipi
    this.user_id = user_id
  }


  static createDog(userId, dogName) {
    let dogObject = {name: dogName, user_id: userId}
    fetch(`${base_url}/users/${userId}/dogs`, {
      method: 'POST',
      body: JSON.stringify(dogObject),
      headers: {
        "Content-Type": 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {
      let dog = new Dog(json.id, json.name, json.happiness, json.hunger, json.thirst, json.poopy, json.pipi, json.user_id)
      dog.renderOneDog()
    })
  }

  // <div class="dog-option-feed" style="position: absolute; top: 65%; right: 30%">
  //   <button id="feed-dog" style="width: 60px;">Feed</button>
  // </div>
  // <div class="dog-option-pet" style="position: absolute; top: 75%; right: 46%">
  //   <button id="pet-dog" style="width: 60px;">Pet</button>
  // </div>
  // <div class="dog-option-hydrate" style="position: absolute; top: 65%; right: 62%">
  //   <button id="hydrate-dog" style="width: 60px;">Hydrate</button>
  // </div>
  renderOneDog() {
<<<<<<< HEAD
    document.body.innerHTML = `<div id="doggo" style="position: absolute; top: 50%; left: 50%; width: 250px; height: 200px; margin-top: -100px; margin-left: -150px">
      <p class="only-dog-name" style="position: relative; margin: 0px; text-align: center; font-family: 'Press Start 2P', cursive;">${this.name}</p>
      <img class="annoying-dog only-dog" style="position: absolute; top: 50%; left: 50%; margin-top: -60px; margin-left: -100px;" src="https://i.ytimg.com/vi/oUYPdBp4-zg/maxresdefault.jpg" alt="Annoying Dog">
      <button id="pet-dog" style="visibility: visible; position: absolute; top: 100%; left: 50%; margin-left: -16px; margin-top: -25px">Pet</button>
      <button id="feed-dog" style="visibility: visible; position: absolute; top: 50%; margin-top: -5px">Feed</button>
      <button id="hydrate-dog" style="visibility: visible; position: absolute; top: 50%; left: 100%; margin-top: -5px; margin-left: -42px">Feed</button>
=======
    document.body.innerHTML = `<div user_id='${this.id}' id="doggo">
      <p class="only-dog-name" style="position: absolute; top: 50%; right: 50%; text-align: center; font-family: 'Press Start 2P', cursive;">${this.name}</p>
        <img class="annoying-dog only-dog" style="position: absolute; top: 65%; right: 50%;" src="https://i.ytimg.com/vi/oUYPdBp4-zg/maxresdefault.jpg" alt="Annoying Dog">
>>>>>>> 8cb2d117c51522caf44818aa7d59cf315bf42c47
    </div>`
    this.renderDogStats()
  }

  renderDogStats() {
    this.renderDogHappiness()
    this.renderDogHunger()
    this.renderDogThirst()
    this.renderDogPoopy()
    this.renderDogPipi()
    let annoyingDog = document.querySelector('.annoying-dog.only-dog')

<<<<<<< HEAD
    // annoyingDog.addEventListener('click', function(event) {
    //   let div = document.createElement('div')
    //   div.innerHTML = `<ul>
    //     <li><button type="button" id="pet-dog">Pet</button></li>
    //     <li><button type="button" id="feed-dog">Feed</button></li>
    //     <li><button type="button" id="hydrate-dog">Hydrate</button></li>
    //   </ul>`
    //   // div.querySelectorAll('button')[0].addEventListener('click', function(event){
    //   //
    //   // })
    //   // div.querySelectorAll('button')[1].addEventListener('click')
    //   // div.querySelectorAll('button')[2].addEventListener('click')
    //   document.getElementById('doggo').append(div)
    // })
    // setInterval(this.dogMovingAround, 250)
    setInterval(this.makeLessHappy.bind(this), 1000)
    setInterval(this.makeMoreHungry.bind(this), 1000)
    setInterval(this.makeMoreThirsty.bind(this), 1000)
=======
    annoyingDog.addEventListener('click', function(event) {
      if(document.getElementsByClassName('all-buttons').length === 0) {
        let div = document.createElement('div')
        let userId = event.target.parentElement.getAttribute('user_id')
        div.innerHTML = `<div class="all-buttons"><ul>
          <li><button type="button" user_id='${userId}' id="pet-dog">Pet</button></li>
          <li><button type="button" user_id='${userId}' id="feed-dog">Feed</button></li>
          <li><button type="button" user_id='${userId}' id="hydrate-dog">Hydrate</button></li>
        </div></ul>`
        document.getElementById('doggo').append(div)
        document.getElementById('pet-dog').addEventListener('click', makeMoreHappy)
        document.getElementById('feed-dog').addEventListener('click', makeLessHungry)
        document.getElementById('hydrate-dog').addEventListener('click', makeLessThirsty)
      } else {
        document.getElementsByClassName('all-buttons')[0].parentNode.innerHTML = ""
      }
    })

    const makeMoreHappy = (event) => {
      let userId = event.target.getAttribute('user_id')
      if (this.happiness < 10) {
        this.happiness += 1
        let happyObject = {happiness: this.happiness}
        this.updateDog(happyObject)
        this.renderDogHappinessBars()
      }
    }

    const makeLessHungry = (event) => {
      let userId = event.target.getAttribute('user_id')
      if (this.hunger > 1) {
        this.hunger -= 1
        let hungerObject = {hunger: this.hunger}
        this.updateDog(hungerObject)
        this.renderDogHungerBars()
        this.makeMorePoopy()
      }
    }

    const makeLessThirsty = (event) => {
      let userId = event.target.getAttribute('user_id')
      if(this.thirst > 1) {
        this.thirst -= 1
        let thirstObject = {thirst: this.thirst}
        this.updateDog(thirstObject)
        this.renderDogThirstBars()
        this.makeMorePipi()
      }
    }

    setInterval(this.dogMovingAround, 250)
    setInterval(this.makeLessHappy.bind(this), 20000)
    setInterval(this.makeMoreHungry.bind(this), 20000)
    setInterval(this.makeMoreThirsty.bind(this), 20000)
>>>>>>> 8cb2d117c51522caf44818aa7d59cf315bf42c47
    // setInterval(this.makeMorePoopy.bind(this), 1000)
  }

  renderDogHappiness() {
    document.body.innerHTML += `<div class="dog-1-stats"> <p class="happiness">Happy</p>
      <div class="heart heart-1"></div>
      <div class="heart heart-2"></div>
      <div class="heart heart-3"></div>
      <div class="heart heart-4"></div>
      <div class="heart heart-5"></div>
      <div class="heart heart-6"></div>
      <div class="heart heart-7"></div>
      <div class="heart heart-8"></div>
      <div class="heart heart-9"></div>
      <div class="heart heart-10"></div>
    </div>`

    this.renderDogHappinessBars()
  }

  renderDogHappinessBars() {
    let happinessDivs = document.getElementsByClassName('dog-1-stats')[0]

    for(let i = 1; i <= 10; i ++) {
      if (i <= this.happiness) {
        happinessDivs.children[i].style.transform = "rotate(-45deg)"
      } else {
        happinessDivs.children[i].style.transform = "rotate(-45deg) scale(.4)"
      }
    }
  }

  renderDogHunger() {
    document.body.innerHTML += `<div class="dog-1-stats"> <p class="hunger">Hungry</p>
      <div class="hunger-bar-1"></div>
      <div class="hunger-bar-2"></div>
      <div class="hunger-bar-3"></div>
      <div class="hunger-bar-4"></div>
      <div class="hunger-bar-5"></div>
      <div class="hunger-bar-6"></div>
      <div class="hunger-bar-7"></div>
      <div class="hunger-bar-8"></div>
      <div class="hunger-bar-9"></div>
      <div class="hunger-bar-10"></div>
    </div>`

    this.renderDogHungerBars()
  }

  renderDogHungerBars() {
    let hungerDivs = document.getElementsByClassName('dog-1-stats')[1]
    for(let i = 1; i <= 10; i ++) {
      if (i <= this.hunger) {
        hungerDivs.children[i].style.height = "20px"
      } else {
        hungerDivs.children[i].style.height = "5px"
      }
    }
  }

  renderDogThirst() {

    document.body.innerHTML += `<div class="dog-1-stats"> <p class="thirst">Thirsty</p>
      <div class="thirst-bar-1"></div>
      <div class="thirst-bar-2"></div>
      <div class="thirst-bar-3"></div>
      <div class="thirst-bar-4"></div>
      <div class="thirst-bar-5"></div>
      <div class="thirst-bar-6"></div>
      <div class="thirst-bar-7"></div>
      <div class="thirst-bar-8"></div>
      <div class="thirst-bar-9"></div>
      <div class="thirst-bar-10"></div>
    </div>`

    this.renderDogThirstBars()
  }

  renderDogThirstBars() {
    let thirstDivs = document.getElementsByClassName('dog-1-stats')[2]
    for(let i = 1; i <= 10; i ++) {
      if (i <= this.thirst) {
        thirstDivs.children[i].style.height = "20px"
      } else {
        thirstDivs.children[i].style.height = "5px"
      }
    }
  }

  renderDogPoopy() {

    document.body.innerHTML += `<div class="dog-1-stats"> <p class="poopy">Poopy</p>
      <div class="poopy-bar-1"></div>
      <div class="poopy-bar-2"></div>
      <div class="poopy-bar-3"></div>
      <div class="poopy-bar-4"></div>
      <div class="poopy-bar-5"></div>
      <div class="poopy-bar-6"></div>
      <div class="poopy-bar-7"></div>
      <div class="poopy-bar-8"></div>
      <div class="poopy-bar-9"></div>
      <div class="poopy-bar-10"></div>
    </div>`
    this.renderDogPoopyBars()
  }

  renderDogPoopyBars() {
    let poopyDivs = document.getElementsByClassName('dog-1-stats')[3]
    for(let i = 1; i <= 10; i ++) {
      if (i <= this.poopy) {
        poopyDivs.children[i].style.height = "20px"
      } else {
        poopyDivs.children[i].style.height = "5px"
      }
    }
  }

  renderDogPipi() {
    document.body.innerHTML += `<div class="dog-1-stats"> <p class="pipi">Peepy</p>
      <div class="pipi-bar-1"></div>
      <div class="pipi-bar-2"></div>
      <div class="pipi-bar-3"></div>
      <div class="pipi-bar-4"></div>
      <div class="pipi-bar-5"></div>
      <div class="pipi-bar-6"></div>
      <div class="pipi-bar-7"></div>
      <div class="pipi-bar-8"></div>
      <div class="pipi-bar-9"></div>
      <div class="pipi-bar-10"></div>
    </div>`

    this.renderDogPipiBars()
  }

  renderDogPipiBars() {
    let pipiDivs = document.getElementsByClassName('dog-1-stats')[4]
    for(let i = 1; i <= 10; i ++) {
      if (i <= this.pipi) {
        pipiDivs.children[i].style.height = "20px"
      } else {
        pipiDivs.children[i].style.height = "5px"
      }
    }
  }

  dogMovingAround() {
    let doggo = document.getElementById('doggo')
    let doggoTop
    let doggoLeft

    if (doggo.style.top.length === 3){
      doggoTop = parseInt(doggo.style.top.slice(0, 2))
    } else if (doggo.style.top.length === 2) {
      doggoTop = parseInt(doggo.style.top.slice(0, 1))
    } else if (doggo.style.top.length === 4) {
      doggoTop = parseInt(doggo.style.top.slice(0, 3))
    }

    if (doggo.style.left.length === 3) {
      doggoLeft = parseInt(doggo.style.left.slice(0, 2))
    } else if (doggo.style.left.length === 2) {
      doggoLeft = parseInt(doggo.style.left.slice(0, 1))
    } else if (doggo.style.left.length === 4) {
      doggoLeft = parseInt(doggo.style.left.slice(0, 3))
    }

    if (doggoTop <= 15) {
      // move down if dog reaches top
      doggo.style.top = `${doggoTop + 2}%`
    } else if (doggoTop >= 85) {
      // move up if dog reaches bottom
      doggo.style.top = `${doggoTop - 2}%`
    } else {
      if (Math.random() >= .5) {
        // move up
        doggo.style.top = `${doggoTop + 2}%`
      } else {
        // move down
        doggo.style.top = `${doggoTop - 2}%`
      }
    }

    if (doggoLeft >= 84) {
      // move left if dog reaches right
      doggo.style.left = `${doggoLeft - 2}%`
    } else if (doggoLeft <= 24) {
      // move right if dog reaches left
      doggo.style.left = `${doggoLeft + 2}%`
    } else {
      if (Math.random() >= .5) {
        // move left
        doggo.style.left = `${doggoLeft - 2}%`
      } else {
        // move right
        doggo.style.left = `${doggoLeft + 2}%`
      }
    }
  }

  ///// set interval update dog's status. AUTOMATIC
  makeLessHappy() {
    if (this.happiness > 1) {
      this.happiness -= 1
      let happyObject = {happiness: this.happiness}
      this.updateDog(happyObject)
      this.renderDogHappinessBars()
    }
  }

  makeMoreHungry() {
    if (this.hunger < 10) {
      this.hunger += 1
      let hungerObject = {hunger: this.hunger}
      this.updateDog(hungerObject)
      this.renderDogHungerBars()
    }
  }

  updateDog(object) {
    fetch(`${base_url}/users/${this.user_id}/dogs/${this.id}`, {
      method: "PUT",
      body: JSON.stringify(object),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  makeMoreThirsty() {
    if(this.thirst < 10) {
      this.thirst += 1
      let thirstObject = {thirst: this.thirst}
      this.updateDog(thirstObject)
      this.renderDogThirstBars()
    }
  }

  makeMorePoopy() {
    if (this.poopy < 10) {
      this.poopy += 1
      this.renderDogPoopyBars()
    } else if (this.poopy === 10) {
      this.goPoopy()
      this.poopy = 1
      this.renderDogPoopyBars()
    }
  }
  goPoopy() {
    let div = document.createElement('div')
    div.setAttribute('id', 'poop')
    div.style.top = `${Math.floor(Math.random() * 95) + 1}%`
    div.style.left = `${Math.floor(Math.random() * 95) + 1}%`
    div.addEventListener('click', function(event) {
      event.target.remove()
    })
    document.body.append(div)
  }

  goPipi() {
    let div = document.createElement('div')
    div.setAttribute('id', 'pee')
    div.style.top = `${Math.floor(Math.random() * 95) + 1}%`
    div.style.left = `${Math.floor(Math.random() * 95) + 1}%`
    div.addEventListener('click', function(event) {
      event.target.remove()
    })
    document.body.append(div)
  }


  makeMorePipi() {
    if (this.pipi < 10) {
      this.pipi += 1
      this.renderDogPipiBars()
    } else if (this.pipi === 10) {
      this.goPipi()
      this.pipi = 1
      this.renderDogPipiBars()
    }
  }

}
