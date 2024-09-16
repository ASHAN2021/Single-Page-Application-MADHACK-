import bgphoto from '../assets/bgphoto.jpg'

function Homesection() {
  return (
    <>
        <div className=" flex justify-center pt-72 ml-10">
            <img src={bgphoto} alt="bgphoto" className=" w-[500px] h-[200px]" /> 
        </div>
        <h1 
                    className="text-8xl font-bold text-center mt-20 "
                    style={{
                        WebkitTextFillColor: '#0000',
                        background: 'linear-gradient(90deg, #54c5f7, #02a8e1 70%)',
                        WebkitBackgroundClip: 'text',
                        fontFamily: 'Aquire',
                        fontSize: '8xl',
                        fontWeight: 'bold',
                    }}>
                    MADHACK 3.0
                </h1>
    </>
    
  )
}

export default Homesection