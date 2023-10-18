(function framework7ComponentLoader(e,t){void 0===t&&(t=!0);var s=e.$,o=e.utils,i=(e.getDevice,e.getSupport),n=(e.Class,e.Modal,e.ConstructorMethods,e.ModalMethods,o.nextFrame),a=o.bindMethods;const r={init(){const e=this,t=getDocument(),o={};let n,a,p,l,u,w,f,d,c,h,g,m,v,C,x,O,$,E,M,T,L;const S=!!i().passiveListener&&{passive:!0};e.on("touchstart",(t=>{if(r.el){const o=s(t.target);s(r.el).is(o[0])||o.parents(".swipeout").is(r.el)||o.hasClass("modal-in")||(o.attr("class")||"").indexOf("-backdrop")>0||o.hasClass("actions-modal")||o.parents(".actions-modal.modal-in, .dialog.modal-in").length>0||e.swipeout.close(r.el)}})),s(t).on(e.touchEvents.start,"li.swipeout",(function(t){e.swipeout.allow&&(a=!1,n=!0,p=void 0,o.x="touchstart"===t.type?t.targetTouches[0].pageX:t.pageX,o.y="touchstart"===t.type?t.targetTouches[0].pageY:t.pageY,l=(new Date).getTime(),w=s(this))}),S),e.on("touchmove:active",(function(t){if(!n)return;const i="touchmove"===t.type?t.targetTouches[0].pageX:t.pageX,r="touchmove"===t.type?t.targetTouches[0].pageY:t.pageY;if(void 0===p&&(p=!!(p||Math.abs(r-o.y)>Math.abs(i-o.x))),p)return void(n=!1);if(!a){if(s(".list.sortable-opened").length>0)return;f=w.find(".swipeout-content"),d=w.find(".swipeout-actions-right"),c=w.find(".swipeout-actions-left"),h=null,g=null,x=null,O=null,M=null,E=null,c.length>0&&(h=c.outerWidth(),x=c.children("a"),E=c.find(".swipeout-overswipe")),d.length>0&&(g=d.outerWidth(),O=d.children("a"),M=d.find(".swipeout-overswipe")),v=w.hasClass("swipeout-opened"),v&&(C=w.find(".swipeout-actions-left.swipeout-actions-opened").length>0?"left":"right"),w.removeClass("swipeout-transitioning"),e.params.swipeout.noFollow||(w.find(".swipeout-actions-opened").removeClass("swipeout-actions-opened"),w.removeClass("swipeout-opened"))}if(a=!0,t.cancelable&&t.preventDefault(),u=i-o.x,m=u,v&&("right"===C?m-=g:m+=h),m>0&&0===c.length||m<0&&0===d.length){if(!v)return n=!1,a=!1,f.transform(""),O&&O.length>0&&O.transform(""),void(x&&x.length>0&&x.transform(""));m=0}let l,S;if(m<0?$="to-left":m>0?$="to-right":$||($="to-left"),t.f7PreventSwipePanel=!0,e.params.swipeout.noFollow)return v?("right"===C&&u>0&&e.swipeout.close(w),"left"===C&&u<0&&e.swipeout.close(w)):(u<0&&d.length>0&&e.swipeout.open(w,"right"),u>0&&c.length>0&&e.swipeout.open(w,"left")),n=!1,void(a=!1);if(T=!1,L=!1,d.length>0){let t=m;if(S=t/g,t<-g){const s=t/-g;t=-g-(-t-g)**.8,m=t,M.length>0&&s>e.params.swipeout.overswipeRatio&&(L=!0)}"to-left"!==$&&(S=0,t=0),O.each((o=>{const i=s(o);void 0===o.f7SwipeoutButtonOffset&&(i[0].f7SwipeoutButtonOffset=o.offsetLeft),l=o.f7SwipeoutButtonOffset,M.length>0&&i.hasClass("swipeout-overswipe")&&"to-left"===$&&(i.css({left:(L?-l:0)+"px"}),L?(i.hasClass("swipeout-overswipe-active")||(w.trigger("swipeout:overswipeenter"),e.emit("swipeoutOverswipeEnter",w[0])),i.addClass("swipeout-overswipe-active")):(i.hasClass("swipeout-overswipe-active")&&(w.trigger("swipeout:overswipeexit"),e.emit("swipeoutOverswipeExit",w[0])),i.removeClass("swipeout-overswipe-active"))),i.transform(`translate3d(${t-l*(1+Math.max(S,-1))}px,0,0)`)}))}if(c.length>0){let t=m;if(S=t/h,t>h){const s=t/g;t=h+(t-h)**.8,m=t,E.length>0&&s>e.params.swipeout.overswipeRatio&&(T=!0)}"to-right"!==$&&(t=0,S=0),x.each(((o,i)=>{const n=s(o);void 0===o.f7SwipeoutButtonOffset&&(n[0].f7SwipeoutButtonOffset=h-o.offsetLeft-o.offsetWidth),l=o.f7SwipeoutButtonOffset,E.length>0&&n.hasClass("swipeout-overswipe")&&"to-right"===$&&(n.css({left:`${T?l:0}px`}),T?(n.hasClass("swipeout-overswipe-active")||(w.trigger("swipeout:overswipeenter"),e.emit("swipeoutOverswipeEnter",w[0])),n.addClass("swipeout-overswipe-active")):(n.hasClass("swipeout-overswipe-active")&&(w.trigger("swipeout:overswipeexit"),e.emit("swipeoutOverswipeExit",w[0])),n.removeClass("swipeout-overswipe-active"))),x.length>1&&n.css("z-index",x.length-i),n.transform(`translate3d(${t+l*(1-Math.min(S,1))}px,0,0)`)}))}w.trigger("swipeout",S),e.emit("swipeout",w[0],S),f.transform(`translate3d(${m}px,0,0)`)})),e.on("touchend:passive",(function(){if(!n||!a)return n=!1,void(a=!1);n=!1,a=!1;const t=(new Date).getTime()-l,o="to-left"===$?d:c,i="to-left"===$?g:h;let p,C,E,M;if(p=t<300&&(u<-10&&"to-left"===$||u>10&&"to-right"===$)||t>=300&&Math.abs(m)>i/2?"open":"close",t<300&&(0===Math.abs(m)&&(p="close"),Math.abs(m)===i&&(p="open")),"open"===p){r.el=w[0],w.trigger("swipeout:open"),e.emit("swipeoutOpen",w[0]),w.addClass("swipeout-opened swipeout-transitioning");const t="to-left"===$?-i:i;if(f.transform(`translate3d(${t}px,0,0)`),o.addClass("swipeout-actions-opened"),C="to-left"===$?O:x,C)for(E=0;E<C.length;E+=1)s(C[E]).transform(`translate3d(${t}px,0,0)`);L&&d.find(".swipeout-overswipe").trigger("click","f7Overswipe"),T&&c.find(".swipeout-overswipe").trigger("click","f7Overswipe")}else w.trigger("swipeout:close"),e.emit("swipeoutClose",w[0]),r.el=void 0,w.addClass("swipeout-transitioning").removeClass("swipeout-opened"),f.transform(""),o.removeClass("swipeout-actions-opened");x&&x.length>0&&x!==C&&x.each((e=>{const t=s(e);M=e.f7SwipeoutButtonOffset,void 0===M&&(t[0].f7SwipeoutButtonOffset=h-e.offsetLeft-e.offsetWidth),t.transform(`translate3d(${M}px,0,0)`)})),O&&O.length>0&&O!==C&&O.each((e=>{const t=s(e);M=e.f7SwipeoutButtonOffset,void 0===M&&(t[0].f7SwipeoutButtonOffset=e.offsetLeft),t.transform(`translate3d(${-M}px,0,0)`)})),f.transitionEnd((()=>{v&&"open"===p||!v&&"close"===p||(w.trigger("open"===p?"swipeout:opened":"swipeout:closed"),e.emit("open"===p?"swipeoutOpened":"swipeoutClosed",w[0]),w.removeClass("swipeout-transitioning"),v&&"close"===p&&(d.length>0&&O.transform(""),c.length>0&&x.transform("")))}))}))},allow:!0,el:void 0,open(){const e=this;for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];let[a,p,l]=o;"function"==typeof o[1]&&([a,l,p]=o);const u=s(a).eq(0);if(0===u.length)return;if(!u.hasClass("swipeout")||u.hasClass("swipeout-opened"))return;p||(p=u.find(".swipeout-actions-right").length>0?"right":"left");const w=u.find(`.swipeout-actions-${p}`),f=u.find(".swipeout-content");if(0===w.length)return;u.trigger("swipeout:open").addClass("swipeout-opened").removeClass("swipeout-transitioning"),e.emit("swipeoutOpen",u[0]),w.addClass("swipeout-actions-opened");const d=w.children("a"),c=w.outerWidth(),h="right"===p?-c:c;d.length>1&&d.each(((e,t)=>{const o=s(e);"right"===p?o.transform(`translate3d(${-e.offsetLeft}px,0,0)`):o.css("z-index",d.length-t).transform(`translate3d(${c-e.offsetWidth-e.offsetLeft}px,0,0)`)})),u.addClass("swipeout-transitioning"),f.transitionEnd((()=>{u.trigger("swipeout:opened"),e.emit("swipeoutOpened",u[0]),l&&l.call(u[0])})),n((()=>{d.transform(`translate3d(${h}px,0,0)`),f.transform(`translate3d(${h}px,0,0)`)})),r.el=u[0]},close(e,t){const o=this,i=s(e).eq(0);if(0===i.length)return;if(!i.hasClass("swipeout-opened"))return;const n=i.find(".swipeout-actions-opened").hasClass("swipeout-actions-right")?"right":"left",a=i.find(".swipeout-actions-opened").removeClass("swipeout-actions-opened"),p=a.children("a"),l=a.outerWidth();let u;function w(){o.swipeout.allow=!0,i.hasClass("swipeout-opened")||(i.removeClass("swipeout-transitioning"),p.transform(""),i.trigger("swipeout:closed"),o.emit("swipeoutClosed",i[0]),t&&t.call(i[0]),u&&clearTimeout(u))}o.swipeout.allow=!1,i.trigger("swipeout:close"),o.emit("swipeoutClose",i[0]),i.removeClass("swipeout-opened").addClass("swipeout-transitioning"),i.find(".swipeout-content").transform("").transitionEnd(w),u=setTimeout(w,500),p.each((e=>{const t=s(e);"right"===n?t.transform(`translate3d(${-e.offsetLeft}px,0,0)`):t.transform(`translate3d(${l-e.offsetWidth-e.offsetLeft}px,0,0)`),t.css({left:"0px"}).removeClass("swipeout-overswipe-active")})),r.el&&r.el===i[0]&&(r.el=void 0)},delete(e,t){const o=this,i=s(e).eq(0);0!==i.length&&(r.el=void 0,i.trigger("swipeout:delete"),o.emit("swipeoutDelete",i[0]),i.css({height:`${i.outerHeight()}px`}),i.transitionEnd((()=>{if(i.trigger("swipeout:deleted"),o.emit("swipeoutDeleted",i[0]),t&&t.call(i[0]),i.parents(".virtual-list").length>0){const e=i.parents(".virtual-list")[0].f7VirtualList,t=i[0].f7VirtualListIndex;e&&void 0!==t&&e.deleteItem(t)}else o.params.swipeout.removeElements?o.params.swipeout.removeElementsWithTimeout?setTimeout((()=>{i.remove()}),o.params.swipeout.removeElementsTimeout):i.remove():i.removeClass("swipeout-deleting swipeout-transitioning")})),n((()=>{i.addClass("swipeout-deleting swipeout-transitioning").css({height:"0px"}).find(".swipeout-content").transform("translate3d(-100%,0,0)")})))}};var p={name:"swipeout",params:{swipeout:{actionsNoFold:!1,noFollow:!1,removeElements:!0,removeElementsWithTimeout:!1,removeElementsTimeout:0,overswipeRatio:1.2}},create(){a(this,{swipeout:r})},clicks:{".swipeout-open":function(e,t){void 0===t&&(t={});this.swipeout.open(t.swipeout,t.side)},".swipeout-close":function(e){const t=e.closest(".swipeout");0!==t.length&&this.swipeout.close(t)},".swipeout-delete":function(e,t){void 0===t&&(t={});const s=this,o=e.closest(".swipeout");if(0===o.length)return;const{confirm:i,confirmTitle:n}=t;t.confirm?s.dialog.confirm(i,n,(()=>{s.swipeout.delete(o)})):s.swipeout.delete(o)}},on:{init(){this.params.swipeout&&this.swipeout.init()}}};if(t){if(e.prototype.modules&&e.prototype.modules[p.name])return;e.use(p),e.instance&&(e.instance.useModuleParams(p,e.instance.params),e.instance.useModule(p))}return p}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
