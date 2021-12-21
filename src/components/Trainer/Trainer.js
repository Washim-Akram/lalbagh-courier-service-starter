import React from 'react';
import trainer1 from "../../images/Trainer/Trainer1.png";
import trainer2 from "../../images/Trainer/Trainer2.png";
import trainer3 from "../../images/Trainer/Trainer3.png";
import "./Trainer.css";



const Trainer = () => {
    return (
        <div className='trainer-bg'>
          <div id='trainer' className='container trainer-container'>
            <h5 className='text-center text-primary'>YOUR BEST PARTNER</h5>
            <h2 className='text-center fw-bold mb-3'>CHOOSE YOUR TRAINER</h2>
            <p className='text-center mb-5 fw-bold'>We are a team of experienced people, nutrition, sports and fitness passionate experts<br/> with talent and knowledge unsurpassed in the industry. Get to know us.</p>
            <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100 trainer-card">
      <img src={trainer1} className="card-img-top" alt="trainer 1"/>
      <div className="card-body text-center">
        <h5 className="card-title fw-bold fst-italic">ANOWAR HOSSAIN</h5>
        <p className="card-text fw-bold fst-italic fs-6">Fitness Trainer</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card h-100 trainer-card">
      <img src={trainer2} className="card-img-top" alt="trainer 2"/>
      <div className="card-body text-center">
        <h5 className="card-title fw-bold fst-italic">MICHEL ANDREW</h5>
        <p className="card-text fw-bold fst-italic fs-6">Body Trainer</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card h-100 trainer-card">
      <img src={trainer3} className="card-img-top" alt="trainer 3"/>
      <div className="card-body text-center">
        <h5 className="card-title fw-bold fst-italic">LINDA CATHERINE</h5>
        <p className="card-text fw-bold fst-italic fs-6">Health Trainer</p>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Trainer;