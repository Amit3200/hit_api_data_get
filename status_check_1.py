import os
import subprocess as sp
import requests
import time
#['ps','-ef','|','grep','scheduler'],
def check_status():
	print("INSIDE FUNCTION CHECK STATUS")
	out=sp.Popen("ps -ef | grep scheduler",stdout=sp.PIPE,stderr=sp.STDOUT,shell=True)
	stdout,stderr=out.communicate()
	stdout=str(stdout)[2:]

	stdout=stdout.split('\\n')
	scheduler_container=[]
	for i in stdout:
		if "grep" not in i:
			if i!="'":
				scheduler_container.append(i)

	out1=sp.Popen("ps -ef | grep webserver",stdout=sp.PIPE,stderr=sp.STDOUT,shell=True)
	stdout1,stderr1=out1.communicate()
	stdout1=str(stdout1)[2:]

	stdout1=stdout1.split('\\n')
	webserver_container=[]
	for i in stdout1:
		if "gunicorn" in i:
			if i!="'":
				webserver_container.append(i)


	#print(scheduler_container)
	message_status_scheduler=""
	ms_airflow_scheduler=0
	message_status_webserver=""
	ms_airflow_webserver=0
	print(len(scheduler_container),"sc")
	print(len(webserver_container),"wb")
	if len(scheduler_container)>0:
		message_status_scheduler="STATUS : SCHEDULER RUNNING"
		ms_airflow_scheduler=1
		print("STATUS : SCHEDULER RUNNING")
	else:
		message_status_scheduler="STATUS : SCHEDULER STOPPED"
		ms_airflow_scheduler=0
		print("STATUS : SCHEDULER STOPPED")

	#print(webserver_container)
	if len(webserver_container)>0:
		message_status_webserver="STATUS : WEBSERVER RUNNING"
		ms_airflow_webserver=1
		print("STATUS : WEBSERVER RUNNING")
	else:
		message_status_webserver="STATUS : WEBSERVER STOPPED"
		ms_airflow_webserver=0
		print("STATUS : WEBSERVER STOPPED")

	print("FUNCTION END")
	print()




out=sp.Popen("ps -ef | grep scheduler",stdout=sp.PIPE,stderr=sp.STDOUT,shell=True)
stdout,stderr=out.communicate()
stdout=str(stdout)[2:]

stdout=stdout.split('\\n')
scheduler_container=[]
for i in stdout:
	if "grep" not in i:
		if i!="'":
			scheduler_container.append(i)

out1=sp.Popen("ps -ef | grep webserver",stdout=sp.PIPE,stderr=sp.STDOUT,shell=True)
stdout1,stderr1=out1.communicate()
stdout1=str(stdout1)[2:]

stdout1=stdout1.split('\\n')
webserver_container=[]
for i in stdout1:
	if "gunicorn" in i:
		if i!="'":
			webserver_container.append(i)


#print(scheduler_container)
message_status_scheduler=""
ms_airflow_scheduler=0
message_status_webserver=""
ms_airflow_webserver=0

print(len(scheduler_container),"sc")
print(len(webserver_container),"wb")

if len(scheduler_container)>0:
	message_status_scheduler="STATUS : SCHEDULER RUNNING"
	ms_airflow_scheduler=1
	print("STATUS : SCHEDULER RUNNING")
else:
	message_status_scheduler="STATUS : SCHEDULER STOPPED"
	ms_airflow_scheduler=0
	print("STATUS : SCHEDULER STOPPED")

#print(webserver_container)
if len(webserver_container)>0:
	message_status_webserver="STATUS : WEBSERVER RUNNING"
	ms_airflow_webserver=1
	print("STATUS : WEBSERVER RUNNING")
else:
	message_status_webserver="STATUS : WEBSERVER STOPPED"
	ms_airflow_webserver=0
	print("STATUS : WEBSERVER STOPPED")


url_a='http://10.192.11.137/metric-util/alert/mail/create'
m_body=message_status_scheduler+'\n'+message_status_webserver
subject_i='Airflow Health Report'
data={
	"body":m_body,
	"subject":subject_i
}


if ms_airflow_webserver==0:
	os.system('nohup airflow webserver > /dev/null 2>&1&')
	m_body+='\n'+'WEBSERVER : RESTARTED'


if ms_airflow_scheduler==0:
	os.system('nohup airflow scheduler  > /dev/null 2>&1&')
	m_body+='\n'+'SCHEDULER : RESTARTED'

print("BODY ---------")
print(m_body)

time.sleep(5)
print("CURRENT STATUS --------")
check_status()



requests.post(url=url_a,data=data)


print("RESTART AND MAIL SENT")