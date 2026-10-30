(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eu="170",gp=0,Hu=1,vp=2,Uf=1,zf=2,Yi=3,vs=0,Gn=1,cn=2,wn=0,ds=1,ai=2,Wu=3,Xu=4,Nf=5,xi=100,xp=101,_p=102,Mp=103,yp=104,eo=200,bp=201,Sp=202,wp=203,Bl=204,Gl=205,Vl=206,Ep=207,Hl=208,Tp=209,Ap=210,Cp=211,Rp=212,Pp=213,Lp=214,Wl=0,Xl=1,ql=2,Rr=3,Yl=4,$l=5,jl=6,Kl=7,tu=0,Dp=1,Ip=2,ps=0,kf=1,Ff=2,Of=3,nu=4,Up=5,Bf=6,Gf=7,Vf=300,Pr=301,Lr=302,Zl=303,Jl=304,Na=306,Ui=1e3,Ds=1001,Ql=1002,Tn=1003,zp=1004,Lo=1005,Di=1006,Za=1007,Is=1008,zi=1009,Hf=1010,Wf=1011,po=1012,iu=1013,Os=1014,Si=1015,ri=1016,su=1017,ru=1018,Bs=1020,Xf=35902,qf=1021,Yf=1022,si=1023,$f=1024,jf=1025,yr=1026,Gs=1027,ka=1028,ou=1029,Kf=1030,au=1031,lu=1033,ga=33776,va=33777,xa=33778,_a=33779,ec=35840,tc=35841,nc=35842,ic=35843,sc=36196,rc=37492,oc=37496,ac=37808,lc=37809,cc=37810,uc=37811,hc=37812,fc=37813,dc=37814,pc=37815,mc=37816,gc=37817,vc=37818,xc=37819,_c=37820,Mc=37821,Ma=36492,yc=36494,bc=36495,Zf=36283,Sc=36284,wc=36285,Ec=36286,Np=3200,kp=3201,cu=0,Fp=1,us="",En="srgb",Fr="srgb-linear",Fa="linear",Bt="srgb",Qs=7680,qu=519,Op=512,Bp=513,Gp=514,Jf=515,Vp=516,Hp=517,Wp=518,Xp=519,Yu=35044,Tc=35048,$u="300 es",Zi=2e3,Ca=2001;class Or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ju=1234567;const so=Math.PI/180,mo=180/Math.PI;function qs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function yn(i,e,t){return Math.max(e,Math.min(t,i))}function uu(i,e){return(i%e+e)%e}function qp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Yp(i,e,t){return i!==e?(t-i)/(e-i):0}function ro(i,e,t){return(1-t)*i+t*e}function $p(i,e,t,n){return ro(i,e,1-Math.exp(-t*n))}function jp(i,e=1){return e-Math.abs(uu(i,e*2)-e)}function Kp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Zp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Jp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Qp(i,e){return i+Math.random()*(e-i)}function e0(i){return i*(.5-Math.random())}function t0(i){i!==void 0&&(ju=i);let e=ju+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function n0(i){return i*so}function i0(i){return i*mo}function s0(i){return(i&i-1)===0&&i!==0}function r0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function o0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function a0(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Mt={DEG2RAD:so,RAD2DEG:mo,generateUUID:qs,clamp:yn,euclideanModulo:uu,mapLinear:qp,inverseLerp:Yp,lerp:ro,damp:$p,pingpong:jp,smoothstep:Kp,smootherstep:Zp,randInt:Jp,randFloat:Qp,randFloatSpread:e0,seededRandom:t0,degToRad:n0,radToDeg:i0,isPowerOfTwo:s0,ceilPowerOfTwo:r0,floorPowerOfTwo:o0,setQuaternionFromProperEuler:a0,normalize:Nn,denormalize:vr};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wt{constructor(e,t,n,s,r,o,a,l,c){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],M=s[1],b=s[4],x=s[7],C=s[2],S=s[5],E=s[8];return r[0]=o*_+a*M+l*C,r[3]=o*m+a*b+l*S,r[6]=o*f+a*x+l*E,r[1]=c*_+u*M+h*C,r[4]=c*m+u*b+h*S,r[7]=c*f+u*x+h*E,r[2]=d*_+p*M+g*C,r[5]=d*m+p*b+g*S,r[8]=d*f+p*x+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=t*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ja.makeScale(e,t)),this}rotate(e){return this.premultiply(Ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ja=new wt;function Qf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ra(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function l0(){const i=Ra("canvas");return i.style.display="block",i}const Ku={};function to(i){i in Ku||(Ku[i]=!0,console.warn(i))}function c0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function u0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function h0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const It={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Bt&&(i.r=Qi(i.r),i.g=Qi(i.g),i.b=Qi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Bt&&(i.r=br(i.r),i.g=br(i.g),i.b=br(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===us?Fa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function br(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Zu=[.64,.33,.3,.6,.15,.06],Ju=[.2126,.7152,.0722],Qu=[.3127,.329],eh=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),th=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);It.define({[Fr]:{primaries:Zu,whitePoint:Qu,transfer:Fa,toXYZ:eh,fromXYZ:th,luminanceCoefficients:Ju,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:Zu,whitePoint:Qu,transfer:Bt,toXYZ:eh,fromXYZ:th,luminanceCoefficients:Ju,outputColorSpaceConfig:{drawingBufferColorSpace:En}}});let er;class f0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{er===void 0&&(er=Ra("canvas")),er.width=e.width,er.height=e.height;const n=er.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ra("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qi(t[n]/255)*255):t[n]=Qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let d0=0;class ed{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=qs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qa(s[o].image)):r.push(Qa(s[o]))}else r=Qa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Qa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?f0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let p0=0;class Un extends Or{constructor(e=Un.DEFAULT_IMAGE,t=Un.DEFAULT_MAPPING,n=Ds,s=Ds,r=Di,o=Is,a=si,l=zi,c=Un.DEFAULT_ANISOTROPY,u=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=qs(),this.name="",this.source=new ed(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ui:e.x=e.x-Math.floor(e.x);break;case Ds:e.x=e.x<0?0:1;break;case Ql:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ui:e.y=e.y-Math.floor(e.y);break;case Ds:e.y=e.y<0?0:1;break;case Ql:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Vf;Un.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,n=0,s=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,x=(p+1)/2,C=(f+1)/2,S=(u+d)/4,E=(h+_)/4,A=(g+m)/4;return b>x&&b>C?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=S/n,r=E/n):x>C?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=A/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=E/r,s=A/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class m0 extends Or{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Un(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ed(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends m0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class td extends Un{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class g0 extends Un{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class So{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==p||u!==g){let m=1-a;const f=l*d+c*p+u*g+h*_,M=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const C=Math.sqrt(b),S=Math.atan2(C,f*M);m=Math.sin(m*S)/C,a=Math.sin(a*S)/C}const x=a*M;if(l=l*m+d*x,c=c*m+p*x,u=u*m+g*x,h=h*m+_*x,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-a*p,e[t+2]=c*g+u*p+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return el.copy(this).projectOnVector(e),this.sub(el)}reflect(e){return this.sub(el.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const el=new V,nh=new So;class Ys{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(r,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Do.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Do.copy(n.boundingBox)),Do.applyMatrix4(e.matrixWorld),this.union(Do)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),Io.subVectors(this.max,Xr),tr.subVectors(e.a,Xr),nr.subVectors(e.b,Xr),ir.subVectors(e.c,Xr),is.subVectors(nr,tr),ss.subVectors(ir,nr),ys.subVectors(tr,ir);let t=[0,-is.z,is.y,0,-ss.z,ss.y,0,-ys.z,ys.y,is.z,0,-is.x,ss.z,0,-ss.x,ys.z,0,-ys.x,-is.y,is.x,0,-ss.y,ss.x,0,-ys.y,ys.x,0];return!tl(t,tr,nr,ir,Io)||(t=[1,0,0,0,1,0,0,0,1],!tl(t,tr,nr,ir,Io))?!1:(Uo.crossVectors(is,ss),t=[Uo.x,Uo.y,Uo.z],tl(t,tr,nr,ir,Io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new V,new V,new V,new V,new V,new V,new V,new V],pi=new V,Do=new Ys,tr=new V,nr=new V,ir=new V,is=new V,ss=new V,ys=new V,Xr=new V,Io=new V,Uo=new V,bs=new V;function tl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){bs.fromArray(i,r);const a=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),l=e.dot(bs),c=t.dot(bs),u=n.dot(bs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const v0=new Ys,qr=new V,nl=new V;class Br{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):v0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qr.subVectors(e,this.center);const t=qr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(qr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qr.copy(e.center).add(nl)),this.expandByPoint(qr.copy(e.center).sub(nl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bi=new V,il=new V,zo=new V,rs=new V,sl=new V,No=new V,rl=new V;class hu{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){il.copy(e).add(t).multiplyScalar(.5),zo.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(il);const r=e.distanceTo(t)*.5,o=-this.direction.dot(zo),a=rs.dot(this.direction),l=-rs.dot(zo),c=rs.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(il).addScaledVector(zo,d),p}intersectSphere(e,t){Bi.subVectors(e.center,this.origin);const n=Bi.dot(this.direction),s=Bi.dot(Bi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,n,s,r){sl.subVectors(t,e),No.subVectors(n,e),rl.crossVectors(sl,No);let o=this.direction.dot(rl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rs.subVectors(this.origin,e);const l=a*this.direction.dot(No.crossVectors(rs,No));if(l<0)return null;const c=a*this.direction.dot(sl.cross(rs));if(c<0||l+c>o)return null;const u=-a*rs.dot(rl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,t,n,s,r,o,a,l,c,u,h,d,p,g,_,m){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,p,g,_,m)}set(e,t,n,s,r,o,a,l,c,u,h,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/sr.setFromMatrixColumn(e,0).length(),r=1/sr.setFromMatrixColumn(e,1).length(),o=1/sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(x0,e,_0)}lookAt(e,t,n){const s=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),os.crossVectors(n,$n),os.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),os.crossVectors(n,$n)),os.normalize(),ko.crossVectors($n,os),s[0]=os.x,s[4]=ko.x,s[8]=$n.x,s[1]=os.y,s[5]=ko.y,s[9]=$n.y,s[2]=os.z,s[6]=ko.z,s[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],M=n[3],b=n[7],x=n[11],C=n[15],S=s[0],E=s[4],A=s[8],y=s[12],v=s[1],T=s[5],N=s[9],L=s[13],U=s[2],W=s[6],B=s[10],z=s[14],I=s[3],Y=s[7],K=s[11],ie=s[15];return r[0]=o*S+a*v+l*U+c*I,r[4]=o*E+a*T+l*W+c*Y,r[8]=o*A+a*N+l*B+c*K,r[12]=o*y+a*L+l*z+c*ie,r[1]=u*S+h*v+d*U+p*I,r[5]=u*E+h*T+d*W+p*Y,r[9]=u*A+h*N+d*B+p*K,r[13]=u*y+h*L+d*z+p*ie,r[2]=g*S+_*v+m*U+f*I,r[6]=g*E+_*T+m*W+f*Y,r[10]=g*A+_*N+m*B+f*K,r[14]=g*y+_*L+m*z+f*ie,r[3]=M*S+b*v+x*U+C*I,r[7]=M*E+b*T+x*W+C*Y,r[11]=M*A+b*N+x*B+C*K,r[15]=M*y+b*L+x*z+C*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*p-n*l*p)+_*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+m*(+t*c*h-t*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+f*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],M=h*m*c-_*d*c+_*l*p-a*m*p-h*l*f+a*d*f,b=g*d*c-u*m*c-g*l*p+o*m*p+u*l*f-o*d*f,x=u*_*c-g*h*c+g*a*p-o*_*p-u*a*f+o*h*f,C=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,S=t*M+n*b+s*x+r*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=M*E,e[1]=(_*d*r-h*m*r-_*s*p+n*m*p+h*s*f-n*d*f)*E,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*f+n*l*f)*E,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*p-n*l*p)*E,e[4]=b*E,e[5]=(u*m*r-g*d*r+g*s*p-t*m*p-u*s*f+t*d*f)*E,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*E,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*p+t*l*p)*E,e[8]=x*E,e[9]=(g*h*r-u*_*r-g*n*p+t*_*p+u*n*f-t*h*f)*E,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*f+t*a*f)*E,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*p-t*a*p)*E,e[12]=C*E,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*m+t*h*m)*E,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*E,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,g=r*h,_=o*u,m=o*h,f=a*h,M=l*c,b=l*u,x=l*h,C=n.x,S=n.y,E=n.z;return s[0]=(1-(_+f))*C,s[1]=(p+x)*C,s[2]=(g-b)*C,s[3]=0,s[4]=(p-x)*S,s[5]=(1-(d+f))*S,s[6]=(m+M)*S,s[7]=0,s[8]=(g+b)*E,s[9]=(m-M)*E,s[10]=(1-(d+_))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=sr.set(s[0],s[1],s[2]).length();const o=sr.set(s[4],s[5],s[6]).length(),a=sr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],mi.copy(this);const c=1/r,u=1/o,h=1/a;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=u,mi.elements[5]*=u,mi.elements[6]*=u,mi.elements[8]*=h,mi.elements[9]*=h,mi.elements[10]*=h,t.setFromRotationMatrix(mi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Zi){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let p,g;if(a===Zi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ca)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Zi){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*c,p=(n+s)*u;let g,_;if(a===Zi)g=(o+r)*h,_=-2*h;else if(a===Ca)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const sr=new V,mi=new zt,x0=new V(0,0,0),_0=new V(1,1,1),os=new V,ko=new V,$n=new V,ih=new zt,sh=new So;class Ni{constructor(e=0,t=0,n=0,s=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(yn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(yn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-yn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(yn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-yn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ih,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sh.setFromEuler(this),this.setFromQuaternion(sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class fu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let M0=0;const rh=new V,rr=new So,Gi=new zt,Fo=new V,Yr=new V,y0=new V,b0=new So,oh=new V(1,0,0),ah=new V(0,1,0),lh=new V(0,0,1),ch={type:"added"},S0={type:"removed"},or={type:"childadded",child:null},ol={type:"childremoved",child:null};class Xt extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new V,t=new Ni,n=new So,s=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new zt},normalMatrix:{value:new wt}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(oh,e)}rotateY(e){return this.rotateOnAxis(ah,e)}rotateZ(e){return this.rotateOnAxis(lh,e)}translateOnAxis(e,t){return rh.copy(e).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oh,e)}translateY(e){return this.translateOnAxis(ah,e)}translateZ(e){return this.translateOnAxis(lh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fo.copy(e):Fo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Yr,Fo,this.up):Gi.lookAt(Fo,Yr,this.up),this.quaternion.setFromRotationMatrix(Gi),s&&(Gi.extractRotation(s.matrixWorld),rr.setFromRotationMatrix(Gi),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ch),or.child=e,this.dispatchEvent(or),or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(S0),ol.child=e,this.dispatchEvent(ol),ol.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ch),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,e,y0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,b0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Xt.DEFAULT_UP=new V(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new V,Vi=new V,al=new V,Hi=new V,ar=new V,lr=new V,uh=new V,ll=new V,cl=new V,ul=new V,hl=new Ht,fl=new Ht,dl=new Ht;class _i{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),gi.subVectors(e,t),s.cross(gi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){gi.subVectors(s,t),Vi.subVectors(n,t),al.subVectors(e,t);const o=gi.dot(gi),a=gi.dot(Vi),l=gi.dot(al),c=Vi.dot(Vi),u=Vi.dot(al),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hi.x),l.addScaledVector(o,Hi.y),l.addScaledVector(a,Hi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return hl.setScalar(0),fl.setScalar(0),dl.setScalar(0),hl.fromBufferAttribute(e,t),fl.fromBufferAttribute(e,n),dl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(hl,r.x),o.addScaledVector(fl,r.y),o.addScaledVector(dl,r.z),o}static isFrontFacing(e,t,n,s){return gi.subVectors(n,t),Vi.subVectors(e,t),gi.cross(Vi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),gi.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return _i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ar.subVectors(s,n),lr.subVectors(r,n),ll.subVectors(e,n);const l=ar.dot(ll),c=lr.dot(ll);if(l<=0&&c<=0)return t.copy(n);cl.subVectors(e,s);const u=ar.dot(cl),h=lr.dot(cl);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ar,o);ul.subVectors(e,r);const p=ar.dot(ul),g=lr.dot(ul);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(lr,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return uh.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(uh,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(ar,o).addScaledVector(lr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function pl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=It.workingColorSpace){if(e=uu(e,1),t=yn(t,0,1),n=yn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=pl(o,r,e+1/3),this.g=pl(o,r,e),this.b=pl(o,r,e-1/3)}return It.toWorkingColorSpace(this,s),this}setStyle(e,t=En){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){const n=nd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return It.fromWorkingColorSpace(Dn.copy(this),e),Math.round(yn(Dn.r*255,0,255))*65536+Math.round(yn(Dn.g*255,0,255))*256+Math.round(yn(Dn.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.fromWorkingColorSpace(Dn.copy(this),t);const n=Dn.r,s=Dn.g,r=Dn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=It.workingColorSpace){return It.fromWorkingColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=En){It.fromWorkingColorSpace(Dn.copy(this),e);const t=Dn.r,n=Dn.g,s=Dn.b;return e!==En?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(as),this.setHSL(as.h+e,as.s+t,as.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(Oo);const n=ro(as.h,Oo.h,t),s=ro(as.s,Oo.s,t),r=ro(as.l,Oo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Ce;Ce.NAMES=nd;let w0=0;class $s extends Or{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=qs(),this.name="",this.blending=ds,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bl,this.blendDst=Gl,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==vs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bl&&(n.blendSrc=this.blendSrc),this.blendDst!==Gl&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ut extends $s{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new V,Bo=new Re;class Ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yu,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bo.fromBufferAttribute(this,t),Bo.applyMatrix3(e),this.setXY(t,Bo.x,Bo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array),s=Nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array),s=Nn(s,this.array),r=Nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yu&&(e.usage=this.usage),e}}class id extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sd extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let E0=0;const ni=new zt,ml=new Xt,cr=new V,jn=new Ys,$r=new Ys,_n=new V;class Ft extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qf(e)?sd:id)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new wt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return ml.lookAt(e),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ht(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];jn.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];$r.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(jn.min,$r.min),jn.expandByPoint(_n),_n.addVectors(jn.max,$r.max),jn.expandByPoint(_n)):(jn.expandByPoint($r.min),jn.expandByPoint($r.max))}jn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)_n.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(_n));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)_n.fromBufferAttribute(a,c),l&&(cr.fromBufferAttribute(e,c),_n.add(cr)),s=Math.max(s,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new V,l[A]=new V;const c=new V,u=new V,h=new V,d=new Re,p=new Re,g=new Re,_=new V,m=new V;function f(A,y,v){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,v),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,v),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const T=1/(p.x*g.y-g.x*p.y);isFinite(T)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(T),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(T),a[A].add(_),a[y].add(_),a[v].add(_),l[A].add(m),l[y].add(m),l[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let A=0,y=M.length;A<y;++A){const v=M[A],T=v.start,N=v.count;for(let L=T,U=T+N;L<U;L+=3)f(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const b=new V,x=new V,C=new V,S=new V;function E(A){C.fromBufferAttribute(s,A),S.copy(C);const y=a[A];b.copy(y),b.sub(C.multiplyScalar(C.dot(y))).normalize(),x.crossVectors(S,y);const T=x.dot(l[A])<0?-1:1;o.setXYZW(A,b.x,b.y,b.z,T)}for(let A=0,y=M.length;A<y;++A){const v=M[A],T=v.start,N=v.count;for(let L=T,U=T+N;L<U;L+=3)E(e.getX(L+0)),E(e.getX(L+1)),E(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,u=new V,h=new V;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new Ot(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hh=new zt,Ss=new hu,Go=new Br,fh=new V,Vo=new V,Ho=new V,Wo=new V,gl=new V,Xo=new V,dh=new V,qo=new V;class lt extends Xt{constructor(e=new Ft,t=new Ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Xo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(gl.fromBufferAttribute(h,e),o?Xo.addScaledVector(gl,u):Xo.addScaledVector(gl.sub(t),u))}t.add(Xo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(r),Ss.copy(e.ray).recast(e.near),!(Go.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Go,fh)===null||Ss.origin.distanceToSquared(fh)>(e.far-e.near)**2))&&(hh.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(hh),!(n.boundingBox!==null&&Ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,C=b;x<C;x+=3){const S=a.getX(x),E=a.getX(x+1),A=a.getX(x+2);s=Yo(this,f,e,n,c,u,h,S,E,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);s=Yo(this,o,e,n,c,u,h,M,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,C=b;x<C;x+=3){const S=x,E=x+1,A=x+2;s=Yo(this,f,e,n,c,u,h,S,E,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=m,b=m+1,x=m+2;s=Yo(this,o,e,n,c,u,h,M,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function T0(i,e,t,n,s,r,o,a){let l;if(e.side===Gn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===vs,a),l===null)return null;qo.copy(a),qo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(qo);return c<t.near||c>t.far?null:{distance:c,point:qo.clone(),object:i}}function Yo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Vo),i.getVertexPosition(l,Ho),i.getVertexPosition(c,Wo);const u=T0(i,e,t,n,Vo,Ho,Wo,dh);if(u){const h=new V;_i.getBarycoord(dh,Vo,Ho,Wo,h),s&&(u.uv=_i.getInterpolatedAttribute(s,a,l,c,h,new Re)),r&&(u.uv1=_i.getInterpolatedAttribute(r,a,l,c,h,new Re)),o&&(u.normal=_i.getInterpolatedAttribute(o,a,l,c,h,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new V,materialIndex:0};_i.getNormal(Vo,Ho,Wo,d.normal),u.face=d,u.barycoord=h}return u}class Fn extends Ft{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(h,2));function g(_,m,f,M,b,x,C,S,E,A,y){const v=x/E,T=C/A,N=x/2,L=C/2,U=S/2,W=E+1,B=A+1;let z=0,I=0;const Y=new V;for(let K=0;K<B;K++){const ie=K*T-L;for(let me=0;me<W;me++){const qe=me*v-N;Y[_]=qe*M,Y[m]=ie*b,Y[f]=U,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[f]=S>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(me/E),h.push(1-K/A),z+=1}}for(let K=0;K<A;K++)for(let ie=0;ie<E;ie++){const me=d+ie+W*K,qe=d+ie+W*(K+1),H=d+(ie+1)+W*(K+1),J=d+(ie+1)+W*K;l.push(me,qe,J),l.push(qe,H,J),I+=6}a.addGroup(p,I,y),p+=I,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Dr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function kn(i){const e={};for(let t=0;t<i.length;t++){const n=Dr(i[t]);for(const s in n)e[s]=n[s]}return e}function A0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function rd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const Mi={clone:Dr,merge:kn};var C0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends $s{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C0,this.fragmentShader=R0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=A0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class od extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new V,ph=new Re,mh=new Re;class Zn extends od{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(so*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mo*2*Math.atan(Math.tan(so*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,t){return this.getViewBounds(e,ph,mh),t.subVectors(mh,ph)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(so*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ur=-90,hr=1;class P0 extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Zn(ur,hr,e,t);s.layers=this.layers,this.add(s);const r=new Zn(ur,hr,e,t);r.layers=this.layers,this.add(r);const o=new Zn(ur,hr,e,t);o.layers=this.layers,this.add(o);const a=new Zn(ur,hr,e,t);a.layers=this.layers,this.add(a);const l=new Zn(ur,hr,e,t);l.layers=this.layers,this.add(l);const c=new Zn(ur,hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Zi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ad extends Un{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Pr,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class L0 extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ad(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Di}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fn(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gn,blending:wn});r.uniforms.tEquirect.value=t;const o=new lt(s,r),a=t.minFilter;return t.minFilter===Is&&(t.minFilter=Di),new P0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const vl=new V,D0=new V,I0=new wt;class Rs{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=vl.subVectors(n,t).cross(D0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(vl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||I0.getNormalMatrix(e),s=this.coplanarPoint(vl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new Br,$o=new V;class du{constructor(e=new Rs,t=new Rs,n=new Rs,s=new Rs,r=new Rs,o=new Rs){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zi){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],M=s[13],b=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,m-p,x-f).normalize(),n[1].setComponents(l+r,d+c,m+p,x+f).normalize(),n[2].setComponents(l+o,d+u,m+g,x+M).normalize(),n[3].setComponents(l-o,d-u,m-g,x-M).normalize(),n[4].setComponents(l-a,d-h,m-_,x-b).normalize(),t===Zi)n[5].setComponents(l+a,d+h,m+_,x+b).normalize();else if(t===Ca)n[5].setComponents(a,h,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){return ws.center.set(0,0,0),ws.radius=.7071067811865476,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if($o.x=s.normal.x>0?e.max.x:e.min.x,$o.y=s.normal.y>0?e.max.y:e.min.y,$o.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($o)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ld(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function U0(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class li extends Ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const M=f*d-o;for(let b=0;b<c;b++){const x=b*h-r;g.push(x,-M,0),_.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){const b=M+c*f,x=M+c*(f+1),C=M+1+c*(f+1),S=M+1+c*f;p.push(b,x,S),p.push(x,C,S)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.width,e.height,e.widthSegments,e.heightSegments)}}var z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N0=`#ifdef USE_ALPHAHASH
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
#endif`,k0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,G0=`#ifdef USE_AOMAP
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
#endif`,V0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H0=`#ifdef USE_BATCHING
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
#endif`,W0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,X0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Y0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$0=`#ifdef USE_IRIDESCENCE
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
#endif`,j0=`#ifdef USE_BUMPMAP
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
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sm=`#define PI 3.141592653589793
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
} // validated`,rm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,om=`vec3 transformedNormal = objectNormal;
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
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",fm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ym=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bm=`#ifdef USE_GRADIENTMAP
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
}`,Sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tm=`uniform bool receiveShadow;
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
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dm=`PhysicalMaterial material;
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
#endif`,Im=`struct PhysicalMaterial {
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
}`,Um=`
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
#endif`,zm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,km=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wm=`#if defined( USE_POINTS_UV )
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
#endif`,Xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$m=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Km=`#ifdef USE_MORPHTARGETS
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
#endif`,Zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ig=`#ifdef USE_NORMALMAP
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
#endif`,sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ag=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ug=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_g=`float getShadowMask() {
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
}`,Mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yg=`#ifdef USE_SKINNING
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
#endif`,bg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sg=`#ifdef USE_SKINNING
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
#endif`,wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ag=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cg=`#ifdef USE_TRANSMISSION
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
#endif`,Rg=`#ifdef USE_TRANSMISSION
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zg=`uniform sampler2D t2D;
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`#include <common>
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
}`,Gg=`#if DEPTH_PACKING == 3200
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
}`,Vg=`#define DISTANCE
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
}`,Hg=`#define DISTANCE
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`uniform float scale;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,$g=`#include <common>
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
}`,jg=`uniform vec3 diffuse;
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
}`,Kg=`#define LAMBERT
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
}`,Zg=`#define LAMBERT
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
}`,Jg=`#define MATCAP
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
}`,Qg=`#define MATCAP
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
}`,ev=`#define NORMAL
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
}`,tv=`#define NORMAL
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
}`,nv=`#define PHONG
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
}`,iv=`#define PHONG
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
}`,sv=`#define STANDARD
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
}`,rv=`#define STANDARD
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
}`,ov=`#define TOON
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
}`,av=`#define TOON
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
}`,lv=`uniform float size;
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
}`,cv=`uniform vec3 diffuse;
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
}`,uv=`#include <common>
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
}`,hv=`uniform vec3 color;
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
}`,fv=`uniform float rotation;
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
}`,dv=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:z0,alphahash_pars_fragment:N0,alphamap_fragment:k0,alphamap_pars_fragment:F0,alphatest_fragment:O0,alphatest_pars_fragment:B0,aomap_fragment:G0,aomap_pars_fragment:V0,batching_pars_vertex:H0,batching_vertex:W0,begin_vertex:X0,beginnormal_vertex:q0,bsdfs:Y0,iridescence_fragment:$0,bumpmap_pars_fragment:j0,clipping_planes_fragment:K0,clipping_planes_pars_fragment:Z0,clipping_planes_pars_vertex:J0,clipping_planes_vertex:Q0,color_fragment:em,color_pars_fragment:tm,color_pars_vertex:nm,color_vertex:im,common:sm,cube_uv_reflection_fragment:rm,defaultnormal_vertex:om,displacementmap_pars_vertex:am,displacementmap_vertex:lm,emissivemap_fragment:cm,emissivemap_pars_fragment:um,colorspace_fragment:hm,colorspace_pars_fragment:fm,envmap_fragment:dm,envmap_common_pars_fragment:pm,envmap_pars_fragment:mm,envmap_pars_vertex:gm,envmap_physical_pars_fragment:Am,envmap_vertex:vm,fog_vertex:xm,fog_pars_vertex:_m,fog_fragment:Mm,fog_pars_fragment:ym,gradientmap_pars_fragment:bm,lightmap_pars_fragment:Sm,lights_lambert_fragment:wm,lights_lambert_pars_fragment:Em,lights_pars_begin:Tm,lights_toon_fragment:Cm,lights_toon_pars_fragment:Rm,lights_phong_fragment:Pm,lights_phong_pars_fragment:Lm,lights_physical_fragment:Dm,lights_physical_pars_fragment:Im,lights_fragment_begin:Um,lights_fragment_maps:zm,lights_fragment_end:Nm,logdepthbuf_fragment:km,logdepthbuf_pars_fragment:Fm,logdepthbuf_pars_vertex:Om,logdepthbuf_vertex:Bm,map_fragment:Gm,map_pars_fragment:Vm,map_particle_fragment:Hm,map_particle_pars_fragment:Wm,metalnessmap_fragment:Xm,metalnessmap_pars_fragment:qm,morphinstance_vertex:Ym,morphcolor_vertex:$m,morphnormal_vertex:jm,morphtarget_pars_vertex:Km,morphtarget_vertex:Zm,normal_fragment_begin:Jm,normal_fragment_maps:Qm,normal_pars_fragment:eg,normal_pars_vertex:tg,normal_vertex:ng,normalmap_pars_fragment:ig,clearcoat_normal_fragment_begin:sg,clearcoat_normal_fragment_maps:rg,clearcoat_pars_fragment:og,iridescence_pars_fragment:ag,opaque_fragment:lg,packing:cg,premultiplied_alpha_fragment:ug,project_vertex:hg,dithering_fragment:fg,dithering_pars_fragment:dg,roughnessmap_fragment:pg,roughnessmap_pars_fragment:mg,shadowmap_pars_fragment:gg,shadowmap_pars_vertex:vg,shadowmap_vertex:xg,shadowmask_pars_fragment:_g,skinbase_vertex:Mg,skinning_pars_vertex:yg,skinning_vertex:bg,skinnormal_vertex:Sg,specularmap_fragment:wg,specularmap_pars_fragment:Eg,tonemapping_fragment:Tg,tonemapping_pars_fragment:Ag,transmission_fragment:Cg,transmission_pars_fragment:Rg,uv_pars_fragment:Pg,uv_pars_vertex:Lg,uv_vertex:Dg,worldpos_vertex:Ig,background_vert:Ug,background_frag:zg,backgroundCube_vert:Ng,backgroundCube_frag:kg,cube_vert:Fg,cube_frag:Og,depth_vert:Bg,depth_frag:Gg,distanceRGBA_vert:Vg,distanceRGBA_frag:Hg,equirect_vert:Wg,equirect_frag:Xg,linedashed_vert:qg,linedashed_frag:Yg,meshbasic_vert:$g,meshbasic_frag:jg,meshlambert_vert:Kg,meshlambert_frag:Zg,meshmatcap_vert:Jg,meshmatcap_frag:Qg,meshnormal_vert:ev,meshnormal_frag:tv,meshphong_vert:nv,meshphong_frag:iv,meshphysical_vert:sv,meshphysical_frag:rv,meshtoon_vert:ov,meshtoon_frag:av,points_vert:lv,points_frag:cv,shadow_vert:uv,shadow_frag:hv,sprite_vert:fv,sprite_frag:dv},$e={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},Pi={basic:{uniforms:kn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:kn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:kn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:kn([$e.common,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.roughnessmap,$e.metalnessmap,$e.fog,$e.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:kn([$e.common,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.gradientmap,$e.fog,$e.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:kn([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:kn([$e.points,$e.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:kn([$e.common,$e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:kn([$e.common,$e.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:kn([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:kn([$e.sprite,$e.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:kn([$e.common,$e.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:kn([$e.lights,$e.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Pi.physical={uniforms:kn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const jo={r:0,b:0,g:0},Es=new Ni,pv=new zt;function mv(i,e,t,n,s,r,o){const a=new Ce(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?t:e).get(b)),b}function _(M){let b=!1;const x=g(M);x===null?f(a,l):x&&x.isColor&&(f(x,1),b=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,b){const x=g(b);x&&(x.isCubeTexture||x.mapping===Na)?(u===void 0&&(u=new lt(new Fn(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Dr(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Es.copy(b.backgroundRotation),Es.x*=-1,Es.y*=-1,Es.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(pv.makeRotationFromEuler(Es)),u.material.toneMapped=It.getTransfer(x.colorSpace)!==Bt,(h!==x||d!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,p=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new lt(new li(2,2),new sn({name:"BackgroundMaterial",uniforms:Dr(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=It.getTransfer(x.colorSpace)!==Bt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,b){M.getRGB(jo,rd(i)),n.buffers.color.setClear(jo.r,jo.g,jo.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),l=b,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(a,l)},render:_,addToRenderList:m}}function gv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(v,T,N,L,U){let W=!1;const B=h(L,N,T);r!==B&&(r=B,c(r.object)),W=p(v,L,N,U),W&&g(v,L,N,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(v,T,N,L),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,T,N){const L=N.wireframe===!0;let U=n[v.id];U===void 0&&(U={},n[v.id]=U);let W=U[T.id];W===void 0&&(W={},U[T.id]=W);let B=W[L];return B===void 0&&(B=d(l()),W[L]=B),B}function d(v){const T=[],N=[],L=[];for(let U=0;U<t;U++)T[U]=0,N[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:N,attributeDivisors:L,object:v,attributes:{},index:null}}function p(v,T,N,L){const U=r.attributes,W=T.attributes;let B=0;const z=N.getAttributes();for(const I in z)if(z[I].location>=0){const K=U[I];let ie=W[I];if(ie===void 0&&(I==="instanceMatrix"&&v.instanceMatrix&&(ie=v.instanceMatrix),I==="instanceColor"&&v.instanceColor&&(ie=v.instanceColor)),K===void 0||K.attribute!==ie||ie&&K.data!==ie.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function g(v,T,N,L){const U={},W=T.attributes;let B=0;const z=N.getAttributes();for(const I in z)if(z[I].location>=0){let K=W[I];K===void 0&&(I==="instanceMatrix"&&v.instanceMatrix&&(K=v.instanceMatrix),I==="instanceColor"&&v.instanceColor&&(K=v.instanceColor));const ie={};ie.attribute=K,K&&K.data&&(ie.data=K.data),U[I]=ie,B++}r.attributes=U,r.attributesNum=B,r.index=L}function _(){const v=r.newAttributes;for(let T=0,N=v.length;T<N;T++)v[T]=0}function m(v){f(v,0)}function f(v,T){const N=r.newAttributes,L=r.enabledAttributes,U=r.attributeDivisors;N[v]=1,L[v]===0&&(i.enableVertexAttribArray(v),L[v]=1),U[v]!==T&&(i.vertexAttribDivisor(v,T),U[v]=T)}function M(){const v=r.newAttributes,T=r.enabledAttributes;for(let N=0,L=T.length;N<L;N++)T[N]!==v[N]&&(i.disableVertexAttribArray(N),T[N]=0)}function b(v,T,N,L,U,W,B){B===!0?i.vertexAttribIPointer(v,T,N,U,W):i.vertexAttribPointer(v,T,N,L,U,W)}function x(v,T,N,L){_();const U=L.attributes,W=N.getAttributes(),B=T.defaultAttributeValues;for(const z in W){const I=W[z];if(I.location>=0){let Y=U[z];if(Y===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(Y=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(Y=v.instanceColor)),Y!==void 0){const K=Y.normalized,ie=Y.itemSize,me=e.get(Y);if(me===void 0)continue;const qe=me.buffer,H=me.type,J=me.bytesPerElement,he=H===i.INT||H===i.UNSIGNED_INT||Y.gpuType===iu;if(Y.isInterleavedBufferAttribute){const le=Y.data,ge=le.stride,De=Y.offset;if(le.isInstancedInterleavedBuffer){for(let Ee=0;Ee<I.locationSize;Ee++)f(I.location+Ee,le.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ee=0;Ee<I.locationSize;Ee++)m(I.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let Ee=0;Ee<I.locationSize;Ee++)b(I.location+Ee,ie/I.locationSize,H,K,ge*J,(De+ie/I.locationSize*Ee)*J,he)}else{if(Y.isInstancedBufferAttribute){for(let le=0;le<I.locationSize;le++)f(I.location+le,Y.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let le=0;le<I.locationSize;le++)m(I.location+le);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let le=0;le<I.locationSize;le++)b(I.location+le,ie/I.locationSize,H,K,ie*J,ie/I.locationSize*le*J,he)}}else if(B!==void 0){const K=B[z];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(I.location,K);break;case 3:i.vertexAttrib3fv(I.location,K);break;case 4:i.vertexAttrib4fv(I.location,K);break;default:i.vertexAttrib1fv(I.location,K)}}}}M()}function C(){A();for(const v in n){const T=n[v];for(const N in T){const L=T[N];for(const U in L)u(L[U].object),delete L[U];delete T[N]}delete n[v]}}function S(v){if(n[v.id]===void 0)return;const T=n[v.id];for(const N in T){const L=T[N];for(const U in L)u(L[U].object),delete L[U];delete T[N]}delete n[v.id]}function E(v){for(const T in n){const N=n[T];if(N[v.id]===void 0)continue;const L=N[v.id];for(const U in L)u(L[U].object),delete L[U];delete N[v.id]}}function A(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function vv(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==si&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const A=E===ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==zi&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Si&&!A)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:C,maxSamples:S}}function _v(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Rs,a=new wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:n,b=M*4;let x=f.clippingState||null;l.value=x,x=u(g,d,b,p);for(let C=0;C!==b;++C)x[C]=t[C];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,x=p;b!==_;++b,x+=4)o.copy(h[b]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Mv(i){let e=new WeakMap;function t(o,a){return a===Zl?o.mapping=Pr:a===Jl&&(o.mapping=Lr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zl||a===Jl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new L0(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class pu extends od{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xr=4,gh=[.125,.215,.35,.446,.526,.582],Ls=20,xl=new pu,vh=new Ce;let _l=null,Ml=0,yl=0,bl=!1;const Ps=(1+Math.sqrt(5))/2,fr=1/Ps,xh=[new V(-Ps,fr,0),new V(Ps,fr,0),new V(-fr,0,Ps),new V(fr,0,Ps),new V(0,Ps,-fr),new V(0,Ps,fr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class _h{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){_l=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_l,Ml,yl),this._renderer.xr.enabled=bl,e.scissorTest=!1,Ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===Lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_l=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:ri,format:si,colorSpace:Fr,depthBuffer:!1},s=Mh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yv(r)),this._blurMaterial=bv(r,e,t)}return s}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,xl)}_sceneToCubeUV(e,t,n,s){const a=new Zn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(vh),u.toneMapping=ps,u.autoClear=!1;const p=new Ut({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),g=new lt(new Fn,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(vh),_=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):M===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const b=this._cubeSize;Ko(s,M*b,f>2?b:0,b,b),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Pr||e.mapping===Lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ko(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,xl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xh[(s-r-1)%xh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new lt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ls-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Ls;m>Ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ls}`);const f=[];let M=0;for(let E=0;E<Ls;++E){const A=E/_,y=Math.exp(-A*A/2);f.push(y),E===0?M+=y:E<m&&(M+=2*y)}for(let E=0;E<f.length;E++)f[E]=f[E]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const x=this._sizeLods[s],C=3*x*(s>b-xr?s-b+xr:0),S=4*(this._cubeSize-x);Ko(t,C,S,3*x,2*x),l.setRenderTarget(t),l.render(h,xl)}}function yv(i){const e=[],t=[],n=[];let s=i;const r=i-xr+1+gh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-xr?l=gh[o-i+xr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,M=new Float32Array(_*g*p),b=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let S=0;S<p;S++){const E=S%3*2/3-1,A=S>2?0:-1,y=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];M.set(y,_*g*S),b.set(d,m*g*S);const v=[S,S,S,S,S,S];x.set(v,f*g*S)}const C=new Ft;C.setAttribute("position",new Ot(M,_)),C.setAttribute("uv",new Ot(b,m)),C.setAttribute("faceIndex",new Ot(x,f)),e.push(C),s>xr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mh(i,e,t){const n=new Wn(i,e,t);return n.texture.mapping=Na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ko(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function bv(i,e,t){const n=new Float32Array(Ls),s=new V(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mu(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function yh(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function bh(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function mu(){return`

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
	`}function Sv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Zl||l===Jl,u=l===Pr||l===Lr;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new _h(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new _h(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function wv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&to("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ev(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let b=0,x=M.length;b<x;b+=3){const C=M[b+0],S=M[b+1],E=M[b+2];d.push(C,S,S,E,E,C)}}else if(g!==void 0){const M=g.array;_=g.version;for(let b=0,x=M.length/3-1;b<x;b+=3){const C=b+0,S=b+1,E=b+2;d.push(C,S,S,E,E,C)}}else return;const m=new(Qf(d)?sd:id)(d,1);m.version=_;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Tv(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function h(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let M=0;M<g;M++)f+=p[M]*_[M];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Av(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Cv(i,e,t){const n=new WeakMap,s=new Ht;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let y=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let b=0;p===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let x=a.attributes.position.count*b,C=1;x>e.maxTextureSize&&(C=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const S=new Float32Array(x*C*4*h),E=new td(S,x,C,h);E.type=Si,E.needsUpdate=!0;const A=b*4;for(let v=0;v<h;v++){const T=m[v],N=f[v],L=M[v],U=x*C*4*v;for(let W=0;W<T.count;W++){const B=W*A;p===!0&&(s.fromBufferAttribute(T,W),S[U+B+0]=s.x,S[U+B+1]=s.y,S[U+B+2]=s.z,S[U+B+3]=0),g===!0&&(s.fromBufferAttribute(N,W),S[U+B+4]=s.x,S[U+B+5]=s.y,S[U+B+6]=s.z,S[U+B+7]=0),_===!0&&(s.fromBufferAttribute(L,W),S[U+B+8]=s.x,S[U+B+9]=s.y,S[U+B+10]=s.z,S[U+B+11]=L.itemSize===4?s.w:1)}}d={count:h,texture:E,size:new Re(x,C)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Rv(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class gu extends Un{constructor(e,t,n,s,r,o,a,l,c,u=yr){if(u!==yr&&u!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===yr&&(n=Os),n===void 0&&u===Gs&&(n=Bs),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const cd=new Un,Sh=new gu(1,1),ud=new td,hd=new g0,fd=new ad,wh=[],Eh=[],Th=new Float32Array(16),Ah=new Float32Array(9),Ch=new Float32Array(4);function Gr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=wh[s];if(r===void 0&&(r=new Float32Array(s),wh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function vn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Oa(i,e){let t=Eh[e];t===void 0&&(t=new Int32Array(e),Eh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Pv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Lv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2fv(this.addr,e),xn(t,e)}}function Dv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;i.uniform3fv(this.addr,e),xn(t,e)}}function Iv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4fv(this.addr,e),xn(t,e)}}function Uv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,n))return;Ch.set(n),i.uniformMatrix2fv(this.addr,!1,Ch),xn(t,n)}}function zv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,n))return;Ah.set(n),i.uniformMatrix3fv(this.addr,!1,Ah),xn(t,n)}}function Nv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,n))return;Th.set(n),i.uniformMatrix4fv(this.addr,!1,Th),xn(t,n)}}function kv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2iv(this.addr,e),xn(t,e)}}function Ov(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3iv(this.addr,e),xn(t,e)}}function Bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4iv(this.addr,e),xn(t,e)}}function Gv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Vv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2uiv(this.addr,e),xn(t,e)}}function Hv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3uiv(this.addr,e),xn(t,e)}}function Wv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4uiv(this.addr,e),xn(t,e)}}function Xv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sh.compareFunction=Jf,r=Sh):r=cd,t.setTexture2D(e||r,s)}function qv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||hd,s)}function Yv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||fd,s)}function $v(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ud,s)}function jv(i){switch(i){case 5126:return Pv;case 35664:return Lv;case 35665:return Dv;case 35666:return Iv;case 35674:return Uv;case 35675:return zv;case 35676:return Nv;case 5124:case 35670:return kv;case 35667:case 35671:return Fv;case 35668:case 35672:return Ov;case 35669:case 35673:return Bv;case 5125:return Gv;case 36294:return Vv;case 36295:return Hv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Xv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return Yv;case 36289:case 36303:case 36311:case 36292:return $v}}function Kv(i,e){i.uniform1fv(this.addr,e)}function Zv(i,e){const t=Gr(e,this.size,2);i.uniform2fv(this.addr,t)}function Jv(i,e){const t=Gr(e,this.size,3);i.uniform3fv(this.addr,t)}function Qv(i,e){const t=Gr(e,this.size,4);i.uniform4fv(this.addr,t)}function ex(i,e){const t=Gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function tx(i,e){const t=Gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function nx(i,e){const t=Gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ix(i,e){i.uniform1iv(this.addr,e)}function sx(i,e){i.uniform2iv(this.addr,e)}function rx(i,e){i.uniform3iv(this.addr,e)}function ox(i,e){i.uniform4iv(this.addr,e)}function ax(i,e){i.uniform1uiv(this.addr,e)}function lx(i,e){i.uniform2uiv(this.addr,e)}function cx(i,e){i.uniform3uiv(this.addr,e)}function ux(i,e){i.uniform4uiv(this.addr,e)}function hx(i,e,t){const n=this.cache,s=e.length,r=Oa(t,s);vn(n,r)||(i.uniform1iv(this.addr,r),xn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||cd,r[o])}function fx(i,e,t){const n=this.cache,s=e.length,r=Oa(t,s);vn(n,r)||(i.uniform1iv(this.addr,r),xn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||hd,r[o])}function dx(i,e,t){const n=this.cache,s=e.length,r=Oa(t,s);vn(n,r)||(i.uniform1iv(this.addr,r),xn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||fd,r[o])}function px(i,e,t){const n=this.cache,s=e.length,r=Oa(t,s);vn(n,r)||(i.uniform1iv(this.addr,r),xn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ud,r[o])}function mx(i){switch(i){case 5126:return Kv;case 35664:return Zv;case 35665:return Jv;case 35666:return Qv;case 35674:return ex;case 35675:return tx;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return sx;case 35668:case 35672:return rx;case 35669:case 35673:return ox;case 5125:return ax;case 36294:return lx;case 36295:return cx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return px}}class gx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jv(t.type)}}class vx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mx(t.type)}}class xx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Sl=/(\w+)(\])?(\[|\.)?/g;function Rh(i,e){i.seq.push(e),i.map[e.id]=e}function _x(i,e,t){const n=i.name,s=n.length;for(Sl.lastIndex=0;;){const r=Sl.exec(n),o=Sl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Rh(t,c===void 0?new gx(a,i,e):new vx(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new xx(a),Rh(t,h)),t=h}}}class ya{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);_x(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Ph(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Mx=37297;let yx=0;function bx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Lh=new wt;function Sx(i){It._getMatrix(Lh,It.workingColorSpace,i);const e=`mat3( ${Lh.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(i)){case Fa:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Dh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+bx(i.getShaderSource(e),o)}else return s}function wx(i,e){const t=Sx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ex(i,e){let t;switch(e){case kf:t="Linear";break;case Ff:t="Reinhard";break;case Of:t="Cineon";break;case nu:t="ACESFilmic";break;case Bf:t="AgX";break;case Gf:t="Neutral";break;case Up:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zo=new V;function Tx(){It.getLuminanceCoefficients(Zo);const i=Zo.x.toFixed(4),e=Zo.y.toFixed(4),t=Zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ax(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function Cx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function no(i){return i!==""}function Ih(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Px=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(i){return i.replace(Px,Dx)}const Lx=new Map;function Dx(i,e){let t=Tt[e];if(t===void 0){const n=Lx.get(e);if(n!==void 0)t=Tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ac(t)}const Ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(i){return i.replace(Ix,Ux)}function Ux(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function zx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===zf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yi&&(e="SHADOWMAP_TYPE_VSM"),e}function Nx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pr:case Lr:e="ENVMAP_TYPE_CUBE";break;case Na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Lr:e="ENVMAP_MODE_REFRACTION";break}return e}function Fx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tu:e="ENVMAP_BLENDING_MULTIPLY";break;case Dp:e="ENVMAP_BLENDING_MIX";break;case Ip:e="ENVMAP_BLENDING_ADD";break}return e}function Ox(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Bx(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=zx(t),c=Nx(t),u=kx(t),h=Fx(t),d=Ox(t),p=Ax(t),g=Cx(r),_=s.createProgram();let m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(no).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(no).join(`
`),f.length>0&&(f+=`
`)):(m=[Nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),f=[Nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ps?"#define TONE_MAPPING":"",t.toneMapping!==ps?Tt.tonemapping_pars_fragment:"",t.toneMapping!==ps?Ex("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,wx("linearToOutputTexel",t.outputColorSpace),Tx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(no).join(`
`)),o=Ac(o),o=Ih(o,t),o=Uh(o,t),a=Ac(a),a=Ih(a,t),a=Uh(a,t),o=zh(o),a=zh(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===$u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=M+m+o,x=M+f+a,C=Ph(s,s.VERTEX_SHADER,b),S=Ph(s,s.FRAGMENT_SHADER,x);s.attachShader(_,C),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(T){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(_).trim(),L=s.getShaderInfoLog(C).trim(),U=s.getShaderInfoLog(S).trim();let W=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,S);else{const z=Dh(s,C,"vertex"),I=Dh(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+N+`
`+z+`
`+I)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(L===""||U==="")&&(B=!1);B&&(T.diagnostics={runnable:W,programLog:N,vertexShader:{log:L,prefix:m},fragmentShader:{log:U,prefix:f}})}s.deleteShader(C),s.deleteShader(S),A=new ya(s,_),y=Rx(s,_)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Mx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=S,this}let Gx=0;class Vx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Hx(e),t.set(e,n)),n}}class Hx{constructor(e){this.id=Gx++,this.code=e,this.usedTimes=0}}function Wx(i,e,t,n,s,r,o){const a=new fu,l=new Vx,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,v,T,N,L){const U=N.fog,W=L.geometry,B=y.isMeshStandardMaterial?N.environment:null,z=(y.isMeshStandardMaterial?t:e).get(y.envMap||B),I=z&&z.mapping===Na?z.image.height:null,Y=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const K=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ie=K!==void 0?K.length:0;let me=0;W.morphAttributes.position!==void 0&&(me=1),W.morphAttributes.normal!==void 0&&(me=2),W.morphAttributes.color!==void 0&&(me=3);let qe,H,J,he;if(Y){const At=Pi[Y];qe=At.vertexShader,H=At.fragmentShader}else qe=y.vertexShader,H=y.fragmentShader,l.update(y),J=l.getVertexShaderID(y),he=l.getFragmentShaderID(y);const le=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),De=L.isInstancedMesh===!0,Ee=L.isBatchedMesh===!0,Fe=!!y.map,fe=!!y.matcap,Me=!!z,O=!!y.aoMap,Je=!!y.lightMap,be=!!y.bumpMap,Be=!!y.normalMap,Ie=!!y.displacementMap,nt=!!y.emissiveMap,Z=!!y.metalnessMap,P=!!y.roughnessMap,w=y.anisotropy>0,X=y.clearcoat>0,ne=y.dispersion>0,se=y.iridescence>0,re=y.sheen>0,Ne=y.transmission>0,we=w&&!!y.anisotropyMap,Ue=X&&!!y.clearcoatMap,ot=X&&!!y.clearcoatNormalMap,Ae=X&&!!y.clearcoatRoughnessMap,Ye=se&&!!y.iridescenceMap,at=se&&!!y.iridescenceThicknessMap,ut=re&&!!y.sheenColorMap,Ze=re&&!!y.sheenRoughnessMap,Et=!!y.specularMap,ft=!!y.specularColorMap,St=!!y.specularIntensityMap,$=Ne&&!!y.transmissionMap,ke=Ne&&!!y.thicknessMap,ue=!!y.gradientMap,ye=!!y.alphaMap,Ve=y.alphaTest>0,He=!!y.alphaHash,dt=!!y.extensions;let Gt=ps;y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Gt=i.toneMapping);const $t={shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:qe,fragmentShader:H,defines:y.defines,customVertexShaderID:J,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ee,batchingColor:Ee&&L._colorsTexture!==null,instancing:De,instancingColor:De&&L.instanceColor!==null,instancingMorph:De&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Fr,alphaToCoverage:!!y.alphaToCoverage,map:Fe,matcap:fe,envMap:Me,envMapMode:Me&&z.mapping,envMapCubeUVHeight:I,aoMap:O,lightMap:Je,bumpMap:be,normalMap:Be,displacementMap:d&&Ie,emissiveMap:nt,normalMapObjectSpace:Be&&y.normalMapType===Fp,normalMapTangentSpace:Be&&y.normalMapType===cu,metalnessMap:Z,roughnessMap:P,anisotropy:w,anisotropyMap:we,clearcoat:X,clearcoatMap:Ue,clearcoatNormalMap:ot,clearcoatRoughnessMap:Ae,dispersion:ne,iridescence:se,iridescenceMap:Ye,iridescenceThicknessMap:at,sheen:re,sheenColorMap:ut,sheenRoughnessMap:Ze,specularMap:Et,specularColorMap:ft,specularIntensityMap:St,transmission:Ne,transmissionMap:$,thicknessMap:ke,gradientMap:ue,opaque:y.transparent===!1&&y.blending===ds&&y.alphaToCoverage===!1,alphaMap:ye,alphaTest:Ve,alphaHash:He,combine:y.combine,mapUv:Fe&&_(y.map.channel),aoMapUv:O&&_(y.aoMap.channel),lightMapUv:Je&&_(y.lightMap.channel),bumpMapUv:be&&_(y.bumpMap.channel),normalMapUv:Be&&_(y.normalMap.channel),displacementMapUv:Ie&&_(y.displacementMap.channel),emissiveMapUv:nt&&_(y.emissiveMap.channel),metalnessMapUv:Z&&_(y.metalnessMap.channel),roughnessMapUv:P&&_(y.roughnessMap.channel),anisotropyMapUv:we&&_(y.anisotropyMap.channel),clearcoatMapUv:Ue&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ot&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:at&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&_(y.sheenRoughnessMap.channel),specularMapUv:Et&&_(y.specularMap.channel),specularColorMapUv:ft&&_(y.specularColorMap.channel),specularIntensityMapUv:St&&_(y.specularIntensityMap.channel),transmissionMapUv:$&&_(y.transmissionMap.channel),thicknessMapUv:ke&&_(y.thicknessMap.channel),alphaMapUv:ye&&_(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Be||w),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!W.attributes.uv&&(Fe||ye),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ge,skinning:L.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:me,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Fe&&y.map.isVideoTexture===!0&&It.getTransfer(y.map.colorSpace)===Bt,decodeVideoTextureEmissive:nt&&y.emissiveMap.isVideoTexture===!0&&It.getTransfer(y.emissiveMap.colorSpace)===Bt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===cn,flipSided:y.side===Gn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:dt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&y.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function f(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const T in y.defines)v.push(T),v.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(M(v,y),b(v,y),v.push(i.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function M(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function b(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const v=g[y.type];let T;if(v){const N=Pi[v];T=Mi.clone(N.uniforms)}else T=y.uniforms;return T}function C(y,v){let T;for(let N=0,L=u.length;N<L;N++){const U=u[N];if(U.cacheKey===v){T=U,++T.usedTimes;break}}return T===void 0&&(T=new Bx(i,v,y,r),u.push(T)),T}function S(y){if(--y.usedTimes===0){const v=u.indexOf(y);u[v]=u[u.length-1],u.pop(),y.destroy()}}function E(y){l.remove(y)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:C,releaseProgram:S,releaseShaderCache:E,programs:u,dispose:A}}function Xx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function qx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function kh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,p,g,_,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function a(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||qx),n.length>1&&n.sort(d||kh),s.length>1&&s.sort(d||kh)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Yx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Fh,i.set(n,[o])):s>=r.length?(o=new Fh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function $x(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Ce};break;case"SpotLight":t={position:new V,direction:new V,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function jx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Kx=0;function Zx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Jx(i){const e=new $x,t=jx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);const s=new V,r=new zt,o=new zt;function a(c){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,M=0,b=0,x=0,C=0,S=0,E=0;c.sort(Zx);for(let y=0,v=c.length;y<v;y++){const T=c[y],N=T.color,L=T.intensity,U=T.distance,W=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=N.r*L,h+=N.g*L,d+=N.b*L;else if(T.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(T.sh.coefficients[B],L);E++}else if(T.isDirectionalLight){const B=e.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const z=T.shadow,I=t.get(T);I.shadowIntensity=z.intensity,I.shadowBias=z.bias,I.shadowNormalBias=z.normalBias,I.shadowRadius=z.radius,I.shadowMapSize=z.mapSize,n.directionalShadow[p]=I,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=T.shadow.matrix,M++}n.directional[p]=B,p++}else if(T.isSpotLight){const B=e.get(T);B.position.setFromMatrixPosition(T.matrixWorld),B.color.copy(N).multiplyScalar(L),B.distance=U,B.coneCos=Math.cos(T.angle),B.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),B.decay=T.decay,n.spot[_]=B;const z=T.shadow;if(T.map&&(n.spotLightMap[C]=T.map,C++,z.updateMatrices(T),T.castShadow&&S++),n.spotLightMatrix[_]=z.matrix,T.castShadow){const I=t.get(T);I.shadowIntensity=z.intensity,I.shadowBias=z.bias,I.shadowNormalBias=z.normalBias,I.shadowRadius=z.radius,I.shadowMapSize=z.mapSize,n.spotShadow[_]=I,n.spotShadowMap[_]=W,x++}_++}else if(T.isRectAreaLight){const B=e.get(T);B.color.copy(N).multiplyScalar(L),B.halfWidth.set(T.width*.5,0,0),B.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=B,m++}else if(T.isPointLight){const B=e.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),B.distance=T.distance,B.decay=T.decay,T.castShadow){const z=T.shadow,I=t.get(T);I.shadowIntensity=z.intensity,I.shadowBias=z.bias,I.shadowNormalBias=z.normalBias,I.shadowRadius=z.radius,I.shadowMapSize=z.mapSize,I.shadowCameraNear=z.camera.near,I.shadowCameraFar=z.camera.far,n.pointShadow[g]=I,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=T.shadow.matrix,b++}n.point[g]=B,g++}else if(T.isHemisphereLight){const B=e.get(T);B.skyColor.copy(T.color).multiplyScalar(L),B.groundColor.copy(T.groundColor).multiplyScalar(L),n.hemi[f]=B,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=$e.LTC_FLOAT_1,n.rectAreaLTC2=$e.LTC_FLOAT_2):(n.rectAreaLTC1=$e.LTC_HALF_1,n.rectAreaLTC2=$e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==p||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==f||A.numDirectionalShadows!==M||A.numPointShadows!==b||A.numSpotShadows!==x||A.numSpotMaps!==C||A.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+C-S,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,A.directionalLength=p,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=f,A.numDirectionalShadows=M,A.numPointShadows=b,A.numSpotShadows=x,A.numSpotMaps=C,A.numLightProbes=E,n.version=Kx++)}function l(c,u){let h=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){const b=c[f];if(b.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(b.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Oh(i){const e=new Jx(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Qx(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Oh(i),e.set(s,[a])):r>=o.length?(a=new Oh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class e1 extends $s{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class t1 extends $s{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const n1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i1=`uniform sampler2D shadow_pass;
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
}`;function s1(i,e,t){let n=new du;const s=new Re,r=new Re,o=new Ht,a=new e1({depthPacking:kp}),l=new t1,c={},u=t.maxTextureSize,h={[vs]:Gn,[Gn]:vs,[cn]:cn},d=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:n1,fragmentShader:i1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ft;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new lt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uf;let f=this.type;this.render=function(S,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const y=i.getRenderTarget(),v=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),N=i.state;N.setBlending(wn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const L=f!==Yi&&this.type===Yi,U=f===Yi&&this.type!==Yi;for(let W=0,B=S.length;W<B;W++){const z=S[W],I=z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const Y=I.getFrameExtents();if(s.multiply(Y),r.copy(I.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,I.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,I.mapSize.y=r.y)),I.map===null||L===!0||U===!0){const ie=this.type!==Yi?{minFilter:Tn,magFilter:Tn}:{};I.map!==null&&I.map.dispose(),I.map=new Wn(s.x,s.y,ie),I.map.texture.name=z.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const K=I.getViewportCount();for(let ie=0;ie<K;ie++){const me=I.getViewport(ie);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),N.viewport(o),I.updateMatrices(z,ie),n=I.getFrustum(),x(E,A,I.camera,z,this.type)}I.isPointLightShadow!==!0&&this.type===Yi&&M(I,A),I.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,v,T)};function M(S,E){const A=e.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Wn(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,A,d,_,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,A,p,_,null)}function b(S,E,A,y){let v=null;const T=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)v=T;else if(v=A.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const N=v.uuid,L=E.uuid;let U=c[N];U===void 0&&(U={},c[N]=U);let W=U[L];W===void 0&&(W=v.clone(),U[L]=W,E.addEventListener("dispose",C)),v=W}if(v.visible=E.visible,v.wireframe=E.wireframe,y===Yi?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:h[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,A.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=i.properties.get(v);N.light=A}return v}function x(S,E,A,y,v){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===Yi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);const L=e.update(S),U=S.material;if(Array.isArray(U)){const W=L.groups;for(let B=0,z=W.length;B<z;B++){const I=W[B],Y=U[I.materialIndex];if(Y&&Y.visible){const K=b(S,Y,y,v);S.onBeforeShadow(i,S,E,A,L,K,I),i.renderBufferDirect(A,null,L,K,S,I),S.onAfterShadow(i,S,E,A,L,K,I)}}}else if(U.visible){const W=b(S,U,y,v);S.onBeforeShadow(i,S,E,A,L,W,null),i.renderBufferDirect(A,null,L,W,S,null),S.onAfterShadow(i,S,E,A,L,W,null)}}const N=S.children;for(let L=0,U=N.length;L<U;L++)x(N[L],E,A,y,v)}function C(S){S.target.removeEventListener("dispose",C);for(const A in c){const y=c[A],v=S.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const r1={[Wl]:Xl,[ql]:jl,[Yl]:Kl,[Rr]:$l,[Xl]:Wl,[jl]:ql,[Kl]:Yl,[$l]:Rr};function o1(i,e){function t(){let $=!1;const ke=new Ht;let ue=null;const ye=new Ht(0,0,0,0);return{setMask:function(Ve){ue!==Ve&&!$&&(i.colorMask(Ve,Ve,Ve,Ve),ue=Ve)},setLocked:function(Ve){$=Ve},setClear:function(Ve,He,dt,Gt,$t){$t===!0&&(Ve*=Gt,He*=Gt,dt*=Gt),ke.set(Ve,He,dt,Gt),ye.equals(ke)===!1&&(i.clearColor(Ve,He,dt,Gt),ye.copy(ke))},reset:function(){$=!1,ue=null,ye.set(-1,0,0,0)}}}function n(){let $=!1,ke=!1,ue=null,ye=null,Ve=null;return{setReversed:function(He){if(ke!==He){const dt=e.get("EXT_clip_control");ke?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT);const Gt=Ve;Ve=null,this.setClear(Gt)}ke=He},getReversed:function(){return ke},setTest:function(He){He?le(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(He){ue!==He&&!$&&(i.depthMask(He),ue=He)},setFunc:function(He){if(ke&&(He=r1[He]),ye!==He){switch(He){case Wl:i.depthFunc(i.NEVER);break;case Xl:i.depthFunc(i.ALWAYS);break;case ql:i.depthFunc(i.LESS);break;case Rr:i.depthFunc(i.LEQUAL);break;case Yl:i.depthFunc(i.EQUAL);break;case $l:i.depthFunc(i.GEQUAL);break;case jl:i.depthFunc(i.GREATER);break;case Kl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=He}},setLocked:function(He){$=He},setClear:function(He){Ve!==He&&(ke&&(He=1-He),i.clearDepth(He),Ve=He)},reset:function(){$=!1,ue=null,ye=null,Ve=null,ke=!1}}}function s(){let $=!1,ke=null,ue=null,ye=null,Ve=null,He=null,dt=null,Gt=null,$t=null;return{setTest:function(At){$||(At?le(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(At){ke!==At&&!$&&(i.stencilMask(At),ke=At)},setFunc:function(At,fn,Cn){(ue!==At||ye!==fn||Ve!==Cn)&&(i.stencilFunc(At,fn,Cn),ue=At,ye=fn,Ve=Cn)},setOp:function(At,fn,Cn){(He!==At||dt!==fn||Gt!==Cn)&&(i.stencilOp(At,fn,Cn),He=At,dt=fn,Gt=Cn)},setLocked:function(At){$=At},setClear:function(At){$t!==At&&(i.clearStencil(At),$t=At)},reset:function(){$=!1,ke=null,ue=null,ye=null,Ve=null,He=null,dt=null,Gt=null,$t=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,M=null,b=null,x=null,C=null,S=null,E=new Ce(0,0,0),A=0,y=!1,v=null,T=null,N=null,L=null,U=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,z=0;const I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(I)[1]),B=z>=1):I.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),B=z>=2);let Y=null,K={};const ie=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),qe=new Ht().fromArray(ie),H=new Ht().fromArray(me);function J($,ke,ue,ye){const Ve=new Uint8Array(4),He=i.createTexture();i.bindTexture($,He),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let dt=0;dt<ue;dt++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(ke,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,Ve):i.texImage2D(ke+dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ve);return He}const he={};he[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(i.DEPTH_TEST),o.setFunc(Rr),be(!1),Be(Hu),le(i.CULL_FACE),O(wn);function le($){u[$]!==!0&&(i.enable($),u[$]=!0)}function ge($){u[$]!==!1&&(i.disable($),u[$]=!1)}function De($,ke){return h[$]!==ke?(i.bindFramebuffer($,ke),h[$]=ke,$===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ke),$===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ke),!0):!1}function Ee($,ke){let ue=p,ye=!1;if($){ue=d.get(ke),ue===void 0&&(ue=[],d.set(ke,ue));const Ve=$.textures;if(ue.length!==Ve.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let He=0,dt=Ve.length;He<dt;He++)ue[He]=i.COLOR_ATTACHMENT0+He;ue.length=Ve.length,ye=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,ye=!0);ye&&i.drawBuffers(ue)}function Fe($){return g!==$?(i.useProgram($),g=$,!0):!1}const fe={[xi]:i.FUNC_ADD,[xp]:i.FUNC_SUBTRACT,[_p]:i.FUNC_REVERSE_SUBTRACT};fe[Mp]=i.MIN,fe[yp]=i.MAX;const Me={[eo]:i.ZERO,[bp]:i.ONE,[Sp]:i.SRC_COLOR,[Bl]:i.SRC_ALPHA,[Ap]:i.SRC_ALPHA_SATURATE,[Hl]:i.DST_COLOR,[Vl]:i.DST_ALPHA,[wp]:i.ONE_MINUS_SRC_COLOR,[Gl]:i.ONE_MINUS_SRC_ALPHA,[Tp]:i.ONE_MINUS_DST_COLOR,[Ep]:i.ONE_MINUS_DST_ALPHA,[Cp]:i.CONSTANT_COLOR,[Rp]:i.ONE_MINUS_CONSTANT_COLOR,[Pp]:i.CONSTANT_ALPHA,[Lp]:i.ONE_MINUS_CONSTANT_ALPHA};function O($,ke,ue,ye,Ve,He,dt,Gt,$t,At){if($===wn){_===!0&&(ge(i.BLEND),_=!1);return}if(_===!1&&(le(i.BLEND),_=!0),$!==Nf){if($!==m||At!==y){if((f!==xi||x!==xi)&&(i.blendEquation(i.FUNC_ADD),f=xi,x=xi),At)switch($){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ai:i.blendFunc(i.ONE,i.ONE);break;case Wu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ai:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}M=null,b=null,C=null,S=null,E.set(0,0,0),A=0,m=$,y=At}return}Ve=Ve||ke,He=He||ue,dt=dt||ye,(ke!==f||Ve!==x)&&(i.blendEquationSeparate(fe[ke],fe[Ve]),f=ke,x=Ve),(ue!==M||ye!==b||He!==C||dt!==S)&&(i.blendFuncSeparate(Me[ue],Me[ye],Me[He],Me[dt]),M=ue,b=ye,C=He,S=dt),(Gt.equals(E)===!1||$t!==A)&&(i.blendColor(Gt.r,Gt.g,Gt.b,$t),E.copy(Gt),A=$t),m=$,y=!1}function Je($,ke){$.side===cn?ge(i.CULL_FACE):le(i.CULL_FACE);let ue=$.side===Gn;ke&&(ue=!ue),be(ue),$.blending===ds&&$.transparent===!1?O(wn):O($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),o.setFunc($.depthFunc),o.setTest($.depthTest),o.setMask($.depthWrite),r.setMask($.colorWrite);const ye=$.stencilWrite;a.setTest(ye),ye&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),nt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function be($){v!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),v=$)}function Be($){$!==gp?(le(i.CULL_FACE),$!==T&&($===Hu?i.cullFace(i.BACK):$===vp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),T=$}function Ie($){$!==N&&(B&&i.lineWidth($),N=$)}function nt($,ke,ue){$?(le(i.POLYGON_OFFSET_FILL),(L!==ke||U!==ue)&&(i.polygonOffset(ke,ue),L=ke,U=ue)):ge(i.POLYGON_OFFSET_FILL)}function Z($){$?le(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function P($){$===void 0&&($=i.TEXTURE0+W-1),Y!==$&&(i.activeTexture($),Y=$)}function w($,ke,ue){ue===void 0&&(Y===null?ue=i.TEXTURE0+W-1:ue=Y);let ye=K[ue];ye===void 0&&(ye={type:void 0,texture:void 0},K[ue]=ye),(ye.type!==$||ye.texture!==ke)&&(Y!==ue&&(i.activeTexture(ue),Y=ue),i.bindTexture($,ke||he[$]),ye.type=$,ye.texture=ke)}function X(){const $=K[Y];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function se(){try{i.compressedTexImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ne(){try{i.texSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function we(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ot(){try{i.texStorage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ae(){try{i.texStorage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ye(){try{i.texImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function at(){try{i.texImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ut($){qe.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),qe.copy($))}function Ze($){H.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),H.copy($))}function Et($,ke){let ue=c.get(ke);ue===void 0&&(ue=new WeakMap,c.set(ke,ue));let ye=ue.get($);ye===void 0&&(ye=i.getUniformBlockIndex(ke,$.name),ue.set($,ye))}function ft($,ke){const ye=c.get(ke).get($);l.get(ke)!==ye&&(i.uniformBlockBinding(ke,ye,$.__bindingPointIndex),l.set(ke,ye))}function St(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Y=null,K={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,M=null,b=null,x=null,C=null,S=null,E=new Ce(0,0,0),A=0,y=!1,v=null,T=null,N=null,L=null,U=null,qe.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:le,disable:ge,bindFramebuffer:De,drawBuffers:Ee,useProgram:Fe,setBlending:O,setMaterial:Je,setFlipSided:be,setCullFace:Be,setLineWidth:Ie,setPolygonOffset:nt,setScissorTest:Z,activeTexture:P,bindTexture:w,unbindTexture:X,compressedTexImage2D:ne,compressedTexImage3D:se,texImage2D:Ye,texImage3D:at,updateUBOMapping:Et,uniformBlockBinding:ft,texStorage2D:ot,texStorage3D:Ae,texSubImage2D:re,texSubImage3D:Ne,compressedTexSubImage2D:we,compressedTexSubImage3D:Ue,scissor:ut,viewport:Ze,reset:St}}function Bh(i,e,t,n){const s=a1(n);switch(t){case qf:return i*e;case $f:return i*e;case jf:return i*e*2;case ka:return i*e/s.components*s.byteLength;case ou:return i*e/s.components*s.byteLength;case Kf:return i*e*2/s.components*s.byteLength;case au:return i*e*2/s.components*s.byteLength;case Yf:return i*e*3/s.components*s.byteLength;case si:return i*e*4/s.components*s.byteLength;case lu:return i*e*4/s.components*s.byteLength;case ga:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xa:case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tc:case ic:return Math.max(i,16)*Math.max(e,8)/4;case ec:case nc:return Math.max(i,8)*Math.max(e,8)/2;case sc:case rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case cc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case uc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case dc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case pc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case vc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case _c:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ma:case yc:case bc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zf:case Sc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case wc:case Ec:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function a1(i){switch(i){case zi:case Hf:return{byteLength:1,components:1};case po:case Wf:case ri:return{byteLength:2,components:1};case su:case ru:return{byteLength:2,components:4};case Os:case iu:case Si:return{byteLength:4,components:1};case Xf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function l1(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return p?new OffscreenCanvas(P,w):Ra("canvas")}function _(P,w,X){let ne=1;const se=Z(P);if((se.width>X||se.height>X)&&(ne=X/Math.max(se.width,se.height)),ne<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const re=Math.floor(ne*se.width),Ne=Math.floor(ne*se.height);h===void 0&&(h=g(re,Ne));const we=w?g(re,Ne):h;return we.width=re,we.height=Ne,we.getContext("2d").drawImage(P,0,0,re,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+re+"x"+Ne+")."),we}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),P;return P}function m(P){return P.generateMipmaps}function f(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(P,w,X,ne,se=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let re=w;if(w===i.RED&&(X===i.FLOAT&&(re=i.R32F),X===i.HALF_FLOAT&&(re=i.R16F),X===i.UNSIGNED_BYTE&&(re=i.R8)),w===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.R8UI),X===i.UNSIGNED_SHORT&&(re=i.R16UI),X===i.UNSIGNED_INT&&(re=i.R32UI),X===i.BYTE&&(re=i.R8I),X===i.SHORT&&(re=i.R16I),X===i.INT&&(re=i.R32I)),w===i.RG&&(X===i.FLOAT&&(re=i.RG32F),X===i.HALF_FLOAT&&(re=i.RG16F),X===i.UNSIGNED_BYTE&&(re=i.RG8)),w===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.RG8UI),X===i.UNSIGNED_SHORT&&(re=i.RG16UI),X===i.UNSIGNED_INT&&(re=i.RG32UI),X===i.BYTE&&(re=i.RG8I),X===i.SHORT&&(re=i.RG16I),X===i.INT&&(re=i.RG32I)),w===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.RGB8UI),X===i.UNSIGNED_SHORT&&(re=i.RGB16UI),X===i.UNSIGNED_INT&&(re=i.RGB32UI),X===i.BYTE&&(re=i.RGB8I),X===i.SHORT&&(re=i.RGB16I),X===i.INT&&(re=i.RGB32I)),w===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),X===i.UNSIGNED_INT&&(re=i.RGBA32UI),X===i.BYTE&&(re=i.RGBA8I),X===i.SHORT&&(re=i.RGBA16I),X===i.INT&&(re=i.RGBA32I)),w===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),w===i.RGBA){const Ne=se?Fa:It.getTransfer(ne);X===i.FLOAT&&(re=i.RGBA32F),X===i.HALF_FLOAT&&(re=i.RGBA16F),X===i.UNSIGNED_BYTE&&(re=Ne===Bt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function x(P,w){let X;return P?w===null||w===Os||w===Bs?X=i.DEPTH24_STENCIL8:w===Si?X=i.DEPTH32F_STENCIL8:w===po&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Os||w===Bs?X=i.DEPTH_COMPONENT24:w===Si?X=i.DEPTH_COMPONENT32F:w===po&&(X=i.DEPTH_COMPONENT16),X}function C(P,w){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Tn&&P.minFilter!==Di?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function S(P){const w=P.target;w.removeEventListener("dispose",S),A(w),w.isVideoTexture&&u.delete(w)}function E(P){const w=P.target;w.removeEventListener("dispose",E),v(w)}function A(P){const w=n.get(P);if(w.__webglInit===void 0)return;const X=P.source,ne=d.get(X);if(ne){const se=ne[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&y(P),Object.keys(ne).length===0&&d.delete(X)}n.remove(P)}function y(P){const w=n.get(P);i.deleteTexture(w.__webglTexture);const X=P.source,ne=d.get(X);delete ne[w.__cacheKey],o.memory.textures--}function v(P){const w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(w.__webglFramebuffer[ne]))for(let se=0;se<w.__webglFramebuffer[ne].length;se++)i.deleteFramebuffer(w.__webglFramebuffer[ne][se]);else i.deleteFramebuffer(w.__webglFramebuffer[ne]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ne])}else{if(Array.isArray(w.__webglFramebuffer))for(let ne=0;ne<w.__webglFramebuffer.length;ne++)i.deleteFramebuffer(w.__webglFramebuffer[ne]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ne=0;ne<w.__webglColorRenderbuffer.length;ne++)w.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ne]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=P.textures;for(let ne=0,se=X.length;ne<se;ne++){const re=n.get(X[ne]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),n.remove(X[ne])}n.remove(P)}let T=0;function N(){T=0}function L(){const P=T;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),T+=1,P}function U(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function W(P,w){const X=n.get(P);if(P.isVideoTexture&&Ie(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){const ne=P.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(X,P,w);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+w)}function B(P,w){const X=n.get(P);if(P.version>0&&X.__version!==P.version){H(X,P,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+w)}function z(P,w){const X=n.get(P);if(P.version>0&&X.__version!==P.version){H(X,P,w);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+w)}function I(P,w){const X=n.get(P);if(P.version>0&&X.__version!==P.version){J(X,P,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+w)}const Y={[Ui]:i.REPEAT,[Ds]:i.CLAMP_TO_EDGE,[Ql]:i.MIRRORED_REPEAT},K={[Tn]:i.NEAREST,[zp]:i.NEAREST_MIPMAP_NEAREST,[Lo]:i.NEAREST_MIPMAP_LINEAR,[Di]:i.LINEAR,[Za]:i.LINEAR_MIPMAP_NEAREST,[Is]:i.LINEAR_MIPMAP_LINEAR},ie={[Op]:i.NEVER,[Xp]:i.ALWAYS,[Bp]:i.LESS,[Jf]:i.LEQUAL,[Gp]:i.EQUAL,[Wp]:i.GEQUAL,[Vp]:i.GREATER,[Hp]:i.NOTEQUAL};function me(P,w){if(w.type===Si&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Di||w.magFilter===Za||w.magFilter===Lo||w.magFilter===Is||w.minFilter===Di||w.minFilter===Za||w.minFilter===Lo||w.minFilter===Is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Y[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Y[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Y[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,K[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,K[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ie[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Tn||w.minFilter!==Lo&&w.minFilter!==Is||w.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function qe(P,w){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",S));const ne=w.source;let se=d.get(ne);se===void 0&&(se={},d.set(ne,se));const re=U(w);if(re!==P.__cacheKey){se[re]===void 0&&(se[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),se[re].usedTimes++;const Ne=se[P.__cacheKey];Ne!==void 0&&(se[P.__cacheKey].usedTimes--,Ne.usedTimes===0&&y(w)),P.__cacheKey=re,P.__webglTexture=se[re].texture}return X}function H(P,w,X){let ne=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ne=i.TEXTURE_3D);const se=qe(P,w),re=w.source;t.bindTexture(ne,P.__webglTexture,i.TEXTURE0+X);const Ne=n.get(re);if(re.version!==Ne.__version||se===!0){t.activeTexture(i.TEXTURE0+X);const we=It.getPrimaries(It.workingColorSpace),Ue=w.colorSpace===us?null:It.getPrimaries(w.colorSpace),ot=w.colorSpace===us||we===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let Ae=_(w.image,!1,s.maxTextureSize);Ae=nt(w,Ae);const Ye=r.convert(w.format,w.colorSpace),at=r.convert(w.type);let ut=b(w.internalFormat,Ye,at,w.colorSpace,w.isVideoTexture);me(ne,w);let Ze;const Et=w.mipmaps,ft=w.isVideoTexture!==!0,St=Ne.__version===void 0||se===!0,$=re.dataReady,ke=C(w,Ae);if(w.isDepthTexture)ut=x(w.format===Gs,w.type),St&&(ft?t.texStorage2D(i.TEXTURE_2D,1,ut,Ae.width,Ae.height):t.texImage2D(i.TEXTURE_2D,0,ut,Ae.width,Ae.height,0,Ye,at,null));else if(w.isDataTexture)if(Et.length>0){ft&&St&&t.texStorage2D(i.TEXTURE_2D,ke,ut,Et[0].width,Et[0].height);for(let ue=0,ye=Et.length;ue<ye;ue++)Ze=Et[ue],ft?$&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Ze.width,Ze.height,Ye,at,Ze.data):t.texImage2D(i.TEXTURE_2D,ue,ut,Ze.width,Ze.height,0,Ye,at,Ze.data);w.generateMipmaps=!1}else ft?(St&&t.texStorage2D(i.TEXTURE_2D,ke,ut,Ae.width,Ae.height),$&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Ye,at,Ae.data)):t.texImage2D(i.TEXTURE_2D,0,ut,Ae.width,Ae.height,0,Ye,at,Ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ft&&St&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,ut,Et[0].width,Et[0].height,Ae.depth);for(let ue=0,ye=Et.length;ue<ye;ue++)if(Ze=Et[ue],w.format!==si)if(Ye!==null)if(ft){if($)if(w.layerUpdates.size>0){const Ve=Bh(Ze.width,Ze.height,w.format,w.type);for(const He of w.layerUpdates){const dt=Ze.data.subarray(He*Ve/Ze.data.BYTES_PER_ELEMENT,(He+1)*Ve/Ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,He,Ze.width,Ze.height,1,Ye,dt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Ze.width,Ze.height,Ae.depth,Ye,Ze.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,ut,Ze.width,Ze.height,Ae.depth,0,Ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?$&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Ze.width,Ze.height,Ae.depth,Ye,at,Ze.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,ut,Ze.width,Ze.height,Ae.depth,0,Ye,at,Ze.data)}else{ft&&St&&t.texStorage2D(i.TEXTURE_2D,ke,ut,Et[0].width,Et[0].height);for(let ue=0,ye=Et.length;ue<ye;ue++)Ze=Et[ue],w.format!==si?Ye!==null?ft?$&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,Ze.width,Ze.height,Ye,Ze.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,ut,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?$&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Ze.width,Ze.height,Ye,at,Ze.data):t.texImage2D(i.TEXTURE_2D,ue,ut,Ze.width,Ze.height,0,Ye,at,Ze.data)}else if(w.isDataArrayTexture)if(ft){if(St&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,ut,Ae.width,Ae.height,Ae.depth),$)if(w.layerUpdates.size>0){const ue=Bh(Ae.width,Ae.height,w.format,w.type);for(const ye of w.layerUpdates){const Ve=Ae.data.subarray(ye*ue/Ae.data.BYTES_PER_ELEMENT,(ye+1)*ue/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ye,Ae.width,Ae.height,1,Ye,at,Ve)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ye,at,Ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,Ae.width,Ae.height,Ae.depth,0,Ye,at,Ae.data);else if(w.isData3DTexture)ft?(St&&t.texStorage3D(i.TEXTURE_3D,ke,ut,Ae.width,Ae.height,Ae.depth),$&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ye,at,Ae.data)):t.texImage3D(i.TEXTURE_3D,0,ut,Ae.width,Ae.height,Ae.depth,0,Ye,at,Ae.data);else if(w.isFramebufferTexture){if(St)if(ft)t.texStorage2D(i.TEXTURE_2D,ke,ut,Ae.width,Ae.height);else{let ue=Ae.width,ye=Ae.height;for(let Ve=0;Ve<ke;Ve++)t.texImage2D(i.TEXTURE_2D,Ve,ut,ue,ye,0,Ye,at,null),ue>>=1,ye>>=1}}else if(Et.length>0){if(ft&&St){const ue=Z(Et[0]);t.texStorage2D(i.TEXTURE_2D,ke,ut,ue.width,ue.height)}for(let ue=0,ye=Et.length;ue<ye;ue++)Ze=Et[ue],ft?$&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Ye,at,Ze):t.texImage2D(i.TEXTURE_2D,ue,ut,Ye,at,Ze);w.generateMipmaps=!1}else if(ft){if(St){const ue=Z(Ae);t.texStorage2D(i.TEXTURE_2D,ke,ut,ue.width,ue.height)}$&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ye,at,Ae)}else t.texImage2D(i.TEXTURE_2D,0,ut,Ye,at,Ae);m(w)&&f(ne),Ne.__version=re.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function J(P,w,X){if(w.image.length!==6)return;const ne=qe(P,w),se=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+X);const re=n.get(se);if(se.version!==re.__version||ne===!0){t.activeTexture(i.TEXTURE0+X);const Ne=It.getPrimaries(It.workingColorSpace),we=w.colorSpace===us?null:It.getPrimaries(w.colorSpace),Ue=w.colorSpace===us||Ne===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ot=w.isCompressedTexture||w.image[0].isCompressedTexture,Ae=w.image[0]&&w.image[0].isDataTexture,Ye=[];for(let ye=0;ye<6;ye++)!ot&&!Ae?Ye[ye]=_(w.image[ye],!0,s.maxCubemapSize):Ye[ye]=Ae?w.image[ye].image:w.image[ye],Ye[ye]=nt(w,Ye[ye]);const at=Ye[0],ut=r.convert(w.format,w.colorSpace),Ze=r.convert(w.type),Et=b(w.internalFormat,ut,Ze,w.colorSpace),ft=w.isVideoTexture!==!0,St=re.__version===void 0||ne===!0,$=se.dataReady;let ke=C(w,at);me(i.TEXTURE_CUBE_MAP,w);let ue;if(ot){ft&&St&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,Et,at.width,at.height);for(let ye=0;ye<6;ye++){ue=Ye[ye].mipmaps;for(let Ve=0;Ve<ue.length;Ve++){const He=ue[Ve];w.format!==si?ut!==null?ft?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve,0,0,He.width,He.height,ut,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve,Et,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve,0,0,He.width,He.height,ut,Ze,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve,Et,He.width,He.height,0,ut,Ze,He.data)}}}else{if(ue=w.mipmaps,ft&&St){ue.length>0&&ke++;const ye=Z(Ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,Et,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Ae){ft?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ye[ye].width,Ye[ye].height,ut,Ze,Ye[ye].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Et,Ye[ye].width,Ye[ye].height,0,ut,Ze,Ye[ye].data);for(let Ve=0;Ve<ue.length;Ve++){const dt=ue[Ve].image[ye].image;ft?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve+1,0,0,dt.width,dt.height,ut,Ze,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve+1,Et,dt.width,dt.height,0,ut,Ze,dt.data)}}else{ft?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ut,Ze,Ye[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Et,ut,Ze,Ye[ye]);for(let Ve=0;Ve<ue.length;Ve++){const He=ue[Ve];ft?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve+1,0,0,ut,Ze,He.image[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve+1,Et,ut,Ze,He.image[ye])}}}m(w)&&f(i.TEXTURE_CUBE_MAP),re.__version=se.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function he(P,w,X,ne,se,re){const Ne=r.convert(X.format,X.colorSpace),we=r.convert(X.type),Ue=b(X.internalFormat,Ne,we,X.colorSpace),ot=n.get(w),Ae=n.get(X);if(Ae.__renderTarget=w,!ot.__hasExternalTextures){const Ye=Math.max(1,w.width>>re),at=Math.max(1,w.height>>re);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,re,Ue,Ye,at,w.depth,0,Ne,we,null):t.texImage2D(se,re,Ue,Ye,at,0,Ne,we,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Be(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,se,Ae.__webglTexture,0,be(w)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,se,Ae.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(P,w,X){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){const ne=w.depthTexture,se=ne&&ne.isDepthTexture?ne.type:null,re=x(w.stencilBuffer,se),Ne=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=be(w);Be(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,re,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,re,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,re,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ne,i.RENDERBUFFER,P)}else{const ne=w.textures;for(let se=0;se<ne.length;se++){const re=ne[se],Ne=r.convert(re.format,re.colorSpace),we=r.convert(re.type),Ue=b(re.internalFormat,Ne,we,re.colorSpace),ot=be(w);X&&Be(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Ue,w.width,w.height):Be(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,Ue,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ue,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(w.depthTexture);ne.__renderTarget=w,(!ne.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),W(w.depthTexture,0);const se=ne.__webglTexture,re=be(w);if(w.depthTexture.format===yr)Be(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(w.depthTexture.format===Gs)Be(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function De(P){const w=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const ne=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ne){const se=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ne.removeEventListener("dispose",se)};ne.addEventListener("dispose",se),w.__depthDisposeCallback=se}w.__boundDepthTexture=ne}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ge(w.__webglFramebuffer,P)}else if(X){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]===void 0)w.__webglDepthbuffer[ne]=i.createRenderbuffer(),le(w.__webglDepthbuffer[ne],P,!1);else{const se=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,re)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),le(w.__webglDepthbuffer,P,!1);else{const ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(P,w,X){const ne=n.get(P);w!==void 0&&he(ne.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&De(P)}function Fe(P){const w=P.texture,X=n.get(P),ne=n.get(w);P.addEventListener("dispose",E);const se=P.textures,re=P.isWebGLCubeRenderTarget===!0,Ne=se.length>1;if(Ne||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=w.version,o.memory.textures++),re){X.__webglFramebuffer=[];for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[we]=[];for(let Ue=0;Ue<w.mipmaps.length;Ue++)X.__webglFramebuffer[we][Ue]=i.createFramebuffer()}else X.__webglFramebuffer[we]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let we=0;we<w.mipmaps.length;we++)X.__webglFramebuffer[we]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Ne)for(let we=0,Ue=se.length;we<Ue;we++){const ot=n.get(se[we]);ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Be(P)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let we=0;we<se.length;we++){const Ue=se[we];X.__webglColorRenderbuffer[we]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[we]);const ot=r.convert(Ue.format,Ue.colorSpace),Ae=r.convert(Ue.type),Ye=b(Ue.internalFormat,ot,Ae,Ue.colorSpace,P.isXRRenderTarget===!0),at=be(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Ye,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,X.__webglColorRenderbuffer[we])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),le(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),me(i.TEXTURE_CUBE_MAP,w);for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ue=0;Ue<w.mipmaps.length;Ue++)he(X.__webglFramebuffer[we][Ue],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ue);else he(X.__webglFramebuffer[we],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);m(w)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let we=0,Ue=se.length;we<Ue;we++){const ot=se[we],Ae=n.get(ot);t.bindTexture(i.TEXTURE_2D,Ae.__webglTexture),me(i.TEXTURE_2D,ot),he(X.__webglFramebuffer,P,ot,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,0),m(ot)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let we=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(we=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,ne.__webglTexture),me(we,w),w.mipmaps&&w.mipmaps.length>0)for(let Ue=0;Ue<w.mipmaps.length;Ue++)he(X.__webglFramebuffer[Ue],P,w,i.COLOR_ATTACHMENT0,we,Ue);else he(X.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,we,0);m(w)&&f(we),t.unbindTexture()}P.depthBuffer&&De(P)}function fe(P){const w=P.textures;for(let X=0,ne=w.length;X<ne;X++){const se=w[X];if(m(se)){const re=M(P),Ne=n.get(se).__webglTexture;t.bindTexture(re,Ne),f(re),t.unbindTexture()}}}const Me=[],O=[];function Je(P){if(P.samples>0){if(Be(P)===!1){const w=P.textures,X=P.width,ne=P.height;let se=i.COLOR_BUFFER_BIT;const re=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=n.get(P),we=w.length>1;if(we)for(let Ue=0;Ue<w.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ue=0;Ue<w.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),we){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ue]);const ot=n.get(w[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,X,ne,0,0,X,ne,se,i.NEAREST),l===!0&&(Me.length=0,O.length=0,Me.push(i.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Me.push(re),O.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),we)for(let Ue=0;Ue<w.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ue]);const ot=n.get(w[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,ot,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function be(P){return Math.min(s.maxSamples,P.samples)}function Be(P){const w=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ie(P){const w=o.render.frame;u.get(P)!==w&&(u.set(P,w),P.update())}function nt(P,w){const X=P.colorSpace,ne=P.format,se=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==Fr&&X!==us&&(It.getTransfer(X)===Bt?(ne!==si||se!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function Z(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=B,this.setTexture3D=z,this.setTextureCube=I,this.rebindTextures=Ee,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Be}function c1(i,e){function t(n,s=us){let r;const o=It.getTransfer(s);if(n===zi)return i.UNSIGNED_BYTE;if(n===su)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ru)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hf)return i.BYTE;if(n===Wf)return i.SHORT;if(n===po)return i.UNSIGNED_SHORT;if(n===iu)return i.INT;if(n===Os)return i.UNSIGNED_INT;if(n===Si)return i.FLOAT;if(n===ri)return i.HALF_FLOAT;if(n===qf)return i.ALPHA;if(n===Yf)return i.RGB;if(n===si)return i.RGBA;if(n===$f)return i.LUMINANCE;if(n===jf)return i.LUMINANCE_ALPHA;if(n===yr)return i.DEPTH_COMPONENT;if(n===Gs)return i.DEPTH_STENCIL;if(n===ka)return i.RED;if(n===ou)return i.RED_INTEGER;if(n===Kf)return i.RG;if(n===au)return i.RG_INTEGER;if(n===lu)return i.RGBA_INTEGER;if(n===ga||n===va||n===xa||n===_a)if(o===Bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ec||n===tc||n===nc||n===ic)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sc||n===rc||n===oc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sc||n===rc)return o===Bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ac||n===lc||n===cc||n===uc||n===hc||n===fc||n===dc||n===pc||n===mc||n===gc||n===vc||n===xc||n===_c||n===Mc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ac)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_c)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ma||n===yc||n===bc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ma)return o===Bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zf||n===Sc||n===wc||n===Ec)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ma)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class u1 extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bt extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h1={type:"move"};class wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(h1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const f1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d1=`
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

}`;class p1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Un,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new sn({vertexShader:f1,fragmentShader:d1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m1 extends Or{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const _=new p1,m=t.getContextAttributes();let f=null,M=null;const b=[],x=[],C=new Re;let S=null;const E=new Zn;E.viewport=new Ht;const A=new Zn;A.viewport=new Ht;const y=[E,A],v=new u1;let T=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let J=b[H];return J===void 0&&(J=new wl,b[H]=J),J.getTargetRaySpace()},this.getControllerGrip=function(H){let J=b[H];return J===void 0&&(J=new wl,b[H]=J),J.getGripSpace()},this.getHand=function(H){let J=b[H];return J===void 0&&(J=new wl,b[H]=J),J.getHandSpace()};function L(H){const J=x.indexOf(H.inputSource);if(J===-1)return;const he=b[J];he!==void 0&&(he.update(H.inputSource,H.frame,c||o),he.dispatchEvent({type:H.type,data:H.inputSource}))}function U(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",W);for(let H=0;H<b.length;H++){const J=x[H];J!==null&&(x[H]=null,b[H].disconnect(J))}T=null,N=null,_.reset(),e.setRenderTarget(f),p=null,d=null,h=null,s=null,M=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",U),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Wn(p.framebufferWidth,p.framebufferHeight,{format:si,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,he=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=m.stencil?Gs:yr,he=m.stencil?Bs:Os);const ge={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(ge),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Wn(d.textureWidth,d.textureHeight,{format:si,type:zi,depthTexture:new gu(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qe.setContext(s),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(H){for(let J=0;J<H.removed.length;J++){const he=H.removed[J],le=x.indexOf(he);le>=0&&(x[le]=null,b[le].disconnect(he))}for(let J=0;J<H.added.length;J++){const he=H.added[J];let le=x.indexOf(he);if(le===-1){for(let De=0;De<b.length;De++)if(De>=x.length){x.push(he),le=De;break}else if(x[De]===null){x[De]=he,le=De;break}if(le===-1)break}const ge=b[le];ge&&ge.connect(he)}}const B=new V,z=new V;function I(H,J,he){B.setFromMatrixPosition(J.matrixWorld),z.setFromMatrixPosition(he.matrixWorld);const le=B.distanceTo(z),ge=J.projectionMatrix.elements,De=he.projectionMatrix.elements,Ee=ge[14]/(ge[10]-1),Fe=ge[14]/(ge[10]+1),fe=(ge[9]+1)/ge[5],Me=(ge[9]-1)/ge[5],O=(ge[8]-1)/ge[0],Je=(De[8]+1)/De[0],be=Ee*O,Be=Ee*Je,Ie=le/(-O+Je),nt=Ie*-O;if(J.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(nt),H.translateZ(Ie),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ge[10]===-1)H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Z=Ee+Ie,P=Fe+Ie,w=be-nt,X=Be+(le-nt),ne=fe*Fe/P*Z,se=Me*Fe/P*Z;H.projectionMatrix.makePerspective(w,X,ne,se,Z,P),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Y(H,J){J===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(J.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let J=H.near,he=H.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(he=_.depthFar)),v.near=A.near=E.near=J,v.far=A.far=E.far=he,(T!==v.near||N!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,N=v.far),E.layers.mask=H.layers.mask|2,A.layers.mask=H.layers.mask|4,v.layers.mask=E.layers.mask|A.layers.mask;const le=H.parent,ge=v.cameras;Y(v,le);for(let De=0;De<ge.length;De++)Y(ge[De],le);ge.length===2?I(v,E,A):v.projectionMatrix.copy(E.projectionMatrix),K(H,v,le)};function K(H,J,he){he===null?H.matrix.copy(J.matrixWorld):(H.matrix.copy(he.matrixWorld),H.matrix.invert(),H.matrix.multiply(J.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=mo*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ie=null;function me(H,J){if(u=J.getViewerPose(c||o),g=J,u!==null){const he=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let le=!1;he.length!==v.cameras.length&&(v.cameras.length=0,le=!0);for(let De=0;De<he.length;De++){const Ee=he[De];let Fe=null;if(p!==null)Fe=p.getViewport(Ee);else{const Me=h.getViewSubImage(d,Ee);Fe=Me.viewport,De===0&&(e.setRenderTargetTextures(M,Me.colorTexture,d.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(M))}let fe=y[De];fe===void 0&&(fe=new Zn,fe.layers.enable(De),fe.viewport=new Ht,y[De]=fe),fe.matrix.fromArray(Ee.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Ee.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),De===0&&(v.matrix.copy(fe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),le===!0&&v.cameras.push(fe)}const ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const De=h.getDepthInformation(he[0]);De&&De.isValid&&De.texture&&_.init(e,De,s.renderState)}}for(let he=0;he<b.length;he++){const le=x[he],ge=b[he];le!==null&&ge!==void 0&&ge.update(le,J,c||o)}ie&&ie(H,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const qe=new ld;qe.setAnimationLoop(me),this.setAnimationLoop=function(H){ie=H},this.dispose=function(){}}}const Ts=new Ni,g1=new zt;function v1(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,rd(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,b,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Gn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Gn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=e.get(f),b=M.envMap,x=M.envMapRotation;b&&(m.envMap.value=b,Ts.copy(x),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),m.envMapRotation.value.setFromMatrix4(g1.makeRotationFromEuler(Ts)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Gn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function x1(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const x=b.program;n.uniformBlockBinding(M,x)}function c(M,b){let x=s[M.id];x===void 0&&(g(M),x=u(M),s[M.id]=x,M.addEventListener("dispose",m));const C=b.program;n.updateUBOMapping(M,C);const S=e.render.frame;r[M.id]!==S&&(d(M),r[M.id]=S)}function u(M){const b=h();M.__bindingPointIndex=b;const x=i.createBuffer(),C=M.__size,S=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,C,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,x),x}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const b=s[M.id],x=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let S=0,E=x.length;S<E;S++){const A=Array.isArray(x[S])?x[S]:[x[S]];for(let y=0,v=A.length;y<v;y++){const T=A[y];if(p(T,S,y,C)===!0){const N=T.__offset,L=Array.isArray(T.value)?T.value:[T.value];let U=0;for(let W=0;W<L.length;W++){const B=L[W],z=_(B);typeof B=="number"||typeof B=="boolean"?(T.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,N+U,T.__data)):B.isMatrix3?(T.__data[0]=B.elements[0],T.__data[1]=B.elements[1],T.__data[2]=B.elements[2],T.__data[3]=0,T.__data[4]=B.elements[3],T.__data[5]=B.elements[4],T.__data[6]=B.elements[5],T.__data[7]=0,T.__data[8]=B.elements[6],T.__data[9]=B.elements[7],T.__data[10]=B.elements[8],T.__data[11]=0):(B.toArray(T.__data,U),U+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,b,x,C){const S=M.value,E=b+"_"+x;if(C[E]===void 0)return typeof S=="number"||typeof S=="boolean"?C[E]=S:C[E]=S.clone(),!0;{const A=C[E];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return C[E]=S,!0}else if(A.equals(S)===!1)return A.copy(S),!0}return!1}function g(M){const b=M.uniforms;let x=0;const C=16;for(let E=0,A=b.length;E<A;E++){const y=Array.isArray(b[E])?b[E]:[b[E]];for(let v=0,T=y.length;v<T;v++){const N=y[v],L=Array.isArray(N.value)?N.value:[N.value];for(let U=0,W=L.length;U<W;U++){const B=L[U],z=_(B),I=x%C,Y=I%z.boundary,K=I+Y;x+=Y,K!==0&&C-K<z.storage&&(x+=C-K),N.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=z.storage}}}const S=x%C;return S>0&&(x+=C-S),M.__size=x,M.__cache={},this}function _(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){const b=M.target;b.removeEventListener("dispose",m);const x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class _1{constructor(e={}){const{canvas:t=l0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const M=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=ps,this.toneMappingExposure=1;const x=this;let C=!1,S=0,E=0,A=null,y=-1,v=null;const T=new Ht,N=new Ht;let L=null;const U=new Ce(0);let W=0,B=t.width,z=t.height,I=1,Y=null,K=null;const ie=new Ht(0,0,B,z),me=new Ht(0,0,B,z);let qe=!1;const H=new du;let J=!1,he=!1;const le=new zt,ge=new zt,De=new V,Ee=new Ht,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function Me(){return A===null?I:1}let O=n;function Je(R,j){return t.getContext(R,j)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${eu}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",He,!1),O===null){const j="webgl2";if(O=Je(j,R),O===null)throw Je(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let be,Be,Ie,nt,Z,P,w,X,ne,se,re,Ne,we,Ue,ot,Ae,Ye,at,ut,Ze,Et,ft,St,$;function ke(){be=new wv(O),be.init(),ft=new c1(O,be),Be=new xv(O,be,e,ft),Ie=new o1(O,be),Be.reverseDepthBuffer&&d&&Ie.buffers.depth.setReversed(!0),nt=new Av(O),Z=new Xx,P=new l1(O,be,Ie,Z,Be,ft,nt),w=new Mv(x),X=new Sv(x),ne=new U0(O),St=new gv(O,ne),se=new Ev(O,ne,nt,St),re=new Rv(O,se,ne,nt),ut=new Cv(O,Be,P),Ae=new _v(Z),Ne=new Wx(x,w,X,be,Be,St,Ae),we=new v1(x,Z),Ue=new Yx,ot=new Qx(be),at=new mv(x,w,X,Ie,re,p,l),Ye=new s1(x,re,Be),$=new x1(O,nt,Be,Ie),Ze=new vv(O,be,nt),Et=new Tv(O,be,nt),nt.programs=Ne.programs,x.capabilities=Be,x.extensions=be,x.properties=Z,x.renderLists=Ue,x.shadowMap=Ye,x.state=Ie,x.info=nt}ke();const ue=new m1(x,O);this.xr=ue,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=be.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=be.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(R){R!==void 0&&(I=R,this.setSize(B,z,!1))},this.getSize=function(R){return R.set(B,z)},this.setSize=function(R,j,oe=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,z=j,t.width=Math.floor(R*I),t.height=Math.floor(j*I),oe===!0&&(t.style.width=R+"px",t.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(B*I,z*I).floor()},this.setDrawingBufferSize=function(R,j,oe){B=R,z=j,I=oe,t.width=Math.floor(R*oe),t.height=Math.floor(j*oe),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(T)},this.getViewport=function(R){return R.copy(ie)},this.setViewport=function(R,j,oe,ce){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,j,oe,ce),Ie.viewport(T.copy(ie).multiplyScalar(I).round())},this.getScissor=function(R){return R.copy(me)},this.setScissor=function(R,j,oe,ce){R.isVector4?me.set(R.x,R.y,R.z,R.w):me.set(R,j,oe,ce),Ie.scissor(N.copy(me).multiplyScalar(I).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(R){Ie.setScissorTest(qe=R)},this.setOpaqueSort=function(R){Y=R},this.setTransparentSort=function(R){K=R},this.getClearColor=function(R){return R.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(R=!0,j=!0,oe=!0){let ce=0;if(R){let Q=!1;if(A!==null){const ze=A.texture.format;Q=ze===lu||ze===au||ze===ou}if(Q){const ze=A.texture.type,Ke=ze===zi||ze===Os||ze===po||ze===Bs||ze===su||ze===ru,it=at.getClearColor(),rt=at.getClearAlpha(),xt=it.r,k=it.g,F=it.b;Ke?(g[0]=xt,g[1]=k,g[2]=F,g[3]=rt,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=xt,_[1]=k,_[2]=F,_[3]=rt,O.clearBufferiv(O.COLOR,0,_))}else ce|=O.COLOR_BUFFER_BIT}j&&(ce|=O.DEPTH_BUFFER_BIT),oe&&(ce|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",He,!1),Ue.dispose(),ot.dispose(),Z.dispose(),w.dispose(),X.dispose(),re.dispose(),St.dispose(),$.dispose(),Ne.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Xn),ue.removeEventListener("sessionend",Zt),ci.stop()};function ye(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ve(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const R=nt.autoReset,j=Ye.enabled,oe=Ye.autoUpdate,ce=Ye.needsUpdate,Q=Ye.type;ke(),nt.autoReset=R,Ye.enabled=j,Ye.autoUpdate=oe,Ye.needsUpdate=ce,Ye.type=Q}function He(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function dt(R){const j=R.target;j.removeEventListener("dispose",dt),Gt(j)}function Gt(R){$t(R),Z.remove(R)}function $t(R){const j=Z.get(R).programs;j!==void 0&&(j.forEach(function(oe){Ne.releaseProgram(oe)}),R.isShaderMaterial&&Ne.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,oe,ce,Q,ze){j===null&&(j=Fe);const Ke=Q.isMesh&&Q.matrixWorld.determinant()<0,it=tt(R,j,oe,ce,Q);Ie.setMaterial(ce,Ke);let rt=oe.index,xt=1;if(ce.wireframe===!0){if(rt=se.getWireframeAttribute(oe),rt===void 0)return;xt=2}const k=oe.drawRange,F=oe.attributes.position;let ee=k.start*xt,pe=(k.start+k.count)*xt;ze!==null&&(ee=Math.max(ee,ze.start*xt),pe=Math.min(pe,(ze.start+ze.count)*xt)),rt!==null?(ee=Math.max(ee,0),pe=Math.min(pe,rt.count)):F!=null&&(ee=Math.max(ee,0),pe=Math.min(pe,F.count));const Se=pe-ee;if(Se<0||Se===1/0)return;St.setup(Q,ce,it,oe,rt);let Le,Te=Ze;if(rt!==null&&(Le=ne.get(rt),Te=Et,Te.setIndex(Le)),Q.isMesh)ce.wireframe===!0?(Ie.setLineWidth(ce.wireframeLinewidth*Me()),Te.setMode(O.LINES)):Te.setMode(O.TRIANGLES);else if(Q.isLine){let te=ce.linewidth;te===void 0&&(te=1),Ie.setLineWidth(te*Me()),Q.isLineSegments?Te.setMode(O.LINES):Q.isLineLoop?Te.setMode(O.LINE_LOOP):Te.setMode(O.LINE_STRIP)}else Q.isPoints?Te.setMode(O.POINTS):Q.isSprite&&Te.setMode(O.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Te.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))Te.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const te=Q._multiDrawStarts,je=Q._multiDrawCounts,Xe=Q._multiDrawCount,pt=rt?ne.get(rt).bytesPerElement:1,Rt=Z.get(ce).currentProgram.getUniforms();for(let Dt=0;Dt<Xe;Dt++)Rt.setValue(O,"_gl_DrawID",Dt),Te.render(te[Dt]/pt,je[Dt])}else if(Q.isInstancedMesh)Te.renderInstances(ee,Se,Q.count);else if(oe.isInstancedBufferGeometry){const te=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,je=Math.min(oe.instanceCount,te);Te.renderInstances(ee,Se,je)}else Te.render(ee,Se)};function At(R,j,oe){R.transparent===!0&&R.side===cn&&R.forceSinglePass===!1?(R.side=Gn,R.needsUpdate=!0,We(R,j,oe),R.side=vs,R.needsUpdate=!0,We(R,j,oe),R.side=cn):We(R,j,oe)}this.compile=function(R,j,oe=null){oe===null&&(oe=R),f=ot.get(oe),f.init(j),b.push(f),oe.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(f.pushLight(Q),Q.castShadow&&f.pushShadow(Q))}),R!==oe&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(f.pushLight(Q),Q.castShadow&&f.pushShadow(Q))}),f.setupLights();const ce=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const ze=Q.material;if(ze)if(Array.isArray(ze))for(let Ke=0;Ke<ze.length;Ke++){const it=ze[Ke];At(it,oe,Q),ce.add(it)}else At(ze,oe,Q),ce.add(ze)}),b.pop(),f=null,ce},this.compileAsync=function(R,j,oe=null){const ce=this.compile(R,j,oe);return new Promise(Q=>{function ze(){if(ce.forEach(function(Ke){Z.get(Ke).currentProgram.isReady()&&ce.delete(Ke)}),ce.size===0){Q(R);return}setTimeout(ze,10)}be.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let fn=null;function Cn(R){fn&&fn(R)}function Xn(){ci.stop()}function Zt(){ci.start()}const ci=new ld;ci.setAnimationLoop(Cn),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(R){fn=R,ue.setAnimationLoop(R),R===null?ci.stop():ci.start()},ue.addEventListener("sessionstart",Xn),ue.addEventListener("sessionend",Zt),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(j),j=ue.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,j,A),f=ot.get(R,b.length),f.init(j),b.push(f),ge.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),H.setFromProjectionMatrix(ge),he=this.localClippingEnabled,J=Ae.init(this.clippingPlanes,he),m=Ue.get(R,M.length),m.init(),M.push(m),ue.enabled===!0&&ue.isPresenting===!0){const ze=x.xr.getDepthSensingMesh();ze!==null&&ui(ze,j,-1/0,x.sortObjects)}ui(R,j,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Y,K),fe=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,fe&&at.addToRenderList(m,R),this.info.render.frame++,J===!0&&Ae.beginShadows();const oe=f.state.shadowsArray;Ye.render(oe,R,j),J===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=m.opaque,Q=m.transmissive;if(f.setupLights(),j.isArrayCamera){const ze=j.cameras;if(Q.length>0)for(let Ke=0,it=ze.length;Ke<it;Ke++){const rt=ze[Ke];G(ce,Q,R,rt)}fe&&at.render(R);for(let Ke=0,it=ze.length;Ke<it;Ke++){const rt=ze[Ke];ts(m,R,rt,rt.viewport)}}else Q.length>0&&G(ce,Q,R,j),fe&&at.render(R),ts(m,R,j);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(x,R,j),St.resetDefaultState(),y=-1,v=null,b.pop(),b.length>0?(f=b[b.length-1],J===!0&&Ae.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function ui(R,j,oe,ce){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)oe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)f.pushLight(R),R.castShadow&&f.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||H.intersectsSprite(R)){ce&&Ee.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ge);const Ke=re.update(R),it=R.material;it.visible&&m.push(R,Ke,it,oe,Ee.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||H.intersectsObject(R))){const Ke=re.update(R),it=R.material;if(ce&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ee.copy(R.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),Ee.copy(Ke.boundingSphere.center)),Ee.applyMatrix4(R.matrixWorld).applyMatrix4(ge)),Array.isArray(it)){const rt=Ke.groups;for(let xt=0,k=rt.length;xt<k;xt++){const F=rt[xt],ee=it[F.materialIndex];ee&&ee.visible&&m.push(R,Ke,ee,oe,Ee.z,F)}}else it.visible&&m.push(R,Ke,it,oe,Ee.z,null)}}const ze=R.children;for(let Ke=0,it=ze.length;Ke<it;Ke++)ui(ze[Ke],j,oe,ce)}function ts(R,j,oe,ce){const Q=R.opaque,ze=R.transmissive,Ke=R.transparent;f.setupLightsView(oe),J===!0&&Ae.setGlobalState(x.clippingPlanes,oe),ce&&Ie.viewport(T.copy(ce)),Q.length>0&&ve(Q,j,oe),ze.length>0&&ve(ze,j,oe),Ke.length>0&&ve(Ke,j,oe),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function G(R,j,oe,ce){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[ce.id]===void 0&&(f.state.transmissionRenderTarget[ce.id]=new Wn(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?ri:zi,minFilter:Is,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace}));const ze=f.state.transmissionRenderTarget[ce.id],Ke=ce.viewport||T;ze.setSize(Ke.z,Ke.w);const it=x.getRenderTarget();x.setRenderTarget(ze),x.getClearColor(U),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),fe&&at.render(oe);const rt=x.toneMapping;x.toneMapping=ps;const xt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),f.setupLightsView(ce),J===!0&&Ae.setGlobalState(x.clippingPlanes,ce),ve(R,oe,ce),P.updateMultisampleRenderTarget(ze),P.updateRenderTargetMipmap(ze),be.has("WEBGL_multisampled_render_to_texture")===!1){let k=!1;for(let F=0,ee=j.length;F<ee;F++){const pe=j[F],Se=pe.object,Le=pe.geometry,Te=pe.material,te=pe.group;if(Te.side===cn&&Se.layers.test(ce.layers)){const je=Te.side;Te.side=Gn,Te.needsUpdate=!0,ae(Se,oe,ce,Le,Te,te),Te.side=je,Te.needsUpdate=!0,k=!0}}k===!0&&(P.updateMultisampleRenderTarget(ze),P.updateRenderTargetMipmap(ze))}x.setRenderTarget(it),x.setClearColor(U,W),xt!==void 0&&(ce.viewport=xt),x.toneMapping=rt}function ve(R,j,oe){const ce=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,ze=R.length;Q<ze;Q++){const Ke=R[Q],it=Ke.object,rt=Ke.geometry,xt=ce===null?Ke.material:ce,k=Ke.group;it.layers.test(oe.layers)&&ae(it,j,oe,rt,xt,k)}}function ae(R,j,oe,ce,Q,ze){R.onBeforeRender(x,j,oe,ce,Q,ze),R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(x,j,oe,ce,R,ze),Q.transparent===!0&&Q.side===cn&&Q.forceSinglePass===!1?(Q.side=Gn,Q.needsUpdate=!0,x.renderBufferDirect(oe,j,ce,Q,R,ze),Q.side=vs,Q.needsUpdate=!0,x.renderBufferDirect(oe,j,ce,Q,R,ze),Q.side=cn):x.renderBufferDirect(oe,j,ce,Q,R,ze),R.onAfterRender(x,j,oe,ce,Q,ze)}function We(R,j,oe){j.isScene!==!0&&(j=Fe);const ce=Z.get(R),Q=f.state.lights,ze=f.state.shadowsArray,Ke=Q.state.version,it=Ne.getParameters(R,Q.state,ze,j,oe),rt=Ne.getProgramCacheKey(it);let xt=ce.programs;ce.environment=R.isMeshStandardMaterial?j.environment:null,ce.fog=j.fog,ce.envMap=(R.isMeshStandardMaterial?X:w).get(R.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,xt===void 0&&(R.addEventListener("dispose",dt),xt=new Map,ce.programs=xt);let k=xt.get(rt);if(k!==void 0){if(ce.currentProgram===k&&ce.lightsStateVersion===Ke)return Pe(R,it),k}else it.uniforms=Ne.getUniforms(R),R.onBeforeCompile(it,x),k=Ne.acquireProgram(it,rt),xt.set(rt,k),ce.uniforms=it.uniforms;const F=ce.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(F.clippingPlanes=Ae.uniform),Pe(R,it),ce.needsLights=gt(R),ce.lightsStateVersion=Ke,ce.needsLights&&(F.ambientLightColor.value=Q.state.ambient,F.lightProbe.value=Q.state.probe,F.directionalLights.value=Q.state.directional,F.directionalLightShadows.value=Q.state.directionalShadow,F.spotLights.value=Q.state.spot,F.spotLightShadows.value=Q.state.spotShadow,F.rectAreaLights.value=Q.state.rectArea,F.ltc_1.value=Q.state.rectAreaLTC1,F.ltc_2.value=Q.state.rectAreaLTC2,F.pointLights.value=Q.state.point,F.pointLightShadows.value=Q.state.pointShadow,F.hemisphereLights.value=Q.state.hemi,F.directionalShadowMap.value=Q.state.directionalShadowMap,F.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,F.spotShadowMap.value=Q.state.spotShadowMap,F.spotLightMatrix.value=Q.state.spotLightMatrix,F.spotLightMap.value=Q.state.spotLightMap,F.pointShadowMap.value=Q.state.pointShadowMap,F.pointShadowMatrix.value=Q.state.pointShadowMatrix),ce.currentProgram=k,ce.uniformsList=null,k}function Qe(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=ya.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Pe(R,j){const oe=Z.get(R);oe.outputColorSpace=j.outputColorSpace,oe.batching=j.batching,oe.batchingColor=j.batchingColor,oe.instancing=j.instancing,oe.instancingColor=j.instancingColor,oe.instancingMorph=j.instancingMorph,oe.skinning=j.skinning,oe.morphTargets=j.morphTargets,oe.morphNormals=j.morphNormals,oe.morphColors=j.morphColors,oe.morphTargetsCount=j.morphTargetsCount,oe.numClippingPlanes=j.numClippingPlanes,oe.numIntersection=j.numClipIntersection,oe.vertexAlphas=j.vertexAlphas,oe.vertexTangents=j.vertexTangents,oe.toneMapping=j.toneMapping}function tt(R,j,oe,ce,Q){j.isScene!==!0&&(j=Fe),P.resetTextureUnits();const ze=j.fog,Ke=ce.isMeshStandardMaterial?j.environment:null,it=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Fr,rt=(ce.isMeshStandardMaterial?X:w).get(ce.envMap||Ke),xt=ce.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,k=!!oe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),F=!!oe.morphAttributes.position,ee=!!oe.morphAttributes.normal,pe=!!oe.morphAttributes.color;let Se=ps;ce.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Se=x.toneMapping);const Le=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Te=Le!==void 0?Le.length:0,te=Z.get(ce),je=f.state.lights;if(J===!0&&(he===!0||R!==v)){const Pn=R===v&&ce.id===y;Ae.setState(ce,R,Pn)}let Xe=!1;ce.version===te.__version?(te.needsLights&&te.lightsStateVersion!==je.state.version||te.outputColorSpace!==it||Q.isBatchedMesh&&te.batching===!1||!Q.isBatchedMesh&&te.batching===!0||Q.isBatchedMesh&&te.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&te.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&te.instancing===!1||!Q.isInstancedMesh&&te.instancing===!0||Q.isSkinnedMesh&&te.skinning===!1||!Q.isSkinnedMesh&&te.skinning===!0||Q.isInstancedMesh&&te.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&te.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&te.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&te.instancingMorph===!1&&Q.morphTexture!==null||te.envMap!==rt||ce.fog===!0&&te.fog!==ze||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Ae.numPlanes||te.numIntersection!==Ae.numIntersection)||te.vertexAlphas!==xt||te.vertexTangents!==k||te.morphTargets!==F||te.morphNormals!==ee||te.morphColors!==pe||te.toneMapping!==Se||te.morphTargetsCount!==Te)&&(Xe=!0):(Xe=!0,te.__version=ce.version);let pt=te.currentProgram;Xe===!0&&(pt=We(ce,j,Q));let Rt=!1,Dt=!1,Fi=!1;const Pt=pt.getUniforms(),Rn=te.uniforms;if(Ie.useProgram(pt.program)&&(Rt=!0,Dt=!0,Fi=!0),ce.id!==y&&(y=ce.id,Dt=!0),Rt||v!==R){Ie.buffers.depth.getReversed()?(le.copy(R.projectionMatrix),u0(le),h0(le),Pt.setValue(O,"projectionMatrix",le)):Pt.setValue(O,"projectionMatrix",R.projectionMatrix),Pt.setValue(O,"viewMatrix",R.matrixWorldInverse);const qn=Pt.map.cameraPosition;qn!==void 0&&qn.setValue(O,De.setFromMatrixPosition(R.matrixWorld)),Be.logarithmicDepthBuffer&&Pt.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Pt.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),v!==R&&(v=R,Dt=!0,Fi=!0)}if(Q.isSkinnedMesh){Pt.setOptional(O,Q,"bindMatrix"),Pt.setOptional(O,Q,"bindMatrixInverse");const Pn=Q.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),Pt.setValue(O,"boneTexture",Pn.boneTexture,P))}Q.isBatchedMesh&&(Pt.setOptional(O,Q,"batchingTexture"),Pt.setValue(O,"batchingTexture",Q._matricesTexture,P),Pt.setOptional(O,Q,"batchingIdTexture"),Pt.setValue(O,"batchingIdTexture",Q._indirectTexture,P),Pt.setOptional(O,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Pt.setValue(O,"batchingColorTexture",Q._colorsTexture,P));const hi=oe.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&ut.update(Q,oe,pt),(Dt||te.receiveShadow!==Q.receiveShadow)&&(te.receiveShadow=Q.receiveShadow,Pt.setValue(O,"receiveShadow",Q.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(Rn.envMap.value=rt,Rn.flipEnvMap.value=rt.isCubeTexture&&rt.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&j.environment!==null&&(Rn.envMapIntensity.value=j.environmentIntensity),Dt&&(Pt.setValue(O,"toneMappingExposure",x.toneMappingExposure),te.needsLights&&st(Rn,Fi),ze&&ce.fog===!0&&we.refreshFogUniforms(Rn,ze),we.refreshMaterialUniforms(Rn,ce,I,z,f.state.transmissionRenderTarget[R.id]),ya.upload(O,Qe(te),Rn,P)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(ya.upload(O,Qe(te),Rn,P),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Pt.setValue(O,"center",Q.center),Pt.setValue(O,"modelViewMatrix",Q.modelViewMatrix),Pt.setValue(O,"normalMatrix",Q.normalMatrix),Pt.setValue(O,"modelMatrix",Q.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const Pn=ce.uniformsGroups;for(let qn=0,Yn=Pn.length;qn<Yn;qn++){const ns=Pn[qn];$.update(ns,pt),$.bind(ns,pt)}}return pt}function st(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function gt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,j,oe){Z.get(R.texture).__webglTexture=j,Z.get(R.depthTexture).__webglTexture=oe;const ce=Z.get(R);ce.__hasExternalTextures=!0,ce.__autoAllocateDepthBuffer=oe===void 0,ce.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,j){const oe=Z.get(R);oe.__webglFramebuffer=j,oe.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,oe=0){A=R,S=j,E=oe;let ce=!0,Q=null,ze=!1,Ke=!1;if(R){const rt=Z.get(R);if(rt.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(O.FRAMEBUFFER,null),ce=!1;else if(rt.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(rt.__hasExternalTextures)P.rebindTextures(R,Z.get(R.texture).__webglTexture,Z.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const F=R.depthTexture;if(rt.__boundDepthTexture!==F){if(F!==null&&Z.has(F)&&(R.width!==F.image.width||R.height!==F.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}const xt=R.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(Ke=!0);const k=Z.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(k[j])?Q=k[j][oe]:Q=k[j],ze=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?Q=Z.get(R).__webglMultisampledFramebuffer:Array.isArray(k)?Q=k[oe]:Q=k,T.copy(R.viewport),N.copy(R.scissor),L=R.scissorTest}else T.copy(ie).multiplyScalar(I).floor(),N.copy(me).multiplyScalar(I).floor(),L=qe;if(Ie.bindFramebuffer(O.FRAMEBUFFER,Q)&&ce&&Ie.drawBuffers(R,Q),Ie.viewport(T),Ie.scissor(N),Ie.setScissorTest(L),ze){const rt=Z.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+j,rt.__webglTexture,oe)}else if(Ke){const rt=Z.get(R.texture),xt=j||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,rt.__webglTexture,oe||0,xt)}y=-1},this.readRenderTargetPixels=function(R,j,oe,ce,Q,ze,Ke){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=Z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ke!==void 0&&(it=it[Ke]),it){Ie.bindFramebuffer(O.FRAMEBUFFER,it);try{const rt=R.texture,xt=rt.format,k=rt.type;if(!Be.textureFormatReadable(xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(k)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-ce&&oe>=0&&oe<=R.height-Q&&O.readPixels(j,oe,ce,Q,ft.convert(xt),ft.convert(k),ze)}finally{const rt=A!==null?Z.get(A).__webglFramebuffer:null;Ie.bindFramebuffer(O.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(R,j,oe,ce,Q,ze,Ke){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let it=Z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ke!==void 0&&(it=it[Ke]),it){const rt=R.texture,xt=rt.format,k=rt.type;if(!Be.textureFormatReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(k))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=R.width-ce&&oe>=0&&oe<=R.height-Q){Ie.bindFramebuffer(O.FRAMEBUFFER,it);const F=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,F),O.bufferData(O.PIXEL_PACK_BUFFER,ze.byteLength,O.STREAM_READ),O.readPixels(j,oe,ce,Q,ft.convert(xt),ft.convert(k),0);const ee=A!==null?Z.get(A).__webglFramebuffer:null;Ie.bindFramebuffer(O.FRAMEBUFFER,ee);const pe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await c0(O,pe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,F),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ze),O.deleteBuffer(F),O.deleteSync(pe),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,j=null,oe=0){R.isTexture!==!0&&(to("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,R=arguments[1]);const ce=Math.pow(2,-oe),Q=Math.floor(R.image.width*ce),ze=Math.floor(R.image.height*ce),Ke=j!==null?j.x:0,it=j!==null?j.y:0;P.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,oe,0,0,Ke,it,Q,ze),Ie.unbindTexture()},this.copyTextureToTexture=function(R,j,oe=null,ce=null,Q=0){R.isTexture!==!0&&(to("WebGLRenderer: copyTextureToTexture function signature has changed."),ce=arguments[0]||null,R=arguments[1],j=arguments[2],Q=arguments[3]||0,oe=null);let ze,Ke,it,rt,xt,k,F,ee,pe;const Se=R.isCompressedTexture?R.mipmaps[Q]:R.image;oe!==null?(ze=oe.max.x-oe.min.x,Ke=oe.max.y-oe.min.y,it=oe.isBox3?oe.max.z-oe.min.z:1,rt=oe.min.x,xt=oe.min.y,k=oe.isBox3?oe.min.z:0):(ze=Se.width,Ke=Se.height,it=Se.depth||1,rt=0,xt=0,k=0),ce!==null?(F=ce.x,ee=ce.y,pe=ce.z):(F=0,ee=0,pe=0);const Le=ft.convert(j.format),Te=ft.convert(j.type);let te;j.isData3DTexture?(P.setTexture3D(j,0),te=O.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(P.setTexture2DArray(j,0),te=O.TEXTURE_2D_ARRAY):(P.setTexture2D(j,0),te=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,j.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,j.unpackAlignment);const je=O.getParameter(O.UNPACK_ROW_LENGTH),Xe=O.getParameter(O.UNPACK_IMAGE_HEIGHT),pt=O.getParameter(O.UNPACK_SKIP_PIXELS),Rt=O.getParameter(O.UNPACK_SKIP_ROWS),Dt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Se.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Se.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,rt),O.pixelStorei(O.UNPACK_SKIP_ROWS,xt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,k);const Fi=R.isDataArrayTexture||R.isData3DTexture,Pt=j.isDataArrayTexture||j.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Rn=Z.get(R),hi=Z.get(j),Pn=Z.get(Rn.__renderTarget),qn=Z.get(hi.__renderTarget);Ie.bindFramebuffer(O.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Yn=0;Yn<it;Yn++)Fi&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Z.get(R).__webglTexture,Q,k+Yn),R.isDepthTexture?(Pt&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Z.get(j).__webglTexture,Q,pe+Yn),O.blitFramebuffer(rt,xt,ze,Ke,F,ee,ze,Ke,O.DEPTH_BUFFER_BIT,O.NEAREST)):Pt?O.copyTexSubImage3D(te,Q,F,ee,pe+Yn,rt,xt,ze,Ke):O.copyTexSubImage2D(te,Q,F,ee,pe+Yn,rt,xt,ze,Ke);Ie.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Pt?R.isDataTexture||R.isData3DTexture?O.texSubImage3D(te,Q,F,ee,pe,ze,Ke,it,Le,Te,Se.data):j.isCompressedArrayTexture?O.compressedTexSubImage3D(te,Q,F,ee,pe,ze,Ke,it,Le,Se.data):O.texSubImage3D(te,Q,F,ee,pe,ze,Ke,it,Le,Te,Se):R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Q,F,ee,ze,Ke,Le,Te,Se.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Q,F,ee,Se.width,Se.height,Le,Se.data):O.texSubImage2D(O.TEXTURE_2D,Q,F,ee,ze,Ke,Le,Te,Se);O.pixelStorei(O.UNPACK_ROW_LENGTH,je),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Xe),O.pixelStorei(O.UNPACK_SKIP_PIXELS,pt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Rt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Dt),Q===0&&j.generateMipmaps&&O.generateMipmap(te),Ie.unbindTexture()},this.copyTextureToTexture3D=function(R,j,oe=null,ce=null,Q=0){return R.isTexture!==!0&&(to("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,ce=arguments[1]||null,R=arguments[2],j=arguments[3],Q=arguments[4]||0),to('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,j,oe,ce,Q)},this.initRenderTarget=function(R){Z.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Ie.unbindTexture()},this.resetState=function(){S=0,E=0,A=null,Ie.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}}class vu{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=n}clone(){return new vu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class M1 extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ba extends Un{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Tn,u=Tn,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gh extends Ot{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const dr=new zt,Vh=new zt,Jo=[],Hh=new Ys,y1=new zt,jr=new lt,Kr=new Br;class gn extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,y1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ys),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,dr),Hh.copy(e.boundingBox).applyMatrix4(dr),this.boundingBox.union(Hh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Br),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,dr),Kr.copy(e.boundingSphere).applyMatrix4(dr),this.boundingSphere.union(Kr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kr.copy(this.boundingSphere),Kr.applyMatrix4(n),e.ray.intersectsSphere(Kr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,dr),Vh.multiplyMatrices(n,dr),jr.matrixWorld=Vh,jr.raycast(e,Jo);for(let o=0,a=Jo.length;o<a;o++){const l=Jo[o];l.instanceId=r,l.object=this,t.push(l)}Jo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ba(new Float32Array(s*this.count),s,this.count,ka,Si));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class wo extends $s{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wh=new zt,Cc=new hu,Qo=new Br,ea=new V;class Ga extends Xt{constructor(e=new Ft,t=new wo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(s),Qo.radius+=r,e.ray.intersectsSphere(Qo)===!1)return;Wh.copy(s).invert(),Cc.copy(e.ray).applyMatrix4(Wh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);ea.fromBufferAttribute(h,m),Xh(ea,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,_=p;g<_;g++)ea.fromBufferAttribute(h,g),Xh(ea,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xh(i,e,t,n,s,r,o){const a=Cc.distanceSqToPoint(i);if(a<t){const l=new V;Cc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class oi extends Un{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ki{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,p=(o-u)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Re:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new V,s=[],r=[],o=[],a=new V,l=new zt;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new V)}r[0]=new V,o[0]=new V;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(yn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(yn(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xu extends ki{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Re){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class b1 extends xu{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function _u(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,p*=u,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const ta=new V,El=new _u,Tl=new _u,Al=new _u;class Mu extends ki{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new V){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(ta.subVectors(s[0],s[1]).add(s[0]),c=ta);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ta.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ta),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),El.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),Tl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),Al.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(El.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Tl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Al.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(El.calc(l),Tl.calc(l),Al.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new V().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function qh(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function S1(i,e){const t=1-i;return t*t*e}function w1(i,e){return 2*(1-i)*i*e}function E1(i,e){return i*i*e}function oo(i,e,t,n){return S1(i,e)+w1(i,t)+E1(i,n)}function T1(i,e){const t=1-i;return t*t*t*e}function A1(i,e){const t=1-i;return 3*t*t*i*e}function C1(i,e){return 3*(1-i)*i*i*e}function R1(i,e){return i*i*i*e}function ao(i,e,t,n,s){return T1(i,e)+A1(i,t)+C1(i,n)+R1(i,s)}class dd extends ki{constructor(e=new Re,t=new Re,n=new Re,s=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Re){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ao(e,s.x,r.x,o.x,a.x),ao(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class P1 extends ki{constructor(e=new V,t=new V,n=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new V){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ao(e,s.x,r.x,o.x,a.x),ao(e,s.y,r.y,o.y,a.y),ao(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pd extends ki{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class L1 extends ki{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class md extends ki{constructor(e=new Re,t=new Re,n=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Re){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(oo(e,s.x,r.x,o.x),oo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class D1 extends ki{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(oo(e,s.x,r.x,o.x),oo(e,s.y,r.y,o.y),oo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gd extends ki{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(qh(a,l.x,c.x,u.x,h.x),qh(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Re().fromArray(s))}return this}}var Rc=Object.freeze({__proto__:null,ArcCurve:b1,CatmullRomCurve3:Mu,CubicBezierCurve:dd,CubicBezierCurve3:P1,EllipseCurve:xu,LineCurve:pd,LineCurve3:L1,QuadraticBezierCurve:md,QuadraticBezierCurve3:D1,SplineCurve:gd});class I1 extends ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Rc[s.type]().fromJSON(s))}return this}}class Pc extends I1{constructor(e){super(),this.type="Path",this.currentPoint=new Re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new pd(this.currentPoint.clone(),new Re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new md(this.currentPoint.clone(),new Re(e,t),new Re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new dd(this.currentPoint.clone(),new Re(e,t),new Re(n,s),new Re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new gd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new xu(e,t,n,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class yu extends Ft{constructor(e=[new Re(0,-.5),new Re(.5,0),new Re(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=yn(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/t,h=new V,d=new Re,p=new V,g=new V,_=new V;let m=0,f=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,f=e[M+1].y-e[M].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[M+1].x-e[M].x,f=e[M+1].y-e[M].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let M=0;M<=t;M++){const b=n+M*u*s,x=Math.sin(b),C=Math.cos(b);for(let S=0;S<=e.length-1;S++){h.x=e[S].x*x,h.y=e[S].y,h.z=e[S].x*C,o.push(h.x,h.y,h.z),d.x=M/t,d.y=S/(e.length-1),a.push(d.x,d.y);const E=l[3*S+0]*x,A=l[3*S+1],y=l[3*S+0]*C;c.push(E,A,y)}}for(let M=0;M<t;M++)for(let b=0;b<e.length-1;b++){const x=b+M*e.length,C=x,S=x+e.length,E=x+e.length+1,A=x+1;r.push(C,S,A),r.push(E,A,S)}this.setIndex(r),this.setAttribute("position",new ht(o,3)),this.setAttribute("uv",new ht(a,2)),this.setAttribute("normal",new ht(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yu(e.points,e.segments,e.phiStart,e.phiLength)}}class Va extends yu{constructor(e=1,t=1,n=4,s=8){const r=new Pc;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new Va(e.radius,e.length,e.capSegments,e.radialSegments)}}class Vs extends Ft{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new V,u=new Re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const p=n+h/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(a,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Yt extends Ft{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;M(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new ht(h,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(p,2));function M(){const x=new V,C=new V;let S=0;const E=(t-e)/n;for(let A=0;A<=r;A++){const y=[],v=A/r,T=v*(t-e)+e;for(let N=0;N<=s;N++){const L=N/s,U=L*l+a,W=Math.sin(U),B=Math.cos(U);C.x=T*W,C.y=-v*n+m,C.z=T*B,h.push(C.x,C.y,C.z),x.set(W,E,B).normalize(),d.push(x.x,x.y,x.z),p.push(L,1-v),y.push(g++)}_.push(y)}for(let A=0;A<s;A++)for(let y=0;y<r;y++){const v=_[y][A],T=_[y+1][A],N=_[y+1][A+1],L=_[y][A+1];(e>0||y!==0)&&(u.push(v,T,L),S+=3),(t>0||y!==r-1)&&(u.push(T,N,L),S+=3)}c.addGroup(f,S,0),f+=S}function b(x){const C=g,S=new Re,E=new V;let A=0;const y=x===!0?e:t,v=x===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,m*v,0),d.push(0,v,0),p.push(.5,.5),g++;const T=g;for(let N=0;N<=s;N++){const U=N/s*l+a,W=Math.cos(U),B=Math.sin(U);E.x=y*B,E.y=m*v,E.z=y*W,h.push(E.x,E.y,E.z),d.push(0,v,0),S.x=W*.5+.5,S.y=B*.5*v+.5,p.push(S.x,S.y),g++}for(let N=0;N<s;N++){const L=C+N,U=T+N;x===!0?u.push(U,U+1,L):u.push(U+1,U,L),A+=3}c.addGroup(f,A,x===!0?1:2),f+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jn extends Yt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Jn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Eo extends Ft{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(r.slice(),3)),this.setAttribute("uv",new ht(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const b=new V,x=new V,C=new V;for(let S=0;S<t.length;S+=3)p(t[S+0],b),p(t[S+1],x),p(t[S+2],C),l(b,x,C,M)}function l(M,b,x,C){const S=C+1,E=[];for(let A=0;A<=S;A++){E[A]=[];const y=M.clone().lerp(x,A/S),v=b.clone().lerp(x,A/S),T=S-A;for(let N=0;N<=T;N++)N===0&&A===S?E[A][N]=y:E[A][N]=y.clone().lerp(v,N/T)}for(let A=0;A<S;A++)for(let y=0;y<2*(S-A)-1;y++){const v=Math.floor(y/2);y%2===0?(d(E[A][v+1]),d(E[A+1][v]),d(E[A][v])):(d(E[A][v+1]),d(E[A+1][v+1]),d(E[A+1][v]))}}function c(M){const b=new V;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(M),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function u(){const M=new V;for(let b=0;b<r.length;b+=3){M.x=r[b+0],M.y=r[b+1],M.z=r[b+2];const x=m(M)/2/Math.PI+.5,C=f(M)/Math.PI+.5;o.push(x,1-C)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){const b=o[M+0],x=o[M+2],C=o[M+4],S=Math.max(b,x,C),E=Math.min(b,x,C);S>.9&&E<.1&&(b<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,b){const x=M*3;b.x=e[x+0],b.y=e[x+1],b.z=e[x+2]}function g(){const M=new V,b=new V,x=new V,C=new V,S=new Re,E=new Re,A=new Re;for(let y=0,v=0;y<r.length;y+=9,v+=6){M.set(r[y+0],r[y+1],r[y+2]),b.set(r[y+3],r[y+4],r[y+5]),x.set(r[y+6],r[y+7],r[y+8]),S.set(o[v+0],o[v+1]),E.set(o[v+2],o[v+3]),A.set(o[v+4],o[v+5]),C.copy(M).add(b).add(x).divideScalar(3);const T=m(C);_(S,v+0,M,T),_(E,v+2,b,T),_(A,v+4,x,T)}}function _(M,b,x,C){C<0&&M.x===1&&(o[b]=M.x-1),x.x===0&&x.z===0&&(o[b]=C/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.vertices,e.indices,e.radius,e.details)}}class Ha extends Eo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ha(e.radius,e.detail)}}class vd extends Pc{constructor(e){super(e),this.uuid=qs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Pc().fromJSON(s))}return this}}const U1={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=xd(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,p;if(n&&(r=O1(i,e,r,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<s;g+=t)h=i[g],d=i[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return go(r,o,t,a,l,p,0),o}};function xd(i,e,t,n,s){let r,o;if(s===K1(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Yh(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Yh(r,i[r],i[r+1],o);return o&&Wa(o,o.next)&&(xo(o),o=o.next),o}function Hs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Wa(t,t.next)||an(t.prev,t,t.next)===0)){if(xo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function go(i,e,t,n,s,r,o){if(!i)return;!o&&r&&W1(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?N1(i,n,s,r):z1(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),xo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=k1(Hs(i),e,t),go(i,e,t,n,s,r,2)):o===2&&F1(i,e,t,n,s,r):go(Hs(i),e,t,n,s,r,1);break}}}function z1(i){const e=i.prev,t=i,n=i.next;if(an(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&_r(s,a,r,l,o,c,g.x,g.y)&&an(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function N1(i,e,t,n){const s=i.prev,r=i,o=i.next;if(an(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,_=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,f=Lc(p,g,e,t,n),M=Lc(_,m,e,t,n);let b=i.prevZ,x=i.nextZ;for(;b&&b.z>=f&&x&&x.z<=M;){if(b.x>=p&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&_r(a,u,l,h,c,d,b.x,b.y)&&an(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&_r(a,u,l,h,c,d,x.x,x.y)&&an(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=f;){if(b.x>=p&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&_r(a,u,l,h,c,d,b.x,b.y)&&an(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=M;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&_r(a,u,l,h,c,d,x.x,x.y)&&an(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function k1(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Wa(s,r)&&_d(s,n,n.next,r)&&vo(s,r)&&vo(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),xo(n),xo(n.next),n=i=r),n=n.next}while(n!==i);return Hs(n)}function F1(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Y1(o,a)){let l=Md(o,a);o=Hs(o,o.next),l=Hs(l,l.next),go(o,e,t,n,s,r,0),go(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function O1(i,e,t,n){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=xd(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(q1(c));for(s.sort(B1),r=0;r<s.length;r++)t=G1(s[r],t);return t}function B1(i,e){return i.x-e.x}function G1(i,e){const t=V1(i,e);if(!t)return e;const n=Md(t,i);return Hs(n,n.next),Hs(t,t.next)}function V1(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&_r(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),vo(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&H1(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function H1(i,e){return an(i.prev,i,e.prev)<0&&an(e.next,i,i.next)<0}function W1(i,e,t,n){let s=i;do s.z===0&&(s.z=Lc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,X1(s)}function X1(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Lc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function q1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function _r(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Y1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!$1(i,e)&&(vo(i,e)&&vo(e,i)&&j1(i,e)&&(an(i.prev,i,e.prev)||an(i,e.prev,e))||Wa(i,e)&&an(i.prev,i,i.next)>0&&an(e.prev,e,e.next)>0)}function an(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Wa(i,e){return i.x===e.x&&i.y===e.y}function _d(i,e,t,n){const s=ia(an(i,e,t)),r=ia(an(i,e,n)),o=ia(an(t,n,i)),a=ia(an(t,n,e));return!!(s!==r&&o!==a||s===0&&na(i,t,e)||r===0&&na(i,n,e)||o===0&&na(t,i,n)||a===0&&na(t,e,n))}function na(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ia(i){return i>0?1:i<0?-1:0}function $1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&_d(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function vo(i,e){return an(i.prev,i,i.next)<0?an(i,e,i.next)>=0&&an(i,i.prev,e)>=0:an(i,e,i.prev)<0||an(i,i.next,e)<0}function j1(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Md(i,e){const t=new Dc(i.i,i.x,i.y),n=new Dc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Yh(i,e,t,n){const s=new Dc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function xo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Dc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function K1(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class lo{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return lo.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];$h(e),jh(n,e);let o=e.length;t.forEach($h);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,jh(n,t[l]);const a=U1.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function $h(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function jh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class bu extends Ft{constructor(e=new vd([new Re(.5,.5),new Re(-.5,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ht(s,3)),this.setAttribute("uv",new ht(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Z1;let b,x=!1,C,S,E,A;f&&(b=f.getSpacedPoints(u),x=!0,d=!1,C=f.computeFrenetFrames(u,!1),S=new V,E=new V,A=new V),d||(m=0,p=0,g=0,_=0);const y=a.extractPoints(c);let v=y.shape;const T=y.holes;if(!lo.isClockWise(v)){v=v.reverse();for(let fe=0,Me=T.length;fe<Me;fe++){const O=T[fe];lo.isClockWise(O)&&(T[fe]=O.reverse())}}const L=lo.triangulateShape(v,T),U=v;for(let fe=0,Me=T.length;fe<Me;fe++){const O=T[fe];v=v.concat(O)}function W(fe,Me,O){return Me||console.error("THREE.ExtrudeGeometry: vec does not exist"),fe.clone().addScaledVector(Me,O)}const B=v.length,z=L.length;function I(fe,Me,O){let Je,be,Be;const Ie=fe.x-Me.x,nt=fe.y-Me.y,Z=O.x-fe.x,P=O.y-fe.y,w=Ie*Ie+nt*nt,X=Ie*P-nt*Z;if(Math.abs(X)>Number.EPSILON){const ne=Math.sqrt(w),se=Math.sqrt(Z*Z+P*P),re=Me.x-nt/ne,Ne=Me.y+Ie/ne,we=O.x-P/se,Ue=O.y+Z/se,ot=((we-re)*P-(Ue-Ne)*Z)/(Ie*P-nt*Z);Je=re+Ie*ot-fe.x,be=Ne+nt*ot-fe.y;const Ae=Je*Je+be*be;if(Ae<=2)return new Re(Je,be);Be=Math.sqrt(Ae/2)}else{let ne=!1;Ie>Number.EPSILON?Z>Number.EPSILON&&(ne=!0):Ie<-Number.EPSILON?Z<-Number.EPSILON&&(ne=!0):Math.sign(nt)===Math.sign(P)&&(ne=!0),ne?(Je=-nt,be=Ie,Be=Math.sqrt(w)):(Je=Ie,be=nt,Be=Math.sqrt(w/2))}return new Re(Je/Be,be/Be)}const Y=[];for(let fe=0,Me=U.length,O=Me-1,Je=fe+1;fe<Me;fe++,O++,Je++)O===Me&&(O=0),Je===Me&&(Je=0),Y[fe]=I(U[fe],U[O],U[Je]);const K=[];let ie,me=Y.concat();for(let fe=0,Me=T.length;fe<Me;fe++){const O=T[fe];ie=[];for(let Je=0,be=O.length,Be=be-1,Ie=Je+1;Je<be;Je++,Be++,Ie++)Be===be&&(Be=0),Ie===be&&(Ie=0),ie[Je]=I(O[Je],O[Be],O[Ie]);K.push(ie),me=me.concat(ie)}for(let fe=0;fe<m;fe++){const Me=fe/m,O=p*Math.cos(Me*Math.PI/2),Je=g*Math.sin(Me*Math.PI/2)+_;for(let be=0,Be=U.length;be<Be;be++){const Ie=W(U[be],Y[be],Je);le(Ie.x,Ie.y,-O)}for(let be=0,Be=T.length;be<Be;be++){const Ie=T[be];ie=K[be];for(let nt=0,Z=Ie.length;nt<Z;nt++){const P=W(Ie[nt],ie[nt],Je);le(P.x,P.y,-O)}}}const qe=g+_;for(let fe=0;fe<B;fe++){const Me=d?W(v[fe],me[fe],qe):v[fe];x?(E.copy(C.normals[0]).multiplyScalar(Me.x),S.copy(C.binormals[0]).multiplyScalar(Me.y),A.copy(b[0]).add(E).add(S),le(A.x,A.y,A.z)):le(Me.x,Me.y,0)}for(let fe=1;fe<=u;fe++)for(let Me=0;Me<B;Me++){const O=d?W(v[Me],me[Me],qe):v[Me];x?(E.copy(C.normals[fe]).multiplyScalar(O.x),S.copy(C.binormals[fe]).multiplyScalar(O.y),A.copy(b[fe]).add(E).add(S),le(A.x,A.y,A.z)):le(O.x,O.y,h/u*fe)}for(let fe=m-1;fe>=0;fe--){const Me=fe/m,O=p*Math.cos(Me*Math.PI/2),Je=g*Math.sin(Me*Math.PI/2)+_;for(let be=0,Be=U.length;be<Be;be++){const Ie=W(U[be],Y[be],Je);le(Ie.x,Ie.y,h+O)}for(let be=0,Be=T.length;be<Be;be++){const Ie=T[be];ie=K[be];for(let nt=0,Z=Ie.length;nt<Z;nt++){const P=W(Ie[nt],ie[nt],Je);x?le(P.x,P.y+b[u-1].y,b[u-1].x+O):le(P.x,P.y,h+O)}}}H(),J();function H(){const fe=s.length/3;if(d){let Me=0,O=B*Me;for(let Je=0;Je<z;Je++){const be=L[Je];ge(be[2]+O,be[1]+O,be[0]+O)}Me=u+m*2,O=B*Me;for(let Je=0;Je<z;Je++){const be=L[Je];ge(be[0]+O,be[1]+O,be[2]+O)}}else{for(let Me=0;Me<z;Me++){const O=L[Me];ge(O[2],O[1],O[0])}for(let Me=0;Me<z;Me++){const O=L[Me];ge(O[0]+B*u,O[1]+B*u,O[2]+B*u)}}n.addGroup(fe,s.length/3-fe,0)}function J(){const fe=s.length/3;let Me=0;he(U,Me),Me+=U.length;for(let O=0,Je=T.length;O<Je;O++){const be=T[O];he(be,Me),Me+=be.length}n.addGroup(fe,s.length/3-fe,1)}function he(fe,Me){let O=fe.length;for(;--O>=0;){const Je=O;let be=O-1;be<0&&(be=fe.length-1);for(let Be=0,Ie=u+m*2;Be<Ie;Be++){const nt=B*Be,Z=B*(Be+1),P=Me+Je+nt,w=Me+be+nt,X=Me+be+Z,ne=Me+Je+Z;De(P,w,X,ne)}}}function le(fe,Me,O){l.push(fe),l.push(Me),l.push(O)}function ge(fe,Me,O){Ee(fe),Ee(Me),Ee(O);const Je=s.length/3,be=M.generateTopUV(n,s,Je-3,Je-2,Je-1);Fe(be[0]),Fe(be[1]),Fe(be[2])}function De(fe,Me,O,Je){Ee(fe),Ee(Me),Ee(Je),Ee(Me),Ee(O),Ee(Je);const be=s.length/3,Be=M.generateSideWallUV(n,s,be-6,be-3,be-2,be-1);Fe(Be[0]),Fe(Be[1]),Fe(Be[3]),Fe(Be[1]),Fe(Be[2]),Fe(Be[3])}function Ee(fe){s.push(l[fe*3+0]),s.push(l[fe*3+1]),s.push(l[fe*3+2])}function Fe(fe){r.push(fe.x),r.push(fe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return J1(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Rc[s.type]().fromJSON(s)),new bu(n,e.options)}}const Z1={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new Re(r,o),new Re(a,l),new Re(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Re(o,1-l),new Re(c,1-h),new Re(d,1-g),new Re(_,1-f)]:[new Re(a,1-l),new Re(u,1-h),new Re(p,1-g),new Re(m,1-f)]}};function J1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ms extends Eo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ms(e.radius,e.detail)}}class Ir extends Eo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ir(e.radius,e.detail)}}class Ms extends Ft{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/s,p=new V,g=new Re;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const M=f+m,b=M,x=M+n+1,C=M+n+2,S=M+1;a.push(b,x,S),a.push(x,C,S)}}this.setIndex(a),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Qn extends Ft{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new V,d=new V,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const M=[],b=f/n;let x=0;f===0&&o===0?x=.5/t:f===n&&l===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){const S=C/t;h.x=-e*Math.cos(s+S*r)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(s+S*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(S+x,1-b),M.push(c++)}u.push(M)}for(let f=0;f<n;f++)for(let M=0;M<t;M++){const b=u[f][M+1],x=u[f][M],C=u[f+1][M],S=u[f+1][M+1];(f!==0||o>0)&&p.push(b,x,S),(f!==n-1||l<Math.PI)&&p.push(x,C,S)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Sr extends Ft{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new V,h=new V,d=new V;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,M=(s+1)*p+g;o.push(_,m,M),o.push(m,f,M)}this.setIndex(o),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Q1 extends sn{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class e_ extends $s{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cu,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Wt extends $s{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cu,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Su extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class t_ extends Su{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Cl=new zt,Kh=new V,Zh=new V;class yd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new du,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Kh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kh),Zh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zh),t.updateMatrixWorld(),Cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Jh=new zt,Zr=new V,Rl=new V;class n_ extends yd{constructor(){super(new Zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new Ht(2,1,1,1),new Ht(0,1,1,1),new Ht(3,1,1,1),new Ht(1,1,1,1),new Ht(3,0,1,1),new Ht(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Zr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zr),Rl.copy(n.position),Rl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Rl),n.updateMatrixWorld(),s.makeTranslation(-Zr.x,-Zr.y,-Zr.z),Jh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jh)}}class _o extends Su{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new n_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class i_ extends yd{constructor(){super(new pu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class s_ extends Su{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new i_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Qh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Qh(){return performance.now()}const ef=new zt;class r_{constructor(e,t,n=0,s=1/0){this.ray=new hu(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new fu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ef.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ef),this}intersectObject(e,t=!0,n=[]){return Ic(e,this,n,t),n.sort(tf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ic(e[s],this,n,t);return n.sort(tf),n}}function tf(i,e){return i.distance-e.distance}function Ic(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ic(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eu);function wu(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ft;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0;const h=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=nf(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const p=[];for(let _=0;_<o[u].length;++_)p.push(o[u][_][d]);const g=nf(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function nf(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Ot(o,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,p=u.count;d<p;d++)for(let g=0;g<t;g++){const _=u.getComponent(d,g);a.setComponent(d+h,g,_)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Sd(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let o=0;const a=Object.keys(i.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let M=0,b=a.length;M<b;M++){const x=a[M],C=i.attributes[x];l[x]=new C.constructor(new C.array.constructor(C.count*C.itemSize),C.itemSize,C.normalized);const S=i.morphAttributes[x];S&&(c[x]||(c[x]=[]),S.forEach((E,A)=>{const y=new E.array.constructor(E.count*E.itemSize);c[x][A]=new E.constructor(y,E.itemSize,E.normalized)}))}const p=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),m=p*_;for(let M=0;M<r;M++){const b=n?n.getX(M):M;let x="";for(let C=0,S=a.length;C<S;C++){const E=a[C],A=i.getAttribute(E),y=A.itemSize;for(let v=0;v<y;v++)x+=`${~~(A[h[v]](b)*_+m)},`}if(x in t)u.push(t[x]);else{for(let C=0,S=a.length;C<S;C++){const E=a[C],A=i.getAttribute(E),y=i.morphAttributes[E],v=A.itemSize,T=l[E],N=c[E];for(let L=0;L<v;L++){const U=h[L],W=d[L];if(T[W](o,A[U](b)),y)for(let B=0,z=y.length;B<z;B++)N[B][W](o,y[B][U](b))}}t[x]=o,u.push(o),o++}}const f=i.clone();for(const M in i.attributes){const b=l[M];if(f.setAttribute(M,new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)),M in c)for(let x=0;x<c[M].length;x++){const C=c[M][x];f.morphAttributes[M][x]=new C.constructor(C.array.slice(0,o*C.itemSize),C.itemSize,C.normalized)}}return f.setIndex(u),f}function Ur(i){const e=i.map(([h])=>h.index?h.toNonIndexed():h),t=e.reduce((h,d)=>h+d.attributes.position.count,0),n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Ce,o=new V;let a=0;e.forEach((h,d)=>{const p=i[d][1],g=h.attributes.position;for(let _=0;_<g.count;_++)o.fromBufferAttribute(g,_),p(o,r),n.set([o.x,o.y,o.z],(a+_)*3),s.set([r.r,r.g,r.b],(a+_)*3);a+=g.count});const l=new Ft;l.setAttribute("position",new Ot(n,3)),l.setAttribute("color",new Ot(s,3)),l.computeVertexNormals();let c=0;const u=l.attributes.normal;return e.forEach((h,d)=>{const p=i[d][2],g=h.attributes.position.count;if(p)for(let _=0;_<g;_++)o.fromBufferAttribute(l.attributes.position,c+_).sub(p).normalize(),u.setXYZ(c+_,o.x,o.y,o.z);c+=g}),l}const Uc=.7,zc=3.8;function o_(){const i=[],t=zc/8,n=new Ce("#7a5434"),s=new Ce("#a57a4e");for(let r=0;r<8;r++){const o=r/8,a=(r+1)/8,l=.24-o*.08,c=.24-a*.08,u=new Yt(c,l*1.12,t,7,1),h=u.attributes.position;for(let d=0;d<h.count;d++){const p=h.getY(d)+t/2+r*t,g=p/zc;h.setXYZ(d,h.getX(d)+Uc*g*g,p,h.getZ(d))}i.push([u,(d,p)=>p.copy(n).lerp(s,d.y/t%1).multiplyScalar(.55+.45*Mt.smoothstep(d.y,0,1.3))])}return Ur(i)}const As={ink:new Ce("#14261a"),rib:new Ce("#d6ec96"),body:new Ce("#79bf48"),edge:new Ce("#2f7f33"),tip:new Ce("#a8d65c")};function sf(i,e,t){const n=[],s=[],r=[],o=new Ce,a=new V,l=p=>e*Math.sin(Math.PI*Math.pow(Math.min(1,p),.85))+.02,c=(p,g)=>{const _=l(p)*Math.abs(g);return new V(Math.sign(g)*_,.35*p-1.25*p*p-_*.3,p*i)},u=(p,g,_,m)=>{n.push(p.x,m?p.y-.02:p.y,p.z),a.set(Math.sign(_)*.3,1,-(.35-2.5*g)/i).normalize(),s.push(a.x,a.y,a.z),m?o.copy(As.ink):o.copy(As.body).lerp(As.tip,g).lerp(As.edge,Math.abs(_)*.85).multiplyScalar(.6+.4*Mt.smoothstep(g,0,.3)),r.push(o.r,o.g,o.b)},h=(p,g,_,m)=>{const[f,M,b]=[p,g,_].map(([S,E])=>c(S,E)),C=M.clone().sub(f).cross(b.clone().sub(f)).y>0?[[p,f],[g,M],[_,b]]:[[p,f],[_,b],[g,M]];for(const[[S,E],A]of C)m&&E!==0&&A.add(a.set(Math.sign(E),0,.5).normalize().multiplyScalar(.022)),u(A,S,E,m)};for(const p of[!0,!1])for(const g of[-1,1])for(let _=0;_<t;_++){const m=_/t,f=(_+1)/t,M=Math.min(1,f+.08),b=[m,0],x=[f,0],C=[m,g*.56],S=[M,g],E=[f,g*.56];h(b,C,S,p),h(b,S,E,p),p||h(b,E,x,p)}for(let p=0;p<t;p++){const g=p/t,_=(p+1)/t,m=c(g,1e-6),f=c(_,1e-6),M=.022*(1-g)+.004,b=.022*(1-_)+.004,x=[[m,-M,g],[f,b,_],[m,M,g],[m,-M,g],[f,-b,_],[f,b,_]];for(const[C,S,E]of x)n.push(C.x+S,C.y+.012,C.z),a.set(0,1,-(.35-2.5*E)/i).normalize(),s.push(a.x,a.y,a.z),r.push(As.rib.r,As.rib.g,As.rib.b)}const d=new Ft;return d.setAttribute("position",new ht(n,3)),d.setAttribute("normal",new ht(s,3)),d.setAttribute("color",new ht(r,3)),d}function a_(){const i=[];for(let t=0;t<6;t++){const n=sf(2.75,.9,7);n.rotateX(-.12+t%2*.16),n.rotateY(t/6*Math.PI*2+t%2*.12),i.push(n)}for(let t=0;t<3;t++){const n=sf(1.55,.5,5);n.rotateX(-.5),n.rotateY(t/3*Math.PI*2+.5),i.push(n)}const e=[];for(let t=0;t<3;t++){const n=new Qn(.16,6,4);n.translate(Math.cos(t*2.1)*.18,-.2,Math.sin(t*2.1)*.18),e.push([n,(s,r)=>r.set("#6b4a2a")])}return wu([...i,Ur(e)])}function sa(i,e,t,{leaf:n=.24,density:s=64,fruit:r=0,seed:o=1}={}){let a=o*7919+13;const l=()=>(a=a*16807%2147483647,a/2147483647),c=new Ce("#16241a"),u=new Ce("#e4f0a0"),h=[],d=[],p=[],g=new Ce,_=new V,m=new V,f=new V,M=new V,b=new V(0,-1,0),x=(y,v,T)=>{h.push(y.x,y.y,y.z),d.push(v.x,v.y,v.z),p.push(T.r,T.g,T.b)},C=i.map(([y,v,T,N])=>[new V(y,v,T),N]),S=Math.min(...i.map(([,y,,v])=>y-v)),E=Math.max(...i.map(([,y,,v])=>y+v));for(const[y,v]of C){const T=Math.round(s*(v/.5)*(v/.5));for(let U=0;U<T;U++){const W=1-2*(U+.5)/T,B=Math.sqrt(Math.max(0,1-W*W)),z=U*2.39996+l()*.5;m.set(Math.cos(z)*B,W,Math.sin(z)*B).normalize();const I=_.copy(y).addScaledVector(m,v*(.92+l()*.14));if(C.some(([Ee,Fe])=>Ee!==y&&I.distanceTo(Ee)<Fe*.82))continue;f.copy(b).addScaledVector(m,-b.dot(m)).normalize().multiplyScalar(.7).add(M.set(l()-.5,l()-.5,l()-.5)).addScaledVector(m,.35).normalize(),M.copy(m).cross(f).normalize();const Y=n*(1.05+l()*.6),K=Y*.34,ie=(I.y-S)/(E-S);g.copy(t).lerp(e,Mt.smoothstep(ie+m.y*.3,.1,.7)).multiplyScalar(.82+.4*Mt.smoothstep(m.y,-.8,.3)+(l()-.5)*.12),g.lerp(u,.22*Mt.smoothstep(m.y,.2,.9)),l()<.12&&g.lerp(u,.3);const me=I.clone().addScaledVector(f,-Y*.5),qe=I.clone().addScaledVector(f,Y*.5),H=I.clone().addScaledVector(f,-Y*.16),J=H.clone().addScaledVector(M,-K),he=H.clone().addScaledVector(M,K),le=m.clone().multiplyScalar(-.02),ge=Ee=>Ee.clone().sub(I).multiplyScalar(1.14).add(I).add(le),De=g.clone().multiplyScalar(.48).lerp(c,.2);for(const[Ee,Fe,fe,Me]of[[ge(me),ge(he),ge(qe),De],[ge(me),ge(qe),ge(J),De],[me,he,qe,g],[me,qe,J,g]]){const O=Fe.clone().sub(Ee).cross(fe.clone().sub(Ee)).dot(m)>0;for(const Je of O?[Ee,Fe,fe]:[Ee,fe,Fe])x(Je,m,Me)}}const N=new ms(v*.86,1).toNonIndexed();N.translate(y.x,y.y,y.z);const L=N.attributes.position;for(let U=0;U<L.count;U++)_.fromBufferAttribute(L,U),g.copy(t).lerp(e,.3).multiplyScalar(.72),x(_,m.copy(_).sub(y).normalize(),g)}for(let y=0;y<r;y++){const[v,T]=C[y%C.length],N=y*2.39996+l(),L=.05+l()*.7,U=Math.sqrt(1-L*L),W=new ms(.085+l()*.03,1).toNonIndexed(),B=v.x+Math.cos(N)*U*T*1.03,z=v.y+L*T*1.03,I=v.z+Math.sin(N)*U*T*1.03,Y=W.attributes.position,K=new V(B,z,I);for(let ie=0;ie<Y.count;ie++)_.fromBufferAttribute(Y,ie),m.copy(_).normalize(),_.add(K),x(_,m,g.set("#f0862a").lerp(u,.15*Math.max(0,m.y)))}const A=new Ft;return A.setAttribute("position",new ht(h,3)),A.setAttribute("normal",new ht(d,3)),A.setAttribute("color",new ht(p,3)),A}function l_(i){const e=[],t=new Ce("#2f6a48"),n=new Ce("#4a8a5a"),s=new Ce("#ffffff");return[[1.5,1.5,.9],[1.15,1.35,1.8],[.8,1.2,2.6],[.45,.9,3.25]].forEach(([r,o,a])=>{const l=new Jn(r,o,10,2),c=l.attributes.position;for(let u=0;u<c.count;u++)c.getY(u)<-o/2+.01&&c.setY(u,c.getY(u)+Math.sin(u*1.7)*.12);l.translate(0,a,0),e.push([l,(u,h)=>{const d=(u.y-a+o/2)/o;h.copy(t).lerp(n,d),i&&d>.12&&h.lerp(s,Math.min(1,(d-.12)*2.6))}])}),Ur(e)}function c_(){const i=[],e=new Yt(.12,.26,3,6,4),t=e.attributes.position;for(let n=0;n<t.count;n++){const s=t.getY(n);t.setX(n,t.getX(n)+Math.sin(s*1.7)*.12)}return e.translate(0,1.5,0),i.push([e,(n,s)=>s.set(n.y<.4?"#1e1a18":"#3a302a")]),[[.4,1.9,.9,.7],[-.5,2.3,-.8,.6],[.2,2.7,.6,.5]].forEach(([n,s,r,o])=>{const a=new Yt(.03,.08,o,4);a.translate(0,o/2,0),a.rotateZ(r),a.translate(n*.3,s,0),i.push([a,(l,c)=>c.set("#2e2622")])}),Ur(i)}const xs={uKeep:{value:new V(-1e4,-1e4,0)},uRad:{value:120}};function Nc(i){return i.onBeforeCompile=e=>{e.uniforms.uKeep=xs.uKeep,e.uniforms.uRad=xs.uRad,e.fragmentShader=e.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
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
      #endif`)},i}function u_(i,e){const t=Nc(new Wt({vertexColors:!0,side:e.side,transparent:!0,depthWrite:!1}));t.defines={FADE_PASS:1};const n=new gn(i.geometry,t,Math.max(1,i.count));return n.instanceMatrix.setUsage(Tc),n.count=0,n.visible=!1,n.frustumCulled=!1,n.receiveShadow=!0,n.renderOrder=3,i.add(n),i.geometry.computeBoundingSphere(),{o:n,src:i,sphere:i.geometry.boundingSphere}}const Jr=new V,ra=new zt;function h_({o:i,src:e,sphere:t},n,s,r){const{x:o,y:a,z:l}=xs.uKeep.value,c=xs.uRad.value,u=r*n.aspect;let h=0;for(let d=0;d<e.count;d++){e.getMatrixAt(d,ra);const p=t.radius*ra.getMaxScaleOnAxis();Jr.copy(t.center).applyMatrix4(ra).applyMatrix4(n.matrixWorldInverse);const g=-Jr.z;if(!(g+p<.1)){if(g-p>=5.5){if(g-p>l-.3)continue;Jr.applyMatrix4(n.projectionMatrix);const _=p*r/(2*s*Math.max(g,1));if(Math.hypot((Jr.x*.5+.5)*u-o,(Jr.y*.5+.5)*r-a)>c+_)continue}ra.toArray(i.instanceMatrix.array,h++*16)}}i.count=h,i.visible=h>0,h&&(i.instanceMatrix.clearUpdateRanges(),i.instanceMatrix.addUpdateRange(0,h*16),i.instanceMatrix.needsUpdate=!0)}function f_(i,e,t,n){const s=e.filter(z=>z.kind==="palm"),r=e.filter(z=>z.kind==="round"),o=e.filter(z=>z.kind==="bush"),a=e.filter(z=>z.kind==="pine"),l=e.filter(z=>z.kind==="dead"),c=Nc(new Wt({vertexColors:!0})),u=Nc(new Wt({vertexColors:!0,side:cn})),h=new Ce(n.trees.leaf[0]),d=new Ce(n.trees.leaf[1]),p=new Yt(.16,.26,1.6,7);p.translate(0,.8,0);const g=Ur([[p,(z,I)=>I.set("#7a5434").multiplyScalar(.55+.45*Mt.smoothstep(z.y,0,1.1))]]),_=sa([[0,2.2,0,1.15],[.8,1.9,.3,.8],[-.7,1.95,-.2,.85],[.1,2,-.85,.75],[-.2,2.9,.2,.8],[.35,1.8,.85,.7]],h,d,{leaf:.32,density:26,seed:2}),m=[sa([[0,.45,0,.6],[.5,.35,.2,.45],[-.45,.38,-.15,.48],[.05,.7,.1,.42]],h,d,{seed:3}),sa([[0,.36,0,.5],[.55,.3,-.12,.42],[-.55,.3,.1,.42],[.1,.32,.5,.38],[-.1,.34,-.5,.36]],h,d,{seed:4}),sa([[0,.5,0,.58],[.3,.9,.1,.42],[-.3,.8,-.1,.44],[.05,1.15,0,.3]],h,d,{seed:5,fruit:n.id==="tak"?11:0})],f=[],M=(z,I,Y)=>{const K=new gn(z,I,Math.max(1,Y));return K.count=Y,K.castShadow=!0,K.receiveShadow=!0,i.add(K),Pa(K,"tree",!0),Y&&f.push(u_(K,I)),K},b=M(o_(),c,s.length),x=M(a_(),u,s.length),C=M(g,c,r.length),S=M(_,u,r.length),E=m.map((z,I)=>o.filter((Y,K)=>K%m.length===I)),A=m.map((z,I)=>M(z,u,E[I].length)),y=new Yt(.14,.22,1.2,6);y.translate(0,.6,0);const v=M(Ur([[y,(z,I)=>I.set("#5a3e2a").multiplyScalar(.55+.45*Mt.smoothstep(z.y,0,1))]]),c,a.length),T=M(l_(n.id==="vinter"),c,a.length),N=M(c_(),c,l.length),L=new Xt;s.forEach((z,I)=>{L.position.set(z.x,z.y-.1,z.z),L.rotation.set(0,z.phase,0),L.scale.setScalar(z.s),L.updateMatrix(),b.setMatrixAt(I,L.matrix)}),r.forEach((z,I)=>{L.position.set(z.x,z.y-.1,z.z),L.rotation.set(0,z.phase,0),L.scale.setScalar(z.s),L.updateMatrix(),C.setMatrixAt(I,L.matrix)}),a.forEach((z,I)=>{L.position.set(z.x,z.y-.1,z.z),L.rotation.set(0,z.phase,0),L.scale.setScalar(z.s),L.updateMatrix(),v.setMatrixAt(I,L.matrix)}),l.forEach((z,I)=>{L.position.set(z.x,z.y-.1,z.z),L.rotation.set(0,z.phase,(z.phase%1-.5)*.15),L.scale.setScalar(z.s),L.updateMatrix(),N.setMatrixAt(I,L.matrix)});const U=z=>{s.forEach((I,Y)=>{const K=Math.cos(I.phase),ie=Math.sin(I.phase);L.position.set(I.x+Uc*K*I.s,I.y-.1+zc*I.s,I.z-Uc*ie*I.s),L.rotation.set(Math.sin(z*1.2+I.phase)*.07,I.phase+Math.sin(z*.7+I.phase)*.05,Math.cos(z*1+I.phase)*.07),L.scale.setScalar(I.s),L.updateMatrix(),x.setMatrixAt(Y,L.matrix)}),x.instanceMatrix.needsUpdate=!0,r.forEach((I,Y)=>{L.position.set(I.x,I.y-.1,I.z),L.rotation.set(Math.sin(z*1.1+I.phase)*.025,I.phase,Math.cos(z*.9+I.phase)*.025),L.scale.setScalar(I.s),L.updateMatrix(),S.setMatrixAt(Y,L.matrix)}),S.instanceMatrix.needsUpdate=!0,E.forEach((I,Y)=>{I.forEach((K,ie)=>{const me=1+Math.sin(z*1.6+K.phase)*.035;L.position.set(K.x,K.y-.12,K.z),L.rotation.set(0,K.phase,0),L.scale.set(K.s*me,K.s/me,K.s*me),L.updateMatrix(),A[Y].setMatrixAt(ie,L.matrix)}),A[Y].instanceMatrix.needsUpdate=!0}),a.forEach((I,Y)=>{L.position.set(I.x,I.y-.1,I.z),L.rotation.set(Math.sin(z*.9+I.phase)*.02,I.phase,Math.cos(z*.8+I.phase)*.02),L.scale.setScalar(I.s),L.updateMatrix(),T.setMatrixAt(Y,L.matrix)}),T.instanceMatrix.needsUpdate=!0};return U(0),{colliders:[...s.map(z=>({x:z.x,z:z.z,r:.35*z.s})),...r.map(z=>({x:z.x,z:z.z,r:.4*z.s})),...o.map(z=>({x:z.x,z:z.z,r:.7*z.s})),...a.map(z=>({x:z.x,z:z.z,r:.4*z.s})),...l.map(z=>({x:z.x,z:z.z,r:.3*z.s}))],update:U,cullFade:(z,I)=>{const Y=Math.tan(Mt.degToRad(z.fov/2));for(const K of f)h_(K,z,Y,I)}}}const kc={uOlPx:{value:2},uOlRes:{value:new Re(1,1)},uInk:{value:new Ce("#1f1a1c")}},d_=.16,p_=.65,Fc={rock:new Set,tree:new Set,tower:new Set,figure:new Set},Oc={rock:!0,tree:!0,tower:!0,figure:!0};function m_(i,e,t,n){kc.uOlPx.value=i*e,kc.uOlRes.value.set(Math.max(1,t*e),Math.max(1,n*e))}function wd(i){for(const e in Fc)Oc[e]=!!i[e],Fc[e].forEach(t=>t.visible=Oc[e])}function Ed(i){if(i.attributes.olNormal)return;i.attributes.normal||i.computeVertexNormals();const e=i.attributes.position,t=i.attributes.normal,n=e.count,s=new Map,r=new Array(n);for(let a=0;a<n;a++){const l=`${Math.round(e.getX(a)*1e4)},${Math.round(e.getY(a)*1e4)},${Math.round(e.getZ(a)*1e4)}`;r[a]=l;const c=s.get(l)||[0,0,0];c[0]+=t.getX(a),c[1]+=t.getY(a),c[2]+=t.getZ(a),s.set(l,c)}const o=new Float32Array(n*3);for(let a=0;a<n;a++){const l=s.get(r[a]),c=Math.hypot(l[0],l[1],l[2])||1;o[a*3]=l[0]/c,o[a*3+1]=l[1]/c,o[a*3+2]=l[2]/c}i.setAttribute("olNormal",new Ot(o,3))}const Pl=new Map;function Td(i,e,t,n){const s=`${i?i.uuid:"batch"}|${e}|${t}|${n}`;if(Pl.has(s))return Pl.get(s);const r=new Ut({side:Gn,vertexColors:t});return r.color.copy(t||!i?new Ce(1,1,1):i.color).multiplyScalar(d_),r.visible=Oc[e],r.onBeforeCompile=o=>{Object.assign(o.uniforms,kc),o.vertexShader=`attribute vec3 olNormal;
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
      diffuseColor.rgb = mix(diffuseColor.rgb, uInk, ${p_.toFixed(2)});`),n&&(o.uniforms.uKeep=xs.uKeep,o.uniforms.uRad=xs.uRad,o.fragmentShader=`uniform vec3 uKeep;
uniform float uRad;
`+o.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        if (vOlZ < uKeep.z && length(gl_FragCoord.xy - uKeep.xy) < uRad * 0.78) discard;
        if (vOlZ + 2.6 < 4.2) discard; // nær-fade (kameraet)`))},r.customProgramCacheKey=()=>`ol${n?"f":""}`,Fc[e].add(r),Pl.set(s,r),r}const Ad=i=>{const e=i.material;return i.isMesh&&!Array.isArray(e)&&(e.isMeshLambertMaterial||e.isMeshStandardMaterial)&&!e.transparent&&e.side!==cn};function Pa(i,e,t=!1){if(!Ad(i))return null;Ed(i.geometry);const n=!!(i.material.vertexColors&&i.geometry.attributes.color),s=new gn(i.geometry,Td(i.material,e,n,t),i.instanceMatrix.count);return s.instanceMatrix=i.instanceMatrix,s.count=i.count,s.frustumCulled=!1,s.renderOrder=1,s.onBeforeRender=()=>{s.count=i.count},i.add(s),s}const rf=512,of=new Map;let Bc=null;function g_(i){Bc=i}function v_(i,e){const t=`${i.uuid}|${e}`;let n=of.get(t);if(n)return n;Ed(i);const s=new gn(i,Td(null,e,!1,!1),rf);return s.instanceMatrix.setUsage(Tc),s.setColorAt(0,new Ce),s.instanceColor.setUsage(Tc),s.count=0,s.frustumCulled=!1,s.matrixAutoUpdate=!1,s.renderOrder=1,s.raycast=()=>{},n={mesh:s,parts:[]},s.onBeforeRender=()=>{const r=s.instanceMatrix.array,o=s.instanceColor.array;let a=0;for(let l=n.parts.length-1;l>=0;l--){const c=n.parts[l];let u=c,h=!0;for(;u.parent;){if(!u.visible){h=!1;break}u=u.parent}if(u!==Bc){++c.userData.olMiss>300&&n.parts.splice(l,1);continue}if(c.userData.olMiss=0,!h||a>=rf)continue;r.set(c.matrixWorld.elements,a*16);const d=c.material.color;o[a*3]=d.r,o[a*3+1]=d.g,o[a*3+2]=d.b,a++}s.count=a,a&&(s.instanceMatrix.clearUpdateRanges(),s.instanceMatrix.addUpdateRange(0,a*16),s.instanceColor.clearUpdateRanges(),s.instanceColor.addUpdateRange(0,a*3),s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0)},Bc.add(s),of.set(t,n),n}function Vr(i,e){return i.traverse(t=>{!Ad(t)||t.userData.noOutline||(t.userData.olMiss=0,v_(t.geometry,e).parts.push(t))}),i}const pn=(i,e={})=>new Wt({color:i,flatShading:!0,...e});function cs(i){const e=i.map(o=>o.toNonIndexed()),t=e.reduce((o,a)=>o+a.attributes.position.count,0),n=new Float32Array(t*3);let s=0;for(const o of e)n.set(o.attributes.position.array,s),s+=o.attributes.position.array.length;const r=new Ft;return r.setAttribute("position",new Ot(n,3)),r.computeVertexNormals(),r}function x_(i,e,t,n,s,r){const o=r.id,{heightAt:a,pathDist:l,plinths:c}=e,u=e.lighthouse.pos,h=new Xt,d=new Ce,p=[],g=(G,ve,ae,We=2,Qe=5)=>l(G,ve)>ae&&Math.hypot(G-u.x,ve-u.z)>Qe&&!c.some(Pe=>Math.hypot(Pe.x-G,Pe.z-ve)<We),_=(G,ve,ae=G*20)=>{const We=[];for(let Qe=0;Qe<ae&&We.length<G;Qe++){const Pe=(n()-.5)*104,tt=(n()-.5)*104,st=a(Pe,tt);ve(Pe,tt,st)&&We.push({x:Pe,z:tt,h:st,r:n(),s:n()})}return We},m=(G,ve,ae,We,Qe=!1)=>{const Pe=new gn(G,ve,Math.max(1,ae.length));return Pe.count=ae.length,ae.forEach((tt,st)=>{We(tt,st,Pe),h.updateMatrix(),Pe.setMatrixAt(st,h.matrix)}),Pe.instanceColor&&(Pe.instanceColor.needsUpdate=!0),Pe.castShadow=Qe,Pe.receiveShadow=!0,i.add(Pe),Pe},f=(t.mobile?.55:1)*1.8,M=(()=>{const G=[[-.9,.5,.05],[-.45,.68,-.06],[0,.78,.02],[.45,.66,-.04],[.9,.48,.06]].map(([Qe,Pe,tt])=>{const st=new Jn(.045,Pe,3);return st.translate(0,Pe/2,0),st.rotateZ(Qe*.45),st.rotateX(tt*3),st.translate(Qe*.09,0,tt),st}),ve=cs(G),ae=ve.attributes.position,We=[];for(let Qe=0;Qe<ae.count;Qe++){const Pe=Mt.clamp(ae.getY(Qe)/.7,0,1),tt=.5+.7*Pe;We.push(tt,tt,tt*.95)}return ve.setAttribute("color",new ht(We,3)),ve})(),b=_(Math.round(150*f),(G,ve,ae)=>ae>.8&&g(G,ve,1.7,1.7,4.4)),x=m(M,pn("#ffffff",{vertexColors:!0}),b,(G,ve,ae)=>{h.position.set(G.x,G.h-.05,G.z),h.rotation.set(0,G.r*6,0),h.scale.setScalar(.8+G.s*.7),ae.setColorAt(ve,d.set(o==="vinter"?G.s<.5?"#c8d4c0":"#e6eef4":o==="vulkan"?G.s<.5?"#5a6a3a":"#7a7a4a":G.s<.5?"#6fb04a":"#8cc656"))});Pa(x,"tree");const C=_(Math.round((o==="vinter"?0:o==="vulkan"?30:36)*f),(G,ve,ae)=>ae>.85&&g(G,ve,1.9,2,4.5)),S=new Yt(.025,.03,.4,4);S.translate(0,.2,0);const E=new ms(.11,0);E.translate(0,.42,0);const A=["#ff8fb0","#ffd54a","#ffffff","#b58cff","#ff7a4a"];if(m(S,pn("#5f8f3a"),C,G=>{h.position.set(G.x,G.h-.03,G.z),h.rotation.set(0,0,0),h.scale.setScalar(.9+G.s*.6)}),m(E,pn("#ffffff"),C,(G,ve,ae)=>{h.position.set(G.x,G.h-.03,G.z),h.scale.setScalar(.9+G.s*.6),ae.setColorAt(ve,d.set(A[Math.floor(G.r*A.length)]))}),o!=="vulkan"){const G=(()=>{const We=[],Qe=[];for(let st=0;st<8;st++){const gt=st/8*Math.PI*2,R=.32;We.push(0,0,0,Math.cos(gt)*.12,0,Math.sin(gt)*.12,Math.cos(gt-R)*.045,0,Math.sin(gt-R)*.045),We.push(0,0,0,Math.cos(gt+R)*.045,0,Math.sin(gt+R)*.045,Math.cos(gt)*.12,0,Math.sin(gt)*.12);for(let j=0;j<6;j++)Qe.push(1,1,1)}for(let st=0;st<6;st++){const gt=st/6*Math.PI*2,R=(st+1)/6*Math.PI*2;We.push(0,.012,0,Math.cos(R)*.035,.012,Math.sin(R)*.035,Math.cos(gt)*.035,.012,Math.sin(gt)*.035);for(let j=0;j<3;j++)Qe.push(1,.78,.18)}const tt=new Ft;return tt.setAttribute("position",new ht(We,3)),tt.setAttribute("color",new ht(Qe,3)),tt.setAttribute("normal",new ht(new Array(We.length/3).fill(0).flatMap(()=>[0,1,0]),3)),tt})(),ve=_(Math.round((o==="vinter"?10:70)*f),(We,Qe,Pe)=>Pe>.9&&g(We,Qe,1.6,2,4.5)),ae=[];for(const We of ve){const Qe=3+Math.floor(We.r*5);for(let Pe=0;Pe<Qe;Pe++){const tt=n()*6.28,st=Math.sqrt(n())*.85,gt=We.x+Math.cos(tt)*st,R=We.z+Math.sin(tt)*st,j=a(gt,R);j>.85&&g(gt,R,1.4,2,4.5)&&ae.push({x:gt,z:R,h:j,r:n(),s:n()})}}m(G,new Wt({color:"#ffffff",vertexColors:!0,side:cn}),ae,(We,Qe,Pe)=>{h.position.set(We.x,We.h+.035,We.z),h.rotation.set((We.s-.5)*.3,We.r*6.28,0),h.scale.setScalar(1.3+We.s*.7),Pe.setColorAt(Qe,d.setRGB(1,.97+We.r*.03,.94+We.s*.06))})}const y=_(Math.round((o==="tak"?36:0)*f),(G,ve,ae)=>ae>1&&g(G,ve,2.4,2.4,5)),v=new Qn(.22,8,4,0,Math.PI*2,0,Math.PI/2);v.scale(1,.7,1),v.translate(0,.28,0);const T=new Yt(.07,.09,.3,6);T.translate(0,.14,0),m(T,pn("#f4ead6"),y,G=>{h.position.set(G.x,G.h-.03,G.z),h.rotation.set(0,0,(G.r-.5)*.3),h.scale.setScalar(.8+G.s)},!0),m(v,pn("#ffffff"),y,(G,ve,ae)=>{h.position.set(G.x,G.h-.03,G.z),h.rotation.set(0,0,(G.r-.5)*.3),h.scale.setScalar(.8+G.s),ae.setColorAt(ve,d.set(G.r<.6?"#d8453a":"#c89a5a"))},!0);const N=cs([[-.08,0],[.07,.05],[0,-.07]].map(([G,ve],ae)=>{const We=new Jn(.04,1.1+ae*.2,3);return We.translate(G,.55+ae*.1,ve),We}).concat([(()=>{const G=new Va(.05,.18,2,4);return G.translate(.07,1.25,.05),G})()])),L=_(Math.round(150*f),(G,ve,ae)=>ae>.05&&ae<.55&&g(G,ve,2.2,2,5),6e3),U=m(N,pn(o==="vinter"?"#a89878":o==="vulkan"?"#5a5a3a":"#9aa856"),L,G=>{h.position.set(G.x,G.h-.1,G.z),h.rotation.set(0,G.r*6,0),h.scale.setScalar(.8+G.s*.6)}),W=[],B=[];for(const G of e.paths)for(const ve of[-1,1]){let ae=null,We=0,Qe=0;for(let Pe=2;Pe<G.length-7;Pe+=1.7){const tt=Pe/G.length,st=G.curve.getPointAt(tt),gt=G.curve.getTangentAt(tt),R=st.x-gt.z*ve*2.25,j=st.z+gt.x*ve*2.25,oe=a(R,j);if(!(oe>.5&&Qe<=0&&g(R,j,1.9,2.6,6))){ae=null,Qe>0&&Qe--;continue}W.push({x:R,z:j,h:oe}),ae&&B.push({a:ae,b:{x:R,z:j,h:oe}}),ae={x:R,z:j,h:oe},++We>4+Math.floor(n()*5)&&(We=0,ae=null,Qe=3+Math.floor(n()*5))}}const z=new Fn(.14,.8,.14);z.translate(0,.4,0);const I=new Fn(1,.07,.06),Y=pn("#a07650");m(z,Y,W,G=>{h.position.set(G.x,G.h-.05,G.z),h.rotation.set(0,n()*.3,(n()-.5)*.12),h.scale.set(1,1,1)},!0);const K=B.flatMap(G=>[{...G,y:.32},{...G,y:.62}]);m(I,Y,K,({a:G,b:ve,y:ae})=>{const We=Math.hypot(ve.x-G.x,ve.z-G.z);h.position.set((G.x+ve.x)/2,(G.h+ve.h)/2+ae-.05,(G.z+ve.z)/2),h.rotation.set(0,-Math.atan2(ve.z-G.z,ve.x-G.x),0),h.scale.set(We,1,1)},!0);const ie=r.dockTheta??-2.35,me=new Re(Math.cos(ie),Math.sin(ie)),qe=s(ie);let H=qe-6;for(let G=qe-10;G<qe+4;G+=.25)if(a(me.x*G,me.y*G)<.3){H=G;break}const J=new bt,he=pn("#b48a5e"),le=pn("#6e4a2c"),ge=8,De=H-2.5;for(let G=0;G<ge/.55;G++){const ve=new lt(new Fn(.5,.12,2.2),he);ve.position.set(De+G*.55,.75+(n()-.5)*.04,0),ve.rotation.y=(n()-.5)*.05,ve.castShadow=ve.receiveShadow=!0,J.add(ve)}for(let G=0;G<=ge;G+=2)for(const ve of[-1,1]){const ae=new lt(new Yt(.12,.12,2.2,6),le);ae.position.set(De+G,.1,ve*1.05),ae.castShadow=!0,J.add(ae)}J.rotation.y=-ie,i.add(J);const Ee=new bt,Fe=new Yt(.9,.9,3.4,10,1,!0,0,Math.PI);Fe.rotateZ(Math.PI/2),Fe.rotateX(Math.PI/2),Fe.scale(1,.6,.7);const fe=new lt(Fe,pn("#3f6f9a",{side:cn}));fe.rotation.y=Math.PI/2,fe.castShadow=!0,Ee.add(fe);for(const G of[-.6,.6]){const ve=new lt(new Fn(.3,.08,1.2),he);ve.position.set(G,-.15,0),Ee.add(ve)}const Me=new lt(new Fn(2.4,.06,.12),he);Me.position.set(.2,.05,.4),Me.rotation.y=.3,Ee.add(Me);const O=me.x*(De+ge-1)+-me.y*2.1,Je=me.y*(De+ge-1)+me.x*2.1;Ee.position.set(O,.3,Je),Ee.rotation.y=-ie,i.add(Ee);const be=new bt,Be=new lt(new li(3,1.4,10,5),new Ut({color:"#4a3a2a",wireframe:!0}));Be.position.y=1;const Ie=Be.geometry.attributes.position;for(let G=0;G<Ie.count;G++)Ie.setZ(G,Math.sin(Ie.getX(G)/3*Math.PI+1.5)*.15-Math.abs(Ie.getY(G))*.05);be.add(Be);for(const G of[-1.6,1.6]){const ve=new lt(new Yt(.07,.09,2,5),le);ve.position.set(G,.9,0),ve.castShadow=!0,be.add(ve)}for(let G=0;G<5;G++){const ve=new lt(new Qn(.09,6,4),pn("#f0a43a"));ve.position.set(-1.2+G*.6,1.66,.05),be.add(ve)}const nt=H-4.5,Z=4.2,P=me.x*nt-me.y*Z,w=me.y*nt+me.x*Z;be.position.set(P,a(P,w)-.1,w),be.rotation.y=-ie+Math.PI/2,i.add(be),p.push({x:P,z:w,r:1.4});const X=new Yt(.42,.42,.95,10);X.translate(0,.47,0);const ne=new Yt(.44,.44,.08,10),se=new Fn(.8,.8,.8);se.translate(0,.4,0);const re=[],Ne=(G,ve,ae,We)=>{for(let Qe=0;Qe<60&&ae>0;Qe++){const Pe=G+(n()-.5)*6,tt=ve+(n()-.5)*6,st=a(Pe,tt);st<.4||!g(Pe,tt,2.3,2.4,4.6)||re.some(gt=>Math.hypot(gt.x-Pe,gt.z-tt)<1.1)||(re.push({x:Pe,z:tt,h:st,kind:We??(n()<.6?"barrel":"crate"),r:n()}),ae--)}};Ne(me.x*(H-2.5),me.y*(H-2.5),5),Ne(u.x+6,u.z+1,3,"barrel"),Ne(u.x-6,u.z+2,2);const we=re.filter(G=>G.kind==="barrel"),Ue=re.filter(G=>G.kind==="crate");m(X,pn("#8a5a36"),we,G=>{h.position.set(G.x,G.h-.05,G.z),h.rotation.set(0,G.r*6,0),h.scale.setScalar(1)},!0),m(ne,pn("#3e3a38"),we.flatMap(G=>[{...G,y:.2},{...G,y:.75}]),G=>{h.position.set(G.x,G.h-.05+G.y,G.z)},!1),m(se,pn("#b8925e"),Ue,G=>{h.position.set(G.x,G.h-.05,G.z),h.rotation.set(0,G.r*6,0),h.scale.setScalar(.8+G.r*.4)},!0);for(const G of re)p.push({x:G.x,z:G.z,r:.55});const ot=_(Math.round(380*f),(G,ve,ae)=>ae>.9&&g(G,ve,1.6,1.6,4.4)),Ae=new ms(.06,0);Ae.translate(0,.06,0),m(Ae,new Wt({color:o==="vulkan"?"#ff9a5a":"#fffdf4"}),ot,G=>{h.position.set(G.x,G.h-.02,G.z),h.rotation.set(0,0,0),h.scale.setScalar(.8+G.s*.8)});const Ye=(G,ve,ae)=>{const We=[];for(let Qe=0;Qe<G*40&&We.length<G;Qe++){const Pe=(n()-.5)*130,tt=(n()-.5)*130,st=a(Pe,tt),gt=.05-st;gt>ve&&gt<ae&&Math.hypot(Pe-u.x,tt-u.z)>6&&We.push({x:Pe,z:tt,h:st,r:n(),s:n()})}return We},at=cs([0,1,2].map(G=>{const ve=new Jn(.08,.9+G*.25,3);return ve.translate((G-1)*.12,.45+G*.12,G%2*.1),ve.rotateZ((G-1)*.25),ve})),ut=Ye(Math.round(90*f),.35,1.8),Ze=m(at,pn("#4f9a5a"),ut,G=>{h.position.set(G.x,G.h,G.z),h.rotation.set(0,G.r*6,0),h.scale.setScalar(.8+G.s*.7)}),Et=cs([[0,0,.32],[.3,.1,.22],[-.25,.05,.26],[.05,.3,.2]].map(([G,ve,ae])=>{const We=new ms(ae,0);return We.translate(G,ae*.8,ve),We})),ft=Ye(Math.round((o==="tak"?28:0)*f),.5,1.6),St=["#b58cff","#ff8fa8","#ffc65a","#7fd6ff"];if(m(Et,pn("#ffffff"),ft,(G,ve,ae)=>{h.position.set(G.x,G.h,G.z),h.rotation.set(0,G.r*6,0),h.scale.setScalar(.8+G.s*.9),ae.setColorAt(ve,d.set(St[Math.floor(G.r*St.length)]))}),o==="tak"){const G=cs([[0,0,0,.55],[.12,.05,.4,.42],[-.13,-.04,-.45,.4],[.05,.12,.2,.33],[-.06,-.1,-.15,.36]].map(([Pe,tt,st,gt])=>{const R=new Jn(.05,gt,4);return R.translate(0,gt/2,0),R.rotateZ(st),R.rotateX(tt*2),R.translate(Pe,0,tt),R})),ve=cs([(()=>{const Pe=new Yt(.12,.16,.12,7);return Pe.translate(0,.06,0),Pe})(),...Array.from({length:7},(Pe,tt)=>{const st=new Jn(.025,.2,3),gt=tt/7*6.28;return st.translate(0,.1,0),st.rotateZ(.5),st.rotateY(gt),st.translate(Math.cos(gt)*.08,.12,-Math.sin(gt)*.08),st})]),ae=_(Math.round(16*f),(Pe,tt,st)=>.05-st>.08&&e.landDist(Pe,tt)>5,3e4).map(Pe=>({...Pe,big:2.4,pool:!0})),We=[...Ye(Math.round(36*f),.12,.9),...ae],Qe=["#ff5a80","#a060ff","#ffb820","#ff5a2a","#ff7ad0","#f4d070"];m(G,pn("#ffffff"),We.filter((Pe,tt)=>tt%2===0),(Pe,tt,st)=>{h.position.set(Pe.x,Pe.h-.02,Pe.z),h.rotation.set(0,Pe.r*6,0),h.scale.setScalar((.8+Pe.s*.8)*(Pe.big??1)),st.setColorAt(tt,d.set(Qe[Math.floor(Pe.r*Qe.length)]).multiplyScalar(Pe.pool?1.6:1))}),m(ve,pn("#ffffff"),We.filter((Pe,tt)=>tt%2===1),(Pe,tt,st)=>{h.position.set(Pe.x,Pe.h-.02,Pe.z),h.rotation.set(0,Pe.r*6,0),h.scale.setScalar((.9+Pe.s*.9)*(Pe.big??1)),st.setColorAt(tt,d.set(Qe[(Math.floor(Pe.s*Qe.length)+2)%Qe.length]).multiplyScalar(Pe.pool?1.6:1))})}const $=cs([(()=>{const G=new Qn(.17,7,4);return G.scale(1.2,.5,.85),G.translate(0,.07,0),G})(),...[-1,1].map(G=>{const ve=new Qn(.06,5,3);return ve.scale(1.3,.7,1),ve.translate(G*.17,.08,.15),ve}),...[-1,1].flatMap(G=>[0,1,2].map(ve=>{const ae=new Fn(.16,.02,.02);return ae.rotateZ(G*-.5),ae.translate(G*.18,.04,-.06+ve*.07),ae})),...[-1,1].map(G=>{const ve=new Qn(.025,4,3);return ve.translate(G*.05,.13,.09),ve})]),ke=o==="vulkan"?[]:_(Math.round((o==="vinter"?5:18)*f),(G,ve,ae)=>ae>.08&&ae<.42&&g(G,ve,2.2,2,5),12e3).map(G=>({...G,home:{x:G.x,z:G.z},dir:G.r*6.28,t:G.s*4,run:0})),ue=m($,pn(o==="vinter"?"#b8584a":"#d8553a"),ke,G=>{h.position.set(G.x,G.h,G.z),h.rotation.set(0,G.dir,0),h.scale.setScalar(1)},!0),ye=cs([(()=>{const ve=new Qn(.07,6,4);return ve.scale(.6,.5,1.4),ve})(),(()=>{const ve=new Jn(.06,.1,3);return ve.rotateX(-Math.PI/2),ve.translate(0,0,-.13),ve})()]),Ve=[...Ye(Math.round(26*f),.1,.8),..._(Math.round(12*f),(G,ve,ae)=>.05-ae>.12&&e.landDist(G,ve)>5,3e4).map(G=>({...G,big:1.5}))].map(G=>({...G,rad:.5+G.s*.9,sp:(.5+G.r)*(G.s<.5?1:-1)})),He=["#ff9a3a","#3a7ad8","#f2c94c","#2f8f9a"],dt=m(ye,pn("#ffffff"),Ve,(G,ve,ae)=>{h.position.set(G.x,G.h,G.z),ae.setColorAt(ve,d.set(He[ve%He.length]))}),Gt=new Ir(.16,0);Gt.scale(.45,.3,1.4);const $t=Ye(t.mobile?5:8,.9,2.6).map(G=>({...G,rad:2+G.s*3,speed:(.25+G.r*.3)*(G.r<.5?1:-1)})),At=9,fn=new gn(Gt,new Ut({color:"#2f5f72",transparent:!0,opacity:.75}),Math.max(1,$t.length*At));fn.count=$t.length*At,fn.renderOrder=1,i.add(fn);const Cn=new Vs(1,10);Cn.rotateX(-Math.PI/2);const Xn=new gn(Cn,new Ut({color:"#0f3a42",transparent:!0,opacity:.5,depthWrite:!1}),Ve.length);Xn.renderOrder=-1,Xn.frustumCulled=!1,i.add(Xn);const Zt=(G,ve,ae,We,Qe,Pe,tt)=>{const st=a(ve,We),gt=Math.max(0,ae-st)+.12;h.position.set(ve+gt*.6,st+.03,We+gt*.4),h.rotation.set(0,Qe,0),h.scale.set(st<-.02?Pe:0,1,st<-.02?tt:0),h.updateMatrix(),Xn.setMatrixAt(G,h.matrix)},ci=Array.from({length:At},()=>[(n()-.5)*1.4,(n()-.5)*.25,(n()-.5)*1.4,n()*6]),ui=G=>{Ee.position.y=.3+Math.sin(G*1.2)*.08,Ee.rotation.z=Math.sin(G*.9)*.04,Ee.rotation.x=Math.sin(G*1.3+1)*.03,$t.forEach((ae,We)=>{const Qe=G*ae.speed+ae.r*6,Pe=ae.x+Math.cos(Qe)*ae.rad,tt=ae.z+Math.sin(Qe)*ae.rad,st=Math.atan2(-Math.sin(Qe)*ae.speed,Math.cos(Qe)*ae.speed);for(let gt=0;gt<At;gt++){const[R,j,oe,ce]=ci[gt];h.position.set(Pe+R+Math.sin(G*2+ce)*.1,Math.max(a(Pe,tt)+.25,-.75)+j,tt+oe),h.rotation.set(0,st+Math.sin(G*6+ce)*.15,0),h.scale.setScalar(1),h.updateMatrix(),fn.setMatrixAt(We*At+gt,h.matrix)}}),fn.instanceMatrix.needsUpdate=!0,Ve.forEach((ae,We)=>{const Qe=G*ae.sp+ae.r*6+Math.sin(G*.7+We)*.6,Pe=ae.x+Math.cos(Qe)*ae.rad,tt=ae.z+Math.sin(Qe)*ae.rad;h.position.set(Pe,Math.min(a(Pe,tt)+.08,0),tt),h.rotation.set(0,-Qe+(ae.sp>0?0:Math.PI),Math.sin(G*9+We)*.2),h.scale.setScalar((.9+ae.s*.5)*(ae.big??1)),h.updateMatrix(),dt.setMatrixAt(We,h.matrix),Zt(We,Pe,h.position.y,tt,-Qe+(ae.sp>0?0:Math.PI),.05*(ae.big??1),.13*(ae.big??1))}),dt.instanceMatrix.needsUpdate=!0,Xn.instanceMatrix.needsUpdate=!0;const ve=Math.min(.05,Math.max(0,G-(ui.last??G)));ui.last=G,ke.forEach((ae,We)=>{if(ae.t-=ve,ae.t<=0&&(ae.run>0?(ae.run=0,ae.t=.8+Math.random()*2.5):(ae.run=(Math.random()<.5?-1:1)*(.9+Math.random()*.8),ae.t=.4+Math.random()*.9,Math.random()<.3&&(ae.dir+=(Math.random()-.5)*1.5))),ae.run){const Qe=ae.x+Math.cos(ae.dir)*ae.run*ve,Pe=ae.z-Math.sin(ae.dir)*ae.run*ve,tt=a(Qe,Pe);tt>.05&&tt<.5&&Math.hypot(Qe-ae.home.x,Pe-ae.home.z)<3.5?(ae.x=Qe,ae.z=Pe,ae.h=tt):ae.run=-ae.run}h.position.set(ae.x,ae.h+(ae.run?Math.abs(Math.sin(G*30+We))*.015:0),ae.z),h.rotation.set(0,ae.dir,ae.run?Math.sin(G*30+We)*.08:0),h.scale.setScalar(1),h.updateMatrix(),ue.setMatrixAt(We,h.matrix)}),ue.instanceMatrix.needsUpdate=!0,!((G*60|0)%2)&&(L.forEach((ae,We)=>{h.position.set(ae.x,ae.h-.1,ae.z),h.rotation.set(Math.sin(G*1.7+ae.x*.3)*.08,ae.r*6,Math.cos(G*1.4+ae.z*.3)*.08),h.scale.setScalar(.8+ae.s*.6),h.updateMatrix(),U.setMatrixAt(We,h.matrix)}),U.instanceMatrix.needsUpdate=!0,ut.forEach((ae,We)=>{h.position.set(ae.x,ae.h,ae.z),h.rotation.set(Math.sin(G*1.1+ae.x)*.12,ae.r*6,Math.cos(G*.9+ae.z)*.12),h.scale.setScalar(.8+ae.s*.7),h.updateMatrix(),Ze.setMatrixAt(We,h.matrix)}),Ze.instanceMatrix.needsUpdate=!0)};J.updateMatrixWorld(!0);const ts=[];return J.children.forEach(G=>{if(G.geometry.type==="CylinderGeometry"){const ve=G.getWorldPosition(new V);ts.push({x:ve.x,z:ve.z,r:.15})}}),ts.push({x:O,z:Je,r:.9}),{colliders:p,update:ui,obstacles:ts}}function af(i,{heightTex:e,ext:t,grid:n,quality:s,sunDir:r,colors:o,level:a=.05,size:l=220,center:c=[0,0],maxDepth:u=100}){const h=Mi.merge([$e.fog,{uTime:{value:0},uHeight:{value:e},uExt:{value:t},uGrid:{value:n},uLevel:{value:a},uMaxDepth:{value:u},uShallow:{value:new Ce(o.shallow)},uMid:{value:new Ce(o.mid)},uDeep:{value:new Ce(o.deep)},uSun:{value:r.clone().normalize()},uCaustic:{value:(s.mobile?.8:1)*o.caustic}}]);h.uHeight.value=e;const d=new sn({uniforms:h,transparent:!0,depthWrite:!1,fog:!0,vertexShader:`
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
        col *= 1.0 - 0.08 * rip * (1.0 - smoothstep(0.2, 1.4, d)); // R7: synlige gjennom vannet (raw1)

        // Kaustikk: to lag med ulik skala og fart, sterkest på grunt/middels vann
        // Bredt, mykt kaustikk-nett i stor skala (som referansen), synlig også på middels dypt vann
        // R7: forvridde koordinater, så nettet blir bukter og ikke rette mangekanter
        vec2 cw = vWorld.xz + vec2(sin(vWorld.z * 0.31 + uTime * 0.2), cos(vWorld.x * 0.27 - uTime * 0.17)) * 1.6;
        float c1 = voronoiEdge(cw * 0.2 + vec2(uTime * 0.02, uTime * 0.015), uTime * 0.35);
        float c2 = voronoiEdge(cw * 0.33 - vec2(uTime * 0.018, -uTime * 0.022), uTime * 0.5 + 2.0);
        float caustic = pow(1.0 - smoothstep(0.0, 0.22, c1), 2.0) * 0.65 + pow(1.0 - smoothstep(0.0, 0.16, c2), 2.0) * 0.35;
        float cMask = smoothstep(0.03, 0.3, de) * (1.0 - smoothstep(2.8, 5.5, de));
        col += vec3(0.85, 1.0, 0.95) * caustic * cMask * 0.17 * uCaustic;
        alpha = max(alpha, caustic * cMask * 0.16 * uCaustic);

        // Skum: tynn linje som pulserer inn og ut langs kysten, pluss en svakere ute
        float wave = 0.5 + 0.5 * sin(uTime * 1.1 + vWorld.x * 0.08 + vWorld.z * 0.06);
        float edge1 = 0.05 + wave * 0.16;
        // Linjebredden følger dybde-gradienten, så slake bunner (pytter) ikke blir hvite flater
        float fw = max(fwidth(d) * 1.6, 0.006);
        // R7: dobbel, brutt linje (raw1): flekker der linja faller ut
        float brk = smoothstep(-0.3, 0.2, sin(vWorld.x * 1.1 + sin(vWorld.z * 0.7) * 2.0) + sin(vWorld.z * 1.3 - vWorld.x * 0.4 + uTime * 0.15));
        float foam = (1.0 - smoothstep(0.0, min(0.05, fw * 2.2), abs(d - edge1))) * mix(0.55, 1.0, brk); // skarp, tynn skumlinje
        foam += (1.0 - smoothstep(0.0, 0.035, d)) * 0.8;
        float edge2 = 0.28 + wave * 0.14;
        foam += (1.0 - smoothstep(0.0, min(0.05, fw * 2.0), abs(d - edge2))) * 0.8 * brk * smoothstep(0.002, 0.01, fw);
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
      }`}),p=l<50?8:s.mobile?40:64,g=new li(l,l,p,p);g.rotateX(-Math.PI/2);const _=new lt(g,d);return _.position.set(c[0],a,c[1]),_.renderOrder=2,i.add(_),{mesh:_,update(m){h.uTime.value=m}}}function lf(i,e){const t=new Ba(Float32Array.from(i),e,e,ka,Si);return t.magFilter=t.minFilter=Tn,t.generateMipmaps=!1,t.needsUpdate=!0,t}function Ll(i,e=5){const t=[],n=[],s=new Ce,r=new Ce;for(let a=0;a<e;a++){const l=i()*Math.PI*2,c=i()*.16,u=.28+i()*.3,h=.04+i()*.03,d=Math.cos(l)*c,p=Math.sin(l)*c,g=(i()-.5)*.25,_=i()*Math.PI,m=Math.cos(_)*h,f=Math.sin(_)*h;t.push(d-m,0,p-f,d+m,0,p+f,d+Math.cos(l)*g,u,p+Math.sin(l)*g),s.setRGB(.72,.72,.72),r.setRGB(1.2,1.22,1.12),n.push(s.r,s.g,s.b,s.r,s.g,s.b,r.r,r.g,r.b)}const o=new Ft;return o.setAttribute("position",new ht(t,3)),o.setAttribute("color",new ht(n,3)),o.setAttribute("normal",new ht(new Array(t.length/3).fill(0).flatMap(()=>[0,1,0]),3)),o}function __(){const i=[];for(let o=0;o<3;o++){const a=new Qn(.07,6,3);a.scale(1,.25,1.15);const l=o*2.094;a.translate(Math.cos(l)*.065,.05,Math.sin(l)*.065),i.push(a.toNonIndexed())}const e=i.reduce((o,a)=>o+a.attributes.position.count,0),t=new Float32Array(e*3),n=new Float32Array(e*3);let s=0;for(const o of i)t.set(o.attributes.position.array,s*3),n.set(o.attributes.normal.array,s*3),s+=o.attributes.position.count;const r=new Ft;return r.setAttribute("position",new Ot(t,3)),r.setAttribute("normal",new Ot(n,3)),r}function M_(i,e,t,n,s){const{heightAt:r,pathDist:o,plinths:a}=e,l=e.lighthouse.pos,c={uTime:{value:0}},h=(T=>(T.onBeforeCompile=N=>{N.uniforms.uTime=c.uTime,N.vertexShader=N.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          #ifdef USE_INSTANCING
            vec2 ip = instanceMatrix[3].xz;
          #else
            vec2 ip = vec2(0.0);
          #endif
          float sway = sin(uTime * 1.8 + ip.x * 0.35 + ip.y * 0.27) * 0.6 + sin(uTime * 3.1 + ip.x * 1.3) * 0.25;
          transformed.x += sway * transformed.y * 0.22;
          transformed.z += cos(uTime * 1.5 + ip.y * 0.4) * transformed.y * 0.12;`),N.fragmentShader=N.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
  normal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);`)},T))(new Wt({vertexColors:!0,side:cn})),d=new Wt({color:"#ffffff"}),p=[Ll(s,7),Ll(s,8),Ll(s,6)],g=__(),_={tak:{grass:["#6cae48","#a2d05e"],density:.45,clover:.08,cloverCol:["#4f9c3e","#6cb850"]},vinter:{grass:["#9a9a7a","#c8c4a0"],density:.18,clover:0,cloverCol:["#fff","#fff"]},vulkan:{grass:["#4a5a30","#6a7a3a"],density:.35,clover:0,cloverCol:["#fff","#fff"]}}[n.id],m=(t.mobile?.45:1)*_.density,f=13,M=8,b=Math.round(720*m),x=[],C=new Xt,S=new Ce,E=new Ce(_.grass[0]),A=new Ce(_.grass[1]),y=(T,N,L)=>{if(L<.72)return!1;const U=o(T,N);if(U<1||U<1.7&&s()<.6||Math.hypot(T-l.x,N-l.z)<4.3||n.volcano&&Math.hypot(T-n.volcano.x,N-n.volcano.z)<n.volcano.r*.7)return!1;for(const W of a)if((W.x-T)**2+(W.z-N)**2<2.6)return!1;return!e.extrasBlock||!e.extrasBlock(T,N)};for(let T=0;T<M;T++)for(let N=0;N<M;N++){const L=-M*f/2+T*f,U=-M*f/2+N*f;for(const[W,B]of[[0,b*.4],[1,b*.35],[2,b*.25]]){const z=[];for(let Y=0;Y<B*3&&z.length<B;Y++){const K=L+s()*f,ie=U+s()*f,me=r(K,ie);y(K,ie,me)&&z.push([K,ie,me])}if(!z.length)continue;const I=new gn(p[W],h,z.length);I.userData.tier=W,z.forEach(([Y,K,ie],me)=>{C.position.set(Y,ie-.04,K),C.rotation.set(0,s()*6.28,0),C.scale.setScalar(.8+s()*.7),C.updateMatrix(),I.setMatrixAt(me,C.matrix),I.setColorAt(me,S.copy(E).lerp(A,s()).multiplyScalar(e.shadeAt?e.shadeAt(Y,K):1))}),I.receiveShadow=!0,I.computeBoundingSphere(),i.add(I),x.push(I)}if(_.clover>0){const W=[],B=L+s()*f,z=U+s()*f;for(let I=0;I<b*_.clover*3&&W.length<b*_.clover;I++){const Y=B+(s()-.5)*6,K=z+(s()-.5)*6,ie=r(Y,K);y(Y,K,ie)&&W.push([Y,K,ie])}if(W.length){const I=new gn(g,d,W.length),Y=new Ce(_.cloverCol[0]),K=new Ce(_.cloverCol[1]);W.forEach(([ie,me,qe],H)=>{C.position.set(ie,qe-.02,me),C.rotation.set(0,s()*6.28,0),C.scale.setScalar(.8+s()*.8),C.updateMatrix(),I.setMatrixAt(H,C.matrix),I.setColorAt(H,S.copy(Y).lerp(K,s()).multiplyScalar(e.shadeAt?e.shadeAt(ie,me):1))}),I.receiveShadow=!0,I.userData.tier=1,I.computeBoundingSphere(),i.add(I),x.push(I)}}}return{update(T){c.uTime.value=T},setLevel:T=>x.forEach(N=>{N.visible=T==="high"||N.userData.tier===0,N.receiveShadow=T==="high"}),count:x.reduce((T,N)=>T+N.count,0)}}function cf(i,{arms:e=4,rStart:t=56,rEnd:n=4.2,turns:s=.7,a0:r=.35,steps:o=16}={}){const a=[];for(let l=0;l<e;l++){const c=r+l/e*Math.PI*2,u=[];for(let h=0;h<=o;h++){const d=h/o,p=t*(1-d)+n*d,g=c+d*s*Math.PI*2;u.push([i[0]+Math.cos(g)*p,i[1]+Math.sin(g)*p])}a.push(u)}return a}const y_={xc:i=>3*Math.sin(i*.06),w:4.2,bridgeZ:-20,top:50,wall:27},b_=[[[-15,56],[-17,40],[-13,24],[-17,8],[-14,-6],[-12,-18],[-11,-26],[-10,-33],[-10,-38.4]],[[17,56],[19,40],[15,24],[18,8],[15,-6],[12,-16],[5,-20],[-2,-20.5],[-8,-22],[-11,-26],[-10,-33],[-10,-38.4]]],S_=[90,210,330].map(i=>i*Math.PI/180),ba=11,w_=()=>{const i=[];for(let t=0;t<=48;t++){const n=t/48*Math.PI*2;i.push([Math.cos(n)*ba,Math.sin(n)*ba])}const e=S_.map(t=>[ba,20,30,40,50].map((n,s)=>{const r=t+Math.sin(n*.25+s)*.04;return[Math.cos(r)*n,Math.sin(r)*n]}));return[i,...e]},js=[{id:"tak",name:"Tåkeøya",blurb:"Palmer, turkis lagune og en joint som har glødd i hundre år.",seed:1,radius:46,edgeAmp:[4.5,2.6,1.5],lighthouse:[0,0],paths:cf([0,0]),plateausAuto:[{r:6.5,h:4.2},{r:5.5,h:3.4},{r:5,h:3}],waterfall:{poolR:1.9,basinR:2.7},palette:{sand:"#d8bb88",grass:"#8cc752",grass2:"#70ae45",path:"#d4b98a",deep:"#cdb987",pathMix:.35},water:{shallow:"#a6e6cc",mid:"#45c2ae",deep:"#1f9aa2",caustic:1},sky:{fog:"#c4d8dc",hemiSky:"#dce9ff",hemiGround:"#5a6650",hemi:1.35,sun:"#ffeccc",sunI:2.25,exposure:.92,sunDir:[14,30,10],lantern:.9,grade:{tint:[1.02,1,.965],lift:[.008,.02,.035],sat:.92,vignette:.2}},skyDusk:{fog:"#d9a48e",hemiSky:"#ffd6b0",hemiGround:"#5a4a72",hemi:1.35,sun:"#ffb27a",sunI:2.7,exposure:1.05,sunDir:[24,17,4],grade:{tint:[1.07,1,.9],lift:[.025,.008,.03],sat:1.1,vignette:.3}},trees:{beach:{palm:.75,bush:.25},inland:{palm:.25,round:.45,bush:.3},leaf:["#a2cc5c","#357238"]},rock:["#b6bab8","#7f9f52"],life:["fireflies","butterflies","birds","leaves"],balance:{hp:1.3,count:1.25,speed:1,air:.5,types:{clerk:{hp:.7},complainer:{hp:.7},tank:{hp:.65},gull:{hp:.75}},extra:null},intro:{complainer:2,drone:3,lobbyist:5,heli:6,auditor:7,balloon:8}},{id:"vinter",name:"Vinterfjorden",blurb:"Snø, nordlys og isflak. Forbudsdirektoratet har kledd seg varmt.",seed:2,radius:47,edgeAmp:[3.5,3.2,2.2],lighthouse:[-10,-42.5],paths:b_,shape:"fjord",fjord:y_,nes:{x:-10,z0:-20,z1:-45,r:6.5},dockTheta:-1.2,icy:!0,palette:{sand:"#b9bec4",grass:"#f1f5fa",grass2:"#dfe8f2",path:"#c2ccd8",deep:"#9aa8b4",ripple:.4},water:{shallow:"#b8e2ee",mid:"#5a9cc0",deep:"#1d3f66",caustic:.55},sky:{fog:"#2a3550",hemiSky:"#9fb8ff",hemiGround:"#1c2440",hemi:1.1,sun:"#b8ccff",sunI:1.5,exposure:1.15,sunDir:[-12,26,8],grade:{tint:[.96,1,1.06],lift:[0,.01,.03],sat:1.05,vignette:.32}},trees:{beach:{pine:.6,bush:.4},inland:{pine:.8,bush:.2},leaf:["#e8f0f8","#2c5a44"]},rock:["#a9b2bc","#eef4fa"],life:["snow","aurora","icefloes"],balance:{hp:1.5,count:1.2,speed:.97,types:{tank:{hp:.95},clerk:{hp:1},lobbyMini:{hp:.9}},extra:{type:"tank",n:1,gap:4,path:"both",from:3}},intro:{balloon:3,auditor:4,lobbyist:5,drone:5,heli:6,complainer:6}},{id:"vulkan",name:"Vulkanøya",blurb:"Svart sand, lava-elver og glødende stein. Her trenger ingen fyrstikker.",seed:3,radius:48,edgeAmp:[3.5,2.2,1.6],lighthouse:[0,0],dockTheta:.5,paths:cf([0,0],{arms:3,rStart:56,rEnd:4.4,turns:.75,a0:Math.PI/6,steps:24}),lava:w_(),moat:ba,eruption:{every:60,closed:10},fog:[38,100],palette:{sand:"#3a3533",grass:"#5a6a3c",grass2:"#3f4c2e",path:"#3e3b3a",deep:"#2c2826",pathMix:.15},water:{shallow:"#5a8f90",mid:"#2c5a63",deep:"#122b35",caustic:.4},sky:{fog:"#4a2c2a",hemiSky:"#ff9a6a",hemiGround:"#2a1a1a",hemi:1.15,sun:"#ff7a40",sunI:2.3,exposure:1.1,sunDir:[20,20,6],grade:{tint:[1.05,.98,.94],lift:[.02,0,0],sat:1.08,vignette:.32}},trees:{beach:{dead:.5,bush:.5},inland:{dead:.45,palm:.2,bush:.35},leaf:["#7a9a4a","#2f4a2a"]},rock:["#2e2a2a","#5a3a2a"],life:["ash","embers"],balance:{hp:1.25,count:1.1,speed:1,air:.6,types:{lobbyist:{hp:.6},lobbyMini:{hp:.6},clerk:{hp:.72},complainer:{hp:.72},gull:{hp:.75},drone:{hp:.8}},extra:{type:"gull",n:1,gap:1.4,from:3}},intro:{complainer:2,drone:2,lobbyist:3,heli:4,auditor:5,balloon:7}}];function E_(i){const[e,t,n]=i.edgeAmp,s=i.seed;return r=>i.radius+e*Math.sin(3*r+.4*s)+t*Math.sin(7*r+1.3*s)+n*Math.sin(11*r+s)}const uf={clerk:["complainer","lobbyist"],swarm:["complainer"],tank:["auditor","lobbyist"],gull:["drone","heli","balloon"]},Dl={clerk:22,swarm:7,tank:95,gull:16,complainer:17,lobbyist:97,auditor:112,drone:9,heli:62,balloon:150},Il={complainer:.6,lobbyist:1.8,auditor:2.2,drone:.4,heli:2.4,balloon:3.5};function T_(i,e){let t=i.seed*9301+49297;const n=()=>(t=(t*9301+49297)%233280)/233280,s=i.intro||{};return e.map((r,o)=>{const a=o+1,l=r.map(d=>({...d})),c=i.balance.extra;c&&a>=c.from&&l.push({...c,n:c.n+Math.floor((a-c.from)/2),at:5});const u=(d,p,g)=>Math.max(1,Math.round(d*Math.min(1,Dl[p]/Dl[g]))),h=(d,p)=>{d.n=u(d.n,d.type,p),d.gap=Il[p]??d.gap,d.type=p};for(const[d,p]of Object.entries(s)){if(p!==a)continue;const g=l.find(_=>{var m;return(m=uf[_.type])==null?void 0:m.includes(d)});if(g&&g.n>=2){const _=Math.floor(g.n/2);l.push({...g,type:d,n:u(_,g.type,d),gap:Il[d]??g.gap,at:(g.at??0)+2}),g.n-=_}else g?h(g,d):l.push({type:d,n:Math.max(1,Math.min(3,Math.round(44/Dl[d]))),gap:Il[d],path:0,at:6})}for(const d of l){const p=(uf[d.type]||[]).filter(g=>s[g]&&s[g]<a);p.length&&n()<.45&&h(d,p[Math.floor(n()*p.length)])}return l})}function Mo(){try{return Math.max(1,Math.min(js.length,Number(localStorage.getItem("glod-unlocked"))||1))}catch{return 1}}function A_(i){try{i+2>Mo()&&localStorage.setItem("glod-unlocked",String(Math.min(js.length,i+2)))}catch{}}function oa(i,e,{color:t,size:n,speed:s,drift:r,additive:o,area:a=46,top:l=22}){const c=new Float32Array(e*3),u=new Float32Array(e);for(let f=0;f<e;f++)c[f*3]=(Math.random()-.5)*a*2,c[f*3+1]=Math.random()*l,c[f*3+2]=(Math.random()-.5)*a*2,u[f]=Math.random()*6.28;const h=new Ft;h.setAttribute("position",new Ot(c,3));const d=document.createElement("canvas");d.width=d.height=32;const p=d.getContext("2d"),g=p.createRadialGradient(16,16,0,16,16,16);g.addColorStop(0,"rgba(255,255,255,1)"),g.addColorStop(1,"rgba(255,255,255,0)"),p.fillStyle=g,p.fillRect(0,0,32,32);const _=new wo({color:t,size:n,map:new oi(d),transparent:!0,depthWrite:!1,blending:o?ai:ds,opacity:o?1:.85}),m=new Ga(h,_);return m.frustumCulled=!1,i.add(m),(f,M,b)=>{for(let x=0;x<e;x++){let C=c[x*3+1]-s*f*(.7+u[x]%1*.6);c[x*3]+=Math.sin(b*.7+u[x])*r*f,(s<0?C>l:C<0)&&(C=s<0?0:l,c[x*3]=M.x+(Math.random()-.5)*a*2,c[x*3+2]=M.z+(Math.random()-.5)*a*2),c[x*3+1]=C}h.attributes.position.needsUpdate=!0}}function C_(i,e,t,n,s=160){const r=new Mu(i.map(([h,d])=>new V(h,0,d))),o=r.getLength(),a=[],l=[],c=[];for(let h=0;h<=s;h++){const d=h/s,p=r.getPointAt(d),g=r.getTangentAt(d),_=-g.z,m=g.x,f=e*(.75+.25*Math.sin(d*9));for(const M of[-1,1]){const b=p.x+_*f*M,x=p.z+m*f*M;a.push(b,t(b,x)+n,x),l.push(d*o,(M+1)/2)}if(h<s){const M=h*2;c.push(M,M+1,M+2,M+1,M+3,M+2)}}const u=new Ft;return u.setAttribute("position",new ht(a,3)),u.setAttribute("uv",new ht(l,2)),u.setIndex(c),u.computeVertexNormals(),{geo:u,curve:r,len:o}}function R_(i,e,t,n){var m;const{heightAt:s,landDist:r}=e,o=[],a=[],l=[],c=[],u=[],h=t.mobile?.5:1,d=new Set(n.life);if(d.has("aurora")){const f=new sn({transparent:!0,depthWrite:!1,blending:ai,side:cn,fog:!1,uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const[M,b,x]of[[0,-66,0],[-62,-20,Math.PI/2.4],[62,-24,-Math.PI/2.4]]){const C=new lt(new li(150,26,96,1),f);C.position.set(M,20,b),C.rotation.y=x,i.add(C)}a.push((M,b,x)=>f.uniforms.uTime.value=x)}if(d.has("snow")&&a.push(oa(i,Math.round(900*h),{color:"#ffffff",size:.28,speed:2.2,drift:.8})),d.has("ash")&&a.push(oa(i,Math.round(500*h),{color:"#6a625e",size:.22,speed:1.2,drift:.6})),d.has("embers")&&a.push(oa(i,Math.round(160*h),{color:"#ff8a3a",size:.25,speed:-1.6,drift:1.2,additive:!0,top:10})),d.has("icefloes")){const f=[];for(let S=0;S<6e3&&f.length<70*h;S++){const E=(Math.random()-.5)*120,A=(Math.random()-.5)*120,y=.05-s(E,A);if(!(y>.15&&y<1.4)||!f.every(L=>Math.hypot(L.x-E,L.z-A)>2.2))continue;const v=r(E,A)>2?.45+Math.random()*.25:.6+Math.random()*1.1,T=v*1.1+.45;let N=!0;for(let L=0;L<8&&N;L++)N=s(E+Math.cos(L*.785)*T,A+Math.sin(L*.785)*T)<.02;N&&f.push({x:E,z:A,s:v,r:Math.random()*6})}const M=new Yt(1,.9,.18,7),b=M.attributes.position;for(let S=0;S<b.count;S++){const E=Math.atan2(b.getZ(S),b.getX(S)),A=.75+.35*Math.abs(Math.sin(E*2.3+S));b.setX(S,b.getX(S)*A),b.setZ(S,b.getZ(S)*A)}M.computeVertexNormals();const x=new gn(M,new Wt({color:"#eaf6ff"}),Math.max(1,f.length));x.count=f.length,x.receiveShadow=!0,i.add(x);const C=new Xt;a.push((S,E,A)=>{f.forEach((y,v)=>{C.position.set(y.x+Math.sin(A*.1+y.r)*.4,.08+Math.sin(A*1.1+y.r)*.03,y.z),C.rotation.set(Math.sin(A*.9+y.r)*.03,y.r+A*.02,Math.cos(A*.8+y.r)*.03),C.scale.set(y.s,1,y.s),C.updateMatrix(),x.setMatrixAt(v,C.matrix)}),x.instanceMatrix.needsUpdate=!0})}if(n.lava){const f=new sn({uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const C of n.lava){const S=C_(C,1.25,s,.07);i.add(new lt(S.geo,f));const E=[];let A=!1;for(let y=0;y<=1;y+=1.4/S.len){const v=S.curve.getPointAt(Math.min(1,y));if(e.pathDist(v.x,v.z)<2.4){A||u.push({x:v.x,z:v.z,tan:S.curve.getTangentAt(Math.min(1,y))}),A=!0;continue}A=!1,l.push({x:v.x,z:v.z,r:1.4})}for(const y of[.25,.7]){const v=S.curve.getPointAt(y),T=new _o("#ff6a2a",14,12,1.6);T.position.set(v.x,s(v.x,v.z)+1.2,v.z),i.add(T),E.push(T)}a.push((y,v,T)=>E.forEach((N,L)=>N.intensity=12+3*Math.sin(T*2.3+L)))}a.push((C,S,E)=>f.uniforms.uTime.value=E);const M=new Fn(3.4,.35,4.2),b=new Wt({color:((m=n.rock)==null?void 0:m[0])??"#555"}),x=new Yt(2.4,2.4,.1,18);for(const C of u){const S=s(C.x,C.z)+.12,E=new lt(M,b);E.position.set(C.x,S,C.z),E.rotation.y=-Math.atan2(C.tan.z,C.tan.x),E.castShadow=E.receiveShadow=!0,i.add(E);const A=new lt(x,new Ut({color:new Ce("#ff5a1a").multiplyScalar(2.2),transparent:!0,opacity:0}));A.position.set(C.x,S+.25,C.z),A.visible=!1,i.add(A);const y=new _o("#ff6a2a",0,14,1.6);y.position.set(C.x,S+1.6,C.z),i.add(y);let v=!1;c.push({x:C.x,z:C.z,get closed(){return v},setClosed(T){v=T,A.visible=T}}),a.push((T,N,L)=>{const U=v?1:0;A.material.opacity+=(U*.9-A.material.opacity)*Math.min(1,T*3),!v&&A.material.opacity<.02&&(A.visible=!1),y.intensity=A.material.opacity*(22+6*Math.sin(L*9))})}}if(n.volcano){const f=n.volcano;l.push({x:f.x,z:f.z,r:f.r*.55});const M=new lt(new Vs(f.r*.22,20),new Ut({color:new Ce("#ff5a1a").multiplyScalar(2.4)}));M.rotation.x=-Math.PI/2,M.position.set(f.x,s(f.x,f.z)+.2,f.z),i.add(M);const b=new Ha(.35,0),x=[];for(let E=0;E<3e3&&x.length<50*h;E++){const A=(Math.random()-.5)*96,y=(Math.random()-.5)*96,v=s(A,y);v>.4&&e.pathDist(A,y)>2.2&&x.push({x:A,z:y,h:v,s:.5+Math.random()})}const C=new gn(b,new Ut({color:new Ce("#ff7a2a").multiplyScalar(1.8)}),Math.max(1,x.length));C.count=x.length;const S=new Xt;x.forEach((E,A)=>{S.position.set(E.x,E.h,E.z),S.rotation.set(E.s,E.s*3,0),S.scale.set(E.s,E.s*.5,E.s),S.updateMatrix(),C.setMatrixAt(A,S.matrix)}),i.add(C)}if(n.waterfall&&n.waterfall._lvl!==void 0){const f=n.waterfall,M=f.basin[0]-f.lip[0],b=f.basin[1]-f.lip[1],x=Math.hypot(M,b),C=M/x,S=b/x,E=f._lvl-.1,A=14,y=1.25,v=[],T=[],N=[];for(let K=0;K<=A;K++){const ie=K/A,me=.35+1.5*ie*ie,qe=E-(E-.06)*(ie*ie*.6+ie*.4);for(const H of[-1,1])v.push(f.lip[0]+C*me-S*y*H*(.85+ie*.3),qe,f.lip[1]+S*me+C*y*H*(.85+ie*.3)),T.push((H+1)/2,ie);if(K<A){const H=K*2;N.push(H,H+1,H+2,H+1,H+3,H+2)}}const L=new Ft;L.setAttribute("position",new ht(v,3)),L.setAttribute("uv",new ht(T,2)),L.setIndex(N);const U=new sn({transparent:!0,depthWrite:!1,side:cn,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform float uTime; varying vec2 vUv;
        float h(float x) { return fract(sin(x * 127.1) * 43758.5); }
        void main() {
          float col = floor(vUv.x * 18.0);
          float streak = fract(vUv.y * (1.6 + h(col) * 1.2) - uTime * (1.4 + h(col + 3.0) * 0.8));
          float s = smoothstep(0.0, 0.25, streak) * (1.0 - smoothstep(0.55, 1.0, streak));
          float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
          vec3 c = mix(vec3(0.45, 0.85, 0.88), vec3(1.0), s * 0.8 + vUv.y * 0.3);
          gl_FragColor = vec4(c, (0.55 + 0.4 * s) * edge);
        }`});i.add(new lt(L,U));const W=(()=>{const K=document.createElement("canvas");K.width=K.height=128;const ie=K.getContext("2d"),me=(()=>{let H=9;return()=>(H=H*16807%2147483647)/2147483647})();for(let H=0;H<260;H++){const J=me()*Math.PI*2,he=Math.pow(me(),.7)*58,le=1.5+me()*5*(1-he/70);ie.fillStyle=`rgba(255,255,255,${.55+me()*.45})`,ie.beginPath(),ie.arc(64+Math.cos(J)*he,64+Math.sin(J)*he,le,0,Math.PI*2),ie.fill()}ie.globalCompositeOperation="destination-in";const qe=ie.createRadialGradient(64,64,8,64,64,63);return qe.addColorStop(0,"rgba(0,0,0,1)"),qe.addColorStop(.6,"rgba(0,0,0,0.85)"),qe.addColorStop(1,"rgba(0,0,0,0)"),ie.fillStyle=qe,ie.fillRect(0,0,128,128),new oi(K)})(),B=new lt(new Vs(1.5,20),new Ut({map:W,color:"#ffffff",transparent:!0,opacity:.9,depthWrite:!1}));B.rotation.x=-Math.PI/2;const z=f.lip[0]+C*1.9,I=f.lip[1]+S*1.9;B.position.set(z,.1,I),i.add(B);const Y=oa(i,Math.round(60*h),{color:"#ffffff",size:.35,speed:-.9,drift:.6,area:1.4,top:2.2});a.push((K,ie,me)=>{U.uniforms.uTime.value=me,B.scale.setScalar(1+Math.sin(me*5)*.06),B.rotation.z=me*.4,B.material.opacity=.8+.12*Math.sin(me*7),Y(K,{x:z,z:I},me)}),l.push({x:z,z:I,r:.9})}const p=(f,M)=>l.some(b=>(b.x-f)**2+(b.z-M)**2<b.r*b.r);let g=0;return{colliders:o,update:(f,M=e.lighthouse.pos)=>{const b=Math.min(.05,Math.max(0,f-g));g=f;for(const x of a)x(b,M,f)},blocks:p,blockers:l,bridges:c}}const mt=(i,e={})=>new Wt({color:i,flatShading:!0,...e}),pr=(i,e)=>new Ut({color:new Ce(i).multiplyScalar(e)}),de={coat:mt("#f2c23c"),coatDark:mt("#c99a22"),skin:mt("#f1c7a0"),beanieG:mt("#3f8f4a"),beanieY:mt("#f2c94c"),beanieR:mt("#d4553a"),boot:mt("#3a2c22"),eyeW:new Ut({color:"#ffffff"}),eyeB:new Ut({color:"#1c1820"}),suit:mt("#6b6f78"),suitDark:mt("#3c4150"),suitNavy:mt("#2c3a5c"),shirt:mt("#f4f1ea"),tie:mt("#b8322a"),paper:mt("#fbfaf4"),stampInk:mt("#a8233a"),woodLight:mt("#c49360"),glasses:mt("#222428"),binderR:mt("#c94f3f"),binderB:mt("#3f6fc9"),binderY:mt("#e6b93f"),gull:mt("#f4f2ee"),gullWing:mt("#c4ccd4"),gullTip:mt("#2e3038"),gullBand:mt("#8e98a4"),beak:mt("#f0a43a"),megaRed:mt("#d8453a"),mouth:new Ut({color:"#4a2a2a"}),smile:new Ut({color:"#c8485a"}),wood:mt("#9a6a42"),woodDark:mt("#6e4a2c"),iron:mt("#55585e"),speaker:mt("#2a2a30"),cone:mt("#4a4a52"),rasG:mt("#3f9a4a"),rasY:mt("#f2c94c"),rasR:mt("#d4553a"),chipsBag:mt("#f2b632"),chipsRed:mt("#d8453a"),chip:mt("#f0c860"),ringMat:new Wt({color:"#f1efe9",transparent:!0,opacity:.8}),ember:pr("#ff9a3a",2.4),emberCore:pr("#fff1c2",2),rolling:mt("#5a9a5a"),rollingPaper:mt("#fffdf5"),lantern:pr("#ffd27a",2.2),hpBg:new Ut({color:"#2a2020",depthTest:!1,transparent:!0,opacity:.6}),hpFg:new Ut({color:"#d8553a",depthTest:!1}),levelPip:pr("#9fffb0",1.6),bottle:new Wt({color:"#7fd6ff",transparent:!0,opacity:.8}),bubble:new Wt({color:"#dff6ff",transparent:!0,opacity:.45,emissive:"#5a7a9a"}),kiteSail:new Wt({color:"#ff7a5a",side:cn}),rope:mt("#d9c8a0"),ledger:mt("#2f5a3a"),track:mt("#8a4ac8"),briefcase:mt("#6a3a1a"),brass:mt("#d8b040"),rotor:new Ut({color:"#cfd6dc",transparent:!0,opacity:.45}),redLight:pr("#ff3030",2),balloonA:mt("#e8e4d8"),balloonB:mt("#c8463a"),heli:mt("#f2c23c"),glassDark:mt("#2a3440"),spot:new Ut({color:"#fff6c8",transparent:!0,opacity:.18,blending:ai,depthWrite:!1,side:cn}),pizza:mt("#e8603a"),pizzaCrust:mt("#e8b866"),lampGlass:new Wt({color:"#ff8a5a",transparent:!0,opacity:.45,emissive:"#6a1a10"}),lampBlob:pr("#ff9a2a",2.2)},xe={sphere:new Qn(1,10,8),lowSphere:new ms(1,1),capsule:new Va(.5,.7,3,8),cyl:new Yt(1,1,1,10),cone:new Jn(1,1,10),box:new Fn(1,1,1),dome:new Qn(1,10,6,0,Math.PI*2,0,Math.PI/2),ember:new Ir(.22,0),leaf:new Ir(.3,0),plane:new li(1,1),smileArc:new Sr(.06,.018,4,10,Math.PI),ring:new Sr(.32,.12,6,14),bubbleRing:new Sr(.18,.025,4,12)};function _e(i,e,t,n,s,r=0,o=0,a=0,l=!0){const c=new lt(i,e);return c.scale.set(t,n,s),c.position.set(r,o,a),c.castShadow=l,c}function Eu(i,e,t,n,s=.12,r=.18){const o=new bt;o.position.set(e,t,n),o.userData.isEyes=!0;for(const a of[-1,1])o.add(_e(xe.sphere,de.eyeW,s,s,s,a*r,0,0,!1)),o.add(_e(xe.sphere,de.eyeB,s*.55,s*.55,s*.55,a*r,.01,-s*.7,!1));return i.add(o),o}const Cd=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,31);return t.addColorStop(0,"rgba(0,0,0,0.55)"),t.addColorStop(.6,"rgba(0,0,0,0.25)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new oi(i)})(),P_=new Ut({map:Cd,transparent:!0,depthWrite:!1,fog:!1}),Rd=new li(1,1).rotateX(-Math.PI/2);function Tu(i,e){const t=new lt(Rd,P_);t.scale.set(e*2,1,e*2),t.position.y=.04,t.renderOrder=1,i.add(t),i.userData.blob=t}function L_(i,e,t=.8){const n=new Ut({map:Cd,color:"#000000",transparent:!0,opacity:t,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),s=new gn(Rd,n,Math.max(1,e.length));s.count=e.length;const r=new Xt;return e.forEach((o,a)=>{r.position.set(o.x,o.y+.04,o.z),r.scale.set(o.r*2,1,o.r*2),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.renderOrder=1,i.add(s),s}function Pd(i){const e=[];i.traverse(t=>{t.userData.isEyes&&e.push(t)}),i.userData.eyes=e}function Ld(i,e,t,n=1){const s=_e(xe.box,de.mouth,.14*n,.025*n,.02,0,e,t,!1);s.rotation.z=.15;const r=_e(xe.smileArc,de.smile,n,n,n,0,e+.03*n,t,!1);return r.rotation.z=Math.PI,r.visible=!1,i.add(s,r),{sour:s,smile:r}}const D_=(()=>{const i=new Yt(.07,.05,.55,8);return i.rotateZ(Math.PI/2),i})();function Dd(){const i=new bt,e=_e(xe.box,de.rollingPaper,.55,.012,.26,0,0,0,!1),t=_e(xe.lowSphere,de.rasG,.22,.06,.07,0,.03,0,!1),n=new lt(D_,de.rollingPaper),s=_e(xe.cone,de.rollingPaper,.05,.1,.05,.32,0,0,!1);return s.rotation.z=-Math.PI/2,n.add(s),i.add(e,t,n),i.userData={paper:e,herb:t,joint:n,tip:s},Au(i,0),i}function Au(i,e){const{paper:t,herb:n,joint:s,tip:r}=i.userData,o=Mt.smoothstep,a=o(e,.08,.45),l=o(e,.5,.85);t.visible=l<.98,t.scale.set(.55,.012,.26*(1-.7*l)),n.visible=a>.01&&l<.98,n.scale.set(.22*a+.001,.06*a+.001,.07*(1-.5*l)+.001),s.visible=l>.02,s.scale.set(1,.35+.65*l,.35+.65*l),r.visible=e>.88}function Id(){const i=new bt,e=new bt;i.add(e),e.add(_e(xe.capsule,de.coat,.75,.75,.7,0,.75,0)),e.add(_e(xe.cyl,de.coatDark,.4,.06,.38,0,.62,0));const t=new bt;t.position.y=1.62,t.scale.setScalar(1.22),t.add(_e(xe.sphere,de.skin,.33,.32,.32)),t.add(_e(xe.cyl,de.beanieG,.35,.1,.35,0,.14,0)),t.add(_e(xe.cyl,de.beanieY,.31,.1,.31,0,.24,0)),t.add(_e(xe.dome,de.beanieR,.27,.22,.27,0,.29,0)),t.add(_e(xe.sphere,de.beanieY,.08,.08,.08,0,.52,0)),Eu(t,0,.02,-.26,.07,.12);const n=Ld(t,-.12,-.3,.8);n.sour.visible=!1,n.smile.visible=!0,e.add(t);const s=[-1,1].map(h=>{const d=_e(xe.capsule,de.boot,.24,.32,.24,h*.18,.2,0);return e.add(d),d}),r=new bt;r.position.set(.48,1,-.1),r.add(_e(xe.box,de.iron,.2,.28,.2,0,-.25,0)),r.add(_e(xe.sphere,de.lantern,.1,.13,.1,0,-.25,0,!1)),e.add(r);const o=new bt;o.position.set(-.46,1.08,0),o.add(_e(xe.capsule,de.coat,.16,.34,.16,0,-.28,0)),o.add(_e(xe.sphere,de.skin,.1,.1,.1,0,-.52,0)),e.add(o);const a=new bt;a.add(_e(xe.box,de.rolling,.7,.12,.42,0,0,0,!1)),a.add(_e(xe.box,de.rollingPaper,.6,.08,.36,.06,.08,0,!1)),a.add(_e(xe.leaf,de.rasG,.35,.05,.35,-.12,.07,0,!1)),a.position.y=2.35,a.visible=!1,i.add(a);const l=new bt;l.position.y=2;for(let h=0;h<3;h++)l.add(_e(xe.ember,de.emberCore,.6,.6,.6,Math.cos(h*2.1)*.45,0,Math.sin(h*2.1)*.45,!1));l.visible=!1,i.add(l);const c=new bt;c.position.set(.46,1.08,0),c.add(_e(xe.capsule,de.coat,.16,.34,.16,0,-.28,0)),c.add(_e(xe.sphere,de.skin,.1,.1,.1,0,-.52,0)),c.visible=!1,e.add(c);const u=Dd();return u.position.set(0,1,-.62),u.scale.setScalar(1.6),u.visible=!1,e.add(u),Tu(i,.62),i.userData={body:e,legs:s,head:t,lanternArm:r,armL:o,armR:c,roll:u,carried:a,stars:l,blob:i.userData.blob},Pd(i),i}function Ai(i,e){const t=new bt;t.position.y=e;const n=new lt(xe.plane,de.hpBg);n.scale.set(1,.14,1),n.renderOrder=10;const s=new lt(xe.plane,de.hpFg.clone());s.scale.set(.96,.09,1),s.position.z=.001,s.renderOrder=11,t.add(n,s),t.visible=!1,i.add(t),i.userData.hpBar=t,i.userData.hpFg=s}function mr(i,{scale:e=1,suit:t=de.suit,wide:n=1}={}){const s=e;i.add(_e(xe.capsule,t,.7*s*n,.62*s,.6*s,0,.72*s,0)),i.add(_e(xe.box,de.shirt,.22*s,.4*s,.05,0,.98*s,-.27*s*Math.min(n,1.2),!1)),i.add(_e(xe.box,de.tie,.07*s,.32*s,.05,0,.94*s,-.29*s*Math.min(n,1.2),!1));for(const a of[-1,1])i.add(_e(xe.capsule,de.suitDark,.2*s,.25*s,.2*s,a*.16*s,.17*s,0));const r=new bt;r.position.y=1.5*s,r.add(_e(xe.sphere,de.skin,.3*s,.3*s,.3*s)),r.add(_e(xe.dome,de.suitDark,.31*s,.14*s,.31*s,0,.12*s,.02)),Eu(r,0,.03*s,-.25*s,.065*s,.11*s);const o=Ld(r,-.12*s,-.28*s,s);return i.add(r),{head:r,mouth:o}}function I_(i){const e=new bt,t=new bt;if(e.add(t),e.userData.body=t,i==="clerk"){const{head:n,mouth:s}=mr(t);for(const a of[-1,1])n.add(_e(xe.box,de.glasses,.11,.07,.02,a*.11,.03,-.3,!1));n.add(_e(xe.box,de.glasses,.08,.015,.02,0,.04,-.3,!1));const r=new bt;r.position.set(.48,.9,-.15),r.add(_e(xe.cyl,de.woodLight,.06,.25,.06,0,.12,0)),r.add(_e(xe.sphere,de.woodLight,.09,.09,.09,0,.27,0)),r.add(_e(xe.box,de.stampInk,.22,.08,.16,0,-.02,0)),t.add(r);const o=_e(xe.box,de.paper,.3,.38,.02,-.46,.92,-.2);o.rotation.y=.4,t.add(o),e.userData.mouth=s,e.userData.arm=r,Ai(e,2.15)}else if(i==="tank"){const{mouth:n}=mr(t,{scale:1.25,suit:de.suitNavy,wide:1.45}),s=new bt;s.position.set(0,0,-.95),s.add(_e(xe.box,de.woodDark,.75,1.05,.45,0,.52,0));const r=_e(xe.box,de.woodLight,.9,.08,.6,0,1.1,.04);r.rotation.x=.35,s.add(r),s.add(_e(xe.cyl,de.iron,.02,.45,.02,.18,1.3,.1,!1)),s.add(_e(xe.sphere,de.speaker,.05,.05,.05,.18,1.52,.04,!1)),t.add(s),e.userData.mouth=n,Ai(e,2.6)}else if(i==="gull"){t.add(_e(xe.lowSphere,de.gull,.36,.3,.6,0,0,0)),t.add(_e(xe.cone,de.beak,.08,.3,.08,0,0,-.65).rotateX(-Math.PI/2));const n=_e(xe.cone,de.megaRed,.2,.5,.2,0,-.22,-.65);n.rotation.x=Math.PI/2,t.add(n),t.add(_e(xe.cyl,de.paper,.21,.06,.21,0,-.22,-.89).rotateX(Math.PI/2));const s=[-1,1].map(r=>{const o=new bt;o.position.set(r*.25,.05,0),o.add(_e(xe.box,de.gullWing,.6,.06,.42,r*.3,0,0)),o.add(_e(xe.box,de.gullBand,.58,.065,.1,r*.31,0,.17));const a=_e(xe.box,de.gullTip,.42,.055,.3,r*.78,0,.04);return a.rotation.y=r*.18,o.add(a),t.add(o),o});e.userData.wings=s,Eu(t,0,.12,-.42,.06,.13),e.userData.mouth=null,Ai(e,.8)}else if(i==="swarm"){const{mouth:n}=mr(t,{scale:.6}),s=[de.binderR,de.binderB,de.binderY],r=_e(xe.box,s[Math.floor(Math.random()*3)],.08,.34,.28,.32,.55,-.08);t.add(r),e.userData.mouth=n,Ai(e,1.3)}else if(i==="auditor"){const{head:n,mouth:s}=mr(t,{scale:1.1,suit:de.suitDark});for(const o of[-1,1])n.add(_e(xe.box,de.glasses,.12,.08,.02,o*.12,.03,-.33,!1));const r=new bt;r.position.set(0,.95,-.55),r.add(_e(xe.box,de.ledger,1.05,1.2,.14)),r.add(_e(xe.box,de.paper,.95,1.1,.1,0,0,.03,!1)),r.add(_e(xe.box,de.brass,.3,.3,.02,0,.15,-.08,!1)),t.add(r),e.userData.mouth=s,e.userData.shield=r,Ai(e,2.3)}else if(i==="complainer"){const{head:n,mouth:s}=mr(t,{scale:.85,suit:de.track});n.add(_e(xe.cyl,de.rasR,.27,.06,.27,0,.1,0,!1));const r=new bt;r.position.set(.35,1.2,-.1),r.add(_e(xe.cyl,de.track,.06,.45,.06,0,.2,0)),r.add(_e(xe.box,de.paper,.32,.42,.02,0,.55,0)),t.add(r),e.userData.mouth=s,e.userData.arm=r,Ai(e,1.8)}else if(i==="lobbyist"||i==="lobbyMini"){const n=i==="lobbyMini",{mouth:s}=mr(t,{scale:n?.55:1.05,suit:de.suitNavy});t.add(_e(xe.box,de.brass,.08,.3,.05,0,n?.52:.99,n?-.17:-.32,!1)),t.add(_e(xe.box,de.briefcase,n?.28:.5,n?.22:.36,.12,n?.3:.55,n?.3:.55,0)),e.userData.mouth=s,Ai(e,n?1.2:2.1)}else if(i==="drone"){t.add(_e(xe.box,de.iron,.42,.14,.42));const n=[];for(const[s,r]of[[1,1],[-1,1],[1,-1],[-1,-1]]){t.add(_e(xe.box,de.speaker,.5,.04,.05,s*.22,0,r*.22).rotateY(s*r>0?Math.PI/4:-Math.PI/4));const o=_e(xe.cyl,de.rotor,.2,.01,.2,s*.4,.08,r*.4,!1);t.add(o),n.push(o)}t.add(_e(xe.sphere,de.redLight,.07,.07,.07,0,-.06,-.22,!1)),e.userData.rotors=n,e.userData.mouth=null,Ai(e,.6)}else if(i==="balloon"){t.add(_e(xe.sphere,de.balloonA,1.1,1.3,1.1,0,1.6,0));for(let n=0;n<4;n++)t.add(_e(xe.cyl,de.balloonB,1.12-Math.abs(n-1.5)*.18,.18,1.12-Math.abs(n-1.5)*.18,0,1+n*.42,0,!1));t.add(_e(xe.box,de.woodLight,.6,.4,.6,0,-.1,0)),t.add(_e(xe.sphere,de.skin,.2,.2,.2,0,.25,0)),t.add(_e(xe.dome,de.suitDark,.21,.1,.21,0,.32,0,!1));for(const[n,s]of[[1,1],[-1,1],[1,-1],[-1,-1]])t.add(_e(xe.cyl,de.rope,.015,.8,.015,n*.28,.45,s*.28,!1));e.userData.mouth=null,Ai(e,3.3)}else if(i==="heli"){t.add(_e(xe.capsule,de.heli,.6,.55,.9,0,0,0).rotateX(Math.PI/2)),t.add(_e(xe.sphere,de.glassDark,.28,.22,.24,0,.05,-.38,!1)),t.add(_e(xe.box,de.heli,.12,.12,1.1,0,.05,.85));const n=_e(xe.box,de.speaker,1.9,.02,.12,0,.4,0,!1),s=_e(xe.box,de.speaker,.04,.5,.08,.08,.1,1.38,!1);t.add(n,s);const r=new lt(new Jn(1.2,4.5,14,1,!0),de.spot);r.position.set(0,-2.3,-.2),r.visible=!1,t.add(r),e.userData.rotor=n,e.userData.tail=s,e.userData.beam=r,e.userData.mouth=null,Ai(e,1)}return Tu(e,{tank:.85,auditor:.7,balloon:.9,heli:.6,swarm:.35,lobbyMini:.35,drone:.35,gull:.45}[i]??.55),Pd(e),e}function U_(i){const e=i.mesh.userData.mouth;e&&(e.sour.visible=!1,e.smile.visible=!0),i.mesh.userData.hpBar.visible=!1}function z_(i){const e=new bt,t=new bt;if(e.add(t),i==="ring"){e.add(_e(xe.box,de.wood,.9,.5,.9,0,.25,0)),t.position.y=.95;const o=_e(xe.cyl,de.iron,.32,1.1,.32,0,0,-.15);o.rotation.x=Math.PI/2-.15,t.add(o),t.add(_e(xe.cyl,de.woodDark,.38,.12,.38,0,.08,-.7).rotateX(Math.PI/2-.15)),t.add(_e(xe.sphere,de.iron,.42,.42,.42,0,0,.42)),t.add(_e(xe.sphere,de.ember,.12,.12,.12,0,.1,.8,!1))}else if(i==="chips"){e.add(_e(xe.cyl,de.iron,.7,.3,.7,0,.15,0)),t.position.y=.3;const o=_e(xe.box,de.chipsBag,.95,1.1,.6,0,.6,0);o.rotation.x=-.35,t.add(o),t.add(_e(xe.box,de.chipsRed,.97,.3,.62,0,.55,0).rotateX(-.35));for(let a=0;a<5;a++)t.add(_e(xe.leaf,de.chip,.3,.08,.3,(a-2)*.17,1.2,-.3-a%2*.1,!1))}else if(i==="speaker"){const o=new bt;o.add(_e(xe.box,de.speaker,1,1.5,.75,0,.75,0)),o.add(_e(xe.box,de.rasG,1.02,.12,.77,0,1.38,0,!1)),o.add(_e(xe.box,de.rasY,1.02,.12,.77,0,1.26,0,!1)),o.add(_e(xe.box,de.rasR,1.02,.12,.77,0,1.14,0,!1));const a=[];for(const[l,c]of[[.85,.33],[.35,.2]]){const u=_e(xe.cyl,de.cone,c,.08,c,0,l,-.38,!1);u.rotation.x=Math.PI/2,o.add(u),a.push(u)}t.add(o),e.userData.woofers=a}else if(i==="bubble"){e.add(_e(xe.cyl,de.speaker,.5,.25,.5,0,.12,0)),t.position.y=.3,t.add(_e(xe.cyl,de.bottle,.36,1,.36,0,.5,0)),t.add(_e(xe.cyl,de.rasR,.22,.2,.22,0,1.08,0));const o=_e(xe.cyl,de.wood,.03,.8,.03,0,1.4,-.2);o.rotation.x=.5,t.add(o),t.add(_e(xe.bubbleRing,de.rasY,1,1,1,0,1.75,-.42,!1).rotateX(.5));for(let a=0;a<3;a++)t.add(_e(xe.sphere,de.bubble,.14+a*.04,.14+a*.04,.14+a*.04,.3-a*.25,1.7+a*.3,-.7-a*.15,!1))}else if(i==="kite"){for(let a=0;a<3;a++){const l=a/3*Math.PI*2,c=_e(xe.cyl,de.wood,.07,1.6,.07,Math.cos(l)*.45,.7,Math.sin(l)*.45);c.rotation.set(Math.sin(l)*.28,0,-Math.cos(l)*.28),e.add(c)}t.position.y=1.55,t.add(_e(xe.cyl,de.iron,.22,.3,.22,0,0,0).rotateZ(Math.PI/2));const o=kd();o.position.set(0,.7,0),o.scale.setScalar(.8),t.add(o),e.userData.kite=o}else if(i==="pizza"){e.add(_e(xe.box,de.wood,1.2,.35,.9,0,.18,0));for(const a of[-1,1])e.add(_e(xe.box,de.woodDark,.12,.9,.12,a*.45,.65,0));t.position.y=1;const o=new bt;o.add(_e(xe.box,de.woodLight,.12,.12,1.5,0,0,-.4)),o.add(_e(xe.cyl,de.pizzaCrust,.32,.06,.32,0,.08,-1.1)),o.add(_e(xe.cyl,de.pizza,.27,.03,.27,0,.12,-1.1,!1)),o.rotation.x=-.35,t.add(o),e.userData.arm=o}else if(i==="lamp"){e.add(_e(xe.cone,de.brass,.55,.7,.55,0,.35,0)),t.position.y=.7,t.add(_e(xe.capsule,de.lampGlass,.75,.9,.75,0,.75,0,!1));const o=[];for(let a=0;a<3;a++){const l=_e(xe.sphere,de.lampBlob,.16,.2,.16,0,.5+a*.3,0,!1);t.add(l),o.push(l)}t.add(_e(xe.cone,de.brass,.3,.35,.3,0,1.55,0)),e.userData.blobs=o}const n=[];for(let o=0;o<5;o++){const a=_e(xe.leaf,de.levelPip,.45,.1,.45,Math.cos(o*1.2566)*.95,.15,Math.sin(o*1.2566)*.95,!1);a.visible=o===0,e.add(a),n.push(a)}const s=new Ms(1.45,1.7,40,1,0,Math.PI*2);s.rotateX(-Math.PI/2);const r=new lt(s,new Ut({color:"#9fffb0",transparent:!0,opacity:.8,depthWrite:!1}));return r.position.y=.06,r.visible=!1,e.add(r),e.traverse(o=>{o.isMesh&&o!==r&&o.material!==de.levelPip&&(o.castShadow=!0)}),Tu(e,1),e.userData.head=t,e.userData.pips=n,e.userData.ring=r,e}function Cu(i,e){i.mesh.userData.pips.forEach((t,n)=>t.visible=n<e),i.mesh.scale.setScalar(1+(e-1)*.08)}function wi(i,e){const t=i.mesh.userData.ring;if(t.visible=e>0,e<=0)return;t.geometry.dispose();const n=new Ms(1.45,1.7,40,1,0,Math.PI*2*e);n.rotateX(-Math.PI/2),t.geometry=n}function Ud(){const i=new bt;return i.add(_e(xe.ember,de.ember,1,1.3,1,0,0,0,!1)),i.add(_e(xe.ember,de.emberCore,.5,.7,.5,0,0,0,!1)),i}function N_(){const i=new lt(xe.ring,de.ringMat);return i.castShadow=!1,i}function zd(){const i=new bt;return i.add(_e(xe.box,de.chipsBag,.32,.4,.14,0,0,0,!0)),i.add(_e(xe.box,de.chipsRed,.33,.12,.15,0,.02,0,!1)),i}function Nd(){const i=new Sr(1,.08,4,32);return i.rotateX(Math.PI/2),new lt(i,new Ut({color:"#c8ffd0",transparent:!0,opacity:.7,depthWrite:!1}))}let aa=null;function k_(){if(aa)return aa;const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d");["#d8453a","#f2c94c","#d8453a","#f2c94c","#3f9a4a","#f2c94c","#d8453a","#f2c94c"].forEach((n,s)=>{e.fillStyle=n,e.fillRect(0,s*8,64,8)});const t=new oi(i);return t.colorSpace=En,t.wrapS=t.wrapT=Ui,t.repeat.set(1,1.4),t.magFilter=Tn,aa=new Wt({map:t,flatShading:!0}),aa}function kd(){const i=new bt,e=new vd([new Re(0,.55),new Re(.38,0),new Re(0,-.75),new Re(-.38,0)]),t=new bu(e,{depth:.035,bevelEnabled:!1});t.translate(0,0,-.0175);const n=new lt(t,k_());n.rotation.x=-Math.PI/2.4,n.castShadow=!0,i.add(n);const s=_e(xe.box,de.woodDark,.025,1.3,.025,0,-.1,.03,!1),r=_e(xe.box,de.woodDark,.76,.025,.025,0,0,.03,!1);n.add(s,r);const o=new bt;o.position.set(0,-.68,0),n.add(o);const a=[de.rasR,de.rasY,de.rasG,de.rasR,de.rasY];let l=o;const c=[];for(let u=0;u<a.length;u++){const h=new bt;h.position.y=u?-.2:0,h.add(_e(xe.box,de.rope,.015,.2,.015,0,-.1,0,!1));const d=new bt;d.position.y=-.2;for(const p of[-1,1]){const g=_e(xe.cone,a[u],.05,.1,.03,p*.05,0,0,!1);g.rotation.z=p*Math.PI/2,d.add(g)}h.add(d),l.add(h),l=h,c.push(h)}return i.userData.tailSegs=c,i}function Fd(){return _e(xe.sphere,de.bubble,.28,.28,.28,0,0,0,!1)}function F_(){const i=new bt;return i.add(_e(xe.cyl,de.pizzaCrust,.3,.06,.3,0,0,0,!0)),i.add(_e(xe.cyl,de.pizza,.25,.03,.25,0,.04,0,!1)),i}const zr=20;function Kn(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function O_(i){const e=new Mu(i.map(([s,r])=>new V(s,0,r)),!1,"catmullrom",.5),t=e.getLength(),n=e.getSpacedPoints(400);return{curve:e,length:t,samples:n}}function B_(i,e,t,n,s){const o=new Fn(1,1,1,5,5,5),a=o.attributes.position,l=new V,c=new V,u=i/2,h=e/2,d=t/2,p=Math.min(n,u,h,d)*.98,g=s()*10,_=(s()-.5)*.12;for(let f=0;f<a.count;f++){l.set(a.getX(f)*i,a.getY(f)*e,a.getZ(f)*t),c.set(Mt.clamp(l.x,-u+p,u-p),Mt.clamp(l.y,-h+p,h-p),Mt.clamp(l.z,-d+p,d-p)),l.sub(c);const M=l.length();M>0&&l.multiplyScalar(p/M),l.add(c);const b=1+.035*Math.sin(l.x*4.1+g)*Math.sin(l.z*3.7-g)+.025*Math.sin(l.y*6+g*2);l.x*=b,l.z*=b,l.y+=l.x*_,a.setXYZ(f,l.x,l.y,l.z)}o.deleteAttribute("normal"),o.deleteAttribute("uv");const m=Sd(o);return m.computeVertexNormals(),m}function G_(i,e,t,n){const s=new Ce(e),r=new Ce(t),o=new Ce,a=[[[2.3,.85,1.9,0,0,0],[1.6,.7,1.4,.2,-.1,.35]],[[1.5,1.5,1.4,-.35,.1,.1],[1.4,.8,1.3,.75,-.2,-.3],[.9,.6,.85,-.3,.05,.6]],[[2.4,.7,2,0,0,.2],[1.8,.65,1.5,-.15,.15,-.25],[1.1,.55,1,.2,-.1,.5]]][n%3],l=[];let c=0,u=0;a.forEach(([f,M,b,x,C,S],E)=>{const A=.88+i()*.24,y=B_(f*A,M*(.9+i()*.2),b*A,Math.min(f,M,b)*.28,i);y.rotateY(S+(i()-.5)*.3);const v=n%3===1&&E===1?0:c;y.translate(x,v+M/2,C),n%3===1&&E===1||(c=v+M*.92),u=Math.max(u,v+M),l.push(y)});const h=wu(l),d=h.attributes.position,p=h.attributes.normal,g=[],_=.95+i()*.1,m=i()*10;for(let f=0;f<d.count;f++){const M=d.getX(f),b=d.getY(f),x=d.getZ(f);o.copy(s).multiplyScalar(_*(.72+.28*Mt.smoothstep(b,0,.9))*(p.getY(f)<-.3?.8:1));const C=Math.sin(M*2.3+m)*Math.sin(x*2.7-m)+.5*Math.sin(M*5.1-x*4.3+m),S=Mt.smoothstep(p.getY(f),.6,.9)*Mt.smoothstep(b,u-.3,u-.08)*Mt.smoothstep(C,-.55,0);o.lerp(r,S),g.push(o.r,o.g,o.b)}return h.setAttribute("color",new ht(g,3)),h}function hf(i,e,t,n,s,r,o=12,a={}){const l=a.dressed?.3:1,c=new Yt(e,t,n,o,3,!0),u=new Ms(.001,e,o,4);u.rotateX(-Math.PI/2),u.translate(0,n/2,0);const h=wu([c,u]),d=h.attributes.position,p=i()*10;for(let S=0;S<d.count;S++){const E=d.getX(S),A=d.getY(S),y=d.getZ(S),v=Math.hypot(E,y);if(v<1e-4)continue;const T=Math.atan2(y,E);let N=1+l*(.05*Math.sin(T*3+p)+.035*Math.sin(T*7-p*2)+.025*Math.sin(A*9+T*4)),L=A;A>n/2-1e-4&&v>e*.97&&(N*=.93,L-=.08),d.setXYZ(S,E*N,L,y*N)}h.deleteAttribute("normal"),h.deleteAttribute("uv");const g=Sd(h);g.computeVertexNormals(),g.translate(0,n/2,0);const _=new Ce(s),m=new Ce(r),f=new Ce,M=[],b=new Ce("#ece3cc"),x=g.attributes.position,C=g.attributes.normal;for(let S=0;S<x.count;S++){const E=x.getX(S),A=x.getY(S),y=x.getZ(S),v=Math.atan2(y,E),T=Math.hypot(E,y);if(f.copy(_).multiplyScalar(.55+.45*Mt.smoothstep(A,0,n*.9)),a.dressed){const U=Mt.smoothstep(C.getY(S),.75,.95)*Mt.smoothstep(A,n-.15,n-.08),W=1-Mt.smoothstep(Math.abs(T-e*.72),.04,.1);f.lerp(b,U*(1-.75*W)),f.multiplyScalar(1-.45*W*U),M.push(f.r,f.g,f.b);continue}const N=Math.sin(E*1.9+p)*Math.sin(y*2.3-p)+.5*Math.sin(v*5+p)+.3*Math.sin(T*4),L=Mt.smoothstep(A,n-.25,n-.05)*Mt.smoothstep(N,0,.5)*Mt.smoothstep(C.getY(S),.2,.7);f.lerp(m,L),M.push(f.r,f.g,f.b)}return g.setAttribute("color",new ht(M,3)),g}function ff(i,e=.55){const t=document.createElement("canvas");t.width=t.height=256;const n=t.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,256,256);const s=Kn(4242);for(let l=0;l<90;l++){const c=225+s()*30|0;n.fillStyle=`rgba(${c},${c},${c},0.5)`,n.beginPath(),n.ellipse(s()*256,s()*256,8+s()*22,4+s()*10,s()*3,0,Math.PI*2),n.fill()}n.lineCap="round",n.lineJoin="round";const r=(l,c,u,h,d)=>{n.lineWidth=d,n.strokeStyle="rgba(46,44,50,0.85)",n.beginPath(),n.moveTo(l,c);for(let p=0;p<h;p++)u+=(s()-.5)*.9,l+=Math.cos(u)*9,c+=Math.sin(u)*9,n.lineTo(l,c),s()<.12&&d>1.2&&(n.stroke(),r(l,c,u+(s()<.5?1:-1)*(.6+s()*.6),h>>1,d*.7),n.lineWidth=d,n.strokeStyle="rgba(46,44,50,0.85)",n.beginPath(),n.moveTo(l,c));n.stroke()};for(let l=0;l<9;l++){const c=s()*256,u=s()*256,h=s()*6.28,d=5+(s()*7|0),p=1.6+s()*1.2;for(const[g,_]of[[0,0],[256,0],[-256,0],[0,256],[0,-256]])n.save(),n.translate(g,_),r(c,u,h,d,p),n.restore()}const o=new oi(t);o.colorSpace=En,o.wrapS=o.wrapT=Ui,o.anisotropy=4;const a=new Wt({vertexColors:!0});return a.onBeforeCompile=l=>{l.uniforms.uCrack={value:o},l.uniforms.uWaterC={value:new Ce(i)},l.vertexShader=`varying vec3 vRP;
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
      }`)},a.customProgramCacheKey=()=>`rock${e}`,a}function V_(i,e,t){const n=E_(t),s=new V(t.lighthouse[0],0,t.lighthouse[1]),r=t.paths.map(O_),o=r.flatMap(k=>k.samples),a=(k,F)=>{let ee=1/0;for(let pe=0;pe<o.length;pe+=3){const Se=o[pe],Le=(Se.x-k)**2+(Se.z-F)**2;Le<ee&&(ee=Le)}return Math.sqrt(ee)};if(t.plateausAuto&&!t.plateaus){const k=Kn(500+t.seed),F=[];for(const ee of t.plateausAuto){let pe=null,Se=-1;for(let Le=0;Le<500;Le++){const Te=k()*Math.PI*2,te=12+k()*24,je=Math.cos(Te)*te,Xe=Math.sin(Te)*te,pt=a(je,Xe);if(pt<ee.r+3.5||Math.hypot(je-s.x,Xe-s.z)<ee.r+9||F.some(Dt=>Math.hypot(Dt.x-je,Dt.z-Xe)<Dt.r+ee.r+5))continue;const Rt=Math.min(pt-ee.r,9)+k()*.5;Rt>Se&&(Se=Rt,pe={x:je,z:Xe,...ee})}pe&&F.push(pe)}if(t.plateaus=F,t.waterfall&&F[0]){const ee=F[0],pe=t.waterfall;let Se=0,Le=-1;for(let je=0;je<16;je++){const Xe=je/16*Math.PI*2,pt=ee.x+Math.cos(Xe)*(ee.r+3.2),Rt=ee.z+Math.sin(Xe)*(ee.r+3.2),Dt=a(pt,Rt);Dt>Le&&(Le=Dt,Se=Xe)}const Te=Math.cos(Se),te=Math.sin(Se);pe.pool=[ee.x+Te*(ee.r-2.4),ee.z+te*(ee.r-2.4)],pe.lip=[ee.x+Te*(ee.r-.3),ee.z+te*(ee.r-.3)],pe.basin=[ee.x+Te*(ee.r+3),ee.z+te*(ee.r+3)]}}const l=t.fjord,c=t.nes,u=(k,F)=>{if(t.shape==="fjord"){const ee=F+30+2.2*Math.sin(k*.21)+1.2*Math.sin(k*.53+1),pe=Mt.clamp(F,c.z1,c.z0),Se=c.r-Math.hypot(k-c.x,F-pe)+(F<c.z1?0:.6*Math.sin(F*.7));return Math.max(ee,Se)}return n(Math.atan2(F,k))-Math.hypot(k,F)},h=(k,F,ee=!1)=>{const pe=Mt.smoothstep(u(k,F),-3,7),Se=.9+.7*Math.sin(k*.17+1)*Math.cos(F*.21)+.35*Math.sin(k*.5+F*.4)+.3*Math.sin(k*.31-F*.23+2.1)+.18*Math.cos(k*.73+F*.61),Le=2.4*Math.exp(-((k-s.x-2)**2+(F-s.z+1)**2)/60);let Te=-2.2+pe*(2.2+Se+Le);if(pe>.85&&Te<.35&&(Te=Math.max(-.42,.35-(.35-Te)*3.2)),l){const te=Math.max(Mt.smoothstep(Math.abs(k),l.wall-3,l.wall+6),Mt.smoothstep(F,l.top+6,l.top+14));Te+=te*(7+1.5*Math.sin(F*.13+k*.05));const je=Math.abs(k-l.xc(F)),Xe=1-Mt.smoothstep(F,l.top-6,l.top+2);je<l.w+1.5&&Xe>0&&(Te=Math.min(Te,Mt.lerp(Te,-1.6,Xe*(1-Mt.smoothstep(je,l.w-.8,l.w+1.5)))))}for(const te of t.plateaus||[]){const je=Math.hypot(k-te.x,F-te.z),Xe=Math.atan2(F-te.z,k-te.x),pt=te.r+Math.sin(Xe*5+te.x)*.8+Math.sin(Xe*11)*.3;Te+=te.h*Mt.smoothstep(pt-je,0,1.3)}if(t.waterfall&&!ee){const te=t.waterfall,je=Math.hypot(k-te.pool[0],F-te.pool[1]);je<te.poolR+.6&&(te._lvl??(te._lvl=h(te.pool[0],te.pool[1],!0)-.12),Te=Math.min(Te,te._lvl-.48*Math.sqrt(Math.max(0,1-je/(te.poolR+.6)))));const Xe=Mt.clamp(((k-te.pool[0])*(te.lip[0]-te.pool[0])+(F-te.pool[1])*(te.lip[1]-te.pool[1]))/((te.lip[0]-te.pool[0])**2+(te.lip[1]-te.pool[1])**2),0,1),pt=te.pool[0]+(te.lip[0]-te.pool[0])*Xe,Rt=te.pool[1]+(te.lip[1]-te.pool[1])*Xe;Math.hypot(k-pt,F-Rt)<.75&&te._lvl!==void 0&&(Te=Math.min(Te,te._lvl-.25));const Dt=Math.hypot(k-te.basin[0],F-te.basin[1]);Dt<te.basinR&&(Te=Math.min(Te,Math.max(-.42,.05-.47*Math.sqrt(1-Dt/te.basinR))))}if(t.volcano){const te=t.volcano,je=Math.hypot(k-te.x,F-te.z);Te+=te.h*Math.max(0,1-je/te.r)**1.4-te.h*.5*Math.max(0,1-je/(te.r*.25))}return Te},d=68,p=e.mobile?160:176,g=new Float32Array((p+1)*(p+1)),_=new Float32Array((p+1)*(p+1));for(let k=0;k<=p;k++)for(let F=0;F<=p;F++){const ee=-d+F/p*d*2,pe=-d+k/p*d*2,Se=a(ee,pe);_[k*(p+1)+F]=Se;let Le=h(ee,pe);const Te=Mt.smoothstep(Se,1.4,3.2),te=Math.max(h(ee,pe)*.6+.3,.45);Le=Mt.lerp(Math.min(Le,te+.1),Le,Te),l&&Math.abs(pe-l.bridgeZ)<4&&Math.abs(ee-l.xc(pe))<l.w+2&&Se<2.2&&(Le=Math.max(Le,.5)),g[k*(p+1)+F]=Le}const m=(k,F,ee)=>{const pe=Mt.clamp((F+d)/(d*2)*p,0,p-.001),Se=Mt.clamp((ee+d)/(d*2)*p,0,p-.001),Le=Math.floor(pe),Te=Math.floor(Se),te=pe-Le,je=Se-Te,Xe=k[Te*(p+1)+Le],pt=k[Te*(p+1)+Le+1],Rt=k[(Te+1)*(p+1)+Le],Dt=k[(Te+1)*(p+1)+Le+1];return(Xe*(1-te)+pt*te)*(1-je)+(Rt*(1-te)+Dt*te)*je},f=(k,F)=>m(g,k,F),M=(k,F)=>m(_,k,F),b=(k,F)=>f(k,F)>.35,x=.5,C=(k,F)=>Math.max(Math.abs(f(k+.4,F)-f(k-.4,F)),Math.abs(f(k,F+.4)-f(k,F-.4)))/.8,S=(k,F)=>!!l&&Math.abs(F-l.bridgeZ)<4&&Math.abs(k-l.xc(F))<l.w+1.5&&M(k,F)<2.6,E=new Ce("#cfeaff"),A=(k,F)=>f(k,F)>.05-x&&C(k,F)<1.05,y=e.mobile?170:256,v=new li(d*2,d*2,y,y);v.rotateX(-Math.PI/2);const T=v.attributes.position,N=new Float32Array(T.count*3),L=new Float32Array(T.count*3),U=new Float32Array(T.count),W=new Float32Array(T.count*4),B=new Ce,z=new Ce,I=t.palette,Y=new Ce(t.rock[0]).multiplyScalar(.7),K=new Ce(t.rock[0]).multiplyScalar(1.08),ie=new Ce,me=new Ce(I.sand),qe=new Ce(I.grass),H=new Ce(I.grass2),J=new Ce(I.path),he=new Ce(I.deep),le=new Ce,ge=Kn(7);for(let k=0;k<T.count;k++){const F=T.getX(k),ee=T.getZ(k),pe=f(F,ee);T.setY(k,pe);const Se=M(F,ee),Le=(ge()-.5)*.04,Te=le.copy(qe).lerp(H,Mt.clamp((pe-1)*.6+ge()*.3,0,1)).offsetHSL(0,0,Le);L.set([Te.r,Te.g,Te.b],k*3),B.copy(he).lerp(me,Mt.smoothstep(pe,0,.3)).offsetHSL(0,0,Le),N.set([B.r,B.g,B.b],k*3);const te=.5+.5*Math.sin(F*1.7+ee*.9)*Math.cos(ee*1.3-F*.6);U[k]=1.9-Math.min(Se,6)+(te-.5)*(I.pathMix??.3)*2.4-Math.max(0,.3-pe)*2.5;let je=0;l&&S(F,ee)&&(z.copy(E),je=.85);const Xe=C(F,ee);if(Xe>.75){const pt=.5+.5*Math.sin(pe*7.5+Math.sin(F*.7+ee*.5)*1.5);ie.copy(Y).lerp(K,pt);const Rt=Mt.smoothstep(Xe,.75,1.3);z.copy(je?z:ie).lerp(ie,Rt),je=Math.max(je,Rt)}W.set([z.r,z.g,z.b,je],k*4)}v.setAttribute("aLow",new Ot(N,3)),v.setAttribute("aGrass",new Ot(L,3)),v.setAttribute("aPathF",new Ot(U,1)),v.setAttribute("aOver",new Ot(W,4)),v.computeVertexNormals();const De=new Wt({color:"#ffffff"});De.onBeforeCompile=k=>{k.vertexShader=k.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTW, vLow, vGrass;
varying vec4 vOver;
varying float vPathF;
attribute vec3 aLow, aGrass;
attribute vec4 aOver;
attribute float aPathF;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vTW = (modelMatrix * vec4(transformed, 1.0)).xyz;
vLow = aLow; vGrass = aGrass; vOver = aOver; vPathF = aPathF;`),k.uniforms.uPath={value:J},k.uniforms.uRipple={value:I.ripple??1},k.fragmentShader=k.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vTW, vLow, vGrass;
varying vec4 vOver;
varying float vPathF;
uniform vec3 uPath;
uniform float uRipple;`).replace("#include <color_fragment>",`#include <color_fragment>
        // Skarpe overganger: sand → gress på en støyete høydekontur, sti på en terskel i stifeltet
        float edgeN = sin(vTW.x * 2.1 + sin(vTW.z * 1.3) * 1.5) * sin(vTW.z * 1.7 - vTW.x * 0.6);
        vec3 ground = mix(vLow, vGrass, smoothstep(0.76, 0.80, vTW.y + edgeN * 0.06));
        ground = mix(ground, uPath, smoothstep(0.34, 0.40, vPathF));
        diffuseColor.rgb = mix(ground, vOver.rgb, vOver.a);
        // Våt sand: mørkere stripe langs vannkanten og under vann (G3)
        diffuseColor.rgb *= mix(1.0, 0.74, 1.0 - smoothstep(0.08, 0.42, vTW.y)); // R7: bredere våt-bånd (raw1)
        float sandMask = 1.0 - smoothstep(0.55, 0.85, vTW.y);
        // G5: sandkrusninger (raw5): forvridde, asymmetriske riller med smal lys kam og bredere skygge.
        // fwidth tar dem bort der de blir finere enn et par piksler (ellers moiré på avstand/mobil)
        {
          vec2 sq = vTW.xz;
          float warp = sin(sq.x * 0.45 + sin(sq.y * 0.6) * 1.4) * 1.6 + sin(sq.y * 0.9 - sq.x * 0.3) * 0.7;
          float ph = dot(sq, vec2(0.6, 0.8)) * 11.0 + warp * 2.0; // R5: finere riller
          float s = sin(ph);
          float crest = smoothstep(0.55, 0.97, s), trough = smoothstep(0.1, -0.85, s);
          float aa = 1.0 - smoothstep(0.5, 1.4, fwidth(ph));
          float wetR = 1.0 - smoothstep(0.08, 0.34, vTW.y);
          // Overalt der bakken er sand: lav sand under gress-konturen og sand-stiene (ikke på gress/klippe-overlegg)
          float sandy = max(1.0 - smoothstep(0.76, 0.80, vTW.y + edgeN * 0.06), smoothstep(0.34, 0.40, vPathF)) * (1.0 - vOver.a);
          // R5: −60 % kontrast, de brune stripene gjorde stiene skitne
          diffuseColor.rgb *= 1.0 + (0.04 * crest - 0.044 * trough) * uRipple * sandy * aa * mix(1.0, 0.45, wetR);
        }
        // Malt overflate: myk to-oktavs støy i lyshet og litt i fargetone
        vec2 q = vTW.xz;
        float n1 = sin(q.x * 0.9 + sin(q.y * 0.7) * 1.7) * sin(q.y * 1.1 + sin(q.x * 0.5) * 1.3);
        float n2 = sin(q.x * 3.7 + q.y * 2.3) * sin(q.y * 3.1 - q.x * 1.9);
        diffuseColor.rgb *= 0.96 + 0.04 * n1 + 0.02 * n2; // R4: roligere, mindre flekkete
        diffuseColor.g *= 1.0 + 0.025 * n1;`)};const Ee=new lt(v,De);Ee.receiveShadow=!0,i.add(Ee);const Fe=[],fe=(k,F)=>Math.hypot(k-s.x,F-s.z)>6;for(const[k,F]of r.entries()){let ee=k%2===0?1:-1,pe=0;for(let Se=.16;Se<.95&&pe<6;Se+=.055){const Le=F.curve.getPointAt(Se),Te=F.curve.getTangentAt(Se),te=new V(-Te.z,0,Te.x).normalize();for(const je of[ee,-ee]){const Xe=Le.x+te.x*3.6*je,pt=Le.z+te.z*3.6*je;if(!(M(Xe,pt)<2.7||!b(Xe,pt)||!fe(Xe,pt))&&!Fe.some(Rt=>Math.hypot(Rt.x-Xe,Rt.z-pt)<5.2)&&!(t.volcano&&Math.hypot(Xe-t.volcano.x,pt-t.volcano.z)<t.volcano.r+2)){Fe.push({x:Xe,z:pt,tower:null}),pe++;break}}ee=-ee}}const Me=ff(t.water.mid),O=new Ut({color:new Ce("#ffd27a").multiplyScalar(1.6),transparent:!0,opacity:.75,depthWrite:!1}),Je=new Ut({color:new Ce("#ffe9a8").multiplyScalar(2),transparent:!0,opacity:.85,depthWrite:!1}),be=hf(Kn(61+t.seed),1.3,1.45,.98,t.rock[0],t.rock[1],8,{dressed:!0});be.translate(0,-.1,0);const Be=new Ms(.55,.75,6);Be.rotateX(-Math.PI/2);const Ie=new Ir(1,0),nt=Fe.length,Z=new gn(be,Me,nt),P=new gn(Be,O,nt),w=new gn(Ie,Je,nt*3);Z.castShadow=Z.receiveShadow=!0;const X=new Xt;Fe.forEach((k,F)=>{k.y0=f(k.x,k.z),k.y=k.y0+.88,X.position.set(k.x,k.y0,k.z),X.rotation.set(0,F,0),X.scale.setScalar(1),X.updateMatrix(),Z.setMatrixAt(F,X.matrix)}),i.add(Z,P,w),Pa(Z,"rock");const ne=k=>{Fe.forEach((F,ee)=>{const pe=!F.tower;X.position.set(F.x,F.y0+.9,F.z),X.rotation.set(0,k*.5,0),X.scale.setScalar(pe?1:0),X.updateMatrix(),P.setMatrixAt(ee,X.matrix);for(let Se=0;Se<3;Se++){const Le=k*.4+Se*2.1+F.x,Te=(Le%1+1)%1;X.position.set(F.x+Math.cos(Le*2.3)*.55,F.y0+1+Te*1.1,F.z+Math.sin(Le*2.3)*.55),X.rotation.set(0,Le*3,0);const te=pe?.07*Math.sin(Te*Math.PI):0;X.scale.set(te,te*1.6,te),X.updateMatrix(),w.setMatrixAt(ee*3+Se,X.matrix)}}),P.instanceMatrix.needsUpdate=!0,w.instanceMatrix.needsUpdate=!0},se=new bt,re=f(s.x,s.z);se.position.set(s.x,re,s.z);const Ne=(()=>{const k=document.createElement("canvas");k.width=512,k.height=512;const F=k.getContext("2d");F.fillStyle="#f6f1e6",F.fillRect(0,0,512,512);const ee=Kn(5);for(let Se=0;Se<520;Se++){const Le=ee()*512,Te=ee()*512,te=2+ee()*9,je=ee()<.65;F.fillStyle=je?`rgba(${90+ee()*40},${120+ee()*40},${60+ee()*20},${.12+ee()*.18})`:`rgba(${130+ee()*30},${95+ee()*20},60,${.12+ee()*.15})`,F.beginPath(),F.ellipse(Le,Te,te,te*(.4+ee()*.6),ee()*3,0,Math.PI*2),F.fill()}for(let Se=0;Se<1200;Se++){F.strokeStyle=`rgba(190,170,140,${.04+ee()*.07})`,F.lineWidth=1;const Le=ee()*512,Te=ee()*512;F.beginPath(),F.moveTo(Le,Te),F.lineTo(Le+(ee()-.5)*8,Te+6+ee()*20),F.stroke()}for(let Se=0;Se<26;Se++){const Le=ee()*512;F.strokeStyle=ee()<.5?"rgba(255,255,255,0.35)":"rgba(150,130,100,0.18)",F.lineWidth=2+ee()*5,F.beginPath(),F.moveTo(Le,512),F.bezierCurveTo(Le+40,350,Le-30,160,Le+20+ee()*40,0),F.stroke()}F.strokeStyle="rgba(175,145,100,0.55)",F.lineWidth=4,F.beginPath(),F.moveTo(60,512),F.bezierCurveTo(90,330,110,180,150,0),F.stroke();const pe=new oi(k);return pe.colorSpace=En,pe.wrapS=Ui,pe})(),we=new Wt({map:Ne}),Ue=(()=>{const k=document.createElement("canvas");k.width=k.height=128;const F=k.getContext("2d");F.fillStyle="#e9dcbf",F.fillRect(0,0,128,128),F.strokeStyle="#a88d62",F.lineWidth=3,F.beginPath();for(let pe=0;pe<Math.PI*9;pe+=.1){const Se=4+pe*2;F.lineTo(64+Math.cos(pe)*Se,64+Math.sin(pe)*Se)}F.stroke();const ee=new oi(k);return ee.colorSpace=En,ee})(),ot=new Wt({color:"#e6d8b8"}),Ae=new Wt({map:Ue}),Ye=new Wt({color:"#3a3330",flatShading:!0}),at=new Wt({color:"#b8b2aa",flatShading:!0}),ut=(()=>{const k=document.createElement("canvas");k.width=256,k.height=128;const F=k.getContext("2d"),ee=F.createLinearGradient(0,0,0,128);ee.addColorStop(0,"#fff0b0"),ee.addColorStop(.45,"#ffb040"),ee.addColorStop(1,"#ff5a10"),F.fillStyle=ee,F.fillRect(0,0,256,128);const pe=Kn(11);for(let Le=0;Le<70;Le++){const Te=pe();F.fillStyle=Te<.5?`rgba(70,60,55,${.5+pe()*.4})`:`rgba(170,165,160,${.5+pe()*.4})`,F.beginPath(),F.ellipse(pe()*256,20+pe()*108,4+pe()*14,2+pe()*6,pe()*3,0,Math.PI*2),F.fill()}F.strokeStyle="rgba(60,30,20,0.6)",F.lineWidth=1.5;for(let Le=0;Le<40;Le++){const Te=pe()*256,te=pe()*128;F.beginPath(),F.moveTo(Te,te),F.lineTo(Te+(pe()-.5)*30,te+(pe()-.5)*20),F.stroke()}const Se=new oi(k);return Se.colorSpace=En,Se})(),Ze=new Ut({map:ut,color:new Ce("#ffffff").multiplyScalar(2.2)});function Et({len:k,rTop:F,rBot:ee,crutchH:pe,seg:Se,bend:Le,glowMat:Te,shadow:te}){const je=new bt,Xe=new lt(new Yt(ee*.98,ee*.95,pe,Se),[ot,ot,Ae]);Xe.position.y=pe/2,Xe.castShadow=te,je.add(Xe);const pt=new Yt(F,ee,k,Se,8,!0),Rt=pt.attributes.position,Dt=Kn(Math.round(k*100)),Fi=Array.from({length:6},()=>[Dt()*6.28,Dt()*3,.03+Dt()*.04]);for(let Nt=0;Nt<Rt.count;Nt++){const fi=Rt.getY(Nt),di=(fi+k/2)/k,Wr=Math.atan2(Rt.getZ(Nt),Rt.getX(Nt));let Js=1+Math.sin(Wr*7+fi*3)*.018;for(const[dp,pp,mp]of Fi)Js+=Math.cos(Wr-dp)*Math.sin(di*6+pp)*mp*.5;Rt.setXYZ(Nt,Rt.getX(Nt)*Js+Le*di*di*k,fi,Rt.getZ(Nt)*Js)}pt.translate(0,k/2,0),pt.computeVertexNormals();const Pt=new lt(pt,we);Pt.position.y=pe,Pt.castShadow=te,Pt.receiveShadow=!0,je.add(Pt);const Rn=Le*k,hi=pe+k,Pn=new Yt(F*1.02,F*1.04,F*.35,Se,1,!0),qn=Pn.attributes.position;for(let Nt=0;Nt<qn.count;Nt++)qn.getY(Nt)>0&&qn.setY(Nt,qn.getY(Nt)+Math.sin(Nt*2.7)*F*.12);Pn.computeVertexNormals();const Yn=new lt(Pn,Ye);Yn.position.set(Rn,hi+F*.12,0),je.add(Yn);const ns=new lt(new Qn(F*.97,Se,6,0,Math.PI*2,0,Math.PI/2),Te);ns.scale.y=.38,ns.position.set(Rn,hi+F*.2,0),je.add(ns);const ja=[];for(let Nt=0;Nt<5;Nt++){const fi=new lt(new Ha(F*(.2+Nt%3*.07),0),at),di=Nt*1.25+.3;fi.position.set(Rn+Math.cos(di)*F*.55,hi+F*.33,Math.sin(di)*F*.55),fi.scale.y=.4,je.add(fi),ja.push(fi)}const Ka=new Jn(F*.28,F*1.1,6,4),Zs=Ka.attributes.position;for(let Nt=0;Nt<Zs.count;Nt++){const fi=Zs.getY(Nt),di=(fi/(F*1.1)+.5)*2.2,Wr=Zs.getX(Nt),Js=Zs.getZ(Nt);Zs.setX(Nt,Wr*Math.cos(di)-Js*Math.sin(di)+(fi+F*.55)*.25),Zs.setZ(Nt,Wr*Math.sin(di)+Js*Math.cos(di))}Ka.computeVertexNormals();const Hr=new lt(Ka,Ye);return Hr.position.set(Rn+F*.1,hi+F*.7,F*.1),Hr.rotation.z=-.35,je.add(Hr),je.userData={glow:ns,top:new V(Rn,hi,0),charRing:Yn,ashFlakes:ja,body:Pt,twist:Hr,len:k,rTop:F,rBot:ee,bend:Le,crutchH:pe,base:Pt.geometry.attributes.position.array.slice(),topParts:[Yn,ns,Hr,...ja].map(Nt=>[Nt,Nt.position.clone(),Nt.scale.clone()])},je}const ft=new Ce(t.rock[0]).multiplyScalar(.86),St=new lt(hf(Kn(67+t.seed),3.3,3.9,1,ft,t.rock[1],16),ff(t.water.mid,.2));St.position.y=-.2,St.castShadow=St.receiveShadow=!0,se.add(St),Vr(St,"rock");const $=7.4,ke=1.4,ue=Et({len:$,rTop:2.35,rBot:.95,crutchH:ke,seg:22,bend:.06,glowMat:Ze,shadow:!0});ue.position.y=.75,ue.rotation.set(.06,0,-.03);const ye=ue.userData.charRing;se.add(ue);const Ve=new Xt;Ve.position.y=ke+$+1.2,ue.add(Ve);const He=new _o("#ff8a3a",40,34,1.5);He.position.y=ke+$+1.4,ue.add(He);const dt=new Jn(2.2,16,16,6,!0);dt.translate(0,-8,0);{const k=dt.attributes.position,F=new Float32Array(k.count*3);for(let ee=0;ee<k.count;ee++){const pe=Math.pow(1-Math.min(1,-k.getY(ee)/16),1.6);F.set([pe,pe,pe],ee*3)}dt.setAttribute("color",new Ot(F,3))}dt.rotateZ(Math.PI/2);const Gt=new Ut({color:"#ffc890",vertexColors:!0,transparent:!0,opacity:.05,blending:ai,depthWrite:!1,side:cn,fog:!1}),$t=new bt;$t.position.y=ke+$+.8;const At=new lt(dt,Gt),fn=At.clone();fn.rotation.y=Math.PI,$t.add(At,fn),ue.add($t);const Cn=new _o("#ffa050",12,10,1.4);Cn.position.set(0,1.3,4.6),se.add(Cn),i.add(se),se.updateMatrixWorld(!0);const Xn=new V;Ve.getWorldPosition(Xn);const Zt=ue.userData,ci=[Ve,He,$t].map(k=>[k,k.position.y]),ui=k=>Zt.rBot+(Zt.rTop-Zt.rBot)*k;function ts(k){const F=.15+.85*Math.max(0,Math.min(1,k)),ee=Zt.body.geometry.attributes.position,pe=Zt.base;for(let te=0;te<ee.count;te++){const je=pe[te*3+1],Xe=je/Zt.len,pt=Xe*F,Rt=ui(pt)/ui(Xe);ee.setXYZ(te,(pe[te*3]-Zt.bend*Xe*Xe*Zt.len)*Rt+Zt.bend*pt*pt*Zt.len,pt*Zt.len,pe[te*3+2]*Rt)}ee.needsUpdate=!0,Zt.body.geometry.computeVertexNormals(),Zt.body.geometry.computeBoundingSphere();const Se=(F-1)*Zt.len,Le=ui(F)/Zt.rTop,Te=Zt.bend*Zt.len*(F*F-1);for(const[te,je,Xe]of Zt.topParts)te.position.set(Zt.top.x+(je.x-Zt.top.x)*Le+Te,je.y+Se,je.z*Le),te.scale.set(Xe.x*Le,Xe.y*Le,Xe.z*Le);for(const[te,je]of ci)te.position.y=je+Se;se.updateMatrixWorld(!0),Ve.getWorldPosition(Xn)}const G={tip:Xn,pos:new V(s.x,re,s.z),lights:zr,flamePos(){return Xn.clone()},setLights(k){this.lights=k;const F=k/zr;ts(F),this.glow=F,Cn.intensity=3+9*F,Gt.opacity=.01+.04*F,ye.scale.y*=1+(1-F)*2.5}},ve=Kn(42),ae=[];for(let k=0;k<3e3&&ae.length<(e.mobile?70:104);k++){const F=(ve()-.5)*102,ee=(ve()-.5)*102,pe=f(F,ee);if(pe<.75||M(F,ee)<3.2||!fe(F,ee)||Fe.some(te=>Math.hypot(te.x-F,te.z-ee)<3.2)||ae.some(te=>Math.hypot(te.x-F,te.z-ee)<2.4)||t.volcano&&Math.hypot(F-t.volcano.x,ee-t.volcano.z)<t.volcano.r)continue;const Se=pe<1.45?t.trees.beach:t.trees.inland;let Le=ve(),Te="bush";for(const[te,je]of Object.entries(Se)){if(Le<je){Te=te;break}Le-=je}Te==="palm"&&(ve()<.5||M(F,ee)<4.6||Fe.some(te=>Math.hypot(te.x-F,te.z-ee)<4.8))||ae.push({x:F,z:ee,y:pe,s:(Te==="bush"?.8:.75)+ve()*.45,phase:ve()*6.28,kind:Te})}if(t.trees.inland.bush){const k=Kn(303+t.seed),F=ae.filter(ee=>ee.kind!=="bush"&&ee.y>=1);for(const ee of F){if(k()>(e.mobile?.6:.75))continue;const pe=1+Math.floor(k()*3);for(let Se=0;Se<pe;Se++){const Le=k()*6.28,Te=1.3+k()*1,te=ee.x+Math.cos(Le)*Te,je=ee.z+Math.sin(Le)*Te,Xe=f(te,je);Xe<1||M(te,je)<3||!fe(te,je)||Fe.some(pt=>Math.hypot(pt.x-te,pt.z-je)<3)||ae.some(pt=>pt!==ee&&Math.hypot(pt.x-te,pt.z-je)<1.3)||ae.push({x:te,z:je,y:Xe,s:.55+k()*.35,phase:k()*6.28,kind:"bush"})}}}const We=f_(i,ae,e,t),Qe=new Xt,Pe=[];for(let k=0;k<1200&&Pe.length<(e.mobile?40:56);k++){const F=ve()*Math.PI*2,ee=n(F)-3+ve()*5.5,pe=Math.cos(F)*ee,Se=Math.sin(F)*ee;M(pe,Se)<3.4||f(pe,Se)<-1.2||Pe.some(Le=>Math.hypot(Le.x-pe,Le.z-Se)<2.2)||Pe.push({x:pe,z:Se,s:.6+ve()*1.2,r:ve()*6})}for(const k of t.plateaus||[]){const F=Math.round(k.r*2*Math.PI/2.3);for(let ee=0;ee<F;ee++){const pe=ee/F*Math.PI*2+ve()*.2,Se=k.r+Math.sin(pe*5+k.x)*.8+Math.sin(pe*11)*.3-.2,Le=k.x+Math.cos(pe)*Se,Te=k.z+Math.sin(pe)*Se;t.waterfall&&Math.hypot(Le-t.waterfall.lip[0],Te-t.waterfall.lip[1])<2.2||M(Le,Te)<2.6||Pe.push({x:Le,z:Te,s:1.3+ve()*.9,r:ve()*6,cliff:!0})}}[0,1,2].map(k=>G_(Kn(31+k*7+t.seed),t.rock[0],t.rock[1],k)).map((k,F)=>{const ee=Pe.filter((Se,Le)=>Le%3===F),pe=new gn(k,Me,Math.max(1,ee.length));return pe.count=ee.length,ee.forEach((Se,Le)=>{Qe.position.set(Se.x,f(Se.x,Se.z)-.2*Se.s,Se.z),Qe.rotation.set(0,Se.r*2,0),Qe.scale.set(Se.s*1.1,Se.s*.9,Se.s),Qe.updateMatrix(),pe.setMatrixAt(Le,Qe.matrix)}),pe.castShadow=pe.receiveShadow=!0,i.add(pe),Pa(pe,"rock"),pe});const st=x_(i,{heightAt:f,pathDist:M,plinths:Fe,paths:r,lighthouse:G,landDist:u},e,Kn(99+t.seed),n,t),gt=R_(i,{heightAt:f,landDist:u,pathDist:M,paths:r,lighthouse:G,islandEdge:n},e,t),R=[...ae.map(k=>[k.x,k.z,1.3*k.s]),...Pe.map(k=>[k.x,k.z,k.s*1.6]),...Fe.map(k=>[k.x,k.z,1.9])],j=(k,F)=>{let ee=1;for(const[pe,Se,Le]of R){const Te=(pe-k)**2+(Se-F)**2;Te<Le*Le&&(ee=Math.min(ee,.55+.45*Math.sqrt(Te)/Le))}return ee},oe=M_(i,{heightAt:f,pathDist:M,plinths:Fe,lighthouse:G,extrasBlock:gt.blocks,shadeAt:j},e,t,Kn(7+t.seed)),ce={palm:.9,round:1.45,bush:1,pine:1.35,dead:.6};L_(i,[...ae.map(k=>({x:k.x,y:k.y,z:k.z,r:(ce[k.kind]??1)*k.s})),...Pe.map(k=>({x:k.x,y:f(k.x,k.z),z:k.z,r:k.s*(k.cliff?1.7:1.55)})).filter(k=>k.y>.05),...Fe.map(k=>({x:k.x,y:k.y0,z:k.z,r:1.95})),{x:s.x,y:re,z:s.z,r:4.8}]);const Q=Float32Array.from(g),ze=[...Pe.map(k=>({x:k.x,z:k.z,r:k.s*.85})),...st.obstacles];for(const k of ze){const F=k.r+1,ee=d*2/p,pe=Math.floor((k.x-F+d)/ee),Se=Math.ceil((k.x+F+d)/ee),Le=Math.floor((k.z-F+d)/ee),Te=Math.ceil((k.z+F+d)/ee);for(let te=Math.max(0,Le);te<=Math.min(p,Te);te++)for(let je=Math.max(0,pe);je<=Math.min(p,Se);je++){const Xe=-d+je*ee,pt=-d+te*ee,Rt=Math.max(0,Math.hypot(Xe-k.x,pt-k.z)-k.r);if(Rt>.9)continue;const Dt=te*(p+1)+je,Fi=.06-Rt*.35,Pt=1-Rt/.9;Q[Dt]=Math.max(Q[Dt],Q[Dt]+(Fi-Q[Dt])*Pt*Pt)}}if(t.waterfall&&t.waterfall._lvl!==void 0){const k=t.waterfall;af(i,{heightTex:lf(Q,p+1),ext:d,grid:p,quality:e,sunDir:new V(24,17,4),colors:t.water,level:k._lvl,size:9,maxDepth:.8,center:[(k.pool[0]+k.lip[0])/2,(k.pool[1]+k.lip[1])/2]})}const Ke=af(i,{heightTex:lf(Q,p+1),ext:d,grid:p,quality:e,sunDir:new V(24,17,4),colors:t.water}),it=[{x:s.x,z:s.z,r:3.5},...Fe.map(k=>({x:k.x,z:k.z,r:1.4})),...We.colliders,...Pe.filter(k=>f(k.x,k.z)>-.45).map(k=>({x:k.x,z:k.z,r:k.s*.85})),...st.colliders,...gt.colliders];return{def:t,paths:r,plinths:Fe,lighthouse:G,heightAt:f,pathDist:M,slopeAt:C,isLand:b,isIce:S,landDist:u,isWalkable:(k,F)=>A(k,F)&&!gt.blocks(k,F),colliders:it,update:k=>{Ke.update(k),st.update(k),gt.update(k),oe.update(k);const F=G.glow??1,ee=.75+.25*Math.sin(k*1.3)+.1*Math.sin(k*7.1);Ze.color.setRGB(1,.85,.75).multiplyScalar(F>0?(.7+1.5*F)*ee:.12),He.intensity=(8+40*F)*ee,$t.rotation.y=k*.6,We.update(k),ne(k)},terrain:Ee,extras:gt,grass:oe,cullFade:We.cullFade,treeSpots:ae}}const co={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ks{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const H_=new pu(-1,1,1,-1,0,1);class W_ extends Ft{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}}const X_=new W_;class Xa{constructor(e){this._mesh=new lt(X_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,H_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Od extends Ks{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof sn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Mi.clone(e.uniforms),this.material=new sn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Xa(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class df extends Ks{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class q_ extends Ks{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Y_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Re);this._width=n.width,this._height=n.height,t=new Wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ri}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Od(co),this.copyPass.material.blending=wn,this.clock=new bd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}df!==void 0&&(o instanceof df?n=!0:o instanceof q_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class $_ extends Ks{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ce}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const la={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Re},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new zt},cameraProjectionMatrixInverse:{value:new zt},cameraWorldMatrix:{value:new zt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new V(-1,-1,-1)},sceneBoxMax:{value:new V(1,1,1)}},vertexShader:`

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
		}`},ca={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Ul={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function j_(i=5){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=K_(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){const a=t[o],l=2*Math.PI*a/n,c=new V(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}const r=new Ba(s,e,e);return r.wrapS=Ui,r.wrapT=Ui,r.needsUpdate=!0,r}function K_(i){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0);let s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}const ua={defines:{SAMPLES:16,SAMPLE_VECTORS:Bd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Re},cameraProjectionMatrixInverse:{value:new zt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Bd(i,e,t){const n=Z_(i,e,t);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function Z_(i,e,t){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new V(Math.cos(r),Math.sin(r),o))}return n}class J_{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,d=l-h,p=c-h,g=e-d,_=t-p;let m,f;g>_?(m=1,f=0):(m=0,f=1);const M=g-m+u,b=_-f+u,x=g-1+2*u,C=_-1+2*u,S=l&255,E=c&255,A=this.perm[S+this.perm[E]]%12,y=this.perm[S+m+this.perm[E+f]]%12,v=this.perm[S+1+this.perm[E+1]]%12;let T=.5-g*g-_*_;T<0?n=0:(T*=T,n=T*T*this.dot(this.grad3[A],g,_));let N=.5-M*M-b*b;N<0?s=0:(N*=N,s=N*N*this.dot(this.grad3[y],M,b));let L=.5-x*x-C*C;return L<0?r=0:(L*=L,r=L*L*this.dot(this.grad3[v],x,C)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a;const c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),d=Math.floor(n+c),p=1/6,g=(u+h+d)*p,_=u-g,m=h-g,f=d-g,M=e-_,b=t-m,x=n-f;let C,S,E,A,y,v;M>=b?b>=x?(C=1,S=0,E=0,A=1,y=1,v=0):M>=x?(C=1,S=0,E=0,A=1,y=0,v=1):(C=0,S=0,E=1,A=1,y=0,v=1):b<x?(C=0,S=0,E=1,A=0,y=1,v=1):M<x?(C=0,S=1,E=0,A=0,y=1,v=1):(C=0,S=1,E=0,A=1,y=1,v=0);const T=M-C+p,N=b-S+p,L=x-E+p,U=M-A+2*p,W=b-y+2*p,B=x-v+2*p,z=M-1+3*p,I=b-1+3*p,Y=x-1+3*p,K=u&255,ie=h&255,me=d&255,qe=this.perm[K+this.perm[ie+this.perm[me]]]%12,H=this.perm[K+C+this.perm[ie+S+this.perm[me+E]]]%12,J=this.perm[K+A+this.perm[ie+y+this.perm[me+v]]]%12,he=this.perm[K+1+this.perm[ie+1+this.perm[me+1]]]%12;let le=.6-M*M-b*b-x*x;le<0?s=0:(le*=le,s=le*le*this.dot3(this.grad3[qe],M,b,x));let ge=.6-T*T-N*N-L*L;ge<0?r=0:(ge*=ge,r=ge*ge*this.dot3(this.grad3[H],T,N,L));let De=.6-U*U-W*W-B*B;De<0?o=0:(De*=De,o=De*De*this.dot3(this.grad3[J],U,W,B));let Ee=.6-z*z-I*I-Y*Y;return Ee<0?a=0:(Ee*=Ee,a=Ee*Ee*this.dot3(this.grad3[he],z,I,Y)),32*(s+r+o+a)}noise4d(e,t,n,s){const r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,h,d,p,g;const _=(e+t+n+s)*l,m=Math.floor(e+_),f=Math.floor(t+_),M=Math.floor(n+_),b=Math.floor(s+_),x=(m+f+M+b)*c,C=m-x,S=f-x,E=M-x,A=b-x,y=e-C,v=t-S,T=n-E,N=s-A,L=y>v?32:0,U=y>T?16:0,W=v>T?8:0,B=y>N?4:0,z=v>N?2:0,I=T>N?1:0,Y=L+U+W+B+z+I,K=o[Y][0]>=3?1:0,ie=o[Y][1]>=3?1:0,me=o[Y][2]>=3?1:0,qe=o[Y][3]>=3?1:0,H=o[Y][0]>=2?1:0,J=o[Y][1]>=2?1:0,he=o[Y][2]>=2?1:0,le=o[Y][3]>=2?1:0,ge=o[Y][0]>=1?1:0,De=o[Y][1]>=1?1:0,Ee=o[Y][2]>=1?1:0,Fe=o[Y][3]>=1?1:0,fe=y-K+c,Me=v-ie+c,O=T-me+c,Je=N-qe+c,be=y-H+2*c,Be=v-J+2*c,Ie=T-he+2*c,nt=N-le+2*c,Z=y-ge+3*c,P=v-De+3*c,w=T-Ee+3*c,X=N-Fe+3*c,ne=y-1+4*c,se=v-1+4*c,re=T-1+4*c,Ne=N-1+4*c,we=m&255,Ue=f&255,ot=M&255,Ae=b&255,Ye=a[we+a[Ue+a[ot+a[Ae]]]]%32,at=a[we+K+a[Ue+ie+a[ot+me+a[Ae+qe]]]]%32,ut=a[we+H+a[Ue+J+a[ot+he+a[Ae+le]]]]%32,Ze=a[we+ge+a[Ue+De+a[ot+Ee+a[Ae+Fe]]]]%32,Et=a[we+1+a[Ue+1+a[ot+1+a[Ae+1]]]]%32;let ft=.6-y*y-v*v-T*T-N*N;ft<0?u=0:(ft*=ft,u=ft*ft*this.dot4(r[Ye],y,v,T,N));let St=.6-fe*fe-Me*Me-O*O-Je*Je;St<0?h=0:(St*=St,h=St*St*this.dot4(r[at],fe,Me,O,Je));let $=.6-be*be-Be*Be-Ie*Ie-nt*nt;$<0?d=0:($*=$,d=$*$*this.dot4(r[ut],be,Be,Ie,nt));let ke=.6-Z*Z-P*P-w*w-X*X;ke<0?p=0:(ke*=ke,p=ke*ke*this.dot4(r[Ze],Z,P,w,X));let ue=.6-ne*ne-se*se-re*re-Ne*Ne;return ue<0?g=0:(ue*=ue,g=ue*ue*this.dot4(r[Et],ne,se,re,Ne)),27*(u+h+d+p+g)}}class Ri extends Ks{constructor(e,t,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=j_(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Wn(this.width,this.height,{type:ri}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new sn({defines:Object.assign({},la.defines),uniforms:Mi.clone(la.uniforms),vertexShader:la.vertexShader,fragmentShader:la.fragmentShader,blending:wn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new e_,this.normalMaterial.blending=wn,this.pdMaterial=new sn({defines:Object.assign({},ua.defines),uniforms:Mi.clone(ua.uniforms),vertexShader:ua.vertexShader,fragmentShader:ua.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new sn({defines:Object.assign({},ca.defines),uniforms:Mi.clone(ca.uniforms),vertexShader:ca.vertexShader,fragmentShader:ca.fragmentShader,blending:wn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new sn({uniforms:Mi.clone(co.uniforms),vertexShader:co.vertexShader,fragmentShader:co.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Hl,blendDst:eo,blendEquation:xi,blendSrcAlpha:Vl,blendDstAlpha:eo,blendEquationAlpha:xi}),this.blendMaterial=new sn({uniforms:Mi.clone(Ul.uniforms),vertexShader:Ul.vertexShader,fragmentShader:Ul.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Nf,blendSrc:Hl,blendDst:eo,blendEquation:xi,blendSrcAlpha:Vl,blendDstAlpha:eo,blendEquationAlpha:xi}),this.fsQuad=new Xa(null),this.originalClearColor=new Ce,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new gu,this.depthTexture.format=Gs,this.depthTexture.type=Bs,this.normalRenderTarget=new Wn(this.width,this.height,{minFilter:Tn,magFilter:Tn,type:ri,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Bd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Ri.OUTPUT.Off:break;case Ri.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=wn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Ri.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=wn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Ri.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=wn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Ri.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Ri.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=wn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Ri.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=wn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){const t=new J_,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}const r=new Ba(s,e,e,si,zi);return r.wrapS=Ui,r.wrapT=Ui,r.needsUpdate=!0,r}}Ri.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Q_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Nr extends Ks{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Re(e.x,e.y):new Re(256,256),this.clearColor=new Ce(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Wn(r,o,{type:ri}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Wn(r,o,{type:ri});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new Wn(r,o,{type:ri});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=Q_;this.highPassUniforms=Mi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new sn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Re(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=co;this.copyUniforms=Mi.clone(u.uniforms),this.blendMaterial=new sn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ai,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ce,this.oldClearAlpha=1,this.basic=new Ut,this.fsQuad=new Xa(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Re(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Nr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Nr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new sn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Re(.5,.5)},direction:{value:new Re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}}Nr.BlurDirectionX=new Re(1,0);Nr.BlurDirectionY=new Re(0,1);const eM={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class tM extends Ks{constructor(){super();const e=eM;this.uniforms=Mi.clone(e.uniforms),this.material=new Q1({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Xa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},It.getTransfer(this._outputColorSpace)===Bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===kf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ff?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Of?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===nu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Bf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Gf&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const nM={name:"WarmGrade",uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uTint:{value:new V(1,1,1)},uLift:{value:new V},uSat:{value:1.08}},vertexShader:`
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
    }`},iM=new URLSearchParams(location.search).get("ao")==="1";function sM(i,e,t,n={}){const s=new Y_(i,new Wn(1,1,{type:ri})),r=new $_(e,t),o=new Ri(e,t,1,1,void 0,{radius:.8,distanceExponent:1.3,thickness:1.4,scale:1.2,samples:12});o.blendIntensity=1;const a=new Nr(new Re(256,256),.6,.55,1),l=new Od(nM);n.tint&&l.uniforms.uTint.value.set(...n.tint),n.lift&&l.uniforms.uLift.value.set(...n.lift),n.sat&&(l.uniforms.uSat.value=n.sat),l.uniforms.uVignette.value=n.vignette??.25;const c=new tM;for(const g of[r,o,a,l,c])s.addPass(g);let u="high",h=1,d=1;const p={composer:s,get level(){return u},setLevel(g){u=g,o.enabled=g==="high"&&iM,a.strength=g==="high"?.6:.5;const _=g==="high"?4:0;for(const m of[s.renderTarget1,s.renderTarget2])m.samples!==_&&(m.samples=_,m.dispose());p.setSize(h,d)},setSize(g,_){h=g,d=_;const m=i.getPixelRatio();s.setPixelRatio(m),s.setSize(g,_);const f=u==="high"?2:4;a.resolution.set(g*m/f,_*m/f),a.setSize(g*m/f,_*m/f)},render(g){s.render(g)}};return p}function rM(i,e,t,n,s,r=null){const{heightAt:o}=e,a=t.mobile?.5:1,l=new Set(n.life),c=new Xt,u=new Ce,h=[],d=()=>{for(let g=0;g<50;g++){const _=(Math.random()-.5)*80,m=(Math.random()-.5)*80,f=o(_,m);if(f>.8)return{x:_,z:m,h:f}}return{x:0,z:0,h:1}};if(l.has("butterflies")){const g=Math.round(26*a),_=new Vs(.16,6,0,Math.PI);_.scale(1,1.3,1);const f=[-1,1].map(()=>new Wt({color:"#ffffff",side:cn})).map(x=>{const C=new gn(_,x,g);return i.add(C),C}),M=Array.from({length:g},(x,C)=>({...d(),a:Math.random()*6,sp:.6+Math.random()*.6,ph:Math.random()*6,home:null})),b=["#ffd84a","#ff9ad0","#9ad8ff","#ffffff","#ffa040"];M.forEach((x,C)=>{x.home={x:x.x,z:x.z},f.forEach(S=>S.setColorAt(C,u.set(b[C%b.length])))}),f.forEach(x=>x.instanceColor.needsUpdate=!0),h.push((x,C)=>{M.forEach((S,E)=>{S.a+=Math.sin(C*.7+S.ph)*1.6*x,S.x+=Math.cos(S.a)*S.sp*x,S.z+=Math.sin(S.a)*S.sp*x,Math.hypot(S.x-S.home.x,S.z-S.home.z)>5&&(S.a=Math.atan2(S.home.z-S.z,S.home.x-S.x));const A=o(S.x,S.z)+.6+Math.sin(C*2+S.ph)*.25,y=Math.sin(C*18+S.ph)*1.1;f.forEach((v,T)=>{c.position.set(S.x,A,S.z),c.rotation.set(0,-S.a+Math.PI/2,0),c.rotateZ((T?1:-1)*(.3+y*.5)),c.rotateX(-Math.PI/2),c.scale.set(T?1:-1,1,1),c.updateMatrix(),v.setMatrixAt(E,c.matrix)})}),f.forEach(S=>S.instanceMatrix.needsUpdate=!0)})}if(l.has("birds")){const _=new Ft;_.setAttribute("position",new ht([-.7,.12,.1,0,0,-.15,0,0,.15,0,0,-.15,.7,.12,.1,0,0,.15],3)),_.computeVertexNormals();const m=new gn(_,new Wt({color:"#f4f4f0",side:cn}),7);m.castShadow=!0,i.add(m);const f=Array.from({length:7},(M,b)=>({cx:(Math.random()-.5)*50,cz:(Math.random()-.5)*50,r:8+Math.random()*10,y:9+Math.random()*4,sp:.15+Math.random()*.1,ph:b}));h.push((M,b)=>{f.forEach((x,C)=>{const S=b*x.sp+x.ph;c.position.set(x.cx+Math.cos(S)*x.r,x.y+Math.sin(b*.7+C)*.4,x.cz+Math.sin(S)*x.r),c.rotation.set(0,-S,Math.sin(b*.5+C)*.15);const E=1+Math.sin(b*6+C)*.35*(Math.sin(b*.4+C)>.3?1:.1),A=r?Mt.smoothstep(c.position.distanceTo(r.position),3,7):1;c.scale.set(1.4*A,E*1.4*A,1.4*A),c.updateMatrix(),m.setMatrixAt(C,c.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(l.has("leaves")){const g=Math.round(60*a),_=new li(.16,.1),m=new gn(_,new Wt({color:"#ffffff",side:cn}),g);i.add(m);const f=Array.from({length:g},(M,b)=>({...d(),ph:Math.random()*6,sp:1+Math.random()*1.5}));f.forEach((M,b)=>m.setColorAt(b,u.set(["#8fbf4a","#c8b04a","#6a9a3a","#d89a3a"][b%4]))),m.instanceColor.needsUpdate=!0,h.push((M,b)=>{f.forEach((x,C)=>{x.x+=x.sp*M,x.z+=Math.sin(b*.8+x.ph)*.6*M,x.x>45&&Object.assign(x,d(),{x:-45});const S=Math.max(o(x.x,x.z),.1)+.3+Math.abs(Math.sin(b*1.3+x.ph))*.9;c.position.set(x.x,S,x.z),c.rotation.set(b*3+x.ph,b*2+x.ph,b*1.5),c.scale.setScalar(1),c.updateMatrix(),m.setMatrixAt(C,c.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(l.has("fireflies")&&s==="skumring"){const g=Math.round(120*a),_=new Float32Array(g*3),m=new Float32Array(g*3),f=Array.from({length:g},()=>({...d(),ph:Math.random()*6})),M=new Ft;M.setAttribute("position",new Ot(_,3)),M.setAttribute("color",new Ot(m,3));const b=document.createElement("canvas");b.width=b.height=32;const x=b.getContext("2d"),C=x.createRadialGradient(16,16,0,16,16,16);C.addColorStop(0,"rgba(255,255,255,1)"),C.addColorStop(1,"rgba(255,255,255,0)"),x.fillStyle=C,x.fillRect(0,0,32,32);const S=new Ga(M,new wo({size:.35,map:new oi(b),vertexColors:!0,transparent:!0,blending:ai,depthWrite:!1}));S.frustumCulled=!1,i.add(S),h.push((E,A)=>{f.forEach((y,v)=>{_[v*3]=y.x+Math.sin(A*.4+y.ph)*1.2,_[v*3+1]=y.h+.5+Math.sin(A*.9+y.ph*2)*.4,_[v*3+2]=y.z+Math.cos(A*.35+y.ph)*1.2;const T=Math.max(0,Math.sin(A*1.7+y.ph*3))**3*2.5;m[v*3]=1*T,m[v*3+1]=.9*T,m[v*3+2]=.35*T}),M.attributes.position.needsUpdate=!0,M.attributes.color.needsUpdate=!0})}let p=0;return{update(g){const _=Math.min(.05,Math.max(0,g-p));p=g;for(const m of h)m(_,g)}}}function oM(i,{cell:e=.75,ext:t=68}={}){const n=Math.ceil(t*2/e)+1,s=new Float64Array(n*n),r=new Float32Array(n*n),o=new Float32Array(n*n),a=i.lighthouse.pos,l=(E,A)=>[Math.round((E+t)/e),Math.round((A+t)/e)],c=(E,A)=>[-t+E*e,-t+A*e];let u=()=>!1;function h(){for(let E=0;E<n;E++)for(let A=0;A<n;A++){const[y,v]=c(A,E),T=i.heightAt(y,v),N=E*n+A,L=Math.hypot(y-a.x,v-a.z);let U=1.8;T<-.5||i.slopeAt(y,v)>1.1||i.extras.blocks(y,v)||u(y,v)||L<3.2?U=1/0:i.pathDist(y,v)<1.6?U=.2:T<.05&&(U=2.6),r[N]=U}}function d(){s.fill(1/0),o.fill(0);const E=[],A=(T,N)=>{E.push([T,N]);let L=E.length-1;for(;L>0;){const U=L-1>>1;if(E[U][0]<=E[L][0])break;[E[U],E[L]]=[E[L],E[U]],L=U}},y=()=>{const T=E[0],N=E.pop();if(E.length){E[0]=N;let L=0;for(;;){const U=2*L+1,W=U+1;let B=L;if(U<E.length&&E[U][0]<E[B][0]&&(B=U),W<E.length&&E[W][0]<E[B][0]&&(B=W),B===L)break;[E[B],E[L]]=[E[L],E[B]],L=B}}return T};for(let T=0;T<n;T++)for(let N=0;N<n;N++){const[L,U]=c(N,T),W=Math.hypot(L-a.x,U-a.z);W>=3.2&&W<4.2&&r[T*n+N]<1/0&&(s[T*n+N]=0,A(0,T*n+N))}const v=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;E.length;){const[T,N]=y();if(T>s[N])continue;const L=N%n,U=N/n|0;for(const[W,B,z]of v){const I=L+W,Y=U+B;if(I<0||Y<0||I>=n||Y>=n)continue;const K=Y*n+I,ie=r[K];if(ie===1/0)continue;const me=T+z*e*(ie+r[N])*.5;me<s[K]&&(s[K]=me,o[K]=o[N]+z*e,A(me,K))}}}const p=(E,A)=>{const[y,v]=l(E,A);return y<0||v<0||y>=n||v>=n?1/0:s[v*n+y]};function g(E,A){const[y,v]=l(E,A);let T=p(E,A),N=0,L=0;for(let W=-1;W<=1;W++)for(let B=-1;B<=1;B++){if(!B&&!W)continue;const z=y+B,I=v+W;if(z<0||I<0||z>=n||I>=n)continue;const Y=s[I*n+z];Y<T&&(T=Y,N=B,L=W)}const U=Math.hypot(N,L)||1;return[N/U,L/U,T]}const _=(E,A)=>{const[y,v]=l(E,A);return y<0||v<0||y>=n||v>=n?-1:v*n+y},m=(E,A)=>{const y=_(E,A);return y<0||s[y]===1/0?0:o[y]};function f(){const E=[];for(const A of i.paths){const y=A.samples.find(v=>i.heightAt(v.x,v.z)>-.4&&m(v.x,v.z)>0);y&&E.push([y.x,y.z])}return E}function M(E,A=22,{near:y=8,minFrac:v=.6}={}){const T=f(),N=Math.max(0,...T.map(([B,z])=>m(B,z))),L=(B,z)=>{const I=i.heightAt(B,z);return I>-.4&&I<.15&&[[4,0],[-4,0],[0,4],[0,-4],[3,3],[-3,3],[3,-3],[-3,-3]].some(([Y,K])=>i.heightAt(B+Y,z+K)<-.9)},U=T.map(([B,z])=>{const I=[],Y=[],K=Math.ceil(y/e),[ie,me]=l(B,z);for(let H=-K;H<=K;H++)for(let J=-K;J<=K;J++){const[he,le]=c(ie+J,me+H);Math.hypot(he-B,le-z)>y||m(he,le)<v*N||(L(he,le)?I.push([he,le]):i.heightAt(he,le)>.3&&i.slopeAt(he,le)<.6&&Y.push([he,le]))}return(I.length?I:Y).sort(()=>Math.random()-.5)}).filter(B=>B.length).sort(()=>Math.random()-.5),W=[];for(let B=0;W.length<E&&B<4;B++){for(const z of U){const I=z.find(Y=>W.every(K=>Math.hypot(K[0]-Y[0],K[1]-Y[1])>A));if(I&&W.push(I),W.length>=E)break}A=Math.min(A,6)}return W}let b=null;function x(E,A){if(!b){b=new Float32Array(n*n);for(let B=0;B<n;B++)for(let z=0;z<n;z++){const[I,Y]=c(z,B);b[B*n+z]=i.isWalkable(I,Y)?i.heightAt(I,Y)<.05?1.6:1:1/0}}const y=new Float64Array(n*n).fill(1/0),v=[],T=(B,z)=>{v.push([B,z]);let I=v.length-1;for(;I>0;){const Y=I-1>>1;if(v[Y][0]<=v[I][0])break;[v[Y],v[I]]=[v[I],v[Y]],I=Y}},N=()=>{const B=v[0],z=v.pop();if(v.length){v[0]=z;let I=0;for(;;){const Y=2*I+1,K=Y+1;let ie=I;if(Y<v.length&&v[Y][0]<v[ie][0]&&(ie=Y),K<v.length&&v[K][0]<v[ie][0]&&(ie=K),ie===I)break;[v[ie],v[I]]=[v[I],v[ie]],I=ie}}return B},L=_(E,A);if(L<0)return null;y[L]=0,T(0,L);const U=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;v.length;){const[B,z]=N();if(B>y[z])continue;const I=z%n,Y=z/n|0;for(const[K,ie,me]of U){const qe=I+K,H=Y+ie;if(qe<0||H<0||qe>=n||H>=n)continue;const J=H*n+qe,he=b[J];if(he===1/0)continue;const le=B+me*e*he;le<y[J]&&(y[J]=le,T(le,J))}}const W=(B,z)=>{const I=_(B,z);return I<0?1/0:y[I]};return{at:W,dir(B,z){const[I,Y]=l(B,z);let K=W(B,z),ie=0,me=0;for(let H=-1;H<=1;H++)for(let J=-1;J<=1;J++){if(!J&&!H)continue;const he=I+J,le=Y+H;he<0||le<0||he>=n||le>=n||y[le*n+he]<K&&(K=y[le*n+he],ie=J,me=H)}const qe=Math.hypot(ie,me)||1;return[ie/qe,me/qe]}}}const C=()=>{let E=0;for(const A of s)A<1/0&&A>E&&(E=A);return E},S=()=>{h(),d()};return S(),{at:p,dir:g,coastPoints:M,roadEnds:f,routeLen:m,walkField:x,rebuild:S,setBlock(E){u=E,S()},maxDist:C(),N:n,cell:e}}function Gd(i,e=700,{blending:t=ai,size:n=.55,opacity:s=1,fadeTo:r=null}={}){const o=new Ce(r||"#000000"),a=new Float32Array(e*3),l=new Float32Array(e*3),c=new Float32Array(e*3),u=new Float32Array(e*3),h=new Float32Array(e),d=new Float32Array(e),p=new Float32Array(e);let g=0;const _=new Ft;_.setAttribute("position",new Ot(a,3)),_.setAttribute("color",new Ot(l,3));const m=document.createElement("canvas");m.width=m.height=64;const f=m.getContext("2d"),M=f.createRadialGradient(32,32,0,32,32,32);M.addColorStop(0,"rgba(255,255,255,1)"),M.addColorStop(.4,"rgba(255,255,255,0.6)"),M.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=M,f.fillRect(0,0,64,64);const b=new wo({size:n,map:new oi(m),vertexColors:!0,transparent:!0,opacity:s,blending:t,depthWrite:!1}),x=new Ga(_,b);x.frustumCulled=!1,i.add(x);for(let A=0;A<e;A++)a[A*3+1]=-999;const C=new Ce;function S(A,y,v,{n:T=10,color:N="#ffb347",speed:L=4,up:U=3,life:W=.7,gravity:B=9,spread:z=1}={}){C.set(N);for(let I=0;I<T;I++){const Y=g;g=(g+1)%e,a[Y*3]=A,a[Y*3+1]=y,a[Y*3+2]=v;const K=Math.random()*Math.PI*2,ie=L*(.4+Math.random()*.6)*z;c[Y*3]=Math.cos(K)*ie,c[Y*3+1]=U*(.5+Math.random()),c[Y*3+2]=Math.sin(K)*ie,u[Y*3]=C.r,u[Y*3+1]=C.g,u[Y*3+2]=C.b,d[Y]=h[Y]=W*(.6+Math.random()*.6),p[Y]=B}}function E(A){for(let y=0;y<e;y++){if(h[y]<=0)continue;if(h[y]-=A,h[y]<=0){a[y*3+1]=-999,l[y*3]=l[y*3+1]=l[y*3+2]=0;continue}c[y*3+1]-=p[y]*A,a[y*3]+=c[y*3]*A,a[y*3+1]+=c[y*3+1]*A,a[y*3+2]+=c[y*3+2]*A;const v=h[y]/d[y];l[y*3]=u[y*3]*v+o.r*(1-v),l[y*3+1]=u[y*3+1]*v+o.g*(1-v),l[y*3+2]=u[y*3+2]*v+o.b*(1-v)}_.attributes.position.needsUpdate=!0,_.attributes.color.needsUpdate=!0}return{emit:S,update:E}}const aM={xbox:{build:"Ⓐ",carry:"Ⓑ",next:"Ⓨ",sel:"LB/RB",pause:"☰",restart:"View",name:"Xbox"},ps:{build:"✕",carry:"○",next:"△",sel:"L1/R1",pause:"Options",restart:"Select",name:"PlayStation"},ps3:{build:"✕",carry:"○",next:"△",sel:"L1/R1",pause:"Start",restart:"Select",name:"PlayStation 3"},switch:{build:"A",carry:"B",next:"X",sel:"L/R",pause:"+",restart:"−",name:"Switch"}},lM={build:"B",carry:"E",next:"N",sel:"Z/X",pause:"Esc",restart:"R",name:"Tastatur"},cM={build:"Bygg",carry:"Bær",next:"Neste bølge",sel:"",pause:"⏸",restart:"⏸ → ↺",name:"Berøring"};function uM(i=""){const e=i.toLowerCase();return/nintendo|pro controller|joy-con|joycon|057e/.test(e)?"switch":/0268|playstation\(r\)\s*3|ps3/.test(e)?"ps3":/playstation|dualshock|dualsense|wireless controller|054c|sony/.test(e)?"ps":"xbox"}function hM(i=""){const e=i.toLowerCase();return/0268|playstation\(r\)\s*3|ps3/.test(e)?"PS3 (DualShock 3)":/0ce6|0df2|dualsense/.test(e)?"PS5 (DualSense)":/05c4|09cc|0ba0|dualshock\s*4/.test(e)?"PS4 (DualShock 4)":/playstation|wireless controller|054c|sony/.test(e)?"PlayStation":/xbox|xinput|045e/.test(e)?"Xbox":/nintendo|pro controller|057e/.test(e)?"Switch Pro":/joy-con|joycon/.test(e)?"Joy-Con":"Spillkontroll"}const hs={evdev:{btn:[0,1,3,2,4,5,6,7,8,9,11,12],home:10,hat:[6,7],look:3},ds3:{btn:[0,1,3,2,4,5,6,7,8,9,11,12],home:10,dpad:[13,14,15,16],look:3},ds3old:{btn:[14,13,15,12,10,11,8,9,0,3,1,2],home:16,dpad:[4,6,7,5],look:2},dinput:{btn:[0,1,2,3,4,5,6,7,8,9,10,11],home:12,hat9:!0,look:2}};function fM(i,e=[]){return i.mapping==="standard"?null:/0268|playstation\(r\)\s*3/i.test(i.id)?i.axes.length>8?hs.ds3old:hs.ds3:Math.abs(e[9]??0)>1.1?hs.dinput:i.axes.length>=8?hs.evdev:hs.dinput}function dM(i){if(i===void 0||i>1.1||i<-1.1)return[!1,!1,!1,!1];const e=Math.round((i+1)*3.5)%8;return[e===7||e<=1,e>=3&&e<=5,e>=5&&e<=7,e>=1&&e<=3]}function pM(i,e=[]){const t=i.buttons.map(a=>!!a&&(a.pressed||a.value>.5)),n=fM(i,e);if(!n)return{down:t,axes:[i.axes[0]||0,i.axes[1]||0,i.axes[2]||0,i.axes[3]||0],layout:"standard"};const s=n.btn.map(a=>!!t[a]);let r=[!1,!1,!1,!1];if(n.dpad)r=n.dpad.map(a=>!!t[a]);else if(n.hat&&i.axes.length>n.hat[1]){const a=i.axes[n.hat[0]],l=i.axes[n.hat[1]];r=[l<-.5,l>.5,a<-.5,a>.5]}else n.hat9&&(r=dM(i.axes[9]));s.push(...r,!!t[n.home]);const o=a=>Math.abs(e[a]??0)>.5?0:i.axes[a]||0;return{down:s,axes:[o(0),o(1),o(n.look),o(n.look+1)],layout:n===hs.evdev?"evdev":n===hs.ds3?"ds3":n===hs.ds3old?"ds3old":"dinput"}}function mM(i){const e=i==="switch";return{build:e?1:0,carry:e?0:1,next:3,prev:4,nextSel:5,zoomOut:6,zoomIn:7,pause:9,back:8}}function gM(i){const e=new Set,t={move:{x:0,z:0},look:0,lookDelta:0,zoom:1,pressed:new Set,rollMode:!1,clicks:[],device:matchMedia("(pointer: coarse)").matches?"touch":"kb",padKind:"xbox",padId:""},n=v=>t.pressed.add(v),s=v=>{t.device=v};addEventListener("keydown",v=>{if(s("kb"),(v.code==="Space"||v.code.startsWith("Arrow")||v.code==="Tab")&&v.preventDefault(),v.repeat)return;if(t.rollMode){const N={ArrowUp:"rU",KeyW:"rU",ArrowRight:"rR",KeyD:"rR",ArrowDown:"rD",KeyS:"rD",ArrowLeft:"rL",KeyA:"rL",Escape:"rollExit",KeyQ:"rollExit"}[v.code];if(N){n(N);return}}e.add(v.code);const T={KeyE:"carry",Space:"carry",KeyB:"build",Digit1:"b1",Digit2:"b2",Digit3:"b3",Digit4:"b4",Digit5:"b5",Digit6:"b6",Digit7:"b7",Numpad1:"b1",Numpad2:"b2",Numpad3:"b3",Numpad4:"b4",Numpad5:"b5",Numpad6:"b6",Numpad7:"b7",KeyZ:"selPrev",KeyX:"selNext",KeyQ:"selPrev",KeyR:"restart",KeyN:"next",Enter:"next",KeyF:"fps",KeyM:"music",Escape:"pause",KeyP:"pause"};T[v.code]&&n(T[v.code])}),addEventListener("keyup",v=>e.delete(v.code)),addEventListener("blur",()=>e.clear()),i.addEventListener("wheel",v=>{v.preventDefault(),s("kb"),t.zoom=ha(t.zoom*(v.deltaY>0?1.08:1/1.08),.55,4.5)},{passive:!1}),i.addEventListener("contextmenu",v=>v.preventDefault());const r=new Map;let o=0,a=1,l=null;const c=v=>({x:v.clientX/innerWidth*2-1,y:-(v.clientY/innerHeight)*2+1});i.addEventListener("pointerdown",v=>{if(s(v.pointerType==="touch"?"touch":"kb"),v.pointerType==="mouse"&&v.button===2){l={x:v.clientX},i.setPointerCapture(v.pointerId);return}v.pointerType==="mouse"&&v.button!==0||(r.set(v.pointerId,{e:v,t:performance.now(),x0:v.clientX,y0:v.clientY}),r.size===2&&(o=pf(r),a=t.zoom))}),i.addEventListener("pointermove",v=>{if(l){t.lookDelta+=(v.clientX-l.x)*.008,l.x=v.clientX;return}const T=r.get(v.pointerId);T&&(T.e=v,r.size===2&&o>0&&(t.zoom=ha(a*(o/pf(r)),.55,4.5)))});const u=v=>{if(l&&v.button===2){l=null;return}const T=r.get(v.pointerId);T&&r.size===1&&o===0&&Math.hypot(v.clientX-T.x0,v.clientY-T.y0)<12&&t.clicks.push(c(v)),r.delete(v.pointerId),r.size<2&&(o=0)};i.addEventListener("pointerup",u),i.addEventListener("pointercancel",v=>{r.delete(v.pointerId),l=null,o=0});const h=document.getElementById("stick"),d=document.getElementById("knob"),p={x:0,z:0};let g=null;const _=v=>{const T=h.getBoundingClientRect();let N=v.clientX-(T.left+T.width/2),L=v.clientY-(T.top+T.height/2);const U=T.width/2,W=Math.hypot(N,L);W>U&&(N*=U/W,L*=U/W),d.style.transform=`translate(${N}px, ${L}px)`;const B=W/U<.15?0:1;p.x=N/U*B,p.z=L/U*B};h.addEventListener("pointerdown",v=>{s("touch"),g=v.pointerId,h.setPointerCapture(v.pointerId),_(v)}),h.addEventListener("pointermove",v=>{v.pointerId===g&&_(v)});const m=v=>{v.pointerId===g&&(g=null,p.x=p.z=0,d.style.transform="")};h.addEventListener("pointerup",m),h.addEventListener("pointercancel",m);const f=(v,T)=>v.addEventListener("pointerdown",N=>{N.preventDefault(),N.stopPropagation(),N.pointerType==="touch"&&s("touch"),n(T)});f(document.getElementById("btn-build"),"build"),f(document.getElementById("btn-carry"),"carry"),f(document.getElementById("btn-next"),"next"),f(document.getElementById("btn-pause"),"pause"),document.querySelectorAll("#build-panel button").forEach((v,T)=>f(v,"b"+(T+1))),document.querySelectorAll("#rollpad [data-r]").forEach(v=>f(v,v.dataset.r)),f(document.getElementById("btn-rollexit"),"rollExit");let M=[],b=null,x={dir:null,t:0,rep:0},C=0,S=0;t.padSeen=!1,t.onPad=null;const E=v=>{var T;b=v?v.axes.slice():null,M=[],v&&(t.padId=v.id,t.padKind=uM(v.id),t.padSeen=!0,(T=t.onPad)==null||T.call(t,"connect",v.id))};addEventListener("gamepadconnected",v=>{v.gamepad.id!==t.padId&&E(v.gamepad)}),addEventListener("gamepaddisconnected",v=>{var T;v.gamepad.id===t.padId&&(t.padId="",b=null,(T=t.onPad)==null||T.call(t,"disconnect",v.gamepad.id),t.device==="pad"&&(t.device=matchMedia("(pointer: coarse)").matches?"touch":"kb"))});let A=null;function y(v){var he,le;let T=[];try{T=navigator.getGamepads?[...navigator.getGamepads()]:[]}catch{T=[]}const N=T.find(ge=>ge&&ge.connected&&ge.id===t.padId)||T.find(ge=>ge&&ge.connected);if(A=N||null,!N)return null;(N.id!==t.padId||!b)&&E(N);const L=mM(t.padKind),{down:U,axes:W}=pM(N,b),B=M,z=ge=>U[ge]&&!B[ge],I=ge=>Math.abs(ge)<.2?0:(ge-Math.sign(ge)*.2)/.8;let Y=I(W[0]),K=I(W[1]);const ie=U[14]?-1:U[15]?1:0,me=U[12]?-1:U[13]?1:0;ie&&(Y=ie),me&&(K=me);const qe=I(W[2]);if((Y||K||qe||U.some(Boolean))&&s("pad"),M=U,(he=t.menu)==null?void 0:he.root()){const ge=me<0||W[1]<-.6?"up":me>0||W[1]>.6?"down":ie<0||W[0]<-.6?"left":ie>0||W[0]>.6?"right":null;return ge!==x.dir?(x={dir:ge,t:0,rep:0},ge&&t.menu.move(ge)):ge&&(x.t+=v,x.t>.4+x.rep*.15&&(x.rep++,t.menu.move(ge))),z(L.build)&&t.menu.ok(),z(L.carry)&&t.menu.back(),z(L.pause)&&n("pause"),z(L.back)&&n("restart"),{x:0,z:0,look:0,zoomIn:!1,zoomOut:!1}}return x.dir=null,t.rollMode?(z(12)&&n("rU"),z(15)&&n("rR"),z(13)&&n("rD"),z(14)&&n("rL"),z(L.carry)&&n("rollExit"),S=Math.hypot(W[0],W[1])>.6?S+v:0,S>=.3&&(S=0,n("rollExit")),z(L.pause)&&n("pause"),{x:0,z:0,look:qe,zoomIn:U[L.zoomIn],zoomOut:U[L.zoomOut]}):(S=0,(le=t.panelOpen)!=null&&le.call(t)&&ie?(z(14)&&n("selPrev"),z(15)&&n("selNext"),C+=v,C<.25&&!I(W[0])&&(Y=0)):C=0,z(L.build)&&n("build"),z(L.carry)&&n("carry"),z(L.next)&&n("next"),z(L.prev)&&n("selPrev"),z(L.nextSel)&&n("selNext"),z(L.pause)&&n("pause"),z(L.back)&&n("restart"),z(2)&&t.padKind!=="switch"&&n("next"),{x:Y,z:K,look:qe,zoomIn:U[L.zoomIn],zoomOut:U[L.zoomOut]})}return t.rumble=(v=200,T=.6)=>{var N,L,U,W;if(!(!A||t.device!=="pad"))try{(N=A.vibrationActuator)!=null&&N.playEffect?A.vibrationActuator.playEffect("dual-rumble",{duration:v,strongMagnitude:T,weakMagnitude:T/2}):(W=(U=(L=A.hapticActuators)==null?void 0:L[0])==null?void 0:U.pulse)==null||W.call(U,T,v)}catch{}},t.update=v=>{let T=0,N=0;(e.has("KeyA")||e.has("ArrowLeft"))&&(T-=1),(e.has("KeyD")||e.has("ArrowRight"))&&(T+=1),(e.has("KeyW")||e.has("ArrowUp"))&&(N-=1),(e.has("KeyS")||e.has("ArrowDown"))&&(N+=1);const L=y(v);L&&(L.x||L.z)&&(T=L.x,N=L.z),(p.x||p.z)&&(T=p.x,N=p.z);const U=Math.hypot(T,N);U>1&&(T/=U,N/=U),t.move.x=T,t.move.z=N,t.look=t.lookDelta+(L?L.look*2.2*v:0),t.lookDelta=0,L!=null&&L.zoomIn&&(t.zoom=ha(t.zoom/(1+v*1.2),.55,4.5)),L!=null&&L.zoomOut&&(t.zoom=ha(t.zoom*(1+v*1.2),.55,4.5))},t.labels=()=>t.device==="pad"?aM[t.padKind]:t.device==="touch"?cM:lM,t.consume=v=>t.pressed.delete(v),t.clear=()=>{t.pressed.clear(),t.clicks.length=0},t}const ha=(i,e,t)=>Math.max(e,Math.min(t,i));function pf(i){const[e,t]=[...i.values()].map(n=>n.e);return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)||1}const ii=i=>document.getElementById(i),vM=["btn-start","btn-again","btn-yes","btn-resume","btn-portrait"];function xM(i){let e=null;const t=u=>u&&!u.classList.contains("hidden")&&getComputedStyle(u).display!=="none";function n(){return t(ii("rotate"))?ii("rotate"):t(ii("pause"))?t(ii("confirm"))?ii("confirm"):ii("pause"):t(ii("overlay"))?ii("overlay"):null}const s=u=>[...u.querySelectorAll("button, input[type=range]")].filter(h=>!h.disabled&&h.offsetParent!==null&&!h.closest(".hidden")&&(u.id==="confirm"||!h.closest("#confirm")));function r(u){var h;e&&e!==u&&e.classList.remove("pad-focus"),e=u,u&&(i.device==="pad"&&u.classList.add("pad-focus"),(h=u.scrollIntoView)==null||h.call(u,{block:"nearest"}))}function o(){const u=n();if(!u)return e&&(e.classList.remove("pad-focus"),e=null),null;const h=s(u);return(!e||!h.includes(e))&&r(vM.map(d=>h.find(p=>p.id===d)).find(Boolean)||h[0]||null),e&&e.classList.toggle("pad-focus",i.device==="pad"),u}function a(u){const h=o();if(!h||!e)return;if(e.type==="range"&&(u==="left"||u==="right")){e.value=String(Math.max(0,Math.min(100,+e.value+(u==="left"?-10:10)))),e.dispatchEvent(new Event("input",{bubbles:!0}));return}const d=e.getBoundingClientRect(),p=d.left+d.width/2,g=d.top+d.height/2,[_,m]={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]}[u];let f=null,M=1/0,b=!1;for(const x of s(h)){if(x===e)continue;const C=x.getBoundingClientRect(),S=C.left+C.width/2-p,E=C.top+C.height/2-g,A=S*_+E*m,y=Math.abs(S*m-E*_);if(A<=4)continue;const v=y<=A,T=A+y*2;(v&&!b||v===b&&T<M)&&(M=T,f=x,b=v)}f&&r(f)}function l(){!o()||!e||e.type==="range"||e.click()}function c(){const u=o();u&&(u.id==="confirm"?ii("btn-no").click():u.id==="pause"&&(t(ii("lex"))?ii("lex").classList.add("hidden"):ii("btn-resume").click()))}return{root:()=>o(),move:a,ok:l,back:c,sync:o,get focused(){return e}}}let Kt=null,wr=null,yo=null;function _M(){if(Kt){Kt.resume();return}const i=window.AudioContext||window.webkitAudioContext;if(!i)return;Kt=new i,wr=Kt.createGain(),wr.gain.value=.5,wr.connect(Kt.destination),yo=Kt.createBuffer(1,Kt.sampleRate*2,Kt.sampleRate);const e=yo.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1;MM()}const Vd=()=>Kt?{ctx:Kt,noiseBuf:yo}:null;function tn(i,e,{type:t="sine",vol:n=.2,slide:s=0,delay:r=0}={}){if(!Kt)return;const o=Kt.currentTime+r,a=Kt.createOscillator(),l=Kt.createGain();a.type=t,a.frequency.setValueAtTime(i,o),s&&a.frequency.exponentialRampToValueAtTime(Math.max(30,i+s),o+e),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(n,o+.01),l.gain.exponentialRampToValueAtTime(1e-4,o+e),a.connect(l).connect(wr),a.start(o),a.stop(o+e+.02)}function Wi(i,{vol:e=.3,freq:t=800,q:n=.7,delay:s=0}={}){if(!Kt)return;const r=Kt.currentTime+s,o=Kt.createBufferSource();o.buffer=yo;const a=Kt.createBiquadFilter();a.type="lowpass",a.frequency.value=t,a.Q.value=n;const l=Kt.createGain();l.gain.setValueAtTime(e,r),l.gain.exponentialRampToValueAtTime(1e-4,r+i),o.connect(a).connect(l).connect(wr),o.start(r,Math.random()),o.stop(r+i+.02)}function MM(){const i=Kt.createBufferSource();i.buffer=yo,i.loop=!0;const e=Kt.createBiquadFilter();e.type="lowpass",e.frequency.value=420;const t=Kt.createGain();t.gain.value=.035;const n=Kt.createOscillator(),s=Kt.createGain();n.frequency.value=.12,s.gain.value=.03,n.connect(s).connect(t.gain),i.connect(e).connect(t).connect(wr),i.start(),n.start()}let mf=0;const Lt={pickup(){if(!Kt)return;const i=Kt.currentTime,e=i-mf<.4?1.12:1;mf=i,tn(880*e+Math.random()*60,.12,{type:"triangle",vol:.12}),tn(1320*e,.1,{type:"sine",vol:.06,delay:.04})},puff(){Wi(.18,{vol:.07,freq:600,q:.3}),tn(240,.12,{vol:.04,slide:-60})},crunch(){for(let i=0;i<4;i++)Wi(.05,{vol:.1,freq:3500,delay:i*.03});tn(130,.18,{vol:.08,slide:-40})},skank(){[[392,494,587],[349,440,523]][Math.random()<.5?0:1].forEach(i=>tn(i,.11,{type:"square",vol:.025})),tn(98,.3,{vol:.08})},chill(){tn(330,.5,{type:"sine",vol:.07,slide:160}),tn(495,.45,{type:"triangle",vol:.04,slide:120,delay:.08})},shoot(){tn(520,.07,{type:"square",vol:.03,slide:-300})},mortar(){Wi(.12,{vol:.12,freq:500}),tn(160,.15,{type:"sine",vol:.12,slide:-80})},boom(){Wi(.45,{vol:.28,freq:380}),tn(90,.35,{vol:.18,slide:-50})},horn(){tn(196,.5,{type:"sawtooth",vol:.035}),tn(147,.55,{type:"sine",vol:.06})},hit(){Wi(.05,{vol:.08,freq:2500})},die(){tn(420,.18,{type:"triangle",vol:.09,slide:-280}),Wi(.12,{vol:.07,freq:1200})},build(){[392,494,587].forEach((i,e)=>tn(i,.25,{type:"triangle",vol:.1,delay:e*.06}))},upgrade(){[523,659,784,1047].forEach((i,e)=>tn(i,.22,{type:"triangle",vol:.1,delay:e*.07}))},bonk(){tn(110,.16,{type:"sine",vol:.12,slide:-40}),Wi(.05,{vol:.05,freq:400})},tick(i=1){Wi(.025,{vol:.06,freq:4e3}),tn(392*Math.pow(2,i/12*2),.07,{type:"triangle",vol:.07})},stone(){tn(660,.2,{type:"sine",vol:.1,slide:200})},lose(){tn(220,.6,{type:"sawtooth",vol:.06,slide:-120}),Wi(.3,{vol:.08,freq:300})},stun(){tn(700,.4,{type:"square",vol:.05,slide:-500})},deny(){tn(150,.12,{type:"square",vol:.05})},wave(){[330,330,440].forEach((i,e)=>tn(i,.3,{type:"sawtooth",vol:.04,delay:e*.18}))},win(){[523,659,784,1047,1319].forEach((i,e)=>tn(i,.4,{type:"triangle",vol:.12,delay:e*.12}))}},Gc=172,Xi=60/Gc/4,Cs=i=>440*Math.pow(2,(i-69)/12),gf={tak:{chords:[[50,66,69,73,76],[47,62,66,69,74],[43,59,62,66,71],[45,61,64,69,73]],hook:[[0,78,3],[3,76,3],[6,73,2],[8,74,4],[14,71,2],[16,73,3],[19,74,3],[22,76,6],[28,69,4]],pad:"sawtooth",padCut:2400,arpOct:12,reeseDetune:9,drive:0,space:.35,arpRate:1,lead:"square"},vinter:{chords:[[45,60,64,71,76],[41,57,64,69,72],[48,64,67,72,79],[43,59,62,67,71]],hook:[[0,76,6],[6,74,2],[8,72,6],[16,71,4],[20,72,2],[22,74,4],[26,79,6]],pad:"triangle",padCut:1500,arpOct:24,reeseDetune:6,drive:0,space:.6,arpRate:2,lead:"triangle"},vulkan:{chords:[[40,55,59,64,67],[41,57,60,65,69],[40,55,59,64,71],[38,54,57,62,66]],hook:[[0,64,2],[2,65,2],[4,64,4],[10,62,2],[12,59,4],[16,64,2],[18,67,2],[20,65,4],[26,64,6]],pad:"sawtooth",padCut:900,arpOct:0,reeseDetune:16,drive:.6,space:.25,arpRate:1,lead:"sawtooth"}},zl={A:{k:"x.x.......xx....x.x.......x.....",s:"....x..x.x..x..x....x..x.x..x.x.",g:"..........x...........x.....x..."},B:{k:"x.....x...x.x...x.x...x...x.....",s:"....x.x..x..x.x.....x..xx..x..x.",g:".x.......x.....x.x.......x......"},FILL:{k:"x.x.......x.....x...............",s:"....x..x.x..x..x....x.xxxxxxxxxx",g:"................................"}},vf=[["build",8],["drop",16],["break",8],["drop",16]];function yM(i,e,t){const n=gf[t]||gf.tak,s=i.createDynamicsCompressor();s.threshold.value=-18,s.ratio.value=3,s.attack.value=.01,s.release.value=.2;const r=i.createDynamicsCompressor();r.threshold.value=-3,r.ratio.value=20,r.attack.value=.002,r.release.value=.08;const o=i.createGain();o.gain.value=0,s.connect(r).connect(o).connect(i.destination);const a=i.createAnalyser();a.fftSize=1024,o.connect(a);const l={};for(const Z of["drums","bass","pad","arp","lead"]){const P=i.createGain();P.gain.value=0,P.connect(s),l[Z]=P}const c={};for(const Z of["pad","bass"]){const P=i.createGain();P.gain.value=1,P.connect(l[Z]),c[Z]=P}const u=(Z,P)=>{const w=i.createBuffer(2,Math.floor(i.sampleRate*Z),i.sampleRate);for(let X=0;X<2;X++){const ne=w.getChannelData(X);for(let se=0;se<ne.length;se++)ne[se]=(Math.random()*2-1)*Math.pow(1-se/ne.length,P)}return w},h=i.createConvolver();h.buffer=u(2.4,2.5);const d=i.createGain();d.gain.value=n.space,h.connect(d).connect(s);const p=i.createConvolver();p.buffer=u(.5,.4);const g=i.createGain();g.gain.value=0,p.connect(g).connect(l.drums);const _=i.createDelay(1);_.delayTime.value=Xi*3;const m=i.createGain();m.gain.value=.38;const f=i.createBiquadFilter();f.type="lowpass",f.frequency.value=2400;const M=i.createStereoPanner(),b=i.createOscillator(),x=i.createGain();b.frequency.value=Gc/60/3,x.gain.value=.8,b.connect(x).connect(M.pan),b.start(),_.connect(f).connect(m).connect(_),f.connect(M).connect(l.arp);const C=i.createBiquadFilter();C.type="highpass",C.frequency.value=180;const S=i.createBiquadFilter();S.type="lowpass",S.frequency.value=n.padCut,S.Q.value=2;const E=i.createOscillator(),A=i.createGain();E.frequency.value=.07,A.gain.value=n.padCut*.45,E.connect(A).connect(S.frequency),E.start();const y=i.createDelay(.05);y.delayTime.value=.014;const v=i.createOscillator(),T=i.createGain();v.frequency.value=.5,T.gain.value=.004,v.connect(T).connect(y.delayTime),v.start();const N=i.createStereoPanner();N.pan.value=.6,C.connect(S),S.connect(c.pad),S.connect(y).connect(N).connect(c.pad),S.connect(h);const L=i.createBiquadFilter();L.type="lowpass",L.frequency.value=420,L.Q.value=6;const U=i.createOscillator(),W=i.createGain();if(U.frequency.value=Gc/60/4,W.gain.value=260,U.connect(W).connect(L.frequency),U.start(),n.drive>0){const Z=i.createWaveShaper(),P=new Float32Array(1024);for(let w=0;w<1024;w++){const X=w/512-1;P[w]=Math.tanh(X*(1+n.drive*6))}Z.curve=P,L.connect(Z).connect(c.bass)}else L.connect(c.bass);const B=i.createBiquadFilter();B.type="lowpass",B.frequency.value=3600,B.Q.value=3,B.connect(l.lead),B.connect(_),B.connect(h);const z=(Z,P,w,X,ne,se)=>{Z.gain.setValueAtTime(1e-4,P),Z.gain.exponentialRampToValueAtTime(X,P+w),Z.gain.setValueAtTime(X,P+Math.max(w,se-ne)),Z.gain.exponentialRampToValueAtTime(1e-4,P+se)},I=(Z,P)=>{const w=i.createStereoPanner();return w.pan.value=P,Z.connect(w),w},Y=(Z,P,w,X,ne,se,re="bandpass",Ne=0)=>{const we=i.createBufferSource();we.buffer=e;const Ue=i.createBiquadFilter();Ue.type=re,Ue.frequency.value=w,Ue.Q.value=X;const ot=i.createGain();z(ot,Z,.001,ne,P*.8,P),we.connect(Ue).connect(ot);const Ae=Ne?I(ot,Ne):ot;for(const Ye of se)Ae.connect(Ye);we.start(Z,Math.random()*1.5),we.stop(Z+P+.02)},K=(Z,P=1)=>{const w=i.createOscillator(),X=i.createGain();w.frequency.setValueAtTime(160,Z),w.frequency.exponentialRampToValueAtTime(44,Z+.11),z(X,Z,.002,1*P,.2,.3),w.connect(X).connect(l.drums),w.start(Z),w.stop(Z+.32),Y(Z,.012,3500,.7,.35*P,[l.drums],"highpass");for(const ne of Object.values(c))ne.gain.cancelScheduledValues(Z),ne.gain.setValueAtTime(.35,Z),ne.gain.linearRampToValueAtTime(1,Z+.2)},ie=(Z,P=1)=>{Y(Z,.17,1900,.8,.5*P,[l.drums,p]);for(const[w,X,ne]of[[200,160,.3],[340,260,.14]]){const se=i.createOscillator(),re=i.createGain();se.type="triangle",se.frequency.setValueAtTime(w,Z),se.frequency.exponentialRampToValueAtTime(X,Z+.08),z(re,Z,.001,ne*P,.06,.11),se.connect(re).connect(l.drums),se.start(Z),se.stop(Z+.13)}g.gain.setValueAtTime(.9*P,Z),g.gain.setValueAtTime(1e-4,Z+.21)};let me=1;const qe=(Z,P,w)=>{me=-me,Y(Z,w?.14:.035,9e3,.6,(w?.12:.08)*P,[l.drums],"highpass",me*.35)},H=(Z,P,w)=>{for(const se of[-n.reeseDetune,n.reeseDetune]){const re=i.createOscillator(),Ne=i.createGain();re.type="sawtooth",re.frequency.value=Cs(P),re.detune.value=se,z(Ne,Z,.02,.2,.1,w),I(re.connect(Ne),se>0?.25:-.25).connect(L),re.start(Z),re.stop(Z+w+.05)}const X=i.createOscillator(),ne=i.createGain();X.frequency.value=Cs(P-12),z(ne,Z,.02,.42,.1,w),X.connect(ne).connect(c.bass),X.start(Z),X.stop(Z+w+.05)},J=(Z,P,w,X=1)=>{for(const ne of P.slice(1))for(const[se,re]of[[-9,-.6],[0,0],[8,.6]]){const Ne=i.createOscillator(),we=i.createGain();Ne.type=n.pad,Ne.frequency.value=Cs(ne),Ne.detune.value=se,z(we,Z,.8,.026*X,1.4,w),I(Ne.connect(we),re).connect(C),Ne.start(Z),Ne.stop(Z+w+.1)}},he=(Z,P,w=1)=>{const X=i.createOscillator(),ne=i.createGain();X.type="square",X.frequency.value=Cs(P+n.arpOct);const se=i.createBiquadFilter();se.type="lowpass",se.frequency.value=3200,z(ne,Z,.003,.05*w,.08,Xi*1.6),X.connect(se).connect(ne),ne.connect(l.arp),ne.connect(_),X.start(Z),X.stop(Z+Xi*2)},le=(Z,P,w,X)=>{const ne=w*Xi;for(const se of[-6,6]){const re=i.createOscillator(),Ne=i.createGain();re.type=n.lead,X?(re.frequency.setValueAtTime(Cs(X),Z),re.frequency.exponentialRampToValueAtTime(Cs(P),Z+.05)):re.frequency.value=Cs(P),re.detune.value=se;const we=i.createOscillator(),Ue=i.createGain();we.frequency.value=5.5,Ue.gain.value=9,we.connect(Ue).connect(re.detune),we.start(Z+.12),we.stop(Z+ne+.05),z(Ne,Z,.01,.07,Math.min(.12,ne*.4),ne),I(re.connect(Ne),se>0?.2:-.2).connect(B),re.start(Z),re.stop(Z+ne+.05)}};let ge=0,De=0,Ee=null,Fe=0,fe=.7,Me=!1,O=0;const Je=vf.reduce((Z,[,P])=>Z+P,0),be=()=>{if(Fe<.5)return"ambient";let Z=O%Je;for(const[P,w]of vf){if(Z<w)return P;Z-=w}return"drop"},Be=()=>{const Z=i.currentTime,P=(X,ne)=>{X.gain.cancelScheduledValues(Z),X.gain.setTargetAtTime(ne,Z,.8)},w=Fe;P(l.drums,.1+.85*w),P(l.bass,.3+.6*w),P(l.pad,.75-.2*w),P(l.arp,.35+.3*w),P(l.lead,.55+.35*w),o.gain.cancelScheduledValues(Z),o.gain.setTargetAtTime(Me?0:fe*.8,Z,.3)},Ie=Z=>Z%2?Xi*.12:0,nt=()=>{for(;De<i.currentTime+.15;){const Z=ge%32,P=Math.floor(ge/16),w=Math.floor(ge/32)%n.chords.length,X=n.chords[w];Z%16===0&&ge>0&&Fe>.5&&O++;const ne=be(),se=De+Ie(Z),re=O%8;if(ne==="drop"||ne==="build"){const we=re%4===3&&Z>=16?zl.FILL:re>=6?zl.B:zl.A,Ue=ne==="build"&&re<4;we.k[Z]==="x"&&!(Ue&&Z%8)&&K(se),we.s[Z]==="x"&&!Ue&&ie(se,ne==="build"?.7:1),we.g[Z]==="x"&&ie(se,.3),(!Ue||Z%2===0)&&qe(se,Z%2?.6:1,Z%8===6)}else ne==="break"?(Z%4===2&&qe(se,.6,!1),(Z===0||Z===16)&&K(se,.4)):Z%4===2&&qe(se,.45,!1);if(Z===0&&(J(se,X,Xi*32,ne==="break"?1.3:1),H(se,X[0],Xi*(ne==="drop"?14:30))),ne==="drop"&&Z===16&&H(se,X[0]+(w%2?3:7),Xi*14),Z%n.arpRate===0&&ne!=="break"&&he(se,X[1+Z/n.arpRate%4]+(Z>=16?12:0),ne==="ambient"?.7:1),ne==="drop"||(ne==="break"||ne==="ambient")&&Math.floor(P/4)%2===1){const we=n.hook.findIndex(([Ue])=>Ue===Z);if(we>=0){const[,Ue,ot]=n.hook[we];le(se,Ue+(ne==="ambient"?-12:0),ot,we>0?n.hook[we-1][1]:0)}}De+=Xi,ge++}};return{start(){Ee||(De=i.currentTime+.1,Ee=setInterval(nt,25),Be())},stop(){clearInterval(Ee),Ee=null,o.gain.setTargetAtTime(0,i.currentTime,.2)},setIntensity(Z){Z>.5&&Fe<=.5&&(O=0),Fe=Z,Be()},setVolume(Z){fe=Z,Be()},setMuted(Z){Me=Z,Be()},get muted(){return Me},get volume(){return fe},rms(){const Z=new Float32Array(a.fftSize);return a.getFloatTimeDomainData(Z),Math.sqrt(Z.reduce((P,w)=>P+w*w,0)/Z.length)},get intensity(){return Fe},get section(){return be()},tap(Z){o.connect(Z)}}}const xf=i=>440*Math.pow(2,(i-69)/12),Qr=60/76,_f={tak:{chords:[[50,62,66,69,73],[47,59,62,66,71],[43,59,62,67,71],[45,57,61,64,69]],scale:[62,64,66,69,71,74,76,78,81],bell:"sine",padCut:1400,nature:"birds"},vinter:{chords:[[45,57,64,67,71],[41,57,60,64,67],[48,60,64,67,74],[43,55,62,67,69]],scale:[64,67,69,71,74,76,79,81,83],bell:"triangle",padCut:1100,nature:"wind"},vulkan:{chords:[[40,52,59,62,67],[41,53,60,64,67],[38,50,57,62,65],[40,52,55,59,64]],scale:[52,55,57,59,62,64,67,69,71],bell:"sine",padCut:800,nature:"rumble"}},Mf=8;function bM(i,e,t){const n=_f[t]||_f.tak,s=i.createDynamicsCompressor();s.threshold.value=-20,s.ratio.value=2.5,s.attack.value=.03,s.release.value=.4;const r=i.createGain();r.gain.value=0,s.connect(r).connect(i.destination);const o=i.createAnalyser();o.fftSize=1024,r.connect(o);const a={};for(const H of["pad","bell","nature","pulse"]){const J=i.createGain();J.gain.value=0,J.connect(s),a[H]=J}const l=i.createBuffer(2,Math.floor(i.sampleRate*3.5),i.sampleRate);for(let H=0;H<2;H++){const J=l.getChannelData(H);for(let he=0;he<J.length;he++)J[he]=(Math.random()*2-1)*Math.pow(1-he/J.length,3)}const c=i.createConvolver();c.buffer=l;const u=i.createGain();u.gain.value=.55,c.connect(u).connect(s);const h=i.createDelay(2);h.delayTime.value=Qr*.75;const d=i.createGain();d.gain.value=.35;const p=i.createBiquadFilter();p.type="lowpass",p.frequency.value=2200,h.connect(p).connect(d).connect(h),p.connect(a.bell);const g=i.createBiquadFilter();g.type="lowpass",g.frequency.value=n.padCut,g.Q.value=.7;const _=i.createOscillator(),m=i.createGain();_.frequency.value=.05,m.gain.value=n.padCut*.3,_.connect(m).connect(g.frequency),_.start(),g.connect(a.pad),g.connect(c);const f=(H,J,he,le,ge,De)=>{H.gain.setValueAtTime(1e-4,J),H.gain.exponentialRampToValueAtTime(le,J+he),H.gain.setValueAtTime(le,J+Math.max(he,De-ge)),H.gain.exponentialRampToValueAtTime(1e-4,J+De)},M=(H,J)=>{const he=i.createStereoPanner();return he.pan.value=J,H.connect(he),he},b=(H,J,he)=>{for(const le of J)for(const[ge,De]of[[-7,-.5],[7,.5]]){const Ee=i.createOscillator(),Fe=i.createGain();Ee.type=le===J[0]?"sine":"triangle",Ee.frequency.value=xf(le),Ee.detune.value=ge,f(Fe,H,2.5,le===J[0]?.05:.022,3,he),M(Ee.connect(Fe),De).connect(g),Ee.start(H),Ee.stop(H+he+.1)}},x=(H,J,he=1)=>{const le=(Math.random()-.5)*.8;for(const[ge,De,Ee]of[[1,.09,1.6],[4.2,.02,.25],[2,.025,.7]]){const Fe=i.createOscillator(),fe=i.createGain();Fe.type=ge===1?n.bell:"sine",Fe.frequency.value=xf(J)*ge,fe.gain.setValueAtTime(1e-4,H),fe.gain.exponentialRampToValueAtTime(De*he,H+.005),fe.gain.exponentialRampToValueAtTime(1e-4,H+Ee);const Me=M(Fe.connect(fe),le);Me.connect(a.bell),Me.connect(h),Me.connect(c),Fe.start(H),Fe.stop(H+Ee+.05)}},C=(H,J,he,le,ge,De,Ee,Fe=.002)=>{const fe=i.createBufferSource();fe.buffer=e;const Me=i.createBiquadFilter();Me.type=he,Me.frequency.value=le,Me.Q.value=ge;const O=i.createGain();return f(O,H,Fe,De,J*.7,J),fe.connect(Me).connect(O).connect(Ee),fe.start(H,Math.random()*1.5),fe.stop(H+J+.05),Me},S=H=>{const J=i.createOscillator(),he=i.createGain();J.frequency.setValueAtTime(90,H),J.frequency.exponentialRampToValueAtTime(50,H+.18),f(he,H,.01,.35,.2,.3),J.connect(he).connect(a.pulse),J.start(H),J.stop(H+.32)},E=(H,J)=>C(H,.09,"highpass",7e3,.5,.05*J,a.pulse,.02),A=H=>{const J=2+Math.floor(Math.random()*3),he=2400+Math.random()*1600,le=(Math.random()-.5)*1.4;for(let ge=0;ge<J;ge++){const De=H+ge*(.09+Math.random()*.06),Ee=i.createOscillator(),Fe=i.createGain();Ee.frequency.setValueAtTime(he*(1+Math.random()*.2),De),Ee.frequency.exponentialRampToValueAtTime(he*(.75+Math.random()*.6),De+.07),f(Fe,De,.008,.03,.04,.08),M(Ee.connect(Fe),le).connect(a.nature),Ee.start(De),Ee.stop(De+.1)}};let y=null;const v=()=>{const H=i.createBufferSource();H.buffer=e,H.loop=!0;const J=i.createBiquadFilter(),he=i.createGain(),le=i.createOscillator(),ge=i.createGain(),De=i.createGain();n.nature==="wind"?(J.type="bandpass",J.frequency.value=500,J.Q.value=1.2,he.gain.value=.05,le.frequency.value=.08,ge.gain.value=.04,De.gain.value=350):n.nature==="rumble"?(J.type="lowpass",J.frequency.value=120,J.Q.value=.8,he.gain.value=.18,le.frequency.value=.05,ge.gain.value=.08,De.gain.value=40):(J.type="highpass",J.frequency.value=3e3,J.Q.value=.5,he.gain.value=.012,le.frequency.value=.11,ge.gain.value=.01,De.gain.value=800),le.connect(ge).connect(he.gain),le.connect(De).connect(J.frequency),H.connect(J).connect(he).connect(a.nature),H.start(),le.start(),y={s:H,lfo:le}};let T=null,N=0,L=.7,U=!1,W=0,B=0,z=0,I=0,Y=0,K=0,ie=4;const me=()=>{const H=i.currentTime,J=N,he=(le,ge)=>{le.gain.cancelScheduledValues(H),le.gain.setTargetAtTime(ge,H,1.2)};he(a.pad,.9),he(a.bell,.7+.2*J),he(a.nature,.9-.4*J),he(a.pulse,.55*J),g.frequency.cancelScheduledValues(H),g.frequency.setTargetAtTime(n.padCut*(1+.9*J),H,2),r.gain.cancelScheduledValues(H),r.gain.setTargetAtTime(U?0:L*1.6,H,.4)},qe=()=>{const H=i.currentTime+.3;for(;W<H;)b(W,n.chords[B],Mf+3),B=(B+1)%n.chords.length,W+=Mf;for(;z<H;)Math.random()<.8&&(ie=Math.max(0,Math.min(n.scale.length-1,ie+[-2,-1,-1,1,1,2,0][Math.floor(Math.random()*7)])),x(z,n.scale[ie],.8+Math.random()*.3),Math.random()<.15&&x(z+Qr/4,n.scale[Math.max(0,ie-2)],.6)),z+=Qr*(N>.5?Math.random()<.5?.5:1:[1,1.5,2,3][Math.floor(Math.random()*4)]);for(;I<H;)N>.5&&(Y%2===0&&S(I),E(I,1),E(I+Qr/2,.6)),Y++,I+=Qr;for(;K<H;){if(n.nature==="birds"&&Math.random()<.55&&A(K),n.nature==="wind"&&Math.random()<.3&&C(K,2.5,"bandpass",1400+Math.random()*900,6,.03,a.nature,.9),n.nature==="rumble")for(let J=0;J<3;J++)Math.random()<.5&&C(K+Math.random(),.02,"highpass",2500,.5,.12,a.nature);K+=1.5+Math.random()*2.5}};return{start(){if(T)return;W=z=I=K=i.currentTime+.1,y||v(),T=setInterval(qe,50),me()},stop(){clearInterval(T),T=null,r.gain.setTargetAtTime(0,i.currentTime,.3)},setIntensity(H){N=H,me()},setVolume(H){L=H,me()},setMuted(H){U=H,me()},get muted(){return U},get volume(){return L},rms(){const H=new Float32Array(o.fftSize);return o.getFloatTimeDomainData(H),Math.sqrt(H.reduce((J,he)=>J+he*he,0)/H.length)},get intensity(){return N},get section(){return N>.5?"wave":"calm"},tap(H){r.connect(H)}}}const et={startEmbers:225,emberLife:25,expiredRefund:.5,magnet:4.6,reach:2.7,placeAhead:2.3,minTowerGap:2.5,plinthBonus:1.25,lighthouseReach:5.4,stoneCost:30,chargeTime:.4,upgradeTime:[15,20,25,30],keeperSpeed:6.4,carrySlow:.82,wadeSlow:.7,stunTime:1.6,stunLoss:.3,chillMax:100,stressInvuln:1,stressPush:7,airStress:10,faintTime:6,faintLoss:.25,wakeChill:.6,regen:3,regenReach:9,bagChance:.05,bagHeal:25,bagLife:20,hpGrowth:.2,waveBonus:20,waveBonusPer:5,interest:.1,firstPrep:30,prepTime:15,earlyScale:[.55,.65,.8],activePaths:[1,2,2]},zs={ring:{name:"Røykring-kanon",cost:22,range:7.5,dmg:7,cooldown:.65,air:!1,tip:"rask · kun bakke"},chips:{name:"Chips-mørtel",cost:38,range:10,dmg:18,cooldown:2.2,air:!1,splash:2.5,tip:"splash · kun bakke"},speaker:{name:"Reggae-høyttaler",cost:30,range:5.5,dmg:3,cooldown:1.6,air:!0,slowTime:2.2,tip:"bremser i ring"},bubble:{name:"Bobleblåser",cost:20,range:7,dmg:2.5,cooldown:.38,air:!0,ground:!1,trap:1.4,tip:"fanger flyvere · kun luft"},kite:{name:"Papirdrage",cost:40,range:13,dmg:5,cooldown:2.8,air:!0,ground:!1,zone:3.4,hover:2.4,tip:"sone, lang · kun luft"},pizza:{name:"Pizza-katapult",cost:55,range:14,dmg:24,cooldown:3,air:!1,splash:2.9,tip:"lang splash · kun bakke"},lamp:{name:"Lavalampe",cost:50,range:4.6,dmg:1.1,cooldown:.3,air:!0,slowTime:.5,tip:"aura, bremser alt"}},To={clerk:{name:"Forbuds-byråkrat",hp:22,speed:2.6,embers:4,anim:12,puff:"#9fffb0",stress:10},tank:{name:"Stortings-tanken",hp:95,speed:1.25,embers:10,anim:5,puff:"#9fffb0",resist:{ring:.5,chips:1.5},stress:15},gull:{name:"Moralpanikk-måke",hp:16,speed:3.4,embers:5,anim:12,puff:"#ffffff",flying:!0,swoop:!0},swarm:{name:"Komité-sverm",hp:7,speed:2.2,embers:1,anim:9,puff:"#ffe08a",stress:8},auditor:{name:"Revisoren",hp:70,speed:1.6,embers:8,anim:7,puff:"#9fffb0",shield:.25,resist:{lamp:1.5},info:"skjold forfra (×0,25), ikke mot aura",stress:14},complainer:{name:"Naboklageren",hp:12,speed:4.3,embers:3,anim:18,puff:"#ffb0f0",resist:{chips:.5,ring:1.5},info:"rask, mørtel bommer",stress:10},lobbyist:{name:"Lobbyisten",hp:55,speed:1.9,embers:6,anim:9,puff:"#ffe08a",splits:3,resist:{speaker:.5,pizza:1.5},noMood:!0,info:"deler seg i tre, immun mot stemning",stress:12},lobbyMini:{name:"Mini-lobbyist",hp:14,speed:2.7,embers:1,anim:14,puff:"#ffe08a",resist:{speaker:.5,pizza:1.5},noMood:!0,stress:8},drone:{name:"Overvåkings-drone",hp:9,speed:4.6,embers:1,anim:30,puff:"#c8d8ff",flying:!0,alt:3.6,resist:{bubble:1.5,lamp:1.5,kite:.5},info:"rask sverm i lufta"},balloon:{name:"Ballong-byråkraten",hp:150,speed:1.05,embers:14,anim:2,puff:"#ffffff",flying:!0,alt:5.6,resist:{bubble:.5,kite:1.5},info:"seig, høyt oppe"},heli:{name:"Mini-helikopteret",hp:48,speed:2.5,embers:7,anim:40,puff:"#ffffff",flying:!0,alt:4.6,blind:{every:6,dur:3,range:9},resist:{ring:.5,kite:1.5},info:"søkelys blender et tårn i 3 s"}},SM=[[{type:"clerk",n:8,gap:1.4,path:0}],[{type:"clerk",n:6,gap:1.3,path:"both"}],[{type:"swarm",n:7,gap:.35,path:1},{type:"clerk",n:6,gap:1.2,path:0,at:4},{type:"swarm",n:7,gap:.35,path:0,at:12}],[{type:"tank",n:3,gap:4,path:0},{type:"clerk",n:6,gap:1,path:1,at:2}],[{type:"gull",n:5,gap:2.5},{type:"clerk",n:7,gap:1,path:"both",at:3}],[{type:"tank",n:3,gap:3.5,path:"both"},{type:"swarm",n:8,gap:.3,path:"both",at:8}],[{type:"gull",n:8,gap:1.6},{type:"clerk",n:9,gap:.8,path:"both",at:2}],[{type:"tank",n:4,gap:3,path:"both"},{type:"swarm",n:10,gap:.3,path:"both",at:6},{type:"gull",n:4,gap:2,at:10}],[{type:"gull",n:10,gap:1.2},{type:"tank",n:4,gap:3,path:"both",at:3},{type:"clerk",n:10,gap:.7,path:"both",at:8}],[{type:"clerk",n:10,gap:.6,path:"both"},{type:"tank",n:5,gap:2.5,path:"both",at:6},{type:"swarm",n:12,gap:.25,path:"both",at:14},{type:"gull",n:12,gap:1,at:18}]],wM="modulepreload",EM=function(i,e){return new URL(i,e).href},yf={},TM=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(t.map(c=>{if(c=EM(c,n),c in yf)return;yf[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!n)for(let g=o.length-1;g>=0;g--){const _=o[g];if(_.href===c&&(!u||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${h}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":wM,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((g,_)=>{p.addEventListener("load",g),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},bf="glodevokteren-",Sf="ABCDEFGHJKLMNPQRSTUVWXYZ",Vc=3,AM=9e3,CM=14e3,wf=6e3;function RM(){let i="";for(let e=0;e<4;e++)i+=Sf[Math.floor(Math.random()*Sf.length)];return i}function Hc(i=""){return i.toUpperCase().replace(/[^A-Z]/g,"").slice(0,4)}let Nl=null;async function PM(){return Nl||(Nl=(await TM(async()=>{const{Peer:i}=await import("./bundler-DrDBPFLh.js");return{Peer:i}},[],import.meta.url)).Peer),Nl}const fa={network:"Mistet kontakten med koblingstjenesten. Sjekk nettet.","server-error":"Koblingstjenesten svarer ikke akkurat nå. Prøv igjen om litt.","socket-error":"Koblingstjenesten svarer ikke akkurat nå. Prøv igjen om litt.","socket-closed":"Mistet kontakten med koblingstjenesten.","browser-incompatible":"Nettleseren støtter ikke nettspill (WebRTC).",webrtc:"Klarte ikke å koble direkte. Nettet ditt blokkerer kanskje peer-to-peer (vanlig på mobilnett/jobbnett)."};function Ef(i={}){const e={role:null,code:"",slot:0,players:[],stats:{sentBytes:0,recvBytes:0,sentMsgs:0,recvMsgs:0}};let t=null,n=null,s=0,r=!1;const o=new Map,a=m=>{var f;r||(f=i.onError)==null||f.call(i,m)},l=()=>performance.now(),c=(m,f)=>{if(!(m!=null&&m.open))return;const M=JSON.stringify(f);e.stats.sentBytes+=M.length,e.stats.sentMsgs++,m.send(M)},u=m=>{e.stats.recvBytes+=m.length,e.stats.recvMsgs++;try{return JSON.parse(m)}catch{return null}},h=()=>{var m;e.players=[{slot:0,name:e.hostName},...[...o].map(([f,M])=>({slot:f,name:M.name}))].sort((f,M)=>f.slot-M.slot);for(const f of o.values())c(f.conn,{t:"lobby",players:e.players});(m=i.onLobby)==null||m.call(i,e.players)},d=m=>{var M;const f=o.get(m);if(f){o.delete(m);try{f.conn.close()}catch{}(M=i.onLeave)==null||M.call(i,m,f.name),h()}};function p(m){return PM().then(f=>new Promise((M,b)=>{const x=m?new f(m,{debug:0,serialization:"raw"}):new f({debug:0}),C=setTimeout(()=>b(new Error("Fikk ikke kontakt med koblingstjenesten (PeerJS). Sjekk nettet og prøv igjen.")),AM);x.on("open",()=>{clearTimeout(C),M(x)}),x.on("error",S=>{clearTimeout(C),S.type==="unavailable-id"?b(Object.assign(new Error("taken"),{taken:!0})):x.open||b(new Error(fa[S.type]||`Nettfeil: ${S.type}`))})}))}e.host=async m=>{e.role="host",e.slot=0,e.hostName=m||"Vokter 1";for(let f=0;;f++){const M=RM();try{t=await p(bf+M),e.code=M;break}catch(b){if(!b.taken||f>4)throw e.role=null,b}}return t.on("error",f=>{f.type!=="peer-unavailable"&&a(fa[f.type]||`Nettfeil: ${f.type}`)}),t.on("connection",f=>{f.on("open",()=>{var x;let M=1;for(;o.has(M);)M++;if(M>=Vc||e.closedRoom){c(f,{t:"refuse",why:e.closedRoom?"Spillet er allerede i gang.":`Rommet er fullt (${Vc} spillere).`}),setTimeout(()=>f.close(),300);return}const b=String(((x=f.metadata)==null?void 0:x.name)||`Vokter ${M+1}`).slice(0,14);o.set(M,{conn:f,name:b,seen:l()}),c(f,{t:"hello",slot:M,world:e.world,tid:e.tid}),h(),f.on("data",C=>{var A;const S=o.get(M);if(!S||S.conn!==f)return;S.seen=l();const E=u(C);E&&E.t!=="ping"&&((A=i.onMessage)==null||A.call(i,E,M))}),f.on("close",()=>{var C;((C=o.get(M))==null?void 0:C.conn)===f&&d(M)}),f.on("error",()=>{var C;((C=o.get(M))==null?void 0:C.conn)===f&&d(M)})})}),_(),h(),e.code},e.join=async(m,f)=>(e.role="guest",e.code=Hc(m),t=await p(null),new Promise((M,b)=>{let x=!1;const C=(E,A)=>{x||(x=!0,clearTimeout(S),E(A))},S=setTimeout(()=>C(b,new Error("Fikk ikke koblet til verten. Enten er koden feil, eller nettet blokkerer direkte kobling (vanlig på mobilnett/jobbnett).")),CM);t.on("error",E=>{E.type==="peer-unavailable"?C(b,new Error(`Fant ikke rom ${e.code}. Sjekk koden.`)):x?E.type==="webrtc"&&a(fa.webrtc):C(b,new Error(fa[E.type]||`Nettfeil: ${E.type}`))}),n=t.connect(bf+e.code,{serialization:"raw",reliable:!0,metadata:{name:f}}),n.on("data",E=>{var y,v;e.hostSeen=l();const A=u(E);if(A){if(A.t==="hello"){e.slot=A.slot,C(M,A);return}if(A.t==="refuse"){C(b,new Error(A.why));return}if(A.t==="lobby"){e.players=A.players,(y=i.onLobby)==null||y.call(i,A.players);return}A.t!=="ping"&&((v=i.onMessage)==null||v.call(i,A,0))}}),n.on("close",()=>{x?g():C(b,new Error("Verten lukket koblingen."))}),n.on("open",()=>{e.hostSeen=l(),_()})}));function g(){var m;r||(r=!0,(m=i.onHostGone)==null||m.call(i),e.close())}function _(){clearInterval(s),s=setInterval(()=>{const m=l();if(e.role==="host")for(const[f,M]of o)m-M.seen>wf?d(f):m-(M.pinged||0)>1e3&&(M.pinged=m,c(M.conn,{t:"ping"}));else e.role==="guest"&&n&&(m-e.hostSeen>wf?g():c(n,{t:"ping"}))},1e3)}return e.send=m=>c(n,m),e.sendTo=(m,f)=>{var M;return c((M=o.get(m))==null?void 0:M.conn,f)},e.broadcast=m=>{if(!o.size)return;const f=JSON.stringify(m);for(const M of o.values())M.conn.open&&(e.stats.sentBytes+=f.length,e.stats.sentMsgs++,M.conn.send(f))},e.guestCount=()=>o.size,e.close=()=>{clearInterval(s);for(const m of o.values())try{m.conn.close()}catch{}o.clear();try{n==null||n.close()}catch{}try{t==null||t.destroy()}catch{}t=null,n=null},addEventListener("pagehide",()=>e.close()),e}const Jt=i=>document.getElementById(i),Tf=["#f2c23c","#4fb3d9","#c46bd6"],Ao=i=>Tf[i%Tf.length];function LM(i){const e=Jt("net"),t=Jt("net-status"),n=Jt("net-players"),s=Jt("net-share");let r=null,o=!1,a="";try{a=localStorage.getItem("glod-name")||""}catch{}Jt("net-name").value=a,Jt("net-name").addEventListener("input",m=>{try{localStorage.setItem("glod-name",m.target.value.trim())}catch{}});const l=(m,f=!1)=>{t.textContent=m,t.classList.toggle("err",f)},c=m=>(Jt("net-name").value.trim()||m).slice(0,14),h={onLobby:m=>{n.innerHTML=m.map(f=>`<li><i style="background:${Ao(f.slot)}"></i>${DM(f.name)}${f.slot===0?" <small>(vert)</small>":""}${r&&f.slot===r.slot?" <small>← deg</small>":""}</li>`).join(""),(r==null?void 0:r.role)==="host"&&(Jt("net-go").disabled=!1,Jt("net-go").textContent=m.length>1?`Start på ${i.worldName} (${m.length} spillere)`:"Start (venter på andre …)")},onMessage:(m,f)=>{var M;if(m.t==="start"&&r.role==="guest"){e.dataset.state="playing",i.onGuestStart(r);return}(M=i.onMessage)==null||M.call(i,m,f)},onLeave:(m,f)=>{var M;return(M=i.onLeave)==null?void 0:M.call(i,m,f)},onError:m=>l(m,!0),onHostGone:()=>{var m;return(m=i.onHostGone)==null?void 0:m.call(i)}},d=m=>{e.dataset.state=m,Jt("btn-start").classList.toggle("hidden",m==="host"||m==="guest"||m==="connecting")},p=m=>{r==null||r.close(),r=null,o=!1,d("idle"),n.innerHTML="",s.classList.add("hidden"),m?l(m,!0):l("")};Jt("btn-net").addEventListener("click",()=>{e.classList.toggle("hidden"),Jt("btn-net").classList.toggle("sel",!e.classList.contains("hidden"))}),Jt("net-host").addEventListener("click",async()=>{if(!o){o=!0,d("connecting"),l("Lager rom …"),r=Ef(h),r.world=i.worldIndex,r.tid=i.timeOfDay;try{const m=await r.host(c("Vokter 1"));d("host");const f=`${location.origin}${location.pathname}?join=${m}`;Jt("net-code").textContent=m,Jt("net-link").value=f,s.classList.remove("hidden"),l(`Rom ${m} er åpent. Del koden eller lenken (maks ${Vc} spillere).`)}catch(m){p(m.message)}}});const g=async m=>{const f=Hc(m);if(!o){if(f.length!==4){l("Koden har fire bokstaver.",!0);return}o=!0,d("connecting"),l(`Kobler til rom ${f} …`),r=Ef(h);try{const M=await r.join(f,c("Vokter"));if(M.world!==i.worldIndex||M.tid&&M.tid!==i.timeOfDay){l("Henter vertens verden …"),r.close(),location.href=`${location.pathname}?world=${M.world}&tid=${M.tid||"dag"}&join=${f}`;return}d("guest"),l(`Du er med i rom ${f}. Venter på at verten starter …`)}catch(M){p(M.message)}}};Jt("net-join").addEventListener("click",()=>g(Jt("net-code-in").value)),Jt("net-code-in").addEventListener("keydown",m=>{m.stopPropagation(),m.key==="Enter"&&g(m.target.value)}),Jt("net-name").addEventListener("keydown",m=>m.stopPropagation()),Jt("net-copy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(Jt("net-link").value),l("Lenke kopiert.")}catch{Jt("net-link").select()}}),Jt("net-leave").addEventListener("click",()=>p()),Jt("net-go").addEventListener("click",()=>{(r==null?void 0:r.role)==="host"&&(r.closedRoom=!0,r.broadcast({t:"start"}),d("playing"),i.onHostStart(r))});const _=Hc(i.params.get("join")||"");return _&&(e.classList.remove("hidden"),Jt("net-code-in").value=_,g(_)),{get net(){return r},say:l}}function DM(i){return String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}const ln=new URLSearchParams(location.search),Hd=ln.has("demo");if(ln.has("unlockall"))try{localStorage.setItem("glod-unlocked",String(js.length))}catch{}let bn=Number(ln.get("world"));if(!Number.isInteger(bn))try{bn=Number(localStorage.getItem("glod-world"))||0}catch{bn=0}bn=Math.max(0,Math.min((ln.has("join")?js.length:Mo())-1,bn));try{localStorage.setItem("glod-world",String(bn))}catch{}const un=js[bn],Ru=T_(un,SM),IM=.3;function UM(){return 1+IM*(kt.length-1)}const zM=Math.max(1,Math.min(20,Number(ln.get("speed"))||1)),es=matchMedia("(pointer: coarse)").matches||ln.has("mobile"),Wc={high:{shadow:2048,dprCap:2},low:{shadow:1024,dprCap:2}};let Ti=es?"low":"high";try{const i=localStorage.getItem("glod-quality");(i==="high"||i==="low")&&(Ti=i)}catch{}(ln.get("q")==="high"||ln.get("q")==="low")&&(Ti=ln.get("q"));const Ws={mobile:es,shadow:Wc[Ti].shadow,dprCap:Wc[Ti].dprCap},NM={high:["rock","tree","tower","figure"],low:["rock","tree","tower","figure"]};function Wd(i){const e=ln.has("ol")?ln.get("ol").split(","):NM[i];wd(Object.fromEntries(["rock","tree","tower","figure"].map(t=>[t,e.includes(t)])))}Wd(Ti);const Xd=document.getElementById("game"),zn=new _1({canvas:Xd,antialias:!es,powerPreference:"high-performance",preserveDrawingBuffer:ln.has("shot")});let fs=Math.min(devicePixelRatio||1,Ws.dprCap);zn.setPixelRatio(fs);zn.shadowMap.enabled=!0;zn.shadowMap.type=zf;zn.toneMapping=nu;let gs="dag";try{gs=localStorage.getItem("glod-tid")||"dag"}catch{}ln.get("tid")&&(gs=ln.get("tid"));const ti=gs==="skumring"&&un.skyDusk?un.skyDusk:un.sky;zn.toneMappingExposure=ti.exposure;zn.info.autoReset=!1;const vt=new M1,qd=new Ce(ti.fog);vt.background=qd;vt.fog=new vu(qd,...un.fog??[55,115]);const qt=new Zn(38,1,.5,200),kM=new t_(ti.hemiSky,ti.hemiGround,ti.hemi);vt.add(kM);const Mn=new s_(ti.sun,ti.sunI);Mn.castShadow=!0;Mn.shadow.mapSize.set(Ws.shadow,Ws.shadow);Object.assign(Mn.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:90});Mn.shadow.bias=-8e-4;Mn.shadow.normalBias=.03;vt.add(Mn,Mn.target);g_(vt);const Ge=V_(vt,Ws,un);Ge.grass.setLevel(Ti);const FM=rM(vt,Ge,Ws,un,gs,qt),An=oM(Ge);window.__nav=An;const Ct=Gd(vt,es?450:800),_s=Gd(vt,es?120:220,{blending:ds,size:1.6,opacity:.45,fadeTo:ti.fog}),Co=sM(zn,vt,qt,ti.grade);Co.setLevel(Ti);const _t=gM(Xd),Yd=xM(_t);_t.menu=Yd;_t.panelOpen=()=>!Ei.classList.contains("hidden");const uo=document.createElement("div");uo.id="toast";document.body.appendChild(uo);let Af=0;function La(i){uo.textContent=i,uo.classList.add("on"),clearTimeout(Af),Af=setTimeout(()=>uo.classList.remove("on"),3200)}_t.onPad=(i,e)=>{La(i==="connect"?`🎮 Kontroll tilkoblet: ${hM(e)}`:"🎮 Kontroll frakoblet"),ei.device=null,ct("pause").classList.contains("hidden")||ks(!0,q.confirming)};function Ro(){const i=innerWidth,e=innerHeight;zn.setSize(i,e,!1),qt.aspect=i/e,qt.updateProjectionMatrix(),Co.setSize(i,e),m_(es?2:2.2,zn.getPixelRatio(),i,e)}function $d(i){Ti=i;try{localStorage.setItem("glod-quality",i)}catch{}const e=Wc[i];Mn.shadow.mapSize.set(e.shadow,e.shadow),Mn.shadow.map&&(Mn.shadow.map.dispose(),Mn.shadow.map=null),fs=Math.min(devicePixelRatio||1,e.dprCap),zn.setPixelRatio(fs),Co.setLevel(i),Ge.grass.setLevel(i),Wd(i),Ro(),document.getElementById("btn-quality").textContent=i==="high"?"Høy":"Lav"}addEventListener("resize",Ro);Ro();const q={phase:"title",wave:0,timer:0,embers:et.startEmbers,lights:zr,spawnQueue:[],leaks:{},seen:{},time:0,sel:0,paused:!1},Xc=et.upgradeTime.length+1,Li=["ring","chips","speaker","bubble","kite","pizza","lamp"];let ji=un.camYaw??0;const Cf=new r_,hn=[],nn=[],vi=[],Hn=[],Er=[],ho=[],Oe={host:!1,guest:!1,net:null,sendT:0,goal:null,ids:0,ev:[],snapT:0};let Qt=Vr(Id(),"figure"),D={x:Ge.lighthouse.pos.x+1,z:Ge.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,walk:0,charge:0,chargeTower:null,face:Math.PI,goal:null,chill:et.chillMax,inv:0,faint:0,faints:0,roll:null,stillT:0,rollBlock:null};Qt.position.set(D.x,Ge.heightAt(D.x,D.z),D.z);vt.add(Qt);const jd=ti.lantern??2.6,Pu=new _o("#ffcf70",jd,6,1.8);Pu.position.set(.8,.45,-.3);Qt.add(Pu);const kt=[{slot:0,K:D,mesh:Qt,input:_t,sel:0,buildMode:!1,local:!0}];let mn=kt[0],Vt=_t;function Rf(i){mn.sel=q.sel,mn.buildMode=q.buildMode,mn=i,D=i.K,Qt=i.mesh,Vt=i.input,q.sel=i.sel,q.buildMode=i.buildMode}function Ii(i,e){if(i===mn)return e();const t=mn;Rf(i);try{return e()}finally{Rf(t)}}const Kd=(i=0)=>({x:Ge.lighthouse.pos.x+1+i*1.2,z:Ge.lighthouse.pos.z+7.5-i*.6,vx:0,vz:0,carrying:!1,stun:0,walk:0,charge:0,chargeTower:null,face:Math.PI,goal:null,chill:et.chillMax,inv:0,faint:0,faints:0,roll:null,stillT:0,rollBlock:null});function Lu(i,e,t=()=>!0){let n=null,s=1/0;for(const r of kt){const o=Math.hypot(r.K.x-i,r.K.z-e);o<s&&t(r)&&(s=o,n=r)}return n}const ct=i=>document.getElementById(i),rn={chill:ct("hud-chill"),lights:ct("hud-lights"),embers:ct("hud-embers"),wave:ct("hud-wave"),timer:ct("hud-timer")},Ji=ct("hint"),Ei=ct("build-panel"),Du=ct("btn-next"),Iu=ct("fps");ln.has("debug")||Iu.classList.add("hidden");let ei={};function Vn(i,e,t,n){ei[e]!==t&&(ei[e]=t,i.querySelector("b").textContent=t,n&&(i.classList.remove(n),i.offsetWidth,i.classList.add(n)))}const OM=4;let Zd=0;function qc(i){if(Ji.textContent===i)return;Ji.textContent=i,Zd=0,Ji.classList.remove("faded");const e=Ei.classList.contains("hidden")?null:Ei.getBoundingClientRect();Ji.style.bottom=e&&e.height?`${Math.round(innerHeight-e.top+6)}px`:""}function BM(i){(Zd+=i)>OM&&Ji.classList.add("faded")}function Uu(i){q.phase="prep",q.timer=i,Du.classList.remove("hidden"),GM()}function GM(){if(Oe.guest){q.spawnPoints=Oe.spawnPoints||[],q.spawnPoints.length&&$c();return}const i=q.wave+1,e=i===1?1:i<=3?2:2+Math.floor(Math.random()*3);q.spawnPoints=An.coastPoints(e,24),q.spawnPoints.length||(q.spawnPoints=An.coastPoints(e,8,{near:12,minFrac:.5})),q.spawnPoints.length||(q.spawnPoints=An.roadEnds().slice(0,e)),Oe.host&&Oe.ev.push(["sp",q.spawnPoints.map(t=>[+t[0].toFixed(2),+t[1].toFixed(2)])]),$c()}function zu(){q.wave+=1,q.phase="wave",Du.classList.add("hidden"),q.spawnQueue=[];for(const i of Ru[q.wave-1]){const e=q.wave<=et.earlyScale.length?q.wave-1:-1,t=q.spawnPoints.length,n=To[i.type].flying?un.balance.air??1:1,s=Math.max(1,Math.round(i.n*(un.balance.count||1)*n*(e>=0?et.earlyScale[e]:1)));if(i.path==="both"){const r=Math.ceil(s/Math.min(2,t));for(let o=0;o<t;o++)for(let a=0;a<r;a++)q.spawnQueue.push({t:(i.at??0)+a*i.gap+o*.3,type:i.type,path:o})}else{const r=i.path??0;for(let o=0;o<s;o++)q.spawnQueue.push({t:(i.at??0)+o*i.gap,type:i.type,path:(r+o%2)%t})}}q.spawnQueue.sort((i,e)=>i.t-e.t),q.waveClock=0,Lt.wave(),en==null||en.setIntensity(1),Vn(rn.wave,"wave",q.wave,"bump")}function qa(i,e){var l,c;const t=To[i],n=Vr(I_(i),"figure"),s=t.hp*(1+et.hpGrowth*(q.wave-1))*un.balance.hp*(((c=(l=un.balance.types)==null?void 0:l[i])==null?void 0:c.hp)??1)*UM(),r={id:++Oe.ids,type:i,def:t,mesh:n,hp:s,maxHp:s,slow:0,phase:Math.random()*6,alive:!0,speedMul:un.balance.speed*(t.flying?un.balance.airSpeed??1:1),lane:(Math.random()-.5)*1.4};r.var=.95+Math.random()*.1,r.speedMul*=.95+Math.random()*.1,n.scale.setScalar(r.var),r.blinkT=Math.random()*4;const o=q.spawnPoints[e%q.spawnPoints.length]||[0,50],a=Ge.lighthouse.pos;if(t.flying){const u=Math.atan2(o[1]-a.z,o[0]-a.x)+(Math.random()-.5)*.5,h=a.x+Math.cos(u)*66,d=a.z+Math.sin(u)*66;r.x=h,r.z=d,r.y=t.alt||4,r.dist0=Math.hypot(a.x-h,a.z-d),r.hitCd=0}else r.x=o[0]+(Math.random()-.5)*1.5,r.z=o[1]+(Math.random()-.5)*1.5,r.y=Ge.heightAt(r.x,r.z),r.remain=An.at(r.x,r.z);return n.position.set(r.x,r.y,r.z),vt.add(n),hn.push(r),!q.seen[i]&&i!=="lobbyMini"&&(q.seen[i]=!0,VM(r)),r}const Yc={ring:"💨",chips:"🥔",speaker:"🔊",bubble:"🫧",kite:"🪁",pizza:"🍕",lamp:"🌋"};function Jd(i){const e=Object.entries(i.resist||{}),t=e.filter(([,s])=>s<1).map(([s])=>Yc[s]).join(""),n=e.filter(([,s])=>s>1).map(([s])=>Yc[s]).join("");return{tough:t+(i.shield?"📒":""),weak:n}}const $i=[],Ya=document.createElement("div");Ya.id="tags";document.body.appendChild(Ya);function VM(i){const{tough:e,weak:t}=Jd(i.def),n=document.createElement("div");n.className="enemy-tag",n.innerHTML=`<b>${i.def.flying?"🪶":"🐾"} ${i.def.name}</b>${e?`<span>🛡️${e}</span>`:""}${t?`<span>💥${t}</span>`:""}`,Ya.appendChild(n),$i.push({m:i,el:n,t:0}),(q.wave>1||i.def.flying)&&on(`Ny fiende: ${i.def.name}${e?` · tåler ${e}`:""}${t?` · svak mot ${t}`:""}`)}const bo=document.createElement("div");bo.id="upgbars";document.body.appendChild(bo);const Da=[];function HM(){var i;Da.length=0,bo.style.visibility=q.paused?"hidden":"";for(const e of nn){if(!e.upg){e.upgEl&&(e.upgEl.remove(),e.upgEl=null);continue}e.upgEl||(e.upgEl=document.createElement("div"),e.upgEl.className="upg-bar",e.upgEl.innerHTML='<div class="upg-arrows"></div><div class="upg-track"><i></i></div><span></span>',bo.appendChild(e.upgEl));const t=e.upgEl,n=Math.min(1,e.upg.t/e.upg.dur),s=((i=D.roll)==null?void 0:i.tower)===e?D.roll:null,r=s?s.seq.join()+s.i:"";t.dataset.k!==r&&(t.dataset.k=r,t.firstChild.innerHTML=s?s.seq.map((h,d)=>`<b class="${d<s.i?"lit":d===s.i?"next":""}">${{rU:"▲",rR:"▶",rD:"▼",rL:"◀"}[h]}</b>`).join(""):""),s!=null&&s.shake&&(s.shake=!1,t.firstChild.classList.remove("shake"),t.offsetWidth,t.firstChild.classList.add("shake"),t.firstChild.onanimationend=()=>t.firstChild.classList.remove("shake")),e.upgReset&&(e.upgReset=!1,t.classList.remove("reset"),t.offsetWidth,t.classList.add("reset")),t.children[1].firstChild.style.width=`${(100*n).toFixed(1)}%`;const o=e.upg.t>0||s?`nv. ${e.level+1} · ${Math.ceil(e.upg.dur-e.upg.t)} s igjen`:`nv. ${e.level+1} · stå stille for å rulle`;t.lastChild.textContent!==o&&(t.lastChild.textContent=o),yt.set(e.x,e.y+2.9*e.mesh.scale.y,e.z).project(qt);const a=yt.z<1&&Math.abs(yt.x)<1&&Math.abs(yt.y)<1;if(t.style.display=a?"flex":"none",!a)continue;const l=t.offsetWidth,c=t.offsetHeight,u={x:Math.min(Math.max((yt.x*.5+.5)*innerWidth,l/2+6),innerWidth-l/2-6),y:(-yt.y*.5+.5)*innerHeight,w:l,h:c,on:a};t.style.left=`${u.x}px`,t.style.top=`${u.y}px`,Da.push(u)}}function WM(i){var n;const e=$i.length?ct("hud").getBoundingClientRect().bottom:0;for(let s=$i.length-1;s>=0;s--){const r=$i[s];r.age=(r.age||0)+i,yt.set(r.m.x,r.m.y+(((n=r.m.mesh.userData.hpBar)==null?void 0:n.position.y)??2.2)+.5,r.m.z).project(qt);const o=yt.z<1&&Math.abs(yt.x)<1&&Math.abs(yt.y)<1;r.el.style.display=o?"flex":"none",o&&(r.t+=i);const a=r.el.offsetWidth,l=r.el.offsetHeight;r.x=Math.min(Math.max((yt.x*.5+.5)*innerWidth,a/2+6),innerWidth-a/2-6),r.y=Math.max((-yt.y*.5+.5)*innerHeight,e+l+6),r.w=a,r.h=l,r.on=o,r.el.style.opacity=String(Math.min(1,(6-r.t)/.6)),(r.t>6||r.age>90||!r.m.alive)&&(r.el.remove(),$i.splice(s,1))}const t=[...Da];for(const s of $i.filter(r=>r.on).sort((r,o)=>r.y-o.y)){let r=!0;for(let o=0;r&&o<8;o++){r=!1;for(const a of t)Math.abs(s.x-a.x)<(s.w+a.w)/2+4&&s.y>a.y-a.h-3&&s.y-s.h<a.y+3&&(s.y=a.y+s.h+4,r=!0)}t.push(s)}for(const s of $i)s.on&&(s.el.style.left=`${s.x}px`,s.el.style.top=`${s.y}px`)}function XM(i){return i.def.flying?1-Math.hypot(Ge.lighthouse.pos.x-i.x,Ge.lighthouse.pos.z-i.z)/i.dist0:1-Math.min(1,(i.remain??An.maxDist)/An.maxDist)}const Sa=[],Ns=document.createElement("div");Ns.id="warn";document.body.appendChild(Ns);function $c(){for(const t of Sa)vt.remove(t);Sa.length=0,Ns.innerHTML="";for(const[t,n]of q.spawnPoints){const s=new lt(Qd,new Ut({color:"#ff7a3a",transparent:!0,opacity:.8,depthWrite:!1}));s.position.set(t,Math.max(Ge.heightAt(t,n),.08)+.1,n);const r=new lt(qM,new Ut({color:"#ff8a3a",transparent:!0,opacity:.35,blending:ai,depthWrite:!1,fog:!1}));r.position.y=4,s.add(r),vt.add(s),Sa.push(s);const o=document.createElement("div");o.className="warn-arrow",o.innerHTML='<span class="arr">➤</span><span class="kind"></span>',Ns.appendChild(o)}const i=q.spawnPoints.length,e=q.spawnPoints.map(()=>({air:!1,ground:!1}));for(const t of Ru[q.wave]||[]){const n=t.path==="both"?e.map((s,r)=>r):[(t.path??0)%i,((t.path??0)+1)%i];for(const s of n)e[s][To[t.type].flying?"air":"ground"]=!0}e.forEach((t,n)=>{var r;const s=(r=Ns.children[n])==null?void 0:r.querySelector(".kind");s&&(s.textContent=(t.air?"🪶":"")+(t.ground?"🐾":""))})}const Qd=new Ms(1.6,2.2,32);Qd.rotateX(-Math.PI/2);const qM=new Yt(.5,1.4,8,12,1,!0);function YM(){var o;const i=q.phase==="prep"||q.phase==="wave"&&q.waveClock<8,e=Ns.children,t=i&&!Ei.classList.contains("hidden")?Ei.getBoundingClientRect():null,n=t&&Ji.textContent&&!Ji.classList.contains("faded"),s=i?ct("hud").getBoundingClientRect().bottom:0;Ns.style.visibility=Ya.style.visibility=q.paused?"hidden":"";const r=t?n?Math.min(t.top,Ji.getBoundingClientRect().top):t.top:0;(o=q.spawnPoints)==null||o.forEach(([a,l],c)=>{const u=Sa[c],h=e[c];if(!u||!h)return;u.visible=i;const d=.5+.5*Math.sin(q.time*6);u.scale.setScalar(1+d*.35),u.material.opacity=.35+.5*d,yt.set(a,u.position.y,l).project(qt);const p=Math.abs(yt.x)>.92||Math.abs(yt.y)>.88||yt.z>1;if(h.style.display=i?"block":"none",h.classList.toggle("onscreen",!p),i&&!p&&(h.style.left=`${(yt.x*.5+.5)*innerWidth}px`,h.style.top=`${Math.max((-yt.y*.5+.5)*innerHeight-30,s+30)}px`,h.style.transform="translate(-50%, -50%)",h.firstChild.style.transform=""),i&&p){let g=yt.x,_=yt.y;yt.z>1&&(g=-g,_=-_);const m=Math.atan2(-_,g),f=Math.max(Math.abs(g),Math.abs(_))||1,M=Mt.clamp(g/f,-1,1),b=Mt.clamp(_/f,-1,1),x=(M*.46+.5)*innerWidth;let C=(-b*.44+.5)*innerHeight;t&&x>t.left-24&&x<t.right+24&&C>r-24&&(C=r-24),C=Math.max(C,s+30),h.style.left=`${x}px`,h.style.top=`${C}px`,h.style.transform=`translate(-50%, -50%) scale(${1+d*.25})`,h.firstChild.style.transform=`rotate(${m}rad)`}})}function Us(i,e,t){var n;if(i.alive){if(t&&(e*=((n=i.def.resist)==null?void 0:n[t.type])??1,i.def.shield&&t.type!=="lamp")){const s=t.x-i.x,r=t.z-i.z,o=Math.hypot(s,r)||1,a=Math.hypot(i.hx||0,i.hz||0)||1;(s*(i.hx||0)+r*(i.hz||0))/(o*a)>.35&&(e*=i.def.shield,Math.random()<.3&&Ct.emit(i.x,i.y+1,i.z,{n:2,color:"#d8c890",speed:1.5,up:1,life:.3}))}if(Oe.guest){i.hitT=.18,i.mesh.userData.hpBar.visible=!0;return}i.hp-=e,i.hitT=.18,i.mesh.userData.hpBar.visible=!0,i.hp<=0&&ep(i)}}function ep(i){if(i.alive=!1,i.chillT=0,U_(i),ho.push(i),Ct.emit(i.x,i.y+1.2,i.z,{n:12,color:i.def.puff,speed:1.6,up:2.2,life:.9,gravity:1.5}),Lt.chill(),Oe.host&&Oe.ev.push(["c",i.id]),!Oe.guest){Nu(i.x,i.y+.5,i.z,i.def.embers,i.def.flying),!i.def.flying&&Math.random()<et.bagChance&&ku(i.x,i.z);for(let e=0;e<(i.def.splits||0);e++){const t=qa("lobbyMini",0);t.x=i.x+(e-1)*.6,t.z=i.z+(e%2?.5:-.5),t.y=Ge.heightAt(t.x,t.z),t.mesh.position.set(t.x,t.y,t.z)}}}function $M(i){var e;for(let t=ho.length-1;t>=0;t--){const n=ho[t];n.chillT+=i;const s=n.chillT,r=n.mesh.userData.body;if(n.def.flying)n.y+=i*2.5,n.z+=i*3,(e=n.mesh.userData.wings)==null||e.forEach((a,l)=>a.rotation.z=Math.sin(s*6)*.4*(l?-1:1));else if(s<1.4){const a=Math.min(1,s/.4);r.position.y=-.25*a*(n.type==="tank"?1.3:1),r.rotation.x=.25*a,r.rotation.z=Math.sin(s*3)*.05}else{r.rotation.x=0,r.position.y=Math.abs(Math.sin(s*7))*.06;const[a,l]=An.dir(n.x,n.z),c=n.x-a*n.def.speed*.45*i,u=n.z-l*n.def.speed*.45*i;Ge.isWalkable(c,u)&&(n.x=c,n.z=u),n.y=Ge.heightAt(n.x,n.z),(a||l)&&(n.mesh.rotation.y=Math.atan2(a,l))}Math.random()<i*1.5&&Ct.emit(n.x,n.y+1.8,n.z,{n:1,color:"#c8ffb0",speed:.3,up:1,life:.8,gravity:-.4}),s>2.6&&!n.popped&&(n.popped=!0,_s.emit(n.x,n.y+.8,n.z,{n:8,color:"#eef6e8",speed:1.4,up:1.2,life:.7,gravity:-.5}));const o=Math.max(0,Math.min(1,(3.2-s)/.6));n.mesh.scale.setScalar(o*(n.var||1)*(s>2.6?1+Math.sin((s-2.6)*10)*.08:1)),n.mesh.position.set(n.x,n.y,n.z),s>3.2&&(vt.remove(n.mesh),ho.splice(t,1))}}function Nu(i,e,t,n,s=!1,r=1){if(Oe.guest)return;const o=Math.min(n,n>=6?3:n>=3?2:1);let a=n;for(let l=0;l<o;l++){const c=l===o-1?a:Math.ceil(n/o);a-=c;const u=Ud(),h=Math.random()*Math.PI*2,d=(1.2+Math.random()*1.8)*r,p={id:++Oe.ids,mesh:u,x:i,y:e,z:t,vx:Math.cos(h)*d,vz:Math.sin(h)*d,vy:5+Math.random()*2,life:et.emberLife,value:c,settled:!1,phase:Math.random()*6};u.scale.setScalar(.8+Math.min(c,6)*.08),vt.add(u),Hn.push(p)}}function Xs(i,e,t,n,s=()=>!0){let r=null,o=n;for(const a of i){if(!s(a))continue;const l=Math.hypot(a.x-e,a.z-t);l<o&&(o=l,r=a)}return r}function $a(){const i=Xs(Ge.plinths,D.x,D.z,et.reach,l=>!l.tower);if(i)return{x:i.x,z:i.z,y:i.y,plinth:i,ok:!0};const e=-Math.sin(D.face),t=-Math.cos(D.face),n=D.x+e*et.placeAhead,s=D.z+t*et.placeAhead,r=Ge.heightAt(n,s),o=Ge.lighthouse.pos;let a="";return r<.35?a="i vannet":Ge.extras.blocks(n,s)?a="i lavaen":Ge.pathDist(n,s)<1.9?a="på stien":Ge.slopeAt(n,s)>.6?a="for bratt":Math.hypot(n-o.x,s-o.z)<5.5?a="for nær fyret":nn.some(l=>Math.hypot(l.x-n,l.z-s)<et.minTowerGap)?a="for nær et annet tårn":Ge.plinths.some(l=>Math.hypot(l.x-n,l.z-s)<1.9)?a="oppå en sokkel (gå helt bort til den)":Ge.colliders.some(l=>!l.tower&&(l.x-n)**2+(l.z-s)**2<(l.r+.7)**2)&&(a="i veien for et tre eller en stein"),{x:n,z:s,y:r,plinth:null,ok:!a,why:a}}function Ia(i){const e=$a();if(!e.ok){Lt.deny(),on(`Ikke lov å bygge her: ${e.why}`);return}const t=zs[i];if(q.embers<t.cost){Lt.deny(),on(`Trenger ${t.cost} ✦ glør`),Vn(rn.embers,"embersBad",Math.random(),"bad");return}q.embers-=t.cost,tp(i,e),q.buildMode=!1,e.plinth&&on(`${t.name} på gammel sokkel: +25 % rekkevidde`)}function tp(i,e,t=0){const n=zs[i],s=Vr(z_(i),"tower");if(s.position.set(e.x,e.y,e.z),!e.plinth){const o=new lt(jM,KM);o.position.y=.04,o.receiveShadow=!0,s.add(o)}vt.add(s);const r={id:t||++Oe.ids,type:i,def:n,mesh:s,x:e.x,z:e.z,y:e.y,level:1,cd:.3,plinth:e.plinth,onPlinth:!!e.plinth};return e.plinth&&(e.plinth.tower=r),nn.push(r),Ge.colliders.push({x:e.x,z:e.z,r:1,tower:r}),Ct.emit(e.x,e.y+.3,e.z,{n:24,color:"#ffe3a0",speed:4,up:3,life:.8,gravity:5}),Lt.build(),r}const jM=new Yt(.95,1.05,.12,10),KM=new Wt({color:"#8a8478"}),Ki=new bt;{const i=new lt(new Vs(1,24),new Ut({transparent:!0,opacity:.35,depthWrite:!1}));i.rotation.x=-Math.PI/2;const e=new Ms(.965,1,64);e.rotateX(-Math.PI/2);const t=new lt(e,new Ut({transparent:!0,opacity:.6,depthWrite:!1})),n=new lt(new Yt(.55,.7,1.6,10),new Ut({transparent:!0,opacity:.25,depthWrite:!1}));n.position.y=.8,Ki.add(i,t,n),Ki.userData={disc:i,ring:t,pillar:n},Ki.visible=!1,Ki.renderOrder=20,vt.add(Ki)}function ZM(i,e,t){if(Ki.visible=i,!i)return;const n=e.ok,s=n?e.plinth?"#9fffb0":"#7be06a":"#ff5a4a",r=zs[t].range*(e.plinth?et.plinthBonus:1);Ki.position.set(e.x,e.y+.06,e.z);const o=Ki.userData;for(const a of[o.disc,o.ring,o.pillar])a.material.color.set(s);o.ring.scale.setScalar(r),o.ring.visible=n,o.pillar.visible=!e.plinth}const qi=(i,e)=>{const t=i.level-1;return e==="range"?i.def.range*(1+.12*t)*(i.onPlinth?et.plinthBonus:1):e==="dmg"?i.def.dmg*[1,1.7,2.6,3.9,5.85][t]:e==="rate"?i.def.cooldown/(1+.15*t):i.def[e]},wa=[];function np(i){const e=Dd();Au(e,1),Qt.userData.roll.getWorldPosition(e.position),vt.add(e),wa.push({mesh:e,from:e.position.clone(),to:new V(i.x,i.y+1.3*i.mesh.scale.y,i.z),age:0})}function JM(i){for(let e=wa.length-1;e>=0;e--){const t=wa[e];t.age+=i;const n=Math.min(1,t.age/.45);t.mesh.position.lerpVectors(t.from,t.to,n),t.mesh.position.y+=Math.sin(n*Math.PI)*1.2,t.mesh.rotation.z+=i*14,n>=1&&(vt.remove(t.mesh),wa.splice(e,1),_s.emit(t.to.x,t.to.y+.3,t.to.z,{n:6,color:"#e8e2dc",speed:1.2,up:1.4,life:1.2,gravity:-.3}))}}function QM(i){for(const e of kt)e.K.rollP=-1;JM(i);for(const e of nn){if(e.cd-=i,e.upg&&Oe.guest)wi(e,Math.min(1,e.upg.t/e.upg.dur));else if(e.upg){const c=kt.find(h=>{var d;return h.K.stun<=0&&((d=h.K.roll)==null?void 0:d.tower)===e})||null,u=!!c;Ii(c||mn,()=>{if(u)e.upg.t+=i,e.rollEase=(e.rollEase??0)+(Math.min(1,e.upg.t/e.upg.dur)-(e.rollEase??0))*(1-Math.exp(-i/.05)),D.rollP=Math.min(1,e.rollEase),D.rollTower=e;else if(e.upg.t>0){const h=Qt.userData.roll.getWorldPosition(Ar);Ct.emit(h.x,h.y,h.z,{n:14,color:"#4f8f3a",speed:1.4,up:.8,life:.8,gravity:6}),Ct.emit(h.x,h.y,h.z,{n:5,color:"#fffdf5",speed:1,up:.6,life:.7,gravity:5}),e.upg.t=0,e.rollEase=0,e.upgReset=!0,Po("😩"),Vt.rumble(220,.5),on(`Rullingen ble avbrutt! Start på nytt ved ${e.def.name}`)}}),wi(e,Math.min(1,e.upg.t/e.upg.dur)),u&&Math.random()<i*8&&Ct.emit(c.K.x,c.mesh.position.y+2.2,c.K.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),e.upg.t>=e.upg.dur&&(!u||e.rollEase>=.97)&&(Ii(c||mn,()=>np(e)),Oe.host&&Oe.ev.push(["u",e.id,c?c.slot:-1]),c&&(c.K.rollP=-1,c.K.roll=null),e.rollEase=0,e.upg=null,e.level+=1,Cu(e,e.level),wi(e,0),Ct.emit(e.x,e.y+1.2,e.z,{n:30,color:"#8ff0ff",speed:4,up:4,life:.9,gravity:5}),Lt.upgrade(),on(`${e.def.name} er nå nivå ${e.level}`))}if(e.armBack>0&&(e.armBack-=i,e.armBack<=0&&(e.mesh.userData.arm.rotation.x=-.35)),e.type==="lamp"&&e.mesh.userData.blobs.forEach((c,u)=>c.position.y=.75+Math.sin(q.time*.8+u*2.1)*.35),e.blind>0){e.blind-=i,Math.random()<i*8&&Ct.emit(e.x,e.y+2,e.z,{n:1,color:"#fff6c8",speed:.6,up:.8,life:.5,gravity:-.4});continue}const t=qi(e,"range");let n=null,s=-1;for(const c of hn){if(!c.alive||(c.def.flying?!e.def.air:e.def.ground===!1)||Math.hypot(c.x-e.x,c.z-e.z)>t)continue;const u=XM(c);u>s&&(s=u,n=c)}const r=e.mesh.userData.head;if(e.type==="speaker"){const c=Math.max(0,Math.sin(q.time*7.3));r.rotation.z=Math.sin(q.time*3.65)*.05,e.mesh.userData.woofers.forEach(u=>u.scale.set(1+c*.15,1,1+c*.15)),n&&(r.rotation.y+=za(Math.atan2(-(n.x-e.x),-(n.z-e.z)),r.rotation.y)*Math.min(1,i*3))}else if(n){const c=Math.atan2(-(n.x-e.x),-(n.z-e.z));r.rotation.y+=za(c,r.rotation.y)*Math.min(1,i*10)}if(!n||e.cd>0)continue;e.cd=qi(e,"rate");const o=e.x,a=e.y+1.4*e.mesh.scale.y,l=e.z;if(e.type==="ring"){const c=N_();c.position.set(o,a-.3,l),vt.add(c),vi.push({kind:"bolt",src:e,mesh:c,target:n,dmg:qi(e,"dmg"),tx:n.x,ty:n.y,tz:n.z,age:0}),Lt.puff()}else if(e.type==="chips"){const c=zd();c.position.set(o,e.y+1,l),vt.add(c);const[u,h]=n.def.flying?[0,0]:An.dir(n.x,n.z),d=n.x+u*n.def.speed*.6,p=n.z+h*n.def.speed*.6;vi.push({kind:"shell",src:e,mesh:c,sx:o,sy:e.y+1,sz:l,ex:d,ez:p,ey:Ge.heightAt(d,p),t:0,dur:.95,dmg:qi(e,"dmg"),splash:e.def.splash*(1+.1*(e.level-1))}),Ct.emit(o,e.y+1.3,l,{n:6,color:"#d8d0c0",speed:1,up:2,life:.5,gravity:-1}),Lt.mortar()}else if(e.type==="speaker"){for(const u of hn)!u.alive||Math.hypot(u.x-e.x,u.z-e.z)>t||(u.def.noMood||(u.slow=e.def.slowTime),Us(u,qi(e,"dmg"),e));const c=Nd();c.position.set(e.x,e.y+.3,e.z),vt.add(c),Er.push({mesh:c,t:0,r:t}),Ct.emit(e.x,e.y+1.8,e.z,{n:6,color:["#7be06a","#f2c94c","#ff7a5a"][Math.floor(Math.random()*3)],speed:2.2,up:1.6,life:.9,gravity:.5}),Lt.skank()}else if(e.type==="bubble"){const c=Fd();c.position.set(o,a+.2,l),vt.add(c),vi.push({kind:"bubble",src:e,mesh:c,target:n,dmg:qi(e,"dmg"),trap:e.def.trap,tx:n.x,ty:n.y,tz:n.z}),Lt.pickup()}else if(e.type==="kite"){if(vi.some(u=>u.kind==="kite"&&u.tower===e)){e.cd=.2;continue}const c=Vr(kd(),"tower");c.position.set(o,a,l),vt.add(c),vi.push({kind:"kite",mesh:c,tower:e,sx:o,sz:l,tx:n.x,tz:n.z,phase:"out",t:0,tick:0,dmg:qi(e,"dmg"),zone:e.def.zone*(1+.1*(e.level-1)),hover:e.def.hover}),Lt.puff()}else if(e.type==="pizza"){const c=F_();c.position.set(o,e.y+1.2,l),vt.add(c);const[u,h]=An.dir(n.x,n.z),d=n.x+u*n.def.speed*1.1,p=n.z+h*n.def.speed*1.1;vi.push({kind:"shell",src:e,pizza:!0,mesh:c,sx:o,sy:e.y+1.2,sz:l,ex:d,ez:p,ey:Ge.heightAt(d,p),t:0,dur:1.3,arc:7,dmg:qi(e,"dmg"),splash:e.def.splash*(1+.1*(e.level-1))}),e.mesh.userData.arm.rotation.x=.9,e.armBack=.5,Lt.mortar()}else if(e.type==="lamp"){for(const c of hn)!c.alive||Math.hypot(c.x-e.x,c.z-e.z)>t||(c.slow=Math.max(c.slow,e.def.slowTime),Us(c,qi(e,"dmg"),e));Math.random()<.3&&Ct.emit(e.x,e.y+1.6,e.z,{n:2,color:"#ff9a3a",speed:.8,up:1.2,life:.8,gravity:-.3})}}}function ey(i){var e;for(let t=vi.length-1;t>=0;t--){const n=vi[t];let s=!1;if(n.kind==="bolt"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y+(n.target.def.flying?0:.5),n.tz=n.target.z);const r=n.mesh.position,o=n.tx-r.x,a=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(o,a,l),u=18*i;n.age+=i,n.mesh.lookAt(n.tx,n.ty,n.tz),n.mesh.scale.setScalar(.7+n.age*2.2),c<=u+.3?(s=!0,n.target.alive&&(Us(n.target,n.dmg,n.src),_s.emit(n.tx,n.ty+.3,n.tz,{n:3,color:"#f4f0ea",speed:1,up:.8,life:.8,gravity:-.6}),Lt.hit())):r.set(r.x+o/c*u,r.y+a/c*u,r.z+l/c*u)}else if(n.kind==="shell"){n.t+=i/n.dur;const r=Math.min(1,n.t);if(n.mesh.position.set(n.sx+(n.ex-n.sx)*r,n.sy+(n.ey-n.sy)*r+Math.sin(Math.PI*r)*(n.arc||5),n.sz+(n.ez-n.sz)*r),n.mesh.rotation.set(r*9,r*5,0),n.t>=1){s=!0;for(const o of hn){if(!o.alive||o.def.flying)continue;const a=Math.hypot(o.x-n.ex,o.z-n.ez);a<n.splash&&Us(o,n.dmg*(a<n.splash*.4?1:.6),n.src)}Ct.emit(n.ex,n.ey+.3,n.ez,{n:26,color:n.pizza?"#ff7040":"#ffd060",speed:5,up:5,life:.7,gravity:12}),_s.emit(n.ex,n.ey+.3,n.ez,{n:4,color:"#f6e7c0",speed:1.5,up:1,life:.8,gravity:-.3}),Lt.crunch(),Bn=Math.max(Bn,.12)}}else if(n.kind==="bubble"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y,n.tz=n.target.z);const r=n.mesh.position,o=n.tx-r.x,a=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(o,a,l),u=13*i;n.mesh.scale.setScalar(1+Math.sin(q.time*12)*.06),c<=u+.3?(s=!0,n.target.alive&&(Us(n.target,n.dmg,n.src),n.target.trap=Math.max(n.target.trap||0,n.trap*Math.min(1,((e=n.target.def.resist)==null?void 0:e.bubble)??1))),Ct.emit(n.tx,n.ty,n.tz,{n:6,color:"#dff6ff",speed:2,up:1,life:.35})):r.set(r.x+o/c*u,r.y+a/c*u,r.z+l/c*u)}else if(n.kind==="kite"){n.t+=i;const r=n.mesh.position;if(n.mesh.userData.tailSegs.forEach((o,a)=>{o.rotation.x=Math.sin(q.time*5-a*.9)*.35,o.rotation.z=Math.sin(q.time*3.7-a*.7)*.25}),nn.includes(n.tower)||(n.phase="back"),n.phase==="out"){const o=n.tx-r.x,a=n.tz-r.z,l=Math.hypot(o,a),c=9*i;r.y+=(4.2-r.y)*Math.min(1,i*2),l<c?(n.phase="hover",n.t=0):(r.x+=o/l*c,r.z+=a/l*c)}else if(n.phase==="hover"){if(r.x=n.tx+Math.sin(q.time*1.7)*.6,r.z=n.tz+Math.cos(q.time*1.3)*.4,r.y=4.2+Math.sin(q.time*2.3)*.3,n.tick-=i,n.tick<=0){n.tick=.25;for(const o of hn)o.alive&&o.def.flying&&Math.hypot(o.x-r.x,o.z-r.z)<n.zone&&(Us(o,n.dmg*.4,n.tower),o.slow=Math.max(o.slow,.4));Ct.emit(r.x,r.y-.3,r.z,{n:2,color:"#ffd0b0",speed:1.5,up:-.5,life:.5,gravity:0})}n.t>n.hover&&(n.phase="back")}else{const o=n.sx-r.x,a=n.sz-r.z,l=Math.hypot(o,a),c=11*i;l<c?s=!0:(r.x+=o/l*c,r.z+=a/l*c)}n.mesh.rotation.set(Math.sin(q.time*3)*.2,q.time*.5,Math.cos(q.time*2.5)*.25)}s&&(vt.remove(n.mesh),vi.splice(t,1))}for(let t=Er.length-1;t>=0;t--){const n=Er[t];n.t+=i/(n.dur||.6),n.mesh.scale.setScalar(.5+n.t*n.r),n.mesh.material.opacity=.7*(1-n.t),n.t>=1&&(vt.remove(n.mesh),n.mesh.material.dispose(),Er.splice(t,1))}}function ty(i){var e,t;for(const n of hn){if(!n.alive)continue;n.phase+=i*n.def.anim;const s=n.slow>0?.5:1;n.slow-=i;let r=n.def.speed*s*(n.speedMul||1);n.trap>0?(n.trap-=i,r*=.15,n.bubbleFx||(n.bubbleFx=Fd(),n.bubbleFx.scale.setScalar(3.2),n.mesh.add(n.bubbleFx)),n.bubbleFx.visible=!0):n.bubbleFx&&(n.bubbleFx.visible=!1);const o=n.mesh.userData.body;if(n.def.flying){const l=Ge.lighthouse.pos;let c=l.x-n.x,u=l.z-n.z;const h=Lu(n.x,n.z),d=h.K,p=Math.hypot(d.x-n.x,d.z-n.z);let g=n.trap>0?1.1:n.def.alt||4.2;if(n.def.swoop&&p<6&&d.stun<=0&&n.hitCd<=0&&!(n.trap>0)){const x=Math.hypot(c,u);c=c/x*.5+(d.x-n.x)/p*.9,u=u/x*.5+(d.z-n.z)/p*.9,g=1.5}n.hitCd-=i;const _=Math.hypot(c,u)||1,m=Math.cos(q.time*1.3+n.lane*4)*(n.type==="balloon"?.4:1.2);n.x+=(c/_+-u/_*m*.35)*r*i,n.z+=(u/_+c/_*m*.35)*r*i,n.mesh.rotation.z=-m*(n.type==="balloon"?.05:.25);const f=Math.max(Ge.heightAt(n.x,n.z),0);n.y+=(f+g-n.y)*Math.min(1,i*2.5);const M=n.mesh.userData.blob;M&&(M.position.y=(f-n.y)/n.var+.05,M.material.opacity=1,M.scale.setScalar(1)),n.mesh.rotation.y=Math.atan2(-c,-u);const b=n.mesh.userData;if((e=b.wings)==null||e.forEach((x,C)=>x.rotation.z=Math.sin(n.phase)*.45*(C?-1:1)),(t=b.rotors)==null||t.forEach(x=>x.rotation.y+=i*40),b.rotor&&(b.rotor.rotation.y+=i*30,b.tail.rotation.x+=i*30),o.position.y=Math.sin(n.phase*.5)*(n.type==="balloon"?.3:.15),n.def.blind&&(n.blindCd=(n.blindCd??n.def.blind.every*.5)-i,b.beam&&(b.beam.visible=n.blindCd>n.def.blind.every-.8),n.blindCd<=0)){n.blindCd=n.def.blind.every;const x=Xs(nn,n.x,n.z,n.def.blind.range);x&&(x.blind=n.def.blind.dur,on(`${n.def.name} blendet ${x.def.name}!`)),p<5&&Ii(h,()=>Kc(et.airStress,n.x,n.z,!0))}n.def.swoop&&p<1.3&&Math.abs(n.y-h.mesh.position.y-1)<1.4&&d.stun<=0&&n.hitCd<=0&&Ii(h,()=>sy(n)),Math.hypot(l.x-n.x,l.z-n.z)<3.4&&jc(n)}else{const[l,c,u]=An.dir(n.x,n.z);n.remain=u;const h=Ge.lighthouse.pos,d=Math.hypot(h.x-n.x,h.z-n.z);if(d<4.3||u<.6){jc(n);continue}let p=l,g=c;!p&&!g&&(p=(h.x-n.x)/d,g=(h.z-n.z)/d),n.hx=(n.hx||0)+(p-(n.hx||0))*Math.min(1,i*6),n.hz=(n.hz||0)+(g-(n.hz||0))*Math.min(1,i*6);const _=Math.hypot(n.hx,n.hz)||1,m=n.lane*Math.min(1,d/10);n.x+=n.hx/_*r*i+-n.hz/_*m*i*.5,n.z+=n.hz/_*r*i+n.hx/_*m*i*.5,n.y=Ge.heightAt(n.x,n.z),n.mesh.rotation.y=Math.atan2(-n.hx,-n.hz);for(const f of kt){const M=f.K;M.inv<=0&&M.faint<=0&&Math.abs(M.x-n.x)<1.2&&Math.abs(M.z-n.z)<1.2&&Math.hypot(M.x-n.x,M.z-n.z)<1.1&&Ii(f,()=>Kc(n.def.stress??10,n.x,n.z))}if(n.type==="clerk")o.position.y=Math.abs(Math.sin(n.phase))*.12,o.rotation.z=Math.sin(n.phase)*.06,n.mesh.userData.arm.position.y=.9+Math.max(0,Math.sin(n.phase*.5))*.25;else if(n.type==="tank"){const f=Math.abs(Math.sin(n.phase));o.position.y=f*.05,o.rotation.z=Math.sin(n.phase)*.07;const M=Math.pow(1-f,6);o.scale.set(1+M*.06,1-M*.08,1+M*.06)}else n.type==="swarm"?(o.position.y=Math.abs(Math.sin(n.phase))*.14,o.rotation.y=Math.sin(n.phase*.5)*.3):n.type==="complainer"?(o.position.y=Math.abs(Math.sin(n.phase))*.16,n.mesh.userData.arm.rotation.z=Math.sin(n.phase*.5)*.4):n.type==="lobbyist"||n.type==="lobbyMini"?(o.position.y=Math.abs(Math.sin(n.phase))*.05,o.rotation.z=Math.sin(n.phase*.5)*.17):n.type==="auditor"?(o.position.y=Math.abs(Math.sin(n.phase))*.03,o.rotation.z=0):(o.position.y=Math.abs(Math.sin(n.phase))*.08,o.rotation.z=Math.sin(n.phase)*.05)}if(n.hitT>0){n.hitT-=i;const l=Math.max(0,n.hitT)/.18;o.scale.set(1+l*.16,1-l*.16,1+l*.16),o.position.z=l*.15,n.hitT<=0&&(o.scale.set(1,1,1),o.position.z=0)}n.blinkT-=i,n.blinkT<-.12&&(n.blinkT=2+Math.random()*3.5);for(const l of n.mesh.userData.eyes)l.scale.y=n.blinkT<0?.12:1;n.mesh.position.set(n.x,n.y,n.z),n.slow>0&&Math.random()<i*6&&Ct.emit(n.x,n.y+.8,n.z,{n:1,color:"#b8e6ff",speed:.4,up:.6,life:.6,gravity:-.5});const a=n.mesh.userData.hpBar;if(a.visible){a.quaternion.copy(qt.quaternion),a.quaternion.premultiply(n.mesh.quaternion.clone().invert());const l=Math.max(0,n.hp/n.maxHp),c=n.mesh.userData.hpFg;c.scale.x=.96*l,c.position.x=-.48*(1-l),c.material.color.setHSL(.33*(1-l),.7,.55)}}for(let n=hn.length-1;n>=0;n--)hn[n].alive||hn.splice(n,1)}function jc(i,e=!1){if(Oe.guest&&!e)return;Oe.host&&Oe.ev.push(["l",i.id]),q.leaks[i.type]=(q.leaks[i.type]||0)+1,i.alive=!1,vt.remove(i.mesh),q.lights=Math.max(0,q.lights-1),Ge.lighthouse.setLights(q.lights),Vn(rn.lights,"lights",q.lights,"bad");const t=Ge.lighthouse.flamePos();_s.emit(t.x,t.y,t.z,{n:10,color:"#b8b4b0",speed:.8,up:1.6,life:1.8,gravity:-.4}),Ct.emit(t.x,t.y,t.z,{n:14,color:"#8a8580",speed:1.6,up:.6,life:1.6,gravity:4}),on(`${i.def.name} slukket litt glød!`),Lt.lose(),Bn=.3,q.lights<=0&&!Oe.guest&&Ou(!1)}const On=[],yi=document.createElement("div");yi.id="chillbar";yi.innerHTML="<i></i>";document.body.appendChild(yi);let Pf=0;function Po(i){if(!mn.local)return;const e=document.createElement("div");e.className="pop-emoji",e.textContent=i,yt.set(D.x,Qt.position.y+2.6,D.z).project(qt),e.style.left=`${(yt.x*.5+.5)*innerWidth}px`,e.style.top=`${(-yt.y*.5+.5)*innerHeight}px`,document.body.appendChild(e),setTimeout(()=>e.remove(),900)}function Kc(i,e,t,n=!1){if(!Oe.guest&&!(D.faint>0||D.inv>0)){if(D.chill=Math.max(0,D.chill-i),D.inv=et.stressInvuln,D.flinch=.55,!n){const s=D.x-e,r=D.z-t,o=Math.hypot(s,r)||1;D.vx+=s/o*et.stressPush,D.vz+=r/o*et.stressPush,D.goal=null}Ct.emit(D.x,Qt.position.y+1.4,D.z,{n:8,color:"#ff6a5a",speed:2,up:1.5,life:.4}),Po("😓"),yi.classList.remove("hit"),yi.offsetWidth,yi.classList.add("hit"),Vn(rn.chill,"chillBad",Math.random(),"bad"),D.chill<=0&&ny()}}function ny(){D.faint=et.faintTime,D.stun=et.faintTime,D.faints++,D.goal=null,D.vx=D.vz=0;const i=Math.floor(q.embers*et.faintLoss);i>0&&(q.embers-=i,Nu(D.x,Qt.position.y+1,D.z,i,!1,1.6)),D.carrying&&(D.carrying=!1),Po("😵"),on(`😵 Vokteren besvimte av stress! Våkner ved fyret om ${et.faintTime} s`),Lt.stun()}function ku(i,e,t=0){if(Oe.guest&&!t)return;const n=zd();n.scale.setScalar(1.8),n.position.set(i,Ge.heightAt(i,e)+.5,e),vt.add(n),On.push({id:t||++Oe.ids,mesh:n,x:i,z:e,life:et.bagLife})}function iy(i){if(Oe.guest){mn.local&&Lf();return}D.inv-=i;const e=Ge.lighthouse.pos;D.faint>0?(D.faint-=i,D.faint<=0&&(D.x=e.x+1,D.z=e.z+7.5,D.vx=D.vz=0,D.stun=0,D.chill=et.chillMax*et.wakeChill,D.inv=et.stressInvuln*2,Ct.emit(D.x,Ge.heightAt(D.x,D.z)+1,D.z,{n:14,color:"#9fffb0",speed:2,up:2,life:.7}))):Math.hypot(e.x-D.x,e.z-D.z)<et.regenReach&&(D.chill=Math.min(et.chillMax,D.chill+et.regen*i));for(let t=On.length-1;mn===kt[0]&&t>=0;t--){const n=On[t];n.life-=i,n.mesh.rotation.y+=i*1.5,n.mesh.position.y=Ge.heightAt(n.x,n.z)+.5+Math.sin(q.time*3+t)*.12,n.mesh.visible=n.life>4||Math.sin(n.life*12)>0;const s=Lu(n.x,n.z,r=>r.K.faint<=0&&Math.hypot(n.x-r.K.x,n.z-r.K.z)<1.4);s&&Ii(s,()=>{D.chill=Math.min(et.chillMax,D.chill+et.bagHeal),on(`🥔 Chips! +${et.bagHeal} chill`),Po("😌"),Lt.pickup(),n.life=0}),n.life<=0&&(vt.remove(n.mesh),On.splice(t,1))}mn.local&&Lf()}function Lf(){const i=Math.round(D.chill);Vn(rn.chill,"chill",i),rn.chill.classList.toggle("low",i<30),i!==Pf&&(Pf=i,yi.firstChild.style.width=`${100*D.chill/et.chillMax}%`,yi.classList.toggle("low",i<30));const e=(i<et.chillMax||D.faint>0)&&q.phase!=="title";yi.style.display=e?"block":"none",e&&(yt.set(D.x,Qt.position.y+2.3,D.z).project(qt),yi.style.left=`${(yt.x*.5+.5)*innerWidth}px`,yi.style.top=`${(-yt.y*.5+.5)*innerHeight}px`)}function sy(i){if(Oe.guest||(Oe.host&&Oe.ev.push(["st",mn.slot]),Kc(et.airStress,i.x,i.z,!0),D.faint>0))return;D.stun=et.stunTime,i.hitCd=4;const e=Math.floor(q.embers*et.stunLoss);e>0&&(q.embers-=e,Nu(D.x,Qt.position.y+1,D.z,e,!1,1.6)),D.carrying&&(D.carrying=!1,on("Rullepapiret blåste bort!")),Ct.emit(D.x,Qt.position.y+1.5,D.z,{n:16,color:"#ffffff",speed:3,up:2,life:.5}),Lt.stun(),Bn=.2}function ry(i){if(Oe.guest){Ly(i);return}for(let e=Hn.length-1;e>=0;e--){const t=Hn[e];t.life-=i,t.phase+=i;const n=Math.max(Ge.heightAt(t.x,t.z),.1)+.35;t.settled||(t.vy-=16*i,t.x+=t.vx*i,t.z+=t.vz*i,t.y+=t.vy*i,t.y<=n&&(t.y=n,Math.abs(t.vy)>2.5?(t.vy=-t.vy*.4,t.vx*=.6,t.vz*=.6):t.settled=!0));const s=Lu(t.x,t.z,u=>u.K.stun<=0),r=s==null?void 0:s.K,o=r?Math.hypot(r.x-t.x,r.z-t.z):1/0;if(o<et.magnet){const u=(1-o/et.magnet)*14+3;t.x+=(r.x-t.x)/o*u*i,t.z+=(r.z-t.z)/o*u*i,t.settled=!0,t.y=n}const a=t.settled?Math.sin(t.phase*3)*.12:0;t.mesh.position.set(t.x,t.y+a,t.z),t.mesh.rotation.y+=i*3;const l=t.life<5,c=(.8+Math.min(t.value,6)*.08)*(l?.55+.45*(t.life/5):1);if(t.mesh.scale.setScalar(c),t.mesh.visible=!l||Math.sin(t.life*(t.life<1.5?30:16))>-.4,Math.random()<i*2.5&&Ct.emit(t.x,t.y+.2,t.z,{n:1,color:"#ffb347",speed:.3,up:1.2,life:.6,gravity:-.5}),o<.9)q.embers+=t.value,Vn(rn.embers,"embers",q.embers,"bump"),Ct.emit(t.x,t.y+.3,t.z,{n:8,color:"#ffe08a",speed:2,up:2.5,life:.4}),Lt.pickup(),vt.remove(t.mesh),Hn.splice(e,1);else if(t.life<=0){const u=Math.max(1,Math.round(t.value*et.expiredRefund));q.embers+=u,Ct.emit(t.x,t.y,t.z,{n:6,color:"#555048",speed:.6,up:1,life:.8,gravity:-.6}),vt.remove(t.mesh),Hn.splice(e,1)}}}let Ua=0,ip="";function on(i){var e;if(!mn.local){(e=mn.hints)==null||e.push(i);return}Ua=2,ip=i,Ji.textContent=""}function Df(i){for(const e of kt)Ii(e,()=>oy(i))}function oy(i){var N,L;const e=Qt.userData;(q.phase==="prep"||q.phase==="wave")&&iy(i),D.stun-=i,e.stars.visible=D.stun>0,e.stars.rotation.y+=i*6;let t=0,n=0;if(D.stillT=!Vt.move.x&&!Vt.move.z&&!D.goal?D.stillT+i:0,D.roll)D.goal=null;else if(D.stun<=0&&(q.phase==="prep"||q.phase==="wave")){if(Vt.move.x||Vt.move.z){D.goal=null;const U=Vt.yaw??ji,W=Math.cos(U),B=Math.sin(U);t=Vt.move.x*W+Vt.move.z*B,n=-Vt.move.x*B+Vt.move.z*W}else if(D.goal){const U=D.goal,W=U.x-D.x,B=U.z-D.z;if(U.field===void 0){U.field=null;const Y=Math.ceil(Math.hypot(W,B)/.5);for(let K=1;K<Y;K++)if(!Ge.isWalkable(D.x+W*K/Y,D.z+B*K/Y)){U.field=An.walkField(U.x,U.z);break}}const z=U.field?Math.min(U.field.at(D.x,D.z),Math.hypot(W,B)+50):Math.hypot(W,B);U.t+=i;const I=z<.35||U.spot&&Math.hypot(U.spot.x-D.x,U.spot.z-D.z)<U.reach;if(z<U.best-.3&&(U.best=z,U.lastGain=U.t),I||U.t>12||U.t-U.lastGain>1.5)D.goal=null;else{const Y=Math.min(1,z/.8),K=U.field&&Math.hypot(W,B)>1.5?U.field.dir(D.x,D.z):null,ie=K&&(K[0]||K[1])?K[0]:W/Math.hypot(W,B),me=K&&(K[0]||K[1])?K[1]:B/Math.hypot(W,B);t=ie,n=me;for(const H of Ge.colliders){if(U.spot&&H.x===U.spot.x&&H.z===U.spot.z)continue;const J=H.x-D.x,he=H.z-D.z,le=J*ie+he*me;if(le<=0||le>H.r+2.2||le>z)continue;const ge=-J*me+he*ie;if(Math.abs(ge)>H.r+.6)continue;const De=(1-Math.abs(ge)/(H.r+.6))*1.6*(ge>=0?1:-1);t-=-me*De,n-=ie*De}const qe=Math.hypot(t,n)||1;t=t/qe*Y,n=n/qe*Y}}}Oe.guest&&!mn.local&&(Cy(i),t=n=0);const r=Ge.heightAt(D.x,D.z)<.05,o=et.keeperSpeed*(D.carrying?et.carrySlow:1)*(r?et.wadeSlow:1),a=t*o,l=n*o,c=(N=Ge.isIce)!=null&&N.call(Ge,D.x,D.z)?1.6:12;Oe.guest&&!mn.local||(D.vx+=(a-D.vx)*Math.min(1,i*c),D.vz+=(l-D.vz)*Math.min(1,i*c));let u=D.x+D.vx*i,h=D.z+D.vz*i;Oe.guest&&!mn.local&&(u=D.x,h=D.z),Ge.isWalkable(u,h)||(Ge.isWalkable(u,D.z)?h=D.z:Ge.isWalkable(D.x,h)?u=D.x:(u=D.x,h=D.z));for(const U of Ge.colliders){const W=u-U.x,B=h-U.z,z=Math.hypot(W,B),I=U.r+.4;z<I&&z>1e-4&&(u=U.x+W/z*I,h=U.z+B/z*I)}D.x=u,D.z=h;const d=Math.hypot(D.vx,D.vz);if(d>.3){const U=Math.atan2(-D.vx,-D.vz);D.face+=za(U,D.face)*Math.min(1,i*12),D.walk+=i*d*2.2}if(Qt.rotation.y=D.face,Qt.position.set(D.x,Math.max(Ge.heightAt(D.x,D.z),-.25),D.z),r&&d>1&&(D.splash=(D.splash||0)-i,D.splash<=0)){D.splash=.22,Ct.emit(D.x,.15,D.z,{n:4,color:"#e8fbff",speed:1.6,up:2.2,life:.35,gravity:12});const U=Nd();U.position.set(D.x,.1,D.z),U.material.color.set("#f4fdff"),vt.add(U),Er.push({mesh:U,t:0,r:1.6,dur:.9})}const p=Math.min(1,d/3),g=Math.sin(D.walk)*p;e.legs[0].position.z=g*.2,e.legs[1].position.z=-g*.2,e.legs[0].position.y=.2+Math.max(0,g)*.12,e.legs[1].position.y=.2+Math.max(0,-g)*.12;const _=d>.6;_!==!!D.wasMoving&&(D.sq=_?1:-1,D.wasMoving=_),D.sq=(D.sq||0)*Math.exp(-i*7);const m=d<.3?Math.sin(q.time*2.2)*.025:0;e.body.scale.set(1-m*.5-D.sq*.07,1+m+D.sq*.12,1-m*.5-D.sq*.07);const f=Math.sign(Math.sin(D.walk));d>2&&!r&&f!==D.lastStep&&Ct.emit(D.x,Qt.position.y+.1,D.z,{n:2,color:"#d9c9a4",speed:.7,up:.6,life:.45,gravity:1}),D.lastStep=f,D.flinch=Math.max(0,(D.flinch||0)-i),D.cheer=Math.max(0,(D.cheer||0)-i);const M=d>.5&&((L=Ge.isIce)==null?void 0:L.call(Ge,D.x,D.z)),b=Math.abs(g)*.09+(D.cheer>0?Math.abs(Math.sin(D.cheer*9))*.35:0);if(D.sit=(D.sit??0)+((D.roll?1:0)-(D.sit??0))*Math.min(1,i*10),e.body.position.y=b-D.sit*.24,D.sit>.01)for(const U of e.legs)U.position.z-=D.sit*.3,U.position.y+=D.sit*.12;e.body.rotation.x=D.faint>0?0:-.35*Math.min(1,D.flinch*2.5),e.body.rotation.z=D.faint>0?1.45:D.stun>0?.5:g*.05+(M?Math.sin(q.time*7)*.12:0)+(D.flinch>0?Math.sin(D.flinch*40)*.08:0);let x=g*.6,C=-g*.45,S=0,E=0;M&&(S=-1.25+Math.sin(q.time*9)*.25,E=1.25+Math.cos(q.time*8)*.25,x=C=0),D.cheer>0&&(x=C=-2.9,S=-.3,E=.3),D.flinch>0&&(x=-2.5,S=.5);const A=D.rollP>=0&&d<.3&&D.faint<=0;if(A){const U=Math.sin(q.time*7)*.12;x=1.35+U,S=.55,C=1.35-U,E=-.55;const W=D.rollTower,B=Math.atan2(-(W.x-D.x),-(W.z-D.z));if(D.face+=za(B,D.face)*Math.min(1,i*8),Qt.rotation.y=D.face,Au(e.roll,D.rollP),e.roll.rotation.x=Math.sin(q.time*7)*.5,Math.random()<i*4&&D.rollP<.5){const z=e.roll.getWorldPosition(Ar);Ct.emit(z.x,z.y,z.z,{n:1,color:"#5aa84a",speed:.4,up:.3,life:.5,gravity:4})}}e.roll.visible=A,e.armR.visible=A,A?e.lanternArm.position.set(.36,.72,.18):e.lanternArm.position.set(.48,1,-.1);const y=Math.min(1,i*14);e.armL.rotation.x+=(x-e.armL.rotation.x)*y,e.armL.rotation.z+=(S-e.armL.rotation.z)*y;const v=A?e.armR:e.lanternArm;A&&e.lanternArm.rotation.set(0,0,0),v.rotation.x+=(C-v.rotation.x)*y,v.rotation.z+=(E-v.rotation.z)*y,D.idle=d<.3?(D.idle||0)+i:0;const T=D.idle>2?Math.sin(q.time*.55)*.7*Math.min(1,(D.idle-2)/1.5):0;e.head.rotation.y+=(T-e.head.rotation.y)*Math.min(1,i*4),D.blink=(D.blink??2)-i,D.blink<-.12&&(D.blink=2+Math.random()*3);for(const U of e.eyes)U.scale.y=D.faint>0?.1:D.blink<0?.12:1;e.carried.visible=D.carrying,D.chargeTower?(e.carried.position.lerp(Ar.set(0,.95,-.5),Math.min(1,i*14)),e.carried.rotation.y=0,e.carried.scale.setScalar(Math.max(.55,e.carried.scale.x-i*3))):(e.carried.rotation.y+=i*2,e.carried.scale.setScalar(1),e.carried.position.set(0,2.35+Math.sin(q.time*3)*.08,0)),Pu.intensity=jd*(1+Math.sin(q.time*11)*.115)}function ay(){for(const i of _t.clicks.splice(0)){Cf.setFromCamera(i,qt);const e=Cf.intersectObject(Ge.terrain)[0];e&&(Oe.guest&&(Oe.goal=[e.point.x,e.point.z]),sp(e.point.x,e.point.z))}}function sp(i,e){const t=Ge.lighthouse.pos,n=Xs(Ge.plinths,i,e,2.2)||(Math.hypot(t.x-i,t.z-e)<4.5?{x:t.x,z:t.z,big:!0}:null);if(n){const s=n.big?4.3:1.95;let r=D.x-n.x,o=D.z-n.z;const a=Math.hypot(r,o)||1;i=n.x+r/a*s,e=n.z+o/a*s}D.goal={x:i,z:e,t:0,best:1/0,lastGain:0,spot:n,reach:n?n.big?et.lighthouseReach-.4:et.reach-.25:0},Ct.emit(i,Ge.heightAt(i,e)+.2,e,{n:6,color:"#fff3d0",speed:1.5,up:.5,life:.35,gravity:0})}function ks(i=!q.paused,e=!1){q.paused=i;const t=_t.labels();ct("pause-keys").textContent=`${t.name}: fortsett med ${t.pause} · start på nytt med ${t.restart}`,ct("pad-help").classList.toggle("hidden",_t.padSeen),ct("pause").classList.toggle("hidden",!i),ct("confirm").classList.toggle("hidden",!e),q.confirming=i&&e}try{sessionStorage.getItem("glod-portrait")&&document.documentElement.classList.add("portrait-ok")}catch{}ct("btn-portrait").addEventListener("click",()=>{document.documentElement.classList.add("portrait-ok");try{sessionStorage.setItem("glod-portrait","1")}catch{}Ro()});ct("btn-resume").addEventListener("click",()=>ks(!1));ct("btn-restart").addEventListener("click",()=>ks(!0,!0));ct("btn-yes").addEventListener("click",()=>Tr());ct("btn-no").addEventListener("click",()=>ks(!0,!1));ct("btn-worlds").addEventListener("click",()=>{location.href=`${location.pathname}?world=${bn}`});ct("btn-lex").addEventListener("click",()=>{const i=ct("lex");i.innerHTML||(i.innerHTML=Object.entries(To).filter(([e])=>e!=="lobbyMini").map(([e,t])=>{const{tough:n,weak:s}=Jd(t);return`<div class="lex-row"><b>${t.flying?"🪶":"🐾"} ${t.name}</b><small>${t.info||(t.flying?"flyr rett mot fyret":"går langs veien")}</small><span>${n?`🛡️ ${n}`:""} ${s?`💥 ${s}`:""}</span></div>`}).join("")+`<p class="lex-key">🛡️ tåler · 💥 svak mot · ${Object.entries(Yc).map(([e,t])=>`${t} ${zs[e].name}`).join(" · ")} · 📒 skjold forfra</p>`),i.classList.toggle("hidden")});function Tr(){Oe.host&&Oe.net.broadcast({t:"restart"}),Oe.guest&&(Oe.snap=null);for(const i of $i)i.el.remove();$i.length=0;for(const i of[hn,ho,Hn,vi,Er]){for(const e of i)e.mesh&&vt.remove(e.mesh);i.length=0}for(const i of nn)vt.remove(i.mesh);nn.length=0,bo.innerHTML="",Da.length=0;for(const i of Ge.plinths)i.tower=null;for(let i=Ge.colliders.length-1;i>=0;i--)Ge.colliders[i].tower&&Ge.colliders.splice(i,1);q.buildMode=!1;for(const i of kt)i.K.chargeTower&&wi(i.K.chargeTower,0);Object.assign(q,{phase:"title",wave:0,timer:0,embers:et.startEmbers,lights:zr,spawnQueue:[],leaks:{},seen:{},waveClock:0,sel:0,paused:!1,confirming:!1});for(const i of kt){const{walk:e,face:t,...n}=Kd(i.slot);Object.assign(i.K,n),i.sel=0,i.buildMode=!1}for(const i of On)vt.remove(i.mesh);On.length=0,Ge.lighthouse.setLights(zr),xy(),Bn=0,Ua=0,ei={},Vn(rn.lights,"lights",q.lights),Vn(rn.embers,"embers",q.embers),Vn(rn.wave,"wave",0),rn.timer.textContent="",ct("pause").classList.add("hidden"),ct("confirm").classList.add("hidden"),ct("overlay").classList.add("hidden"),_t.clear(),q.phase="title",kr(!0),window.__restarts=(window.__restarts||0)+1}function ly(){Yd.sync();const i=_t.device,e=!!D.roll&&i==="touch"&&!q.paused;if(ct("rollpad").classList.toggle("hidden",!e),e!==ei.rollTouch&&(ei.rollTouch=e,ei.device=null),e&&ct("touch").classList.add("hidden"),ei.device===i+_t.padKind)return;ei.device=i+_t.padKind;const t=_t.labels();ct("touch").classList.toggle("hidden",i!=="touch"||q.phase==="title"||e),Ei.querySelectorAll("button i").forEach((n,s)=>{n.textContent=i==="pad"?s===q.sel?t.build:"":i==="touch"?"":String(s+1)}),Du.textContent="Neste bølge ▶",ei.sel=-1}const Zc={still:.3,step:.25,bonus:.1},Jc=["rU","rR","rD","rL"];function rp(i){const e=Math.min(8,Math.max(4,i.level+3));return Array.from({length:e},()=>Jc[Math.floor(Math.random()*4)])}function cy(i,e){const t=i!=null&&i.upg&&!D.carrying&&!e?i:null;if(D.rollBlock&&D.rollBlock!==t&&(D.rollBlock=null),D.roll&&D.roll.tower!==t&&(D.roll=null),!D.roll&&t&&(Vt.consume("build")||Vt.consume("carry")||D.rollBlock!==t&&D.stillT>=Zc.still)&&(D.roll={tower:t,seq:rp(t),i:0,shake:!1,done:0},D.goal=null,D.vx=D.vz=0),Vt.rollMode=!!D.roll,!D.roll){for(const n of[...Jc,"rollExit"])Vt.consume(n);return}if(Vt.consume("build"),Vt.consume("carry"),Vt.consume("rollExit")){D.rollBlock=D.roll.tower,D.roll=null,Vt.rollMode=!1;return}for(const n of Jc)Vt.consume(n)&&uy(n)}function uy(i){const e=D.roll,t=e.tower.upg;i===e.seq[e.i]?(e.i++,t.t=Math.min(t.dur,t.t+t.dur*Zc.step/e.seq.length),Lt.tick(e.i),e.i>=e.seq.length&&(t.t=Math.min(t.dur,t.t+t.dur*Zc.bonus),e.seq=rp(e.tower),e.i=0,e.done++,Lt.stone(),Ct.emit(D.x,Qt.position.y+2.2,D.z,{n:10,color:"#8ff0ff",speed:1.6,up:1.6,life:.6,gravity:2}))):(e.i=0,e.shake=!0,e.shakes=(e.shakes||0)+1,Lt.bonk(),Vt.rumble(150,.4))}function hy(i){if(_t.consume("fps")&&Iu.classList.toggle("hidden"),_t.consume("music")&&cp(),ly(),q.phase==="title"){["build","carry","next","pause"].some(t=>_t.consume(t))&&kr();for(const t of kt)t.input.clear();return}if(Vn(rn.embers,"embers",q.embers),!(q.phase==="prep"||q.phase==="wave")){if((q.phase==="won"||q.phase==="lost")&&_t.consume("restart")){Tr();return}_t.clear(),Ei.classList.add("hidden"),qc("");return}if(_t.consume("restart")){Oe.guest?on("Bare verten kan starte på nytt"):q.confirming?Tr():ks(!0,!0);return}if(_t.consume("pause")&&(Oe.guest?on("Bare verten kan pause"):ks(!q.paused)),q.confirming){if(_t.consume("build")||_t.consume("next")){Tr();return}_t.consume("carry")&&ks(!0,!1)}if(q.paused){for(const t of kt)t.input.clear();Oe.guest&&qc("⏸ Verten har pauset");return}ay();for(const t of kt)Ii(t,()=>fy(i))}function fy(i){if(Oe.guest){Dy(i);return}Vt.consume("next")&&q.phase==="prep"&&(q.timer=0),Vt.consume("selPrev")&&(q.sel=(q.sel+Li.length-1)%Li.length),Vt.consume("selNext")&&(q.sel=(q.sel+1)%Li.length);const e=Xs(Ge.plinths,D.x,D.z,et.reach,c=>!c.tower),t=Xs(nn,D.x,D.z,et.reach),n=Ge.lighthouse.pos,s=Math.hypot(n.x-D.x,n.z-D.z)<et.lighthouseReach,r=D.stun>0;cy(t,r);const o=$a();Vt.consume("build")&&!r&&(q.buildMode||e?Ia(Li[q.sel]):q.buildMode=!0),Li.forEach((c,u)=>{Vt.consume("b"+(u+1))&&!r&&(q.sel=u,Ia(c))});const a=(q.buildMode||!!e)&&!r&&!D.carrying;mn.panelOpen=a,Vt.consume("carry")&&!r&&(!D.carrying&&s?q.embers>=et.stoneCost?(q.embers-=et.stoneCost,D.carrying=!0,Vn(rn.embers,"embers",q.embers,"bump"),Ct.emit(D.x,Qt.position.y+2.3,D.z,{n:14,color:"#8ff0ff",speed:2,up:2,life:.6,gravity:2}),Lt.stone()):(Lt.deny(),on(`Rullepapir koster ${et.stoneCost} ✦`)):D.carrying&&s?(D.carrying=!1,q.embers+=et.stoneCost,Lt.stone(),on("Rullepapiret er lagt tilbake")):!D.carrying&&q.buildMode?q.buildMode=!1:D.carrying?t||on("Bær rullepapiret til et tårn"):on("Rullepapir hentes ved fyret"));const l=D.carrying&&!r&&t&&t.level<Xc&&!t.upg?t:null;l!==D.chargeTower&&(D.chargeTower&&wi(D.chargeTower,0),D.chargeTower=l,D.charge=0),l&&(D.charge+=i/et.chargeTime,wi(l,Math.min(1,D.charge)),Math.random()<i*20&&Ct.emit(D.x,Qt.position.y+2.2,D.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),D.charge>=1&&(l.upg={t:0,dur:et.upgradeTime[l.level-1]},D.carrying=!1,D.chargeTower=null,D.charge=0,Ct.emit(l.x,l.y+1.2,l.z,{n:12,color:"#8ff0ff",speed:2,up:2,life:.6}),Lt.stone(),on(`${l.def.name}: stå stille og rull – pilene går fortere`))),mn.local&&op(i,{panelOpen:a,spot:o,tower:t,atLighthouse:s,stunned:r,target:l})}function op(i,{panelOpen:e,spot:t,tower:n,atLighthouse:s,stunned:r,target:o}){ZM(e,t,Li[q.sel]),Ei.classList.toggle("hidden",!e),e&&(Ei.querySelectorAll("button").forEach((c,u)=>{c.disabled=q.embers<zs[c.dataset.tower].cost,c.classList.toggle("sel",u===q.sel)}),ei.sel!==q.sel&&_t.device==="pad"&&(ei.sel=q.sel,Ei.querySelectorAll("button i").forEach((c,u)=>c.textContent=u===q.sel?_t.labels().build:"")));const a=_t.labels();Ua-=i;let l="";if(Ua>0)l=ip;else if(r)l="Moralpanikk! Måka slo deg ut";else if(o)l="Leverer rullepapiret …";else if(D.roll)l=`Rull! Trykk pilene i rekkefølge for å rulle fortere · ${_t.device==="pad"?`${a.carry} / hold stikka = gå`:_t.device==="touch"?"✕ Gå = gå":"Esc / Q = gå"}`;else if(n!=null&&n.upg)l=`${n.def.name}: stå stille eller trykk ${a.build} for å rulle (${Math.ceil(n.upg.dur-n.upg.t)} s)`;else if(D.carrying&&n&&n.level>=Xc)l="Tårnet er på maks nivå";else if(D.carrying)l="Bær rullepapiret til et tårn";else if(s&&!D.carrying)l=`${a.carry} = hent rullepapir (${et.stoneCost} ✦)`;else if(s&&D.carrying)l=`${a.carry} = legg rullepapiret tilbake`;else if(n&&n.level<Xc)l=`${n.def.name} nv. ${n.level} · hent rullepapir ved fyret for å oppgradere`;else if(e&&!t.ok)l=`Ikke lov her: ${t.why} · ${a.carry} = avbryt`;else if(e){const c=`${zs[Li[q.sel]].name} (${zs[Li[q.sel]].tip})`,u=t.plinth?" (sokkel: +25 % rekkevidde)":"";l=_t.device==="pad"?`${a.sel} = velg tårn · ${a.build} = sett ned ${c}${u}`:_t.device==="touch"?`Trykk på et tårn, eller Bygg = ${c}${u}`:`1 / 2 / 3 eller ${a.build} = sett ned ${c}${u}`}else q.phase==="prep"&&q.wave===0&&(l=`${a.build} = bygg et tårn der du står (sokler gir +25 % rekkevidde)`);qc(l),BM(i)}const Fs=new bt;{const i=document.createElement("canvas");i.width=64,i.height=256;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,64,0);t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.5,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,256),e.globalCompositeOperation="destination-in";const n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.2,"rgba(0,0,0,0.8)"),n.addColorStop(.65,"rgba(0,0,0,0.3)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,64,256);const s=new oi(i);for(let r=0;r<8;r++){const o=new lt(new li(1,1),new Ut({map:s,color:"#ffdcae",transparent:!0,opacity:.05,blending:ai,depthWrite:!1,depthTest:!1,fog:!1}));o.scale.set(1.8+r%3*1.1,34,1),o.position.set(-21+r*6,3.5,-4+r%2*6),o.rotation.set(-1.38,0,.55),o.userData.phase=r*1.3,Fs.add(o)}}Fs.visible=un.id==="tak";Fs.renderOrder=50;vt.add(Fs);function dy(i){Fs.position.set(Sn.x,0,Sn.z),Fs.rotation.y=ji,Fs.children.forEach(e=>e.material.opacity=(Ws.mobile?1:1.3)*(.14+.04*Math.sin(i*.35+e.userData.phase))),Qc.visible&&my(i)}const Fu=Math.round(160*(Ws.mobile?.5:1)),Mr=20,py=Array.from({length:Fu},()=>({x:Math.random()*Mr*2,z:Math.random()*Mr*2,y:.8+Math.random()*6,ph:Math.random()*6.28})),Ea=new Float32Array(Fu*3),Ta=new Float32Array(Fu*3),Qc=(()=>{const i=new Ft;i.setAttribute("position",new Ot(Ea,3)),i.setAttribute("color",new Ot(Ta,3));const e=document.createElement("canvas");e.width=e.height=32;const t=e.getContext("2d"),n=t.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,32,32);const s=new Ga(i,new wo({size:.2,map:new oi(e),vertexColors:!0,transparent:!0,blending:ai,depthWrite:!1,fog:!1}));return s.frustumCulled=!1,s.visible=un.id==="tak",s.renderOrder=51,vt.add(s),s})(),If=(i,e)=>e+((i-e)%(Mr*2)+Mr*3)%(Mr*2)-Mr;function my(i){py.forEach((e,t)=>{Ea[t*3]=If(e.x+Math.sin(i*.13+e.ph)*1.4+i*.08,Sn.x),Ea[t*3+1]=e.y+Math.sin(i*.21+e.ph*2)*.5,Ea[t*3+2]=If(e.z+Math.cos(i*.11+e.ph)*1.4,Sn.z);const n=(.3+.7*Math.max(0,Math.sin(i*.6+e.ph*3))**2)*.8;Ta[t*3]=n,Ta[t*3+1]=n*.9,Ta[t*3+2]=n*.68}),Qc.geometry.attributes.position.needsUpdate=!0,Qc.geometry.attributes.color.needsUpdate=!0}let Bn=0;const yt=new V,Ar=new V,gr=new V,da=new V,kl=new V,Sn=new V(D.x,0,D.z);function gy(i){Sn.x+=(D.x-Sn.x)*Math.min(1,i*4),Sn.z+=(D.z-Sn.z)*Math.min(1,i*4),Sn.y=Qt.position.y;const e=es?1.15:1,t=_t.zoom*e,n=qt.aspect<1.2?1.25:1;ji+=_t.look;const s=6.6*t*n;qt.position.set(Sn.x+Math.sin(ji)*s,Sn.y+12.5*t*n,Sn.z+Math.cos(ji)*s),Bn=Math.max(0,Bn-i),Bn>0&&(qt.position.x+=(Math.random()-.5)*Bn*2,qt.position.y+=(Math.random()-.5)*Bn),qt.lookAt(Sn.x-Math.sin(ji),Sn.y+.5,Sn.z-Math.cos(ji)),qt.updateMatrixWorld();let r=0,o=0,a=0;const l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([f,M])=>{const b=yt.set(f,M,.5).unproject(qt),x=b.sub(qt.position).normalize(),C=x.y<-.05?(Sn.y-qt.position.y)/x.y:80;return[qt.position.x+x.x*Math.min(C,80),qt.position.z+x.z*Math.min(C,80)]});for(const[f,M]of l)r+=f/4,o+=M/4;for(const[f,M]of l)a=Math.max(a,Math.hypot(f-r,M-o));const c=Mt.clamp(Math.ceil((a+4)/4)*4,16,80);Mn.shadow.camera.right!==c&&(Object.assign(Mn.shadow.camera,{left:-c,right:c,top:c,bottom:-c}),Mn.shadow.camera.updateProjectionMatrix());const u=2*c/Mn.shadow.mapSize.x;gr.set(ti.sunDir[0],ti.sunDir[1],ti.sunDir[2]).normalize(),da.set(0,1,0).cross(gr).normalize(),kl.copy(gr).cross(da).normalize(),yt.set(r,Sn.y,o);const h=Math.round(yt.dot(da)/u)*u,d=Math.round(yt.dot(kl)/u)*u,p=yt.dot(gr);Ar.copy(da).multiplyScalar(h).addScaledVector(kl,d).addScaledVector(gr,p),Mn.target.position.copy(Ar),Mn.position.copy(Ar).addScaledVector(gr,40),Mn.shadow.camera.far=40+c+20,dy(q.time),YM(),yt.set(D.x,Qt.position.y+.9,D.z);const g=-yt.clone().applyMatrix4(qt.matrixWorldInverse).z;yt.project(qt);const _=innerWidth*zn.getPixelRatio(),m=innerHeight*zn.getPixelRatio();xs.uKeep.value.set((yt.x*.5+.5)*_,(yt.y*.5+.5)*m,g),xs.uRad.value=m*.3,Ge.cullFade(qt,m),HM(),WM(q.paused?0:i)}const Fl=un.eruption,Cr=Ge.extras.bridges??[];let io=0,In=null;function vy(i){if(!(!Fl||!Cr.length||q.phase!=="wave")){if(io+=i,In&&io>=Fl.closed)In.setClosed(!1),In=null,An.setBlock(()=>!1);else if(!In&&io>=Fl.every){io=0;const e=Cr[Math.random()*Cr.length|0];e.setClosed(!0),In=e,An.setBlock((t,n)=>(t-e.x)**2+(n-e.z)**2<2.8*2.8),Bn=Math.max(Bn,.35),Lt.boom(),on("🌋 Utbrudd! En bro er stengt av lava i 10 s")}}}function xy(){In&&(In.setClosed(!1),An.setBlock(()=>!1)),In=null,io=0}function _y(i){if(Oe.guest){Py(i);return}if(vy(i),q.phase==="prep")q.timer-=i,rn.timer.textContent=`Neste bølge om ${Math.ceil(Math.max(0,q.timer))} s`,q.timer<=0&&(rn.timer.textContent="",zu());else if(q.phase==="wave"){for(q.waveClock+=i;q.spawnQueue.length&&q.spawnQueue[0].t<=q.waveClock;){const e=q.spawnQueue.shift();qa(e.type,e.path)}if(rn.timer.textContent=`${hn.length+q.spawnQueue.length} monstre igjen`,!q.spawnQueue.length&&!hn.length){if(rn.timer.textContent="",q.wave>=Ru.length){Ou(!0);return}const e=et.waveBonus+q.wave*et.waveBonusPer+Math.floor(Math.min(q.embers,300)*et.interest);q.embers+=e,Vn(rn.embers,"embers",q.embers,"bump"),on(`Bølge ${q.wave} slått! +${e} ✦`);for(const t of kt)t.K.cheer=1.4;Uu(et.prepTime),en==null||en.setIntensity(0)}}}function Ou(i){q.phase=i?"won":"lost",i||_t.rumble(500,.9),ct("touch").classList.add("hidden"),ct("btn-pause").classList.add("hidden"),Ei.classList.add("hidden");let e="";if(en==null||en.setIntensity(0),i){Lt.win();const n=Mo();A_(bn),Mo()>n&&(e=`<p class="lead">🔓 Ny verden låst opp: <b>${js[bn+1].name}</b>!</p>`)}const t=ct("overlay");if(t.querySelector(".card").innerHTML=i?`<h1>Gløden lever!</h1><p class="lead">Ti bølger med forbud, komitéer og moralpanikk er chillet ned, og ${q.lights} av 20 glødepunkter brenner fortsatt. Øya ånder ut.</p>${e}<div class="menu-row"><button id="btn-again">↺ Spill kartet igjen</button>${e?'<button id="btn-nextworld" class="alt">Neste verden ▶</button>':""}<button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`:`<h1>Gløden sluknet</h1><p class="lead">Byråkratiet vant denne gangen, i bølge ${q.wave}. Rull opp og prøv på nytt.</p><div class="menu-row"><button id="btn-again">↺ Start kartet på nytt</button><button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`,Oe.guest){t.querySelector(".menu-row").innerHTML='<p class="lead">Venter på at verten starter på nytt …</p><button id="btn-again" class="alt">Forlat</button><button id="btn-worlds2" class="alt hidden"></button>',ct("btn-again").addEventListener("click",()=>{location.href=`${location.pathname}?world=${bn}`}),ct("btn-worlds2").addEventListener("click",()=>{}),t.classList.remove("hidden");return}t.classList.remove("hidden"),ct("btn-again").addEventListener("click",()=>Tr()),ct("btn-worlds2").addEventListener("click",()=>{location.href=`${location.pathname}?world=${bn}`}),e&&ct("btn-nextworld").addEventListener("click",()=>{location.href=`${location.pathname}?world=${bn+1}`})}let en=null;const Aa=(()=>{try{return JSON.parse(localStorage.getItem("glod-music")||"{}")}catch{return{}}})(),fo=["rolig","dnb","av"],ap={rolig:"Rolig",dnb:"DnB",av:"Av"};let bi=fo.includes(Aa.mode)?Aa.mode:Aa.muted?"av":"rolig";ln.get("musikk")&&fo.includes(ln.get("musikk"))&&(bi=ln.get("musikk"));function lp(){try{localStorage.setItem("glod-music",JSON.stringify({vol:en.volume,mode:bi}))}catch{}}function My(i){const e={};let t=null,n=0,s=Aa.vol??.7;return{use:o=>{const a=o==="dnb"?"dnb":"rolig";t&&t!==e[a]&&t.stop(),e[a]??(e[a]=a==="dnb"?yM(i.ctx,i.noiseBuf,un.id):bM(i.ctx,i.noiseBuf,un.id)),t=e[a],t.setVolume(s),t.setIntensity(n),t.setMuted(o==="av"),o==="av"?t.stop():t.start()},setIntensity(o){n=o,t==null||t.setIntensity(o)},setVolume(o){s=o,t==null||t.setVolume(o)},get volume(){return s},get muted(){return bi==="av"},get intensity(){return n},get mode(){return bi},get section(){return t==null?void 0:t.section},rms(){return t?t.rms():0},tap(o){for(const a of Object.values(e))a.tap(o)}}}function yy(){const i=Vd();en||!i||ln.has("nomusic")||(en=My(i),en.use(bi),ct("music-vol").value=Math.round(en.volume*100),ct("btn-mute").textContent=`M: ${ap[bi]}`,window.__music=en,window.__audioCtx=i.ctx)}function cp(){en&&(bi=fo[(fo.indexOf(bi)+1)%fo.length],en.use(bi),ct("btn-mute").textContent=`M: ${ap[bi]}`,lp(),on({rolig:"🎶 Musikk: rolig",dnb:"🎶 Musikk: drum & bass",av:"🎶 Musikk av"}[bi]))}for(const i of["pointerdown","keydown","touchend"])addEventListener(i,()=>{const e=Vd();e&&e.ctx.state!=="running"&&e.ctx.resume()},{passive:!0});ct("music-vol").addEventListener("input",i=>{en&&(en.setVolume(i.target.value/100),lp())});ct("btn-mute").addEventListener("click",i=>{i.preventDefault(),cp()});function kr(i=!1){q.phase==="title"&&(_M(),yy(),en==null||en.setIntensity(0),i&&ct("touch").classList.toggle("hidden",_t.device!=="touch"),ct("overlay").classList.add("hidden"),es&&_t.device!=="pad"&&(_t.device="touch"),ei.device=null,ct("btn-pause").classList.remove("hidden"),Ge.lighthouse.setLights(q.lights),Vn(rn.embers,"embers",q.embers),Uu(et.firstPrep),Hd&&zy())}ct("btn-start").addEventListener("click",kr);const Bu=["build","carry","next","selPrev","selNext","b1","b2","b3","b4","b5","b6","b7","rU","rR","rD","rL","rollExit"];function by(){const i=new Set;return{move:{x:0,z:0},yaw:0,pressed:i,rollMode:!1,device:"kb",padKind:"xbox",clicks:[],consume:e=>i.delete(e),clear:()=>i.clear(),rumble:()=>{},labels:()=>_t.labels()}}function up(i,e){if(e===Ao(0))return;const t=i.userData.body.children[0];t.material=t.material.clone(),t.material.color.set(e)}function Gu(i,e){if(kt.some(r=>r.slot===i))return null;const t=Vr(Id(),"figure");up(t,Ao(i));const n=Kd(i);t.position.set(n.x,Ge.heightAt(n.x,n.z),n.z),vt.add(t);const s={slot:i,name:e,K:n,mesh:t,input:by(),sel:0,buildMode:!1,local:!1,hints:[]};return kt.push(s),s}function Vu(i){var n;const e=kt.findIndex(s=>s.slot===i&&!s.local);if(e<0)return;const t=kt[e];t.K.chargeTower&&wi(t.K.chargeTower,0),(n=t.tag)==null||n.remove(),_s.emit(t.K.x,t.mesh.position.y+.8,t.K.z,{n:10,color:"#eef6e8",speed:1.4,up:1.2,life:.7,gravity:-.5}),vt.remove(t.mesh),kt.splice(e,1)}function Sy(i,e){if(Oe.guest){if(i.t==="s")Oe.snap=i;else if(i.t==="h")for(const s of i.h)on(s);else i.t==="restart"&&Tr();return}if(!Oe.host||i.t!=="in")return;const t=kt.find(s=>s.slot===e);if(!t)return;const n=t.input;if(n.move.x=Math.max(-1,Math.min(1,+i.x||0)),n.move.z=Math.max(-1,Math.min(1,+i.z||0)),Number.isFinite(i.yaw)&&(n.yaw=i.yaw),Array.isArray(i.a))for(const s of i.a)Bu.includes(s)&&n.pressed.add(s);Array.isArray(i.g)&&i.g.every(Number.isFinite)&&Ii(t,()=>sp(i.g[0],i.g[1]))}const hp=Object.keys(To),jt=i=>Math.round(i*100)/100;function wy(){return{t:"s",ph:q.phase,w:q.wave,tm:jt(q.timer),em:q.embers,li:q.lights,left:hn.length+q.spawnQueue.length,pz:q.paused?1:0,er:In?Cr.indexOf(In):-1,P:kt.map(i=>{var s,r;const e=i.K,t=e.roll,n=i===mn;return[i.slot,jt(e.x),jt(e.z),jt(e.face),jt(e.vx),jt(e.vz),e.carrying?1:0,jt(Math.max(0,e.stun)),jt(Math.max(0,e.faint)),Math.round(e.chill),n?q.sel:i.sel,(n?q.buildMode:i.buildMode)?1:0,jt(e.rollP??-1),((s=e.rollTower)==null?void 0:s.id)||0,((r=e.chargeTower)==null?void 0:r.id)||0,jt(e.charge||0),t?[t.tower.id,t.seq.join(","),t.i,t.done,t.shakes||0]:0,i.name||""]}),M:hn.filter(i=>i.alive).map(i=>[i.id,hp.indexOf(i.type),jt(i.x),jt(i.y),jt(i.z),Math.round(i.hp*10)/10,Math.round(i.maxHp*10)/10,i.trap>0?jt(i.trap):0,i.slow>0?1:0]),T:nn.map(i=>[i.id,Li.indexOf(i.type),jt(i.x),jt(i.y),jt(i.z),i.level,i.plinth?Ge.plinths.indexOf(i.plinth):-1,i.upg?[jt(i.upg.t),i.upg.dur]:0,i.blind>0?jt(i.blind):0]),E:Hn.map(i=>[i.id,jt(i.x),jt(i.y),jt(i.z),i.value,jt(i.life)]),B:On.map(i=>[i.id,jt(i.x),jt(i.z),jt(i.life)]),ev:Oe.ev.splice(0)}}function Ey(i){if(!Oe.host)return;if(Oe.ev.length>200&&Oe.ev.splice(0,Oe.ev.length-200),!Oe.net.guestCount()){Oe.ev.length=0;return}if(Oe.snapT-=i,Oe.snapT>0)return;Oe.snapT=.05;const e=wy();Oe.lastSnapBytes=JSON.stringify(e).length,Oe.net.broadcast(e);for(const t of kt)!t.local&&t.hints.length&&Oe.net.sendTo(t.slot,{t:"h",h:t.hints.splice(0)})}const Ci=(i,e)=>i.find(t=>t.id===e);function Ty(i){for(const a of i.ev||[])if(a[0]==="sp")Oe.spawnPoints=a[1],q.spawnPoints=a[1],$c();else if(a[0]==="c"){const l=Ci(hn,a[1]);l!=null&&l.alive&&ep(l)}else if(a[0]==="l"){const l=Ci(hn,a[1]);l!=null&&l.alive&&jc(l,!0)}else if(a[0]==="u"){const l=Ci(nn,a[1]),c=kt.find(u=>u.slot===a[2]);l&&c&&Ii(c,()=>np(l))}else if(a[0]==="st"){const l=kt.find(c=>c.slot===a[1]);l&&(Ct.emit(l.K.x,l.mesh.position.y+1.5,l.K.z,{n:16,color:"#ffffff",speed:3,up:2,life:.5}),l.local&&(Lt.stun(),Bn=.2))}const e=q.phase;if(q.embers=i.em,q.timer=i.tm,q.paused=!!i.pz,Oe.left=i.left,i.li!==q.lights&&(q.lights=i.li,Ge.lighthouse.setLights(q.lights),Vn(rn.lights,"lights",q.lights,"bad")),e==="prep"&&i.ph==="wave")zu(),q.spawnQueue=[];else if(e==="wave"&&i.ph==="prep"){rn.timer.textContent="",on(`Bølge ${q.wave} slått!`);for(const a of kt)a.K.cheer=1.4;Uu(i.tm),en==null||en.setIntensity(0)}else(i.ph==="won"||i.ph==="lost")&&e!==i.ph&&Ou(i.ph==="won");if(q.wave=i.w,i.er!==(In?Cr.indexOf(In):-1)){In&&(In.setClosed(!1),In=null,An.setBlock(()=>!1));const a=Cr[i.er];a&&(a.setClosed(!0),In=a,An.setBlock((l,c)=>(l-a.x)**2+(c-a.z)**2<2.8*2.8),Bn=Math.max(Bn,.35),Lt.boom(),on("🌋 Utbrudd! En bro er stengt av lava i 10 s"))}for(const a of i.T){let l=Ci(nn,a[0]);if(!l){const c=a[6]>=0?Ge.plinths[a[6]]:null;l=tp(Li[a[1]],{x:a[2],y:a[3],z:a[4],plinth:c},a[0])}l.level!==a[5]&&(l.level=a[5],Cu(l,l.level),wi(l,0),Ct.emit(l.x,l.y+1.2,l.z,{n:30,color:"#8ff0ff",speed:4,up:4,life:.9,gravity:5}),Lt.upgrade()),a[7]?(l.upg||(l.upg={t:0,dur:a[7][1]}),a[7][0]<l.upg.t-.5&&l.upg.t>0&&(l.upgReset=!0),l.upg.t=a[7][0],l.upg.dur=a[7][1]):l.upg&&(l.upg=null,wi(l,0)),l.blind=a[8]}const t=new Set(i.T.map(a=>a[0]));for(let a=nn.length-1;a>=0;a--){const l=nn[a];if(t.has(l.id))continue;vt.remove(l.mesh),nn.splice(a,1),l.plinth&&(l.plinth.tower=null);const c=Ge.colliders.findIndex(u=>u.tower===l);c>=0&&Ge.colliders.splice(c,1)}const n=new Set;for(const a of i.M){n.add(a[0]);let l=Ci(hn,a[0]);l||(l=qa(hp[a[1]],0),l.id=a[0],l.x=a[2],l.y=a[3],l.z=a[4],l.mesh.position.set(l.x,l.y,l.z)),l.sx=a[2],l.sy=a[3],l.sz=a[4],a[5]<l.hp&&(l.mesh.userData.hpBar.visible=!0),l.hp=a[5],l.maxHp=a[6],l.trap=a[7],a[8]&&(l.slow=Math.max(l.slow,.1))}for(const a of hn)a.alive&&!n.has(a.id)&&(a.alive=!1,vt.remove(a.mesh));const s=new Set;for(const a of i.E){s.add(a[0]);let l=Ci(Hn,a[0]);if(!l){const c=Ud();c.scale.setScalar(.8+Math.min(a[4],6)*.08),l={id:a[0],mesh:c,x:a[1],y:a[2],z:a[3],value:a[4],phase:Math.random()*6},vt.add(c),Hn.push(l)}l.sx=a[1],l.sy=a[2],l.sz=a[3],l.life=a[5]}for(let a=Hn.length-1;a>=0;a--){const l=Hn[a];s.has(l.id)||(l.life>.3&&(Ct.emit(l.x,l.y+.3,l.z,{n:8,color:"#ffe08a",speed:2,up:2.5,life:.4}),Math.hypot(D.x-l.x,D.z-l.z)<2&&(Lt.pickup(),Vn(rn.embers,"embers",q.embers,"bump"))),vt.remove(l.mesh),Hn.splice(a,1))}const r=new Set;for(const a of i.B){r.add(a[0]);const l=Ci(On,a[0])||(ku(a[1],a[2],a[0]),On[On.length-1]);l.life=a[3]}for(let a=On.length-1;a>=0;a--)r.has(On[a].id)||(vt.remove(On[a].mesh),On.splice(a,1));const o=new Set;for(const a of i.P){const l=a[0];o.add(l);let c=kt.find(p=>p.slot===l);c||(c=Gu(l,a[17]),c.K.x=a[1],c.K.z=a[2]);const u=c.K;if(c.local){const p=Math.hypot(a[1]-u.x,a[2]-u.z);p>2.5?(u.x=a[1],u.z=a[2]):p>.9&&(u.x+=(a[1]-u.x)*.25,u.z+=(a[2]-u.z)*.25),a[9]<u.chill-2&&(u.flinch=.55,Po("😣"),_t.rumble(120,.3)),q.sel=a[10],q.buildMode=!!a[11]}else u.tx=a[1],u.tz=a[2],u.tface=a[3],u.vx=a[4],u.vz=a[5],c.sel=a[10],c.buildMode=!!a[11];u.carrying=!!a[6],u.stun=a[7],u.faint=a[8],u.chill=a[9],u.rollP=a[12],u.rollTower=Ci(nn,a[13])||null;const h=Ci(nn,a[14])||null;u.chargeTower&&u.chargeTower!==h&&wi(u.chargeTower,0),u.chargeTower=h,u.charge=a[15],h&&wi(h,Math.min(1,u.charge));const d=a[16];if(d){const p=Ci(nn,d[0]),g=u.roll&&u.roll.tower===p?u.roll:null;u.roll=p?{tower:p,seq:d[1].split(","),i:d[2],done:d[3],shakes:d[4],shake:!!(g!=null&&g.shake)}:null,c.local&&g&&u.roll&&(d[4]>(g.shakes||0)?(u.roll.shake=!0,Lt.bonk(),_t.rumble(150,.4)):d[3]>g.done?(Lt.stone(),Ct.emit(u.x,c.mesh.position.y+2.2,u.z,{n:10,color:"#8ff0ff",speed:1.6,up:1.6,life:.6,gravity:2})):d[2]>g.i&&Lt.tick(d[2]))}else u.roll=null;c.local&&(_t.rollMode=!!u.roll)}for(const a of kt.slice())!a.local&&!o.has(a.slot)&&(Vu(a.slot),La(`${a.name||"En vokter"} forlot spillet`))}function Ay(){for(const i of kt){if(i.local)continue;i.tag||(i.tag=document.createElement("div"),i.tag.className="ptag",i.tag.textContent=i.name||`Vokter ${i.slot+1}`,i.tag.style.borderColor=Ao(i.slot),document.body.appendChild(i.tag)),yt.set(i.K.x,i.mesh.position.y+3,i.K.z).project(qt);const e=yt.z<1&&Math.abs(yt.x)<1.05&&Math.abs(yt.y)<1.05&&q.phase!=="title";i.tag.style.display=e?"block":"none",e&&(i.tag.style.left=`${(yt.x*.5+.5)*innerWidth}px`,i.tag.style.top=`${(-yt.y*.5+.5)*innerHeight}px`)}}function Cy(i){if(D.tx===void 0)return;const e=1-Math.exp(-i*12);D.x+=(D.tx-D.x)*e,D.z+=(D.tz-D.z)*e,Math.hypot(D.tx-D.x,D.tz-D.z)>4&&(D.x=D.tx,D.z=D.tz)}function Ry(i){const e=1-Math.exp(-i*6);for(const t of hn){if(!t.alive||t.sx===void 0)continue;Math.hypot(t.sx-t.x,t.sz-t.z)>6?(t.x=t.sx,t.z=t.sz):(t.x+=(t.sx-t.x)*e,t.z+=(t.sz-t.z)*e),t.def.flying&&(t.y+=(t.sy-t.y)*e)}}function Py(i){q.phase==="prep"?(q.timer-=i,rn.timer.textContent=`Neste bølge om ${Math.ceil(Math.max(0,q.timer))} s`):q.phase==="wave"&&(rn.timer.textContent=`${Oe.left??hn.length} monstre igjen`)}function Ly(i){const e=1-Math.exp(-i*10);for(const t of Hn){if(t.sx===void 0)continue;t.x+=(t.sx-t.x)*e,t.y+=(t.sy-t.y)*e,t.z+=(t.sz-t.z)*e,t.phase+=i,t.life-=i;const n=Math.sin(t.phase*3)*.12;t.mesh.position.set(t.x,t.y+n,t.z),t.mesh.rotation.y+=i*3;const s=t.life<5;t.mesh.scale.setScalar((.8+Math.min(t.value,6)*.08)*(s?.55+.45*Math.max(0,t.life/5):1)),t.mesh.visible=!s||Math.sin(t.life*(t.life<1.5?30:16))>-.4,Math.random()<i*2.5&&Ct.emit(t.x,t.y+.2,t.z,{n:1,color:"#ffb347",speed:.3,up:1.2,life:.6,gravity:-.5})}On.forEach((t,n)=>{t.life-=i,t.mesh.rotation.y+=i*1.5,t.mesh.position.y=Ge.heightAt(t.x,t.z)+.5+Math.sin(q.time*3+n)*.12,t.mesh.visible=t.life>4||Math.sin(t.life*12)>0})}function Dy(i){for(const c of Bu)Vt.consume(c);const e=Xs(Ge.plinths,D.x,D.z,et.reach,c=>!c.tower),t=Xs(nn,D.x,D.z,et.reach),n=Ge.lighthouse.pos,s=Math.hypot(n.x-D.x,n.z-D.z)<et.lighthouseReach,r=D.stun>0,o=$a(),a=(q.buildMode||!!e)&&!r&&!D.carrying,l=D.chargeTower;l&&Math.random()<i*20&&Ct.emit(D.x,Qt.position.y+2.2,D.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),op(i,{panelOpen:a,spot:o,tower:t,atLighthouse:s,stunned:r,target:l})}function Iy(i){if(!Oe.guest||q.phase==="title")return;const e=Bu.filter(r=>_t.pressed.has(r));Oe.sendT-=i;const t=_t.move,n=t.x!==Oe.lastX||t.z!==Oe.lastZ;if(!e.length&&!Oe.goal&&!(n&&Oe.sendT<=0)&&Oe.sendT>-.25)return;Oe.sendT=1/30,Oe.lastX=t.x,Oe.lastZ=t.z;const s={t:"in",x:+t.x.toFixed(3),z:+t.z.toFixed(3),yaw:+ji.toFixed(3)};e.length&&(s.a=e),Oe.goal&&(s.g=Oe.goal.map(r=>+r.toFixed(2)),Oe.goal=null),Oe.net.send(s)}const Uy=LM({worldIndex:bn,worldName:un.name,timeOfDay:gs,params:ln,onHostStart:i=>{Object.assign(Oe,{host:!0,net:i}),kt[0].name=i.hostName;for(const e of i.players)e.slot>0&&Gu(e.slot,e.name);kr()},onGuestStart:i=>{Object.assign(Oe,{guest:!0,net:i}),kt[0].slot=i.slot,up(Qt,Ao(i.slot)),kr()},onMessage:Sy,onLeave:(i,e)=>{Vu(i),La(`${e} forlot spillet`)},onHostGone:()=>{La("Verten forlot spillet"),setTimeout(()=>{location.href=`${location.pathname}?world=${bn}`},2500)}});{const i=ct("worlds"),e=Mo();if(js.forEach((t,n)=>{const s=document.createElement("button");s.className="world"+(n===bn?" sel":"")+(n>=e?" locked":""),s.innerHTML=`<b>${n>=e?"🔒 ":""}${t.name}</b><small>${n>=e?"Vinn forrige verden for å låse opp":t.blurb}</small>`,s.disabled=n>=e,s.addEventListener("click",()=>{n!==bn&&(location.href=`${location.pathname}?world=${n}`)}),i.appendChild(s)}),ct("btn-start").textContent=`Tenn gløden på ${un.name}`,un.skyDusk){const t=document.createElement("button");t.id="btn-tod",t.className="tod",t.textContent=gs==="skumring"?"🌅 Skumring (bytt til dag)":"☀️ Dag (bytt til skumring)",t.addEventListener("click",()=>{try{localStorage.setItem("glod-tid",gs==="skumring"?"dag":"skumring")}catch{}location.href=`${location.pathname}?world=${bn}&tid=${gs==="skumring"?"dag":"skumring"}`}),ct("worlds").after(t)}}ct("btn-quality").addEventListener("click",()=>$d(Ti==="high"?"low":"high"));addEventListener("keydown",i=>{i.code==="KeyG"&&!i.repeat&&$d(Ti==="high"?"low":"high")});ct("btn-quality").textContent=Ti==="high"?"Høy":"Lav";ct("btn-pause").classList.add("hidden");function zy(){q.embers=999;const i=Ge.lighthouse.pos,e=Ge.plinths.slice().sort((t,n)=>Math.hypot(t.x-i.x,t.z-i.z-4)-Math.hypot(n.x-i.x,n.z-i.z-4));["ring","chips","speaker","ring","chips","ring"].forEach((t,n)=>{const s=e[n];D.x=s.x+1.9,D.z=s.z,Ia(t),n<3&&(nn[nn.length-1].level=n+1,Cu(nn[nn.length-1],n+1))}),D.x=i.x+1,D.z=i.z+6,D.carrying=!0,q.wave=Number(ln.get("demo"))||4,q.wave-=1,zu(),q.waveClock=6,q.embers=142}const Ny=new bd;let Ol=0,pa=0,ma=0;window.__fpsSamples=[];window.__game={get net(){return Uy.net},get snapBytes(){return Oe.lastSnapBytes},players:kt,addRemotePlayer:(i,e)=>Gu(i,e),removeRemotePlayer:i=>Vu(i),S:q,monsters:hn,towers:nn,embers:Hn,world:Ge,K:D,renderer:zn,camera:qt,input:_t,buildSpot:()=>$a(),build:i=>Ia(i),renderOnce:()=>Co.render(0),outlineCats:wd,spawnMonster:qa,projectiles:vi,damage:Us,dropBag:(i,e)=>ku(i,e),ghost:Ki,get camYaw(){return ji}};window.__errors=[];addEventListener("error",i=>window.__errors.push(String(i.message)));addEventListener("unhandledrejection",i=>window.__errors.push(String(i.reason)));function fp(){requestAnimationFrame(fp);const i=Ny.getDelta(),e=Math.min(i,.05);if(q.paused||(q.time+=e),_t.update(e),Iy(i),Oe.snap){const t=Oe.snap;Oe.snap=null,Ty(t)}q.paused||(Ge.update(q.time),FM.update(q.time));for(let t=0;t<zM&&!q.paused&&(q.phase==="prep"||q.phase==="wave");t++)t>0&&(q.time+=e,Df(e)),_y(e),ty(e),Oe.guest&&Ry(e),QM(e),ey(e),ry(e),$M(e);if(q.paused||Df(e),hy(e),Ey(i),kt.length>1&&Ay(),!q.paused){if(Ct.update(e),Math.random()<e*(4+10*(q.lights/zr))){const t=Ge.lighthouse.tip;_s.emit(t.x,t.y,t.z,{n:1,color:"#e8e2dc",speed:.5,up:1.6,life:3.2,gravity:-.15})}_s.update(e)}if(gy(e),zn.info.reset(),Co.render(e),Ol++,pa+=i,pa>=.5){const t=Ol/pa;window.__fpsSamples.push(t),window.__fpsSamples.length>240&&window.__fpsSamples.shift(),Iu.textContent=`${t.toFixed(0)} fps · ${zn.info.render.calls} dc`,ma=t<(es?28:45)?ma+1:0,ma>=6&&fs>1&&(fs=Math.max(1,fs-.25),zn.setPixelRatio(fs),Ro(),ma=0,window.__dprDrops=(window.__dprDrops||0)+1,ln.has("debug")&&console.info(`[fps] ${t.toFixed(0)} fps over tid → dpr senket til ${fs}`)),Ol=0,pa=0}}fp();Hd&&ln.has("autostart")&&kr();function za(i,e){let t=i-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}
