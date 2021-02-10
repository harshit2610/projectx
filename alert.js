

function f1()
{
if((a1.value=="aptech" && a2.value=="abc" && a3.value=="abc") || (a1.value=="amit" && a2.value=="xyz" && a3.value=="xyz"))
{
sessionStorage.setItem("user",a1.value)
alert(sessionStorage.getItem("user"))
location.href="welcome.html"
}
else
alert("MAIL SENT!")
} 
