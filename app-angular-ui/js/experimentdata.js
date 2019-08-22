var idx_json;
var api_address = 'https://api.myjson.com/bins/e7r0z';
// var theUrl='';change below and add the post here
var obj_size = 0;

function isUrl(s) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regexp.test(s);
}

function check_null(s) {
    if (s === null || s == undefined || s.lenght <= 1 || s == '' || s == ' ')
        return "None";
    else
        return s.toString();
}

function hide_div() {
    document.getElementById('card2_data').style.display = 'none';
}

function get_name() {
    // var api_address = document.getElementById("api_address").value;
    document.getElementById("showdatabtn").disabled = true;
    if (isUrl(api_address)) {
        var request = new XMLHttpRequest();
        var card2list = document.createElement("div");
        card2list.setAttribute('class', 'card shadow border-0 card card_dio');
        var cardbody = document.createElement("div");
        cardbody.setAttribute('class', 'cardbody-btns')
        request.open('GET', api_address, true);
        request.onload = function () {
            var s = 0;
            var data = JSON.parse(this.response);
            if (request.status >= 200 && request.status < 400) {
                data.forEach(collection => {
                    var ele = document.createElement('button');
                    ele.setAttribute('class', 'btn btn-lg btn-outline-warning');
                    ele.innerHTML = collection.name;
                    ele.setAttribute('id', 'btnform' + s.toString());
                    ele.setAttribute('onclick', 'show_and_get(' + s.toString() + ')');
                    s += 1;
                    obj_size += 1;
                    cardbody.appendChild(ele);
                });
            }
        }
        card2list.append(cardbody);
        card_data_name.append(card2list);
        request.send();
    }
}

function show_and_get(idxid) {
    for (var i = 0; i < obj_size; i++) {
        document.getElementById('btnform' + i.toString()).disabled = true;
    }
    idx_json = Number(idxid);
    var ele_to_show = document.getElementById('card2_data');
    ele_to_show.style.display = "block";
    var request1 = new XMLHttpRequest();
    request1.open('GET', api_address, true);
    request1.onload = function () {
        var s = 0;
        var data = JSON.parse(this.response);
        var datam = Array();
        datam.push(data[Number(idxid)]);
        if (request1.status >= 200 && request1.status < 400) {
            datam.forEach(collection => {
                collection.sqlString = check_null(collection.sqlString);
                collection.alwaysAlertRequired = check_null(collection.alwaysAlertRequired);
                collection.dataSource = check_null(collection.dataSource);
                collection.databaseName = check_null(collection.databaseName);
                collection.enabled = check_null(collection.enabled);
                collection.name = check_null(collection.name);
                //failure start
                try {
                    collection.Failure.attachmentRequired = check_null(collection.onSuccess.attachmentRequired);
                    collection.Failure.bodyTitle = check_null(collection.onSuccess.bodyTitle);
                    collection.Failure.daap = check_null(collection.onSuccess.daap);
                    collection.Failure.dynamicBodyText = check_null(collection.onSuccess.dynamicBodyText);
                    collection.Failure.mailEntity.mailAddress.fromAddress = check_null(collection.onSuccess.mailEntity.mailAddress.fromAddress);
                    collection.Failure.mailEntity.mailAddress.fromName = check_null(collection.onSuccess.mailEntity.mailAddress.fromName);
                    collection.Failure.mailEntity.mailAddress.bccAddress = check_null(collection.onSuccess.mailEntity.mailAddress.bccAddress);
                    collection.Failure.mailEntity.mailAddress.ccAddress = check_null(collection.onSuccess.mailEntity.mailAddress.ccAddress);
                    collection.Failure.mailEntity.mailAddress.replytoAddress = check_null(collection.onSuccess.mailEntity.mailAddress.replytoAddress);
                    collection.Failure.mailEntity.mailAddress.toAddress = check_null(collection.onSuccess.mailEntity.mailAddress.toAddress);
                    collection.Failure.mailEntity.mailContent.attachType = check_null(collection.onSuccess.mailEntity.mailContent.attachType);
                    collection.Failure.mailEntity.mailContent.attachment = check_null(collection.onSuccess.mailEntity.mailContent.attachment);
                    collection.Failure.mailEntity.mailContent.body = check_null(collection.onSuccess.mailEntity.mailContent.body);
                    collection.Failure.mailEntity.mailContent.customAttachement = check_null(collection.onSuccess.mailEntity.mailContent.customAttachement);
                    collection.Failure.mailEntity.mailContent.file = check_null(collection.onSuccess.mailEntity.mailContent.file);
                    collection.Failure.mailEntity.mailContent.fileName = check_null(collection.onSuccess.mailEntity.mailContent.fileName);
                    collection.Failure.mailEntity.mailContent.subject = check_null(collection.onSuccess.mailEntity.mailContent.subject);
                    collection.Failure.mailEntity.product = check_null(collection.onSuccess.mailEntity.product);
                    collection.Failure.tableRequired = check_null(collection.onSuccess.tableRequired);
                } catch (err) {
                    // collection.Failure.attachmentRequired = check_null(null);
                    // collection.Failure.bodyTitle = check_null(null);
                    // collection.Failure.daap = check_null(null);
                    // collection.Failure.dynamicBodyText = check_null(null);
                    // collection.Failure.mailEntity.mailAddress.fromAddress = check_null(null);
                    // collection.Failure.mailEntity.mailAddress.fromName = check_null(null);
                    // collection.Failure.mailEntity.mailAddress.bccAddress = check_null(null);
                    // collection.Failure.mailEntity.mailAddress.ccAddress = check_null(null);
                    // collection.Failure.mailEntity.mailAddress.replytoAddress = check_null(null);
                    // collection.Failure.mailEntity.mailAddress.toAddress = check_null(null);
                    // collection.Failure.mailEntity.mailContent.attachType = check_null(null);
                    // collection.Failure.mailEntity.mailContent.attachment = check_null(null);
                    // collection.Failure.mailEntity.mailContent.body = check_null(null);
                    // collection.Failure.mailEntity.mailContent.customAttachement = check_null(null);
                    // collection.Failure.mailEntity.mailContent.file = check_null(null);
                    // collection.Failure.mailEntity.mailContent.fileName = check_null(null);
                    // collection.Failure.mailEntity.mailContent.subject = check_null(null);
                    // collection.Failure.mailEntity.product = check_null(null);
                    // collection.Failure.tableRequired = check_null(null);                     
                }
                // failure end
                collection.onSuccess.attachmentRequired = check_null(collection.onSuccess.attachmentRequired);
                collection.onSuccess.bodyTitle = check_null(collection.onSuccess.bodyTitle);
                collection.onSuccess.daap = check_null(collection.onSuccess.daap);
                collection.onSuccess.dynamicBodyText = check_null(collection.onSuccess.dynamicBodyText);
                collection.onSuccess.mailEntity.mailAddress.fromAddress = check_null(collection.onSuccess.mailEntity.mailAddress.fromAddress);
                collection.onSuccess.mailEntity.mailAddress.fromName = check_null(collection.onSuccess.mailEntity.mailAddress.fromName);
                collection.onSuccess.mailEntity.mailAddress.bccAddress = check_null(collection.onSuccess.mailEntity.mailAddress.bccAddress);
                collection.onSuccess.mailEntity.mailAddress.ccAddress = check_null(collection.onSuccess.mailEntity.mailAddress.ccAddress);
                collection.onSuccess.mailEntity.mailAddress.replytoAddress = check_null(collection.onSuccess.mailEntity.mailAddress.replytoAddress);
                collection.onSuccess.mailEntity.mailAddress.toAddress = check_null(collection.onSuccess.mailEntity.mailAddress.toAddress);
                collection.onSuccess.mailEntity.mailContent.attachType = check_null(collection.onSuccess.mailEntity.mailContent.attachType);
                collection.onSuccess.mailEntity.mailContent.attachment = check_null(collection.onSuccess.mailEntity.mailContent.attachment);
                collection.onSuccess.mailEntity.mailContent.body = check_null(collection.onSuccess.mailEntity.mailContent.body);
                collection.onSuccess.mailEntity.mailContent.customAttachement = check_null(collection.onSuccess.mailEntity.mailContent.customAttachement);
                collection.onSuccess.mailEntity.mailContent.file = check_null(collection.onSuccess.mailEntity.mailContent.file);
                collection.onSuccess.mailEntity.mailContent.fileName = check_null(collection.onSuccess.mailEntity.mailContent.fileName);
                collection.onSuccess.mailEntity.mailContent.subject = check_null(collection.onSuccess.mailEntity.mailContent.subject);
                collection.onSuccess.mailEntity.product = check_null(collection.onSuccess.mailEntity.product);
                collection.onSuccess.tableRequired = check_null(collection.onSuccess.tableRequired);
                collection.schedule = check_null(collection.schedule);
                document.getElementById('sqlString').value = (collection.sqlString).toString();
                document.getElementById('alwaysAlertRequired').value = (collection.alwaysAlertRequired).toString();
                document.getElementById('dataSource').value = (collection.dataSource).toString();
                document.getElementById('databaseName').value = (collection.databaseName).toString();
                document.getElementById('enabled').value = (collection.enabled).toString();
                document.getElementById('name').value = (collection.name).toString();
                // ONFAILURE
                try {
                    document.getElementById('fattachmentRequired').value = (collection.onFailure.attachmentRequired).toString();
                    document.getElementById('fbodyTitle').value = (collection.onFailure.bodyTitle).toString();
                    document.getElementById('fdaap').value = (collection.onFailure.daap).toString();
                    document.getElementById('fdynamicBodyText').value = (collection.onFailure.dynamicBodyText).toString();
                    document.getElementById('ffromAddress').value = (collection.onFailure.mailEntity.mailAddress.fromAddress).toString();
                    document.getElementById('ffromName').value = (collection.onFailure.mailEntity.mailAddress.fromName).toString();
                    document.getElementById('fbccAddress').value = (collection.onFailure.mailEntity.mailAddress.bccAddress).toString();
                    document.getElementById('fccAddress').value = (collection.onFailure.mailEntity.mailAddress.ccAddress).toString();
                    document.getElementById('freplytoAddress').value = (collection.onFailure.mailEntity.mailAddress.replytoAddress).toString();
                    document.getElementById('ftoAddress').value = (collection.onFailure.mailEntity.mailAddress.toAddress).toString();
                    document.getElementById('fattachType').value = (collection.onFailure.mailEntity.mailContent.attachType).toString();
                    document.getElementById('fattachment').value = (collection.onFailure.mailEntity.mailContent.attachment).toString();
                    document.getElementById('fbody').value = (collection.onFailure.mailEntity.mailContent.body).toString();
                    document.getElementById('fcustomAttachement').value = (collection.onFailure.mailEntity.mailContent.customAttachement).toString();
                    document.getElementById('ffile').value = (collection.onFailure.mailEntity.mailContent.file).toString();
                    document.getElementById('ffileName').value = (collection.onFailure.mailEntity.mailContent.fileName).toString();
                    document.getElementById('fsubject').value = (collection.onFailure.mailEntity.mailContent.subject).toString();
                    document.getElementById('fproduct').value = (collection.onFailure.mailEntity.product).toString();
                    document.getElementById('ftableRequired').value = (collection.onFailure.tableRequired).toString();
                } catch (err) {
                    document.getElementById('fattachmentRequired').value = "None";
                    document.getElementById('fbodyTitle').value = "None";
                    document.getElementById('fdaap').value = "None";
                    document.getElementById('fdynamicBodyText').value = "None";
                    document.getElementById('ffromAddress').value = "None";
                    document.getElementById('ffromName').value = "None";
                    document.getElementById('fbccAddress').value = "None";
                    document.getElementById('fccAddress').value = "None";
                    document.getElementById('freplytoAddress').value = "None";
                    document.getElementById('ftoAddress').value = "None";
                    document.getElementById('fattachType').value = "None";
                    document.getElementById('fattachment').value = "None";
                    document.getElementById('fbody').value = "None";
                    document.getElementById('fcustomAttachement').value = "None";
                    document.getElementById('ffile').value = "None";
                    document.getElementById('ffileName').value = "None";
                    document.getElementById('fsubject').value = "None";
                    document.getElementById('fproduct').value = "None";
                    document.getElementById('ftableRequired').value = "None";
                }
                //OffFAILURE
                document.getElementById('attachmentRequired').value = (collection.onSuccess.attachmentRequired).toString();
                document.getElementById('bodyTitle').value = (collection.onSuccess.bodyTitle).toString();
                document.getElementById('daap').value = (collection.onSuccess.daap).toString();
                document.getElementById('dynamicBodyText').value = (collection.onSuccess.dynamicBodyText).toString();
                document.getElementById('fromAddress').value = (collection.onSuccess.mailEntity.mailAddress.fromAddress).toString();
                document.getElementById('fromName').value = (collection.onSuccess.mailEntity.mailAddress.fromName).toString();
                document.getElementById('bccAddress').value = (collection.onSuccess.mailEntity.mailAddress.bccAddress).toString();
                document.getElementById('ccAddress').value = (collection.onSuccess.mailEntity.mailAddress.ccAddress).toString();
                document.getElementById('replytoAddress').value = (collection.onSuccess.mailEntity.mailAddress.replytoAddress).toString();
                document.getElementById('toAddress').value = (collection.onSuccess.mailEntity.mailAddress.toAddress).toString();
                document.getElementById('attachType').value = (collection.onSuccess.mailEntity.mailContent.attachType).toString();
                document.getElementById('attachment').value = (collection.onSuccess.mailEntity.mailContent.attachment).toString();
                document.getElementById('body').value = (collection.onSuccess.mailEntity.mailContent.body).toString();
                document.getElementById('customAttachement').value = (collection.onSuccess.mailEntity.mailContent.customAttachement).toString();
                document.getElementById('file').value = (collection.onSuccess.mailEntity.mailContent.file).toString();
                document.getElementById('fileName').value = (collection.onSuccess.mailEntity.mailContent.fileName).toString();
                document.getElementById('subject').value = (collection.onSuccess.mailEntity.mailContent.subject).toString();
                document.getElementById('product').value = (collection.onSuccess.mailEntity.product).toString();
                document.getElementById('tableRequired').value = (collection.onSuccess.tableRequired).toString();
                document.getElementById('schedule').value = (collection.schedule).toString();
            });
        } else {
            Swal.fire(
                'Oops!',
                'The link seems to be invalid',
                'warning'
            );
        }
    }
    request1.send();
}
//amit3200:submit form updating UI create/update in same.
function submitform() {
    var sqlString = document.getElementById('sqlString').value
    var alwaysAlertRequired = document.getElementById('alwaysAlertRequired').value
    var dataSource = document.getElementById('dataSource').value
    var databaseName = document.getElementById('databaseName').value
    var enabled = document.getElementById('enabled').value
    var name = document.getElementById('name').value
    var fattachementRequired = document.getElementById('fattachmentRequired').value
    var fbodyTitle = document.getElementById('fbodyTitle').value
    var fdaap = document.getElementById('fdaap').value
    var fdynamicBodyText = document.getElementById('fdynamicBodyText').value
    var ffromAddress = document.getElementById('ffromAddress').value
    var ffromName = document.getElementById('ffromName').value
    var fbccAddress = document.getElementById('fbccAddress').value
    var fccAddress = document.getElementById('fccAddress').value
    var freplytoAddress = document.getElementById('freplytoAddress').value
    var ftoAddress = document.getElementById('ftoAddress').value
    var fattachType = document.getElementById('fattachType').value
    var fattachment = document.getElementById('fattachment').value
    var fbody = document.getElementById('fbody').value
    var fcustomAttachment = document.getElementById('fcustomAttachement').value
    var ffile = document.getElementById('ffile').value
    var ffileName = document.getElementById('ffileName').value
    var fsubject = document.getElementById('fsubject').value
    var fproduct = document.getElementById('fproduct').value
    var ftableRequired = document.getElementById('ftableRequired').value
    var attachementRequired = document.getElementById('attachmentRequired').value
    var bodyTitle = document.getElementById('bodyTitle').value
    var daap = document.getElementById('daap').value
    var dynamicBodyText = document.getElementById('dynamicBodyText').value
    var fromAddress = document.getElementById('fromAddress').value
    var fromName = document.getElementById('fromName').value
    var bccAddress = document.getElementById('bccAddress').value
    var ccAddress = document.getElementById('ccAddress').value
    var replytoAddress = document.getElementById('replytoAddress').value
    var toAddress = document.getElementById('toAddress').value
    var attachType = document.getElementById('attachType').value
    var attachment = document.getElementById('attachment').value
    var body = document.getElementById('body').value
    var customAttachment = document.getElementById('customAttachement').value
    var file = document.getElementById('file').value
    var fileName = document.getElementById('fileName').value
    var subject = document.getElementById('subject').value
    var product = document.getElementById('product').value
    var tableRequired = document.getElementById('tableRequired').value
    var schedule = document.getElementById('schedule').value
    //create json
    user_updated_data = {
        "sqlString": sqlString,
        "alwaysAlertRequired": alwaysAlertRequired,
        "dataSource": dataSource,
        "databaseName": databaseName,
        "enabled": enabled,
        "name": name,
        "onFailure": {
            "attachementRequired": fattachementRequired,
            "bodyTitle": fbodyTitle,
            "daap": fdaap,
            "dynamicBodyText": fdynamicBodyText,
            "mailEntity": {
                "mailAddress": {
                    "fromAddress": ffromAddress,
                    "fromName": ffromName,
                    "bccAddress": fbccAddress,
                    "ccAddress": fccAddress,
                    "replytoAddress": freplytoAddress,
                    "toAddress": ftoAddress,
                },
                "mailContent": {
                    "attachType": fattachType,
                    "attachment": fattachment,
                    "body": fbody,
                    "customAttachement": fcustomAttachment,
                    "file": ffile,
                    "fileName": ffileName,
                    "subject": fsubject,
                },
                "product": fproduct,
            },
            "tableRequired": ftableRequired,
        },
        "onSuccess": {
            "attachementRequired": attachementRequired,
            "bodyTitle": bodyTitle,
            "daap": daap,
            "dynamicBodyText": dynamicBodyText,
            "mailEntity": {
                "mailAddress": {
                    "fromAddress": fromAddress,
                    "fromName": fromName,
                    "bccAddress": bccAddress,
                    "ccAddress": ccAddress,
                    "replytoAddress": replytoAddress,
                    "toAddress": toAddress,
                },
                "mailContent": {
                    "attachType": attachType,
                    "attachment": attachment,
                    "body": body,
                    "customAttachement": customAttachment,
                    "file": file,
                    "fileName": fileName,
                    "subject": subject,
                },
                "product": product,
            },
            "tableRequired": tableRequired,
        },
        "schedule": schedule,
    }
    console.log(user_updated_data);
    console.log("Individually done");
    var request_get = new XMLHttpRequest();
    request_get.open('GET', api_address, true);
    request_get.onload = function () {
        var s = 0;
        var data = JSON.parse(this.response);
        if (request_get.status >= 200 && request_get.status < 400) {
            data[Number(idx_json)] = user_updated_data;
            console.log(data);
            var request_post = new XMLHttpRequest(); // new HttpRequest instance 
            var theUrl = "https://jsonplaceholder.typicode.com/posts";
            request_post.open("POST", theUrl);
            request_post.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            request_post.send(JSON.stringify(user_updated_data));
            if (request_post.status >= 200 && request_post.status < 400) {
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
            }, 5000);
        }
    }
    request_get.send();
}