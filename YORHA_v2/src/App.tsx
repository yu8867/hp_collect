import React, { useState, useEffect } from "react";
import { Layout } from "./components/Layout";
import { SystemBoot } from "./components/SystemBoot";
import { Home } from "./views/Home";
import { UnitData } from "./views/UnitData";
import { GeoMap } from "./views/GeoMap";
import { SystemMenu } from "./views/SystemMenu";
import { SystemStatus, View } from "./types";

const App = () => {
  const [status, setStatus] = useState<SystemStatus>(SystemStatus.BOOTING);
  const [currentView, setCurrentView] = useState<View>("home");

  useEffect(() => {
    // Check boot status
    const hasBooted = sessionStorage.getItem("yorha_boot_complete");
    if (hasBooted) {
      setStatus(SystemStatus.ACTIVE);
    }
  }, []);

  const handleBootComplete = () => {
    setStatus(SystemStatus.ACTIVE);
    sessionStorage.setItem("yorha_boot_complete", "true");
  };

  const navigateTo = (view: View) => {
    setCurrentView(view);
    // Optional: Updates URL for visual consistency without relying on it for logic
    window.location.hash = `/${view}`;
  };

  const renderContent = () => {
    switch (currentView) {
      case "units":
        return <UnitData />;
      case "map":
        return <GeoMap />;
      case "system":
        return <SystemMenu />;
      case "home":
      default:
        return <Home />;
    }
  };

  if (status === SystemStatus.BOOTING) {
    return <SystemBoot onComplete={handleBootComplete} />;
  }

  return (
    <Layout currentView={currentView} onNavigate={navigateTo}>
      {renderContent()}
    </Layout>
  );
};

export default App;
