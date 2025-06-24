import { useState } from "react";
import { additionAsync } from "../../services/addition";

export const AdditionFormAsync = () => {
  const [param1, setParam1] = useState<string>("");
  const [param2, setParam2] = useState<string>("");
  const [result, setResult] = useState<number | string>("");

  const handleSum = async () => {
    const a = Number(param1);
    const b = Number(param2);

    const someParamIsFalsy = param1 === "" || param2 === "";

    const isInvalid = someParamIsFalsy;
    if (isInvalid) {
      setResult("Please enter valid numbers");
    } else {
      setResult("Calculating...");
      const sum = await additionAsync(a, b);
      setResult(sum);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={param1}
        onChange={(e) => setParam1(e.target.value)}
        placeholder="Operator 1"
      />
      <input
        type="number"
        value={param2}
        onChange={(e) => setParam2(e.target.value)}
        placeholder="Operator 2"
      />
      <button onClick={handleSum}>Add</button>
      <div>
        {result ? (
          <div>
            Result: <span>{result}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};
