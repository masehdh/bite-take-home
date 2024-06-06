import Section from "../models/Section.js";
import Item from "../models/Item.js";
import ModGroup from "../models/ModGroup.js";
import Mod from "../models/Mod.js";
import Discount from "../models/Discount.js";
import OrderType from "../models/OrderType.js";
import parseAndBulkWrite from "../utilities/parseAndBulkWrite.js";
import axios from "axios";

const triggerSync = async (req, res) => {
  const apiResponse = await axios.get(
    "https://bite-test-pos-production.herokuapp.com/locations/1/menu"
  );

  const { sections, items, modGroups, mods, discounts, orderTypes } =
    apiResponse.data;

  await parseAndBulkWrite(sections, Section);

  await parseAndBulkWrite(items, Item);

  await parseAndBulkWrite(modGroups, ModGroup);

  await parseAndBulkWrite(mods, Mod);

  await parseAndBulkWrite(discounts, Discount);

  await parseAndBulkWrite(orderTypes, OrderType);

  res.send();
};

export default triggerSync;
