'use strict'

AFRAME.registerComponent('create-lotus-component',{
    schema: { },
    init: function(){
        const Context_AF = this; //refers to "this" component

        //add event listener for "click" event on whatever entity has this component
        Context_AF.el.addEventListener('click',function(event){
            console.log("clicked!!");
            Context_AF.createLotus(); 
        });
    },

    //custom functions
    createLotus :function(){
        const Context_AF = this;

        //create an html element/entity that loads 3D model
        let lotusElem = document.createElement('a-entity');
        lotusElem.setAttribute('id', 'lotus');
        lotusElem.setAttribute('class', 'clickable');
        lotusElem.setAttribute('obj-model', {obj: 'assets/models/lotus_OBJ_high.obj'});
        lotusElem.setAttribute('material', {src:'assets/textures/lotus_petal_diffuse.jpg'});
        lotusElem.setAttribute('delete-lotus-component',{});

        //random transforms
        lotusElem.setAttribute('position', {x:(Math.random()*6.0) - 3.0, y:0, z:-4.0 - (Math.random()*3.0)});
        lotusElem.setAttribute('scale', {x:0.3, y:0.3, z:0.3}); 
        lotusElem.setAttribute('rotation', {x:0, y:Math.random()* 360.0, z:0}); //random y rotation
        
        //rotation animation
        lotusElem.setAttribute('animation', {property: 'rotation'});
        lotusElem.setAttribute('to', {x:0, y:360, z:0});
        
        //attach to scene
        let scene = document.querySelector('a-scene');
        scene.appendChild(lotusElem);
    }, 
});