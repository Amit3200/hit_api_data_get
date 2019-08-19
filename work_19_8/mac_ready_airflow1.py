import os
import subprocess as sp
import time
import requests
from datetime import datetime
demand_secondary_check=False
class AirflowHealth:
    scheduler_status=False
    scheduler_restart_attempt=0
    scheduler_logs={}
    webserver_status=False
    webserver_logs={}
    webserver_restart_attempt=0
    def check_scheduler(self):
        out=sp.Popen("ps -ef | grep scheduler",stdout=sp.PIPE,stderr=sp.STDOUT,shell=True)
        stdout,stderr=out.communicate()
        stdout=str(stdout)[2:]
        stdout=stdout.split('\n')
        for i in range(len(stdout)):
            if "grep" not in stdout[i] and "scheduler" in stdout[i]:
                self.scheduler_logs[i+1]=stdout[i]

        #for i in self.scheduler_logs.keys():
        #    print(i,self.scheduler_logs[i],'\n')


        if len(self.scheduler_logs.keys())>0:
            self.scheduler_status=True
        else:
            self.scheduler_status=False

        print("Scheduler [Status] - ",self.scheduler_status)
        return self.scheduler_status

    def check_webserver(self):
        out=sp.Popen("ps -ef | grep webserver",stdout=sp.PIPE,stderr=sp.STDOUT,shell=True)
        stdout,stderr=out.communicate()
        stdout=str(stdout)[2:]
        stdout=stdout.split('\n')
        for i in range(len(stdout)):
            if "gunicorn" in stdout[i] and "airflow-webserver" in stdout[i]:
                self.webserver_logs[i+1]=stdout[i]

        #for i in self.webserver_logs.keys():
        #    print(i,self.webserver_logs[i],'\n')

        if len(self.webserver_logs.keys())>0:
            self.webserver_status=True
        else:
            self.webserver_status=False
        print("WebServer [Status] - ",self.webserver_status)
        return self.webserver_status


    def restart_scheduler(self):
        print("\n[Restart Scheduler Interface]\n\n")
        if self.scheduler_status==False:
            print("Scheduler is stopped, Starting it.\n")
            self.scheduler_restart_attempt+=1
            os.system("nohup airflow scheduler > /dev/null 2>&1&")
            time.sleep(2)
            print("Command was executed, Checking status again [Scheduler] \n")
            time.sleep(5)
            self.check_scheduler()
            time.sleep(5)
            if self.scheduler_status==True:
                print("Scheduler is running now\n")
            else:
                print("Failed to start, kindly check manually\n")

        else:
            print("Scheduler is already in running state")

    def restart_webserver(self):
        print("\n[Restart Web Server Interface]\n\n")
        if self.webserver_status==False:
            print("Webserver is stopped, Starting it.\n")
            self.webserver_restart_attempt+=1
            os.system("nohup airflow webserver > /dev/null 2>&1&")
            time.sleep(2)
            print("Command was executed, Checking status again [WebServer] \n")
            time.sleep(5)
            self.check_webserver()
            time.sleep(5)
            if self.webserver_status==True:
                print("WebServer is up and running now")
            else:
                print("Failed to start, kindly check manually\n")

        else:
            print("WebServer is already in running state")


    def mail_report_v3(self):
        url_a='http://10.192.11.137/metric-util/alert/mail/create'
        subject_i='Airflow Health Report'
        m_body=""
        data_t={"body":'',"subject":'',"key":''}
        if self.scheduler_status==False:
            m_body="Scheduler Report\n\n"
            fail_time=datetime.now()
            m_body+="Scheduler was not working. "
            m_body+=fail_time.strftime("[%m/%d/%Y, %H:%M:%S]")+'\n'
            self.restart_scheduler()
            time.sleep(2)
            if self.scheduler_restart_attempt>0:
                update_time=datetime.now()
                if self.scheduler_status==True:
                    m_body+="Scheduler was restarted successfully. "
                    m_body+=update_time.strftime("[%m/%d/%Y, %H:%M:%S]")+'\n'
                else:
                    m_body+="Scheduler restart failed. kindly check manually. "
                    m_body+=update_time.strftime("[%m/%d/%Y, %H:%M:%S]")+'\n'
            m_body+="\n\n"
        else:
            m_body+="\nScheduler was running properly\n\n"

        if self.webserver_status==False:
            m_body+="Webserver Report\n\n"
            fail_time=datetime.now()
            m_body+="Webserver was not working. "
            m_body+=fail_time.strftime("[%m/%d/%Y, %H:%M:%S]")+'\n'
            self.restart_webserver()
            time.sleep(2)
            if self.webserver_restart_attempt>0:
                update_time=datetime.now()
                if self.webserver_status==True:
                    m_body+="Webserver was restarted successfully. "
                    m_body+=update_time.strftime("[%m/%d/%Y, %H:%M:%S]")+'\n'
                else:
                    m_body+="Webserver restart failed. kindly check manually. "
                    m_body+=update_time.strftime("[%m/%d/%Y, %H:%M:%S]")+'\n'
            m_body+="\n\n"

        else:
            m_body+="\nWebserver was running properly\n\n"
    
        data_t['body']=m_body
        data_t['subject']=subject_i

        #print(data_t)
        print('\n')
        print(data_t['body'])
        requests.post(url='http://127.0.0.1:5000/airflowhealth',data=data_t)

print('\n')        
obj=AirflowHealth()
obj.check_scheduler()
obj.check_webserver()
obj.mail_report_v3()


if demand_secondary_check==True:
    import status_check as sc
    print("\n - - - other file secondary check")
    sc.check_status()
