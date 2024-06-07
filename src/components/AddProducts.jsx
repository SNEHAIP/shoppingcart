import React from 'react'
import NavBar from './NavBar'

const AddProducts = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="form-label">Productid</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="form-label">Product Name</label>
                    <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="form-label">price</label>
                    <input type="number" className="form-control" />


                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="form-label">Manufactured Date</label>
                    <input type="date" name="" id="" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="form-label">Description</label>
                    <textarea name="" id="" className="form-control"></textarea>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button class="btn btn-success">SUMBIT</button>
                    </div>
                </div>
            </div>
        </div>
    </div></div>
  )
}

export default AddProducts