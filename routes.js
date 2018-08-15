const Router = require('nextjs-dynamic-routes')
const NProgress = require("nprogress")

const router = module.exports = new Router()

router.add({ name: 'player', pattern: '/player/:username/' });
router.add({ name: 'news', pattern: '/news' });
router.add({ name: 'shop', pattern: '/shop' });
router.add({ name: 'register', pattern: '/register' });
router.add({ name: 'login', pattern: '/login' });
router.add({ name: 'obs', pattern: '/obs/:platform/:username/' });
