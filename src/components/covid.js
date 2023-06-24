import React,{useEffect, useState} from 'react'
 
const Covid = () => {
   const [data, setdata] = useState([])
   const getCoviddata=async ()=>{ 
       try {
           const resp=await fetch('https://data.covid19india.org/data.json');
 const actualdata=await resp.json();
   
 setdata(actualdata.statewise[0])
} catch (error) {
 console.log(error)
}
   }
    useEffect(() => {
   getCoviddata();
    }, []);
    
  return <>
  <img src="./covid.webp" alt="" srcset="" />
    <div id='heading'>Covid Tracker Live</div>
    <section className='section'>
    <ul className='flex'>
        <li className="card">
            <div className="card_main">
                <div className="card_inner">
                    <p className="card_name"><span>Country</span></p>
                    <p className="card_small"><span>India</span></p>
                </div>
            </div>
        </li>
        <li className="card">
            <div className="card_main">
                <div className="card_inner">
                    <p className="card_name"><span>Recoverd</span></p>
                    <p className="card_small"><span>{data.recovered}</span></p>
                </div>
            </div>
        </li>
        <li className="card">
            <div className="card_main">
                <div className="card_inner">
                    <p className="card_name"><span>Confirm</span></p>
                    <p className="card_small"><span>{data.confirmed}</span></p>
                </div>
            </div>
        </li>
        <li className="card">
            <div className="card_main">
                <div className="card_inner">
                    <p className="card_name"><span>Death</span></p>
                    <p className="card_small"><span>{data.deaths}</span></p>
                </div>
            </div>
        </li>
        <li className="card">
            <div className="card_main">
                <div className="card_inner">
                    <p className="card_name"><span>Active</span></p>
                    <p className="card_small"><span>{data.active}</span></p>
                </div>
            </div>
        </li>
        <li className="card">
            <div className="card_main">
                <div className="card_inner">
                    <p className="card_name"><span>Update</span></p>
                    <p className="card_small"><span>{data.lastupdatedtime}</span></p>
                </div>
            </div>
        </li>
    </ul>
    </section>
    </>
  
}

export default Covid