(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),r=a.n(i),s=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),u=a.n(b),d=a("QH2O"),p=a.n(d),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(m.b)("div",{className:u()(p.a.pageHeader,(t={},t[p.a.withTabs]=i.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,r=o.subDirectory,l=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},j=a("FCXl"),O=a("dI71"),w=a("I8xM"),A=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=r()(e,{lower:!0,strict:!0}),i=o===n,l=new RegExp(n+"/?(#.*)?$"),c=a.replace(l,o);return Object(m.b)("li",{key:e,className:u()((t={},t[w.selectedItem]=i,t),w.listItem)},Object(m.b)(s.Link,{className:w.link,to:""+c},e))}));return Object(m.b)("div",{className:w.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:w.list},o))))))},t}(o.a.Component),v=a("MjG9"),N=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,b=void 0===i?{}:i,u=t.relativePagePath,d=t.titleType,p=b.tabs,g=b.title,O=b.theme,w=b.description,y=b.keywords,x=Object(N.a)().interiorTheme,k=Object(s.useStaticQuery)("2456312558").site.pathPrefix,T=k?n.pathname.replace(k,""):n.pathname,P=p?T.split("/").filter(Boolean).slice(-1)[0]||r()(p[0],{lower:!0}):"",S=O||x;return Object(m.b)(c.a,{tabs:p,homepage:!1,theme:S,pageTitle:g,pageDescription:w,pageKeywords:y,titleType:d},Object(m.b)(h,{title:o?Object(m.b)(o,null):g,label:"label",tabs:p,theme:S}),p&&Object(m.b)(A,{slug:T,tabs:p,currentTab:P}),Object(m.b)(v.a,{padded:!0},a,Object(m.b)(f,{relativePagePath:u})),Object(m.b)(j.a,{pageContext:t,location:n,slug:T,tabs:p,currentTab:P}),Object(m.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XSRY:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("013z"),s=(a("qKvR"),{}),l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},c=l("InlineNotification"),b=l("AnchorLinks"),u=l("AnchorLink"),d={_frontmatter:s},p=r.a;function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(p,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This scenario illustrates how to increase straight-through processing with process and decision automation to save time, money, and customer frustration. It uses the Business Automation Workflow, Automate Decision Service, Business Automation Insights"),Object(i.b)(c,{kind:"warning",mdxType:"InlineNotification"},Object(i.b)("strong",null,"Updated 10/21/2020")," - Work in progress"),Object(i.b)(b,{mdxType:"AnchorLinks"},Object(i.b)(u,{mdxType:"AnchorLink"},"Scenario overview"),Object(i.b)(u,{mdxType:"AnchorLink"},"Preparation"),Object(i.b)(u,{mdxType:"AnchorLink"},"Demo script"),Object(i.b)(u,{mdxType:"AnchorLink"},"Build it yourself lab")),Object(i.b)("h2",null,"Scenario overview"),Object(i.b)("p",null,"Imagine that a customer purchases your product, but is unfortunately unsatisfied and requests a refund. Today, your refund process has several manual steps. Managing high volumes of refunds that require manual investigation leads to slow average completion times, inconsistent status updates to customers, and higher costs for any errors made. Although you have guidelines that determine when a refund is approved or denied, there are still inconsistencies in the decision-making. This use case demonstrates the use of automation in the form of straight-through-processing to save time, money, and customer frustration."),Object(i.b)("p",null,"The following diagram illustrates the products involved and the solution components:"),Object(i.b)("p",null," ",Object(i.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"989px"}}),"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAAByElEQVQoz42RTW8SURSG55d1pUs3rvwHXbnSXW00ipsutbEb02jSVpPG2Bqx1QQTtaRQPkqhFXAYYAYizJ3LCMMMOFDm8UpqNybGN3nvm/vcnJNzcrXIGxD5/n+Z3zn0mQ2Hyj7nA4/QU3yuiEk4RYt89aiuMwXOVf5xNGezi7zgEX+pqgteHUl2MpLdtEAjCPmnostjrn4wpWQFlFoBHTniS7bN4lOdm+s6S5s1tHYnR8J6QqqZYu29YHXfYuNzj9bgjH1jlY5fpFAf82ivxesjh3jO4cr9AldjJyxv6RiGYDfr8C7v8CbdRdPNT2yWbpO2PpIsj0mcSjL6iIo45Hn+FmfigIYdEVcFp6bHXl6ycLfAwr0Cd9RElW+CxXWTG49rvM1KtfJ0wkE5ZGnD4MF2jQ/H4nK98U+IbVssv9BZ2WnMWbLc49rDLNdXjom9rNJp93iWaLIW18npLprX7VJpWKQKFQ4LVU7KBl1HYktJRddJpjMUv1ap1k3snsv3rk3NMKg3G9RqdQLZJ5qoHx+5BKMQbagaBo4gdOXcY+kwtG0GnQ5muYxRLCItC7fdxjFNeq0WvhCqkcS3BT+Ei+yPED1PDeHxCwXsQR2YFpxfAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"0",title:"0",src:"/refarch-dba/static/cebe69dd56030b748b6eacf3c783d1c7/ed71a/comp-view.png",srcSet:["/refarch-dba/static/cebe69dd56030b748b6eacf3c783d1c7/7fc1e/comp-view.png 288w","/refarch-dba/static/cebe69dd56030b748b6eacf3c783d1c7/a5df1/comp-view.png 576w","/refarch-dba/static/cebe69dd56030b748b6eacf3c783d1c7/ed71a/comp-view.png 989w"],sizes:"(max-width: 989px) 100vw, 989px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("h2",null,"Preparation"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/dba-refund-request.git"}),"dba-refund-request")," git repository includes the decision services and workflow definitions needed for this lab."),Object(i.b)("p",null,"For a light weight demonstration Business Automation Insight is not used. "),Object(i.b)("h3",null,"Environment"),Object(i.b)("p",null,"We assume the following products are installed, up and running:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Cloud Pak for Automation version 2020.3 on OpenShift"),Object(i.b)("li",{parentName:"ul"},"Decision Services"),Object(i.b)("li",{parentName:"ul"},"Process Center and Process Designer on VM")),Object(i.b)("h3",null,"Setup your Navigator and Process Portal"),Object(i.b)("p",null,"As the ",Object(i.b)("inlineCode",{parentName:"p"},"Focus Corp Demo Dashboard")," is in the Process Portal for now, it is recommended that you make this your default dashboard."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Log in to the Process Portal environment you wish to use (Run, Development, etc.)."),Object(i.b)("li",{parentName:"ul"},"Under Dashboards click Show more… and click the icon next to Focus Corp Demo Dashboard and click the star icon."),Object(i.b)("li",{parentName:"ul"},"Drag the right-side handle of that dashboard row to the top so this will load when you start Process Portal.")),Object(i.b)("p",null,"Why not personalize your Process Portal environment?  Click the Edit Profile link in the upper left and add a picture."),Object(i.b)("p",null,"If you do need to use the Work list, it is recommended to create a saved search (maybe name it My Work) that filters to your demo’s tasks."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Go to the default Work dashboard."),Object(i.b)("li",{parentName:"ul"},"Click the Saved Search editor icon in the upper right ()."),Object(i.b)("li",{parentName:"ul"},"Click Add to create a criteria which can be a simple search or a filter by attribute such as process definition name."),Object(i.b)("li",{parentName:"ul"},"Make sure to Show Advanced Options when done, name your search and click Save so it will show on the left menu."),Object(i.b)("li",{parentName:"ul"},"You can also drag this to the top as you did for the Focus Corp Demo Dashboard so it will start automatically.")),Object(i.b)("h2",null,"Demo script"),Object(i.b)("p",null,"The following diagrams describe the use case.  They are not necessarily meant to represent an executable business process and are more a business model to describe the flow. "),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Caution should be used in presenting these to clients without appropriate contextof the difference between business modeling and process execution modeling.")),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"254px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"105.11811023622046%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAABYlAAAWJQFJUiTwAAADWElEQVQ4y51U23LbNhDV//9E+pK2M7XT1Ml4GreNGzmR4sS2ZEl2YkmxRYgSxfsFvBPAyYKSM07bl3pnziyxiz04WOywcza5Pe32ztfd/oVBYMdvP7J3H4bszbsz1u2fs5P3A1pfUvwD++PvPruaLtjKiRizfLb8D3QsN1rzOIZt2wiDAL7nIfB9eK4H13Xb7ygM27W92SDlHEopSCEgm2brxc5LiU6YVkYJgEuIVEJqxDUkhWRDiJttLCUOrn2jKKdkUisZ0T4NvT+qlKyFkh0vKZhfAZ9MV14xGzcrUlIoJKQkSAsswgJXxgbXlJvbMcJSIokj3NkBJoaNz6aL66XTIi1rdHwijEiKEWRy4XGwMMeSwNMUSVFjxWvcuQkMPwWLClhRiiLPYcV0GMVMilEtplaAOM31lUtGfMgqIfNaQiPkGQT1pBESnE7NG9mC0wFJmkFbUQtkGpVoc0leoaxIoRMX7DJQ6Fm17FsV+psapwShgNnKweEnG6d2g/66RG8jMI0E0SkcDec4XiQ4dShHdVSPoBBEmJTs9SLFLwNTPhutyS/x8iYACQaLK/w8WOGH10M8Ifx0ZuDCLohP4K2ZY2+0wf7lCnu6Zp7AycVW4UdX4pjlsmsW5DNoXzUCa+rfq9ukVfLXbYxX8wgTVxNKXPoCb5YFToj4hPZ3zRKeJoyoh7onpEhqVfT0BNnOFIVQS/UdGoIiQi/JiKBBQK+u4dN3Rb3sRFnVEuq5wwOTSrUD/L2pb/7l+RTPxxb+vEtwNA9xdMfhbhVuCalYqh2JLtMKt2vgW/x+LQV69Ej7EwdPjkd42p/ixSyBnf2DcOe3CneE97GHh2nCWSwx9BWGboUR9XPgNoiKxxDuwJygHWo7l9ikDSxC2fbwEYT63gfn8/bKv39JcDiP8WIa0ZWbxxC2SZwwjr2xjV8nGzyf2O1MaqWPIlRSD32Nm6DGLNxiSuDVI3rY5uj/98VJcO2kmPoFpl6BiRUjyor252Ds5k6Pzc60CElQ/zbir8tS9axKHcwS9eP7udofWepwUSgzLlSH55WJ/20S3dsAB9cung0M/DZe4cjIabCph8zLPieFKMOsSaK84fcIs7rFw9g9grTiI8PjAzPm403Gx1bKL1jETT/jXwG2wTlwcWimqQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"1",title:"1",src:"/refarch-dba/static/5d0090fac2df327a4fe1b8c51985c223/2d34a/bwl-discovery-map.png",srcSet:["/refarch-dba/static/5d0090fac2df327a4fe1b8c51985c223/2d34a/bwl-discovery-map.png 254w"],sizes:"(max-width: 254px) 100vw, 254px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"506px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.91666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABpElEQVQoz51STY/TMBDN//8rHJCQQByA00oIcduVdrWo21J2m5Z8OJPY8Xf8GCdtuogbVp5mxp48v5lx0btpeG4G2tc9NTrSiTTVylPL/q+aaF91VI+B4ansRqqUo4bjUijaHpvrOf+TUYw2YCMsPu0kbp4VlIuwISLh/1YxaoPf0k33tUkb4ZILMVkf0mh95kzTNM12Rkps0zlO61r2Fr9YeNNVELtMCiY8hxz7ANERpHG4PUp83bUoB4cY45zr44J890zITuIP04WXrQ9hvUNIDcVkNFrcMNmXJ4GnVl8JGflMu3AmvCjnldXs6gFbYeZ+Bk5ulYWxDrk9ByFxYHWSe1+RwgsZCB3Qa4ueSYtzWSthTnx3V+Lt3Qm7znLpDptaohI9SjHgM6v7sOnnQX7fC7y5PeJbqfHzJPBjX/5LGLkPyk8YLKublr2ml2v5ZAI6bq/ns5gF8Ozy+IzzGPQrhZe5pPT6wSx+x6UcW8KhIXx8OOH9o8B9pTByXzNJ7m89aBgf/laYkSd18dc9RojL+3yRAdvOoWOlOTfEiatakHP/ACo9BpDmPuoIAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2",title:"2",src:"/refarch-dba/static/fee4ab9076bc4e39ad0c5045e07cab3f/add03/bwl-process.png",srcSet:["/refarch-dba/static/fee4ab9076bc4e39ad0c5045e07cab3f/7fc1e/bwl-process.png 288w","/refarch-dba/static/fee4ab9076bc4e39ad0c5045e07cab3f/add03/bwl-process.png 506w"],sizes:"(max-width: 506px) 100vw, 506px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=u5Pw-uL5STA&feature=youtu.be"}),"following video")," runs through the demonstration script as explains in this section."),Object(i.b)("h3",null,"Personas"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Customer persona will do the following main tasks:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Submit approved return"),Object(i.b)("li",{parentName:"ul"},"Turn on decision labels"),Object(i.b)("li",{parentName:"ul"},"Submit denied return"),Object(i.b)("li",{parentName:"ul"},"Submit manual return"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Operations Specialist persona"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Week 1 dashboard"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Rule Manager persona"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Decision model review"),Object(i.b)("li",{parentName:"ul"},"Review time window table, type of goods table, and one final text rule"),Object(i.b)("li",{parentName:"ul"},"Switch to the Reduce Manual Processing branch"),Object(i.b)("li",{parentName:"ul"},"Review type of goods table, compare"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Customer persona (?)"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Turn on decision labels and auto update rules"),Object(i.b)("li",{parentName:"ul"},"Submit manual return"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Operations Specialist persona"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Week 2 dashboard")))),Object(i.b)("h3",null,"Steps"),Object(i.b)("h4",null,"Corp Demos Dashboard"),Object(i.b)("p",null,"Reviewing the ",Object(i.b)("inlineCode",{parentName:"p"},"Focus Corp Demos Dashboard")," we see a text summary describing the demo, a discovery map diagram and a flow diagram for our reference.  OK, let’s launch the demo…"),Object(i.b)("h4",null,"Customer refund requests"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We start by becoming the customer.  From the ",Object(i.b)("inlineCode",{parentName:"li"},"Focus Corp Retail Your Returns and Refunds")," portal, we select one of our recent orders and submit a return.  The result is approved with an expected date to receive funds."),Object(i.b)("li",{parentName:"ul"},"We select and submit another order for refund but before we submit, let’s take a peak behind the form at some of the business rules.  A few of the fields are used by a set of business rules to make the refund decision and we see those here.  This refund request results in a denial but it is still straight through processing without any manual work."),Object(i.b)("li",{parentName:"ul"},"Upon selecting a final, third order, the rules this time are not certain and send the refund request off to a human queue for manual investigation.  This bottom investigation branch of the straight through process can utilize significant resources.")),Object(i.b)("h4",null,"Operations week 1"),Object(i.b)("p",null,"A few manual refunds are not a problem for the team, but too many will cause delays and our customer satisfaction will go down.  The ",Object(i.b)("strong",{parentName:"p"},"Operations Specialist")," reviews the ",Object(i.b)("inlineCode",{parentName:"p"},"Refund Dashboard"),", powered by ",Object(i.b)("inlineCode",{parentName:"p"},"Business Automation Insights")," and see not only the percentage of manually processed requests is high at more than 67% but the average manual investigation time across all requests is more than 2 hours.  They pass their findings to the Rule Manager to take action."),Object(i.b)("h4",null,"Rules manager"),Object(i.b)("p",null,"As a ",Object(i.b)("strong",{parentName:"p"},"rules manager"),", we have access to the decision model behind our refund process. The data is passed from the process system to the rules in the form of an order and refund request.  This moves through various decision tables including a time window validation that deals with the return reason, the days since delivery and the condition of the goods.  In combination, these lead to various processing decisions and we see a few that result in manual processing listed.  Another decision table deals with the type of goods and may also result in some manual processing.  Finally, this is then combined with a simple text rule to make the final decision."),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"rules manager")," drafted up a new branch of the decision model with some updates, let’s take a look.  To reduce manual processing, the rules manager adjusted the tables to remove some of the manual processing decisions.  Comparing the two versions shows that row 3 column 3 moved from manual to denied, for example.  Other rows were removed which results in an default approved decision.  We could also test and simulate the rule changes and compare historical results but we won’t cover that here in this demo."),Object(i.b)("h4",null,"Customer manual to approved"),Object(i.b)("p",null,"After the ",Object(i.b)("strong",{parentName:"p"},"rules manager")," deploys the new rules, let go back to being a customer and try them out.  Submitting the same order as before which resulted in a manual result now is approved!"),Object(i.b)("h4",null,"Operations week 2"),Object(i.b)("p",null,"After these new rules are in place for a week, the ",Object(i.b)("strong",{parentName:"p"},"Operations Specialist")," sees some solid improvement with a reduction in half for manual requests and also lower manual processing time average from above 120, down to only 60 mins."),Object(i.b)("h4",null,"Use Case Summary"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"With combined workflow and decision automation, both capabilities within IBM Cloud Pak for Automation, and updated business rules, we reduce the manual processing queues significantly"),Object(i.b)("li",{parentName:"ul"},"Increased straight through processing results in lower average completion time, lower costs, and more consistent communication with the customer throughout the process.  Now our processors can truly increase customer satisfaction.")),Object(i.b)("h2",null,"Build it yourself lab"),Object(i.b)("h3",null,"Pre-requisites"),Object(i.b)("p",null,"Need to clone the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/dba-refund-request.git"}),"dba-refund-request")," repository:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"git clone https://github.com/ibm-cloud-architecture/dba-refund-request.git\n")),Object(i.b)("h3",null,"Get a development environment"),Object(i.b)("h3",null,"Build the process application"),Object(i.b)("h3",null,"Build the decision service"))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-use-cases-refund-req-index-mdx-a78bc290862da2ed0805.js.map