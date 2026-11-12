const guides={
'玻璃嚴重水垢':{t:'浴室清潔',s:'玻璃、陶瓷與一般磁磚才可考慮酸性除垢；天然石材、原木、無釉磚、石英磚與電鍍材質不可用。酸性產品勿與含氯除霉／漂白或其他清潔劑混用。',x:['讓玻璃完全乾燥，先在不顯眼處測試。','均勻噴上適用的玻璃／水垢清潔劑，依標示靜置。','用海綿畫圓輕刷後沖淨，再以刮水器與超細纖維布擦乾。'],n:'玻璃水垢清潔劑或檸檬酸、海綿、刮水器、超細纖維布、手套',p:'表面有刮傷、材質不明或清潔後仍無法改善時，請停止並洽專業清潔。',c:'每次沐浴後刮除水珠；每週做一次溫和微清潔並保持通風。',k:['浴室','浴室除霉']},
'浴室皂垢／輕度水垢':{t:'浴室清潔',s:'先看材質與標示；酸性除垢品不可用於天然石材、原木與無釉磚。',x:['沖掉鬆散污垢並擦至微乾。','使用適用的除垢或中性清潔品，依標示靜置。','用軟刷或海綿輕刷、沖淨並擦乾接縫與五金。'],n:'除垢劑或中性清潔劑、軟刷、海綿、超細纖維布',p:'材質不明、五金已腐蝕或污垢持續擴大時請找專業。',c:'洗後刮水、擦乾邊框並維持抽風。',k:['浴室']},
'浴室霉斑':{t:'浴室清潔',s:'先排除積水、潮濕或滲漏。戴手套、保持通風；含氯除霉品絕不可與檸檬酸、醋或其他清潔劑混用，也不要乾刷霉斑。',x:['用刮水器或抹布移除積水，找出潮濕來源。','依標示局部覆蓋除霉凝膠或磁磚縫清潔劑，靜置後擦除。','清水擦淨並完全乾燥，持續抽風或除濕。'],n:'除霉凝膠、磁磚縫清潔劑、手套、刮水器、除濕用品',p:'反覆發霉、範圍大、牆面鬆軟或疑似漏水時，應找水電／防水專業。',c:'洗澡後刮水，並每週巡查矽利康與角落。',k:['浴室','浴室除霉']},
'廚房重油污':{t:'廚房清潔',s:'食物接觸面最後一定要用清水擦淨；鋁、漆面、特殊塗層或材質不明處先測試。',x:['趁冷卻後清除可見油渣。','噴敷去油劑並依標示靜置；可拆零件依材質溫水浸泡。','用海綿或刷具輕刷、擦淨，食物接觸面再以清水擦拭。'],n:'廚房去油劑、中性萬用清潔劑、海綿、刷具、抹布、手套',p:'抽油煙機滴油、電器內部積油或油污影響電路時請找維修／清潔服務。',c:'重度烹調後擦拭爐台與牆面；濾網定期清洗。',k:['廚房','去油','大掃除']},
'排水慢／異味':{t:'設備異常',s:'先移除可見毛髮或食物殘渣；勿混用強酸、強鹼或含氯產品，也勿在完全堵塞時大量倒入化學品。',x:['戴手套拆洗濾網，清除可見雜物。','依位置使用適用的通管器或疏通／除臭品，遵照標示。','清水測試排水，回裝濾網並觀察是否回堵。'],n:'毛髮濾網、通管器、適用的疏通與除臭用品、手套',p:'硬物卡住、持續回堵、污水倒灌或完全堵塞時，請找水電。',c:'每週清濾網；廚房避免油脂與菜渣直接流入排水。',k:['通管','排水','居家修繕']},
'馬桶堵塞':{t:'馬桶堵塞',s:'污水接近溢出時先停止沖水、關閉進水閥；不要硬推異物或任意使用化學通管劑。',x:['停止沖水，移開周邊物品並戴手套。','水位安全後，用馬桶專用吸把穩定加壓，少量測試沖水。','恢復排水後清潔消毒周邊，工具洗淨晾乾。'],n:'馬桶吸把、防水手套、吸水布、消毒／清潔用品',p:'水位持續上升、反覆堵塞、異物掉入或其他排水口回堵時請找水電。',c:'馬桶只沖可分解衛生紙；濕紙巾與衛生棉應丟垃圾桶。',k:['通管','居家修繕']},
'入住／退租全屋清潔':{t:'搬家與租屋',s:'先拍照記錄屋況；清潔前確認排水、漏水、霉斑與插座，電器周邊避免大量用水。',x:['先做排水、漏水與霉斑檢查，清空雜物並從高到低除塵。','分區清潔：廚房去油、浴室除垢／除霉、地板用適用中性清潔劑。','檢查排水、通風與垃圾清運，保留前後紀錄。'],n:'全屋清潔包、去油劑、除垢劑、中性清潔劑、拖把、海綿、收納／打包用品',p:'發現漏水、牆面霉害、電線受損或嚴重排水問題時請先請房東與專業單位確認。',c:'建立每週浴室、每月廚房與排水濾網的保養清單。',k:['租屋清潔','大掃除']},
'颱風漏水／停電':{t:'防災備品',s:'電線受損、積水接近插座或有觸電疑慮時不要碰觸；優先遠離危險並依官方指示聯絡相關單位。',x:['先確認人身安全與警報，手電筒照明並備妥飲水。','漏水處以容器、吸水布接水；電器周邊保持乾燥。','雨後通風、除濕並巡查霉味與結構損壞。'],n:'手電筒、乾電池、防災包、儲水容器、吸水布、防水手套、除濕用品',p:'淹水、電線損壞、天花板明顯滲漏或結構受損時，立即尋求專業／公部門協助。',c:'定期檢查電池、清理排水孔並補足防災物資。',k:['防颱與緊急備用品','停電應急','照明與電力設備']}};
Object.assign(flow,{浴室清潔:{q:'浴室主要想解決什麼？',a:['玻璃嚴重水垢','浴室皂垢／輕度水垢','浴室霉斑','排水慢／異味']},廚房清潔:{q:'廚房目前最困擾什麼？',a:['廚房重油污','排水慢／異味']},設備異常:{q:'想先處理哪種異常？',a:['排水慢／異味','馬桶堵塞']},搬家與租屋:{q:'現在需要哪種任務？',a:['入住／退租全屋清潔','廚房重油污','浴室霉斑']},防災備品:{q:'目前最需要準備或處理什麼？',a:['颱風漏水／停電','馬桶堵塞']}});
function choose(n){current=n;ans.innerHTML='';q.textContent='② '+flow[n].q;flow[n].a.forEach(a=>{let b=document.createElement('button');b.className='choice';b.textContent=a;b.onclick=()=>result(a);ans.append(b)});s2.className='step show';s2.scrollIntoView({behavior:'smooth'})}
function getRecommendations(topic,answer){let g=guides[answer],tags=g?g.k:({浴室清潔:['浴室','浴室除霉'],居家修繕:['居家修繕','家具組裝'],租屋清潔:['租屋清潔','大掃除'],防災備品:['停電應急','防颱與緊急備用品','照明與電力設備']}[topic]||[]),rank={必要:0,搭配:1,延伸:2};return p.filter(x=>tags.some(t=>x[5].includes(t)||x[6].includes(t))||x[6].includes(answer)).sort((a,b)=>(rank[a[7]]??9)-(rank[b[7]]??9)).slice(0,8)}
function result(a){let g=guides[a],recommended=getRecommendations(current,a);rt.textContent=(g?g.t:current)+'｜'+a;if(!g){rb.innerHTML='<p>請依商品標示操作並先局部測試。</p>';s3.className='step show';return}rb.innerHTML='<div class="guide-meta"><div class="guide-box warning"><h4>安全提醒</h4><p>'+g.s+'</p></div><div class="guide-box"><h4>三步驟處理</h4><ol>'+g.x.map(x=>'<li>'+x+'</li>').join('')+'</ol></div><div class="guide-box"><h4>必要商品</h4><p>'+g.n+'</p></div><div class="guide-box professional"><h4>何時應找專業</h4><p>'+g.p+'</p></div><div class="guide-box care"><h4>下次提醒</h4><p>'+g.c+'</p></div></div><h4>小北推薦商品名單</h4><ul class="recommend-products">'+(recommended.length?recommended.map(x=>'<li>'+x[0]+'（'+x[8]+'｜'+x[2]+'）</li>').join(''):g.n.split('、').map(x=>'<li>'+x+'</li>').join(''))+'</ul><p class="source-note">玻璃水垢流程參考：<a href="https://www.cleanclean.tw/blog/posts/severe-glass-limescale-buildup" target="_blank" rel="noopener">淨淨｜玻璃嚴重水垢清潔說明</a>。</p>';s3.className='step show';s3.scrollIntoView({behavior:'smooth'})}
['廚房清潔','搬家與租屋','設備異常'].forEach(n=>{let b=document.createElement('button');b.className='choice';b.textContent=n;b.onclick=()=>choose(n);sc.append(b)});

/* 將推薦商品改為可快速掃讀的卡片，並帶入商品資料中的售價與庫存。 */
function productCards(items,fallback){if(!items.length)return '<div class="product-fallback">'+fallback.split('、').map(x=>'<span>'+x+'</span>').join('')+'</div>';return '<div class="product-cards">'+items.map(x=>'<article class="product-card"><p class="product-card__location">'+x[1]+'區 · '+x[9]+'</p><h5>'+x[0]+'</h5><p class="product-card__type">'+x[8]+'</p><div class="product-card__bottom"><strong>NT$'+Number(x[11]).toLocaleString('zh-TW')+'</strong><span>庫存 '+x[12]+'</span></div></article>').join('')+'</div>'}
function result(a){let g=guides[a],recommended=getRecommendations(current,a);rt.textContent=(g?g.t:current)+'｜'+a;if(!g){rb.innerHTML='<p>請依商品標示操作並先局部測試。</p>';s3.className='step show';return}rb.innerHTML='<div class="guide-meta"><div class="guide-box warning"><h4>安全提醒</h4><p>'+g.s+'</p></div><div class="guide-box"><h4>三步驟處理</h4><ol>'+g.x.map(x=>'<li>'+x+'</li>').join('')+'</ol></div><div class="guide-box"><h4>必要商品</h4><p>'+g.n+'</p></div><div class="guide-box professional"><h4>何時應找專業</h4><p>'+g.p+'</p></div><div class="guide-box care"><h4>下次提醒</h4><p>'+g.c+'</p></div></div><h4 class="recommend-title">小北推薦商品</h4>'+productCards(recommended,g.n)+'<p class="source-note">玻璃水垢流程參考：<a href="https://www.cleanclean.tw/blog/posts/severe-glass-limescale-buildup" target="_blank" rel="noopener">淨淨｜玻璃嚴重水垢清潔說明</a>。</p>';s3.className='step show';s3.scrollIntoView({behavior:'smooth'})}

/* 依首頁參考圖重建入口視覺。 */
const homeStyle=document.createElement('style');homeStyle.textContent=`
#gate{background:linear-gradient(135deg,#ff514d 0 52%,#ffe55a 52%);padding:48px 20px;overflow:auto}
.gatecard{width:min(1120px,100%);min-height:620px;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:72px 9%;background:#fff9f1;border:3px solid #111;box-shadow:20px 20px #111;text-align:center}
.home-badge{display:inline-block;margin:0 0 38px;padding:10px 20px;border-radius:999px;background:#111;color:#fff;font-size:20px;font-weight:900}.gatecard h1{margin:0;font-size:clamp(46px,7vw,82px);line-height:1.08}.gatecard>p{max-width:660px;margin:28px auto 42px;font-size:22px;line-height:1.55}.gatebtn{width:min(46%,430px);min-height:220px;margin:0 9px;border:3px solid #111;border-radius:38px;background:#fff;font-size:30px;vertical-align:top}.gatebtn small{display:block;margin-top:14px;font-size:18px}.gatebtn.mapbtn{background:#076f70;color:#fff}.gatebtn:hover{transform:translateY(-5px);box-shadow:8px 8px #111;background:#ffe55a;color:#111}@media(max-width:650px){#gate{padding:20px}.gatecard{min-height:0;padding:48px 24px;box-shadow:10px 10px #111}.home-badge{margin-bottom:25px;font-size:16px}.gatecard>p{font-size:17px;margin:20px 0 26px}.gatebtn{width:100%;min-height:130px;margin:7px 0;font-size:24px}.gatebtn small{font-size:15px}}
.recommend-title{margin:30px 0 12px}.product-cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.product-card{padding:15px;border:2px solid var(--ink);background:#fff;box-shadow:4px 4px #111}.product-card__location,.product-card__type{margin:0;color:#53605d;font-size:13px}.product-card h5{margin:7px 0;font-size:16px;line-height:1.4}.product-card__bottom{display:flex;align-items:end;justify-content:space-between;gap:8px;margin-top:13px;padding-top:10px;border-top:1px solid #ddd}.product-card__bottom strong{font-size:20px;color:#c72c29}.product-card__bottom span{padding:4px 7px;background:#e9fbf1;font-size:12px}.product-fallback{display:flex;flex-wrap:wrap;gap:8px}.product-fallback span{padding:8px 10px;border:2px solid var(--ink);background:#fff}@media(max-width:600px){.product-cards{grid-template-columns:1fr}}
`;document.head.append(homeStyle);
const home=document.querySelector('.gatecard');if(home)home.innerHTML='<span class="home-badge">小北 AI 導覽</span><h1>今天想解決什麼？</h1><p>選擇一個入口，快速找到生活問題的解法，或直接探索商品所在區域。</p><button class="gatebtn" onclick="openView(\'life\')">生活解決方法<small>一步一步找到推薦解法</small></button><button class="gatebtn mapbtn" onclick="openView(\'map\')">商品地圖<small>搜尋商品、查看 21 區位置</small></button>';

/* 補齊原有入口的所有問題解方，避免任何選項只停留在通用提示。 */
Object.assign(guides,{
 '鎖螺絲':{t:'居家修繕',s:'先確認螺絲規格與鎖入材質；牆面不明或需承重時，不要只靠一般螺絲。',x:['對準螺絲孔並選擇吻合尺寸的起子頭。','保持垂直、穩定施力鎖緊，不要過度鎖入。','確認固定穩固；若是承重物，改用適合的壁虎或錨栓。'],n:'十字／一字螺絲起子、螺絲、壁虎或錨栓、捲尺',p:'牆面龜裂、固定處鬆動、需承載重物或涉及電線管路時，請找專業人員。',c:'保留替換螺絲並定期檢查家具五金是否鬆動。',k:['居家修繕','家具組裝']},
 '黏貼固定':{t:'居家修繕',s:'先確認表面材質、承重與是否可移除；潮濕、粉化或油污表面會大幅降低黏著力。',x:['擦淨並完全乾燥黏貼面，先量好位置。','依產品標示剪裁或貼上，均勻按壓固定。','等待建議固化時間後再掛載物品，逐步增加重量。'],n:'雙面膠、無痕掛勾、黏著劑、清潔布、捲尺',p:'需承重、外牆、高處或會造成安全風險的固定，請改用五金固定或找專業。',c:'定期檢查黏貼件邊緣和承重狀態，潮濕區優先選防水型。',k:['居家修繕']},
 '水龍頭漏水':{t:'居家修繕',s:'先關閉止水閥；若漏水靠近插座、熱水器或牆內持續滲水，勿自行拆修。',x:['擦乾水龍頭並確認漏水點：出水口、把手或接頭。','關閉止水閥後檢查鬆動的接頭；可先更換適用墊片或止水帶。','重新開水測試，確認無滲漏後再收妥工具。'],n:'活動扳手、防水膠帶、替換墊片、抹布、水桶',p:'牆內滲水、水壓異常、鏽蝕嚴重或關閥後仍漏水時，請找水電。',c:'每月檢查接頭、水管與櫥櫃底部是否潮濕。',k:['居家修繕','漏水','排水']},
 '廚房油污':{t:'租屋清潔',s:'食物接觸面最後用清水擦淨；材質不明處先局部測試。',x:['清除油渣並待爐面冷卻。','噴敷去油劑、依標示靜置。','以海綿輕刷擦淨，食物接觸面再以清水擦拭。'],n:'廚房去油劑、中性清潔劑、海綿、抹布、手套',p:'抽油煙機滴油或電器內部積油時請找維修／清潔服務。',c:'每次重度烹調後擦拭爐台與牆面。',k:['廚房','去油','大掃除']},
 '地板':{t:'租屋清潔',s:'先辨識木地板、石材或磁磚；避免讓木地板積水，石材也不宜使用酸性清潔劑。',x:['先掃除或吸除沙塵，避免拖地時刮傷。','依材質使用適量中性清潔劑，以擰乾的拖把擦拭。','開窗通風或擦乾水痕，確認地面不濕滑。'],n:'中性地板清潔劑、拖把、掃把或吸塵器、抹布',p:'地板大面積起翹、滲水或霉味持續時，請找房東或專業人員。',c:'入口放置地墊並即時擦乾水漬。',k:['地板','大掃除','租屋清潔']},
 '全屋':{t:'租屋清潔',s:'先拍照記錄屋況；確認排水、漏水、霉斑與插座安全後再開始。',x:['清空雜物並由高到低除塵。','分區處理廚房去油、浴室除垢與地板清潔。','檢查排水、通風和垃圾清運，保留完成紀錄。'],n:'全屋清潔包、去油劑、除垢劑、中性清潔劑、拖把、海綿',p:'漏水、牆面霉害、受損電線或嚴重堵塞時，請先聯絡房東或專業單位。',c:'建立浴室每週、廚房與排水每月的保養清單。',k:['租屋清潔','大掃除']}
});
Object.assign(flow,{居家修繕:{q:'你需要處理哪種問題？',a:['鎖螺絲','黏貼固定','水龍頭漏水']},租屋清潔:{q:'最需要清潔哪個區域？',a:['廚房油污','地板','全屋']}});

/* 依最新導覽架構指定每一項必要商品，確保推薦清單逐項對應。 */
Object.assign(guides,{
 '家具組裝':{t:'搬家與租屋',s:'先閱讀組裝說明並確認零件與螺絲尺寸；大型家具應在平坦處組裝並避免單人抬舉。',x:['清點零件並依說明排列組裝順序。','使用合適起子或扳手，先半鎖定位再依序鎖緊。','確認家具水平、螺絲牢固；高櫃依說明加裝防傾倒固定。'],n:'螺絲起子、活動扳手、捲尺、壁虎或錨栓',p:'高櫃固定、牆面材質不明或組裝後明顯搖晃時，請找專業人員。',c:'一至兩週後再次檢查螺絲是否鬆動。',k:['家具組裝','居家修繕']},
 '登革熱噴藥':{t:'防災備品',s:'先清除積水容器、遵照產品標示與通風要求。噴藥時避免對人、寵物、食物與水族箱直接噴灑；有疑慮時請洽所在地衛生單位。',x:['先巡查花盆底盤、桶子與排水處，倒掉或妥善覆蓋積水。','針對蚊蟲可能停棲處，依標示使用家用蚊蟲噴霧；人身外出防護使用防蚊液。','使用後洗手、保持通風，持續每週巡查孳生源。'],n:'家用蚊蟲噴霧、防蚊液、捕蚊貼',p:'疑似社區群聚、無法排除大量積水或需公共區域病媒防治時，請聯絡所在地衛生單位或管理單位。',c:'雨後每週巡檢並落實巡、倒、清、刷。',k:['病媒防治','登革熱防治']}
});
const requiredProducts={
 '玻璃嚴重水垢':['玻璃水垢清潔劑','海綿刷','清潔手套'],
 '浴室皂垢／輕度水垢':['浴室清潔劑','中性萬用清潔劑','海綿刷','清潔手套'],
 '浴室霉斑':['除霉凝膠','清潔手套','除濕用品'],
 '廚房重油污':['廚房去油劑','中性萬用清潔劑','海綿刷','清潔手套'],
 '排水慢／異味':['毛髮濾網','通管器'],
 '馬桶堵塞':['馬桶吸把','馬桶清潔劑','清潔手套'],
 '入住／退租全屋清潔':['廚房去油劑','玻璃水垢清潔劑','浴室清潔劑','地板清潔劑','中性萬用清潔劑'],
 '颱風漏水／停電':['手電筒','乾電池','吸水布'],
 '鎖螺絲':['十字螺絲起子','螺絲','捲尺'],
 '黏貼固定':['雙面膠','無痕掛勾','清潔布'],
 '水龍頭漏水':['活動扳手','防水膠帶','抹布'],
 '廚房油污':['廚房去油劑','中性萬用清潔劑','海綿刷','清潔手套'],
 '地板':['地板清潔劑','中性萬用清潔劑','拖把'],
 '全屋':['廚房去油劑','玻璃水垢清潔劑','浴室清潔劑','地板清潔劑','中性萬用清潔劑'],
 '家具組裝':['十字螺絲起子','活動扳手','捲尺'],
 '登革熱噴藥':['家用蚊蟲噴霧','防蚊液','捕蚊貼','養生膠帶']
};
Object.entries(requiredProducts).forEach(([key,items])=>{if(guides[key]){guides[key].i=items;guides[key].n=items.join('、')}});
function getRecommendations(topic,answer){const guide=guides[answer];if(guide&&guide.i)return guide.i.map(term=>p.find(x=>x[0].includes(term))).filter(Boolean);const tags=(guide?guide.k:[])||[];const rank={必要:0,搭配:1,延伸:2};return p.filter(x=>tags.some(t=>x[5].includes(t)||x[6].includes(t))).sort((a,b)=>(rank[a[7]]??9)-(rank[b[7]]??9)).slice(0,8)}
Object.assign(flow,{居家修繕:{q:'你需要處理哪種問題？',a:['鎖螺絲','黏貼固定','水龍頭漏水','馬桶堵塞']},租屋清潔:{q:'最需要清潔哪個區域？',a:['廚房油污','地板','入住／退租全屋清潔']},搬家與租屋:{q:'搬家時目前需要什麼協助？',a:['家具組裝','水龍頭漏水']},防災備品:{q:'目前最需要準備或處理什麼？',a:['颱風漏水／停電','登革熱噴藥']}});
