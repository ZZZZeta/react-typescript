type Cache = () => {
  setData: (key: string, data: unknown) => void;
  getData: (key: string) => any;
};

const storage = localStorage;
const LIFETIME: number = 5000;
const getTimestamp = (): number => new Date().getTime();
const validate = (_timestamp: number): boolean =>
  getTimestamp() - _timestamp < LIFETIME;

const cache: Cache = () => {
  const getData = (key: string) => {
    try {
      const jsonData: string | null = storage.getItem(key);
      const data = JSON.parse(jsonData as string);
      const is_valid = validate(data.timestamp);
      return is_valid ? data.data : storage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };

  const setData = (key: string, data: unknown) => {
    const dataObj = { data, timestamp: getTimestamp() };
    storage.setItem(key, JSON.stringify(dataObj));
  };

  return {
    getData,
    setData,
  };
};

const cacheApiCall = async (key: string, promise: Function) => {
  const { getData, setData } = cache();
  const cachedData = getData(key);

  if (cachedData) {
    return cachedData;
  }

  const fetchedData = await promise();
  setData(key, fetchedData);
  return fetchedData;
};

export default cacheApiCall;
