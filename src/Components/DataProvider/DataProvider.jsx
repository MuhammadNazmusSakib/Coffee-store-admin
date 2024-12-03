import React, { useEffect, useState } from 'react'
import { Contex } from './Contex'
import { auth } from '../SignIn&SignUp/Firebase/firebase.init'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'


const DataProvider = ({ children }) => {

  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unSubscribe()
    }
  }, [])


  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

    const logOut = () => {
    return signOut(auth)
  }

  const data = {
    user, loading, createUser, signInUser, logOut
  }

  return (
    <Contex.Provider value={data}>
      {children}
    </Contex.Provider>
  )
}

export default DataProvider