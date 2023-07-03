import React from 'react';
import PageHeader from '../Component/PageHeader';
import Paragraph from '../Component/FeatureComp/Paragraph'
import Footer from '../Component/Footer';

function Feature() {
  return (
    <>
        <PageHeader 
            src={process.env.PUBLIC_URL +'/images/MarchDrawing.png'}
            title = {"Features Overview"}
            subtitle = {"A peek at mechanic currently in Starship Scramble!"}
        />
        <Paragraph />
        <Footer />
    </>
  )
}

export default Feature