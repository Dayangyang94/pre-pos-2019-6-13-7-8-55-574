'use strict';

function countSameElements(collection) {
  var myArray=new Array();
    var myObject={};
    var findObj=0;
    for(var i=0;i<collection.length;i++){
  if(collection[i].indexOf("-") != -1){
  var arr=collection[i].split("-");
  for(var key in myObject){
  findObj=0;
  if(key==arr[0]){
  myObject[key]+=parseInt(arr[1]);
  findObj=1;
  break;
  }
  }
  if(findObj==0){
  myObject[arr[0]]=parseInt(arr[1]);
  }
  }else{
  for(var key in myObject){
  findObj=0;
  if(key==collection[i]){
  myObject[key]++;
  findObj=1;
  break;
  }
  }
  if(findObj==0){
  myObject[collection[i]]=1;
  }
  } 
  }
  
    for(var myKey in myObject){
      myArray.push({key:myKey,count:myObject[myKey]})
    }
    return myArray;
  }