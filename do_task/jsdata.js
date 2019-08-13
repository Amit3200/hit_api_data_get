    function get_api_address() {
        var api_address = document.getElementById("api_address").value;
        var request = new XMLHttpRequest();
        var data_output = document.getElementById("card2_data");
        request.open('GET', api_address, true);
        request.onload = function () {
            var s = 0;
            var data = JSON.parse(this.response);
            data = data[0];
            if (request.status >= 200 && request.status < 400) {
                console.log(data);
                collection = data;
                var card2list = document.createElement("div");
                card2list.setAttribute('class', 'card card-lift--hover shadow border-0 card card2_dio');
                var cardbody = document.createElement("div");
                cardbody.setAttribute('class', 'card-body py-5');
                var icon = document.createElement('div');
                icon.setAttribute('class',
                    'icon icon-shape icon-shape-primary rounded-circle mb-4');
                var i_font = document.createElement('i');
                i_font.setAttribute('class', 'ni ni-check-bold');
                icon.appendChild(i_font);
                var break_output = document.createElement("h6");
                var ul_open = document.createElement("ul");
                var li_open = document.createElement("li");
                var p1 = document.createElement('p');
                var p2 = document.createElement('p');
                var p3 = document.createElement('p');
                var p4 = document.createElement('p');
                var p5 = document.createElement('p');
                var p6 = document.createElement('p');
                var p7 = document.createElement('p');
                var p8 = document.createElement('p');
                var in1 = document.createElement("input");
                var in2 = document.createElement("input");
                var in3 = document.createElement("input");
                var in4 = document.createElement("input");
                var in5 = document.createElement("input");
                var in6 = document.createElement("input");
                var in7 = document.createElement("input");
                var in8 = document.createElement("input");
                in1.setAttribute('class', 'form-control');
                in1.setAttribute('id', 'uid');
                var in2 = document.createElement("input");
                in2.setAttribute('class', 'form-control');
                in2.setAttribute('id', 'uname');
                var in3 = document.createElement("input")
                in3.setAttribute('class', 'form-control');
                in3.setAttribute('id', 'uphone');
                var in4 = document.createElement("input");
                in4.setAttribute('class', 'form-control');
                in4.setAttribute('id', 'uusername');
                var in5 = document.createElement("input");
                in5.setAttribute('class', 'form-control');
                in5.setAttribute('id', 'uwebsite');
                var in6 = document.createElement("input");
                in6.setAttribute('class', 'form-control');
                in6.setAttribute('id', 'ucompany');
                var in7 = document.createElement("input");
                in7.setAttribute('class', 'form-control');
                in7.setAttribute('id', 'uphrase');
                var in8 = document.createElement("input");
                in8.setAttribute('class', 'form-control');
                in8.setAttribute('id', 'ubs');
                in1.value = (collection.id).toString();
                in2.value = (collection.name).toString();
                in3.value = (collection.phone).toString();
                in4.value = (collection.username).toString();
                in5.value = (collection.website).toString();
                in6.value = (collection.company.name).toString();
                in7.value = (collection.company.catchPhrase).toString();
                in8.value = (collection.company.bs).toString();
                var sp1 = document.createTextNode("ID : ");
                p1.appendChild(sp1);
                p1.appendChild(in1);
                p1.appendChild(document.createElement("br"));
                var sp2 = document.createTextNode("Name : ");
                p2.appendChild(sp2);
                p2.appendChild(in2);
                p2.appendChild(document.createElement("br"));
                var sp3 = document.createTextNode("Phone : ");
                p3.appendChild(sp3);
                p3.appendChild(in3);
                p3.appendChild(document.createElement("br"));
                var sp4 = document.createTextNode("Username : ");
                p4.appendChild(sp4);
                p4.appendChild(in4);
                p4.appendChild(document.createElement("br"));
                var sp5 = document.createTextNode("Website : ");
                p5.appendChild(sp5);
                p5.appendChild(in5);
                p5.appendChild(document.createElement("br"));
                var sp6 = document.createTextNode("Company name : ");
                p6.appendChild(sp6);
                p6.appendChild(in6);
                p6.appendChild(document.createElement("br"));
                var sp7 = document.createTextNode("Company phrase : ");
                p7.appendChild(sp7);
                p7.appendChild(in7);
                p7.appendChild(document.createElement("br"));
                var sp8 = document.createTextNode("Company business sector : ");
                p8.appendChild(sp8);
                p8.appendChild(in8);
                p8.appendChild(document.createElement("br"));
                cardbody.appendChild(icon);
                cardbody.appendChild(p1);
                cardbody.appendChild(p2);
                cardbody.appendChild(p3);
                cardbody.appendChild(p4);
                cardbody.appendChild(p5);
                cardbody.appendChild(p6);
                cardbody.appendChild(p7);
                cardbody.appendChild(p8);
                var subbtn = document.createElement("button");
                subbtn.setAttribute('class', 'btn btn-lg btn-success fbtn');
                subbtn.innerHTML = "Submit";
                subbtn.setAttribute('onclick', 'submitform()')
                cardbody.appendChild(subbtn);
                card2list.appendChild(cardbody);
                data_output.appendChild(card2list);
                s += 1;
            } else {
                console.log("error");
            }
        }
        request.send();
    }

    function submitform() {
        var uid = document.getElementById('uid').value;
        var uname = document.getElementById('uname').value;
        var uphone = document.getElementById('uphone').value;
        var uusername = document.getElementById('uusername').value;
        var uwebsite = document.getElementById('uwebsite').value;
        var ucompany = document.getElementById('ucompany').value;
        var uphrase = document.getElementById('uphrase').value;
        var ubs = document.getElementById('ubs').value;
        var user_updated_data = {
            "id": uid,
            "name": uname,
            "phone": uphone,
            "username": uusername,
            "email": uwebsite,
            "company": {
                "name": ucompany,
                "catchPhrase": uphrase,
                "bs": ubs,
            }
        };
        console.log(user_updated_data);
        var request = new XMLHttpRequest(); // new HttpRequest instance 
        var theUrl = "https://jsonplaceholder.typicode.com/posts";
        request.open("POST", theUrl);
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.send(JSON.stringify(user_updated_data));
        console.log(request.status);
        if (request.status >= 200 && request.status < 400) {
            Swal.fire(
                'Data Updated',
                'All the records are updated and saved',
                'success'
            );
        } else {
            Swal.fire(
                'Oops!',
                'Something went wrong please try again later',
                'warning'
            );
        }
        setTimeout(function () {
            location.reload();
        }, 3000);
    }