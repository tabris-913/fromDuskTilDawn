# coding: utf-8

import argparse
import json
import os

ARTIST = os.path.join('..', 'public', 'json', 'artists')


def add_artist(filepath: str):
    with open(filepath, 'w', encoding='utf8') as file:
        info = json.load(file)

    path = os.path.join(ARTIST, info['uid'])
    if os.path.exists(path) is False:
        os.mkdir(path)
        os.mkdir(os.path.join(path, 'works'))

    with open(os.path.join(path, 'info.json'), 'w', encoding='utf8') as jf:
        json.dump(info, jf)

    with open(os.path.join(path, 'works', 'index.json'), 'w', encoding='utf8') as jf:
        json.dump({'albums': {}, 'others': {}, 'singles': {}}, jf)


def info_artist():
    d = os.listdir(ARTIST)
    for c in d:
        if os.path.isdir(os.path.join(ARTIST, c)):
            infojson = os.path.join(ARTIST, c, 'info.json')
            if os.path.exists(infojson):
                continue
            info = {
                'uid': c,
                'name': '',
                'ruby': '',
                'ruby4Sort': '',
                'en': '',
                'initial': [],
                'kind': '',
                'genres': [],
                'albums': [],
                'singles': [],
                'others': [],
                'akas': [],
                'logo': [],
                'related': []
            }
            with open(infojson, 'w', encoding='utf8') as infof:
                json.dump(info, infof, ensure_ascii=False)


def index_artist():
    d = os.listdir(ARTIST)
    with open(os.path.join(ARTIST, 'index.json'), encoding='utf8') as indexf:
        old = json.load(indexf)

    index = {}
    new = []
    for c in d:
        if os.path.isdir(os.path.join(ARTIST, c)):
            with open(os.path.join(ARTIST, c, 'info.json'), encoding='utf8') as infof:
                info = json.load(infof)
            uid = info['uid']
            index[uid] = {
                'name': info['name'],
                'initial': info['initial'],
                'en': info['en'],
                'ruby4Sort': info['ruby4Sort']
            }
            if uid not in old:
                new += [uid]
    with open(os.path.join(ARTIST, 'index.json'), 'w', encoding='utf8') as indexf:
        json.dump(index, indexf, ensure_ascii=False)

    if new:
        print(f'Check the initial: {new}')


def work_artist():
    d = os.listdir(ARTIST)
    for c in d:
        if os.path.isdir(os.path.join(ARTIST, c)):
            path = os.path.join(ARTIST, c, 'works')
            d = {'albums': {}, 'singles': {}, 'others': {}}
            if os.path.exists(path) is False:
                os.mkdir(path)
            works = os.listdir(path)
            genres = []
            for workname in works:
                if workname == 'index.json':
                    continue
                with open(os.path.join(path, workname), encoding='utf8') as wf:
                    work = json.load(wf)
                t = f'{work.get("type", "other")}s'
                uid = work['uid']
                genres += list(filter(lambda g: g not in genres,
                                      work['genres'])) if 'genres' in work else []
                if uid not in d[t]:
                    d[t][uid] = {
                        'uid': uid,
                        'name': work['name'],
                        'date': work['date'],
                        'img': work.get('img', []),
                        'review_done': work.get('review_done', False)}
            for k in d:
                d[k] = dict(sorted(d[k].items(), key=lambda x: x[1]['date']))
            with open(os.path.join(path, 'index.json'), 'w', encoding='utf8') as indexf:
                json.dump(d, indexf, ensure_ascii=False)

            with open(os.path.join(ARTIST, c, 'info.json'), encoding='utf8') as infof:
                info = json.load(infof)
            for k, v in d.items():
                if k not in info:
                    info[k] = []
                # for k2 in v:
                #     if k2 not in info[k]:
                #         info[k] += [k2]
                info[k] = list(v.keys())
            old_genres = set(info['genres'])
            info['genres'] = genres + \
                list(filter(lambda g: g not in genres, old_genres))
            with open(os.path.join(ARTIST, c, 'info.json'), 'w', encoding='utf8') as infof:
                json.dump(info, infof, ensure_ascii=False)


def add_work(auid: str, l, sign):
    SIGN = {
        '': 'オリジナルアルバム',
        'compilation': 'ベストアルバム',
        'strings': 'ストリングスアルバム',
        'ep': 'ミニアルバム',
        'live': 'ライヴアルバム',
        'remix': 'リミックスアルバム',
        'single': 'シングル',
        'cover': 'カヴァー',
        'selfcover': 'セルフカヴァー'}
    path = os.path.join(ARTIST, auid, 'works')
    with open(os.path.join(path, f'{auid}.json'), encoding='utf8') as file:
        base = json.load(file)

    for i in l:
        d = base.copy()
        uid = f'{auid}{i:02d}{sign}'
        d['uid'] = uid
        d['img'] = [f'{uid}.jpg']
        d['description'] = f'{i}th{SIGN[sign]}'
        with open(os.path.join(path, f'{uid}.json'), 'w', encoding='utf8') as file:
            json.dump(d, file, ensure_ascii=False)


if __name__ == "__main__":
    # parser = argparse.ArgumentParser()
    # parser.add_argument('-f', '--file', type=str)
    # args = parser.parse_args()

    # add_artist(args.file)
    info_artist()
    index_artist()
    work_artist()
    # add_work('ali_project', range(17, 20), '')
