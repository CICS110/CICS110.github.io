(self.webpackChunk=self.webpackChunk||[]).push([[2679],{82679:(e,t,n)=>{e=n.nmd(e),ace.define("ace/snippets",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/event_emitter","ace/lib/lang","ace/range","ace/range_list","ace/keyboard/hash_handler","ace/tokenizer","ace/clipboard","ace/editor"],(function(e,t,n){"use strict";var i=e("./lib/dom"),o=e("./lib/oop"),r=e("./lib/event_emitter").EventEmitter,s=e("./lib/lang"),a=e("./range").Range,c=e("./range_list").RangeList,l=e("./keyboard/hash_handler").HashHandler,h=e("./tokenizer").Tokenizer,p=e("./clipboard"),u={CURRENT_WORD:function(e){return e.session.getTextRange(e.session.getWordRange())},SELECTION:function(e,t,n){var i=e.session.getTextRange();return n?i.replace(/\n\r?([ \t]*\S)/g,"\n"+n+"$1"):i},CURRENT_LINE:function(e){return e.session.getLine(e.getCursorPosition().row)},PREV_LINE:function(e){return e.session.getLine(e.getCursorPosition().row-1)},LINE_INDEX:function(e){return e.getCursorPosition().row},LINE_NUMBER:function(e){return e.getCursorPosition().row+1},SOFT_TABS:function(e){return e.session.getUseSoftTabs()?"YES":"NO"},TAB_SIZE:function(e){return e.session.getTabSize()},CLIPBOARD:function(e){return p.getText&&p.getText()},FILENAME:function(e){return/[^/\\]*$/.exec(this.FILEPATH(e))[0]},FILENAME_BASE:function(e){return/[^/\\]*$/.exec(this.FILEPATH(e))[0].replace(/\.[^.]*$/,"")},DIRECTORY:function(e){return this.FILEPATH(e).replace(/[^/\\]*$/,"")},FILEPATH:function(e){return"/not implemented.txt"},WORKSPACE_NAME:function(){return"Unknown"},FULLNAME:function(){return"Unknown"},BLOCK_COMMENT_START:function(e){var t=e.session.$mode||{};return t.blockComment&&t.blockComment.start||""},BLOCK_COMMENT_END:function(e){var t=e.session.$mode||{};return t.blockComment&&t.blockComment.end||""},LINE_COMMENT:function(e){return(e.session.$mode||{}).lineCommentStart||""},CURRENT_YEAR:d.bind(null,{year:"numeric"}),CURRENT_YEAR_SHORT:d.bind(null,{year:"2-digit"}),CURRENT_MONTH:d.bind(null,{month:"numeric"}),CURRENT_MONTH_NAME:d.bind(null,{month:"long"}),CURRENT_MONTH_NAME_SHORT:d.bind(null,{month:"short"}),CURRENT_DATE:d.bind(null,{day:"2-digit"}),CURRENT_DAY_NAME:d.bind(null,{weekday:"long"}),CURRENT_DAY_NAME_SHORT:d.bind(null,{weekday:"short"}),CURRENT_HOUR:d.bind(null,{hour:"2-digit",hour12:!1}),CURRENT_MINUTE:d.bind(null,{minute:"2-digit"}),CURRENT_SECOND:d.bind(null,{second:"2-digit"})};function d(e){var t=(new Date).toLocaleString("en-us",e);return 1==t.length?"0"+t:t}u.SELECTED_TEXT=u.SELECTION;var f=function(){this.snippetMap={},this.snippetNameMap={}};(function(){o.implement(this,r),this.getTokenizer=function(){return f.$tokenizer||this.createTokenizer()},this.createTokenizer=function(){function e(e){return e=e.substr(1),/^\d+$/.test(e)?[{tabstopId:parseInt(e,10)}]:[{text:e}]}function t(e){return"(?:[^\\\\"+e+"]|\\\\.)"}var n={regex:"/("+t("/")+"+)/",onMatch:function(e,t,n){var i=n[0];return i.fmtString=!0,i.guard=e.slice(1,-1),i.flag="",""},next:"formatString"};return f.$tokenizer=new h({start:[{regex:/\\./,onMatch:function(e,t,n){var i=e[1];return("}"==i&&n.length||-1!="`$\\".indexOf(i))&&(e=i),[e]}},{regex:/}/,onMatch:function(e,t,n){return[n.length?n.shift():e]}},{regex:/\$(?:\d+|\w+)/,onMatch:e},{regex:/\$\{[\dA-Z_a-z]+/,onMatch:function(t,n,i){var o=e(t.substr(1));return i.unshift(o[0]),o},next:"snippetVar"},{regex:/\n/,token:"newline",merge:!1}],snippetVar:[{regex:"\\|"+t("\\|")+"*\\|",onMatch:function(e,t,n){var i=e.slice(1,-1).replace(/\\[,|\\]|,/g,(function(e){return 2==e.length?e[1]:"\0"})).split("\0").map((function(e){return{value:e}}));return n[0].choices=i,[i[0]]},next:"start"},n,{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"start"}],formatString:[{regex:/:/,onMatch:function(e,t,n){return n.length&&n[0].expectElse?(n[0].expectElse=!1,n[0].ifEnd={elseEnd:n[0]},[n[0].ifEnd]):":"}},{regex:/\\./,onMatch:function(e,t,n){var i=e[1];return"}"==i&&n.length||-1!="`$\\".indexOf(i)?e=i:"n"==i?e="\n":"t"==i?e="\t":-1!="ulULE".indexOf(i)&&(e={changeCase:i,local:i>"a"}),[e]}},{regex:"/\\w*}",onMatch:function(e,t,n){var i=n.shift();return i&&(i.flag=e.slice(1,-1)),this.next=i&&i.tabstopId?"start":"",[i||e]},next:"start"},{regex:/\$(?:\d+|\w+)/,onMatch:function(e,t,n){return[{text:e.slice(1)}]}},{regex:/\${\w+/,onMatch:function(e,t,n){var i={text:e.slice(2)};return n.unshift(i),[i]},next:"formatStringVar"},{regex:/\n/,token:"newline",merge:!1},{regex:/}/,onMatch:function(e,t,n){var i=n.shift();return this.next=i&&i.tabstopId?"start":"",[i||e]},next:"start"}],formatStringVar:[{regex:/:\/\w+}/,onMatch:function(e,t,n){return n[0].formatFunction=e.slice(2,-1),[n.shift()]},next:"formatString"},n,{regex:/:[\?\-+]?/,onMatch:function(e,t,n){"+"==e[1]&&(n[0].ifEnd=n[0]),"?"==e[1]&&(n[0].expectElse=!0)},next:"formatString"},{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"formatString"}]})},this.tokenizeTmSnippet=function(e,t){return this.getTokenizer().getLineTokens(e,t).tokens.map((function(e){return e.value||e}))},this.getVariableValue=function(e,t,n){if(/^\d+$/.test(t))return(this.variables.__||{})[t]||"";if(/^[A-Z]\d+$/.test(t))return(this.variables[t[0]+"__"]||{})[t.substr(1)]||"";if(t=t.replace(/^TM_/,""),!this.variables.hasOwnProperty(t))return"";var i=this.variables[t];return"function"==typeof i&&(i=this.variables[t](e,t,n)),null==i?"":i},this.variables=u,this.tmStrFormat=function(e,t,n){if(!t.fmt)return e;var i=t.flag||"",o=t.guard;o=new RegExp(o,i.replace(/[^gim]/g,""));var r="string"==typeof t.fmt?this.tokenizeTmSnippet(t.fmt,"formatString"):t.fmt,s=this,a=e.replace(o,(function(){var e=s.variables.__;s.variables.__=[].slice.call(arguments);for(var t=s.resolveVariables(r,n),i="E",o=0;o<t.length;o++){var a=t[o];if("object"==typeof a)if(t[o]="",a.changeCase&&a.local){var c=t[o+1];c&&"string"==typeof c&&("u"==a.changeCase?t[o]=c[0].toUpperCase():t[o]=c[0].toLowerCase(),t[o+1]=c.substr(1))}else a.changeCase&&(i=a.changeCase);else"U"==i?t[o]=a.toUpperCase():"L"==i&&(t[o]=a.toLowerCase())}return s.variables.__=e,t.join("")}));return a},this.tmFormatFunction=function(e,t,n){return"upcase"==t.formatFunction?e.toUpperCase():"downcase"==t.formatFunction?e.toLowerCase():e},this.resolveVariables=function(e,t){for(var n=[],i="",o=!0,r=0;r<e.length;r++){var s=e[r];if("string"!=typeof s){if(s){if(o=!1,s.fmtString){var a=e.indexOf(s,r+1);-1==a&&(a=e.length),s.fmt=e.slice(r+1,a),r=a}if(s.text){var c=this.getVariableValue(t,s.text,i)+"";s.fmtString&&(c=this.tmStrFormat(c,s,t)),s.formatFunction&&(c=this.tmFormatFunction(c,s,t)),c&&!s.ifEnd?(n.push(c),l(s)):!c&&s.ifEnd&&l(s.ifEnd)}else s.elseEnd?l(s.elseEnd):(null!=s.tabstopId||null!=s.changeCase)&&n.push(s)}}else n.push(s),"\n"==s?(o=!0,i=""):o&&(i=/^\t*/.exec(s)[0],o=/\S/.test(s))}function l(t){var n=e.indexOf(t,r+1);-1!=n&&(r=n)}return n},this.insertSnippetForSelection=function(e,t){var n=e.getCursorPosition(),i=e.session.getLine(n.row),o=e.session.getTabString(),r=i.match(/^\s*/)[0];n.column<r.length&&(r=r.slice(0,n.column)),t=t.replace(/\r/g,"");var s=this.tokenizeTmSnippet(t);s=(s=this.resolveVariables(s,e)).map((function(e){return"\n"==e?e+r:"string"==typeof e?e.replace(/\t/g,o):e}));var a=[];s.forEach((function(e,t){if("object"==typeof e){var n=e.tabstopId,i=a[n];if(i||((i=a[n]=[]).index=n,i.value="",i.parents={}),-1===i.indexOf(e)){e.choices&&!i.choices&&(i.choices=e.choices),i.push(e);var o=s.indexOf(e,t+1);if(-1!==o){var r=s.slice(t+1,o);r.some((function(e){return"object"==typeof e}))&&!i.value?i.value=r:!r.length||i.value&&"string"==typeof i.value||(i.value=r.join(""))}}}})),a.forEach((function(e){e.length=0}));var c={};function l(e){for(var t=[],n=0;n<e.length;n++){var i=e[n];if("object"==typeof i){if(c[i.tabstopId])continue;i=t[e.lastIndexOf(i,n-1)]||{tabstopId:i.tabstopId}}t[n]=i}return t}for(var h=0;h<s.length;h++){var p=s[h];if("object"==typeof p){var u=p.tabstopId,d=a[u],f=s.indexOf(p,h+1);if(c[u])c[u]===p&&(delete c[u],Object.keys(c).forEach((function(e){d.parents[e]=!0})));else{c[u]=p;var m=d.value;"string"!=typeof m?m=l(m):p.fmt&&(m=this.tmStrFormat(m,p,e)),s.splice.apply(s,[h+1,Math.max(0,f-h)].concat(m,p)),-1===d.indexOf(p)&&d.push(p)}}}var b=0,v=0,x="";s.forEach((function(e){if("string"==typeof e){var t=e.split("\n");t.length>1?(v=t[t.length-1].length,b+=t.length-1):v+=e.length,x+=e}else e&&(e.start?e.end={row:b,column:v}:e.start={row:b,column:v})}));var T=e.getSelectionRange(),w=e.session.replace(T,x),C=new g(e),y=e.inVirtualSelectionMode&&e.selection.index;C.addTabstops(a,T.start,w,y)},this.insertSnippet=function(e,t){var n=this;if(e.inVirtualSelectionMode)return n.insertSnippetForSelection(e,t);e.forEachSelection((function(){n.insertSnippetForSelection(e,t)}),null,{keepOrder:!0}),e.tabstopManager&&e.tabstopManager.tabNext()},this.$getScope=function(e){var t=e.session.$mode.$id||"";if("html"===(t=t.split("/").pop())||"php"===t){"php"!==t||e.session.$mode.inlinePhp||(t="html");var n=e.getCursorPosition(),i=e.session.getState(n.row);"object"==typeof i&&(i=i[0]),i.substring&&("js-"==i.substring(0,3)?t="javascript":"css-"==i.substring(0,4)?t="css":"php-"==i.substring(0,4)&&(t="php"))}return t},this.getActiveScopes=function(e){var t=this.$getScope(e),n=[t],i=this.snippetMap;return i[t]&&i[t].includeScopes&&n.push.apply(n,i[t].includeScopes),n.push("_"),n},this.expandWithTab=function(e,t){var n=this,i=e.forEachSelection((function(){return n.expandSnippetForSelection(e,t)}),null,{keepOrder:!0});return i&&e.tabstopManager&&e.tabstopManager.tabNext(),i},this.expandSnippetForSelection=function(e,t){var n,i=e.getCursorPosition(),o=e.session.getLine(i.row),r=o.substring(0,i.column),s=o.substr(i.column),a=this.snippetMap;return this.getActiveScopes(e).some((function(e){var t=a[e];return t&&(n=this.findMatchingSnippet(t,r,s)),!!n}),this),!!n&&(t&&t.dryRun||(e.session.doc.removeInLine(i.row,i.column-n.replaceBefore.length,i.column+n.replaceAfter.length),this.variables.M__=n.matchBefore,this.variables.T__=n.matchAfter,this.insertSnippetForSelection(e,n.content),this.variables.M__=this.variables.T__=null),!0)},this.findMatchingSnippet=function(e,t,n){for(var i=e.length;i--;){var o=e[i];if((!o.startRe||o.startRe.test(t))&&((!o.endRe||o.endRe.test(n))&&(o.startRe||o.endRe)))return o.matchBefore=o.startRe?o.startRe.exec(t):[""],o.matchAfter=o.endRe?o.endRe.exec(n):[""],o.replaceBefore=o.triggerRe?o.triggerRe.exec(t)[0]:"",o.replaceAfter=o.endTriggerRe?o.endTriggerRe.exec(n)[0]:"",o}},this.snippetMap={},this.snippetNameMap={},this.register=function(e,t){var n=this.snippetMap,i=this.snippetNameMap,o=this;function r(e){return e&&!/^\^?\(.*\)\$?$|^\\b$/.test(e)&&(e="(?:"+e+")"),e||""}function a(e,t,n){return e=r(e),t=r(t),n?(e=t+e)&&"$"!=e[e.length-1]&&(e+="$"):(e+=t)&&"^"!=e[0]&&(e="^"+e),new RegExp(e)}function c(e){e.scope||(e.scope=t||"_"),t=e.scope,n[t]||(n[t]=[],i[t]={});var r=i[t];if(e.name){var c=r[e.name];c&&o.unregister(c),r[e.name]=e}n[t].push(e),e.prefix&&(e.tabTrigger=e.prefix),!e.content&&e.body&&(e.content=Array.isArray(e.body)?e.body.join("\n"):e.body),e.tabTrigger&&!e.trigger&&(!e.guard&&/^\w/.test(e.tabTrigger)&&(e.guard="\\b"),e.trigger=s.escapeRegExp(e.tabTrigger)),(e.trigger||e.guard||e.endTrigger||e.endGuard)&&(e.startRe=a(e.trigger,e.guard,!0),e.triggerRe=new RegExp(e.trigger),e.endRe=a(e.endTrigger,e.endGuard,!0),e.endTriggerRe=new RegExp(e.endTrigger))}e||(e=[]),Array.isArray(e)?e.forEach(c):Object.keys(e).forEach((function(t){c(e[t])})),this._signal("registerSnippets",{scope:t})},this.unregister=function(e,t){var n=this.snippetMap,i=this.snippetNameMap;function o(e){var o=i[e.scope||t];if(o&&o[e.name]){delete o[e.name];var r=n[e.scope||t],s=r&&r.indexOf(e);s>=0&&r.splice(s,1)}}e.content?o(e):Array.isArray(e)&&e.forEach(o)},this.parseSnippetFile=function(e){e=e.replace(/\r/g,"");for(var t,n=[],i={},o=/^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm;t=o.exec(e);){if(t[1])try{i=JSON.parse(t[1]),n.push(i)}catch(c){}if(t[4])i.content=t[4].replace(/^\t/gm,""),n.push(i),i={};else{var r=t[2],s=t[3];if("regex"==r){var a=/\/((?:[^\/\\]|\\.)*)|$/g;i.guard=a.exec(s)[1],i.trigger=a.exec(s)[1],i.endTrigger=a.exec(s)[1],i.endGuard=a.exec(s)[1]}else"snippet"==r?(i.tabTrigger=s.match(/^\S*/)[0],i.name||(i.name=s)):r&&(i[r]=s)}}return n},this.getSnippetByName=function(e,t){var n,i=this.snippetNameMap;return this.getActiveScopes(t).some((function(t){var o=i[t];return o&&(n=o[e]),!!n}),this),n}}).call(f.prototype);var g=function(e){if(e.tabstopManager)return e.tabstopManager;e.tabstopManager=this,this.$onChange=this.onChange.bind(this),this.$onChangeSelection=s.delayedCall(this.onChangeSelection.bind(this)).schedule,this.$onChangeSession=this.onChangeSession.bind(this),this.$onAfterExec=this.onAfterExec.bind(this),this.attach(e)};(function(){this.attach=function(e){this.index=0,this.ranges=[],this.tabstops=[],this.$openTabstops=null,this.selectedTabstop=null,this.editor=e,this.editor.on("change",this.$onChange),this.editor.on("changeSelection",this.$onChangeSelection),this.editor.on("changeSession",this.$onChangeSession),this.editor.commands.on("afterExec",this.$onAfterExec),this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)},this.detach=function(){this.tabstops.forEach(this.removeTabstopMarkers,this),this.ranges=null,this.tabstops=null,this.selectedTabstop=null,this.editor.removeListener("change",this.$onChange),this.editor.removeListener("changeSelection",this.$onChangeSelection),this.editor.removeListener("changeSession",this.$onChangeSession),this.editor.commands.removeListener("afterExec",this.$onAfterExec),this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.tabstopManager=null,this.editor=null},this.onChange=function(e){for(var t="r"==e.action[0],n=this.selectedTabstop||{},i=n.parents||{},o=(this.tabstops||[]).slice(),r=0;r<o.length;r++){var s=o[r],a=s==n||i[s.index];if(s.rangeList.$bias=a?0:1,"remove"==e.action&&s!==n){var c=s.parents&&s.parents[n.index],l=s.rangeList.pointIndex(e.start,c);l=l<0?-l-1:l+1;var h=s.rangeList.pointIndex(e.end,c);h=h<0?-h-1:h-1;for(var p=s.rangeList.ranges.slice(l,h),u=0;u<p.length;u++)this.removeRange(p[u])}s.rangeList.$onChange(e)}var d=this.editor.session;this.$inChange||!t||1!=d.getLength()||d.getValue()||this.detach()},this.updateLinkedFields=function(){var e=this.selectedTabstop;if(e&&e.hasLinkedRanges&&e.firstNonLinked){this.$inChange=!0;for(var n=this.editor.session,i=n.getTextRange(e.firstNonLinked),o=0;o<e.length;o++){var r=e[o];if(r.linked){var s=r.original,a=t.snippetManager.tmStrFormat(i,s,this.editor);n.replace(r,a)}}this.$inChange=!1}},this.onAfterExec=function(e){e.command&&!e.command.readOnly&&this.updateLinkedFields()},this.onChangeSelection=function(){if(this.editor){for(var e=this.editor.selection.lead,t=this.editor.selection.anchor,n=this.editor.selection.isEmpty(),i=0;i<this.ranges.length;i++)if(!this.ranges[i].linked){var o=this.ranges[i].contains(e.row,e.column),r=n||this.ranges[i].contains(t.row,t.column);if(o&&r)return}this.detach()}},this.onChangeSession=function(){this.detach()},this.tabNext=function(e){var t=this.tabstops.length,n=this.index+(e||1);(n=Math.min(Math.max(n,1),t))==t&&(n=0),this.selectTabstop(n),0===n&&this.detach()},this.selectTabstop=function(e){this.$openTabstops=null;var t=this.tabstops[this.index];if(t&&this.addTabstopMarkers(t),this.index=e,(t=this.tabstops[this.index])&&t.length){this.selectedTabstop=t;var n=t.firstNonLinked||t;if(t.choices&&(n.cursor=n.start),this.editor.inVirtualSelectionMode)this.editor.selection.fromOrientedRange(n);else{var i=this.editor.multiSelect;i.toSingleRange(n);for(var o=0;o<t.length;o++)t.hasLinkedRanges&&t[o].linked||i.addRange(t[o].clone(),!0)}this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler),this.selectedTabstop&&this.selectedTabstop.choices&&this.editor.execCommand("startAutocomplete",{matches:this.selectedTabstop.choices})}},this.addTabstops=function(e,t,n){var i=this.useLink||!this.editor.getOption("enableMultiselect");if(this.$openTabstops||(this.$openTabstops=[]),!e[0]){var o=a.fromPoints(n,n);b(o.start,t),b(o.end,t),e[0]=[o],e[0].index=0}var r=[this.index+1,0],s=this.ranges;e.forEach((function(e,n){for(var o=this.$openTabstops[n]||e,l=0;l<e.length;l++){var h=e[l],p=a.fromPoints(h.start,h.end||h.start);m(p.start,t),m(p.end,t),p.original=h,p.tabstop=o,s.push(p),o!=e?o.unshift(p):o[l]=p,h.fmtString||o.firstNonLinked&&i?(p.linked=!0,o.hasLinkedRanges=!0):o.firstNonLinked||(o.firstNonLinked=p)}o.firstNonLinked||(o.hasLinkedRanges=!1),o===e&&(r.push(o),this.$openTabstops[n]=o),this.addTabstopMarkers(o),o.rangeList=o.rangeList||new c,o.rangeList.$bias=0,o.rangeList.addList(o)}),this),r.length>2&&(this.tabstops.length&&r.push(r.splice(2,1)[0]),this.tabstops.splice.apply(this.tabstops,r))},this.addTabstopMarkers=function(e){var t=this.editor.session;e.forEach((function(e){e.markerId||(e.markerId=t.addMarker(e,"ace_snippet-marker","text"))}))},this.removeTabstopMarkers=function(e){var t=this.editor.session;e.forEach((function(e){t.removeMarker(e.markerId),e.markerId=null}))},this.removeRange=function(e){var t=e.tabstop.indexOf(e);-1!=t&&e.tabstop.splice(t,1),-1!=(t=this.ranges.indexOf(e))&&this.ranges.splice(t,1),-1!=(t=e.tabstop.rangeList.ranges.indexOf(e))&&e.tabstop.splice(t,1),this.editor.session.removeMarker(e.markerId),e.tabstop.length||(-1!=(t=this.tabstops.indexOf(e.tabstop))&&this.tabstops.splice(t,1),this.tabstops.length||this.detach())},this.keyboardHandler=new l,this.keyboardHandler.bindKeys({Tab:function(e){t.snippetManager&&t.snippetManager.expandWithTab(e)||(e.tabstopManager.tabNext(1),e.renderer.scrollCursorIntoView())},"Shift-Tab":function(e){e.tabstopManager.tabNext(-1),e.renderer.scrollCursorIntoView()},Esc:function(e){e.tabstopManager.detach()}})}).call(g.prototype);var m=function(e,t){0==e.row&&(e.column+=t.column),e.row+=t.row},b=function(e,t){e.row==t.row&&(e.column-=t.column),e.row-=t.row};i.importCssString("\n.ace_snippet-marker {\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    background: rgba(194, 193, 208, 0.09);\n    border: 1px dotted rgba(211, 208, 235, 0.62);\n    position: absolute;\n}","snippets.css",!1),t.snippetManager=new f;var v=e("./editor").Editor;(function(){this.insertSnippet=function(e,n){return t.snippetManager.insertSnippet(this,e,n)},this.expandSnippet=function(e){return t.snippetManager.expandWithTab(this,e)}}).call(v.prototype)})),ace.define("ace/autocomplete/popup",["require","exports","module","ace/virtual_renderer","ace/editor","ace/range","ace/lib/event","ace/lib/lang","ace/lib/dom"],(function(e,t,n){"use strict";var i=e("../virtual_renderer").VirtualRenderer,o=e("../editor").Editor,r=e("../range").Range,s=e("../lib/event"),a=e("../lib/lang"),c=e("../lib/dom"),l=function(e){return"suggest-aria-id:".concat(e)},h=function(e){var t=new i(e);t.$maxLines=4;var n=new o(t);return n.setHighlightActiveLine(!1),n.setShowPrintMargin(!1),n.renderer.setShowGutter(!1),n.renderer.setHighlightGutterLine(!1),n.$mouseHandler.$focusTimeout=0,n.$highlightTagPending=!0,n};c.importCssString("\n.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {\n    background-color: #CAD6FA;\n    z-index: 1;\n}\n.ace_dark.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {\n    background-color: #3a674e;\n}\n.ace_editor.ace_autocomplete .ace_line-hover {\n    border: 1px solid #abbffe;\n    margin-top: -1px;\n    background: rgba(233,233,253,0.4);\n    position: absolute;\n    z-index: 2;\n}\n.ace_dark.ace_editor.ace_autocomplete .ace_line-hover {\n    border: 1px solid rgba(109, 150, 13, 0.8);\n    background: rgba(58, 103, 78, 0.62);\n}\n.ace_completion-meta {\n    opacity: 0.5;\n    margin: 0.9em;\n}\n.ace_completion-message {\n    color: blue;\n}\n.ace_editor.ace_autocomplete .ace_completion-highlight{\n    color: #2d69c7;\n}\n.ace_dark.ace_editor.ace_autocomplete .ace_completion-highlight{\n    color: #93ca12;\n}\n.ace_editor.ace_autocomplete {\n    width: 300px;\n    z-index: 200000;\n    border: 1px lightgray solid;\n    position: fixed;\n    box-shadow: 2px 3px 5px rgba(0,0,0,.2);\n    line-height: 1.4;\n    background: #fefefe;\n    color: #111;\n}\n.ace_dark.ace_editor.ace_autocomplete {\n    border: 1px #484747 solid;\n    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.51);\n    line-height: 1.4;\n    background: #25282c;\n    color: #c1c1c1;\n}","autocompletion.css",!1),t.AcePopup=function(e){var t=c.createElement("div"),n=new h(t);e&&e.appendChild(t),t.style.display="none",n.renderer.content.style.cursor="default",n.renderer.setStyle("ace_autocomplete"),n.renderer.container.setAttribute("role","listbox"),n.renderer.container.setAttribute("aria-label","Autocomplete suggestions"),n.setOption("displayIndentGuides",!1),n.setOption("dragDelay",150);var i,o=function(){};n.focus=o,n.$isFocused=!0,n.renderer.$cursorLayer.restartTimer=o,n.renderer.$cursorLayer.element.style.opacity=0,n.renderer.$maxLines=8,n.renderer.$keepTextAreaAtCursor=!1,n.setHighlightActiveLine(!1),n.session.highlight(""),n.session.$searchHighlight.clazz="ace_highlight-marker",n.on("mousedown",(function(e){var t=e.getDocumentPosition();n.selection.moveToPosition(t),u.start.row=u.end.row=t.row,e.stop()}));var p=new r(-1,0,-1,1/0),u=new r(-1,0,-1,1/0);u.id=n.session.addMarker(u,"ace_active-line","fullLine"),n.setSelectOnHover=function(e){e?p.id&&(n.session.removeMarker(p.id),p.id=null):p.id=n.session.addMarker(p,"ace_line-hover","fullLine")},n.setSelectOnHover(!1),n.on("mousemove",(function(e){if(i){if(i.x!=e.x||i.y!=e.y){(i=e).scrollTop=n.renderer.scrollTop;var t=i.getDocumentPosition().row;p.start.row!=t&&(p.id||n.setRow(t),f(t))}}else i=e})),n.renderer.on("beforeRender",(function(){if(i&&-1!=p.start.row){i.$pos=null;var e=i.getDocumentPosition().row;p.id||n.setRow(e),f(e,!0)}})),n.renderer.on("afterRender",(function(){var e=n.getRow(),t=n.renderer.$textLayer,i=t.element.childNodes[e-t.config.firstRow],o=document.activeElement;if(i!==t.selectedNode&&t.selectedNode&&(c.removeCssClass(t.selectedNode,"ace_selected"),o.removeAttribute("aria-activedescendant"),t.selectedNode.removeAttribute("id")),t.selectedNode=i,i){c.addCssClass(i,"ace_selected");var r=l(e);i.id=r,n.renderer.container.setAttribute("aria-activedescendant",r),o.setAttribute("aria-activedescendant",r),i.setAttribute("aria-label",n.getData(e).value)}}));var d=function(){f(-1)},f=function(e,t){e!==p.start.row&&(p.start.row=p.end.row=e,t||n.session._emit("changeBackMarker"),n._emit("changeHoverMarker"))};n.getHoveredRow=function(){return p.start.row},s.addListener(n.container,"mouseout",d),n.on("hide",d),n.on("changeSelection",d),n.session.doc.getLength=function(){return n.data.length},n.session.doc.getLine=function(e){var t=n.data[e];return"string"==typeof t?t:t&&t.value||""};var g=n.session.bgTokenizer;return g.$tokenizeRow=function(e){var t=n.data[e],i=[];if(!t)return i;"string"==typeof t&&(t={value:t});var o=t.caption||t.value||t.name;function r(e,n){e&&i.push({type:(t.className||"")+(n||""),value:e})}for(var s=o.toLowerCase(),a=(n.filterText||"").toLowerCase(),c=0,l=0,h=0;h<=a.length;h++)if(h!=l&&(t.matchMask&1<<h||h==a.length)){var p=a.slice(l,h);l=h;var u=s.indexOf(p,c);if(-1==u)continue;r(o.slice(c,u),""),c=u+p.length,r(o.slice(u,c),"completion-highlight")}return r(o.slice(c,o.length),""),t.meta&&i.push({type:"completion-meta",value:t.meta}),t.message&&i.push({type:"completion-message",value:t.message}),i},g.$updateOnChange=o,g.start=o,n.session.$computeWidth=function(){return this.screenWidth=0},n.isOpen=!1,n.isTopdown=!1,n.autoSelect=!0,n.filterText="",n.data=[],n.setData=function(e,t){n.filterText=t||"",n.setValue(a.stringRepeat("\n",e.length),-1),n.data=e||[],n.setRow(0)},n.getData=function(e){return n.data[e]},n.getRow=function(){return u.start.row},n.setRow=function(e){e=Math.max(this.autoSelect?0:-1,Math.min(this.data.length,e)),u.start.row!=e&&(n.selection.clearSelection(),u.start.row=u.end.row=e||0,n.session._emit("changeBackMarker"),n.moveCursorTo(e||0,0),n.isOpen&&n._signal("select"))},n.on("changeSelection",(function(){n.isOpen&&n.setRow(n.selection.lead.row),n.renderer.scrollCursorIntoView()})),n.hide=function(){this.container.style.display="none",this._signal("hide"),n.isOpen=!1},n.show=function(e,t,o){var r=this.container,s=window.innerHeight,a=window.innerWidth,c=this.renderer,l=c.$maxLines*t*1.4,h=e.top+this.$borderSize;h>s/2&&!o&&h+t+l>s?(c.$maxPixelHeight=h-2*this.$borderSize,r.style.top="",r.style.bottom=s-h+"px",n.isTopdown=!1):(h+=t,c.$maxPixelHeight=s-h-.2*t,r.style.top=h+"px",r.style.bottom="",n.isTopdown=!0),r.style.display="";var p=e.left;p+r.offsetWidth>a&&(p=a-r.offsetWidth),r.style.left=p+"px",this._signal("show"),i=null,n.isOpen=!0},n.goTo=function(e){var t=this.getRow(),n=this.session.getLength()-1;switch(e){case"up":t=t<=0?n:t-1;break;case"down":t=t>=n?-1:t+1;break;case"start":t=0;break;case"end":t=n}this.setRow(t)},n.getTextLeftOffset=function(){return this.$borderSize+this.renderer.$padding+this.$imageSize},n.$imageSize=0,n.$borderSize=1,n},t.$singleLineEditor=h,t.getAriaId=l})),ace.define("ace/autocomplete/util",["require","exports","module"],(function(e,t,n){"use strict";t.parForEach=function(e,t,n){var i=0,o=e.length;0===o&&n();for(var r=0;r<o;r++)t(e[r],(function(e,t){++i===o&&n(e,t)}))};var i=/[a-zA-Z_0-9\$\-\u00A2-\u2000\u2070-\uFFFF]/;t.retrievePrecedingIdentifier=function(e,t,n){n=n||i;for(var o=[],r=t-1;r>=0&&n.test(e[r]);r--)o.push(e[r]);return o.reverse().join("")},t.retrieveFollowingIdentifier=function(e,t,n){n=n||i;for(var o=[],r=t;r<e.length&&n.test(e[r]);r++)o.push(e[r]);return o},t.getCompletionPrefix=function(e){var t,n=e.getCursorPosition(),i=e.session.getLine(n.row);return e.completers.forEach(function(e){e.identifierRegexps&&e.identifierRegexps.forEach(function(e){!t&&e&&(t=this.retrievePrecedingIdentifier(i,n.column,e))}.bind(this))}.bind(this)),t||this.retrievePrecedingIdentifier(i,n.column)}})),ace.define("ace/autocomplete",["require","exports","module","ace/keyboard/hash_handler","ace/autocomplete/popup","ace/autocomplete/popup","ace/autocomplete/util","ace/lib/lang","ace/lib/dom","ace/snippets","ace/config"],(function(e,t,n){"use strict";var i=e("./keyboard/hash_handler").HashHandler,o=e("./autocomplete/popup").AcePopup,r=e("./autocomplete/popup").getAriaId,s=e("./autocomplete/util"),a=e("./lib/lang"),c=e("./lib/dom"),l=e("./snippets").snippetManager,h=e("./config"),p=function(){this.autoInsert=!1,this.autoSelect=!0,this.exactMatch=!1,this.gatherCompletionsId=0,this.keyboardHandler=new i,this.keyboardHandler.bindKeys(this.commands),this.blurListener=this.blurListener.bind(this),this.changeListener=this.changeListener.bind(this),this.mousedownListener=this.mousedownListener.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this),this.changeTimer=a.delayedCall(function(){this.updateCompletions(!0)}.bind(this)),this.tooltipTimer=a.delayedCall(this.updateDocTooltip.bind(this),50)};(function(){this.$init=function(){return this.popup=new o(document.body||document.documentElement),this.popup.on("click",function(e){this.insertMatch(),e.stop()}.bind(this)),this.popup.focus=this.editor.focus.bind(this.editor),this.popup.on("show",this.tooltipTimer.bind(null,null)),this.popup.on("select",this.tooltipTimer.bind(null,null)),this.popup.on("changeHoverMarker",this.tooltipTimer.bind(null,null)),this.popup},this.getPopup=function(){return this.popup||this.$init()},this.openPopup=function(e,t,n){this.popup||this.$init(),this.popup.autoSelect=this.autoSelect,this.popup.setData(this.completions.filtered,this.completions.filterText),this.editor.textInput.setAriaOptions({activeDescendant:r(this.popup.getRow())}),e.keyBinding.addKeyboardHandler(this.keyboardHandler);var i=e.renderer;if(this.popup.setRow(this.autoSelect?0:-1),n)n&&!t&&this.detach();else{this.popup.setTheme(e.getTheme()),this.popup.setFontSize(e.getFontSize());var o=i.layerConfig.lineHeight,s=i.$cursorLayer.getPixelPosition(this.base,!0);s.left-=this.popup.getTextLeftOffset();var a=e.container.getBoundingClientRect();s.top+=a.top-i.layerConfig.offset,s.left+=a.left-e.renderer.scrollLeft,s.left+=i.gutterWidth,this.popup.show(s,o)}this.changeTimer.cancel()},this.detach=function(){this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.off("changeSelection",this.changeListener),this.editor.off("blur",this.blurListener),this.editor.off("mousedown",this.mousedownListener),this.editor.off("mousewheel",this.mousewheelListener),this.changeTimer.cancel(),this.hideDocTooltip(),this.gatherCompletionsId+=1,this.popup&&this.popup.isOpen&&this.popup.hide(),this.base&&this.base.detach(),this.activated=!1,this.completions=this.base=null},this.changeListener=function(e){var t=this.editor.selection.lead;(t.row!=this.base.row||t.column<this.base.column)&&this.detach(),this.activated?this.changeTimer.schedule():this.detach()},this.blurListener=function(e){var t=document.activeElement,n=this.editor.textInput.getElement(),i=e.relatedTarget&&this.tooltipNode&&this.tooltipNode.contains(e.relatedTarget),o=this.popup&&this.popup.container;t==n||t.parentNode==o||i||t==this.tooltipNode||e.relatedTarget==n||this.detach()},this.mousedownListener=function(e){this.detach()},this.mousewheelListener=function(e){this.detach()},this.goTo=function(e){this.popup.goTo(e)},this.insertMatch=function(e,t){if(e||(e=this.popup.getData(this.popup.getRow())),!e)return!1;var n=this.completions;if(this.editor.startOperation({command:{name:"insertMatch"}}),e.completer&&e.completer.insertMatch)e.completer.insertMatch(this.editor,e);else{if(!n)return!1;if(n.filterText)for(var i,o=this.editor.selection.getAllRanges(),r=0;i=o[r];r++)i.start.column-=n.filterText.length,this.editor.session.remove(i);e.snippet?l.insertSnippet(this.editor,e.snippet):this.editor.execCommand("insertstring",e.value||e)}this.completions==n&&this.detach(),this.editor.endOperation()},this.commands={Up:function(e){e.completer.goTo("up")},Down:function(e){e.completer.goTo("down")},"Ctrl-Up|Ctrl-Home":function(e){e.completer.goTo("start")},"Ctrl-Down|Ctrl-End":function(e){e.completer.goTo("end")},Esc:function(e){e.completer.detach()},Return:function(e){return e.completer.insertMatch()},"Shift-Return":function(e){e.completer.insertMatch(null,{deleteSuffix:!0})},Tab:function(e){var t=e.completer.insertMatch();if(t||e.tabstopManager)return t;e.completer.goTo("down")},PageUp:function(e){e.completer.popup.gotoPageUp()},PageDown:function(e){e.completer.popup.gotoPageDown()}},this.gatherCompletions=function(e,t){var n=e.getSession(),i=e.getCursorPosition(),o=s.getCompletionPrefix(e);this.base=n.doc.createAnchor(i.row,i.column-o.length),this.base.$insertRight=!0;var r=[],a=e.completers.length;return e.completers.forEach((function(c,l){c.getCompletions(e,n,i,o,(function(n,i){!n&&i&&(r=r.concat(i)),t(null,{prefix:s.getCompletionPrefix(e),matches:r,finished:0==--a})}))})),!0},this.showPopup=function(e,t){this.editor&&this.detach(),this.activated=!0,this.editor=e,e.completer!=this&&(e.completer&&e.completer.detach(),e.completer=this),e.on("changeSelection",this.changeListener),e.on("blur",this.blurListener),e.on("mousedown",this.mousedownListener),e.on("mousewheel",this.mousewheelListener),this.updateCompletions(!1,t)},this.updateCompletions=function(e,t){if(e&&this.base&&this.completions){var n=this.editor.getCursorPosition(),i=this.editor.session.getTextRange({start:this.base,end:n});if(i==this.completions.filterText)return;return this.completions.setFilter(i),this.completions.filtered.length?1!=this.completions.filtered.length||this.completions.filtered[0].value!=i||this.completions.filtered[0].snippet?void this.openPopup(this.editor,i,e):this.detach():this.detach()}if(t&&t.matches){n=this.editor.getSelectionRange().start;return this.base=this.editor.session.doc.createAnchor(n.row,n.column),this.base.$insertRight=!0,this.completions=new u(t.matches),this.openPopup(this.editor,"",e)}var o=this.gatherCompletionsId,r=function(e){if(e.finished)return this.detach()}.bind(this),s=function(t){var n=t.prefix,i=t.matches;this.completions=new u(i),this.exactMatch&&(this.completions.exactMatch=!0),this.completions.setFilter(n);var o=this.completions.filtered;return o.length&&(1!=o.length||o[0].value!=n||o[0].snippet)?this.autoInsert&&1==o.length&&t.finished?this.insertMatch(o[0]):void this.openPopup(this.editor,n,e):r(t)}.bind(this),a=!0,c=null;if(this.gatherCompletions(this.editor,function(e,t){var n=t.prefix,i=t&&t.matches;if(!i||!i.length)return r(t);0===n.indexOf(t.prefix)&&o==this.gatherCompletionsId&&(a?c=t:s(t))}.bind(this)),a=!1,c){var l=c;c=null,s(l)}},this.cancelContextMenu=function(){this.editor.$mouseHandler.cancelContextMenu()},this.updateDocTooltip=function(){var e=this.popup,t=e.data,n=t&&(t[e.getHoveredRow()]||t[e.getRow()]),i=null;return n&&this.editor&&this.popup.isOpen?(this.editor.completers.some((function(e){return e.getDocTooltip&&(i=e.getDocTooltip(n)),i})),i||"string"==typeof n||(i=n),"string"==typeof i&&(i={docText:i}),i&&(i.docHTML||i.docText)?void this.showDocTooltip(i):this.hideDocTooltip()):this.hideDocTooltip()},this.showDocTooltip=function(e){this.tooltipNode||(this.tooltipNode=c.createElement("div"),this.tooltipNode.className="ace_tooltip ace_doc-tooltip",this.tooltipNode.style.margin=0,this.tooltipNode.style.pointerEvents="auto",this.tooltipNode.tabIndex=-1,this.tooltipNode.onblur=this.blurListener.bind(this),this.tooltipNode.onclick=this.onTooltipClick.bind(this));var t=this.tooltipNode;e.docHTML?t.innerHTML=e.docHTML:e.docText&&(t.textContent=e.docText),t.parentNode||document.body.appendChild(t);var n=this.popup,i=n.container.getBoundingClientRect();t.style.top=n.container.style.top,t.style.bottom=n.container.style.bottom,t.style.display="block",window.innerWidth-i.right<320?i.left<320?n.isTopdown?(t.style.top=i.bottom+"px",t.style.left=i.left+"px",t.style.right="",t.style.bottom=""):(t.style.top=n.container.offsetTop-t.offsetHeight+"px",t.style.left=i.left+"px",t.style.right="",t.style.bottom=""):(t.style.right=window.innerWidth-i.left+"px",t.style.left=""):(t.style.left=i.right+1+"px",t.style.right="")},this.hideDocTooltip=function(){if(this.tooltipTimer.cancel(),this.tooltipNode){var e=this.tooltipNode;this.editor.isFocused()||document.activeElement!=e||this.editor.focus(),this.tooltipNode=null,e.parentNode&&e.parentNode.removeChild(e)}},this.onTooltipClick=function(e){for(var t=e.target;t&&t!=this.tooltipNode;){if("A"==t.nodeName&&t.href){t.rel="noreferrer",t.target="_blank";break}t=t.parentNode}},this.destroy=function(){if(this.detach(),this.popup){this.popup.destroy();var e=this.popup.container;e&&e.parentNode&&e.parentNode.removeChild(e)}this.editor&&this.editor.completer==this&&this.editor.completer,this.popup=null}}).call(p.prototype),p.for=function(e){return e.completer||(h.get("sharedPopups")?(p.$shared||(p.$sharedInstance=new p),e.completer=p.$sharedInstance):(e.completer=new p,e.once("destroy",(function(e,t){t.completer.destroy()})))),e.completer},p.startCommand={name:"startAutocomplete",exec:function(e,t){var n=p.for(e);n.autoInsert=!1,n.autoSelect=!0,n.showPopup(e,t),n.cancelContextMenu()},bindKey:"Ctrl-Space|Ctrl-Shift-Space|Alt-Space"};var u=function(e,t){this.all=e,this.filtered=e,this.filterText=t||"",this.exactMatch=!1};(function(){this.setFilter=function(e){if(e.length>this.filterText&&0===e.lastIndexOf(this.filterText,0))var t=this.filtered;else t=this.all;this.filterText=e,t=(t=this.filterCompletions(t,this.filterText)).sort((function(e,t){return t.exactMatch-e.exactMatch||t.$score-e.$score||(e.caption||e.value).localeCompare(t.caption||t.value)}));var n=null;t=t.filter((function(e){var t=e.snippet||e.caption||e.value;return t!==n&&(n=t,!0)})),this.filtered=t},this.filterCompletions=function(e,t){var n=[],i=t.toUpperCase(),o=t.toLowerCase();e:for(var r,s=0;r=e[s];s++){var a=r.caption||r.value||r.snippet;if(a){var c,l,h=-1,p=0,u=0;if(this.exactMatch){if(t!==a.substr(0,t.length))continue e}else{var d=a.toLowerCase().indexOf(o);if(d>-1)u=d;else for(var f=0;f<t.length;f++){var g=a.indexOf(o[f],h+1),m=a.indexOf(i[f],h+1);if((c=g>=0&&(m<0||g<m)?g:m)<0)continue e;(l=c-h-1)>0&&(-1===h&&(u+=10),u+=l,p|=1<<f),h=c}}r.matchMask=p,r.exactMatch=u?0:1,r.$score=(r.score||0)-u,n.push(r)}}return n}}).call(u.prototype),t.Autocomplete=p,t.FilteredList=u})),ace.define("ace/autocomplete/text_completer",["require","exports","module","ace/range"],(function(e,t,n){var i=e("../range").Range,o=/[^a-zA-Z_0-9\$\-\u00C0-\u1FFF\u2C00-\uD7FF\w]+/;function r(e,t){var n=function(e,t){return e.getTextRange(i.fromPoints({row:0,column:0},t)).split(o).length-1}(e,t),r=e.getValue().split(o),s=Object.create(null),a=r[n];return r.forEach((function(e,t){if(e&&e!==a){var i=Math.abs(n-t),o=r.length-i;s[e]?s[e]=Math.max(o,s[e]):s[e]=o}})),s}t.getCompletions=function(e,t,n,i,o){var s=r(t,n);o(null,Object.keys(s).map((function(e){return{caption:e,value:e,score:s[e],meta:"local"}})))}})),ace.define("ace/ext/language_tools",["require","exports","module","ace/snippets","ace/autocomplete","ace/config","ace/lib/lang","ace/autocomplete/util","ace/autocomplete/text_completer","ace/editor","ace/config"],(function(e,t,n){"use strict";var i=e("../snippets").snippetManager,o=e("../autocomplete").Autocomplete,r=e("../config"),s=e("../lib/lang"),a=e("../autocomplete/util"),c=e("../autocomplete/text_completer"),l={getCompletions:function(e,t,n,i,o){if(t.$mode.completer)return t.$mode.completer.getCompletions(e,t,n,i,o);var r=e.session.getState(n.row);o(null,t.$mode.getCompletions(r,t,n,i))}},h={getCompletions:function(e,t,n,o,r){var s=[],a=t.getTokenAt(n.row,n.column);a&&a.type.match(/(tag-name|tag-open|tag-whitespace|attribute-name|attribute-value)\.xml$/)?s.push("html-tag"):s=i.getActiveScopes(e);var c=i.snippetMap,l=[];s.forEach((function(e){for(var t=c[e]||[],n=t.length;n--;){var i=t[n],o=i.name||i.tabTrigger;o&&l.push({caption:o,snippet:i.content,meta:i.tabTrigger&&!i.name?i.tabTrigger+"\u21e5 ":"snippet",type:"snippet"})}}),this),r(null,l)},getDocTooltip:function(e){var t,n;"snippet"!=e.type||e.docHTML||(e.docHTML=["<b>",s.escapeHTML(e.caption),"</b>","<hr></hr>",s.escapeHTML((t=e.snippet,n={},t.replace(/\${(\d+)(:(.*?))?}/g,(function(e,t,i,o){return n[t]=o||""})).replace(/\$(\d+?)/g,(function(e,t){return n[t]}))))].join(""))}},p=[h,c,l];t.setCompleters=function(e){p.length=0,e&&p.push.apply(p,e)},t.addCompleter=function(e){p.push(e)},t.textCompleter=c,t.keyWordCompleter=l,t.snippetCompleter=h;var u={name:"expandSnippet",exec:function(e){return i.expandWithTab(e)},bindKey:"Tab"},d=function(e,t){f(t.session.$mode)},f=function(e){"string"==typeof e&&(e=r.$modes[e]),e&&(i.files||(i.files={}),g(e.$id,e.snippetFileId),e.modes&&e.modes.forEach(f))},g=function(e,t){t&&e&&!i.files[e]&&(i.files[e]={},r.loadModule(t,(function(t){t&&(i.files[e]=t,!t.snippets&&t.snippetText&&(t.snippets=i.parseSnippetFile(t.snippetText)),i.register(t.snippets||[],t.scope),t.includeScopes&&(i.snippetMap[t.scope].includeScopes=t.includeScopes,t.includeScopes.forEach((function(e){f("ace/mode/"+e)}))))})))},m=function(e){var t=e.editor,n=t.completer&&t.completer.activated;if("backspace"===e.command.name)n&&!a.getCompletionPrefix(t)&&t.completer.detach();else if("insertstring"===e.command.name){if(a.getCompletionPrefix(t)&&!n){var i=o.for(t);i.autoInsert=!1,i.showPopup(t)}}},b=e("../editor").Editor;e("../config").defineOptions(b.prototype,"editor",{enableBasicAutocompletion:{set:function(e){e?(this.completers||(this.completers=Array.isArray(e)?e:p),this.commands.addCommand(o.startCommand)):this.commands.removeCommand(o.startCommand)},value:!1},enableLiveAutocompletion:{set:function(e){e?(this.completers||(this.completers=Array.isArray(e)?e:p),this.commands.on("afterExec",m)):this.commands.removeListener("afterExec",m)},value:!1},enableSnippets:{set:function(e){e?(this.commands.addCommand(u),this.on("changeMode",d),d(0,this)):(this.commands.removeCommand(u),this.off("changeMode",d))},value:!1}})})),ace.require(["ace/ext/language_tools"],(function(t){e&&(e.exports=t)}))}}]);