import os
import secrets

import api_nft as AN

baseUrl = 'https://hackathon.lsp.team/hk'
my_publicKey = '0xF7233f3368309bC14a3bc6e9a52219c5FcBE0C13'
my_privateKey = '6f57bea95bd20f4feeaac589a953d773634ba2cbb75f7acac4d66e95002f722a'

default_money = {
    'publicKey': '',
    'privateKey': ''
}
default_task = {
    'title': '',
    'body': '',
    'date': '',
    'priora': '',
    'type': True,
    'price': 0
}
default_user = {
    'duble': '',
    'token_user': '',
    'pwd_user': '',
    'nik_user': '',
    'NFT': [],
    'mon': default_money
}
default_products = {
    'id_prod': '',
    'title_prod': '',
    'body_prod': '',
    'img_prod': '',
    'price_prod': 0
}
default_command = {
    'users': [],
    'admin': {},
    'nik_com': '',
    'shop_products': [],
    'tasks': []
}
default_admin = {
    'token_admin': '',
    'pwd_admin': '',
    'nik_admin': '',
    'mon': default_money
}


# nik_admin, nik_com, pwd_admin
def create_command(data):
    def_command = default_command
    def_admin = default_admin

    def_admin['nik_admin'] = data['nik_admin']
    def_admin['pwd_admin'] = data['pwd_admin']
    def_admin['token_admin'] = secrets.token_hex(16)
    def_admin['mon']['publicKey'] = my_publicKey
    def_admin['mon']['privateKey'] = my_privateKey

    def_command['admin'] = def_admin

    def_command['nik_com'] = data['nik_com']
    pik.save_data(def_command, file='DATA/COMS/' + data['nik_com'])
    return pik.load_data('DATA/COMS/' + data['nik_com'])['admin']['token_admin']


# nik_com, nik_user, pwd_user
def create_user(data):
    def_user = default_user

    def_user['pwd_user'] = data['pwd_user']
    def_user['nik_user'] = data['nik_user']
    def_user['token_user'] = secrets.token_hex(16)
    keys = AN.create_mon()
    def_user['mon']['publicKey'] = keys['publicKey']
    def_user['mon']['privateKey'] = keys['privateKey']

    def_command = pik.load_data('DATA/COMS/' + data['nik_com'])
    def_command['users'].append(def_user)
    pik.save_data(def_command, file='DATA/COMS/' + data['nik_com'])
    return def_user['token_user']
    # PIK.load_data('DATA/COMS/' + data['nik_com'])


# pass_user, nik_user, nik_com
def get_token(data):
    com = pik.load_data('DATA/COMS/' + data['nik_com'])
    com_adm = com['admin']
    if com_adm['pwd_admin'] == data['pwd_user'] and com_adm['nik_admin'] == data['nik_user']:
        return {"token": com['admin']['token_admin'] }

    for com_use in com['users']:
        if com_use['pwd_user'] == data['pwd_user'] and com_use['nik_user'] == data['nik_user']:
            return com_use['token_user']


# nik_com, token_user
def get_data_command(data):
    com = pik.load_data('DATA/COMS/' + data['nik_com'])
    if data['token_user'] == com['admin']['token_admin']:
        return pik.load_data('DATA/COMS/' + data['nik_com'])
    users = com['users']
    for i in users:
        if data['token_user'] == i['token_user']:
            com = pik.load_data('DATA/COMS/' + data['nik_com'])
            del com['admin']
            com['users'] = i
            del com['users']['mon']
            del com['users']['pwd_user']
            return com
    return {}


# nik_com, token_user
def get_data_user(data):
    com = pik.load_data('DATA/COMS/' + data['nik_com'])
    if data['token_user'] == com['admin']['token_admin']:
        com = pik.load_data('DATA/COMS/' + data['nik_com'])
        users = com['users']
        for i in range(len(users)):
            del users[i]['token_user']
            del users[i]['pwd_user']
            del users[i]['mon']
        return users

    users = com['users']
    for i in users:
        if data['token_user'] == i['token_user']:
            com = pik.load_data('DATA/COMS/' + data['nik_com'])
            users = com['users']
            for i in range(len(users)):
                del users[i]['token_user']
                del users[i]['pwd_user']
                del users[i]['mon']
            return users
    return {}


# nik_com_now, nik_com_future, token_user
def edit_nik_command(data):
    com = pik.load_data('DATA/COMS/' + data['nik_com_now'])
    if data['token_user'] == com['admin']['token_admin']:
        com = pik.load_data('DATA/COMS/' + data['nik_com_now'])
        com['nik_com'] = data['nik_com_future']
        pik.save_data(com, 'DATA/COMS/' + data['nik_com_future'])
        os.remove('DATA/COMS/' + data['nik_com_now']+'.mydb')
        return {'nik_com': ""+com['nik_com']}
    return {}


# id_prod,
# def add_product(data):
