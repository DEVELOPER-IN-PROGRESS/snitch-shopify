import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _24f14b67 = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "pages/Category" */))
const _311f0205 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "" */))
const _151cc804 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "" */))
const _9867cbe2 = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "" */))
const _63932216 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "" */))
const _90778ac8 = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "" */))
const _62b877af = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "pages/Checkout" */))
const _5ceb90bc = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "pages/Checkout/Billing" */))
const _08ca3a72 = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "pages/Checkout/Payment" */))
const _ff7e8586 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "pages/Checkout/Shipping" */))
const _69ce88e4 = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "pages/Checkout/ThankYou" */))
const _e07cec76 = () => interopDefault(import('..\\pages\\ContactUs.vue' /* webpackChunkName: "pages/ContactUs" */))
const _11a3e09e = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "" */))
const _66debb48 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _2f70c448 = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _f80d8232 = () => interopDefault(import('..\\pages\\MyAccount\\AdressBook.vue' /* webpackChunkName: "pages/MyAccount/AdressBook" */))
const _179807af = () => interopDefault(import('..\\pages\\MyAccount\\BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _01a3de84 = () => interopDefault(import('..\\pages\\MyAccount\\LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _4271dced = () => interopDefault(import('..\\pages\\MyAccount\\MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _213ca9b6 = () => interopDefault(import('..\\pages\\MyAccount\\MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _36e48c97 = () => interopDefault(import('..\\pages\\MyAccount\\MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _1db6fe4e = () => interopDefault(import('..\\pages\\MyAccount\\OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _e9775408 = () => interopDefault(import('..\\pages\\MyAccount\\ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _2d1271d4 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "pages/Product" */))
const _0bccb44a = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "" */))
const _ad8dab1e = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "pages/ResetPassword" */))
const _2ddb84b2 = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "" */))
const _c4eacc00 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "" */))
const _19505486 = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "" */))

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
    component: _24f14b67,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _311f0205,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _151cc804,
      name: "billing___en"
    }, {
      path: "payment",
      component: _9867cbe2,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _63932216,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _90778ac8,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _62b877af,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _5ceb90bc,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _08ca3a72,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _ff7e8586,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _69ce88e4,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/ContactUs",
    component: _e07cec76,
    name: "ContactUs___en"
  }, {
    path: "/de",
    component: _11a3e09e,
    name: "home___de"
  }, {
    path: "/Home",
    component: _66debb48,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _2f70c448,
    name: "MyAccount___en",
    children: [{
      path: "AdressBook",
      component: _f80d8232,
      name: "MyAccount-AdressBook___en"
    }, {
      path: "BillingDetails",
      component: _179807af,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _01a3de84,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _4271dced,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _213ca9b6,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _36e48c97,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _1db6fe4e,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _e9775408,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _2d1271d4,
    name: "Product___en"
  }, {
    path: "/reset-password",
    component: _0bccb44a,
    name: "reset-password___en"
  }, {
    path: "/ResetPassword",
    component: _ad8dab1e,
    name: "ResetPassword___en"
  }, {
    path: "/de/Category",
    component: _24f14b67,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _311f0205,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _151cc804,
      name: "billing___de"
    }, {
      path: "payment",
      component: _9867cbe2,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _63932216,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _90778ac8,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _62b877af,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _5ceb90bc,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _08ca3a72,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _ff7e8586,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _69ce88e4,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/ContactUs",
    component: _e07cec76,
    name: "ContactUs___de"
  }, {
    path: "/de/Home",
    component: _66debb48,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _2f70c448,
    name: "MyAccount___de",
    children: [{
      path: "AdressBook",
      component: _f80d8232,
      name: "MyAccount-AdressBook___de"
    }, {
      path: "BillingDetails",
      component: _179807af,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _01a3de84,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _4271dced,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _213ca9b6,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _36e48c97,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _1db6fe4e,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _e9775408,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _2d1271d4,
    name: "Product___de"
  }, {
    path: "/de/reset-password",
    component: _0bccb44a,
    name: "reset-password___de"
  }, {
    path: "/de/ResetPassword",
    component: _ad8dab1e,
    name: "ResetPassword___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _2ddb84b2,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _c4eacc00,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _19505486,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _2ddb84b2,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _c4eacc00,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _19505486,
    name: "category___en"
  }, {
    path: "/",
    component: _11a3e09e,
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
