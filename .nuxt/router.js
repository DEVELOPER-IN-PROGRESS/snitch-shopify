import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ccd6ecd2 = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "pages/Category" */))
const _55c03d09 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "" */))
const _1f64bf08 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "" */))
const _83d7ddda = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "" */))
const _0ced5871 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "" */))
const _1309b7d0 = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "" */))
const _51489442 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "pages/Checkout" */))
const _06d3488c = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "pages/Checkout/Billing" */))
const _b4facad2 = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "pages/Checkout/Payment" */))
const _134fff6d = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "pages/Checkout/Shipping" */))
const _064469d8 = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "pages/Checkout/ThankYou" */))
const _a0f3dcd6 = () => interopDefault(import('..\\pages\\ContactUs.vue' /* webpackChunkName: "pages/ContactUs" */))
const _41f984bc = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "" */))
const _25b89178 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _4f354c18 = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _00a08eb7 = () => interopDefault(import('..\\pages\\MyAccount\\AdressBook.vue' /* webpackChunkName: "pages/MyAccount/AdressBook" */))
const _4d72ef7f = () => interopDefault(import('..\\pages\\MyAccount\\BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _1770baee = () => interopDefault(import('..\\pages\\MyAccount\\LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _328478bd = () => interopDefault(import('..\\pages\\MyAccount\\MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _08adbd56 = () => interopDefault(import('..\\pages\\MyAccount\\MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _432c02c7 = () => interopDefault(import('..\\pages\\MyAccount\\MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _0dc99a1e = () => interopDefault(import('..\\pages\\MyAccount\\OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _10c6682c = () => interopDefault(import('..\\pages\\MyAccount\\ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _715b02e6 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "pages/Product" */))
const _46d8ad57 = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "" */))
const _7e556b7e = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "pages/ResetPassword" */))
const _c53caba4 = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "" */))
const _0a13ee7c = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "" */))
const _17f910c1 = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "" */))

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
    component: _ccd6ecd2,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _55c03d09,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _1f64bf08,
      name: "billing___en"
    }, {
      path: "payment",
      component: _83d7ddda,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _0ced5871,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _1309b7d0,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _51489442,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _06d3488c,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _b4facad2,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _134fff6d,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _064469d8,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/ContactUs",
    component: _a0f3dcd6,
    name: "ContactUs___en"
  }, {
    path: "/de",
    component: _41f984bc,
    name: "home___de"
  }, {
    path: "/Home",
    component: _25b89178,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _4f354c18,
    name: "MyAccount___en",
    children: [{
      path: "AdressBook",
      component: _00a08eb7,
      name: "MyAccount-AdressBook___en"
    }, {
      path: "BillingDetails",
      component: _4d72ef7f,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _1770baee,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _328478bd,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _08adbd56,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _432c02c7,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _0dc99a1e,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _10c6682c,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _715b02e6,
    name: "Product___en"
  }, {
    path: "/reset-password",
    component: _46d8ad57,
    name: "reset-password___en"
  }, {
    path: "/ResetPassword",
    component: _7e556b7e,
    name: "ResetPassword___en"
  }, {
    path: "/de/Category",
    component: _ccd6ecd2,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _55c03d09,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _1f64bf08,
      name: "billing___de"
    }, {
      path: "payment",
      component: _83d7ddda,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _0ced5871,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _1309b7d0,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _51489442,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _06d3488c,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _b4facad2,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _134fff6d,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _064469d8,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/ContactUs",
    component: _a0f3dcd6,
    name: "ContactUs___de"
  }, {
    path: "/de/Home",
    component: _25b89178,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _4f354c18,
    name: "MyAccount___de",
    children: [{
      path: "AdressBook",
      component: _00a08eb7,
      name: "MyAccount-AdressBook___de"
    }, {
      path: "BillingDetails",
      component: _4d72ef7f,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _1770baee,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _328478bd,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _08adbd56,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _432c02c7,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _0dc99a1e,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _10c6682c,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _715b02e6,
    name: "Product___de"
  }, {
    path: "/de/reset-password",
    component: _46d8ad57,
    name: "reset-password___de"
  }, {
    path: "/de/ResetPassword",
    component: _7e556b7e,
    name: "ResetPassword___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _c53caba4,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _0a13ee7c,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _17f910c1,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _c53caba4,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _0a13ee7c,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _17f910c1,
    name: "category___en"
  }, {
    path: "/",
    component: _41f984bc,
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
