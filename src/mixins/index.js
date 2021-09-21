export const followMixin = {
    // 关注逻辑
    data() {
        return {
            loading: false
        }
    },
    methods: {
        // 点击关注
        follow() {
            this.loading = true;
            // 模拟请求
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        }
    },
}