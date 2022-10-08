import pickle
import os


def save_data(saving_data, file='default'):
    if type(saving_data) != type({}):
        return False
    if os.path.exists(file + '.mydb'):
        data_file = open(file + '.mydb', 'wb+')
        pickle.dump(saving_data, data_file)
        data_file.close()
    else:
        f = open(file + '.mydb', 'x')
        f.close()
        save_data(saving_data, file)
    return True


def load_data(file='default'):
    data_file = open(file + '.mydb', 'rb')
    data = pickle.load(data_file)
    data_file.close()
    return data
