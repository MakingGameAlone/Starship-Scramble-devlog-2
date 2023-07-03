import React from 'react'
import PageHeader from '../Component/PageHeader';
import Footer from '../Component/Footer';

function Study() {
  return (
    <>
    <PageHeader 
        src={process.env.PUBLIC_URL +'/images/MarchDrawing.png'}
        title = {"Study and Research"}
        subtitle = {"My motivation to start the projects and other studies along the way,"}
    />
    <Footer />
</>
  )
}

export default Study