export const sendLog = (logData) => {
  fetch("/api/log", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(logData),
  })
    .then((response) => {
      console.log("sent Log", response);
    })
    .catch((error) => {
      console.error("Error sending log:", error);
    });
};
