'use strict'

AFRAME.registerComponent('create-lotus-component',{
    schema: {},
    init: function(){
        //definition
        const Context_AF = this; //refers to "this" component

        //add event listener for "click" event on whatever entity has this component
        Context_AF.el.addEventListener('click',function(event){
            console.log("clicked!!");
            Context_AF.createLotus();
        });

        //when "hovering" make larger
        //Context_AF.el.addEventListener('mouseenter', function(event){
            //el element
            //object3D = three.js 3D geometry object
            //scale = three.js vector that represents scale
        //Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1 );
        //});

        //Context_AF.el.addEventListener('mouseleave', function(event){
          //  Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
        //});  
    },
    //custom function for creating random cows
    createLotus :function(){
        const Context_AF = this;

        //create an html element/entity that loads in cows model
        let lotusElem = document.createElement('a-entity');
        lotusElem.setAttribute('class', 'clickable');
        lotusElem.setAttribute('obj-model', {obj: 'assets/models/lotus_OBJ_high.obj'});
        lotusElem.setAttribute('material', {src:'assets/textures/lotus_petal_diffuse.jpg'});
        lotusElem.setAttribute('delete-lotus-component',{});

        //random transforms
        lotusElem.setAttribute('position', {x:(Math.random()*6.0) - 3.0, y:0, z:-4.0 - (Math.random()*3.0)});
       // const randScale = ((Math.random() * 1.0)-0.6);
        lotusElem.setAttribute('scale', {x:0.3, y:0.3, z:0.3}); //random scale
        lotusElem.setAttribute('rotation', {x:0, y:Math.random()* 360.0, z:0}); //random y rotation

        //last step is to attach to scne
        let scene = document.querySelector('a-scene');
        scene.appendChild(lotusElem);
    } 
});