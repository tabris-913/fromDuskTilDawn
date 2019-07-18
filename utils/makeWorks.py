# coding: utf-8

def make(uid: str, title: str = None, artist: str = None):
    return f'''"{uid}": {{
        "title": "{'' if title is None else title}",
        "description": "",
        "date": "",
        "year": 0,
        "artist": [{'' if artist is None else f'"{artist}"'}],
        "list": [[]],
        "comment": "",
        "uid": "{uid}",
        "img": ["{uid}.jpg"],
        "rate": 0
    }}'''


if __name__ == '__main__':
    uids = ['uid', 'uid2']
    titles = ['t', 't2', 't3']
    artists = [None] * len(uids)
    assert len(uids) == len(titles) == len(artists)
    print(','.join(map(make, uids, titles, artists)))