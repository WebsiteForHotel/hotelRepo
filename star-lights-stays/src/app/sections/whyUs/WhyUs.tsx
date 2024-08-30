import React from 'react';
import styles from './WhyUs.module.scss';

interface WhyUsCardProps {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

const WhyUsCard: React.FC<WhyUsCardProps> = ({ icon, title, description, bgColor }) => {
  return (
    <div className={styles.card} style={{ backgroundColor: bgColor }}>
      <div className={styles.iconContainer}>
        <img src={icon} alt={`${title} icon`} className={styles.icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

const WhyUs: React.FC = () => {
  const benefits = [
    {
      icon: '/icons/luxury.svg',
      title: 'Luxury Rooms',
      description: 'Experience comfort and style in our spacious luxury rooms.',
      bgColor: '#FFC107',
    },
    {
      icon: '/icons/spa.svg',
      title: 'Spa & Wellness',
      description: 'Relax and rejuvenate with our top-notch spa services.',
      bgColor: '#FF5722',
    },
    {
      icon: '/icons/dining.svg',
      title: 'Fine Dining',
      description: 'Savor gourmet meals crafted by world-class chefs.',
      bgColor: '#03A9F4',
    },
    {
      icon: '/icons/location.svg',
      title: 'Prime Location',
      description: 'Stay close to the city’s top attractions and shopping areas.',
      bgColor: '#8BC34A',
    },
  ];

  return (
    <section className={styles.whyUsSection}>
      <h2 className={styles.sectionTitle}>Why Choose Us</h2>
      <div className={styles.cardsContainer}>
        {benefits.map((benefit, index) => (
          <WhyUsCard
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            bgColor={benefit.bgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
