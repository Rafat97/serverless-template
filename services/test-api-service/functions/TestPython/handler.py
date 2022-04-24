import boto3
import json
import requests
from requests_aws4auth import AWS4Auth
from pprint import pprint
import os

is_offline = os.getenv("IS_OFFLINE", "false")


response = {
    "statusCode": 400,
    "headers": {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
    },
}


def main_function(event, context):
    try:

        response['statusCode'] = 200
        response["body"] = json.dumps({
            "message": "Go Serverless v3.0! Your function executed successfully!",
            "env": dict(os.environ),
            "event": event,
        })

    except Exception as e:
        print(e)
        response["body"] = json.dumps({"message": str(e)})

    return response
