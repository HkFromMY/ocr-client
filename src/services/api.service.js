import http from "./http.service";
import config from "../config/config";

const apiDomain = config.apiDomain;

async function convertImageToText(image) {
  const formData = new FormData();
  formData.append("images", image);

  const headers = {
    "Content-Type": "multipart/form-data"
  };

  const response = await http.post(
    apiDomain + "/image/convert",
    formData,
    headers
  );

  return response.data;
}

const apiServices = {
  convertImageToText
};

export default apiServices;
