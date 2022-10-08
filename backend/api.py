def api(cmd, data):
    if cmd == 'create_command':
        return bd.create_command(data)
    elif cmd == 'create_user':
        return bd.create_user(data)
    elif cmd == 'get_data_command':
        return bd.get_data_command(data)
    elif cmd == 'get_data_user':
        return bd.get_data_user(data)
    elif cmd == 'get_token':
        return bd.get_token(data)
    elif cmd == 'edit_nik_command':
        return bd.edit_nik_command(data)
