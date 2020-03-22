var counter=1;
var counter1=1;
var lastelement="none";
var lastexperience="none";
var achivementarray=[];
var experiencearray=[];

function openpage(a,b) {
  if(document.getElementById(a).value.length==0 || document.getElementById(b).value.length==0){
    window.alert("Please insert all the required field")
  }
  else{
  window.sessionStorage.firstname=document.getElementById(a).value;
  window.sessionStorage.password=document.getElementById(b).value;
  window.open("register.html","_self");
}
}

function name(){
  var firstname= window.sessionStorage.firstname;
  var insertname= "Name : "+ firstname;
  document.getElementById("registername").innerHTML = insertname;
}

function pass(){
  var pass= window.sessionStorage.password;
  var passfield= "Password : "+ pass;
  document.getElementById("password").innerHTML = passfield;
}

function addmoreachievement(){
          var elmnt = document.getElementById("achievement0");
          var cln = elmnt.cloneNode(true);
          var bar= document.createElement("BR");
          cln.id="achievement"+counter;
          cln.value=null;
          if(lastelement=="none"){
            lastelement=elmnt;
          }
          elmnt.parentNode.insertBefore(cln, lastelement.nextSibling);
          elmnt.parentNode.insertBefore(bar, lastelement.nextSibling);
          counter++;
          lastelement=cln;
}

function addmoreexperience(){
          var elmnt = document.getElementById("organization0");
          var cln = elmnt.cloneNode(true);
          var bar= document.createElement("BR");
          cln.id="organization"+counter1;
          cln.value=null;
          if(lastexperience=="none"){
            lastexperience=elmnt;
          }
          elmnt.parentNode.insertBefore(cln, lastexperience.nextSibling);
          elmnt.parentNode.insertBefore(bar, lastexperience.nextSibling);
          counter1++;
          lastexperience=cln;
}

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function readURL(input)
{
    document.getElementById("bannerImg").style.display = "block";

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById("bannerImg").src =  e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function submit(birthdate){
  for(i=0;i<counter;i++){
    var itemname= "achievement"+i;
    var val= document.getElementById(itemname).value;
    achivementarray.push(val);
  }
  for(i=0;i<counter1;i++){
    var itemname= "organization"+i;
    var val= document.getElementById(itemname).value;
    experiencearray.push(val);
  }
  window.sessionStorage.birthdate=document.getElementById("datefield").value;
  window.sessionStorage.setItem('achievement', JSON.stringify(achivementarray));
  window.sessionStorage.setItem('experience', JSON.stringify(experiencearray));
  bannerImage = document.getElementById('bannerImg');
  imgData = getBase64Image(bannerImage);
  window.sessionStorage.setItem("imgData",imgData);
  window.open("cvpage.html","_self");
}



function loaddata(){
  var dataImage = window.sessionStorage.getItem('imgData');
  bannerImg = document.getElementById("bannerImg");
  bannerImg.src = "data:image/png;base64," + dataImage;
  var names= window.sessionStorage.firstname;
  document.getElementById("name").innerHTML = names;
  var birhtday=window.sessionStorage.birthdate;
  var insertname= "Birthdate : "+ birhtday;
  document.getElementById("birth").innerHTML=insertname;
  var storedachievements = JSON.parse(window.sessionStorage.getItem('achievement'));
  var storedexperience = JSON.parse(window.sessionStorage.getItem('experience'));
  var firstlist = document.getElementById("achievementlist");
  var secondlist = document.getElementById("experiencelist");
  for(i=0;i<storedachievements.length;i++){
    var li= document.createElement("li");
    li.appendChild(document.createTextNode(storedachievements[i]));
    firstlist.appendChild(li);
  }
  for(i=0;i<storedexperience.length;i++){
    var li= document.createElement("li");
    li.appendChild(document.createTextNode(storedexperience[i]));
    secondlist.appendChild(li);
  }
}
