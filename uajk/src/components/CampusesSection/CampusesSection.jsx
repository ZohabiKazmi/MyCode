import React from 'react';
import './CampusesSection.css';

import chehla from '../../assets/campuses/chehla-campus.jpg';
import jehlum from '../../assets/campuses/jehlum-campus.jpg';
import neelum from '../../assets/campuses/neelum-campus.jpg';
import main from '../../assets/campuses/main-campus.jpg';
import kac from '../../assets/campuses/kac-campus.jpg';

// Array of campuses with their details
const campuses = [
  {
    id: 1,
    name: 'Muzaffarabad Campus',
    status: 'Coming Soon',
    image: chehla,
    label: 'View More'
  },
  {
    id: 2,
    name: 'Chella Campus',
    status: 'Coming Soon',
    image: main,
    label: 'View More'
  },
  {
    id: 3,
    name: 'KAC Campus',
    status: 'Live Now',
    image: kac,
    label: 'Virtual Tour'
  },
  {
    id: 4,
    name: 'Neelum Campus',
    status: 'Coming Soon',
    image: neelum,
    label: 'View More'
  },
  {
    id: 5,
    name: 'Jehlum Campus',
    status: 'Coming Soon',
    image: jehlum,
    label: 'View More'
  }
];

const CampusesSection = () => {
  return (
    <div className="campus-section-main-container">
      <section className="campuses-section">
        <div className="z_campuses_title">
          <h2>University Campuses</h2>
          <p>Five Locations, One Commitment to Excellence</p>
        </div>
        <div className="campuses-grid">

          {/* Additional informational card */}
          <div className="campus-card info-card">
            <div className="campus-info-only">
              <div>
                <h3>Explore our Campuses</h3>
                <p>Discover the diverse campuses of our university, each offering unique facilities and experiences. Discover the diverse campuses of our university, each offering unique facilities and experiences. Discover the diverse campuses of our university, each offering unique facilities and experiences. Discover the diverse campuses of our university, each offering unique facilities and experiences. Discover the diverse campuses of our university, each offering unique facilities and experiences. </p>
              </div>
              {/* <button className="view-more-button">View More</button> */}
            </div>
          </div>

          {/* Campuses Cards, takes value from object */}

          {campuses.map((campus) => (
            <div key={campus.id} className="campus-card">
              {/* Image container for zoom effect */}
              <div
                className="campus-image-container"
                style={{ backgroundImage: `url(${campus.image})` }}
              ></div>

              {/* Campus information container */}
              <div className="campus-info">
                <h3>{campus.name}</h3>
                <button className="virtual-tour-button">{campus.label}</button>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
};

export default CampusesSection;
