'use strict'

AFRAME.registerComponent('delete-lotus-component',{
    schema: {},
    init: function(){
        //definition
        const Context_AF = this; //refers to "this" component

        //add event listener for "click" event on whatever entity has this component
        Context_AF.el.addEventListener('click',function(event){
            console.log("clicked!!");
         // Context_AF.pickUpLotus();
           // Context_AF.rotateLotus();
           // Context_AF.deleteMyself();
        });

        //when "hovering" make larger
        Context_AF.el.addEventListener('mouseenter', function(event){
            //el element
            //object3D = three.js 3D geometry object
            //scale = three.js vector that represents scale
        Context_AF.el.object3D.scale.set(0.4, 0.4, 0.4);
        });

        Context_AF.el.addEventListener('mouseleave', function(event){
            Context_AF.el.object3D.scale.set(0.3, 0.3, 0.3);
        });  
    },
    pickUpLotus: function(){
        var el = document.querySelector('#lotus');
       // Context_AF.el.object3D.scale.set(0.5, 0.5, 0.5);
       
       // el.object3D.position.y += 2;
        el.setAttribute('animation', {property: 'scale'});
        el.setAttribute('to', {x:0.8, y:0.8, z:0.8}); 
       
       /// el.setAttribute('to', {x:0, y: , z:0});
        //el.setAttribute('dur', '1000');
    },

    rotateLotus: function(){
       // const Context_AF = this;
       var el = document.querySelector('#lotus');
        el.setAttribute('animation', {property: 'rotation'});
        el.setAttribute('to', {x:0, y:360, z:0});

     },

    deleteMyself : function(){
       //defenition
       const Context_AF = this;
       //only a parentNode can delete childNodes    
       Context_AF.el.parentNode.removeChild(Context_AF.el);  
   }
});

//click -> ask to pick up , delete or release