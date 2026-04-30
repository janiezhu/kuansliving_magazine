/* ============================================================
   Variation 3 — Library Index: Editorial table-of-contents feel
   ============================================================ */
const { useState: useStateC } = React;

function VariantC(){
  const [issues] = useStateC(window.ISSUES);
  const [hover, setHover] = useStateC(0);
  const previewIssue = issues[hover];

  return (
    <div style={{background:'#f3efe7', minHeight:'100%'}}>
      <NavBar />

      {/* masthead */}
      <section style={{padding:'70px 56px 50px', borderBottom:'1px solid var(--line)', textAlign:'center'}}>
        <div className="eyebrow">Volume XX　·　Established 2003　·　Quarterly</div>
        <h1 className="display" style={{margin:'18px 0 8px', fontSize: 110, letterSpacing:'0.04em', fontWeight:300}}>
          The Library
        </h1>
        <p style={{margin:0, color:'var(--ink-soft)', fontSize:14, letterSpacing:'0.18em'}}>
          寬庭　季刊　典藏目錄
        </p>
      </section>

      {/* split layout: index list left, preview cover right */}
      <section style={{display:'grid', gridTemplateColumns:'1.1fr 1fr', minHeight: 720}}>
        {/* index list */}
        <div style={{padding:'40px 56px 60px', borderRight:'1px solid var(--line)'}}>
          <div style={{display:'grid', gridTemplateColumns:'48px 1fr 110px 90px', padding:'16px 0', borderBottom:'1px solid var(--ink)', alignItems:'center'}}>
            <span className="eyebrow">№</span>
            <span className="eyebrow">Title　/　主題</span>
            <span className="eyebrow">Season</span>
            <span className="eyebrow" style={{textAlign:'right'}}>Pages</span>
          </div>
          {issues.map((iss, i) => (
            <div
              key={iss.no}
              onMouseEnter={() => setHover(i)}
              style={{
                display:'grid', gridTemplateColumns:'48px 1fr 110px 90px',
                padding:'24px 0', borderBottom:'1px solid var(--line)', alignItems:'center', cursor:'pointer',
                background: hover === i ? 'rgba(138,104,64,0.06)' : 'transparent',
                transition:'background .25s', marginInline: hover === i ? '-12px':'0', paddingInline: hover === i ? '12px':'0',
              }}
            >
              <span className="display" style={{fontSize:22, color:'var(--muted)'}}>{iss.no}</span>
              <div>
                <div className="display" style={{fontSize:30, lineHeight:1.1}}>{iss.title}</div>
                <div style={{color:'var(--muted)', fontSize:12.5, letterSpacing:'0.18em', marginTop:4}}>{iss.subtitle}</div>
              </div>
              <span style={{fontFamily:'Inter,sans-serif', fontSize:12, color:'var(--ink-soft)', letterSpacing:'0.12em'}}>{iss.season}</span>
              <span style={{textAlign:'right', fontFamily:'Inter,sans-serif', fontSize:12, color:'var(--muted)'}}>
                {iss.pages}　
                <span style={{marginLeft:8, opacity: hover === i ? 1 : 0, transition:'opacity .25s'}}>→</span>
              </span>
            </div>
          ))}
        </div>

        {/* sticky preview */}
        <div style={{padding:'40px 56px 60px', position:'sticky', top:80, alignSelf:'start'}}>
          <div className="eyebrow" style={{marginBottom:18}}>Now Previewing</div>
          <Cover issue={previewIssue} size="xl" />
          <div style={{marginTop:24, display:'grid', gridTemplateColumns:'auto 1fr', gap:'8px 20px'}}>
            <span className="eyebrow">Issue</span><span style={{fontFamily:'Cormorant Garamond,serif', fontSize:18}}>N° {previewIssue.no}</span>
            <span className="eyebrow">Title</span><span style={{fontFamily:'Cormorant Garamond,serif', fontSize:18}}>{previewIssue.title} ／ {previewIssue.subtitle}</span>
            <span className="eyebrow">Date</span><span style={{fontFamily:'Cormorant Garamond,serif', fontSize:18}}>{previewIssue.date}</span>
          </div>
          <p style={{marginTop:22, color:'var(--ink-soft)', fontSize:14, lineHeight:1.85}}>
            {previewIssue.description}
          </p>
          <a className="sub" style={{
            display:'inline-block', marginTop:24,
            fontFamily:'Inter,sans-serif', fontSize:11, letterSpacing:'0.22em', textTransform:'uppercase',
            padding:'14px 24px', border:'1px solid var(--ink)', color:'var(--ink)', background:'transparent'
          }}>翻閱本期 →</a>
        </div>
      </section>

      {/* footer note */}
      <section style={{padding:'50px 56px', borderTop:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div className="display" style={{fontSize:24, fontStyle:'italic', color:'var(--ink-soft)'}}>
          "於細微處，見一方天地。"
        </div>
        <a className="eyebrow" style={{cursor:'pointer'}}>訂閱電子報　→</a>
      </section>

      <SiteFooter />
    </div>
  );
}

window.VariantC = VariantC;
