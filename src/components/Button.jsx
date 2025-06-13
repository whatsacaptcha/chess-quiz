function Button({ children, className, type, dispatch }) {
  return (
    <button className={className} onClick={() => dispatch({ type: type })}>
      {children}
    </button>
  );
}

export default Button;
