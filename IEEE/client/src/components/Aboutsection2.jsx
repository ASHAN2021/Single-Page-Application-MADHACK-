/* eslint-disable react/no-unescaped-entities */
import mobile from '../assets/mobileapp.jpeg'   

function Aboutsection2() {
  return (
    <>
        <div className="pt-32">
            <span className="text-5xl text-white ml-20 font-semibold">What is </span>
            <span className="text-5xl ml-5" style={{
               WebkitTextFillColor: '#0000',
               background: 'linear-gradient(90deg, #54c5f7, #02a8e1 70%)',
               WebkitBackgroundClip: 'text',
               fontFamily: 'Aquire',
               fontSize: '8xl',
               fontWeight: 'bold',
            }} > MadHack?</span>
        </div>
        <div className="w-[200px] h-2 bg-blue-700 mt-10"></div>
        <div className="flex">
            <div className="flex-1" >
              <p className="text-white ml-24 mt-10 text-2xl">Introducing Sri Lanka’s premier Web Application Development Hackathon, the IEEE Student Branch of UCSC proudly presents "WebDev Clash", an inter-university hackathon accompanied by a series of workshops. WebDev Clash challenges participants to showcase their creativity and problem-solving skills by developing web applications on any framework or platform of their choice, encouraging innovation in the fast-evolving world of web technologies.</p>
            </div> 
            <div>
              <img src={mobile} alt="about" className="w-[700px] h-[400px] mr-16"/>
            </div>  
        </div>
    </>
    
  )
}

export default Aboutsection2