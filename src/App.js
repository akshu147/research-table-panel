import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [alldata, setalldata] = useState([])
  const getdata = async () => {
    try {
      const responce = await axios.get("https://reaserch-backend-3.onrender.com/api/formdata/read-formdata");
      if(responce.status === 202) {
        return alert("No data available")
      }
      if(responce) {
        setalldata(responce.data.data)
      }
      else {
        setalldata([])
      }

        
    }
    catch (err) {
      console.log("something went wrong", err)
    }
  }
  const totalresponce = alldata.length
  const allquesoneanswer = alldata.map((value)=> value.ans2)
  const lenthofq2 = allquesoneanswer.length
  console.log(lenthofq2)
  console.log(allquesoneanswer)

  useEffect(() => { getdata() }, [])
  return (
    <>

      <div className="bg-gray-800  w-[100%] text-white p-[40px_10px] sm:p-[40px_30px] md:p-[40px_80px] lg:p-[40px_100px]">
        <div className='flex pb-[15px] px-[10px] gap-2 sticky top-0 bg-gray-800 z-30'>
        <button className='bg-green-400 mt-[20px] p-[5px_20px] rounded-[10px]'><a href='/'>Refresh</a></button>
        <button className='bg-blue-600 mt-[20px] p-[5px_20px] rounded-[10px]'><a href='/'>Total responce {totalresponce}</a></button>

        </div>
        <div className='bg-slate-700 rounded-[10px] shadow-[1px_1px_5px_white] overflow-hidden flex overflow-x-scroll relative'>
          <div className='flex flex-col justify-stretch sticky top-0 left-0 z-20'>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Name</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Designation</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Ward</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Age</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.2</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.3</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.4</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.5</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.6</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.7</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.8</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.9</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.10</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.11</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.12</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.13</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.14</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.15</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.16</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.17</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.18</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.19</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.20</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.21</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.22</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.23</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.24</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.25</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.26</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.27</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.28</small>
            <small className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.29</small>
          </div>
         
          {
            alldata.map((value, index)=> (
              <div key={index} className='flex flex-col justify-stretch'>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.name} </small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.designation}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ward}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.age}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px] relative'>{value.ans2} <p className='text-green-300 text-[6ox] font-thin absolute'>a</p></small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans3}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans4}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans5}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans6}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans7}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans8}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans9}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans10}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans11}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans12}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans13}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans14}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans15}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans16}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans17}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans18}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans19}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans20}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans21}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans22}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans23}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans24}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans25}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans26}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans27}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans28}</small>
              <small className='border text-center font-bold border-slate-500 p-[4px]'>{value.ans29}</small>
            </div>
            ))
          }
       
        </div>
     
      </div>
      


    </>
  )
}

export default App
