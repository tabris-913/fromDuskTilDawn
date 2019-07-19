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
    # uids = ['utapri01sg', 'utapri02sg', 'utapri03sg', 'utapri04sg',
    #         'utapri01ost', 'utapri05sg', 'utapri06sg', 'utapri07sg', 'utapri08sg', 'utapri01duet', 'utapri01sp', 'utapri02sp', 'utapri02duet', 'utapri09sg', 'utapri03duet']

    content = [[('uid',), ('uid2',)]]
    print(','.join(map(make, content)))
