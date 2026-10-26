/* Browser voice metadata has no standard quality field. These are preferences,
   not a perceptual quality measurement. Never substitute another Spanish region. */
(function(root){
 const isSpain=v=>String(v.lang||"").replace(/_/g,"-").toLowerCase()==="es-es";
 function quality(v){
  const meta=(v.name+" "+v.voiceURI).toLowerCase();
  if(/premium|prémium/.test(meta))return "Premium";
  if(/enhanced|mejorad|superior/.test(meta))return "Enhanced";
  if(/siri/.test(meta))return "Siri-labelled";
  if(/neural|natural|online/.test(meta))return "Natural / online-labelled";
  return "Standard / unspecified";
 }
 function score(v){
  const name=String(v.name||"").toLowerCase(),meta=name+" "+String(v.voiceURI||"").toLowerCase();
  let n={"Premium":1000,"Enhanced":800,"Siri-labelled":700,"Natural / online-labelled":600,"Standard / unspecified":100}[quality(v)];
  if(/siri/.test(meta))n+=100;
  if(/monica|mónica|jorge|marisol/.test(name))n+=40;
  if(/google/.test(name))n+=20;
  if(v.localService)n+=5;
  if(v.default)n+=1;
  if(/compact/.test(meta))n-=30;
  if(/eddy|flo\b|grandma|grandpa|reed\b|rocko|sandy|shelley|albert|bad news|bubbles|cellos|whisper|trinoids/.test(name))n-=2000;
  return n;
 }
 function ranked(list){return list.filter(isSpain).slice().sort((a,b)=>score(b)-score(a)||a.name.localeCompare(b.name))}
 function choose(list,uri){const available=ranked(list);return available.find(v=>v.voiceURI===uri)||available[0]}
 root.PulpitoVoices={isSpain,quality,score,ranked,choose};
})(typeof window!=="undefined"?window:globalThis);
