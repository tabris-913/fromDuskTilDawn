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
    uids = ['utapri01sg', 'utapri02sg', 'utapri03sg', 'utapri04sg',
            'utapri01ost', 'utapri05sg', 'utapri06sg', 'utapri07sg', 'utapri08sg', 'utapri01', '???', '???', 'utapri02', 'utapri09sg', 'utapri03']
    titles = ['オーディションソング (1)', 'オーディションソング (2)', 'オーディションソング (3)', 'オーディションソング (4)',             'サウンドの☆プリンスさまっ♪', 'ハッピーラブソング (1)', 'ハッピーラブソング (2)',
              'ハッピーラブソング (3)', 'AAディスク', 'デュエットドラマCD 那月&翔', 'Amazing Disc', 'Amazing Aria & Sweet Serenade', 'デュエットドラマCD 真斗&レン', 'SSディスク', 'デュエットドラマCD 音也&トキヤ']
    artists = [None] * len(uids)
    assert len(uids) == len(titles) == len(artists)
    print(','.join(map(make, uids, titles, artists)))
