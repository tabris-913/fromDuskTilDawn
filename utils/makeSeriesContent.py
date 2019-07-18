# coding: utf-8

import itertools as it

def make(work_list: list):
    return f'''{{
        "description": "",
        "work_list": [{','.join(map(make_work, *it.zip_longest(*work_list)))}]
    }}'''


def make_work(uid: str, artist: str = None):
    return f'''{{
        "uid": "{uid}",
        "artist": [{'' if artist is None else f'"{artist}"'}],
        "comment": "",
        "song_list": []
    }}'''


if __name__ == '__main__':
    content = [[('uid',), ('uid2',)]]
    print(','.join(map(make, content)))