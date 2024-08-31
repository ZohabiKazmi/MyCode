import React from 'react';
import './EventCards.css';

import event1 from '../../assets/events/event1.jpg';
import event2 from '../../assets/events/event2.jpg';
import event3 from '../../assets/events/event3.jpg';
import event4 from '../../assets/events/event4.jpg';

// Sample data for the events; replace with your dynamic data if needed
const events = [
    {
        image: event2,
        location: 'Neelum Campus Development.',
        title: 'Celebrating the Opening of Sophisticated Classrooms',
        description: 'Newly constructed, state-of-the-art classrooms and staffrooms, marking a significant milestone in the educational development',
    },
    {
        image: event1,
        location: 'First Position',
        title: 'UAJK Shines at SEE Pakistan 2024!',
        description: 'Our Innovators have secured First Position at the SEE Pakistan WSC 2024 with their groundbreaking startup, "Smart AI Virtual Hire"!',
    },
    {
        image: event4,
        location: '20th Convocation',
        title: 'Convocation 2024 Highlights',
        description: 'Relive the unforgettable moments from the 20th Convocation of the University of Azad Jammu and Kashmir (UAJK)!',
    },
    {
        image: event3,
        location: 'Kashmiri Institute of Economics',
        title: 'Conference on the economy of Azad Jammu and Kashmir',
        description: 'Honoring Distinguished Dignitaries: Vice-Chancellor Prof. Dr. Muhammad Kaleem Abbasi Presents Soucenirs',
    },
];

const EventCards = () => {
    return (
        <div className="event-main-container">
            <section className="event-section">
                <header className="event-header">
                    <h2>Current Events</h2>
                    <p>Stay Informed with the Latest Updates from UAJK!</p>
                </header>
                <div className="event-cards-container">
                    {events.map((event, index) => (
                        <div key={index} className={`event-card card-${index + 1}`}>
                            <img src={event.image} alt={event.title} className="event-image" />
                            <div className="event-details">
                                <h3 className="event-location">{event.location}</h3>
                                <p className="event-title">{event.title}</p>
                                <p className="event-description">{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default EventCards;
