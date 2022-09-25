import HocPattern from './components/hoc-pattern/Main';
import TodoContainer from './components/container-presentational-pattern/Main';

import './App.css';

function App() {
	return (
		<>
			<hgroup className="container">
				<h1>React Patterns</h1>
			</hgroup>
			<div className="container patterns">
				<div className="pattern pattern-hoc">
					<HocPattern />
				</div>
				<div className="pattern pattern-container-presentational">
					<TodoContainer />
				</div>
			</div>
		</>
	);
}

export default App;
