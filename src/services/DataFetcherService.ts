import axios from "axios";

export const fetchData = async (filePath: string) => {
  return new Promise((resolve, reject) => {
    try {
      axios.get(filePath).then((response) => {
        resolve(response.data.results);
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
