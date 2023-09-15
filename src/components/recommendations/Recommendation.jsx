import './Recommendation.scss'
import Experience from './Experience'
const recommendations = [
  {
      id: 1,
      name: "Jonah Wambua",
      image: "images/jonah.jpeg",
      profession: "Software Engineer",
      place: "Naroibi,Kenya",
      comment: "Riyaz embodies a growth mindset that fuels his continuous quest for improvement and keeping up with the latest industry trends and technologies. He is undeniably a genuine problem solver, and I am highly confident that his passion for coding will lead to numerous achievements in the field."
  },
  {
      id: 2,
      name: "Joy Phoebe Onyando",
      image: "images/joy.jpeg",
      profession: "Full-stack Developer",
      place: "Kenya",
      comment: "Throughout our time working together at Microverse, Riyaz consistently demonstrated a deep understanding of various platforms, tools and programming languages like Ruby, React, Redux and JavaScript."
  },
  {
      id: 3,
      name: "Mudasir Sherwani",
      image: "images/mudasir.jpeg",
      profession: "Full-stack Developer",
      place: "Pakistan",
      comment: "Riyaz possesses a unique blend of technical expertise and creative problem-solving skills, making him a valuable asset to any development team."
  },
  {
      id: 4,
      name: "Samuel Ntow kyere",
      image: "images/samuel-tikri.jpeg",
      profession: "Social Entrepreneur | Full-Stack Developer",
      place: "Ghana",
      comment: "Riyaz has a rare ability to understand and explain complex technical concepts in a clear and actionable way"
  },
  {
      id: 5,
      name: "Hamayoun Ali Babur ",
      image: "images/hamayoun.jpeg",
      profession: "Full-Stack Developer",
      place: "Afghanistan",
      comment: "Beyond his technical expertise, Riyaz embodies a growth mindset that fuels his continuous quest for improvement and keeping up with the latest industry trends and technologies"
  }
]

export const Recommendation = () => {

  return (
    <div className='recommendation' id="recommendation">
     
     <div className="left">
        <h1>Recommendation</h1>
       
    </div>
    <div className="right">
        <div className="experiences">
          <ul>
             {
            //   recommendations.map((recommendation) => <Experience recommendation={recommendation} key={recommendation.id} />)
             }
          </ul>
         </div>

      </div>
    </div>
  )
}
