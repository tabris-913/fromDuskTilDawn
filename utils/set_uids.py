# coding: utf-8

import argparse
import re
import os
import json


def set_uids(artist: str):
    path = f'../public/json/artists/{artist}/works'
    for file in os.listdir(path):
        if file.startswith(artist):
            with open(f'{path}/{file}', encoding='utf8') as js:
                d = json.load(js)
            d['uid'] = file[:-5]
            d['review_done'] = False
            with open(f'{path}/{file}', 'w', encoding='utf8') as js:
                json.dump(d, js, ensure_ascii=False)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('artist')
    args = parser.parse_args()

    set_uids(args.artist)
