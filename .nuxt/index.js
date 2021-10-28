import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

<<<<<<< HEAD
import nuxt_plugin_vuescrollto_22bdbdd5 from 'nuxt_plugin_vuescrollto_22bdbdd5' // Source: .\\vue-scrollto.js (mode: 'client')
import nuxt_plugin_cookieuniversalnuxt_0b42ed5c from 'nuxt_plugin_cookieuniversalnuxt_0b42ed5c' // Source: .\\cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_pluginutils_0d4ad73a from 'nuxt_plugin_pluginutils_0d4ad73a' // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginseo_cf295de4 from 'nuxt_plugin_pluginseo_cf295de4' // Source: .\\nuxt-i18n\\plugin.seo.js (mode: 'all')
import nuxt_plugin_pluginrouting_c81b03f6 from 'nuxt_plugin_pluginrouting_c81b03f6' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_308db38a from 'nuxt_plugin_pluginmain_308db38a' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_nuxtplugin37abea78_1e38e51c from 'nuxt_plugin_nuxtplugin37abea78_1e38e51c' // Source: .\\nuxt.plugin.37abea78.js (mode: 'all')
import nuxt_plugin_plugin_b97267a8 from 'nuxt_plugin_plugin_b97267a8' // Source: .\\composition-api\\plugin.js (mode: 'all')
import nuxt_plugin_pluginsi18ncookiesf1f2957c_65f5e60b from 'nuxt_plugin_pluginsi18ncookiesf1f2957c_65f5e60b' // Source: .\\plugins.i18n-cookies.f1f2957c.js (mode: 'all')
import nuxt_plugin_pluginse2etesting0e17629e_168acb80 from 'nuxt_plugin_pluginse2etesting0e17629e_168acb80' // Source: .\\plugins.e2e-testing.0e17629e.js (mode: 'all')
import nuxt_plugin_pluginslogger9fdf005c_889d3446 from 'nuxt_plugin_pluginslogger9fdf005c_889d3446' // Source: .\\plugins.logger.9fdf005c.js (mode: 'all')
import nuxt_plugin_pluginsssrd9de15cc_7c50ed20 from 'nuxt_plugin_pluginsssrd9de15cc_7c50ed20' // Source: .\\plugins.ssr.d9de15cc.js (mode: 'all')
import nuxt_plugin_pluginscontext42b739dd_90a21704 from 'nuxt_plugin_pluginscontext42b739dd_90a21704' // Source: .\\plugins.context.42b739dd.js (mode: 'all')
import nuxt_plugin_workbox_6fbd0dd0 from 'nuxt_plugin_workbox_6fbd0dd0' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_3e359b60 from 'nuxt_plugin_metaplugin_3e359b60' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_34e65078 from 'nuxt_plugin_iconplugin_34e65078' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
=======
import nuxt_plugin_vuescrollto_40a365a4 from 'nuxt_plugin_vuescrollto_40a365a4' // Source: .\\vue-scrollto.js (mode: 'client')
import nuxt_plugin_cookieuniversalnuxt_5fe8dbba from 'nuxt_plugin_cookieuniversalnuxt_5fe8dbba' // Source: .\\cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_pluginutils_3cd2695a from 'nuxt_plugin_pluginutils_3cd2695a' // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginseo_2b277767 from 'nuxt_plugin_pluginseo_2b277767' // Source: .\\nuxt-i18n\\plugin.seo.js (mode: 'all')
import nuxt_plugin_pluginrouting_e5dc6044 from 'nuxt_plugin_pluginrouting_e5dc6044' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_15534f5e from 'nuxt_plugin_pluginmain_15534f5e' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_nuxtplugin05344fde_78a23114 from 'nuxt_plugin_nuxtplugin05344fde_78a23114' // Source: .\\nuxt.plugin.05344fde.js (mode: 'all')
import nuxt_plugin_plugin_7792c045 from 'nuxt_plugin_plugin_7792c045' // Source: .\\composition-api\\plugin.js (mode: 'all')
import nuxt_plugin_pluginsi18ncookies20a990ca_97f7ee34 from 'nuxt_plugin_pluginsi18ncookies20a990ca_97f7ee34' // Source: .\\plugins.i18n-cookies.20a990ca.js (mode: 'all')
import nuxt_plugin_pluginse2etestingde0cc590_d3c46a82 from 'nuxt_plugin_pluginse2etestingde0cc590_d3c46a82' // Source: .\\plugins.e2e-testing.de0cc590.js (mode: 'all')
import nuxt_plugin_pluginslogger0577f8eb_ed7104e6 from 'nuxt_plugin_pluginslogger0577f8eb_ed7104e6' // Source: .\\plugins.logger.0577f8eb.js (mode: 'all')
import nuxt_plugin_pluginsssrf6d68abe_06f69405 from 'nuxt_plugin_pluginsssrf6d68abe_06f69405' // Source: .\\plugins.ssr.f6d68abe.js (mode: 'all')
import nuxt_plugin_pluginscontextcb823838_6d74de6d from 'nuxt_plugin_pluginscontextcb823838_6d74de6d' // Source: .\\plugins.context.cb823838.js (mode: 'all')
import nuxt_plugin_workbox_2ce48ad7 from 'nuxt_plugin_workbox_2ce48ad7' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_01c28f52 from 'nuxt_plugin_metaplugin_01c28f52' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_03c65dcb from 'nuxt_plugin_iconplugin_03c65dcb' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
>>>>>>> b29ea71a0f7a9047f55cb9f4a71c42d541c35c5e
import nuxt_plugin_scrollToTopclient_6f28b416 from 'nuxt_plugin_scrollToTopclient_6f28b416' // Source: ..\\plugins\\scrollToTop.client.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Shopify | Vue Storefront Next","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"theme-color","content":"#5ece7b"},{"hid":"description","name":"description","content":""},{"name":"generator","content":"Vue Storefront 2"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"preconnect","href":"https:\u002F\u002Ffonts.gstatic.com","crossorigin":"crossorigin"},{"rel":"preload","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap","as":"style"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap","media":"print","onload":"this.media='all'"}],"style":[],"script":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

<<<<<<< HEAD
  if (process.client && typeof nuxt_plugin_vuescrollto_22bdbdd5 === 'function') {
    await nuxt_plugin_vuescrollto_22bdbdd5(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_0b42ed5c === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_0b42ed5c(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_0d4ad73a === 'function') {
    await nuxt_plugin_pluginutils_0d4ad73a(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginseo_cf295de4 === 'function') {
    await nuxt_plugin_pluginseo_cf295de4(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_c81b03f6 === 'function') {
    await nuxt_plugin_pluginrouting_c81b03f6(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_308db38a === 'function') {
    await nuxt_plugin_pluginmain_308db38a(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtplugin37abea78_1e38e51c === 'function') {
    await nuxt_plugin_nuxtplugin37abea78_1e38e51c(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_b97267a8 === 'function') {
    await nuxt_plugin_plugin_b97267a8(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsi18ncookiesf1f2957c_65f5e60b === 'function') {
    await nuxt_plugin_pluginsi18ncookiesf1f2957c_65f5e60b(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginse2etesting0e17629e_168acb80 === 'function') {
    await nuxt_plugin_pluginse2etesting0e17629e_168acb80(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginslogger9fdf005c_889d3446 === 'function') {
    await nuxt_plugin_pluginslogger9fdf005c_889d3446(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsssrd9de15cc_7c50ed20 === 'function') {
    await nuxt_plugin_pluginsssrd9de15cc_7c50ed20(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginscontext42b739dd_90a21704 === 'function') {
    await nuxt_plugin_pluginscontext42b739dd_90a21704(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_6fbd0dd0 === 'function') {
    await nuxt_plugin_workbox_6fbd0dd0(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_3e359b60 === 'function') {
    await nuxt_plugin_metaplugin_3e359b60(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_34e65078 === 'function') {
    await nuxt_plugin_iconplugin_34e65078(app.context, inject)
=======
  if (process.client && typeof nuxt_plugin_vuescrollto_40a365a4 === 'function') {
    await nuxt_plugin_vuescrollto_40a365a4(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_5fe8dbba === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_5fe8dbba(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_3cd2695a === 'function') {
    await nuxt_plugin_pluginutils_3cd2695a(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginseo_2b277767 === 'function') {
    await nuxt_plugin_pluginseo_2b277767(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_e5dc6044 === 'function') {
    await nuxt_plugin_pluginrouting_e5dc6044(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_15534f5e === 'function') {
    await nuxt_plugin_pluginmain_15534f5e(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtplugin05344fde_78a23114 === 'function') {
    await nuxt_plugin_nuxtplugin05344fde_78a23114(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_7792c045 === 'function') {
    await nuxt_plugin_plugin_7792c045(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsi18ncookies20a990ca_97f7ee34 === 'function') {
    await nuxt_plugin_pluginsi18ncookies20a990ca_97f7ee34(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginse2etestingde0cc590_d3c46a82 === 'function') {
    await nuxt_plugin_pluginse2etestingde0cc590_d3c46a82(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginslogger0577f8eb_ed7104e6 === 'function') {
    await nuxt_plugin_pluginslogger0577f8eb_ed7104e6(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsssrf6d68abe_06f69405 === 'function') {
    await nuxt_plugin_pluginsssrf6d68abe_06f69405(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginscontextcb823838_6d74de6d === 'function') {
    await nuxt_plugin_pluginscontextcb823838_6d74de6d(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_2ce48ad7 === 'function') {
    await nuxt_plugin_workbox_2ce48ad7(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_01c28f52 === 'function') {
    await nuxt_plugin_metaplugin_01c28f52(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_03c65dcb === 'function') {
    await nuxt_plugin_iconplugin_03c65dcb(app.context, inject)
>>>>>>> b29ea71a0f7a9047f55cb9f4a71c42d541c35c5e
  }

  if (process.client && typeof nuxt_plugin_scrollToTopclient_6f28b416 === 'function') {
    await nuxt_plugin_scrollToTopclient_6f28b416(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
