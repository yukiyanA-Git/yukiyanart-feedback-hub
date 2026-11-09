// yukiyanArt (ユキヤナート) カテゴリ区分定義 (ツール / 娯楽 / PCツール)
const categoryGroups = [
  {
    key: 'tools',
    title: '💡 思考・日常・ライフツール',
    icon: 'fa-brain',
    desc: 'カレンダー、チャット、思考ノート、健康メモなど毎日の生活と思考を快適にするツール'
  },
  {
    key: 'games_art',
    title: '🎮 ゲーム・アート・娯楽',
    icon: 'fa-gamepad',
    desc: 'パズル、防衛戦、領土合戦、塗り絵、3D美術室など楽しむコンテンツ'
  },
  {
    key: 'pc_utilities',
    title: '🖥️ PC常駐・システムユーティリティ',
    icon: 'fa-laptop',
    desc: 'マルチモニター、常駐ニュース、デバイス可視化、暗号化パスワード、オーディオ管理などのPC拡張ツール'
  }
];

// yukiyanArt (ユキヤナート) 全統合アプリマスターデータ (全16アプリ)
const appsData = [
  // --- 1. ツール (思考・日常・ライフツール) ---
  { 
    id: 'chronos', 
    name: 'Chronos', 
    subName: 'カレンダー＆付箋メモ',
    developer: 'yukiyanArt',
    categoryGroup: 'tools',
    category: 'スケジュール・生産性', 
    type: 'web', 
    webUrl: 'https://chronos-app-d149d.web.app',
    zipName: 'Chronos_v1.2_Setup.zip',
    exeName: 'Chronos.exe',
    protocolId: 'chronos',
    imageIcon: 'assets/icons/chronos.png',
    fallbackIcon: 'fa-calendar-days', 
    color: '#4F46E5',
    adTag: '✨ 付箋保存が強化された旗艦アプリ',
    desc: 'カレンダーとデスク付箋が美しく融合。毎日のスケジュールと思考をスマート管理。'
  },
  { 
    id: 'desk_chat', 
    name: 'Desk Chat', 
    subName: 'デスクチャット',
    developer: 'yukiyanArt',
    categoryGroup: 'tools',
    category: 'コミュニケーション', 
    type: 'web',
    webUrl: 'https://micro-office-chat-app.web.app',
    zipName: 'DeskChat_v1.0_Setup.zip',
    exeName: 'DeskChat.exe',
    protocolId: 'desk_chat',
    imageIcon: 'assets/icons/desk_chat.png',
    fallbackIcon: 'fa-comments', 
    color: '#059669',
    adTag: '💬 デスク作業を邪魔しない快適チャット',
    desc: 'デスク上で快適に使えるクイックコミュニケーションツール'
  },
  { 
    id: 'strategy_note', 
    name: 'STRATEGYNOTE', 
    subName: '戦略思考・マインドマップメモ',
    developer: 'yukiyanArt',
    categoryGroup: 'tools',
    category: 'アイディア・思考整理', 
    type: 'web',
    webUrl: 'https://strategy-notebook-app.web.app', 
    zipName: 'STRATEGYNOTE_v1.0_Setup.zip',
    exeName: 'STRATEGYNOTE.exe',
    protocolId: 'strategy_note',
    imageIcon: 'assets/icons/strategy_note.jpg',
    fallbackIcon: 'fa-lightbulb', 
    color: '#8B5CF6',
    adTag: '💡 アイデアと思考を視覚化するノート',
    desc: '戦略的な思考整理とマインドマップ風ノート作成Webアプリ'
  },
  { 
    id: 'karada_note', 
    name: 'からだの違和感ノート', 
    subName: '40代からのからだメモ＆不調ログ',
    developer: 'yukiyanArt',
    categoryGroup: 'tools',
    category: 'ヘルスケア・日常記録', 
    type: 'web',
    webUrl: 'https://karada-iwakan-note.web.app',
    zipName: 'KaradaNote_v1.0_Setup.zip',
    exeName: 'KaradaNote.exe',
    protocolId: 'karada_note',
    imageIcon: 'assets/icons/karada_note.jpg',
    fallbackIcon: 'fa-heart-pulse', 
    color: '#588B73',
    adTag: '🩺 違和感メモ＆医師提示用カルテ',
    desc: '40代からのなんとなく気になる不調・違和感をサッと記録。血圧手帳や受診時の医師提示カルテ、匿名共感タイムラインを備えた健康管理Webアプリ'
  },
  { 
    id: 'sukemachi', 
    name: 'スケマチ', 
    subName: 'スケジュールマッチング（ログイン不要・URL共有）',
    developer: 'yukiyanArt',
    categoryGroup: 'tools',
    category: 'スケジュール・調整ツール', 
    type: 'web',
    webUrl: 'https://sukemachi.web.app',
    zipName: 'Sukemachi_v1.0_Setup.zip',
    exeName: 'Sukemachi.exe',
    protocolId: 'sukemachi',
    imageIcon: 'assets/icons/sukemachi.jpg',
    fallbackIcon: 'fa-calendar-check', 
    color: '#4F46E5',
    adTag: '📅 ログイン不要！URLシェアで候補マッピング',
    desc: 'ログイン不要で候補日時を設定・URL共有可能！参加者の回答をリアルタイムに自動マッピングし、最適日程を色分け表示するスケジュール調整Webアプリ'
  },

  // --- 2. 娯楽 (ゲーム・アート・娯楽) ---
  { 
    id: 'numpre_shift', 
    name: '動くナンプレ', 
    subName: 'スライド×数独 脳トレパズル (NumPre Shift)',
    developer: 'yukiyanArt',
    categoryGroup: 'games_art',
    category: 'ゲーム・パズル', 
    type: 'web',
    webUrl: 'https://numpre-shift.web.app', 
    zipName: 'NumPreShift_v1.0_Setup.zip',
    exeName: 'NumPreShift.exe',
    protocolId: 'numpre_shift',
    imageIcon: 'assets/icons/numpre_shift.png',
    fallbackIcon: 'fa-cubes', 
    color: '#F59E0B',
    adTag: '🎮 オンライン対戦＆脳トレパズル',
    desc: '3x3の数字ブロックを動かして解き明かす、新感覚のオンライン対戦＆脳トレ数独Webゲーム'
  },
  { 
    id: 'hex_bastion', 
    name: 'HEX BASTION', 
    subName: '六角形グリッド・防衛戦略ゲーム',
    developer: 'yukiyanArt',
    categoryGroup: 'games_art',
    category: 'ゲーム・戦略タワーディフェンス', 
    type: 'web',
    webUrl: 'https://hex-bastion-app.web.app',
    zipName: 'HEXBASTION_v1.0_Setup.zip',
    exeName: 'HEXBASTION.exe',
    protocolId: 'hex_bastion',
    imageIcon: 'assets/icons/hex_bastion.jpg',
    fallbackIcon: 'fa-chess-board', 
    color: '#EF4444',
    adTag: '⚔️ 六角形盤面の本格防衛戦',
    desc: 'ヘックス（六角形）盤面で拠点を防衛・攻略する本格タクティカル戦略ゲーム'
  },
  { 
    id: 'tokyo_gassen', 
    name: '東京合戦', 
    subName: '東京都全53市区町村 開拓×合戦シミュレーション',
    developer: 'yukiyanArt',
    categoryGroup: 'games_art',
    category: 'シミュレーション・領土戦略', 
    type: 'web',
    webUrl: 'https://tokyo-gassen-app.web.app',
    zipName: 'TokyoGassen_v1.0_Setup.zip',
    exeName: 'TokyoGassen.exe',
    protocolId: 'tokyo_gassen',
    imageIcon: 'assets/icons/tokyo_gassen.png',
    fallbackIcon: 'fa-chess-king', 
    color: '#DC2626',
    adTag: '⚔️ 東京都全53市区町村 開拓×合戦',
    desc: '東京都全53市区町村どこからでも旗揚げ可能！開拓内政、特産品外交、レトロFF風3v3コマンド合戦で東京統一を目指す本格戦略Webゲーム'
  },
  { 
    id: 'flower_coloring', 
    name: '花と絵', 
    subName: 'Flower Growing Coloring App',
    developer: 'yukiyanArt',
    categoryGroup: 'games_art',
    category: 'アート・育成・リラックス', 
    type: 'web', 
    webUrl: 'https://hana-to-e-app.web.app',
    zipName: 'FlowerColoring_v1.0_Setup.zip',
    exeName: 'FlowerColoring.exe',
    protocolId: 'flower_coloring',
    imageIcon: 'assets/icons/flower_coloring.png',
    fallbackIcon: 'fa-seedling', 
    color: '#10B981',
    adTag: '🌸 育成×塗り絵の癒やしアート',
    desc: '温室で四季の花を育て、花弁から天然インクを調合して水彩・混色塗り絵を楽しむ癒やしのアトリエWebアプリ'
  },
  { 
    id: 'aura_gallery', 
    name: 'AURAGALLERY', 
    subName: 'デジタルアート美術室',
    developer: 'yukiyanArt',
    categoryGroup: 'games_art',
    category: 'アート・バーチャルギャラリー', 
    type: 'web',
    webUrl: 'https://aura-gallery-app.web.app', 
    zipName: 'AURAGALLERY_v1.0_Setup.zip',
    exeName: 'AURAGALLERY.exe',
    protocolId: 'aura_gallery',
    imageIcon: 'assets/icons/aura_gallery.jpg',
    fallbackIcon: 'fa-palette', 
    color: '#EC4899',
    adTag: '🖼️ 3D空間で楽しむオンライン美術室',
    desc: 'デジタルアート作品をバーチャル展示・鑑賞できるオンライン美術室Webアプリ'
  },

  // --- 3. PCツール (PC常駐・システムユーティリティ) ---
  { 
    id: 'login_manager', 
    name: 'LoginManager', 
    subName: 'ログイン＆パスワード管理',
    developer: 'yukiyanArt',
    categoryGroup: 'pc_utilities',
    category: 'セキュリティ・管理', 
    type: 'desktop',
    webUrl: null,
    zipName: 'LoginManager_v1.1_Setup.zip',
    exeName: 'LoginManager.exe',
    protocolId: 'login_manager',
    imageIcon: 'assets/icons/pass_manager.png',
    fallbackIcon: 'fa-lock', 
    color: '#D97706',
    adTag: '🔐 ローカル暗号化のパスワード保管庫',
    desc: '安全なログイン情報管理とパスワード保存を行える暗号化セキュリティツール'
  },
  { 
    id: 'widget_de_news', 
    name: 'widgetでnews', 
    subName: 'デスクトップ常駐ニュース＆雨雲・PCモニター',
    developer: 'yukiyanArt',
    categoryGroup: 'pc_utilities',
    category: 'ニュース・防災・PC管理', 
    type: 'desktop',
    webUrl: null,
    zipName: 'widget_de_news_v1.5_Setup.zip',
    exeName: 'widget_de_news.exe',
    protocolId: 'widget_de_news',
    imageIcon: 'assets/icons/widget_de_news.png',
    fallbackIcon: 'fa-newspaper', 
    color: '#10B981',
    adTag: '🌧️ 雨雲レーダー＆PCモニター常駐',
    desc: '画面端に常駐し、各種ニュース・雨雲レーダー・アメダス・PCモニター（CPU/RAM/NET/TopApp）を可視化するスマートウィジェット'
  },
  { 
    id: 'input_nexus', 
    name: 'InputNexus', 
    subName: '入力デバイス・キーバインド統合管理',
    developer: 'yukiyanArt',
    categoryGroup: 'pc_utilities',
    category: 'ユーティリティ・ゲームツール', 
    type: 'desktop',
    webUrl: null,
    zipName: 'InputNexus_v1.0_Setup.zip',
    exeName: 'InputNexus.exe',
    protocolId: 'input_nexus',
    imageIcon: 'assets/icons/input_nexus.jpg',
    fallbackIcon: 'fa-gamepad', 
    color: '#6366F1',
    adTag: '🛡️ PnP物理停止＆サイバーベクターHUD',
    desc: 'ゲームパッド・キーボード・左手デバイス・マウス等を識別し、OSレベルでの物理無効化/停止切替やミニHUD・リアルタイム発光・効果音を備えたマルチ入力マネージャー'
  },
  { 
    id: 'sub_monitor_manager', 
    name: 'SubMonitorManager', 
    subName: 'マルチモニター仮想画面管理',
    developer: 'yukiyanArt',
    categoryGroup: 'pc_utilities',
    category: 'ユーティリティ・PC管理', 
    type: 'desktop',
    webUrl: null,
    zipName: 'SubMonitorManager_v1.0_Setup.zip',
    exeName: 'SubMonitorManager.exe',
    protocolId: 'sub_monitor_manager',
    imageIcon: 'assets/icons/sub_monitor_manager.png',
    fallbackIcon: 'fa-desktop', 
    color: '#0284C7',
    adTag: '🧲 マグネット吸着スナップ＆常駐SubDock',
    desc: 'サブモニター最下部に常駐するSubDock、自由比率ゾーン分割、マグネット吸着スナップ、4大内蔵ウィジェット（PCモニター・クリップボード等）を備えた画面整理ユーティリティ'
  },
  { 
    id: 'audio_dock', 
    name: 'AudioDock', 
    subName: 'オーディオ＆マイク ワンクリック管理ドック',
    developer: 'yukiyanArt',
    categoryGroup: 'pc_utilities',
    category: 'ユーティリティ・PC管理', 
    type: 'desktop',
    webUrl: null,
    zipName: 'AudioDock_v1.0.0_win-x64.zip',
    exeName: 'AudioDock.exe',
    protocolId: 'audio_dock',
    imageIcon: 'assets/icons/audio_dock.png',
    fallbackIcon: 'fa-headphones', 
    color: '#38BDF8',
    adTag: '🎙️ リアルタイム話者分離＆高精度文字起こし',
    desc: 'ワンクリック・マイクミュートや個別音量調整に加え、リアルタイム話者分離（自分・相手A/B/C）カラー色分け＆全文自動記録対応の次世代常駐オーディオドック'
  },
  { 
    id: 'cccc', 
    name: 'CCCC', 
    subName: 'Clean・Compact・Care・Color',
    developer: 'yukiyanArt',
    categoryGroup: 'pc_utilities',
    category: 'PC最適化・ファイル整理', 
    type: 'desktop',
    webUrl: null,
    zipName: 'CCCC_v1.0_Setup.zip',
    exeName: 'CCCC.exe',
    protocolId: 'cccc',
    imageIcon: 'assets/icons/cccc.png',
    fallbackIcon: 'fa-broom', 
    color: '#38BDF8',
    adTag: '🧹 不要フォルダ診断・重複整理＆安心保護',
    desc: '「掃除して整頓しケアをして色を添える」不要な孤児フォルダ正体診断、ハッシュ重複ファイル整理、一時キャッシュ削除、安心の復元タイムラインを備えたデスクトップPCオーガナイザー'
  }
];

// 自社クロスプロモーション広告スライドラインナップ (全自社アプリ自動スライダー)
const adSlidesData = [
  {
    id: 'cccc_ad',
    tag: '🧹 CLEAN & CARE PC UTILITY',
    title: 'CCCC (Clean・Compact・Care・Color)',
    desc: '「掃除して整頓しケアをして色を添える」不要フォルダ診断、重複整理、キャッシュ削除、復元タイムライン完備のPC整理アプリ。',
    targetAppId: 'cccc',
    icon: 'fa-broom',
    color: '#38BDF8',
    imageIcon: 'assets/icons/cccc.png'
  },
  {
    id: 'sukemachi_ad',
    tag: '📅 SCHEDULE MATCHING',
    title: 'スケマチ (Sukemachi)',
    desc: 'ログイン不要・URL共有で日程調整！回答をリアルタイム自動マッピングして最適日を一発判定。',
    targetAppId: 'sukemachi',
    icon: 'fa-calendar-check',
    color: '#4F46E5',
    imageIcon: 'assets/icons/sukemachi.jpg'
  },
  {
    id: 'karada_note_ad',
    tag: '🩺 HEALTH & BODY NOTE',
    title: 'からだの違和感ノート (Karada Note)',
    desc: '日常の小さな違和感を3秒クイック記録。受診時に医師へ提示できるスマートカルテWebアプリ。',
    targetAppId: 'karada_note',
    icon: 'fa-heart-pulse',
    color: '#588B73',
    imageIcon: 'assets/icons/karada_note.jpg'
  },
  {
    id: 'audio_dock_ad',
    tag: '🎧 PC AUDIO UTILITY',
    title: 'AudioDock (オーディオドック)',
    desc: '再生デバイス切替＆マイク一括ミュートを1タップで。快適なPC音響常駐ウィジェット。',
    targetAppId: 'audio_dock',
    icon: 'fa-headphones',
    color: '#38BDF8',
    imageIcon: 'assets/icons/audio_dock.png'
  },
  {
    id: 'flower_coloring_ad',
    tag: '🌸 FLOWER & ART RELEASE',
    title: '花と絵 (Flower Growing Coloring App)',
    desc: 'お花を育てて自分だけの色彩で満たす。心やすらぐ育成＆デジタルぬりえWebアプリ。',
    targetAppId: 'flower_coloring',
    icon: 'fa-seedling',
    color: '#EC4899',
    imageIcon: 'assets/icons/flower_coloring.png'
  },
  {
    id: 'tokyo_gassen_ad',
    tag: '⚔️ TERRITORY STRATEGY GAME',
    title: '東京合戦 (Tokyo Territory Game)',
    desc: '首都・東京のエリアを賭けた本格陣取り頭脳戦！知識と戦術で領域を制覇せよ。',
    targetAppId: 'tokyo_gassen',
    icon: 'fa-chess-king',
    color: '#DC2626',
    imageIcon: 'assets/icons/tokyo_gassen.png'
  },
  {
    id: 'numpre_shift_ad',
    tag: '🎮 WEB GAME RELEASE',
    title: '動くナンプレ (NumPre Shift)',
    desc: '数字ブロックを可動させて解く！オンラインランキング対応の新感覚スライド数独パズル。',
    targetAppId: 'numpre_shift',
    icon: 'fa-cubes',
    color: '#F59E0B',
    imageIcon: 'assets/icons/numpre_shift.png'
  },
  {
    id: 'hex_bastion_ad',
    tag: '⚔️ TACTICAL STRATEGY GAME',
    title: 'HEX BASTION (ヘックスバスティオン)',
    desc: 'ヘックス盤面で繰り広げられる防衛戦。頭脳を駆使して拠点を守り抜く本格タクティカルゲーム。',
    targetAppId: 'hex_bastion',
    icon: 'fa-chess-board',
    color: '#EF4444',
    imageIcon: 'assets/icons/hex_bastion.jpg'
  },
  {
    id: 'widget_de_news_ad',
    tag: '🌧️ DESKTOP WIDGET',
    title: 'widgetでnews',
    desc: '画面端にすっと馴染む。リアルタイム雨雲レーダー・アメダス・ニュース・PCモニター。',
    targetAppId: 'widget_de_news',
    icon: 'fa-newspaper',
    color: '#10B981',
    imageIcon: 'assets/icons/widget_de_news.png'
  },
  {
    id: 'input_nexus_ad',
    tag: '🎮 DEVICE CONTROLLER',
    title: 'InputNexus (インプットネクサス)',
    desc: 'ゲームパッドやキーボードのリアルタイム入力可視化＆コントローラーキーバインド管理。',
    targetAppId: 'input_nexus',
    icon: 'fa-gamepad',
    color: '#6366F1',
    imageIcon: 'assets/icons/input_nexus.jpg'
  },
  {
    id: 'sub_monitor_ad',
    tag: '🖥️ MULTI MONITOR UTILITY',
    title: 'SubMonitorManager',
    desc: 'マルチモニターの配置や仮想画面切替をショートカット一発でスマート管理。',
    targetAppId: 'sub_monitor_manager',
    icon: 'fa-desktop',
    color: '#0284C7',
    imageIcon: 'assets/icons/sub_monitor_manager.png'
  },
  {
    id: 'chronos_ad',
    tag: '⏱️ FLAGSHIP APP',
    title: 'Chronos (クロノス)',
    desc: 'カレンダーとデスク付箋が美しく融合。毎日のスケジュールと思考をスマート管理。',
    targetAppId: 'chronos',
    icon: 'fa-calendar-days',
    color: '#4F46E5',
    imageIcon: 'assets/icons/chronos.png'
  },
  {
    id: 'aura_gallery_ad',
    tag: '🖼️ 3D VIRTUAL GALLERY',
    title: 'AURAGALLERY (オーラギャラリー)',
    desc: '作品を重厚な額縁と光彩の3D空間で鑑賞。デジタルアートのためのオンライン美術室。',
    targetAppId: 'aura_gallery',
    icon: 'fa-palette',
    color: '#EC4899',
    imageIcon: 'assets/icons/aura_gallery.jpg'
  },
  {
    id: 'login_manager_ad',
    tag: '🔐 SECURITY & PASSWORDS',
    title: 'LoginManager (ログインマネージャー)',
    desc: '大切なアカウント＆パスワードを安心のローカル暗号化保存。ワンクリック快適ログイン。',
    targetAppId: 'login_manager',
    icon: 'fa-lock',
    color: '#D97706',
    imageIcon: 'assets/icons/pass_manager.png'
  },
  {
    id: 'desk_chat_ad',
    tag: '💬 DESK COMMUNICATION',
    title: 'Desk Chat (デスクチャット)',
    desc: '作業を邪魔しないコンパクトなデスクチャット。即座にメッセージや共有が可能。',
    targetAppId: 'desk_chat',
    icon: 'fa-comments',
    color: '#059669',
    imageIcon: 'assets/icons/desk_chat.png'
  },
  {
    id: 'strategy_note_ad',
    tag: '💡 MIND MAP & STRATEGY',
    title: 'STRATEGYNOTE (戦略ノート)',
    desc: 'アイディアの断片をマインドマップ風につなぐ。思考をグラフィカルに可視化するWebノート。',
    targetAppId: 'strategy_note',
    icon: 'fa-lightbulb',
    color: '#8B5CF6',
    imageIcon: 'assets/icons/strategy_note.jpg'
  }
];

// 公式管理者ホワイトリスト
const ADMIN_WHITELIST = [
  'yukiyana1983@gmail.com',
  'mabouslim@gmail.com'
];

// 初期サンプル投稿データ
let postsData = [
  {
    id: 1,
    appId: 'chronos',
    category: 'bug',
    title: '付箋メモの文字サイズ変更が再起動でリセットされる',
    content: 'デスク上に配置した付箋メモのフォントサイズを大きく設定しても、Chronosを再起動するとデフォルトに戻ってしまいます。保存されるようにしてほしいです。',
    date: '2026-08-26 14:30',
    replies: [
      { id: 101, author: 'yukiyanArt 公式', isAdmin: true, text: 'ご報告ありがとうございます！付箋のフォントサイズ保存処理の不具合を確認いたしました。次回の更新（Ver 1.2.1）で修正いたします！', date: '2026-08-26 16:10' }
    ]
  },
  {
    id: 2,
    appId: 'widget_de_news',
    category: 'feature',
    title: '雨雲レーダーのズーム範囲のプリセット選択希望',
    content: '現在地を中心に市区・周辺・詳細のワンタッチ切替が便利です。次回起動時にもズーム状態が保存されると助かります！',
    date: '2026-09-10 11:20',
    replies: [
      { id: 102, author: 'yukiyanArt 公式', isAdmin: true, text: 'フィードバックありがとうございます！次回のアップデートでズーム状態の自動記憶機能を反映いたします！', date: '2026-09-10 14:00' }
    ]
  },
  {
    id: 3,
    appId: 'numpre_shift',
    category: 'feature',
    title: 'オンラインランキングのデイリー最高スコア表示',
    content: '全国のプレイヤーとタイムを競うランキング機能が楽しいです。今日の自分のベストタイムが記録されると励みになります！',
    date: '2026-09-08 19:40',
    replies: [
      { id: 103, author: 'yukiyanArt 公式', isAdmin: true, text: 'ご意見ありがとうございます！デイリーランキングおよび自己ベスト記録機能を実装予定です！', date: '2026-09-09 10:15' }
    ]
  }
];

// 初期公式お知らせデータ (全16アプリ リリース履歴)
let newsData = [
  {
    id: 107,
    appId: 'cccc',
    tag: 'update',
    title: '【CCCC】不要フォルダ診断・重複整理＆PCメンテナンス PC版リリース',
    content: '「掃除して整頓しケアをして色を添える」をコンセプトに、不要な孤児フォルダ正体診断、ハッシュ重複ファイル整理、一時キャッシュ削除、安心の復元タイムライン、気分で変えられるパステルカラーテーマを備えたWindowsデスクトップPCオーガナイザーを公式リリースいたしました。',
    date: '2026-10-21'
  },
  {
    id: 104,
    appId: 'input_nexus',
    tag: 'update',
    title: '【InputNexus】大型アップデート（Windows PnP物理停止＆サイバーベクターHUD機能追加）',
    content: 'ゲームパッド、キーボード、左手デバイス等の個別認識に加え、Windows OSレベルでの物理無効化/停止切替、誤操作防止セーフティ、緊急復旧ショートカット、サイバーベクターシルエット自動発光、ミニHUDモード等の大幅な機能拡張を実施いたしました。',
    date: '2026-10-14'
  },
  {
    id: 105,
    appId: 'sub_monitor_manager',
    tag: 'update',
    title: '【SubMonitorManager】大型アップデート（マグネット吸着スナップ＆常駐SubDock機能強化）',
    content: 'サブモニター最下部に常駐するスタイリッシュMini Dock「SubDock」、ドラッグ＆マグネット吸着スナップ（FancyZones風）、各ゾーン自由比率調整、4大内蔵ウィジェット（PCモニター・クリップボード履歴・ランチャー・付箋メモ）を追加・刷新いたしました。',
    date: '2026-10-14'
  },
  {
    id: 106,
    appId: 'audio_dock',
    tag: 'update',
    title: '【AudioDock】大型アップデート（リアルタイム話者分離＆高精度自動文字起こし機能追加）',
    content: '常駐ウィジェットでのワンクリック・マイクミュートや個別音量調整に加え、マイク（自分）と相手音声（相手A/B/C）を色分けでリアルタイム識別・記録する「話者分離・文字起こしウィンドウ」機能を新搭載いたしました。',
    date: '2026-10-14'
  },
  {
    id: 103,
    appId: 'sukemachi',
    tag: 'update',
    title: '【スケマチ】ログイン不要・URL共有のスケジュール調整Webアプリ Web版リリース',
    content: 'ログイン・会員登録一切不要で即座に候補日時を設定・URL共有可能！参加者の回答をリアルタイムに自動マッピングし、最適日程を色分け表示するスケジュール調整Webアプリを公式リリースいたしました。',
    date: '2026-10-09'
  },
  {
    id: 101,
    appId: 'chronos',
    tag: 'update',
    title: '【Chronos】大規模アップデート（カレンダー・デジタル付箋連動＆新機能追加）',
    content: 'タイムブロック型カレンダーとデスク付箋メモの相互連携強化、UI表示カスタマイズおよび各種新機能の追加・拡張を実施いたしました。',
    date: '2026-10-08'
  },
  {
    id: 102,
    appId: 'widget_de_news',
    tag: 'update',
    title: '【widgetでnews】大型アップデート（常駐ニュース・雨雲レーダー・PCモニター機能拡張）',
    content: '画面端常駐型ウィジェットのニュース配信取得、気象・アメダス情報表示、およびPCリソースモニター機能の大幅な機能追加・カスタマイズ拡張を実施いたしました。',
    date: '2026-10-08'
  },
  {
    id: 1,
    appId: 'karada_note',
    tag: 'update',
    title: '【からだの違和感ノート】40代からの不調メモ＆医師提示カルテ Web版リリース',
    content: '日常の小さな違和感を3秒クイック記録し、血圧手帳や受診時の医師提示カルテ、匿名共感タイムラインを備えた健康管理Webアプリを公式リリースいたしました。',
    date: '2026-10-07'
  },
  {
    id: 2,
    appId: 'audio_dock',
    tag: 'update',
    title: '【AudioDock】オーディオ＆マイク ワンクリック管理ドック PC版リリース',
    content: '再生デバイス・マイク音量・アプリ個別音量のワンクリック切替＆一括ミュートを常駐操作できるPCオーディオドックをリリースいたしました。',
    date: '2026-10-02'
  },
  {
    id: 3,
    appId: 'sub_monitor_manager',
    tag: 'update',
    title: '【SubMonitorManager】マルチモニター仮想画面管理 PC版リリース',
    content: 'サブモニターの配置・レイアウト・ショートカット切替を効率化するマルチモニター管理ツールのPC版をリリースいたしました。',
    date: '2026-09-28'
  },
  {
    id: 4,
    appId: 'input_nexus',
    tag: 'update',
    title: '【InputNexus】入力デバイス・キーバインド統合管理 PC版リリース',
    content: 'キーボード・マウス・コントローラーのリアルタイム入力可視化＆割り当て管理ツールのPC版をリリースいたしました。',
    date: '2026-09-20'
  },
  {
    id: 5,
    appId: 'widget_de_news',
    tag: 'update',
    title: '【widgetでnews】常駐ニュース＆雨雲・PCモニター PC版リリース',
    content: '画面端に常駐し、各種ニュース・雨雲レーダー・PCモニターを可視化するスマートウィジェットをリリースいたしました。',
    date: '2026-09-15'
  },
  {
    id: 6,
    appId: 'login_manager',
    tag: 'update',
    title: '【LoginManager】ログイン＆パスワード管理 PC版リリース',
    content: 'ローカル暗号化対応の安全なログイン情報管理とパスワード保存を行えるセキュリティツールのPC版をリリースいたしました。',
    date: '2026-09-12'
  },
  {
    id: 7,
    appId: 'aura_gallery',
    tag: 'update',
    title: '【AURAGALLERY】デジタルアート3D美術室 Web版リリース',
    content: 'デジタルアート作品を重厚な額縁と3D空間で鑑賞できるオンライン美術室Webアプリをリリースいたしました。',
    date: '2026-09-05'
  },
  {
    id: 8,
    appId: 'flower_coloring',
    tag: 'update',
    title: '【花と絵】お花育成×水彩塗り絵アトリエ Web版リリース',
    content: '温室で四季の花を育て、花弁から天然インクを調合して水彩・混色塗り絵を楽しむ癒やしのアトリエWebアプリをリリースいたしました。',
    date: '2026-08-25'
  },
  {
    id: 9,
    appId: 'tokyo_gassen',
    tag: 'update',
    title: '【東京合戦】東京都全53市区町村 開拓×合戦 Web版リリース',
    content: '東京都全53市区町村どこからでも旗揚げ可能！内政開拓とレトロFF風3v3コマンドバトルで東京統一を目指す本格戦略Webゲームをリリースいたしました。',
    date: '2026-08-15'
  },
  {
    id: 10,
    appId: 'hex_bastion',
    tag: 'update',
    title: '【HEX BASTION】六角形グリッド・防衛戦略ゲーム Web版リリース',
    content: 'ヘックス（六角形）盤面で拠点を防衛・攻略する本格タクティカル戦略ゲームのWeb版をリリースいたしました。',
    date: '2026-08-05'
  },
  {
    id: 11,
    appId: 'numpre_shift',
    tag: 'update',
    title: '【動くナンプレ】スライド×数独 脳トレパズル Web版リリース',
    content: '3x3数字ブロックをスライドさせて解き明かす新感覚のオンライン対戦＆脳トレパズルWebゲームをリリースいたしました。',
    date: '2026-07-25'
  },
  {
    id: 12,
    appId: 'strategy_note',
    tag: 'update',
    title: '【STRATEGYNOTE】戦略思考・マインドマップメモ Web版リリース',
    content: '戦略的な思考整理とマインドマップ風ノート作成Webアプリをリリースいたしました。',
    date: '2026-07-15'
  },
  {
    id: 13,
    appId: 'desk_chat',
    tag: 'update',
    title: '【Desk Chat】デスクチャット Web版リリース',
    content: 'デスク作業中も画面端でスムーズにコミュニケーションができる簡易チャットWebアプリをリリースいたしました。',
    date: '2026-07-05'
  },
  {
    id: 14,
    appId: 'chronos',
    tag: 'update',
    title: '【Chronos】カレンダー＆付箋メモ Web版リリース',
    content: 'カレンダーとデスク付箋が美しく融合したスケジュール＆思考管理ツールのWeb版を公式リリースいたしました。',
    date: '2026-06-15'
  }
];

// 管理者通知データ
let notifications = [
  { id: 1, title: '【widgetでnews】「雨雲レーダーのズーム範囲...」投稿あり', time: '11:20' }
];

// App State
let state = {
  currentAppId: 'chronos',
  sourceAppId: null,
  isAdmin: false,
  currentAdminEmail: null,
  boardFilter: 'all',
  currentTab: 'portal',
  currentAdIndex: 0,
  adIntervalTimer: null
};

// Initialize Application & Firebase Auth Listener
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  let appIdParam = urlParams.get('app_id');
  if (appIdParam) {
    appIdParam = appIdParam.toLowerCase();
    if (appIdParam === 'tokyo_conquest') appIdParam = 'tokyo_gassen';
    if (appIdParam === 'florafill' || appIdParam === 'hana_to_e') appIdParam = 'flower_coloring';
    if (appIdParam === 'cleansense' || appIdParam === 'smart_pc_organizer') appIdParam = 'cccc';
  }
  
  if (appIdParam && appsData.some(a => a.id === appIdParam)) {
    state.currentAppId = appIdParam;
    state.sourceAppId = appIdParam;
    switchMainTab('apps');
  } else {
    switchMainTab('portal');
  }

  // Firebase Real Auth Listener
  if (typeof auth !== 'undefined') {
    auth.onAuthStateChanged((user) => {
      if (user && user.email && ADMIN_WHITELIST.includes(user.email)) {
        state.isAdmin = true;
        state.currentAdminEmail = user.email;
        localStorage.setItem('yukiyanArt_admin_email', user.email);
        updateAdminUI();
        renderBoard();
      } else if (user) {
        state.isAdmin = false;
        state.currentAdminEmail = null;
        updateAdminUI();
      }
    });
  }

  // Restore Admin Session from localStorage as fallback
  const savedAdminEmail = localStorage.getItem('yukiyanArt_admin_email');
  if (savedAdminEmail && ADMIN_WHITELIST.includes(savedAdminEmail)) {
    state.isAdmin = true;
    state.currentAdminEmail = savedAdminEmail;
  }

  handleSplashScreen();
  updateAdminUI();
  renderPortalGrid();
  renderAppsGrid();
  renderBoard();
  renderNewsList();
  populateNewsAppDropdown();
  renderNotifications();

  // Initialize Auto Ad Slider
  initAdSlider();
});

// Splash Screen Fade-out (1.2 seconds)
function handleSplashScreen() {
  const splash = document.getElementById('splashScreen');
  if (splash) {
    setTimeout(() => {
      splash.classList.add('fade-out');
    }, 1200);
  }
}

// ----------------------------------------------------
// MAIN TAB SWITCHING
// ----------------------------------------------------
function switchMainTab(tab) {
  state.currentTab = tab;
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(sec => sec.classList.remove('active'));

  if (tab === 'portal') {
    document.getElementById('tabPortal').classList.add('active');
    document.getElementById('sectionPortal').classList.add('active');
  } else if (tab === 'apps') {
    document.getElementById('tabApps').classList.add('active');
    document.getElementById('sectionApps').classList.add('active');
  } else if (tab === 'news') {
    document.getElementById('tabNews').classList.add('active');
    document.getElementById('sectionNews').classList.add('active');
  }
}

// ----------------------------------------------------
// 1ページ目: ポータル・カテゴリ別（ツール / 娯楽 / PCツール）に分類レイアウト！
// ----------------------------------------------------
function renderPortalGrid() {
  const container = document.getElementById('portalAppsGrid');
  if (!container) return;
  container.innerHTML = '';

  categoryGroups.forEach(group => {
    const groupApps = appsData.filter(a => a.categoryGroup === group.key);
    if (groupApps.length === 0) return;

    const groupSection = document.createElement('div');
    groupSection.className = 'portal-category-section';

    const groupHeader = document.createElement('div');
    groupHeader.className = 'portal-category-header';
    groupHeader.innerHTML = `
      <div class="portal-category-title">
        <i class="fa-solid ${group.icon}"></i> ${group.title}
        <span class="portal-category-badge">${groupApps.length}作品</span>
      </div>
      <div class="portal-category-desc">${group.desc}</div>
    `;

    const subGrid = document.createElement('div');
    subGrid.className = 'portal-apps-grid-sub';

    groupApps.forEach(app => {
      const card = createPortalAppCard(app);
      subGrid.appendChild(card);
    });

    groupSection.appendChild(groupHeader);
    groupSection.appendChild(subGrid);
    container.appendChild(groupSection);
  });
}

function createPortalAppCard(app) {
  const card = document.createElement('div');
  card.className = 'portal-app-card';

  let iconContent = '';
  if (app.imageIcon) {
    iconContent = `<img src="${app.imageIcon}" class="app-real-img" alt="${app.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                   <div class="app-icon" style="background-color: ${app.color}; display:none;"><i class="fa-solid ${app.fallbackIcon}"></i></div>`;
  } else {
    iconContent = `<div class="app-icon" style="background-color: ${app.color};"><i class="fa-solid ${app.fallbackIcon}"></i></div>`;
  }

  let typeTag = app.type === 'web'
    ? `<span class="type-tag web"><i class="fa-solid fa-globe"></i> WEBアプリ型</span>`
    : `<span class="type-tag desktop"><i class="fa-solid fa-laptop"></i> PCアプリ (直接起動型)</span>`;

  let adTagHtml = app.adTag
    ? `<div style="font-size:0.75rem; font-weight:700; color:#4F46E5; background:#EEF2FF; padding:2px 8px; border-radius:6px; margin-top:2px; display:inline-block;">${app.adTag}</div>`
    : '';

  let actionButtons = '';
  let guideLink = '';

  if (app.type === 'web') {
    actionButtons = `
      <button class="btn-action-primary" onclick="launchWebApp('${app.id}')" style="width:100%;">
        <i class="fa-solid fa-rocket"></i> 🚀 Web版を起動 (ブラウザで遊ぶ)
      </button>
    `;
  } else {
    guideLink = `
      <a href="javascript:void(0)" onclick="openDownloadModal('${app.id}')" style="font-size:0.75rem; color:#0284C7; font-weight:600; text-decoration:none; margin-left:auto; display:inline-flex; align-items:center; gap:3px;" title="${app.name}の入手・手順案内">
        <i class="fa-solid fa-file-arrow-down"></i> 入手・手順
      </a>
    `;
    actionButtons = `
      <button class="btn-action-secondary" onclick="launchLocalAppProtocol('${app.id}')">
        <i class="fa-solid fa-play"></i> 💻 PCアプリを起動
      </button>
      <button class="btn-action-sub" onclick="openDownloadModal('${app.id}')">
        <i class="fa-solid fa-file-arrow-down"></i> 入手・手順
      </button>
    `;
  }

  card.innerHTML = `
    <div class="portal-card-header">
      <div class="app-icon-wrapper">
        ${iconContent}
      </div>
      <div class="portal-app-info">
        <div class="portal-app-name">
          ${app.name} ${typeTag}
          ${guideLink}
        </div>
        <div class="portal-app-subname">${app.subName}</div>
        ${adTagHtml}
        <div class="portal-app-desc">${app.desc}</div>
      </div>
    </div>
    <div class="portal-card-actions">
      ${actionButtons}
    </div>
  `;

  return card;
}

function launchWebApp(appId) {
  const app = appsData.find(a => a.id === appId);
  if (!app) return;
  if (app.webUrl && app.webUrl !== 'null') {
    showToast(`🚀 <b>「${app.name}」のWeb版を開きます...</b>`);
    window.open(app.webUrl, '_blank', 'noopener,noreferrer');
  } else {
    showToast(`🚀 <b>「${app.name}」のWeb版は準備中（または配信URL未設定）です。</b>`);
  }
}

function launchLocalAppProtocol(appId) {
  const app = appsData.find(a => a.id === appId);
  if (!app) return;
  const protocolId = app.protocolId || appId;
  const protocolUrl = `${protocolId}://open`;

  // 非表示iframe経由で安全に起動（画面のリダイレクト・離脱を防ぐ）
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = protocolUrl;
  document.body.appendChild(iframe);

  setTimeout(() => {
    if (document.body.contains(iframe)) {
      document.body.removeChild(iframe);
    }
  }, 2000);

  let appOpened = false;
  const onBlur = () => {
    appOpened = true;
  };
  window.addEventListener('blur', onBlur, { once: true });

  setTimeout(() => {
    window.removeEventListener('blur', onBlur);
    if (!appOpened) {
      showToast(`💻 <b>「${app.name}」が起動しない場合</b><br><a href="javascript:void(0)" onclick="openDownloadModal('${app.id}')" style="color:#818CF8; font-weight:bold; text-decoration:underline;">👉 「入手・手順」から ${app.exeName} を入手できます</a>`);
    } else {
      showToast(`💻 「${app.name}」の起動信号を送信しました。`);
    }
  }, 1200);
}

function openDownloadModal(appId) {
  const app = appsData.find(a => a.id === appId) || appsData[0];
  state.currentAppId = appId;
  
  document.getElementById('downloadModalAppName').textContent = `${app.name} (${app.subName})`;
  document.getElementById('downloadModalAppDesc').textContent = app.desc;
  
  const zipName = app.zipName || `${app.id}_setup.zip`;
  const launcherFile = app.type === 'web' ? `${app.name}を起動.bat` : (app.exeName || `${app.name}.exe`);

  const modalZipFileName = document.getElementById('modalZipFileName');
  if (modalZipFileName) modalZipFileName.textContent = zipName;

  const modalExeFileName = document.getElementById('modalExeFileName');
  if (modalExeFileName) modalExeFileName.textContent = launcherFile;

  const modalZipDownloadBtn = document.getElementById('modalZipDownloadBtn');
  if (modalZipDownloadBtn) {
    modalZipDownloadBtn.innerHTML = `<i class="fa-solid fa-download"></i> [${zipName}] を直接ダウンロード`;
    modalZipDownloadBtn.onclick = () => triggerDirectZipDownload(app.id);
  }
  
  const webUrlWrap = document.getElementById('modalWebUrlWrap');
  const webUrlText = document.getElementById('modalWebUrlText');

  if (app.webUrl) {
    webUrlWrap.style.display = 'block';
    webUrlText.textContent = app.webUrl;
  } else {
    webUrlWrap.style.display = 'none';
  }

  document.getElementById('downloadModalOverlay').classList.add('active');
}

function closeDownloadModal() {
  document.getElementById('downloadModalOverlay').classList.remove('active');
}

function triggerDirectZipDownload(targetAppId) {
  const appId = targetAppId || state.currentAppId;
  const app = appsData.find(a => a.id === appId) || appsData[0];
  const zipName = app.zipName || `${app.id}_setup.zip`;
  const zipUrl = `${window.location.origin}/downloads/${encodeURIComponent(zipName)}`;

  // バイナリZIPファイルを直接ブラウザ標準の別タブ・ダイレクトダウンロードで取得させる
  const link = document.createElement('a');
  link.href = zipUrl;
  link.download = zipName;
  link.target = '_blank';
  link.rel = 'noopener,noreferrer';
  document.body.appendChild(link);
  link.click();
  
  setTimeout(() => {
    if (document.body.contains(link)) {
      document.body.removeChild(link);
    }
  }, 1000);

  showToast(`📥 <b>「${app.name}」の公式ZIPパッケージ [${zipName}] のダウンロードを開始しました！</b>`);
  closeDownloadModal();
}

function copyModalWebUrl() {
  const text = document.getElementById('modalWebUrlText').textContent;
  navigator.clipboard.writeText(text).then(() => {
    showToast('📋 Web版アドレスをクリップボードにコピーしました！');
  });
}

// ----------------------------------------------------
// AUTO AD SLIDER LOGIC
// ----------------------------------------------------
function initAdSlider() {
  const track = document.getElementById('adSliderTrack');
  const dotsContainer = document.getElementById('sliderDotsContainer');
  if (!track || !dotsContainer) return;

  track.innerHTML = '';
  dotsContainer.innerHTML = '';

  adSlidesData.forEach((slide, idx) => {
    const slideCard = document.createElement('div');
    slideCard.className = 'ad-slide-card';
    slideCard.onclick = () => selectApp(slide.targetAppId);

    let iconHtml = slide.imageIcon
      ? `<img src="${slide.imageIcon}" style="width:58px; height:58px; border-radius:14px; object-fit:cover; box-shadow:0 4px 12px rgba(0,0,0,0.3);" />`
      : `<div class="ad-slide-icon-box" style="background-color: ${slide.color};"><i class="fa-solid ${slide.icon}"></i></div>`;

    slideCard.innerHTML = `
      <div class="ad-slide-content">
        ${iconHtml}
        <div class="ad-slide-text">
          <span class="ad-slide-tag">${slide.tag}</span>
          <span class="ad-slide-title">${slide.title}</span>
          <span class="ad-slide-desc">${slide.desc}</span>
        </div>
      </div>
      <div class="ad-slide-btn">
        詳細を見る <i class="fa-solid fa-arrow-right"></i>
      </div>
    `;
    track.appendChild(slideCard);

    const dot = document.createElement('div');
    dot.className = `dot ${idx === 0 ? 'active' : ''}`;
    dot.onclick = (e) => {
      e.stopPropagation();
      goToAdSlide(idx);
    };
    dotsContainer.appendChild(dot);
  });

  startAdAutoPlay();

  const container = document.getElementById('acrylicAdFrameContainer');
  if (container) {
    container.addEventListener('mouseenter', () => clearInterval(state.adIntervalTimer));
    container.addEventListener('mouseleave', () => startAdAutoPlay());
  }
}

function startAdAutoPlay() {
  clearInterval(state.adIntervalTimer);
  state.adIntervalTimer = setInterval(() => {
    moveAdSlide(1);
  }, 3500);
}

function moveAdSlide(direction) {
  let newIndex = state.currentAdIndex + direction;
  if (newIndex >= adSlidesData.length) newIndex = 0;
  if (newIndex < 0) newIndex = adSlidesData.length - 1;
  goToAdSlide(newIndex);
}

function goToAdSlide(index) {
  state.currentAdIndex = index;
  const track = document.getElementById('adSliderTrack');
  const dots = document.querySelectorAll('.slider-dots .dot');

  if (track) {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  dots.forEach((d, i) => {
    if (i === index) d.classList.add('active');
    else d.classList.remove('active');
  });
}

function triggerRealGoogleAuth() {
  if (typeof auth !== 'undefined' && typeof googleProvider !== 'undefined') {
    auth.signInWithPopup(googleProvider).then((result) => {
      const email = result.user.email;
      if (ADMIN_WHITELIST.includes(email)) {
        loginWithGoogleAccount(email);
      } else {
        alert(`認証エラー: アカウント「${email}」は yukiyanArt 管理者ホワイトリストに含まれていません。`);
        auth.signOut();
      }
    }).catch((error) => {
      console.warn("Popup blocked or closed, falling back to simulated auth:", error);
      loginWithGoogleAccount('yukiyana1983@gmail.com');
    });
  } else {
    loginWithGoogleAccount('yukiyana1983@gmail.com');
  }
}

function simulateDeepLink(appId) {
  state.sourceAppId = appId;
  if (appId) {
    state.currentAppId = appId;
  }
  switchMainTab('apps');
  renderAppsGrid();
  renderBoard();

  const msg = appId
    ? `「${getAppName(appId)}」のお問い合わせ窓口に着地しました。匿名投稿が可能です。`
    : '全アプリ一覧モードです。';
  
  showToast(msg);
}

function showToast(text, isAdminNotif = false) {
  let toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed; bottom: 20px; right: 20px;
    background: ${isAdminNotif ? '#DC2626' : '#334155'}; color: #fff;
    padding: 12px 20px; border-radius: 8px; font-size: 0.88rem; z-index: 2000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2); max-width: 340px; line-height: 1.4;
  `;
  toast.innerHTML = text;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4500);
}

function handleAdminAuthClick() {
  if (state.isAdmin) {
    if (confirm(`管理者 (${state.currentAdminEmail}) からログアウトしますか？`)) {
      if (typeof auth !== 'undefined') {
        auth.signOut();
      }
      state.isAdmin = false;
      state.currentAdminEmail = null;
      localStorage.removeItem('yukiyanArt_admin_email');
      updateAdminUI();
      renderBoard();
      showToast('管理者モードをログアウトしました。');
    }
  } else {
    document.getElementById('adminLoginModalOverlay').classList.add('active');
  }
}

function closeAdminLoginModal() {
  document.getElementById('adminLoginModalOverlay').classList.remove('active');
}

function loginWithGoogleAccount(selectedEmail) {
  if (ADMIN_WHITELIST.includes(selectedEmail)) {
    state.isAdmin = true;
    state.currentAdminEmail = selectedEmail;
    localStorage.setItem('yukiyanArt_admin_email', selectedEmail);
    closeAdminLoginModal();
    updateAdminUI();
    renderBoard();
    showToast(`👑 <b>Google ログイン認証成功！</b><br>管理者: ${selectedEmail}`, true);
  } else {
    alert(`エラー: ${selectedEmail} は管理者権限リストに含まれていません。`);
  }
}

function handleAdminEmailInputLogin(e) {
  e.preventDefault();
  const inputEmail = document.getElementById('adminEmailInput').value.trim();

  if (ADMIN_WHITELIST.includes(inputEmail)) {
    state.isAdmin = true;
    state.currentAdminEmail = inputEmail;
    localStorage.setItem('yukiyanArt_admin_email', inputEmail);
    closeAdminLoginModal();
    updateAdminUI();
    renderBoard();
    showToast(`👑 <b>管理者認証成功！</b><br>管理者: ${inputEmail}`, true);
  } else {
    alert(`認証失敗: アドレス「${inputEmail}」は管理者リストに登録されていません。`);
  }
}

function updateAdminUI() {
  const authBtn = document.getElementById('adminAuthBtn');
  const authBtnText = document.getElementById('adminAuthBtnText');
  const adminNewNewsBtn = document.getElementById('adminNewNewsBtn');
  const adminNotifBell = document.getElementById('adminNotifBell');

  if (state.isAdmin) {
    authBtn.classList.add('logged-in');
    authBtnText.innerHTML = `<i class="fa-solid fa-crown"></i> 管理者: ${state.currentAdminEmail} [ログアウト]`;
    adminNewNewsBtn.style.display = 'inline-flex';
    adminNotifBell.style.display = 'flex';
  } else {
    authBtn.classList.remove('logged-in');
    authBtnText.innerHTML = '<i class="fa-solid fa-user-shield"></i> 管理者ログイン';
    adminNewNewsBtn.style.display = 'none';
    adminNotifBell.style.display = 'none';
  }
}

function toggleNotifDropdown() {
  const dropdown = document.getElementById('notifDropdown');
  dropdown.classList.toggle('active');
}

function renderNotifications() {
  const countEl = document.getElementById('notifCount');
  const itemsContainer = document.getElementById('notifItems');

  countEl.textContent = notifications.length;
  itemsContainer.innerHTML = '';

  if (notifications.length === 0) {
    itemsContainer.innerHTML = `<div class="notif-empty">新着の要望はありません</div>`;
    return;
  }

  notifications.forEach(notif => {
    const div = document.createElement('div');
    div.className = 'notif-item';
    div.innerHTML = `
      <div class="notif-item-title">${escapeHtml(notif.title)}</div>
      <div class="notif-item-time">${notif.time}</div>
    `;
    itemsContainer.appendChild(div);
  });
}

function renderAppsGrid() {
  const grid = document.getElementById('appsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  appsData.forEach(app => {
    const card = document.createElement('div');
    const isSelected = app.id === state.currentAppId;
    const isSource = app.id === state.sourceAppId;

    card.className = `app-card ${isSelected ? 'selected' : ''} ${isSource ? 'highlight-source' : ''}`;
    card.onclick = () => selectApp(app.id);

    let sourceBadgeHtml = isSource
      ? `<div class="source-badge"><i class="fa-solid fa-arrow-down"></i> このアプリから移動</div>`
      : '';

    let iconContent = '';
    if (app.imageIcon) {
      iconContent = `<img src="${app.imageIcon}" class="app-real-img" alt="${app.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                     <div class="app-icon" style="background-color: ${app.color}; display:none;"><i class="fa-solid ${app.fallbackIcon}"></i></div>`;
    } else {
      iconContent = `<div class="app-icon" style="background-color: ${app.color};"><i class="fa-solid ${app.fallbackIcon}"></i></div>`;
    }

    card.innerHTML = `
      ${sourceBadgeHtml}
      <div class="app-icon-wrapper">
        ${iconContent}
      </div>
      <div class="app-name">${app.name}</div>
      <div class="app-subname">${app.subName}</div>
    `;

    grid.appendChild(card);
  });
}

function selectApp(appId) {
  state.currentAppId = appId;
  renderAppsGrid();
  renderBoard();
}

function renderBoard() {
  const selectedApp = appsData.find(a => a.id === state.currentAppId) || appsData[0];
  const appInfoContainer = document.getElementById('selectedAppInfo');
  
  let headerIconHtml = selectedApp.imageIcon
    ? `<img src="${selectedApp.imageIcon}" style="width: 48px; height: 48px; border-radius: 12px; object-fit: cover; box-shadow: 0 3px 8px rgba(0,0,0,0.15);" />`
    : `<div class="app-icon" style="background-color: ${selectedApp.color}; width: 48px; height: 48px; font-size: 1.3rem; margin: 0; border-radius: 12px;">
        <i class="fa-solid ${selectedApp.fallbackIcon}"></i>
       </div>`;

  let webUrlHtml = selectedApp.webUrl
    ? `<div style="margin-top: 4px; font-size: 0.8rem; color: #4F46E5;">
        <b>Web版アドレス:</b> <a href="${selectedApp.webUrl}" target="_blank" rel="noopener" style="color: #4338CA; text-decoration: underline;">${selectedApp.webUrl}</a>
       </div>`
    : '';

  appInfoContainer.innerHTML = `
    ${headerIconHtml}
    <div>
      <h3 style="font-size: 1.15rem; font-weight: 700;">${selectedApp.name} <span style="font-size:0.85rem; font-weight:normal; color:#64748B;">(${selectedApp.subName})</span></h3>
      <p class="sub-text">${selectedApp.desc}</p>
      ${webUrlHtml}
    </div>
  `;

  const postsList = document.getElementById('postsList');
  postsList.innerHTML = '';

  let filteredPosts = postsData.filter(p => p.appId === state.currentAppId);
  if (state.boardFilter !== 'all') {
    filteredPosts = filteredPosts.filter(p => p.category === state.boardFilter);
  }

  if (filteredPosts.length === 0) {
    postsList.innerHTML = `
      <div style="text-align: center; padding: 35px 20px; color: #94A3B8; background: #fff; border-radius: 12px; border: 1px dashed #CBD5E1;">
        <i class="fa-regular fa-comments" style="font-size: 2.2rem; margin-bottom: 10px; color: #CBD5E1;"></i>
        <p style="font-weight: 600;">「${selectedApp.name}」への書き込みはまだありません</p>
        <p style="font-size: 0.82rem; margin-top: 4px;">上の「このアプリに要望・報告を書く」ボタンから最初の投稿を送信できます。</p>
      </div>
    `;
    return;
  }

  filteredPosts.forEach(post => {
    const postCard = document.createElement('div');
    postCard.className = 'post-card';

    const catMap = {
      bug: { text: '🐛 修正要望', class: 'bug' },
      feature: { text: '💡 内容要望', class: 'feature' },
      other: { text: '💬 その他', class: 'other' }
    };
    const catInfo = catMap[post.category] || catMap.other;

    let repliesHtml = '';
    if (post.replies && post.replies.length > 0) {
      repliesHtml = `
        <div class="replies-container">
          ${post.replies.map(r => `
            <div class="reply-item">
              <div class="reply-author ${r.isAdmin ? 'admin-tag' : ''}">
                <i class="fa-solid ${r.isAdmin ? 'fa-crown' : 'fa-user'}"></i> ${r.author}
                <span style="font-size: 0.72rem; color: #94A3B8; font-weight: normal;">• ${r.date}</span>
              </div>
              <div class="reply-text">${r.text}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    let adminReplyInputHtml = '';
    if (state.isAdmin) {
      adminReplyInputHtml = `
        <div class="reply-input-box">
          <input type="text" id="replyInput_${post.id}" placeholder="yukiyanArt管理者として返信を入力..." />
          <button onclick="submitAdminReply(${post.id})">返信する</button>
        </div>
      `;
    }

    postCard.innerHTML = `
      <div class="post-meta">
        <span class="post-type-tag ${catInfo.class}">${catInfo.text}</span>
        <span class="post-date">${post.date}</span>
      </div>
      <div class="post-title">${escapeHtml(post.title)}</div>
      <div class="post-content">${escapeHtml(post.content)}</div>
      ${repliesHtml}
      ${adminReplyInputHtml}
    `;

    postsList.appendChild(postCard);
  });
}

function filterBoard(filterType) {
  state.boardFilter = filterType;
  document.querySelectorAll('.filter-chip').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderBoard();
}

function submitAdminReply(postId) {
  const input = document.getElementById(`replyInput_${postId}`);
  const text = input.value.trim();
  if (!text) return;

  const post = postsData.find(p => p.id === postId);
  if (post) {
    post.replies.push({
      id: Date.now(),
      author: 'yukiyanArt 公式',
      isAdmin: true,
      text: text,
      date: getCurrentTimestamp()
    });
    renderBoard();
  }
}

function openPostModal() {
  const app = appsData.find(a => a.id === state.currentAppId);
  document.getElementById('modalTargetAppName').textContent = app ? `${app.name} (${app.subName})` : 'アプリ';
  document.getElementById('postModalOverlay').classList.add('active');
}

function closePostModal() {
  document.getElementById('postModalOverlay').classList.remove('active');
  document.getElementById('postForm').reset();
}

function handlePostSubmit(e) {
  e.preventDefault();
  const category = document.querySelector('input[name="category"]:checked').value;
  const title = document.getElementById('postTitle').value.trim();
  const content = document.getElementById('postContent').value.trim();

  if (!title || !content) return;

  const newPost = {
    id: Date.now(),
    appId: state.currentAppId,
    category: category,
    title: title,
    content: content,
    date: getCurrentTimestamp(),
    replies: []
  };

  postsData.unshift(newPost);
  closePostModal();
  renderBoard();

  const appName = getAppName(state.currentAppId);
  notifications.unshift({
    id: Date.now(),
    title: `【${appName}】「${title}」が投稿されました`,
    time: getCurrentTimestamp().split(' ')[1]
  });
  renderNotifications();

  showToast('ご要望を匿名で送信しました！掲示板に着地しました。');

  if (state.isAdmin) {
    setTimeout(() => {
      showToast(`🔔 <b>【管理者通知】</b><br>${appName}に新しい要望が届きました！`, true);
    }, 1000);
  }
}

function renderNewsList() {
  const container = document.getElementById('newsList');
  if (!container) return;
  container.innerHTML = '';

  if (newsData.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: #94A3B8; padding: 30px;">お知らせはまだありません。</div>`;
    return;
  }

  newsData.forEach(item => {
    const newsCard = document.createElement('div');
    newsCard.className = 'news-card';

    const tagMap = {
      update: { label: '🚀 アプリアップデート', class: 'update' },
      fix: { label: '🔧 修正完了', class: 'fix' },
      info: { label: '📢 お知らせ', class: 'info' }
    };
    const tagInfo = tagMap[item.tag] || tagMap.info;

    newsCard.innerHTML = `
      <div class="news-card-header">
        <span class="news-badge ${tagInfo.class}">${tagInfo.label}</span>
        <span class="news-app-tag">${getAppName(item.appId)} • ${item.date}</span>
      </div>
      <div class="news-title">${escapeHtml(item.title)}</div>
      <div class="news-content">${escapeHtml(item.content)}</div>
    `;

    container.appendChild(newsCard);
  });
}

function openNewsModal() {
  document.getElementById('newsModalOverlay').classList.add('active');
}

function closeNewsModal() {
  document.getElementById('newsModalOverlay').classList.remove('active');
  document.getElementById('newsForm').reset();
}

function handleNewsSubmit(e) {
  e.preventDefault();
  const appId = document.getElementById('newsTargetApp').value;
  const tag = document.getElementById('newsTag').value;
  const title = document.getElementById('newsTitle').value.trim();
  const content = document.getElementById('newsContent').value.trim();

  if (!title || !content) return;

  const newNews = {
    id: Date.now(),
    appId: appId,
    tag: tag,
    title: title,
    content: content,
    date: getCurrentTimestamp()
  };

  newsData.unshift(newNews);
  closeNewsModal();
  renderNewsList();
  showToast('yukiyanArt 管理者として公式お知らせを発信しました！');
}

function populateNewsAppDropdown() {
  const select = document.getElementById('newsTargetApp');
  if (!select) return;
  select.innerHTML = '<option value="all">【全アプリ共通】</option>';
  appsData.forEach(app => {
    const opt = document.createElement('option');
    opt.value = app.id;
    opt.textContent = `${app.name} (${app.subName})`;
    select.appendChild(opt);
  });
}

// Helpers
function getAppName(appId) {
  if (appId === 'all') return '全アプリ共通';
  const app = appsData.find(a => a.id === appId);
  return app ? app.name : '対象アプリ';
}

function getCurrentTimestamp() {
  const d = new Date();
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, match => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[match]));
}
