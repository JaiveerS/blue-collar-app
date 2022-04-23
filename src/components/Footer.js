import React from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {
  MDBFooter,
  // MDBContainer,
  // MDBCol,
  // MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='bg-light text-center text-white'>
      <div className='container p-4 pb-0'>
        <section className='mb-4'>
          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </a>

          {/* <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </a> */}

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </a>
          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://www.instagram.com/ontrenovation/'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </a>

          {/* <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </a> */}

          {/* <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </a> */}
        </section>
      </div>

      <div className='text-center p-3' style={{ backgroundColor: '#921010' }}>
        © 2020 Copyright: 
        <a className='text-white' href='/'>
           Ontario Renovations
        </a>
      </div>
    </MDBFooter>
  );
}