"use strict";(self.webpackChunkkom_s_blog=self.webpackChunkkom_s_blog||[]).push([[678],{7126:function(e,t,l){l.r(t),l.d(t,{default:function(){return u}});var n=l(7294),a=l(6030),s=l(8588),r=l(308),o=l(5444),i=l(3792),m=function(e){var t=e.title,l=e.tag,a=e.date,s=e.summary,r=e.url,m=n.useContext(i.ks),u=n.useRef(),c=n.useRef();return n.useEffect((function(){u.current.style.color=m.colors.postTitle,c.current.style.color=m.colors.postDate}),[m.mode]),n.createElement("li",{className:"post-list-item-module--post-list-item--6OipT"},n.createElement(o.rU,{to:r,className:"post-list-item-module--post-list-link--+Glxn"},n.createElement("h2",{className:"post-list-item-module--post-list-item-title--3q+4h",ref:u},t),n.createElement("div",{className:"post-list-item-module--post-list-item-info--NpAk0"},n.createElement("span",null,l.map((function(e){return n.createElement("p",{key:t+"-tag:"+e},"#"+e)}))),n.createElement("p",{ref:c},a)),n.createElement("p",{className:"post-list-item-module--post-list-item-summary--8FIk0"},s)))},u=function(e){var t=e.location,l=e.data,o="view-all",i=l.allMdx.nodes,u=n.useState(i),c=u[0],f=u[1],p=n.useState(o),d=p[0],E=p[1];return n.useEffect((function(){var e=t.state,l=e?e.tagName:o;E((function(){return l})),f((function(){return l===o?i:i.filter((function(e){return e.frontmatter.tag.includes(l)}))}))}),[t.state,i]),n.createElement(r.Z,{isMobile:a.tq,selectedTag:d},n.createElement(s.Z,null),n.createElement("p",{className:"index-module--index-main-position--IB6Ii"},"Documentation ",d===o?"":"> "+d),n.createElement("ul",{className:"index-module--index-main-list--18WNq"},c.map((function(e){return n.createElement(m,{key:e.id,title:e.frontmatter.title,tag:e.frontmatter.tag,date:e.frontmatter.date,summary:e.frontmatter.summary,url:"/post/"+e.slug})}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-95c14f24e57518dc312a.js.map