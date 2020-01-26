'use strict'

AFRAME.registerComponent('delete-lotus-component',{
    schema: {},
    init: function(){
        const Context_AF = this; //refers to "this" component

        //add event listener for "click" event on whatever entity has this component
        Context_AF.el.addEventListener('click',function(event){
            console.log("clicked!!");
            //delete function
            Context_AF.deleteLotus();
        });

        //when "hovering" make larger
        Context_AF.el.addEventListener('mouseenter', function(event){
            Context_AF.el.object3D.scale.set(0.4, 0.4, 0.4);
        });

        Context_AF.el.addEventListener('mouseleave', function(event){
            Context_AF.el.object3D.scale.set(0.3, 0.3, 0.3);
        });  
    },
    
    //custom delete function
    deleteLotus : function(){
       const Context_AF = this;
       //only a parentNode can delete childNodes    
       Context_AF.el.parentNode.removeChild(Context_AF.el);  
   }
});