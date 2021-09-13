
$(document).ready(function (){
    getAllLgasForResult();
})


function getAllLgasForResult(){
    var lgaId = 0;
    var name = 0;
    $.get('http://127.0.0.1:8000/api/lgas/25', function (data, status){
        if(data.lgas.length==0){
            alert("Only Delta State is Available. thanks");
        }else{
            for(let i = 0; i<data.lgas.length; i++){
                lgaId = data.lgas[i].lga_id;
                name = data.lgas[i].lga_uniqueid;
                $("#lga-by-state").append("<input type='checkbox' id='"+data.lgas[i].lga_name+"' onclick='getResult("+lgaId+")' value='"+ data.lgas[i].lga_name+"'/>"+data.lgas[i].lga_name+"<br>");
            }
        }
    })
}

function getResult(lgaID,name){
    $("#lga-result-body").html("");
        $.get('http://127.0.0.1:8000/api/lga/result/sum/'+lgaID, function (data, status){
            for (let i=0; i<data.lga_result.length; i++){
                $("#lga-result-body").append("<tr><td>"+data.lga_result[i].party_abbreviation+"</td><td>"+data.lga_result[i].party_score+"</td></tr>");
            }
        })
}