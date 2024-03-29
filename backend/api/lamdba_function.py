import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('cloudresume')

def lambda_handler(event, context):
    response = table.get_item(Key={
        'id':'0'
    })
    views = response['Item']['views']
    views = views + 1
    print(views)
    response = table.put_item(Item={
        'id': '0',
        'views':views
    })
    values = {
                "statusCode": 200, 
                "headers": {
                    "Access-Control-Allow-Origin": "*"
                },
                "body": json.dumps(str(views))
            }
    return values