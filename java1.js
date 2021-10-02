alert("欢迎来到ZhangXin的主页！ 下面介绍有几个方面的内容：");
var para,sss,tt;
para = document.getElementsByClassName("boxtitle");
for(i=0;i<para.length;i++)
alert(i+1+": "+para[i].firstChild.nodeValue);
sss = document.getElementById("main_container");
tt = sss.getAttribute("title");
alert(tt);
sss.setAttribute("title","and interests included");
alert(sss.getAttribute("title"));