import API_ROUTES from "app/core/const/api.routes";

const { default: ApiService } = require("./ApiService");

class GifyService extends ApiService {
  search({ keyboard, rating = "g", lang = "en", offset = 0 } = {}) {
    return this.get(
      `${API_ROUTES.GIFY.SEARCH}&q=${keyboard}&limit=${API_ROUTES.LIMIT}&offset=${offset}&rating=${rating}&lang=${lang}`
    ).then((res) => {
      const { data = [] } = res;
      return data.map((image) => {
        const { images, title, id, slug } = image;
        const { url } = images.fixed_height_small;
        return { title, id, url, slug };
      });
    });
  }

  detail(id) {
    const apiUrl = API_ROUTES.GIFY.DETAIL.replace("REPLACE", id);
    return this.get(`${apiUrl}`).then(({ data }) => {
      const { images, title, slug } = data;
      const { url } = images.original;
      return { title, id, url, slug };
    });
  }
}

const gifyService = new GifyService();
export default gifyService;
