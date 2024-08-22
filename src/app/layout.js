import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import dbConnection from './utils/dbconnects'
import Header from './component/header';


await dbConnection();

const layout = ({children}) => {
    return (
      <>
        <html>
          <body>
            <main className="">
              <Header />
              <div className='container'>
                {children}
              </div>
            </main>
          </body>
        </html>
      </>
    )
  }

export default layout