import Option from './Option';

function Question({ questions, index, answer, dispatch }) {
  const question = questions[index];
  const options = question.options;
  return (
    <>
      <h4>{question.question}</h4>
      <Option
        question={question}
        options={options}
        answer={answer}
        dispatch={dispatch}
      />
    </>
  );
}

export default Question;
