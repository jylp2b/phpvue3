<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Vue.js in PHP</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <style>
    .blue {color: blue;}
    .red {color: red;}
    .green{color:green;}

  .svgText {
    fill:#f00;
    text-anchor:middle;
    font-size: 9px;
  }
  .svgTextBackground {
    stroke-width: 2; stroke:#fff; fill:#fff;
  }
  .svgMeasure {
    stroke:#3c3; 
    fill:none;
  }
  

  </style>
</head>

<body>
<div id="app">
<div class="row">
  <div class="col-1">
    <input class="form-control" type="number" v-model="fA" min="100">
    <input class="form-control" type="number" v-model="fB" min="0" :max="fA/2">
    <input class="form-control" type="number" v-model="fC" :max="fD-20">
    <input class="form-control" type="number" v-model="fD">
    <input class="form-control" type="number" v-model="fE">
    <input class="form-control" type="number" v-model="fdt">
    <input class="form-control" type="number" v-model="depth">
    <input class="form-control" type="number" v-model="lock_height">
  </div>

  <div class="col-11">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1200 835" style="font-family:Arial;"> -->
    
    <Outline></Outline>

    <g id="hinge-frame-cut" :transform="HingePos">
      <Fcv 
        :shape="CutFrameShape"
        :sa="fA"
        :sb="fB"
        :sc="fC"
        :sd="fD"
        :se="fE"
        :fdt="fdt"
        flip="true"
      ></Fcv>
    </g>

    <g id="lock-frame-cut" :transform="LockPos">
      <Fcv 
        :shape="CutFrameShape"
        :sa="fA"
        :sb="fB"
        :sc="fC"
        :sd="fD"
        :se="fE"
        :fdt="fdt"
      ></Fcv>
    </g>
    <g id="lock-frame-vertical" :transform="LockVerticalPos">
      <Fvv
        :sa="fA"
        :sb="fB"
        :sc="fC"
        :sd="fD"
        :se="fE"
        :fdt="fdt"
      ></Fvv>
    </g>

    

    <g id="lock-frame-cut" transform="translate(40,635)">
    <Fcv 
        :shape="CutFrameShape"
        :sa="fA-4"
        :sb="fB"
        :sc="fC"
        :sd="fD"
        :se="fE"
        :fdt="fdt-2"
      ></Fcv>
    </g>

  </svg>
  </div>
</div>
  
</div>

<script type="module">
  import App from "./components/App.js";  
  Vue.createApp(App).mount('#app');
</script>
</script>
</body>
</html>