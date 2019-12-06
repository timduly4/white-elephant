(this["webpackJsonpwhite-elephant"]=this["webpackJsonpwhite-elephant"]||[]).push([[0],{15:function(e,t,a){e.exports=a(25)},22:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);a(16),a(17);var n=a(0),l=a.n(n),i=a(12),s=a.n(i),r=(a(22),a(9)),c=a.n(r),o=a(13),h=a(4),m=a(5),u=a(7),d=a(6),f=a(8),p=a(27),b=a(1);a(24);function g(e){return new Promise((function(t){return setTimeout(t,e)}))}var E=function(e){function t(){return Object(h.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"img-text"},l.a.createElement("span",{className:"h1 center-block text-center",style:{marginBottom:25,fontSize:60,fontFamily:"Courier New",fontWeight:"bolder"}},this.props.value)),l.a.createElement("img",{src:this.props.img_display,width:200,height:200,className:"center-block text-center",vspace:10}))}}]),t}(l.a.Component),y=function(e){function t(){return Object(h.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,{variant:"success",size:"lg",onClick:this.props.onClick},"Challenge!")}}]),t}(l.a.Component),v=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={value:"Ready",number_of_heads:0,number_of_tails:0,img_display:"https://media.giphy.com/media/uRD0V1GreQuru/giphy.gif"},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"handleClick",value:function(){var e=0===Math.floor(2*Math.random())?"heads":"tails";this.setState({value:e}),"heads"===e?(this.setState({number_of_heads:this.state.number_of_heads+1}),this.setState({img_display:"https://media.giphy.com/media/gixQfE7XzZfpe/giphy.gif"}),this.setState({value:"STOLEN!"})):(this.setState({number_of_tails:this.state.number_of_tails+1}),this.setState({img_display:"https://media.giphy.com/media/QBGe6zi0O1aaWxeR8i/giphy.gif"}),this.setState({value:"SAFE!"}))}},{key:"countDown",value:function(){var e=Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({img_display:"https://thumbs.gfycat.com/DismalWhisperedEastsiberianlaika-small.gif"}),this.setState({value:"This gift is..."}),e.next=4,g(3e3);case 4:this.handleClick();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{position:"absolute",height:"100%",width:"100%",display:"table"}},l.a.createElement("div",{style:{position:"relative",height:"100%",width:"100%",display:"table-cell",verticalAlign:"middle"}},l.a.createElement("div",{className:"game"},l.a.createElement("div",{className:"game-image"},l.a.createElement(E,{value:this.state.value,img_display:this.state.img_display})),l.a.createElement("div",{className:"center-block text-center"},l.a.createElement(y,{onClick:function(){return e.countDown()}})),l.a.createElement("div",{className:"status"},l.a.createElement("span",{className:"h3 center-block text-center"},"Status")),l.a.createElement("div",{className:"number-of-heads"},l.a.createElement("span",{className:"h4 center-block text-center",style:{marginBottom:25}},"Number of Stolen Gifts: "+this.state.number_of_heads)),l.a.createElement("div",{className:"number-of-tails"},l.a.createElement("span",{className:"h4 center-block text-center",style:{marginBottom:25}},"Number of Safe Gifts: "+this.state.number_of_tails))),l.a.createElement("div",{className:"instructions"},l.a.createElement(b.a,{style:{width:"100%"},allowZeroExpanded:!0},l.a.createElement(b.b,null,l.a.createElement(b.d,null,l.a.createElement(b.c,null,"The Probabilistic White Elephant: Rules of the Road")),l.a.createElement(b.e,null,l.a.createElement("p",null,l.a.createElement("b",null,"Starting with Player #1, they either: ")),l.a.createElement("p",null,l.a.createElement("b",null,"a) Pick from The Pool of gifts and opens, or ")),l.a.createElement("p",null,l.a.createElement("b",null,"b) Challenge to steal a non-stolen gift from another Player.")),l.a.createElement("p",null,l.a.createElement("b",null,"(Note: with the first person, their only option is (a), but starting with #2 and beyond, both (a) and (b) are valid options.)")),l.a.createElement("p",null,l.a.createElement("b",null,'If the Player challenges, then the person with the gift can either freely give it to the Player, or can enter into the challenge, in which case the success of the steal is determined by a coin flip.  If the gift is successfully stolen, then that gift is labeled "stolen" for that round (i.e., it can no longer be challenged for that round). ')),l.a.createElement("p",null,l.a.createElement("b",null,"If an unsuccessful challenge occurs, then the Player must choose to challenge another gift or pick from The Pool. ")),l.a.createElement("p",null,l.a.createElement("b",null,"If a successful challenge occurs, then the person who just gave up the gift must now choose either option (a) or (b).  Note that a gift can only be *stolen* once per round, but a key point is that it can be *challenged* multiple times per round. ")),l.a.createElement("p",null,l.a.createElement("b",null,"The round ends once a gift is selected from The Pool, and the game ends at the end of the last round.")))),l.a.createElement(b.b,null,l.a.createElement(b.d,null,l.a.createElement(b.c,null,"Who is the Ultimate Winner?")),l.a.createElement(b.e,null,l.a.createElement("p",null,l.a.createElement("span",{className:"center-block text-center",style:{marginBottom:25,fontSize:32,fontFamily:"Courier New",fontWeight:"bolder"}},"EVERYBODY! HAPPY HOLIDAYS!!!"),l.a.createElement("img",{src:"https://media.giphy.com/media/9w475hDWEPVlu/giphy.gif",width:200,height:200,className:"center-block text-center"}))))))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.c09d32c9.chunk.js.map