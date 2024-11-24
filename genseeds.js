import re
import requests
import time

url = 'https://surada.onrender.com/bbs/result'

param = {
            'name': 'genseedsBot',
            'channel': 'main',
            'verify': 'false',
            'seed': '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',
            'message': '/genseeds'
        }

cookie = {'yuki': 'True', 'bot': 'True'}

pattern = r'(.{10}: \d{7})'


api_url = "https://api.chatwork.com/v2/rooms/378920779/messages"

payload = {
    "self_unread": 0
}

headers = {
    "accept": "application/json",
    "content-type": "application/x-www-form-urlencoded",
    "x-chatworktoken": "3652c349e8c050434f420836d2a60fb7"
}

def fetch():
    response = requests.get(url, params=param, cookies=cookie)

    res = re.findall(pattern, response.text)


    if(response.text == '連没'):
        return '連没'

    if len(res) == 0:
        return 'No IDs matched'

    return res


def run(int):

    ids_list = []

    for i in range(int):

        fetched = fetch()

        if fetched == 'No IDs matched':
          print(f'{i} -- {fetched}')

        elif fetched == '連没':
            return print(f'{i} -- 連没')

        else:
            for index in range(len(fetched)):

                fet = fetched[index][0]
                print(f'{i} -- {fet}')

                ids_list.append(fet)

                payload['body'] = fet
                requests.post(api_url, data=payload, headers=headers)

        time.sleep(2)

    print(ids_list)

    return

run(100)
