"use client";

import { useState } from "react";
import { IDEProvider, useIDE } from "./context/IDEContext";
import IDEShell from "./components/IDEShell";
import BootScreen from "./components/BootScreen";
import HiringMode from "./components/HiringMode";

function AppController() {
  const [bootComplete, setBootComplete] = useState(false);
  const { hiringMode } = useIDE();

  if (!bootComplete) {
    return <BootScreen onComplete={() => setBootComplete(true)} />;
  }

  if (hiringMode) {
    return <HiringMode />;
  }

  return <IDEShell />;
}

export default function Home() {
  return (
    <IDEProvider>
      <AppController />
    </IDEProvider>
  );
}
