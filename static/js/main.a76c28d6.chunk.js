(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],[,,,,function(e,t,s){e.exports={about:"About_about__1h4TY",tags:"About_tags__1wMJn",languages:"About_languages__UbiMd",skills:"About_skills__1NAkX",tag:"About_tag__3Ufgw",description:"About_description__3alge",container:"About_container__S3ssB",email:"About_email__2dugA",icon:"About_icon__1P4Pi",img:"About_img__3oQKz"}},function(e,t,s){e.exports={home:"Home_home__1w2Vo",img:"Home_img__1lI7n",title:"Home_title__cf7uE",line:"Home_line__2qufa",email:"Home_email__1Em9W",container1:"Home_container1__2wz_G",container2:"Home_container2__2vtwg",footer:"Home_footer__1JORa",links:"Home_links__SwMBM",description:"Home_description__1Ms7v"}},function(e,t,s){e.exports={project:"Project_project__18UPS",title:"Project_title__3DwtH",links:"Project_links__1gQIs",link:"Project_link__3kNBJ",unavailable:"Project_unavailable__3tQpt",description:"Project_description__1LqBN",container:"Project_container__2ORHj",img:"Project_img__1vuHq"}},function(e,t,s){e.exports={header:"Content_header__YPBt7",links:"Content_links__3CpXb",link:"Content_link__1lnAK",title:"Content_title__1rdBc"}},function(e,t,s){e.exports={"sidebar-open":"App_sidebar-open__QN_QA",sidebar:"App_sidebar__31T6F","icon-open":"App_icon-open__2ldok",icon:"App_icon__3c8_B","content-open":"App_content-open__ZBONW",content:"App_content__2Ykua"}},,function(e,t,s){e.exports={popup:"Popup_popup__1KlLY",msg:"Popup_msg__2V-yk",img:"Popup_img__2I6gr"}},function(e,t,s){e.exports={rightArrow:"Arrows_rightArrow__1Tv9k",leftArrow:"Arrows_leftArrow__1QJTw",arrows:"Arrows_arrows__232z0"}},function(e,t,s){e.exports={dots:"Dots_dots__3VgB2",dot:"Dots_dot__1m4yu",brightdot:"Dots_brightdot__d9Kj1"}},,function(e,t,s){},function(e,t,s){e.exports={padding:"Sidebar_padding__2tUF5",btn:"Sidebar_btn__2u4U2"}},function(e,t,s){e.exports={projects:"Projects_projects__2fpMt",container:"Projects_container__2NBJF"}},function(e,t,s){e.exports={resume:"Resume_resume__11jJM",line:"Resume_line__fLbo6"}},,,,,,,,,,function(e,t,s){},,,,function(e,t,s){"use strict";s.r(t);var i=s(1),n=s.n(i),a=s(9),c=s.n(a),o=(s(27),s(2)),r=s(8),l=s.n(r),j=s(15),d=s.n(j),b=s(0),u=function(e){var t=e.setpage,s=e.className,n=e.setvisible,a=e.setDirection,c=Object(i.useState)(window.innerWidth>768),r=Object(o.a)(c,2),l=r[0],j=r[1],u=Object(i.useState)([{destination:{home:!0,projects:!1,about:!1,resume:!1},desc:"Home"},{destination:{home:!1,projects:!0,about:!1,resume:!1},desc:"Projects"},{destination:{home:!1,projects:!1,about:!0,resume:!1},desc:"About"},{destination:{home:!1,projects:!1,about:!1,resume:!0},desc:"Resume"}]),m=Object(o.a)(u,2),h=m[0],p=(m[1],function(){window.innerWidth<=768&&!0===l?(j(!1),n(!0)):window.innerWidth>768&&!1===l&&(j(!0),n(!1))});return Object(i.useEffect)((function(){return window.addEventListener("resize",p),function(){window.removeEventListener("resize",p)}}),[l]),Object(b.jsxs)("div",{className:s,children:[Object(b.jsx)("div",{className:d.a.padding}),h.map((function(e,s){return Object(b.jsx)("a",{href:"#portfolio",className:d.a.btn,onClick:function(){t(e.destination),a("fade")},children:e.desc},s)}))]})},m=s(5),h=s.n(m),p=(s(14),s.p+"static/media/circle-cropped.a9236476.png"),_=s(3),O=function(){return Object(b.jsxs)("div",{className:h.a.home,id:"home",children:[Object(b.jsx)("div",{className:h.a.container2,children:Object(b.jsx)("img",{src:p,className:h.a.img})}),Object(b.jsxs)("div",{className:h.a.container1,children:[Object(b.jsx)("h1",{className:h.a.title,children:"Nathan Yik"}),Object(b.jsx)("p",{className:h.a.description,children:"Software Engineer | Student"}),Object(b.jsxs)("div",{className:h.a.links,children:[Object(b.jsx)("a",{href:"https://www.linkedin.com/in/nathanyik/",target:"_blank",children:Object(b.jsxs)("div",{className:h.a.line,children:[Object(b.jsx)(_.h,{})," LinkedIn"]})}),Object(b.jsx)("a",{href:"https://github.com/Pawnnub",target:"_blank",children:Object(b.jsxs)("div",{className:h.a.line,children:[Object(b.jsx)(_.f,{})," GitHub"]})})]})]})]})},g=s(20),f=s(6),x=s.n(f),w=s(10),v=s.n(w),N=function(e){var t=e.img,s=e.setvisible;return Object(b.jsxs)("div",{className:v.a.popup,onClick:function(){return s(!1)},children:[Object(b.jsx)("p",{className:v.a.msg,children:"Click anywhere to exit"}),Object(b.jsx)("img",{src:t,onClick:function(){return s(!1)},className:v.a.img})]})},k=s(32),y=function(e){var t=e.title,s=e.website,n=e.code,a=e.img,c=e.msg,r=Object(i.useState)(!1),l=Object(o.a)(r,2),j=l[0],d=l[1],u=n?Object(b.jsx)("a",{className:x.a.link,href:n,target:"_blank",children:"Github"}):Object(b.jsx)("p",{className:x.a.unavailable,children:"Private source"});return Object(b.jsxs)("div",{className:x.a.project,children:[Object(b.jsx)(k.a,{in:j,timeout:350,classNames:"fade1",unmountOnExit:!0,children:Object(b.jsx)(N,{img:a,setvisible:d})}),Object(b.jsx)("h1",{className:x.a.title,children:t}),Object(b.jsxs)("div",{className:x.a.links,children:[Object(b.jsx)("a",{className:x.a.link,href:s,target:"_blank",children:"Demo"}),u]}),Object(b.jsxs)("div",{className:x.a.container,children:[Object(b.jsx)("img",{src:a,className:x.a.img,onClick:function(){d(!j)}}),Object(b.jsx)("div",{className:x.a.description,children:c})]})]})},S=s(16),A=s.n(S),P=s.p+"static/media/EmployeePortal.adcc367d.png",C=s.p+"static/media/Portfolio.77462f70.png",E=s.p+"static/media/45.3ab694ac.png",H=function(e){Object(g.a)(e);var t=Object(i.useState)([{title:"Royal Emerald Employee Portal",img:P,msg:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"An employee portal created for Royal Emerald Pharmaceuticals, a San Diego based pharmacy company."}),Object(b.jsx)("li",{children:"Facilitates employee functions such as timesheet generation, event scheduling, and hours logging."}),Object(b.jsx)("li",{children:"Technologies Used: HTML, Sass, Javascript, Node.js, Vue.js, Express, MySQL"})]}),website:"https://employee.royalemeraldrx.com/"},{title:"Personal Portfolio Website",img:C,msg:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"A personal portfolio made from scratch in React for showcasing my projects/professional profile."}),Object(b.jsx)("li",{children:"You're on this site now!"}),Object(b.jsx)("li",{children:"Technologies Used: HTML, Sass, Javascript, React.js"})]}),website:"https://pawnnub.github.io/website/",code:"https://github.com/Pawnnub/website.git"},{title:"Pathfinder Visualizer",img:E,msg:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"A future project that might be created sometime in the future who knows?"}),Object(b.jsx)("li",{children:"One day I'll get a job hopefully"}),Object(b.jsx)("li",{children:"Technologies Used: C++"})]}),website:"https://pawnnub.github.io/website/",code:"https://github.com/Pawnnub/website.git"}]),s=Object(o.a)(t,2),n=s[0];s[1];return Object(b.jsxs)("div",{className:A.a.projects,id:"projects",children:[Object(b.jsx)("h1",{children:"Projects"}),Object(b.jsx)("div",{className:A.a.container,children:n.map((function(e,t){return Object(b.jsx)(y,{title:e.title,img:e.img,msg:e.msg,code:e.code,website:e.website},t)}))})]})},L=s(4),D=s.n(L),M=function(){var e=Object(i.useState)(["Java","C","C++"]),t=Object(o.a)(e,2),s=t[0],n=(t[1],Object(i.useState)(["HTML","CSS","Sass","JavaScript","React.js"])),a=Object(o.a)(n,2),c=a[0],r=(a[1],Object(i.useState)(["Node.js","MySQL"])),l=Object(o.a)(r,2),j=l[0],d=(l[1],Object(i.useState)(["Git","Unix"])),u=Object(o.a)(d,2),m=u[0],h=(u[1],Object(i.useState)([{icon:Object(b.jsx)(_.b,{className:D.a.img}),desc:"Languages",type:s},{icon:Object(b.jsx)(_.g,{className:D.a.img}),desc:"Front End",type:c},{icon:Object(b.jsx)(_.c,{className:D.a.img}),desc:"Back End",type:j},{icon:Object(b.jsx)(_.j,{className:D.a.img}),desc:"Tools",type:m}])),p=Object(o.a)(h,2),O=p[0];p[1];return Object(b.jsxs)("div",{className:D.a.about,id:"about",children:[Object(b.jsx)("h1",{children:"About Me"}),Object(b.jsxs)("div",{className:D.a.container,children:[Object(b.jsxs)("div",{className:D.a.description,children:[Object(b.jsx)("p",{children:"I am a software engineer based in San Diego, California, with a B.S. in Mathematics and Computer Science from the University of California, San Diego."}),Object(b.jsx)("p",{children:"Here is some more placeholder text until I can figure out what to say because holy crap I am realizing that I have no skills and no professional background."}),Object(b.jsx)("p",{children:"I am now typing another random paragraph just to get a feel of what my portfolio would look like if it actually had some kind of substance."})]}),Object(b.jsx)("div",{className:D.a.skills,children:O.map((function(e,t){return Object(b.jsxs)("div",{className:D.a.languages,children:[Object(b.jsxs)("div",{className:D.a.icon,children:[e.icon,e.desc]}),Object(b.jsx)("div",{className:D.a.tags,children:e.type.map((function(e,t){return Object(b.jsx)("div",{className:D.a.tag,children:e},t)}))})]},t)}))})]}),Object(b.jsxs)("div",{className:D.a.contact,children:[Object(b.jsx)("h2",{children:"Contact Me"}),Object(b.jsxs)("div",{className:D.a.email,children:[Object(b.jsx)(_.d,{})," nathany094@gmail.com"]})]})]})},B=s(17),I=s.n(B),J=s.p+"static/media/HW.dde8ce02.pdf",T=function(){return Object(b.jsxs)("div",{className:I.a.resume,id:"resume",children:[Object(b.jsx)("h1",{children:"Like what you see?"}),Object(b.jsx)("h2",{children:"Download my resume:"}),Object(b.jsxs)("a",{href:J,target:"_blank",className:I.a.line,children:[Object(b.jsx)(_.e,{}),"Jk it's not my resume yet cause I don't have any qualifications :("]})]})},W=s(7),R=s.n(W),F=s(18),U=s(11),z=s.n(U),Q=function(e){var t=e.page,s=e.setpage,n=e.setDirection,a=["home","projects","about","resume"],c=Object(i.useState)((function(){var e;return t.home?e=0:t.projects?e=1:t.about?e=2:t.resume&&(e=3),e})),r=Object(o.a)(c,2),l=r[0],j=r[1];return Object(b.jsxs)("div",{className:z.a.arrows,children:[Object(b.jsx)("a",{href:"#portfolio",className:z.a.leftArrow,onClick:function(){var e=l-1<0?a.length-1:l-1;n("fadeLeft"),j(e),s(Object(F.a)({home:!1,projects:!1,about:!1,resume:!1},a[e],!0))},children:Object(b.jsx)(_.i,{})}),Object(b.jsx)("a",{href:"#portfolio",className:z.a.rightArrow,onClick:function(){var e=l+1>=a.length?0:l+1;n("fadeRight"),j(e),s(Object(F.a)({home:!1,projects:!1,about:!1,resume:!1},a[e],!0))},children:Object(b.jsx)(_.i,{})})]})},Y=s(12),V=s.n(Y),q=function(e){var t=e.page;return Object(b.jsx)("div",{className:V.a.dots,children:["home","projects","about","resume"].map((function(e,s){return Object(b.jsx)("div",{className:t[e]?V.a.brightdot:V.a.dot},s)}))})},G=function(e){var t=e.page,s=e.className,n=e.setpage,a=e.visible,c=e.direction,r=e.setDirection,l=Object(i.useState)([]),j=Object(o.a)(l,2),d=j[0],u=j[1];Object(i.useEffect)((function(){return u([{content:Object(b.jsx)(O,{}),dest:t.home},{content:Object(b.jsx)(H,{}),dest:t.projects},{content:Object(b.jsx)(M,{}),dest:t.about},{content:Object(b.jsx)(T,{}),dest:t.resume}]),function(){}}),[t]);var m=Object(i.useState)(window.innerWidth>768),h=Object(o.a)(m,2),p=h[0],_=h[1],g=function(){window.innerWidth<=768&&!0===p?(n({home:!0,projects:!0,about:!0,resume:!0}),_(!1)):window.innerWidth>768&&!1===p&&(_(!0),n({home:!0,projects:!1,about:!1,resume:!1}))};return Object(i.useEffect)((function(){return window.addEventListener("resize",g),function(){window.removeEventListener("resize",g)}}),[p]),Object(b.jsxs)("div",{className:s,children:[Object(b.jsx)("div",{id:"portfolio"}),Object(b.jsxs)("div",{className:R.a.header,children:[Object(b.jsx)("p",{className:R.a.title,children:"Nathan Yik"}),Object(b.jsxs)("nav",{className:R.a.links,children:[Object(b.jsx)("a",{href:"#portfolio",className:R.a.link,children:"Home"}),Object(b.jsx)("a",{href:"#projects",className:R.a.link,children:"Projects"}),Object(b.jsx)("a",{href:"#about",className:R.a.link,children:"About"}),Object(b.jsx)("a",{href:"#resume",className:R.a.link,children:"Resume"})]}),Object(b.jsx)(k.a,{in:a&&window.innerWidth>768,appear:!0,timeout:450,classNames:"fade1",unmountOnExit:!0,children:Object(b.jsx)(q,{page:t})})]}),d.map((function(e,t){return Object(b.jsx)(k.a,{in:e.dest,appear:!0,timeout:750,classNames:c,unmountOnExit:!0,children:e.content},t)})),Object(b.jsx)(k.a,{in:a,appear:!0,timeout:450,classNames:"fade1",unmountOnExit:!0,children:Object(b.jsx)(Q,{page:t,setpage:n,setDirection:r})})]})};var K=function(){var e=Object(i.useState)("fade"),t=Object(o.a)(e,2),s=t[0],n=t[1],a=Object(i.useState)(window.innerWidth>768?{home:!0,projects:!1,about:!1,resume:!1}:{home:!0,projects:!0,about:!0,resume:!0}),c=Object(o.a)(a,2),r=c[0],j=c[1],d=window.innerWidth<=768,m=Object(i.useState)(d),h=Object(o.a)(m,2),p=h[0],O=h[1],g=p?l.a.sidebar:l.a["sidebar-open"],f=p?l.a.content:l.a["content-open"],x=p?l.a.icon:l.a["icon-open"];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(_.a,{className:x,onClick:function(){return O(!p)}}),Object(b.jsx)(u,{className:g,setpage:j,selfclosing:d,setvisible:O,setDirection:n}),Object(b.jsx)(G,{className:f,page:r,setpage:j,visible:p,direction:s,setDirection:n})]})},X=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,33)).then((function(t){var s=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),i(e),n(e),a(e),c(e)}))};c.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(K,{})}),document.getElementById("root")),X()}],[[31,1,2]]]);
//# sourceMappingURL=main.a76c28d6.chunk.js.map