import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Contex } from './DataProvider/Contex'

const Navbar = () => {
  const {user, logOut} = useContext(Contex)

  return (
    <div className='py-5 flex place-content-around'>

      <Link to="/"><button className='btn btn-primary font-bold'>Home</button></Link>
      <Link to="/add-coffee"><button className='btn btn-primary font-bold'>Add Coffee</button></Link>
      <Link to="/users"><button className='btn btn-primary font-bold'>Users</button></Link>

      {
        user ?
          <button onClick={() => logOut()} className='btn btn-primary font-bold'>Sign Out</button>
          :
          <div className='flex gap-3'>
            <Link to="/signUp"><button className='btn btn-primary font-bold'>SignUp</button></Link>
            <Link to="/signIn"><button className='btn btn-primary font-bold'>SignIn</button></Link>
          </div>
      }

      {/* <Link to="update-coffee"><button className='btn btn-primary font-bold'>Upadate Coffee</button></Link> */}
    </div>
  )
}

export default Navbar