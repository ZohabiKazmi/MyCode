import React from 'react';
import './CampusesSection.css'; // Ensure this file contains the necessary CSS

const campuses = [
  {
    id: 1,
    name: 'Muzaffarabad Campus',
    status: 'Coming Soon',
    image: 'url-to-city-campus-image.jpg', // Update this URL with the actual image URL
  },
  {
    id: 2,
    name: 'Chella Campus',
    status: 'Coming Soon',
    image: 'url-to-chella-campus-image.jpg', // Update this URL with the actual image URL
  },
  {
    id: 3,
    name: 'KAC Campus',
    status: 'Live Now',
    image: 'url-to-kac-campus-image.jpg', // Update this URL with the actual image URL
  },
  {
    id: 4,
    name: 'Neelum Campus',
    status: 'Coming Soon',
    image: 'url-to-neelum-campus-image.jpg', // Update this URL with the actual image URL
  },
  {
    id: 5,
    name: 'Jehlum Campus',
    status: 'Coming Soon',
    image: 'url-to-jehlum-campus-image.jpg', // Update this URL with the actual image URL
  },
];

const CampusesSection = () => {
  return (
    <section className="campuses-section">
      <div className="campuses-grid">
        {campuses.map((campus) => (
          <div
            key={campus.id}
            className="campus-card"
            style={{ backgroundImage: `url(${campus.image})` }} 
          >
            <div className={`badge ${campus.status === 'Live Now' ? 'live' : 'coming-soon'}`}>
              {campus.status}
            </div>
            <div className="campus-info">
              <h3>{campus.name}</h3>
              <button className="virtual-tour-button">Virtual Tour</button>
            </div>
          </div>
        ))}
        {/* Additional informational card */}
        <div className="campus-card info-card">
          <div className="campus-info">
            <h3>Explore our Campuses</h3>
            <p>Discover the diverse campuses of our university, each offering unique facilities and experiences.</p>
            <button className="view-more-button">View More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusesSection;
