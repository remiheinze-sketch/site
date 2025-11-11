import React from "react";

const Sidebar = ({ activeTab, setActiveTab, isMenuOpen, setIsMenuOpen }) => {
  const tabs = [
    { id: "notes", label: "🗒️ Notes" },
    { id: "agenda", label: "📅 Agenda" },
    { id: "todo", label: "✅ To-do list" },
    { id: "revue", label: "📰 Revue de presse" },
    { id: "veille", label: "🌐 Veille actu" },
    { id: "reseaux", label: "💬 Réseaux sociaux" },
    { id: "repertoire", label: "👥 Répertoire" },
    { id: "data", label: "📊 Données socio-démo" },
  ];

  return (
    <aside className={`sidebar ${isMenuOpen ? "open" : ""}`}>
      <h2 className="sidebar__title">OrganiHub</h2>
      <nav>
        <ul className="sidebar__list">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                className={`sidebar__btn ${
                  activeTab === tab.id ? "active" : ""
                }`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsMenuOpen(false);
                }}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
