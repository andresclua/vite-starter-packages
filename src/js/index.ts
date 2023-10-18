import './../scss/index.scss';
import Collapsify from './Collapsify.ts';

// @ts-ignore
var SimpleExample = new Collapsify({})

// @ts-ignore
var different = new Collapsify({
    nameSpace:'different',
})

const nested = new Collapsify({
    nameSpace: "nested",
    closeOthers: false
});

// also if argument is not used it should be passed a _
// const myAccrodion2 = new Collapsify({
//     nameSpace:'test',
//     activeClass: "--is-active",
//     toggleButtonAttr:'data-test-control',
//     toggleContentAttr:'data-test-content'
// });


// setTimeout(() => {
//     console.log('destroy!')
//     myAccrodion2.destroy('uniqContentID1');
//   }, 5000);