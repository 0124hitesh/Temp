<script>
        var a=document.getElementById("con");
        a.style.width="100px";
        a.style.height="100px"
        a.style.backgroundColor="grey";
        a.innerHTML="Textttt";

        var b=document.getElementById("btn");
        b.onclick=function(){
            confirm("teriii");
            a.style.backgroundColor="pink";
        }
    </script>