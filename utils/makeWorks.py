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
    uids = ['utapri01sg', 'utapri02sg', 'utapri03sg', 'utapri04sg',
            'utapri01ost', 'utapri05sg', 'utapri06sg', 'utapri07sg', 'utapri08sg', 'utapri05drama', 'utapri01sp', 'utapri02sp', 'utapri06drama', 'utapri09sg', 'utapri07drama']
    titles = ['オーディションソング (1)', 'オーディションソング (2)', 'オーディションソング (3)', 'オーディションソング (4)',             'サウンドの☆プリンスさまっ♪', 'ハッピーラブソング (1)', 'ハッピーラブソング (2)',
              'ハッピーラブソング (3)', 'AAディスク', 'デュエットドラマCD 那月&翔', 'Amazing Disc', 'Amazing Aria & Sweet Serenade', 'デュエットドラマCD 真斗&レン', 'SSディスク', 'デュエットドラマCD 音也&トキヤ']
    uids += ['miyano07sg', 'utapri10sg', 'utapri11sg', 'utapri12sg', 'utapri13sg', 'utapri14sg', 'utapri15sg', 'utapri16sg', 'utapri17sg',
             'utapri08drama', 'utapri09drama', 'miyano08sg', 'utapri10drama', 'utapri11drama', 'utapri05ost', 'utapri07ost', 'utapri18sg', 'utapri19sg', 'utapri20sg', 'utapri21sg', 'utapri01shuffle', 'utapri02shuffle', 'utapri03shuffle', 'utapri04shuffle', 'utapri05shuffle']
    titles += ['オルフェ', 'マジLOVE1000%', 'アイドルソング 一十木音也', 'アイドルソング 聖川真斗', 'アイドルソング 神宮寺レン', 'アイドルソング 来栖翔', 'アイドルソング 四ノ宮那月', 'アイドルソング 一ノ瀬トキヤ', 'アイドルソング 愛島セシル', 'ユニットドラマCD カミュ&セシル', 'ユニットドラマCD 藍&那月&翔',
               'DREAM FIGHTER', 'ユニットドラマCD 蘭丸&真斗&レン', 'ユニットドラマCD 嶺二&音也&トキヤ', 'マジLOVE1000% Original Soundtrack Vol. 4', 'マジLOVE1000% Original Soundtrack Vol. 6', 'Shining All Star CD', 'アイドルソング 嶺二&藍', 'アイドルソング 蘭丸&カミュ', 'デュエットCD 嶺二&蘭丸／藍&カミュ', 'シャッフルユニットCD 嶺二&音也', 'シャッフルユニットCD 蘭丸&セシル', 'シャッフルユニットCD 藍&真斗&翔', 'シャッフルユニットCD カミュ&レン', 'シャッフルユニットCD 那月&トキヤ']
    uids += ['miyano10sg', 'utapri22sg', 'utapri23sg', 'utapri24sg', 'utapri25sg', 'utapri26sg', 'utapri27sg', 'utapri28sg', 'utapri29sg', 'utapri03sp', 'utapri10ost',
             'utapri04sp', 'utapri05sp', 'utapri01theater', 'utapri02theater', 'utapri03theater', 'utapri30sg', 'utapri31sg', 'utapri32sg', 'utapri33sg', 'utapri34sg']
    titles += ['カノン', 'マジLOVE2000%', 'アイドルソング 来栖翔', 'アイドルソング 真斗', 'アイドルソング 一十木音也', 'アイドルソング 神宮寺レン', 'アイドルソング 四ノ宮那月', 'アイドルソング 愛島セシル', 'アイドルソング 一ノ瀬トキヤ', 'ポワゾンKISS',
               'マジLOVE2000% Original Soundtrack Vol. 3', 'HE★VENS GATE', 'Shining Star Xmas', '劇団シャイニング マスカレイドミラージュ', '劇団シャイニング 天下無敵の忍び道', '劇団シャイニング JOKER TRAP', 'アイドルソング 寿嶺二', 'アイドルソング 黒崎蘭丸', 'アイドルソング 美風藍', 'アイドルソング カミュ', 'カルテットアイドルソング']
    uids += ['utapri35sg', 'utapri36sg', 'utapri37sg', 'utapri38sg', 'utapri39sg', 'utapri40sg', 'utapri41sg',
             'utapri42sg', 'utapri43sg', 'utapri44sg', 'utapri06sp', 'utapri45sg', 'utapri04theater', 'utapri07sp', 'utapri05theater', 'utapri06thater', 'utapri07theater', 'utapri46sg']
    titles += ['マジLOVEレボリューションズ', 'シャイン', 'クロスユニットアイドルソング 一十木音也・四ノ宮那月', 'アイドルソング 美風藍', 'クロスユニットアイドルソング 神宮寺レン・来栖翔・愛島セシル', 'アイドルソング カミュ', 'アイドルソング 黒崎蘭丸',
               'クロスユニットアイドルソング 聖川真斗・一ノ瀬トキヤ', 'アイドルソング 寿嶺二', 'エボリューション・イヴ', 'GOLDEN☆STAR', 'Shining All Star CD 2', 'シアターシャイニング BLOODY SHADOWS', 'HE★VENS GATE -Beginning of the Legend-', 'シアターシャイニング Pirates of the Frontier', 'シアターシャイニング エヴリィBuddy', 'シアターシャイニング ポラリス', 'Shining Dream CD']
    uids += ['utapri47sg', 'miyano16sg', 'utapri48sg', 'utapri49sg', 'utapri50sg', 'utapri51sg', 'utapri52sg', 'utapri53sg', 'utapri54sg',
             'utapri55sg', 'utapri56sg', 'utapri08sp', 'utapri09sp', 'utapri57sg', 'utapri58sg', 'utapri10sp', 'utapri12drama', 'utapri11sp', 'utapri59sg']
    titles += ['マジLOVEレジェンドスター', 'テンペスト', 'デュエットアイドルソング 一ノ瀬トキヤ&鳳瑛二', 'デュエットアイドルソング 来栖翔&日向大和', 'デュエットアイドルソング 愛島セシル&天草シオン', 'デュエットアイドルソング 神宮寺レン&桐生院ヴァン', 'デュエットアイドルソング 四ノ宮那月&帝ナギ', 'デュエットアイドルソング 聖川真斗&皇綺羅',
               'デュエットアイドルソング 一十木音也&鳳瑛一', "God's S.T.A.R.", '不滅のインフェルノ', '夢を歌へと...!', 'Welcome to UTA☆PRI RAINBOW World!!', 'アイドルソング 嶺二&カミュ', 'アイドルソング 蘭丸&藍', 'WE ARE ST☆RISH!!', 'HEAVEN SKY エピソードCD', 'Raibow Stars CD', 'Shining Live テーマソングCD']
    uids += ['utapri08theater', 'utapri60sg', 'utapri09theater', 'utapri10theater', 'utapri61sg', 'utapri13drama', 'utapri14drama', 'utapri62sg', 'utapri15drama', 'utapri16drama', 'utapri17drama',
             'utapri18drama', 'utapri19drama', 'utapri20drama', 'utapri01', 'utapri63sg', 'utapri02', 'miyano18sg', 'utapri03', 'utapri04', 'utapri64sg', 'utapri05', 'utapri06', 'utapri07', 'utapri08']
    titles += ['Shining Masterpiece Show Lost Alice', 'ウルトラブラスト', 'Shining Masterpiece Show トロワ', 'Shining Masterpiece Show リコリスの森', 'FLY TO THE FUTURE', 'デュエットドラマCD Fiction 嶺二&藍', 'デュエットドラマCD Non-Fiction 蘭丸&カミュ', 'Eternal Song CD 雪月花', 'スペシャルユニットドラマCD 音也・藍・ヴァン', 'スペシャルユニットドラマCD 那月・蘭丸・瑛一',
               'スペシャルユニットドラマCD 真斗・カミュ・瑛二', 'スペシャルユニットドラマCD レン・嶺二・綺羅', 'スペシャルユニットドラマCD 翔・ナギ・シオン', 'スペシャルユニットドラマCD トキヤ・セシル・大和', 'アンセム フォー ジ エンジェル', '愛を捧げよ ～the secret Shangri-la～', 'I am Here.', 'アンコール', 'HOLY KNIGHT', 'SUKI×SUKIはなまる!', 'Shining LiveテーマソングCD2', 'Target is you!', 'TBA', 'TBA', 'TBA']
    artists = [None] * len(uids)
    try:
        assert len(uids) == len(titles) == len(artists)
    except:
        print(len(uids), len(titles), len(artists))
        print(list(zip(uids, titles, artists)))
        raise

    with open('output.txt', 'w') as file:
        file.write(','.join(map(make, uids, titles, artists)))
