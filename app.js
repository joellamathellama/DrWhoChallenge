function populate (){
  $('table').empty();
  var start = $('#start').val() || 10;
  var end = $('#end').val() || 100;
  if(start > end){
    $('#test').append('<tr><td>Start MUST be less than the end!</td></tr>');
    return;
  }
  var counter = start;
  for(var j=1; j<=Math.ceil(end/10); j++){
    $('#test').append("<tr id=" + j + "></tr>");
    for(var i=1; i<=10; i++){
      if(counter <= end){
        if(counter % 4 === 0 && counter % 6 === 0 && counter !== 0){
          $('#' + j).append('<td class="drwho">Dr. Who</td>');
        }
        else if(counter % 4 === 0 && counter !== 0){
          $('#' + j).append('<td class="drwho">Dr</td>');
        }
        else if(counter % 6 === 0 && counter !== 0){
          $('#' + j).append('<td class="drwho">Who</td>');
        }
        else{
          $('#' + j).append('<td>' + counter + '</td>') ;
        }
      }
      counter++;
    }
  }
}

populate();
$('#submit').on('click', populate);