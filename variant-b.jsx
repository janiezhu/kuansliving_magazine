/* ============================================================
   Variation 2 — Cinematic Dark: Full-bleed hero with film feel
   ============================================================ */
const { useState: useStateB, useEffect: useEffectB } = React;

function VariantB(){
  const [issues] = useStateB(window.ISSUES);
  const [activeIdx, setActive] = useStateB(0);
  const latest = issues[activeIdx];
  return (
    <div style={{background:'#14120e', color:'#f3efe7', minHeight:'100%'}}>
      <NavBar tone="dark" />

      {/* Cinematic hero */}
      <section style={{position:'relative', height:'78vh', minHeight: 620, overflow:'hidden'}}>
        <div className="cover" style={{['--cover-grad']: latest.cover, position:'absolute', inset:0}}>
          <div className="grain" />
        </div>
        <div style={{position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(20,18,14,0) 30%, rgba(20,18,14,0.85) 100%), linear-gradient(90deg, rgba(20,18,14,0.5) 0%, rgba(20,18,14,0) 50%)', zIndex:2}}/>
        <div style={{position:'absolute', inset:0, padding:'80px 56px', display:'flex', flexDirection:'column', justifyContent:'space-between', zIndex:3, color:'#f3efe7'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div className="eyebrow" style={{color:'rgba(243,239,231,.7)'}}>Now Reading　·　Issue {latest.no}　·　{latest.season}</div>
            <div className="eyebrow" style={{color:'rgba(243,239,231,.7)'}}>{String(activeIdx+1).padStart(2,'0')} / {String(issues.length).padStart(2,'0')}</div>
          </div>
          <div style={{maxWidth: 720}}>
            <div className="display" style={{fontSize:148, lineHeight:0.92, fontWeight:200, letterSpacing:'0.005em'}}>
              {latest.title}
            </div>
            <div style={{marginTop: 18, fontSize:16, letterSpacing:'0.32em', color:'rgba(243,239,231,.78)'}}>
              {latest.subtitle.toUpperCase ? latest.subtitle : latest.subtitle}
            </div>
            <p style={{marginTop:24, maxWidth: 540, lineHeight:1.85, color:'rgba(243,239,231,.78)', fontSize:14.5}}>
              {latest.description}
            </p>
            <div style={{marginTop:36, display:'flex', gap:14, alignItems:'center'}}>
              <a className="sub" style={{
                fontFamily:'Inter,sans-serif', fontSize:11, letterSpacing:'0.22em', textTransform:'uppercase',
                padding:'14px 26px', border:'1px solid #f3efe7', color:'#14120e', background:'#f3efe7'
              }}>翻閱本期</a>
              <span className="eyebrow" style={{color:'rgba(243,239,231,.6)'}}>{latest.pages} pages</span>
            </div>
          </div>
        </div>
      </section>

      {/* horizontal carousel of all issues */}
      <section style={{padding:'80px 56px 40px'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom: 36}}>
          <div>
            <div className="eyebrow" style={{color:'rgba(243,239,231,.6)'}}>The Library</div>
            <h2 className="display" style={{margin:'10px 0 0', fontSize:46, color:'#f3efe7'}}>歷期典藏</h2>
          </div>
          <span className="eyebrow" style={{color:'rgba(243,239,231,.5)'}}>← scroll →</span>
        </div>
        <div style={{display:'flex', gap:24, overflowX:'auto', paddingBottom:24, scrollSnapType:'x mandatory'}}>
          {issues.map((iss, i) => (
            <div key={iss.no} style={{flex:'0 0 280px', scrollSnapAlign:'start', cursor:'pointer'}} onClick={()=>setActive(i)}>
              <div style={{position:'relative'}}>
                <Cover issue={iss} size="md" />
                {i === activeIdx && (
                  <div style={{position:'absolute', top:14, left:14, background:'#f3efe7', color:'#14120e', padding:'4px 10px', fontFamily:'Inter,sans-serif', fontSize:10, letterSpacing:'0.24em', zIndex:5}}>NOW READING</div>
                )}
              </div>
              <div style={{paddingTop:14, color:'#f3efe7'}}>
                <div className="eyebrow" style={{color:'rgba(243,239,231,.55)'}}>N° {iss.no}　·　{iss.season}</div>
                <h3 className="display" style={{margin:'6px 0 2px', fontSize:24}}>{iss.title}</h3>
                <p style={{margin:0, fontSize:12.5, color:'rgba(243,239,231,.55)', letterSpacing:'0.06em'}}>{iss.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* newsletter */}
      <section style={{padding:'80px 56px', borderTop:'1px solid rgba(255,255,255,.08)', marginTop: 60, textAlign:'center'}}>
        <div className="eyebrow" style={{color:'rgba(243,239,231,.55)'}}>Newsletter</div>
        <h2 className="display" style={{fontSize:64, margin:'18px 0 14px', color:'#f3efe7'}}>Stay Quarterly</h2>
        <p style={{color:'rgba(243,239,231,.65)', maxWidth:540, margin:'0 auto', lineHeight:1.85, fontSize:14}}>
          每季發刊之際，靜靜寄達您的信箱。除了刊物連結，也將分享編輯室的居家筆記。
        </p>
        <form style={{maxWidth:520, margin:'36px auto 0', borderBottom:'1px solid rgba(243,239,231,.4)', padding:'14px 0', display:'flex'}}>
          <input placeholder="your@email.com" style={{
            border:0, background:'transparent', color:'#f3efe7', fontSize:17, fontFamily:'Cormorant Garamond,serif', flex:1, outline:'none'
          }}/>
          <button className="eyebrow" style={{color:'#f3efe7', cursor:'pointer'}}>Subscribe　→</button>
        </form>
      </section>

      <footer style={{padding:'40px 56px', borderTop:'1px solid rgba(255,255,255,.08)', display:'flex', justifyContent:'space-between', fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(243,239,231,.5)', fontFamily:'Inter,sans-serif'}}>
        <span>© 2026 Kuan's Living</span>
        <span>Quarterly · est. 2003</span>
      </footer>
    </div>
  );
}

window.VariantB = VariantB;
