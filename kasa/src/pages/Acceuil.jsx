import Hero from '../components/Hero';
import Card from '../components/Card';
import accommodationsData from '../data.json';
import '../App.css'; 

function Acceuil() {
  return (
    <main className="main">
      <Hero />
      <section className="gallery">
        <div className="gallery-grid">
          {accommodationsData.map((accommodation) => (
            <Card 
              key={accommodation.id}
              title={accommodation.title}
              cover={accommodation.cover}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Acceuil;