(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("NmYn"),o=a.n(c),i=a("Wbzz"),b=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),p=a.n(s),m=a("QH2O"),d=a.n(m),u=a("qKvR"),j=function(e){var t,a=e.title,n=e.theme,r=e.tabs,c=void 0===r?[]:r;return Object(u.b)("div",{className:p()(d.a.pageHeader,(t={},t[d.a.withTabs]=c.length,t[d.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},a)))))},O=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,c=r.baseUrl,o=r.subDirectory,b=c+"/edit/"+r.branch+o+"/src/pages"+t;return c?Object(u.b)("div",{className:"bx--row "+O.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:O.link,href:b},"Edit this page on GitHub"))):null},g=a("FCXl"),N=a("dI71"),f=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=o()(e,{lower:!0,strict:!0}),c=r===n,b=new RegExp(n+"/?(#.*)?$"),l=a.replace(b,r);return Object(u.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=c,t),f.listItem)},Object(u.b)(i.Link,{className:f.link,to:""+l},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:f.list},r))))))},t}(r.a.Component),y=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,c=t.frontmatter,s=void 0===c?{}:c,p=t.relativePagePath,m=t.titleType,d=s.tabs,O=s.title,N=s.theme,f=s.description,k=s.keywords,w=Object(v.a)().interiorTheme,T=Object(i.useStaticQuery)("2456312558").site.pathPrefix,I=T?n.pathname.replace(T,""):n.pathname,C=d?I.split("/").filter(Boolean).slice(-1)[0]||o()(d[0],{lower:!0}):"",P=N||w;return Object(u.b)(l.a,{tabs:d,homepage:!1,theme:P,pageTitle:O,pageDescription:f,pageKeywords:k,titleType:m},Object(u.b)(j,{title:r?Object(u.b)(r,null):O,label:"label",tabs:d,theme:P}),d&&Object(u.b)(x,{slug:I,tabs:d,currentTab:C}),Object(u.b)(y.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:p})),Object(u.b)(g.a,{pageContext:t,location:n,slug:I,tabs:d,currentTab:C}),Object(u.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},Er6Q:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return m}));var n,r=a("wx14"),c=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),b=(a("qKvR"),{}),l=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),s={_frontmatter:b},p=i.a;function m(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(o.b)(p,Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(l,{kind:"warning",mdxType:"InlineNotification"},Object(o.b)("strong",null,"Updated 10/22/2020")," - Work in progress"),Object(o.b)("h2",null,"Introduction"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.ibm.com/automation/business-rules"}),"Decision management")," supports three main use cases:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Let users model, author and validate decisions in a low-code environment."),Object(o.b)("li",{parentName:"ul"},"Externalize decision logic from microservice code so it can be developed, managed and tested by business users, but still integrated as a service in a cloud native microservice based."),Object(o.b)("li",{parentName:"ul"},"Integrate with AI model for combining predictive scoring and business rules ")),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSYHZ8_20.0.x/com.ibm.dba.aid/topics/con_aid_intro.html"}),"product documentation")),Object(o.b)("h2",null,"Getting started"),Object(o.b)("h3",null,"Installing on IBM Cloud Openshift cluster"),Object(o.b)("p",null,"This section is a quick summary of the steps to do to deploy version 2020.2."),Object(o.b)("h5",null,"Pre-requisites"),Object(o.b)("p",null,"Access to an Opendhift cluster and get ",Object(o.b)("inlineCode",{parentName:"p"},"oc")," CLI."),Object(o.b)("h5",null,"Get access to the container images"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Get your product entitlement key at ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://myibm.ibm.com/products-services/containerlibrary"}),"https://myibm.ibm.com/products-services/containerlibrary")," site.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If not done already create an openShift project to host the decision service"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"oc -new-project cp4automation\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create an image pull secret to access the IBM image registry "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"oc create secret docker-registry admin.registrykey --docker-username=cp --docker-password=<Generated-Key> --docker-server=cp.icr.io -n cp4automation\n> secret/admin.registrykey created\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Check that you can access and download the Cloud Pak for Automation images: "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"docker login cp.icr.io -u cp -p <Generated-Key>\ndocker pull cp.icr.io/cp/cp4a/aae/dba-dbcompatibility-initcontainer:20.0.2\n")))),Object(o.b)("h5",null,"Install common services"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Get scripts and config files archive from IBM github cloud pak for automation: "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"wget https://github.com/icp4a/cert-kubernetes/archive/20.0.2.1.tar.gz\n")))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Those scripts define custom resource definitions for kubernetes deployment.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Expand archive: ",Object(o.b)("inlineCode",{parentName:"p"},"tar xvf 20.0.2.tar.gz"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Change to folder cert-kubernetes-20.0.2")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If not already present on the cluster create the ",Object(o.b)("inlineCode",{parentName:"p"},"common-service")," OpenShift project"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"# verify project does not exist\noc new-project common-service\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In common-service project, run the following script to install the different operators. If you do want to set the trace of the execution, you can uncomment the second line ",Object(o.b)("inlineCode",{parentName:"p"},"set -x")," in this script."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"./scripts/deploy_CS3.4.sh nonbai\n")))),Object(o.b)("h5",null,"Prepare the operator storage"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Edit ",Object(o.b)("inlineCode",{parentName:"p"},"descriptors/operator-shared-pvc.yaml")," and use ibmc-file-retain-gold-gid")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create the PVC: "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"oc create -f descriptors/operator-shared-pvc.yaml\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Copy the drivers: "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"oc cp scripts/jdbc cp4a/<operator-podname>:/opt/ansible/share -c ansible\n")))),Object(o.b)("h5",null,"Install the operator"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Deploy operator: "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"./scripts/deployOperator.sh -i cp.icr.io/cp/cp4a/icp4a-operator:20.0.2 -p admin.registrykey -n cp4a -a accept`\n")))),Object(o.b)("h5",null,"Deploy ODM"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Apply the CR:   (note: this CR also includes a simple install of BAI)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Update the network policies for ODM: "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"oc get netpol\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Edit the odm-dc-networkpolicy, odm-dr-network-policy, odm-ds-console-network-policy, odm-ds-runtime-network-policy to add a blanket egress policy, for example:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"})," spec:\n egress:\n - {}\n ingress:\n - ports:\n   - port: <PORT>\n     protocol: TCP\n podSelector:\n   matchLabels:\n     run: ppe-odm-decisioncenter\n policyTypes:\n - Egress\n - Ingress\n")))))}m.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-technology-decision-index-mdx-7dc58c5fda2f5a0a0b89.js.map