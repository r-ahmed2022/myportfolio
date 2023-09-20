import './Recommendation.scss';
import Experience from './Experience';
import recommendations from './recommendationsData';

export const Recommendation = ({ setMenuState }) => {
  const closeDialog = (e) => {
    if (e.target === e.currentTarget) {
      setMenuState(false);
    }
  };
  return (
    <div className="recommendation" id="recommendation" onClick={(e) => closeDialog(e)}>

      <div className="left" onClick={(e) => closeDialog(e)}>
        <h1>Recommendations</h1>
      </div>
      <div className="right" onClick={(e) => closeDialog(e)}>
        <ul className="experiences">
          {
              recommendations.map((recommendation) => <Experience recommendation={recommendation} key={recommendation.id} id={recommendation.id} />)
             }
        </ul>
        <footer><a href="#contact"><i className="fa-solid fa-angle-down downarrow" /></a></footer>

      </div>
    </div>
  );
};
