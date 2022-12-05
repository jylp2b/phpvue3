export default {
    
    template: `
    <g :id="myID" :transform="position">
        <line x1="0" x2="0" y1="-5" :y2="levelValue" class="svgMeasure" />
        <line :x1="length" :x2="length" y1="-5" :y2="levelValue" class="svgMeasure" />
        <line v-if="label > 10" x1="0" :x2="length" :y1="levelValue+5" :y2="levelValue+5" class="svgMeasure" />
        <line v-if="label > 10" :x1="length/2 - labelWidth" :x2="length/2 + labelWidth" :y1="levelValue+5" :y2="levelValue+5" style="stroke-width: 2; stroke:#fff; fill:#fff;" />
        <text :transform="labelPosition" class="svgText">{{ label }}</text>
    </g>
    `,

    props: {
        myID: {
            type: String,
            default: ""
        },
        length: {
            type: Number,
            default: 0
        },
        label: {
            type: [String, Number],
            default: "0"
        },
        position: {
            type: String,
            default: ""
        },
        level: {
            type: Number,
            default: 1 
        },
        flip: {
            type: Boolean,
            default: false
        },
    },

    computed: {
        levelValue() {
            return this.level * -15;
        },
        labelPosition() {
            let y = ((this.level - 1) * -15) - 7;
            let scale = this.flip ? "-1" : "1";
            let rotate = "";

            if (this.flip && this.position.search("rotate(0)")) {
                rotate = "rotate(180, 0, -3)";
            }
        
            return "translate(" + (this.length / 2) + "," + y + ") scale("+ scale + ",1) " + rotate;
        },
        labelWidth() {
            if (this.label.toString().length > 2) {
                return 11;
            }
            return 7;
        }
    }
}