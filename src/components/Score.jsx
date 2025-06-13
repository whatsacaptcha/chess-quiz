function Score({ questions, score }) {
  return (
    <div className="score">
      {score} / {questions.reduce((acc, cur) => acc + cur.points, 0)} pts
    </div>
  );
}

export default Score;
