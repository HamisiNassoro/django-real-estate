<<<<<<< HEAD
import React from "react"
import './App.css';

function App() {
  return (
    <div>
      <h1>Real Estate</h1>
      <p>The real test starts here...</p>
      
    </div>
  );
=======
import { Layout } from "antd";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import AppFooter from "./components/common/AppFooter";
import AppHeader from "./components/common/AppHeader";
import HomePage from "./pages/HomePage";
import PropertyListPage from "./pages/PropertyListPage";

const { Content, Header, Footer } = Layout;

function App() {
	return (
		<Router>
			<Layout className="main-layout">
				<Header>
					<AppHeader />
				</Header>
				<Content>
					<Route exact path="/" component={HomePage} />
					<Route
						exact
						path="/properties"
						component={PropertyListPage}
					/>
				</Content>
				<Footer>
					<AppFooter />
				</Footer>
			</Layout>
		</Router>
	);
>>>>>>> 902181add14f8a243a1f616d2902fedbedf60dc4
}

export default App;
