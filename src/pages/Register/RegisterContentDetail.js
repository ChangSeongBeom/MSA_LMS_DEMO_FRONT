
import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom';
import axios from "../../api/axios";
import requests from "../../api/requests";
import Cookies from 'js-cookie';
import Review from './Review';

function RegisterContentDetail() {
   
    const {id}=useParams(); 
    const [contentInfo,setContentInfo]=useState([]);
    const [selectedRating, setSelectedRating] = useState('');
    const [reviewContent, setReviewContent] = useState('');
    const [reviewAllContent, setReviewAllContent] = useState([]);

    useEffect(() => {
   
      fetchData();
    }, [])
    
    const fetchData= () =>{
      const contenturl= requests.getContent;
      const reviewurl=requests.getOneContentReview;
     
      axios.get(`${contenturl}/${id}`, {
            headers: {
              "Authorization": `Bearer ${Cookies.get("token")}`
            }
      })
      .then(function(response){
        console.log(response.data);
        setContentInfo(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      axios.get(`${reviewurl}/${id}`, {
          headers: {
            "Authorization": `Bearer ${Cookies.get("token")}`
          }
      }).then(function(response){
        console.log(response.data);
        setReviewAllContent(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
     
    }
  

    const handleTextareaChange = (event) => {
      setReviewContent(event.target.value);
    };

    function handleRatingChange(event) {
      setSelectedRating(event.target.value);
    }
  
    function handleRatingSubmit() {
      onRatingSubmit(selectedRating);
    }

    const handleReviewSubmit = () => {
      const url=requests.joinReview;
      axios.post(url,
        {
          loginId:  `${Cookies.get("loginId")}`,
          contentId: id,
          review: reviewContent 
        },{
          headers: {
            "Authorization": `Bearer ${Cookies.get("token")}`
          }
        })
        .then(response => {
          //console.log('Review submitted successfully:', response.data);
          alert("등록 성공");
          setReviewContent(''); // clear the textarea
          setReviewAllContent(prevState => [response.data, ...prevState]);
        })
        .catch(error => {
          // handle error response
          console.error('Error submitting review:', error);
        });
    };
  
    
  
    function onRatingSubmit(rating) {
      // Do something with the rating value
      console.log('Selected rating: ', rating);

      const url=requests.updateRating
      axios.post(url,{
        id: id,
        rating: rating
      },{
        headers: {
          "Content-Type": `application/json`,
          'Authorization': `Bearer ${Cookies.get("token")}`
        }
      })
        .then(function(response) {
          console.log(response);
          alert("평가완료.");
          
        })
        .catch(function(error) {
            console.log("실패");
        })
    }
   
   
 
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
                
              <div className='contentinner2'>
                <p > {contentInfo.description}</p>
              </div>
            </div>

            <div className='contetRating'>
              <div className='contenticon'>
              
              </div>
              <div className='contentdownload'>
                <button className='contentdownloadinner'>강의자료</button>
                
                <button className='contentdownloadinner'>스크랩</button>
                <button className='contentdownloadinner'>좋아요</button>
                <button className='contentdownloadinner'> {contentInfo.likeNum}</button>              
              </div>
                
              <div className='contenttag'>
                <p><strong>Tag</strong></p>
                <div className='contenttaginner'>
                  <div className='contenttaga'>#교육관리</div>
                  <div className='contenttaga'>#인재성장</div>
                  <div className='contenttaga'>#경영층</div>
                  <hr height="100%" width = "100%" color = "grey" size = "3"></hr>
                </div>
              </div>
              <strong>평점</strong>
              <div className='contentstar'>
                <label htmlFor="star5">
                  <input type="radio"id="star5" name="rating" value="5" onChange={handleRatingChange}></input>
                  <img src='https://www.hmgprime.com/img/front/icon/starScore_5.png'alt="Five star rating" width="70" height="15"/>

                </label>
                <label htmlFor="star4">
                  <input type="radio" id="star4" name="rating" value="4" onChange={handleRatingChange}></input>
                  <img src='https://www.hmgprime.com/img/front/icon/starScore_4.png' alt="Four star rating" width="70" height="15"/>
                </label>
                <label htmlFor="star3">
                  <input type="radio" id="star3" name="rating" value="3" onChange={handleRatingChange}></input>
                  <img src='https://www.hmgprime.com/img/front/icon/starScore_3.png'alt="Three star rating" width="70" height="15"/>
                </label>
                <label htmlFor="star2">
                  <input type="radio" id="star2" name="rating" value="2" onChange={handleRatingChange}></input>
                  <img src='https://www.hmgprime.com/img/front/icon/starScore_2.png'alt="Two star rating" width="70" height="15"/>
                </label>
                <label htmlFor="star1">
                  <input type="radio" id="star1" name="rating" value="1" onChange={handleRatingChange}></input>
                  <img src='https://www.hmgprime.com/img/front/icon/starScore_1.png'alt="One star rating" width="70" height="15"/>
                </label>
                
              </div>
              <button className='contentupdateRating' onClick={handleRatingSubmit}>평점등록</button>
              
            </div>
          </div>
          <div className='reviewDiv'>
          <hr height="100%" width = "100%" color = "grey" size = "5"></hr>
            <p className='reviewcount'>시청소감</p>
            <div className='myreview'>
            <textarea
               className='myreviewpost'
               placeholder='콘텐츠 시청 소감/의견을 남겨주세요.'
               value={reviewContent}
               onChange={handleTextareaChange}
            />
            <button className='myreviewpostbtn' onClick={handleReviewSubmit}>확인</button>
            </div>
            <div className='otherreview'>
              {
                reviewAllContent.map((review,idx)=>
                <Review key={idx} reviewAllContent={reviewAllContent} idx={idx}/>
                )
              }
              
            </div>
          </div>
        </div>
      </div>

    </div>  
  )
}

export default RegisterContentDetail