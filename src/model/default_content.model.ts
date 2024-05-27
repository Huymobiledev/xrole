import {
  FooterHome,
  Globalparner,
  IntroduceHome,
  LangString,
  Language,
  Ourteam,
  SeoDataApp,
  SeoInterface,
  StradtegicPartners,
  Tokennomics,
  Whyrealcoin,
} from "./appconfig.model";

export const ListStradtegicPartnersDefault: Array<StradtegicPartners> = [
  {
    img: "/images/img_tripvacay.png",
    titles: {
      en: "Tripvacay is a cutting-edge global travel technology platform headquartered in Dubai, boasting a portfolio of over 200,000 hotels and resorts worldwide. Their curated selection provides unparalleled value, delivering exceptional room rates that surpass market standards.",
      vi: "Tripvacay là một nền tảng công nghệ du lịch toàn cầu tiên tiến đặt trụ sở tại Dubai, với một danh mục hơn 200.000 khách sạn và khu nghỉ trên toàn thế giới. Sự lựa chọn được tạo ra bởi họ cung cấp giá trị không giới hạn, mang lại mức giá phòng đặc biệt vượt qua các tiêu chuẩn thị trường.",
    },
  },
  {
    img: "/images/img_singsing.png",
    titles: {
      en: "SingSing is a pioneering web3 platform headquartered in Singapore, with an AI-powered singing assessment application. With 2 million users in Southeast Asia and steady growth, SingSing has attracted 50,000 active users monthly and facilitates 2 million transactions monthly. This platform also ranks in the top 10 social projects on DappRadar",
      vi: "SingSing là một nền tảng web3 tiên phong có trụ sở tại Singapore, với một ứng dụng đánh giá hát bằng trí tuệ nhân tạo. Với 2 triệu người dùng tại Đông Nam Á và sự phát triển ổn định, SingSing đã thu hút 50.000 người dùng hoạt động mỗi tháng và thực hiện 2 triệu giao dịch hàng tháng. Nền tảng này cũng được xếp hạng trong top 10 dự án xã hội trên DappRadar.",
    },
  },
  {
    img: "/images/img_ct_group.png",
    titles: {
      en: "CT Land is a real estate developer company, headquartered in Ho chi Minh City, Vietnam, a member company of CT Group. CT Land is valued more than 3 billion USD and is providing Real Estates for Realcoin to insure for its token RCT and listed on its NFT marketplace.",
      vi: "CT Land là một công ty phát triển bất động sản, có trụ sở tại Thành phố Hồ Chí Minh, Việt Nam, là một thành viên của Tập đoàn CT. CT Land được định giá hơn 3 tỷ USD và cung cấp Bất động sản cho Realcoin để bảo hiểm cho token RCT của họ và được niêm yết trên thị trường NFT của họ.",
    },
  },
];
export const TokenEconomicsDefault: Tokennomics = {
  img_chart: "/icons/ic_tokennomics.svg",
  pie_chart: {
    en: "1 NFT= 1 RCT where USD 50 mn real estates back the value of RCT\n1 NFT = $125",
    vi: "1 NFT = 1 RCT với 50 triệu USD bất động sản làm bảo đảm giá trị của RCT.\n1 NFT = 125 USD",
  },
  content: [
    {
      en: "BLOCKCHAIN: BINANCE SMARTCHAIN (BEP-20)",
      vi: "BLOCKCHAIN: BINANCE SMARTCHAIN (BEP-20)",
    },
    {
      en: "TOTAL SUPPLY: 500,000 $RCT TOKENS",
      vi: "TỔNG CUNG CẤP: 500,000 $RCT TOKEN",
    },
    { en: "PRICE: $125 PER $RCT", vi: "Giá: 125 USD mỗi token RCT" },
  ],
};
export const WhyRealCoinDefault: Whyrealcoin[] = [
  {
    title: {
      en: "SECURED\nINVESTMENTS",
      vi: "ĐẦU TƯ\nĐẢM BẢO",
    },
    description: {
      en: "Secured by Real Estate - Price appreciation of real estates - Stability in value - As a tangible asset - Global transactions - Versatility",
      vi: "Được đảm bảo bằng Bất động sản - Bất động sản tăng giá - Ổn định về giá trị - Là tài sản hữu hình - Giao dịch toàn cầu - Tính linh hoạt",
    },
  },
  {
    title: {
      en: "TRANSPARENCY",
      vi: "MINH BẠCH",
    },
    description: {
      en: "Immutable on the global Blockchain platform and Smart Contract Cryptocurrencies are highly fair: Based on investor talent, not influenced by politicians",
      vi: "Không thể thay đổi trên nền tảng Blockchain toàn cầu và Tiền điện tử được xác định thông qua Hợp đồng Thông minh, là cách rất công bằng: Dựa trên tài năng của nhà đầu tư, không bị ảnh hưởng bởi chính trị gia",
    },
  },
  {
    title: { en: "GLOBAL, \nBORDERLESS", vi: "TOÀN CẦU, \nKHÔNG BIÊN GIỚI" },
    description: {
      en: "Global accessibility reduces dependence on local political factors.",
      vi: "Khả năng tiếp cận toàn cầu giảm sự phụ thuộc vào các yếu tố chính trị địa phương.",
    },
  },
  {
    title: { en: "FAST AND \nCONVENIENT", vi: "NHANH CHÓNG \nVÀ TIỆN LỢI" },
    description: {
      en: "Transaction speed Convenient and global - Digital gadgets",
      vi: "Tốc độ giao dịch thuận tiện và toàn cầu - Thiết bị số hóa",
    },
  },
  {
    title: {
      en: "SIGNIFICANT \nGROWTH POTENTIAL",
      vi: "TIỀM NĂNG\nTĂNG TRƯỞNG",
    },
    description: {
      en: "Appreciation of value - Growing Market Portfolio Diversification - Independent nature and political institutions and the potential for rapid growth of certain projects.",
      vi: "Đánh giá cao giá trị - Đa dạng hóa danh mục đầu tư thị trường đang phát triển - Bản chất độc lập và thể chế chính trị cũng như tiềm năng phát triển nhanh chóng của một số dự án nhất định.",
    },
  },
];
export const SeoDataAppDeault: SeoDataApp = {
  en: {
    title: "Realcoin Global Tech Co.",
    description:
      "Realcoin is Web3 Real Estate Platform that creating opportunities for rewarding international property investment using digital asset technology.",
    image:
      "https://media-dev.realcoin.network/photos/2024/5/5/clvq6u78r000jj0v7833ffnex.png",
  },
  vi: {
    title: "Realcoin Global Tech Co.",
    description:
      "Realcoin là Nền tảng bất động sản Web3 tạo cơ hội thưởng cho đầu tư bất động sản quốc tế bằng công nghệ tài sản kỹ thuật số.",
    image:
      "https://media-dev.realcoin.network/photos/2024/5/5/clvq6u78r000jj0v7833ffnex.png",
  },
};
export const IntroduceHomeDefault: IntroduceHome = {
  introduce: {
    en: "asset-backed, sustainable token",
    vi: "Token bền vững, được đảm bảo bằng tài sản",
  },
  url_download_app: "https://dev.realcoin.network/vi",
  img_currentcy: "/icons/ic_puzzle_pieces.svg",
  img_phone: "/images/img_phone.png",
  digital_currentcy: {
    titles: {
      en: "GREEN DIGITAL\nCURRENCY",
      vi: "TIỀN TỆ KỸ THUẬT\nSỐ XANH",
    },
    list_digital: [
      {
        en: "Unique identity",
        vi: "Bản thể duy nhất",
      },
      {
        en: "Secured by real assets",
        vi: "Được đảm bảo bằng tài sản thực",
      },
      {
        en: "Transparency",
        vi: "Minh bạch",
      },
      {
        en: "Global blockchain platform.",
        vi: "Nền tảng blockchain toàn cầu.",
      },
    ],
  },
  introduce_text: {
    en: "Realcoin (RCT) is a sustainable digital currency with a uniqueidentity, secured by underlying real world assets (RWAS) that can offer additional growth potential. RCT leverages the standards of ustainable construction (both economically and environmentally) - and further incorporates immutability thanks to the global blockchain.",
    vi: "Realcoin (RCT) là một loại tiền điện tử bền vững với một bản thể độc đáo, được đảm bảo dưới hình thức tài sản thực (RWAS) có thể mang lại thêm nhiều tiềm năng tăng trưởng. RCT sử dụng các tiêu chuẩn của xây dựng bền vững (cả về mặt kinh tế và môi trường) - và thêm vào đó tính bất biến nhờ vào blockchain toàn cầu.",
  },
  link_youtube: "",
};
export const FoooterHomeDefault: FooterHome = {
  google_play: "https://dev.realcoin.network/vi",
  app_store: "https://dev.realcoin.network/vi",
  twitter: "https://twitter.com/Realcoin9",
  instagram:
    "https://www.instagram.com/realcoin.global?igsh=MWV6dnFheHRmajlraQ%3D%3D&utm_source=qr",
  facebook: " https://www.facebook.com/realcoinglobal?mibextid=LQQJ4d",
  linked_in: "https://vn.linkedin.com/company/realcoin",
  youtube: "https://www.youtube.com/channel/UCpzkHtt5tr-0YVjTs3c4UrQ",
  community: "https://t.me/realcoinofficialchannel",
};
export const AboutUsDefault: LangString[] = [
  {
    vi: "Realcoin Global Technology LLC.Là Công ty được thành lập theo quy định của Dubai, UAE, được thành lập bởi một nhóm các doanh nhân trẻ có tư duy tương tự với chuyên môn về blockchain, lĩnh vực du lịch và quản lý bất động sản; Cụ thể, Realcoin được hỗ trợ bởi Tập đoàn CT - một trong những tập đoàn bất động sản lớn và uy tín tại Thành phố Hồ Chí Minh, Việt Nam với 11 ngành nghề kinh doanh (www.ctgroupvietnam.com).",

    en: "Realcoin Global Technology LLC.A Company incorporated under Dubai, UAE regulations, founded by a group of like- minded young entrepreneurs with expertise in blockchain, hospitality and real estate management; In particular, Realcoin is supported by CT Group – one of the large and reputable real estate groups in Ho Chi Minh City, Vietnam with 11 business lines (www.ctgroupvietnam.com).",
  },
  {
    vi: "RealCoin Global Technology LLC. Do ông Tim Dương, người từng là CEO của Booking.com tại Việt Nam - nền tảng của mạng lưới đặt phòng khách sạn trực tuyến lớn nhất thế giới, đảm nhận vai trò lãnh đạo và được hướng dẫn bởi một đội ngũ rất có kinh nghiệm.",

    en: "RealCoin Global Technology LLC.Is led by Mr. Tim Duong, Former CEO of Booking.com Vietnam, the world's largest online travel agency (OTA) platform and mentored by a very experienced team.",
  },
  {
    vi: "Công ty có một đội ngũ các cố vấn chuyên gia kinh nghiệm, bao gồm Colin Miles, một nhà tư vấn blockchain độc lập đặt trụ sở tại Singapore, người trước đây đã làm việc với nhiều dự án token blockchain tầng một khi làm việc tại Zilliqa Research Pte Ltd và TZ APAC Pte Ltd.",

    en: "The company has a team of experienced expert advisors, including Colin Miles an independent blockchain consultant based in Singapore who formally worked with multiple layer one blockchain token projects whilst at Zilliqa Research Pte Ltd and TZ APAC Pte Ltd.",
  },
  {
    vi: "Realcoin thiết lập mối quan hệ chiến lược với các nhà cung cấp dịch vụ chính và các đối tác hàng đầu trong ngành.",

    en: "Realcoin establishes strategic relationships with key service providers and industry-leading partners.",
  },
];
export const MembersDefault: Ourteam[] = [
  {
    title: {
      en: "FOUNDER&\nCEO",
      vi: "FOUNDER&\nCEO",
    },
    members: [
      {
        photoPath: "/img_timduong.png",
        name: "TIM DUONG",
        role: {
          en: "TIM DUONG CEO AND CO-FOUNDER FORMER CEO - BOOKING.COM VIETNAM",
          vi: "TIM DUONG, GIÁM ĐỐC ĐIỀU HÀNH VÀ CỘNG SÁNG LẬP VIỆC TỪNG LÀ GIÁM ĐỐC ĐIỀU HÀNH - BOOKING.COM VIỆT NAM",
        },
      },
    ],
  },
  {
    title: {
      en: "MANAGEMENT AND \nOPERATION TEAM",
      vi: "ĐỘI NGŨ QUẢN LÝ \nVÀ VẬN HÀNH",
    },
    members: [
      {
        photoPath: "/img_lienchu.png",
        name: "LIEN CHU",
        role: {
          en: "MARKETING DIRECTOR",
          vi: "GIÁM ĐỐC MARKETING",
        },
      },
      {
        photoPath: "/img_lux.png",
        name: "Luxy",
        role: {
          en: "Marketing and Community Lead",
          vi: "TRƯỞNG NHÓM Marketing VÀ CỘNG ĐỒNG",
        },
      },
      {
        photoPath: "/img_quynhtrinh.png",
        name: "QUYNH TRINH",
        role: {
          en: "HEAD OF LEGAL",
          vi: "TRƯỞNG PHÒNG PHÁP LÝ",
        },
      },
      {
        photoPath: "/img_buckphan.png",
        name: "BUCK PHAN",
        role: {
          en: "HEAD OF BLOCKCHAIN/ FINANCE PRODUCT",
          vi: "TRƯỞNG PHÒNG BLOCKCHAIN/TÀI CHÍNH",
        },
      },
    ],
  },
  {
    title: {
      en: "ADVISORS",
      vi: "CỐ VẤN",
    },
    members: [
      {
        photoPath: "/img_kimchung.png",
        name: "MR. TRAN KIM CHUNG",
        role: {
          en: "INVESTOR AND ADVISOR CHAIRMAN CT GROUP",
          vi: "NHÀ ĐẦU TƯ VÀ CHỦ TỊCH HỘI ĐỒNG TƯ VẤN CT GROUP",
        },
      },
      {
        photoPath: "/img_lamle.png",
        name: "MR. LAM LE",
        role: {
          en: "ADVISOR VICE PRESIDENT",
          vi: "PHÓ CHỦ TỊCH HỘI ĐỒNG TƯ VẤN",
        },
      },
      {
        photoPath: "/img_colinmiles.png",
        name: "MR. COLIN MILES",
        role: {
          en: "Independent Blockchain Consultant",
          vi: "Nhà Tư vấn Blockchain Độc Lập",
        },
      },
      {
        photoPath: "/img_gratzke.png",
        name: "DR. GARTZKE",
        role: {
          en: "ADVISOR MANAGING PARTNER OF SPITZBERG PARTNERS",
          vi: "CỐ VẤN - ĐỐI TÁC QUẢN LÝ CỦA SPITZBERG PARTNERS",
        },
      },
      {
        photoPath: "/img_hapham.png",
        name: "HA PHAM",
        role: {
          en: "CTO/ADVISOR",
          vi: "CTO/CỐ VẤN",
        },
      },
    ],
  },
];
export const listLang: Array<Language> = [
  {
    name: "English",
    code: "en",
    image:
      "https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png",
  },
  {
    name: "Tiếng Việt",
    code: "vi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/225px-Flag_of_Vietnam.svg.png",
  },
];
export const GlobalParnerDefault: Globalparner[] = [
  {
    title: {
      en: "real estate partners",
      vi: "đối tác bất động sản",
    },
    list_parner: [
      "/images/img_grant_thornton_partners.png",
      "/images/img_colliers.png",
      "/images/img_jll_partners.png",
      "/images/img_cbre_partners.png",
    ],
  },
  {
    title: {
      en: "legal partners",
      vi: "đối tác pháp lý",
    },
    list_parner: [
      "/images/img_lnt_partners.png",
      "/images/img_dentons.png",
    ],
  },
  {
    title: {
      en: "financial partners",
      vi: "đối tác tài chính",
    },
    list_parner: [
      "/images/img_sp_partners.png",
      "/images/img_oramper_partners.png",
      "/images/img_fizen_partners.png",
      "/images/img_deloitte_partners.png",
    ],
  },
];
export const DefaultAppBar: string[] = [
  "Main Page",
  "Product",
  "Solution",
  "Services",
  "Partners",
  "About Us",
];
