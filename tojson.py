import csv
import json

def read_csv_file(file_path):
    bd = []

    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            reader = csv.DictReader(file, delimiter=';')
            for row in reader:
                bd.append(row)

    except FileNotFoundError:
        print('File not found')

    except Exception as e:
        print('Error:', e)
    
    return bd

file_path = 'contratos2024.csv'
myDB = read_csv_file(file_path)

with open('newcontratos2024.json', 'w', encoding='utf-8') as file:
    json.dump(myDB, file, indent=4)