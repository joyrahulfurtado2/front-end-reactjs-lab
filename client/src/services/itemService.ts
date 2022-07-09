import axios from "axios";
import Item from "../models/Items";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

// function to get items from the backend
const getItems = async () => {
  const response = await axios.get<Item[]>(`${baseUrl}/items`);
  return response.data;
};

// function to post items from the backend

const postItem = async (item: Omit<Item, "id">) => {
  const response = await axios.post<Item>(`${baseUrl}/items`, item, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

export { getItems, postItem };
