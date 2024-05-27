export type IPagination = {
  total: number;
  offset: number;
  limit: number;
};

export interface IAppConfig {
  languages: Language[];
  maintenance: boolean;
  why_realcoin: Whyrealcoin[];
  token_nomics: Tokennomics;
  about_us: LangString[];
  our_team: Ourteam[];
  global_parners: Globalparner[];
  force_update: number;
  update_message: string;
  update_url: string;
  stradtegic_partners: StradtegicPartners[];
  introduce_home: IntroduceHome;
  footer_home: FooterHome;
}
export interface Globalparner {
  title: LangString;
  list_parner: string[];
}
export interface Ourteam {
  title: LangString;
  members: Member[];
}
export interface Member {
  photoPath: string;
  name: string;
  role: LangString;
}
export interface Tokennomics {
  img_chart: string;
  pie_chart: LangString;
  content: LangString[];
}
export interface Whyrealcoin {
  title: LangString;
  description: LangString;
}

export interface En {
  content: string;
}
export interface Language {
  name: string;
  code: string;
  image: string;
}
export interface StradtegicPartners {
  img: string;
  titles: LangString;
}
export interface IntroduceHome {
  introduce: LangString;
  url_download_app: string;
  img_currentcy: string;
  img_phone: string;
  digital_currentcy: Digitalcurrentcy;
  introduce_text: LangString;
  link_youtube: string;
}
export interface SeoDataApp {
  en: SeoInterface;
  vi: SeoInterface;
}
export interface SeoInterface {
  title: string;
  description: string;
  image: string;
}
export interface Digitalcurrentcy {
  titles: LangString;
  list_digital: LangString[];
}
export interface FooterHome {
  google_play: string;
  app_store: string;
  twitter: string;
  instagram: string;
  facebook: string;
  linked_in: string;
  youtube: string;
  community: string;
}
export interface LangString {
  en: string;
  vi: string;
}
