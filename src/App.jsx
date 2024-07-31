import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from "./store/authSlice"
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userdata)=>{
      if(userdata){
        dispatch(login(userdata))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[])

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-bettween bg-gray-500">
      <div className='w-full block'>
        <Header/>
        <main>
          TODO: <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
