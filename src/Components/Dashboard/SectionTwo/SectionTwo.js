import image2 from '../../../Images/image2.png';
import { BsFillBellFill} from "react-icons/bs";


function SectionTwo() {

  return (
    <div className="design-team-section bg-white">
      <p className='bg-white text-center'>Selected</p>
      <h4 className='text-center mb-4'>Design Team</h4>
      <hr />
      <div className='text-center mt-4'>
      <img src={image2} alt="img" className='img-fluid' width={250} />
      </div>
        <div className='mt-3'>
          <h4 className='fw-bolder'>Projects</h4>
          <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card mx-2">
            <div className="card-body">
              <p className="card-text text-muted">Total</p>
              <h5 className="card-title">148</h5>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card mx-2">
            <div className="card-body">
              <p className="card-text text-muted">Completed</p>
              <h5 className="card-title">56</h5>
            </div>
          </div>
        </div>


        </div>
          <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card mx-2">
            <div className="card-body">
              <p className="card-text text-muted">In Process</p>
              <h5 className="card-title">76</h5>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card mx-2">
            <div className="card-body">
              <p className="card-text text-muted">Waiting</p>
              <h5 className="card-title">16</h5>
            </div>
          </div>
        </div>


        </div>
   </div>
   <hr />
   <div className="mt-5 card bg-light">
      <div className="card-body d-flex align-items-center mx-1">
        <div className="me-3">
         <BsFillBellFill  size={40} color='blue'/>
          <i className="bi bi-emoji-smile"></i>
        </div>
        <div >
          <h5 className="card-title">Declaration</h5>
          <p className="card-text">Internal messages </p>
        </div>
      </div>
    </div>
    <br /><br /><br />
    </div>
  );
}

export default SectionTwo;
