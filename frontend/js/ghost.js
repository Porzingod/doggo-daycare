const ghostification = (obj) => {
  let annoyingDog = document.querySelector('.annoying-dog.only-dog')
  annoyingDog.src = "images/dog-ghost.png"
  // document.querySelector('audio').innerHTML = '<source src="./audio/Gabe_the_dog_Pokemon_Lavender_Town.mp3">'
  // annoyingDog.addEventListener('mouseover', event => document.querySelector('audio').play())
  // annoyingDog.addEventListener('mouseout', event => document.querySelector('audio').pause())
  fetch(`${base_url}/users/${obj.user_id}/dogs/${obj.id}`, {
    method: "PUT",
    body: JSON.stringify({color: "ghost"}),
    headers: {
      'Content-Type': 'application/json'
    }
  })//.then(User.addKonamiCode())
}
