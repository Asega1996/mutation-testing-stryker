export const addition = (a: number, b: number): number => {
  return a + b;
};

export const additionAsync = (a: number, b: number): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
};
