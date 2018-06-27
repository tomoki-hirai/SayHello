import urllib.request, json

if __name__ == '__main__':
    url = "http://172.20.11.104:3000" 
    method = "POST"
    headers = {"Content-Type" : "application/json"}

    obj = {"user" : "warota", "volume" : 600} 
    json_data = json.dumps(obj).encode("utf-8")

    request = urllib.request.Request(url, data=json_data, method=method, headers=headers)
    with urllib.request.urlopen(request) as response:
        response_body = response.read().decode("utf-8")