import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import axios from 'axios';

function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setcurrentPage] = useState(1);


    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const [itemsPerPage] = useState(8);
    const fetchData = async () => {
        setLoading(true);
        const setpaging = (currentPage - 1) * itemsPerPage;
        const res = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${setpaging}&limit=${itemsPerPage}`);
        setData(res.data);
        setLoading(false);
    };

    const totalItems = 32;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const changepagehandel = (pageNumber) => {
        setcurrentPage(pageNumber);
    };

    return (
        <div style={{ overflowX: "hidden" }}>
            <Header />
            <div className='row mt-5'>
                {loading ? (
                    <div className='d-flex justify-content-center'>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    data.map((item) => (
                        <div key={item.id} className="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
                            <div className="card card-span text-white rounded-3">
                                <img className="img-fluid rounded-3" src={item.images[0]} alt="Product" />
                                <div className="card-body ps-0">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="flex-1 ms-3">
                                            <h5 className="mb-0 fw-bold text-dark" style={{ width: "300px" }}>{item.id}</h5>
                                            <h5 className="mb-0 fw-bold text-dark" style={{ width: "300px" }}>{item.title}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
                <div className='d-flex justify-content-center mt-5'>
                    <nav aria-label="Page navigation">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" onClick={() => changepagehandel(currentPage - 1)} disabled={currentPage === 1}>Previous</a>
                            </li>
                            {[...Array(totalPages).keys()].map((page) => (
                                <li className={`page-item ${page + 1 === currentPage ? 'active' : ''}`}>
                                    <a className="page-link" href="#" onClick={() => changepagehandel(page + 1)}>
                                        {page + 1}
                                    </a>
                                </li>
                            ))}
                            <li className="page-item">
                                <a className="page-link" href="#" onClick={() => changepagehandel(currentPage + 1)} disabled={currentPage === totalPages}>Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Home;
