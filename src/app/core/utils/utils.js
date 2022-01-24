import API_ROUTES from "app/core/const/api.routes";

export function checkImage(image, size = "W500") {
  if (image) {
    return API_ROUTES.IMAGE[size] + image;
  }
  return "https://via.placeholder.com/500x280";
}
