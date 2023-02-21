import React from 'react'
import {useNavigate} from 'react-router-dom';

function RegisterContentList({contentsList,idx}) {

  let navigate=useNavigate();
  return (
    <div className='course' onClick={() =>{navigate(`/detail/${contentsList[idx].id}`)}}>
         <img alt="img" src='https://source.unsplash.com/random/?programming'/>
         <p className='courseinfo' ><b className='coursetitle'>이름</b>   {contentsList[idx].contentName}</p>
         <p className='courseinfo'><b className='coursetitle'>재생시간</b>   {formatDuration(contentsList[idx].contentLength)}</p>
         <p className='courseinfo'><b className='coursetitle'>별점</b>   {contentsList[idx].rating}</p>
       
    </div>
  )
}
function formatDuration(duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes.toString().padStart(2, '0')}분${seconds.toString().padStart(2, '0')}초`;
}


export default RegisterContentList