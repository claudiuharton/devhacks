export function SET_PROMO_DATA(state, promoData) {
  state.status = promoData.status;
  state.level = promoData.level;
  state.loaded = true;
}
