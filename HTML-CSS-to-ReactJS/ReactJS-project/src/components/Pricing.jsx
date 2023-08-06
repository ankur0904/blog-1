import React from "react";

function Pricing(){
    return (
        <div className="container">
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Free</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$0<small className="text-body-secondary fw-light"></small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Only for new users</li>
                  <li>Weight under 5kg</li>
                  <li>Free for maximum 3 time only</li>
                  <li>No insurance</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Pro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$150<small className="text-body-secondary fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Maximum 20 import/export</li>
                  <li>Weight under 50kg</li>
                  <li>Priority email support</li>
                  <li>Insurance included</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal">Enterprise</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$290<small className="text-body-secondary fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Maximum 50 import/export</li>
                  <li>Weight under 200kg</li>
                  <li>Phone and email support</li>
                  <li>Insurance included</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Pricing;