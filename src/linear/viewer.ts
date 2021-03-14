import linearClient from "./client";

const getCurrentViewer = async () => {
  const viewer = await linearClient.viewer;
  if (!viewer) {
    throw new Error("Error with getting current viewer");
  }

  return viewer;
};

export default getCurrentViewer;
