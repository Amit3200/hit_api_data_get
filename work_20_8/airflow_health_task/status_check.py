import os
import subprocess as sp
#import requests
import time
#['ps','-ef','|','grep','scheduler'],
def check_status():
	print('\n')
	print("start")
	print('\n')
	out=sp.Popen("ps -ef | grep scheduler",stdout=sp.PIPE,stderr=sp.STDOUT,shell=True)
	stdout,stderr=out.communicate()
	stdout=str(stdout)[2:]

	stdout=stdout.split('\\n')
	#print(stdout)
	scheduler_container=[]
	for i in stdout:
		if "grep" not in i and "scheduler" in i:
			if i!="'":
				scheduler_container.append(i)

	out1=sp.Popen("ps -ef | grep webserver",stdout=sp.PIPE,stderr=sp.STDOUT,shell=True)
	stdout1,stderr1=out1.communicate()
	stdout1=str(stdout1)[2:]

	stdout1=stdout1.split('\\n')
	webserver_container=[]
	for i in stdout1:
		if "gunicorn" in i and "airflow-webserver" in i:
			if i!="'":
				webserver_container.append(i)



	if len(scheduler_container)>0:
		print("STATUS : SCHEDULER RUNNING")
	else:
		print("STATUS : SCHEDULER STOPPED")



	if len(webserver_container)>0:
		print("STATUS : WEBSERVER RUNNING")
	else:
		print("STATUS : WEBSERVER STOPPED")

	print('\n')
	print("logs check - - server details")
	print("-------------------------------------")
	for i in webserver_container:
		print(i)
	print('\n')
	print("logs check - - scheduler details")
	print("----------------------------------------")
	for i in scheduler_container:
		print(i)

	print("\n")
	print("end")
	print("\n")