import { addition } from "../../services/addition";

type AdditionType = {
  param1: number;
  param2: number;
};

export const Addition = (props: AdditionType) => {
  const { param1, param2 } = props;
  return <div>{addition(param1, param2)}</div>;
};
