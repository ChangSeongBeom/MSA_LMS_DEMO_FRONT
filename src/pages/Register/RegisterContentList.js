import React from 'react'
import RegisterContentDetail from './RegisterContentDetail';
import {useNavigate} from 'react-router-dom';

function RegisterContentList({contentsList,idx}) {

  let navigate=useNavigate();
  return (
    <div className='course' onClick={() =>{navigate(`/detail/${contentsList[idx].id}`)}}>
         <img src='https://source.unsplash.com/random/?programming'/>
         <div className='courseinfo' >이름   {contentsList[idx].contentName}</div>
         <div className='courseinfo'>재생시간   {formatDuration(contentsList[idx].contentLength)}</div>
         <div className='courseinfo'>별점   {contentsList[idx].rating}</div>
       
    </div>
  )
}
function formatDuration(duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes.toString().padStart(2, '0')}분${seconds.toString().padStart(2, '0')}초`;
}


export default RegisterContentList