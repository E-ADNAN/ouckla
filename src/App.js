import ouckla from './ouckla.png';
import osoon from './osoon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className="wrapper">
        <div className="container">
            <section className="section-coming-soon">
            <div className="logo">
                    <img src={ouckla} className="main-logo" alt="Ouckla logo"/>
                </div>
             <div className="coming-soon">
                    <img src={osoon} alt="Opening soon"/>
                </div>
                <div className="copyright">
                    <strong>Ouckla 2021.</strong> All rights reserved.
                </div>
            </section>
        </div>
    </div>
     
      {/* */}
    </div>
  );
}

export default App;
