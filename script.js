'use strict';
const SITE_URL='https://nf-jinja.vercel.app/';
const fortunes=[
 {rank:'大吉',weight:12,lines:['吉田の風、汝に味方す。思い切った一歩が福を呼ぶ。','積み重ねた日々が実る時。今日は胸を張って進むべし。','運気は上々。迷うよりも、まず動くが吉。']},
 {rank:'中吉',weight:20,lines:['穏やかな追い風あり。小さな挑戦が大きな縁を結ぶ。','良き兆しあり。慌てず進めば道は開ける。','思わぬ出会いに福あり。いつもの道を少し外れてみよ。']},
 {rank:'吉',weight:28,lines:['平穏こそ幸運の証。今日の一歩を大切に。','小さな喜び、そこかしこにあり。見落とすことなかれ。','焦らずとも花は咲く。己の歩幅で進むべし。']},
 {rank:'小吉',weight:20,lines:['小さな幸運が近づく兆し。身近な人を大切に。','急がば回れ。丁寧なひと手間が運を呼ぶ。','些細な発見に福あり。寄り道もまた一興。']},
 {rank:'末吉',weight:14,lines:['今は種まきの時。焦らず育てれば花開く。','思い通りにいかぬ日も、次の好機への準備なり。','静かに運気は上向く。身の回りを整えるべし。']},
 {rank:'凶',weight:6,lines:['今日は慎重が吉。無理をせず、明日に備えよ。','思わぬ難あり。されど笑って越えれば厄も福となる。','道が塞がるなら、ひと休み。運命はいつでも引き直せる。']}
];
const categories={
 university:{title:'大学生みくじ',details:{
 '単位運':['出席確認は忘れずに。シラバスを読む者に福あり。','レポートは早めに着手せよ。締切前夜の神頼みは禁物。','思いがけぬ救済の兆し。されど油断は大敵。','履修登録の見直しが吉。単位は自ら掴むもの。','一限に起きられたなら、それだけで今日は大金星。','楽単という噂、鵜呑みにするなかれ。'],
 '恋愛運':['鴨川の風に良縁あり。まずは挨拶から。','百万遍の交差点、思いがけぬ再会の兆し。','駆け引きよりも素直な一言が吉。','サークルの帰り道、会話に花が咲くかも。','既読の速さに一喜一憂するなかれ。','気になる人には学祭を口実に声をかけよ。'],
 '金運':['模擬店の誘惑強し。財布の紐を忘れるな。','学食の定食に小さな幸せあり。','今月の残高を確かめるべし。未来の己が感謝する。','衝動買いは一晩寝かせてから。','思わぬ割引に出会う兆し。','おごり運あり。されど期待しすぎるなかれ。'],
 '就活運':['自己分析に迷うなら、友に聞くが吉。','面接では飾らぬ言葉が相手に届く。','焦るなかれ。道はひとつにあらず。','思いがけぬ業界に縁あり。','履歴書の誤字に注意せよ。','早めの準備が未来の余裕を生む。'],
 '研究運':['先行研究は思わぬところに眠る。','教授への相談、吉。抱え込むことなかれ。','図書館の奥にひらめきあり。','データのバックアップこそ最強のお守り。','問いを磨けば、答えも近づく。','締切を逆算せよ。未来の自分を救うべし。']},oracles:['自由の学風、自由には責任も伴う。','単位は落としても、希望は落とすな。','時計台は今日も立つ。汝も堂々と立つべし。','吉田の地にて学び、遊び、よく眠れ。','締切は待たぬ。されど道は開ける。','祭りの四日間、今日の思い出を大切に。'],lucky:['ラッキーアイテム：学生証','ラッキースポット：時計台前','ラッキーアイテム：書きかけのノート','ラッキースポット：鴨川のほとり','ラッキーアイテム：温かいお茶','ラッキースポット：学園祭の模擬店']},
 student:{title:'学生みくじ',details:{
 '勉強運':['分からない問題こそ成長のチャンス。','今日覚えたことを、誰かに説明してみよう。','少しずつの積み重ねが大きな力になる。','机の上を片付けると集中力アップ。','苦手な教科にも新しい発見がありそう。','休憩も勉強のうち。無理せず進もう。'],
 'テスト運':['最後の見直しが運命を変えるかも。','焦らず問題文を最後まで読もう。','難問は一度飛ばして次に進むのが吉。','いつもの実力を信じて大丈夫。','早寝が明日の味方になる。','準備した分だけ自信につながる。'],
 '友達運':['自分から声をかけると楽しい一日になりそう。','ありがとうの一言で笑顔が広がる。','久しぶりの友達に連絡してみよう。','新しい友達との出会いの予感。','相手の話をじっくり聞くと吉。','ちょっとした親切が幸運を呼ぶ。'],
 '恋愛運':['笑顔の挨拶がいちばんのお守り。','好きな人の良いところを見つけてみよう。','焦らず自然体でいるのが吉。','共通の話題が距離を縮めるかも。','まずは友達として仲良くなると吉。','自分らしさを大切にしよう。'],
 '部活・趣味運':['練習の成果が少しずつ現れる兆し。','新しいことに挑戦してみよう。','仲間を応援すると自分にも力が湧く。','失敗しても大丈夫。次の一歩が大切。','好きなことに夢中になれる日。','基本に戻ると新しい発見がある。']},oracles:['今日の「できた！」を大切に。','努力は目に見えなくても積み重なっている。','人と比べず、昨日の自分と比べよう。','小さな勇気が大きな一歩になる。','よく学び、よく遊び、よく眠ろう。','笑顔ひとつで運気上昇。'],lucky:['ラッキーアイテム：お気に入りのペン','ラッキーカラー：朱色','ラッキーアイテム：新しいノート','ラッキースポット：図書室','ラッキーアイテム：水筒','ラッキーカラー：若草色']},
 general:{title:'一般みくじ',details:{
 '仕事運':['目の前のことを丁寧に。信頼はそこから生まれる。','新たな縁が次の道を開く兆し。','抱え込まず、周囲を頼るが吉。','小さな改善が大きな成果を呼ぶ。','焦らず順序立てて進めば吉。','いつもと違う視点に発見あり。'],
 '金運':['必要なものを見極める目が冴える日。','無理な出費を控え、蓄えを大切に。','身近な楽しみにこそ豊かさあり。','財布の中を整えると気分も晴れる。','小さな節約が後の福となる。','思わぬお得な出会いの兆し。'],
 '健康運':['よく食べ、よく眠ることが何よりのお守り。','散歩に出れば心も軽やかに。','疲れを感じたら早めに休むべし。','深呼吸ひとつ、心に余白を。','無理せず自分のペースを守るが吉。','季節の変わり目、身体をいたわろう。'],
 '人間関係運':['久しぶりの便りに喜びあり。','感謝は言葉にして伝えるべし。','相手の立場に寄り添えば縁深まる。','何気ない会話が福を運ぶ。','無理に合わせず、自然体が吉。','新しい出会いを楽しむ余裕を。'],
 '家庭・暮らし運':['家の中を整えると心も晴れる。','家族や大切な人との時間を慈しもう。','いつもの食卓に小さな幸せあり。','休息を取ることも大切な務め。','身近な人への気遣いが福を招く。','懐かしい場所を訪ねると吉。']},oracles:['急がば回れ。静かな歩みにこそ福あり。','今日という日を、丁寧に生きるべし。','人との縁を大切に。福は巡り巡って訪れる。','満ち足りた心こそ、何よりの宝。','一日一善。小さな親切が明日を照らす。','吉田の杜より、穏やかな幸を祈る。'],lucky:['ラッキーアイテム：手ぬぐい','ラッキーカラー：深緑','ラッキースポット：木陰のある道','ラッキーアイテム：温かいお茶','ラッキーカラー：生成り','ラッキーアイテム：お気に入りの本']}
};
const screens=[...document.querySelectorAll('.screen')];
let current=null;let drawTimer=null;let toastTimer=null;
const pick=a=>a[Math.floor(Math.random()*a.length)];
function show(id){screens.forEach(s=>{const active=s.id===id;s.hidden=!active;s.classList.toggle('active',active)});window.scrollTo({top:0,behavior:'instant'});const heading=document.querySelector('#'+id+' h1, #'+id+' h2');if(heading){heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true})}}
function roll(){const n=Math.random()*fortunes.reduce((sum,f)=>sum+f.weight,0);let t=0;return fortunes.find(f=>(t+=f.weight)>n)||fortunes.at(-1)}
function draw(category){if(!categories[category])return;clearTimeout(drawTimer);show('drawing');drawTimer=setTimeout(()=>{const data=categories[category],fortune=roll(),details=Object.entries(data.details).map(([label,values])=>({label,text:pick(values)}));current={category,type:data.title,rank:fortune.rank,summary:pick(fortune.lines),details,oracle:pick(data.oracles),lucky:pick(data.lucky),number:Math.floor(Math.random()*99)+1};render();show('result')},1600)}
function render(){const r=current;document.getElementById('fortune-number').textContent='第'+String(r.number).padStart(2,'0')+'番';document.getElementById('fortune-type').textContent=r.type;document.getElementById('fortune-rank').textContent=r.rank;document.getElementById('fortune-summary').textContent=r.summary;document.getElementById('fortune-oracle').textContent=r.oracle;document.getElementById('fortune-lucky').textContent=r.lucky;const box=document.getElementById('fortune-details');box.replaceChildren();for(const d of r.details){const item=document.createElement('div');item.className='detail';const label=document.createElement('span');label.className='detail-label';label.textContent=d.label;const value=document.createElement('span');value.className='detail-text';value.textContent=d.text;item.append(label,value);box.append(item)}}
function shareText(){if(!current)return'';const r=current;return `⛩️ えぬゑふ神社で「${r.type}」を引きました！\n\n【${r.rank}】${r.summary}\n神託：${r.oracle}\n\n#えぬゑふ神社 #NF2026\n${SITE_URL}`}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2400)}
document.getElementById('start-btn').addEventListener('click',()=>show('choose'));
document.querySelectorAll('[data-category]').forEach(b=>b.addEventListener('click',()=>draw(b.dataset.category)));
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.go)));
document.getElementById('again-btn').addEventListener('click',()=>show('choose'));
document.getElementById('share-btn').addEventListener('click',()=>{if(!current)return;window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(shareText()),'_blank','noopener,noreferrer')});
document.getElementById('copy-btn').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(shareText());toast('結果をコピーしました')}catch{toast('コピーできませんでした。Xでのシェアをお試しください')}});
