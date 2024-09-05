import React, {useState} from 'react'
import  "./Styles/contact.css"
import Rating from './Rating'

function Contact({img, name, phone, email, add, occ, location, openSpot, price}) {
  let badgeText
  if(location === 'Online'){
    badgeText = 'ON-LINE'
  }else if(openSpot === 0){
    badgeText = 'SOLD OUT'
  }

  const[likeCount, setLikeCount] = useState(0);
  const[unlikeCount, setUnlikeCount] = useState(0);
  const[shareCount, setShareCount] = useState(0);
  const[veiwCount, setVeiwCount] = useState(0);

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1)
  }
  const handleShareClick = () => {
    setShareCount(shareCount + 1)
  }
  const handleUnlikeClick = () => {
    setUnlikeCount(unlikeCount + 1)
  }
  const handleVeiw = () => {
    setVeiwCount(veiwCount + 1)
  }

  const time = new Date().getHours()+':'+new Date().getMinutes();
  return (
    <div className='contact-info-container' onClick={handleVeiw}>
        <div className="contact-img" >
          {badgeText && <div className="badgeText">{badgeText}</div>}
        <img src={img} className='user-logo' />
        </div>
        <div className="user-contact-info">
            <h4>{name}</h4>
            <p>{occ}</p>
            <p className='gray'><img src='Images/telephone.svg'/> {phone}</p>
            <p className='gray'>{email}</p>
            <p className='gray'>{add}</p>
            <div className='post-statistics' ><img className='seen-image' src="Images/eye-fill.svg"/> 
            {veiwCount} {time}<br /> {likeCount} likes <br /> {unlikeCount} unlikes <br /> {shareCount} shares</div>
            <p className='price'>$<b>{price}</b></p>
            <Rating />
            <div className="like-dislike-container">
            <button onClick={handleLikeClick} className='buttons like-button'>👍</button>
            <button onClick={handleShareClick} className='buttons share-button'><img src="Images/share.svg"/></button>
            <button onClick={handleUnlikeClick} className='buttons unlike-button'>👎</button>
            </div>
        </div>     
    </div>
  )
}

export default Contact
