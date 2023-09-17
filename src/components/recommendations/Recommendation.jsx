import './Recommendation.scss'
import Experience from './Experience'
import recommendations from './recommendationsData'

export const Recommendation = () => {

  return (
    <div className='recommendation' id="recommendation">
     
     <div className="left">
        <h1>Recommendations</h1>
    </div>
    <div className="right">
          <ul className="experiences">
             {
              recommendations.map((recommendation) => <Experience recommendation={recommendation} key={recommendation.id} id={recommendation.id}/>)
             }
          </ul>
          <footer><a href="#contact"><i class="fa-solid fa-angle-down downarrow"></i></a></footer>

      </div>
    </div>
  )
}
