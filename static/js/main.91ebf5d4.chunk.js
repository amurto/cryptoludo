(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{166:function(e,a,t){e.exports=t(433)},171:function(e,a,t){},182:function(e,a){},191:function(e,a){},209:function(e,a){},211:function(e,a){},235:function(e,a){},257:function(e,a){},259:function(e,a){},268:function(e,a){},270:function(e,a){},295:function(e,a){},297:function(e,a){},298:function(e,a){},304:function(e,a){},306:function(e,a){},324:function(e,a){},327:function(e,a){},343:function(e,a){},346:function(e,a){},351:function(e,a){},366:function(e,a){},367:function(e,a){},369:function(e,a){},424:function(e,a,t){},425:function(e,a,t){},426:function(e,a,t){},427:function(e,a,t){},428:function(e,a,t){},429:function(e,a,t){},431:function(e,a,t){},432:function(e,a,t){},433:function(e,a,t){"use strict";t.r(a);var n,f=t(0),c=t.n(f),l=t(22),r=t.n(l),i=(t(171),t(83)),s=t(14),o=t(24),u=Object(f.createContext)({gameState:{},setGameData:function(e){},options:{isGame:!1,playersLength:0,throw:0,chance:0,thrown:!1,winners:[],gameCondition:[],isChain:!1,blockLoading:!1},setGameOptions:function(e){},contract:null,setEthContract:function(e){}}),m=t(6),d=t.n(m),b=t(17),v=t(82),E=t.n(v);"undefined"!==typeof window.ethereum?(n=new E.a(window.ethereum),"undefined"!==typeof window.ethereum.autoRefreshOnNetworkChange&&(window.ethereum.autoRefreshOnNetworkChange=!1),window.ethereum.on("chainChanged",(function(){document.location.reload()})),window.ethereum.enable().then((function(e){})).catch((function(e){console.error(e),alert("Sorry, this application requires user approval to function correctly.")}))):n=new E.a(window.web3.currentProvider);var p=n,h=t(23),w=[{inputs:[{internalType:"uint256",name:"_playersLength",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{constant:!0,inputs:[],name:"isGame",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"manager",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256[16]",name:"game",type:"uint256[16]"},{internalType:"uint256",name:"color",type:"uint256"},{internalType:"uint256",name:"j",type:"uint256"},{internalType:"uint256",name:"diceThrow",type:"uint256"}],name:"moveMarker",outputs:[{internalType:"uint256[16]",name:"",type:"uint256[16]"},{internalType:"bool",name:"",type:"bool"},{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"playersLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"random",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"safeMap",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}],y="60806040526040518060800160405280600060ff168152602001600d60ff168152602001601a60ff168152602001602760ff16815250600290600462000047929190620002c9565b506000600660006101000a81548160ff021916908315150217905550604051806103800160405280600161ffff168152602001600961ffff168152602001600e61ffff168152602001601661ffff168152602001601b61ffff168152602001602361ffff168152602001602861ffff168152602001603061ffff1681526020016103e961ffff1681526020016103ea61ffff1681526020016103eb61ffff1681526020016103ec61ffff1681526020016103ed61ffff1681526020016107d161ffff1681526020016107d261ffff1681526020016107d361ffff1681526020016107d461ffff1681526020016107d561ffff168152602001610bb961ffff168152602001610bba61ffff168152602001610bbb61ffff168152602001610bbc61ffff168152602001610bbd61ffff168152602001610fa161ffff168152602001610fa261ffff168152602001610fa361ffff168152602001610fa461ffff168152602001610fa561ffff16815250600790601c620001c792919062000313565b50348015620001d557600080fd5b5060405162000ef538038062000ef583398181016040526020811015620001fb57600080fd5b8101908080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806001819055506001600660006101000a81548160ff02191690831515021790555060008090505b600780549050811015620002c157600160086000600784815481106200029657fe5b9060005260206000200154815260200190815260200160002081905550808060010191505062000274565b505062000393565b826004810192821562000300579160200282015b82811115620002ff578251829060ff16905591602001919060010190620002dd565b5b5090506200030f91906200036b565b5090565b82805482825590600052602060002090810192821562000358579160200282015b8281111562000357578251829061ffff1690559160200191906001019062000334565b5b5090506200036791906200036b565b5090565b6200039091905b808211156200038c57600081600090555060010162000372565b5090565b90565b610b5280620003a36000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631167fa4014610067578063481c6a75146100a95780635ec01e4d146100f357806397f287cb14610111578063be0899f7146101e8578063d2079c0f1461020a575b600080fd5b6100936004803603602081101561007d57600080fd5b8101908080359060200190929190505050610228565b6040518082815260200191505060405180910390f35b6100b1610240565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100fb610265565b6040518082815260200191505060405180910390f35b610194600480360361026081101561012857600080fd5b810190808061020001906010806020026040519081016040528092919082601060200280828437600081840152601f19601f82011690508083019250505050505091929192908035906020019092919080359060200190929190803590602001909291905050506102b3565b6040518084601060200280838360005b838110156101bf5780820151818401526020810190506101a4565b505050509050018315151515815260200182151515158152602001935050505060405180910390f35b6101f061052a565b604051808215151515815260200191505060405180910390f35b61021261053d565b6040518082815260200191505060405180910390f35b60086020528060005260406000206000915090505481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160064443426040516020018084815260200183815260200182815260200193505050506040516020818303038152906040528051906020012060001c816102ac57fe5b0601905090565b6102bb610afa565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610380576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f4f6e6c79206d616e616765722063616e2063616c6c20746869732e000000000081525060200191505060405180910390fd5b60011515600660009054906101000a900460ff16151514610409576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f47616d6520686173206e6f7420737461727465642e000000000000000000000081525060200191505060405180910390fd5b610411610afa565b87905061041d81610543565b9050600081876010811061042d57fe5b602002015190506000806000610443848a610776565b92509250925082858b6010811061045657fe5b602002018181525050610468856108cd565b9450848a6010811061047657fe5b6020020151935060016008600086815260200190815260200160002054146105045760008090505b60046001540281101561050257600481816104b557fe5b048c141580156104d45750848682601081106104cd57fe5b6020020151145b156104f5576001925060008682601081106104eb57fe5b6020020181815250505b808060010191505061049e565b505b600689141561051257600191505b84828297509750975050505050509450945094915050565b600660009054906101000a900460ff1681565b60015481565b61054b610afa565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461060d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f4f6e6c79206d616e616765722063616e2063616c6c20746869732e000000000081525060200191505060405180910390fd5b610615610afa565b60008090505b60046001540281101561076c5760006004828161063457fe5b049050603485836010811061064557fe5b60200201511115610689576103e885836010811061065f57fe5b60200201518161066b57fe5b0660330183836010811061067b57fe5b60200201818152505061075e565b600085836010811061069757fe5b602002015114156106be5760008383601081106106b057fe5b60200201818152505061075d565b6001600282600481106106cd57fe5b0154018583601081106106dc57fe5b6020020151101561072557600281600481106106f457fe5b015485836010811061070257fe5b60200201516034010383836010811061071757fe5b60200201818152505061075c565b6002816004811061073257fe5b015485836010811061074057fe5b60200201510383836010811061075257fe5b6020020181815250505b5b5b50808060010191505061061b565b5080915050919050565b60008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461083d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f4f6e6c79206d616e616765722063616e2063616c6c20746869732e000000000081525060200191505060405180910390fd5b6000806000905060008090506000881480156108595750600687145b1561086757600192506108ba565b6000881415610881576000925060019050600191506108b9565b60008789019050603981111561089d57889350600191506108b7565b60398114156108b257809350600191506108b6565b8093505b5b505b5b8281839550955095505050509250925092565b6108d5610afa565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610997576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f4f6e6c79206d616e616765722063616e2063616c6c20746869732e000000000081525060200191505060405180910390fd5b61099f610afa565b60008090505b600460015402811015610af0576000600482816109be57fe5b04905060348583601081106109cf57fe5b60200201511115610a1b57600160328684601081106109ea57fe5b6020020151816109f657fe5b066103e860018401020103838360108110610a0d57fe5b602002018181525050610ae2565b6000858360108110610a2957fe5b60200201511415610a50576000838360108110610a4257fe5b602002018181525050610ae1565b60006034868460108110610a6057fe5b602002015160028460048110610a7257fe5b01540181610a7c57fe5b061415610a9f576034838360108110610a9157fe5b602002018181525050610ae0565b6034858360108110610aad57fe5b602002015160028360048110610abf57fe5b01540181610ac957fe5b06838360108110610ad657fe5b6020020181815250505b5b5b5080806001019150506109a5565b5080915050919050565b60405180610200016040528060109060208202803883398082019150509050509056fea265627a7a72315820bb3a18e004a51220ca5d83a30f3fc02e0d262d2791065f308d4f2435bac1543d64736f6c63430005110032",N=["R","G","Y","B"],g=function(e,a){var t={};return e.map((function(e,n){return n<4*a&&(t[C[n]]=0===e?"".concat(N[Math.floor(n/4)],"0").concat(n%4+1):e>1e3?"".concat(N[Math.floor(n/4)]).concat(e%1e3):"".concat(e)),!0})),t},O=[0,13,26,39],G=function(e){return null===e||void 0===e?void 0:e.map((function(e,a){var t=Math.floor(a/4);if(e>51)return 1e3*(t+1)+e%50-1;if(0===e)return 0;var n=(O[t]+e)%52;return 0===n?52:n}))},x={r0:"R01",r1:"R02",r2:"R03",r3:"R04",g0:"G01",g1:"G02",g2:"G03",g3:"G04",y0:"Y01",y1:"Y02",y2:"Y03",y3:"Y04",b0:"B01",b1:"B02",b2:"B03",b3:"B04"},C=["r0","r1","r2","r3","g0","g1","g2","g3","y0","y1","y2","y3","b0","b1","b2","b3"],k=[1,9,14,22,27,35,40,48,1001,1002,1003,1004,1005,2001,2002,2003,2004,2005,3001,3002,3003,3004,3005,4001,4002,4003,4004,4005],j=function(e,a,t,n,f,c){var l=e,r=a,i=t,s=f,o=c,u=null;return function e(a){u||(u=a),a-u<=l&&(i.style[n]=r(a-u,0,l,s,o),window.requestAnimationFrame(e))}},R=function(e,a,t,n,f){return n+(e-a)/(t-a)*(f-n)},B=function(e,a,t,n,f){var c=R(e,a,t,n,f),l=7*Math.random()/10;if(Boolean(c)===!!c||c>l)return c;var r=Math.abs(c*Math.sin((c-.13)*(.2*Math.PI/.4)));return r>0?r:-1*r},M=["R1","R2","R3","R4","R5","R6","G1","G2","G3","G4","R5","R6","Y1","Y2","Y3","Y4","R5","R6","B1","B2","B3","B4","R5","R6"],Y=["red","green","yellow","blue"],L=function(){var e=Object(h.d)(),a=Object(f.useContext)(u),t=a.gameState,n=a.setGameData,c=a.options,l=a.setGameOptions,r=a.contract,i=a.setEthContract,s=Object(f.useCallback)(function(){var a=Object(b.a)(d.a.mark((function a(t){var f,r;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!c.isChain){a.next=20;break}return l({blockLoading:!0}),e.show("Deploying the contract and setting up operations. Please wait a few seconds."),a.prev=3,a.next=6,p.eth.getAccounts();case 6:return f=a.sent,a.t0=i,a.next=10,new p.eth.Contract(w,"0xB10466e7D2fa1f46ACC89A0866f47C7f57cdb184").deploy({data:"0x"+y,arguments:[t]}).send({from:f[0],gas:3e6});case 10:a.t1=a.sent,(0,a.t0)(a.t1),e.show("The contract has been successfully deployed. Please enjoy the game."),a.next=20;break;case 15:a.prev=15,a.t2=a.catch(3),e.show("You need to have MetaMask installed and Rinkeby test network to play this game on chain."),l({isChain:!1,blockLoading:!1}),i(null);case 20:r={},Object.entries(x).slice(0,4*t).map((function(e){return r[e[0]]=e[1],!0})),n(r),l({isGame:!0,playersLength:t,gameCondition:new Array(16).fill(0),blockLoading:!1});case 24:case"end":return a.stop()}}),a,null,[[3,15]])})));return function(e){return a.apply(this,arguments)}}(),[n,c,l,i,e]),o=Object(f.useCallback)((function(e,a,t,n,f,r){var i;for(i=e?t:(t+1)%n;c.winners.includes(i);)i=(i+1)%n;r?(f.push(t),l({thrown:a,chance:i,winners:f})):l({thrown:a,chance:i})}),[c,l]),m=Object(f.useCallback)((function(e){l({throw:e});var a=c.chance,n=Object.values(x);if(4===Object.values(t).slice(4*a,4*a+4).map((function(a){if(n.includes(a)&&6!==e)return 0;if(M.includes(a)){var t=parseInt(a.charAt(1));if(6===t||t+e>6)return 0}return 1})).filter((function(e){return 0===e})).length){for(var f=(c.chance+1)%c.playersLength;c.winners.includes(f);)f=(f+1)%c.playersLength;l({chance:f,thrown:!1})}}),[t,c,l]),v=function(e,a){var t,n=!1,f=!1;if(0===e&&6===a)t=1;else if(0===e)t=0,f=!0,n=!0;else{var c=e+a;c>57?(t=e,f=!0):57===c?(t=c,f=!0):t=c}return{newVal:t,ischance:f,isthrown:n}};return{startGame:s,moveValidator:m,moveMarker:Object(f.useCallback)(function(){var e=Object(b.a)(d.a.mark((function e(a,t){var f,i,s,u,m,b,E,h,w,y,x,j,R,B,M,Y,L;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f=c.throw,i=C.indexOf(a),s=c.gameCondition,u=new Array(16).fill(0),m=!1,b=!1,!c.isChain){e.next=18;break}return e.next=9,p.eth.getAccounts();case 9:return E=e.sent,e.next=12,r.methods.moveMarker(s,t,i,f).call({from:E[0]});case 12:h=e.sent,u=h[0].map((function(e){return parseInt(e)})),m=h[1],b=h[2],e.next=28;break;case 18:if(u=null===(d=s)||void 0===d?void 0:d.map((function(e,a){var t=Math.floor(a/4);return e>52?51+e%1e3:0===e?0:e-O[t]<1?e-O[t]+52:e-O[t]})),w=u[i],y=v(w,f),x=y.newVal,j=y.ischance,R=y.isthrown,m=j,b=R,u[i]=x,u=G(u),w=u[i],!k.includes(w))for(B=0;B<4*c.playersLength;B++)t!==Math.floor(B/4)&&u[B]===w&&(m=!0,u[B]=0);6===f&&(m=!0);case 28:l({gameCondition:u}),M=g(u,c.playersLength),Y=Object.values(M).slice(4*t,4*t+4),L=0,Y.map((function(e){return e==="".concat(N[t],"6")&&L++})),n(M),o(m,b,c.chance,c.playersLength,c.winners,4===L);case 35:case"end":return e.stop()}var d}),e)})));return function(a,t){return e.apply(this,arguments)}}(),[n,c,l,r,o]),endGame:Object(f.useCallback)((function(){l({isGame:!1,playersLength:0,throw:0,chance:0,thrown:!1,winners:[],gameCondition:null}),n({})}),[n,c,l])}},T=(t(424),function(e){var a=e.pos,t=e.size,n=e.tileMap,l=L().moveMarker,r={r:0,g:1,y:2,b:3},i=Object(f.useRef)(null),s=Object(f.useContext)(u),o=s.gameState,m=s.options;Object(f.useEffect)((function(){var e,f;if(Object.keys(o).length>0){var c=(e=Object.values(o),f=o[a],e.filter((function(e){return e===f})).length);c=c>1?(.1*Math.random()-.05)/2:0;var l=n[o[a]];null!==i.current&&(i.current.style.left="".concat(t*(l[0]+c),"px"),i.current.style.top="".concat(t*(l[1]+c),"px"))}}),[o,a,t,n]);return c.a.createElement("div",{className:"marker-".concat(a.charAt(0)),ref:i,onClick:m.thrown&&r[a.charAt(0)]===m.chance?function(){l(a,r[a.charAt(0)])}:void 0},c.a.createElement("div",{className:"pin"}),c.a.createElement("div",{className:"shadow"}))}),S=t(19),A=function(){return c.a.createElement("div",{className:"star"},c.a.createElement(S.e,null))},P=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container-row1 clearfix"},c.a.createElement("div",{className:"row1-col1 green"},c.a.createElement("div",{className:"row1-col1-child clearfix white"},c.a.createElement("div",{className:"green"}),c.a.createElement("div",{className:"green"}),c.a.createElement("div",{className:"green"}),c.a.createElement("div",{className:"green"}))),c.a.createElement("div",{className:"row1-col2 clearfix"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",{className:"yellow"}),c.a.createElement("div",{className:"yellow"}),c.a.createElement("div",null,c.a.createElement(A,null)),c.a.createElement("div",{className:"yellow"}),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",{className:"yellow"}),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",{className:"yellow"}),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",{className:"yellow"}),c.a.createElement("div",null)),c.a.createElement("div",{className:"row1-col3 yellow"},c.a.createElement("div",{className:"row1-col3-child clearfix white"},c.a.createElement("div",{className:"yellow"}),c.a.createElement("div",{className:"yellow"}),c.a.createElement("div",{className:"yellow"}),c.a.createElement("div",{className:"yellow"})))),c.a.createElement("div",{className:"container-row2 clearfix"},c.a.createElement("div",{className:"row2-col1 clearfix"},c.a.createElement("div",null),c.a.createElement("div",{className:"green"}),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",{className:"green"}),c.a.createElement("div",{className:"green"}),c.a.createElement("div",{className:"green"}),c.a.createElement("div",{className:"green"}),c.a.createElement("div",{className:"green"}),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null,c.a.createElement(A,null)),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)),c.a.createElement("div",{className:"row2-col2"},c.a.createElement("div",{className:"contain-triangles"},c.a.createElement("div",{className:"triangle-right"}),c.a.createElement("div",{className:"triangle-up"}),c.a.createElement("div",{className:"triangle-left"}),c.a.createElement("div",{className:"triangle-down"}))),c.a.createElement("div",{className:"row2-col3 clearfix"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null,c.a.createElement(A,null)),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",{className:"blue"}),c.a.createElement("div",{className:"blue"}),c.a.createElement("div",{className:"blue"}),c.a.createElement("div",{className:"blue"}),c.a.createElement("div",{className:"blue"}),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",{className:"blue"}),c.a.createElement("div",null))),c.a.createElement("div",{className:"container-row3 clearfix"},c.a.createElement("div",{className:"row3-col1 red"},c.a.createElement("div",{className:"row3-col1-child clearfix white"},c.a.createElement("div",{className:"red"}),c.a.createElement("div",{className:"red"}),c.a.createElement("div",{className:"red"}),c.a.createElement("div",{className:"red"}))),c.a.createElement("div",{className:"row3-col2 clearfix"},c.a.createElement("div",null),c.a.createElement("div",{className:"red"}),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",{className:"red"}),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",{className:"red"}),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",{className:"red"}),c.a.createElement("div",null,c.a.createElement(A,null)),c.a.createElement("div",{className:"red"}),c.a.createElement("div",{className:"red"}),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)),c.a.createElement("div",{className:"row3-col3 blue"},c.a.createElement("div",{className:"row3-col3-child clearfix white"},c.a.createElement("div",{className:"blue"}),c.a.createElement("div",{className:"blue"}),c.a.createElement("div",{className:"blue"}),c.a.createElement("div",{className:"blue"})))))},F={1:[.4,.82],2:[.4,.76],3:[.4,.69],4:[.4,.62],5:[.4,.55],6:[.33,.49],7:[.27,.49],8:[.2,.49],9:[.135,.49],10:[.065,.49],11:[.003,.49],12:[.003,.42],13:[.003,.35],14:[.065,.35],15:[.135,.35],16:[.2,.35],17:[.27,.35],18:[.33,.35],19:[.4,.28],20:[.4,.22],21:[.4,.16],22:[.4,.085],23:[.4,.015],24:[.4,-.05],25:[.465,-.05],26:[.53,-.05],27:[.53,.015],28:[.53,.085],29:[.53,.16],30:[.53,.22],31:[.53,.28],32:[.6,.35],33:[.665,.35],34:[.735,.35],35:[.8,.35],36:[.865,.35],37:[.935,.35],38:[.935,.42],39:[.935,.49],40:[.865,.49],41:[.8,.49],42:[.735,.49],43:[.665,.49],44:[.6,.49],45:[.53,.55],46:[.53,.62],47:[.53,.69],48:[.53,.76],49:[.53,.82],50:[.53,.885],51:[.465,.885],52:[.4,.885],R1:[.465,.82],R2:[.465,.76],R3:[.465,.69],R4:[.465,.62],R5:[.465,.55],R6:[.465,.49],G1:[.065,.42],G2:[.135,.42],G3:[.2,.42],G4:[.27,.42],G5:[.33,.42],G6:[.4,.42],Y1:[.465,.015],Y2:[.465,.085],Y3:[.465,.16],Y4:[.465,.22],Y5:[.465,.28],Y6:[.465,.35],B1:[.865,.42],B2:[.8,.42],B3:[.735,.42],B4:[.665,.42],B5:[.6,.42],B6:[.53,.42],R01:[.1,.8],R02:[.1,.66],R03:[.24,.66],R04:[.24,.8],G01:[.1,.2],G02:[.1,.06],G03:[.24,.06],G04:[.24,.2],Y01:[.7,.2],Y02:[.7,.06],Y03:[.84,.06],Y04:[.84,.2],B01:[.7,.8],B02:[.7,.66],B03:[.84,.66],B04:[.84,.8]},I={1:[.395,.81],2:[.395,.74],3:[.395,.67],4:[.395,.61],5:[.395,.54],6:[.33,.48],7:[.26,.48],8:[.19,.48],9:[.125,.48],10:[.065,.48],11:[.003,.48],12:[.003,.41],13:[.003,.34],14:[.065,.34],15:[.125,.34],16:[.19,.34],17:[.26,.34],18:[.33,.34],19:[.395,.28],20:[.395,.21],21:[.395,.14],22:[.395,.08],23:[.395,.01],24:[.395,-.065],25:[.46,-.065],26:[.525,-.065],27:[.525,.01],28:[.525,.08],29:[.525,.14],30:[.525,.21],31:[.525,.28],32:[.595,.34],33:[.66,.34],34:[.727,.34],35:[.79,.34],36:[.86,.34],37:[.93,.34],38:[.93,.41],39:[.93,.48],40:[.86,.48],41:[.79,.48],42:[.727,.48],43:[.66,.48],44:[.595,.48],45:[.525,.54],46:[.525,.61],47:[.525,.67],48:[.525,.74],49:[.525,.81],50:[.525,.875],51:[.46,.875],52:[.395,.875],R1:[.46,.81],R2:[.46,.74],R3:[.46,.67],R4:[.46,.61],R5:[.46,.54],R6:[.46,.48],G1:[.065,.41],G2:[.125,.41],G3:[.19,.41],G4:[.26,.41],G5:[.33,.41],G6:[.395,.41],Y1:[.46,.01],Y2:[.46,.08],Y3:[.46,.14],Y4:[.46,.21],Y5:[.46,.28],Y6:[.46,.34],B1:[.86,.41],B2:[.79,.41],B3:[.727,.41],B4:[.66,.41],B5:[.595,.41],B6:[.53,.41],R01:[.09,.79],R02:[.09,.65],R03:[.23,.65],R04:[.23,.79],G01:[.09,.19],G02:[.09,.05],G03:[.23,.05],G04:[.23,.19],Y01:[.69,.19],Y02:[.69,.05],Y03:[.83,.05],Y04:[.83,.19],B01:[.69,.79],B02:[.69,.65],B03:[.83,.65],B04:[.83,.79]},q={1:[.45,.92],2:[.45,.84],3:[.45,.76],4:[.45,.68],5:[.45,.61],6:[.38,.53],7:[.3,.53],8:[.22,.53],9:[.14,.53],10:[.065,.53],11:[0,.53],12:[0,.45],13:[0,.38],14:[.065,.38],15:[.14,.38],16:[.22,.38],17:[.3,.38],18:[.38,.38],19:[.45,.3],20:[.45,.22],21:[.45,.15],22:[.45,.07],23:[.45,-.001],24:[.45,-.09],25:[.53,-.09],26:[.61,-.09],27:[.61,.001],28:[.61,.07],29:[.61,.15],30:[.61,.22],31:[.61,.3],32:[.69,.38],33:[.76,.38],34:[.84,.38],35:[.92,.38],36:[.995,.38],37:[1.07,.38],38:[1.07,.45],39:[1.07,.53],40:[.995,.53],41:[.92,.53],42:[.84,.53],43:[.76,.53],44:[.69,.53],45:[.61,.61],46:[.61,.68],47:[.61,.76],48:[.61,.84],49:[.61,.92],50:[.61,.995],51:[.53,.995],52:[.45,.995],R1:[.53,.92],R2:[.53,.84],R3:[.53,.76],R4:[.53,.69],R5:[.53,.61],R6:[.53,.53],G1:[.065,.45],G2:[.14,.45],G3:[.22,.45],G4:[.3,.45],G5:[.38,.45],G6:[.45,.45],Y1:[.53,.001],Y2:[.53,.07],Y3:[.53,.15],Y4:[.53,.22],Y5:[.53,.3],Y6:[.53,.38],B1:[.995,.45],B2:[.92,.45],B3:[.84,.45],B4:[.76,.45],B5:[.69,.45],B6:[.61,.45],R01:[.1,.9],R02:[.1,.74],R03:[.26,.74],R04:[.26,.9],G01:[.1,.2],G02:[.1,.06],G03:[.26,.06],G04:[.26,.2],Y01:[.8,.2],Y02:[.8,.06],Y03:[.96,.06],Y04:[.96,.2],B01:[.8,.9],B02:[.8,.74],B03:[.96,.74],B04:[.96,.9]},z=(t(425),function(){var e=function(){var e=Object(f.useState)((function(){return window.innerWidth>600?500:window.innerWidth>460?400:300})),a=Object(s.a)(e,2),t=a[0],n=a[1],c=Object(f.useState)((function(){return window.innerWidth>600?F:window.innerWidth>460?I:q})),l=Object(s.a)(c,2),r=l[0],i=l[1];return Object(f.useEffect)((function(){function e(){window.innerWidth>600?(n(500),i(F)):window.innerWidth>460?(n(400),i(I)):window.innerWidth<=460&&(n(300),i(q))}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),{size:t,tileMap:r}}(),a=e.size,t=e.tileMap,n=Object(f.useRef)(null),l=Object(f.useContext)(u).options;return c.a.createElement("div",{className:"container card",ref:n},l.isGame&&C.slice(0,4*l.playersLength).map((function(e){return c.a.createElement(T,{key:e,pos:e,size:a,tileMap:t})})),c.a.createElement(P,null))}),W=(t(426),function(){var e=L().moveValidator,a=Object(f.useState)(""),t=Object(s.a)(a,2),n=t[0],l=t[1],r=Object(f.useContext)(u),i=r.options,m=r.setGameOptions,v=r.contract,E=[{1:["cc"]},{2:["tl","br"]},{3:["tl","cc","br"]},{4:["tl","tr","bl","br"]},{5:["tl","tr","cc","bl","br"]},{6:["tl","tr","cl","cr","bl","br"]}],p=function(){var e=Object(b.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E[a-1][a].forEach((function(e){var a;null===(a=document.getElementById("".concat(e)))||void 0===a||a.classList.remove("show")}));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),h=function(){var e=Object(b.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l((function(e){return"spin-die"===e?e:e+"spin-die"})),E[a-1][a].forEach((function(e){var a;null===(a=document.getElementById("".concat(e)))||void 0===a||a.classList.add("show")}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),w=function(){var a=Object(b.a)(d.a.mark((function a(){var t,n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t=0,!i.isChain){a.next=8;break}return a.next=4,v.methods.random().call();case 4:n=a.sent,t=parseInt(n),a.next=9;break;case 8:t=Math.floor(6*Math.random()+1);case 9:return e(t),a.abrupt("return",t);case 11:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),y=function(){var e=Object(b.a)(d.a.mark((function e(a){var t,n,f;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=1,n=1,f=setInterval(function(){var e=Object(b.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t>=a)){e.next=9;break}return clearInterval(f),e.next=4,w();case 4:c=e.sent,h(c),l((function(e){return e.replace("spin-die","")})),e.next=14;break;case 9:h(n),setTimeout(p,80,n),t+=1,(n+=1)>6&&(n=1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),125);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.thrown){e.next=4;break}return m({thrown:!0}),e.next=4,y(Math.floor(30*Math.random()+15));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,i.isGame&&c.a.createElement(o.Row,{gutter:0,className:"dice-container"},c.a.createElement(o.Col,{xs:i.thrown?12:6},c.a.createElement("div",{id:"dice-body",className:"".concat(n)},c.a.createElement("div",{id:"tl",className:"dot"}),c.a.createElement("div",{id:"tc",className:"dot"}),c.a.createElement("div",{id:"tr",className:"dot"}),c.a.createElement("div",{id:"cl",className:"dot"}),c.a.createElement("div",{id:"cc",className:"dot show"}),c.a.createElement("div",{id:"cr",className:"dot"}),c.a.createElement("div",{id:"bl",className:"dot"}),c.a.createElement("div",{id:"bc",className:"dot"}),c.a.createElement("div",{id:"br",className:"dot"}))),!i.thrown&&c.a.createElement(o.Col,{xs:6},c.a.createElement("div",null,c.a.createElement("button",{className:"roll-btn",onClick:N},c.a.createElement(S.b,null))))))}),D=(t(427),function(){var e=Object(f.useContext)(u).options,a=L().startGame,t=Object(f.useState)("show"),n=Object(s.a)(t,2),l=n[0],r=n[1],i=function(e){a(parseInt(e.target.id))};return c.a.createElement(c.a.Fragment,null,!e.isGame&&!e.blockLoading&&c.a.createElement("div",{className:"cmenu"},c.a.createElement("div",{className:"relative-menu"},c.a.createElement("div",{className:"radmenu"},c.a.createElement("button",{className:l,onClick:function(){return r("selected"===l?"show":"selected"),!1}},c.a.createElement(S.d,{className:"fa-play"})),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("button",{id:"4",onClick:i},"4 Player")),c.a.createElement("li",null,c.a.createElement("button",{id:"3",onClick:i},"3 Player")),c.a.createElement("li",null,c.a.createElement("button",{id:"2",onClick:i},"2 Player")))))))}),U=(t(428),function(){return Object(f.useEffect)((function(){for(var e,a=document.querySelectorAll(".animateMe"),t=[],n=0;n<a.length;n++)t.push(j(4e3,B,a[n],"opacity",0,1));t.map((function(e){return window.requestAnimationFrame(e)}));var f=function(){a.forEach((function(e){e.style.opacity="0"}));for(var e=[],t=0;t<a.length;t++)e.push(j(4e3,B,a[t],"opacity",0,1));e.map((function(e){return window.requestAnimationFrame(e)}))};return null===(e=document.querySelector(".sign"))||void 0===e||e.addEventListener("click",f),function(){var e;null===(e=document.querySelector(".sign"))||void 0===e||e.removeEventListener("click",f)}}),[]),c.a.createElement("div",{className:"sign"},c.a.createElement("span",{className:"animateMe"},"C"),c.a.createElement("span",{className:"animateMe"},"R"),c.a.createElement("span",{className:"animateMe"},"Y"),c.a.createElement("span",{className:"animateMe"},"P"),c.a.createElement("span",{className:"animateMe"},"T"),c.a.createElement("span",{className:"animateMe"},"O"),c.a.createElement("span",{className:"animateMe"},"L"),c.a.createElement("span",{className:"animateMe"},"U"),c.a.createElement("span",{className:"animateMe"},"D"),c.a.createElement("span",{className:"animateMe"},"O"))}),V=(t(429),function(){var e=Object(f.useContext)(u).options;return c.a.createElement(c.a.Fragment,null,e.isGame&&c.a.createElement("div",{className:"section alert-section"},e.winners.map((function(e,a){return c.a.createElement("div",{key:a,className:"alert alert-win"},c.a.createElement("div",{className:"alert-container"},c.a.createElement("div",{className:"alert-icon"},c.a.createElement(S.a,{className:"prize-".concat(a+1)})),"Player ",Y[e].toUpperCase()))})),c.a.createElement("div",{className:"alert alert-".concat(Y[e.chance])},c.a.createElement("div",{className:"alert-container"},c.a.createElement("div",{className:"alert-icon"},c.a.createElement(S.c,null)),c.a.createElement("b",{className:"alert-info"},"Player Chance")," Player"," ",Y[e.chance].toUpperCase()," make your move!"))))}),J=(t(430),t(431),function(){var e=Object(f.useContext)(u).options,a=L().endGame;return c.a.createElement(c.a.Fragment,null,e.isGame&&c.a.createElement("div",{className:"end-wrapper"},c.a.createElement("button",{className:"end-btn cancel",onClick:a},"End Game")))}),_=(t(432),function(){var e=Object(f.useContext)(u),a=e.options,t=e.setGameOptions;return c.a.createElement(c.a.Fragment,null,!a.isGame&&!a.blockLoading&&c.a.createElement("div",{className:"toggle-center"},c.a.createElement("div",{className:"toggle-container"},c.a.createElement("div",{className:"toggle ".concat(a.isChain&&"toggle-on"),id:"switch",onClick:function(){t({isChain:!a.isChain})}},c.a.createElement("div",{className:"toggle-text-off"},"OFF"),c.a.createElement("div",{className:"glow-comp"}),c.a.createElement("div",{className:"toggle-button"}),c.a.createElement("div",{className:"toggle-text-on"},"ON")),c.a.createElement("div",{className:"chain-text"},"Use Blockchain?"))))}),H=function(){var e=Object(h.d)(),a=Object(f.useState)({}),t=Object(s.a)(a,2),n=t[0],l=t[1],r=Object(f.useCallback)((function(e){l(e)}),[]),m=Object(f.useState)({isGame:!1,playersLength:0,throw:0,chance:0,thrown:!1,winners:[],gameCondition:[],isChain:!1,blockLoading:!1}),d=Object(s.a)(m,2),b=d[0],v=d[1],E=Object(f.useCallback)((function(e){v((function(a){return Object(i.a)(Object(i.a)({},a),e)}))}),[]),p=Object(f.useState)(),w=Object(s.a)(p,2),y=w[0],N=w[1],g=Object(f.useCallback)((function(e){N(e)}),[]);return Object(f.useEffect)((function(){b.isGame&&b.winners.length===b.playersLength-1&&(e.show("The game has ended. Player ".concat(Y[b.winners[0]]," is the winner")),E({isGame:!1}))}),[b,E,e]),c.a.createElement(u.Provider,{value:{gameState:n,setGameData:r,options:b,setGameOptions:E,contract:y,setEthContract:g}},c.a.createElement(o.Row,{gutter:0},c.a.createElement(o.Col,{xs:12,sm:12,md:6,lg:6,xl:6},c.a.createElement(U,null),c.a.createElement(_,null),c.a.createElement(D,null),c.a.createElement(J,null),c.a.createElement(V,null),c.a.createElement(W,null)),c.a.createElement(o.Col,{xs:12,sm:12,md:6,lg:6,xl:6},c.a.createElement(z,null))))},K=t(165),Q={position:h.b.BOTTOM_CENTER,timeout:5e3,offset:"30px",transition:h.c.SCALE};r.a.render(c.a.createElement(h.a,Object.assign({template:K.a},Q),c.a.createElement(H,null)),document.getElementById("root"))}},[[166,1,2]]]);
//# sourceMappingURL=main.91ebf5d4.chunk.js.map