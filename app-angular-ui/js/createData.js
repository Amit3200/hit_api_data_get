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

function initialize() {
    document.getElementById('sqlString').value = "None";
    document.getElementById('alwaysAlertRequired').value = "None";
    document.getElementById('dataSource').value = "None";
    document.getElementById('databaseName').value = "None";
    document.getElementById('enabled').value = "None";
    document.getElementById('name').value = "None";
    document.getElementById('attachmentRequired').value = "None";
    document.getElementById('bodyTitle').value = "None";
    document.getElementById('daap').value = "None";
    document.getElementById('dynamicBodyText').value = "None";
    document.getElementById('fromAddress').value = "None";
    document.getElementById('fromName').value = "None";
    document.getElementById('bccAddress').value = "None";
    document.getElementById('ccAddress').value = "None";
    document.getElementById('replytoAddress').value = "None";
    document.getElementById('toAddress').value = "None";
    document.getElementById('attachType').value = "None";
    document.getElementById('attachment').value = "None";
    document.getElementById('body').value = "None";
    document.getElementById('customAttachement').value = "None";
    document.getElementById('file').value = "None";
    document.getElementById('fileName').value = "None";
    document.getElementById('subject').value = "None";
    document.getElementById('product').value = "None";
    document.getElementById('tableRequired').value = "None";
    document.getElementById('schedule').value = "None";
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
    };
    console.log(user_updated_data);
    console.log("Individually done");
    var request_post = new XMLHttpRequest(); // new HttpRequest instance 
    var theUrl = "https://jsonplaceholder.typicode.com/posts";
    request_post.open("POST", theUrl);
    request_post.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request_post.send(JSON.stringify(user_updated_data));
    console.log(user_updated_data);
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