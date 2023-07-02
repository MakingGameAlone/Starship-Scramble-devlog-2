import React from 'react';
import PageHeader from '../Component/PageHeader';
import Paragraph from '../Component/FeatureComp/Paragraph'
import Footer from '../Component/Footer';

function Feature() {
  return (
    <>
        <PageHeader 
            src={process.env.PUBLIC_URL +'/images/MarchDrawing.png'}
        />
        <Paragraph />
        <Footer />
    </>
  )
}

export default Feature