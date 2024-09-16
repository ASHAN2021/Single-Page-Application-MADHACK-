import profile from '../assets/profile.jpg'

function Contactsection() {
  return (
    <>
        <h1 className="text-white font-bold text-5xl pt-24 ml-10">Contact</h1>
        <div className="w-[200px] h-2 bg-blue-700 mt-10"></div>

        <div className='flex justify-around mt-10'>
                <div>
                    <img src={profile}  className='w-[220px] h-[220px] object-cover rounded-full'/>
                    <span className="text-white text-2xl font-bold mt-4 ">Name</span><br />
                    <span className="text-white text-2xl font-bold mt-10">Organizing Committee<br/> President</span><br />
                    <span className="text-gray-500 text-2xl font-bold mt-4">phone</span><br />
                    <span className="text-white text-2xl font-bold mt-4">0715689423</span><br />
                    <span className="text-gray-500 text-2xl font-bold mt-4">Email Address</span><br />
                    <span className="text-white text-2xl font-bold mt-4">President@gmail.com</span>
                </div>
                <div>
                    <img src={profile}  className='w-[220px] h-[220px] object-fill rounded-full'/>
                    <span className="text-white text-2xl font-bold mt-4">Name</span><br />
                    <span className="text-white text-2xl font-bold mt-4">Program Team</span><br />
                    <span className="text-gray-500 text-2xl font-bold mt-4">phone</span><br />
                    <span className="text-white text-2xl font-bold mt-4">0719649423</span><br />
                    <span className="text-gray-500 text-2xl font-bold mt-4">Email Address</span><br />
                    <span className="text-white text-2xl font-bold mt-4">programteam1@gmail.com</span>
                </div>
                <div>
                    <img src={profile}  className='w-[220px] h-[220px] object-fill rounded-full'/>
                    <span className="text-white text-2xl font-bold mt-4">Name</span><br />
                    <span className="text-white text-2xl font-bold mt-4">Program Team</span><br />
                    <span className="text-gray-500 text-2xl font-bold mt-4">phone</span><br />
                    <span className="text-white text-2xl font-bold mt-4">0765687263</span><br />
                    <span className="text-gray-500 text-2xl font-bold mt-4">Email Address</span><br />
                    <span className="text-white text-2xl font-bold mt-4">Programteam2@gmail.com</span>
                </div>
                <div>
                    <img src={profile}  className='w-[220px] h-[220px] object-cover rounded-full'/>
                    <span className="text-white text-2xl font-bold mt-4">Name</span><br />
                    <span className="text-white text-2xl font-bold mt-4">Program Team</span><br />
                    <span className="text-gray-500 text-2xl font-bold mt-4">phone</span><br />
                    <span className="text-white text-2xl font-bold mt-4">0745675923</span><br />
                    <span className="text-gray-500 text-2xl font-bold mt-4">Email Address</span><br />
                    <span className="text-white text-2xl font-bold mt-4">Programteam3@gmail.com</span>
                </div>
                
        </div>
    </>
  )
}

export default Contactsection