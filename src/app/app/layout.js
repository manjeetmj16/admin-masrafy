import React from 'react'
import Header from '../component/header'
import dbConnection from '../utils/dbconnects'

await dbConnection();

const layout = ({children}) => {
    return (
      <>
          <main className="">
              <Header/>
              <div className='container'>
                {children}
              </div>
          </main>
      </>
    )
  }

export default layout