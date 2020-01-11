# coding: utf-8

import json
import os
import re
from typing import List

from bs4 import BeautifulSoup

HTML_PATH = os.path.join('Z:\\', 'html', 'musique', 'musique')
JSON_PATH = os.path.join(
    # 'Z:\\', 'Dropbox', 'fromDuskTilDawn', 'public', 'json')
    'Z:\\', 'Dropbox', 'fromDuskTilDawn', 'utils', 'tmp')
GENRE = [
    'rock.html',
    'hr.html',
    'progr.html',
    'punk.html',
    'hm.html',
    'gm.html',
    'thrash.html',
    'death.html',
    'black.html',
    'power.html',
    'hc.html',
    'doom.html',
    'gothic.html',
    'metalcore.html',
    'progm.html',
    'sympho.html',
    'neocla.html',
    'alt.html',
    'vk.html',
    'other.html']
INDEX = [
    'genre.html',
    'setlist.html',
    'index.html',
    'review.html',
    'submenu.htm',
    'manager.html',
    'contact.html',
    'link.html',
    'latest.html',
    'new.html',
    'artist.html',
    'score.html',
    'yearbest.html',
    'rankedalbums.html',
    'best_closer.html',
    'besides_fans.html',
    'series.html']
OTHER = ['55years55albums.html', '201411.html', '100essential.html', '404.html', 'greatest200.html', 'aad01.html']


class HTMLFile(object):
    def __init__(self, filename: str, directory: str):
        self.__filename = filename
        self.__extracted = self.__extract_name(self.__filename)
        self.__path = os.path.join(directory, filename)
        self.__data = {
            'uid': '',
            'date': '',
            'genres': [],
            'review_done': True
        }
        self.check_kind()
        self.read()
        self.scrape()

    @property
    def kind(self):
        return self.__kind

    @staticmethod
    def __extract_name(filename: str) -> str:
        found = re.findall(r'^(.+)\.html*', filename)
        return found[-1] if found else ''

    def check_kind(self):
        if self.is_genre():
            self.__kind = 'genre'
        elif self.is_other():
            self.__kind = 'other'
        elif self.is_index():
            self.__kind = 'index'
        elif self.is_pos():
            self.__kind = 'pos'
        elif self.is_series():
            self.__kind = 'series'
        elif self.is_rank():
            self.__kind = 'rank'
        elif self.is_progre():
            self.__kind = 'progre'
        elif self.is_setlist():
            self.__kind = 'setlist'
        elif self.is_yearbest():
            self.__kind = 'yearbest'
        elif self.is_besides_fans():
            self.__kind = 'besides_fans'
        elif self.is_selection():
            self.__kind = 'selection'
        elif self.is_ba():
            self.__kind = 'ba'
        elif self.is_work():
            self.__kind = 'work'
        else:
            self.__kind = 'artist'

    def is_pos(self) -> bool:
        return re.match(r'^pos\d{4}$', self.__extracted) is not None

    def is_work(self) -> bool:
        return re.match(
            r'^\w+\d{2}\w{0,2}$',
            self.__extracted) is not None and self.__extracted not in ('12012', '633', 'sa2015', 'lv10')

    def is_series(self) -> bool:
        return re.match(r'^\w+_series\d*$', self.__extracted) is not None

    def is_rank(self) -> bool:
        return re.match(
            r'^\w+_rank(ed)?\d*$',
            self.__extracted) is not None or self.__extracted.startswith('album_ranked')

    def is_genre(self) -> bool:
        return self.__filename in GENRE

    def is_progre(self) -> bool:
        return re.match(
            r'^progressive\d$',
            self.__extracted) is not None or self.__extracted == 'progre10'

    def is_setlist(self) -> bool:
        return self.__extracted.endswith('_setlist')

    def is_yearbest(self) -> bool:
        return re.match(r'^\d{4}$', self.__extracted) is not None

    def is_besides_fans(self) -> bool:
        return self.__extracted.endswith('_besides_fans')

    def is_ba(self) -> bool:
        return re.match(r'^b(a|s|t)\d{4}\w+$', self.__extracted) is not None

    def is_selection(self) -> bool:
        return re.match(r'\d{4}\D\w+$', self.__extracted) is not None

    def is_index(self) -> bool:
        return self.__filename in INDEX

    def is_other(self) -> bool:
        return self.__filename in OTHER

    def read(self) -> List[str]:
        try:
            with open(self.__path, encoding='cp932') as file:
                self.__file = file.read()
        except UnicodeDecodeError:
            print(self.__filename)
            self.__file = None

    def scrape(self):
        try:
            if self.__kind == 'work':
                self.__scrape_work()
        except:
            print(self.__filename)

    def __scrape_work(self):
        self.bs4 = BeautifulSoup(self.__file, 'html.parser')
        self.__data['name'] = self.bs4.find('h3').text
        self.__data['artist'] = [self.bs4.find('h2').find('a').text]
        h2 = self.bs4.find('h2').text
        self.__data['year'] = int(re.findall(r'\s\((\d{4})\)$', h2)[0])
        self.__data['list'] = [{'list': [[]]}]
        odd = self.bs4.find_all('div', {'id': 'odd'})
        if odd:
            for o in odd:
                self.__data['list'][0]['list'][0] += list(map(str.strip, (o.text.splitlines())))
        even = self.bs4.find_all('div', {'id': 'even'})
        if even:
            for e in even:
                self.__data['list'][0]['list'][0] += list(map(str.strip, e.text.splitlines()))
        body = self.bs4.find_all('div', {'id': 'body'})[0].find_all('p')
        rank = re.findall(r'^RATE: (\d{1,3})/100$', body[0].text)
        self.__data['rate'] = int(rank[0]) if rank else 0
        self.__data['comment'] = ''.join(map(str.strip, body[1].text.splitlines()))
        self.__data['recommend'] = body[2].text[5:].split('、') if len(body) > 2 else []
        self.__data['description'] = re.findall(r'\s(.+)\s', h2)[0]
        self.__data['type'] = 'single' if self.__extracted.endswith('sg') else 'album'
        self.__data['img'] = [re.findall(r'images/(.+)$', self.bs4.find_all('img')[-1].get('src'))[0]]
        
        with open(os.path.join(JSON_PATH, 'work', f'{self.__extracted}.json'), 'w', encoding='utf8') as file:
            json.dump(self.__data, file, ensure_ascii=False)

def get_htmls() -> str:
    for html in os.listdir(HTML_PATH):
        if os.path.isfile(
                os.path.join(HTML_PATH, html)) and not html.endswith(
                ('.js', '.json', '.css', '.txt', '.ico', '.lnk')):
            yield html


if __name__ == '__main__':
    for _ in get_htmls():
        f = HTMLFile(_, HTML_PATH)
        # if f.kind == 'work':
        #     break
