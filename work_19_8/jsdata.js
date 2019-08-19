function isUrl(s) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regexp.test(s);
}
//https://api.myjson.com/bins/e7r0z
function check_null(s){
    console.log(s);
    if(s===null || s==undefined || s.lenght<=1 || s=='' || s==' ')
        return "None";
    else
        return s.toString();
}
function get_api_address() {
    var api_address = document.getElementById("api_address").value;
    if (isUrl(api_address)) {
        var request = new XMLHttpRequest();
        var data_output = document.getElementById("card2_data");
        request.open('GET', api_address, true);
        request.onload = function () {
            var s = 0;
            var data = JSON.parse(this.response);
            if (request.status >= 200 && request.status < 400) {
                data.forEach(collection=>{
                console.log(collection);
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
                var form_build = document.createElement("form");
                form_build.setAttribute('class', 'form-build');
                form_build.setAttribute('method', 'post');
                var p1 = document.createElement('p');
                var p2 = document.createElement('p');
                var p3 = document.createElement('p');
                var p4 = document.createElement('p');
                var p5 = document.createElement('p');
                var p6 = document.createElement('p');
                var p7 = document.createElement('p');
                var p8 = document.createElement('p');
                var p9 = document.createElement('p');
                var p10 = document.createElement('p');
                var p11 = document.createElement('p');
                var p12 = document.createElement('p');
                var p13 = document.createElement('p');
                var p14 = document.createElement('p');
                var p15 = document.createElement('p');
                var p16 = document.createElement('p');
                var p17 = document.createElement('p');
                var p18 = document.createElement('p');
                var p19 = document.createElement('p');
                var p20 = document.createElement('p');
                var p21 = document.createElement('p');
                var p22 = document.createElement('p');
                var p23 = document.createElement('p');
                var p24 = document.createElement('p');
                var p25 = document.createElement('p');
                var p26 = document.createElement('p');
                var p27 = document.createElement('p');
                var in1 = document.createElement("input");
                var in2 = document.createElement("input");
                var in3 = document.createElement("input");
                var in4 = document.createElement("input");
                var in5 = document.createElement("input");
                var in6 = document.createElement("input");
                var in7 = document.createElement("input");
                var in8 = document.createElement("input");
                var in9 = document.createElement("input");
                var in10 = document.createElement("input");
                var in11 = document.createElement("input");
                var in12 = document.createElement("input");
                var in13 = document.createElement("input");
                var in14 = document.createElement("input");
                var in15 = document.createElement("input");
                var in16 = document.createElement("input");
                var in17 = document.createElement("input");
                var in18 = document.createElement("input");
                var in19 = document.createElement("input");
                var in20 = document.createElement("input");
                var in21 = document.createElement("input");
                var in22 = document.createElement("input");
                var in23 = document.createElement("input");
                var in24 = document.createElement("input");
                var in25 = document.createElement("input");
                var in26 = document.createElement("input");
                var in27 = document.createElement("input");
                in1.setAttribute('class', 'form-control');
                in2.setAttribute('class', 'form-control');
                in3.setAttribute('class', 'form-control');
                in4.setAttribute('class', 'form-control');
                in5.setAttribute('class', 'form-control');
                in6.setAttribute('class', 'form-control');
                in7.setAttribute('class', 'form-control');
                in8.setAttribute('class', 'form-control');
                in9.setAttribute('class', 'form-control');
                in10.setAttribute('class', 'form-control');
                in11.setAttribute('class', 'form-control');
                in12.setAttribute('class', 'form-control');
                in13.setAttribute('class', 'form-control');
                in14.setAttribute('class', 'form-control');
                in15.setAttribute('class', 'form-control');
                in16.setAttribute('class', 'form-control');
                in17.setAttribute('class', 'form-control');
                in18.setAttribute('class', 'form-control');
                in19.setAttribute('class', 'form-control');
                in20.setAttribute('class', 'form-control');
                in21.setAttribute('class', 'form-control');
                in22.setAttribute('class', 'form-control');
                in23.setAttribute('class', 'form-control');
                in24.setAttribute('class', 'form-control');
                in25.setAttribute('class', 'form-control');
                in26.setAttribute('class', 'form-control');
                in27.setAttribute('class', 'form-control');
                collection.sqlString=check_null(collection.sqlString);
                collection.alwaysAlertRequired=check_null(collection.alwaysAlertRequired);
                collection.dataSource=check_null(collection.dataSource);
                collection.databaseName=check_null(collection.databaseName);
                collection.enabled=check_null(collection.enabled);
                collection.name=check_null(collection.name);
                collection.onFailure=check_null(collection.onFailure);
                collection.onSuccess.attachmentRequired=check_null(collection.onSuccess.attachmentRequired);
                collection.onSuccess.bodyTitle=check_null(collection.onSuccess.bodyTitle);
                collection.onSuccess.daap=check_null(collection.onSuccess.daap);
                collection.onSuccess.dynamicBodyText=check_null(collection.onSuccess.dynamicBodyText);
                collection.onSuccess.mailEntity.mailAddress.fromAddress=check_null(collection.onSuccess.mailEntity.mailAddress.fromAddress);
                collection.onSuccess.mailEntity.mailAddress.fromName=check_null(collection.onSuccess.mailEntity.mailAddress.fromName);
                collection.onSuccess.mailEntity.mailAddress.bccAddress=check_null(collection.onSuccess.mailEntity.mailAddress.bccAddress);
                collection.onSuccess.mailEntity.mailAddress.ccAddress=check_null(collection.onSuccess.mailEntity.mailAddress.ccAddress);
                collection.onSuccess.mailEntity.mailAddress.replytoAddress=check_null(collection.onSuccess.mailEntity.mailAddress.replytoAddress);
                collection.onSuccess.mailEntity.mailAddress.toAddress=check_null(collection.onSuccess.mailEntity.mailAddress.toAddress);
                collection.onSuccess.mailEntity.mailContent.attachType=check_null(collection.onSuccess.mailEntity.mailContent.attachType);
                collection.onSuccess.mailEntity.mailContent.attachment=check_null(collection.onSuccess.mailEntity.mailContent.attachment);
                collection.onSuccess.mailEntity.mailContent.body=check_null(collection.onSuccess.mailEntity.mailContent.body);
                collection.onSuccess.mailEntity.mailContent.customAttachement=check_null(collection.onSuccess.mailEntity.mailContent.customAttachement);
                collection.onSuccess.mailEntity.mailContent.file=check_null(collection.onSuccess.mailEntity.mailContent.file);
                collection.onSuccess.mailEntity.mailContent.fileName=check_null(collection.onSuccess.mailEntity.mailContent.fileName);
                collection.onSuccess.mailEntity.mailContent.subject=check_null(collection.onSuccess.mailEntity.mailContent.subject);
                collection.onSuccess.mailEntity.product=check_null(collection.onSuccess.mailEntity.product);
                collection.onSuccess.tableRequired=check_null(collection.onSuccess.tableRequired);
                collection.schedule=check_null(collection.schedule);
                in1.value = (collection.sqlString).toString();
                in2.value = (collection.alwaysAlertRequired).toString();
                in3.value = (collection.dataSource).toString();
                in4.value = (collection.databaseName).toString();
                in5.value = (collection.enabled).toString();
                in6.value = (collection.name).toString();
                in7.value = (collection.onFailure).toString();
                in8.value = (collection.onSuccess.attachmentRequired).toString();
                in9.value = (collection.onSuccess.bodyTitle).toString();
                in10.value = (collection.onSuccess.daap).toString();
                in11.value = (collection.onSuccess.dynamicBodyText).toString();
                in12.value = (collection.onSuccess.mailEntity.mailAddress.fromAddress).toString();
                in13.value = (collection.onSuccess.mailEntity.mailAddress.fromName).toString();
                in14.value = (collection.onSuccess.mailEntity.mailAddress.bccAddress).toString();
                in15.value = (collection.onSuccess.mailEntity.mailAddress.ccAddress).toString();
                in16.value = (collection.onSuccess.mailEntity.mailAddress.replytoAddress).toString();
                in17.value = (collection.onSuccess.mailEntity.mailAddress.toAddress).toString();                
                in18.value = (collection.onSuccess.mailEntity.mailContent.attachType).toString();
                in19.value = (collection.onSuccess.mailEntity.mailContent.attachment).toString();
                in20.value = (collection.onSuccess.mailEntity.mailContent.body).toString();
                in21.value = (collection.onSuccess.mailEntity.mailContent.customAttachement).toString();
                in22.value = (collection.onSuccess.mailEntity.mailContent.file).toString();
                in23.value = (collection.onSuccess.mailEntity.mailContent.fileName).toString();
                in24.value = (collection.onSuccess.mailEntity.mailContent.subject).toString();
                in25.value = (collection.onSuccess.mailEntity.product).toString();
                in26.value = (collection.onSuccess.tableRequired).toString();
                in27.value = (collection.schedule).toString();
                var sp1 = document.createTextNode("SQL Query : ");
                p1.appendChild(sp1);
                p1.appendChild(in1);
                p1.appendChild(document.createElement("br"));
                var sp2 = document.createTextNode("Always Alert Required : ");
                p2.appendChild(sp2);
                p2.appendChild(in2);
                p2.appendChild(document.createElement("br"));
                var sp3 = document.createTextNode("Data Source : ");
                p3.appendChild(sp3);
                p3.appendChild(in3);
                p3.appendChild(document.createElement("br"));
                var sp4 = document.createTextNode("Database Name : ");
                p4.appendChild(sp4);
                p4.appendChild(in4);
                p4.appendChild(document.createElement("br"));
                var sp5 = document.createTextNode("Enabled : ");
                p5.appendChild(sp5);
                p5.appendChild(in5);
                p5.appendChild(document.createElement("br"));
                var sp6 = document.createTextNode("Name : ");
                p6.appendChild(sp6);
                p6.appendChild(in6);
                p6.appendChild(document.createElement("br"));
                var sp7 = document.createTextNode("On Failure : ");
                p7.appendChild(sp7);
                p7.appendChild(in7);
                p7.appendChild(document.createElement("br"));
                var sp8 = document.createTextNode("Attachment Required : ");
                p8.appendChild(sp8);
                p8.appendChild(in8);
                p8.appendChild(document.createElement("br"));
                var sp9 = document.createTextNode("Body Title : ");
                p9.appendChild(sp9);
                p9.appendChild(in9);
                p9.appendChild(document.createElement("br"));
                var sp10 = document.createTextNode("Daap : ");
                p10.appendChild(sp10);
                p10.appendChild(in10);
                p10.appendChild(document.createElement("br"));
                var sp11 = document.createTextNode("Dynamic Body Test : ");
                p11.appendChild(sp11);
                p11.appendChild(in11);
                p11.appendChild(document.createElement("br"));
                var sp12 = document.createTextNode("Mail From Address : ");
                p12.appendChild(sp12);
                p12.appendChild(in12);
                p12.appendChild(document.createElement("br"));
                var sp13 = document.createTextNode("Mail From Name : ");
                p13.appendChild(sp13);
                p13.appendChild(in13);
                p13.appendChild(document.createElement("br"));
                var sp14 = document.createTextNode("Mail BCC Address : ");
                p14.appendChild(sp14);
                p14.appendChild(in14);
                p14.appendChild(document.createElement("br"));
                var sp15 = document.createTextNode("Mail CC Address : ");
                p15.appendChild(sp15);
                p15.appendChild(in15);
                p15.appendChild(document.createElement("br"));
                var sp16 = document.createTextNode("Mail Reply to Address : ");
                p16.appendChild(sp16);
                p16.appendChild(in16);
                p16.appendChild(document.createElement("br"));
                var sp17 = document.createTextNode("Mail To Address : ");
                p17.appendChild(sp17);
                p17.appendChild(in17);
                p17.appendChild(document.createElement("br"));
                var sp18 = document.createTextNode("Mail Attach Type : ");
                p18.appendChild(sp18);
                p18.appendChild(in18);
                p19.appendChild(document.createElement("br"));
                var sp19 = document.createTextNode("Mail Attachment : ");
                p19.appendChild(sp19);
                p19.appendChild(in19);
                p19.appendChild(document.createElement("br"));
                var sp20 = document.createTextNode("Mail Body : ");
                p20.appendChild(sp20);
                p20.appendChild(in20);
                p20.appendChild(document.createElement("br"));
                var sp21 = document.createTextNode("Mail Custom Attachment : ");
                p21.appendChild(sp21);
                p21.appendChild(in21);
                p21.appendChild(document.createElement("br"));
                var sp22 = document.createTextNode("Mail File : ");
                p22.appendChild(sp22);
                p22.appendChild(in22);
                p22.appendChild(document.createElement("br"));
                var sp23 = document.createTextNode("Mail File Name : ");
                p23.appendChild(sp23);
                p23.appendChild(in23);
                p23.appendChild(document.createElement("br"));
                var sp24 = document.createTextNode("Mail Subject : ");
                p24.appendChild(sp24);
                p24.appendChild(in24);
                p24.appendChild(document.createElement("br"));
                var sp25 = document.createTextNode("Product : ");
                p25.appendChild(sp25);
                p25.appendChild(in25);
                p25.appendChild(document.createElement("br"));
                var sp26 = document.createTextNode("Table Required : ");
                p26.appendChild(sp26);
                p26.appendChild(in26);
                p26.appendChild(document.createElement("br"));
                var sp27 = document.createTextNode("Schedule : ");
                p27.appendChild(sp27);
                p27.appendChild(in27);
                p27.appendChild(document.createElement("br"));
                cardbody.appendChild(form_build);
                cardbody.appendChild(icon);
                cardbody.appendChild(p1);
                cardbody.appendChild(p2);
                cardbody.appendChild(p3);
                cardbody.appendChild(p4);
                cardbody.appendChild(p5);
                cardbody.appendChild(p6);
                cardbody.appendChild(p7);
                cardbody.appendChild(p8);
                cardbody.appendChild(p9);
                cardbody.appendChild(p10);
                cardbody.appendChild(p11);
                cardbody.appendChild(p12);
                cardbody.appendChild(p13);
                cardbody.appendChild(p14);
                cardbody.appendChild(p15);
                cardbody.appendChild(p16);
                cardbody.appendChild(p17);
                cardbody.appendChild(p18);
                cardbody.appendChild(p19);
                cardbody.appendChild(p20);
                cardbody.appendChild(p21);
                cardbody.appendChild(p22);
                cardbody.appendChild(p23);
                cardbody.appendChild(p24);
                cardbody.appendChild(p25);
                cardbody.appendChild(p26);
                cardbody.appendChild(p27);
                var subbtn = document.createElement("button");
                subbtn.setAttribute('class', 'btn btn-lg btn-success fbtn');
                subbtn.setAttribute('type', 'submit');
                subbtn.innerHTML = "Submit";
                subbtn.setAttribute('onclick', 'submitform()')
                cardbody.appendChild(subbtn);
                card2list.appendChild(cardbody);
                data_output.appendChild(card2list);
                s += 1;
            });
         } else {
                console.log("error");
            }
        }
        request.send();
    } else {
        Swal.fire(
            'Oops!',
            'The link seems to be invalid',
            'warning'
        );
    }
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
    if (uid.length == 0 || uname.length <= 2 || uphone.length < 10 || uusername.lenght <= 2 || uwebsite.lenght <= 2 || ucompany.lenght <= 2 || uphrase.lenght <= 2 || ubs.length <= 2) {
        Swal.fire(
            'Oops!',
            'Something is wrong, check for the fields',
            'warning'
        );
    } else {
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
}