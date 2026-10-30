(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const iu="170",_p=0,qu=1,Mp=2,Nf=1,kf=2,ji=3,gs=0,Bn=1,an=2,En=0,fs=1,li=2,Yu=3,$u=4,Ff=5,xi=100,yp=101,bp=102,Sp=103,wp=104,to=200,Ep=201,Tp=202,Ap=203,Wl=204,Xl=205,ql=206,Cp=207,Yl=208,Rp=209,Pp=210,Lp=211,Dp=212,Ip=213,Up=214,$l=0,jl=1,Kl=2,Rr=3,Zl=4,Jl=5,Ql=6,ec=7,su=0,zp=1,Np=2,ds=0,Of=1,Bf=2,Gf=3,ru=4,kp=5,Vf=6,Hf=7,Wf=300,Pr=301,Lr=302,tc=303,nc=304,Fa=306,ki=1e3,Ds=1001,ic=1002,An=1003,Fp=1004,Do=1005,zi=1006,el=1007,Is=1008,Fi=1009,Xf=1010,qf=1011,mo=1012,ou=1013,Bs=1014,Si=1015,oi=1016,au=1017,lu=1018,Gs=1020,Yf=35902,$f=1021,jf=1022,si=1023,Kf=1024,Zf=1025,br=1026,Vs=1027,Oa=1028,cu=1029,Jf=1030,uu=1031,hu=1033,va=33776,xa=33777,_a=33778,Ma=33779,sc=35840,rc=35841,oc=35842,ac=35843,lc=36196,cc=37492,uc=37496,hc=37808,fc=37809,dc=37810,pc=37811,mc=37812,gc=37813,vc=37814,xc=37815,_c=37816,Mc=37817,yc=37818,bc=37819,Sc=37820,wc=37821,ya=36492,Ec=36494,Tc=36495,Qf=36283,Ac=36284,Cc=36285,Rc=36286,Op=3200,Bp=3201,fu=0,Gp=1,cs="",Tn="srgb",Fr="srgb-linear",Ba="linear",kt="srgb",er=7680,ju=519,Vp=512,Hp=513,Wp=514,ed=515,Xp=516,qp=517,Yp=518,$p=519,Ku=35044,Pc=35048,Zu="300 es",Qi=2e3,Ra=2001;class Or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ju=1234567;const ro=Math.PI/180,go=180/Math.PI;function Ys(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function Mn(i,e,t){return Math.max(e,Math.min(t,i))}function du(i,e){return(i%e+e)%e}function jp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Kp(i,e,t){return i!==e?(t-i)/(e-i):0}function oo(i,e,t){return(1-t)*i+t*e}function Zp(i,e,t,n){return oo(i,e,1-Math.exp(-t*n))}function Jp(i,e=1){return e-Math.abs(du(i,e*2)-e)}function Qp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function e0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function t0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function n0(i,e){return i+Math.random()*(e-i)}function i0(i){return i*(.5-Math.random())}function s0(i){i!==void 0&&(Ju=i);let e=Ju+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function r0(i){return i*ro}function o0(i){return i*go}function a0(i){return(i&i-1)===0&&i!==0}function l0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function c0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function u0(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const bt={DEG2RAD:ro,RAD2DEG:go,generateUUID:Ys,clamp:Mn,euclideanModulo:du,mapLinear:jp,inverseLerp:Kp,lerp:oo,damp:Zp,pingpong:Jp,smoothstep:Qp,smootherstep:e0,randInt:t0,randFloat:n0,randFloatSpread:i0,seededRandom:s0,degToRad:r0,radToDeg:o0,isPowerOfTwo:a0,ceilPowerOfTwo:l0,floorPowerOfTwo:c0,setQuaternionFromProperEuler:u0,normalize:Nn,denormalize:xr};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class St{constructor(e,t,n,s,r,o,a,l,c){St.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],M=s[1],b=s[4],x=s[7],R=s[2],S=s[5],T=s[8];return r[0]=o*_+a*M+l*R,r[3]=o*m+a*b+l*S,r[6]=o*f+a*x+l*T,r[1]=c*_+u*M+h*R,r[4]=c*m+u*b+h*S,r[7]=c*f+u*x+h*T,r[2]=d*_+p*M+g*R,r[5]=d*m+p*b+g*S,r[8]=d*f+p*x+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=t*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tl.makeScale(e,t)),this}rotate(e){return this.premultiply(tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tl=new St;function td(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Pa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function h0(){const i=Pa("canvas");return i.style.display="block",i}const Qu={};function no(i){i in Qu||(Qu[i]=!0,console.warn(i))}function f0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function d0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function p0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ct={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===kt&&(i.r=es(i.r),i.g=es(i.g),i.b=es(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===kt&&(i.r=Sr(i.r),i.g=Sr(i.g),i.b=Sr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===cs?Ba:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function es(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const eh=[.64,.33,.3,.6,.15,.06],th=[.2126,.7152,.0722],nh=[.3127,.329],ih=new St().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new St().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ct.define({[Fr]:{primaries:eh,whitePoint:nh,transfer:Ba,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:th,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:eh,whitePoint:nh,transfer:kt,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:th,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}});let tr;class m0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{tr===void 0&&(tr=Pa("canvas")),tr.width=e.width,tr.height=e.height;const n=tr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=es(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(es(t[n]/255)*255):t[n]=es(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let g0=0;class nd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=Ys(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nl(s[o].image)):r.push(nl(s[o]))}else r=nl(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function nl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?m0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let v0=0;class In extends Or{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,n=Ds,s=Ds,r=zi,o=Is,a=si,l=Fi,c=In.DEFAULT_ANISOTROPY,u=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Ys(),this.name="",this.source=new nd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ki:e.x=e.x-Math.floor(e.x);break;case Ds:e.x=e.x<0?0:1;break;case ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ki:e.y=e.y-Math.floor(e.y);break;case Ds:e.y=e.y<0?0:1;break;case ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Wf;In.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,n=0,s=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,x=(p+1)/2,R=(f+1)/2,S=(u+d)/4,T=(h+_)/4,C=(g+m)/4;return b>x&&b>R?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=S/n,r=T/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=C/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=T/r,s=C/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class x0 extends Or{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new In(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new nd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends x0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class id extends In{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _0 extends In{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wo{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==p||u!==g){let m=1-a;const f=l*d+c*p+u*g+h*_,M=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const R=Math.sqrt(b),S=Math.atan2(R,f*M);m=Math.sin(m*S)/R,a=Math.sin(a*S)/R}const x=a*M;if(l=l*m+d*x,c=c*m+p*x,u=u*m+g*x,h=h*m+_*x,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-a*p,e[t+2]=c*g+u*p+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return il.copy(this).projectOnVector(e),this.sub(il)}reflect(e){return this.sub(il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const il=new O,rh=new wo;class $s{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(r,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Io.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Io.copy(n.boundingBox)),Io.applyMatrix4(e.matrixWorld),this.union(Io)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),Uo.subVectors(this.max,qr),nr.subVectors(e.a,qr),ir.subVectors(e.b,qr),sr.subVectors(e.c,qr),ns.subVectors(ir,nr),is.subVectors(sr,ir),ys.subVectors(nr,sr);let t=[0,-ns.z,ns.y,0,-is.z,is.y,0,-ys.z,ys.y,ns.z,0,-ns.x,is.z,0,-is.x,ys.z,0,-ys.x,-ns.y,ns.x,0,-is.y,is.x,0,-ys.y,ys.x,0];return!sl(t,nr,ir,sr,Uo)||(t=[1,0,0,0,1,0,0,0,1],!sl(t,nr,ir,sr,Uo))?!1:(zo.crossVectors(ns,is),t=[zo.x,zo.y,zo.z],sl(t,nr,ir,sr,Uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gi=[new O,new O,new O,new O,new O,new O,new O,new O],pi=new O,Io=new $s,nr=new O,ir=new O,sr=new O,ns=new O,is=new O,ys=new O,qr=new O,Uo=new O,zo=new O,bs=new O;function sl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){bs.fromArray(i,r);const a=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),l=e.dot(bs),c=t.dot(bs),u=n.dot(bs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const M0=new $s,Yr=new O,rl=new O;class Br{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):M0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);const t=Yr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Yr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(rl)),this.expandByPoint(Yr.copy(e.center).sub(rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vi=new O,ol=new O,No=new O,ss=new O,al=new O,ko=new O,ll=new O;class pu{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ol.copy(e).add(t).multiplyScalar(.5),No.copy(t).sub(e).normalize(),ss.copy(this.origin).sub(ol);const r=e.distanceTo(t)*.5,o=-this.direction.dot(No),a=ss.dot(this.direction),l=-ss.dot(No),c=ss.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ol).addScaledVector(No,d),p}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);const n=Vi.dot(this.direction),s=Vi.dot(Vi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,n,s,r){al.subVectors(t,e),ko.subVectors(n,e),ll.crossVectors(al,ko);let o=this.direction.dot(ll),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ss.subVectors(this.origin,e);const l=a*this.direction.dot(ko.crossVectors(ss,ko));if(l<0)return null;const c=a*this.direction.dot(al.cross(ss));if(c<0||l+c>o)return null;const u=-a*ss.dot(ll);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,n,s,r,o,a,l,c,u,h,d,p,g,_,m){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,p,g,_,m)}set(e,t,n,s,r,o,a,l,c,u,h,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/rr.setFromMatrixColumn(e,0).length(),r=1/rr.setFromMatrixColumn(e,1).length(),o=1/rr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(y0,e,b0)}lookAt(e,t,n){const s=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),rs.crossVectors(n,qn),rs.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),rs.crossVectors(n,qn)),rs.normalize(),Fo.crossVectors(qn,rs),s[0]=rs.x,s[4]=Fo.x,s[8]=qn.x,s[1]=rs.y,s[5]=Fo.y,s[9]=qn.y,s[2]=rs.z,s[6]=Fo.z,s[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],M=n[3],b=n[7],x=n[11],R=n[15],S=s[0],T=s[4],C=s[8],y=s[12],v=s[1],A=s[5],k=s[9],L=s[13],U=s[2],X=s[6],B=s[10],z=s[14],I=s[3],j=s[7],Q=s[11],se=s[15];return r[0]=o*S+a*v+l*U+c*I,r[4]=o*T+a*A+l*X+c*j,r[8]=o*C+a*k+l*B+c*Q,r[12]=o*y+a*L+l*z+c*se,r[1]=u*S+h*v+d*U+p*I,r[5]=u*T+h*A+d*X+p*j,r[9]=u*C+h*k+d*B+p*Q,r[13]=u*y+h*L+d*z+p*se,r[2]=g*S+_*v+m*U+f*I,r[6]=g*T+_*A+m*X+f*j,r[10]=g*C+_*k+m*B+f*Q,r[14]=g*y+_*L+m*z+f*se,r[3]=M*S+b*v+x*U+R*I,r[7]=M*T+b*A+x*X+R*j,r[11]=M*C+b*k+x*B+R*Q,r[15]=M*y+b*L+x*z+R*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*p-n*l*p)+_*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+m*(+t*c*h-t*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+f*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],M=h*m*c-_*d*c+_*l*p-a*m*p-h*l*f+a*d*f,b=g*d*c-u*m*c-g*l*p+o*m*p+u*l*f-o*d*f,x=u*_*c-g*h*c+g*a*p-o*_*p-u*a*f+o*h*f,R=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,S=t*M+n*b+s*x+r*R;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=M*T,e[1]=(_*d*r-h*m*r-_*s*p+n*m*p+h*s*f-n*d*f)*T,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*f+n*l*f)*T,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*p-n*l*p)*T,e[4]=b*T,e[5]=(u*m*r-g*d*r+g*s*p-t*m*p-u*s*f+t*d*f)*T,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*T,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*p+t*l*p)*T,e[8]=x*T,e[9]=(g*h*r-u*_*r-g*n*p+t*_*p+u*n*f-t*h*f)*T,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*f+t*a*f)*T,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*p-t*a*p)*T,e[12]=R*T,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*m+t*h*m)*T,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*T,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,g=r*h,_=o*u,m=o*h,f=a*h,M=l*c,b=l*u,x=l*h,R=n.x,S=n.y,T=n.z;return s[0]=(1-(_+f))*R,s[1]=(p+x)*R,s[2]=(g-b)*R,s[3]=0,s[4]=(p-x)*S,s[5]=(1-(d+f))*S,s[6]=(m+M)*S,s[7]=0,s[8]=(g+b)*T,s[9]=(m-M)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=rr.set(s[0],s[1],s[2]).length();const o=rr.set(s[4],s[5],s[6]).length(),a=rr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],mi.copy(this);const c=1/r,u=1/o,h=1/a;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=u,mi.elements[5]*=u,mi.elements[6]*=u,mi.elements[8]*=h,mi.elements[9]*=h,mi.elements[10]*=h,t.setFromRotationMatrix(mi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Qi){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let p,g;if(a===Qi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ra)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Qi){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*c,p=(n+s)*u;let g,_;if(a===Qi)g=(o+r)*h,_=-2*h;else if(a===Ra)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const rr=new O,mi=new Pt,y0=new O(0,0,0),b0=new O(1,1,1),rs=new O,Fo=new O,qn=new O,oh=new Pt,ah=new wo;class Oi{constructor(e=0,t=0,n=0,s=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ah.setFromEuler(this),this.setFromQuaternion(ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class mu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let S0=0;const lh=new O,or=new wo,Hi=new Pt,Oo=new O,$r=new O,w0=new O,E0=new wo,ch=new O(1,0,0),uh=new O(0,1,0),hh=new O(0,0,1),fh={type:"added"},T0={type:"removed"},ar={type:"childadded",child:null},cl={type:"childremoved",child:null};class Vt extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new O,t=new Oi,n=new wo,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pt},normalMatrix:{value:new St}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(ch,e)}rotateY(e){return this.rotateOnAxis(uh,e)}rotateZ(e){return this.rotateOnAxis(hh,e)}translateOnAxis(e,t){return lh.copy(e).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ch,e)}translateY(e){return this.translateOnAxis(uh,e)}translateZ(e){return this.translateOnAxis(hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oo.copy(e):Oo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt($r,Oo,this.up):Hi.lookAt(Oo,$r,this.up),this.quaternion.setFromRotationMatrix(Hi),s&&(Hi.extractRotation(s.matrixWorld),or.setFromRotationMatrix(Hi),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fh),ar.child=e,this.dispatchEvent(ar),ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(T0),cl.child=e,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fh),ar.child=e,this.dispatchEvent(ar),ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,w0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,E0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Vt.DEFAULT_UP=new O(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new O,Wi=new O,ul=new O,Xi=new O,lr=new O,cr=new O,dh=new O,hl=new O,fl=new O,dl=new O,pl=new Bt,ml=new Bt,gl=new Bt;class _i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),gi.subVectors(e,t),s.cross(gi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){gi.subVectors(s,t),Wi.subVectors(n,t),ul.subVectors(e,t);const o=gi.dot(gi),a=gi.dot(Wi),l=gi.dot(ul),c=Wi.dot(Wi),u=Wi.dot(ul),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xi.x),l.addScaledVector(o,Xi.y),l.addScaledVector(a,Xi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return pl.setScalar(0),ml.setScalar(0),gl.setScalar(0),pl.fromBufferAttribute(e,t),ml.fromBufferAttribute(e,n),gl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(pl,r.x),o.addScaledVector(ml,r.y),o.addScaledVector(gl,r.z),o}static isFrontFacing(e,t,n,s){return gi.subVectors(n,t),Wi.subVectors(e,t),gi.cross(Wi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),gi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return _i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;lr.subVectors(s,n),cr.subVectors(r,n),hl.subVectors(e,n);const l=lr.dot(hl),c=cr.dot(hl);if(l<=0&&c<=0)return t.copy(n);fl.subVectors(e,s);const u=lr.dot(fl),h=cr.dot(fl);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(lr,o);dl.subVectors(e,r);const p=lr.dot(dl),g=cr.dot(dl);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(cr,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return dh.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(dh,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(lr,o).addScaledVector(cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Bo={h:0,s:0,l:0};function vl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ct.workingColorSpace){if(e=du(e,1),t=Mn(t,0,1),n=Mn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=vl(o,r,e+1/3),this.g=vl(o,r,e),this.b=vl(o,r,e-1/3)}return Ct.toWorkingColorSpace(this,s),this}setStyle(e,t=Tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){const n=sd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}copyLinearToSRGB(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return Ct.fromWorkingColorSpace(Ln.copy(this),e),Math.round(Mn(Ln.r*255,0,255))*65536+Math.round(Mn(Ln.g*255,0,255))*256+Math.round(Mn(Ln.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(Ln.copy(this),t);const n=Ln.r,s=Ln.g,r=Ln.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Tn){Ct.fromWorkingColorSpace(Ln.copy(this),e);const t=Ln.r,n=Ln.g,s=Ln.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(os),e.getHSL(Bo);const n=oo(os.h,Bo.h,t),s=oo(os.s,Bo.s,t),r=oo(os.l,Bo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Re;Re.NAMES=sd;let A0=0;class js extends Or{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Ys(),this.name="",this.blending=fs,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(n.blending=this.blending),this.side!==gs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wl&&(n.blendSrc=this.blendSrc),this.blendDst!==Xl&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ju&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(n.stencilFail=this.stencilFail),this.stencilZFail!==er&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rt extends js{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new O,Go=new Ce;class Ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ku,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Go.fromBufferAttribute(this,t),Go.applyMatrix3(e),this.setXY(t,Go.x,Go.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array),s=Nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array),s=Nn(s,this.array),r=Nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ku&&(e.usage=this.usage),e}}class rd extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class od extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class st extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let C0=0;const ni=new Pt,xl=new Vt,ur=new O,Yn=new $s,jr=new $s,xn=new O;class Lt extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(td(e)?od:rd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new St().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return xl.lookAt(e),xl.updateMatrix(),this.applyMatrix4(xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new st(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];jr.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(Yn.min,jr.min),Yn.expandByPoint(xn),xn.addVectors(Yn.max,jr.max),Yn.expandByPoint(xn)):(Yn.expandByPoint(jr.min),Yn.expandByPoint(jr.max))}Yn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)xn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(xn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xn.fromBufferAttribute(a,c),l&&(ur.fromBufferAttribute(e,c),xn.add(ur)),s=Math.max(s,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new O,l[C]=new O;const c=new O,u=new O,h=new O,d=new Ce,p=new Ce,g=new Ce,_=new O,m=new O;function f(C,y,v){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,v),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,v),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(A),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(A),a[C].add(_),a[y].add(_),a[v].add(_),l[C].add(m),l[y].add(m),l[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,y=M.length;C<y;++C){const v=M[C],A=v.start,k=v.count;for(let L=A,U=A+k;L<U;L+=3)f(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const b=new O,x=new O,R=new O,S=new O;function T(C){R.fromBufferAttribute(s,C),S.copy(R);const y=a[C];b.copy(y),b.sub(R.multiplyScalar(R.dot(y))).normalize(),x.crossVectors(S,y);const A=x.dot(l[C])<0?-1:1;o.setXYZW(C,b.x,b.y,b.z,A)}for(let C=0,y=M.length;C<y;++C){const v=M[C],A=v.start,k=v.count;for(let L=A,U=A+k;L<U;L+=3)T(e.getX(L+0)),T(e.getX(L+1)),T(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new Ut(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ph=new Pt,Ss=new pu,Vo=new Br,mh=new O,Ho=new O,Wo=new O,Xo=new O,_l=new O,qo=new O,gh=new O,Yo=new O;class ot extends Vt{constructor(e=new Lt,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){qo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(_l.fromBufferAttribute(h,e),o?qo.addScaledVector(_l,u):qo.addScaledVector(_l.sub(t),u))}t.add(qo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(r),Ss.copy(e.ray).recast(e.near),!(Vo.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Vo,mh)===null||Ss.origin.distanceToSquared(mh)>(e.far-e.near)**2))&&(ph.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(ph),!(n.boundingBox!==null&&Ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,R=b;x<R;x+=3){const S=a.getX(x),T=a.getX(x+1),C=a.getX(x+2);s=$o(this,f,e,n,c,u,h,S,T,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);s=$o(this,o,e,n,c,u,h,M,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,R=b;x<R;x+=3){const S=x,T=x+1,C=x+2;s=$o(this,f,e,n,c,u,h,S,T,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=m,b=m+1,x=m+2;s=$o(this,o,e,n,c,u,h,M,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function R0(i,e,t,n,s,r,o,a){let l;if(e.side===Bn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===gs,a),l===null)return null;Yo.copy(a),Yo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Yo);return c<t.near||c>t.far?null:{distance:c,point:Yo.clone(),object:i}}function $o(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Ho),i.getVertexPosition(l,Wo),i.getVertexPosition(c,Xo);const u=R0(i,e,t,n,Ho,Wo,Xo,gh);if(u){const h=new O;_i.getBarycoord(gh,Ho,Wo,Xo,h),s&&(u.uv=_i.getInterpolatedAttribute(s,a,l,c,h,new Ce)),r&&(u.uv1=_i.getInterpolatedAttribute(r,a,l,c,h,new Ce)),o&&(u.normal=_i.getInterpolatedAttribute(o,a,l,c,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new O,materialIndex:0};_i.getNormal(Ho,Wo,Xo,d.normal),u.face=d,u.barycoord=h}return u}class Vn extends Lt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(h,2));function g(_,m,f,M,b,x,R,S,T,C,y){const v=x/T,A=R/C,k=x/2,L=R/2,U=S/2,X=T+1,B=C+1;let z=0,I=0;const j=new O;for(let Q=0;Q<B;Q++){const se=Q*A-L;for(let _e=0;_e<X;_e++){const qe=_e*v-k;j[_]=qe*M,j[m]=se*b,j[f]=U,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[f]=S>0?1:-1,u.push(j.x,j.y,j.z),h.push(_e/T),h.push(1-Q/C),z+=1}}for(let Q=0;Q<C;Q++)for(let se=0;se<T;se++){const _e=d+se+X*Q,qe=d+se+X*(Q+1),V=d+(se+1)+X*(Q+1),te=d+(se+1)+X*Q;l.push(_e,qe,te),l.push(qe,V,te),I+=6}a.addGroup(p,I,y),p+=I,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Dr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function kn(i){const e={};for(let t=0;t<i.length;t++){const n=Dr(i[t]);for(const s in n)e[s]=n[s]}return e}function P0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ad(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const Mi={clone:Dr,merge:kn};var L0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class en extends js{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L0,this.fragmentShader=D0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=P0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ld extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const as=new O,vh=new Ce,xh=new Ce;class jn extends ld{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return go*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,t){return this.getViewBounds(e,vh,xh),t.subVectors(xh,vh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ro*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hr=-90,fr=1;class I0 extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new jn(hr,fr,e,t);s.layers=this.layers,this.add(s);const r=new jn(hr,fr,e,t);r.layers=this.layers,this.add(r);const o=new jn(hr,fr,e,t);o.layers=this.layers,this.add(o);const a=new jn(hr,fr,e,t);a.layers=this.layers,this.add(a);const l=new jn(hr,fr,e,t);l.layers=this.layers,this.add(l);const c=new jn(hr,fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Qi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class cd extends In{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Pr,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class U0 extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new cd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vn(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:En});r.uniforms.tEquirect.value=t;const o=new ot(s,r),a=t.minFilter;return t.minFilter===Is&&(t.minFilter=zi),new I0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Ml=new O,z0=new O,N0=new St;class Rs{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ml.subVectors(n,t).cross(z0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ml),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||N0.getNormalMatrix(e),s=this.coplanarPoint(Ml).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new Br,jo=new O;class gu{constructor(e=new Rs,t=new Rs,n=new Rs,s=new Rs,r=new Rs,o=new Rs){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qi){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],M=s[13],b=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,m-p,x-f).normalize(),n[1].setComponents(l+r,d+c,m+p,x+f).normalize(),n[2].setComponents(l+o,d+u,m+g,x+M).normalize(),n[3].setComponents(l-o,d-u,m-g,x-M).normalize(),n[4].setComponents(l-a,d-h,m-_,x-b).normalize(),t===Qi)n[5].setComponents(l+a,d+h,m+_,x+b).normalize();else if(t===Ra)n[5].setComponents(a,h,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){return ws.center.set(0,0,0),ws.radius=.7071067811865476,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(jo.x=s.normal.x>0?e.max.x:e.min.x,jo.y=s.normal.y>0?e.max.y:e.min.y,jo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(jo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ud(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function k0(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class ci extends Lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const M=f*d-o;for(let b=0;b<c;b++){const x=b*h-r;g.push(x,-M,0),_.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){const b=M+c*f,x=M+c*(f+1),R=M+1+c*(f+1),S=M+1+c*f;p.push(b,x,S),p.push(x,R,S)}this.setIndex(p),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.width,e.height,e.widthSegments,e.heightSegments)}}var F0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O0=`#ifdef USE_ALPHAHASH
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
#endif`,B0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W0=`#ifdef USE_AOMAP
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
#endif`,X0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q0=`#ifdef USE_BATCHING
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
#endif`,Y0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,K0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Z0=`#ifdef USE_IRIDESCENCE
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
#endif`,J0=`#ifdef USE_BUMPMAP
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
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
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
#endif`,am=`#define PI 3.141592653589793
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
} // validated`,lm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cm=`vec3 transformedNormal = objectNormal;
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
#endif`,um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pm="gl_FragColor = linearToOutputTexel( gl_FragColor );",mm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gm=`#ifdef USE_ENVMAP
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
#endif`,vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xm=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Em=`#ifdef USE_GRADIENTMAP
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
}`,Tm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rm=`uniform bool receiveShadow;
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
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zm=`PhysicalMaterial material;
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
#endif`,Nm=`struct PhysicalMaterial {
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
}`,km=`
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
#endif`,Fm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ym=`#if defined( USE_POINTS_UV )
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
#endif`,$m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qm=`#ifdef USE_MORPHTARGETS
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
#endif`,eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ng=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,og=`#ifdef USE_NORMALMAP
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
#endif`,ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_g=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bg=`float getShadowMask() {
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
}`,Sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wg=`#ifdef USE_SKINNING
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
#endif`,Eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tg=`#ifdef USE_SKINNING
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
#endif`,Ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lg=`#ifdef USE_TRANSMISSION
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
#endif`,Dg=`#ifdef USE_TRANSMISSION
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
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fg=`uniform sampler2D t2D;
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`#include <common>
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
}`,Wg=`#if DEPTH_PACKING == 3200
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
}`,Xg=`#define DISTANCE
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
}`,qg=`#define DISTANCE
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`uniform float scale;
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
}`,Kg=`uniform vec3 diffuse;
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
}`,Zg=`#include <common>
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
}`,Jg=`uniform vec3 diffuse;
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
}`,Qg=`#define LAMBERT
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
}`,ev=`#define LAMBERT
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
}`,tv=`#define MATCAP
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
}`,nv=`#define MATCAP
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
}`,iv=`#define NORMAL
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
}`,sv=`#define NORMAL
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
}`,rv=`#define PHONG
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
}`,ov=`#define PHONG
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
}`,av=`#define STANDARD
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
}`,lv=`#define STANDARD
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
}`,cv=`#define TOON
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
}`,uv=`#define TOON
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
}`,hv=`uniform float size;
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
}`,fv=`uniform vec3 diffuse;
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
}`,dv=`#include <common>
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
}`,pv=`uniform vec3 color;
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
}`,mv=`uniform float rotation;
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
}`,gv=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:F0,alphahash_pars_fragment:O0,alphamap_fragment:B0,alphamap_pars_fragment:G0,alphatest_fragment:V0,alphatest_pars_fragment:H0,aomap_fragment:W0,aomap_pars_fragment:X0,batching_pars_vertex:q0,batching_vertex:Y0,begin_vertex:$0,beginnormal_vertex:j0,bsdfs:K0,iridescence_fragment:Z0,bumpmap_pars_fragment:J0,clipping_planes_fragment:Q0,clipping_planes_pars_fragment:em,clipping_planes_pars_vertex:tm,clipping_planes_vertex:nm,color_fragment:im,color_pars_fragment:sm,color_pars_vertex:rm,color_vertex:om,common:am,cube_uv_reflection_fragment:lm,defaultnormal_vertex:cm,displacementmap_pars_vertex:um,displacementmap_vertex:hm,emissivemap_fragment:fm,emissivemap_pars_fragment:dm,colorspace_fragment:pm,colorspace_pars_fragment:mm,envmap_fragment:gm,envmap_common_pars_fragment:vm,envmap_pars_fragment:xm,envmap_pars_vertex:_m,envmap_physical_pars_fragment:Pm,envmap_vertex:Mm,fog_vertex:ym,fog_pars_vertex:bm,fog_fragment:Sm,fog_pars_fragment:wm,gradientmap_pars_fragment:Em,lightmap_pars_fragment:Tm,lights_lambert_fragment:Am,lights_lambert_pars_fragment:Cm,lights_pars_begin:Rm,lights_toon_fragment:Lm,lights_toon_pars_fragment:Dm,lights_phong_fragment:Im,lights_phong_pars_fragment:Um,lights_physical_fragment:zm,lights_physical_pars_fragment:Nm,lights_fragment_begin:km,lights_fragment_maps:Fm,lights_fragment_end:Om,logdepthbuf_fragment:Bm,logdepthbuf_pars_fragment:Gm,logdepthbuf_pars_vertex:Vm,logdepthbuf_vertex:Hm,map_fragment:Wm,map_pars_fragment:Xm,map_particle_fragment:qm,map_particle_pars_fragment:Ym,metalnessmap_fragment:$m,metalnessmap_pars_fragment:jm,morphinstance_vertex:Km,morphcolor_vertex:Zm,morphnormal_vertex:Jm,morphtarget_pars_vertex:Qm,morphtarget_vertex:eg,normal_fragment_begin:tg,normal_fragment_maps:ng,normal_pars_fragment:ig,normal_pars_vertex:sg,normal_vertex:rg,normalmap_pars_fragment:og,clearcoat_normal_fragment_begin:ag,clearcoat_normal_fragment_maps:lg,clearcoat_pars_fragment:cg,iridescence_pars_fragment:ug,opaque_fragment:hg,packing:fg,premultiplied_alpha_fragment:dg,project_vertex:pg,dithering_fragment:mg,dithering_pars_fragment:gg,roughnessmap_fragment:vg,roughnessmap_pars_fragment:xg,shadowmap_pars_fragment:_g,shadowmap_pars_vertex:Mg,shadowmap_vertex:yg,shadowmask_pars_fragment:bg,skinbase_vertex:Sg,skinning_pars_vertex:wg,skinning_vertex:Eg,skinnormal_vertex:Tg,specularmap_fragment:Ag,specularmap_pars_fragment:Cg,tonemapping_fragment:Rg,tonemapping_pars_fragment:Pg,transmission_fragment:Lg,transmission_pars_fragment:Dg,uv_pars_fragment:Ig,uv_pars_vertex:Ug,uv_vertex:zg,worldpos_vertex:Ng,background_vert:kg,background_frag:Fg,backgroundCube_vert:Og,backgroundCube_frag:Bg,cube_vert:Gg,cube_frag:Vg,depth_vert:Hg,depth_frag:Wg,distanceRGBA_vert:Xg,distanceRGBA_frag:qg,equirect_vert:Yg,equirect_frag:$g,linedashed_vert:jg,linedashed_frag:Kg,meshbasic_vert:Zg,meshbasic_frag:Jg,meshlambert_vert:Qg,meshlambert_frag:ev,meshmatcap_vert:tv,meshmatcap_frag:nv,meshnormal_vert:iv,meshnormal_frag:sv,meshphong_vert:rv,meshphong_frag:ov,meshphysical_vert:av,meshphysical_frag:lv,meshtoon_vert:cv,meshtoon_frag:uv,points_vert:hv,points_frag:fv,shadow_vert:dv,shadow_frag:pv,sprite_vert:mv,sprite_frag:gv},Xe={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},envMapRotation:{value:new St},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},Ii={basic:{uniforms:kn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:kn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Re(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:kn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:kn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:kn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new Re(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:kn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:kn([Xe.points,Xe.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:kn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:kn([Xe.common,Xe.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:kn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:kn([Xe.sprite,Xe.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new St}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:kn([Xe.common,Xe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:kn([Xe.lights,Xe.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Ii.physical={uniforms:kn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const Ko={r:0,b:0,g:0},Es=new Oi,vv=new Pt;function xv(i,e,t,n,s,r,o){const a=new Re(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?t:e).get(b)),b}function _(M){let b=!1;const x=g(M);x===null?f(a,l):x&&x.isColor&&(f(x,1),b=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,b){const x=g(b);x&&(x.isCubeTexture||x.mapping===Fa)?(u===void 0&&(u=new ot(new Vn(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Dr(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Es.copy(b.backgroundRotation),Es.x*=-1,Es.y*=-1,Es.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vv.makeRotationFromEuler(Es)),u.material.toneMapped=Ct.getTransfer(x.colorSpace)!==kt,(h!==x||d!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,p=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ot(new ci(2,2),new en({name:"BackgroundMaterial",uniforms:Dr(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Ct.getTransfer(x.colorSpace)!==kt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,b){M.getRGB(Ko,ad(i)),n.buffers.color.setClear(Ko.r,Ko.g,Ko.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),l=b,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(a,l)},render:_,addToRenderList:m}}function _v(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(v,A,k,L,U){let X=!1;const B=h(L,k,A);r!==B&&(r=B,c(r.object)),X=p(v,L,k,U),X&&g(v,L,k,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(v,A,k,L),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,A,k){const L=k.wireframe===!0;let U=n[v.id];U===void 0&&(U={},n[v.id]=U);let X=U[A.id];X===void 0&&(X={},U[A.id]=X);let B=X[L];return B===void 0&&(B=d(l()),X[L]=B),B}function d(v){const A=[],k=[],L=[];for(let U=0;U<t;U++)A[U]=0,k[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:k,attributeDivisors:L,object:v,attributes:{},index:null}}function p(v,A,k,L){const U=r.attributes,X=A.attributes;let B=0;const z=k.getAttributes();for(const I in z)if(z[I].location>=0){const Q=U[I];let se=X[I];if(se===void 0&&(I==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),I==="instanceColor"&&v.instanceColor&&(se=v.instanceColor)),Q===void 0||Q.attribute!==se||se&&Q.data!==se.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function g(v,A,k,L){const U={},X=A.attributes;let B=0;const z=k.getAttributes();for(const I in z)if(z[I].location>=0){let Q=X[I];Q===void 0&&(I==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),I==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor));const se={};se.attribute=Q,Q&&Q.data&&(se.data=Q.data),U[I]=se,B++}r.attributes=U,r.attributesNum=B,r.index=L}function _(){const v=r.newAttributes;for(let A=0,k=v.length;A<k;A++)v[A]=0}function m(v){f(v,0)}function f(v,A){const k=r.newAttributes,L=r.enabledAttributes,U=r.attributeDivisors;k[v]=1,L[v]===0&&(i.enableVertexAttribArray(v),L[v]=1),U[v]!==A&&(i.vertexAttribDivisor(v,A),U[v]=A)}function M(){const v=r.newAttributes,A=r.enabledAttributes;for(let k=0,L=A.length;k<L;k++)A[k]!==v[k]&&(i.disableVertexAttribArray(k),A[k]=0)}function b(v,A,k,L,U,X,B){B===!0?i.vertexAttribIPointer(v,A,k,U,X):i.vertexAttribPointer(v,A,k,L,U,X)}function x(v,A,k,L){_();const U=L.attributes,X=k.getAttributes(),B=A.defaultAttributeValues;for(const z in X){const I=X[z];if(I.location>=0){let j=U[z];if(j===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(j=v.instanceColor)),j!==void 0){const Q=j.normalized,se=j.itemSize,_e=e.get(j);if(_e===void 0)continue;const qe=_e.buffer,V=_e.type,te=_e.bytesPerElement,ae=V===i.INT||V===i.UNSIGNED_INT||j.gpuType===ou;if(j.isInterleavedBufferAttribute){const le=j.data,pe=le.stride,Ie=j.offset;if(le.isInstancedInterleavedBuffer){for(let Le=0;Le<I.locationSize;Le++)f(I.location+Le,le.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Le=0;Le<I.locationSize;Le++)m(I.location+Le);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let Le=0;Le<I.locationSize;Le++)b(I.location+Le,se/I.locationSize,V,Q,pe*te,(Ie+se/I.locationSize*Le)*te,ae)}else{if(j.isInstancedBufferAttribute){for(let le=0;le<I.locationSize;le++)f(I.location+le,j.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let le=0;le<I.locationSize;le++)m(I.location+le);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let le=0;le<I.locationSize;le++)b(I.location+le,se/I.locationSize,V,Q,se*te,se/I.locationSize*le*te,ae)}}else if(B!==void 0){const Q=B[z];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(I.location,Q);break;case 3:i.vertexAttrib3fv(I.location,Q);break;case 4:i.vertexAttrib4fv(I.location,Q);break;default:i.vertexAttrib1fv(I.location,Q)}}}}M()}function R(){C();for(const v in n){const A=n[v];for(const k in A){const L=A[k];for(const U in L)u(L[U].object),delete L[U];delete A[k]}delete n[v]}}function S(v){if(n[v.id]===void 0)return;const A=n[v.id];for(const k in A){const L=A[k];for(const U in L)u(L[U].object),delete L[U];delete A[k]}delete n[v.id]}function T(v){for(const A in n){const k=n[A];if(k[v.id]===void 0)continue;const L=k[v.id];for(const U in L)u(L[U].object),delete L[U];delete k[v.id]}}function C(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Mv(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function yv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==si&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Fi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Si&&!C)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:R,maxSamples:S}}function bv(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Rs,a=new St,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:n,b=M*4;let x=f.clippingState||null;l.value=x,x=u(g,d,b,p);for(let R=0;R!==b;++R)x[R]=t[R];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,x=p;b!==_;++b,x+=4)o.copy(h[b]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Sv(i){let e=new WeakMap;function t(o,a){return a===tc?o.mapping=Pr:a===nc&&(o.mapping=Lr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===tc||a===nc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new U0(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class vu extends ld{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _r=4,_h=[.125,.215,.35,.446,.526,.582],Ls=20,yl=new vu,Mh=new Re;let bl=null,Sl=0,wl=0,El=!1;const Ps=(1+Math.sqrt(5))/2,dr=1/Ps,yh=[new O(-Ps,dr,0),new O(Ps,dr,0),new O(-dr,0,Ps),new O(dr,0,Ps),new O(0,Ps,-dr),new O(0,Ps,dr),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class bh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){bl=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bl,Sl,wl),this._renderer.xr.enabled=El,e.scissorTest=!1,Zo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===Lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bl=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zi,minFilter:zi,generateMipmaps:!1,type:oi,format:si,colorSpace:Fr,depthBuffer:!1},s=Sh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wv(r)),this._blurMaterial=Ev(r,e,t)}return s}_compileMaterial(e){const t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,yl)}_sceneToCubeUV(e,t,n,s){const a=new jn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Mh),u.toneMapping=ds,u.autoClear=!1;const p=new Rt({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),g=new ot(new Vn,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Mh),_=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):M===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const b=this._cubeSize;Zo(s,M*b,f>2?b:0,b,b),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Pr||e.mapping===Lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Zo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,yl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=yh[(s-r-1)%yh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ot(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ls-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Ls;m>Ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ls}`);const f=[];let M=0;for(let T=0;T<Ls;++T){const C=T/_,y=Math.exp(-C*C/2);f.push(y),T===0?M+=y:T<m&&(M+=2*y)}for(let T=0;T<f.length;T++)f[T]=f[T]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const x=this._sizeLods[s],R=3*x*(s>b-_r?s-b+_r:0),S=4*(this._cubeSize-x);Zo(t,R,S,3*x,2*x),l.setRenderTarget(t),l.render(h,yl)}}function wv(i){const e=[],t=[],n=[];let s=i;const r=i-_r+1+_h.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-_r?l=_h[o-i+_r-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,M=new Float32Array(_*g*p),b=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let S=0;S<p;S++){const T=S%3*2/3-1,C=S>2?0:-1,y=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];M.set(y,_*g*S),b.set(d,m*g*S);const v=[S,S,S,S,S,S];x.set(v,f*g*S)}const R=new Lt;R.setAttribute("position",new Ut(M,_)),R.setAttribute("uv",new Ut(b,m)),R.setAttribute("faceIndex",new Ut(x,f)),e.push(R),s>_r&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sh(i,e,t){const n=new Wn(i,e,t);return n.texture.mapping=Fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ev(i,e,t){const n=new Float32Array(Ls),s=new O(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xu(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function wh(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function Eh(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function xu(){return`

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
	`}function Tv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===tc||l===nc,u=l===Pr||l===Lr;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new bh(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new bh(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Av(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&no("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Cv(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let b=0,x=M.length;b<x;b+=3){const R=M[b+0],S=M[b+1],T=M[b+2];d.push(R,S,S,T,T,R)}}else if(g!==void 0){const M=g.array;_=g.version;for(let b=0,x=M.length/3-1;b<x;b+=3){const R=b+0,S=b+1,T=b+2;d.push(R,S,S,T,T,R)}}else return;const m=new(td(d)?od:rd)(d,1);m.version=_;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Rv(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function h(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let M=0;M<g;M++)f+=p[M]*_[M];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Pv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Lv(i,e,t){const n=new WeakMap,s=new Bt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let y=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let b=0;p===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let x=a.attributes.position.count*b,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const S=new Float32Array(x*R*4*h),T=new id(S,x,R,h);T.type=Si,T.needsUpdate=!0;const C=b*4;for(let v=0;v<h;v++){const A=m[v],k=f[v],L=M[v],U=x*R*4*v;for(let X=0;X<A.count;X++){const B=X*C;p===!0&&(s.fromBufferAttribute(A,X),S[U+B+0]=s.x,S[U+B+1]=s.y,S[U+B+2]=s.z,S[U+B+3]=0),g===!0&&(s.fromBufferAttribute(k,X),S[U+B+4]=s.x,S[U+B+5]=s.y,S[U+B+6]=s.z,S[U+B+7]=0),_===!0&&(s.fromBufferAttribute(L,X),S[U+B+8]=s.x,S[U+B+9]=s.y,S[U+B+10]=s.z,S[U+B+11]=L.itemSize===4?s.w:1)}}d={count:h,texture:T,size:new Ce(x,R)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Dv(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class _u extends In{constructor(e,t,n,s,r,o,a,l,c,u=br){if(u!==br&&u!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===br&&(n=Bs),n===void 0&&u===Vs&&(n=Gs),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:An,this.minFilter=l!==void 0?l:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const hd=new In,Th=new _u(1,1),fd=new id,dd=new _0,pd=new cd,Ah=[],Ch=[],Rh=new Float32Array(16),Ph=new Float32Array(9),Lh=new Float32Array(4);function Gr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Ah[s];if(r===void 0&&(r=new Float32Array(s),Ah[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function mn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ga(i,e){let t=Ch[e];t===void 0&&(t=new Int32Array(e),Ch[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Iv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Uv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2fv(this.addr,e),gn(t,e)}}function zv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;i.uniform3fv(this.addr,e),gn(t,e)}}function Nv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4fv(this.addr,e),gn(t,e)}}function kv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;Lh.set(n),i.uniformMatrix2fv(this.addr,!1,Lh),gn(t,n)}}function Fv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;Ph.set(n),i.uniformMatrix3fv(this.addr,!1,Ph),gn(t,n)}}function Ov(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;Rh.set(n),i.uniformMatrix4fv(this.addr,!1,Rh),gn(t,n)}}function Bv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2iv(this.addr,e),gn(t,e)}}function Vv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3iv(this.addr,e),gn(t,e)}}function Hv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4iv(this.addr,e),gn(t,e)}}function Wv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2uiv(this.addr,e),gn(t,e)}}function qv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3uiv(this.addr,e),gn(t,e)}}function Yv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4uiv(this.addr,e),gn(t,e)}}function $v(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Th.compareFunction=ed,r=Th):r=hd,t.setTexture2D(e||r,s)}function jv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||dd,s)}function Kv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||pd,s)}function Zv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||fd,s)}function Jv(i){switch(i){case 5126:return Iv;case 35664:return Uv;case 35665:return zv;case 35666:return Nv;case 35674:return kv;case 35675:return Fv;case 35676:return Ov;case 5124:case 35670:return Bv;case 35667:case 35671:return Gv;case 35668:case 35672:return Vv;case 35669:case 35673:return Hv;case 5125:return Wv;case 36294:return Xv;case 36295:return qv;case 36296:return Yv;case 35678:case 36198:case 36298:case 36306:case 35682:return $v;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return Zv}}function Qv(i,e){i.uniform1fv(this.addr,e)}function ex(i,e){const t=Gr(e,this.size,2);i.uniform2fv(this.addr,t)}function tx(i,e){const t=Gr(e,this.size,3);i.uniform3fv(this.addr,t)}function nx(i,e){const t=Gr(e,this.size,4);i.uniform4fv(this.addr,t)}function ix(i,e){const t=Gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sx(i,e){const t=Gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function rx(i,e){const t=Gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ox(i,e){i.uniform1iv(this.addr,e)}function ax(i,e){i.uniform2iv(this.addr,e)}function lx(i,e){i.uniform3iv(this.addr,e)}function cx(i,e){i.uniform4iv(this.addr,e)}function ux(i,e){i.uniform1uiv(this.addr,e)}function hx(i,e){i.uniform2uiv(this.addr,e)}function fx(i,e){i.uniform3uiv(this.addr,e)}function dx(i,e){i.uniform4uiv(this.addr,e)}function px(i,e,t){const n=this.cache,s=e.length,r=Ga(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||hd,r[o])}function mx(i,e,t){const n=this.cache,s=e.length,r=Ga(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||dd,r[o])}function gx(i,e,t){const n=this.cache,s=e.length,r=Ga(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||pd,r[o])}function vx(i,e,t){const n=this.cache,s=e.length,r=Ga(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||fd,r[o])}function xx(i){switch(i){case 5126:return Qv;case 35664:return ex;case 35665:return tx;case 35666:return nx;case 35674:return ix;case 35675:return sx;case 35676:return rx;case 5124:case 35670:return ox;case 35667:case 35671:return ax;case 35668:case 35672:return lx;case 35669:case 35673:return cx;case 5125:return ux;case 36294:return hx;case 36295:return fx;case 36296:return dx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return gx;case 36289:case 36303:case 36311:case 36292:return vx}}class _x{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jv(t.type)}}class Mx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xx(t.type)}}class yx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Tl=/(\w+)(\])?(\[|\.)?/g;function Dh(i,e){i.seq.push(e),i.map[e.id]=e}function bx(i,e,t){const n=i.name,s=n.length;for(Tl.lastIndex=0;;){const r=Tl.exec(n),o=Tl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Dh(t,c===void 0?new _x(a,i,e):new Mx(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new yx(a),Dh(t,h)),t=h}}}class ba{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);bx(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Ih(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Sx=37297;let wx=0;function Ex(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Uh=new St;function Tx(i){Ct._getMatrix(Uh,Ct.workingColorSpace,i);const e=`mat3( ${Uh.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(i)){case Ba:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function zh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ex(i.getShaderSource(e),o)}else return s}function Ax(i,e){const t=Tx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Cx(i,e){let t;switch(e){case Of:t="Linear";break;case Bf:t="Reinhard";break;case Gf:t="Cineon";break;case ru:t="ACESFilmic";break;case Vf:t="AgX";break;case Hf:t="Neutral";break;case kp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Jo=new O;function Rx(){Ct.getLuminanceCoefficients(Jo);const i=Jo.x.toFixed(4),e=Jo.y.toFixed(4),t=Jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Px(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(io).join(`
`)}function Lx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Dx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function io(i){return i!==""}function Nh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(i){return i.replace(Ix,zx)}const Ux=new Map;function zx(i,e){let t=wt[e];if(t===void 0){const n=Ux.get(e);if(n!==void 0)t=wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Lc(t)}const Nx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fh(i){return i.replace(Nx,kx)}function kx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Oh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Fx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===kf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function Ox(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pr:case Lr:e="ENVMAP_TYPE_CUBE";break;case Fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Lr:e="ENVMAP_MODE_REFRACTION";break}return e}function Gx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case su:e="ENVMAP_BLENDING_MULTIPLY";break;case zp:e="ENVMAP_BLENDING_MIX";break;case Np:e="ENVMAP_BLENDING_ADD";break}return e}function Vx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Hx(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Fx(t),c=Ox(t),u=Bx(t),h=Gx(t),d=Vx(t),p=Px(t),g=Lx(r),_=s.createProgram();let m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(io).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(io).join(`
`),f.length>0&&(f+=`
`)):(m=[Oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),f=[Oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ds?"#define TONE_MAPPING":"",t.toneMapping!==ds?wt.tonemapping_pars_fragment:"",t.toneMapping!==ds?Cx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,Ax("linearToOutputTexel",t.outputColorSpace),Rx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(io).join(`
`)),o=Lc(o),o=Nh(o,t),o=kh(o,t),a=Lc(a),a=Nh(a,t),a=kh(a,t),o=Fh(o),a=Fh(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=M+m+o,x=M+f+a,R=Ih(s,s.VERTEX_SHADER,b),S=Ih(s,s.FRAGMENT_SHADER,x);s.attachShader(_,R),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(A){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(_).trim(),L=s.getShaderInfoLog(R).trim(),U=s.getShaderInfoLog(S).trim();let X=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,S);else{const z=zh(s,R,"vertex"),I=zh(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+k+`
`+z+`
`+I)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(L===""||U==="")&&(B=!1);B&&(A.diagnostics={runnable:X,programLog:k,vertexShader:{log:L,prefix:m},fragmentShader:{log:U,prefix:f}})}s.deleteShader(R),s.deleteShader(S),C=new ba(s,_),y=Dx(s,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Sx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=S,this}let Wx=0;class Xx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qx(e),t.set(e,n)),n}}class qx{constructor(e){this.id=Wx++,this.code=e,this.usedTimes=0}}function Yx(i,e,t,n,s,r,o){const a=new mu,l=new Xx,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,v,A,k,L){const U=k.fog,X=L.geometry,B=y.isMeshStandardMaterial?k.environment:null,z=(y.isMeshStandardMaterial?t:e).get(y.envMap||B),I=z&&z.mapping===Fa?z.image.height:null,j=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const Q=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,se=Q!==void 0?Q.length:0;let _e=0;X.morphAttributes.position!==void 0&&(_e=1),X.morphAttributes.normal!==void 0&&(_e=2),X.morphAttributes.color!==void 0&&(_e=3);let qe,V,te,ae;if(j){const Tt=Ii[j];qe=Tt.vertexShader,V=Tt.fragmentShader}else qe=y.vertexShader,V=y.fragmentShader,l.update(y),te=l.getVertexShaderID(y),ae=l.getFragmentShaderID(y);const le=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Ie=L.isInstancedMesh===!0,Le=L.isBatchedMesh===!0,Oe=!!y.map,he=!!y.matcap,be=!!z,F=!!y.aoMap,je=!!y.lightMap,Ee=!!y.bumpMap,Be=!!y.normalMap,ze=!!y.displacementMap,et=!!y.emissiveMap,J=!!y.metalnessMap,P=!!y.roughnessMap,w=y.anisotropy>0,q=y.clearcoat>0,ne=y.dispersion>0,re=y.iridescence>0,oe=y.sheen>0,Ne=y.transmission>0,Te=w&&!!y.anisotropyMap,Ue=q&&!!y.clearcoatMap,it=q&&!!y.clearcoatNormalMap,Ae=q&&!!y.clearcoatRoughnessMap,Ye=re&&!!y.iridescenceMap,rt=re&&!!y.iridescenceThicknessMap,lt=oe&&!!y.sheenColorMap,Ke=oe&&!!y.sheenRoughnessMap,gt=!!y.specularMap,ct=!!y.specularColorMap,yt=!!y.specularIntensityMap,Z=Ne&&!!y.transmissionMap,ke=Ne&&!!y.thicknessMap,ue=!!y.gradientMap,Se=!!y.alphaMap,We=y.alphaTest>0,He=!!y.alphaHash,ut=!!y.extensions;let Ht=ds;y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Ht=i.toneMapping);const Xt={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:qe,fragmentShader:V,defines:y.defines,customVertexShaderID:te,customFragmentShaderID:ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Le,batchingColor:Le&&L._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&L.instanceColor!==null,instancingMorph:Ie&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Fr,alphaToCoverage:!!y.alphaToCoverage,map:Oe,matcap:he,envMap:be,envMapMode:be&&z.mapping,envMapCubeUVHeight:I,aoMap:F,lightMap:je,bumpMap:Ee,normalMap:Be,displacementMap:d&&ze,emissiveMap:et,normalMapObjectSpace:Be&&y.normalMapType===Gp,normalMapTangentSpace:Be&&y.normalMapType===fu,metalnessMap:J,roughnessMap:P,anisotropy:w,anisotropyMap:Te,clearcoat:q,clearcoatMap:Ue,clearcoatNormalMap:it,clearcoatRoughnessMap:Ae,dispersion:ne,iridescence:re,iridescenceMap:Ye,iridescenceThicknessMap:rt,sheen:oe,sheenColorMap:lt,sheenRoughnessMap:Ke,specularMap:gt,specularColorMap:ct,specularIntensityMap:yt,transmission:Ne,transmissionMap:Z,thicknessMap:ke,gradientMap:ue,opaque:y.transparent===!1&&y.blending===fs&&y.alphaToCoverage===!1,alphaMap:Se,alphaTest:We,alphaHash:He,combine:y.combine,mapUv:Oe&&_(y.map.channel),aoMapUv:F&&_(y.aoMap.channel),lightMapUv:je&&_(y.lightMap.channel),bumpMapUv:Ee&&_(y.bumpMap.channel),normalMapUv:Be&&_(y.normalMap.channel),displacementMapUv:ze&&_(y.displacementMap.channel),emissiveMapUv:et&&_(y.emissiveMap.channel),metalnessMapUv:J&&_(y.metalnessMap.channel),roughnessMapUv:P&&_(y.roughnessMap.channel),anisotropyMapUv:Te&&_(y.anisotropyMap.channel),clearcoatMapUv:Ue&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:it&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&_(y.sheenRoughnessMap.channel),specularMapUv:gt&&_(y.specularMap.channel),specularColorMapUv:ct&&_(y.specularColorMap.channel),specularIntensityMapUv:yt&&_(y.specularIntensityMap.channel),transmissionMapUv:Z&&_(y.transmissionMap.channel),thicknessMapUv:ke&&_(y.thicknessMap.channel),alphaMapUv:Se&&_(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Be||w),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!X.attributes.uv&&(Oe||Se),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:pe,skinning:L.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:_e,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Oe&&y.map.isVideoTexture===!0&&Ct.getTransfer(y.map.colorSpace)===kt,decodeVideoTextureEmissive:et&&y.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(y.emissiveMap.colorSpace)===kt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===an,flipSided:y.side===Bn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ut&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&y.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function f(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)v.push(A),v.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(M(v,y),b(v,y),v.push(i.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function M(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function b(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const v=g[y.type];let A;if(v){const k=Ii[v];A=Mi.clone(k.uniforms)}else A=y.uniforms;return A}function R(y,v){let A;for(let k=0,L=u.length;k<L;k++){const U=u[k];if(U.cacheKey===v){A=U,++A.usedTimes;break}}return A===void 0&&(A=new Hx(i,v,y,r),u.push(A)),A}function S(y){if(--y.usedTimes===0){const v=u.indexOf(y);u[v]=u[u.length-1],u.pop(),y.destroy()}}function T(y){l.remove(y)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:R,releaseProgram:S,releaseShaderCache:T,programs:u,dispose:C}}function $x(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function jx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Bh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,p,g,_,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function a(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||jx),n.length>1&&n.sort(d||Bh),s.length>1&&s.sort(d||Bh)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Kx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Gh,i.set(n,[o])):s>=r.length?(o=new Gh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Re};break;case"SpotLight":t={position:new O,direction:new O,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function Jx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Qx=0;function e1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function t1(i){const e=new Zx,t=Jx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new Pt,o=new Pt;function a(c){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,M=0,b=0,x=0,R=0,S=0,T=0;c.sort(e1);for(let y=0,v=c.length;y<v;y++){const A=c[y],k=A.color,L=A.intensity,U=A.distance,X=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=k.r*L,h+=k.g*L,d+=k.b*L;else if(A.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(A.sh.coefficients[B],L);T++}else if(A.isDirectionalLight){const B=e.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const z=A.shadow,I=t.get(A);I.shadowIntensity=z.intensity,I.shadowBias=z.bias,I.shadowNormalBias=z.normalBias,I.shadowRadius=z.radius,I.shadowMapSize=z.mapSize,n.directionalShadow[p]=I,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=A.shadow.matrix,M++}n.directional[p]=B,p++}else if(A.isSpotLight){const B=e.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(k).multiplyScalar(L),B.distance=U,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,n.spot[_]=B;const z=A.shadow;if(A.map&&(n.spotLightMap[R]=A.map,R++,z.updateMatrices(A),A.castShadow&&S++),n.spotLightMatrix[_]=z.matrix,A.castShadow){const I=t.get(A);I.shadowIntensity=z.intensity,I.shadowBias=z.bias,I.shadowNormalBias=z.normalBias,I.shadowRadius=z.radius,I.shadowMapSize=z.mapSize,n.spotShadow[_]=I,n.spotShadowMap[_]=X,x++}_++}else if(A.isRectAreaLight){const B=e.get(A);B.color.copy(k).multiplyScalar(L),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=B,m++}else if(A.isPointLight){const B=e.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),B.distance=A.distance,B.decay=A.decay,A.castShadow){const z=A.shadow,I=t.get(A);I.shadowIntensity=z.intensity,I.shadowBias=z.bias,I.shadowNormalBias=z.normalBias,I.shadowRadius=z.radius,I.shadowMapSize=z.mapSize,I.shadowCameraNear=z.camera.near,I.shadowCameraFar=z.camera.far,n.pointShadow[g]=I,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=A.shadow.matrix,b++}n.point[g]=B,g++}else if(A.isHemisphereLight){const B=e.get(A);B.skyColor.copy(A.color).multiplyScalar(L),B.groundColor.copy(A.groundColor).multiplyScalar(L),n.hemi[f]=B,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Xe.LTC_FLOAT_1,n.rectAreaLTC2=Xe.LTC_FLOAT_2):(n.rectAreaLTC1=Xe.LTC_HALF_1,n.rectAreaLTC2=Xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==M||C.numPointShadows!==b||C.numSpotShadows!==x||C.numSpotMaps!==R||C.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+R-S,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=M,C.numPointShadows=b,C.numSpotShadows=x,C.numSpotMaps=R,C.numLightProbes=T,n.version=Qx++)}function l(c,u){let h=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){const b=c[f];if(b.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(b.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Vh(i){const e=new t1(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function n1(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Vh(i),e.set(s,[a])):r>=o.length?(a=new Vh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class i1 extends js{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class s1 extends js{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const r1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o1=`uniform sampler2D shadow_pass;
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
}`;function a1(i,e,t){let n=new gu;const s=new Ce,r=new Ce,o=new Bt,a=new i1({depthPacking:Bp}),l=new s1,c={},u=t.maxTextureSize,h={[gs]:Bn,[Bn]:gs,[an]:an},d=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:r1,fragmentShader:o1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Lt;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ot(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nf;let f=this.type;this.render=function(S,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const y=i.getRenderTarget(),v=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),k=i.state;k.setBlending(En),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const L=f!==ji&&this.type===ji,U=f===ji&&this.type!==ji;for(let X=0,B=S.length;X<B;X++){const z=S[X],I=z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const j=I.getFrameExtents();if(s.multiply(j),r.copy(I.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,I.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,I.mapSize.y=r.y)),I.map===null||L===!0||U===!0){const se=this.type!==ji?{minFilter:An,magFilter:An}:{};I.map!==null&&I.map.dispose(),I.map=new Wn(s.x,s.y,se),I.map.texture.name=z.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const Q=I.getViewportCount();for(let se=0;se<Q;se++){const _e=I.getViewport(se);o.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),k.viewport(o),I.updateMatrices(z,se),n=I.getFrustum(),x(T,C,I.camera,z,this.type)}I.isPointLightShadow!==!0&&this.type===ji&&M(I,C),I.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,v,A)};function M(S,T){const C=e.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Wn(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,C,d,_,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,C,p,_,null)}function b(S,T,C,y){let v=null;const A=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)v=A;else if(v=C.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=v.uuid,L=T.uuid;let U=c[k];U===void 0&&(U={},c[k]=U);let X=U[L];X===void 0&&(X=v.clone(),U[L]=X,T.addEventListener("dispose",R)),v=X}if(v.visible=T.visible,v.wireframe=T.wireframe,y===ji?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:h[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const k=i.properties.get(v);k.light=C}return v}function x(S,T,C,y,v){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===ji)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const L=e.update(S),U=S.material;if(Array.isArray(U)){const X=L.groups;for(let B=0,z=X.length;B<z;B++){const I=X[B],j=U[I.materialIndex];if(j&&j.visible){const Q=b(S,j,y,v);S.onBeforeShadow(i,S,T,C,L,Q,I),i.renderBufferDirect(C,null,L,Q,S,I),S.onAfterShadow(i,S,T,C,L,Q,I)}}}else if(U.visible){const X=b(S,U,y,v);S.onBeforeShadow(i,S,T,C,L,X,null),i.renderBufferDirect(C,null,L,X,S,null),S.onAfterShadow(i,S,T,C,L,X,null)}}const k=S.children;for(let L=0,U=k.length;L<U;L++)x(k[L],T,C,y,v)}function R(S){S.target.removeEventListener("dispose",R);for(const C in c){const y=c[C],v=S.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const l1={[$l]:jl,[Kl]:Ql,[Zl]:ec,[Rr]:Jl,[jl]:$l,[Ql]:Kl,[ec]:Zl,[Jl]:Rr};function c1(i,e){function t(){let Z=!1;const ke=new Bt;let ue=null;const Se=new Bt(0,0,0,0);return{setMask:function(We){ue!==We&&!Z&&(i.colorMask(We,We,We,We),ue=We)},setLocked:function(We){Z=We},setClear:function(We,He,ut,Ht,Xt){Xt===!0&&(We*=Ht,He*=Ht,ut*=Ht),ke.set(We,He,ut,Ht),Se.equals(ke)===!1&&(i.clearColor(We,He,ut,Ht),Se.copy(ke))},reset:function(){Z=!1,ue=null,Se.set(-1,0,0,0)}}}function n(){let Z=!1,ke=!1,ue=null,Se=null,We=null;return{setReversed:function(He){if(ke!==He){const ut=e.get("EXT_clip_control");ke?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT);const Ht=We;We=null,this.setClear(Ht)}ke=He},getReversed:function(){return ke},setTest:function(He){He?le(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(He){ue!==He&&!Z&&(i.depthMask(He),ue=He)},setFunc:function(He){if(ke&&(He=l1[He]),Se!==He){switch(He){case $l:i.depthFunc(i.NEVER);break;case jl:i.depthFunc(i.ALWAYS);break;case Kl:i.depthFunc(i.LESS);break;case Rr:i.depthFunc(i.LEQUAL);break;case Zl:i.depthFunc(i.EQUAL);break;case Jl:i.depthFunc(i.GEQUAL);break;case Ql:i.depthFunc(i.GREATER);break;case ec:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=He}},setLocked:function(He){Z=He},setClear:function(He){We!==He&&(ke&&(He=1-He),i.clearDepth(He),We=He)},reset:function(){Z=!1,ue=null,Se=null,We=null,ke=!1}}}function s(){let Z=!1,ke=null,ue=null,Se=null,We=null,He=null,ut=null,Ht=null,Xt=null;return{setTest:function(Tt){Z||(Tt?le(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(Tt){ke!==Tt&&!Z&&(i.stencilMask(Tt),ke=Tt)},setFunc:function(Tt,bn,Rn){(ue!==Tt||Se!==bn||We!==Rn)&&(i.stencilFunc(Tt,bn,Rn),ue=Tt,Se=bn,We=Rn)},setOp:function(Tt,bn,Rn){(He!==Tt||ut!==bn||Ht!==Rn)&&(i.stencilOp(Tt,bn,Rn),He=Tt,ut=bn,Ht=Rn)},setLocked:function(Tt){Z=Tt},setClear:function(Tt){Xt!==Tt&&(i.clearStencil(Tt),Xt=Tt)},reset:function(){Z=!1,ke=null,ue=null,Se=null,We=null,He=null,ut=null,Ht=null,Xt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,M=null,b=null,x=null,R=null,S=null,T=new Re(0,0,0),C=0,y=!1,v=null,A=null,k=null,L=null,U=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,z=0;const I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(I)[1]),B=z>=1):I.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),B=z>=2);let j=null,Q={};const se=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),qe=new Bt().fromArray(se),V=new Bt().fromArray(_e);function te(Z,ke,ue,Se){const We=new Uint8Array(4),He=i.createTexture();i.bindTexture(Z,He),i.texParameteri(Z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ut=0;ut<ue;ut++)Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?i.texImage3D(ke,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,We):i.texImage2D(ke+ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,We);return He}const ae={};ae[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(i.DEPTH_TEST),o.setFunc(Rr),Ee(!1),Be(qu),le(i.CULL_FACE),F(En);function le(Z){u[Z]!==!0&&(i.enable(Z),u[Z]=!0)}function pe(Z){u[Z]!==!1&&(i.disable(Z),u[Z]=!1)}function Ie(Z,ke){return h[Z]!==ke?(i.bindFramebuffer(Z,ke),h[Z]=ke,Z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ke),Z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ke),!0):!1}function Le(Z,ke){let ue=p,Se=!1;if(Z){ue=d.get(ke),ue===void 0&&(ue=[],d.set(ke,ue));const We=Z.textures;if(ue.length!==We.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let He=0,ut=We.length;He<ut;He++)ue[He]=i.COLOR_ATTACHMENT0+He;ue.length=We.length,Se=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,Se=!0);Se&&i.drawBuffers(ue)}function Oe(Z){return g!==Z?(i.useProgram(Z),g=Z,!0):!1}const he={[xi]:i.FUNC_ADD,[yp]:i.FUNC_SUBTRACT,[bp]:i.FUNC_REVERSE_SUBTRACT};he[Sp]=i.MIN,he[wp]=i.MAX;const be={[to]:i.ZERO,[Ep]:i.ONE,[Tp]:i.SRC_COLOR,[Wl]:i.SRC_ALPHA,[Pp]:i.SRC_ALPHA_SATURATE,[Yl]:i.DST_COLOR,[ql]:i.DST_ALPHA,[Ap]:i.ONE_MINUS_SRC_COLOR,[Xl]:i.ONE_MINUS_SRC_ALPHA,[Rp]:i.ONE_MINUS_DST_COLOR,[Cp]:i.ONE_MINUS_DST_ALPHA,[Lp]:i.CONSTANT_COLOR,[Dp]:i.ONE_MINUS_CONSTANT_COLOR,[Ip]:i.CONSTANT_ALPHA,[Up]:i.ONE_MINUS_CONSTANT_ALPHA};function F(Z,ke,ue,Se,We,He,ut,Ht,Xt,Tt){if(Z===En){_===!0&&(pe(i.BLEND),_=!1);return}if(_===!1&&(le(i.BLEND),_=!0),Z!==Ff){if(Z!==m||Tt!==y){if((f!==xi||x!==xi)&&(i.blendEquation(i.FUNC_ADD),f=xi,x=xi),Tt)switch(Z){case fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case li:i.blendFunc(i.ONE,i.ONE);break;case Yu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $u:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case li:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Yu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $u:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}M=null,b=null,R=null,S=null,T.set(0,0,0),C=0,m=Z,y=Tt}return}We=We||ke,He=He||ue,ut=ut||Se,(ke!==f||We!==x)&&(i.blendEquationSeparate(he[ke],he[We]),f=ke,x=We),(ue!==M||Se!==b||He!==R||ut!==S)&&(i.blendFuncSeparate(be[ue],be[Se],be[He],be[ut]),M=ue,b=Se,R=He,S=ut),(Ht.equals(T)===!1||Xt!==C)&&(i.blendColor(Ht.r,Ht.g,Ht.b,Xt),T.copy(Ht),C=Xt),m=Z,y=!1}function je(Z,ke){Z.side===an?pe(i.CULL_FACE):le(i.CULL_FACE);let ue=Z.side===Bn;ke&&(ue=!ue),Ee(ue),Z.blending===fs&&Z.transparent===!1?F(En):F(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),o.setFunc(Z.depthFunc),o.setTest(Z.depthTest),o.setMask(Z.depthWrite),r.setMask(Z.colorWrite);const Se=Z.stencilWrite;a.setTest(Se),Se&&(a.setMask(Z.stencilWriteMask),a.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),a.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),et(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(Z){v!==Z&&(Z?i.frontFace(i.CW):i.frontFace(i.CCW),v=Z)}function Be(Z){Z!==_p?(le(i.CULL_FACE),Z!==A&&(Z===qu?i.cullFace(i.BACK):Z===Mp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),A=Z}function ze(Z){Z!==k&&(B&&i.lineWidth(Z),k=Z)}function et(Z,ke,ue){Z?(le(i.POLYGON_OFFSET_FILL),(L!==ke||U!==ue)&&(i.polygonOffset(ke,ue),L=ke,U=ue)):pe(i.POLYGON_OFFSET_FILL)}function J(Z){Z?le(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function P(Z){Z===void 0&&(Z=i.TEXTURE0+X-1),j!==Z&&(i.activeTexture(Z),j=Z)}function w(Z,ke,ue){ue===void 0&&(j===null?ue=i.TEXTURE0+X-1:ue=j);let Se=Q[ue];Se===void 0&&(Se={type:void 0,texture:void 0},Q[ue]=Se),(Se.type!==Z||Se.texture!==ke)&&(j!==ue&&(i.activeTexture(ue),j=ue),i.bindTexture(Z,ke||ae[Z]),Se.type=Z,Se.texture=ke)}function q(){const Z=Q[j];Z!==void 0&&Z.type!==void 0&&(i.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function oe(){try{i.texSubImage2D.apply(i,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ne(){try{i.texSubImage3D.apply(i,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Te(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function it(){try{i.texStorage2D.apply(i,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ae(){try{i.texStorage3D.apply(i,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ye(){try{i.texImage2D.apply(i,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function rt(){try{i.texImage3D.apply(i,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function lt(Z){qe.equals(Z)===!1&&(i.scissor(Z.x,Z.y,Z.z,Z.w),qe.copy(Z))}function Ke(Z){V.equals(Z)===!1&&(i.viewport(Z.x,Z.y,Z.z,Z.w),V.copy(Z))}function gt(Z,ke){let ue=c.get(ke);ue===void 0&&(ue=new WeakMap,c.set(ke,ue));let Se=ue.get(Z);Se===void 0&&(Se=i.getUniformBlockIndex(ke,Z.name),ue.set(Z,Se))}function ct(Z,ke){const Se=c.get(ke).get(Z);l.get(ke)!==Se&&(i.uniformBlockBinding(ke,Se,Z.__bindingPointIndex),l.set(ke,Se))}function yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},j=null,Q={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,M=null,b=null,x=null,R=null,S=null,T=new Re(0,0,0),C=0,y=!1,v=null,A=null,k=null,L=null,U=null,qe.set(0,0,i.canvas.width,i.canvas.height),V.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:le,disable:pe,bindFramebuffer:Ie,drawBuffers:Le,useProgram:Oe,setBlending:F,setMaterial:je,setFlipSided:Ee,setCullFace:Be,setLineWidth:ze,setPolygonOffset:et,setScissorTest:J,activeTexture:P,bindTexture:w,unbindTexture:q,compressedTexImage2D:ne,compressedTexImage3D:re,texImage2D:Ye,texImage3D:rt,updateUBOMapping:gt,uniformBlockBinding:ct,texStorage2D:it,texStorage3D:Ae,texSubImage2D:oe,texSubImage3D:Ne,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ue,scissor:lt,viewport:Ke,reset:yt}}function Hh(i,e,t,n){const s=u1(n);switch(t){case $f:return i*e;case Kf:return i*e;case Zf:return i*e*2;case Oa:return i*e/s.components*s.byteLength;case cu:return i*e/s.components*s.byteLength;case Jf:return i*e*2/s.components*s.byteLength;case uu:return i*e*2/s.components*s.byteLength;case jf:return i*e*3/s.components*s.byteLength;case si:return i*e*4/s.components*s.byteLength;case hu:return i*e*4/s.components*s.byteLength;case va:case xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _a:case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rc:case ac:return Math.max(i,16)*Math.max(e,8)/4;case sc:case oc:return Math.max(i,8)*Math.max(e,8)/2;case lc:case cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case pc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case mc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case gc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case xc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _c:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case bc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case wc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ya:case Ec:case Tc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qf:case Ac:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Cc:case Rc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function u1(i){switch(i){case Fi:case Xf:return{byteLength:1,components:1};case mo:case qf:case oi:return{byteLength:2,components:1};case au:case lu:return{byteLength:2,components:4};case Bs:case ou:case Si:return{byteLength:4,components:1};case Yf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function h1(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return p?new OffscreenCanvas(P,w):Pa("canvas")}function _(P,w,q){let ne=1;const re=J(P);if((re.width>q||re.height>q)&&(ne=q/Math.max(re.width,re.height)),ne<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const oe=Math.floor(ne*re.width),Ne=Math.floor(ne*re.height);h===void 0&&(h=g(oe,Ne));const Te=w?g(oe,Ne):h;return Te.width=oe,Te.height=Ne,Te.getContext("2d").drawImage(P,0,0,oe,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+oe+"x"+Ne+")."),Te}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),P;return P}function m(P){return P.generateMipmaps}function f(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(P,w,q,ne,re=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let oe=w;if(w===i.RED&&(q===i.FLOAT&&(oe=i.R32F),q===i.HALF_FLOAT&&(oe=i.R16F),q===i.UNSIGNED_BYTE&&(oe=i.R8)),w===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(oe=i.R8UI),q===i.UNSIGNED_SHORT&&(oe=i.R16UI),q===i.UNSIGNED_INT&&(oe=i.R32UI),q===i.BYTE&&(oe=i.R8I),q===i.SHORT&&(oe=i.R16I),q===i.INT&&(oe=i.R32I)),w===i.RG&&(q===i.FLOAT&&(oe=i.RG32F),q===i.HALF_FLOAT&&(oe=i.RG16F),q===i.UNSIGNED_BYTE&&(oe=i.RG8)),w===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(oe=i.RG8UI),q===i.UNSIGNED_SHORT&&(oe=i.RG16UI),q===i.UNSIGNED_INT&&(oe=i.RG32UI),q===i.BYTE&&(oe=i.RG8I),q===i.SHORT&&(oe=i.RG16I),q===i.INT&&(oe=i.RG32I)),w===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),q===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),q===i.UNSIGNED_INT&&(oe=i.RGB32UI),q===i.BYTE&&(oe=i.RGB8I),q===i.SHORT&&(oe=i.RGB16I),q===i.INT&&(oe=i.RGB32I)),w===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),q===i.UNSIGNED_INT&&(oe=i.RGBA32UI),q===i.BYTE&&(oe=i.RGBA8I),q===i.SHORT&&(oe=i.RGBA16I),q===i.INT&&(oe=i.RGBA32I)),w===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),w===i.RGBA){const Ne=re?Ba:Ct.getTransfer(ne);q===i.FLOAT&&(oe=i.RGBA32F),q===i.HALF_FLOAT&&(oe=i.RGBA16F),q===i.UNSIGNED_BYTE&&(oe=Ne===kt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function x(P,w){let q;return P?w===null||w===Bs||w===Gs?q=i.DEPTH24_STENCIL8:w===Si?q=i.DEPTH32F_STENCIL8:w===mo&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Bs||w===Gs?q=i.DEPTH_COMPONENT24:w===Si?q=i.DEPTH_COMPONENT32F:w===mo&&(q=i.DEPTH_COMPONENT16),q}function R(P,w){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==An&&P.minFilter!==zi?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function S(P){const w=P.target;w.removeEventListener("dispose",S),C(w),w.isVideoTexture&&u.delete(w)}function T(P){const w=P.target;w.removeEventListener("dispose",T),v(w)}function C(P){const w=n.get(P);if(w.__webglInit===void 0)return;const q=P.source,ne=d.get(q);if(ne){const re=ne[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&y(P),Object.keys(ne).length===0&&d.delete(q)}n.remove(P)}function y(P){const w=n.get(P);i.deleteTexture(w.__webglTexture);const q=P.source,ne=d.get(q);delete ne[w.__cacheKey],o.memory.textures--}function v(P){const w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(w.__webglFramebuffer[ne]))for(let re=0;re<w.__webglFramebuffer[ne].length;re++)i.deleteFramebuffer(w.__webglFramebuffer[ne][re]);else i.deleteFramebuffer(w.__webglFramebuffer[ne]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ne])}else{if(Array.isArray(w.__webglFramebuffer))for(let ne=0;ne<w.__webglFramebuffer.length;ne++)i.deleteFramebuffer(w.__webglFramebuffer[ne]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ne=0;ne<w.__webglColorRenderbuffer.length;ne++)w.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ne]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const q=P.textures;for(let ne=0,re=q.length;ne<re;ne++){const oe=n.get(q[ne]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(q[ne])}n.remove(P)}let A=0;function k(){A=0}function L(){const P=A;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),A+=1,P}function U(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function X(P,w){const q=n.get(P);if(P.isVideoTexture&&ze(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){const ne=P.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(q,P,w);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+w)}function B(P,w){const q=n.get(P);if(P.version>0&&q.__version!==P.version){V(q,P,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+w)}function z(P,w){const q=n.get(P);if(P.version>0&&q.__version!==P.version){V(q,P,w);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+w)}function I(P,w){const q=n.get(P);if(P.version>0&&q.__version!==P.version){te(q,P,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+w)}const j={[ki]:i.REPEAT,[Ds]:i.CLAMP_TO_EDGE,[ic]:i.MIRRORED_REPEAT},Q={[An]:i.NEAREST,[Fp]:i.NEAREST_MIPMAP_NEAREST,[Do]:i.NEAREST_MIPMAP_LINEAR,[zi]:i.LINEAR,[el]:i.LINEAR_MIPMAP_NEAREST,[Is]:i.LINEAR_MIPMAP_LINEAR},se={[Vp]:i.NEVER,[$p]:i.ALWAYS,[Hp]:i.LESS,[ed]:i.LEQUAL,[Wp]:i.EQUAL,[Yp]:i.GEQUAL,[Xp]:i.GREATER,[qp]:i.NOTEQUAL};function _e(P,w){if(w.type===Si&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===zi||w.magFilter===el||w.magFilter===Do||w.magFilter===Is||w.minFilter===zi||w.minFilter===el||w.minFilter===Do||w.minFilter===Is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,j[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,j[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,j[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Q[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Q[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,se[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===An||w.minFilter!==Do&&w.minFilter!==Is||w.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function qe(P,w){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",S));const ne=w.source;let re=d.get(ne);re===void 0&&(re={},d.set(ne,re));const oe=U(w);if(oe!==P.__cacheKey){re[oe]===void 0&&(re[oe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),re[oe].usedTimes++;const Ne=re[P.__cacheKey];Ne!==void 0&&(re[P.__cacheKey].usedTimes--,Ne.usedTimes===0&&y(w)),P.__cacheKey=oe,P.__webglTexture=re[oe].texture}return q}function V(P,w,q){let ne=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ne=i.TEXTURE_3D);const re=qe(P,w),oe=w.source;t.bindTexture(ne,P.__webglTexture,i.TEXTURE0+q);const Ne=n.get(oe);if(oe.version!==Ne.__version||re===!0){t.activeTexture(i.TEXTURE0+q);const Te=Ct.getPrimaries(Ct.workingColorSpace),Ue=w.colorSpace===cs?null:Ct.getPrimaries(w.colorSpace),it=w.colorSpace===cs||Te===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let Ae=_(w.image,!1,s.maxTextureSize);Ae=et(w,Ae);const Ye=r.convert(w.format,w.colorSpace),rt=r.convert(w.type);let lt=b(w.internalFormat,Ye,rt,w.colorSpace,w.isVideoTexture);_e(ne,w);let Ke;const gt=w.mipmaps,ct=w.isVideoTexture!==!0,yt=Ne.__version===void 0||re===!0,Z=oe.dataReady,ke=R(w,Ae);if(w.isDepthTexture)lt=x(w.format===Vs,w.type),yt&&(ct?t.texStorage2D(i.TEXTURE_2D,1,lt,Ae.width,Ae.height):t.texImage2D(i.TEXTURE_2D,0,lt,Ae.width,Ae.height,0,Ye,rt,null));else if(w.isDataTexture)if(gt.length>0){ct&&yt&&t.texStorage2D(i.TEXTURE_2D,ke,lt,gt[0].width,gt[0].height);for(let ue=0,Se=gt.length;ue<Se;ue++)Ke=gt[ue],ct?Z&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Ke.width,Ke.height,Ye,rt,Ke.data):t.texImage2D(i.TEXTURE_2D,ue,lt,Ke.width,Ke.height,0,Ye,rt,Ke.data);w.generateMipmaps=!1}else ct?(yt&&t.texStorage2D(i.TEXTURE_2D,ke,lt,Ae.width,Ae.height),Z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Ye,rt,Ae.data)):t.texImage2D(i.TEXTURE_2D,0,lt,Ae.width,Ae.height,0,Ye,rt,Ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ct&&yt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,lt,gt[0].width,gt[0].height,Ae.depth);for(let ue=0,Se=gt.length;ue<Se;ue++)if(Ke=gt[ue],w.format!==si)if(Ye!==null)if(ct){if(Z)if(w.layerUpdates.size>0){const We=Hh(Ke.width,Ke.height,w.format,w.type);for(const He of w.layerUpdates){const ut=Ke.data.subarray(He*We/Ke.data.BYTES_PER_ELEMENT,(He+1)*We/Ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,He,Ke.width,Ke.height,1,Ye,ut)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Ke.width,Ke.height,Ae.depth,Ye,Ke.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,lt,Ke.width,Ke.height,Ae.depth,0,Ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?Z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Ke.width,Ke.height,Ae.depth,Ye,rt,Ke.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,lt,Ke.width,Ke.height,Ae.depth,0,Ye,rt,Ke.data)}else{ct&&yt&&t.texStorage2D(i.TEXTURE_2D,ke,lt,gt[0].width,gt[0].height);for(let ue=0,Se=gt.length;ue<Se;ue++)Ke=gt[ue],w.format!==si?Ye!==null?ct?Z&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,Ke.width,Ke.height,Ye,Ke.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,lt,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?Z&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Ke.width,Ke.height,Ye,rt,Ke.data):t.texImage2D(i.TEXTURE_2D,ue,lt,Ke.width,Ke.height,0,Ye,rt,Ke.data)}else if(w.isDataArrayTexture)if(ct){if(yt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,lt,Ae.width,Ae.height,Ae.depth),Z)if(w.layerUpdates.size>0){const ue=Hh(Ae.width,Ae.height,w.format,w.type);for(const Se of w.layerUpdates){const We=Ae.data.subarray(Se*ue/Ae.data.BYTES_PER_ELEMENT,(Se+1)*ue/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Se,Ae.width,Ae.height,1,Ye,rt,We)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ye,rt,Ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,lt,Ae.width,Ae.height,Ae.depth,0,Ye,rt,Ae.data);else if(w.isData3DTexture)ct?(yt&&t.texStorage3D(i.TEXTURE_3D,ke,lt,Ae.width,Ae.height,Ae.depth),Z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ye,rt,Ae.data)):t.texImage3D(i.TEXTURE_3D,0,lt,Ae.width,Ae.height,Ae.depth,0,Ye,rt,Ae.data);else if(w.isFramebufferTexture){if(yt)if(ct)t.texStorage2D(i.TEXTURE_2D,ke,lt,Ae.width,Ae.height);else{let ue=Ae.width,Se=Ae.height;for(let We=0;We<ke;We++)t.texImage2D(i.TEXTURE_2D,We,lt,ue,Se,0,Ye,rt,null),ue>>=1,Se>>=1}}else if(gt.length>0){if(ct&&yt){const ue=J(gt[0]);t.texStorage2D(i.TEXTURE_2D,ke,lt,ue.width,ue.height)}for(let ue=0,Se=gt.length;ue<Se;ue++)Ke=gt[ue],ct?Z&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Ye,rt,Ke):t.texImage2D(i.TEXTURE_2D,ue,lt,Ye,rt,Ke);w.generateMipmaps=!1}else if(ct){if(yt){const ue=J(Ae);t.texStorage2D(i.TEXTURE_2D,ke,lt,ue.width,ue.height)}Z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ye,rt,Ae)}else t.texImage2D(i.TEXTURE_2D,0,lt,Ye,rt,Ae);m(w)&&f(ne),Ne.__version=oe.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function te(P,w,q){if(w.image.length!==6)return;const ne=qe(P,w),re=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+q);const oe=n.get(re);if(re.version!==oe.__version||ne===!0){t.activeTexture(i.TEXTURE0+q);const Ne=Ct.getPrimaries(Ct.workingColorSpace),Te=w.colorSpace===cs?null:Ct.getPrimaries(w.colorSpace),Ue=w.colorSpace===cs||Ne===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const it=w.isCompressedTexture||w.image[0].isCompressedTexture,Ae=w.image[0]&&w.image[0].isDataTexture,Ye=[];for(let Se=0;Se<6;Se++)!it&&!Ae?Ye[Se]=_(w.image[Se],!0,s.maxCubemapSize):Ye[Se]=Ae?w.image[Se].image:w.image[Se],Ye[Se]=et(w,Ye[Se]);const rt=Ye[0],lt=r.convert(w.format,w.colorSpace),Ke=r.convert(w.type),gt=b(w.internalFormat,lt,Ke,w.colorSpace),ct=w.isVideoTexture!==!0,yt=oe.__version===void 0||ne===!0,Z=re.dataReady;let ke=R(w,rt);_e(i.TEXTURE_CUBE_MAP,w);let ue;if(it){ct&&yt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,gt,rt.width,rt.height);for(let Se=0;Se<6;Se++){ue=Ye[Se].mipmaps;for(let We=0;We<ue.length;We++){const He=ue[We];w.format!==si?lt!==null?ct?Z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We,0,0,He.width,He.height,lt,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We,gt,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We,0,0,He.width,He.height,lt,Ke,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We,gt,He.width,He.height,0,lt,Ke,He.data)}}}else{if(ue=w.mipmaps,ct&&yt){ue.length>0&&ke++;const Se=J(Ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,gt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Ae){ct?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ye[Se].width,Ye[Se].height,lt,Ke,Ye[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,gt,Ye[Se].width,Ye[Se].height,0,lt,Ke,Ye[Se].data);for(let We=0;We<ue.length;We++){const ut=ue[We].image[Se].image;ct?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We+1,0,0,ut.width,ut.height,lt,Ke,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We+1,gt,ut.width,ut.height,0,lt,Ke,ut.data)}}else{ct?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,lt,Ke,Ye[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,gt,lt,Ke,Ye[Se]);for(let We=0;We<ue.length;We++){const He=ue[We];ct?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We+1,0,0,lt,Ke,He.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We+1,gt,lt,Ke,He.image[Se])}}}m(w)&&f(i.TEXTURE_CUBE_MAP),oe.__version=re.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ae(P,w,q,ne,re,oe){const Ne=r.convert(q.format,q.colorSpace),Te=r.convert(q.type),Ue=b(q.internalFormat,Ne,Te,q.colorSpace),it=n.get(w),Ae=n.get(q);if(Ae.__renderTarget=w,!it.__hasExternalTextures){const Ye=Math.max(1,w.width>>oe),rt=Math.max(1,w.height>>oe);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,oe,Ue,Ye,rt,w.depth,0,Ne,Te,null):t.texImage2D(re,oe,Ue,Ye,rt,0,Ne,Te,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Be(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,re,Ae.__webglTexture,0,Ee(w)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,re,Ae.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(P,w,q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){const ne=w.depthTexture,re=ne&&ne.isDepthTexture?ne.type:null,oe=x(w.stencilBuffer,re),Ne=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=Ee(w);Be(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,oe,w.width,w.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,oe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,oe,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ne,i.RENDERBUFFER,P)}else{const ne=w.textures;for(let re=0;re<ne.length;re++){const oe=ne[re],Ne=r.convert(oe.format,oe.colorSpace),Te=r.convert(oe.type),Ue=b(oe.internalFormat,Ne,Te,oe.colorSpace),it=Ee(w);q&&Be(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,Ue,w.width,w.height):Be(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,Ue,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ue,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(w.depthTexture);ne.__renderTarget=w,(!ne.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),X(w.depthTexture,0);const re=ne.__webglTexture,oe=Ee(w);if(w.depthTexture.format===br)Be(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(w.depthTexture.format===Vs)Be(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ie(P){const w=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const ne=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ne){const re=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ne.removeEventListener("dispose",re)};ne.addEventListener("dispose",re),w.__depthDisposeCallback=re}w.__boundDepthTexture=ne}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");pe(w.__webglFramebuffer,P)}else if(q){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]===void 0)w.__webglDepthbuffer[ne]=i.createRenderbuffer(),le(w.__webglDepthbuffer[ne],P,!1);else{const re=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,oe)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),le(w.__webglDepthbuffer,P,!1);else{const ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(P,w,q){const ne=n.get(P);w!==void 0&&ae(ne.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Ie(P)}function Oe(P){const w=P.texture,q=n.get(P),ne=n.get(w);P.addEventListener("dispose",T);const re=P.textures,oe=P.isWebGLCubeRenderTarget===!0,Ne=re.length>1;if(Ne||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=w.version,o.memory.textures++),oe){q.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[Te]=[];for(let Ue=0;Ue<w.mipmaps.length;Ue++)q.__webglFramebuffer[Te][Ue]=i.createFramebuffer()}else q.__webglFramebuffer[Te]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let Te=0;Te<w.mipmaps.length;Te++)q.__webglFramebuffer[Te]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ne)for(let Te=0,Ue=re.length;Te<Ue;Te++){const it=n.get(re[Te]);it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Be(P)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Te=0;Te<re.length;Te++){const Ue=re[Te];q.__webglColorRenderbuffer[Te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Te]);const it=r.convert(Ue.format,Ue.colorSpace),Ae=r.convert(Ue.type),Ye=b(Ue.internalFormat,it,Ae,Ue.colorSpace,P.isXRRenderTarget===!0),rt=Ee(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,Ye,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,q.__webglColorRenderbuffer[Te])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),le(q.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),_e(i.TEXTURE_CUBE_MAP,w);for(let Te=0;Te<6;Te++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ue=0;Ue<w.mipmaps.length;Ue++)ae(q.__webglFramebuffer[Te][Ue],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ue);else ae(q.__webglFramebuffer[Te],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);m(w)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let Te=0,Ue=re.length;Te<Ue;Te++){const it=re[Te],Ae=n.get(it);t.bindTexture(i.TEXTURE_2D,Ae.__webglTexture),_e(i.TEXTURE_2D,it),ae(q.__webglFramebuffer,P,it,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,0),m(it)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let Te=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Te=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,ne.__webglTexture),_e(Te,w),w.mipmaps&&w.mipmaps.length>0)for(let Ue=0;Ue<w.mipmaps.length;Ue++)ae(q.__webglFramebuffer[Ue],P,w,i.COLOR_ATTACHMENT0,Te,Ue);else ae(q.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,Te,0);m(w)&&f(Te),t.unbindTexture()}P.depthBuffer&&Ie(P)}function he(P){const w=P.textures;for(let q=0,ne=w.length;q<ne;q++){const re=w[q];if(m(re)){const oe=M(P),Ne=n.get(re).__webglTexture;t.bindTexture(oe,Ne),f(oe),t.unbindTexture()}}}const be=[],F=[];function je(P){if(P.samples>0){if(Be(P)===!1){const w=P.textures,q=P.width,ne=P.height;let re=i.COLOR_BUFFER_BIT;const oe=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=n.get(P),Te=w.length>1;if(Te)for(let Ue=0;Ue<w.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ue=0;Ue<w.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),Te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ue]);const it=n.get(w[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,q,ne,0,0,q,ne,re,i.NEAREST),l===!0&&(be.length=0,F.length=0,be.push(i.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(be.push(oe),F.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Te)for(let Ue=0;Ue<w.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ue]);const it=n.get(w[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,it,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Ee(P){return Math.min(s.maxSamples,P.samples)}function Be(P){const w=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ze(P){const w=o.render.frame;u.get(P)!==w&&(u.set(P,w),P.update())}function et(P,w){const q=P.colorSpace,ne=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==Fr&&q!==cs&&(Ct.getTransfer(q)===kt?(ne!==si||re!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}function J(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=k,this.setTexture2D=X,this.setTexture2DArray=B,this.setTexture3D=z,this.setTextureCube=I,this.rebindTextures=Le,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Be}function f1(i,e){function t(n,s=cs){let r;const o=Ct.getTransfer(s);if(n===Fi)return i.UNSIGNED_BYTE;if(n===au)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xf)return i.BYTE;if(n===qf)return i.SHORT;if(n===mo)return i.UNSIGNED_SHORT;if(n===ou)return i.INT;if(n===Bs)return i.UNSIGNED_INT;if(n===Si)return i.FLOAT;if(n===oi)return i.HALF_FLOAT;if(n===$f)return i.ALPHA;if(n===jf)return i.RGB;if(n===si)return i.RGBA;if(n===Kf)return i.LUMINANCE;if(n===Zf)return i.LUMINANCE_ALPHA;if(n===br)return i.DEPTH_COMPONENT;if(n===Vs)return i.DEPTH_STENCIL;if(n===Oa)return i.RED;if(n===cu)return i.RED_INTEGER;if(n===Jf)return i.RG;if(n===uu)return i.RG_INTEGER;if(n===hu)return i.RGBA_INTEGER;if(n===va||n===xa||n===_a||n===Ma)if(o===kt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sc||n===rc||n===oc||n===ac)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lc||n===cc||n===uc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===lc||n===cc)return o===kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hc||n===fc||n===dc||n===pc||n===mc||n===gc||n===vc||n===xc||n===_c||n===Mc||n===yc||n===bc||n===Sc||n===wc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_c)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wc)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ya||n===Ec||n===Tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ya)return o===kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qf||n===Ac||n===Cc||n===Rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ya)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class d1 extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mt extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const p1={type:"move"};class Al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(p1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const m1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g1=`
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

}`;class v1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new In,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new en({vertexShader:m1,fragmentShader:g1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x1 extends Or{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const _=new v1,m=t.getContextAttributes();let f=null,M=null;const b=[],x=[],R=new Ce;let S=null;const T=new jn;T.viewport=new Bt;const C=new jn;C.viewport=new Bt;const y=[T,C],v=new d1;let A=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let te=b[V];return te===void 0&&(te=new Al,b[V]=te),te.getTargetRaySpace()},this.getControllerGrip=function(V){let te=b[V];return te===void 0&&(te=new Al,b[V]=te),te.getGripSpace()},this.getHand=function(V){let te=b[V];return te===void 0&&(te=new Al,b[V]=te),te.getHandSpace()};function L(V){const te=x.indexOf(V.inputSource);if(te===-1)return;const ae=b[te];ae!==void 0&&(ae.update(V.inputSource,V.frame,c||o),ae.dispatchEvent({type:V.type,data:V.inputSource}))}function U(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",X);for(let V=0;V<b.length;V++){const te=x[V];te!==null&&(x[V]=null,b[V].disconnect(te))}A=null,k=null,_.reset(),e.setRenderTarget(f),p=null,d=null,h=null,s=null,M=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",U),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Wn(p.framebufferWidth,p.framebufferHeight,{format:si,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ae=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?Vs:br,ae=m.stencil?Gs:Bs);const pe={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(pe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Wn(d.textureWidth,d.textureHeight,{format:si,type:Fi,depthTexture:new _u(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qe.setContext(s),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(V){for(let te=0;te<V.removed.length;te++){const ae=V.removed[te],le=x.indexOf(ae);le>=0&&(x[le]=null,b[le].disconnect(ae))}for(let te=0;te<V.added.length;te++){const ae=V.added[te];let le=x.indexOf(ae);if(le===-1){for(let Ie=0;Ie<b.length;Ie++)if(Ie>=x.length){x.push(ae),le=Ie;break}else if(x[Ie]===null){x[Ie]=ae,le=Ie;break}if(le===-1)break}const pe=b[le];pe&&pe.connect(ae)}}const B=new O,z=new O;function I(V,te,ae){B.setFromMatrixPosition(te.matrixWorld),z.setFromMatrixPosition(ae.matrixWorld);const le=B.distanceTo(z),pe=te.projectionMatrix.elements,Ie=ae.projectionMatrix.elements,Le=pe[14]/(pe[10]-1),Oe=pe[14]/(pe[10]+1),he=(pe[9]+1)/pe[5],be=(pe[9]-1)/pe[5],F=(pe[8]-1)/pe[0],je=(Ie[8]+1)/Ie[0],Ee=Le*F,Be=Le*je,ze=le/(-F+je),et=ze*-F;if(te.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(et),V.translateZ(ze),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),pe[10]===-1)V.projectionMatrix.copy(te.projectionMatrix),V.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const J=Le+ze,P=Oe+ze,w=Ee-et,q=Be+(le-et),ne=he*Oe/P*J,re=be*Oe/P*J;V.projectionMatrix.makePerspective(w,q,ne,re,J,P),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function j(V,te){te===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(te.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let te=V.near,ae=V.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(ae=_.depthFar)),v.near=C.near=T.near=te,v.far=C.far=T.far=ae,(A!==v.near||k!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),A=v.near,k=v.far),T.layers.mask=V.layers.mask|2,C.layers.mask=V.layers.mask|4,v.layers.mask=T.layers.mask|C.layers.mask;const le=V.parent,pe=v.cameras;j(v,le);for(let Ie=0;Ie<pe.length;Ie++)j(pe[Ie],le);pe.length===2?I(v,T,C):v.projectionMatrix.copy(T.projectionMatrix),Q(V,v,le)};function Q(V,te,ae){ae===null?V.matrix.copy(te.matrixWorld):(V.matrix.copy(ae.matrixWorld),V.matrix.invert(),V.matrix.multiply(te.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(te.projectionMatrix),V.projectionMatrixInverse.copy(te.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=go*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let se=null;function _e(V,te){if(u=te.getViewerPose(c||o),g=te,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let le=!1;ae.length!==v.cameras.length&&(v.cameras.length=0,le=!0);for(let Ie=0;Ie<ae.length;Ie++){const Le=ae[Ie];let Oe=null;if(p!==null)Oe=p.getViewport(Le);else{const be=h.getViewSubImage(d,Le);Oe=be.viewport,Ie===0&&(e.setRenderTargetTextures(M,be.colorTexture,d.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(M))}let he=y[Ie];he===void 0&&(he=new jn,he.layers.enable(Ie),he.viewport=new Bt,y[Ie]=he),he.matrix.fromArray(Le.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(Le.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Ie===0&&(v.matrix.copy(he.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),le===!0&&v.cameras.push(he)}const pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")){const Ie=h.getDepthInformation(ae[0]);Ie&&Ie.isValid&&Ie.texture&&_.init(e,Ie,s.renderState)}}for(let ae=0;ae<b.length;ae++){const le=x[ae],pe=b[ae];le!==null&&pe!==void 0&&pe.update(le,te,c||o)}se&&se(V,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const qe=new ud;qe.setAnimationLoop(_e),this.setAnimationLoop=function(V){se=V},this.dispose=function(){}}}const Ts=new Oi,_1=new Pt;function M1(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ad(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,b,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Bn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Bn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=e.get(f),b=M.envMap,x=M.envMapRotation;b&&(m.envMap.value=b,Ts.copy(x),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),m.envMapRotation.value.setFromMatrix4(_1.makeRotationFromEuler(Ts)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Bn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function y1(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const x=b.program;n.uniformBlockBinding(M,x)}function c(M,b){let x=s[M.id];x===void 0&&(g(M),x=u(M),s[M.id]=x,M.addEventListener("dispose",m));const R=b.program;n.updateUBOMapping(M,R);const S=e.render.frame;r[M.id]!==S&&(d(M),r[M.id]=S)}function u(M){const b=h();M.__bindingPointIndex=b;const x=i.createBuffer(),R=M.__size,S=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,x),x}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const b=s[M.id],x=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let S=0,T=x.length;S<T;S++){const C=Array.isArray(x[S])?x[S]:[x[S]];for(let y=0,v=C.length;y<v;y++){const A=C[y];if(p(A,S,y,R)===!0){const k=A.__offset,L=Array.isArray(A.value)?A.value:[A.value];let U=0;for(let X=0;X<L.length;X++){const B=L[X],z=_(B);typeof B=="number"||typeof B=="boolean"?(A.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,k+U,A.__data)):B.isMatrix3?(A.__data[0]=B.elements[0],A.__data[1]=B.elements[1],A.__data[2]=B.elements[2],A.__data[3]=0,A.__data[4]=B.elements[3],A.__data[5]=B.elements[4],A.__data[6]=B.elements[5],A.__data[7]=0,A.__data[8]=B.elements[6],A.__data[9]=B.elements[7],A.__data[10]=B.elements[8],A.__data[11]=0):(B.toArray(A.__data,U),U+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,b,x,R){const S=M.value,T=b+"_"+x;if(R[T]===void 0)return typeof S=="number"||typeof S=="boolean"?R[T]=S:R[T]=S.clone(),!0;{const C=R[T];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return R[T]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function g(M){const b=M.uniforms;let x=0;const R=16;for(let T=0,C=b.length;T<C;T++){const y=Array.isArray(b[T])?b[T]:[b[T]];for(let v=0,A=y.length;v<A;v++){const k=y[v],L=Array.isArray(k.value)?k.value:[k.value];for(let U=0,X=L.length;U<X;U++){const B=L[U],z=_(B),I=x%R,j=I%z.boundary,Q=I+j;x+=j,Q!==0&&R-Q<z.storage&&(x+=R-Q),k.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=z.storage}}}const S=x%R;return S>0&&(x+=R-S),M.__size=x,M.__cache={},this}function _(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){const b=M.target;b.removeEventListener("dispose",m);const x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class b1{constructor(e={}){const{canvas:t=h0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const M=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tn,this.toneMapping=ds,this.toneMappingExposure=1;const x=this;let R=!1,S=0,T=0,C=null,y=-1,v=null;const A=new Bt,k=new Bt;let L=null;const U=new Re(0);let X=0,B=t.width,z=t.height,I=1,j=null,Q=null;const se=new Bt(0,0,B,z),_e=new Bt(0,0,B,z);let qe=!1;const V=new gu;let te=!1,ae=!1;const le=new Pt,pe=new Pt,Ie=new O,Le=new Bt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function be(){return C===null?I:1}let F=n;function je(E,H){return t.getContext(E,H)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${iu}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",He,!1),F===null){const H="webgl2";if(F=je(H,E),F===null)throw je(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ee,Be,ze,et,J,P,w,q,ne,re,oe,Ne,Te,Ue,it,Ae,Ye,rt,lt,Ke,gt,ct,yt,Z;function ke(){Ee=new Av(F),Ee.init(),ct=new f1(F,Ee),Be=new yv(F,Ee,e,ct),ze=new c1(F,Ee),Be.reverseDepthBuffer&&d&&ze.buffers.depth.setReversed(!0),et=new Pv(F),J=new $x,P=new h1(F,Ee,ze,J,Be,ct,et),w=new Sv(x),q=new Tv(x),ne=new k0(F),yt=new _v(F,ne),re=new Cv(F,ne,et,yt),oe=new Dv(F,re,ne,et),lt=new Lv(F,Be,P),Ae=new bv(J),Ne=new Yx(x,w,q,Ee,Be,yt,Ae),Te=new M1(x,J),Ue=new Kx,it=new n1(Ee),rt=new xv(x,w,q,ze,oe,p,l),Ye=new a1(x,oe,Be),Z=new y1(F,et,Be,ze),Ke=new Mv(F,Ee,et),gt=new Rv(F,Ee,et),et.programs=Ne.programs,x.capabilities=Be,x.extensions=Ee,x.properties=J,x.renderLists=Ue,x.shadowMap=Ye,x.state=ze,x.info=et}ke();const ue=new x1(x,F);this.xr=ue,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=Ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(E){E!==void 0&&(I=E,this.setSize(B,z,!1))},this.getSize=function(E){return E.set(B,z)},this.setSize=function(E,H,K=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,z=H,t.width=Math.floor(E*I),t.height=Math.floor(H*I),K===!0&&(t.style.width=E+"px",t.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(B*I,z*I).floor()},this.setDrawingBufferSize=function(E,H,K){B=E,z=H,I=K,t.width=Math.floor(E*K),t.height=Math.floor(H*K),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(se)},this.setViewport=function(E,H,K,ee){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,H,K,ee),ze.viewport(A.copy(se).multiplyScalar(I).round())},this.getScissor=function(E){return E.copy(_e)},this.setScissor=function(E,H,K,ee){E.isVector4?_e.set(E.x,E.y,E.z,E.w):_e.set(E,H,K,ee),ze.scissor(k.copy(_e).multiplyScalar(I).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(E){ze.setScissorTest(qe=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){Q=E},this.getClearColor=function(E){return E.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(E=!0,H=!0,K=!0){let ee=0;if(E){let $=!1;if(C!==null){const we=C.texture.format;$=we===hu||we===uu||we===cu}if($){const we=C.texture.type,Ve=we===Fi||we===Bs||we===mo||we===Gs||we===au||we===lu,Je=rt.getClearColor(),tt=rt.getClearAlpha(),pt=Je.r,_t=Je.g,N=Je.b;Ve?(g[0]=pt,g[1]=_t,g[2]=N,g[3]=tt,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=pt,_[1]=_t,_[2]=N,_[3]=tt,F.clearBufferiv(F.COLOR,0,_))}else ee|=F.COLOR_BUFFER_BIT}H&&(ee|=F.DEPTH_BUFFER_BIT),K&&(ee|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",He,!1),Ue.dispose(),it.dispose(),J.dispose(),w.dispose(),q.dispose(),oe.dispose(),yt.dispose(),Z.dispose(),Ne.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",ui),ue.removeEventListener("sessionend",zt),zn.stop()};function Se(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function We(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=et.autoReset,H=Ye.enabled,K=Ye.autoUpdate,ee=Ye.needsUpdate,$=Ye.type;ke(),et.autoReset=E,Ye.enabled=H,Ye.autoUpdate=K,Ye.needsUpdate=ee,Ye.type=$}function He(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ut(E){const H=E.target;H.removeEventListener("dispose",ut),Ht(H)}function Ht(E){Xt(E),J.remove(E)}function Xt(E){const H=J.get(E).programs;H!==void 0&&(H.forEach(function(K){Ne.releaseProgram(K)}),E.isShaderMaterial&&Ne.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,K,ee,$,we){H===null&&(H=Oe);const Ve=$.isMesh&&$.matrixWorld.determinant()<0,Je=ce(E,H,K,ee,$);ze.setMaterial(ee,Ve);let tt=K.index,pt=1;if(ee.wireframe===!0){if(tt=re.getWireframeAttribute(K),tt===void 0)return;pt=2}const _t=K.drawRange,N=K.attributes.position;let W=_t.start*pt,ie=(_t.start+_t.count)*pt;we!==null&&(W=Math.max(W,we.start*pt),ie=Math.min(ie,(we.start+we.count)*pt)),tt!==null?(W=Math.max(W,0),ie=Math.min(ie,tt.count)):N!=null&&(W=Math.max(W,0),ie=Math.min(ie,N.count));const me=ie-W;if(me<0||me===1/0)return;yt.setup($,ee,Je,K,tt);let Pe,ye=Ke;if(tt!==null&&(Pe=ne.get(tt),ye=gt,ye.setIndex(Pe)),$.isMesh)ee.wireframe===!0?(ze.setLineWidth(ee.wireframeLinewidth*be()),ye.setMode(F.LINES)):ye.setMode(F.TRIANGLES);else if($.isLine){let de=ee.linewidth;de===void 0&&(de=1),ze.setLineWidth(de*be()),$.isLineSegments?ye.setMode(F.LINES):$.isLineLoop?ye.setMode(F.LINE_LOOP):ye.setMode(F.LINE_STRIP)}else $.isPoints?ye.setMode(F.POINTS):$.isSprite&&ye.setMode(F.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)ye.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))ye.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const de=$._multiDrawStarts,ge=$._multiDrawCounts,De=$._multiDrawCount,nt=tt?ne.get(tt).bytesPerElement:1,mt=J.get(ee).currentProgram.getUniforms();for(let vt=0;vt<De;vt++)mt.setValue(F,"_gl_DrawID",vt),ye.render(de[vt]/nt,ge[vt])}else if($.isInstancedMesh)ye.renderInstances(W,me,$.count);else if(K.isInstancedBufferGeometry){const de=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ge=Math.min(K.instanceCount,de);ye.renderInstances(W,me,ge)}else ye.render(W,me)};function Tt(E,H,K){E.transparent===!0&&E.side===an&&E.forceSinglePass===!1?(E.side=Bn,E.needsUpdate=!0,ei(E,H,K),E.side=gs,E.needsUpdate=!0,ei(E,H,K),E.side=an):ei(E,H,K)}this.compile=function(E,H,K=null){K===null&&(K=E),f=it.get(K),f.init(H),b.push(f),K.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),E!==K&&E.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),f.setupLights();const ee=new Set;return E.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const we=$.material;if(we)if(Array.isArray(we))for(let Ve=0;Ve<we.length;Ve++){const Je=we[Ve];Tt(Je,K,$),ee.add(Je)}else Tt(we,K,$),ee.add(we)}),b.pop(),f=null,ee},this.compileAsync=function(E,H,K=null){const ee=this.compile(E,H,K);return new Promise($=>{function we(){if(ee.forEach(function(Ve){J.get(Ve).currentProgram.isReady()&&ee.delete(Ve)}),ee.size===0){$(E);return}setTimeout(we,10)}Ee.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let bn=null;function Rn(E){bn&&bn(E)}function ui(){zn.stop()}function zt(){zn.start()}const zn=new ud;zn.setAnimationLoop(Rn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(E){bn=E,ue.setAnimationLoop(E),E===null?zn.stop():zn.start()},ue.addEventListener("sessionstart",ui),ue.addEventListener("sessionend",zt),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(H),H=ue.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,H,C),f=it.get(E,b.length),f.init(H),b.push(f),pe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),V.setFromProjectionMatrix(pe),ae=this.localClippingEnabled,te=Ae.init(this.clippingPlanes,ae),m=Ue.get(E,M.length),m.init(),M.push(m),ue.enabled===!0&&ue.isPresenting===!0){const we=x.xr.getDepthSensingMesh();we!==null&&Ai(we,H,-1/0,x.sortObjects)}Ai(E,H,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(j,Q),he=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,he&&rt.addToRenderList(m,E),this.info.render.frame++,te===!0&&Ae.beginShadows();const K=f.state.shadowsArray;Ye.render(K,E,H),te===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=m.opaque,$=m.transmissive;if(f.setupLights(),H.isArrayCamera){const we=H.cameras;if($.length>0)for(let Ve=0,Je=we.length;Ve<Je;Ve++){const tt=we[Ve];Ri(ee,$,E,tt)}he&&rt.render(E);for(let Ve=0,Je=we.length;Ve<Je;Ve++){const tt=we[Ve];Ci(m,E,tt,tt.viewport)}}else $.length>0&&Ri(ee,$,E,H),he&&rt.render(E),Ci(m,E,H);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(x,E,H),yt.resetDefaultState(),y=-1,v=null,b.pop(),b.length>0?(f=b[b.length-1],te===!0&&Ae.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Ai(E,H,K,ee){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||V.intersectsSprite(E)){ee&&Le.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pe);const Ve=oe.update(E),Je=E.material;Je.visible&&m.push(E,Ve,Je,K,Le.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||V.intersectsObject(E))){const Ve=oe.update(E),Je=E.material;if(ee&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Le.copy(E.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Le.copy(Ve.boundingSphere.center)),Le.applyMatrix4(E.matrixWorld).applyMatrix4(pe)),Array.isArray(Je)){const tt=Ve.groups;for(let pt=0,_t=tt.length;pt<_t;pt++){const N=tt[pt],W=Je[N.materialIndex];W&&W.visible&&m.push(E,Ve,W,K,Le.z,N)}}else Je.visible&&m.push(E,Ve,Je,K,Le.z,null)}}const we=E.children;for(let Ve=0,Je=we.length;Ve<Je;Ve++)Ai(we[Ve],H,K,ee)}function Ci(E,H,K,ee){const $=E.opaque,we=E.transmissive,Ve=E.transparent;f.setupLightsView(K),te===!0&&Ae.setGlobalState(x.clippingPlanes,K),ee&&ze.viewport(A.copy(ee)),$.length>0&&un($,H,K),we.length>0&&un(we,H,K),Ve.length>0&&un(Ve,H,K),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function Ri(E,H,K,ee){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[ee.id]===void 0&&(f.state.transmissionRenderTarget[ee.id]=new Wn(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?oi:Fi,minFilter:Is,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const we=f.state.transmissionRenderTarget[ee.id],Ve=ee.viewport||A;we.setSize(Ve.z,Ve.w);const Je=x.getRenderTarget();x.setRenderTarget(we),x.getClearColor(U),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),he&&rt.render(K);const tt=x.toneMapping;x.toneMapping=ds;const pt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),f.setupLightsView(ee),te===!0&&Ae.setGlobalState(x.clippingPlanes,ee),un(E,K,ee),P.updateMultisampleRenderTarget(we),P.updateRenderTargetMipmap(we),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let _t=!1;for(let N=0,W=H.length;N<W;N++){const ie=H[N],me=ie.object,Pe=ie.geometry,ye=ie.material,de=ie.group;if(ye.side===an&&me.layers.test(ee.layers)){const ge=ye.side;ye.side=Bn,ye.needsUpdate=!0,Sn(me,K,ee,Pe,ye,de),ye.side=ge,ye.needsUpdate=!0,_t=!0}}_t===!0&&(P.updateMultisampleRenderTarget(we),P.updateRenderTargetMipmap(we))}x.setRenderTarget(Je),x.setClearColor(U,X),pt!==void 0&&(ee.viewport=pt),x.toneMapping=tt}function un(E,H,K){const ee=H.isScene===!0?H.overrideMaterial:null;for(let $=0,we=E.length;$<we;$++){const Ve=E[$],Je=Ve.object,tt=Ve.geometry,pt=ee===null?Ve.material:ee,_t=Ve.group;Je.layers.test(K.layers)&&Sn(Je,H,K,tt,pt,_t)}}function Sn(E,H,K,ee,$,we){E.onBeforeRender(x,H,K,ee,$,we),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(x,H,K,ee,E,we),$.transparent===!0&&$.side===an&&$.forceSinglePass===!1?($.side=Bn,$.needsUpdate=!0,x.renderBufferDirect(K,H,ee,$,E,we),$.side=gs,$.needsUpdate=!0,x.renderBufferDirect(K,H,ee,$,E,we),$.side=an):x.renderBufferDirect(K,H,ee,$,E,we),E.onAfterRender(x,H,K,ee,$,we)}function ei(E,H,K){H.isScene!==!0&&(H=Oe);const ee=J.get(E),$=f.state.lights,we=f.state.shadowsArray,Ve=$.state.version,Je=Ne.getParameters(E,$.state,we,H,K),tt=Ne.getProgramCacheKey(Je);let pt=ee.programs;ee.environment=E.isMeshStandardMaterial?H.environment:null,ee.fog=H.fog,ee.envMap=(E.isMeshStandardMaterial?q:w).get(E.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,pt===void 0&&(E.addEventListener("dispose",ut),pt=new Map,ee.programs=pt);let _t=pt.get(tt);if(_t!==void 0){if(ee.currentProgram===_t&&ee.lightsStateVersion===Ve)return ve(E,Je),_t}else Je.uniforms=Ne.getUniforms(E),E.onBeforeCompile(Je,x),_t=Ne.acquireProgram(Je,tt),pt.set(tt,_t),ee.uniforms=Je.uniforms;const N=ee.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(N.clippingPlanes=Ae.uniform),ve(E,Je),ee.needsLights=Qe(E),ee.lightsStateVersion=Ve,ee.needsLights&&(N.ambientLightColor.value=$.state.ambient,N.lightProbe.value=$.state.probe,N.directionalLights.value=$.state.directional,N.directionalLightShadows.value=$.state.directionalShadow,N.spotLights.value=$.state.spot,N.spotLightShadows.value=$.state.spotShadow,N.rectAreaLights.value=$.state.rectArea,N.ltc_1.value=$.state.rectAreaLTC1,N.ltc_2.value=$.state.rectAreaLTC2,N.pointLights.value=$.state.point,N.pointLightShadows.value=$.state.pointShadow,N.hemisphereLights.value=$.state.hemi,N.directionalShadowMap.value=$.state.directionalShadowMap,N.directionalShadowMatrix.value=$.state.directionalShadowMatrix,N.spotShadowMap.value=$.state.spotShadowMap,N.spotLightMatrix.value=$.state.spotLightMatrix,N.spotLightMap.value=$.state.spotLightMap,N.pointShadowMap.value=$.state.pointShadowMap,N.pointShadowMatrix.value=$.state.pointShadowMatrix),ee.currentProgram=_t,ee.uniformsList=null,_t}function G(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=ba.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function ve(E,H){const K=J.get(E);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function ce(E,H,K,ee,$){H.isScene!==!0&&(H=Oe),P.resetTextureUnits();const we=H.fog,Ve=ee.isMeshStandardMaterial?H.environment:null,Je=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Fr,tt=(ee.isMeshStandardMaterial?q:w).get(ee.envMap||Ve),pt=ee.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,_t=!!K.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),N=!!K.morphAttributes.position,W=!!K.morphAttributes.normal,ie=!!K.morphAttributes.color;let me=ds;ee.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(me=x.toneMapping);const Pe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ye=Pe!==void 0?Pe.length:0,de=J.get(ee),ge=f.state.lights;if(te===!0&&(ae===!0||E!==v)){const vn=E===v&&ee.id===y;Ae.setState(ee,E,vn)}let De=!1;ee.version===de.__version?(de.needsLights&&de.lightsStateVersion!==ge.state.version||de.outputColorSpace!==Je||$.isBatchedMesh&&de.batching===!1||!$.isBatchedMesh&&de.batching===!0||$.isBatchedMesh&&de.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&de.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&de.instancing===!1||!$.isInstancedMesh&&de.instancing===!0||$.isSkinnedMesh&&de.skinning===!1||!$.isSkinnedMesh&&de.skinning===!0||$.isInstancedMesh&&de.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&de.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&de.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&de.instancingMorph===!1&&$.morphTexture!==null||de.envMap!==tt||ee.fog===!0&&de.fog!==we||de.numClippingPlanes!==void 0&&(de.numClippingPlanes!==Ae.numPlanes||de.numIntersection!==Ae.numIntersection)||de.vertexAlphas!==pt||de.vertexTangents!==_t||de.morphTargets!==N||de.morphNormals!==W||de.morphColors!==ie||de.toneMapping!==me||de.morphTargetsCount!==ye)&&(De=!0):(De=!0,de.__version=ee.version);let nt=de.currentProgram;De===!0&&(nt=ei(ee,H,$));let mt=!1,vt=!1,qt=!1;const Nt=nt.getUniforms(),hn=de.uniforms;if(ze.useProgram(nt.program)&&(mt=!0,vt=!0,qt=!0),ee.id!==y&&(y=ee.id,vt=!0),mt||v!==E){ze.buffers.depth.getReversed()?(le.copy(E.projectionMatrix),d0(le),p0(le),Nt.setValue(F,"projectionMatrix",le)):Nt.setValue(F,"projectionMatrix",E.projectionMatrix),Nt.setValue(F,"viewMatrix",E.matrixWorldInverse);const ti=Nt.map.cameraPosition;ti!==void 0&&ti.setValue(F,Ie.setFromMatrixPosition(E.matrixWorld)),Be.logarithmicDepthBuffer&&Nt.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Nt.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,vt=!0,qt=!0)}if($.isSkinnedMesh){Nt.setOptional(F,$,"bindMatrix"),Nt.setOptional(F,$,"bindMatrixInverse");const vn=$.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Nt.setValue(F,"boneTexture",vn.boneTexture,P))}$.isBatchedMesh&&(Nt.setOptional(F,$,"batchingTexture"),Nt.setValue(F,"batchingTexture",$._matricesTexture,P),Nt.setOptional(F,$,"batchingIdTexture"),Nt.setValue(F,"batchingIdTexture",$._indirectTexture,P),Nt.setOptional(F,$,"batchingColorTexture"),$._colorsTexture!==null&&Nt.setValue(F,"batchingColorTexture",$._colorsTexture,P));const hi=K.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&lt.update($,K,nt),(vt||de.receiveShadow!==$.receiveShadow)&&(de.receiveShadow=$.receiveShadow,Nt.setValue(F,"receiveShadow",$.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(hn.envMap.value=tt,hn.flipEnvMap.value=tt.isCubeTexture&&tt.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&H.environment!==null&&(hn.envMapIntensity.value=H.environmentIntensity),vt&&(Nt.setValue(F,"toneMappingExposure",x.toneMappingExposure),de.needsLights&&$e(hn,qt),we&&ee.fog===!0&&Te.refreshFogUniforms(hn,we),Te.refreshMaterialUniforms(hn,ee,I,z,f.state.transmissionRenderTarget[E.id]),ba.upload(F,G(de),hn,P)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(ba.upload(F,G(de),hn,P),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Nt.setValue(F,"center",$.center),Nt.setValue(F,"modelViewMatrix",$.modelViewMatrix),Nt.setValue(F,"normalMatrix",$.normalMatrix),Nt.setValue(F,"modelMatrix",$.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const vn=ee.uniformsGroups;for(let ti=0,Xn=vn.length;ti<Xn;ti++){const Ms=vn[ti];Z.update(Ms,nt),Z.bind(Ms,nt)}}return nt}function $e(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function Qe(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,H,K){J.get(E.texture).__webglTexture=H,J.get(E.depthTexture).__webglTexture=K;const ee=J.get(E);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=K===void 0,ee.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,H){const K=J.get(E);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,K=0){C=E,S=H,T=K;let ee=!0,$=null,we=!1,Ve=!1;if(E){const tt=J.get(E);if(tt.__useDefaultFramebuffer!==void 0)ze.bindFramebuffer(F.FRAMEBUFFER,null),ee=!1;else if(tt.__webglFramebuffer===void 0)P.setupRenderTarget(E);else if(tt.__hasExternalTextures)P.rebindTextures(E,J.get(E.texture).__webglTexture,J.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const N=E.depthTexture;if(tt.__boundDepthTexture!==N){if(N!==null&&J.has(N)&&(E.width!==N.image.width||E.height!==N.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(E)}}const pt=E.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&(Ve=!0);const _t=J.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(_t[H])?$=_t[H][K]:$=_t[H],we=!0):E.samples>0&&P.useMultisampledRTT(E)===!1?$=J.get(E).__webglMultisampledFramebuffer:Array.isArray(_t)?$=_t[K]:$=_t,A.copy(E.viewport),k.copy(E.scissor),L=E.scissorTest}else A.copy(se).multiplyScalar(I).floor(),k.copy(_e).multiplyScalar(I).floor(),L=qe;if(ze.bindFramebuffer(F.FRAMEBUFFER,$)&&ee&&ze.drawBuffers(E,$),ze.viewport(A),ze.scissor(k),ze.setScissorTest(L),we){const tt=J.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+H,tt.__webglTexture,K)}else if(Ve){const tt=J.get(E.texture),pt=H||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,tt.__webglTexture,K||0,pt)}y=-1},this.readRenderTargetPixels=function(E,H,K,ee,$,we,Ve){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=J.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ve!==void 0&&(Je=Je[Ve]),Je){ze.bindFramebuffer(F.FRAMEBUFFER,Je);try{const tt=E.texture,pt=tt.format,_t=tt.type;if(!Be.textureFormatReadable(pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(_t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-ee&&K>=0&&K<=E.height-$&&F.readPixels(H,K,ee,$,ct.convert(pt),ct.convert(_t),we)}finally{const tt=C!==null?J.get(C).__webglFramebuffer:null;ze.bindFramebuffer(F.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(E,H,K,ee,$,we,Ve){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=J.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ve!==void 0&&(Je=Je[Ve]),Je){const tt=E.texture,pt=tt.format,_t=tt.type;if(!Be.textureFormatReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=E.width-ee&&K>=0&&K<=E.height-$){ze.bindFramebuffer(F.FRAMEBUFFER,Je);const N=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,N),F.bufferData(F.PIXEL_PACK_BUFFER,we.byteLength,F.STREAM_READ),F.readPixels(H,K,ee,$,ct.convert(pt),ct.convert(_t),0);const W=C!==null?J.get(C).__webglFramebuffer:null;ze.bindFramebuffer(F.FRAMEBUFFER,W);const ie=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await f0(F,ie,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,N),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,we),F.deleteBuffer(N),F.deleteSync(ie),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,H=null,K=0){E.isTexture!==!0&&(no("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1]);const ee=Math.pow(2,-K),$=Math.floor(E.image.width*ee),we=Math.floor(E.image.height*ee),Ve=H!==null?H.x:0,Je=H!==null?H.y:0;P.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,K,0,0,Ve,Je,$,we),ze.unbindTexture()},this.copyTextureToTexture=function(E,H,K=null,ee=null,$=0){E.isTexture!==!0&&(no("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,E=arguments[1],H=arguments[2],$=arguments[3]||0,K=null);let we,Ve,Je,tt,pt,_t,N,W,ie;const me=E.isCompressedTexture?E.mipmaps[$]:E.image;K!==null?(we=K.max.x-K.min.x,Ve=K.max.y-K.min.y,Je=K.isBox3?K.max.z-K.min.z:1,tt=K.min.x,pt=K.min.y,_t=K.isBox3?K.min.z:0):(we=me.width,Ve=me.height,Je=me.depth||1,tt=0,pt=0,_t=0),ee!==null?(N=ee.x,W=ee.y,ie=ee.z):(N=0,W=0,ie=0);const Pe=ct.convert(H.format),ye=ct.convert(H.type);let de;H.isData3DTexture?(P.setTexture3D(H,0),de=F.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(P.setTexture2DArray(H,0),de=F.TEXTURE_2D_ARRAY):(P.setTexture2D(H,0),de=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);const ge=F.getParameter(F.UNPACK_ROW_LENGTH),De=F.getParameter(F.UNPACK_IMAGE_HEIGHT),nt=F.getParameter(F.UNPACK_SKIP_PIXELS),mt=F.getParameter(F.UNPACK_SKIP_ROWS),vt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,me.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,me.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,tt),F.pixelStorei(F.UNPACK_SKIP_ROWS,pt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,_t);const qt=E.isDataArrayTexture||E.isData3DTexture,Nt=H.isDataArrayTexture||H.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const hn=J.get(E),hi=J.get(H),vn=J.get(hn.__renderTarget),ti=J.get(hi.__renderTarget);ze.bindFramebuffer(F.READ_FRAMEBUFFER,vn.__webglFramebuffer),ze.bindFramebuffer(F.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let Xn=0;Xn<Je;Xn++)qt&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,J.get(E).__webglTexture,$,_t+Xn),E.isDepthTexture?(Nt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,J.get(H).__webglTexture,$,ie+Xn),F.blitFramebuffer(tt,pt,we,Ve,N,W,we,Ve,F.DEPTH_BUFFER_BIT,F.NEAREST)):Nt?F.copyTexSubImage3D(de,$,N,W,ie+Xn,tt,pt,we,Ve):F.copyTexSubImage2D(de,$,N,W,ie+Xn,tt,pt,we,Ve);ze.bindFramebuffer(F.READ_FRAMEBUFFER,null),ze.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Nt?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(de,$,N,W,ie,we,Ve,Je,Pe,ye,me.data):H.isCompressedArrayTexture?F.compressedTexSubImage3D(de,$,N,W,ie,we,Ve,Je,Pe,me.data):F.texSubImage3D(de,$,N,W,ie,we,Ve,Je,Pe,ye,me):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,$,N,W,we,Ve,Pe,ye,me.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,$,N,W,me.width,me.height,Pe,me.data):F.texSubImage2D(F.TEXTURE_2D,$,N,W,we,Ve,Pe,ye,me);F.pixelStorei(F.UNPACK_ROW_LENGTH,ge),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,De),F.pixelStorei(F.UNPACK_SKIP_PIXELS,nt),F.pixelStorei(F.UNPACK_SKIP_ROWS,mt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,vt),$===0&&H.generateMipmaps&&F.generateMipmap(de),ze.unbindTexture()},this.copyTextureToTexture3D=function(E,H,K=null,ee=null,$=0){return E.isTexture!==!0&&(no("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,ee=arguments[1]||null,E=arguments[2],H=arguments[3],$=arguments[4]||0),no('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,H,K,ee,$)},this.initRenderTarget=function(E){J.get(E).__webglFramebuffer===void 0&&P.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?P.setTextureCube(E,0):E.isData3DTexture?P.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?P.setTexture2DArray(E,0):P.setTexture2D(E,0),ze.unbindTexture()},this.resetState=function(){S=0,T=0,C=null,ze.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}class Mu{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=n}clone(){return new Mu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class S1 extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Va extends In{constructor(e=null,t=1,n=1,s,r,o,a,l,c=An,u=An,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wh extends Ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const pr=new Pt,Xh=new Pt,Qo=[],qh=new $s,w1=new Pt,Kr=new ot,Zr=new Br;class pn extends ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,w1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $s),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pr),qh.copy(e.boundingBox).applyMatrix4(pr),this.boundingBox.union(qh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Br),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pr),Zr.copy(e.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(Zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Kr.geometry=this.geometry,Kr.material=this.material,Kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zr.copy(this.boundingSphere),Zr.applyMatrix4(n),e.ray.intersectsSphere(Zr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pr),Xh.multiplyMatrices(n,pr),Kr.matrixWorld=Xh,Kr.raycast(e,Qo);for(let o=0,a=Qo.length;o<a;o++){const l=Qo[o];l.instanceId=r,l.object=this,t.push(l)}Qo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Wh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Va(new Float32Array(s*this.count),s,this.count,Oa,Si));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Eo extends js{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yh=new Pt,Dc=new pu,ea=new Br,ta=new O;class Ha extends Vt{constructor(e=new Lt,t=new Eo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(s),ea.radius+=r,e.ray.intersectsSphere(ea)===!1)return;Yh.copy(s).invert(),Dc.copy(e.ray).applyMatrix4(Yh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);ta.fromBufferAttribute(h,m),$h(ta,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,_=p;g<_;g++)ta.fromBufferAttribute(h,g),$h(ta,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function $h(i,e,t,n,s,r,o){const a=Dc.distanceSqToPoint(i);if(a<t){const l=new O;Dc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ai extends In{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,p=(o-u)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ce:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new O,s=[],r=[],o=[],a=new O,l=new Pt;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Mn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Mn(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class yu extends Bi{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ce){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class E1 extends yu{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function bu(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,p*=u,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const na=new O,Cl=new bu,Rl=new bu,Pl=new bu;class Wa extends Bi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new O){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(na.subVectors(s[0],s[1]).add(s[0]),c=na);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(na.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=na),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Cl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),Rl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),Pl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Cl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Rl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Pl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Cl.calc(l),Rl.calc(l),Pl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function jh(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function T1(i,e){const t=1-i;return t*t*e}function A1(i,e){return 2*(1-i)*i*e}function C1(i,e){return i*i*e}function ao(i,e,t,n){return T1(i,e)+A1(i,t)+C1(i,n)}function R1(i,e){const t=1-i;return t*t*t*e}function P1(i,e){const t=1-i;return 3*t*t*i*e}function L1(i,e){return 3*(1-i)*i*i*e}function D1(i,e){return i*i*i*e}function lo(i,e,t,n,s){return R1(i,e)+P1(i,t)+L1(i,n)+D1(i,s)}class md extends Bi{constructor(e=new Ce,t=new Ce,n=new Ce,s=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ce){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(lo(e,s.x,r.x,o.x,a.x),lo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class I1 extends Bi{constructor(e=new O,t=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new O){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(lo(e,s.x,r.x,o.x,a.x),lo(e,s.y,r.y,o.y,a.y),lo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gd extends Bi{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class U1 extends Bi{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vd extends Bi{constructor(e=new Ce,t=new Ce,n=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ce){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ao(e,s.x,r.x,o.x),ao(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xd extends Bi{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ao(e,s.x,r.x,o.x),ao(e,s.y,r.y,o.y),ao(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _d extends Bi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(jh(a,l.x,c.x,u.x,h.x),jh(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Ce().fromArray(s))}return this}}var La=Object.freeze({__proto__:null,ArcCurve:E1,CatmullRomCurve3:Wa,CubicBezierCurve:md,CubicBezierCurve3:I1,EllipseCurve:yu,LineCurve:gd,LineCurve3:U1,QuadraticBezierCurve:vd,QuadraticBezierCurve3:xd,SplineCurve:_d});class z1 extends Bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new La[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new La[s.type]().fromJSON(s))}return this}}class Ic extends z1{constructor(e){super(),this.type="Path",this.currentPoint=new Ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new gd(this.currentPoint.clone(),new Ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new vd(this.currentPoint.clone(),new Ce(e,t),new Ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new md(this.currentPoint.clone(),new Ce(e,t),new Ce(n,s),new Ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new _d(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new yu(e,t,n,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Su extends Lt{constructor(e=[new Ce(0,-.5),new Ce(.5,0),new Ce(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Mn(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/t,h=new O,d=new Ce,p=new O,g=new O,_=new O;let m=0,f=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,f=e[M+1].y-e[M].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[M+1].x-e[M].x,f=e[M+1].y-e[M].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let M=0;M<=t;M++){const b=n+M*u*s,x=Math.sin(b),R=Math.cos(b);for(let S=0;S<=e.length-1;S++){h.x=e[S].x*x,h.y=e[S].y,h.z=e[S].x*R,o.push(h.x,h.y,h.z),d.x=M/t,d.y=S/(e.length-1),a.push(d.x,d.y);const T=l[3*S+0]*x,C=l[3*S+1],y=l[3*S+0]*R;c.push(T,C,y)}}for(let M=0;M<t;M++)for(let b=0;b<e.length-1;b++){const x=b+M*e.length,R=x,S=x+e.length,T=x+e.length+1,C=x+1;r.push(R,S,C),r.push(T,C,S)}this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("uv",new st(a,2)),this.setAttribute("normal",new st(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Su(e.points,e.segments,e.phiStart,e.phiLength)}}class Xa extends Su{constructor(e=1,t=1,n=4,s=8){const r=new Ic;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new Xa(e.radius,e.length,e.capSegments,e.radialSegments)}}class Hs extends Lt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new O,u=new Ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const p=n+h/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(a,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ft extends Lt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;M(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new st(h,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(p,2));function M(){const x=new O,R=new O;let S=0;const T=(t-e)/n;for(let C=0;C<=r;C++){const y=[],v=C/r,A=v*(t-e)+e;for(let k=0;k<=s;k++){const L=k/s,U=L*l+a,X=Math.sin(U),B=Math.cos(U);R.x=A*X,R.y=-v*n+m,R.z=A*B,h.push(R.x,R.y,R.z),x.set(X,T,B).normalize(),d.push(x.x,x.y,x.z),p.push(L,1-v),y.push(g++)}_.push(y)}for(let C=0;C<s;C++)for(let y=0;y<r;y++){const v=_[y][C],A=_[y+1][C],k=_[y+1][C+1],L=_[y][C+1];(e>0||y!==0)&&(u.push(v,A,L),S+=3),(t>0||y!==r-1)&&(u.push(A,k,L),S+=3)}c.addGroup(f,S,0),f+=S}function b(x){const R=g,S=new Ce,T=new O;let C=0;const y=x===!0?e:t,v=x===!0?1:-1;for(let k=1;k<=s;k++)h.push(0,m*v,0),d.push(0,v,0),p.push(.5,.5),g++;const A=g;for(let k=0;k<=s;k++){const U=k/s*l+a,X=Math.cos(U),B=Math.sin(U);T.x=y*B,T.y=m*v,T.z=y*X,h.push(T.x,T.y,T.z),d.push(0,v,0),S.x=X*.5+.5,S.y=B*.5*v+.5,p.push(S.x,S.y),g++}for(let k=0;k<s;k++){const L=R+k,U=A+k;x===!0?u.push(U,U+1,L):u.push(U+1,U,L),C+=3}c.addGroup(f,C,x===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kn extends Ft{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Kn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class To extends Lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const b=new O,x=new O,R=new O;for(let S=0;S<t.length;S+=3)p(t[S+0],b),p(t[S+1],x),p(t[S+2],R),l(b,x,R,M)}function l(M,b,x,R){const S=R+1,T=[];for(let C=0;C<=S;C++){T[C]=[];const y=M.clone().lerp(x,C/S),v=b.clone().lerp(x,C/S),A=S-C;for(let k=0;k<=A;k++)k===0&&C===S?T[C][k]=y:T[C][k]=y.clone().lerp(v,k/A)}for(let C=0;C<S;C++)for(let y=0;y<2*(S-C)-1;y++){const v=Math.floor(y/2);y%2===0?(d(T[C][v+1]),d(T[C+1][v]),d(T[C][v])):(d(T[C][v+1]),d(T[C+1][v+1]),d(T[C+1][v]))}}function c(M){const b=new O;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(M),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function u(){const M=new O;for(let b=0;b<r.length;b+=3){M.x=r[b+0],M.y=r[b+1],M.z=r[b+2];const x=m(M)/2/Math.PI+.5,R=f(M)/Math.PI+.5;o.push(x,1-R)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){const b=o[M+0],x=o[M+2],R=o[M+4],S=Math.max(b,x,R),T=Math.min(b,x,R);S>.9&&T<.1&&(b<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),R<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,b){const x=M*3;b.x=e[x+0],b.y=e[x+1],b.z=e[x+2]}function g(){const M=new O,b=new O,x=new O,R=new O,S=new Ce,T=new Ce,C=new Ce;for(let y=0,v=0;y<r.length;y+=9,v+=6){M.set(r[y+0],r[y+1],r[y+2]),b.set(r[y+3],r[y+4],r[y+5]),x.set(r[y+6],r[y+7],r[y+8]),S.set(o[v+0],o[v+1]),T.set(o[v+2],o[v+3]),C.set(o[v+4],o[v+5]),R.copy(M).add(b).add(x).divideScalar(3);const A=m(R);_(S,v+0,M,A),_(T,v+2,b,A),_(C,v+4,x,A)}}function _(M,b,x,R){R<0&&M.x===1&&(o[b]=M.x-1),x.x===0&&x.z===0&&(o[b]=R/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.vertices,e.indices,e.radius,e.details)}}class qa extends To{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new qa(e.radius,e.detail)}}class Md extends Ic{constructor(e){super(e),this.uuid=Ys(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Ic().fromJSON(s))}return this}}const N1={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=yd(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,p;if(n&&(r=G1(i,e,r,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<s;g+=t)h=i[g],d=i[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return vo(r,o,t,a,l,p,0),o}};function yd(i,e,t,n,s){let r,o;if(s===J1(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Kh(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Kh(r,i[r],i[r+1],o);return o&&Ya(o,o.next)&&(_o(o),o=o.next),o}function Ws(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ya(t,t.next)||sn(t.prev,t,t.next)===0)){if(_o(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function vo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&q1(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?F1(i,n,s,r):k1(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),_o(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=O1(Ws(i),e,t),vo(i,e,t,n,s,r,2)):o===2&&B1(i,e,t,n,s,r):vo(Ws(i),e,t,n,s,r,1);break}}}function k1(i){const e=i.prev,t=i,n=i.next;if(sn(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&Mr(s,a,r,l,o,c,g.x,g.y)&&sn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function F1(i,e,t,n){const s=i.prev,r=i,o=i.next;if(sn(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,_=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,f=Uc(p,g,e,t,n),M=Uc(_,m,e,t,n);let b=i.prevZ,x=i.nextZ;for(;b&&b.z>=f&&x&&x.z<=M;){if(b.x>=p&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&Mr(a,u,l,h,c,d,b.x,b.y)&&sn(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Mr(a,u,l,h,c,d,x.x,x.y)&&sn(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=f;){if(b.x>=p&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&Mr(a,u,l,h,c,d,b.x,b.y)&&sn(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=M;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Mr(a,u,l,h,c,d,x.x,x.y)&&sn(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function O1(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Ya(s,r)&&bd(s,n,n.next,r)&&xo(s,r)&&xo(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),_o(n),_o(n.next),n=i=r),n=n.next}while(n!==i);return Ws(n)}function B1(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&j1(o,a)){let l=Sd(o,a);o=Ws(o,o.next),l=Ws(l,l.next),vo(o,e,t,n,s,r,0),vo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function G1(i,e,t,n){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=yd(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push($1(c));for(s.sort(V1),r=0;r<s.length;r++)t=H1(s[r],t);return t}function V1(i,e){return i.x-e.x}function H1(i,e){const t=W1(i,e);if(!t)return e;const n=Sd(t,i);return Ws(n,n.next),Ws(t,t.next)}function W1(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Mr(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),xo(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&X1(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function X1(i,e){return sn(i.prev,i,e.prev)<0&&sn(e.next,i,i.next)<0}function q1(i,e,t,n){let s=i;do s.z===0&&(s.z=Uc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Y1(s)}function Y1(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Uc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function $1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Mr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function j1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!K1(i,e)&&(xo(i,e)&&xo(e,i)&&Z1(i,e)&&(sn(i.prev,i,e.prev)||sn(i,e.prev,e))||Ya(i,e)&&sn(i.prev,i,i.next)>0&&sn(e.prev,e,e.next)>0)}function sn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ya(i,e){return i.x===e.x&&i.y===e.y}function bd(i,e,t,n){const s=sa(sn(i,e,t)),r=sa(sn(i,e,n)),o=sa(sn(t,n,i)),a=sa(sn(t,n,e));return!!(s!==r&&o!==a||s===0&&ia(i,t,e)||r===0&&ia(i,n,e)||o===0&&ia(t,i,n)||a===0&&ia(t,e,n))}function ia(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function sa(i){return i>0?1:i<0?-1:0}function K1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&bd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function xo(i,e){return sn(i.prev,i,i.next)<0?sn(i,e,i.next)>=0&&sn(i,i.prev,e)>=0:sn(i,e,i.prev)<0||sn(i,i.next,e)<0}function Z1(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Sd(i,e){const t=new zc(i.i,i.x,i.y),n=new zc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Kh(i,e,t,n){const s=new zc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function _o(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function zc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function J1(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class co{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return co.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Zh(e),Jh(n,e);let o=e.length;t.forEach(Zh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Jh(n,t[l]);const a=N1.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Zh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Jh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class wu extends Lt{constructor(e=new Md([new Ce(.5,.5),new Ce(-.5,.5),new Ce(-.5,-.5),new Ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new st(s,3)),this.setAttribute("uv",new st(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Q1;let b,x=!1,R,S,T,C;f&&(b=f.getSpacedPoints(u),x=!0,d=!1,R=f.computeFrenetFrames(u,!1),S=new O,T=new O,C=new O),d||(m=0,p=0,g=0,_=0);const y=a.extractPoints(c);let v=y.shape;const A=y.holes;if(!co.isClockWise(v)){v=v.reverse();for(let he=0,be=A.length;he<be;he++){const F=A[he];co.isClockWise(F)&&(A[he]=F.reverse())}}const L=co.triangulateShape(v,A),U=v;for(let he=0,be=A.length;he<be;he++){const F=A[he];v=v.concat(F)}function X(he,be,F){return be||console.error("THREE.ExtrudeGeometry: vec does not exist"),he.clone().addScaledVector(be,F)}const B=v.length,z=L.length;function I(he,be,F){let je,Ee,Be;const ze=he.x-be.x,et=he.y-be.y,J=F.x-he.x,P=F.y-he.y,w=ze*ze+et*et,q=ze*P-et*J;if(Math.abs(q)>Number.EPSILON){const ne=Math.sqrt(w),re=Math.sqrt(J*J+P*P),oe=be.x-et/ne,Ne=be.y+ze/ne,Te=F.x-P/re,Ue=F.y+J/re,it=((Te-oe)*P-(Ue-Ne)*J)/(ze*P-et*J);je=oe+ze*it-he.x,Ee=Ne+et*it-he.y;const Ae=je*je+Ee*Ee;if(Ae<=2)return new Ce(je,Ee);Be=Math.sqrt(Ae/2)}else{let ne=!1;ze>Number.EPSILON?J>Number.EPSILON&&(ne=!0):ze<-Number.EPSILON?J<-Number.EPSILON&&(ne=!0):Math.sign(et)===Math.sign(P)&&(ne=!0),ne?(je=-et,Ee=ze,Be=Math.sqrt(w)):(je=ze,Ee=et,Be=Math.sqrt(w/2))}return new Ce(je/Be,Ee/Be)}const j=[];for(let he=0,be=U.length,F=be-1,je=he+1;he<be;he++,F++,je++)F===be&&(F=0),je===be&&(je=0),j[he]=I(U[he],U[F],U[je]);const Q=[];let se,_e=j.concat();for(let he=0,be=A.length;he<be;he++){const F=A[he];se=[];for(let je=0,Ee=F.length,Be=Ee-1,ze=je+1;je<Ee;je++,Be++,ze++)Be===Ee&&(Be=0),ze===Ee&&(ze=0),se[je]=I(F[je],F[Be],F[ze]);Q.push(se),_e=_e.concat(se)}for(let he=0;he<m;he++){const be=he/m,F=p*Math.cos(be*Math.PI/2),je=g*Math.sin(be*Math.PI/2)+_;for(let Ee=0,Be=U.length;Ee<Be;Ee++){const ze=X(U[Ee],j[Ee],je);le(ze.x,ze.y,-F)}for(let Ee=0,Be=A.length;Ee<Be;Ee++){const ze=A[Ee];se=Q[Ee];for(let et=0,J=ze.length;et<J;et++){const P=X(ze[et],se[et],je);le(P.x,P.y,-F)}}}const qe=g+_;for(let he=0;he<B;he++){const be=d?X(v[he],_e[he],qe):v[he];x?(T.copy(R.normals[0]).multiplyScalar(be.x),S.copy(R.binormals[0]).multiplyScalar(be.y),C.copy(b[0]).add(T).add(S),le(C.x,C.y,C.z)):le(be.x,be.y,0)}for(let he=1;he<=u;he++)for(let be=0;be<B;be++){const F=d?X(v[be],_e[be],qe):v[be];x?(T.copy(R.normals[he]).multiplyScalar(F.x),S.copy(R.binormals[he]).multiplyScalar(F.y),C.copy(b[he]).add(T).add(S),le(C.x,C.y,C.z)):le(F.x,F.y,h/u*he)}for(let he=m-1;he>=0;he--){const be=he/m,F=p*Math.cos(be*Math.PI/2),je=g*Math.sin(be*Math.PI/2)+_;for(let Ee=0,Be=U.length;Ee<Be;Ee++){const ze=X(U[Ee],j[Ee],je);le(ze.x,ze.y,h+F)}for(let Ee=0,Be=A.length;Ee<Be;Ee++){const ze=A[Ee];se=Q[Ee];for(let et=0,J=ze.length;et<J;et++){const P=X(ze[et],se[et],je);x?le(P.x,P.y+b[u-1].y,b[u-1].x+F):le(P.x,P.y,h+F)}}}V(),te();function V(){const he=s.length/3;if(d){let be=0,F=B*be;for(let je=0;je<z;je++){const Ee=L[je];pe(Ee[2]+F,Ee[1]+F,Ee[0]+F)}be=u+m*2,F=B*be;for(let je=0;je<z;je++){const Ee=L[je];pe(Ee[0]+F,Ee[1]+F,Ee[2]+F)}}else{for(let be=0;be<z;be++){const F=L[be];pe(F[2],F[1],F[0])}for(let be=0;be<z;be++){const F=L[be];pe(F[0]+B*u,F[1]+B*u,F[2]+B*u)}}n.addGroup(he,s.length/3-he,0)}function te(){const he=s.length/3;let be=0;ae(U,be),be+=U.length;for(let F=0,je=A.length;F<je;F++){const Ee=A[F];ae(Ee,be),be+=Ee.length}n.addGroup(he,s.length/3-he,1)}function ae(he,be){let F=he.length;for(;--F>=0;){const je=F;let Ee=F-1;Ee<0&&(Ee=he.length-1);for(let Be=0,ze=u+m*2;Be<ze;Be++){const et=B*Be,J=B*(Be+1),P=be+je+et,w=be+Ee+et,q=be+Ee+J,ne=be+je+J;Ie(P,w,q,ne)}}}function le(he,be,F){l.push(he),l.push(be),l.push(F)}function pe(he,be,F){Le(he),Le(be),Le(F);const je=s.length/3,Ee=M.generateTopUV(n,s,je-3,je-2,je-1);Oe(Ee[0]),Oe(Ee[1]),Oe(Ee[2])}function Ie(he,be,F,je){Le(he),Le(be),Le(je),Le(be),Le(F),Le(je);const Ee=s.length/3,Be=M.generateSideWallUV(n,s,Ee-6,Ee-3,Ee-2,Ee-1);Oe(Be[0]),Oe(Be[1]),Oe(Be[3]),Oe(Be[1]),Oe(Be[2]),Oe(Be[3])}function Le(he){s.push(l[he*3+0]),s.push(l[he*3+1]),s.push(l[he*3+2])}function Oe(he){r.push(he.x),r.push(he.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return e_(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new La[s.type]().fromJSON(s)),new wu(n,e.options)}}const Q1={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new Ce(r,o),new Ce(a,l),new Ce(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Ce(o,1-l),new Ce(c,1-h),new Ce(d,1-g),new Ce(_,1-f)]:[new Ce(a,1-l),new Ce(u,1-h),new Ce(p,1-g),new Ce(m,1-f)]}};function e_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ps extends To{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ps(e.radius,e.detail)}}class Ir extends To{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ir(e.radius,e.detail)}}class _s extends Lt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/s,p=new O,g=new Ce;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const M=f+m,b=M,x=M+n+1,R=M+n+2,S=M+1;a.push(b,x,S),a.push(x,R,S)}}this.setIndex(a),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Zn extends Lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new O,d=new O,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const M=[],b=f/n;let x=0;f===0&&o===0?x=.5/t:f===n&&l===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){const S=R/t;h.x=-e*Math.cos(s+S*r)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(s+S*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(S+x,1-b),M.push(c++)}u.push(M)}for(let f=0;f<n;f++)for(let M=0;M<t;M++){const b=u[f][M+1],x=u[f][M],R=u[f+1][M],S=u[f+1][M+1];(f!==0||o>0)&&p.push(b,x,S),(f!==n-1||l<Math.PI)&&p.push(x,R,S)}this.setIndex(p),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zs extends Lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new O,h=new O,d=new O;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,M=(s+1)*p+g;o.push(_,m,M),o.push(m,f,M)}this.setIndex(o),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Eu extends Lt{constructor(e=new xd(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new O,l=new O,c=new Ce;let u=new O;const h=[],d=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new st(h,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(p,2));function _(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),M(),f()}function m(b){u=e.getPointAt(b/t,u);const x=o.normals[b],R=o.binormals[b];for(let S=0;S<=s;S++){const T=S/s*Math.PI*2,C=Math.sin(T),y=-Math.cos(T);l.x=y*x.x+C*R.x,l.y=y*x.y+C*R.y,l.z=y*x.z+C*R.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function f(){for(let b=1;b<=t;b++)for(let x=1;x<=s;x++){const R=(s+1)*(b-1)+(x-1),S=(s+1)*b+(x-1),T=(s+1)*b+x,C=(s+1)*(b-1)+x;g.push(R,S,C),g.push(S,T,C)}}function M(){for(let b=0;b<=t;b++)for(let x=0;x<=s;x++)c.x=b/t,c.y=x/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Eu(new La[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class t_ extends en{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class n_ extends js{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fu,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Gt extends js{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fu,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tu extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class i_ extends Tu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ll=new Pt,Qh=new O,ef=new O;class wd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gu,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Qh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qh),ef.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ef),t.updateMatrixWorld(),Ll.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ll)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const tf=new Pt,Jr=new O,Dl=new O;class s_ extends wd{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new Bt(2,1,1,1),new Bt(0,1,1,1),new Bt(3,1,1,1),new Bt(1,1,1,1),new Bt(3,0,1,1),new Bt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Jr),Dl.copy(n.position),Dl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Dl),n.updateMatrixWorld(),s.makeTranslation(-Jr.x,-Jr.y,-Jr.z),tf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tf)}}class Mo extends Tu{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new s_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class r_ extends wd{constructor(){super(new vu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class o_ extends Tu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new r_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ed{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=nf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function nf(){return performance.now()}const sf=new Pt;class a_{constructor(e,t,n=0,s=1/0){this.ray=new pu(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new mu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return sf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sf),this}intersectObject(e,t=!0,n=[]){return Nc(e,this,n,t),n.sort(rf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Nc(e[s],this,n,t);return n.sort(rf),n}}function rf(i,e){return i.distance-e.distance}function Nc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Nc(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:iu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=iu);function Au(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Lt;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0;const h=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=of(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const p=[];for(let _=0;_<o[u].length;++_)p.push(o[u][_][d]);const g=of(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function of(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Ut(o,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,p=u.count;d<p;d++)for(let g=0;g<t;g++){const _=u.getComponent(d,g);a.setComponent(d+h,g,_)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Td(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let o=0;const a=Object.keys(i.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let M=0,b=a.length;M<b;M++){const x=a[M],R=i.attributes[x];l[x]=new R.constructor(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);const S=i.morphAttributes[x];S&&(c[x]||(c[x]=[]),S.forEach((T,C)=>{const y=new T.array.constructor(T.count*T.itemSize);c[x][C]=new T.constructor(y,T.itemSize,T.normalized)}))}const p=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),m=p*_;for(let M=0;M<r;M++){const b=n?n.getX(M):M;let x="";for(let R=0,S=a.length;R<S;R++){const T=a[R],C=i.getAttribute(T),y=C.itemSize;for(let v=0;v<y;v++)x+=`${~~(C[h[v]](b)*_+m)},`}if(x in t)u.push(t[x]);else{for(let R=0,S=a.length;R<S;R++){const T=a[R],C=i.getAttribute(T),y=i.morphAttributes[T],v=C.itemSize,A=l[T],k=c[T];for(let L=0;L<v;L++){const U=h[L],X=d[L];if(A[X](o,C[U](b)),y)for(let B=0,z=y.length;B<z;B++)k[B][X](o,y[B][U](b))}}t[x]=o,u.push(o),o++}}const f=i.clone();for(const M in i.attributes){const b=l[M];if(f.setAttribute(M,new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)),M in c)for(let x=0;x<c[M].length;x++){const R=c[M][x];f.morphAttributes[M][x]=new R.constructor(R.array.slice(0,o*R.itemSize),R.itemSize,R.normalized)}}return f.setIndex(u),f}function Ur(i){const e=i.map(([h])=>h.index?h.toNonIndexed():h),t=e.reduce((h,d)=>h+d.attributes.position.count,0),n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Re,o=new O;let a=0;e.forEach((h,d)=>{const p=i[d][1],g=h.attributes.position;for(let _=0;_<g.count;_++)o.fromBufferAttribute(g,_),p(o,r),n.set([o.x,o.y,o.z],(a+_)*3),s.set([r.r,r.g,r.b],(a+_)*3);a+=g.count});const l=new Lt;l.setAttribute("position",new Ut(n,3)),l.setAttribute("color",new Ut(s,3)),l.computeVertexNormals();let c=0;const u=l.attributes.normal;return e.forEach((h,d)=>{const p=i[d][2],g=h.attributes.position.count;if(p)for(let _=0;_<g;_++)o.fromBufferAttribute(l.attributes.position,c+_).sub(p).normalize(),u.setXYZ(c+_,o.x,o.y,o.z);c+=g}),l}const kc=.7,Fc=3.8;function l_(){const i=[],t=Fc/8,n=new Re("#7a5434"),s=new Re("#a57a4e");for(let r=0;r<8;r++){const o=r/8,a=(r+1)/8,l=.24-o*.08,c=.24-a*.08,u=new Ft(c,l*1.12,t,7,1),h=u.attributes.position;for(let d=0;d<h.count;d++){const p=h.getY(d)+t/2+r*t,g=p/Fc;h.setXYZ(d,h.getX(d)+kc*g*g,p,h.getZ(d))}i.push([u,(d,p)=>p.copy(n).lerp(s,d.y/t%1).multiplyScalar(.55+.45*bt.smoothstep(d.y,0,1.3))])}return Ur(i)}const As={ink:new Re("#14261a"),rib:new Re("#d6ec96"),body:new Re("#79bf48"),edge:new Re("#2f7f33"),tip:new Re("#a8d65c")};function af(i,e,t){const n=[],s=[],r=[],o=new Re,a=new O,l=p=>e*Math.sin(Math.PI*Math.pow(Math.min(1,p),.85))+.02,c=(p,g)=>{const _=l(p)*Math.abs(g);return new O(Math.sign(g)*_,.35*p-1.25*p*p-_*.3,p*i)},u=(p,g,_,m)=>{n.push(p.x,m?p.y-.02:p.y,p.z),a.set(Math.sign(_)*.3,1,-(.35-2.5*g)/i).normalize(),s.push(a.x,a.y,a.z),m?o.copy(As.ink):o.copy(As.body).lerp(As.tip,g).lerp(As.edge,Math.abs(_)*.85).multiplyScalar(.6+.4*bt.smoothstep(g,0,.3)),r.push(o.r,o.g,o.b)},h=(p,g,_,m)=>{const[f,M,b]=[p,g,_].map(([S,T])=>c(S,T)),R=M.clone().sub(f).cross(b.clone().sub(f)).y>0?[[p,f],[g,M],[_,b]]:[[p,f],[_,b],[g,M]];for(const[[S,T],C]of R)m&&T!==0&&C.add(a.set(Math.sign(T),0,.5).normalize().multiplyScalar(.022)),u(C,S,T,m)};for(const p of[!0,!1])for(const g of[-1,1])for(let _=0;_<t;_++){const m=_/t,f=(_+1)/t,M=Math.min(1,f+.08),b=[m,0],x=[f,0],R=[m,g*.56],S=[M,g],T=[f,g*.56];h(b,R,S,p),h(b,S,T,p),p||h(b,T,x,p)}for(let p=0;p<t;p++){const g=p/t,_=(p+1)/t,m=c(g,1e-6),f=c(_,1e-6),M=.022*(1-g)+.004,b=.022*(1-_)+.004,x=[[m,-M,g],[f,b,_],[m,M,g],[m,-M,g],[f,-b,_],[f,b,_]];for(const[R,S,T]of x)n.push(R.x+S,R.y+.012,R.z),a.set(0,1,-(.35-2.5*T)/i).normalize(),s.push(a.x,a.y,a.z),r.push(As.rib.r,As.rib.g,As.rib.b)}const d=new Lt;return d.setAttribute("position",new st(n,3)),d.setAttribute("normal",new st(s,3)),d.setAttribute("color",new st(r,3)),d}function c_(){const i=[];for(let t=0;t<6;t++){const n=af(2.75,.9,7);n.rotateX(-.12+t%2*.16),n.rotateY(t/6*Math.PI*2+t%2*.12),i.push(n)}for(let t=0;t<3;t++){const n=af(1.55,.5,5);n.rotateX(-.5),n.rotateY(t/3*Math.PI*2+.5),i.push(n)}const e=[];for(let t=0;t<3;t++){const n=new Zn(.16,6,4);n.translate(Math.cos(t*2.1)*.18,-.2,Math.sin(t*2.1)*.18),e.push([n,(s,r)=>r.set("#6b4a2a")])}return Au([...i,Ur(e)])}function ra(i,e,t,{leaf:n=.24,density:s=64,fruit:r=0,seed:o=1}={}){let a=o*7919+13;const l=()=>(a=a*16807%2147483647,a/2147483647),c=new Re("#16241a"),u=new Re("#e4f0a0"),h=[],d=[],p=[],g=new Re,_=new O,m=new O,f=new O,M=new O,b=new O(0,-1,0),x=(y,v,A)=>{h.push(y.x,y.y,y.z),d.push(v.x,v.y,v.z),p.push(A.r,A.g,A.b)},R=i.map(([y,v,A,k])=>[new O(y,v,A),k]),S=Math.min(...i.map(([,y,,v])=>y-v)),T=Math.max(...i.map(([,y,,v])=>y+v));for(const[y,v]of R){const A=Math.round(s*(v/.5)*(v/.5));for(let U=0;U<A;U++){const X=1-2*(U+.5)/A,B=Math.sqrt(Math.max(0,1-X*X)),z=U*2.39996+l()*.5;m.set(Math.cos(z)*B,X,Math.sin(z)*B).normalize();const I=_.copy(y).addScaledVector(m,v*(.92+l()*.14));if(R.some(([Le,Oe])=>Le!==y&&I.distanceTo(Le)<Oe*.82))continue;f.copy(b).addScaledVector(m,-b.dot(m)).normalize().multiplyScalar(.7).add(M.set(l()-.5,l()-.5,l()-.5)).addScaledVector(m,.35).normalize(),M.copy(m).cross(f).normalize();const j=n*(1.05+l()*.6),Q=j*.34,se=(I.y-S)/(T-S);g.copy(t).lerp(e,bt.smoothstep(se+m.y*.3,.1,.7)).multiplyScalar(.82+.4*bt.smoothstep(m.y,-.8,.3)+(l()-.5)*.12),g.lerp(u,.22*bt.smoothstep(m.y,.2,.9)),l()<.12&&g.lerp(u,.3);const _e=I.clone().addScaledVector(f,-j*.5),qe=I.clone().addScaledVector(f,j*.5),V=I.clone().addScaledVector(f,-j*.16),te=V.clone().addScaledVector(M,-Q),ae=V.clone().addScaledVector(M,Q),le=m.clone().multiplyScalar(-.02),pe=Le=>Le.clone().sub(I).multiplyScalar(1.14).add(I).add(le),Ie=g.clone().multiplyScalar(.48).lerp(c,.2);for(const[Le,Oe,he,be]of[[pe(_e),pe(ae),pe(qe),Ie],[pe(_e),pe(qe),pe(te),Ie],[_e,ae,qe,g],[_e,qe,te,g]]){const F=Oe.clone().sub(Le).cross(he.clone().sub(Le)).dot(m)>0;for(const je of F?[Le,Oe,he]:[Le,he,Oe])x(je,m,be)}}const k=new ps(v*.86,1).toNonIndexed();k.translate(y.x,y.y,y.z);const L=k.attributes.position;for(let U=0;U<L.count;U++)_.fromBufferAttribute(L,U),g.copy(t).lerp(e,.3).multiplyScalar(.72),x(_,m.copy(_).sub(y).normalize(),g)}for(let y=0;y<r;y++){const[v,A]=R[y%R.length],k=y*2.39996+l(),L=.05+l()*.7,U=Math.sqrt(1-L*L),X=new ps(.085+l()*.03,1).toNonIndexed(),B=v.x+Math.cos(k)*U*A*1.03,z=v.y+L*A*1.03,I=v.z+Math.sin(k)*U*A*1.03,j=X.attributes.position,Q=new O(B,z,I);for(let se=0;se<j.count;se++)_.fromBufferAttribute(j,se),m.copy(_).normalize(),_.add(Q),x(_,m,g.set("#f0862a").lerp(u,.15*Math.max(0,m.y)))}const C=new Lt;return C.setAttribute("position",new st(h,3)),C.setAttribute("normal",new st(d,3)),C.setAttribute("color",new st(p,3)),C}function u_(i){const e=[],t=new Re("#2f6a48"),n=new Re("#4a8a5a"),s=new Re("#ffffff");return[[1.5,1.5,.9],[1.15,1.35,1.8],[.8,1.2,2.6],[.45,.9,3.25]].forEach(([r,o,a])=>{const l=new Kn(r,o,10,2),c=l.attributes.position;for(let u=0;u<c.count;u++)c.getY(u)<-o/2+.01&&c.setY(u,c.getY(u)+Math.sin(u*1.7)*.12);l.translate(0,a,0),e.push([l,(u,h)=>{const d=(u.y-a+o/2)/o;h.copy(t).lerp(n,d),i&&d>.12&&h.lerp(s,Math.min(1,(d-.12)*2.6))}])}),Ur(e)}function h_(){const i=[],e=new Ft(.12,.26,3,6,4),t=e.attributes.position;for(let n=0;n<t.count;n++){const s=t.getY(n);t.setX(n,t.getX(n)+Math.sin(s*1.7)*.12)}return e.translate(0,1.5,0),i.push([e,(n,s)=>s.set(n.y<.4?"#1e1a18":"#3a302a")]),[[.4,1.9,.9,.7],[-.5,2.3,-.8,.6],[.2,2.7,.6,.5]].forEach(([n,s,r,o])=>{const a=new Ft(.03,.08,o,4);a.translate(0,o/2,0),a.rotateZ(r),a.translate(n*.3,s,0),i.push([a,(l,c)=>c.set("#2e2622")])}),Ur(i)}const vs={uKeep:{value:new O(-1e4,-1e4,0)},uRad:{value:120}};function Oc(i){return i.onBeforeCompile=e=>{e.uniforms.uKeep=vs.uKeep,e.uniforms.uRad=vs.uRad,e.fragmentShader=e.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
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
      #endif`)},i}function f_(i,e){const t=Oc(new Gt({vertexColors:!0,side:e.side,transparent:!0,depthWrite:!1}));t.defines={FADE_PASS:1};const n=new pn(i.geometry,t,Math.max(1,i.count));return n.instanceMatrix.setUsage(Pc),n.count=0,n.visible=!1,n.frustumCulled=!1,n.receiveShadow=!0,n.renderOrder=3,i.add(n),i.geometry.computeBoundingSphere(),{o:n,src:i,sphere:i.geometry.boundingSphere}}const Qr=new O,oa=new Pt;function d_({o:i,src:e,sphere:t},n,s,r){const{x:o,y:a,z:l}=vs.uKeep.value,c=vs.uRad.value,u=r*n.aspect;let h=0;for(let d=0;d<e.count;d++){e.getMatrixAt(d,oa);const p=t.radius*oa.getMaxScaleOnAxis();Qr.copy(t.center).applyMatrix4(oa).applyMatrix4(n.matrixWorldInverse);const g=-Qr.z;if(!(g+p<.1)){if(g-p>=5.5){if(g-p>l-.3)continue;Qr.applyMatrix4(n.projectionMatrix);const _=p*r/(2*s*Math.max(g,1));if(Math.hypot((Qr.x*.5+.5)*u-o,(Qr.y*.5+.5)*r-a)>c+_)continue}oa.toArray(i.instanceMatrix.array,h++*16)}}i.count=h,i.visible=h>0,h&&(i.instanceMatrix.clearUpdateRanges(),i.instanceMatrix.addUpdateRange(0,h*16),i.instanceMatrix.needsUpdate=!0)}function p_(i,e,t,n){const s=e.filter(z=>z.kind==="palm"),r=e.filter(z=>z.kind==="round"),o=e.filter(z=>z.kind==="bush"),a=e.filter(z=>z.kind==="pine"),l=e.filter(z=>z.kind==="dead"),c=Oc(new Gt({vertexColors:!0})),u=Oc(new Gt({vertexColors:!0,side:an})),h=new Re(n.trees.leaf[0]),d=new Re(n.trees.leaf[1]),p=new Ft(.16,.26,1.6,7);p.translate(0,.8,0);const g=Ur([[p,(z,I)=>I.set("#7a5434").multiplyScalar(.55+.45*bt.smoothstep(z.y,0,1.1))]]),_=ra([[0,2.2,0,1.15],[.8,1.9,.3,.8],[-.7,1.95,-.2,.85],[.1,2,-.85,.75],[-.2,2.9,.2,.8],[.35,1.8,.85,.7]],h,d,{leaf:.32,density:26,seed:2}),m=[ra([[0,.45,0,.6],[.5,.35,.2,.45],[-.45,.38,-.15,.48],[.05,.7,.1,.42]],h,d,{seed:3}),ra([[0,.36,0,.5],[.55,.3,-.12,.42],[-.55,.3,.1,.42],[.1,.32,.5,.38],[-.1,.34,-.5,.36]],h,d,{seed:4}),ra([[0,.5,0,.58],[.3,.9,.1,.42],[-.3,.8,-.1,.44],[.05,1.15,0,.3]],h,d,{seed:5,fruit:n.id==="tak"?11:0})],f=[],M=(z,I,j)=>{const Q=new pn(z,I,Math.max(1,j));return Q.count=j,Q.castShadow=!0,Q.receiveShadow=!0,i.add(Q),Da(Q,"tree",!0),j&&f.push(f_(Q,I)),Q},b=M(l_(),c,s.length),x=M(c_(),u,s.length),R=M(g,c,r.length),S=M(_,u,r.length),T=m.map((z,I)=>o.filter((j,Q)=>Q%m.length===I)),C=m.map((z,I)=>M(z,u,T[I].length)),y=new Ft(.14,.22,1.2,6);y.translate(0,.6,0);const v=M(Ur([[y,(z,I)=>I.set("#5a3e2a").multiplyScalar(.55+.45*bt.smoothstep(z.y,0,1))]]),c,a.length),A=M(u_(n.id==="vinter"),c,a.length),k=M(h_(),c,l.length),L=new Vt;s.forEach((z,I)=>{L.position.set(z.x,z.y-.1,z.z),L.rotation.set(0,z.phase,0),L.scale.setScalar(z.s),L.updateMatrix(),b.setMatrixAt(I,L.matrix)}),r.forEach((z,I)=>{L.position.set(z.x,z.y-.1,z.z),L.rotation.set(0,z.phase,0),L.scale.setScalar(z.s),L.updateMatrix(),R.setMatrixAt(I,L.matrix)}),a.forEach((z,I)=>{L.position.set(z.x,z.y-.1,z.z),L.rotation.set(0,z.phase,0),L.scale.setScalar(z.s),L.updateMatrix(),v.setMatrixAt(I,L.matrix)}),l.forEach((z,I)=>{L.position.set(z.x,z.y-.1,z.z),L.rotation.set(0,z.phase,(z.phase%1-.5)*.15),L.scale.setScalar(z.s),L.updateMatrix(),k.setMatrixAt(I,L.matrix)});const U=z=>{s.forEach((I,j)=>{const Q=Math.cos(I.phase),se=Math.sin(I.phase);L.position.set(I.x+kc*Q*I.s,I.y-.1+Fc*I.s,I.z-kc*se*I.s),L.rotation.set(Math.sin(z*1.2+I.phase)*.07,I.phase+Math.sin(z*.7+I.phase)*.05,Math.cos(z*1+I.phase)*.07),L.scale.setScalar(I.s),L.updateMatrix(),x.setMatrixAt(j,L.matrix)}),x.instanceMatrix.needsUpdate=!0,r.forEach((I,j)=>{L.position.set(I.x,I.y-.1,I.z),L.rotation.set(Math.sin(z*1.1+I.phase)*.025,I.phase,Math.cos(z*.9+I.phase)*.025),L.scale.setScalar(I.s),L.updateMatrix(),S.setMatrixAt(j,L.matrix)}),S.instanceMatrix.needsUpdate=!0,T.forEach((I,j)=>{I.forEach((Q,se)=>{const _e=1+Math.sin(z*1.6+Q.phase)*.035;L.position.set(Q.x,Q.y-.12,Q.z),L.rotation.set(0,Q.phase,0),L.scale.set(Q.s*_e,Q.s/_e,Q.s*_e),L.updateMatrix(),C[j].setMatrixAt(se,L.matrix)}),C[j].instanceMatrix.needsUpdate=!0}),a.forEach((I,j)=>{L.position.set(I.x,I.y-.1,I.z),L.rotation.set(Math.sin(z*.9+I.phase)*.02,I.phase,Math.cos(z*.8+I.phase)*.02),L.scale.setScalar(I.s),L.updateMatrix(),A.setMatrixAt(j,L.matrix)}),A.instanceMatrix.needsUpdate=!0};return U(0),{colliders:[...s.map(z=>({x:z.x,z:z.z,r:.35*z.s})),...r.map(z=>({x:z.x,z:z.z,r:.4*z.s})),...o.map(z=>({x:z.x,z:z.z,r:.7*z.s})),...a.map(z=>({x:z.x,z:z.z,r:.4*z.s})),...l.map(z=>({x:z.x,z:z.z,r:.3*z.s}))],update:U,cullFade:(z,I)=>{const j=Math.tan(bt.degToRad(z.fov/2));for(const Q of f)d_(Q,z,j,I)}}}const Bc={uOlPx:{value:2},uOlRes:{value:new Ce(1,1)},uInk:{value:new Re("#1f1a1c")}},m_=.16,g_=.65,Gc={rock:new Set,tree:new Set,tower:new Set,figure:new Set},Vc={rock:!0,tree:!0,tower:!0,figure:!0};function v_(i,e,t,n){Bc.uOlPx.value=i*e,Bc.uOlRes.value.set(Math.max(1,t*e),Math.max(1,n*e))}function Ad(i){for(const e in Gc)Vc[e]=!!i[e],Gc[e].forEach(t=>t.visible=Vc[e])}function Cd(i){if(i.attributes.olNormal)return;i.attributes.normal||i.computeVertexNormals();const e=i.attributes.position,t=i.attributes.normal,n=e.count,s=new Map,r=new Array(n);for(let a=0;a<n;a++){const l=`${Math.round(e.getX(a)*1e4)},${Math.round(e.getY(a)*1e4)},${Math.round(e.getZ(a)*1e4)}`;r[a]=l;const c=s.get(l)||[0,0,0];c[0]+=t.getX(a),c[1]+=t.getY(a),c[2]+=t.getZ(a),s.set(l,c)}const o=new Float32Array(n*3);for(let a=0;a<n;a++){const l=s.get(r[a]),c=Math.hypot(l[0],l[1],l[2])||1;o[a*3]=l[0]/c,o[a*3+1]=l[1]/c,o[a*3+2]=l[2]/c}i.setAttribute("olNormal",new Ut(o,3))}const Il=new Map;function Rd(i,e,t,n){const s=`${i?i.uuid:"batch"}|${e}|${t}|${n}`;if(Il.has(s))return Il.get(s);const r=new Rt({side:Bn,vertexColors:t});return r.color.copy(t||!i?new Re(1,1,1):i.color).multiplyScalar(m_),r.visible=Vc[e],r.onBeforeCompile=o=>{Object.assign(o.uniforms,Bc),o.vertexShader=`attribute vec3 olNormal;
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
      diffuseColor.rgb = mix(diffuseColor.rgb, uInk, ${g_.toFixed(2)});`),n&&(o.uniforms.uKeep=vs.uKeep,o.uniforms.uRad=vs.uRad,o.fragmentShader=`uniform vec3 uKeep;
uniform float uRad;
`+o.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        if (vOlZ < uKeep.z && length(gl_FragCoord.xy - uKeep.xy) < uRad * 0.78) discard;
        if (vOlZ + 2.6 < 4.2) discard; // nær-fade (kameraet)`))},r.customProgramCacheKey=()=>`ol${n?"f":""}`,Gc[e].add(r),Il.set(s,r),r}const Pd=i=>{const e=i.material;return i.isMesh&&!Array.isArray(e)&&(e.isMeshLambertMaterial||e.isMeshStandardMaterial)&&!e.transparent&&e.side!==an};function Da(i,e,t=!1){if(!Pd(i))return null;Cd(i.geometry);const n=!!(i.material.vertexColors&&i.geometry.attributes.color),s=new pn(i.geometry,Rd(i.material,e,n,t),i.instanceMatrix.count);return s.instanceMatrix=i.instanceMatrix,s.count=i.count,s.frustumCulled=!1,s.renderOrder=1,s.onBeforeRender=()=>{s.count=i.count},i.add(s),s}const lf=512,cf=new Map;let Hc=null;function x_(i){Hc=i}function __(i,e){const t=`${i.uuid}|${e}`;let n=cf.get(t);if(n)return n;Cd(i);const s=new pn(i,Rd(null,e,!1,!1),lf);return s.instanceMatrix.setUsage(Pc),s.setColorAt(0,new Re),s.instanceColor.setUsage(Pc),s.count=0,s.frustumCulled=!1,s.matrixAutoUpdate=!1,s.renderOrder=1,s.raycast=()=>{},n={mesh:s,parts:[]},s.onBeforeRender=()=>{const r=s.instanceMatrix.array,o=s.instanceColor.array;let a=0;for(let l=n.parts.length-1;l>=0;l--){const c=n.parts[l];let u=c,h=!0;for(;u.parent;){if(!u.visible){h=!1;break}u=u.parent}if(u!==Hc){++c.userData.olMiss>300&&n.parts.splice(l,1);continue}if(c.userData.olMiss=0,!h||a>=lf)continue;r.set(c.matrixWorld.elements,a*16);const d=c.material.color;o[a*3]=d.r,o[a*3+1]=d.g,o[a*3+2]=d.b,a++}s.count=a,a&&(s.instanceMatrix.clearUpdateRanges(),s.instanceMatrix.addUpdateRange(0,a*16),s.instanceColor.clearUpdateRanges(),s.instanceColor.addUpdateRange(0,a*3),s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0)},Hc.add(s),cf.set(t,n),n}function Vr(i,e){return i.traverse(t=>{!Pd(t)||t.userData.noOutline||(t.userData.olMiss=0,__(t.geometry,e).parts.push(t))}),i}const on=(i,e={})=>new Gt({color:i,flatShading:!0,...e});function ls(i){const e=i.map(o=>o.toNonIndexed()),t=e.reduce((o,a)=>o+a.attributes.position.count,0),n=new Float32Array(t*3);let s=0;for(const o of e)n.set(o.attributes.position.array,s),s+=o.attributes.position.array.length;const r=new Lt;return r.setAttribute("position",new Ut(n,3)),r.computeVertexNormals(),r}function M_(i,e,t,n,s,r){const o=r.id,{heightAt:a,pathDist:l,plinths:c}=e,u=e.lighthouse.pos,h=new Vt,d=new Re,p=[],g=(G,ve,ce,$e=2,Qe=5)=>l(G,ve)>ce&&Math.hypot(G-u.x,ve-u.z)>Qe&&!c.some(E=>Math.hypot(E.x-G,E.z-ve)<$e),_=(G,ve,ce=G*20)=>{const $e=[];for(let Qe=0;Qe<ce&&$e.length<G;Qe++){const E=(n()-.5)*104,H=(n()-.5)*104,K=a(E,H);ve(E,H,K)&&$e.push({x:E,z:H,h:K,r:n(),s:n()})}return $e},m=(G,ve,ce,$e,Qe=!1)=>{const E=new pn(G,ve,Math.max(1,ce.length));return E.count=ce.length,ce.forEach((H,K)=>{$e(H,K,E),h.updateMatrix(),E.setMatrixAt(K,h.matrix)}),E.instanceColor&&(E.instanceColor.needsUpdate=!0),E.castShadow=Qe,E.receiveShadow=!0,i.add(E),E},f=(t.mobile?.55:1)*1.8,M=(()=>{const G=[[-.9,.5,.05],[-.45,.68,-.06],[0,.78,.02],[.45,.66,-.04],[.9,.48,.06]].map(([Qe,E,H])=>{const K=new Kn(.045,E,3);return K.translate(0,E/2,0),K.rotateZ(Qe*.45),K.rotateX(H*3),K.translate(Qe*.09,0,H),K}),ve=ls(G),ce=ve.attributes.position,$e=[];for(let Qe=0;Qe<ce.count;Qe++){const E=bt.clamp(ce.getY(Qe)/.7,0,1),H=.5+.7*E;$e.push(H,H,H*.95)}return ve.setAttribute("color",new st($e,3)),ve})(),b=_(Math.round(150*f),(G,ve,ce)=>ce>.8&&g(G,ve,1.7,1.7,4.4)),x=m(M,on("#ffffff",{vertexColors:!0}),b,(G,ve,ce)=>{h.position.set(G.x,G.h-.05,G.z),h.rotation.set(0,G.r*6,0),h.scale.setScalar(.8+G.s*.7),ce.setColorAt(ve,d.set(o==="vinter"?G.s<.5?"#c8d4c0":"#e6eef4":o==="vulkan"?G.s<.5?"#5a6a3a":"#7a7a4a":G.s<.5?"#6fb04a":"#8cc656"))});Da(x,"tree");const R=_(Math.round((o==="vinter"?0:o==="vulkan"?30:36)*f),(G,ve,ce)=>ce>.85&&g(G,ve,1.9,2,4.5)),S=new Ft(.025,.03,.4,4);S.translate(0,.2,0);const T=new ps(.11,0);T.translate(0,.42,0);const C=["#ff8fb0","#ffd54a","#ffffff","#b58cff","#ff7a4a"];if(m(S,on("#5f8f3a"),R,G=>{h.position.set(G.x,G.h-.03,G.z),h.rotation.set(0,0,0),h.scale.setScalar(.9+G.s*.6)}),m(T,on("#ffffff"),R,(G,ve,ce)=>{h.position.set(G.x,G.h-.03,G.z),h.scale.setScalar(.9+G.s*.6),ce.setColorAt(ve,d.set(C[Math.floor(G.r*C.length)]))}),o!=="vulkan"){const G=(()=>{const $e=[],Qe=[];for(let K=0;K<8;K++){const ee=K/8*Math.PI*2,$=.32;$e.push(0,0,0,Math.cos(ee)*.12,0,Math.sin(ee)*.12,Math.cos(ee-$)*.045,0,Math.sin(ee-$)*.045),$e.push(0,0,0,Math.cos(ee+$)*.045,0,Math.sin(ee+$)*.045,Math.cos(ee)*.12,0,Math.sin(ee)*.12);for(let we=0;we<6;we++)Qe.push(1,1,1)}for(let K=0;K<6;K++){const ee=K/6*Math.PI*2,$=(K+1)/6*Math.PI*2;$e.push(0,.012,0,Math.cos($)*.035,.012,Math.sin($)*.035,Math.cos(ee)*.035,.012,Math.sin(ee)*.035);for(let we=0;we<3;we++)Qe.push(1,.78,.18)}const H=new Lt;return H.setAttribute("position",new st($e,3)),H.setAttribute("color",new st(Qe,3)),H.setAttribute("normal",new st(new Array($e.length/3).fill(0).flatMap(()=>[0,1,0]),3)),H})(),ve=_(Math.round((o==="vinter"?10:70)*f),($e,Qe,E)=>E>.9&&g($e,Qe,1.6,2,4.5)),ce=[];for(const $e of ve){const Qe=3+Math.floor($e.r*5);for(let E=0;E<Qe;E++){const H=n()*6.28,K=Math.sqrt(n())*.85,ee=$e.x+Math.cos(H)*K,$=$e.z+Math.sin(H)*K,we=a(ee,$);we>.85&&g(ee,$,1.4,2,4.5)&&ce.push({x:ee,z:$,h:we,r:n(),s:n()})}}m(G,new Gt({color:"#ffffff",vertexColors:!0,side:an}),ce,($e,Qe,E)=>{h.position.set($e.x,$e.h+.035,$e.z),h.rotation.set(($e.s-.5)*.3,$e.r*6.28,0),h.scale.setScalar(1.3+$e.s*.7),E.setColorAt(Qe,d.setRGB(1,.97+$e.r*.03,.94+$e.s*.06))})}const y=_(Math.round((o==="tak"?36:0)*f),(G,ve,ce)=>ce>1&&g(G,ve,2.4,2.4,5)),v=new Zn(.22,8,4,0,Math.PI*2,0,Math.PI/2);v.scale(1,.7,1),v.translate(0,.28,0);const A=new Ft(.07,.09,.3,6);A.translate(0,.14,0),m(A,on("#f4ead6"),y,G=>{h.position.set(G.x,G.h-.03,G.z),h.rotation.set(0,0,(G.r-.5)*.3),h.scale.setScalar(.8+G.s)},!0),m(v,on("#ffffff"),y,(G,ve,ce)=>{h.position.set(G.x,G.h-.03,G.z),h.rotation.set(0,0,(G.r-.5)*.3),h.scale.setScalar(.8+G.s),ce.setColorAt(ve,d.set(G.r<.6?"#d8453a":"#c89a5a"))},!0);const k=ls([[-.08,0],[.07,.05],[0,-.07]].map(([G,ve],ce)=>{const $e=new Kn(.04,1.1+ce*.2,3);return $e.translate(G,.55+ce*.1,ve),$e}).concat([(()=>{const G=new Xa(.05,.18,2,4);return G.translate(.07,1.25,.05),G})()])),L=_(Math.round(150*f),(G,ve,ce)=>ce>.05&&ce<.55&&g(G,ve,2.2,2,5),6e3),U=m(k,on(o==="vinter"?"#a89878":o==="vulkan"?"#5a5a3a":"#9aa856"),L,G=>{h.position.set(G.x,G.h-.1,G.z),h.rotation.set(0,G.r*6,0),h.scale.setScalar(.8+G.s*.6)}),X=[],B=[];for(const G of e.paths)for(const ve of[-1,1]){let ce=null,$e=0,Qe=0;for(let E=2;E<G.length-7;E+=1.7){const H=E/G.length,K=G.curve.getPointAt(H),ee=G.curve.getTangentAt(H),$=K.x-ee.z*ve*2.25,we=K.z+ee.x*ve*2.25,Ve=a($,we);if(!(Ve>.5&&Qe<=0&&g($,we,1.9,2.6,6))){ce=null,Qe>0&&Qe--;continue}X.push({x:$,z:we,h:Ve}),ce&&B.push({a:ce,b:{x:$,z:we,h:Ve}}),ce={x:$,z:we,h:Ve},++$e>4+Math.floor(n()*5)&&($e=0,ce=null,Qe=3+Math.floor(n()*5))}}const z=new Ft(.075,.09,.8,7);z.translate(0,.4,0);const I=new Vn(1,.1,.05),j=on("#a07650"),Q=on("#6e4a2c"),se=on("#c9ad7c"),_e=new Eu(new Wa([0,.17,.33,.5,.67,.83,1].map(G=>new O(G-.5,-.1*(1-(2*G-1)**2),0))),6,.02,4),qe=new zs(.095,.026,4,8);qe.rotateX(Math.PI/2),m(z,Q,X,G=>{h.position.set(G.x,G.h-.05,G.z),h.rotation.set(0,n()*.3,(n()-.5)*.12),h.scale.set(1,1,1)},!0);const V=G=>({a:ve,b:ce})=>{const $e=Math.hypot(ce.x-ve.x,ce.z-ve.z);h.position.set((ve.x+ce.x)/2,(ve.h+ce.h)/2+G-.05,(ve.z+ce.z)/2),h.rotation.set(0,-Math.atan2(ce.z-ve.z,ce.x-ve.x),0),h.scale.set($e,1,1)};m(I,j,B,V(.34),!0),m(_e,se,B,V(.68)),m(qe,se,X,G=>{h.position.set(G.x,G.h+.63,G.z),h.rotation.set(0,0,0),h.scale.set(1,1,1)});const te=r.dockTheta??-2.35,ae=new Ce(Math.cos(te),Math.sin(te)),le=s(te);let pe=le-6;for(let G=le-10;G<le+4;G+=.25)if(a(ae.x*G,ae.y*G)<.3){pe=G;break}const Ie=new Mt,Le=on("#b48a5e"),Oe=on("#6e4a2c"),he=8,be=pe-2.5;for(let G=0;G<he/.55;G++){const ve=new ot(new Vn(.5,.12,2.2),Le);ve.position.set(be+G*.55,.75+(n()-.5)*.04,0),ve.rotation.y=(n()-.5)*.05,ve.castShadow=ve.receiveShadow=!0,Ie.add(ve)}for(let G=0;G<=he;G+=2)for(const ve of[-1,1]){const ce=new ot(new Ft(.12,.12,2.2,6),Oe);ce.position.set(be+G,.1,ve*1.05),ce.castShadow=!0,Ie.add(ce)}Ie.rotation.y=-te,i.add(Ie);const F=new Mt,je=new Ft(.9,.9,3.4,10,1,!0,0,Math.PI);je.rotateZ(Math.PI/2),je.rotateX(Math.PI/2),je.scale(1,.6,.7);const Ee=new ot(je,on("#3f6f9a",{side:an}));Ee.rotation.y=Math.PI/2,Ee.castShadow=!0,F.add(Ee);for(const G of[-.6,.6]){const ve=new ot(new Vn(.3,.08,1.2),Le);ve.position.set(G,-.15,0),F.add(ve)}const Be=new ot(new Vn(2.4,.06,.12),Le);Be.position.set(.2,.05,.4),Be.rotation.y=.3,F.add(Be);const ze=ae.x*(be+he-1)+-ae.y*2.1,et=ae.y*(be+he-1)+ae.x*2.1;F.position.set(ze,.3,et),F.rotation.y=-te,i.add(F);const J=new Mt,P=new ot(new ci(3,1.4,10,5),new Rt({color:"#4a3a2a",wireframe:!0}));P.position.y=1;const w=P.geometry.attributes.position;for(let G=0;G<w.count;G++)w.setZ(G,Math.sin(w.getX(G)/3*Math.PI+1.5)*.15-Math.abs(w.getY(G))*.05);J.add(P);for(const G of[-1.6,1.6]){const ve=new ot(new Ft(.07,.09,2,5),Oe);ve.position.set(G,.9,0),ve.castShadow=!0,J.add(ve)}for(let G=0;G<5;G++){const ve=new ot(new Zn(.09,6,4),on("#f0a43a"));ve.position.set(-1.2+G*.6,1.66,.05),J.add(ve)}const q=pe-4.5,ne=4.2,re=ae.x*q-ae.y*ne,oe=ae.y*q+ae.x*ne;J.position.set(re,a(re,oe)-.1,oe),J.rotation.y=-te+Math.PI/2,i.add(J),p.push({x:re,z:oe,r:1.4});const Ne=new Ft(.42,.42,.95,10);Ne.translate(0,.47,0);const Te=new Ft(.44,.44,.08,10),Ue=new Vn(.8,.8,.8);Ue.translate(0,.4,0);const it=[],Ae=(G,ve,ce,$e)=>{for(let Qe=0;Qe<60&&ce>0;Qe++){const E=G+(n()-.5)*6,H=ve+(n()-.5)*6,K=a(E,H);K<.4||!g(E,H,2.3,2.4,4.6)||it.some(ee=>Math.hypot(ee.x-E,ee.z-H)<1.1)||(it.push({x:E,z:H,h:K,kind:$e??(n()<.6?"barrel":"crate"),r:n()}),ce--)}};Ae(ae.x*(pe-2.5),ae.y*(pe-2.5),5),Ae(u.x+6,u.z+1,3,"barrel"),Ae(u.x-6,u.z+2,2);const Ye=it.filter(G=>G.kind==="barrel"),rt=it.filter(G=>G.kind==="crate");m(Ne,on("#8a5a36"),Ye,G=>{h.position.set(G.x,G.h-.05,G.z),h.rotation.set(0,G.r*6,0),h.scale.setScalar(1)},!0),m(Te,on("#3e3a38"),Ye.flatMap(G=>[{...G,y:.2},{...G,y:.75}]),G=>{h.position.set(G.x,G.h-.05+G.y,G.z)},!1),m(Ue,on("#b8925e"),rt,G=>{h.position.set(G.x,G.h-.05,G.z),h.rotation.set(0,G.r*6,0),h.scale.setScalar(.8+G.r*.4)},!0);for(const G of it)p.push({x:G.x,z:G.z,r:.55});const lt=_(Math.round(380*f),(G,ve,ce)=>ce>.9&&g(G,ve,1.6,1.6,4.4)),Ke=new ps(.06,0);Ke.translate(0,.06,0),m(Ke,new Gt({color:o==="vulkan"?"#ff9a5a":"#fffdf4"}),lt,G=>{h.position.set(G.x,G.h-.02,G.z),h.rotation.set(0,0,0),h.scale.setScalar(.8+G.s*.8)});const gt=(G,ve,ce)=>{const $e=[];for(let Qe=0;Qe<G*40&&$e.length<G;Qe++){const E=(n()-.5)*130,H=(n()-.5)*130,K=a(E,H),ee=.05-K;ee>ve&&ee<ce&&Math.hypot(E-u.x,H-u.z)>6&&$e.push({x:E,z:H,h:K,r:n(),s:n()})}return $e},ct=ls([0,1,2].map(G=>{const ve=new Kn(.08,.9+G*.25,3);return ve.translate((G-1)*.12,.45+G*.12,G%2*.1),ve.rotateZ((G-1)*.25),ve})),yt=gt(Math.round(90*f),.35,1.8),Z=m(ct,on("#4f9a5a"),yt,G=>{h.position.set(G.x,G.h,G.z),h.rotation.set(0,G.r*6,0),h.scale.setScalar(.8+G.s*.7)}),ke=ls([[0,0,.32],[.3,.1,.22],[-.25,.05,.26],[.05,.3,.2]].map(([G,ve,ce])=>{const $e=new ps(ce,0);return $e.translate(G,ce*.8,ve),$e})),ue=gt(Math.round((o==="tak"?28:0)*f),.5,1.6),Se=["#b58cff","#ff8fa8","#ffc65a","#7fd6ff"];if(m(ke,on("#ffffff"),ue,(G,ve,ce)=>{h.position.set(G.x,G.h,G.z),h.rotation.set(0,G.r*6,0),h.scale.setScalar(.8+G.s*.9),ce.setColorAt(ve,d.set(Se[Math.floor(G.r*Se.length)]))}),o==="tak"){const G=ls([[0,0,0,.55],[.12,.05,.4,.42],[-.13,-.04,-.45,.4],[.05,.12,.2,.33],[-.06,-.1,-.15,.36]].map(([E,H,K,ee])=>{const $=new Kn(.05,ee,4);return $.translate(0,ee/2,0),$.rotateZ(K),$.rotateX(H*2),$.translate(E,0,H),$})),ve=ls([(()=>{const E=new Ft(.12,.16,.12,7);return E.translate(0,.06,0),E})(),...Array.from({length:7},(E,H)=>{const K=new Kn(.025,.2,3),ee=H/7*6.28;return K.translate(0,.1,0),K.rotateZ(.5),K.rotateY(ee),K.translate(Math.cos(ee)*.08,.12,-Math.sin(ee)*.08),K})]),ce=_(Math.round(16*f),(E,H,K)=>.05-K>.08&&e.landDist(E,H)>5,3e4).map(E=>({...E,big:2.4,pool:!0})),$e=[...gt(Math.round(36*f),.12,.9),...ce],Qe=["#ff5a80","#a060ff","#ffb820","#ff5a2a","#ff7ad0","#f4d070"];m(G,on("#ffffff"),$e.filter((E,H)=>H%2===0),(E,H,K)=>{h.position.set(E.x,E.h-.02,E.z),h.rotation.set(0,E.r*6,0),h.scale.setScalar((.8+E.s*.8)*(E.big??1)),K.setColorAt(H,d.set(Qe[Math.floor(E.r*Qe.length)]).multiplyScalar(E.pool?1.6:1))}),m(ve,on("#ffffff"),$e.filter((E,H)=>H%2===1),(E,H,K)=>{h.position.set(E.x,E.h-.02,E.z),h.rotation.set(0,E.r*6,0),h.scale.setScalar((.9+E.s*.9)*(E.big??1)),K.setColorAt(H,d.set(Qe[(Math.floor(E.s*Qe.length)+2)%Qe.length]).multiplyScalar(E.pool?1.6:1))})}const We=ls([(()=>{const G=new Zn(.17,7,4);return G.scale(1.2,.5,.85),G.translate(0,.07,0),G})(),...[-1,1].map(G=>{const ve=new Zn(.06,5,3);return ve.scale(1.3,.7,1),ve.translate(G*.17,.08,.15),ve}),...[-1,1].flatMap(G=>[0,1,2].map(ve=>{const ce=new Vn(.16,.02,.02);return ce.rotateZ(G*-.5),ce.translate(G*.18,.04,-.06+ve*.07),ce})),...[-1,1].map(G=>{const ve=new Zn(.025,4,3);return ve.translate(G*.05,.13,.09),ve})]),He=o==="vulkan"?[]:_(Math.round((o==="vinter"?5:18)*f),(G,ve,ce)=>ce>.08&&ce<.42&&g(G,ve,2.2,2,5),12e3).map(G=>({...G,home:{x:G.x,z:G.z},dir:G.r*6.28,t:G.s*4,run:0})),ut=m(We,on(o==="vinter"?"#b8584a":"#d8553a"),He,G=>{h.position.set(G.x,G.h,G.z),h.rotation.set(0,G.dir,0),h.scale.setScalar(1)},!0),Ht=ls([(()=>{const ve=new Zn(.07,6,4);return ve.scale(.6,.5,1.4),ve})(),(()=>{const ve=new Kn(.06,.1,3);return ve.rotateX(-Math.PI/2),ve.translate(0,0,-.13),ve})()]),Xt=[...gt(Math.round(26*f),.1,.8),..._(Math.round(12*f),(G,ve,ce)=>.05-ce>.12&&e.landDist(G,ve)>5,3e4).map(G=>({...G,big:1.5}))].map(G=>({...G,rad:.5+G.s*.9,sp:(.5+G.r)*(G.s<.5?1:-1)})),Tt=["#ff9a3a","#3a7ad8","#f2c94c","#2f8f9a"],bn=m(Ht,on("#ffffff"),Xt,(G,ve,ce)=>{h.position.set(G.x,G.h,G.z),ce.setColorAt(ve,d.set(Tt[ve%Tt.length]))}),Rn=new Ir(.16,0);Rn.scale(.45,.3,1.4);const ui=gt(t.mobile?5:8,.9,2.6).map(G=>({...G,rad:2+G.s*3,speed:(.25+G.r*.3)*(G.r<.5?1:-1)})),zt=9,zn=new pn(Rn,new Rt({color:"#2f5f72",transparent:!0,opacity:.75}),Math.max(1,ui.length*zt));zn.count=ui.length*zt,zn.renderOrder=1,i.add(zn);const Ai=new Hs(1,10);Ai.rotateX(-Math.PI/2);const Ci=new pn(Ai,new Rt({color:"#0f3a42",transparent:!0,opacity:.5,depthWrite:!1}),Xt.length);Ci.renderOrder=-1,Ci.frustumCulled=!1,i.add(Ci);const Ri=(G,ve,ce,$e,Qe,E,H)=>{const K=a(ve,$e),ee=Math.max(0,ce-K)+.12;h.position.set(ve+ee*.6,K+.03,$e+ee*.4),h.rotation.set(0,Qe,0),h.scale.set(K<-.02?E:0,1,K<-.02?H:0),h.updateMatrix(),Ci.setMatrixAt(G,h.matrix)},un=Array.from({length:zt},()=>[(n()-.5)*1.4,(n()-.5)*.25,(n()-.5)*1.4,n()*6]),Sn=G=>{F.position.y=.3+Math.sin(G*1.2)*.08,F.rotation.z=Math.sin(G*.9)*.04,F.rotation.x=Math.sin(G*1.3+1)*.03,ui.forEach((ce,$e)=>{const Qe=G*ce.speed+ce.r*6,E=ce.x+Math.cos(Qe)*ce.rad,H=ce.z+Math.sin(Qe)*ce.rad,K=Math.atan2(-Math.sin(Qe)*ce.speed,Math.cos(Qe)*ce.speed);for(let ee=0;ee<zt;ee++){const[$,we,Ve,Je]=un[ee];h.position.set(E+$+Math.sin(G*2+Je)*.1,Math.max(a(E,H)+.25,-.75)+we,H+Ve),h.rotation.set(0,K+Math.sin(G*6+Je)*.15,0),h.scale.setScalar(1),h.updateMatrix(),zn.setMatrixAt($e*zt+ee,h.matrix)}}),zn.instanceMatrix.needsUpdate=!0,Xt.forEach((ce,$e)=>{const Qe=G*ce.sp+ce.r*6+Math.sin(G*.7+$e)*.6,E=ce.x+Math.cos(Qe)*ce.rad,H=ce.z+Math.sin(Qe)*ce.rad;h.position.set(E,Math.min(a(E,H)+.08,0),H),h.rotation.set(0,-Qe+(ce.sp>0?0:Math.PI),Math.sin(G*9+$e)*.2),h.scale.setScalar((.9+ce.s*.5)*(ce.big??1)),h.updateMatrix(),bn.setMatrixAt($e,h.matrix),Ri($e,E,h.position.y,H,-Qe+(ce.sp>0?0:Math.PI),.05*(ce.big??1),.13*(ce.big??1))}),bn.instanceMatrix.needsUpdate=!0,Ci.instanceMatrix.needsUpdate=!0;const ve=Math.min(.05,Math.max(0,G-(Sn.last??G)));Sn.last=G,He.forEach((ce,$e)=>{if(ce.t-=ve,ce.t<=0&&(ce.run>0?(ce.run=0,ce.t=.8+Math.random()*2.5):(ce.run=(Math.random()<.5?-1:1)*(.9+Math.random()*.8),ce.t=.4+Math.random()*.9,Math.random()<.3&&(ce.dir+=(Math.random()-.5)*1.5))),ce.run){const Qe=ce.x+Math.cos(ce.dir)*ce.run*ve,E=ce.z-Math.sin(ce.dir)*ce.run*ve,H=a(Qe,E);H>.05&&H<.5&&Math.hypot(Qe-ce.home.x,E-ce.home.z)<3.5?(ce.x=Qe,ce.z=E,ce.h=H):ce.run=-ce.run}h.position.set(ce.x,ce.h+(ce.run?Math.abs(Math.sin(G*30+$e))*.015:0),ce.z),h.rotation.set(0,ce.dir,ce.run?Math.sin(G*30+$e)*.08:0),h.scale.setScalar(1),h.updateMatrix(),ut.setMatrixAt($e,h.matrix)}),ut.instanceMatrix.needsUpdate=!0,!((G*60|0)%2)&&(L.forEach((ce,$e)=>{h.position.set(ce.x,ce.h-.1,ce.z),h.rotation.set(Math.sin(G*1.7+ce.x*.3)*.08,ce.r*6,Math.cos(G*1.4+ce.z*.3)*.08),h.scale.setScalar(.8+ce.s*.6),h.updateMatrix(),U.setMatrixAt($e,h.matrix)}),U.instanceMatrix.needsUpdate=!0,yt.forEach((ce,$e)=>{h.position.set(ce.x,ce.h,ce.z),h.rotation.set(Math.sin(G*1.1+ce.x)*.12,ce.r*6,Math.cos(G*.9+ce.z)*.12),h.scale.setScalar(.8+ce.s*.7),h.updateMatrix(),Z.setMatrixAt($e,h.matrix)}),Z.instanceMatrix.needsUpdate=!0)};Ie.updateMatrixWorld(!0);const ei=[];return Ie.children.forEach(G=>{if(G.geometry.type==="CylinderGeometry"){const ve=G.getWorldPosition(new O);ei.push({x:ve.x,z:ve.z,r:.15})}}),ei.push({x:ze,z:et,r:.9}),{colliders:p,update:Sn,obstacles:ei}}function uf(i,{heightTex:e,ext:t,grid:n,quality:s,sunDir:r,colors:o,level:a=.05,size:l=220,center:c=[0,0],maxDepth:u=100}){const h=Mi.merge([Xe.fog,{uTime:{value:0},uHeight:{value:e},uExt:{value:t},uGrid:{value:n},uLevel:{value:a},uMaxDepth:{value:u},uShallow:{value:new Re(o.shallow)},uMid:{value:new Re(o.mid)},uDeep:{value:new Re(o.deep)},uSun:{value:r.clone().normalize()},uCaustic:{value:(s.mobile?.8:1)*o.caustic}}]);h.uHeight.value=e;const d=new en({uniforms:h,transparent:!0,depthWrite:!1,fog:!0,vertexShader:`
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
        float foam = (1.0 - smoothstep(0.0, min(0.06, fw * 2.64), abs(d - edge1))) * mix(0.72, 1.0, brk); // skarp, tynn skumlinje
        foam += (1.0 - smoothstep(0.0, 0.035, d)) * 0.8;
        float edge2 = 0.28 + wave * 0.14;
        foam += (1.0 - smoothstep(0.0, min(0.06, fw * 2.4), abs(d - edge2))) * brk * smoothstep(0.002, 0.01, fw);
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
      }`}),p=l<50?8:s.mobile?40:64,g=new ci(l,l,p,p);g.rotateX(-Math.PI/2);const _=new ot(g,d);return _.position.set(c[0],a,c[1]),_.renderOrder=2,i.add(_),{mesh:_,update(m){h.uTime.value=m}}}function hf(i,e){const t=new Va(Float32Array.from(i),e,e,Oa,Si);return t.magFilter=t.minFilter=An,t.generateMipmaps=!1,t.needsUpdate=!0,t}function Ul(i,e=5){const t=[],n=[],s=new Re,r=new Re;for(let a=0;a<e;a++){const l=i()*Math.PI*2,c=i()*.16,u=.28+i()*.3,h=.04+i()*.03,d=Math.cos(l)*c,p=Math.sin(l)*c,g=(i()-.5)*.25,_=i()*Math.PI,m=Math.cos(_)*h,f=Math.sin(_)*h;t.push(d-m,0,p-f,d+m,0,p+f,d+Math.cos(l)*g,u,p+Math.sin(l)*g),s.setRGB(.72,.72,.72),r.setRGB(1.2,1.22,1.12),n.push(s.r,s.g,s.b,s.r,s.g,s.b,r.r,r.g,r.b)}const o=new Lt;return o.setAttribute("position",new st(t,3)),o.setAttribute("color",new st(n,3)),o.setAttribute("normal",new st(new Array(t.length/3).fill(0).flatMap(()=>[0,1,0]),3)),o}function y_(){const i=[];for(let o=0;o<3;o++){const a=new Zn(.07,6,3);a.scale(1,.25,1.15);const l=o*2.094;a.translate(Math.cos(l)*.065,.05,Math.sin(l)*.065),i.push(a.toNonIndexed())}const e=i.reduce((o,a)=>o+a.attributes.position.count,0),t=new Float32Array(e*3),n=new Float32Array(e*3);let s=0;for(const o of i)t.set(o.attributes.position.array,s*3),n.set(o.attributes.normal.array,s*3),s+=o.attributes.position.count;const r=new Lt;return r.setAttribute("position",new Ut(t,3)),r.setAttribute("normal",new Ut(n,3)),r}function b_(i,e,t,n,s){const{heightAt:r,pathDist:o,plinths:a}=e,l=e.lighthouse.pos,c={uTime:{value:0}},h=(A=>(A.onBeforeCompile=k=>{k.uniforms.uTime=c.uTime,k.vertexShader=k.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          #ifdef USE_INSTANCING
            vec2 ip = instanceMatrix[3].xz;
          #else
            vec2 ip = vec2(0.0);
          #endif
          float sway = sin(uTime * 1.8 + ip.x * 0.35 + ip.y * 0.27) * 0.6 + sin(uTime * 3.1 + ip.x * 1.3) * 0.25;
          transformed.x += sway * transformed.y * 0.22;
          transformed.z += cos(uTime * 1.5 + ip.y * 0.4) * transformed.y * 0.12;`),k.fragmentShader=k.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
  normal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);`)},A))(new Gt({vertexColors:!0,side:an})),d=new Gt({color:"#ffffff"}),p=[Ul(s,7),Ul(s,8),Ul(s,6)],g=y_(),_={tak:{grass:["#6cae48","#a2d05e"],density:.45,clover:.08,cloverCol:["#4f9c3e","#6cb850"]},vinter:{grass:["#9a9a7a","#c8c4a0"],density:.18,clover:0,cloverCol:["#fff","#fff"]},vulkan:{grass:["#4a5a30","#6a7a3a"],density:.35,clover:0,cloverCol:["#fff","#fff"]}}[n.id],m=(t.mobile?.45:1)*_.density,f=13,M=8,b=Math.round(720*m),x=[],R=new Vt,S=new Re,T=new Re(_.grass[0]),C=new Re(_.grass[1]),y=(A,k,L)=>{if(L<.72)return!1;const U=o(A,k);if(U<1||U<1.7&&s()<.6||Math.hypot(A-l.x,k-l.z)<4.3||n.volcano&&Math.hypot(A-n.volcano.x,k-n.volcano.z)<n.volcano.r*.7)return!1;for(const X of a)if((X.x-A)**2+(X.z-k)**2<2.6)return!1;return!e.extrasBlock||!e.extrasBlock(A,k)};for(let A=0;A<M;A++)for(let k=0;k<M;k++){const L=-M*f/2+A*f,U=-M*f/2+k*f;for(const[X,B]of[[0,b*.4],[1,b*.35],[2,b*.25]]){const z=[];for(let j=0;j<B*3&&z.length<B;j++){const Q=L+s()*f,se=U+s()*f,_e=r(Q,se);y(Q,se,_e)&&z.push([Q,se,_e])}if(!z.length)continue;const I=new pn(p[X],h,z.length);I.userData.tier=X,z.forEach(([j,Q,se],_e)=>{R.position.set(j,se-.04,Q),R.rotation.set(0,s()*6.28,0),R.scale.setScalar(.8+s()*.7),R.updateMatrix(),I.setMatrixAt(_e,R.matrix),I.setColorAt(_e,S.copy(T).lerp(C,s()).multiplyScalar(e.shadeAt?e.shadeAt(j,Q):1))}),I.receiveShadow=!0,I.computeBoundingSphere(),i.add(I),x.push(I)}if(_.clover>0){const X=[],B=L+s()*f,z=U+s()*f;for(let I=0;I<b*_.clover*3&&X.length<b*_.clover;I++){const j=B+(s()-.5)*6,Q=z+(s()-.5)*6,se=r(j,Q);y(j,Q,se)&&X.push([j,Q,se])}if(X.length){const I=new pn(g,d,X.length),j=new Re(_.cloverCol[0]),Q=new Re(_.cloverCol[1]);X.forEach(([se,_e,qe],V)=>{R.position.set(se,qe-.02,_e),R.rotation.set(0,s()*6.28,0),R.scale.setScalar(.8+s()*.8),R.updateMatrix(),I.setMatrixAt(V,R.matrix),I.setColorAt(V,S.copy(j).lerp(Q,s()).multiplyScalar(e.shadeAt?e.shadeAt(se,_e):1))}),I.receiveShadow=!0,I.userData.tier=1,I.computeBoundingSphere(),i.add(I),x.push(I)}}}return{update(A){c.uTime.value=A},setLevel:A=>x.forEach(k=>{k.visible=A==="high"||k.userData.tier===0,k.receiveShadow=A==="high"}),count:x.reduce((A,k)=>A+k.count,0)}}function ff(i,{arms:e=4,rStart:t=56,rEnd:n=4.2,turns:s=.7,a0:r=.35,steps:o=16}={}){const a=[];for(let l=0;l<e;l++){const c=r+l/e*Math.PI*2,u=[];for(let h=0;h<=o;h++){const d=h/o,p=t*(1-d)+n*d,g=c+d*s*Math.PI*2;u.push([i[0]+Math.cos(g)*p,i[1]+Math.sin(g)*p])}a.push(u)}return a}const S_={xc:i=>3*Math.sin(i*.06),w:4.2,bridgeZ:-20,top:50,wall:27},w_=[[[-15,56],[-17,40],[-13,24],[-17,8],[-14,-6],[-12,-18],[-11,-26],[-10,-33],[-10,-38.4]],[[17,56],[19,40],[15,24],[18,8],[15,-6],[12,-16],[5,-20],[-2,-20.5],[-8,-22],[-11,-26],[-10,-33],[-10,-38.4]]],E_=[90,210,330].map(i=>i*Math.PI/180),Sa=11,T_=()=>{const i=[];for(let t=0;t<=48;t++){const n=t/48*Math.PI*2;i.push([Math.cos(n)*Sa,Math.sin(n)*Sa])}const e=E_.map(t=>[Sa,20,30,40,50].map((n,s)=>{const r=t+Math.sin(n*.25+s)*.04;return[Math.cos(r)*n,Math.sin(r)*n]}));return[i,...e]},Ks=[{id:"tak",name:"Tåkeøya",blurb:"Palmer, turkis lagune og en joint som har glødd i hundre år.",seed:1,radius:46,edgeAmp:[4.5,2.6,1.5],lighthouse:[0,0],paths:ff([0,0]),plateausAuto:[{r:6.5,h:4.2},{r:5.5,h:3.4},{r:5,h:3}],waterfall:{poolR:1.9,basinR:2.7},palette:{sand:"#d8bb88",grass:"#8cc752",grass2:"#70ae45",path:"#d4b98a",deep:"#cdb987",pathMix:.35},water:{shallow:"#a6e6cc",mid:"#45c2ae",deep:"#1f9aa2",caustic:1},sky:{fog:"#c4d8dc",hemiSky:"#dce9ff",hemiGround:"#5a6650",hemi:1.35,sun:"#ffeccc",sunI:2.25,exposure:.92,sunDir:[14,30,10],lantern:.9,grade:{tint:[1.02,1,.965],lift:[.008,.02,.035],sat:.92,vignette:.2}},skyDusk:{fog:"#d9a48e",hemiSky:"#ffd6b0",hemiGround:"#5a4a72",hemi:1.35,sun:"#ffb27a",sunI:2.7,exposure:1.05,sunDir:[24,17,4],grade:{tint:[1.07,1,.9],lift:[.025,.008,.03],sat:1.1,vignette:.3}},trees:{beach:{palm:.75,bush:.25},inland:{palm:.25,round:.45,bush:.3},leaf:["#a2cc5c","#357238"]},rock:["#b6bab8","#7f9f52"],life:["fireflies","butterflies","birds","leaves"],balance:{hp:1.3,count:1.25,speed:1,air:.5,types:{clerk:{hp:.7},complainer:{hp:.7},tank:{hp:.65},gull:{hp:.75}},extra:null},intro:{complainer:2,drone:3,lobbyist:5,heli:6,auditor:7,balloon:8}},{id:"vinter",name:"Vinterfjorden",blurb:"Snø, nordlys og isflak. Forbudsdirektoratet har kledd seg varmt.",seed:2,radius:47,edgeAmp:[3.5,3.2,2.2],lighthouse:[-10,-42.5],paths:w_,shape:"fjord",fjord:S_,nes:{x:-10,z0:-20,z1:-45,r:6.5},dockTheta:-1.2,icy:!0,palette:{sand:"#b9bec4",grass:"#f1f5fa",grass2:"#dfe8f2",path:"#c2ccd8",deep:"#9aa8b4",ripple:.4},water:{shallow:"#b8e2ee",mid:"#5a9cc0",deep:"#1d3f66",caustic:.55},sky:{fog:"#2a3550",hemiSky:"#9fb8ff",hemiGround:"#1c2440",hemi:1.1,sun:"#b8ccff",sunI:1.5,exposure:1.15,sunDir:[-12,26,8],grade:{tint:[.96,1,1.06],lift:[0,.01,.03],sat:1.05,vignette:.32}},trees:{beach:{pine:.6,bush:.4},inland:{pine:.8,bush:.2},leaf:["#e8f0f8","#2c5a44"]},rock:["#a9b2bc","#eef4fa"],life:["snow","aurora","icefloes"],balance:{hp:1.5,count:1.2,speed:.97,types:{tank:{hp:.95},clerk:{hp:1},lobbyMini:{hp:.9}},extra:{type:"tank",n:1,gap:4,path:"both",from:3}},intro:{balloon:3,auditor:4,lobbyist:5,drone:5,heli:6,complainer:6}},{id:"vulkan",name:"Vulkanøya",blurb:"Svart sand, lava-elver og glødende stein. Her trenger ingen fyrstikker.",seed:3,radius:48,edgeAmp:[3.5,2.2,1.6],lighthouse:[0,0],dockTheta:.5,paths:ff([0,0],{arms:3,rStart:56,rEnd:4.4,turns:.75,a0:Math.PI/6,steps:24}),lava:T_(),moat:Sa,eruption:{every:60,closed:10},fog:[38,100],palette:{sand:"#3a3533",grass:"#5a6a3c",grass2:"#3f4c2e",path:"#3e3b3a",deep:"#2c2826",pathMix:.15},water:{shallow:"#5a8f90",mid:"#2c5a63",deep:"#122b35",caustic:.4},sky:{fog:"#4a2c2a",hemiSky:"#ff9a6a",hemiGround:"#2a1a1a",hemi:1.15,sun:"#ff7a40",sunI:2.3,exposure:1.1,sunDir:[20,20,6],grade:{tint:[1.05,.98,.94],lift:[.02,0,0],sat:1.08,vignette:.32}},trees:{beach:{dead:.5,bush:.5},inland:{dead:.45,palm:.2,bush:.35},leaf:["#7a9a4a","#2f4a2a"]},rock:["#2e2a2a","#5a3a2a"],life:["ash","embers"],balance:{hp:1.25,count:1.1,speed:1,air:.6,types:{lobbyist:{hp:.6},lobbyMini:{hp:.6},clerk:{hp:.72},complainer:{hp:.72},gull:{hp:.75},drone:{hp:.8}},extra:{type:"gull",n:1,gap:1.4,from:3}},intro:{complainer:2,drone:2,lobbyist:3,heli:4,auditor:5,balloon:7}}];function A_(i){const[e,t,n]=i.edgeAmp,s=i.seed;return r=>i.radius+e*Math.sin(3*r+.4*s)+t*Math.sin(7*r+1.3*s)+n*Math.sin(11*r+s)}const df={clerk:["complainer","lobbyist"],swarm:["complainer"],tank:["auditor","lobbyist"],gull:["drone","heli","balloon"]},zl={clerk:22,swarm:7,tank:95,gull:16,complainer:17,lobbyist:97,auditor:112,drone:9,heli:62,balloon:150},Nl={complainer:.6,lobbyist:1.8,auditor:2.2,drone:.4,heli:2.4,balloon:3.5};function C_(i,e){let t=i.seed*9301+49297;const n=()=>(t=(t*9301+49297)%233280)/233280,s=i.intro||{};return e.map((r,o)=>{const a=o+1,l=r.map(d=>({...d})),c=i.balance.extra;c&&a>=c.from&&l.push({...c,n:c.n+Math.floor((a-c.from)/2),at:5});const u=(d,p,g)=>Math.max(1,Math.round(d*Math.min(1,zl[p]/zl[g]))),h=(d,p)=>{d.n=u(d.n,d.type,p),d.gap=Nl[p]??d.gap,d.type=p};for(const[d,p]of Object.entries(s)){if(p!==a)continue;const g=l.find(_=>{var m;return(m=df[_.type])==null?void 0:m.includes(d)});if(g&&g.n>=2){const _=Math.floor(g.n/2);l.push({...g,type:d,n:u(_,g.type,d),gap:Nl[d]??g.gap,at:(g.at??0)+2}),g.n-=_}else g?h(g,d):l.push({type:d,n:Math.max(1,Math.min(3,Math.round(44/zl[d]))),gap:Nl[d],path:0,at:6})}for(const d of l){const p=(df[d.type]||[]).filter(g=>s[g]&&s[g]<a);p.length&&n()<.45&&h(d,p[Math.floor(n()*p.length)])}return l})}function yo(){try{return Math.max(1,Math.min(Ks.length,Number(localStorage.getItem("glod-unlocked"))||1))}catch{return 1}}function R_(i){try{i+2>yo()&&localStorage.setItem("glod-unlocked",String(Math.min(Ks.length,i+2)))}catch{}}function aa(i,e,{color:t,size:n,speed:s,drift:r,additive:o,area:a=46,top:l=22}){const c=new Float32Array(e*3),u=new Float32Array(e);for(let f=0;f<e;f++)c[f*3]=(Math.random()-.5)*a*2,c[f*3+1]=Math.random()*l,c[f*3+2]=(Math.random()-.5)*a*2,u[f]=Math.random()*6.28;const h=new Lt;h.setAttribute("position",new Ut(c,3));const d=document.createElement("canvas");d.width=d.height=32;const p=d.getContext("2d"),g=p.createRadialGradient(16,16,0,16,16,16);g.addColorStop(0,"rgba(255,255,255,1)"),g.addColorStop(1,"rgba(255,255,255,0)"),p.fillStyle=g,p.fillRect(0,0,32,32);const _=new Eo({color:t,size:n,map:new ai(d),transparent:!0,depthWrite:!1,blending:o?li:fs,opacity:o?1:.85}),m=new Ha(h,_);return m.frustumCulled=!1,i.add(m),(f,M,b)=>{for(let x=0;x<e;x++){let R=c[x*3+1]-s*f*(.7+u[x]%1*.6);c[x*3]+=Math.sin(b*.7+u[x])*r*f,(s<0?R>l:R<0)&&(R=s<0?0:l,c[x*3]=M.x+(Math.random()-.5)*a*2,c[x*3+2]=M.z+(Math.random()-.5)*a*2),c[x*3+1]=R}h.attributes.position.needsUpdate=!0}}function P_(i,e,t,n,s=160){const r=new Wa(i.map(([h,d])=>new O(h,0,d))),o=r.getLength(),a=[],l=[],c=[];for(let h=0;h<=s;h++){const d=h/s,p=r.getPointAt(d),g=r.getTangentAt(d),_=-g.z,m=g.x,f=e*(.75+.25*Math.sin(d*9));for(const M of[-1,1]){const b=p.x+_*f*M,x=p.z+m*f*M;a.push(b,t(b,x)+n,x),l.push(d*o,(M+1)/2)}if(h<s){const M=h*2;c.push(M,M+1,M+2,M+1,M+3,M+2)}}const u=new Lt;return u.setAttribute("position",new st(a,3)),u.setAttribute("uv",new st(l,2)),u.setIndex(c),u.computeVertexNormals(),{geo:u,curve:r,len:o}}function L_(i,e,t,n){var m;const{heightAt:s,landDist:r}=e,o=[],a=[],l=[],c=[],u=[],h=t.mobile?.5:1,d=new Set(n.life);if(d.has("aurora")){const f=new en({transparent:!0,depthWrite:!1,blending:li,side:an,fog:!1,uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const[M,b,x]of[[0,-66,0],[-62,-20,Math.PI/2.4],[62,-24,-Math.PI/2.4]]){const R=new ot(new ci(150,26,96,1),f);R.position.set(M,20,b),R.rotation.y=x,i.add(R)}a.push((M,b,x)=>f.uniforms.uTime.value=x)}if(d.has("snow")&&a.push(aa(i,Math.round(900*h),{color:"#ffffff",size:.28,speed:2.2,drift:.8})),d.has("ash")&&a.push(aa(i,Math.round(500*h),{color:"#6a625e",size:.22,speed:1.2,drift:.6})),d.has("embers")&&a.push(aa(i,Math.round(160*h),{color:"#ff8a3a",size:.25,speed:-1.6,drift:1.2,additive:!0,top:10})),d.has("icefloes")){const f=[];for(let S=0;S<6e3&&f.length<70*h;S++){const T=(Math.random()-.5)*120,C=(Math.random()-.5)*120,y=.05-s(T,C);if(!(y>.15&&y<1.4)||!f.every(L=>Math.hypot(L.x-T,L.z-C)>2.2))continue;const v=r(T,C)>2?.45+Math.random()*.25:.6+Math.random()*1.1,A=v*1.1+.45;let k=!0;for(let L=0;L<8&&k;L++)k=s(T+Math.cos(L*.785)*A,C+Math.sin(L*.785)*A)<.02;k&&f.push({x:T,z:C,s:v,r:Math.random()*6})}const M=new Ft(1,.9,.18,7),b=M.attributes.position;for(let S=0;S<b.count;S++){const T=Math.atan2(b.getZ(S),b.getX(S)),C=.75+.35*Math.abs(Math.sin(T*2.3+S));b.setX(S,b.getX(S)*C),b.setZ(S,b.getZ(S)*C)}M.computeVertexNormals();const x=new pn(M,new Gt({color:"#eaf6ff"}),Math.max(1,f.length));x.count=f.length,x.receiveShadow=!0,i.add(x);const R=new Vt;a.push((S,T,C)=>{f.forEach((y,v)=>{R.position.set(y.x+Math.sin(C*.1+y.r)*.4,.08+Math.sin(C*1.1+y.r)*.03,y.z),R.rotation.set(Math.sin(C*.9+y.r)*.03,y.r+C*.02,Math.cos(C*.8+y.r)*.03),R.scale.set(y.s,1,y.s),R.updateMatrix(),x.setMatrixAt(v,R.matrix)}),x.instanceMatrix.needsUpdate=!0})}if(n.lava){const f=new en({uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const R of n.lava){const S=P_(R,1.25,s,.07);i.add(new ot(S.geo,f));const T=[];let C=!1;for(let y=0;y<=1;y+=1.4/S.len){const v=S.curve.getPointAt(Math.min(1,y));if(e.pathDist(v.x,v.z)<2.4){C||u.push({x:v.x,z:v.z,tan:S.curve.getTangentAt(Math.min(1,y))}),C=!0;continue}C=!1,l.push({x:v.x,z:v.z,r:1.4})}for(const y of[.25,.7]){const v=S.curve.getPointAt(y),A=new Mo("#ff6a2a",14,12,1.6);A.position.set(v.x,s(v.x,v.z)+1.2,v.z),i.add(A),T.push(A)}a.push((y,v,A)=>T.forEach((k,L)=>k.intensity=12+3*Math.sin(A*2.3+L)))}a.push((R,S,T)=>f.uniforms.uTime.value=T);const M=new Vn(3.4,.35,4.2),b=new Gt({color:((m=n.rock)==null?void 0:m[0])??"#555"}),x=new Ft(2.4,2.4,.1,18);for(const R of u){const S=s(R.x,R.z)+.12,T=new ot(M,b);T.position.set(R.x,S,R.z),T.rotation.y=-Math.atan2(R.tan.z,R.tan.x),T.castShadow=T.receiveShadow=!0,i.add(T);const C=new ot(x,new Rt({color:new Re("#ff5a1a").multiplyScalar(2.2),transparent:!0,opacity:0}));C.position.set(R.x,S+.25,R.z),C.visible=!1,i.add(C);const y=new Mo("#ff6a2a",0,14,1.6);y.position.set(R.x,S+1.6,R.z),i.add(y);let v=!1;c.push({x:R.x,z:R.z,get closed(){return v},setClosed(A){v=A,C.visible=A}}),a.push((A,k,L)=>{const U=v?1:0;C.material.opacity+=(U*.9-C.material.opacity)*Math.min(1,A*3),!v&&C.material.opacity<.02&&(C.visible=!1),y.intensity=C.material.opacity*(22+6*Math.sin(L*9))})}}if(n.volcano){const f=n.volcano;l.push({x:f.x,z:f.z,r:f.r*.55});const M=new ot(new Hs(f.r*.22,20),new Rt({color:new Re("#ff5a1a").multiplyScalar(2.4)}));M.rotation.x=-Math.PI/2,M.position.set(f.x,s(f.x,f.z)+.2,f.z),i.add(M);const b=new qa(.35,0),x=[];for(let T=0;T<3e3&&x.length<50*h;T++){const C=(Math.random()-.5)*96,y=(Math.random()-.5)*96,v=s(C,y);v>.4&&e.pathDist(C,y)>2.2&&x.push({x:C,z:y,h:v,s:.5+Math.random()})}const R=new pn(b,new Rt({color:new Re("#ff7a2a").multiplyScalar(1.8)}),Math.max(1,x.length));R.count=x.length;const S=new Vt;x.forEach((T,C)=>{S.position.set(T.x,T.h,T.z),S.rotation.set(T.s,T.s*3,0),S.scale.set(T.s,T.s*.5,T.s),S.updateMatrix(),R.setMatrixAt(C,S.matrix)}),i.add(R)}if(n.waterfall&&n.waterfall._lvl!==void 0){const f=n.waterfall,M=f.basin[0]-f.lip[0],b=f.basin[1]-f.lip[1],x=Math.hypot(M,b),R=M/x,S=b/x,T=f._lvl-.1,C=14,y=1.25,v=[],A=[],k=[];for(let Q=0;Q<=C;Q++){const se=Q/C,_e=.35+1.5*se*se,qe=T-(T-.06)*(se*se*.6+se*.4);for(const V of[-1,1])v.push(f.lip[0]+R*_e-S*y*V*(.85+se*.3),qe,f.lip[1]+S*_e+R*y*V*(.85+se*.3)),A.push((V+1)/2,se);if(Q<C){const V=Q*2;k.push(V,V+1,V+2,V+1,V+3,V+2)}}const L=new Lt;L.setAttribute("position",new st(v,3)),L.setAttribute("uv",new st(A,2)),L.setIndex(k);const U=new en({transparent:!0,depthWrite:!1,side:an,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform float uTime; varying vec2 vUv;
        float h(float x) { return fract(sin(x * 127.1) * 43758.5); }
        void main() {
          float col = floor(vUv.x * 18.0);
          float streak = fract(vUv.y * (1.6 + h(col) * 1.2) - uTime * (1.4 + h(col + 3.0) * 0.8));
          float s = smoothstep(0.0, 0.25, streak) * (1.0 - smoothstep(0.55, 1.0, streak));
          float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
          vec3 c = mix(vec3(0.45, 0.85, 0.88), vec3(1.0), s * 0.8 + vUv.y * 0.3);
          gl_FragColor = vec4(c, (0.55 + 0.4 * s) * edge);
        }`});i.add(new ot(L,U));const X=(()=>{const Q=document.createElement("canvas");Q.width=Q.height=128;const se=Q.getContext("2d"),_e=(()=>{let V=9;return()=>(V=V*16807%2147483647)/2147483647})();for(let V=0;V<260;V++){const te=_e()*Math.PI*2,ae=Math.pow(_e(),.7)*58,le=1.5+_e()*5*(1-ae/70);se.fillStyle=`rgba(255,255,255,${.55+_e()*.45})`,se.beginPath(),se.arc(64+Math.cos(te)*ae,64+Math.sin(te)*ae,le,0,Math.PI*2),se.fill()}se.globalCompositeOperation="destination-in";const qe=se.createRadialGradient(64,64,8,64,64,63);return qe.addColorStop(0,"rgba(0,0,0,1)"),qe.addColorStop(.6,"rgba(0,0,0,0.85)"),qe.addColorStop(1,"rgba(0,0,0,0)"),se.fillStyle=qe,se.fillRect(0,0,128,128),new ai(Q)})(),B=new ot(new Hs(1.5,20),new Rt({map:X,color:"#ffffff",transparent:!0,opacity:.9,depthWrite:!1}));B.rotation.x=-Math.PI/2;const z=f.lip[0]+R*1.9,I=f.lip[1]+S*1.9;B.position.set(z,.1,I),i.add(B);const j=aa(i,Math.round(60*h),{color:"#ffffff",size:.35,speed:-.9,drift:.6,area:1.4,top:2.2});a.push((Q,se,_e)=>{U.uniforms.uTime.value=_e,B.scale.setScalar(1+Math.sin(_e*5)*.06),B.rotation.z=_e*.4,B.material.opacity=.8+.12*Math.sin(_e*7),j(Q,{x:z,z:I},_e)}),l.push({x:z,z:I,r:.9})}const p=(f,M)=>l.some(b=>(b.x-f)**2+(b.z-M)**2<b.r*b.r);let g=0;return{colliders:o,update:(f,M=e.lighthouse.pos)=>{const b=Math.min(.05,Math.max(0,f-g));g=f;for(const x of a)x(b,M,f)},blocks:p,blockers:l,bridges:c}}const ht=(i,e={})=>new Gt({color:i,flatShading:!0,...e}),mr=(i,e)=>new Rt({color:new Re(i).multiplyScalar(e)}),fe={coat:ht("#f2c23c"),coatDark:ht("#c99a22"),skin:ht("#f1c7a0"),beanieG:ht("#3f8f4a"),beanieY:ht("#f2c94c"),beanieR:ht("#d4553a"),boot:ht("#3a2c22"),eyeW:new Rt({color:"#ffffff"}),eyeB:new Rt({color:"#1c1820"}),suit:ht("#6b6f78"),suitDark:ht("#3c4150"),suitNavy:ht("#2c3a5c"),shirt:ht("#f4f1ea"),tie:ht("#b8322a"),paper:ht("#fbfaf4"),stampInk:ht("#a8233a"),woodLight:ht("#c49360"),glasses:ht("#222428"),binderR:ht("#c94f3f"),binderB:ht("#3f6fc9"),binderY:ht("#e6b93f"),gull:ht("#f4f2ee"),gullWing:ht("#c4ccd4"),gullTip:ht("#2e3038"),gullBand:ht("#8e98a4"),beak:ht("#f0a43a"),megaRed:ht("#d8453a"),mouth:new Rt({color:"#4a2a2a"}),smile:new Rt({color:"#c8485a"}),wood:ht("#9a6a42"),woodDark:ht("#6e4a2c"),iron:ht("#55585e"),speaker:ht("#2a2a30"),cone:ht("#4a4a52"),rasG:ht("#3f9a4a"),rasY:ht("#f2c94c"),rasR:ht("#d4553a"),chipsBag:ht("#f2b632"),chipsRed:ht("#d8453a"),chip:ht("#f0c860"),ringMat:new Gt({color:"#f1efe9",transparent:!0,opacity:.8}),ember:mr("#ff9a3a",2.4),emberCore:mr("#fff1c2",2),rolling:ht("#5a9a5a"),rollingPaper:ht("#fffdf5"),lantern:mr("#ffd27a",2.2),hpBg:new Rt({color:"#2a2020",depthTest:!1,transparent:!0,opacity:.6}),hpFg:new Rt({color:"#d8553a",depthTest:!1}),levelPip:mr("#9fffb0",1.6),bottle:new Gt({color:"#7fd6ff",transparent:!0,opacity:.8}),bubble:new Gt({color:"#dff6ff",transparent:!0,opacity:.45,emissive:"#5a7a9a"}),kiteSail:new Gt({color:"#ff7a5a",side:an}),rope:ht("#d9c8a0"),ledger:ht("#2f5a3a"),track:ht("#8a4ac8"),briefcase:ht("#6a3a1a"),brass:ht("#d8b040"),rotor:new Rt({color:"#cfd6dc",transparent:!0,opacity:.45}),redLight:mr("#ff3030",2),balloonA:ht("#e8e4d8"),balloonB:ht("#c8463a"),heli:ht("#f2c23c"),glassDark:ht("#2a3440"),spot:new Rt({color:"#fff6c8",transparent:!0,opacity:.18,blending:li,depthWrite:!1,side:an}),pizza:ht("#e8603a"),pizzaCrust:ht("#e8b866"),lampGlass:new Gt({color:"#ff8a5a",transparent:!0,opacity:.45,emissive:"#6a1a10"}),lampBlob:mr("#ff9a2a",2.2)},xe={sphere:new Zn(1,10,8),lowSphere:new ps(1,1),capsule:new Xa(.5,.7,3,8),cyl:new Ft(1,1,1,10),cone:new Kn(1,1,10),box:new Vn(1,1,1),dome:new Zn(1,10,6,0,Math.PI*2,0,Math.PI/2),ember:new Ir(.22,0),leaf:new Ir(.3,0),plane:new ci(1,1),smileArc:new zs(.06,.018,4,10,Math.PI),ring:new zs(.32,.12,6,14),bubbleRing:new zs(.18,.025,4,12)};function Me(i,e,t,n,s,r=0,o=0,a=0,l=!0){const c=new ot(i,e);return c.scale.set(t,n,s),c.position.set(r,o,a),c.castShadow=l,c}function Cu(i,e,t,n,s=.12,r=.18){const o=new Mt;o.position.set(e,t,n),o.userData.isEyes=!0;for(const a of[-1,1])o.add(Me(xe.sphere,fe.eyeW,s,s,s,a*r,0,0,!1)),o.add(Me(xe.sphere,fe.eyeB,s*.55,s*.55,s*.55,a*r,.01,-s*.7,!1));return i.add(o),o}const Ld=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,31);return t.addColorStop(0,"rgba(0,0,0,0.55)"),t.addColorStop(.6,"rgba(0,0,0,0.25)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new ai(i)})(),D_=new Rt({map:Ld,transparent:!0,depthWrite:!1,fog:!1}),Dd=new ci(1,1).rotateX(-Math.PI/2);function Ru(i,e){const t=new ot(Dd,D_);t.scale.set(e*2,1,e*2),t.position.y=.04,t.renderOrder=1,i.add(t),i.userData.blob=t}function I_(i,e,t=.8){const n=new Rt({map:Ld,color:"#000000",transparent:!0,opacity:t,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),s=new pn(Dd,n,Math.max(1,e.length));s.count=e.length;const r=new Vt;return e.forEach((o,a)=>{r.position.set(o.x,o.y+.04,o.z),r.scale.set(o.r*2,1,o.r*2),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.renderOrder=1,i.add(s),s}function Id(i){const e=[];i.traverse(t=>{t.userData.isEyes&&e.push(t)}),i.userData.eyes=e}function Ud(i,e,t,n=1){const s=Me(xe.box,fe.mouth,.14*n,.025*n,.02,0,e,t,!1);s.rotation.z=.15;const r=Me(xe.smileArc,fe.smile,n,n,n,0,e+.03*n,t,!1);return r.rotation.z=Math.PI,r.visible=!1,i.add(s,r),{sour:s,smile:r}}const U_=(()=>{const i=new Ft(.07,.05,.55,8);return i.rotateZ(Math.PI/2),i})();function zd(){const i=new Mt,e=Me(xe.box,fe.rollingPaper,.55,.012,.26,0,0,0,!1),t=Me(xe.lowSphere,fe.rasG,.22,.06,.07,0,.03,0,!1),n=new ot(U_,fe.rollingPaper),s=Me(xe.cone,fe.rollingPaper,.05,.1,.05,.32,0,0,!1);return s.rotation.z=-Math.PI/2,n.add(s),i.add(e,t,n),i.userData={paper:e,herb:t,joint:n,tip:s},Pu(i,0),i}function Pu(i,e){const{paper:t,herb:n,joint:s,tip:r}=i.userData,o=bt.smoothstep,a=o(e,.08,.45),l=o(e,.5,.85);t.visible=l<.98,t.scale.set(.55,.012,.26*(1-.7*l)),n.visible=a>.01&&l<.98,n.scale.set(.22*a+.001,.06*a+.001,.07*(1-.5*l)+.001),s.visible=l>.02,s.scale.set(1,.35+.65*l,.35+.65*l),r.visible=e>.88}function Nd(){const i=new Mt,e=new Mt;i.add(e),e.add(Me(xe.capsule,fe.coat,.75,.75,.7,0,.75,0)),e.add(Me(xe.cyl,fe.coatDark,.4,.06,.38,0,.62,0));const t=new Mt;t.position.y=1.62,t.scale.setScalar(1.22),t.add(Me(xe.sphere,fe.skin,.33,.32,.32)),t.add(Me(xe.cyl,fe.beanieG,.35,.1,.35,0,.14,0)),t.add(Me(xe.cyl,fe.beanieY,.31,.1,.31,0,.24,0)),t.add(Me(xe.dome,fe.beanieR,.27,.22,.27,0,.29,0)),t.add(Me(xe.sphere,fe.beanieY,.08,.08,.08,0,.52,0)),Cu(t,0,.02,-.26,.07,.12);const n=Ud(t,-.12,-.3,.8);n.sour.visible=!1,n.smile.visible=!0,e.add(t);const s=[-1,1].map(h=>{const d=Me(xe.capsule,fe.boot,.24,.32,.24,h*.18,.2,0);return e.add(d),d}),r=new Mt;r.position.set(.48,1,-.1),r.add(Me(xe.box,fe.iron,.2,.28,.2,0,-.25,0)),r.add(Me(xe.sphere,fe.lantern,.1,.13,.1,0,-.25,0,!1)),e.add(r);const o=new Mt;o.position.set(-.46,1.08,0),o.add(Me(xe.capsule,fe.coat,.16,.34,.16,0,-.28,0)),o.add(Me(xe.sphere,fe.skin,.1,.1,.1,0,-.52,0)),e.add(o);const a=new Mt;a.add(Me(xe.box,fe.rolling,.7,.12,.42,0,0,0,!1)),a.add(Me(xe.box,fe.rollingPaper,.6,.08,.36,.06,.08,0,!1)),a.add(Me(xe.leaf,fe.rasG,.35,.05,.35,-.12,.07,0,!1)),a.position.y=2.35,a.visible=!1,i.add(a);const l=new Mt;l.position.y=2;for(let h=0;h<3;h++)l.add(Me(xe.ember,fe.emberCore,.6,.6,.6,Math.cos(h*2.1)*.45,0,Math.sin(h*2.1)*.45,!1));l.visible=!1,i.add(l);const c=new Mt;c.position.set(.46,1.08,0),c.add(Me(xe.capsule,fe.coat,.16,.34,.16,0,-.28,0)),c.add(Me(xe.sphere,fe.skin,.1,.1,.1,0,-.52,0)),c.visible=!1,e.add(c);const u=zd();return u.position.set(0,1,-.62),u.scale.setScalar(1.6),u.visible=!1,e.add(u),Ru(i,.62),i.userData={body:e,legs:s,head:t,lanternArm:r,armL:o,armR:c,roll:u,carried:a,stars:l,blob:i.userData.blob},Id(i),i}function Pi(i,e){const t=new Mt;t.position.y=e;const n=new ot(xe.plane,fe.hpBg);n.scale.set(1,.14,1),n.renderOrder=10;const s=new ot(xe.plane,fe.hpFg.clone());s.scale.set(.96,.09,1),s.position.z=.001,s.renderOrder=11,t.add(n,s),t.visible=!1,i.add(t),i.userData.hpBar=t,i.userData.hpFg=s}function gr(i,{scale:e=1,suit:t=fe.suit,wide:n=1}={}){const s=e;i.add(Me(xe.capsule,t,.7*s*n,.62*s,.6*s,0,.72*s,0)),i.add(Me(xe.box,fe.shirt,.22*s,.4*s,.05,0,.98*s,-.27*s*Math.min(n,1.2),!1)),i.add(Me(xe.box,fe.tie,.07*s,.32*s,.05,0,.94*s,-.29*s*Math.min(n,1.2),!1));for(const a of[-1,1])i.add(Me(xe.capsule,fe.suitDark,.2*s,.25*s,.2*s,a*.16*s,.17*s,0));const r=new Mt;r.position.y=1.5*s,r.add(Me(xe.sphere,fe.skin,.3*s,.3*s,.3*s)),r.add(Me(xe.dome,fe.suitDark,.31*s,.14*s,.31*s,0,.12*s,.02)),Cu(r,0,.03*s,-.25*s,.065*s,.11*s);const o=Ud(r,-.12*s,-.28*s,s);return i.add(r),{head:r,mouth:o}}function z_(i){const e=new Mt,t=new Mt;if(e.add(t),e.userData.body=t,i==="clerk"){const{head:n,mouth:s}=gr(t);for(const a of[-1,1])n.add(Me(xe.box,fe.glasses,.11,.07,.02,a*.11,.03,-.3,!1));n.add(Me(xe.box,fe.glasses,.08,.015,.02,0,.04,-.3,!1));const r=new Mt;r.position.set(.48,.9,-.15),r.add(Me(xe.cyl,fe.woodLight,.06,.25,.06,0,.12,0)),r.add(Me(xe.sphere,fe.woodLight,.09,.09,.09,0,.27,0)),r.add(Me(xe.box,fe.stampInk,.22,.08,.16,0,-.02,0)),t.add(r);const o=Me(xe.box,fe.paper,.3,.38,.02,-.46,.92,-.2);o.rotation.y=.4,t.add(o),e.userData.mouth=s,e.userData.arm=r,Pi(e,2.15)}else if(i==="tank"){const{mouth:n}=gr(t,{scale:1.25,suit:fe.suitNavy,wide:1.45}),s=new Mt;s.position.set(0,0,-.95),s.add(Me(xe.box,fe.woodDark,.75,1.05,.45,0,.52,0));const r=Me(xe.box,fe.woodLight,.9,.08,.6,0,1.1,.04);r.rotation.x=.35,s.add(r),s.add(Me(xe.cyl,fe.iron,.02,.45,.02,.18,1.3,.1,!1)),s.add(Me(xe.sphere,fe.speaker,.05,.05,.05,.18,1.52,.04,!1)),t.add(s),e.userData.mouth=n,Pi(e,2.6)}else if(i==="gull"){t.add(Me(xe.lowSphere,fe.gull,.36,.3,.6,0,0,0)),t.add(Me(xe.cone,fe.beak,.08,.3,.08,0,0,-.65).rotateX(-Math.PI/2));const n=Me(xe.cone,fe.megaRed,.2,.5,.2,0,-.22,-.65);n.rotation.x=Math.PI/2,t.add(n),t.add(Me(xe.cyl,fe.paper,.21,.06,.21,0,-.22,-.89).rotateX(Math.PI/2));const s=[-1,1].map(r=>{const o=new Mt;o.position.set(r*.25,.05,0),o.add(Me(xe.box,fe.gullWing,.6,.06,.42,r*.3,0,0)),o.add(Me(xe.box,fe.gullBand,.58,.065,.1,r*.31,0,.17));const a=Me(xe.box,fe.gullTip,.42,.055,.3,r*.78,0,.04);return a.rotation.y=r*.18,o.add(a),t.add(o),o});e.userData.wings=s,Cu(t,0,.12,-.42,.06,.13),e.userData.mouth=null,Pi(e,.8)}else if(i==="swarm"){const{mouth:n}=gr(t,{scale:.6}),s=[fe.binderR,fe.binderB,fe.binderY],r=Me(xe.box,s[Math.floor(Math.random()*3)],.08,.34,.28,.32,.55,-.08);t.add(r),e.userData.mouth=n,Pi(e,1.3)}else if(i==="auditor"){const{head:n,mouth:s}=gr(t,{scale:1.1,suit:fe.suitDark});for(const o of[-1,1])n.add(Me(xe.box,fe.glasses,.12,.08,.02,o*.12,.03,-.33,!1));const r=new Mt;r.position.set(0,.95,-.55),r.add(Me(xe.box,fe.ledger,1.05,1.2,.14)),r.add(Me(xe.box,fe.paper,.95,1.1,.1,0,0,.03,!1)),r.add(Me(xe.box,fe.brass,.3,.3,.02,0,.15,-.08,!1)),t.add(r),e.userData.mouth=s,e.userData.shield=r,Pi(e,2.3)}else if(i==="complainer"){const{head:n,mouth:s}=gr(t,{scale:.85,suit:fe.track});n.add(Me(xe.cyl,fe.rasR,.27,.06,.27,0,.1,0,!1));const r=new Mt;r.position.set(.35,1.2,-.1),r.add(Me(xe.cyl,fe.track,.06,.45,.06,0,.2,0)),r.add(Me(xe.box,fe.paper,.32,.42,.02,0,.55,0)),t.add(r),e.userData.mouth=s,e.userData.arm=r,Pi(e,1.8)}else if(i==="lobbyist"||i==="lobbyMini"){const n=i==="lobbyMini",{mouth:s}=gr(t,{scale:n?.55:1.05,suit:fe.suitNavy});t.add(Me(xe.box,fe.brass,.08,.3,.05,0,n?.52:.99,n?-.17:-.32,!1)),t.add(Me(xe.box,fe.briefcase,n?.28:.5,n?.22:.36,.12,n?.3:.55,n?.3:.55,0)),e.userData.mouth=s,Pi(e,n?1.2:2.1)}else if(i==="drone"){t.add(Me(xe.box,fe.iron,.42,.14,.42));const n=[];for(const[s,r]of[[1,1],[-1,1],[1,-1],[-1,-1]]){t.add(Me(xe.box,fe.speaker,.5,.04,.05,s*.22,0,r*.22).rotateY(s*r>0?Math.PI/4:-Math.PI/4));const o=Me(xe.cyl,fe.rotor,.2,.01,.2,s*.4,.08,r*.4,!1);t.add(o),n.push(o)}t.add(Me(xe.sphere,fe.redLight,.07,.07,.07,0,-.06,-.22,!1)),e.userData.rotors=n,e.userData.mouth=null,Pi(e,.6)}else if(i==="balloon"){t.add(Me(xe.sphere,fe.balloonA,1.1,1.3,1.1,0,1.6,0));for(let n=0;n<4;n++)t.add(Me(xe.cyl,fe.balloonB,1.12-Math.abs(n-1.5)*.18,.18,1.12-Math.abs(n-1.5)*.18,0,1+n*.42,0,!1));t.add(Me(xe.box,fe.woodLight,.6,.4,.6,0,-.1,0)),t.add(Me(xe.sphere,fe.skin,.2,.2,.2,0,.25,0)),t.add(Me(xe.dome,fe.suitDark,.21,.1,.21,0,.32,0,!1));for(const[n,s]of[[1,1],[-1,1],[1,-1],[-1,-1]])t.add(Me(xe.cyl,fe.rope,.015,.8,.015,n*.28,.45,s*.28,!1));e.userData.mouth=null,Pi(e,3.3)}else if(i==="heli"){t.add(Me(xe.capsule,fe.heli,.6,.55,.9,0,0,0).rotateX(Math.PI/2)),t.add(Me(xe.sphere,fe.glassDark,.28,.22,.24,0,.05,-.38,!1)),t.add(Me(xe.box,fe.heli,.12,.12,1.1,0,.05,.85));const n=Me(xe.box,fe.speaker,1.9,.02,.12,0,.4,0,!1),s=Me(xe.box,fe.speaker,.04,.5,.08,.08,.1,1.38,!1);t.add(n,s);const r=new ot(new Kn(1.2,4.5,14,1,!0),fe.spot);r.position.set(0,-2.3,-.2),r.visible=!1,t.add(r),e.userData.rotor=n,e.userData.tail=s,e.userData.beam=r,e.userData.mouth=null,Pi(e,1)}return Ru(e,{tank:.85,auditor:.7,balloon:.9,heli:.6,swarm:.35,lobbyMini:.35,drone:.35,gull:.45}[i]??.55),Id(e),e}function N_(i){const e=i.mesh.userData.mouth;e&&(e.sour.visible=!1,e.smile.visible=!0),i.mesh.userData.hpBar.visible=!1}function k_(i){const e=new Mt,t=new Mt;if(e.add(t),i==="ring"){e.add(Me(xe.box,fe.wood,.9,.5,.9,0,.25,0)),t.position.y=.95;const o=Me(xe.cyl,fe.iron,.32,1.1,.32,0,0,-.15);o.rotation.x=Math.PI/2-.15,t.add(o),t.add(Me(xe.cyl,fe.woodDark,.38,.12,.38,0,.08,-.7).rotateX(Math.PI/2-.15)),t.add(Me(xe.sphere,fe.iron,.42,.42,.42,0,0,.42)),t.add(Me(xe.sphere,fe.ember,.12,.12,.12,0,.1,.8,!1))}else if(i==="chips"){e.add(Me(xe.cyl,fe.iron,.7,.3,.7,0,.15,0)),t.position.y=.3;const o=Me(xe.box,fe.chipsBag,.95,1.1,.6,0,.6,0);o.rotation.x=-.35,t.add(o),t.add(Me(xe.box,fe.chipsRed,.97,.3,.62,0,.55,0).rotateX(-.35));for(let a=0;a<5;a++)t.add(Me(xe.leaf,fe.chip,.3,.08,.3,(a-2)*.17,1.2,-.3-a%2*.1,!1))}else if(i==="speaker"){const o=new Mt;o.add(Me(xe.box,fe.speaker,1,1.5,.75,0,.75,0)),o.add(Me(xe.box,fe.rasG,1.02,.12,.77,0,1.38,0,!1)),o.add(Me(xe.box,fe.rasY,1.02,.12,.77,0,1.26,0,!1)),o.add(Me(xe.box,fe.rasR,1.02,.12,.77,0,1.14,0,!1));const a=[];for(const[l,c]of[[.85,.33],[.35,.2]]){const u=Me(xe.cyl,fe.cone,c,.08,c,0,l,-.38,!1);u.rotation.x=Math.PI/2,o.add(u),a.push(u)}t.add(o),e.userData.woofers=a}else if(i==="bubble"){e.add(Me(xe.cyl,fe.speaker,.5,.25,.5,0,.12,0)),t.position.y=.3,t.add(Me(xe.cyl,fe.bottle,.36,1,.36,0,.5,0)),t.add(Me(xe.cyl,fe.rasR,.22,.2,.22,0,1.08,0));const o=Me(xe.cyl,fe.wood,.03,.8,.03,0,1.4,-.2);o.rotation.x=.5,t.add(o),t.add(Me(xe.bubbleRing,fe.rasY,1,1,1,0,1.75,-.42,!1).rotateX(.5));for(let a=0;a<3;a++)t.add(Me(xe.sphere,fe.bubble,.14+a*.04,.14+a*.04,.14+a*.04,.3-a*.25,1.7+a*.3,-.7-a*.15,!1))}else if(i==="kite"){for(let a=0;a<3;a++){const l=a/3*Math.PI*2,c=Me(xe.cyl,fe.wood,.07,1.6,.07,Math.cos(l)*.45,.7,Math.sin(l)*.45);c.rotation.set(Math.sin(l)*.28,0,-Math.cos(l)*.28),e.add(c)}t.position.y=1.55,t.add(Me(xe.cyl,fe.iron,.22,.3,.22,0,0,0).rotateZ(Math.PI/2));const o=Bd();o.position.set(0,.7,0),o.scale.setScalar(.8),t.add(o),e.userData.kite=o}else if(i==="pizza"){e.add(Me(xe.box,fe.wood,1.2,.35,.9,0,.18,0));for(const a of[-1,1])e.add(Me(xe.box,fe.woodDark,.12,.9,.12,a*.45,.65,0));t.position.y=1;const o=new Mt;o.add(Me(xe.box,fe.woodLight,.12,.12,1.5,0,0,-.4)),o.add(Me(xe.cyl,fe.pizzaCrust,.32,.06,.32,0,.08,-1.1)),o.add(Me(xe.cyl,fe.pizza,.27,.03,.27,0,.12,-1.1,!1)),o.rotation.x=-.35,t.add(o),e.userData.arm=o}else if(i==="lamp"){e.add(Me(xe.cone,fe.brass,.55,.7,.55,0,.35,0)),t.position.y=.7,t.add(Me(xe.capsule,fe.lampGlass,.75,.9,.75,0,.75,0,!1));const o=[];for(let a=0;a<3;a++){const l=Me(xe.sphere,fe.lampBlob,.16,.2,.16,0,.5+a*.3,0,!1);t.add(l),o.push(l)}t.add(Me(xe.cone,fe.brass,.3,.35,.3,0,1.55,0)),e.userData.blobs=o}const n=[];for(let o=0;o<5;o++){const a=Me(xe.leaf,fe.levelPip,.45,.1,.45,Math.cos(o*1.2566)*.95,.15,Math.sin(o*1.2566)*.95,!1);a.visible=o===0,e.add(a),n.push(a)}const s=new _s(1.45,1.7,40,1,0,Math.PI*2);s.rotateX(-Math.PI/2);const r=new ot(s,new Rt({color:"#9fffb0",transparent:!0,opacity:.8,depthWrite:!1}));return r.position.y=.06,r.visible=!1,e.add(r),e.traverse(o=>{o.isMesh&&o!==r&&o.material!==fe.levelPip&&(o.castShadow=!0)}),Ru(e,1),e.userData.head=t,e.userData.pips=n,e.userData.ring=r,e}function Lu(i,e){i.mesh.userData.pips.forEach((t,n)=>t.visible=n<e),i.mesh.scale.setScalar(1+(e-1)*.08)}function wi(i,e){const t=i.mesh.userData.ring;if(t.visible=e>0,e<=0)return;t.geometry.dispose();const n=new _s(1.45,1.7,40,1,0,Math.PI*2*e);n.rotateX(-Math.PI/2),t.geometry=n}function kd(){const i=new Mt;return i.add(Me(xe.ember,fe.ember,1,1.3,1,0,0,0,!1)),i.add(Me(xe.ember,fe.emberCore,.5,.7,.5,0,0,0,!1)),i}function F_(){const i=new ot(xe.ring,fe.ringMat);return i.castShadow=!1,i}function Fd(){const i=new Mt;return i.add(Me(xe.box,fe.chipsBag,.32,.4,.14,0,0,0,!0)),i.add(Me(xe.box,fe.chipsRed,.33,.12,.15,0,.02,0,!1)),i}function Od(){const i=new zs(1,.08,4,32);return i.rotateX(Math.PI/2),new ot(i,new Rt({color:"#c8ffd0",transparent:!0,opacity:.7,depthWrite:!1}))}let la=null;function O_(){if(la)return la;const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d");["#d8453a","#f2c94c","#d8453a","#f2c94c","#3f9a4a","#f2c94c","#d8453a","#f2c94c"].forEach((n,s)=>{e.fillStyle=n,e.fillRect(0,s*8,64,8)});const t=new ai(i);return t.colorSpace=Tn,t.wrapS=t.wrapT=ki,t.repeat.set(1,1.4),t.magFilter=An,la=new Gt({map:t,flatShading:!0}),la}function Bd(){const i=new Mt,e=new Md([new Ce(0,.55),new Ce(.38,0),new Ce(0,-.75),new Ce(-.38,0)]),t=new wu(e,{depth:.035,bevelEnabled:!1});t.translate(0,0,-.0175);const n=new ot(t,O_());n.rotation.x=-Math.PI/2.4,n.castShadow=!0,i.add(n);const s=Me(xe.box,fe.woodDark,.025,1.3,.025,0,-.1,.03,!1),r=Me(xe.box,fe.woodDark,.76,.025,.025,0,0,.03,!1);n.add(s,r);const o=new Mt;o.position.set(0,-.68,0),n.add(o);const a=[fe.rasR,fe.rasY,fe.rasG,fe.rasR,fe.rasY];let l=o;const c=[];for(let u=0;u<a.length;u++){const h=new Mt;h.position.y=u?-.2:0,h.add(Me(xe.box,fe.rope,.015,.2,.015,0,-.1,0,!1));const d=new Mt;d.position.y=-.2;for(const p of[-1,1]){const g=Me(xe.cone,a[u],.05,.1,.03,p*.05,0,0,!1);g.rotation.z=p*Math.PI/2,d.add(g)}h.add(d),l.add(h),l=h,c.push(h)}return i.userData.tailSegs=c,i}function Gd(){return Me(xe.sphere,fe.bubble,.28,.28,.28,0,0,0,!1)}function B_(){const i=new Mt;return i.add(Me(xe.cyl,fe.pizzaCrust,.3,.06,.3,0,0,0,!0)),i.add(Me(xe.cyl,fe.pizza,.25,.03,.25,0,.04,0,!1)),i}const zr=20;function $n(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function G_(i){const e=new Wa(i.map(([s,r])=>new O(s,0,r)),!1,"catmullrom",.5),t=e.getLength(),n=e.getSpacedPoints(400);return{curve:e,length:t,samples:n}}function V_(i,e,t,n,s){const o=new Vn(1,1,1,5,5,5),a=o.attributes.position,l=new O,c=new O,u=i/2,h=e/2,d=t/2,p=Math.min(n,u,h,d)*.98,g=s()*10,_=(s()-.5)*.12;for(let f=0;f<a.count;f++){l.set(a.getX(f)*i,a.getY(f)*e,a.getZ(f)*t),c.set(bt.clamp(l.x,-u+p,u-p),bt.clamp(l.y,-h+p,h-p),bt.clamp(l.z,-d+p,d-p)),l.sub(c);const M=l.length();M>0&&l.multiplyScalar(p/M),l.add(c);const b=1+.035*Math.sin(l.x*4.1+g)*Math.sin(l.z*3.7-g)+.025*Math.sin(l.y*6+g*2);l.x*=b,l.z*=b,l.y+=l.x*_,a.setXYZ(f,l.x,l.y,l.z)}o.deleteAttribute("normal"),o.deleteAttribute("uv");const m=Td(o);return m.computeVertexNormals(),m}function H_(i,e,t){const n=new Re(e),s=new Re,r=[[[2.3,.85,1.9,0,0,0],[1.6,.7,1.4,.2,-.1,.35]],[[1.5,1.5,1.4,-.35,.1,.1],[1.4,.8,1.3,.75,-.2,-.3],[.9,.6,.85,-.3,.05,.6]],[[2.4,.7,2,0,0,.2],[1.8,.65,1.5,-.15,.15,-.25],[1.1,.55,1,.2,-.1,.5]]][t%3],o=[];let a=0;r.forEach(([p,g,_,m,f,M],b)=>{const x=.88+i()*.24,R=V_(p*x,g*(.9+i()*.2),_*x,Math.min(p,g,_)*.28,i);R.rotateY(M+(i()-.5)*.3);const S=t%3===1&&b===1?0:a;R.translate(m,S+g/2,f),t%3===1&&b===1||(a=S+g*.92),o.push(R)});const l=Au(o),c=l.attributes.position,u=l.attributes.normal,h=[],d=.95+i()*.1;for(let p=0;p<c.count;p++){c.getX(p);const g=c.getY(p);c.getZ(p),s.copy(n).multiplyScalar(d*(.72+.28*bt.smoothstep(g,0,.9))*(u.getY(p)<-.3?.8:1)),h.push(s.r,s.g,s.b)}return l.setAttribute("color",new st(h,3)),l}function pf(i,e,t,n,s,r,o=12,a={}){const l=a.dressed?.3:1,c=new Ft(e,t,n,o,3,!0),u=new _s(.001,e,o,4);u.rotateX(-Math.PI/2),u.translate(0,n/2,0);const h=Au([c,u]),d=h.attributes.position,p=i()*10;for(let S=0;S<d.count;S++){const T=d.getX(S),C=d.getY(S),y=d.getZ(S),v=Math.hypot(T,y);if(v<1e-4)continue;const A=Math.atan2(y,T);let k=1+l*(.05*Math.sin(A*3+p)+.035*Math.sin(A*7-p*2)+.025*Math.sin(C*9+A*4)),L=C;C>n/2-1e-4&&v>e*.97&&(k*=.93,L-=.08),d.setXYZ(S,T*k,L,y*k)}h.deleteAttribute("normal"),h.deleteAttribute("uv");const g=Td(h);g.computeVertexNormals(),g.translate(0,n/2,0);const _=new Re(s),m=new Re(r),f=new Re,M=[],b=new Re("#ece3cc"),x=g.attributes.position,R=g.attributes.normal;for(let S=0;S<x.count;S++){const T=x.getX(S),C=x.getY(S),y=x.getZ(S),v=Math.atan2(y,T),A=Math.hypot(T,y);if(f.copy(_).multiplyScalar(.55+.45*bt.smoothstep(C,0,n*.9)),a.dressed){const U=bt.smoothstep(R.getY(S),.75,.95)*bt.smoothstep(C,n-.15,n-.08),X=1-bt.smoothstep(Math.abs(A-e*.72),.04,.1);f.lerp(b,U*(1-.75*X)),f.multiplyScalar(1-.45*X*U),M.push(f.r,f.g,f.b);continue}const k=Math.sin(T*1.9+p)*Math.sin(y*2.3-p)+.5*Math.sin(v*5+p)+.3*Math.sin(A*4),L=bt.smoothstep(C,n-.25,n-.05)*bt.smoothstep(k,0,.5)*bt.smoothstep(R.getY(S),.2,.7);f.lerp(m,L),M.push(f.r,f.g,f.b)}return g.setAttribute("color",new st(M,3)),g}function kl(i,e=.55,t=null){const n=document.createElement("canvas");n.width=n.height=256;const s=n.getContext("2d");s.fillStyle="#ffffff",s.fillRect(0,0,256,256);const r=$n(4242);for(let c=0;c<90;c++){const u=225+r()*30|0;s.fillStyle=`rgba(${u},${u},${u},0.5)`,s.beginPath(),s.ellipse(r()*256,r()*256,8+r()*22,4+r()*10,r()*3,0,Math.PI*2),s.fill()}s.lineCap="round",s.lineJoin="round";const o=(c,u,h,d,p)=>{s.lineWidth=p,s.strokeStyle="rgba(46,44,50,0.85)",s.beginPath(),s.moveTo(c,u);for(let g=0;g<d;g++)h+=(r()-.5)*.9,c+=Math.cos(h)*9,u+=Math.sin(h)*9,s.lineTo(c,u),r()<.12&&p>1.2&&(s.stroke(),o(c,u,h+(r()<.5?1:-1)*(.6+r()*.6),d>>1,p*.7),s.lineWidth=p,s.strokeStyle="rgba(46,44,50,0.85)",s.beginPath(),s.moveTo(c,u));s.stroke()};for(let c=0;c<9;c++){const u=r()*256,h=r()*256,d=r()*6.28,p=5+(r()*7|0),g=1.6+r()*1.2;for(const[_,m]of[[0,0],[256,0],[-256,0],[0,256],[0,-256]])s.save(),s.translate(_,m),o(u,h,d,p,g),s.restore()}const a=new ai(n);a.colorSpace=Tn,a.wrapS=a.wrapT=ki,a.anisotropy=4;const l=new Gt({vertexColors:!0});return l.onBeforeCompile=c=>{c.uniforms.uCrack={value:a},c.uniforms.uWaterC={value:new Re(i)},c.uniforms.uMoss={value:new Re(t??"#000000")},c.vertexShader=`varying vec3 vRP;
varying vec3 vRN;
varying vec3 vRNW;
varying vec3 vRW;
varying float vRWY;
`+c.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vRP = position; vRN = normal;
  vec4 rw = vec4(transformed, 1.0);
  vec3 rnw = normal;
  #ifdef USE_INSTANCING
    rw = instanceMatrix * rw; rnw = mat3(instanceMatrix) * rnw;
  #endif
  vRW = (modelMatrix * rw).xyz; vRWY = vRW.y; vRNW = mat3(modelMatrix) * rnw;`),c.fragmentShader=`uniform sampler2D uCrack;
uniform vec3 uWaterC;
uniform vec3 uMoss;
varying vec3 vRP;
varying vec3 vRN;
varying vec3 vRNW;
varying vec3 vRW;
varying float vRWY;
float rockN(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); vec2 k = vec2(127.1, 311.7); float a = fract(sin(dot(i, k)) * 43758.5), b = fract(sin(dot(i + vec2(1, 0), k)) * 43758.5), c = fract(sin(dot(i + vec2(0, 1), k)) * 43758.5), d = fract(sin(dot(i + vec2(1, 1), k)) * 43758.5); return mix(mix(a, b, f.x), mix(c, d, f.x), f.y); }
`+c.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      {
        vec3 w = pow(abs(normalize(vRN)), vec3(4.0)); w /= (w.x + w.y + w.z);
        vec3 q = vRP * ${e.toFixed(3)}; // sprekk-tetthet per objektrom-enhet (store fyrfoten trenger glissere)
        vec3 cr = texture2D(uCrack, q.zy).rgb * w.x + texture2D(uCrack, q.xz).rgb * w.y + texture2D(uCrack, q.xy).rgb * w.z;
        diffuseColor.rgb *= cr;
        ${t?`// R9: sparsomme, flekkete mosepartier på oppoverflater (raw4), ikke hele toppen
        vec2 mq = vRW.xz * 1.6;
        float mn = rockN(mq) * 0.6 + rockN(mq * 2.7) * 0.28 + rockN(mq * 8.0) * 0.12;
        float up = smoothstep(0.5, 0.85, normalize(vRNW).y);
        float mossA = up * smoothstep(0.54, 0.58, mn);
        diffuseColor.rgb = mix(diffuseColor.rgb, uMoss * (0.75 + 0.5 * rockN(mq * 6.0)), mossA * 0.9);`:""}
        // Under vannflata (0,05) tar steinen vannets farge (som de turkise undervannssteinene i raw1):
        // flate blokk-topper rett under overflata viste seg ellers som lyse grå firkanter i det klare vannet
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.35 + uWaterC * 0.55, 0.8 * smoothstep(-0.03, 0.06, 0.05 - vRWY));
      }`)},l.customProgramCacheKey=()=>`rock${e}${t}`,l}function W_(i,e,t){const n=A_(t),s=new O(t.lighthouse[0],0,t.lighthouse[1]),r=t.paths.map(G_),o=r.flatMap(N=>N.samples),a=(N,W)=>{let ie=1/0;for(let me=0;me<o.length;me+=3){const Pe=o[me],ye=(Pe.x-N)**2+(Pe.z-W)**2;ye<ie&&(ie=ye)}return Math.sqrt(ie)};if(t.plateausAuto&&!t.plateaus){const N=$n(500+t.seed),W=[];for(const ie of t.plateausAuto){let me=null,Pe=-1;for(let ye=0;ye<500;ye++){const de=N()*Math.PI*2,ge=12+N()*24,De=Math.cos(de)*ge,nt=Math.sin(de)*ge,mt=a(De,nt);if(mt<ie.r+3.5||Math.hypot(De-s.x,nt-s.z)<ie.r+9||W.some(qt=>Math.hypot(qt.x-De,qt.z-nt)<qt.r+ie.r+5))continue;const vt=Math.min(mt-ie.r,9)+N()*.5;vt>Pe&&(Pe=vt,me={x:De,z:nt,...ie})}me&&W.push(me)}if(t.plateaus=W,t.waterfall&&W[0]){const ie=W[0],me=t.waterfall;let Pe=0,ye=-1;for(let De=0;De<16;De++){const nt=De/16*Math.PI*2,mt=ie.x+Math.cos(nt)*(ie.r+3.2),vt=ie.z+Math.sin(nt)*(ie.r+3.2),qt=a(mt,vt);qt>ye&&(ye=qt,Pe=nt)}const de=Math.cos(Pe),ge=Math.sin(Pe);me.pool=[ie.x+de*(ie.r-2.4),ie.z+ge*(ie.r-2.4)],me.lip=[ie.x+de*(ie.r-.3),ie.z+ge*(ie.r-.3)],me.basin=[ie.x+de*(ie.r+3),ie.z+ge*(ie.r+3)]}}const l=t.fjord,c=t.nes,u=(N,W)=>{if(t.shape==="fjord"){const ie=W+30+2.2*Math.sin(N*.21)+1.2*Math.sin(N*.53+1),me=bt.clamp(W,c.z1,c.z0),Pe=c.r-Math.hypot(N-c.x,W-me)+(W<c.z1?0:.6*Math.sin(W*.7));return Math.max(ie,Pe)}return n(Math.atan2(W,N))-Math.hypot(N,W)},h=(N,W,ie=!1)=>{const me=bt.smoothstep(u(N,W),-3,7),Pe=.9+.7*Math.sin(N*.17+1)*Math.cos(W*.21)+.35*Math.sin(N*.5+W*.4)+.3*Math.sin(N*.31-W*.23+2.1)+.18*Math.cos(N*.73+W*.61),ye=2.4*Math.exp(-((N-s.x-2)**2+(W-s.z+1)**2)/60);let de=-2.2+me*(2.2+Pe+ye);if(me>.85&&de<.35&&(de=Math.max(-.42,.35-(.35-de)*3.2)),l){const ge=Math.max(bt.smoothstep(Math.abs(N),l.wall-3,l.wall+6),bt.smoothstep(W,l.top+6,l.top+14));de+=ge*(7+1.5*Math.sin(W*.13+N*.05));const De=Math.abs(N-l.xc(W)),nt=1-bt.smoothstep(W,l.top-6,l.top+2);De<l.w+1.5&&nt>0&&(de=Math.min(de,bt.lerp(de,-1.6,nt*(1-bt.smoothstep(De,l.w-.8,l.w+1.5)))))}for(const ge of t.plateaus||[]){const De=Math.hypot(N-ge.x,W-ge.z),nt=Math.atan2(W-ge.z,N-ge.x),mt=ge.r+Math.sin(nt*5+ge.x)*.8+Math.sin(nt*11)*.3;de+=ge.h*bt.smoothstep(mt-De,0,1.3)}if(t.waterfall&&!ie){const ge=t.waterfall,De=Math.hypot(N-ge.pool[0],W-ge.pool[1]);De<ge.poolR+.6&&(ge._lvl??(ge._lvl=h(ge.pool[0],ge.pool[1],!0)-.12),de=Math.min(de,ge._lvl-.48*Math.sqrt(Math.max(0,1-De/(ge.poolR+.6)))));const nt=bt.clamp(((N-ge.pool[0])*(ge.lip[0]-ge.pool[0])+(W-ge.pool[1])*(ge.lip[1]-ge.pool[1]))/((ge.lip[0]-ge.pool[0])**2+(ge.lip[1]-ge.pool[1])**2),0,1),mt=ge.pool[0]+(ge.lip[0]-ge.pool[0])*nt,vt=ge.pool[1]+(ge.lip[1]-ge.pool[1])*nt;Math.hypot(N-mt,W-vt)<.75&&ge._lvl!==void 0&&(de=Math.min(de,ge._lvl-.25));const qt=Math.hypot(N-ge.basin[0],W-ge.basin[1]);qt<ge.basinR&&(de=Math.min(de,Math.max(-.42,.05-.47*Math.sqrt(1-qt/ge.basinR))))}if(t.volcano){const ge=t.volcano,De=Math.hypot(N-ge.x,W-ge.z);de+=ge.h*Math.max(0,1-De/ge.r)**1.4-ge.h*.5*Math.max(0,1-De/(ge.r*.25))}return de},d=68,p=e.mobile?160:176,g=new Float32Array((p+1)*(p+1)),_=new Float32Array((p+1)*(p+1));for(let N=0;N<=p;N++)for(let W=0;W<=p;W++){const ie=-d+W/p*d*2,me=-d+N/p*d*2,Pe=a(ie,me);_[N*(p+1)+W]=Pe;let ye=h(ie,me);const de=bt.smoothstep(Pe,1.4,3.2),ge=Math.max(h(ie,me)*.6+.3,.45);ye=bt.lerp(Math.min(ye,ge+.1),ye,de),l&&Math.abs(me-l.bridgeZ)<4&&Math.abs(ie-l.xc(me))<l.w+2&&Pe<2.2&&(ye=Math.max(ye,.5)),g[N*(p+1)+W]=ye}const m=(N,W,ie)=>{const me=bt.clamp((W+d)/(d*2)*p,0,p-.001),Pe=bt.clamp((ie+d)/(d*2)*p,0,p-.001),ye=Math.floor(me),de=Math.floor(Pe),ge=me-ye,De=Pe-de,nt=N[de*(p+1)+ye],mt=N[de*(p+1)+ye+1],vt=N[(de+1)*(p+1)+ye],qt=N[(de+1)*(p+1)+ye+1];return(nt*(1-ge)+mt*ge)*(1-De)+(vt*(1-ge)+qt*ge)*De},f=(N,W)=>m(g,N,W),M=(N,W)=>m(_,N,W),b=(N,W)=>f(N,W)>.35,x=.5,R=(N,W)=>Math.max(Math.abs(f(N+.4,W)-f(N-.4,W)),Math.abs(f(N,W+.4)-f(N,W-.4)))/.8,S=(N,W)=>!!l&&Math.abs(W-l.bridgeZ)<4&&Math.abs(N-l.xc(W))<l.w+1.5&&M(N,W)<2.6,T=new Re("#cfeaff"),C=(N,W)=>f(N,W)>.05-x&&R(N,W)<1.05,y=e.mobile?170:256,v=new ci(d*2,d*2,y,y);v.rotateX(-Math.PI/2);const A=v.attributes.position,k=new Float32Array(A.count*3),L=new Float32Array(A.count*3),U=new Float32Array(A.count),X=new Float32Array(A.count*4),B=new Re,z=new Re,I=t.palette,j=new Re(t.rock[0]).multiplyScalar(.7),Q=new Re(t.rock[0]).multiplyScalar(1.08),se=new Re,_e=new Re(I.sand),qe=new Re(I.grass),V=new Re(I.grass2),te=new Re(I.path),ae=new Re(I.deep),le=new Re,pe=$n(7);for(let N=0;N<A.count;N++){const W=A.getX(N),ie=A.getZ(N),me=f(W,ie);A.setY(N,me);const Pe=M(W,ie),ye=(pe()-.5)*.04,de=le.copy(qe).lerp(V,bt.clamp((me-1)*.6+pe()*.3,0,1)).offsetHSL(0,0,ye);L.set([de.r,de.g,de.b],N*3),B.copy(ae).lerp(_e,bt.smoothstep(me,0,.3)).offsetHSL(0,0,ye),k.set([B.r,B.g,B.b],N*3);const ge=.5+.5*Math.sin(W*1.7+ie*.9)*Math.cos(ie*1.3-W*.6);U[N]=1.9-Math.min(Pe,6)+(ge-.5)*(I.pathMix??.3)*2.4-Math.max(0,.3-me)*2.5;let De=0;l&&S(W,ie)&&(z.copy(T),De=.85);const nt=R(W,ie);if(nt>.75){const mt=.5+.5*Math.sin(me*7.5+Math.sin(W*.7+ie*.5)*1.5);se.copy(j).lerp(Q,mt);const vt=bt.smoothstep(nt,.75,1.3);z.copy(De?z:se).lerp(se,vt),De=Math.max(De,vt)}X.set([z.r,z.g,z.b,De],N*4)}v.setAttribute("aLow",new Ut(k,3)),v.setAttribute("aGrass",new Ut(L,3)),v.setAttribute("aPathF",new Ut(U,1)),v.setAttribute("aOver",new Ut(X,4)),v.computeVertexNormals();const Ie=new Gt({color:"#ffffff"});Ie.onBeforeCompile=N=>{N.vertexShader=N.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTW, vLow, vGrass;
varying vec4 vOver;
varying float vPathF;
attribute vec3 aLow, aGrass;
attribute vec4 aOver;
attribute float aPathF;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vTW = (modelMatrix * vec4(transformed, 1.0)).xyz;
vLow = aLow; vGrass = aGrass; vOver = aOver; vPathF = aPathF;`),N.uniforms.uPath={value:te},N.uniforms.uRipple={value:I.ripple??1},N.fragmentShader=N.fragmentShader.replace("#include <common>",`#include <common>
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
        diffuseColor.g *= 1.0 + 0.025 * n1;`)};const Le=new ot(v,Ie);Le.receiveShadow=!0,i.add(Le);const Oe=[],he=(N,W)=>Math.hypot(N-s.x,W-s.z)>6;for(const[N,W]of r.entries()){let ie=N%2===0?1:-1,me=0;for(let Pe=.16;Pe<.95&&me<6;Pe+=.055){const ye=W.curve.getPointAt(Pe),de=W.curve.getTangentAt(Pe),ge=new O(-de.z,0,de.x).normalize();for(const De of[ie,-ie]){const nt=ye.x+ge.x*3.6*De,mt=ye.z+ge.z*3.6*De;if(!(M(nt,mt)<2.7||!b(nt,mt)||!he(nt,mt))&&!Oe.some(vt=>Math.hypot(vt.x-nt,vt.z-mt)<5.2)&&!(t.volcano&&Math.hypot(nt-t.volcano.x,mt-t.volcano.z)<t.volcano.r+2)){Oe.push({x:nt,z:mt,tower:null}),me++;break}}ie=-ie}}const be=kl(t.water.mid),F=new Rt({color:new Re("#ffd27a").multiplyScalar(1.6),transparent:!0,opacity:.75,depthWrite:!1}),je=new Rt({color:new Re("#ffe9a8").multiplyScalar(2),transparent:!0,opacity:.85,depthWrite:!1}),Ee=pf($n(61+t.seed),1.3,1.45,.98,t.rock[0],t.rock[1],8,{dressed:!0});Ee.translate(0,-.1,0);const Be=new _s(.55,.75,6);Be.rotateX(-Math.PI/2);const ze=new Ir(1,0),et=Oe.length,J=new pn(Ee,be,et),P=new pn(Be,F,et),w=new pn(ze,je,et*3);J.castShadow=J.receiveShadow=!0;const q=new Vt;Oe.forEach((N,W)=>{N.y0=f(N.x,N.z),N.y=N.y0+.88,q.position.set(N.x,N.y0,N.z),q.rotation.set(0,W,0),q.scale.setScalar(1),q.updateMatrix(),J.setMatrixAt(W,q.matrix)}),i.add(J,P,w),Da(J,"rock");const ne=N=>{Oe.forEach((W,ie)=>{const me=!W.tower;q.position.set(W.x,W.y0+.9,W.z),q.rotation.set(0,N*.5,0),q.scale.setScalar(me?1:0),q.updateMatrix(),P.setMatrixAt(ie,q.matrix);for(let Pe=0;Pe<3;Pe++){const ye=N*.4+Pe*2.1+W.x,de=(ye%1+1)%1;q.position.set(W.x+Math.cos(ye*2.3)*.55,W.y0+1+de*1.1,W.z+Math.sin(ye*2.3)*.55),q.rotation.set(0,ye*3,0);const ge=me?.07*Math.sin(de*Math.PI):0;q.scale.set(ge,ge*1.6,ge),q.updateMatrix(),w.setMatrixAt(ie*3+Pe,q.matrix)}}),P.instanceMatrix.needsUpdate=!0,w.instanceMatrix.needsUpdate=!0},re=new Mt,oe=f(s.x,s.z);re.position.set(s.x,oe,s.z);const Ne=(()=>{const N=document.createElement("canvas");N.width=512,N.height=512;const W=N.getContext("2d");W.fillStyle="#f6f1e6",W.fillRect(0,0,512,512);const ie=$n(5);for(let Pe=0;Pe<520;Pe++){const ye=ie()*512,de=ie()*512,ge=2+ie()*9,De=ie()<.65;W.fillStyle=De?`rgba(${90+ie()*40},${120+ie()*40},${60+ie()*20},${.12+ie()*.18})`:`rgba(${130+ie()*30},${95+ie()*20},60,${.12+ie()*.15})`,W.beginPath(),W.ellipse(ye,de,ge,ge*(.4+ie()*.6),ie()*3,0,Math.PI*2),W.fill()}for(let Pe=0;Pe<1200;Pe++){W.strokeStyle=`rgba(190,170,140,${.04+ie()*.07})`,W.lineWidth=1;const ye=ie()*512,de=ie()*512;W.beginPath(),W.moveTo(ye,de),W.lineTo(ye+(ie()-.5)*8,de+6+ie()*20),W.stroke()}for(let Pe=0;Pe<26;Pe++){const ye=ie()*512;W.strokeStyle=ie()<.5?"rgba(255,255,255,0.35)":"rgba(150,130,100,0.18)",W.lineWidth=2+ie()*5,W.beginPath(),W.moveTo(ye,512),W.bezierCurveTo(ye+40,350,ye-30,160,ye+20+ie()*40,0),W.stroke()}W.strokeStyle="rgba(175,145,100,0.55)",W.lineWidth=4,W.beginPath(),W.moveTo(60,512),W.bezierCurveTo(90,330,110,180,150,0),W.stroke();const me=new ai(N);return me.colorSpace=Tn,me.wrapS=ki,me})(),Te=new Gt({map:Ne}),Ue=(()=>{const N=document.createElement("canvas");N.width=N.height=128;const W=N.getContext("2d");W.fillStyle="#e9dcbf",W.fillRect(0,0,128,128),W.strokeStyle="#a88d62",W.lineWidth=3,W.beginPath();for(let me=0;me<Math.PI*9;me+=.1){const Pe=4+me*2;W.lineTo(64+Math.cos(me)*Pe,64+Math.sin(me)*Pe)}W.stroke();const ie=new ai(N);return ie.colorSpace=Tn,ie})(),it=new Gt({color:"#e6d8b8"}),Ae=new Gt({map:Ue}),Ye=new Gt({color:"#3a3330",flatShading:!0}),rt=new Gt({color:"#b8b2aa",flatShading:!0}),lt=(()=>{const N=document.createElement("canvas");N.width=256,N.height=128;const W=N.getContext("2d"),ie=W.createLinearGradient(0,0,0,128);ie.addColorStop(0,"#fff0b0"),ie.addColorStop(.45,"#ffb040"),ie.addColorStop(1,"#ff5a10"),W.fillStyle=ie,W.fillRect(0,0,256,128);const me=$n(11);for(let ye=0;ye<70;ye++){const de=me();W.fillStyle=de<.5?`rgba(70,60,55,${.5+me()*.4})`:`rgba(170,165,160,${.5+me()*.4})`,W.beginPath(),W.ellipse(me()*256,20+me()*108,4+me()*14,2+me()*6,me()*3,0,Math.PI*2),W.fill()}W.strokeStyle="rgba(60,30,20,0.6)",W.lineWidth=1.5;for(let ye=0;ye<40;ye++){const de=me()*256,ge=me()*128;W.beginPath(),W.moveTo(de,ge),W.lineTo(de+(me()-.5)*30,ge+(me()-.5)*20),W.stroke()}const Pe=new ai(N);return Pe.colorSpace=Tn,Pe})(),Ke=new Rt({map:lt,color:new Re("#ffffff").multiplyScalar(2.2)});function gt({len:N,rTop:W,rBot:ie,crutchH:me,seg:Pe,bend:ye,glowMat:de,shadow:ge}){const De=new Mt,nt=new ot(new Ft(ie*.98,ie*.95,me,Pe),[it,it,Ae]);nt.position.y=me/2,nt.castShadow=ge,De.add(nt);const mt=new Ft(W,ie,N,Pe,8,!0),vt=mt.attributes.position,qt=$n(Math.round(N*100)),Nt=Array.from({length:6},()=>[qt()*6.28,qt()*3,.03+qt()*.04]);for(let Dt=0;Dt<vt.count;Dt++){const fi=vt.getY(Dt),di=(fi+N/2)/N,Xr=Math.atan2(vt.getZ(Dt),vt.getX(Dt));let Qs=1+Math.sin(Xr*7+fi*3)*.018;for(const[gp,vp,xp]of Nt)Qs+=Math.cos(Xr-gp)*Math.sin(di*6+vp)*xp*.5;vt.setXYZ(Dt,vt.getX(Dt)*Qs+ye*di*di*N,fi,vt.getZ(Dt)*Qs)}mt.translate(0,N/2,0),mt.computeVertexNormals();const hn=new ot(mt,Te);hn.position.y=me,hn.castShadow=ge,hn.receiveShadow=!0,De.add(hn);const hi=ye*N,vn=me+N,ti=new Ft(W*1.02,W*1.04,W*.35,Pe,1,!0),Xn=ti.attributes.position;for(let Dt=0;Dt<Xn.count;Dt++)Xn.getY(Dt)>0&&Xn.setY(Dt,Xn.getY(Dt)+Math.sin(Dt*2.7)*W*.12);ti.computeVertexNormals();const Ms=new ot(ti,Ye);Ms.position.set(hi,vn+W*.12,0),De.add(Ms);const Hr=new ot(new Zn(W*.97,Pe,6,0,Math.PI*2,0,Math.PI/2),de);Hr.scale.y=.38,Hr.position.set(hi,vn+W*.2,0),De.add(Hr);const Ja=[];for(let Dt=0;Dt<5;Dt++){const fi=new ot(new qa(W*(.2+Dt%3*.07),0),rt),di=Dt*1.25+.3;fi.position.set(hi+Math.cos(di)*W*.55,vn+W*.33,Math.sin(di)*W*.55),fi.scale.y=.4,De.add(fi),Ja.push(fi)}const Qa=new Kn(W*.28,W*1.1,6,4),Js=Qa.attributes.position;for(let Dt=0;Dt<Js.count;Dt++){const fi=Js.getY(Dt),di=(fi/(W*1.1)+.5)*2.2,Xr=Js.getX(Dt),Qs=Js.getZ(Dt);Js.setX(Dt,Xr*Math.cos(di)-Qs*Math.sin(di)+(fi+W*.55)*.25),Js.setZ(Dt,Xr*Math.sin(di)+Qs*Math.cos(di))}Qa.computeVertexNormals();const Wr=new ot(Qa,Ye);return Wr.position.set(hi+W*.1,vn+W*.7,W*.1),Wr.rotation.z=-.35,De.add(Wr),De.userData={glow:Hr,top:new O(hi,vn,0),charRing:Ms,ashFlakes:Ja,body:hn,twist:Wr,len:N,rTop:W,rBot:ie,bend:ye,crutchH:me,base:hn.geometry.attributes.position.array.slice(),topParts:[Ms,Hr,Wr,...Ja].map(Dt=>[Dt,Dt.position.clone(),Dt.scale.clone()])},De}const ct=new Re(t.rock[0]).multiplyScalar(.86),yt=new ot(pf($n(67+t.seed),3.3,3.9,1,ct,t.rock[1],16),kl(t.water.mid,.2));yt.position.y=-.2,yt.castShadow=yt.receiveShadow=!0,re.add(yt),Vr(yt,"rock");const Z=7.4,ke=1.4,ue=gt({len:Z,rTop:2.35,rBot:.95,crutchH:ke,seg:22,bend:.06,glowMat:Ke,shadow:!0});ue.position.y=.75,ue.rotation.set(.06,0,-.03);const Se=ue.userData.charRing;re.add(ue);const We=new Vt;We.position.y=ke+Z+1.2,ue.add(We);const He=new Mo("#ff8a3a",40,34,1.5);He.position.y=ke+Z+1.4,ue.add(He);const ut=new Kn(2.2,16,16,6,!0);ut.translate(0,-8,0);{const N=ut.attributes.position,W=new Float32Array(N.count*3);for(let ie=0;ie<N.count;ie++){const me=Math.pow(1-Math.min(1,-N.getY(ie)/16),1.6);W.set([me,me,me],ie*3)}ut.setAttribute("color",new Ut(W,3))}ut.rotateZ(Math.PI/2);const Ht=new Rt({color:"#ffc890",vertexColors:!0,transparent:!0,opacity:.05,blending:li,depthWrite:!1,side:an,fog:!1}),Xt=new Mt;Xt.position.y=ke+Z+.8;const Tt=new ot(ut,Ht),bn=Tt.clone();bn.rotation.y=Math.PI,Xt.add(Tt,bn),ue.add(Xt);const Rn=new Mo("#ffa050",12,10,1.4);Rn.position.set(0,1.3,4.6),re.add(Rn),i.add(re),re.updateMatrixWorld(!0);const ui=new O;We.getWorldPosition(ui);const zt=ue.userData,zn=[We,He,Xt].map(N=>[N,N.position.y]),Ai=N=>zt.rBot+(zt.rTop-zt.rBot)*N;function Ci(N){const W=.15+.85*Math.max(0,Math.min(1,N)),ie=zt.body.geometry.attributes.position,me=zt.base;for(let ge=0;ge<ie.count;ge++){const De=me[ge*3+1],nt=De/zt.len,mt=nt*W,vt=Ai(mt)/Ai(nt);ie.setXYZ(ge,(me[ge*3]-zt.bend*nt*nt*zt.len)*vt+zt.bend*mt*mt*zt.len,mt*zt.len,me[ge*3+2]*vt)}ie.needsUpdate=!0,zt.body.geometry.computeVertexNormals(),zt.body.geometry.computeBoundingSphere();const Pe=(W-1)*zt.len,ye=Ai(W)/zt.rTop,de=zt.bend*zt.len*(W*W-1);for(const[ge,De,nt]of zt.topParts)ge.position.set(zt.top.x+(De.x-zt.top.x)*ye+de,De.y+Pe,De.z*ye),ge.scale.set(nt.x*ye,nt.y*ye,nt.z*ye);for(const[ge,De]of zn)ge.position.y=De+Pe;re.updateMatrixWorld(!0),We.getWorldPosition(ui)}const Ri={tip:ui,pos:new O(s.x,oe,s.z),lights:zr,flamePos(){return ui.clone()},setLights(N){this.lights=N;const W=N/zr;Ci(W),this.glow=W,Rn.intensity=3+9*W,Ht.opacity=.01+.04*W,Se.scale.y*=1+(1-W)*2.5}},un=$n(42),Sn=[];for(let N=0;N<3e3&&Sn.length<(e.mobile?70:104);N++){const W=(un()-.5)*102,ie=(un()-.5)*102,me=f(W,ie);if(me<.75||M(W,ie)<3.2||!he(W,ie)||Oe.some(ge=>Math.hypot(ge.x-W,ge.z-ie)<3.2)||Sn.some(ge=>Math.hypot(ge.x-W,ge.z-ie)<2.4)||t.volcano&&Math.hypot(W-t.volcano.x,ie-t.volcano.z)<t.volcano.r)continue;const Pe=me<1.45?t.trees.beach:t.trees.inland;let ye=un(),de="bush";for(const[ge,De]of Object.entries(Pe)){if(ye<De){de=ge;break}ye-=De}de==="palm"&&(un()<.5||M(W,ie)<4.6||Oe.some(ge=>Math.hypot(ge.x-W,ge.z-ie)<4.8))||Sn.push({x:W,z:ie,y:me,s:(de==="bush"?.8:.75)+un()*.45,phase:un()*6.28,kind:de})}if(t.trees.inland.bush){const N=$n(303+t.seed),W=Sn.filter(ie=>ie.kind!=="bush"&&ie.y>=1);for(const ie of W){if(N()>(e.mobile?.6:.75))continue;const me=1+Math.floor(N()*3);for(let Pe=0;Pe<me;Pe++){const ye=N()*6.28,de=1.3+N()*1,ge=ie.x+Math.cos(ye)*de,De=ie.z+Math.sin(ye)*de,nt=f(ge,De);nt<1||M(ge,De)<3||!he(ge,De)||Oe.some(mt=>Math.hypot(mt.x-ge,mt.z-De)<3)||Sn.some(mt=>mt!==ie&&Math.hypot(mt.x-ge,mt.z-De)<1.3)||Sn.push({x:ge,z:De,y:nt,s:.55+N()*.35,phase:N()*6.28,kind:"bush"})}}}const ei=p_(i,Sn,e,t),G=new Vt,ve=[];for(let N=0;N<1200&&ve.length<(e.mobile?40:56);N++){const W=un()*Math.PI*2,ie=n(W)-3+un()*5.5,me=Math.cos(W)*ie,Pe=Math.sin(W)*ie;M(me,Pe)<3.4||f(me,Pe)<-1.2||ve.some(ye=>Math.hypot(ye.x-me,ye.z-Pe)<2.2)||ve.push({x:me,z:Pe,s:.6+un()*1.2,r:un()*6})}for(const N of t.plateaus||[]){const W=Math.round(N.r*2*Math.PI/2.3);for(let ie=0;ie<W;ie++){const me=ie/W*Math.PI*2+un()*.2,Pe=N.r+Math.sin(me*5+N.x)*.8+Math.sin(me*11)*.3-.2,ye=N.x+Math.cos(me)*Pe,de=N.z+Math.sin(me)*Pe;t.waterfall&&Math.hypot(ye-t.waterfall.lip[0],de-t.waterfall.lip[1])<2.2||M(ye,de)<2.6||ve.push({x:ye,z:de,s:1.3+un()*.9,r:un()*6,cliff:!0})}}const ce=[0,1,2].map(N=>H_($n(31+N*7+t.seed),t.rock[0],N)),$e=kl(t.water.mid,.55,t.rock[1]);ce.map((N,W)=>{const ie=ve.filter((Pe,ye)=>ye%3===W),me=new pn(N,$e,Math.max(1,ie.length));return me.count=ie.length,ie.forEach((Pe,ye)=>{G.position.set(Pe.x,f(Pe.x,Pe.z)-.2*Pe.s,Pe.z),G.rotation.set(0,Pe.r*2,0),G.scale.set(Pe.s*1.1,Pe.s*.9,Pe.s),G.updateMatrix(),me.setMatrixAt(ye,G.matrix)}),me.castShadow=me.receiveShadow=!0,i.add(me),Da(me,"rock"),me});const Qe=M_(i,{heightAt:f,pathDist:M,plinths:Oe,paths:r,lighthouse:Ri,landDist:u},e,$n(99+t.seed),n,t),E=L_(i,{heightAt:f,landDist:u,pathDist:M,paths:r,lighthouse:Ri,islandEdge:n},e,t),H=[...Sn.map(N=>[N.x,N.z,1.3*N.s]),...ve.map(N=>[N.x,N.z,N.s*1.6]),...Oe.map(N=>[N.x,N.z,1.9])],K=(N,W)=>{let ie=1;for(const[me,Pe,ye]of H){const de=(me-N)**2+(Pe-W)**2;de<ye*ye&&(ie=Math.min(ie,.55+.45*Math.sqrt(de)/ye))}return ie},ee=b_(i,{heightAt:f,pathDist:M,plinths:Oe,lighthouse:Ri,extrasBlock:E.blocks,shadeAt:K},e,t,$n(7+t.seed)),$={palm:.9,round:1.45,bush:1,pine:1.35,dead:.6};I_(i,[...Sn.map(N=>({x:N.x,y:N.y,z:N.z,r:($[N.kind]??1)*N.s})),...ve.map(N=>({x:N.x,y:f(N.x,N.z),z:N.z,r:N.s*(N.cliff?1.7:1.55)})).filter(N=>N.y>.05),...Oe.map(N=>({x:N.x,y:N.y0,z:N.z,r:1.95})),{x:s.x,y:oe,z:s.z,r:4.8}]);const we=Float32Array.from(g),Ve=[...ve.map(N=>({x:N.x,z:N.z,r:N.s*.85})),...Qe.obstacles];for(const N of Ve){const W=N.r+1,ie=d*2/p,me=Math.floor((N.x-W+d)/ie),Pe=Math.ceil((N.x+W+d)/ie),ye=Math.floor((N.z-W+d)/ie),de=Math.ceil((N.z+W+d)/ie);for(let ge=Math.max(0,ye);ge<=Math.min(p,de);ge++)for(let De=Math.max(0,me);De<=Math.min(p,Pe);De++){const nt=-d+De*ie,mt=-d+ge*ie,vt=Math.max(0,Math.hypot(nt-N.x,mt-N.z)-N.r);if(vt>.9)continue;const qt=ge*(p+1)+De,Nt=.06-vt*.35,hn=1-vt/.9;we[qt]=Math.max(we[qt],we[qt]+(Nt-we[qt])*hn*hn)}}if(t.waterfall&&t.waterfall._lvl!==void 0){const N=t.waterfall;uf(i,{heightTex:hf(we,p+1),ext:d,grid:p,quality:e,sunDir:new O(24,17,4),colors:t.water,level:N._lvl,size:9,maxDepth:.8,center:[(N.pool[0]+N.lip[0])/2,(N.pool[1]+N.lip[1])/2]})}const Je=uf(i,{heightTex:hf(we,p+1),ext:d,grid:p,quality:e,sunDir:new O(24,17,4),colors:t.water}),tt=[{x:s.x,z:s.z,r:3.5},...Oe.map(N=>({x:N.x,z:N.z,r:1.4})),...ei.colliders,...ve.filter(N=>f(N.x,N.z)>-.45).map(N=>({x:N.x,z:N.z,r:N.s*.85})),...Qe.colliders,...E.colliders];return{def:t,paths:r,plinths:Oe,lighthouse:Ri,heightAt:f,pathDist:M,slopeAt:R,isLand:b,isIce:S,landDist:u,isWalkable:(N,W)=>C(N,W)&&!E.blocks(N,W),colliders:tt,update:N=>{Je.update(N),Qe.update(N),E.update(N),ee.update(N);const W=Ri.glow??1,ie=.75+.25*Math.sin(N*1.3)+.1*Math.sin(N*7.1);Ke.color.setRGB(1,.85,.75).multiplyScalar(W>0?(.7+1.5*W)*ie:.12),He.intensity=(8+40*W)*ie,Xt.rotation.y=N*.6,ei.update(N),ne(N)},terrain:Le,extras:E,grass:ee,cullFade:ei.cullFade,treeSpots:Sn}}const uo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Zs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const X_=new vu(-1,1,1,-1,0,1);class q_ extends Lt{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}}const Y_=new q_;class $a{constructor(e){this._mesh=new ot(Y_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,X_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Vd extends Zs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof en?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Mi.clone(e.uniforms),this.material=new en({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new $a(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class mf extends Zs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class $_ extends Zs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class j_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ce);this._width=n.width,this._height=n.height,t=new Wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:oi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vd(uo),this.copyPass.material.blending=En,this.clock=new Ed}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}mf!==void 0&&(o instanceof mf?n=!0:o instanceof $_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class K_ extends Zs{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const ca={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ce},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Pt},cameraProjectionMatrixInverse:{value:new Pt},cameraWorldMatrix:{value:new Pt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new O(-1,-1,-1)},sceneBoxMax:{value:new O(1,1,1)}},vertexShader:`

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
		}`},ua={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Fl={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Z_(i=5){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=J_(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){const a=t[o],l=2*Math.PI*a/n,c=new O(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}const r=new Va(s,e,e);return r.wrapS=ki,r.wrapT=ki,r.needsUpdate=!0,r}function J_(i){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0);let s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}const ha={defines:{SAMPLES:16,SAMPLE_VECTORS:Hd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ce},cameraProjectionMatrixInverse:{value:new Pt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Hd(i,e,t){const n=Q_(i,e,t);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function Q_(i,e,t){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new O(Math.cos(r),Math.sin(r),o))}return n}class eM{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,d=l-h,p=c-h,g=e-d,_=t-p;let m,f;g>_?(m=1,f=0):(m=0,f=1);const M=g-m+u,b=_-f+u,x=g-1+2*u,R=_-1+2*u,S=l&255,T=c&255,C=this.perm[S+this.perm[T]]%12,y=this.perm[S+m+this.perm[T+f]]%12,v=this.perm[S+1+this.perm[T+1]]%12;let A=.5-g*g-_*_;A<0?n=0:(A*=A,n=A*A*this.dot(this.grad3[C],g,_));let k=.5-M*M-b*b;k<0?s=0:(k*=k,s=k*k*this.dot(this.grad3[y],M,b));let L=.5-x*x-R*R;return L<0?r=0:(L*=L,r=L*L*this.dot(this.grad3[v],x,R)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a;const c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),d=Math.floor(n+c),p=1/6,g=(u+h+d)*p,_=u-g,m=h-g,f=d-g,M=e-_,b=t-m,x=n-f;let R,S,T,C,y,v;M>=b?b>=x?(R=1,S=0,T=0,C=1,y=1,v=0):M>=x?(R=1,S=0,T=0,C=1,y=0,v=1):(R=0,S=0,T=1,C=1,y=0,v=1):b<x?(R=0,S=0,T=1,C=0,y=1,v=1):M<x?(R=0,S=1,T=0,C=0,y=1,v=1):(R=0,S=1,T=0,C=1,y=1,v=0);const A=M-R+p,k=b-S+p,L=x-T+p,U=M-C+2*p,X=b-y+2*p,B=x-v+2*p,z=M-1+3*p,I=b-1+3*p,j=x-1+3*p,Q=u&255,se=h&255,_e=d&255,qe=this.perm[Q+this.perm[se+this.perm[_e]]]%12,V=this.perm[Q+R+this.perm[se+S+this.perm[_e+T]]]%12,te=this.perm[Q+C+this.perm[se+y+this.perm[_e+v]]]%12,ae=this.perm[Q+1+this.perm[se+1+this.perm[_e+1]]]%12;let le=.6-M*M-b*b-x*x;le<0?s=0:(le*=le,s=le*le*this.dot3(this.grad3[qe],M,b,x));let pe=.6-A*A-k*k-L*L;pe<0?r=0:(pe*=pe,r=pe*pe*this.dot3(this.grad3[V],A,k,L));let Ie=.6-U*U-X*X-B*B;Ie<0?o=0:(Ie*=Ie,o=Ie*Ie*this.dot3(this.grad3[te],U,X,B));let Le=.6-z*z-I*I-j*j;return Le<0?a=0:(Le*=Le,a=Le*Le*this.dot3(this.grad3[ae],z,I,j)),32*(s+r+o+a)}noise4d(e,t,n,s){const r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,h,d,p,g;const _=(e+t+n+s)*l,m=Math.floor(e+_),f=Math.floor(t+_),M=Math.floor(n+_),b=Math.floor(s+_),x=(m+f+M+b)*c,R=m-x,S=f-x,T=M-x,C=b-x,y=e-R,v=t-S,A=n-T,k=s-C,L=y>v?32:0,U=y>A?16:0,X=v>A?8:0,B=y>k?4:0,z=v>k?2:0,I=A>k?1:0,j=L+U+X+B+z+I,Q=o[j][0]>=3?1:0,se=o[j][1]>=3?1:0,_e=o[j][2]>=3?1:0,qe=o[j][3]>=3?1:0,V=o[j][0]>=2?1:0,te=o[j][1]>=2?1:0,ae=o[j][2]>=2?1:0,le=o[j][3]>=2?1:0,pe=o[j][0]>=1?1:0,Ie=o[j][1]>=1?1:0,Le=o[j][2]>=1?1:0,Oe=o[j][3]>=1?1:0,he=y-Q+c,be=v-se+c,F=A-_e+c,je=k-qe+c,Ee=y-V+2*c,Be=v-te+2*c,ze=A-ae+2*c,et=k-le+2*c,J=y-pe+3*c,P=v-Ie+3*c,w=A-Le+3*c,q=k-Oe+3*c,ne=y-1+4*c,re=v-1+4*c,oe=A-1+4*c,Ne=k-1+4*c,Te=m&255,Ue=f&255,it=M&255,Ae=b&255,Ye=a[Te+a[Ue+a[it+a[Ae]]]]%32,rt=a[Te+Q+a[Ue+se+a[it+_e+a[Ae+qe]]]]%32,lt=a[Te+V+a[Ue+te+a[it+ae+a[Ae+le]]]]%32,Ke=a[Te+pe+a[Ue+Ie+a[it+Le+a[Ae+Oe]]]]%32,gt=a[Te+1+a[Ue+1+a[it+1+a[Ae+1]]]]%32;let ct=.6-y*y-v*v-A*A-k*k;ct<0?u=0:(ct*=ct,u=ct*ct*this.dot4(r[Ye],y,v,A,k));let yt=.6-he*he-be*be-F*F-je*je;yt<0?h=0:(yt*=yt,h=yt*yt*this.dot4(r[rt],he,be,F,je));let Z=.6-Ee*Ee-Be*Be-ze*ze-et*et;Z<0?d=0:(Z*=Z,d=Z*Z*this.dot4(r[lt],Ee,Be,ze,et));let ke=.6-J*J-P*P-w*w-q*q;ke<0?p=0:(ke*=ke,p=ke*ke*this.dot4(r[Ke],J,P,w,q));let ue=.6-ne*ne-re*re-oe*oe-Ne*Ne;return ue<0?g=0:(ue*=ue,g=ue*ue*this.dot4(r[gt],ne,re,oe,Ne)),27*(u+h+d+p+g)}}class Di extends Zs{constructor(e,t,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Z_(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Wn(this.width,this.height,{type:oi}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new en({defines:Object.assign({},ca.defines),uniforms:Mi.clone(ca.uniforms),vertexShader:ca.vertexShader,fragmentShader:ca.fragmentShader,blending:En,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new n_,this.normalMaterial.blending=En,this.pdMaterial=new en({defines:Object.assign({},ha.defines),uniforms:Mi.clone(ha.uniforms),vertexShader:ha.vertexShader,fragmentShader:ha.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new en({defines:Object.assign({},ua.defines),uniforms:Mi.clone(ua.uniforms),vertexShader:ua.vertexShader,fragmentShader:ua.fragmentShader,blending:En}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new en({uniforms:Mi.clone(uo.uniforms),vertexShader:uo.vertexShader,fragmentShader:uo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Yl,blendDst:to,blendEquation:xi,blendSrcAlpha:ql,blendDstAlpha:to,blendEquationAlpha:xi}),this.blendMaterial=new en({uniforms:Mi.clone(Fl.uniforms),vertexShader:Fl.vertexShader,fragmentShader:Fl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ff,blendSrc:Yl,blendDst:to,blendEquation:xi,blendSrcAlpha:ql,blendDstAlpha:to,blendEquationAlpha:xi}),this.fsQuad=new $a(null),this.originalClearColor=new Re,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new _u,this.depthTexture.format=Vs,this.depthTexture.type=Gs,this.normalRenderTarget=new Wn(this.width,this.height,{minFilter:An,magFilter:An,type:oi,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Hd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Di.OUTPUT.Off:break;case Di.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=En,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Di.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=En,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Di.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=En,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Di.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Di.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=En,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Di.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=En,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){const t=new eM,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}const r=new Va(s,e,e,si,Fi);return r.wrapS=ki,r.wrapT=ki,r.needsUpdate=!0,r}}Di.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const tM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Nr extends Zs{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ce(e.x,e.y):new Ce(256,256),this.clearColor=new Re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Wn(r,o,{type:oi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Wn(r,o,{type:oi});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new Wn(r,o,{type:oi});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=tM;this.highPassUniforms=Mi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new en({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=uo;this.copyUniforms=Mi.clone(u.uniforms),this.blendMaterial=new en({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:li,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.basic=new Rt,this.fsQuad=new $a(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ce(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Nr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Nr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new en({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ce(.5,.5)},direction:{value:new Ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new en({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Nr.BlurDirectionX=new Ce(1,0);Nr.BlurDirectionY=new Ce(0,1);const nM={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class iM extends Zs{constructor(){super();const e=nM;this.uniforms=Mi.clone(e.uniforms),this.material=new t_({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new $a(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ct.getTransfer(this._outputColorSpace)===kt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Of?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Bf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ru?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Vf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Hf&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const sM={name:"WarmGrade",uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uTint:{value:new O(1,1,1)},uLift:{value:new O},uSat:{value:1.08}},vertexShader:`
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
    }`},rM=new URLSearchParams(location.search).get("ao")==="1";function oM(i,e,t,n={}){const s=new j_(i,new Wn(1,1,{type:oi})),r=new K_(e,t),o=new Di(e,t,1,1,void 0,{radius:.8,distanceExponent:1.3,thickness:1.4,scale:1.2,samples:12});o.blendIntensity=1;const a=new Nr(new Ce(256,256),.6,.55,1),l=new Vd(sM);n.tint&&l.uniforms.uTint.value.set(...n.tint),n.lift&&l.uniforms.uLift.value.set(...n.lift),n.sat&&(l.uniforms.uSat.value=n.sat),l.uniforms.uVignette.value=n.vignette??.25;const c=new iM;for(const g of[r,o,a,l,c])s.addPass(g);let u="high",h=1,d=1;const p={composer:s,get level(){return u},setLevel(g){u=g,o.enabled=g==="high"&&rM,a.strength=g==="high"?.6:.5;const _=g==="high"?4:0;for(const m of[s.renderTarget1,s.renderTarget2])m.samples!==_&&(m.samples=_,m.dispose());p.setSize(h,d)},setSize(g,_){h=g,d=_;const m=i.getPixelRatio();s.setPixelRatio(m),s.setSize(g,_);const f=u==="high"?2:4;a.resolution.set(g*m/f,_*m/f),a.setSize(g*m/f,_*m/f)},render(g){s.render(g)}};return p}function aM(i,e,t,n,s,r=null){const{heightAt:o}=e,a=t.mobile?.5:1,l=new Set(n.life),c=new Vt,u=new Re,h=[],d=()=>{for(let g=0;g<50;g++){const _=(Math.random()-.5)*80,m=(Math.random()-.5)*80,f=o(_,m);if(f>.8)return{x:_,z:m,h:f}}return{x:0,z:0,h:1}};if(l.has("butterflies")){const g=Math.round(26*a),_=new Hs(.16,6,0,Math.PI);_.scale(1,1.3,1);const f=[-1,1].map(()=>new Gt({color:"#ffffff",side:an})).map(x=>{const R=new pn(_,x,g);return i.add(R),R}),M=Array.from({length:g},(x,R)=>({...d(),a:Math.random()*6,sp:.6+Math.random()*.6,ph:Math.random()*6,home:null})),b=["#ffd84a","#ff9ad0","#9ad8ff","#ffffff","#ffa040"];M.forEach((x,R)=>{x.home={x:x.x,z:x.z},f.forEach(S=>S.setColorAt(R,u.set(b[R%b.length])))}),f.forEach(x=>x.instanceColor.needsUpdate=!0),h.push((x,R)=>{M.forEach((S,T)=>{S.a+=Math.sin(R*.7+S.ph)*1.6*x,S.x+=Math.cos(S.a)*S.sp*x,S.z+=Math.sin(S.a)*S.sp*x,Math.hypot(S.x-S.home.x,S.z-S.home.z)>5&&(S.a=Math.atan2(S.home.z-S.z,S.home.x-S.x));const C=o(S.x,S.z)+.6+Math.sin(R*2+S.ph)*.25,y=Math.sin(R*18+S.ph)*1.1;f.forEach((v,A)=>{c.position.set(S.x,C,S.z),c.rotation.set(0,-S.a+Math.PI/2,0),c.rotateZ((A?1:-1)*(.3+y*.5)),c.rotateX(-Math.PI/2),c.scale.set(A?1:-1,1,1),c.updateMatrix(),v.setMatrixAt(T,c.matrix)})}),f.forEach(S=>S.instanceMatrix.needsUpdate=!0)})}if(l.has("birds")){const _=new Lt;_.setAttribute("position",new st([-.7,.12,.1,0,0,-.15,0,0,.15,0,0,-.15,.7,.12,.1,0,0,.15],3)),_.computeVertexNormals();const m=new pn(_,new Gt({color:"#f4f4f0",side:an}),7);m.castShadow=!0,i.add(m);const f=Array.from({length:7},(M,b)=>({cx:(Math.random()-.5)*50,cz:(Math.random()-.5)*50,r:8+Math.random()*10,y:9+Math.random()*4,sp:.15+Math.random()*.1,ph:b}));h.push((M,b)=>{f.forEach((x,R)=>{const S=b*x.sp+x.ph;c.position.set(x.cx+Math.cos(S)*x.r,x.y+Math.sin(b*.7+R)*.4,x.cz+Math.sin(S)*x.r),c.rotation.set(0,-S,Math.sin(b*.5+R)*.15);const T=1+Math.sin(b*6+R)*.35*(Math.sin(b*.4+R)>.3?1:.1),C=r?bt.smoothstep(c.position.distanceTo(r.position),3,7):1;c.scale.set(1.4*C,T*1.4*C,1.4*C),c.updateMatrix(),m.setMatrixAt(R,c.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(l.has("leaves")){const g=Math.round(60*a),_=new ci(.16,.1),m=new pn(_,new Gt({color:"#ffffff",side:an}),g);i.add(m);const f=Array.from({length:g},(M,b)=>({...d(),ph:Math.random()*6,sp:1+Math.random()*1.5}));f.forEach((M,b)=>m.setColorAt(b,u.set(["#8fbf4a","#c8b04a","#6a9a3a","#d89a3a"][b%4]))),m.instanceColor.needsUpdate=!0,h.push((M,b)=>{f.forEach((x,R)=>{x.x+=x.sp*M,x.z+=Math.sin(b*.8+x.ph)*.6*M,x.x>45&&Object.assign(x,d(),{x:-45});const S=Math.max(o(x.x,x.z),.1)+.3+Math.abs(Math.sin(b*1.3+x.ph))*.9;c.position.set(x.x,S,x.z),c.rotation.set(b*3+x.ph,b*2+x.ph,b*1.5),c.scale.setScalar(1),c.updateMatrix(),m.setMatrixAt(R,c.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(l.has("fireflies")&&s==="skumring"){const g=Math.round(120*a),_=new Float32Array(g*3),m=new Float32Array(g*3),f=Array.from({length:g},()=>({...d(),ph:Math.random()*6})),M=new Lt;M.setAttribute("position",new Ut(_,3)),M.setAttribute("color",new Ut(m,3));const b=document.createElement("canvas");b.width=b.height=32;const x=b.getContext("2d"),R=x.createRadialGradient(16,16,0,16,16,16);R.addColorStop(0,"rgba(255,255,255,1)"),R.addColorStop(1,"rgba(255,255,255,0)"),x.fillStyle=R,x.fillRect(0,0,32,32);const S=new Ha(M,new Eo({size:.35,map:new ai(b),vertexColors:!0,transparent:!0,blending:li,depthWrite:!1}));S.frustumCulled=!1,i.add(S),h.push((T,C)=>{f.forEach((y,v)=>{_[v*3]=y.x+Math.sin(C*.4+y.ph)*1.2,_[v*3+1]=y.h+.5+Math.sin(C*.9+y.ph*2)*.4,_[v*3+2]=y.z+Math.cos(C*.35+y.ph)*1.2;const A=Math.max(0,Math.sin(C*1.7+y.ph*3))**3*2.5;m[v*3]=1*A,m[v*3+1]=.9*A,m[v*3+2]=.35*A}),M.attributes.position.needsUpdate=!0,M.attributes.color.needsUpdate=!0})}let p=0;return{update(g){const _=Math.min(.05,Math.max(0,g-p));p=g;for(const m of h)m(_,g)}}}function lM(i,{cell:e=.75,ext:t=68}={}){const n=Math.ceil(t*2/e)+1,s=new Float64Array(n*n),r=new Float32Array(n*n),o=new Float32Array(n*n),a=i.lighthouse.pos,l=(T,C)=>[Math.round((T+t)/e),Math.round((C+t)/e)],c=(T,C)=>[-t+T*e,-t+C*e];let u=()=>!1;function h(){for(let T=0;T<n;T++)for(let C=0;C<n;C++){const[y,v]=c(C,T),A=i.heightAt(y,v),k=T*n+C,L=Math.hypot(y-a.x,v-a.z);let U=1.8;A<-.5||i.slopeAt(y,v)>1.1||i.extras.blocks(y,v)||u(y,v)||L<3.2?U=1/0:i.pathDist(y,v)<1.6?U=.2:A<.05&&(U=2.6),r[k]=U}}function d(){s.fill(1/0),o.fill(0);const T=[],C=(A,k)=>{T.push([A,k]);let L=T.length-1;for(;L>0;){const U=L-1>>1;if(T[U][0]<=T[L][0])break;[T[U],T[L]]=[T[L],T[U]],L=U}},y=()=>{const A=T[0],k=T.pop();if(T.length){T[0]=k;let L=0;for(;;){const U=2*L+1,X=U+1;let B=L;if(U<T.length&&T[U][0]<T[B][0]&&(B=U),X<T.length&&T[X][0]<T[B][0]&&(B=X),B===L)break;[T[B],T[L]]=[T[L],T[B]],L=B}}return A};for(let A=0;A<n;A++)for(let k=0;k<n;k++){const[L,U]=c(k,A),X=Math.hypot(L-a.x,U-a.z);X>=3.2&&X<4.2&&r[A*n+k]<1/0&&(s[A*n+k]=0,C(0,A*n+k))}const v=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;T.length;){const[A,k]=y();if(A>s[k])continue;const L=k%n,U=k/n|0;for(const[X,B,z]of v){const I=L+X,j=U+B;if(I<0||j<0||I>=n||j>=n)continue;const Q=j*n+I,se=r[Q];if(se===1/0)continue;const _e=A+z*e*(se+r[k])*.5;_e<s[Q]&&(s[Q]=_e,o[Q]=o[k]+z*e,C(_e,Q))}}}const p=(T,C)=>{const[y,v]=l(T,C);return y<0||v<0||y>=n||v>=n?1/0:s[v*n+y]};function g(T,C){const[y,v]=l(T,C);let A=p(T,C),k=0,L=0;for(let X=-1;X<=1;X++)for(let B=-1;B<=1;B++){if(!B&&!X)continue;const z=y+B,I=v+X;if(z<0||I<0||z>=n||I>=n)continue;const j=s[I*n+z];j<A&&(A=j,k=B,L=X)}const U=Math.hypot(k,L)||1;return[k/U,L/U,A]}const _=(T,C)=>{const[y,v]=l(T,C);return y<0||v<0||y>=n||v>=n?-1:v*n+y},m=(T,C)=>{const y=_(T,C);return y<0||s[y]===1/0?0:o[y]};function f(){const T=[];for(const C of i.paths){const y=C.samples.find(v=>i.heightAt(v.x,v.z)>-.4&&m(v.x,v.z)>0);y&&T.push([y.x,y.z])}return T}function M(T,C=22,{near:y=8,minFrac:v=.6}={}){const A=f(),k=Math.max(0,...A.map(([B,z])=>m(B,z))),L=(B,z)=>{const I=i.heightAt(B,z);return I>-.4&&I<.15&&[[4,0],[-4,0],[0,4],[0,-4],[3,3],[-3,3],[3,-3],[-3,-3]].some(([j,Q])=>i.heightAt(B+j,z+Q)<-.9)},U=A.map(([B,z])=>{const I=[],j=[],Q=Math.ceil(y/e),[se,_e]=l(B,z);for(let V=-Q;V<=Q;V++)for(let te=-Q;te<=Q;te++){const[ae,le]=c(se+te,_e+V);Math.hypot(ae-B,le-z)>y||m(ae,le)<v*k||(L(ae,le)?I.push([ae,le]):i.heightAt(ae,le)>.3&&i.slopeAt(ae,le)<.6&&j.push([ae,le]))}return(I.length?I:j).sort(()=>Math.random()-.5)}).filter(B=>B.length).sort(()=>Math.random()-.5),X=[];for(let B=0;X.length<T&&B<4;B++){for(const z of U){const I=z.find(j=>X.every(Q=>Math.hypot(Q[0]-j[0],Q[1]-j[1])>C));if(I&&X.push(I),X.length>=T)break}C=Math.min(C,6)}return X}let b=null;function x(T,C){if(!b){b=new Float32Array(n*n);for(let B=0;B<n;B++)for(let z=0;z<n;z++){const[I,j]=c(z,B);b[B*n+z]=i.isWalkable(I,j)?i.heightAt(I,j)<.05?1.6:1:1/0}}const y=new Float64Array(n*n).fill(1/0),v=[],A=(B,z)=>{v.push([B,z]);let I=v.length-1;for(;I>0;){const j=I-1>>1;if(v[j][0]<=v[I][0])break;[v[j],v[I]]=[v[I],v[j]],I=j}},k=()=>{const B=v[0],z=v.pop();if(v.length){v[0]=z;let I=0;for(;;){const j=2*I+1,Q=j+1;let se=I;if(j<v.length&&v[j][0]<v[se][0]&&(se=j),Q<v.length&&v[Q][0]<v[se][0]&&(se=Q),se===I)break;[v[se],v[I]]=[v[I],v[se]],I=se}}return B},L=_(T,C);if(L<0)return null;y[L]=0,A(0,L);const U=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;v.length;){const[B,z]=k();if(B>y[z])continue;const I=z%n,j=z/n|0;for(const[Q,se,_e]of U){const qe=I+Q,V=j+se;if(qe<0||V<0||qe>=n||V>=n)continue;const te=V*n+qe,ae=b[te];if(ae===1/0)continue;const le=B+_e*e*ae;le<y[te]&&(y[te]=le,A(le,te))}}const X=(B,z)=>{const I=_(B,z);return I<0?1/0:y[I]};return{at:X,dir(B,z){const[I,j]=l(B,z);let Q=X(B,z),se=0,_e=0;for(let V=-1;V<=1;V++)for(let te=-1;te<=1;te++){if(!te&&!V)continue;const ae=I+te,le=j+V;ae<0||le<0||ae>=n||le>=n||y[le*n+ae]<Q&&(Q=y[le*n+ae],se=te,_e=V)}const qe=Math.hypot(se,_e)||1;return[se/qe,_e/qe]}}}const R=()=>{let T=0;for(const C of s)C<1/0&&C>T&&(T=C);return T},S=()=>{h(),d()};return S(),{at:p,dir:g,coastPoints:M,roadEnds:f,routeLen:m,walkField:x,rebuild:S,setBlock(T){u=T,S()},maxDist:R(),N:n,cell:e}}function Wd(i,e=700,{blending:t=li,size:n=.55,opacity:s=1,fadeTo:r=null}={}){const o=new Re(r||"#000000"),a=new Float32Array(e*3),l=new Float32Array(e*3),c=new Float32Array(e*3),u=new Float32Array(e*3),h=new Float32Array(e),d=new Float32Array(e),p=new Float32Array(e);let g=0;const _=new Lt;_.setAttribute("position",new Ut(a,3)),_.setAttribute("color",new Ut(l,3));const m=document.createElement("canvas");m.width=m.height=64;const f=m.getContext("2d"),M=f.createRadialGradient(32,32,0,32,32,32);M.addColorStop(0,"rgba(255,255,255,1)"),M.addColorStop(.4,"rgba(255,255,255,0.6)"),M.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=M,f.fillRect(0,0,64,64);const b=new Eo({size:n,map:new ai(m),vertexColors:!0,transparent:!0,opacity:s,blending:t,depthWrite:!1}),x=new Ha(_,b);x.frustumCulled=!1,i.add(x);for(let C=0;C<e;C++)a[C*3+1]=-999;const R=new Re;function S(C,y,v,{n:A=10,color:k="#ffb347",speed:L=4,up:U=3,life:X=.7,gravity:B=9,spread:z=1}={}){R.set(k);for(let I=0;I<A;I++){const j=g;g=(g+1)%e,a[j*3]=C,a[j*3+1]=y,a[j*3+2]=v;const Q=Math.random()*Math.PI*2,se=L*(.4+Math.random()*.6)*z;c[j*3]=Math.cos(Q)*se,c[j*3+1]=U*(.5+Math.random()),c[j*3+2]=Math.sin(Q)*se,u[j*3]=R.r,u[j*3+1]=R.g,u[j*3+2]=R.b,d[j]=h[j]=X*(.6+Math.random()*.6),p[j]=B}}function T(C){for(let y=0;y<e;y++){if(h[y]<=0)continue;if(h[y]-=C,h[y]<=0){a[y*3+1]=-999,l[y*3]=l[y*3+1]=l[y*3+2]=0;continue}c[y*3+1]-=p[y]*C,a[y*3]+=c[y*3]*C,a[y*3+1]+=c[y*3+1]*C,a[y*3+2]+=c[y*3+2]*C;const v=h[y]/d[y];l[y*3]=u[y*3]*v+o.r*(1-v),l[y*3+1]=u[y*3+1]*v+o.g*(1-v),l[y*3+2]=u[y*3+2]*v+o.b*(1-v)}_.attributes.position.needsUpdate=!0,_.attributes.color.needsUpdate=!0}return{emit:S,update:T}}const cM={xbox:{build:"Ⓐ",carry:"Ⓑ",next:"Ⓨ",sel:"LB/RB",pause:"☰",restart:"View",name:"Xbox"},ps:{build:"✕",carry:"○",next:"△",sel:"L1/R1",pause:"Options",restart:"Select",name:"PlayStation"},ps3:{build:"✕",carry:"○",next:"△",sel:"L1/R1",pause:"Start",restart:"Select",name:"PlayStation 3"},switch:{build:"A",carry:"B",next:"X",sel:"L/R",pause:"+",restart:"−",name:"Switch"}},uM={build:"B",carry:"E",next:"N",sel:"Z/X",pause:"Esc",restart:"R",name:"Tastatur"},hM={build:"Bygg",carry:"Bær",next:"Neste bølge",sel:"",pause:"⏸",restart:"⏸ → ↺",name:"Berøring"};function fM(i=""){const e=i.toLowerCase();return/nintendo|pro controller|joy-con|joycon|057e/.test(e)?"switch":/0268|playstation\(r\)\s*3|ps3/.test(e)?"ps3":/playstation|dualshock|dualsense|wireless controller|054c|sony/.test(e)?"ps":"xbox"}function dM(i=""){const e=i.toLowerCase();return/0268|playstation\(r\)\s*3|ps3/.test(e)?"PS3 (DualShock 3)":/0ce6|0df2|dualsense/.test(e)?"PS5 (DualSense)":/05c4|09cc|0ba0|dualshock\s*4/.test(e)?"PS4 (DualShock 4)":/playstation|wireless controller|054c|sony/.test(e)?"PlayStation":/xbox|xinput|045e/.test(e)?"Xbox":/nintendo|pro controller|057e/.test(e)?"Switch Pro":/joy-con|joycon/.test(e)?"Joy-Con":"Spillkontroll"}const us={evdev:{btn:[0,1,3,2,4,5,6,7,8,9,11,12],home:10,hat:[6,7],look:3},ds3:{btn:[0,1,3,2,4,5,6,7,8,9,11,12],home:10,dpad:[13,14,15,16],look:3},ds3old:{btn:[14,13,15,12,10,11,8,9,0,3,1,2],home:16,dpad:[4,6,7,5],look:2},dinput:{btn:[0,1,2,3,4,5,6,7,8,9,10,11],home:12,hat9:!0,look:2}};function pM(i,e=[]){return i.mapping==="standard"?null:/0268|playstation\(r\)\s*3/i.test(i.id)?i.axes.length>8?us.ds3old:us.ds3:Math.abs(e[9]??0)>1.1?us.dinput:i.axes.length>=8?us.evdev:us.dinput}function mM(i){if(i===void 0||i>1.1||i<-1.1)return[!1,!1,!1,!1];const e=Math.round((i+1)*3.5)%8;return[e===7||e<=1,e>=3&&e<=5,e>=5&&e<=7,e>=1&&e<=3]}function gM(i,e=[]){const t=i.buttons.map(a=>!!a&&(a.pressed||a.value>.5)),n=pM(i,e);if(!n)return{down:t,axes:[i.axes[0]||0,i.axes[1]||0,i.axes[2]||0,i.axes[3]||0],layout:"standard"};const s=n.btn.map(a=>!!t[a]);let r=[!1,!1,!1,!1];if(n.dpad)r=n.dpad.map(a=>!!t[a]);else if(n.hat&&i.axes.length>n.hat[1]){const a=i.axes[n.hat[0]],l=i.axes[n.hat[1]];r=[l<-.5,l>.5,a<-.5,a>.5]}else n.hat9&&(r=mM(i.axes[9]));s.push(...r,!!t[n.home]);const o=a=>Math.abs(e[a]??0)>.5?0:i.axes[a]||0;return{down:s,axes:[o(0),o(1),o(n.look),o(n.look+1)],layout:n===us.evdev?"evdev":n===us.ds3?"ds3":n===us.ds3old?"ds3old":"dinput"}}function vM(i){const e=i==="switch";return{build:e?1:0,carry:e?0:1,next:3,prev:4,nextSel:5,zoomOut:6,zoomIn:7,pause:9,back:8}}function xM(i){const e=new Set,t={move:{x:0,z:0},look:0,lookDelta:0,zoom:1,pressed:new Set,rollMode:!1,clicks:[],device:matchMedia("(pointer: coarse)").matches?"touch":"kb",padKind:"xbox",padId:""},n=v=>t.pressed.add(v),s=v=>{t.device=v};addEventListener("keydown",v=>{if(s("kb"),(v.code==="Space"||v.code.startsWith("Arrow")||v.code==="Tab")&&v.preventDefault(),v.repeat)return;if(t.rollMode){const k={ArrowUp:"rU",KeyW:"rU",ArrowRight:"rR",KeyD:"rR",ArrowDown:"rD",KeyS:"rD",ArrowLeft:"rL",KeyA:"rL",Escape:"rollExit",KeyQ:"rollExit"}[v.code];if(k){n(k);return}}e.add(v.code);const A={KeyE:"carry",Space:"carry",KeyB:"build",Digit1:"b1",Digit2:"b2",Digit3:"b3",Digit4:"b4",Digit5:"b5",Digit6:"b6",Digit7:"b7",Numpad1:"b1",Numpad2:"b2",Numpad3:"b3",Numpad4:"b4",Numpad5:"b5",Numpad6:"b6",Numpad7:"b7",KeyZ:"selPrev",KeyX:"selNext",KeyQ:"selPrev",KeyR:"restart",KeyN:"next",Enter:"next",KeyF:"fps",KeyM:"music",Escape:"pause",KeyP:"pause"};A[v.code]&&n(A[v.code])}),addEventListener("keyup",v=>e.delete(v.code)),addEventListener("blur",()=>e.clear()),i.addEventListener("wheel",v=>{v.preventDefault(),s("kb"),t.zoom=fa(t.zoom*(v.deltaY>0?1.08:1/1.08),.55,4.5)},{passive:!1}),i.addEventListener("contextmenu",v=>v.preventDefault());const r=new Map;let o=0,a=1,l=null;const c=v=>({x:v.clientX/innerWidth*2-1,y:-(v.clientY/innerHeight)*2+1});i.addEventListener("pointerdown",v=>{if(s(v.pointerType==="touch"?"touch":"kb"),v.pointerType==="mouse"&&v.button===2){l={x:v.clientX},i.setPointerCapture(v.pointerId);return}v.pointerType==="mouse"&&v.button!==0||(r.set(v.pointerId,{e:v,t:performance.now(),x0:v.clientX,y0:v.clientY}),r.size===2&&(o=gf(r),a=t.zoom))}),i.addEventListener("pointermove",v=>{if(l){t.lookDelta+=(v.clientX-l.x)*.008,l.x=v.clientX;return}const A=r.get(v.pointerId);A&&(A.e=v,r.size===2&&o>0&&(t.zoom=fa(a*(o/gf(r)),.55,4.5)))});const u=v=>{if(l&&v.button===2){l=null;return}const A=r.get(v.pointerId);A&&r.size===1&&o===0&&Math.hypot(v.clientX-A.x0,v.clientY-A.y0)<12&&t.clicks.push(c(v)),r.delete(v.pointerId),r.size<2&&(o=0)};i.addEventListener("pointerup",u),i.addEventListener("pointercancel",v=>{r.delete(v.pointerId),l=null,o=0});const h=document.getElementById("stick"),d=document.getElementById("knob"),p={x:0,z:0};let g=null;const _=v=>{const A=h.getBoundingClientRect();let k=v.clientX-(A.left+A.width/2),L=v.clientY-(A.top+A.height/2);const U=A.width/2,X=Math.hypot(k,L);X>U&&(k*=U/X,L*=U/X),d.style.transform=`translate(${k}px, ${L}px)`;const B=X/U<.15?0:1;p.x=k/U*B,p.z=L/U*B};h.addEventListener("pointerdown",v=>{s("touch"),g=v.pointerId,h.setPointerCapture(v.pointerId),_(v)}),h.addEventListener("pointermove",v=>{v.pointerId===g&&_(v)});const m=v=>{v.pointerId===g&&(g=null,p.x=p.z=0,d.style.transform="")};h.addEventListener("pointerup",m),h.addEventListener("pointercancel",m);const f=(v,A)=>v.addEventListener("pointerdown",k=>{k.preventDefault(),k.stopPropagation(),k.pointerType==="touch"&&s("touch"),n(A)});f(document.getElementById("btn-build"),"build"),f(document.getElementById("btn-carry"),"carry"),f(document.getElementById("btn-next"),"next"),f(document.getElementById("btn-pause"),"pause"),document.querySelectorAll("#build-panel button").forEach((v,A)=>f(v,"b"+(A+1))),document.querySelectorAll("#rollpad [data-r]").forEach(v=>f(v,v.dataset.r)),f(document.getElementById("btn-rollexit"),"rollExit");let M=[],b=null,x={dir:null,t:0,rep:0},R=0,S=0;t.padSeen=!1,t.onPad=null;const T=v=>{var A;b=v?v.axes.slice():null,M=[],v&&(t.padId=v.id,t.padKind=fM(v.id),t.padSeen=!0,(A=t.onPad)==null||A.call(t,"connect",v.id))};addEventListener("gamepadconnected",v=>{v.gamepad.id!==t.padId&&T(v.gamepad)}),addEventListener("gamepaddisconnected",v=>{var A;v.gamepad.id===t.padId&&(t.padId="",b=null,(A=t.onPad)==null||A.call(t,"disconnect",v.gamepad.id),t.device==="pad"&&(t.device=matchMedia("(pointer: coarse)").matches?"touch":"kb"))});let C=null;function y(v){var ae,le;let A=[];try{A=navigator.getGamepads?[...navigator.getGamepads()]:[]}catch{A=[]}const k=A.find(pe=>pe&&pe.connected&&pe.id===t.padId)||A.find(pe=>pe&&pe.connected);if(C=k||null,!k)return null;(k.id!==t.padId||!b)&&T(k);const L=vM(t.padKind),{down:U,axes:X}=gM(k,b),B=M,z=pe=>U[pe]&&!B[pe],I=pe=>Math.abs(pe)<.2?0:(pe-Math.sign(pe)*.2)/.8;let j=I(X[0]),Q=I(X[1]);const se=U[14]?-1:U[15]?1:0,_e=U[12]?-1:U[13]?1:0;se&&(j=se),_e&&(Q=_e);const qe=I(X[2]);if((j||Q||qe||U.some(Boolean))&&s("pad"),M=U,(ae=t.menu)==null?void 0:ae.root()){const pe=_e<0||X[1]<-.6?"up":_e>0||X[1]>.6?"down":se<0||X[0]<-.6?"left":se>0||X[0]>.6?"right":null;return pe!==x.dir?(x={dir:pe,t:0,rep:0},pe&&t.menu.move(pe)):pe&&(x.t+=v,x.t>.4+x.rep*.15&&(x.rep++,t.menu.move(pe))),z(L.build)&&t.menu.ok(),z(L.carry)&&t.menu.back(),z(L.pause)&&n("pause"),z(L.back)&&n("restart"),{x:0,z:0,look:0,zoomIn:!1,zoomOut:!1}}return x.dir=null,t.rollMode?(z(12)&&n("rU"),z(15)&&n("rR"),z(13)&&n("rD"),z(14)&&n("rL"),z(L.carry)&&n("rollExit"),S=Math.hypot(X[0],X[1])>.6?S+v:0,S>=.3&&(S=0,n("rollExit")),z(L.pause)&&n("pause"),{x:0,z:0,look:qe,zoomIn:U[L.zoomIn],zoomOut:U[L.zoomOut]}):(S=0,(le=t.panelOpen)!=null&&le.call(t)&&se?(z(14)&&n("selPrev"),z(15)&&n("selNext"),R+=v,R<.25&&!I(X[0])&&(j=0)):R=0,z(L.build)&&n("build"),z(L.carry)&&n("carry"),z(L.next)&&n("next"),z(L.prev)&&n("selPrev"),z(L.nextSel)&&n("selNext"),z(L.pause)&&n("pause"),z(L.back)&&n("restart"),z(2)&&t.padKind!=="switch"&&n("next"),{x:j,z:Q,look:qe,zoomIn:U[L.zoomIn],zoomOut:U[L.zoomOut]})}return t.rumble=(v=200,A=.6)=>{var k,L,U,X;if(!(!C||t.device!=="pad"))try{(k=C.vibrationActuator)!=null&&k.playEffect?C.vibrationActuator.playEffect("dual-rumble",{duration:v,strongMagnitude:A,weakMagnitude:A/2}):(X=(U=(L=C.hapticActuators)==null?void 0:L[0])==null?void 0:U.pulse)==null||X.call(U,A,v)}catch{}},t.update=v=>{let A=0,k=0;(e.has("KeyA")||e.has("ArrowLeft"))&&(A-=1),(e.has("KeyD")||e.has("ArrowRight"))&&(A+=1),(e.has("KeyW")||e.has("ArrowUp"))&&(k-=1),(e.has("KeyS")||e.has("ArrowDown"))&&(k+=1);const L=y(v);L&&(L.x||L.z)&&(A=L.x,k=L.z),(p.x||p.z)&&(A=p.x,k=p.z);const U=Math.hypot(A,k);U>1&&(A/=U,k/=U),t.move.x=A,t.move.z=k,t.look=t.lookDelta+(L?L.look*2.2*v:0),t.lookDelta=0,L!=null&&L.zoomIn&&(t.zoom=fa(t.zoom/(1+v*1.2),.55,4.5)),L!=null&&L.zoomOut&&(t.zoom=fa(t.zoom*(1+v*1.2),.55,4.5))},t.labels=()=>t.device==="pad"?cM[t.padKind]:t.device==="touch"?hM:uM,t.consume=v=>t.pressed.delete(v),t.clear=()=>{t.pressed.clear(),t.clicks.length=0},t}const fa=(i,e,t)=>Math.max(e,Math.min(t,i));function gf(i){const[e,t]=[...i.values()].map(n=>n.e);return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)||1}const ii=i=>document.getElementById(i),_M=["btn-start","btn-again","btn-yes","btn-resume","btn-portrait"];function MM(i){let e=null;const t=u=>u&&!u.classList.contains("hidden")&&getComputedStyle(u).display!=="none";function n(){return t(ii("rotate"))?ii("rotate"):t(ii("pause"))?t(ii("confirm"))?ii("confirm"):ii("pause"):t(ii("overlay"))?ii("overlay"):null}const s=u=>[...u.querySelectorAll("button, input[type=range]")].filter(h=>!h.disabled&&h.offsetParent!==null&&!h.closest(".hidden")&&(u.id==="confirm"||!h.closest("#confirm")));function r(u){var h;e&&e!==u&&e.classList.remove("pad-focus"),e=u,u&&i.device==="pad"&&(u.classList.add("pad-focus"),(h=u.scrollIntoView)==null||h.call(u,{block:"nearest"}))}function o(){const u=n();if(!u)return e&&(e.classList.remove("pad-focus"),e=null),null;const h=s(u);return(!e||!h.includes(e))&&r(_M.map(d=>h.find(p=>p.id===d)).find(Boolean)||h[0]||null),e&&e.classList.toggle("pad-focus",i.device==="pad"),u}function a(u){const h=o();if(!h||!e)return;if(e.type==="range"&&(u==="left"||u==="right")){e.value=String(Math.max(0,Math.min(100,+e.value+(u==="left"?-10:10)))),e.dispatchEvent(new Event("input",{bubbles:!0}));return}const d=e.getBoundingClientRect(),p=d.left+d.width/2,g=d.top+d.height/2,[_,m]={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]}[u];let f=null,M=1/0,b=!1;for(const x of s(h)){if(x===e)continue;const R=x.getBoundingClientRect(),S=R.left+R.width/2-p,T=R.top+R.height/2-g,C=S*_+T*m,y=Math.abs(S*m-T*_);if(C<=4)continue;const v=y<=C,A=C+y*2;(v&&!b||v===b&&A<M)&&(M=A,f=x,b=v)}f&&r(f)}function l(){!o()||!e||e.type==="range"||e.click()}function c(){const u=o();u&&(u.id==="confirm"?ii("btn-no").click():u.id==="pause"&&(t(ii("lex"))?ii("lex").classList.add("hidden"):ii("btn-resume").click()))}return{root:()=>o(),move:a,ok:l,back:c,sync:o,get focused(){return e}}}let $t=null,wr=null,bo=null;function yM(){if($t){$t.resume();return}const i=window.AudioContext||window.webkitAudioContext;if(!i)return;$t=new i,wr=$t.createGain(),wr.gain.value=.5,wr.connect($t.destination),bo=$t.createBuffer(1,$t.sampleRate*2,$t.sampleRate);const e=bo.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1;bM()}const Xd=()=>$t?{ctx:$t,noiseBuf:bo}:null;function Jt(i,e,{type:t="sine",vol:n=.2,slide:s=0,delay:r=0}={}){if(!$t)return;const o=$t.currentTime+r,a=$t.createOscillator(),l=$t.createGain();a.type=t,a.frequency.setValueAtTime(i,o),s&&a.frequency.exponentialRampToValueAtTime(Math.max(30,i+s),o+e),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(n,o+.01),l.gain.exponentialRampToValueAtTime(1e-4,o+e),a.connect(l).connect(wr),a.start(o),a.stop(o+e+.02)}function qi(i,{vol:e=.3,freq:t=800,q:n=.7,delay:s=0}={}){if(!$t)return;const r=$t.currentTime+s,o=$t.createBufferSource();o.buffer=bo;const a=$t.createBiquadFilter();a.type="lowpass",a.frequency.value=t,a.Q.value=n;const l=$t.createGain();l.gain.setValueAtTime(e,r),l.gain.exponentialRampToValueAtTime(1e-4,r+i),o.connect(a).connect(l).connect(wr),o.start(r,Math.random()),o.stop(r+i+.02)}function bM(){const i=$t.createBufferSource();i.buffer=bo,i.loop=!0;const e=$t.createBiquadFilter();e.type="lowpass",e.frequency.value=420;const t=$t.createGain();t.gain.value=.035;const n=$t.createOscillator(),s=$t.createGain();n.frequency.value=.12,s.gain.value=.03,n.connect(s).connect(t.gain),i.connect(e).connect(t).connect(wr),i.start(),n.start()}let vf=0;const At={pickup(){if(!$t)return;const i=$t.currentTime,e=i-vf<.4?1.12:1;vf=i,Jt(880*e+Math.random()*60,.12,{type:"triangle",vol:.12}),Jt(1320*e,.1,{type:"sine",vol:.06,delay:.04})},puff(){qi(.18,{vol:.07,freq:600,q:.3}),Jt(240,.12,{vol:.04,slide:-60})},crunch(){for(let i=0;i<4;i++)qi(.05,{vol:.1,freq:3500,delay:i*.03});Jt(130,.18,{vol:.08,slide:-40})},skank(){[[392,494,587],[349,440,523]][Math.random()<.5?0:1].forEach(i=>Jt(i,.11,{type:"square",vol:.025})),Jt(98,.3,{vol:.08})},chill(){Jt(330,.5,{type:"sine",vol:.07,slide:160}),Jt(495,.45,{type:"triangle",vol:.04,slide:120,delay:.08})},shoot(){Jt(520,.07,{type:"square",vol:.03,slide:-300})},mortar(){qi(.12,{vol:.12,freq:500}),Jt(160,.15,{type:"sine",vol:.12,slide:-80})},boom(){qi(.45,{vol:.28,freq:380}),Jt(90,.35,{vol:.18,slide:-50})},horn(){Jt(196,.5,{type:"sawtooth",vol:.035}),Jt(147,.55,{type:"sine",vol:.06})},hit(){qi(.05,{vol:.08,freq:2500})},die(){Jt(420,.18,{type:"triangle",vol:.09,slide:-280}),qi(.12,{vol:.07,freq:1200})},build(){[392,494,587].forEach((i,e)=>Jt(i,.25,{type:"triangle",vol:.1,delay:e*.06}))},upgrade(){[523,659,784,1047].forEach((i,e)=>Jt(i,.22,{type:"triangle",vol:.1,delay:e*.07}))},bonk(){Jt(110,.16,{type:"sine",vol:.12,slide:-40}),qi(.05,{vol:.05,freq:400})},tick(i=1){qi(.025,{vol:.06,freq:4e3}),Jt(392*Math.pow(2,i/12*2),.07,{type:"triangle",vol:.07})},stone(){Jt(660,.2,{type:"sine",vol:.1,slide:200})},lose(){Jt(220,.6,{type:"sawtooth",vol:.06,slide:-120}),qi(.3,{vol:.08,freq:300})},stun(){Jt(700,.4,{type:"square",vol:.05,slide:-500})},deny(){Jt(150,.12,{type:"square",vol:.05})},wave(){[330,330,440].forEach((i,e)=>Jt(i,.3,{type:"sawtooth",vol:.04,delay:e*.18}))},win(){[523,659,784,1047,1319].forEach((i,e)=>Jt(i,.4,{type:"triangle",vol:.12,delay:e*.12}))}},Wc=172,Yi=60/Wc/4,Cs=i=>440*Math.pow(2,(i-69)/12),xf={tak:{chords:[[50,66,69,73,76],[47,62,66,69,74],[43,59,62,66,71],[45,61,64,69,73]],hook:[[0,78,3],[3,76,3],[6,73,2],[8,74,4],[14,71,2],[16,73,3],[19,74,3],[22,76,6],[28,69,4]],pad:"sawtooth",padCut:2400,arpOct:12,reeseDetune:9,drive:0,space:.35,arpRate:1,lead:"square"},vinter:{chords:[[45,60,64,71,76],[41,57,64,69,72],[48,64,67,72,79],[43,59,62,67,71]],hook:[[0,76,6],[6,74,2],[8,72,6],[16,71,4],[20,72,2],[22,74,4],[26,79,6]],pad:"triangle",padCut:1500,arpOct:24,reeseDetune:6,drive:0,space:.6,arpRate:2,lead:"triangle"},vulkan:{chords:[[40,55,59,64,67],[41,57,60,65,69],[40,55,59,64,71],[38,54,57,62,66]],hook:[[0,64,2],[2,65,2],[4,64,4],[10,62,2],[12,59,4],[16,64,2],[18,67,2],[20,65,4],[26,64,6]],pad:"sawtooth",padCut:900,arpOct:0,reeseDetune:16,drive:.6,space:.25,arpRate:1,lead:"sawtooth"}},Ol={A:{k:"x.x.......xx....x.x.......x.....",s:"....x..x.x..x..x....x..x.x..x.x.",g:"..........x...........x.....x..."},B:{k:"x.....x...x.x...x.x...x...x.....",s:"....x.x..x..x.x.....x..xx..x..x.",g:".x.......x.....x.x.......x......"},FILL:{k:"x.x.......x.....x...............",s:"....x..x.x..x..x....x.xxxxxxxxxx",g:"................................"}},_f=[["build",8],["drop",16],["break",8],["drop",16]];function SM(i,e,t){const n=xf[t]||xf.tak,s=i.createDynamicsCompressor();s.threshold.value=-18,s.ratio.value=3,s.attack.value=.01,s.release.value=.2;const r=i.createDynamicsCompressor();r.threshold.value=-3,r.ratio.value=20,r.attack.value=.002,r.release.value=.08;const o=i.createGain();o.gain.value=0,s.connect(r).connect(o).connect(i.destination);const a=i.createAnalyser();a.fftSize=1024,o.connect(a);const l={};for(const J of["drums","bass","pad","arp","lead"]){const P=i.createGain();P.gain.value=0,P.connect(s),l[J]=P}const c={};for(const J of["pad","bass"]){const P=i.createGain();P.gain.value=1,P.connect(l[J]),c[J]=P}const u=(J,P)=>{const w=i.createBuffer(2,Math.floor(i.sampleRate*J),i.sampleRate);for(let q=0;q<2;q++){const ne=w.getChannelData(q);for(let re=0;re<ne.length;re++)ne[re]=(Math.random()*2-1)*Math.pow(1-re/ne.length,P)}return w},h=i.createConvolver();h.buffer=u(2.4,2.5);const d=i.createGain();d.gain.value=n.space,h.connect(d).connect(s);const p=i.createConvolver();p.buffer=u(.5,.4);const g=i.createGain();g.gain.value=0,p.connect(g).connect(l.drums);const _=i.createDelay(1);_.delayTime.value=Yi*3;const m=i.createGain();m.gain.value=.38;const f=i.createBiquadFilter();f.type="lowpass",f.frequency.value=2400;const M=i.createStereoPanner(),b=i.createOscillator(),x=i.createGain();b.frequency.value=Wc/60/3,x.gain.value=.8,b.connect(x).connect(M.pan),b.start(),_.connect(f).connect(m).connect(_),f.connect(M).connect(l.arp);const R=i.createBiquadFilter();R.type="highpass",R.frequency.value=180;const S=i.createBiquadFilter();S.type="lowpass",S.frequency.value=n.padCut,S.Q.value=2;const T=i.createOscillator(),C=i.createGain();T.frequency.value=.07,C.gain.value=n.padCut*.45,T.connect(C).connect(S.frequency),T.start();const y=i.createDelay(.05);y.delayTime.value=.014;const v=i.createOscillator(),A=i.createGain();v.frequency.value=.5,A.gain.value=.004,v.connect(A).connect(y.delayTime),v.start();const k=i.createStereoPanner();k.pan.value=.6,R.connect(S),S.connect(c.pad),S.connect(y).connect(k).connect(c.pad),S.connect(h);const L=i.createBiquadFilter();L.type="lowpass",L.frequency.value=420,L.Q.value=6;const U=i.createOscillator(),X=i.createGain();if(U.frequency.value=Wc/60/4,X.gain.value=260,U.connect(X).connect(L.frequency),U.start(),n.drive>0){const J=i.createWaveShaper(),P=new Float32Array(1024);for(let w=0;w<1024;w++){const q=w/512-1;P[w]=Math.tanh(q*(1+n.drive*6))}J.curve=P,L.connect(J).connect(c.bass)}else L.connect(c.bass);const B=i.createBiquadFilter();B.type="lowpass",B.frequency.value=3600,B.Q.value=3,B.connect(l.lead),B.connect(_),B.connect(h);const z=(J,P,w,q,ne,re)=>{J.gain.setValueAtTime(1e-4,P),J.gain.exponentialRampToValueAtTime(q,P+w),J.gain.setValueAtTime(q,P+Math.max(w,re-ne)),J.gain.exponentialRampToValueAtTime(1e-4,P+re)},I=(J,P)=>{const w=i.createStereoPanner();return w.pan.value=P,J.connect(w),w},j=(J,P,w,q,ne,re,oe="bandpass",Ne=0)=>{const Te=i.createBufferSource();Te.buffer=e;const Ue=i.createBiquadFilter();Ue.type=oe,Ue.frequency.value=w,Ue.Q.value=q;const it=i.createGain();z(it,J,.001,ne,P*.8,P),Te.connect(Ue).connect(it);const Ae=Ne?I(it,Ne):it;for(const Ye of re)Ae.connect(Ye);Te.start(J,Math.random()*1.5),Te.stop(J+P+.02)},Q=(J,P=1)=>{const w=i.createOscillator(),q=i.createGain();w.frequency.setValueAtTime(160,J),w.frequency.exponentialRampToValueAtTime(44,J+.11),z(q,J,.002,1*P,.2,.3),w.connect(q).connect(l.drums),w.start(J),w.stop(J+.32),j(J,.012,3500,.7,.35*P,[l.drums],"highpass");for(const ne of Object.values(c))ne.gain.cancelScheduledValues(J),ne.gain.setValueAtTime(.35,J),ne.gain.linearRampToValueAtTime(1,J+.2)},se=(J,P=1)=>{j(J,.17,1900,.8,.5*P,[l.drums,p]);for(const[w,q,ne]of[[200,160,.3],[340,260,.14]]){const re=i.createOscillator(),oe=i.createGain();re.type="triangle",re.frequency.setValueAtTime(w,J),re.frequency.exponentialRampToValueAtTime(q,J+.08),z(oe,J,.001,ne*P,.06,.11),re.connect(oe).connect(l.drums),re.start(J),re.stop(J+.13)}g.gain.setValueAtTime(.9*P,J),g.gain.setValueAtTime(1e-4,J+.21)};let _e=1;const qe=(J,P,w)=>{_e=-_e,j(J,w?.14:.035,9e3,.6,(w?.12:.08)*P,[l.drums],"highpass",_e*.35)},V=(J,P,w)=>{for(const re of[-n.reeseDetune,n.reeseDetune]){const oe=i.createOscillator(),Ne=i.createGain();oe.type="sawtooth",oe.frequency.value=Cs(P),oe.detune.value=re,z(Ne,J,.02,.2,.1,w),I(oe.connect(Ne),re>0?.25:-.25).connect(L),oe.start(J),oe.stop(J+w+.05)}const q=i.createOscillator(),ne=i.createGain();q.frequency.value=Cs(P-12),z(ne,J,.02,.42,.1,w),q.connect(ne).connect(c.bass),q.start(J),q.stop(J+w+.05)},te=(J,P,w,q=1)=>{for(const ne of P.slice(1))for(const[re,oe]of[[-9,-.6],[0,0],[8,.6]]){const Ne=i.createOscillator(),Te=i.createGain();Ne.type=n.pad,Ne.frequency.value=Cs(ne),Ne.detune.value=re,z(Te,J,.8,.026*q,1.4,w),I(Ne.connect(Te),oe).connect(R),Ne.start(J),Ne.stop(J+w+.1)}},ae=(J,P,w=1)=>{const q=i.createOscillator(),ne=i.createGain();q.type="square",q.frequency.value=Cs(P+n.arpOct);const re=i.createBiquadFilter();re.type="lowpass",re.frequency.value=3200,z(ne,J,.003,.05*w,.08,Yi*1.6),q.connect(re).connect(ne),ne.connect(l.arp),ne.connect(_),q.start(J),q.stop(J+Yi*2)},le=(J,P,w,q)=>{const ne=w*Yi;for(const re of[-6,6]){const oe=i.createOscillator(),Ne=i.createGain();oe.type=n.lead,q?(oe.frequency.setValueAtTime(Cs(q),J),oe.frequency.exponentialRampToValueAtTime(Cs(P),J+.05)):oe.frequency.value=Cs(P),oe.detune.value=re;const Te=i.createOscillator(),Ue=i.createGain();Te.frequency.value=5.5,Ue.gain.value=9,Te.connect(Ue).connect(oe.detune),Te.start(J+.12),Te.stop(J+ne+.05),z(Ne,J,.01,.07,Math.min(.12,ne*.4),ne),I(oe.connect(Ne),re>0?.2:-.2).connect(B),oe.start(J),oe.stop(J+ne+.05)}};let pe=0,Ie=0,Le=null,Oe=0,he=.7,be=!1,F=0;const je=_f.reduce((J,[,P])=>J+P,0),Ee=()=>{if(Oe<.5)return"ambient";let J=F%je;for(const[P,w]of _f){if(J<w)return P;J-=w}return"drop"},Be=()=>{const J=i.currentTime,P=(q,ne)=>{q.gain.cancelScheduledValues(J),q.gain.setTargetAtTime(ne,J,.8)},w=Oe;P(l.drums,.1+.85*w),P(l.bass,.3+.6*w),P(l.pad,.75-.2*w),P(l.arp,.35+.3*w),P(l.lead,.55+.35*w),o.gain.cancelScheduledValues(J),o.gain.setTargetAtTime(be?0:he*.8,J,.3)},ze=J=>J%2?Yi*.12:0,et=()=>{for(;Ie<i.currentTime+.15;){const J=pe%32,P=Math.floor(pe/16),w=Math.floor(pe/32)%n.chords.length,q=n.chords[w];J%16===0&&pe>0&&Oe>.5&&F++;const ne=Ee(),re=Ie+ze(J),oe=F%8;if(ne==="drop"||ne==="build"){const Te=oe%4===3&&J>=16?Ol.FILL:oe>=6?Ol.B:Ol.A,Ue=ne==="build"&&oe<4;Te.k[J]==="x"&&!(Ue&&J%8)&&Q(re),Te.s[J]==="x"&&!Ue&&se(re,ne==="build"?.7:1),Te.g[J]==="x"&&se(re,.3),(!Ue||J%2===0)&&qe(re,J%2?.6:1,J%8===6)}else ne==="break"?(J%4===2&&qe(re,.6,!1),(J===0||J===16)&&Q(re,.4)):J%4===2&&qe(re,.45,!1);if(J===0&&(te(re,q,Yi*32,ne==="break"?1.3:1),V(re,q[0],Yi*(ne==="drop"?14:30))),ne==="drop"&&J===16&&V(re,q[0]+(w%2?3:7),Yi*14),J%n.arpRate===0&&ne!=="break"&&ae(re,q[1+J/n.arpRate%4]+(J>=16?12:0),ne==="ambient"?.7:1),ne==="drop"||(ne==="break"||ne==="ambient")&&Math.floor(P/4)%2===1){const Te=n.hook.findIndex(([Ue])=>Ue===J);if(Te>=0){const[,Ue,it]=n.hook[Te];le(re,Ue+(ne==="ambient"?-12:0),it,Te>0?n.hook[Te-1][1]:0)}}Ie+=Yi,pe++}};return{start(){Le||(Ie=i.currentTime+.1,Le=setInterval(et,25),Be())},stop(){clearInterval(Le),Le=null,o.gain.setTargetAtTime(0,i.currentTime,.2)},setIntensity(J){J>.5&&Oe<=.5&&(F=0),Oe=J,Be()},setVolume(J){he=J,Be()},setMuted(J){be=J,Be()},get muted(){return be},get volume(){return he},rms(){const J=new Float32Array(a.fftSize);return a.getFloatTimeDomainData(J),Math.sqrt(J.reduce((P,w)=>P+w*w,0)/J.length)},get intensity(){return Oe},get section(){return Ee()},tap(J){o.connect(J)}}}const Mf=i=>440*Math.pow(2,(i-69)/12),eo=60/76,yf={tak:{chords:[[50,62,66,69,73],[47,59,62,66,71],[43,59,62,67,71],[45,57,61,64,69]],scale:[62,64,66,69,71,74,76,78,81],bell:"sine",padCut:1400,nature:"birds"},vinter:{chords:[[45,57,64,67,71],[41,57,60,64,67],[48,60,64,67,74],[43,55,62,67,69]],scale:[64,67,69,71,74,76,79,81,83],bell:"triangle",padCut:1100,nature:"wind"},vulkan:{chords:[[40,52,59,62,67],[41,53,60,64,67],[38,50,57,62,65],[40,52,55,59,64]],scale:[52,55,57,59,62,64,67,69,71],bell:"sine",padCut:800,nature:"rumble"}},bf=8;function wM(i,e,t){const n=yf[t]||yf.tak,s=i.createDynamicsCompressor();s.threshold.value=-20,s.ratio.value=2.5,s.attack.value=.03,s.release.value=.4;const r=i.createGain();r.gain.value=0,s.connect(r).connect(i.destination);const o=i.createAnalyser();o.fftSize=1024,r.connect(o);const a={};for(const V of["pad","bell","nature","pulse"]){const te=i.createGain();te.gain.value=0,te.connect(s),a[V]=te}const l=i.createBuffer(2,Math.floor(i.sampleRate*3.5),i.sampleRate);for(let V=0;V<2;V++){const te=l.getChannelData(V);for(let ae=0;ae<te.length;ae++)te[ae]=(Math.random()*2-1)*Math.pow(1-ae/te.length,3)}const c=i.createConvolver();c.buffer=l;const u=i.createGain();u.gain.value=.55,c.connect(u).connect(s);const h=i.createDelay(2);h.delayTime.value=eo*.75;const d=i.createGain();d.gain.value=.35;const p=i.createBiquadFilter();p.type="lowpass",p.frequency.value=2200,h.connect(p).connect(d).connect(h),p.connect(a.bell);const g=i.createBiquadFilter();g.type="lowpass",g.frequency.value=n.padCut,g.Q.value=.7;const _=i.createOscillator(),m=i.createGain();_.frequency.value=.05,m.gain.value=n.padCut*.3,_.connect(m).connect(g.frequency),_.start(),g.connect(a.pad),g.connect(c);const f=(V,te,ae,le,pe,Ie)=>{V.gain.setValueAtTime(1e-4,te),V.gain.exponentialRampToValueAtTime(le,te+ae),V.gain.setValueAtTime(le,te+Math.max(ae,Ie-pe)),V.gain.exponentialRampToValueAtTime(1e-4,te+Ie)},M=(V,te)=>{const ae=i.createStereoPanner();return ae.pan.value=te,V.connect(ae),ae},b=(V,te,ae)=>{for(const le of te)for(const[pe,Ie]of[[-7,-.5],[7,.5]]){const Le=i.createOscillator(),Oe=i.createGain();Le.type=le===te[0]?"sine":"triangle",Le.frequency.value=Mf(le),Le.detune.value=pe,f(Oe,V,2.5,le===te[0]?.05:.022,3,ae),M(Le.connect(Oe),Ie).connect(g),Le.start(V),Le.stop(V+ae+.1)}},x=(V,te,ae=1)=>{const le=(Math.random()-.5)*.8;for(const[pe,Ie,Le]of[[1,.09,1.6],[4.2,.02,.25],[2,.025,.7]]){const Oe=i.createOscillator(),he=i.createGain();Oe.type=pe===1?n.bell:"sine",Oe.frequency.value=Mf(te)*pe,he.gain.setValueAtTime(1e-4,V),he.gain.exponentialRampToValueAtTime(Ie*ae,V+.005),he.gain.exponentialRampToValueAtTime(1e-4,V+Le);const be=M(Oe.connect(he),le);be.connect(a.bell),be.connect(h),be.connect(c),Oe.start(V),Oe.stop(V+Le+.05)}},R=(V,te,ae,le,pe,Ie,Le,Oe=.002)=>{const he=i.createBufferSource();he.buffer=e;const be=i.createBiquadFilter();be.type=ae,be.frequency.value=le,be.Q.value=pe;const F=i.createGain();return f(F,V,Oe,Ie,te*.7,te),he.connect(be).connect(F).connect(Le),he.start(V,Math.random()*1.5),he.stop(V+te+.05),be},S=V=>{const te=i.createOscillator(),ae=i.createGain();te.frequency.setValueAtTime(90,V),te.frequency.exponentialRampToValueAtTime(50,V+.18),f(ae,V,.01,.35,.2,.3),te.connect(ae).connect(a.pulse),te.start(V),te.stop(V+.32)},T=(V,te)=>R(V,.09,"highpass",7e3,.5,.05*te,a.pulse,.02),C=V=>{const te=2+Math.floor(Math.random()*3),ae=2400+Math.random()*1600,le=(Math.random()-.5)*1.4;for(let pe=0;pe<te;pe++){const Ie=V+pe*(.09+Math.random()*.06),Le=i.createOscillator(),Oe=i.createGain();Le.frequency.setValueAtTime(ae*(1+Math.random()*.2),Ie),Le.frequency.exponentialRampToValueAtTime(ae*(.75+Math.random()*.6),Ie+.07),f(Oe,Ie,.008,.03,.04,.08),M(Le.connect(Oe),le).connect(a.nature),Le.start(Ie),Le.stop(Ie+.1)}};let y=null;const v=()=>{const V=i.createBufferSource();V.buffer=e,V.loop=!0;const te=i.createBiquadFilter(),ae=i.createGain(),le=i.createOscillator(),pe=i.createGain(),Ie=i.createGain();n.nature==="wind"?(te.type="bandpass",te.frequency.value=500,te.Q.value=1.2,ae.gain.value=.05,le.frequency.value=.08,pe.gain.value=.04,Ie.gain.value=350):n.nature==="rumble"?(te.type="lowpass",te.frequency.value=120,te.Q.value=.8,ae.gain.value=.18,le.frequency.value=.05,pe.gain.value=.08,Ie.gain.value=40):(te.type="highpass",te.frequency.value=3e3,te.Q.value=.5,ae.gain.value=.012,le.frequency.value=.11,pe.gain.value=.01,Ie.gain.value=800),le.connect(pe).connect(ae.gain),le.connect(Ie).connect(te.frequency),V.connect(te).connect(ae).connect(a.nature),V.start(),le.start(),y={s:V,lfo:le}};let A=null,k=0,L=.7,U=!1,X=0,B=0,z=0,I=0,j=0,Q=0,se=4;const _e=()=>{const V=i.currentTime,te=k,ae=(le,pe)=>{le.gain.cancelScheduledValues(V),le.gain.setTargetAtTime(pe,V,1.2)};ae(a.pad,.9),ae(a.bell,.7+.2*te),ae(a.nature,.9-.4*te),ae(a.pulse,.55*te),g.frequency.cancelScheduledValues(V),g.frequency.setTargetAtTime(n.padCut*(1+.9*te),V,2),r.gain.cancelScheduledValues(V),r.gain.setTargetAtTime(U?0:L*1.6,V,.4)},qe=()=>{const V=i.currentTime+.3;for(;X<V;)b(X,n.chords[B],bf+3),B=(B+1)%n.chords.length,X+=bf;for(;z<V;)Math.random()<.8&&(se=Math.max(0,Math.min(n.scale.length-1,se+[-2,-1,-1,1,1,2,0][Math.floor(Math.random()*7)])),x(z,n.scale[se],.8+Math.random()*.3),Math.random()<.15&&x(z+eo/4,n.scale[Math.max(0,se-2)],.6)),z+=eo*(k>.5?Math.random()<.5?.5:1:[1,1.5,2,3][Math.floor(Math.random()*4)]);for(;I<V;)k>.5&&(j%2===0&&S(I),T(I,1),T(I+eo/2,.6)),j++,I+=eo;for(;Q<V;){if(n.nature==="birds"&&Math.random()<.55&&C(Q),n.nature==="wind"&&Math.random()<.3&&R(Q,2.5,"bandpass",1400+Math.random()*900,6,.03,a.nature,.9),n.nature==="rumble")for(let te=0;te<3;te++)Math.random()<.5&&R(Q+Math.random(),.02,"highpass",2500,.5,.12,a.nature);Q+=1.5+Math.random()*2.5}};return{start(){if(A)return;X=z=I=Q=i.currentTime+.1,y||v(),A=setInterval(qe,50),_e()},stop(){clearInterval(A),A=null,r.gain.setTargetAtTime(0,i.currentTime,.3)},setIntensity(V){k=V,_e()},setVolume(V){L=V,_e()},setMuted(V){U=V,_e()},get muted(){return U},get volume(){return L},rms(){const V=new Float32Array(o.fftSize);return o.getFloatTimeDomainData(V),Math.sqrt(V.reduce((te,ae)=>te+ae*ae,0)/V.length)},get intensity(){return k},get section(){return k>.5?"wave":"calm"},tap(V){r.connect(V)}}}const Ze={startEmbers:225,emberLife:25,expiredRefund:.5,magnet:4.6,reach:2.7,placeAhead:2.3,minTowerGap:2.5,plinthBonus:1.25,lighthouseReach:5.4,stoneCost:30,chargeTime:.4,upgradeTime:[15,20,25,30],keeperSpeed:6.4,carrySlow:.82,wadeSlow:.7,stunTime:1.6,stunLoss:.3,chillMax:100,stressInvuln:1,stressPush:7,airStress:10,faintTime:6,faintLoss:.25,wakeChill:.6,regen:3,regenReach:9,bagChance:.05,bagHeal:25,bagLife:20,hpGrowth:.2,waveBonus:20,waveBonusPer:5,interest:.1,firstPrep:30,prepTime:15,earlyScale:[.55,.65,.8],activePaths:[1,2,2]},Ns={ring:{name:"Røykring-kanon",cost:22,range:7.5,dmg:7,cooldown:.65,air:!1,tip:"rask · kun bakke"},chips:{name:"Chips-mørtel",cost:38,range:10,dmg:18,cooldown:2.2,air:!1,splash:2.5,tip:"splash · kun bakke"},speaker:{name:"Reggae-høyttaler",cost:30,range:5.5,dmg:3,cooldown:1.6,air:!0,slowTime:2.2,tip:"bremser i ring"},bubble:{name:"Bobleblåser",cost:20,range:7,dmg:2.5,cooldown:.38,air:!0,ground:!1,trap:1.4,tip:"fanger flyvere · kun luft"},kite:{name:"Papirdrage",cost:40,range:13,dmg:5,cooldown:2.8,air:!0,ground:!1,zone:3.4,hover:2.4,tip:"sone, lang · kun luft"},pizza:{name:"Pizza-katapult",cost:55,range:14,dmg:24,cooldown:3,air:!1,splash:2.9,tip:"lang splash · kun bakke"},lamp:{name:"Lavalampe",cost:50,range:4.6,dmg:1.1,cooldown:.3,air:!0,slowTime:.5,tip:"aura, bremser alt"}},Ao={clerk:{name:"Forbuds-byråkrat",hp:22,speed:2.6,embers:4,anim:12,puff:"#9fffb0",stress:10},tank:{name:"Stortings-tanken",hp:95,speed:1.25,embers:10,anim:5,puff:"#9fffb0",resist:{ring:.5,chips:1.5},stress:15},gull:{name:"Moralpanikk-måke",hp:16,speed:3.4,embers:5,anim:12,puff:"#ffffff",flying:!0,swoop:!0},swarm:{name:"Komité-sverm",hp:7,speed:2.2,embers:1,anim:9,puff:"#ffe08a",stress:8},auditor:{name:"Revisoren",hp:70,speed:1.6,embers:8,anim:7,puff:"#9fffb0",shield:.25,resist:{lamp:1.5},info:"skjold forfra (×0,25), ikke mot aura",stress:14},complainer:{name:"Naboklageren",hp:12,speed:4.3,embers:3,anim:18,puff:"#ffb0f0",resist:{chips:.5,ring:1.5},info:"rask, mørtel bommer",stress:10},lobbyist:{name:"Lobbyisten",hp:55,speed:1.9,embers:6,anim:9,puff:"#ffe08a",splits:3,resist:{speaker:.5,pizza:1.5},noMood:!0,info:"deler seg i tre, immun mot stemning",stress:12},lobbyMini:{name:"Mini-lobbyist",hp:14,speed:2.7,embers:1,anim:14,puff:"#ffe08a",resist:{speaker:.5,pizza:1.5},noMood:!0,stress:8},drone:{name:"Overvåkings-drone",hp:9,speed:4.6,embers:1,anim:30,puff:"#c8d8ff",flying:!0,alt:3.6,resist:{bubble:1.5,lamp:1.5,kite:.5},info:"rask sverm i lufta"},balloon:{name:"Ballong-byråkraten",hp:150,speed:1.05,embers:14,anim:2,puff:"#ffffff",flying:!0,alt:5.6,resist:{bubble:.5,kite:1.5},info:"seig, høyt oppe"},heli:{name:"Mini-helikopteret",hp:48,speed:2.5,embers:7,anim:40,puff:"#ffffff",flying:!0,alt:4.6,blind:{every:6,dur:3,range:9},resist:{ring:.5,kite:1.5},info:"søkelys blender et tårn i 3 s"}},EM=[[{type:"clerk",n:8,gap:1.4,path:0}],[{type:"clerk",n:6,gap:1.3,path:"both"}],[{type:"swarm",n:7,gap:.35,path:1},{type:"clerk",n:6,gap:1.2,path:0,at:4},{type:"swarm",n:7,gap:.35,path:0,at:12}],[{type:"tank",n:3,gap:4,path:0},{type:"clerk",n:6,gap:1,path:1,at:2}],[{type:"gull",n:5,gap:2.5},{type:"clerk",n:7,gap:1,path:"both",at:3}],[{type:"tank",n:3,gap:3.5,path:"both"},{type:"swarm",n:8,gap:.3,path:"both",at:8}],[{type:"gull",n:8,gap:1.6},{type:"clerk",n:9,gap:.8,path:"both",at:2}],[{type:"tank",n:4,gap:3,path:"both"},{type:"swarm",n:10,gap:.3,path:"both",at:6},{type:"gull",n:4,gap:2,at:10}],[{type:"gull",n:10,gap:1.2},{type:"tank",n:4,gap:3,path:"both",at:3},{type:"clerk",n:10,gap:.7,path:"both",at:8}],[{type:"clerk",n:10,gap:.6,path:"both"},{type:"tank",n:5,gap:2.5,path:"both",at:6},{type:"swarm",n:12,gap:.25,path:"both",at:14},{type:"gull",n:12,gap:1,at:18}]],TM="modulepreload",AM=function(i,e){return new URL(i,e).href},Sf={},CM=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(t.map(c=>{if(c=AM(c,n),c in Sf)return;Sf[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!n)for(let g=o.length-1;g>=0;g--){const _=o[g];if(_.href===c&&(!u||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${h}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":TM,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((g,_)=>{p.addEventListener("load",g),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},wf="glodevokteren-",Ef="ABCDEFGHJKLMNPQRSTUVWXYZ",Xc=3,RM=9e3,PM=14e3,Tf=6e3;function LM(){let i="";for(let e=0;e<4;e++)i+=Ef[Math.floor(Math.random()*Ef.length)];return i}function qc(i=""){return i.toUpperCase().replace(/[^A-Z]/g,"").slice(0,4)}let Bl=null;async function DM(){return Bl||(Bl=(await CM(async()=>{const{Peer:i}=await import("./bundler-DrDBPFLh.js");return{Peer:i}},[],import.meta.url)).Peer),Bl}const da={network:"Mistet kontakten med koblingstjenesten. Sjekk nettet.","server-error":"Koblingstjenesten svarer ikke akkurat nå. Prøv igjen om litt.","socket-error":"Koblingstjenesten svarer ikke akkurat nå. Prøv igjen om litt.","socket-closed":"Mistet kontakten med koblingstjenesten.","browser-incompatible":"Nettleseren støtter ikke nettspill (WebRTC).",webrtc:"Klarte ikke å koble direkte. Nettet ditt blokkerer kanskje peer-to-peer (vanlig på mobilnett/jobbnett)."};function Af(i={}){const e={role:null,code:"",slot:0,players:[],stats:{sentBytes:0,recvBytes:0,sentMsgs:0,recvMsgs:0}};let t=null,n=null,s=0,r=!1;const o=new Map,a=m=>{var f;r||(f=i.onError)==null||f.call(i,m)},l=()=>performance.now(),c=(m,f)=>{if(!(m!=null&&m.open))return;const M=JSON.stringify(f);e.stats.sentBytes+=M.length,e.stats.sentMsgs++,m.send(M)},u=m=>{e.stats.recvBytes+=m.length,e.stats.recvMsgs++;try{return JSON.parse(m)}catch{return null}},h=()=>{var m;e.players=[{slot:0,name:e.hostName},...[...o].map(([f,M])=>({slot:f,name:M.name}))].sort((f,M)=>f.slot-M.slot);for(const f of o.values())c(f.conn,{t:"lobby",players:e.players});(m=i.onLobby)==null||m.call(i,e.players)},d=m=>{var M;const f=o.get(m);if(f){o.delete(m);try{f.conn.close()}catch{}(M=i.onLeave)==null||M.call(i,m,f.name),h()}};function p(m){return DM().then(f=>new Promise((M,b)=>{const x=m?new f(m,{debug:0,serialization:"raw"}):new f({debug:0}),R=setTimeout(()=>b(new Error("Fikk ikke kontakt med koblingstjenesten (PeerJS). Sjekk nettet og prøv igjen.")),RM);x.on("open",()=>{clearTimeout(R),M(x)}),x.on("error",S=>{clearTimeout(R),S.type==="unavailable-id"?b(Object.assign(new Error("taken"),{taken:!0})):x.open||b(new Error(da[S.type]||`Nettfeil: ${S.type}`))})}))}e.host=async m=>{e.role="host",e.slot=0,e.hostName=m||"Vokter 1";for(let f=0;;f++){const M=LM();try{t=await p(wf+M),e.code=M;break}catch(b){if(!b.taken||f>4)throw e.role=null,b}}return t.on("error",f=>{f.type!=="peer-unavailable"&&a(da[f.type]||`Nettfeil: ${f.type}`)}),t.on("connection",f=>{f.on("open",()=>{var x;let M=1;for(;o.has(M);)M++;if(M>=Xc||e.closedRoom){c(f,{t:"refuse",why:e.closedRoom?"Spillet er allerede i gang.":`Rommet er fullt (${Xc} spillere).`}),setTimeout(()=>f.close(),300);return}const b=String(((x=f.metadata)==null?void 0:x.name)||`Vokter ${M+1}`).slice(0,14);o.set(M,{conn:f,name:b,seen:l()}),c(f,{t:"hello",slot:M,world:e.world,tid:e.tid}),h(),f.on("data",R=>{var C;const S=o.get(M);if(!S||S.conn!==f)return;S.seen=l();const T=u(R);T&&T.t!=="ping"&&((C=i.onMessage)==null||C.call(i,T,M))}),f.on("close",()=>{var R;((R=o.get(M))==null?void 0:R.conn)===f&&d(M)}),f.on("error",()=>{var R;((R=o.get(M))==null?void 0:R.conn)===f&&d(M)})})}),_(),h(),e.code},e.join=async(m,f)=>(e.role="guest",e.code=qc(m),t=await p(null),new Promise((M,b)=>{let x=!1;const R=(T,C)=>{x||(x=!0,clearTimeout(S),T(C))},S=setTimeout(()=>R(b,new Error("Fikk ikke koblet til verten. Enten er koden feil, eller nettet blokkerer direkte kobling (vanlig på mobilnett/jobbnett).")),PM);t.on("error",T=>{T.type==="peer-unavailable"?R(b,new Error(`Fant ikke rom ${e.code}. Sjekk koden.`)):x?T.type==="webrtc"&&a(da.webrtc):R(b,new Error(da[T.type]||`Nettfeil: ${T.type}`))}),n=t.connect(wf+e.code,{serialization:"raw",reliable:!0,metadata:{name:f}}),n.on("data",T=>{var y,v;e.hostSeen=l();const C=u(T);if(C){if(C.t==="hello"){e.slot=C.slot,R(M,C);return}if(C.t==="refuse"){R(b,new Error(C.why));return}if(C.t==="lobby"){e.players=C.players,(y=i.onLobby)==null||y.call(i,C.players);return}C.t!=="ping"&&((v=i.onMessage)==null||v.call(i,C,0))}}),n.on("close",()=>{x?g():R(b,new Error("Verten lukket koblingen."))}),n.on("open",()=>{e.hostSeen=l(),_()})}));function g(){var m;r||(r=!0,(m=i.onHostGone)==null||m.call(i),e.close())}function _(){clearInterval(s),s=setInterval(()=>{const m=l();if(e.role==="host")for(const[f,M]of o)m-M.seen>Tf?d(f):m-(M.pinged||0)>1e3&&(M.pinged=m,c(M.conn,{t:"ping"}));else e.role==="guest"&&n&&(m-e.hostSeen>Tf?g():c(n,{t:"ping"}))},1e3)}return e.send=m=>c(n,m),e.sendTo=(m,f)=>{var M;return c((M=o.get(m))==null?void 0:M.conn,f)},e.broadcast=m=>{if(!o.size)return;const f=JSON.stringify(m);for(const M of o.values())M.conn.open&&(e.stats.sentBytes+=f.length,e.stats.sentMsgs++,M.conn.send(f))},e.guestCount=()=>o.size,e.close=()=>{clearInterval(s);for(const m of o.values())try{m.conn.close()}catch{}o.clear();try{n==null||n.close()}catch{}try{t==null||t.destroy()}catch{}t=null,n=null},addEventListener("pagehide",()=>e.close()),e}const jt=i=>document.getElementById(i),Cf=["#f2c23c","#4fb3d9","#c46bd6"],Co=i=>Cf[i%Cf.length];function IM(i){const e=jt("net"),t=jt("net-status"),n=jt("net-players"),s=jt("net-share");let r=null,o=!1,a="";try{a=localStorage.getItem("glod-name")||""}catch{}jt("net-name").value=a,jt("net-name").addEventListener("input",m=>{try{localStorage.setItem("glod-name",m.target.value.trim())}catch{}});const l=(m,f=!1)=>{t.textContent=m,t.classList.toggle("err",f)},c=m=>(jt("net-name").value.trim()||m).slice(0,14),h={onLobby:m=>{n.innerHTML=m.map(f=>`<li><i style="background:${Co(f.slot)}"></i>${UM(f.name)}${f.slot===0?" <small>(vert)</small>":""}${r&&f.slot===r.slot?" <small>← deg</small>":""}</li>`).join(""),(r==null?void 0:r.role)==="host"&&(jt("net-go").disabled=!1,jt("net-go").textContent=m.length>1?`Start på ${i.worldName} (${m.length} spillere)`:"Start (venter på andre …)")},onMessage:(m,f)=>{var M;if(m.t==="start"&&r.role==="guest"){e.dataset.state="playing",i.onGuestStart(r);return}(M=i.onMessage)==null||M.call(i,m,f)},onLeave:(m,f)=>{var M;return(M=i.onLeave)==null?void 0:M.call(i,m,f)},onError:m=>l(m,!0),onHostGone:()=>{var m;return(m=i.onHostGone)==null?void 0:m.call(i)}},d=m=>{e.dataset.state=m,jt("btn-start").classList.toggle("hidden",m==="host"||m==="guest"||m==="connecting")},p=m=>{r==null||r.close(),r=null,o=!1,d("idle"),n.innerHTML="",s.classList.add("hidden"),m?l(m,!0):l("")};jt("btn-net").addEventListener("click",()=>{e.classList.toggle("hidden"),jt("btn-net").classList.toggle("sel",!e.classList.contains("hidden"))}),jt("net-host").addEventListener("click",async()=>{if(!o){o=!0,d("connecting"),l("Lager rom …"),r=Af(h),r.world=i.worldIndex,r.tid=i.timeOfDay;try{const m=await r.host(c("Vokter 1"));d("host");const f=`${location.origin}${location.pathname}?join=${m}`;jt("net-code").textContent=m,jt("net-link").value=f,s.classList.remove("hidden"),l(`Rom ${m} er åpent. Del koden eller lenken (maks ${Xc} spillere).`)}catch(m){p(m.message)}}});const g=async m=>{const f=qc(m);if(!o){if(f.length!==4){l("Koden har fire bokstaver.",!0);return}o=!0,d("connecting"),l(`Kobler til rom ${f} …`),r=Af(h);try{const M=await r.join(f,c("Vokter"));if(M.world!==i.worldIndex||M.tid&&M.tid!==i.timeOfDay){l("Henter vertens verden …"),r.close(),location.href=`${location.pathname}?world=${M.world}&tid=${M.tid||"dag"}&join=${f}`;return}d("guest"),l(`Du er med i rom ${f}. Venter på at verten starter …`)}catch(M){p(M.message)}}};jt("net-join").addEventListener("click",()=>g(jt("net-code-in").value)),jt("net-code-in").addEventListener("keydown",m=>{m.stopPropagation(),m.key==="Enter"&&g(m.target.value)}),jt("net-name").addEventListener("keydown",m=>m.stopPropagation()),jt("net-copy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(jt("net-link").value),l("Lenke kopiert.")}catch{jt("net-link").select()}}),jt("net-leave").addEventListener("click",()=>p()),jt("net-go").addEventListener("click",()=>{(r==null?void 0:r.role)==="host"&&(r.closedRoom=!0,r.broadcast({t:"start"}),d("playing"),i.onHostStart(r))});const _=qc(i.params.get("join")||"");return _&&(e.classList.remove("hidden"),jt("net-code-in").value=_,g(_)),{get net(){return r},say:l}}function UM(i){return String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}const rn=new URLSearchParams(location.search),qd=rn.has("demo");if(rn.has("unlockall"))try{localStorage.setItem("glod-unlocked",String(Ks.length))}catch{}let yn=Number(rn.get("world"));if(!Number.isInteger(yn))try{yn=Number(localStorage.getItem("glod-world"))||0}catch{yn=0}yn=Math.max(0,Math.min((rn.has("join")?Ks.length:yo())-1,yn));try{localStorage.setItem("glod-world",String(yn))}catch{}const ln=Ks[yn],Du=C_(ln,EM),zM=.3;function NM(){return 1+zM*(It.length-1)}const kM=Math.max(1,Math.min(20,Number(rn.get("speed"))||1)),ts=matchMedia("(pointer: coarse)").matches||rn.has("mobile"),Yc={high:{shadow:2048,dprCap:2},low:{shadow:1024,dprCap:2}};let Ti=ts?"low":"high";try{const i=localStorage.getItem("glod-quality");(i==="high"||i==="low")&&(Ti=i)}catch{}(rn.get("q")==="high"||rn.get("q")==="low")&&(Ti=rn.get("q"));const Xs={mobile:ts,shadow:Yc[Ti].shadow,dprCap:Yc[Ti].dprCap},FM={high:["rock","tree","tower","figure"],low:["rock","tree","tower","figure"]};function Yd(i){const e=rn.has("ol")?rn.get("ol").split(","):FM[i];Ad(Object.fromEntries(["rock","tree","tower","figure"].map(t=>[t,e.includes(t)])))}Yd(Ti);const $d=document.getElementById("game"),Un=new b1({canvas:$d,antialias:!ts,powerPreference:"high-performance",preserveDrawingBuffer:rn.has("shot")});let hs=Math.min(devicePixelRatio||1,Xs.dprCap);Un.setPixelRatio(hs);Un.shadowMap.enabled=!0;Un.shadowMap.type=kf;Un.toneMapping=ru;let ms="dag";try{ms=localStorage.getItem("glod-tid")||"dag"}catch{}rn.get("tid")&&(ms=rn.get("tid"));const Qn=ms==="skumring"&&ln.skyDusk?ln.skyDusk:ln.sky;Un.toneMappingExposure=Qn.exposure;Un.info.autoReset=!1;const dt=new S1,jd=new Re(Qn.fog);dt.background=jd;dt.fog=new Mu(jd,...ln.fog??[55,115]);const Wt=new jn(38,1,.5,200),OM=new i_(Qn.hemiSky,Qn.hemiGround,Qn.hemi);dt.add(OM);const _n=new o_(Qn.sun,Qn.sunI);_n.castShadow=!0;_n.shadow.mapSize.set(Xs.shadow,Xs.shadow);Object.assign(_n.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:90});_n.shadow.bias=-8e-4;_n.shadow.normalBias=.03;dt.add(_n,_n.target);x_(dt);const Ge=W_(dt,Xs,ln);Ge.grass.setLevel(Ti);const BM=aM(dt,Ge,Xs,ln,ms,Wt),Cn=lM(Ge);window.__nav=Cn;const Et=Wd(dt,ts?450:800),xs=Wd(dt,ts?120:220,{blending:fs,size:1.6,opacity:.45,fadeTo:Qn.fog}),Ro=oM(Un,dt,Wt,Qn.grade);Ro.setLevel(Ti);const ft=xM($d),Kd=MM(ft);ft.menu=Kd;ft.panelOpen=()=>!Ei.classList.contains("hidden");const ho=document.createElement("div");ho.id="toast";document.body.appendChild(ho);let Rf=0;function Ia(i){ho.textContent=i,ho.classList.add("on"),clearTimeout(Rf),Rf=setTimeout(()=>ho.classList.remove("on"),3200)}ft.onPad=(i,e)=>{Ia(i==="connect"?`🎮 Kontroll tilkoblet: ${dM(e)}`:"🎮 Kontroll frakoblet"),Jn.device=null,at("pause").classList.contains("hidden")||Fs(!0,Y.confirming)};function Po(){const i=innerWidth,e=innerHeight;Un.setSize(i,e,!1),Wt.aspect=i/e,Wt.updateProjectionMatrix(),Ro.setSize(i,e),v_(ts?2:2.2,Un.getPixelRatio(),i,e)}function Zd(i){Ti=i;try{localStorage.setItem("glod-quality",i)}catch{}const e=Yc[i];_n.shadow.mapSize.set(e.shadow,e.shadow),_n.shadow.map&&(_n.shadow.map.dispose(),_n.shadow.map=null),hs=Math.min(devicePixelRatio||1,e.dprCap),Un.setPixelRatio(hs),Ro.setLevel(i),Ge.grass.setLevel(i),Yd(i),Po(),document.getElementById("btn-quality").textContent=i==="high"?"Høy":"Lav"}addEventListener("resize",Po);Po();const Y={phase:"title",wave:0,timer:0,embers:Ze.startEmbers,lights:zr,spawnQueue:[],leaks:{},seen:{},time:0,sel:0,paused:!1},$c=Ze.upgradeTime.length+1,Ui=["ring","chips","speaker","bubble","kite","pizza","lamp"];let Zi=ln.camYaw??0;const Pf=new a_,cn=[],Qt=[],vi=[],Hn=[],Er=[],fo=[],Fe={host:!1,guest:!1,net:null,sendT:0,goal:null,ids:0,ev:[],snapT:0};let Kt=Vr(Nd(),"figure"),D={x:Ge.lighthouse.pos.x+1,z:Ge.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,walk:0,charge:0,chargeTower:null,face:Math.PI,goal:null,chill:Ze.chillMax,inv:0,faint:0,faints:0,roll:null,stillT:0,rollBlock:null};Kt.position.set(D.x,Ge.heightAt(D.x,D.z),D.z);dt.add(Kt);const Jd=Qn.lantern??2.6,Iu=new Mo("#ffcf70",Jd,6,1.8);Iu.position.set(.8,.45,-.3);Kt.add(Iu);const It=[{slot:0,K:D,mesh:Kt,input:ft,sel:0,buildMode:!1,local:!0}];let dn=It[0],Ot=ft;function Lf(i){dn.sel=Y.sel,dn.buildMode=Y.buildMode,dn=i,D=i.K,Kt=i.mesh,Ot=i.input,Y.sel=i.sel,Y.buildMode=i.buildMode}function Ni(i,e){if(i===dn)return e();const t=dn;Lf(i);try{return e()}finally{Lf(t)}}const Qd=(i=0)=>({x:Ge.lighthouse.pos.x+1+i*1.2,z:Ge.lighthouse.pos.z+7.5-i*.6,vx:0,vz:0,carrying:!1,stun:0,walk:0,charge:0,chargeTower:null,face:Math.PI,goal:null,chill:Ze.chillMax,inv:0,faint:0,faints:0,roll:null,stillT:0,rollBlock:null});function Uu(i,e,t=()=>!0){let n=null,s=1/0;for(const r of It){const o=Math.hypot(r.K.x-i,r.K.z-e);o<s&&t(r)&&(s=o,n=r)}return n}const at=i=>document.getElementById(i),tn={chill:at("hud-chill"),lights:at("hud-lights"),embers:at("hud-embers"),wave:at("hud-wave"),timer:at("hud-timer")},ri=at("hint"),Ei=at("build-panel"),zu=at("btn-next"),Nu=at("fps");rn.has("debug")||Nu.classList.add("hidden");let Jn={};function Gn(i,e,t,n){Jn[e]!==t&&(Jn[e]=t,i.querySelector("b").textContent=t,n&&(i.classList.remove(n),i.offsetWidth,i.classList.add(n)))}const GM=4;let ep=0;function VM(i){if(ri.textContent=i,ft.device==="touch"||!i)return;const e=ft.labels(),t=o=>o.replace(/[.*+?^${}()|[\]\\/]/g,"\\$&"),n=[e.build,e.carry,e.sel,"Esc","Q","1","2","3"].filter(Boolean).map(t).join("|"),s=new RegExp(`(^|· |trykk |eller |/ )(${n})(?= =| for | /| eller )`,"g");ri.textContent="";let r=0;for(const o of i.matchAll(s)){const a=document.createElement("kbd");a.textContent=o[2],ri.append(i.slice(r,o.index+o[1].length),a),r=o.index+o[0].length}ri.append(i.slice(r))}function jc(i){if(ri.textContent===i)return;VM(i),ep=0,ri.classList.remove("faded");const e=Ei.classList.contains("hidden")?null:Ei.getBoundingClientRect();ri.style.bottom=e&&e.height?`${Math.round(innerHeight-e.top+6)}px`:""}function HM(i){(ep+=i)>GM&&ri.classList.add("faded")}function ku(i){Y.phase="prep",Y.timer=i,zu.classList.remove("hidden"),WM()}function WM(){if(Fe.guest){Y.spawnPoints=Fe.spawnPoints||[],Y.spawnPoints.length&&Zc();return}const i=Y.wave+1,e=i===1?1:i<=3?2:2+Math.floor(Math.random()*3);Y.spawnPoints=Cn.coastPoints(e,24),Y.spawnPoints.length||(Y.spawnPoints=Cn.coastPoints(e,8,{near:12,minFrac:.5})),Y.spawnPoints.length||(Y.spawnPoints=Cn.roadEnds().slice(0,e)),Fe.host&&Fe.ev.push(["sp",Y.spawnPoints.map(t=>[+t[0].toFixed(2),+t[1].toFixed(2)])]),Zc()}function Fu(){Y.wave+=1,Y.phase="wave",zu.classList.add("hidden"),Y.spawnQueue=[];for(const i of Du[Y.wave-1]){const e=Y.wave<=Ze.earlyScale.length?Y.wave-1:-1,t=Y.spawnPoints.length,n=Ao[i.type].flying?ln.balance.air??1:1,s=Math.max(1,Math.round(i.n*(ln.balance.count||1)*n*(e>=0?Ze.earlyScale[e]:1)));if(i.path==="both"){const r=Math.ceil(s/Math.min(2,t));for(let o=0;o<t;o++)for(let a=0;a<r;a++)Y.spawnQueue.push({t:(i.at??0)+a*i.gap+o*.3,type:i.type,path:o})}else{const r=i.path??0;for(let o=0;o<s;o++)Y.spawnQueue.push({t:(i.at??0)+o*i.gap,type:i.type,path:(r+o%2)%t})}}Y.spawnQueue.sort((i,e)=>i.t-e.t),Y.waveClock=0,At.wave(),Zt==null||Zt.setIntensity(1),Gn(tn.wave,"wave",Y.wave,"bump")}function ja(i,e){var l,c;const t=Ao[i],n=Vr(z_(i),"figure"),s=t.hp*(1+Ze.hpGrowth*(Y.wave-1))*ln.balance.hp*(((c=(l=ln.balance.types)==null?void 0:l[i])==null?void 0:c.hp)??1)*NM(),r={id:++Fe.ids,type:i,def:t,mesh:n,hp:s,maxHp:s,slow:0,phase:Math.random()*6,alive:!0,speedMul:ln.balance.speed*(t.flying?ln.balance.airSpeed??1:1),lane:(Math.random()-.5)*1.4};r.var=.95+Math.random()*.1,r.speedMul*=.95+Math.random()*.1,n.scale.setScalar(r.var),r.blinkT=Math.random()*4;const o=Y.spawnPoints[e%Y.spawnPoints.length]||[0,50],a=Ge.lighthouse.pos;if(t.flying){const u=Math.atan2(o[1]-a.z,o[0]-a.x)+(Math.random()-.5)*.5,h=a.x+Math.cos(u)*66,d=a.z+Math.sin(u)*66;r.x=h,r.z=d,r.y=t.alt||4,r.dist0=Math.hypot(a.x-h,a.z-d),r.hitCd=0}else r.x=o[0]+(Math.random()-.5)*1.5,r.z=o[1]+(Math.random()-.5)*1.5,r.y=Ge.heightAt(r.x,r.z),r.remain=Cn.at(r.x,r.z);return n.position.set(r.x,r.y,r.z),dt.add(n),cn.push(r),!Y.seen[i]&&i!=="lobbyMini"&&(Y.seen[i]=!0,XM(r)),r}const Kc={ring:"💨",chips:"🥔",speaker:"🔊",bubble:"🫧",kite:"🪁",pizza:"🍕",lamp:"🌋"};function tp(i){const e=Object.entries(i.resist||{}),t=e.filter(([,s])=>s<1).map(([s])=>Kc[s]).join(""),n=e.filter(([,s])=>s>1).map(([s])=>Kc[s]).join("");return{tough:t+(i.shield?"📒":""),weak:n}}const Ki=[],Ka=document.createElement("div");Ka.id="tags";document.body.appendChild(Ka);function XM(i){const{tough:e,weak:t}=tp(i.def),n=document.createElement("div");n.className="enemy-tag",n.innerHTML=`<b>${i.def.flying?"🪶":"🐾"} ${i.def.name}</b>${e?`<span>🛡️${e}</span>`:""}${t?`<span>💥${t}</span>`:""}`,Ka.appendChild(n),Ki.push({m:i,el:n,t:0}),(Y.wave>1||i.def.flying)&&nn(`Ny fiende: ${i.def.name}${e?` · tåler ${e}`:""}${t?` · svak mot ${t}`:""}`)}const So=document.createElement("div");So.id="upgbars";document.body.appendChild(So);const Ua=[];function qM(){var i;Ua.length=0,So.style.visibility=Y.paused?"hidden":"";for(const e of Qt){if(!e.upg){e.upgEl&&(e.upgEl.remove(),e.upgEl=null);continue}e.upgEl||(e.upgEl=document.createElement("div"),e.upgEl.className="upg-bar",e.upgEl.innerHTML='<div class="upg-arrows"></div><div class="upg-track"><i></i></div><span></span>',So.appendChild(e.upgEl));const t=e.upgEl,n=Math.min(1,e.upg.t/e.upg.dur),s=((i=D.roll)==null?void 0:i.tower)===e?D.roll:null,r=s?s.seq.join()+s.i:"";t.dataset.k!==r&&(t.dataset.k=r,t.firstChild.innerHTML=s?s.seq.map((h,d)=>`<b class="${d<s.i?"lit":d===s.i?"next":""}">${{rU:"▲",rR:"▶",rD:"▼",rL:"◀"}[h]}</b>`).join(""):""),s!=null&&s.shake&&(s.shake=!1,t.firstChild.classList.remove("shake"),t.offsetWidth,t.firstChild.classList.add("shake"),t.firstChild.onanimationend=()=>t.firstChild.classList.remove("shake")),e.upgReset&&(e.upgReset=!1,t.classList.remove("reset"),t.offsetWidth,t.classList.add("reset")),t.children[1].firstChild.style.width=`${(100*n).toFixed(1)}%`;const o=e.upg.t>0||s?`nv. ${e.level+1} · ${Math.ceil(e.upg.dur-e.upg.t)} s igjen`:`nv. ${e.level+1} · stå stille for å rulle`;t.lastChild.textContent!==o&&(t.lastChild.textContent=o),xt.set(e.x,e.y+2.9*e.mesh.scale.y,e.z).project(Wt);const a=xt.z<1&&Math.abs(xt.x)<1&&Math.abs(xt.y)<1;if(t.style.display=a?"flex":"none",!a)continue;const l=t.offsetWidth,c=t.offsetHeight,u={x:Math.min(Math.max((xt.x*.5+.5)*innerWidth,l/2+6),innerWidth-l/2-6),y:(-xt.y*.5+.5)*innerHeight,w:l,h:c,on:a};t.style.left=`${u.x}px`,t.style.top=`${u.y}px`,Ua.push(u)}}function YM(i){var n;const e=Ki.length?at("hud").getBoundingClientRect().bottom:0;for(let s=Ki.length-1;s>=0;s--){const r=Ki[s];r.age=(r.age||0)+i,xt.set(r.m.x,r.m.y+(((n=r.m.mesh.userData.hpBar)==null?void 0:n.position.y)??2.2)+.5,r.m.z).project(Wt);const o=xt.z<1&&Math.abs(xt.x)<1&&Math.abs(xt.y)<1;r.el.style.display=o?"flex":"none",o&&(r.t+=i);const a=r.el.offsetWidth,l=r.el.offsetHeight;r.x=Math.min(Math.max((xt.x*.5+.5)*innerWidth,a/2+6),innerWidth-a/2-6),r.y=Math.max((-xt.y*.5+.5)*innerHeight,e+l+6),r.w=a,r.h=l,r.on=o,r.el.style.opacity=String(Math.min(1,(6-r.t)/.6)),(r.t>6||r.age>90||!r.m.alive)&&(r.el.remove(),Ki.splice(s,1))}const t=[...Ua];for(const s of Ki.filter(r=>r.on).sort((r,o)=>r.y-o.y)){let r=!0;for(let o=0;r&&o<8;o++){r=!1;for(const a of t)Math.abs(s.x-a.x)<(s.w+a.w)/2+4&&s.y>a.y-a.h-3&&s.y-s.h<a.y+3&&(s.y=a.y+s.h+4,r=!0)}t.push(s)}for(const s of Ki)s.on&&(s.el.style.left=`${s.x}px`,s.el.style.top=`${s.y}px`)}function $M(i){return i.def.flying?1-Math.hypot(Ge.lighthouse.pos.x-i.x,Ge.lighthouse.pos.z-i.z)/i.dist0:1-Math.min(1,(i.remain??Cn.maxDist)/Cn.maxDist)}const wa=[],ks=document.createElement("div");ks.id="warn";document.body.appendChild(ks);function Zc(){for(const t of wa)dt.remove(t);wa.length=0,ks.innerHTML="";for(const[t,n]of Y.spawnPoints){const s=new ot(np,new Rt({color:"#ff7a3a",transparent:!0,opacity:.8,depthWrite:!1}));s.position.set(t,Math.max(Ge.heightAt(t,n),.08)+.1,n);const r=new ot(jM,new Rt({color:"#ff8a3a",transparent:!0,opacity:.35,blending:li,depthWrite:!1,fog:!1}));r.position.y=4,s.add(r),dt.add(s),wa.push(s);const o=document.createElement("div");o.className="warn-arrow",o.innerHTML='<span class="arr">➤</span><span class="kind"></span>',ks.appendChild(o)}const i=Y.spawnPoints.length,e=Y.spawnPoints.map(()=>({air:!1,ground:!1}));for(const t of Du[Y.wave]||[]){const n=t.path==="both"?e.map((s,r)=>r):[(t.path??0)%i,((t.path??0)+1)%i];for(const s of n)e[s][Ao[t.type].flying?"air":"ground"]=!0}e.forEach((t,n)=>{var r;const s=(r=ks.children[n])==null?void 0:r.querySelector(".kind");s&&(s.textContent=(t.air?"🪶":"")+(t.ground?"🐾":""))})}const np=new _s(1.6,2.2,32);np.rotateX(-Math.PI/2);const jM=new Ft(.5,1.4,8,12,1,!0);function KM(){var o;const i=Y.phase==="prep"||Y.phase==="wave"&&Y.waveClock<8,e=ks.children,t=i&&!Ei.classList.contains("hidden")?Ei.getBoundingClientRect():null,n=t&&ri.textContent&&!ri.classList.contains("faded"),s=i?at("hud").getBoundingClientRect().bottom:0;ks.style.visibility=Ka.style.visibility=Y.paused?"hidden":"";const r=t?n?Math.min(t.top,ri.getBoundingClientRect().top):t.top:0;(o=Y.spawnPoints)==null||o.forEach(([a,l],c)=>{const u=wa[c],h=e[c];if(!u||!h)return;u.visible=i;const d=.5+.5*Math.sin(Y.time*6);u.scale.setScalar(1+d*.35),u.material.opacity=.35+.5*d,xt.set(a,u.position.y,l).project(Wt);const p=Math.abs(xt.x)>.92||Math.abs(xt.y)>.88||xt.z>1;if(h.style.display=i?"block":"none",h.classList.toggle("onscreen",!p),i&&!p&&(h.style.left=`${(xt.x*.5+.5)*innerWidth}px`,h.style.top=`${Math.max((-xt.y*.5+.5)*innerHeight-30,s+30)}px`,h.style.transform="translate(-50%, -50%)",h.firstChild.style.transform=""),i&&p){let g=xt.x,_=xt.y;xt.z>1&&(g=-g,_=-_);const m=Math.atan2(-_,g),f=Math.max(Math.abs(g),Math.abs(_))||1,M=bt.clamp(g/f,-1,1),b=bt.clamp(_/f,-1,1),x=(M*.46+.5)*innerWidth;let R=(-b*.44+.5)*innerHeight;t&&x>t.left-24&&x<t.right+24&&R>r-24&&(R=r-24),R=Math.max(R,s+30),h.style.left=`${x}px`,h.style.top=`${R}px`,h.style.transform=`translate(-50%, -50%) scale(${1+d*.25})`,h.firstChild.style.transform=`rotate(${m}rad)`}})}function Us(i,e,t){var n;if(i.alive){if(t&&(e*=((n=i.def.resist)==null?void 0:n[t.type])??1,i.def.shield&&t.type!=="lamp")){const s=t.x-i.x,r=t.z-i.z,o=Math.hypot(s,r)||1,a=Math.hypot(i.hx||0,i.hz||0)||1;(s*(i.hx||0)+r*(i.hz||0))/(o*a)>.35&&(e*=i.def.shield,Math.random()<.3&&Et.emit(i.x,i.y+1,i.z,{n:2,color:"#d8c890",speed:1.5,up:1,life:.3}))}if(Fe.guest){i.hitT=.18,i.mesh.userData.hpBar.visible=!0;return}i.hp-=e,i.hitT=.18,i.mesh.userData.hpBar.visible=!0,i.hp<=0&&ip(i)}}function ip(i){if(i.alive=!1,i.chillT=0,N_(i),fo.push(i),Et.emit(i.x,i.y+1.2,i.z,{n:12,color:i.def.puff,speed:1.6,up:2.2,life:.9,gravity:1.5}),At.chill(),Fe.host&&Fe.ev.push(["c",i.id]),!Fe.guest){Ou(i.x,i.y+.5,i.z,i.def.embers,i.def.flying),!i.def.flying&&Math.random()<Ze.bagChance&&Bu(i.x,i.z);for(let e=0;e<(i.def.splits||0);e++){const t=ja("lobbyMini",0);t.x=i.x+(e-1)*.6,t.z=i.z+(e%2?.5:-.5),t.y=Ge.heightAt(t.x,t.z),t.mesh.position.set(t.x,t.y,t.z)}}}function ZM(i){var e;for(let t=fo.length-1;t>=0;t--){const n=fo[t];n.chillT+=i;const s=n.chillT,r=n.mesh.userData.body;if(n.def.flying)n.y+=i*2.5,n.z+=i*3,(e=n.mesh.userData.wings)==null||e.forEach((a,l)=>a.rotation.z=Math.sin(s*6)*.4*(l?-1:1));else if(s<1.4){const a=Math.min(1,s/.4);r.position.y=-.25*a*(n.type==="tank"?1.3:1),r.rotation.x=.25*a,r.rotation.z=Math.sin(s*3)*.05}else{r.rotation.x=0,r.position.y=Math.abs(Math.sin(s*7))*.06;const[a,l]=Cn.dir(n.x,n.z),c=n.x-a*n.def.speed*.45*i,u=n.z-l*n.def.speed*.45*i;Ge.isWalkable(c,u)&&(n.x=c,n.z=u),n.y=Ge.heightAt(n.x,n.z),(a||l)&&(n.mesh.rotation.y=Math.atan2(a,l))}Math.random()<i*1.5&&Et.emit(n.x,n.y+1.8,n.z,{n:1,color:"#c8ffb0",speed:.3,up:1,life:.8,gravity:-.4}),s>2.6&&!n.popped&&(n.popped=!0,xs.emit(n.x,n.y+.8,n.z,{n:8,color:"#eef6e8",speed:1.4,up:1.2,life:.7,gravity:-.5}));const o=Math.max(0,Math.min(1,(3.2-s)/.6));n.mesh.scale.setScalar(o*(n.var||1)*(s>2.6?1+Math.sin((s-2.6)*10)*.08:1)),n.mesh.position.set(n.x,n.y,n.z),s>3.2&&(dt.remove(n.mesh),fo.splice(t,1))}}function Ou(i,e,t,n,s=!1,r=1){if(Fe.guest)return;const o=Math.min(n,n>=6?3:n>=3?2:1);let a=n;for(let l=0;l<o;l++){const c=l===o-1?a:Math.ceil(n/o);a-=c;const u=kd(),h=Math.random()*Math.PI*2,d=(1.2+Math.random()*1.8)*r,p={id:++Fe.ids,mesh:u,x:i,y:e,z:t,vx:Math.cos(h)*d,vz:Math.sin(h)*d,vy:5+Math.random()*2,life:Ze.emberLife,value:c,settled:!1,phase:Math.random()*6};u.scale.setScalar(.8+Math.min(c,6)*.08),dt.add(u),Hn.push(p)}}function qs(i,e,t,n,s=()=>!0){let r=null,o=n;for(const a of i){if(!s(a))continue;const l=Math.hypot(a.x-e,a.z-t);l<o&&(o=l,r=a)}return r}function Za(){const i=qs(Ge.plinths,D.x,D.z,Ze.reach,l=>!l.tower);if(i)return{x:i.x,z:i.z,y:i.y,plinth:i,ok:!0};const e=-Math.sin(D.face),t=-Math.cos(D.face),n=D.x+e*Ze.placeAhead,s=D.z+t*Ze.placeAhead,r=Ge.heightAt(n,s),o=Ge.lighthouse.pos;let a="";return r<.35?a="i vannet":Ge.extras.blocks(n,s)?a="i lavaen":Ge.pathDist(n,s)<1.9?a="på stien":Ge.slopeAt(n,s)>.6?a="for bratt":Math.hypot(n-o.x,s-o.z)<5.5?a="for nær fyret":Qt.some(l=>Math.hypot(l.x-n,l.z-s)<Ze.minTowerGap)?a="for nær et annet tårn":Ge.plinths.some(l=>Math.hypot(l.x-n,l.z-s)<1.9)?a="oppå en sokkel (gå helt bort til den)":Ge.colliders.some(l=>!l.tower&&(l.x-n)**2+(l.z-s)**2<(l.r+.7)**2)&&(a="i veien for et tre eller en stein"),{x:n,z:s,y:r,plinth:null,ok:!a,why:a}}function za(i){const e=Za();if(!e.ok){At.deny(),nn(`Ikke lov å bygge her: ${e.why}`);return}const t=Ns[i];if(Y.embers<t.cost){At.deny(),nn(`Trenger ${t.cost} ✦ glør`),Gn(tn.embers,"embersBad",Math.random(),"bad");return}Y.embers-=t.cost,sp(i,e),Y.buildMode=!1,e.plinth&&nn(`${t.name} på gammel sokkel: +25 % rekkevidde`)}function sp(i,e,t=0){const n=Ns[i],s=Vr(k_(i),"tower");if(s.position.set(e.x,e.y,e.z),!e.plinth){const o=new ot(JM,QM);o.position.y=.04,o.receiveShadow=!0,s.add(o)}dt.add(s);const r={id:t||++Fe.ids,type:i,def:n,mesh:s,x:e.x,z:e.z,y:e.y,level:1,cd:.3,plinth:e.plinth,onPlinth:!!e.plinth};return e.plinth&&(e.plinth.tower=r),Qt.push(r),Ge.colliders.push({x:e.x,z:e.z,r:1,tower:r}),Et.emit(e.x,e.y+.3,e.z,{n:24,color:"#ffe3a0",speed:4,up:3,life:.8,gravity:5}),At.build(),r}const JM=new Ft(.95,1.05,.12,10),QM=new Gt({color:"#8a8478"}),Ji=new Mt;{const i=new ot(new Hs(1,24),new Rt({transparent:!0,opacity:.35,depthWrite:!1}));i.rotation.x=-Math.PI/2;const e=new _s(.965,1,64);e.rotateX(-Math.PI/2);const t=new ot(e,new Rt({transparent:!0,opacity:.6,depthWrite:!1})),n=new ot(new Ft(.55,.7,1.6,10),new Rt({transparent:!0,opacity:.25,depthWrite:!1}));n.position.y=.8,Ji.add(i,t,n),Ji.userData={disc:i,ring:t,pillar:n},Ji.visible=!1,Ji.renderOrder=20,dt.add(Ji)}function ey(i,e,t){if(Ji.visible=i,!i)return;const n=e.ok,s=n?e.plinth?"#9fffb0":"#7be06a":"#ff5a4a",r=Ns[t].range*(e.plinth?Ze.plinthBonus:1);Ji.position.set(e.x,e.y+.06,e.z);const o=Ji.userData;for(const a of[o.disc,o.ring,o.pillar])a.material.color.set(s);o.ring.scale.setScalar(r),o.ring.visible=n,o.pillar.visible=!e.plinth}const $i=(i,e)=>{const t=i.level-1;return e==="range"?i.def.range*(1+.12*t)*(i.onPlinth?Ze.plinthBonus:1):e==="dmg"?i.def.dmg*[1,1.7,2.6,3.9,5.85][t]:e==="rate"?i.def.cooldown/(1+.15*t):i.def[e]},Ea=[];function rp(i){const e=zd();Pu(e,1),Kt.userData.roll.getWorldPosition(e.position),dt.add(e),Ea.push({mesh:e,from:e.position.clone(),to:new O(i.x,i.y+1.3*i.mesh.scale.y,i.z),age:0})}function ty(i){for(let e=Ea.length-1;e>=0;e--){const t=Ea[e];t.age+=i;const n=Math.min(1,t.age/.45);t.mesh.position.lerpVectors(t.from,t.to,n),t.mesh.position.y+=Math.sin(n*Math.PI)*1.2,t.mesh.rotation.z+=i*14,n>=1&&(dt.remove(t.mesh),Ea.splice(e,1),xs.emit(t.to.x,t.to.y+.3,t.to.z,{n:6,color:"#e8e2dc",speed:1.2,up:1.4,life:1.2,gravity:-.3}))}}function ny(i){for(const e of It)e.K.rollP=-1;ty(i);for(const e of Qt){if(e.cd-=i,e.upg&&Fe.guest)wi(e,Math.min(1,e.upg.t/e.upg.dur));else if(e.upg){const c=It.find(h=>{var d;return h.K.stun<=0&&((d=h.K.roll)==null?void 0:d.tower)===e})||null,u=!!c;Ni(c||dn,()=>{if(u)e.upg.t+=i,e.rollEase=(e.rollEase??0)+(Math.min(1,e.upg.t/e.upg.dur)-(e.rollEase??0))*(1-Math.exp(-i/.05)),D.rollP=Math.min(1,e.rollEase),D.rollTower=e;else if(e.upg.t>0){const h=Kt.userData.roll.getWorldPosition(Ar);Et.emit(h.x,h.y,h.z,{n:14,color:"#4f8f3a",speed:1.4,up:.8,life:.8,gravity:6}),Et.emit(h.x,h.y,h.z,{n:5,color:"#fffdf5",speed:1,up:.6,life:.7,gravity:5}),e.upg.t=0,e.rollEase=0,e.upgReset=!0,Lo("😩"),Ot.rumble(220,.5),nn(`Rullingen ble avbrutt! Start på nytt ved ${e.def.name}`)}}),wi(e,Math.min(1,e.upg.t/e.upg.dur)),u&&Math.random()<i*8&&Et.emit(c.K.x,c.mesh.position.y+2.2,c.K.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),e.upg.t>=e.upg.dur&&(!u||e.rollEase>=.97)&&(Ni(c||dn,()=>rp(e)),Fe.host&&Fe.ev.push(["u",e.id,c?c.slot:-1]),c&&(c.K.rollP=-1,c.K.roll=null),e.rollEase=0,e.upg=null,e.level+=1,Lu(e,e.level),wi(e,0),Et.emit(e.x,e.y+1.2,e.z,{n:30,color:"#8ff0ff",speed:4,up:4,life:.9,gravity:5}),At.upgrade(),nn(`${e.def.name} er nå nivå ${e.level}`))}if(e.armBack>0&&(e.armBack-=i,e.armBack<=0&&(e.mesh.userData.arm.rotation.x=-.35)),e.type==="lamp"&&e.mesh.userData.blobs.forEach((c,u)=>c.position.y=.75+Math.sin(Y.time*.8+u*2.1)*.35),e.blind>0){e.blind-=i,Math.random()<i*8&&Et.emit(e.x,e.y+2,e.z,{n:1,color:"#fff6c8",speed:.6,up:.8,life:.5,gravity:-.4});continue}const t=$i(e,"range");let n=null,s=-1;for(const c of cn){if(!c.alive||(c.def.flying?!e.def.air:e.def.ground===!1)||Math.hypot(c.x-e.x,c.z-e.z)>t)continue;const u=$M(c);u>s&&(s=u,n=c)}const r=e.mesh.userData.head;if(e.type==="speaker"){const c=Math.max(0,Math.sin(Y.time*7.3));r.rotation.z=Math.sin(Y.time*3.65)*.05,e.mesh.userData.woofers.forEach(u=>u.scale.set(1+c*.15,1,1+c*.15)),n&&(r.rotation.y+=ka(Math.atan2(-(n.x-e.x),-(n.z-e.z)),r.rotation.y)*Math.min(1,i*3))}else if(n){const c=Math.atan2(-(n.x-e.x),-(n.z-e.z));r.rotation.y+=ka(c,r.rotation.y)*Math.min(1,i*10)}if(!n||e.cd>0)continue;e.cd=$i(e,"rate");const o=e.x,a=e.y+1.4*e.mesh.scale.y,l=e.z;if(e.type==="ring"){const c=F_();c.position.set(o,a-.3,l),dt.add(c),vi.push({kind:"bolt",src:e,mesh:c,target:n,dmg:$i(e,"dmg"),tx:n.x,ty:n.y,tz:n.z,age:0}),At.puff()}else if(e.type==="chips"){const c=Fd();c.position.set(o,e.y+1,l),dt.add(c);const[u,h]=n.def.flying?[0,0]:Cn.dir(n.x,n.z),d=n.x+u*n.def.speed*.6,p=n.z+h*n.def.speed*.6;vi.push({kind:"shell",src:e,mesh:c,sx:o,sy:e.y+1,sz:l,ex:d,ez:p,ey:Ge.heightAt(d,p),t:0,dur:.95,dmg:$i(e,"dmg"),splash:e.def.splash*(1+.1*(e.level-1))}),Et.emit(o,e.y+1.3,l,{n:6,color:"#d8d0c0",speed:1,up:2,life:.5,gravity:-1}),At.mortar()}else if(e.type==="speaker"){for(const u of cn)!u.alive||Math.hypot(u.x-e.x,u.z-e.z)>t||(u.def.noMood||(u.slow=e.def.slowTime),Us(u,$i(e,"dmg"),e));const c=Od();c.position.set(e.x,e.y+.3,e.z),dt.add(c),Er.push({mesh:c,t:0,r:t}),Et.emit(e.x,e.y+1.8,e.z,{n:6,color:["#7be06a","#f2c94c","#ff7a5a"][Math.floor(Math.random()*3)],speed:2.2,up:1.6,life:.9,gravity:.5}),At.skank()}else if(e.type==="bubble"){const c=Gd();c.position.set(o,a+.2,l),dt.add(c),vi.push({kind:"bubble",src:e,mesh:c,target:n,dmg:$i(e,"dmg"),trap:e.def.trap,tx:n.x,ty:n.y,tz:n.z}),At.pickup()}else if(e.type==="kite"){if(vi.some(u=>u.kind==="kite"&&u.tower===e)){e.cd=.2;continue}const c=Vr(Bd(),"tower");c.position.set(o,a,l),dt.add(c),vi.push({kind:"kite",mesh:c,tower:e,sx:o,sz:l,tx:n.x,tz:n.z,phase:"out",t:0,tick:0,dmg:$i(e,"dmg"),zone:e.def.zone*(1+.1*(e.level-1)),hover:e.def.hover}),At.puff()}else if(e.type==="pizza"){const c=B_();c.position.set(o,e.y+1.2,l),dt.add(c);const[u,h]=Cn.dir(n.x,n.z),d=n.x+u*n.def.speed*1.1,p=n.z+h*n.def.speed*1.1;vi.push({kind:"shell",src:e,pizza:!0,mesh:c,sx:o,sy:e.y+1.2,sz:l,ex:d,ez:p,ey:Ge.heightAt(d,p),t:0,dur:1.3,arc:7,dmg:$i(e,"dmg"),splash:e.def.splash*(1+.1*(e.level-1))}),e.mesh.userData.arm.rotation.x=.9,e.armBack=.5,At.mortar()}else if(e.type==="lamp"){for(const c of cn)!c.alive||Math.hypot(c.x-e.x,c.z-e.z)>t||(c.slow=Math.max(c.slow,e.def.slowTime),Us(c,$i(e,"dmg"),e));Math.random()<.3&&Et.emit(e.x,e.y+1.6,e.z,{n:2,color:"#ff9a3a",speed:.8,up:1.2,life:.8,gravity:-.3})}}}function iy(i){var e;for(let t=vi.length-1;t>=0;t--){const n=vi[t];let s=!1;if(n.kind==="bolt"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y+(n.target.def.flying?0:.5),n.tz=n.target.z);const r=n.mesh.position,o=n.tx-r.x,a=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(o,a,l),u=18*i;n.age+=i,n.mesh.lookAt(n.tx,n.ty,n.tz),n.mesh.scale.setScalar(.7+n.age*2.2),c<=u+.3?(s=!0,n.target.alive&&(Us(n.target,n.dmg,n.src),xs.emit(n.tx,n.ty+.3,n.tz,{n:3,color:"#f4f0ea",speed:1,up:.8,life:.8,gravity:-.6}),At.hit())):r.set(r.x+o/c*u,r.y+a/c*u,r.z+l/c*u)}else if(n.kind==="shell"){n.t+=i/n.dur;const r=Math.min(1,n.t);if(n.mesh.position.set(n.sx+(n.ex-n.sx)*r,n.sy+(n.ey-n.sy)*r+Math.sin(Math.PI*r)*(n.arc||5),n.sz+(n.ez-n.sz)*r),n.mesh.rotation.set(r*9,r*5,0),n.t>=1){s=!0;for(const o of cn){if(!o.alive||o.def.flying)continue;const a=Math.hypot(o.x-n.ex,o.z-n.ez);a<n.splash&&Us(o,n.dmg*(a<n.splash*.4?1:.6),n.src)}Et.emit(n.ex,n.ey+.3,n.ez,{n:26,color:n.pizza?"#ff7040":"#ffd060",speed:5,up:5,life:.7,gravity:12}),xs.emit(n.ex,n.ey+.3,n.ez,{n:4,color:"#f6e7c0",speed:1.5,up:1,life:.8,gravity:-.3}),At.crunch(),On=Math.max(On,.12)}}else if(n.kind==="bubble"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y,n.tz=n.target.z);const r=n.mesh.position,o=n.tx-r.x,a=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(o,a,l),u=13*i;n.mesh.scale.setScalar(1+Math.sin(Y.time*12)*.06),c<=u+.3?(s=!0,n.target.alive&&(Us(n.target,n.dmg,n.src),n.target.trap=Math.max(n.target.trap||0,n.trap*Math.min(1,((e=n.target.def.resist)==null?void 0:e.bubble)??1))),Et.emit(n.tx,n.ty,n.tz,{n:6,color:"#dff6ff",speed:2,up:1,life:.35})):r.set(r.x+o/c*u,r.y+a/c*u,r.z+l/c*u)}else if(n.kind==="kite"){n.t+=i;const r=n.mesh.position;if(n.mesh.userData.tailSegs.forEach((o,a)=>{o.rotation.x=Math.sin(Y.time*5-a*.9)*.35,o.rotation.z=Math.sin(Y.time*3.7-a*.7)*.25}),Qt.includes(n.tower)||(n.phase="back"),n.phase==="out"){const o=n.tx-r.x,a=n.tz-r.z,l=Math.hypot(o,a),c=9*i;r.y+=(4.2-r.y)*Math.min(1,i*2),l<c?(n.phase="hover",n.t=0):(r.x+=o/l*c,r.z+=a/l*c)}else if(n.phase==="hover"){if(r.x=n.tx+Math.sin(Y.time*1.7)*.6,r.z=n.tz+Math.cos(Y.time*1.3)*.4,r.y=4.2+Math.sin(Y.time*2.3)*.3,n.tick-=i,n.tick<=0){n.tick=.25;for(const o of cn)o.alive&&o.def.flying&&Math.hypot(o.x-r.x,o.z-r.z)<n.zone&&(Us(o,n.dmg*.4,n.tower),o.slow=Math.max(o.slow,.4));Et.emit(r.x,r.y-.3,r.z,{n:2,color:"#ffd0b0",speed:1.5,up:-.5,life:.5,gravity:0})}n.t>n.hover&&(n.phase="back")}else{const o=n.sx-r.x,a=n.sz-r.z,l=Math.hypot(o,a),c=11*i;l<c?s=!0:(r.x+=o/l*c,r.z+=a/l*c)}n.mesh.rotation.set(Math.sin(Y.time*3)*.2,Y.time*.5,Math.cos(Y.time*2.5)*.25)}s&&(dt.remove(n.mesh),vi.splice(t,1))}for(let t=Er.length-1;t>=0;t--){const n=Er[t];n.t+=i/(n.dur||.6),n.mesh.scale.setScalar(.5+n.t*n.r),n.mesh.material.opacity=.7*(1-n.t),n.t>=1&&(dt.remove(n.mesh),n.mesh.material.dispose(),Er.splice(t,1))}}function sy(i){var e,t;for(const n of cn){if(!n.alive)continue;n.phase+=i*n.def.anim;const s=n.slow>0?.5:1;n.slow-=i;let r=n.def.speed*s*(n.speedMul||1);n.trap>0?(n.trap-=i,r*=.15,n.bubbleFx||(n.bubbleFx=Gd(),n.bubbleFx.scale.setScalar(3.2),n.mesh.add(n.bubbleFx)),n.bubbleFx.visible=!0):n.bubbleFx&&(n.bubbleFx.visible=!1);const o=n.mesh.userData.body;if(n.def.flying){const l=Ge.lighthouse.pos;let c=l.x-n.x,u=l.z-n.z;const h=Uu(n.x,n.z),d=h.K,p=Math.hypot(d.x-n.x,d.z-n.z);let g=n.trap>0?1.1:n.def.alt||4.2;if(n.def.swoop&&p<6&&d.stun<=0&&n.hitCd<=0&&!(n.trap>0)){const x=Math.hypot(c,u);c=c/x*.5+(d.x-n.x)/p*.9,u=u/x*.5+(d.z-n.z)/p*.9,g=1.5}n.hitCd-=i;const _=Math.hypot(c,u)||1,m=Math.cos(Y.time*1.3+n.lane*4)*(n.type==="balloon"?.4:1.2);n.x+=(c/_+-u/_*m*.35)*r*i,n.z+=(u/_+c/_*m*.35)*r*i,n.mesh.rotation.z=-m*(n.type==="balloon"?.05:.25);const f=Math.max(Ge.heightAt(n.x,n.z),0);n.y+=(f+g-n.y)*Math.min(1,i*2.5);const M=n.mesh.userData.blob;M&&(M.position.y=(f-n.y)/n.var+.05,M.material.opacity=1,M.scale.setScalar(1)),n.mesh.rotation.y=Math.atan2(-c,-u);const b=n.mesh.userData;if((e=b.wings)==null||e.forEach((x,R)=>x.rotation.z=Math.sin(n.phase)*.45*(R?-1:1)),(t=b.rotors)==null||t.forEach(x=>x.rotation.y+=i*40),b.rotor&&(b.rotor.rotation.y+=i*30,b.tail.rotation.x+=i*30),o.position.y=Math.sin(n.phase*.5)*(n.type==="balloon"?.3:.15),n.def.blind&&(n.blindCd=(n.blindCd??n.def.blind.every*.5)-i,b.beam&&(b.beam.visible=n.blindCd>n.def.blind.every-.8),n.blindCd<=0)){n.blindCd=n.def.blind.every;const x=qs(Qt,n.x,n.z,n.def.blind.range);x&&(x.blind=n.def.blind.dur,nn(`${n.def.name} blendet ${x.def.name}!`)),p<5&&Ni(h,()=>Qc(Ze.airStress,n.x,n.z,!0))}n.def.swoop&&p<1.3&&Math.abs(n.y-h.mesh.position.y-1)<1.4&&d.stun<=0&&n.hitCd<=0&&Ni(h,()=>ay(n)),Math.hypot(l.x-n.x,l.z-n.z)<3.4&&Jc(n)}else{const[l,c,u]=Cn.dir(n.x,n.z);n.remain=u;const h=Ge.lighthouse.pos,d=Math.hypot(h.x-n.x,h.z-n.z);if(d<4.3||u<.6){Jc(n);continue}let p=l,g=c;!p&&!g&&(p=(h.x-n.x)/d,g=(h.z-n.z)/d),n.hx=(n.hx||0)+(p-(n.hx||0))*Math.min(1,i*6),n.hz=(n.hz||0)+(g-(n.hz||0))*Math.min(1,i*6);const _=Math.hypot(n.hx,n.hz)||1,m=n.lane*Math.min(1,d/10);n.x+=n.hx/_*r*i+-n.hz/_*m*i*.5,n.z+=n.hz/_*r*i+n.hx/_*m*i*.5,n.y=Ge.heightAt(n.x,n.z),n.mesh.rotation.y=Math.atan2(-n.hx,-n.hz);for(const f of It){const M=f.K;M.inv<=0&&M.faint<=0&&Math.abs(M.x-n.x)<1.2&&Math.abs(M.z-n.z)<1.2&&Math.hypot(M.x-n.x,M.z-n.z)<1.1&&Ni(f,()=>Qc(n.def.stress??10,n.x,n.z))}if(n.type==="clerk")o.position.y=Math.abs(Math.sin(n.phase))*.12,o.rotation.z=Math.sin(n.phase)*.06,n.mesh.userData.arm.position.y=.9+Math.max(0,Math.sin(n.phase*.5))*.25;else if(n.type==="tank"){const f=Math.abs(Math.sin(n.phase));o.position.y=f*.05,o.rotation.z=Math.sin(n.phase)*.07;const M=Math.pow(1-f,6);o.scale.set(1+M*.06,1-M*.08,1+M*.06)}else n.type==="swarm"?(o.position.y=Math.abs(Math.sin(n.phase))*.14,o.rotation.y=Math.sin(n.phase*.5)*.3):n.type==="complainer"?(o.position.y=Math.abs(Math.sin(n.phase))*.16,n.mesh.userData.arm.rotation.z=Math.sin(n.phase*.5)*.4):n.type==="lobbyist"||n.type==="lobbyMini"?(o.position.y=Math.abs(Math.sin(n.phase))*.05,o.rotation.z=Math.sin(n.phase*.5)*.17):n.type==="auditor"?(o.position.y=Math.abs(Math.sin(n.phase))*.03,o.rotation.z=0):(o.position.y=Math.abs(Math.sin(n.phase))*.08,o.rotation.z=Math.sin(n.phase)*.05)}if(n.hitT>0){n.hitT-=i;const l=Math.max(0,n.hitT)/.18;o.scale.set(1+l*.16,1-l*.16,1+l*.16),o.position.z=l*.15,n.hitT<=0&&(o.scale.set(1,1,1),o.position.z=0)}n.blinkT-=i,n.blinkT<-.12&&(n.blinkT=2+Math.random()*3.5);for(const l of n.mesh.userData.eyes)l.scale.y=n.blinkT<0?.12:1;n.mesh.position.set(n.x,n.y,n.z),n.slow>0&&Math.random()<i*6&&Et.emit(n.x,n.y+.8,n.z,{n:1,color:"#b8e6ff",speed:.4,up:.6,life:.6,gravity:-.5});const a=n.mesh.userData.hpBar;if(a.visible){a.quaternion.copy(Wt.quaternion),a.quaternion.premultiply(n.mesh.quaternion.clone().invert());const l=Math.max(0,n.hp/n.maxHp),c=n.mesh.userData.hpFg;c.scale.x=.96*l,c.position.x=-.48*(1-l),c.material.color.setHSL(.33*(1-l),.7,.55)}}for(let n=cn.length-1;n>=0;n--)cn[n].alive||cn.splice(n,1)}function Jc(i,e=!1){if(Fe.guest&&!e)return;Fe.host&&Fe.ev.push(["l",i.id]),Y.leaks[i.type]=(Y.leaks[i.type]||0)+1,i.alive=!1,dt.remove(i.mesh),Y.lights=Math.max(0,Y.lights-1),Ge.lighthouse.setLights(Y.lights),Gn(tn.lights,"lights",Y.lights,"bad");const t=Ge.lighthouse.flamePos();xs.emit(t.x,t.y,t.z,{n:10,color:"#b8b4b0",speed:.8,up:1.6,life:1.8,gravity:-.4}),Et.emit(t.x,t.y,t.z,{n:14,color:"#8a8580",speed:1.6,up:.6,life:1.6,gravity:4}),nn(`${i.def.name} slukket litt glød!`),At.lose(),On=.3,Y.lights<=0&&!Fe.guest&&Vu(!1)}const Fn=[],yi=document.createElement("div");yi.id="chillbar";yi.innerHTML="<i></i>";document.body.appendChild(yi);let Df=0;function Lo(i){if(!dn.local)return;const e=document.createElement("div");e.className="pop-emoji",e.textContent=i,xt.set(D.x,Kt.position.y+2.6,D.z).project(Wt),e.style.left=`${(xt.x*.5+.5)*innerWidth}px`,e.style.top=`${(-xt.y*.5+.5)*innerHeight}px`,document.body.appendChild(e),setTimeout(()=>e.remove(),900)}function Qc(i,e,t,n=!1){if(!Fe.guest&&!(D.faint>0||D.inv>0)){if(D.chill=Math.max(0,D.chill-i),D.inv=Ze.stressInvuln,D.flinch=.55,!n){const s=D.x-e,r=D.z-t,o=Math.hypot(s,r)||1;D.vx+=s/o*Ze.stressPush,D.vz+=r/o*Ze.stressPush,D.goal=null}Et.emit(D.x,Kt.position.y+1.4,D.z,{n:8,color:"#ff6a5a",speed:2,up:1.5,life:.4}),Lo("😓"),yi.classList.remove("hit"),yi.offsetWidth,yi.classList.add("hit"),Gn(tn.chill,"chillBad",Math.random(),"bad"),D.chill<=0&&ry()}}function ry(){D.faint=Ze.faintTime,D.stun=Ze.faintTime,D.faints++,D.goal=null,D.vx=D.vz=0;const i=Math.floor(Y.embers*Ze.faintLoss);i>0&&(Y.embers-=i,Ou(D.x,Kt.position.y+1,D.z,i,!1,1.6)),D.carrying&&(D.carrying=!1),Lo("😵"),nn(`😵 Vokteren besvimte av stress! Våkner ved fyret om ${Ze.faintTime} s`),At.stun()}function Bu(i,e,t=0){if(Fe.guest&&!t)return;const n=Fd();n.scale.setScalar(1.8),n.position.set(i,Ge.heightAt(i,e)+.5,e),dt.add(n),Fn.push({id:t||++Fe.ids,mesh:n,x:i,z:e,life:Ze.bagLife})}function oy(i){if(Fe.guest){dn.local&&If();return}D.inv-=i;const e=Ge.lighthouse.pos;D.faint>0?(D.faint-=i,D.faint<=0&&(D.x=e.x+1,D.z=e.z+7.5,D.vx=D.vz=0,D.stun=0,D.chill=Ze.chillMax*Ze.wakeChill,D.inv=Ze.stressInvuln*2,Et.emit(D.x,Ge.heightAt(D.x,D.z)+1,D.z,{n:14,color:"#9fffb0",speed:2,up:2,life:.7}))):Math.hypot(e.x-D.x,e.z-D.z)<Ze.regenReach&&(D.chill=Math.min(Ze.chillMax,D.chill+Ze.regen*i));for(let t=Fn.length-1;dn===It[0]&&t>=0;t--){const n=Fn[t];n.life-=i,n.mesh.rotation.y+=i*1.5,n.mesh.position.y=Ge.heightAt(n.x,n.z)+.5+Math.sin(Y.time*3+t)*.12,n.mesh.visible=n.life>4||Math.sin(n.life*12)>0;const s=Uu(n.x,n.z,r=>r.K.faint<=0&&Math.hypot(n.x-r.K.x,n.z-r.K.z)<1.4);s&&Ni(s,()=>{D.chill=Math.min(Ze.chillMax,D.chill+Ze.bagHeal),nn(`🥔 Chips! +${Ze.bagHeal} chill`),Lo("😌"),At.pickup(),n.life=0}),n.life<=0&&(dt.remove(n.mesh),Fn.splice(t,1))}dn.local&&If()}function If(){const i=Math.round(D.chill);Gn(tn.chill,"chill",i),tn.chill.classList.toggle("low",i<30),i!==Df&&(Df=i,yi.firstChild.style.width=`${100*D.chill/Ze.chillMax}%`,yi.classList.toggle("low",i<30));const e=(i<Ze.chillMax||D.faint>0)&&Y.phase!=="title";yi.style.display=e?"block":"none",e&&(xt.set(D.x,Kt.position.y+2.3,D.z).project(Wt),yi.style.left=`${(xt.x*.5+.5)*innerWidth}px`,yi.style.top=`${(-xt.y*.5+.5)*innerHeight}px`)}function ay(i){if(Fe.guest||(Fe.host&&Fe.ev.push(["st",dn.slot]),Qc(Ze.airStress,i.x,i.z,!0),D.faint>0))return;D.stun=Ze.stunTime,i.hitCd=4;const e=Math.floor(Y.embers*Ze.stunLoss);e>0&&(Y.embers-=e,Ou(D.x,Kt.position.y+1,D.z,e,!1,1.6)),D.carrying&&(D.carrying=!1,nn("Rullepapiret blåste bort!")),Et.emit(D.x,Kt.position.y+1.5,D.z,{n:16,color:"#ffffff",speed:3,up:2,life:.5}),At.stun(),On=.2}function ly(i){if(Fe.guest){Uy(i);return}for(let e=Hn.length-1;e>=0;e--){const t=Hn[e];t.life-=i,t.phase+=i;const n=Math.max(Ge.heightAt(t.x,t.z),.1)+.35;t.settled||(t.vy-=16*i,t.x+=t.vx*i,t.z+=t.vz*i,t.y+=t.vy*i,t.y<=n&&(t.y=n,Math.abs(t.vy)>2.5?(t.vy=-t.vy*.4,t.vx*=.6,t.vz*=.6):t.settled=!0));const s=Uu(t.x,t.z,u=>u.K.stun<=0),r=s==null?void 0:s.K,o=r?Math.hypot(r.x-t.x,r.z-t.z):1/0;if(o<Ze.magnet){const u=(1-o/Ze.magnet)*14+3;t.x+=(r.x-t.x)/o*u*i,t.z+=(r.z-t.z)/o*u*i,t.settled=!0,t.y=n}const a=t.settled?Math.sin(t.phase*3)*.12:0;t.mesh.position.set(t.x,t.y+a,t.z),t.mesh.rotation.y+=i*3;const l=t.life<5,c=(.8+Math.min(t.value,6)*.08)*(l?.55+.45*(t.life/5):1);if(t.mesh.scale.setScalar(c),t.mesh.visible=!l||Math.sin(t.life*(t.life<1.5?30:16))>-.4,Math.random()<i*2.5&&Et.emit(t.x,t.y+.2,t.z,{n:1,color:"#ffb347",speed:.3,up:1.2,life:.6,gravity:-.5}),o<.9)Y.embers+=t.value,Gn(tn.embers,"embers",Y.embers,"bump"),Et.emit(t.x,t.y+.3,t.z,{n:8,color:"#ffe08a",speed:2,up:2.5,life:.4}),At.pickup(),dt.remove(t.mesh),Hn.splice(e,1);else if(t.life<=0){const u=Math.max(1,Math.round(t.value*Ze.expiredRefund));Y.embers+=u,Et.emit(t.x,t.y,t.z,{n:6,color:"#555048",speed:.6,up:1,life:.8,gravity:-.6}),dt.remove(t.mesh),Hn.splice(e,1)}}}let Na=0,op="";function nn(i){var e;if(!dn.local){(e=dn.hints)==null||e.push(i);return}Na=2,op=i,ri.textContent=""}function Uf(i){for(const e of It)Ni(e,()=>cy(i))}function cy(i){var k,L;const e=Kt.userData;(Y.phase==="prep"||Y.phase==="wave")&&oy(i),D.stun-=i,e.stars.visible=D.stun>0,e.stars.rotation.y+=i*6;let t=0,n=0;if(D.stillT=!Ot.move.x&&!Ot.move.z&&!D.goal?D.stillT+i:0,D.roll)D.goal=null;else if(D.stun<=0&&(Y.phase==="prep"||Y.phase==="wave")){if(Ot.move.x||Ot.move.z){D.goal=null;const U=Ot.yaw??Zi,X=Math.cos(U),B=Math.sin(U);t=Ot.move.x*X+Ot.move.z*B,n=-Ot.move.x*B+Ot.move.z*X}else if(D.goal){const U=D.goal,X=U.x-D.x,B=U.z-D.z;if(U.field===void 0){U.field=null;const j=Math.ceil(Math.hypot(X,B)/.5);for(let Q=1;Q<j;Q++)if(!Ge.isWalkable(D.x+X*Q/j,D.z+B*Q/j)){U.field=Cn.walkField(U.x,U.z);break}}const z=U.field?Math.min(U.field.at(D.x,D.z),Math.hypot(X,B)+50):Math.hypot(X,B);U.t+=i;const I=z<.35||U.spot&&Math.hypot(U.spot.x-D.x,U.spot.z-D.z)<U.reach;if(z<U.best-.3&&(U.best=z,U.lastGain=U.t),I||U.t>12||U.t-U.lastGain>1.5)D.goal=null;else{const j=Math.min(1,z/.8),Q=U.field&&Math.hypot(X,B)>1.5?U.field.dir(D.x,D.z):null,se=Q&&(Q[0]||Q[1])?Q[0]:X/Math.hypot(X,B),_e=Q&&(Q[0]||Q[1])?Q[1]:B/Math.hypot(X,B);t=se,n=_e;for(const V of Ge.colliders){if(U.spot&&V.x===U.spot.x&&V.z===U.spot.z)continue;const te=V.x-D.x,ae=V.z-D.z,le=te*se+ae*_e;if(le<=0||le>V.r+2.2||le>z)continue;const pe=-te*_e+ae*se;if(Math.abs(pe)>V.r+.6)continue;const Ie=(1-Math.abs(pe)/(V.r+.6))*1.6*(pe>=0?1:-1);t-=-_e*Ie,n-=se*Ie}const qe=Math.hypot(t,n)||1;t=t/qe*j,n=n/qe*j}}}Fe.guest&&!dn.local&&(Ly(i),t=n=0);const r=Ge.heightAt(D.x,D.z)<.05,o=Ze.keeperSpeed*(D.carrying?Ze.carrySlow:1)*(r?Ze.wadeSlow:1),a=t*o,l=n*o,c=(k=Ge.isIce)!=null&&k.call(Ge,D.x,D.z)?1.6:12;Fe.guest&&!dn.local||(D.vx+=(a-D.vx)*Math.min(1,i*c),D.vz+=(l-D.vz)*Math.min(1,i*c));let u=D.x+D.vx*i,h=D.z+D.vz*i;Fe.guest&&!dn.local&&(u=D.x,h=D.z),Ge.isWalkable(u,h)||(Ge.isWalkable(u,D.z)?h=D.z:Ge.isWalkable(D.x,h)?u=D.x:(u=D.x,h=D.z));for(const U of Ge.colliders){const X=u-U.x,B=h-U.z,z=Math.hypot(X,B),I=U.r+.4;z<I&&z>1e-4&&(u=U.x+X/z*I,h=U.z+B/z*I)}D.x=u,D.z=h;const d=Math.hypot(D.vx,D.vz);if(d>.3){const U=Math.atan2(-D.vx,-D.vz);D.face+=ka(U,D.face)*Math.min(1,i*12),D.walk+=i*d*2.2}if(Kt.rotation.y=D.face,Kt.position.set(D.x,Math.max(Ge.heightAt(D.x,D.z),-.25),D.z),r&&d>1&&(D.splash=(D.splash||0)-i,D.splash<=0)){D.splash=.22,Et.emit(D.x,.15,D.z,{n:4,color:"#e8fbff",speed:1.6,up:2.2,life:.35,gravity:12});const U=Od();U.position.set(D.x,.1,D.z),U.material.color.set("#f4fdff"),dt.add(U),Er.push({mesh:U,t:0,r:1.6,dur:.9})}const p=Math.min(1,d/3),g=Math.sin(D.walk)*p;e.legs[0].position.z=g*.2,e.legs[1].position.z=-g*.2,e.legs[0].position.y=.2+Math.max(0,g)*.12,e.legs[1].position.y=.2+Math.max(0,-g)*.12;const _=d>.6;_!==!!D.wasMoving&&(D.sq=_?1:-1,D.wasMoving=_),D.sq=(D.sq||0)*Math.exp(-i*7);const m=d<.3?Math.sin(Y.time*2.2)*.025:0;e.body.scale.set(1-m*.5-D.sq*.07,1+m+D.sq*.12,1-m*.5-D.sq*.07);const f=Math.sign(Math.sin(D.walk));d>2&&!r&&f!==D.lastStep&&Et.emit(D.x,Kt.position.y+.1,D.z,{n:2,color:"#d9c9a4",speed:.7,up:.6,life:.45,gravity:1}),D.lastStep=f,D.flinch=Math.max(0,(D.flinch||0)-i),D.cheer=Math.max(0,(D.cheer||0)-i);const M=d>.5&&((L=Ge.isIce)==null?void 0:L.call(Ge,D.x,D.z)),b=Math.abs(g)*.09+(D.cheer>0?Math.abs(Math.sin(D.cheer*9))*.35:0);if(D.sit=(D.sit??0)+((D.roll?1:0)-(D.sit??0))*Math.min(1,i*10),e.body.position.y=b-D.sit*.24,D.sit>.01)for(const U of e.legs)U.position.z-=D.sit*.3,U.position.y+=D.sit*.12;e.body.rotation.x=D.faint>0?0:-.35*Math.min(1,D.flinch*2.5),e.body.rotation.z=D.faint>0?1.45:D.stun>0?.5:g*.05+(M?Math.sin(Y.time*7)*.12:0)+(D.flinch>0?Math.sin(D.flinch*40)*.08:0);let x=g*.6,R=-g*.45,S=0,T=0;M&&(S=-1.25+Math.sin(Y.time*9)*.25,T=1.25+Math.cos(Y.time*8)*.25,x=R=0),D.cheer>0&&(x=R=-2.9,S=-.3,T=.3),D.flinch>0&&(x=-2.5,S=.5);const C=D.rollP>=0&&d<.3&&D.faint<=0;if(C){const U=Math.sin(Y.time*7)*.12;x=1.35+U,S=.55,R=1.35-U,T=-.55;const X=D.rollTower,B=Math.atan2(-(X.x-D.x),-(X.z-D.z));if(D.face+=ka(B,D.face)*Math.min(1,i*8),Kt.rotation.y=D.face,Pu(e.roll,D.rollP),e.roll.rotation.x=Math.sin(Y.time*7)*.5,Math.random()<i*4&&D.rollP<.5){const z=e.roll.getWorldPosition(Ar);Et.emit(z.x,z.y,z.z,{n:1,color:"#5aa84a",speed:.4,up:.3,life:.5,gravity:4})}}e.roll.visible=C,e.armR.visible=C,C?e.lanternArm.position.set(.36,.72,.18):e.lanternArm.position.set(.48,1,-.1);const y=Math.min(1,i*14);e.armL.rotation.x+=(x-e.armL.rotation.x)*y,e.armL.rotation.z+=(S-e.armL.rotation.z)*y;const v=C?e.armR:e.lanternArm;C&&e.lanternArm.rotation.set(0,0,0),v.rotation.x+=(R-v.rotation.x)*y,v.rotation.z+=(T-v.rotation.z)*y,D.idle=d<.3?(D.idle||0)+i:0;const A=D.idle>2?Math.sin(Y.time*.55)*.7*Math.min(1,(D.idle-2)/1.5):0;e.head.rotation.y+=(A-e.head.rotation.y)*Math.min(1,i*4),D.blink=(D.blink??2)-i,D.blink<-.12&&(D.blink=2+Math.random()*3);for(const U of e.eyes)U.scale.y=D.faint>0?.1:D.blink<0?.12:1;e.carried.visible=D.carrying,D.chargeTower?(e.carried.position.lerp(Ar.set(0,.95,-.5),Math.min(1,i*14)),e.carried.rotation.y=0,e.carried.scale.setScalar(Math.max(.55,e.carried.scale.x-i*3))):(e.carried.rotation.y+=i*2,e.carried.scale.setScalar(1),e.carried.position.set(0,2.35+Math.sin(Y.time*3)*.08,0)),Iu.intensity=Jd*(1+Math.sin(Y.time*11)*.115)}function uy(){for(const i of ft.clicks.splice(0)){Pf.setFromCamera(i,Wt);const e=Pf.intersectObject(Ge.terrain)[0];e&&(Fe.guest&&(Fe.goal=[e.point.x,e.point.z]),ap(e.point.x,e.point.z))}}function ap(i,e){const t=Ge.lighthouse.pos,n=qs(Ge.plinths,i,e,2.2)||(Math.hypot(t.x-i,t.z-e)<4.5?{x:t.x,z:t.z,big:!0}:null);if(n){const s=n.big?4.3:1.95;let r=D.x-n.x,o=D.z-n.z;const a=Math.hypot(r,o)||1;i=n.x+r/a*s,e=n.z+o/a*s}D.goal={x:i,z:e,t:0,best:1/0,lastGain:0,spot:n,reach:n?n.big?Ze.lighthouseReach-.4:Ze.reach-.25:0},Et.emit(i,Ge.heightAt(i,e)+.2,e,{n:6,color:"#fff3d0",speed:1.5,up:.5,life:.35,gravity:0})}function Fs(i=!Y.paused,e=!1){Y.paused=i;const t=ft.labels();at("pause-keys").textContent=`${t.name}: fortsett med ${t.pause} · start på nytt med ${t.restart}`,at("pad-help").classList.toggle("hidden",ft.padSeen),at("pause").classList.toggle("hidden",!i),at("confirm").classList.toggle("hidden",!e),Y.confirming=i&&e}try{sessionStorage.getItem("glod-portrait")&&document.documentElement.classList.add("portrait-ok")}catch{}at("btn-portrait").addEventListener("click",()=>{document.documentElement.classList.add("portrait-ok");try{sessionStorage.setItem("glod-portrait","1")}catch{}Po()});at("btn-resume").addEventListener("click",()=>Fs(!1));at("btn-restart").addEventListener("click",()=>Fs(!0,!0));at("btn-yes").addEventListener("click",()=>Tr());at("btn-no").addEventListener("click",()=>Fs(!0,!1));at("btn-worlds").addEventListener("click",()=>{location.href=`${location.pathname}?world=${yn}`});at("btn-lex").addEventListener("click",()=>{const i=at("lex");i.innerHTML||(i.innerHTML=Object.entries(Ao).filter(([e])=>e!=="lobbyMini").map(([e,t])=>{const{tough:n,weak:s}=tp(t);return`<div class="lex-row"><b>${t.flying?"🪶":"🐾"} ${t.name}</b><small>${t.info||(t.flying?"flyr rett mot fyret":"går langs veien")}</small><span>${n?`🛡️ ${n}`:""} ${s?`💥 ${s}`:""}</span></div>`}).join("")+`<p class="lex-key">🛡️ tåler · 💥 svak mot · ${Object.entries(Kc).map(([e,t])=>`${t} ${Ns[e].name}`).join(" · ")} · 📒 skjold forfra</p>`),i.classList.toggle("hidden")});function Tr(){Fe.host&&Fe.net.broadcast({t:"restart"}),Fe.guest&&(Fe.snap=null);for(const i of Ki)i.el.remove();Ki.length=0;for(const i of[cn,fo,Hn,vi,Er]){for(const e of i)e.mesh&&dt.remove(e.mesh);i.length=0}for(const i of Qt)dt.remove(i.mesh);Qt.length=0,So.innerHTML="",Ua.length=0;for(const i of Ge.plinths)i.tower=null;for(let i=Ge.colliders.length-1;i>=0;i--)Ge.colliders[i].tower&&Ge.colliders.splice(i,1);Y.buildMode=!1;for(const i of It)i.K.chargeTower&&wi(i.K.chargeTower,0);Object.assign(Y,{phase:"title",wave:0,timer:0,embers:Ze.startEmbers,lights:zr,spawnQueue:[],leaks:{},seen:{},waveClock:0,sel:0,paused:!1,confirming:!1});for(const i of It){const{walk:e,face:t,...n}=Qd(i.slot);Object.assign(i.K,n),i.sel=0,i.buildMode=!1}for(const i of Fn)dt.remove(i.mesh);Fn.length=0,Ge.lighthouse.setLights(zr),yy(),On=0,Na=0,Jn={},Gn(tn.lights,"lights",Y.lights),Gn(tn.embers,"embers",Y.embers),Gn(tn.wave,"wave",0),tn.timer.textContent="",at("pause").classList.add("hidden"),at("confirm").classList.add("hidden"),at("overlay").classList.add("hidden"),ft.clear(),Y.phase="title",kr(!0),window.__restarts=(window.__restarts||0)+1}function hy(){Kd.sync();const i=ft.device,e=!!D.roll&&i==="touch"&&!Y.paused;if(at("rollpad").classList.toggle("hidden",!e),e!==Jn.rollTouch&&(Jn.rollTouch=e,Jn.device=null),e&&at("touch").classList.add("hidden"),Jn.device===i+ft.padKind)return;Jn.device=i+ft.padKind;const t=ft.labels();at("touch").classList.toggle("hidden",i!=="touch"||Y.phase==="title"||e),Ei.querySelectorAll("button i").forEach((n,s)=>{n.textContent=i==="pad"?s===Y.sel?t.build:"":i==="touch"?"":String(s+1)}),zu.textContent="Neste bølge ▶",Jn.sel=-1}const eu={still:.3,step:.25,bonus:.1},tu=["rU","rR","rD","rL"];function lp(i){const e=Math.min(8,Math.max(4,i.level+3));return Array.from({length:e},()=>tu[Math.floor(Math.random()*4)])}function fy(i,e){const t=i!=null&&i.upg&&!D.carrying&&!e?i:null;if(D.rollBlock&&D.rollBlock!==t&&(D.rollBlock=null),D.roll&&D.roll.tower!==t&&(D.roll=null),!D.roll&&t&&(Ot.consume("build")||Ot.consume("carry")||D.rollBlock!==t&&D.stillT>=eu.still)&&(D.roll={tower:t,seq:lp(t),i:0,shake:!1,done:0},D.goal=null,D.vx=D.vz=0),Ot.rollMode=!!D.roll,!D.roll){for(const n of[...tu,"rollExit"])Ot.consume(n);return}if(Ot.consume("build"),Ot.consume("carry"),Ot.consume("rollExit")){D.rollBlock=D.roll.tower,D.roll=null,Ot.rollMode=!1;return}for(const n of tu)Ot.consume(n)&&dy(n)}function dy(i){const e=D.roll,t=e.tower.upg;i===e.seq[e.i]?(e.i++,t.t=Math.min(t.dur,t.t+t.dur*eu.step/e.seq.length),At.tick(e.i),e.i>=e.seq.length&&(t.t=Math.min(t.dur,t.t+t.dur*eu.bonus),e.seq=lp(e.tower),e.i=0,e.done++,At.stone(),Et.emit(D.x,Kt.position.y+2.2,D.z,{n:10,color:"#8ff0ff",speed:1.6,up:1.6,life:.6,gravity:2}))):(e.i=0,e.shake=!0,e.shakes=(e.shakes||0)+1,At.bonk(),Ot.rumble(150,.4))}function py(i){if(ft.consume("fps")&&Nu.classList.toggle("hidden"),ft.consume("music")&&fp(),hy(),Y.phase==="title"){["build","carry","next","pause"].some(t=>ft.consume(t))&&kr();for(const t of It)t.input.clear();return}if(Gn(tn.embers,"embers",Y.embers),!(Y.phase==="prep"||Y.phase==="wave")){if((Y.phase==="won"||Y.phase==="lost")&&ft.consume("restart")){Tr();return}ft.clear(),Ei.classList.add("hidden"),jc("");return}if(ft.consume("restart")){Fe.guest?nn("Bare verten kan starte på nytt"):Y.confirming?Tr():Fs(!0,!0);return}if(ft.consume("pause")&&(Fe.guest?nn("Bare verten kan pause"):Fs(!Y.paused)),Y.confirming){if(ft.consume("build")||ft.consume("next")){Tr();return}ft.consume("carry")&&Fs(!0,!1)}if(Y.paused){for(const t of It)t.input.clear();Fe.guest&&jc("⏸ Verten har pauset");return}uy();for(const t of It)Ni(t,()=>my(i))}function my(i){if(Fe.guest){zy(i);return}Ot.consume("next")&&Y.phase==="prep"&&(Y.timer=0),Ot.consume("selPrev")&&(Y.sel=(Y.sel+Ui.length-1)%Ui.length),Ot.consume("selNext")&&(Y.sel=(Y.sel+1)%Ui.length);const e=qs(Ge.plinths,D.x,D.z,Ze.reach,c=>!c.tower),t=qs(Qt,D.x,D.z,Ze.reach),n=Ge.lighthouse.pos,s=Math.hypot(n.x-D.x,n.z-D.z)<Ze.lighthouseReach,r=D.stun>0;fy(t,r);const o=Za();Ot.consume("build")&&!r&&(Y.buildMode||e?za(Ui[Y.sel]):Y.buildMode=!0),Ui.forEach((c,u)=>{Ot.consume("b"+(u+1))&&!r&&(Y.sel=u,za(c))});const a=(Y.buildMode||!!e)&&!r&&!D.carrying;dn.panelOpen=a,Ot.consume("carry")&&!r&&(!D.carrying&&s?Y.embers>=Ze.stoneCost?(Y.embers-=Ze.stoneCost,D.carrying=!0,Gn(tn.embers,"embers",Y.embers,"bump"),Et.emit(D.x,Kt.position.y+2.3,D.z,{n:14,color:"#8ff0ff",speed:2,up:2,life:.6,gravity:2}),At.stone()):(At.deny(),nn(`Rullepapir koster ${Ze.stoneCost} ✦`)):D.carrying&&s?(D.carrying=!1,Y.embers+=Ze.stoneCost,At.stone(),nn("Rullepapiret er lagt tilbake")):!D.carrying&&Y.buildMode?Y.buildMode=!1:D.carrying?t||nn("Bær rullepapiret til et tårn"):nn("Rullepapir hentes ved fyret"));const l=D.carrying&&!r&&t&&t.level<$c&&!t.upg?t:null;l!==D.chargeTower&&(D.chargeTower&&wi(D.chargeTower,0),D.chargeTower=l,D.charge=0),l&&(D.charge+=i/Ze.chargeTime,wi(l,Math.min(1,D.charge)),Math.random()<i*20&&Et.emit(D.x,Kt.position.y+2.2,D.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),D.charge>=1&&(l.upg={t:0,dur:Ze.upgradeTime[l.level-1]},D.carrying=!1,D.chargeTower=null,D.charge=0,Et.emit(l.x,l.y+1.2,l.z,{n:12,color:"#8ff0ff",speed:2,up:2,life:.6}),At.stone(),nn(`${l.def.name}: stå stille og rull – pilene går fortere`))),dn.local&&cp(i,{panelOpen:a,spot:o,tower:t,atLighthouse:s,stunned:r,target:l})}function cp(i,{panelOpen:e,spot:t,tower:n,atLighthouse:s,stunned:r,target:o}){ey(e,t,Ui[Y.sel]),Ei.classList.toggle("hidden",!e),e&&(Ei.querySelectorAll("button").forEach((c,u)=>{c.disabled=Y.embers<Ns[c.dataset.tower].cost,c.classList.toggle("sel",u===Y.sel)}),Jn.sel!==Y.sel&&ft.device==="pad"&&(Jn.sel=Y.sel,Ei.querySelectorAll("button i").forEach((c,u)=>c.textContent=u===Y.sel?ft.labels().build:"")));const a=ft.labels();Na-=i;let l="";if(Na>0)l=op;else if(r)l="Moralpanikk! Måka slo deg ut";else if(o)l="Leverer rullepapiret …";else if(D.roll)l=`Rull! Trykk pilene i rekkefølge for å rulle fortere · ${ft.device==="pad"?`${a.carry} / hold stikka = gå`:ft.device==="touch"?"✕ Gå = gå":"Esc / Q = gå"}`;else if(n!=null&&n.upg)l=`${n.def.name}: stå stille eller trykk ${a.build} for å rulle (${Math.ceil(n.upg.dur-n.upg.t)} s)`;else if(D.carrying&&n&&n.level>=$c)l="Tårnet er på maks nivå";else if(D.carrying)l="Bær rullepapiret til et tårn";else if(s&&!D.carrying)l=`${a.carry} = hent rullepapir (${Ze.stoneCost} ✦)`;else if(s&&D.carrying)l=`${a.carry} = legg rullepapiret tilbake`;else if(n&&n.level<$c)l=`${n.def.name} nv. ${n.level} · hent rullepapir ved fyret for å oppgradere`;else if(e&&!t.ok)l=`Ikke lov her: ${t.why} · ${a.carry} = avbryt`;else if(e){const c=`${Ns[Ui[Y.sel]].name} (${Ns[Ui[Y.sel]].tip})`,u=t.plinth?" (sokkel: +25 % rekkevidde)":"";l=ft.device==="pad"?`${a.sel} = velg tårn · ${a.build} = sett ned ${c}${u}`:ft.device==="touch"?`Trykk på et tårn, eller Bygg = ${c}${u}`:`1 / 2 / 3 eller ${a.build} = sett ned ${c}${u}`}else Y.phase==="prep"&&Y.wave===0&&(l=`${a.build} = bygg et tårn der du står (sokler gir +25 % rekkevidde)`);jc(l),HM(i)}const Os=new Mt;{const i=document.createElement("canvas");i.width=64,i.height=256;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,64,0);t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.5,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,256),e.globalCompositeOperation="destination-in";const n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.2,"rgba(0,0,0,0.8)"),n.addColorStop(.65,"rgba(0,0,0,0.3)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,64,256);const s=new ai(i);for(let r=0;r<8;r++){const o=new ot(new ci(1,1),new Rt({map:s,color:"#ffdcae",transparent:!0,opacity:.05,blending:li,depthWrite:!1,depthTest:!1,fog:!1}));o.scale.set(1.8+r%3*1.1,34,1),o.position.set(-21+r*6,3.5,-4+r%2*6),o.rotation.set(-1.38,0,.55),o.userData.phase=r*1.3,Os.add(o)}}Os.visible=ln.id==="tak";Os.renderOrder=50;dt.add(Os);function gy(i){Os.position.set(wn.x,0,wn.z),Os.rotation.y=Zi,Os.children.forEach(e=>e.material.opacity=(Xs.mobile?1:1.3)*(.14+.04*Math.sin(i*.35+e.userData.phase))),nu.visible&&xy(i)}const Gu=Math.round(160*(Xs.mobile?.5:1)),yr=20,vy=Array.from({length:Gu},()=>({x:Math.random()*yr*2,z:Math.random()*yr*2,y:.8+Math.random()*6,ph:Math.random()*6.28})),Ta=new Float32Array(Gu*3),Aa=new Float32Array(Gu*3),nu=(()=>{const i=new Lt;i.setAttribute("position",new Ut(Ta,3)),i.setAttribute("color",new Ut(Aa,3));const e=document.createElement("canvas");e.width=e.height=32;const t=e.getContext("2d"),n=t.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,32,32);const s=new Ha(i,new Eo({size:.2,map:new ai(e),vertexColors:!0,transparent:!0,blending:li,depthWrite:!1,fog:!1}));return s.frustumCulled=!1,s.visible=ln.id==="tak",s.renderOrder=51,dt.add(s),s})(),zf=(i,e)=>e+((i-e)%(yr*2)+yr*3)%(yr*2)-yr;function xy(i){vy.forEach((e,t)=>{Ta[t*3]=zf(e.x+Math.sin(i*.13+e.ph)*1.4+i*.08,wn.x),Ta[t*3+1]=e.y+Math.sin(i*.21+e.ph*2)*.5,Ta[t*3+2]=zf(e.z+Math.cos(i*.11+e.ph)*1.4,wn.z);const n=(.3+.7*Math.max(0,Math.sin(i*.6+e.ph*3))**2)*.8;Aa[t*3]=n,Aa[t*3+1]=n*.9,Aa[t*3+2]=n*.68}),nu.geometry.attributes.position.needsUpdate=!0,nu.geometry.attributes.color.needsUpdate=!0}let On=0;const xt=new O,Ar=new O,vr=new O,pa=new O,Gl=new O,wn=new O(D.x,0,D.z);function _y(i){wn.x+=(D.x-wn.x)*Math.min(1,i*4),wn.z+=(D.z-wn.z)*Math.min(1,i*4),wn.y=Kt.position.y;const e=ts?1.15:1,t=ft.zoom*e,n=Wt.aspect<1.2?1.25:1;Zi+=ft.look;const s=6.6*t*n;Wt.position.set(wn.x+Math.sin(Zi)*s,wn.y+12.5*t*n,wn.z+Math.cos(Zi)*s),On=Math.max(0,On-i),On>0&&(Wt.position.x+=(Math.random()-.5)*On*2,Wt.position.y+=(Math.random()-.5)*On),Wt.lookAt(wn.x-Math.sin(Zi),wn.y+.5,wn.z-Math.cos(Zi)),Wt.updateMatrixWorld();let r=0,o=0,a=0;const l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([f,M])=>{const b=xt.set(f,M,.5).unproject(Wt),x=b.sub(Wt.position).normalize(),R=x.y<-.05?(wn.y-Wt.position.y)/x.y:80;return[Wt.position.x+x.x*Math.min(R,80),Wt.position.z+x.z*Math.min(R,80)]});for(const[f,M]of l)r+=f/4,o+=M/4;for(const[f,M]of l)a=Math.max(a,Math.hypot(f-r,M-o));const c=bt.clamp(Math.ceil((a+4)/4)*4,16,80);_n.shadow.camera.right!==c&&(Object.assign(_n.shadow.camera,{left:-c,right:c,top:c,bottom:-c}),_n.shadow.camera.updateProjectionMatrix());const u=2*c/_n.shadow.mapSize.x;vr.set(Qn.sunDir[0],Qn.sunDir[1],Qn.sunDir[2]).normalize(),pa.set(0,1,0).cross(vr).normalize(),Gl.copy(vr).cross(pa).normalize(),xt.set(r,wn.y,o);const h=Math.round(xt.dot(pa)/u)*u,d=Math.round(xt.dot(Gl)/u)*u,p=xt.dot(vr);Ar.copy(pa).multiplyScalar(h).addScaledVector(Gl,d).addScaledVector(vr,p),_n.target.position.copy(Ar),_n.position.copy(Ar).addScaledVector(vr,40),_n.shadow.camera.far=40+c+20,gy(Y.time),KM(),xt.set(D.x,Kt.position.y+.9,D.z);const g=-xt.clone().applyMatrix4(Wt.matrixWorldInverse).z;xt.project(Wt);const _=innerWidth*Un.getPixelRatio(),m=innerHeight*Un.getPixelRatio();vs.uKeep.value.set((xt.x*.5+.5)*_,(xt.y*.5+.5)*m,g),vs.uRad.value=m*.3,Ge.cullFade(Wt,m),qM(),YM(Y.paused?0:i)}const Vl=ln.eruption,Cr=Ge.extras.bridges??[];let so=0,Dn=null;function My(i){if(!(!Vl||!Cr.length||Y.phase!=="wave")){if(so+=i,Dn&&so>=Vl.closed)Dn.setClosed(!1),Dn=null,Cn.setBlock(()=>!1);else if(!Dn&&so>=Vl.every){so=0;const e=Cr[Math.random()*Cr.length|0];e.setClosed(!0),Dn=e,Cn.setBlock((t,n)=>(t-e.x)**2+(n-e.z)**2<2.8*2.8),On=Math.max(On,.35),At.boom(),nn("🌋 Utbrudd! En bro er stengt av lava i 10 s")}}}function yy(){Dn&&(Dn.setClosed(!1),Cn.setBlock(()=>!1)),Dn=null,so=0}function by(i){if(Fe.guest){Iy(i);return}if(My(i),Y.phase==="prep")Y.timer-=i,tn.timer.textContent=`Neste bølge om ${Math.ceil(Math.max(0,Y.timer))} s`,Y.timer<=0&&(tn.timer.textContent="",Fu());else if(Y.phase==="wave"){for(Y.waveClock+=i;Y.spawnQueue.length&&Y.spawnQueue[0].t<=Y.waveClock;){const e=Y.spawnQueue.shift();ja(e.type,e.path)}if(tn.timer.textContent=`${cn.length+Y.spawnQueue.length} monstre igjen`,!Y.spawnQueue.length&&!cn.length){if(tn.timer.textContent="",Y.wave>=Du.length){Vu(!0);return}const e=Ze.waveBonus+Y.wave*Ze.waveBonusPer+Math.floor(Math.min(Y.embers,300)*Ze.interest);Y.embers+=e,Gn(tn.embers,"embers",Y.embers,"bump"),nn(`Bølge ${Y.wave} slått! +${e} ✦`);for(const t of It)t.K.cheer=1.4;ku(Ze.prepTime),Zt==null||Zt.setIntensity(0)}}}function Vu(i){Y.phase=i?"won":"lost",i||ft.rumble(500,.9),at("touch").classList.add("hidden"),at("btn-pause").classList.add("hidden"),Ei.classList.add("hidden");let e="";if(Zt==null||Zt.setIntensity(0),i){At.win();const n=yo();R_(yn),yo()>n&&(e=`<p class="lead">🔓 Ny verden låst opp: <b>${Ks[yn+1].name}</b>!</p>`)}const t=at("overlay");if(t.querySelector(".card").innerHTML=i?`<h1>Gløden lever!</h1><p class="lead">Ti bølger med forbud, komitéer og moralpanikk er chillet ned, og ${Y.lights} av 20 glødepunkter brenner fortsatt. Øya ånder ut.</p>${e}<div class="menu-row"><button id="btn-again">↺ Spill kartet igjen</button>${e?'<button id="btn-nextworld" class="alt">Neste verden ▶</button>':""}<button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`:`<h1>Gløden sluknet</h1><p class="lead">Byråkratiet vant denne gangen, i bølge ${Y.wave}. Rull opp og prøv på nytt.</p><div class="menu-row"><button id="btn-again">↺ Start kartet på nytt</button><button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`,Fe.guest){t.querySelector(".menu-row").innerHTML='<p class="lead">Venter på at verten starter på nytt …</p><button id="btn-again" class="alt">Forlat</button><button id="btn-worlds2" class="alt hidden"></button>',at("btn-again").addEventListener("click",()=>{location.href=`${location.pathname}?world=${yn}`}),at("btn-worlds2").addEventListener("click",()=>{}),t.classList.remove("hidden");return}t.classList.remove("hidden"),at("btn-again").addEventListener("click",()=>Tr()),at("btn-worlds2").addEventListener("click",()=>{location.href=`${location.pathname}?world=${yn}`}),e&&at("btn-nextworld").addEventListener("click",()=>{location.href=`${location.pathname}?world=${yn+1}`})}let Zt=null;const Ca=(()=>{try{return JSON.parse(localStorage.getItem("glod-music")||"{}")}catch{return{}}})(),po=["rolig","dnb","av"],up={rolig:"Rolig",dnb:"DnB",av:"Av"};let bi=po.includes(Ca.mode)?Ca.mode:Ca.muted?"av":"rolig";rn.get("musikk")&&po.includes(rn.get("musikk"))&&(bi=rn.get("musikk"));function hp(){try{localStorage.setItem("glod-music",JSON.stringify({vol:Zt.volume,mode:bi}))}catch{}}function Sy(i){const e={};let t=null,n=0,s=Ca.vol??.7;return{use:o=>{const a=o==="dnb"?"dnb":"rolig";t&&t!==e[a]&&t.stop(),e[a]??(e[a]=a==="dnb"?SM(i.ctx,i.noiseBuf,ln.id):wM(i.ctx,i.noiseBuf,ln.id)),t=e[a],t.setVolume(s),t.setIntensity(n),t.setMuted(o==="av"),o==="av"?t.stop():t.start()},setIntensity(o){n=o,t==null||t.setIntensity(o)},setVolume(o){s=o,t==null||t.setVolume(o)},get volume(){return s},get muted(){return bi==="av"},get intensity(){return n},get mode(){return bi},get section(){return t==null?void 0:t.section},rms(){return t?t.rms():0},tap(o){for(const a of Object.values(e))a.tap(o)}}}function wy(){const i=Xd();Zt||!i||rn.has("nomusic")||(Zt=Sy(i),Zt.use(bi),at("music-vol").value=Math.round(Zt.volume*100),at("btn-mute").textContent=`M: ${up[bi]}`,window.__music=Zt,window.__audioCtx=i.ctx)}function fp(){Zt&&(bi=po[(po.indexOf(bi)+1)%po.length],Zt.use(bi),at("btn-mute").textContent=`M: ${up[bi]}`,hp(),nn({rolig:"🎶 Musikk: rolig",dnb:"🎶 Musikk: drum & bass",av:"🎶 Musikk av"}[bi]))}for(const i of["pointerdown","keydown","touchend"])addEventListener(i,()=>{const e=Xd();e&&e.ctx.state!=="running"&&e.ctx.resume()},{passive:!0});at("music-vol").addEventListener("input",i=>{Zt&&(Zt.setVolume(i.target.value/100),hp())});at("btn-mute").addEventListener("click",i=>{i.preventDefault(),fp()});function kr(i=!1){Y.phase==="title"&&(yM(),wy(),Zt==null||Zt.setIntensity(0),i&&at("touch").classList.toggle("hidden",ft.device!=="touch"),at("overlay").classList.add("hidden"),ts&&ft.device!=="pad"&&(ft.device="touch"),Jn.device=null,at("btn-pause").classList.remove("hidden"),Ge.lighthouse.setLights(Y.lights),Gn(tn.embers,"embers",Y.embers),ku(Ze.firstPrep),qd&&Fy())}at("btn-start").addEventListener("click",kr);const Hu=["build","carry","next","selPrev","selNext","b1","b2","b3","b4","b5","b6","b7","rU","rR","rD","rL","rollExit"];function Ey(){const i=new Set;return{move:{x:0,z:0},yaw:0,pressed:i,rollMode:!1,device:"kb",padKind:"xbox",clicks:[],consume:e=>i.delete(e),clear:()=>i.clear(),rumble:()=>{},labels:()=>ft.labels()}}function dp(i,e){if(e===Co(0))return;const t=i.userData.body.children[0];t.material=t.material.clone(),t.material.color.set(e)}function Wu(i,e){if(It.some(r=>r.slot===i))return null;const t=Vr(Nd(),"figure");dp(t,Co(i));const n=Qd(i);t.position.set(n.x,Ge.heightAt(n.x,n.z),n.z),dt.add(t);const s={slot:i,name:e,K:n,mesh:t,input:Ey(),sel:0,buildMode:!1,local:!1,hints:[]};return It.push(s),s}function Xu(i){var n;const e=It.findIndex(s=>s.slot===i&&!s.local);if(e<0)return;const t=It[e];t.K.chargeTower&&wi(t.K.chargeTower,0),(n=t.tag)==null||n.remove(),xs.emit(t.K.x,t.mesh.position.y+.8,t.K.z,{n:10,color:"#eef6e8",speed:1.4,up:1.2,life:.7,gravity:-.5}),dt.remove(t.mesh),It.splice(e,1)}function Ty(i,e){if(Fe.guest){if(i.t==="s")Fe.snap=i;else if(i.t==="h")for(const s of i.h)nn(s);else i.t==="restart"&&Tr();return}if(!Fe.host||i.t!=="in")return;const t=It.find(s=>s.slot===e);if(!t)return;const n=t.input;if(n.move.x=Math.max(-1,Math.min(1,+i.x||0)),n.move.z=Math.max(-1,Math.min(1,+i.z||0)),Number.isFinite(i.yaw)&&(n.yaw=i.yaw),Array.isArray(i.a))for(const s of i.a)Hu.includes(s)&&n.pressed.add(s);Array.isArray(i.g)&&i.g.every(Number.isFinite)&&Ni(t,()=>ap(i.g[0],i.g[1]))}const pp=Object.keys(Ao),Yt=i=>Math.round(i*100)/100;function Ay(){return{t:"s",ph:Y.phase,w:Y.wave,tm:Yt(Y.timer),em:Y.embers,li:Y.lights,left:cn.length+Y.spawnQueue.length,pz:Y.paused?1:0,er:Dn?Cr.indexOf(Dn):-1,P:It.map(i=>{var s,r;const e=i.K,t=e.roll,n=i===dn;return[i.slot,Yt(e.x),Yt(e.z),Yt(e.face),Yt(e.vx),Yt(e.vz),e.carrying?1:0,Yt(Math.max(0,e.stun)),Yt(Math.max(0,e.faint)),Math.round(e.chill),n?Y.sel:i.sel,(n?Y.buildMode:i.buildMode)?1:0,Yt(e.rollP??-1),((s=e.rollTower)==null?void 0:s.id)||0,((r=e.chargeTower)==null?void 0:r.id)||0,Yt(e.charge||0),t?[t.tower.id,t.seq.join(","),t.i,t.done,t.shakes||0]:0,i.name||""]}),M:cn.filter(i=>i.alive).map(i=>[i.id,pp.indexOf(i.type),Yt(i.x),Yt(i.y),Yt(i.z),Math.round(i.hp*10)/10,Math.round(i.maxHp*10)/10,i.trap>0?Yt(i.trap):0,i.slow>0?1:0]),T:Qt.map(i=>[i.id,Ui.indexOf(i.type),Yt(i.x),Yt(i.y),Yt(i.z),i.level,i.plinth?Ge.plinths.indexOf(i.plinth):-1,i.upg?[Yt(i.upg.t),i.upg.dur]:0,i.blind>0?Yt(i.blind):0]),E:Hn.map(i=>[i.id,Yt(i.x),Yt(i.y),Yt(i.z),i.value,Yt(i.life)]),B:Fn.map(i=>[i.id,Yt(i.x),Yt(i.z),Yt(i.life)]),ev:Fe.ev.splice(0)}}function Cy(i){if(!Fe.host)return;if(Fe.ev.length>200&&Fe.ev.splice(0,Fe.ev.length-200),!Fe.net.guestCount()){Fe.ev.length=0;return}if(Fe.snapT-=i,Fe.snapT>0)return;Fe.snapT=.05;const e=Ay();Fe.lastSnapBytes=JSON.stringify(e).length,Fe.net.broadcast(e);for(const t of It)!t.local&&t.hints.length&&Fe.net.sendTo(t.slot,{t:"h",h:t.hints.splice(0)})}const Li=(i,e)=>i.find(t=>t.id===e);function Ry(i){for(const a of i.ev||[])if(a[0]==="sp")Fe.spawnPoints=a[1],Y.spawnPoints=a[1],Zc();else if(a[0]==="c"){const l=Li(cn,a[1]);l!=null&&l.alive&&ip(l)}else if(a[0]==="l"){const l=Li(cn,a[1]);l!=null&&l.alive&&Jc(l,!0)}else if(a[0]==="u"){const l=Li(Qt,a[1]),c=It.find(u=>u.slot===a[2]);l&&c&&Ni(c,()=>rp(l))}else if(a[0]==="st"){const l=It.find(c=>c.slot===a[1]);l&&(Et.emit(l.K.x,l.mesh.position.y+1.5,l.K.z,{n:16,color:"#ffffff",speed:3,up:2,life:.5}),l.local&&(At.stun(),On=.2))}const e=Y.phase;if(Y.embers=i.em,Y.timer=i.tm,Y.paused=!!i.pz,Fe.left=i.left,i.li!==Y.lights&&(Y.lights=i.li,Ge.lighthouse.setLights(Y.lights),Gn(tn.lights,"lights",Y.lights,"bad")),e==="prep"&&i.ph==="wave")Fu(),Y.spawnQueue=[];else if(e==="wave"&&i.ph==="prep"){tn.timer.textContent="",nn(`Bølge ${Y.wave} slått!`);for(const a of It)a.K.cheer=1.4;ku(i.tm),Zt==null||Zt.setIntensity(0)}else(i.ph==="won"||i.ph==="lost")&&e!==i.ph&&Vu(i.ph==="won");if(Y.wave=i.w,i.er!==(Dn?Cr.indexOf(Dn):-1)){Dn&&(Dn.setClosed(!1),Dn=null,Cn.setBlock(()=>!1));const a=Cr[i.er];a&&(a.setClosed(!0),Dn=a,Cn.setBlock((l,c)=>(l-a.x)**2+(c-a.z)**2<2.8*2.8),On=Math.max(On,.35),At.boom(),nn("🌋 Utbrudd! En bro er stengt av lava i 10 s"))}for(const a of i.T){let l=Li(Qt,a[0]);if(!l){const c=a[6]>=0?Ge.plinths[a[6]]:null;l=sp(Ui[a[1]],{x:a[2],y:a[3],z:a[4],plinth:c},a[0])}l.level!==a[5]&&(l.level=a[5],Lu(l,l.level),wi(l,0),Et.emit(l.x,l.y+1.2,l.z,{n:30,color:"#8ff0ff",speed:4,up:4,life:.9,gravity:5}),At.upgrade()),a[7]?(l.upg||(l.upg={t:0,dur:a[7][1]}),a[7][0]<l.upg.t-.5&&l.upg.t>0&&(l.upgReset=!0),l.upg.t=a[7][0],l.upg.dur=a[7][1]):l.upg&&(l.upg=null,wi(l,0)),l.blind=a[8]}const t=new Set(i.T.map(a=>a[0]));for(let a=Qt.length-1;a>=0;a--){const l=Qt[a];if(t.has(l.id))continue;dt.remove(l.mesh),Qt.splice(a,1),l.plinth&&(l.plinth.tower=null);const c=Ge.colliders.findIndex(u=>u.tower===l);c>=0&&Ge.colliders.splice(c,1)}const n=new Set;for(const a of i.M){n.add(a[0]);let l=Li(cn,a[0]);l||(l=ja(pp[a[1]],0),l.id=a[0],l.x=a[2],l.y=a[3],l.z=a[4],l.mesh.position.set(l.x,l.y,l.z)),l.sx=a[2],l.sy=a[3],l.sz=a[4],a[5]<l.hp&&(l.mesh.userData.hpBar.visible=!0),l.hp=a[5],l.maxHp=a[6],l.trap=a[7],a[8]&&(l.slow=Math.max(l.slow,.1))}for(const a of cn)a.alive&&!n.has(a.id)&&(a.alive=!1,dt.remove(a.mesh));const s=new Set;for(const a of i.E){s.add(a[0]);let l=Li(Hn,a[0]);if(!l){const c=kd();c.scale.setScalar(.8+Math.min(a[4],6)*.08),l={id:a[0],mesh:c,x:a[1],y:a[2],z:a[3],value:a[4],phase:Math.random()*6},dt.add(c),Hn.push(l)}l.sx=a[1],l.sy=a[2],l.sz=a[3],l.life=a[5]}for(let a=Hn.length-1;a>=0;a--){const l=Hn[a];s.has(l.id)||(l.life>.3&&(Et.emit(l.x,l.y+.3,l.z,{n:8,color:"#ffe08a",speed:2,up:2.5,life:.4}),Math.hypot(D.x-l.x,D.z-l.z)<2&&(At.pickup(),Gn(tn.embers,"embers",Y.embers,"bump"))),dt.remove(l.mesh),Hn.splice(a,1))}const r=new Set;for(const a of i.B){r.add(a[0]);const l=Li(Fn,a[0])||(Bu(a[1],a[2],a[0]),Fn[Fn.length-1]);l.life=a[3]}for(let a=Fn.length-1;a>=0;a--)r.has(Fn[a].id)||(dt.remove(Fn[a].mesh),Fn.splice(a,1));const o=new Set;for(const a of i.P){const l=a[0];o.add(l);let c=It.find(p=>p.slot===l);c||(c=Wu(l,a[17]),c.K.x=a[1],c.K.z=a[2]);const u=c.K;if(c.local){const p=Math.hypot(a[1]-u.x,a[2]-u.z);p>2.5?(u.x=a[1],u.z=a[2]):p>.9&&(u.x+=(a[1]-u.x)*.25,u.z+=(a[2]-u.z)*.25),a[9]<u.chill-2&&(u.flinch=.55,Lo("😣"),ft.rumble(120,.3)),Y.sel=a[10],Y.buildMode=!!a[11]}else u.tx=a[1],u.tz=a[2],u.tface=a[3],u.vx=a[4],u.vz=a[5],c.sel=a[10],c.buildMode=!!a[11];u.carrying=!!a[6],u.stun=a[7],u.faint=a[8],u.chill=a[9],u.rollP=a[12],u.rollTower=Li(Qt,a[13])||null;const h=Li(Qt,a[14])||null;u.chargeTower&&u.chargeTower!==h&&wi(u.chargeTower,0),u.chargeTower=h,u.charge=a[15],h&&wi(h,Math.min(1,u.charge));const d=a[16];if(d){const p=Li(Qt,d[0]),g=u.roll&&u.roll.tower===p?u.roll:null;u.roll=p?{tower:p,seq:d[1].split(","),i:d[2],done:d[3],shakes:d[4],shake:!!(g!=null&&g.shake)}:null,c.local&&g&&u.roll&&(d[4]>(g.shakes||0)?(u.roll.shake=!0,At.bonk(),ft.rumble(150,.4)):d[3]>g.done?(At.stone(),Et.emit(u.x,c.mesh.position.y+2.2,u.z,{n:10,color:"#8ff0ff",speed:1.6,up:1.6,life:.6,gravity:2})):d[2]>g.i&&At.tick(d[2]))}else u.roll=null;c.local&&(ft.rollMode=!!u.roll)}for(const a of It.slice())!a.local&&!o.has(a.slot)&&(Xu(a.slot),Ia(`${a.name||"En vokter"} forlot spillet`))}function Py(){for(const i of It){if(i.local)continue;i.tag||(i.tag=document.createElement("div"),i.tag.className="ptag",i.tag.textContent=i.name||`Vokter ${i.slot+1}`,i.tag.style.borderColor=Co(i.slot),document.body.appendChild(i.tag)),xt.set(i.K.x,i.mesh.position.y+3,i.K.z).project(Wt);const e=xt.z<1&&Math.abs(xt.x)<1.05&&Math.abs(xt.y)<1.05&&Y.phase!=="title";i.tag.style.display=e?"block":"none",e&&(i.tag.style.left=`${(xt.x*.5+.5)*innerWidth}px`,i.tag.style.top=`${(-xt.y*.5+.5)*innerHeight}px`)}}function Ly(i){if(D.tx===void 0)return;const e=1-Math.exp(-i*12);D.x+=(D.tx-D.x)*e,D.z+=(D.tz-D.z)*e,Math.hypot(D.tx-D.x,D.tz-D.z)>4&&(D.x=D.tx,D.z=D.tz)}function Dy(i){const e=1-Math.exp(-i*6);for(const t of cn){if(!t.alive||t.sx===void 0)continue;Math.hypot(t.sx-t.x,t.sz-t.z)>6?(t.x=t.sx,t.z=t.sz):(t.x+=(t.sx-t.x)*e,t.z+=(t.sz-t.z)*e),t.def.flying&&(t.y+=(t.sy-t.y)*e)}}function Iy(i){Y.phase==="prep"?(Y.timer-=i,tn.timer.textContent=`Neste bølge om ${Math.ceil(Math.max(0,Y.timer))} s`):Y.phase==="wave"&&(tn.timer.textContent=`${Fe.left??cn.length} monstre igjen`)}function Uy(i){const e=1-Math.exp(-i*10);for(const t of Hn){if(t.sx===void 0)continue;t.x+=(t.sx-t.x)*e,t.y+=(t.sy-t.y)*e,t.z+=(t.sz-t.z)*e,t.phase+=i,t.life-=i;const n=Math.sin(t.phase*3)*.12;t.mesh.position.set(t.x,t.y+n,t.z),t.mesh.rotation.y+=i*3;const s=t.life<5;t.mesh.scale.setScalar((.8+Math.min(t.value,6)*.08)*(s?.55+.45*Math.max(0,t.life/5):1)),t.mesh.visible=!s||Math.sin(t.life*(t.life<1.5?30:16))>-.4,Math.random()<i*2.5&&Et.emit(t.x,t.y+.2,t.z,{n:1,color:"#ffb347",speed:.3,up:1.2,life:.6,gravity:-.5})}Fn.forEach((t,n)=>{t.life-=i,t.mesh.rotation.y+=i*1.5,t.mesh.position.y=Ge.heightAt(t.x,t.z)+.5+Math.sin(Y.time*3+n)*.12,t.mesh.visible=t.life>4||Math.sin(t.life*12)>0})}function zy(i){for(const c of Hu)Ot.consume(c);const e=qs(Ge.plinths,D.x,D.z,Ze.reach,c=>!c.tower),t=qs(Qt,D.x,D.z,Ze.reach),n=Ge.lighthouse.pos,s=Math.hypot(n.x-D.x,n.z-D.z)<Ze.lighthouseReach,r=D.stun>0,o=Za(),a=(Y.buildMode||!!e)&&!r&&!D.carrying,l=D.chargeTower;l&&Math.random()<i*20&&Et.emit(D.x,Kt.position.y+2.2,D.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),cp(i,{panelOpen:a,spot:o,tower:t,atLighthouse:s,stunned:r,target:l})}function Ny(i){if(!Fe.guest||Y.phase==="title")return;const e=Hu.filter(r=>ft.pressed.has(r));Fe.sendT-=i;const t=ft.move,n=t.x!==Fe.lastX||t.z!==Fe.lastZ;if(!e.length&&!Fe.goal&&!(n&&Fe.sendT<=0)&&Fe.sendT>-.25)return;Fe.sendT=1/30,Fe.lastX=t.x,Fe.lastZ=t.z;const s={t:"in",x:+t.x.toFixed(3),z:+t.z.toFixed(3),yaw:+Zi.toFixed(3)};e.length&&(s.a=e),Fe.goal&&(s.g=Fe.goal.map(r=>+r.toFixed(2)),Fe.goal=null),Fe.net.send(s)}const ky=IM({worldIndex:yn,worldName:ln.name,timeOfDay:ms,params:rn,onHostStart:i=>{Object.assign(Fe,{host:!0,net:i}),It[0].name=i.hostName;for(const e of i.players)e.slot>0&&Wu(e.slot,e.name);kr()},onGuestStart:i=>{Object.assign(Fe,{guest:!0,net:i}),It[0].slot=i.slot,dp(Kt,Co(i.slot)),kr()},onMessage:Ty,onLeave:(i,e)=>{Xu(i),Ia(`${e} forlot spillet`)},onHostGone:()=>{Ia("Verten forlot spillet"),setTimeout(()=>{location.href=`${location.pathname}?world=${yn}`},2500)}});{const i=at("worlds"),e=yo();if(Ks.forEach((t,n)=>{const s=document.createElement("button");s.className="world"+(n===yn?" sel":"")+(n>=e?" locked":""),s.innerHTML=`<b>${n>=e?"🔒 ":""}${t.name}</b><small>${n>=e?"Vinn forrige verden for å låse opp":t.blurb}</small>`,s.disabled=n>=e,s.addEventListener("click",()=>{n!==yn&&(location.href=`${location.pathname}?world=${n}`)}),i.appendChild(s)}),at("btn-start").textContent=`Tenn gløden på ${ln.name}`,ln.skyDusk){const t=document.createElement("button");t.id="btn-tod",t.className="tod",t.textContent=ms==="skumring"?"🌅 Skumring (bytt til dag)":"☀️ Dag (bytt til skumring)",t.addEventListener("click",()=>{try{localStorage.setItem("glod-tid",ms==="skumring"?"dag":"skumring")}catch{}location.href=`${location.pathname}?world=${yn}&tid=${ms==="skumring"?"dag":"skumring"}`}),at("worlds").after(t)}}at("btn-quality").addEventListener("click",()=>Zd(Ti==="high"?"low":"high"));addEventListener("keydown",i=>{i.code==="KeyG"&&!i.repeat&&Zd(Ti==="high"?"low":"high")});at("btn-quality").textContent=Ti==="high"?"Høy":"Lav";at("btn-pause").classList.add("hidden");function Fy(){Y.embers=999;const i=Ge.lighthouse.pos,e=Ge.plinths.slice().sort((t,n)=>Math.hypot(t.x-i.x,t.z-i.z-4)-Math.hypot(n.x-i.x,n.z-i.z-4));["ring","chips","speaker","ring","chips","ring"].forEach((t,n)=>{const s=e[n];D.x=s.x+1.9,D.z=s.z,za(t),n<3&&(Qt[Qt.length-1].level=n+1,Lu(Qt[Qt.length-1],n+1))}),D.x=i.x+1,D.z=i.z+6,D.carrying=!0,Y.wave=Number(rn.get("demo"))||4,Y.wave-=1,Fu(),Y.waveClock=6,Y.embers=142}const Oy=new Ed;let Hl=0,ma=0,ga=0;window.__fpsSamples=[];window.__game={get net(){return ky.net},get snapBytes(){return Fe.lastSnapBytes},players:It,addRemotePlayer:(i,e)=>Wu(i,e),removeRemotePlayer:i=>Xu(i),S:Y,monsters:cn,towers:Qt,embers:Hn,world:Ge,K:D,renderer:Un,camera:Wt,input:ft,buildSpot:()=>Za(),build:i=>za(i),renderOnce:()=>Ro.render(0),outlineCats:Ad,spawnMonster:ja,projectiles:vi,damage:Us,dropBag:(i,e)=>Bu(i,e),ghost:Ji,get camYaw(){return Zi}};window.__errors=[];addEventListener("error",i=>window.__errors.push(String(i.message)));addEventListener("unhandledrejection",i=>window.__errors.push(String(i.reason)));function mp(){requestAnimationFrame(mp);const i=Oy.getDelta(),e=Math.min(i,.05);if(Y.paused||(Y.time+=e),ft.update(e),Ny(i),Fe.snap){const t=Fe.snap;Fe.snap=null,Ry(t)}Y.paused||(Ge.update(Y.time),BM.update(Y.time));for(let t=0;t<kM&&!Y.paused&&(Y.phase==="prep"||Y.phase==="wave");t++)t>0&&(Y.time+=e,Uf(e)),by(e),sy(e),Fe.guest&&Dy(e),ny(e),iy(e),ly(e),ZM(e);if(Y.paused||Uf(e),py(e),Cy(i),It.length>1&&Py(),!Y.paused){if(Et.update(e),Math.random()<e*(4+10*(Y.lights/zr))){const t=Ge.lighthouse.tip;xs.emit(t.x,t.y,t.z,{n:1,color:"#e8e2dc",speed:.5,up:1.6,life:3.2,gravity:-.15})}xs.update(e)}if(_y(e),Un.info.reset(),Ro.render(e),Hl++,ma+=i,ma>=.5){const t=Hl/ma;window.__fpsSamples.push(t),window.__fpsSamples.length>240&&window.__fpsSamples.shift(),Nu.textContent=`${t.toFixed(0)} fps · ${Un.info.render.calls} dc`,ga=t<(ts?28:45)?ga+1:0,ga>=6&&hs>1&&(hs=Math.max(1,hs-.25),Un.setPixelRatio(hs),Po(),ga=0,window.__dprDrops=(window.__dprDrops||0)+1,rn.has("debug")&&console.info(`[fps] ${t.toFixed(0)} fps over tid → dpr senket til ${hs}`)),Hl=0,ma=0}}mp();qd&&rn.has("autostart")&&kr();function ka(i,e){let t=i-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}
