import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Header() {

    const redirect = useNavigate()

    const userlogout = () => {
        localStorage.removeItem('wid')
        localStorage.removeItem('uname')
        toast.success('Logout succesfully')
        redirect('/signup')
        return false;
    }

    return (
        <div>
            <nav className="navbar-expand-lg navbar navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to='/'><img src="Img/buildings.png" alt="" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link  active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Service
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Service-1</a></li>
                                    <li><a className="dropdown-item" href="#">Service-2</a></li>
                                    <li><a className="dropdown-item" href="#">Service-3</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Blog</a>
                            </li>
                        </ul>
                        <form className="d-flex me-2">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success text-light" type="submit">Search</button>
                        </form>

                        {(() => {
                            if (localStorage.getItem('wid')) {
                                return (
                                    <>
                                        <div class="dropdown rounded-5 mt-1" >
                                            <div type="button" class="dropdown-toggle text-light" data-bs-toggle="dropdown">
                                                <NavLink className='me-3 text-decoration-none'>

                                                    <span className='text-light mt-1 ms-2'>
                                                        <b>{localStorage.getItem('uname')}</b>
                                                    </span>

                                                </NavLink>
                                            </div>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" onClick={userlogout}>Log out</a></li>
                                            </ul>
                                        </div>
                                    </>
                                )
                            }
                            else {

                                return (
                                    <>
                                        <ul className="navbar-nav d-flex">
                                            <li className="nav-item">
                                                <NavLink className="nav-link active" aria-current="page" to='/signup'>Sign up</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link active" aria-current="page" to='/login'>Login</NavLink>
                                            </li>
                                        </ul>


                                    </>
                                )


                            }
                        })()}

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header