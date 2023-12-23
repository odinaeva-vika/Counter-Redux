import { useDispatch, useSelector } from "react-redux";
import { getCounter } from "./selectors";
import { increment, decrement, reset } from "./actions";
import CounterWidget from "../../components/CounterWidget";

function CounterPage() {
  const counter = useSelector(getCounter);
  const dispath = useDispatch();

  function handleIncrementBtnClick() {
    dispath(increment());
  }

  function handleDecrementBtnClick() {
    dispath(decrement());
  }

  function handleResetBtnClick() {
    dispath(reset());
  }

  return (
    <CounterWidget
      counter={counter}
      onIncrementBtnClick={handleIncrementBtnClick}
      onDecrementBtnClick={handleDecrementBtnClick}
      onResetBtnClick={handleResetBtnClick}
    />
  );
}

export default CounterPage;
