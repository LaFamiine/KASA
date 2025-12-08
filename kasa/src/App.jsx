import Header from './header';  
import Hero from './Hero';      
import Card from './Card';      
import Footer from './Footer';  
import accommodationsData from './data.json';
import './App.css';

function App() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export default App;