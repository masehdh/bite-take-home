const parseAndBulkWrite = async (preParsedItems, model) => {
  let parsedItems = [];

  for (const item of preParsedItems) {
    parsedItems.push({
      replaceOne: {
        filter: { _id: item.id },
        replacement: { _id: item.id, ...item },
        upsert: true,
      },
    });
  }

  try {
    const { modifiedCount, upsertedCount, mongoose } = await model.bulkWrite(
      parsedItems,
      {
        ordered: false,
      }
    );

    console.log(
      `${
        model.modelName
      } collection upsert successful. \n docs modified: ${modifiedCount} \n docs upserted: ${upsertedCount} \n docs rejected: ${
        mongoose?.validationErrors.length ?? 0
      } \n ${mongoose?.validationErrors ?? []} \n`
    );
  } catch (e) {
    console.log(`Error:`, e);
  }
};

export default parseAndBulkWrite;
