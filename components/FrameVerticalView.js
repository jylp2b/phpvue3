import MeasureLabel from './MeasureLabel.js';

export default {
    components: {
        Ml: MeasureLabel
    },

    template: `
        <g>
            <rect x="0" y="0" width="800" :height="AMax" style="stroke:#000; fill:none;" />
            <line x1="0" x2="800" :y1="fdt" :y2="fdt" style="stroke:#000; fill:none;" />
        </g>
    `,

    props: {
        sa: {
            type: Number,
            default: 0
        },
        sc: {
            type: Number,
            default: 0
        },
        sd: {
            type: Number,
            default: 0
        },
        se: {
            type: Number,
            default: 0
        },
        fdt: {
            type: Number,
            default: 0
        },
        flip: {
            type: Boolean,
            default: false
        },
    },

    methods: {
        svgPos(x, y, r) {
            return "translate(" + x + "," + y + ") rotate(" + r + ")";
          }
    },

    computed: {
        AMax() {
            if (this.sa > 150) {
                return 150;
            }
            return this.sa;
        }
    }
}