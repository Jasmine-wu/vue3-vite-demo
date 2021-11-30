<script>
import { h } from "vue";
export default {
  name: "AnchoredHeading4",
  render() {
    return h("h" + this.level, this.$slots.default());
  },
  props: {
    level: {
      type: [Number, String],
      required: true,
    },
  },
};
</script>