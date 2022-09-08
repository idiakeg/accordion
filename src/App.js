import "./App.css";
import questions from "./data";
import Questions from "./Questions";

function App() {
	return (
		<div className="app">
			<h1 className="questions">questions and answers about login</h1>
			<section>
				{questions.map((question, index) => (
					<Questions key={index} {...question} />
				))}
			</section>
		</div>
	);
}

export default App;
