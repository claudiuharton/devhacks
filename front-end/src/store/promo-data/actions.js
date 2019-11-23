import Axios from "axios";

export async function initStore({ commit }) {
  const response = await Axios.get("https://api.myjson.com/bins/edxs5");
  const promoData = response.data;
  commit("SET_PROMO_DATA", promoData);
}
