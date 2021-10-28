import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c57c0e24 = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "pages/Category" */))
const _1fe2aabe = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "" */))
const _c1a6b086 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "" */))
const _3ddbf9c8 = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "" */))
const _f3baf348 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "" */))
const _6fb05203 = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "" */))
const _49edb594 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "pages/Checkout" */))
const _9a6fa9d6 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "pages/Checkout/Billing" */))
const _51777d20 = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "pages/Checkout/Payment" */))
const _341123f8 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "pages/Checkout/Shipping" */))
const _60f58caa = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "pages/Checkout/ThankYou" */))
const _21868d1e = () => interopDefault(import('..\\pages\\ContactUs.vue' /* webpackChunkName: "pages/ContactUs" */))
const _defa6452 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "" */))
const _1139444f = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _7d9470be = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _0adf04c0 = () => interopDefault(import('..\\pages\\MyAccount\\AdressBook.vue' /* webpackChunkName: "pages/MyAccount/AdressBook" */))
const _eff58df0 = () => interopDefault(import('..\\pages\\MyAccount\\BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _55010605 = () => interopDefault(import('..\\pages\\MyAccount\\LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _b204def4 = () => interopDefault(import('..\\pages\\MyAccount\\MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _7ba173a8 = () => interopDefault(import('..\\pages\\MyAccount\\MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _09b2279e = () => interopDefault(import('..\\pages\\MyAccount\\MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _fb7a9c32 = () => interopDefault(import('..\\pages\\MyAccount\\OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _287d4fc3 = () => interopDefault(import('..\\pages\\MyAccount\\ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _2726ccaf = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "pages/Product" */))
const _91e0ee7c = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "" */))
const _00aa4d6c = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "pages/ResetPassword" */))
const _178cf319 = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "" */))
const _947b13b2 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "" */))
const _3bc90314 = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _c57c0e24,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _1fe2aabe,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _c1a6b086,
      name: "billing___en"
    }, {
      path: "payment",
      component: _3ddbf9c8,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _f3baf348,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _6fb05203,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _49edb594,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _9a6fa9d6,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _51777d20,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _341123f8,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _60f58caa,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/ContactUs",
    component: _21868d1e,
    name: "ContactUs___en"
  }, {
    path: "/de",
    component: _defa6452,
    name: "home___de"
  }, {
    path: "/Home",
    component: _1139444f,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _7d9470be,
    name: "MyAccount___en",
    children: [{
      path: "AdressBook",
      component: _0adf04c0,
      name: "MyAccount-AdressBook___en"
    }, {
      path: "BillingDetails",
      component: _eff58df0,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _55010605,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _b204def4,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _7ba173a8,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _09b2279e,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _fb7a9c32,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _287d4fc3,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _2726ccaf,
    name: "Product___en"
  }, {
    path: "/reset-password",
    component: _91e0ee7c,
    name: "reset-password___en"
  }, {
    path: "/ResetPassword",
    component: _00aa4d6c,
    name: "ResetPassword___en"
  }, {
    path: "/de/Category",
    component: _c57c0e24,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _1fe2aabe,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _c1a6b086,
      name: "billing___de"
    }, {
      path: "payment",
      component: _3ddbf9c8,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _f3baf348,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _6fb05203,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _49edb594,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _9a6fa9d6,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _51777d20,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _341123f8,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _60f58caa,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/ContactUs",
    component: _21868d1e,
    name: "ContactUs___de"
  }, {
    path: "/de/Home",
    component: _1139444f,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _7d9470be,
    name: "MyAccount___de",
    children: [{
      path: "AdressBook",
      component: _0adf04c0,
      name: "MyAccount-AdressBook___de"
    }, {
      path: "BillingDetails",
      component: _eff58df0,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _55010605,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _b204def4,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _7ba173a8,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _09b2279e,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _fb7a9c32,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _287d4fc3,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _2726ccaf,
    name: "Product___de"
  }, {
    path: "/de/reset-password",
    component: _91e0ee7c,
    name: "reset-password___de"
  }, {
    path: "/de/ResetPassword",
    component: _00aa4d6c,
    name: "ResetPassword___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _178cf319,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _947b13b2,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _3bc90314,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _178cf319,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _947b13b2,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _3bc90314,
    name: "category___en"
  }, {
    path: "/",
    component: _defa6452,
    name: "home___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
