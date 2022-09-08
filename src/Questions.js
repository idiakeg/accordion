import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const Questions = ({ title, info }) => {
	const [isQuestionShowing, setIsQuestionShowing] = useState(false);
	const handleClick = () => {
		setIsQuestionShowing((prev) => !prev);
	};
	return (
		<div className="question__container">
			<div className="question__title">
				<p className="title">{title}</p>
				<button onClick={handleClick}>
					{isQuestionShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</div>
			{isQuestionShowing && (
				<div className="question__body">
					<p className="body">{info}</p>
				</div>
			)}
		</div>
	);
};

export default Questions;
