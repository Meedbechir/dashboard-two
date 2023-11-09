import React from 'react'
import './SectionOne.css'
import { ArrowLeft } from 'react-bootstrap-icons'
import { ArrowRight } from 'react-bootstrap-icons'
import BannerImg from "../../../Images/image.png";
import Group17 from '../../../Images/Group17.png'
import Group18 from '../../../Images/Group18.png'
import Group19 from '../../../Images/Group19.png'
import Group20 from '../../../Images/Group20.png'
import Group21 from '../../../Images/Group21.png'
import Group22 from '../../../Images/Group22.png'
import user2 from '../../../Images/user2.jpg'


function SectionOne() {
    return (
      <>
        <div className="container collections">
          <div className="container-fluid pt-5">
            <div className="d-flex justify-content-between">
              <p className="text-lead fs-4">Projects</p>
              <button
                type="button"
                class="btn btn-link text-decoration-none text-dark"
              >
                View All <ArrowRight />
              </button>
            </div>
          </div>
          <div className="row my-3">
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
  <div className="card text-center w-100">
    <img src={user2} className="card-img-top rounded-circle mx-auto mt-3" alt="Profile" style={{ width: '160px' }} />
    <div className="card-body">
      <h5 className="card-title">Henry Paulista</h5>
      <p className="card-text">henry@email.com</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">----------</li>
    </ul>
    <div className="card-footer">
      <small className="text-muted">Senior Director</small>
    </div>
  </div>
</div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
  <div className="card text-center w-100">
    <img src={user2} className="card-img-top rounded-circle mx-auto mt-3" alt="Profile" style={{ width: '160px' }} />
    <div className="card-body">
      <h5 className="card-title">Henry Paulista</h5>
      <p className="card-text">henry@email.com</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">----------</li>
    </ul>
    <div className="card-footer">
      <small className="text-muted">Senior Director</small>
    </div>
  </div>
</div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
  <div className="card text-center w-100">
    <img src={user2} className="card-img-top rounded-circle mx-auto mt-3" alt="Profile" style={{ width: '160px' }} />
    <div className="card-body">
      <h5 className="card-title">Henry Paulista</h5>
      <p className="card-text">henry@email.com</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">----------</li>
    </ul>
    <div className="card-footer">
      <small className="text-muted">Senior Director</small>
    </div>
  </div>
</div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mt-5">
  <div className="card text-center w-100">
    <img src={user2} className="card-img-top rounded-circle mx-auto mt-3" alt="Profile" style={{ width: '160px' }} />
    <div className="card-body">
      <h5 className="card-title">Henry Paulista</h5>
      <p className="card-text">henry@email.com</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">----------</li>
    </ul>
    <div className="card-footer">
      <small className="text-muted">Senior Director</small>
    </div>
  </div>
</div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mt-5">
  <div className="card text-center w-100">
    <img src={user2} className="card-img-top rounded-circle mx-auto mt-3" alt="Profile" style={{ width: '160px' }} />
    <div className="card-body">
      <h5 className="card-title">Henry Paulista</h5>
      <p className="card-text">henry@email.com</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">----------</li>
    </ul>
    <div className="card-footer">
      <small className="text-muted">Senior Director</small>
    </div>
  </div>
</div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mt-5">
  <div className="card text-center w-100">
    <img src={user2} className="card-img-top rounded-circle mx-auto mt-3" alt="Profile" style={{ width: '160px' }} />
    <div className="card-body">
      <h5 className="card-title">Henry Paulista</h5>
      <p className="card-text">henry@email.com</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">----------</li>
    </ul>
    <div className="card-footer">
      <small className="text-muted">Senior Director</small>
    </div>
  </div>
</div>

</div>




          
         
        </div>
      </>
    );
}

export default SectionOne