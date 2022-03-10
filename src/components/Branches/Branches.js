import React from 'react';
import "./Branches.css";

const Branches = () => {
    return (
       <div className='branches-bg'>
            <div id='branches' className='container branches-container'>
            <h5 className='text-center text-primary'>BECOME A PART OF US</h5>
            <h2 className='text-center fw-bold mb-3'>OUR BRANCHES</h2>
            <h3 className='text-center mb-5 fw-bold'>Lalbagh Parcel & Courier Services Ltd All Branches</h3>

        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card h-100 branches-card">
                    <div className="card-body">
                        <h2 className="card-title text-center text-primary border rounded-pill p-2">HEAD OFFICE(DHAKA)</h2>
                        <h3 className='text-center fw-bold'>3/2, Purana Paltan,</h3>
                        <p className='text-center fst-italic fs-5'>Shahid Syed Nazrul Islam Sharani</p>
                        <p className='text-center fst-italic fs-5'>Dhaka – 1000</p>
                        <p className='text-center fst-italic fs-5'>Phone: 9558347</p>
                        <p className='text-center fst-italic fs-5'>Mobile: 01705-408109/13.</p>
                        <p className='text-center fst-italic fs-5'>E-mail: info@bangladeshparcel.com</p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card h-100 branches-card">
                <div className="card-body">
                        <h2 className="card-title text-center text-primary border rounded-pill p-2">BARISAL OFFICE</h2>
                        <p className='text-center fw-bold'>Barisal Sadar, Barisal.</p>
                        <p className='text-center fst-italic fs-5'>Phone: 966797</p>
                        <p className='text-center fst-italic fs-5'>Mobile: 01705-408141/42</p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card h-100 branches-card">
                <div className="card-body">
                <h2 className="card-title text-center text-primary border rounded-pill p-2">RAJSHAHI OFFICE</h2>
                        <p className='text-center fw-bold'>Rajshahi Sadar, Rajshahi.</p>
                        <p className='text-center fst-italic fs-5'>Phone: 966713</p>
                        <p className='text-center fst-italic fs-5'>Mobile: 019305-408150/52</p>
                </div>
                </div>
            </div>

            <div className="col">
                <div className="card h-100 branches-card">
                <div className="card-body">
                <h2 className="card-title text-center text-primary border rounded-pill p-2">CHITTAGONG</h2>
                        <p className='text-center fw-bold'>Nahar Bhaban (GF), 594/861, D. T.</p>
                        <p className='text-center fst-italic fs-5'>Road, Kadomtoli, Chittagong</p>
                        <p className='text-center fst-italic fs-5'>Mobile: 01705-408173/74</p>
                </div>
                </div>
            </div>

            <div className="col">
                <div className="card h-100 branches-card">
                <div className="card-body">
                <h2 className="card-title text-center text-primary border rounded-pill p-2">SYLHET</h2>
                        <p className='text-center fw-bold'>Kazi Nibash, East Zindabazar, Sylhet</p>
                        <p className='text-center fst-italic fs-5'>Gobinda Rss Sylhet Road, Barrier,</p>
                        <p className='text-center fst-italic fs-5'>Mobile: 01705-408175/76/77/78</p>
                </div>
                </div>
            </div>

            <div className="col">
                <div className="card h-100 branches-card">
                <div className="card-body">
                <h2 className="card-title text-center text-primary border rounded-pill p-2">COMILLA OFFICE</h2>
                        <p className='text-center fw-bold'>Hera Mension, Laksam Road,</p>
                        <p className='text-center fst-italic fs-5'>Kandirpar, Comilla</p>
                        <p className='text-center fst-italic fs-5'>Mobile: 01705-408192/93</p>
                </div>
                </div>
            </div>

            </div>

        </div>
       </div>
    );
};

export default Branches;