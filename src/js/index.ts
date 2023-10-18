import './../scss/index.scss';
import Collapsify from './Collapsify.ts';

// @ts-ignore
var primero = new Collapsify({
    onSlideStart: (isOpen, ) => {
        console.log(isOpen)
        console.log('onSlideStart')
    },
    onSlideEnd:()=>{
        
    }
})



const myAccrodion2 = new Collapsify({
    nameSpace:'test',
    activeClass: "is-active-1",
    toggleButtonAttr:'data-test-control',
    toggleContentAttr:'data-test-content'
});


setTimeout(() => {
    console.log('destroy!')
    myAccrodion2.destroy('uniqContentID1');
  }, 5000);