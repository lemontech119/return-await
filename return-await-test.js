const simulateAsyncOperation = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("결과값");
    }, 1000);
  });
};

// return await 사용
const withReturnAwait = async () => {
  return await simulateAsyncOperation();
};

// return만 사용
const withReturnOnly = async () => {
  return simulateAsyncOperation();
};

const measurePerformance = async () => {
  const startWithReturnAwait = performance.now();
  await withReturnAwait();
  const endWithReturnAwait = performance.now();
  console.log(`Return await: ${endWithReturnAwait - startWithReturnAwait} ms`);

  const startWithReturnOnly = performance.now();
  await withReturnOnly();
  const endWithReturnOnly = performance.now();
  console.log(`Return only: ${endWithReturnOnly - startWithReturnOnly} ms`);
};

measurePerformance();
