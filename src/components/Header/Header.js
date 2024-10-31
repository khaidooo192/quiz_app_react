import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';


const Header = () => {

    const navigate = useNavigate();

    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const account = useSelector(state => state.user.account);

    const handleLogin = () => {
        navigate('/login')
    }
    return (
        <Navbar bg='light' expand="lg" >
            <Container>
                {/* <Navbar.Brand href="">OK QUIZ</Navbar.Brand> */}
                <NavLink to='/' className='navbar-brand'>OK QUIZ</NavLink>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/' className='nav-link'>Home</NavLink>
                        <NavLink to='/users' className='nav-link'>Users</NavLink>
                        <NavLink to='/admins' className='nav-link'>Admin</NavLink>


                    </Nav>
                    <Nav>
                        {isAuthenticated === false ?
                            <>
                                <button className='btn-login'
                                    onClick={() => handleLogin()}
                                >Login</button>
                                <button className='btn-signup'
                                    onClick={() => { navigate('/register') }}
                                >Sign up</button>
                            </>
                            :
                            <NavDropdown title={account.username ? account.username : 'User'} id="basic-nav-dropdown">
                                <NavDropdown.Item>Logout</NavDropdown.Item>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </NavDropdown>
                        }



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;