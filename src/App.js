import "./App.css";
import questions from "./data";
import Questions from "./Questions";

function App() {
	return (
		<div className="app">
			<section>
				<h1 className="question__header">questions and answers about login</h1>
			</section>
			<section>
				{questions.map((question) => (
					<Questions key={question.id} {...question} />
				))}
			</section>
		</div>
	);
}

export default App;
