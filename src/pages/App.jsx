import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { router } from "@/routes";

const App = () => {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <Routes>
          {
            router.map((route, index) => {
              return <Route key={index} path={route.path} element={<route.component />} />
            })
          }
        </Routes>
      </Router>
    </MantineProvider>
  )
}

export default App;
