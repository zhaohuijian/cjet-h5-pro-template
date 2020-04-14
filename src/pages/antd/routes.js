import { lazy } from 'react';

/**
 * 布局
 */
const Flex = lazy(() => import('./routes/Layout/Flex'))
const WingBlank = lazy(() => import('./routes/Layout/WingBlank'))
const WhiteSpace = lazy(() => import('./routes/Layout/WhiteSpace'))

/**
 * 数据输入
 */
const Button = lazy(() => import('./routes/Button'))
const Checkbox = lazy(() => import('./routes/Checkbox'))
const Calendar = lazy(() => import('./routes/Calendar'))
const DatePickerView = lazy(() => import('./routes/DatePickerView'))
const DatePicker = lazy(() => import('./routes/DatePicker'))
const InputItem = lazy(() => import('./routes/InputItem'))
const ImagePicker = lazy(() => import('./routes/ImagePicker'))
const PickerView = lazy(() => import('./routes/PickerView'))
const Picker = lazy(() => import('./routes/Picker'))
const Radio = lazy(() => import('./routes/Radio'))
const Range = lazy(() => import('./routes/Range'))
const Switch = lazy(() => import('./routes/Switch'))
const Stepper = lazy(() => import('./routes/Stepper'))
const Slider = lazy(() => import('./routes/Slider'))
const SearchBar = lazy(() => import('./routes/SearchBar'))
const TextareaItem = lazy(() => import('./routes/TextareaItem'))

/**
 * 导航
 */
const Drawer = lazy(() => import('./routes/Navigation/Drawer'))
const Menu = lazy(() => import('./routes/Navigation/Menu'))
const Navbar = lazy(() => import('./routes/Navigation/Navbar'))
const Popover = lazy(() => import('./routes/Navigation/Popover'))
const Pagination = lazy(() => import('./routes/Navigation/Pagination'))
const SegmentedControl = lazy(() => import('./routes/Navigation/SegmentedControl'))
const Tabs = lazy(() => import('./routes/Navigation/Tabs'))
const TabsVertical = lazy(() => import('./routes/Navigation/TabsVertical'))
const TabsMost = lazy(() => import('./routes/Navigation/TabsMost'))
const TabBar = lazy(() => import('./routes/Navigation/TabBar'))
const TabBarListView = lazy(() => import('./routes/Navigation/TabBarListView'))
const TabBarTop = lazy(() => import('./routes/Navigation/TabBarTop'))

/**
 * 数据展示
 */
const Accordion = lazy(() => import('./routes/DataDisplay/Accordion'))
const Badge = lazy(() => import('./routes/DataDisplay/Badge'))
const Carousel = lazy(() => import('./routes/DataDisplay/Carousel'))
const CarouselChildChange = lazy(() => import('./routes/DataDisplay/CarouselChildChange'))
const CarouselGap = lazy(() => import('./routes/DataDisplay/CarouselGap'))
const CarouselVertical = lazy(() => import('./routes/DataDisplay/CarouselVertical'))
const CarouselDraw = lazy(() => import('./routes/DataDisplay/CarouselDraw'))
const Card = lazy(() => import('./routes/DataDisplay/Card'))
const Grid = lazy(() => import('./routes/DataDisplay/Grid'))
const Icon = lazy(() => import('./routes/DataDisplay/Icon'))
const List = lazy(() => import('./routes/DataDisplay/List'))
const ListInput = lazy(() => import('./routes/DataDisplay/ListInput'))
const NoticeBar = lazy(() => import('./routes/DataDisplay/NoticeBar'))
const Steps = lazy(() => import('./routes/DataDisplay/Steps'))
const StepsLevel = lazy(() => import('./routes/DataDisplay/StepsLevel'))
const Tag = lazy(() => import('./routes/DataDisplay/Tag'))

/**
 * 反馈
 */
const ActionSheet = lazy(() => import('./routes/Feedback/ActionSheet'))
const ActivityIndicator = lazy(() => import('./routes/Feedback/ActivityIndicator'))
const Modal = lazy(() => import('./routes/Feedback/Modal'))
const ModalWarning = lazy(() => import('./routes/Feedback/ModalWarning'))
const ModalInput = lazy(() => import('./routes/Feedback/ModalInput'))
const ModalOperate = lazy(() => import('./routes/Feedback/ModalOperate'))
const Progress = lazy(() => import('./routes/Feedback/Progress'))
const Toast = lazy(() => import('./routes/Feedback/Toast'))

/**
 * 手势
 */
const PullToRefresh = lazy(() => import('./routes/Gesture/PullToRefresh'))
const PullToRefreshListView = lazy(() => import('./routes/Gesture/PullToRefreshListView'))
const SwipeAction = lazy(() => import('./routes/Gesture/SwipeAction'))

/**
 * 组合
 */
const ListView = lazy(() => import('./routes/Combination/ListView'))
const ListViewBody = lazy(() => import('./routes/Combination/ListViewBody'))
const ListViewSticky = lazy(() => import('./routes/Combination/ListViewSticky'))
const ListViewStickyIndex = lazy(() => import('./routes/Combination/ListViewStickyIndex'))
const Result = lazy(() => import('./routes/Combination/Result'))


const Home = lazy(() => import('./routes/home'))

const Routes = [
  /**
   * 布局
   */
  { path: '/Flex', name: 'Flex', component: Flex },
  { path: '/WingBlank', name: 'WingBlank', component: WingBlank },
  { path: '/WhiteSpace', name: 'WhiteSpace', component: WhiteSpace },

  /**
   * 数据录入
   */
  { path: '/Button', name: 'Button', component: Button },
  { path: '/Checkbox', name: 'Checkbox', component: Checkbox },
  { path: '/Calendar', name: 'Calendar', component: Calendar },
  { path: '/DatePickerView', name: 'DatePickerView', component: DatePickerView },
  { path: '/DatePicker', name: 'DatePicker', component: DatePicker },
  { path: '/InputItem', name: 'InputItem', component: InputItem },
  { path: '/ImagePicker', name: 'ImagePicker', component: ImagePicker },
  { path: '/PickerView', name: 'PickerView', component: PickerView },
  { path: '/Picker', name: 'Picker', component: Picker },
  { path: '/Radio', name: 'Radio', component: Radio },
  { path: '/Range', name: 'Range', component: Range },
  { path: '/Switch', name: 'Switch', component: Switch },
  { path: '/Stepper', name: 'Stepper', component: Stepper },
  { path: '/Slider', name: 'Slider', component: Slider },
  { path: '/SearchBar', name: 'SearchBar', component: SearchBar },
  { path: '/TextareaItem', name: 'TextareaItem', component: TextareaItem },

  /**
   * 导航
   */
  { path: '/Drawer', component: Drawer },
  { path: '/Menu', component: Menu },
  { path: '/Navbar', component: Navbar },
  { path: '/Popover', component: Popover },
  { path: '/Pagination', component: Pagination },
  { path: '/SegmentedControl', component: SegmentedControl },
  { path: '/Tabs', component: Tabs },
  { path: '/TabsVertical', component: TabsVertical },
  { path: '/TabsMost', component: TabsMost },
  { path: '/TabBar', component: TabBar },
  { path: '/TabBarListView', component: TabBarListView },
  { path: '/TabBarTop', component: TabBarTop },

  /**
   * 数据展示
   */
  { path: '/Accordion', component: Accordion },
  { path: '/Badge', component: Badge },
  { path: '/Carousel', component: Carousel },
  { path: '/CarouselChildChange', component: CarouselChildChange },
  { path: '/CarouselGap', component: CarouselGap },
  { path: '/CarouselVertical', component: CarouselVertical },
  { path: '/CarouselDraw', component: CarouselDraw },
  { path: '/Card', component: Card },
  { path: '/Grid', component: Grid },
  { path: '/Icon', component: Icon },
  { path: '/List', component: List },
  { path: '/ListInput', component: ListInput },
  { path: '/NoticeBar', component: NoticeBar },
  { path: '/Steps', component: Steps },
  { path: '/StepsLevel', component: StepsLevel },
  { path: '/Tag', component: Tag },

  /**
   * 反馈
   */
  { path: '/ActionSheet', component: ActionSheet },
  { path: '/ActivityIndicator', component: ActivityIndicator },
  { path: '/Modal', component: Modal },
  { path: '/ModalWarning', component: ModalWarning },
  { path: '/ModalInput', component: ModalInput },
  { path: '/ModalOperate', component: ModalOperate },
  { path: '/Progress', component: Progress },
  { path: '/Toast', component: Toast },

  /**
   * 手势
   */
  { path: '/PullToRefresh', component: PullToRefresh },
  { path: '/PullToRefreshListView', component: PullToRefreshListView },
  { path: '/SwipeAction', component: SwipeAction },

  /**
   * 组合
   */
  { path: '/ListView', component: ListView },
  { path: '/ListViewBody', component: ListViewBody },
  { path: '/ListViewSticky', component: ListViewSticky },
  { path: '/ListViewStickyIndex', component: ListViewStickyIndex },
  { path: '/Result', component: Result },

  /**
   * 首页 注意：根必须放在最后一个
   */
  { path: '/', name: 'home', component: Home }
]

export default Routes
