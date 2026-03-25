async function simulateApiCall(comment, rating) {
  return new Promise((resolve, reject) => {
    const seconds = new Date().getSeconds();
    const shouldFail = seconds % 2 === 0;
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("400 Bad Request: Simulated API failure"));
      } else {
        resolve(true);
      }
    }, 1500);
    console.log(comment, rating);
  });
}

export async function submitApi(comment, rating) {
  try {
    await simulateApiCall(comment, rating);
  } catch (error) {
    if (error.message.includes("400 Bad Request")) {
      return {
        success: false,
        message: "Failed to submit feedback. Please try again.",
      };
    } else {
      return {
        success: false,
        message:
          error.message || "An unexpected error occurred. Please try again.",
      };
    }
  }
  return { success: true, message: "Feedback submitted successfully!" };
}
