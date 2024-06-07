import Section from "../models/Section.js";
import Item from "../models/Item.js";
import ModGroup from "../models/ModGroup.js";
import Mod from "../models/Mod.js";
import Discount from "../models/Discount.js";
import OrderType from "../models/OrderType.js";
import parseAndBulkWrite from "../utilities/parseAndBulkWrite.js";
import axios, { AxiosError } from "axios";

const triggerSync = async (req, res) => {
  let apiResponse;

  try {
    apiResponse = await axios.get(
      "https://bite-test-pos-production.herokuapp.com/locations/1/menu"
    );
  } catch (e) {
    if (e instanceof AxiosError) {
      const response = e.response?.data?.error;
      const message = response ? JSON.stringify(response) : e.message;
      console.error(`\n Error code: ${e.code} Message: ${message}`);
    } else {
      console.error(e);
    }

    res.status(500).send("Failed to pull data from API, please try again");
    return;
  }

  const { sections, items, modGroups, mods, discounts, orderTypes } =
    apiResponse.data;

  await parseAndBulkWrite(sections, Section);

  await parseAndBulkWrite(items, Item);

  await parseAndBulkWrite(modGroups, ModGroup);

  await parseAndBulkWrite(mods, Mod);

  await parseAndBulkWrite(discounts, Discount);

  await parseAndBulkWrite(orderTypes, OrderType);

  res.sendStatus(200);
};

export default triggerSync;
