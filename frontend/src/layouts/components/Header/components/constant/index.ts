import {
  AdsIcon,
  BlockIcon,
  InfoIcon,
  LogoutIcon,
  PhoneIcon,
  PlayIcon,
  QuailityIcon,
  ReportIcon,
  SheldIcon,
  TextIcon,
  VipIcon,
  VipRadiusIcon,
  GoRightIcon
} from '~/components/Icons'

export const DataSettings = [
  {
    icon: { icon: BlockIcon, size: 20 },
    title: 'Danh sách chặn',
    props: {
      to: '/mymusic/blocked'
    }
  },
  {
    icon: { icon: QuailityIcon, size: 20 },
    title: 'Chất lượng nhạc',
    play: GoRightIcon,
    props: {}
  },
  {
    icon: { icon: PlayIcon, size: 20 },
    title: 'Giao diện',
    play: GoRightIcon,
    props: {}
  },
  {
    spacer: true
  },
  {
    icon: { icon: InfoIcon, size: 20 },
    title: 'Giới thiệu',
    props: {},
    sub: true
  },
  {
    icon: { icon: ReportIcon, size: 20 },
    title: 'Góp ý',
    props: {
      href: 'https://github.com/'
    },
    sub: true
  },
  {
    icon: { icon: PhoneIcon, size: 20 },
    title: 'Liên hệ',
    props: {
      to: '/contact'
    },
    sub: true
  },
  {
    icon: { icon: AdsIcon, size: 20 },
    title: 'Quảng cáo',
    props: {
      href: 'https://www.google.com'
    },
    sub: true
  },
  {
    icon: { icon: TextIcon, size: 20 },
    title: 'Thoả thuận sử dụng',
    props: {
      to: '/tnc'
    },
    sub: true
  },
  {
    icon: { icon: SheldIcon, size: 20 },
    title: 'Chính sách bảo mật',
    props: {
      to: '/privacy'
    },
    sub: true
  }
]

export const DataMenu = [
  {
    icon: { icon: VipIcon, size: 20 },
    title: 'Nâng cấp VIP',
    props: {
      to: '/vip'
    }
  },
  {
    icon: { icon: VipRadiusIcon, size: 20 },
    title: 'Mua Code VIP',
    props: {
      to: '/vip/byCode'
    }
  },
  {
    spacer: true
  },
  {
    icon: { icon: LogoutIcon, size: 20 },
    title: 'Đăng xuất',
    props: {
      to: '/logout'
    }
  }
]
