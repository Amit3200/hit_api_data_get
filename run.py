from flask import Flask, render_template, redirect, url_for, request
import requests
import json

app = Flask(__name__)
global_data_response=""
address_link=""
# class showcaseDataTasks:
#     _id=""
#     _email=""
#     _firstName=""
#     _lastName=""
#     _avatar=""
#     def __init__(self,userId,userEmail,userFirstName,userLastName,userAvatar):
#         showcaseDataTasks._id=userId
#         showcaseDataTasks._email=userEmail
#         showcaseDataTasks._firstName=userFirstName
#         showcaseDataTasks._lastName=userLastName
#         showcaseDataTasks._avatar=userAvatar
#     def __del__(self):
#         pass

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/hitdata',methods=["POST","GET"])
def hitdata():
    try:
        if request.method=="POST":
            global global_data_response,address_link
            address_of_api=request.form.get('api_address')
            address_link=address_of_api
            data_collected = requests.get(address_of_api) #"https://reqres.in/api/users?page=2"
            data_collected = str(data_collected.text)
            global_data_response = data_collected
            return redirect(url_for('showdata'))
    except:
        return render_template("random_error.html")

@app.route('/showdata')
def showdata():
    try:
        global global_data_response
        data_req_render=json.loads(global_data_response)
        make_formated_data=[]
        for i in data_req_render["data"]:
            ensure_inside_data={}
            for parent_keys in i.keys():
                ensure_inside_data[parent_keys]=str(i[parent_keys])
            make_formated_data.append(ensure_inside_data)
        return render_template("showdata.html",val=make_formated_data)
    except:
        return redirect(url_for("hidden_api_all_data"))

@app.route("/detaildata",methods=["POST","GET"])
def detaildata():
    try:
        if request.method=="POST":
            data_requested=request.form.get('exploredata')
            data_requested=eval(data_requested)
            return render_template("detaildata.html",val=data_requested)
    except:
        return redirect(url_for("hidden_api_all_data"))

@app.route("/hidden_api_all_data")
def hidden_api_all_data():
    global address_link
    try:
        data_collected = requests.get(address_link)
        data_collected = str(data_collected.text)
        global_data_response = data_collected
        return render_template("hidden_api_all_data.html",val=global_data_response)
    except:
        return render_template("random_error.html")

@app.errorhandler(404)
def not_found(e):
    # defining function
    return render_template("404.html")