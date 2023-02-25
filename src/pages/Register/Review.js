import React from 'react'

function Review({reviewAllContent,idx}) {
    console.log(reviewAllContent,idx);
  return (
    <div>
        <div className='otherreviewInfo'>
           
            <div className='otherreviewInfo1'><strong>{reviewAllContent[idx].loginId} |</strong>
                {new Date(reviewAllContent[idx].creDtm).toISOString().substring(0, 10).replaceAll("-", ".")}
            </div>
                
            
        </div>
        
        <div className='otherreviewDesc'>
            <p>{reviewAllContent[idx].review}</p>   
        </div>
        <hr/>
    </div>
  )
}


export default Review