const isJson = (item) => {
  item = typeof item !== 'string' ? JSON.stringify(item) : item;

  try {
    item = JSON.parse(item);
  } catch (e) {
    return false;
  }

  if (typeof item === 'object' && item !== null) {
    return true;
  }

  return false;
};

export const parseInputData = (data) => {
  // const inputJson = inputData;
  // inputJson.array.forEach((element) => {
  //   console.log(element.name.en);
  // });
  const result = {};
  if (isJson(data)) {
    Object.entries(data).forEach(([key, value]) => {
      const obj = {};
      obj.fundId = key;
      obj.fundName = value?.name?.en;
      obj.aum = value?.aum;

      const series = value?.series;
      const ser = {};
      if (isJson(series)) {
        Object.entries(series).forEach(([key, value]) => {
          ser[key] = {};
          ser[key].latest_nav = { ...value?.latest_nav };
        });
        obj.series = ser;
      } else {
        console.log('series is not a valid json');
      }
      result[key] = obj;
    });
    console.log(result);
    return result;
  } else {
    console.log('Error: input json is not valid');
    return null;
  }
};
