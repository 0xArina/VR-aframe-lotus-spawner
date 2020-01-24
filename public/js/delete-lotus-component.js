'use strict'

AFRAME.registerComponent('delete-lotus-component',{
    schema: {},
    init: function(){
        //definition
        const Context_AF = this; //refers to "this" component

        //add event listener for "click" event on whatever entity has this component
        Context_AF.el.addEventListener('click',function(event){
            console.log("clicked!!");
            Context_AF.deleteMyself();
        });

        //when "hovering" make larger
        Context_AF.el.addEventListener('mouseenter', function(event){
            //el element
            //object3D = three.js 3D geometry object
            //scale = three.js vector that represents scale
        Context_AF.el.object3D.scale.set(0.5, 0.5, 0.5);
        });

        Context_AF.el.addEventListener('mouseleave', function(event){
            Context_AF.el.object3D.scale.set(0.3, 0.3, 0.3);
        });  
    },
   deleteMyself : function(){
       //defenition
       const Context_AF = this;
       //only a parentNode can delete childNodes    
       Context_AF.el.parentNode.removeChild(Context_AF.el);  
   }
});