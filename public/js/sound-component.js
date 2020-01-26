'use strict'

AFRAME.registerComponent('sound-component',{
    init: function() {

        let audio = document.querySelector("#music");
        this.el.addEventListener('click', () => {
            audio.play();
        });
      }
});