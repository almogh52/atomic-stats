const Router = require('nextjs-dynamic-routes')

const router = module.exports = new Router()

router.add({ name: 'index', pattern: '/' });
router.add({ name: 'player', pattern: '/player/:username/' });
router.add({ name: 'id', pattern: '/id/:id/' });
router.add({ name: 'news', pattern: '/news' });
router.add({ name: 'shop', pattern: '/shop' });
router.add({ name: 'register', pattern: '/register' });
router.add({ name: 'login', pattern: '/login' });
router.add({ name: 'obs', pattern: '/obs/:platform/:username/' });
router.add({ name: 'post-register', pattern: '/post-register' });
router.add({ name: 'leaderboard', pattern: '/leaderboard' });
