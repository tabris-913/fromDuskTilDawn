# coding: utf-8


def make(uid: str, title: str = None, artist: str = None):
    return f'''
        "{uid}": {{
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
    # uids = ['utapri01sg', 'utapri02sg', 'utapri03sg', 'utapri04sg',
    #         'utapri01ost', 'utapri05sg', 'utapri06sg', 'utapri07sg', 'utapri08sg', 'utapri01duet', 'utapri01sp', 'utapri02sp', 'utapri02duet', 'utapri09sg', 'utapri03duet']
    # titles = ['オーディションソング (1)', 'オーディションソング (2)', 'オーディションソング (3)', 'オーディションソング (4)',             'サウンドの☆プリンスさまっ♪', 'ハッピーラブソング (1)', 'ハッピーラブソング (2)',
    #           'ハッピーラブソング (3)', 'AAディスク', 'デュエットドラマCD 那月&翔', 'Amazing Disc', 'Amazing Aria & Sweet Serenade', 'デュエットドラマCD 真斗&レン', 'SSディスク', 'デュエットドラマCD 音也&トキヤ']
    # uids = ['miyano07', 'utapri10sg', 'utapri11sg', 'utapri12sg', 'utapri13sg', 'utapri14sg', 'utapri15sg', 'utapri16sg', 'utapri17sg',
    #         'utapri01unit', 'utapri02unit', 'miyano08', 'utapri03unit', 'utapri04unit', 'utapri05ost', 'utapri07ost', 'utapri18sg', 'utapri19sg', 'utapri20sg', 'utapri21sg', 'utapri01shuffle', 'utapri02shuffle', 'utapri03shuffle', 'utapri04shuffle', 'utapri05shuffle']
    # titles = ['オルフェ', 'マジLOVE1000%', 'アイドルソング 一十木音也', 'アイドルソング 聖川真斗', 'アイドルソング 神宮寺レン', 'アイドルソング 来栖翔', 'アイドルソング 四ノ宮那月', 'アイドルソング 一ノ瀬トキヤ', 'アイドルソング 愛島セシル', 'ユニットドラマCD カミュ&セシル', 'ユニットドラマCD 藍&那月&翔',
    #           'DREAM FIGHTER', 'ユニットドラマCD 蘭丸&真斗&レン', 'ユニットドラマCD 嶺二&音也&トキヤ', 'マジLOVE1000% Original Soundtrack Vol. 4', 'マジLOVE1000% Original Soundtrack Vol. 6', 'Shining All Star CD', 'アイドルソング 嶺二&藍', 'アイドルソング 蘭丸&カミュ', 'デュエットCD 嶺二&蘭丸／藍&カミュ', 'シャッフルユニットCD 嶺二&音也', 'シャッフルユニットCD 蘭丸&セシル', 'シャッフルユニットCD 藍&真斗&翔', 'シャッフルユニットCD カミュ&レン', 'シャッフルユニットCD 那月&トキヤ']
    # uids = ['miyano10', 'utapri22sg', 'utapri23sg', 'utapri24sg', 'utapri25sg', 'utapri26sg', 'utapri27sg', 'utapri28sg', 'utapri29sg', 'utapri03sp', 'utapri10ost',
    #         'utapri04sp', 'utapri05sp', 'utapri01theater', 'utapri02theater', 'utapri03theater', 'utapri30sg', 'utapri31sg', 'utapri32sg', 'utapri33sg', 'utapri34sg']
    # titles = ['カノン', 'マジLOVE2000%', 'アイドルソング 来栖翔', 'アイドルソング 真斗', 'アイドルソング 一十木音也', 'アイドルソング 神宮寺レン', 'アイドルソング 四ノ宮那月', 'アイドルソング 愛島セシル', 'アイドルソング 一ノ瀬トキヤ', 'ポワゾンKISS',
    #           'マジLOVE2000% Original Soundtrack Vol. 3', 'HE★VENS GATE', 'Shining Star Xmas', 'マスカレイドミラージュ', '天下無敵の忍び道', 'JOKER TRAP', 'アイドルソング 寿嶺二', 'アイドルソング 黒崎蘭丸', 'アイドルソング 美風藍', 'アイドルソング カミュ', 'カルテットアイドルソング']
    # uids = ['utapri35sg', 'utapri36sg', 'utapri37sg', 'utapri38sg', 'utapri39sg', 'utapri40sg', 'utapri41sg',
    #         'utapri42sg', 'utapri43sg', 'utapri44sg', 'utapri06sp', 'utapri45sg', 'utapri04theater', 'utapri07sp', 'utapri05theater', 'utapri06thater', 'utapri07theater', 'utapri46sg']
    # titles = ['マジLOVEレボリューションズ', 'シャイン', 'クロスユニットアイドルソング 一十木音也・四ノ宮那月', 'アイドルソング 美風藍', 'クロスユニットアイドルソング 神宮寺レン・来栖翔・愛島セシル', 'アイドルソング カミュ', 'アイドルソング 黒崎蘭丸',
    #           'クロスユニットアイドルソング 聖川真斗・一ノ瀬トキヤ', 'アイドルソング 寿嶺二', 'エボリューション・イヴ', 'GOLDEN☆STAR', 'Shining All Star CD 2', 'BLOODY SHADOWS', 'HE★VENS GATE -Beginning of the Legend-', 'Pirates of the Frontier', 'エヴリィBuddy', 'ポラリス', 'Shining Dream CD']
    uids = []
    titles = []
    artists = [None] * len(uids)
    assert len(uids) == len(titles) == len(artists)
    with open('output.txt', 'w') as file:
        file.write(','.join(map(make, uids, titles, artists)))
