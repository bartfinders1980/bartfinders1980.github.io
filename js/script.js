// ── Repertoire data ──
const songs = [
  {artist:"Pearl Jam",title:"Alive"},
  {artist:"Alter Bridge",title:"Broken Wings"},
  {artist:"Nirvana",title:"Come as You Are"},
  {artist:"Red Hot Chili Peppers",title:"Dani California"},
  {artist:"Kaiser Chiefs",title:"I Predict a Riot"},
  {artist:"Rage Against the Machine",title:"Killing in the Name"},
  {artist:"Muse",title:"Knights of Cydonia"},
  {artist:"Triggerfinger",title:"Man Down"},
  {artist:"The Killers",title:"Mr. Brightside"},
  {artist:"Foo Fighters",title:"My Hero"},
  {artist:"Queens of the Stone Age",title:"No One Knows"},
  {artist:"Tool",title:"Sober"},
  {artist:"U2",title:"Vertigo"},

  {artist:"Kensington",title:"All For Nothing"},
  {artist:"Blink 182",title:"All The Small Things"},
  {artist:"Rag & Bone Man",title:"All You Ever Wanted"},
  {artist:"Green Day",title:"American Idiot"},
  {artist:"Nothing But Thieves",title:"Amsterdam"},
  {artist:"Editors",title:"An End Has a Start"},
  {artist:"Biffy Clyro",title:"Animal Style"},
  {artist:"Arctic Monkeys",title:"Arabella"},
  {artist:"Lonely the Brave",title:"Backroads"},
  {artist:"Green Day",title:"Basket Case"},
  {artist:"Keane",title:"Bend and Break"},
  {artist:"Pearl Jam",title:"Black"},
  {artist:"Ed Sheeran",title:"Blow"},
  {artist:"The Haunted Youth",title:"Broken"},
  {artist:"Biffy Clyro",title:"Bubbles"},
  {artist:"An Emotional Fish",title:"Celebrate"},
  {artist:"Pearl Jam",title:"Corduroy"},
  {artist:"Radiohead",title:"Creep"},
  {artist:"Stereophonics",title:"Dakota"},
  {artist:"The Virginmarys",title:"Dead Man's Shoes"},
  {artist:"Depeche Mode",title:"Enjoy the Silence"},
  {artist:"Foo Fighters",title:"Everlong"},
  {artist:"Ra",title:"Every Little Thing She Does"},
  {artist:"Placebo",title:"Every You Every Me"},
  {artist:"Radiohead",title:"Fake Plastic Trees"},
  {artist:"Royal Blood",title:"Figure It Out"},
  {artist:"Live",title:"Heropsychodreamer"},
  {artist:"Greta Van Fleet",title:"Highway Tune"},
  {artist:"Green Day",title:"Holiday"},
  {artist:"Biffy Clyro",title:"Howl"},
  {artist:"Muse",title:"Hysteria"},
  {artist:"Kane",title:"I Belong to You"},
  {artist:"Royal Blood",title:"I Only Lie When I Love You"},
  {artist:"U2",title:"I Will Follow"},
  {artist:"Nirvana",title:"In Bloom"},
  {artist:"Pearl Jam",title:"Jeremy"},
  {artist:"Joe Bonamassa",title:"Just Got Paid"},
  {artist:"Kane",title:"Rain Down On Me"},
  {artist:"Royal Blood",title:"Little Monster"},
  {artist:"Queens of the Stone Age",title:"Little Sister"},
  {artist:"Volbeat",title:"Lola Montez"},
  {artist:"Biffy Clyro",title:"Many of Horror"},
  {artist:"Kings of Leon",title:"Molly's Chambers"},
  {artist:"Foo Fighters",title:"Monkey Wrench"},
  {artist:"Biffy Clyro",title:"Mountains"},
  {artist:"Editors",title:"Munich"},
  {artist:"Queens of the Stone Age",title:"My God is the Sun"},
  {artist:"3 Doors Down",title:"Never Will I Break"},
  {artist:"U2",title:"One"},
  {artist:"Alter Bridge",title:"Open Your Eyes"},
  {artist:"Red Hot Chili Peppers",title:"Otherside"},
  {artist:"Nothing But Thieves",title:"Overcome"},
  {artist:"Danko Jones",title:"Play the Blues"},
  {artist:"Muse",title:"Plug In Baby"},
  {artist:"U2",title:"Pride"},
  {artist:"Muse",title:"Psycho"},
  {artist:"Pearl Jam",title:"Rearviewmirror"},
  {artist:"Kate Bush",title:"Running Up That Hill"},
  {artist:"Kings of Leon",title:"Sex on Fire"},
  {artist:"The Killers",title:"Somebody Told Me"},
  {artist:"Placebo",title:"Song to Say Goodbye"},
  {artist:"Placebo",title:"Special K"},
  {artist:"The Raconteurs",title:"Steady as She Goes"},
  {artist:"The Luka State",title:"Stick Around"},
  {artist:"Muse",title:"Stockholm Syndrome"},
  {artist:"Radiohead",title:"Street Spirit (Fade Out)"},
  {artist:"Die Toten Hosen",title:"Tage Wie Diese"},
  {artist:"Buffalo Tom",title:"Taillights Fade"},
  {artist:"Against Me!",title:"Teenage Anarchist"},
  {artist:"Placebo",title:"The Bitter End"},
  {artist:"Foo Fighters",title:"The Pretender"},
  {artist:"Foo Fighters",title:"Times Like These"},
  {artist:"Editors",title:"Ton of Love"},
  {artist:"Nothing But Thieves",title:"Trip Switch"},
  {artist:"David Bowie",title:"Under Pressure"},
  {artist:"Kings of Leon",title:"Use Somebody"},
  {artist:"Kings of Leon",title:"Wait for Me"},
  {artist:"Alter Bridge",title:"Watch Over You"},
  {artist:"Life of Agony",title:"Weeds"},
  {artist:"Incubus",title:"Wish You Were Here"},
  {artist:"David Bowie",title:"Ziggy Stardust"}
];

const galleryImages = [
  "images/media/live1.webp",
  "images/media/live2.webp",
  "images/media/live3.webp",
  "images/media/live4.webp",
  "images/media/live5.webp",
  "images/media/live6.webp",
  "images/media/live7.webp",
  "images/media/live8.webp",
  "images/media/live9.webp",
  "images/media/live10.webp",
  "images/media/live11.webp",
  "images/media/live12.webp",
  "images/media/live13.webp",
  "images/media/live14.webp",
  "images/media/live15.webp",
  "images/media/live16.webp",
];

function renderRepertoire(filter=''){
  const tbody=document.getElementById('repertoireBody');
  const noRes=document.getElementById('noResults');
  const f=filter.toLowerCase().trim();
  const filtered=songs.filter(s=>
    s.artist.toLowerCase().includes(f)||s.title.toLowerCase().includes(f)
  );
  tbody.innerHTML='';
  if(!filtered.length){noRes.style.display='block';return;}
  noRes.style.display='none';
  filtered.forEach((s,i)=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`<td style="color:rgba(245,245,245,0.3);font-size:.75rem;">${String(i+1).padStart(2,'0')}</td><td>${s.artist}</td><td>${s.title}</td>`;
    tbody.appendChild(tr);
  });
}
renderRepertoire();
document.getElementById('searchInput').addEventListener('input',e=>renderRepertoire(e.target.value));

// ── Gallery placeholder images (colored SVG data URIs) ──
const galleryColors=['#1a0505','#0d0505','#150505','#0a0505','#200808','#0f0202','#1a0a0a','#100505','#180606'];
const galleryHeights=[220,160,260,200,180,240,170,210,190,230,155,275];

function buildGallery(){
  const g=document.getElementById('gallery');
  
galleryImages.forEach(src => {

    const div = document.createElement("div");
    div.className = "masonry-item";

    const img = document.createElement("img");
    img.src = src;
    img.alt = "Resonate Live";

    div.appendChild(img);

    div.addEventListener("click", () => {
      openLightbox(src);
    });

    g.appendChild(div);
  });
}
buildGallery();

function openLightbox(src){
  document.getElementById('lb-img').src=src;
  document.getElementById('lightbox').classList.add('active');
}
document.getElementById('lb-close').addEventListener('click',()=>{
  document.getElementById('lightbox').classList.remove('active');
});
document.getElementById('lightbox').addEventListener('click',e=>{
  if(e.target===e.currentTarget) e.currentTarget.classList.remove('active');
});

// ── Nav scroll ──

window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>60);
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if(window.scrollY >= sectionTop){
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if(link.getAttribute("href") === "#" + current){
      link.classList.add("active");
    }

  });

});
// ── Mobile menu ──
function toggleMenu(){
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('navLinks').classList.toggle('open');
}
function closeMenu(){
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('navLinks').classList.remove('open');
}

// ── Fade-in on scroll ──
const observer=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});
},{threshold:.12});
document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));