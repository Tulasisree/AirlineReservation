var flights = [
    {
        'id':'1234',
      'timings':'2:00 - 4:00',
      'from':'New Delhi',
      'to':'Abu Dhabi',
       'cost':3000,
    },
    {
        'id':'1567',
        'timings':'4:00 - 7:00',
        'from':'New Delhi',
        'to':'Muscut',
         'cost':5000
    },
    {
        'id':'2345',
        'timings':'3:00 - 5:00',
        'from':'Abu Dhabi',
        'to':'New Delhi',
         'cost':3000,
    },
    {
        'id':'2678',
        'timings':'2:00 - 3:00',
        'from':'Abu Dhabi',
        'to':'Muscut',
         'cost':3000,
    },
    {
        'id':'3456',
        'timings':'2:00 - 5:00',
        'from':'Muscut',
        'to':'New Delhi',
         'cost':5500,
    },
    {
        'id':'3789',
      'timings':'6:00 - 7:00',
      'from':'Muscut',
      'to':'Abu Dhabi',
       'cost':2000,
    },
]

function tableCreate(){
    var body = document.body,
        tbl  = document.createElement('table');
    tbl.style.width  = '100px';
    tbl.style.border = '1px solid black';

    for(var i = 0; i < 2; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < 3; j++){
            
                var td = tr.insertCell();
                if(j==1){
                td.appendChild(document.createTextNode('Timings'));
                }else if(j==1){
                    td.appendChild(document.createTextNode('Flight No'));
                    }else if(j==1){
                        td.appendChild(document.createTextNode('Cost'));
                        }else if(j==1){
                            td.appendChild(document.createTextNode('Timings'));
                            }else if(j==1){
                                td.appendChild(document.createTextNode('Timings'));
                                }else if(j==1){
                                    td.appendChild(document.createTextNode('Timings'));
                                    }
        }
    }
    body.appendChild(tbl);
}

var form = document.getElementById("main-form");
form.addEventListener("submit",function(e){ 
    var from = document.getElementById('from').value;
var to = document.getElementById('to').value;
console.log(from);
console.log(to);
var num=0;
var t,n,c,f,to;
flights.forEach(function(flight){
    var from1 = flight.from;
    var to1= flight.to;
    
    if(from == from1 && to == to1){
        t= flight.timings;
        n = flight.id;
         c = flight.cost;
         f = flight.from;
         to = flight.to;
        num++;
    }
})



function tableCreate(){
    var body = document.body,
        tbl  = document.createElement('table');
        
    tbl.style.width  = '1050px';
    tbl.style.border = '3px solid ';
    
    for(var i = 1; i <= 2; i++){
        var tr = tbl.insertRow();
        for(var j = 1; j <= 5; j++){
                
                if(j==1 && i==1){
                    var td = tr.insertCell();
                td.appendChild(document.createTextNode('Timings'));
                td.className = 'table-headings'
                }else if(j==2 && i==1){
                    var td = tr.insertCell();
                    td.appendChild(document.createTextNode('Flight No'));
                    td.className = 'table-headings';
                    }else if(j==3 && i==1){
                        var td = tr.insertCell();
                        td.appendChild(document.createTextNode('Cost'));
                        td.className = 'table-headings';
                        }else if(j==4 && i==1){
                            var td = tr.insertCell();
                            td.appendChild(document.createTextNode('From'));
                            td.className = 'table-headings';
                         } else if(j==5 && i==1){
                            var td = tr.insertCell();
                            td.appendChild(document.createTextNode('To'));
                            td.className = 'table-headings';
                         }else if(j==1 && i==2){
                            var td = tr.insertCell();
                            td.appendChild(document.createTextNode(t));
                            td.className = 'table-des';
                            }else if(j==2 && i==2){
                                var td = tr.insertCell();
                                td.appendChild(document.createTextNode(n));
                                td.className = 'table-des';
                                }else if(j==3 && i==2){
                                    var td = tr.insertCell();
                                    td.appendChild(document.createTextNode(c));
                                    td.className = 'table-des';
                                    }else if(j==4 && i==2){
                                        var td = tr.insertCell();
                                        td.appendChild(document.createTextNode(f));
                                        td.className = 'table-des';
                                        }else if(j==5 && i==2){
                                            var td = tr.insertCell();
                                            td.appendChild(document.createTextNode(to));
                                            td.className = 'table-des';
                                            }
        }
    }
    body.appendChild(tbl);
}

if(num>0){  
    tableCreate();
    document.getElementById("btn").innerText = "Check for other flight";
    document.getElementById("btn").onclick = function(){
        window.location = "Flightstatus.html"; 
    }
}else{
    alert("no flight found");
}

e.preventDefault();
    
});


