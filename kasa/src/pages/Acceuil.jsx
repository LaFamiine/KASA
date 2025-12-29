import Card from '../components/Card';
import Banner from '../components/Banner';
import accommodationsData from '../data.json';
import '../App.css'; 

function Acceuil() {
  return (
    <main className="main">
      <Banner imageUrl="public/img/IMG.jpg" title="Chez vous, partout et ailleurs"/>
      <section className="gallery">
        <div className="gallery-grid">
          {accommodationsData.map((accommodation) => (
            <Card 
              key={accommodation.id}
              id={accommodation.id}
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