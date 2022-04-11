const cityname= document.getElementById("cityname");
const submitbhtn = document.getElementById('submitbtn');
const city_name=document.getElementById("city_name");
const temp=document.getElementById('temp');
const temp_status=document.getElementById("temp_status");
const datahide= document.querySelector('.middle_layer');


const getInfo= async(event)=>{
    event.preventDefault();     //to not to load page again n again
    //alert("hello");
    let cityval= cityname.value;
    
    if(cityval===""){
        city_name.innerText="PLEASE WRITE CITY NAME BEFORE SEARCHING";
        datahide.classList.add('data_hide');
    }else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=d0052772a2500e286668db393e135749`;
            const response= await fetch(url);
            const data = await response.json();
            console.log(data);
            const arrData= [data];
            city_name.innerText=`${arrData[0].name} , ${arrData[0].sys.country}`;
            temp.innerText=arrData[0].main.temp;
            //temp_status.innerText=arrData[0].weather[0].main;
            
            let tempMood= arrData[0].weather[0].main;
            //condition to check weather
            if(tempMood==="Clear"){
                temp_status.innerHTML=
                "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            else if(tempMood==="Clouds"){
                temp_status.innerHTML=
                "<i class='fas fa-cloud'style='color: #f1f2f6;'></i>";
            }
            else if(tempMood==="Rain"){
                temp_status.innerHTML=
                "<i class='fas fa-cloud-rain'style='color: #a4b0be;'></i>";
            }
            else {
                temp_status.innerHTML=
                "<i class='fas fa-cloud'style='color: #f1f2f6;'></i>";
            }
            datahide.classList.remove('data_hide');

        }catch{
            city_name.innerText="PLEASE ENTER THE CITY NAME PROPERLY";
            datahide.classList.add('data_hide');
        }
    }
}
submitbhtn.addEventListener('click',getInfo);
