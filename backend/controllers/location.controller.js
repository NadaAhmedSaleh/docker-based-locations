import { getLocationsService } from "../services/location.service.js";

export const getLocations = (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 100;
    const data = getLocationsService(page, limit);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching locations:", error);
    res.status(500).json({ error: "Failed to fetch locations" });
  }
};
