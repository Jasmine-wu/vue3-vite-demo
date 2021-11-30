import AnchoredHeading from "./anchored-heading.vue"
import AnchoredHeading4 from "./anchored-heading4.vue"
import Breadcrumb from "./breadcrumb/index.vue"
import BreadcrumbItem from "./breadcrumb/breadcrumb-item.vue"



import { h } from "vue"
export default {
    install(app) {
        // 方式一：
        app.component(AnchoredHeading.name, AnchoredHeading);
        app.component(AnchoredHeading4.name, AnchoredHeading4);

        // 面包屑组件
        app.component(Breadcrumb.name, Breadcrumb);
        app.component(BreadcrumbItem.name, BreadcrumbItem);


        // 方式二：
        app.component("anchored-heading2", {
                template: `<h1 v-if="level === 1">
                    <slot></slot>
                </h1>
                <h2 v-else-if="level === 2">
                    <slot></slot>
                </h2>
                <h3 v-else-if="level === 3">
                    <slot></slot>
                </h3>
                <h4 v-else-if="level === 4">
                    <slot></slot>
                </h4>
                <h5 v-else-if="level === 5">
                    <slot></slot>
                </h5>
                <h6 v-else-if="level === 6">
                    <slot></slot>
                </h6>`,
                props: {
                    level: {
                        type: Number,
                        required: true
                    }
                }
            })
            // 方法三：
            // h是createElement的常用名
        app.component("anchored-heading3", {
            render() {
                return h(
                    "h" + this.level, //标签名
                    this.$slots.default() //标签默认插槽的内容
                )
            },
            props: {
                level: {
                    type: Number,
                    required: true
                }
            }
        })



    }
}