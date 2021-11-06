function addNewWEfield(){
    console.log('dding new field');
    let newNode=document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    // newNode.classList.add();
    newNode.classList.add('mt-2')
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','Enter here')
    let weOb=document.getElementById('we');
    let weAddButtonOb=document.getElementById('weAddButton');

    weOb.insertBefore(newNode,weAddButtonOb);
}
function addNewACqual(){
    console.log('this is working fine.');
    let newNode=document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    // newNode.classList.add();
    newNode.classList.add('mt-2')
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','Enter here')
    let aqOb=document.getElementById('aq');
    let aqAddButtonOb=document.getElementById('aqAddButton');
    aqOb.insertBefore(newNode,aqAddButtonOb);
}