(this.webpackJsonpnetwork_graph=this.webpackJsonpnetwork_graph||[]).push([[0],{34:function(e,n,t){},35:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var o=t(1),c=t(2),s=t.n(c),r=t(25),a=t.n(r),i=(t(34),t(3)),l=t(17),d=(t(35),t(26)),w={edges:[{e:[1,2],w:11},{e:[1,6],w:2},{e:[1,4],w:10},{e:[2,3],w:9},{e:[2,4],w:6},{e:[2,5],w:7},{e:[3,5],w:5},{e:[3,8],w:15},{e:[4,6],w:14},{e:[4,7],w:3},{e:[5,7],w:12},{e:[5,8],w:1},{e:[6,7],w:13},{e:[7,8],w:4}],nodes:[1,2,3,4,5,6,7,8]},g={edges:[{e:[0,1],w:4},{e:[0,7],w:8},{e:[1,2],w:8},{e:[1,7],w:11},{e:[2,3],w:7},{e:[2,5],w:4},{e:[2,8],w:2},{e:[3,4],w:9},{e:[3,5],w:14},{e:[4,5],w:10},{e:[5,6],w:2},{e:[6,7],w:1},{e:[6,8],w:6},{e:[7,8],w:7}],nodes:[0,1,2,3,4,5,6,7,8]},u=t(43);var h=function(){var e=Object(c.useState)(w),n=Object(l.a)(e,2),t=n[0],s=n[1],r=Object(c.useState)(!0),a=Object(l.a)(r,2),h=a[0],b=a[1];return Object(c.useEffect)((function(){var e=Object(d.a)("graph");e.remove(),e.size([800,800]),e.zoom(1.5),e.edgelayout("symmetric"),e.nodes(t.nodes).add().color("blue"),t.edges.map((function(n){e.edge(n.e).add({length:n.w}).label().add({text:n.w})})),e.pause(2),h&&(!function(e,n,t){var o=0,c=0,s=e.sort((function(e,n){return e.w<n.w?-1:1}));console.log(s);var r,a,l,d,w,g,h,b=new u(n.length),j=[],f=[],p=Object(i.a)(n);try{for(p.s();!(h=p.n()).done;){var O=h.value;j.push(O),f.push(0)}}catch(v){p.e(v)}finally{p.f()}for(console.log("parent",j);c<n.length-1&&o<e.length;)r=s[o],console.log(r),a=r.e[0],l=r.e[1],d=r.w,o+=1,console.log("u v w",a,l,d),w=b.find(a),g=b.find(l),console.log("x,y",w,g),w!=g&&(c+=1,b.link(a,l),console.log(a,l),t.node(a).highlight().size("1.25x"),t.node(a).color("orange"),t.pause(.5),t.edge([a,l]).highlight(0),t.edge([a,l]).traverse("red").thickness(5),t.node(l).highlight().size("1.25x"),t.node(l).color("orange"),t.pause(.5))}(t.edges,t.nodes,e),b(!1))})),Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{className:"graph-section",children:[Object(o.jsx)("h2",{children:"Kruskal Algorithm"}),Object(o.jsx)("button",{className:"btn",onClick:function(){s(w),b(!0)},children:"Network1"}),Object(o.jsx)("button",{className:"btn",onClick:function(){s(g),b(!0)},children:"Network2"}),Object(o.jsx)("div",{id:"graph"}),Object(o.jsx)("button",{className:"btn",onClick:function(){return b(!0)},children:"Replay"})]})})},b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(n){var t=n.getCLS,o=n.getFID,c=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),o(e),c(e),s(e),r(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),b()}},[[44,1,2]]]);
//# sourceMappingURL=main.46464102.chunk.js.map