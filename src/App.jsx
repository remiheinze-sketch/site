import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const [activeTab, setActiveTab] = useState("notes");

  const renderContent = () => {
    switch (activeTab) {
      case "notes":
        return <h2>🗒️ Section Notes</h2>;
      case "agenda":
        return <h2>📅 Section Agenda</h2>;
      case "todo":
        return <h2>✅ Section To-do list</h2>;
      case "revue":
        return <h2>📰 Section Revue de presse</h2>;
      case "veille":
        return <h2>🌐 Section Veille actu</h2>;
      case "reseaux":
        return <h2>💬 Section Réseaux sociaux</h2>;
      case "repertoire":
        return <h2>👥 Section Répertoire</h2>;
      case "data":
        return <h2>📊 Section Données socio-démo</h2>;
      default:
        return <h2>Bienvenue sur OrganiHub</h2>;
    }
  };

  return (
    <div className="app-layout">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">{renderContent()}</main>
    </div>
  );
}

export default App;
