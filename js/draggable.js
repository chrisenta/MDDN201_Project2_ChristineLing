var gridWidth = 200;
var gridHeight = 100;
Draggable.create(".box", {
    type:"x",
    edgeResistance:0.1,
    bounds:"#boundbox",
    lockAxis:true,
    throwProps:true,
     snap: {
         x: function(endValue) {
             return Math.round(endValue / gridWidth) * gridWidth;
         },
        
     }
});

