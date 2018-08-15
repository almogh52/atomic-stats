import Router from '../routes';
import NProgress from "nprogress"

NProgress.configure({ showSpinner: false })

class AtomicRouter {
    pushRoute(name, params = {}, options) {
        NProgress.start()
        Router.pushRoute(name, params=params, options)
    }
}

export default new AtomicRouter()