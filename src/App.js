import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [alldata, setalldata] = useState([])
  const getdata = async () => {
    try {
      const responce = await axios.get("https://reaserch-backend-3.onrender.com/api/formdata/read-formdata");
      if (responce.status === 202) {
        return alert("No data available")
      }
      if (responce) {
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
  const allquesoneanswer = alldata.map((value) => value.ans2)
  const lenthofq2 = allquesoneanswer.length
  console.log(lenthofq2)
  console.log(allquesoneanswer)

  useEffect(() => { getdata() }, [])
  return (
    <>
      <div className="h-full  w-[100%] text-white p-[40px_10px] sm:p-[40px_30px] md:p-[40px_80px] lg:p-[40px_100px]">
        <div className='flex pb-[15px] px-[10px] gap-2  bg-gray-800 z-30'>
          <button className='bg-green-400 mt-[20px] p-[5px_20px] rounded-[10px]'><a href='/'>Refresh</a></button>
          <button className='bg-blue-600 mt-[20px] p-[5px_20px] rounded-[10px]'><a href='/'>Total responce {totalresponce}</a></button>

        </div>
        <div className=' bg-slate-700 h-[300px] rounded-[10px] relative shadow-[1px_1px_5px_white] overflow-auto overflow-x-scroll'>
          <table className='overflow-y-scroll'>
            <tr className='sticky top-0'>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Name</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Designation</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Ward</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Age</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.2</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.3</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.4</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.5</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.6</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.7</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.8</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.9</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.10</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.11</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.12</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.13</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.14</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.15</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.16</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.17</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.18</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.19</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.20</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.21</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.22</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.23</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.24</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.25</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.26</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.27</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.28</th>
              <th className='bg-[blue] text-center border font-bold border-slate-500 p-[4px]'>Q.29</th>
            </tr>
            {
              alldata.map((value)=> (
                <tr className='mt-[30px]'>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.name}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.designation}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ward}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.age}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans2}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans3}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans4}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans5}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans6}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans7}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans8}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans9}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans10}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans11}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans12}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans13}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans14}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans15}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans16}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans17}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans18}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans19}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans20}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans21}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans22}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans23}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans24}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans25}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans26}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans27}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans28}</td>
                <td className='text-center border font-bold border-slate-500 p-[4px]'>{value.ans29}</td>
              </tr>
              ))
            }

         
          </table>
        </div>


      </div>





    </>
  )
}

export default App
