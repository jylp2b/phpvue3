import MeasureLabel from './MeasureLabel.js';

export default {
    components: {
        Ml: MeasureLabel
    },

    template: `
        <polyline :points="shape" style="stroke:#000; fill:none;" />
        <Ml 
            myID="measure-a" 
            :length="AMax" 
            :label="sa" 
            :position="svgPos(0,AMax,-90)"
            level="2"
            :flip="flip" >
        </Ml>
        <Ml
            myID="measure-b" 
            :length="sb" 
            :label="sb" 
            :position="svgPos(0,sb,-90)"
            :flip="flip">
        </Ml>
        <Ml
            myID="measure-c" 
            :length="sc" 
            :label="sc"
            :position="svgPos(0,0,0)"
            :flip="flip">
        </Ml>
        <Ml
            myID="measure-d" 
            :length="sd" 
            :label="sd"
            :position="svgPos(0,(AMax+20),0)"
            :flip="flip">
        </Ml>
        <Ml
            myID="measure-fdt" 
            :length="fdt" 
            :label="fdt"
            :position="svgPos(sd,0,90)"
            :flip="flip">
        </Ml>
        <Ml
            myID="measure-less-fdt" 
            :length="AMax - fdt - se" 
            :label="sa - fdt - se"
            :position="svgPos(sd,fdt,90)"
            :flip="flip">
        </Ml>
        <Ml v-if="se > 0"
            myID="measure-e" 
            :length="se" 
            :label="se"
            :position="svgPos(sd,AMax-se,90)"
            :flip="flip">
        </Ml>
    `,
  
    props: {
        sa: {
            type: Number,
            default: 0
        },
        sb: {
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
        shape: {
            type: String,
            default: ''
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
            return this.sa
        }
    }
  }