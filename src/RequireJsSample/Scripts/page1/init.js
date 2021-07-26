/// <reference path="page.js"/>
/// <reference path="../app/jquery.js"/>

$(function() {
    
    const b = () => {
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                resolve();
            }, 1000);
        });
    };
    
    const c = async name => {
        console.log(name);
        await b();
        console.log('waited for b');
    }
    c('this is a name').then(() => {
        console.log('after c');
    });
    
    page.go();
});