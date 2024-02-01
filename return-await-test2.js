const simulateAsyncError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("시뮬레이션된 에러"));
    }, 1000);
  });
};

// return await 사용
const withReturnAwait = async () => {
  try {
    return await simulateAsyncError();
  } catch (error) {
    console.error("withReturnAwait 에러:", error);
    throw error;
  }
};

// return만 사용
const withReturnOnly = async () => {
  try {
    return simulateAsyncError();
  } catch (error) {
    console.error("withReturnOnly 에러:", error);
    throw error;
  }
};

const testStackTrace = async () => {
  try {
    await withReturnAwait();
  } catch (error) {
    console.error("withReturnAwait 호출 시 에러:", error);
  }

  try {
    await withReturnOnly();
  } catch (error) {
    console.error("withReturnOnly 호출 시 에러:", error);
  }
};

testStackTrace();
