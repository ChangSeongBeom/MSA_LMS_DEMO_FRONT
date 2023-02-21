import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import axios from "../../api/axios";
import requests from "../../api/requests";

function RegisterContentDetail() {
    const {id}=useParams(); 
    const [contentInfo,setContentInfo]=useState([]);

    useEffect(() => {
   
      fetchData();
    }, [])
    
    const fetchData= () =>{
        const url= requests.getContent;
        axios.get(`${url}${id}`)
            .then(function(response){
                console.log(response);
                setContentInfo(response.data);
            })
            .catch(function(error){
                console.log(error);
            })
    }
    console.log(contentInfo);
  return (
    <div className='detailContentDiv'>
      <div className='detailContentInfoDiv'>
        <div className='movieAreaDiv'>
        <video src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' controls></video>
        </div>
        <div className='footDiv'>
          <div className='contentInfoDiv'>
            <div className='contentDescDiv'>
              <button className='scriptBtn'>스크립트 보기</button><br/>
              <h2 className='contentName'>{contentInfo.contentName}</h2>
              <div className='contentinner'>
                <p >재생시간 <strong>{contentInfo.contentLength}</strong></p>
                <p>등록일 <strong>{new Date(contentInfo.creDtm).toLocaleDateString('ko-KR').replace(/\s/g, '').replace(/\.$/, '')}</strong></p>
                <p >조회수 <strong>{contentInfo.hitNum}</strong></p>
                <p>평점 <strong>{contentInfo.rating}</strong></p>
              </div>
                
                <p>{contentInfo.description}</p>
            </div>

            <div className='contetRating'>
            </div>
          </div>
          <div className='reviewDiv'>
          </div>
        </div>
      </div>

    </div>  
  )
}

export default RegisterContentDetail