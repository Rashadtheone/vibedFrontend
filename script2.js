const card = document.querySelector('.card')
const details = document.querySelector('.material-icons')
const artistsContent = document.querySelector('.modal-content')

const editSubmit = document.getElementById('submit-edit')
const deleteButton = document.getElementById('delete')

let currentlyEditing = ''

function viewModal (artistData) {
  artistsContent.innerHTML = ''
  console.log(artistsContent.innerHTML)
  artistData.forEach(artist => {
    if (!artist) return

    const artistContentView = document.createElement('div')
    artistContentView.classList.add('row')

    artistContentView.innerHTML = `
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="${artist.img}">
          <span class="card-title">${artist.name}</span>
        </div>
        <div class="card-content">
          <p>${artist.article}</p>
          
        </div>
        <div class="card-ratings">
        <h5>Delivery: ${artist.delivery}</h5>
        <h5>Flow: ${artist.flow}</h5>
        <h5>Style: ${artist.style}</h5> 
        <h5>Overall: ${artist.unique}</h5> 
        
      </div>
        <div class="card-action">
        <h6>Music Links</h6>
          <a href="${artist.soundcloud}">Soundcloud</a>
          <a href="${artist.spotify}">Spotify</a>
          <a href="${artist.itunes}">itunes</a>
          <a href="${artist.youtube}">Youtube</a>
        </div>
        <div class="card-action">
        <h6>Social Links</h6>
          <a href="${artist.instagram}">IG</a>
          <a href="${artist.twitter}">Twitter</a>
          <a href="${artist.snapchat}">Snapchat</a>
          <a href="${artist.facebook}">Facebook</a>
        </div>
      </div>
    </div>`

    artistsContent.appendChild(artistContentView)
  })
  currentlyEditing = artistsContent._id

  console.log(currentlyEditing)
}

function addCard (artistData) {
  console.log(artistData)
  card.innerHTML = ''
  artistData.forEach(artist => {
    if (!artist) return

    const artistCard = document.createElement('div')
    artistCard.classList.add('card-image')

    artistCard.innerHTML = `
 <img class="artists" src="${artist.img}">
<span class="card-title black-text">${artist.name}</span>
    <a href="#cardDetails" class="btn-floating modal-trigger waves-effect waves-light red"><i class="material-icons" id="details">add</i></a>
  </div>
  <div class="card-content">
    <p>${artist.article}</p>
  </div>`
    card.appendChild(artistCard)
  })
}
details.addEventListener('click', () => {
  viewModal(artistsContent)
})

axios.get('https://vibed.herokuapp.com/vibed').then(response => {
  addCard(response.data)
  viewModal(response.data)
})

$('.modal').modal()
