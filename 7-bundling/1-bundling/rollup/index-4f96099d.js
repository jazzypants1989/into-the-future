import{i as e,c as t,a as s,D as n,b as i,d as r,e as a,m as l,f as o,y as d,g as c,h as g,j as f,k as h,R as u,s as p,_ as y,l as v,B as m,r as b,n as R,P as x,o as S,S as E,V as w,p as C,q as D,t as k,u as P,v as M,w as H,E as T,x as N,z,W,A as I,C as O,F as A,G,H as j,I as B,J as q,K as F,M as V,L,N as U,O as Y,Q as $,T as J}from"./index-ab3a7d57.js";function K(e,t){let s=[];for(let e=0;e<t;e+=1)s[e]=[];for(let t of e)s[t.row].push(t);return s}function Q(e,t){let s=[];for(let e=0;e<t;e+=1)s[e]=[];for(let t of e)s[t.firstCol].push(t);return s}function Z(e,t){let s=[];if(e){for(let n=0;n<t;n+=1)s[n]={affectedInstances:e.affectedInstances,isEvent:e.isEvent,segs:[]};for(let t of e.segs)s[t.row].segs.push(t)}else for(let e=0;e<t;e+=1)s[e]=null;return s}e(':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}');const X=t({hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"narrow"});function _(e){let{display:t}=e.eventRange.ui;return"list-item"===t||"auto"===t&&!e.eventRange.def.allDay&&e.firstCol===e.lastCol&&e.isStart&&e.isEnd}class ee extends k{render(){let{props:e}=this;return d(P,Object.assign({},e,{elClasses:["fc-daygrid-event","fc-daygrid-block-event","fc-h-event"],defaultTimeFormat:X,defaultDisplayEventEnd:e.defaultDisplayEventEnd,disableResizing:!e.seg.eventRange.def.allDay}))}}class te extends k{render(){let{props:e,context:t}=this,{options:s}=t,{seg:n}=e,i=s.eventTimeFormat||X,r=M(n,i,t,!0,e.defaultDisplayEventEnd);return d(T,Object.assign({},e,{elTag:"a",elClasses:["fc-daygrid-event","fc-daygrid-dot-event"],elAttrs:H(e.seg,t),defaultGenerator:se,timeText:r,isResizing:!1,isDateSelecting:!1}))}}function se(e){return d(y,null,d("div",{className:"fc-daygrid-event-dot",style:{borderColor:e.borderColor||e.backgroundColor}}),e.timeText&&d("div",{className:"fc-event-time"},e.timeText),d("div",{className:"fc-event-title"},e.event.title||d(y,null," ")))}class ne extends k{constructor(){super(...arguments),this.compileSegs=l(ie)}render(){let{props:e}=this,{allSegs:t,invisibleSegs:s}=this.compileSegs(e.singlePlacements);return d(V,{elClasses:["fc-daygrid-more-link"],dateProfile:e.dateProfile,todayRange:e.todayRange,allDayDate:e.allDayDate,moreCnt:e.moreCnt,allSegs:t,hiddenSegs:s,alignmentElRef:e.alignmentElRef,alignGridTop:e.alignGridTop,extraDateSpan:e.extraDateSpan,popoverContent:()=>{let s=(e.eventDrag?e.eventDrag.affectedInstances:null)||(e.eventResize?e.eventResize.affectedInstances:null)||{};return d(y,null,t.map((t=>{let n=t.eventRange.instance.instanceId;return d("div",{className:"fc-daygrid-event-harness",key:n,style:{visibility:s[n]?"hidden":""}},_(t)?d(te,Object.assign({seg:t,isDragging:!1,isSelected:n===e.eventSelection,defaultDisplayEventEnd:!1},v(t,e.todayRange))):d(ee,Object.assign({seg:t,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:n===e.eventSelection,defaultDisplayEventEnd:!1},v(t,e.todayRange))))})))}})}}function ie(e){let t=[],s=[];for(let n of e)t.push(n.seg),n.isVisible||s.push(n.seg);return{allSegs:t,invisibleSegs:s}}const re=t({week:"narrow"});class ae extends h{constructor(){super(...arguments),this.rootElRef=o(),this.state={dayNumberId:N()},this.handleRootEl=e=>{z(this.rootElRef,e),z(this.props.elRef,e)}}render(){let{context:e,props:t,state:s,rootElRef:n}=this,{options:i,dateEnv:r}=e,{date:a,dateProfile:l}=t;const o=t.showDayNumber&&function(e,t,s){const{start:n,end:i}=t,r=G(i,-1),a=s.getYear(n),l=s.getMonth(n),o=s.getYear(r),d=s.getMonth(r);return!(a===o&&l===d)&&Boolean(e.valueOf()===n.valueOf()||1===s.getDay(e)&&e.valueOf()<i.valueOf())}(a,l.currentRange,r);return d(A,{elTag:"td",elRef:this.handleRootEl,elClasses:["fc-daygrid-day",...t.extraClassNames||[]],elAttrs:Object.assign(Object.assign(Object.assign({},t.extraDataAttrs),t.showDayNumber?{"aria-labelledby":s.dayNumberId}:{}),{role:"gridcell"}),defaultGenerator:le,date:a,dateProfile:l,todayRange:t.todayRange,showDayNumber:t.showDayNumber,isMonthStart:o,extraRenderProps:t.extraRenderProps},((r,l)=>d("div",{ref:t.innerElRef,className:"fc-daygrid-day-frame fc-scrollgrid-sync-inner",style:{minHeight:t.minHeight}},t.showWeekNumber&&d(W,{elTag:"a",elClasses:["fc-daygrid-week-number"],elAttrs:I(e,a,"week"),date:a,defaultFormat:re}),!l.isDisabled&&(t.showDayNumber||O(i)||t.forceDayTop)?d("div",{className:"fc-daygrid-day-top"},d(r,{elTag:"a",elClasses:["fc-daygrid-day-number",o&&"fc-daygrid-month-start"],elAttrs:Object.assign(Object.assign({},I(e,a)),{id:s.dayNumberId})})):t.showDayNumber?d("div",{className:"fc-daygrid-day-top",style:{visibility:"hidden"}},d("a",{className:"fc-daygrid-day-number"}," ")):void 0,d("div",{className:"fc-daygrid-day-events",ref:t.fgContentElRef},t.fgContent,d("div",{className:"fc-daygrid-day-bottom",style:{marginTop:t.moreMarginTop}},d(ne,{allDayDate:a,singlePlacements:t.singlePlacements,moreCnt:t.moreCnt,alignmentElRef:n,alignGridTop:!t.showDayNumber,extraDateSpan:t.extraDateSpan,dateProfile:t.dateProfile,eventSelection:t.eventSelection,eventDrag:t.eventDrag,eventResize:t.eventResize,todayRange:t.todayRange}))),d("div",{className:"fc-daygrid-day-bg"},t.bgContent))))}}function le(e){return e.dayNumberText||d(y,null," ")}function oe(e,t,s,n,i,r,a){let l=new ce;l.allowReslicing=!0,l.strictOrder=n,!0===t||!0===s?(l.maxCoord=r,l.hiddenConsumes=!0):"number"==typeof t?l.maxStackCnt=t:"number"==typeof s&&(l.maxStackCnt=s,l.hiddenConsumes=!0);let o=[],d=[];for(let t=0;t<e.length;t+=1){let s=e[t],{instanceId:n}=s.eventRange.instance,r=i[n];null!=r?o.push({index:t,thickness:r,span:{start:s.firstCol,end:s.lastCol+1}}):d.push(s)}let c=l.addSegs(o),g=l.toRects(),{singleColPlacements:f,multiColPlacements:h,leftoverMargins:u}=function(e,t,s){let n=function(e,t){let s=[];for(let e=0;e<t;e+=1)s.push([]);for(let t of e)for(let e=t.span.start;e<t.span.end;e+=1)s[e].push(t);return s}(e,s.length),i=[],r=[],a=[];for(let e=0;e<s.length;e+=1){let l=n[e],o=[],d=0,c=0;for(let n of l){let i=t[n.index];o.push({seg:de(i,e,e+1,s),isVisible:!0,isAbsolute:!1,absoluteTop:n.levelCoord,marginTop:n.levelCoord-d}),d=n.levelCoord+n.thickness}let g=[];d=0,c=0;for(let n of l){let i=t[n.index],r=n.span.end-n.span.start>1,a=n.span.start===e;c+=n.levelCoord-d,d=n.levelCoord+n.thickness,r?(c+=n.thickness,a&&g.push({seg:de(i,n.span.start,n.span.end,s),isVisible:!0,isAbsolute:!0,absoluteTop:n.levelCoord,marginTop:0})):a&&(g.push({seg:de(i,n.span.start,n.span.end,s),isVisible:!0,isAbsolute:!1,absoluteTop:n.levelCoord,marginTop:c}),c=0)}i.push(o),r.push(g),a.push(c)}return{singleColPlacements:i,multiColPlacements:r,leftoverMargins:a}}(g,e,a),p=[],y=[];for(let e of d){h[e.firstCol].push({seg:e,isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(let t=e.firstCol;t<=e.lastCol;t+=1)f[t].push({seg:de(e,t,t+1,a),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(let e=0;e<a.length;e+=1)p.push(0);for(let t of c){let s=e[t.index],n=t.span;h[n.start].push({seg:de(s,n.start,n.end,a),isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(let e=n.start;e<n.end;e+=1)p[e]+=1,f[e].push({seg:de(s,e,e+1,a),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(let e=0;e<a.length;e+=1)y.push(u[e]);return{singleColPlacements:f,multiColPlacements:h,moreCnts:p,moreMarginTops:y}}function de(e,t,s,n){if(e.firstCol===t&&e.lastCol===s-1)return e;let i=e.eventRange,a=i.range,l=j(a,{start:n[t].date,end:r(n[s-1].date,1)});return Object.assign(Object.assign({},e),{firstCol:t,lastCol:s-1,eventRange:{def:i.def,ui:Object.assign(Object.assign({},i.ui),{durationEditable:!1}),instance:i.instance,range:l},isStart:e.isStart&&l.start.valueOf()===a.start.valueOf(),isEnd:e.isEnd&&l.end.valueOf()===a.end.valueOf()})}class ce extends B{constructor(){super(...arguments),this.hiddenConsumes=!1,this.forceHidden={}}addSegs(e){const t=super.addSegs(e),{entriesByLevel:s}=this,n=e=>!this.forceHidden[q(e)];for(let e=0;e<s.length;e+=1)s[e]=s[e].filter(n);return t}handleInvalidInsertion(e,t,s){const{entriesByLevel:n,forceHidden:i}=this,{touchingEntry:r,touchingLevel:a,touchingLateral:l}=e;if(this.hiddenConsumes&&r){const e=q(r);if(!i[e])if(this.allowReslicing){const e=Object.assign(Object.assign({},r),{span:F(r.span,t.span)});i[q(e)]=!0,n[a][l]=e,this.splitEntry(r,t,s)}else i[e]=!0,s.push(r)}return super.handleInvalidInsertion(e,t,s)}}class ge extends h{constructor(){super(...arguments),this.cellElRefs=new u,this.frameElRefs=new u,this.fgElRefs=new u,this.segHarnessRefs=new u,this.rootElRef=o(),this.state={framePositions:null,maxContentHeight:null,eventInstanceHeights:{}},this.handleResize=e=>{e&&this.updateSizing(!0)}}render(){let{props:e,state:t,context:s}=this,{options:n}=s,i=e.cells.length,r=Q(e.businessHourSegs,i),a=Q(e.bgEventSegs,i),l=Q(this.getHighlightSegs(),i),o=Q(this.getMirrorSegs(),i),{singleColPlacements:c,multiColPlacements:g,moreCnts:f,moreMarginTops:h}=oe(p(e.fgEventSegs,n.eventOrder),e.dayMaxEvents,e.dayMaxEventRows,n.eventOrderStrict,t.eventInstanceHeights,t.maxContentHeight,e.cells),u=e.eventDrag&&e.eventDrag.affectedInstances||e.eventResize&&e.eventResize.affectedInstances||{};return d("tr",{ref:this.rootElRef,role:"row"},e.renderIntro&&e.renderIntro(),e.cells.map(((t,s)=>{let n=this.renderFgSegs(s,e.forPrint?c[s]:g[s],e.todayRange,u),i=this.renderFgSegs(s,function(e,t){if(!e.length)return[];let s=function(e){let t={};for(let s of e)for(let e of s)t[e.seg.eventRange.instance.instanceId]=e.absoluteTop;return t}(t);return e.map((e=>({seg:e,isVisible:!0,isAbsolute:!0,absoluteTop:s[e.eventRange.instance.instanceId],marginTop:0})))}(o[s],g),e.todayRange,{},Boolean(e.eventDrag),Boolean(e.eventResize),!1);return d(ae,{key:t.key,elRef:this.cellElRefs.createRef(t.key),innerElRef:this.frameElRefs.createRef(t.key),dateProfile:e.dateProfile,date:t.date,showDayNumber:e.showDayNumbers,showWeekNumber:e.showWeekNumbers&&0===s,forceDayTop:e.showWeekNumbers,todayRange:e.todayRange,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,extraRenderProps:t.extraRenderProps,extraDataAttrs:t.extraDataAttrs,extraClassNames:t.extraClassNames,extraDateSpan:t.extraDateSpan,moreCnt:f[s],moreMarginTop:h[s],singlePlacements:c[s],fgContentElRef:this.fgElRefs.createRef(t.key),fgContent:d(y,null,d(y,null,n),d(y,null,i)),bgContent:d(y,null,this.renderFillSegs(l[s],"highlight"),this.renderFillSegs(r[s],"non-business"),this.renderFillSegs(a[s],"bg-event")),minHeight:e.cellMinHeight})})))}componentDidMount(){this.updateSizing(!0),this.context.addResizeHandler(this.handleResize)}componentDidUpdate(e,t){let n=this.props;this.updateSizing(!s(e,n))}componentWillUnmount(){this.context.removeResizeHandler(this.handleResize)}getHighlightSegs(){let{props:e}=this;return e.eventDrag&&e.eventDrag.segs.length?e.eventDrag.segs:e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:e.dateSelectionSegs}getMirrorSegs(){let{props:e}=this;return e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:[]}renderFgSegs(e,t,s,n,i,r,a){let{context:l}=this,{eventSelection:o}=this.props,{framePositions:c}=this.state,g=1===this.props.cells.length,f=i||r||a,h=[];if(c)for(let u of t){let{seg:t}=u,{instanceId:p}=t.eventRange.instance,y=p+":"+e,m=u.isVisible&&!n[p],b=u.isAbsolute,R="",x="";b&&(l.isRtl?(x=0,R=c.lefts[t.lastCol]-c.lefts[t.firstCol]):(R=0,x=c.rights[t.firstCol]-c.rights[t.lastCol])),h.push(d("div",{className:"fc-daygrid-event-harness"+(b?" fc-daygrid-event-harness-abs":""),key:y,ref:f?null:this.segHarnessRefs.createRef(y),style:{visibility:m?"":"hidden",marginTop:b?"":u.marginTop,top:b?u.absoluteTop:"",left:R,right:x}},_(t)?d(te,Object.assign({seg:t,isDragging:i,isSelected:p===o,defaultDisplayEventEnd:g},v(t,s))):d(ee,Object.assign({seg:t,isDragging:i,isResizing:r,isDateSelecting:a,isSelected:p===o,defaultDisplayEventEnd:g},v(t,s)))))}return h}renderFillSegs(e,t){let{isRtl:s}=this.context,{todayRange:n}=this.props,{framePositions:i}=this.state,r=[];if(i)for(let a of e){let e=s?{right:0,left:i.lefts[a.lastCol]-i.lefts[a.firstCol]}:{left:0,right:i.rights[a.firstCol]-i.rights[a.lastCol]};r.push(d("div",{key:R(a.eventRange),className:"fc-daygrid-bg-harness",style:e},"bg-event"===t?d(m,Object.assign({seg:a},v(a,n))):b(t)))}return d(y,{},...r)}updateSizing(e){let{props:t,state:s,frameElRefs:n}=this;if(!t.forPrint&&null!==t.clientWidth){if(e){let e=t.cells.map((e=>n.currentMap[e.key]));if(e.length){let t=this.rootElRef.current,n=new x(t,e,!0,!1);s.framePositions&&s.framePositions.similarTo(n)||this.setState({framePositions:new x(t,e,!0,!1)})}}const i=this.state.eventInstanceHeights,r=this.queryEventInstanceHeights(),a=!0===t.dayMaxEvents||!0===t.dayMaxEventRows;this.safeSetState({eventInstanceHeights:Object.assign(Object.assign({},i),r),maxContentHeight:a?this.computeMaxContentHeight():null})}}queryEventInstanceHeights(){let e=this.segHarnessRefs.currentMap,t={};for(let s in e){let n=Math.round(e[s].getBoundingClientRect().height),i=s.split(":")[0];t[i]=Math.max(t[i]||0,n)}return t}computeMaxContentHeight(){let e=this.props.cells[0].key,t=this.cellElRefs.currentMap[e],s=this.fgElRefs.currentMap[e];return t.getBoundingClientRect().bottom-s.getBoundingClientRect().top}getCellEls(){let e=this.cellElRefs.currentMap;return this.props.cells.map((t=>e[t.key]))}}ge.addStateEquality({eventInstanceHeights:s});class fe extends h{constructor(){super(...arguments),this.splitBusinessHourSegs=l(K),this.splitBgEventSegs=l(K),this.splitFgEventSegs=l(K),this.splitDateSelectionSegs=l(K),this.splitEventDrag=l(Z),this.splitEventResize=l(Z),this.rowRefs=new u}render(){let{props:e,context:t}=this,s=e.cells.length,n=this.splitBusinessHourSegs(e.businessHourSegs,s),i=this.splitBgEventSegs(e.bgEventSegs,s),r=this.splitFgEventSegs(e.fgEventSegs,s),a=this.splitDateSelectionSegs(e.dateSelectionSegs,s),l=this.splitEventDrag(e.eventDrag,s),o=this.splitEventResize(e.eventResize,s),c=s>=7&&e.clientWidth?e.clientWidth/t.options.aspectRatio/6:null;return d($,{unit:"day"},((t,g)=>d(y,null,e.cells.map(((t,f)=>d(ge,{ref:this.rowRefs.createRef(f),key:t.length?t[0].date.toISOString():f,showDayNumbers:s>1,showWeekNumbers:e.showWeekNumbers,todayRange:g,dateProfile:e.dateProfile,cells:t,renderIntro:e.renderRowIntro,businessHourSegs:n[f],eventSelection:e.eventSelection,bgEventSegs:i[f].filter(he),fgEventSegs:r[f],dateSelectionSegs:a[f],eventDrag:l[f],eventResize:o[f],dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,clientWidth:e.clientWidth,clientHeight:e.clientHeight,cellMinHeight:c,forPrint:e.forPrint}))))))}componentDidMount(){const e=this.rowRefs.currentMap[0].getCellEls()[0];this.rootEl=e?e.closest(".fc-daygrid-body"):null,this.rootEl&&this.context.registerInteractiveComponent(this,{el:this.rootEl,isHitComboAllowed:this.props.isHitComboAllowed})}componentWillUnmount(){this.rootEl&&(this.context.unregisterInteractiveComponent(this),this.rootEl=null)}prepareHits(){this.rowPositions=new x(this.rootEl,this.rowRefs.collect().map((e=>e.getCellEls()[0])),!1,!0),this.colPositions=new x(this.rootEl,this.rowRefs.currentMap[0].getCellEls(),!0,!1)}queryHit(e,t){let{colPositions:s,rowPositions:n}=this,i=s.leftToIndex(e),r=n.topToIndex(t);if(null!=r&&null!=i){let e=this.props.cells[r][i];return{dateProfile:this.props.dateProfile,dateSpan:Object.assign({range:this.getCellRange(r,i),allDay:!0},e.extraDateSpan),dayEl:this.getCellEl(r,i),rect:{left:s.lefts[i],right:s.rights[i],top:n.tops[r],bottom:n.bottoms[r]},layer:0}}return null}getCellEl(e,t){return this.rowRefs.currentMap[e].getCellEls()[t]}getCellRange(e,t){let s=this.props.cells[e][t].date;return{start:s,end:r(s,1)}}}function he(e){return e.eventRange.def.allDay}class ue extends h{constructor(){super(...arguments),this.elRef=o(),this.needsScrollReset=!1}render(){let{props:e}=this,{dayMaxEventRows:t,dayMaxEvents:s,expandRows:n}=e,i=!0===s||!0===t;i&&!n&&(i=!1,t=null,s=null);let r=["fc-daygrid-body",i?"fc-daygrid-body-balanced":"fc-daygrid-body-unbalanced",n?"":"fc-daygrid-body-natural"];return d("div",{ref:this.elRef,className:r.join(" "),style:{width:e.clientWidth,minWidth:e.tableMinWidth}},d("table",{role:"presentation",className:"fc-scrollgrid-sync-table",style:{width:e.clientWidth,minWidth:e.tableMinWidth,height:n?e.clientHeight:""}},e.colGroupNode,d("tbody",{role:"presentation"},d(fe,{dateProfile:e.dateProfile,cells:e.cells,renderRowIntro:e.renderRowIntro,showWeekNumbers:e.showWeekNumbers,clientWidth:e.clientWidth,clientHeight:e.clientHeight,businessHourSegs:e.businessHourSegs,bgEventSegs:e.bgEventSegs,fgEventSegs:e.fgEventSegs,dateSelectionSegs:e.dateSelectionSegs,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,dayMaxEvents:s,dayMaxEventRows:t,forPrint:e.forPrint,isHitComboAllowed:e.isHitComboAllowed}))))}componentDidMount(){this.requestScrollReset()}componentDidUpdate(e){e.dateProfile!==this.props.dateProfile?this.requestScrollReset():this.flushScrollReset()}requestScrollReset(){this.needsScrollReset=!0,this.flushScrollReset()}flushScrollReset(){if(this.needsScrollReset&&this.props.clientWidth){const e=function(e,t){let s;t.currentRangeUnit.match(/year|month/)&&(s=e.querySelector(`[data-date="${L(t.currentDate)}-01"]`));s||(s=e.querySelector(`[data-date="${U(t.currentDate)}"]`));return s}(this.elRef.current,this.props.dateProfile);if(e){const t=e.closest(".fc-daygrid-body"),s=t.closest(".fc-scroller"),n=e.getBoundingClientRect().top-t.getBoundingClientRect().top;s.scrollTop=n?n+1:0}this.needsScrollReset=!1}}}class pe extends Y{constructor(){super(...arguments),this.forceDayIfListItem=!0}sliceRange(e,t){return t.sliceRange(e)}}class ye extends h{constructor(){super(...arguments),this.slicer=new pe,this.tableRef=o()}render(){let{props:e,context:t}=this;return d(ue,Object.assign({ref:this.tableRef},this.slicer.sliceProps(e,e.dateProfile,e.nextDayThreshold,t,e.dayTableModel),{dateProfile:e.dateProfile,cells:e.dayTableModel.cells,colGroupNode:e.colGroupNode,tableMinWidth:e.tableMinWidth,renderRowIntro:e.renderRowIntro,dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,showWeekNumbers:e.showWeekNumbers,expandRows:e.expandRows,headerAlignElRef:e.headerAlignElRef,clientWidth:e.clientWidth,clientHeight:e.clientHeight,forPrint:e.forPrint}))}}class ve extends h{constructor(){super(...arguments),this.headerElRef=o()}renderSimpleLayout(e,t){let{props:s,context:n}=this,i=[],r=S(n.options);return e&&i.push({type:"header",key:"header",isSticky:r,chunk:{elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}}),i.push({type:"body",key:"body",liquid:!0,chunk:{content:t}}),d(w,{elClasses:["fc-daygrid"],viewSpec:n.viewSpec},d(E,{liquid:!s.isHeightAuto&&!s.forPrint,collapsibleWidth:s.forPrint,cols:[],sections:i}))}renderHScrollLayout(e,t,s,n){let i=this.context.pluginHooks.scrollGridImpl;if(!i)throw new Error("No ScrollGrid implementation");let{props:r,context:a}=this,l=!r.forPrint&&S(a.options),o=!r.forPrint&&C(a.options),c=[];return e&&c.push({type:"header",key:"header",isSticky:l,chunks:[{key:"main",elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}]}),c.push({type:"body",key:"body",liquid:!0,chunks:[{key:"main",content:t}]}),o&&c.push({type:"footer",key:"footer",isSticky:!0,chunks:[{key:"main",content:D}]}),d(w,{elClasses:["fc-daygrid"],viewSpec:a.viewSpec},d(i,{liquid:!r.isHeightAuto&&!r.forPrint,forPrint:r.forPrint,collapsibleWidth:r.forPrint,colGroups:[{cols:[{span:s,minWidth:n}]}],sections:c}))}}function me(e,t){let s=new g(e.renderRange,t);return new f(s,/year|month|week/.test(e.currentRangeUnit))}var be=J({name:"@fullcalendar/daygrid",initialView:"dayGridMonth",views:{dayGrid:{component:class extends ve{constructor(){super(...arguments),this.buildDayTableModel=l(me),this.headerRef=o(),this.tableRef=o()}render(){let{options:e,dateProfileGenerator:t}=this.context,{props:s}=this,n=this.buildDayTableModel(s.dateProfile,t),i=e.dayHeaders&&d(c,{ref:this.headerRef,dateProfile:s.dateProfile,dates:n.headerDates,datesRepDistinctDays:1===n.rowCnt}),r=t=>d(ye,{ref:this.tableRef,dateProfile:s.dateProfile,dayTableModel:n,businessHours:s.businessHours,dateSelection:s.dateSelection,eventStore:s.eventStore,eventUiBases:s.eventUiBases,eventSelection:s.eventSelection,eventDrag:s.eventDrag,eventResize:s.eventResize,nextDayThreshold:e.nextDayThreshold,colGroupNode:t.tableColGroupNode,tableMinWidth:t.tableMinWidth,dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,showWeekNumbers:e.weekNumbers,expandRows:!s.isHeightAuto,headerAlignElRef:this.headerElRef,clientWidth:t.clientWidth,clientHeight:t.clientHeight,forPrint:s.forPrint});return e.dayMinWidth?this.renderHScrollLayout(i,r,n.colCnt,e.dayMinWidth):this.renderSimpleLayout(i,r)}},dateProfileGeneratorClass:class extends n{buildRenderRange(e,t,s){let n=super.buildRenderRange(e,t,s),{props:l}=this;return function(e){let t,{dateEnv:s,currentRange:n}=e,{start:l,end:o}=n;e.snapToWeek&&(l=s.startOfWeek(l),t=s.startOfWeek(o),t.valueOf()!==o.valueOf()&&(o=i(t,1)));if(e.fixedWeekCount){let e=s.startOfWeek(s.startOfMonth(r(n.end,-1))),t=Math.ceil(a(e,o));o=i(o,6-t)}return{start:l,end:o}}({currentRange:n,snapToWeek:/^(year|month)$/.test(t),fixedWeekCount:l.fixedWeekCount,dateEnv:l.dateEnv})}}},dayGridDay:{type:"dayGrid",duration:{days:1}},dayGridWeek:{type:"dayGrid",duration:{weeks:1}},dayGridMonth:{type:"dayGrid",duration:{months:1},fixedWeekCount:!0},dayGridYear:{type:"dayGrid",duration:{years:1}}}});export{be as default};
