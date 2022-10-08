import requests


def create_mon():
    req = requests.post('https://hackathon.lsp.team/hk/v1/wallets/new')
    # r.status_code
    ot = req.json()
    # print(ot)
    return ot