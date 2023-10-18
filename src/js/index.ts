import './../scss/index.scss';
import Collapsify from './Collapsify.ts';

// @ts-ignore
// also if argument is not used it should be passed a _
var primero = new Collapsify({
    onSlideStart: (isOpen:boolean, _contentID ) => {
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