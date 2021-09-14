
$(document).ready(function (){
    getAllLgasForResult();
})


function getAllLgasForResult(){
    $.get('http://127.0.0.1:8000/api/lgas/25', function (data, status){
        if(data.lgas.length==0){
            alert("Only Delta State is Available. thanks");
        }else{
            for(let i = 0; i<data.lgas.length; i++){
                $("#lga-by-state").append("<option value='"+data.lgas[i].lga_id+ "'>"+data.lgas[i].lga_name+"</option>");
            }
        }
    })
}

function getResult(){
    var lgaID = $("#lga-by-state").val();
    $("#lga-result-body").html("");
    $.get('http://127.0.0.1:8000/api/lga/result/sum/'+lgaID, function (data, status){
        for (let i=0; i<data.lga_result.length; i++){
            $("#lga-result-body").append("<tr><td>"+data.lga_result[i].party_abbreviation+"</td><td>"+data.lga_result[i].party_score+"</td></tr>");
        }
    })
}