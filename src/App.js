import "./App.css";
import Title from "./components/Title";
import Job from "./components/Job";

function App() {
  return (
    <div class="container-main">
      <div class="border-header"></div>
      <Title name="Jobs"></Title>

      <div class="container">
        <Job
          className="item box-item-red"
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        ></Job>
        <Job
          className="item box-item-green"
          title="Agent de sécurité - Pantin"
          contractType="CDI"
          country="France"
          city="Pantin"
        ></Job>
        <Job
          className="item box-item-yellow"
          title="Responsable d'atelier (H/F)"
          contractType="CDD"
          country="France"
          city="Paris"
        ></Job>
        <Job
          className="item box-item-blue"
          title="Chef de Projets"
          contractType="CDD"
          country="France"
          city="Paris"
        ></Job>
        <Job
          className="item box-item-pink"
          title="Développeur React.js"
          contractType="CDI"
          country="France"
          city="Paris"
        ></Job>
        <Job
          className="item box-item-red"
          title="Sales Associate Stockholm"
          contractType="CDI"
          country="Suède"
          city="Stockholm"
        ></Job>
        <Job
          className="item box-item-green"
          title="Vendeur/Se - Crans Montana"
          contractType="CDI"
          country="Suisse"
          city="Crans Montana"
        ></Job>
        <Job
          className="item box-item-yellow"
          title="CRM & Data Quality Analyst"
          contractType="CDI"
          country="USA"
          city="New York"
        ></Job>
        <Job
          className="item box-item-blue"
          title="Infirmier (H/F)"
          contractType="CDI"
          country="France"
          city="Pantin"
        ></Job>
      </div>
      <footer>Made with Reac at Le Reacteur By Nono</footer>
    </div>
  );
}

export default App;
