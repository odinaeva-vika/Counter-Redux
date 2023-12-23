function CounterWidget({
  counter,
  onIncrementBtnClick,
  onDecrementBtnClick,
  onResetBtnClick,
}) {
  return (
    <div>
      <p>{counter}</p>
      <button onClick={onIncrementBtnClick}>+1</button>
      <button onClick={onDecrementBtnClick}>-1</button>
      <button onClick={onResetBtnClick}>Reset</button>
    </div>
  );
}

export default CounterWidget;
