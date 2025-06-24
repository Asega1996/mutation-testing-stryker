import { useEffect, useState } from "react";
import { additionAsync } from "../../services/addition";

type AdditionAsyncProps = {
  param1: number;
  param2: number;
};

export const AdditionAsync = (props: AdditionAsyncProps) => {
  const { param1, param2 } = props;
  const [result, setResult] = useState<number | string>("Calculating...");

  useEffect(() => {
    const processData = async () => {
      const result = await additionAsync(param1, param2);
      setResult(result);
    };

    processData();
  }, [param1, param2]);

  return <div>{result}</div>;
};
