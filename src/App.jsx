import React, { useState } from 'react';
import { 
  BookOpen, 
  Settings, 
  PlayCircle, 
  Wrench, 
  HelpCircle, 
  CheckCircle2, 
  Circle,
  BrainCircuit,
  Copy,
  FileText,
  Lightbulb,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Box,
  Cloud,
  Database,
  SplitSquareHorizontal,
  PenTool,
  Network
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('intro');

  const tabs = [
    { id: 'intro', label: '前言與理念', icon: BookOpen },
    { id: 'setup', label: '系統建置 (圖文版)', icon: Settings },
    { id: 'workflow', label: '日常實戰', icon: PlayCircle },
    { id: 'maintenance', label: '維護機制', icon: Wrench },
    { id: 'qa', label: '常見 Q&A', icon: HelpCircle }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header */}
      <header className="bg-indigo-900 text-white shadow-lg sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center gap-4">
          <div className="p-3 bg-indigo-800 rounded-lg">
            <BrainCircuit className="w-8 h-8 text-indigo-300" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Gemini x Obsidian 智能卡片盒筆記系統</h1>
            <p className="text-indigo-200 text-sm mt-1">團隊培訓與實務反思手冊 (v4.1) - 知識自動化升級版</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Navigation */}
        <nav className="md:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-2 flex flex-col gap-1 sticky top-28 z-10">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all font-medium
                  ${activeTab === tab.id 
                    ? 'bg-indigo-50 text-indigo-700 border-l-4 border-indigo-600' 
                    : 'text-slate-600 hover:bg-slate-50 border-l-4 border-transparent hover:border-slate-300'
                  }`}
              >
                <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-indigo-600' : 'text-slate-400'}`} />
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Content Area */}
        <div className="flex-1 min-w-0">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {activeTab === 'intro' && <IntroSection />}
            {activeTab === 'setup' && <SetupSection />}
            {activeTab === 'workflow' && <WorkflowSection />}
            {activeTab === 'maintenance' && <MaintenanceSection />}
            {activeTab === 'qa' && <QASection />}
          </div>
        </div>

      </main>
    </div>
  );
}

/* --- Sections Components --- */

function IntroSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <BookOpen className="text-indigo-600" />
          重拾咀嚼知識的真正力量
        </h2>
        <p className="text-slate-600 leading-relaxed text-lg mb-4">
          本手冊旨在建立一個真正實踐「知識內化」的專業知識體系。我們不僅要求系統的高效率，更強調知識工作者在其中的思辨與咀嚼。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
          <div className="flex items-center gap-2 text-slate-800 font-bold mb-3 text-lg">
            <PenTool className="w-6 h-6 text-indigo-500" />
            <span>迷思：過度追求自動化</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            我們常以為建立知識庫能坐享其成，讓 AI 幫我們總結論點。但結果往往是過往的論述依然需要不斷重複，資源依舊只是資源。因為方向錯了——我們貪圖了以小博大，卻忽略了微小學習與創作的累積。
          </p>
        </div>
        <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-xl">
          <div className="flex items-center gap-2 text-indigo-900 font-bold mb-3 text-lg">
            <Network className="w-6 h-6 text-indigo-600" />
            <span>正解：我們不是在記錄歸檔</span>
          </div>
          <p className="text-indigo-800 leading-relaxed">
            卡片盒筆記法的核心在於：<strong>「咀嚼知識並轉化成自己的語言、心得」</strong>。這是一場筆記讀書會與實踐運動，重點在於專業人員開始主動書寫。AI 不再是幫你總結的投機工具，而是幫你「排版標籤與尋找歷史關聯」的助理。
          </p>
        </div>
      </div>

      <div className="bg-slate-900 rounded-xl p-6 relative overflow-hidden shadow-lg mt-8">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <FileText className="w-32 h-32 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white mb-3 relative z-10 flex items-center gap-2">
          <Lightbulb className="text-amber-400" /> 新手引導版型：實務反思卡片
        </h3>
        <p className="text-slate-300 text-sm mb-4 relative z-10">
          這是一套低阻力輸出的框架，你可以將以下內容存為模板。請親自寫下 What, So What, Now What，剩下的排版與連結交給 AI。
        </p>
        <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm text-slate-300 relative z-10 overflow-x-auto border border-slate-700">
          <p className="text-emerald-400">---</p>
          <p>tags: [領域標籤]</p>
          <p>date: YYYY-MM-DD</p>
          <p>source: 書名 / 課程 / 文章</p>
          <p className="text-emerald-400">---</p>
          <p className="text-blue-300 mt-2"># 標題：請用「一句完整的結論或主張」來命名</p>
          <p className="mt-2 text-amber-200">## 📥 1. 知識匯入 (What - 我讀到了什麼？)</p>
          <p className="text-slate-400 pl-4">{`> 引述最打動我的一個觀念，或貼上金句。`}</p>
          <p className="mt-2 text-amber-200">## 🧠 2. 實務聯想與反思 (So What - 這有什麼意義？)</p>
          <p className="text-slate-400 pl-4">{`> 連結經驗：讓我聯想到了哪個實務現場的困境？`}</p>
          <p className="text-slate-400 pl-4">{`> 自我覺察：這解釋了我過去的什麼盲點？`}</p>
          <p className="mt-2 text-amber-200">## 🚀 3. 未來應用與放置 (Now What - 接下來怎麼用？)</p>
          <p className="text-slate-400 pl-4">{`> 具體行動：我可以在未來的哪種會議中用上？`}</p>
          <p className="text-slate-400 pl-4">{`> 知識定位：這應該跟哪些既有的筆記連結起來？`}</p>
        </div>
      </div>
    </div>
  );
}

function SetupSection() {
  const [checked, setChecked] = useState({});
  const [expandedPhase, setExpandedPhase] = useState(1);

  const toggleCheck = (id) => {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const phases = [
    {
      id: 1,
      icon: Cloud,
      title: '第一階段：建立核心地圖 (MOC)',
      color: 'blue',
      tasks: [
        { id: 'p1_1', text: '開啟電腦版 Gemini，確保模型為「思考型 (Thinking)」，絕對不能是快捷型。' },
        { id: 'p1_2', text: '貼上指令：「請依照附件幫我打造專屬於我的 MOC 地圖與標籤...」並上傳你的專業大綱。' },
        { id: 'p1_3', text: '將生成的結果點選「匯出至 Google 文件」，並精準命名為「Obsidian_MOC_主目錄」。' }
      ],
      images: [
        { src: 'https://i.ibb.co/JF0vJL57/1-AI-MOC.jpg', alt: '1先請AI設定MOC(提醒不要使用快捷模式)' },
        { src: 'https://i.ibb.co/5WChBwQ3/2-GOOGLE.jpg', alt: '2把生成後的內容先匯出到GOOGLE文件再做修改' }
      ]
    },
    {
      id: 2,
      icon: Database,
      title: '第二階段：知識源設定 (NotebookLM)',
      color: 'emerald',
      tasks: [
        { id: 'p2_1', text: '進入 Google NotebookLM，新建一個筆記本。' },
        { id: 'p2_2', text: '匯入剛才存好的 Google 文件。' },
        { id: 'p2_3', text: '將該來源釘選並明確命名為「Obsidian_MOC_主目錄」。' }
      ],
      images: [
        { src: 'https://i.ibb.co/s9W4tT9d/3-Notebook-LM.jpg', alt: '3匯入Notebook LM並設定檔名' }
      ]
    },
    {
      id: 3,
      icon: BrainCircuit,
      title: '第三階段：打造 Gem 主大腦 (關鍵步驟)',
      color: 'purple',
      tasks: [
        { id: 'p3_1', text: '回到 Gemini，點選左側「Gem管理員」新增 Gem。' },
        { id: 'p3_2', text: '將「附件二_Gem主大腦終極指令_v4.1」的內容全選貼入使用說明區塊。' },
        { id: 'p3_3', text: '⚠️ 在「相關資訊 / 知識庫」選項中，務必匯入剛剛在 NotebookLM 建好的資料。' },
        { id: 'p3_4', text: '命名並儲存。' }
      ],
      images: [
        { src: 'https://i.ibb.co/hFxYPY8n/4-AI-GEM.jpg', alt: '4回到AI去設定GEM' },
        { src: 'https://i.ibb.co/677fwsZF/5.jpg', alt: '5在這裡貼上指令' },
        { src: 'https://i.ibb.co/tp7QHvXF/6-LM.jpg', alt: '6這裡務必要記得匯入剛剛建好的LM' },
        { src: 'https://i.ibb.co/zhc09P1z/6-1.jpg', alt: '6 1這是設定完成的樣子 名子可以自己取' }
      ]
    },
    {
      id: 4,
      icon: Box,
      title: '第四階段：Obsidian (小黑) 初始設定',
      color: 'slate',
      tasks: [
        { id: 'p4_1', text: '打開 Obsidian，建立新的本地資料夾 (Vault)。' },
        { id: 'p4_2', text: '新增至少兩個資料夾：「原礦」(存放原文) 與「卡片」(存放觀點)。' },
        { id: 'p4_3', text: '安裝並啟用「Waypoint」或「Dataview」外掛 (用於後續產生目錄清單)。' }
      ],
      images: [
        { src: 'https://i.ibb.co/wZS1w6m6/8-Obsidian.jpg', alt: '8Obsidian安裝好以後 選擇本地資料夾 新增資料夾 做出原礦和卡片資料夾' },
        { src: 'https://i.ibb.co/9d5vZp1/9.jpg', alt: '9在資料夾新增新的文檔' }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <Settings className="text-indigo-600" />
          系統零到一建置教學
        </h2>
        <p className="text-slate-600">前三個階段為「一次性設定」，請依照圖文步驟完成建置。點選各階段展開圖文說明。</p>
      </div>

      <div className="space-y-4">
        {phases.map((phase) => (
          <div key={phase.id} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <button 
              className={`w-full px-6 py-4 flex items-center justify-between focus:outline-none transition-colors
                ${expandedPhase === phase.id ? `bg-${phase.color}-50 border-b border-${phase.color}-100` : 'bg-white hover:bg-slate-50'}`}
              onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg bg-white border border-slate-200 shadow-sm`}>
                  <phase.icon className={`w-6 h-6 text-${phase.color}-600`} />
                </div>
                <h3 className={`font-bold text-lg ${expandedPhase === phase.id ? `text-${phase.color}-900` : 'text-slate-700'}`}>
                  {phase.title}
                </h3>
              </div>
              {expandedPhase === phase.id ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
            </button>

            {expandedPhase === phase.id && (
              <div className="p-6 bg-white animate-in slide-in-from-top-2 duration-300">
                <ul className="space-y-3 mb-6">
                  {phase.tasks.map(task => (
                    <li 
                      key={task.id}
                      className="flex items-start gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors"
                      onClick={() => toggleCheck(task.id)}
                    >
                      <div className="mt-0.5 flex-shrink-0">
                        {checked[task.id] ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-300" />
                        )}
                      </div>
                      <span className={`${checked[task.id] ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                        {task.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {phase.images && phase.images.length > 0 && (
                  <div className={`grid gap-6 mt-6 pt-6 border-t border-slate-100 ${phase.images.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                    {phase.images.map((img, idx) => (
                      <div key={idx} className="flex flex-col gap-2">
                        <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                          <img src={img.src} alt={img.alt} className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500" />
                        </div>
                        <p className="text-xs text-center text-slate-500 font-medium">{img.alt}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <PlayCircle className="text-indigo-600" />
          日常實戰流程
        </h2>
        <p className="text-slate-600">一次性設定完成後，每天的日常操作只需這 3 個動作，回歸「以書寫與反思為主」的節奏。</p>
      </div>

      <div className="flex flex-col md:flex-row gap-3 mb-6">
        {[1, 2, 3].map(step => (
          <button
            key={step}
            onClick={() => setActiveStep(step)}
            className={`flex-1 p-4 rounded-xl border text-center font-bold transition-all flex flex-col items-center gap-2
              ${activeStep === step 
                ? 'bg-indigo-600 text-white border-indigo-700 shadow-md transform scale-105' 
                : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'
              }`}
          >
            <span className="text-sm opacity-80 font-normal">動作 {step}</span>
            <span>{step === 1 ? '深度書寫 (Input)' : step === 2 ? 'AI 轉化 (Copy)' : '歸檔連結 (Paste)'}</span>
          </button>
        ))}
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 min-h-[400px]">
        
        {/* Step 1 */}
        {activeStep === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
              <h3 className="text-2xl font-bold text-slate-800">深度反思與書寫 (Input)</h3>
            </div>
            <p className="text-slate-600 text-lg">
              打開設定好的 Gem 主大腦，輸入你今天的小想法或實務論述（長短不拘）。請務必親自寫下 What, So What, Now What，完成後送出給 AI。
            </p>
            <div className="flex flex-col gap-2">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                <img src="https://i.ibb.co/1ttW0qZh/7.jpg" alt="7開始使用 輸入小想法或論述(長短都可)" className="w-full h-auto" />
              </div>
              <p className="text-xs text-center text-slate-500 font-medium">7開始使用 輸入小想法或論述(長短都可)</p>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {activeStep === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
              <h3 className="text-2xl font-bold text-slate-800">交由 AI 排版與找連結 (Copy)</h3>
            </div>
            <p className="text-slate-600 text-lg">
              等待幾秒，Gemini 會展現魔法。它會先生成 1 張 100% 不竄改的<strong className="text-slate-800">「文獻原礦卡」</strong>，接著梳理出 1~3 張帶有雙向連結的<strong className="text-slate-800">「概念結晶卡」</strong>，全部包裝在黑色程式碼區塊中。
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-slate-800 rounded-xl p-4 font-mono text-xs text-slate-300 relative border border-slate-700 shadow-inner">
                  <div className="absolute right-2 top-2 bg-slate-600 text-white p-1.5 rounded cursor-pointer flex items-center gap-1 text-[10px]">
                    <Copy className="w-3 h-3" /> 全選複製
                  </div>
                  <p className="text-emerald-400">---</p>
                  <p>tags: [原始素材, #相關標籤]</p>
                  <p>date: 2026-03-29</p>
                  <p className="text-emerald-400">---</p>
                  <p className="text-blue-300 mt-2 font-bold"># 20260329-實務反思-原礦</p>
                  <p className="mt-2 text-amber-200">## 📖 原始學習與輸入內容</p>
                  <p className="mt-2 text-slate-400">---</p>
                  <p className="text-slate-400">(100% 完整保留您的原始打字內容，絕不腦補與刪減，穩穩包覆在橫線內。)</p>
                  <p className="text-slate-400">---</p>
                </div>
                <p className="text-sm text-center font-medium text-slate-600">▲ 原礦卡：保護您的心血原貌</p>
                <div className="flex flex-col gap-2">
                  <img src="https://i.ibb.co/ZzvvSGvC/10-AI.jpg" alt="10AI會把你的原文變成原礦 複製後放原礦" className="rounded-lg border shadow-sm" />
                  <p className="text-[10px] text-center text-slate-500">10AI會把你的原文變成原礦 複製後放原礦</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-slate-800 rounded-xl p-4 font-mono text-xs text-slate-300 relative border border-slate-700 shadow-inner">
                   <div className="absolute right-2 top-2 bg-slate-600 text-white p-1.5 rounded cursor-pointer flex items-center gap-1 text-[10px]">
                    <Copy className="w-3 h-3" /> 全選複製
                  </div>
                  <p className="text-emerald-400">---</p>
                  <p>tags: [#系統觀, #青少年工作]</p>
                  <p>date: 2026-03-29</p>
                  <p className="text-emerald-400">---</p>
                  <p className="text-blue-300 mt-2 font-bold"># 20260329-實務反思-抗拒即是系統症狀</p>
                  <p className="mt-2 text-amber-200">## 💡 實務反思結晶</p>
                  <p className="text-slate-400">將您的散亂思緒結構化條列...</p>
                  <p className="mt-2 text-amber-200">## 🔗 知識網絡關聯</p>
                  <p className="text-slate-400">關聯：[[家庭系統理論]], [[創傷知情照護]]</p>
                </div>
                 <p className="text-sm text-center font-medium text-slate-600">▲ 結晶卡：自動化標籤與雙向連結</p>
                 <div className="flex flex-col gap-2">
                   <img src="https://i.ibb.co/9mdr0qbM/11-1-2.jpg" alt="11會形成1到2個卡片筆記" className="rounded-lg border shadow-sm" />
                   <p className="text-[10px] text-center text-slate-500">11會形成1到2個卡片筆記</p>
                 </div>
              </div>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex items-start gap-3 mt-4">
              <Lightbulb className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800"><strong>v4.1 更新秘訣：</strong> 你只需點擊程式碼區塊右上角的「複製」，就能把檔名與 YAML 一次完美帶走！</p>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {activeStep === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
             <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
              <h3 className="text-2xl font-bold text-slate-800">手動貼上與歸檔 (Paste & File)</h3>
            </div>
            <p className="text-slate-600 text-lg">這是守護知識純淨度的「最後一哩路」。<strong>記得每一張卡片都是獨立的文件！</strong></p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <ol className="space-y-5 relative before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-indigo-100 pl-8">
                <li className="relative">
                  <div className="absolute -left-[37px] top-1 w-6 h-6 bg-white border-2 border-indigo-500 rounded-full flex items-center justify-center text-[10px] font-bold text-indigo-600">1</div>
                  <strong className="text-slate-800">打開 Obsidian 新建筆記</strong><br/>按 `Ctrl+N` (Mac: `Cmd+N`) 建立。
                </li>
                <li className="relative">
                  <div className="absolute -left-[37px] top-1 w-6 h-6 bg-white border-2 border-indigo-500 rounded-full flex items-center justify-center text-[10px] font-bold text-indigo-600">2</div>
                  <strong className="text-slate-800">直接貼上全區塊</strong><br/>完美的 YAML 表頭、標籤與雙向連結都會自動成形。
                </li>
                <li className="relative">
                  <div className="absolute -left-[37px] top-1 w-6 h-6 bg-white border-2 border-indigo-500 rounded-full flex items-center justify-center text-[10px] font-bold text-indigo-600">3</div>
                  <strong className="text-slate-800">設定標題</strong><br/>尋找筆記裡的第一個 `# 標題`，將它複製貼到最頂部的檔案名稱。
                </li>
                <li className="relative">
                  <div className="absolute -left-[37px] top-1 w-6 h-6 bg-indigo-500 border-2 border-indigo-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white">4</div>
                  <strong className="text-slate-800">分類歸檔</strong><br/>拖曳到左側的「原礦」或「卡片」資料夾中。完成知識內化循環！🎉
                </li>
              </ol>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-sm font-bold text-slate-700">📌 步驟示範：分離卡片與複製檔名</p>
                  <div className="flex flex-col gap-1">
                    <img src="https://i.ibb.co/sdQC6F2W/12-2.jpg" alt="12依照一張卡片一個 卡片數量(至少2)貼上檔" className="rounded-lg border shadow-sm w-full" />
                    <p className="text-[10px] text-center text-slate-500">12依照一張卡片一個 卡片數量(至少2)貼上檔</p>
                  </div>
                  <div className="flex flex-col gap-1 mt-2">
                    <img src="https://i.ibb.co/rf1KQySB/13-AI.jpg" alt="13AI會設定好名稱在下面 請直接修改複製" className="rounded-lg border shadow-sm w-full" />
                    <p className="text-[10px] text-center text-slate-500">13AI會設定好名稱在下面 請直接修改複製</p>
                  </div>
                </div>
                
                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <p className="text-sm font-bold text-slate-700">✨ 成果總覽：井然有序的知識庫</p>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <img src="https://i.ibb.co/jkMLt625/15.jpg" alt="15左側可以整理文件檔案資料夾" className="rounded-lg border shadow-sm" />
                      <p className="text-[10px] text-center text-slate-500">15左側可以整理文件檔案資料夾</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <img src="https://i.ibb.co/cc1h95Rb/14.jpg" alt="14最後的樣子" className="rounded-lg border shadow-sm" />
                      <p className="text-[10px] text-center text-slate-500">14最後的樣子</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex justify-between mt-4">
        <button 
          onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
          disabled={activeStep === 1}
          className="px-4 py-2 text-indigo-600 disabled:text-slate-300 font-medium hover:bg-indigo-50 rounded-lg transition-colors"
        >
          上一步
        </button>
        <button 
          onClick={() => setActiveStep(prev => Math.min(3, prev + 1))}
          disabled={activeStep === 3}
          className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg disabled:opacity-50 font-medium flex items-center gap-2 transition-colors shadow-sm"
        >
          {activeStep === 3 ? '完成流程' : '下一步'} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function MaintenanceSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <Wrench className="text-indigo-600" />
          人工維護與有機更新機制
        </h2>
        <p className="text-slate-600">
          因為 AI 平常看不到你電腦裡產生了什麼新筆記，如果你不偶爾餵它吃最新的地圖，它就無法幫你把新筆記牽起連結。這是一套動態的有機生長機制。
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Scenario 1 */}
        <div className="bg-white border-2 border-blue-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
          <div className="bg-blue-50 px-5 py-4 border-b border-blue-100">
            <h3 className="text-lg font-bold text-blue-900">情境一：更新筆記大綱</h3>
            <p className="text-xs text-blue-700 mt-1">讓 AI 認識你的新文章</p>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md font-medium">頻率：每週或累積 5-10 篇時</span>
            </div>
            <div className="space-y-3 mt-auto text-sm text-slate-700">
              <div className="flex gap-2">
                <span className="font-bold text-blue-500">1.</span>
                <span>去 Obsidian 產生清單 (如使用 Waypoint外掛)，全選並複製。</span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-blue-500">2.</span>
                <span>打開雲端的 <code>Obsidian_MOC_主目錄</code> 文件。</span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-blue-500">3.</span>
                <span>找到 <code>## 🔗 核心筆記索引</code>，覆蓋貼上最新清單。</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scenario 2 */}
        <div className="bg-white border-2 border-amber-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
          <div className="bg-amber-50 px-5 py-4 border-b border-amber-100">
            <h3 className="text-lg font-bold text-amber-900">情境二：擴充標籤庫</h3>
            <p className="text-xs text-amber-700 mt-1">找不到標籤才給 (Taxonomy)</p>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <div className="mb-4">
              <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-md font-medium">頻率：當新概念突破既有分類時</span>
            </div>
            <div className="space-y-3 mt-auto text-sm text-slate-700">
              <div className="flex gap-2">
                <span className="font-bold text-amber-500">1.</span>
                <span>當 AI 發現無法歸類，會在筆記底部提示：<code>&gt; 💡 建議新增標籤：#家屬工作</code></span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-amber-500">2.</span>
                <span>打開雲端的 <code>Obsidian_MOC_主目錄</code> 文件。</span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-amber-500">3.</span>
                <span>找到 <code>## 🏷️ 標籤庫</code>，換行打上 <code>- 家屬工作</code> 完成擴充。</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scenario 3 (New in v4.1) */}
        <div className="bg-white border-2 border-emerald-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
          <div className="bg-emerald-50 px-5 py-4 border-b border-emerald-100">
            <div className="flex items-center gap-2">
              <SplitSquareHorizontal className="w-5 h-5 text-emerald-600" />
              <h3 className="text-lg font-bold text-emerald-900">情境三：讓 MOC 分裂</h3>
            </div>
            <p className="text-xs text-emerald-700 mt-1">知識湧現與自然代謝 (The Split)</p>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <div className="mb-4">
              <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-md font-medium">頻率：單一分類擁擠不堪 (逾50篇) 時</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mt-2">
              當一個 MOC 變得太笨重，你會感到難以尋找連結。這時你應該把這個主題（例如：<code>創傷知情照護</code>）獨立抽出來，開一份全新的 <code>MOC_創傷知情照護</code>。這就是由下而上知識湧現、自然代謝的過程。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QASection() {
  const [openQ, setOpenQ] = useState(0);

  const faqs = [
    {
      q: "Q1：為什麼系統要求我們「先寫好反思手稿」而不是讓 AI 直接幫我們總結論點？",
      a: "這正是本系統的核心命題。卡片盒筆記法的靈魂在於「咀嚼知識並轉化成自己的語言」。如果讓 AI 代勞，我們就失去了將外在資訊內化為專業強度的過程。這是一場社會工作者建構個人專業論述的實踐。我們利用 AI 來做它最擅長的「排版、關聯、上標籤」，讓人腦做最擅長的「覺察與反思」。"
    },
    {
      q: "Q2：為什麼 AI 產生的雙向連結 [[ ]] 在 Obsidian 裡面是灰色的（空連結）？",
      a: "正常現象，這代表知識的新芽！空連結代表 AI 認為您的筆記發展到這裡，延伸出了一個「MOC 裡還沒有的潛在概念」。這代表您未來可以朝這個方向探索並新增一篇筆記（在 Obsidian 點它一下就自動建立了）。"
    },
    {
      q: "Q3：為什麼原本的 Callout（折疊區塊）在 v4.1 被改掉了？",
      a: "為了極致的穩定性。在舊版 (v4.0 以前) 常常因為手寫稿裡的多段落換行，導致 Obsidian 的 Markdown 折疊區塊破裂排版大亂。現在 v4.1 直接使用 `# 標題` 搭配 `---` 橫線裝載原礦卡，就算有幾萬個換行也能穩穩咬住，絕不破版。"
    },
    {
      q: "Q4：為什麼 AI 還是會略為修改我「原礦卡」的內文？不是有設定鐵律嗎？",
      a: "AI 具備自動修正文章的「本能衝動」。但 v4.1 指令已透過 `# 📖 原始學習與輸入內容` 將其當作完全不可褻玩的神聖區域。若極少數情況下 AI 還是擅自潤飾了您的原文，請退回重產並提醒它維持 100% 重現。"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <HelpCircle className="text-indigo-600" />
          常見 Q&A 與除錯 (Troubleshooting)
        </h2>
        <p className="text-slate-600">遇到問題別慌張，這裡有最新 v4.1 版常見的疑難排解。</p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border rounded-xl overflow-hidden transition-all duration-300 ${
              openQ === index ? 'border-indigo-300 shadow-md bg-indigo-50/30' : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <button 
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              onClick={() => setOpenQ(openQ === index ? -1 : index)}
            >
              <span className="font-bold text-slate-800 pr-8">{faq.q}</span>
              {openQ === index ? (
                <ChevronUp className="w-5 h-5 text-indigo-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
              )}
            </button>
            
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openQ === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pt-2 border-t border-indigo-100 text-slate-600 leading-relaxed font-medium">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
