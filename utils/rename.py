# coding: utf-8

import argparse
import re
import os
import json


def rename(artist: str, old_name: str):
    if old_name is None:
        old_name = artist

    path = f'../public/json/artists/{artist}/works'
    for file in os.listdir(path):
        if file.startswith(old_name):
            idx = re.findall(rf'^{old_name}(\d\d)(.+)\.json$', file)
            if len(idx) > 0:
                idx = idx[0]
                if idx[1] == 'c':
                    sign = 'compilation'
                elif idx[1] == 'e':
                    sign = 'ep'
                elif idx[1] == 'm':
                    sign = 'ep'
                elif idx[1] == 'l':
                    sign = 'live'
                elif idx[1] == 'sc':
                    sign = 'selfcover'
                elif idx[1] == 'cv':
                    sign = 'cover'
                elif idx[1] == 'r':
                    sign = 'remix'
                elif idx[1] == 's':
                    sign = 'symphonic'
                elif idx[1] == 'u':
                    sign = 'unofficial'
                elif idx[1] == 'sp':
                    sign = 'special'
                elif idx[1] == 'sg':
                    sign = 'single'
                elif idx[1] == 'bb':
                    sign = 'beatboys'
                else:
                    print(f'unknown or used sign: {idx[1]}')
                    sign = idx[1]
                os.rename(
                    f'{path}/{file}',
                    f'{path}/{artist}{idx[0]}{sign}.json')
            else:
                idx = re.findall(rf'^{old_name}(\d\d)\.json$', file)
                if len(idx) > 0:
                    os.rename(
                        f'{path}/{file}',
                        f'{path}/{artist}{idx[0]}.json')


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('artist')
    parser.add_argument('old_name', nargs='?', default=None)
    args = parser.parse_args()

    rename(args.artist, args.old_name)
