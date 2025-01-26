import axiosInstance from "../axios";

export const fetchLocations = async (page, limit) => {
  try {
    const response = await axiosInstance.get("/locations", {
      params: { page, limit },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching locations:", error);
    throw error;
  }
};
