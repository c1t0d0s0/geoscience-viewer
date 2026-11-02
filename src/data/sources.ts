import type { ViewId } from '../views/types';

// 解説の参考にした公式の学習資料 (文部科学省「一家に1枚」特設サイト)。
// 写真や画像の無断転載・無断使用はご遠慮くださいとあるので、図や文章はのせず、リンクだけにする

export const POSTER_EARTH = 'https://www.bosai.go.jp/poster-earth/';
export const SOURCE_CREDIT = '文部科学省(もんぶかがくしょう)「一家(いっか)に1枚(まい)」特設(とくせつ)サイト (企画(きかく)・監修(かんしゅう): 防災科研(ぼうさいかけん))';

const page = (label: string, path: string) => ({ label, url: `${POSTER_EARTH}${path}/` });

/** 画面ごとの、もっと知るためのページ */
export const SOURCES: Partial<Record<ViewId, { label: string; url: string }[]>> = {
  cloud: [page('雲(くも)', 'cloud'), page('雨(あめ)', 'rain'), page('雪(ゆき)', 'snow')],
  storm: [page('雷(かみなり)', 'thunderstorm'), page('竜巻(たつまき)', 'tornado'), page('雨(あめ)', 'rain')],
  typhoon: [page('台風(たいふう)', 'typhoon'), page('風(かぜ)', 'wind')],
  rainbow: [page('虹(にじ)', 'rainbow')],
  river: [page('川(かわ)', 'river')],
  current: [page('海(うみ)', 'ocean'), page('風(かぜ)', 'wind')],
  quake: [page('地震(じしん)', 'earthquake')],
  tsunami: [page('津波(つなみ)', 'tsunami')],
  volcano: [page('火山(かざん)', 'volcano')],
  aurora: [page('オーロラ', 'aurora')],
};
