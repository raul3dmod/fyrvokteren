(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $c="170",up=0,Fu=1,hp=2,Cf=1,Rf=2,$i=3,gs=0,Vn=1,cn=2,wn=0,ds=1,Ti=2,ku=3,Ou=4,Pf=5,vi=100,fp=101,dp=102,pp=103,mp=104,Jr=200,gp=201,vp=202,xp=203,Ul=204,zl=205,Nl=206,_p=207,Fl=208,Mp=209,yp=210,bp=211,Sp=212,wp=213,Ep=214,kl=0,Ol=1,Bl=2,Ar=3,Gl=4,Vl=5,Hl=6,Wl=7,jc=0,Tp=1,Ap=2,ps=0,Lf=1,Df=2,If=3,Kc=4,Cp=5,Uf=6,zf=7,Nf=300,Cr=301,Rr=302,Xl=303,ql=304,Pa=306,zi=1e3,Ls=1001,Yl=1002,Tn=1003,Rp=1004,Ro=1005,Ii=1006,Xa=1007,Ds=1008,Ni=1009,Ff=1010,kf=1011,ho=1012,Zc=1013,Os=1014,bi=1015,oi=1016,Jc=1017,Qc=1018,Bs=1020,Of=35902,Bf=1021,Gf=1022,ri=1023,Vf=1024,Hf=1025,_r=1026,Gs=1027,La=1028,eu=1029,Wf=1030,tu=1031,nu=1033,da=33776,pa=33777,ma=33778,ga=33779,$l=35840,jl=35841,Kl=35842,Zl=35843,Jl=36196,Ql=37492,ec=37496,tc=37808,nc=37809,ic=37810,sc=37811,rc=37812,oc=37813,ac=37814,lc=37815,cc=37816,uc=37817,hc=37818,fc=37819,dc=37820,pc=37821,va=36492,mc=36494,gc=36495,Xf=36283,vc=36284,xc=36285,_c=36286,Pp=3200,Lp=3201,iu=0,Dp=1,us="",En="srgb",Nr="srgb-linear",Da="linear",Gt="srgb",Js=7680,Bu=519,Ip=512,Up=513,zp=514,qf=515,Np=516,Fp=517,kp=518,Op=519,Gu=35044,Mc=35048,Vu="300 es",Ji=2e3,Sa=2001;class Fr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hu=1234567;const no=Math.PI/180,fo=180/Math.PI;function Xs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function Mn(i,e,t){return Math.max(e,Math.min(t,i))}function su(i,e){return(i%e+e)%e}function Bp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Gp(i,e,t){return i!==e?(t-i)/(e-i):0}function io(i,e,t){return(1-t)*i+t*e}function Vp(i,e,t,n){return io(i,e,1-Math.exp(-t*n))}function Hp(i,e=1){return e-Math.abs(su(i,e*2)-e)}function Wp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Xp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function qp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Yp(i,e){return i+Math.random()*(e-i)}function $p(i){return i*(.5-Math.random())}function jp(i){i!==void 0&&(Hu=i);let e=Hu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kp(i){return i*no}function Zp(i){return i*fo}function Jp(i){return(i&i-1)===0&&i!==0}function Qp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function e0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function t0(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Mt={DEG2RAD:no,RAD2DEG:fo,generateUUID:Xs,clamp:Mn,euclideanModulo:su,mapLinear:Bp,inverseLerp:Gp,lerp:io,damp:Vp,pingpong:Hp,smoothstep:Wp,smootherstep:Xp,randInt:qp,randFloat:Yp,randFloatSpread:$p,seededRandom:jp,degToRad:Kp,radToDeg:Zp,isPowerOfTwo:Jp,ceilPowerOfTwo:Qp,floorPowerOfTwo:e0,setQuaternionFromProperEuler:t0,normalize:Nn,denormalize:gr};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class St{constructor(e,t,n,s,r,o,a,l,c){St.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],M=s[0],m=s[3],f=s[6],_=s[1],y=s[4],x=s[7],C=s[2],S=s[5],E=s[8];return r[0]=o*M+a*_+l*C,r[3]=o*m+a*y+l*S,r[6]=o*f+a*x+l*E,r[1]=c*M+u*_+h*C,r[4]=c*m+u*y+h*S,r[7]=c*f+u*x+h*E,r[2]=d*M+p*_+g*C,r[5]=d*m+p*y+g*S,r[8]=d*f+p*x+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=t*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=h*M,e[1]=(s*c-u*n)*M,e[2]=(a*n-s*o)*M,e[3]=d*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=p*M,e[7]=(n*l-c*t)*M,e[8]=(o*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qa.makeScale(e,t)),this}rotate(e){return this.premultiply(qa.makeRotation(-e)),this}translate(e,t){return this.premultiply(qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new St;function Yf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function wa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function n0(){const i=wa("canvas");return i.style.display="block",i}const Wu={};function Qr(i){i in Wu||(Wu[i]=!0,console.warn(i))}function i0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function s0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function r0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ut={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Gt&&(i.r=es(i.r),i.g=es(i.g),i.b=es(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Gt&&(i.r=Mr(i.r),i.g=Mr(i.g),i.b=Mr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===us?Da:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function es(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Xu=[.64,.33,.3,.6,.15,.06],qu=[.2126,.7152,.0722],Yu=[.3127,.329],$u=new St().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ju=new St().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ut.define({[Nr]:{primaries:Xu,whitePoint:Yu,transfer:Da,toXYZ:$u,fromXYZ:ju,luminanceCoefficients:qu,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:Xu,whitePoint:Yu,transfer:Gt,toXYZ:$u,fromXYZ:ju,luminanceCoefficients:qu,outputColorSpaceConfig:{drawingBufferColorSpace:En}}});let Qs;class o0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qs===void 0&&(Qs=wa("canvas")),Qs.width=e.width,Qs.height=e.height;const n=Qs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=es(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(es(t[n]/255)*255):t[n]=es(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let a0=0;class $f{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Xs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ya(s[o].image)):r.push(Ya(s[o]))}else r=Ya(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?o0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let l0=0;class Un extends Fr{constructor(e=Un.DEFAULT_IMAGE,t=Un.DEFAULT_MAPPING,n=Ls,s=Ls,r=Ii,o=Ds,a=ri,l=Ni,c=Un.DEFAULT_ANISOTROPY,u=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Xs(),this.name="",this.source=new $f(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zi:e.x=e.x-Math.floor(e.x);break;case Ls:e.x=e.x<0?0:1;break;case Yl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zi:e.y=e.y-Math.floor(e.y);break;case Ls:e.y=e.y<0?0:1;break;case Yl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Nf;Un.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,n=0,s=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(p+1)/2,C=(f+1)/2,S=(u+d)/4,E=(h+M)/4,T=(g+m)/4;return y>x&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=S/n,r=E/n):x>C?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=T/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=E/r,s=T/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(h-M)*(h-M)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-M)/_,this.z=(d-u)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class c0 extends Fr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Un(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $f(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends c0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jf extends Un{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class u0 extends Un{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bo{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],M=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=M;return}if(h!==M||l!==d||c!==p||u!==g){let m=1-a;const f=l*d+c*p+u*g+h*M,_=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const C=Math.sqrt(y),S=Math.atan2(C,f*_);m=Math.sin(m*S)/C,a=Math.sin(a*S)/C}const x=a*_;if(l=l*m+d*x,c=c*m+p*x,u=u*m+g*x,h=h*m+M*x,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-a*p,e[t+2]=c*g+u*p+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ku.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ku.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $a.copy(this).projectOnVector(e),this.sub($a)}reflect(e){return this.sub($a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $a=new V,Ku=new bo;class qs{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,di):di.fromBufferAttribute(r,o),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Po.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Po.copy(n.boundingBox)),Po.applyMatrix4(e.matrixWorld),this.union(Po)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),Lo.subVectors(this.max,Hr),er.subVectors(e.a,Hr),tr.subVectors(e.b,Hr),nr.subVectors(e.c,Hr),is.subVectors(tr,er),ss.subVectors(nr,tr),Ms.subVectors(er,nr);let t=[0,-is.z,is.y,0,-ss.z,ss.y,0,-Ms.z,Ms.y,is.z,0,-is.x,ss.z,0,-ss.x,Ms.z,0,-Ms.x,-is.y,is.x,0,-ss.y,ss.x,0,-Ms.y,Ms.x,0];return!ja(t,er,tr,nr,Lo)||(t=[1,0,0,0,1,0,0,0,1],!ja(t,er,tr,nr,Lo))?!1:(Do.crossVectors(is,ss),t=[Do.x,Do.y,Do.z],ja(t,er,tr,nr,Lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bi=[new V,new V,new V,new V,new V,new V,new V,new V],di=new V,Po=new qs,er=new V,tr=new V,nr=new V,is=new V,ss=new V,Ms=new V,Hr=new V,Lo=new V,Do=new V,ys=new V;function ja(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ys.fromArray(i,r);const a=s.x*Math.abs(ys.x)+s.y*Math.abs(ys.y)+s.z*Math.abs(ys.z),l=e.dot(ys),c=t.dot(ys),u=n.dot(ys);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const h0=new qs,Wr=new V,Ka=new V;class kr{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):h0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wr.subVectors(e,this.center);const t=Wr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Wr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wr.copy(e.center).add(Ka)),this.expandByPoint(Wr.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gi=new V,Za=new V,Io=new V,rs=new V,Ja=new V,Uo=new V,Qa=new V;class ru{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Za.copy(e).add(t).multiplyScalar(.5),Io.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(Za);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Io),a=rs.dot(this.direction),l=-rs.dot(Io),c=rs.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const M=1/u;h*=M,d*=M,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Za).addScaledVector(Io,d),p}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);const n=Gi.dot(this.direction),s=Gi.dot(Gi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,n,s,r){Ja.subVectors(t,e),Uo.subVectors(n,e),Qa.crossVectors(Ja,Uo);let o=this.direction.dot(Qa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rs.subVectors(this.origin,e);const l=a*this.direction.dot(Uo.crossVectors(rs,Uo));if(l<0)return null;const c=a*this.direction.dot(Ja.cross(rs));if(c<0||l+c>o)return null;const u=-a*rs.dot(Qa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,t,n,s,r,o,a,l,c,u,h,d,p,g,M,m){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,p,g,M,m)}set(e,t,n,s,r,o,a,l,c,u,h,d,p,g,M,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ir.setFromMatrixColumn(e,0).length(),r=1/ir.setFromMatrixColumn(e,1).length(),o=1/ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,M=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-M*c,t[9]=-a*l,t[2]=M-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,M=c*h;t[0]=d+M*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=M+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,M=c*h;t[0]=d-M*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=M-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,M=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+M,t[1]=l*h,t[5]=M*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,M=a*c;t[0]=l*u,t[4]=M-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-M*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,M=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+M,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=M*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f0,e,d0)}lookAt(e,t,n){const s=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),os.crossVectors(n,$n),os.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),os.crossVectors(n,$n)),os.normalize(),zo.crossVectors($n,os),s[0]=os.x,s[4]=zo.x,s[8]=$n.x,s[1]=os.y,s[5]=zo.y,s[9]=$n.y,s[2]=os.z,s[6]=zo.z,s[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],M=n[6],m=n[10],f=n[14],_=n[3],y=n[7],x=n[11],C=n[15],S=s[0],E=s[4],T=s[8],b=s[12],v=s[1],A=s[5],L=s[9],z=s[13],U=s[2],W=s[6],D=s[10],k=s[14],G=s[3],Y=s[7],Q=s[11],se=s[15];return r[0]=o*S+a*v+l*U+c*G,r[4]=o*E+a*A+l*W+c*Y,r[8]=o*T+a*L+l*D+c*Q,r[12]=o*b+a*z+l*k+c*se,r[1]=u*S+h*v+d*U+p*G,r[5]=u*E+h*A+d*W+p*Y,r[9]=u*T+h*L+d*D+p*Q,r[13]=u*b+h*z+d*k+p*se,r[2]=g*S+M*v+m*U+f*G,r[6]=g*E+M*A+m*W+f*Y,r[10]=g*T+M*L+m*D+f*Q,r[14]=g*b+M*z+m*k+f*se,r[3]=_*S+y*v+x*U+C*G,r[7]=_*E+y*A+x*W+C*Y,r[11]=_*T+y*L+x*D+C*Q,r[15]=_*b+y*z+x*k+C*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],M=e[7],m=e[11],f=e[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*p-n*l*p)+M*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+m*(+t*c*h-t*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+f*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],M=e[13],m=e[14],f=e[15],_=h*m*c-M*d*c+M*l*p-a*m*p-h*l*f+a*d*f,y=g*d*c-u*m*c-g*l*p+o*m*p+u*l*f-o*d*f,x=u*M*c-g*h*c+g*a*p-o*M*p-u*a*f+o*h*f,C=g*h*l-u*M*l-g*a*d+o*M*d+u*a*m-o*h*m,S=t*_+n*y+s*x+r*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=_*E,e[1]=(M*d*r-h*m*r-M*s*p+n*m*p+h*s*f-n*d*f)*E,e[2]=(a*m*r-M*l*r+M*s*c-n*m*c-a*s*f+n*l*f)*E,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*p-n*l*p)*E,e[4]=y*E,e[5]=(u*m*r-g*d*r+g*s*p-t*m*p-u*s*f+t*d*f)*E,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*E,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*p+t*l*p)*E,e[8]=x*E,e[9]=(g*h*r-u*M*r-g*n*p+t*M*p+u*n*f-t*h*f)*E,e[10]=(o*M*r-g*a*r+g*n*c-t*M*c-o*n*f+t*a*f)*E,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*p-t*a*p)*E,e[12]=C*E,e[13]=(u*M*s-g*h*s+g*n*d-t*M*d-u*n*m+t*h*m)*E,e[14]=(g*a*s-o*M*s-g*n*l+t*M*l+o*n*m-t*a*m)*E,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,g=r*h,M=o*u,m=o*h,f=a*h,_=l*c,y=l*u,x=l*h,C=n.x,S=n.y,E=n.z;return s[0]=(1-(M+f))*C,s[1]=(p+x)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(p-x)*S,s[5]=(1-(d+f))*S,s[6]=(m+_)*S,s[7]=0,s[8]=(g+y)*E,s[9]=(m-_)*E,s[10]=(1-(d+M))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ir.set(s[0],s[1],s[2]).length();const o=ir.set(s[4],s[5],s[6]).length(),a=ir.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],pi.copy(this);const c=1/r,u=1/o,h=1/a;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=u,pi.elements[5]*=u,pi.elements[6]*=u,pi.elements[8]*=h,pi.elements[9]*=h,pi.elements[10]*=h,t.setFromRotationMatrix(pi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ji){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let p,g;if(a===Ji)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Sa)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ji){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*c,p=(n+s)*u;let g,M;if(a===Ji)g=(o+r)*h,M=-2*h;else if(a===Sa)g=r*h,M=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ir=new V,pi=new zt,f0=new V(0,0,0),d0=new V(1,1,1),os=new V,zo=new V,$n=new V,Zu=new zt,Ju=new bo;class Fi{constructor(e=0,t=0,n=0,s=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ju.setFromEuler(this),this.setFromQuaternion(Ju,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class ou{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let p0=0;const Qu=new V,sr=new bo,Vi=new zt,No=new V,Xr=new V,m0=new V,g0=new bo,eh=new V(1,0,0),th=new V(0,1,0),nh=new V(0,0,1),ih={type:"added"},v0={type:"removed"},rr={type:"childadded",child:null},el={type:"childremoved",child:null};class Yt extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new V,t=new Fi,n=new bo,s=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new zt},normalMatrix:{value:new St}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(eh,e)}rotateY(e){return this.rotateOnAxis(th,e)}rotateZ(e){return this.rotateOnAxis(nh,e)}translateOnAxis(e,t){return Qu.copy(e).applyQuaternion(this.quaternion),this.position.add(Qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eh,e)}translateY(e){return this.translateOnAxis(th,e)}translateZ(e){return this.translateOnAxis(nh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?No.copy(e):No.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Xr,No,this.up):Vi.lookAt(No,Xr,this.up),this.quaternion.setFromRotationMatrix(Vi),s&&(Vi.extractRotation(s.matrixWorld),sr.setFromRotationMatrix(Vi),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ih),rr.child=e,this.dispatchEvent(rr),rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(v0),el.child=e,this.dispatchEvent(el),el.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ih),rr.child=e,this.dispatchEvent(rr),rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,e,m0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,g0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Yt.DEFAULT_UP=new V(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new V,Hi=new V,tl=new V,Wi=new V,or=new V,ar=new V,sh=new V,nl=new V,il=new V,sl=new V,rl=new Wt,ol=new Wt,al=new Wt;class xi{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mi.subVectors(e,t),s.cross(mi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mi.subVectors(s,t),Hi.subVectors(n,t),tl.subVectors(e,t);const o=mi.dot(mi),a=mi.dot(Hi),l=mi.dot(tl),c=Hi.dot(Hi),u=Hi.dot(tl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wi.x),l.addScaledVector(o,Wi.y),l.addScaledVector(a,Wi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return rl.setScalar(0),ol.setScalar(0),al.setScalar(0),rl.fromBufferAttribute(e,t),ol.fromBufferAttribute(e,n),al.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(rl,r.x),o.addScaledVector(ol,r.y),o.addScaledVector(al,r.z),o}static isFrontFacing(e,t,n,s){return mi.subVectors(n,t),Hi.subVectors(e,t),mi.cross(Hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),mi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return xi.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;or.subVectors(s,n),ar.subVectors(r,n),nl.subVectors(e,n);const l=or.dot(nl),c=ar.dot(nl);if(l<=0&&c<=0)return t.copy(n);il.subVectors(e,s);const u=or.dot(il),h=ar.dot(il);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(or,o);sl.subVectors(e,r);const p=or.dot(sl),g=ar.dot(sl);if(g>=0&&p<=g)return t.copy(r);const M=p*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ar,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return sh.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(sh,a);const f=1/(m+M+d);return o=M*f,a=d*f,t.copy(n).addScaledVector(or,o).addScaledVector(ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function ll(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ut.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ut.workingColorSpace){if(e=su(e,1),t=Mn(t,0,1),n=Mn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ll(o,r,e+1/3),this.g=ll(o,r,e),this.b=ll(o,r,e-1/3)}return Ut.toWorkingColorSpace(this,s),this}setStyle(e,t=En){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){const n=Kf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}copyLinearToSRGB(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return Ut.fromWorkingColorSpace(Dn.copy(this),e),Math.round(Mn(Dn.r*255,0,255))*65536+Math.round(Mn(Dn.g*255,0,255))*256+Math.round(Mn(Dn.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.fromWorkingColorSpace(Dn.copy(this),t);const n=Dn.r,s=Dn.g,r=Dn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ut.workingColorSpace){return Ut.fromWorkingColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=En){Ut.fromWorkingColorSpace(Dn.copy(this),e);const t=Dn.r,n=Dn.g,s=Dn.b;return e!==En?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(as),this.setHSL(as.h+e,as.s+t,as.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(Fo);const n=io(as.h,Fo.h,t),s=io(as.s,Fo.s,t),r=io(as.l,Fo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Re;Re.NAMES=Kf;let x0=0;class Ys extends Fr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Xs(),this.name="",this.blending=ds,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=zl,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==gs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ul&&(n.blendSrc=this.blendSrc),this.blendDst!==zl&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Nt extends Ys{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new V,ko=new Ae;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gu,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ko.fromBufferAttribute(this,t),ko.applyMatrix3(e),this.setXY(t,ko.x,ko.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array),s=Nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array),s=Nn(s,this.array),r=Nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gu&&(e.usage=this.usage),e}}class Zf extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jf extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _0=0;const ii=new zt,cl=new Yt,lr=new V,jn=new qs,qr=new qs,xn=new V;class Ot extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yf(e)?Jf:Zf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new St().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,n){return ii.makeTranslation(e,t,n),this.applyMatrix4(ii),this}scale(e,t,n){return ii.makeScale(e,t,n),this.applyMatrix4(ii),this}lookAt(e){return cl.lookAt(e),cl.updateMatrix(),this.applyMatrix4(cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];jn.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];qr.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(jn.min,qr.min),jn.expandByPoint(xn),xn.addVectors(jn.max,qr.max),jn.expandByPoint(xn)):(jn.expandByPoint(qr.min),jn.expandByPoint(qr.max))}jn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)xn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(xn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xn.fromBufferAttribute(a,c),l&&(lr.fromBufferAttribute(e,c),xn.add(lr)),s=Math.max(s,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new V,l[T]=new V;const c=new V,u=new V,h=new V,d=new Ae,p=new Ae,g=new Ae,M=new V,m=new V;function f(T,b,v){c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,v),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,v),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(A),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(A),a[T].add(M),a[b].add(M),a[v].add(M),l[T].add(m),l[b].add(m),l[v].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let T=0,b=_.length;T<b;++T){const v=_[T],A=v.start,L=v.count;for(let z=A,U=A+L;z<U;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new V,x=new V,C=new V,S=new V;function E(T){C.fromBufferAttribute(s,T),S.copy(C);const b=a[T];y.copy(b),y.sub(C.multiplyScalar(C.dot(b))).normalize(),x.crossVectors(S,b);const A=x.dot(l[T])<0?-1:1;o.setXYZW(T,y.x,y.y,y.z,A)}for(let T=0,b=_.length;T<b;++T){const v=_[T],A=v.start,L=v.count;for(let z=A,U=A+L;z<U;z+=3)E(e.getX(z+0)),E(e.getX(z+1)),E(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,u=new V,h=new V;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),M=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new qt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rh=new zt,bs=new ru,Oo=new kr,oh=new V,Bo=new V,Go=new V,Vo=new V,ul=new V,Ho=new V,ah=new V,Wo=new V;class lt extends Yt{constructor(e=new Ot,t=new Nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ul.fromBufferAttribute(h,e),o?Ho.addScaledVector(ul,u):Ho.addScaledVector(ul.sub(t),u))}t.add(Ho)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(r),bs.copy(e.ray).recast(e.near),!(Oo.containsPoint(bs.origin)===!1&&(bs.intersectSphere(Oo,oh)===null||bs.origin.distanceToSquared(oh)>(e.far-e.near)**2))&&(rh.copy(r).invert(),bs.copy(e.ray).applyMatrix4(rh),!(n.boundingBox!==null&&bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){const m=d[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,C=y;x<C;x+=3){const S=a.getX(x),E=a.getX(x+1),T=a.getX(x+2);s=Xo(this,f,e,n,c,u,h,S,E,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){const _=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=Xo(this,o,e,n,c,u,h,_,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){const m=d[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,C=y;x<C;x+=3){const S=x,E=x+1,T=x+2;s=Xo(this,f,e,n,c,u,h,S,E,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){const _=m,y=m+1,x=m+2;s=Xo(this,o,e,n,c,u,h,_,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function M0(i,e,t,n,s,r,o,a){let l;if(e.side===Vn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===gs,a),l===null)return null;Wo.copy(a),Wo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Wo);return c<t.near||c>t.far?null:{distance:c,point:Wo.clone(),object:i}}function Xo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Bo),i.getVertexPosition(l,Go),i.getVertexPosition(c,Vo);const u=M0(i,e,t,n,Bo,Go,Vo,ah);if(u){const h=new V;xi.getBarycoord(ah,Bo,Go,Vo,h),s&&(u.uv=xi.getInterpolatedAttribute(s,a,l,c,h,new Ae)),r&&(u.uv1=xi.getInterpolatedAttribute(r,a,l,c,h,new Ae)),o&&(u.normal=xi.getInterpolatedAttribute(o,a,l,c,h,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new V,materialIndex:0};xi.getNormal(Bo,Go,Vo,d.normal),u.face=d,u.barycoord=h}return u}class On extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(h,2));function g(M,m,f,_,y,x,C,S,E,T,b){const v=x/E,A=C/T,L=x/2,z=C/2,U=S/2,W=E+1,D=T+1;let k=0,G=0;const Y=new V;for(let Q=0;Q<D;Q++){const se=Q*A-z;for(let Ee=0;Ee<W;Ee++){const ke=Ee*v-L;Y[M]=ke*_,Y[m]=se*y,Y[f]=U,c.push(Y.x,Y.y,Y.z),Y[M]=0,Y[m]=0,Y[f]=S>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(Ee/E),h.push(1-Q/T),k+=1}}for(let Q=0;Q<T;Q++)for(let se=0;se<E;se++){const Ee=d+se+W*Q,ke=d+se+W*(Q+1),H=d+(se+1)+W*(Q+1),Z=d+(se+1)+W*Q;l.push(Ee,ke,Z),l.push(ke,H,Z),G+=6}a.addGroup(p,G,b),p+=G,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Fn(i){const e={};for(let t=0;t<i.length;t++){const n=Pr(i[t]);for(const s in n)e[s]=n[s]}return e}function y0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const _i={clone:Pr,merge:Fn};var b0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends Ys{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b0,this.fragmentShader=S0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=y0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ed extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new V,lh=new Ae,ch=new Ae;class Zn extends ed{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,t){return this.getViewBounds(e,lh,ch),t.subVectors(ch,lh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(no*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cr=-90,ur=1;class w0 extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Zn(cr,ur,e,t);s.layers=this.layers,this.add(s);const r=new Zn(cr,ur,e,t);r.layers=this.layers,this.add(r);const o=new Zn(cr,ur,e,t);o.layers=this.layers,this.add(o);const a=new Zn(cr,ur,e,t);a.layers=this.layers,this.add(a);const l=new Zn(cr,ur,e,t);l.layers=this.layers,this.add(l);const c=new Zn(cr,ur,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ji)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class td extends Un{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Cr,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class E0 extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new td(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ii}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new On(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:Pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vn,blending:wn});r.uniforms.tEquirect.value=t;const o=new lt(s,r),a=t.minFilter;return t.minFilter===Ds&&(t.minFilter=Ii),new w0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const hl=new V,T0=new V,A0=new St;class Cs{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=hl.subVectors(n,t).cross(T0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(hl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||A0.getNormalMatrix(e),s=this.coplanarPoint(hl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new kr,qo=new V;class au{constructor(e=new Cs,t=new Cs,n=new Cs,s=new Cs,r=new Cs,o=new Cs){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ji){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],g=s[9],M=s[10],m=s[11],f=s[12],_=s[13],y=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,m-p,x-f).normalize(),n[1].setComponents(l+r,d+c,m+p,x+f).normalize(),n[2].setComponents(l+o,d+u,m+g,x+_).normalize(),n[3].setComponents(l-o,d-u,m-g,x-_).normalize(),n[4].setComponents(l-a,d-h,m-M,x-y).normalize(),t===Ji)n[5].setComponents(l+a,d+h,m+M,x+y).normalize();else if(t===Sa)n[5].setComponents(a,h,M,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){return Ss.center.set(0,0,0),Ss.radius=.7071067811865476,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(qo.x=s.normal.x>0?e.max.x:e.min.x,qo.y=s.normal.y>0?e.max.y:e.min.y,qo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function C0(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],M=h[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,h[d]=M)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const M=h[p];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class ai extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,p=[],g=[],M=[],m=[];for(let f=0;f<u;f++){const _=f*d-o;for(let y=0;y<c;y++){const x=y*h-r;g.push(x,-_,0),M.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const y=_+c*f,x=_+c*(f+1),C=_+1+c*(f+1),S=_+1+c*f;p.push(y,x,S),p.push(x,C,S)}this.setIndex(p),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(M,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.width,e.height,e.widthSegments,e.heightSegments)}}var R0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,L0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,N0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,k0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,O0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,V0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,H0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,J0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Q0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,em=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ym=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Am=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,km=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ig=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ng=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ev=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ov=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,av=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tt={alphahash_fragment:R0,alphahash_pars_fragment:P0,alphamap_fragment:L0,alphamap_pars_fragment:D0,alphatest_fragment:I0,alphatest_pars_fragment:U0,aomap_fragment:z0,aomap_pars_fragment:N0,batching_pars_vertex:F0,batching_vertex:k0,begin_vertex:O0,beginnormal_vertex:B0,bsdfs:G0,iridescence_fragment:V0,bumpmap_pars_fragment:H0,clipping_planes_fragment:W0,clipping_planes_pars_fragment:X0,clipping_planes_pars_vertex:q0,clipping_planes_vertex:Y0,color_fragment:$0,color_pars_fragment:j0,color_pars_vertex:K0,color_vertex:Z0,common:J0,cube_uv_reflection_fragment:Q0,defaultnormal_vertex:em,displacementmap_pars_vertex:tm,displacementmap_vertex:nm,emissivemap_fragment:im,emissivemap_pars_fragment:sm,colorspace_fragment:rm,colorspace_pars_fragment:om,envmap_fragment:am,envmap_common_pars_fragment:lm,envmap_pars_fragment:cm,envmap_pars_vertex:um,envmap_physical_pars_fragment:ym,envmap_vertex:hm,fog_vertex:fm,fog_pars_vertex:dm,fog_fragment:pm,fog_pars_fragment:mm,gradientmap_pars_fragment:gm,lightmap_pars_fragment:vm,lights_lambert_fragment:xm,lights_lambert_pars_fragment:_m,lights_pars_begin:Mm,lights_toon_fragment:bm,lights_toon_pars_fragment:Sm,lights_phong_fragment:wm,lights_phong_pars_fragment:Em,lights_physical_fragment:Tm,lights_physical_pars_fragment:Am,lights_fragment_begin:Cm,lights_fragment_maps:Rm,lights_fragment_end:Pm,logdepthbuf_fragment:Lm,logdepthbuf_pars_fragment:Dm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Um,map_fragment:zm,map_pars_fragment:Nm,map_particle_fragment:Fm,map_particle_pars_fragment:km,metalnessmap_fragment:Om,metalnessmap_pars_fragment:Bm,morphinstance_vertex:Gm,morphcolor_vertex:Vm,morphnormal_vertex:Hm,morphtarget_pars_vertex:Wm,morphtarget_vertex:Xm,normal_fragment_begin:qm,normal_fragment_maps:Ym,normal_pars_fragment:$m,normal_pars_vertex:jm,normal_vertex:Km,normalmap_pars_fragment:Zm,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:Qm,clearcoat_pars_fragment:eg,iridescence_pars_fragment:tg,opaque_fragment:ng,packing:ig,premultiplied_alpha_fragment:sg,project_vertex:rg,dithering_fragment:og,dithering_pars_fragment:ag,roughnessmap_fragment:lg,roughnessmap_pars_fragment:cg,shadowmap_pars_fragment:ug,shadowmap_pars_vertex:hg,shadowmap_vertex:fg,shadowmask_pars_fragment:dg,skinbase_vertex:pg,skinning_pars_vertex:mg,skinning_vertex:gg,skinnormal_vertex:vg,specularmap_fragment:xg,specularmap_pars_fragment:_g,tonemapping_fragment:Mg,tonemapping_pars_fragment:yg,transmission_fragment:bg,transmission_pars_fragment:Sg,uv_pars_fragment:wg,uv_pars_vertex:Eg,uv_vertex:Tg,worldpos_vertex:Ag,background_vert:Cg,background_frag:Rg,backgroundCube_vert:Pg,backgroundCube_frag:Lg,cube_vert:Dg,cube_frag:Ig,depth_vert:Ug,depth_frag:zg,distanceRGBA_vert:Ng,distanceRGBA_frag:Fg,equirect_vert:kg,equirect_frag:Og,linedashed_vert:Bg,linedashed_frag:Gg,meshbasic_vert:Vg,meshbasic_frag:Hg,meshlambert_vert:Wg,meshlambert_frag:Xg,meshmatcap_vert:qg,meshmatcap_frag:Yg,meshnormal_vert:$g,meshnormal_frag:jg,meshphong_vert:Kg,meshphong_frag:Zg,meshphysical_vert:Jg,meshphysical_frag:Qg,meshtoon_vert:ev,meshtoon_frag:tv,points_vert:nv,points_frag:iv,shadow_vert:sv,shadow_frag:rv,sprite_vert:ov,sprite_frag:av},qe={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},envMapRotation:{value:new St},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},Li={basic:{uniforms:Fn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Fn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Re(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Fn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Fn([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Fn([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new Re(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Fn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Fn([qe.points,qe.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Fn([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Fn([qe.common,qe.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Fn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Fn([qe.sprite,qe.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new St}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:Fn([qe.common,qe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:Fn([qe.lights,qe.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Li.physical={uniforms:Fn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const Yo={r:0,b:0,g:0},ws=new Fi,lv=new zt;function cv(i,e,t,n,s,r,o){const a=new Re(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y}function M(_){let y=!1;const x=g(_);x===null?f(a,l):x&&x.isColor&&(f(x,1),y=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===Pa)?(u===void 0&&(u=new lt(new On(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Pr(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ws.copy(y.backgroundRotation),ws.x*=-1,ws.y*=-1,ws.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lv.makeRotationFromEuler(ws)),u.material.toneMapped=Ut.getTransfer(x.colorSpace)!==Gt,(h!==x||d!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,p=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new lt(new ai(2,2),new sn({name:"BackgroundMaterial",uniforms:Pr(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ut.getTransfer(x.colorSpace)!==Gt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,p=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,y){_.getRGB(Yo,Qf(i)),n.buffers.color.setClear(Yo.r,Yo.g,Yo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:M,addToRenderList:m}}function uv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(v,A,L,z,U){let W=!1;const D=h(z,L,A);r!==D&&(r=D,c(r.object)),W=p(v,z,L,U),W&&g(v,z,L,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(v,A,L,z),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,A,L){const z=L.wireframe===!0;let U=n[v.id];U===void 0&&(U={},n[v.id]=U);let W=U[A.id];W===void 0&&(W={},U[A.id]=W);let D=W[z];return D===void 0&&(D=d(l()),W[z]=D),D}function d(v){const A=[],L=[],z=[];for(let U=0;U<t;U++)A[U]=0,L[U]=0,z[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:L,attributeDivisors:z,object:v,attributes:{},index:null}}function p(v,A,L,z){const U=r.attributes,W=A.attributes;let D=0;const k=L.getAttributes();for(const G in k)if(k[G].location>=0){const Q=U[G];let se=W[G];if(se===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(se=v.instanceColor)),Q===void 0||Q.attribute!==se||se&&Q.data!==se.data)return!0;D++}return r.attributesNum!==D||r.index!==z}function g(v,A,L,z){const U={},W=A.attributes;let D=0;const k=L.getAttributes();for(const G in k)if(k[G].location>=0){let Q=W[G];Q===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor));const se={};se.attribute=Q,Q&&Q.data&&(se.data=Q.data),U[G]=se,D++}r.attributes=U,r.attributesNum=D,r.index=z}function M(){const v=r.newAttributes;for(let A=0,L=v.length;A<L;A++)v[A]=0}function m(v){f(v,0)}function f(v,A){const L=r.newAttributes,z=r.enabledAttributes,U=r.attributeDivisors;L[v]=1,z[v]===0&&(i.enableVertexAttribArray(v),z[v]=1),U[v]!==A&&(i.vertexAttribDivisor(v,A),U[v]=A)}function _(){const v=r.newAttributes,A=r.enabledAttributes;for(let L=0,z=A.length;L<z;L++)A[L]!==v[L]&&(i.disableVertexAttribArray(L),A[L]=0)}function y(v,A,L,z,U,W,D){D===!0?i.vertexAttribIPointer(v,A,L,U,W):i.vertexAttribPointer(v,A,L,z,U,W)}function x(v,A,L,z){M();const U=z.attributes,W=L.getAttributes(),D=A.defaultAttributeValues;for(const k in W){const G=W[k];if(G.location>=0){let Y=U[k];if(Y===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(Y=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(Y=v.instanceColor)),Y!==void 0){const Q=Y.normalized,se=Y.itemSize,Ee=e.get(Y);if(Ee===void 0)continue;const ke=Ee.buffer,H=Ee.type,Z=Ee.bytesPerElement,he=H===i.INT||H===i.UNSIGNED_INT||Y.gpuType===Zc;if(Y.isInterleavedBufferAttribute){const oe=Y.data,me=oe.stride,Le=Y.offset;if(oe.isInstancedInterleavedBuffer){for(let Ue=0;Ue<G.locationSize;Ue++)f(G.location+Ue,oe.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ue=0;Ue<G.locationSize;Ue++)m(G.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let Ue=0;Ue<G.locationSize;Ue++)y(G.location+Ue,se/G.locationSize,H,Q,me*Z,(Le+se/G.locationSize*Ue)*Z,he)}else{if(Y.isInstancedBufferAttribute){for(let oe=0;oe<G.locationSize;oe++)f(G.location+oe,Y.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let oe=0;oe<G.locationSize;oe++)m(G.location+oe);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let oe=0;oe<G.locationSize;oe++)y(G.location+oe,se/G.locationSize,H,Q,se*Z,se/G.locationSize*oe*Z,he)}}else if(D!==void 0){const Q=D[k];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(G.location,Q);break;case 3:i.vertexAttrib3fv(G.location,Q);break;case 4:i.vertexAttrib4fv(G.location,Q);break;default:i.vertexAttrib1fv(G.location,Q)}}}}_()}function C(){T();for(const v in n){const A=n[v];for(const L in A){const z=A[L];for(const U in z)u(z[U].object),delete z[U];delete A[L]}delete n[v]}}function S(v){if(n[v.id]===void 0)return;const A=n[v.id];for(const L in A){const z=A[L];for(const U in z)u(z[U].object),delete z[U];delete A[L]}delete n[v.id]}function E(v){for(const A in n){const L=n[A];if(L[v.id]===void 0)continue;const z=L[v.id];for(const U in z)u(z[U].object),delete z[U];delete L[v.id]}}function T(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:M,enableAttribute:m,disableUnusedAttributes:_}}function hv(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let M=0;M<h;M++)g+=u[M]*d[M];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==ri&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const T=E===oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Ni&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==bi&&!T)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:C,maxSamples:S}}function dv(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Cs,a=new St,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const _=r?0:n,y=_*4;let x=f.clippingState||null;l.value=x,x=u(g,d,y,p);for(let C=0;C!==y;++C)x[C]=t[C];f.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const M=h!==null?h.length:0;let m=null;if(M!==0){if(m=l.value,g!==!0||m===null){const f=p+M*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,x=p;y!==M;++y,x+=4)o.copy(h[y]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function pv(i){let e=new WeakMap;function t(o,a){return a===Xl?o.mapping=Cr:a===ql&&(o.mapping=Rr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xl||a===ql)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new E0(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class lu extends ed{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vr=4,uh=[.125,.215,.35,.446,.526,.582],Ps=20,fl=new lu,hh=new Re;let dl=null,pl=0,ml=0,gl=!1;const Rs=(1+Math.sqrt(5))/2,hr=1/Rs,fh=[new V(-Rs,hr,0),new V(Rs,hr,0),new V(-hr,0,Rs),new V(hr,0,Rs),new V(0,Rs,-hr),new V(0,Rs,hr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class dh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){dl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dl,pl,ml),this._renderer.xr.enabled=gl,e.scissorTest=!1,$o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cr||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:oi,format:ri,colorSpace:Nr,depthBuffer:!1},s=ph(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ph(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mv(r)),this._blurMaterial=gv(r,e,t)}return s}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,fl)}_sceneToCubeUV(e,t,n,s){const a=new Zn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(hh),u.toneMapping=ps,u.autoClear=!1;const p=new Nt({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),g=new lt(new On,p);let M=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,M=!0):(p.color.copy(hh),M=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const y=this._cubeSize;$o(s,_*y,f>2?y:0,y,y),u.setRenderTarget(s),M&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Cr||e.mapping===Rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;$o(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,fl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fh[(s-r-1)%fh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new lt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ps-1),M=r/g,m=isFinite(r)?1+Math.floor(u*M):Ps;m>Ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ps}`);const f=[];let _=0;for(let E=0;E<Ps;++E){const T=E/M,b=Math.exp(-T*T/2);f.push(b),E===0?_+=b:E<m&&(_+=2*b)}for(let E=0;E<f.length;E++)f[E]=f[E]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[s],C=3*x*(s>y-vr?s-y+vr:0),S=4*(this._cubeSize-x);$o(t,C,S,3*x,2*x),l.setRenderTarget(t),l.render(h,fl)}}function mv(i){const e=[],t=[],n=[];let s=i;const r=i-vr+1+uh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-vr?l=uh[o-i+vr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,M=3,m=2,f=1,_=new Float32Array(M*g*p),y=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let S=0;S<p;S++){const E=S%3*2/3-1,T=S>2?0:-1,b=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];_.set(b,M*g*S),y.set(d,m*g*S);const v=[S,S,S,S,S,S];x.set(v,f*g*S)}const C=new Ot;C.setAttribute("position",new qt(_,M)),C.setAttribute("uv",new qt(y,m)),C.setAttribute("faceIndex",new qt(x,f)),e.push(C),s>vr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ph(i,e,t){const n=new Xn(i,e,t);return n.texture.mapping=Pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $o(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function gv(i,e,t){const n=new Float32Array(Ps),s=new V(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function mh(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function gh(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function cu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xl||l===ql,u=l===Cr||l===Rr;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new dh(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new dh(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function xv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Qr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _v(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const M=d.morphAttributes[g];for(let m=0,f=M.length;m<f;m++)e.remove(M[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const M=p[g];for(let m=0,f=M.length;m<f;m++)e.update(M[m],i.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let M=0;if(p!==null){const _=p.array;M=p.version;for(let y=0,x=_.length;y<x;y+=3){const C=_[y+0],S=_[y+1],E=_[y+2];d.push(C,S,S,E,E,C)}}else if(g!==void 0){const _=g.array;M=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const C=y+0,S=y+1,E=y+2;d.push(C,S,S,E,E,C)}}else return;const m=new(Yf(d)?Jf:Zf)(d,1);m.version=M;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Mv(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function h(d,p,g,M){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],M[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,M,0,g);let f=0;for(let _=0;_<g;_++)f+=p[_]*M[_];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function yv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function bv(i,e,t){const n=new WeakMap,s=new Wt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let b=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),M===!0&&(y=3);let x=a.attributes.position.count*y,C=1;x>e.maxTextureSize&&(C=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const S=new Float32Array(x*C*4*h),E=new jf(S,x,C,h);E.type=bi,E.needsUpdate=!0;const T=y*4;for(let v=0;v<h;v++){const A=m[v],L=f[v],z=_[v],U=x*C*4*v;for(let W=0;W<A.count;W++){const D=W*T;p===!0&&(s.fromBufferAttribute(A,W),S[U+D+0]=s.x,S[U+D+1]=s.y,S[U+D+2]=s.z,S[U+D+3]=0),g===!0&&(s.fromBufferAttribute(L,W),S[U+D+4]=s.x,S[U+D+5]=s.y,S[U+D+6]=s.z,S[U+D+7]=0),M===!0&&(s.fromBufferAttribute(z,W),S[U+D+8]=s.x,S[U+D+9]=s.y,S[U+D+10]=s.z,S[U+D+11]=z.itemSize===4?s.w:1)}}d={count:h,texture:E,size:new Ae(x,C)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Sv(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class uu extends Un{constructor(e,t,n,s,r,o,a,l,c,u=_r){if(u!==_r&&u!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===_r&&(n=Os),n===void 0&&u===Gs&&(n=Bs),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const id=new Un,vh=new uu(1,1),sd=new jf,rd=new u0,od=new td,xh=[],_h=[],Mh=new Float32Array(16),yh=new Float32Array(9),bh=new Float32Array(4);function Or(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=xh[s];if(r===void 0&&(r=new Float32Array(s),xh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function gn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ia(i,e){let t=_h[e];t===void 0&&(t=new Int32Array(e),_h[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2fv(this.addr,e),vn(t,e)}}function Tv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;i.uniform3fv(this.addr,e),vn(t,e)}}function Av(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4fv(this.addr,e),vn(t,e)}}function Cv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,n))return;bh.set(n),i.uniformMatrix2fv(this.addr,!1,bh),vn(t,n)}}function Rv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,n))return;yh.set(n),i.uniformMatrix3fv(this.addr,!1,yh),vn(t,n)}}function Pv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,n))return;Mh.set(n),i.uniformMatrix4fv(this.addr,!1,Mh),vn(t,n)}}function Lv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Dv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2iv(this.addr,e),vn(t,e)}}function Iv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3iv(this.addr,e),vn(t,e)}}function Uv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4iv(this.addr,e),vn(t,e)}}function zv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Nv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2uiv(this.addr,e),vn(t,e)}}function Fv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3uiv(this.addr,e),vn(t,e)}}function kv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4uiv(this.addr,e),vn(t,e)}}function Ov(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vh.compareFunction=qf,r=vh):r=id,t.setTexture2D(e||r,s)}function Bv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||rd,s)}function Gv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||od,s)}function Vv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||sd,s)}function Hv(i){switch(i){case 5126:return wv;case 35664:return Ev;case 35665:return Tv;case 35666:return Av;case 35674:return Cv;case 35675:return Rv;case 35676:return Pv;case 5124:case 35670:return Lv;case 35667:case 35671:return Dv;case 35668:case 35672:return Iv;case 35669:case 35673:return Uv;case 5125:return zv;case 36294:return Nv;case 36295:return Fv;case 36296:return kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return Gv;case 36289:case 36303:case 36311:case 36292:return Vv}}function Wv(i,e){i.uniform1fv(this.addr,e)}function Xv(i,e){const t=Or(e,this.size,2);i.uniform2fv(this.addr,t)}function qv(i,e){const t=Or(e,this.size,3);i.uniform3fv(this.addr,t)}function Yv(i,e){const t=Or(e,this.size,4);i.uniform4fv(this.addr,t)}function $v(i,e){const t=Or(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jv(i,e){const t=Or(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Kv(i,e){const t=Or(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Zv(i,e){i.uniform1iv(this.addr,e)}function Jv(i,e){i.uniform2iv(this.addr,e)}function Qv(i,e){i.uniform3iv(this.addr,e)}function ex(i,e){i.uniform4iv(this.addr,e)}function tx(i,e){i.uniform1uiv(this.addr,e)}function nx(i,e){i.uniform2uiv(this.addr,e)}function ix(i,e){i.uniform3uiv(this.addr,e)}function sx(i,e){i.uniform4uiv(this.addr,e)}function rx(i,e,t){const n=this.cache,s=e.length,r=Ia(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||id,r[o])}function ox(i,e,t){const n=this.cache,s=e.length,r=Ia(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||rd,r[o])}function ax(i,e,t){const n=this.cache,s=e.length,r=Ia(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||od,r[o])}function lx(i,e,t){const n=this.cache,s=e.length,r=Ia(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||sd,r[o])}function cx(i){switch(i){case 5126:return Wv;case 35664:return Xv;case 35665:return qv;case 35666:return Yv;case 35674:return $v;case 35675:return jv;case 35676:return Kv;case 5124:case 35670:return Zv;case 35667:case 35671:return Jv;case 35668:case 35672:return Qv;case 35669:case 35673:return ex;case 5125:return tx;case 36294:return nx;case 36295:return ix;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return ax;case 36289:case 36303:case 36311:case 36292:return lx}}class ux{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hv(t.type)}}class hx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cx(t.type)}}class fx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const vl=/(\w+)(\])?(\[|\.)?/g;function Sh(i,e){i.seq.push(e),i.map[e.id]=e}function dx(i,e,t){const n=i.name,s=n.length;for(vl.lastIndex=0;;){const r=vl.exec(n),o=vl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Sh(t,c===void 0?new ux(a,i,e):new hx(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new fx(a),Sh(t,h)),t=h}}}class xa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);dx(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function wh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const px=37297;let mx=0;function gx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Eh=new St;function vx(i){Ut._getMatrix(Eh,Ut.workingColorSpace,i);const e=`mat3( ${Eh.elements.map(t=>t.toFixed(4))} )`;switch(Ut.getTransfer(i)){case Da:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Th(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+gx(i.getShaderSource(e),o)}else return s}function xx(i,e){const t=vx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _x(i,e){let t;switch(e){case Lf:t="Linear";break;case Df:t="Reinhard";break;case If:t="Cineon";break;case Kc:t="ACESFilmic";break;case Uf:t="AgX";break;case zf:t="Neutral";break;case Cp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jo=new V;function Mx(){Ut.getLuminanceCoefficients(jo);const i=jo.x.toFixed(4),e=jo.y.toFixed(4),t=jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function bx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function eo(i){return i!==""}function Ah(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ch(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(i){return i.replace(wx,Tx)}const Ex=new Map;function Tx(i,e){let t=Tt[e];if(t===void 0){const n=Ex.get(e);if(n!==void 0)t=Tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yc(t)}const Ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rh(i){return i.replace(Ax,Cx)}function Cx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ph(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function Px(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Cr:case Rr:e="ENVMAP_TYPE_CUBE";break;case Pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Rr:e="ENVMAP_MODE_REFRACTION";break}return e}function Dx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jc:e="ENVMAP_BLENDING_MULTIPLY";break;case Tp:e="ENVMAP_BLENDING_MIX";break;case Ap:e="ENVMAP_BLENDING_ADD";break}return e}function Ix(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ux(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Rx(t),c=Px(t),u=Lx(t),h=Dx(t),d=Ix(t),p=yx(t),g=bx(r),M=s.createProgram();let m,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(eo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(eo).join(`
`),f.length>0&&(f+=`
`)):(m=[Ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),f=[Ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ps?"#define TONE_MAPPING":"",t.toneMapping!==ps?Tt.tonemapping_pars_fragment:"",t.toneMapping!==ps?_x("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,xx("linearToOutputTexel",t.outputColorSpace),Mx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(eo).join(`
`)),o=yc(o),o=Ah(o,t),o=Ch(o,t),a=yc(a),a=Ah(a,t),a=Ch(a,t),o=Rh(o),a=Rh(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=_+m+o,x=_+f+a,C=wh(s,s.VERTEX_SHADER,y),S=wh(s,s.FRAGMENT_SHADER,x);s.attachShader(M,C),s.attachShader(M,S),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function E(A){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(M).trim(),z=s.getShaderInfoLog(C).trim(),U=s.getShaderInfoLog(S).trim();let W=!0,D=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,C,S);else{const k=Th(s,C,"vertex"),G=Th(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+k+`
`+G)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(z===""||U==="")&&(D=!1);D&&(A.diagnostics={runnable:W,programLog:L,vertexShader:{log:z,prefix:m},fragmentShader:{log:U,prefix:f}})}s.deleteShader(C),s.deleteShader(S),T=new xa(s,M),b=Sx(s,M)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(M,px)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mx++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=S,this}let zx=0;class Nx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Fx(e),t.set(e,n)),n}}class Fx{constructor(e){this.id=zx++,this.code=e,this.usedTimes=0}}function kx(i,e,t,n,s,r,o){const a=new ou,l=new Nx,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,v,A,L,z){const U=L.fog,W=z.geometry,D=b.isMeshStandardMaterial?L.environment:null,k=(b.isMeshStandardMaterial?t:e).get(b.envMap||D),G=k&&k.mapping===Pa?k.image.height:null,Y=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const Q=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,se=Q!==void 0?Q.length:0;let Ee=0;W.morphAttributes.position!==void 0&&(Ee=1),W.morphAttributes.normal!==void 0&&(Ee=2),W.morphAttributes.color!==void 0&&(Ee=3);let ke,H,Z,he;if(Y){const At=Li[Y];ke=At.vertexShader,H=At.fragmentShader}else ke=b.vertexShader,H=b.fragmentShader,l.update(b),Z=l.getVertexShaderID(b),he=l.getFragmentShaderID(b);const oe=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Le=z.isInstancedMesh===!0,Ue=z.isBatchedMesh===!0,Xe=!!b.map,de=!!b.matcap,Me=!!k,B=!!b.aoMap,$e=!!b.lightMap,be=!!b.bumpMap,Oe=!!b.normalMap,Ie=!!b.displacementMap,nt=!!b.emissiveMap,j=!!b.metalnessMap,R=!!b.roughnessMap,w=b.anisotropy>0,X=b.clearcoat>0,ne=b.dispersion>0,ie=b.iridescence>0,re=b.sheen>0,Fe=b.transmission>0,Se=w&&!!b.anisotropyMap,De=X&&!!b.clearcoatMap,ot=X&&!!b.clearcoatNormalMap,we=X&&!!b.clearcoatRoughnessMap,je=ie&&!!b.iridescenceMap,at=ie&&!!b.iridescenceThicknessMap,ut=re&&!!b.sheenColorMap,Je=re&&!!b.sheenRoughnessMap,wt=!!b.specularMap,ht=!!b.specularColorMap,Et=!!b.specularIntensityMap,$=Fe&&!!b.transmissionMap,Ne=Fe&&!!b.thicknessMap,le=!!b.gradientMap,_e=!!b.alphaMap,Ve=b.alphaTest>0,He=!!b.alphaHash,ft=!!b.extensions;let Bt=ps;b.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Bt=i.toneMapping);const Vt={shaderID:Y,shaderType:b.type,shaderName:b.name,vertexShader:ke,fragmentShader:H,defines:b.defines,customVertexShaderID:Z,customFragmentShaderID:he,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ue,batchingColor:Ue&&z._colorsTexture!==null,instancing:Le,instancingColor:Le&&z.instanceColor!==null,instancingMorph:Le&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Nr,alphaToCoverage:!!b.alphaToCoverage,map:Xe,matcap:de,envMap:Me,envMapMode:Me&&k.mapping,envMapCubeUVHeight:G,aoMap:B,lightMap:$e,bumpMap:be,normalMap:Oe,displacementMap:d&&Ie,emissiveMap:nt,normalMapObjectSpace:Oe&&b.normalMapType===Dp,normalMapTangentSpace:Oe&&b.normalMapType===iu,metalnessMap:j,roughnessMap:R,anisotropy:w,anisotropyMap:Se,clearcoat:X,clearcoatMap:De,clearcoatNormalMap:ot,clearcoatRoughnessMap:we,dispersion:ne,iridescence:ie,iridescenceMap:je,iridescenceThicknessMap:at,sheen:re,sheenColorMap:ut,sheenRoughnessMap:Je,specularMap:wt,specularColorMap:ht,specularIntensityMap:Et,transmission:Fe,transmissionMap:$,thicknessMap:Ne,gradientMap:le,opaque:b.transparent===!1&&b.blending===ds&&b.alphaToCoverage===!1,alphaMap:_e,alphaTest:Ve,alphaHash:He,combine:b.combine,mapUv:Xe&&M(b.map.channel),aoMapUv:B&&M(b.aoMap.channel),lightMapUv:$e&&M(b.lightMap.channel),bumpMapUv:be&&M(b.bumpMap.channel),normalMapUv:Oe&&M(b.normalMap.channel),displacementMapUv:Ie&&M(b.displacementMap.channel),emissiveMapUv:nt&&M(b.emissiveMap.channel),metalnessMapUv:j&&M(b.metalnessMap.channel),roughnessMapUv:R&&M(b.roughnessMap.channel),anisotropyMapUv:Se&&M(b.anisotropyMap.channel),clearcoatMapUv:De&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:ot&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:at&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:Je&&M(b.sheenRoughnessMap.channel),specularMapUv:wt&&M(b.specularMap.channel),specularColorMapUv:ht&&M(b.specularColorMap.channel),specularIntensityMapUv:Et&&M(b.specularIntensityMap.channel),transmissionMapUv:$&&M(b.transmissionMap.channel),thicknessMapUv:Ne&&M(b.thicknessMap.channel),alphaMapUv:_e&&M(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Oe||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(Xe||_e),fog:!!U,useFog:b.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:me,skinning:z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ee,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Xe&&b.map.isVideoTexture===!0&&Ut.getTransfer(b.map.colorSpace)===Gt,decodeVideoTextureEmissive:nt&&b.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(b.emissiveMap.colorSpace)===Gt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===cn,flipSided:b.side===Vn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ft&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&b.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function f(b){const v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(const A in b.defines)v.push(A),v.push(b.defines[A]);return b.isRawShaderMaterial===!1&&(_(v,b),y(v,b),v.push(i.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function _(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function y(b,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const v=g[b.type];let A;if(v){const L=Li[v];A=_i.clone(L.uniforms)}else A=b.uniforms;return A}function C(b,v){let A;for(let L=0,z=u.length;L<z;L++){const U=u[L];if(U.cacheKey===v){A=U,++A.usedTimes;break}}return A===void 0&&(A=new Ux(i,v,b,r),u.push(A)),A}function S(b){if(--b.usedTimes===0){const v=u.indexOf(b);u[v]=u[u.length-1],u.pop(),b.destroy()}}function E(b){l.remove(b)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:C,releaseProgram:S,releaseShaderCache:E,programs:u,dispose:T}}function Ox(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Bx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Lh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Dh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,p,g,M,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:M,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=M,f.group=m),e++,f}function a(h,d,p,g,M,m){const f=o(h,d,p,g,M,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(h,d,p,g,M,m){const f=o(h,d,p,g,M,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||Bx),n.length>1&&n.sort(d||Lh),s.length>1&&s.sort(d||Lh)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Gx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Dh,i.set(n,[o])):s>=r.length?(o=new Dh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Vx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Re};break;case"SpotLight":t={position:new V,direction:new V,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function Hx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Wx=0;function Xx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qx(i){const e=new Vx,t=Hx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);const s=new V,r=new zt,o=new zt;function a(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,M=0,m=0,f=0,_=0,y=0,x=0,C=0,S=0,E=0;c.sort(Xx);for(let b=0,v=c.length;b<v;b++){const A=c[b],L=A.color,z=A.intensity,U=A.distance,W=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=L.r*z,h+=L.g*z,d+=L.b*z;else if(A.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(A.sh.coefficients[D],z);E++}else if(A.isDirectionalLight){const D=e.get(A);if(D.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const k=A.shadow,G=t.get(A);G.shadowIntensity=k.intensity,G.shadowBias=k.bias,G.shadowNormalBias=k.normalBias,G.shadowRadius=k.radius,G.shadowMapSize=k.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=A.shadow.matrix,_++}n.directional[p]=D,p++}else if(A.isSpotLight){const D=e.get(A);D.position.setFromMatrixPosition(A.matrixWorld),D.color.copy(L).multiplyScalar(z),D.distance=U,D.coneCos=Math.cos(A.angle),D.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),D.decay=A.decay,n.spot[M]=D;const k=A.shadow;if(A.map&&(n.spotLightMap[C]=A.map,C++,k.updateMatrices(A),A.castShadow&&S++),n.spotLightMatrix[M]=k.matrix,A.castShadow){const G=t.get(A);G.shadowIntensity=k.intensity,G.shadowBias=k.bias,G.shadowNormalBias=k.normalBias,G.shadowRadius=k.radius,G.shadowMapSize=k.mapSize,n.spotShadow[M]=G,n.spotShadowMap[M]=W,x++}M++}else if(A.isRectAreaLight){const D=e.get(A);D.color.copy(L).multiplyScalar(z),D.halfWidth.set(A.width*.5,0,0),D.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=D,m++}else if(A.isPointLight){const D=e.get(A);if(D.color.copy(A.color).multiplyScalar(A.intensity),D.distance=A.distance,D.decay=A.decay,A.castShadow){const k=A.shadow,G=t.get(A);G.shadowIntensity=k.intensity,G.shadowBias=k.bias,G.shadowNormalBias=k.normalBias,G.shadowRadius=k.radius,G.shadowMapSize=k.mapSize,G.shadowCameraNear=k.camera.near,G.shadowCameraFar=k.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=A.shadow.matrix,y++}n.point[g]=D,g++}else if(A.isHemisphereLight){const D=e.get(A);D.skyColor.copy(A.color).multiplyScalar(z),D.groundColor.copy(A.groundColor).multiplyScalar(z),n.hemi[f]=D,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=qe.LTC_FLOAT_1,n.rectAreaLTC2=qe.LTC_FLOAT_2):(n.rectAreaLTC1=qe.LTC_HALF_1,n.rectAreaLTC2=qe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const T=n.hash;(T.directionalLength!==p||T.pointLength!==g||T.spotLength!==M||T.rectAreaLength!==m||T.hemiLength!==f||T.numDirectionalShadows!==_||T.numPointShadows!==y||T.numSpotShadows!==x||T.numSpotMaps!==C||T.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=M,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+C-S,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,T.directionalLength=p,T.pointLength=g,T.spotLength=M,T.rectAreaLength=m,T.hemiLength=f,T.numDirectionalShadows=_,T.numPointShadows=y,T.numSpotShadows=x,T.numSpotMaps=C,T.numLightProbes=E,n.version=Wx++)}function l(c,u){let h=0,d=0,p=0,g=0,M=0;const m=u.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){const y=c[f];if(y.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(y.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[M];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:n}}function Ih(i){const e=new qx(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Yx(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ih(i),e.set(s,[a])):r>=o.length?(a=new Ih(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class $x extends Ys{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jx extends Ys{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jx(i,e,t){let n=new au;const s=new Ae,r=new Ae,o=new Wt,a=new $x({depthPacking:Lp}),l=new jx,c={},u=t.maxTextureSize,h={[gs]:Vn,[Vn]:gs,[cn]:cn},d=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Kx,fragmentShader:Zx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ot;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new lt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cf;let f=this.type;this.render=function(S,E,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const b=i.getRenderTarget(),v=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),L=i.state;L.setBlending(wn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const z=f!==$i&&this.type===$i,U=f===$i&&this.type!==$i;for(let W=0,D=S.length;W<D;W++){const k=S[W],G=k.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const Y=G.getFrameExtents();if(s.multiply(Y),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,G.mapSize.y=r.y)),G.map===null||z===!0||U===!0){const se=this.type!==$i?{minFilter:Tn,magFilter:Tn}:{};G.map!==null&&G.map.dispose(),G.map=new Xn(s.x,s.y,se),G.map.texture.name=k.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const Q=G.getViewportCount();for(let se=0;se<Q;se++){const Ee=G.getViewport(se);o.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),L.viewport(o),G.updateMatrices(k,se),n=G.getFrustum(),x(E,T,G.camera,k,this.type)}G.isPointLightShadow!==!0&&this.type===$i&&_(G,T),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,v,A)};function _(S,E){const T=e.update(M);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Xn(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,T,d,M,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,T,p,M,null)}function y(S,E,T,b){let v=null;const A=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)v=A;else if(v=T.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const L=v.uuid,z=E.uuid;let U=c[L];U===void 0&&(U={},c[L]=U);let W=U[z];W===void 0&&(W=v.clone(),U[z]=W,E.addEventListener("dispose",C)),v=W}if(v.visible=E.visible,v.wireframe=E.wireframe,b===$i?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:h[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,T.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const L=i.properties.get(v);L.light=T}return v}function x(S,E,T,b,v){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===$i)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);const z=e.update(S),U=S.material;if(Array.isArray(U)){const W=z.groups;for(let D=0,k=W.length;D<k;D++){const G=W[D],Y=U[G.materialIndex];if(Y&&Y.visible){const Q=y(S,Y,b,v);S.onBeforeShadow(i,S,E,T,z,Q,G),i.renderBufferDirect(T,null,z,Q,S,G),S.onAfterShadow(i,S,E,T,z,Q,G)}}}else if(U.visible){const W=y(S,U,b,v);S.onBeforeShadow(i,S,E,T,z,W,null),i.renderBufferDirect(T,null,z,W,S,null),S.onAfterShadow(i,S,E,T,z,W,null)}}const L=S.children;for(let z=0,U=L.length;z<U;z++)x(L[z],E,T,b,v)}function C(S){S.target.removeEventListener("dispose",C);for(const T in c){const b=c[T],v=S.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}const Qx={[kl]:Ol,[Bl]:Hl,[Gl]:Wl,[Ar]:Vl,[Ol]:kl,[Hl]:Bl,[Wl]:Gl,[Vl]:Ar};function e1(i,e){function t(){let $=!1;const Ne=new Wt;let le=null;const _e=new Wt(0,0,0,0);return{setMask:function(Ve){le!==Ve&&!$&&(i.colorMask(Ve,Ve,Ve,Ve),le=Ve)},setLocked:function(Ve){$=Ve},setClear:function(Ve,He,ft,Bt,Vt){Vt===!0&&(Ve*=Bt,He*=Bt,ft*=Bt),Ne.set(Ve,He,ft,Bt),_e.equals(Ne)===!1&&(i.clearColor(Ve,He,ft,Bt),_e.copy(Ne))},reset:function(){$=!1,le=null,_e.set(-1,0,0,0)}}}function n(){let $=!1,Ne=!1,le=null,_e=null,Ve=null;return{setReversed:function(He){if(Ne!==He){const ft=e.get("EXT_clip_control");Ne?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT);const Bt=Ve;Ve=null,this.setClear(Bt)}Ne=He},getReversed:function(){return Ne},setTest:function(He){He?oe(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(He){le!==He&&!$&&(i.depthMask(He),le=He)},setFunc:function(He){if(Ne&&(He=Qx[He]),_e!==He){switch(He){case kl:i.depthFunc(i.NEVER);break;case Ol:i.depthFunc(i.ALWAYS);break;case Bl:i.depthFunc(i.LESS);break;case Ar:i.depthFunc(i.LEQUAL);break;case Gl:i.depthFunc(i.EQUAL);break;case Vl:i.depthFunc(i.GEQUAL);break;case Hl:i.depthFunc(i.GREATER);break;case Wl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=He}},setLocked:function(He){$=He},setClear:function(He){Ve!==He&&(Ne&&(He=1-He),i.clearDepth(He),Ve=He)},reset:function(){$=!1,le=null,_e=null,Ve=null,Ne=!1}}}function s(){let $=!1,Ne=null,le=null,_e=null,Ve=null,He=null,ft=null,Bt=null,Vt=null;return{setTest:function(At){$||(At?oe(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(At){Ne!==At&&!$&&(i.stencilMask(At),Ne=At)},setFunc:function(At,Cn,Sn){(le!==At||_e!==Cn||Ve!==Sn)&&(i.stencilFunc(At,Cn,Sn),le=At,_e=Cn,Ve=Sn)},setOp:function(At,Cn,Sn){(He!==At||ft!==Cn||Bt!==Sn)&&(i.stencilOp(At,Cn,Sn),He=At,ft=Cn,Bt=Sn)},setLocked:function(At){$=At},setClear:function(At){Vt!==At&&(i.clearStencil(At),Vt=At)},reset:function(){$=!1,Ne=null,le=null,_e=null,Ve=null,He=null,ft=null,Bt=null,Vt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,M=!1,m=null,f=null,_=null,y=null,x=null,C=null,S=null,E=new Re(0,0,0),T=0,b=!1,v=null,A=null,L=null,z=null,U=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,k=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(G)[1]),D=k>=1):G.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),D=k>=2);let Y=null,Q={};const se=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),ke=new Wt().fromArray(se),H=new Wt().fromArray(Ee);function Z($,Ne,le,_e){const Ve=new Uint8Array(4),He=i.createTexture();i.bindTexture($,He),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<le;ft++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(Ne,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,Ve):i.texImage2D(Ne+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ve);return He}const he={};he[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(Ar),be(!1),Oe(Fu),oe(i.CULL_FACE),B(wn);function oe($){u[$]!==!0&&(i.enable($),u[$]=!0)}function me($){u[$]!==!1&&(i.disable($),u[$]=!1)}function Le($,Ne){return h[$]!==Ne?(i.bindFramebuffer($,Ne),h[$]=Ne,$===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ne),$===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ue($,Ne){let le=p,_e=!1;if($){le=d.get(Ne),le===void 0&&(le=[],d.set(Ne,le));const Ve=$.textures;if(le.length!==Ve.length||le[0]!==i.COLOR_ATTACHMENT0){for(let He=0,ft=Ve.length;He<ft;He++)le[He]=i.COLOR_ATTACHMENT0+He;le.length=Ve.length,_e=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,_e=!0);_e&&i.drawBuffers(le)}function Xe($){return g!==$?(i.useProgram($),g=$,!0):!1}const de={[vi]:i.FUNC_ADD,[fp]:i.FUNC_SUBTRACT,[dp]:i.FUNC_REVERSE_SUBTRACT};de[pp]=i.MIN,de[mp]=i.MAX;const Me={[Jr]:i.ZERO,[gp]:i.ONE,[vp]:i.SRC_COLOR,[Ul]:i.SRC_ALPHA,[yp]:i.SRC_ALPHA_SATURATE,[Fl]:i.DST_COLOR,[Nl]:i.DST_ALPHA,[xp]:i.ONE_MINUS_SRC_COLOR,[zl]:i.ONE_MINUS_SRC_ALPHA,[Mp]:i.ONE_MINUS_DST_COLOR,[_p]:i.ONE_MINUS_DST_ALPHA,[bp]:i.CONSTANT_COLOR,[Sp]:i.ONE_MINUS_CONSTANT_COLOR,[wp]:i.CONSTANT_ALPHA,[Ep]:i.ONE_MINUS_CONSTANT_ALPHA};function B($,Ne,le,_e,Ve,He,ft,Bt,Vt,At){if($===wn){M===!0&&(me(i.BLEND),M=!1);return}if(M===!1&&(oe(i.BLEND),M=!0),$!==Pf){if($!==m||At!==b){if((f!==vi||x!==vi)&&(i.blendEquation(i.FUNC_ADD),f=vi,x=vi),At)switch($){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ti:i.blendFunc(i.ONE,i.ONE);break;case ku:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ou:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ti:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ku:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ou:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}_=null,y=null,C=null,S=null,E.set(0,0,0),T=0,m=$,b=At}return}Ve=Ve||Ne,He=He||le,ft=ft||_e,(Ne!==f||Ve!==x)&&(i.blendEquationSeparate(de[Ne],de[Ve]),f=Ne,x=Ve),(le!==_||_e!==y||He!==C||ft!==S)&&(i.blendFuncSeparate(Me[le],Me[_e],Me[He],Me[ft]),_=le,y=_e,C=He,S=ft),(Bt.equals(E)===!1||Vt!==T)&&(i.blendColor(Bt.r,Bt.g,Bt.b,Vt),E.copy(Bt),T=Vt),m=$,b=!1}function $e($,Ne){$.side===cn?me(i.CULL_FACE):oe(i.CULL_FACE);let le=$.side===Vn;Ne&&(le=!le),be(le),$.blending===ds&&$.transparent===!1?B(wn):B($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),o.setFunc($.depthFunc),o.setTest($.depthTest),o.setMask($.depthWrite),r.setMask($.colorWrite);const _e=$.stencilWrite;a.setTest(_e),_e&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),nt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function be($){v!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),v=$)}function Oe($){$!==up?(oe(i.CULL_FACE),$!==A&&($===Fu?i.cullFace(i.BACK):$===hp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),A=$}function Ie($){$!==L&&(D&&i.lineWidth($),L=$)}function nt($,Ne,le){$?(oe(i.POLYGON_OFFSET_FILL),(z!==Ne||U!==le)&&(i.polygonOffset(Ne,le),z=Ne,U=le)):me(i.POLYGON_OFFSET_FILL)}function j($){$?oe(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function R($){$===void 0&&($=i.TEXTURE0+W-1),Y!==$&&(i.activeTexture($),Y=$)}function w($,Ne,le){le===void 0&&(Y===null?le=i.TEXTURE0+W-1:le=Y);let _e=Q[le];_e===void 0&&(_e={type:void 0,texture:void 0},Q[le]=_e),(_e.type!==$||_e.texture!==Ne)&&(Y!==le&&(i.activeTexture(le),Y=le),i.bindTexture($,Ne||he[$]),_e.type=$,_e.texture=Ne)}function X(){const $=Q[Y];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Fe(){try{i.texSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function De(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ot(){try{i.texStorage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function we(){try{i.texStorage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function je(){try{i.texImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function at(){try{i.texImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ut($){ke.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),ke.copy($))}function Je($){H.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),H.copy($))}function wt($,Ne){let le=c.get(Ne);le===void 0&&(le=new WeakMap,c.set(Ne,le));let _e=le.get($);_e===void 0&&(_e=i.getUniformBlockIndex(Ne,$.name),le.set($,_e))}function ht($,Ne){const _e=c.get(Ne).get($);l.get(Ne)!==_e&&(i.uniformBlockBinding(Ne,_e,$.__bindingPointIndex),l.set(Ne,_e))}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Y=null,Q={},h={},d=new WeakMap,p=[],g=null,M=!1,m=null,f=null,_=null,y=null,x=null,C=null,S=null,E=new Re(0,0,0),T=0,b=!1,v=null,A=null,L=null,z=null,U=null,ke.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:me,bindFramebuffer:Le,drawBuffers:Ue,useProgram:Xe,setBlending:B,setMaterial:$e,setFlipSided:be,setCullFace:Oe,setLineWidth:Ie,setPolygonOffset:nt,setScissorTest:j,activeTexture:R,bindTexture:w,unbindTexture:X,compressedTexImage2D:ne,compressedTexImage3D:ie,texImage2D:je,texImage3D:at,updateUBOMapping:wt,uniformBlockBinding:ht,texStorage2D:ot,texStorage3D:we,texSubImage2D:re,texSubImage3D:Fe,compressedTexSubImage2D:Se,compressedTexSubImage3D:De,scissor:ut,viewport:Je,reset:Et}}function Uh(i,e,t,n){const s=t1(n);switch(t){case Bf:return i*e;case Vf:return i*e;case Hf:return i*e*2;case La:return i*e/s.components*s.byteLength;case eu:return i*e/s.components*s.byteLength;case Wf:return i*e*2/s.components*s.byteLength;case tu:return i*e*2/s.components*s.byteLength;case Gf:return i*e*3/s.components*s.byteLength;case ri:return i*e*4/s.components*s.byteLength;case nu:return i*e*4/s.components*s.byteLength;case da:case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jl:case Zl:return Math.max(i,16)*Math.max(e,8)/4;case $l:case Kl:return Math.max(i,8)*Math.max(e,8)/2;case Jl:case Ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ic:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case rc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case oc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case uc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case hc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case fc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case dc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case pc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case va:case mc:case gc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xf:case vc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xc:case _c:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function t1(i){switch(i){case Ni:case Ff:return{byteLength:1,components:1};case ho:case kf:case oi:return{byteLength:2,components:1};case Jc:case Qc:return{byteLength:2,components:4};case Os:case Zc:case bi:return{byteLength:4,components:1};case Of:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function n1(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return p?new OffscreenCanvas(R,w):wa("canvas")}function M(R,w,X){let ne=1;const ie=j(R);if((ie.width>X||ie.height>X)&&(ne=X/Math.max(ie.width,ie.height)),ne<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const re=Math.floor(ne*ie.width),Fe=Math.floor(ne*ie.height);h===void 0&&(h=g(re,Fe));const Se=w?g(re,Fe):h;return Se.width=re,Se.height=Fe,Se.getContext("2d").drawImage(R,0,0,re,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+re+"x"+Fe+")."),Se}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){i.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,w,X,ne,ie=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let re=w;if(w===i.RED&&(X===i.FLOAT&&(re=i.R32F),X===i.HALF_FLOAT&&(re=i.R16F),X===i.UNSIGNED_BYTE&&(re=i.R8)),w===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.R8UI),X===i.UNSIGNED_SHORT&&(re=i.R16UI),X===i.UNSIGNED_INT&&(re=i.R32UI),X===i.BYTE&&(re=i.R8I),X===i.SHORT&&(re=i.R16I),X===i.INT&&(re=i.R32I)),w===i.RG&&(X===i.FLOAT&&(re=i.RG32F),X===i.HALF_FLOAT&&(re=i.RG16F),X===i.UNSIGNED_BYTE&&(re=i.RG8)),w===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.RG8UI),X===i.UNSIGNED_SHORT&&(re=i.RG16UI),X===i.UNSIGNED_INT&&(re=i.RG32UI),X===i.BYTE&&(re=i.RG8I),X===i.SHORT&&(re=i.RG16I),X===i.INT&&(re=i.RG32I)),w===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.RGB8UI),X===i.UNSIGNED_SHORT&&(re=i.RGB16UI),X===i.UNSIGNED_INT&&(re=i.RGB32UI),X===i.BYTE&&(re=i.RGB8I),X===i.SHORT&&(re=i.RGB16I),X===i.INT&&(re=i.RGB32I)),w===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),X===i.UNSIGNED_INT&&(re=i.RGBA32UI),X===i.BYTE&&(re=i.RGBA8I),X===i.SHORT&&(re=i.RGBA16I),X===i.INT&&(re=i.RGBA32I)),w===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),w===i.RGBA){const Fe=ie?Da:Ut.getTransfer(ne);X===i.FLOAT&&(re=i.RGBA32F),X===i.HALF_FLOAT&&(re=i.RGBA16F),X===i.UNSIGNED_BYTE&&(re=Fe===Gt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function x(R,w){let X;return R?w===null||w===Os||w===Bs?X=i.DEPTH24_STENCIL8:w===bi?X=i.DEPTH32F_STENCIL8:w===ho&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Os||w===Bs?X=i.DEPTH_COMPONENT24:w===bi?X=i.DEPTH_COMPONENT32F:w===ho&&(X=i.DEPTH_COMPONENT16),X}function C(R,w){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Tn&&R.minFilter!==Ii?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function S(R){const w=R.target;w.removeEventListener("dispose",S),T(w),w.isVideoTexture&&u.delete(w)}function E(R){const w=R.target;w.removeEventListener("dispose",E),v(w)}function T(R){const w=n.get(R);if(w.__webglInit===void 0)return;const X=R.source,ne=d.get(X);if(ne){const ie=ne[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&b(R),Object.keys(ne).length===0&&d.delete(X)}n.remove(R)}function b(R){const w=n.get(R);i.deleteTexture(w.__webglTexture);const X=R.source,ne=d.get(X);delete ne[w.__cacheKey],o.memory.textures--}function v(R){const w=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(w.__webglFramebuffer[ne]))for(let ie=0;ie<w.__webglFramebuffer[ne].length;ie++)i.deleteFramebuffer(w.__webglFramebuffer[ne][ie]);else i.deleteFramebuffer(w.__webglFramebuffer[ne]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ne])}else{if(Array.isArray(w.__webglFramebuffer))for(let ne=0;ne<w.__webglFramebuffer.length;ne++)i.deleteFramebuffer(w.__webglFramebuffer[ne]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ne=0;ne<w.__webglColorRenderbuffer.length;ne++)w.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ne]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=R.textures;for(let ne=0,ie=X.length;ne<ie;ne++){const re=n.get(X[ne]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),n.remove(X[ne])}n.remove(R)}let A=0;function L(){A=0}function z(){const R=A;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),A+=1,R}function U(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function W(R,w){const X=n.get(R);if(R.isVideoTexture&&Ie(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(X,R,w);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+w)}function D(R,w){const X=n.get(R);if(R.version>0&&X.__version!==R.version){H(X,R,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+w)}function k(R,w){const X=n.get(R);if(R.version>0&&X.__version!==R.version){H(X,R,w);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+w)}function G(R,w){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Z(X,R,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+w)}const Y={[zi]:i.REPEAT,[Ls]:i.CLAMP_TO_EDGE,[Yl]:i.MIRRORED_REPEAT},Q={[Tn]:i.NEAREST,[Rp]:i.NEAREST_MIPMAP_NEAREST,[Ro]:i.NEAREST_MIPMAP_LINEAR,[Ii]:i.LINEAR,[Xa]:i.LINEAR_MIPMAP_NEAREST,[Ds]:i.LINEAR_MIPMAP_LINEAR},se={[Ip]:i.NEVER,[Op]:i.ALWAYS,[Up]:i.LESS,[qf]:i.LEQUAL,[zp]:i.EQUAL,[kp]:i.GEQUAL,[Np]:i.GREATER,[Fp]:i.NOTEQUAL};function Ee(R,w){if(w.type===bi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ii||w.magFilter===Xa||w.magFilter===Ro||w.magFilter===Ds||w.minFilter===Ii||w.minFilter===Xa||w.minFilter===Ro||w.minFilter===Ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Y[w.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Y[w.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Y[w.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Q[w.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Q[w.minFilter]),w.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,se[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Tn||w.minFilter!==Ro&&w.minFilter!==Ds||w.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ke(R,w){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",S));const ne=w.source;let ie=d.get(ne);ie===void 0&&(ie={},d.set(ne,ie));const re=U(w);if(re!==R.__cacheKey){ie[re]===void 0&&(ie[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ie[re].usedTimes++;const Fe=ie[R.__cacheKey];Fe!==void 0&&(ie[R.__cacheKey].usedTimes--,Fe.usedTimes===0&&b(w)),R.__cacheKey=re,R.__webglTexture=ie[re].texture}return X}function H(R,w,X){let ne=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ne=i.TEXTURE_3D);const ie=ke(R,w),re=w.source;t.bindTexture(ne,R.__webglTexture,i.TEXTURE0+X);const Fe=n.get(re);if(re.version!==Fe.__version||ie===!0){t.activeTexture(i.TEXTURE0+X);const Se=Ut.getPrimaries(Ut.workingColorSpace),De=w.colorSpace===us?null:Ut.getPrimaries(w.colorSpace),ot=w.colorSpace===us||Se===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let we=M(w.image,!1,s.maxTextureSize);we=nt(w,we);const je=r.convert(w.format,w.colorSpace),at=r.convert(w.type);let ut=y(w.internalFormat,je,at,w.colorSpace,w.isVideoTexture);Ee(ne,w);let Je;const wt=w.mipmaps,ht=w.isVideoTexture!==!0,Et=Fe.__version===void 0||ie===!0,$=re.dataReady,Ne=C(w,we);if(w.isDepthTexture)ut=x(w.format===Gs,w.type),Et&&(ht?t.texStorage2D(i.TEXTURE_2D,1,ut,we.width,we.height):t.texImage2D(i.TEXTURE_2D,0,ut,we.width,we.height,0,je,at,null));else if(w.isDataTexture)if(wt.length>0){ht&&Et&&t.texStorage2D(i.TEXTURE_2D,Ne,ut,wt[0].width,wt[0].height);for(let le=0,_e=wt.length;le<_e;le++)Je=wt[le],ht?$&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Je.width,Je.height,je,at,Je.data):t.texImage2D(i.TEXTURE_2D,le,ut,Je.width,Je.height,0,je,at,Je.data);w.generateMipmaps=!1}else ht?(Et&&t.texStorage2D(i.TEXTURE_2D,Ne,ut,we.width,we.height),$&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we.width,we.height,je,at,we.data)):t.texImage2D(i.TEXTURE_2D,0,ut,we.width,we.height,0,je,at,we.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ht&&Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,ut,wt[0].width,wt[0].height,we.depth);for(let le=0,_e=wt.length;le<_e;le++)if(Je=wt[le],w.format!==ri)if(je!==null)if(ht){if($)if(w.layerUpdates.size>0){const Ve=Uh(Je.width,Je.height,w.format,w.type);for(const He of w.layerUpdates){const ft=Je.data.subarray(He*Ve/Je.data.BYTES_PER_ELEMENT,(He+1)*Ve/Je.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,He,Je.width,Je.height,1,je,ft)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Je.width,Je.height,we.depth,je,Je.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,ut,Je.width,Je.height,we.depth,0,Je.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?$&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Je.width,Je.height,we.depth,je,at,Je.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,ut,Je.width,Je.height,we.depth,0,je,at,Je.data)}else{ht&&Et&&t.texStorage2D(i.TEXTURE_2D,Ne,ut,wt[0].width,wt[0].height);for(let le=0,_e=wt.length;le<_e;le++)Je=wt[le],w.format!==ri?je!==null?ht?$&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,Je.width,Je.height,je,Je.data):t.compressedTexImage2D(i.TEXTURE_2D,le,ut,Je.width,Je.height,0,Je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?$&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Je.width,Je.height,je,at,Je.data):t.texImage2D(i.TEXTURE_2D,le,ut,Je.width,Je.height,0,je,at,Je.data)}else if(w.isDataArrayTexture)if(ht){if(Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,ut,we.width,we.height,we.depth),$)if(w.layerUpdates.size>0){const le=Uh(we.width,we.height,w.format,w.type);for(const _e of w.layerUpdates){const Ve=we.data.subarray(_e*le/we.data.BYTES_PER_ELEMENT,(_e+1)*le/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,we.width,we.height,1,je,at,Ve)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,je,at,we.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,we.width,we.height,we.depth,0,je,at,we.data);else if(w.isData3DTexture)ht?(Et&&t.texStorage3D(i.TEXTURE_3D,Ne,ut,we.width,we.height,we.depth),$&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,je,at,we.data)):t.texImage3D(i.TEXTURE_3D,0,ut,we.width,we.height,we.depth,0,je,at,we.data);else if(w.isFramebufferTexture){if(Et)if(ht)t.texStorage2D(i.TEXTURE_2D,Ne,ut,we.width,we.height);else{let le=we.width,_e=we.height;for(let Ve=0;Ve<Ne;Ve++)t.texImage2D(i.TEXTURE_2D,Ve,ut,le,_e,0,je,at,null),le>>=1,_e>>=1}}else if(wt.length>0){if(ht&&Et){const le=j(wt[0]);t.texStorage2D(i.TEXTURE_2D,Ne,ut,le.width,le.height)}for(let le=0,_e=wt.length;le<_e;le++)Je=wt[le],ht?$&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,je,at,Je):t.texImage2D(i.TEXTURE_2D,le,ut,je,at,Je);w.generateMipmaps=!1}else if(ht){if(Et){const le=j(we);t.texStorage2D(i.TEXTURE_2D,Ne,ut,le.width,le.height)}$&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,je,at,we)}else t.texImage2D(i.TEXTURE_2D,0,ut,je,at,we);m(w)&&f(ne),Fe.__version=re.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Z(R,w,X){if(w.image.length!==6)return;const ne=ke(R,w),ie=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+X);const re=n.get(ie);if(ie.version!==re.__version||ne===!0){t.activeTexture(i.TEXTURE0+X);const Fe=Ut.getPrimaries(Ut.workingColorSpace),Se=w.colorSpace===us?null:Ut.getPrimaries(w.colorSpace),De=w.colorSpace===us||Fe===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const ot=w.isCompressedTexture||w.image[0].isCompressedTexture,we=w.image[0]&&w.image[0].isDataTexture,je=[];for(let _e=0;_e<6;_e++)!ot&&!we?je[_e]=M(w.image[_e],!0,s.maxCubemapSize):je[_e]=we?w.image[_e].image:w.image[_e],je[_e]=nt(w,je[_e]);const at=je[0],ut=r.convert(w.format,w.colorSpace),Je=r.convert(w.type),wt=y(w.internalFormat,ut,Je,w.colorSpace),ht=w.isVideoTexture!==!0,Et=re.__version===void 0||ne===!0,$=ie.dataReady;let Ne=C(w,at);Ee(i.TEXTURE_CUBE_MAP,w);let le;if(ot){ht&&Et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,wt,at.width,at.height);for(let _e=0;_e<6;_e++){le=je[_e].mipmaps;for(let Ve=0;Ve<le.length;Ve++){const He=le[Ve];w.format!==ri?ut!==null?ht?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve,0,0,He.width,He.height,ut,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve,wt,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ht?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve,0,0,He.width,He.height,ut,Je,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve,wt,He.width,He.height,0,ut,Je,He.data)}}}else{if(le=w.mipmaps,ht&&Et){le.length>0&&Ne++;const _e=j(je[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,wt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(we){ht?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,je[_e].width,je[_e].height,ut,Je,je[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,wt,je[_e].width,je[_e].height,0,ut,Je,je[_e].data);for(let Ve=0;Ve<le.length;Ve++){const ft=le[Ve].image[_e].image;ht?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve+1,0,0,ft.width,ft.height,ut,Je,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve+1,wt,ft.width,ft.height,0,ut,Je,ft.data)}}else{ht?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ut,Je,je[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,wt,ut,Je,je[_e]);for(let Ve=0;Ve<le.length;Ve++){const He=le[Ve];ht?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve+1,0,0,ut,Je,He.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve+1,wt,ut,Je,He.image[_e])}}}m(w)&&f(i.TEXTURE_CUBE_MAP),re.__version=ie.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function he(R,w,X,ne,ie,re){const Fe=r.convert(X.format,X.colorSpace),Se=r.convert(X.type),De=y(X.internalFormat,Fe,Se,X.colorSpace),ot=n.get(w),we=n.get(X);if(we.__renderTarget=w,!ot.__hasExternalTextures){const je=Math.max(1,w.width>>re),at=Math.max(1,w.height>>re);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,re,De,je,at,w.depth,0,Fe,Se,null):t.texImage2D(ie,re,De,je,at,0,Fe,Se,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Oe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ie,we.__webglTexture,0,be(w)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,ie,we.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(R,w,X){if(i.bindRenderbuffer(i.RENDERBUFFER,R),w.depthBuffer){const ne=w.depthTexture,ie=ne&&ne.isDepthTexture?ne.type:null,re=x(w.stencilBuffer,ie),Fe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=be(w);Oe(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,re,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,re,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,re,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Fe,i.RENDERBUFFER,R)}else{const ne=w.textures;for(let ie=0;ie<ne.length;ie++){const re=ne[ie],Fe=r.convert(re.format,re.colorSpace),Se=r.convert(re.type),De=y(re.internalFormat,Fe,Se,re.colorSpace),ot=be(w);X&&Oe(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,De,w.width,w.height):Oe(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,De,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,De,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(w.depthTexture);ne.__renderTarget=w,(!ne.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),W(w.depthTexture,0);const ie=ne.__webglTexture,re=be(w);if(w.depthTexture.format===_r)Oe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(w.depthTexture.format===Gs)Oe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Le(R){const w=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const ne=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ne){const ie=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ne.removeEventListener("dispose",ie)};ne.addEventListener("dispose",ie),w.__depthDisposeCallback=ie}w.__boundDepthTexture=ne}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");me(w.__webglFramebuffer,R)}else if(X){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]===void 0)w.__webglDepthbuffer[ne]=i.createRenderbuffer(),oe(w.__webglDepthbuffer[ne],R,!1);else{const ie=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,re)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),oe(w.__webglDepthbuffer,R,!1);else{const ne=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,ie)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(R,w,X){const ne=n.get(R);w!==void 0&&he(ne.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Le(R)}function Xe(R){const w=R.texture,X=n.get(R),ne=n.get(w);R.addEventListener("dispose",E);const ie=R.textures,re=R.isWebGLCubeRenderTarget===!0,Fe=ie.length>1;if(Fe||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=w.version,o.memory.textures++),re){X.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[Se]=[];for(let De=0;De<w.mipmaps.length;De++)X.__webglFramebuffer[Se][De]=i.createFramebuffer()}else X.__webglFramebuffer[Se]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let Se=0;Se<w.mipmaps.length;Se++)X.__webglFramebuffer[Se]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Fe)for(let Se=0,De=ie.length;Se<De;Se++){const ot=n.get(ie[Se]);ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Oe(R)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Se=0;Se<ie.length;Se++){const De=ie[Se];X.__webglColorRenderbuffer[Se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[Se]);const ot=r.convert(De.format,De.colorSpace),we=r.convert(De.type),je=y(De.internalFormat,ot,we,De.colorSpace,R.isXRRenderTarget===!0),at=be(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,at,je,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,X.__webglColorRenderbuffer[Se])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(X.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,w);for(let Se=0;Se<6;Se++)if(w.mipmaps&&w.mipmaps.length>0)for(let De=0;De<w.mipmaps.length;De++)he(X.__webglFramebuffer[Se][De],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De);else he(X.__webglFramebuffer[Se],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);m(w)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let Se=0,De=ie.length;Se<De;Se++){const ot=ie[Se],we=n.get(ot);t.bindTexture(i.TEXTURE_2D,we.__webglTexture),Ee(i.TEXTURE_2D,ot),he(X.__webglFramebuffer,R,ot,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,0),m(ot)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let Se=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Se=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,ne.__webglTexture),Ee(Se,w),w.mipmaps&&w.mipmaps.length>0)for(let De=0;De<w.mipmaps.length;De++)he(X.__webglFramebuffer[De],R,w,i.COLOR_ATTACHMENT0,Se,De);else he(X.__webglFramebuffer,R,w,i.COLOR_ATTACHMENT0,Se,0);m(w)&&f(Se),t.unbindTexture()}R.depthBuffer&&Le(R)}function de(R){const w=R.textures;for(let X=0,ne=w.length;X<ne;X++){const ie=w[X];if(m(ie)){const re=_(R),Fe=n.get(ie).__webglTexture;t.bindTexture(re,Fe),f(re),t.unbindTexture()}}}const Me=[],B=[];function $e(R){if(R.samples>0){if(Oe(R)===!1){const w=R.textures,X=R.width,ne=R.height;let ie=i.COLOR_BUFFER_BIT;const re=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=n.get(R),Se=w.length>1;if(Se)for(let De=0;De<w.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let De=0;De<w.length;De++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),Se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[De]);const ot=n.get(w[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,X,ne,0,0,X,ne,ie,i.NEAREST),l===!0&&(Me.length=0,B.length=0,Me.push(i.COLOR_ATTACHMENT0+De),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Me.push(re),B.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Se)for(let De=0;De<w.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[De]);const ot=n.get(w[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,ot,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function be(R){return Math.min(s.maxSamples,R.samples)}function Oe(R){const w=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ie(R){const w=o.render.frame;u.get(R)!==w&&(u.set(R,w),R.update())}function nt(R,w){const X=R.colorSpace,ne=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==Nr&&X!==us&&(Ut.getTransfer(X)===Gt?(ne!==ri||ie!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function j(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=L,this.setTexture2D=W,this.setTexture2DArray=D,this.setTexture3D=k,this.setTextureCube=G,this.rebindTextures=Ue,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Oe}function i1(i,e){function t(n,s=us){let r;const o=Ut.getTransfer(s);if(n===Ni)return i.UNSIGNED_BYTE;if(n===Jc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Of)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ff)return i.BYTE;if(n===kf)return i.SHORT;if(n===ho)return i.UNSIGNED_SHORT;if(n===Zc)return i.INT;if(n===Os)return i.UNSIGNED_INT;if(n===bi)return i.FLOAT;if(n===oi)return i.HALF_FLOAT;if(n===Bf)return i.ALPHA;if(n===Gf)return i.RGB;if(n===ri)return i.RGBA;if(n===Vf)return i.LUMINANCE;if(n===Hf)return i.LUMINANCE_ALPHA;if(n===_r)return i.DEPTH_COMPONENT;if(n===Gs)return i.DEPTH_STENCIL;if(n===La)return i.RED;if(n===eu)return i.RED_INTEGER;if(n===Wf)return i.RG;if(n===tu)return i.RG_INTEGER;if(n===nu)return i.RGBA_INTEGER;if(n===da||n===pa||n===ma||n===ga)if(o===Gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$l||n===jl||n===Kl||n===Zl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jl||n===Ql||n===ec)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jl||n===Ql)return o===Gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ec)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===uc||n===hc||n===fc||n===dc||n===pc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ic)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ac)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===va||n===mc||n===gc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===va)return o===Gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xf||n===vc||n===xc||n===_c)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===va)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class s1 extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bt extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r1={type:"move"};class xl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,n),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(r1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const o1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class l1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Un,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new sn({vertexShader:o1,fragmentShader:a1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c1 extends Fr{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const M=new l1,m=t.getContextAttributes();let f=null,_=null;const y=[],x=[],C=new Ae;let S=null;const E=new Zn;E.viewport=new Wt;const T=new Zn;T.viewport=new Wt;const b=[E,T],v=new s1;let A=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=y[H];return Z===void 0&&(Z=new xl,y[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=y[H];return Z===void 0&&(Z=new xl,y[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=y[H];return Z===void 0&&(Z=new xl,y[H]=Z),Z.getHandSpace()};function z(H){const Z=x.indexOf(H.inputSource);if(Z===-1)return;const he=y[Z];he!==void 0&&(he.update(H.inputSource,H.frame,c||o),he.dispatchEvent({type:H.type,data:H.inputSource}))}function U(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",W);for(let H=0;H<y.length;H++){const Z=x[H];Z!==null&&(x[H]=null,y[H].disconnect(Z))}A=null,L=null,M.reset(),e.setRenderTarget(f),p=null,d=null,h=null,s=null,_=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",U),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Xn(p.framebufferWidth,p.framebufferHeight,{format:ri,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,he=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=m.stencil?Gs:_r,he=m.stencil?Bs:Os);const me={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(me),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Xn(d.textureWidth,d.textureHeight,{format:ri,type:Ni,depthTexture:new uu(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ke.setContext(s),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function W(H){for(let Z=0;Z<H.removed.length;Z++){const he=H.removed[Z],oe=x.indexOf(he);oe>=0&&(x[oe]=null,y[oe].disconnect(he))}for(let Z=0;Z<H.added.length;Z++){const he=H.added[Z];let oe=x.indexOf(he);if(oe===-1){for(let Le=0;Le<y.length;Le++)if(Le>=x.length){x.push(he),oe=Le;break}else if(x[Le]===null){x[Le]=he,oe=Le;break}if(oe===-1)break}const me=y[oe];me&&me.connect(he)}}const D=new V,k=new V;function G(H,Z,he){D.setFromMatrixPosition(Z.matrixWorld),k.setFromMatrixPosition(he.matrixWorld);const oe=D.distanceTo(k),me=Z.projectionMatrix.elements,Le=he.projectionMatrix.elements,Ue=me[14]/(me[10]-1),Xe=me[14]/(me[10]+1),de=(me[9]+1)/me[5],Me=(me[9]-1)/me[5],B=(me[8]-1)/me[0],$e=(Le[8]+1)/Le[0],be=Ue*B,Oe=Ue*$e,Ie=oe/(-B+$e),nt=Ie*-B;if(Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(nt),H.translateZ(Ie),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),me[10]===-1)H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const j=Ue+Ie,R=Xe+Ie,w=be-nt,X=Oe+(oe-nt),ne=de*Xe/R*j,ie=Me*Xe/R*j;H.projectionMatrix.makePerspective(w,X,ne,ie,j,R),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Y(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let Z=H.near,he=H.far;M.texture!==null&&(M.depthNear>0&&(Z=M.depthNear),M.depthFar>0&&(he=M.depthFar)),v.near=T.near=E.near=Z,v.far=T.far=E.far=he,(A!==v.near||L!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),A=v.near,L=v.far),E.layers.mask=H.layers.mask|2,T.layers.mask=H.layers.mask|4,v.layers.mask=E.layers.mask|T.layers.mask;const oe=H.parent,me=v.cameras;Y(v,oe);for(let Le=0;Le<me.length;Le++)Y(me[Le],oe);me.length===2?G(v,E,T):v.projectionMatrix.copy(E.projectionMatrix),Q(H,v,oe)};function Q(H,Z,he){he===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(he.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=fo*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(v)};let se=null;function Ee(H,Z){if(u=Z.getViewerPose(c||o),g=Z,u!==null){const he=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let oe=!1;he.length!==v.cameras.length&&(v.cameras.length=0,oe=!0);for(let Le=0;Le<he.length;Le++){const Ue=he[Le];let Xe=null;if(p!==null)Xe=p.getViewport(Ue);else{const Me=h.getViewSubImage(d,Ue);Xe=Me.viewport,Le===0&&(e.setRenderTargetTextures(_,Me.colorTexture,d.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(_))}let de=b[Le];de===void 0&&(de=new Zn,de.layers.enable(Le),de.viewport=new Wt,b[Le]=de),de.matrix.fromArray(Ue.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(Ue.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Le===0&&(v.matrix.copy(de.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),oe===!0&&v.cameras.push(de)}const me=s.enabledFeatures;if(me&&me.includes("depth-sensing")){const Le=h.getDepthInformation(he[0]);Le&&Le.isValid&&Le.texture&&M.init(e,Le,s.renderState)}}for(let he=0;he<y.length;he++){const oe=x[he],me=y[he];oe!==null&&me!==void 0&&me.update(oe,Z,c||o)}se&&se(H,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const ke=new nd;ke.setAnimationLoop(Ee),this.setAnimationLoop=function(H){se=H},this.dispose=function(){}}}const Es=new Fi,u1=new zt;function h1(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Qf(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,_,y,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Vn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Vn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f),y=_.envMap,x=_.envMapRotation;y&&(m.envMap.value=y,Es.copy(x),Es.x*=-1,Es.y*=-1,Es.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),m.envMapRotation.value.setFromMatrix4(u1.makeRotationFromEuler(Es)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Vn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function f1(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function c(_,y){let x=s[_.id];x===void 0&&(g(_),x=u(_),s[_.id]=x,_.addEventListener("dispose",m));const C=y.program;n.updateUBOMapping(_,C);const S=e.render.frame;r[_.id]!==S&&(d(_),r[_.id]=S)}function u(_){const y=h();_.__bindingPointIndex=y;const x=i.createBuffer(),C=_.__size,S=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,C,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=s[_.id],x=_.uniforms,C=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let S=0,E=x.length;S<E;S++){const T=Array.isArray(x[S])?x[S]:[x[S]];for(let b=0,v=T.length;b<v;b++){const A=T[b];if(p(A,S,b,C)===!0){const L=A.__offset,z=Array.isArray(A.value)?A.value:[A.value];let U=0;for(let W=0;W<z.length;W++){const D=z[W],k=M(D);typeof D=="number"||typeof D=="boolean"?(A.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,L+U,A.__data)):D.isMatrix3?(A.__data[0]=D.elements[0],A.__data[1]=D.elements[1],A.__data[2]=D.elements[2],A.__data[3]=0,A.__data[4]=D.elements[3],A.__data[5]=D.elements[4],A.__data[6]=D.elements[5],A.__data[7]=0,A.__data[8]=D.elements[6],A.__data[9]=D.elements[7],A.__data[10]=D.elements[8],A.__data[11]=0):(D.toArray(A.__data,U),U+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,y,x,C){const S=_.value,E=y+"_"+x;if(C[E]===void 0)return typeof S=="number"||typeof S=="boolean"?C[E]=S:C[E]=S.clone(),!0;{const T=C[E];if(typeof S=="number"||typeof S=="boolean"){if(T!==S)return C[E]=S,!0}else if(T.equals(S)===!1)return T.copy(S),!0}return!1}function g(_){const y=_.uniforms;let x=0;const C=16;for(let E=0,T=y.length;E<T;E++){const b=Array.isArray(y[E])?y[E]:[y[E]];for(let v=0,A=b.length;v<A;v++){const L=b[v],z=Array.isArray(L.value)?L.value:[L.value];for(let U=0,W=z.length;U<W;U++){const D=z[U],k=M(D),G=x%C,Y=G%k.boundary,Q=G+Y;x+=Y,Q!==0&&C-Q<k.storage&&(x+=C-Q),L.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=k.storage}}}const S=x%C;return S>0&&(x+=C-S),_.__size=x,_.__cache={},this}function M(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(const _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class d1{constructor(e={}){const{canvas:t=n0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),M=new Int32Array(4);let m=null,f=null;const _=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=ps,this.toneMappingExposure=1;const x=this;let C=!1,S=0,E=0,T=null,b=-1,v=null;const A=new Wt,L=new Wt;let z=null;const U=new Re(0);let W=0,D=t.width,k=t.height,G=1,Y=null,Q=null;const se=new Wt(0,0,D,k),Ee=new Wt(0,0,D,k);let ke=!1;const H=new au;let Z=!1,he=!1;const oe=new zt,me=new zt,Le=new V,Ue=new Wt,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function Me(){return T===null?G:1}let B=n;function $e(P,J){return t.getContext(P,J)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$c}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",He,!1),B===null){const J="webgl2";if(B=$e(J,P),B===null)throw $e(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let be,Oe,Ie,nt,j,R,w,X,ne,ie,re,Fe,Se,De,ot,we,je,at,ut,Je,wt,ht,Et,$;function Ne(){be=new xv(B),be.init(),ht=new i1(B,be),Oe=new fv(B,be,e,ht),Ie=new e1(B,be),Oe.reverseDepthBuffer&&d&&Ie.buffers.depth.setReversed(!0),nt=new yv(B),j=new Ox,R=new n1(B,be,Ie,j,Oe,ht,nt),w=new pv(x),X=new vv(x),ne=new C0(B),Et=new uv(B,ne),ie=new _v(B,ne,nt,Et),re=new Sv(B,ie,ne,nt),ut=new bv(B,Oe,R),we=new dv(j),Fe=new kx(x,w,X,be,Oe,Et,we),Se=new h1(x,j),De=new Gx,ot=new Yx(be),at=new cv(x,w,X,Ie,re,p,l),je=new Jx(x,re,Oe),$=new f1(B,nt,Oe,Ie),Je=new hv(B,be,nt),wt=new Mv(B,be,nt),nt.programs=Fe.programs,x.capabilities=Oe,x.extensions=be,x.properties=j,x.renderLists=De,x.shadowMap=je,x.state=Ie,x.info=nt}Ne();const le=new c1(x,B);this.xr=le,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const P=be.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=be.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(P){P!==void 0&&(G=P,this.setSize(D,k,!1))},this.getSize=function(P){return P.set(D,k)},this.setSize=function(P,J,ae=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=P,k=J,t.width=Math.floor(P*G),t.height=Math.floor(J*G),ae===!0&&(t.style.width=P+"px",t.style.height=J+"px"),this.setViewport(0,0,P,J)},this.getDrawingBufferSize=function(P){return P.set(D*G,k*G).floor()},this.setDrawingBufferSize=function(P,J,ae){D=P,k=J,G=ae,t.width=Math.floor(P*ae),t.height=Math.floor(J*ae),this.setViewport(0,0,P,J)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(se)},this.setViewport=function(P,J,ae,ce){P.isVector4?se.set(P.x,P.y,P.z,P.w):se.set(P,J,ae,ce),Ie.viewport(A.copy(se).multiplyScalar(G).round())},this.getScissor=function(P){return P.copy(Ee)},this.setScissor=function(P,J,ae,ce){P.isVector4?Ee.set(P.x,P.y,P.z,P.w):Ee.set(P,J,ae,ce),Ie.scissor(L.copy(Ee).multiplyScalar(G).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(P){Ie.setScissorTest(ke=P)},this.setOpaqueSort=function(P){Y=P},this.setTransparentSort=function(P){Q=P},this.getClearColor=function(P){return P.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(P=!0,J=!0,ae=!0){let ce=0;if(P){let K=!1;if(T!==null){const ze=T.texture.format;K=ze===nu||ze===tu||ze===eu}if(K){const ze=T.texture.type,Ke=ze===Ni||ze===Os||ze===ho||ze===Bs||ze===Jc||ze===Qc,it=at.getClearColor(),st=at.getClearAlpha(),vt=it.r,N=it.g,O=it.b;Ke?(g[0]=vt,g[1]=N,g[2]=O,g[3]=st,B.clearBufferuiv(B.COLOR,0,g)):(M[0]=vt,M[1]=N,M[2]=O,M[3]=st,B.clearBufferiv(B.COLOR,0,M))}else ce|=B.COLOR_BUFFER_BIT}J&&(ce|=B.DEPTH_BUFFER_BIT),ae&&(ce|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",He,!1),De.dispose(),ot.dispose(),j.dispose(),w.dispose(),X.dispose(),re.dispose(),Et.dispose(),$.dispose(),Fe.dispose(),le.dispose(),le.removeEventListener("sessionstart",li),le.removeEventListener("sessionend",F),xe.stop()};function _e(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ve(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const P=nt.autoReset,J=je.enabled,ae=je.autoUpdate,ce=je.needsUpdate,K=je.type;Ne(),nt.autoReset=P,je.enabled=J,je.autoUpdate=ae,je.needsUpdate=ce,je.type=K}function He(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ft(P){const J=P.target;J.removeEventListener("dispose",ft),Bt(J)}function Bt(P){Vt(P),j.remove(P)}function Vt(P){const J=j.get(P).programs;J!==void 0&&(J.forEach(function(ae){Fe.releaseProgram(ae)}),P.isShaderMaterial&&Fe.releaseShaderCache(P))}this.renderBufferDirect=function(P,J,ae,ce,K,ze){J===null&&(J=Xe);const Ke=K.isMesh&&K.matrixWorld.determinant()<0,it=mn(P,J,ae,ce,K);Ie.setMaterial(ce,Ke);let st=ae.index,vt=1;if(ce.wireframe===!0){if(st=ie.getWireframeAttribute(ae),st===void 0)return;vt=2}const N=ae.drawRange,O=ae.attributes.position;let ee=N.start*vt,pe=(N.start+N.count)*vt;ze!==null&&(ee=Math.max(ee,ze.start*vt),pe=Math.min(pe,(ze.start+ze.count)*vt)),st!==null?(ee=Math.max(ee,0),pe=Math.min(pe,st.count)):O!=null&&(ee=Math.max(ee,0),pe=Math.min(pe,O.count));const ye=pe-ee;if(ye<0||ye===1/0)return;Et.setup(K,ce,it,ae,st);let Pe,Te=Je;if(st!==null&&(Pe=ne.get(st),Te=wt,Te.setIndex(Pe)),K.isMesh)ce.wireframe===!0?(Ie.setLineWidth(ce.wireframeLinewidth*Me()),Te.setMode(B.LINES)):Te.setMode(B.TRIANGLES);else if(K.isLine){let te=ce.linewidth;te===void 0&&(te=1),Ie.setLineWidth(te*Me()),K.isLineSegments?Te.setMode(B.LINES):K.isLineLoop?Te.setMode(B.LINE_LOOP):Te.setMode(B.LINE_STRIP)}else K.isPoints?Te.setMode(B.POINTS):K.isSprite&&Te.setMode(B.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Te.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))Te.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const te=K._multiDrawStarts,Ye=K._multiDrawCounts,We=K._multiDrawCount,dt=st?ne.get(st).bytesPerElement:1,Pt=j.get(ce).currentProgram.getUniforms();for(let It=0;It<We;It++)Pt.setValue(B,"_gl_DrawID",It),Te.render(te[It]/dt,Ye[It])}else if(K.isInstancedMesh)Te.renderInstances(ee,ye,K.count);else if(ae.isInstancedBufferGeometry){const te=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ye=Math.min(ae.instanceCount,te);Te.renderInstances(ee,ye,Ye)}else Te.render(ee,ye)};function At(P,J,ae){P.transparent===!0&&P.side===cn&&P.forceSinglePass===!1?(P.side=Vn,P.needsUpdate=!0,rt(P,J,ae),P.side=gs,P.needsUpdate=!0,rt(P,J,ae),P.side=cn):rt(P,J,ae)}this.compile=function(P,J,ae=null){ae===null&&(ae=P),f=ot.get(ae),f.init(J),y.push(f),ae.traverseVisible(function(K){K.isLight&&K.layers.test(J.layers)&&(f.pushLight(K),K.castShadow&&f.pushShadow(K))}),P!==ae&&P.traverseVisible(function(K){K.isLight&&K.layers.test(J.layers)&&(f.pushLight(K),K.castShadow&&f.pushShadow(K))}),f.setupLights();const ce=new Set;return P.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const ze=K.material;if(ze)if(Array.isArray(ze))for(let Ke=0;Ke<ze.length;Ke++){const it=ze[Ke];At(it,ae,K),ce.add(it)}else At(ze,ae,K),ce.add(ze)}),y.pop(),f=null,ce},this.compileAsync=function(P,J,ae=null){const ce=this.compile(P,J,ae);return new Promise(K=>{function ze(){if(ce.forEach(function(Ke){j.get(Ke).currentProgram.isReady()&&ce.delete(Ke)}),ce.size===0){K(P);return}setTimeout(ze,10)}be.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let Cn=null;function Sn(P){Cn&&Cn(P)}function li(){xe.stop()}function F(){xe.start()}const xe=new nd;xe.setAnimationLoop(Sn),typeof self<"u"&&xe.setContext(self),this.setAnimationLoop=function(P){Cn=P,le.setAnimationLoop(P),P===null?xe.stop():xe.start()},le.addEventListener("sessionstart",li),le.addEventListener("sessionend",F),this.render=function(P,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(J),J=le.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,J,T),f=ot.get(P,y.length),f.init(J),y.push(f),me.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),H.setFromProjectionMatrix(me),he=this.localClippingEnabled,Z=we.init(this.clippingPlanes,he),m=De.get(P,_.length),m.init(),_.push(m),le.enabled===!0&&le.isPresenting===!0){const ze=x.xr.getDepthSensingMesh();ze!==null&&ue(ze,J,-1/0,x.sortObjects)}ue(P,J,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Y,Q),de=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,de&&at.addToRenderList(m,P),this.info.render.frame++,Z===!0&&we.beginShadows();const ae=f.state.shadowsArray;je.render(ae,P,J),Z===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=m.opaque,K=m.transmissive;if(f.setupLights(),J.isArrayCamera){const ze=J.cameras;if(K.length>0)for(let Ke=0,it=ze.length;Ke<it;Ke++){const st=ze[Ke];tt(ce,K,P,st)}de&&at.render(P);for(let Ke=0,it=ze.length;Ke<it;Ke++){const st=ze[Ke];Qe(m,P,st,st.viewport)}}else K.length>0&&tt(ce,K,P,J),de&&at.render(P),Qe(m,P,J);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),P.isScene===!0&&P.onAfterRender(x,P,J),Et.resetDefaultState(),b=-1,v=null,y.pop(),y.length>0?(f=y[y.length-1],Z===!0&&we.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function ue(P,J,ae,ce){if(P.visible===!1)return;if(P.layers.test(J.layers)){if(P.isGroup)ae=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(J);else if(P.isLight)f.pushLight(P),P.castShadow&&f.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||H.intersectsSprite(P)){ce&&Ue.setFromMatrixPosition(P.matrixWorld).applyMatrix4(me);const Ke=re.update(P),it=P.material;it.visible&&m.push(P,Ke,it,ae,Ue.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||H.intersectsObject(P))){const Ke=re.update(P),it=P.material;if(ce&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ue.copy(P.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),Ue.copy(Ke.boundingSphere.center)),Ue.applyMatrix4(P.matrixWorld).applyMatrix4(me)),Array.isArray(it)){const st=Ke.groups;for(let vt=0,N=st.length;vt<N;vt++){const O=st[vt],ee=it[O.materialIndex];ee&&ee.visible&&m.push(P,Ke,ee,ae,Ue.z,O)}}else it.visible&&m.push(P,Ke,it,ae,Ue.z,null)}}const ze=P.children;for(let Ke=0,it=ze.length;Ke<it;Ke++)ue(ze[Ke],J,ae,ce)}function Qe(P,J,ae,ce){const K=P.opaque,ze=P.transmissive,Ke=P.transparent;f.setupLightsView(ae),Z===!0&&we.setGlobalState(x.clippingPlanes,ae),ce&&Ie.viewport(A.copy(ce)),K.length>0&&Ce(K,J,ae),ze.length>0&&Ce(ze,J,ae),Ke.length>0&&Ce(Ke,J,ae),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function tt(P,J,ae,ce){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[ce.id]===void 0&&(f.state.transmissionRenderTarget[ce.id]=new Xn(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?oi:Ni,minFilter:Ds,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const ze=f.state.transmissionRenderTarget[ce.id],Ke=ce.viewport||A;ze.setSize(Ke.z,Ke.w);const it=x.getRenderTarget();x.setRenderTarget(ze),x.getClearColor(U),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),de&&at.render(ae);const st=x.toneMapping;x.toneMapping=ps;const vt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),f.setupLightsView(ce),Z===!0&&we.setGlobalState(x.clippingPlanes,ce),Ce(P,ae,ce),R.updateMultisampleRenderTarget(ze),R.updateRenderTargetMipmap(ze),be.has("WEBGL_multisampled_render_to_texture")===!1){let N=!1;for(let O=0,ee=J.length;O<ee;O++){const pe=J[O],ye=pe.object,Pe=pe.geometry,Te=pe.material,te=pe.group;if(Te.side===cn&&ye.layers.test(ce.layers)){const Ye=Te.side;Te.side=Vn,Te.needsUpdate=!0,Ze(ye,ae,ce,Pe,Te,te),Te.side=Ye,Te.needsUpdate=!0,N=!0}}N===!0&&(R.updateMultisampleRenderTarget(ze),R.updateRenderTargetMipmap(ze))}x.setRenderTarget(it),x.setClearColor(U,W),vt!==void 0&&(ce.viewport=vt),x.toneMapping=st}function Ce(P,J,ae){const ce=J.isScene===!0?J.overrideMaterial:null;for(let K=0,ze=P.length;K<ze;K++){const Ke=P[K],it=Ke.object,st=Ke.geometry,vt=ce===null?Ke.material:ce,N=Ke.group;it.layers.test(ae.layers)&&Ze(it,J,ae,st,vt,N)}}function Ze(P,J,ae,ce,K,ze){P.onBeforeRender(x,J,ae,ce,K,ze),P.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),K.onBeforeRender(x,J,ae,ce,P,ze),K.transparent===!0&&K.side===cn&&K.forceSinglePass===!1?(K.side=Vn,K.needsUpdate=!0,x.renderBufferDirect(ae,J,ce,K,P,ze),K.side=gs,K.needsUpdate=!0,x.renderBufferDirect(ae,J,ce,K,P,ze),K.side=cn):x.renderBufferDirect(ae,J,ce,K,P,ze),P.onAfterRender(x,J,ae,ce,K,ze)}function rt(P,J,ae){J.isScene!==!0&&(J=Xe);const ce=j.get(P),K=f.state.lights,ze=f.state.shadowsArray,Ke=K.state.version,it=Fe.getParameters(P,K.state,ze,J,ae),st=Fe.getProgramCacheKey(it);let vt=ce.programs;ce.environment=P.isMeshStandardMaterial?J.environment:null,ce.fog=J.fog,ce.envMap=(P.isMeshStandardMaterial?X:w).get(P.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&P.envMap===null?J.environmentRotation:P.envMapRotation,vt===void 0&&(P.addEventListener("dispose",ft),vt=new Map,ce.programs=vt);let N=vt.get(st);if(N!==void 0){if(ce.currentProgram===N&&ce.lightsStateVersion===Ke)return Ct(P,it),N}else it.uniforms=Fe.getUniforms(P),P.onBeforeCompile(it,x),N=Fe.acquireProgram(it,st),vt.set(st,N),ce.uniforms=it.uniforms;const O=ce.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(O.clippingPlanes=we.uniform),Ct(P,it),ce.needsLights=ci(P),ce.lightsStateVersion=Ke,ce.needsLights&&(O.ambientLightColor.value=K.state.ambient,O.lightProbe.value=K.state.probe,O.directionalLights.value=K.state.directional,O.directionalLightShadows.value=K.state.directionalShadow,O.spotLights.value=K.state.spot,O.spotLightShadows.value=K.state.spotShadow,O.rectAreaLights.value=K.state.rectArea,O.ltc_1.value=K.state.rectAreaLTC1,O.ltc_2.value=K.state.rectAreaLTC2,O.pointLights.value=K.state.point,O.pointLightShadows.value=K.state.pointShadow,O.hemisphereLights.value=K.state.hemi,O.directionalShadowMap.value=K.state.directionalShadowMap,O.directionalShadowMatrix.value=K.state.directionalShadowMatrix,O.spotShadowMap.value=K.state.spotShadowMap,O.spotLightMatrix.value=K.state.spotLightMatrix,O.spotLightMap.value=K.state.spotLightMap,O.pointShadowMap.value=K.state.pointShadowMap,O.pointShadowMatrix.value=K.state.pointShadowMatrix),ce.currentProgram=N,ce.uniformsList=null,N}function gt(P){if(P.uniformsList===null){const J=P.currentProgram.getUniforms();P.uniformsList=xa.seqWithValue(J.seq,P.uniforms)}return P.uniformsList}function Ct(P,J){const ae=j.get(P);ae.outputColorSpace=J.outputColorSpace,ae.batching=J.batching,ae.batchingColor=J.batchingColor,ae.instancing=J.instancing,ae.instancingColor=J.instancingColor,ae.instancingMorph=J.instancingMorph,ae.skinning=J.skinning,ae.morphTargets=J.morphTargets,ae.morphNormals=J.morphNormals,ae.morphColors=J.morphColors,ae.morphTargetsCount=J.morphTargetsCount,ae.numClippingPlanes=J.numClippingPlanes,ae.numIntersection=J.numClipIntersection,ae.vertexAlphas=J.vertexAlphas,ae.vertexTangents=J.vertexTangents,ae.toneMapping=J.toneMapping}function mn(P,J,ae,ce,K){J.isScene!==!0&&(J=Xe),R.resetTextureUnits();const ze=J.fog,Ke=ce.isMeshStandardMaterial?J.environment:null,it=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Nr,st=(ce.isMeshStandardMaterial?X:w).get(ce.envMap||Ke),vt=ce.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,N=!!ae.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),O=!!ae.morphAttributes.position,ee=!!ae.morphAttributes.normal,pe=!!ae.morphAttributes.color;let ye=ps;ce.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ye=x.toneMapping);const Pe=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Te=Pe!==void 0?Pe.length:0,te=j.get(ce),Ye=f.state.lights;if(Z===!0&&(he===!0||P!==v)){const Pn=P===v&&ce.id===b;we.setState(ce,P,Pn)}let We=!1;ce.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Ye.state.version||te.outputColorSpace!==it||K.isBatchedMesh&&te.batching===!1||!K.isBatchedMesh&&te.batching===!0||K.isBatchedMesh&&te.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&te.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&te.instancing===!1||!K.isInstancedMesh&&te.instancing===!0||K.isSkinnedMesh&&te.skinning===!1||!K.isSkinnedMesh&&te.skinning===!0||K.isInstancedMesh&&te.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&te.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&te.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&te.instancingMorph===!1&&K.morphTexture!==null||te.envMap!==st||ce.fog===!0&&te.fog!==ze||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==we.numPlanes||te.numIntersection!==we.numIntersection)||te.vertexAlphas!==vt||te.vertexTangents!==N||te.morphTargets!==O||te.morphNormals!==ee||te.morphColors!==pe||te.toneMapping!==ye||te.morphTargetsCount!==Te)&&(We=!0):(We=!0,te.__version=ce.version);let dt=te.currentProgram;We===!0&&(dt=rt(ce,J,K));let Pt=!1,It=!1,Oi=!1;const Lt=dt.getUniforms(),Rn=te.uniforms;if(Ie.useProgram(dt.program)&&(Pt=!0,It=!0,Oi=!0),ce.id!==b&&(b=ce.id,It=!0),Pt||v!==P){Ie.buffers.depth.getReversed()?(oe.copy(P.projectionMatrix),s0(oe),r0(oe),Lt.setValue(B,"projectionMatrix",oe)):Lt.setValue(B,"projectionMatrix",P.projectionMatrix),Lt.setValue(B,"viewMatrix",P.matrixWorldInverse);const qn=Lt.map.cameraPosition;qn!==void 0&&qn.setValue(B,Le.setFromMatrixPosition(P.matrixWorld)),Oe.logarithmicDepthBuffer&&Lt.setValue(B,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Lt.setValue(B,"isOrthographic",P.isOrthographicCamera===!0),v!==P&&(v=P,It=!0,Oi=!0)}if(K.isSkinnedMesh){Lt.setOptional(B,K,"bindMatrix"),Lt.setOptional(B,K,"bindMatrixInverse");const Pn=K.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),Lt.setValue(B,"boneTexture",Pn.boneTexture,R))}K.isBatchedMesh&&(Lt.setOptional(B,K,"batchingTexture"),Lt.setValue(B,"batchingTexture",K._matricesTexture,R),Lt.setOptional(B,K,"batchingIdTexture"),Lt.setValue(B,"batchingIdTexture",K._indirectTexture,R),Lt.setOptional(B,K,"batchingColorTexture"),K._colorsTexture!==null&&Lt.setValue(B,"batchingColorTexture",K._colorsTexture,R));const ui=ae.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&ut.update(K,ae,dt),(It||te.receiveShadow!==K.receiveShadow)&&(te.receiveShadow=K.receiveShadow,Lt.setValue(B,"receiveShadow",K.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(Rn.envMap.value=st,Rn.flipEnvMap.value=st.isCubeTexture&&st.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&J.environment!==null&&(Rn.envMapIntensity.value=J.environmentIntensity),It&&(Lt.setValue(B,"toneMappingExposure",x.toneMappingExposure),te.needsLights&&ni(Rn,Oi),ze&&ce.fog===!0&&Se.refreshFogUniforms(Rn,ze),Se.refreshMaterialUniforms(Rn,ce,G,k,f.state.transmissionRenderTarget[P.id]),xa.upload(B,gt(te),Rn,R)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(xa.upload(B,gt(te),Rn,R),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Lt.setValue(B,"center",K.center),Lt.setValue(B,"modelViewMatrix",K.modelViewMatrix),Lt.setValue(B,"normalMatrix",K.normalMatrix),Lt.setValue(B,"modelMatrix",K.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const Pn=ce.uniformsGroups;for(let qn=0,Yn=Pn.length;qn<Yn;qn++){const ns=Pn[qn];$.update(ns,dt),$.bind(ns,dt)}}return dt}function ni(P,J){P.ambientLightColor.needsUpdate=J,P.lightProbe.needsUpdate=J,P.directionalLights.needsUpdate=J,P.directionalLightShadows.needsUpdate=J,P.pointLights.needsUpdate=J,P.pointLightShadows.needsUpdate=J,P.spotLights.needsUpdate=J,P.spotLightShadows.needsUpdate=J,P.rectAreaLights.needsUpdate=J,P.hemisphereLights.needsUpdate=J}function ci(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(P,J,ae){j.get(P.texture).__webglTexture=J,j.get(P.depthTexture).__webglTexture=ae;const ce=j.get(P);ce.__hasExternalTextures=!0,ce.__autoAllocateDepthBuffer=ae===void 0,ce.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,J){const ae=j.get(P);ae.__webglFramebuffer=J,ae.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(P,J=0,ae=0){T=P,S=J,E=ae;let ce=!0,K=null,ze=!1,Ke=!1;if(P){const st=j.get(P);if(st.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(B.FRAMEBUFFER,null),ce=!1;else if(st.__webglFramebuffer===void 0)R.setupRenderTarget(P);else if(st.__hasExternalTextures)R.rebindTextures(P,j.get(P.texture).__webglTexture,j.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const O=P.depthTexture;if(st.__boundDepthTexture!==O){if(O!==null&&j.has(O)&&(P.width!==O.image.width||P.height!==O.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(P)}}const vt=P.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(Ke=!0);const N=j.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(N[J])?K=N[J][ae]:K=N[J],ze=!0):P.samples>0&&R.useMultisampledRTT(P)===!1?K=j.get(P).__webglMultisampledFramebuffer:Array.isArray(N)?K=N[ae]:K=N,A.copy(P.viewport),L.copy(P.scissor),z=P.scissorTest}else A.copy(se).multiplyScalar(G).floor(),L.copy(Ee).multiplyScalar(G).floor(),z=ke;if(Ie.bindFramebuffer(B.FRAMEBUFFER,K)&&ce&&Ie.drawBuffers(P,K),Ie.viewport(A),Ie.scissor(L),Ie.setScissorTest(z),ze){const st=j.get(P.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+J,st.__webglTexture,ae)}else if(Ke){const st=j.get(P.texture),vt=J||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,st.__webglTexture,ae||0,vt)}b=-1},this.readRenderTargetPixels=function(P,J,ae,ce,K,ze,Ke){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=j.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ke!==void 0&&(it=it[Ke]),it){Ie.bindFramebuffer(B.FRAMEBUFFER,it);try{const st=P.texture,vt=st.format,N=st.type;if(!Oe.textureFormatReadable(vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(N)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=P.width-ce&&ae>=0&&ae<=P.height-K&&B.readPixels(J,ae,ce,K,ht.convert(vt),ht.convert(N),ze)}finally{const st=T!==null?j.get(T).__webglFramebuffer:null;Ie.bindFramebuffer(B.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(P,J,ae,ce,K,ze,Ke){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let it=j.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ke!==void 0&&(it=it[Ke]),it){const st=P.texture,vt=st.format,N=st.type;if(!Oe.textureFormatReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(N))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=P.width-ce&&ae>=0&&ae<=P.height-K){Ie.bindFramebuffer(B.FRAMEBUFFER,it);const O=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,O),B.bufferData(B.PIXEL_PACK_BUFFER,ze.byteLength,B.STREAM_READ),B.readPixels(J,ae,ce,K,ht.convert(vt),ht.convert(N),0);const ee=T!==null?j.get(T).__webglFramebuffer:null;Ie.bindFramebuffer(B.FRAMEBUFFER,ee);const pe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await i0(B,pe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,O),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ze),B.deleteBuffer(O),B.deleteSync(pe),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,J=null,ae=0){P.isTexture!==!0&&(Qr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,P=arguments[1]);const ce=Math.pow(2,-ae),K=Math.floor(P.image.width*ce),ze=Math.floor(P.image.height*ce),Ke=J!==null?J.x:0,it=J!==null?J.y:0;R.setTexture2D(P,0),B.copyTexSubImage2D(B.TEXTURE_2D,ae,0,0,Ke,it,K,ze),Ie.unbindTexture()},this.copyTextureToTexture=function(P,J,ae=null,ce=null,K=0){P.isTexture!==!0&&(Qr("WebGLRenderer: copyTextureToTexture function signature has changed."),ce=arguments[0]||null,P=arguments[1],J=arguments[2],K=arguments[3]||0,ae=null);let ze,Ke,it,st,vt,N,O,ee,pe;const ye=P.isCompressedTexture?P.mipmaps[K]:P.image;ae!==null?(ze=ae.max.x-ae.min.x,Ke=ae.max.y-ae.min.y,it=ae.isBox3?ae.max.z-ae.min.z:1,st=ae.min.x,vt=ae.min.y,N=ae.isBox3?ae.min.z:0):(ze=ye.width,Ke=ye.height,it=ye.depth||1,st=0,vt=0,N=0),ce!==null?(O=ce.x,ee=ce.y,pe=ce.z):(O=0,ee=0,pe=0);const Pe=ht.convert(J.format),Te=ht.convert(J.type);let te;J.isData3DTexture?(R.setTexture3D(J,0),te=B.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(R.setTexture2DArray(J,0),te=B.TEXTURE_2D_ARRAY):(R.setTexture2D(J,0),te=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,J.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,J.unpackAlignment);const Ye=B.getParameter(B.UNPACK_ROW_LENGTH),We=B.getParameter(B.UNPACK_IMAGE_HEIGHT),dt=B.getParameter(B.UNPACK_SKIP_PIXELS),Pt=B.getParameter(B.UNPACK_SKIP_ROWS),It=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,ye.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ye.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,st),B.pixelStorei(B.UNPACK_SKIP_ROWS,vt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,N);const Oi=P.isDataArrayTexture||P.isData3DTexture,Lt=J.isDataArrayTexture||J.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const Rn=j.get(P),ui=j.get(J),Pn=j.get(Rn.__renderTarget),qn=j.get(ui.__renderTarget);Ie.bindFramebuffer(B.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Ie.bindFramebuffer(B.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Yn=0;Yn<it;Yn++)Oi&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,j.get(P).__webglTexture,K,N+Yn),P.isDepthTexture?(Lt&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,j.get(J).__webglTexture,K,pe+Yn),B.blitFramebuffer(st,vt,ze,Ke,O,ee,ze,Ke,B.DEPTH_BUFFER_BIT,B.NEAREST)):Lt?B.copyTexSubImage3D(te,K,O,ee,pe+Yn,st,vt,ze,Ke):B.copyTexSubImage2D(te,K,O,ee,pe+Yn,st,vt,ze,Ke);Ie.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Lt?P.isDataTexture||P.isData3DTexture?B.texSubImage3D(te,K,O,ee,pe,ze,Ke,it,Pe,Te,ye.data):J.isCompressedArrayTexture?B.compressedTexSubImage3D(te,K,O,ee,pe,ze,Ke,it,Pe,ye.data):B.texSubImage3D(te,K,O,ee,pe,ze,Ke,it,Pe,Te,ye):P.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,K,O,ee,ze,Ke,Pe,Te,ye.data):P.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,K,O,ee,ye.width,ye.height,Pe,ye.data):B.texSubImage2D(B.TEXTURE_2D,K,O,ee,ze,Ke,Pe,Te,ye);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ye),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,We),B.pixelStorei(B.UNPACK_SKIP_PIXELS,dt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Pt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,It),K===0&&J.generateMipmaps&&B.generateMipmap(te),Ie.unbindTexture()},this.copyTextureToTexture3D=function(P,J,ae=null,ce=null,K=0){return P.isTexture!==!0&&(Qr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,ce=arguments[1]||null,P=arguments[2],J=arguments[3],K=arguments[4]||0),Qr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,J,ae,ce,K)},this.initRenderTarget=function(P){j.get(P).__webglFramebuffer===void 0&&R.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),Ie.unbindTexture()},this.resetState=function(){S=0,E=0,T=null,Ie.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ut._getUnpackColorSpace()}}class hu{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=n}clone(){return new hu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class p1 extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ua extends Un{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Tn,u=Tn,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zh extends qt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fr=new zt,Nh=new zt,Ko=[],Fh=new qs,m1=new zt,Yr=new lt,$r=new kr;class bn extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,m1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fr),Fh.copy(e.boundingBox).applyMatrix4(fr),this.boundingBox.union(Fh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new kr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fr),$r.copy(e.boundingSphere).applyMatrix4(fr),this.boundingSphere.union($r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Yr.geometry=this.geometry,Yr.material=this.material,Yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(n),e.ray.intersectsSphere($r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fr),Nh.multiplyMatrices(n,fr),Yr.matrixWorld=Nh,Yr.raycast(e,Ko);for(let o=0,a=Ko.length;o<a;o++){const l=Ko[o];l.instanceId=r,l.object=this,t.push(l)}Ko.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ua(new Float32Array(s*this.count),s,this.count,La,bi));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class za extends Ys{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kh=new zt,bc=new ru,Zo=new kr,Jo=new V;class fu extends Yt{constructor(e=new Ot,t=new za){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,e.ray.intersectsSphere(Zo)===!1)return;kh.copy(s).invert(),bc.copy(e.ray).applyMatrix4(kh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,M=p;g<M;g++){const m=c.getX(g);Jo.fromBufferAttribute(h,m),Oh(Jo,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,M=p;g<M;g++)Jo.fromBufferAttribute(h,g),Oh(Jo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Oh(i,e,t,n,s,r,o){const a=bc.distanceSqToPoint(i);if(a<t){const l=new V;bc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class wi extends Un{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ki{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,p=(o-u)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ae:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new V,s=[],r=[],o=[],a=new V,l=new zt;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new V)}r[0]=new V,o[0]=new V;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Mn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Mn(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class du extends ki{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ae){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class g1 extends du{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function pu(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,p*=u,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Qo=new V,_l=new pu,Ml=new pu,yl=new pu;class mu extends ki{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new V){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Qo.subVectors(s[0],s[1]).add(s[0]),c=Qo);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Qo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Qo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),M=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),_l.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,M,m),Ml.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,M,m),yl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,M,m)}else this.curveType==="catmullrom"&&(_l.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ml.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),yl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(_l.calc(l),Ml.calc(l),yl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new V().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bh(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function v1(i,e){const t=1-i;return t*t*e}function x1(i,e){return 2*(1-i)*i*e}function _1(i,e){return i*i*e}function so(i,e,t,n){return v1(i,e)+x1(i,t)+_1(i,n)}function M1(i,e){const t=1-i;return t*t*t*e}function y1(i,e){const t=1-i;return 3*t*t*i*e}function b1(i,e){return 3*(1-i)*i*i*e}function S1(i,e){return i*i*i*e}function ro(i,e,t,n,s){return M1(i,e)+y1(i,t)+b1(i,n)+S1(i,s)}class ad extends ki{constructor(e=new Ae,t=new Ae,n=new Ae,s=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ae){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ro(e,s.x,r.x,o.x,a.x),ro(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class w1 extends ki{constructor(e=new V,t=new V,n=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new V){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ro(e,s.x,r.x,o.x,a.x),ro(e,s.y,r.y,o.y,a.y),ro(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ld extends ki{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class E1 extends ki{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cd extends ki{constructor(e=new Ae,t=new Ae,n=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ae){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(so(e,s.x,r.x,o.x),so(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class T1 extends ki{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(so(e,s.x,r.x,o.x),so(e,s.y,r.y,o.y),so(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ud extends ki{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Bh(a,l.x,c.x,u.x,h.x),Bh(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Ae().fromArray(s))}return this}}var Sc=Object.freeze({__proto__:null,ArcCurve:g1,CatmullRomCurve3:mu,CubicBezierCurve:ad,CubicBezierCurve3:w1,EllipseCurve:du,LineCurve:ld,LineCurve3:E1,QuadraticBezierCurve:cd,QuadraticBezierCurve3:T1,SplineCurve:ud});class A1 extends ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Sc[s.type]().fromJSON(s))}return this}}class wc extends A1{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ld(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new cd(this.currentPoint.clone(),new Ae(e,t),new Ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new ad(this.currentPoint.clone(),new Ae(e,t),new Ae(n,s),new Ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ud(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new du(e,t,n,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class gu extends Ot{constructor(e=[new Ae(0,-.5),new Ae(.5,0),new Ae(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Mn(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/t,h=new V,d=new Ae,p=new V,g=new V,M=new V;let m=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,M.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(M.x,M.y,M.z);break;default:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=M.x,p.y+=M.y,p.z+=M.z,p.normalize(),l.push(p.x,p.y,p.z),M.copy(g)}for(let _=0;_<=t;_++){const y=n+_*u*s,x=Math.sin(y),C=Math.cos(y);for(let S=0;S<=e.length-1;S++){h.x=e[S].x*x,h.y=e[S].y,h.z=e[S].x*C,o.push(h.x,h.y,h.z),d.x=_/t,d.y=S/(e.length-1),a.push(d.x,d.y);const E=l[3*S+0]*x,T=l[3*S+1],b=l[3*S+0]*C;c.push(E,T,b)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){const x=y+_*e.length,C=x,S=x+e.length,E=x+e.length+1,T=x+1;r.push(C,S,T),r.push(E,T,S)}this.setIndex(r),this.setAttribute("position",new mt(o,3)),this.setAttribute("uv",new mt(a,2)),this.setAttribute("normal",new mt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gu(e.points,e.segments,e.phiStart,e.phiLength)}}class Na extends gu{constructor(e=1,t=1,n=4,s=8){const r=new wc;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new Na(e.radius,e.length,e.capSegments,e.radialSegments)}}class Lr extends Ot{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new V,u=new Ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const p=n+h/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(a,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class jt extends Ot{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let g=0;const M=[],m=n/2;let f=0;_(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new mt(h,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(p,2));function _(){const x=new V,C=new V;let S=0;const E=(t-e)/n;for(let T=0;T<=r;T++){const b=[],v=T/r,A=v*(t-e)+e;for(let L=0;L<=s;L++){const z=L/s,U=z*l+a,W=Math.sin(U),D=Math.cos(U);C.x=A*W,C.y=-v*n+m,C.z=A*D,h.push(C.x,C.y,C.z),x.set(W,E,D).normalize(),d.push(x.x,x.y,x.z),p.push(z,1-v),b.push(g++)}M.push(b)}for(let T=0;T<s;T++)for(let b=0;b<r;b++){const v=M[b][T],A=M[b+1][T],L=M[b+1][T+1],z=M[b][T+1];(e>0||b!==0)&&(u.push(v,A,z),S+=3),(t>0||b!==r-1)&&(u.push(A,L,z),S+=3)}c.addGroup(f,S,0),f+=S}function y(x){const C=g,S=new Ae,E=new V;let T=0;const b=x===!0?e:t,v=x===!0?1:-1;for(let L=1;L<=s;L++)h.push(0,m*v,0),d.push(0,v,0),p.push(.5,.5),g++;const A=g;for(let L=0;L<=s;L++){const U=L/s*l+a,W=Math.cos(U),D=Math.sin(U);E.x=b*D,E.y=m*v,E.z=b*W,h.push(E.x,E.y,E.z),d.push(0,v,0),S.x=W*.5+.5,S.y=D*.5*v+.5,p.push(S.x,S.y),g++}for(let L=0;L<s;L++){const z=C+L,U=A+L;x===!0?u.push(U,U+1,z):u.push(U+1,U,z),T+=3}c.addGroup(f,T,x===!0?1:2),f+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jn extends jt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Jn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class So extends Ot{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new mt(r,3)),this.setAttribute("normal",new mt(r.slice(),3)),this.setAttribute("uv",new mt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const y=new V,x=new V,C=new V;for(let S=0;S<t.length;S+=3)p(t[S+0],y),p(t[S+1],x),p(t[S+2],C),l(y,x,C,_)}function l(_,y,x,C){const S=C+1,E=[];for(let T=0;T<=S;T++){E[T]=[];const b=_.clone().lerp(x,T/S),v=y.clone().lerp(x,T/S),A=S-T;for(let L=0;L<=A;L++)L===0&&T===S?E[T][L]=b:E[T][L]=b.clone().lerp(v,L/A)}for(let T=0;T<S;T++)for(let b=0;b<2*(S-T)-1;b++){const v=Math.floor(b/2);b%2===0?(d(E[T][v+1]),d(E[T+1][v]),d(E[T][v])):(d(E[T][v+1]),d(E[T+1][v+1]),d(E[T+1][v]))}}function c(_){const y=new V;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(_),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function u(){const _=new V;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];const x=m(_)/2/Math.PI+.5,C=f(_)/Math.PI+.5;o.push(x,1-C)}g(),h()}function h(){for(let _=0;_<o.length;_+=6){const y=o[_+0],x=o[_+2],C=o[_+4],S=Math.max(y,x,C),E=Math.min(y,x,C);S>.9&&E<.1&&(y<.2&&(o[_+0]+=1),x<.2&&(o[_+2]+=1),C<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function p(_,y){const x=_*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const _=new V,y=new V,x=new V,C=new V,S=new Ae,E=new Ae,T=new Ae;for(let b=0,v=0;b<r.length;b+=9,v+=6){_.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),S.set(o[v+0],o[v+1]),E.set(o[v+2],o[v+3]),T.set(o[v+4],o[v+5]),C.copy(_).add(y).add(x).divideScalar(3);const A=m(C);M(S,v+0,_,A),M(E,v+2,y,A),M(T,v+4,x,A)}}function M(_,y,x,C){C<0&&_.x===1&&(o[y]=_.x-1),x.x===0&&x.z===0&&(o[y]=C/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.vertices,e.indices,e.radius,e.details)}}class Fa extends So{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fa(e.radius,e.detail)}}class hd extends wc{constructor(e){super(e),this.uuid=Xs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new wc().fromJSON(s))}return this}}const C1={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=fd(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,p;if(n&&(r=I1(i,e,r,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<s;g+=t)h=i[g],d=i[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return po(r,o,t,a,l,p,0),o}};function fd(i,e,t,n,s){let r,o;if(s===W1(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Gh(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Gh(r,i[r],i[r+1],o);return o&&ka(o,o.next)&&(go(o),o=o.next),o}function Vs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ka(t,t.next)||an(t.prev,t,t.next)===0)){if(go(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function po(i,e,t,n,s,r,o){if(!i)return;!o&&r&&k1(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?P1(i,n,s,r):R1(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),go(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=L1(Vs(i),e,t),po(i,e,t,n,s,r,2)):o===2&&D1(i,e,t,n,s,r):po(Vs(i),e,t,n,s,r,1);break}}}function R1(i){const e=i.prev,t=i,n=i.next;if(an(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&xr(s,a,r,l,o,c,g.x,g.y)&&an(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function P1(i,e,t,n){const s=i.prev,r=i,o=i.next;if(an(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,M=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,f=Ec(p,g,e,t,n),_=Ec(M,m,e,t,n);let y=i.prevZ,x=i.nextZ;for(;y&&y.z>=f&&x&&x.z<=_;){if(y.x>=p&&y.x<=M&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&xr(a,u,l,h,c,d,y.x,y.y)&&an(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=p&&x.x<=M&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&xr(a,u,l,h,c,d,x.x,x.y)&&an(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=M&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&xr(a,u,l,h,c,d,y.x,y.y)&&an(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=_;){if(x.x>=p&&x.x<=M&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&xr(a,u,l,h,c,d,x.x,x.y)&&an(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function L1(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!ka(s,r)&&dd(s,n,n.next,r)&&mo(s,r)&&mo(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),go(n),go(n.next),n=i=r),n=n.next}while(n!==i);return Vs(n)}function D1(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&G1(o,a)){let l=pd(o,a);o=Vs(o,o.next),l=Vs(l,l.next),po(o,e,t,n,s,r,0),po(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function I1(i,e,t,n){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=fd(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(B1(c));for(s.sort(U1),r=0;r<s.length;r++)t=z1(s[r],t);return t}function U1(i,e){return i.x-e.x}function z1(i,e){const t=N1(i,e);if(!t)return e;const n=pd(t,i);return Vs(n,n.next),Vs(t,t.next)}function N1(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&xr(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),mo(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&F1(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function F1(i,e){return an(i.prev,i,e.prev)<0&&an(e.next,i,i.next)<0}function k1(i,e,t,n){let s=i;do s.z===0&&(s.z=Ec(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,O1(s)}function O1(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Ec(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function B1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function xr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function G1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!V1(i,e)&&(mo(i,e)&&mo(e,i)&&H1(i,e)&&(an(i.prev,i,e.prev)||an(i,e.prev,e))||ka(i,e)&&an(i.prev,i,i.next)>0&&an(e.prev,e,e.next)>0)}function an(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ka(i,e){return i.x===e.x&&i.y===e.y}function dd(i,e,t,n){const s=ta(an(i,e,t)),r=ta(an(i,e,n)),o=ta(an(t,n,i)),a=ta(an(t,n,e));return!!(s!==r&&o!==a||s===0&&ea(i,t,e)||r===0&&ea(i,n,e)||o===0&&ea(t,i,n)||a===0&&ea(t,e,n))}function ea(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ta(i){return i>0?1:i<0?-1:0}function V1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&dd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function mo(i,e){return an(i.prev,i,i.next)<0?an(i,e,i.next)>=0&&an(i,i.prev,e)>=0:an(i,e,i.prev)<0||an(i,i.next,e)<0}function H1(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function pd(i,e){const t=new Tc(i.i,i.x,i.y),n=new Tc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Gh(i,e,t,n){const s=new Tc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function go(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Tc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function W1(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class oo{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return oo.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Vh(e),Hh(n,e);let o=e.length;t.forEach(Vh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Hh(n,t[l]);const a=C1.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Vh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Hh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class vu extends Ot{constructor(e=new hd([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new mt(s,3)),this.setAttribute("uv",new mt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:X1;let y,x=!1,C,S,E,T;f&&(y=f.getSpacedPoints(u),x=!0,d=!1,C=f.computeFrenetFrames(u,!1),S=new V,E=new V,T=new V),d||(m=0,p=0,g=0,M=0);const b=a.extractPoints(c);let v=b.shape;const A=b.holes;if(!oo.isClockWise(v)){v=v.reverse();for(let de=0,Me=A.length;de<Me;de++){const B=A[de];oo.isClockWise(B)&&(A[de]=B.reverse())}}const z=oo.triangulateShape(v,A),U=v;for(let de=0,Me=A.length;de<Me;de++){const B=A[de];v=v.concat(B)}function W(de,Me,B){return Me||console.error("THREE.ExtrudeGeometry: vec does not exist"),de.clone().addScaledVector(Me,B)}const D=v.length,k=z.length;function G(de,Me,B){let $e,be,Oe;const Ie=de.x-Me.x,nt=de.y-Me.y,j=B.x-de.x,R=B.y-de.y,w=Ie*Ie+nt*nt,X=Ie*R-nt*j;if(Math.abs(X)>Number.EPSILON){const ne=Math.sqrt(w),ie=Math.sqrt(j*j+R*R),re=Me.x-nt/ne,Fe=Me.y+Ie/ne,Se=B.x-R/ie,De=B.y+j/ie,ot=((Se-re)*R-(De-Fe)*j)/(Ie*R-nt*j);$e=re+Ie*ot-de.x,be=Fe+nt*ot-de.y;const we=$e*$e+be*be;if(we<=2)return new Ae($e,be);Oe=Math.sqrt(we/2)}else{let ne=!1;Ie>Number.EPSILON?j>Number.EPSILON&&(ne=!0):Ie<-Number.EPSILON?j<-Number.EPSILON&&(ne=!0):Math.sign(nt)===Math.sign(R)&&(ne=!0),ne?($e=-nt,be=Ie,Oe=Math.sqrt(w)):($e=Ie,be=nt,Oe=Math.sqrt(w/2))}return new Ae($e/Oe,be/Oe)}const Y=[];for(let de=0,Me=U.length,B=Me-1,$e=de+1;de<Me;de++,B++,$e++)B===Me&&(B=0),$e===Me&&($e=0),Y[de]=G(U[de],U[B],U[$e]);const Q=[];let se,Ee=Y.concat();for(let de=0,Me=A.length;de<Me;de++){const B=A[de];se=[];for(let $e=0,be=B.length,Oe=be-1,Ie=$e+1;$e<be;$e++,Oe++,Ie++)Oe===be&&(Oe=0),Ie===be&&(Ie=0),se[$e]=G(B[$e],B[Oe],B[Ie]);Q.push(se),Ee=Ee.concat(se)}for(let de=0;de<m;de++){const Me=de/m,B=p*Math.cos(Me*Math.PI/2),$e=g*Math.sin(Me*Math.PI/2)+M;for(let be=0,Oe=U.length;be<Oe;be++){const Ie=W(U[be],Y[be],$e);oe(Ie.x,Ie.y,-B)}for(let be=0,Oe=A.length;be<Oe;be++){const Ie=A[be];se=Q[be];for(let nt=0,j=Ie.length;nt<j;nt++){const R=W(Ie[nt],se[nt],$e);oe(R.x,R.y,-B)}}}const ke=g+M;for(let de=0;de<D;de++){const Me=d?W(v[de],Ee[de],ke):v[de];x?(E.copy(C.normals[0]).multiplyScalar(Me.x),S.copy(C.binormals[0]).multiplyScalar(Me.y),T.copy(y[0]).add(E).add(S),oe(T.x,T.y,T.z)):oe(Me.x,Me.y,0)}for(let de=1;de<=u;de++)for(let Me=0;Me<D;Me++){const B=d?W(v[Me],Ee[Me],ke):v[Me];x?(E.copy(C.normals[de]).multiplyScalar(B.x),S.copy(C.binormals[de]).multiplyScalar(B.y),T.copy(y[de]).add(E).add(S),oe(T.x,T.y,T.z)):oe(B.x,B.y,h/u*de)}for(let de=m-1;de>=0;de--){const Me=de/m,B=p*Math.cos(Me*Math.PI/2),$e=g*Math.sin(Me*Math.PI/2)+M;for(let be=0,Oe=U.length;be<Oe;be++){const Ie=W(U[be],Y[be],$e);oe(Ie.x,Ie.y,h+B)}for(let be=0,Oe=A.length;be<Oe;be++){const Ie=A[be];se=Q[be];for(let nt=0,j=Ie.length;nt<j;nt++){const R=W(Ie[nt],se[nt],$e);x?oe(R.x,R.y+y[u-1].y,y[u-1].x+B):oe(R.x,R.y,h+B)}}}H(),Z();function H(){const de=s.length/3;if(d){let Me=0,B=D*Me;for(let $e=0;$e<k;$e++){const be=z[$e];me(be[2]+B,be[1]+B,be[0]+B)}Me=u+m*2,B=D*Me;for(let $e=0;$e<k;$e++){const be=z[$e];me(be[0]+B,be[1]+B,be[2]+B)}}else{for(let Me=0;Me<k;Me++){const B=z[Me];me(B[2],B[1],B[0])}for(let Me=0;Me<k;Me++){const B=z[Me];me(B[0]+D*u,B[1]+D*u,B[2]+D*u)}}n.addGroup(de,s.length/3-de,0)}function Z(){const de=s.length/3;let Me=0;he(U,Me),Me+=U.length;for(let B=0,$e=A.length;B<$e;B++){const be=A[B];he(be,Me),Me+=be.length}n.addGroup(de,s.length/3-de,1)}function he(de,Me){let B=de.length;for(;--B>=0;){const $e=B;let be=B-1;be<0&&(be=de.length-1);for(let Oe=0,Ie=u+m*2;Oe<Ie;Oe++){const nt=D*Oe,j=D*(Oe+1),R=Me+$e+nt,w=Me+be+nt,X=Me+be+j,ne=Me+$e+j;Le(R,w,X,ne)}}}function oe(de,Me,B){l.push(de),l.push(Me),l.push(B)}function me(de,Me,B){Ue(de),Ue(Me),Ue(B);const $e=s.length/3,be=_.generateTopUV(n,s,$e-3,$e-2,$e-1);Xe(be[0]),Xe(be[1]),Xe(be[2])}function Le(de,Me,B,$e){Ue(de),Ue(Me),Ue($e),Ue(Me),Ue(B),Ue($e);const be=s.length/3,Oe=_.generateSideWallUV(n,s,be-6,be-3,be-2,be-1);Xe(Oe[0]),Xe(Oe[1]),Xe(Oe[3]),Xe(Oe[1]),Xe(Oe[2]),Xe(Oe[3])}function Ue(de){s.push(l[de*3+0]),s.push(l[de*3+1]),s.push(l[de*3+2])}function Xe(de){r.push(de.x),r.push(de.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return q1(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Sc[s.type]().fromJSON(s)),new vu(n,e.options)}}const X1={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new Ae(r,o),new Ae(a,l),new Ae(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],M=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Ae(o,1-l),new Ae(c,1-h),new Ae(d,1-g),new Ae(M,1-f)]:[new Ae(a,1-l),new Ae(u,1-h),new Ae(p,1-g),new Ae(m,1-f)]}};function q1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Us extends So{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Us(e.radius,e.detail)}}class Dr extends So{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Dr(e.radius,e.detail)}}class _s extends Ot{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/s,p=new V,g=new Ae;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let M=0;M<s;M++){const m=M*(n+1);for(let f=0;f<n;f++){const _=f+m,y=_,x=_+n+1,C=_+n+2,S=_+1;a.push(y,x,S),a.push(x,C,S)}}this.setIndex(a),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Qn extends Ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new V,d=new V,p=[],g=[],M=[],m=[];for(let f=0;f<=n;f++){const _=[],y=f/n;let x=0;f===0&&o===0?x=.5/t:f===n&&l===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){const S=C/t;h.x=-e*Math.cos(s+S*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(s+S*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),M.push(d.x,d.y,d.z),m.push(S+x,1-y),_.push(c++)}u.push(_)}for(let f=0;f<n;f++)for(let _=0;_<t;_++){const y=u[f][_+1],x=u[f][_],C=u[f+1][_],S=u[f+1][_+1];(f!==0||o>0)&&p.push(y,x,S),(f!==n-1||l<Math.PI)&&p.push(x,C,S)}this.setIndex(p),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(M,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yr extends Ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new V,h=new V,d=new V;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const M=g/s*r,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(M),h.y=(e+t*Math.cos(m))*Math.sin(M),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const M=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,_=(s+1)*p+g;o.push(M,m,_),o.push(m,f,_)}this.setIndex(o),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Y1 extends sn{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class $1 extends Ys{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iu,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Xt extends Ys{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iu,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xu extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class j1 extends xu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const bl=new zt,Wh=new V,Xh=new V;class md{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new au,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wh),Xh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xh),t.updateMatrixWorld(),bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const qh=new zt,jr=new V,Sl=new V;class K1 extends md{constructor(){super(new Zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(jr),Sl.copy(n.position),Sl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Sl),n.updateMatrixWorld(),s.makeTranslation(-jr.x,-jr.y,-jr.z),qh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qh)}}class vo extends xu{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new K1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Z1 extends md{constructor(){super(new lu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class J1 extends xu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Z1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Yh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Yh(){return performance.now()}const $h=new zt;class Q1{constructor(e,t,n=0,s=1/0){this.ray=new ru(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ou,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $h.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($h),this}intersectObject(e,t=!0,n=[]){return Ac(e,this,n,t),n.sort(jh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ac(e[s],this,n,t);return n.sort(jh),n}}function jh(i,e){return i.distance-e.distance}function Ac(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ac(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$c);const dn=(i,e={})=>new Xt({color:i,flatShading:!0,...e});function cs(i){const e=i.map(o=>o.toNonIndexed()),t=e.reduce((o,a)=>o+a.attributes.position.count,0),n=new Float32Array(t*3);let s=0;for(const o of e)n.set(o.attributes.position.array,s),s+=o.attributes.position.array.length;const r=new Ot;return r.setAttribute("position",new qt(n,3)),r.computeVertexNormals(),r}function e_(i,e,t,n,s,r){const o=r.id,{heightAt:a,pathDist:l,plinths:c}=e,u=e.lighthouse.pos,h=new Yt,d=new Re,p=[],g=(F,xe,ue,Qe=2,tt=5)=>l(F,xe)>ue&&Math.hypot(F-u.x,xe-u.z)>tt&&!c.some(Ce=>Math.hypot(Ce.x-F,Ce.z-xe)<Qe),M=(F,xe,ue=F*20)=>{const Qe=[];for(let tt=0;tt<ue&&Qe.length<F;tt++){const Ce=(n()-.5)*104,Ze=(n()-.5)*104,rt=a(Ce,Ze);xe(Ce,Ze,rt)&&Qe.push({x:Ce,z:Ze,h:rt,r:n(),s:n()})}return Qe},m=(F,xe,ue,Qe,tt=!1)=>{const Ce=new bn(F,xe,Math.max(1,ue.length));return Ce.count=ue.length,ue.forEach((Ze,rt)=>{Qe(Ze,rt,Ce),h.updateMatrix(),Ce.setMatrixAt(rt,h.matrix)}),Ce.instanceColor&&(Ce.instanceColor.needsUpdate=!0),Ce.castShadow=tt,Ce.receiveShadow=!0,i.add(Ce),Ce},f=(t.mobile?.55:1)*1.8,_=(()=>{const F=[[-.9,.5,.05],[-.45,.68,-.06],[0,.78,.02],[.45,.66,-.04],[.9,.48,.06]].map(([tt,Ce,Ze])=>{const rt=new Jn(.045,Ce,3);return rt.translate(0,Ce/2,0),rt.rotateZ(tt*.45),rt.rotateX(Ze*3),rt.translate(tt*.09,0,Ze),rt}),xe=cs(F),ue=xe.attributes.position,Qe=[];for(let tt=0;tt<ue.count;tt++){const Ce=Mt.clamp(ue.getY(tt)/.7,0,1),Ze=.5+.7*Ce;Qe.push(Ze,Ze,Ze*.95)}return xe.setAttribute("color",new mt(Qe,3)),xe})(),y=M(Math.round(280*f),(F,xe,ue)=>ue>.8&&g(F,xe,1.7,1.7,4.4));m(_,dn("#ffffff",{vertexColors:!0}),y,(F,xe,ue)=>{h.position.set(F.x,F.h-.05,F.z),h.rotation.set(0,F.r*6,0),h.scale.setScalar(.8+F.s*.7),ue.setColorAt(xe,d.set(o==="vinter"?F.s<.5?"#c8d4c0":"#e6eef4":o==="vulkan"?F.s<.5?"#5a6a3a":"#7a7a4a":F.s<.5?"#7fae4e":"#9cc45e"))});const x=M(Math.round((o==="vinter"?0:o==="vulkan"?30:120)*f),(F,xe,ue)=>ue>.85&&g(F,xe,1.9,2,4.5)),C=new jt(.025,.03,.4,4);C.translate(0,.2,0);const S=new Us(.11,0);S.translate(0,.42,0);const E=["#ff8fb0","#ffd54a","#ffffff","#b58cff","#ff7a4a"];if(m(C,dn("#5f8f3a"),x,F=>{h.position.set(F.x,F.h-.03,F.z),h.rotation.set(0,0,0),h.scale.setScalar(.9+F.s*.6)}),m(S,dn("#ffffff"),x,(F,xe,ue)=>{h.position.set(F.x,F.h-.03,F.z),h.scale.setScalar(.9+F.s*.6),ue.setColorAt(xe,d.set(E[Math.floor(F.r*E.length)]))}),o!=="vulkan"){const F=(()=>{const Qe=[],tt=[];for(let rt=0;rt<8;rt++){const gt=rt/8*Math.PI*2,Ct=.32;Qe.push(0,0,0,Math.cos(gt)*.12,0,Math.sin(gt)*.12,Math.cos(gt-Ct)*.045,0,Math.sin(gt-Ct)*.045),Qe.push(0,0,0,Math.cos(gt+Ct)*.045,0,Math.sin(gt+Ct)*.045,Math.cos(gt)*.12,0,Math.sin(gt)*.12);for(let mn=0;mn<6;mn++)tt.push(1,1,1)}for(let rt=0;rt<6;rt++){const gt=rt/6*Math.PI*2,Ct=(rt+1)/6*Math.PI*2;Qe.push(0,.012,0,Math.cos(Ct)*.035,.012,Math.sin(Ct)*.035,Math.cos(gt)*.035,.012,Math.sin(gt)*.035);for(let mn=0;mn<3;mn++)tt.push(1,.78,.18)}const Ze=new Ot;return Ze.setAttribute("position",new mt(Qe,3)),Ze.setAttribute("color",new mt(tt,3)),Ze.setAttribute("normal",new mt(new Array(Qe.length/3).fill(0).flatMap(()=>[0,1,0]),3)),Ze})(),xe=M(Math.round((o==="vinter"?10:60)*f),(Qe,tt,Ce)=>Ce>.9&&g(Qe,tt,1.6,2,4.5)),ue=[];for(const Qe of xe){const tt=5+Math.floor(Qe.r*9);for(let Ce=0;Ce<tt;Ce++){const Ze=n()*6.28,rt=Math.sqrt(n())*1.6,gt=Qe.x+Math.cos(Ze)*rt,Ct=Qe.z+Math.sin(Ze)*rt,mn=a(gt,Ct);mn>.85&&g(gt,Ct,1.4,2,4.5)&&ue.push({x:gt,z:Ct,h:mn,r:n(),s:n()})}}m(F,new Xt({color:"#ffffff",vertexColors:!0,side:cn}),ue,(Qe,tt,Ce)=>{h.position.set(Qe.x,Qe.h+.035,Qe.z),h.rotation.set((Qe.s-.5)*.3,Qe.r*6.28,0),h.scale.setScalar(1.3+Qe.s*.7),Ce.setColorAt(tt,d.setRGB(1,.97+Qe.r*.03,.94+Qe.s*.06))})}const T=M(Math.round((o==="tak"?36:0)*f),(F,xe,ue)=>ue>1&&g(F,xe,2.4,2.4,5)),b=new Qn(.22,8,4,0,Math.PI*2,0,Math.PI/2);b.scale(1,.7,1),b.translate(0,.28,0);const v=new jt(.07,.09,.3,6);v.translate(0,.14,0),m(v,dn("#f4ead6"),T,F=>{h.position.set(F.x,F.h-.03,F.z),h.rotation.set(0,0,(F.r-.5)*.3),h.scale.setScalar(.8+F.s)},!0),m(b,dn("#ffffff"),T,(F,xe,ue)=>{h.position.set(F.x,F.h-.03,F.z),h.rotation.set(0,0,(F.r-.5)*.3),h.scale.setScalar(.8+F.s),ue.setColorAt(xe,d.set(F.r<.6?"#d8453a":"#c89a5a"))},!0);const A=cs([[-.08,0],[.07,.05],[0,-.07]].map(([F,xe],ue)=>{const Qe=new Jn(.04,1.1+ue*.2,3);return Qe.translate(F,.55+ue*.1,xe),Qe}).concat([(()=>{const F=new Na(.05,.18,2,4);return F.translate(.07,1.25,.05),F})()])),L=M(Math.round(150*f),(F,xe,ue)=>ue>.05&&ue<.55&&g(F,xe,2.2,2,5),6e3),z=m(A,dn(o==="vinter"?"#a89878":o==="vulkan"?"#5a5a3a":"#9aa856"),L,F=>{h.position.set(F.x,F.h-.1,F.z),h.rotation.set(0,F.r*6,0),h.scale.setScalar(.8+F.s*.6)}),U=[],W=[];for(const F of e.paths)for(const xe of[-1,1]){let ue=null,Qe=0,tt=0;for(let Ce=2;Ce<F.length-7;Ce+=1.7){const Ze=Ce/F.length,rt=F.curve.getPointAt(Ze),gt=F.curve.getTangentAt(Ze),Ct=rt.x-gt.z*xe*2.25,mn=rt.z+gt.x*xe*2.25,ni=a(Ct,mn);if(!(ni>.5&&tt<=0&&g(Ct,mn,1.9,2.6,6))){ue=null,tt>0&&tt--;continue}U.push({x:Ct,z:mn,h:ni}),ue&&W.push({a:ue,b:{x:Ct,z:mn,h:ni}}),ue={x:Ct,z:mn,h:ni},++Qe>4+Math.floor(n()*5)&&(Qe=0,ue=null,tt=3+Math.floor(n()*5))}}const D=new On(.14,.8,.14);D.translate(0,.4,0);const k=new On(1,.07,.06),G=dn("#a07650");m(D,G,U,F=>{h.position.set(F.x,F.h-.05,F.z),h.rotation.set(0,n()*.3,(n()-.5)*.12),h.scale.set(1,1,1)},!0);const Y=W.flatMap(F=>[{...F,y:.32},{...F,y:.62}]);m(k,G,Y,({a:F,b:xe,y:ue})=>{const Qe=Math.hypot(xe.x-F.x,xe.z-F.z);h.position.set((F.x+xe.x)/2,(F.h+xe.h)/2+ue-.05,(F.z+xe.z)/2),h.rotation.set(0,-Math.atan2(xe.z-F.z,xe.x-F.x),0),h.scale.set(Qe,1,1)},!0);const Q=r.dockTheta??-2.35,se=new Ae(Math.cos(Q),Math.sin(Q)),Ee=s(Q);let ke=Ee-6;for(let F=Ee-10;F<Ee+4;F+=.25)if(a(se.x*F,se.y*F)<.3){ke=F;break}const H=new bt,Z=dn("#b48a5e"),he=dn("#6e4a2c"),oe=8,me=ke-2.5;for(let F=0;F<oe/.55;F++){const xe=new lt(new On(.5,.12,2.2),Z);xe.position.set(me+F*.55,.75+(n()-.5)*.04,0),xe.rotation.y=(n()-.5)*.05,xe.castShadow=xe.receiveShadow=!0,H.add(xe)}for(let F=0;F<=oe;F+=2)for(const xe of[-1,1]){const ue=new lt(new jt(.12,.12,2.2,6),he);ue.position.set(me+F,.1,xe*1.05),ue.castShadow=!0,H.add(ue)}H.rotation.y=-Q,i.add(H);const Le=new bt,Ue=new jt(.9,.9,3.4,10,1,!0,0,Math.PI);Ue.rotateZ(Math.PI/2),Ue.rotateX(Math.PI/2),Ue.scale(1,.6,.7);const Xe=new lt(Ue,dn("#3f6f9a",{side:cn}));Xe.rotation.y=Math.PI/2,Xe.castShadow=!0,Le.add(Xe);for(const F of[-.6,.6]){const xe=new lt(new On(.3,.08,1.2),Z);xe.position.set(F,-.15,0),Le.add(xe)}const de=new lt(new On(2.4,.06,.12),Z);de.position.set(.2,.05,.4),de.rotation.y=.3,Le.add(de);const Me=se.x*(me+oe-1)+-se.y*2.1,B=se.y*(me+oe-1)+se.x*2.1;Le.position.set(Me,.3,B),Le.rotation.y=-Q,i.add(Le);const $e=new bt,be=new lt(new ai(3,1.4,10,5),new Nt({color:"#4a3a2a",wireframe:!0}));be.position.y=1;const Oe=be.geometry.attributes.position;for(let F=0;F<Oe.count;F++)Oe.setZ(F,Math.sin(Oe.getX(F)/3*Math.PI+1.5)*.15-Math.abs(Oe.getY(F))*.05);$e.add(be);for(const F of[-1.6,1.6]){const xe=new lt(new jt(.07,.09,2,5),he);xe.position.set(F,.9,0),xe.castShadow=!0,$e.add(xe)}for(let F=0;F<5;F++){const xe=new lt(new Qn(.09,6,4),dn("#f0a43a"));xe.position.set(-1.2+F*.6,1.66,.05),$e.add(xe)}const Ie=ke-4.5,nt=4.2,j=se.x*Ie-se.y*nt,R=se.y*Ie+se.x*nt;$e.position.set(j,a(j,R)-.1,R),$e.rotation.y=-Q+Math.PI/2,i.add($e),p.push({x:j,z:R,r:1.4});const w=new jt(.42,.42,.95,10);w.translate(0,.47,0);const X=new jt(.44,.44,.08,10),ne=new On(.8,.8,.8);ne.translate(0,.4,0);const ie=[],re=(F,xe,ue,Qe)=>{for(let tt=0;tt<60&&ue>0;tt++){const Ce=F+(n()-.5)*6,Ze=xe+(n()-.5)*6,rt=a(Ce,Ze);rt<.4||!g(Ce,Ze,2.3,2.4,4.6)||ie.some(gt=>Math.hypot(gt.x-Ce,gt.z-Ze)<1.1)||(ie.push({x:Ce,z:Ze,h:rt,kind:Qe??(n()<.6?"barrel":"crate"),r:n()}),ue--)}};re(se.x*(ke-2.5),se.y*(ke-2.5),5),re(u.x+6,u.z+1,3,"barrel"),re(u.x-6,u.z+2,2);const Fe=ie.filter(F=>F.kind==="barrel"),Se=ie.filter(F=>F.kind==="crate");m(w,dn("#8a5a36"),Fe,F=>{h.position.set(F.x,F.h-.05,F.z),h.rotation.set(0,F.r*6,0),h.scale.setScalar(1)},!0),m(X,dn("#3e3a38"),Fe.flatMap(F=>[{...F,y:.2},{...F,y:.75}]),F=>{h.position.set(F.x,F.h-.05+F.y,F.z)},!1),m(ne,dn("#b8925e"),Se,F=>{h.position.set(F.x,F.h-.05,F.z),h.rotation.set(0,F.r*6,0),h.scale.setScalar(.8+F.r*.4)},!0);for(const F of ie)p.push({x:F.x,z:F.z,r:.55});const De=M(Math.round(380*f),(F,xe,ue)=>ue>.9&&g(F,xe,1.6,1.6,4.4)),ot=new Us(.06,0);ot.translate(0,.06,0),m(ot,new Xt({color:o==="vulkan"?"#ff9a5a":"#fffdf4"}),De,F=>{h.position.set(F.x,F.h-.02,F.z),h.rotation.set(0,0,0),h.scale.setScalar(.8+F.s*.8)});const we=(F,xe,ue)=>{const Qe=[];for(let tt=0;tt<F*40&&Qe.length<F;tt++){const Ce=(n()-.5)*130,Ze=(n()-.5)*130,rt=a(Ce,Ze),gt=.05-rt;gt>xe&&gt<ue&&Math.hypot(Ce-u.x,Ze-u.z)>6&&Qe.push({x:Ce,z:Ze,h:rt,r:n(),s:n()})}return Qe},je=cs([0,1,2].map(F=>{const xe=new Jn(.08,.9+F*.25,3);return xe.translate((F-1)*.12,.45+F*.12,F%2*.1),xe.rotateZ((F-1)*.25),xe})),at=we(Math.round(90*f),.35,1.8),ut=m(je,dn("#4f9a5a"),at,F=>{h.position.set(F.x,F.h,F.z),h.rotation.set(0,F.r*6,0),h.scale.setScalar(.8+F.s*.7)}),Je=cs([[0,0,.32],[.3,.1,.22],[-.25,.05,.26],[.05,.3,.2]].map(([F,xe,ue])=>{const Qe=new Us(ue,0);return Qe.translate(F,ue*.8,xe),Qe})),wt=we(Math.round((o==="tak"?28:0)*f),.5,1.6),ht=["#b58cff","#ff8fa8","#ffc65a","#7fd6ff"];if(m(Je,dn("#ffffff"),wt,(F,xe,ue)=>{h.position.set(F.x,F.h,F.z),h.rotation.set(0,F.r*6,0),h.scale.setScalar(.8+F.s*.9),ue.setColorAt(xe,d.set(ht[Math.floor(F.r*ht.length)]))}),o==="tak"){const F=cs([[0,0,0,.55],[.12,.05,.4,.42],[-.13,-.04,-.45,.4],[.05,.12,.2,.33],[-.06,-.1,-.15,.36]].map(([Ce,Ze,rt,gt])=>{const Ct=new Jn(.05,gt,4);return Ct.translate(0,gt/2,0),Ct.rotateZ(rt),Ct.rotateX(Ze*2),Ct.translate(Ce,0,Ze),Ct})),xe=cs([(()=>{const Ce=new jt(.12,.16,.12,7);return Ce.translate(0,.06,0),Ce})(),...Array.from({length:7},(Ce,Ze)=>{const rt=new Jn(.025,.2,3),gt=Ze/7*6.28;return rt.translate(0,.1,0),rt.rotateZ(.5),rt.rotateY(gt),rt.translate(Math.cos(gt)*.08,.12,-Math.sin(gt)*.08),rt})]),ue=M(Math.round(16*f),(Ce,Ze,rt)=>.05-rt>.08&&e.landDist(Ce,Ze)>5,3e4).map(Ce=>({...Ce,big:2.4,pool:!0})),Qe=[...we(Math.round(36*f),.12,.9),...ue],tt=["#ff5a80","#a060ff","#ffb820","#ff5a2a","#ff7ad0","#f4d070"];m(F,dn("#ffffff"),Qe.filter((Ce,Ze)=>Ze%2===0),(Ce,Ze,rt)=>{h.position.set(Ce.x,Ce.h-.02,Ce.z),h.rotation.set(0,Ce.r*6,0),h.scale.setScalar((.8+Ce.s*.8)*(Ce.big??1)),rt.setColorAt(Ze,d.set(tt[Math.floor(Ce.r*tt.length)]).multiplyScalar(Ce.pool?1.6:1))}),m(xe,dn("#ffffff"),Qe.filter((Ce,Ze)=>Ze%2===1),(Ce,Ze,rt)=>{h.position.set(Ce.x,Ce.h-.02,Ce.z),h.rotation.set(0,Ce.r*6,0),h.scale.setScalar((.9+Ce.s*.9)*(Ce.big??1)),rt.setColorAt(Ze,d.set(tt[(Math.floor(Ce.s*tt.length)+2)%tt.length]).multiplyScalar(Ce.pool?1.6:1))})}const Et=cs([(()=>{const F=new Qn(.17,7,4);return F.scale(1.2,.5,.85),F.translate(0,.07,0),F})(),...[-1,1].map(F=>{const xe=new Qn(.06,5,3);return xe.scale(1.3,.7,1),xe.translate(F*.17,.08,.15),xe}),...[-1,1].flatMap(F=>[0,1,2].map(xe=>{const ue=new On(.16,.02,.02);return ue.rotateZ(F*-.5),ue.translate(F*.18,.04,-.06+xe*.07),ue})),...[-1,1].map(F=>{const xe=new Qn(.025,4,3);return xe.translate(F*.05,.13,.09),xe})]),$=o==="vulkan"?[]:M(Math.round((o==="vinter"?5:18)*f),(F,xe,ue)=>ue>.08&&ue<.42&&g(F,xe,2.2,2,5),12e3).map(F=>({...F,home:{x:F.x,z:F.z},dir:F.r*6.28,t:F.s*4,run:0})),Ne=m(Et,dn(o==="vinter"?"#b8584a":"#d8553a"),$,F=>{h.position.set(F.x,F.h,F.z),h.rotation.set(0,F.dir,0),h.scale.setScalar(1)},!0),le=cs([(()=>{const xe=new Qn(.07,6,4);return xe.scale(.6,.5,1.4),xe})(),(()=>{const xe=new Jn(.06,.1,3);return xe.rotateX(-Math.PI/2),xe.translate(0,0,-.13),xe})()]),_e=[...we(Math.round(26*f),.1,.8),...M(Math.round(12*f),(F,xe,ue)=>.05-ue>.12&&e.landDist(F,xe)>5,3e4).map(F=>({...F,big:1.5}))].map(F=>({...F,rad:.5+F.s*.9,sp:(.5+F.r)*(F.s<.5?1:-1)})),Ve=["#ff9a3a","#3a7ad8","#f2c94c","#2f8f9a"],He=m(le,dn("#ffffff"),_e,(F,xe,ue)=>{h.position.set(F.x,F.h,F.z),ue.setColorAt(xe,d.set(Ve[xe%Ve.length]))}),ft=new Dr(.16,0);ft.scale(.45,.3,1.4);const Bt=we(t.mobile?5:8,.9,2.6).map(F=>({...F,rad:2+F.s*3,speed:(.25+F.r*.3)*(F.r<.5?1:-1)})),Vt=9,At=new bn(ft,new Nt({color:"#2f5f72",transparent:!0,opacity:.75}),Math.max(1,Bt.length*Vt));At.count=Bt.length*Vt,At.renderOrder=1,i.add(At);const Cn=Array.from({length:Vt},()=>[(n()-.5)*1.4,(n()-.5)*.25,(n()-.5)*1.4,n()*6]),Sn=F=>{Le.position.y=.3+Math.sin(F*1.2)*.08,Le.rotation.z=Math.sin(F*.9)*.04,Le.rotation.x=Math.sin(F*1.3+1)*.03,Bt.forEach((ue,Qe)=>{const tt=F*ue.speed+ue.r*6,Ce=ue.x+Math.cos(tt)*ue.rad,Ze=ue.z+Math.sin(tt)*ue.rad,rt=Math.atan2(-Math.sin(tt)*ue.speed,Math.cos(tt)*ue.speed);for(let gt=0;gt<Vt;gt++){const[Ct,mn,ni,ci]=Cn[gt];h.position.set(Ce+Ct+Math.sin(F*2+ci)*.1,Math.max(a(Ce,Ze)+.25,-.75)+mn,Ze+ni),h.rotation.set(0,rt+Math.sin(F*6+ci)*.15,0),h.scale.setScalar(1),h.updateMatrix(),At.setMatrixAt(Qe*Vt+gt,h.matrix)}}),At.instanceMatrix.needsUpdate=!0,_e.forEach((ue,Qe)=>{const tt=F*ue.sp+ue.r*6+Math.sin(F*.7+Qe)*.6,Ce=ue.x+Math.cos(tt)*ue.rad,Ze=ue.z+Math.sin(tt)*ue.rad;h.position.set(Ce,Math.min(a(Ce,Ze)+.08,0),Ze),h.rotation.set(0,-tt+(ue.sp>0?0:Math.PI),Math.sin(F*9+Qe)*.2),h.scale.setScalar((.9+ue.s*.5)*(ue.big??1)),h.updateMatrix(),He.setMatrixAt(Qe,h.matrix)}),He.instanceMatrix.needsUpdate=!0;const xe=Math.min(.05,Math.max(0,F-(Sn.last??F)));Sn.last=F,$.forEach((ue,Qe)=>{if(ue.t-=xe,ue.t<=0&&(ue.run>0?(ue.run=0,ue.t=.8+Math.random()*2.5):(ue.run=(Math.random()<.5?-1:1)*(.9+Math.random()*.8),ue.t=.4+Math.random()*.9,Math.random()<.3&&(ue.dir+=(Math.random()-.5)*1.5))),ue.run){const tt=ue.x+Math.cos(ue.dir)*ue.run*xe,Ce=ue.z-Math.sin(ue.dir)*ue.run*xe,Ze=a(tt,Ce);Ze>.05&&Ze<.5&&Math.hypot(tt-ue.home.x,Ce-ue.home.z)<3.5?(ue.x=tt,ue.z=Ce,ue.h=Ze):ue.run=-ue.run}h.position.set(ue.x,ue.h+(ue.run?Math.abs(Math.sin(F*30+Qe))*.015:0),ue.z),h.rotation.set(0,ue.dir,ue.run?Math.sin(F*30+Qe)*.08:0),h.scale.setScalar(1),h.updateMatrix(),Ne.setMatrixAt(Qe,h.matrix)}),Ne.instanceMatrix.needsUpdate=!0,!((F*60|0)%2)&&(L.forEach((ue,Qe)=>{h.position.set(ue.x,ue.h-.1,ue.z),h.rotation.set(Math.sin(F*1.7+ue.x*.3)*.08,ue.r*6,Math.cos(F*1.4+ue.z*.3)*.08),h.scale.setScalar(.8+ue.s*.6),h.updateMatrix(),z.setMatrixAt(Qe,h.matrix)}),z.instanceMatrix.needsUpdate=!0,at.forEach((ue,Qe)=>{h.position.set(ue.x,ue.h,ue.z),h.rotation.set(Math.sin(F*1.1+ue.x)*.12,ue.r*6,Math.cos(F*.9+ue.z)*.12),h.scale.setScalar(.8+ue.s*.7),h.updateMatrix(),ut.setMatrixAt(Qe,h.matrix)}),ut.instanceMatrix.needsUpdate=!0)};H.updateMatrixWorld(!0);const li=[];return H.children.forEach(F=>{if(F.geometry.type==="CylinderGeometry"){const xe=F.getWorldPosition(new V);li.push({x:xe.x,z:xe.z,r:.15})}}),li.push({x:Me,z:B,r:.9}),{colliders:p,update:Sn,obstacles:li}}function Kh(i,{heightTex:e,ext:t,grid:n,quality:s,sunDir:r,colors:o,level:a=.05,size:l=220,center:c=[0,0],maxDepth:u=100}){const h=_i.merge([qe.fog,{uTime:{value:0},uHeight:{value:e},uExt:{value:t},uGrid:{value:n},uLevel:{value:a},uMaxDepth:{value:u},uShallow:{value:new Re(o.shallow)},uMid:{value:new Re(o.mid)},uDeep:{value:new Re(o.deep)},uSun:{value:r.clone().normalize()},uCaustic:{value:(s.mobile?.8:1)*o.caustic}}]);h.uHeight.value=e;const d=new sn({uniforms:h,transparent:!0,depthWrite:!1,fog:!0,vertexShader:`
      #include <fog_pars_vertex>
      uniform float uTime;
      varying vec3 vWorld;
      void main() {
        vec3 p = position;
        p.y += sin(p.x * 0.35 + uTime * 0.9) * 0.025 + cos(p.z * 0.3 + uTime * 0.7) * 0.025;
        vec4 wp = modelMatrix * vec4(p, 1.0);
        vWorld = wp.xyz;
        vec4 mvPosition = viewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      #include <common>
      #include <fog_pars_fragment>
      uniform float uTime, uExt, uLevel, uCaustic, uGrid, uMaxDepth;
      uniform sampler2D uHeight;
      uniform vec3 uShallow, uMid, uDeep, uSun;
      varying vec3 vWorld;

      vec2 hash2(vec2 p) {
        p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
        return fract(sin(p) * 43758.5453);
      }
      // Avstand til nærmeste celle-kant (F2 − F1) gir det lysende nettverket
      float voronoiEdge(vec2 p, float t) {
        vec2 n = floor(p), f = fract(p);
        float d1 = 8.0, d2 = 8.0;
        for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
          vec2 g = vec2(float(i), float(j));
          vec2 o = hash2(n + g);
          o = 0.5 + 0.45 * sin(t + 6.2831 * o);
          float d = length(g + o - f);
          if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d;
        }
        return d2 - d1;
      }
      float ground(vec2 xz) {
        // Manuell bilineær filtrering (noen drivere filtrerer ikke HalfFloat-teksturer → trappetrinn)
        vec2 g = clamp((xz + uExt) / (2.0 * uExt), 0.0, 1.0) * uGrid;
        vec2 i = floor(g), f = fract(g);
        f = f * f * (3.0 - 2.0 * f); // myk (smoothstep) interpolasjon i stedet for lineær
        float n = uGrid + 1.0;
        float a = texture2D(uHeight, (i + vec2(0.5, 0.5)) / n).r;
        float b = texture2D(uHeight, (i + vec2(1.5, 0.5)) / n).r;
        float c = texture2D(uHeight, (i + vec2(0.5, 1.5)) / n).r;
        float d = texture2D(uHeight, (i + vec2(1.5, 1.5)) / n).r;
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      // Billig enkelt-oppslag (nærmeste celle) for de grove ring-estimatene under
      float ground1(vec2 xz) {
        vec2 g = clamp((xz + uExt) / (2.0 * uExt), 0.0, 1.0) * uGrid;
        return texture2D(uHeight, (floor(g) + 0.5) / (uGrid + 1.0)).r;
      }
      // Snitt-dybde i en ring rundt punktet: fine = bilineær (glatt falsk dybde), ellers grovt (bare kyst-maske)
      float ringDepth(vec2 xz, float r, bool fine) {
        float s = 0.0;
        for (int k = 0; k < 6; k++) {
          float a = float(k) * 1.0472 + 0.4;
          vec2 q = xz + vec2(cos(a), sin(a)) * r;
          s += clamp(uLevel - (fine ? ground(q) : ground1(q)), -0.4, 0.8);
        }
        return s / 6.0;
      }

      void main() {
        float depth = uLevel - ground(vWorld.xz);
        if (depth < -0.02 || depth > uMaxDepth) discard; // maxDepth: små basseng skal ikke tegnes over lavlandet
        float d = max(depth, 0.0);
        // G3c: grunne pytter får falsk dybde fra hvor mye vann som ligger rundt (mørkner mot midten), og
        // innestengte pytter (land rundt i større ring) får mykt i stedet for hardt hvitt skum i kanten
        float de = d, coast = 1.0, fd = 0.0;
        if (d < 0.6) {
          fd = ringDepth(vWorld.xz, 1.6, true);
          de = max(d, fd * 3.5);
          coast = smoothstep(-0.25, 0.25, ringDepth(vWorld.xz, 5.5, true)); // bilineært: grovt oppslag ga firkant-flekker
        }

        // Farge og gjennomsiktighet etter dybde
        // G3: lang overgang (sandbunnen synes langt ut), og grunt vann er nesten klart, ikke melkete
        vec3 col = mix(uShallow, uMid, smoothstep(0.05, 0.7, de));
        col = mix(col, uDeep, smoothstep(1.3, 3.8, de));
        float alpha = mix(0.16, 0.92, smoothstep(0.0, 2.4, de));
        alpha = max(alpha, 0.5 * smoothstep(0.03, 0.22, de)); // grunne laguner/pytter blir turkise, ikke grå glassplater
        alpha *= smoothstep(0.0, 0.05, d) * 0.6 + 0.4; // myk overgang helt i kanten (våt sand synes gjennom)
        // Innestengte pytter: klar turkis (som kulpen i raw4) med bevegelige krusninger, så de ikke ser ut som is
        float pool = (1.0 - coast) * smoothstep(0.015, 0.08, d);
        col = mix(col, uMid, 0.55 * pool);
        col = mix(col, uDeep, 0.45 * pool * smoothstep(0.03, 0.14, fd)); // mørkere mot midten (falsk dybde)
        float inner = smoothstep(0.02, 0.16, fd); // 0 i ytre ~30 % av pytten, 1 mot midten
        alpha *= mix(1.0, 0.3 + 0.7 * inner, 1.0 - coast); // ytre del av pytten: sandbunnen skinner gjennom, ikke melkete rand
        alpha = max(alpha, 0.68 * pool * inner);
        float rp = sin(dot(vWorld.xz, vec2(1.7, 0.9)) * 2.4 + uTime * 1.8) * sin(dot(vWorld.xz, vec2(-0.6, 1.4)) * 2.0 - uTime * 1.3);
        col += vec3(0.9, 1.0, 1.0) * rp * 0.06 * pool;

        // Sandriller under grunt vann
        float rip = sin(vWorld.x * 2.1 + sin(vWorld.z * 0.6) * 2.0 + vWorld.z * 0.7);
        col *= 1.0 - 0.05 * rip * (1.0 - smoothstep(0.2, 1.4, d));

        // Kaustikk: to lag med ulik skala og fart, sterkest på grunt/middels vann
        // Bredt, mykt kaustikk-nett i stor skala (som referansen), synlig også på middels dypt vann
        float c1 = voronoiEdge(vWorld.xz * 0.2 + vec2(uTime * 0.02, uTime * 0.015), uTime * 0.35);
        float c2 = voronoiEdge(vWorld.xz * 0.33 - vec2(uTime * 0.018, -uTime * 0.022), uTime * 0.5 + 2.0);
        float caustic = pow(1.0 - smoothstep(0.0, 0.17, c1), 2.0) * 0.65 + pow(1.0 - smoothstep(0.0, 0.12, c2), 2.0) * 0.35;
        float cMask = smoothstep(0.03, 0.3, de) * (1.0 - smoothstep(2.8, 5.5, de));
        col += vec3(0.85, 1.0, 0.95) * caustic * cMask * 0.17 * uCaustic;
        alpha = max(alpha, caustic * cMask * 0.16 * uCaustic);

        // Skum: tynn linje som pulserer inn og ut langs kysten, pluss en svakere ute
        float wave = 0.5 + 0.5 * sin(uTime * 1.1 + vWorld.x * 0.08 + vWorld.z * 0.06);
        float edge1 = 0.05 + wave * 0.16;
        // Linjebredden følger dybde-gradienten, så slake bunner (pytter) ikke blir hvite flater
        float fw = max(fwidth(d) * 1.6, 0.006);
        float foam = 1.0 - smoothstep(0.0, min(0.035, fw * 1.5), abs(d - edge1)); // skarp, tynn skumlinje
        foam += (1.0 - smoothstep(0.0, 0.035, d)) * 0.8;
        float edge2 = 0.42 + wave * 0.18;
        foam += (1.0 - smoothstep(0.0, min(0.05, fw * 2.0), abs(d - edge2))) * 0.35 * smoothstep(0.004, 0.02, fw);
        // brudd i linja så den ikke ser tegnet ut
        foam *= 0.8 + 0.2 * sin(vWorld.x * 1.7 + vWorld.z * 1.3 + uTime * 0.7);
        foam = clamp(foam, 0.0, 1.0) * mix(0.18, 1.0, coast); // pytter: bare et svakt skumslør, ingen hard rand
        col = mix(col, vec3(1.0), foam);
        alpha = max(alpha, foam * 0.97); // klar hvit skumlinje (raw1)

        // Små krusninger og solglans
        vec3 nrm = normalize(vec3(
          sin(vWorld.x * 1.3 + uTime * 1.4) * 0.06 + sin(vWorld.z * 2.2 - uTime * 1.1) * 0.04, 1.0,
          cos(vWorld.z * 1.1 + uTime * 1.2) * 0.06 + cos(vWorld.x * 1.9 + uTime) * 0.04));
        vec3 viewDir = normalize(cameraPosition - vWorld);
        vec3 h = normalize(uSun + viewDir);
        float spec = pow(max(dot(nrm, h), 0.0), 90.0);
        col += vec3(1.0, 0.9, 0.75) * spec * 0.8 * smoothstep(0.15, 1.2, de);
        alpha = max(alpha, spec * 0.6);

        gl_FragColor = vec4(col, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`}),p=l<50?8:s.mobile?40:64,g=new ai(l,l,p,p);g.rotateX(-Math.PI/2);const M=new lt(g,d);return M.position.set(c[0],a,c[1]),M.renderOrder=2,i.add(M),{mesh:M,update(m){h.uTime.value=m}}}function Zh(i,e){const t=new Ua(Float32Array.from(i),e,e,La,bi);return t.magFilter=t.minFilter=Tn,t.generateMipmaps=!1,t.needsUpdate=!0,t}function _u(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ot;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0;const h=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Jh(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const p=[];for(let M=0;M<o[u].length;++M)p.push(o[u][M][d]);const g=Jh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Jh(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new qt(o,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,p=u.count;d<p;d++)for(let g=0;g<t;g++){const M=u.getComponent(d,g);a.setComponent(d+h,g,M)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function vd(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let o=0;const a=Object.keys(i.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let _=0,y=a.length;_<y;_++){const x=a[_],C=i.attributes[x];l[x]=new C.constructor(new C.array.constructor(C.count*C.itemSize),C.itemSize,C.normalized);const S=i.morphAttributes[x];S&&(c[x]||(c[x]=[]),S.forEach((E,T)=>{const b=new E.array.constructor(E.count*E.itemSize);c[x][T]=new E.constructor(b,E.itemSize,E.normalized)}))}const p=e*.5,g=Math.log10(1/e),M=Math.pow(10,g),m=p*M;for(let _=0;_<r;_++){const y=n?n.getX(_):_;let x="";for(let C=0,S=a.length;C<S;C++){const E=a[C],T=i.getAttribute(E),b=T.itemSize;for(let v=0;v<b;v++)x+=`${~~(T[h[v]](y)*M+m)},`}if(x in t)u.push(t[x]);else{for(let C=0,S=a.length;C<S;C++){const E=a[C],T=i.getAttribute(E),b=i.morphAttributes[E],v=T.itemSize,A=l[E],L=c[E];for(let z=0;z<v;z++){const U=h[z],W=d[z];if(A[W](o,T[U](y)),b)for(let D=0,k=b.length;D<k;D++)L[D][W](o,b[D][U](y))}}t[x]=o,u.push(o),o++}}const f=i.clone();for(const _ in i.attributes){const y=l[_];if(f.setAttribute(_,new y.constructor(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)),_ in c)for(let x=0;x<c[_].length;x++){const C=c[_][x];f.morphAttributes[_][x]=new C.constructor(C.array.slice(0,o*C.itemSize),C.itemSize,C.normalized)}}return f.setIndex(u),f}const Cc={uOlPx:{value:2},uOlRes:{value:new Ae(1,1)},uInk:{value:new Re("#1f1a1c")}},t_=.16,n_=.65,Rc={rock:new Set,tree:new Set,tower:new Set,figure:new Set},Pc={rock:!0,tree:!0,tower:!0,figure:!0};function i_(i,e,t,n){Cc.uOlPx.value=i*e,Cc.uOlRes.value.set(Math.max(1,t*e),Math.max(1,n*e))}function xd(i){for(const e in Rc)Pc[e]=!!i[e],Rc[e].forEach(t=>t.visible=Pc[e])}function _d(i){if(i.attributes.olNormal)return;i.attributes.normal||i.computeVertexNormals();const e=i.attributes.position,t=i.attributes.normal,n=e.count,s=new Map,r=new Array(n);for(let a=0;a<n;a++){const l=`${Math.round(e.getX(a)*1e4)},${Math.round(e.getY(a)*1e4)},${Math.round(e.getZ(a)*1e4)}`;r[a]=l;const c=s.get(l)||[0,0,0];c[0]+=t.getX(a),c[1]+=t.getY(a),c[2]+=t.getZ(a),s.set(l,c)}const o=new Float32Array(n*3);for(let a=0;a<n;a++){const l=s.get(r[a]),c=Math.hypot(l[0],l[1],l[2])||1;o[a*3]=l[0]/c,o[a*3+1]=l[1]/c,o[a*3+2]=l[2]/c}i.setAttribute("olNormal",new qt(o,3))}const wl=new Map;function Md(i,e,t,n){const s=`${i?i.uuid:"batch"}|${e}|${t}|${n}`;if(wl.has(s))return wl.get(s);const r=new Nt({side:Vn,vertexColors:t});return r.color.copy(t||!i?new Re(1,1,1):i.color).multiplyScalar(t_),r.visible=Pc[e],r.onBeforeCompile=o=>{Object.assign(o.uniforms,Cc),o.vertexShader=`attribute vec3 olNormal;
uniform float uOlPx;
uniform vec2 uOlRes;
varying float vOlZ;
`+o.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
        {
          vec3 on = olNormal;
          #ifdef USE_INSTANCING
            on = mat3(instanceMatrix) * on;
          #endif
          vec2 dn = (normalMatrix * on).xy;
          float l = length(dn);
          if (l > 1e-4) gl_Position.xy += dn / max(l, 0.35) * (2.0 * uOlPx / uOlRes) * gl_Position.w;
          // Baksidene ligger bak det synlige løvet: fratrekket er kronens tykkelse, ellers står en svart klump
          // igjen i fade-hullet der kronen er borte (R2: foten alene bommet på trær med krone over vokteren)
          vOlZ = -mvPosition.z - 2.6;
        }`),o.fragmentShader=`varying float vOlZ;
uniform vec3 uInk;
`+o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      diffuseColor.rgb = mix(diffuseColor.rgb, uInk, ${n_.toFixed(2)});`),n&&(o.uniforms.uKeep=vs.uKeep,o.uniforms.uRad=vs.uRad,o.fragmentShader=`uniform vec3 uKeep;
uniform float uRad;
`+o.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        if (vOlZ < uKeep.z && length(gl_FragCoord.xy - uKeep.xy) < uRad * 0.78) discard;
        if (vOlZ + 2.6 < 4.2) discard; // nær-fade (kameraet)`))},r.customProgramCacheKey=()=>`ol${n?"f":""}`,Rc[e].add(r),wl.set(s,r),r}const yd=i=>{const e=i.material;return i.isMesh&&!Array.isArray(e)&&(e.isMeshLambertMaterial||e.isMeshStandardMaterial)&&!e.transparent&&e.side!==cn};function Lc(i,e,t=!1){if(!yd(i))return null;_d(i.geometry);const n=!!(i.material.vertexColors&&i.geometry.attributes.color),s=new bn(i.geometry,Md(i.material,e,n,t),i.instanceMatrix.count);return s.instanceMatrix=i.instanceMatrix,s.count=i.count,s.frustumCulled=!1,s.renderOrder=1,s.onBeforeRender=()=>{s.count=i.count},i.add(s),s}const Qh=512,ef=new Map;let Dc=null;function s_(i){Dc=i}function r_(i,e){const t=`${i.uuid}|${e}`;let n=ef.get(t);if(n)return n;_d(i);const s=new bn(i,Md(null,e,!1,!1),Qh);return s.instanceMatrix.setUsage(Mc),s.setColorAt(0,new Re),s.instanceColor.setUsage(Mc),s.count=0,s.frustumCulled=!1,s.matrixAutoUpdate=!1,s.renderOrder=1,s.raycast=()=>{},n={mesh:s,parts:[]},s.onBeforeRender=()=>{const r=s.instanceMatrix.array,o=s.instanceColor.array;let a=0;for(let l=n.parts.length-1;l>=0;l--){const c=n.parts[l];let u=c,h=!0;for(;u.parent;){if(!u.visible){h=!1;break}u=u.parent}if(u!==Dc){++c.userData.olMiss>300&&n.parts.splice(l,1);continue}if(c.userData.olMiss=0,!h||a>=Qh)continue;r.set(c.matrixWorld.elements,a*16);const d=c.material.color;o[a*3]=d.r,o[a*3+1]=d.g,o[a*3+2]=d.b,a++}s.count=a,a&&(s.instanceMatrix.clearUpdateRanges(),s.instanceMatrix.addUpdateRange(0,a*16),s.instanceColor.clearUpdateRanges(),s.instanceColor.addUpdateRange(0,a*3),s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0)},Dc.add(s),ef.set(t,n),n}function Br(i,e){return i.traverse(t=>{!yd(t)||t.userData.noOutline||(t.userData.olMiss=0,r_(t.geometry,e).parts.push(t))}),i}function Hs(i){const e=i.map(([h])=>h.index?h.toNonIndexed():h),t=e.reduce((h,d)=>h+d.attributes.position.count,0),n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Re,o=new V;let a=0;e.forEach((h,d)=>{const p=i[d][1],g=h.attributes.position;for(let M=0;M<g.count;M++)o.fromBufferAttribute(g,M),p(o,r),n.set([o.x,o.y,o.z],(a+M)*3),s.set([r.r,r.g,r.b],(a+M)*3);a+=g.count});const l=new Ot;l.setAttribute("position",new qt(n,3)),l.setAttribute("color",new qt(s,3)),l.computeVertexNormals();let c=0;const u=l.attributes.normal;return e.forEach((h,d)=>{const p=i[d][2],g=h.attributes.position.count;if(p)for(let M=0;M<g;M++)o.fromBufferAttribute(l.attributes.position,c+M).sub(p).normalize(),u.setXYZ(c+M,o.x,o.y,o.z);c+=g}),l}const Ic=.7,Uc=3.8;function o_(){const i=[],t=Uc/8,n=new Re("#7a5434"),s=new Re("#a57a4e");for(let r=0;r<8;r++){const o=r/8,a=(r+1)/8,l=.24-o*.08,c=.24-a*.08,u=new jt(c,l*1.12,t,7,1),h=u.attributes.position;for(let d=0;d<h.count;d++){const p=h.getY(d)+t/2+r*t,g=p/Uc;h.setXYZ(d,h.getX(d)+Ic*g*g,p,h.getZ(d))}i.push([u,(d,p)=>p.copy(n).lerp(s,d.y/t%1).multiplyScalar(.55+.45*Mt.smoothstep(d.y,0,1.3))])}return Hs(i)}const Ts={ink:new Re("#14261a"),rib:new Re("#d6ec96"),body:new Re("#79bf48"),edge:new Re("#2f7f33"),tip:new Re("#a8d65c")};function tf(i,e,t){const n=[],s=[],r=[],o=new Re,a=new V,l=p=>e*Math.sin(Math.PI*Math.pow(Math.min(1,p),.85))+.02,c=(p,g)=>{const M=l(p)*Math.abs(g);return new V(Math.sign(g)*M,.35*p-1.25*p*p-M*.3,p*i)},u=(p,g,M,m)=>{n.push(p.x,m?p.y-.02:p.y,p.z),a.set(Math.sign(M)*.3,1,-(.35-2.5*g)/i).normalize(),s.push(a.x,a.y,a.z),m?o.copy(Ts.ink):o.copy(Ts.body).lerp(Ts.tip,g).lerp(Ts.edge,Math.abs(M)*.85).multiplyScalar(.6+.4*Mt.smoothstep(g,0,.3)),r.push(o.r,o.g,o.b)},h=(p,g,M,m)=>{const[f,_,y]=[p,g,M].map(([S,E])=>c(S,E)),C=_.clone().sub(f).cross(y.clone().sub(f)).y>0?[[p,f],[g,_],[M,y]]:[[p,f],[M,y],[g,_]];for(const[[S,E],T]of C)m&&E!==0&&T.add(a.set(Math.sign(E),0,.5).normalize().multiplyScalar(.022)),u(T,S,E,m)};for(const p of[!0,!1])for(const g of[-1,1])for(let M=0;M<t;M++){const m=M/t,f=(M+1)/t,_=Math.min(1,f+.08),y=[m,0],x=[f,0],C=[m,g*.56],S=[_,g],E=[f,g*.56];h(y,C,S,p),h(y,S,E,p),p||h(y,E,x,p)}for(let p=0;p<t;p++){const g=p/t,M=(p+1)/t,m=c(g,1e-6),f=c(M,1e-6),_=.022*(1-g)+.004,y=.022*(1-M)+.004,x=[[m,-_,g],[f,y,M],[m,_,g],[m,-_,g],[f,-y,M],[f,y,M]];for(const[C,S,E]of x)n.push(C.x+S,C.y+.012,C.z),a.set(0,1,-(.35-2.5*E)/i).normalize(),s.push(a.x,a.y,a.z),r.push(Ts.rib.r,Ts.rib.g,Ts.rib.b)}const d=new Ot;return d.setAttribute("position",new mt(n,3)),d.setAttribute("normal",new mt(s,3)),d.setAttribute("color",new mt(r,3)),d}function a_(){const i=[];for(let t=0;t<6;t++){const n=tf(2.75,.9,7);n.rotateX(-.12+t%2*.16),n.rotateY(t/6*Math.PI*2+t%2*.12),i.push(n)}for(let t=0;t<3;t++){const n=tf(1.55,.5,5);n.rotateX(-.5),n.rotateY(t/3*Math.PI*2+.5),i.push(n)}const e=[];for(let t=0;t<3;t++){const n=new Qn(.16,6,4);n.translate(Math.cos(t*2.1)*.18,-.2,Math.sin(t*2.1)*.18),e.push([n,(s,r)=>r.set("#6b4a2a")])}return _u([...i,Hs(e)])}function nf(i,e,t){const n=i.map(([s,r,o,a],l)=>{const c=new Us(a,2),u=c.attributes.position;for(let h=0;h<u.count;h++){const d=u.getX(h),p=u.getY(h),g=u.getZ(h),M=1+.07*Math.sin(d*7+l)*Math.sin(p*6)+.05*Math.sin(g*9+p*4);u.setXYZ(h,d*M,p*M*.92,g*M)}return c.translate(s,r,o),[c,(h,d)=>d.copy(t).lerp(e,Mt.smoothstep(h.y,r-a*.6,r+a*.9)).multiplyScalar((.6+.4*Mt.smoothstep(h.y,r-a,r))*(.55+.45*Mt.smoothstep(Math.hypot(h.x,h.z),.1,.9+a*.5))),new V(s,r,o)]});return Hs(n)}function l_(i){const e=[],t=new Re("#2f6a48"),n=new Re("#4a8a5a"),s=new Re("#ffffff");return[[1.5,1.5,.9],[1.15,1.35,1.8],[.8,1.2,2.6],[.45,.9,3.25]].forEach(([r,o,a])=>{const l=new Jn(r,o,10,2),c=l.attributes.position;for(let u=0;u<c.count;u++)c.getY(u)<-o/2+.01&&c.setY(u,c.getY(u)+Math.sin(u*1.7)*.12);l.translate(0,a,0),e.push([l,(u,h)=>{const d=(u.y-a+o/2)/o;h.copy(t).lerp(n,d),i&&d>.12&&h.lerp(s,Math.min(1,(d-.12)*2.6))}])}),Hs(e)}function c_(){const i=[],e=new jt(.12,.26,3,6,4),t=e.attributes.position;for(let n=0;n<t.count;n++){const s=t.getY(n);t.setX(n,t.getX(n)+Math.sin(s*1.7)*.12)}return e.translate(0,1.5,0),i.push([e,(n,s)=>s.set(n.y<.4?"#1e1a18":"#3a302a")]),[[.4,1.9,.9,.7],[-.5,2.3,-.8,.6],[.2,2.7,.6,.5]].forEach(([n,s,r,o])=>{const a=new jt(.03,.08,o,4);a.translate(0,o/2,0),a.rotateZ(r),a.translate(n*.3,s,0),i.push([a,(l,c)=>c.set("#2e2622")])}),Hs(i)}const vs={uKeep:{value:new V(-1e4,-1e4,0)},uRad:{value:120}};function zc(i){return i.onBeforeCompile=e=>{e.uniforms.uKeep=vs.uKeep,e.uniforms.uRad=vs.uRad,e.fragmentShader=e.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      #ifdef DOUBLE_SIDED
        if (!gl_FrontFacing) diffuseColor.rgb *= 0.6; // G7: undersiden av palmebladene er mørkere (raw4)
      #endif
      #ifdef FADE_PASS
        diffuseColor.a = 1.0 - 0.9 * vFadeK;
      #endif`),e.fragmentShader=`uniform vec3 uKeep;
uniform float uRad;
`+e.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      // Bare det som ligger foran vokteren: myk overgang i dybden, så ingen hard kant følger ham rundt
      float vFadeK = (1.0 - smoothstep(uRad * 0.55, uRad, length(gl_FragCoord.xy - uKeep.xy))) * smoothstep(0.3, 1.4, uKeep.z - vViewPosition.z);
      vFadeK = max(vFadeK, 1.0 - smoothstep(3.0, 5.5, vViewPosition.z)); // R2: løv tett på kameraet (innzoomet) fyller aldri skjermen
      #ifdef FADE_PASS
        if (vFadeK < 0.02) discard;
      #else
        if (vFadeK >= 0.02) discard;
      #endif`)},i}function u_(i,e){const t=zc(new Xt({vertexColors:!0,side:e.side,transparent:!0,depthWrite:!1}));t.defines={FADE_PASS:1};const n=new bn(i.geometry,t,Math.max(1,i.count));return n.instanceMatrix.setUsage(Mc),n.count=0,n.visible=!1,n.frustumCulled=!1,n.receiveShadow=!0,n.renderOrder=3,i.add(n),i.geometry.computeBoundingSphere(),{o:n,src:i,sphere:i.geometry.boundingSphere}}const Kr=new V,na=new zt;function h_({o:i,src:e,sphere:t},n,s,r){const{x:o,y:a,z:l}=vs.uKeep.value,c=vs.uRad.value,u=r*n.aspect;let h=0;for(let d=0;d<e.count;d++){e.getMatrixAt(d,na);const p=t.radius*na.getMaxScaleOnAxis();Kr.copy(t.center).applyMatrix4(na).applyMatrix4(n.matrixWorldInverse);const g=-Kr.z;if(!(g+p<.1)){if(g-p>=5.5){if(g-p>l-.3)continue;Kr.applyMatrix4(n.projectionMatrix);const M=p*r/(2*s*Math.max(g,1));if(Math.hypot((Kr.x*.5+.5)*u-o,(Kr.y*.5+.5)*r-a)>c+M)continue}na.toArray(i.instanceMatrix.array,h++*16)}}i.count=h,i.visible=h>0,h&&(i.instanceMatrix.clearUpdateRanges(),i.instanceMatrix.addUpdateRange(0,h*16),i.instanceMatrix.needsUpdate=!0)}function f_(i,e,t,n){const s=e.filter(D=>D.kind==="palm"),r=e.filter(D=>D.kind==="round"),o=e.filter(D=>D.kind==="bush"),a=e.filter(D=>D.kind==="pine"),l=e.filter(D=>D.kind==="dead"),c=zc(new Xt({vertexColors:!0})),u=zc(new Xt({vertexColors:!0,side:cn})),h=new Re(n.trees.leaf[0]),d=new Re(n.trees.leaf[1]),p=new jt(.16,.26,1.6,7);p.translate(0,.8,0);const g=Hs([[p,(D,k)=>k.set("#7a5434").multiplyScalar(.55+.45*Mt.smoothstep(D.y,0,1.1))]]),M=nf([[0,2.2,0,1.15],[.8,1.9,.3,.8],[-.7,1.95,-.2,.85],[.1,2,-.85,.75],[-.2,2.9,.2,.8],[.35,1.8,.85,.7]],h,d),m=nf([[0,.45,0,.6],[.5,.35,.2,.45],[-.45,.38,-.15,.48],[.05,.7,.1,.42]],h,d),f=[],_=(D,k,G)=>{const Y=new bn(D,k,Math.max(1,G));return Y.count=G,Y.castShadow=!0,Y.receiveShadow=!0,i.add(Y),Lc(Y,"tree",!0),G&&f.push(u_(Y,k)),Y},y=_(o_(),c,s.length),x=_(a_(),u,s.length),C=_(g,c,r.length),S=_(M,c,r.length),E=_(m,c,o.length),T=new jt(.14,.22,1.2,6);T.translate(0,.6,0);const b=_(Hs([[T,(D,k)=>k.set("#5a3e2a").multiplyScalar(.55+.45*Mt.smoothstep(D.y,0,1))]]),c,a.length),v=_(l_(n.id==="vinter"),c,a.length),A=_(c_(),c,l.length),L=new Yt;s.forEach((D,k)=>{L.position.set(D.x,D.y-.1,D.z),L.rotation.set(0,D.phase,0),L.scale.setScalar(D.s),L.updateMatrix(),y.setMatrixAt(k,L.matrix)}),r.forEach((D,k)=>{L.position.set(D.x,D.y-.1,D.z),L.rotation.set(0,D.phase,0),L.scale.setScalar(D.s),L.updateMatrix(),C.setMatrixAt(k,L.matrix)}),a.forEach((D,k)=>{L.position.set(D.x,D.y-.1,D.z),L.rotation.set(0,D.phase,0),L.scale.setScalar(D.s),L.updateMatrix(),b.setMatrixAt(k,L.matrix)}),l.forEach((D,k)=>{L.position.set(D.x,D.y-.1,D.z),L.rotation.set(0,D.phase,(D.phase%1-.5)*.15),L.scale.setScalar(D.s),L.updateMatrix(),A.setMatrixAt(k,L.matrix)});const z=D=>{s.forEach((k,G)=>{const Y=Math.cos(k.phase),Q=Math.sin(k.phase);L.position.set(k.x+Ic*Y*k.s,k.y-.1+Uc*k.s,k.z-Ic*Q*k.s),L.rotation.set(Math.sin(D*1.2+k.phase)*.07,k.phase+Math.sin(D*.7+k.phase)*.05,Math.cos(D*1+k.phase)*.07),L.scale.setScalar(k.s),L.updateMatrix(),x.setMatrixAt(G,L.matrix)}),x.instanceMatrix.needsUpdate=!0,r.forEach((k,G)=>{L.position.set(k.x,k.y-.1,k.z),L.rotation.set(Math.sin(D*1.1+k.phase)*.025,k.phase,Math.cos(D*.9+k.phase)*.025),L.scale.setScalar(k.s),L.updateMatrix(),S.setMatrixAt(G,L.matrix)}),S.instanceMatrix.needsUpdate=!0,o.forEach((k,G)=>{const Y=1+Math.sin(D*1.6+k.phase)*.035;L.position.set(k.x,k.y-.12,k.z),L.rotation.set(0,k.phase,0),L.scale.set(k.s*Y,k.s/Y,k.s*Y),L.updateMatrix(),E.setMatrixAt(G,L.matrix)}),E.instanceMatrix.needsUpdate=!0,a.forEach((k,G)=>{L.position.set(k.x,k.y-.1,k.z),L.rotation.set(Math.sin(D*.9+k.phase)*.02,k.phase,Math.cos(D*.8+k.phase)*.02),L.scale.setScalar(k.s),L.updateMatrix(),v.setMatrixAt(G,L.matrix)}),v.instanceMatrix.needsUpdate=!0};return z(0),{colliders:[...s.map(D=>({x:D.x,z:D.z,r:.35*D.s})),...r.map(D=>({x:D.x,z:D.z,r:.4*D.s})),...o.map(D=>({x:D.x,z:D.z,r:.7*D.s})),...a.map(D=>({x:D.x,z:D.z,r:.4*D.s})),...l.map(D=>({x:D.x,z:D.z,r:.3*D.s}))],update:z,cullFade:(D,k)=>{const G=Math.tan(Mt.degToRad(D.fov/2));for(const Y of f)h_(Y,D,G,k)}}}function El(i,e=5){const t=[],n=[],s=new Re,r=new Re;for(let a=0;a<e;a++){const l=i()*Math.PI*2,c=i()*.16,u=.28+i()*.3,h=.04+i()*.03,d=Math.cos(l)*c,p=Math.sin(l)*c,g=(i()-.5)*.25,M=i()*Math.PI,m=Math.cos(M)*h,f=Math.sin(M)*h;t.push(d-m,0,p-f,d+m,0,p+f,d+Math.cos(l)*g,u,p+Math.sin(l)*g),s.setRGB(.72,.72,.72),r.setRGB(1.2,1.22,1.12),n.push(s.r,s.g,s.b,s.r,s.g,s.b,r.r,r.g,r.b)}const o=new Ot;return o.setAttribute("position",new mt(t,3)),o.setAttribute("color",new mt(n,3)),o.setAttribute("normal",new mt(new Array(t.length/3).fill(0).flatMap(()=>[0,1,0]),3)),o}function d_(){const i=[];for(let o=0;o<3;o++){const a=new Qn(.07,6,3);a.scale(1,.25,1.15);const l=o*2.094;a.translate(Math.cos(l)*.065,.05,Math.sin(l)*.065),i.push(a.toNonIndexed())}const e=i.reduce((o,a)=>o+a.attributes.position.count,0),t=new Float32Array(e*3),n=new Float32Array(e*3);let s=0;for(const o of i)t.set(o.attributes.position.array,s*3),n.set(o.attributes.normal.array,s*3),s+=o.attributes.position.count;const r=new Ot;return r.setAttribute("position",new qt(t,3)),r.setAttribute("normal",new qt(n,3)),r}function p_(i,e,t,n,s){const{heightAt:r,pathDist:o,plinths:a}=e,l=e.lighthouse.pos,c={uTime:{value:0}},h=(A=>(A.onBeforeCompile=L=>{L.uniforms.uTime=c.uTime,L.vertexShader=L.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          #ifdef USE_INSTANCING
            vec2 ip = instanceMatrix[3].xz;
          #else
            vec2 ip = vec2(0.0);
          #endif
          float sway = sin(uTime * 1.8 + ip.x * 0.35 + ip.y * 0.27) * 0.6 + sin(uTime * 3.1 + ip.x * 1.3) * 0.25;
          transformed.x += sway * transformed.y * 0.22;
          transformed.z += cos(uTime * 1.5 + ip.y * 0.4) * transformed.y * 0.12;`),L.fragmentShader=L.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
  normal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);`)},A))(new Xt({vertexColors:!0,side:cn})),d=new Xt({color:"#ffffff"}),p=[El(s,7),El(s,8),El(s,6)],g=d_(),M={tak:{grass:["#4a8638","#86b452"],density:1,clover:.22,cloverCol:["#3a8a3a","#5aa84a"]},vinter:{grass:["#9a9a7a","#c8c4a0"],density:.18,clover:0,cloverCol:["#fff","#fff"]},vulkan:{grass:["#4a5a30","#6a7a3a"],density:.35,clover:0,cloverCol:["#fff","#fff"]}}[n.id],m=(t.mobile?.45:1)*M.density,f=13,_=8,y=Math.round(720*m),x=[],C=new Yt,S=new Re,E=new Re(M.grass[0]),T=new Re(M.grass[1]),b=(A,L,z)=>{if(z<.72)return!1;const U=o(A,L);if(U<1||U<1.7&&s()<.6||Math.hypot(A-l.x,L-l.z)<4.3||n.volcano&&Math.hypot(A-n.volcano.x,L-n.volcano.z)<n.volcano.r*.7)return!1;for(const W of a)if((W.x-A)**2+(W.z-L)**2<2.6)return!1;return!e.extrasBlock||!e.extrasBlock(A,L)};for(let A=0;A<_;A++)for(let L=0;L<_;L++){const z=-_*f/2+A*f,U=-_*f/2+L*f;for(const[W,D]of[[0,y*.4],[1,y*.35],[2,y*.25]]){const k=[];for(let Y=0;Y<D*3&&k.length<D;Y++){const Q=z+s()*f,se=U+s()*f,Ee=r(Q,se);b(Q,se,Ee)&&k.push([Q,se,Ee])}if(!k.length)continue;const G=new bn(p[W],h,k.length);G.userData.tier=W,k.forEach(([Y,Q,se],Ee)=>{C.position.set(Y,se-.04,Q),C.rotation.set(0,s()*6.28,0),C.scale.setScalar(.8+s()*.7),C.updateMatrix(),G.setMatrixAt(Ee,C.matrix),G.setColorAt(Ee,S.copy(E).lerp(T,s()).multiplyScalar(e.shadeAt?e.shadeAt(Y,Q):1))}),G.receiveShadow=!0,G.computeBoundingSphere(),i.add(G),x.push(G)}if(M.clover>0){const W=[],D=z+s()*f,k=U+s()*f;for(let G=0;G<y*M.clover*3&&W.length<y*M.clover;G++){const Y=D+(s()-.5)*6,Q=k+(s()-.5)*6,se=r(Y,Q);b(Y,Q,se)&&W.push([Y,Q,se])}if(W.length){const G=new bn(g,d,W.length),Y=new Re(M.cloverCol[0]),Q=new Re(M.cloverCol[1]);W.forEach(([se,Ee,ke],H)=>{C.position.set(se,ke-.02,Ee),C.rotation.set(0,s()*6.28,0),C.scale.setScalar(.8+s()*.8),C.updateMatrix(),G.setMatrixAt(H,C.matrix),G.setColorAt(H,S.copy(Y).lerp(Q,s()).multiplyScalar(e.shadeAt?e.shadeAt(se,Ee):1))}),G.receiveShadow=!0,G.userData.tier=1,G.computeBoundingSphere(),i.add(G),x.push(G)}}}return{update(A){c.uTime.value=A},setLevel:A=>x.forEach(L=>{L.visible=A==="high"||L.userData.tier===0,L.receiveShadow=A==="high"}),count:x.reduce((A,L)=>A+L.count,0)}}function sf(i,{arms:e=4,rStart:t=56,rEnd:n=4.2,turns:s=.7,a0:r=.35,steps:o=16}={}){const a=[];for(let l=0;l<e;l++){const c=r+l/e*Math.PI*2,u=[];for(let h=0;h<=o;h++){const d=h/o,p=t*(1-d)+n*d,g=c+d*s*Math.PI*2;u.push([i[0]+Math.cos(g)*p,i[1]+Math.sin(g)*p])}a.push(u)}return a}const m_={xc:i=>3*Math.sin(i*.06),w:4.2,bridgeZ:-20,top:50,wall:27},g_=[[[-15,56],[-17,40],[-13,24],[-17,8],[-14,-6],[-12,-18],[-11,-26],[-10,-33],[-10,-38.4]],[[17,56],[19,40],[15,24],[18,8],[15,-6],[12,-16],[5,-20],[-2,-20.5],[-8,-22],[-11,-26],[-10,-33],[-10,-38.4]]],v_=[90,210,330].map(i=>i*Math.PI/180),_a=11,x_=()=>{const i=[];for(let t=0;t<=48;t++){const n=t/48*Math.PI*2;i.push([Math.cos(n)*_a,Math.sin(n)*_a])}const e=v_.map(t=>[_a,20,30,40,50].map((n,s)=>{const r=t+Math.sin(n*.25+s)*.04;return[Math.cos(r)*n,Math.sin(r)*n]}));return[i,...e]},$s=[{id:"tak",name:"Tåkeøya",blurb:"Palmer, turkis lagune og en joint som har glødd i hundre år.",seed:1,radius:46,edgeAmp:[4.5,2.6,1.5],lighthouse:[0,0],paths:sf([0,0]),plateausAuto:[{r:6.5,h:4.2},{r:5.5,h:3.4},{r:5,h:3}],waterfall:{poolR:1.9,basinR:2.7},palette:{sand:"#d8bb88",grass:"#6c9f4a",grass2:"#4d8340",path:"#b49c74",deep:"#cdb987",pathMix:.35},water:{shallow:"#a6e6cc",mid:"#45c2ae",deep:"#1f9aa2",caustic:1},sky:{fog:"#c4d8dc",hemiSky:"#dce9ff",hemiGround:"#5a6650",hemi:1.35,sun:"#ffeccc",sunI:2.25,exposure:.92,sunDir:[14,30,10],lantern:.9,grade:{tint:[1.02,1,.965],lift:[.008,.02,.035],sat:.92,vignette:.2}},skyDusk:{fog:"#d9a48e",hemiSky:"#ffd6b0",hemiGround:"#5a4a72",hemi:1.35,sun:"#ffb27a",sunI:2.7,exposure:1.05,sunDir:[24,17,4],grade:{tint:[1.07,1,.9],lift:[.025,.008,.03],sat:1.1,vignette:.3}},trees:{beach:{palm:.75,bush:.25},inland:{palm:.25,round:.45,bush:.3},leaf:["#a2cc5c","#357238"]},rock:["#b6bab8","#7f9f52"],life:["fireflies","butterflies","birds","leaves"],balance:{hp:1.3,count:1.25,speed:1,air:.5,types:{clerk:{hp:.7},complainer:{hp:.7},tank:{hp:.65},gull:{hp:.75}},extra:null},intro:{complainer:2,drone:3,lobbyist:5,heli:6,auditor:7,balloon:8}},{id:"vinter",name:"Vinterfjorden",blurb:"Snø, nordlys og isflak. Forbudsdirektoratet har kledd seg varmt.",seed:2,radius:47,edgeAmp:[3.5,3.2,2.2],lighthouse:[-10,-42.5],paths:g_,shape:"fjord",fjord:m_,nes:{x:-10,z0:-20,z1:-45,r:6.5},dockTheta:-1.2,icy:!0,palette:{sand:"#b9bec4",grass:"#f1f5fa",grass2:"#dfe8f2",path:"#c2ccd8",deep:"#9aa8b4"},water:{shallow:"#b8e2ee",mid:"#5a9cc0",deep:"#1d3f66",caustic:.55},sky:{fog:"#2a3550",hemiSky:"#9fb8ff",hemiGround:"#1c2440",hemi:1.1,sun:"#b8ccff",sunI:1.5,exposure:1.15,sunDir:[-12,26,8],grade:{tint:[.96,1,1.06],lift:[0,.01,.03],sat:1.05,vignette:.32}},trees:{beach:{pine:.6,bush:.4},inland:{pine:.8,bush:.2},leaf:["#e8f0f8","#2c5a44"]},rock:["#a9b2bc","#eef4fa"],life:["snow","aurora","icefloes"],balance:{hp:1.5,count:1.2,speed:.97,types:{tank:{hp:.95},clerk:{hp:1},lobbyMini:{hp:.9}},extra:{type:"tank",n:1,gap:4,path:"both",from:3}},intro:{balloon:3,auditor:4,lobbyist:5,drone:5,heli:6,complainer:6}},{id:"vulkan",name:"Vulkanøya",blurb:"Svart sand, lava-elver og glødende stein. Her trenger ingen fyrstikker.",seed:3,radius:48,edgeAmp:[3.5,2.2,1.6],lighthouse:[0,0],dockTheta:.5,paths:sf([0,0],{arms:3,rStart:56,rEnd:4.4,turns:.75,a0:Math.PI/6,steps:24}),lava:x_(),moat:_a,eruption:{every:60,closed:10},fog:[38,100],palette:{sand:"#3a3533",grass:"#5a6a3c",grass2:"#3f4c2e",path:"#3e3b3a",deep:"#2c2826",pathMix:.15},water:{shallow:"#5a8f90",mid:"#2c5a63",deep:"#122b35",caustic:.4},sky:{fog:"#4a2c2a",hemiSky:"#ff9a6a",hemiGround:"#2a1a1a",hemi:1.15,sun:"#ff7a40",sunI:2.3,exposure:1.1,sunDir:[20,20,6],grade:{tint:[1.05,.98,.94],lift:[.02,0,0],sat:1.08,vignette:.32}},trees:{beach:{dead:.5,bush:.5},inland:{dead:.45,palm:.2,bush:.35},leaf:["#7a9a4a","#2f4a2a"]},rock:["#2e2a2a","#5a3a2a"],life:["ash","embers"],balance:{hp:1.25,count:1.1,speed:1,air:.6,types:{lobbyist:{hp:.6},lobbyMini:{hp:.6},clerk:{hp:.72},complainer:{hp:.72},gull:{hp:.75},drone:{hp:.8}},extra:{type:"gull",n:1,gap:1.4,from:3}},intro:{complainer:2,drone:2,lobbyist:3,heli:4,auditor:5,balloon:7}}];function __(i){const[e,t,n]=i.edgeAmp,s=i.seed;return r=>i.radius+e*Math.sin(3*r+.4*s)+t*Math.sin(7*r+1.3*s)+n*Math.sin(11*r+s)}const rf={clerk:["complainer","lobbyist"],swarm:["complainer"],tank:["auditor","lobbyist"],gull:["drone","heli","balloon"]},Tl={clerk:22,swarm:7,tank:95,gull:16,complainer:17,lobbyist:97,auditor:112,drone:9,heli:62,balloon:150},Al={complainer:.6,lobbyist:1.8,auditor:2.2,drone:.4,heli:2.4,balloon:3.5};function M_(i,e){let t=i.seed*9301+49297;const n=()=>(t=(t*9301+49297)%233280)/233280,s=i.intro||{};return e.map((r,o)=>{const a=o+1,l=r.map(d=>({...d})),c=i.balance.extra;c&&a>=c.from&&l.push({...c,n:c.n+Math.floor((a-c.from)/2),at:5});const u=(d,p,g)=>Math.max(1,Math.round(d*Math.min(1,Tl[p]/Tl[g]))),h=(d,p)=>{d.n=u(d.n,d.type,p),d.gap=Al[p]??d.gap,d.type=p};for(const[d,p]of Object.entries(s)){if(p!==a)continue;const g=l.find(M=>{var m;return(m=rf[M.type])==null?void 0:m.includes(d)});if(g&&g.n>=2){const M=Math.floor(g.n/2);l.push({...g,type:d,n:u(M,g.type,d),gap:Al[d]??g.gap,at:(g.at??0)+2}),g.n-=M}else g?h(g,d):l.push({type:d,n:Math.max(1,Math.min(3,Math.round(44/Tl[d]))),gap:Al[d],path:0,at:6})}for(const d of l){const p=(rf[d.type]||[]).filter(g=>s[g]&&s[g]<a);p.length&&n()<.45&&h(d,p[Math.floor(n()*p.length)])}return l})}function xo(){try{return Math.max(1,Math.min($s.length,Number(localStorage.getItem("glod-unlocked"))||1))}catch{return 1}}function y_(i){try{i+2>xo()&&localStorage.setItem("glod-unlocked",String(Math.min($s.length,i+2)))}catch{}}function ia(i,e,{color:t,size:n,speed:s,drift:r,additive:o,area:a=46,top:l=22}){const c=new Float32Array(e*3),u=new Float32Array(e);for(let f=0;f<e;f++)c[f*3]=(Math.random()-.5)*a*2,c[f*3+1]=Math.random()*l,c[f*3+2]=(Math.random()-.5)*a*2,u[f]=Math.random()*6.28;const h=new Ot;h.setAttribute("position",new qt(c,3));const d=document.createElement("canvas");d.width=d.height=32;const p=d.getContext("2d"),g=p.createRadialGradient(16,16,0,16,16,16);g.addColorStop(0,"rgba(255,255,255,1)"),g.addColorStop(1,"rgba(255,255,255,0)"),p.fillStyle=g,p.fillRect(0,0,32,32);const M=new za({color:t,size:n,map:new wi(d),transparent:!0,depthWrite:!1,blending:o?Ti:ds,opacity:o?1:.85}),m=new fu(h,M);return m.frustumCulled=!1,i.add(m),(f,_,y)=>{for(let x=0;x<e;x++){let C=c[x*3+1]-s*f*(.7+u[x]%1*.6);c[x*3]+=Math.sin(y*.7+u[x])*r*f,(s<0?C>l:C<0)&&(C=s<0?0:l,c[x*3]=_.x+(Math.random()-.5)*a*2,c[x*3+2]=_.z+(Math.random()-.5)*a*2),c[x*3+1]=C}h.attributes.position.needsUpdate=!0}}function b_(i,e,t,n,s=160){const r=new mu(i.map(([h,d])=>new V(h,0,d))),o=r.getLength(),a=[],l=[],c=[];for(let h=0;h<=s;h++){const d=h/s,p=r.getPointAt(d),g=r.getTangentAt(d),M=-g.z,m=g.x,f=e*(.75+.25*Math.sin(d*9));for(const _ of[-1,1]){const y=p.x+M*f*_,x=p.z+m*f*_;a.push(y,t(y,x)+n,x),l.push(d*o,(_+1)/2)}if(h<s){const _=h*2;c.push(_,_+1,_+2,_+1,_+3,_+2)}}const u=new Ot;return u.setAttribute("position",new mt(a,3)),u.setAttribute("uv",new mt(l,2)),u.setIndex(c),u.computeVertexNormals(),{geo:u,curve:r,len:o}}function S_(i,e,t,n){var M;const{heightAt:s}=e,r=[],o=[],a=[],l=[],c=[],u=t.mobile?.5:1,h=new Set(n.life);if(h.has("aurora")){const m=new sn({transparent:!0,depthWrite:!1,blending:Ti,side:cn,fog:!1,uniforms:{uTime:{value:0}},vertexShader:`
        uniform float uTime; varying vec2 vUv;
        void main() {
          vUv = uv; vec3 p = position;
          p.z += sin(p.x * 0.08 + uTime * 0.3) * 5.0 + sin(p.x * 0.21 - uTime * 0.5) * 1.5;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }`,fragmentShader:`
        uniform float uTime; varying vec2 vUv;
        void main() {
          float bands = 0.55 + 0.45 * sin(vUv.x * 40.0 + uTime * 0.8 + sin(vUv.x * 13.0 - uTime * 0.4) * 2.0);
          float fade = smoothstep(0.0, 0.25, vUv.y) * (1.0 - smoothstep(0.55, 1.0, vUv.y));
          vec3 col = mix(vec3(0.15, 1.0, 0.55), vec3(0.7, 0.3, 1.0), smoothstep(0.35, 0.95, vUv.y));
          gl_FragColor = vec4(col * bands * fade * 0.55, 1.0);
        }`});for(const[f,_,y]of[[0,-66,0],[-62,-20,Math.PI/2.4],[62,-24,-Math.PI/2.4]]){const x=new lt(new ai(150,26,96,1),m);x.position.set(f,20,_),x.rotation.y=y,i.add(x)}o.push((f,_,y)=>m.uniforms.uTime.value=y)}if(h.has("snow")&&o.push(ia(i,Math.round(900*u),{color:"#ffffff",size:.28,speed:2.2,drift:.8})),h.has("ash")&&o.push(ia(i,Math.round(500*u),{color:"#6a625e",size:.22,speed:1.2,drift:.6})),h.has("embers")&&o.push(ia(i,Math.round(160*u),{color:"#ff8a3a",size:.25,speed:-1.6,drift:1.2,additive:!0,top:10})),h.has("icefloes")){const m=[];for(let C=0;C<6e3&&m.length<70*u;C++){const S=(Math.random()-.5)*120,E=(Math.random()-.5)*120,T=.05-s(S,E);T>.15&&T<1.4&&m.every(b=>Math.hypot(b.x-S,b.z-E)>2.2)&&m.push({x:S,z:E,s:.6+Math.random()*1.1,r:Math.random()*6})}const f=new jt(1,.9,.18,7),_=f.attributes.position;for(let C=0;C<_.count;C++){const S=Math.atan2(_.getZ(C),_.getX(C)),E=.75+.35*Math.abs(Math.sin(S*2.3+C));_.setX(C,_.getX(C)*E),_.setZ(C,_.getZ(C)*E)}f.computeVertexNormals();const y=new bn(f,new Xt({color:"#eaf6ff"}),Math.max(1,m.length));y.count=m.length,y.receiveShadow=!0,i.add(y);const x=new Yt;o.push((C,S,E)=>{m.forEach((T,b)=>{x.position.set(T.x+Math.sin(E*.1+T.r)*.4,.08+Math.sin(E*1.1+T.r)*.03,T.z),x.rotation.set(Math.sin(E*.9+T.r)*.03,T.r+E*.02,Math.cos(E*.8+T.r)*.03),x.scale.set(T.s,1,T.s),x.updateMatrix(),y.setMatrixAt(b,x.matrix)}),y.instanceMatrix.needsUpdate=!0})}if(n.lava){const m=new sn({uniforms:{uTime:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        uniform float uTime; varying vec2 vUv;
        float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
        void main() {
          vec2 p = vec2(vUv.x * 0.7 - uTime * 0.35, vUv.y * 2.0);
          float v = n(p * 1.3) * 0.6 + n(p * 3.1 + 7.0) * 0.4;
          float edge = smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.75, vUv.y);
          vec3 crust = vec3(0.12, 0.05, 0.04), hot = vec3(1.0, 0.35, 0.05), white = vec3(1.0, 0.85, 0.4);
          vec3 col = mix(crust, hot, smoothstep(0.35, 0.6, v) * edge);
          col = mix(col, white, smoothstep(0.72, 0.9, v) * edge);
          gl_FragColor = vec4(col * (1.0 + 2.2 * smoothstep(0.4, 0.8, v) * edge), 1.0);
        }`});for(const x of n.lava){const C=b_(x,1.25,s,.07);i.add(new lt(C.geo,m));const S=[];let E=!1;for(let T=0;T<=1;T+=1.4/C.len){const b=C.curve.getPointAt(Math.min(1,T));if(e.pathDist(b.x,b.z)<2.4){E||c.push({x:b.x,z:b.z,tan:C.curve.getTangentAt(Math.min(1,T))}),E=!0;continue}E=!1,a.push({x:b.x,z:b.z,r:1.4})}for(const T of[.25,.7]){const b=C.curve.getPointAt(T),v=new vo("#ff6a2a",14,12,1.6);v.position.set(b.x,s(b.x,b.z)+1.2,b.z),i.add(v),S.push(v)}o.push((T,b,v)=>S.forEach((A,L)=>A.intensity=12+3*Math.sin(v*2.3+L)))}o.push((x,C,S)=>m.uniforms.uTime.value=S);const f=new On(3.4,.35,4.2),_=new Xt({color:((M=n.rock)==null?void 0:M[0])??"#555"}),y=new jt(2.4,2.4,.1,18);for(const x of c){const C=s(x.x,x.z)+.12,S=new lt(f,_);S.position.set(x.x,C,x.z),S.rotation.y=-Math.atan2(x.tan.z,x.tan.x),S.castShadow=S.receiveShadow=!0,i.add(S);const E=new lt(y,new Nt({color:new Re("#ff5a1a").multiplyScalar(2.2),transparent:!0,opacity:0}));E.position.set(x.x,C+.25,x.z),E.visible=!1,i.add(E);const T=new vo("#ff6a2a",0,14,1.6);T.position.set(x.x,C+1.6,x.z),i.add(T);let b=!1;l.push({x:x.x,z:x.z,get closed(){return b},setClosed(v){b=v,E.visible=v}}),o.push((v,A,L)=>{const z=b?1:0;E.material.opacity+=(z*.9-E.material.opacity)*Math.min(1,v*3),!b&&E.material.opacity<.02&&(E.visible=!1),T.intensity=E.material.opacity*(22+6*Math.sin(L*9))})}}if(n.volcano){const m=n.volcano;a.push({x:m.x,z:m.z,r:m.r*.55});const f=new lt(new Lr(m.r*.22,20),new Nt({color:new Re("#ff5a1a").multiplyScalar(2.4)}));f.rotation.x=-Math.PI/2,f.position.set(m.x,s(m.x,m.z)+.2,m.z),i.add(f);const _=new Fa(.35,0),y=[];for(let S=0;S<3e3&&y.length<50*u;S++){const E=(Math.random()-.5)*96,T=(Math.random()-.5)*96,b=s(E,T);b>.4&&e.pathDist(E,T)>2.2&&y.push({x:E,z:T,h:b,s:.5+Math.random()})}const x=new bn(_,new Nt({color:new Re("#ff7a2a").multiplyScalar(1.8)}),Math.max(1,y.length));x.count=y.length;const C=new Yt;y.forEach((S,E)=>{C.position.set(S.x,S.h,S.z),C.rotation.set(S.s,S.s*3,0),C.scale.set(S.s,S.s*.5,S.s),C.updateMatrix(),x.setMatrixAt(E,C.matrix)}),i.add(x)}if(n.waterfall&&n.waterfall._lvl!==void 0){const m=n.waterfall,f=m.basin[0]-m.lip[0],_=m.basin[1]-m.lip[1],y=Math.hypot(f,_),x=f/y,C=_/y,S=m._lvl-.1,E=14,T=1.25,b=[],v=[],A=[];for(let Y=0;Y<=E;Y++){const Q=Y/E,se=.35+1.5*Q*Q,Ee=S-(S-.06)*(Q*Q*.6+Q*.4);for(const ke of[-1,1])b.push(m.lip[0]+x*se-C*T*ke*(.85+Q*.3),Ee,m.lip[1]+C*se+x*T*ke*(.85+Q*.3)),v.push((ke+1)/2,Q);if(Y<E){const ke=Y*2;A.push(ke,ke+1,ke+2,ke+1,ke+3,ke+2)}}const L=new Ot;L.setAttribute("position",new mt(b,3)),L.setAttribute("uv",new mt(v,2)),L.setIndex(A);const z=new sn({transparent:!0,depthWrite:!1,side:cn,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform float uTime; varying vec2 vUv;
        float h(float x) { return fract(sin(x * 127.1) * 43758.5); }
        void main() {
          float col = floor(vUv.x * 18.0);
          float streak = fract(vUv.y * (1.6 + h(col) * 1.2) - uTime * (1.4 + h(col + 3.0) * 0.8));
          float s = smoothstep(0.0, 0.25, streak) * (1.0 - smoothstep(0.55, 1.0, streak));
          float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
          vec3 c = mix(vec3(0.45, 0.85, 0.88), vec3(1.0), s * 0.8 + vUv.y * 0.3);
          gl_FragColor = vec4(c, (0.55 + 0.4 * s) * edge);
        }`});i.add(new lt(L,z));const U=(()=>{const Y=document.createElement("canvas");Y.width=Y.height=128;const Q=Y.getContext("2d"),se=(()=>{let ke=9;return()=>(ke=ke*16807%2147483647)/2147483647})();for(let ke=0;ke<260;ke++){const H=se()*Math.PI*2,Z=Math.pow(se(),.7)*58,he=1.5+se()*5*(1-Z/70);Q.fillStyle=`rgba(255,255,255,${.55+se()*.45})`,Q.beginPath(),Q.arc(64+Math.cos(H)*Z,64+Math.sin(H)*Z,he,0,Math.PI*2),Q.fill()}Q.globalCompositeOperation="destination-in";const Ee=Q.createRadialGradient(64,64,8,64,64,63);return Ee.addColorStop(0,"rgba(0,0,0,1)"),Ee.addColorStop(.6,"rgba(0,0,0,0.85)"),Ee.addColorStop(1,"rgba(0,0,0,0)"),Q.fillStyle=Ee,Q.fillRect(0,0,128,128),new wi(Y)})(),W=new lt(new Lr(1.5,20),new Nt({map:U,color:"#ffffff",transparent:!0,opacity:.9,depthWrite:!1}));W.rotation.x=-Math.PI/2;const D=m.lip[0]+x*1.9,k=m.lip[1]+C*1.9;W.position.set(D,.1,k),i.add(W);const G=ia(i,Math.round(60*u),{color:"#ffffff",size:.35,speed:-.9,drift:.6,area:1.4,top:2.2});o.push((Y,Q,se)=>{z.uniforms.uTime.value=se,W.scale.setScalar(1+Math.sin(se*5)*.06),W.rotation.z=se*.4,W.material.opacity=.8+.12*Math.sin(se*7),G(Y,{x:D,z:k},se)}),a.push({x:D,z:k,r:.9})}const d=(m,f)=>a.some(_=>(_.x-m)**2+(_.z-f)**2<_.r*_.r);let p=0;return{colliders:r,update:(m,f=e.lighthouse.pos)=>{const _=Math.min(.05,Math.max(0,m-p));p=m;for(const y of o)y(_,f,m)},blocks:d,blockers:a,bridges:l}}const pt=(i,e={})=>new Xt({color:i,flatShading:!0,...e}),dr=(i,e)=>new Nt({color:new Re(i).multiplyScalar(e)}),fe={coat:pt("#f2c23c"),coatDark:pt("#c99a22"),skin:pt("#f1c7a0"),beanieG:pt("#3f8f4a"),beanieY:pt("#f2c94c"),beanieR:pt("#d4553a"),boot:pt("#3a2c22"),eyeW:new Nt({color:"#ffffff"}),eyeB:new Nt({color:"#1c1820"}),suit:pt("#6b6f78"),suitDark:pt("#3c4150"),suitNavy:pt("#2c3a5c"),shirt:pt("#f4f1ea"),tie:pt("#b8322a"),paper:pt("#fbfaf4"),stampInk:pt("#a8233a"),woodLight:pt("#c49360"),glasses:pt("#222428"),binderR:pt("#c94f3f"),binderB:pt("#3f6fc9"),binderY:pt("#e6b93f"),gull:pt("#f4f2ee"),gullWing:pt("#c4ccd4"),gullTip:pt("#2e3038"),gullBand:pt("#8e98a4"),beak:pt("#f0a43a"),megaRed:pt("#d8453a"),mouth:new Nt({color:"#4a2a2a"}),smile:new Nt({color:"#c8485a"}),wood:pt("#9a6a42"),woodDark:pt("#6e4a2c"),iron:pt("#55585e"),speaker:pt("#2a2a30"),cone:pt("#4a4a52"),rasG:pt("#3f9a4a"),rasY:pt("#f2c94c"),rasR:pt("#d4553a"),chipsBag:pt("#f2b632"),chipsRed:pt("#d8453a"),chip:pt("#f0c860"),ringMat:new Xt({color:"#f1efe9",transparent:!0,opacity:.8}),ember:dr("#ff9a3a",2.4),emberCore:dr("#fff1c2",2),rolling:pt("#5a9a5a"),rollingPaper:pt("#fffdf5"),lantern:dr("#ffd27a",2.2),hpBg:new Nt({color:"#2a2020",depthTest:!1,transparent:!0,opacity:.6}),hpFg:new Nt({color:"#d8553a",depthTest:!1}),levelPip:dr("#9fffb0",1.6),bottle:new Xt({color:"#7fd6ff",transparent:!0,opacity:.8}),bubble:new Xt({color:"#dff6ff",transparent:!0,opacity:.45,emissive:"#5a7a9a"}),kiteSail:new Xt({color:"#ff7a5a",side:cn}),rope:pt("#d9c8a0"),ledger:pt("#2f5a3a"),track:pt("#8a4ac8"),briefcase:pt("#6a3a1a"),brass:pt("#d8b040"),rotor:new Nt({color:"#cfd6dc",transparent:!0,opacity:.45}),redLight:dr("#ff3030",2),balloonA:pt("#e8e4d8"),balloonB:pt("#c8463a"),heli:pt("#f2c23c"),glassDark:pt("#2a3440"),spot:new Nt({color:"#fff6c8",transparent:!0,opacity:.18,blending:Ti,depthWrite:!1,side:cn}),pizza:pt("#e8603a"),pizzaCrust:pt("#e8b866"),lampGlass:new Xt({color:"#ff8a5a",transparent:!0,opacity:.45,emissive:"#6a1a10"}),lampBlob:dr("#ff9a2a",2.2)},ge={sphere:new Qn(1,10,8),lowSphere:new Us(1,1),capsule:new Na(.5,.7,3,8),cyl:new jt(1,1,1,10),cone:new Jn(1,1,10),box:new On(1,1,1),dome:new Qn(1,10,6,0,Math.PI*2,0,Math.PI/2),ember:new Dr(.22,0),leaf:new Dr(.3,0),plane:new ai(1,1),smileArc:new yr(.06,.018,4,10,Math.PI),ring:new yr(.32,.12,6,14),bubbleRing:new yr(.18,.025,4,12)};function ve(i,e,t,n,s,r=0,o=0,a=0,l=!0){const c=new lt(i,e);return c.scale.set(t,n,s),c.position.set(r,o,a),c.castShadow=l,c}function Mu(i,e,t,n,s=.12,r=.18){const o=new bt;o.position.set(e,t,n),o.userData.isEyes=!0;for(const a of[-1,1])o.add(ve(ge.sphere,fe.eyeW,s,s,s,a*r,0,0,!1)),o.add(ve(ge.sphere,fe.eyeB,s*.55,s*.55,s*.55,a*r,.01,-s*.7,!1));return i.add(o),o}const bd=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,31);return t.addColorStop(0,"rgba(0,0,0,0.55)"),t.addColorStop(.6,"rgba(0,0,0,0.25)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new wi(i)})(),w_=new Nt({map:bd,transparent:!0,depthWrite:!1,fog:!1}),Sd=new ai(1,1).rotateX(-Math.PI/2);function yu(i,e){const t=new lt(Sd,w_);t.scale.set(e*2,1,e*2),t.position.y=.04,t.renderOrder=1,i.add(t),i.userData.blob=t}function E_(i,e,t=.8){const n=new Nt({map:bd,color:"#000000",transparent:!0,opacity:t,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),s=new bn(Sd,n,Math.max(1,e.length));s.count=e.length;const r=new Yt;return e.forEach((o,a)=>{r.position.set(o.x,o.y+.04,o.z),r.scale.set(o.r*2,1,o.r*2),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.renderOrder=1,i.add(s),s}function wd(i){const e=[];i.traverse(t=>{t.userData.isEyes&&e.push(t)}),i.userData.eyes=e}function Ed(i,e,t,n=1){const s=ve(ge.box,fe.mouth,.14*n,.025*n,.02,0,e,t,!1);s.rotation.z=.15;const r=ve(ge.smileArc,fe.smile,n,n,n,0,e+.03*n,t,!1);return r.rotation.z=Math.PI,r.visible=!1,i.add(s,r),{sour:s,smile:r}}const T_=(()=>{const i=new jt(.07,.05,.55,8);return i.rotateZ(Math.PI/2),i})();function Td(){const i=new bt,e=ve(ge.box,fe.rollingPaper,.55,.012,.26,0,0,0,!1),t=ve(ge.lowSphere,fe.rasG,.22,.06,.07,0,.03,0,!1),n=new lt(T_,fe.rollingPaper),s=ve(ge.cone,fe.rollingPaper,.05,.1,.05,.32,0,0,!1);return s.rotation.z=-Math.PI/2,n.add(s),i.add(e,t,n),i.userData={paper:e,herb:t,joint:n,tip:s},bu(i,0),i}function bu(i,e){const{paper:t,herb:n,joint:s,tip:r}=i.userData,o=Mt.smoothstep,a=o(e,.08,.45),l=o(e,.5,.85);t.visible=l<.98,t.scale.set(.55,.012,.26*(1-.7*l)),n.visible=a>.01&&l<.98,n.scale.set(.22*a+.001,.06*a+.001,.07*(1-.5*l)+.001),s.visible=l>.02,s.scale.set(1,.35+.65*l,.35+.65*l),r.visible=e>.88}function Ad(){const i=new bt,e=new bt;i.add(e),e.add(ve(ge.capsule,fe.coat,.75,.75,.7,0,.75,0)),e.add(ve(ge.cyl,fe.coatDark,.4,.06,.38,0,.62,0));const t=new bt;t.position.y=1.62,t.scale.setScalar(1.22),t.add(ve(ge.sphere,fe.skin,.33,.32,.32)),t.add(ve(ge.cyl,fe.beanieG,.35,.1,.35,0,.14,0)),t.add(ve(ge.cyl,fe.beanieY,.31,.1,.31,0,.24,0)),t.add(ve(ge.dome,fe.beanieR,.27,.22,.27,0,.29,0)),t.add(ve(ge.sphere,fe.beanieY,.08,.08,.08,0,.52,0)),Mu(t,0,.02,-.26,.07,.12);const n=Ed(t,-.12,-.3,.8);n.sour.visible=!1,n.smile.visible=!0,e.add(t);const s=[-1,1].map(h=>{const d=ve(ge.capsule,fe.boot,.24,.32,.24,h*.18,.2,0);return e.add(d),d}),r=new bt;r.position.set(.48,1,-.1),r.add(ve(ge.box,fe.iron,.2,.28,.2,0,-.25,0)),r.add(ve(ge.sphere,fe.lantern,.1,.13,.1,0,-.25,0,!1)),e.add(r);const o=new bt;o.position.set(-.46,1.08,0),o.add(ve(ge.capsule,fe.coat,.16,.34,.16,0,-.28,0)),o.add(ve(ge.sphere,fe.skin,.1,.1,.1,0,-.52,0)),e.add(o);const a=new bt;a.add(ve(ge.box,fe.rolling,.7,.12,.42,0,0,0,!1)),a.add(ve(ge.box,fe.rollingPaper,.6,.08,.36,.06,.08,0,!1)),a.add(ve(ge.leaf,fe.rasG,.35,.05,.35,-.12,.07,0,!1)),a.position.y=2.35,a.visible=!1,i.add(a);const l=new bt;l.position.y=2;for(let h=0;h<3;h++)l.add(ve(ge.ember,fe.emberCore,.6,.6,.6,Math.cos(h*2.1)*.45,0,Math.sin(h*2.1)*.45,!1));l.visible=!1,i.add(l);const c=new bt;c.position.set(.46,1.08,0),c.add(ve(ge.capsule,fe.coat,.16,.34,.16,0,-.28,0)),c.add(ve(ge.sphere,fe.skin,.1,.1,.1,0,-.52,0)),c.visible=!1,e.add(c);const u=Td();return u.position.set(0,1,-.62),u.scale.setScalar(1.6),u.visible=!1,e.add(u),yu(i,.62),i.userData={body:e,legs:s,head:t,lanternArm:r,armL:o,armR:c,roll:u,carried:a,stars:l,blob:i.userData.blob},wd(i),i}function Ci(i,e){const t=new bt;t.position.y=e;const n=new lt(ge.plane,fe.hpBg);n.scale.set(1,.14,1),n.renderOrder=10;const s=new lt(ge.plane,fe.hpFg.clone());s.scale.set(.96,.09,1),s.position.z=.001,s.renderOrder=11,t.add(n,s),t.visible=!1,i.add(t),i.userData.hpBar=t,i.userData.hpFg=s}function pr(i,{scale:e=1,suit:t=fe.suit,wide:n=1}={}){const s=e;i.add(ve(ge.capsule,t,.7*s*n,.62*s,.6*s,0,.72*s,0)),i.add(ve(ge.box,fe.shirt,.22*s,.4*s,.05,0,.98*s,-.27*s*Math.min(n,1.2),!1)),i.add(ve(ge.box,fe.tie,.07*s,.32*s,.05,0,.94*s,-.29*s*Math.min(n,1.2),!1));for(const a of[-1,1])i.add(ve(ge.capsule,fe.suitDark,.2*s,.25*s,.2*s,a*.16*s,.17*s,0));const r=new bt;r.position.y=1.5*s,r.add(ve(ge.sphere,fe.skin,.3*s,.3*s,.3*s)),r.add(ve(ge.dome,fe.suitDark,.31*s,.14*s,.31*s,0,.12*s,.02)),Mu(r,0,.03*s,-.25*s,.065*s,.11*s);const o=Ed(r,-.12*s,-.28*s,s);return i.add(r),{head:r,mouth:o}}function A_(i){const e=new bt,t=new bt;if(e.add(t),e.userData.body=t,i==="clerk"){const{head:n,mouth:s}=pr(t);for(const a of[-1,1])n.add(ve(ge.box,fe.glasses,.11,.07,.02,a*.11,.03,-.3,!1));n.add(ve(ge.box,fe.glasses,.08,.015,.02,0,.04,-.3,!1));const r=new bt;r.position.set(.48,.9,-.15),r.add(ve(ge.cyl,fe.woodLight,.06,.25,.06,0,.12,0)),r.add(ve(ge.sphere,fe.woodLight,.09,.09,.09,0,.27,0)),r.add(ve(ge.box,fe.stampInk,.22,.08,.16,0,-.02,0)),t.add(r);const o=ve(ge.box,fe.paper,.3,.38,.02,-.46,.92,-.2);o.rotation.y=.4,t.add(o),e.userData.mouth=s,e.userData.arm=r,Ci(e,2.15)}else if(i==="tank"){const{mouth:n}=pr(t,{scale:1.25,suit:fe.suitNavy,wide:1.45}),s=new bt;s.position.set(0,0,-.95),s.add(ve(ge.box,fe.woodDark,.75,1.05,.45,0,.52,0));const r=ve(ge.box,fe.woodLight,.9,.08,.6,0,1.1,.04);r.rotation.x=.35,s.add(r),s.add(ve(ge.cyl,fe.iron,.02,.45,.02,.18,1.3,.1,!1)),s.add(ve(ge.sphere,fe.speaker,.05,.05,.05,.18,1.52,.04,!1)),t.add(s),e.userData.mouth=n,Ci(e,2.6)}else if(i==="gull"){t.add(ve(ge.lowSphere,fe.gull,.36,.3,.6,0,0,0)),t.add(ve(ge.cone,fe.beak,.08,.3,.08,0,0,-.65).rotateX(-Math.PI/2));const n=ve(ge.cone,fe.megaRed,.2,.5,.2,0,-.22,-.65);n.rotation.x=Math.PI/2,t.add(n),t.add(ve(ge.cyl,fe.paper,.21,.06,.21,0,-.22,-.89).rotateX(Math.PI/2));const s=[-1,1].map(r=>{const o=new bt;o.position.set(r*.25,.05,0),o.add(ve(ge.box,fe.gullWing,.6,.06,.42,r*.3,0,0)),o.add(ve(ge.box,fe.gullBand,.58,.065,.1,r*.31,0,.17));const a=ve(ge.box,fe.gullTip,.42,.055,.3,r*.78,0,.04);return a.rotation.y=r*.18,o.add(a),t.add(o),o});e.userData.wings=s,Mu(t,0,.12,-.42,.06,.13),e.userData.mouth=null,Ci(e,.8)}else if(i==="swarm"){const{mouth:n}=pr(t,{scale:.6}),s=[fe.binderR,fe.binderB,fe.binderY],r=ve(ge.box,s[Math.floor(Math.random()*3)],.08,.34,.28,.32,.55,-.08);t.add(r),e.userData.mouth=n,Ci(e,1.3)}else if(i==="auditor"){const{head:n,mouth:s}=pr(t,{scale:1.1,suit:fe.suitDark});for(const o of[-1,1])n.add(ve(ge.box,fe.glasses,.12,.08,.02,o*.12,.03,-.33,!1));const r=new bt;r.position.set(0,.95,-.55),r.add(ve(ge.box,fe.ledger,1.05,1.2,.14)),r.add(ve(ge.box,fe.paper,.95,1.1,.1,0,0,.03,!1)),r.add(ve(ge.box,fe.brass,.3,.3,.02,0,.15,-.08,!1)),t.add(r),e.userData.mouth=s,e.userData.shield=r,Ci(e,2.3)}else if(i==="complainer"){const{head:n,mouth:s}=pr(t,{scale:.85,suit:fe.track});n.add(ve(ge.cyl,fe.rasR,.27,.06,.27,0,.1,0,!1));const r=new bt;r.position.set(.35,1.2,-.1),r.add(ve(ge.cyl,fe.track,.06,.45,.06,0,.2,0)),r.add(ve(ge.box,fe.paper,.32,.42,.02,0,.55,0)),t.add(r),e.userData.mouth=s,e.userData.arm=r,Ci(e,1.8)}else if(i==="lobbyist"||i==="lobbyMini"){const n=i==="lobbyMini",{mouth:s}=pr(t,{scale:n?.55:1.05,suit:fe.suitNavy});t.add(ve(ge.box,fe.brass,.08,.3,.05,0,n?.52:.99,n?-.17:-.32,!1)),t.add(ve(ge.box,fe.briefcase,n?.28:.5,n?.22:.36,.12,n?.3:.55,n?.3:.55,0)),e.userData.mouth=s,Ci(e,n?1.2:2.1)}else if(i==="drone"){t.add(ve(ge.box,fe.iron,.42,.14,.42));const n=[];for(const[s,r]of[[1,1],[-1,1],[1,-1],[-1,-1]]){t.add(ve(ge.box,fe.speaker,.5,.04,.05,s*.22,0,r*.22).rotateY(s*r>0?Math.PI/4:-Math.PI/4));const o=ve(ge.cyl,fe.rotor,.2,.01,.2,s*.4,.08,r*.4,!1);t.add(o),n.push(o)}t.add(ve(ge.sphere,fe.redLight,.07,.07,.07,0,-.06,-.22,!1)),e.userData.rotors=n,e.userData.mouth=null,Ci(e,.6)}else if(i==="balloon"){t.add(ve(ge.sphere,fe.balloonA,1.1,1.3,1.1,0,1.6,0));for(let n=0;n<4;n++)t.add(ve(ge.cyl,fe.balloonB,1.12-Math.abs(n-1.5)*.18,.18,1.12-Math.abs(n-1.5)*.18,0,1+n*.42,0,!1));t.add(ve(ge.box,fe.woodLight,.6,.4,.6,0,-.1,0)),t.add(ve(ge.sphere,fe.skin,.2,.2,.2,0,.25,0)),t.add(ve(ge.dome,fe.suitDark,.21,.1,.21,0,.32,0,!1));for(const[n,s]of[[1,1],[-1,1],[1,-1],[-1,-1]])t.add(ve(ge.cyl,fe.rope,.015,.8,.015,n*.28,.45,s*.28,!1));e.userData.mouth=null,Ci(e,3.3)}else if(i==="heli"){t.add(ve(ge.capsule,fe.heli,.6,.55,.9,0,0,0).rotateX(Math.PI/2)),t.add(ve(ge.sphere,fe.glassDark,.28,.22,.24,0,.05,-.38,!1)),t.add(ve(ge.box,fe.heli,.12,.12,1.1,0,.05,.85));const n=ve(ge.box,fe.speaker,1.9,.02,.12,0,.4,0,!1),s=ve(ge.box,fe.speaker,.04,.5,.08,.08,.1,1.38,!1);t.add(n,s);const r=new lt(new Jn(1.2,4.5,14,1,!0),fe.spot);r.position.set(0,-2.3,-.2),r.visible=!1,t.add(r),e.userData.rotor=n,e.userData.tail=s,e.userData.beam=r,e.userData.mouth=null,Ci(e,1)}return yu(e,{tank:.85,auditor:.7,balloon:.9,heli:.6,swarm:.35,lobbyMini:.35,drone:.35,gull:.45}[i]??.55),wd(e),e}function C_(i){const e=i.mesh.userData.mouth;e&&(e.sour.visible=!1,e.smile.visible=!0),i.mesh.userData.hpBar.visible=!1}function R_(i){const e=new bt,t=new bt;if(e.add(t),i==="ring"){e.add(ve(ge.box,fe.wood,.9,.5,.9,0,.25,0)),t.position.y=.95;const o=ve(ge.cyl,fe.iron,.32,1.1,.32,0,0,-.15);o.rotation.x=Math.PI/2-.15,t.add(o),t.add(ve(ge.cyl,fe.woodDark,.38,.12,.38,0,.08,-.7).rotateX(Math.PI/2-.15)),t.add(ve(ge.sphere,fe.iron,.42,.42,.42,0,0,.42)),t.add(ve(ge.sphere,fe.ember,.12,.12,.12,0,.1,.8,!1))}else if(i==="chips"){e.add(ve(ge.cyl,fe.iron,.7,.3,.7,0,.15,0)),t.position.y=.3;const o=ve(ge.box,fe.chipsBag,.95,1.1,.6,0,.6,0);o.rotation.x=-.35,t.add(o),t.add(ve(ge.box,fe.chipsRed,.97,.3,.62,0,.55,0).rotateX(-.35));for(let a=0;a<5;a++)t.add(ve(ge.leaf,fe.chip,.3,.08,.3,(a-2)*.17,1.2,-.3-a%2*.1,!1))}else if(i==="speaker"){const o=new bt;o.add(ve(ge.box,fe.speaker,1,1.5,.75,0,.75,0)),o.add(ve(ge.box,fe.rasG,1.02,.12,.77,0,1.38,0,!1)),o.add(ve(ge.box,fe.rasY,1.02,.12,.77,0,1.26,0,!1)),o.add(ve(ge.box,fe.rasR,1.02,.12,.77,0,1.14,0,!1));const a=[];for(const[l,c]of[[.85,.33],[.35,.2]]){const u=ve(ge.cyl,fe.cone,c,.08,c,0,l,-.38,!1);u.rotation.x=Math.PI/2,o.add(u),a.push(u)}t.add(o),e.userData.woofers=a}else if(i==="bubble"){e.add(ve(ge.cyl,fe.speaker,.5,.25,.5,0,.12,0)),t.position.y=.3,t.add(ve(ge.cyl,fe.bottle,.36,1,.36,0,.5,0)),t.add(ve(ge.cyl,fe.rasR,.22,.2,.22,0,1.08,0));const o=ve(ge.cyl,fe.wood,.03,.8,.03,0,1.4,-.2);o.rotation.x=.5,t.add(o),t.add(ve(ge.bubbleRing,fe.rasY,1,1,1,0,1.75,-.42,!1).rotateX(.5));for(let a=0;a<3;a++)t.add(ve(ge.sphere,fe.bubble,.14+a*.04,.14+a*.04,.14+a*.04,.3-a*.25,1.7+a*.3,-.7-a*.15,!1))}else if(i==="kite"){for(let a=0;a<3;a++){const l=a/3*Math.PI*2,c=ve(ge.cyl,fe.wood,.07,1.6,.07,Math.cos(l)*.45,.7,Math.sin(l)*.45);c.rotation.set(Math.sin(l)*.28,0,-Math.cos(l)*.28),e.add(c)}t.position.y=1.55,t.add(ve(ge.cyl,fe.iron,.22,.3,.22,0,0,0).rotateZ(Math.PI/2));const o=Ld();o.position.set(0,.7,0),o.scale.setScalar(.8),t.add(o),e.userData.kite=o}else if(i==="pizza"){e.add(ve(ge.box,fe.wood,1.2,.35,.9,0,.18,0));for(const a of[-1,1])e.add(ve(ge.box,fe.woodDark,.12,.9,.12,a*.45,.65,0));t.position.y=1;const o=new bt;o.add(ve(ge.box,fe.woodLight,.12,.12,1.5,0,0,-.4)),o.add(ve(ge.cyl,fe.pizzaCrust,.32,.06,.32,0,.08,-1.1)),o.add(ve(ge.cyl,fe.pizza,.27,.03,.27,0,.12,-1.1,!1)),o.rotation.x=-.35,t.add(o),e.userData.arm=o}else if(i==="lamp"){e.add(ve(ge.cone,fe.brass,.55,.7,.55,0,.35,0)),t.position.y=.7,t.add(ve(ge.capsule,fe.lampGlass,.75,.9,.75,0,.75,0,!1));const o=[];for(let a=0;a<3;a++){const l=ve(ge.sphere,fe.lampBlob,.16,.2,.16,0,.5+a*.3,0,!1);t.add(l),o.push(l)}t.add(ve(ge.cone,fe.brass,.3,.35,.3,0,1.55,0)),e.userData.blobs=o}const n=[];for(let o=0;o<5;o++){const a=ve(ge.leaf,fe.levelPip,.45,.1,.45,Math.cos(o*1.2566)*.95,.15,Math.sin(o*1.2566)*.95,!1);a.visible=o===0,e.add(a),n.push(a)}const s=new _s(1.45,1.7,40,1,0,Math.PI*2);s.rotateX(-Math.PI/2);const r=new lt(s,new Nt({color:"#9fffb0",transparent:!0,opacity:.8,depthWrite:!1}));return r.position.y=.06,r.visible=!1,e.add(r),e.traverse(o=>{o.isMesh&&o!==r&&o.material!==fe.levelPip&&(o.castShadow=!0)}),yu(e,1),e.userData.head=t,e.userData.pips=n,e.userData.ring=r,e}function Su(i,e){i.mesh.userData.pips.forEach((t,n)=>t.visible=n<e),i.mesh.scale.setScalar(1+(e-1)*.08)}function Si(i,e){const t=i.mesh.userData.ring;if(t.visible=e>0,e<=0)return;t.geometry.dispose();const n=new _s(1.45,1.7,40,1,0,Math.PI*2*e);n.rotateX(-Math.PI/2),t.geometry=n}function Cd(){const i=new bt;return i.add(ve(ge.ember,fe.ember,1,1.3,1,0,0,0,!1)),i.add(ve(ge.ember,fe.emberCore,.5,.7,.5,0,0,0,!1)),i}function P_(){const i=new lt(ge.ring,fe.ringMat);return i.castShadow=!1,i}function Rd(){const i=new bt;return i.add(ve(ge.box,fe.chipsBag,.32,.4,.14,0,0,0,!0)),i.add(ve(ge.box,fe.chipsRed,.33,.12,.15,0,.02,0,!1)),i}function Pd(){const i=new yr(1,.08,4,32);return i.rotateX(Math.PI/2),new lt(i,new Nt({color:"#c8ffd0",transparent:!0,opacity:.7,depthWrite:!1}))}let sa=null;function L_(){if(sa)return sa;const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d");["#d8453a","#f2c94c","#d8453a","#f2c94c","#3f9a4a","#f2c94c","#d8453a","#f2c94c"].forEach((n,s)=>{e.fillStyle=n,e.fillRect(0,s*8,64,8)});const t=new wi(i);return t.colorSpace=En,t.wrapS=t.wrapT=zi,t.repeat.set(1,1.4),t.magFilter=Tn,sa=new Xt({map:t,flatShading:!0}),sa}function Ld(){const i=new bt,e=new hd([new Ae(0,.55),new Ae(.38,0),new Ae(0,-.75),new Ae(-.38,0)]),t=new vu(e,{depth:.035,bevelEnabled:!1});t.translate(0,0,-.0175);const n=new lt(t,L_());n.rotation.x=-Math.PI/2.4,n.castShadow=!0,i.add(n);const s=ve(ge.box,fe.woodDark,.025,1.3,.025,0,-.1,.03,!1),r=ve(ge.box,fe.woodDark,.76,.025,.025,0,0,.03,!1);n.add(s,r);const o=new bt;o.position.set(0,-.68,0),n.add(o);const a=[fe.rasR,fe.rasY,fe.rasG,fe.rasR,fe.rasY];let l=o;const c=[];for(let u=0;u<a.length;u++){const h=new bt;h.position.y=u?-.2:0,h.add(ve(ge.box,fe.rope,.015,.2,.015,0,-.1,0,!1));const d=new bt;d.position.y=-.2;for(const p of[-1,1]){const g=ve(ge.cone,a[u],.05,.1,.03,p*.05,0,0,!1);g.rotation.z=p*Math.PI/2,d.add(g)}h.add(d),l.add(h),l=h,c.push(h)}return i.userData.tailSegs=c,i}function Dd(){return ve(ge.sphere,fe.bubble,.28,.28,.28,0,0,0,!1)}function D_(){const i=new bt;return i.add(ve(ge.cyl,fe.pizzaCrust,.3,.06,.3,0,0,0,!0)),i.add(ve(ge.cyl,fe.pizza,.25,.03,.25,0,.04,0,!1)),i}const Ir=20;function Kn(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function I_(i){const e=new mu(i.map(([s,r])=>new V(s,0,r)),!1,"catmullrom",.5),t=e.getLength(),n=e.getSpacedPoints(400);return{curve:e,length:t,samples:n}}function U_(i,e,t,n,s){const o=new On(1,1,1,5,5,5),a=o.attributes.position,l=new V,c=new V,u=i/2,h=e/2,d=t/2,p=Math.min(n,u,h,d)*.98,g=s()*10,M=(s()-.5)*.12;for(let f=0;f<a.count;f++){l.set(a.getX(f)*i,a.getY(f)*e,a.getZ(f)*t),c.set(Mt.clamp(l.x,-u+p,u-p),Mt.clamp(l.y,-h+p,h-p),Mt.clamp(l.z,-d+p,d-p)),l.sub(c);const _=l.length();_>0&&l.multiplyScalar(p/_),l.add(c);const y=1+.035*Math.sin(l.x*4.1+g)*Math.sin(l.z*3.7-g)+.025*Math.sin(l.y*6+g*2);l.x*=y,l.z*=y,l.y+=l.x*M,a.setXYZ(f,l.x,l.y,l.z)}o.deleteAttribute("normal"),o.deleteAttribute("uv");const m=vd(o);return m.computeVertexNormals(),m}function z_(i,e,t,n){const s=new Re(e),r=new Re(t),o=new Re,a=[[[2.3,.85,1.9,0,0,0],[1.6,.7,1.4,.2,-.1,.35]],[[1.5,1.5,1.4,-.35,.1,.1],[1.4,.8,1.3,.75,-.2,-.3],[.9,.6,.85,-.3,.05,.6]],[[2.4,.7,2,0,0,.2],[1.8,.65,1.5,-.15,.15,-.25],[1.1,.55,1,.2,-.1,.5]]][n%3],l=[];let c=0,u=0;a.forEach(([f,_,y,x,C,S],E)=>{const T=.88+i()*.24,b=U_(f*T,_*(.9+i()*.2),y*T,Math.min(f,_,y)*.28,i);b.rotateY(S+(i()-.5)*.3);const v=n%3===1&&E===1?0:c;b.translate(x,v+_/2,C),n%3===1&&E===1||(c=v+_*.92),u=Math.max(u,v+_),l.push(b)});const h=_u(l),d=h.attributes.position,p=h.attributes.normal,g=[],M=.95+i()*.1,m=i()*10;for(let f=0;f<d.count;f++){const _=d.getX(f),y=d.getY(f),x=d.getZ(f);o.copy(s).multiplyScalar(M*(.72+.28*Mt.smoothstep(y,0,.9))*(p.getY(f)<-.3?.8:1));const C=Math.sin(_*2.3+m)*Math.sin(x*2.7-m)+.5*Math.sin(_*5.1-x*4.3+m),S=Mt.smoothstep(p.getY(f),.6,.9)*Mt.smoothstep(y,u-.3,u-.08)*Mt.smoothstep(C,-.55,0);o.lerp(r,S),g.push(o.r,o.g,o.b)}return h.setAttribute("color",new mt(g,3)),h}function of(i,e,t,n,s,r,o=12,a={}){const l=a.dressed?.3:1,c=new jt(e,t,n,o,3,!0),u=new _s(.001,e,o,4);u.rotateX(-Math.PI/2),u.translate(0,n/2,0);const h=_u([c,u]),d=h.attributes.position,p=i()*10;for(let S=0;S<d.count;S++){const E=d.getX(S),T=d.getY(S),b=d.getZ(S),v=Math.hypot(E,b);if(v<1e-4)continue;const A=Math.atan2(b,E);let L=1+l*(.05*Math.sin(A*3+p)+.035*Math.sin(A*7-p*2)+.025*Math.sin(T*9+A*4)),z=T;T>n/2-1e-4&&v>e*.97&&(L*=.93,z-=.08),d.setXYZ(S,E*L,z,b*L)}h.deleteAttribute("normal"),h.deleteAttribute("uv");const g=vd(h);g.computeVertexNormals(),g.translate(0,n/2,0);const M=new Re(s),m=new Re(r),f=new Re,_=[],y=new Re("#ece3cc"),x=g.attributes.position,C=g.attributes.normal;for(let S=0;S<x.count;S++){const E=x.getX(S),T=x.getY(S),b=x.getZ(S),v=Math.atan2(b,E),A=Math.hypot(E,b);if(f.copy(M).multiplyScalar(.55+.45*Mt.smoothstep(T,0,n*.9)),a.dressed){const U=Mt.smoothstep(C.getY(S),.75,.95)*Mt.smoothstep(T,n-.15,n-.08),W=1-Mt.smoothstep(Math.abs(A-e*.72),.04,.1);f.lerp(y,U*(1-.75*W)),f.multiplyScalar(1-.45*W*U),_.push(f.r,f.g,f.b);continue}const L=Math.sin(E*1.9+p)*Math.sin(b*2.3-p)+.5*Math.sin(v*5+p)+.3*Math.sin(A*4),z=Mt.smoothstep(T,n-.25,n-.05)*Mt.smoothstep(L,0,.5)*Mt.smoothstep(C.getY(S),.2,.7);f.lerp(m,z),_.push(f.r,f.g,f.b)}return g.setAttribute("color",new mt(_,3)),g}function af(i,e=.55){const t=document.createElement("canvas");t.width=t.height=256;const n=t.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,256,256);const s=Kn(4242);for(let l=0;l<90;l++){const c=225+s()*30|0;n.fillStyle=`rgba(${c},${c},${c},0.5)`,n.beginPath(),n.ellipse(s()*256,s()*256,8+s()*22,4+s()*10,s()*3,0,Math.PI*2),n.fill()}n.lineCap="round",n.lineJoin="round";const r=(l,c,u,h,d)=>{n.lineWidth=d,n.strokeStyle="rgba(46,44,50,0.85)",n.beginPath(),n.moveTo(l,c);for(let p=0;p<h;p++)u+=(s()-.5)*.9,l+=Math.cos(u)*9,c+=Math.sin(u)*9,n.lineTo(l,c),s()<.12&&d>1.2&&(n.stroke(),r(l,c,u+(s()<.5?1:-1)*(.6+s()*.6),h>>1,d*.7),n.lineWidth=d,n.strokeStyle="rgba(46,44,50,0.85)",n.beginPath(),n.moveTo(l,c));n.stroke()};for(let l=0;l<9;l++){const c=s()*256,u=s()*256,h=s()*6.28,d=5+(s()*7|0),p=1.6+s()*1.2;for(const[g,M]of[[0,0],[256,0],[-256,0],[0,256],[0,-256]])n.save(),n.translate(g,M),r(c,u,h,d,p),n.restore()}const o=new wi(t);o.colorSpace=En,o.wrapS=o.wrapT=zi,o.anisotropy=4;const a=new Xt({vertexColors:!0});return a.onBeforeCompile=l=>{l.uniforms.uCrack={value:o},l.uniforms.uWaterC={value:new Re(i)},l.vertexShader=`varying vec3 vRP;
varying vec3 vRN;
varying float vRWY;
`+l.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vRP = position; vRN = normal;
  vec4 rw = vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    rw = instanceMatrix * rw;
  #endif
  vRWY = (modelMatrix * rw).y;`),l.fragmentShader=`uniform sampler2D uCrack;
uniform vec3 uWaterC;
varying vec3 vRP;
varying vec3 vRN;
varying float vRWY;
`+l.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      {
        vec3 w = pow(abs(normalize(vRN)), vec3(4.0)); w /= (w.x + w.y + w.z);
        vec3 q = vRP * ${e.toFixed(3)}; // sprekk-tetthet per objektrom-enhet (store fyrfoten trenger glissere)
        vec3 cr = texture2D(uCrack, q.zy).rgb * w.x + texture2D(uCrack, q.xz).rgb * w.y + texture2D(uCrack, q.xy).rgb * w.z;
        diffuseColor.rgb *= cr;
        // Under vannflata (0,05) tar steinen vannets farge (som de turkise undervannssteinene i raw1):
        // flate blokk-topper rett under overflata viste seg ellers som lyse grå firkanter i det klare vannet
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.35 + uWaterC * 0.55, 0.8 * smoothstep(-0.03, 0.06, 0.05 - vRWY));
      }`)},a.customProgramCacheKey=()=>`rock${e}`,a}function N_(i,e,t){const n=__(t),s=new V(t.lighthouse[0],0,t.lighthouse[1]),r=t.paths.map(I_),o=r.flatMap(N=>N.samples),a=(N,O)=>{let ee=1/0;for(let pe=0;pe<o.length;pe+=3){const ye=o[pe],Pe=(ye.x-N)**2+(ye.z-O)**2;Pe<ee&&(ee=Pe)}return Math.sqrt(ee)};if(t.plateausAuto&&!t.plateaus){const N=Kn(500+t.seed),O=[];for(const ee of t.plateausAuto){let pe=null,ye=-1;for(let Pe=0;Pe<500;Pe++){const Te=N()*Math.PI*2,te=12+N()*24,Ye=Math.cos(Te)*te,We=Math.sin(Te)*te,dt=a(Ye,We);if(dt<ee.r+3.5||Math.hypot(Ye-s.x,We-s.z)<ee.r+9||O.some(It=>Math.hypot(It.x-Ye,It.z-We)<It.r+ee.r+5))continue;const Pt=Math.min(dt-ee.r,9)+N()*.5;Pt>ye&&(ye=Pt,pe={x:Ye,z:We,...ee})}pe&&O.push(pe)}if(t.plateaus=O,t.waterfall&&O[0]){const ee=O[0],pe=t.waterfall;let ye=0,Pe=-1;for(let Ye=0;Ye<16;Ye++){const We=Ye/16*Math.PI*2,dt=ee.x+Math.cos(We)*(ee.r+3.2),Pt=ee.z+Math.sin(We)*(ee.r+3.2),It=a(dt,Pt);It>Pe&&(Pe=It,ye=We)}const Te=Math.cos(ye),te=Math.sin(ye);pe.pool=[ee.x+Te*(ee.r-2.4),ee.z+te*(ee.r-2.4)],pe.lip=[ee.x+Te*(ee.r-.3),ee.z+te*(ee.r-.3)],pe.basin=[ee.x+Te*(ee.r+3),ee.z+te*(ee.r+3)]}}const l=t.fjord,c=t.nes,u=(N,O)=>{if(t.shape==="fjord"){const ee=O+30+2.2*Math.sin(N*.21)+1.2*Math.sin(N*.53+1),pe=Mt.clamp(O,c.z1,c.z0),ye=c.r-Math.hypot(N-c.x,O-pe)+(O<c.z1?0:.6*Math.sin(O*.7));return Math.max(ee,ye)}return n(Math.atan2(O,N))-Math.hypot(N,O)},h=(N,O,ee=!1)=>{const pe=Mt.smoothstep(u(N,O),-3,7),ye=.9+.7*Math.sin(N*.17+1)*Math.cos(O*.21)+.35*Math.sin(N*.5+O*.4)+.3*Math.sin(N*.31-O*.23+2.1)+.18*Math.cos(N*.73+O*.61),Pe=2.4*Math.exp(-((N-s.x-2)**2+(O-s.z+1)**2)/60);let Te=-2.2+pe*(2.2+ye+Pe);if(pe>.85&&Te<.35&&(Te=Math.max(-.42,.35-(.35-Te)*3.2)),l){const te=Math.max(Mt.smoothstep(Math.abs(N),l.wall-3,l.wall+6),Mt.smoothstep(O,l.top+6,l.top+14));Te+=te*(7+1.5*Math.sin(O*.13+N*.05));const Ye=Math.abs(N-l.xc(O)),We=1-Mt.smoothstep(O,l.top-6,l.top+2);Ye<l.w+1.5&&We>0&&(Te=Math.min(Te,Mt.lerp(Te,-1.6,We*(1-Mt.smoothstep(Ye,l.w-.8,l.w+1.5)))))}for(const te of t.plateaus||[]){const Ye=Math.hypot(N-te.x,O-te.z),We=Math.atan2(O-te.z,N-te.x),dt=te.r+Math.sin(We*5+te.x)*.8+Math.sin(We*11)*.3;Te+=te.h*Mt.smoothstep(dt-Ye,0,1.3)}if(t.waterfall&&!ee){const te=t.waterfall,Ye=Math.hypot(N-te.pool[0],O-te.pool[1]);Ye<te.poolR+.6&&(te._lvl??(te._lvl=h(te.pool[0],te.pool[1],!0)-.12),Te=Math.min(Te,te._lvl-.48*Math.sqrt(Math.max(0,1-Ye/(te.poolR+.6)))));const We=Mt.clamp(((N-te.pool[0])*(te.lip[0]-te.pool[0])+(O-te.pool[1])*(te.lip[1]-te.pool[1]))/((te.lip[0]-te.pool[0])**2+(te.lip[1]-te.pool[1])**2),0,1),dt=te.pool[0]+(te.lip[0]-te.pool[0])*We,Pt=te.pool[1]+(te.lip[1]-te.pool[1])*We;Math.hypot(N-dt,O-Pt)<.75&&te._lvl!==void 0&&(Te=Math.min(Te,te._lvl-.25));const It=Math.hypot(N-te.basin[0],O-te.basin[1]);It<te.basinR&&(Te=Math.min(Te,Math.max(-.42,.05-.47*Math.sqrt(1-It/te.basinR))))}if(t.volcano){const te=t.volcano,Ye=Math.hypot(N-te.x,O-te.z);Te+=te.h*Math.max(0,1-Ye/te.r)**1.4-te.h*.5*Math.max(0,1-Ye/(te.r*.25))}return Te},d=68,p=e.mobile?160:176,g=new Float32Array((p+1)*(p+1)),M=new Float32Array((p+1)*(p+1));for(let N=0;N<=p;N++)for(let O=0;O<=p;O++){const ee=-d+O/p*d*2,pe=-d+N/p*d*2,ye=a(ee,pe);M[N*(p+1)+O]=ye;let Pe=h(ee,pe);const Te=Mt.smoothstep(ye,1.4,3.2),te=Math.max(h(ee,pe)*.6+.3,.45);Pe=Mt.lerp(Math.min(Pe,te+.1),Pe,Te),l&&Math.abs(pe-l.bridgeZ)<4&&Math.abs(ee-l.xc(pe))<l.w+2&&ye<2.2&&(Pe=Math.max(Pe,.5)),g[N*(p+1)+O]=Pe}const m=(N,O,ee)=>{const pe=Mt.clamp((O+d)/(d*2)*p,0,p-.001),ye=Mt.clamp((ee+d)/(d*2)*p,0,p-.001),Pe=Math.floor(pe),Te=Math.floor(ye),te=pe-Pe,Ye=ye-Te,We=N[Te*(p+1)+Pe],dt=N[Te*(p+1)+Pe+1],Pt=N[(Te+1)*(p+1)+Pe],It=N[(Te+1)*(p+1)+Pe+1];return(We*(1-te)+dt*te)*(1-Ye)+(Pt*(1-te)+It*te)*Ye},f=(N,O)=>m(g,N,O),_=(N,O)=>m(M,N,O),y=(N,O)=>f(N,O)>.35,x=.5,C=(N,O)=>Math.max(Math.abs(f(N+.4,O)-f(N-.4,O)),Math.abs(f(N,O+.4)-f(N,O-.4)))/.8,S=(N,O)=>!!l&&Math.abs(O-l.bridgeZ)<4&&Math.abs(N-l.xc(O))<l.w+1.5&&_(N,O)<2.6,E=new Re("#cfeaff"),T=(N,O)=>f(N,O)>.05-x&&C(N,O)<1.05,b=e.mobile?170:256,v=new ai(d*2,d*2,b,b);v.rotateX(-Math.PI/2);const A=v.attributes.position,L=new Float32Array(A.count*3),z=new Float32Array(A.count*3),U=new Float32Array(A.count),W=new Float32Array(A.count*4),D=new Re,k=new Re,G=t.palette,Y=new Re(t.rock[0]).multiplyScalar(.7),Q=new Re(t.rock[0]).multiplyScalar(1.08),se=new Re,Ee=new Re(G.sand),ke=new Re(G.grass),H=new Re(G.grass2),Z=new Re(G.path),he=new Re(G.deep),oe=new Re,me=Kn(7);for(let N=0;N<A.count;N++){const O=A.getX(N),ee=A.getZ(N),pe=f(O,ee);A.setY(N,pe);const ye=_(O,ee),Pe=(me()-.5)*.04,Te=oe.copy(ke).lerp(H,Mt.clamp((pe-1)*.6+me()*.3,0,1)).offsetHSL(0,0,Pe);z.set([Te.r,Te.g,Te.b],N*3),D.copy(he).lerp(Ee,Mt.smoothstep(pe,0,.3)).offsetHSL(0,0,Pe),L.set([D.r,D.g,D.b],N*3);const te=.5+.5*Math.sin(O*1.7+ee*.9)*Math.cos(ee*1.3-O*.6);U[N]=1.9-Math.min(ye,6)+(te-.5)*(G.pathMix??.3)*2.4-Math.max(0,.3-pe)*2.5;let Ye=0;l&&S(O,ee)&&(k.copy(E),Ye=.85);const We=C(O,ee);if(We>.75){const dt=.5+.5*Math.sin(pe*7.5+Math.sin(O*.7+ee*.5)*1.5);se.copy(Y).lerp(Q,dt);const Pt=Mt.smoothstep(We,.75,1.3);k.copy(Ye?k:se).lerp(se,Pt),Ye=Math.max(Ye,Pt)}W.set([k.r,k.g,k.b,Ye],N*4)}v.setAttribute("aLow",new qt(L,3)),v.setAttribute("aGrass",new qt(z,3)),v.setAttribute("aPathF",new qt(U,1)),v.setAttribute("aOver",new qt(W,4)),v.computeVertexNormals();const Le=new Xt({color:"#ffffff"});Le.onBeforeCompile=N=>{N.vertexShader=N.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTW, vLow, vGrass;
varying vec4 vOver;
varying float vPathF;
attribute vec3 aLow, aGrass;
attribute vec4 aOver;
attribute float aPathF;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vTW = (modelMatrix * vec4(transformed, 1.0)).xyz;
vLow = aLow; vGrass = aGrass; vOver = aOver; vPathF = aPathF;`),N.uniforms.uPath={value:Z},N.fragmentShader=N.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vTW, vLow, vGrass;
varying vec4 vOver;
varying float vPathF;
uniform vec3 uPath;`).replace("#include <color_fragment>",`#include <color_fragment>
        // Skarpe overganger: sand → gress på en støyete høydekontur, sti på en terskel i stifeltet
        float edgeN = sin(vTW.x * 2.1 + sin(vTW.z * 1.3) * 1.5) * sin(vTW.z * 1.7 - vTW.x * 0.6);
        vec3 ground = mix(vLow, vGrass, smoothstep(0.76, 0.80, vTW.y + edgeN * 0.06));
        ground = mix(ground, uPath, smoothstep(0.34, 0.40, vPathF));
        diffuseColor.rgb = mix(ground, vOver.rgb, vOver.a);
        // Våt sand: mørkere stripe langs vannkanten og under vann (G3)
        diffuseColor.rgb *= mix(1.0, 0.8, 1.0 - smoothstep(0.08, 0.34, vTW.y));
        float sandMask = 1.0 - smoothstep(0.55, 0.85, vTW.y);
        // G5: sandkrusninger (raw5): forvridde, asymmetriske riller med smal lys kam og bredere skygge.
        // fwidth tar dem bort der de blir finere enn et par piksler (ellers moiré på avstand/mobil)
        {
          vec2 sq = vTW.xz;
          float warp = sin(sq.x * 0.45 + sin(sq.y * 0.6) * 1.4) * 1.6 + sin(sq.y * 0.9 - sq.x * 0.3) * 0.7;
          float ph = dot(sq, vec2(0.6, 0.8)) * 8.0 + warp * 2.4;
          float s = sin(ph);
          float crest = smoothstep(0.55, 0.97, s), trough = smoothstep(0.1, -0.85, s);
          float aa = 1.0 - smoothstep(0.5, 1.4, fwidth(ph));
          float wetR = 1.0 - smoothstep(0.08, 0.34, vTW.y);
          // Overalt der bakken er sand: lav sand under gress-konturen og sand-stiene (ikke på gress/klippe-overlegg)
          float sandy = max(1.0 - smoothstep(0.76, 0.80, vTW.y + edgeN * 0.06), smoothstep(0.34, 0.40, vPathF)) * (1.0 - vOver.a);
          diffuseColor.rgb *= 1.0 + (0.1 * crest - 0.11 * trough) * sandy * aa * mix(1.0, 0.45, wetR);
        }
        // Malt overflate: myk to-oktavs støy i lyshet og litt i fargetone
        vec2 q = vTW.xz;
        float n1 = sin(q.x * 0.9 + sin(q.y * 0.7) * 1.7) * sin(q.y * 1.1 + sin(q.x * 0.5) * 1.3);
        float n2 = sin(q.x * 3.7 + q.y * 2.3) * sin(q.y * 3.1 - q.x * 1.9);
        diffuseColor.rgb *= 0.93 + 0.07 * n1 + 0.035 * n2;
        diffuseColor.g *= 1.0 + 0.025 * n1;`)};const Ue=new lt(v,Le);Ue.receiveShadow=!0,i.add(Ue);const Xe=[],de=(N,O)=>Math.hypot(N-s.x,O-s.z)>6;for(const[N,O]of r.entries()){let ee=N%2===0?1:-1,pe=0;for(let ye=.16;ye<.95&&pe<6;ye+=.055){const Pe=O.curve.getPointAt(ye),Te=O.curve.getTangentAt(ye),te=new V(-Te.z,0,Te.x).normalize();for(const Ye of[ee,-ee]){const We=Pe.x+te.x*3.6*Ye,dt=Pe.z+te.z*3.6*Ye;if(!(_(We,dt)<2.7||!y(We,dt)||!de(We,dt))&&!Xe.some(Pt=>Math.hypot(Pt.x-We,Pt.z-dt)<5.2)&&!(t.volcano&&Math.hypot(We-t.volcano.x,dt-t.volcano.z)<t.volcano.r+2)){Xe.push({x:We,z:dt,tower:null}),pe++;break}}ee=-ee}}const Me=af(t.water.mid),B=new Nt({color:new Re("#ffd27a").multiplyScalar(1.6),transparent:!0,opacity:.75,depthWrite:!1}),$e=new Nt({color:new Re("#ffe9a8").multiplyScalar(2),transparent:!0,opacity:.85,depthWrite:!1}),be=of(Kn(61+t.seed),1.3,1.45,.98,t.rock[0],t.rock[1],8,{dressed:!0});be.translate(0,-.1,0);const Oe=new _s(.55,.75,6);Oe.rotateX(-Math.PI/2);const Ie=new Dr(1,0),nt=Xe.length,j=new bn(be,Me,nt),R=new bn(Oe,B,nt),w=new bn(Ie,$e,nt*3);j.castShadow=j.receiveShadow=!0;const X=new Yt;Xe.forEach((N,O)=>{N.y0=f(N.x,N.z),N.y=N.y0+.88,X.position.set(N.x,N.y0,N.z),X.rotation.set(0,O,0),X.scale.setScalar(1),X.updateMatrix(),j.setMatrixAt(O,X.matrix)}),i.add(j,R,w),Lc(j,"rock");const ne=N=>{Xe.forEach((O,ee)=>{const pe=!O.tower;X.position.set(O.x,O.y0+.9,O.z),X.rotation.set(0,N*.5,0),X.scale.setScalar(pe?1:0),X.updateMatrix(),R.setMatrixAt(ee,X.matrix);for(let ye=0;ye<3;ye++){const Pe=N*.4+ye*2.1+O.x,Te=(Pe%1+1)%1;X.position.set(O.x+Math.cos(Pe*2.3)*.55,O.y0+1+Te*1.1,O.z+Math.sin(Pe*2.3)*.55),X.rotation.set(0,Pe*3,0);const te=pe?.07*Math.sin(Te*Math.PI):0;X.scale.set(te,te*1.6,te),X.updateMatrix(),w.setMatrixAt(ee*3+ye,X.matrix)}}),R.instanceMatrix.needsUpdate=!0,w.instanceMatrix.needsUpdate=!0},ie=new bt,re=f(s.x,s.z);ie.position.set(s.x,re,s.z);const Fe=(()=>{const N=document.createElement("canvas");N.width=512,N.height=512;const O=N.getContext("2d");O.fillStyle="#f6f1e6",O.fillRect(0,0,512,512);const ee=Kn(5);for(let ye=0;ye<520;ye++){const Pe=ee()*512,Te=ee()*512,te=2+ee()*9,Ye=ee()<.65;O.fillStyle=Ye?`rgba(${90+ee()*40},${120+ee()*40},${60+ee()*20},${.12+ee()*.18})`:`rgba(${130+ee()*30},${95+ee()*20},60,${.12+ee()*.15})`,O.beginPath(),O.ellipse(Pe,Te,te,te*(.4+ee()*.6),ee()*3,0,Math.PI*2),O.fill()}for(let ye=0;ye<1200;ye++){O.strokeStyle=`rgba(190,170,140,${.04+ee()*.07})`,O.lineWidth=1;const Pe=ee()*512,Te=ee()*512;O.beginPath(),O.moveTo(Pe,Te),O.lineTo(Pe+(ee()-.5)*8,Te+6+ee()*20),O.stroke()}for(let ye=0;ye<26;ye++){const Pe=ee()*512;O.strokeStyle=ee()<.5?"rgba(255,255,255,0.35)":"rgba(150,130,100,0.18)",O.lineWidth=2+ee()*5,O.beginPath(),O.moveTo(Pe,512),O.bezierCurveTo(Pe+40,350,Pe-30,160,Pe+20+ee()*40,0),O.stroke()}O.strokeStyle="rgba(175,145,100,0.55)",O.lineWidth=4,O.beginPath(),O.moveTo(60,512),O.bezierCurveTo(90,330,110,180,150,0),O.stroke();const pe=new wi(N);return pe.colorSpace=En,pe.wrapS=zi,pe})(),Se=new Xt({map:Fe}),De=(()=>{const N=document.createElement("canvas");N.width=N.height=128;const O=N.getContext("2d");O.fillStyle="#e9dcbf",O.fillRect(0,0,128,128),O.strokeStyle="#a88d62",O.lineWidth=3,O.beginPath();for(let pe=0;pe<Math.PI*9;pe+=.1){const ye=4+pe*2;O.lineTo(64+Math.cos(pe)*ye,64+Math.sin(pe)*ye)}O.stroke();const ee=new wi(N);return ee.colorSpace=En,ee})(),ot=new Xt({color:"#e6d8b8"}),we=new Xt({map:De}),je=new Xt({color:"#3a3330",flatShading:!0}),at=new Xt({color:"#b8b2aa",flatShading:!0}),ut=(()=>{const N=document.createElement("canvas");N.width=256,N.height=128;const O=N.getContext("2d"),ee=O.createLinearGradient(0,0,0,128);ee.addColorStop(0,"#fff0b0"),ee.addColorStop(.45,"#ffb040"),ee.addColorStop(1,"#ff5a10"),O.fillStyle=ee,O.fillRect(0,0,256,128);const pe=Kn(11);for(let Pe=0;Pe<70;Pe++){const Te=pe();O.fillStyle=Te<.5?`rgba(70,60,55,${.5+pe()*.4})`:`rgba(170,165,160,${.5+pe()*.4})`,O.beginPath(),O.ellipse(pe()*256,20+pe()*108,4+pe()*14,2+pe()*6,pe()*3,0,Math.PI*2),O.fill()}O.strokeStyle="rgba(60,30,20,0.6)",O.lineWidth=1.5;for(let Pe=0;Pe<40;Pe++){const Te=pe()*256,te=pe()*128;O.beginPath(),O.moveTo(Te,te),O.lineTo(Te+(pe()-.5)*30,te+(pe()-.5)*20),O.stroke()}const ye=new wi(N);return ye.colorSpace=En,ye})(),Je=new Nt({map:ut,color:new Re("#ffffff").multiplyScalar(2.2)});function wt({len:N,rTop:O,rBot:ee,crutchH:pe,seg:ye,bend:Pe,glowMat:Te,shadow:te}){const Ye=new bt,We=new lt(new jt(ee*.98,ee*.95,pe,ye),[ot,ot,we]);We.position.y=pe/2,We.castShadow=te,Ye.add(We);const dt=new jt(O,ee,N,ye,8,!0),Pt=dt.attributes.position,It=Kn(Math.round(N*100)),Oi=Array.from({length:6},()=>[It()*6.28,It()*3,.03+It()*.04]);for(let Ft=0;Ft<Pt.count;Ft++){const hi=Pt.getY(Ft),fi=(hi+N/2)/N,Vr=Math.atan2(Pt.getZ(Ft),Pt.getX(Ft));let Zs=1+Math.sin(Vr*7+hi*3)*.018;for(const[ap,lp,cp]of Oi)Zs+=Math.cos(Vr-ap)*Math.sin(fi*6+lp)*cp*.5;Pt.setXYZ(Ft,Pt.getX(Ft)*Zs+Pe*fi*fi*N,hi,Pt.getZ(Ft)*Zs)}dt.translate(0,N/2,0),dt.computeVertexNormals();const Lt=new lt(dt,Se);Lt.position.y=pe,Lt.castShadow=te,Lt.receiveShadow=!0,Ye.add(Lt);const Rn=Pe*N,ui=pe+N,Pn=new jt(O*1.02,O*1.04,O*.35,ye,1,!0),qn=Pn.attributes.position;for(let Ft=0;Ft<qn.count;Ft++)qn.getY(Ft)>0&&qn.setY(Ft,qn.getY(Ft)+Math.sin(Ft*2.7)*O*.12);Pn.computeVertexNormals();const Yn=new lt(Pn,je);Yn.position.set(Rn,ui+O*.12,0),Ye.add(Yn);const ns=new lt(new Qn(O*.97,ye,6,0,Math.PI*2,0,Math.PI/2),Te);ns.scale.y=.38,ns.position.set(Rn,ui+O*.2,0),Ye.add(ns);const Ha=[];for(let Ft=0;Ft<5;Ft++){const hi=new lt(new Fa(O*(.2+Ft%3*.07),0),at),fi=Ft*1.25+.3;hi.position.set(Rn+Math.cos(fi)*O*.55,ui+O*.33,Math.sin(fi)*O*.55),hi.scale.y=.4,Ye.add(hi),Ha.push(hi)}const Wa=new Jn(O*.28,O*1.1,6,4),Ks=Wa.attributes.position;for(let Ft=0;Ft<Ks.count;Ft++){const hi=Ks.getY(Ft),fi=(hi/(O*1.1)+.5)*2.2,Vr=Ks.getX(Ft),Zs=Ks.getZ(Ft);Ks.setX(Ft,Vr*Math.cos(fi)-Zs*Math.sin(fi)+(hi+O*.55)*.25),Ks.setZ(Ft,Vr*Math.sin(fi)+Zs*Math.cos(fi))}Wa.computeVertexNormals();const Gr=new lt(Wa,je);return Gr.position.set(Rn+O*.1,ui+O*.7,O*.1),Gr.rotation.z=-.35,Ye.add(Gr),Ye.userData={glow:ns,top:new V(Rn,ui,0),charRing:Yn,ashFlakes:Ha,body:Lt,twist:Gr,len:N,rTop:O,rBot:ee,bend:Pe,crutchH:pe,base:Lt.geometry.attributes.position.array.slice(),topParts:[Yn,ns,Gr,...Ha].map(Ft=>[Ft,Ft.position.clone(),Ft.scale.clone()])},Ye}const ht=new Re(t.rock[0]).multiplyScalar(.86),Et=new lt(of(Kn(67+t.seed),3.3,3.9,1,ht,t.rock[1],16),af(t.water.mid,.2));Et.position.y=-.2,Et.castShadow=Et.receiveShadow=!0,ie.add(Et),Br(Et,"rock");const $=7.4,Ne=1.4,le=wt({len:$,rTop:2.35,rBot:.95,crutchH:Ne,seg:22,bend:.06,glowMat:Je,shadow:!0});le.position.y=.75,le.rotation.set(.06,0,-.03);const _e=le.userData.charRing;ie.add(le);const Ve=new Yt;Ve.position.y=Ne+$+1.2,le.add(Ve);const He=new vo("#ff8a3a",40,34,1.5);He.position.y=Ne+$+1.4,le.add(He);const ft=new Jn(2.2,16,16,6,!0);ft.translate(0,-8,0);{const N=ft.attributes.position,O=new Float32Array(N.count*3);for(let ee=0;ee<N.count;ee++){const pe=Math.pow(1-Math.min(1,-N.getY(ee)/16),1.6);O.set([pe,pe,pe],ee*3)}ft.setAttribute("color",new qt(O,3))}ft.rotateZ(Math.PI/2);const Bt=new Nt({color:"#ffc890",vertexColors:!0,transparent:!0,opacity:.05,blending:Ti,depthWrite:!1,side:cn,fog:!1}),Vt=new bt;Vt.position.y=Ne+$+.8;const At=new lt(ft,Bt),Cn=At.clone();Cn.rotation.y=Math.PI,Vt.add(At,Cn),le.add(Vt);const Sn=new vo("#ffa050",12,10,1.4);Sn.position.set(0,1.3,4.6),ie.add(Sn),i.add(ie),ie.updateMatrixWorld(!0);const li=new V;Ve.getWorldPosition(li);const F=le.userData,xe=[Ve,He,Vt].map(N=>[N,N.position.y]),ue=N=>F.rBot+(F.rTop-F.rBot)*N;function Qe(N){const O=.15+.85*Math.max(0,Math.min(1,N)),ee=F.body.geometry.attributes.position,pe=F.base;for(let te=0;te<ee.count;te++){const Ye=pe[te*3+1],We=Ye/F.len,dt=We*O,Pt=ue(dt)/ue(We);ee.setXYZ(te,(pe[te*3]-F.bend*We*We*F.len)*Pt+F.bend*dt*dt*F.len,dt*F.len,pe[te*3+2]*Pt)}ee.needsUpdate=!0,F.body.geometry.computeVertexNormals(),F.body.geometry.computeBoundingSphere();const ye=(O-1)*F.len,Pe=ue(O)/F.rTop,Te=F.bend*F.len*(O*O-1);for(const[te,Ye,We]of F.topParts)te.position.set(F.top.x+(Ye.x-F.top.x)*Pe+Te,Ye.y+ye,Ye.z*Pe),te.scale.set(We.x*Pe,We.y*Pe,We.z*Pe);for(const[te,Ye]of xe)te.position.y=Ye+ye;ie.updateMatrixWorld(!0),Ve.getWorldPosition(li)}const tt={tip:li,pos:new V(s.x,re,s.z),lights:Ir,flamePos(){return li.clone()},setLights(N){this.lights=N;const O=N/Ir;Qe(O),this.glow=O,Sn.intensity=3+9*O,Bt.opacity=.01+.04*O,_e.scale.y*=1+(1-O)*2.5}},Ce=Kn(42),Ze=[];for(let N=0;N<3e3&&Ze.length<(e.mobile?70:104);N++){const O=(Ce()-.5)*102,ee=(Ce()-.5)*102,pe=f(O,ee);if(pe<.75||_(O,ee)<3.2||!de(O,ee)||Xe.some(te=>Math.hypot(te.x-O,te.z-ee)<3.2)||Ze.some(te=>Math.hypot(te.x-O,te.z-ee)<2.4)||t.volcano&&Math.hypot(O-t.volcano.x,ee-t.volcano.z)<t.volcano.r)continue;const ye=pe<1.45?t.trees.beach:t.trees.inland;let Pe=Ce(),Te="bush";for(const[te,Ye]of Object.entries(ye)){if(Pe<Ye){Te=te;break}Pe-=Ye}Te==="palm"&&(Ce()<.5||_(O,ee)<4.6||Xe.some(te=>Math.hypot(te.x-O,te.z-ee)<4.8))||Ze.push({x:O,z:ee,y:pe,s:(Te==="bush"?.8:.75)+Ce()*.45,phase:Ce()*6.28,kind:Te})}if(t.trees.inland.bush){const N=Kn(303+t.seed),O=Ze.filter(ee=>ee.kind!=="bush"&&ee.y>=1);for(const ee of O){if(N()>(e.mobile?.6:.75))continue;const pe=1+Math.floor(N()*3);for(let ye=0;ye<pe;ye++){const Pe=N()*6.28,Te=1.3+N()*1,te=ee.x+Math.cos(Pe)*Te,Ye=ee.z+Math.sin(Pe)*Te,We=f(te,Ye);We<1||_(te,Ye)<3||!de(te,Ye)||Xe.some(dt=>Math.hypot(dt.x-te,dt.z-Ye)<3)||Ze.some(dt=>dt!==ee&&Math.hypot(dt.x-te,dt.z-Ye)<1.3)||Ze.push({x:te,z:Ye,y:We,s:.55+N()*.35,phase:N()*6.28,kind:"bush"})}}}const rt=f_(i,Ze,e,t),gt=new Yt,Ct=[];for(let N=0;N<1200&&Ct.length<(e.mobile?40:56);N++){const O=Ce()*Math.PI*2,ee=n(O)-3+Ce()*5.5,pe=Math.cos(O)*ee,ye=Math.sin(O)*ee;_(pe,ye)<3.4||f(pe,ye)<-1.2||Ct.some(Pe=>Math.hypot(Pe.x-pe,Pe.z-ye)<2.2)||Ct.push({x:pe,z:ye,s:.6+Ce()*1.2,r:Ce()*6})}for(const N of t.plateaus||[]){const O=Math.round(N.r*2*Math.PI/2.3);for(let ee=0;ee<O;ee++){const pe=ee/O*Math.PI*2+Ce()*.2,ye=N.r+Math.sin(pe*5+N.x)*.8+Math.sin(pe*11)*.3-.2,Pe=N.x+Math.cos(pe)*ye,Te=N.z+Math.sin(pe)*ye;t.waterfall&&Math.hypot(Pe-t.waterfall.lip[0],Te-t.waterfall.lip[1])<2.2||_(Pe,Te)<2.6||Ct.push({x:Pe,z:Te,s:1.3+Ce()*.9,r:Ce()*6,cliff:!0})}}[0,1,2].map(N=>z_(Kn(31+N*7+t.seed),t.rock[0],t.rock[1],N)).map((N,O)=>{const ee=Ct.filter((ye,Pe)=>Pe%3===O),pe=new bn(N,Me,Math.max(1,ee.length));return pe.count=ee.length,ee.forEach((ye,Pe)=>{gt.position.set(ye.x,f(ye.x,ye.z)-.2*ye.s,ye.z),gt.rotation.set(0,ye.r*2,0),gt.scale.set(ye.s*1.1,ye.s*.9,ye.s),gt.updateMatrix(),pe.setMatrixAt(Pe,gt.matrix)}),pe.castShadow=pe.receiveShadow=!0,i.add(pe),Lc(pe,"rock"),pe});const ni=e_(i,{heightAt:f,pathDist:_,plinths:Xe,paths:r,lighthouse:tt,landDist:u},e,Kn(99+t.seed),n,t),ci=S_(i,{heightAt:f,pathDist:_,paths:r,lighthouse:tt,islandEdge:n},e,t),P=[...Ze.map(N=>[N.x,N.z,1.3*N.s]),...Ct.map(N=>[N.x,N.z,N.s*1.6]),...Xe.map(N=>[N.x,N.z,1.9])],J=(N,O)=>{let ee=1;for(const[pe,ye,Pe]of P){const Te=(pe-N)**2+(ye-O)**2;Te<Pe*Pe&&(ee=Math.min(ee,.55+.45*Math.sqrt(Te)/Pe))}return ee},ae=p_(i,{heightAt:f,pathDist:_,plinths:Xe,lighthouse:tt,extrasBlock:ci.blocks,shadeAt:J},e,t,Kn(7+t.seed)),ce={palm:.9,round:1.45,bush:1,pine:1.35,dead:.6};E_(i,[...Ze.map(N=>({x:N.x,y:N.y,z:N.z,r:(ce[N.kind]??1)*N.s})),...Ct.map(N=>({x:N.x,y:f(N.x,N.z),z:N.z,r:N.s*(N.cliff?1.7:1.55)})).filter(N=>N.y>.05),...Xe.map(N=>({x:N.x,y:N.y0,z:N.z,r:1.95})),{x:s.x,y:re,z:s.z,r:4.8}]);const K=Float32Array.from(g),ze=[...Ct.map(N=>({x:N.x,z:N.z,r:N.s*.85})),...ni.obstacles];for(const N of ze){const O=N.r+1,ee=d*2/p,pe=Math.floor((N.x-O+d)/ee),ye=Math.ceil((N.x+O+d)/ee),Pe=Math.floor((N.z-O+d)/ee),Te=Math.ceil((N.z+O+d)/ee);for(let te=Math.max(0,Pe);te<=Math.min(p,Te);te++)for(let Ye=Math.max(0,pe);Ye<=Math.min(p,ye);Ye++){const We=-d+Ye*ee,dt=-d+te*ee,Pt=Math.max(0,Math.hypot(We-N.x,dt-N.z)-N.r);if(Pt>.9)continue;const It=te*(p+1)+Ye,Oi=.06-Pt*.35,Lt=1-Pt/.9;K[It]=Math.max(K[It],K[It]+(Oi-K[It])*Lt*Lt)}}if(t.waterfall&&t.waterfall._lvl!==void 0){const N=t.waterfall;Kh(i,{heightTex:Zh(K,p+1),ext:d,grid:p,quality:e,sunDir:new V(24,17,4),colors:t.water,level:N._lvl,size:9,maxDepth:.8,center:[(N.pool[0]+N.lip[0])/2,(N.pool[1]+N.lip[1])/2]})}const Ke=Kh(i,{heightTex:Zh(K,p+1),ext:d,grid:p,quality:e,sunDir:new V(24,17,4),colors:t.water}),it=[{x:s.x,z:s.z,r:3.5},...Xe.map(N=>({x:N.x,z:N.z,r:1.4})),...rt.colliders,...Ct.filter(N=>f(N.x,N.z)>-.45).map(N=>({x:N.x,z:N.z,r:N.s*.85})),...ni.colliders,...ci.colliders];return{def:t,paths:r,plinths:Xe,lighthouse:tt,heightAt:f,pathDist:_,slopeAt:C,isLand:y,isIce:S,landDist:u,isWalkable:(N,O)=>T(N,O)&&!ci.blocks(N,O),colliders:it,update:N=>{Ke.update(N),ni.update(N),ci.update(N),ae.update(N);const O=tt.glow??1,ee=.75+.25*Math.sin(N*1.3)+.1*Math.sin(N*7.1);Je.color.setRGB(1,.85,.75).multiplyScalar(O>0?(.7+1.5*O)*ee:.12),He.intensity=(8+40*O)*ee,Vt.rotation.y=N*.6,rt.update(N),ne(N)},terrain:Ue,extras:ci,grass:ae,cullFade:rt.cullFade,treeSpots:Ze}}const ao={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class js{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const F_=new lu(-1,1,1,-1,0,1);class k_ extends Ot{constructor(){super(),this.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new mt([0,2,0,0,2,0],2))}}const O_=new k_;class Oa{constructor(e){this._mesh=new lt(O_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,F_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Id extends js{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof sn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_i.clone(e.uniforms),this.material=new sn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Oa(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class lf extends js{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class B_ extends js{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class G_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ae);this._width=n.width,this._height=n.height,t=new Xn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:oi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Id(ao),this.copyPass.material.blending=wn,this.clock=new gd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}lf!==void 0&&(o instanceof lf?n=!0:o instanceof B_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class V_ extends js{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const ra={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ae},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new zt},cameraProjectionMatrixInverse:{value:new zt},cameraWorldMatrix:{value:new zt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new V(-1,-1,-1)},sceneBoxMax:{value:new V(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},oa={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Cl={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function H_(i=5){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=W_(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){const a=t[o],l=2*Math.PI*a/n,c=new V(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}const r=new Ua(s,e,e);return r.wrapS=zi,r.wrapT=zi,r.needsUpdate=!0,r}function W_(i){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0);let s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}const aa={defines:{SAMPLES:16,SAMPLE_VECTORS:Ud(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ae},cameraProjectionMatrixInverse:{value:new zt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Ud(i,e,t){const n=X_(i,e,t);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function X_(i,e,t){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new V(Math.cos(r),Math.sin(r),o))}return n}class q_{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,d=l-h,p=c-h,g=e-d,M=t-p;let m,f;g>M?(m=1,f=0):(m=0,f=1);const _=g-m+u,y=M-f+u,x=g-1+2*u,C=M-1+2*u,S=l&255,E=c&255,T=this.perm[S+this.perm[E]]%12,b=this.perm[S+m+this.perm[E+f]]%12,v=this.perm[S+1+this.perm[E+1]]%12;let A=.5-g*g-M*M;A<0?n=0:(A*=A,n=A*A*this.dot(this.grad3[T],g,M));let L=.5-_*_-y*y;L<0?s=0:(L*=L,s=L*L*this.dot(this.grad3[b],_,y));let z=.5-x*x-C*C;return z<0?r=0:(z*=z,r=z*z*this.dot(this.grad3[v],x,C)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a;const c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),d=Math.floor(n+c),p=1/6,g=(u+h+d)*p,M=u-g,m=h-g,f=d-g,_=e-M,y=t-m,x=n-f;let C,S,E,T,b,v;_>=y?y>=x?(C=1,S=0,E=0,T=1,b=1,v=0):_>=x?(C=1,S=0,E=0,T=1,b=0,v=1):(C=0,S=0,E=1,T=1,b=0,v=1):y<x?(C=0,S=0,E=1,T=0,b=1,v=1):_<x?(C=0,S=1,E=0,T=0,b=1,v=1):(C=0,S=1,E=0,T=1,b=1,v=0);const A=_-C+p,L=y-S+p,z=x-E+p,U=_-T+2*p,W=y-b+2*p,D=x-v+2*p,k=_-1+3*p,G=y-1+3*p,Y=x-1+3*p,Q=u&255,se=h&255,Ee=d&255,ke=this.perm[Q+this.perm[se+this.perm[Ee]]]%12,H=this.perm[Q+C+this.perm[se+S+this.perm[Ee+E]]]%12,Z=this.perm[Q+T+this.perm[se+b+this.perm[Ee+v]]]%12,he=this.perm[Q+1+this.perm[se+1+this.perm[Ee+1]]]%12;let oe=.6-_*_-y*y-x*x;oe<0?s=0:(oe*=oe,s=oe*oe*this.dot3(this.grad3[ke],_,y,x));let me=.6-A*A-L*L-z*z;me<0?r=0:(me*=me,r=me*me*this.dot3(this.grad3[H],A,L,z));let Le=.6-U*U-W*W-D*D;Le<0?o=0:(Le*=Le,o=Le*Le*this.dot3(this.grad3[Z],U,W,D));let Ue=.6-k*k-G*G-Y*Y;return Ue<0?a=0:(Ue*=Ue,a=Ue*Ue*this.dot3(this.grad3[he],k,G,Y)),32*(s+r+o+a)}noise4d(e,t,n,s){const r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,h,d,p,g;const M=(e+t+n+s)*l,m=Math.floor(e+M),f=Math.floor(t+M),_=Math.floor(n+M),y=Math.floor(s+M),x=(m+f+_+y)*c,C=m-x,S=f-x,E=_-x,T=y-x,b=e-C,v=t-S,A=n-E,L=s-T,z=b>v?32:0,U=b>A?16:0,W=v>A?8:0,D=b>L?4:0,k=v>L?2:0,G=A>L?1:0,Y=z+U+W+D+k+G,Q=o[Y][0]>=3?1:0,se=o[Y][1]>=3?1:0,Ee=o[Y][2]>=3?1:0,ke=o[Y][3]>=3?1:0,H=o[Y][0]>=2?1:0,Z=o[Y][1]>=2?1:0,he=o[Y][2]>=2?1:0,oe=o[Y][3]>=2?1:0,me=o[Y][0]>=1?1:0,Le=o[Y][1]>=1?1:0,Ue=o[Y][2]>=1?1:0,Xe=o[Y][3]>=1?1:0,de=b-Q+c,Me=v-se+c,B=A-Ee+c,$e=L-ke+c,be=b-H+2*c,Oe=v-Z+2*c,Ie=A-he+2*c,nt=L-oe+2*c,j=b-me+3*c,R=v-Le+3*c,w=A-Ue+3*c,X=L-Xe+3*c,ne=b-1+4*c,ie=v-1+4*c,re=A-1+4*c,Fe=L-1+4*c,Se=m&255,De=f&255,ot=_&255,we=y&255,je=a[Se+a[De+a[ot+a[we]]]]%32,at=a[Se+Q+a[De+se+a[ot+Ee+a[we+ke]]]]%32,ut=a[Se+H+a[De+Z+a[ot+he+a[we+oe]]]]%32,Je=a[Se+me+a[De+Le+a[ot+Ue+a[we+Xe]]]]%32,wt=a[Se+1+a[De+1+a[ot+1+a[we+1]]]]%32;let ht=.6-b*b-v*v-A*A-L*L;ht<0?u=0:(ht*=ht,u=ht*ht*this.dot4(r[je],b,v,A,L));let Et=.6-de*de-Me*Me-B*B-$e*$e;Et<0?h=0:(Et*=Et,h=Et*Et*this.dot4(r[at],de,Me,B,$e));let $=.6-be*be-Oe*Oe-Ie*Ie-nt*nt;$<0?d=0:($*=$,d=$*$*this.dot4(r[ut],be,Oe,Ie,nt));let Ne=.6-j*j-R*R-w*w-X*X;Ne<0?p=0:(Ne*=Ne,p=Ne*Ne*this.dot4(r[Je],j,R,w,X));let le=.6-ne*ne-ie*ie-re*re-Fe*Fe;return le<0?g=0:(le*=le,g=le*le*this.dot4(r[wt],ne,ie,re,Fe)),27*(u+h+d+p+g)}}class Pi extends js{constructor(e,t,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=H_(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Xn(this.width,this.height,{type:oi}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new sn({defines:Object.assign({},ra.defines),uniforms:_i.clone(ra.uniforms),vertexShader:ra.vertexShader,fragmentShader:ra.fragmentShader,blending:wn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new $1,this.normalMaterial.blending=wn,this.pdMaterial=new sn({defines:Object.assign({},aa.defines),uniforms:_i.clone(aa.uniforms),vertexShader:aa.vertexShader,fragmentShader:aa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new sn({defines:Object.assign({},oa.defines),uniforms:_i.clone(oa.uniforms),vertexShader:oa.vertexShader,fragmentShader:oa.fragmentShader,blending:wn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new sn({uniforms:_i.clone(ao.uniforms),vertexShader:ao.vertexShader,fragmentShader:ao.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Fl,blendDst:Jr,blendEquation:vi,blendSrcAlpha:Nl,blendDstAlpha:Jr,blendEquationAlpha:vi}),this.blendMaterial=new sn({uniforms:_i.clone(Cl.uniforms),vertexShader:Cl.vertexShader,fragmentShader:Cl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Pf,blendSrc:Fl,blendDst:Jr,blendEquation:vi,blendSrcAlpha:Nl,blendDstAlpha:Jr,blendEquationAlpha:vi}),this.fsQuad=new Oa(null),this.originalClearColor=new Re,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new uu,this.depthTexture.format=Gs,this.depthTexture.type=Bs,this.normalRenderTarget=new Xn(this.width,this.height,{minFilter:Tn,magFilter:Tn,type:oi,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ud(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Pi.OUTPUT.Off:break;case Pi.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=wn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Pi.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=wn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Pi.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=wn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Pi.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Pi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=wn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Pi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=wn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){const t=new q_,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}const r=new Ua(s,e,e,ri,Ni);return r.wrapS=zi,r.wrapT=zi,r.needsUpdate=!0,r}}Pi.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Y_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ur extends js{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ae(e.x,e.y):new Ae(256,256),this.clearColor=new Re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Xn(r,o,{type:oi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Xn(r,o,{type:oi});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new Xn(r,o,{type:oi});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=Y_;this.highPassUniforms=_i.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new sn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ae(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=ao;this.copyUniforms=_i.clone(u.uniforms),this.blendMaterial=new sn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ti,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.basic=new Nt,this.fsQuad=new Oa(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ae(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ur.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ur.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new sn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ae(.5,.5)},direction:{value:new Ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new sn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ur.BlurDirectionX=new Ae(1,0);Ur.BlurDirectionY=new Ae(0,1);const $_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class j_ extends js{constructor(){super();const e=$_;this.uniforms=_i.clone(e.uniforms),this.material=new Y1({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Oa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ut.getTransfer(this._outputColorSpace)===Gt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Lf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Df?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===If?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Kc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Uf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zf&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const K_={name:"WarmGrade",uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uTint:{value:new V(1,1,1)},uLift:{value:new V},uSat:{value:1.08}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uVignette, uSat;
    uniform vec3 uTint, uLift;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      c.rgb = mix(vec3(l), c.rgb, uSat);
      c.rgb *= uTint;                     // fargetone (dag: nøytral, skumring: varm)
      c.rgb += uLift * (1.0 - l);         // løft i skyggene (dag: kjølig blått)
      vec2 d = vUv - 0.5;
      c.rgb *= 1.0 - uVignette * dot(d, d) * 2.2;
      gl_FragColor = c;
    }`},Z_=new URLSearchParams(location.search).get("ao")==="1";function J_(i,e,t,n={}){const s=new G_(i,new Xn(1,1,{type:oi})),r=new V_(e,t),o=new Pi(e,t,1,1,void 0,{radius:.8,distanceExponent:1.3,thickness:1.4,scale:1.2,samples:12});o.blendIntensity=1;const a=new Ur(new Ae(256,256),.6,.55,1),l=new Id(K_);n.tint&&l.uniforms.uTint.value.set(...n.tint),n.lift&&l.uniforms.uLift.value.set(...n.lift),n.sat&&(l.uniforms.uSat.value=n.sat),l.uniforms.uVignette.value=n.vignette??.25;const c=new j_;for(const g of[r,o,a,l,c])s.addPass(g);let u="high",h=1,d=1;const p={composer:s,get level(){return u},setLevel(g){u=g,o.enabled=g==="high"&&Z_,a.strength=g==="high"?.6:.5;const M=g==="high"?4:0;for(const m of[s.renderTarget1,s.renderTarget2])m.samples!==M&&(m.samples=M,m.dispose());p.setSize(h,d)},setSize(g,M){h=g,d=M;const m=i.getPixelRatio();s.setPixelRatio(m),s.setSize(g,M);const f=u==="high"?2:4;a.resolution.set(g*m/f,M*m/f),a.setSize(g*m/f,M*m/f)},render(g){s.render(g)}};return p}function Q_(i,e,t,n,s,r=null){const{heightAt:o}=e,a=t.mobile?.5:1,l=new Set(n.life),c=new Yt,u=new Re,h=[],d=()=>{for(let g=0;g<50;g++){const M=(Math.random()-.5)*80,m=(Math.random()-.5)*80,f=o(M,m);if(f>.8)return{x:M,z:m,h:f}}return{x:0,z:0,h:1}};if(l.has("butterflies")){const g=Math.round(26*a),M=new Lr(.16,6,0,Math.PI);M.scale(1,1.3,1);const f=[-1,1].map(()=>new Xt({color:"#ffffff",side:cn})).map(x=>{const C=new bn(M,x,g);return i.add(C),C}),_=Array.from({length:g},(x,C)=>({...d(),a:Math.random()*6,sp:.6+Math.random()*.6,ph:Math.random()*6,home:null})),y=["#ffd84a","#ff9ad0","#9ad8ff","#ffffff","#ffa040"];_.forEach((x,C)=>{x.home={x:x.x,z:x.z},f.forEach(S=>S.setColorAt(C,u.set(y[C%y.length])))}),f.forEach(x=>x.instanceColor.needsUpdate=!0),h.push((x,C)=>{_.forEach((S,E)=>{S.a+=Math.sin(C*.7+S.ph)*1.6*x,S.x+=Math.cos(S.a)*S.sp*x,S.z+=Math.sin(S.a)*S.sp*x,Math.hypot(S.x-S.home.x,S.z-S.home.z)>5&&(S.a=Math.atan2(S.home.z-S.z,S.home.x-S.x));const T=o(S.x,S.z)+.6+Math.sin(C*2+S.ph)*.25,b=Math.sin(C*18+S.ph)*1.1;f.forEach((v,A)=>{c.position.set(S.x,T,S.z),c.rotation.set(0,-S.a+Math.PI/2,0),c.rotateZ((A?1:-1)*(.3+b*.5)),c.rotateX(-Math.PI/2),c.scale.set(A?1:-1,1,1),c.updateMatrix(),v.setMatrixAt(E,c.matrix)})}),f.forEach(S=>S.instanceMatrix.needsUpdate=!0)})}if(l.has("birds")){const M=new Ot;M.setAttribute("position",new mt([-.7,.12,.1,0,0,-.15,0,0,.15,0,0,-.15,.7,.12,.1,0,0,.15],3)),M.computeVertexNormals();const m=new bn(M,new Xt({color:"#f4f4f0",side:cn}),7);m.castShadow=!0,i.add(m);const f=Array.from({length:7},(_,y)=>({cx:(Math.random()-.5)*50,cz:(Math.random()-.5)*50,r:8+Math.random()*10,y:9+Math.random()*4,sp:.15+Math.random()*.1,ph:y}));h.push((_,y)=>{f.forEach((x,C)=>{const S=y*x.sp+x.ph;c.position.set(x.cx+Math.cos(S)*x.r,x.y+Math.sin(y*.7+C)*.4,x.cz+Math.sin(S)*x.r),c.rotation.set(0,-S,Math.sin(y*.5+C)*.15);const E=1+Math.sin(y*6+C)*.35*(Math.sin(y*.4+C)>.3?1:.1),T=r?Mt.smoothstep(c.position.distanceTo(r.position),3,7):1;c.scale.set(1.4*T,E*1.4*T,1.4*T),c.updateMatrix(),m.setMatrixAt(C,c.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(l.has("leaves")){const g=Math.round(60*a),M=new ai(.16,.1),m=new bn(M,new Xt({color:"#ffffff",side:cn}),g);i.add(m);const f=Array.from({length:g},(_,y)=>({...d(),ph:Math.random()*6,sp:1+Math.random()*1.5}));f.forEach((_,y)=>m.setColorAt(y,u.set(["#8fbf4a","#c8b04a","#6a9a3a","#d89a3a"][y%4]))),m.instanceColor.needsUpdate=!0,h.push((_,y)=>{f.forEach((x,C)=>{x.x+=x.sp*_,x.z+=Math.sin(y*.8+x.ph)*.6*_,x.x>45&&Object.assign(x,d(),{x:-45});const S=Math.max(o(x.x,x.z),.1)+.3+Math.abs(Math.sin(y*1.3+x.ph))*.9;c.position.set(x.x,S,x.z),c.rotation.set(y*3+x.ph,y*2+x.ph,y*1.5),c.scale.setScalar(1),c.updateMatrix(),m.setMatrixAt(C,c.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(l.has("fireflies")&&s==="skumring"){const g=Math.round(120*a),M=new Float32Array(g*3),m=new Float32Array(g*3),f=Array.from({length:g},()=>({...d(),ph:Math.random()*6})),_=new Ot;_.setAttribute("position",new qt(M,3)),_.setAttribute("color",new qt(m,3));const y=document.createElement("canvas");y.width=y.height=32;const x=y.getContext("2d"),C=x.createRadialGradient(16,16,0,16,16,16);C.addColorStop(0,"rgba(255,255,255,1)"),C.addColorStop(1,"rgba(255,255,255,0)"),x.fillStyle=C,x.fillRect(0,0,32,32);const S=new fu(_,new za({size:.35,map:new wi(y),vertexColors:!0,transparent:!0,blending:Ti,depthWrite:!1}));S.frustumCulled=!1,i.add(S),h.push((E,T)=>{f.forEach((b,v)=>{M[v*3]=b.x+Math.sin(T*.4+b.ph)*1.2,M[v*3+1]=b.h+.5+Math.sin(T*.9+b.ph*2)*.4,M[v*3+2]=b.z+Math.cos(T*.35+b.ph)*1.2;const A=Math.max(0,Math.sin(T*1.7+b.ph*3))**3*2.5;m[v*3]=1*A,m[v*3+1]=.9*A,m[v*3+2]=.35*A}),_.attributes.position.needsUpdate=!0,_.attributes.color.needsUpdate=!0})}let p=0;return{update(g){const M=Math.min(.05,Math.max(0,g-p));p=g;for(const m of h)m(M,g)}}}function eM(i,{cell:e=.75,ext:t=68}={}){const n=Math.ceil(t*2/e)+1,s=new Float64Array(n*n),r=new Float32Array(n*n),o=new Float32Array(n*n),a=i.lighthouse.pos,l=(E,T)=>[Math.round((E+t)/e),Math.round((T+t)/e)],c=(E,T)=>[-t+E*e,-t+T*e];let u=()=>!1;function h(){for(let E=0;E<n;E++)for(let T=0;T<n;T++){const[b,v]=c(T,E),A=i.heightAt(b,v),L=E*n+T,z=Math.hypot(b-a.x,v-a.z);let U=1.8;A<-.5||i.slopeAt(b,v)>1.1||i.extras.blocks(b,v)||u(b,v)||z<3.2?U=1/0:i.pathDist(b,v)<1.6?U=.2:A<.05&&(U=2.6),r[L]=U}}function d(){s.fill(1/0),o.fill(0);const E=[],T=(A,L)=>{E.push([A,L]);let z=E.length-1;for(;z>0;){const U=z-1>>1;if(E[U][0]<=E[z][0])break;[E[U],E[z]]=[E[z],E[U]],z=U}},b=()=>{const A=E[0],L=E.pop();if(E.length){E[0]=L;let z=0;for(;;){const U=2*z+1,W=U+1;let D=z;if(U<E.length&&E[U][0]<E[D][0]&&(D=U),W<E.length&&E[W][0]<E[D][0]&&(D=W),D===z)break;[E[D],E[z]]=[E[z],E[D]],z=D}}return A};for(let A=0;A<n;A++)for(let L=0;L<n;L++){const[z,U]=c(L,A),W=Math.hypot(z-a.x,U-a.z);W>=3.2&&W<4.2&&r[A*n+L]<1/0&&(s[A*n+L]=0,T(0,A*n+L))}const v=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;E.length;){const[A,L]=b();if(A>s[L])continue;const z=L%n,U=L/n|0;for(const[W,D,k]of v){const G=z+W,Y=U+D;if(G<0||Y<0||G>=n||Y>=n)continue;const Q=Y*n+G,se=r[Q];if(se===1/0)continue;const Ee=A+k*e*(se+r[L])*.5;Ee<s[Q]&&(s[Q]=Ee,o[Q]=o[L]+k*e,T(Ee,Q))}}}const p=(E,T)=>{const[b,v]=l(E,T);return b<0||v<0||b>=n||v>=n?1/0:s[v*n+b]};function g(E,T){const[b,v]=l(E,T);let A=p(E,T),L=0,z=0;for(let W=-1;W<=1;W++)for(let D=-1;D<=1;D++){if(!D&&!W)continue;const k=b+D,G=v+W;if(k<0||G<0||k>=n||G>=n)continue;const Y=s[G*n+k];Y<A&&(A=Y,L=D,z=W)}const U=Math.hypot(L,z)||1;return[L/U,z/U,A]}const M=(E,T)=>{const[b,v]=l(E,T);return b<0||v<0||b>=n||v>=n?-1:v*n+b},m=(E,T)=>{const b=M(E,T);return b<0||s[b]===1/0?0:o[b]};function f(){const E=[];for(const T of i.paths){const b=T.samples.find(v=>i.heightAt(v.x,v.z)>-.4&&m(v.x,v.z)>0);b&&E.push([b.x,b.z])}return E}function _(E,T=22,{near:b=8,minFrac:v=.6}={}){const A=f(),L=Math.max(0,...A.map(([D,k])=>m(D,k))),z=(D,k)=>{const G=i.heightAt(D,k);return G>-.4&&G<.15&&[[4,0],[-4,0],[0,4],[0,-4],[3,3],[-3,3],[3,-3],[-3,-3]].some(([Y,Q])=>i.heightAt(D+Y,k+Q)<-.9)},U=A.map(([D,k])=>{const G=[],Y=[],Q=Math.ceil(b/e),[se,Ee]=l(D,k);for(let H=-Q;H<=Q;H++)for(let Z=-Q;Z<=Q;Z++){const[he,oe]=c(se+Z,Ee+H);Math.hypot(he-D,oe-k)>b||m(he,oe)<v*L||(z(he,oe)?G.push([he,oe]):i.heightAt(he,oe)>.3&&i.slopeAt(he,oe)<.6&&Y.push([he,oe]))}return(G.length?G:Y).sort(()=>Math.random()-.5)}).filter(D=>D.length).sort(()=>Math.random()-.5),W=[];for(let D=0;W.length<E&&D<4;D++){for(const k of U){const G=k.find(Y=>W.every(Q=>Math.hypot(Q[0]-Y[0],Q[1]-Y[1])>T));if(G&&W.push(G),W.length>=E)break}T=Math.min(T,6)}return W}let y=null;function x(E,T){if(!y){y=new Float32Array(n*n);for(let D=0;D<n;D++)for(let k=0;k<n;k++){const[G,Y]=c(k,D);y[D*n+k]=i.isWalkable(G,Y)?i.heightAt(G,Y)<.05?1.6:1:1/0}}const b=new Float64Array(n*n).fill(1/0),v=[],A=(D,k)=>{v.push([D,k]);let G=v.length-1;for(;G>0;){const Y=G-1>>1;if(v[Y][0]<=v[G][0])break;[v[Y],v[G]]=[v[G],v[Y]],G=Y}},L=()=>{const D=v[0],k=v.pop();if(v.length){v[0]=k;let G=0;for(;;){const Y=2*G+1,Q=Y+1;let se=G;if(Y<v.length&&v[Y][0]<v[se][0]&&(se=Y),Q<v.length&&v[Q][0]<v[se][0]&&(se=Q),se===G)break;[v[se],v[G]]=[v[G],v[se]],G=se}}return D},z=M(E,T);if(z<0)return null;b[z]=0,A(0,z);const U=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;v.length;){const[D,k]=L();if(D>b[k])continue;const G=k%n,Y=k/n|0;for(const[Q,se,Ee]of U){const ke=G+Q,H=Y+se;if(ke<0||H<0||ke>=n||H>=n)continue;const Z=H*n+ke,he=y[Z];if(he===1/0)continue;const oe=D+Ee*e*he;oe<b[Z]&&(b[Z]=oe,A(oe,Z))}}const W=(D,k)=>{const G=M(D,k);return G<0?1/0:b[G]};return{at:W,dir(D,k){const[G,Y]=l(D,k);let Q=W(D,k),se=0,Ee=0;for(let H=-1;H<=1;H++)for(let Z=-1;Z<=1;Z++){if(!Z&&!H)continue;const he=G+Z,oe=Y+H;he<0||oe<0||he>=n||oe>=n||b[oe*n+he]<Q&&(Q=b[oe*n+he],se=Z,Ee=H)}const ke=Math.hypot(se,Ee)||1;return[se/ke,Ee/ke]}}}const C=()=>{let E=0;for(const T of s)T<1/0&&T>E&&(E=T);return E},S=()=>{h(),d()};return S(),{at:p,dir:g,coastPoints:_,roadEnds:f,routeLen:m,walkField:x,rebuild:S,setBlock(E){u=E,S()},maxDist:C(),N:n,cell:e}}function zd(i,e=700,{blending:t=Ti,size:n=.55,opacity:s=1,fadeTo:r=null}={}){const o=new Re(r||"#000000"),a=new Float32Array(e*3),l=new Float32Array(e*3),c=new Float32Array(e*3),u=new Float32Array(e*3),h=new Float32Array(e),d=new Float32Array(e),p=new Float32Array(e);let g=0;const M=new Ot;M.setAttribute("position",new qt(a,3)),M.setAttribute("color",new qt(l,3));const m=document.createElement("canvas");m.width=m.height=64;const f=m.getContext("2d"),_=f.createRadialGradient(32,32,0,32,32,32);_.addColorStop(0,"rgba(255,255,255,1)"),_.addColorStop(.4,"rgba(255,255,255,0.6)"),_.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=_,f.fillRect(0,0,64,64);const y=new za({size:n,map:new wi(m),vertexColors:!0,transparent:!0,opacity:s,blending:t,depthWrite:!1}),x=new fu(M,y);x.frustumCulled=!1,i.add(x);for(let T=0;T<e;T++)a[T*3+1]=-999;const C=new Re;function S(T,b,v,{n:A=10,color:L="#ffb347",speed:z=4,up:U=3,life:W=.7,gravity:D=9,spread:k=1}={}){C.set(L);for(let G=0;G<A;G++){const Y=g;g=(g+1)%e,a[Y*3]=T,a[Y*3+1]=b,a[Y*3+2]=v;const Q=Math.random()*Math.PI*2,se=z*(.4+Math.random()*.6)*k;c[Y*3]=Math.cos(Q)*se,c[Y*3+1]=U*(.5+Math.random()),c[Y*3+2]=Math.sin(Q)*se,u[Y*3]=C.r,u[Y*3+1]=C.g,u[Y*3+2]=C.b,d[Y]=h[Y]=W*(.6+Math.random()*.6),p[Y]=D}}function E(T){for(let b=0;b<e;b++){if(h[b]<=0)continue;if(h[b]-=T,h[b]<=0){a[b*3+1]=-999,l[b*3]=l[b*3+1]=l[b*3+2]=0;continue}c[b*3+1]-=p[b]*T,a[b*3]+=c[b*3]*T,a[b*3+1]+=c[b*3+1]*T,a[b*3+2]+=c[b*3+2]*T;const v=h[b]/d[b];l[b*3]=u[b*3]*v+o.r*(1-v),l[b*3+1]=u[b*3+1]*v+o.g*(1-v),l[b*3+2]=u[b*3+2]*v+o.b*(1-v)}M.attributes.position.needsUpdate=!0,M.attributes.color.needsUpdate=!0}return{emit:S,update:E}}const tM={xbox:{build:"Ⓐ",carry:"Ⓑ",next:"Ⓨ",sel:"LB/RB",pause:"☰",restart:"View",name:"Xbox"},ps:{build:"✕",carry:"○",next:"△",sel:"L1/R1",pause:"Options",restart:"Select",name:"PlayStation"},ps3:{build:"✕",carry:"○",next:"△",sel:"L1/R1",pause:"Start",restart:"Select",name:"PlayStation 3"},switch:{build:"A",carry:"B",next:"X",sel:"L/R",pause:"+",restart:"−",name:"Switch"}},nM={build:"B",carry:"E",next:"N",sel:"Z/X",pause:"Esc",restart:"R",name:"Tastatur"},iM={build:"Bygg",carry:"Bær",next:"Neste bølge",sel:"",pause:"⏸",restart:"⏸ → ↺",name:"Berøring"};function sM(i=""){const e=i.toLowerCase();return/nintendo|pro controller|joy-con|joycon|057e/.test(e)?"switch":/0268|playstation\(r\)\s*3|ps3/.test(e)?"ps3":/playstation|dualshock|dualsense|wireless controller|054c|sony/.test(e)?"ps":"xbox"}function rM(i=""){const e=i.toLowerCase();return/0268|playstation\(r\)\s*3|ps3/.test(e)?"PS3 (DualShock 3)":/0ce6|0df2|dualsense/.test(e)?"PS5 (DualSense)":/05c4|09cc|0ba0|dualshock\s*4/.test(e)?"PS4 (DualShock 4)":/playstation|wireless controller|054c|sony/.test(e)?"PlayStation":/xbox|xinput|045e/.test(e)?"Xbox":/nintendo|pro controller|057e/.test(e)?"Switch Pro":/joy-con|joycon/.test(e)?"Joy-Con":"Spillkontroll"}const hs={evdev:{btn:[0,1,3,2,4,5,6,7,8,9,11,12],home:10,hat:[6,7],look:3},ds3:{btn:[0,1,3,2,4,5,6,7,8,9,11,12],home:10,dpad:[13,14,15,16],look:3},ds3old:{btn:[14,13,15,12,10,11,8,9,0,3,1,2],home:16,dpad:[4,6,7,5],look:2},dinput:{btn:[0,1,2,3,4,5,6,7,8,9,10,11],home:12,hat9:!0,look:2}};function oM(i,e=[]){return i.mapping==="standard"?null:/0268|playstation\(r\)\s*3/i.test(i.id)?i.axes.length>8?hs.ds3old:hs.ds3:Math.abs(e[9]??0)>1.1?hs.dinput:i.axes.length>=8?hs.evdev:hs.dinput}function aM(i){if(i===void 0||i>1.1||i<-1.1)return[!1,!1,!1,!1];const e=Math.round((i+1)*3.5)%8;return[e===7||e<=1,e>=3&&e<=5,e>=5&&e<=7,e>=1&&e<=3]}function lM(i,e=[]){const t=i.buttons.map(a=>!!a&&(a.pressed||a.value>.5)),n=oM(i,e);if(!n)return{down:t,axes:[i.axes[0]||0,i.axes[1]||0,i.axes[2]||0,i.axes[3]||0],layout:"standard"};const s=n.btn.map(a=>!!t[a]);let r=[!1,!1,!1,!1];if(n.dpad)r=n.dpad.map(a=>!!t[a]);else if(n.hat&&i.axes.length>n.hat[1]){const a=i.axes[n.hat[0]],l=i.axes[n.hat[1]];r=[l<-.5,l>.5,a<-.5,a>.5]}else n.hat9&&(r=aM(i.axes[9]));s.push(...r,!!t[n.home]);const o=a=>Math.abs(e[a]??0)>.5?0:i.axes[a]||0;return{down:s,axes:[o(0),o(1),o(n.look),o(n.look+1)],layout:n===hs.evdev?"evdev":n===hs.ds3?"ds3":n===hs.ds3old?"ds3old":"dinput"}}function cM(i){const e=i==="switch";return{build:e?1:0,carry:e?0:1,next:3,prev:4,nextSel:5,zoomOut:6,zoomIn:7,pause:9,back:8}}function uM(i){const e=new Set,t={move:{x:0,z:0},look:0,lookDelta:0,zoom:1,pressed:new Set,rollMode:!1,clicks:[],device:matchMedia("(pointer: coarse)").matches?"touch":"kb",padKind:"xbox",padId:""},n=v=>t.pressed.add(v),s=v=>{t.device=v};addEventListener("keydown",v=>{if(s("kb"),(v.code==="Space"||v.code.startsWith("Arrow")||v.code==="Tab")&&v.preventDefault(),v.repeat)return;if(t.rollMode){const L={ArrowUp:"rU",KeyW:"rU",ArrowRight:"rR",KeyD:"rR",ArrowDown:"rD",KeyS:"rD",ArrowLeft:"rL",KeyA:"rL",Escape:"rollExit",KeyQ:"rollExit"}[v.code];if(L){n(L);return}}e.add(v.code);const A={KeyE:"carry",Space:"carry",KeyB:"build",Digit1:"b1",Digit2:"b2",Digit3:"b3",Digit4:"b4",Digit5:"b5",Digit6:"b6",Digit7:"b7",Numpad1:"b1",Numpad2:"b2",Numpad3:"b3",Numpad4:"b4",Numpad5:"b5",Numpad6:"b6",Numpad7:"b7",KeyZ:"selPrev",KeyX:"selNext",KeyQ:"selPrev",KeyR:"restart",KeyN:"next",Enter:"next",KeyF:"fps",KeyM:"music",Escape:"pause",KeyP:"pause"};A[v.code]&&n(A[v.code])}),addEventListener("keyup",v=>e.delete(v.code)),addEventListener("blur",()=>e.clear()),i.addEventListener("wheel",v=>{v.preventDefault(),s("kb"),t.zoom=la(t.zoom*(v.deltaY>0?1.08:1/1.08),.55,4.5)},{passive:!1}),i.addEventListener("contextmenu",v=>v.preventDefault());const r=new Map;let o=0,a=1,l=null;const c=v=>({x:v.clientX/innerWidth*2-1,y:-(v.clientY/innerHeight)*2+1});i.addEventListener("pointerdown",v=>{if(s(v.pointerType==="touch"?"touch":"kb"),v.pointerType==="mouse"&&v.button===2){l={x:v.clientX},i.setPointerCapture(v.pointerId);return}v.pointerType==="mouse"&&v.button!==0||(r.set(v.pointerId,{e:v,t:performance.now(),x0:v.clientX,y0:v.clientY}),r.size===2&&(o=cf(r),a=t.zoom))}),i.addEventListener("pointermove",v=>{if(l){t.lookDelta+=(v.clientX-l.x)*.008,l.x=v.clientX;return}const A=r.get(v.pointerId);A&&(A.e=v,r.size===2&&o>0&&(t.zoom=la(a*(o/cf(r)),.55,4.5)))});const u=v=>{if(l&&v.button===2){l=null;return}const A=r.get(v.pointerId);A&&r.size===1&&o===0&&Math.hypot(v.clientX-A.x0,v.clientY-A.y0)<12&&t.clicks.push(c(v)),r.delete(v.pointerId),r.size<2&&(o=0)};i.addEventListener("pointerup",u),i.addEventListener("pointercancel",v=>{r.delete(v.pointerId),l=null,o=0});const h=document.getElementById("stick"),d=document.getElementById("knob"),p={x:0,z:0};let g=null;const M=v=>{const A=h.getBoundingClientRect();let L=v.clientX-(A.left+A.width/2),z=v.clientY-(A.top+A.height/2);const U=A.width/2,W=Math.hypot(L,z);W>U&&(L*=U/W,z*=U/W),d.style.transform=`translate(${L}px, ${z}px)`;const D=W/U<.15?0:1;p.x=L/U*D,p.z=z/U*D};h.addEventListener("pointerdown",v=>{s("touch"),g=v.pointerId,h.setPointerCapture(v.pointerId),M(v)}),h.addEventListener("pointermove",v=>{v.pointerId===g&&M(v)});const m=v=>{v.pointerId===g&&(g=null,p.x=p.z=0,d.style.transform="")};h.addEventListener("pointerup",m),h.addEventListener("pointercancel",m);const f=(v,A)=>v.addEventListener("pointerdown",L=>{L.preventDefault(),L.stopPropagation(),L.pointerType==="touch"&&s("touch"),n(A)});f(document.getElementById("btn-build"),"build"),f(document.getElementById("btn-carry"),"carry"),f(document.getElementById("btn-next"),"next"),f(document.getElementById("btn-pause"),"pause"),document.querySelectorAll("#build-panel button").forEach((v,A)=>f(v,"b"+(A+1))),document.querySelectorAll("#rollpad [data-r]").forEach(v=>f(v,v.dataset.r)),f(document.getElementById("btn-rollexit"),"rollExit");let _=[],y=null,x={dir:null,t:0,rep:0},C=0,S=0;t.padSeen=!1,t.onPad=null;const E=v=>{var A;y=v?v.axes.slice():null,_=[],v&&(t.padId=v.id,t.padKind=sM(v.id),t.padSeen=!0,(A=t.onPad)==null||A.call(t,"connect",v.id))};addEventListener("gamepadconnected",v=>{v.gamepad.id!==t.padId&&E(v.gamepad)}),addEventListener("gamepaddisconnected",v=>{var A;v.gamepad.id===t.padId&&(t.padId="",y=null,(A=t.onPad)==null||A.call(t,"disconnect",v.gamepad.id),t.device==="pad"&&(t.device=matchMedia("(pointer: coarse)").matches?"touch":"kb"))});let T=null;function b(v){var he,oe;let A=[];try{A=navigator.getGamepads?[...navigator.getGamepads()]:[]}catch{A=[]}const L=A.find(me=>me&&me.connected&&me.id===t.padId)||A.find(me=>me&&me.connected);if(T=L||null,!L)return null;(L.id!==t.padId||!y)&&E(L);const z=cM(t.padKind),{down:U,axes:W}=lM(L,y),D=_,k=me=>U[me]&&!D[me],G=me=>Math.abs(me)<.2?0:(me-Math.sign(me)*.2)/.8;let Y=G(W[0]),Q=G(W[1]);const se=U[14]?-1:U[15]?1:0,Ee=U[12]?-1:U[13]?1:0;se&&(Y=se),Ee&&(Q=Ee);const ke=G(W[2]);if((Y||Q||ke||U.some(Boolean))&&s("pad"),_=U,(he=t.menu)==null?void 0:he.root()){const me=Ee<0||W[1]<-.6?"up":Ee>0||W[1]>.6?"down":se<0||W[0]<-.6?"left":se>0||W[0]>.6?"right":null;return me!==x.dir?(x={dir:me,t:0,rep:0},me&&t.menu.move(me)):me&&(x.t+=v,x.t>.4+x.rep*.15&&(x.rep++,t.menu.move(me))),k(z.build)&&t.menu.ok(),k(z.carry)&&t.menu.back(),k(z.pause)&&n("pause"),k(z.back)&&n("restart"),{x:0,z:0,look:0,zoomIn:!1,zoomOut:!1}}return x.dir=null,t.rollMode?(k(12)&&n("rU"),k(15)&&n("rR"),k(13)&&n("rD"),k(14)&&n("rL"),k(z.carry)&&n("rollExit"),S=Math.hypot(W[0],W[1])>.6?S+v:0,S>=.3&&(S=0,n("rollExit")),k(z.pause)&&n("pause"),{x:0,z:0,look:ke,zoomIn:U[z.zoomIn],zoomOut:U[z.zoomOut]}):(S=0,(oe=t.panelOpen)!=null&&oe.call(t)&&se?(k(14)&&n("selPrev"),k(15)&&n("selNext"),C+=v,C<.25&&!G(W[0])&&(Y=0)):C=0,k(z.build)&&n("build"),k(z.carry)&&n("carry"),k(z.next)&&n("next"),k(z.prev)&&n("selPrev"),k(z.nextSel)&&n("selNext"),k(z.pause)&&n("pause"),k(z.back)&&n("restart"),k(2)&&t.padKind!=="switch"&&n("next"),{x:Y,z:Q,look:ke,zoomIn:U[z.zoomIn],zoomOut:U[z.zoomOut]})}return t.rumble=(v=200,A=.6)=>{var L,z,U,W;if(!(!T||t.device!=="pad"))try{(L=T.vibrationActuator)!=null&&L.playEffect?T.vibrationActuator.playEffect("dual-rumble",{duration:v,strongMagnitude:A,weakMagnitude:A/2}):(W=(U=(z=T.hapticActuators)==null?void 0:z[0])==null?void 0:U.pulse)==null||W.call(U,A,v)}catch{}},t.update=v=>{let A=0,L=0;(e.has("KeyA")||e.has("ArrowLeft"))&&(A-=1),(e.has("KeyD")||e.has("ArrowRight"))&&(A+=1),(e.has("KeyW")||e.has("ArrowUp"))&&(L-=1),(e.has("KeyS")||e.has("ArrowDown"))&&(L+=1);const z=b(v);z&&(z.x||z.z)&&(A=z.x,L=z.z),(p.x||p.z)&&(A=p.x,L=p.z);const U=Math.hypot(A,L);U>1&&(A/=U,L/=U),t.move.x=A,t.move.z=L,t.look=t.lookDelta+(z?z.look*2.2*v:0),t.lookDelta=0,z!=null&&z.zoomIn&&(t.zoom=la(t.zoom/(1+v*1.2),.55,4.5)),z!=null&&z.zoomOut&&(t.zoom=la(t.zoom*(1+v*1.2),.55,4.5))},t.labels=()=>t.device==="pad"?tM[t.padKind]:t.device==="touch"?iM:nM,t.consume=v=>t.pressed.delete(v),t.clear=()=>{t.pressed.clear(),t.clicks.length=0},t}const la=(i,e,t)=>Math.max(e,Math.min(t,i));function cf(i){const[e,t]=[...i.values()].map(n=>n.e);return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)||1}const si=i=>document.getElementById(i),hM=["btn-start","btn-again","btn-yes","btn-resume","btn-portrait"];function fM(i){let e=null;const t=u=>u&&!u.classList.contains("hidden")&&getComputedStyle(u).display!=="none";function n(){return t(si("rotate"))?si("rotate"):t(si("pause"))?t(si("confirm"))?si("confirm"):si("pause"):t(si("overlay"))?si("overlay"):null}const s=u=>[...u.querySelectorAll("button, input[type=range]")].filter(h=>!h.disabled&&h.offsetParent!==null&&!h.closest(".hidden")&&(u.id==="confirm"||!h.closest("#confirm")));function r(u){var h;e&&e!==u&&e.classList.remove("pad-focus"),e=u,u&&(i.device==="pad"&&u.classList.add("pad-focus"),(h=u.scrollIntoView)==null||h.call(u,{block:"nearest"}))}function o(){const u=n();if(!u)return e&&(e.classList.remove("pad-focus"),e=null),null;const h=s(u);return(!e||!h.includes(e))&&r(hM.map(d=>h.find(p=>p.id===d)).find(Boolean)||h[0]||null),e&&e.classList.toggle("pad-focus",i.device==="pad"),u}function a(u){const h=o();if(!h||!e)return;if(e.type==="range"&&(u==="left"||u==="right")){e.value=String(Math.max(0,Math.min(100,+e.value+(u==="left"?-10:10)))),e.dispatchEvent(new Event("input",{bubbles:!0}));return}const d=e.getBoundingClientRect(),p=d.left+d.width/2,g=d.top+d.height/2,[M,m]={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]}[u];let f=null,_=1/0,y=!1;for(const x of s(h)){if(x===e)continue;const C=x.getBoundingClientRect(),S=C.left+C.width/2-p,E=C.top+C.height/2-g,T=S*M+E*m,b=Math.abs(S*m-E*M);if(T<=4)continue;const v=b<=T,A=T+b*2;(v&&!y||v===y&&A<_)&&(_=A,f=x,y=v)}f&&r(f)}function l(){!o()||!e||e.type==="range"||e.click()}function c(){const u=o();u&&(u.id==="confirm"?si("btn-no").click():u.id==="pause"&&(t(si("lex"))?si("lex").classList.add("hidden"):si("btn-resume").click()))}return{root:()=>o(),move:a,ok:l,back:c,sync:o,get focused(){return e}}}let Zt=null,br=null,_o=null;function dM(){if(Zt){Zt.resume();return}const i=window.AudioContext||window.webkitAudioContext;if(!i)return;Zt=new i,br=Zt.createGain(),br.gain.value=.5,br.connect(Zt.destination),_o=Zt.createBuffer(1,Zt.sampleRate*2,Zt.sampleRate);const e=_o.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1;pM()}const Nd=()=>Zt?{ctx:Zt,noiseBuf:_o}:null;function tn(i,e,{type:t="sine",vol:n=.2,slide:s=0,delay:r=0}={}){if(!Zt)return;const o=Zt.currentTime+r,a=Zt.createOscillator(),l=Zt.createGain();a.type=t,a.frequency.setValueAtTime(i,o),s&&a.frequency.exponentialRampToValueAtTime(Math.max(30,i+s),o+e),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(n,o+.01),l.gain.exponentialRampToValueAtTime(1e-4,o+e),a.connect(l).connect(br),a.start(o),a.stop(o+e+.02)}function Xi(i,{vol:e=.3,freq:t=800,q:n=.7,delay:s=0}={}){if(!Zt)return;const r=Zt.currentTime+s,o=Zt.createBufferSource();o.buffer=_o;const a=Zt.createBiquadFilter();a.type="lowpass",a.frequency.value=t,a.Q.value=n;const l=Zt.createGain();l.gain.setValueAtTime(e,r),l.gain.exponentialRampToValueAtTime(1e-4,r+i),o.connect(a).connect(l).connect(br),o.start(r,Math.random()),o.stop(r+i+.02)}function pM(){const i=Zt.createBufferSource();i.buffer=_o,i.loop=!0;const e=Zt.createBiquadFilter();e.type="lowpass",e.frequency.value=420;const t=Zt.createGain();t.gain.value=.035;const n=Zt.createOscillator(),s=Zt.createGain();n.frequency.value=.12,s.gain.value=.03,n.connect(s).connect(t.gain),i.connect(e).connect(t).connect(br),i.start(),n.start()}let uf=0;const Dt={pickup(){if(!Zt)return;const i=Zt.currentTime,e=i-uf<.4?1.12:1;uf=i,tn(880*e+Math.random()*60,.12,{type:"triangle",vol:.12}),tn(1320*e,.1,{type:"sine",vol:.06,delay:.04})},puff(){Xi(.18,{vol:.07,freq:600,q:.3}),tn(240,.12,{vol:.04,slide:-60})},crunch(){for(let i=0;i<4;i++)Xi(.05,{vol:.1,freq:3500,delay:i*.03});tn(130,.18,{vol:.08,slide:-40})},skank(){[[392,494,587],[349,440,523]][Math.random()<.5?0:1].forEach(i=>tn(i,.11,{type:"square",vol:.025})),tn(98,.3,{vol:.08})},chill(){tn(330,.5,{type:"sine",vol:.07,slide:160}),tn(495,.45,{type:"triangle",vol:.04,slide:120,delay:.08})},shoot(){tn(520,.07,{type:"square",vol:.03,slide:-300})},mortar(){Xi(.12,{vol:.12,freq:500}),tn(160,.15,{type:"sine",vol:.12,slide:-80})},boom(){Xi(.45,{vol:.28,freq:380}),tn(90,.35,{vol:.18,slide:-50})},horn(){tn(196,.5,{type:"sawtooth",vol:.035}),tn(147,.55,{type:"sine",vol:.06})},hit(){Xi(.05,{vol:.08,freq:2500})},die(){tn(420,.18,{type:"triangle",vol:.09,slide:-280}),Xi(.12,{vol:.07,freq:1200})},build(){[392,494,587].forEach((i,e)=>tn(i,.25,{type:"triangle",vol:.1,delay:e*.06}))},upgrade(){[523,659,784,1047].forEach((i,e)=>tn(i,.22,{type:"triangle",vol:.1,delay:e*.07}))},bonk(){tn(110,.16,{type:"sine",vol:.12,slide:-40}),Xi(.05,{vol:.05,freq:400})},tick(i=1){Xi(.025,{vol:.06,freq:4e3}),tn(392*Math.pow(2,i/12*2),.07,{type:"triangle",vol:.07})},stone(){tn(660,.2,{type:"sine",vol:.1,slide:200})},lose(){tn(220,.6,{type:"sawtooth",vol:.06,slide:-120}),Xi(.3,{vol:.08,freq:300})},stun(){tn(700,.4,{type:"square",vol:.05,slide:-500})},deny(){tn(150,.12,{type:"square",vol:.05})},wave(){[330,330,440].forEach((i,e)=>tn(i,.3,{type:"sawtooth",vol:.04,delay:e*.18}))},win(){[523,659,784,1047,1319].forEach((i,e)=>tn(i,.4,{type:"triangle",vol:.12,delay:e*.12}))}},Nc=172,qi=60/Nc/4,As=i=>440*Math.pow(2,(i-69)/12),hf={tak:{chords:[[50,66,69,73,76],[47,62,66,69,74],[43,59,62,66,71],[45,61,64,69,73]],hook:[[0,78,3],[3,76,3],[6,73,2],[8,74,4],[14,71,2],[16,73,3],[19,74,3],[22,76,6],[28,69,4]],pad:"sawtooth",padCut:2400,arpOct:12,reeseDetune:9,drive:0,space:.35,arpRate:1,lead:"square"},vinter:{chords:[[45,60,64,71,76],[41,57,64,69,72],[48,64,67,72,79],[43,59,62,67,71]],hook:[[0,76,6],[6,74,2],[8,72,6],[16,71,4],[20,72,2],[22,74,4],[26,79,6]],pad:"triangle",padCut:1500,arpOct:24,reeseDetune:6,drive:0,space:.6,arpRate:2,lead:"triangle"},vulkan:{chords:[[40,55,59,64,67],[41,57,60,65,69],[40,55,59,64,71],[38,54,57,62,66]],hook:[[0,64,2],[2,65,2],[4,64,4],[10,62,2],[12,59,4],[16,64,2],[18,67,2],[20,65,4],[26,64,6]],pad:"sawtooth",padCut:900,arpOct:0,reeseDetune:16,drive:.6,space:.25,arpRate:1,lead:"sawtooth"}},Rl={A:{k:"x.x.......xx....x.x.......x.....",s:"....x..x.x..x..x....x..x.x..x.x.",g:"..........x...........x.....x..."},B:{k:"x.....x...x.x...x.x...x...x.....",s:"....x.x..x..x.x.....x..xx..x..x.",g:".x.......x.....x.x.......x......"},FILL:{k:"x.x.......x.....x...............",s:"....x..x.x..x..x....x.xxxxxxxxxx",g:"................................"}},ff=[["build",8],["drop",16],["break",8],["drop",16]];function mM(i,e,t){const n=hf[t]||hf.tak,s=i.createDynamicsCompressor();s.threshold.value=-18,s.ratio.value=3,s.attack.value=.01,s.release.value=.2;const r=i.createDynamicsCompressor();r.threshold.value=-3,r.ratio.value=20,r.attack.value=.002,r.release.value=.08;const o=i.createGain();o.gain.value=0,s.connect(r).connect(o).connect(i.destination);const a=i.createAnalyser();a.fftSize=1024,o.connect(a);const l={};for(const j of["drums","bass","pad","arp","lead"]){const R=i.createGain();R.gain.value=0,R.connect(s),l[j]=R}const c={};for(const j of["pad","bass"]){const R=i.createGain();R.gain.value=1,R.connect(l[j]),c[j]=R}const u=(j,R)=>{const w=i.createBuffer(2,Math.floor(i.sampleRate*j),i.sampleRate);for(let X=0;X<2;X++){const ne=w.getChannelData(X);for(let ie=0;ie<ne.length;ie++)ne[ie]=(Math.random()*2-1)*Math.pow(1-ie/ne.length,R)}return w},h=i.createConvolver();h.buffer=u(2.4,2.5);const d=i.createGain();d.gain.value=n.space,h.connect(d).connect(s);const p=i.createConvolver();p.buffer=u(.5,.4);const g=i.createGain();g.gain.value=0,p.connect(g).connect(l.drums);const M=i.createDelay(1);M.delayTime.value=qi*3;const m=i.createGain();m.gain.value=.38;const f=i.createBiquadFilter();f.type="lowpass",f.frequency.value=2400;const _=i.createStereoPanner(),y=i.createOscillator(),x=i.createGain();y.frequency.value=Nc/60/3,x.gain.value=.8,y.connect(x).connect(_.pan),y.start(),M.connect(f).connect(m).connect(M),f.connect(_).connect(l.arp);const C=i.createBiquadFilter();C.type="highpass",C.frequency.value=180;const S=i.createBiquadFilter();S.type="lowpass",S.frequency.value=n.padCut,S.Q.value=2;const E=i.createOscillator(),T=i.createGain();E.frequency.value=.07,T.gain.value=n.padCut*.45,E.connect(T).connect(S.frequency),E.start();const b=i.createDelay(.05);b.delayTime.value=.014;const v=i.createOscillator(),A=i.createGain();v.frequency.value=.5,A.gain.value=.004,v.connect(A).connect(b.delayTime),v.start();const L=i.createStereoPanner();L.pan.value=.6,C.connect(S),S.connect(c.pad),S.connect(b).connect(L).connect(c.pad),S.connect(h);const z=i.createBiquadFilter();z.type="lowpass",z.frequency.value=420,z.Q.value=6;const U=i.createOscillator(),W=i.createGain();if(U.frequency.value=Nc/60/4,W.gain.value=260,U.connect(W).connect(z.frequency),U.start(),n.drive>0){const j=i.createWaveShaper(),R=new Float32Array(1024);for(let w=0;w<1024;w++){const X=w/512-1;R[w]=Math.tanh(X*(1+n.drive*6))}j.curve=R,z.connect(j).connect(c.bass)}else z.connect(c.bass);const D=i.createBiquadFilter();D.type="lowpass",D.frequency.value=3600,D.Q.value=3,D.connect(l.lead),D.connect(M),D.connect(h);const k=(j,R,w,X,ne,ie)=>{j.gain.setValueAtTime(1e-4,R),j.gain.exponentialRampToValueAtTime(X,R+w),j.gain.setValueAtTime(X,R+Math.max(w,ie-ne)),j.gain.exponentialRampToValueAtTime(1e-4,R+ie)},G=(j,R)=>{const w=i.createStereoPanner();return w.pan.value=R,j.connect(w),w},Y=(j,R,w,X,ne,ie,re="bandpass",Fe=0)=>{const Se=i.createBufferSource();Se.buffer=e;const De=i.createBiquadFilter();De.type=re,De.frequency.value=w,De.Q.value=X;const ot=i.createGain();k(ot,j,.001,ne,R*.8,R),Se.connect(De).connect(ot);const we=Fe?G(ot,Fe):ot;for(const je of ie)we.connect(je);Se.start(j,Math.random()*1.5),Se.stop(j+R+.02)},Q=(j,R=1)=>{const w=i.createOscillator(),X=i.createGain();w.frequency.setValueAtTime(160,j),w.frequency.exponentialRampToValueAtTime(44,j+.11),k(X,j,.002,1*R,.2,.3),w.connect(X).connect(l.drums),w.start(j),w.stop(j+.32),Y(j,.012,3500,.7,.35*R,[l.drums],"highpass");for(const ne of Object.values(c))ne.gain.cancelScheduledValues(j),ne.gain.setValueAtTime(.35,j),ne.gain.linearRampToValueAtTime(1,j+.2)},se=(j,R=1)=>{Y(j,.17,1900,.8,.5*R,[l.drums,p]);for(const[w,X,ne]of[[200,160,.3],[340,260,.14]]){const ie=i.createOscillator(),re=i.createGain();ie.type="triangle",ie.frequency.setValueAtTime(w,j),ie.frequency.exponentialRampToValueAtTime(X,j+.08),k(re,j,.001,ne*R,.06,.11),ie.connect(re).connect(l.drums),ie.start(j),ie.stop(j+.13)}g.gain.setValueAtTime(.9*R,j),g.gain.setValueAtTime(1e-4,j+.21)};let Ee=1;const ke=(j,R,w)=>{Ee=-Ee,Y(j,w?.14:.035,9e3,.6,(w?.12:.08)*R,[l.drums],"highpass",Ee*.35)},H=(j,R,w)=>{for(const ie of[-n.reeseDetune,n.reeseDetune]){const re=i.createOscillator(),Fe=i.createGain();re.type="sawtooth",re.frequency.value=As(R),re.detune.value=ie,k(Fe,j,.02,.2,.1,w),G(re.connect(Fe),ie>0?.25:-.25).connect(z),re.start(j),re.stop(j+w+.05)}const X=i.createOscillator(),ne=i.createGain();X.frequency.value=As(R-12),k(ne,j,.02,.42,.1,w),X.connect(ne).connect(c.bass),X.start(j),X.stop(j+w+.05)},Z=(j,R,w,X=1)=>{for(const ne of R.slice(1))for(const[ie,re]of[[-9,-.6],[0,0],[8,.6]]){const Fe=i.createOscillator(),Se=i.createGain();Fe.type=n.pad,Fe.frequency.value=As(ne),Fe.detune.value=ie,k(Se,j,.8,.026*X,1.4,w),G(Fe.connect(Se),re).connect(C),Fe.start(j),Fe.stop(j+w+.1)}},he=(j,R,w=1)=>{const X=i.createOscillator(),ne=i.createGain();X.type="square",X.frequency.value=As(R+n.arpOct);const ie=i.createBiquadFilter();ie.type="lowpass",ie.frequency.value=3200,k(ne,j,.003,.05*w,.08,qi*1.6),X.connect(ie).connect(ne),ne.connect(l.arp),ne.connect(M),X.start(j),X.stop(j+qi*2)},oe=(j,R,w,X)=>{const ne=w*qi;for(const ie of[-6,6]){const re=i.createOscillator(),Fe=i.createGain();re.type=n.lead,X?(re.frequency.setValueAtTime(As(X),j),re.frequency.exponentialRampToValueAtTime(As(R),j+.05)):re.frequency.value=As(R),re.detune.value=ie;const Se=i.createOscillator(),De=i.createGain();Se.frequency.value=5.5,De.gain.value=9,Se.connect(De).connect(re.detune),Se.start(j+.12),Se.stop(j+ne+.05),k(Fe,j,.01,.07,Math.min(.12,ne*.4),ne),G(re.connect(Fe),ie>0?.2:-.2).connect(D),re.start(j),re.stop(j+ne+.05)}};let me=0,Le=0,Ue=null,Xe=0,de=.7,Me=!1,B=0;const $e=ff.reduce((j,[,R])=>j+R,0),be=()=>{if(Xe<.5)return"ambient";let j=B%$e;for(const[R,w]of ff){if(j<w)return R;j-=w}return"drop"},Oe=()=>{const j=i.currentTime,R=(X,ne)=>{X.gain.cancelScheduledValues(j),X.gain.setTargetAtTime(ne,j,.8)},w=Xe;R(l.drums,.1+.85*w),R(l.bass,.3+.6*w),R(l.pad,.75-.2*w),R(l.arp,.35+.3*w),R(l.lead,.55+.35*w),o.gain.cancelScheduledValues(j),o.gain.setTargetAtTime(Me?0:de*.8,j,.3)},Ie=j=>j%2?qi*.12:0,nt=()=>{for(;Le<i.currentTime+.15;){const j=me%32,R=Math.floor(me/16),w=Math.floor(me/32)%n.chords.length,X=n.chords[w];j%16===0&&me>0&&Xe>.5&&B++;const ne=be(),ie=Le+Ie(j),re=B%8;if(ne==="drop"||ne==="build"){const Se=re%4===3&&j>=16?Rl.FILL:re>=6?Rl.B:Rl.A,De=ne==="build"&&re<4;Se.k[j]==="x"&&!(De&&j%8)&&Q(ie),Se.s[j]==="x"&&!De&&se(ie,ne==="build"?.7:1),Se.g[j]==="x"&&se(ie,.3),(!De||j%2===0)&&ke(ie,j%2?.6:1,j%8===6)}else ne==="break"?(j%4===2&&ke(ie,.6,!1),(j===0||j===16)&&Q(ie,.4)):j%4===2&&ke(ie,.45,!1);if(j===0&&(Z(ie,X,qi*32,ne==="break"?1.3:1),H(ie,X[0],qi*(ne==="drop"?14:30))),ne==="drop"&&j===16&&H(ie,X[0]+(w%2?3:7),qi*14),j%n.arpRate===0&&ne!=="break"&&he(ie,X[1+j/n.arpRate%4]+(j>=16?12:0),ne==="ambient"?.7:1),ne==="drop"||(ne==="break"||ne==="ambient")&&Math.floor(R/4)%2===1){const Se=n.hook.findIndex(([De])=>De===j);if(Se>=0){const[,De,ot]=n.hook[Se];oe(ie,De+(ne==="ambient"?-12:0),ot,Se>0?n.hook[Se-1][1]:0)}}Le+=qi,me++}};return{start(){Ue||(Le=i.currentTime+.1,Ue=setInterval(nt,25),Oe())},stop(){clearInterval(Ue),Ue=null,o.gain.setTargetAtTime(0,i.currentTime,.2)},setIntensity(j){j>.5&&Xe<=.5&&(B=0),Xe=j,Oe()},setVolume(j){de=j,Oe()},setMuted(j){Me=j,Oe()},get muted(){return Me},get volume(){return de},rms(){const j=new Float32Array(a.fftSize);return a.getFloatTimeDomainData(j),Math.sqrt(j.reduce((R,w)=>R+w*w,0)/j.length)},get intensity(){return Xe},get section(){return be()},tap(j){o.connect(j)}}}const df=i=>440*Math.pow(2,(i-69)/12),Zr=60/76,pf={tak:{chords:[[50,62,66,69,73],[47,59,62,66,71],[43,59,62,67,71],[45,57,61,64,69]],scale:[62,64,66,69,71,74,76,78,81],bell:"sine",padCut:1400,nature:"birds"},vinter:{chords:[[45,57,64,67,71],[41,57,60,64,67],[48,60,64,67,74],[43,55,62,67,69]],scale:[64,67,69,71,74,76,79,81,83],bell:"triangle",padCut:1100,nature:"wind"},vulkan:{chords:[[40,52,59,62,67],[41,53,60,64,67],[38,50,57,62,65],[40,52,55,59,64]],scale:[52,55,57,59,62,64,67,69,71],bell:"sine",padCut:800,nature:"rumble"}},mf=8;function gM(i,e,t){const n=pf[t]||pf.tak,s=i.createDynamicsCompressor();s.threshold.value=-20,s.ratio.value=2.5,s.attack.value=.03,s.release.value=.4;const r=i.createGain();r.gain.value=0,s.connect(r).connect(i.destination);const o=i.createAnalyser();o.fftSize=1024,r.connect(o);const a={};for(const H of["pad","bell","nature","pulse"]){const Z=i.createGain();Z.gain.value=0,Z.connect(s),a[H]=Z}const l=i.createBuffer(2,Math.floor(i.sampleRate*3.5),i.sampleRate);for(let H=0;H<2;H++){const Z=l.getChannelData(H);for(let he=0;he<Z.length;he++)Z[he]=(Math.random()*2-1)*Math.pow(1-he/Z.length,3)}const c=i.createConvolver();c.buffer=l;const u=i.createGain();u.gain.value=.55,c.connect(u).connect(s);const h=i.createDelay(2);h.delayTime.value=Zr*.75;const d=i.createGain();d.gain.value=.35;const p=i.createBiquadFilter();p.type="lowpass",p.frequency.value=2200,h.connect(p).connect(d).connect(h),p.connect(a.bell);const g=i.createBiquadFilter();g.type="lowpass",g.frequency.value=n.padCut,g.Q.value=.7;const M=i.createOscillator(),m=i.createGain();M.frequency.value=.05,m.gain.value=n.padCut*.3,M.connect(m).connect(g.frequency),M.start(),g.connect(a.pad),g.connect(c);const f=(H,Z,he,oe,me,Le)=>{H.gain.setValueAtTime(1e-4,Z),H.gain.exponentialRampToValueAtTime(oe,Z+he),H.gain.setValueAtTime(oe,Z+Math.max(he,Le-me)),H.gain.exponentialRampToValueAtTime(1e-4,Z+Le)},_=(H,Z)=>{const he=i.createStereoPanner();return he.pan.value=Z,H.connect(he),he},y=(H,Z,he)=>{for(const oe of Z)for(const[me,Le]of[[-7,-.5],[7,.5]]){const Ue=i.createOscillator(),Xe=i.createGain();Ue.type=oe===Z[0]?"sine":"triangle",Ue.frequency.value=df(oe),Ue.detune.value=me,f(Xe,H,2.5,oe===Z[0]?.05:.022,3,he),_(Ue.connect(Xe),Le).connect(g),Ue.start(H),Ue.stop(H+he+.1)}},x=(H,Z,he=1)=>{const oe=(Math.random()-.5)*.8;for(const[me,Le,Ue]of[[1,.09,1.6],[4.2,.02,.25],[2,.025,.7]]){const Xe=i.createOscillator(),de=i.createGain();Xe.type=me===1?n.bell:"sine",Xe.frequency.value=df(Z)*me,de.gain.setValueAtTime(1e-4,H),de.gain.exponentialRampToValueAtTime(Le*he,H+.005),de.gain.exponentialRampToValueAtTime(1e-4,H+Ue);const Me=_(Xe.connect(de),oe);Me.connect(a.bell),Me.connect(h),Me.connect(c),Xe.start(H),Xe.stop(H+Ue+.05)}},C=(H,Z,he,oe,me,Le,Ue,Xe=.002)=>{const de=i.createBufferSource();de.buffer=e;const Me=i.createBiquadFilter();Me.type=he,Me.frequency.value=oe,Me.Q.value=me;const B=i.createGain();return f(B,H,Xe,Le,Z*.7,Z),de.connect(Me).connect(B).connect(Ue),de.start(H,Math.random()*1.5),de.stop(H+Z+.05),Me},S=H=>{const Z=i.createOscillator(),he=i.createGain();Z.frequency.setValueAtTime(90,H),Z.frequency.exponentialRampToValueAtTime(50,H+.18),f(he,H,.01,.35,.2,.3),Z.connect(he).connect(a.pulse),Z.start(H),Z.stop(H+.32)},E=(H,Z)=>C(H,.09,"highpass",7e3,.5,.05*Z,a.pulse,.02),T=H=>{const Z=2+Math.floor(Math.random()*3),he=2400+Math.random()*1600,oe=(Math.random()-.5)*1.4;for(let me=0;me<Z;me++){const Le=H+me*(.09+Math.random()*.06),Ue=i.createOscillator(),Xe=i.createGain();Ue.frequency.setValueAtTime(he*(1+Math.random()*.2),Le),Ue.frequency.exponentialRampToValueAtTime(he*(.75+Math.random()*.6),Le+.07),f(Xe,Le,.008,.03,.04,.08),_(Ue.connect(Xe),oe).connect(a.nature),Ue.start(Le),Ue.stop(Le+.1)}};let b=null;const v=()=>{const H=i.createBufferSource();H.buffer=e,H.loop=!0;const Z=i.createBiquadFilter(),he=i.createGain(),oe=i.createOscillator(),me=i.createGain(),Le=i.createGain();n.nature==="wind"?(Z.type="bandpass",Z.frequency.value=500,Z.Q.value=1.2,he.gain.value=.05,oe.frequency.value=.08,me.gain.value=.04,Le.gain.value=350):n.nature==="rumble"?(Z.type="lowpass",Z.frequency.value=120,Z.Q.value=.8,he.gain.value=.18,oe.frequency.value=.05,me.gain.value=.08,Le.gain.value=40):(Z.type="highpass",Z.frequency.value=3e3,Z.Q.value=.5,he.gain.value=.012,oe.frequency.value=.11,me.gain.value=.01,Le.gain.value=800),oe.connect(me).connect(he.gain),oe.connect(Le).connect(Z.frequency),H.connect(Z).connect(he).connect(a.nature),H.start(),oe.start(),b={s:H,lfo:oe}};let A=null,L=0,z=.7,U=!1,W=0,D=0,k=0,G=0,Y=0,Q=0,se=4;const Ee=()=>{const H=i.currentTime,Z=L,he=(oe,me)=>{oe.gain.cancelScheduledValues(H),oe.gain.setTargetAtTime(me,H,1.2)};he(a.pad,.9),he(a.bell,.7+.2*Z),he(a.nature,.9-.4*Z),he(a.pulse,.55*Z),g.frequency.cancelScheduledValues(H),g.frequency.setTargetAtTime(n.padCut*(1+.9*Z),H,2),r.gain.cancelScheduledValues(H),r.gain.setTargetAtTime(U?0:z*1.6,H,.4)},ke=()=>{const H=i.currentTime+.3;for(;W<H;)y(W,n.chords[D],mf+3),D=(D+1)%n.chords.length,W+=mf;for(;k<H;)Math.random()<.8&&(se=Math.max(0,Math.min(n.scale.length-1,se+[-2,-1,-1,1,1,2,0][Math.floor(Math.random()*7)])),x(k,n.scale[se],.8+Math.random()*.3),Math.random()<.15&&x(k+Zr/4,n.scale[Math.max(0,se-2)],.6)),k+=Zr*(L>.5?Math.random()<.5?.5:1:[1,1.5,2,3][Math.floor(Math.random()*4)]);for(;G<H;)L>.5&&(Y%2===0&&S(G),E(G,1),E(G+Zr/2,.6)),Y++,G+=Zr;for(;Q<H;){if(n.nature==="birds"&&Math.random()<.55&&T(Q),n.nature==="wind"&&Math.random()<.3&&C(Q,2.5,"bandpass",1400+Math.random()*900,6,.03,a.nature,.9),n.nature==="rumble")for(let Z=0;Z<3;Z++)Math.random()<.5&&C(Q+Math.random(),.02,"highpass",2500,.5,.12,a.nature);Q+=1.5+Math.random()*2.5}};return{start(){if(A)return;W=k=G=Q=i.currentTime+.1,b||v(),A=setInterval(ke,50),Ee()},stop(){clearInterval(A),A=null,r.gain.setTargetAtTime(0,i.currentTime,.3)},setIntensity(H){L=H,Ee()},setVolume(H){z=H,Ee()},setMuted(H){U=H,Ee()},get muted(){return U},get volume(){return z},rms(){const H=new Float32Array(o.fftSize);return o.getFloatTimeDomainData(H),Math.sqrt(H.reduce((Z,he)=>Z+he*he,0)/H.length)},get intensity(){return L},get section(){return L>.5?"wave":"calm"},tap(H){r.connect(H)}}}const et={startEmbers:225,emberLife:25,expiredRefund:.5,magnet:4.6,reach:2.7,placeAhead:2.3,minTowerGap:2.5,plinthBonus:1.25,lighthouseReach:5.4,stoneCost:30,chargeTime:.4,upgradeTime:[15,20,25,30],keeperSpeed:6.4,carrySlow:.82,wadeSlow:.7,stunTime:1.6,stunLoss:.3,chillMax:100,stressInvuln:1,stressPush:7,airStress:10,faintTime:6,faintLoss:.25,wakeChill:.6,regen:3,regenReach:9,bagChance:.05,bagHeal:25,bagLife:20,hpGrowth:.2,waveBonus:20,waveBonusPer:5,interest:.1,firstPrep:30,prepTime:15,earlyScale:[.55,.65,.8],activePaths:[1,2,2]},zs={ring:{name:"Røykring-kanon",cost:22,range:7.5,dmg:7,cooldown:.65,air:!1,tip:"rask · kun bakke"},chips:{name:"Chips-mørtel",cost:38,range:10,dmg:18,cooldown:2.2,air:!1,splash:2.5,tip:"splash · kun bakke"},speaker:{name:"Reggae-høyttaler",cost:30,range:5.5,dmg:3,cooldown:1.6,air:!0,slowTime:2.2,tip:"bremser i ring"},bubble:{name:"Bobleblåser",cost:20,range:7,dmg:2.5,cooldown:.38,air:!0,ground:!1,trap:1.4,tip:"fanger flyvere · kun luft"},kite:{name:"Papirdrage",cost:40,range:13,dmg:5,cooldown:2.8,air:!0,ground:!1,zone:3.4,hover:2.4,tip:"sone, lang · kun luft"},pizza:{name:"Pizza-katapult",cost:55,range:14,dmg:24,cooldown:3,air:!1,splash:2.9,tip:"lang splash · kun bakke"},lamp:{name:"Lavalampe",cost:50,range:4.6,dmg:1.1,cooldown:.3,air:!0,slowTime:.5,tip:"aura, bremser alt"}},wo={clerk:{name:"Forbuds-byråkrat",hp:22,speed:2.6,embers:4,anim:12,puff:"#9fffb0",stress:10},tank:{name:"Stortings-tanken",hp:95,speed:1.25,embers:10,anim:5,puff:"#9fffb0",resist:{ring:.5,chips:1.5},stress:15},gull:{name:"Moralpanikk-måke",hp:16,speed:3.4,embers:5,anim:12,puff:"#ffffff",flying:!0,swoop:!0},swarm:{name:"Komité-sverm",hp:7,speed:2.2,embers:1,anim:9,puff:"#ffe08a",stress:8},auditor:{name:"Revisoren",hp:70,speed:1.6,embers:8,anim:7,puff:"#9fffb0",shield:.25,resist:{lamp:1.5},info:"skjold forfra (×0,25), ikke mot aura",stress:14},complainer:{name:"Naboklageren",hp:12,speed:4.3,embers:3,anim:18,puff:"#ffb0f0",resist:{chips:.5,ring:1.5},info:"rask, mørtel bommer",stress:10},lobbyist:{name:"Lobbyisten",hp:55,speed:1.9,embers:6,anim:9,puff:"#ffe08a",splits:3,resist:{speaker:.5,pizza:1.5},noMood:!0,info:"deler seg i tre, immun mot stemning",stress:12},lobbyMini:{name:"Mini-lobbyist",hp:14,speed:2.7,embers:1,anim:14,puff:"#ffe08a",resist:{speaker:.5,pizza:1.5},noMood:!0,stress:8},drone:{name:"Overvåkings-drone",hp:9,speed:4.6,embers:1,anim:30,puff:"#c8d8ff",flying:!0,alt:3.6,resist:{bubble:1.5,lamp:1.5,kite:.5},info:"rask sverm i lufta"},balloon:{name:"Ballong-byråkraten",hp:150,speed:1.05,embers:14,anim:2,puff:"#ffffff",flying:!0,alt:5.6,resist:{bubble:.5,kite:1.5},info:"seig, høyt oppe"},heli:{name:"Mini-helikopteret",hp:48,speed:2.5,embers:7,anim:40,puff:"#ffffff",flying:!0,alt:4.6,blind:{every:6,dur:3,range:9},resist:{ring:.5,kite:1.5},info:"søkelys blender et tårn i 3 s"}},vM=[[{type:"clerk",n:8,gap:1.4,path:0}],[{type:"clerk",n:6,gap:1.3,path:"both"}],[{type:"swarm",n:7,gap:.35,path:1},{type:"clerk",n:6,gap:1.2,path:0,at:4},{type:"swarm",n:7,gap:.35,path:0,at:12}],[{type:"tank",n:3,gap:4,path:0},{type:"clerk",n:6,gap:1,path:1,at:2}],[{type:"gull",n:5,gap:2.5},{type:"clerk",n:7,gap:1,path:"both",at:3}],[{type:"tank",n:3,gap:3.5,path:"both"},{type:"swarm",n:8,gap:.3,path:"both",at:8}],[{type:"gull",n:8,gap:1.6},{type:"clerk",n:9,gap:.8,path:"both",at:2}],[{type:"tank",n:4,gap:3,path:"both"},{type:"swarm",n:10,gap:.3,path:"both",at:6},{type:"gull",n:4,gap:2,at:10}],[{type:"gull",n:10,gap:1.2},{type:"tank",n:4,gap:3,path:"both",at:3},{type:"clerk",n:10,gap:.7,path:"both",at:8}],[{type:"clerk",n:10,gap:.6,path:"both"},{type:"tank",n:5,gap:2.5,path:"both",at:6},{type:"swarm",n:12,gap:.25,path:"both",at:14},{type:"gull",n:12,gap:1,at:18}]],xM="modulepreload",_M=function(i,e){return new URL(i,e).href},gf={},MM=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(t.map(c=>{if(c=_M(c,n),c in gf)return;gf[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!n)for(let g=o.length-1;g>=0;g--){const M=o[g];if(M.href===c&&(!u||M.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${h}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":xM,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((g,M)=>{p.addEventListener("load",g),p.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},vf="glodevokteren-",xf="ABCDEFGHJKLMNPQRSTUVWXYZ",Fc=3,yM=9e3,bM=14e3,_f=6e3;function SM(){let i="";for(let e=0;e<4;e++)i+=xf[Math.floor(Math.random()*xf.length)];return i}function kc(i=""){return i.toUpperCase().replace(/[^A-Z]/g,"").slice(0,4)}let Pl=null;async function wM(){return Pl||(Pl=(await MM(async()=>{const{Peer:i}=await import("./bundler-DrDBPFLh.js");return{Peer:i}},[],import.meta.url)).Peer),Pl}const ca={network:"Mistet kontakten med koblingstjenesten. Sjekk nettet.","server-error":"Koblingstjenesten svarer ikke akkurat nå. Prøv igjen om litt.","socket-error":"Koblingstjenesten svarer ikke akkurat nå. Prøv igjen om litt.","socket-closed":"Mistet kontakten med koblingstjenesten.","browser-incompatible":"Nettleseren støtter ikke nettspill (WebRTC).",webrtc:"Klarte ikke å koble direkte. Nettet ditt blokkerer kanskje peer-to-peer (vanlig på mobilnett/jobbnett)."};function Mf(i={}){const e={role:null,code:"",slot:0,players:[],stats:{sentBytes:0,recvBytes:0,sentMsgs:0,recvMsgs:0}};let t=null,n=null,s=0,r=!1;const o=new Map,a=m=>{var f;r||(f=i.onError)==null||f.call(i,m)},l=()=>performance.now(),c=(m,f)=>{if(!(m!=null&&m.open))return;const _=JSON.stringify(f);e.stats.sentBytes+=_.length,e.stats.sentMsgs++,m.send(_)},u=m=>{e.stats.recvBytes+=m.length,e.stats.recvMsgs++;try{return JSON.parse(m)}catch{return null}},h=()=>{var m;e.players=[{slot:0,name:e.hostName},...[...o].map(([f,_])=>({slot:f,name:_.name}))].sort((f,_)=>f.slot-_.slot);for(const f of o.values())c(f.conn,{t:"lobby",players:e.players});(m=i.onLobby)==null||m.call(i,e.players)},d=m=>{var _;const f=o.get(m);if(f){o.delete(m);try{f.conn.close()}catch{}(_=i.onLeave)==null||_.call(i,m,f.name),h()}};function p(m){return wM().then(f=>new Promise((_,y)=>{const x=m?new f(m,{debug:0,serialization:"raw"}):new f({debug:0}),C=setTimeout(()=>y(new Error("Fikk ikke kontakt med koblingstjenesten (PeerJS). Sjekk nettet og prøv igjen.")),yM);x.on("open",()=>{clearTimeout(C),_(x)}),x.on("error",S=>{clearTimeout(C),S.type==="unavailable-id"?y(Object.assign(new Error("taken"),{taken:!0})):x.open||y(new Error(ca[S.type]||`Nettfeil: ${S.type}`))})}))}e.host=async m=>{e.role="host",e.slot=0,e.hostName=m||"Vokter 1";for(let f=0;;f++){const _=SM();try{t=await p(vf+_),e.code=_;break}catch(y){if(!y.taken||f>4)throw e.role=null,y}}return t.on("error",f=>{f.type!=="peer-unavailable"&&a(ca[f.type]||`Nettfeil: ${f.type}`)}),t.on("connection",f=>{f.on("open",()=>{var x;let _=1;for(;o.has(_);)_++;if(_>=Fc||e.closedRoom){c(f,{t:"refuse",why:e.closedRoom?"Spillet er allerede i gang.":`Rommet er fullt (${Fc} spillere).`}),setTimeout(()=>f.close(),300);return}const y=String(((x=f.metadata)==null?void 0:x.name)||`Vokter ${_+1}`).slice(0,14);o.set(_,{conn:f,name:y,seen:l()}),c(f,{t:"hello",slot:_,world:e.world,tid:e.tid}),h(),f.on("data",C=>{var T;const S=o.get(_);if(!S||S.conn!==f)return;S.seen=l();const E=u(C);E&&E.t!=="ping"&&((T=i.onMessage)==null||T.call(i,E,_))}),f.on("close",()=>{var C;((C=o.get(_))==null?void 0:C.conn)===f&&d(_)}),f.on("error",()=>{var C;((C=o.get(_))==null?void 0:C.conn)===f&&d(_)})})}),M(),h(),e.code},e.join=async(m,f)=>(e.role="guest",e.code=kc(m),t=await p(null),new Promise((_,y)=>{let x=!1;const C=(E,T)=>{x||(x=!0,clearTimeout(S),E(T))},S=setTimeout(()=>C(y,new Error("Fikk ikke koblet til verten. Enten er koden feil, eller nettet blokkerer direkte kobling (vanlig på mobilnett/jobbnett).")),bM);t.on("error",E=>{E.type==="peer-unavailable"?C(y,new Error(`Fant ikke rom ${e.code}. Sjekk koden.`)):x?E.type==="webrtc"&&a(ca.webrtc):C(y,new Error(ca[E.type]||`Nettfeil: ${E.type}`))}),n=t.connect(vf+e.code,{serialization:"raw",reliable:!0,metadata:{name:f}}),n.on("data",E=>{var b,v;e.hostSeen=l();const T=u(E);if(T){if(T.t==="hello"){e.slot=T.slot,C(_,T);return}if(T.t==="refuse"){C(y,new Error(T.why));return}if(T.t==="lobby"){e.players=T.players,(b=i.onLobby)==null||b.call(i,T.players);return}T.t!=="ping"&&((v=i.onMessage)==null||v.call(i,T,0))}}),n.on("close",()=>{x?g():C(y,new Error("Verten lukket koblingen."))}),n.on("open",()=>{e.hostSeen=l(),M()})}));function g(){var m;r||(r=!0,(m=i.onHostGone)==null||m.call(i),e.close())}function M(){clearInterval(s),s=setInterval(()=>{const m=l();if(e.role==="host")for(const[f,_]of o)m-_.seen>_f?d(f):m-(_.pinged||0)>1e3&&(_.pinged=m,c(_.conn,{t:"ping"}));else e.role==="guest"&&n&&(m-e.hostSeen>_f?g():c(n,{t:"ping"}))},1e3)}return e.send=m=>c(n,m),e.sendTo=(m,f)=>{var _;return c((_=o.get(m))==null?void 0:_.conn,f)},e.broadcast=m=>{if(!o.size)return;const f=JSON.stringify(m);for(const _ of o.values())_.conn.open&&(e.stats.sentBytes+=f.length,e.stats.sentMsgs++,_.conn.send(f))},e.guestCount=()=>o.size,e.close=()=>{clearInterval(s);for(const m of o.values())try{m.conn.close()}catch{}o.clear();try{n==null||n.close()}catch{}try{t==null||t.destroy()}catch{}t=null,n=null},addEventListener("pagehide",()=>e.close()),e}const Jt=i=>document.getElementById(i),yf=["#f2c23c","#4fb3d9","#c46bd6"],Eo=i=>yf[i%yf.length];function EM(i){const e=Jt("net"),t=Jt("net-status"),n=Jt("net-players"),s=Jt("net-share");let r=null,o=!1,a="";try{a=localStorage.getItem("glod-name")||""}catch{}Jt("net-name").value=a,Jt("net-name").addEventListener("input",m=>{try{localStorage.setItem("glod-name",m.target.value.trim())}catch{}});const l=(m,f=!1)=>{t.textContent=m,t.classList.toggle("err",f)},c=m=>(Jt("net-name").value.trim()||m).slice(0,14),h={onLobby:m=>{n.innerHTML=m.map(f=>`<li><i style="background:${Eo(f.slot)}"></i>${TM(f.name)}${f.slot===0?" <small>(vert)</small>":""}${r&&f.slot===r.slot?" <small>← deg</small>":""}</li>`).join(""),(r==null?void 0:r.role)==="host"&&(Jt("net-go").disabled=!1,Jt("net-go").textContent=m.length>1?`Start på ${i.worldName} (${m.length} spillere)`:"Start (venter på andre …)")},onMessage:(m,f)=>{var _;if(m.t==="start"&&r.role==="guest"){e.dataset.state="playing",i.onGuestStart(r);return}(_=i.onMessage)==null||_.call(i,m,f)},onLeave:(m,f)=>{var _;return(_=i.onLeave)==null?void 0:_.call(i,m,f)},onError:m=>l(m,!0),onHostGone:()=>{var m;return(m=i.onHostGone)==null?void 0:m.call(i)}},d=m=>{e.dataset.state=m,Jt("btn-start").classList.toggle("hidden",m==="host"||m==="guest"||m==="connecting")},p=m=>{r==null||r.close(),r=null,o=!1,d("idle"),n.innerHTML="",s.classList.add("hidden"),m?l(m,!0):l("")};Jt("btn-net").addEventListener("click",()=>{e.classList.toggle("hidden"),Jt("btn-net").classList.toggle("sel",!e.classList.contains("hidden"))}),Jt("net-host").addEventListener("click",async()=>{if(!o){o=!0,d("connecting"),l("Lager rom …"),r=Mf(h),r.world=i.worldIndex,r.tid=i.timeOfDay;try{const m=await r.host(c("Vokter 1"));d("host");const f=`${location.origin}${location.pathname}?join=${m}`;Jt("net-code").textContent=m,Jt("net-link").value=f,s.classList.remove("hidden"),l(`Rom ${m} er åpent. Del koden eller lenken (maks ${Fc} spillere).`)}catch(m){p(m.message)}}});const g=async m=>{const f=kc(m);if(!o){if(f.length!==4){l("Koden har fire bokstaver.",!0);return}o=!0,d("connecting"),l(`Kobler til rom ${f} …`),r=Mf(h);try{const _=await r.join(f,c("Vokter"));if(_.world!==i.worldIndex||_.tid&&_.tid!==i.timeOfDay){l("Henter vertens verden …"),r.close(),location.href=`${location.pathname}?world=${_.world}&tid=${_.tid||"dag"}&join=${f}`;return}d("guest"),l(`Du er med i rom ${f}. Venter på at verten starter …`)}catch(_){p(_.message)}}};Jt("net-join").addEventListener("click",()=>g(Jt("net-code-in").value)),Jt("net-code-in").addEventListener("keydown",m=>{m.stopPropagation(),m.key==="Enter"&&g(m.target.value)}),Jt("net-name").addEventListener("keydown",m=>m.stopPropagation()),Jt("net-copy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(Jt("net-link").value),l("Lenke kopiert.")}catch{Jt("net-link").select()}}),Jt("net-leave").addEventListener("click",()=>p()),Jt("net-go").addEventListener("click",()=>{(r==null?void 0:r.role)==="host"&&(r.closedRoom=!0,r.broadcast({t:"start"}),d("playing"),i.onHostStart(r))});const M=kc(i.params.get("join")||"");return M&&(e.classList.remove("hidden"),Jt("net-code-in").value=M,g(M)),{get net(){return r},say:l}}function TM(i){return String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}const ln=new URLSearchParams(location.search),Fd=ln.has("demo");if(ln.has("unlockall"))try{localStorage.setItem("glod-unlocked",String($s.length))}catch{}let yn=Number(ln.get("world"));if(!Number.isInteger(yn))try{yn=Number(localStorage.getItem("glod-world"))||0}catch{yn=0}yn=Math.max(0,Math.min((ln.has("join")?$s.length:xo())-1,yn));try{localStorage.setItem("glod-world",String(yn))}catch{}const hn=$s[yn],wu=M_(hn,vM),AM=.3;function CM(){return 1+AM*(kt.length-1)}const RM=Math.max(1,Math.min(20,Number(ln.get("speed"))||1)),ts=matchMedia("(pointer: coarse)").matches||ln.has("mobile"),Oc={high:{shadow:2048,dprCap:2},low:{shadow:1024,dprCap:2}};let Ai=ts?"low":"high";try{const i=localStorage.getItem("glod-quality");(i==="high"||i==="low")&&(Ai=i)}catch{}(ln.get("q")==="high"||ln.get("q")==="low")&&(Ai=ln.get("q"));const Mo={mobile:ts,shadow:Oc[Ai].shadow,dprCap:Oc[Ai].dprCap},PM={high:["rock","tree","tower","figure"],low:["rock","tree","tower","figure"]};function kd(i){const e=ln.has("ol")?ln.get("ol").split(","):PM[i];xd(Object.fromEntries(["rock","tree","tower","figure"].map(t=>[t,e.includes(t)])))}kd(Ai);const Od=document.getElementById("game"),zn=new d1({canvas:Od,antialias:!ts,powerPreference:"high-performance",preserveDrawingBuffer:ln.has("shot")});let fs=Math.min(devicePixelRatio||1,Mo.dprCap);zn.setPixelRatio(fs);zn.shadowMap.enabled=!0;zn.shadowMap.type=Rf;zn.toneMapping=Kc;let ms="dag";try{ms=localStorage.getItem("glod-tid")||"dag"}catch{}ln.get("tid")&&(ms=ln.get("tid"));const ti=ms==="skumring"&&hn.skyDusk?hn.skyDusk:hn.sky;zn.toneMappingExposure=ti.exposure;zn.info.autoReset=!1;const _t=new p1,Bd=new Re(ti.fog);_t.background=Bd;_t.fog=new hu(Bd,...hn.fog??[55,115]);const $t=new Zn(38,1,.5,200),LM=new j1(ti.hemiSky,ti.hemiGround,ti.hemi);_t.add(LM);const _n=new J1(ti.sun,ti.sunI);_n.castShadow=!0;_n.shadow.mapSize.set(Mo.shadow,Mo.shadow);Object.assign(_n.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:90});_n.shadow.bias=-8e-4;_n.shadow.normalBias=.03;_t.add(_n,_n.target);s_(_t);const Ge=N_(_t,Mo,hn);Ge.grass.setLevel(Ai);const DM=Q_(_t,Ge,Mo,hn,ms,$t),An=eM(Ge);window.__nav=An;const Rt=zd(_t,ts?450:800),xs=zd(_t,ts?120:220,{blending:ds,size:1.6,opacity:.45,fadeTo:ti.fog}),To=J_(zn,_t,$t,ti.grade);To.setLevel(Ai);const xt=uM(Od),Gd=fM(xt);xt.menu=Gd;xt.panelOpen=()=>!Ei.classList.contains("hidden");const lo=document.createElement("div");lo.id="toast";document.body.appendChild(lo);let bf=0;function Ea(i){lo.textContent=i,lo.classList.add("on"),clearTimeout(bf),bf=setTimeout(()=>lo.classList.remove("on"),3200)}xt.onPad=(i,e)=>{Ea(i==="connect"?`🎮 Kontroll tilkoblet: ${rM(e)}`:"🎮 Kontroll frakoblet"),ei.device=null,ct("pause").classList.contains("hidden")||Fs(!0,q.confirming)};function Ao(){const i=innerWidth,e=innerHeight;zn.setSize(i,e,!1),$t.aspect=i/e,$t.updateProjectionMatrix(),To.setSize(i,e),i_(ts?2:2.2,zn.getPixelRatio(),i,e)}function Vd(i){Ai=i;try{localStorage.setItem("glod-quality",i)}catch{}const e=Oc[i];_n.shadow.mapSize.set(e.shadow,e.shadow),_n.shadow.map&&(_n.shadow.map.dispose(),_n.shadow.map=null),fs=Math.min(devicePixelRatio||1,e.dprCap),zn.setPixelRatio(fs),To.setLevel(i),Ge.grass.setLevel(i),kd(i),Ao(),document.getElementById("btn-quality").textContent=i==="high"?"Høy":"Lav"}addEventListener("resize",Ao);Ao();const q={phase:"title",wave:0,timer:0,embers:et.startEmbers,lights:Ir,spawnQueue:[],leaks:{},seen:{},time:0,sel:0,paused:!1},Bc=et.upgradeTime.length+1,Di=["ring","chips","speaker","bubble","kite","pizza","lamp"];let Ki=hn.camYaw??0;const Sf=new Q1,un=[],nn=[],gi=[],Wn=[],Sr=[],co=[],Be={host:!1,guest:!1,net:null,sendT:0,goal:null,ids:0,ev:[],snapT:0};let Qt=Br(Ad(),"figure"),I={x:Ge.lighthouse.pos.x+1,z:Ge.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,walk:0,charge:0,chargeTower:null,face:Math.PI,goal:null,chill:et.chillMax,inv:0,faint:0,faints:0,roll:null,stillT:0,rollBlock:null};Qt.position.set(I.x,Ge.heightAt(I.x,I.z),I.z);_t.add(Qt);const Hd=ti.lantern??2.6,Eu=new vo("#ffcf70",Hd,6,1.8);Eu.position.set(.8,.45,-.3);Qt.add(Eu);const kt=[{slot:0,K:I,mesh:Qt,input:xt,sel:0,buildMode:!1,local:!0}];let pn=kt[0],Ht=xt;function wf(i){pn.sel=q.sel,pn.buildMode=q.buildMode,pn=i,I=i.K,Qt=i.mesh,Ht=i.input,q.sel=i.sel,q.buildMode=i.buildMode}function Ui(i,e){if(i===pn)return e();const t=pn;wf(i);try{return e()}finally{wf(t)}}const Wd=(i=0)=>({x:Ge.lighthouse.pos.x+1+i*1.2,z:Ge.lighthouse.pos.z+7.5-i*.6,vx:0,vz:0,carrying:!1,stun:0,walk:0,charge:0,chargeTower:null,face:Math.PI,goal:null,chill:et.chillMax,inv:0,faint:0,faints:0,roll:null,stillT:0,rollBlock:null});function Tu(i,e,t=()=>!0){let n=null,s=1/0;for(const r of kt){const o=Math.hypot(r.K.x-i,r.K.z-e);o<s&&t(r)&&(s=o,n=r)}return n}const ct=i=>document.getElementById(i),rn={chill:ct("hud-chill"),lights:ct("hud-lights"),embers:ct("hud-embers"),wave:ct("hud-wave"),timer:ct("hud-timer")},Qi=ct("hint"),Ei=ct("build-panel"),Au=ct("btn-next"),Cu=ct("fps");ln.has("debug")||Cu.classList.add("hidden");let ei={};function Hn(i,e,t,n){ei[e]!==t&&(ei[e]=t,i.querySelector("b").textContent=t,n&&(i.classList.remove(n),i.offsetWidth,i.classList.add(n)))}const IM=4;let Xd=0;function Gc(i){if(Qi.textContent===i)return;Qi.textContent=i,Xd=0,Qi.classList.remove("faded");const e=Ei.classList.contains("hidden")?null:Ei.getBoundingClientRect();Qi.style.bottom=e&&e.height?`${Math.round(innerHeight-e.top+6)}px`:""}function UM(i){(Xd+=i)>IM&&Qi.classList.add("faded")}function Ru(i){q.phase="prep",q.timer=i,Au.classList.remove("hidden"),zM()}function zM(){if(Be.guest){q.spawnPoints=Be.spawnPoints||[],q.spawnPoints.length&&Hc();return}const i=q.wave+1,e=i===1?1:i<=3?2:2+Math.floor(Math.random()*3);q.spawnPoints=An.coastPoints(e,24),q.spawnPoints.length||(q.spawnPoints=An.coastPoints(e,8,{near:12,minFrac:.5})),q.spawnPoints.length||(q.spawnPoints=An.roadEnds().slice(0,e)),Be.host&&Be.ev.push(["sp",q.spawnPoints.map(t=>[+t[0].toFixed(2),+t[1].toFixed(2)])]),Hc()}function Pu(){q.wave+=1,q.phase="wave",Au.classList.add("hidden"),q.spawnQueue=[];for(const i of wu[q.wave-1]){const e=q.wave<=et.earlyScale.length?q.wave-1:-1,t=q.spawnPoints.length,n=wo[i.type].flying?hn.balance.air??1:1,s=Math.max(1,Math.round(i.n*(hn.balance.count||1)*n*(e>=0?et.earlyScale[e]:1)));if(i.path==="both"){const r=Math.ceil(s/Math.min(2,t));for(let o=0;o<t;o++)for(let a=0;a<r;a++)q.spawnQueue.push({t:(i.at??0)+a*i.gap+o*.3,type:i.type,path:o})}else{const r=i.path??0;for(let o=0;o<s;o++)q.spawnQueue.push({t:(i.at??0)+o*i.gap,type:i.type,path:(r+o%2)%t})}}q.spawnQueue.sort((i,e)=>i.t-e.t),q.waveClock=0,Dt.wave(),en==null||en.setIntensity(1),Hn(rn.wave,"wave",q.wave,"bump")}function Ba(i,e){var l,c;const t=wo[i],n=Br(A_(i),"figure"),s=t.hp*(1+et.hpGrowth*(q.wave-1))*hn.balance.hp*(((c=(l=hn.balance.types)==null?void 0:l[i])==null?void 0:c.hp)??1)*CM(),r={id:++Be.ids,type:i,def:t,mesh:n,hp:s,maxHp:s,slow:0,phase:Math.random()*6,alive:!0,speedMul:hn.balance.speed*(t.flying?hn.balance.airSpeed??1:1),lane:(Math.random()-.5)*1.4};r.var=.95+Math.random()*.1,r.speedMul*=.95+Math.random()*.1,n.scale.setScalar(r.var),r.blinkT=Math.random()*4;const o=q.spawnPoints[e%q.spawnPoints.length]||[0,50],a=Ge.lighthouse.pos;if(t.flying){const u=Math.atan2(o[1]-a.z,o[0]-a.x)+(Math.random()-.5)*.5,h=a.x+Math.cos(u)*66,d=a.z+Math.sin(u)*66;r.x=h,r.z=d,r.y=t.alt||4,r.dist0=Math.hypot(a.x-h,a.z-d),r.hitCd=0}else r.x=o[0]+(Math.random()-.5)*1.5,r.z=o[1]+(Math.random()-.5)*1.5,r.y=Ge.heightAt(r.x,r.z),r.remain=An.at(r.x,r.z);return n.position.set(r.x,r.y,r.z),_t.add(n),un.push(r),!q.seen[i]&&i!=="lobbyMini"&&(q.seen[i]=!0,NM(r)),r}const Vc={ring:"💨",chips:"🥔",speaker:"🔊",bubble:"🫧",kite:"🪁",pizza:"🍕",lamp:"🌋"};function qd(i){const e=Object.entries(i.resist||{}),t=e.filter(([,s])=>s<1).map(([s])=>Vc[s]).join(""),n=e.filter(([,s])=>s>1).map(([s])=>Vc[s]).join("");return{tough:t+(i.shield?"📒":""),weak:n}}const ji=[],Ga=document.createElement("div");Ga.id="tags";document.body.appendChild(Ga);function NM(i){const{tough:e,weak:t}=qd(i.def),n=document.createElement("div");n.className="enemy-tag",n.innerHTML=`<b>${i.def.flying?"🪶":"🐾"} ${i.def.name}</b>${e?`<span>🛡️${e}</span>`:""}${t?`<span>💥${t}</span>`:""}`,Ga.appendChild(n),ji.push({m:i,el:n,t:0}),(q.wave>1||i.def.flying)&&on(`Ny fiende: ${i.def.name}${e?` · tåler ${e}`:""}${t?` · svak mot ${t}`:""}`)}const yo=document.createElement("div");yo.id="upgbars";document.body.appendChild(yo);const Ta=[];function FM(){var i;Ta.length=0,yo.style.visibility=q.paused?"hidden":"";for(const e of nn){if(!e.upg){e.upgEl&&(e.upgEl.remove(),e.upgEl=null);continue}e.upgEl||(e.upgEl=document.createElement("div"),e.upgEl.className="upg-bar",e.upgEl.innerHTML='<div class="upg-arrows"></div><div class="upg-track"><i></i></div><span></span>',yo.appendChild(e.upgEl));const t=e.upgEl,n=Math.min(1,e.upg.t/e.upg.dur),s=((i=I.roll)==null?void 0:i.tower)===e?I.roll:null,r=s?s.seq.join()+s.i:"";t.dataset.k!==r&&(t.dataset.k=r,t.firstChild.innerHTML=s?s.seq.map((h,d)=>`<b class="${d<s.i?"lit":d===s.i?"next":""}">${{rU:"▲",rR:"▶",rD:"▼",rL:"◀"}[h]}</b>`).join(""):""),s!=null&&s.shake&&(s.shake=!1,t.firstChild.classList.remove("shake"),t.offsetWidth,t.firstChild.classList.add("shake"),t.firstChild.onanimationend=()=>t.firstChild.classList.remove("shake")),e.upgReset&&(e.upgReset=!1,t.classList.remove("reset"),t.offsetWidth,t.classList.add("reset")),t.children[1].firstChild.style.width=`${(100*n).toFixed(1)}%`;const o=e.upg.t>0||s?`nv. ${e.level+1} · ${Math.ceil(e.upg.dur-e.upg.t)} s igjen`:`nv. ${e.level+1} · stå stille for å rulle`;t.lastChild.textContent!==o&&(t.lastChild.textContent=o),yt.set(e.x,e.y+2.9*e.mesh.scale.y,e.z).project($t);const a=yt.z<1&&Math.abs(yt.x)<1&&Math.abs(yt.y)<1;if(t.style.display=a?"flex":"none",!a)continue;const l=t.offsetWidth,c=t.offsetHeight,u={x:Math.min(Math.max((yt.x*.5+.5)*innerWidth,l/2+6),innerWidth-l/2-6),y:(-yt.y*.5+.5)*innerHeight,w:l,h:c,on:a};t.style.left=`${u.x}px`,t.style.top=`${u.y}px`,Ta.push(u)}}function kM(i){var n;const e=ji.length?ct("hud").getBoundingClientRect().bottom:0;for(let s=ji.length-1;s>=0;s--){const r=ji[s];r.age=(r.age||0)+i,yt.set(r.m.x,r.m.y+(((n=r.m.mesh.userData.hpBar)==null?void 0:n.position.y)??2.2)+.5,r.m.z).project($t);const o=yt.z<1&&Math.abs(yt.x)<1&&Math.abs(yt.y)<1;r.el.style.display=o?"flex":"none",o&&(r.t+=i);const a=r.el.offsetWidth,l=r.el.offsetHeight;r.x=Math.min(Math.max((yt.x*.5+.5)*innerWidth,a/2+6),innerWidth-a/2-6),r.y=Math.max((-yt.y*.5+.5)*innerHeight,e+l+6),r.w=a,r.h=l,r.on=o,r.el.style.opacity=String(Math.min(1,(6-r.t)/.6)),(r.t>6||r.age>90||!r.m.alive)&&(r.el.remove(),ji.splice(s,1))}const t=[...Ta];for(const s of ji.filter(r=>r.on).sort((r,o)=>r.y-o.y)){let r=!0;for(let o=0;r&&o<8;o++){r=!1;for(const a of t)Math.abs(s.x-a.x)<(s.w+a.w)/2+4&&s.y>a.y-a.h-3&&s.y-s.h<a.y+3&&(s.y=a.y+s.h+4,r=!0)}t.push(s)}for(const s of ji)s.on&&(s.el.style.left=`${s.x}px`,s.el.style.top=`${s.y}px`)}function OM(i){return i.def.flying?1-Math.hypot(Ge.lighthouse.pos.x-i.x,Ge.lighthouse.pos.z-i.z)/i.dist0:1-Math.min(1,(i.remain??An.maxDist)/An.maxDist)}const Ma=[],Ns=document.createElement("div");Ns.id="warn";document.body.appendChild(Ns);function Hc(){for(const t of Ma)_t.remove(t);Ma.length=0,Ns.innerHTML="";for(const[t,n]of q.spawnPoints){const s=new lt(Yd,new Nt({color:"#ff7a3a",transparent:!0,opacity:.8,depthWrite:!1}));s.position.set(t,Math.max(Ge.heightAt(t,n),.08)+.1,n);const r=new lt(BM,new Nt({color:"#ff8a3a",transparent:!0,opacity:.35,blending:Ti,depthWrite:!1,fog:!1}));r.position.y=4,s.add(r),_t.add(s),Ma.push(s);const o=document.createElement("div");o.className="warn-arrow",o.innerHTML='<span class="arr">➤</span><span class="kind"></span>',Ns.appendChild(o)}const i=q.spawnPoints.length,e=q.spawnPoints.map(()=>({air:!1,ground:!1}));for(const t of wu[q.wave]||[]){const n=t.path==="both"?e.map((s,r)=>r):[(t.path??0)%i,((t.path??0)+1)%i];for(const s of n)e[s][wo[t.type].flying?"air":"ground"]=!0}e.forEach((t,n)=>{var r;const s=(r=Ns.children[n])==null?void 0:r.querySelector(".kind");s&&(s.textContent=(t.air?"🪶":"")+(t.ground?"🐾":""))})}const Yd=new _s(1.6,2.2,32);Yd.rotateX(-Math.PI/2);const BM=new jt(.5,1.4,8,12,1,!0);function GM(){var o;const i=q.phase==="prep"||q.phase==="wave"&&q.waveClock<8,e=Ns.children,t=i&&!Ei.classList.contains("hidden")?Ei.getBoundingClientRect():null,n=t&&Qi.textContent&&!Qi.classList.contains("faded"),s=i?ct("hud").getBoundingClientRect().bottom:0;Ns.style.visibility=Ga.style.visibility=q.paused?"hidden":"";const r=t?n?Math.min(t.top,Qi.getBoundingClientRect().top):t.top:0;(o=q.spawnPoints)==null||o.forEach(([a,l],c)=>{const u=Ma[c],h=e[c];if(!u||!h)return;u.visible=i;const d=.5+.5*Math.sin(q.time*6);u.scale.setScalar(1+d*.35),u.material.opacity=.35+.5*d,yt.set(a,u.position.y,l).project($t);const p=Math.abs(yt.x)>.92||Math.abs(yt.y)>.88||yt.z>1;if(h.style.display=i?"block":"none",h.classList.toggle("onscreen",!p),i&&!p&&(h.style.left=`${(yt.x*.5+.5)*innerWidth}px`,h.style.top=`${Math.max((-yt.y*.5+.5)*innerHeight-30,s+30)}px`,h.style.transform="translate(-50%, -50%)",h.firstChild.style.transform=""),i&&p){let g=yt.x,M=yt.y;yt.z>1&&(g=-g,M=-M);const m=Math.atan2(-M,g),f=Math.max(Math.abs(g),Math.abs(M))||1,_=Mt.clamp(g/f,-1,1),y=Mt.clamp(M/f,-1,1),x=(_*.46+.5)*innerWidth;let C=(-y*.44+.5)*innerHeight;t&&x>t.left-24&&x<t.right+24&&C>r-24&&(C=r-24),C=Math.max(C,s+30),h.style.left=`${x}px`,h.style.top=`${C}px`,h.style.transform=`translate(-50%, -50%) scale(${1+d*.25})`,h.firstChild.style.transform=`rotate(${m}rad)`}})}function Is(i,e,t){var n;if(i.alive){if(t&&(e*=((n=i.def.resist)==null?void 0:n[t.type])??1,i.def.shield&&t.type!=="lamp")){const s=t.x-i.x,r=t.z-i.z,o=Math.hypot(s,r)||1,a=Math.hypot(i.hx||0,i.hz||0)||1;(s*(i.hx||0)+r*(i.hz||0))/(o*a)>.35&&(e*=i.def.shield,Math.random()<.3&&Rt.emit(i.x,i.y+1,i.z,{n:2,color:"#d8c890",speed:1.5,up:1,life:.3}))}if(Be.guest){i.hitT=.18,i.mesh.userData.hpBar.visible=!0;return}i.hp-=e,i.hitT=.18,i.mesh.userData.hpBar.visible=!0,i.hp<=0&&$d(i)}}function $d(i){if(i.alive=!1,i.chillT=0,C_(i),co.push(i),Rt.emit(i.x,i.y+1.2,i.z,{n:12,color:i.def.puff,speed:1.6,up:2.2,life:.9,gravity:1.5}),Dt.chill(),Be.host&&Be.ev.push(["c",i.id]),!Be.guest){Lu(i.x,i.y+.5,i.z,i.def.embers,i.def.flying),!i.def.flying&&Math.random()<et.bagChance&&Du(i.x,i.z);for(let e=0;e<(i.def.splits||0);e++){const t=Ba("lobbyMini",0);t.x=i.x+(e-1)*.6,t.z=i.z+(e%2?.5:-.5),t.y=Ge.heightAt(t.x,t.z),t.mesh.position.set(t.x,t.y,t.z)}}}function VM(i){var e;for(let t=co.length-1;t>=0;t--){const n=co[t];n.chillT+=i;const s=n.chillT,r=n.mesh.userData.body;if(n.def.flying)n.y+=i*2.5,n.z+=i*3,(e=n.mesh.userData.wings)==null||e.forEach((a,l)=>a.rotation.z=Math.sin(s*6)*.4*(l?-1:1));else if(s<1.4){const a=Math.min(1,s/.4);r.position.y=-.25*a*(n.type==="tank"?1.3:1),r.rotation.x=.25*a,r.rotation.z=Math.sin(s*3)*.05}else{r.rotation.x=0,r.position.y=Math.abs(Math.sin(s*7))*.06;const[a,l]=An.dir(n.x,n.z),c=n.x-a*n.def.speed*.45*i,u=n.z-l*n.def.speed*.45*i;Ge.isWalkable(c,u)&&(n.x=c,n.z=u),n.y=Ge.heightAt(n.x,n.z),(a||l)&&(n.mesh.rotation.y=Math.atan2(a,l))}Math.random()<i*1.5&&Rt.emit(n.x,n.y+1.8,n.z,{n:1,color:"#c8ffb0",speed:.3,up:1,life:.8,gravity:-.4}),s>2.6&&!n.popped&&(n.popped=!0,xs.emit(n.x,n.y+.8,n.z,{n:8,color:"#eef6e8",speed:1.4,up:1.2,life:.7,gravity:-.5}));const o=Math.max(0,Math.min(1,(3.2-s)/.6));n.mesh.scale.setScalar(o*(n.var||1)*(s>2.6?1+Math.sin((s-2.6)*10)*.08:1)),n.mesh.position.set(n.x,n.y,n.z),s>3.2&&(_t.remove(n.mesh),co.splice(t,1))}}function Lu(i,e,t,n,s=!1,r=1){if(Be.guest)return;const o=Math.min(n,n>=6?3:n>=3?2:1);let a=n;for(let l=0;l<o;l++){const c=l===o-1?a:Math.ceil(n/o);a-=c;const u=Cd(),h=Math.random()*Math.PI*2,d=(1.2+Math.random()*1.8)*r,p={id:++Be.ids,mesh:u,x:i,y:e,z:t,vx:Math.cos(h)*d,vz:Math.sin(h)*d,vy:5+Math.random()*2,life:et.emberLife,value:c,settled:!1,phase:Math.random()*6};u.scale.setScalar(.8+Math.min(c,6)*.08),_t.add(u),Wn.push(p)}}function Ws(i,e,t,n,s=()=>!0){let r=null,o=n;for(const a of i){if(!s(a))continue;const l=Math.hypot(a.x-e,a.z-t);l<o&&(o=l,r=a)}return r}function Va(){const i=Ws(Ge.plinths,I.x,I.z,et.reach,l=>!l.tower);if(i)return{x:i.x,z:i.z,y:i.y,plinth:i,ok:!0};const e=-Math.sin(I.face),t=-Math.cos(I.face),n=I.x+e*et.placeAhead,s=I.z+t*et.placeAhead,r=Ge.heightAt(n,s),o=Ge.lighthouse.pos;let a="";return r<.35?a="i vannet":Ge.extras.blocks(n,s)?a="i lavaen":Ge.pathDist(n,s)<1.9?a="på stien":Ge.slopeAt(n,s)>.6?a="for bratt":Math.hypot(n-o.x,s-o.z)<5.5?a="for nær fyret":nn.some(l=>Math.hypot(l.x-n,l.z-s)<et.minTowerGap)?a="for nær et annet tårn":Ge.plinths.some(l=>Math.hypot(l.x-n,l.z-s)<1.9)?a="oppå en sokkel (gå helt bort til den)":Ge.colliders.some(l=>!l.tower&&(l.x-n)**2+(l.z-s)**2<(l.r+.7)**2)&&(a="i veien for et tre eller en stein"),{x:n,z:s,y:r,plinth:null,ok:!a,why:a}}function Aa(i){const e=Va();if(!e.ok){Dt.deny(),on(`Ikke lov å bygge her: ${e.why}`);return}const t=zs[i];if(q.embers<t.cost){Dt.deny(),on(`Trenger ${t.cost} ✦ glør`),Hn(rn.embers,"embersBad",Math.random(),"bad");return}q.embers-=t.cost,jd(i,e),q.buildMode=!1,e.plinth&&on(`${t.name} på gammel sokkel: +25 % rekkevidde`)}function jd(i,e,t=0){const n=zs[i],s=Br(R_(i),"tower");if(s.position.set(e.x,e.y,e.z),!e.plinth){const o=new lt(HM,WM);o.position.y=.04,o.receiveShadow=!0,s.add(o)}_t.add(s);const r={id:t||++Be.ids,type:i,def:n,mesh:s,x:e.x,z:e.z,y:e.y,level:1,cd:.3,plinth:e.plinth,onPlinth:!!e.plinth};return e.plinth&&(e.plinth.tower=r),nn.push(r),Ge.colliders.push({x:e.x,z:e.z,r:1,tower:r}),Rt.emit(e.x,e.y+.3,e.z,{n:24,color:"#ffe3a0",speed:4,up:3,life:.8,gravity:5}),Dt.build(),r}const HM=new jt(.95,1.05,.12,10),WM=new Xt({color:"#8a8478"}),Zi=new bt;{const i=new lt(new Lr(1,24),new Nt({transparent:!0,opacity:.35,depthWrite:!1}));i.rotation.x=-Math.PI/2;const e=new _s(.965,1,64);e.rotateX(-Math.PI/2);const t=new lt(e,new Nt({transparent:!0,opacity:.6,depthWrite:!1})),n=new lt(new jt(.55,.7,1.6,10),new Nt({transparent:!0,opacity:.25,depthWrite:!1}));n.position.y=.8,Zi.add(i,t,n),Zi.userData={disc:i,ring:t,pillar:n},Zi.visible=!1,Zi.renderOrder=20,_t.add(Zi)}function XM(i,e,t){if(Zi.visible=i,!i)return;const n=e.ok,s=n?e.plinth?"#9fffb0":"#7be06a":"#ff5a4a",r=zs[t].range*(e.plinth?et.plinthBonus:1);Zi.position.set(e.x,e.y+.06,e.z);const o=Zi.userData;for(const a of[o.disc,o.ring,o.pillar])a.material.color.set(s);o.ring.scale.setScalar(r),o.ring.visible=n,o.pillar.visible=!e.plinth}const Yi=(i,e)=>{const t=i.level-1;return e==="range"?i.def.range*(1+.12*t)*(i.onPlinth?et.plinthBonus:1):e==="dmg"?i.def.dmg*[1,1.7,2.6,3.9,5.85][t]:e==="rate"?i.def.cooldown/(1+.15*t):i.def[e]},ya=[];function Kd(i){const e=Td();bu(e,1),Qt.userData.roll.getWorldPosition(e.position),_t.add(e),ya.push({mesh:e,from:e.position.clone(),to:new V(i.x,i.y+1.3*i.mesh.scale.y,i.z),age:0})}function qM(i){for(let e=ya.length-1;e>=0;e--){const t=ya[e];t.age+=i;const n=Math.min(1,t.age/.45);t.mesh.position.lerpVectors(t.from,t.to,n),t.mesh.position.y+=Math.sin(n*Math.PI)*1.2,t.mesh.rotation.z+=i*14,n>=1&&(_t.remove(t.mesh),ya.splice(e,1),xs.emit(t.to.x,t.to.y+.3,t.to.z,{n:6,color:"#e8e2dc",speed:1.2,up:1.4,life:1.2,gravity:-.3}))}}function YM(i){for(const e of kt)e.K.rollP=-1;qM(i);for(const e of nn){if(e.cd-=i,e.upg&&Be.guest)Si(e,Math.min(1,e.upg.t/e.upg.dur));else if(e.upg){const c=kt.find(h=>{var d;return h.K.stun<=0&&((d=h.K.roll)==null?void 0:d.tower)===e})||null,u=!!c;Ui(c||pn,()=>{if(u)e.upg.t+=i,e.rollEase=(e.rollEase??0)+(Math.min(1,e.upg.t/e.upg.dur)-(e.rollEase??0))*(1-Math.exp(-i/.05)),I.rollP=Math.min(1,e.rollEase),I.rollTower=e;else if(e.upg.t>0){const h=Qt.userData.roll.getWorldPosition(Er);Rt.emit(h.x,h.y,h.z,{n:14,color:"#4f8f3a",speed:1.4,up:.8,life:.8,gravity:6}),Rt.emit(h.x,h.y,h.z,{n:5,color:"#fffdf5",speed:1,up:.6,life:.7,gravity:5}),e.upg.t=0,e.rollEase=0,e.upgReset=!0,Co("😩"),Ht.rumble(220,.5),on(`Rullingen ble avbrutt! Start på nytt ved ${e.def.name}`)}}),Si(e,Math.min(1,e.upg.t/e.upg.dur)),u&&Math.random()<i*8&&Rt.emit(c.K.x,c.mesh.position.y+2.2,c.K.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),e.upg.t>=e.upg.dur&&(!u||e.rollEase>=.97)&&(Ui(c||pn,()=>Kd(e)),Be.host&&Be.ev.push(["u",e.id,c?c.slot:-1]),c&&(c.K.rollP=-1,c.K.roll=null),e.rollEase=0,e.upg=null,e.level+=1,Su(e,e.level),Si(e,0),Rt.emit(e.x,e.y+1.2,e.z,{n:30,color:"#8ff0ff",speed:4,up:4,life:.9,gravity:5}),Dt.upgrade(),on(`${e.def.name} er nå nivå ${e.level}`))}if(e.armBack>0&&(e.armBack-=i,e.armBack<=0&&(e.mesh.userData.arm.rotation.x=-.35)),e.type==="lamp"&&e.mesh.userData.blobs.forEach((c,u)=>c.position.y=.75+Math.sin(q.time*.8+u*2.1)*.35),e.blind>0){e.blind-=i,Math.random()<i*8&&Rt.emit(e.x,e.y+2,e.z,{n:1,color:"#fff6c8",speed:.6,up:.8,life:.5,gravity:-.4});continue}const t=Yi(e,"range");let n=null,s=-1;for(const c of un){if(!c.alive||(c.def.flying?!e.def.air:e.def.ground===!1)||Math.hypot(c.x-e.x,c.z-e.z)>t)continue;const u=OM(c);u>s&&(s=u,n=c)}const r=e.mesh.userData.head;if(e.type==="speaker"){const c=Math.max(0,Math.sin(q.time*7.3));r.rotation.z=Math.sin(q.time*3.65)*.05,e.mesh.userData.woofers.forEach(u=>u.scale.set(1+c*.15,1,1+c*.15)),n&&(r.rotation.y+=Ra(Math.atan2(-(n.x-e.x),-(n.z-e.z)),r.rotation.y)*Math.min(1,i*3))}else if(n){const c=Math.atan2(-(n.x-e.x),-(n.z-e.z));r.rotation.y+=Ra(c,r.rotation.y)*Math.min(1,i*10)}if(!n||e.cd>0)continue;e.cd=Yi(e,"rate");const o=e.x,a=e.y+1.4*e.mesh.scale.y,l=e.z;if(e.type==="ring"){const c=P_();c.position.set(o,a-.3,l),_t.add(c),gi.push({kind:"bolt",src:e,mesh:c,target:n,dmg:Yi(e,"dmg"),tx:n.x,ty:n.y,tz:n.z,age:0}),Dt.puff()}else if(e.type==="chips"){const c=Rd();c.position.set(o,e.y+1,l),_t.add(c);const[u,h]=n.def.flying?[0,0]:An.dir(n.x,n.z),d=n.x+u*n.def.speed*.6,p=n.z+h*n.def.speed*.6;gi.push({kind:"shell",src:e,mesh:c,sx:o,sy:e.y+1,sz:l,ex:d,ez:p,ey:Ge.heightAt(d,p),t:0,dur:.95,dmg:Yi(e,"dmg"),splash:e.def.splash*(1+.1*(e.level-1))}),Rt.emit(o,e.y+1.3,l,{n:6,color:"#d8d0c0",speed:1,up:2,life:.5,gravity:-1}),Dt.mortar()}else if(e.type==="speaker"){for(const u of un)!u.alive||Math.hypot(u.x-e.x,u.z-e.z)>t||(u.def.noMood||(u.slow=e.def.slowTime),Is(u,Yi(e,"dmg"),e));const c=Pd();c.position.set(e.x,e.y+.3,e.z),_t.add(c),Sr.push({mesh:c,t:0,r:t}),Rt.emit(e.x,e.y+1.8,e.z,{n:6,color:["#7be06a","#f2c94c","#ff7a5a"][Math.floor(Math.random()*3)],speed:2.2,up:1.6,life:.9,gravity:.5}),Dt.skank()}else if(e.type==="bubble"){const c=Dd();c.position.set(o,a+.2,l),_t.add(c),gi.push({kind:"bubble",src:e,mesh:c,target:n,dmg:Yi(e,"dmg"),trap:e.def.trap,tx:n.x,ty:n.y,tz:n.z}),Dt.pickup()}else if(e.type==="kite"){if(gi.some(u=>u.kind==="kite"&&u.tower===e)){e.cd=.2;continue}const c=Br(Ld(),"tower");c.position.set(o,a,l),_t.add(c),gi.push({kind:"kite",mesh:c,tower:e,sx:o,sz:l,tx:n.x,tz:n.z,phase:"out",t:0,tick:0,dmg:Yi(e,"dmg"),zone:e.def.zone*(1+.1*(e.level-1)),hover:e.def.hover}),Dt.puff()}else if(e.type==="pizza"){const c=D_();c.position.set(o,e.y+1.2,l),_t.add(c);const[u,h]=An.dir(n.x,n.z),d=n.x+u*n.def.speed*1.1,p=n.z+h*n.def.speed*1.1;gi.push({kind:"shell",src:e,pizza:!0,mesh:c,sx:o,sy:e.y+1.2,sz:l,ex:d,ez:p,ey:Ge.heightAt(d,p),t:0,dur:1.3,arc:7,dmg:Yi(e,"dmg"),splash:e.def.splash*(1+.1*(e.level-1))}),e.mesh.userData.arm.rotation.x=.9,e.armBack=.5,Dt.mortar()}else if(e.type==="lamp"){for(const c of un)!c.alive||Math.hypot(c.x-e.x,c.z-e.z)>t||(c.slow=Math.max(c.slow,e.def.slowTime),Is(c,Yi(e,"dmg"),e));Math.random()<.3&&Rt.emit(e.x,e.y+1.6,e.z,{n:2,color:"#ff9a3a",speed:.8,up:1.2,life:.8,gravity:-.3})}}}function $M(i){var e;for(let t=gi.length-1;t>=0;t--){const n=gi[t];let s=!1;if(n.kind==="bolt"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y+(n.target.def.flying?0:.5),n.tz=n.target.z);const r=n.mesh.position,o=n.tx-r.x,a=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(o,a,l),u=18*i;n.age+=i,n.mesh.lookAt(n.tx,n.ty,n.tz),n.mesh.scale.setScalar(.7+n.age*2.2),c<=u+.3?(s=!0,n.target.alive&&(Is(n.target,n.dmg,n.src),xs.emit(n.tx,n.ty+.3,n.tz,{n:3,color:"#f4f0ea",speed:1,up:.8,life:.8,gravity:-.6}),Dt.hit())):r.set(r.x+o/c*u,r.y+a/c*u,r.z+l/c*u)}else if(n.kind==="shell"){n.t+=i/n.dur;const r=Math.min(1,n.t);if(n.mesh.position.set(n.sx+(n.ex-n.sx)*r,n.sy+(n.ey-n.sy)*r+Math.sin(Math.PI*r)*(n.arc||5),n.sz+(n.ez-n.sz)*r),n.mesh.rotation.set(r*9,r*5,0),n.t>=1){s=!0;for(const o of un){if(!o.alive||o.def.flying)continue;const a=Math.hypot(o.x-n.ex,o.z-n.ez);a<n.splash&&Is(o,n.dmg*(a<n.splash*.4?1:.6),n.src)}Rt.emit(n.ex,n.ey+.3,n.ez,{n:26,color:n.pizza?"#ff7040":"#ffd060",speed:5,up:5,life:.7,gravity:12}),xs.emit(n.ex,n.ey+.3,n.ez,{n:4,color:"#f6e7c0",speed:1.5,up:1,life:.8,gravity:-.3}),Dt.crunch(),Gn=Math.max(Gn,.12)}}else if(n.kind==="bubble"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y,n.tz=n.target.z);const r=n.mesh.position,o=n.tx-r.x,a=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(o,a,l),u=13*i;n.mesh.scale.setScalar(1+Math.sin(q.time*12)*.06),c<=u+.3?(s=!0,n.target.alive&&(Is(n.target,n.dmg,n.src),n.target.trap=Math.max(n.target.trap||0,n.trap*Math.min(1,((e=n.target.def.resist)==null?void 0:e.bubble)??1))),Rt.emit(n.tx,n.ty,n.tz,{n:6,color:"#dff6ff",speed:2,up:1,life:.35})):r.set(r.x+o/c*u,r.y+a/c*u,r.z+l/c*u)}else if(n.kind==="kite"){n.t+=i;const r=n.mesh.position;if(n.mesh.userData.tailSegs.forEach((o,a)=>{o.rotation.x=Math.sin(q.time*5-a*.9)*.35,o.rotation.z=Math.sin(q.time*3.7-a*.7)*.25}),nn.includes(n.tower)||(n.phase="back"),n.phase==="out"){const o=n.tx-r.x,a=n.tz-r.z,l=Math.hypot(o,a),c=9*i;r.y+=(4.2-r.y)*Math.min(1,i*2),l<c?(n.phase="hover",n.t=0):(r.x+=o/l*c,r.z+=a/l*c)}else if(n.phase==="hover"){if(r.x=n.tx+Math.sin(q.time*1.7)*.6,r.z=n.tz+Math.cos(q.time*1.3)*.4,r.y=4.2+Math.sin(q.time*2.3)*.3,n.tick-=i,n.tick<=0){n.tick=.25;for(const o of un)o.alive&&o.def.flying&&Math.hypot(o.x-r.x,o.z-r.z)<n.zone&&(Is(o,n.dmg*.4,n.tower),o.slow=Math.max(o.slow,.4));Rt.emit(r.x,r.y-.3,r.z,{n:2,color:"#ffd0b0",speed:1.5,up:-.5,life:.5,gravity:0})}n.t>n.hover&&(n.phase="back")}else{const o=n.sx-r.x,a=n.sz-r.z,l=Math.hypot(o,a),c=11*i;l<c?s=!0:(r.x+=o/l*c,r.z+=a/l*c)}n.mesh.rotation.set(Math.sin(q.time*3)*.2,q.time*.5,Math.cos(q.time*2.5)*.25)}s&&(_t.remove(n.mesh),gi.splice(t,1))}for(let t=Sr.length-1;t>=0;t--){const n=Sr[t];n.t+=i/(n.dur||.6),n.mesh.scale.setScalar(.5+n.t*n.r),n.mesh.material.opacity=.7*(1-n.t),n.t>=1&&(_t.remove(n.mesh),n.mesh.material.dispose(),Sr.splice(t,1))}}function jM(i){var e,t;for(const n of un){if(!n.alive)continue;n.phase+=i*n.def.anim;const s=n.slow>0?.5:1;n.slow-=i;let r=n.def.speed*s*(n.speedMul||1);n.trap>0?(n.trap-=i,r*=.15,n.bubbleFx||(n.bubbleFx=Dd(),n.bubbleFx.scale.setScalar(3.2),n.mesh.add(n.bubbleFx)),n.bubbleFx.visible=!0):n.bubbleFx&&(n.bubbleFx.visible=!1);const o=n.mesh.userData.body;if(n.def.flying){const l=Ge.lighthouse.pos;let c=l.x-n.x,u=l.z-n.z;const h=Tu(n.x,n.z),d=h.K,p=Math.hypot(d.x-n.x,d.z-n.z);let g=n.trap>0?1.1:n.def.alt||4.2;if(n.def.swoop&&p<6&&d.stun<=0&&n.hitCd<=0&&!(n.trap>0)){const x=Math.hypot(c,u);c=c/x*.5+(d.x-n.x)/p*.9,u=u/x*.5+(d.z-n.z)/p*.9,g=1.5}n.hitCd-=i;const M=Math.hypot(c,u)||1,m=Math.cos(q.time*1.3+n.lane*4)*(n.type==="balloon"?.4:1.2);n.x+=(c/M+-u/M*m*.35)*r*i,n.z+=(u/M+c/M*m*.35)*r*i,n.mesh.rotation.z=-m*(n.type==="balloon"?.05:.25);const f=Math.max(Ge.heightAt(n.x,n.z),0);n.y+=(f+g-n.y)*Math.min(1,i*2.5);const _=n.mesh.userData.blob;_&&(_.position.y=(f-n.y)/n.var+.05,_.material.opacity=1,_.scale.setScalar(1)),n.mesh.rotation.y=Math.atan2(-c,-u);const y=n.mesh.userData;if((e=y.wings)==null||e.forEach((x,C)=>x.rotation.z=Math.sin(n.phase)*.45*(C?-1:1)),(t=y.rotors)==null||t.forEach(x=>x.rotation.y+=i*40),y.rotor&&(y.rotor.rotation.y+=i*30,y.tail.rotation.x+=i*30),o.position.y=Math.sin(n.phase*.5)*(n.type==="balloon"?.3:.15),n.def.blind&&(n.blindCd=(n.blindCd??n.def.blind.every*.5)-i,y.beam&&(y.beam.visible=n.blindCd>n.def.blind.every-.8),n.blindCd<=0)){n.blindCd=n.def.blind.every;const x=Ws(nn,n.x,n.z,n.def.blind.range);x&&(x.blind=n.def.blind.dur,on(`${n.def.name} blendet ${x.def.name}!`)),p<5&&Ui(h,()=>Xc(et.airStress,n.x,n.z,!0))}n.def.swoop&&p<1.3&&Math.abs(n.y-h.mesh.position.y-1)<1.4&&d.stun<=0&&n.hitCd<=0&&Ui(h,()=>JM(n)),Math.hypot(l.x-n.x,l.z-n.z)<3.4&&Wc(n)}else{const[l,c,u]=An.dir(n.x,n.z);n.remain=u;const h=Ge.lighthouse.pos,d=Math.hypot(h.x-n.x,h.z-n.z);if(d<4.3||u<.6){Wc(n);continue}let p=l,g=c;!p&&!g&&(p=(h.x-n.x)/d,g=(h.z-n.z)/d),n.hx=(n.hx||0)+(p-(n.hx||0))*Math.min(1,i*6),n.hz=(n.hz||0)+(g-(n.hz||0))*Math.min(1,i*6);const M=Math.hypot(n.hx,n.hz)||1,m=n.lane*Math.min(1,d/10);n.x+=n.hx/M*r*i+-n.hz/M*m*i*.5,n.z+=n.hz/M*r*i+n.hx/M*m*i*.5,n.y=Ge.heightAt(n.x,n.z),n.mesh.rotation.y=Math.atan2(-n.hx,-n.hz);for(const f of kt){const _=f.K;_.inv<=0&&_.faint<=0&&Math.abs(_.x-n.x)<1.2&&Math.abs(_.z-n.z)<1.2&&Math.hypot(_.x-n.x,_.z-n.z)<1.1&&Ui(f,()=>Xc(n.def.stress??10,n.x,n.z))}if(n.type==="clerk")o.position.y=Math.abs(Math.sin(n.phase))*.12,o.rotation.z=Math.sin(n.phase)*.06,n.mesh.userData.arm.position.y=.9+Math.max(0,Math.sin(n.phase*.5))*.25;else if(n.type==="tank"){const f=Math.abs(Math.sin(n.phase));o.position.y=f*.05,o.rotation.z=Math.sin(n.phase)*.07;const _=Math.pow(1-f,6);o.scale.set(1+_*.06,1-_*.08,1+_*.06)}else n.type==="swarm"?(o.position.y=Math.abs(Math.sin(n.phase))*.14,o.rotation.y=Math.sin(n.phase*.5)*.3):n.type==="complainer"?(o.position.y=Math.abs(Math.sin(n.phase))*.16,n.mesh.userData.arm.rotation.z=Math.sin(n.phase*.5)*.4):n.type==="lobbyist"||n.type==="lobbyMini"?(o.position.y=Math.abs(Math.sin(n.phase))*.05,o.rotation.z=Math.sin(n.phase*.5)*.17):n.type==="auditor"?(o.position.y=Math.abs(Math.sin(n.phase))*.03,o.rotation.z=0):(o.position.y=Math.abs(Math.sin(n.phase))*.08,o.rotation.z=Math.sin(n.phase)*.05)}if(n.hitT>0){n.hitT-=i;const l=Math.max(0,n.hitT)/.18;o.scale.set(1+l*.16,1-l*.16,1+l*.16),o.position.z=l*.15,n.hitT<=0&&(o.scale.set(1,1,1),o.position.z=0)}n.blinkT-=i,n.blinkT<-.12&&(n.blinkT=2+Math.random()*3.5);for(const l of n.mesh.userData.eyes)l.scale.y=n.blinkT<0?.12:1;n.mesh.position.set(n.x,n.y,n.z),n.slow>0&&Math.random()<i*6&&Rt.emit(n.x,n.y+.8,n.z,{n:1,color:"#b8e6ff",speed:.4,up:.6,life:.6,gravity:-.5});const a=n.mesh.userData.hpBar;if(a.visible){a.quaternion.copy($t.quaternion),a.quaternion.premultiply(n.mesh.quaternion.clone().invert());const l=Math.max(0,n.hp/n.maxHp),c=n.mesh.userData.hpFg;c.scale.x=.96*l,c.position.x=-.48*(1-l),c.material.color.setHSL(.33*(1-l),.7,.55)}}for(let n=un.length-1;n>=0;n--)un[n].alive||un.splice(n,1)}function Wc(i,e=!1){if(Be.guest&&!e)return;Be.host&&Be.ev.push(["l",i.id]),q.leaks[i.type]=(q.leaks[i.type]||0)+1,i.alive=!1,_t.remove(i.mesh),q.lights=Math.max(0,q.lights-1),Ge.lighthouse.setLights(q.lights),Hn(rn.lights,"lights",q.lights,"bad");const t=Ge.lighthouse.flamePos();xs.emit(t.x,t.y,t.z,{n:10,color:"#b8b4b0",speed:.8,up:1.6,life:1.8,gravity:-.4}),Rt.emit(t.x,t.y,t.z,{n:14,color:"#8a8580",speed:1.6,up:.6,life:1.6,gravity:4}),on(`${i.def.name} slukket litt glød!`),Dt.lose(),Gn=.3,q.lights<=0&&!Be.guest&&Iu(!1)}const Bn=[],Mi=document.createElement("div");Mi.id="chillbar";Mi.innerHTML="<i></i>";document.body.appendChild(Mi);let Ef=0;function Co(i){if(!pn.local)return;const e=document.createElement("div");e.className="pop-emoji",e.textContent=i,yt.set(I.x,Qt.position.y+2.6,I.z).project($t),e.style.left=`${(yt.x*.5+.5)*innerWidth}px`,e.style.top=`${(-yt.y*.5+.5)*innerHeight}px`,document.body.appendChild(e),setTimeout(()=>e.remove(),900)}function Xc(i,e,t,n=!1){if(!Be.guest&&!(I.faint>0||I.inv>0)){if(I.chill=Math.max(0,I.chill-i),I.inv=et.stressInvuln,I.flinch=.55,!n){const s=I.x-e,r=I.z-t,o=Math.hypot(s,r)||1;I.vx+=s/o*et.stressPush,I.vz+=r/o*et.stressPush,I.goal=null}Rt.emit(I.x,Qt.position.y+1.4,I.z,{n:8,color:"#ff6a5a",speed:2,up:1.5,life:.4}),Co("😓"),Mi.classList.remove("hit"),Mi.offsetWidth,Mi.classList.add("hit"),Hn(rn.chill,"chillBad",Math.random(),"bad"),I.chill<=0&&KM()}}function KM(){I.faint=et.faintTime,I.stun=et.faintTime,I.faints++,I.goal=null,I.vx=I.vz=0;const i=Math.floor(q.embers*et.faintLoss);i>0&&(q.embers-=i,Lu(I.x,Qt.position.y+1,I.z,i,!1,1.6)),I.carrying&&(I.carrying=!1),Co("😵"),on(`😵 Vokteren besvimte av stress! Våkner ved fyret om ${et.faintTime} s`),Dt.stun()}function Du(i,e,t=0){if(Be.guest&&!t)return;const n=Rd();n.scale.setScalar(1.8),n.position.set(i,Ge.heightAt(i,e)+.5,e),_t.add(n),Bn.push({id:t||++Be.ids,mesh:n,x:i,z:e,life:et.bagLife})}function ZM(i){if(Be.guest){pn.local&&Tf();return}I.inv-=i;const e=Ge.lighthouse.pos;I.faint>0?(I.faint-=i,I.faint<=0&&(I.x=e.x+1,I.z=e.z+7.5,I.vx=I.vz=0,I.stun=0,I.chill=et.chillMax*et.wakeChill,I.inv=et.stressInvuln*2,Rt.emit(I.x,Ge.heightAt(I.x,I.z)+1,I.z,{n:14,color:"#9fffb0",speed:2,up:2,life:.7}))):Math.hypot(e.x-I.x,e.z-I.z)<et.regenReach&&(I.chill=Math.min(et.chillMax,I.chill+et.regen*i));for(let t=Bn.length-1;pn===kt[0]&&t>=0;t--){const n=Bn[t];n.life-=i,n.mesh.rotation.y+=i*1.5,n.mesh.position.y=Ge.heightAt(n.x,n.z)+.5+Math.sin(q.time*3+t)*.12,n.mesh.visible=n.life>4||Math.sin(n.life*12)>0;const s=Tu(n.x,n.z,r=>r.K.faint<=0&&Math.hypot(n.x-r.K.x,n.z-r.K.z)<1.4);s&&Ui(s,()=>{I.chill=Math.min(et.chillMax,I.chill+et.bagHeal),on(`🥔 Chips! +${et.bagHeal} chill`),Co("😌"),Dt.pickup(),n.life=0}),n.life<=0&&(_t.remove(n.mesh),Bn.splice(t,1))}pn.local&&Tf()}function Tf(){const i=Math.round(I.chill);Hn(rn.chill,"chill",i),rn.chill.classList.toggle("low",i<30),i!==Ef&&(Ef=i,Mi.firstChild.style.width=`${100*I.chill/et.chillMax}%`,Mi.classList.toggle("low",i<30));const e=(i<et.chillMax||I.faint>0)&&q.phase!=="title";Mi.style.display=e?"block":"none",e&&(yt.set(I.x,Qt.position.y+2.3,I.z).project($t),Mi.style.left=`${(yt.x*.5+.5)*innerWidth}px`,Mi.style.top=`${(-yt.y*.5+.5)*innerHeight}px`)}function JM(i){if(Be.guest||(Be.host&&Be.ev.push(["st",pn.slot]),Xc(et.airStress,i.x,i.z,!0),I.faint>0))return;I.stun=et.stunTime,i.hitCd=4;const e=Math.floor(q.embers*et.stunLoss);e>0&&(q.embers-=e,Lu(I.x,Qt.position.y+1,I.z,e,!1,1.6)),I.carrying&&(I.carrying=!1,on("Rullepapiret blåste bort!")),Rt.emit(I.x,Qt.position.y+1.5,I.z,{n:16,color:"#ffffff",speed:3,up:2,life:.5}),Dt.stun(),Gn=.2}function QM(i){if(Be.guest){Sy(i);return}for(let e=Wn.length-1;e>=0;e--){const t=Wn[e];t.life-=i,t.phase+=i;const n=Math.max(Ge.heightAt(t.x,t.z),.1)+.35;t.settled||(t.vy-=16*i,t.x+=t.vx*i,t.z+=t.vz*i,t.y+=t.vy*i,t.y<=n&&(t.y=n,Math.abs(t.vy)>2.5?(t.vy=-t.vy*.4,t.vx*=.6,t.vz*=.6):t.settled=!0));const s=Tu(t.x,t.z,u=>u.K.stun<=0),r=s==null?void 0:s.K,o=r?Math.hypot(r.x-t.x,r.z-t.z):1/0;if(o<et.magnet){const u=(1-o/et.magnet)*14+3;t.x+=(r.x-t.x)/o*u*i,t.z+=(r.z-t.z)/o*u*i,t.settled=!0,t.y=n}const a=t.settled?Math.sin(t.phase*3)*.12:0;t.mesh.position.set(t.x,t.y+a,t.z),t.mesh.rotation.y+=i*3;const l=t.life<5,c=(.8+Math.min(t.value,6)*.08)*(l?.55+.45*(t.life/5):1);if(t.mesh.scale.setScalar(c),t.mesh.visible=!l||Math.sin(t.life*(t.life<1.5?30:16))>-.4,Math.random()<i*2.5&&Rt.emit(t.x,t.y+.2,t.z,{n:1,color:"#ffb347",speed:.3,up:1.2,life:.6,gravity:-.5}),o<.9)q.embers+=t.value,Hn(rn.embers,"embers",q.embers,"bump"),Rt.emit(t.x,t.y+.3,t.z,{n:8,color:"#ffe08a",speed:2,up:2.5,life:.4}),Dt.pickup(),_t.remove(t.mesh),Wn.splice(e,1);else if(t.life<=0){const u=Math.max(1,Math.round(t.value*et.expiredRefund));q.embers+=u,Rt.emit(t.x,t.y,t.z,{n:6,color:"#555048",speed:.6,up:1,life:.8,gravity:-.6}),_t.remove(t.mesh),Wn.splice(e,1)}}}let Ca=0,Zd="";function on(i){var e;if(!pn.local){(e=pn.hints)==null||e.push(i);return}Ca=2,Zd=i,Qi.textContent=""}function Af(i){for(const e of kt)Ui(e,()=>ey(i))}function ey(i){var L,z;const e=Qt.userData;(q.phase==="prep"||q.phase==="wave")&&ZM(i),I.stun-=i,e.stars.visible=I.stun>0,e.stars.rotation.y+=i*6;let t=0,n=0;if(I.stillT=!Ht.move.x&&!Ht.move.z&&!I.goal?I.stillT+i:0,I.roll)I.goal=null;else if(I.stun<=0&&(q.phase==="prep"||q.phase==="wave")){if(Ht.move.x||Ht.move.z){I.goal=null;const U=Ht.yaw??Ki,W=Math.cos(U),D=Math.sin(U);t=Ht.move.x*W+Ht.move.z*D,n=-Ht.move.x*D+Ht.move.z*W}else if(I.goal){const U=I.goal,W=U.x-I.x,D=U.z-I.z;if(U.field===void 0){U.field=null;const Y=Math.ceil(Math.hypot(W,D)/.5);for(let Q=1;Q<Y;Q++)if(!Ge.isWalkable(I.x+W*Q/Y,I.z+D*Q/Y)){U.field=An.walkField(U.x,U.z);break}}const k=U.field?Math.min(U.field.at(I.x,I.z),Math.hypot(W,D)+50):Math.hypot(W,D);U.t+=i;const G=k<.35||U.spot&&Math.hypot(U.spot.x-I.x,U.spot.z-I.z)<U.reach;if(k<U.best-.3&&(U.best=k,U.lastGain=U.t),G||U.t>12||U.t-U.lastGain>1.5)I.goal=null;else{const Y=Math.min(1,k/.8),Q=U.field&&Math.hypot(W,D)>1.5?U.field.dir(I.x,I.z):null,se=Q&&(Q[0]||Q[1])?Q[0]:W/Math.hypot(W,D),Ee=Q&&(Q[0]||Q[1])?Q[1]:D/Math.hypot(W,D);t=se,n=Ee;for(const H of Ge.colliders){if(U.spot&&H.x===U.spot.x&&H.z===U.spot.z)continue;const Z=H.x-I.x,he=H.z-I.z,oe=Z*se+he*Ee;if(oe<=0||oe>H.r+2.2||oe>k)continue;const me=-Z*Ee+he*se;if(Math.abs(me)>H.r+.6)continue;const Le=(1-Math.abs(me)/(H.r+.6))*1.6*(me>=0?1:-1);t-=-Ee*Le,n-=se*Le}const ke=Math.hypot(t,n)||1;t=t/ke*Y,n=n/ke*Y}}}Be.guest&&!pn.local&&(My(i),t=n=0);const r=Ge.heightAt(I.x,I.z)<.05,o=et.keeperSpeed*(I.carrying?et.carrySlow:1)*(r?et.wadeSlow:1),a=t*o,l=n*o,c=(L=Ge.isIce)!=null&&L.call(Ge,I.x,I.z)?1.6:12;Be.guest&&!pn.local||(I.vx+=(a-I.vx)*Math.min(1,i*c),I.vz+=(l-I.vz)*Math.min(1,i*c));let u=I.x+I.vx*i,h=I.z+I.vz*i;Be.guest&&!pn.local&&(u=I.x,h=I.z),Ge.isWalkable(u,h)||(Ge.isWalkable(u,I.z)?h=I.z:Ge.isWalkable(I.x,h)?u=I.x:(u=I.x,h=I.z));for(const U of Ge.colliders){const W=u-U.x,D=h-U.z,k=Math.hypot(W,D),G=U.r+.4;k<G&&k>1e-4&&(u=U.x+W/k*G,h=U.z+D/k*G)}I.x=u,I.z=h;const d=Math.hypot(I.vx,I.vz);if(d>.3){const U=Math.atan2(-I.vx,-I.vz);I.face+=Ra(U,I.face)*Math.min(1,i*12),I.walk+=i*d*2.2}if(Qt.rotation.y=I.face,Qt.position.set(I.x,Math.max(Ge.heightAt(I.x,I.z),-.25),I.z),r&&d>1&&(I.splash=(I.splash||0)-i,I.splash<=0)){I.splash=.22,Rt.emit(I.x,.15,I.z,{n:4,color:"#e8fbff",speed:1.6,up:2.2,life:.35,gravity:12});const U=Pd();U.position.set(I.x,.1,I.z),U.material.color.set("#f4fdff"),_t.add(U),Sr.push({mesh:U,t:0,r:1.6,dur:.9})}const p=Math.min(1,d/3),g=Math.sin(I.walk)*p;e.legs[0].position.z=g*.2,e.legs[1].position.z=-g*.2,e.legs[0].position.y=.2+Math.max(0,g)*.12,e.legs[1].position.y=.2+Math.max(0,-g)*.12;const M=d>.6;M!==!!I.wasMoving&&(I.sq=M?1:-1,I.wasMoving=M),I.sq=(I.sq||0)*Math.exp(-i*7);const m=d<.3?Math.sin(q.time*2.2)*.025:0;e.body.scale.set(1-m*.5-I.sq*.07,1+m+I.sq*.12,1-m*.5-I.sq*.07);const f=Math.sign(Math.sin(I.walk));d>2&&!r&&f!==I.lastStep&&Rt.emit(I.x,Qt.position.y+.1,I.z,{n:2,color:"#d9c9a4",speed:.7,up:.6,life:.45,gravity:1}),I.lastStep=f,I.flinch=Math.max(0,(I.flinch||0)-i),I.cheer=Math.max(0,(I.cheer||0)-i);const _=d>.5&&((z=Ge.isIce)==null?void 0:z.call(Ge,I.x,I.z)),y=Math.abs(g)*.09+(I.cheer>0?Math.abs(Math.sin(I.cheer*9))*.35:0);if(I.sit=(I.sit??0)+((I.roll?1:0)-(I.sit??0))*Math.min(1,i*10),e.body.position.y=y-I.sit*.24,I.sit>.01)for(const U of e.legs)U.position.z-=I.sit*.3,U.position.y+=I.sit*.12;e.body.rotation.x=I.faint>0?0:-.35*Math.min(1,I.flinch*2.5),e.body.rotation.z=I.faint>0?1.45:I.stun>0?.5:g*.05+(_?Math.sin(q.time*7)*.12:0)+(I.flinch>0?Math.sin(I.flinch*40)*.08:0);let x=g*.6,C=-g*.45,S=0,E=0;_&&(S=-1.25+Math.sin(q.time*9)*.25,E=1.25+Math.cos(q.time*8)*.25,x=C=0),I.cheer>0&&(x=C=-2.9,S=-.3,E=.3),I.flinch>0&&(x=-2.5,S=.5);const T=I.rollP>=0&&d<.3&&I.faint<=0;if(T){const U=Math.sin(q.time*7)*.12;x=1.35+U,S=.55,C=1.35-U,E=-.55;const W=I.rollTower,D=Math.atan2(-(W.x-I.x),-(W.z-I.z));if(I.face+=Ra(D,I.face)*Math.min(1,i*8),Qt.rotation.y=I.face,bu(e.roll,I.rollP),e.roll.rotation.x=Math.sin(q.time*7)*.5,Math.random()<i*4&&I.rollP<.5){const k=e.roll.getWorldPosition(Er);Rt.emit(k.x,k.y,k.z,{n:1,color:"#5aa84a",speed:.4,up:.3,life:.5,gravity:4})}}e.roll.visible=T,e.armR.visible=T,T?e.lanternArm.position.set(.36,.72,.18):e.lanternArm.position.set(.48,1,-.1);const b=Math.min(1,i*14);e.armL.rotation.x+=(x-e.armL.rotation.x)*b,e.armL.rotation.z+=(S-e.armL.rotation.z)*b;const v=T?e.armR:e.lanternArm;T&&e.lanternArm.rotation.set(0,0,0),v.rotation.x+=(C-v.rotation.x)*b,v.rotation.z+=(E-v.rotation.z)*b,I.idle=d<.3?(I.idle||0)+i:0;const A=I.idle>2?Math.sin(q.time*.55)*.7*Math.min(1,(I.idle-2)/1.5):0;e.head.rotation.y+=(A-e.head.rotation.y)*Math.min(1,i*4),I.blink=(I.blink??2)-i,I.blink<-.12&&(I.blink=2+Math.random()*3);for(const U of e.eyes)U.scale.y=I.faint>0?.1:I.blink<0?.12:1;e.carried.visible=I.carrying,I.chargeTower?(e.carried.position.lerp(Er.set(0,.95,-.5),Math.min(1,i*14)),e.carried.rotation.y=0,e.carried.scale.setScalar(Math.max(.55,e.carried.scale.x-i*3))):(e.carried.rotation.y+=i*2,e.carried.scale.setScalar(1),e.carried.position.set(0,2.35+Math.sin(q.time*3)*.08,0)),Eu.intensity=Hd*(1+Math.sin(q.time*11)*.115)}function ty(){for(const i of xt.clicks.splice(0)){Sf.setFromCamera(i,$t);const e=Sf.intersectObject(Ge.terrain)[0];e&&(Be.guest&&(Be.goal=[e.point.x,e.point.z]),Jd(e.point.x,e.point.z))}}function Jd(i,e){const t=Ge.lighthouse.pos,n=Ws(Ge.plinths,i,e,2.2)||(Math.hypot(t.x-i,t.z-e)<4.5?{x:t.x,z:t.z,big:!0}:null);if(n){const s=n.big?4.3:1.95;let r=I.x-n.x,o=I.z-n.z;const a=Math.hypot(r,o)||1;i=n.x+r/a*s,e=n.z+o/a*s}I.goal={x:i,z:e,t:0,best:1/0,lastGain:0,spot:n,reach:n?n.big?et.lighthouseReach-.4:et.reach-.25:0},Rt.emit(i,Ge.heightAt(i,e)+.2,e,{n:6,color:"#fff3d0",speed:1.5,up:.5,life:.35,gravity:0})}function Fs(i=!q.paused,e=!1){q.paused=i;const t=xt.labels();ct("pause-keys").textContent=`${t.name}: fortsett med ${t.pause} · start på nytt med ${t.restart}`,ct("pad-help").classList.toggle("hidden",xt.padSeen),ct("pause").classList.toggle("hidden",!i),ct("confirm").classList.toggle("hidden",!e),q.confirming=i&&e}try{sessionStorage.getItem("glod-portrait")&&document.documentElement.classList.add("portrait-ok")}catch{}ct("btn-portrait").addEventListener("click",()=>{document.documentElement.classList.add("portrait-ok");try{sessionStorage.setItem("glod-portrait","1")}catch{}Ao()});ct("btn-resume").addEventListener("click",()=>Fs(!1));ct("btn-restart").addEventListener("click",()=>Fs(!0,!0));ct("btn-yes").addEventListener("click",()=>wr());ct("btn-no").addEventListener("click",()=>Fs(!0,!1));ct("btn-worlds").addEventListener("click",()=>{location.href=`${location.pathname}?world=${yn}`});ct("btn-lex").addEventListener("click",()=>{const i=ct("lex");i.innerHTML||(i.innerHTML=Object.entries(wo).filter(([e])=>e!=="lobbyMini").map(([e,t])=>{const{tough:n,weak:s}=qd(t);return`<div class="lex-row"><b>${t.flying?"🪶":"🐾"} ${t.name}</b><small>${t.info||(t.flying?"flyr rett mot fyret":"går langs veien")}</small><span>${n?`🛡️ ${n}`:""} ${s?`💥 ${s}`:""}</span></div>`}).join("")+`<p class="lex-key">🛡️ tåler · 💥 svak mot · ${Object.entries(Vc).map(([e,t])=>`${t} ${zs[e].name}`).join(" · ")} · 📒 skjold forfra</p>`),i.classList.toggle("hidden")});function wr(){Be.host&&Be.net.broadcast({t:"restart"}),Be.guest&&(Be.snap=null);for(const i of ji)i.el.remove();ji.length=0;for(const i of[un,co,Wn,gi,Sr]){for(const e of i)e.mesh&&_t.remove(e.mesh);i.length=0}for(const i of nn)_t.remove(i.mesh);nn.length=0,yo.innerHTML="",Ta.length=0;for(const i of Ge.plinths)i.tower=null;for(let i=Ge.colliders.length-1;i>=0;i--)Ge.colliders[i].tower&&Ge.colliders.splice(i,1);q.buildMode=!1;for(const i of kt)i.K.chargeTower&&Si(i.K.chargeTower,0);Object.assign(q,{phase:"title",wave:0,timer:0,embers:et.startEmbers,lights:Ir,spawnQueue:[],leaks:{},seen:{},waveClock:0,sel:0,paused:!1,confirming:!1});for(const i of kt){const{walk:e,face:t,...n}=Wd(i.slot);Object.assign(i.K,n),i.sel=0,i.buildMode=!1}for(const i of Bn)_t.remove(i.mesh);Bn.length=0,Ge.lighthouse.setLights(Ir),uy(),Gn=0,Ca=0,ei={},Hn(rn.lights,"lights",q.lights),Hn(rn.embers,"embers",q.embers),Hn(rn.wave,"wave",0),rn.timer.textContent="",ct("pause").classList.add("hidden"),ct("confirm").classList.add("hidden"),ct("overlay").classList.add("hidden"),xt.clear(),q.phase="title",zr(!0),window.__restarts=(window.__restarts||0)+1}function ny(){Gd.sync();const i=xt.device,e=!!I.roll&&i==="touch"&&!q.paused;if(ct("rollpad").classList.toggle("hidden",!e),e!==ei.rollTouch&&(ei.rollTouch=e,ei.device=null),e&&ct("touch").classList.add("hidden"),ei.device===i+xt.padKind)return;ei.device=i+xt.padKind;const t=xt.labels();ct("touch").classList.toggle("hidden",i!=="touch"||q.phase==="title"||e),Ei.querySelectorAll("button i").forEach((n,s)=>{n.textContent=i==="pad"?s===q.sel?t.build:"":i==="touch"?"":String(s+1)}),Au.textContent="Neste bølge ▶",ei.sel=-1}const qc={still:.3,step:.25,bonus:.1},Yc=["rU","rR","rD","rL"];function Qd(i){const e=Math.min(8,Math.max(4,i.level+3));return Array.from({length:e},()=>Yc[Math.floor(Math.random()*4)])}function iy(i,e){const t=i!=null&&i.upg&&!I.carrying&&!e?i:null;if(I.rollBlock&&I.rollBlock!==t&&(I.rollBlock=null),I.roll&&I.roll.tower!==t&&(I.roll=null),!I.roll&&t&&(Ht.consume("build")||Ht.consume("carry")||I.rollBlock!==t&&I.stillT>=qc.still)&&(I.roll={tower:t,seq:Qd(t),i:0,shake:!1,done:0},I.goal=null,I.vx=I.vz=0),Ht.rollMode=!!I.roll,!I.roll){for(const n of[...Yc,"rollExit"])Ht.consume(n);return}if(Ht.consume("build"),Ht.consume("carry"),Ht.consume("rollExit")){I.rollBlock=I.roll.tower,I.roll=null,Ht.rollMode=!1;return}for(const n of Yc)Ht.consume(n)&&sy(n)}function sy(i){const e=I.roll,t=e.tower.upg;i===e.seq[e.i]?(e.i++,t.t=Math.min(t.dur,t.t+t.dur*qc.step/e.seq.length),Dt.tick(e.i),e.i>=e.seq.length&&(t.t=Math.min(t.dur,t.t+t.dur*qc.bonus),e.seq=Qd(e.tower),e.i=0,e.done++,Dt.stone(),Rt.emit(I.x,Qt.position.y+2.2,I.z,{n:10,color:"#8ff0ff",speed:1.6,up:1.6,life:.6,gravity:2}))):(e.i=0,e.shake=!0,e.shakes=(e.shakes||0)+1,Dt.bonk(),Ht.rumble(150,.4))}function ry(i){if(xt.consume("fps")&&Cu.classList.toggle("hidden"),xt.consume("music")&&ip(),ny(),q.phase==="title"){["build","carry","next","pause"].some(t=>xt.consume(t))&&zr();for(const t of kt)t.input.clear();return}if(Hn(rn.embers,"embers",q.embers),!(q.phase==="prep"||q.phase==="wave")){if((q.phase==="won"||q.phase==="lost")&&xt.consume("restart")){wr();return}xt.clear(),Ei.classList.add("hidden"),Gc("");return}if(xt.consume("restart")){Be.guest?on("Bare verten kan starte på nytt"):q.confirming?wr():Fs(!0,!0);return}if(xt.consume("pause")&&(Be.guest?on("Bare verten kan pause"):Fs(!q.paused)),q.confirming){if(xt.consume("build")||xt.consume("next")){wr();return}xt.consume("carry")&&Fs(!0,!1)}if(q.paused){for(const t of kt)t.input.clear();Be.guest&&Gc("⏸ Verten har pauset");return}ty();for(const t of kt)Ui(t,()=>oy(i))}function oy(i){if(Be.guest){wy(i);return}Ht.consume("next")&&q.phase==="prep"&&(q.timer=0),Ht.consume("selPrev")&&(q.sel=(q.sel+Di.length-1)%Di.length),Ht.consume("selNext")&&(q.sel=(q.sel+1)%Di.length);const e=Ws(Ge.plinths,I.x,I.z,et.reach,c=>!c.tower),t=Ws(nn,I.x,I.z,et.reach),n=Ge.lighthouse.pos,s=Math.hypot(n.x-I.x,n.z-I.z)<et.lighthouseReach,r=I.stun>0;iy(t,r);const o=Va();Ht.consume("build")&&!r&&(q.buildMode||e?Aa(Di[q.sel]):q.buildMode=!0),Di.forEach((c,u)=>{Ht.consume("b"+(u+1))&&!r&&(q.sel=u,Aa(c))});const a=(q.buildMode||!!e)&&!r&&!I.carrying;pn.panelOpen=a,Ht.consume("carry")&&!r&&(!I.carrying&&s?q.embers>=et.stoneCost?(q.embers-=et.stoneCost,I.carrying=!0,Hn(rn.embers,"embers",q.embers,"bump"),Rt.emit(I.x,Qt.position.y+2.3,I.z,{n:14,color:"#8ff0ff",speed:2,up:2,life:.6,gravity:2}),Dt.stone()):(Dt.deny(),on(`Rullepapir koster ${et.stoneCost} ✦`)):I.carrying&&s?(I.carrying=!1,q.embers+=et.stoneCost,Dt.stone(),on("Rullepapiret er lagt tilbake")):!I.carrying&&q.buildMode?q.buildMode=!1:I.carrying?t||on("Bær rullepapiret til et tårn"):on("Rullepapir hentes ved fyret"));const l=I.carrying&&!r&&t&&t.level<Bc&&!t.upg?t:null;l!==I.chargeTower&&(I.chargeTower&&Si(I.chargeTower,0),I.chargeTower=l,I.charge=0),l&&(I.charge+=i/et.chargeTime,Si(l,Math.min(1,I.charge)),Math.random()<i*20&&Rt.emit(I.x,Qt.position.y+2.2,I.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),I.charge>=1&&(l.upg={t:0,dur:et.upgradeTime[l.level-1]},I.carrying=!1,I.chargeTower=null,I.charge=0,Rt.emit(l.x,l.y+1.2,l.z,{n:12,color:"#8ff0ff",speed:2,up:2,life:.6}),Dt.stone(),on(`${l.def.name}: stå stille og rull – pilene går fortere`))),pn.local&&ep(i,{panelOpen:a,spot:o,tower:t,atLighthouse:s,stunned:r,target:l})}function ep(i,{panelOpen:e,spot:t,tower:n,atLighthouse:s,stunned:r,target:o}){XM(e,t,Di[q.sel]),Ei.classList.toggle("hidden",!e),e&&(Ei.querySelectorAll("button").forEach((c,u)=>{c.disabled=q.embers<zs[c.dataset.tower].cost,c.classList.toggle("sel",u===q.sel)}),ei.sel!==q.sel&&xt.device==="pad"&&(ei.sel=q.sel,Ei.querySelectorAll("button i").forEach((c,u)=>c.textContent=u===q.sel?xt.labels().build:"")));const a=xt.labels();Ca-=i;let l="";if(Ca>0)l=Zd;else if(r)l="Moralpanikk! Måka slo deg ut";else if(o)l="Leverer rullepapiret …";else if(I.roll)l=`Rull! Trykk pilene i rekkefølge for å rulle fortere · ${xt.device==="pad"?`${a.carry} / hold stikka = gå`:xt.device==="touch"?"✕ Gå = gå":"Esc / Q = gå"}`;else if(n!=null&&n.upg)l=`${n.def.name}: stå stille eller trykk ${a.build} for å rulle (${Math.ceil(n.upg.dur-n.upg.t)} s)`;else if(I.carrying&&n&&n.level>=Bc)l="Tårnet er på maks nivå";else if(I.carrying)l="Bær rullepapiret til et tårn";else if(s&&!I.carrying)l=`${a.carry} = hent rullepapir (${et.stoneCost} ✦)`;else if(s&&I.carrying)l=`${a.carry} = legg rullepapiret tilbake`;else if(n&&n.level<Bc)l=`${n.def.name} nv. ${n.level} · hent rullepapir ved fyret for å oppgradere`;else if(e&&!t.ok)l=`Ikke lov her: ${t.why} · ${a.carry} = avbryt`;else if(e){const c=`${zs[Di[q.sel]].name} (${zs[Di[q.sel]].tip})`,u=t.plinth?" (sokkel: +25 % rekkevidde)":"";l=xt.device==="pad"?`${a.sel} = velg tårn · ${a.build} = sett ned ${c}${u}`:xt.device==="touch"?`Trykk på et tårn, eller Bygg = ${c}${u}`:`1 / 2 / 3 eller ${a.build} = sett ned ${c}${u}`}else q.phase==="prep"&&q.wave===0&&(l=`${a.build} = bygg et tårn der du står (sokler gir +25 % rekkevidde)`);Gc(l),UM(i)}const ks=new bt;{const i=document.createElement("canvas");i.width=64,i.height=256;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,64,0);t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.5,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,256),e.globalCompositeOperation="destination-in";const n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.2,"rgba(0,0,0,0.8)"),n.addColorStop(.65,"rgba(0,0,0,0.3)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,64,256);const s=new wi(i);for(let r=0;r<6;r++){const o=new lt(new ai(1,1),new Nt({map:s,color:"#ffdcae",transparent:!0,opacity:.05,blending:Ti,depthWrite:!1,depthTest:!1,fog:!1}));o.scale.set(3.5+r%3*2.4,34,1),o.position.set(-22+r*8.5,9,-4+r%2*6),o.rotation.set(-.95,0,.55),o.userData.phase=r*1.3,ks.add(o)}}ks.visible=hn.id==="tak";ks.renderOrder=50;_t.add(ks);function ay(i){ks.position.set(kn.x,0,kn.z),ks.rotation.y=Ki,ks.children.forEach(e=>e.material.opacity=.06+.035*Math.sin(i*.35+e.userData.phase))}let Gn=0;const yt=new V,Er=new V,mr=new V,ua=new V,Ll=new V,kn=new V(I.x,0,I.z);function ly(i){kn.x+=(I.x-kn.x)*Math.min(1,i*4),kn.z+=(I.z-kn.z)*Math.min(1,i*4),kn.y=Qt.position.y;const e=ts?1.15:1,t=xt.zoom*e,n=$t.aspect<1.2?1.25:1;Ki+=xt.look;const s=6.6*t*n;$t.position.set(kn.x+Math.sin(Ki)*s,kn.y+12.5*t*n,kn.z+Math.cos(Ki)*s),Gn=Math.max(0,Gn-i),Gn>0&&($t.position.x+=(Math.random()-.5)*Gn*2,$t.position.y+=(Math.random()-.5)*Gn),$t.lookAt(kn.x-Math.sin(Ki),kn.y+.5,kn.z-Math.cos(Ki)),$t.updateMatrixWorld();let r=0,o=0,a=0;const l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([f,_])=>{const y=yt.set(f,_,.5).unproject($t),x=y.sub($t.position).normalize(),C=x.y<-.05?(kn.y-$t.position.y)/x.y:80;return[$t.position.x+x.x*Math.min(C,80),$t.position.z+x.z*Math.min(C,80)]});for(const[f,_]of l)r+=f/4,o+=_/4;for(const[f,_]of l)a=Math.max(a,Math.hypot(f-r,_-o));const c=Mt.clamp(Math.ceil((a+4)/4)*4,16,80);_n.shadow.camera.right!==c&&(Object.assign(_n.shadow.camera,{left:-c,right:c,top:c,bottom:-c}),_n.shadow.camera.updateProjectionMatrix());const u=2*c/_n.shadow.mapSize.x;mr.set(ti.sunDir[0],ti.sunDir[1],ti.sunDir[2]).normalize(),ua.set(0,1,0).cross(mr).normalize(),Ll.copy(mr).cross(ua).normalize(),yt.set(r,kn.y,o);const h=Math.round(yt.dot(ua)/u)*u,d=Math.round(yt.dot(Ll)/u)*u,p=yt.dot(mr);Er.copy(ua).multiplyScalar(h).addScaledVector(Ll,d).addScaledVector(mr,p),_n.target.position.copy(Er),_n.position.copy(Er).addScaledVector(mr,40),_n.shadow.camera.far=40+c+20,ay(q.time),GM(),yt.set(I.x,Qt.position.y+.9,I.z);const g=-yt.clone().applyMatrix4($t.matrixWorldInverse).z;yt.project($t);const M=innerWidth*zn.getPixelRatio(),m=innerHeight*zn.getPixelRatio();vs.uKeep.value.set((yt.x*.5+.5)*M,(yt.y*.5+.5)*m,g),vs.uRad.value=m*.3,Ge.cullFade($t,m),FM(),kM(q.paused?0:i)}const Dl=hn.eruption,Tr=Ge.extras.bridges??[];let to=0,In=null;function cy(i){if(!(!Dl||!Tr.length||q.phase!=="wave")){if(to+=i,In&&to>=Dl.closed)In.setClosed(!1),In=null,An.setBlock(()=>!1);else if(!In&&to>=Dl.every){to=0;const e=Tr[Math.random()*Tr.length|0];e.setClosed(!0),In=e,An.setBlock((t,n)=>(t-e.x)**2+(n-e.z)**2<2.8*2.8),Gn=Math.max(Gn,.35),Dt.boom(),on("🌋 Utbrudd! En bro er stengt av lava i 10 s")}}}function uy(){In&&(In.setClosed(!1),An.setBlock(()=>!1)),In=null,to=0}function hy(i){if(Be.guest){by(i);return}if(cy(i),q.phase==="prep")q.timer-=i,rn.timer.textContent=`Neste bølge om ${Math.ceil(Math.max(0,q.timer))} s`,q.timer<=0&&(rn.timer.textContent="",Pu());else if(q.phase==="wave"){for(q.waveClock+=i;q.spawnQueue.length&&q.spawnQueue[0].t<=q.waveClock;){const e=q.spawnQueue.shift();Ba(e.type,e.path)}if(rn.timer.textContent=`${un.length+q.spawnQueue.length} monstre igjen`,!q.spawnQueue.length&&!un.length){if(rn.timer.textContent="",q.wave>=wu.length){Iu(!0);return}const e=et.waveBonus+q.wave*et.waveBonusPer+Math.floor(Math.min(q.embers,300)*et.interest);q.embers+=e,Hn(rn.embers,"embers",q.embers,"bump"),on(`Bølge ${q.wave} slått! +${e} ✦`);for(const t of kt)t.K.cheer=1.4;Ru(et.prepTime),en==null||en.setIntensity(0)}}}function Iu(i){q.phase=i?"won":"lost",i||xt.rumble(500,.9),ct("touch").classList.add("hidden"),ct("btn-pause").classList.add("hidden"),Ei.classList.add("hidden");let e="";if(en==null||en.setIntensity(0),i){Dt.win();const n=xo();y_(yn),xo()>n&&(e=`<p class="lead">🔓 Ny verden låst opp: <b>${$s[yn+1].name}</b>!</p>`)}const t=ct("overlay");if(t.querySelector(".card").innerHTML=i?`<h1>Gløden lever!</h1><p class="lead">Ti bølger med forbud, komitéer og moralpanikk er chillet ned, og ${q.lights} av 20 glødepunkter brenner fortsatt. Øya ånder ut.</p>${e}<div class="menu-row"><button id="btn-again">↺ Spill kartet igjen</button>${e?'<button id="btn-nextworld" class="alt">Neste verden ▶</button>':""}<button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`:`<h1>Gløden sluknet</h1><p class="lead">Byråkratiet vant denne gangen, i bølge ${q.wave}. Rull opp og prøv på nytt.</p><div class="menu-row"><button id="btn-again">↺ Start kartet på nytt</button><button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`,Be.guest){t.querySelector(".menu-row").innerHTML='<p class="lead">Venter på at verten starter på nytt …</p><button id="btn-again" class="alt">Forlat</button><button id="btn-worlds2" class="alt hidden"></button>',ct("btn-again").addEventListener("click",()=>{location.href=`${location.pathname}?world=${yn}`}),ct("btn-worlds2").addEventListener("click",()=>{}),t.classList.remove("hidden");return}t.classList.remove("hidden"),ct("btn-again").addEventListener("click",()=>wr()),ct("btn-worlds2").addEventListener("click",()=>{location.href=`${location.pathname}?world=${yn}`}),e&&ct("btn-nextworld").addEventListener("click",()=>{location.href=`${location.pathname}?world=${yn+1}`})}let en=null;const ba=(()=>{try{return JSON.parse(localStorage.getItem("glod-music")||"{}")}catch{return{}}})(),uo=["rolig","dnb","av"],tp={rolig:"Rolig",dnb:"DnB",av:"Av"};let yi=uo.includes(ba.mode)?ba.mode:ba.muted?"av":"rolig";ln.get("musikk")&&uo.includes(ln.get("musikk"))&&(yi=ln.get("musikk"));function np(){try{localStorage.setItem("glod-music",JSON.stringify({vol:en.volume,mode:yi}))}catch{}}function fy(i){const e={};let t=null,n=0,s=ba.vol??.7;return{use:o=>{const a=o==="dnb"?"dnb":"rolig";t&&t!==e[a]&&t.stop(),e[a]??(e[a]=a==="dnb"?mM(i.ctx,i.noiseBuf,hn.id):gM(i.ctx,i.noiseBuf,hn.id)),t=e[a],t.setVolume(s),t.setIntensity(n),t.setMuted(o==="av"),o==="av"?t.stop():t.start()},setIntensity(o){n=o,t==null||t.setIntensity(o)},setVolume(o){s=o,t==null||t.setVolume(o)},get volume(){return s},get muted(){return yi==="av"},get intensity(){return n},get mode(){return yi},get section(){return t==null?void 0:t.section},rms(){return t?t.rms():0},tap(o){for(const a of Object.values(e))a.tap(o)}}}function dy(){const i=Nd();en||!i||ln.has("nomusic")||(en=fy(i),en.use(yi),ct("music-vol").value=Math.round(en.volume*100),ct("btn-mute").textContent=`M: ${tp[yi]}`,window.__music=en,window.__audioCtx=i.ctx)}function ip(){en&&(yi=uo[(uo.indexOf(yi)+1)%uo.length],en.use(yi),ct("btn-mute").textContent=`M: ${tp[yi]}`,np(),on({rolig:"🎶 Musikk: rolig",dnb:"🎶 Musikk: drum & bass",av:"🎶 Musikk av"}[yi]))}for(const i of["pointerdown","keydown","touchend"])addEventListener(i,()=>{const e=Nd();e&&e.ctx.state!=="running"&&e.ctx.resume()},{passive:!0});ct("music-vol").addEventListener("input",i=>{en&&(en.setVolume(i.target.value/100),np())});ct("btn-mute").addEventListener("click",i=>{i.preventDefault(),ip()});function zr(i=!1){q.phase==="title"&&(dM(),dy(),en==null||en.setIntensity(0),i&&ct("touch").classList.toggle("hidden",xt.device!=="touch"),ct("overlay").classList.add("hidden"),ts&&xt.device!=="pad"&&(xt.device="touch"),ei.device=null,ct("btn-pause").classList.remove("hidden"),Ge.lighthouse.setLights(q.lights),Hn(rn.embers,"embers",q.embers),Ru(et.firstPrep),Fd&&Ay())}ct("btn-start").addEventListener("click",zr);const Uu=["build","carry","next","selPrev","selNext","b1","b2","b3","b4","b5","b6","b7","rU","rR","rD","rL","rollExit"];function py(){const i=new Set;return{move:{x:0,z:0},yaw:0,pressed:i,rollMode:!1,device:"kb",padKind:"xbox",clicks:[],consume:e=>i.delete(e),clear:()=>i.clear(),rumble:()=>{},labels:()=>xt.labels()}}function sp(i,e){if(e===Eo(0))return;const t=i.userData.body.children[0];t.material=t.material.clone(),t.material.color.set(e)}function zu(i,e){if(kt.some(r=>r.slot===i))return null;const t=Br(Ad(),"figure");sp(t,Eo(i));const n=Wd(i);t.position.set(n.x,Ge.heightAt(n.x,n.z),n.z),_t.add(t);const s={slot:i,name:e,K:n,mesh:t,input:py(),sel:0,buildMode:!1,local:!1,hints:[]};return kt.push(s),s}function Nu(i){var n;const e=kt.findIndex(s=>s.slot===i&&!s.local);if(e<0)return;const t=kt[e];t.K.chargeTower&&Si(t.K.chargeTower,0),(n=t.tag)==null||n.remove(),xs.emit(t.K.x,t.mesh.position.y+.8,t.K.z,{n:10,color:"#eef6e8",speed:1.4,up:1.2,life:.7,gravity:-.5}),_t.remove(t.mesh),kt.splice(e,1)}function my(i,e){if(Be.guest){if(i.t==="s")Be.snap=i;else if(i.t==="h")for(const s of i.h)on(s);else i.t==="restart"&&wr();return}if(!Be.host||i.t!=="in")return;const t=kt.find(s=>s.slot===e);if(!t)return;const n=t.input;if(n.move.x=Math.max(-1,Math.min(1,+i.x||0)),n.move.z=Math.max(-1,Math.min(1,+i.z||0)),Number.isFinite(i.yaw)&&(n.yaw=i.yaw),Array.isArray(i.a))for(const s of i.a)Uu.includes(s)&&n.pressed.add(s);Array.isArray(i.g)&&i.g.every(Number.isFinite)&&Ui(t,()=>Jd(i.g[0],i.g[1]))}const rp=Object.keys(wo),Kt=i=>Math.round(i*100)/100;function gy(){return{t:"s",ph:q.phase,w:q.wave,tm:Kt(q.timer),em:q.embers,li:q.lights,left:un.length+q.spawnQueue.length,pz:q.paused?1:0,er:In?Tr.indexOf(In):-1,P:kt.map(i=>{var s,r;const e=i.K,t=e.roll,n=i===pn;return[i.slot,Kt(e.x),Kt(e.z),Kt(e.face),Kt(e.vx),Kt(e.vz),e.carrying?1:0,Kt(Math.max(0,e.stun)),Kt(Math.max(0,e.faint)),Math.round(e.chill),n?q.sel:i.sel,(n?q.buildMode:i.buildMode)?1:0,Kt(e.rollP??-1),((s=e.rollTower)==null?void 0:s.id)||0,((r=e.chargeTower)==null?void 0:r.id)||0,Kt(e.charge||0),t?[t.tower.id,t.seq.join(","),t.i,t.done,t.shakes||0]:0,i.name||""]}),M:un.filter(i=>i.alive).map(i=>[i.id,rp.indexOf(i.type),Kt(i.x),Kt(i.y),Kt(i.z),Math.round(i.hp*10)/10,Math.round(i.maxHp*10)/10,i.trap>0?Kt(i.trap):0,i.slow>0?1:0]),T:nn.map(i=>[i.id,Di.indexOf(i.type),Kt(i.x),Kt(i.y),Kt(i.z),i.level,i.plinth?Ge.plinths.indexOf(i.plinth):-1,i.upg?[Kt(i.upg.t),i.upg.dur]:0,i.blind>0?Kt(i.blind):0]),E:Wn.map(i=>[i.id,Kt(i.x),Kt(i.y),Kt(i.z),i.value,Kt(i.life)]),B:Bn.map(i=>[i.id,Kt(i.x),Kt(i.z),Kt(i.life)]),ev:Be.ev.splice(0)}}function vy(i){if(!Be.host)return;if(Be.ev.length>200&&Be.ev.splice(0,Be.ev.length-200),!Be.net.guestCount()){Be.ev.length=0;return}if(Be.snapT-=i,Be.snapT>0)return;Be.snapT=.05;const e=gy();Be.lastSnapBytes=JSON.stringify(e).length,Be.net.broadcast(e);for(const t of kt)!t.local&&t.hints.length&&Be.net.sendTo(t.slot,{t:"h",h:t.hints.splice(0)})}const Ri=(i,e)=>i.find(t=>t.id===e);function xy(i){for(const a of i.ev||[])if(a[0]==="sp")Be.spawnPoints=a[1],q.spawnPoints=a[1],Hc();else if(a[0]==="c"){const l=Ri(un,a[1]);l!=null&&l.alive&&$d(l)}else if(a[0]==="l"){const l=Ri(un,a[1]);l!=null&&l.alive&&Wc(l,!0)}else if(a[0]==="u"){const l=Ri(nn,a[1]),c=kt.find(u=>u.slot===a[2]);l&&c&&Ui(c,()=>Kd(l))}else if(a[0]==="st"){const l=kt.find(c=>c.slot===a[1]);l&&(Rt.emit(l.K.x,l.mesh.position.y+1.5,l.K.z,{n:16,color:"#ffffff",speed:3,up:2,life:.5}),l.local&&(Dt.stun(),Gn=.2))}const e=q.phase;if(q.embers=i.em,q.timer=i.tm,q.paused=!!i.pz,Be.left=i.left,i.li!==q.lights&&(q.lights=i.li,Ge.lighthouse.setLights(q.lights),Hn(rn.lights,"lights",q.lights,"bad")),e==="prep"&&i.ph==="wave")Pu(),q.spawnQueue=[];else if(e==="wave"&&i.ph==="prep"){rn.timer.textContent="",on(`Bølge ${q.wave} slått!`);for(const a of kt)a.K.cheer=1.4;Ru(i.tm),en==null||en.setIntensity(0)}else(i.ph==="won"||i.ph==="lost")&&e!==i.ph&&Iu(i.ph==="won");if(q.wave=i.w,i.er!==(In?Tr.indexOf(In):-1)){In&&(In.setClosed(!1),In=null,An.setBlock(()=>!1));const a=Tr[i.er];a&&(a.setClosed(!0),In=a,An.setBlock((l,c)=>(l-a.x)**2+(c-a.z)**2<2.8*2.8),Gn=Math.max(Gn,.35),Dt.boom(),on("🌋 Utbrudd! En bro er stengt av lava i 10 s"))}for(const a of i.T){let l=Ri(nn,a[0]);if(!l){const c=a[6]>=0?Ge.plinths[a[6]]:null;l=jd(Di[a[1]],{x:a[2],y:a[3],z:a[4],plinth:c},a[0])}l.level!==a[5]&&(l.level=a[5],Su(l,l.level),Si(l,0),Rt.emit(l.x,l.y+1.2,l.z,{n:30,color:"#8ff0ff",speed:4,up:4,life:.9,gravity:5}),Dt.upgrade()),a[7]?(l.upg||(l.upg={t:0,dur:a[7][1]}),a[7][0]<l.upg.t-.5&&l.upg.t>0&&(l.upgReset=!0),l.upg.t=a[7][0],l.upg.dur=a[7][1]):l.upg&&(l.upg=null,Si(l,0)),l.blind=a[8]}const t=new Set(i.T.map(a=>a[0]));for(let a=nn.length-1;a>=0;a--){const l=nn[a];if(t.has(l.id))continue;_t.remove(l.mesh),nn.splice(a,1),l.plinth&&(l.plinth.tower=null);const c=Ge.colliders.findIndex(u=>u.tower===l);c>=0&&Ge.colliders.splice(c,1)}const n=new Set;for(const a of i.M){n.add(a[0]);let l=Ri(un,a[0]);l||(l=Ba(rp[a[1]],0),l.id=a[0],l.x=a[2],l.y=a[3],l.z=a[4],l.mesh.position.set(l.x,l.y,l.z)),l.sx=a[2],l.sy=a[3],l.sz=a[4],a[5]<l.hp&&(l.mesh.userData.hpBar.visible=!0),l.hp=a[5],l.maxHp=a[6],l.trap=a[7],a[8]&&(l.slow=Math.max(l.slow,.1))}for(const a of un)a.alive&&!n.has(a.id)&&(a.alive=!1,_t.remove(a.mesh));const s=new Set;for(const a of i.E){s.add(a[0]);let l=Ri(Wn,a[0]);if(!l){const c=Cd();c.scale.setScalar(.8+Math.min(a[4],6)*.08),l={id:a[0],mesh:c,x:a[1],y:a[2],z:a[3],value:a[4],phase:Math.random()*6},_t.add(c),Wn.push(l)}l.sx=a[1],l.sy=a[2],l.sz=a[3],l.life=a[5]}for(let a=Wn.length-1;a>=0;a--){const l=Wn[a];s.has(l.id)||(l.life>.3&&(Rt.emit(l.x,l.y+.3,l.z,{n:8,color:"#ffe08a",speed:2,up:2.5,life:.4}),Math.hypot(I.x-l.x,I.z-l.z)<2&&(Dt.pickup(),Hn(rn.embers,"embers",q.embers,"bump"))),_t.remove(l.mesh),Wn.splice(a,1))}const r=new Set;for(const a of i.B){r.add(a[0]);const l=Ri(Bn,a[0])||(Du(a[1],a[2],a[0]),Bn[Bn.length-1]);l.life=a[3]}for(let a=Bn.length-1;a>=0;a--)r.has(Bn[a].id)||(_t.remove(Bn[a].mesh),Bn.splice(a,1));const o=new Set;for(const a of i.P){const l=a[0];o.add(l);let c=kt.find(p=>p.slot===l);c||(c=zu(l,a[17]),c.K.x=a[1],c.K.z=a[2]);const u=c.K;if(c.local){const p=Math.hypot(a[1]-u.x,a[2]-u.z);p>2.5?(u.x=a[1],u.z=a[2]):p>.9&&(u.x+=(a[1]-u.x)*.25,u.z+=(a[2]-u.z)*.25),a[9]<u.chill-2&&(u.flinch=.55,Co("😣"),xt.rumble(120,.3)),q.sel=a[10],q.buildMode=!!a[11]}else u.tx=a[1],u.tz=a[2],u.tface=a[3],u.vx=a[4],u.vz=a[5],c.sel=a[10],c.buildMode=!!a[11];u.carrying=!!a[6],u.stun=a[7],u.faint=a[8],u.chill=a[9],u.rollP=a[12],u.rollTower=Ri(nn,a[13])||null;const h=Ri(nn,a[14])||null;u.chargeTower&&u.chargeTower!==h&&Si(u.chargeTower,0),u.chargeTower=h,u.charge=a[15],h&&Si(h,Math.min(1,u.charge));const d=a[16];if(d){const p=Ri(nn,d[0]),g=u.roll&&u.roll.tower===p?u.roll:null;u.roll=p?{tower:p,seq:d[1].split(","),i:d[2],done:d[3],shakes:d[4],shake:!!(g!=null&&g.shake)}:null,c.local&&g&&u.roll&&(d[4]>(g.shakes||0)?(u.roll.shake=!0,Dt.bonk(),xt.rumble(150,.4)):d[3]>g.done?(Dt.stone(),Rt.emit(u.x,c.mesh.position.y+2.2,u.z,{n:10,color:"#8ff0ff",speed:1.6,up:1.6,life:.6,gravity:2})):d[2]>g.i&&Dt.tick(d[2]))}else u.roll=null;c.local&&(xt.rollMode=!!u.roll)}for(const a of kt.slice())!a.local&&!o.has(a.slot)&&(Nu(a.slot),Ea(`${a.name||"En vokter"} forlot spillet`))}function _y(){for(const i of kt){if(i.local)continue;i.tag||(i.tag=document.createElement("div"),i.tag.className="ptag",i.tag.textContent=i.name||`Vokter ${i.slot+1}`,i.tag.style.borderColor=Eo(i.slot),document.body.appendChild(i.tag)),yt.set(i.K.x,i.mesh.position.y+3,i.K.z).project($t);const e=yt.z<1&&Math.abs(yt.x)<1.05&&Math.abs(yt.y)<1.05&&q.phase!=="title";i.tag.style.display=e?"block":"none",e&&(i.tag.style.left=`${(yt.x*.5+.5)*innerWidth}px`,i.tag.style.top=`${(-yt.y*.5+.5)*innerHeight}px`)}}function My(i){if(I.tx===void 0)return;const e=1-Math.exp(-i*12);I.x+=(I.tx-I.x)*e,I.z+=(I.tz-I.z)*e,Math.hypot(I.tx-I.x,I.tz-I.z)>4&&(I.x=I.tx,I.z=I.tz)}function yy(i){const e=1-Math.exp(-i*6);for(const t of un){if(!t.alive||t.sx===void 0)continue;Math.hypot(t.sx-t.x,t.sz-t.z)>6?(t.x=t.sx,t.z=t.sz):(t.x+=(t.sx-t.x)*e,t.z+=(t.sz-t.z)*e),t.def.flying&&(t.y+=(t.sy-t.y)*e)}}function by(i){q.phase==="prep"?(q.timer-=i,rn.timer.textContent=`Neste bølge om ${Math.ceil(Math.max(0,q.timer))} s`):q.phase==="wave"&&(rn.timer.textContent=`${Be.left??un.length} monstre igjen`)}function Sy(i){const e=1-Math.exp(-i*10);for(const t of Wn){if(t.sx===void 0)continue;t.x+=(t.sx-t.x)*e,t.y+=(t.sy-t.y)*e,t.z+=(t.sz-t.z)*e,t.phase+=i,t.life-=i;const n=Math.sin(t.phase*3)*.12;t.mesh.position.set(t.x,t.y+n,t.z),t.mesh.rotation.y+=i*3;const s=t.life<5;t.mesh.scale.setScalar((.8+Math.min(t.value,6)*.08)*(s?.55+.45*Math.max(0,t.life/5):1)),t.mesh.visible=!s||Math.sin(t.life*(t.life<1.5?30:16))>-.4,Math.random()<i*2.5&&Rt.emit(t.x,t.y+.2,t.z,{n:1,color:"#ffb347",speed:.3,up:1.2,life:.6,gravity:-.5})}Bn.forEach((t,n)=>{t.life-=i,t.mesh.rotation.y+=i*1.5,t.mesh.position.y=Ge.heightAt(t.x,t.z)+.5+Math.sin(q.time*3+n)*.12,t.mesh.visible=t.life>4||Math.sin(t.life*12)>0})}function wy(i){for(const c of Uu)Ht.consume(c);const e=Ws(Ge.plinths,I.x,I.z,et.reach,c=>!c.tower),t=Ws(nn,I.x,I.z,et.reach),n=Ge.lighthouse.pos,s=Math.hypot(n.x-I.x,n.z-I.z)<et.lighthouseReach,r=I.stun>0,o=Va(),a=(q.buildMode||!!e)&&!r&&!I.carrying,l=I.chargeTower;l&&Math.random()<i*20&&Rt.emit(I.x,Qt.position.y+2.2,I.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),ep(i,{panelOpen:a,spot:o,tower:t,atLighthouse:s,stunned:r,target:l})}function Ey(i){if(!Be.guest||q.phase==="title")return;const e=Uu.filter(r=>xt.pressed.has(r));Be.sendT-=i;const t=xt.move,n=t.x!==Be.lastX||t.z!==Be.lastZ;if(!e.length&&!Be.goal&&!(n&&Be.sendT<=0)&&Be.sendT>-.25)return;Be.sendT=1/30,Be.lastX=t.x,Be.lastZ=t.z;const s={t:"in",x:+t.x.toFixed(3),z:+t.z.toFixed(3),yaw:+Ki.toFixed(3)};e.length&&(s.a=e),Be.goal&&(s.g=Be.goal.map(r=>+r.toFixed(2)),Be.goal=null),Be.net.send(s)}const Ty=EM({worldIndex:yn,worldName:hn.name,timeOfDay:ms,params:ln,onHostStart:i=>{Object.assign(Be,{host:!0,net:i}),kt[0].name=i.hostName;for(const e of i.players)e.slot>0&&zu(e.slot,e.name);zr()},onGuestStart:i=>{Object.assign(Be,{guest:!0,net:i}),kt[0].slot=i.slot,sp(Qt,Eo(i.slot)),zr()},onMessage:my,onLeave:(i,e)=>{Nu(i),Ea(`${e} forlot spillet`)},onHostGone:()=>{Ea("Verten forlot spillet"),setTimeout(()=>{location.href=`${location.pathname}?world=${yn}`},2500)}});{const i=ct("worlds"),e=xo();if($s.forEach((t,n)=>{const s=document.createElement("button");s.className="world"+(n===yn?" sel":"")+(n>=e?" locked":""),s.innerHTML=`<b>${n>=e?"🔒 ":""}${t.name}</b><small>${n>=e?"Vinn forrige verden for å låse opp":t.blurb}</small>`,s.disabled=n>=e,s.addEventListener("click",()=>{n!==yn&&(location.href=`${location.pathname}?world=${n}`)}),i.appendChild(s)}),ct("btn-start").textContent=`Tenn gløden på ${hn.name}`,hn.skyDusk){const t=document.createElement("button");t.id="btn-tod",t.className="tod",t.textContent=ms==="skumring"?"🌅 Skumring (bytt til dag)":"☀️ Dag (bytt til skumring)",t.addEventListener("click",()=>{try{localStorage.setItem("glod-tid",ms==="skumring"?"dag":"skumring")}catch{}location.href=`${location.pathname}?world=${yn}&tid=${ms==="skumring"?"dag":"skumring"}`}),ct("worlds").after(t)}}ct("btn-quality").addEventListener("click",()=>Vd(Ai==="high"?"low":"high"));addEventListener("keydown",i=>{i.code==="KeyG"&&!i.repeat&&Vd(Ai==="high"?"low":"high")});ct("btn-quality").textContent=Ai==="high"?"Høy":"Lav";ct("btn-pause").classList.add("hidden");function Ay(){q.embers=999;const i=Ge.lighthouse.pos,e=Ge.plinths.slice().sort((t,n)=>Math.hypot(t.x-i.x,t.z-i.z-4)-Math.hypot(n.x-i.x,n.z-i.z-4));["ring","chips","speaker","ring","chips","ring"].forEach((t,n)=>{const s=e[n];I.x=s.x+1.9,I.z=s.z,Aa(t),n<3&&(nn[nn.length-1].level=n+1,Su(nn[nn.length-1],n+1))}),I.x=i.x+1,I.z=i.z+6,I.carrying=!0,q.wave=Number(ln.get("demo"))||4,q.wave-=1,Pu(),q.waveClock=6,q.embers=142}const Cy=new gd;let Il=0,ha=0,fa=0;window.__fpsSamples=[];window.__game={get net(){return Ty.net},get snapBytes(){return Be.lastSnapBytes},players:kt,addRemotePlayer:(i,e)=>zu(i,e),removeRemotePlayer:i=>Nu(i),S:q,monsters:un,towers:nn,embers:Wn,world:Ge,K:I,renderer:zn,camera:$t,input:xt,buildSpot:()=>Va(),build:i=>Aa(i),renderOnce:()=>To.render(0),outlineCats:xd,spawnMonster:Ba,projectiles:gi,damage:Is,dropBag:(i,e)=>Du(i,e),ghost:Zi,get camYaw(){return Ki}};window.__errors=[];addEventListener("error",i=>window.__errors.push(String(i.message)));addEventListener("unhandledrejection",i=>window.__errors.push(String(i.reason)));function op(){requestAnimationFrame(op);const i=Cy.getDelta(),e=Math.min(i,.05);if(q.paused||(q.time+=e),xt.update(e),Ey(i),Be.snap){const t=Be.snap;Be.snap=null,xy(t)}q.paused||(Ge.update(q.time),DM.update(q.time));for(let t=0;t<RM&&!q.paused&&(q.phase==="prep"||q.phase==="wave");t++)t>0&&(q.time+=e,Af(e)),hy(e),jM(e),Be.guest&&yy(e),YM(e),$M(e),QM(e),VM(e);if(q.paused||Af(e),ry(e),vy(i),kt.length>1&&_y(),!q.paused){if(Rt.update(e),Math.random()<e*(4+10*(q.lights/Ir))){const t=Ge.lighthouse.tip;xs.emit(t.x,t.y,t.z,{n:1,color:"#e8e2dc",speed:.5,up:1.6,life:3.2,gravity:-.15})}xs.update(e)}if(ly(e),zn.info.reset(),To.render(e),Il++,ha+=i,ha>=.5){const t=Il/ha;window.__fpsSamples.push(t),window.__fpsSamples.length>240&&window.__fpsSamples.shift(),Cu.textContent=`${t.toFixed(0)} fps · ${zn.info.render.calls} dc`,fa=t<(ts?28:45)?fa+1:0,fa>=6&&fs>1&&(fs=Math.max(1,fs-.25),zn.setPixelRatio(fs),Ao(),fa=0,window.__dprDrops=(window.__dprDrops||0)+1,ln.has("debug")&&console.info(`[fps] ${t.toFixed(0)} fps over tid → dpr senket til ${fs}`)),Il=0,ha=0}}op();Fd&&ln.has("autostart")&&zr();function Ra(i,e){let t=i-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}
