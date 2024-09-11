import React from 'react';
import './cay.css';
import Card from './Components/Card';

function App() {
  const cardData = [
    {
      title: 'Sabine Callas',
      imageUrl: 'https://i.pinimg.com/564x/ee/67/04/ee67044d4398b5a49d2d2529ba619054.jpg',
      body: "The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and choke the enemy's vision. If the toxins don't kill her prey, her mind games surely will.",
      origin: 'Origin: Seattle, USA'
    },
    {
      title: 'Zyanya Mondragón',
      imageUrl: 'https://i.pinimg.com/564x/7e/ca/4c/7eca4c11deb3b265f8ecdce07fdf0541.jpg', 
      body: 'Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.',
      origin: 'Origin: Mexico City, Mexico'
    },
    {
      title: 'Sunwoo Han',
      imageUrl: 'https://i.pinimg.com/564x/41/80/45/418045b6b17df9606c09ce7097efebb3.jpg', 
      body: "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.",
      origin: 'Origin: Seoul, South Korea'
    },
    {
      title: 'Tayane Alves',
      imageUrl: 'https://i.pinimg.com/564x/19/80/4f/19804fbf538cd968a6e3a7d7f03f6fde.jpg', 
      body: "Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom.”",
      origin: 'Origin: Salvador, Bahia, Brazil'
    }
  ];

  return (
    <div className="app-container">
      <h1 className="main-title">VALORANT AGENT PROFILES</h1>
      <div className="card-wrapper">
        {cardData.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            imageUrl={data.imageUrl}
            body={data.body}
            origin={data.origin}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
