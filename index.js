import { usersData } from './data'

const container = document.querySelector('.cards-list');

function renderCards() {

  usersData.forEach((data) => {
    const {fullName, gender, age, contentTopics, socialMedia, images, avatar} = data

    const card = `
      <li class="cards-list__list-item">
        <div class="cards-item-posts">${renderPostsImg(images)}</div>
        <div class="cards-item-profile">
          <div class="cards-item-profile__avatar">
            <img class="cards-item-profile__avatar-img" src="./assets/avatars/${avatar}" alt="">
          </div>
          <div class="cards-item-profile__personal-data">
            <h2 class="cards-item-profile__full-name">${fullName}</h2>
            <div>
              <span class="cards-item-profile__gender">${gender}</span><span class="cards-item-profile__age">${age ? `, ${age}` : ''}</span>
            </div>
            <p class="cards-item-profile__content-topics">${renderContentTopics(contentTopics)}</p>
          </div>
        </div>
        <div class="cards-item-mediainfo">${renderSocialMedia(socialMedia)}</div>
      </li>
    `
    
    container.innerHTML += card
  })
}

function renderSocialMedia(arr) {
  let social = ``

  arr.forEach((value) => {
     const socialMediaData = `
      <li class="cards-item-mediainfo-list__list-item">
        <div><img class="media-icon" src="./assets/icon-${value}.svg" alt="${value}"></div>
        <p>188.4M</p>
      </li>
     `
     social += socialMediaData
  })

  return `<hr><ul class="cards-item-mediainfo-list">${social}</div>`       
}

function renderPostsImg(arr) {
  let posts = ``

  arr.forEach((img) => {
    const postsImgData = `<img class="cards-item-posts__img" src="./assets/posts/${img}" alt="">`
    posts += postsImgData
  })

  return posts         
}

function renderContentTopics(arr) {
  return arr.join(', ').replace(/,([^,]*)$/," &$1")       
}

renderCards()
