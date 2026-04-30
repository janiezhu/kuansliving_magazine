/* ============================================================
   Variation 1 — Editorial Minimal: 3-column grid
   ============================================================ */
const { useState, useEffect } = React;

function NavBar({ tone = 'light' }){
  const dark = tone === 'dark';
  return (
    <nav className="nav" style={{
      background: dark ? 'rgba(20,18,14,0.9)' : 'rgba(250,248,244,0.92)',
      borderColor: dark ? 'rgba(255,255,255,0.08)' : 'var(--line)',
      color: dark ? '#f3efe7' : 'var(--ink)'
    }}>
      <div className="logo" style={{color: dark ? '#f3efe7':'var(--ink)'}}>
        KUAN'S LIVING
        <small style={{color: dark?'rgba(243,239,231,.55)':'var(--muted)'}}>寬庭　季刊</small>
      </div>
      <ul style={{color: dark?'#f3efe7':'inherit'}}>
        <li><a href="#issues">最新刊號</a></li>
        <li><a href="#archive">過往刊物</a></li>
        <li><a href="#about">關於我們</a></li>
        <li><a href="#newsletter">電子報</a></li>
      </ul>
      <a href="#newsletter" className="sub" style={{
        borderColor: dark?'#f3efe7':'var(--ink)',
        color: dark?'#f3efe7':'var(--ink)'
      }}>Subscribe</a>
    </nav>
  );
}

function Cover({ issue, size = 'md', onClick }){
  const heights = { sm: 280, md: 420, lg: 560, xl: 680 };
  return (
    <div className="cover" style={{
      ['--cover-grad']: issue.cover,
      width:'100%', height: heights[size], cursor:'pointer'
    }} onClick={onClick}>
      <div className="grain" />
      <div className="cover-inner">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
          <div className="issue-no">N° {issue.no}</div>
          <div className="issue-no">{issue.season}</div>
        </div>
        <div>
          <div className="cover-title">{issue.title}</div>
          <div className="cover-sub">{issue.subtitle}</div>
        </div>
        <div className="cover-foot">
          <span>KUAN'S LIVING　QUARTERLY</span>
          <span>{issue.date}</span>
        </div>
      </div>
      <div className="play"><svg viewBox="0 0 10 10"><polygon points="2,1 9,5 2,9"/></svg></div>
    </div>
  );
}

function VariantA(){
  // Editorial minimal: 3-column grid
  const [issues] = useState(window.ISSUES);
  const [latest, ...rest] = issues;
  return (
    <div style={{background:'var(--bg)', minHeight: '100%'}}>
      <NavBar />
      {/* hero strip */}
      <section style={{padding: '90px 56px 70px', display:'grid', gridTemplateColumns:'1.1fr 1fr', gap: 80, alignItems:'end'}}>
        <div>
          <div className="eyebrow" style={{marginBottom:24}}>The Quarterly · Issue 80 · Spring 2026</div>
          <h1 className="display" style={{margin:0, fontSize:84, lineHeight:0.96, letterSpacing:'0.005em'}}>
            生活，<br/>是一種被細細<br/>琢磨的態度。
          </h1>
          <p style={{maxWidth: 460, marginTop:30, color:'var(--ink-soft)', lineHeight:1.85, fontSize:15}}>
            寬庭《Kuan's Living》季刊，記錄當代華人生活美學的細緻片段。從一張椅子的姿態、一道光的方向，到一個物件被收藏的理由。每一季，我們都重新探尋「家」的定義。
          </p>
          <div style={{marginTop: 36, display:'flex', gap:18}}>
            <a className="sub" style={{
              fontFamily:'Inter,sans-serif', fontSize:11, letterSpacing:'0.22em', textTransform:'uppercase',
              padding:'14px 24px', border:'1px solid var(--ink)', background:'var(--ink)', color:'var(--bg)'
            }}>閱讀本期</a>
            <a className="sub" style={{
              fontFamily:'Inter,sans-serif', fontSize:11, letterSpacing:'0.22em', textTransform:'uppercase',
              padding:'14px 24px', border:'1px solid var(--ink)', color:'var(--ink)'
            }}>過往刊號</a>
          </div>
        </div>
        <Cover issue={latest} size="lg" />
      </section>

      <hr className="rule" style={{margin:'40px 56px'}}/>

      {/* archive grid */}
      <section id="archive" style={{padding: '20px 56px 80px'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom: 40}}>
          <div>
            <div className="eyebrow">The Archive</div>
            <h2 className="display" style={{margin:'10px 0 0', fontSize:42, letterSpacing:'0.01em'}}>過往刊物</h2>
          </div>
          <a className="eyebrow" style={{cursor:'pointer'}}>瀏覽全部　→</a>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', columnGap: 36, rowGap: 56}}>
          {rest.map((iss, i) => (
            <article key={iss.no}>
              <Cover issue={iss} size="md" />
              <div style={{paddingTop:18}}>
                <div style={{display:'flex', justifyContent:'space-between', marginBottom:8}}>
                  <span className="eyebrow">N° {iss.no}　·　{iss.season}</span>
                  <span className="eyebrow">{iss.pages}P</span>
                </div>
                <h3 className="display" style={{margin:'2px 0 6px', fontSize:28}}>{iss.title}</h3>
                <p style={{margin:'0 0 10px', color:'var(--muted)', fontSize:13, letterSpacing:'0.06em'}}>{iss.subtitle}</p>
                <p style={{margin:0, color:'var(--ink-soft)', fontSize:13.5, lineHeight:1.8}}>{iss.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <hr className="rule" style={{margin:'0 56px'}}/>

      {/* newsletter */}
      <section id="newsletter" style={{padding:'80px 56px', display:'grid', gridTemplateColumns:'1fr 1fr', gap: 80}}>
        <div>
          <div className="eyebrow">Newsletter</div>
          <h2 className="display" style={{fontSize:48, margin:'12px 0 18px'}}>每季，靜靜送達</h2>
          <p style={{color:'var(--ink-soft)', fontSize:14.5, lineHeight:1.85, maxWidth:480}}>
            訂閱寬庭電子報，於每一季發刊之際，第一時間收到最新刊號連結、編輯精選文章，以及僅限訂戶的居家美學筆記。
          </p>
        </div>
        <form style={{borderTop:'1px solid var(--ink)', borderBottom:'1px solid var(--ink)', padding:'28px 0', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <input placeholder="your@email.com" style={{
            border:0, background:'transparent', fontSize:18, fontFamily:'Cormorant Garamond, serif', flex:1, outline:'none'
          }}/>
          <button className="eyebrow" style={{color:'var(--ink)', cursor:'pointer'}}>訂閱　→</button>
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}

function SiteFooter(){
  return (
    <footer className="site-foot">
      <div>
        <div className="brand">KUAN'S LIVING</div>
        <p style={{marginTop:14, maxWidth: 380}}>寬庭，自 2003 年起，致力於將東方美學融入當代華人居家生活。本刊為品牌季刊，記錄每一季的居家觀點。</p>
      </div>
      <div>
        <h4>Sections</h4>
        <p><a>最新刊號</a></p>
        <p><a>過往刊物</a></p>
        <p><a>編輯精選</a></p>
      </div>
      <div>
        <h4>About</h4>
        <p><a>品牌故事</a></p>
        <p><a>編輯室</a></p>
        <p><a>聯絡我們</a></p>
      </div>
      <div>
        <h4>Follow</h4>
        <p><a>Instagram</a></p>
        <p><a>Facebook</a></p>
        <p><a>YouTube</a></p>
      </div>
      <div className="copy">
        <span>© 2026 Kuan's Living Co., Ltd.</span>
        <span>Quarterly Magazine — All Rights Reserved</span>
      </div>
    </footer>
  );
}

window.VariantA = VariantA;
window.Cover = Cover;
window.NavBar = NavBar;
window.SiteFooter = SiteFooter;
