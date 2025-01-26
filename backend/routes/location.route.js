import express from "express";
import { getLocations } from "../controllers/location.controller.js";

const router = express.Router();

/**
 * @swagger
 * /locations:
 *   get:
 *     summary: Get paginated list of locations
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of records per page
 *     responses:
 *       200:
 *         description: A JSON object with paginated locations
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total:
 *                   type: integer
 *                   description: Total number of locations
 *                 page:
 *                   type: integer
 *                   description: Current page
 *                 limit:
 *                   type: integer
 *                   description: Records per page
 *                 locations:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Location"
 */
router.get("/", getLocations);

export default router;
