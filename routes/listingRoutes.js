import path from "path";

module.exports = (app) => {
  const listings = require(path.basename(__dirname) + "/controllers/listingController.js");

  const router = require("express").Router();

  router.post("/", listings.createNewListing);

  router.get("/", listings.retrieveAllListings);

  router.get("/:id", listings.retrieveListingById);

  router.put("/:id", listings.updateListingById);

  router.delete("/:id", listings.deleteSingleListing);

  router.delete("/", listings.deleteAllListings);

  // npm start loads /listings instead of /
  app.use("/api/listings", router);
};
