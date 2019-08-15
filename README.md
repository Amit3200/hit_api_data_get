# hit_api_data_get
simple_application<br>
example purpose
https://jsonplaceholder.typicode.com/users

<br>
future reference<br>
https://blog.usejournal.com/testing-in-airflow-part-1-dag-validation-tests-dag-definition-tests-and-unit-tests-2aa94970570c
<br>
https://stackoverflow.com/questions/43732642/status-of-airflow-task-within-the-dag
```
import graphqt
d={}
graphqt.insert_uv(d,1,2)
graphqt.insert_uv(d,2,3)
graphqt.insert_uv(d,2,5)
graphqt.insert_uv(d,5,4)
graphqt.insert_uv(d,3,6)
graphqt.insert_uv(d,4,6)
graphqt.insert_uv(d,6,1)
graphqt.insert_uv(d,8,9)
print(graphqt.detect_cycle(d))
print(graphqt.check_path(d,2,8))
print(graphqt.get_disconnected_components(d)['components'])
print(graphqt.get_disconnected_components(d)['dis_count'])
```

# aws file check

```
#author:Amit Singh Sansoya (@amit3200)
#There's reason to it
import boto3
from hurry.filesize import size	
from datetime import datetime
#preconfig done - - step 1


s3=boto3.resource('s3')
#all_bucket=s3.buckets.all() - - step 2
#listing_all_buckets
#for bucket in all_bucket:
#    print(bucket)


#check for file
chosen_bucket=s3.Bucket(name='cluster_name')
file_names=[]

#check for files and list names
for objects in chosen_bucket.objects.all():
    file_names.append(objects.key)

#check for the required object and reads the content - - step 3
required_object=s3.Object('cluster_name',file_names[1])
data_in_file=required_object.get()['Body'].read()
#prints the response and whole detail out of it
#print(required_object.get())
#print(data_in_file)


#extracting tje size of the files in s3 bucket - - step 4
object_response=required_object.get()
print("TYPE :",object_response['ContentType'])
print("DATE :",object_response['LastModified'].strftime("%d-%b-%Y %H:%M:%S"))
print("SIZE :",size(object_response['ContentLength']))
if object_response['ContentLength']>10:
    print("STATUS : File was created and was available in the S3 bucket")
else:
    print("STATUS : File was not found in the bucket")

```
