function loadjson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status =="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
loadjson("data.json",function(text)
{
  var data=JSON.parse(text);
  console.log(data);
  details(data.basic);
  careerinfo(data.career);
  education(data.education);
  skillset(data.skills);
})
var left=document.querySelector(".leftchild");
function details(det){
  var img=document.createElement("img");
  img.src=det.image;
  left.appendChild(img);
  var name = document.createElement("h3");
  name.textContent=det.name;
  left.appendChild(name);
  var mail=document.createElement("a");
  mail.href="mailto:gkdurgaprasad995@gmail.com";
  mail.textContent = det.email;
  left.appendChild(mail);
  var number = document.createElement("p");
  number.textContent=det.number;
  left.appendChild(number);
  var  addres = document.createElement("h2");
  addres.textContent=("addres");
  left.appendChild(addres);
  var hr = document.createElement("hr");
  left.appendChild(hr);
  var addres1 = document.createElement("p");
  addres1.textContent = det.addres;
  left.appendChild(addres1);

}
var right = document.querySelector(".rightchild");
function careerinfo(infodata){
  var add=document.createElement("h3");
  add.textContent="Carrer objective";
  right.appendChild(add);

  var info = document.createElement("p");
  info.textContent = infodata.info;
  right.appendChild(info);
}
function education(edu){
  var addres = document.createElement("h3");
  addres.textContent = "Education Qualifications";
  right.appendChild(addres);
    var hr = document.createElement("hr");
    right.appendChild(hr);
    var table1=document.createElement("table");
    table1.border="1";
    var tr1="<tr><th>institute</th><th>Degree</th><th>passedoubtyear</th></tr>";
    var tr2="";
    for(var i=0; i<edu.length;i++){
    tr2+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passout+"</td></tr>";

   }
    table1.innerHTML=tr1+tr2;
    right.appendChild(table1);


}
function skillset(sk){
  var s1 = document.createElement("h3");
  s1.textContent="Technical skills";
  right.appendChild(s1);
  var hr=document.createElement("hr");
  right.appendChild(hr);
  var ul = document.createElement("ul");
  for(var i=0; i<sk.length; i++){
    var li=document.createElement("li");
    li.textContent=sk[i].title+":"+sk[i].content;
    ul.appendChild(li);
  }
  right.appendChild(ul);
}
