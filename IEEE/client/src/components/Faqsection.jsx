import  { useState } from 'react';

function Faqsection() {
  // Define an array of FAQs
  const faqs = [
    {
      question: "What is the MADHACK 3.0?",
      answer: "MadHack 3.0 is a coding competition where enthusiasts come together to showcase their skills in mobile app development. It's a platform to learn, collaborate, and compete in creating innovative solutions for real-world challenges.",
    },
    {
      question: "Who can participate in MADHACK 3.0?",
      answer: "MadHack 3.0 is open to all undergraduate students! Whether you're a seasoned developer or just starting, we welcome participants of all skill levels and backgrounds.",
    },
    {
      question: "How can I register in MADHACK 3.0?",
      answer: "To register, visit our website and navigate to the registration page. Fill in the required details for yourself and your team members (if applicable) to secure your spot..",
    },
    {
      question: "Do I need a team to participate?",
      answer: "Yes, for the Initial Round and the Final Hackathon, participants are required to form teams of three or four members each.",
    },
    {
      question: "What if I am a beginner in coding? Can I still participate?",
      answer: "Absolutely! MadHack 3.0 is designed for participants of all skill levels. It's a great opportunity for beginners to learn and for experienced coders to showcase their expertise.",
    },
    {
      question: "Is the usage of Flutter mandatory for MADHACK 3.0 projects?",
      answer: "No, it's not mandatory to use Flutter for your projects in MadHack 3.0. While we have Flutter sessions to help you, you are free to use other frameworks or technologies that best suit your project requirements.",
    },
    // Add more FAQs here
  ];

  // State to track the open question
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  // Function to handle question clicks
  const toggleAnswer = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="w-[80vw] mx-auto py-10">
      {/* FAQ Heading */}
      <h1 className="text-white font-bold text-5xl pt-24 ml-10">FAQ</h1>
      <div className="w-[200px] h-2 bg-blue-700 mt-10"></div>

      {/* FAQ List */}
      <div className="mt-10 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            {/* FAQ Question */}
            <div 
              className="cursor-pointer flex justify-between items-center"
              onClick={() => toggleAnswer(index)}
            >
              <h2 className="text-2xl font-semibold text-blue-700">{faq.question}</h2>
              <span className="text-2xl text-white">{openQuestionIndex === index ? '-' : '+'}</span>
            </div>

            {/* FAQ Answer (conditionally rendered) */}
            {openQuestionIndex === index && (
              <p className="mt-2 text-lg text-gray-400">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqsection;
