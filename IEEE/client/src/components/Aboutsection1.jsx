import IEEESB from '../assets/IEEE-SB.png'


function aboutsection1() {
  return (
    <div className="pt-24" >
            <span className="text-5xl text-white ml-10">Introducing</span>
            <span className="text-5xl" style={{
               WebkitTextFillColor: '#0000',
               background: 'linear-gradient(90deg, #54c5f7, #02a8e1 70%)',
               WebkitBackgroundClip: 'text',
               fontFamily: 'Aquire',
               fontSize: '8xl',
               fontWeight: 'bold',
            }} > MadHack 3.0</span>
            <div className="w-[200px] h-2 bg-blue-700 mt-10"></div>
            <div className="flex">
              <div className="flex-1">
                  <p className="text-white ml-24 mt-10 w-2/3 text-2xl">MadHack is a 36-hour hackathon where students from all over the world come together to build, code, and design innovative projects. This year, we are back with MadHack 3.0, bigger and better than ever before. With a plethora of workshops, networking opportunities, and prizes to be won, MadHack 3.0 is the place to be for all aspiring developers and designers. So, what are you waiting for? Register now and embark on this exciting journey with us!</p>
              </div>
              <div>
                <img src={IEEESB} alt="about" className="w-[700px] h-[400px] mr-20"/>
              </div>
            </div>
        </div>
  )
}

export default aboutsection1