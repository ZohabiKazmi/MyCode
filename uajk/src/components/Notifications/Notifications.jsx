import React, { useState } from 'react';
import './Notifications.css';

import { FaRegNewspaper, FaRegCalendarCheck, FaRankingStar, FaInfo } from 'react-icons/fa6';
import notification1 from '../../assets/notifications/notification1.jpg'
import notification2 from '../../assets/notifications/notification2.jpg'
import notification3 from '../../assets/notifications/notification3.jpg'
import notification4 from '../../assets/notifications/notification4.jpg'

const steps = [
    {
        id: 1,
        title: 'General News',
        description: 'Stay updated with the latest news and events happening around the university and beyond.',
        icon: <FaRegNewspaper/>, 
        image: notification1,
        text: [
            'Corrigendum Revised Admission',
            'Due to current weather conditions, the UGAT Test date has been changed to 7th September 2024.',
            'AJK Bar Council Leaders Applaud AJK Efforts in Legal Education',
            'Annual Report 2022-23',
            'UAJK Shines at SEE Pakistan 2024',
            'Admission Notice Fall 2024.',
            'Apply online For Admission',
            'Position Vacant – (MPhil Studentship under HEC NRPU Project # 17373, Year-II)',
            'Deserving Students From The University of Azad Jammu & Kashmir Have Been Awarded Scholarships.',
            'The University of Azad Jammu & Kashmir has RE-SCHEDULED to conduct UGAT (General) on Saturday, 31st August 2024.',
            'UAJK Launches Dynamic New Website with Advanced Features.'
        ]
    },
    {
        id: 2,
        title: 'Examination Alerts',
        description: 'Get timely notifications on exam schedules, results, and important examination guidelines.',
        icon: <FaRegCalendarCheck/>,
        image: notification2,
        text: [
            'Press Release Regarding Practical Examination on 30 and 31 August.',
            'Online Result For MA Political Science-Urdu-English Supplementary P-I-II 2022 / Annual Examination 2023',
            'Online Result For MA History Islamic Studies M.Sc Economics P- I & II Supply 22 Annual / 2023'
        ]
    },
    {
        id: 3,
        title: 'Emergency Announcements',
        description: 'Receive critical alerts regarding emergencies, campus safety, and urgent updates.',
        icon: <FaInfo/>,
        image: notification3,
        text: [
            'Campus Power Outage',
            'Road Sliding alert for KAC students',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        ]
    },
    {
        id: 4,
        title: 'Campus Updates',
        description: 'Never miss out on exciting campus events, workshops, and extracurricular activities.',
        icon: <FaRankingStar/>,
        image: notification4,
        text: [
            'Seminar at UAJK Condemns Revocation of Jammu & Kashmir’s Special Status.',
            'Cultural Festival 2024 at University Main Auditorium',
            'Guest Lecture Series: Innovations in Sustainable Development',
            'Career Fair 2024, department of CS&IT',
            'Pakistan’s Independence Day – A Message of Freedom For Kashmir',
            'Convocation 2024 Highlights',
            'Neelum Campus Celebrates the Opening of Sophisticated Classrooms.',
        ]
    },
];

const Notifications = () => {
    const [activeStep, setActiveStep] = useState(steps[0]); // Default to the first step

    return (
        <section className="z_main_container">
            <div className="z_notifications-container">
                {/* Left Side: Image and Text */}
                {/* <div className="z_left-side" style={{ backgroundImage: `url(${activeStep.image})` }}> */}
                <div className="z_left-side" style={{ backgroundColor: '#0093DD' }}>
                    <ul className="z_left-side-text">
                        {activeStep.text.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Right Side: Buttons with Title, Description, and Icon */}
                <div className="z_right-side">
                    <div className="z_main_title">
                        <h2>Notifications</h2>
                        <p>Never Miss a Beat with UAJK Alerts!</p>
                    </div>
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className={`z_button-div ${activeStep.id === step.id ? 'z_active' : ''}`}
                            onClick={() => setActiveStep(step)}
                        >
                            <div className="z_button-icon">{step.icon}</div>
                            <div className="z_button-content">
                                <h3 className="z_button-title">{step.title}</h3>
                                <p className="z_button-description">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Notifications;
