(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hc="170",op=0,Lu=1,ap=2,Sf=1,wf=2,$i=3,gs=0,Vn=1,cn=2,Sn=0,ds=1,Ti=2,Du=3,Iu=4,Ef=5,vi=100,lp=101,cp=102,up=103,hp=104,Kr=200,fp=201,dp=202,pp=203,Ll=204,Dl=205,Il=206,mp=207,Ul=208,gp=209,vp=210,xp=211,_p=212,Mp=213,yp=214,zl=0,Nl=1,kl=2,Er=3,Fl=4,Ol=5,Bl=6,Gl=7,Wc=0,bp=1,Sp=2,ps=0,Tf=1,Af=2,Cf=3,Xc=4,wp=5,Rf=6,Pf=7,Lf=300,Tr=301,Ar=302,Vl=303,Hl=304,Aa=306,zi=1e3,Rs=1001,Wl=1002,Tn=1003,Ep=1004,Ao=1005,Ii=1006,Va=1007,Ps=1008,Ni=1009,Df=1010,If=1011,co=1012,qc=1013,ks=1014,bi=1015,oi=1016,Yc=1017,$c=1018,Fs=1020,Uf=35902,zf=1021,Nf=1022,ri=1023,kf=1024,Ff=1025,vr=1026,Os=1027,Ca=1028,jc=1029,Of=1030,Kc=1031,Zc=1033,ua=33776,ha=33777,fa=33778,da=33779,Xl=35840,ql=35841,Yl=35842,$l=35843,jl=36196,Kl=37492,Zl=37496,Jl=37808,Ql=37809,ec=37810,tc=37811,nc=37812,ic=37813,sc=37814,rc=37815,oc=37816,ac=37817,lc=37818,cc=37819,uc=37820,hc=37821,pa=36492,fc=36494,dc=36495,Bf=36283,pc=36284,mc=36285,gc=36286,Tp=3200,Ap=3201,Jc=0,Cp=1,us="",wn="srgb",zr="srgb-linear",Ra="linear",Gt="srgb",Ks=7680,Uu=519,Rp=512,Pp=513,Lp=514,Gf=515,Dp=516,Ip=517,Up=518,zp=519,zu=35044,Nu=35048,ku="300 es",Ji=2e3,Ma=2001;class Nr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fu=1234567;const eo=Math.PI/180,uo=180/Math.PI;function Hs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function Mn(i,e,t){return Math.max(e,Math.min(t,i))}function Qc(i,e){return(i%e+e)%e}function Np(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function kp(i,e,t){return i!==e?(t-i)/(e-i):0}function to(i,e,t){return(1-t)*i+t*e}function Fp(i,e,t,n){return to(i,e,1-Math.exp(-t*n))}function Op(i,e=1){return e-Math.abs(Qc(i,e*2)-e)}function Bp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Gp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Vp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Hp(i,e){return i+Math.random()*(e-i)}function Wp(i){return i*(.5-Math.random())}function Xp(i){i!==void 0&&(Fu=i);let e=Fu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qp(i){return i*eo}function Yp(i){return i*uo}function $p(i){return(i&i-1)===0&&i!==0}function jp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Kp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zp(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const yt={DEG2RAD:eo,RAD2DEG:uo,generateUUID:Hs,clamp:Mn,euclideanModulo:Qc,mapLinear:Np,inverseLerp:kp,lerp:to,damp:Fp,pingpong:Op,smoothstep:Bp,smootherstep:Gp,randInt:Vp,randFloat:Hp,randFloatSpread:Wp,seededRandom:Xp,degToRad:qp,radToDeg:Yp,isPowerOfTwo:$p,ceilPowerOfTwo:jp,floorPowerOfTwo:Kp,setQuaternionFromProperEuler:Zp,normalize:Nn,denormalize:pr};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class St{constructor(e,t,n,s,r,o,a,l,c){St.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],M=s[0],m=s[3],d=s[6],_=s[1],b=s[4],x=s[7],C=s[2],E=s[5],T=s[8];return r[0]=o*M+a*_+l*C,r[3]=o*m+a*b+l*E,r[6]=o*d+a*x+l*T,r[1]=c*M+u*_+h*C,r[4]=c*m+u*b+h*E,r[7]=c*d+u*x+h*T,r[2]=f*M+p*_+g*C,r[5]=f*m+p*b+g*E,r[8]=f*d+p*x+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=t*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=h*M,e[1]=(s*c-u*n)*M,e[2]=(a*n-s*o)*M,e[3]=f*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=p*M,e[7]=(n*l-c*t)*M,e[8]=(o*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ha.makeScale(e,t)),this}rotate(e){return this.premultiply(Ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ha=new St;function Vf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ya(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jp(){const i=ya("canvas");return i.style.display="block",i}const Ou={};function Zr(i){i in Ou||(Ou[i]=!0,console.warn(i))}function Qp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function e0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function t0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ut={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Gt&&(i.r=es(i.r),i.g=es(i.g),i.b=es(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Gt&&(i.r=xr(i.r),i.g=xr(i.g),i.b=xr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===us?Ra:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function es(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Bu=[.64,.33,.3,.6,.15,.06],Gu=[.2126,.7152,.0722],Vu=[.3127,.329],Hu=new St().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wu=new St().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ut.define({[zr]:{primaries:Bu,whitePoint:Vu,transfer:Ra,toXYZ:Hu,fromXYZ:Wu,luminanceCoefficients:Gu,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:Bu,whitePoint:Vu,transfer:Gt,toXYZ:Hu,fromXYZ:Wu,luminanceCoefficients:Gu,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}});let Zs;class n0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zs===void 0&&(Zs=ya("canvas")),Zs.width=e.width,Zs.height=e.height;const n=Zs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ya("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=es(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(es(t[n]/255)*255):t[n]=es(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let i0=0;class Hf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Hs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wa(s[o].image)):r.push(Wa(s[o]))}else r=Wa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Wa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?n0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let s0=0;class Un extends Nr{constructor(e=Un.DEFAULT_IMAGE,t=Un.DEFAULT_MAPPING,n=Rs,s=Rs,r=Ii,o=Ps,a=ri,l=Ni,c=Un.DEFAULT_ANISOTROPY,u=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=Hs(),this.name="",this.source=new Hf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zi:e.x=e.x-Math.floor(e.x);break;case Rs:e.x=e.x<0?0:1;break;case Wl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zi:e.y=e.y-Math.floor(e.y);break;case Rs:e.y=e.y<0?0:1;break;case Wl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Lf;Un.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,n=0,s=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],M=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,x=(p+1)/2,C=(d+1)/2,E=(u+f)/4,T=(h+M)/4,A=(g+m)/4;return b>x&&b>C?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=E/n,r=T/n):x>C?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=A/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=T/r,s=A/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(h-M)*(h-M)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-M)/_,this.z=(f-u)/_,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class r0 extends Nr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Un(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Hf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends r0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wf extends Un{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class o0 extends Un{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mo{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],M=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=M;return}if(h!==M||l!==f||c!==p||u!==g){let m=1-a;const d=l*f+c*p+u*g+h*M,_=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const C=Math.sqrt(b),E=Math.atan2(C,d*_);m=Math.sin(m*E)/C,a=Math.sin(a*E)/C}const x=a*_;if(l=l*m+f*x,c=c*m+p*x,u=u*m+g*x,h=h*m+M*x,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xa.copy(this).projectOnVector(e),this.sub(Xa)}reflect(e){return this.sub(Xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xa=new G,Xu=new Mo;class Ws{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,di):di.fromBufferAttribute(r,o),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Co.copy(n.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),Ro.subVectors(this.max,Vr),Js.subVectors(e.a,Vr),Qs.subVectors(e.b,Vr),er.subVectors(e.c,Vr),is.subVectors(Qs,Js),ss.subVectors(er,Qs),_s.subVectors(Js,er);let t=[0,-is.z,is.y,0,-ss.z,ss.y,0,-_s.z,_s.y,is.z,0,-is.x,ss.z,0,-ss.x,_s.z,0,-_s.x,-is.y,is.x,0,-ss.y,ss.x,0,-_s.y,_s.x,0];return!qa(t,Js,Qs,er,Ro)||(t=[1,0,0,0,1,0,0,0,1],!qa(t,Js,Qs,er,Ro))?!1:(Po.crossVectors(is,ss),t=[Po.x,Po.y,Po.z],qa(t,Js,Qs,er,Ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bi=[new G,new G,new G,new G,new G,new G,new G,new G],di=new G,Co=new Ws,Js=new G,Qs=new G,er=new G,is=new G,ss=new G,_s=new G,Vr=new G,Ro=new G,Po=new G,Ms=new G;function qa(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ms.fromArray(i,r);const a=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),l=e.dot(Ms),c=t.dot(Ms),u=n.dot(Ms);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const a0=new Ws,Hr=new G,Ya=new G;class kr{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):a0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);const t=Hr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Hr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(Ya)),this.expandByPoint(Hr.copy(e.center).sub(Ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gi=new G,$a=new G,Lo=new G,rs=new G,ja=new G,Do=new G,Ka=new G;class eu{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){$a.copy(e).add(t).multiplyScalar(.5),Lo.copy(t).sub(e).normalize(),rs.copy(this.origin).sub($a);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Lo),a=rs.dot(this.direction),l=-rs.dot(Lo),c=rs.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const M=1/u;h*=M,f*=M,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy($a).addScaledVector(Lo,f),p}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);const n=Gi.dot(this.direction),s=Gi.dot(Gi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,n,s,r){ja.subVectors(t,e),Do.subVectors(n,e),Ka.crossVectors(ja,Do);let o=this.direction.dot(Ka),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rs.subVectors(this.origin,e);const l=a*this.direction.dot(Do.crossVectors(rs,Do));if(l<0)return null;const c=a*this.direction.dot(ja.cross(rs));if(c<0||l+c>o)return null;const u=-a*rs.dot(Ka);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,t,n,s,r,o,a,l,c,u,h,f,p,g,M,m){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,f,p,g,M,m)}set(e,t,n,s,r,o,a,l,c,u,h,f,p,g,M,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=M,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/tr.setFromMatrixColumn(e,0).length(),r=1/tr.setFromMatrixColumn(e,1).length(),o=1/tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,M=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-M*c,t[9]=-a*l,t[2]=M-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,M=c*h;t[0]=f+M*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=M+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,M=c*h;t[0]=f-M*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=M-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,M=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+M,t[1]=l*h,t[5]=M*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,M=a*c;t[0]=l*u,t[4]=M-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-M*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,M=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+M,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=M*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(l0,e,c0)}lookAt(e,t,n){const s=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),os.crossVectors(n,$n),os.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),os.crossVectors(n,$n)),os.normalize(),Io.crossVectors($n,os),s[0]=os.x,s[4]=Io.x,s[8]=$n.x,s[1]=os.y,s[5]=Io.y,s[9]=$n.y,s[2]=os.z,s[6]=Io.z,s[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],M=n[6],m=n[10],d=n[14],_=n[3],b=n[7],x=n[11],C=n[15],E=s[0],T=s[4],A=s[8],y=s[12],v=s[1],w=s[5],I=s[9],U=s[13],P=s[2],N=s[6],B=s[10],W=s[14],V=s[3],j=s[7],Q=s[11],se=s[15];return r[0]=o*E+a*v+l*P+c*V,r[4]=o*T+a*w+l*N+c*j,r[8]=o*A+a*I+l*B+c*Q,r[12]=o*y+a*U+l*W+c*se,r[1]=u*E+h*v+f*P+p*V,r[5]=u*T+h*w+f*N+p*j,r[9]=u*A+h*I+f*B+p*Q,r[13]=u*y+h*U+f*W+p*se,r[2]=g*E+M*v+m*P+d*V,r[6]=g*T+M*w+m*N+d*j,r[10]=g*A+M*I+m*B+d*Q,r[14]=g*y+M*U+m*W+d*se,r[3]=_*E+b*v+x*P+C*V,r[7]=_*T+b*w+x*N+C*j,r[11]=_*A+b*I+x*B+C*Q,r[15]=_*y+b*U+x*W+C*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],M=e[7],m=e[11],d=e[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*p-n*l*p)+M*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+m*(+t*c*h-t*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+d*(-s*a*u-t*l*h+t*a*f+s*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],M=e[13],m=e[14],d=e[15],_=h*m*c-M*f*c+M*l*p-a*m*p-h*l*d+a*f*d,b=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,x=u*M*c-g*h*c+g*a*p-o*M*p-u*a*d+o*h*d,C=g*h*l-u*M*l-g*a*f+o*M*f+u*a*m-o*h*m,E=t*_+n*b+s*x+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=_*T,e[1]=(M*f*r-h*m*r-M*s*p+n*m*p+h*s*d-n*f*d)*T,e[2]=(a*m*r-M*l*r+M*s*c-n*m*c-a*s*d+n*l*d)*T,e[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*p-n*l*p)*T,e[4]=b*T,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*d+t*f*d)*T,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*d-t*l*d)*T,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*p+t*l*p)*T,e[8]=x*T,e[9]=(g*h*r-u*M*r-g*n*p+t*M*p+u*n*d-t*h*d)*T,e[10]=(o*M*r-g*a*r+g*n*c-t*M*c-o*n*d+t*a*d)*T,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*p-t*a*p)*T,e[12]=C*T,e[13]=(u*M*s-g*h*s+g*n*f-t*M*f-u*n*m+t*h*m)*T,e[14]=(g*a*s-o*M*s-g*n*l+t*M*l+o*n*m-t*a*m)*T,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*f+t*a*f)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,M=o*u,m=o*h,d=a*h,_=l*c,b=l*u,x=l*h,C=n.x,E=n.y,T=n.z;return s[0]=(1-(M+d))*C,s[1]=(p+x)*C,s[2]=(g-b)*C,s[3]=0,s[4]=(p-x)*E,s[5]=(1-(f+d))*E,s[6]=(m+_)*E,s[7]=0,s[8]=(g+b)*T,s[9]=(m-_)*T,s[10]=(1-(f+M))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=tr.set(s[0],s[1],s[2]).length();const o=tr.set(s[4],s[5],s[6]).length(),a=tr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],pi.copy(this);const c=1/r,u=1/o,h=1/a;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=u,pi.elements[5]*=u,pi.elements[6]*=u,pi.elements[8]*=h,pi.elements[9]*=h,pi.elements[10]*=h,t.setFromRotationMatrix(pi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ji){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let p,g;if(a===Ji)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ma)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ji){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),f=(t+e)*c,p=(n+s)*u;let g,M;if(a===Ji)g=(o+r)*h,M=-2*h;else if(a===Ma)g=r*h,M=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const tr=new G,pi=new Nt,l0=new G(0,0,0),c0=new G(1,1,1),os=new G,Io=new G,$n=new G,qu=new Nt,Yu=new Mo;class ki{constructor(e=0,t=0,n=0,s=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yu.setFromEuler(this),this.setFromQuaternion(Yu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class tu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let u0=0;const $u=new G,nr=new Mo,Vi=new Nt,Uo=new G,Wr=new G,h0=new G,f0=new Mo,ju=new G(1,0,0),Ku=new G(0,1,0),Zu=new G(0,0,1),Ju={type:"added"},d0={type:"removed"},ir={type:"childadded",child:null},Za={type:"childremoved",child:null};class qt extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new G,t=new ki,n=new Mo,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Nt},normalMatrix:{value:new St}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(ju,e)}rotateY(e){return this.rotateOnAxis(Ku,e)}rotateZ(e){return this.rotateOnAxis(Zu,e)}translateOnAxis(e,t){return $u.copy(e).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ju,e)}translateY(e){return this.translateOnAxis(Ku,e)}translateZ(e){return this.translateOnAxis(Zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Uo.copy(e):Uo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Wr,Uo,this.up):Vi.lookAt(Uo,Wr,this.up),this.quaternion.setFromRotationMatrix(Vi),s&&(Vi.extractRotation(s.matrixWorld),nr.setFromRotationMatrix(Vi),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ju),ir.child=e,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(d0),Za.child=e,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ju),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,h0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,f0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}qt.DEFAULT_UP=new G(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new G,Hi=new G,Ja=new G,Wi=new G,sr=new G,rr=new G,Qu=new G,Qa=new G,el=new G,tl=new G,nl=new Wt,il=new Wt,sl=new Wt;class xi{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mi.subVectors(e,t),s.cross(mi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mi.subVectors(s,t),Hi.subVectors(n,t),Ja.subVectors(e,t);const o=mi.dot(mi),a=mi.dot(Hi),l=mi.dot(Ja),c=Hi.dot(Hi),u=Hi.dot(Ja),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wi.x),l.addScaledVector(o,Wi.y),l.addScaledVector(a,Wi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return nl.setScalar(0),il.setScalar(0),sl.setScalar(0),nl.fromBufferAttribute(e,t),il.fromBufferAttribute(e,n),sl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(nl,r.x),o.addScaledVector(il,r.y),o.addScaledVector(sl,r.z),o}static isFrontFacing(e,t,n,s){return mi.subVectors(n,t),Hi.subVectors(e,t),mi.cross(Hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),mi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return xi.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;sr.subVectors(s,n),rr.subVectors(r,n),Qa.subVectors(e,n);const l=sr.dot(Qa),c=rr.dot(Qa);if(l<=0&&c<=0)return t.copy(n);el.subVectors(e,s);const u=sr.dot(el),h=rr.dot(el);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(sr,o);tl.subVectors(e,r);const p=sr.dot(tl),g=rr.dot(tl);if(g>=0&&p<=g)return t.copy(r);const M=p*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(rr,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Qu.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(Qu,a);const d=1/(m+M+f);return o=M*d,a=f*d,t.copy(n).addScaledVector(sr,o).addScaledVector(rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},zo={h:0,s:0,l:0};function rl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ut.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ut.workingColorSpace){if(e=Qc(e,1),t=Mn(t,0,1),n=Mn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=rl(o,r,e+1/3),this.g=rl(o,r,e),this.b=rl(o,r,e-1/3)}return Ut.toWorkingColorSpace(this,s),this}setStyle(e,t=wn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wn){const n=Xf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return Ut.fromWorkingColorSpace(Dn.copy(this),e),Math.round(Mn(Dn.r*255,0,255))*65536+Math.round(Mn(Dn.g*255,0,255))*256+Math.round(Mn(Dn.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.fromWorkingColorSpace(Dn.copy(this),t);const n=Dn.r,s=Dn.g,r=Dn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ut.workingColorSpace){return Ut.fromWorkingColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=wn){Ut.fromWorkingColorSpace(Dn.copy(this),e);const t=Dn.r,n=Dn.g,s=Dn.b;return e!==wn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(as),this.setHSL(as.h+e,as.s+t,as.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(zo);const n=to(as.h,zo.h,t),s=to(as.s,zo.s,t),r=to(as.l,zo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Pe;Pe.NAMES=Xf;let p0=0;class Xs extends Nr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Hs(),this.name="",this.blending=ds,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ll,this.blendDst=Dl,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==gs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ll&&(n.blendSrc=this.blendSrc),this.blendDst!==Dl&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zt extends Xs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new G,No=new Ae;class Xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zu,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)No.fromBufferAttribute(this,t),No.applyMatrix3(e),this.setXY(t,No.x,No.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array),s=Nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array),s=Nn(s,this.array),r=Nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zu&&(e.usage=this.usage),e}}class qf extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yf extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let m0=0;const ii=new Nt,ol=new qt,or=new G,jn=new Ws,Xr=new Ws,xn=new G;class Ot extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=Hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vf(e)?Yf:qf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new St().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,n){return ii.makeTranslation(e,t,n),this.applyMatrix4(ii),this}scale(e,t,n){return ii.makeScale(e,t,n),this.applyMatrix4(ii),this}lookAt(e){return ol.lookAt(e),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];jn.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Xr.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(jn.min,Xr.min),jn.expandByPoint(xn),xn.addVectors(jn.max,Xr.max),jn.expandByPoint(xn)):(jn.expandByPoint(Xr.min),jn.expandByPoint(Xr.max))}jn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)xn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(xn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xn.fromBufferAttribute(a,c),l&&(or.fromBufferAttribute(e,c),xn.add(or)),s=Math.max(s,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new G,l[A]=new G;const c=new G,u=new G,h=new G,f=new Ae,p=new Ae,g=new Ae,M=new G,m=new G;function d(A,y,v){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,v),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,v),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(w),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(w),a[A].add(M),a[y].add(M),a[v].add(M),l[A].add(m),l[y].add(m),l[v].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let A=0,y=_.length;A<y;++A){const v=_[A],w=v.start,I=v.count;for(let U=w,P=w+I;U<P;U+=3)d(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const b=new G,x=new G,C=new G,E=new G;function T(A){C.fromBufferAttribute(s,A),E.copy(C);const y=a[A];b.copy(y),b.sub(C.multiplyScalar(C.dot(y))).normalize(),x.crossVectors(E,y);const w=x.dot(l[A])<0?-1:1;o.setXYZW(A,b.x,b.y,b.z,w)}for(let A=0,y=_.length;A<y;++A){const v=_[A],w=v.start,I=v.count;for(let U=w,P=w+I;U<P;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,u=new G,h=new G;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),M=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Xt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eh=new Nt,ys=new eu,ko=new kr,th=new G,Fo=new G,Oo=new G,Bo=new G,al=new G,Go=new G,nh=new G,Vo=new G;class lt extends qt{constructor(e=new Ot,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Go.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(al.fromBufferAttribute(h,e),o?Go.addScaledVector(al,u):Go.addScaledVector(al.sub(t),u))}t.add(Go)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(r),ys.copy(e.ray).recast(e.near),!(ko.containsPoint(ys.origin)===!1&&(ys.intersectSphere(ko,th)===null||ys.origin.distanceToSquared(th)>(e.far-e.near)**2))&&(eh.copy(r).invert(),ys.copy(e.ray).applyMatrix4(eh),!(n.boundingBox!==null&&ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=f.length;g<M;g++){const m=f[g],d=o[m.materialIndex],_=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,C=b;x<C;x+=3){const E=a.getX(x),T=a.getX(x+1),A=a.getX(x+2);s=Ho(this,d,e,n,c,u,h,E,T,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let m=g,d=M;m<d;m+=3){const _=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);s=Ho(this,o,e,n,c,u,h,_,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=f.length;g<M;g++){const m=f[g],d=o[m.materialIndex],_=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,C=b;x<C;x+=3){const E=x,T=x+1,A=x+2;s=Ho(this,d,e,n,c,u,h,E,T,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=g,d=M;m<d;m+=3){const _=m,b=m+1,x=m+2;s=Ho(this,o,e,n,c,u,h,_,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function g0(i,e,t,n,s,r,o,a){let l;if(e.side===Vn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===gs,a),l===null)return null;Vo.copy(a),Vo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Vo);return c<t.near||c>t.far?null:{distance:c,point:Vo.clone(),object:i}}function Ho(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Fo),i.getVertexPosition(l,Oo),i.getVertexPosition(c,Bo);const u=g0(i,e,t,n,Fo,Oo,Bo,nh);if(u){const h=new G;xi.getBarycoord(nh,Fo,Oo,Bo,h),s&&(u.uv=xi.getInterpolatedAttribute(s,a,l,c,h,new Ae)),r&&(u.uv1=xi.getInterpolatedAttribute(r,a,l,c,h,new Ae)),o&&(u.normal=xi.getInterpolatedAttribute(o,a,l,c,h,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new G,materialIndex:0};xi.getNormal(Fo,Oo,Bo,f.normal),u.face=f,u.barycoord=h}return u}class On extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(h,2));function g(M,m,d,_,b,x,C,E,T,A,y){const v=x/T,w=C/A,I=x/2,U=C/2,P=E/2,N=T+1,B=A+1;let W=0,V=0;const j=new G;for(let Q=0;Q<B;Q++){const se=Q*w-U;for(let Ee=0;Ee<N;Ee++){const Fe=Ee*v-I;j[M]=Fe*_,j[m]=se*b,j[d]=P,c.push(j.x,j.y,j.z),j[M]=0,j[m]=0,j[d]=E>0?1:-1,u.push(j.x,j.y,j.z),h.push(Ee/T),h.push(1-Q/A),W+=1}}for(let Q=0;Q<A;Q++)for(let se=0;se<T;se++){const Ee=f+se+N*Q,Fe=f+se+N*(Q+1),H=f+(se+1)+N*(Q+1),Z=f+(se+1)+N*Q;l.push(Ee,Fe,Z),l.push(Fe,H,Z),V+=6}a.addGroup(p,V,y),p+=V,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function kn(i){const e={};for(let t=0;t<i.length;t++){const n=Cr(i[t]);for(const s in n)e[s]=n[s]}return e}function v0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $f(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const _i={clone:Cr,merge:kn};var x0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends Xs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x0,this.fragmentShader=_0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=v0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jf extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new G,ih=new Ae,sh=new Ae;class Zn extends jf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uo*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,t){return this.getViewBounds(e,ih,sh),t.subVectors(sh,ih)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(eo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ar=-90,lr=1;class M0 extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Zn(ar,lr,e,t);s.layers=this.layers,this.add(s);const r=new Zn(ar,lr,e,t);r.layers=this.layers,this.add(r);const o=new Zn(ar,lr,e,t);o.layers=this.layers,this.add(o);const a=new Zn(ar,lr,e,t);a.layers=this.layers,this.add(a);const l=new Zn(ar,lr,e,t);l.layers=this.layers,this.add(l);const c=new Zn(ar,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ji)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Kf extends Un{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Tr,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class y0 extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Kf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ii}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new On(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:Cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vn,blending:Sn});r.uniforms.tEquirect.value=t;const o=new lt(s,r),a=t.minFilter;return t.minFilter===Ps&&(t.minFilter=Ii),new M0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const ll=new G,b0=new G,S0=new St;class Ts{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ll.subVectors(n,t).cross(b0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ll),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||S0.getNormalMatrix(e),s=this.coplanarPoint(ll).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new kr,Wo=new G;class nu{constructor(e=new Ts,t=new Ts,n=new Ts,s=new Ts,r=new Ts,o=new Ts){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ji){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],M=s[10],m=s[11],d=s[12],_=s[13],b=s[14],x=s[15];if(n[0].setComponents(l-r,f-c,m-p,x-d).normalize(),n[1].setComponents(l+r,f+c,m+p,x+d).normalize(),n[2].setComponents(l+o,f+u,m+g,x+_).normalize(),n[3].setComponents(l-o,f-u,m-g,x-_).normalize(),n[4].setComponents(l-a,f-h,m-M,x-b).normalize(),t===Ji)n[5].setComponents(l+a,f+h,m+M,x+b).normalize();else if(t===Ma)n[5].setComponents(a,h,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){return bs.center.set(0,0,0),bs.radius=.7071067811865476,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Wo.x=s.normal.x>0?e.max.x:e.min.x,Wo.y=s.normal.y>0?e.max.y:e.min.y,Wo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function w0(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],M=h[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++f,h[f]=M)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const M=h[p];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class ai extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],M=[],m=[];for(let d=0;d<u;d++){const _=d*f-o;for(let b=0;b<c;b++){const x=b*h-r;g.push(x,-_,0),M.push(0,0,1),m.push(b/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){const b=_+c*d,x=_+c*(d+1),C=_+1+c*(d+1),E=_+1+c*d;p.push(b,x,E),p.push(x,C,E)}this.setIndex(p),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(M,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.width,e.height,e.widthSegments,e.heightSegments)}}var E0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T0=`#ifdef USE_ALPHAHASH
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
#endif`,A0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L0=`#ifdef USE_AOMAP
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
#endif`,D0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I0=`#ifdef USE_BATCHING
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
#endif`,U0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,F0=`#ifdef USE_IRIDESCENCE
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
#endif`,O0=`#ifdef USE_BUMPMAP
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
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$0=`#define PI 3.141592653589793
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
} // validated`,j0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,K0=`vec3 transformedNormal = objectNormal;
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
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fm=`#ifdef USE_GRADIENTMAP
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
}`,dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gm=`uniform bool receiveShadow;
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
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bm=`PhysicalMaterial material;
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
#endif`,Sm=`struct PhysicalMaterial {
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
}`,wm=`
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
#endif`,Em=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Am=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Um=`#if defined( USE_POINTS_UV )
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
#endif`,zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`#ifdef USE_MORPHTARGETS
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
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ym=`#ifdef USE_NORMALMAP
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
#endif`,$m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cg=`float getShadowMask() {
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
}`,ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hg=`#ifdef USE_SKINNING
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
#endif`,fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dg=`#ifdef USE_SKINNING
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
#endif`,pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xg=`#ifdef USE_TRANSMISSION
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
#endif`,_g=`#ifdef USE_TRANSMISSION
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eg=`uniform sampler2D t2D;
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
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ag=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`#include <common>
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
}`,Lg=`#if DEPTH_PACKING == 3200
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
}`,Dg=`#define DISTANCE
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
}`,Ig=`#define DISTANCE
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`uniform float scale;
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
}`,kg=`uniform vec3 diffuse;
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
}`,Fg=`#include <common>
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
}`,Og=`uniform vec3 diffuse;
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
}`,Bg=`#define LAMBERT
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
}`,Gg=`#define LAMBERT
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
}`,Vg=`#define MATCAP
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
}`,Hg=`#define MATCAP
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
}`,Wg=`#define NORMAL
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
}`,Xg=`#define NORMAL
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
}`,qg=`#define PHONG
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
}`,Yg=`#define PHONG
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
}`,$g=`#define STANDARD
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
}`,jg=`#define STANDARD
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
}`,Kg=`#define TOON
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
}`,Zg=`#define TOON
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
}`,Jg=`uniform float size;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,ev=`#include <common>
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
}`,tv=`uniform vec3 color;
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
}`,nv=`uniform float rotation;
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
}`,iv=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:E0,alphahash_pars_fragment:T0,alphamap_fragment:A0,alphamap_pars_fragment:C0,alphatest_fragment:R0,alphatest_pars_fragment:P0,aomap_fragment:L0,aomap_pars_fragment:D0,batching_pars_vertex:I0,batching_vertex:U0,begin_vertex:z0,beginnormal_vertex:N0,bsdfs:k0,iridescence_fragment:F0,bumpmap_pars_fragment:O0,clipping_planes_fragment:B0,clipping_planes_pars_fragment:G0,clipping_planes_pars_vertex:V0,clipping_planes_vertex:H0,color_fragment:W0,color_pars_fragment:X0,color_pars_vertex:q0,color_vertex:Y0,common:$0,cube_uv_reflection_fragment:j0,defaultnormal_vertex:K0,displacementmap_pars_vertex:Z0,displacementmap_vertex:J0,emissivemap_fragment:Q0,emissivemap_pars_fragment:em,colorspace_fragment:tm,colorspace_pars_fragment:nm,envmap_fragment:im,envmap_common_pars_fragment:sm,envmap_pars_fragment:rm,envmap_pars_vertex:om,envmap_physical_pars_fragment:vm,envmap_vertex:am,fog_vertex:lm,fog_pars_vertex:cm,fog_fragment:um,fog_pars_fragment:hm,gradientmap_pars_fragment:fm,lightmap_pars_fragment:dm,lights_lambert_fragment:pm,lights_lambert_pars_fragment:mm,lights_pars_begin:gm,lights_toon_fragment:xm,lights_toon_pars_fragment:_m,lights_phong_fragment:Mm,lights_phong_pars_fragment:ym,lights_physical_fragment:bm,lights_physical_pars_fragment:Sm,lights_fragment_begin:wm,lights_fragment_maps:Em,lights_fragment_end:Tm,logdepthbuf_fragment:Am,logdepthbuf_pars_fragment:Cm,logdepthbuf_pars_vertex:Rm,logdepthbuf_vertex:Pm,map_fragment:Lm,map_pars_fragment:Dm,map_particle_fragment:Im,map_particle_pars_fragment:Um,metalnessmap_fragment:zm,metalnessmap_pars_fragment:Nm,morphinstance_vertex:km,morphcolor_vertex:Fm,morphnormal_vertex:Om,morphtarget_pars_vertex:Bm,morphtarget_vertex:Gm,normal_fragment_begin:Vm,normal_fragment_maps:Hm,normal_pars_fragment:Wm,normal_pars_vertex:Xm,normal_vertex:qm,normalmap_pars_fragment:Ym,clearcoat_normal_fragment_begin:$m,clearcoat_normal_fragment_maps:jm,clearcoat_pars_fragment:Km,iridescence_pars_fragment:Zm,opaque_fragment:Jm,packing:Qm,premultiplied_alpha_fragment:eg,project_vertex:tg,dithering_fragment:ng,dithering_pars_fragment:ig,roughnessmap_fragment:sg,roughnessmap_pars_fragment:rg,shadowmap_pars_fragment:og,shadowmap_pars_vertex:ag,shadowmap_vertex:lg,shadowmask_pars_fragment:cg,skinbase_vertex:ug,skinning_pars_vertex:hg,skinning_vertex:fg,skinnormal_vertex:dg,specularmap_fragment:pg,specularmap_pars_fragment:mg,tonemapping_fragment:gg,tonemapping_pars_fragment:vg,transmission_fragment:xg,transmission_pars_fragment:_g,uv_pars_fragment:Mg,uv_pars_vertex:yg,uv_vertex:bg,worldpos_vertex:Sg,background_vert:wg,background_frag:Eg,backgroundCube_vert:Tg,backgroundCube_frag:Ag,cube_vert:Cg,cube_frag:Rg,depth_vert:Pg,depth_frag:Lg,distanceRGBA_vert:Dg,distanceRGBA_frag:Ig,equirect_vert:Ug,equirect_frag:zg,linedashed_vert:Ng,linedashed_frag:kg,meshbasic_vert:Fg,meshbasic_frag:Og,meshlambert_vert:Bg,meshlambert_frag:Gg,meshmatcap_vert:Vg,meshmatcap_frag:Hg,meshnormal_vert:Wg,meshnormal_frag:Xg,meshphong_vert:qg,meshphong_frag:Yg,meshphysical_vert:$g,meshphysical_frag:jg,meshtoon_vert:Kg,meshtoon_frag:Zg,points_vert:Jg,points_frag:Qg,shadow_vert:ev,shadow_frag:tv,sprite_vert:nv,sprite_frag:iv},Xe={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},envMapRotation:{value:new St},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},Li={basic:{uniforms:kn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:kn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:kn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:kn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:kn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:kn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:kn([Xe.points,Xe.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:kn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:kn([Xe.common,Xe.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:kn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:kn([Xe.sprite,Xe.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new St}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:kn([Xe.common,Xe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:kn([Xe.lights,Xe.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Li.physical={uniforms:kn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const Xo={r:0,b:0,g:0},Ss=new ki,sv=new Nt;function rv(i,e,t,n,s,r,o){const a=new Pe(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(_){let b=_.isScene===!0?_.background:null;return b&&b.isTexture&&(b=(_.backgroundBlurriness>0?t:e).get(b)),b}function M(_){let b=!1;const x=g(_);x===null?d(a,l):x&&x.isColor&&(d(x,1),b=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,b){const x=g(b);x&&(x.isCubeTexture||x.mapping===Aa)?(u===void 0&&(u=new lt(new On(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Cr(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ss.copy(b.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(sv.makeRotationFromEuler(Ss)),u.material.toneMapped=Ut.getTransfer(x.colorSpace)!==Gt,(h!==x||f!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new lt(new ai(2,2),new sn({name:"BackgroundMaterial",uniforms:Cr(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Ut.getTransfer(x.colorSpace)!==Gt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,b){_.getRGB(Xo,$f(i)),n.buffers.color.setClear(Xo.r,Xo.g,Xo.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(_,b=1){a.set(_),l=b,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(a,l)},render:M,addToRenderList:m}}function ov(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(v,w,I,U,P){let N=!1;const B=h(U,I,w);r!==B&&(r=B,c(r.object)),N=p(v,U,I,P),N&&g(v,U,I,P),P!==null&&e.update(P,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,x(v,w,I,U),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,w,I){const U=I.wireframe===!0;let P=n[v.id];P===void 0&&(P={},n[v.id]=P);let N=P[w.id];N===void 0&&(N={},P[w.id]=N);let B=N[U];return B===void 0&&(B=f(l()),N[U]=B),B}function f(v){const w=[],I=[],U=[];for(let P=0;P<t;P++)w[P]=0,I[P]=0,U[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:I,attributeDivisors:U,object:v,attributes:{},index:null}}function p(v,w,I,U){const P=r.attributes,N=w.attributes;let B=0;const W=I.getAttributes();for(const V in W)if(W[V].location>=0){const Q=P[V];let se=N[V];if(se===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(se=v.instanceColor)),Q===void 0||Q.attribute!==se||se&&Q.data!==se.data)return!0;B++}return r.attributesNum!==B||r.index!==U}function g(v,w,I,U){const P={},N=w.attributes;let B=0;const W=I.getAttributes();for(const V in W)if(W[V].location>=0){let Q=N[V];Q===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor));const se={};se.attribute=Q,Q&&Q.data&&(se.data=Q.data),P[V]=se,B++}r.attributes=P,r.attributesNum=B,r.index=U}function M(){const v=r.newAttributes;for(let w=0,I=v.length;w<I;w++)v[w]=0}function m(v){d(v,0)}function d(v,w){const I=r.newAttributes,U=r.enabledAttributes,P=r.attributeDivisors;I[v]=1,U[v]===0&&(i.enableVertexAttribArray(v),U[v]=1),P[v]!==w&&(i.vertexAttribDivisor(v,w),P[v]=w)}function _(){const v=r.newAttributes,w=r.enabledAttributes;for(let I=0,U=w.length;I<U;I++)w[I]!==v[I]&&(i.disableVertexAttribArray(I),w[I]=0)}function b(v,w,I,U,P,N,B){B===!0?i.vertexAttribIPointer(v,w,I,P,N):i.vertexAttribPointer(v,w,I,U,P,N)}function x(v,w,I,U){M();const P=U.attributes,N=I.getAttributes(),B=w.defaultAttributeValues;for(const W in N){const V=N[W];if(V.location>=0){let j=P[W];if(j===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(j=v.instanceColor)),j!==void 0){const Q=j.normalized,se=j.itemSize,Ee=e.get(j);if(Ee===void 0)continue;const Fe=Ee.buffer,H=Ee.type,Z=Ee.bytesPerElement,he=H===i.INT||H===i.UNSIGNED_INT||j.gpuType===qc;if(j.isInterleavedBufferAttribute){const oe=j.data,me=oe.stride,Le=j.offset;if(oe.isInstancedInterleavedBuffer){for(let Ue=0;Ue<V.locationSize;Ue++)d(V.location+Ue,oe.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ue=0;Ue<V.locationSize;Ue++)m(V.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let Ue=0;Ue<V.locationSize;Ue++)b(V.location+Ue,se/V.locationSize,H,Q,me*Z,(Le+se/V.locationSize*Ue)*Z,he)}else{if(j.isInstancedBufferAttribute){for(let oe=0;oe<V.locationSize;oe++)d(V.location+oe,j.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let oe=0;oe<V.locationSize;oe++)m(V.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let oe=0;oe<V.locationSize;oe++)b(V.location+oe,se/V.locationSize,H,Q,se*Z,se/V.locationSize*oe*Z,he)}}else if(B!==void 0){const Q=B[W];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(V.location,Q);break;case 3:i.vertexAttrib3fv(V.location,Q);break;case 4:i.vertexAttrib4fv(V.location,Q);break;default:i.vertexAttrib1fv(V.location,Q)}}}}_()}function C(){A();for(const v in n){const w=n[v];for(const I in w){const U=w[I];for(const P in U)u(U[P].object),delete U[P];delete w[I]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;const w=n[v.id];for(const I in w){const U=w[I];for(const P in U)u(U[P].object),delete U[P];delete w[I]}delete n[v.id]}function T(v){for(const w in n){const I=n[w];if(I[v.id]===void 0)continue;const U=I[v.id];for(const P in U)u(U[P].object),delete U[P];delete I[v.id]}}function A(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:M,enableAttribute:m,disableUnusedAttributes:_}}function av(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let M=0;M<h;M++)g+=u[M]*f[M];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function lv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==ri&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const A=T===oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ni&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==bi&&!A)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:C,maxSamples:E}}function cv(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ts,a=new St,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const _=r?0:n,b=_*4;let x=d.clippingState||null;l.value=x,x=u(g,f,b,p);for(let C=0;C!==b;++C)x[C]=t[C];d.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const M=h!==null?h.length:0;let m=null;if(M!==0){if(m=l.value,g!==!0||m===null){const d=p+M*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,x=p;b!==M;++b,x+=4)o.copy(h[b]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function uv(i){let e=new WeakMap;function t(o,a){return a===Vl?o.mapping=Tr:a===Hl&&(o.mapping=Ar),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vl||a===Hl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new y0(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class iu extends jf{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const mr=4,rh=[.125,.215,.35,.446,.526,.582],Cs=20,cl=new iu,oh=new Pe;let ul=null,hl=0,fl=0,dl=!1;const As=(1+Math.sqrt(5))/2,cr=1/As,ah=[new G(-As,cr,0),new G(As,cr,0),new G(-cr,0,As),new G(cr,0,As),new G(0,As,-cr),new G(0,As,cr),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class lh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ul=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ul,hl,fl),this._renderer.xr.enabled=dl,e.scissorTest=!1,qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Tr||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:oi,format:ri,colorSpace:zr,depthBuffer:!1},s=ch(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hv(r)),this._blurMaterial=fv(r,e,t)}return s}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,cl)}_sceneToCubeUV(e,t,n,s){const a=new Zn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(oh),u.toneMapping=ps,u.autoClear=!1;const p=new zt({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),g=new lt(new On,p);let M=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,M=!0):(p.color.copy(oh),M=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):_===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const b=this._cubeSize;qo(s,_*b,d>2?b:0,b,b),u.setRenderTarget(s),M&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Tr||e.mapping===Ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;qo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,cl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ah[(s-r-1)%ah.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new lt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Cs-1),M=r/g,m=isFinite(r)?1+Math.floor(u*M):Cs;m>Cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cs}`);const d=[];let _=0;for(let T=0;T<Cs;++T){const A=T/M,y=Math.exp(-A*A/2);d.push(y),T===0?_+=y:T<m&&(_+=2*y)}for(let T=0;T<d.length;T++)d[T]=d[T]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const x=this._sizeLods[s],C=3*x*(s>b-mr?s-b+mr:0),E=4*(this._cubeSize-x);qo(t,C,E,3*x,2*x),l.setRenderTarget(t),l.render(h,cl)}}function hv(i){const e=[],t=[],n=[];let s=i;const r=i-mr+1+rh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-mr?l=rh[o-i+mr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,M=3,m=2,d=1,_=new Float32Array(M*g*p),b=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let E=0;E<p;E++){const T=E%3*2/3-1,A=E>2?0:-1,y=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];_.set(y,M*g*E),b.set(f,m*g*E);const v=[E,E,E,E,E,E];x.set(v,d*g*E)}const C=new Ot;C.setAttribute("position",new Xt(_,M)),C.setAttribute("uv",new Xt(b,m)),C.setAttribute("faceIndex",new Xt(x,d)),e.push(C),s>mr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ch(i,e,t){const n=new Xn(i,e,t);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function fv(i,e,t){const n=new Float32Array(Cs),s=new G(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:su(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function uh(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:su(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function hh(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function su(){return`

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
	`}function dv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vl||l===Hl,u=l===Tr||l===Ar;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new lh(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new lh(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function pv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Zr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function mv(i,e,t,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const M=f.morphAttributes[g];for(let m=0,d=M.length;m<d;m++)e.remove(M[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const M=p[g];for(let m=0,d=M.length;m<d;m++)e.update(M[m],i.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let M=0;if(p!==null){const _=p.array;M=p.version;for(let b=0,x=_.length;b<x;b+=3){const C=_[b+0],E=_[b+1],T=_[b+2];f.push(C,E,E,T,T,C)}}else if(g!==void 0){const _=g.array;M=g.version;for(let b=0,x=_.length/3-1;b<x;b+=3){const C=b+0,E=b+1,T=b+2;f.push(C,E,E,T,T,C)}}else return;const m=new(Vf(f)?Yf:qf)(f,1);m.version=M;const d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function gv(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function h(f,p,g,M){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],M[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,M,0,g);let d=0;for(let _=0;_<g;_++)d+=p[_]*M[_];t.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function vv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function xv(i,e,t){const n=new WeakMap,s=new Wt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let y=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let b=0;p===!0&&(b=1),g===!0&&(b=2),M===!0&&(b=3);let x=a.attributes.position.count*b,C=1;x>e.maxTextureSize&&(C=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const E=new Float32Array(x*C*4*h),T=new Wf(E,x,C,h);T.type=bi,T.needsUpdate=!0;const A=b*4;for(let v=0;v<h;v++){const w=m[v],I=d[v],U=_[v],P=x*C*4*v;for(let N=0;N<w.count;N++){const B=N*A;p===!0&&(s.fromBufferAttribute(w,N),E[P+B+0]=s.x,E[P+B+1]=s.y,E[P+B+2]=s.z,E[P+B+3]=0),g===!0&&(s.fromBufferAttribute(I,N),E[P+B+4]=s.x,E[P+B+5]=s.y,E[P+B+6]=s.z,E[P+B+7]=0),M===!0&&(s.fromBufferAttribute(U,N),E[P+B+8]=s.x,E[P+B+9]=s.y,E[P+B+10]=s.z,E[P+B+11]=U.itemSize===4?s.w:1)}}f={count:h,texture:T,size:new Ae(x,C)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function _v(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class ru extends Un{constructor(e,t,n,s,r,o,a,l,c,u=vr){if(u!==vr&&u!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===vr&&(n=ks),n===void 0&&u===Os&&(n=Fs),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Jf=new Un,fh=new ru(1,1),Qf=new Wf,ed=new o0,td=new Kf,dh=[],ph=[],mh=new Float32Array(16),gh=new Float32Array(9),vh=new Float32Array(4);function Fr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=dh[s];if(r===void 0&&(r=new Float32Array(s),dh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function gn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Pa(i,e){let t=ph[e];t===void 0&&(t=new Int32Array(e),ph[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Mv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function yv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2fv(this.addr,e),vn(t,e)}}function bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;i.uniform3fv(this.addr,e),vn(t,e)}}function Sv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4fv(this.addr,e),vn(t,e)}}function wv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,n))return;vh.set(n),i.uniformMatrix2fv(this.addr,!1,vh),vn(t,n)}}function Ev(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,n))return;gh.set(n),i.uniformMatrix3fv(this.addr,!1,gh),vn(t,n)}}function Tv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,n))return;mh.set(n),i.uniformMatrix4fv(this.addr,!1,mh),vn(t,n)}}function Av(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2iv(this.addr,e),vn(t,e)}}function Rv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3iv(this.addr,e),vn(t,e)}}function Pv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4iv(this.addr,e),vn(t,e)}}function Lv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Dv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2uiv(this.addr,e),vn(t,e)}}function Iv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3uiv(this.addr,e),vn(t,e)}}function Uv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4uiv(this.addr,e),vn(t,e)}}function zv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fh.compareFunction=Gf,r=fh):r=Jf,t.setTexture2D(e||r,s)}function Nv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ed,s)}function kv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||td,s)}function Fv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Qf,s)}function Ov(i){switch(i){case 5126:return Mv;case 35664:return yv;case 35665:return bv;case 35666:return Sv;case 35674:return wv;case 35675:return Ev;case 35676:return Tv;case 5124:case 35670:return Av;case 35667:case 35671:return Cv;case 35668:case 35672:return Rv;case 35669:case 35673:return Pv;case 5125:return Lv;case 36294:return Dv;case 36295:return Iv;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return zv;case 35679:case 36299:case 36307:return Nv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return Fv}}function Bv(i,e){i.uniform1fv(this.addr,e)}function Gv(i,e){const t=Fr(e,this.size,2);i.uniform2fv(this.addr,t)}function Vv(i,e){const t=Fr(e,this.size,3);i.uniform3fv(this.addr,t)}function Hv(i,e){const t=Fr(e,this.size,4);i.uniform4fv(this.addr,t)}function Wv(i,e){const t=Fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xv(i,e){const t=Fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qv(i,e){const t=Fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yv(i,e){i.uniform1iv(this.addr,e)}function $v(i,e){i.uniform2iv(this.addr,e)}function jv(i,e){i.uniform3iv(this.addr,e)}function Kv(i,e){i.uniform4iv(this.addr,e)}function Zv(i,e){i.uniform1uiv(this.addr,e)}function Jv(i,e){i.uniform2uiv(this.addr,e)}function Qv(i,e){i.uniform3uiv(this.addr,e)}function ex(i,e){i.uniform4uiv(this.addr,e)}function tx(i,e,t){const n=this.cache,s=e.length,r=Pa(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Jf,r[o])}function nx(i,e,t){const n=this.cache,s=e.length,r=Pa(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ed,r[o])}function ix(i,e,t){const n=this.cache,s=e.length,r=Pa(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||td,r[o])}function sx(i,e,t){const n=this.cache,s=e.length,r=Pa(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Qf,r[o])}function rx(i){switch(i){case 5126:return Bv;case 35664:return Gv;case 35665:return Vv;case 35666:return Hv;case 35674:return Wv;case 35675:return Xv;case 35676:return qv;case 5124:case 35670:return Yv;case 35667:case 35671:return $v;case 35668:case 35672:return jv;case 35669:case 35673:return Kv;case 5125:return Zv;case 36294:return Jv;case 36295:return Qv;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return sx}}class ox{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ov(t.type)}}class ax{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rx(t.type)}}class lx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const pl=/(\w+)(\])?(\[|\.)?/g;function xh(i,e){i.seq.push(e),i.map[e.id]=e}function cx(i,e,t){const n=i.name,s=n.length;for(pl.lastIndex=0;;){const r=pl.exec(n),o=pl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){xh(t,c===void 0?new ox(a,i,e):new ax(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new lx(a),xh(t,h)),t=h}}}class ma{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);cx(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function _h(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ux=37297;let hx=0;function fx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Mh=new St;function dx(i){Ut._getMatrix(Mh,Ut.workingColorSpace,i);const e=`mat3( ${Mh.elements.map(t=>t.toFixed(4))} )`;switch(Ut.getTransfer(i)){case Ra:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function yh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+fx(i.getShaderSource(e),o)}else return s}function px(i,e){const t=dx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mx(i,e){let t;switch(e){case Tf:t="Linear";break;case Af:t="Reinhard";break;case Cf:t="Cineon";break;case Xc:t="ACESFilmic";break;case Rf:t="AgX";break;case Pf:t="Neutral";break;case wp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yo=new G;function gx(){Ut.getLuminanceCoefficients(Yo);const i=Yo.x.toFixed(4),e=Yo.y.toFixed(4),t=Yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function xx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _x(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Jr(i){return i!==""}function bh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mx=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(i){return i.replace(Mx,bx)}const yx=new Map;function bx(i,e){let t=Tt[e];if(t===void 0){const n=yx.get(e);if(n!==void 0)t=Tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vc(t)}const Sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wh(i){return i.replace(Sx,wx)}function wx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Ex(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Sf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===wf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function Tx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Tr:case Ar:e="ENVMAP_TYPE_CUBE";break;case Aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ax(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ar:e="ENVMAP_MODE_REFRACTION";break}return e}function Cx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wc:e="ENVMAP_BLENDING_MULTIPLY";break;case bp:e="ENVMAP_BLENDING_MIX";break;case Sp:e="ENVMAP_BLENDING_ADD";break}return e}function Rx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Px(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Ex(t),c=Tx(t),u=Ax(t),h=Cx(t),f=Rx(t),p=vx(t),g=xx(r),M=s.createProgram();let m,d,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Jr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Jr).join(`
`),d.length>0&&(d+=`
`)):(m=[Eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),d=[Eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ps?"#define TONE_MAPPING":"",t.toneMapping!==ps?Tt.tonemapping_pars_fragment:"",t.toneMapping!==ps?mx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,px("linearToOutputTexel",t.outputColorSpace),gx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jr).join(`
`)),o=vc(o),o=bh(o,t),o=Sh(o,t),a=vc(a),a=bh(a,t),a=Sh(a,t),o=wh(o),a=wh(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=_+m+o,x=_+d+a,C=_h(s,s.VERTEX_SHADER,b),E=_h(s,s.FRAGMENT_SHADER,x);s.attachShader(M,C),s.attachShader(M,E),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function T(w){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(M).trim(),U=s.getShaderInfoLog(C).trim(),P=s.getShaderInfoLog(E).trim();let N=!0,B=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,C,E);else{const W=yh(s,C,"vertex"),V=yh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+I+`
`+W+`
`+V)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(U===""||P==="")&&(B=!1);B&&(w.diagnostics={runnable:N,programLog:I,vertexShader:{log:U,prefix:m},fragmentShader:{log:P,prefix:d}})}s.deleteShader(C),s.deleteShader(E),A=new ma(s,M),y=_x(s,M)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(M,ux)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hx++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=E,this}let Lx=0;class Dx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ix(e),t.set(e,n)),n}}class Ix{constructor(e){this.id=Lx++,this.code=e,this.usedTimes=0}}function Ux(i,e,t,n,s,r,o){const a=new tu,l=new Dx,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,v,w,I,U){const P=I.fog,N=U.geometry,B=y.isMeshStandardMaterial?I.environment:null,W=(y.isMeshStandardMaterial?t:e).get(y.envMap||B),V=W&&W.mapping===Aa?W.image.height:null,j=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const Q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,se=Q!==void 0?Q.length:0;let Ee=0;N.morphAttributes.position!==void 0&&(Ee=1),N.morphAttributes.normal!==void 0&&(Ee=2),N.morphAttributes.color!==void 0&&(Ee=3);let Fe,H,Z,he;if(j){const At=Li[j];Fe=At.vertexShader,H=At.fragmentShader}else Fe=y.vertexShader,H=y.fragmentShader,l.update(y),Z=l.getVertexShaderID(y),he=l.getFragmentShaderID(y);const oe=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Le=U.isInstancedMesh===!0,Ue=U.isBatchedMesh===!0,qe=!!y.map,de=!!y.matcap,Me=!!W,O=!!y.aoMap,$e=!!y.lightMap,be=!!y.bumpMap,Oe=!!y.normalMap,Ie=!!y.displacementMap,nt=!!y.emissiveMap,$=!!y.metalnessMap,R=!!y.roughnessMap,S=y.anisotropy>0,X=y.clearcoat>0,ee=y.dispersion>0,ie=y.iridescence>0,re=y.sheen>0,ke=y.transmission>0,Se=S&&!!y.anisotropyMap,De=X&&!!y.clearcoatMap,ot=X&&!!y.clearcoatNormalMap,we=X&&!!y.clearcoatRoughnessMap,je=ie&&!!y.iridescenceMap,at=ie&&!!y.iridescenceThicknessMap,ut=re&&!!y.sheenColorMap,Ze=re&&!!y.sheenRoughnessMap,wt=!!y.specularMap,ht=!!y.specularColorMap,Et=!!y.specularIntensityMap,Y=ke&&!!y.transmissionMap,Ne=ke&&!!y.thicknessMap,le=!!y.gradientMap,_e=!!y.alphaMap,Ve=y.alphaTest>0,He=!!y.alphaHash,ft=!!y.extensions;let Bt=ps;y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Bt=i.toneMapping);const Vt={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:Fe,fragmentShader:H,defines:y.defines,customVertexShaderID:Z,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ue,batchingColor:Ue&&U._colorsTexture!==null,instancing:Le,instancingColor:Le&&U.instanceColor!==null,instancingMorph:Le&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:zr,alphaToCoverage:!!y.alphaToCoverage,map:qe,matcap:de,envMap:Me,envMapMode:Me&&W.mapping,envMapCubeUVHeight:V,aoMap:O,lightMap:$e,bumpMap:be,normalMap:Oe,displacementMap:f&&Ie,emissiveMap:nt,normalMapObjectSpace:Oe&&y.normalMapType===Cp,normalMapTangentSpace:Oe&&y.normalMapType===Jc,metalnessMap:$,roughnessMap:R,anisotropy:S,anisotropyMap:Se,clearcoat:X,clearcoatMap:De,clearcoatNormalMap:ot,clearcoatRoughnessMap:we,dispersion:ee,iridescence:ie,iridescenceMap:je,iridescenceThicknessMap:at,sheen:re,sheenColorMap:ut,sheenRoughnessMap:Ze,specularMap:wt,specularColorMap:ht,specularIntensityMap:Et,transmission:ke,transmissionMap:Y,thicknessMap:Ne,gradientMap:le,opaque:y.transparent===!1&&y.blending===ds&&y.alphaToCoverage===!1,alphaMap:_e,alphaTest:Ve,alphaHash:He,combine:y.combine,mapUv:qe&&M(y.map.channel),aoMapUv:O&&M(y.aoMap.channel),lightMapUv:$e&&M(y.lightMap.channel),bumpMapUv:be&&M(y.bumpMap.channel),normalMapUv:Oe&&M(y.normalMap.channel),displacementMapUv:Ie&&M(y.displacementMap.channel),emissiveMapUv:nt&&M(y.emissiveMap.channel),metalnessMapUv:$&&M(y.metalnessMap.channel),roughnessMapUv:R&&M(y.roughnessMap.channel),anisotropyMapUv:Se&&M(y.anisotropyMap.channel),clearcoatMapUv:De&&M(y.clearcoatMap.channel),clearcoatNormalMapUv:ot&&M(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&M(y.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&M(y.iridescenceMap.channel),iridescenceThicknessMapUv:at&&M(y.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&M(y.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&M(y.sheenRoughnessMap.channel),specularMapUv:wt&&M(y.specularMap.channel),specularColorMapUv:ht&&M(y.specularColorMap.channel),specularIntensityMapUv:Et&&M(y.specularIntensityMap.channel),transmissionMapUv:Y&&M(y.transmissionMap.channel),thicknessMapUv:Ne&&M(y.thicknessMap.channel),alphaMapUv:_e&&M(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Oe||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&(qe||_e),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:me,skinning:U.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ee,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:qe&&y.map.isVideoTexture===!0&&Ut.getTransfer(y.map.colorSpace)===Gt,decodeVideoTextureEmissive:nt&&y.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(y.emissiveMap.colorSpace)===Gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===cn,flipSided:y.side===Vn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ft&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&y.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function d(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const w in y.defines)v.push(w),v.push(y.defines[w]);return y.isRawShaderMaterial===!1&&(_(v,y),b(v,y),v.push(i.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function _(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function b(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const v=g[y.type];let w;if(v){const I=Li[v];w=_i.clone(I.uniforms)}else w=y.uniforms;return w}function C(y,v){let w;for(let I=0,U=u.length;I<U;I++){const P=u[I];if(P.cacheKey===v){w=P,++w.usedTimes;break}}return w===void 0&&(w=new Px(i,v,y,r),u.push(w)),w}function E(y){if(--y.usedTimes===0){const v=u.indexOf(y);u[v]=u[u.length-1],u.pop(),y.destroy()}}function T(y){l.remove(y)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:C,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:A}}function zx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Nx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Th(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ah(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,p,g,M,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:M,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=M,d.group=m),e++,d}function a(h,f,p,g,M,m){const d=o(h,f,p,g,M,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,g,M,m){const d=o(h,f,p,g,M,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||Nx),n.length>1&&n.sort(f||Th),s.length>1&&s.sort(f||Th)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function kx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ah,i.set(n,[o])):s>=r.length?(o=new Ah,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Fx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Pe};break;case"SpotLight":t={position:new G,direction:new G,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function Ox(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Bx=0;function Gx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vx(i){const e=new Fx,t=Ox(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const s=new G,r=new Nt,o=new Nt;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,M=0,m=0,d=0,_=0,b=0,x=0,C=0,E=0,T=0;c.sort(Gx);for(let y=0,v=c.length;y<v;y++){const w=c[y],I=w.color,U=w.intensity,P=w.distance,N=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=I.r*U,h+=I.g*U,f+=I.b*U;else if(w.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(w.sh.coefficients[B],U);T++}else if(w.isDirectionalLight){const B=e.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const W=w.shadow,V=t.get(w);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=N,n.directionalShadowMatrix[p]=w.shadow.matrix,_++}n.directional[p]=B,p++}else if(w.isSpotLight){const B=e.get(w);B.position.setFromMatrixPosition(w.matrixWorld),B.color.copy(I).multiplyScalar(U),B.distance=P,B.coneCos=Math.cos(w.angle),B.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),B.decay=w.decay,n.spot[M]=B;const W=w.shadow;if(w.map&&(n.spotLightMap[C]=w.map,C++,W.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[M]=W.matrix,w.castShadow){const V=t.get(w);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.spotShadow[M]=V,n.spotShadowMap[M]=N,x++}M++}else if(w.isRectAreaLight){const B=e.get(w);B.color.copy(I).multiplyScalar(U),B.halfWidth.set(w.width*.5,0,0),B.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=B,m++}else if(w.isPointLight){const B=e.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),B.distance=w.distance,B.decay=w.decay,w.castShadow){const W=w.shadow,V=t.get(w);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=w.shadow.matrix,b++}n.point[g]=B,g++}else if(w.isHemisphereLight){const B=e.get(w);B.skyColor.copy(w.color).multiplyScalar(U),B.groundColor.copy(w.groundColor).multiplyScalar(U),n.hemi[d]=B,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Xe.LTC_FLOAT_1,n.rectAreaLTC2=Xe.LTC_FLOAT_2):(n.rectAreaLTC1=Xe.LTC_HALF_1,n.rectAreaLTC2=Xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const A=n.hash;(A.directionalLength!==p||A.pointLength!==g||A.spotLength!==M||A.rectAreaLength!==m||A.hemiLength!==d||A.numDirectionalShadows!==_||A.numPointShadows!==b||A.numSpotShadows!==x||A.numSpotMaps!==C||A.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=M,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,A.directionalLength=p,A.pointLength=g,A.spotLength=M,A.rectAreaLength=m,A.hemiLength=d,A.numDirectionalShadows=_,A.numPointShadows=b,A.numSpotShadows=x,A.numSpotMaps=C,A.numLightProbes=T,n.version=Bx++)}function l(c,u){let h=0,f=0,p=0,g=0,M=0;const m=u.matrixWorldInverse;for(let d=0,_=c.length;d<_;d++){const b=c[d];if(b.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(b.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const x=n.hemi[M];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:n}}function Ch(i){const e=new Vx(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Hx(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ch(i),e.set(s,[a])):r>=o.length?(a=new Ch(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Wx extends Xs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xx extends Xs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yx=`uniform sampler2D shadow_pass;
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
}`;function $x(i,e,t){let n=new nu;const s=new Ae,r=new Ae,o=new Wt,a=new Wx({depthPacking:Ap}),l=new Xx,c={},u=t.maxTextureSize,h={[gs]:Vn,[Vn]:gs,[cn]:cn},f=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:qx,fragmentShader:Yx}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ot;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new lt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sf;let d=this.type;this.render=function(E,T,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const y=i.getRenderTarget(),v=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Sn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=d!==$i&&this.type===$i,P=d===$i&&this.type!==$i;for(let N=0,B=E.length;N<B;N++){const W=E[N],V=W.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const j=V.getFrameExtents();if(s.multiply(j),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,V.mapSize.y=r.y)),V.map===null||U===!0||P===!0){const se=this.type!==$i?{minFilter:Tn,magFilter:Tn}:{};V.map!==null&&V.map.dispose(),V.map=new Xn(s.x,s.y,se),V.map.texture.name=W.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const Q=V.getViewportCount();for(let se=0;se<Q;se++){const Ee=V.getViewport(se);o.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),I.viewport(o),V.updateMatrices(W,se),n=V.getFrustum(),x(T,A,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===$i&&_(V,A),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(y,v,w)};function _(E,T){const A=e.update(M);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Xn(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,A,f,M,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,A,p,M,null)}function b(E,T,A,y){let v=null;const w=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)v=w;else if(v=A.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=v.uuid,U=T.uuid;let P=c[I];P===void 0&&(P={},c[I]=P);let N=P[U];N===void 0&&(N=v.clone(),P[U]=N,T.addEventListener("dispose",C)),v=N}if(v.visible=T.visible,v.wireframe=T.wireframe,y===$i?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:h[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,A.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const I=i.properties.get(v);I.light=A}return v}function x(E,T,A,y,v){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===$i)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const U=e.update(E),P=E.material;if(Array.isArray(P)){const N=U.groups;for(let B=0,W=N.length;B<W;B++){const V=N[B],j=P[V.materialIndex];if(j&&j.visible){const Q=b(E,j,y,v);E.onBeforeShadow(i,E,T,A,U,Q,V),i.renderBufferDirect(A,null,U,Q,E,V),E.onAfterShadow(i,E,T,A,U,Q,V)}}}else if(P.visible){const N=b(E,P,y,v);E.onBeforeShadow(i,E,T,A,U,N,null),i.renderBufferDirect(A,null,U,N,E,null),E.onAfterShadow(i,E,T,A,U,N,null)}}const I=E.children;for(let U=0,P=I.length;U<P;U++)x(I[U],T,A,y,v)}function C(E){E.target.removeEventListener("dispose",C);for(const A in c){const y=c[A],v=E.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const jx={[zl]:Nl,[kl]:Bl,[Fl]:Gl,[Er]:Ol,[Nl]:zl,[Bl]:kl,[Gl]:Fl,[Ol]:Er};function Kx(i,e){function t(){let Y=!1;const Ne=new Wt;let le=null;const _e=new Wt(0,0,0,0);return{setMask:function(Ve){le!==Ve&&!Y&&(i.colorMask(Ve,Ve,Ve,Ve),le=Ve)},setLocked:function(Ve){Y=Ve},setClear:function(Ve,He,ft,Bt,Vt){Vt===!0&&(Ve*=Bt,He*=Bt,ft*=Bt),Ne.set(Ve,He,ft,Bt),_e.equals(Ne)===!1&&(i.clearColor(Ve,He,ft,Bt),_e.copy(Ne))},reset:function(){Y=!1,le=null,_e.set(-1,0,0,0)}}}function n(){let Y=!1,Ne=!1,le=null,_e=null,Ve=null;return{setReversed:function(He){if(Ne!==He){const ft=e.get("EXT_clip_control");Ne?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT);const Bt=Ve;Ve=null,this.setClear(Bt)}Ne=He},getReversed:function(){return Ne},setTest:function(He){He?oe(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(He){le!==He&&!Y&&(i.depthMask(He),le=He)},setFunc:function(He){if(Ne&&(He=jx[He]),_e!==He){switch(He){case zl:i.depthFunc(i.NEVER);break;case Nl:i.depthFunc(i.ALWAYS);break;case kl:i.depthFunc(i.LESS);break;case Er:i.depthFunc(i.LEQUAL);break;case Fl:i.depthFunc(i.EQUAL);break;case Ol:i.depthFunc(i.GEQUAL);break;case Bl:i.depthFunc(i.GREATER);break;case Gl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=He}},setLocked:function(He){Y=He},setClear:function(He){Ve!==He&&(Ne&&(He=1-He),i.clearDepth(He),Ve=He)},reset:function(){Y=!1,le=null,_e=null,Ve=null,Ne=!1}}}function s(){let Y=!1,Ne=null,le=null,_e=null,Ve=null,He=null,ft=null,Bt=null,Vt=null;return{setTest:function(At){Y||(At?oe(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(At){Ne!==At&&!Y&&(i.stencilMask(At),Ne=At)},setFunc:function(At,Cn,bn){(le!==At||_e!==Cn||Ve!==bn)&&(i.stencilFunc(At,Cn,bn),le=At,_e=Cn,Ve=bn)},setOp:function(At,Cn,bn){(He!==At||ft!==Cn||Bt!==bn)&&(i.stencilOp(At,Cn,bn),He=At,ft=Cn,Bt=bn)},setLocked:function(At){Y=At},setClear:function(At){Vt!==At&&(i.clearStencil(At),Vt=At)},reset:function(){Y=!1,Ne=null,le=null,_e=null,Ve=null,He=null,ft=null,Bt=null,Vt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,M=!1,m=null,d=null,_=null,b=null,x=null,C=null,E=null,T=new Pe(0,0,0),A=0,y=!1,v=null,w=null,I=null,U=null,P=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,W=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(V)[1]),B=W>=1):V.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),B=W>=2);let j=null,Q={};const se=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),Fe=new Wt().fromArray(se),H=new Wt().fromArray(Ee);function Z(Y,Ne,le,_e){const Ve=new Uint8Array(4),He=i.createTexture();i.bindTexture(Y,He),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<le;ft++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(Ne,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,Ve):i.texImage2D(Ne+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ve);return He}const he={};he[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(Er),be(!1),Oe(Lu),oe(i.CULL_FACE),O(Sn);function oe(Y){u[Y]!==!0&&(i.enable(Y),u[Y]=!0)}function me(Y){u[Y]!==!1&&(i.disable(Y),u[Y]=!1)}function Le(Y,Ne){return h[Y]!==Ne?(i.bindFramebuffer(Y,Ne),h[Y]=Ne,Y===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ne),Y===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ue(Y,Ne){let le=p,_e=!1;if(Y){le=f.get(Ne),le===void 0&&(le=[],f.set(Ne,le));const Ve=Y.textures;if(le.length!==Ve.length||le[0]!==i.COLOR_ATTACHMENT0){for(let He=0,ft=Ve.length;He<ft;He++)le[He]=i.COLOR_ATTACHMENT0+He;le.length=Ve.length,_e=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,_e=!0);_e&&i.drawBuffers(le)}function qe(Y){return g!==Y?(i.useProgram(Y),g=Y,!0):!1}const de={[vi]:i.FUNC_ADD,[lp]:i.FUNC_SUBTRACT,[cp]:i.FUNC_REVERSE_SUBTRACT};de[up]=i.MIN,de[hp]=i.MAX;const Me={[Kr]:i.ZERO,[fp]:i.ONE,[dp]:i.SRC_COLOR,[Ll]:i.SRC_ALPHA,[vp]:i.SRC_ALPHA_SATURATE,[Ul]:i.DST_COLOR,[Il]:i.DST_ALPHA,[pp]:i.ONE_MINUS_SRC_COLOR,[Dl]:i.ONE_MINUS_SRC_ALPHA,[gp]:i.ONE_MINUS_DST_COLOR,[mp]:i.ONE_MINUS_DST_ALPHA,[xp]:i.CONSTANT_COLOR,[_p]:i.ONE_MINUS_CONSTANT_COLOR,[Mp]:i.CONSTANT_ALPHA,[yp]:i.ONE_MINUS_CONSTANT_ALPHA};function O(Y,Ne,le,_e,Ve,He,ft,Bt,Vt,At){if(Y===Sn){M===!0&&(me(i.BLEND),M=!1);return}if(M===!1&&(oe(i.BLEND),M=!0),Y!==Ef){if(Y!==m||At!==y){if((d!==vi||x!==vi)&&(i.blendEquation(i.FUNC_ADD),d=vi,x=vi),At)switch(Y){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ti:i.blendFunc(i.ONE,i.ONE);break;case Du:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Iu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ti:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Du:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Iu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}_=null,b=null,C=null,E=null,T.set(0,0,0),A=0,m=Y,y=At}return}Ve=Ve||Ne,He=He||le,ft=ft||_e,(Ne!==d||Ve!==x)&&(i.blendEquationSeparate(de[Ne],de[Ve]),d=Ne,x=Ve),(le!==_||_e!==b||He!==C||ft!==E)&&(i.blendFuncSeparate(Me[le],Me[_e],Me[He],Me[ft]),_=le,b=_e,C=He,E=ft),(Bt.equals(T)===!1||Vt!==A)&&(i.blendColor(Bt.r,Bt.g,Bt.b,Vt),T.copy(Bt),A=Vt),m=Y,y=!1}function $e(Y,Ne){Y.side===cn?me(i.CULL_FACE):oe(i.CULL_FACE);let le=Y.side===Vn;Ne&&(le=!le),be(le),Y.blending===ds&&Y.transparent===!1?O(Sn):O(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);const _e=Y.stencilWrite;a.setTest(_e),_e&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),nt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function be(Y){v!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),v=Y)}function Oe(Y){Y!==op?(oe(i.CULL_FACE),Y!==w&&(Y===Lu?i.cullFace(i.BACK):Y===ap?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),w=Y}function Ie(Y){Y!==I&&(B&&i.lineWidth(Y),I=Y)}function nt(Y,Ne,le){Y?(oe(i.POLYGON_OFFSET_FILL),(U!==Ne||P!==le)&&(i.polygonOffset(Ne,le),U=Ne,P=le)):me(i.POLYGON_OFFSET_FILL)}function $(Y){Y?oe(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function R(Y){Y===void 0&&(Y=i.TEXTURE0+N-1),j!==Y&&(i.activeTexture(Y),j=Y)}function S(Y,Ne,le){le===void 0&&(j===null?le=i.TEXTURE0+N-1:le=j);let _e=Q[le];_e===void 0&&(_e={type:void 0,texture:void 0},Q[le]=_e),(_e.type!==Y||_e.texture!==Ne)&&(j!==le&&(i.activeTexture(le),j=le),i.bindTexture(Y,Ne||he[Y]),_e.type=Y,_e.texture=Ne)}function X(){const Y=Q[j];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ke(){try{i.texSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function De(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ot(){try{i.texStorage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function we(){try{i.texStorage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function je(){try{i.texImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function at(){try{i.texImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ut(Y){Fe.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),Fe.copy(Y))}function Ze(Y){H.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),H.copy(Y))}function wt(Y,Ne){let le=c.get(Ne);le===void 0&&(le=new WeakMap,c.set(Ne,le));let _e=le.get(Y);_e===void 0&&(_e=i.getUniformBlockIndex(Ne,Y.name),le.set(Y,_e))}function ht(Y,Ne){const _e=c.get(Ne).get(Y);l.get(Ne)!==_e&&(i.uniformBlockBinding(Ne,_e,Y.__bindingPointIndex),l.set(Ne,_e))}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},j=null,Q={},h={},f=new WeakMap,p=[],g=null,M=!1,m=null,d=null,_=null,b=null,x=null,C=null,E=null,T=new Pe(0,0,0),A=0,y=!1,v=null,w=null,I=null,U=null,P=null,Fe.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:me,bindFramebuffer:Le,drawBuffers:Ue,useProgram:qe,setBlending:O,setMaterial:$e,setFlipSided:be,setCullFace:Oe,setLineWidth:Ie,setPolygonOffset:nt,setScissorTest:$,activeTexture:R,bindTexture:S,unbindTexture:X,compressedTexImage2D:ee,compressedTexImage3D:ie,texImage2D:je,texImage3D:at,updateUBOMapping:wt,uniformBlockBinding:ht,texStorage2D:ot,texStorage3D:we,texSubImage2D:re,texSubImage3D:ke,compressedTexSubImage2D:Se,compressedTexSubImage3D:De,scissor:ut,viewport:Ze,reset:Et}}function Rh(i,e,t,n){const s=Zx(n);switch(t){case zf:return i*e;case kf:return i*e;case Ff:return i*e*2;case Ca:return i*e/s.components*s.byteLength;case jc:return i*e/s.components*s.byteLength;case Of:return i*e*2/s.components*s.byteLength;case Kc:return i*e*2/s.components*s.byteLength;case Nf:return i*e*3/s.components*s.byteLength;case ri:return i*e*4/s.components*s.byteLength;case Zc:return i*e*4/s.components*s.byteLength;case ua:case ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fa:case da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ql:case $l:return Math.max(i,16)*Math.max(e,8)/4;case Xl:case Yl:return Math.max(i,8)*Math.max(e,8)/2;case jl:case Kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ec:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ic:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case lc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case pa:case fc:case dc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Bf:case pc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case mc:case gc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zx(i){switch(i){case Ni:case Df:return{byteLength:1,components:1};case co:case If:case oi:return{byteLength:2,components:1};case Yc:case $c:return{byteLength:2,components:4};case ks:case qc:case bi:return{byteLength:4,components:1};case Uf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Jx(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return p?new OffscreenCanvas(R,S):ya("canvas")}function M(R,S,X){let ee=1;const ie=$(R);if((ie.width>X||ie.height>X)&&(ee=X/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const re=Math.floor(ee*ie.width),ke=Math.floor(ee*ie.height);h===void 0&&(h=g(re,ke));const Se=S?g(re,ke):h;return Se.width=re,Se.height=ke,Se.getContext("2d").drawImage(R,0,0,re,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+re+"x"+ke+")."),Se}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){i.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(R,S,X,ee,ie=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let re=S;if(S===i.RED&&(X===i.FLOAT&&(re=i.R32F),X===i.HALF_FLOAT&&(re=i.R16F),X===i.UNSIGNED_BYTE&&(re=i.R8)),S===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.R8UI),X===i.UNSIGNED_SHORT&&(re=i.R16UI),X===i.UNSIGNED_INT&&(re=i.R32UI),X===i.BYTE&&(re=i.R8I),X===i.SHORT&&(re=i.R16I),X===i.INT&&(re=i.R32I)),S===i.RG&&(X===i.FLOAT&&(re=i.RG32F),X===i.HALF_FLOAT&&(re=i.RG16F),X===i.UNSIGNED_BYTE&&(re=i.RG8)),S===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.RG8UI),X===i.UNSIGNED_SHORT&&(re=i.RG16UI),X===i.UNSIGNED_INT&&(re=i.RG32UI),X===i.BYTE&&(re=i.RG8I),X===i.SHORT&&(re=i.RG16I),X===i.INT&&(re=i.RG32I)),S===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.RGB8UI),X===i.UNSIGNED_SHORT&&(re=i.RGB16UI),X===i.UNSIGNED_INT&&(re=i.RGB32UI),X===i.BYTE&&(re=i.RGB8I),X===i.SHORT&&(re=i.RGB16I),X===i.INT&&(re=i.RGB32I)),S===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),X===i.UNSIGNED_INT&&(re=i.RGBA32UI),X===i.BYTE&&(re=i.RGBA8I),X===i.SHORT&&(re=i.RGBA16I),X===i.INT&&(re=i.RGBA32I)),S===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),S===i.RGBA){const ke=ie?Ra:Ut.getTransfer(ee);X===i.FLOAT&&(re=i.RGBA32F),X===i.HALF_FLOAT&&(re=i.RGBA16F),X===i.UNSIGNED_BYTE&&(re=ke===Gt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function x(R,S){let X;return R?S===null||S===ks||S===Fs?X=i.DEPTH24_STENCIL8:S===bi?X=i.DEPTH32F_STENCIL8:S===co&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ks||S===Fs?X=i.DEPTH_COMPONENT24:S===bi?X=i.DEPTH_COMPONENT32F:S===co&&(X=i.DEPTH_COMPONENT16),X}function C(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Tn&&R.minFilter!==Ii?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function E(R){const S=R.target;S.removeEventListener("dispose",E),A(S),S.isVideoTexture&&u.delete(S)}function T(R){const S=R.target;S.removeEventListener("dispose",T),v(S)}function A(R){const S=n.get(R);if(S.__webglInit===void 0)return;const X=R.source,ee=f.get(X);if(ee){const ie=ee[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&y(R),Object.keys(ee).length===0&&f.delete(X)}n.remove(R)}function y(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const X=R.source,ee=f.get(X);delete ee[S.__cacheKey],o.memory.textures--}function v(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(S.__webglFramebuffer[ee]))for(let ie=0;ie<S.__webglFramebuffer[ee].length;ie++)i.deleteFramebuffer(S.__webglFramebuffer[ee][ie]);else i.deleteFramebuffer(S.__webglFramebuffer[ee]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ee])}else{if(Array.isArray(S.__webglFramebuffer))for(let ee=0;ee<S.__webglFramebuffer.length;ee++)i.deleteFramebuffer(S.__webglFramebuffer[ee]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ee=0;ee<S.__webglColorRenderbuffer.length;ee++)S.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ee]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const X=R.textures;for(let ee=0,ie=X.length;ee<ie;ee++){const re=n.get(X[ee]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),n.remove(X[ee])}n.remove(R)}let w=0;function I(){w=0}function U(){const R=w;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),w+=1,R}function P(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function N(R,S){const X=n.get(R);if(R.isVideoTexture&&Ie(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(X,R,S);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+S)}function B(R,S){const X=n.get(R);if(R.version>0&&X.__version!==R.version){H(X,R,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+S)}function W(R,S){const X=n.get(R);if(R.version>0&&X.__version!==R.version){H(X,R,S);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+S)}function V(R,S){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Z(X,R,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+S)}const j={[zi]:i.REPEAT,[Rs]:i.CLAMP_TO_EDGE,[Wl]:i.MIRRORED_REPEAT},Q={[Tn]:i.NEAREST,[Ep]:i.NEAREST_MIPMAP_NEAREST,[Ao]:i.NEAREST_MIPMAP_LINEAR,[Ii]:i.LINEAR,[Va]:i.LINEAR_MIPMAP_NEAREST,[Ps]:i.LINEAR_MIPMAP_LINEAR},se={[Rp]:i.NEVER,[zp]:i.ALWAYS,[Pp]:i.LESS,[Gf]:i.LEQUAL,[Lp]:i.EQUAL,[Up]:i.GEQUAL,[Dp]:i.GREATER,[Ip]:i.NOTEQUAL};function Ee(R,S){if(S.type===bi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ii||S.magFilter===Va||S.magFilter===Ao||S.magFilter===Ps||S.minFilter===Ii||S.minFilter===Va||S.minFilter===Ao||S.minFilter===Ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,j[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,j[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,j[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Q[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Q[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Tn||S.minFilter!==Ao&&S.minFilter!==Ps||S.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Fe(R,S){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",E));const ee=S.source;let ie=f.get(ee);ie===void 0&&(ie={},f.set(ee,ie));const re=P(S);if(re!==R.__cacheKey){ie[re]===void 0&&(ie[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ie[re].usedTimes++;const ke=ie[R.__cacheKey];ke!==void 0&&(ie[R.__cacheKey].usedTimes--,ke.usedTimes===0&&y(S)),R.__cacheKey=re,R.__webglTexture=ie[re].texture}return X}function H(R,S,X){let ee=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ee=i.TEXTURE_3D);const ie=Fe(R,S),re=S.source;t.bindTexture(ee,R.__webglTexture,i.TEXTURE0+X);const ke=n.get(re);if(re.version!==ke.__version||ie===!0){t.activeTexture(i.TEXTURE0+X);const Se=Ut.getPrimaries(Ut.workingColorSpace),De=S.colorSpace===us?null:Ut.getPrimaries(S.colorSpace),ot=S.colorSpace===us||Se===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let we=M(S.image,!1,s.maxTextureSize);we=nt(S,we);const je=r.convert(S.format,S.colorSpace),at=r.convert(S.type);let ut=b(S.internalFormat,je,at,S.colorSpace,S.isVideoTexture);Ee(ee,S);let Ze;const wt=S.mipmaps,ht=S.isVideoTexture!==!0,Et=ke.__version===void 0||ie===!0,Y=re.dataReady,Ne=C(S,we);if(S.isDepthTexture)ut=x(S.format===Os,S.type),Et&&(ht?t.texStorage2D(i.TEXTURE_2D,1,ut,we.width,we.height):t.texImage2D(i.TEXTURE_2D,0,ut,we.width,we.height,0,je,at,null));else if(S.isDataTexture)if(wt.length>0){ht&&Et&&t.texStorage2D(i.TEXTURE_2D,Ne,ut,wt[0].width,wt[0].height);for(let le=0,_e=wt.length;le<_e;le++)Ze=wt[le],ht?Y&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Ze.width,Ze.height,je,at,Ze.data):t.texImage2D(i.TEXTURE_2D,le,ut,Ze.width,Ze.height,0,je,at,Ze.data);S.generateMipmaps=!1}else ht?(Et&&t.texStorage2D(i.TEXTURE_2D,Ne,ut,we.width,we.height),Y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we.width,we.height,je,at,we.data)):t.texImage2D(i.TEXTURE_2D,0,ut,we.width,we.height,0,je,at,we.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ht&&Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,ut,wt[0].width,wt[0].height,we.depth);for(let le=0,_e=wt.length;le<_e;le++)if(Ze=wt[le],S.format!==ri)if(je!==null)if(ht){if(Y)if(S.layerUpdates.size>0){const Ve=Rh(Ze.width,Ze.height,S.format,S.type);for(const He of S.layerUpdates){const ft=Ze.data.subarray(He*Ve/Ze.data.BYTES_PER_ELEMENT,(He+1)*Ve/Ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,He,Ze.width,Ze.height,1,je,ft)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Ze.width,Ze.height,we.depth,je,Ze.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,ut,Ze.width,Ze.height,we.depth,0,Ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?Y&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Ze.width,Ze.height,we.depth,je,at,Ze.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,ut,Ze.width,Ze.height,we.depth,0,je,at,Ze.data)}else{ht&&Et&&t.texStorage2D(i.TEXTURE_2D,Ne,ut,wt[0].width,wt[0].height);for(let le=0,_e=wt.length;le<_e;le++)Ze=wt[le],S.format!==ri?je!==null?ht?Y&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,Ze.width,Ze.height,je,Ze.data):t.compressedTexImage2D(i.TEXTURE_2D,le,ut,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?Y&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Ze.width,Ze.height,je,at,Ze.data):t.texImage2D(i.TEXTURE_2D,le,ut,Ze.width,Ze.height,0,je,at,Ze.data)}else if(S.isDataArrayTexture)if(ht){if(Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,ut,we.width,we.height,we.depth),Y)if(S.layerUpdates.size>0){const le=Rh(we.width,we.height,S.format,S.type);for(const _e of S.layerUpdates){const Ve=we.data.subarray(_e*le/we.data.BYTES_PER_ELEMENT,(_e+1)*le/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,we.width,we.height,1,je,at,Ve)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,je,at,we.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,we.width,we.height,we.depth,0,je,at,we.data);else if(S.isData3DTexture)ht?(Et&&t.texStorage3D(i.TEXTURE_3D,Ne,ut,we.width,we.height,we.depth),Y&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,je,at,we.data)):t.texImage3D(i.TEXTURE_3D,0,ut,we.width,we.height,we.depth,0,je,at,we.data);else if(S.isFramebufferTexture){if(Et)if(ht)t.texStorage2D(i.TEXTURE_2D,Ne,ut,we.width,we.height);else{let le=we.width,_e=we.height;for(let Ve=0;Ve<Ne;Ve++)t.texImage2D(i.TEXTURE_2D,Ve,ut,le,_e,0,je,at,null),le>>=1,_e>>=1}}else if(wt.length>0){if(ht&&Et){const le=$(wt[0]);t.texStorage2D(i.TEXTURE_2D,Ne,ut,le.width,le.height)}for(let le=0,_e=wt.length;le<_e;le++)Ze=wt[le],ht?Y&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,je,at,Ze):t.texImage2D(i.TEXTURE_2D,le,ut,je,at,Ze);S.generateMipmaps=!1}else if(ht){if(Et){const le=$(we);t.texStorage2D(i.TEXTURE_2D,Ne,ut,le.width,le.height)}Y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,je,at,we)}else t.texImage2D(i.TEXTURE_2D,0,ut,je,at,we);m(S)&&d(ee),ke.__version=re.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Z(R,S,X){if(S.image.length!==6)return;const ee=Fe(R,S),ie=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+X);const re=n.get(ie);if(ie.version!==re.__version||ee===!0){t.activeTexture(i.TEXTURE0+X);const ke=Ut.getPrimaries(Ut.workingColorSpace),Se=S.colorSpace===us?null:Ut.getPrimaries(S.colorSpace),De=S.colorSpace===us||ke===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const ot=S.isCompressedTexture||S.image[0].isCompressedTexture,we=S.image[0]&&S.image[0].isDataTexture,je=[];for(let _e=0;_e<6;_e++)!ot&&!we?je[_e]=M(S.image[_e],!0,s.maxCubemapSize):je[_e]=we?S.image[_e].image:S.image[_e],je[_e]=nt(S,je[_e]);const at=je[0],ut=r.convert(S.format,S.colorSpace),Ze=r.convert(S.type),wt=b(S.internalFormat,ut,Ze,S.colorSpace),ht=S.isVideoTexture!==!0,Et=re.__version===void 0||ee===!0,Y=ie.dataReady;let Ne=C(S,at);Ee(i.TEXTURE_CUBE_MAP,S);let le;if(ot){ht&&Et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,wt,at.width,at.height);for(let _e=0;_e<6;_e++){le=je[_e].mipmaps;for(let Ve=0;Ve<le.length;Ve++){const He=le[Ve];S.format!==ri?ut!==null?ht?Y&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve,0,0,He.width,He.height,ut,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve,wt,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ht?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve,0,0,He.width,He.height,ut,Ze,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve,wt,He.width,He.height,0,ut,Ze,He.data)}}}else{if(le=S.mipmaps,ht&&Et){le.length>0&&Ne++;const _e=$(je[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,wt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(we){ht?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,je[_e].width,je[_e].height,ut,Ze,je[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,wt,je[_e].width,je[_e].height,0,ut,Ze,je[_e].data);for(let Ve=0;Ve<le.length;Ve++){const ft=le[Ve].image[_e].image;ht?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve+1,0,0,ft.width,ft.height,ut,Ze,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve+1,wt,ft.width,ft.height,0,ut,Ze,ft.data)}}else{ht?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ut,Ze,je[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,wt,ut,Ze,je[_e]);for(let Ve=0;Ve<le.length;Ve++){const He=le[Ve];ht?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve+1,0,0,ut,Ze,He.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve+1,wt,ut,Ze,He.image[_e])}}}m(S)&&d(i.TEXTURE_CUBE_MAP),re.__version=ie.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function he(R,S,X,ee,ie,re){const ke=r.convert(X.format,X.colorSpace),Se=r.convert(X.type),De=b(X.internalFormat,ke,Se,X.colorSpace),ot=n.get(S),we=n.get(X);if(we.__renderTarget=S,!ot.__hasExternalTextures){const je=Math.max(1,S.width>>re),at=Math.max(1,S.height>>re);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,re,De,je,at,S.depth,0,ke,Se,null):t.texImage2D(ie,re,De,je,at,0,ke,Se,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Oe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,ie,we.__webglTexture,0,be(S)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,ie,we.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(R,S,X){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const ee=S.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,re=x(S.stencilBuffer,ie),ke=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=be(S);Oe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,re,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,re,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,re,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ke,i.RENDERBUFFER,R)}else{const ee=S.textures;for(let ie=0;ie<ee.length;ie++){const re=ee[ie],ke=r.convert(re.format,re.colorSpace),Se=r.convert(re.type),De=b(re.internalFormat,ke,Se,re.colorSpace),ot=be(S);X&&Oe(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,De,S.width,S.height):Oe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,De,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,De,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(S.depthTexture);ee.__renderTarget=S,(!ee.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);const ie=ee.__webglTexture,re=be(S);if(S.depthTexture.format===vr)Oe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(S.depthTexture.format===Os)Oe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Le(R){const S=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const ee=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ee){const ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=ee}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");me(S.__webglFramebuffer,R)}else if(X){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]===void 0)S.__webglDepthbuffer[ee]=i.createRenderbuffer(),oe(S.__webglDepthbuffer[ee],R,!1);else{const ie=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,re)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),oe(S.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ie)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(R,S,X){const ee=n.get(R);S!==void 0&&he(ee.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Le(R)}function qe(R){const S=R.texture,X=n.get(R),ee=n.get(S);R.addEventListener("dispose",T);const ie=R.textures,re=R.isWebGLCubeRenderTarget===!0,ke=ie.length>1;if(ke||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=S.version,o.memory.textures++),re){X.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[Se]=[];for(let De=0;De<S.mipmaps.length;De++)X.__webglFramebuffer[Se][De]=i.createFramebuffer()}else X.__webglFramebuffer[Se]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let Se=0;Se<S.mipmaps.length;Se++)X.__webglFramebuffer[Se]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(ke)for(let Se=0,De=ie.length;Se<De;Se++){const ot=n.get(ie[Se]);ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Oe(R)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Se=0;Se<ie.length;Se++){const De=ie[Se];X.__webglColorRenderbuffer[Se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[Se]);const ot=r.convert(De.format,De.colorSpace),we=r.convert(De.type),je=b(De.internalFormat,ot,we,De.colorSpace,R.isXRRenderTarget===!0),at=be(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,at,je,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,X.__webglColorRenderbuffer[Se])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(X.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,S);for(let Se=0;Se<6;Se++)if(S.mipmaps&&S.mipmaps.length>0)for(let De=0;De<S.mipmaps.length;De++)he(X.__webglFramebuffer[Se][De],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De);else he(X.__webglFramebuffer[Se],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);m(S)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let Se=0,De=ie.length;Se<De;Se++){const ot=ie[Se],we=n.get(ot);t.bindTexture(i.TEXTURE_2D,we.__webglTexture),Ee(i.TEXTURE_2D,ot),he(X.__webglFramebuffer,R,ot,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,0),m(ot)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let Se=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Se=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,ee.__webglTexture),Ee(Se,S),S.mipmaps&&S.mipmaps.length>0)for(let De=0;De<S.mipmaps.length;De++)he(X.__webglFramebuffer[De],R,S,i.COLOR_ATTACHMENT0,Se,De);else he(X.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,Se,0);m(S)&&d(Se),t.unbindTexture()}R.depthBuffer&&Le(R)}function de(R){const S=R.textures;for(let X=0,ee=S.length;X<ee;X++){const ie=S[X];if(m(ie)){const re=_(R),ke=n.get(ie).__webglTexture;t.bindTexture(re,ke),d(re),t.unbindTexture()}}}const Me=[],O=[];function $e(R){if(R.samples>0){if(Oe(R)===!1){const S=R.textures,X=R.width,ee=R.height;let ie=i.COLOR_BUFFER_BIT;const re=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ke=n.get(R),Se=S.length>1;if(Se)for(let De=0;De<S.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let De=0;De<S.length;De++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),Se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ke.__webglColorRenderbuffer[De]);const ot=n.get(S[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,X,ee,0,0,X,ee,ie,i.NEAREST),l===!0&&(Me.length=0,O.length=0,Me.push(i.COLOR_ATTACHMENT0+De),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Me.push(re),O.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Se)for(let De=0;De<S.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,ke.__webglColorRenderbuffer[De]);const ot=n.get(S[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,ot,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function be(R){return Math.min(s.maxSamples,R.samples)}function Oe(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ie(R){const S=o.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function nt(R,S){const X=R.colorSpace,ee=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==zr&&X!==us&&(Ut.getTransfer(X)===Gt?(ee!==ri||ie!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}function $(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.setTexture2D=N,this.setTexture2DArray=B,this.setTexture3D=W,this.setTextureCube=V,this.rebindTextures=Ue,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Oe}function Qx(i,e){function t(n,s=us){let r;const o=Ut.getTransfer(s);if(n===Ni)return i.UNSIGNED_BYTE;if(n===Yc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$c)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Df)return i.BYTE;if(n===If)return i.SHORT;if(n===co)return i.UNSIGNED_SHORT;if(n===qc)return i.INT;if(n===ks)return i.UNSIGNED_INT;if(n===bi)return i.FLOAT;if(n===oi)return i.HALF_FLOAT;if(n===zf)return i.ALPHA;if(n===Nf)return i.RGB;if(n===ri)return i.RGBA;if(n===kf)return i.LUMINANCE;if(n===Ff)return i.LUMINANCE_ALPHA;if(n===vr)return i.DEPTH_COMPONENT;if(n===Os)return i.DEPTH_STENCIL;if(n===Ca)return i.RED;if(n===jc)return i.RED_INTEGER;if(n===Of)return i.RG;if(n===Kc)return i.RG_INTEGER;if(n===Zc)return i.RGBA_INTEGER;if(n===ua||n===ha||n===fa||n===da)if(o===Gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xl||n===ql||n===Yl||n===$l)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$l)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jl||n===Kl||n===Zl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jl||n===Kl)return o===Gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zl)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===uc||n===hc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jl)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ql)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ec)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ic)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hc)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pa||n===fc||n===dc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===pa)return o===Gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bf||n===pc||n===mc||n===gc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===pa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class e1 extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bt extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t1={type:"move"};class ml{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,n),d=this._getHandJoint(c,M);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(t1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const n1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i1=`
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

}`;class s1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Un,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new sn({vertexShader:n1,fragmentShader:i1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r1 extends Nr{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const M=new s1,m=t.getContextAttributes();let d=null,_=null;const b=[],x=[],C=new Ae;let E=null;const T=new Zn;T.viewport=new Wt;const A=new Zn;A.viewport=new Wt;const y=[T,A],v=new e1;let w=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=b[H];return Z===void 0&&(Z=new ml,b[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=b[H];return Z===void 0&&(Z=new ml,b[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=b[H];return Z===void 0&&(Z=new ml,b[H]=Z),Z.getHandSpace()};function U(H){const Z=x.indexOf(H.inputSource);if(Z===-1)return;const he=b[Z];he!==void 0&&(he.update(H.inputSource,H.frame,c||o),he.dispatchEvent({type:H.type,data:H.inputSource}))}function P(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",N);for(let H=0;H<b.length;H++){const Z=x[H];Z!==null&&(x[H]=null,b[H].disconnect(Z))}w=null,I=null,M.reset(),e.setRenderTarget(d),p=null,f=null,h=null,s=null,_=null,Fe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",P),s.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Xn(p.framebufferWidth,p.framebufferHeight,{format:ri,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,he=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=m.stencil?Os:vr,he=m.stencil?Fs:ks);const me={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(me),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Xn(f.textureWidth,f.textureHeight,{format:ri,type:Ni,depthTexture:new ru(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Fe.setContext(s),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function N(H){for(let Z=0;Z<H.removed.length;Z++){const he=H.removed[Z],oe=x.indexOf(he);oe>=0&&(x[oe]=null,b[oe].disconnect(he))}for(let Z=0;Z<H.added.length;Z++){const he=H.added[Z];let oe=x.indexOf(he);if(oe===-1){for(let Le=0;Le<b.length;Le++)if(Le>=x.length){x.push(he),oe=Le;break}else if(x[Le]===null){x[Le]=he,oe=Le;break}if(oe===-1)break}const me=b[oe];me&&me.connect(he)}}const B=new G,W=new G;function V(H,Z,he){B.setFromMatrixPosition(Z.matrixWorld),W.setFromMatrixPosition(he.matrixWorld);const oe=B.distanceTo(W),me=Z.projectionMatrix.elements,Le=he.projectionMatrix.elements,Ue=me[14]/(me[10]-1),qe=me[14]/(me[10]+1),de=(me[9]+1)/me[5],Me=(me[9]-1)/me[5],O=(me[8]-1)/me[0],$e=(Le[8]+1)/Le[0],be=Ue*O,Oe=Ue*$e,Ie=oe/(-O+$e),nt=Ie*-O;if(Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(nt),H.translateZ(Ie),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),me[10]===-1)H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const $=Ue+Ie,R=qe+Ie,S=be-nt,X=Oe+(oe-nt),ee=de*qe/R*$,ie=Me*qe/R*$;H.projectionMatrix.makePerspective(S,X,ee,ie,$,R),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function j(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let Z=H.near,he=H.far;M.texture!==null&&(M.depthNear>0&&(Z=M.depthNear),M.depthFar>0&&(he=M.depthFar)),v.near=A.near=T.near=Z,v.far=A.far=T.far=he,(w!==v.near||I!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,I=v.far),T.layers.mask=H.layers.mask|2,A.layers.mask=H.layers.mask|4,v.layers.mask=T.layers.mask|A.layers.mask;const oe=H.parent,me=v.cameras;j(v,oe);for(let Le=0;Le<me.length;Le++)j(me[Le],oe);me.length===2?V(v,T,A):v.projectionMatrix.copy(T.projectionMatrix),Q(H,v,oe)};function Q(H,Z,he){he===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(he.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=uo*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(v)};let se=null;function Ee(H,Z){if(u=Z.getViewerPose(c||o),g=Z,u!==null){const he=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let oe=!1;he.length!==v.cameras.length&&(v.cameras.length=0,oe=!0);for(let Le=0;Le<he.length;Le++){const Ue=he[Le];let qe=null;if(p!==null)qe=p.getViewport(Ue);else{const Me=h.getViewSubImage(f,Ue);qe=Me.viewport,Le===0&&(e.setRenderTargetTextures(_,Me.colorTexture,f.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(_))}let de=y[Le];de===void 0&&(de=new Zn,de.layers.enable(Le),de.viewport=new Wt,y[Le]=de),de.matrix.fromArray(Ue.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(Ue.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(qe.x,qe.y,qe.width,qe.height),Le===0&&(v.matrix.copy(de.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),oe===!0&&v.cameras.push(de)}const me=s.enabledFeatures;if(me&&me.includes("depth-sensing")){const Le=h.getDepthInformation(he[0]);Le&&Le.isValid&&Le.texture&&M.init(e,Le,s.renderState)}}for(let he=0;he<b.length;he++){const oe=x[he],me=b[he];oe!==null&&me!==void 0&&me.update(oe,Z,c||o)}se&&se(H,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Fe=new Zf;Fe.setAnimationLoop(Ee),this.setAnimationLoop=function(H){se=H},this.dispose=function(){}}}const ws=new ki,o1=new Nt;function a1(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,$f(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,_,b,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),M(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,_,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Vn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Vn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d),b=_.envMap,x=_.envMapRotation;b&&(m.envMap.value=b,ws.copy(x),ws.x*=-1,ws.y*=-1,ws.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),m.envMapRotation.value.setFromMatrix4(o1.makeRotationFromEuler(ws)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=b*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Vn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function M(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function l1(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){const x=b.program;n.uniformBlockBinding(_,x)}function c(_,b){let x=s[_.id];x===void 0&&(g(_),x=u(_),s[_.id]=x,_.addEventListener("dispose",m));const C=b.program;n.updateUBOMapping(_,C);const E=e.render.frame;r[_.id]!==E&&(f(_),r[_.id]=E)}function u(_){const b=h();_.__bindingPointIndex=b;const x=i.createBuffer(),C=_.__size,E=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,C,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,x),x}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const b=s[_.id],x=_.uniforms,C=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let E=0,T=x.length;E<T;E++){const A=Array.isArray(x[E])?x[E]:[x[E]];for(let y=0,v=A.length;y<v;y++){const w=A[y];if(p(w,E,y,C)===!0){const I=w.__offset,U=Array.isArray(w.value)?w.value:[w.value];let P=0;for(let N=0;N<U.length;N++){const B=U[N],W=M(B);typeof B=="number"||typeof B=="boolean"?(w.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,I+P,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=0,w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=0,w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=0):(B.toArray(w.__data,P),P+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,b,x,C){const E=_.value,T=b+"_"+x;if(C[T]===void 0)return typeof E=="number"||typeof E=="boolean"?C[T]=E:C[T]=E.clone(),!0;{const A=C[T];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return C[T]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function g(_){const b=_.uniforms;let x=0;const C=16;for(let T=0,A=b.length;T<A;T++){const y=Array.isArray(b[T])?b[T]:[b[T]];for(let v=0,w=y.length;v<w;v++){const I=y[v],U=Array.isArray(I.value)?I.value:[I.value];for(let P=0,N=U.length;P<N;P++){const B=U[P],W=M(B),V=x%C,j=V%W.boundary,Q=V+j;x+=j,Q!==0&&C-Q<W.storage&&(x+=C-Q),I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=W.storage}}}const E=x%C;return E>0&&(x+=C-E),_.__size=x,_.__cache={},this}function M(_){const b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),b}function m(_){const b=_.target;b.removeEventListener("dispose",m);const x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(const _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class c1{constructor(e={}){const{canvas:t=Jp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),M=new Int32Array(4);let m=null,d=null;const _=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wn,this.toneMapping=ps,this.toneMappingExposure=1;const x=this;let C=!1,E=0,T=0,A=null,y=-1,v=null;const w=new Wt,I=new Wt;let U=null;const P=new Pe(0);let N=0,B=t.width,W=t.height,V=1,j=null,Q=null;const se=new Wt(0,0,B,W),Ee=new Wt(0,0,B,W);let Fe=!1;const H=new nu;let Z=!1,he=!1;const oe=new Nt,me=new Nt,Le=new G,Ue=new Wt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function Me(){return A===null?V:1}let O=n;function $e(L,J){return t.getContext(L,J)}try{const L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hc}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",He,!1),O===null){const J="webgl2";if(O=$e(J,L),O===null)throw $e(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let be,Oe,Ie,nt,$,R,S,X,ee,ie,re,ke,Se,De,ot,we,je,at,ut,Ze,wt,ht,Et,Y;function Ne(){be=new pv(O),be.init(),ht=new Qx(O,be),Oe=new lv(O,be,e,ht),Ie=new Kx(O,be),Oe.reverseDepthBuffer&&f&&Ie.buffers.depth.setReversed(!0),nt=new vv(O),$=new zx,R=new Jx(O,be,Ie,$,Oe,ht,nt),S=new uv(x),X=new dv(x),ee=new w0(O),Et=new ov(O,ee),ie=new mv(O,ee,nt,Et),re=new _v(O,ie,ee,nt),ut=new xv(O,Oe,R),we=new cv($),ke=new Ux(x,S,X,be,Oe,Et,we),Se=new a1(x,$),De=new kx,ot=new Hx(be),at=new rv(x,S,X,Ie,re,p,l),je=new $x(x,re,Oe),Y=new l1(O,nt,Oe,Ie),Ze=new av(O,be,nt),wt=new gv(O,be,nt),nt.programs=ke.programs,x.capabilities=Oe,x.extensions=be,x.properties=$,x.renderLists=De,x.shadowMap=je,x.state=Ie,x.info=nt}Ne();const le=new r1(x,O);this.xr=le,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const L=be.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=be.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(L){L!==void 0&&(V=L,this.setSize(B,W,!1))},this.getSize=function(L){return L.set(B,W)},this.setSize=function(L,J,ae=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=L,W=J,t.width=Math.floor(L*V),t.height=Math.floor(J*V),ae===!0&&(t.style.width=L+"px",t.style.height=J+"px"),this.setViewport(0,0,L,J)},this.getDrawingBufferSize=function(L){return L.set(B*V,W*V).floor()},this.setDrawingBufferSize=function(L,J,ae){B=L,W=J,V=ae,t.width=Math.floor(L*ae),t.height=Math.floor(J*ae),this.setViewport(0,0,L,J)},this.getCurrentViewport=function(L){return L.copy(w)},this.getViewport=function(L){return L.copy(se)},this.setViewport=function(L,J,ae,ce){L.isVector4?se.set(L.x,L.y,L.z,L.w):se.set(L,J,ae,ce),Ie.viewport(w.copy(se).multiplyScalar(V).round())},this.getScissor=function(L){return L.copy(Ee)},this.setScissor=function(L,J,ae,ce){L.isVector4?Ee.set(L.x,L.y,L.z,L.w):Ee.set(L,J,ae,ce),Ie.scissor(I.copy(Ee).multiplyScalar(V).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(L){Ie.setScissorTest(Fe=L)},this.setOpaqueSort=function(L){j=L},this.setTransparentSort=function(L){Q=L},this.getClearColor=function(L){return L.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(L=!0,J=!0,ae=!0){let ce=0;if(L){let K=!1;if(A!==null){const ze=A.texture.format;K=ze===Zc||ze===Kc||ze===jc}if(K){const ze=A.texture.type,Ke=ze===Ni||ze===ks||ze===co||ze===Fs||ze===Yc||ze===$c,it=at.getClearColor(),st=at.getClearAlpha(),vt=it.r,z=it.g,F=it.b;Ke?(g[0]=vt,g[1]=z,g[2]=F,g[3]=st,O.clearBufferuiv(O.COLOR,0,g)):(M[0]=vt,M[1]=z,M[2]=F,M[3]=st,O.clearBufferiv(O.COLOR,0,M))}else ce|=O.COLOR_BUFFER_BIT}J&&(ce|=O.DEPTH_BUFFER_BIT),ae&&(ce|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",He,!1),De.dispose(),ot.dispose(),$.dispose(),S.dispose(),X.dispose(),re.dispose(),Et.dispose(),Y.dispose(),ke.dispose(),le.dispose(),le.removeEventListener("sessionstart",li),le.removeEventListener("sessionend",k),xe.stop()};function _e(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ve(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const L=nt.autoReset,J=je.enabled,ae=je.autoUpdate,ce=je.needsUpdate,K=je.type;Ne(),nt.autoReset=L,je.enabled=J,je.autoUpdate=ae,je.needsUpdate=ce,je.type=K}function He(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ft(L){const J=L.target;J.removeEventListener("dispose",ft),Bt(J)}function Bt(L){Vt(L),$.remove(L)}function Vt(L){const J=$.get(L).programs;J!==void 0&&(J.forEach(function(ae){ke.releaseProgram(ae)}),L.isShaderMaterial&&ke.releaseShaderCache(L))}this.renderBufferDirect=function(L,J,ae,ce,K,ze){J===null&&(J=qe);const Ke=K.isMesh&&K.matrixWorld.determinant()<0,it=mn(L,J,ae,ce,K);Ie.setMaterial(ce,Ke);let st=ae.index,vt=1;if(ce.wireframe===!0){if(st=ie.getWireframeAttribute(ae),st===void 0)return;vt=2}const z=ae.drawRange,F=ae.attributes.position;let te=z.start*vt,pe=(z.start+z.count)*vt;ze!==null&&(te=Math.max(te,ze.start*vt),pe=Math.min(pe,(ze.start+ze.count)*vt)),st!==null?(te=Math.max(te,0),pe=Math.min(pe,st.count)):F!=null&&(te=Math.max(te,0),pe=Math.min(pe,F.count));const ye=pe-te;if(ye<0||ye===1/0)return;Et.setup(K,ce,it,ae,st);let Re,Te=Ze;if(st!==null&&(Re=ee.get(st),Te=wt,Te.setIndex(Re)),K.isMesh)ce.wireframe===!0?(Ie.setLineWidth(ce.wireframeLinewidth*Me()),Te.setMode(O.LINES)):Te.setMode(O.TRIANGLES);else if(K.isLine){let ne=ce.linewidth;ne===void 0&&(ne=1),Ie.setLineWidth(ne*Me()),K.isLineSegments?Te.setMode(O.LINES):K.isLineLoop?Te.setMode(O.LINE_LOOP):Te.setMode(O.LINE_STRIP)}else K.isPoints?Te.setMode(O.POINTS):K.isSprite&&Te.setMode(O.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Te.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))Te.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const ne=K._multiDrawStarts,Ye=K._multiDrawCounts,We=K._multiDrawCount,dt=st?ee.get(st).bytesPerElement:1,Pt=$.get(ce).currentProgram.getUniforms();for(let It=0;It<We;It++)Pt.setValue(O,"_gl_DrawID",It),Te.render(ne[It]/dt,Ye[It])}else if(K.isInstancedMesh)Te.renderInstances(te,ye,K.count);else if(ae.isInstancedBufferGeometry){const ne=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ye=Math.min(ae.instanceCount,ne);Te.renderInstances(te,ye,Ye)}else Te.render(te,ye)};function At(L,J,ae){L.transparent===!0&&L.side===cn&&L.forceSinglePass===!1?(L.side=Vn,L.needsUpdate=!0,rt(L,J,ae),L.side=gs,L.needsUpdate=!0,rt(L,J,ae),L.side=cn):rt(L,J,ae)}this.compile=function(L,J,ae=null){ae===null&&(ae=L),d=ot.get(ae),d.init(J),b.push(d),ae.traverseVisible(function(K){K.isLight&&K.layers.test(J.layers)&&(d.pushLight(K),K.castShadow&&d.pushShadow(K))}),L!==ae&&L.traverseVisible(function(K){K.isLight&&K.layers.test(J.layers)&&(d.pushLight(K),K.castShadow&&d.pushShadow(K))}),d.setupLights();const ce=new Set;return L.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const ze=K.material;if(ze)if(Array.isArray(ze))for(let Ke=0;Ke<ze.length;Ke++){const it=ze[Ke];At(it,ae,K),ce.add(it)}else At(ze,ae,K),ce.add(ze)}),b.pop(),d=null,ce},this.compileAsync=function(L,J,ae=null){const ce=this.compile(L,J,ae);return new Promise(K=>{function ze(){if(ce.forEach(function(Ke){$.get(Ke).currentProgram.isReady()&&ce.delete(Ke)}),ce.size===0){K(L);return}setTimeout(ze,10)}be.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let Cn=null;function bn(L){Cn&&Cn(L)}function li(){xe.stop()}function k(){xe.start()}const xe=new Zf;xe.setAnimationLoop(bn),typeof self<"u"&&xe.setContext(self),this.setAnimationLoop=function(L){Cn=L,le.setAnimationLoop(L),L===null?xe.stop():xe.start()},le.addEventListener("sessionstart",li),le.addEventListener("sessionend",k),this.render=function(L,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(J),J=le.getCamera()),L.isScene===!0&&L.onBeforeRender(x,L,J,A),d=ot.get(L,b.length),d.init(J),b.push(d),me.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),H.setFromProjectionMatrix(me),he=this.localClippingEnabled,Z=we.init(this.clippingPlanes,he),m=De.get(L,_.length),m.init(),_.push(m),le.enabled===!0&&le.isPresenting===!0){const ze=x.xr.getDepthSensingMesh();ze!==null&&ue(ze,J,-1/0,x.sortObjects)}ue(L,J,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(j,Q),de=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,de&&at.addToRenderList(m,L),this.info.render.frame++,Z===!0&&we.beginShadows();const ae=d.state.shadowsArray;je.render(ae,L,J),Z===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=m.opaque,K=m.transmissive;if(d.setupLights(),J.isArrayCamera){const ze=J.cameras;if(K.length>0)for(let Ke=0,it=ze.length;Ke<it;Ke++){const st=ze[Ke];tt(ce,K,L,st)}de&&at.render(L);for(let Ke=0,it=ze.length;Ke<it;Ke++){const st=ze[Ke];Je(m,L,st,st.viewport)}}else K.length>0&&tt(ce,K,L,J),de&&at.render(L),Je(m,L,J);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),L.isScene===!0&&L.onAfterRender(x,L,J),Et.resetDefaultState(),y=-1,v=null,b.pop(),b.length>0?(d=b[b.length-1],Z===!0&&we.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function ue(L,J,ae,ce){if(L.visible===!1)return;if(L.layers.test(J.layers)){if(L.isGroup)ae=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(J);else if(L.isLight)d.pushLight(L),L.castShadow&&d.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||H.intersectsSprite(L)){ce&&Ue.setFromMatrixPosition(L.matrixWorld).applyMatrix4(me);const Ke=re.update(L),it=L.material;it.visible&&m.push(L,Ke,it,ae,Ue.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||H.intersectsObject(L))){const Ke=re.update(L),it=L.material;if(ce&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ue.copy(L.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),Ue.copy(Ke.boundingSphere.center)),Ue.applyMatrix4(L.matrixWorld).applyMatrix4(me)),Array.isArray(it)){const st=Ke.groups;for(let vt=0,z=st.length;vt<z;vt++){const F=st[vt],te=it[F.materialIndex];te&&te.visible&&m.push(L,Ke,te,ae,Ue.z,F)}}else it.visible&&m.push(L,Ke,it,ae,Ue.z,null)}}const ze=L.children;for(let Ke=0,it=ze.length;Ke<it;Ke++)ue(ze[Ke],J,ae,ce)}function Je(L,J,ae,ce){const K=L.opaque,ze=L.transmissive,Ke=L.transparent;d.setupLightsView(ae),Z===!0&&we.setGlobalState(x.clippingPlanes,ae),ce&&Ie.viewport(w.copy(ce)),K.length>0&&Ce(K,J,ae),ze.length>0&&Ce(ze,J,ae),Ke.length>0&&Ce(Ke,J,ae),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function tt(L,J,ae,ce){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ce.id]===void 0&&(d.state.transmissionRenderTarget[ce.id]=new Xn(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?oi:Ni,minFilter:Ps,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const ze=d.state.transmissionRenderTarget[ce.id],Ke=ce.viewport||w;ze.setSize(Ke.z,Ke.w);const it=x.getRenderTarget();x.setRenderTarget(ze),x.getClearColor(P),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear(),de&&at.render(ae);const st=x.toneMapping;x.toneMapping=ps;const vt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),d.setupLightsView(ce),Z===!0&&we.setGlobalState(x.clippingPlanes,ce),Ce(L,ae,ce),R.updateMultisampleRenderTarget(ze),R.updateRenderTargetMipmap(ze),be.has("WEBGL_multisampled_render_to_texture")===!1){let z=!1;for(let F=0,te=J.length;F<te;F++){const pe=J[F],ye=pe.object,Re=pe.geometry,Te=pe.material,ne=pe.group;if(Te.side===cn&&ye.layers.test(ce.layers)){const Ye=Te.side;Te.side=Vn,Te.needsUpdate=!0,Qe(ye,ae,ce,Re,Te,ne),Te.side=Ye,Te.needsUpdate=!0,z=!0}}z===!0&&(R.updateMultisampleRenderTarget(ze),R.updateRenderTargetMipmap(ze))}x.setRenderTarget(it),x.setClearColor(P,N),vt!==void 0&&(ce.viewport=vt),x.toneMapping=st}function Ce(L,J,ae){const ce=J.isScene===!0?J.overrideMaterial:null;for(let K=0,ze=L.length;K<ze;K++){const Ke=L[K],it=Ke.object,st=Ke.geometry,vt=ce===null?Ke.material:ce,z=Ke.group;it.layers.test(ae.layers)&&Qe(it,J,ae,st,vt,z)}}function Qe(L,J,ae,ce,K,ze){L.onBeforeRender(x,J,ae,ce,K,ze),L.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),K.onBeforeRender(x,J,ae,ce,L,ze),K.transparent===!0&&K.side===cn&&K.forceSinglePass===!1?(K.side=Vn,K.needsUpdate=!0,x.renderBufferDirect(ae,J,ce,K,L,ze),K.side=gs,K.needsUpdate=!0,x.renderBufferDirect(ae,J,ce,K,L,ze),K.side=cn):x.renderBufferDirect(ae,J,ce,K,L,ze),L.onAfterRender(x,J,ae,ce,K,ze)}function rt(L,J,ae){J.isScene!==!0&&(J=qe);const ce=$.get(L),K=d.state.lights,ze=d.state.shadowsArray,Ke=K.state.version,it=ke.getParameters(L,K.state,ze,J,ae),st=ke.getProgramCacheKey(it);let vt=ce.programs;ce.environment=L.isMeshStandardMaterial?J.environment:null,ce.fog=J.fog,ce.envMap=(L.isMeshStandardMaterial?X:S).get(L.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&L.envMap===null?J.environmentRotation:L.envMapRotation,vt===void 0&&(L.addEventListener("dispose",ft),vt=new Map,ce.programs=vt);let z=vt.get(st);if(z!==void 0){if(ce.currentProgram===z&&ce.lightsStateVersion===Ke)return Ct(L,it),z}else it.uniforms=ke.getUniforms(L),L.onBeforeCompile(it,x),z=ke.acquireProgram(it,st),vt.set(st,z),ce.uniforms=it.uniforms;const F=ce.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(F.clippingPlanes=we.uniform),Ct(L,it),ce.needsLights=ci(L),ce.lightsStateVersion=Ke,ce.needsLights&&(F.ambientLightColor.value=K.state.ambient,F.lightProbe.value=K.state.probe,F.directionalLights.value=K.state.directional,F.directionalLightShadows.value=K.state.directionalShadow,F.spotLights.value=K.state.spot,F.spotLightShadows.value=K.state.spotShadow,F.rectAreaLights.value=K.state.rectArea,F.ltc_1.value=K.state.rectAreaLTC1,F.ltc_2.value=K.state.rectAreaLTC2,F.pointLights.value=K.state.point,F.pointLightShadows.value=K.state.pointShadow,F.hemisphereLights.value=K.state.hemi,F.directionalShadowMap.value=K.state.directionalShadowMap,F.directionalShadowMatrix.value=K.state.directionalShadowMatrix,F.spotShadowMap.value=K.state.spotShadowMap,F.spotLightMatrix.value=K.state.spotLightMatrix,F.spotLightMap.value=K.state.spotLightMap,F.pointShadowMap.value=K.state.pointShadowMap,F.pointShadowMatrix.value=K.state.pointShadowMatrix),ce.currentProgram=z,ce.uniformsList=null,z}function gt(L){if(L.uniformsList===null){const J=L.currentProgram.getUniforms();L.uniformsList=ma.seqWithValue(J.seq,L.uniforms)}return L.uniformsList}function Ct(L,J){const ae=$.get(L);ae.outputColorSpace=J.outputColorSpace,ae.batching=J.batching,ae.batchingColor=J.batchingColor,ae.instancing=J.instancing,ae.instancingColor=J.instancingColor,ae.instancingMorph=J.instancingMorph,ae.skinning=J.skinning,ae.morphTargets=J.morphTargets,ae.morphNormals=J.morphNormals,ae.morphColors=J.morphColors,ae.morphTargetsCount=J.morphTargetsCount,ae.numClippingPlanes=J.numClippingPlanes,ae.numIntersection=J.numClipIntersection,ae.vertexAlphas=J.vertexAlphas,ae.vertexTangents=J.vertexTangents,ae.toneMapping=J.toneMapping}function mn(L,J,ae,ce,K){J.isScene!==!0&&(J=qe),R.resetTextureUnits();const ze=J.fog,Ke=ce.isMeshStandardMaterial?J.environment:null,it=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:zr,st=(ce.isMeshStandardMaterial?X:S).get(ce.envMap||Ke),vt=ce.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,z=!!ae.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),F=!!ae.morphAttributes.position,te=!!ae.morphAttributes.normal,pe=!!ae.morphAttributes.color;let ye=ps;ce.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ye=x.toneMapping);const Re=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Te=Re!==void 0?Re.length:0,ne=$.get(ce),Ye=d.state.lights;if(Z===!0&&(he===!0||L!==v)){const Pn=L===v&&ce.id===y;we.setState(ce,L,Pn)}let We=!1;ce.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Ye.state.version||ne.outputColorSpace!==it||K.isBatchedMesh&&ne.batching===!1||!K.isBatchedMesh&&ne.batching===!0||K.isBatchedMesh&&ne.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ne.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ne.instancing===!1||!K.isInstancedMesh&&ne.instancing===!0||K.isSkinnedMesh&&ne.skinning===!1||!K.isSkinnedMesh&&ne.skinning===!0||K.isInstancedMesh&&ne.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ne.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ne.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ne.instancingMorph===!1&&K.morphTexture!==null||ne.envMap!==st||ce.fog===!0&&ne.fog!==ze||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==we.numPlanes||ne.numIntersection!==we.numIntersection)||ne.vertexAlphas!==vt||ne.vertexTangents!==z||ne.morphTargets!==F||ne.morphNormals!==te||ne.morphColors!==pe||ne.toneMapping!==ye||ne.morphTargetsCount!==Te)&&(We=!0):(We=!0,ne.__version=ce.version);let dt=ne.currentProgram;We===!0&&(dt=rt(ce,J,K));let Pt=!1,It=!1,Oi=!1;const Lt=dt.getUniforms(),Rn=ne.uniforms;if(Ie.useProgram(dt.program)&&(Pt=!0,It=!0,Oi=!0),ce.id!==y&&(y=ce.id,It=!0),Pt||v!==L){Ie.buffers.depth.getReversed()?(oe.copy(L.projectionMatrix),e0(oe),t0(oe),Lt.setValue(O,"projectionMatrix",oe)):Lt.setValue(O,"projectionMatrix",L.projectionMatrix),Lt.setValue(O,"viewMatrix",L.matrixWorldInverse);const qn=Lt.map.cameraPosition;qn!==void 0&&qn.setValue(O,Le.setFromMatrixPosition(L.matrixWorld)),Oe.logarithmicDepthBuffer&&Lt.setValue(O,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Lt.setValue(O,"isOrthographic",L.isOrthographicCamera===!0),v!==L&&(v=L,It=!0,Oi=!0)}if(K.isSkinnedMesh){Lt.setOptional(O,K,"bindMatrix"),Lt.setOptional(O,K,"bindMatrixInverse");const Pn=K.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),Lt.setValue(O,"boneTexture",Pn.boneTexture,R))}K.isBatchedMesh&&(Lt.setOptional(O,K,"batchingTexture"),Lt.setValue(O,"batchingTexture",K._matricesTexture,R),Lt.setOptional(O,K,"batchingIdTexture"),Lt.setValue(O,"batchingIdTexture",K._indirectTexture,R),Lt.setOptional(O,K,"batchingColorTexture"),K._colorsTexture!==null&&Lt.setValue(O,"batchingColorTexture",K._colorsTexture,R));const ui=ae.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&ut.update(K,ae,dt),(It||ne.receiveShadow!==K.receiveShadow)&&(ne.receiveShadow=K.receiveShadow,Lt.setValue(O,"receiveShadow",K.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(Rn.envMap.value=st,Rn.flipEnvMap.value=st.isCubeTexture&&st.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&J.environment!==null&&(Rn.envMapIntensity.value=J.environmentIntensity),It&&(Lt.setValue(O,"toneMappingExposure",x.toneMappingExposure),ne.needsLights&&ni(Rn,Oi),ze&&ce.fog===!0&&Se.refreshFogUniforms(Rn,ze),Se.refreshMaterialUniforms(Rn,ce,V,W,d.state.transmissionRenderTarget[L.id]),ma.upload(O,gt(ne),Rn,R)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(ma.upload(O,gt(ne),Rn,R),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Lt.setValue(O,"center",K.center),Lt.setValue(O,"modelViewMatrix",K.modelViewMatrix),Lt.setValue(O,"normalMatrix",K.normalMatrix),Lt.setValue(O,"modelMatrix",K.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const Pn=ce.uniformsGroups;for(let qn=0,Yn=Pn.length;qn<Yn;qn++){const ns=Pn[qn];Y.update(ns,dt),Y.bind(ns,dt)}}return dt}function ni(L,J){L.ambientLightColor.needsUpdate=J,L.lightProbe.needsUpdate=J,L.directionalLights.needsUpdate=J,L.directionalLightShadows.needsUpdate=J,L.pointLights.needsUpdate=J,L.pointLightShadows.needsUpdate=J,L.spotLights.needsUpdate=J,L.spotLightShadows.needsUpdate=J,L.rectAreaLights.needsUpdate=J,L.hemisphereLights.needsUpdate=J}function ci(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(L,J,ae){$.get(L.texture).__webglTexture=J,$.get(L.depthTexture).__webglTexture=ae;const ce=$.get(L);ce.__hasExternalTextures=!0,ce.__autoAllocateDepthBuffer=ae===void 0,ce.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,J){const ae=$.get(L);ae.__webglFramebuffer=J,ae.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(L,J=0,ae=0){A=L,E=J,T=ae;let ce=!0,K=null,ze=!1,Ke=!1;if(L){const st=$.get(L);if(st.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(O.FRAMEBUFFER,null),ce=!1;else if(st.__webglFramebuffer===void 0)R.setupRenderTarget(L);else if(st.__hasExternalTextures)R.rebindTextures(L,$.get(L.texture).__webglTexture,$.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const F=L.depthTexture;if(st.__boundDepthTexture!==F){if(F!==null&&$.has(F)&&(L.width!==F.image.width||L.height!==F.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(L)}}const vt=L.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(Ke=!0);const z=$.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(z[J])?K=z[J][ae]:K=z[J],ze=!0):L.samples>0&&R.useMultisampledRTT(L)===!1?K=$.get(L).__webglMultisampledFramebuffer:Array.isArray(z)?K=z[ae]:K=z,w.copy(L.viewport),I.copy(L.scissor),U=L.scissorTest}else w.copy(se).multiplyScalar(V).floor(),I.copy(Ee).multiplyScalar(V).floor(),U=Fe;if(Ie.bindFramebuffer(O.FRAMEBUFFER,K)&&ce&&Ie.drawBuffers(L,K),Ie.viewport(w),Ie.scissor(I),Ie.setScissorTest(U),ze){const st=$.get(L.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+J,st.__webglTexture,ae)}else if(Ke){const st=$.get(L.texture),vt=J||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,st.__webglTexture,ae||0,vt)}y=-1},this.readRenderTargetPixels=function(L,J,ae,ce,K,ze,Ke){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=$.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ke!==void 0&&(it=it[Ke]),it){Ie.bindFramebuffer(O.FRAMEBUFFER,it);try{const st=L.texture,vt=st.format,z=st.type;if(!Oe.textureFormatReadable(vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(z)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=L.width-ce&&ae>=0&&ae<=L.height-K&&O.readPixels(J,ae,ce,K,ht.convert(vt),ht.convert(z),ze)}finally{const st=A!==null?$.get(A).__webglFramebuffer:null;Ie.bindFramebuffer(O.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(L,J,ae,ce,K,ze,Ke){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let it=$.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ke!==void 0&&(it=it[Ke]),it){const st=L.texture,vt=st.format,z=st.type;if(!Oe.textureFormatReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(z))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=L.width-ce&&ae>=0&&ae<=L.height-K){Ie.bindFramebuffer(O.FRAMEBUFFER,it);const F=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,F),O.bufferData(O.PIXEL_PACK_BUFFER,ze.byteLength,O.STREAM_READ),O.readPixels(J,ae,ce,K,ht.convert(vt),ht.convert(z),0);const te=A!==null?$.get(A).__webglFramebuffer:null;Ie.bindFramebuffer(O.FRAMEBUFFER,te);const pe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Qp(O,pe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,F),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ze),O.deleteBuffer(F),O.deleteSync(pe),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,J=null,ae=0){L.isTexture!==!0&&(Zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,L=arguments[1]);const ce=Math.pow(2,-ae),K=Math.floor(L.image.width*ce),ze=Math.floor(L.image.height*ce),Ke=J!==null?J.x:0,it=J!==null?J.y:0;R.setTexture2D(L,0),O.copyTexSubImage2D(O.TEXTURE_2D,ae,0,0,Ke,it,K,ze),Ie.unbindTexture()},this.copyTextureToTexture=function(L,J,ae=null,ce=null,K=0){L.isTexture!==!0&&(Zr("WebGLRenderer: copyTextureToTexture function signature has changed."),ce=arguments[0]||null,L=arguments[1],J=arguments[2],K=arguments[3]||0,ae=null);let ze,Ke,it,st,vt,z,F,te,pe;const ye=L.isCompressedTexture?L.mipmaps[K]:L.image;ae!==null?(ze=ae.max.x-ae.min.x,Ke=ae.max.y-ae.min.y,it=ae.isBox3?ae.max.z-ae.min.z:1,st=ae.min.x,vt=ae.min.y,z=ae.isBox3?ae.min.z:0):(ze=ye.width,Ke=ye.height,it=ye.depth||1,st=0,vt=0,z=0),ce!==null?(F=ce.x,te=ce.y,pe=ce.z):(F=0,te=0,pe=0);const Re=ht.convert(J.format),Te=ht.convert(J.type);let ne;J.isData3DTexture?(R.setTexture3D(J,0),ne=O.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(R.setTexture2DArray(J,0),ne=O.TEXTURE_2D_ARRAY):(R.setTexture2D(J,0),ne=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,J.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,J.unpackAlignment);const Ye=O.getParameter(O.UNPACK_ROW_LENGTH),We=O.getParameter(O.UNPACK_IMAGE_HEIGHT),dt=O.getParameter(O.UNPACK_SKIP_PIXELS),Pt=O.getParameter(O.UNPACK_SKIP_ROWS),It=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ye.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ye.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,st),O.pixelStorei(O.UNPACK_SKIP_ROWS,vt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,z);const Oi=L.isDataArrayTexture||L.isData3DTexture,Lt=J.isDataArrayTexture||J.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){const Rn=$.get(L),ui=$.get(J),Pn=$.get(Rn.__renderTarget),qn=$.get(ui.__renderTarget);Ie.bindFramebuffer(O.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Yn=0;Yn<it;Yn++)Oi&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$.get(L).__webglTexture,K,z+Yn),L.isDepthTexture?(Lt&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$.get(J).__webglTexture,K,pe+Yn),O.blitFramebuffer(st,vt,ze,Ke,F,te,ze,Ke,O.DEPTH_BUFFER_BIT,O.NEAREST)):Lt?O.copyTexSubImage3D(ne,K,F,te,pe+Yn,st,vt,ze,Ke):O.copyTexSubImage2D(ne,K,F,te,pe+Yn,st,vt,ze,Ke);Ie.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Lt?L.isDataTexture||L.isData3DTexture?O.texSubImage3D(ne,K,F,te,pe,ze,Ke,it,Re,Te,ye.data):J.isCompressedArrayTexture?O.compressedTexSubImage3D(ne,K,F,te,pe,ze,Ke,it,Re,ye.data):O.texSubImage3D(ne,K,F,te,pe,ze,Ke,it,Re,Te,ye):L.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,K,F,te,ze,Ke,Re,Te,ye.data):L.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,K,F,te,ye.width,ye.height,Re,ye.data):O.texSubImage2D(O.TEXTURE_2D,K,F,te,ze,Ke,Re,Te,ye);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ye),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,We),O.pixelStorei(O.UNPACK_SKIP_PIXELS,dt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Pt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,It),K===0&&J.generateMipmaps&&O.generateMipmap(ne),Ie.unbindTexture()},this.copyTextureToTexture3D=function(L,J,ae=null,ce=null,K=0){return L.isTexture!==!0&&(Zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,ce=arguments[1]||null,L=arguments[2],J=arguments[3],K=arguments[4]||0),Zr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,J,ae,ce,K)},this.initRenderTarget=function(L){$.get(L).__webglFramebuffer===void 0&&R.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?R.setTextureCube(L,0):L.isData3DTexture?R.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?R.setTexture2DArray(L,0):R.setTexture2D(L,0),Ie.unbindTexture()},this.resetState=function(){E=0,T=0,A=null,Ie.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ut._getUnpackColorSpace()}}class ou{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=n}clone(){return new ou(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class u1 extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class La extends Un{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Tn,u=Tn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ph extends Xt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ur=new Nt,Lh=new Nt,$o=[],Dh=new Ws,h1=new Nt,qr=new lt,Yr=new kr;class En extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ph(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,h1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ws),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ur),Dh.copy(e.boundingBox).applyMatrix4(ur),this.boundingBox.union(Dh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new kr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ur),Yr.copy(e.boundingSphere).applyMatrix4(ur),this.boundingSphere.union(Yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(n),e.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ur),Lh.multiplyMatrices(n,ur),qr.matrixWorld=Lh,qr.raycast(e,$o);for(let o=0,a=$o.length;o<a;o++){const l=$o[o];l.instanceId=r,l.object=this,t.push(l)}$o.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ph(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new La(new Float32Array(s*this.count),s,this.count,Ca,bi));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Da extends Xs{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ih=new Nt,xc=new eu,jo=new kr,Ko=new G;class au extends qt{constructor(e=new Ot,t=new Da){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(s),jo.radius+=r,e.ray.intersectsSphere(jo)===!1)return;Ih.copy(s).invert(),xc.copy(e.ray).applyMatrix4(Ih);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,M=p;g<M;g++){const m=c.getX(g);Ko.fromBufferAttribute(h,m),Uh(Ko,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,M=p;g<M;g++)Ko.fromBufferAttribute(h,g),Uh(Ko,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Uh(i,e,t,n,s,r,o){const a=xc.distanceSqToPoint(i);if(a<t){const l=new G;xc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class wi extends Un{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,p=(o-u)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ae:new G);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new G,s=[],r=[],o=[],a=new G,l=new Nt;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new G)}r[0]=new G,o[0]=new G;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Mn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Mn(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class lu extends Fi{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ae){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class f1 extends lu{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function cu(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Zo=new G,gl=new cu,vl=new cu,xl=new cu;class uu extends Fi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new G){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Zo.subVectors(s[0],s[1]).add(s[0]),c=Zo);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Zo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Zo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),M=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),gl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,M,m),vl.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,M,m),xl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,M,m)}else this.curveType==="catmullrom"&&(gl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),vl.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),xl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(gl.calc(l),vl.calc(l),xl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new G().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function zh(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function d1(i,e){const t=1-i;return t*t*e}function p1(i,e){return 2*(1-i)*i*e}function m1(i,e){return i*i*e}function no(i,e,t,n){return d1(i,e)+p1(i,t)+m1(i,n)}function g1(i,e){const t=1-i;return t*t*t*e}function v1(i,e){const t=1-i;return 3*t*t*i*e}function x1(i,e){return 3*(1-i)*i*i*e}function _1(i,e){return i*i*i*e}function io(i,e,t,n,s){return g1(i,e)+v1(i,t)+x1(i,n)+_1(i,s)}class nd extends Fi{constructor(e=new Ae,t=new Ae,n=new Ae,s=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ae){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(io(e,s.x,r.x,o.x,a.x),io(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class M1 extends Fi{constructor(e=new G,t=new G,n=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new G){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(io(e,s.x,r.x,o.x,a.x),io(e,s.y,r.y,o.y,a.y),io(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class id extends Fi{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class y1 extends Fi{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sd extends Fi{constructor(e=new Ae,t=new Ae,n=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ae){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(no(e,s.x,r.x,o.x),no(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class b1 extends Fi{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(no(e,s.x,r.x,o.x),no(e,s.y,r.y,o.y),no(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rd extends Fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(zh(a,l.x,c.x,u.x,h.x),zh(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Ae().fromArray(s))}return this}}var _c=Object.freeze({__proto__:null,ArcCurve:f1,CatmullRomCurve3:uu,CubicBezierCurve:nd,CubicBezierCurve3:M1,EllipseCurve:lu,LineCurve:id,LineCurve3:y1,QuadraticBezierCurve:sd,QuadraticBezierCurve3:b1,SplineCurve:rd});class S1 extends Fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _c[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new _c[s.type]().fromJSON(s))}return this}}class Mc extends S1{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new id(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new sd(this.currentPoint.clone(),new Ae(e,t),new Ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new nd(this.currentPoint.clone(),new Ae(e,t),new Ae(n,s),new Ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new rd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new lu(e,t,n,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class hu extends Ot{constructor(e=[new Ae(0,-.5),new Ae(.5,0),new Ae(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Mn(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/t,h=new G,f=new Ae,p=new G,g=new G,M=new G;let m=0,d=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,d=e[_+1].y-e[_].y,p.x=d*1,p.y=-m,p.z=d*0,M.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(M.x,M.y,M.z);break;default:m=e[_+1].x-e[_].x,d=e[_+1].y-e[_].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=M.x,p.y+=M.y,p.z+=M.z,p.normalize(),l.push(p.x,p.y,p.z),M.copy(g)}for(let _=0;_<=t;_++){const b=n+_*u*s,x=Math.sin(b),C=Math.cos(b);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*x,h.y=e[E].y,h.z=e[E].x*C,o.push(h.x,h.y,h.z),f.x=_/t,f.y=E/(e.length-1),a.push(f.x,f.y);const T=l[3*E+0]*x,A=l[3*E+1],y=l[3*E+0]*C;c.push(T,A,y)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){const x=b+_*e.length,C=x,E=x+e.length,T=x+e.length+1,A=x+1;r.push(C,E,A),r.push(T,A,E)}this.setIndex(r),this.setAttribute("position",new mt(o,3)),this.setAttribute("uv",new mt(a,2)),this.setAttribute("normal",new mt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.points,e.segments,e.phiStart,e.phiLength)}}class Ia extends hu{constructor(e=1,t=1,n=4,s=8){const r=new Mc;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new Ia(e.radius,e.length,e.capSegments,e.radialSegments)}}class Rr extends Ot{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new G,u=new Ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const p=n+h/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(a,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Yt extends Ot{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],p=[];let g=0;const M=[],m=n/2;let d=0;_(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new mt(h,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(p,2));function _(){const x=new G,C=new G;let E=0;const T=(t-e)/n;for(let A=0;A<=r;A++){const y=[],v=A/r,w=v*(t-e)+e;for(let I=0;I<=s;I++){const U=I/s,P=U*l+a,N=Math.sin(P),B=Math.cos(P);C.x=w*N,C.y=-v*n+m,C.z=w*B,h.push(C.x,C.y,C.z),x.set(N,T,B).normalize(),f.push(x.x,x.y,x.z),p.push(U,1-v),y.push(g++)}M.push(y)}for(let A=0;A<s;A++)for(let y=0;y<r;y++){const v=M[y][A],w=M[y+1][A],I=M[y+1][A+1],U=M[y][A+1];(e>0||y!==0)&&(u.push(v,w,U),E+=3),(t>0||y!==r-1)&&(u.push(w,I,U),E+=3)}c.addGroup(d,E,0),d+=E}function b(x){const C=g,E=new Ae,T=new G;let A=0;const y=x===!0?e:t,v=x===!0?1:-1;for(let I=1;I<=s;I++)h.push(0,m*v,0),f.push(0,v,0),p.push(.5,.5),g++;const w=g;for(let I=0;I<=s;I++){const P=I/s*l+a,N=Math.cos(P),B=Math.sin(P);T.x=y*B,T.y=m*v,T.z=y*N,h.push(T.x,T.y,T.z),f.push(0,v,0),E.x=N*.5+.5,E.y=B*.5*v+.5,p.push(E.x,E.y),g++}for(let I=0;I<s;I++){const U=C+I,P=w+I;x===!0?u.push(P,P+1,U):u.push(P+1,P,U),A+=3}c.addGroup(d,A,x===!0?1:2),d+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jn extends Yt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Jn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yo extends Ot{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new mt(r,3)),this.setAttribute("normal",new mt(r.slice(),3)),this.setAttribute("uv",new mt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const b=new G,x=new G,C=new G;for(let E=0;E<t.length;E+=3)p(t[E+0],b),p(t[E+1],x),p(t[E+2],C),l(b,x,C,_)}function l(_,b,x,C){const E=C+1,T=[];for(let A=0;A<=E;A++){T[A]=[];const y=_.clone().lerp(x,A/E),v=b.clone().lerp(x,A/E),w=E-A;for(let I=0;I<=w;I++)I===0&&A===E?T[A][I]=y:T[A][I]=y.clone().lerp(v,I/w)}for(let A=0;A<E;A++)for(let y=0;y<2*(E-A)-1;y++){const v=Math.floor(y/2);y%2===0?(f(T[A][v+1]),f(T[A+1][v]),f(T[A][v])):(f(T[A][v+1]),f(T[A+1][v+1]),f(T[A+1][v]))}}function c(_){const b=new G;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(_),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function u(){const _=new G;for(let b=0;b<r.length;b+=3){_.x=r[b+0],_.y=r[b+1],_.z=r[b+2];const x=m(_)/2/Math.PI+.5,C=d(_)/Math.PI+.5;o.push(x,1-C)}g(),h()}function h(){for(let _=0;_<o.length;_+=6){const b=o[_+0],x=o[_+2],C=o[_+4],E=Math.max(b,x,C),T=Math.min(b,x,C);E>.9&&T<.1&&(b<.2&&(o[_+0]+=1),x<.2&&(o[_+2]+=1),C<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function p(_,b){const x=_*3;b.x=e[x+0],b.y=e[x+1],b.z=e[x+2]}function g(){const _=new G,b=new G,x=new G,C=new G,E=new Ae,T=new Ae,A=new Ae;for(let y=0,v=0;y<r.length;y+=9,v+=6){_.set(r[y+0],r[y+1],r[y+2]),b.set(r[y+3],r[y+4],r[y+5]),x.set(r[y+6],r[y+7],r[y+8]),E.set(o[v+0],o[v+1]),T.set(o[v+2],o[v+3]),A.set(o[v+4],o[v+5]),C.copy(_).add(b).add(x).divideScalar(3);const w=m(C);M(E,v+0,_,w),M(T,v+2,b,w),M(A,v+4,x,w)}}function M(_,b,x,C){C<0&&_.x===1&&(o[b]=_.x-1),x.x===0&&x.z===0&&(o[b]=C/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function d(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.vertices,e.indices,e.radius,e.details)}}class Ua extends yo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ua(e.radius,e.detail)}}class od extends Mc{constructor(e){super(e),this.uuid=Hs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Mc().fromJSON(s))}return this}}const w1={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=ad(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,p;if(n&&(r=R1(i,e,r,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<s;g+=t)h=i[g],f=i[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return ho(r,o,t,a,l,p,0),o}};function ad(i,e,t,n,s){let r,o;if(s===B1(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Nh(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Nh(r,i[r],i[r+1],o);return o&&za(o,o.next)&&(po(o),o=o.next),o}function Bs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(za(t,t.next)||an(t.prev,t,t.next)===0)){if(po(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ho(i,e,t,n,s,r,o){if(!i)return;!o&&r&&U1(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?T1(i,n,s,r):E1(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),po(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=A1(Bs(i),e,t),ho(i,e,t,n,s,r,2)):o===2&&C1(i,e,t,n,s,r):ho(Bs(i),e,t,n,s,r,1);break}}}function E1(i){const e=i.prev,t=i,n=i.next;if(an(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&gr(s,a,r,l,o,c,g.x,g.y)&&an(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function T1(i,e,t,n){const s=i.prev,r=i,o=i.next;if(an(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,M=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,d=yc(p,g,e,t,n),_=yc(M,m,e,t,n);let b=i.prevZ,x=i.nextZ;for(;b&&b.z>=d&&x&&x.z<=_;){if(b.x>=p&&b.x<=M&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&gr(a,u,l,h,c,f,b.x,b.y)&&an(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=p&&x.x<=M&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&gr(a,u,l,h,c,f,x.x,x.y)&&an(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=d;){if(b.x>=p&&b.x<=M&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&gr(a,u,l,h,c,f,b.x,b.y)&&an(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=_;){if(x.x>=p&&x.x<=M&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&gr(a,u,l,h,c,f,x.x,x.y)&&an(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function A1(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!za(s,r)&&ld(s,n,n.next,r)&&fo(s,r)&&fo(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),po(n),po(n.next),n=i=r),n=n.next}while(n!==i);return Bs(n)}function C1(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&k1(o,a)){let l=cd(o,a);o=Bs(o,o.next),l=Bs(l,l.next),ho(o,e,t,n,s,r,0),ho(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function R1(i,e,t,n){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=ad(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(N1(c));for(s.sort(P1),r=0;r<s.length;r++)t=L1(s[r],t);return t}function P1(i,e){return i.x-e.x}function L1(i,e){const t=D1(i,e);if(!t)return e;const n=cd(t,i);return Bs(n,n.next),Bs(t,t.next)}function D1(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&gr(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),fo(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&I1(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function I1(i,e){return an(i.prev,i,e.prev)<0&&an(e.next,i,i.next)<0}function U1(i,e,t,n){let s=i;do s.z===0&&(s.z=yc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,z1(s)}function z1(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function yc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function N1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function gr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function k1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!F1(i,e)&&(fo(i,e)&&fo(e,i)&&O1(i,e)&&(an(i.prev,i,e.prev)||an(i,e.prev,e))||za(i,e)&&an(i.prev,i,i.next)>0&&an(e.prev,e,e.next)>0)}function an(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function za(i,e){return i.x===e.x&&i.y===e.y}function ld(i,e,t,n){const s=Qo(an(i,e,t)),r=Qo(an(i,e,n)),o=Qo(an(t,n,i)),a=Qo(an(t,n,e));return!!(s!==r&&o!==a||s===0&&Jo(i,t,e)||r===0&&Jo(i,n,e)||o===0&&Jo(t,i,n)||a===0&&Jo(t,e,n))}function Jo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Qo(i){return i>0?1:i<0?-1:0}function F1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ld(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function fo(i,e){return an(i.prev,i,i.next)<0?an(i,e,i.next)>=0&&an(i,i.prev,e)>=0:an(i,e,i.prev)<0||an(i,i.next,e)<0}function O1(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function cd(i,e){const t=new bc(i.i,i.x,i.y),n=new bc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Nh(i,e,t,n){const s=new bc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function po(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function bc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function B1(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class so{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return so.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];kh(e),Fh(n,e);let o=e.length;t.forEach(kh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Fh(n,t[l]);const a=w1.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function kh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Fh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class fu extends Ot{constructor(e=new od([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new mt(s,3)),this.setAttribute("uv",new mt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:G1;let b,x=!1,C,E,T,A;d&&(b=d.getSpacedPoints(u),x=!0,f=!1,C=d.computeFrenetFrames(u,!1),E=new G,T=new G,A=new G),f||(m=0,p=0,g=0,M=0);const y=a.extractPoints(c);let v=y.shape;const w=y.holes;if(!so.isClockWise(v)){v=v.reverse();for(let de=0,Me=w.length;de<Me;de++){const O=w[de];so.isClockWise(O)&&(w[de]=O.reverse())}}const U=so.triangulateShape(v,w),P=v;for(let de=0,Me=w.length;de<Me;de++){const O=w[de];v=v.concat(O)}function N(de,Me,O){return Me||console.error("THREE.ExtrudeGeometry: vec does not exist"),de.clone().addScaledVector(Me,O)}const B=v.length,W=U.length;function V(de,Me,O){let $e,be,Oe;const Ie=de.x-Me.x,nt=de.y-Me.y,$=O.x-de.x,R=O.y-de.y,S=Ie*Ie+nt*nt,X=Ie*R-nt*$;if(Math.abs(X)>Number.EPSILON){const ee=Math.sqrt(S),ie=Math.sqrt($*$+R*R),re=Me.x-nt/ee,ke=Me.y+Ie/ee,Se=O.x-R/ie,De=O.y+$/ie,ot=((Se-re)*R-(De-ke)*$)/(Ie*R-nt*$);$e=re+Ie*ot-de.x,be=ke+nt*ot-de.y;const we=$e*$e+be*be;if(we<=2)return new Ae($e,be);Oe=Math.sqrt(we/2)}else{let ee=!1;Ie>Number.EPSILON?$>Number.EPSILON&&(ee=!0):Ie<-Number.EPSILON?$<-Number.EPSILON&&(ee=!0):Math.sign(nt)===Math.sign(R)&&(ee=!0),ee?($e=-nt,be=Ie,Oe=Math.sqrt(S)):($e=Ie,be=nt,Oe=Math.sqrt(S/2))}return new Ae($e/Oe,be/Oe)}const j=[];for(let de=0,Me=P.length,O=Me-1,$e=de+1;de<Me;de++,O++,$e++)O===Me&&(O=0),$e===Me&&($e=0),j[de]=V(P[de],P[O],P[$e]);const Q=[];let se,Ee=j.concat();for(let de=0,Me=w.length;de<Me;de++){const O=w[de];se=[];for(let $e=0,be=O.length,Oe=be-1,Ie=$e+1;$e<be;$e++,Oe++,Ie++)Oe===be&&(Oe=0),Ie===be&&(Ie=0),se[$e]=V(O[$e],O[Oe],O[Ie]);Q.push(se),Ee=Ee.concat(se)}for(let de=0;de<m;de++){const Me=de/m,O=p*Math.cos(Me*Math.PI/2),$e=g*Math.sin(Me*Math.PI/2)+M;for(let be=0,Oe=P.length;be<Oe;be++){const Ie=N(P[be],j[be],$e);oe(Ie.x,Ie.y,-O)}for(let be=0,Oe=w.length;be<Oe;be++){const Ie=w[be];se=Q[be];for(let nt=0,$=Ie.length;nt<$;nt++){const R=N(Ie[nt],se[nt],$e);oe(R.x,R.y,-O)}}}const Fe=g+M;for(let de=0;de<B;de++){const Me=f?N(v[de],Ee[de],Fe):v[de];x?(T.copy(C.normals[0]).multiplyScalar(Me.x),E.copy(C.binormals[0]).multiplyScalar(Me.y),A.copy(b[0]).add(T).add(E),oe(A.x,A.y,A.z)):oe(Me.x,Me.y,0)}for(let de=1;de<=u;de++)for(let Me=0;Me<B;Me++){const O=f?N(v[Me],Ee[Me],Fe):v[Me];x?(T.copy(C.normals[de]).multiplyScalar(O.x),E.copy(C.binormals[de]).multiplyScalar(O.y),A.copy(b[de]).add(T).add(E),oe(A.x,A.y,A.z)):oe(O.x,O.y,h/u*de)}for(let de=m-1;de>=0;de--){const Me=de/m,O=p*Math.cos(Me*Math.PI/2),$e=g*Math.sin(Me*Math.PI/2)+M;for(let be=0,Oe=P.length;be<Oe;be++){const Ie=N(P[be],j[be],$e);oe(Ie.x,Ie.y,h+O)}for(let be=0,Oe=w.length;be<Oe;be++){const Ie=w[be];se=Q[be];for(let nt=0,$=Ie.length;nt<$;nt++){const R=N(Ie[nt],se[nt],$e);x?oe(R.x,R.y+b[u-1].y,b[u-1].x+O):oe(R.x,R.y,h+O)}}}H(),Z();function H(){const de=s.length/3;if(f){let Me=0,O=B*Me;for(let $e=0;$e<W;$e++){const be=U[$e];me(be[2]+O,be[1]+O,be[0]+O)}Me=u+m*2,O=B*Me;for(let $e=0;$e<W;$e++){const be=U[$e];me(be[0]+O,be[1]+O,be[2]+O)}}else{for(let Me=0;Me<W;Me++){const O=U[Me];me(O[2],O[1],O[0])}for(let Me=0;Me<W;Me++){const O=U[Me];me(O[0]+B*u,O[1]+B*u,O[2]+B*u)}}n.addGroup(de,s.length/3-de,0)}function Z(){const de=s.length/3;let Me=0;he(P,Me),Me+=P.length;for(let O=0,$e=w.length;O<$e;O++){const be=w[O];he(be,Me),Me+=be.length}n.addGroup(de,s.length/3-de,1)}function he(de,Me){let O=de.length;for(;--O>=0;){const $e=O;let be=O-1;be<0&&(be=de.length-1);for(let Oe=0,Ie=u+m*2;Oe<Ie;Oe++){const nt=B*Oe,$=B*(Oe+1),R=Me+$e+nt,S=Me+be+nt,X=Me+be+$,ee=Me+$e+$;Le(R,S,X,ee)}}}function oe(de,Me,O){l.push(de),l.push(Me),l.push(O)}function me(de,Me,O){Ue(de),Ue(Me),Ue(O);const $e=s.length/3,be=_.generateTopUV(n,s,$e-3,$e-2,$e-1);qe(be[0]),qe(be[1]),qe(be[2])}function Le(de,Me,O,$e){Ue(de),Ue(Me),Ue($e),Ue(Me),Ue(O),Ue($e);const be=s.length/3,Oe=_.generateSideWallUV(n,s,be-6,be-3,be-2,be-1);qe(Oe[0]),qe(Oe[1]),qe(Oe[3]),qe(Oe[1]),qe(Oe[2]),qe(Oe[3])}function Ue(de){s.push(l[de*3+0]),s.push(l[de*3+1]),s.push(l[de*3+2])}function qe(de){r.push(de.x),r.push(de.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return V1(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new _c[s.type]().fromJSON(s)),new fu(n,e.options)}}const G1={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new Ae(r,o),new Ae(a,l),new Ae(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[s*3],p=e[s*3+1],g=e[s*3+2],M=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Ae(o,1-l),new Ae(c,1-h),new Ae(f,1-g),new Ae(M,1-d)]:[new Ae(a,1-l),new Ae(u,1-h),new Ae(p,1-g),new Ae(m,1-d)]}};function V1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ds extends yo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ds(e.radius,e.detail)}}class Pr extends yo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Pr(e.radius,e.detail)}}class xs extends Ot{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=e;const f=(t-e)/s,p=new G,g=new Ae;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){const d=r+m/n*o;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let M=0;M<s;M++){const m=M*(n+1);for(let d=0;d<n;d++){const _=d+m,b=_,x=_+n+1,C=_+n+2,E=_+1;a.push(b,x,E),a.push(x,C,E)}}this.setIndex(a),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Qn extends Ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new G,f=new G,p=[],g=[],M=[],m=[];for(let d=0;d<=n;d++){const _=[],b=d/n;let x=0;d===0&&o===0?x=.5/t:d===n&&l===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){const E=C/t;h.x=-e*Math.cos(s+E*r)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(s+E*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),M.push(f.x,f.y,f.z),m.push(E+x,1-b),_.push(c++)}u.push(_)}for(let d=0;d<n;d++)for(let _=0;_<t;_++){const b=u[d][_+1],x=u[d][_],C=u[d+1][_],E=u[d+1][_+1];(d!==0||o>0)&&p.push(b,x,E),(d!==n-1||l<Math.PI)&&p.push(x,C,E)}this.setIndex(p),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(M,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _r extends Ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new G,h=new G,f=new G;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const M=g/s*r,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(M),h.y=(e+t*Math.cos(m))*Math.sin(M),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const M=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,_=(s+1)*p+g;o.push(M,m,_),o.push(m,d,_)}this.setIndex(o),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class H1 extends sn{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class W1 extends Xs{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jc,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class $t extends Xs{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jc,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class du extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class X1 extends du{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _l=new Nt,Oh=new G,Bh=new G;class ud{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nu,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Oh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oh),Bh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bh),t.updateMatrixWorld(),_l.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_l),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_l)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Gh=new Nt,$r=new G,Ml=new G;class q1 extends ud{constructor(){super(new Zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),$r.setFromMatrixPosition(e.matrixWorld),n.position.copy($r),Ml.copy(n.position),Ml.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ml),n.updateMatrixWorld(),s.makeTranslation(-$r.x,-$r.y,-$r.z),Gh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh)}}class mo extends du{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new q1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Y1 extends ud{constructor(){super(new iu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $1 extends du{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new Y1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Vh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Vh(){return performance.now()}const Hh=new Nt;class j1{constructor(e,t,n=0,s=1/0){this.ray=new eu(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new tu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hh),this}intersectObject(e,t=!0,n=[]){return Sc(e,this,n,t),n.sort(Wh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Sc(e[s],this,n,t);return n.sort(Wh),n}}function Wh(i,e){return i.distance-e.distance}function Sc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Sc(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hc);const dn=(i,e={})=>new $t({color:i,flatShading:!0,...e});function cs(i){const e=i.map(o=>o.toNonIndexed()),t=e.reduce((o,a)=>o+a.attributes.position.count,0),n=new Float32Array(t*3);let s=0;for(const o of e)n.set(o.attributes.position.array,s),s+=o.attributes.position.array.length;const r=new Ot;return r.setAttribute("position",new Xt(n,3)),r.computeVertexNormals(),r}function K1(i,e,t,n,s,r){const o=r.id,{heightAt:a,pathDist:l,plinths:c}=e,u=e.lighthouse.pos,h=new qt,f=new Pe,p=[],g=(k,xe,ue,Je=2,tt=5)=>l(k,xe)>ue&&Math.hypot(k-u.x,xe-u.z)>tt&&!c.some(Ce=>Math.hypot(Ce.x-k,Ce.z-xe)<Je),M=(k,xe,ue=k*20)=>{const Je=[];for(let tt=0;tt<ue&&Je.length<k;tt++){const Ce=(n()-.5)*104,Qe=(n()-.5)*104,rt=a(Ce,Qe);xe(Ce,Qe,rt)&&Je.push({x:Ce,z:Qe,h:rt,r:n(),s:n()})}return Je},m=(k,xe,ue,Je,tt=!1)=>{const Ce=new En(k,xe,Math.max(1,ue.length));return Ce.count=ue.length,ue.forEach((Qe,rt)=>{Je(Qe,rt,Ce),h.updateMatrix(),Ce.setMatrixAt(rt,h.matrix)}),Ce.instanceColor&&(Ce.instanceColor.needsUpdate=!0),Ce.castShadow=tt,Ce.receiveShadow=!0,i.add(Ce),Ce},d=(t.mobile?.55:1)*1.8,_=(()=>{const k=[[-.9,.5,.05],[-.45,.68,-.06],[0,.78,.02],[.45,.66,-.04],[.9,.48,.06]].map(([tt,Ce,Qe])=>{const rt=new Jn(.045,Ce,3);return rt.translate(0,Ce/2,0),rt.rotateZ(tt*.45),rt.rotateX(Qe*3),rt.translate(tt*.09,0,Qe),rt}),xe=cs(k),ue=xe.attributes.position,Je=[];for(let tt=0;tt<ue.count;tt++){const Ce=yt.clamp(ue.getY(tt)/.7,0,1),Qe=.5+.7*Ce;Je.push(Qe,Qe,Qe*.95)}return xe.setAttribute("color",new mt(Je,3)),xe})(),b=M(Math.round(280*d),(k,xe,ue)=>ue>.8&&g(k,xe,1.7,1.7,4.4));m(_,dn("#ffffff",{vertexColors:!0}),b,(k,xe,ue)=>{h.position.set(k.x,k.h-.05,k.z),h.rotation.set(0,k.r*6,0),h.scale.setScalar(.8+k.s*.7),ue.setColorAt(xe,f.set(o==="vinter"?k.s<.5?"#c8d4c0":"#e6eef4":o==="vulkan"?k.s<.5?"#5a6a3a":"#7a7a4a":k.s<.5?"#7fae4e":"#9cc45e"))});const x=M(Math.round((o==="vinter"?0:o==="vulkan"?30:120)*d),(k,xe,ue)=>ue>.85&&g(k,xe,1.9,2,4.5)),C=new Yt(.025,.03,.4,4);C.translate(0,.2,0);const E=new Ds(.11,0);E.translate(0,.42,0);const T=["#ff8fb0","#ffd54a","#ffffff","#b58cff","#ff7a4a"];if(m(C,dn("#5f8f3a"),x,k=>{h.position.set(k.x,k.h-.03,k.z),h.rotation.set(0,0,0),h.scale.setScalar(.9+k.s*.6)}),m(E,dn("#ffffff"),x,(k,xe,ue)=>{h.position.set(k.x,k.h-.03,k.z),h.scale.setScalar(.9+k.s*.6),ue.setColorAt(xe,f.set(T[Math.floor(k.r*T.length)]))}),o!=="vulkan"){const k=(()=>{const Je=[],tt=[];for(let rt=0;rt<8;rt++){const gt=rt/8*Math.PI*2,Ct=.32;Je.push(0,0,0,Math.cos(gt)*.12,0,Math.sin(gt)*.12,Math.cos(gt-Ct)*.045,0,Math.sin(gt-Ct)*.045),Je.push(0,0,0,Math.cos(gt+Ct)*.045,0,Math.sin(gt+Ct)*.045,Math.cos(gt)*.12,0,Math.sin(gt)*.12);for(let mn=0;mn<6;mn++)tt.push(1,1,1)}for(let rt=0;rt<6;rt++){const gt=rt/6*Math.PI*2,Ct=(rt+1)/6*Math.PI*2;Je.push(0,.012,0,Math.cos(Ct)*.035,.012,Math.sin(Ct)*.035,Math.cos(gt)*.035,.012,Math.sin(gt)*.035);for(let mn=0;mn<3;mn++)tt.push(1,.78,.18)}const Qe=new Ot;return Qe.setAttribute("position",new mt(Je,3)),Qe.setAttribute("color",new mt(tt,3)),Qe.setAttribute("normal",new mt(new Array(Je.length/3).fill(0).flatMap(()=>[0,1,0]),3)),Qe})(),xe=M(Math.round((o==="vinter"?10:60)*d),(Je,tt,Ce)=>Ce>.9&&g(Je,tt,1.6,2,4.5)),ue=[];for(const Je of xe){const tt=5+Math.floor(Je.r*9);for(let Ce=0;Ce<tt;Ce++){const Qe=n()*6.28,rt=Math.sqrt(n())*1.6,gt=Je.x+Math.cos(Qe)*rt,Ct=Je.z+Math.sin(Qe)*rt,mn=a(gt,Ct);mn>.85&&g(gt,Ct,1.4,2,4.5)&&ue.push({x:gt,z:Ct,h:mn,r:n(),s:n()})}}m(k,new $t({color:"#ffffff",vertexColors:!0,side:cn}),ue,(Je,tt,Ce)=>{h.position.set(Je.x,Je.h+.035,Je.z),h.rotation.set((Je.s-.5)*.3,Je.r*6.28,0),h.scale.setScalar(1.3+Je.s*.7),Ce.setColorAt(tt,f.setRGB(1,.97+Je.r*.03,.94+Je.s*.06))})}const A=M(Math.round((o==="tak"?36:0)*d),(k,xe,ue)=>ue>1&&g(k,xe,2.4,2.4,5)),y=new Qn(.22,8,4,0,Math.PI*2,0,Math.PI/2);y.scale(1,.7,1),y.translate(0,.28,0);const v=new Yt(.07,.09,.3,6);v.translate(0,.14,0),m(v,dn("#f4ead6"),A,k=>{h.position.set(k.x,k.h-.03,k.z),h.rotation.set(0,0,(k.r-.5)*.3),h.scale.setScalar(.8+k.s)},!0),m(y,dn("#ffffff"),A,(k,xe,ue)=>{h.position.set(k.x,k.h-.03,k.z),h.rotation.set(0,0,(k.r-.5)*.3),h.scale.setScalar(.8+k.s),ue.setColorAt(xe,f.set(k.r<.6?"#d8453a":"#c89a5a"))},!0);const w=cs([[-.08,0],[.07,.05],[0,-.07]].map(([k,xe],ue)=>{const Je=new Jn(.04,1.1+ue*.2,3);return Je.translate(k,.55+ue*.1,xe),Je}).concat([(()=>{const k=new Ia(.05,.18,2,4);return k.translate(.07,1.25,.05),k})()])),I=M(Math.round(150*d),(k,xe,ue)=>ue>.05&&ue<.55&&g(k,xe,2.2,2,5),6e3),U=m(w,dn(o==="vinter"?"#a89878":o==="vulkan"?"#5a5a3a":"#9aa856"),I,k=>{h.position.set(k.x,k.h-.1,k.z),h.rotation.set(0,k.r*6,0),h.scale.setScalar(.8+k.s*.6)}),P=[],N=[];for(const k of e.paths)for(const xe of[-1,1]){let ue=null,Je=0,tt=0;for(let Ce=2;Ce<k.length-7;Ce+=1.7){const Qe=Ce/k.length,rt=k.curve.getPointAt(Qe),gt=k.curve.getTangentAt(Qe),Ct=rt.x-gt.z*xe*2.25,mn=rt.z+gt.x*xe*2.25,ni=a(Ct,mn);if(!(ni>.5&&tt<=0&&g(Ct,mn,1.9,2.6,6))){ue=null,tt>0&&tt--;continue}P.push({x:Ct,z:mn,h:ni}),ue&&N.push({a:ue,b:{x:Ct,z:mn,h:ni}}),ue={x:Ct,z:mn,h:ni},++Je>4+Math.floor(n()*5)&&(Je=0,ue=null,tt=3+Math.floor(n()*5))}}const B=new On(.14,.8,.14);B.translate(0,.4,0);const W=new On(1,.07,.06),V=dn("#a07650");m(B,V,P,k=>{h.position.set(k.x,k.h-.05,k.z),h.rotation.set(0,n()*.3,(n()-.5)*.12),h.scale.set(1,1,1)},!0);const j=N.flatMap(k=>[{...k,y:.32},{...k,y:.62}]);m(W,V,j,({a:k,b:xe,y:ue})=>{const Je=Math.hypot(xe.x-k.x,xe.z-k.z);h.position.set((k.x+xe.x)/2,(k.h+xe.h)/2+ue-.05,(k.z+xe.z)/2),h.rotation.set(0,-Math.atan2(xe.z-k.z,xe.x-k.x),0),h.scale.set(Je,1,1)},!0);const Q=r.dockTheta??-2.35,se=new Ae(Math.cos(Q),Math.sin(Q)),Ee=s(Q);let Fe=Ee-6;for(let k=Ee-10;k<Ee+4;k+=.25)if(a(se.x*k,se.y*k)<.3){Fe=k;break}const H=new bt,Z=dn("#b48a5e"),he=dn("#6e4a2c"),oe=8,me=Fe-2.5;for(let k=0;k<oe/.55;k++){const xe=new lt(new On(.5,.12,2.2),Z);xe.position.set(me+k*.55,.75+(n()-.5)*.04,0),xe.rotation.y=(n()-.5)*.05,xe.castShadow=xe.receiveShadow=!0,H.add(xe)}for(let k=0;k<=oe;k+=2)for(const xe of[-1,1]){const ue=new lt(new Yt(.12,.12,2.2,6),he);ue.position.set(me+k,.1,xe*1.05),ue.castShadow=!0,H.add(ue)}H.rotation.y=-Q,i.add(H);const Le=new bt,Ue=new Yt(.9,.9,3.4,10,1,!0,0,Math.PI);Ue.rotateZ(Math.PI/2),Ue.rotateX(Math.PI/2),Ue.scale(1,.6,.7);const qe=new lt(Ue,dn("#3f6f9a",{side:cn}));qe.rotation.y=Math.PI/2,qe.castShadow=!0,Le.add(qe);for(const k of[-.6,.6]){const xe=new lt(new On(.3,.08,1.2),Z);xe.position.set(k,-.15,0),Le.add(xe)}const de=new lt(new On(2.4,.06,.12),Z);de.position.set(.2,.05,.4),de.rotation.y=.3,Le.add(de);const Me=se.x*(me+oe-1)+-se.y*2.1,O=se.y*(me+oe-1)+se.x*2.1;Le.position.set(Me,.3,O),Le.rotation.y=-Q,i.add(Le);const $e=new bt,be=new lt(new ai(3,1.4,10,5),new zt({color:"#4a3a2a",wireframe:!0}));be.position.y=1;const Oe=be.geometry.attributes.position;for(let k=0;k<Oe.count;k++)Oe.setZ(k,Math.sin(Oe.getX(k)/3*Math.PI+1.5)*.15-Math.abs(Oe.getY(k))*.05);$e.add(be);for(const k of[-1.6,1.6]){const xe=new lt(new Yt(.07,.09,2,5),he);xe.position.set(k,.9,0),xe.castShadow=!0,$e.add(xe)}for(let k=0;k<5;k++){const xe=new lt(new Qn(.09,6,4),dn("#f0a43a"));xe.position.set(-1.2+k*.6,1.66,.05),$e.add(xe)}const Ie=Fe-4.5,nt=4.2,$=se.x*Ie-se.y*nt,R=se.y*Ie+se.x*nt;$e.position.set($,a($,R)-.1,R),$e.rotation.y=-Q+Math.PI/2,i.add($e),p.push({x:$,z:R,r:1.4});const S=new Yt(.42,.42,.95,10);S.translate(0,.47,0);const X=new Yt(.44,.44,.08,10),ee=new On(.8,.8,.8);ee.translate(0,.4,0);const ie=[],re=(k,xe,ue,Je)=>{for(let tt=0;tt<60&&ue>0;tt++){const Ce=k+(n()-.5)*6,Qe=xe+(n()-.5)*6,rt=a(Ce,Qe);rt<.4||!g(Ce,Qe,2.3,2.4,4.6)||ie.some(gt=>Math.hypot(gt.x-Ce,gt.z-Qe)<1.1)||(ie.push({x:Ce,z:Qe,h:rt,kind:Je??(n()<.6?"barrel":"crate"),r:n()}),ue--)}};re(se.x*(Fe-2.5),se.y*(Fe-2.5),5),re(u.x+6,u.z+1,3,"barrel"),re(u.x-6,u.z+2,2);const ke=ie.filter(k=>k.kind==="barrel"),Se=ie.filter(k=>k.kind==="crate");m(S,dn("#8a5a36"),ke,k=>{h.position.set(k.x,k.h-.05,k.z),h.rotation.set(0,k.r*6,0),h.scale.setScalar(1)},!0),m(X,dn("#3e3a38"),ke.flatMap(k=>[{...k,y:.2},{...k,y:.75}]),k=>{h.position.set(k.x,k.h-.05+k.y,k.z)},!1),m(ee,dn("#b8925e"),Se,k=>{h.position.set(k.x,k.h-.05,k.z),h.rotation.set(0,k.r*6,0),h.scale.setScalar(.8+k.r*.4)},!0);for(const k of ie)p.push({x:k.x,z:k.z,r:.55});const De=M(Math.round(380*d),(k,xe,ue)=>ue>.9&&g(k,xe,1.6,1.6,4.4)),ot=new Ds(.06,0);ot.translate(0,.06,0),m(ot,new $t({color:o==="vulkan"?"#ff9a5a":"#fffdf4"}),De,k=>{h.position.set(k.x,k.h-.02,k.z),h.rotation.set(0,0,0),h.scale.setScalar(.8+k.s*.8)});const we=(k,xe,ue)=>{const Je=[];for(let tt=0;tt<k*40&&Je.length<k;tt++){const Ce=(n()-.5)*130,Qe=(n()-.5)*130,rt=a(Ce,Qe),gt=.05-rt;gt>xe&&gt<ue&&Math.hypot(Ce-u.x,Qe-u.z)>6&&Je.push({x:Ce,z:Qe,h:rt,r:n(),s:n()})}return Je},je=cs([0,1,2].map(k=>{const xe=new Jn(.08,.9+k*.25,3);return xe.translate((k-1)*.12,.45+k*.12,k%2*.1),xe.rotateZ((k-1)*.25),xe})),at=we(Math.round(90*d),.35,1.8),ut=m(je,dn("#4f9a5a"),at,k=>{h.position.set(k.x,k.h,k.z),h.rotation.set(0,k.r*6,0),h.scale.setScalar(.8+k.s*.7)}),Ze=cs([[0,0,.32],[.3,.1,.22],[-.25,.05,.26],[.05,.3,.2]].map(([k,xe,ue])=>{const Je=new Ds(ue,0);return Je.translate(k,ue*.8,xe),Je})),wt=we(Math.round((o==="tak"?28:0)*d),.5,1.6),ht=["#b58cff","#ff8fa8","#ffc65a","#7fd6ff"];if(m(Ze,dn("#ffffff"),wt,(k,xe,ue)=>{h.position.set(k.x,k.h,k.z),h.rotation.set(0,k.r*6,0),h.scale.setScalar(.8+k.s*.9),ue.setColorAt(xe,f.set(ht[Math.floor(k.r*ht.length)]))}),o==="tak"){const k=cs([[0,0,0,.55],[.12,.05,.4,.42],[-.13,-.04,-.45,.4],[.05,.12,.2,.33],[-.06,-.1,-.15,.36]].map(([Ce,Qe,rt,gt])=>{const Ct=new Jn(.05,gt,4);return Ct.translate(0,gt/2,0),Ct.rotateZ(rt),Ct.rotateX(Qe*2),Ct.translate(Ce,0,Qe),Ct})),xe=cs([(()=>{const Ce=new Yt(.12,.16,.12,7);return Ce.translate(0,.06,0),Ce})(),...Array.from({length:7},(Ce,Qe)=>{const rt=new Jn(.025,.2,3),gt=Qe/7*6.28;return rt.translate(0,.1,0),rt.rotateZ(.5),rt.rotateY(gt),rt.translate(Math.cos(gt)*.08,.12,-Math.sin(gt)*.08),rt})]),ue=M(Math.round(16*d),(Ce,Qe,rt)=>.05-rt>.08&&e.landDist(Ce,Qe)>5,3e4).map(Ce=>({...Ce,big:2.4,pool:!0})),Je=[...we(Math.round(36*d),.12,.9),...ue],tt=["#ff5a80","#a060ff","#ffb820","#ff5a2a","#ff7ad0","#f4d070"];m(k,dn("#ffffff"),Je.filter((Ce,Qe)=>Qe%2===0),(Ce,Qe,rt)=>{h.position.set(Ce.x,Ce.h-.02,Ce.z),h.rotation.set(0,Ce.r*6,0),h.scale.setScalar((.8+Ce.s*.8)*(Ce.big??1)),rt.setColorAt(Qe,f.set(tt[Math.floor(Ce.r*tt.length)]).multiplyScalar(Ce.pool?1.6:1))}),m(xe,dn("#ffffff"),Je.filter((Ce,Qe)=>Qe%2===1),(Ce,Qe,rt)=>{h.position.set(Ce.x,Ce.h-.02,Ce.z),h.rotation.set(0,Ce.r*6,0),h.scale.setScalar((.9+Ce.s*.9)*(Ce.big??1)),rt.setColorAt(Qe,f.set(tt[(Math.floor(Ce.s*tt.length)+2)%tt.length]).multiplyScalar(Ce.pool?1.6:1))})}const Et=cs([(()=>{const k=new Qn(.17,7,4);return k.scale(1.2,.5,.85),k.translate(0,.07,0),k})(),...[-1,1].map(k=>{const xe=new Qn(.06,5,3);return xe.scale(1.3,.7,1),xe.translate(k*.17,.08,.15),xe}),...[-1,1].flatMap(k=>[0,1,2].map(xe=>{const ue=new On(.16,.02,.02);return ue.rotateZ(k*-.5),ue.translate(k*.18,.04,-.06+xe*.07),ue})),...[-1,1].map(k=>{const xe=new Qn(.025,4,3);return xe.translate(k*.05,.13,.09),xe})]),Y=o==="vulkan"?[]:M(Math.round((o==="vinter"?5:18)*d),(k,xe,ue)=>ue>.08&&ue<.42&&g(k,xe,2.2,2,5),12e3).map(k=>({...k,home:{x:k.x,z:k.z},dir:k.r*6.28,t:k.s*4,run:0})),Ne=m(Et,dn(o==="vinter"?"#b8584a":"#d8553a"),Y,k=>{h.position.set(k.x,k.h,k.z),h.rotation.set(0,k.dir,0),h.scale.setScalar(1)},!0),le=cs([(()=>{const xe=new Qn(.07,6,4);return xe.scale(.6,.5,1.4),xe})(),(()=>{const xe=new Jn(.06,.1,3);return xe.rotateX(-Math.PI/2),xe.translate(0,0,-.13),xe})()]),_e=[...we(Math.round(26*d),.1,.8),...M(Math.round(12*d),(k,xe,ue)=>.05-ue>.12&&e.landDist(k,xe)>5,3e4).map(k=>({...k,big:1.5}))].map(k=>({...k,rad:.5+k.s*.9,sp:(.5+k.r)*(k.s<.5?1:-1)})),Ve=["#ff9a3a","#3a7ad8","#f2c94c","#2f8f9a"],He=m(le,dn("#ffffff"),_e,(k,xe,ue)=>{h.position.set(k.x,k.h,k.z),ue.setColorAt(xe,f.set(Ve[xe%Ve.length]))}),ft=new Pr(.16,0);ft.scale(.45,.3,1.4);const Bt=we(t.mobile?5:8,.9,2.6).map(k=>({...k,rad:2+k.s*3,speed:(.25+k.r*.3)*(k.r<.5?1:-1)})),Vt=9,At=new En(ft,new zt({color:"#2f5f72",transparent:!0,opacity:.75}),Math.max(1,Bt.length*Vt));At.count=Bt.length*Vt,At.renderOrder=1,i.add(At);const Cn=Array.from({length:Vt},()=>[(n()-.5)*1.4,(n()-.5)*.25,(n()-.5)*1.4,n()*6]),bn=k=>{Le.position.y=.3+Math.sin(k*1.2)*.08,Le.rotation.z=Math.sin(k*.9)*.04,Le.rotation.x=Math.sin(k*1.3+1)*.03,Bt.forEach((ue,Je)=>{const tt=k*ue.speed+ue.r*6,Ce=ue.x+Math.cos(tt)*ue.rad,Qe=ue.z+Math.sin(tt)*ue.rad,rt=Math.atan2(-Math.sin(tt)*ue.speed,Math.cos(tt)*ue.speed);for(let gt=0;gt<Vt;gt++){const[Ct,mn,ni,ci]=Cn[gt];h.position.set(Ce+Ct+Math.sin(k*2+ci)*.1,Math.max(a(Ce,Qe)+.25,-.75)+mn,Qe+ni),h.rotation.set(0,rt+Math.sin(k*6+ci)*.15,0),h.scale.setScalar(1),h.updateMatrix(),At.setMatrixAt(Je*Vt+gt,h.matrix)}}),At.instanceMatrix.needsUpdate=!0,_e.forEach((ue,Je)=>{const tt=k*ue.sp+ue.r*6+Math.sin(k*.7+Je)*.6,Ce=ue.x+Math.cos(tt)*ue.rad,Qe=ue.z+Math.sin(tt)*ue.rad;h.position.set(Ce,Math.min(a(Ce,Qe)+.08,0),Qe),h.rotation.set(0,-tt+(ue.sp>0?0:Math.PI),Math.sin(k*9+Je)*.2),h.scale.setScalar((.9+ue.s*.5)*(ue.big??1)),h.updateMatrix(),He.setMatrixAt(Je,h.matrix)}),He.instanceMatrix.needsUpdate=!0;const xe=Math.min(.05,Math.max(0,k-(bn.last??k)));bn.last=k,Y.forEach((ue,Je)=>{if(ue.t-=xe,ue.t<=0&&(ue.run>0?(ue.run=0,ue.t=.8+Math.random()*2.5):(ue.run=(Math.random()<.5?-1:1)*(.9+Math.random()*.8),ue.t=.4+Math.random()*.9,Math.random()<.3&&(ue.dir+=(Math.random()-.5)*1.5))),ue.run){const tt=ue.x+Math.cos(ue.dir)*ue.run*xe,Ce=ue.z-Math.sin(ue.dir)*ue.run*xe,Qe=a(tt,Ce);Qe>.05&&Qe<.5&&Math.hypot(tt-ue.home.x,Ce-ue.home.z)<3.5?(ue.x=tt,ue.z=Ce,ue.h=Qe):ue.run=-ue.run}h.position.set(ue.x,ue.h+(ue.run?Math.abs(Math.sin(k*30+Je))*.015:0),ue.z),h.rotation.set(0,ue.dir,ue.run?Math.sin(k*30+Je)*.08:0),h.scale.setScalar(1),h.updateMatrix(),Ne.setMatrixAt(Je,h.matrix)}),Ne.instanceMatrix.needsUpdate=!0,!((k*60|0)%2)&&(I.forEach((ue,Je)=>{h.position.set(ue.x,ue.h-.1,ue.z),h.rotation.set(Math.sin(k*1.7+ue.x*.3)*.08,ue.r*6,Math.cos(k*1.4+ue.z*.3)*.08),h.scale.setScalar(.8+ue.s*.6),h.updateMatrix(),U.setMatrixAt(Je,h.matrix)}),U.instanceMatrix.needsUpdate=!0,at.forEach((ue,Je)=>{h.position.set(ue.x,ue.h,ue.z),h.rotation.set(Math.sin(k*1.1+ue.x)*.12,ue.r*6,Math.cos(k*.9+ue.z)*.12),h.scale.setScalar(.8+ue.s*.7),h.updateMatrix(),ut.setMatrixAt(Je,h.matrix)}),ut.instanceMatrix.needsUpdate=!0)};H.updateMatrixWorld(!0);const li=[];return H.children.forEach(k=>{if(k.geometry.type==="CylinderGeometry"){const xe=k.getWorldPosition(new G);li.push({x:xe.x,z:xe.z,r:.15})}}),li.push({x:Me,z:O,r:.9}),{colliders:p,update:bn,obstacles:li}}function Xh(i,{heightTex:e,ext:t,grid:n,quality:s,sunDir:r,colors:o,level:a=.05,size:l=220,center:c=[0,0],maxDepth:u=100}){const h=_i.merge([Xe.fog,{uTime:{value:0},uHeight:{value:e},uExt:{value:t},uGrid:{value:n},uLevel:{value:a},uMaxDepth:{value:u},uShallow:{value:new Pe(o.shallow)},uMid:{value:new Pe(o.mid)},uDeep:{value:new Pe(o.deep)},uSun:{value:r.clone().normalize()},uCaustic:{value:(s.mobile?.8:1)*o.caustic}}]);h.uHeight.value=e;const f=new sn({uniforms:h,transparent:!0,depthWrite:!1,fog:!0,vertexShader:`
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
      }`}),p=l<50?8:s.mobile?40:64,g=new ai(l,l,p,p);g.rotateX(-Math.PI/2);const M=new lt(g,f);return M.position.set(c[0],a,c[1]),M.renderOrder=2,i.add(M),{mesh:M,update(m){h.uTime.value=m}}}function qh(i,e){const t=new La(Float32Array.from(i),e,e,Ca,bi);return t.magFilter=t.minFilter=Tn,t.generateMipmaps=!1,t.needsUpdate=!0,t}const wc={uOlPx:{value:2},uOlRes:{value:new Ae(1,1)},uInk:{value:new Pe("#1f1a1c")}},Z1=.16,J1=.65,Ec={rock:new Set,tree:new Set,tower:new Set,figure:new Set},Tc={rock:!0,tree:!0,tower:!0,figure:!0};function Q1(i,e,t,n){wc.uOlPx.value=i*e,wc.uOlRes.value.set(Math.max(1,t*e),Math.max(1,n*e))}function fd(i){for(const e in Ec)Tc[e]=!!i[e],Ec[e].forEach(t=>t.visible=Tc[e])}function dd(i){if(i.attributes.olNormal)return;i.attributes.normal||i.computeVertexNormals();const e=i.attributes.position,t=i.attributes.normal,n=e.count,s=new Map,r=new Array(n);for(let a=0;a<n;a++){const l=`${Math.round(e.getX(a)*1e4)},${Math.round(e.getY(a)*1e4)},${Math.round(e.getZ(a)*1e4)}`;r[a]=l;const c=s.get(l)||[0,0,0];c[0]+=t.getX(a),c[1]+=t.getY(a),c[2]+=t.getZ(a),s.set(l,c)}const o=new Float32Array(n*3);for(let a=0;a<n;a++){const l=s.get(r[a]),c=Math.hypot(l[0],l[1],l[2])||1;o[a*3]=l[0]/c,o[a*3+1]=l[1]/c,o[a*3+2]=l[2]/c}i.setAttribute("olNormal",new Xt(o,3))}const yl=new Map;function pd(i,e,t,n){const s=`${i?i.uuid:"batch"}|${e}|${t}|${n}`;if(yl.has(s))return yl.get(s);const r=new zt({side:Vn,vertexColors:t});return r.color.copy(t||!i?new Pe(1,1,1):i.color).multiplyScalar(Z1),r.visible=Tc[e],r.onBeforeCompile=o=>{Object.assign(o.uniforms,wc),o.vertexShader=`attribute vec3 olNormal;
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
          // Dybden til objektets fot (instansens origo), ikke fragmentets: baksidene ligger bak vokteren
          // selv når treet står foran ham, og ble stående som en mørk klump inne i dither-hullet
          vec4 o0 = vec4(0.0, 0.0, 0.0, 1.0);
          #ifdef USE_INSTANCING
            o0 = instanceMatrix * o0;
          #endif
          vOlZ = -(modelViewMatrix * o0).z;
        }`),o.fragmentShader=`varying float vOlZ;
uniform vec3 uInk;
`+o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      diffuseColor.rgb = mix(diffuseColor.rgb, uInk, ${J1.toFixed(2)});`),n&&(o.uniforms.uKeep=Lr.uKeep,o.uniforms.uRad=Lr.uRad,o.fragmentShader=`uniform vec3 uKeep;
uniform float uRad;
`+o.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        {
          float k = 1.0 - smoothstep(uRad * 0.55, uRad, length(gl_FragCoord.xy - uKeep.xy));
          if (k > 0.0 && vOlZ < uKeep.z + 0.8) { // kronen ligger ~2 enheter nærmere kameraet enn foten
            float b = fract(52.9829189 * fract(dot(floor(gl_FragCoord.xy), vec2(0.06711056, 0.00583715)))); // samme støy som trærne (G7)
            if (k * 0.95 > b + 0.02) discard;
          }
        }`))},r.customProgramCacheKey=()=>`ol${n?"f":""}`,Ec[e].add(r),yl.set(s,r),r}const md=i=>{const e=i.material;return i.isMesh&&!Array.isArray(e)&&(e.isMeshLambertMaterial||e.isMeshStandardMaterial)&&!e.transparent&&e.side!==cn};function Ac(i,e,t=!1){if(!md(i))return null;dd(i.geometry);const n=!!(i.material.vertexColors&&i.geometry.attributes.color),s=new En(i.geometry,pd(i.material,e,n,t),i.instanceMatrix.count);return s.instanceMatrix=i.instanceMatrix,s.count=i.count,s.frustumCulled=!1,s.renderOrder=1,s.onBeforeRender=()=>{s.count=i.count},i.add(s),s}const Yh=512,$h=new Map;let Cc=null;function e_(i){Cc=i}function t_(i,e){const t=`${i.uuid}|${e}`;let n=$h.get(t);if(n)return n;dd(i);const s=new En(i,pd(null,e,!1,!1),Yh);return s.instanceMatrix.setUsage(Nu),s.setColorAt(0,new Pe),s.instanceColor.setUsage(Nu),s.count=0,s.frustumCulled=!1,s.matrixAutoUpdate=!1,s.renderOrder=1,s.raycast=()=>{},n={mesh:s,parts:[]},s.onBeforeRender=()=>{const r=s.instanceMatrix.array,o=s.instanceColor.array;let a=0;for(let l=n.parts.length-1;l>=0;l--){const c=n.parts[l];let u=c,h=!0;for(;u.parent;){if(!u.visible){h=!1;break}u=u.parent}if(u!==Cc){++c.userData.olMiss>300&&n.parts.splice(l,1);continue}if(c.userData.olMiss=0,!h||a>=Yh)continue;r.set(c.matrixWorld.elements,a*16);const f=c.material.color;o[a*3]=f.r,o[a*3+1]=f.g,o[a*3+2]=f.b,a++}s.count=a,a&&(s.instanceMatrix.clearUpdateRanges(),s.instanceMatrix.addUpdateRange(0,a*16),s.instanceColor.clearUpdateRanges(),s.instanceColor.addUpdateRange(0,a*3),s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0)},Cc.add(s),$h.set(t,n),n}function Or(i,e){return i.traverse(t=>{!md(t)||t.userData.noOutline||(t.userData.olMiss=0,t_(t.geometry,e).parts.push(t))}),i}function Gs(i){const e=i.map(([h])=>h.index?h.toNonIndexed():h),t=e.reduce((h,f)=>h+f.attributes.position.count,0),n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Pe,o=new G;let a=0;e.forEach((h,f)=>{const p=i[f][1],g=h.attributes.position;for(let M=0;M<g.count;M++)o.fromBufferAttribute(g,M),p(o,r),n.set([o.x,o.y,o.z],(a+M)*3),s.set([r.r,r.g,r.b],(a+M)*3);a+=g.count});const l=new Ot;l.setAttribute("position",new Xt(n,3)),l.setAttribute("color",new Xt(s,3)),l.computeVertexNormals();let c=0;const u=l.attributes.normal;return e.forEach((h,f)=>{const p=i[f][2],g=h.attributes.position.count;if(p)for(let M=0;M<g;M++)o.fromBufferAttribute(l.attributes.position,c+M).sub(p).normalize(),u.setXYZ(c+M,o.x,o.y,o.z);c+=g}),l}const Rc=.7,Pc=3.8;function n_(){const i=[],t=Pc/8,n=new Pe("#7a5434"),s=new Pe("#a57a4e");for(let r=0;r<8;r++){const o=r/8,a=(r+1)/8,l=.24-o*.08,c=.24-a*.08,u=new Yt(c,l*1.12,t,7,1),h=u.attributes.position;for(let f=0;f<h.count;f++){const p=h.getY(f)+t/2+r*t,g=p/Pc;h.setXYZ(f,h.getX(f)+Rc*g*g,p,h.getZ(f))}i.push([u,(f,p)=>p.copy(n).lerp(s,f.y/t%1).multiplyScalar(.55+.45*yt.smoothstep(f.y,0,1.3))])}return Gs(i)}function i_(i){const n=[],s=[];for(let o=0;o<=12;o++){const a=o/12;s.push(new G(0,.35*a-1.25*a*a,a*2.7))}for(let o=0;o<12;o++){const a=o/12,l=s[o],c=s[o+1],u=.62*Math.sin(Math.PI*Math.min(1,a*1.1+.08))+.05;for(const h of[-1,1]){const f=new G(h*u,l.y-.08-u*.25,l.z+.32);h>0?n.push(l.x,l.y,l.z,c.x,c.y,c.z,f.x,f.y,f.z):n.push(l.x,l.y,l.z,f.x,f.y,f.z,c.x,c.y,c.z)}}const r=new Ot;return r.setAttribute("position",new mt(n,3)),r}function s_(){const i=[],e=new Pe("#3f8a3a"),t=new Pe("#9ad25a"),n=8;for(let s=0;s<n;s++){const r=i_();r.rotateX(-.15+s%2*.25),r.rotateY(s/n*Math.PI*2+s%2*.2),i.push([r,(o,a)=>{const l=Math.hypot(o.x,o.z);a.copy(e).lerp(t,Math.min(1,l/2.4))}])}for(let s=0;s<3;s++){const r=new Qn(.16,6,4);r.translate(Math.cos(s*2.1)*.18,-.2,Math.sin(s*2.1)*.18),i.push([r,(o,a)=>a.set("#6b4a2a")])}return Gs(i)}function jh(i,e,t){const n=i.map(([s,r,o,a],l)=>{const c=new Ds(a,2),u=c.attributes.position;for(let h=0;h<u.count;h++){const f=u.getX(h),p=u.getY(h),g=u.getZ(h),M=1+.07*Math.sin(f*7+l)*Math.sin(p*6)+.05*Math.sin(g*9+p*4);u.setXYZ(h,f*M,p*M*.92,g*M)}return c.translate(s,r,o),[c,(h,f)=>f.copy(t).lerp(e,yt.smoothstep(h.y,r-a*.6,r+a*.9)).multiplyScalar((.6+.4*yt.smoothstep(h.y,r-a,r))*(.55+.45*yt.smoothstep(Math.hypot(h.x,h.z),.1,.9+a*.5))),new G(s,r,o)]});return Gs(n)}function r_(i){const e=[],t=new Pe("#2f6a48"),n=new Pe("#4a8a5a"),s=new Pe("#ffffff");return[[1.5,1.5,.9],[1.15,1.35,1.8],[.8,1.2,2.6],[.45,.9,3.25]].forEach(([r,o,a])=>{const l=new Jn(r,o,10,2),c=l.attributes.position;for(let u=0;u<c.count;u++)c.getY(u)<-o/2+.01&&c.setY(u,c.getY(u)+Math.sin(u*1.7)*.12);l.translate(0,a,0),e.push([l,(u,h)=>{const f=(u.y-a+o/2)/o;h.copy(t).lerp(n,f),i&&f>.12&&h.lerp(s,Math.min(1,(f-.12)*2.6))}])}),Gs(e)}function o_(){const i=[],e=new Yt(.12,.26,3,6,4),t=e.attributes.position;for(let n=0;n<t.count;n++){const s=t.getY(n);t.setX(n,t.getX(n)+Math.sin(s*1.7)*.12)}return e.translate(0,1.5,0),i.push([e,(n,s)=>s.set(n.y<.4?"#1e1a18":"#3a302a")]),[[.4,1.9,.9,.7],[-.5,2.3,-.8,.6],[.2,2.7,.6,.5]].forEach(([n,s,r,o])=>{const a=new Yt(.03,.08,o,4);a.translate(0,o/2,0),a.rotateZ(r),a.translate(n*.3,s,0),i.push([a,(l,c)=>c.set("#2e2622")])}),Gs(i)}const Lr={uKeep:{value:new G(-1e4,-1e4,0)},uRad:{value:120}};function Kh(i){return i.onBeforeCompile=e=>{e.uniforms.uKeep=Lr.uKeep,e.uniforms.uRad=Lr.uRad,e.fragmentShader=e.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      #ifdef DOUBLE_SIDED
        if (!gl_FrontFacing) diffuseColor.rgb *= 0.6; // G7: undersiden av palmebladene er mørkere (raw4)
      #endif`),e.fragmentShader=`uniform vec3 uKeep;
uniform float uRad;
`+e.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      {
        float k = 1.0 - smoothstep(uRad * 0.55, uRad, length(gl_FragCoord.xy - uKeep.xy));
        if (k > 0.0 && -vViewPosition.z < uKeep.z - 1.2) {
          // G7: interleaved gradient noise (blå-støy-aktig) i stedet for et 4-trinns rutenett, som synes som prikker
          float b = fract(52.9829189 * fract(dot(floor(gl_FragCoord.xy), vec2(0.06711056, 0.00583715))));
          if (k * 0.95 > b + 0.02) discard;
        }
      }`)},i}function a_(i,e,t,n){const s=e.filter(P=>P.kind==="palm"),r=e.filter(P=>P.kind==="round"),o=e.filter(P=>P.kind==="bush"),a=e.filter(P=>P.kind==="pine"),l=e.filter(P=>P.kind==="dead"),c=Kh(new $t({vertexColors:!0})),u=Kh(new $t({vertexColors:!0,side:cn})),h=new Pe(n.trees.leaf[0]),f=new Pe(n.trees.leaf[1]),p=new Yt(.16,.26,1.6,7);p.translate(0,.8,0);const g=Gs([[p,(P,N)=>N.set("#7a5434").multiplyScalar(.55+.45*yt.smoothstep(P.y,0,1.1))]]),M=jh([[0,2.2,0,1.15],[.8,1.9,.3,.8],[-.7,1.95,-.2,.85],[.1,2,-.85,.75],[-.2,2.9,.2,.8],[.35,1.8,.85,.7]],h,f),m=jh([[0,.45,0,.6],[.5,.35,.2,.45],[-.45,.38,-.15,.48],[.05,.7,.1,.42]],h,f),d=(P,N,B)=>{const W=new En(P,N,Math.max(1,B));return W.count=B,W.castShadow=!0,W.receiveShadow=!0,i.add(W),Ac(W,"tree",!0),W},_=d(n_(),c,s.length),b=d(s_(),u,s.length),x=d(g,c,r.length),C=d(M,c,r.length),E=d(m,c,o.length),T=new Yt(.14,.22,1.2,6);T.translate(0,.6,0);const A=d(Gs([[T,(P,N)=>N.set("#5a3e2a").multiplyScalar(.55+.45*yt.smoothstep(P.y,0,1))]]),c,a.length),y=d(r_(n.id==="vinter"),c,a.length),v=d(o_(),c,l.length),w=new qt;s.forEach((P,N)=>{w.position.set(P.x,P.y-.1,P.z),w.rotation.set(0,P.phase,0),w.scale.setScalar(P.s),w.updateMatrix(),_.setMatrixAt(N,w.matrix)}),r.forEach((P,N)=>{w.position.set(P.x,P.y-.1,P.z),w.rotation.set(0,P.phase,0),w.scale.setScalar(P.s),w.updateMatrix(),x.setMatrixAt(N,w.matrix)}),a.forEach((P,N)=>{w.position.set(P.x,P.y-.1,P.z),w.rotation.set(0,P.phase,0),w.scale.setScalar(P.s),w.updateMatrix(),A.setMatrixAt(N,w.matrix)}),l.forEach((P,N)=>{w.position.set(P.x,P.y-.1,P.z),w.rotation.set(0,P.phase,(P.phase%1-.5)*.15),w.scale.setScalar(P.s),w.updateMatrix(),v.setMatrixAt(N,w.matrix)});const I=P=>{s.forEach((N,B)=>{const W=Math.cos(N.phase),V=Math.sin(N.phase);w.position.set(N.x+Rc*W*N.s,N.y-.1+Pc*N.s,N.z-Rc*V*N.s),w.rotation.set(Math.sin(P*1.2+N.phase)*.07,N.phase+Math.sin(P*.7+N.phase)*.05,Math.cos(P*1+N.phase)*.07),w.scale.setScalar(N.s),w.updateMatrix(),b.setMatrixAt(B,w.matrix)}),b.instanceMatrix.needsUpdate=!0,r.forEach((N,B)=>{w.position.set(N.x,N.y-.1,N.z),w.rotation.set(Math.sin(P*1.1+N.phase)*.025,N.phase,Math.cos(P*.9+N.phase)*.025),w.scale.setScalar(N.s),w.updateMatrix(),C.setMatrixAt(B,w.matrix)}),C.instanceMatrix.needsUpdate=!0,o.forEach((N,B)=>{const W=1+Math.sin(P*1.6+N.phase)*.035;w.position.set(N.x,N.y-.12,N.z),w.rotation.set(0,N.phase,0),w.scale.set(N.s*W,N.s/W,N.s*W),w.updateMatrix(),E.setMatrixAt(B,w.matrix)}),E.instanceMatrix.needsUpdate=!0,a.forEach((N,B)=>{w.position.set(N.x,N.y-.1,N.z),w.rotation.set(Math.sin(P*.9+N.phase)*.02,N.phase,Math.cos(P*.8+N.phase)*.02),w.scale.setScalar(N.s),w.updateMatrix(),y.setMatrixAt(B,w.matrix)}),y.instanceMatrix.needsUpdate=!0};return I(0),{colliders:[...s.map(P=>({x:P.x,z:P.z,r:.35*P.s})),...r.map(P=>({x:P.x,z:P.z,r:.4*P.s})),...o.map(P=>({x:P.x,z:P.z,r:.7*P.s})),...a.map(P=>({x:P.x,z:P.z,r:.4*P.s})),...l.map(P=>({x:P.x,z:P.z,r:.3*P.s}))],update:I}}function bl(i,e=5){const t=[],n=[],s=new Pe,r=new Pe;for(let a=0;a<e;a++){const l=i()*Math.PI*2,c=i()*.16,u=.28+i()*.3,h=.04+i()*.03,f=Math.cos(l)*c,p=Math.sin(l)*c,g=(i()-.5)*.25,M=i()*Math.PI,m=Math.cos(M)*h,d=Math.sin(M)*h;t.push(f-m,0,p-d,f+m,0,p+d,f+Math.cos(l)*g,u,p+Math.sin(l)*g),s.setRGB(.72,.72,.72),r.setRGB(1.2,1.22,1.12),n.push(s.r,s.g,s.b,s.r,s.g,s.b,r.r,r.g,r.b)}const o=new Ot;return o.setAttribute("position",new mt(t,3)),o.setAttribute("color",new mt(n,3)),o.setAttribute("normal",new mt(new Array(t.length/3).fill(0).flatMap(()=>[0,1,0]),3)),o}function l_(){const i=[];for(let o=0;o<3;o++){const a=new Qn(.07,6,3);a.scale(1,.25,1.15);const l=o*2.094;a.translate(Math.cos(l)*.065,.05,Math.sin(l)*.065),i.push(a.toNonIndexed())}const e=i.reduce((o,a)=>o+a.attributes.position.count,0),t=new Float32Array(e*3),n=new Float32Array(e*3);let s=0;for(const o of i)t.set(o.attributes.position.array,s*3),n.set(o.attributes.normal.array,s*3),s+=o.attributes.position.count;const r=new Ot;return r.setAttribute("position",new Xt(t,3)),r.setAttribute("normal",new Xt(n,3)),r}function c_(i,e,t,n,s){const{heightAt:r,pathDist:o,plinths:a}=e,l=e.lighthouse.pos,c={uTime:{value:0}},h=(w=>(w.onBeforeCompile=I=>{I.uniforms.uTime=c.uTime,I.vertexShader=I.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          #ifdef USE_INSTANCING
            vec2 ip = instanceMatrix[3].xz;
          #else
            vec2 ip = vec2(0.0);
          #endif
          float sway = sin(uTime * 1.8 + ip.x * 0.35 + ip.y * 0.27) * 0.6 + sin(uTime * 3.1 + ip.x * 1.3) * 0.25;
          transformed.x += sway * transformed.y * 0.22;
          transformed.z += cos(uTime * 1.5 + ip.y * 0.4) * transformed.y * 0.12;`),I.fragmentShader=I.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
  normal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);`)},w))(new $t({vertexColors:!0,side:cn})),f=new $t({color:"#ffffff"}),p=[bl(s,7),bl(s,8),bl(s,6)],g=l_(),M={tak:{grass:["#4a8638","#86b452"],density:1,clover:.22,cloverCol:["#3a8a3a","#5aa84a"]},vinter:{grass:["#9a9a7a","#c8c4a0"],density:.18,clover:0,cloverCol:["#fff","#fff"]},vulkan:{grass:["#4a5a30","#6a7a3a"],density:.35,clover:0,cloverCol:["#fff","#fff"]}}[n.id],m=(t.mobile?.45:1)*M.density,d=13,_=8,b=Math.round(720*m),x=[],C=new qt,E=new Pe,T=new Pe(M.grass[0]),A=new Pe(M.grass[1]),y=(w,I,U)=>{if(U<.72)return!1;const P=o(w,I);if(P<1||P<1.7&&s()<.6||Math.hypot(w-l.x,I-l.z)<4.3||n.volcano&&Math.hypot(w-n.volcano.x,I-n.volcano.z)<n.volcano.r*.7)return!1;for(const N of a)if((N.x-w)**2+(N.z-I)**2<2.6)return!1;return!e.extrasBlock||!e.extrasBlock(w,I)};for(let w=0;w<_;w++)for(let I=0;I<_;I++){const U=-_*d/2+w*d,P=-_*d/2+I*d;for(const[N,B]of[[0,b*.4],[1,b*.35],[2,b*.25]]){const W=[];for(let j=0;j<B*3&&W.length<B;j++){const Q=U+s()*d,se=P+s()*d,Ee=r(Q,se);y(Q,se,Ee)&&W.push([Q,se,Ee])}if(!W.length)continue;const V=new En(p[N],h,W.length);V.userData.tier=N,W.forEach(([j,Q,se],Ee)=>{C.position.set(j,se-.04,Q),C.rotation.set(0,s()*6.28,0),C.scale.setScalar(.8+s()*.7),C.updateMatrix(),V.setMatrixAt(Ee,C.matrix),V.setColorAt(Ee,E.copy(T).lerp(A,s()).multiplyScalar(e.shadeAt?e.shadeAt(j,Q):1))}),V.receiveShadow=!0,V.computeBoundingSphere(),i.add(V),x.push(V)}if(M.clover>0){const N=[],B=U+s()*d,W=P+s()*d;for(let V=0;V<b*M.clover*3&&N.length<b*M.clover;V++){const j=B+(s()-.5)*6,Q=W+(s()-.5)*6,se=r(j,Q);y(j,Q,se)&&N.push([j,Q,se])}if(N.length){const V=new En(g,f,N.length),j=new Pe(M.cloverCol[0]),Q=new Pe(M.cloverCol[1]);N.forEach(([se,Ee,Fe],H)=>{C.position.set(se,Fe-.02,Ee),C.rotation.set(0,s()*6.28,0),C.scale.setScalar(.8+s()*.8),C.updateMatrix(),V.setMatrixAt(H,C.matrix),V.setColorAt(H,E.copy(j).lerp(Q,s()).multiplyScalar(e.shadeAt?e.shadeAt(se,Ee):1))}),V.receiveShadow=!0,V.userData.tier=1,V.computeBoundingSphere(),i.add(V),x.push(V)}}}return{update(w){c.uTime.value=w},setLevel:w=>x.forEach(I=>{I.visible=w==="high"||I.userData.tier===0,I.receiveShadow=w==="high"}),count:x.reduce((w,I)=>w+I.count,0)}}function Zh(i,{arms:e=4,rStart:t=56,rEnd:n=4.2,turns:s=.7,a0:r=.35,steps:o=16}={}){const a=[];for(let l=0;l<e;l++){const c=r+l/e*Math.PI*2,u=[];for(let h=0;h<=o;h++){const f=h/o,p=t*(1-f)+n*f,g=c+f*s*Math.PI*2;u.push([i[0]+Math.cos(g)*p,i[1]+Math.sin(g)*p])}a.push(u)}return a}const u_={xc:i=>3*Math.sin(i*.06),w:4.2,bridgeZ:-20,top:50,wall:27},h_=[[[-15,56],[-17,40],[-13,24],[-17,8],[-14,-6],[-12,-18],[-11,-26],[-10,-33],[-10,-38.4]],[[17,56],[19,40],[15,24],[18,8],[15,-6],[12,-16],[5,-20],[-2,-20.5],[-8,-22],[-11,-26],[-10,-33],[-10,-38.4]]],f_=[90,210,330].map(i=>i*Math.PI/180),ga=11,d_=()=>{const i=[];for(let t=0;t<=48;t++){const n=t/48*Math.PI*2;i.push([Math.cos(n)*ga,Math.sin(n)*ga])}const e=f_.map(t=>[ga,20,30,40,50].map((n,s)=>{const r=t+Math.sin(n*.25+s)*.04;return[Math.cos(r)*n,Math.sin(r)*n]}));return[i,...e]},qs=[{id:"tak",name:"Tåkeøya",blurb:"Palmer, turkis lagune og en joint som har glødd i hundre år.",seed:1,radius:46,edgeAmp:[4.5,2.6,1.5],lighthouse:[0,0],paths:Zh([0,0]),plateausAuto:[{r:6.5,h:4.2},{r:5.5,h:3.4},{r:5,h:3}],waterfall:{poolR:1.9,basinR:2.7},palette:{sand:"#d8bb88",grass:"#6c9f4a",grass2:"#4d8340",path:"#b49c74",deep:"#cdb987",pathMix:.35},water:{shallow:"#a6e6cc",mid:"#45c2ae",deep:"#1f9aa2",caustic:1},sky:{fog:"#c4d8dc",hemiSky:"#dce9ff",hemiGround:"#5a6650",hemi:1.35,sun:"#ffeccc",sunI:2.25,exposure:.92,sunDir:[14,30,10],lantern:.9,grade:{tint:[1.02,1,.965],lift:[.008,.02,.035],sat:.92,vignette:.2}},skyDusk:{fog:"#d9a48e",hemiSky:"#ffd6b0",hemiGround:"#5a4a72",hemi:1.35,sun:"#ffb27a",sunI:2.7,exposure:1.05,sunDir:[24,17,4],grade:{tint:[1.07,1,.9],lift:[.025,.008,.03],sat:1.1,vignette:.3}},trees:{beach:{palm:.75,bush:.25},inland:{palm:.25,round:.45,bush:.3},leaf:["#a2cc5c","#357238"]},rock:["#b6bab8","#7f9f52"],life:["fireflies","butterflies","birds","leaves"],balance:{hp:1.3,count:1.25,speed:1,air:.5,types:{clerk:{hp:.7},complainer:{hp:.7},tank:{hp:.65},gull:{hp:.75}},extra:null},intro:{complainer:2,drone:3,lobbyist:5,heli:6,auditor:7,balloon:8}},{id:"vinter",name:"Vinterfjorden",blurb:"Snø, nordlys og isflak. Forbudsdirektoratet har kledd seg varmt.",seed:2,radius:47,edgeAmp:[3.5,3.2,2.2],lighthouse:[-10,-42.5],paths:h_,shape:"fjord",fjord:u_,nes:{x:-10,z0:-20,z1:-45,r:6.5},dockTheta:-1.2,icy:!0,palette:{sand:"#b9bec4",grass:"#f1f5fa",grass2:"#dfe8f2",path:"#c2ccd8",deep:"#9aa8b4"},water:{shallow:"#b8e2ee",mid:"#5a9cc0",deep:"#1d3f66",caustic:.55},sky:{fog:"#2a3550",hemiSky:"#9fb8ff",hemiGround:"#1c2440",hemi:1.1,sun:"#b8ccff",sunI:1.5,exposure:1.15,sunDir:[-12,26,8],grade:{tint:[.96,1,1.06],lift:[0,.01,.03],sat:1.05,vignette:.32}},trees:{beach:{pine:.6,bush:.4},inland:{pine:.8,bush:.2},leaf:["#e8f0f8","#2c5a44"]},rock:["#a9b2bc","#eef4fa"],life:["snow","aurora","icefloes"],balance:{hp:1.5,count:1.2,speed:.97,types:{tank:{hp:.95},clerk:{hp:1},lobbyMini:{hp:.9}},extra:{type:"tank",n:1,gap:4,path:"both",from:3}},intro:{balloon:3,auditor:4,lobbyist:5,drone:5,heli:6,complainer:6}},{id:"vulkan",name:"Vulkanøya",blurb:"Svart sand, lava-elver og glødende stein. Her trenger ingen fyrstikker.",seed:3,radius:48,edgeAmp:[3.5,2.2,1.6],lighthouse:[0,0],dockTheta:.5,paths:Zh([0,0],{arms:3,rStart:56,rEnd:4.4,turns:.75,a0:Math.PI/6,steps:24}),lava:d_(),moat:ga,eruption:{every:60,closed:10},fog:[38,100],palette:{sand:"#3a3533",grass:"#5a6a3c",grass2:"#3f4c2e",path:"#3e3b3a",deep:"#2c2826",pathMix:.15},water:{shallow:"#5a8f90",mid:"#2c5a63",deep:"#122b35",caustic:.4},sky:{fog:"#4a2c2a",hemiSky:"#ff9a6a",hemiGround:"#2a1a1a",hemi:1.15,sun:"#ff7a40",sunI:2.3,exposure:1.1,sunDir:[20,20,6],grade:{tint:[1.05,.98,.94],lift:[.02,0,0],sat:1.08,vignette:.32}},trees:{beach:{dead:.5,bush:.5},inland:{dead:.45,palm:.2,bush:.35},leaf:["#7a9a4a","#2f4a2a"]},rock:["#2e2a2a","#5a3a2a"],life:["ash","embers"],balance:{hp:1.25,count:1.1,speed:1,air:.6,types:{lobbyist:{hp:.6},lobbyMini:{hp:.6},clerk:{hp:.72},complainer:{hp:.72},gull:{hp:.75},drone:{hp:.8}},extra:{type:"gull",n:1,gap:1.4,from:3}},intro:{complainer:2,drone:2,lobbyist:3,heli:4,auditor:5,balloon:7}}];function p_(i){const[e,t,n]=i.edgeAmp,s=i.seed;return r=>i.radius+e*Math.sin(3*r+.4*s)+t*Math.sin(7*r+1.3*s)+n*Math.sin(11*r+s)}const Jh={clerk:["complainer","lobbyist"],swarm:["complainer"],tank:["auditor","lobbyist"],gull:["drone","heli","balloon"]},Sl={clerk:22,swarm:7,tank:95,gull:16,complainer:17,lobbyist:97,auditor:112,drone:9,heli:62,balloon:150},wl={complainer:.6,lobbyist:1.8,auditor:2.2,drone:.4,heli:2.4,balloon:3.5};function m_(i,e){let t=i.seed*9301+49297;const n=()=>(t=(t*9301+49297)%233280)/233280,s=i.intro||{};return e.map((r,o)=>{const a=o+1,l=r.map(f=>({...f})),c=i.balance.extra;c&&a>=c.from&&l.push({...c,n:c.n+Math.floor((a-c.from)/2),at:5});const u=(f,p,g)=>Math.max(1,Math.round(f*Math.min(1,Sl[p]/Sl[g]))),h=(f,p)=>{f.n=u(f.n,f.type,p),f.gap=wl[p]??f.gap,f.type=p};for(const[f,p]of Object.entries(s)){if(p!==a)continue;const g=l.find(M=>{var m;return(m=Jh[M.type])==null?void 0:m.includes(f)});if(g&&g.n>=2){const M=Math.floor(g.n/2);l.push({...g,type:f,n:u(M,g.type,f),gap:wl[f]??g.gap,at:(g.at??0)+2}),g.n-=M}else g?h(g,f):l.push({type:f,n:Math.max(1,Math.min(3,Math.round(44/Sl[f]))),gap:wl[f],path:0,at:6})}for(const f of l){const p=(Jh[f.type]||[]).filter(g=>s[g]&&s[g]<a);p.length&&n()<.45&&h(f,p[Math.floor(n()*p.length)])}return l})}function go(){try{return Math.max(1,Math.min(qs.length,Number(localStorage.getItem("glod-unlocked"))||1))}catch{return 1}}function g_(i){try{i+2>go()&&localStorage.setItem("glod-unlocked",String(Math.min(qs.length,i+2)))}catch{}}function ea(i,e,{color:t,size:n,speed:s,drift:r,additive:o,area:a=46,top:l=22}){const c=new Float32Array(e*3),u=new Float32Array(e);for(let d=0;d<e;d++)c[d*3]=(Math.random()-.5)*a*2,c[d*3+1]=Math.random()*l,c[d*3+2]=(Math.random()-.5)*a*2,u[d]=Math.random()*6.28;const h=new Ot;h.setAttribute("position",new Xt(c,3));const f=document.createElement("canvas");f.width=f.height=32;const p=f.getContext("2d"),g=p.createRadialGradient(16,16,0,16,16,16);g.addColorStop(0,"rgba(255,255,255,1)"),g.addColorStop(1,"rgba(255,255,255,0)"),p.fillStyle=g,p.fillRect(0,0,32,32);const M=new Da({color:t,size:n,map:new wi(f),transparent:!0,depthWrite:!1,blending:o?Ti:ds,opacity:o?1:.85}),m=new au(h,M);return m.frustumCulled=!1,i.add(m),(d,_,b)=>{for(let x=0;x<e;x++){let C=c[x*3+1]-s*d*(.7+u[x]%1*.6);c[x*3]+=Math.sin(b*.7+u[x])*r*d,(s<0?C>l:C<0)&&(C=s<0?0:l,c[x*3]=_.x+(Math.random()-.5)*a*2,c[x*3+2]=_.z+(Math.random()-.5)*a*2),c[x*3+1]=C}h.attributes.position.needsUpdate=!0}}function v_(i,e,t,n,s=160){const r=new uu(i.map(([h,f])=>new G(h,0,f))),o=r.getLength(),a=[],l=[],c=[];for(let h=0;h<=s;h++){const f=h/s,p=r.getPointAt(f),g=r.getTangentAt(f),M=-g.z,m=g.x,d=e*(.75+.25*Math.sin(f*9));for(const _ of[-1,1]){const b=p.x+M*d*_,x=p.z+m*d*_;a.push(b,t(b,x)+n,x),l.push(f*o,(_+1)/2)}if(h<s){const _=h*2;c.push(_,_+1,_+2,_+1,_+3,_+2)}}const u=new Ot;return u.setAttribute("position",new mt(a,3)),u.setAttribute("uv",new mt(l,2)),u.setIndex(c),u.computeVertexNormals(),{geo:u,curve:r,len:o}}function x_(i,e,t,n){var M;const{heightAt:s}=e,r=[],o=[],a=[],l=[],c=[],u=t.mobile?.5:1,h=new Set(n.life);if(h.has("aurora")){const m=new sn({transparent:!0,depthWrite:!1,blending:Ti,side:cn,fog:!1,uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const[d,_,b]of[[0,-66,0],[-62,-20,Math.PI/2.4],[62,-24,-Math.PI/2.4]]){const x=new lt(new ai(150,26,96,1),m);x.position.set(d,20,_),x.rotation.y=b,i.add(x)}o.push((d,_,b)=>m.uniforms.uTime.value=b)}if(h.has("snow")&&o.push(ea(i,Math.round(900*u),{color:"#ffffff",size:.28,speed:2.2,drift:.8})),h.has("ash")&&o.push(ea(i,Math.round(500*u),{color:"#6a625e",size:.22,speed:1.2,drift:.6})),h.has("embers")&&o.push(ea(i,Math.round(160*u),{color:"#ff8a3a",size:.25,speed:-1.6,drift:1.2,additive:!0,top:10})),h.has("icefloes")){const m=[];for(let C=0;C<6e3&&m.length<70*u;C++){const E=(Math.random()-.5)*120,T=(Math.random()-.5)*120,A=.05-s(E,T);A>.15&&A<1.4&&m.every(y=>Math.hypot(y.x-E,y.z-T)>2.2)&&m.push({x:E,z:T,s:.6+Math.random()*1.1,r:Math.random()*6})}const d=new Yt(1,.9,.18,7),_=d.attributes.position;for(let C=0;C<_.count;C++){const E=Math.atan2(_.getZ(C),_.getX(C)),T=.75+.35*Math.abs(Math.sin(E*2.3+C));_.setX(C,_.getX(C)*T),_.setZ(C,_.getZ(C)*T)}d.computeVertexNormals();const b=new En(d,new $t({color:"#eaf6ff"}),Math.max(1,m.length));b.count=m.length,b.receiveShadow=!0,i.add(b);const x=new qt;o.push((C,E,T)=>{m.forEach((A,y)=>{x.position.set(A.x+Math.sin(T*.1+A.r)*.4,.08+Math.sin(T*1.1+A.r)*.03,A.z),x.rotation.set(Math.sin(T*.9+A.r)*.03,A.r+T*.02,Math.cos(T*.8+A.r)*.03),x.scale.set(A.s,1,A.s),x.updateMatrix(),b.setMatrixAt(y,x.matrix)}),b.instanceMatrix.needsUpdate=!0})}if(n.lava){const m=new sn({uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const x of n.lava){const C=v_(x,1.25,s,.07);i.add(new lt(C.geo,m));const E=[];let T=!1;for(let A=0;A<=1;A+=1.4/C.len){const y=C.curve.getPointAt(Math.min(1,A));if(e.pathDist(y.x,y.z)<2.4){T||c.push({x:y.x,z:y.z,tan:C.curve.getTangentAt(Math.min(1,A))}),T=!0;continue}T=!1,a.push({x:y.x,z:y.z,r:1.4})}for(const A of[.25,.7]){const y=C.curve.getPointAt(A),v=new mo("#ff6a2a",14,12,1.6);v.position.set(y.x,s(y.x,y.z)+1.2,y.z),i.add(v),E.push(v)}o.push((A,y,v)=>E.forEach((w,I)=>w.intensity=12+3*Math.sin(v*2.3+I)))}o.push((x,C,E)=>m.uniforms.uTime.value=E);const d=new On(3.4,.35,4.2),_=new $t({color:((M=n.rock)==null?void 0:M[0])??"#555"}),b=new Yt(2.4,2.4,.1,18);for(const x of c){const C=s(x.x,x.z)+.12,E=new lt(d,_);E.position.set(x.x,C,x.z),E.rotation.y=-Math.atan2(x.tan.z,x.tan.x),E.castShadow=E.receiveShadow=!0,i.add(E);const T=new lt(b,new zt({color:new Pe("#ff5a1a").multiplyScalar(2.2),transparent:!0,opacity:0}));T.position.set(x.x,C+.25,x.z),T.visible=!1,i.add(T);const A=new mo("#ff6a2a",0,14,1.6);A.position.set(x.x,C+1.6,x.z),i.add(A);let y=!1;l.push({x:x.x,z:x.z,get closed(){return y},setClosed(v){y=v,T.visible=v}}),o.push((v,w,I)=>{const U=y?1:0;T.material.opacity+=(U*.9-T.material.opacity)*Math.min(1,v*3),!y&&T.material.opacity<.02&&(T.visible=!1),A.intensity=T.material.opacity*(22+6*Math.sin(I*9))})}}if(n.volcano){const m=n.volcano;a.push({x:m.x,z:m.z,r:m.r*.55});const d=new lt(new Rr(m.r*.22,20),new zt({color:new Pe("#ff5a1a").multiplyScalar(2.4)}));d.rotation.x=-Math.PI/2,d.position.set(m.x,s(m.x,m.z)+.2,m.z),i.add(d);const _=new Ua(.35,0),b=[];for(let E=0;E<3e3&&b.length<50*u;E++){const T=(Math.random()-.5)*96,A=(Math.random()-.5)*96,y=s(T,A);y>.4&&e.pathDist(T,A)>2.2&&b.push({x:T,z:A,h:y,s:.5+Math.random()})}const x=new En(_,new zt({color:new Pe("#ff7a2a").multiplyScalar(1.8)}),Math.max(1,b.length));x.count=b.length;const C=new qt;b.forEach((E,T)=>{C.position.set(E.x,E.h,E.z),C.rotation.set(E.s,E.s*3,0),C.scale.set(E.s,E.s*.5,E.s),C.updateMatrix(),x.setMatrixAt(T,C.matrix)}),i.add(x)}if(n.waterfall&&n.waterfall._lvl!==void 0){const m=n.waterfall,d=m.basin[0]-m.lip[0],_=m.basin[1]-m.lip[1],b=Math.hypot(d,_),x=d/b,C=_/b,E=m._lvl-.1,T=14,A=1.25,y=[],v=[],w=[];for(let j=0;j<=T;j++){const Q=j/T,se=.35+1.5*Q*Q,Ee=E-(E-.06)*(Q*Q*.6+Q*.4);for(const Fe of[-1,1])y.push(m.lip[0]+x*se-C*A*Fe*(.85+Q*.3),Ee,m.lip[1]+C*se+x*A*Fe*(.85+Q*.3)),v.push((Fe+1)/2,Q);if(j<T){const Fe=j*2;w.push(Fe,Fe+1,Fe+2,Fe+1,Fe+3,Fe+2)}}const I=new Ot;I.setAttribute("position",new mt(y,3)),I.setAttribute("uv",new mt(v,2)),I.setIndex(w);const U=new sn({transparent:!0,depthWrite:!1,side:cn,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform float uTime; varying vec2 vUv;
        float h(float x) { return fract(sin(x * 127.1) * 43758.5); }
        void main() {
          float col = floor(vUv.x * 18.0);
          float streak = fract(vUv.y * (1.6 + h(col) * 1.2) - uTime * (1.4 + h(col + 3.0) * 0.8));
          float s = smoothstep(0.0, 0.25, streak) * (1.0 - smoothstep(0.55, 1.0, streak));
          float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
          vec3 c = mix(vec3(0.45, 0.85, 0.88), vec3(1.0), s * 0.8 + vUv.y * 0.3);
          gl_FragColor = vec4(c, (0.55 + 0.4 * s) * edge);
        }`});i.add(new lt(I,U));const P=(()=>{const j=document.createElement("canvas");j.width=j.height=128;const Q=j.getContext("2d"),se=(()=>{let Fe=9;return()=>(Fe=Fe*16807%2147483647)/2147483647})();for(let Fe=0;Fe<260;Fe++){const H=se()*Math.PI*2,Z=Math.pow(se(),.7)*58,he=1.5+se()*5*(1-Z/70);Q.fillStyle=`rgba(255,255,255,${.55+se()*.45})`,Q.beginPath(),Q.arc(64+Math.cos(H)*Z,64+Math.sin(H)*Z,he,0,Math.PI*2),Q.fill()}Q.globalCompositeOperation="destination-in";const Ee=Q.createRadialGradient(64,64,8,64,64,63);return Ee.addColorStop(0,"rgba(0,0,0,1)"),Ee.addColorStop(.6,"rgba(0,0,0,0.85)"),Ee.addColorStop(1,"rgba(0,0,0,0)"),Q.fillStyle=Ee,Q.fillRect(0,0,128,128),new wi(j)})(),N=new lt(new Rr(1.5,20),new zt({map:P,color:"#ffffff",transparent:!0,opacity:.9,depthWrite:!1}));N.rotation.x=-Math.PI/2;const B=m.lip[0]+x*1.9,W=m.lip[1]+C*1.9;N.position.set(B,.1,W),i.add(N);const V=ea(i,Math.round(60*u),{color:"#ffffff",size:.35,speed:-.9,drift:.6,area:1.4,top:2.2});o.push((j,Q,se)=>{U.uniforms.uTime.value=se,N.scale.setScalar(1+Math.sin(se*5)*.06),N.rotation.z=se*.4,N.material.opacity=.8+.12*Math.sin(se*7),V(j,{x:B,z:W},se)}),a.push({x:B,z:W,r:.9})}const f=(m,d)=>a.some(_=>(_.x-m)**2+(_.z-d)**2<_.r*_.r);let p=0;return{colliders:r,update:(m,d=e.lighthouse.pos)=>{const _=Math.min(.05,Math.max(0,m-p));p=m;for(const b of o)b(_,d,m)},blocks:f,blockers:a,bridges:l}}function gd(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ot;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0;const h=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Qh(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const p=[];for(let M=0;M<o[u].length;++M)p.push(o[u][M][f]);const g=Qh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Qh(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Xt(o,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let f=0,p=u.count;f<p;f++)for(let g=0;g<t;g++){const M=u.getComponent(f,g);a.setComponent(f+h,g,M)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function vd(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let o=0;const a=Object.keys(i.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let _=0,b=a.length;_<b;_++){const x=a[_],C=i.attributes[x];l[x]=new C.constructor(new C.array.constructor(C.count*C.itemSize),C.itemSize,C.normalized);const E=i.morphAttributes[x];E&&(c[x]||(c[x]=[]),E.forEach((T,A)=>{const y=new T.array.constructor(T.count*T.itemSize);c[x][A]=new T.constructor(y,T.itemSize,T.normalized)}))}const p=e*.5,g=Math.log10(1/e),M=Math.pow(10,g),m=p*M;for(let _=0;_<r;_++){const b=n?n.getX(_):_;let x="";for(let C=0,E=a.length;C<E;C++){const T=a[C],A=i.getAttribute(T),y=A.itemSize;for(let v=0;v<y;v++)x+=`${~~(A[h[v]](b)*M+m)},`}if(x in t)u.push(t[x]);else{for(let C=0,E=a.length;C<E;C++){const T=a[C],A=i.getAttribute(T),y=i.morphAttributes[T],v=A.itemSize,w=l[T],I=c[T];for(let U=0;U<v;U++){const P=h[U],N=f[U];if(w[N](o,A[P](b)),y)for(let B=0,W=y.length;B<W;B++)I[B][N](o,y[B][P](b))}}t[x]=o,u.push(o),o++}}const d=i.clone();for(const _ in i.attributes){const b=l[_];if(d.setAttribute(_,new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)),_ in c)for(let x=0;x<c[_].length;x++){const C=c[_][x];d.morphAttributes[_][x]=new C.constructor(C.array.slice(0,o*C.itemSize),C.itemSize,C.normalized)}}return d.setIndex(u),d}const pt=(i,e={})=>new $t({color:i,flatShading:!0,...e}),hr=(i,e)=>new zt({color:new Pe(i).multiplyScalar(e)}),fe={coat:pt("#f2c23c"),coatDark:pt("#c99a22"),skin:pt("#f1c7a0"),beanieG:pt("#3f8f4a"),beanieY:pt("#f2c94c"),beanieR:pt("#d4553a"),boot:pt("#3a2c22"),eyeW:new zt({color:"#ffffff"}),eyeB:new zt({color:"#1c1820"}),suit:pt("#6b6f78"),suitDark:pt("#3c4150"),suitNavy:pt("#2c3a5c"),shirt:pt("#f4f1ea"),tie:pt("#b8322a"),paper:pt("#fbfaf4"),stampInk:pt("#a8233a"),woodLight:pt("#c49360"),glasses:pt("#222428"),binderR:pt("#c94f3f"),binderB:pt("#3f6fc9"),binderY:pt("#e6b93f"),gull:pt("#f4f2ee"),gullWing:pt("#c4ccd4"),gullTip:pt("#2e3038"),gullBand:pt("#8e98a4"),beak:pt("#f0a43a"),megaRed:pt("#d8453a"),mouth:new zt({color:"#4a2a2a"}),smile:new zt({color:"#c8485a"}),wood:pt("#9a6a42"),woodDark:pt("#6e4a2c"),iron:pt("#55585e"),speaker:pt("#2a2a30"),cone:pt("#4a4a52"),rasG:pt("#3f9a4a"),rasY:pt("#f2c94c"),rasR:pt("#d4553a"),chipsBag:pt("#f2b632"),chipsRed:pt("#d8453a"),chip:pt("#f0c860"),ringMat:new $t({color:"#f1efe9",transparent:!0,opacity:.8}),ember:hr("#ff9a3a",2.4),emberCore:hr("#fff1c2",2),rolling:pt("#5a9a5a"),rollingPaper:pt("#fffdf5"),lantern:hr("#ffd27a",2.2),hpBg:new zt({color:"#2a2020",depthTest:!1,transparent:!0,opacity:.6}),hpFg:new zt({color:"#d8553a",depthTest:!1}),levelPip:hr("#9fffb0",1.6),bottle:new $t({color:"#7fd6ff",transparent:!0,opacity:.8}),bubble:new $t({color:"#dff6ff",transparent:!0,opacity:.45,emissive:"#5a7a9a"}),kiteSail:new $t({color:"#ff7a5a",side:cn}),rope:pt("#d9c8a0"),ledger:pt("#2f5a3a"),track:pt("#8a4ac8"),briefcase:pt("#6a3a1a"),brass:pt("#d8b040"),rotor:new zt({color:"#cfd6dc",transparent:!0,opacity:.45}),redLight:hr("#ff3030",2),balloonA:pt("#e8e4d8"),balloonB:pt("#c8463a"),heli:pt("#f2c23c"),glassDark:pt("#2a3440"),spot:new zt({color:"#fff6c8",transparent:!0,opacity:.18,blending:Ti,depthWrite:!1,side:cn}),pizza:pt("#e8603a"),pizzaCrust:pt("#e8b866"),lampGlass:new $t({color:"#ff8a5a",transparent:!0,opacity:.45,emissive:"#6a1a10"}),lampBlob:hr("#ff9a2a",2.2)},ge={sphere:new Qn(1,10,8),lowSphere:new Ds(1,1),capsule:new Ia(.5,.7,3,8),cyl:new Yt(1,1,1,10),cone:new Jn(1,1,10),box:new On(1,1,1),dome:new Qn(1,10,6,0,Math.PI*2,0,Math.PI/2),ember:new Pr(.22,0),leaf:new Pr(.3,0),plane:new ai(1,1),smileArc:new _r(.06,.018,4,10,Math.PI),ring:new _r(.32,.12,6,14),bubbleRing:new _r(.18,.025,4,12)};function ve(i,e,t,n,s,r=0,o=0,a=0,l=!0){const c=new lt(i,e);return c.scale.set(t,n,s),c.position.set(r,o,a),c.castShadow=l,c}function pu(i,e,t,n,s=.12,r=.18){const o=new bt;o.position.set(e,t,n),o.userData.isEyes=!0;for(const a of[-1,1])o.add(ve(ge.sphere,fe.eyeW,s,s,s,a*r,0,0,!1)),o.add(ve(ge.sphere,fe.eyeB,s*.55,s*.55,s*.55,a*r,.01,-s*.7,!1));return i.add(o),o}const xd=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,31);return t.addColorStop(0,"rgba(0,0,0,0.55)"),t.addColorStop(.6,"rgba(0,0,0,0.25)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new wi(i)})(),__=new zt({map:xd,transparent:!0,depthWrite:!1,fog:!1}),_d=new ai(1,1).rotateX(-Math.PI/2);function mu(i,e){const t=new lt(_d,__);t.scale.set(e*2,1,e*2),t.position.y=.04,t.renderOrder=1,i.add(t),i.userData.blob=t}function M_(i,e,t=.8){const n=new zt({map:xd,color:"#000000",transparent:!0,opacity:t,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),s=new En(_d,n,Math.max(1,e.length));s.count=e.length;const r=new qt;return e.forEach((o,a)=>{r.position.set(o.x,o.y+.04,o.z),r.scale.set(o.r*2,1,o.r*2),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.renderOrder=1,i.add(s),s}function Md(i){const e=[];i.traverse(t=>{t.userData.isEyes&&e.push(t)}),i.userData.eyes=e}function yd(i,e,t,n=1){const s=ve(ge.box,fe.mouth,.14*n,.025*n,.02,0,e,t,!1);s.rotation.z=.15;const r=ve(ge.smileArc,fe.smile,n,n,n,0,e+.03*n,t,!1);return r.rotation.z=Math.PI,r.visible=!1,i.add(s,r),{sour:s,smile:r}}const y_=(()=>{const i=new Yt(.07,.05,.55,8);return i.rotateZ(Math.PI/2),i})();function bd(){const i=new bt,e=ve(ge.box,fe.rollingPaper,.55,.012,.26,0,0,0,!1),t=ve(ge.lowSphere,fe.rasG,.22,.06,.07,0,.03,0,!1),n=new lt(y_,fe.rollingPaper),s=ve(ge.cone,fe.rollingPaper,.05,.1,.05,.32,0,0,!1);return s.rotation.z=-Math.PI/2,n.add(s),i.add(e,t,n),i.userData={paper:e,herb:t,joint:n,tip:s},gu(i,0),i}function gu(i,e){const{paper:t,herb:n,joint:s,tip:r}=i.userData,o=yt.smoothstep,a=o(e,.08,.45),l=o(e,.5,.85);t.visible=l<.98,t.scale.set(.55,.012,.26*(1-.7*l)),n.visible=a>.01&&l<.98,n.scale.set(.22*a+.001,.06*a+.001,.07*(1-.5*l)+.001),s.visible=l>.02,s.scale.set(1,.35+.65*l,.35+.65*l),r.visible=e>.88}function Sd(){const i=new bt,e=new bt;i.add(e),e.add(ve(ge.capsule,fe.coat,.75,.75,.7,0,.75,0)),e.add(ve(ge.cyl,fe.coatDark,.4,.06,.38,0,.62,0));const t=new bt;t.position.y=1.62,t.scale.setScalar(1.22),t.add(ve(ge.sphere,fe.skin,.33,.32,.32)),t.add(ve(ge.cyl,fe.beanieG,.35,.1,.35,0,.14,0)),t.add(ve(ge.cyl,fe.beanieY,.31,.1,.31,0,.24,0)),t.add(ve(ge.dome,fe.beanieR,.27,.22,.27,0,.29,0)),t.add(ve(ge.sphere,fe.beanieY,.08,.08,.08,0,.52,0)),pu(t,0,.02,-.26,.07,.12);const n=yd(t,-.12,-.3,.8);n.sour.visible=!1,n.smile.visible=!0,e.add(t);const s=[-1,1].map(h=>{const f=ve(ge.capsule,fe.boot,.24,.32,.24,h*.18,.2,0);return e.add(f),f}),r=new bt;r.position.set(.48,1,-.1),r.add(ve(ge.box,fe.iron,.2,.28,.2,0,-.25,0)),r.add(ve(ge.sphere,fe.lantern,.1,.13,.1,0,-.25,0,!1)),e.add(r);const o=new bt;o.position.set(-.46,1.08,0),o.add(ve(ge.capsule,fe.coat,.16,.34,.16,0,-.28,0)),o.add(ve(ge.sphere,fe.skin,.1,.1,.1,0,-.52,0)),e.add(o);const a=new bt;a.add(ve(ge.box,fe.rolling,.7,.12,.42,0,0,0,!1)),a.add(ve(ge.box,fe.rollingPaper,.6,.08,.36,.06,.08,0,!1)),a.add(ve(ge.leaf,fe.rasG,.35,.05,.35,-.12,.07,0,!1)),a.position.y=2.35,a.visible=!1,i.add(a);const l=new bt;l.position.y=2;for(let h=0;h<3;h++)l.add(ve(ge.ember,fe.emberCore,.6,.6,.6,Math.cos(h*2.1)*.45,0,Math.sin(h*2.1)*.45,!1));l.visible=!1,i.add(l);const c=new bt;c.position.set(.46,1.08,0),c.add(ve(ge.capsule,fe.coat,.16,.34,.16,0,-.28,0)),c.add(ve(ge.sphere,fe.skin,.1,.1,.1,0,-.52,0)),c.visible=!1,e.add(c);const u=bd();return u.position.set(0,1,-.62),u.scale.setScalar(1.6),u.visible=!1,e.add(u),mu(i,.62),i.userData={body:e,legs:s,head:t,lanternArm:r,armL:o,armR:c,roll:u,carried:a,stars:l,blob:i.userData.blob},Md(i),i}function Ci(i,e){const t=new bt;t.position.y=e;const n=new lt(ge.plane,fe.hpBg);n.scale.set(1,.14,1),n.renderOrder=10;const s=new lt(ge.plane,fe.hpFg.clone());s.scale.set(.96,.09,1),s.position.z=.001,s.renderOrder=11,t.add(n,s),t.visible=!1,i.add(t),i.userData.hpBar=t,i.userData.hpFg=s}function fr(i,{scale:e=1,suit:t=fe.suit,wide:n=1}={}){const s=e;i.add(ve(ge.capsule,t,.7*s*n,.62*s,.6*s,0,.72*s,0)),i.add(ve(ge.box,fe.shirt,.22*s,.4*s,.05,0,.98*s,-.27*s*Math.min(n,1.2),!1)),i.add(ve(ge.box,fe.tie,.07*s,.32*s,.05,0,.94*s,-.29*s*Math.min(n,1.2),!1));for(const a of[-1,1])i.add(ve(ge.capsule,fe.suitDark,.2*s,.25*s,.2*s,a*.16*s,.17*s,0));const r=new bt;r.position.y=1.5*s,r.add(ve(ge.sphere,fe.skin,.3*s,.3*s,.3*s)),r.add(ve(ge.dome,fe.suitDark,.31*s,.14*s,.31*s,0,.12*s,.02)),pu(r,0,.03*s,-.25*s,.065*s,.11*s);const o=yd(r,-.12*s,-.28*s,s);return i.add(r),{head:r,mouth:o}}function b_(i){const e=new bt,t=new bt;if(e.add(t),e.userData.body=t,i==="clerk"){const{head:n,mouth:s}=fr(t);for(const a of[-1,1])n.add(ve(ge.box,fe.glasses,.11,.07,.02,a*.11,.03,-.3,!1));n.add(ve(ge.box,fe.glasses,.08,.015,.02,0,.04,-.3,!1));const r=new bt;r.position.set(.48,.9,-.15),r.add(ve(ge.cyl,fe.woodLight,.06,.25,.06,0,.12,0)),r.add(ve(ge.sphere,fe.woodLight,.09,.09,.09,0,.27,0)),r.add(ve(ge.box,fe.stampInk,.22,.08,.16,0,-.02,0)),t.add(r);const o=ve(ge.box,fe.paper,.3,.38,.02,-.46,.92,-.2);o.rotation.y=.4,t.add(o),e.userData.mouth=s,e.userData.arm=r,Ci(e,2.15)}else if(i==="tank"){const{mouth:n}=fr(t,{scale:1.25,suit:fe.suitNavy,wide:1.45}),s=new bt;s.position.set(0,0,-.95),s.add(ve(ge.box,fe.woodDark,.75,1.05,.45,0,.52,0));const r=ve(ge.box,fe.woodLight,.9,.08,.6,0,1.1,.04);r.rotation.x=.35,s.add(r),s.add(ve(ge.cyl,fe.iron,.02,.45,.02,.18,1.3,.1,!1)),s.add(ve(ge.sphere,fe.speaker,.05,.05,.05,.18,1.52,.04,!1)),t.add(s),e.userData.mouth=n,Ci(e,2.6)}else if(i==="gull"){t.add(ve(ge.lowSphere,fe.gull,.36,.3,.6,0,0,0)),t.add(ve(ge.cone,fe.beak,.08,.3,.08,0,0,-.65).rotateX(-Math.PI/2));const n=ve(ge.cone,fe.megaRed,.2,.5,.2,0,-.22,-.65);n.rotation.x=Math.PI/2,t.add(n),t.add(ve(ge.cyl,fe.paper,.21,.06,.21,0,-.22,-.89).rotateX(Math.PI/2));const s=[-1,1].map(r=>{const o=new bt;o.position.set(r*.25,.05,0),o.add(ve(ge.box,fe.gullWing,.6,.06,.42,r*.3,0,0)),o.add(ve(ge.box,fe.gullBand,.58,.065,.1,r*.31,0,.17));const a=ve(ge.box,fe.gullTip,.42,.055,.3,r*.78,0,.04);return a.rotation.y=r*.18,o.add(a),t.add(o),o});e.userData.wings=s,pu(t,0,.12,-.42,.06,.13),e.userData.mouth=null,Ci(e,.8)}else if(i==="swarm"){const{mouth:n}=fr(t,{scale:.6}),s=[fe.binderR,fe.binderB,fe.binderY],r=ve(ge.box,s[Math.floor(Math.random()*3)],.08,.34,.28,.32,.55,-.08);t.add(r),e.userData.mouth=n,Ci(e,1.3)}else if(i==="auditor"){const{head:n,mouth:s}=fr(t,{scale:1.1,suit:fe.suitDark});for(const o of[-1,1])n.add(ve(ge.box,fe.glasses,.12,.08,.02,o*.12,.03,-.33,!1));const r=new bt;r.position.set(0,.95,-.55),r.add(ve(ge.box,fe.ledger,1.05,1.2,.14)),r.add(ve(ge.box,fe.paper,.95,1.1,.1,0,0,.03,!1)),r.add(ve(ge.box,fe.brass,.3,.3,.02,0,.15,-.08,!1)),t.add(r),e.userData.mouth=s,e.userData.shield=r,Ci(e,2.3)}else if(i==="complainer"){const{head:n,mouth:s}=fr(t,{scale:.85,suit:fe.track});n.add(ve(ge.cyl,fe.rasR,.27,.06,.27,0,.1,0,!1));const r=new bt;r.position.set(.35,1.2,-.1),r.add(ve(ge.cyl,fe.track,.06,.45,.06,0,.2,0)),r.add(ve(ge.box,fe.paper,.32,.42,.02,0,.55,0)),t.add(r),e.userData.mouth=s,e.userData.arm=r,Ci(e,1.8)}else if(i==="lobbyist"||i==="lobbyMini"){const n=i==="lobbyMini",{mouth:s}=fr(t,{scale:n?.55:1.05,suit:fe.suitNavy});t.add(ve(ge.box,fe.brass,.08,.3,.05,0,n?.52:.99,n?-.17:-.32,!1)),t.add(ve(ge.box,fe.briefcase,n?.28:.5,n?.22:.36,.12,n?.3:.55,n?.3:.55,0)),e.userData.mouth=s,Ci(e,n?1.2:2.1)}else if(i==="drone"){t.add(ve(ge.box,fe.iron,.42,.14,.42));const n=[];for(const[s,r]of[[1,1],[-1,1],[1,-1],[-1,-1]]){t.add(ve(ge.box,fe.speaker,.5,.04,.05,s*.22,0,r*.22).rotateY(s*r>0?Math.PI/4:-Math.PI/4));const o=ve(ge.cyl,fe.rotor,.2,.01,.2,s*.4,.08,r*.4,!1);t.add(o),n.push(o)}t.add(ve(ge.sphere,fe.redLight,.07,.07,.07,0,-.06,-.22,!1)),e.userData.rotors=n,e.userData.mouth=null,Ci(e,.6)}else if(i==="balloon"){t.add(ve(ge.sphere,fe.balloonA,1.1,1.3,1.1,0,1.6,0));for(let n=0;n<4;n++)t.add(ve(ge.cyl,fe.balloonB,1.12-Math.abs(n-1.5)*.18,.18,1.12-Math.abs(n-1.5)*.18,0,1+n*.42,0,!1));t.add(ve(ge.box,fe.woodLight,.6,.4,.6,0,-.1,0)),t.add(ve(ge.sphere,fe.skin,.2,.2,.2,0,.25,0)),t.add(ve(ge.dome,fe.suitDark,.21,.1,.21,0,.32,0,!1));for(const[n,s]of[[1,1],[-1,1],[1,-1],[-1,-1]])t.add(ve(ge.cyl,fe.rope,.015,.8,.015,n*.28,.45,s*.28,!1));e.userData.mouth=null,Ci(e,3.3)}else if(i==="heli"){t.add(ve(ge.capsule,fe.heli,.6,.55,.9,0,0,0).rotateX(Math.PI/2)),t.add(ve(ge.sphere,fe.glassDark,.28,.22,.24,0,.05,-.38,!1)),t.add(ve(ge.box,fe.heli,.12,.12,1.1,0,.05,.85));const n=ve(ge.box,fe.speaker,1.9,.02,.12,0,.4,0,!1),s=ve(ge.box,fe.speaker,.04,.5,.08,.08,.1,1.38,!1);t.add(n,s);const r=new lt(new Jn(1.2,4.5,14,1,!0),fe.spot);r.position.set(0,-2.3,-.2),r.visible=!1,t.add(r),e.userData.rotor=n,e.userData.tail=s,e.userData.beam=r,e.userData.mouth=null,Ci(e,1)}return mu(e,{tank:.85,auditor:.7,balloon:.9,heli:.6,swarm:.35,lobbyMini:.35,drone:.35,gull:.45}[i]??.55),Md(e),e}function S_(i){const e=i.mesh.userData.mouth;e&&(e.sour.visible=!1,e.smile.visible=!0),i.mesh.userData.hpBar.visible=!1}function w_(i){const e=new bt,t=new bt;if(e.add(t),i==="ring"){e.add(ve(ge.box,fe.wood,.9,.5,.9,0,.25,0)),t.position.y=.95;const o=ve(ge.cyl,fe.iron,.32,1.1,.32,0,0,-.15);o.rotation.x=Math.PI/2-.15,t.add(o),t.add(ve(ge.cyl,fe.woodDark,.38,.12,.38,0,.08,-.7).rotateX(Math.PI/2-.15)),t.add(ve(ge.sphere,fe.iron,.42,.42,.42,0,0,.42)),t.add(ve(ge.sphere,fe.ember,.12,.12,.12,0,.1,.8,!1))}else if(i==="chips"){e.add(ve(ge.cyl,fe.iron,.7,.3,.7,0,.15,0)),t.position.y=.3;const o=ve(ge.box,fe.chipsBag,.95,1.1,.6,0,.6,0);o.rotation.x=-.35,t.add(o),t.add(ve(ge.box,fe.chipsRed,.97,.3,.62,0,.55,0).rotateX(-.35));for(let a=0;a<5;a++)t.add(ve(ge.leaf,fe.chip,.3,.08,.3,(a-2)*.17,1.2,-.3-a%2*.1,!1))}else if(i==="speaker"){const o=new bt;o.add(ve(ge.box,fe.speaker,1,1.5,.75,0,.75,0)),o.add(ve(ge.box,fe.rasG,1.02,.12,.77,0,1.38,0,!1)),o.add(ve(ge.box,fe.rasY,1.02,.12,.77,0,1.26,0,!1)),o.add(ve(ge.box,fe.rasR,1.02,.12,.77,0,1.14,0,!1));const a=[];for(const[l,c]of[[.85,.33],[.35,.2]]){const u=ve(ge.cyl,fe.cone,c,.08,c,0,l,-.38,!1);u.rotation.x=Math.PI/2,o.add(u),a.push(u)}t.add(o),e.userData.woofers=a}else if(i==="bubble"){e.add(ve(ge.cyl,fe.speaker,.5,.25,.5,0,.12,0)),t.position.y=.3,t.add(ve(ge.cyl,fe.bottle,.36,1,.36,0,.5,0)),t.add(ve(ge.cyl,fe.rasR,.22,.2,.22,0,1.08,0));const o=ve(ge.cyl,fe.wood,.03,.8,.03,0,1.4,-.2);o.rotation.x=.5,t.add(o),t.add(ve(ge.bubbleRing,fe.rasY,1,1,1,0,1.75,-.42,!1).rotateX(.5));for(let a=0;a<3;a++)t.add(ve(ge.sphere,fe.bubble,.14+a*.04,.14+a*.04,.14+a*.04,.3-a*.25,1.7+a*.3,-.7-a*.15,!1))}else if(i==="kite"){for(let a=0;a<3;a++){const l=a/3*Math.PI*2,c=ve(ge.cyl,fe.wood,.07,1.6,.07,Math.cos(l)*.45,.7,Math.sin(l)*.45);c.rotation.set(Math.sin(l)*.28,0,-Math.cos(l)*.28),e.add(c)}t.position.y=1.55,t.add(ve(ge.cyl,fe.iron,.22,.3,.22,0,0,0).rotateZ(Math.PI/2));const o=Ad();o.position.set(0,.7,0),o.scale.setScalar(.8),t.add(o),e.userData.kite=o}else if(i==="pizza"){e.add(ve(ge.box,fe.wood,1.2,.35,.9,0,.18,0));for(const a of[-1,1])e.add(ve(ge.box,fe.woodDark,.12,.9,.12,a*.45,.65,0));t.position.y=1;const o=new bt;o.add(ve(ge.box,fe.woodLight,.12,.12,1.5,0,0,-.4)),o.add(ve(ge.cyl,fe.pizzaCrust,.32,.06,.32,0,.08,-1.1)),o.add(ve(ge.cyl,fe.pizza,.27,.03,.27,0,.12,-1.1,!1)),o.rotation.x=-.35,t.add(o),e.userData.arm=o}else if(i==="lamp"){e.add(ve(ge.cone,fe.brass,.55,.7,.55,0,.35,0)),t.position.y=.7,t.add(ve(ge.capsule,fe.lampGlass,.75,.9,.75,0,.75,0,!1));const o=[];for(let a=0;a<3;a++){const l=ve(ge.sphere,fe.lampBlob,.16,.2,.16,0,.5+a*.3,0,!1);t.add(l),o.push(l)}t.add(ve(ge.cone,fe.brass,.3,.35,.3,0,1.55,0)),e.userData.blobs=o}const n=[];for(let o=0;o<5;o++){const a=ve(ge.leaf,fe.levelPip,.45,.1,.45,Math.cos(o*1.2566)*.95,.15,Math.sin(o*1.2566)*.95,!1);a.visible=o===0,e.add(a),n.push(a)}const s=new xs(1.45,1.7,40,1,0,Math.PI*2);s.rotateX(-Math.PI/2);const r=new lt(s,new zt({color:"#9fffb0",transparent:!0,opacity:.8,depthWrite:!1}));return r.position.y=.06,r.visible=!1,e.add(r),e.traverse(o=>{o.isMesh&&o!==r&&o.material!==fe.levelPip&&(o.castShadow=!0)}),mu(e,1),e.userData.head=t,e.userData.pips=n,e.userData.ring=r,e}function vu(i,e){i.mesh.userData.pips.forEach((t,n)=>t.visible=n<e),i.mesh.scale.setScalar(1+(e-1)*.08)}function Si(i,e){const t=i.mesh.userData.ring;if(t.visible=e>0,e<=0)return;t.geometry.dispose();const n=new xs(1.45,1.7,40,1,0,Math.PI*2*e);n.rotateX(-Math.PI/2),t.geometry=n}function wd(){const i=new bt;return i.add(ve(ge.ember,fe.ember,1,1.3,1,0,0,0,!1)),i.add(ve(ge.ember,fe.emberCore,.5,.7,.5,0,0,0,!1)),i}function E_(){const i=new lt(ge.ring,fe.ringMat);return i.castShadow=!1,i}function Ed(){const i=new bt;return i.add(ve(ge.box,fe.chipsBag,.32,.4,.14,0,0,0,!0)),i.add(ve(ge.box,fe.chipsRed,.33,.12,.15,0,.02,0,!1)),i}function Td(){const i=new _r(1,.08,4,32);return i.rotateX(Math.PI/2),new lt(i,new zt({color:"#c8ffd0",transparent:!0,opacity:.7,depthWrite:!1}))}let ta=null;function T_(){if(ta)return ta;const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d");["#d8453a","#f2c94c","#d8453a","#f2c94c","#3f9a4a","#f2c94c","#d8453a","#f2c94c"].forEach((n,s)=>{e.fillStyle=n,e.fillRect(0,s*8,64,8)});const t=new wi(i);return t.colorSpace=wn,t.wrapS=t.wrapT=zi,t.repeat.set(1,1.4),t.magFilter=Tn,ta=new $t({map:t,flatShading:!0}),ta}function Ad(){const i=new bt,e=new od([new Ae(0,.55),new Ae(.38,0),new Ae(0,-.75),new Ae(-.38,0)]),t=new fu(e,{depth:.035,bevelEnabled:!1});t.translate(0,0,-.0175);const n=new lt(t,T_());n.rotation.x=-Math.PI/2.4,n.castShadow=!0,i.add(n);const s=ve(ge.box,fe.woodDark,.025,1.3,.025,0,-.1,.03,!1),r=ve(ge.box,fe.woodDark,.76,.025,.025,0,0,.03,!1);n.add(s,r);const o=new bt;o.position.set(0,-.68,0),n.add(o);const a=[fe.rasR,fe.rasY,fe.rasG,fe.rasR,fe.rasY];let l=o;const c=[];for(let u=0;u<a.length;u++){const h=new bt;h.position.y=u?-.2:0,h.add(ve(ge.box,fe.rope,.015,.2,.015,0,-.1,0,!1));const f=new bt;f.position.y=-.2;for(const p of[-1,1]){const g=ve(ge.cone,a[u],.05,.1,.03,p*.05,0,0,!1);g.rotation.z=p*Math.PI/2,f.add(g)}h.add(f),l.add(h),l=h,c.push(h)}return i.userData.tailSegs=c,i}function Cd(){return ve(ge.sphere,fe.bubble,.28,.28,.28,0,0,0,!1)}function A_(){const i=new bt;return i.add(ve(ge.cyl,fe.pizzaCrust,.3,.06,.3,0,0,0,!0)),i.add(ve(ge.cyl,fe.pizza,.25,.03,.25,0,.04,0,!1)),i}const Dr=20;function Kn(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function C_(i){const e=new uu(i.map(([s,r])=>new G(s,0,r)),!1,"catmullrom",.5),t=e.getLength(),n=e.getSpacedPoints(400);return{curve:e,length:t,samples:n}}function R_(i,e,t,n,s){const o=new On(1,1,1,5,5,5),a=o.attributes.position,l=new G,c=new G,u=i/2,h=e/2,f=t/2,p=Math.min(n,u,h,f)*.98,g=s()*10,M=(s()-.5)*.12;for(let d=0;d<a.count;d++){l.set(a.getX(d)*i,a.getY(d)*e,a.getZ(d)*t),c.set(yt.clamp(l.x,-u+p,u-p),yt.clamp(l.y,-h+p,h-p),yt.clamp(l.z,-f+p,f-p)),l.sub(c);const _=l.length();_>0&&l.multiplyScalar(p/_),l.add(c);const b=1+.035*Math.sin(l.x*4.1+g)*Math.sin(l.z*3.7-g)+.025*Math.sin(l.y*6+g*2);l.x*=b,l.z*=b,l.y+=l.x*M,a.setXYZ(d,l.x,l.y,l.z)}o.deleteAttribute("normal"),o.deleteAttribute("uv");const m=vd(o);return m.computeVertexNormals(),m}function P_(i,e,t,n){const s=new Pe(e),r=new Pe(t),o=new Pe,a=[[[2.3,.85,1.9,0,0,0],[1.6,.7,1.4,.2,-.1,.35]],[[1.5,1.5,1.4,-.35,.1,.1],[1.4,.8,1.3,.75,-.2,-.3],[.9,.6,.85,-.3,.05,.6]],[[2.4,.7,2,0,0,.2],[1.8,.65,1.5,-.15,.15,-.25],[1.1,.55,1,.2,-.1,.5]]][n%3],l=[];let c=0,u=0;a.forEach(([d,_,b,x,C,E],T)=>{const A=.88+i()*.24,y=R_(d*A,_*(.9+i()*.2),b*A,Math.min(d,_,b)*.28,i);y.rotateY(E+(i()-.5)*.3);const v=n%3===1&&T===1?0:c;y.translate(x,v+_/2,C),n%3===1&&T===1||(c=v+_*.92),u=Math.max(u,v+_),l.push(y)});const h=gd(l),f=h.attributes.position,p=h.attributes.normal,g=[],M=.95+i()*.1,m=i()*10;for(let d=0;d<f.count;d++){const _=f.getX(d),b=f.getY(d),x=f.getZ(d);o.copy(s).multiplyScalar(M*(.72+.28*yt.smoothstep(b,0,.9))*(p.getY(d)<-.3?.8:1));const C=Math.sin(_*2.3+m)*Math.sin(x*2.7-m)+.5*Math.sin(_*5.1-x*4.3+m),E=yt.smoothstep(p.getY(d),.6,.9)*yt.smoothstep(b,u-.3,u-.08)*yt.smoothstep(C,-.55,0);o.lerp(r,E),g.push(o.r,o.g,o.b)}return h.setAttribute("color",new mt(g,3)),h}function ef(i,e,t,n,s,r,o=12,a={}){const l=a.dressed?.3:1,c=new Yt(e,t,n,o,3,!0),u=new xs(.001,e,o,4);u.rotateX(-Math.PI/2),u.translate(0,n/2,0);const h=gd([c,u]),f=h.attributes.position,p=i()*10;for(let E=0;E<f.count;E++){const T=f.getX(E),A=f.getY(E),y=f.getZ(E),v=Math.hypot(T,y);if(v<1e-4)continue;const w=Math.atan2(y,T);let I=1+l*(.05*Math.sin(w*3+p)+.035*Math.sin(w*7-p*2)+.025*Math.sin(A*9+w*4)),U=A;A>n/2-1e-4&&v>e*.97&&(I*=.93,U-=.08),f.setXYZ(E,T*I,U,y*I)}h.deleteAttribute("normal"),h.deleteAttribute("uv");const g=vd(h);g.computeVertexNormals(),g.translate(0,n/2,0);const M=new Pe(s),m=new Pe(r),d=new Pe,_=[],b=new Pe("#ece3cc"),x=g.attributes.position,C=g.attributes.normal;for(let E=0;E<x.count;E++){const T=x.getX(E),A=x.getY(E),y=x.getZ(E),v=Math.atan2(y,T),w=Math.hypot(T,y);if(d.copy(M).multiplyScalar(.55+.45*yt.smoothstep(A,0,n*.9)),a.dressed){const P=yt.smoothstep(C.getY(E),.75,.95)*yt.smoothstep(A,n-.15,n-.08),N=1-yt.smoothstep(Math.abs(w-e*.72),.04,.1);d.lerp(b,P*(1-.75*N)),d.multiplyScalar(1-.45*N*P),_.push(d.r,d.g,d.b);continue}const I=Math.sin(T*1.9+p)*Math.sin(y*2.3-p)+.5*Math.sin(v*5+p)+.3*Math.sin(w*4),U=yt.smoothstep(A,n-.25,n-.05)*yt.smoothstep(I,0,.5)*yt.smoothstep(C.getY(E),.2,.7);d.lerp(m,U),_.push(d.r,d.g,d.b)}return g.setAttribute("color",new mt(_,3)),g}function tf(i,e=.55){const t=document.createElement("canvas");t.width=t.height=256;const n=t.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,256,256);const s=Kn(4242);for(let l=0;l<90;l++){const c=225+s()*30|0;n.fillStyle=`rgba(${c},${c},${c},0.5)`,n.beginPath(),n.ellipse(s()*256,s()*256,8+s()*22,4+s()*10,s()*3,0,Math.PI*2),n.fill()}n.lineCap="round",n.lineJoin="round";const r=(l,c,u,h,f)=>{n.lineWidth=f,n.strokeStyle="rgba(46,44,50,0.85)",n.beginPath(),n.moveTo(l,c);for(let p=0;p<h;p++)u+=(s()-.5)*.9,l+=Math.cos(u)*9,c+=Math.sin(u)*9,n.lineTo(l,c),s()<.12&&f>1.2&&(n.stroke(),r(l,c,u+(s()<.5?1:-1)*(.6+s()*.6),h>>1,f*.7),n.lineWidth=f,n.strokeStyle="rgba(46,44,50,0.85)",n.beginPath(),n.moveTo(l,c));n.stroke()};for(let l=0;l<9;l++){const c=s()*256,u=s()*256,h=s()*6.28,f=5+(s()*7|0),p=1.6+s()*1.2;for(const[g,M]of[[0,0],[256,0],[-256,0],[0,256],[0,-256]])n.save(),n.translate(g,M),r(c,u,h,f,p),n.restore()}const o=new wi(t);o.colorSpace=wn,o.wrapS=o.wrapT=zi,o.anisotropy=4;const a=new $t({vertexColors:!0});return a.onBeforeCompile=l=>{l.uniforms.uCrack={value:o},l.uniforms.uWaterC={value:new Pe(i)},l.vertexShader=`varying vec3 vRP;
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
      }`)},a.customProgramCacheKey=()=>`rock${e}`,a}function L_(i,e,t){const n=p_(t),s=new G(t.lighthouse[0],0,t.lighthouse[1]),r=t.paths.map(C_),o=r.flatMap(z=>z.samples),a=(z,F)=>{let te=1/0;for(let pe=0;pe<o.length;pe+=3){const ye=o[pe],Re=(ye.x-z)**2+(ye.z-F)**2;Re<te&&(te=Re)}return Math.sqrt(te)};if(t.plateausAuto&&!t.plateaus){const z=Kn(500+t.seed),F=[];for(const te of t.plateausAuto){let pe=null,ye=-1;for(let Re=0;Re<500;Re++){const Te=z()*Math.PI*2,ne=12+z()*24,Ye=Math.cos(Te)*ne,We=Math.sin(Te)*ne,dt=a(Ye,We);if(dt<te.r+3.5||Math.hypot(Ye-s.x,We-s.z)<te.r+9||F.some(It=>Math.hypot(It.x-Ye,It.z-We)<It.r+te.r+5))continue;const Pt=Math.min(dt-te.r,9)+z()*.5;Pt>ye&&(ye=Pt,pe={x:Ye,z:We,...te})}pe&&F.push(pe)}if(t.plateaus=F,t.waterfall&&F[0]){const te=F[0],pe=t.waterfall;let ye=0,Re=-1;for(let Ye=0;Ye<16;Ye++){const We=Ye/16*Math.PI*2,dt=te.x+Math.cos(We)*(te.r+3.2),Pt=te.z+Math.sin(We)*(te.r+3.2),It=a(dt,Pt);It>Re&&(Re=It,ye=We)}const Te=Math.cos(ye),ne=Math.sin(ye);pe.pool=[te.x+Te*(te.r-2.4),te.z+ne*(te.r-2.4)],pe.lip=[te.x+Te*(te.r-.3),te.z+ne*(te.r-.3)],pe.basin=[te.x+Te*(te.r+3),te.z+ne*(te.r+3)]}}const l=t.fjord,c=t.nes,u=(z,F)=>{if(t.shape==="fjord"){const te=F+30+2.2*Math.sin(z*.21)+1.2*Math.sin(z*.53+1),pe=yt.clamp(F,c.z1,c.z0),ye=c.r-Math.hypot(z-c.x,F-pe)+(F<c.z1?0:.6*Math.sin(F*.7));return Math.max(te,ye)}return n(Math.atan2(F,z))-Math.hypot(z,F)},h=(z,F,te=!1)=>{const pe=yt.smoothstep(u(z,F),-3,7),ye=.9+.7*Math.sin(z*.17+1)*Math.cos(F*.21)+.35*Math.sin(z*.5+F*.4)+.3*Math.sin(z*.31-F*.23+2.1)+.18*Math.cos(z*.73+F*.61),Re=2.4*Math.exp(-((z-s.x-2)**2+(F-s.z+1)**2)/60);let Te=-2.2+pe*(2.2+ye+Re);if(pe>.85&&Te<.35&&(Te=Math.max(-.42,.35-(.35-Te)*3.2)),l){const ne=Math.max(yt.smoothstep(Math.abs(z),l.wall-3,l.wall+6),yt.smoothstep(F,l.top+6,l.top+14));Te+=ne*(7+1.5*Math.sin(F*.13+z*.05));const Ye=Math.abs(z-l.xc(F)),We=1-yt.smoothstep(F,l.top-6,l.top+2);Ye<l.w+1.5&&We>0&&(Te=Math.min(Te,yt.lerp(Te,-1.6,We*(1-yt.smoothstep(Ye,l.w-.8,l.w+1.5)))))}for(const ne of t.plateaus||[]){const Ye=Math.hypot(z-ne.x,F-ne.z),We=Math.atan2(F-ne.z,z-ne.x),dt=ne.r+Math.sin(We*5+ne.x)*.8+Math.sin(We*11)*.3;Te+=ne.h*yt.smoothstep(dt-Ye,0,1.3)}if(t.waterfall&&!te){const ne=t.waterfall,Ye=Math.hypot(z-ne.pool[0],F-ne.pool[1]);Ye<ne.poolR+.6&&(ne._lvl??(ne._lvl=h(ne.pool[0],ne.pool[1],!0)-.12),Te=Math.min(Te,ne._lvl-.48*Math.sqrt(Math.max(0,1-Ye/(ne.poolR+.6)))));const We=yt.clamp(((z-ne.pool[0])*(ne.lip[0]-ne.pool[0])+(F-ne.pool[1])*(ne.lip[1]-ne.pool[1]))/((ne.lip[0]-ne.pool[0])**2+(ne.lip[1]-ne.pool[1])**2),0,1),dt=ne.pool[0]+(ne.lip[0]-ne.pool[0])*We,Pt=ne.pool[1]+(ne.lip[1]-ne.pool[1])*We;Math.hypot(z-dt,F-Pt)<.75&&ne._lvl!==void 0&&(Te=Math.min(Te,ne._lvl-.25));const It=Math.hypot(z-ne.basin[0],F-ne.basin[1]);It<ne.basinR&&(Te=Math.min(Te,Math.max(-.42,.05-.47*Math.sqrt(1-It/ne.basinR))))}if(t.volcano){const ne=t.volcano,Ye=Math.hypot(z-ne.x,F-ne.z);Te+=ne.h*Math.max(0,1-Ye/ne.r)**1.4-ne.h*.5*Math.max(0,1-Ye/(ne.r*.25))}return Te},f=68,p=e.mobile?160:176,g=new Float32Array((p+1)*(p+1)),M=new Float32Array((p+1)*(p+1));for(let z=0;z<=p;z++)for(let F=0;F<=p;F++){const te=-f+F/p*f*2,pe=-f+z/p*f*2,ye=a(te,pe);M[z*(p+1)+F]=ye;let Re=h(te,pe);const Te=yt.smoothstep(ye,1.4,3.2),ne=Math.max(h(te,pe)*.6+.3,.45);Re=yt.lerp(Math.min(Re,ne+.1),Re,Te),l&&Math.abs(pe-l.bridgeZ)<4&&Math.abs(te-l.xc(pe))<l.w+2&&ye<2.2&&(Re=Math.max(Re,.5)),g[z*(p+1)+F]=Re}const m=(z,F,te)=>{const pe=yt.clamp((F+f)/(f*2)*p,0,p-.001),ye=yt.clamp((te+f)/(f*2)*p,0,p-.001),Re=Math.floor(pe),Te=Math.floor(ye),ne=pe-Re,Ye=ye-Te,We=z[Te*(p+1)+Re],dt=z[Te*(p+1)+Re+1],Pt=z[(Te+1)*(p+1)+Re],It=z[(Te+1)*(p+1)+Re+1];return(We*(1-ne)+dt*ne)*(1-Ye)+(Pt*(1-ne)+It*ne)*Ye},d=(z,F)=>m(g,z,F),_=(z,F)=>m(M,z,F),b=(z,F)=>d(z,F)>.35,x=.5,C=(z,F)=>Math.max(Math.abs(d(z+.4,F)-d(z-.4,F)),Math.abs(d(z,F+.4)-d(z,F-.4)))/.8,E=(z,F)=>!!l&&Math.abs(F-l.bridgeZ)<4&&Math.abs(z-l.xc(F))<l.w+1.5&&_(z,F)<2.6,T=new Pe("#cfeaff"),A=(z,F)=>d(z,F)>.05-x&&C(z,F)<1.05,y=e.mobile?170:256,v=new ai(f*2,f*2,y,y);v.rotateX(-Math.PI/2);const w=v.attributes.position,I=new Float32Array(w.count*3),U=new Float32Array(w.count*3),P=new Float32Array(w.count),N=new Float32Array(w.count*4),B=new Pe,W=new Pe,V=t.palette,j=new Pe(t.rock[0]).multiplyScalar(.7),Q=new Pe(t.rock[0]).multiplyScalar(1.08),se=new Pe,Ee=new Pe(V.sand),Fe=new Pe(V.grass),H=new Pe(V.grass2),Z=new Pe(V.path),he=new Pe(V.deep),oe=new Pe,me=Kn(7);for(let z=0;z<w.count;z++){const F=w.getX(z),te=w.getZ(z),pe=d(F,te);w.setY(z,pe);const ye=_(F,te),Re=(me()-.5)*.04,Te=oe.copy(Fe).lerp(H,yt.clamp((pe-1)*.6+me()*.3,0,1)).offsetHSL(0,0,Re);U.set([Te.r,Te.g,Te.b],z*3),B.copy(he).lerp(Ee,yt.smoothstep(pe,0,.3)).offsetHSL(0,0,Re),I.set([B.r,B.g,B.b],z*3);const ne=.5+.5*Math.sin(F*1.7+te*.9)*Math.cos(te*1.3-F*.6);P[z]=1.9-Math.min(ye,6)+(ne-.5)*(V.pathMix??.3)*2.4-Math.max(0,.3-pe)*2.5;let Ye=0;l&&E(F,te)&&(W.copy(T),Ye=.85);const We=C(F,te);if(We>.75){const dt=.5+.5*Math.sin(pe*7.5+Math.sin(F*.7+te*.5)*1.5);se.copy(j).lerp(Q,dt);const Pt=yt.smoothstep(We,.75,1.3);W.copy(Ye?W:se).lerp(se,Pt),Ye=Math.max(Ye,Pt)}N.set([W.r,W.g,W.b,Ye],z*4)}v.setAttribute("aLow",new Xt(I,3)),v.setAttribute("aGrass",new Xt(U,3)),v.setAttribute("aPathF",new Xt(P,1)),v.setAttribute("aOver",new Xt(N,4)),v.computeVertexNormals();const Le=new $t({color:"#ffffff"});Le.onBeforeCompile=z=>{z.vertexShader=z.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTW, vLow, vGrass;
varying vec4 vOver;
varying float vPathF;
attribute vec3 aLow, aGrass;
attribute vec4 aOver;
attribute float aPathF;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vTW = (modelMatrix * vec4(transformed, 1.0)).xyz;
vLow = aLow; vGrass = aGrass; vOver = aOver; vPathF = aPathF;`),z.uniforms.uPath={value:Z},z.fragmentShader=z.fragmentShader.replace("#include <common>",`#include <common>
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
        diffuseColor.g *= 1.0 + 0.025 * n1;`)};const Ue=new lt(v,Le);Ue.receiveShadow=!0,i.add(Ue);const qe=[],de=(z,F)=>Math.hypot(z-s.x,F-s.z)>6;for(const[z,F]of r.entries()){let te=z%2===0?1:-1,pe=0;for(let ye=.16;ye<.95&&pe<6;ye+=.055){const Re=F.curve.getPointAt(ye),Te=F.curve.getTangentAt(ye),ne=new G(-Te.z,0,Te.x).normalize();for(const Ye of[te,-te]){const We=Re.x+ne.x*3.6*Ye,dt=Re.z+ne.z*3.6*Ye;if(!(_(We,dt)<2.7||!b(We,dt)||!de(We,dt))&&!qe.some(Pt=>Math.hypot(Pt.x-We,Pt.z-dt)<5.2)&&!(t.volcano&&Math.hypot(We-t.volcano.x,dt-t.volcano.z)<t.volcano.r+2)){qe.push({x:We,z:dt,tower:null}),pe++;break}}te=-te}}const Me=tf(t.water.mid),O=new zt({color:new Pe("#ffd27a").multiplyScalar(1.6),transparent:!0,opacity:.75,depthWrite:!1}),$e=new zt({color:new Pe("#ffe9a8").multiplyScalar(2),transparent:!0,opacity:.85,depthWrite:!1}),be=ef(Kn(61+t.seed),1.3,1.45,.98,t.rock[0],t.rock[1],8,{dressed:!0});be.translate(0,-.1,0);const Oe=new xs(.55,.75,6);Oe.rotateX(-Math.PI/2);const Ie=new Pr(1,0),nt=qe.length,$=new En(be,Me,nt),R=new En(Oe,O,nt),S=new En(Ie,$e,nt*3);$.castShadow=$.receiveShadow=!0;const X=new qt;qe.forEach((z,F)=>{z.y0=d(z.x,z.z),z.y=z.y0+.88,X.position.set(z.x,z.y0,z.z),X.rotation.set(0,F,0),X.scale.setScalar(1),X.updateMatrix(),$.setMatrixAt(F,X.matrix)}),i.add($,R,S),Ac($,"rock");const ee=z=>{qe.forEach((F,te)=>{const pe=!F.tower;X.position.set(F.x,F.y0+.9,F.z),X.rotation.set(0,z*.5,0),X.scale.setScalar(pe?1:0),X.updateMatrix(),R.setMatrixAt(te,X.matrix);for(let ye=0;ye<3;ye++){const Re=z*.4+ye*2.1+F.x,Te=(Re%1+1)%1;X.position.set(F.x+Math.cos(Re*2.3)*.55,F.y0+1+Te*1.1,F.z+Math.sin(Re*2.3)*.55),X.rotation.set(0,Re*3,0);const ne=pe?.07*Math.sin(Te*Math.PI):0;X.scale.set(ne,ne*1.6,ne),X.updateMatrix(),S.setMatrixAt(te*3+ye,X.matrix)}}),R.instanceMatrix.needsUpdate=!0,S.instanceMatrix.needsUpdate=!0},ie=new bt,re=d(s.x,s.z);ie.position.set(s.x,re,s.z);const ke=(()=>{const z=document.createElement("canvas");z.width=512,z.height=512;const F=z.getContext("2d");F.fillStyle="#f6f1e6",F.fillRect(0,0,512,512);const te=Kn(5);for(let ye=0;ye<520;ye++){const Re=te()*512,Te=te()*512,ne=2+te()*9,Ye=te()<.65;F.fillStyle=Ye?`rgba(${90+te()*40},${120+te()*40},${60+te()*20},${.12+te()*.18})`:`rgba(${130+te()*30},${95+te()*20},60,${.12+te()*.15})`,F.beginPath(),F.ellipse(Re,Te,ne,ne*(.4+te()*.6),te()*3,0,Math.PI*2),F.fill()}for(let ye=0;ye<1200;ye++){F.strokeStyle=`rgba(190,170,140,${.04+te()*.07})`,F.lineWidth=1;const Re=te()*512,Te=te()*512;F.beginPath(),F.moveTo(Re,Te),F.lineTo(Re+(te()-.5)*8,Te+6+te()*20),F.stroke()}for(let ye=0;ye<26;ye++){const Re=te()*512;F.strokeStyle=te()<.5?"rgba(255,255,255,0.35)":"rgba(150,130,100,0.18)",F.lineWidth=2+te()*5,F.beginPath(),F.moveTo(Re,512),F.bezierCurveTo(Re+40,350,Re-30,160,Re+20+te()*40,0),F.stroke()}F.strokeStyle="rgba(175,145,100,0.55)",F.lineWidth=4,F.beginPath(),F.moveTo(60,512),F.bezierCurveTo(90,330,110,180,150,0),F.stroke();const pe=new wi(z);return pe.colorSpace=wn,pe.wrapS=zi,pe})(),Se=new $t({map:ke}),De=(()=>{const z=document.createElement("canvas");z.width=z.height=128;const F=z.getContext("2d");F.fillStyle="#e9dcbf",F.fillRect(0,0,128,128),F.strokeStyle="#a88d62",F.lineWidth=3,F.beginPath();for(let pe=0;pe<Math.PI*9;pe+=.1){const ye=4+pe*2;F.lineTo(64+Math.cos(pe)*ye,64+Math.sin(pe)*ye)}F.stroke();const te=new wi(z);return te.colorSpace=wn,te})(),ot=new $t({color:"#e6d8b8"}),we=new $t({map:De}),je=new $t({color:"#3a3330",flatShading:!0}),at=new $t({color:"#b8b2aa",flatShading:!0}),ut=(()=>{const z=document.createElement("canvas");z.width=256,z.height=128;const F=z.getContext("2d"),te=F.createLinearGradient(0,0,0,128);te.addColorStop(0,"#fff0b0"),te.addColorStop(.45,"#ffb040"),te.addColorStop(1,"#ff5a10"),F.fillStyle=te,F.fillRect(0,0,256,128);const pe=Kn(11);for(let Re=0;Re<70;Re++){const Te=pe();F.fillStyle=Te<.5?`rgba(70,60,55,${.5+pe()*.4})`:`rgba(170,165,160,${.5+pe()*.4})`,F.beginPath(),F.ellipse(pe()*256,20+pe()*108,4+pe()*14,2+pe()*6,pe()*3,0,Math.PI*2),F.fill()}F.strokeStyle="rgba(60,30,20,0.6)",F.lineWidth=1.5;for(let Re=0;Re<40;Re++){const Te=pe()*256,ne=pe()*128;F.beginPath(),F.moveTo(Te,ne),F.lineTo(Te+(pe()-.5)*30,ne+(pe()-.5)*20),F.stroke()}const ye=new wi(z);return ye.colorSpace=wn,ye})(),Ze=new zt({map:ut,color:new Pe("#ffffff").multiplyScalar(2.2)});function wt({len:z,rTop:F,rBot:te,crutchH:pe,seg:ye,bend:Re,glowMat:Te,shadow:ne}){const Ye=new bt,We=new lt(new Yt(te*.98,te*.95,pe,ye),[ot,ot,we]);We.position.y=pe/2,We.castShadow=ne,Ye.add(We);const dt=new Yt(F,te,z,ye,8,!0),Pt=dt.attributes.position,It=Kn(Math.round(z*100)),Oi=Array.from({length:6},()=>[It()*6.28,It()*3,.03+It()*.04]);for(let kt=0;kt<Pt.count;kt++){const hi=Pt.getY(kt),fi=(hi+z/2)/z,Gr=Math.atan2(Pt.getZ(kt),Pt.getX(kt));let js=1+Math.sin(Gr*7+hi*3)*.018;for(const[ip,sp,rp]of Oi)js+=Math.cos(Gr-ip)*Math.sin(fi*6+sp)*rp*.5;Pt.setXYZ(kt,Pt.getX(kt)*js+Re*fi*fi*z,hi,Pt.getZ(kt)*js)}dt.translate(0,z/2,0),dt.computeVertexNormals();const Lt=new lt(dt,Se);Lt.position.y=pe,Lt.castShadow=ne,Lt.receiveShadow=!0,Ye.add(Lt);const Rn=Re*z,ui=pe+z,Pn=new Yt(F*1.02,F*1.04,F*.35,ye,1,!0),qn=Pn.attributes.position;for(let kt=0;kt<qn.count;kt++)qn.getY(kt)>0&&qn.setY(kt,qn.getY(kt)+Math.sin(kt*2.7)*F*.12);Pn.computeVertexNormals();const Yn=new lt(Pn,je);Yn.position.set(Rn,ui+F*.12,0),Ye.add(Yn);const ns=new lt(new Qn(F*.97,ye,6,0,Math.PI*2,0,Math.PI/2),Te);ns.scale.y=.38,ns.position.set(Rn,ui+F*.2,0),Ye.add(ns);const Ba=[];for(let kt=0;kt<5;kt++){const hi=new lt(new Ua(F*(.2+kt%3*.07),0),at),fi=kt*1.25+.3;hi.position.set(Rn+Math.cos(fi)*F*.55,ui+F*.33,Math.sin(fi)*F*.55),hi.scale.y=.4,Ye.add(hi),Ba.push(hi)}const Ga=new Jn(F*.28,F*1.1,6,4),$s=Ga.attributes.position;for(let kt=0;kt<$s.count;kt++){const hi=$s.getY(kt),fi=(hi/(F*1.1)+.5)*2.2,Gr=$s.getX(kt),js=$s.getZ(kt);$s.setX(kt,Gr*Math.cos(fi)-js*Math.sin(fi)+(hi+F*.55)*.25),$s.setZ(kt,Gr*Math.sin(fi)+js*Math.cos(fi))}Ga.computeVertexNormals();const Br=new lt(Ga,je);return Br.position.set(Rn+F*.1,ui+F*.7,F*.1),Br.rotation.z=-.35,Ye.add(Br),Ye.userData={glow:ns,top:new G(Rn,ui,0),charRing:Yn,ashFlakes:Ba,body:Lt,twist:Br,len:z,rTop:F,rBot:te,bend:Re,crutchH:pe,base:Lt.geometry.attributes.position.array.slice(),topParts:[Yn,ns,Br,...Ba].map(kt=>[kt,kt.position.clone(),kt.scale.clone()])},Ye}const ht=new Pe(t.rock[0]).multiplyScalar(.86),Et=new lt(ef(Kn(67+t.seed),3.3,3.9,1,ht,t.rock[1],16),tf(t.water.mid,.2));Et.position.y=-.2,Et.castShadow=Et.receiveShadow=!0,ie.add(Et),Or(Et,"rock");const Y=7.4,Ne=1.4,le=wt({len:Y,rTop:2.35,rBot:.95,crutchH:Ne,seg:22,bend:.06,glowMat:Ze,shadow:!0});le.position.y=.75,le.rotation.set(.06,0,-.03);const _e=le.userData.charRing;ie.add(le);const Ve=new qt;Ve.position.y=Ne+Y+1.2,le.add(Ve);const He=new mo("#ff8a3a",40,34,1.5);He.position.y=Ne+Y+1.4,le.add(He);const ft=new Jn(2.2,16,16,6,!0);ft.translate(0,-8,0);{const z=ft.attributes.position,F=new Float32Array(z.count*3);for(let te=0;te<z.count;te++){const pe=Math.pow(1-Math.min(1,-z.getY(te)/16),1.6);F.set([pe,pe,pe],te*3)}ft.setAttribute("color",new Xt(F,3))}ft.rotateZ(Math.PI/2);const Bt=new zt({color:"#ffc890",vertexColors:!0,transparent:!0,opacity:.05,blending:Ti,depthWrite:!1,side:cn,fog:!1}),Vt=new bt;Vt.position.y=Ne+Y+.8;const At=new lt(ft,Bt),Cn=At.clone();Cn.rotation.y=Math.PI,Vt.add(At,Cn),le.add(Vt);const bn=new mo("#ffa050",12,10,1.4);bn.position.set(0,1.3,4.6),ie.add(bn),i.add(ie),ie.updateMatrixWorld(!0);const li=new G;Ve.getWorldPosition(li);const k=le.userData,xe=[Ve,He,Vt].map(z=>[z,z.position.y]),ue=z=>k.rBot+(k.rTop-k.rBot)*z;function Je(z){const F=.15+.85*Math.max(0,Math.min(1,z)),te=k.body.geometry.attributes.position,pe=k.base;for(let ne=0;ne<te.count;ne++){const Ye=pe[ne*3+1],We=Ye/k.len,dt=We*F,Pt=ue(dt)/ue(We);te.setXYZ(ne,(pe[ne*3]-k.bend*We*We*k.len)*Pt+k.bend*dt*dt*k.len,dt*k.len,pe[ne*3+2]*Pt)}te.needsUpdate=!0,k.body.geometry.computeVertexNormals(),k.body.geometry.computeBoundingSphere();const ye=(F-1)*k.len,Re=ue(F)/k.rTop,Te=k.bend*k.len*(F*F-1);for(const[ne,Ye,We]of k.topParts)ne.position.set(k.top.x+(Ye.x-k.top.x)*Re+Te,Ye.y+ye,Ye.z*Re),ne.scale.set(We.x*Re,We.y*Re,We.z*Re);for(const[ne,Ye]of xe)ne.position.y=Ye+ye;ie.updateMatrixWorld(!0),Ve.getWorldPosition(li)}const tt={tip:li,pos:new G(s.x,re,s.z),lights:Dr,flamePos(){return li.clone()},setLights(z){this.lights=z;const F=z/Dr;Je(F),this.glow=F,bn.intensity=3+9*F,Bt.opacity=.01+.04*F,_e.scale.y*=1+(1-F)*2.5}},Ce=Kn(42),Qe=[];for(let z=0;z<3e3&&Qe.length<(e.mobile?70:104);z++){const F=(Ce()-.5)*102,te=(Ce()-.5)*102,pe=d(F,te);if(pe<.75||_(F,te)<3.2||!de(F,te)||qe.some(ne=>Math.hypot(ne.x-F,ne.z-te)<3.2)||Qe.some(ne=>Math.hypot(ne.x-F,ne.z-te)<2.4)||t.volcano&&Math.hypot(F-t.volcano.x,te-t.volcano.z)<t.volcano.r)continue;const ye=pe<1.45?t.trees.beach:t.trees.inland;let Re=Ce(),Te="bush";for(const[ne,Ye]of Object.entries(ye)){if(Re<Ye){Te=ne;break}Re-=Ye}Qe.push({x:F,z:te,y:pe,s:(Te==="bush"?.8:.75)+Ce()*.45,phase:Ce()*6.28,kind:Te})}if(t.trees.inland.bush){const z=Kn(303+t.seed),F=Qe.filter(te=>te.kind!=="bush"&&te.y>=1);for(const te of F){if(z()>(e.mobile?.6:.75))continue;const pe=1+Math.floor(z()*3);for(let ye=0;ye<pe;ye++){const Re=z()*6.28,Te=1.3+z()*1,ne=te.x+Math.cos(Re)*Te,Ye=te.z+Math.sin(Re)*Te,We=d(ne,Ye);We<1||_(ne,Ye)<3||!de(ne,Ye)||qe.some(dt=>Math.hypot(dt.x-ne,dt.z-Ye)<3)||Qe.some(dt=>dt!==te&&Math.hypot(dt.x-ne,dt.z-Ye)<1.3)||Qe.push({x:ne,z:Ye,y:We,s:.55+z()*.35,phase:z()*6.28,kind:"bush"})}}}const rt=a_(i,Qe,e,t),gt=new qt,Ct=[];for(let z=0;z<1200&&Ct.length<(e.mobile?40:56);z++){const F=Ce()*Math.PI*2,te=n(F)-3+Ce()*5.5,pe=Math.cos(F)*te,ye=Math.sin(F)*te;_(pe,ye)<3.4||d(pe,ye)<-1.2||Ct.some(Re=>Math.hypot(Re.x-pe,Re.z-ye)<2.2)||Ct.push({x:pe,z:ye,s:.6+Ce()*1.2,r:Ce()*6})}for(const z of t.plateaus||[]){const F=Math.round(z.r*2*Math.PI/2.3);for(let te=0;te<F;te++){const pe=te/F*Math.PI*2+Ce()*.2,ye=z.r+Math.sin(pe*5+z.x)*.8+Math.sin(pe*11)*.3-.2,Re=z.x+Math.cos(pe)*ye,Te=z.z+Math.sin(pe)*ye;t.waterfall&&Math.hypot(Re-t.waterfall.lip[0],Te-t.waterfall.lip[1])<2.2||_(Re,Te)<2.6||Ct.push({x:Re,z:Te,s:1.3+Ce()*.9,r:Ce()*6,cliff:!0})}}[0,1,2].map(z=>P_(Kn(31+z*7+t.seed),t.rock[0],t.rock[1],z)).map((z,F)=>{const te=Ct.filter((ye,Re)=>Re%3===F),pe=new En(z,Me,Math.max(1,te.length));return pe.count=te.length,te.forEach((ye,Re)=>{gt.position.set(ye.x,d(ye.x,ye.z)-.2*ye.s,ye.z),gt.rotation.set(0,ye.r*2,0),gt.scale.set(ye.s*1.1,ye.s*.9,ye.s),gt.updateMatrix(),pe.setMatrixAt(Re,gt.matrix)}),pe.castShadow=pe.receiveShadow=!0,i.add(pe),Ac(pe,"rock"),pe});const ni=K1(i,{heightAt:d,pathDist:_,plinths:qe,paths:r,lighthouse:tt,landDist:u},e,Kn(99+t.seed),n,t),ci=x_(i,{heightAt:d,pathDist:_,paths:r,lighthouse:tt,islandEdge:n},e,t),L=[...Qe.map(z=>[z.x,z.z,1.3*z.s]),...Ct.map(z=>[z.x,z.z,z.s*1.6]),...qe.map(z=>[z.x,z.z,1.9])],J=(z,F)=>{let te=1;for(const[pe,ye,Re]of L){const Te=(pe-z)**2+(ye-F)**2;Te<Re*Re&&(te=Math.min(te,.55+.45*Math.sqrt(Te)/Re))}return te},ae=c_(i,{heightAt:d,pathDist:_,plinths:qe,lighthouse:tt,extrasBlock:ci.blocks,shadeAt:J},e,t,Kn(7+t.seed)),ce={palm:.9,round:1.45,bush:1,pine:1.35,dead:.6};M_(i,[...Qe.map(z=>({x:z.x,y:z.y,z:z.z,r:(ce[z.kind]??1)*z.s})),...Ct.map(z=>({x:z.x,y:d(z.x,z.z),z:z.z,r:z.s*(z.cliff?1.7:1.55)})).filter(z=>z.y>.05),...qe.map(z=>({x:z.x,y:z.y0,z:z.z,r:1.95})),{x:s.x,y:re,z:s.z,r:4.8}]);const K=Float32Array.from(g),ze=[...Ct.map(z=>({x:z.x,z:z.z,r:z.s*.85})),...ni.obstacles];for(const z of ze){const F=z.r+1,te=f*2/p,pe=Math.floor((z.x-F+f)/te),ye=Math.ceil((z.x+F+f)/te),Re=Math.floor((z.z-F+f)/te),Te=Math.ceil((z.z+F+f)/te);for(let ne=Math.max(0,Re);ne<=Math.min(p,Te);ne++)for(let Ye=Math.max(0,pe);Ye<=Math.min(p,ye);Ye++){const We=-f+Ye*te,dt=-f+ne*te,Pt=Math.max(0,Math.hypot(We-z.x,dt-z.z)-z.r);if(Pt>.9)continue;const It=ne*(p+1)+Ye,Oi=.06-Pt*.35,Lt=1-Pt/.9;K[It]=Math.max(K[It],K[It]+(Oi-K[It])*Lt*Lt)}}if(t.waterfall&&t.waterfall._lvl!==void 0){const z=t.waterfall;Xh(i,{heightTex:qh(K,p+1),ext:f,grid:p,quality:e,sunDir:new G(24,17,4),colors:t.water,level:z._lvl,size:9,maxDepth:.8,center:[(z.pool[0]+z.lip[0])/2,(z.pool[1]+z.lip[1])/2]})}const Ke=Xh(i,{heightTex:qh(K,p+1),ext:f,grid:p,quality:e,sunDir:new G(24,17,4),colors:t.water}),it=[{x:s.x,z:s.z,r:3.5},...qe.map(z=>({x:z.x,z:z.z,r:1.4})),...rt.colliders,...Ct.filter(z=>d(z.x,z.z)>-.45).map(z=>({x:z.x,z:z.z,r:z.s*.85})),...ni.colliders,...ci.colliders];return{def:t,paths:r,plinths:qe,lighthouse:tt,heightAt:d,pathDist:_,slopeAt:C,isLand:b,isIce:E,landDist:u,isWalkable:(z,F)=>A(z,F)&&!ci.blocks(z,F),colliders:it,update:z=>{Ke.update(z),ni.update(z),ci.update(z),ae.update(z);const F=tt.glow??1,te=.75+.25*Math.sin(z*1.3)+.1*Math.sin(z*7.1);Ze.color.setRGB(1,.85,.75).multiplyScalar(F>0?(.7+1.5*F)*te:.12),He.intensity=(8+40*F)*te,Vt.rotation.y=z*.6,rt.update(z),ee(z)},terrain:Ue,extras:ci,grass:ae}}const ro={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ys{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const D_=new iu(-1,1,1,-1,0,1);class I_ extends Ot{constructor(){super(),this.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new mt([0,2,0,0,2,0],2))}}const U_=new I_;class Na{constructor(e){this._mesh=new lt(U_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,D_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Rd extends Ys{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof sn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_i.clone(e.uniforms),this.material=new sn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Na(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class nf extends Ys{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class z_ extends Ys{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class N_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ae);this._width=n.width,this._height=n.height,t=new Xn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:oi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rd(ro),this.copyPass.material.blending=Sn,this.clock=new hd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}nf!==void 0&&(o instanceof nf?n=!0:o instanceof z_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class k_ extends Ys{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pe}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const na={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ae},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Nt},cameraProjectionMatrixInverse:{value:new Nt},cameraWorldMatrix:{value:new Nt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new G(-1,-1,-1)},sceneBoxMax:{value:new G(1,1,1)}},vertexShader:`

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
		}`},ia={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},El={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function F_(i=5){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=O_(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){const a=t[o],l=2*Math.PI*a/n,c=new G(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}const r=new La(s,e,e);return r.wrapS=zi,r.wrapT=zi,r.needsUpdate=!0,r}function O_(i){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0);let s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}const sa={defines:{SAMPLES:16,SAMPLE_VECTORS:Pd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ae},cameraProjectionMatrixInverse:{value:new Nt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Pd(i,e,t){const n=B_(i,e,t);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function B_(i,e,t){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new G(Math.cos(r),Math.sin(r),o))}return n}class G_{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,f=l-h,p=c-h,g=e-f,M=t-p;let m,d;g>M?(m=1,d=0):(m=0,d=1);const _=g-m+u,b=M-d+u,x=g-1+2*u,C=M-1+2*u,E=l&255,T=c&255,A=this.perm[E+this.perm[T]]%12,y=this.perm[E+m+this.perm[T+d]]%12,v=this.perm[E+1+this.perm[T+1]]%12;let w=.5-g*g-M*M;w<0?n=0:(w*=w,n=w*w*this.dot(this.grad3[A],g,M));let I=.5-_*_-b*b;I<0?s=0:(I*=I,s=I*I*this.dot(this.grad3[y],_,b));let U=.5-x*x-C*C;return U<0?r=0:(U*=U,r=U*U*this.dot(this.grad3[v],x,C)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a;const c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),f=Math.floor(n+c),p=1/6,g=(u+h+f)*p,M=u-g,m=h-g,d=f-g,_=e-M,b=t-m,x=n-d;let C,E,T,A,y,v;_>=b?b>=x?(C=1,E=0,T=0,A=1,y=1,v=0):_>=x?(C=1,E=0,T=0,A=1,y=0,v=1):(C=0,E=0,T=1,A=1,y=0,v=1):b<x?(C=0,E=0,T=1,A=0,y=1,v=1):_<x?(C=0,E=1,T=0,A=0,y=1,v=1):(C=0,E=1,T=0,A=1,y=1,v=0);const w=_-C+p,I=b-E+p,U=x-T+p,P=_-A+2*p,N=b-y+2*p,B=x-v+2*p,W=_-1+3*p,V=b-1+3*p,j=x-1+3*p,Q=u&255,se=h&255,Ee=f&255,Fe=this.perm[Q+this.perm[se+this.perm[Ee]]]%12,H=this.perm[Q+C+this.perm[se+E+this.perm[Ee+T]]]%12,Z=this.perm[Q+A+this.perm[se+y+this.perm[Ee+v]]]%12,he=this.perm[Q+1+this.perm[se+1+this.perm[Ee+1]]]%12;let oe=.6-_*_-b*b-x*x;oe<0?s=0:(oe*=oe,s=oe*oe*this.dot3(this.grad3[Fe],_,b,x));let me=.6-w*w-I*I-U*U;me<0?r=0:(me*=me,r=me*me*this.dot3(this.grad3[H],w,I,U));let Le=.6-P*P-N*N-B*B;Le<0?o=0:(Le*=Le,o=Le*Le*this.dot3(this.grad3[Z],P,N,B));let Ue=.6-W*W-V*V-j*j;return Ue<0?a=0:(Ue*=Ue,a=Ue*Ue*this.dot3(this.grad3[he],W,V,j)),32*(s+r+o+a)}noise4d(e,t,n,s){const r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,h,f,p,g;const M=(e+t+n+s)*l,m=Math.floor(e+M),d=Math.floor(t+M),_=Math.floor(n+M),b=Math.floor(s+M),x=(m+d+_+b)*c,C=m-x,E=d-x,T=_-x,A=b-x,y=e-C,v=t-E,w=n-T,I=s-A,U=y>v?32:0,P=y>w?16:0,N=v>w?8:0,B=y>I?4:0,W=v>I?2:0,V=w>I?1:0,j=U+P+N+B+W+V,Q=o[j][0]>=3?1:0,se=o[j][1]>=3?1:0,Ee=o[j][2]>=3?1:0,Fe=o[j][3]>=3?1:0,H=o[j][0]>=2?1:0,Z=o[j][1]>=2?1:0,he=o[j][2]>=2?1:0,oe=o[j][3]>=2?1:0,me=o[j][0]>=1?1:0,Le=o[j][1]>=1?1:0,Ue=o[j][2]>=1?1:0,qe=o[j][3]>=1?1:0,de=y-Q+c,Me=v-se+c,O=w-Ee+c,$e=I-Fe+c,be=y-H+2*c,Oe=v-Z+2*c,Ie=w-he+2*c,nt=I-oe+2*c,$=y-me+3*c,R=v-Le+3*c,S=w-Ue+3*c,X=I-qe+3*c,ee=y-1+4*c,ie=v-1+4*c,re=w-1+4*c,ke=I-1+4*c,Se=m&255,De=d&255,ot=_&255,we=b&255,je=a[Se+a[De+a[ot+a[we]]]]%32,at=a[Se+Q+a[De+se+a[ot+Ee+a[we+Fe]]]]%32,ut=a[Se+H+a[De+Z+a[ot+he+a[we+oe]]]]%32,Ze=a[Se+me+a[De+Le+a[ot+Ue+a[we+qe]]]]%32,wt=a[Se+1+a[De+1+a[ot+1+a[we+1]]]]%32;let ht=.6-y*y-v*v-w*w-I*I;ht<0?u=0:(ht*=ht,u=ht*ht*this.dot4(r[je],y,v,w,I));let Et=.6-de*de-Me*Me-O*O-$e*$e;Et<0?h=0:(Et*=Et,h=Et*Et*this.dot4(r[at],de,Me,O,$e));let Y=.6-be*be-Oe*Oe-Ie*Ie-nt*nt;Y<0?f=0:(Y*=Y,f=Y*Y*this.dot4(r[ut],be,Oe,Ie,nt));let Ne=.6-$*$-R*R-S*S-X*X;Ne<0?p=0:(Ne*=Ne,p=Ne*Ne*this.dot4(r[Ze],$,R,S,X));let le=.6-ee*ee-ie*ie-re*re-ke*ke;return le<0?g=0:(le*=le,g=le*le*this.dot4(r[wt],ee,ie,re,ke)),27*(u+h+f+p+g)}}class Pi extends Ys{constructor(e,t,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=F_(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Xn(this.width,this.height,{type:oi}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new sn({defines:Object.assign({},na.defines),uniforms:_i.clone(na.uniforms),vertexShader:na.vertexShader,fragmentShader:na.fragmentShader,blending:Sn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new W1,this.normalMaterial.blending=Sn,this.pdMaterial=new sn({defines:Object.assign({},sa.defines),uniforms:_i.clone(sa.uniforms),vertexShader:sa.vertexShader,fragmentShader:sa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new sn({defines:Object.assign({},ia.defines),uniforms:_i.clone(ia.uniforms),vertexShader:ia.vertexShader,fragmentShader:ia.fragmentShader,blending:Sn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new sn({uniforms:_i.clone(ro.uniforms),vertexShader:ro.vertexShader,fragmentShader:ro.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ul,blendDst:Kr,blendEquation:vi,blendSrcAlpha:Il,blendDstAlpha:Kr,blendEquationAlpha:vi}),this.blendMaterial=new sn({uniforms:_i.clone(El.uniforms),vertexShader:El.vertexShader,fragmentShader:El.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ef,blendSrc:Ul,blendDst:Kr,blendEquation:vi,blendSrcAlpha:Il,blendDstAlpha:Kr,blendEquationAlpha:vi}),this.fsQuad=new Na(null),this.originalClearColor=new Pe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new ru,this.depthTexture.format=Os,this.depthTexture.type=Fs,this.normalRenderTarget=new Xn(this.width,this.height,{minFilter:Tn,magFilter:Tn,type:oi,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Pd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Pi.OUTPUT.Off:break;case Pi.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Sn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Pi.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Sn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Pi.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Sn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Pi.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Pi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Sn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Pi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Sn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){const t=new G_,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}const r=new La(s,e,e,ri,Ni);return r.wrapS=zi,r.wrapT=zi,r.needsUpdate=!0,r}}Pi.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const V_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ir extends Ys{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ae(e.x,e.y):new Ae(256,256),this.clearColor=new Pe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Xn(r,o,{type:oi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Xn(r,o,{type:oi});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new Xn(r,o,{type:oi});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=V_;this.highPassUniforms=_i.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new sn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ae(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=ro;this.copyUniforms=_i.clone(u.uniforms),this.blendMaterial=new sn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ti,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Pe,this.oldClearAlpha=1,this.basic=new zt,this.fsQuad=new Na(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ae(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ir.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ir.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new sn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ae(.5,.5)},direction:{value:new Ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ir.BlurDirectionX=new Ae(1,0);Ir.BlurDirectionY=new Ae(0,1);const H_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class W_ extends Ys{constructor(){super();const e=H_;this.uniforms=_i.clone(e.uniforms),this.material=new H1({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Na(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ut.getTransfer(this._outputColorSpace)===Gt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Tf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Af?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Cf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Rf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Pf&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const X_={name:"WarmGrade",uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uTint:{value:new G(1,1,1)},uLift:{value:new G},uSat:{value:1.08}},vertexShader:`
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
    }`},q_=new URLSearchParams(location.search).get("ao")==="1";function Y_(i,e,t,n={}){const s=new N_(i,new Xn(1,1,{type:oi})),r=new k_(e,t),o=new Pi(e,t,1,1,void 0,{radius:.8,distanceExponent:1.3,thickness:1.4,scale:1.2,samples:12});o.blendIntensity=1;const a=new Ir(new Ae(256,256),.6,.55,1),l=new Rd(X_);n.tint&&l.uniforms.uTint.value.set(...n.tint),n.lift&&l.uniforms.uLift.value.set(...n.lift),n.sat&&(l.uniforms.uSat.value=n.sat),l.uniforms.uVignette.value=n.vignette??.25;const c=new W_;for(const g of[r,o,a,l,c])s.addPass(g);let u="high",h=1,f=1;const p={composer:s,get level(){return u},setLevel(g){u=g,o.enabled=g==="high"&&q_,a.strength=g==="high"?.6:.5;const M=g==="high"?4:0;for(const m of[s.renderTarget1,s.renderTarget2])m.samples!==M&&(m.samples=M,m.dispose());p.setSize(h,f)},setSize(g,M){h=g,f=M;const m=i.getPixelRatio();s.setPixelRatio(m),s.setSize(g,M);const d=u==="high"?2:4;a.resolution.set(g*m/d,M*m/d),a.setSize(g*m/d,M*m/d)},render(g){s.render(g)}};return p}function $_(i,e,t,n,s,r=null){const{heightAt:o}=e,a=t.mobile?.5:1,l=new Set(n.life),c=new qt,u=new Pe,h=[],f=()=>{for(let g=0;g<50;g++){const M=(Math.random()-.5)*80,m=(Math.random()-.5)*80,d=o(M,m);if(d>.8)return{x:M,z:m,h:d}}return{x:0,z:0,h:1}};if(l.has("butterflies")){const g=Math.round(26*a),M=new Rr(.16,6,0,Math.PI);M.scale(1,1.3,1);const d=[-1,1].map(()=>new $t({color:"#ffffff",side:cn})).map(x=>{const C=new En(M,x,g);return i.add(C),C}),_=Array.from({length:g},(x,C)=>({...f(),a:Math.random()*6,sp:.6+Math.random()*.6,ph:Math.random()*6,home:null})),b=["#ffd84a","#ff9ad0","#9ad8ff","#ffffff","#ffa040"];_.forEach((x,C)=>{x.home={x:x.x,z:x.z},d.forEach(E=>E.setColorAt(C,u.set(b[C%b.length])))}),d.forEach(x=>x.instanceColor.needsUpdate=!0),h.push((x,C)=>{_.forEach((E,T)=>{E.a+=Math.sin(C*.7+E.ph)*1.6*x,E.x+=Math.cos(E.a)*E.sp*x,E.z+=Math.sin(E.a)*E.sp*x,Math.hypot(E.x-E.home.x,E.z-E.home.z)>5&&(E.a=Math.atan2(E.home.z-E.z,E.home.x-E.x));const A=o(E.x,E.z)+.6+Math.sin(C*2+E.ph)*.25,y=Math.sin(C*18+E.ph)*1.1;d.forEach((v,w)=>{c.position.set(E.x,A,E.z),c.rotation.set(0,-E.a+Math.PI/2,0),c.rotateZ((w?1:-1)*(.3+y*.5)),c.rotateX(-Math.PI/2),c.scale.set(w?1:-1,1,1),c.updateMatrix(),v.setMatrixAt(T,c.matrix)})}),d.forEach(E=>E.instanceMatrix.needsUpdate=!0)})}if(l.has("birds")){const M=new Ot;M.setAttribute("position",new mt([-.7,.12,.1,0,0,-.15,0,0,.15,0,0,-.15,.7,.12,.1,0,0,.15],3)),M.computeVertexNormals();const m=new En(M,new $t({color:"#f4f4f0",side:cn}),7);m.castShadow=!0,i.add(m);const d=Array.from({length:7},(_,b)=>({cx:(Math.random()-.5)*50,cz:(Math.random()-.5)*50,r:8+Math.random()*10,y:9+Math.random()*4,sp:.15+Math.random()*.1,ph:b}));h.push((_,b)=>{d.forEach((x,C)=>{const E=b*x.sp+x.ph;c.position.set(x.cx+Math.cos(E)*x.r,x.y+Math.sin(b*.7+C)*.4,x.cz+Math.sin(E)*x.r),c.rotation.set(0,-E,Math.sin(b*.5+C)*.15);const T=1+Math.sin(b*6+C)*.35*(Math.sin(b*.4+C)>.3?1:.1),A=r?yt.smoothstep(c.position.distanceTo(r.position),3,7):1;c.scale.set(1.4*A,T*1.4*A,1.4*A),c.updateMatrix(),m.setMatrixAt(C,c.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(l.has("leaves")){const g=Math.round(60*a),M=new ai(.16,.1),m=new En(M,new $t({color:"#ffffff",side:cn}),g);i.add(m);const d=Array.from({length:g},(_,b)=>({...f(),ph:Math.random()*6,sp:1+Math.random()*1.5}));d.forEach((_,b)=>m.setColorAt(b,u.set(["#8fbf4a","#c8b04a","#6a9a3a","#d89a3a"][b%4]))),m.instanceColor.needsUpdate=!0,h.push((_,b)=>{d.forEach((x,C)=>{x.x+=x.sp*_,x.z+=Math.sin(b*.8+x.ph)*.6*_,x.x>45&&Object.assign(x,f(),{x:-45});const E=Math.max(o(x.x,x.z),.1)+.3+Math.abs(Math.sin(b*1.3+x.ph))*.9;c.position.set(x.x,E,x.z),c.rotation.set(b*3+x.ph,b*2+x.ph,b*1.5),c.scale.setScalar(1),c.updateMatrix(),m.setMatrixAt(C,c.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(l.has("fireflies")&&s==="skumring"){const g=Math.round(120*a),M=new Float32Array(g*3),m=new Float32Array(g*3),d=Array.from({length:g},()=>({...f(),ph:Math.random()*6})),_=new Ot;_.setAttribute("position",new Xt(M,3)),_.setAttribute("color",new Xt(m,3));const b=document.createElement("canvas");b.width=b.height=32;const x=b.getContext("2d"),C=x.createRadialGradient(16,16,0,16,16,16);C.addColorStop(0,"rgba(255,255,255,1)"),C.addColorStop(1,"rgba(255,255,255,0)"),x.fillStyle=C,x.fillRect(0,0,32,32);const E=new au(_,new Da({size:.35,map:new wi(b),vertexColors:!0,transparent:!0,blending:Ti,depthWrite:!1}));E.frustumCulled=!1,i.add(E),h.push((T,A)=>{d.forEach((y,v)=>{M[v*3]=y.x+Math.sin(A*.4+y.ph)*1.2,M[v*3+1]=y.h+.5+Math.sin(A*.9+y.ph*2)*.4,M[v*3+2]=y.z+Math.cos(A*.35+y.ph)*1.2;const w=Math.max(0,Math.sin(A*1.7+y.ph*3))**3*2.5;m[v*3]=1*w,m[v*3+1]=.9*w,m[v*3+2]=.35*w}),_.attributes.position.needsUpdate=!0,_.attributes.color.needsUpdate=!0})}let p=0;return{update(g){const M=Math.min(.05,Math.max(0,g-p));p=g;for(const m of h)m(M,g)}}}function j_(i,{cell:e=.75,ext:t=68}={}){const n=Math.ceil(t*2/e)+1,s=new Float64Array(n*n),r=new Float32Array(n*n),o=new Float32Array(n*n),a=i.lighthouse.pos,l=(T,A)=>[Math.round((T+t)/e),Math.round((A+t)/e)],c=(T,A)=>[-t+T*e,-t+A*e];let u=()=>!1;function h(){for(let T=0;T<n;T++)for(let A=0;A<n;A++){const[y,v]=c(A,T),w=i.heightAt(y,v),I=T*n+A,U=Math.hypot(y-a.x,v-a.z);let P=1.8;w<-.5||i.slopeAt(y,v)>1.1||i.extras.blocks(y,v)||u(y,v)||U<3.2?P=1/0:i.pathDist(y,v)<1.6?P=.2:w<.05&&(P=2.6),r[I]=P}}function f(){s.fill(1/0),o.fill(0);const T=[],A=(w,I)=>{T.push([w,I]);let U=T.length-1;for(;U>0;){const P=U-1>>1;if(T[P][0]<=T[U][0])break;[T[P],T[U]]=[T[U],T[P]],U=P}},y=()=>{const w=T[0],I=T.pop();if(T.length){T[0]=I;let U=0;for(;;){const P=2*U+1,N=P+1;let B=U;if(P<T.length&&T[P][0]<T[B][0]&&(B=P),N<T.length&&T[N][0]<T[B][0]&&(B=N),B===U)break;[T[B],T[U]]=[T[U],T[B]],U=B}}return w};for(let w=0;w<n;w++)for(let I=0;I<n;I++){const[U,P]=c(I,w),N=Math.hypot(U-a.x,P-a.z);N>=3.2&&N<4.2&&r[w*n+I]<1/0&&(s[w*n+I]=0,A(0,w*n+I))}const v=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;T.length;){const[w,I]=y();if(w>s[I])continue;const U=I%n,P=I/n|0;for(const[N,B,W]of v){const V=U+N,j=P+B;if(V<0||j<0||V>=n||j>=n)continue;const Q=j*n+V,se=r[Q];if(se===1/0)continue;const Ee=w+W*e*(se+r[I])*.5;Ee<s[Q]&&(s[Q]=Ee,o[Q]=o[I]+W*e,A(Ee,Q))}}}const p=(T,A)=>{const[y,v]=l(T,A);return y<0||v<0||y>=n||v>=n?1/0:s[v*n+y]};function g(T,A){const[y,v]=l(T,A);let w=p(T,A),I=0,U=0;for(let N=-1;N<=1;N++)for(let B=-1;B<=1;B++){if(!B&&!N)continue;const W=y+B,V=v+N;if(W<0||V<0||W>=n||V>=n)continue;const j=s[V*n+W];j<w&&(w=j,I=B,U=N)}const P=Math.hypot(I,U)||1;return[I/P,U/P,w]}const M=(T,A)=>{const[y,v]=l(T,A);return y<0||v<0||y>=n||v>=n?-1:v*n+y},m=(T,A)=>{const y=M(T,A);return y<0||s[y]===1/0?0:o[y]};function d(){const T=[];for(const A of i.paths){const y=A.samples.find(v=>i.heightAt(v.x,v.z)>-.4&&m(v.x,v.z)>0);y&&T.push([y.x,y.z])}return T}function _(T,A=22,{near:y=8,minFrac:v=.6}={}){const w=d(),I=Math.max(0,...w.map(([B,W])=>m(B,W))),U=(B,W)=>{const V=i.heightAt(B,W);return V>-.4&&V<.15&&[[4,0],[-4,0],[0,4],[0,-4],[3,3],[-3,3],[3,-3],[-3,-3]].some(([j,Q])=>i.heightAt(B+j,W+Q)<-.9)},P=w.map(([B,W])=>{const V=[],j=[],Q=Math.ceil(y/e),[se,Ee]=l(B,W);for(let H=-Q;H<=Q;H++)for(let Z=-Q;Z<=Q;Z++){const[he,oe]=c(se+Z,Ee+H);Math.hypot(he-B,oe-W)>y||m(he,oe)<v*I||(U(he,oe)?V.push([he,oe]):i.heightAt(he,oe)>.3&&i.slopeAt(he,oe)<.6&&j.push([he,oe]))}return(V.length?V:j).sort(()=>Math.random()-.5)}).filter(B=>B.length).sort(()=>Math.random()-.5),N=[];for(let B=0;N.length<T&&B<4;B++){for(const W of P){const V=W.find(j=>N.every(Q=>Math.hypot(Q[0]-j[0],Q[1]-j[1])>A));if(V&&N.push(V),N.length>=T)break}A=Math.min(A,6)}return N}let b=null;function x(T,A){if(!b){b=new Float32Array(n*n);for(let B=0;B<n;B++)for(let W=0;W<n;W++){const[V,j]=c(W,B);b[B*n+W]=i.isWalkable(V,j)?i.heightAt(V,j)<.05?1.6:1:1/0}}const y=new Float64Array(n*n).fill(1/0),v=[],w=(B,W)=>{v.push([B,W]);let V=v.length-1;for(;V>0;){const j=V-1>>1;if(v[j][0]<=v[V][0])break;[v[j],v[V]]=[v[V],v[j]],V=j}},I=()=>{const B=v[0],W=v.pop();if(v.length){v[0]=W;let V=0;for(;;){const j=2*V+1,Q=j+1;let se=V;if(j<v.length&&v[j][0]<v[se][0]&&(se=j),Q<v.length&&v[Q][0]<v[se][0]&&(se=Q),se===V)break;[v[se],v[V]]=[v[V],v[se]],V=se}}return B},U=M(T,A);if(U<0)return null;y[U]=0,w(0,U);const P=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;v.length;){const[B,W]=I();if(B>y[W])continue;const V=W%n,j=W/n|0;for(const[Q,se,Ee]of P){const Fe=V+Q,H=j+se;if(Fe<0||H<0||Fe>=n||H>=n)continue;const Z=H*n+Fe,he=b[Z];if(he===1/0)continue;const oe=B+Ee*e*he;oe<y[Z]&&(y[Z]=oe,w(oe,Z))}}const N=(B,W)=>{const V=M(B,W);return V<0?1/0:y[V]};return{at:N,dir(B,W){const[V,j]=l(B,W);let Q=N(B,W),se=0,Ee=0;for(let H=-1;H<=1;H++)for(let Z=-1;Z<=1;Z++){if(!Z&&!H)continue;const he=V+Z,oe=j+H;he<0||oe<0||he>=n||oe>=n||y[oe*n+he]<Q&&(Q=y[oe*n+he],se=Z,Ee=H)}const Fe=Math.hypot(se,Ee)||1;return[se/Fe,Ee/Fe]}}}const C=()=>{let T=0;for(const A of s)A<1/0&&A>T&&(T=A);return T},E=()=>{h(),f()};return E(),{at:p,dir:g,coastPoints:_,roadEnds:d,routeLen:m,walkField:x,rebuild:E,setBlock(T){u=T,E()},maxDist:C(),N:n,cell:e}}function Ld(i,e=700,{blending:t=Ti,size:n=.55,opacity:s=1,fadeTo:r=null}={}){const o=new Pe(r||"#000000"),a=new Float32Array(e*3),l=new Float32Array(e*3),c=new Float32Array(e*3),u=new Float32Array(e*3),h=new Float32Array(e),f=new Float32Array(e),p=new Float32Array(e);let g=0;const M=new Ot;M.setAttribute("position",new Xt(a,3)),M.setAttribute("color",new Xt(l,3));const m=document.createElement("canvas");m.width=m.height=64;const d=m.getContext("2d"),_=d.createRadialGradient(32,32,0,32,32,32);_.addColorStop(0,"rgba(255,255,255,1)"),_.addColorStop(.4,"rgba(255,255,255,0.6)"),_.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=_,d.fillRect(0,0,64,64);const b=new Da({size:n,map:new wi(m),vertexColors:!0,transparent:!0,opacity:s,blending:t,depthWrite:!1}),x=new au(M,b);x.frustumCulled=!1,i.add(x);for(let A=0;A<e;A++)a[A*3+1]=-999;const C=new Pe;function E(A,y,v,{n:w=10,color:I="#ffb347",speed:U=4,up:P=3,life:N=.7,gravity:B=9,spread:W=1}={}){C.set(I);for(let V=0;V<w;V++){const j=g;g=(g+1)%e,a[j*3]=A,a[j*3+1]=y,a[j*3+2]=v;const Q=Math.random()*Math.PI*2,se=U*(.4+Math.random()*.6)*W;c[j*3]=Math.cos(Q)*se,c[j*3+1]=P*(.5+Math.random()),c[j*3+2]=Math.sin(Q)*se,u[j*3]=C.r,u[j*3+1]=C.g,u[j*3+2]=C.b,f[j]=h[j]=N*(.6+Math.random()*.6),p[j]=B}}function T(A){for(let y=0;y<e;y++){if(h[y]<=0)continue;if(h[y]-=A,h[y]<=0){a[y*3+1]=-999,l[y*3]=l[y*3+1]=l[y*3+2]=0;continue}c[y*3+1]-=p[y]*A,a[y*3]+=c[y*3]*A,a[y*3+1]+=c[y*3+1]*A,a[y*3+2]+=c[y*3+2]*A;const v=h[y]/f[y];l[y*3]=u[y*3]*v+o.r*(1-v),l[y*3+1]=u[y*3+1]*v+o.g*(1-v),l[y*3+2]=u[y*3+2]*v+o.b*(1-v)}M.attributes.position.needsUpdate=!0,M.attributes.color.needsUpdate=!0}return{emit:E,update:T}}const K_={xbox:{build:"Ⓐ",carry:"Ⓑ",next:"Ⓨ",sel:"LB/RB",pause:"☰",restart:"View",name:"Xbox"},ps:{build:"✕",carry:"○",next:"△",sel:"L1/R1",pause:"Options",restart:"Select",name:"PlayStation"},ps3:{build:"✕",carry:"○",next:"△",sel:"L1/R1",pause:"Start",restart:"Select",name:"PlayStation 3"},switch:{build:"A",carry:"B",next:"X",sel:"L/R",pause:"+",restart:"−",name:"Switch"}},Z_={build:"B",carry:"E",next:"N",sel:"Z/X",pause:"Esc",restart:"R",name:"Tastatur"},J_={build:"Bygg",carry:"Bær",next:"Neste bølge",sel:"",pause:"⏸",restart:"⏸ → ↺",name:"Berøring"};function Q_(i=""){const e=i.toLowerCase();return/nintendo|pro controller|joy-con|joycon|057e/.test(e)?"switch":/0268|playstation\(r\)\s*3|ps3/.test(e)?"ps3":/playstation|dualshock|dualsense|wireless controller|054c|sony/.test(e)?"ps":"xbox"}function eM(i=""){const e=i.toLowerCase();return/0268|playstation\(r\)\s*3|ps3/.test(e)?"PS3 (DualShock 3)":/0ce6|0df2|dualsense/.test(e)?"PS5 (DualSense)":/05c4|09cc|0ba0|dualshock\s*4/.test(e)?"PS4 (DualShock 4)":/playstation|wireless controller|054c|sony/.test(e)?"PlayStation":/xbox|xinput|045e/.test(e)?"Xbox":/nintendo|pro controller|057e/.test(e)?"Switch Pro":/joy-con|joycon/.test(e)?"Joy-Con":"Spillkontroll"}const hs={evdev:{btn:[0,1,3,2,4,5,6,7,8,9,11,12],home:10,hat:[6,7],look:3},ds3:{btn:[0,1,3,2,4,5,6,7,8,9,11,12],home:10,dpad:[13,14,15,16],look:3},ds3old:{btn:[14,13,15,12,10,11,8,9,0,3,1,2],home:16,dpad:[4,6,7,5],look:2},dinput:{btn:[0,1,2,3,4,5,6,7,8,9,10,11],home:12,hat9:!0,look:2}};function tM(i,e=[]){return i.mapping==="standard"?null:/0268|playstation\(r\)\s*3/i.test(i.id)?i.axes.length>8?hs.ds3old:hs.ds3:Math.abs(e[9]??0)>1.1?hs.dinput:i.axes.length>=8?hs.evdev:hs.dinput}function nM(i){if(i===void 0||i>1.1||i<-1.1)return[!1,!1,!1,!1];const e=Math.round((i+1)*3.5)%8;return[e===7||e<=1,e>=3&&e<=5,e>=5&&e<=7,e>=1&&e<=3]}function iM(i,e=[]){const t=i.buttons.map(a=>!!a&&(a.pressed||a.value>.5)),n=tM(i,e);if(!n)return{down:t,axes:[i.axes[0]||0,i.axes[1]||0,i.axes[2]||0,i.axes[3]||0],layout:"standard"};const s=n.btn.map(a=>!!t[a]);let r=[!1,!1,!1,!1];if(n.dpad)r=n.dpad.map(a=>!!t[a]);else if(n.hat&&i.axes.length>n.hat[1]){const a=i.axes[n.hat[0]],l=i.axes[n.hat[1]];r=[l<-.5,l>.5,a<-.5,a>.5]}else n.hat9&&(r=nM(i.axes[9]));s.push(...r,!!t[n.home]);const o=a=>Math.abs(e[a]??0)>.5?0:i.axes[a]||0;return{down:s,axes:[o(0),o(1),o(n.look),o(n.look+1)],layout:n===hs.evdev?"evdev":n===hs.ds3?"ds3":n===hs.ds3old?"ds3old":"dinput"}}function sM(i){const e=i==="switch";return{build:e?1:0,carry:e?0:1,next:3,prev:4,nextSel:5,zoomOut:6,zoomIn:7,pause:9,back:8}}function rM(i){const e=new Set,t={move:{x:0,z:0},look:0,lookDelta:0,zoom:1,pressed:new Set,rollMode:!1,clicks:[],device:matchMedia("(pointer: coarse)").matches?"touch":"kb",padKind:"xbox",padId:""},n=v=>t.pressed.add(v),s=v=>{t.device=v};addEventListener("keydown",v=>{if(s("kb"),(v.code==="Space"||v.code.startsWith("Arrow")||v.code==="Tab")&&v.preventDefault(),v.repeat)return;if(t.rollMode){const I={ArrowUp:"rU",KeyW:"rU",ArrowRight:"rR",KeyD:"rR",ArrowDown:"rD",KeyS:"rD",ArrowLeft:"rL",KeyA:"rL",Escape:"rollExit",KeyQ:"rollExit"}[v.code];if(I){n(I);return}}e.add(v.code);const w={KeyE:"carry",Space:"carry",KeyB:"build",Digit1:"b1",Digit2:"b2",Digit3:"b3",Digit4:"b4",Digit5:"b5",Digit6:"b6",Digit7:"b7",Numpad1:"b1",Numpad2:"b2",Numpad3:"b3",Numpad4:"b4",Numpad5:"b5",Numpad6:"b6",Numpad7:"b7",KeyZ:"selPrev",KeyX:"selNext",KeyQ:"selPrev",KeyR:"restart",KeyN:"next",Enter:"next",KeyF:"fps",KeyM:"music",Escape:"pause",KeyP:"pause"};w[v.code]&&n(w[v.code])}),addEventListener("keyup",v=>e.delete(v.code)),addEventListener("blur",()=>e.clear()),i.addEventListener("wheel",v=>{v.preventDefault(),s("kb"),t.zoom=ra(t.zoom*(v.deltaY>0?1.08:1/1.08),.55,4.5)},{passive:!1}),i.addEventListener("contextmenu",v=>v.preventDefault());const r=new Map;let o=0,a=1,l=null;const c=v=>({x:v.clientX/innerWidth*2-1,y:-(v.clientY/innerHeight)*2+1});i.addEventListener("pointerdown",v=>{if(s(v.pointerType==="touch"?"touch":"kb"),v.pointerType==="mouse"&&v.button===2){l={x:v.clientX},i.setPointerCapture(v.pointerId);return}v.pointerType==="mouse"&&v.button!==0||(r.set(v.pointerId,{e:v,t:performance.now(),x0:v.clientX,y0:v.clientY}),r.size===2&&(o=sf(r),a=t.zoom))}),i.addEventListener("pointermove",v=>{if(l){t.lookDelta+=(v.clientX-l.x)*.008,l.x=v.clientX;return}const w=r.get(v.pointerId);w&&(w.e=v,r.size===2&&o>0&&(t.zoom=ra(a*(o/sf(r)),.55,4.5)))});const u=v=>{if(l&&v.button===2){l=null;return}const w=r.get(v.pointerId);w&&r.size===1&&o===0&&Math.hypot(v.clientX-w.x0,v.clientY-w.y0)<12&&t.clicks.push(c(v)),r.delete(v.pointerId),r.size<2&&(o=0)};i.addEventListener("pointerup",u),i.addEventListener("pointercancel",v=>{r.delete(v.pointerId),l=null,o=0});const h=document.getElementById("stick"),f=document.getElementById("knob"),p={x:0,z:0};let g=null;const M=v=>{const w=h.getBoundingClientRect();let I=v.clientX-(w.left+w.width/2),U=v.clientY-(w.top+w.height/2);const P=w.width/2,N=Math.hypot(I,U);N>P&&(I*=P/N,U*=P/N),f.style.transform=`translate(${I}px, ${U}px)`;const B=N/P<.15?0:1;p.x=I/P*B,p.z=U/P*B};h.addEventListener("pointerdown",v=>{s("touch"),g=v.pointerId,h.setPointerCapture(v.pointerId),M(v)}),h.addEventListener("pointermove",v=>{v.pointerId===g&&M(v)});const m=v=>{v.pointerId===g&&(g=null,p.x=p.z=0,f.style.transform="")};h.addEventListener("pointerup",m),h.addEventListener("pointercancel",m);const d=(v,w)=>v.addEventListener("pointerdown",I=>{I.preventDefault(),I.stopPropagation(),I.pointerType==="touch"&&s("touch"),n(w)});d(document.getElementById("btn-build"),"build"),d(document.getElementById("btn-carry"),"carry"),d(document.getElementById("btn-next"),"next"),d(document.getElementById("btn-pause"),"pause"),document.querySelectorAll("#build-panel button").forEach((v,w)=>d(v,"b"+(w+1))),document.querySelectorAll("#rollpad [data-r]").forEach(v=>d(v,v.dataset.r)),d(document.getElementById("btn-rollexit"),"rollExit");let _=[],b=null,x={dir:null,t:0,rep:0},C=0,E=0;t.padSeen=!1,t.onPad=null;const T=v=>{var w;b=v?v.axes.slice():null,_=[],v&&(t.padId=v.id,t.padKind=Q_(v.id),t.padSeen=!0,(w=t.onPad)==null||w.call(t,"connect",v.id))};addEventListener("gamepadconnected",v=>{v.gamepad.id!==t.padId&&T(v.gamepad)}),addEventListener("gamepaddisconnected",v=>{var w;v.gamepad.id===t.padId&&(t.padId="",b=null,(w=t.onPad)==null||w.call(t,"disconnect",v.gamepad.id),t.device==="pad"&&(t.device=matchMedia("(pointer: coarse)").matches?"touch":"kb"))});let A=null;function y(v){var he,oe;let w=[];try{w=navigator.getGamepads?[...navigator.getGamepads()]:[]}catch{w=[]}const I=w.find(me=>me&&me.connected&&me.id===t.padId)||w.find(me=>me&&me.connected);if(A=I||null,!I)return null;(I.id!==t.padId||!b)&&T(I);const U=sM(t.padKind),{down:P,axes:N}=iM(I,b),B=_,W=me=>P[me]&&!B[me],V=me=>Math.abs(me)<.2?0:(me-Math.sign(me)*.2)/.8;let j=V(N[0]),Q=V(N[1]);const se=P[14]?-1:P[15]?1:0,Ee=P[12]?-1:P[13]?1:0;se&&(j=se),Ee&&(Q=Ee);const Fe=V(N[2]);if((j||Q||Fe||P.some(Boolean))&&s("pad"),_=P,(he=t.menu)==null?void 0:he.root()){const me=Ee<0||N[1]<-.6?"up":Ee>0||N[1]>.6?"down":se<0||N[0]<-.6?"left":se>0||N[0]>.6?"right":null;return me!==x.dir?(x={dir:me,t:0,rep:0},me&&t.menu.move(me)):me&&(x.t+=v,x.t>.4+x.rep*.15&&(x.rep++,t.menu.move(me))),W(U.build)&&t.menu.ok(),W(U.carry)&&t.menu.back(),W(U.pause)&&n("pause"),W(U.back)&&n("restart"),{x:0,z:0,look:0,zoomIn:!1,zoomOut:!1}}return x.dir=null,t.rollMode?(W(12)&&n("rU"),W(15)&&n("rR"),W(13)&&n("rD"),W(14)&&n("rL"),W(U.carry)&&n("rollExit"),E=Math.hypot(N[0],N[1])>.6?E+v:0,E>=.3&&(E=0,n("rollExit")),W(U.pause)&&n("pause"),{x:0,z:0,look:Fe,zoomIn:P[U.zoomIn],zoomOut:P[U.zoomOut]}):(E=0,(oe=t.panelOpen)!=null&&oe.call(t)&&se?(W(14)&&n("selPrev"),W(15)&&n("selNext"),C+=v,C<.25&&!V(N[0])&&(j=0)):C=0,W(U.build)&&n("build"),W(U.carry)&&n("carry"),W(U.next)&&n("next"),W(U.prev)&&n("selPrev"),W(U.nextSel)&&n("selNext"),W(U.pause)&&n("pause"),W(U.back)&&n("restart"),W(2)&&t.padKind!=="switch"&&n("next"),{x:j,z:Q,look:Fe,zoomIn:P[U.zoomIn],zoomOut:P[U.zoomOut]})}return t.rumble=(v=200,w=.6)=>{var I,U,P,N;if(!(!A||t.device!=="pad"))try{(I=A.vibrationActuator)!=null&&I.playEffect?A.vibrationActuator.playEffect("dual-rumble",{duration:v,strongMagnitude:w,weakMagnitude:w/2}):(N=(P=(U=A.hapticActuators)==null?void 0:U[0])==null?void 0:P.pulse)==null||N.call(P,w,v)}catch{}},t.update=v=>{let w=0,I=0;(e.has("KeyA")||e.has("ArrowLeft"))&&(w-=1),(e.has("KeyD")||e.has("ArrowRight"))&&(w+=1),(e.has("KeyW")||e.has("ArrowUp"))&&(I-=1),(e.has("KeyS")||e.has("ArrowDown"))&&(I+=1);const U=y(v);U&&(U.x||U.z)&&(w=U.x,I=U.z),(p.x||p.z)&&(w=p.x,I=p.z);const P=Math.hypot(w,I);P>1&&(w/=P,I/=P),t.move.x=w,t.move.z=I,t.look=t.lookDelta+(U?U.look*2.2*v:0),t.lookDelta=0,U!=null&&U.zoomIn&&(t.zoom=ra(t.zoom/(1+v*1.2),.55,4.5)),U!=null&&U.zoomOut&&(t.zoom=ra(t.zoom*(1+v*1.2),.55,4.5))},t.labels=()=>t.device==="pad"?K_[t.padKind]:t.device==="touch"?J_:Z_,t.consume=v=>t.pressed.delete(v),t.clear=()=>{t.pressed.clear(),t.clicks.length=0},t}const ra=(i,e,t)=>Math.max(e,Math.min(t,i));function sf(i){const[e,t]=[...i.values()].map(n=>n.e);return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)||1}const si=i=>document.getElementById(i),oM=["btn-start","btn-again","btn-yes","btn-resume","btn-portrait"];function aM(i){let e=null;const t=u=>u&&!u.classList.contains("hidden")&&getComputedStyle(u).display!=="none";function n(){return t(si("rotate"))?si("rotate"):t(si("pause"))?t(si("confirm"))?si("confirm"):si("pause"):t(si("overlay"))?si("overlay"):null}const s=u=>[...u.querySelectorAll("button, input[type=range]")].filter(h=>!h.disabled&&h.offsetParent!==null&&!h.closest(".hidden")&&(u.id==="confirm"||!h.closest("#confirm")));function r(u){var h;e&&e!==u&&e.classList.remove("pad-focus"),e=u,u&&(i.device==="pad"&&u.classList.add("pad-focus"),(h=u.scrollIntoView)==null||h.call(u,{block:"nearest"}))}function o(){const u=n();if(!u)return e&&(e.classList.remove("pad-focus"),e=null),null;const h=s(u);return(!e||!h.includes(e))&&r(oM.map(f=>h.find(p=>p.id===f)).find(Boolean)||h[0]||null),e&&e.classList.toggle("pad-focus",i.device==="pad"),u}function a(u){const h=o();if(!h||!e)return;if(e.type==="range"&&(u==="left"||u==="right")){e.value=String(Math.max(0,Math.min(100,+e.value+(u==="left"?-10:10)))),e.dispatchEvent(new Event("input",{bubbles:!0}));return}const f=e.getBoundingClientRect(),p=f.left+f.width/2,g=f.top+f.height/2,[M,m]={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]}[u];let d=null,_=1/0,b=!1;for(const x of s(h)){if(x===e)continue;const C=x.getBoundingClientRect(),E=C.left+C.width/2-p,T=C.top+C.height/2-g,A=E*M+T*m,y=Math.abs(E*m-T*M);if(A<=4)continue;const v=y<=A,w=A+y*2;(v&&!b||v===b&&w<_)&&(_=w,d=x,b=v)}d&&r(d)}function l(){!o()||!e||e.type==="range"||e.click()}function c(){const u=o();u&&(u.id==="confirm"?si("btn-no").click():u.id==="pause"&&(t(si("lex"))?si("lex").classList.add("hidden"):si("btn-resume").click()))}return{root:()=>o(),move:a,ok:l,back:c,sync:o,get focused(){return e}}}let Zt=null,Mr=null,vo=null;function lM(){if(Zt){Zt.resume();return}const i=window.AudioContext||window.webkitAudioContext;if(!i)return;Zt=new i,Mr=Zt.createGain(),Mr.gain.value=.5,Mr.connect(Zt.destination),vo=Zt.createBuffer(1,Zt.sampleRate*2,Zt.sampleRate);const e=vo.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1;cM()}const Dd=()=>Zt?{ctx:Zt,noiseBuf:vo}:null;function tn(i,e,{type:t="sine",vol:n=.2,slide:s=0,delay:r=0}={}){if(!Zt)return;const o=Zt.currentTime+r,a=Zt.createOscillator(),l=Zt.createGain();a.type=t,a.frequency.setValueAtTime(i,o),s&&a.frequency.exponentialRampToValueAtTime(Math.max(30,i+s),o+e),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(n,o+.01),l.gain.exponentialRampToValueAtTime(1e-4,o+e),a.connect(l).connect(Mr),a.start(o),a.stop(o+e+.02)}function Xi(i,{vol:e=.3,freq:t=800,q:n=.7,delay:s=0}={}){if(!Zt)return;const r=Zt.currentTime+s,o=Zt.createBufferSource();o.buffer=vo;const a=Zt.createBiquadFilter();a.type="lowpass",a.frequency.value=t,a.Q.value=n;const l=Zt.createGain();l.gain.setValueAtTime(e,r),l.gain.exponentialRampToValueAtTime(1e-4,r+i),o.connect(a).connect(l).connect(Mr),o.start(r,Math.random()),o.stop(r+i+.02)}function cM(){const i=Zt.createBufferSource();i.buffer=vo,i.loop=!0;const e=Zt.createBiquadFilter();e.type="lowpass",e.frequency.value=420;const t=Zt.createGain();t.gain.value=.035;const n=Zt.createOscillator(),s=Zt.createGain();n.frequency.value=.12,s.gain.value=.03,n.connect(s).connect(t.gain),i.connect(e).connect(t).connect(Mr),i.start(),n.start()}let rf=0;const Dt={pickup(){if(!Zt)return;const i=Zt.currentTime,e=i-rf<.4?1.12:1;rf=i,tn(880*e+Math.random()*60,.12,{type:"triangle",vol:.12}),tn(1320*e,.1,{type:"sine",vol:.06,delay:.04})},puff(){Xi(.18,{vol:.07,freq:600,q:.3}),tn(240,.12,{vol:.04,slide:-60})},crunch(){for(let i=0;i<4;i++)Xi(.05,{vol:.1,freq:3500,delay:i*.03});tn(130,.18,{vol:.08,slide:-40})},skank(){[[392,494,587],[349,440,523]][Math.random()<.5?0:1].forEach(i=>tn(i,.11,{type:"square",vol:.025})),tn(98,.3,{vol:.08})},chill(){tn(330,.5,{type:"sine",vol:.07,slide:160}),tn(495,.45,{type:"triangle",vol:.04,slide:120,delay:.08})},shoot(){tn(520,.07,{type:"square",vol:.03,slide:-300})},mortar(){Xi(.12,{vol:.12,freq:500}),tn(160,.15,{type:"sine",vol:.12,slide:-80})},boom(){Xi(.45,{vol:.28,freq:380}),tn(90,.35,{vol:.18,slide:-50})},horn(){tn(196,.5,{type:"sawtooth",vol:.035}),tn(147,.55,{type:"sine",vol:.06})},hit(){Xi(.05,{vol:.08,freq:2500})},die(){tn(420,.18,{type:"triangle",vol:.09,slide:-280}),Xi(.12,{vol:.07,freq:1200})},build(){[392,494,587].forEach((i,e)=>tn(i,.25,{type:"triangle",vol:.1,delay:e*.06}))},upgrade(){[523,659,784,1047].forEach((i,e)=>tn(i,.22,{type:"triangle",vol:.1,delay:e*.07}))},bonk(){tn(110,.16,{type:"sine",vol:.12,slide:-40}),Xi(.05,{vol:.05,freq:400})},tick(i=1){Xi(.025,{vol:.06,freq:4e3}),tn(392*Math.pow(2,i/12*2),.07,{type:"triangle",vol:.07})},stone(){tn(660,.2,{type:"sine",vol:.1,slide:200})},lose(){tn(220,.6,{type:"sawtooth",vol:.06,slide:-120}),Xi(.3,{vol:.08,freq:300})},stun(){tn(700,.4,{type:"square",vol:.05,slide:-500})},deny(){tn(150,.12,{type:"square",vol:.05})},wave(){[330,330,440].forEach((i,e)=>tn(i,.3,{type:"sawtooth",vol:.04,delay:e*.18}))},win(){[523,659,784,1047,1319].forEach((i,e)=>tn(i,.4,{type:"triangle",vol:.12,delay:e*.12}))}},Lc=172,qi=60/Lc/4,Es=i=>440*Math.pow(2,(i-69)/12),of={tak:{chords:[[50,66,69,73,76],[47,62,66,69,74],[43,59,62,66,71],[45,61,64,69,73]],hook:[[0,78,3],[3,76,3],[6,73,2],[8,74,4],[14,71,2],[16,73,3],[19,74,3],[22,76,6],[28,69,4]],pad:"sawtooth",padCut:2400,arpOct:12,reeseDetune:9,drive:0,space:.35,arpRate:1,lead:"square"},vinter:{chords:[[45,60,64,71,76],[41,57,64,69,72],[48,64,67,72,79],[43,59,62,67,71]],hook:[[0,76,6],[6,74,2],[8,72,6],[16,71,4],[20,72,2],[22,74,4],[26,79,6]],pad:"triangle",padCut:1500,arpOct:24,reeseDetune:6,drive:0,space:.6,arpRate:2,lead:"triangle"},vulkan:{chords:[[40,55,59,64,67],[41,57,60,65,69],[40,55,59,64,71],[38,54,57,62,66]],hook:[[0,64,2],[2,65,2],[4,64,4],[10,62,2],[12,59,4],[16,64,2],[18,67,2],[20,65,4],[26,64,6]],pad:"sawtooth",padCut:900,arpOct:0,reeseDetune:16,drive:.6,space:.25,arpRate:1,lead:"sawtooth"}},Tl={A:{k:"x.x.......xx....x.x.......x.....",s:"....x..x.x..x..x....x..x.x..x.x.",g:"..........x...........x.....x..."},B:{k:"x.....x...x.x...x.x...x...x.....",s:"....x.x..x..x.x.....x..xx..x..x.",g:".x.......x.....x.x.......x......"},FILL:{k:"x.x.......x.....x...............",s:"....x..x.x..x..x....x.xxxxxxxxxx",g:"................................"}},af=[["build",8],["drop",16],["break",8],["drop",16]];function uM(i,e,t){const n=of[t]||of.tak,s=i.createDynamicsCompressor();s.threshold.value=-18,s.ratio.value=3,s.attack.value=.01,s.release.value=.2;const r=i.createDynamicsCompressor();r.threshold.value=-3,r.ratio.value=20,r.attack.value=.002,r.release.value=.08;const o=i.createGain();o.gain.value=0,s.connect(r).connect(o).connect(i.destination);const a=i.createAnalyser();a.fftSize=1024,o.connect(a);const l={};for(const $ of["drums","bass","pad","arp","lead"]){const R=i.createGain();R.gain.value=0,R.connect(s),l[$]=R}const c={};for(const $ of["pad","bass"]){const R=i.createGain();R.gain.value=1,R.connect(l[$]),c[$]=R}const u=($,R)=>{const S=i.createBuffer(2,Math.floor(i.sampleRate*$),i.sampleRate);for(let X=0;X<2;X++){const ee=S.getChannelData(X);for(let ie=0;ie<ee.length;ie++)ee[ie]=(Math.random()*2-1)*Math.pow(1-ie/ee.length,R)}return S},h=i.createConvolver();h.buffer=u(2.4,2.5);const f=i.createGain();f.gain.value=n.space,h.connect(f).connect(s);const p=i.createConvolver();p.buffer=u(.5,.4);const g=i.createGain();g.gain.value=0,p.connect(g).connect(l.drums);const M=i.createDelay(1);M.delayTime.value=qi*3;const m=i.createGain();m.gain.value=.38;const d=i.createBiquadFilter();d.type="lowpass",d.frequency.value=2400;const _=i.createStereoPanner(),b=i.createOscillator(),x=i.createGain();b.frequency.value=Lc/60/3,x.gain.value=.8,b.connect(x).connect(_.pan),b.start(),M.connect(d).connect(m).connect(M),d.connect(_).connect(l.arp);const C=i.createBiquadFilter();C.type="highpass",C.frequency.value=180;const E=i.createBiquadFilter();E.type="lowpass",E.frequency.value=n.padCut,E.Q.value=2;const T=i.createOscillator(),A=i.createGain();T.frequency.value=.07,A.gain.value=n.padCut*.45,T.connect(A).connect(E.frequency),T.start();const y=i.createDelay(.05);y.delayTime.value=.014;const v=i.createOscillator(),w=i.createGain();v.frequency.value=.5,w.gain.value=.004,v.connect(w).connect(y.delayTime),v.start();const I=i.createStereoPanner();I.pan.value=.6,C.connect(E),E.connect(c.pad),E.connect(y).connect(I).connect(c.pad),E.connect(h);const U=i.createBiquadFilter();U.type="lowpass",U.frequency.value=420,U.Q.value=6;const P=i.createOscillator(),N=i.createGain();if(P.frequency.value=Lc/60/4,N.gain.value=260,P.connect(N).connect(U.frequency),P.start(),n.drive>0){const $=i.createWaveShaper(),R=new Float32Array(1024);for(let S=0;S<1024;S++){const X=S/512-1;R[S]=Math.tanh(X*(1+n.drive*6))}$.curve=R,U.connect($).connect(c.bass)}else U.connect(c.bass);const B=i.createBiquadFilter();B.type="lowpass",B.frequency.value=3600,B.Q.value=3,B.connect(l.lead),B.connect(M),B.connect(h);const W=($,R,S,X,ee,ie)=>{$.gain.setValueAtTime(1e-4,R),$.gain.exponentialRampToValueAtTime(X,R+S),$.gain.setValueAtTime(X,R+Math.max(S,ie-ee)),$.gain.exponentialRampToValueAtTime(1e-4,R+ie)},V=($,R)=>{const S=i.createStereoPanner();return S.pan.value=R,$.connect(S),S},j=($,R,S,X,ee,ie,re="bandpass",ke=0)=>{const Se=i.createBufferSource();Se.buffer=e;const De=i.createBiquadFilter();De.type=re,De.frequency.value=S,De.Q.value=X;const ot=i.createGain();W(ot,$,.001,ee,R*.8,R),Se.connect(De).connect(ot);const we=ke?V(ot,ke):ot;for(const je of ie)we.connect(je);Se.start($,Math.random()*1.5),Se.stop($+R+.02)},Q=($,R=1)=>{const S=i.createOscillator(),X=i.createGain();S.frequency.setValueAtTime(160,$),S.frequency.exponentialRampToValueAtTime(44,$+.11),W(X,$,.002,1*R,.2,.3),S.connect(X).connect(l.drums),S.start($),S.stop($+.32),j($,.012,3500,.7,.35*R,[l.drums],"highpass");for(const ee of Object.values(c))ee.gain.cancelScheduledValues($),ee.gain.setValueAtTime(.35,$),ee.gain.linearRampToValueAtTime(1,$+.2)},se=($,R=1)=>{j($,.17,1900,.8,.5*R,[l.drums,p]);for(const[S,X,ee]of[[200,160,.3],[340,260,.14]]){const ie=i.createOscillator(),re=i.createGain();ie.type="triangle",ie.frequency.setValueAtTime(S,$),ie.frequency.exponentialRampToValueAtTime(X,$+.08),W(re,$,.001,ee*R,.06,.11),ie.connect(re).connect(l.drums),ie.start($),ie.stop($+.13)}g.gain.setValueAtTime(.9*R,$),g.gain.setValueAtTime(1e-4,$+.21)};let Ee=1;const Fe=($,R,S)=>{Ee=-Ee,j($,S?.14:.035,9e3,.6,(S?.12:.08)*R,[l.drums],"highpass",Ee*.35)},H=($,R,S)=>{for(const ie of[-n.reeseDetune,n.reeseDetune]){const re=i.createOscillator(),ke=i.createGain();re.type="sawtooth",re.frequency.value=Es(R),re.detune.value=ie,W(ke,$,.02,.2,.1,S),V(re.connect(ke),ie>0?.25:-.25).connect(U),re.start($),re.stop($+S+.05)}const X=i.createOscillator(),ee=i.createGain();X.frequency.value=Es(R-12),W(ee,$,.02,.42,.1,S),X.connect(ee).connect(c.bass),X.start($),X.stop($+S+.05)},Z=($,R,S,X=1)=>{for(const ee of R.slice(1))for(const[ie,re]of[[-9,-.6],[0,0],[8,.6]]){const ke=i.createOscillator(),Se=i.createGain();ke.type=n.pad,ke.frequency.value=Es(ee),ke.detune.value=ie,W(Se,$,.8,.026*X,1.4,S),V(ke.connect(Se),re).connect(C),ke.start($),ke.stop($+S+.1)}},he=($,R,S=1)=>{const X=i.createOscillator(),ee=i.createGain();X.type="square",X.frequency.value=Es(R+n.arpOct);const ie=i.createBiquadFilter();ie.type="lowpass",ie.frequency.value=3200,W(ee,$,.003,.05*S,.08,qi*1.6),X.connect(ie).connect(ee),ee.connect(l.arp),ee.connect(M),X.start($),X.stop($+qi*2)},oe=($,R,S,X)=>{const ee=S*qi;for(const ie of[-6,6]){const re=i.createOscillator(),ke=i.createGain();re.type=n.lead,X?(re.frequency.setValueAtTime(Es(X),$),re.frequency.exponentialRampToValueAtTime(Es(R),$+.05)):re.frequency.value=Es(R),re.detune.value=ie;const Se=i.createOscillator(),De=i.createGain();Se.frequency.value=5.5,De.gain.value=9,Se.connect(De).connect(re.detune),Se.start($+.12),Se.stop($+ee+.05),W(ke,$,.01,.07,Math.min(.12,ee*.4),ee),V(re.connect(ke),ie>0?.2:-.2).connect(B),re.start($),re.stop($+ee+.05)}};let me=0,Le=0,Ue=null,qe=0,de=.7,Me=!1,O=0;const $e=af.reduce(($,[,R])=>$+R,0),be=()=>{if(qe<.5)return"ambient";let $=O%$e;for(const[R,S]of af){if($<S)return R;$-=S}return"drop"},Oe=()=>{const $=i.currentTime,R=(X,ee)=>{X.gain.cancelScheduledValues($),X.gain.setTargetAtTime(ee,$,.8)},S=qe;R(l.drums,.1+.85*S),R(l.bass,.3+.6*S),R(l.pad,.75-.2*S),R(l.arp,.35+.3*S),R(l.lead,.55+.35*S),o.gain.cancelScheduledValues($),o.gain.setTargetAtTime(Me?0:de*.8,$,.3)},Ie=$=>$%2?qi*.12:0,nt=()=>{for(;Le<i.currentTime+.15;){const $=me%32,R=Math.floor(me/16),S=Math.floor(me/32)%n.chords.length,X=n.chords[S];$%16===0&&me>0&&qe>.5&&O++;const ee=be(),ie=Le+Ie($),re=O%8;if(ee==="drop"||ee==="build"){const Se=re%4===3&&$>=16?Tl.FILL:re>=6?Tl.B:Tl.A,De=ee==="build"&&re<4;Se.k[$]==="x"&&!(De&&$%8)&&Q(ie),Se.s[$]==="x"&&!De&&se(ie,ee==="build"?.7:1),Se.g[$]==="x"&&se(ie,.3),(!De||$%2===0)&&Fe(ie,$%2?.6:1,$%8===6)}else ee==="break"?($%4===2&&Fe(ie,.6,!1),($===0||$===16)&&Q(ie,.4)):$%4===2&&Fe(ie,.45,!1);if($===0&&(Z(ie,X,qi*32,ee==="break"?1.3:1),H(ie,X[0],qi*(ee==="drop"?14:30))),ee==="drop"&&$===16&&H(ie,X[0]+(S%2?3:7),qi*14),$%n.arpRate===0&&ee!=="break"&&he(ie,X[1+$/n.arpRate%4]+($>=16?12:0),ee==="ambient"?.7:1),ee==="drop"||(ee==="break"||ee==="ambient")&&Math.floor(R/4)%2===1){const Se=n.hook.findIndex(([De])=>De===$);if(Se>=0){const[,De,ot]=n.hook[Se];oe(ie,De+(ee==="ambient"?-12:0),ot,Se>0?n.hook[Se-1][1]:0)}}Le+=qi,me++}};return{start(){Ue||(Le=i.currentTime+.1,Ue=setInterval(nt,25),Oe())},stop(){clearInterval(Ue),Ue=null,o.gain.setTargetAtTime(0,i.currentTime,.2)},setIntensity($){$>.5&&qe<=.5&&(O=0),qe=$,Oe()},setVolume($){de=$,Oe()},setMuted($){Me=$,Oe()},get muted(){return Me},get volume(){return de},rms(){const $=new Float32Array(a.fftSize);return a.getFloatTimeDomainData($),Math.sqrt($.reduce((R,S)=>R+S*S,0)/$.length)},get intensity(){return qe},get section(){return be()},tap($){o.connect($)}}}const lf=i=>440*Math.pow(2,(i-69)/12),jr=60/76,cf={tak:{chords:[[50,62,66,69,73],[47,59,62,66,71],[43,59,62,67,71],[45,57,61,64,69]],scale:[62,64,66,69,71,74,76,78,81],bell:"sine",padCut:1400,nature:"birds"},vinter:{chords:[[45,57,64,67,71],[41,57,60,64,67],[48,60,64,67,74],[43,55,62,67,69]],scale:[64,67,69,71,74,76,79,81,83],bell:"triangle",padCut:1100,nature:"wind"},vulkan:{chords:[[40,52,59,62,67],[41,53,60,64,67],[38,50,57,62,65],[40,52,55,59,64]],scale:[52,55,57,59,62,64,67,69,71],bell:"sine",padCut:800,nature:"rumble"}},uf=8;function hM(i,e,t){const n=cf[t]||cf.tak,s=i.createDynamicsCompressor();s.threshold.value=-20,s.ratio.value=2.5,s.attack.value=.03,s.release.value=.4;const r=i.createGain();r.gain.value=0,s.connect(r).connect(i.destination);const o=i.createAnalyser();o.fftSize=1024,r.connect(o);const a={};for(const H of["pad","bell","nature","pulse"]){const Z=i.createGain();Z.gain.value=0,Z.connect(s),a[H]=Z}const l=i.createBuffer(2,Math.floor(i.sampleRate*3.5),i.sampleRate);for(let H=0;H<2;H++){const Z=l.getChannelData(H);for(let he=0;he<Z.length;he++)Z[he]=(Math.random()*2-1)*Math.pow(1-he/Z.length,3)}const c=i.createConvolver();c.buffer=l;const u=i.createGain();u.gain.value=.55,c.connect(u).connect(s);const h=i.createDelay(2);h.delayTime.value=jr*.75;const f=i.createGain();f.gain.value=.35;const p=i.createBiquadFilter();p.type="lowpass",p.frequency.value=2200,h.connect(p).connect(f).connect(h),p.connect(a.bell);const g=i.createBiquadFilter();g.type="lowpass",g.frequency.value=n.padCut,g.Q.value=.7;const M=i.createOscillator(),m=i.createGain();M.frequency.value=.05,m.gain.value=n.padCut*.3,M.connect(m).connect(g.frequency),M.start(),g.connect(a.pad),g.connect(c);const d=(H,Z,he,oe,me,Le)=>{H.gain.setValueAtTime(1e-4,Z),H.gain.exponentialRampToValueAtTime(oe,Z+he),H.gain.setValueAtTime(oe,Z+Math.max(he,Le-me)),H.gain.exponentialRampToValueAtTime(1e-4,Z+Le)},_=(H,Z)=>{const he=i.createStereoPanner();return he.pan.value=Z,H.connect(he),he},b=(H,Z,he)=>{for(const oe of Z)for(const[me,Le]of[[-7,-.5],[7,.5]]){const Ue=i.createOscillator(),qe=i.createGain();Ue.type=oe===Z[0]?"sine":"triangle",Ue.frequency.value=lf(oe),Ue.detune.value=me,d(qe,H,2.5,oe===Z[0]?.05:.022,3,he),_(Ue.connect(qe),Le).connect(g),Ue.start(H),Ue.stop(H+he+.1)}},x=(H,Z,he=1)=>{const oe=(Math.random()-.5)*.8;for(const[me,Le,Ue]of[[1,.09,1.6],[4.2,.02,.25],[2,.025,.7]]){const qe=i.createOscillator(),de=i.createGain();qe.type=me===1?n.bell:"sine",qe.frequency.value=lf(Z)*me,de.gain.setValueAtTime(1e-4,H),de.gain.exponentialRampToValueAtTime(Le*he,H+.005),de.gain.exponentialRampToValueAtTime(1e-4,H+Ue);const Me=_(qe.connect(de),oe);Me.connect(a.bell),Me.connect(h),Me.connect(c),qe.start(H),qe.stop(H+Ue+.05)}},C=(H,Z,he,oe,me,Le,Ue,qe=.002)=>{const de=i.createBufferSource();de.buffer=e;const Me=i.createBiquadFilter();Me.type=he,Me.frequency.value=oe,Me.Q.value=me;const O=i.createGain();return d(O,H,qe,Le,Z*.7,Z),de.connect(Me).connect(O).connect(Ue),de.start(H,Math.random()*1.5),de.stop(H+Z+.05),Me},E=H=>{const Z=i.createOscillator(),he=i.createGain();Z.frequency.setValueAtTime(90,H),Z.frequency.exponentialRampToValueAtTime(50,H+.18),d(he,H,.01,.35,.2,.3),Z.connect(he).connect(a.pulse),Z.start(H),Z.stop(H+.32)},T=(H,Z)=>C(H,.09,"highpass",7e3,.5,.05*Z,a.pulse,.02),A=H=>{const Z=2+Math.floor(Math.random()*3),he=2400+Math.random()*1600,oe=(Math.random()-.5)*1.4;for(let me=0;me<Z;me++){const Le=H+me*(.09+Math.random()*.06),Ue=i.createOscillator(),qe=i.createGain();Ue.frequency.setValueAtTime(he*(1+Math.random()*.2),Le),Ue.frequency.exponentialRampToValueAtTime(he*(.75+Math.random()*.6),Le+.07),d(qe,Le,.008,.03,.04,.08),_(Ue.connect(qe),oe).connect(a.nature),Ue.start(Le),Ue.stop(Le+.1)}};let y=null;const v=()=>{const H=i.createBufferSource();H.buffer=e,H.loop=!0;const Z=i.createBiquadFilter(),he=i.createGain(),oe=i.createOscillator(),me=i.createGain(),Le=i.createGain();n.nature==="wind"?(Z.type="bandpass",Z.frequency.value=500,Z.Q.value=1.2,he.gain.value=.05,oe.frequency.value=.08,me.gain.value=.04,Le.gain.value=350):n.nature==="rumble"?(Z.type="lowpass",Z.frequency.value=120,Z.Q.value=.8,he.gain.value=.18,oe.frequency.value=.05,me.gain.value=.08,Le.gain.value=40):(Z.type="highpass",Z.frequency.value=3e3,Z.Q.value=.5,he.gain.value=.012,oe.frequency.value=.11,me.gain.value=.01,Le.gain.value=800),oe.connect(me).connect(he.gain),oe.connect(Le).connect(Z.frequency),H.connect(Z).connect(he).connect(a.nature),H.start(),oe.start(),y={s:H,lfo:oe}};let w=null,I=0,U=.7,P=!1,N=0,B=0,W=0,V=0,j=0,Q=0,se=4;const Ee=()=>{const H=i.currentTime,Z=I,he=(oe,me)=>{oe.gain.cancelScheduledValues(H),oe.gain.setTargetAtTime(me,H,1.2)};he(a.pad,.9),he(a.bell,.7+.2*Z),he(a.nature,.9-.4*Z),he(a.pulse,.55*Z),g.frequency.cancelScheduledValues(H),g.frequency.setTargetAtTime(n.padCut*(1+.9*Z),H,2),r.gain.cancelScheduledValues(H),r.gain.setTargetAtTime(P?0:U*1.6,H,.4)},Fe=()=>{const H=i.currentTime+.3;for(;N<H;)b(N,n.chords[B],uf+3),B=(B+1)%n.chords.length,N+=uf;for(;W<H;)Math.random()<.8&&(se=Math.max(0,Math.min(n.scale.length-1,se+[-2,-1,-1,1,1,2,0][Math.floor(Math.random()*7)])),x(W,n.scale[se],.8+Math.random()*.3),Math.random()<.15&&x(W+jr/4,n.scale[Math.max(0,se-2)],.6)),W+=jr*(I>.5?Math.random()<.5?.5:1:[1,1.5,2,3][Math.floor(Math.random()*4)]);for(;V<H;)I>.5&&(j%2===0&&E(V),T(V,1),T(V+jr/2,.6)),j++,V+=jr;for(;Q<H;){if(n.nature==="birds"&&Math.random()<.55&&A(Q),n.nature==="wind"&&Math.random()<.3&&C(Q,2.5,"bandpass",1400+Math.random()*900,6,.03,a.nature,.9),n.nature==="rumble")for(let Z=0;Z<3;Z++)Math.random()<.5&&C(Q+Math.random(),.02,"highpass",2500,.5,.12,a.nature);Q+=1.5+Math.random()*2.5}};return{start(){if(w)return;N=W=V=Q=i.currentTime+.1,y||v(),w=setInterval(Fe,50),Ee()},stop(){clearInterval(w),w=null,r.gain.setTargetAtTime(0,i.currentTime,.3)},setIntensity(H){I=H,Ee()},setVolume(H){U=H,Ee()},setMuted(H){P=H,Ee()},get muted(){return P},get volume(){return U},rms(){const H=new Float32Array(o.fftSize);return o.getFloatTimeDomainData(H),Math.sqrt(H.reduce((Z,he)=>Z+he*he,0)/H.length)},get intensity(){return I},get section(){return I>.5?"wave":"calm"},tap(H){r.connect(H)}}}const et={startEmbers:225,emberLife:25,expiredRefund:.5,magnet:4.6,reach:2.7,placeAhead:2.3,minTowerGap:2.5,plinthBonus:1.25,lighthouseReach:5.4,stoneCost:30,chargeTime:.4,upgradeTime:[15,20,25,30],keeperSpeed:6.4,carrySlow:.82,wadeSlow:.7,stunTime:1.6,stunLoss:.3,chillMax:100,stressInvuln:1,stressPush:7,airStress:10,faintTime:6,faintLoss:.25,wakeChill:.6,regen:3,regenReach:9,bagChance:.05,bagHeal:25,bagLife:20,hpGrowth:.2,waveBonus:20,waveBonusPer:5,interest:.1,firstPrep:30,prepTime:15,earlyScale:[.55,.65,.8],activePaths:[1,2,2]},Is={ring:{name:"Røykring-kanon",cost:22,range:7.5,dmg:7,cooldown:.65,air:!1,tip:"rask · kun bakke"},chips:{name:"Chips-mørtel",cost:38,range:10,dmg:18,cooldown:2.2,air:!1,splash:2.5,tip:"splash · kun bakke"},speaker:{name:"Reggae-høyttaler",cost:30,range:5.5,dmg:3,cooldown:1.6,air:!0,slowTime:2.2,tip:"bremser i ring"},bubble:{name:"Bobleblåser",cost:20,range:7,dmg:2.5,cooldown:.38,air:!0,ground:!1,trap:1.4,tip:"fanger flyvere · kun luft"},kite:{name:"Papirdrage",cost:40,range:13,dmg:5,cooldown:2.8,air:!0,ground:!1,zone:3.4,hover:2.4,tip:"sone, lang · kun luft"},pizza:{name:"Pizza-katapult",cost:55,range:14,dmg:24,cooldown:3,air:!1,splash:2.9,tip:"lang splash · kun bakke"},lamp:{name:"Lavalampe",cost:50,range:4.6,dmg:1.1,cooldown:.3,air:!0,slowTime:.5,tip:"aura, bremser alt"}},bo={clerk:{name:"Forbuds-byråkrat",hp:22,speed:2.6,embers:4,anim:12,puff:"#9fffb0",stress:10},tank:{name:"Stortings-tanken",hp:95,speed:1.25,embers:10,anim:5,puff:"#9fffb0",resist:{ring:.5,chips:1.5},stress:15},gull:{name:"Moralpanikk-måke",hp:16,speed:3.4,embers:5,anim:12,puff:"#ffffff",flying:!0,swoop:!0},swarm:{name:"Komité-sverm",hp:7,speed:2.2,embers:1,anim:9,puff:"#ffe08a",stress:8},auditor:{name:"Revisoren",hp:70,speed:1.6,embers:8,anim:7,puff:"#9fffb0",shield:.25,resist:{lamp:1.5},info:"skjold forfra (×0,25), ikke mot aura",stress:14},complainer:{name:"Naboklageren",hp:12,speed:4.3,embers:3,anim:18,puff:"#ffb0f0",resist:{chips:.5,ring:1.5},info:"rask, mørtel bommer",stress:10},lobbyist:{name:"Lobbyisten",hp:55,speed:1.9,embers:6,anim:9,puff:"#ffe08a",splits:3,resist:{speaker:.5,pizza:1.5},noMood:!0,info:"deler seg i tre, immun mot stemning",stress:12},lobbyMini:{name:"Mini-lobbyist",hp:14,speed:2.7,embers:1,anim:14,puff:"#ffe08a",resist:{speaker:.5,pizza:1.5},noMood:!0,stress:8},drone:{name:"Overvåkings-drone",hp:9,speed:4.6,embers:1,anim:30,puff:"#c8d8ff",flying:!0,alt:3.6,resist:{bubble:1.5,lamp:1.5,kite:.5},info:"rask sverm i lufta"},balloon:{name:"Ballong-byråkraten",hp:150,speed:1.05,embers:14,anim:2,puff:"#ffffff",flying:!0,alt:5.6,resist:{bubble:.5,kite:1.5},info:"seig, høyt oppe"},heli:{name:"Mini-helikopteret",hp:48,speed:2.5,embers:7,anim:40,puff:"#ffffff",flying:!0,alt:4.6,blind:{every:6,dur:3,range:9},resist:{ring:.5,kite:1.5},info:"søkelys blender et tårn i 3 s"}},fM=[[{type:"clerk",n:8,gap:1.4,path:0}],[{type:"clerk",n:6,gap:1.3,path:"both"}],[{type:"swarm",n:7,gap:.35,path:1},{type:"clerk",n:6,gap:1.2,path:0,at:4},{type:"swarm",n:7,gap:.35,path:0,at:12}],[{type:"tank",n:3,gap:4,path:0},{type:"clerk",n:6,gap:1,path:1,at:2}],[{type:"gull",n:5,gap:2.5},{type:"clerk",n:7,gap:1,path:"both",at:3}],[{type:"tank",n:3,gap:3.5,path:"both"},{type:"swarm",n:8,gap:.3,path:"both",at:8}],[{type:"gull",n:8,gap:1.6},{type:"clerk",n:9,gap:.8,path:"both",at:2}],[{type:"tank",n:4,gap:3,path:"both"},{type:"swarm",n:10,gap:.3,path:"both",at:6},{type:"gull",n:4,gap:2,at:10}],[{type:"gull",n:10,gap:1.2},{type:"tank",n:4,gap:3,path:"both",at:3},{type:"clerk",n:10,gap:.7,path:"both",at:8}],[{type:"clerk",n:10,gap:.6,path:"both"},{type:"tank",n:5,gap:2.5,path:"both",at:6},{type:"swarm",n:12,gap:.25,path:"both",at:14},{type:"gull",n:12,gap:1,at:18}]],dM="modulepreload",pM=function(i,e){return new URL(i,e).href},hf={},mM=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(t.map(c=>{if(c=pM(c,n),c in hf)return;hf[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!n)for(let g=o.length-1;g>=0;g--){const M=o[g];if(M.href===c&&(!u||M.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${h}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":dM,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((g,M)=>{p.addEventListener("load",g),p.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},ff="glodevokteren-",df="ABCDEFGHJKLMNPQRSTUVWXYZ",Dc=3,gM=9e3,vM=14e3,pf=6e3;function xM(){let i="";for(let e=0;e<4;e++)i+=df[Math.floor(Math.random()*df.length)];return i}function Ic(i=""){return i.toUpperCase().replace(/[^A-Z]/g,"").slice(0,4)}let Al=null;async function _M(){return Al||(Al=(await mM(async()=>{const{Peer:i}=await import("./bundler-DrDBPFLh.js");return{Peer:i}},[],import.meta.url)).Peer),Al}const oa={network:"Mistet kontakten med koblingstjenesten. Sjekk nettet.","server-error":"Koblingstjenesten svarer ikke akkurat nå. Prøv igjen om litt.","socket-error":"Koblingstjenesten svarer ikke akkurat nå. Prøv igjen om litt.","socket-closed":"Mistet kontakten med koblingstjenesten.","browser-incompatible":"Nettleseren støtter ikke nettspill (WebRTC).",webrtc:"Klarte ikke å koble direkte. Nettet ditt blokkerer kanskje peer-to-peer (vanlig på mobilnett/jobbnett)."};function mf(i={}){const e={role:null,code:"",slot:0,players:[],stats:{sentBytes:0,recvBytes:0,sentMsgs:0,recvMsgs:0}};let t=null,n=null,s=0,r=!1;const o=new Map,a=m=>{var d;r||(d=i.onError)==null||d.call(i,m)},l=()=>performance.now(),c=(m,d)=>{if(!(m!=null&&m.open))return;const _=JSON.stringify(d);e.stats.sentBytes+=_.length,e.stats.sentMsgs++,m.send(_)},u=m=>{e.stats.recvBytes+=m.length,e.stats.recvMsgs++;try{return JSON.parse(m)}catch{return null}},h=()=>{var m;e.players=[{slot:0,name:e.hostName},...[...o].map(([d,_])=>({slot:d,name:_.name}))].sort((d,_)=>d.slot-_.slot);for(const d of o.values())c(d.conn,{t:"lobby",players:e.players});(m=i.onLobby)==null||m.call(i,e.players)},f=m=>{var _;const d=o.get(m);if(d){o.delete(m);try{d.conn.close()}catch{}(_=i.onLeave)==null||_.call(i,m,d.name),h()}};function p(m){return _M().then(d=>new Promise((_,b)=>{const x=m?new d(m,{debug:0,serialization:"raw"}):new d({debug:0}),C=setTimeout(()=>b(new Error("Fikk ikke kontakt med koblingstjenesten (PeerJS). Sjekk nettet og prøv igjen.")),gM);x.on("open",()=>{clearTimeout(C),_(x)}),x.on("error",E=>{clearTimeout(C),E.type==="unavailable-id"?b(Object.assign(new Error("taken"),{taken:!0})):x.open||b(new Error(oa[E.type]||`Nettfeil: ${E.type}`))})}))}e.host=async m=>{e.role="host",e.slot=0,e.hostName=m||"Vokter 1";for(let d=0;;d++){const _=xM();try{t=await p(ff+_),e.code=_;break}catch(b){if(!b.taken||d>4)throw e.role=null,b}}return t.on("error",d=>{d.type!=="peer-unavailable"&&a(oa[d.type]||`Nettfeil: ${d.type}`)}),t.on("connection",d=>{d.on("open",()=>{var x;let _=1;for(;o.has(_);)_++;if(_>=Dc||e.closedRoom){c(d,{t:"refuse",why:e.closedRoom?"Spillet er allerede i gang.":`Rommet er fullt (${Dc} spillere).`}),setTimeout(()=>d.close(),300);return}const b=String(((x=d.metadata)==null?void 0:x.name)||`Vokter ${_+1}`).slice(0,14);o.set(_,{conn:d,name:b,seen:l()}),c(d,{t:"hello",slot:_,world:e.world,tid:e.tid}),h(),d.on("data",C=>{var A;const E=o.get(_);if(!E||E.conn!==d)return;E.seen=l();const T=u(C);T&&T.t!=="ping"&&((A=i.onMessage)==null||A.call(i,T,_))}),d.on("close",()=>{var C;((C=o.get(_))==null?void 0:C.conn)===d&&f(_)}),d.on("error",()=>{var C;((C=o.get(_))==null?void 0:C.conn)===d&&f(_)})})}),M(),h(),e.code},e.join=async(m,d)=>(e.role="guest",e.code=Ic(m),t=await p(null),new Promise((_,b)=>{let x=!1;const C=(T,A)=>{x||(x=!0,clearTimeout(E),T(A))},E=setTimeout(()=>C(b,new Error("Fikk ikke koblet til verten. Enten er koden feil, eller nettet blokkerer direkte kobling (vanlig på mobilnett/jobbnett).")),vM);t.on("error",T=>{T.type==="peer-unavailable"?C(b,new Error(`Fant ikke rom ${e.code}. Sjekk koden.`)):x?T.type==="webrtc"&&a(oa.webrtc):C(b,new Error(oa[T.type]||`Nettfeil: ${T.type}`))}),n=t.connect(ff+e.code,{serialization:"raw",reliable:!0,metadata:{name:d}}),n.on("data",T=>{var y,v;e.hostSeen=l();const A=u(T);if(A){if(A.t==="hello"){e.slot=A.slot,C(_,A);return}if(A.t==="refuse"){C(b,new Error(A.why));return}if(A.t==="lobby"){e.players=A.players,(y=i.onLobby)==null||y.call(i,A.players);return}A.t!=="ping"&&((v=i.onMessage)==null||v.call(i,A,0))}}),n.on("close",()=>{x?g():C(b,new Error("Verten lukket koblingen."))}),n.on("open",()=>{e.hostSeen=l(),M()})}));function g(){var m;r||(r=!0,(m=i.onHostGone)==null||m.call(i),e.close())}function M(){clearInterval(s),s=setInterval(()=>{const m=l();if(e.role==="host")for(const[d,_]of o)m-_.seen>pf?f(d):m-(_.pinged||0)>1e3&&(_.pinged=m,c(_.conn,{t:"ping"}));else e.role==="guest"&&n&&(m-e.hostSeen>pf?g():c(n,{t:"ping"}))},1e3)}return e.send=m=>c(n,m),e.sendTo=(m,d)=>{var _;return c((_=o.get(m))==null?void 0:_.conn,d)},e.broadcast=m=>{if(!o.size)return;const d=JSON.stringify(m);for(const _ of o.values())_.conn.open&&(e.stats.sentBytes+=d.length,e.stats.sentMsgs++,_.conn.send(d))},e.guestCount=()=>o.size,e.close=()=>{clearInterval(s);for(const m of o.values())try{m.conn.close()}catch{}o.clear();try{n==null||n.close()}catch{}try{t==null||t.destroy()}catch{}t=null,n=null},addEventListener("pagehide",()=>e.close()),e}const Jt=i=>document.getElementById(i),gf=["#f2c23c","#4fb3d9","#c46bd6"],So=i=>gf[i%gf.length];function MM(i){const e=Jt("net"),t=Jt("net-status"),n=Jt("net-players"),s=Jt("net-share");let r=null,o=!1,a="";try{a=localStorage.getItem("glod-name")||""}catch{}Jt("net-name").value=a,Jt("net-name").addEventListener("input",m=>{try{localStorage.setItem("glod-name",m.target.value.trim())}catch{}});const l=(m,d=!1)=>{t.textContent=m,t.classList.toggle("err",d)},c=m=>(Jt("net-name").value.trim()||m).slice(0,14),h={onLobby:m=>{n.innerHTML=m.map(d=>`<li><i style="background:${So(d.slot)}"></i>${yM(d.name)}${d.slot===0?" <small>(vert)</small>":""}${r&&d.slot===r.slot?" <small>← deg</small>":""}</li>`).join(""),(r==null?void 0:r.role)==="host"&&(Jt("net-go").disabled=!1,Jt("net-go").textContent=m.length>1?`Start på ${i.worldName} (${m.length} spillere)`:"Start (venter på andre …)")},onMessage:(m,d)=>{var _;if(m.t==="start"&&r.role==="guest"){e.dataset.state="playing",i.onGuestStart(r);return}(_=i.onMessage)==null||_.call(i,m,d)},onLeave:(m,d)=>{var _;return(_=i.onLeave)==null?void 0:_.call(i,m,d)},onError:m=>l(m,!0),onHostGone:()=>{var m;return(m=i.onHostGone)==null?void 0:m.call(i)}},f=m=>{e.dataset.state=m,Jt("btn-start").classList.toggle("hidden",m==="host"||m==="guest"||m==="connecting")},p=m=>{r==null||r.close(),r=null,o=!1,f("idle"),n.innerHTML="",s.classList.add("hidden"),m?l(m,!0):l("")};Jt("btn-net").addEventListener("click",()=>{e.classList.toggle("hidden"),Jt("btn-net").classList.toggle("sel",!e.classList.contains("hidden"))}),Jt("net-host").addEventListener("click",async()=>{if(!o){o=!0,f("connecting"),l("Lager rom …"),r=mf(h),r.world=i.worldIndex,r.tid=i.timeOfDay;try{const m=await r.host(c("Vokter 1"));f("host");const d=`${location.origin}${location.pathname}?join=${m}`;Jt("net-code").textContent=m,Jt("net-link").value=d,s.classList.remove("hidden"),l(`Rom ${m} er åpent. Del koden eller lenken (maks ${Dc} spillere).`)}catch(m){p(m.message)}}});const g=async m=>{const d=Ic(m);if(!o){if(d.length!==4){l("Koden har fire bokstaver.",!0);return}o=!0,f("connecting"),l(`Kobler til rom ${d} …`),r=mf(h);try{const _=await r.join(d,c("Vokter"));if(_.world!==i.worldIndex||_.tid&&_.tid!==i.timeOfDay){l("Henter vertens verden …"),r.close(),location.href=`${location.pathname}?world=${_.world}&tid=${_.tid||"dag"}&join=${d}`;return}f("guest"),l(`Du er med i rom ${d}. Venter på at verten starter …`)}catch(_){p(_.message)}}};Jt("net-join").addEventListener("click",()=>g(Jt("net-code-in").value)),Jt("net-code-in").addEventListener("keydown",m=>{m.stopPropagation(),m.key==="Enter"&&g(m.target.value)}),Jt("net-name").addEventListener("keydown",m=>m.stopPropagation()),Jt("net-copy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(Jt("net-link").value),l("Lenke kopiert.")}catch{Jt("net-link").select()}}),Jt("net-leave").addEventListener("click",()=>p()),Jt("net-go").addEventListener("click",()=>{(r==null?void 0:r.role)==="host"&&(r.closedRoom=!0,r.broadcast({t:"start"}),f("playing"),i.onHostStart(r))});const M=Ic(i.params.get("join")||"");return M&&(e.classList.remove("hidden"),Jt("net-code-in").value=M,g(M)),{get net(){return r},say:l}}function yM(i){return String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}const ln=new URLSearchParams(location.search),Id=ln.has("demo");if(ln.has("unlockall"))try{localStorage.setItem("glod-unlocked",String(qs.length))}catch{}let yn=Number(ln.get("world"));if(!Number.isInteger(yn))try{yn=Number(localStorage.getItem("glod-world"))||0}catch{yn=0}yn=Math.max(0,Math.min((ln.has("join")?qs.length:go())-1,yn));try{localStorage.setItem("glod-world",String(yn))}catch{}const hn=qs[yn],xu=m_(hn,fM),bM=.3;function SM(){return 1+bM*(Ft.length-1)}const wM=Math.max(1,Math.min(20,Number(ln.get("speed"))||1)),ts=matchMedia("(pointer: coarse)").matches||ln.has("mobile"),Uc={high:{shadow:2048,dprCap:2},low:{shadow:1024,dprCap:2}};let Ai=ts?"low":"high";try{const i=localStorage.getItem("glod-quality");(i==="high"||i==="low")&&(Ai=i)}catch{}(ln.get("q")==="high"||ln.get("q")==="low")&&(Ai=ln.get("q"));const xo={mobile:ts,shadow:Uc[Ai].shadow,dprCap:Uc[Ai].dprCap},EM={high:["rock","tree","tower","figure"],low:["rock","tree","tower","figure"]};function Ud(i){const e=ln.has("ol")?ln.get("ol").split(","):EM[i];fd(Object.fromEntries(["rock","tree","tower","figure"].map(t=>[t,e.includes(t)])))}Ud(Ai);const zd=document.getElementById("game"),zn=new c1({canvas:zd,antialias:!ts,powerPreference:"high-performance",preserveDrawingBuffer:ln.has("shot")});let fs=Math.min(devicePixelRatio||1,xo.dprCap);zn.setPixelRatio(fs);zn.shadowMap.enabled=!0;zn.shadowMap.type=wf;zn.toneMapping=Xc;let ms="dag";try{ms=localStorage.getItem("glod-tid")||"dag"}catch{}ln.get("tid")&&(ms=ln.get("tid"));const ti=ms==="skumring"&&hn.skyDusk?hn.skyDusk:hn.sky;zn.toneMappingExposure=ti.exposure;zn.info.autoReset=!1;const _t=new u1,Nd=new Pe(ti.fog);_t.background=Nd;_t.fog=new ou(Nd,...hn.fog??[55,115]);const Kt=new Zn(38,1,.5,200),TM=new X1(ti.hemiSky,ti.hemiGround,ti.hemi);_t.add(TM);const _n=new $1(ti.sun,ti.sunI);_n.castShadow=!0;_n.shadow.mapSize.set(xo.shadow,xo.shadow);Object.assign(_n.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:90});_n.shadow.bias=-8e-4;_n.shadow.normalBias=.03;_t.add(_n,_n.target);e_(_t);const Ge=L_(_t,xo,hn);Ge.grass.setLevel(Ai);const AM=$_(_t,Ge,xo,hn,ms,Kt),An=j_(Ge);window.__nav=An;const Rt=Ld(_t,ts?450:800),vs=Ld(_t,ts?120:220,{blending:ds,size:1.6,opacity:.45,fadeTo:ti.fog}),wo=Y_(zn,_t,Kt,ti.grade);wo.setLevel(Ai);const xt=rM(zd),kd=aM(xt);xt.menu=kd;xt.panelOpen=()=>!Ei.classList.contains("hidden");const oo=document.createElement("div");oo.id="toast";document.body.appendChild(oo);let vf=0;function ba(i){oo.textContent=i,oo.classList.add("on"),clearTimeout(vf),vf=setTimeout(()=>oo.classList.remove("on"),3200)}xt.onPad=(i,e)=>{ba(i==="connect"?`🎮 Kontroll tilkoblet: ${eM(e)}`:"🎮 Kontroll frakoblet"),ei.device=null,ct("pause").classList.contains("hidden")||zs(!0,q.confirming)};function Eo(){const i=innerWidth,e=innerHeight;zn.setSize(i,e,!1),Kt.aspect=i/e,Kt.updateProjectionMatrix(),wo.setSize(i,e),Q1(ts?2:2.2,zn.getPixelRatio(),i,e)}function Fd(i){Ai=i;try{localStorage.setItem("glod-quality",i)}catch{}const e=Uc[i];_n.shadow.mapSize.set(e.shadow,e.shadow),_n.shadow.map&&(_n.shadow.map.dispose(),_n.shadow.map=null),fs=Math.min(devicePixelRatio||1,e.dprCap),zn.setPixelRatio(fs),wo.setLevel(i),Ge.grass.setLevel(i),Ud(i),Eo(),document.getElementById("btn-quality").textContent=i==="high"?"Høy":"Lav"}addEventListener("resize",Eo);Eo();const q={phase:"title",wave:0,timer:0,embers:et.startEmbers,lights:Dr,spawnQueue:[],leaks:{},seen:{},time:0,sel:0,paused:!1},zc=et.upgradeTime.length+1,Di=["ring","chips","speaker","bubble","kite","pizza","lamp"];let Ki=hn.camYaw??0;const xf=new j1,un=[],nn=[],gi=[],Wn=[],yr=[],ao=[],Be={host:!1,guest:!1,net:null,sendT:0,goal:null,ids:0,ev:[],snapT:0};let Qt=Or(Sd(),"figure"),D={x:Ge.lighthouse.pos.x+1,z:Ge.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,walk:0,charge:0,chargeTower:null,face:Math.PI,goal:null,chill:et.chillMax,inv:0,faint:0,faints:0,roll:null,stillT:0,rollBlock:null};Qt.position.set(D.x,Ge.heightAt(D.x,D.z),D.z);_t.add(Qt);const Od=ti.lantern??2.6,_u=new mo("#ffcf70",Od,6,1.8);_u.position.set(.8,.45,-.3);Qt.add(_u);const Ft=[{slot:0,K:D,mesh:Qt,input:xt,sel:0,buildMode:!1,local:!0}];let pn=Ft[0],Ht=xt;function _f(i){pn.sel=q.sel,pn.buildMode=q.buildMode,pn=i,D=i.K,Qt=i.mesh,Ht=i.input,q.sel=i.sel,q.buildMode=i.buildMode}function Ui(i,e){if(i===pn)return e();const t=pn;_f(i);try{return e()}finally{_f(t)}}const Bd=(i=0)=>({x:Ge.lighthouse.pos.x+1+i*1.2,z:Ge.lighthouse.pos.z+7.5-i*.6,vx:0,vz:0,carrying:!1,stun:0,walk:0,charge:0,chargeTower:null,face:Math.PI,goal:null,chill:et.chillMax,inv:0,faint:0,faints:0,roll:null,stillT:0,rollBlock:null});function Mu(i,e,t=()=>!0){let n=null,s=1/0;for(const r of Ft){const o=Math.hypot(r.K.x-i,r.K.z-e);o<s&&t(r)&&(s=o,n=r)}return n}const ct=i=>document.getElementById(i),rn={chill:ct("hud-chill"),lights:ct("hud-lights"),embers:ct("hud-embers"),wave:ct("hud-wave"),timer:ct("hud-timer")},Qi=ct("hint"),Ei=ct("build-panel"),yu=ct("btn-next"),bu=ct("fps");ln.has("debug")||bu.classList.add("hidden");let ei={};function Hn(i,e,t,n){ei[e]!==t&&(ei[e]=t,i.querySelector("b").textContent=t,n&&(i.classList.remove(n),i.offsetWidth,i.classList.add(n)))}const CM=4;let Gd=0;function Nc(i){if(Qi.textContent===i)return;Qi.textContent=i,Gd=0,Qi.classList.remove("faded");const e=Ei.classList.contains("hidden")?null:Ei.getBoundingClientRect();Qi.style.bottom=e&&e.height?`${Math.round(innerHeight-e.top+6)}px`:""}function RM(i){(Gd+=i)>CM&&Qi.classList.add("faded")}function Su(i){q.phase="prep",q.timer=i,yu.classList.remove("hidden"),PM()}function PM(){if(Be.guest){q.spawnPoints=Be.spawnPoints||[],q.spawnPoints.length&&Fc();return}const i=q.wave+1,e=i===1?1:i<=3?2:2+Math.floor(Math.random()*3);q.spawnPoints=An.coastPoints(e,24),q.spawnPoints.length||(q.spawnPoints=An.coastPoints(e,8,{near:12,minFrac:.5})),q.spawnPoints.length||(q.spawnPoints=An.roadEnds().slice(0,e)),Be.host&&Be.ev.push(["sp",q.spawnPoints.map(t=>[+t[0].toFixed(2),+t[1].toFixed(2)])]),Fc()}function wu(){q.wave+=1,q.phase="wave",yu.classList.add("hidden"),q.spawnQueue=[];for(const i of xu[q.wave-1]){const e=q.wave<=et.earlyScale.length?q.wave-1:-1,t=q.spawnPoints.length,n=bo[i.type].flying?hn.balance.air??1:1,s=Math.max(1,Math.round(i.n*(hn.balance.count||1)*n*(e>=0?et.earlyScale[e]:1)));if(i.path==="both"){const r=Math.ceil(s/Math.min(2,t));for(let o=0;o<t;o++)for(let a=0;a<r;a++)q.spawnQueue.push({t:(i.at??0)+a*i.gap+o*.3,type:i.type,path:o})}else{const r=i.path??0;for(let o=0;o<s;o++)q.spawnQueue.push({t:(i.at??0)+o*i.gap,type:i.type,path:(r+o%2)%t})}}q.spawnQueue.sort((i,e)=>i.t-e.t),q.waveClock=0,Dt.wave(),en==null||en.setIntensity(1),Hn(rn.wave,"wave",q.wave,"bump")}function ka(i,e){var l,c;const t=bo[i],n=Or(b_(i),"figure"),s=t.hp*(1+et.hpGrowth*(q.wave-1))*hn.balance.hp*(((c=(l=hn.balance.types)==null?void 0:l[i])==null?void 0:c.hp)??1)*SM(),r={id:++Be.ids,type:i,def:t,mesh:n,hp:s,maxHp:s,slow:0,phase:Math.random()*6,alive:!0,speedMul:hn.balance.speed*(t.flying?hn.balance.airSpeed??1:1),lane:(Math.random()-.5)*1.4};r.var=.95+Math.random()*.1,r.speedMul*=.95+Math.random()*.1,n.scale.setScalar(r.var),r.blinkT=Math.random()*4;const o=q.spawnPoints[e%q.spawnPoints.length]||[0,50],a=Ge.lighthouse.pos;if(t.flying){const u=Math.atan2(o[1]-a.z,o[0]-a.x)+(Math.random()-.5)*.5,h=a.x+Math.cos(u)*66,f=a.z+Math.sin(u)*66;r.x=h,r.z=f,r.y=t.alt||4,r.dist0=Math.hypot(a.x-h,a.z-f),r.hitCd=0}else r.x=o[0]+(Math.random()-.5)*1.5,r.z=o[1]+(Math.random()-.5)*1.5,r.y=Ge.heightAt(r.x,r.z),r.remain=An.at(r.x,r.z);return n.position.set(r.x,r.y,r.z),_t.add(n),un.push(r),!q.seen[i]&&i!=="lobbyMini"&&(q.seen[i]=!0,LM(r)),r}const kc={ring:"💨",chips:"🥔",speaker:"🔊",bubble:"🫧",kite:"🪁",pizza:"🍕",lamp:"🌋"};function Vd(i){const e=Object.entries(i.resist||{}),t=e.filter(([,s])=>s<1).map(([s])=>kc[s]).join(""),n=e.filter(([,s])=>s>1).map(([s])=>kc[s]).join("");return{tough:t+(i.shield?"📒":""),weak:n}}const ji=[],Fa=document.createElement("div");Fa.id="tags";document.body.appendChild(Fa);function LM(i){const{tough:e,weak:t}=Vd(i.def),n=document.createElement("div");n.className="enemy-tag",n.innerHTML=`<b>${i.def.flying?"🪶":"🐾"} ${i.def.name}</b>${e?`<span>🛡️${e}</span>`:""}${t?`<span>💥${t}</span>`:""}`,Fa.appendChild(n),ji.push({m:i,el:n,t:0}),(q.wave>1||i.def.flying)&&on(`Ny fiende: ${i.def.name}${e?` · tåler ${e}`:""}${t?` · svak mot ${t}`:""}`)}const _o=document.createElement("div");_o.id="upgbars";document.body.appendChild(_o);const Sa=[];function DM(){var i;Sa.length=0,_o.style.visibility=q.paused?"hidden":"";for(const e of nn){if(!e.upg){e.upgEl&&(e.upgEl.remove(),e.upgEl=null);continue}e.upgEl||(e.upgEl=document.createElement("div"),e.upgEl.className="upg-bar",e.upgEl.innerHTML='<div class="upg-arrows"></div><div class="upg-track"><i></i></div><span></span>',_o.appendChild(e.upgEl));const t=e.upgEl,n=Math.min(1,e.upg.t/e.upg.dur),s=((i=D.roll)==null?void 0:i.tower)===e?D.roll:null,r=s?s.seq.join()+s.i:"";t.dataset.k!==r&&(t.dataset.k=r,t.firstChild.innerHTML=s?s.seq.map((h,f)=>`<b class="${f<s.i?"lit":f===s.i?"next":""}">${{rU:"▲",rR:"▶",rD:"▼",rL:"◀"}[h]}</b>`).join(""):""),s!=null&&s.shake&&(s.shake=!1,t.firstChild.classList.remove("shake"),t.offsetWidth,t.firstChild.classList.add("shake"),t.firstChild.onanimationend=()=>t.firstChild.classList.remove("shake")),e.upgReset&&(e.upgReset=!1,t.classList.remove("reset"),t.offsetWidth,t.classList.add("reset")),t.children[1].firstChild.style.width=`${(100*n).toFixed(1)}%`;const o=e.upg.t>0||s?`nv. ${e.level+1} · ${Math.ceil(e.upg.dur-e.upg.t)} s igjen`:`nv. ${e.level+1} · stå stille for å rulle`;t.lastChild.textContent!==o&&(t.lastChild.textContent=o),Mt.set(e.x,e.y+2.9*e.mesh.scale.y,e.z).project(Kt);const a=Mt.z<1&&Math.abs(Mt.x)<1&&Math.abs(Mt.y)<1;if(t.style.display=a?"flex":"none",!a)continue;const l=t.offsetWidth,c=t.offsetHeight,u={x:Math.min(Math.max((Mt.x*.5+.5)*innerWidth,l/2+6),innerWidth-l/2-6),y:(-Mt.y*.5+.5)*innerHeight,w:l,h:c,on:a};t.style.left=`${u.x}px`,t.style.top=`${u.y}px`,Sa.push(u)}}function IM(i){var n;const e=ji.length?ct("hud").getBoundingClientRect().bottom:0;for(let s=ji.length-1;s>=0;s--){const r=ji[s];r.age=(r.age||0)+i,Mt.set(r.m.x,r.m.y+(((n=r.m.mesh.userData.hpBar)==null?void 0:n.position.y)??2.2)+.5,r.m.z).project(Kt);const o=Mt.z<1&&Math.abs(Mt.x)<1&&Math.abs(Mt.y)<1;r.el.style.display=o?"flex":"none",o&&(r.t+=i);const a=r.el.offsetWidth,l=r.el.offsetHeight;r.x=Math.min(Math.max((Mt.x*.5+.5)*innerWidth,a/2+6),innerWidth-a/2-6),r.y=Math.max((-Mt.y*.5+.5)*innerHeight,e+l+6),r.w=a,r.h=l,r.on=o,r.el.style.opacity=String(Math.min(1,(6-r.t)/.6)),(r.t>6||r.age>90||!r.m.alive)&&(r.el.remove(),ji.splice(s,1))}const t=[...Sa];for(const s of ji.filter(r=>r.on).sort((r,o)=>r.y-o.y)){let r=!0;for(let o=0;r&&o<8;o++){r=!1;for(const a of t)Math.abs(s.x-a.x)<(s.w+a.w)/2+4&&s.y>a.y-a.h-3&&s.y-s.h<a.y+3&&(s.y=a.y+s.h+4,r=!0)}t.push(s)}for(const s of ji)s.on&&(s.el.style.left=`${s.x}px`,s.el.style.top=`${s.y}px`)}function UM(i){return i.def.flying?1-Math.hypot(Ge.lighthouse.pos.x-i.x,Ge.lighthouse.pos.z-i.z)/i.dist0:1-Math.min(1,(i.remain??An.maxDist)/An.maxDist)}const va=[],Us=document.createElement("div");Us.id="warn";document.body.appendChild(Us);function Fc(){for(const t of va)_t.remove(t);va.length=0,Us.innerHTML="";for(const[t,n]of q.spawnPoints){const s=new lt(Hd,new zt({color:"#ff7a3a",transparent:!0,opacity:.8,depthWrite:!1}));s.position.set(t,Math.max(Ge.heightAt(t,n),.08)+.1,n);const r=new lt(zM,new zt({color:"#ff8a3a",transparent:!0,opacity:.35,blending:Ti,depthWrite:!1,fog:!1}));r.position.y=4,s.add(r),_t.add(s),va.push(s);const o=document.createElement("div");o.className="warn-arrow",o.innerHTML='<span class="arr">➤</span><span class="kind"></span>',Us.appendChild(o)}const i=q.spawnPoints.length,e=q.spawnPoints.map(()=>({air:!1,ground:!1}));for(const t of xu[q.wave]||[]){const n=t.path==="both"?e.map((s,r)=>r):[(t.path??0)%i,((t.path??0)+1)%i];for(const s of n)e[s][bo[t.type].flying?"air":"ground"]=!0}e.forEach((t,n)=>{var r;const s=(r=Us.children[n])==null?void 0:r.querySelector(".kind");s&&(s.textContent=(t.air?"🪶":"")+(t.ground?"🐾":""))})}const Hd=new xs(1.6,2.2,32);Hd.rotateX(-Math.PI/2);const zM=new Yt(.5,1.4,8,12,1,!0);function NM(){var o;const i=q.phase==="prep"||q.phase==="wave"&&q.waveClock<8,e=Us.children,t=i&&!Ei.classList.contains("hidden")?Ei.getBoundingClientRect():null,n=t&&Qi.textContent&&!Qi.classList.contains("faded"),s=i?ct("hud").getBoundingClientRect().bottom:0;Us.style.visibility=Fa.style.visibility=q.paused?"hidden":"";const r=t?n?Math.min(t.top,Qi.getBoundingClientRect().top):t.top:0;(o=q.spawnPoints)==null||o.forEach(([a,l],c)=>{const u=va[c],h=e[c];if(!u||!h)return;u.visible=i;const f=.5+.5*Math.sin(q.time*6);u.scale.setScalar(1+f*.35),u.material.opacity=.35+.5*f,Mt.set(a,u.position.y,l).project(Kt);const p=Math.abs(Mt.x)>.92||Math.abs(Mt.y)>.88||Mt.z>1;if(h.style.display=i?"block":"none",h.classList.toggle("onscreen",!p),i&&!p&&(h.style.left=`${(Mt.x*.5+.5)*innerWidth}px`,h.style.top=`${Math.max((-Mt.y*.5+.5)*innerHeight-30,s+30)}px`,h.style.transform="translate(-50%, -50%)",h.firstChild.style.transform=""),i&&p){let g=Mt.x,M=Mt.y;Mt.z>1&&(g=-g,M=-M);const m=Math.atan2(-M,g),d=Math.max(Math.abs(g),Math.abs(M))||1,_=yt.clamp(g/d,-1,1),b=yt.clamp(M/d,-1,1),x=(_*.46+.5)*innerWidth;let C=(-b*.44+.5)*innerHeight;t&&x>t.left-24&&x<t.right+24&&C>r-24&&(C=r-24),C=Math.max(C,s+30),h.style.left=`${x}px`,h.style.top=`${C}px`,h.style.transform=`translate(-50%, -50%) scale(${1+f*.25})`,h.firstChild.style.transform=`rotate(${m}rad)`}})}function Ls(i,e,t){var n;if(i.alive){if(t&&(e*=((n=i.def.resist)==null?void 0:n[t.type])??1,i.def.shield&&t.type!=="lamp")){const s=t.x-i.x,r=t.z-i.z,o=Math.hypot(s,r)||1,a=Math.hypot(i.hx||0,i.hz||0)||1;(s*(i.hx||0)+r*(i.hz||0))/(o*a)>.35&&(e*=i.def.shield,Math.random()<.3&&Rt.emit(i.x,i.y+1,i.z,{n:2,color:"#d8c890",speed:1.5,up:1,life:.3}))}if(Be.guest){i.hitT=.18,i.mesh.userData.hpBar.visible=!0;return}i.hp-=e,i.hitT=.18,i.mesh.userData.hpBar.visible=!0,i.hp<=0&&Wd(i)}}function Wd(i){if(i.alive=!1,i.chillT=0,S_(i),ao.push(i),Rt.emit(i.x,i.y+1.2,i.z,{n:12,color:i.def.puff,speed:1.6,up:2.2,life:.9,gravity:1.5}),Dt.chill(),Be.host&&Be.ev.push(["c",i.id]),!Be.guest){Eu(i.x,i.y+.5,i.z,i.def.embers,i.def.flying),!i.def.flying&&Math.random()<et.bagChance&&Tu(i.x,i.z);for(let e=0;e<(i.def.splits||0);e++){const t=ka("lobbyMini",0);t.x=i.x+(e-1)*.6,t.z=i.z+(e%2?.5:-.5),t.y=Ge.heightAt(t.x,t.z),t.mesh.position.set(t.x,t.y,t.z)}}}function kM(i){var e;for(let t=ao.length-1;t>=0;t--){const n=ao[t];n.chillT+=i;const s=n.chillT,r=n.mesh.userData.body;if(n.def.flying)n.y+=i*2.5,n.z+=i*3,(e=n.mesh.userData.wings)==null||e.forEach((a,l)=>a.rotation.z=Math.sin(s*6)*.4*(l?-1:1));else if(s<1.4){const a=Math.min(1,s/.4);r.position.y=-.25*a*(n.type==="tank"?1.3:1),r.rotation.x=.25*a,r.rotation.z=Math.sin(s*3)*.05}else{r.rotation.x=0,r.position.y=Math.abs(Math.sin(s*7))*.06;const[a,l]=An.dir(n.x,n.z),c=n.x-a*n.def.speed*.45*i,u=n.z-l*n.def.speed*.45*i;Ge.isWalkable(c,u)&&(n.x=c,n.z=u),n.y=Ge.heightAt(n.x,n.z),(a||l)&&(n.mesh.rotation.y=Math.atan2(a,l))}Math.random()<i*1.5&&Rt.emit(n.x,n.y+1.8,n.z,{n:1,color:"#c8ffb0",speed:.3,up:1,life:.8,gravity:-.4}),s>2.6&&!n.popped&&(n.popped=!0,vs.emit(n.x,n.y+.8,n.z,{n:8,color:"#eef6e8",speed:1.4,up:1.2,life:.7,gravity:-.5}));const o=Math.max(0,Math.min(1,(3.2-s)/.6));n.mesh.scale.setScalar(o*(n.var||1)*(s>2.6?1+Math.sin((s-2.6)*10)*.08:1)),n.mesh.position.set(n.x,n.y,n.z),s>3.2&&(_t.remove(n.mesh),ao.splice(t,1))}}function Eu(i,e,t,n,s=!1,r=1){if(Be.guest)return;const o=Math.min(n,n>=6?3:n>=3?2:1);let a=n;for(let l=0;l<o;l++){const c=l===o-1?a:Math.ceil(n/o);a-=c;const u=wd(),h=Math.random()*Math.PI*2,f=(1.2+Math.random()*1.8)*r,p={id:++Be.ids,mesh:u,x:i,y:e,z:t,vx:Math.cos(h)*f,vz:Math.sin(h)*f,vy:5+Math.random()*2,life:et.emberLife,value:c,settled:!1,phase:Math.random()*6};u.scale.setScalar(.8+Math.min(c,6)*.08),_t.add(u),Wn.push(p)}}function Vs(i,e,t,n,s=()=>!0){let r=null,o=n;for(const a of i){if(!s(a))continue;const l=Math.hypot(a.x-e,a.z-t);l<o&&(o=l,r=a)}return r}function Oa(){const i=Vs(Ge.plinths,D.x,D.z,et.reach,l=>!l.tower);if(i)return{x:i.x,z:i.z,y:i.y,plinth:i,ok:!0};const e=-Math.sin(D.face),t=-Math.cos(D.face),n=D.x+e*et.placeAhead,s=D.z+t*et.placeAhead,r=Ge.heightAt(n,s),o=Ge.lighthouse.pos;let a="";return r<.35?a="i vannet":Ge.extras.blocks(n,s)?a="i lavaen":Ge.pathDist(n,s)<1.9?a="på stien":Ge.slopeAt(n,s)>.6?a="for bratt":Math.hypot(n-o.x,s-o.z)<5.5?a="for nær fyret":nn.some(l=>Math.hypot(l.x-n,l.z-s)<et.minTowerGap)?a="for nær et annet tårn":Ge.plinths.some(l=>Math.hypot(l.x-n,l.z-s)<1.9)?a="oppå en sokkel (gå helt bort til den)":Ge.colliders.some(l=>!l.tower&&(l.x-n)**2+(l.z-s)**2<(l.r+.7)**2)&&(a="i veien for et tre eller en stein"),{x:n,z:s,y:r,plinth:null,ok:!a,why:a}}function wa(i){const e=Oa();if(!e.ok){Dt.deny(),on(`Ikke lov å bygge her: ${e.why}`);return}const t=Is[i];if(q.embers<t.cost){Dt.deny(),on(`Trenger ${t.cost} ✦ glør`),Hn(rn.embers,"embersBad",Math.random(),"bad");return}q.embers-=t.cost,Xd(i,e),q.buildMode=!1,e.plinth&&on(`${t.name} på gammel sokkel: +25 % rekkevidde`)}function Xd(i,e,t=0){const n=Is[i],s=Or(w_(i),"tower");if(s.position.set(e.x,e.y,e.z),!e.plinth){const o=new lt(FM,OM);o.position.y=.04,o.receiveShadow=!0,s.add(o)}_t.add(s);const r={id:t||++Be.ids,type:i,def:n,mesh:s,x:e.x,z:e.z,y:e.y,level:1,cd:.3,plinth:e.plinth,onPlinth:!!e.plinth};return e.plinth&&(e.plinth.tower=r),nn.push(r),Ge.colliders.push({x:e.x,z:e.z,r:1,tower:r}),Rt.emit(e.x,e.y+.3,e.z,{n:24,color:"#ffe3a0",speed:4,up:3,life:.8,gravity:5}),Dt.build(),r}const FM=new Yt(.95,1.05,.12,10),OM=new $t({color:"#8a8478"}),Zi=new bt;{const i=new lt(new Rr(1,24),new zt({transparent:!0,opacity:.35,depthWrite:!1}));i.rotation.x=-Math.PI/2;const e=new xs(.965,1,64);e.rotateX(-Math.PI/2);const t=new lt(e,new zt({transparent:!0,opacity:.6,depthWrite:!1})),n=new lt(new Yt(.55,.7,1.6,10),new zt({transparent:!0,opacity:.25,depthWrite:!1}));n.position.y=.8,Zi.add(i,t,n),Zi.userData={disc:i,ring:t,pillar:n},Zi.visible=!1,Zi.renderOrder=20,_t.add(Zi)}function BM(i,e,t){if(Zi.visible=i,!i)return;const n=e.ok,s=n?e.plinth?"#9fffb0":"#7be06a":"#ff5a4a",r=Is[t].range*(e.plinth?et.plinthBonus:1);Zi.position.set(e.x,e.y+.06,e.z);const o=Zi.userData;for(const a of[o.disc,o.ring,o.pillar])a.material.color.set(s);o.ring.scale.setScalar(r),o.ring.visible=n,o.pillar.visible=!e.plinth}const Yi=(i,e)=>{const t=i.level-1;return e==="range"?i.def.range*(1+.12*t)*(i.onPlinth?et.plinthBonus:1):e==="dmg"?i.def.dmg*[1,1.7,2.6,3.9,5.85][t]:e==="rate"?i.def.cooldown/(1+.15*t):i.def[e]},xa=[];function qd(i){const e=bd();gu(e,1),Qt.userData.roll.getWorldPosition(e.position),_t.add(e),xa.push({mesh:e,from:e.position.clone(),to:new G(i.x,i.y+1.3*i.mesh.scale.y,i.z),age:0})}function GM(i){for(let e=xa.length-1;e>=0;e--){const t=xa[e];t.age+=i;const n=Math.min(1,t.age/.45);t.mesh.position.lerpVectors(t.from,t.to,n),t.mesh.position.y+=Math.sin(n*Math.PI)*1.2,t.mesh.rotation.z+=i*14,n>=1&&(_t.remove(t.mesh),xa.splice(e,1),vs.emit(t.to.x,t.to.y+.3,t.to.z,{n:6,color:"#e8e2dc",speed:1.2,up:1.4,life:1.2,gravity:-.3}))}}function VM(i){for(const e of Ft)e.K.rollP=-1;GM(i);for(const e of nn){if(e.cd-=i,e.upg&&Be.guest)Si(e,Math.min(1,e.upg.t/e.upg.dur));else if(e.upg){const c=Ft.find(h=>{var f;return h.K.stun<=0&&((f=h.K.roll)==null?void 0:f.tower)===e})||null,u=!!c;Ui(c||pn,()=>{if(u)e.upg.t+=i,e.rollEase=(e.rollEase??0)+(Math.min(1,e.upg.t/e.upg.dur)-(e.rollEase??0))*(1-Math.exp(-i/.05)),D.rollP=Math.min(1,e.rollEase),D.rollTower=e;else if(e.upg.t>0){const h=Qt.userData.roll.getWorldPosition(Sr);Rt.emit(h.x,h.y,h.z,{n:14,color:"#4f8f3a",speed:1.4,up:.8,life:.8,gravity:6}),Rt.emit(h.x,h.y,h.z,{n:5,color:"#fffdf5",speed:1,up:.6,life:.7,gravity:5}),e.upg.t=0,e.rollEase=0,e.upgReset=!0,To("😩"),Ht.rumble(220,.5),on(`Rullingen ble avbrutt! Start på nytt ved ${e.def.name}`)}}),Si(e,Math.min(1,e.upg.t/e.upg.dur)),u&&Math.random()<i*8&&Rt.emit(c.K.x,c.mesh.position.y+2.2,c.K.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),e.upg.t>=e.upg.dur&&(!u||e.rollEase>=.97)&&(Ui(c||pn,()=>qd(e)),Be.host&&Be.ev.push(["u",e.id,c?c.slot:-1]),c&&(c.K.rollP=-1,c.K.roll=null),e.rollEase=0,e.upg=null,e.level+=1,vu(e,e.level),Si(e,0),Rt.emit(e.x,e.y+1.2,e.z,{n:30,color:"#8ff0ff",speed:4,up:4,life:.9,gravity:5}),Dt.upgrade(),on(`${e.def.name} er nå nivå ${e.level}`))}if(e.armBack>0&&(e.armBack-=i,e.armBack<=0&&(e.mesh.userData.arm.rotation.x=-.35)),e.type==="lamp"&&e.mesh.userData.blobs.forEach((c,u)=>c.position.y=.75+Math.sin(q.time*.8+u*2.1)*.35),e.blind>0){e.blind-=i,Math.random()<i*8&&Rt.emit(e.x,e.y+2,e.z,{n:1,color:"#fff6c8",speed:.6,up:.8,life:.5,gravity:-.4});continue}const t=Yi(e,"range");let n=null,s=-1;for(const c of un){if(!c.alive||(c.def.flying?!e.def.air:e.def.ground===!1)||Math.hypot(c.x-e.x,c.z-e.z)>t)continue;const u=UM(c);u>s&&(s=u,n=c)}const r=e.mesh.userData.head;if(e.type==="speaker"){const c=Math.max(0,Math.sin(q.time*7.3));r.rotation.z=Math.sin(q.time*3.65)*.05,e.mesh.userData.woofers.forEach(u=>u.scale.set(1+c*.15,1,1+c*.15)),n&&(r.rotation.y+=Ta(Math.atan2(-(n.x-e.x),-(n.z-e.z)),r.rotation.y)*Math.min(1,i*3))}else if(n){const c=Math.atan2(-(n.x-e.x),-(n.z-e.z));r.rotation.y+=Ta(c,r.rotation.y)*Math.min(1,i*10)}if(!n||e.cd>0)continue;e.cd=Yi(e,"rate");const o=e.x,a=e.y+1.4*e.mesh.scale.y,l=e.z;if(e.type==="ring"){const c=E_();c.position.set(o,a-.3,l),_t.add(c),gi.push({kind:"bolt",src:e,mesh:c,target:n,dmg:Yi(e,"dmg"),tx:n.x,ty:n.y,tz:n.z,age:0}),Dt.puff()}else if(e.type==="chips"){const c=Ed();c.position.set(o,e.y+1,l),_t.add(c);const[u,h]=n.def.flying?[0,0]:An.dir(n.x,n.z),f=n.x+u*n.def.speed*.6,p=n.z+h*n.def.speed*.6;gi.push({kind:"shell",src:e,mesh:c,sx:o,sy:e.y+1,sz:l,ex:f,ez:p,ey:Ge.heightAt(f,p),t:0,dur:.95,dmg:Yi(e,"dmg"),splash:e.def.splash*(1+.1*(e.level-1))}),Rt.emit(o,e.y+1.3,l,{n:6,color:"#d8d0c0",speed:1,up:2,life:.5,gravity:-1}),Dt.mortar()}else if(e.type==="speaker"){for(const u of un)!u.alive||Math.hypot(u.x-e.x,u.z-e.z)>t||(u.def.noMood||(u.slow=e.def.slowTime),Ls(u,Yi(e,"dmg"),e));const c=Td();c.position.set(e.x,e.y+.3,e.z),_t.add(c),yr.push({mesh:c,t:0,r:t}),Rt.emit(e.x,e.y+1.8,e.z,{n:6,color:["#7be06a","#f2c94c","#ff7a5a"][Math.floor(Math.random()*3)],speed:2.2,up:1.6,life:.9,gravity:.5}),Dt.skank()}else if(e.type==="bubble"){const c=Cd();c.position.set(o,a+.2,l),_t.add(c),gi.push({kind:"bubble",src:e,mesh:c,target:n,dmg:Yi(e,"dmg"),trap:e.def.trap,tx:n.x,ty:n.y,tz:n.z}),Dt.pickup()}else if(e.type==="kite"){if(gi.some(u=>u.kind==="kite"&&u.tower===e)){e.cd=.2;continue}const c=Or(Ad(),"tower");c.position.set(o,a,l),_t.add(c),gi.push({kind:"kite",mesh:c,tower:e,sx:o,sz:l,tx:n.x,tz:n.z,phase:"out",t:0,tick:0,dmg:Yi(e,"dmg"),zone:e.def.zone*(1+.1*(e.level-1)),hover:e.def.hover}),Dt.puff()}else if(e.type==="pizza"){const c=A_();c.position.set(o,e.y+1.2,l),_t.add(c);const[u,h]=An.dir(n.x,n.z),f=n.x+u*n.def.speed*1.1,p=n.z+h*n.def.speed*1.1;gi.push({kind:"shell",src:e,pizza:!0,mesh:c,sx:o,sy:e.y+1.2,sz:l,ex:f,ez:p,ey:Ge.heightAt(f,p),t:0,dur:1.3,arc:7,dmg:Yi(e,"dmg"),splash:e.def.splash*(1+.1*(e.level-1))}),e.mesh.userData.arm.rotation.x=.9,e.armBack=.5,Dt.mortar()}else if(e.type==="lamp"){for(const c of un)!c.alive||Math.hypot(c.x-e.x,c.z-e.z)>t||(c.slow=Math.max(c.slow,e.def.slowTime),Ls(c,Yi(e,"dmg"),e));Math.random()<.3&&Rt.emit(e.x,e.y+1.6,e.z,{n:2,color:"#ff9a3a",speed:.8,up:1.2,life:.8,gravity:-.3})}}}function HM(i){var e;for(let t=gi.length-1;t>=0;t--){const n=gi[t];let s=!1;if(n.kind==="bolt"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y+(n.target.def.flying?0:.5),n.tz=n.target.z);const r=n.mesh.position,o=n.tx-r.x,a=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(o,a,l),u=18*i;n.age+=i,n.mesh.lookAt(n.tx,n.ty,n.tz),n.mesh.scale.setScalar(.7+n.age*2.2),c<=u+.3?(s=!0,n.target.alive&&(Ls(n.target,n.dmg,n.src),vs.emit(n.tx,n.ty+.3,n.tz,{n:3,color:"#f4f0ea",speed:1,up:.8,life:.8,gravity:-.6}),Dt.hit())):r.set(r.x+o/c*u,r.y+a/c*u,r.z+l/c*u)}else if(n.kind==="shell"){n.t+=i/n.dur;const r=Math.min(1,n.t);if(n.mesh.position.set(n.sx+(n.ex-n.sx)*r,n.sy+(n.ey-n.sy)*r+Math.sin(Math.PI*r)*(n.arc||5),n.sz+(n.ez-n.sz)*r),n.mesh.rotation.set(r*9,r*5,0),n.t>=1){s=!0;for(const o of un){if(!o.alive||o.def.flying)continue;const a=Math.hypot(o.x-n.ex,o.z-n.ez);a<n.splash&&Ls(o,n.dmg*(a<n.splash*.4?1:.6),n.src)}Rt.emit(n.ex,n.ey+.3,n.ez,{n:26,color:n.pizza?"#ff7040":"#ffd060",speed:5,up:5,life:.7,gravity:12}),vs.emit(n.ex,n.ey+.3,n.ez,{n:4,color:"#f6e7c0",speed:1.5,up:1,life:.8,gravity:-.3}),Dt.crunch(),Gn=Math.max(Gn,.12)}}else if(n.kind==="bubble"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y,n.tz=n.target.z);const r=n.mesh.position,o=n.tx-r.x,a=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(o,a,l),u=13*i;n.mesh.scale.setScalar(1+Math.sin(q.time*12)*.06),c<=u+.3?(s=!0,n.target.alive&&(Ls(n.target,n.dmg,n.src),n.target.trap=Math.max(n.target.trap||0,n.trap*Math.min(1,((e=n.target.def.resist)==null?void 0:e.bubble)??1))),Rt.emit(n.tx,n.ty,n.tz,{n:6,color:"#dff6ff",speed:2,up:1,life:.35})):r.set(r.x+o/c*u,r.y+a/c*u,r.z+l/c*u)}else if(n.kind==="kite"){n.t+=i;const r=n.mesh.position;if(n.mesh.userData.tailSegs.forEach((o,a)=>{o.rotation.x=Math.sin(q.time*5-a*.9)*.35,o.rotation.z=Math.sin(q.time*3.7-a*.7)*.25}),nn.includes(n.tower)||(n.phase="back"),n.phase==="out"){const o=n.tx-r.x,a=n.tz-r.z,l=Math.hypot(o,a),c=9*i;r.y+=(4.2-r.y)*Math.min(1,i*2),l<c?(n.phase="hover",n.t=0):(r.x+=o/l*c,r.z+=a/l*c)}else if(n.phase==="hover"){if(r.x=n.tx+Math.sin(q.time*1.7)*.6,r.z=n.tz+Math.cos(q.time*1.3)*.4,r.y=4.2+Math.sin(q.time*2.3)*.3,n.tick-=i,n.tick<=0){n.tick=.25;for(const o of un)o.alive&&o.def.flying&&Math.hypot(o.x-r.x,o.z-r.z)<n.zone&&(Ls(o,n.dmg*.4,n.tower),o.slow=Math.max(o.slow,.4));Rt.emit(r.x,r.y-.3,r.z,{n:2,color:"#ffd0b0",speed:1.5,up:-.5,life:.5,gravity:0})}n.t>n.hover&&(n.phase="back")}else{const o=n.sx-r.x,a=n.sz-r.z,l=Math.hypot(o,a),c=11*i;l<c?s=!0:(r.x+=o/l*c,r.z+=a/l*c)}n.mesh.rotation.set(Math.sin(q.time*3)*.2,q.time*.5,Math.cos(q.time*2.5)*.25)}s&&(_t.remove(n.mesh),gi.splice(t,1))}for(let t=yr.length-1;t>=0;t--){const n=yr[t];n.t+=i/(n.dur||.6),n.mesh.scale.setScalar(.5+n.t*n.r),n.mesh.material.opacity=.7*(1-n.t),n.t>=1&&(_t.remove(n.mesh),n.mesh.material.dispose(),yr.splice(t,1))}}function WM(i){var e,t;for(const n of un){if(!n.alive)continue;n.phase+=i*n.def.anim;const s=n.slow>0?.5:1;n.slow-=i;let r=n.def.speed*s*(n.speedMul||1);n.trap>0?(n.trap-=i,r*=.15,n.bubbleFx||(n.bubbleFx=Cd(),n.bubbleFx.scale.setScalar(3.2),n.mesh.add(n.bubbleFx)),n.bubbleFx.visible=!0):n.bubbleFx&&(n.bubbleFx.visible=!1);const o=n.mesh.userData.body;if(n.def.flying){const l=Ge.lighthouse.pos;let c=l.x-n.x,u=l.z-n.z;const h=Mu(n.x,n.z),f=h.K,p=Math.hypot(f.x-n.x,f.z-n.z);let g=n.trap>0?1.1:n.def.alt||4.2;if(n.def.swoop&&p<6&&f.stun<=0&&n.hitCd<=0&&!(n.trap>0)){const x=Math.hypot(c,u);c=c/x*.5+(f.x-n.x)/p*.9,u=u/x*.5+(f.z-n.z)/p*.9,g=1.5}n.hitCd-=i;const M=Math.hypot(c,u)||1,m=Math.cos(q.time*1.3+n.lane*4)*(n.type==="balloon"?.4:1.2);n.x+=(c/M+-u/M*m*.35)*r*i,n.z+=(u/M+c/M*m*.35)*r*i,n.mesh.rotation.z=-m*(n.type==="balloon"?.05:.25);const d=Math.max(Ge.heightAt(n.x,n.z),0);n.y+=(d+g-n.y)*Math.min(1,i*2.5);const _=n.mesh.userData.blob;_&&(_.position.y=(d-n.y)/n.var+.05,_.material.opacity=1,_.scale.setScalar(1)),n.mesh.rotation.y=Math.atan2(-c,-u);const b=n.mesh.userData;if((e=b.wings)==null||e.forEach((x,C)=>x.rotation.z=Math.sin(n.phase)*.45*(C?-1:1)),(t=b.rotors)==null||t.forEach(x=>x.rotation.y+=i*40),b.rotor&&(b.rotor.rotation.y+=i*30,b.tail.rotation.x+=i*30),o.position.y=Math.sin(n.phase*.5)*(n.type==="balloon"?.3:.15),n.def.blind&&(n.blindCd=(n.blindCd??n.def.blind.every*.5)-i,b.beam&&(b.beam.visible=n.blindCd>n.def.blind.every-.8),n.blindCd<=0)){n.blindCd=n.def.blind.every;const x=Vs(nn,n.x,n.z,n.def.blind.range);x&&(x.blind=n.def.blind.dur,on(`${n.def.name} blendet ${x.def.name}!`)),p<5&&Ui(h,()=>Bc(et.airStress,n.x,n.z,!0))}n.def.swoop&&p<1.3&&Math.abs(n.y-h.mesh.position.y-1)<1.4&&f.stun<=0&&n.hitCd<=0&&Ui(h,()=>YM(n)),Math.hypot(l.x-n.x,l.z-n.z)<3.4&&Oc(n)}else{const[l,c,u]=An.dir(n.x,n.z);n.remain=u;const h=Ge.lighthouse.pos,f=Math.hypot(h.x-n.x,h.z-n.z);if(f<4.3||u<.6){Oc(n);continue}let p=l,g=c;!p&&!g&&(p=(h.x-n.x)/f,g=(h.z-n.z)/f),n.hx=(n.hx||0)+(p-(n.hx||0))*Math.min(1,i*6),n.hz=(n.hz||0)+(g-(n.hz||0))*Math.min(1,i*6);const M=Math.hypot(n.hx,n.hz)||1,m=n.lane*Math.min(1,f/10);n.x+=n.hx/M*r*i+-n.hz/M*m*i*.5,n.z+=n.hz/M*r*i+n.hx/M*m*i*.5,n.y=Ge.heightAt(n.x,n.z),n.mesh.rotation.y=Math.atan2(-n.hx,-n.hz);for(const d of Ft){const _=d.K;_.inv<=0&&_.faint<=0&&Math.abs(_.x-n.x)<1.2&&Math.abs(_.z-n.z)<1.2&&Math.hypot(_.x-n.x,_.z-n.z)<1.1&&Ui(d,()=>Bc(n.def.stress??10,n.x,n.z))}if(n.type==="clerk")o.position.y=Math.abs(Math.sin(n.phase))*.12,o.rotation.z=Math.sin(n.phase)*.06,n.mesh.userData.arm.position.y=.9+Math.max(0,Math.sin(n.phase*.5))*.25;else if(n.type==="tank"){const d=Math.abs(Math.sin(n.phase));o.position.y=d*.05,o.rotation.z=Math.sin(n.phase)*.07;const _=Math.pow(1-d,6);o.scale.set(1+_*.06,1-_*.08,1+_*.06)}else n.type==="swarm"?(o.position.y=Math.abs(Math.sin(n.phase))*.14,o.rotation.y=Math.sin(n.phase*.5)*.3):n.type==="complainer"?(o.position.y=Math.abs(Math.sin(n.phase))*.16,n.mesh.userData.arm.rotation.z=Math.sin(n.phase*.5)*.4):n.type==="lobbyist"||n.type==="lobbyMini"?(o.position.y=Math.abs(Math.sin(n.phase))*.05,o.rotation.z=Math.sin(n.phase*.5)*.17):n.type==="auditor"?(o.position.y=Math.abs(Math.sin(n.phase))*.03,o.rotation.z=0):(o.position.y=Math.abs(Math.sin(n.phase))*.08,o.rotation.z=Math.sin(n.phase)*.05)}if(n.hitT>0){n.hitT-=i;const l=Math.max(0,n.hitT)/.18;o.scale.set(1+l*.16,1-l*.16,1+l*.16),o.position.z=l*.15,n.hitT<=0&&(o.scale.set(1,1,1),o.position.z=0)}n.blinkT-=i,n.blinkT<-.12&&(n.blinkT=2+Math.random()*3.5);for(const l of n.mesh.userData.eyes)l.scale.y=n.blinkT<0?.12:1;n.mesh.position.set(n.x,n.y,n.z),n.slow>0&&Math.random()<i*6&&Rt.emit(n.x,n.y+.8,n.z,{n:1,color:"#b8e6ff",speed:.4,up:.6,life:.6,gravity:-.5});const a=n.mesh.userData.hpBar;if(a.visible){a.quaternion.copy(Kt.quaternion),a.quaternion.premultiply(n.mesh.quaternion.clone().invert());const l=Math.max(0,n.hp/n.maxHp),c=n.mesh.userData.hpFg;c.scale.x=.96*l,c.position.x=-.48*(1-l),c.material.color.setHSL(.33*(1-l),.7,.55)}}for(let n=un.length-1;n>=0;n--)un[n].alive||un.splice(n,1)}function Oc(i,e=!1){if(Be.guest&&!e)return;Be.host&&Be.ev.push(["l",i.id]),q.leaks[i.type]=(q.leaks[i.type]||0)+1,i.alive=!1,_t.remove(i.mesh),q.lights=Math.max(0,q.lights-1),Ge.lighthouse.setLights(q.lights),Hn(rn.lights,"lights",q.lights,"bad");const t=Ge.lighthouse.flamePos();vs.emit(t.x,t.y,t.z,{n:10,color:"#b8b4b0",speed:.8,up:1.6,life:1.8,gravity:-.4}),Rt.emit(t.x,t.y,t.z,{n:14,color:"#8a8580",speed:1.6,up:.6,life:1.6,gravity:4}),on(`${i.def.name} slukket litt glød!`),Dt.lose(),Gn=.3,q.lights<=0&&!Be.guest&&Au(!1)}const Bn=[],Mi=document.createElement("div");Mi.id="chillbar";Mi.innerHTML="<i></i>";document.body.appendChild(Mi);let Mf=0;function To(i){if(!pn.local)return;const e=document.createElement("div");e.className="pop-emoji",e.textContent=i,Mt.set(D.x,Qt.position.y+2.6,D.z).project(Kt),e.style.left=`${(Mt.x*.5+.5)*innerWidth}px`,e.style.top=`${(-Mt.y*.5+.5)*innerHeight}px`,document.body.appendChild(e),setTimeout(()=>e.remove(),900)}function Bc(i,e,t,n=!1){if(!Be.guest&&!(D.faint>0||D.inv>0)){if(D.chill=Math.max(0,D.chill-i),D.inv=et.stressInvuln,D.flinch=.55,!n){const s=D.x-e,r=D.z-t,o=Math.hypot(s,r)||1;D.vx+=s/o*et.stressPush,D.vz+=r/o*et.stressPush,D.goal=null}Rt.emit(D.x,Qt.position.y+1.4,D.z,{n:8,color:"#ff6a5a",speed:2,up:1.5,life:.4}),To("😓"),Mi.classList.remove("hit"),Mi.offsetWidth,Mi.classList.add("hit"),Hn(rn.chill,"chillBad",Math.random(),"bad"),D.chill<=0&&XM()}}function XM(){D.faint=et.faintTime,D.stun=et.faintTime,D.faints++,D.goal=null,D.vx=D.vz=0;const i=Math.floor(q.embers*et.faintLoss);i>0&&(q.embers-=i,Eu(D.x,Qt.position.y+1,D.z,i,!1,1.6)),D.carrying&&(D.carrying=!1),To("😵"),on(`😵 Vokteren besvimte av stress! Våkner ved fyret om ${et.faintTime} s`),Dt.stun()}function Tu(i,e,t=0){if(Be.guest&&!t)return;const n=Ed();n.scale.setScalar(1.8),n.position.set(i,Ge.heightAt(i,e)+.5,e),_t.add(n),Bn.push({id:t||++Be.ids,mesh:n,x:i,z:e,life:et.bagLife})}function qM(i){if(Be.guest){pn.local&&yf();return}D.inv-=i;const e=Ge.lighthouse.pos;D.faint>0?(D.faint-=i,D.faint<=0&&(D.x=e.x+1,D.z=e.z+7.5,D.vx=D.vz=0,D.stun=0,D.chill=et.chillMax*et.wakeChill,D.inv=et.stressInvuln*2,Rt.emit(D.x,Ge.heightAt(D.x,D.z)+1,D.z,{n:14,color:"#9fffb0",speed:2,up:2,life:.7}))):Math.hypot(e.x-D.x,e.z-D.z)<et.regenReach&&(D.chill=Math.min(et.chillMax,D.chill+et.regen*i));for(let t=Bn.length-1;pn===Ft[0]&&t>=0;t--){const n=Bn[t];n.life-=i,n.mesh.rotation.y+=i*1.5,n.mesh.position.y=Ge.heightAt(n.x,n.z)+.5+Math.sin(q.time*3+t)*.12,n.mesh.visible=n.life>4||Math.sin(n.life*12)>0;const s=Mu(n.x,n.z,r=>r.K.faint<=0&&Math.hypot(n.x-r.K.x,n.z-r.K.z)<1.4);s&&Ui(s,()=>{D.chill=Math.min(et.chillMax,D.chill+et.bagHeal),on(`🥔 Chips! +${et.bagHeal} chill`),To("😌"),Dt.pickup(),n.life=0}),n.life<=0&&(_t.remove(n.mesh),Bn.splice(t,1))}pn.local&&yf()}function yf(){const i=Math.round(D.chill);Hn(rn.chill,"chill",i),rn.chill.classList.toggle("low",i<30),i!==Mf&&(Mf=i,Mi.firstChild.style.width=`${100*D.chill/et.chillMax}%`,Mi.classList.toggle("low",i<30));const e=(i<et.chillMax||D.faint>0)&&q.phase!=="title";Mi.style.display=e?"block":"none",e&&(Mt.set(D.x,Qt.position.y+2.3,D.z).project(Kt),Mi.style.left=`${(Mt.x*.5+.5)*innerWidth}px`,Mi.style.top=`${(-Mt.y*.5+.5)*innerHeight}px`)}function YM(i){if(Be.guest||(Be.host&&Be.ev.push(["st",pn.slot]),Bc(et.airStress,i.x,i.z,!0),D.faint>0))return;D.stun=et.stunTime,i.hitCd=4;const e=Math.floor(q.embers*et.stunLoss);e>0&&(q.embers-=e,Eu(D.x,Qt.position.y+1,D.z,e,!1,1.6)),D.carrying&&(D.carrying=!1,on("Rullepapiret blåste bort!")),Rt.emit(D.x,Qt.position.y+1.5,D.z,{n:16,color:"#ffffff",speed:3,up:2,life:.5}),Dt.stun(),Gn=.2}function $M(i){if(Be.guest){xy(i);return}for(let e=Wn.length-1;e>=0;e--){const t=Wn[e];t.life-=i,t.phase+=i;const n=Math.max(Ge.heightAt(t.x,t.z),.1)+.35;t.settled||(t.vy-=16*i,t.x+=t.vx*i,t.z+=t.vz*i,t.y+=t.vy*i,t.y<=n&&(t.y=n,Math.abs(t.vy)>2.5?(t.vy=-t.vy*.4,t.vx*=.6,t.vz*=.6):t.settled=!0));const s=Mu(t.x,t.z,u=>u.K.stun<=0),r=s==null?void 0:s.K,o=r?Math.hypot(r.x-t.x,r.z-t.z):1/0;if(o<et.magnet){const u=(1-o/et.magnet)*14+3;t.x+=(r.x-t.x)/o*u*i,t.z+=(r.z-t.z)/o*u*i,t.settled=!0,t.y=n}const a=t.settled?Math.sin(t.phase*3)*.12:0;t.mesh.position.set(t.x,t.y+a,t.z),t.mesh.rotation.y+=i*3;const l=t.life<5,c=(.8+Math.min(t.value,6)*.08)*(l?.55+.45*(t.life/5):1);if(t.mesh.scale.setScalar(c),t.mesh.visible=!l||Math.sin(t.life*(t.life<1.5?30:16))>-.4,Math.random()<i*2.5&&Rt.emit(t.x,t.y+.2,t.z,{n:1,color:"#ffb347",speed:.3,up:1.2,life:.6,gravity:-.5}),o<.9)q.embers+=t.value,Hn(rn.embers,"embers",q.embers,"bump"),Rt.emit(t.x,t.y+.3,t.z,{n:8,color:"#ffe08a",speed:2,up:2.5,life:.4}),Dt.pickup(),_t.remove(t.mesh),Wn.splice(e,1);else if(t.life<=0){const u=Math.max(1,Math.round(t.value*et.expiredRefund));q.embers+=u,Rt.emit(t.x,t.y,t.z,{n:6,color:"#555048",speed:.6,up:1,life:.8,gravity:-.6}),_t.remove(t.mesh),Wn.splice(e,1)}}}let Ea=0,Yd="";function on(i){var e;if(!pn.local){(e=pn.hints)==null||e.push(i);return}Ea=2,Yd=i,Qi.textContent=""}function bf(i){for(const e of Ft)Ui(e,()=>jM(i))}function jM(i){var I,U;const e=Qt.userData;(q.phase==="prep"||q.phase==="wave")&&qM(i),D.stun-=i,e.stars.visible=D.stun>0,e.stars.rotation.y+=i*6;let t=0,n=0;if(D.stillT=!Ht.move.x&&!Ht.move.z&&!D.goal?D.stillT+i:0,D.roll)D.goal=null;else if(D.stun<=0&&(q.phase==="prep"||q.phase==="wave")){if(Ht.move.x||Ht.move.z){D.goal=null;const P=Ht.yaw??Ki,N=Math.cos(P),B=Math.sin(P);t=Ht.move.x*N+Ht.move.z*B,n=-Ht.move.x*B+Ht.move.z*N}else if(D.goal){const P=D.goal,N=P.x-D.x,B=P.z-D.z;if(P.field===void 0){P.field=null;const j=Math.ceil(Math.hypot(N,B)/.5);for(let Q=1;Q<j;Q++)if(!Ge.isWalkable(D.x+N*Q/j,D.z+B*Q/j)){P.field=An.walkField(P.x,P.z);break}}const W=P.field?Math.min(P.field.at(D.x,D.z),Math.hypot(N,B)+50):Math.hypot(N,B);P.t+=i;const V=W<.35||P.spot&&Math.hypot(P.spot.x-D.x,P.spot.z-D.z)<P.reach;if(W<P.best-.3&&(P.best=W,P.lastGain=P.t),V||P.t>12||P.t-P.lastGain>1.5)D.goal=null;else{const j=Math.min(1,W/.8),Q=P.field&&Math.hypot(N,B)>1.5?P.field.dir(D.x,D.z):null,se=Q&&(Q[0]||Q[1])?Q[0]:N/Math.hypot(N,B),Ee=Q&&(Q[0]||Q[1])?Q[1]:B/Math.hypot(N,B);t=se,n=Ee;for(const H of Ge.colliders){if(P.spot&&H.x===P.spot.x&&H.z===P.spot.z)continue;const Z=H.x-D.x,he=H.z-D.z,oe=Z*se+he*Ee;if(oe<=0||oe>H.r+2.2||oe>W)continue;const me=-Z*Ee+he*se;if(Math.abs(me)>H.r+.6)continue;const Le=(1-Math.abs(me)/(H.r+.6))*1.6*(me>=0?1:-1);t-=-Ee*Le,n-=se*Le}const Fe=Math.hypot(t,n)||1;t=t/Fe*j,n=n/Fe*j}}}Be.guest&&!pn.local&&(my(i),t=n=0);const r=Ge.heightAt(D.x,D.z)<.05,o=et.keeperSpeed*(D.carrying?et.carrySlow:1)*(r?et.wadeSlow:1),a=t*o,l=n*o,c=(I=Ge.isIce)!=null&&I.call(Ge,D.x,D.z)?1.6:12;Be.guest&&!pn.local||(D.vx+=(a-D.vx)*Math.min(1,i*c),D.vz+=(l-D.vz)*Math.min(1,i*c));let u=D.x+D.vx*i,h=D.z+D.vz*i;Be.guest&&!pn.local&&(u=D.x,h=D.z),Ge.isWalkable(u,h)||(Ge.isWalkable(u,D.z)?h=D.z:Ge.isWalkable(D.x,h)?u=D.x:(u=D.x,h=D.z));for(const P of Ge.colliders){const N=u-P.x,B=h-P.z,W=Math.hypot(N,B),V=P.r+.4;W<V&&W>1e-4&&(u=P.x+N/W*V,h=P.z+B/W*V)}D.x=u,D.z=h;const f=Math.hypot(D.vx,D.vz);if(f>.3){const P=Math.atan2(-D.vx,-D.vz);D.face+=Ta(P,D.face)*Math.min(1,i*12),D.walk+=i*f*2.2}if(Qt.rotation.y=D.face,Qt.position.set(D.x,Math.max(Ge.heightAt(D.x,D.z),-.25),D.z),r&&f>1&&(D.splash=(D.splash||0)-i,D.splash<=0)){D.splash=.22,Rt.emit(D.x,.15,D.z,{n:4,color:"#e8fbff",speed:1.6,up:2.2,life:.35,gravity:12});const P=Td();P.position.set(D.x,.1,D.z),P.material.color.set("#f4fdff"),_t.add(P),yr.push({mesh:P,t:0,r:1.6,dur:.9})}const p=Math.min(1,f/3),g=Math.sin(D.walk)*p;e.legs[0].position.z=g*.2,e.legs[1].position.z=-g*.2,e.legs[0].position.y=.2+Math.max(0,g)*.12,e.legs[1].position.y=.2+Math.max(0,-g)*.12;const M=f>.6;M!==!!D.wasMoving&&(D.sq=M?1:-1,D.wasMoving=M),D.sq=(D.sq||0)*Math.exp(-i*7);const m=f<.3?Math.sin(q.time*2.2)*.025:0;e.body.scale.set(1-m*.5-D.sq*.07,1+m+D.sq*.12,1-m*.5-D.sq*.07);const d=Math.sign(Math.sin(D.walk));f>2&&!r&&d!==D.lastStep&&Rt.emit(D.x,Qt.position.y+.1,D.z,{n:2,color:"#d9c9a4",speed:.7,up:.6,life:.45,gravity:1}),D.lastStep=d,D.flinch=Math.max(0,(D.flinch||0)-i),D.cheer=Math.max(0,(D.cheer||0)-i);const _=f>.5&&((U=Ge.isIce)==null?void 0:U.call(Ge,D.x,D.z)),b=Math.abs(g)*.09+(D.cheer>0?Math.abs(Math.sin(D.cheer*9))*.35:0);if(D.sit=(D.sit??0)+((D.roll?1:0)-(D.sit??0))*Math.min(1,i*10),e.body.position.y=b-D.sit*.24,D.sit>.01)for(const P of e.legs)P.position.z-=D.sit*.3,P.position.y+=D.sit*.12;e.body.rotation.x=D.faint>0?0:-.35*Math.min(1,D.flinch*2.5),e.body.rotation.z=D.faint>0?1.45:D.stun>0?.5:g*.05+(_?Math.sin(q.time*7)*.12:0)+(D.flinch>0?Math.sin(D.flinch*40)*.08:0);let x=g*.6,C=-g*.45,E=0,T=0;_&&(E=-1.25+Math.sin(q.time*9)*.25,T=1.25+Math.cos(q.time*8)*.25,x=C=0),D.cheer>0&&(x=C=-2.9,E=-.3,T=.3),D.flinch>0&&(x=-2.5,E=.5);const A=D.rollP>=0&&f<.3&&D.faint<=0;if(A){const P=Math.sin(q.time*7)*.12;x=1.35+P,E=.55,C=1.35-P,T=-.55;const N=D.rollTower,B=Math.atan2(-(N.x-D.x),-(N.z-D.z));if(D.face+=Ta(B,D.face)*Math.min(1,i*8),Qt.rotation.y=D.face,gu(e.roll,D.rollP),e.roll.rotation.x=Math.sin(q.time*7)*.5,Math.random()<i*4&&D.rollP<.5){const W=e.roll.getWorldPosition(Sr);Rt.emit(W.x,W.y,W.z,{n:1,color:"#5aa84a",speed:.4,up:.3,life:.5,gravity:4})}}e.roll.visible=A,e.armR.visible=A,A?e.lanternArm.position.set(.36,.72,.18):e.lanternArm.position.set(.48,1,-.1);const y=Math.min(1,i*14);e.armL.rotation.x+=(x-e.armL.rotation.x)*y,e.armL.rotation.z+=(E-e.armL.rotation.z)*y;const v=A?e.armR:e.lanternArm;A&&e.lanternArm.rotation.set(0,0,0),v.rotation.x+=(C-v.rotation.x)*y,v.rotation.z+=(T-v.rotation.z)*y,D.idle=f<.3?(D.idle||0)+i:0;const w=D.idle>2?Math.sin(q.time*.55)*.7*Math.min(1,(D.idle-2)/1.5):0;e.head.rotation.y+=(w-e.head.rotation.y)*Math.min(1,i*4),D.blink=(D.blink??2)-i,D.blink<-.12&&(D.blink=2+Math.random()*3);for(const P of e.eyes)P.scale.y=D.faint>0?.1:D.blink<0?.12:1;e.carried.visible=D.carrying,D.chargeTower?(e.carried.position.lerp(Sr.set(0,.95,-.5),Math.min(1,i*14)),e.carried.rotation.y=0,e.carried.scale.setScalar(Math.max(.55,e.carried.scale.x-i*3))):(e.carried.rotation.y+=i*2,e.carried.scale.setScalar(1),e.carried.position.set(0,2.35+Math.sin(q.time*3)*.08,0)),_u.intensity=Od*(1+Math.sin(q.time*11)*.115)}function KM(){for(const i of xt.clicks.splice(0)){xf.setFromCamera(i,Kt);const e=xf.intersectObject(Ge.terrain)[0];e&&(Be.guest&&(Be.goal=[e.point.x,e.point.z]),$d(e.point.x,e.point.z))}}function $d(i,e){const t=Ge.lighthouse.pos,n=Vs(Ge.plinths,i,e,2.2)||(Math.hypot(t.x-i,t.z-e)<4.5?{x:t.x,z:t.z,big:!0}:null);if(n){const s=n.big?4.3:1.95;let r=D.x-n.x,o=D.z-n.z;const a=Math.hypot(r,o)||1;i=n.x+r/a*s,e=n.z+o/a*s}D.goal={x:i,z:e,t:0,best:1/0,lastGain:0,spot:n,reach:n?n.big?et.lighthouseReach-.4:et.reach-.25:0},Rt.emit(i,Ge.heightAt(i,e)+.2,e,{n:6,color:"#fff3d0",speed:1.5,up:.5,life:.35,gravity:0})}function zs(i=!q.paused,e=!1){q.paused=i;const t=xt.labels();ct("pause-keys").textContent=`${t.name}: fortsett med ${t.pause} · start på nytt med ${t.restart}`,ct("pad-help").classList.toggle("hidden",xt.padSeen),ct("pause").classList.toggle("hidden",!i),ct("confirm").classList.toggle("hidden",!e),q.confirming=i&&e}try{sessionStorage.getItem("glod-portrait")&&document.documentElement.classList.add("portrait-ok")}catch{}ct("btn-portrait").addEventListener("click",()=>{document.documentElement.classList.add("portrait-ok");try{sessionStorage.setItem("glod-portrait","1")}catch{}Eo()});ct("btn-resume").addEventListener("click",()=>zs(!1));ct("btn-restart").addEventListener("click",()=>zs(!0,!0));ct("btn-yes").addEventListener("click",()=>br());ct("btn-no").addEventListener("click",()=>zs(!0,!1));ct("btn-worlds").addEventListener("click",()=>{location.href=`${location.pathname}?world=${yn}`});ct("btn-lex").addEventListener("click",()=>{const i=ct("lex");i.innerHTML||(i.innerHTML=Object.entries(bo).filter(([e])=>e!=="lobbyMini").map(([e,t])=>{const{tough:n,weak:s}=Vd(t);return`<div class="lex-row"><b>${t.flying?"🪶":"🐾"} ${t.name}</b><small>${t.info||(t.flying?"flyr rett mot fyret":"går langs veien")}</small><span>${n?`🛡️ ${n}`:""} ${s?`💥 ${s}`:""}</span></div>`}).join("")+`<p class="lex-key">🛡️ tåler · 💥 svak mot · ${Object.entries(kc).map(([e,t])=>`${t} ${Is[e].name}`).join(" · ")} · 📒 skjold forfra</p>`),i.classList.toggle("hidden")});function br(){Be.host&&Be.net.broadcast({t:"restart"}),Be.guest&&(Be.snap=null);for(const i of ji)i.el.remove();ji.length=0;for(const i of[un,ao,Wn,gi,yr]){for(const e of i)e.mesh&&_t.remove(e.mesh);i.length=0}for(const i of nn)_t.remove(i.mesh);nn.length=0,_o.innerHTML="",Sa.length=0;for(const i of Ge.plinths)i.tower=null;for(let i=Ge.colliders.length-1;i>=0;i--)Ge.colliders[i].tower&&Ge.colliders.splice(i,1);q.buildMode=!1;for(const i of Ft)i.K.chargeTower&&Si(i.K.chargeTower,0);Object.assign(q,{phase:"title",wave:0,timer:0,embers:et.startEmbers,lights:Dr,spawnQueue:[],leaks:{},seen:{},waveClock:0,sel:0,paused:!1,confirming:!1});for(const i of Ft){const{walk:e,face:t,...n}=Bd(i.slot);Object.assign(i.K,n),i.sel=0,i.buildMode=!1}for(const i of Bn)_t.remove(i.mesh);Bn.length=0,Ge.lighthouse.setLights(Dr),ry(),Gn=0,Ea=0,ei={},Hn(rn.lights,"lights",q.lights),Hn(rn.embers,"embers",q.embers),Hn(rn.wave,"wave",0),rn.timer.textContent="",ct("pause").classList.add("hidden"),ct("confirm").classList.add("hidden"),ct("overlay").classList.add("hidden"),xt.clear(),q.phase="title",Ur(!0),window.__restarts=(window.__restarts||0)+1}function ZM(){kd.sync();const i=xt.device,e=!!D.roll&&i==="touch"&&!q.paused;if(ct("rollpad").classList.toggle("hidden",!e),e!==ei.rollTouch&&(ei.rollTouch=e,ei.device=null),e&&ct("touch").classList.add("hidden"),ei.device===i+xt.padKind)return;ei.device=i+xt.padKind;const t=xt.labels();ct("touch").classList.toggle("hidden",i!=="touch"||q.phase==="title"||e),Ei.querySelectorAll("button i").forEach((n,s)=>{n.textContent=i==="pad"?s===q.sel?t.build:"":i==="touch"?"":String(s+1)}),yu.textContent="Neste bølge ▶",ei.sel=-1}const Gc={still:.3,step:.25,bonus:.1},Vc=["rU","rR","rD","rL"];function jd(i){const e=Math.min(8,Math.max(4,i.level+3));return Array.from({length:e},()=>Vc[Math.floor(Math.random()*4)])}function JM(i,e){const t=i!=null&&i.upg&&!D.carrying&&!e?i:null;if(D.rollBlock&&D.rollBlock!==t&&(D.rollBlock=null),D.roll&&D.roll.tower!==t&&(D.roll=null),!D.roll&&t&&(Ht.consume("build")||Ht.consume("carry")||D.rollBlock!==t&&D.stillT>=Gc.still)&&(D.roll={tower:t,seq:jd(t),i:0,shake:!1,done:0},D.goal=null,D.vx=D.vz=0),Ht.rollMode=!!D.roll,!D.roll){for(const n of[...Vc,"rollExit"])Ht.consume(n);return}if(Ht.consume("build"),Ht.consume("carry"),Ht.consume("rollExit")){D.rollBlock=D.roll.tower,D.roll=null,Ht.rollMode=!1;return}for(const n of Vc)Ht.consume(n)&&QM(n)}function QM(i){const e=D.roll,t=e.tower.upg;i===e.seq[e.i]?(e.i++,t.t=Math.min(t.dur,t.t+t.dur*Gc.step/e.seq.length),Dt.tick(e.i),e.i>=e.seq.length&&(t.t=Math.min(t.dur,t.t+t.dur*Gc.bonus),e.seq=jd(e.tower),e.i=0,e.done++,Dt.stone(),Rt.emit(D.x,Qt.position.y+2.2,D.z,{n:10,color:"#8ff0ff",speed:1.6,up:1.6,life:.6,gravity:2}))):(e.i=0,e.shake=!0,e.shakes=(e.shakes||0)+1,Dt.bonk(),Ht.rumble(150,.4))}function ey(i){if(xt.consume("fps")&&bu.classList.toggle("hidden"),xt.consume("music")&&Qd(),ZM(),q.phase==="title"){["build","carry","next","pause"].some(t=>xt.consume(t))&&Ur();for(const t of Ft)t.input.clear();return}if(Hn(rn.embers,"embers",q.embers),!(q.phase==="prep"||q.phase==="wave")){if((q.phase==="won"||q.phase==="lost")&&xt.consume("restart")){br();return}xt.clear(),Ei.classList.add("hidden"),Nc("");return}if(xt.consume("restart")){Be.guest?on("Bare verten kan starte på nytt"):q.confirming?br():zs(!0,!0);return}if(xt.consume("pause")&&(Be.guest?on("Bare verten kan pause"):zs(!q.paused)),q.confirming){if(xt.consume("build")||xt.consume("next")){br();return}xt.consume("carry")&&zs(!0,!1)}if(q.paused){for(const t of Ft)t.input.clear();Be.guest&&Nc("⏸ Verten har pauset");return}KM();for(const t of Ft)Ui(t,()=>ty(i))}function ty(i){if(Be.guest){_y(i);return}Ht.consume("next")&&q.phase==="prep"&&(q.timer=0),Ht.consume("selPrev")&&(q.sel=(q.sel+Di.length-1)%Di.length),Ht.consume("selNext")&&(q.sel=(q.sel+1)%Di.length);const e=Vs(Ge.plinths,D.x,D.z,et.reach,c=>!c.tower),t=Vs(nn,D.x,D.z,et.reach),n=Ge.lighthouse.pos,s=Math.hypot(n.x-D.x,n.z-D.z)<et.lighthouseReach,r=D.stun>0;JM(t,r);const o=Oa();Ht.consume("build")&&!r&&(q.buildMode||e?wa(Di[q.sel]):q.buildMode=!0),Di.forEach((c,u)=>{Ht.consume("b"+(u+1))&&!r&&(q.sel=u,wa(c))});const a=(q.buildMode||!!e)&&!r&&!D.carrying;pn.panelOpen=a,Ht.consume("carry")&&!r&&(!D.carrying&&s?q.embers>=et.stoneCost?(q.embers-=et.stoneCost,D.carrying=!0,Hn(rn.embers,"embers",q.embers,"bump"),Rt.emit(D.x,Qt.position.y+2.3,D.z,{n:14,color:"#8ff0ff",speed:2,up:2,life:.6,gravity:2}),Dt.stone()):(Dt.deny(),on(`Rullepapir koster ${et.stoneCost} ✦`)):D.carrying&&s?(D.carrying=!1,q.embers+=et.stoneCost,Dt.stone(),on("Rullepapiret er lagt tilbake")):!D.carrying&&q.buildMode?q.buildMode=!1:D.carrying?t||on("Bær rullepapiret til et tårn"):on("Rullepapir hentes ved fyret"));const l=D.carrying&&!r&&t&&t.level<zc&&!t.upg?t:null;l!==D.chargeTower&&(D.chargeTower&&Si(D.chargeTower,0),D.chargeTower=l,D.charge=0),l&&(D.charge+=i/et.chargeTime,Si(l,Math.min(1,D.charge)),Math.random()<i*20&&Rt.emit(D.x,Qt.position.y+2.2,D.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),D.charge>=1&&(l.upg={t:0,dur:et.upgradeTime[l.level-1]},D.carrying=!1,D.chargeTower=null,D.charge=0,Rt.emit(l.x,l.y+1.2,l.z,{n:12,color:"#8ff0ff",speed:2,up:2,life:.6}),Dt.stone(),on(`${l.def.name}: stå stille og rull – pilene går fortere`))),pn.local&&Kd(i,{panelOpen:a,spot:o,tower:t,atLighthouse:s,stunned:r,target:l})}function Kd(i,{panelOpen:e,spot:t,tower:n,atLighthouse:s,stunned:r,target:o}){BM(e,t,Di[q.sel]),Ei.classList.toggle("hidden",!e),e&&(Ei.querySelectorAll("button").forEach((c,u)=>{c.disabled=q.embers<Is[c.dataset.tower].cost,c.classList.toggle("sel",u===q.sel)}),ei.sel!==q.sel&&xt.device==="pad"&&(ei.sel=q.sel,Ei.querySelectorAll("button i").forEach((c,u)=>c.textContent=u===q.sel?xt.labels().build:"")));const a=xt.labels();Ea-=i;let l="";if(Ea>0)l=Yd;else if(r)l="Moralpanikk! Måka slo deg ut";else if(o)l="Leverer rullepapiret …";else if(D.roll)l=`Rull! Trykk pilene i rekkefølge for å rulle fortere · ${xt.device==="pad"?`${a.carry} / hold stikka = gå`:xt.device==="touch"?"✕ Gå = gå":"Esc / Q = gå"}`;else if(n!=null&&n.upg)l=`${n.def.name}: stå stille eller trykk ${a.build} for å rulle (${Math.ceil(n.upg.dur-n.upg.t)} s)`;else if(D.carrying&&n&&n.level>=zc)l="Tårnet er på maks nivå";else if(D.carrying)l="Bær rullepapiret til et tårn";else if(s&&!D.carrying)l=`${a.carry} = hent rullepapir (${et.stoneCost} ✦)`;else if(s&&D.carrying)l=`${a.carry} = legg rullepapiret tilbake`;else if(n&&n.level<zc)l=`${n.def.name} nv. ${n.level} · hent rullepapir ved fyret for å oppgradere`;else if(e&&!t.ok)l=`Ikke lov her: ${t.why} · ${a.carry} = avbryt`;else if(e){const c=`${Is[Di[q.sel]].name} (${Is[Di[q.sel]].tip})`,u=t.plinth?" (sokkel: +25 % rekkevidde)":"";l=xt.device==="pad"?`${a.sel} = velg tårn · ${a.build} = sett ned ${c}${u}`:xt.device==="touch"?`Trykk på et tårn, eller Bygg = ${c}${u}`:`1 / 2 / 3 eller ${a.build} = sett ned ${c}${u}`}else q.phase==="prep"&&q.wave===0&&(l=`${a.build} = bygg et tårn der du står (sokler gir +25 % rekkevidde)`);Nc(l),RM(i)}const Ns=new bt;{const i=document.createElement("canvas");i.width=64,i.height=256;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,64,0);t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.5,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,256),e.globalCompositeOperation="destination-in";const n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.2,"rgba(0,0,0,0.8)"),n.addColorStop(.65,"rgba(0,0,0,0.3)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,64,256);const s=new wi(i);for(let r=0;r<6;r++){const o=new lt(new ai(1,1),new zt({map:s,color:"#ffdcae",transparent:!0,opacity:.05,blending:Ti,depthWrite:!1,depthTest:!1,fog:!1}));o.scale.set(3.5+r%3*2.4,34,1),o.position.set(-22+r*8.5,9,-4+r%2*6),o.rotation.set(-.95,0,.55),o.userData.phase=r*1.3,Ns.add(o)}}Ns.visible=hn.id==="tak";Ns.renderOrder=50;_t.add(Ns);function ny(i){Ns.position.set(Fn.x,0,Fn.z),Ns.rotation.y=Ki,Ns.children.forEach(e=>e.material.opacity=.06+.035*Math.sin(i*.35+e.userData.phase))}let Gn=0;const Mt=new G,Sr=new G,dr=new G,aa=new G,Cl=new G,Fn=new G(D.x,0,D.z);function iy(i){Fn.x+=(D.x-Fn.x)*Math.min(1,i*4),Fn.z+=(D.z-Fn.z)*Math.min(1,i*4),Fn.y=Qt.position.y;const e=ts?1.15:1,t=xt.zoom*e,n=Kt.aspect<1.2?1.25:1;Ki+=xt.look;const s=6.6*t*n;Kt.position.set(Fn.x+Math.sin(Ki)*s,Fn.y+12.5*t*n,Fn.z+Math.cos(Ki)*s),Gn=Math.max(0,Gn-i),Gn>0&&(Kt.position.x+=(Math.random()-.5)*Gn*2,Kt.position.y+=(Math.random()-.5)*Gn),Kt.lookAt(Fn.x-Math.sin(Ki),Fn.y+.5,Fn.z-Math.cos(Ki)),Kt.updateMatrixWorld();let r=0,o=0,a=0;const l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([d,_])=>{const b=Mt.set(d,_,.5).unproject(Kt),x=b.sub(Kt.position).normalize(),C=x.y<-.05?(Fn.y-Kt.position.y)/x.y:80;return[Kt.position.x+x.x*Math.min(C,80),Kt.position.z+x.z*Math.min(C,80)]});for(const[d,_]of l)r+=d/4,o+=_/4;for(const[d,_]of l)a=Math.max(a,Math.hypot(d-r,_-o));const c=yt.clamp(Math.ceil((a+4)/4)*4,16,80);_n.shadow.camera.right!==c&&(Object.assign(_n.shadow.camera,{left:-c,right:c,top:c,bottom:-c}),_n.shadow.camera.updateProjectionMatrix());const u=2*c/_n.shadow.mapSize.x;dr.set(ti.sunDir[0],ti.sunDir[1],ti.sunDir[2]).normalize(),aa.set(0,1,0).cross(dr).normalize(),Cl.copy(dr).cross(aa).normalize(),Mt.set(r,Fn.y,o);const h=Math.round(Mt.dot(aa)/u)*u,f=Math.round(Mt.dot(Cl)/u)*u,p=Mt.dot(dr);Sr.copy(aa).multiplyScalar(h).addScaledVector(Cl,f).addScaledVector(dr,p),_n.target.position.copy(Sr),_n.position.copy(Sr).addScaledVector(dr,40),_n.shadow.camera.far=40+c+20,ny(q.time),NM(),Mt.set(D.x,Qt.position.y+.9,D.z);const g=-Mt.clone().applyMatrix4(Kt.matrixWorldInverse).z;Mt.project(Kt);const M=innerWidth*zn.getPixelRatio(),m=innerHeight*zn.getPixelRatio();Lr.uKeep.value.set((Mt.x*.5+.5)*M,(Mt.y*.5+.5)*m,g),Lr.uRad.value=m*.3,DM(),IM(q.paused?0:i)}const Rl=hn.eruption,wr=Ge.extras.bridges??[];let Qr=0,In=null;function sy(i){if(!(!Rl||!wr.length||q.phase!=="wave")){if(Qr+=i,In&&Qr>=Rl.closed)In.setClosed(!1),In=null,An.setBlock(()=>!1);else if(!In&&Qr>=Rl.every){Qr=0;const e=wr[Math.random()*wr.length|0];e.setClosed(!0),In=e,An.setBlock((t,n)=>(t-e.x)**2+(n-e.z)**2<2.8*2.8),Gn=Math.max(Gn,.35),Dt.boom(),on("🌋 Utbrudd! En bro er stengt av lava i 10 s")}}}function ry(){In&&(In.setClosed(!1),An.setBlock(()=>!1)),In=null,Qr=0}function oy(i){if(Be.guest){vy(i);return}if(sy(i),q.phase==="prep")q.timer-=i,rn.timer.textContent=`Neste bølge om ${Math.ceil(Math.max(0,q.timer))} s`,q.timer<=0&&(rn.timer.textContent="",wu());else if(q.phase==="wave"){for(q.waveClock+=i;q.spawnQueue.length&&q.spawnQueue[0].t<=q.waveClock;){const e=q.spawnQueue.shift();ka(e.type,e.path)}if(rn.timer.textContent=`${un.length+q.spawnQueue.length} monstre igjen`,!q.spawnQueue.length&&!un.length){if(rn.timer.textContent="",q.wave>=xu.length){Au(!0);return}const e=et.waveBonus+q.wave*et.waveBonusPer+Math.floor(Math.min(q.embers,300)*et.interest);q.embers+=e,Hn(rn.embers,"embers",q.embers,"bump"),on(`Bølge ${q.wave} slått! +${e} ✦`);for(const t of Ft)t.K.cheer=1.4;Su(et.prepTime),en==null||en.setIntensity(0)}}}function Au(i){q.phase=i?"won":"lost",i||xt.rumble(500,.9),ct("touch").classList.add("hidden"),ct("btn-pause").classList.add("hidden"),Ei.classList.add("hidden");let e="";if(en==null||en.setIntensity(0),i){Dt.win();const n=go();g_(yn),go()>n&&(e=`<p class="lead">🔓 Ny verden låst opp: <b>${qs[yn+1].name}</b>!</p>`)}const t=ct("overlay");if(t.querySelector(".card").innerHTML=i?`<h1>Gløden lever!</h1><p class="lead">Ti bølger med forbud, komitéer og moralpanikk er chillet ned, og ${q.lights} av 20 glødepunkter brenner fortsatt. Øya ånder ut.</p>${e}<div class="menu-row"><button id="btn-again">↺ Spill kartet igjen</button>${e?'<button id="btn-nextworld" class="alt">Neste verden ▶</button>':""}<button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`:`<h1>Gløden sluknet</h1><p class="lead">Byråkratiet vant denne gangen, i bølge ${q.wave}. Rull opp og prøv på nytt.</p><div class="menu-row"><button id="btn-again">↺ Start kartet på nytt</button><button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`,Be.guest){t.querySelector(".menu-row").innerHTML='<p class="lead">Venter på at verten starter på nytt …</p><button id="btn-again" class="alt">Forlat</button><button id="btn-worlds2" class="alt hidden"></button>',ct("btn-again").addEventListener("click",()=>{location.href=`${location.pathname}?world=${yn}`}),ct("btn-worlds2").addEventListener("click",()=>{}),t.classList.remove("hidden");return}t.classList.remove("hidden"),ct("btn-again").addEventListener("click",()=>br()),ct("btn-worlds2").addEventListener("click",()=>{location.href=`${location.pathname}?world=${yn}`}),e&&ct("btn-nextworld").addEventListener("click",()=>{location.href=`${location.pathname}?world=${yn+1}`})}let en=null;const _a=(()=>{try{return JSON.parse(localStorage.getItem("glod-music")||"{}")}catch{return{}}})(),lo=["rolig","dnb","av"],Zd={rolig:"Rolig",dnb:"DnB",av:"Av"};let yi=lo.includes(_a.mode)?_a.mode:_a.muted?"av":"rolig";ln.get("musikk")&&lo.includes(ln.get("musikk"))&&(yi=ln.get("musikk"));function Jd(){try{localStorage.setItem("glod-music",JSON.stringify({vol:en.volume,mode:yi}))}catch{}}function ay(i){const e={};let t=null,n=0,s=_a.vol??.7;return{use:o=>{const a=o==="dnb"?"dnb":"rolig";t&&t!==e[a]&&t.stop(),e[a]??(e[a]=a==="dnb"?uM(i.ctx,i.noiseBuf,hn.id):hM(i.ctx,i.noiseBuf,hn.id)),t=e[a],t.setVolume(s),t.setIntensity(n),t.setMuted(o==="av"),o==="av"?t.stop():t.start()},setIntensity(o){n=o,t==null||t.setIntensity(o)},setVolume(o){s=o,t==null||t.setVolume(o)},get volume(){return s},get muted(){return yi==="av"},get intensity(){return n},get mode(){return yi},get section(){return t==null?void 0:t.section},rms(){return t?t.rms():0},tap(o){for(const a of Object.values(e))a.tap(o)}}}function ly(){const i=Dd();en||!i||ln.has("nomusic")||(en=ay(i),en.use(yi),ct("music-vol").value=Math.round(en.volume*100),ct("btn-mute").textContent=`M: ${Zd[yi]}`,window.__music=en,window.__audioCtx=i.ctx)}function Qd(){en&&(yi=lo[(lo.indexOf(yi)+1)%lo.length],en.use(yi),ct("btn-mute").textContent=`M: ${Zd[yi]}`,Jd(),on({rolig:"🎶 Musikk: rolig",dnb:"🎶 Musikk: drum & bass",av:"🎶 Musikk av"}[yi]))}for(const i of["pointerdown","keydown","touchend"])addEventListener(i,()=>{const e=Dd();e&&e.ctx.state!=="running"&&e.ctx.resume()},{passive:!0});ct("music-vol").addEventListener("input",i=>{en&&(en.setVolume(i.target.value/100),Jd())});ct("btn-mute").addEventListener("click",i=>{i.preventDefault(),Qd()});function Ur(i=!1){q.phase==="title"&&(lM(),ly(),en==null||en.setIntensity(0),i&&ct("touch").classList.toggle("hidden",xt.device!=="touch"),ct("overlay").classList.add("hidden"),ts&&xt.device!=="pad"&&(xt.device="touch"),ei.device=null,ct("btn-pause").classList.remove("hidden"),Ge.lighthouse.setLights(q.lights),Hn(rn.embers,"embers",q.embers),Su(et.firstPrep),Id&&by())}ct("btn-start").addEventListener("click",Ur);const Cu=["build","carry","next","selPrev","selNext","b1","b2","b3","b4","b5","b6","b7","rU","rR","rD","rL","rollExit"];function cy(){const i=new Set;return{move:{x:0,z:0},yaw:0,pressed:i,rollMode:!1,device:"kb",padKind:"xbox",clicks:[],consume:e=>i.delete(e),clear:()=>i.clear(),rumble:()=>{},labels:()=>xt.labels()}}function ep(i,e){if(e===So(0))return;const t=i.userData.body.children[0];t.material=t.material.clone(),t.material.color.set(e)}function Ru(i,e){if(Ft.some(r=>r.slot===i))return null;const t=Or(Sd(),"figure");ep(t,So(i));const n=Bd(i);t.position.set(n.x,Ge.heightAt(n.x,n.z),n.z),_t.add(t);const s={slot:i,name:e,K:n,mesh:t,input:cy(),sel:0,buildMode:!1,local:!1,hints:[]};return Ft.push(s),s}function Pu(i){var n;const e=Ft.findIndex(s=>s.slot===i&&!s.local);if(e<0)return;const t=Ft[e];t.K.chargeTower&&Si(t.K.chargeTower,0),(n=t.tag)==null||n.remove(),vs.emit(t.K.x,t.mesh.position.y+.8,t.K.z,{n:10,color:"#eef6e8",speed:1.4,up:1.2,life:.7,gravity:-.5}),_t.remove(t.mesh),Ft.splice(e,1)}function uy(i,e){if(Be.guest){if(i.t==="s")Be.snap=i;else if(i.t==="h")for(const s of i.h)on(s);else i.t==="restart"&&br();return}if(!Be.host||i.t!=="in")return;const t=Ft.find(s=>s.slot===e);if(!t)return;const n=t.input;if(n.move.x=Math.max(-1,Math.min(1,+i.x||0)),n.move.z=Math.max(-1,Math.min(1,+i.z||0)),Number.isFinite(i.yaw)&&(n.yaw=i.yaw),Array.isArray(i.a))for(const s of i.a)Cu.includes(s)&&n.pressed.add(s);Array.isArray(i.g)&&i.g.every(Number.isFinite)&&Ui(t,()=>$d(i.g[0],i.g[1]))}const tp=Object.keys(bo),jt=i=>Math.round(i*100)/100;function hy(){return{t:"s",ph:q.phase,w:q.wave,tm:jt(q.timer),em:q.embers,li:q.lights,left:un.length+q.spawnQueue.length,pz:q.paused?1:0,er:In?wr.indexOf(In):-1,P:Ft.map(i=>{var s,r;const e=i.K,t=e.roll,n=i===pn;return[i.slot,jt(e.x),jt(e.z),jt(e.face),jt(e.vx),jt(e.vz),e.carrying?1:0,jt(Math.max(0,e.stun)),jt(Math.max(0,e.faint)),Math.round(e.chill),n?q.sel:i.sel,(n?q.buildMode:i.buildMode)?1:0,jt(e.rollP??-1),((s=e.rollTower)==null?void 0:s.id)||0,((r=e.chargeTower)==null?void 0:r.id)||0,jt(e.charge||0),t?[t.tower.id,t.seq.join(","),t.i,t.done,t.shakes||0]:0,i.name||""]}),M:un.filter(i=>i.alive).map(i=>[i.id,tp.indexOf(i.type),jt(i.x),jt(i.y),jt(i.z),Math.round(i.hp*10)/10,Math.round(i.maxHp*10)/10,i.trap>0?jt(i.trap):0,i.slow>0?1:0]),T:nn.map(i=>[i.id,Di.indexOf(i.type),jt(i.x),jt(i.y),jt(i.z),i.level,i.plinth?Ge.plinths.indexOf(i.plinth):-1,i.upg?[jt(i.upg.t),i.upg.dur]:0,i.blind>0?jt(i.blind):0]),E:Wn.map(i=>[i.id,jt(i.x),jt(i.y),jt(i.z),i.value,jt(i.life)]),B:Bn.map(i=>[i.id,jt(i.x),jt(i.z),jt(i.life)]),ev:Be.ev.splice(0)}}function fy(i){if(!Be.host)return;if(Be.ev.length>200&&Be.ev.splice(0,Be.ev.length-200),!Be.net.guestCount()){Be.ev.length=0;return}if(Be.snapT-=i,Be.snapT>0)return;Be.snapT=.05;const e=hy();Be.lastSnapBytes=JSON.stringify(e).length,Be.net.broadcast(e);for(const t of Ft)!t.local&&t.hints.length&&Be.net.sendTo(t.slot,{t:"h",h:t.hints.splice(0)})}const Ri=(i,e)=>i.find(t=>t.id===e);function dy(i){for(const a of i.ev||[])if(a[0]==="sp")Be.spawnPoints=a[1],q.spawnPoints=a[1],Fc();else if(a[0]==="c"){const l=Ri(un,a[1]);l!=null&&l.alive&&Wd(l)}else if(a[0]==="l"){const l=Ri(un,a[1]);l!=null&&l.alive&&Oc(l,!0)}else if(a[0]==="u"){const l=Ri(nn,a[1]),c=Ft.find(u=>u.slot===a[2]);l&&c&&Ui(c,()=>qd(l))}else if(a[0]==="st"){const l=Ft.find(c=>c.slot===a[1]);l&&(Rt.emit(l.K.x,l.mesh.position.y+1.5,l.K.z,{n:16,color:"#ffffff",speed:3,up:2,life:.5}),l.local&&(Dt.stun(),Gn=.2))}const e=q.phase;if(q.embers=i.em,q.timer=i.tm,q.paused=!!i.pz,Be.left=i.left,i.li!==q.lights&&(q.lights=i.li,Ge.lighthouse.setLights(q.lights),Hn(rn.lights,"lights",q.lights,"bad")),e==="prep"&&i.ph==="wave")wu(),q.spawnQueue=[];else if(e==="wave"&&i.ph==="prep"){rn.timer.textContent="",on(`Bølge ${q.wave} slått!`);for(const a of Ft)a.K.cheer=1.4;Su(i.tm),en==null||en.setIntensity(0)}else(i.ph==="won"||i.ph==="lost")&&e!==i.ph&&Au(i.ph==="won");if(q.wave=i.w,i.er!==(In?wr.indexOf(In):-1)){In&&(In.setClosed(!1),In=null,An.setBlock(()=>!1));const a=wr[i.er];a&&(a.setClosed(!0),In=a,An.setBlock((l,c)=>(l-a.x)**2+(c-a.z)**2<2.8*2.8),Gn=Math.max(Gn,.35),Dt.boom(),on("🌋 Utbrudd! En bro er stengt av lava i 10 s"))}for(const a of i.T){let l=Ri(nn,a[0]);if(!l){const c=a[6]>=0?Ge.plinths[a[6]]:null;l=Xd(Di[a[1]],{x:a[2],y:a[3],z:a[4],plinth:c},a[0])}l.level!==a[5]&&(l.level=a[5],vu(l,l.level),Si(l,0),Rt.emit(l.x,l.y+1.2,l.z,{n:30,color:"#8ff0ff",speed:4,up:4,life:.9,gravity:5}),Dt.upgrade()),a[7]?(l.upg||(l.upg={t:0,dur:a[7][1]}),a[7][0]<l.upg.t-.5&&l.upg.t>0&&(l.upgReset=!0),l.upg.t=a[7][0],l.upg.dur=a[7][1]):l.upg&&(l.upg=null,Si(l,0)),l.blind=a[8]}const t=new Set(i.T.map(a=>a[0]));for(let a=nn.length-1;a>=0;a--){const l=nn[a];if(t.has(l.id))continue;_t.remove(l.mesh),nn.splice(a,1),l.plinth&&(l.plinth.tower=null);const c=Ge.colliders.findIndex(u=>u.tower===l);c>=0&&Ge.colliders.splice(c,1)}const n=new Set;for(const a of i.M){n.add(a[0]);let l=Ri(un,a[0]);l||(l=ka(tp[a[1]],0),l.id=a[0],l.x=a[2],l.y=a[3],l.z=a[4],l.mesh.position.set(l.x,l.y,l.z)),l.sx=a[2],l.sy=a[3],l.sz=a[4],a[5]<l.hp&&(l.mesh.userData.hpBar.visible=!0),l.hp=a[5],l.maxHp=a[6],l.trap=a[7],a[8]&&(l.slow=Math.max(l.slow,.1))}for(const a of un)a.alive&&!n.has(a.id)&&(a.alive=!1,_t.remove(a.mesh));const s=new Set;for(const a of i.E){s.add(a[0]);let l=Ri(Wn,a[0]);if(!l){const c=wd();c.scale.setScalar(.8+Math.min(a[4],6)*.08),l={id:a[0],mesh:c,x:a[1],y:a[2],z:a[3],value:a[4],phase:Math.random()*6},_t.add(c),Wn.push(l)}l.sx=a[1],l.sy=a[2],l.sz=a[3],l.life=a[5]}for(let a=Wn.length-1;a>=0;a--){const l=Wn[a];s.has(l.id)||(l.life>.3&&(Rt.emit(l.x,l.y+.3,l.z,{n:8,color:"#ffe08a",speed:2,up:2.5,life:.4}),Math.hypot(D.x-l.x,D.z-l.z)<2&&(Dt.pickup(),Hn(rn.embers,"embers",q.embers,"bump"))),_t.remove(l.mesh),Wn.splice(a,1))}const r=new Set;for(const a of i.B){r.add(a[0]);const l=Ri(Bn,a[0])||(Tu(a[1],a[2],a[0]),Bn[Bn.length-1]);l.life=a[3]}for(let a=Bn.length-1;a>=0;a--)r.has(Bn[a].id)||(_t.remove(Bn[a].mesh),Bn.splice(a,1));const o=new Set;for(const a of i.P){const l=a[0];o.add(l);let c=Ft.find(p=>p.slot===l);c||(c=Ru(l,a[17]),c.K.x=a[1],c.K.z=a[2]);const u=c.K;if(c.local){const p=Math.hypot(a[1]-u.x,a[2]-u.z);p>2.5?(u.x=a[1],u.z=a[2]):p>.9&&(u.x+=(a[1]-u.x)*.25,u.z+=(a[2]-u.z)*.25),a[9]<u.chill-2&&(u.flinch=.55,To("😣"),xt.rumble(120,.3)),q.sel=a[10],q.buildMode=!!a[11]}else u.tx=a[1],u.tz=a[2],u.tface=a[3],u.vx=a[4],u.vz=a[5],c.sel=a[10],c.buildMode=!!a[11];u.carrying=!!a[6],u.stun=a[7],u.faint=a[8],u.chill=a[9],u.rollP=a[12],u.rollTower=Ri(nn,a[13])||null;const h=Ri(nn,a[14])||null;u.chargeTower&&u.chargeTower!==h&&Si(u.chargeTower,0),u.chargeTower=h,u.charge=a[15],h&&Si(h,Math.min(1,u.charge));const f=a[16];if(f){const p=Ri(nn,f[0]),g=u.roll&&u.roll.tower===p?u.roll:null;u.roll=p?{tower:p,seq:f[1].split(","),i:f[2],done:f[3],shakes:f[4],shake:!!(g!=null&&g.shake)}:null,c.local&&g&&u.roll&&(f[4]>(g.shakes||0)?(u.roll.shake=!0,Dt.bonk(),xt.rumble(150,.4)):f[3]>g.done?(Dt.stone(),Rt.emit(u.x,c.mesh.position.y+2.2,u.z,{n:10,color:"#8ff0ff",speed:1.6,up:1.6,life:.6,gravity:2})):f[2]>g.i&&Dt.tick(f[2]))}else u.roll=null;c.local&&(xt.rollMode=!!u.roll)}for(const a of Ft.slice())!a.local&&!o.has(a.slot)&&(Pu(a.slot),ba(`${a.name||"En vokter"} forlot spillet`))}function py(){for(const i of Ft){if(i.local)continue;i.tag||(i.tag=document.createElement("div"),i.tag.className="ptag",i.tag.textContent=i.name||`Vokter ${i.slot+1}`,i.tag.style.borderColor=So(i.slot),document.body.appendChild(i.tag)),Mt.set(i.K.x,i.mesh.position.y+3,i.K.z).project(Kt);const e=Mt.z<1&&Math.abs(Mt.x)<1.05&&Math.abs(Mt.y)<1.05&&q.phase!=="title";i.tag.style.display=e?"block":"none",e&&(i.tag.style.left=`${(Mt.x*.5+.5)*innerWidth}px`,i.tag.style.top=`${(-Mt.y*.5+.5)*innerHeight}px`)}}function my(i){if(D.tx===void 0)return;const e=1-Math.exp(-i*12);D.x+=(D.tx-D.x)*e,D.z+=(D.tz-D.z)*e,Math.hypot(D.tx-D.x,D.tz-D.z)>4&&(D.x=D.tx,D.z=D.tz)}function gy(i){const e=1-Math.exp(-i*6);for(const t of un){if(!t.alive||t.sx===void 0)continue;Math.hypot(t.sx-t.x,t.sz-t.z)>6?(t.x=t.sx,t.z=t.sz):(t.x+=(t.sx-t.x)*e,t.z+=(t.sz-t.z)*e),t.def.flying&&(t.y+=(t.sy-t.y)*e)}}function vy(i){q.phase==="prep"?(q.timer-=i,rn.timer.textContent=`Neste bølge om ${Math.ceil(Math.max(0,q.timer))} s`):q.phase==="wave"&&(rn.timer.textContent=`${Be.left??un.length} monstre igjen`)}function xy(i){const e=1-Math.exp(-i*10);for(const t of Wn){if(t.sx===void 0)continue;t.x+=(t.sx-t.x)*e,t.y+=(t.sy-t.y)*e,t.z+=(t.sz-t.z)*e,t.phase+=i,t.life-=i;const n=Math.sin(t.phase*3)*.12;t.mesh.position.set(t.x,t.y+n,t.z),t.mesh.rotation.y+=i*3;const s=t.life<5;t.mesh.scale.setScalar((.8+Math.min(t.value,6)*.08)*(s?.55+.45*Math.max(0,t.life/5):1)),t.mesh.visible=!s||Math.sin(t.life*(t.life<1.5?30:16))>-.4,Math.random()<i*2.5&&Rt.emit(t.x,t.y+.2,t.z,{n:1,color:"#ffb347",speed:.3,up:1.2,life:.6,gravity:-.5})}Bn.forEach((t,n)=>{t.life-=i,t.mesh.rotation.y+=i*1.5,t.mesh.position.y=Ge.heightAt(t.x,t.z)+.5+Math.sin(q.time*3+n)*.12,t.mesh.visible=t.life>4||Math.sin(t.life*12)>0})}function _y(i){for(const c of Cu)Ht.consume(c);const e=Vs(Ge.plinths,D.x,D.z,et.reach,c=>!c.tower),t=Vs(nn,D.x,D.z,et.reach),n=Ge.lighthouse.pos,s=Math.hypot(n.x-D.x,n.z-D.z)<et.lighthouseReach,r=D.stun>0,o=Oa(),a=(q.buildMode||!!e)&&!r&&!D.carrying,l=D.chargeTower;l&&Math.random()<i*20&&Rt.emit(D.x,Qt.position.y+2.2,D.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),Kd(i,{panelOpen:a,spot:o,tower:t,atLighthouse:s,stunned:r,target:l})}function My(i){if(!Be.guest||q.phase==="title")return;const e=Cu.filter(r=>xt.pressed.has(r));Be.sendT-=i;const t=xt.move,n=t.x!==Be.lastX||t.z!==Be.lastZ;if(!e.length&&!Be.goal&&!(n&&Be.sendT<=0)&&Be.sendT>-.25)return;Be.sendT=1/30,Be.lastX=t.x,Be.lastZ=t.z;const s={t:"in",x:+t.x.toFixed(3),z:+t.z.toFixed(3),yaw:+Ki.toFixed(3)};e.length&&(s.a=e),Be.goal&&(s.g=Be.goal.map(r=>+r.toFixed(2)),Be.goal=null),Be.net.send(s)}const yy=MM({worldIndex:yn,worldName:hn.name,timeOfDay:ms,params:ln,onHostStart:i=>{Object.assign(Be,{host:!0,net:i}),Ft[0].name=i.hostName;for(const e of i.players)e.slot>0&&Ru(e.slot,e.name);Ur()},onGuestStart:i=>{Object.assign(Be,{guest:!0,net:i}),Ft[0].slot=i.slot,ep(Qt,So(i.slot)),Ur()},onMessage:uy,onLeave:(i,e)=>{Pu(i),ba(`${e} forlot spillet`)},onHostGone:()=>{ba("Verten forlot spillet"),setTimeout(()=>{location.href=`${location.pathname}?world=${yn}`},2500)}});{const i=ct("worlds"),e=go();if(qs.forEach((t,n)=>{const s=document.createElement("button");s.className="world"+(n===yn?" sel":"")+(n>=e?" locked":""),s.innerHTML=`<b>${n>=e?"🔒 ":""}${t.name}</b><small>${n>=e?"Vinn forrige verden for å låse opp":t.blurb}</small>`,s.disabled=n>=e,s.addEventListener("click",()=>{n!==yn&&(location.href=`${location.pathname}?world=${n}`)}),i.appendChild(s)}),ct("btn-start").textContent=`Tenn gløden på ${hn.name}`,hn.skyDusk){const t=document.createElement("button");t.id="btn-tod",t.className="tod",t.textContent=ms==="skumring"?"🌅 Skumring (bytt til dag)":"☀️ Dag (bytt til skumring)",t.addEventListener("click",()=>{try{localStorage.setItem("glod-tid",ms==="skumring"?"dag":"skumring")}catch{}location.href=`${location.pathname}?world=${yn}&tid=${ms==="skumring"?"dag":"skumring"}`}),ct("worlds").after(t)}}ct("btn-quality").addEventListener("click",()=>Fd(Ai==="high"?"low":"high"));addEventListener("keydown",i=>{i.code==="KeyG"&&!i.repeat&&Fd(Ai==="high"?"low":"high")});ct("btn-quality").textContent=Ai==="high"?"Høy":"Lav";ct("btn-pause").classList.add("hidden");function by(){q.embers=999;const i=Ge.lighthouse.pos,e=Ge.plinths.slice().sort((t,n)=>Math.hypot(t.x-i.x,t.z-i.z-4)-Math.hypot(n.x-i.x,n.z-i.z-4));["ring","chips","speaker","ring","chips","ring"].forEach((t,n)=>{const s=e[n];D.x=s.x+1.9,D.z=s.z,wa(t),n<3&&(nn[nn.length-1].level=n+1,vu(nn[nn.length-1],n+1))}),D.x=i.x+1,D.z=i.z+6,D.carrying=!0,q.wave=Number(ln.get("demo"))||4,q.wave-=1,wu(),q.waveClock=6,q.embers=142}const Sy=new hd;let Pl=0,la=0,ca=0;window.__fpsSamples=[];window.__game={get net(){return yy.net},get snapBytes(){return Be.lastSnapBytes},players:Ft,addRemotePlayer:(i,e)=>Ru(i,e),removeRemotePlayer:i=>Pu(i),S:q,monsters:un,towers:nn,embers:Wn,world:Ge,K:D,renderer:zn,camera:Kt,input:xt,buildSpot:()=>Oa(),build:i=>wa(i),renderOnce:()=>wo.render(0),outlineCats:fd,spawnMonster:ka,projectiles:gi,damage:Ls,dropBag:(i,e)=>Tu(i,e),ghost:Zi,get camYaw(){return Ki}};window.__errors=[];addEventListener("error",i=>window.__errors.push(String(i.message)));addEventListener("unhandledrejection",i=>window.__errors.push(String(i.reason)));function np(){requestAnimationFrame(np);const i=Sy.getDelta(),e=Math.min(i,.05);if(q.paused||(q.time+=e),xt.update(e),My(i),Be.snap){const t=Be.snap;Be.snap=null,dy(t)}q.paused||(Ge.update(q.time),AM.update(q.time));for(let t=0;t<wM&&!q.paused&&(q.phase==="prep"||q.phase==="wave");t++)t>0&&(q.time+=e,bf(e)),oy(e),WM(e),Be.guest&&gy(e),VM(e),HM(e),$M(e),kM(e);if(q.paused||bf(e),ey(e),fy(i),Ft.length>1&&py(),!q.paused){if(Rt.update(e),Math.random()<e*(4+10*(q.lights/Dr))){const t=Ge.lighthouse.tip;vs.emit(t.x,t.y,t.z,{n:1,color:"#e8e2dc",speed:.5,up:1.6,life:3.2,gravity:-.15})}vs.update(e)}if(iy(e),zn.info.reset(),wo.render(e),Pl++,la+=i,la>=.5){const t=Pl/la;window.__fpsSamples.push(t),window.__fpsSamples.length>240&&window.__fpsSamples.shift(),bu.textContent=`${t.toFixed(0)} fps · ${zn.info.render.calls} dc`,ca=t<(ts?28:45)?ca+1:0,ca>=6&&fs>1&&(fs=Math.max(1,fs-.25),zn.setPixelRatio(fs),Eo(),ca=0,window.__dprDrops=(window.__dprDrops||0)+1,ln.has("debug")&&console.info(`[fps] ${t.toFixed(0)} fps over tid → dpr senket til ${fs}`)),Pl=0,la=0}}np();Id&&ln.has("autostart")&&Ur();function Ta(i,e){let t=i-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}
