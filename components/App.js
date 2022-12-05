import Outline from './Outline.js';
import FrameCutView from './FrameCutView.js';
import FrameVerticalView from './FrameVerticalView.js';
import MeasureLabel from './MeasureLabel.js';

export default {
    components: {
      Outline : Outline,
      Fcv : FrameCutView,
      Fvv : FrameVerticalView,
      Ml : MeasureLabel,
    },
    data() {
      return {
        'fA': 150,
        'fB': 20,
        'fC': 45,
        'fD': 68,
        'fE': 0,
        'fdt': 63,
        'max':150,
        'depth':30,
        'height': 2130,
        'lock_height': 1150,
        'forty_five': false,
        'cutX': "40",
        'verticalX': "200",
      }
    },

    computed: {
      // L Cut Frame
      CutFrameShape() {
        return "0,"+this.fB+" 0,0 "+this.fC+",0 "+this.fC+","+(this.fdt+13)+" "+(this.fC+10)+","+(this.fdt+13)+" "+(this.fC+10)+","+this.fdt+" "+this.fD+","+this.fdt+" "+this.fD+","+this.AMax+" 0,"+this.AMax+" 0,"+(this.AMax-this.fB)
      },
      AMax() {
        if (this.fA > this.max) {
          return this.max
        }
        return this.fA
      },
      HingePos() {
        let y = this.AMax+125;
        return "translate("+this.cutX+","+ y +") scale(1,-1)";
      },
      HingeVerticalPos() {
        let y = this.AMax+125;
        return "translate(" + this.verticalX + "," + y +") scale(1,-1)";
      },
      LockPos() {
        let y = this.AMax+185;
        return "translate("+this.cutX+","+ y +")";
      },
      LockVerticalPos() {
        let y = this.AMax+185;
        return "translate(" + this.verticalX + ","+ y +")";
      }
    }
  }