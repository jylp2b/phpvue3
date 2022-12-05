export default {

    template:`
    <g id="outline">
        <rect x="0" y="0" height="835" width="1200" style="stroke:#f00; fill:none;"/>
        <line x1="0" x2="1200" y1="42.5" y2="42.5" style="stroke:#f00;" />
        <line x1="0" x2="1200" y1="85" y2="85" style="stroke:#f00;" />
        <line x1="1100" x2="1100" y1="0" y2="585" style="stroke:#f00;" />


        <line x1="0" x2="1200" y1="300" y2="300" style="stroke:#f00;stroke-dasharray: 10 5;" />
        <line x1="0" x2="1200" y1="585" y2="585" style="stroke:#f00;stroke-dasharray: 10 5;" />
        <line x1="150" x2="150" y1="85" y2="835" style="stroke:#f00;stroke-dasharray: 10 5;" />
    </g>
    `
}