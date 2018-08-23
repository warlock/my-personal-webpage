export const state = () => ({
  locales: ['en', 'es', 'ca', 'ru'],
  locale: 'en'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}

export const actions = {
  setLang (context, data) {
    context.commit('SET_LANG', data)
  }
}