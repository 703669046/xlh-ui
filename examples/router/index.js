import Vue from "vue"
import Router from "vue-router"


Vue.use(Router)

export default new Router({
    routes:[
        {
            path: "/",
            component:()=>import("../views/home.vue"),
            children:[
                {
                    path: "/Button",
                    component:()=>import("../components/common/Button/index.vue")
                },
                {
                    path: "/Icon",
                    component:()=>import("../components/common/Button/index.vue")
                },
            ]
        },
        
        
    ]
})