import{d as y,_ as g,r as c,o as i,c as o,a as e,h as S,i as $,t as u,g as C,w as d,v as h,n as p,j as r,f as a,l as k}from"./index.ee2f944b.js";import{e as m}from"./elliptic.ff7c069c.js";import{_ as V}from"./CopyOnClick.8519784b.js";import"./_commonjsHelpers.dffb1198.js";const P=new m.ec("secp256k1"),E=y({name:"SignatureCreate",components:{CopyOnClick:V},props:{secretKey:{type:String,required:!0},input:{type:String,required:!0}},data(){return{signature:""}},watch:{input(){this.updateSignature()}},created(){this.updateSignature()},methods:{updateSignature(){const t=P.keyFromPrivate(this.secretKey);this.signature=t.sign(this.input).toDER().map(s=>("0"+(s&255).toString(16)).slice(-2)).join("")}}}),T={class:"box"},A=e("p",{class:"title is-4 mb-1"},"Signature Created",-1),B={class:"mb-2"},F={class:"word-wrap"},D=C('<p> This signature is created by signing the input using the secret / private key and can only be verified with the corresponding public key. </p><details class="content mt-4"><summary style="cursor:pointer;">More info</summary><ul><li>Signing is something build on Asymmetric Cryptography</li><li> of course it is hash first then encrypt!! Why? <br> because if you hash the encrypted content, it cannot be decrypted anymore because hash is a one way function, which means that it is not encryption anymore. <br> signing is u hash ur file first to get that fix length, then you sign / encrypt it <br> Process of signing some data involves, first hashing the data to get a fixed length output to sign, so that all signatures have the same length. Then encrypting the data with your secret key, so that anyone can verify with your public key to know that it is you who really signed it </li><li> A signature may look like a Hash function&#39;s output but it is different. Because a hash function is a one-way function and so its output cannot be reversed back into its input! </li><li> The digital signature algorithm used here is <code>ECDSA - Secp256k1</code>, which is the algorithm (elliptic curve) used by Bitcoin and Ethereum to implement its public key cryptography </li></ul></details>',2);function I(t,s,_,f,b,v){const l=c("CopyOnClick");return i(),o("div",T,[A,e("div",B,[S(l,{showIcon:!0,textToCopy:t.signature},{default:$(()=>[e("div",F,[e("code",null,u(t.signature),1)])]),_:1},8,["textToCopy"])]),D])}var N=g(E,[["render",I]]);const q=new m.ec("secp256k1"),O=y({name:"SignatureVerify",props:{publicKey:{type:String,required:!0},input:{type:String,required:!0}},data(){return{signature:"",isSignatureValid:!1}},watch:{input(){this.reVerify()},signature(){this.reVerify()}},methods:{reVerify(){try{const t=q.keyFromPublic(this.publicKey,"hex");this.isSignatureValid=t.verify(this.input,this.signature)}catch{this.isSignatureValid=!1}}}}),M={class:"box"},U=e("p",{class:"title is-4 mb-1"},"Signature Verification",-1),j=e("p",null," Type or paste in the signature below and it will check if your signature is valid ",-1),H=e("br",null,null,-1),R={key:0},W=a(" The given signature is "),z={key:0},G=e("b",{class:"has-text-success"},"valid",-1),J=a(" for the input above. "),L=[G,J],Q={key:1},X=e("b",{class:"has-text-danger"},"invalid",-1),Y=a(" for the input above. "),Z=[X,Y],x=e("details",{class:"content mt-4"},[e("summary",{style:{cursor:"pointer"}},"More info"),e("ul",null,[e("li",null,"Signing is something build on Asymmetric Cryptography"),e("li",null," A signature may look like a Hash function's output but it is different. Because a hash function is a one-way function and so its output cannot be reversed back into its input! "),e("li",null,[a(" The digital signature algorithm used here is "),e("code",null,"Secp256k1"),a(", which is the algorithm (elliptic curve) used by Bitcoin and Ethereum to implement its public key cryptography ")])])],-1);function ee(t,s,_,f,b,v){return i(),o("div",M,[U,j,H,d(e("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>t.signature=l),type:"text",class:p(["input",{"is-success":t.isSignatureValid,"is-danger":t.signature.length!==0&&!t.isSignatureValid}]),placeholder:"Secret Key"},null,2),[[h,t.signature]]),t.signature.length!==0?(i(),o("span",R,[W,t.isSignatureValid?(i(),o("span",z,L)):(i(),o("span",Q,Z))])):r("",!0),x])}var te=g(O,[["render",ee]]);const K=new m.ec("secp256k1"),se=y({name:"Signatures",components:{SignatureCreate:N,SignatureVerify:te},data(){return{tab:void 0,inputKeys:void 0,publicKey:"",secretKey:"",input:""}},watch:{secretKey(){this.inputKeys&&this.useKey()}},methods:{reset(){},useInput(){this.inputKeys=!0,this.publicKey="",this.secretKey=""},useKey(){if(!this.secretKey||this.secretKey.length!==64||!/[0-9a-fA-F]+$/.test(this.secretKey))return;const t=K.keyFromPrivate(this.secretKey);this.publicKey=t.getPublic().encode("hex",!0)},generateKeys(){this.inputKeys=!1;const t=K.genKeyPair();this.publicKey=t.getPublic().encode("hex",!0),this.secretKey=t.getPrivate().toString("hex")}}}),ie={class:"section py-0"},ne={class:"columns is-multiline is-vcentered"},oe=e("div",{class:"column"},[e("p",{class:"title"},"Digital Signatures")],-1),ae={class:"column is-narrow"},re={class:"column is-full"},le={class:"box"},ue=e("p",{class:"subtitle mb-0"},"Keys",-1),ce=e("div",{class:"content"},[e("ul",null,[e("li",null,"A secret/public key pair is needed to run this demo"),e("li",null," Either click generate to create a new secret/public key pair for this demo "),e("li",null,"Or, click input to enter your own secret key")])],-1),de={class:"columns"},he={class:"column is-half"},pe={class:"column is-half"},ye={key:0},ge=e("hr",null,null,-1),me=[ge],_e={key:1},fe=a(" Enter your 64 hexadecimal character secret key, the public key will be generated once secret key is entered. "),be={key:0},ve={class:"mb-2"},ke=a(" Private Key: "),Ke={class:"word-wrap"},we=a(" Public Key: "),Se={class:"word-wrap"},$e={key:2},Ce={class:"mb-2"},Ve=a(" Private Key: "),Pe={class:"word-wrap"},Ee=a(" Public Key: "),Te={class:"word-wrap"},Ae=e("div",{class:"column is-full"},[e("hr")],-1),Be={key:0,class:"column is-full"},Fe={class:"columns is-multiline is-vcentered"},De={class:"column is-full"},Ie={class:"box"},Ne=e("p",{class:"subtitle mb-2"},"Enter your data",-1),qe=e("div",{class:"column is-full"},[e("hr")],-1),Oe={class:"column is-half"},Me={class:"column is-half"};function Ue(t,s,_,f,b,v){const l=c("SignatureCreate"),w=c("SignatureVerify");return i(),o("div",null,[e("div",ie,[e("div",ne,[oe,e("div",ae,[e("button",{class:"button is-light is-danger is-fullwidth",onClick:s[0]||(s[0]=(...n)=>t.reset&&t.reset(...n))}," Reset ")]),e("div",re,[e("div",le,[ue,ce,e("div",de,[e("div",he,[e("button",{class:"button is-warning is-light is-fullwidth",onClick:s[1]||(s[1]=(...n)=>t.useInput&&t.useInput(...n))}," Input ")]),e("div",pe,[e("button",{class:"button is-success is-light is-fullwidth",onClick:s[2]||(s[2]=(...n)=>t.generateKeys&&t.generateKeys(...n))}," Generate ")])]),t.inputKeys!==void 0?(i(),o("div",ye,me)):r("",!0),t.inputKeys===!0?(i(),o("div",_e,[e("label",null,[fe,d(e("input",{"onUpdate:modelValue":s[3]||(s[3]=n=>t.secretKey=n),type:"text",class:"input",placeholder:"Secret Key",pattern:"[0-9a-fA-F]+$",minlength:"64",maxlength:"64"},null,512),[[h,t.secretKey]])]),t.secretKey.length===64&&/[0-9a-fA-F]+$/.test(t.secretKey)&&t.publicKey!==""?(i(),o("div",be,[e("div",ve,[ke,e("code",Ke,u(t.secretKey),1)]),we,e("code",Se,u(t.publicKey),1)])):r("",!0)])):t.inputKeys===!1?(i(),o("div",$e,[e("div",Ce,[Ve,e("code",Pe,u(t.secretKey),1)]),Ee,e("code",Te,u(t.publicKey),1)])):r("",!0)])]),Ae,t.secretKey&&t.publicKey?(i(),o("div",Be,[e("div",Fe,[e("div",De,[e("div",Ie,[e("label",null,[Ne,d(e("textarea",{"onUpdate:modelValue":s[4]||(s[4]=n=>t.input=n),class:"textarea",placeholder:"Whatever data you want to sign or verify",rows:"2"},null,512),[[h,t.input]])])])]),qe,e("div",Oe,[e("button",{class:p(["button is-light is-fullwidth",{"is-success":t.tab==="SignatureCreate"}]),onClick:s[5]||(s[5]=n=>t.tab="SignatureCreate")}," Create Signature ",2)]),e("div",Me,[e("button",{class:p(["button is-light is-fullwidth",{"is-success":t.tab==="SignatureVerify"}]),onClick:s[6]||(s[6]=n=>t.tab="SignatureVerify")}," Verify Signature ",2)]),t.tab==="SignatureCreate"?(i(),k(l,{key:0,secretKey:t.secretKey,input:t.input,class:"column is-full"},null,8,["secretKey","input"])):t.tab==="SignatureVerify"?(i(),k(w,{key:1,publicKey:t.publicKey,input:t.input,class:"column is-full"},null,8,["publicKey","input"])):r("",!0)])])):r("",!0)])])])}var ze=g(se,[["render",Ue]]);export{ze as default};
