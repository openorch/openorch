(()=>{"use strict";var e,a,c,f,b,d={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var c=t[e]={id:e,loaded:!1,exports:{}};return d[e].call(c.exports,c,c.exports,r),c.loaded=!0,c.exports}r.m=d,r.c=t,e=[],r.O=(a,c,f,b)=>{if(!c){var d=1/0;for(i=0;i<e.length;i++){c=e[i][0],f=e[i][1],b=e[i][2];for(var t=!0,o=0;o<c.length;o++)(!1&b||d>=b)&&Object.keys(r.O).every((e=>r.O[e](c[o])))?c.splice(o--,1):(t=!1,b<d&&(d=b));if(t){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}b=b||0;for(var i=e.length;i>0&&e[i-1][2]>b;i--)e[i]=e[i-1];e[i]=[c,f,b]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var b=Object.create(null);r.r(b);var d={};a=a||[null,c({}),c([]),c(c)];for(var t=2&f&&e;"object"==typeof t&&!~a.indexOf(t);t=c(t))Object.getOwnPropertyNames(t).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,r.d(b,d),b},r.d=(e,a)=>{for(var c in a)r.o(a,c)&&!r.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,c)=>(r.f[c](e,a),a)),[])),r.u=e=>"assets/js/"+({8:"28bff1b8",266:"a30ebf7a",323:"0b7de69a",343:"27b996a8",447:"3576fb2a",503:"7ff42f81",582:"796fbc44",589:"348fea2e",664:"b077da60",697:"6ceeee87",777:"23a0f240",797:"fe0011fa",799:"e21e9130",849:"0058b4c6",870:"bea096dd",936:"7cb19d0e",998:"0d655ccc",1087:"4b6b8f04",1158:"6146d358",1235:"a7456010",1246:"1cb95373",1449:"b45f0522",1476:"0daf56dc",1501:"f95d7a2d",1561:"b9fca696",1591:"7bec506f",1628:"41315da2",1643:"f163a07d",1690:"59dace82",1855:"66b9b95c",1903:"acecf23e",1972:"73664a40",1984:"f4d84232",1985:"abbeb965",1994:"7f009a7a",1997:"6a9fdcf5",2044:"d8da787b",2155:"69fe9340",2290:"e639efc0",2330:"177b508e",2343:"7aa75883",2380:"23a354c8",2384:"b896bbb6",2446:"92eba90c",2614:"2aa29545",2634:"c4f5d8e4",2711:"9e4087bc",2712:"cfd144c0",2739:"e842d539",2748:"ad676731",2951:"afcaba7c",3013:"65734429",3072:"49551b27",3114:"279bc5eb",3186:"61cef2fd",3237:"feaae9b7",3249:"ccc49370",3276:"e5aefb32",3381:"8f1a926a",3464:"380cc062",3469:"11e2c7c2",3550:"64933e8c",3559:"7db6f5c3",3599:"c47e0092",3617:"3d372003",3637:"f4f34a3a",3684:"930120ce",3692:"3baf0f4c",3694:"8717b14a",3726:"7eecacd5",3729:"8be8ac58",3811:"158e55a2",3830:"2f414c3f",3976:"0e384e19",4106:"4ee127b5",4110:"05856483",4134:"393be207",4159:"b36e7cbb",4161:"4eb0b3e7",4203:"1e45ca0c",4275:"d2ef7ed3",4279:"df203c0f",4343:"410ba7be",4402:"3c2bab0f",4462:"7d3ae564",4479:"32656de1",4533:"bdb60f42",4564:"8c33e823",4584:"f82cd581",4756:"05db76fe",4762:"217cd51b",4787:"3720c009",4813:"6875c492",4870:"49ac4057",4890:"851548c7",4954:"8d308f55",4976:"2f9fe0cd",5098:"d7542be2",5181:"c3337e28",5261:"5c980ea7",5402:"1db62da7",5557:"d9f32620",5727:"a9f273c5",5742:"aba21aa0",5927:"685e3c7c",6061:"1f391b9e",6164:"fb33417a",6192:"8be6a0e7",6237:"4f240745",6299:"7e736ca4",6344:"d0df35d9",6356:"b5bad366",6384:"ec025622",6423:"04dd0eaf",6471:"cea1ae88",6473:"4c5e977b",6513:"acb34047",6633:"3794ce5d",6636:"8d5a2a15",6788:"e9f9da3b",6824:"f74c5671",6886:"b3ee25c8",6909:"5f3a1839",6915:"52e33ccf",6965:"d97cb7ac",6969:"14eb3368",7001:"c7c9e555",7020:"73969c1c",7074:"ee007a50",7098:"a7bd4aaa",7202:"c0cc8b40",7277:"d26fae15",7333:"ed411173",7387:"7144043e",7453:"feaf416c",7472:"814f3328",7480:"158454bd",7536:"9d8d2213",7643:"a6aa9e1f",7655:"72f4e415",7666:"e9310014",7730:"0fa8b631",7742:"f4f007a1",7853:"38ae70c9",7874:"9558e6eb",7895:"464efff5",7942:"03713c66",7955:"8abea6a4",8024:"f411bd5f",8025:"5e90a9b3",8028:"b9abb15a",8121:"3a2db09e",8130:"f81c1134",8146:"c15d9823",8200:"d1e5d50e",8206:"b3d7dc57",8209:"01a85c17",8216:"d61d153e",8304:"f76ad434",8364:"a34036ec",8422:"4e3bc7c4",8455:"72bd4207",8462:"3217192f",8491:"398da6fc",8609:"925b3f96",8628:"4a1a590f",8737:"7661071f",8757:"e55a8f57",8804:"80eb3e33",8865:"a5c466db",8968:"39fbf1b6",9048:"a94703ab",9067:"898514b1",9126:"5456ea70",9216:"70017cc4",9325:"59362658",9328:"e273c56f",9416:"97e78c4d",9466:"0cc63ed5",9488:"982b0e27",9496:"fb05866b",9586:"7b5a7d49",9605:"482e887d",9647:"5e95c892",9662:"00c16cfb",9725:"0d72703a",9841:"ade40147",9858:"36994c47",9886:"5259e0d5"}[e]||e)+"."+{8:"9634f249",266:"d1880ad3",323:"fa9617d4",343:"a434ba86",447:"967b813f",503:"b4cf9680",557:"81b6ea74",582:"ef7ceb6f",589:"991ed381",664:"84730526",697:"1de5d5ad",777:"05d63522",797:"e100d903",799:"08330a95",849:"4ae0d282",870:"0658dfc8",936:"96f6a885",998:"6dc11e85",1087:"5c07d857",1158:"b70bad35",1235:"6537fa6f",1246:"6fcedf75",1410:"d63bd780",1449:"1560e433",1476:"f9f0d2f2",1501:"25b84be5",1561:"a20d415b",1591:"f07825d1",1628:"e92199f9",1643:"2fa49d78",1690:"9683203b",1855:"e2defefe",1903:"c7211b36",1972:"8a1cf1cf",1984:"68da60fe",1985:"47f38d46",1994:"2ebeabc3",1997:"bc6955e7",2044:"672e08ab",2155:"735bcce5",2237:"2e630386",2290:"ae54aeeb",2330:"646f9cd7",2343:"1024695d",2380:"61861f3a",2384:"ba8cc888",2446:"98d4df36",2614:"b1f541d7",2634:"bc0b8705",2711:"29444914",2712:"b9021ffc",2739:"50c91b39",2748:"847c6739",2951:"9b1c86d9",3013:"918a05c1",3072:"5b04195a",3114:"347448c4",3186:"53fad607",3237:"29ed3ee0",3249:"b6228602",3276:"692026b9",3381:"310d8044",3464:"fbebbcc0",3469:"65522aa4",3550:"1689466f",3559:"3a688002",3599:"53b7fd03",3617:"3ac57dbc",3637:"5b4f551b",3684:"34e42e38",3692:"4a845a41",3694:"3c1270e2",3726:"af7eedf3",3729:"8815f5a9",3783:"680a7958",3811:"2bcb3004",3830:"5c851feb",3976:"6827b794",4106:"1b18d278",4110:"c24e6614",4134:"acb00778",4159:"3fe5b4da",4161:"b6c61b2b",4203:"ea4940e1",4275:"6691e07f",4279:"b8b29a56",4343:"28a68310",4402:"32bbae31",4462:"8c2088b6",4479:"96f2a3a4",4533:"c5216523",4564:"e485e12c",4584:"a6010b08",4756:"128dff1a",4762:"842f60c9",4787:"8a106187",4813:"80ea8062",4870:"9f3c23e9",4890:"b6123caf",4954:"ebb2a92a",4976:"7ef25956",5098:"e79636da",5181:"564ac231",5261:"4648f129",5402:"6f3fcb59",5453:"5f15d3f6",5557:"efc6ac1a",5727:"8a7463d3",5742:"5357114a",5927:"4ddeb030",6061:"63d74542",6164:"3d7549e9",6192:"142b348e",6237:"216a6011",6299:"81399742",6344:"05a31ba2",6356:"c243e670",6384:"f71cf514",6423:"121386b8",6471:"163f2808",6473:"01d79b8b",6513:"5846e3e3",6538:"3339158d",6633:"31d415eb",6636:"8450b451",6788:"43dbaa2b",6824:"e90ade97",6886:"6986329f",6909:"fc3aae84",6915:"9cbf9c83",6965:"28e357bb",6969:"56602ffd",7001:"c466d98c",7020:"6fb57320",7074:"7e09b07f",7098:"fe36ba1c",7202:"418f8291",7277:"01ba1f5a",7305:"3fe91a31",7333:"bb4247fc",7387:"81da11df",7453:"9bb31eaf",7465:"ac31ffef",7472:"ee5cdf02",7480:"eb26681c",7536:"0203a668",7643:"6f5a85c1",7655:"25494465",7666:"465ba47c",7730:"fa2eaf06",7742:"29837f56",7853:"361e31f3",7874:"4ce4247b",7895:"17d97d54",7942:"ab369238",7955:"18e69772",8024:"4061be13",8025:"1c33d288",8028:"f6a701d7",8121:"d2366db2",8130:"e73019c9",8146:"0d006b83",8200:"6f6af7c4",8206:"662da1c9",8209:"b85627bf",8216:"60537d75",8304:"63f9f2b3",8364:"834efa9e",8422:"c00e4f55",8455:"eb8d859b",8462:"52bd6555",8491:"640c5860",8577:"1af8a6a9",8591:"61381dd6",8609:"365f222c",8628:"5ba2150c",8737:"6e904671",8757:"6cf8772a",8804:"b02ad5d8",8865:"bbfefbbd",8968:"90049bf3",9048:"b8f5edfb",9067:"e8734ebb",9126:"d924a673",9216:"a044f4b6",9278:"22203e09",9325:"f23d1798",9328:"762764b3",9416:"6572416f",9466:"a2697686",9488:"acc1c52a",9496:"84bdf24f",9586:"d56e8ed4",9605:"35e83d7a",9647:"5eddb94c",9662:"2b64c2c0",9725:"3767ec12",9841:"5d7558eb",9858:"fc2b026e",9886:"5ccbbb37"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},b="singulatron-api-docs:",r.l=(e,a,c,d)=>{if(f[e])f[e].push(a);else{var t,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==b+c){t=l;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",b+c),t.src=e),f[e]=[a];var u=(a,c)=>{t.onerror=t.onload=null,clearTimeout(s);var b=f[e];if(delete f[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((e=>e(c))),a)return a(c)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=u.bind(null,t.onerror),t.onload=u.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/",r.gca=function(e){return e={59362658:"9325",65734429:"3013","28bff1b8":"8",a30ebf7a:"266","0b7de69a":"323","27b996a8":"343","3576fb2a":"447","7ff42f81":"503","796fbc44":"582","348fea2e":"589",b077da60:"664","6ceeee87":"697","23a0f240":"777",fe0011fa:"797",e21e9130:"799","0058b4c6":"849",bea096dd:"870","7cb19d0e":"936","0d655ccc":"998","4b6b8f04":"1087","6146d358":"1158",a7456010:"1235","1cb95373":"1246",b45f0522:"1449","0daf56dc":"1476",f95d7a2d:"1501",b9fca696:"1561","7bec506f":"1591","41315da2":"1628",f163a07d:"1643","59dace82":"1690","66b9b95c":"1855",acecf23e:"1903","73664a40":"1972",f4d84232:"1984",abbeb965:"1985","7f009a7a":"1994","6a9fdcf5":"1997",d8da787b:"2044","69fe9340":"2155",e639efc0:"2290","177b508e":"2330","7aa75883":"2343","23a354c8":"2380",b896bbb6:"2384","92eba90c":"2446","2aa29545":"2614",c4f5d8e4:"2634","9e4087bc":"2711",cfd144c0:"2712",e842d539:"2739",ad676731:"2748",afcaba7c:"2951","49551b27":"3072","279bc5eb":"3114","61cef2fd":"3186",feaae9b7:"3237",ccc49370:"3249",e5aefb32:"3276","8f1a926a":"3381","380cc062":"3464","11e2c7c2":"3469","64933e8c":"3550","7db6f5c3":"3559",c47e0092:"3599","3d372003":"3617",f4f34a3a:"3637","930120ce":"3684","3baf0f4c":"3692","8717b14a":"3694","7eecacd5":"3726","8be8ac58":"3729","158e55a2":"3811","2f414c3f":"3830","0e384e19":"3976","4ee127b5":"4106","05856483":"4110","393be207":"4134",b36e7cbb:"4159","4eb0b3e7":"4161","1e45ca0c":"4203",d2ef7ed3:"4275",df203c0f:"4279","410ba7be":"4343","3c2bab0f":"4402","7d3ae564":"4462","32656de1":"4479",bdb60f42:"4533","8c33e823":"4564",f82cd581:"4584","05db76fe":"4756","217cd51b":"4762","3720c009":"4787","6875c492":"4813","49ac4057":"4870","851548c7":"4890","8d308f55":"4954","2f9fe0cd":"4976",d7542be2:"5098",c3337e28:"5181","5c980ea7":"5261","1db62da7":"5402",d9f32620:"5557",a9f273c5:"5727",aba21aa0:"5742","685e3c7c":"5927","1f391b9e":"6061",fb33417a:"6164","8be6a0e7":"6192","4f240745":"6237","7e736ca4":"6299",d0df35d9:"6344",b5bad366:"6356",ec025622:"6384","04dd0eaf":"6423",cea1ae88:"6471","4c5e977b":"6473",acb34047:"6513","3794ce5d":"6633","8d5a2a15":"6636",e9f9da3b:"6788",f74c5671:"6824",b3ee25c8:"6886","5f3a1839":"6909","52e33ccf":"6915",d97cb7ac:"6965","14eb3368":"6969",c7c9e555:"7001","73969c1c":"7020",ee007a50:"7074",a7bd4aaa:"7098",c0cc8b40:"7202",d26fae15:"7277",ed411173:"7333","7144043e":"7387",feaf416c:"7453","814f3328":"7472","158454bd":"7480","9d8d2213":"7536",a6aa9e1f:"7643","72f4e415":"7655",e9310014:"7666","0fa8b631":"7730",f4f007a1:"7742","38ae70c9":"7853","9558e6eb":"7874","464efff5":"7895","03713c66":"7942","8abea6a4":"7955",f411bd5f:"8024","5e90a9b3":"8025",b9abb15a:"8028","3a2db09e":"8121",f81c1134:"8130",c15d9823:"8146",d1e5d50e:"8200",b3d7dc57:"8206","01a85c17":"8209",d61d153e:"8216",f76ad434:"8304",a34036ec:"8364","4e3bc7c4":"8422","72bd4207":"8455","3217192f":"8462","398da6fc":"8491","925b3f96":"8609","4a1a590f":"8628","7661071f":"8737",e55a8f57:"8757","80eb3e33":"8804",a5c466db:"8865","39fbf1b6":"8968",a94703ab:"9048","898514b1":"9067","5456ea70":"9126","70017cc4":"9216",e273c56f:"9328","97e78c4d":"9416","0cc63ed5":"9466","982b0e27":"9488",fb05866b:"9496","7b5a7d49":"9586","482e887d":"9605","5e95c892":"9647","00c16cfb":"9662","0d72703a":"9725",ade40147:"9841","36994c47":"9858","5259e0d5":"9886"}[e]||e,r.p+r.u(e)},(()=>{var e={5354:0,1869:0};r.f.j=(a,c)=>{var f=r.o(e,a)?e[a]:void 0;if(0!==f)if(f)c.push(f[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var b=new Promise(((c,b)=>f=e[a]=[c,b]));c.push(f[2]=b);var d=r.p+r.u(a),t=new Error;r.l(d,(c=>{if(r.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var b=c&&("load"===c.type?"missing":c.type),d=c&&c.target&&c.target.src;t.message="Loading chunk "+a+" failed.\n("+b+": "+d+")",t.name="ChunkLoadError",t.type=b,t.request=d,f[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,c)=>{var f,b,d=c[0],t=c[1],o=c[2],n=0;if(d.some((a=>0!==e[a]))){for(f in t)r.o(t,f)&&(r.m[f]=t[f]);if(o)var i=o(r)}for(a&&a(c);n<d.length;n++)b=d[n],r.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return r.O(i)},c=self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();