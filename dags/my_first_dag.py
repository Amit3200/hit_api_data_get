import datetime as dt

from airflow import DAG
from airflow.operators.bash_operator import BashOperator
from airflow.operators.python_operator import PythonOperator


def start():
    print('Writing in file')
    return 'started'

def checkup_call():
    return 'Checkup Call was called here'

default_args = {'owner': 'airflow','start_date': dt.datetime(2019, 8, 7, 10, 00, 00),'concurrency': 1,'retries': 0}

with DAG('my_simple_dag',default_args=default_args,schedule_interval='*/1 * * * *',) as dag:
    opr_begin = BashOperator(task_id='begin',bash_command='echo "This dag just started executing"')
    opr_start_call = PythonOperator(task_id='start_function_call_to_write_file_test1',python_callable=start)
    opr_sleep = BashOperator(task_id='wait_for_some_time',bash_command='sleep 5')
    opr_checkup_call = PythonOperator(task_id='checkup_function_call',python_callable=checkup_call)
opr_begin >> opr_start_call >> opr_sleep >> opr_checkup_call