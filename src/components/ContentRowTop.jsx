import React from 'react'
import '../assets/css/app.css'
import Membership from './Membership'
import ContentRowInfo from './ContentRowInfo'
import membershipsData from '../data/memberships'
import usersData from '../data/users'

const ContentRowTop = () => {
  let memberships = membershipsData;
  let users = usersData;

  
  return (
    <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
    </div>
  
    {/* <!-- Content Row Movies--> */}

        <ContentRowInfo memberships={memberships} users={users}/>
    
    {/* <!-- End movies in Data Base --> */}
    

    {/* <!-- Content Row Last Movie in Data Base --> */}
    <div className="row">
      {/* <!-- Last Movie in DB --> */}
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">Mejor membresia de la base de datos</h5>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img className="img-fluid px-3 px-sm-4 mt-3 mb-4"  src="../assets/images/mandalorian.jpg" alt=" Star Wars - Mandalorian " />
            </div>
            <p>detales de la membresia</p>
            <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
          </div>
        </div>
      </div>
      {/* <!-- End content row last movie in Data Base --> */}

      {/* <!-- Genres in DB --> */}
      <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">membresias</h5>
          </div>

          <div className="card-body">
            <div className="row">
          {
            memberships.map((membership, index )=>{
              return(
              <Membership name={membership.name} id={membership.id} key={index}/>
              )
            })}
          
            
              

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContentRowTop