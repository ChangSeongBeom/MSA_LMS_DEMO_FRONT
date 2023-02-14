import React from 'react'

function Learning({contentsList,idx}) {
    console.log(contentsList);
  return (
    <div>
        <div>이름   {contentsList[idx].contentName}</div>
        <div>설명   {contentsList[idx].description}</div>
        <div>콘텐츠 길이   {contentsList[idx].contentLength}</div>
        <div>수용인원   {contentsList[idx].capaNum}</div>
        <div>조회수   {contentsList[idx].hitNum}</div>
        <div>좋아요수   {contentsList[idx].likeNum}</div>
        <div>별점   {contentsList[idx].rating}</div>
        <div>업로드날짜   {contentsList[idx].creDtm}</div>

        <br/>
        
    </div>
  )
}

export default Learning