// Present the same professional content in a personal, motion-aware theme.
document.title='Ankit Verma — iOS Developer';
document.querySelectorAll('.logo').forEach(el=>{el.innerHTML='av<span>ANKIT VERMA</span>'});
const hero=document.querySelector('.hero-content');
hero.querySelector('.eyebrow').innerHTML='<span class="status-dot"></span> AVAILABLE FOR NEW OPPORTUNITIES';
hero.querySelector('.edition').textContent='iOS DEVELOPER · MOBILE EXPERIENCE BUILDER';
hero.querySelector('h1').innerHTML='Thoughtful apps.<br><span>Human impact.</span>';
hero.querySelector('h2').innerHTML="Hi, I’m Ankit.<br>I build for the way people live.";
hero.querySelector('.intro').textContent='I bring 2+ years of professional iOS experience to crafting fast, intuitive apps with Swift, SwiftUI and UIKit—from real-time connections to location-aware experiences.';
hero.querySelector('.primary').innerHTML='Explore my work <span>↗</span>';
const art=document.querySelector('.hero-art');art.removeAttribute('aria-hidden');
art.innerHTML='<div class="portrait-glow" aria-hidden="true"></div>';
document.querySelector('.hero-footer').innerHTML='<span>DESIGNED WITH INTENTION. BUILT WITH CURIOSITY.</span><a href="#projects">SCROLL TO EXPLORE ↓</a>';
const replacements={'FEATURED IN THE COLLECTION':'SELECTED WORK','Apps worth pressing play on.':'Built for real life.','EVERY SEASON BUILDS ON THE LAST':'PROFESSIONAL JOURNEY','The experience behind the screen.':'Experience that makes a difference.','THE ORIGIN STORY':'EDUCATION','THE NEXT SEASON IS UNWRITTEN':'LET’S CREATE SOMETHING MEANINGFUL'};
document.querySelectorAll('.kicker,.section-heading h2').forEach(el=>{let key=el.textContent.trim();if(replacements[key])el.textContent=replacements[key]});
document.querySelectorAll('.season').forEach((el,i)=>{const year=el.querySelector('span').textContent;el.replaceChildren(document.createTextNode(['EXPERIENCE 03','EXPERIENCE 02','FOUNDATION 01'][i]));let s=document.createElement('span');s.textContent=year;el.append(s)});
document.querySelectorAll('.poster-title small').forEach(el=>el.textContent=el.textContent.replace(/^(\d+) \/ /,'PROJECT $1 · '));
document.querySelectorAll('.play').forEach(el=>el.textContent='↗');
document.querySelectorAll('[data-project]').forEach((el,i)=>el.addEventListener('click',()=>{document.querySelector('#dialogNumber').textContent='PROJECT 0'+(i+1)}));
const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
const motionButton=document.createElement('button');motionButton.className='motion-control';motionButton.type='button';motionButton.setAttribute('aria-pressed','false');motionButton.textContent='Pause motion Ⅱ';
motionButton.addEventListener('click',()=>{const paused=document.body.classList.toggle('motion-paused');motionButton.setAttribute('aria-pressed',String(paused));motionButton.textContent=paused?'Resume motion ▶':'Pause motion Ⅱ'});
document.querySelector('.hero-footer').append(motionButton);
if(motion.matches){document.body.classList.add('motion-paused');motionButton.setAttribute('aria-pressed','true');motionButton.textContent='Resume motion ▶'}
// Official project identity supplied by Ankit and verified against each source.
const officialProjects=[{index:0,name:'Whitetail Tactical',logo:'whitetail-logo.svg',url:'https://whitetail-tactical.com/',label:'Official website ↗'},{index:1,name:'Profeshie',logo:'profeshie-logo.jpg',url:'https://apps.apple.com/sg/app/profeshie/id6736945480',label:'View on App Store ↗'}];
for(const project of officialProjects){const card=document.querySelector(`[data-project="${project.index}"]`);card.querySelectorAll('.terrain,.map-route,.pin,.camera').forEach(el=>el.remove());const logo=document.createElement('img');logo.className='official-project-logo';logo.src=project.logo;logo.alt=`${project.name} official logo`;logo.width=100;logo.height=100;card.querySelector('.poster').append(logo);}
const officialLinks=document.createElement('div');officialLinks.className='official-project-links';officialLinks.setAttribute('aria-label','Official project links');
for(const project of officialProjects){const link=document.createElement('a');link.href=project.url;link.target='_blank';link.rel='noopener noreferrer';link.textContent=`${project.name} · ${project.label}`;officialLinks.append(link)}
document.querySelector('.project-grid').after(officialLinks);
document.querySelector('.art-note').textContent='Whitetail Tactical and Profeshie use their official logos. Other project artwork is illustrative, not app screenshots. Select a project to explore my contributions.';
document.querySelectorAll('[data-project]').forEach(card=>card.addEventListener('click',()=>{document.querySelectorAll('.dialog-official-logo,.dialog-official-link').forEach(el=>el.remove());const project=officialProjects.find(p=>String(p.index)===card.dataset.project);if(!project)return;const logo=document.createElement('img');logo.className='dialog-official-logo';logo.src=project.logo;logo.alt=`${project.name} official logo`;logo.width=75;logo.height=75;document.querySelector('.dialog-art').prepend(logo);const link=document.createElement('a');link.className='button secondary dialog-official-link';link.href=project.url;link.target='_blank';link.rel='noopener noreferrer';link.textContent=project.label;document.querySelector('.dialog-body').append(link)}));
