function Progress({ questions, index }) {
  return (
    <progress
      className="progress"
      value={index}
      max={questions.length}
    ></progress>
  );
}

export default Progress;
