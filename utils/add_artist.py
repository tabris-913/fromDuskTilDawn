# coding: utf-8

import argparse
import json
import os

ARTIST = '../public/json/artists'


def add_artist(filepath: str):
    with open(filepath, 'w', encoding='utf8') as file:
        info = json.load(file)

    path = os.path.join(ARTIST, info['uid'])
    if os.path.exists(path) is False:
        os.mkdir(path)

    with open(os.path.join(path, 'info.json'), 'w', encoding='utf8') as jf:
        json.dump(info, jf)


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('-f', '--file', type=str)
    args = parser.parse_args()

    add_artist(args.file)
