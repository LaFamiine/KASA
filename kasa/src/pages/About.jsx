import '../style/banner.css';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';

function About() {
    return (
    <main className="main-about">
        <Banner imageUrl="https://react-realtor-kasa.netlify.app/static/media/kasa-about.e54ae93d36cfba861b65.jpg" className="banner-about"/>

            <div className="about-collapse-container">
                <Collapse
                    title ="Fiabilité"
                    description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                />

                <Collapse
                    title="Respect"
                    description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />      
                <Collapse
                    title="Service"
                    description="La qualité du service est au coeur de notre engagement envers nos clients. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
                />  
                <Collapse   
                    title="Sécurité"
                    description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </div>
    </main>

    );
}   


export default About;