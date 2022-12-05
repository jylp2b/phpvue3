export default {

  template: `
    <button :disabled="process" :class="mycolor" >
      {{ computedText }}
    </button>
  `,

  props: {
    mycolor: {
      type: String,
      default: "red"
    },
    process: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    computedText() {
      return this.mycolor + " button!";
    }
  }
}