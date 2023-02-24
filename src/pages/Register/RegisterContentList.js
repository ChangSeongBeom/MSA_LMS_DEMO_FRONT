import React from 'react'
import {useNavigate} from 'react-router-dom';

function RegisterContentList({contentsList,idx}) {

  let navigate=useNavigate();
  console.log(contentsList,idx);
  return (
  
     <div className='oneCourse' onClick={() =>{navigate(`/detail/${contentsList[idx].id}`)}}>
        <img className='oneCourseimg' alt="img" src='https://source.unsplash.com/random/?programming'/>
     
        <div className='oneCourseDesc'>
          <div className='oneCourseDetail'>
            <div className='oneCourseDetailinner1'>
               ⏳영상시간{contentsList[idx].contentLength}<br/>
               🏫 수강정원{contentsList[idx].capaNum}
            </div>
            <div className='oneCourseDetailinener2'>
              <div className='oneCourseDetailinnerinner'>
                {contentsList[idx].capaNum}
               
                콘텐츠이름{contentsList[idx].contentName}<br/>
                콘텐츠설명{contentsList[idx].description}<br/>
                카테고리 영역
              </div>
              <div className='oneCourseDetailstart'>
                <button>수강신청</button>
              </div>
            </div>
              
          </div>
          <hr/>
          <div className='oneCourseTag'>
            #좋은강의 # 행복강의 # 좋다 좋아
          </div>
        </div>
     </div>
   
      // <div className='course' onClick={() =>{navigate(`/detail/${contentsList[idx].id}`)}}>

      //       <p className='cours      //       <img alt="img" src='https://einfo' ><b className='coursetitle'>이름</b>   {contentsList[idx].contentName}</p>
      //       <p className='courseinfo'><b className='coursetitle'>재생시간</b>   {formatDuration(contentsList[idx].contentLength)}</p>
      //       <p className='courseinfo'><b className='coursetitle'>별점</b>   {contentsList[idx].rating}</p>
      // </div>
   
  )
}
// function formatDuration(duration) {
//   const minutes = Math.floor(duration / 60);
//   const seconds = duration % 60;
//   return `${minutes.toString().padStart(2, '0')}분${seconds.toString().padStart(2, '0')}초`;
// }


export default RegisterContentList