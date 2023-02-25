import React, { useEffect,useState } from 'react'

import axios from "../../api/axios";
import requests from "../../api/requests";
import RegisterContentList from './RegisterContentList';
import './Register.css';
import Cookies from 'js-cookie';

function Register() {
    const [dataFetched, setDataFetched] = useState(false);
    const [contentsList,setContentsList]=useState([]);
    console.log(contentsList);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await axios.get(requests.getAllContents,{
            headers: {
                       "Authorization": `Bearer ${Cookies.get("token")}`
            }
          });
          setContentsList(result.data);
          setDataFetched(true);
        } catch (error) {
          console.log(error);
        }
      };
      if (!dataFetched) {
        fetchData();
      }
  
    }, [dataFetched]);
  
  if(contentsList){
  return (
    <div className='learning'>
      <div className='learningSearch'>
        <div className='learningSelect'>
          <div className='learningwrap'>
           <p>교육형태</p>
            <select>
              <option>전체</option>
              <option>전체1</option>
              <option>전체2</option>
            </select>

            <p className='pp'>과정구분</p>
            <select>
              <option>전체</option>
              <option>전체1</option>
              <option>전체2</option>
            </select>
            </div>
            <div className='learningwrap2'>
              <p>과정명</p>
              <textarea className='search'>입력</textarea>
            </div>
        </div>
        <div className='learningSpace'>
          <button>검색</button>
        </div>
        
      </div>
      <div className='learningCondition'>
        <button>과정명순 </button>
        <button>추천순</button>
        <button>별점순</button>
        <button>공유순</button>
      </div>
      <div className='learningList'>
          {
              contentsList.map((content,idx)=>
                  <RegisterContentList contentsList={contentsList} idx={idx}/>
              )
          }
      
      </div>
    </div>
  )
  }
}

export default Register

