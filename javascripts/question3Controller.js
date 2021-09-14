const indexArray =[];
$(document).ready(function (){
    // const namesArray = [];
    $.get('http://127.0.0.1:8000/api/parties',function (data, status){
        for(let i=0; i<data.parties.length; i++){
            indexArray[i] = data.parties[i].partyname;
            $("#upload-form").append("<label>"+data.parties[i].partyname+":</label><input type='text' id='"+data.parties[i].partyname+"' /><br>")
        }
        $("#upload-form").append("<button type='button' onclick='uploadResult()'>Upload</button>");
    })
})

function uploadResult(){
    const dataArray =[];
    const unitNumber = $("#polling-unit-num").val();
    const agentName = $("#agent-name").val();
    for (let i = 0; i<indexArray.length; i++){
        dataArray[i] =  $("#"+indexArray[i]).val();
    }
    const resultObj ={
        result:dataArray
    };
    console.log(resultObj);
    $.post('http://127.0.0.1:8000/api/upload-result',{unitNumber:unitNumber,agentName:agentName,dataKey:indexArray,result:dataArray}, function (data){
        console.log(data);
    })
}