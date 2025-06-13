function Option({ question, options, answer, dispatch }) {
  const buttons = options.map((op, i) => (
    <button
      className={`btn btn-option ${
        answer !== null &&
        (i === question.correctOption ? 'correct' : 'incorrect')
      }`}
      key={op}
      data-index={i}
      onClick={() => dispatch({ type: 'answer', payload: i })}
    >
      {op}
    </button>
  ));

  return <div className="options">{buttons}</div>;
}

export default Option;
