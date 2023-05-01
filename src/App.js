import './App.css';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Commits from "./pages/commit/Commits";
import Layout from './components/layout/Layout';

import { theme } from "./theme";

const history = createBrowserHistory();

function App() {
  return (
    <ThemeProvider theme={theme}>
		<CssBaseline />
		<Router history={history}>
			<Layout>
				<Routes>
					<Route
					path="/"
					element={<Commits />}
					 />
					 <Route
					path="/commits"
					element={<Commits />}
					 />
				</Routes>
			</Layout>

		</Router>
		

	</ThemeProvider>
  );
}

export default App;
