

function Timelinesection() {
  return (
    <div className="overflow-x-auto">
  <div className="min-w-[1600px]">
    <h1 className="text-white font-bold text-5xl pt-24 ml-10">Timeline</h1>
    <div className="w-[200px] h-2 bg-blue-700 mt-10"></div>

    {/* First row of events */}
    <div className="flex">
      <div className="w-[300px] h-[150px] bg-blue-600 mt-14 ml-10 rounded-3xl">
        <h1 className="text-white text-2xl ml-7 mt-5">
          <span className="text-2xl">Awareness Session</span><br />
          <span className="text-2xl ml-4 mt-4">1st October 2024</span><br />
          <span className="text-2xl ml-16 mt-4">12:00 AM</span>
        </h1>
      </div>
      <div className="w-[300px] h-[150px] bg-blue-600 mt-14 ml-32 rounded-3xl">
          <h1 className="text-white text-2xl ml-7 mt-5">
              <span className="text-2xl">Workshop-Flutter</span><br />
              <span className="text-2xl ml-4 mt-4">8th October 2024</span><br />
              <span className="text-2xl ml-16 mt-4">9:00 AM</span>
            </h1>
      </div>
      <div className="w-[300px] h-[150px] bg-blue-600 mt-14 ml-40 rounded-3xl">
      <h1 className="text-white text-2xl ml-7 mt-5">
          <span className="text-2xl">close Initial Round</span><br />
          <span className="text-2xl ml-4 mt-4">1st December 2024</span><br />
          <span className="text-2xl ml-16 mt-4">12:00 PM</span>
        </h1>
      </div>
      <div className="w-[300px] h-[150px] bg-blue-600 mt-14 ml-40 rounded-3xl">
      <h1 className="text-white text-2xl ml-7 mt-5">
          <span className="text-2xl">Final Hackthon & Award Ceremony</span><br />
          <span className="text-2xl ml-4 mt-4">20 December 2024</span><br />
          <span className="text-2xl ml-16 mt-4">3:00 PM</span>
        </h1>
      </div>
    </div>

    {/* Vertical lines */}
    <div className="flex">
      <div className="bg-white w-2 h-[100px] ml-44 mr-10 rounded-3xl"></div>
      <div className="bg-white w-2 h-[100px] ml-96 mr-10 rounded-3xl"></div>
      <div className="bg-white w-2 h-[100px] ml-96 rounded-3xl"></div>
      <div className="bg-white w-2 h-[100px] ml-96 rounded-3xl"></div>
    </div>

    {/* Horizontal line */}
    <div className="w-[1600px] h-2 bg-white ml-10 rounded-3xl"></div>

    {/* Second row of events */}
    <div className="flex">
      <div className="bg-white w-2 h-[100px] ml-96 mr-10 rounded-3xl"></div>
      <div className="bg-white w-2 h-[100px] ml-96 mr-10 rounded-3xl"></div>
      <div className="bg-white w-2 h-[100px] ml-96 rounded-3xl"></div>
    </div>

    {/* More events */}
    <div className="flex">
      <div className="w-[300px] h-[150px] bg-blue-600 ml-60 rounded-3xl">
        <h1 className="text-white text-2xl ml-7 mt-5">
          <span className="text-2xl">Mobile App Design<br />Session</span><br />
          <span className="text-2xl ml-4 mt-4">4th October 2024</span><br />
          <span className="text-2xl ml-16 mt-4">8:00 AM</span>
        </h1>
      </div>
      <div className="w-[300px] h-[150px] bg-blue-600 ml-32 rounded-3xl">
      <h1 className="text-white text-2xl ml-7 mt-5">
          <span className="text-2xl">Initial Round Open</span><br />
          <span className="text-2xl ml-4 mt-4">10th October 2024</span><br />
          <span className="text-2xl ml-16 mt-4">8:00 AM</span>
        </h1>
      </div>
      <div className="w-[300px] h-[150px] bg-blue-600 ml-36 rounded-3xl">
      <h1 className="text-white text-2xl ml-7 mt-5">
          <span className="text-2xl">Announce Finalists</span><br />
          <span className="text-2xl ml-4 mt-4">18th December 2024</span><br />
          <span className="text-2xl ml-16 mt-4">10:00 AM</span>
        </h1>
      </div>
    </div>
  </div>
</div>

  )
}

export default Timelinesection