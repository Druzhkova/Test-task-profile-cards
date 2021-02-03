import { usersData } from './data'

const container = document.querySelector('.container');

function renderCards() {
  let postIndex = 1;

  usersData.forEach((data, key) => {
    const {fullName, gender, age, contentTopics, socialMedia} = data

    const card = `
      <div class="card">
        <div class="posts">
          <img class="post-img" src="./assets/posts/${postIndex++}.png" alt="">
          <img class="post-img" src="./assets/posts/${postIndex++}.png" alt="">
        </div>
        <a class="link" href="#">
          <div class="avatar">
            <img class="avatar-img" src="./assets/avatars/${++key}.jpg" alt="">
          </div>
          <div class="personal-data">
            <h2 class="full-name">${fullName}</h2>
            <div>
              <span class="gender">${gender}</span><span class="age">${age ? `, ${age}` : ''}</span>
            </div>
            <p class="content-topics">${contentTopics}</p>
          </div>
          <hr>
        </a>
        <div class="social-handle">${renderSocialMedia(socialMedia)}
        </div>
      </div>
    `
    
    container.innerHTML = container.innerHTML + card
  })
}

function renderSocialMedia(arr) {
  let socialHandle = '';

  arr.forEach((value) => {
     const socialMediaData = `
       <div class="handle">
         <img class="social-icon" src="./assets/icon-${value}.svg" alt="${value}">
         <p>188.4M</p>
       </div>
     `
     socialHandle += socialMediaData
  })

  return socialHandle
}

renderCards()
