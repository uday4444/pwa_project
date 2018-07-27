function Loadjson(file,callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4 && xhr.status == "200") {
       callback(xhr.responseText);
    }
  };
  xhr.send(null);
}



Loadjson("data.json",function(text)
{
  var data = JSON.parse(text);
  console.log(data);
  basics(data.details);

  careerinfo(data.career);

})
var childone = document.querySelector(".child1");
function basics(det){
  var image = document.createElement("img");
  image.src = det.image;
  childone.appendChild(image);


  var name = document.createElement("h4");
  name.textContent = det.name;
  childone.appendChild(name);


  var  phone = document.createElement("h4");
  phone.textContent = det.phone;
  childone.appendChild(phone);


  var email = document.createElement("a");
  email.href = "mailto:uday12345678@gmail.com";
  email.textContent = det.email;
  childone.appendChild(email);

  var add = document.createElement("h2");
  add.textContent = "Address";
  childone.appendChild(add);


  var hr = document.createElement("hr");
  childone.appendChild(hr);


  var p = document.createElement("p");
  p.textContent = det.address;
  childone.appendChild(p);

}


var childtwo =  document.querySelector(".child2");
function careerinfo(info) {
    var heading = document.createElement("h2");
    heading.textContent = "Career Objective";
    childtwo.appendChild(heading);

    var hr = document.createElement("hr");
    childone.appendChild(hr);

    var c = document.createElement("h2");
    c.textContent = info.objective;
    childtwo.appendChild(c);

    var heading = document.createElement("h2");
    heading.textContent = "Achievements";
    childtwo.appendChild(heading);

    var a = document.createElement("h2");
    a.textContent = info.achievements;
    childtwo.appendChild(a);


}
