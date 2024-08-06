import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import Experience from "./components/Experience/Experience";

function App() {
  return (
    <MantineProvider>
      <Experience />
    </MantineProvider>
  );
}

export default App;
