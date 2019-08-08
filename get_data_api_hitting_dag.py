import datetime as dt
import requests,json
from airflow import DAG
from airflow.operators.bash_operator import BashOperator
from airflow.operators.python_operator import PythonOperator

demand_data=requests.get("https://jsonplaceholder.typicode.com/todos")
demand_data=json.loads(str(demand_data.text))
current_processing_idx=0

def process_data():
	global current_processing_idx
	with open('idx.txt','r') as file:
		data=file.read()
		print(data)
	current_processing_idx=int(data)
	print(current_processing_idx)
	data_record=demand_data[current_processing_idx]
	with open('output.txt', 'a+') as file:
	    file.write(data_record["title"]+"\n")
	    print("file created")
	return data_record

def fetch_next():
	with open('idx.txt','r') as file:
		data=file.read()
		print(data)
	with open('idx.txt','w') as file:
		data=int(data)+1
		file.write(str(data))
	current_processing_idx=data
	return "Increment Done Successfully"

def welcome():
    return 'Initiating'

default_args = {'owner': 'airflow','start_date': dt.datetime(2019, 8, 7, 10, 00, 00),'concurrency': 1,'retries': 0}

with DAG('get_data_api_hitting_dag',default_args=default_args,schedule_interval='*/1 * * * *',) as dag:
    opr_end = BashOperator(task_id='end',bash_command='echo "This dag just ended executing"')
    opr_fetch_next = PythonOperator(task_id='fetch_next',python_callable=fetch_next)
    opr_process = PythonOperator(task_id='process_data',python_callable=process_data)
    opr_welcome = PythonOperator(task_id='welcome',python_callable=welcome)

opr_welcome >> opr_process >> opr_fetch_next >> opr_end