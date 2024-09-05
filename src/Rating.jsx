import React,{useState} from 'react'
import './Styles/contact.css'

function Rating() {

  const[rating, setRating] = useState(0)
  // const[star, setStar] = useState(false)

  const handleColorChange = (index) => {
    // setStar(!star)
      if(index === rating){
          setRating(0)
          // setStar(false)
      }     else{ setRating(index + 1)
                  // setStar(true)
        }
    }
  return (
    <div className='rate-the-card'>
            {[...Array(5)].map((_, index) => (
              <span key={index} onClick={()=> handleColorChange(index)}>
                <img className='star-size' src={rating > index? 'Images/star-fill.svg' : 'Images/star.svg'} alt=''/>
              </span>
            ))}<span className='text'>Rating Us 5 stars</span>
              </div>
  )
}

export default Rating
