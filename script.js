const artists = document.querySelector('.artists')
const submit = document.getElementById('submit')
const editSubmit = document.getElementById('submit-edit')
const deleteButton = document.getElementById('delete')

let currentlyEditing = ''

function editModal (artist) {
  console.log(artist)
  $('#modal-edit').modal('open')
  const nameEdit = document.getElementById('name-edit')
  const imgEdit = document.getElementById('img-edit')
  const soundcloudEdit = document.getElementById('soundcloud-edit')
  const youtubeEdit = document.getElementById('youtube-edit')
  const itunesEdit = document.getElementById('itunes-edit')
  const spotifyEdit = document.getElementById('spotify-edit')
  const twitterEdit = document.getElementById('twitter-edit')
  const instagramEdit = document.getElementById('instagram-edit')
  const snapchatEdit = document.getElementById('snapchat-edit')
  const facebookEdit = document.getElementById('facebook-edit')
  const flowEdit = document.getElementById('flow-edit')
  const deliveryEdit = document.getElementById('delivery-edit')
  const styleEdit = document.getElementById('style-edit')
  const visualsEdit = document.getElementById('visuals-edit')
  const overallEdit = document.getElementById('unique-edit')
  const articleEdit = document.getElementById('article-edit')

  nameEdit.value = artist.name
  imgEdit.value = artist.img
  soundcloudEdit.value = artist.soundcloud
  youtubeEdit.value = artist.youtube
  itunesEdit.value = artist.itunes
  spotifyEdit.value = artist.spotify
  twitterEdit.value = artist.twitter
  instagramEdit.value = artist.instagram
  snapchatEdit.value = artist.snapchat
  facebookEdit.value = artist.facebook
  flowEdit.value = artist.flow
  deliveryEdit.value = artist.delivery
  styleEdit.value = artist.style
  visualsEdit.value = artist.visuals
  overallEdit.value = artist.unique
  articleEdit.value = artist.article

  currentlyEditing = artist._id

  console.log(currentlyEditing)
}

function addArtist (artistData) {
  artists.innerHTML = ''
  artistData.forEach(artist => {
    if (!artist) return
    const imageNode = document.createElement('img')
    imageNode.setAttribute('src', artist.img)
    imageNode.classList.add('artist')

    imageNode.addEventListener('click', () => {
      editModal(artist)
    })
    artists.appendChild(imageNode)
  })
}

axios.get('https://vibed.herokuapp.com/vibed').then(response => {
  addArtist(response.data)
})

editSubmit.addEventListener('click', (e) => {
	// submit put request to artist
  const name = document.getElementById('name-edit').value
  const img = document.getElementById('img-edit').value
  const soundcloud = document.getElementById('soundcloud-edit').value
  const itunes = document.getElementById('itunes-edit').value
  const spotify = document.getElementById('spotify-edit').value
  const twitter = document.getElementById('twitter-edit').value
  const instagram = document.getElementById('instagram-edit').value
  const snapchat = document.getElementById('snapchat-edit').value
  const facebook = document.getElementById('facebook-edit').value
  const flow = document.getElementById('flow-edit').value
  const delivery = document.getElementById('delivery-edit').value
  const style = document.getElementById('style-edit').value
  const visuals = document.getElementById('visuals-edit').value
  const overall = document.getElementById('unique-edit').value
  const article = document.getElementById('article-edit').value
  console.log(artists._id)

  axios.put(`https://vibed.herokuapp.com/vibed/${currentlyEditing}`, {
    name,
    img,
    soundcloud,
    itunes,
    spotify,
    twitter,
    instagram,
    snapchat,
    facebook,
    flow,
    delivery,
    style,
    visuals,
    overall,
    article
  }).then((resp) => {
    console.log(resp)
    addArtist(resp.data)
    $('#modal-edit').modal('close')
  })
})

submit.addEventListener('click', (e) => {
  const name = document.getElementById('name').value
  const img = document.getElementById('img').value
  const soundcloud = document.getElementById('soundcloud').value
  const itunes = document.getElementById('itunes').value
  const spotify = document.getElementById('spotify').value
  const twitter = document.getElementById('twitter').value
  const instagram = document.getElementById('instagram').value
  const snapchat = document.getElementById('snapchat').value
  const facebook = document.getElementById('facebook').value
  const flow = document.getElementById('flow').value
  const delivery = document.getElementById('delivery').value
  const style = document.getElementById('style').value
  const visuals = document.getElementById('visuals').value
  const overall = document.getElementById('unique').value
  const article = document.getElementById('article').value

  axios.post(`https://vibed.herokuapp.com/vibed`, {
    name,
    img,
    soundcloud,
    itunes,
    spotify,
    twitter,
    instagram,
    snapchat,
    facebook,
    flow,
    delivery,
    style,
    visuals,
    overall,
    article
  }).then((resp) => {
    addArtist(resp.data)
    $('#modal-create').modal('close')
  })
})

deleteButton.addEventListener('click', (e) => {
  axios.delete(`https://vibed.herokuapp.com/vibed/${currentlyEditing}`).then((resp) => {
    addArtist(resp.data)
    $('#modal-edit').modal('close')
  })
})

$('.modal').modal()
