# coding: utf-8

import argparse
import json
import os

ARTIST = os.path.join('..', 'public', 'json', 'artists')
GENRE = os.path.join('..', 'public', 'json', 'genres')


def index_genre():
    d = os.listdir(GENRE)
    index = {}
    for c in d:
        if c != 'index.json':
            with open(os.path.join(GENRE, c), encoding='utf8') as jf:
                genre = json.load(jf)
            index[genre['uid']] = {
                'name': genre['name'],
                'en': genre['en']
            }
    with open(os.path.join(GENRE, 'index.json'), 'w', encoding='utf8') as indexf:
        json.dump(index, indexf, ensure_ascii=False)


def artist_genre():
    d = os.listdir(ARTIST)
    gd = os.listdir(GENRE)
    for c in d:
        if os.path.isdir(os.path.join(ARTIST, c)):
            with open(os.path.join(ARTIST, c, 'info.json'), encoding='utf8') as infof:
                info = json.load(infof)
            for genrename in info.get('genres', []):
                gjn = f'{genrename}.json'
                if gjn in gd:
                    with open(os.path.join(GENRE, gjn), encoding='utf8') as jf:
                        genre = json.load(jf)
                    if info['uid'] not in genre['list']:
                        genre['list'] = sorted(genre['list'] + [info['uid']])
                    with open(os.path.join(GENRE, gjn), 'w', encoding='utf8') as jf:
                        json.dump(genre, jf, ensure_ascii=False)
                else:
                    with open(os.path.join(GENRE, gjn), 'w', encoding='utf8') as jf:
                        json.dump({
                            'uid': genrename,
                            'name': '',
                            'en': '',
                            'list': [info['uid']]
                        }, jf, ensure_ascii=False)


if __name__ == '__main__':
    artist_genre()
    index_genre()
