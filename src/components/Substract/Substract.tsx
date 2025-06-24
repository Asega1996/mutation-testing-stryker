import { subtract } from "../../services/subtract";

type SubtractType = {
  param1: number;
  param2: number;
};

export const Subtract = (props: SubtractType) => {
  const { param1, param2 } = props;
  return <div>{subtract(param1, param2)}</div>;
};
