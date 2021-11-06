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

function generateResume(){
    console.log('generate resume function working properly.');
    let nameField=document.getElementById('nameField').value;
    document.getElementById('nameT1').innerHTML=nameField;
    document.getElementById('nameT2').innerHTML=nameField;
    // changing contacts.
    let contactf=document.getElementById('contactField').value;
    document.getElementById('contactT').innerHTML = contactf;
    let addressf=document.getElementById('addressField').value;
    document.getElementById('addressT').innerHTML = addressf;
    let fbf=document.getElementById('fbField').value;
    document.getElementById('fbT').innerHTML = fbf;
    let instaf=document.getElementById('instaField').value;
    document.getElementById('instaT').innerHTML = instaf;
    let linkedf=document.getElementById('linkedField').value;
    document.getElementById('linkedT').innerHTML = linkedf;

    //objective
    let objectivef=document.getElementById('objectiveField').value;
    document.getElementById('objectiveT').innerHTML=objectivef;

    //work experience.
    let wes=document.getElementsByClassName('weField');
    let str='';
    
    for(let e of wes){
        str+=`<li>${e.value}</li>`
    }
    document.getElementById('workexperienceT').innerHTML=str;

    //academic qualifications.
    let aqs=document.getElementsByClassName('eqField');
    let str1='';

    for(let e of aqs){
        str1+=`<li>${e.value}</li>`
    }
    document.getElementById('aqT').innerHTML=str1;

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
}
function downloadResume(){
    window.print();
}