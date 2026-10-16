const DEMO_BASE='https://tiffany871205.github.io/cyble-executive-insights-zh/';

const pages={
  home:{group:'開始使用',title:'Cyble Vision 繁體中文導覽',en:'Home',route:'',summary:'用功能情境快速理解 Cyble Vision 的各個模組，並可直接跳到互動 Demo 對照實際介面。'},

  'executive-insights':{group:'Dashboard',title:'高階管理洞察',en:'Executive Insights',route:'?page=executive&tab=overview',summary:'以管理層視角快速掌握整體威脅態勢、風險趨勢與重點事件。',points:['總覽整體風險與重要警示','切換威脅態勢與高階視角','適合簡報、例行會議與管理層摘要']},
  'alerts-insights':{group:'Dashboard',title:'警示洞察',en:'Alerts Insights',route:'?page=alerts&tab=attack',summary:'從不同資安領域彙整警示量、嚴重度、狀態與待處理事件。',points:['攻擊面、暗網、品牌、漏洞等分類','Severity Distribution 與待處理警示','快速判斷哪一類風險需要優先處理']},
  'operational-insights':{group:'Dashboard',title:'營運洞察',en:'Operational Insights',route:'?page=operational&tab=overview',summary:'用營運視角查看處理狀態、服務表現與日常資安工作量。'},

  advisories:{group:'Threat Intelligence',title:'Cyble 資安公告',en:'Cyble Advisories',route:'?page=advisories',summary:'閱讀 Cyble 發布的資安公告、弱點與威脅研究。'},
  newsflash:{group:'Threat Intelligence',title:'Cyble 快訊',en:'NewsFlash',route:'?page=newsflash',summary:'用較短篇幅快速掌握最新威脅、地下犯罪活動與外洩事件。'},
  newsfeed:{group:'Threat Intelligence',title:'資安新聞',en:'Cyber Newsfeed',route:'?page=newsfeed',summary:'彙整資安新聞來源，協助追蹤最新事件與產業動態。'},
  'threat-actor-library':{group:'Threat Intelligence',title:'威脅行為者資料庫',en:'Threat Actor Library',route:'?page=threat-actor-library',summary:'查詢威脅組織、攻擊者別名、活動與相關情報。'},
  'malware-families':{group:'Threat Intelligence',title:'惡意軟體家族',en:'Malware Families',route:'?page=malware-families',summary:'查找惡意軟體家族、特徵與相關威脅資訊。'},
  'ioc-lookup':{group:'Threat Intelligence',title:'IoC 查詢',en:'IoC Lookup',route:'?page=ioc-lookup',summary:'查詢 IP、Domain、Hash 等 Indicator of Compromise 的情資與風險。'},
  'sensor-intelligence':{group:'Threat Intelligence',title:'Sensor Intelligence',en:'Sensor Intelligence',route:'?page=sensor-intelligence',summary:'查看感測器蒐集到的攻擊活動與威脅訊號。'},
  botshield:{group:'Threat Intelligence',title:'BotShield',en:'BotShield',route:'?page=botshield',summary:'辨識 Bot 活動與自動化惡意行為。'},
  'ransomware-extortion':{group:'Threat Intelligence',title:'勒索與敲詐',en:'Ransomware & Extortion',route:'?page=ransomware-extortion',summary:'追蹤勒索軟體組織、受害者與外洩活動。'},
  'threat-lens':{group:'Threat Intelligence',title:'Threat Lens',en:'Threat Lens',route:'?page=threat-lens',summary:'以情報視角彙整與分析關聯威脅資訊。'},
  'threat-detection-rules':{group:'Threat Intelligence',title:'威脅偵測規則',en:'Threat Detection Rules',route:'?page=threat-detection-rules',summary:'查看可用於偵測威脅的規則與條件。'},
  hacktivism:{group:'Threat Intelligence',title:'駭客行動主義',en:'Hacktivism',route:'?page=hacktivism',summary:'追蹤 Hacktivist 組織與相關活動。'},

  darkweb:{group:'Dark Web & Cybercrime',title:'暗網情報',en:'Darkweb Intelligence',route:'?page=darkweb',summary:'追蹤暗網來源中的企業、帳號、資料與相關威脅。'},
  'cybercrime-monitoring':{group:'Dark Web & Cybercrime',title:'網路犯罪監控',en:'Cybercrime Monitoring',route:'?page=cybercrime-monitoring',summary:'監控犯罪論壇與地下社群中的相關提及。'},
  'compromised-cards':{group:'Dark Web & Cybercrime',title:'遭入侵卡片',en:'Compromised Cards',route:'?page=compromised-cards',summary:'查看疑似遭竊用或外洩的支付卡資訊。'},
  'compromised-files':{group:'Dark Web & Cybercrime',title:'遭入侵檔案',en:'Compromised Files',route:'?page=compromised-files',summary:'查看從外洩來源中發現的敏感檔案。'},
  'data-leaks':{group:'Dark Web & Cybercrime',title:'資料外洩',en:'Data Leaks',route:'?page=data-leaks',summary:'集中查看資料外洩事件與可能受影響的資訊。'},

  'attack-surface-dashboard':{group:'Attack Surface',title:'攻擊面總覽',en:'Attack Surface Dashboard',route:'?page=attack-surface-dashboard',summary:'從外部攻擊面角度掌握資產、曝險與風險趨勢。'},
  'asset-inventory':{group:'Attack Surface',title:'資產清冊',en:'Asset Inventory',route:'?page=asset-inventory',summary:'集中管理外部可見的網域、IP、主機與相關資產。'},
  'issue-catalog':{group:'Attack Surface',title:'問題目錄',en:'Issue Catalog',route:'?page=issue-catalog',summary:'檢視攻擊面中發現的弱點、設定問題與曝險項目。'},
  'ssl-tls':{group:'Attack Surface',title:'SSL / TLS',en:'SSL / TLS',route:'?page=ssl-tls',summary:'檢查憑證、TLS 組態與相關安全風險。'},
  signatures:{group:'Attack Surface',title:'Signatures',en:'Signatures',route:'?page=signatures',summary:'查看技術指紋與辨識結果。'},
  'on-demand-scan':{group:'Attack Surface',title:'即時掃描',en:'On-Demand Scan',route:'?page=on-demand-scan',summary:'針對指定目標發起一次性的掃描工作。'},
  'cloud-connectors':{group:'Attack Surface',title:'Cloud Connectors',en:'Cloud Connectors',route:'?page=cloud-connectors',summary:'連接雲端環境以補充資產探索與雲端曝險資訊。'},

  'malicious-domains':{group:'Brand Intelligence',title:'惡意網域',en:'Malicious Domains',route:'?page=malicious-domains',summary:'追蹤疑似仿冒、釣魚與品牌濫用網域。'},
  'social-media-monitoring':{group:'Brand Intelligence',title:'社群媒體監控',en:'Social Media Monitoring',route:'?page=social-media-monitoring',summary:'監控社群平台中的品牌、冒用與風險提及。'},
  'watchlisted-domains':{group:'Brand Intelligence',title:'網域監控清單',en:'Watchlisted Domains',route:'?page=watchlisted-domains',summary:'管理需要持續追蹤的可疑或重點網域。'},
  'website-monitoring':{group:'Brand Intelligence',title:'網站監控',en:'Website Monitoring',route:'?page=website-monitoring',summary:'持續監控網站內容與品牌相關變化。'},
  'website-watermarking':{group:'Brand Intelligence',title:'Website Watermarking',en:'Website Watermarking',route:'?page=website-watermarking',summary:'利用網站特徵協助辨識仿冒與複製頁面。'},
  'takedown-tracker':{group:'Brand Intelligence',title:'下架追蹤',en:'Takedown Tracker',route:'?page=takedown-tracker',summary:'追蹤仿冒網站、帳號等下架案件的處理狀態。'},
  'mobile-application-monitoring':{group:'Brand Intelligence',title:'行動應用程式監控',en:'Mobile Application Monitoring',route:'?page=mobile-application-monitoring',summary:'追蹤 App 商店中的仿冒與可疑應用程式。'},

  'executive-monitoring':{group:'Executive Monitoring',title:'高階主管監控',en:'Executive Monitoring',route:'?page=executive-monitoring&tab=overview',summary:'保護高階主管數位身分，追蹤冒用、社群帳號與相關威脅。',points:['Overview 查看整體狀態','Executives 管理主管資料','Findings 追蹤冒用與風險','Configuration 管理監控設定']},

  'third-party-risk':{group:'Third Party Risk',title:'第三方風險管理',en:'Third Party Risk',route:'?page=third-party-risk',summary:'管理第三方供應商與其資安風險。'},
  'third-party-reports':{group:'Third Party Risk',title:'第三方報告',en:'Third Party Reports',route:'?page=third-party-reports',summary:'檢視與管理供應商風險評估報告。'},
  'report-customisation':{group:'Third Party Risk',title:'報告客製化',en:'Report Customisation',route:'?page=third-party-report-customisation',summary:'自訂第三方風險報告的內容與呈現方式。'},

  'vulnerability-intelligence':{group:'Vulnerability Intelligence',title:'弱點情資',en:'Vulnerability Intelligence',route:'?page=vulnerability-intelligence',summary:'集中查看弱點、Zero-Day、CISA KEV、CVSS、EPSS 與產品曝險。',points:['My Org\'s Exposure：聚焦自身環境','All Vulnerabilities：查看更廣泛弱點','My Products：維護產品清單','Curated Intelligence：閱讀相關新聞與公告']},
  'vulnerability-products':{group:'Vulnerability Intelligence',title:'我的產品',en:'My Products',route:'?page=vulnerability-intelligence&tab=my-products',summary:'維護組織使用的產品與版本，協助對照相關弱點。'},

  'reports-management':{group:'Utilities',title:'報告管理',en:'Reports Management',route:'?page=reports-management',summary:'檢視並下載平台產生的警示與事件報告。'},
  'status-tracker':{group:'Utilities',title:'大量更新追蹤',en:'Status Tracker',route:'?page=status-tracker',summary:'追蹤大量警示更新操作的狀態。'},
  'access-apis':{group:'Utilities',title:'API 存取',en:'Access APIs',route:'?page=access-apis',summary:'查看 API 文件、Authentication 與 Endpoint 範例。'},
  integrations:{group:'Utilities',title:'整合',en:'Integrations',route:'?page=integrations',summary:'管理 Jira、Syslog、Splunk、Sentinel、MISP 等第三方整合。'},

  'profile-settings':{group:'Control Panel',title:'個人資料設定',en:'Profile Settings',route:'?page=profile-settings',summary:'管理個人資料、帳號、安全性與 Cookie 偏好。'},
  'configurations-hub':{group:'Control Panel',title:'設定中心',en:'Configurations Hub',route:'?page=configurations-hub',summary:'管理關鍵字、Buckets、高階主管、資產、產品、雲端帳號與各種整合。',points:['Keywords / Buckets','Executives','Assets / Products','Cloud Accounts / ASM Assets','AD Integrations / Ask Blaze Integrations']},
  'user-management':{group:'Control Panel',title:'使用者管理',en:'User Management',route:'?page=user-management',summary:'管理使用者、角色、服務權限與新增帳號。'},
  'company-management':{group:'Control Panel',title:'公司管理',en:'Company Management',route:'?page=company-management',summary:'管理公司資料、授權、服務、子公司與資產使用量。'},
  'alert-settings':{group:'Control Panel',title:'警示設定',en:'Alert Settings',route:'?page=alert-settings',summary:'管理各服務的預設警示嚴重度與 Paused Alerts。'},
  'notification-settings':{group:'Control Panel',title:'通知設定',en:'Notifications Settings',route:'?page=notification-settings',summary:'依服務設定通知頻率、收件者、Status 與通知管道。'},
  'application-settings':{group:'Control Panel',title:'應用程式設定',en:'Application Settings',route:'?page=application-settings',summary:'設定視覺主題、語言、Cookie 偏好與應用程式資訊。'}
};

const groupOrder=['開始使用','Dashboard','Threat Intelligence','Dark Web & Cybercrime','Attack Surface','Brand Intelligence','Executive Monitoring','Third Party Risk','Vulnerability Intelligence','Utilities','Control Panel'];
const deepGuides={
  'vulnerability-intelligence':{
    intro:'這個模組的核心不是只「看 CVE」，而是把弱點情報、組織曝險、產品清單與外部情資放在同一個工作流程裡。實務上可以先從「跟我有沒有關」開始，再決定修補優先順序。',
    sections:[
      ["My Org's Exposure",'聚焦與自身環境、產品或資產相關的弱點，適合先確認「哪些 CVE 真的可能影響我」。'],
      ['All Vulnerabilities','查看更廣泛的 CVE 情報，可搭配 CVSS、CISA KEV、Zero-Day、EOL、PoC 等條件縮小範圍。'],
      ['My Products','維護實際使用中的 Vendor、Product、Version 與 Criticality，讓弱點情報能與產品清單對照。'],
      ['Zero-Day / Curated Intelligence','追蹤新出現且影響較高的事件、新聞、公告與研究內容，作為即時判斷的背景情報。'],
      ['Top CWE Metrics','用 CWE 類型觀察常見弱點類別，協助理解弱點集中在哪些軟體安全問題。']
    ],
    concepts:[
      ['CVSS','弱點本身的技術嚴重度分數；高分代表影響通常較大，但不代表一定正在被攻擊。'],
      ['EPSS','估計弱點在近期遭到實際利用的機率，可用來補充 CVSS 的「技術嚴重度」。'],
      ['CISA KEV','已知遭到實際利用的弱點清單。若同時是自身相關產品，通常值得優先關注。'],
      ['Zero-Day','在修補或完整防護尚未普及前，就已經存在利用風險的弱點情境。'],
      ['PoC','Proof of Concept，代表已有可證明弱點能被利用的示範程式或方法。'],
      ['Product Criticality','產品對組織的重要性。即使 CVE 分數相同，核心系統與一般測試環境的處理優先度可能不同。']
    ],
    workflow:[
      '先到 My Products 確認企業實際使用的產品與版本是否已建檔。',
      "回到 My Org's Exposure，查看與自身環境相關的弱點。",
      '搭配 CVSS、EPSS、CISA KEV、Zero-Day 與 PoC 判斷風險。',
      '如果要做威脅背景補充，再查看 Curated Intelligence、News Feed 或 Advisories。',
      '最後將高風險且與自身產品直接相關的弱點列為優先處理對象。'
    ],
    note:'判斷修補順序時，不建議只看單一 CVSS 分數。可以把「是否影響自身產品 × 是否已遭利用 × 利用可能性 × 資產重要性」一起考量。'
  },
  'configurations-hub':{
    intro:'Configurations Hub 是很多 Cyble 功能的「資料來源設定中心」。前台看到的品牌、主管、資產、產品與監控結果，往往都取決於這裡先設定了什麼。',
    sections:[
      ['Keywords','設定品牌名、公司名、關鍵字或其他需要被監控的字詞；也是許多情報與警示來源的基礎。'],
      ['Buckets','把不同關鍵字分組，例如公司品牌、產品線、子公司或特定專案，方便後續管理。'],
      ['Executives','建立高階主管資料，包含姓名、別名、圖片、聯絡方式、地址與社群帳號等。'],
      ['Assets','維護 Company Logos、Employee Information、Favicons、Code Repositories 等企業資產。'],
      ['Products','維護企業正在使用的軟體、版本與 Criticality，供 Vulnerability Intelligence 對照。'],
      ['Cloud Accounts','連接或管理雲端帳號，作為雲端資產與曝險探索來源。'],
      ['ASM Assets','查看 Cloud Connectors、自動探索出的資產，以及 Suppression Rules。'],
      ['AD Integrations','設定 Microsoft Entra ID / Active Directory 類型的整合資訊。'],
      ['Ask Blaze Integrations','串接安全工具，讓 Ask Blaze 或 Deep Research 可使用額外資料來源。']
    ],
    concepts:[
      ['Keyword ≠ Asset','Keyword 是「我要監控什麼字詞」，Asset 是「企業實際擁有哪些數位資產」，兩者用途不同。'],
      ['Bucket','是管理關鍵字的分類容器，不是風險分類。'],
      ['Profile Readiness','建立 Executive 時，用來提醒個人資料是否足夠完整，資料越完整越有利於後續監控與比對。'],
      ['Auto Discovered Assets','由 ASM 掃描或連接器找到的資產，不一定代表已經正式納入企業資產清單。'],
      ['Suppression Rule','用來排除不需要持續顯示或追蹤的特定自動探索結果。'],
      ['Product Criticality','用於區分產品對企業的重要程度，後續可輔助弱點優先排序。']
    ],
    workflow:[
      '先建立 Buckets，再把 Keywords 放進適當分類。',
      '若有高階主管保護需求，到 Executives 建立完整人物資料。',
      '補齊 Logos、Favicons、Repositories 等 Assets，提升品牌與資產辨識基礎。',
      '將企業使用的 Products 與 Version 建檔，支援 Vulnerability Intelligence。',
      '需要擴充攻擊面時，再設定 Cloud Accounts、ASM Connectors 或其他 Integrations。'
    ],
    note:'如果某個前台模組「沒有資料」，不一定代表系統沒有偵測能力，也可能是 Configurations Hub 還沒有建立足夠的監控對象或資產資料。'
  },
  'executive-monitoring':{
    intro:'Executive Monitoring 是針對高階主管數位身分的保護功能。它不是單純搜尋姓名，而是把人物資料、公開資訊、社群帳號與疑似冒用結果關聯起來。',
    sections:[
      ['Overview','快速查看主管監控整體狀態、Finding 數量與風險概況。'],
      ['Executives','查看目前受監控的高階主管、啟用狀態與 Profile Readiness。'],
      ['Add Executive','新增主管資料，包括 Personal Information、Reference Images、Contact、Addresses、Social Handles。'],
      ['Findings','查看系統找到的疑似冒用、社群帳號或其他與主管身分相關的風險結果。'],
      ['Profile Readiness','反映人物資料完整度；資料越完整，通常越有利於後續識別與降低誤判。'],
      ['On Save','儲存人物資料後，提示系統接下來如何建立或更新監控設定。']
    ],
    concepts:[
      ['Display Name','平台主要顯示名稱；可與正式姓名不同。'],
      ['Aliases','別名、英文名、常用稱呼等，可提高比對不同公開資料來源的能力。'],
      ['Reference Images','人物參考照片，用來支援與影像相關的辨識或冒用比對。'],
      ['Social Handles','官方或已知社群帳號，可協助區分合法帳號與假冒帳號。'],
      ['Finding','系統找到、需要進一步確認的可疑結果；Finding 本身不代表一定已確認為事件。'],
      ['Profile Readiness','人物資料完整程度的提示，適合在正式啟用監控前先檢查。']
    ],
    workflow:[
      '先在 Executives 確認目前有哪些主管已納入監控。',
      '新增主管時，優先填寫正式姓名、職稱、別名與 Reference Images。',
      '再補充 Email、Phone、Address 與 Social Handles，增加識別依據。',
      '確認 Profile Readiness 是否足夠，再儲存並啟用監控。',
      '日常營運時主要回到 Findings，逐筆判斷是否為真實冒用或誤判。'
    ],
    note:'高階主管資料屬於敏感的個人資訊。實際正式環境應依公司政策、法規與最小必要原則管理資料蒐集、權限及保存。'
  },
  'attack-surface-dashboard':{
    intro:'Attack Surface Dashboard 可以把它想成 EASM 的「總覽地圖」：先看企業對外暴露了哪些資產，再看其中哪些資產出現問題，最後決定要往 Asset Inventory、Issue Catalog 或技術細節頁面深入。',
    sections:[
      ['Attack Surface Summary','快速查看目前被發現的外部資產、問題量與風險變化。'],
      ['Assets by Type','用 Domain、IP、Host、Cloud 等類型理解外部資產組成。'],
      ['Issue Distribution','從 Critical、High、Medium、Low 等級看目前曝險集中在哪裡。'],
      ['Trend / Timeline','觀察資產或 Issue 隨時間增加、減少與修復後的變化。'],
      ['Top Exposed Assets','先鎖定問題多、風險高或重要性高的資產。']
    ],
    concepts:[
      ['Attack Surface','從網際網路可看到、可連線或可被識別的企業數位資產與服務範圍。'],
      ['EASM','External Attack Surface Management，持續探索並管理企業外部攻擊面。'],
      ['Discovered Asset','由平台自動找到的資產；仍需確認是否真的是企業所有或應納管。'],
      ['Exposure','資產對外暴露的服務、設定、弱點或其他可能被攻擊者利用的條件。'],
      ['Issue','平台根據資產觀察結果整理出的安全問題或需確認項目。'],
      ['Confidence','系統對「這個資產是否與企業有關」的判斷信心，不等於安全風險分數。']
    ],
    workflow:[
      '先從 Dashboard 看整體資產量、Issue 數量與趨勢。',
      '如果資產數量異常增加，先進 Asset Inventory 確認新發現資產。',
      '如果 Critical / High Issue 增加，再進 Issue Catalog 查看問題類型與受影響資產。',
      '針對 SSL/TLS、Open Ports、Web 等技術問題，再到對應頁面深入確認。',
      '確認問題與資產歸屬後，再交由內部資產負責人進行修補或風險接受。'
    ],
    note:'EASM 的第一步通常不是「掃到什麼就立刻修」，而是先確認資產歸屬與重要性。錯把第三方或歷史資產當成自己的，會讓修補工作失焦。'
  },
  'asset-inventory':{
    intro:'Asset Inventory 是外部攻擊面的資產清冊。它回答的是「平台目前認為哪些 Domain、IP、Host 或其他資產與我的公司有關」，也是後續 Issue 分析的基礎。',
    sections:[
      ['Asset List','查看每一筆外部資產與其類型、狀態、來源及相關資訊。'],
      ['Search / Filters','用資產類型、狀態、來源或關鍵字縮小清單。'],
      ['Asset Detail','點進單一資產查看相關服務、問題、DNS、憑證或其他技術資訊。'],
      ['Discovered vs Managed','區分系統探索到的資產與已確認納管的資產。']
    ],
    concepts:[
      ['Domain','企業對外使用的網域名稱，例如 example.com。'],
      ['Subdomain','主網域底下的子網域，例如 vpn.example.com。'],
      ['IP Address','對外服務實際使用的網路位址，可能對應主機、設備或雲端資源。'],
      ['Asset Ownership','確認資產是否真的由企業擁有、營運或需要承擔風險。'],
      ['Shadow IT','未經正式 IT 流程建立，但仍與企業有關的網站、雲端服務或外部系統。']
    ],
    workflow:[
      '先用搜尋或 Filter 找到想確認的 Domain / IP。',
      '檢查資產的發現來源、關聯資訊與是否仍在使用。',
      '若是未知資產，先向內部確認 Ownership，而不是直接視為惡意。',
      '確認為企業資產後，再查看它有哪些 Issue 或曝險。',
      '對已淘汰或誤判資產，可依平台功能做 Suppression、排除或狀態調整。'
    ],
    note:'Asset Inventory 的價值在「持續盤點」，不是一次性的資產清冊。企業新增雲端服務、臨時網站或子網域後，攻擊面也會跟著改變。'
  },
  'issue-catalog':{
    intro:'Issue Catalog 把攻擊面掃描結果整理成「需要處理的問題清單」。比起只看資產，它更適合用來回答「現在到底有哪些外部曝險值得處理」。',
    sections:[
      ['Issue List','依問題類型列出受影響資產、Severity、狀態與時間資訊。'],
      ['Severity Filters','快速聚焦 Critical / High 等高風險問題。'],
      ['Issue Detail','查看問題說明、影響範圍、受影響資產與修補方向。'],
      ['Status / Workflow','追蹤問題是否已確認、處理中、已解決或不需處理。']
    ],
    concepts:[
      ['Severity','平台對問題影響程度的分級，用於協助排序，但仍要搭配資產重要性判斷。'],
      ['First Seen','平台第一次觀察到這個問題的時間。'],
      ['Last Seen','最近一次仍觀察到問題的時間；可用來判斷問題是否仍存在。'],
      ['Affected Asset','實際出現此問題的資產。'],
      ['Remediation','降低或移除風險的處理方式，例如關閉服務、更新版本或修正設定。']
    ],
    workflow:[
      '先用 Severity 篩選 Critical / High。',
      '確認問題影響哪些資產，以及這些資產對企業的重要性。',
      '查看 First Seen / Last Seen，判斷是長期存在還是新出現。',
      '閱讀 Issue Detail 與建議處理方式，再分派給資產負責人。',
      '處理完成後重新確認是否仍被平台觀察到。'
    ],
    note:'同一種 Issue 可能出現在多個資產上。實務上可先找「影響資產多」或「核心資產上的高風險 Issue」，通常比逐筆處理更有效率。'
  },
  'third-party-risk':{
    intro:'Third Party Risk 用來管理供應商與合作夥伴的資安風險。重點不是替供應商做內部稽核，而是把外部可觀察資訊、評估結果與追蹤工作集中管理。',
    sections:[
      ['Third Party Overview','查看目前供應商數量、風險分布與重點異常。'],
      ['Company / Vendor List','逐一查看第三方公司的基本資料與風險概況。'],
      ['Risk Signals','彙整外部攻擊面、資料外洩、威脅情報等可觀察風險。'],
      ['Reports','產出或閱讀第三方風險報告，作為供應商評估與溝通依據。'],
      ['Follow-up','針對高風險供應商安排進一步確認、改善或接受風險。']
    ],
    concepts:[
      ['Third Party','供應商、委外商、合作夥伴或其他與企業有業務關係的外部組織。'],
      ['Inherent Risk','尚未考慮控制措施前，因服務內容、資料存取或業務依賴本身帶來的風險。'],
      ['Residual Risk','考慮既有控制與改善措施後，仍然存在的剩餘風險。'],
      ['Continuous Monitoring','不是一年只評一次，而是持續觀察供應商外部風險變化。'],
      ['Risk Acceptance','企業判斷風險在可接受範圍內，因此不要求額外改善。']
    ],
    workflow:[
      '先依供應商重要程度、資料存取與服務依賴做分級。',
      '查看高重要度供應商目前的外部風險與異常訊號。',
      '若出現高風險事件，再搭配 Third Party Reports 或其他證據深入確認。',
      '必要時要求供應商提供改善說明、修補證明或額外文件。',
      '定期追蹤改善是否完成，並保留接受風險或例外處理紀錄。'
    ],
    note:'第三方風險不能只看一個分數。供應商「對你有多重要、能接觸什麼資料、服務中斷會造成什麼影響」通常跟外部安全觀察同樣重要。'
  },
  'third-party-reports':{
    intro:'Third Party Reports 是把第三方風險資訊整理成可閱讀、可分享的報告。適合供應商檢視、內部審查、管理層報告與後續改善追蹤。',
    sections:[
      ['Report List','集中查看已建立的第三方風險報告。'],
      ['Company Scope','確認每份報告針對哪一家供應商或哪個評估範圍。'],
      ['Risk Findings','查看報告中整理的主要風險與證據。'],
      ['Export / Share','將結果提供給內部利害關係人或後續評估流程使用。']
    ],
    concepts:[
      ['Report Scope','報告涵蓋的公司、資產、期間或風險類型。'],
      ['Finding','報告中需要關注的風險觀察結果。'],
      ['Evidence','支持 Finding 的外部觀察、技術資訊或其他佐證。'],
      ['Customisation','依不同對象調整報告欄位、內容或呈現方式。']
    ],
    workflow:[
      '先確認報告公司與評估範圍正確。',
      '閱讀高風險 Finding 與相關證據。',
      '把需要供應商回覆的項目整理成改善清單。',
      '依管理層、採購、資安或稽核需求調整報告呈現。',
      '後續將改善狀態與下一次檢視時間記錄下來。'
    ],
    note:'報告適合當成溝通材料，但不代表所有風險都已經被證實。對高影響 Finding，仍應搭配供應商回覆或其他證據確認。'
  },
  'malicious-domains':{
    intro:'Malicious Domains 是 Brand Intelligence 裡最常用來處理仿冒與釣魚的功能之一。它會把疑似與品牌相似、可能誤導使用者的網域集中呈現，讓分析人員判斷是否需要監控或下架。',
    sections:[
      ['Domain Findings','查看疑似仿冒、拼字相似或品牌濫用的網域。'],
      ['Similarity / Detection Signals','了解系統為什麼認為該網域與品牌有關。'],
      ['Status / Review','標記是否已檢視、確認惡意、誤判或正在處理。'],
      ['Takedown','若確認為惡意仿冒，可進一步建立或追蹤下架案件。']
    ],
    concepts:[
      ['Typosquatting','利用拼字錯誤或相似字串註冊網域，例如少一個字母或交換字母。'],
      ['Punycode','把 Unicode 網域轉成 ASCII 的表示方式；有時會被用來製造視覺上很像的網域。'],
      ['Homoglyph','利用外觀相似的字元混淆使用者，例如拉丁字母與其他語系字母。'],
      ['Brand Impersonation','未經授權冒用企業名稱、Logo、版面或身分。'],
      ['Takedown','向 Registrar、Hosting、平台或相關服務商提出移除惡意內容的處理流程。']
    ],
    workflow:[
      '先看新出現的 Domain Finding 與相似度訊號。',
      '確認網域是否真的與公司無關，並檢查網站內容、憑證、DNS 與品牌元素。',
      '若只是相似但沒有惡意內容，可先監控或標記為低風險。',
      '若確認存在釣魚、冒用或詐騙，再建立 Takedown。',
      '持續到 Takedown Tracker 追蹤處理進度與最終狀態。'
    ],
    note:'「看起來像公司」不等於「一定是惡意」。正式下架前應先確認 Ownership、內容與證據，避免誤處理合法合作夥伴或活動網站。'
  },
  'takedown-tracker':{
    intro:'Takedown Tracker 是品牌保護事件的後續工作區。當仿冒網域、社群帳號、App 或其他惡意內容送出下架後，可以在這裡持續看案件目前走到哪一步。',
    sections:[
      ['Case List','查看所有已建立的下架案件與目前狀態。'],
      ['Target','確認要下架的 Domain、URL、社群帳號或其他對象。'],
      ['Status / Timeline','追蹤案件已送出、等待回覆、處理中或已完成。'],
      ['Evidence / Notes','保留下架依據、補件資訊與處理紀錄。']
    ],
    concepts:[
      ['C&D','Cease and Desist，要求對方停止侵權或惡意行為的通知。'],
      ['Registrar','管理網域註冊的服務商。'],
      ['Hosting Provider','實際提供網站主機或內容代管的服務商。'],
      ['Platform Takedown','向社群、App Store、Marketplace 等平台申請移除內容。'],
      ['SLA','預期處理時間或服務承諾，用於追蹤案件是否延遲。']
    ],
    workflow:[
      '從已確認的惡意 Finding 建立下架案件。',
      '確認 Target 與 Evidence 完整，避免送錯對象。',
      '依內容類型送交 Registrar、Hosting Provider 或平台。',
      '持續查看狀態、回覆與是否需要補充資料。',
      '完成後確認惡意內容實際已無法存取，再關閉案件。'
    ],
    note:'「已送出下架」不代表「已經下架」。真正完成前仍要持續驗證目標是否可存取，並保留處理紀錄。'
  }
};

const nav=document.querySelector('#nav');
const main=document.querySelector('#main');
const crumb=document.querySelector('#crumb');
const search=document.querySelector('#search');
const sidebar=document.querySelector('#sidebar');
const menuBtn=document.querySelector('#menuBtn');

function slugFromHash(){return location.hash.replace(/^#\/?/,'')||'home'}
function pageUrl(p){return p.route?DEMO_BASE+p.route:DEMO_BASE}
function makeNav(query=''){
  const q=query.trim().toLowerCase();
  nav.innerHTML='';
  let matches=0;
  groupOrder.forEach(group=>{
    const items=Object.entries(pages).filter(([slug,p])=>p.group===group && (!q || `${p.title} ${p.en} ${p.summary}`.toLowerCase().includes(q)));
    if(!items.length)return;
    matches+=items.length;
    const wrap=document.createElement('section');wrap.className='nav-group';
    wrap.innerHTML=`<div class="group-title">${group}</div>`;
    items.forEach(([slug,p])=>{
      const a=document.createElement('a');a.className='nav-item';a.href=`#${slug}`;a.dataset.slug=slug;a.innerHTML=`${p.title}<small>${p.en}</small>`;wrap.appendChild(a)
    });
    nav.appendChild(wrap)
  });
  if(!matches)nav.innerHTML='<div class="no-results">找不到符合的功能。<br>可以嘗試英文名稱或較短的關鍵字。</div>';
  syncActive();
}

function syncActive(){const slug=slugFromHash();document.querySelectorAll('.nav-item').forEach(a=>a.classList.toggle('active',a.dataset.slug===slug))}

function homeHtml(){
  const featured=['vulnerability-intelligence','executive-monitoring','configurations-hub','third-party-risk','asset-inventory','notification-settings'];
  return `<article class="doc"><div class="eyebrow">CYBLE VISION GUIDE</div><h1>Cyble Vision 繁體中文導覽</h1><p class="lead">這是一份配合互動 Demo 使用的中文導覽。你可以先在這裡理解各功能的用途，再直接開啟對應的 Cyble 模擬畫面操作。</p><div class="callout notice-green">建議使用方式：<b>先看「這頁是做什麼」→ 再看「操作重點」→ 最後點「開啟互動 Demo」實際操作。</b></div><h2>從哪裡開始？</h2><div class="journey"><button class="journey-item" data-jump="executive-insights"><b>01</b><span><strong>先看整體風險</strong><small>從 Executive Insights 與 Alerts Insights 了解平台如何彙整資訊。</small></span></button><button class="journey-item" data-jump="attack-surface-dashboard"><b>02</b><span><strong>理解外部攻擊面</strong><small>查看資產、Issue Catalog、SSL/TLS 與 Cloud Connectors。</small></span></button><button class="journey-item" data-jump="vulnerability-intelligence"><b>03</b><span><strong>查看弱點情資</strong><small>從 CVE、Zero-Day、EPSS 到 My Products 建立弱點處理脈絡。</small></span></button><button class="journey-item" data-jump="configurations-hub"><b>04</b><span><strong>最後看平台設定</strong><small>理解 Keywords、Assets、Users、Notifications 與 Control Panel。</small></span></button></div><h2>常用功能</h2><div class="feature-grid">${featured.map(slug=>{const p=pages[slug];return `<button class="feature-card" data-jump="${slug}"><strong>${p.title}</strong><small>${p.en}</small><p>${p.summary}</p></button>`}).join('')}</div><h2>完整功能分類</h2><div class="guide-cards">${groupOrder.filter(g=>g!=='開始使用').map(group=>{const count=Object.values(pages).filter(p=>p.group===group).length;return `<div class="guide-card"><strong>${group}</strong><small>${count} 個導覽頁</small><p>${groupDescription(group)}</p></div>`}).join('')}</div></article>`
}

function groupDescription(group){return ({'Dashboard':'管理層與營運視角的摘要頁面。','Threat Intelligence':'威脅行為者、惡意軟體、IoC 與資安研究。','Dark Web & Cybercrime':'暗網、犯罪論壇、外洩與遭入侵資料。','Attack Surface':'資產探索、曝險、弱點與技術設定。','Brand Intelligence':'仿冒網域、社群、網站與下架追蹤。','Executive Monitoring':'高階主管身分與冒用風險監控。','Third Party Risk':'第三方供應商風險與報告。','Vulnerability Intelligence':'CVE、Zero-Day、EPSS、KEV 與產品弱點。','Utilities':'報告、狀態追蹤、API 與 Integrations。','Control Panel':'使用者、公司、警示、通知與應用程式設定。'}[group]||'')}

function detailHtml(slug,p){
  const points=p.points||defaultPoints(p);
  const related=Object.entries(pages).filter(([s,x])=>s!==slug&&x.group===p.group).slice(0,4);
  return `<article class="doc"><button class="back-link" data-jump="home">← 返回首頁</button><div class="page-head"><div><div class="eyebrow">${p.group.toUpperCase()}</div><h1>${p.title}</h1><p class="lead">${p.en}｜${p.summary}</p></div><div class="page-actions"><a class="demo-btn" href="${pageUrl(p)}" target="_blank" rel="noreferrer">開啟互動 Demo ↗</a></div></div><div class="callout">這個導覽站不取代原平台，而是用來快速理解功能位置、用途與操作順序。需要確認實際互動時，請直接搭配右上角的 Demo 使用。</div><h2>這頁是做什麼？</h2><p>${p.summary}</p><h2>操作重點</h2><ol class="steps">${points.map((x,i)=>`<li><span class="number">${i+1}</span><span>${x}</span></li>`).join('')}</ol>${deepGuideHtml(slug)}<h2>建議你注意</h2><div class="term"><strong>英文名稱</strong><span>${p.en}</span></div><div class="term"><strong>所在分類</strong><span>${p.group}</span></div><div class="term"><strong>適合用在</strong><span>${useCase(p.group)}</span></div><div class="term"><strong>實際操作</strong><span><a class="text-link" href="${pageUrl(p)}" target="_blank" rel="noreferrer">前往此功能的互動 Demo ↗</a></span></div>${related.length?`<h2>同分類功能</h2><div class="feature-grid">${related.map(([s,x])=>`<button class="feature-card" data-jump="${s}"><strong>${x.title}</strong><small>${x.en}</small><p>${x.summary}</p></button>`).join('')}</div>`:''}</article>`
}

function deepGuideHtml(slug){
  const g=deepGuides[slug];
  if(!g)return '';
  return `<section class="deep-guide"><h2>深入理解</h2><p>${g.intro}</p><h3>頁面地圖</h3><div class="deep-section-grid">${g.sections.map(x=>`<article><strong>${x[0]}</strong><p>${x[1]}</p></article>`).join('')}</div><h3>重要名詞</h3><div class="doc-table deep-table"><table><thead><tr><th>名詞</th><th>白話解釋</th></tr></thead><tbody>${g.concepts.map(x=>`<tr><td><strong>${x[0]}</strong></td><td>${x[1]}</td></tr>`).join('')}</tbody></table></div><h3>建議操作流程</h3><ol class="deep-flow">${g.workflow.map((x,i)=>`<li><span>${i+1}</span><p>${x}</p></li>`).join('')}</ol><div class="callout deep-note"><b>實務提醒：</b>${g.note}</div></section>`
}

function defaultPoints(p){return [`先確認頁面標題與目前所在的功能分類。`,`使用搜尋、篩選或 Tab 將資料縮小到需要查看的範圍。`,`點擊列表、卡片或詳細項目查看更多內容。`,`需要對照介面時，使用「開啟互動 Demo」進入 ${p.en}。`]}
function useCase(group){return ({'Dashboard':'例行簡報、風險摘要、管理層溝通','Threat Intelligence':'威脅研究、SOC 調查、事件背景補充','Dark Web & Cybercrime':'外洩追蹤、暗網監控、犯罪活動調查','Attack Surface':'EASM、資產盤點、外部曝險管理','Brand Intelligence':'品牌保護、仿冒偵測、下架處理','Executive Monitoring':'高階主管保護、冒用監控','Third Party Risk':'供應商風險評估、第三方管理','Vulnerability Intelligence':'弱點排序、Zero-Day 追蹤、產品曝險','Utilities':'報告、API、平台整合與操作支援','Control Panel':'平台設定、帳號權限與通知管理'}[group]||'功能導覽與操作查找')}

function render(){
  const slug=slugFromHash();const p=pages[slug]||pages.home;
  main.innerHTML=slug==='home'||!pages[slug]?homeHtml():detailHtml(slug,p);
  crumb.textContent=slug==='home'?'首頁':`${p.group} / ${p.title}`;
  document.title=`${p.title}｜Cyble 中文導覽`;
  syncActive();
  main.querySelectorAll('[data-jump]').forEach(b=>b.addEventListener('click',()=>{location.hash=b.dataset.jump}));
  main.focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});
  if(innerWidth<=700){sidebar.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}
}

search.addEventListener('input',()=>makeNav(search.value));
window.addEventListener('hashchange',render);
menuBtn.addEventListener('click',()=>{const open=sidebar.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open))});
makeNav();render();

const tour=document.querySelector('#tour');
const tourBtn=document.querySelector('#tourBtn');
const closeTour=document.querySelector('#closeTour');
const nextTour=document.querySelector('#nextTour');
const prevTour=document.querySelector('#prevTour');
const tourTitle=document.querySelector('#tourTitle');
const tourText=document.querySelector('#tourText');
const tourStep=document.querySelector('#tourStep');
const tourSteps=[
 ['左側目錄','依產品功能分類瀏覽，也可以直接搜尋中英文名稱。'],
 ['導覽內容','每一頁先用白話說明用途，再整理操作重點與適用情境。'],
 ['互動 Demo','看到「開啟互動 Demo」時，可以直接進入目前建立的 Cyble 模擬平台對照操作。']
];
let tourIndex=0;
function paintTour(){const [t,b]=tourSteps[tourIndex];tourTitle.textContent=t;tourText.textContent=b;tourStep.textContent=`${tourIndex+1} / ${tourSteps.length}`;prevTour.disabled=tourIndex===0;nextTour.textContent=tourIndex===tourSteps.length-1?'完成':'下一步'}
tourBtn.addEventListener('click',()=>{tourIndex=0;paintTour();tour.showModal()});
closeTour.addEventListener('click',()=>tour.close());
prevTour.addEventListener('click',()=>{if(tourIndex>0){tourIndex--;paintTour()}});
nextTour.addEventListener('click',()=>{if(tourIndex<tourSteps.length-1){tourIndex++;paintTour()}else tour.close()});
tour.addEventListener('click',e=>{if(e.target===tour)tour.close()});
