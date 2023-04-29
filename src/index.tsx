import React from "react";

import { createRoot } from "react-dom/client";

const App: React.FC = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
};

const container = document.getElementById("app") as Element;

const root = createRoot(container);
root.render(<App />);
