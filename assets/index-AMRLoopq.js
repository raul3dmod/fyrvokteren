(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jc="170",up=0,Fu=1,hp=2,Cf=1,Rf=2,$i=3,vs=0,Hn=1,hn=2,En=0,ds=1,Ti=2,Ou=3,Bu=4,Pf=5,vi=100,fp=101,dp=102,pp=103,mp=104,Jr=200,gp=201,vp=202,xp=203,Nl=204,kl=205,Fl=206,_p=207,Ol=208,Mp=209,yp=210,bp=211,Sp=212,wp=213,Ep=214,Bl=0,Gl=1,Vl=2,Tr=3,Hl=4,Wl=5,Xl=6,ql=7,Kc=0,Tp=1,Ap=2,ps=0,Lf=1,Df=2,If=3,Zc=4,Cp=5,Uf=6,zf=7,Nf=300,Ar=301,Cr=302,Yl=303,$l=304,Da=306,zi=1e3,Ds=1001,jl=1002,An=1003,Rp=1004,Ro=1005,Ii=1006,Ya=1007,Is=1008,Ni=1009,kf=1010,Ff=1011,ho=1012,Jc=1013,Os=1014,bi=1015,ai=1016,Qc=1017,eu=1018,Bs=1020,Of=35902,Bf=1021,Gf=1022,oi=1023,Vf=1024,Hf=1025,xr=1026,Gs=1027,Ia=1028,tu=1029,Wf=1030,nu=1031,iu=1033,pa=33776,ma=33777,ga=33778,va=33779,Kl=35840,Zl=35841,Jl=35842,Ql=35843,ec=36196,tc=37492,nc=37496,ic=37808,sc=37809,rc=37810,oc=37811,ac=37812,lc=37813,cc=37814,uc=37815,hc=37816,fc=37817,dc=37818,pc=37819,mc=37820,gc=37821,xa=36492,vc=36494,xc=36495,Xf=36283,_c=36284,Mc=36285,yc=36286,Pp=3200,Lp=3201,su=0,Dp=1,us="",Tn="srgb",Nr="srgb-linear",Ua="linear",Ot="srgb",Zs=7680,Gu=519,Ip=512,Up=513,zp=514,qf=515,Np=516,kp=517,Fp=518,Op=519,Vu=35044,bc=35048,Hu="300 es",Ji=2e3,wa=2001;class kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wu=1234567;const no=Math.PI/180,fo=180/Math.PI;function Ws(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function bn(i,e,t){return Math.max(e,Math.min(t,i))}function ru(i,e){return(i%e+e)%e}function Bp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Gp(i,e,t){return i!==e?(t-i)/(e-i):0}function io(i,e,t){return(1-t)*i+t*e}function Vp(i,e,t,n){return io(i,e,1-Math.exp(-t*n))}function Hp(i,e=1){return e-Math.abs(ru(i,e*2)-e)}function Wp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Xp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function qp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Yp(i,e){return i+Math.random()*(e-i)}function $p(i){return i*(.5-Math.random())}function jp(i){i!==void 0&&(Wu=i);let e=Wu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kp(i){return i*no}function Zp(i){return i*fo}function Jp(i){return(i&i-1)===0&&i!==0}function Qp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function e0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function t0(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Mt={DEG2RAD:no,RAD2DEG:fo,generateUUID:Ws,clamp:bn,euclideanModulo:ru,mapLinear:Bp,inverseLerp:Gp,lerp:io,damp:Vp,pingpong:Hp,smoothstep:Wp,smootherstep:Xp,randInt:qp,randFloat:Yp,randFloatSpread:$p,seededRandom:jp,degToRad:Kp,radToDeg:Zp,isPowerOfTwo:Jp,ceilPowerOfTwo:Qp,floorPowerOfTwo:e0,setQuaternionFromProperEuler:t0,normalize:kn,denormalize:mr};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wt{constructor(e,t,n,s,r,o,a,l,c){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],M=s[0],m=s[3],f=s[6],_=s[1],b=s[4],x=s[7],C=s[2],S=s[5],E=s[8];return r[0]=o*M+a*_+l*C,r[3]=o*m+a*b+l*S,r[6]=o*f+a*x+l*E,r[1]=c*M+u*_+h*C,r[4]=c*m+u*b+h*S,r[7]=c*f+u*x+h*E,r[2]=d*M+p*_+g*C,r[5]=d*m+p*b+g*S,r[8]=d*f+p*x+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=t*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=h*M,e[1]=(s*c-u*n)*M,e[2]=(a*n-s*o)*M,e[3]=d*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=p*M,e[7]=(n*l-c*t)*M,e[8]=(o*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($a.makeScale(e,t)),this}rotate(e){return this.premultiply($a.makeRotation(-e)),this}translate(e,t){return this.premultiply($a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $a=new wt;function Yf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ea(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function n0(){const i=Ea("canvas");return i.style.display="block",i}const Xu={};function Qr(i){i in Xu||(Xu[i]=!0,console.warn(i))}function i0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function s0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function r0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const It={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ot&&(i.r=es(i.r),i.g=es(i.g),i.b=es(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ot&&(i.r=_r(i.r),i.g=_r(i.g),i.b=_r(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===us?Ua:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function es(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const qu=[.64,.33,.3,.6,.15,.06],Yu=[.2126,.7152,.0722],$u=[.3127,.329],ju=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ku=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);It.define({[Nr]:{primaries:qu,whitePoint:$u,transfer:Ua,toXYZ:ju,fromXYZ:Ku,luminanceCoefficients:Yu,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:qu,whitePoint:$u,transfer:Ot,toXYZ:ju,fromXYZ:Ku,luminanceCoefficients:Yu,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}});let Js;class o0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Js===void 0&&(Js=Ea("canvas")),Js.width=e.width,Js.height=e.height;const n=Js.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Js}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ea("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=es(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(es(t[n]/255)*255):t[n]=es(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let a0=0;class $f{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Ws(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ja(s[o].image)):r.push(ja(s[o]))}else r=ja(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ja(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?o0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let l0=0;class Un extends kr{constructor(e=Un.DEFAULT_IMAGE,t=Un.DEFAULT_MAPPING,n=Ds,s=Ds,r=Ii,o=Is,a=oi,l=Ni,c=Un.DEFAULT_ANISOTROPY,u=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Ws(),this.name="",this.source=new $f(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zi:e.x=e.x-Math.floor(e.x);break;case Ds:e.x=e.x<0?0:1;break;case jl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zi:e.y=e.y-Math.floor(e.y);break;case Ds:e.y=e.y<0?0:1;break;case jl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Nf;Un.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,n=0,s=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,x=(p+1)/2,C=(f+1)/2,S=(u+d)/4,E=(h+M)/4,A=(g+m)/4;return b>x&&b>C?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=S/n,r=E/n):x>C?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=A/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=E/r,s=A/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(h-M)*(h-M)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-M)/_,this.z=(d-u)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class c0 extends kr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Un(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $f(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends c0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jf extends Un{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class u0 extends Un{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bo{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],M=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=M;return}if(h!==M||l!==d||c!==p||u!==g){let m=1-a;const f=l*d+c*p+u*g+h*M,_=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const C=Math.sqrt(b),S=Math.atan2(C,f*_);m=Math.sin(m*S)/C,a=Math.sin(a*S)/C}const x=a*_;if(l=l*m+d*x,c=c*m+p*x,u=u*m+g*x,h=h*m+M*x,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-a*p,e[t+2]=c*g+u*p+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ka.copy(this).projectOnVector(e),this.sub(Ka)}reflect(e){return this.sub(Ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ka=new V,Zu=new bo;class Xs{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,di):di.fromBufferAttribute(r,o),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Po.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Po.copy(n.boundingBox)),Po.applyMatrix4(e.matrixWorld),this.union(Po)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),Lo.subVectors(this.max,Hr),Qs.subVectors(e.a,Hr),er.subVectors(e.b,Hr),tr.subVectors(e.c,Hr),is.subVectors(er,Qs),ss.subVectors(tr,er),ys.subVectors(Qs,tr);let t=[0,-is.z,is.y,0,-ss.z,ss.y,0,-ys.z,ys.y,is.z,0,-is.x,ss.z,0,-ss.x,ys.z,0,-ys.x,-is.y,is.x,0,-ss.y,ss.x,0,-ys.y,ys.x,0];return!Za(t,Qs,er,tr,Lo)||(t=[1,0,0,0,1,0,0,0,1],!Za(t,Qs,er,tr,Lo))?!1:(Do.crossVectors(is,ss),t=[Do.x,Do.y,Do.z],Za(t,Qs,er,tr,Lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bi=[new V,new V,new V,new V,new V,new V,new V,new V],di=new V,Po=new Xs,Qs=new V,er=new V,tr=new V,is=new V,ss=new V,ys=new V,Hr=new V,Lo=new V,Do=new V,bs=new V;function Za(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){bs.fromArray(i,r);const a=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),l=e.dot(bs),c=t.dot(bs),u=n.dot(bs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const h0=new Xs,Wr=new V,Ja=new V;class Fr{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):h0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wr.subVectors(e,this.center);const t=Wr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Wr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wr.copy(e.center).add(Ja)),this.expandByPoint(Wr.copy(e.center).sub(Ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gi=new V,Qa=new V,Io=new V,rs=new V,el=new V,Uo=new V,tl=new V;class ou{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Qa.copy(e).add(t).multiplyScalar(.5),Io.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(Qa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Io),a=rs.dot(this.direction),l=-rs.dot(Io),c=rs.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const M=1/u;h*=M,d*=M,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Qa).addScaledVector(Io,d),p}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);const n=Gi.dot(this.direction),s=Gi.dot(Gi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,n,s,r){el.subVectors(t,e),Uo.subVectors(n,e),tl.crossVectors(el,Uo);let o=this.direction.dot(tl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rs.subVectors(this.origin,e);const l=a*this.direction.dot(Uo.crossVectors(rs,Uo));if(l<0)return null;const c=a*this.direction.dot(el.cross(rs));if(c<0||l+c>o)return null;const u=-a*rs.dot(tl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,t,n,s,r,o,a,l,c,u,h,d,p,g,M,m){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,p,g,M,m)}set(e,t,n,s,r,o,a,l,c,u,h,d,p,g,M,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/nr.setFromMatrixColumn(e,0).length(),r=1/nr.setFromMatrixColumn(e,1).length(),o=1/nr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,M=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-M*c,t[9]=-a*l,t[2]=M-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,M=c*h;t[0]=d+M*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=M+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,M=c*h;t[0]=d-M*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=M-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,M=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+M,t[1]=l*h,t[5]=M*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,M=a*c;t[0]=l*u,t[4]=M-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-M*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,M=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+M,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=M*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f0,e,d0)}lookAt(e,t,n){const s=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),os.crossVectors(n,Kn),os.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),os.crossVectors(n,Kn)),os.normalize(),zo.crossVectors(Kn,os),s[0]=os.x,s[4]=zo.x,s[8]=Kn.x,s[1]=os.y,s[5]=zo.y,s[9]=Kn.y,s[2]=os.z,s[6]=zo.z,s[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],M=n[6],m=n[10],f=n[14],_=n[3],b=n[7],x=n[11],C=n[15],S=s[0],E=s[4],A=s[8],y=s[12],v=s[1],T=s[5],N=s[9],L=s[13],U=s[2],W=s[6],G=s[10],z=s[14],I=s[3],Y=s[7],$=s[11],ie=s[15];return r[0]=o*S+a*v+l*U+c*I,r[4]=o*E+a*T+l*W+c*Y,r[8]=o*A+a*N+l*G+c*$,r[12]=o*y+a*L+l*z+c*ie,r[1]=u*S+h*v+d*U+p*I,r[5]=u*E+h*T+d*W+p*Y,r[9]=u*A+h*N+d*G+p*$,r[13]=u*y+h*L+d*z+p*ie,r[2]=g*S+M*v+m*U+f*I,r[6]=g*E+M*T+m*W+f*Y,r[10]=g*A+M*N+m*G+f*$,r[14]=g*y+M*L+m*z+f*ie,r[3]=_*S+b*v+x*U+C*I,r[7]=_*E+b*T+x*W+C*Y,r[11]=_*A+b*N+x*G+C*$,r[15]=_*y+b*L+x*z+C*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],M=e[7],m=e[11],f=e[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*p-n*l*p)+M*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+m*(+t*c*h-t*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+f*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],M=e[13],m=e[14],f=e[15],_=h*m*c-M*d*c+M*l*p-a*m*p-h*l*f+a*d*f,b=g*d*c-u*m*c-g*l*p+o*m*p+u*l*f-o*d*f,x=u*M*c-g*h*c+g*a*p-o*M*p-u*a*f+o*h*f,C=g*h*l-u*M*l-g*a*d+o*M*d+u*a*m-o*h*m,S=t*_+n*b+s*x+r*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=_*E,e[1]=(M*d*r-h*m*r-M*s*p+n*m*p+h*s*f-n*d*f)*E,e[2]=(a*m*r-M*l*r+M*s*c-n*m*c-a*s*f+n*l*f)*E,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*p-n*l*p)*E,e[4]=b*E,e[5]=(u*m*r-g*d*r+g*s*p-t*m*p-u*s*f+t*d*f)*E,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*E,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*p+t*l*p)*E,e[8]=x*E,e[9]=(g*h*r-u*M*r-g*n*p+t*M*p+u*n*f-t*h*f)*E,e[10]=(o*M*r-g*a*r+g*n*c-t*M*c-o*n*f+t*a*f)*E,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*p-t*a*p)*E,e[12]=C*E,e[13]=(u*M*s-g*h*s+g*n*d-t*M*d-u*n*m+t*h*m)*E,e[14]=(g*a*s-o*M*s-g*n*l+t*M*l+o*n*m-t*a*m)*E,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,g=r*h,M=o*u,m=o*h,f=a*h,_=l*c,b=l*u,x=l*h,C=n.x,S=n.y,E=n.z;return s[0]=(1-(M+f))*C,s[1]=(p+x)*C,s[2]=(g-b)*C,s[3]=0,s[4]=(p-x)*S,s[5]=(1-(d+f))*S,s[6]=(m+_)*S,s[7]=0,s[8]=(g+b)*E,s[9]=(m-_)*E,s[10]=(1-(d+M))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=nr.set(s[0],s[1],s[2]).length();const o=nr.set(s[4],s[5],s[6]).length(),a=nr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],pi.copy(this);const c=1/r,u=1/o,h=1/a;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=u,pi.elements[5]*=u,pi.elements[6]*=u,pi.elements[8]*=h,pi.elements[9]*=h,pi.elements[10]*=h,t.setFromRotationMatrix(pi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ji){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let p,g;if(a===Ji)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===wa)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ji){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*c,p=(n+s)*u;let g,M;if(a===Ji)g=(o+r)*h,M=-2*h;else if(a===wa)g=r*h,M=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const nr=new V,pi=new Ut,f0=new V(0,0,0),d0=new V(1,1,1),os=new V,zo=new V,Kn=new V,Ju=new Ut,Qu=new bo;class ki{constructor(e=0,t=0,n=0,s=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(bn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(bn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-bn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-bn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ju,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class au{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let p0=0;const eh=new V,ir=new bo,Vi=new Ut,No=new V,Xr=new V,m0=new V,g0=new bo,th=new V(1,0,0),nh=new V(0,1,0),ih=new V(0,0,1),sh={type:"added"},v0={type:"removed"},sr={type:"childadded",child:null},nl={type:"childremoved",child:null};class qt extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new V,t=new ki,n=new bo,s=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ut},normalMatrix:{value:new wt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new au,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(th,e)}rotateY(e){return this.rotateOnAxis(nh,e)}rotateZ(e){return this.rotateOnAxis(ih,e)}translateOnAxis(e,t){return eh.copy(e).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(th,e)}translateY(e){return this.translateOnAxis(nh,e)}translateZ(e){return this.translateOnAxis(ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?No.copy(e):No.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Xr,No,this.up):Vi.lookAt(No,Xr,this.up),this.quaternion.setFromRotationMatrix(Vi),s&&(Vi.extractRotation(s.matrixWorld),ir.setFromRotationMatrix(Vi),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sh),sr.child=e,this.dispatchEvent(sr),sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(v0),nl.child=e,this.dispatchEvent(nl),nl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sh),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,e,m0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,g0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}qt.DEFAULT_UP=new V(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new V,Hi=new V,il=new V,Wi=new V,rr=new V,or=new V,rh=new V,sl=new V,rl=new V,ol=new V,al=new Ht,ll=new Ht,cl=new Ht;class xi{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mi.subVectors(e,t),s.cross(mi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mi.subVectors(s,t),Hi.subVectors(n,t),il.subVectors(e,t);const o=mi.dot(mi),a=mi.dot(Hi),l=mi.dot(il),c=Hi.dot(Hi),u=Hi.dot(il),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wi.x),l.addScaledVector(o,Wi.y),l.addScaledVector(a,Wi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return al.setScalar(0),ll.setScalar(0),cl.setScalar(0),al.fromBufferAttribute(e,t),ll.fromBufferAttribute(e,n),cl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(al,r.x),o.addScaledVector(ll,r.y),o.addScaledVector(cl,r.z),o}static isFrontFacing(e,t,n,s){return mi.subVectors(n,t),Hi.subVectors(e,t),mi.cross(Hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),mi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return xi.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;rr.subVectors(s,n),or.subVectors(r,n),sl.subVectors(e,n);const l=rr.dot(sl),c=or.dot(sl);if(l<=0&&c<=0)return t.copy(n);rl.subVectors(e,s);const u=rr.dot(rl),h=or.dot(rl);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(rr,o);ol.subVectors(e,r);const p=rr.dot(ol),g=or.dot(ol);if(g>=0&&p<=g)return t.copy(r);const M=p*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(or,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return rh.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(rh,a);const f=1/(m+M+d);return o=M*f,a=d*f,t.copy(n).addScaledVector(rr,o).addScaledVector(or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},ko={h:0,s:0,l:0};function ul(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=It.workingColorSpace){if(e=ru(e,1),t=bn(t,0,1),n=bn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ul(o,r,e+1/3),this.g=ul(o,r,e),this.b=ul(o,r,e-1/3)}return It.toWorkingColorSpace(this,s),this}setStyle(e,t=Tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){const n=Kf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return It.fromWorkingColorSpace(Dn.copy(this),e),Math.round(bn(Dn.r*255,0,255))*65536+Math.round(bn(Dn.g*255,0,255))*256+Math.round(bn(Dn.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.fromWorkingColorSpace(Dn.copy(this),t);const n=Dn.r,s=Dn.g,r=Dn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=It.workingColorSpace){return It.fromWorkingColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=Tn){It.fromWorkingColorSpace(Dn.copy(this),e);const t=Dn.r,n=Dn.g,s=Dn.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(as),this.setHSL(as.h+e,as.s+t,as.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(ko);const n=io(as.h,ko.h,t),s=io(as.s,ko.s,t),r=io(as.l,ko.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Ce;Ce.NAMES=Kf;let x0=0;class qs extends kr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Ws(),this.name="",this.blending=ds,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=kl,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==vs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nl&&(n.blendSrc=this.blendSrc),this.blendDst!==kl&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zt extends qs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mn=new V,Fo=new Re;class Xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vu,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fo.fromBufferAttribute(this,t),Fo.applyMatrix3(e),this.setXY(t,Fo.x,Fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array),s=kn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array),s=kn(s,this.array),r=kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vu&&(e.usage=this.usage),e}}class Zf extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jf extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _0=0;const si=new Ut,hl=new qt,ar=new V,Zn=new Xs,qr=new Xs,Mn=new V;class Ft extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=Ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yf(e)?Jf:Zf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new wt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return hl.lookAt(e),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ht(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];qr.setFromBufferAttribute(a),this.morphTargetsRelative?(Mn.addVectors(Zn.min,qr.min),Zn.expandByPoint(Mn),Mn.addVectors(Zn.max,qr.max),Zn.expandByPoint(Mn)):(Zn.expandByPoint(qr.min),Zn.expandByPoint(qr.max))}Zn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Mn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Mn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Mn.fromBufferAttribute(a,c),l&&(ar.fromBufferAttribute(e,c),Mn.add(ar)),s=Math.max(s,n.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new V,l[A]=new V;const c=new V,u=new V,h=new V,d=new Re,p=new Re,g=new Re,M=new V,m=new V;function f(A,y,v){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,v),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,v),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const T=1/(p.x*g.y-g.x*p.y);isFinite(T)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(T),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(T),a[A].add(M),a[y].add(M),a[v].add(M),l[A].add(m),l[y].add(m),l[v].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let A=0,y=_.length;A<y;++A){const v=_[A],T=v.start,N=v.count;for(let L=T,U=T+N;L<U;L+=3)f(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const b=new V,x=new V,C=new V,S=new V;function E(A){C.fromBufferAttribute(s,A),S.copy(C);const y=a[A];b.copy(y),b.sub(C.multiplyScalar(C.dot(y))).normalize(),x.crossVectors(S,y);const T=x.dot(l[A])<0?-1:1;o.setXYZW(A,b.x,b.y,b.z,T)}for(let A=0,y=_.length;A<y;++A){const v=_[A],T=v.start,N=v.count;for(let L=T,U=T+N;L<U;L+=3)E(e.getX(L+0)),E(e.getX(L+1)),E(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,u=new V,h=new V;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),M=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new Xt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oh=new Ut,Ss=new ou,Oo=new Fr,ah=new V,Bo=new V,Go=new V,Vo=new V,fl=new V,Ho=new V,lh=new V,Wo=new V;class lt extends qt{constructor(e=new Ft,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(fl.fromBufferAttribute(h,e),o?Ho.addScaledVector(fl,u):Ho.addScaledVector(fl.sub(t),u))}t.add(Ho)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(r),Ss.copy(e.ray).recast(e.near),!(Oo.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Oo,ah)===null||Ss.origin.distanceToSquared(ah)>(e.far-e.near)**2))&&(oh.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(oh),!(n.boundingBox!==null&&Ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){const m=d[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,C=b;x<C;x+=3){const S=a.getX(x),E=a.getX(x+1),A=a.getX(x+2);s=Xo(this,f,e,n,c,u,h,S,E,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){const _=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);s=Xo(this,o,e,n,c,u,h,_,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){const m=d[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,C=b;x<C;x+=3){const S=x,E=x+1,A=x+2;s=Xo(this,f,e,n,c,u,h,S,E,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){const _=m,b=m+1,x=m+2;s=Xo(this,o,e,n,c,u,h,_,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function M0(i,e,t,n,s,r,o,a){let l;if(e.side===Hn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===vs,a),l===null)return null;Wo.copy(a),Wo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Wo);return c<t.near||c>t.far?null:{distance:c,point:Wo.clone(),object:i}}function Xo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Bo),i.getVertexPosition(l,Go),i.getVertexPosition(c,Vo);const u=M0(i,e,t,n,Bo,Go,Vo,lh);if(u){const h=new V;xi.getBarycoord(lh,Bo,Go,Vo,h),s&&(u.uv=xi.getInterpolatedAttribute(s,a,l,c,h,new Re)),r&&(u.uv1=xi.getInterpolatedAttribute(r,a,l,c,h,new Re)),o&&(u.normal=xi.getInterpolatedAttribute(o,a,l,c,h,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new V,materialIndex:0};xi.getNormal(Bo,Go,Vo,d.normal),u.face=d,u.barycoord=h}return u}class Bn extends Ft{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(h,2));function g(M,m,f,_,b,x,C,S,E,A,y){const v=x/E,T=C/A,N=x/2,L=C/2,U=S/2,W=E+1,G=A+1;let z=0,I=0;const Y=new V;for(let $=0;$<G;$++){const ie=$*T-L;for(let ge=0;ge<W;ge++){const Ne=ge*v-N;Y[M]=Ne*_,Y[m]=ie*b,Y[f]=U,c.push(Y.x,Y.y,Y.z),Y[M]=0,Y[m]=0,Y[f]=S>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(ge/E),h.push(1-$/A),z+=1}}for(let $=0;$<A;$++)for(let ie=0;ie<E;ie++){const ge=d+ie+W*$,Ne=d+ie+W*($+1),H=d+(ie+1)+W*($+1),Z=d+(ie+1)+W*$;l.push(ge,Ne,Z),l.push(Ne,H,Z),I+=6}a.addGroup(p,I,y),p+=I,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Fn(i){const e={};for(let t=0;t<i.length;t++){const n=Rr(i[t]);for(const s in n)e[s]=n[s]}return e}function y0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const _i={clone:Rr,merge:Fn};var b0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends qs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b0,this.fragmentShader=S0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=y0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ed extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=Ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new V,ch=new Re,uh=new Re;class Qn extends ed{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,t){return this.getViewBounds(e,ch,uh),t.subVectors(uh,ch)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(no*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const lr=-90,cr=1;class w0 extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qn(lr,cr,e,t);s.layers=this.layers,this.add(s);const r=new Qn(lr,cr,e,t);r.layers=this.layers,this.add(r);const o=new Qn(lr,cr,e,t);o.layers=this.layers,this.add(o);const a=new Qn(lr,cr,e,t);a.layers=this.layers,this.add(a);const l=new Qn(lr,cr,e,t);l.layers=this.layers,this.add(l);const c=new Qn(lr,cr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ji)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class td extends Un{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ar,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class E0 extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new td(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ii}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bn(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:En});r.uniforms.tEquirect.value=t;const o=new lt(s,r),a=t.minFilter;return t.minFilter===Is&&(t.minFilter=Ii),new w0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const dl=new V,T0=new V,A0=new wt;class Rs{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=dl.subVectors(n,t).cross(T0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(dl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||A0.getNormalMatrix(e),s=this.coplanarPoint(dl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new Fr,qo=new V;class lu{constructor(e=new Rs,t=new Rs,n=new Rs,s=new Rs,r=new Rs,o=new Rs){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ji){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],g=s[9],M=s[10],m=s[11],f=s[12],_=s[13],b=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,m-p,x-f).normalize(),n[1].setComponents(l+r,d+c,m+p,x+f).normalize(),n[2].setComponents(l+o,d+u,m+g,x+_).normalize(),n[3].setComponents(l-o,d-u,m-g,x-_).normalize(),n[4].setComponents(l-a,d-h,m-M,x-b).normalize(),t===Ji)n[5].setComponents(l+a,d+h,m+M,x+b).normalize();else if(t===wa)n[5].setComponents(a,h,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){return ws.center.set(0,0,0),ws.radius=.7071067811865476,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(qo.x=s.normal.x>0?e.max.x:e.min.x,qo.y=s.normal.y>0?e.max.y:e.min.y,qo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function C0(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],M=h[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,h[d]=M)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const M=h[p];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class li extends Ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,p=[],g=[],M=[],m=[];for(let f=0;f<u;f++){const _=f*d-o;for(let b=0;b<c;b++){const x=b*h-r;g.push(x,-_,0),M.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const b=_+c*f,x=_+c*(f+1),C=_+1+c*(f+1),S=_+1+c*f;p.push(b,x,S),p.push(x,C,S)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(M,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.width,e.height,e.widthSegments,e.heightSegments)}}var R0=`#ifdef USE_ALPHAHASH
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
#endif`,k0=`#ifdef USE_BATCHING
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
#endif`,F0=`#ifdef USE_BATCHING
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
#endif`,km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fm=`#if defined( USE_POINTS_UV )
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
}`,kg=`#define DISTANCE
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
}`,Fg=`varying vec3 vWorldDirection;
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
}`,Tt={alphahash_fragment:R0,alphahash_pars_fragment:P0,alphamap_fragment:L0,alphamap_pars_fragment:D0,alphatest_fragment:I0,alphatest_pars_fragment:U0,aomap_fragment:z0,aomap_pars_fragment:N0,batching_pars_vertex:k0,batching_vertex:F0,begin_vertex:O0,beginnormal_vertex:B0,bsdfs:G0,iridescence_fragment:V0,bumpmap_pars_fragment:H0,clipping_planes_fragment:W0,clipping_planes_pars_fragment:X0,clipping_planes_pars_vertex:q0,clipping_planes_vertex:Y0,color_fragment:$0,color_pars_fragment:j0,color_pars_vertex:K0,color_vertex:Z0,common:J0,cube_uv_reflection_fragment:Q0,defaultnormal_vertex:em,displacementmap_pars_vertex:tm,displacementmap_vertex:nm,emissivemap_fragment:im,emissivemap_pars_fragment:sm,colorspace_fragment:rm,colorspace_pars_fragment:om,envmap_fragment:am,envmap_common_pars_fragment:lm,envmap_pars_fragment:cm,envmap_pars_vertex:um,envmap_physical_pars_fragment:ym,envmap_vertex:hm,fog_vertex:fm,fog_pars_vertex:dm,fog_fragment:pm,fog_pars_fragment:mm,gradientmap_pars_fragment:gm,lightmap_pars_fragment:vm,lights_lambert_fragment:xm,lights_lambert_pars_fragment:_m,lights_pars_begin:Mm,lights_toon_fragment:bm,lights_toon_pars_fragment:Sm,lights_phong_fragment:wm,lights_phong_pars_fragment:Em,lights_physical_fragment:Tm,lights_physical_pars_fragment:Am,lights_fragment_begin:Cm,lights_fragment_maps:Rm,lights_fragment_end:Pm,logdepthbuf_fragment:Lm,logdepthbuf_pars_fragment:Dm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Um,map_fragment:zm,map_pars_fragment:Nm,map_particle_fragment:km,map_particle_pars_fragment:Fm,metalnessmap_fragment:Om,metalnessmap_pars_fragment:Bm,morphinstance_vertex:Gm,morphcolor_vertex:Vm,morphnormal_vertex:Hm,morphtarget_pars_vertex:Wm,morphtarget_vertex:Xm,normal_fragment_begin:qm,normal_fragment_maps:Ym,normal_pars_fragment:$m,normal_pars_vertex:jm,normal_vertex:Km,normalmap_pars_fragment:Zm,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:Qm,clearcoat_pars_fragment:eg,iridescence_pars_fragment:tg,opaque_fragment:ng,packing:ig,premultiplied_alpha_fragment:sg,project_vertex:rg,dithering_fragment:og,dithering_pars_fragment:ag,roughnessmap_fragment:lg,roughnessmap_pars_fragment:cg,shadowmap_pars_fragment:ug,shadowmap_pars_vertex:hg,shadowmap_vertex:fg,shadowmask_pars_fragment:dg,skinbase_vertex:pg,skinning_pars_vertex:mg,skinning_vertex:gg,skinnormal_vertex:vg,specularmap_fragment:xg,specularmap_pars_fragment:_g,tonemapping_fragment:Mg,tonemapping_pars_fragment:yg,transmission_fragment:bg,transmission_pars_fragment:Sg,uv_pars_fragment:wg,uv_pars_vertex:Eg,uv_vertex:Tg,worldpos_vertex:Ag,background_vert:Cg,background_frag:Rg,backgroundCube_vert:Pg,backgroundCube_frag:Lg,cube_vert:Dg,cube_frag:Ig,depth_vert:Ug,depth_frag:zg,distanceRGBA_vert:Ng,distanceRGBA_frag:kg,equirect_vert:Fg,equirect_frag:Og,linedashed_vert:Bg,linedashed_frag:Gg,meshbasic_vert:Vg,meshbasic_frag:Hg,meshlambert_vert:Wg,meshlambert_frag:Xg,meshmatcap_vert:qg,meshmatcap_frag:Yg,meshnormal_vert:$g,meshnormal_frag:jg,meshphong_vert:Kg,meshphong_frag:Zg,meshphysical_vert:Jg,meshphysical_frag:Qg,meshtoon_vert:ev,meshtoon_frag:tv,points_vert:nv,points_frag:iv,shadow_vert:sv,shadow_frag:rv,sprite_vert:ov,sprite_frag:av},Ye={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},Li={basic:{uniforms:Fn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Fn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Fn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Fn([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Fn([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Fn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Fn([Ye.points,Ye.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Fn([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Fn([Ye.common,Ye.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Fn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Fn([Ye.sprite,Ye.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:Fn([Ye.common,Ye.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:Fn([Ye.lights,Ye.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Li.physical={uniforms:Fn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const Yo={r:0,b:0,g:0},Es=new ki,lv=new Ut;function cv(i,e,t,n,s,r,o){const a=new Ce(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(_){let b=_.isScene===!0?_.background:null;return b&&b.isTexture&&(b=(_.backgroundBlurriness>0?t:e).get(b)),b}function M(_){let b=!1;const x=g(_);x===null?f(a,l):x&&x.isColor&&(f(x,1),b=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,b){const x=g(b);x&&(x.isCubeTexture||x.mapping===Da)?(u===void 0&&(u=new lt(new Bn(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Rr(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Es.copy(b.backgroundRotation),Es.x*=-1,Es.y*=-1,Es.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lv.makeRotationFromEuler(Es)),u.material.toneMapped=It.getTransfer(x.colorSpace)!==Ot,(h!==x||d!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,p=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new lt(new li(2,2),new rn({name:"BackgroundMaterial",uniforms:Rr(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=It.getTransfer(x.colorSpace)!==Ot,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,p=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,b){_.getRGB(Yo,Qf(i)),n.buffers.color.setClear(Yo.r,Yo.g,Yo.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(_,b=1){a.set(_),l=b,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:M,addToRenderList:m}}function uv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(v,T,N,L,U){let W=!1;const G=h(L,N,T);r!==G&&(r=G,c(r.object)),W=p(v,L,N,U),W&&g(v,L,N,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(v,T,N,L),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,T,N){const L=N.wireframe===!0;let U=n[v.id];U===void 0&&(U={},n[v.id]=U);let W=U[T.id];W===void 0&&(W={},U[T.id]=W);let G=W[L];return G===void 0&&(G=d(l()),W[L]=G),G}function d(v){const T=[],N=[],L=[];for(let U=0;U<t;U++)T[U]=0,N[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:N,attributeDivisors:L,object:v,attributes:{},index:null}}function p(v,T,N,L){const U=r.attributes,W=T.attributes;let G=0;const z=N.getAttributes();for(const I in z)if(z[I].location>=0){const $=U[I];let ie=W[I];if(ie===void 0&&(I==="instanceMatrix"&&v.instanceMatrix&&(ie=v.instanceMatrix),I==="instanceColor"&&v.instanceColor&&(ie=v.instanceColor)),$===void 0||$.attribute!==ie||ie&&$.data!==ie.data)return!0;G++}return r.attributesNum!==G||r.index!==L}function g(v,T,N,L){const U={},W=T.attributes;let G=0;const z=N.getAttributes();for(const I in z)if(z[I].location>=0){let $=W[I];$===void 0&&(I==="instanceMatrix"&&v.instanceMatrix&&($=v.instanceMatrix),I==="instanceColor"&&v.instanceColor&&($=v.instanceColor));const ie={};ie.attribute=$,$&&$.data&&(ie.data=$.data),U[I]=ie,G++}r.attributes=U,r.attributesNum=G,r.index=L}function M(){const v=r.newAttributes;for(let T=0,N=v.length;T<N;T++)v[T]=0}function m(v){f(v,0)}function f(v,T){const N=r.newAttributes,L=r.enabledAttributes,U=r.attributeDivisors;N[v]=1,L[v]===0&&(i.enableVertexAttribArray(v),L[v]=1),U[v]!==T&&(i.vertexAttribDivisor(v,T),U[v]=T)}function _(){const v=r.newAttributes,T=r.enabledAttributes;for(let N=0,L=T.length;N<L;N++)T[N]!==v[N]&&(i.disableVertexAttribArray(N),T[N]=0)}function b(v,T,N,L,U,W,G){G===!0?i.vertexAttribIPointer(v,T,N,U,W):i.vertexAttribPointer(v,T,N,L,U,W)}function x(v,T,N,L){M();const U=L.attributes,W=N.getAttributes(),G=T.defaultAttributeValues;for(const z in W){const I=W[z];if(I.location>=0){let Y=U[z];if(Y===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(Y=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(Y=v.instanceColor)),Y!==void 0){const $=Y.normalized,ie=Y.itemSize,ge=e.get(Y);if(ge===void 0)continue;const Ne=ge.buffer,H=ge.type,Z=ge.bytesPerElement,ue=H===i.INT||H===i.UNSIGNED_INT||Y.gpuType===Jc;if(Y.isInterleavedBufferAttribute){const oe=Y.data,me=oe.stride,De=Y.offset;if(oe.isInstancedInterleavedBuffer){for(let Ee=0;Ee<I.locationSize;Ee++)f(I.location+Ee,oe.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ee=0;Ee<I.locationSize;Ee++)m(I.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let Ee=0;Ee<I.locationSize;Ee++)b(I.location+Ee,ie/I.locationSize,H,$,me*Z,(De+ie/I.locationSize*Ee)*Z,ue)}else{if(Y.isInstancedBufferAttribute){for(let oe=0;oe<I.locationSize;oe++)f(I.location+oe,Y.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let oe=0;oe<I.locationSize;oe++)m(I.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let oe=0;oe<I.locationSize;oe++)b(I.location+oe,ie/I.locationSize,H,$,ie*Z,ie/I.locationSize*oe*Z,ue)}}else if(G!==void 0){const $=G[z];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(I.location,$);break;case 3:i.vertexAttrib3fv(I.location,$);break;case 4:i.vertexAttrib4fv(I.location,$);break;default:i.vertexAttrib1fv(I.location,$)}}}}_()}function C(){A();for(const v in n){const T=n[v];for(const N in T){const L=T[N];for(const U in L)u(L[U].object),delete L[U];delete T[N]}delete n[v]}}function S(v){if(n[v.id]===void 0)return;const T=n[v.id];for(const N in T){const L=T[N];for(const U in L)u(L[U].object),delete L[U];delete T[N]}delete n[v.id]}function E(v){for(const T in n){const N=n[T];if(N[v.id]===void 0)continue;const L=N[v.id];for(const U in L)u(L[U].object),delete L[U];delete N[v.id]}}function A(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:M,enableAttribute:m,disableUnusedAttributes:_}}function hv(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let M=0;M<h;M++)g+=u[M]*d[M];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==oi&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const A=E===ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Ni&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==bi&&!A)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:C,maxSamples:S}}function dv(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Rs,a=new wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const _=r?0:n,b=_*4;let x=f.clippingState||null;l.value=x,x=u(g,d,b,p);for(let C=0;C!==b;++C)x[C]=t[C];f.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const M=h!==null?h.length:0;let m=null;if(M!==0){if(m=l.value,g!==!0||m===null){const f=p+M*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,x=p;b!==M;++b,x+=4)o.copy(h[b]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function pv(i){let e=new WeakMap;function t(o,a){return a===Yl?o.mapping=Ar:a===$l&&(o.mapping=Cr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Yl||a===$l)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new E0(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class cu extends ed{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gr=4,hh=[.125,.215,.35,.446,.526,.582],Ls=20,pl=new cu,fh=new Ce;let ml=null,gl=0,vl=0,xl=!1;const Ps=(1+Math.sqrt(5))/2,ur=1/Ps,dh=[new V(-Ps,ur,0),new V(Ps,ur,0),new V(-ur,0,Ps),new V(ur,0,Ps),new V(0,Ps,-ur),new V(0,Ps,ur),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class ph{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ml,gl,vl),this._renderer.xr.enabled=xl,e.scissorTest=!1,$o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ar||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:ai,format:oi,colorSpace:Nr,depthBuffer:!1},s=mh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mv(r)),this._blurMaterial=gv(r,e,t)}return s}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,pl)}_sceneToCubeUV(e,t,n,s){const a=new Qn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(fh),u.toneMapping=ps,u.autoClear=!1;const p=new zt({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),g=new lt(new Bn,p);let M=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,M=!0):(p.color.copy(fh),M=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const b=this._cubeSize;$o(s,_*b,f>2?b:0,b,b),u.setRenderTarget(s),M&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ar||e.mapping===Cr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;$o(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,pl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=dh[(s-r-1)%dh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new lt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ls-1),M=r/g,m=isFinite(r)?1+Math.floor(u*M):Ls;m>Ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ls}`);const f=[];let _=0;for(let E=0;E<Ls;++E){const A=E/M,y=Math.exp(-A*A/2);f.push(y),E===0?_+=y:E<m&&(_+=2*y)}for(let E=0;E<f.length;E++)f[E]=f[E]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const x=this._sizeLods[s],C=3*x*(s>b-gr?s-b+gr:0),S=4*(this._cubeSize-x);$o(t,C,S,3*x,2*x),l.setRenderTarget(t),l.render(h,pl)}}function mv(i){const e=[],t=[],n=[];let s=i;const r=i-gr+1+hh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-gr?l=hh[o-i+gr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,M=3,m=2,f=1,_=new Float32Array(M*g*p),b=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let S=0;S<p;S++){const E=S%3*2/3-1,A=S>2?0:-1,y=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];_.set(y,M*g*S),b.set(d,m*g*S);const v=[S,S,S,S,S,S];x.set(v,f*g*S)}const C=new Ft;C.setAttribute("position",new Xt(_,M)),C.setAttribute("uv",new Xt(b,m)),C.setAttribute("faceIndex",new Xt(x,f)),e.push(C),s>gr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mh(i,e,t){const n=new Yn(i,e,t);return n.texture.mapping=Da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $o(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function gv(i,e,t){const n=new Float32Array(Ls),s=new V(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uu(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function gh(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uu(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function vh(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function uu(){return`

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
	`}function vv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Yl||l===$l,u=l===Ar||l===Cr;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ph(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new ph(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function xv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Qr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _v(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const M=d.morphAttributes[g];for(let m=0,f=M.length;m<f;m++)e.remove(M[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const M=p[g];for(let m=0,f=M.length;m<f;m++)e.update(M[m],i.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let M=0;if(p!==null){const _=p.array;M=p.version;for(let b=0,x=_.length;b<x;b+=3){const C=_[b+0],S=_[b+1],E=_[b+2];d.push(C,S,S,E,E,C)}}else if(g!==void 0){const _=g.array;M=g.version;for(let b=0,x=_.length/3-1;b<x;b+=3){const C=b+0,S=b+1,E=b+2;d.push(C,S,S,E,E,C)}}else return;const m=new(Yf(d)?Jf:Zf)(d,1);m.version=M;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Mv(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function h(d,p,g,M){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],M[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,M,0,g);let f=0;for(let _=0;_<g;_++)f+=p[_]*M[_];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function yv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function bv(i,e,t){const n=new WeakMap,s=new Ht;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let y=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let b=0;p===!0&&(b=1),g===!0&&(b=2),M===!0&&(b=3);let x=a.attributes.position.count*b,C=1;x>e.maxTextureSize&&(C=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const S=new Float32Array(x*C*4*h),E=new jf(S,x,C,h);E.type=bi,E.needsUpdate=!0;const A=b*4;for(let v=0;v<h;v++){const T=m[v],N=f[v],L=_[v],U=x*C*4*v;for(let W=0;W<T.count;W++){const G=W*A;p===!0&&(s.fromBufferAttribute(T,W),S[U+G+0]=s.x,S[U+G+1]=s.y,S[U+G+2]=s.z,S[U+G+3]=0),g===!0&&(s.fromBufferAttribute(N,W),S[U+G+4]=s.x,S[U+G+5]=s.y,S[U+G+6]=s.z,S[U+G+7]=0),M===!0&&(s.fromBufferAttribute(L,W),S[U+G+8]=s.x,S[U+G+9]=s.y,S[U+G+10]=s.z,S[U+G+11]=L.itemSize===4?s.w:1)}}d={count:h,texture:E,size:new Re(x,C)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Sv(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class hu extends Un{constructor(e,t,n,s,r,o,a,l,c,u=xr){if(u!==xr&&u!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===xr&&(n=Os),n===void 0&&u===Gs&&(n=Bs),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:An,this.minFilter=l!==void 0?l:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const id=new Un,xh=new hu(1,1),sd=new jf,rd=new u0,od=new td,_h=[],Mh=[],yh=new Float32Array(16),bh=new Float32Array(9),Sh=new Float32Array(4);function Or(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=_h[s];if(r===void 0&&(r=new Float32Array(s),_h[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function xn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _n(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function za(i,e){let t=Mh[e];t===void 0&&(t=new Int32Array(e),Mh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2fv(this.addr,e),_n(t,e)}}function Tv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;i.uniform3fv(this.addr,e),_n(t,e)}}function Av(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4fv(this.addr,e),_n(t,e)}}function Cv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,n))return;Sh.set(n),i.uniformMatrix2fv(this.addr,!1,Sh),_n(t,n)}}function Rv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,n))return;bh.set(n),i.uniformMatrix3fv(this.addr,!1,bh),_n(t,n)}}function Pv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,n))return;yh.set(n),i.uniformMatrix4fv(this.addr,!1,yh),_n(t,n)}}function Lv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Dv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2iv(this.addr,e),_n(t,e)}}function Iv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;i.uniform3iv(this.addr,e),_n(t,e)}}function Uv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4iv(this.addr,e),_n(t,e)}}function zv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Nv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2uiv(this.addr,e),_n(t,e)}}function kv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;i.uniform3uiv(this.addr,e),_n(t,e)}}function Fv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4uiv(this.addr,e),_n(t,e)}}function Ov(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(xh.compareFunction=qf,r=xh):r=id,t.setTexture2D(e||r,s)}function Bv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||rd,s)}function Gv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||od,s)}function Vv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||sd,s)}function Hv(i){switch(i){case 5126:return wv;case 35664:return Ev;case 35665:return Tv;case 35666:return Av;case 35674:return Cv;case 35675:return Rv;case 35676:return Pv;case 5124:case 35670:return Lv;case 35667:case 35671:return Dv;case 35668:case 35672:return Iv;case 35669:case 35673:return Uv;case 5125:return zv;case 36294:return Nv;case 36295:return kv;case 36296:return Fv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return Gv;case 36289:case 36303:case 36311:case 36292:return Vv}}function Wv(i,e){i.uniform1fv(this.addr,e)}function Xv(i,e){const t=Or(e,this.size,2);i.uniform2fv(this.addr,t)}function qv(i,e){const t=Or(e,this.size,3);i.uniform3fv(this.addr,t)}function Yv(i,e){const t=Or(e,this.size,4);i.uniform4fv(this.addr,t)}function $v(i,e){const t=Or(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jv(i,e){const t=Or(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Kv(i,e){const t=Or(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Zv(i,e){i.uniform1iv(this.addr,e)}function Jv(i,e){i.uniform2iv(this.addr,e)}function Qv(i,e){i.uniform3iv(this.addr,e)}function ex(i,e){i.uniform4iv(this.addr,e)}function tx(i,e){i.uniform1uiv(this.addr,e)}function nx(i,e){i.uniform2uiv(this.addr,e)}function ix(i,e){i.uniform3uiv(this.addr,e)}function sx(i,e){i.uniform4uiv(this.addr,e)}function rx(i,e,t){const n=this.cache,s=e.length,r=za(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||id,r[o])}function ox(i,e,t){const n=this.cache,s=e.length,r=za(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||rd,r[o])}function ax(i,e,t){const n=this.cache,s=e.length,r=za(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||od,r[o])}function lx(i,e,t){const n=this.cache,s=e.length,r=za(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||sd,r[o])}function cx(i){switch(i){case 5126:return Wv;case 35664:return Xv;case 35665:return qv;case 35666:return Yv;case 35674:return $v;case 35675:return jv;case 35676:return Kv;case 5124:case 35670:return Zv;case 35667:case 35671:return Jv;case 35668:case 35672:return Qv;case 35669:case 35673:return ex;case 5125:return tx;case 36294:return nx;case 36295:return ix;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return ax;case 36289:case 36303:case 36311:case 36292:return lx}}class ux{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hv(t.type)}}class hx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cx(t.type)}}class fx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const _l=/(\w+)(\])?(\[|\.)?/g;function wh(i,e){i.seq.push(e),i.map[e.id]=e}function dx(i,e,t){const n=i.name,s=n.length;for(_l.lastIndex=0;;){const r=_l.exec(n),o=_l.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){wh(t,c===void 0?new ux(a,i,e):new hx(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new fx(a),wh(t,h)),t=h}}}class _a{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);dx(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Eh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const px=37297;let mx=0;function gx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Th=new wt;function vx(i){It._getMatrix(Th,It.workingColorSpace,i);const e=`mat3( ${Th.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(i)){case Ua:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ah(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+gx(i.getShaderSource(e),o)}else return s}function xx(i,e){const t=vx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _x(i,e){let t;switch(e){case Lf:t="Linear";break;case Df:t="Reinhard";break;case If:t="Cineon";break;case Zc:t="ACESFilmic";break;case Uf:t="AgX";break;case zf:t="Neutral";break;case Cp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jo=new V;function Mx(){It.getLuminanceCoefficients(jo);const i=jo.x.toFixed(4),e=jo.y.toFixed(4),t=jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function bx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function eo(i){return i!==""}function Ch(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sc(i){return i.replace(wx,Tx)}const Ex=new Map;function Tx(i,e){let t=Tt[e];if(t===void 0){const n=Ex.get(e);if(n!==void 0)t=Tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sc(t)}const Ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ph(i){return i.replace(Ax,Cx)}function Cx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Rx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function Px(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ar:case Cr:e="ENVMAP_TYPE_CUBE";break;case Da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Cr:e="ENVMAP_MODE_REFRACTION";break}return e}function Dx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Kc:e="ENVMAP_BLENDING_MULTIPLY";break;case Tp:e="ENVMAP_BLENDING_MIX";break;case Ap:e="ENVMAP_BLENDING_ADD";break}return e}function Ix(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ux(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Rx(t),c=Px(t),u=Lx(t),h=Dx(t),d=Ix(t),p=yx(t),g=bx(r),M=s.createProgram();let m,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(eo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(eo).join(`
`),f.length>0&&(f+=`
`)):(m=[Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),f=[Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ps?"#define TONE_MAPPING":"",t.toneMapping!==ps?Tt.tonemapping_pars_fragment:"",t.toneMapping!==ps?_x("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,xx("linearToOutputTexel",t.outputColorSpace),Mx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(eo).join(`
`)),o=Sc(o),o=Ch(o,t),o=Rh(o,t),a=Sc(a),a=Ch(a,t),a=Rh(a,t),o=Ph(o),a=Ph(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=_+m+o,x=_+f+a,C=Eh(s,s.VERTEX_SHADER,b),S=Eh(s,s.FRAGMENT_SHADER,x);s.attachShader(M,C),s.attachShader(M,S),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function E(T){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(M).trim(),L=s.getShaderInfoLog(C).trim(),U=s.getShaderInfoLog(S).trim();let W=!0,G=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,C,S);else{const z=Ah(s,C,"vertex"),I=Ah(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+N+`
`+z+`
`+I)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(L===""||U==="")&&(G=!1);G&&(T.diagnostics={runnable:W,programLog:N,vertexShader:{log:L,prefix:m},fragmentShader:{log:U,prefix:f}})}s.deleteShader(C),s.deleteShader(S),A=new _a(s,M),y=Sx(s,M)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(M,px)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mx++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=S,this}let zx=0;class Nx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new kx(e),t.set(e,n)),n}}class kx{constructor(e){this.id=zx++,this.code=e,this.usedTimes=0}}function Fx(i,e,t,n,s,r,o){const a=new au,l=new Nx,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,v,T,N,L){const U=N.fog,W=L.geometry,G=y.isMeshStandardMaterial?N.environment:null,z=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),I=z&&z.mapping===Da?z.image.height:null,Y=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const $=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ie=$!==void 0?$.length:0;let ge=0;W.morphAttributes.position!==void 0&&(ge=1),W.morphAttributes.normal!==void 0&&(ge=2),W.morphAttributes.color!==void 0&&(ge=3);let Ne,H,Z,ue;if(Y){const At=Li[Y];Ne=At.vertexShader,H=At.fragmentShader}else Ne=y.vertexShader,H=y.fragmentShader,l.update(y),Z=l.getVertexShaderID(y),ue=l.getFragmentShaderID(y);const oe=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),De=L.isInstancedMesh===!0,Ee=L.isBatchedMesh===!0,Oe=!!y.map,fe=!!y.matcap,_e=!!z,O=!!y.aoMap,Qe=!!y.lightMap,be=!!y.bumpMap,Ge=!!y.normalMap,Ie=!!y.displacementMap,nt=!!y.emissiveMap,K=!!y.metalnessMap,R=!!y.roughnessMap,w=y.anisotropy>0,X=y.clearcoat>0,ne=y.dispersion>0,se=y.iridescence>0,re=y.sheen>0,ke=y.transmission>0,we=w&&!!y.anisotropyMap,Ue=X&&!!y.clearcoatMap,ot=X&&!!y.clearcoatNormalMap,Ae=X&&!!y.clearcoatRoughnessMap,qe=se&&!!y.iridescenceMap,at=se&&!!y.iridescenceThicknessMap,ut=re&&!!y.sheenColorMap,Je=re&&!!y.sheenRoughnessMap,Et=!!y.specularMap,ft=!!y.specularColorMap,St=!!y.specularIntensityMap,j=ke&&!!y.transmissionMap,Fe=ke&&!!y.thicknessMap,le=!!y.gradientMap,ye=!!y.alphaMap,He=y.alphaTest>0,We=!!y.alphaHash,dt=!!y.extensions;let Bt=ps;y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Bt=i.toneMapping);const Kt={shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:Ne,fragmentShader:H,defines:y.defines,customVertexShaderID:Z,customFragmentShaderID:ue,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ee,batchingColor:Ee&&L._colorsTexture!==null,instancing:De,instancingColor:De&&L.instanceColor!==null,instancingMorph:De&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Nr,alphaToCoverage:!!y.alphaToCoverage,map:Oe,matcap:fe,envMap:_e,envMapMode:_e&&z.mapping,envMapCubeUVHeight:I,aoMap:O,lightMap:Qe,bumpMap:be,normalMap:Ge,displacementMap:d&&Ie,emissiveMap:nt,normalMapObjectSpace:Ge&&y.normalMapType===Dp,normalMapTangentSpace:Ge&&y.normalMapType===su,metalnessMap:K,roughnessMap:R,anisotropy:w,anisotropyMap:we,clearcoat:X,clearcoatMap:Ue,clearcoatNormalMap:ot,clearcoatRoughnessMap:Ae,dispersion:ne,iridescence:se,iridescenceMap:qe,iridescenceThicknessMap:at,sheen:re,sheenColorMap:ut,sheenRoughnessMap:Je,specularMap:Et,specularColorMap:ft,specularIntensityMap:St,transmission:ke,transmissionMap:j,thicknessMap:Fe,gradientMap:le,opaque:y.transparent===!1&&y.blending===ds&&y.alphaToCoverage===!1,alphaMap:ye,alphaTest:He,alphaHash:We,combine:y.combine,mapUv:Oe&&M(y.map.channel),aoMapUv:O&&M(y.aoMap.channel),lightMapUv:Qe&&M(y.lightMap.channel),bumpMapUv:be&&M(y.bumpMap.channel),normalMapUv:Ge&&M(y.normalMap.channel),displacementMapUv:Ie&&M(y.displacementMap.channel),emissiveMapUv:nt&&M(y.emissiveMap.channel),metalnessMapUv:K&&M(y.metalnessMap.channel),roughnessMapUv:R&&M(y.roughnessMap.channel),anisotropyMapUv:we&&M(y.anisotropyMap.channel),clearcoatMapUv:Ue&&M(y.clearcoatMap.channel),clearcoatNormalMapUv:ot&&M(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&M(y.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&M(y.iridescenceMap.channel),iridescenceThicknessMapUv:at&&M(y.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&M(y.sheenColorMap.channel),sheenRoughnessMapUv:Je&&M(y.sheenRoughnessMap.channel),specularMapUv:Et&&M(y.specularMap.channel),specularColorMapUv:ft&&M(y.specularColorMap.channel),specularIntensityMapUv:St&&M(y.specularIntensityMap.channel),transmissionMapUv:j&&M(y.transmissionMap.channel),thicknessMapUv:Fe&&M(y.thicknessMap.channel),alphaMapUv:ye&&M(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ge||w),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!W.attributes.uv&&(Oe||ye),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:me,skinning:L.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ge,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Oe&&y.map.isVideoTexture===!0&&It.getTransfer(y.map.colorSpace)===Ot,decodeVideoTextureEmissive:nt&&y.emissiveMap.isVideoTexture===!0&&It.getTransfer(y.emissiveMap.colorSpace)===Ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===hn,flipSided:y.side===Hn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:dt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&y.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Kt.vertexUv1s=c.has(1),Kt.vertexUv2s=c.has(2),Kt.vertexUv3s=c.has(3),c.clear(),Kt}function f(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const T in y.defines)v.push(T),v.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(_(v,y),b(v,y),v.push(i.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function _(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function b(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const v=g[y.type];let T;if(v){const N=Li[v];T=_i.clone(N.uniforms)}else T=y.uniforms;return T}function C(y,v){let T;for(let N=0,L=u.length;N<L;N++){const U=u[N];if(U.cacheKey===v){T=U,++T.usedTimes;break}}return T===void 0&&(T=new Ux(i,v,y,r),u.push(T)),T}function S(y){if(--y.usedTimes===0){const v=u.indexOf(y);u[v]=u[u.length-1],u.pop(),y.destroy()}}function E(y){l.remove(y)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:C,releaseProgram:S,releaseShaderCache:E,programs:u,dispose:A}}function Ox(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Bx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Dh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ih(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,p,g,M,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:M,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=M,f.group=m),e++,f}function a(h,d,p,g,M,m){const f=o(h,d,p,g,M,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(h,d,p,g,M,m){const f=o(h,d,p,g,M,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||Bx),n.length>1&&n.sort(d||Dh),s.length>1&&s.sort(d||Dh)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Gx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ih,i.set(n,[o])):s>=r.length?(o=new Ih,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Vx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Ce};break;case"SpotLight":t={position:new V,direction:new V,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function Hx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Wx=0;function Xx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qx(i){const e=new Vx,t=Hx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);const s=new V,r=new Ut,o=new Ut;function a(c){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,M=0,m=0,f=0,_=0,b=0,x=0,C=0,S=0,E=0;c.sort(Xx);for(let y=0,v=c.length;y<v;y++){const T=c[y],N=T.color,L=T.intensity,U=T.distance,W=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=N.r*L,h+=N.g*L,d+=N.b*L;else if(T.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(T.sh.coefficients[G],L);E++}else if(T.isDirectionalLight){const G=e.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const z=T.shadow,I=t.get(T);I.shadowIntensity=z.intensity,I.shadowBias=z.bias,I.shadowNormalBias=z.normalBias,I.shadowRadius=z.radius,I.shadowMapSize=z.mapSize,n.directionalShadow[p]=I,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=T.shadow.matrix,_++}n.directional[p]=G,p++}else if(T.isSpotLight){const G=e.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(N).multiplyScalar(L),G.distance=U,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,n.spot[M]=G;const z=T.shadow;if(T.map&&(n.spotLightMap[C]=T.map,C++,z.updateMatrices(T),T.castShadow&&S++),n.spotLightMatrix[M]=z.matrix,T.castShadow){const I=t.get(T);I.shadowIntensity=z.intensity,I.shadowBias=z.bias,I.shadowNormalBias=z.normalBias,I.shadowRadius=z.radius,I.shadowMapSize=z.mapSize,n.spotShadow[M]=I,n.spotShadowMap[M]=W,x++}M++}else if(T.isRectAreaLight){const G=e.get(T);G.color.copy(N).multiplyScalar(L),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=G,m++}else if(T.isPointLight){const G=e.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){const z=T.shadow,I=t.get(T);I.shadowIntensity=z.intensity,I.shadowBias=z.bias,I.shadowNormalBias=z.normalBias,I.shadowRadius=z.radius,I.shadowMapSize=z.mapSize,I.shadowCameraNear=z.camera.near,I.shadowCameraFar=z.camera.far,n.pointShadow[g]=I,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=T.shadow.matrix,b++}n.point[g]=G,g++}else if(T.isHemisphereLight){const G=e.get(T);G.skyColor.copy(T.color).multiplyScalar(L),G.groundColor.copy(T.groundColor).multiplyScalar(L),n.hemi[f]=G,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ye.LTC_FLOAT_1,n.rectAreaLTC2=Ye.LTC_FLOAT_2):(n.rectAreaLTC1=Ye.LTC_HALF_1,n.rectAreaLTC2=Ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==p||A.pointLength!==g||A.spotLength!==M||A.rectAreaLength!==m||A.hemiLength!==f||A.numDirectionalShadows!==_||A.numPointShadows!==b||A.numSpotShadows!==x||A.numSpotMaps!==C||A.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=M,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+C-S,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,A.directionalLength=p,A.pointLength=g,A.spotLength=M,A.rectAreaLength=m,A.hemiLength=f,A.numDirectionalShadows=_,A.numPointShadows=b,A.numSpotShadows=x,A.numSpotMaps=C,A.numLightProbes=E,n.version=Wx++)}function l(c,u){let h=0,d=0,p=0,g=0,M=0;const m=u.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){const b=c[f];if(b.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(b.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const x=n.hemi[M];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:n}}function Uh(i){const e=new qx(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Yx(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Uh(i),e.set(s,[a])):r>=o.length?(a=new Uh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class $x extends qs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jx extends qs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kx=`void main() {
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
}`;function Jx(i,e,t){let n=new lu;const s=new Re,r=new Re,o=new Ht,a=new $x({depthPacking:Lp}),l=new jx,c={},u=t.maxTextureSize,h={[vs]:Hn,[Hn]:vs,[hn]:hn},d=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:Kx,fragmentShader:Zx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ft;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new lt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cf;let f=this.type;this.render=function(S,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const y=i.getRenderTarget(),v=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),N=i.state;N.setBlending(En),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const L=f!==$i&&this.type===$i,U=f===$i&&this.type!==$i;for(let W=0,G=S.length;W<G;W++){const z=S[W],I=z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const Y=I.getFrameExtents();if(s.multiply(Y),r.copy(I.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,I.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,I.mapSize.y=r.y)),I.map===null||L===!0||U===!0){const ie=this.type!==$i?{minFilter:An,magFilter:An}:{};I.map!==null&&I.map.dispose(),I.map=new Yn(s.x,s.y,ie),I.map.texture.name=z.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const $=I.getViewportCount();for(let ie=0;ie<$;ie++){const ge=I.getViewport(ie);o.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),N.viewport(o),I.updateMatrices(z,ie),n=I.getFrustum(),x(E,A,I.camera,z,this.type)}I.isPointLightShadow!==!0&&this.type===$i&&_(I,A),I.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,v,T)};function _(S,E){const A=e.update(M);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Yn(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,A,d,M,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,A,p,M,null)}function b(S,E,A,y){let v=null;const T=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)v=T;else if(v=A.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const N=v.uuid,L=E.uuid;let U=c[N];U===void 0&&(U={},c[N]=U);let W=U[L];W===void 0&&(W=v.clone(),U[L]=W,E.addEventListener("dispose",C)),v=W}if(v.visible=E.visible,v.wireframe=E.wireframe,y===$i?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:h[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,A.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=i.properties.get(v);N.light=A}return v}function x(S,E,A,y,v){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===$i)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);const L=e.update(S),U=S.material;if(Array.isArray(U)){const W=L.groups;for(let G=0,z=W.length;G<z;G++){const I=W[G],Y=U[I.materialIndex];if(Y&&Y.visible){const $=b(S,Y,y,v);S.onBeforeShadow(i,S,E,A,L,$,I),i.renderBufferDirect(A,null,L,$,S,I),S.onAfterShadow(i,S,E,A,L,$,I)}}}else if(U.visible){const W=b(S,U,y,v);S.onBeforeShadow(i,S,E,A,L,W,null),i.renderBufferDirect(A,null,L,W,S,null),S.onAfterShadow(i,S,E,A,L,W,null)}}const N=S.children;for(let L=0,U=N.length;L<U;L++)x(N[L],E,A,y,v)}function C(S){S.target.removeEventListener("dispose",C);for(const A in c){const y=c[A],v=S.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const Qx={[Bl]:Gl,[Vl]:Xl,[Hl]:ql,[Tr]:Wl,[Gl]:Bl,[Xl]:Vl,[ql]:Hl,[Wl]:Tr};function e1(i,e){function t(){let j=!1;const Fe=new Ht;let le=null;const ye=new Ht(0,0,0,0);return{setMask:function(He){le!==He&&!j&&(i.colorMask(He,He,He,He),le=He)},setLocked:function(He){j=He},setClear:function(He,We,dt,Bt,Kt){Kt===!0&&(He*=Bt,We*=Bt,dt*=Bt),Fe.set(He,We,dt,Bt),ye.equals(Fe)===!1&&(i.clearColor(He,We,dt,Bt),ye.copy(Fe))},reset:function(){j=!1,le=null,ye.set(-1,0,0,0)}}}function n(){let j=!1,Fe=!1,le=null,ye=null,He=null;return{setReversed:function(We){if(Fe!==We){const dt=e.get("EXT_clip_control");Fe?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT);const Bt=He;He=null,this.setClear(Bt)}Fe=We},getReversed:function(){return Fe},setTest:function(We){We?oe(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(We){le!==We&&!j&&(i.depthMask(We),le=We)},setFunc:function(We){if(Fe&&(We=Qx[We]),ye!==We){switch(We){case Bl:i.depthFunc(i.NEVER);break;case Gl:i.depthFunc(i.ALWAYS);break;case Vl:i.depthFunc(i.LESS);break;case Tr:i.depthFunc(i.LEQUAL);break;case Hl:i.depthFunc(i.EQUAL);break;case Wl:i.depthFunc(i.GEQUAL);break;case Xl:i.depthFunc(i.GREATER);break;case ql:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=We}},setLocked:function(We){j=We},setClear:function(We){He!==We&&(Fe&&(We=1-We),i.clearDepth(We),He=We)},reset:function(){j=!1,le=null,ye=null,He=null,Fe=!1}}}function s(){let j=!1,Fe=null,le=null,ye=null,He=null,We=null,dt=null,Bt=null,Kt=null;return{setTest:function(At){j||(At?oe(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(At){Fe!==At&&!j&&(i.stencilMask(At),Fe=At)},setFunc:function(At,pn,Nn){(le!==At||ye!==pn||He!==Nn)&&(i.stencilFunc(At,pn,Nn),le=At,ye=pn,He=Nn)},setOp:function(At,pn,Nn){(We!==At||dt!==pn||Bt!==Nn)&&(i.stencilOp(At,pn,Nn),We=At,dt=pn,Bt=Nn)},setLocked:function(At){j=At},setClear:function(At){Kt!==At&&(i.clearStencil(At),Kt=At)},reset:function(){j=!1,Fe=null,le=null,ye=null,He=null,We=null,dt=null,Bt=null,Kt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,M=!1,m=null,f=null,_=null,b=null,x=null,C=null,S=null,E=new Ce(0,0,0),A=0,y=!1,v=null,T=null,N=null,L=null,U=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,z=0;const I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(I)[1]),G=z>=1):I.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),G=z>=2);let Y=null,$={};const ie=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Ne=new Ht().fromArray(ie),H=new Ht().fromArray(ge);function Z(j,Fe,le,ye){const He=new Uint8Array(4),We=i.createTexture();i.bindTexture(j,We),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let dt=0;dt<le;dt++)j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?i.texImage3D(Fe,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,He):i.texImage2D(Fe+dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,He);return We}const ue={};ue[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(Tr),be(!1),Ge(Fu),oe(i.CULL_FACE),O(En);function oe(j){u[j]!==!0&&(i.enable(j),u[j]=!0)}function me(j){u[j]!==!1&&(i.disable(j),u[j]=!1)}function De(j,Fe){return h[j]!==Fe?(i.bindFramebuffer(j,Fe),h[j]=Fe,j===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Fe),j===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Fe),!0):!1}function Ee(j,Fe){let le=p,ye=!1;if(j){le=d.get(Fe),le===void 0&&(le=[],d.set(Fe,le));const He=j.textures;if(le.length!==He.length||le[0]!==i.COLOR_ATTACHMENT0){for(let We=0,dt=He.length;We<dt;We++)le[We]=i.COLOR_ATTACHMENT0+We;le.length=He.length,ye=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,ye=!0);ye&&i.drawBuffers(le)}function Oe(j){return g!==j?(i.useProgram(j),g=j,!0):!1}const fe={[vi]:i.FUNC_ADD,[fp]:i.FUNC_SUBTRACT,[dp]:i.FUNC_REVERSE_SUBTRACT};fe[pp]=i.MIN,fe[mp]=i.MAX;const _e={[Jr]:i.ZERO,[gp]:i.ONE,[vp]:i.SRC_COLOR,[Nl]:i.SRC_ALPHA,[yp]:i.SRC_ALPHA_SATURATE,[Ol]:i.DST_COLOR,[Fl]:i.DST_ALPHA,[xp]:i.ONE_MINUS_SRC_COLOR,[kl]:i.ONE_MINUS_SRC_ALPHA,[Mp]:i.ONE_MINUS_DST_COLOR,[_p]:i.ONE_MINUS_DST_ALPHA,[bp]:i.CONSTANT_COLOR,[Sp]:i.ONE_MINUS_CONSTANT_COLOR,[wp]:i.CONSTANT_ALPHA,[Ep]:i.ONE_MINUS_CONSTANT_ALPHA};function O(j,Fe,le,ye,He,We,dt,Bt,Kt,At){if(j===En){M===!0&&(me(i.BLEND),M=!1);return}if(M===!1&&(oe(i.BLEND),M=!0),j!==Pf){if(j!==m||At!==y){if((f!==vi||x!==vi)&&(i.blendEquation(i.FUNC_ADD),f=vi,x=vi),At)switch(j){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ti:i.blendFunc(i.ONE,i.ONE);break;case Ou:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ti:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ou:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}_=null,b=null,C=null,S=null,E.set(0,0,0),A=0,m=j,y=At}return}He=He||Fe,We=We||le,dt=dt||ye,(Fe!==f||He!==x)&&(i.blendEquationSeparate(fe[Fe],fe[He]),f=Fe,x=He),(le!==_||ye!==b||We!==C||dt!==S)&&(i.blendFuncSeparate(_e[le],_e[ye],_e[We],_e[dt]),_=le,b=ye,C=We,S=dt),(Bt.equals(E)===!1||Kt!==A)&&(i.blendColor(Bt.r,Bt.g,Bt.b,Kt),E.copy(Bt),A=Kt),m=j,y=!1}function Qe(j,Fe){j.side===hn?me(i.CULL_FACE):oe(i.CULL_FACE);let le=j.side===Hn;Fe&&(le=!le),be(le),j.blending===ds&&j.transparent===!1?O(En):O(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),o.setFunc(j.depthFunc),o.setTest(j.depthTest),o.setMask(j.depthWrite),r.setMask(j.colorWrite);const ye=j.stencilWrite;a.setTest(ye),ye&&(a.setMask(j.stencilWriteMask),a.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),a.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),nt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function be(j){v!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),v=j)}function Ge(j){j!==up?(oe(i.CULL_FACE),j!==T&&(j===Fu?i.cullFace(i.BACK):j===hp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),T=j}function Ie(j){j!==N&&(G&&i.lineWidth(j),N=j)}function nt(j,Fe,le){j?(oe(i.POLYGON_OFFSET_FILL),(L!==Fe||U!==le)&&(i.polygonOffset(Fe,le),L=Fe,U=le)):me(i.POLYGON_OFFSET_FILL)}function K(j){j?oe(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function R(j){j===void 0&&(j=i.TEXTURE0+W-1),Y!==j&&(i.activeTexture(j),Y=j)}function w(j,Fe,le){le===void 0&&(Y===null?le=i.TEXTURE0+W-1:le=Y);let ye=$[le];ye===void 0&&(ye={type:void 0,texture:void 0},$[le]=ye),(ye.type!==j||ye.texture!==Fe)&&(Y!==le&&(i.activeTexture(le),Y=le),i.bindTexture(j,Fe||ue[j]),ye.type=j,ye.texture=Fe)}function X(){const j=$[Y];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function se(){try{i.compressedTexImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ke(){try{i.texSubImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function we(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ot(){try{i.texStorage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ae(){try{i.texStorage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function qe(){try{i.texImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function at(){try{i.texImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ut(j){Ne.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),Ne.copy(j))}function Je(j){H.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),H.copy(j))}function Et(j,Fe){let le=c.get(Fe);le===void 0&&(le=new WeakMap,c.set(Fe,le));let ye=le.get(j);ye===void 0&&(ye=i.getUniformBlockIndex(Fe,j.name),le.set(j,ye))}function ft(j,Fe){const ye=c.get(Fe).get(j);l.get(Fe)!==ye&&(i.uniformBlockBinding(Fe,ye,j.__bindingPointIndex),l.set(Fe,ye))}function St(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Y=null,$={},h={},d=new WeakMap,p=[],g=null,M=!1,m=null,f=null,_=null,b=null,x=null,C=null,S=null,E=new Ce(0,0,0),A=0,y=!1,v=null,T=null,N=null,L=null,U=null,Ne.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:me,bindFramebuffer:De,drawBuffers:Ee,useProgram:Oe,setBlending:O,setMaterial:Qe,setFlipSided:be,setCullFace:Ge,setLineWidth:Ie,setPolygonOffset:nt,setScissorTest:K,activeTexture:R,bindTexture:w,unbindTexture:X,compressedTexImage2D:ne,compressedTexImage3D:se,texImage2D:qe,texImage3D:at,updateUBOMapping:Et,uniformBlockBinding:ft,texStorage2D:ot,texStorage3D:Ae,texSubImage2D:re,texSubImage3D:ke,compressedTexSubImage2D:we,compressedTexSubImage3D:Ue,scissor:ut,viewport:Je,reset:St}}function zh(i,e,t,n){const s=t1(n);switch(t){case Bf:return i*e;case Vf:return i*e;case Hf:return i*e*2;case Ia:return i*e/s.components*s.byteLength;case tu:return i*e/s.components*s.byteLength;case Wf:return i*e*2/s.components*s.byteLength;case nu:return i*e*2/s.components*s.byteLength;case Gf:return i*e*3/s.components*s.byteLength;case oi:return i*e*4/s.components*s.byteLength;case iu:return i*e*4/s.components*s.byteLength;case pa:case ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ga:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zl:case Ql:return Math.max(i,16)*Math.max(e,8)/4;case Kl:case Jl:return Math.max(i,8)*Math.max(e,8)/2;case ec:case tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case cc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case uc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case hc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case fc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case pc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xa:case vc:case xc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xf:case _c:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Mc:case yc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function t1(i){switch(i){case Ni:case kf:return{byteLength:1,components:1};case ho:case Ff:case ai:return{byteLength:2,components:1};case Qc:case eu:return{byteLength:2,components:4};case Os:case Jc:case bi:return{byteLength:4,components:1};case Of:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function n1(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return p?new OffscreenCanvas(R,w):Ea("canvas")}function M(R,w,X){let ne=1;const se=K(R);if((se.width>X||se.height>X)&&(ne=X/Math.max(se.width,se.height)),ne<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const re=Math.floor(ne*se.width),ke=Math.floor(ne*se.height);h===void 0&&(h=g(re,ke));const we=w?g(re,ke):h;return we.width=re,we.height=ke,we.getContext("2d").drawImage(R,0,0,re,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+re+"x"+ke+")."),we}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){i.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(R,w,X,ne,se=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let re=w;if(w===i.RED&&(X===i.FLOAT&&(re=i.R32F),X===i.HALF_FLOAT&&(re=i.R16F),X===i.UNSIGNED_BYTE&&(re=i.R8)),w===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.R8UI),X===i.UNSIGNED_SHORT&&(re=i.R16UI),X===i.UNSIGNED_INT&&(re=i.R32UI),X===i.BYTE&&(re=i.R8I),X===i.SHORT&&(re=i.R16I),X===i.INT&&(re=i.R32I)),w===i.RG&&(X===i.FLOAT&&(re=i.RG32F),X===i.HALF_FLOAT&&(re=i.RG16F),X===i.UNSIGNED_BYTE&&(re=i.RG8)),w===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.RG8UI),X===i.UNSIGNED_SHORT&&(re=i.RG16UI),X===i.UNSIGNED_INT&&(re=i.RG32UI),X===i.BYTE&&(re=i.RG8I),X===i.SHORT&&(re=i.RG16I),X===i.INT&&(re=i.RG32I)),w===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.RGB8UI),X===i.UNSIGNED_SHORT&&(re=i.RGB16UI),X===i.UNSIGNED_INT&&(re=i.RGB32UI),X===i.BYTE&&(re=i.RGB8I),X===i.SHORT&&(re=i.RGB16I),X===i.INT&&(re=i.RGB32I)),w===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),X===i.UNSIGNED_INT&&(re=i.RGBA32UI),X===i.BYTE&&(re=i.RGBA8I),X===i.SHORT&&(re=i.RGBA16I),X===i.INT&&(re=i.RGBA32I)),w===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),w===i.RGBA){const ke=se?Ua:It.getTransfer(ne);X===i.FLOAT&&(re=i.RGBA32F),X===i.HALF_FLOAT&&(re=i.RGBA16F),X===i.UNSIGNED_BYTE&&(re=ke===Ot?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function x(R,w){let X;return R?w===null||w===Os||w===Bs?X=i.DEPTH24_STENCIL8:w===bi?X=i.DEPTH32F_STENCIL8:w===ho&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Os||w===Bs?X=i.DEPTH_COMPONENT24:w===bi?X=i.DEPTH_COMPONENT32F:w===ho&&(X=i.DEPTH_COMPONENT16),X}function C(R,w){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==An&&R.minFilter!==Ii?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function S(R){const w=R.target;w.removeEventListener("dispose",S),A(w),w.isVideoTexture&&u.delete(w)}function E(R){const w=R.target;w.removeEventListener("dispose",E),v(w)}function A(R){const w=n.get(R);if(w.__webglInit===void 0)return;const X=R.source,ne=d.get(X);if(ne){const se=ne[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&y(R),Object.keys(ne).length===0&&d.delete(X)}n.remove(R)}function y(R){const w=n.get(R);i.deleteTexture(w.__webglTexture);const X=R.source,ne=d.get(X);delete ne[w.__cacheKey],o.memory.textures--}function v(R){const w=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(w.__webglFramebuffer[ne]))for(let se=0;se<w.__webglFramebuffer[ne].length;se++)i.deleteFramebuffer(w.__webglFramebuffer[ne][se]);else i.deleteFramebuffer(w.__webglFramebuffer[ne]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ne])}else{if(Array.isArray(w.__webglFramebuffer))for(let ne=0;ne<w.__webglFramebuffer.length;ne++)i.deleteFramebuffer(w.__webglFramebuffer[ne]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ne=0;ne<w.__webglColorRenderbuffer.length;ne++)w.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ne]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=R.textures;for(let ne=0,se=X.length;ne<se;ne++){const re=n.get(X[ne]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),n.remove(X[ne])}n.remove(R)}let T=0;function N(){T=0}function L(){const R=T;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),T+=1,R}function U(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function W(R,w){const X=n.get(R);if(R.isVideoTexture&&Ie(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(X,R,w);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+w)}function G(R,w){const X=n.get(R);if(R.version>0&&X.__version!==R.version){H(X,R,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+w)}function z(R,w){const X=n.get(R);if(R.version>0&&X.__version!==R.version){H(X,R,w);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+w)}function I(R,w){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Z(X,R,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+w)}const Y={[zi]:i.REPEAT,[Ds]:i.CLAMP_TO_EDGE,[jl]:i.MIRRORED_REPEAT},$={[An]:i.NEAREST,[Rp]:i.NEAREST_MIPMAP_NEAREST,[Ro]:i.NEAREST_MIPMAP_LINEAR,[Ii]:i.LINEAR,[Ya]:i.LINEAR_MIPMAP_NEAREST,[Is]:i.LINEAR_MIPMAP_LINEAR},ie={[Ip]:i.NEVER,[Op]:i.ALWAYS,[Up]:i.LESS,[qf]:i.LEQUAL,[zp]:i.EQUAL,[Fp]:i.GEQUAL,[Np]:i.GREATER,[kp]:i.NOTEQUAL};function ge(R,w){if(w.type===bi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ii||w.magFilter===Ya||w.magFilter===Ro||w.magFilter===Is||w.minFilter===Ii||w.minFilter===Ya||w.minFilter===Ro||w.minFilter===Is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Y[w.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Y[w.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Y[w.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,$[w.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,$[w.minFilter]),w.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ie[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===An||w.minFilter!==Ro&&w.minFilter!==Is||w.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ne(R,w){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",S));const ne=w.source;let se=d.get(ne);se===void 0&&(se={},d.set(ne,se));const re=U(w);if(re!==R.__cacheKey){se[re]===void 0&&(se[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),se[re].usedTimes++;const ke=se[R.__cacheKey];ke!==void 0&&(se[R.__cacheKey].usedTimes--,ke.usedTimes===0&&y(w)),R.__cacheKey=re,R.__webglTexture=se[re].texture}return X}function H(R,w,X){let ne=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ne=i.TEXTURE_3D);const se=Ne(R,w),re=w.source;t.bindTexture(ne,R.__webglTexture,i.TEXTURE0+X);const ke=n.get(re);if(re.version!==ke.__version||se===!0){t.activeTexture(i.TEXTURE0+X);const we=It.getPrimaries(It.workingColorSpace),Ue=w.colorSpace===us?null:It.getPrimaries(w.colorSpace),ot=w.colorSpace===us||we===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let Ae=M(w.image,!1,s.maxTextureSize);Ae=nt(w,Ae);const qe=r.convert(w.format,w.colorSpace),at=r.convert(w.type);let ut=b(w.internalFormat,qe,at,w.colorSpace,w.isVideoTexture);ge(ne,w);let Je;const Et=w.mipmaps,ft=w.isVideoTexture!==!0,St=ke.__version===void 0||se===!0,j=re.dataReady,Fe=C(w,Ae);if(w.isDepthTexture)ut=x(w.format===Gs,w.type),St&&(ft?t.texStorage2D(i.TEXTURE_2D,1,ut,Ae.width,Ae.height):t.texImage2D(i.TEXTURE_2D,0,ut,Ae.width,Ae.height,0,qe,at,null));else if(w.isDataTexture)if(Et.length>0){ft&&St&&t.texStorage2D(i.TEXTURE_2D,Fe,ut,Et[0].width,Et[0].height);for(let le=0,ye=Et.length;le<ye;le++)Je=Et[le],ft?j&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Je.width,Je.height,qe,at,Je.data):t.texImage2D(i.TEXTURE_2D,le,ut,Je.width,Je.height,0,qe,at,Je.data);w.generateMipmaps=!1}else ft?(St&&t.texStorage2D(i.TEXTURE_2D,Fe,ut,Ae.width,Ae.height),j&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae.width,Ae.height,qe,at,Ae.data)):t.texImage2D(i.TEXTURE_2D,0,ut,Ae.width,Ae.height,0,qe,at,Ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ft&&St&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,ut,Et[0].width,Et[0].height,Ae.depth);for(let le=0,ye=Et.length;le<ye;le++)if(Je=Et[le],w.format!==oi)if(qe!==null)if(ft){if(j)if(w.layerUpdates.size>0){const He=zh(Je.width,Je.height,w.format,w.type);for(const We of w.layerUpdates){const dt=Je.data.subarray(We*He/Je.data.BYTES_PER_ELEMENT,(We+1)*He/Je.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,We,Je.width,Je.height,1,qe,dt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Je.width,Je.height,Ae.depth,qe,Je.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,ut,Je.width,Je.height,Ae.depth,0,Je.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?j&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Je.width,Je.height,Ae.depth,qe,at,Je.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,ut,Je.width,Je.height,Ae.depth,0,qe,at,Je.data)}else{ft&&St&&t.texStorage2D(i.TEXTURE_2D,Fe,ut,Et[0].width,Et[0].height);for(let le=0,ye=Et.length;le<ye;le++)Je=Et[le],w.format!==oi?qe!==null?ft?j&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,Je.width,Je.height,qe,Je.data):t.compressedTexImage2D(i.TEXTURE_2D,le,ut,Je.width,Je.height,0,Je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?j&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Je.width,Je.height,qe,at,Je.data):t.texImage2D(i.TEXTURE_2D,le,ut,Je.width,Je.height,0,qe,at,Je.data)}else if(w.isDataArrayTexture)if(ft){if(St&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,ut,Ae.width,Ae.height,Ae.depth),j)if(w.layerUpdates.size>0){const le=zh(Ae.width,Ae.height,w.format,w.type);for(const ye of w.layerUpdates){const He=Ae.data.subarray(ye*le/Ae.data.BYTES_PER_ELEMENT,(ye+1)*le/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ye,Ae.width,Ae.height,1,qe,at,He)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,qe,at,Ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,Ae.width,Ae.height,Ae.depth,0,qe,at,Ae.data);else if(w.isData3DTexture)ft?(St&&t.texStorage3D(i.TEXTURE_3D,Fe,ut,Ae.width,Ae.height,Ae.depth),j&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,qe,at,Ae.data)):t.texImage3D(i.TEXTURE_3D,0,ut,Ae.width,Ae.height,Ae.depth,0,qe,at,Ae.data);else if(w.isFramebufferTexture){if(St)if(ft)t.texStorage2D(i.TEXTURE_2D,Fe,ut,Ae.width,Ae.height);else{let le=Ae.width,ye=Ae.height;for(let He=0;He<Fe;He++)t.texImage2D(i.TEXTURE_2D,He,ut,le,ye,0,qe,at,null),le>>=1,ye>>=1}}else if(Et.length>0){if(ft&&St){const le=K(Et[0]);t.texStorage2D(i.TEXTURE_2D,Fe,ut,le.width,le.height)}for(let le=0,ye=Et.length;le<ye;le++)Je=Et[le],ft?j&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,qe,at,Je):t.texImage2D(i.TEXTURE_2D,le,ut,qe,at,Je);w.generateMipmaps=!1}else if(ft){if(St){const le=K(Ae);t.texStorage2D(i.TEXTURE_2D,Fe,ut,le.width,le.height)}j&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,qe,at,Ae)}else t.texImage2D(i.TEXTURE_2D,0,ut,qe,at,Ae);m(w)&&f(ne),ke.__version=re.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Z(R,w,X){if(w.image.length!==6)return;const ne=Ne(R,w),se=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+X);const re=n.get(se);if(se.version!==re.__version||ne===!0){t.activeTexture(i.TEXTURE0+X);const ke=It.getPrimaries(It.workingColorSpace),we=w.colorSpace===us?null:It.getPrimaries(w.colorSpace),Ue=w.colorSpace===us||ke===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ot=w.isCompressedTexture||w.image[0].isCompressedTexture,Ae=w.image[0]&&w.image[0].isDataTexture,qe=[];for(let ye=0;ye<6;ye++)!ot&&!Ae?qe[ye]=M(w.image[ye],!0,s.maxCubemapSize):qe[ye]=Ae?w.image[ye].image:w.image[ye],qe[ye]=nt(w,qe[ye]);const at=qe[0],ut=r.convert(w.format,w.colorSpace),Je=r.convert(w.type),Et=b(w.internalFormat,ut,Je,w.colorSpace),ft=w.isVideoTexture!==!0,St=re.__version===void 0||ne===!0,j=se.dataReady;let Fe=C(w,at);ge(i.TEXTURE_CUBE_MAP,w);let le;if(ot){ft&&St&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,Et,at.width,at.height);for(let ye=0;ye<6;ye++){le=qe[ye].mipmaps;for(let He=0;He<le.length;He++){const We=le[He];w.format!==oi?ut!==null?ft?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He,0,0,We.width,We.height,ut,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He,Et,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He,0,0,We.width,We.height,ut,Je,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He,Et,We.width,We.height,0,ut,Je,We.data)}}}else{if(le=w.mipmaps,ft&&St){le.length>0&&Fe++;const ye=K(qe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,Et,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Ae){ft?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,qe[ye].width,qe[ye].height,ut,Je,qe[ye].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Et,qe[ye].width,qe[ye].height,0,ut,Je,qe[ye].data);for(let He=0;He<le.length;He++){const dt=le[He].image[ye].image;ft?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He+1,0,0,dt.width,dt.height,ut,Je,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He+1,Et,dt.width,dt.height,0,ut,Je,dt.data)}}else{ft?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ut,Je,qe[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Et,ut,Je,qe[ye]);for(let He=0;He<le.length;He++){const We=le[He];ft?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He+1,0,0,ut,Je,We.image[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He+1,Et,ut,Je,We.image[ye])}}}m(w)&&f(i.TEXTURE_CUBE_MAP),re.__version=se.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ue(R,w,X,ne,se,re){const ke=r.convert(X.format,X.colorSpace),we=r.convert(X.type),Ue=b(X.internalFormat,ke,we,X.colorSpace),ot=n.get(w),Ae=n.get(X);if(Ae.__renderTarget=w,!ot.__hasExternalTextures){const qe=Math.max(1,w.width>>re),at=Math.max(1,w.height>>re);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,re,Ue,qe,at,w.depth,0,ke,we,null):t.texImage2D(se,re,Ue,qe,at,0,ke,we,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ge(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,se,Ae.__webglTexture,0,be(w)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,se,Ae.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(R,w,X){if(i.bindRenderbuffer(i.RENDERBUFFER,R),w.depthBuffer){const ne=w.depthTexture,se=ne&&ne.isDepthTexture?ne.type:null,re=x(w.stencilBuffer,se),ke=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=be(w);Ge(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,re,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,re,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,re,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ke,i.RENDERBUFFER,R)}else{const ne=w.textures;for(let se=0;se<ne.length;se++){const re=ne[se],ke=r.convert(re.format,re.colorSpace),we=r.convert(re.type),Ue=b(re.internalFormat,ke,we,re.colorSpace),ot=be(w);X&&Ge(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Ue,w.width,w.height):Ge(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,Ue,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ue,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(w.depthTexture);ne.__renderTarget=w,(!ne.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),W(w.depthTexture,0);const se=ne.__webglTexture,re=be(w);if(w.depthTexture.format===xr)Ge(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(w.depthTexture.format===Gs)Ge(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function De(R){const w=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const ne=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ne){const se=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ne.removeEventListener("dispose",se)};ne.addEventListener("dispose",se),w.__depthDisposeCallback=se}w.__boundDepthTexture=ne}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");me(w.__webglFramebuffer,R)}else if(X){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]===void 0)w.__webglDepthbuffer[ne]=i.createRenderbuffer(),oe(w.__webglDepthbuffer[ne],R,!1);else{const se=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,re)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),oe(w.__webglDepthbuffer,R,!1);else{const ne=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(R,w,X){const ne=n.get(R);w!==void 0&&ue(ne.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&De(R)}function Oe(R){const w=R.texture,X=n.get(R),ne=n.get(w);R.addEventListener("dispose",E);const se=R.textures,re=R.isWebGLCubeRenderTarget===!0,ke=se.length>1;if(ke||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=w.version,o.memory.textures++),re){X.__webglFramebuffer=[];for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[we]=[];for(let Ue=0;Ue<w.mipmaps.length;Ue++)X.__webglFramebuffer[we][Ue]=i.createFramebuffer()}else X.__webglFramebuffer[we]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let we=0;we<w.mipmaps.length;we++)X.__webglFramebuffer[we]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(ke)for(let we=0,Ue=se.length;we<Ue;we++){const ot=n.get(se[we]);ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Ge(R)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let we=0;we<se.length;we++){const Ue=se[we];X.__webglColorRenderbuffer[we]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[we]);const ot=r.convert(Ue.format,Ue.colorSpace),Ae=r.convert(Ue.type),qe=b(Ue.internalFormat,ot,Ae,Ue.colorSpace,R.isXRRenderTarget===!0),at=be(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,at,qe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,X.__webglColorRenderbuffer[we])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(X.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),ge(i.TEXTURE_CUBE_MAP,w);for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ue=0;Ue<w.mipmaps.length;Ue++)ue(X.__webglFramebuffer[we][Ue],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ue);else ue(X.__webglFramebuffer[we],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);m(w)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let we=0,Ue=se.length;we<Ue;we++){const ot=se[we],Ae=n.get(ot);t.bindTexture(i.TEXTURE_2D,Ae.__webglTexture),ge(i.TEXTURE_2D,ot),ue(X.__webglFramebuffer,R,ot,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,0),m(ot)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let we=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(we=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,ne.__webglTexture),ge(we,w),w.mipmaps&&w.mipmaps.length>0)for(let Ue=0;Ue<w.mipmaps.length;Ue++)ue(X.__webglFramebuffer[Ue],R,w,i.COLOR_ATTACHMENT0,we,Ue);else ue(X.__webglFramebuffer,R,w,i.COLOR_ATTACHMENT0,we,0);m(w)&&f(we),t.unbindTexture()}R.depthBuffer&&De(R)}function fe(R){const w=R.textures;for(let X=0,ne=w.length;X<ne;X++){const se=w[X];if(m(se)){const re=_(R),ke=n.get(se).__webglTexture;t.bindTexture(re,ke),f(re),t.unbindTexture()}}}const _e=[],O=[];function Qe(R){if(R.samples>0){if(Ge(R)===!1){const w=R.textures,X=R.width,ne=R.height;let se=i.COLOR_BUFFER_BIT;const re=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ke=n.get(R),we=w.length>1;if(we)for(let Ue=0;Ue<w.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Ue=0;Ue<w.length;Ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),we){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Ue]);const ot=n.get(w[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,X,ne,0,0,X,ne,se,i.NEAREST),l===!0&&(_e.length=0,O.length=0,_e.push(i.COLOR_ATTACHMENT0+Ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&(_e.push(re),O.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),we)for(let Ue=0;Ue<w.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Ue]);const ot=n.get(w[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,ot,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function be(R){return Math.min(s.maxSamples,R.samples)}function Ge(R){const w=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ie(R){const w=o.render.frame;u.get(R)!==w&&(u.set(R,w),R.update())}function nt(R,w){const X=R.colorSpace,ne=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==Nr&&X!==us&&(It.getTransfer(X)===Ot?(ne!==oi||se!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function K(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=G,this.setTexture3D=z,this.setTextureCube=I,this.rebindTextures=Ee,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Ge}function i1(i,e){function t(n,s=us){let r;const o=It.getTransfer(s);if(n===Ni)return i.UNSIGNED_BYTE;if(n===Qc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===eu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Of)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kf)return i.BYTE;if(n===Ff)return i.SHORT;if(n===ho)return i.UNSIGNED_SHORT;if(n===Jc)return i.INT;if(n===Os)return i.UNSIGNED_INT;if(n===bi)return i.FLOAT;if(n===ai)return i.HALF_FLOAT;if(n===Bf)return i.ALPHA;if(n===Gf)return i.RGB;if(n===oi)return i.RGBA;if(n===Vf)return i.LUMINANCE;if(n===Hf)return i.LUMINANCE_ALPHA;if(n===xr)return i.DEPTH_COMPONENT;if(n===Gs)return i.DEPTH_STENCIL;if(n===Ia)return i.RED;if(n===tu)return i.RED_INTEGER;if(n===Wf)return i.RG;if(n===nu)return i.RG_INTEGER;if(n===iu)return i.RGBA_INTEGER;if(n===pa||n===ma||n===ga||n===va)if(o===Ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Kl||n===Zl||n===Jl||n===Ql)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ql)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ec||n===tc||n===nc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ec||n===tc)return o===Ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===nc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===uc||n===hc||n===fc||n===dc||n===pc||n===mc||n===gc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ic)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ac)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xa||n===vc||n===xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===xa)return o===Ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xf||n===_c||n===Mc||n===yc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===xa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class s1 extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bt extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r1={type:"move"};class Ml{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,n),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(r1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const o1=`
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

}`;class l1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Un,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new rn({vertexShader:o1,fragmentShader:a1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c1 extends kr{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const M=new l1,m=t.getContextAttributes();let f=null,_=null;const b=[],x=[],C=new Re;let S=null;const E=new Qn;E.viewport=new Ht;const A=new Qn;A.viewport=new Ht;const y=[E,A],v=new s1;let T=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=b[H];return Z===void 0&&(Z=new Ml,b[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=b[H];return Z===void 0&&(Z=new Ml,b[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=b[H];return Z===void 0&&(Z=new Ml,b[H]=Z),Z.getHandSpace()};function L(H){const Z=x.indexOf(H.inputSource);if(Z===-1)return;const ue=b[Z];ue!==void 0&&(ue.update(H.inputSource,H.frame,c||o),ue.dispatchEvent({type:H.type,data:H.inputSource}))}function U(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",W);for(let H=0;H<b.length;H++){const Z=x[H];Z!==null&&(x[H]=null,b[H].disconnect(Z))}T=null,N=null,M.reset(),e.setRenderTarget(f),p=null,d=null,h=null,s=null,_=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",U),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Yn(p.framebufferWidth,p.framebufferHeight,{format:oi,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,ue=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=m.stencil?Gs:xr,ue=m.stencil?Bs:Os);const me={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(me),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Yn(d.textureWidth,d.textureHeight,{format:oi,type:Ni,depthTexture:new hu(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ne.setContext(s),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function W(H){for(let Z=0;Z<H.removed.length;Z++){const ue=H.removed[Z],oe=x.indexOf(ue);oe>=0&&(x[oe]=null,b[oe].disconnect(ue))}for(let Z=0;Z<H.added.length;Z++){const ue=H.added[Z];let oe=x.indexOf(ue);if(oe===-1){for(let De=0;De<b.length;De++)if(De>=x.length){x.push(ue),oe=De;break}else if(x[De]===null){x[De]=ue,oe=De;break}if(oe===-1)break}const me=b[oe];me&&me.connect(ue)}}const G=new V,z=new V;function I(H,Z,ue){G.setFromMatrixPosition(Z.matrixWorld),z.setFromMatrixPosition(ue.matrixWorld);const oe=G.distanceTo(z),me=Z.projectionMatrix.elements,De=ue.projectionMatrix.elements,Ee=me[14]/(me[10]-1),Oe=me[14]/(me[10]+1),fe=(me[9]+1)/me[5],_e=(me[9]-1)/me[5],O=(me[8]-1)/me[0],Qe=(De[8]+1)/De[0],be=Ee*O,Ge=Ee*Qe,Ie=oe/(-O+Qe),nt=Ie*-O;if(Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(nt),H.translateZ(Ie),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),me[10]===-1)H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const K=Ee+Ie,R=Oe+Ie,w=be-nt,X=Ge+(oe-nt),ne=fe*Oe/R*K,se=_e*Oe/R*K;H.projectionMatrix.makePerspective(w,X,ne,se,K,R),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Y(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let Z=H.near,ue=H.far;M.texture!==null&&(M.depthNear>0&&(Z=M.depthNear),M.depthFar>0&&(ue=M.depthFar)),v.near=A.near=E.near=Z,v.far=A.far=E.far=ue,(T!==v.near||N!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,N=v.far),E.layers.mask=H.layers.mask|2,A.layers.mask=H.layers.mask|4,v.layers.mask=E.layers.mask|A.layers.mask;const oe=H.parent,me=v.cameras;Y(v,oe);for(let De=0;De<me.length;De++)Y(me[De],oe);me.length===2?I(v,E,A):v.projectionMatrix.copy(E.projectionMatrix),$(H,v,oe)};function $(H,Z,ue){ue===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(ue.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=fo*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(v)};let ie=null;function ge(H,Z){if(u=Z.getViewerPose(c||o),g=Z,u!==null){const ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let oe=!1;ue.length!==v.cameras.length&&(v.cameras.length=0,oe=!0);for(let De=0;De<ue.length;De++){const Ee=ue[De];let Oe=null;if(p!==null)Oe=p.getViewport(Ee);else{const _e=h.getViewSubImage(d,Ee);Oe=_e.viewport,De===0&&(e.setRenderTargetTextures(_,_e.colorTexture,d.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(_))}let fe=y[De];fe===void 0&&(fe=new Qn,fe.layers.enable(De),fe.viewport=new Ht,y[De]=fe),fe.matrix.fromArray(Ee.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Ee.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),De===0&&(v.matrix.copy(fe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),oe===!0&&v.cameras.push(fe)}const me=s.enabledFeatures;if(me&&me.includes("depth-sensing")){const De=h.getDepthInformation(ue[0]);De&&De.isValid&&De.texture&&M.init(e,De,s.renderState)}}for(let ue=0;ue<b.length;ue++){const oe=x[ue],me=b[ue];oe!==null&&me!==void 0&&me.update(oe,Z,c||o)}ie&&ie(H,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ne=new nd;Ne.setAnimationLoop(ge),this.setAnimationLoop=function(H){ie=H},this.dispose=function(){}}}const Ts=new ki,u1=new Ut;function h1(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Qf(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,_,b,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Hn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Hn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f),b=_.envMap,x=_.envMapRotation;b&&(m.envMap.value=b,Ts.copy(x),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),m.envMapRotation.value.setFromMatrix4(u1.makeRotationFromEuler(Ts)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Hn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function f1(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){const x=b.program;n.uniformBlockBinding(_,x)}function c(_,b){let x=s[_.id];x===void 0&&(g(_),x=u(_),s[_.id]=x,_.addEventListener("dispose",m));const C=b.program;n.updateUBOMapping(_,C);const S=e.render.frame;r[_.id]!==S&&(d(_),r[_.id]=S)}function u(_){const b=h();_.__bindingPointIndex=b;const x=i.createBuffer(),C=_.__size,S=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,C,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,x),x}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const b=s[_.id],x=_.uniforms,C=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let S=0,E=x.length;S<E;S++){const A=Array.isArray(x[S])?x[S]:[x[S]];for(let y=0,v=A.length;y<v;y++){const T=A[y];if(p(T,S,y,C)===!0){const N=T.__offset,L=Array.isArray(T.value)?T.value:[T.value];let U=0;for(let W=0;W<L.length;W++){const G=L[W],z=M(G);typeof G=="number"||typeof G=="boolean"?(T.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,N+U,T.__data)):G.isMatrix3?(T.__data[0]=G.elements[0],T.__data[1]=G.elements[1],T.__data[2]=G.elements[2],T.__data[3]=0,T.__data[4]=G.elements[3],T.__data[5]=G.elements[4],T.__data[6]=G.elements[5],T.__data[7]=0,T.__data[8]=G.elements[6],T.__data[9]=G.elements[7],T.__data[10]=G.elements[8],T.__data[11]=0):(G.toArray(T.__data,U),U+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,b,x,C){const S=_.value,E=b+"_"+x;if(C[E]===void 0)return typeof S=="number"||typeof S=="boolean"?C[E]=S:C[E]=S.clone(),!0;{const A=C[E];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return C[E]=S,!0}else if(A.equals(S)===!1)return A.copy(S),!0}return!1}function g(_){const b=_.uniforms;let x=0;const C=16;for(let E=0,A=b.length;E<A;E++){const y=Array.isArray(b[E])?b[E]:[b[E]];for(let v=0,T=y.length;v<T;v++){const N=y[v],L=Array.isArray(N.value)?N.value:[N.value];for(let U=0,W=L.length;U<W;U++){const G=L[U],z=M(G),I=x%C,Y=I%z.boundary,$=I+Y;x+=Y,$!==0&&C-$<z.storage&&(x+=C-$),N.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=z.storage}}}const S=x%C;return S>0&&(x+=C-S),_.__size=x,_.__cache={},this}function M(_){const b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),b}function m(_){const b=_.target;b.removeEventListener("dispose",m);const x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class d1{constructor(e={}){const{canvas:t=n0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),M=new Int32Array(4);let m=null,f=null;const _=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tn,this.toneMapping=ps,this.toneMappingExposure=1;const x=this;let C=!1,S=0,E=0,A=null,y=-1,v=null;const T=new Ht,N=new Ht;let L=null;const U=new Ce(0);let W=0,G=t.width,z=t.height,I=1,Y=null,$=null;const ie=new Ht(0,0,G,z),ge=new Ht(0,0,G,z);let Ne=!1;const H=new lu;let Z=!1,ue=!1;const oe=new Ut,me=new Ut,De=new V,Ee=new Ht,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function _e(){return A===null?I:1}let O=n;function Qe(P,Q){return t.getContext(P,Q)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jc}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",We,!1),O===null){const Q="webgl2";if(O=Qe(Q,P),O===null)throw Qe(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let be,Ge,Ie,nt,K,R,w,X,ne,se,re,ke,we,Ue,ot,Ae,qe,at,ut,Je,Et,ft,St,j;function Fe(){be=new xv(O),be.init(),ft=new i1(O,be),Ge=new fv(O,be,e,ft),Ie=new e1(O,be),Ge.reverseDepthBuffer&&d&&Ie.buffers.depth.setReversed(!0),nt=new yv(O),K=new Ox,R=new n1(O,be,Ie,K,Ge,ft,nt),w=new pv(x),X=new vv(x),ne=new C0(O),St=new uv(O,ne),se=new _v(O,ne,nt,St),re=new Sv(O,se,ne,nt),ut=new bv(O,Ge,R),Ae=new dv(K),ke=new Fx(x,w,X,be,Ge,St,Ae),we=new h1(x,K),Ue=new Gx,ot=new Yx(be),at=new cv(x,w,X,Ie,re,p,l),qe=new Jx(x,re,Ge),j=new f1(O,nt,Ge,Ie),Je=new hv(O,be,nt),Et=new Mv(O,be,nt),nt.programs=ke.programs,x.capabilities=Ge,x.extensions=be,x.properties=K,x.renderLists=Ue,x.shadowMap=qe,x.state=Ie,x.info=nt}Fe();const le=new c1(x,O);this.xr=le,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const P=be.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=be.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(P){P!==void 0&&(I=P,this.setSize(G,z,!1))},this.getSize=function(P){return P.set(G,z)},this.setSize=function(P,Q,ae=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=P,z=Q,t.width=Math.floor(P*I),t.height=Math.floor(Q*I),ae===!0&&(t.style.width=P+"px",t.style.height=Q+"px"),this.setViewport(0,0,P,Q)},this.getDrawingBufferSize=function(P){return P.set(G*I,z*I).floor()},this.setDrawingBufferSize=function(P,Q,ae){G=P,z=Q,I=ae,t.width=Math.floor(P*ae),t.height=Math.floor(Q*ae),this.setViewport(0,0,P,Q)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(ie)},this.setViewport=function(P,Q,ae,ce){P.isVector4?ie.set(P.x,P.y,P.z,P.w):ie.set(P,Q,ae,ce),Ie.viewport(T.copy(ie).multiplyScalar(I).round())},this.getScissor=function(P){return P.copy(ge)},this.setScissor=function(P,Q,ae,ce){P.isVector4?ge.set(P.x,P.y,P.z,P.w):ge.set(P,Q,ae,ce),Ie.scissor(N.copy(ge).multiplyScalar(I).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(P){Ie.setScissorTest(Ne=P)},this.setOpaqueSort=function(P){Y=P},this.setTransparentSort=function(P){$=P},this.getClearColor=function(P){return P.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(P=!0,Q=!0,ae=!0){let ce=0;if(P){let J=!1;if(A!==null){const ze=A.texture.format;J=ze===iu||ze===nu||ze===tu}if(J){const ze=A.texture.type,Ze=ze===Ni||ze===Os||ze===ho||ze===Bs||ze===Qc||ze===eu,it=at.getClearColor(),st=at.getClearAlpha(),vt=it.r,k=it.g,F=it.b;Ze?(g[0]=vt,g[1]=k,g[2]=F,g[3]=st,O.clearBufferuiv(O.COLOR,0,g)):(M[0]=vt,M[1]=k,M[2]=F,M[3]=st,O.clearBufferiv(O.COLOR,0,M))}else ce|=O.COLOR_BUFFER_BIT}Q&&(ce|=O.DEPTH_BUFFER_BIT),ae&&(ce|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",We,!1),Ue.dispose(),ot.dispose(),K.dispose(),w.dispose(),X.dispose(),re.dispose(),St.dispose(),j.dispose(),ke.dispose(),le.dispose(),le.removeEventListener("sessionstart",ci),le.removeEventListener("sessionend",Yt),B.stop()};function ye(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function He(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const P=nt.autoReset,Q=qe.enabled,ae=qe.autoUpdate,ce=qe.needsUpdate,J=qe.type;Fe(),nt.autoReset=P,qe.enabled=Q,qe.autoUpdate=ae,qe.needsUpdate=ce,qe.type=J}function We(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function dt(P){const Q=P.target;Q.removeEventListener("dispose",dt),Bt(Q)}function Bt(P){Kt(P),K.remove(P)}function Kt(P){const Q=K.get(P).programs;Q!==void 0&&(Q.forEach(function(ae){ke.releaseProgram(ae)}),P.isShaderMaterial&&ke.releaseShaderCache(P))}this.renderBufferDirect=function(P,Q,ae,ce,J,ze){Q===null&&(Q=Oe);const Ze=J.isMesh&&J.matrixWorld.determinant()<0,it=Gt(P,Q,ae,ce,J);Ie.setMaterial(ce,Ze);let st=ae.index,vt=1;if(ce.wireframe===!0){if(st=se.getWireframeAttribute(ae),st===void 0)return;vt=2}const k=ae.drawRange,F=ae.attributes.position;let ee=k.start*vt,pe=(k.start+k.count)*vt;ze!==null&&(ee=Math.max(ee,ze.start*vt),pe=Math.min(pe,(ze.start+ze.count)*vt)),st!==null?(ee=Math.max(ee,0),pe=Math.min(pe,st.count)):F!=null&&(ee=Math.max(ee,0),pe=Math.min(pe,F.count));const Se=pe-ee;if(Se<0||Se===1/0)return;St.setup(J,ce,it,ae,st);let Pe,Te=Je;if(st!==null&&(Pe=ne.get(st),Te=Et,Te.setIndex(Pe)),J.isMesh)ce.wireframe===!0?(Ie.setLineWidth(ce.wireframeLinewidth*_e()),Te.setMode(O.LINES)):Te.setMode(O.TRIANGLES);else if(J.isLine){let te=ce.linewidth;te===void 0&&(te=1),Ie.setLineWidth(te*_e()),J.isLineSegments?Te.setMode(O.LINES):J.isLineLoop?Te.setMode(O.LINE_LOOP):Te.setMode(O.LINE_STRIP)}else J.isPoints?Te.setMode(O.POINTS):J.isSprite&&Te.setMode(O.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Te.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))Te.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const te=J._multiDrawStarts,$e=J._multiDrawCounts,Xe=J._multiDrawCount,pt=st?ne.get(st).bytesPerElement:1,Rt=K.get(ce).currentProgram.getUniforms();for(let Dt=0;Dt<Xe;Dt++)Rt.setValue(O,"_gl_DrawID",Dt),Te.render(te[Dt]/pt,$e[Dt])}else if(J.isInstancedMesh)Te.renderInstances(ee,Se,J.count);else if(ae.isInstancedBufferGeometry){const te=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,$e=Math.min(ae.instanceCount,te);Te.renderInstances(ee,Se,$e)}else Te.render(ee,Se)};function At(P,Q,ae){P.transparent===!0&&P.side===hn&&P.forceSinglePass===!1?(P.side=Hn,P.needsUpdate=!0,et(P,Q,ae),P.side=vs,P.needsUpdate=!0,et(P,Q,ae),P.side=hn):et(P,Q,ae)}this.compile=function(P,Q,ae=null){ae===null&&(ae=P),f=ot.get(ae),f.init(Q),b.push(f),ae.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(f.pushLight(J),J.castShadow&&f.pushShadow(J))}),P!==ae&&P.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(f.pushLight(J),J.castShadow&&f.pushShadow(J))}),f.setupLights();const ce=new Set;return P.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const ze=J.material;if(ze)if(Array.isArray(ze))for(let Ze=0;Ze<ze.length;Ze++){const it=ze[Ze];At(it,ae,J),ce.add(it)}else At(ze,ae,J),ce.add(ze)}),b.pop(),f=null,ce},this.compileAsync=function(P,Q,ae=null){const ce=this.compile(P,Q,ae);return new Promise(J=>{function ze(){if(ce.forEach(function(Ze){K.get(Ze).currentProgram.isReady()&&ce.delete(Ze)}),ce.size===0){J(P);return}setTimeout(ze,10)}be.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let pn=null;function Nn(P){pn&&pn(P)}function ci(){B.stop()}function Yt(){B.start()}const B=new nd;B.setAnimationLoop(Nn),typeof self<"u"&&B.setContext(self),this.setAnimationLoop=function(P){pn=P,le.setAnimationLoop(P),P===null?B.stop():B.start()},le.addEventListener("sessionstart",ci),le.addEventListener("sessionend",Yt),this.render=function(P,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(Q),Q=le.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,Q,A),f=ot.get(P,b.length),f.init(Q),b.push(f),me.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),H.setFromProjectionMatrix(me),ue=this.localClippingEnabled,Z=Ae.init(this.clippingPlanes,ue),m=Ue.get(P,_.length),m.init(),_.push(m),le.enabled===!0&&le.isPresenting===!0){const ze=x.xr.getDepthSensingMesh();ze!==null&&Me(ze,Q,-1/0,x.sortObjects)}Me(P,Q,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Y,$),fe=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,fe&&at.addToRenderList(m,P),this.info.render.frame++,Z===!0&&Ae.beginShadows();const ae=f.state.shadowsArray;qe.render(ae,P,Q),Z===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=m.opaque,J=m.transmissive;if(f.setupLights(),Q.isArrayCamera){const ze=Q.cameras;if(J.length>0)for(let Ze=0,it=ze.length;Ze<it;Ze++){const st=ze[Ze];je(ce,J,P,st)}fe&&at.render(P);for(let Ze=0,it=ze.length;Ze<it;Ze++){const st=ze[Ze];he(m,P,st,st.viewport)}}else J.length>0&&je(ce,J,P,Q),fe&&at.render(P),he(m,P,Q);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),P.isScene===!0&&P.onAfterRender(x,P,Q),St.resetDefaultState(),y=-1,v=null,b.pop(),b.length>0?(f=b[b.length-1],Z===!0&&Ae.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Me(P,Q,ae,ce){if(P.visible===!1)return;if(P.layers.test(Q.layers)){if(P.isGroup)ae=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Q);else if(P.isLight)f.pushLight(P),P.castShadow&&f.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||H.intersectsSprite(P)){ce&&Ee.setFromMatrixPosition(P.matrixWorld).applyMatrix4(me);const Ze=re.update(P),it=P.material;it.visible&&m.push(P,Ze,it,ae,Ee.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||H.intersectsObject(P))){const Ze=re.update(P),it=P.material;if(ce&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ee.copy(P.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),Ee.copy(Ze.boundingSphere.center)),Ee.applyMatrix4(P.matrixWorld).applyMatrix4(me)),Array.isArray(it)){const st=Ze.groups;for(let vt=0,k=st.length;vt<k;vt++){const F=st[vt],ee=it[F.materialIndex];ee&&ee.visible&&m.push(P,Ze,ee,ae,Ee.z,F)}}else it.visible&&m.push(P,Ze,it,ae,Ee.z,null)}}const ze=P.children;for(let Ze=0,it=ze.length;Ze<it;Ze++)Me(ze[Ze],Q,ae,ce)}function he(P,Q,ae,ce){const J=P.opaque,ze=P.transmissive,Ze=P.transparent;f.setupLightsView(ae),Z===!0&&Ae.setGlobalState(x.clippingPlanes,ae),ce&&Ie.viewport(T.copy(ce)),J.length>0&&Ke(J,Q,ae),ze.length>0&&Ke(ze,Q,ae),Ze.length>0&&Ke(Ze,Q,ae),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function je(P,Q,ae,ce){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[ce.id]===void 0&&(f.state.transmissionRenderTarget[ce.id]=new Yn(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?ai:Ni,minFilter:Is,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace}));const ze=f.state.transmissionRenderTarget[ce.id],Ze=ce.viewport||T;ze.setSize(Ze.z,Ze.w);const it=x.getRenderTarget();x.setRenderTarget(ze),x.getClearColor(U),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),fe&&at.render(ae);const st=x.toneMapping;x.toneMapping=ps;const vt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),f.setupLightsView(ce),Z===!0&&Ae.setGlobalState(x.clippingPlanes,ce),Ke(P,ae,ce),R.updateMultisampleRenderTarget(ze),R.updateRenderTargetMipmap(ze),be.has("WEBGL_multisampled_render_to_texture")===!1){let k=!1;for(let F=0,ee=Q.length;F<ee;F++){const pe=Q[F],Se=pe.object,Pe=pe.geometry,Te=pe.material,te=pe.group;if(Te.side===hn&&Se.layers.test(ce.layers)){const $e=Te.side;Te.side=Hn,Te.needsUpdate=!0,Le(Se,ae,ce,Pe,Te,te),Te.side=$e,Te.needsUpdate=!0,k=!0}}k===!0&&(R.updateMultisampleRenderTarget(ze),R.updateRenderTargetMipmap(ze))}x.setRenderTarget(it),x.setClearColor(U,W),vt!==void 0&&(ce.viewport=vt),x.toneMapping=st}function Ke(P,Q,ae){const ce=Q.isScene===!0?Q.overrideMaterial:null;for(let J=0,ze=P.length;J<ze;J++){const Ze=P[J],it=Ze.object,st=Ze.geometry,vt=ce===null?Ze.material:ce,k=Ze.group;it.layers.test(ae.layers)&&Le(it,Q,ae,st,vt,k)}}function Le(P,Q,ae,ce,J,ze){P.onBeforeRender(x,Q,ae,ce,J,ze),P.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),J.onBeforeRender(x,Q,ae,ce,P,ze),J.transparent===!0&&J.side===hn&&J.forceSinglePass===!1?(J.side=Hn,J.needsUpdate=!0,x.renderBufferDirect(ae,Q,ce,J,P,ze),J.side=vs,J.needsUpdate=!0,x.renderBufferDirect(ae,Q,ce,J,P,ze),J.side=hn):x.renderBufferDirect(ae,Q,ce,J,P,ze),P.onAfterRender(x,Q,ae,ce,J,ze)}function et(P,Q,ae){Q.isScene!==!0&&(Q=Oe);const ce=K.get(P),J=f.state.lights,ze=f.state.shadowsArray,Ze=J.state.version,it=ke.getParameters(P,J.state,ze,Q,ae),st=ke.getProgramCacheKey(it);let vt=ce.programs;ce.environment=P.isMeshStandardMaterial?Q.environment:null,ce.fog=Q.fog,ce.envMap=(P.isMeshStandardMaterial?X:w).get(P.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&P.envMap===null?Q.environmentRotation:P.envMapRotation,vt===void 0&&(P.addEventListener("dispose",dt),vt=new Map,ce.programs=vt);let k=vt.get(st);if(k!==void 0){if(ce.currentProgram===k&&ce.lightsStateVersion===Ze)return mt(P,it),k}else it.uniforms=ke.getUniforms(P),P.onBeforeCompile(it,x),k=ke.acquireProgram(it,st),vt.set(st,k),ce.uniforms=it.uniforms;const F=ce.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(F.clippingPlanes=Ae.uniform),mt(P,it),ce.needsLights=Xn(P),ce.lightsStateVersion=Ze,ce.needsLights&&(F.ambientLightColor.value=J.state.ambient,F.lightProbe.value=J.state.probe,F.directionalLights.value=J.state.directional,F.directionalLightShadows.value=J.state.directionalShadow,F.spotLights.value=J.state.spot,F.spotLightShadows.value=J.state.spotShadow,F.rectAreaLights.value=J.state.rectArea,F.ltc_1.value=J.state.rectAreaLTC1,F.ltc_2.value=J.state.rectAreaLTC2,F.pointLights.value=J.state.point,F.pointLightShadows.value=J.state.pointShadow,F.hemisphereLights.value=J.state.hemi,F.directionalShadowMap.value=J.state.directionalShadowMap,F.directionalShadowMatrix.value=J.state.directionalShadowMatrix,F.spotShadowMap.value=J.state.spotShadowMap,F.spotLightMatrix.value=J.state.spotLightMatrix,F.spotLightMap.value=J.state.spotLightMap,F.pointShadowMap.value=J.state.pointShadowMap,F.pointShadowMatrix.value=J.state.pointShadowMatrix),ce.currentProgram=k,ce.uniformsList=null,k}function rt(P){if(P.uniformsList===null){const Q=P.currentProgram.getUniforms();P.uniformsList=_a.seqWithValue(Q.seq,P.uniforms)}return P.uniformsList}function mt(P,Q){const ae=K.get(P);ae.outputColorSpace=Q.outputColorSpace,ae.batching=Q.batching,ae.batchingColor=Q.batchingColor,ae.instancing=Q.instancing,ae.instancingColor=Q.instancingColor,ae.instancingMorph=Q.instancingMorph,ae.skinning=Q.skinning,ae.morphTargets=Q.morphTargets,ae.morphNormals=Q.morphNormals,ae.morphColors=Q.morphColors,ae.morphTargetsCount=Q.morphTargetsCount,ae.numClippingPlanes=Q.numClippingPlanes,ae.numIntersection=Q.numClipIntersection,ae.vertexAlphas=Q.vertexAlphas,ae.vertexTangents=Q.vertexTangents,ae.toneMapping=Q.toneMapping}function Gt(P,Q,ae,ce,J){Q.isScene!==!0&&(Q=Oe),R.resetTextureUnits();const ze=Q.fog,Ze=ce.isMeshStandardMaterial?Q.environment:null,it=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Nr,st=(ce.isMeshStandardMaterial?X:w).get(ce.envMap||Ze),vt=ce.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,k=!!ae.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),F=!!ae.morphAttributes.position,ee=!!ae.morphAttributes.normal,pe=!!ae.morphAttributes.color;let Se=ps;ce.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Se=x.toneMapping);const Pe=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Te=Pe!==void 0?Pe.length:0,te=K.get(ce),$e=f.state.lights;if(Z===!0&&(ue===!0||P!==v)){const Pn=P===v&&ce.id===y;Ae.setState(ce,P,Pn)}let Xe=!1;ce.version===te.__version?(te.needsLights&&te.lightsStateVersion!==$e.state.version||te.outputColorSpace!==it||J.isBatchedMesh&&te.batching===!1||!J.isBatchedMesh&&te.batching===!0||J.isBatchedMesh&&te.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&te.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&te.instancing===!1||!J.isInstancedMesh&&te.instancing===!0||J.isSkinnedMesh&&te.skinning===!1||!J.isSkinnedMesh&&te.skinning===!0||J.isInstancedMesh&&te.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&te.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&te.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&te.instancingMorph===!1&&J.morphTexture!==null||te.envMap!==st||ce.fog===!0&&te.fog!==ze||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Ae.numPlanes||te.numIntersection!==Ae.numIntersection)||te.vertexAlphas!==vt||te.vertexTangents!==k||te.morphTargets!==F||te.morphNormals!==ee||te.morphColors!==pe||te.toneMapping!==Se||te.morphTargetsCount!==Te)&&(Xe=!0):(Xe=!0,te.__version=ce.version);let pt=te.currentProgram;Xe===!0&&(pt=et(ce,Q,J));let Rt=!1,Dt=!1,Oi=!1;const Pt=pt.getUniforms(),Rn=te.uniforms;if(Ie.useProgram(pt.program)&&(Rt=!0,Dt=!0,Oi=!0),ce.id!==y&&(y=ce.id,Dt=!0),Rt||v!==P){Ie.buffers.depth.getReversed()?(oe.copy(P.projectionMatrix),s0(oe),r0(oe),Pt.setValue(O,"projectionMatrix",oe)):Pt.setValue(O,"projectionMatrix",P.projectionMatrix),Pt.setValue(O,"viewMatrix",P.matrixWorldInverse);const $n=Pt.map.cameraPosition;$n!==void 0&&$n.setValue(O,De.setFromMatrixPosition(P.matrixWorld)),Ge.logarithmicDepthBuffer&&Pt.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Pt.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),v!==P&&(v=P,Dt=!0,Oi=!0)}if(J.isSkinnedMesh){Pt.setOptional(O,J,"bindMatrix"),Pt.setOptional(O,J,"bindMatrixInverse");const Pn=J.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),Pt.setValue(O,"boneTexture",Pn.boneTexture,R))}J.isBatchedMesh&&(Pt.setOptional(O,J,"batchingTexture"),Pt.setValue(O,"batchingTexture",J._matricesTexture,R),Pt.setOptional(O,J,"batchingIdTexture"),Pt.setValue(O,"batchingIdTexture",J._indirectTexture,R),Pt.setOptional(O,J,"batchingColorTexture"),J._colorsTexture!==null&&Pt.setValue(O,"batchingColorTexture",J._colorsTexture,R));const ui=ae.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&ut.update(J,ae,pt),(Dt||te.receiveShadow!==J.receiveShadow)&&(te.receiveShadow=J.receiveShadow,Pt.setValue(O,"receiveShadow",J.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(Rn.envMap.value=st,Rn.flipEnvMap.value=st.isCubeTexture&&st.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&Q.environment!==null&&(Rn.envMapIntensity.value=Q.environmentIntensity),Dt&&(Pt.setValue(O,"toneMappingExposure",x.toneMappingExposure),te.needsLights&&un(Rn,Oi),ze&&ce.fog===!0&&we.refreshFogUniforms(Rn,ze),we.refreshMaterialUniforms(Rn,ce,I,z,f.state.transmissionRenderTarget[P.id]),_a.upload(O,rt(te),Rn,R)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(_a.upload(O,rt(te),Rn,R),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Pt.setValue(O,"center",J.center),Pt.setValue(O,"modelViewMatrix",J.modelViewMatrix),Pt.setValue(O,"normalMatrix",J.normalMatrix),Pt.setValue(O,"modelMatrix",J.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const Pn=ce.uniformsGroups;for(let $n=0,jn=Pn.length;$n<jn;$n++){const ns=Pn[$n];j.update(ns,pt),j.bind(ns,pt)}}return pt}function un(P,Q){P.ambientLightColor.needsUpdate=Q,P.lightProbe.needsUpdate=Q,P.directionalLights.needsUpdate=Q,P.directionalLightShadows.needsUpdate=Q,P.pointLights.needsUpdate=Q,P.pointLightShadows.needsUpdate=Q,P.spotLights.needsUpdate=Q,P.spotLightShadows.needsUpdate=Q,P.rectAreaLights.needsUpdate=Q,P.hemisphereLights.needsUpdate=Q}function Xn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(P,Q,ae){K.get(P.texture).__webglTexture=Q,K.get(P.depthTexture).__webglTexture=ae;const ce=K.get(P);ce.__hasExternalTextures=!0,ce.__autoAllocateDepthBuffer=ae===void 0,ce.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,Q){const ae=K.get(P);ae.__webglFramebuffer=Q,ae.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(P,Q=0,ae=0){A=P,S=Q,E=ae;let ce=!0,J=null,ze=!1,Ze=!1;if(P){const st=K.get(P);if(st.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(O.FRAMEBUFFER,null),ce=!1;else if(st.__webglFramebuffer===void 0)R.setupRenderTarget(P);else if(st.__hasExternalTextures)R.rebindTextures(P,K.get(P.texture).__webglTexture,K.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const F=P.depthTexture;if(st.__boundDepthTexture!==F){if(F!==null&&K.has(F)&&(P.width!==F.image.width||P.height!==F.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(P)}}const vt=P.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(Ze=!0);const k=K.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(k[Q])?J=k[Q][ae]:J=k[Q],ze=!0):P.samples>0&&R.useMultisampledRTT(P)===!1?J=K.get(P).__webglMultisampledFramebuffer:Array.isArray(k)?J=k[ae]:J=k,T.copy(P.viewport),N.copy(P.scissor),L=P.scissorTest}else T.copy(ie).multiplyScalar(I).floor(),N.copy(ge).multiplyScalar(I).floor(),L=Ne;if(Ie.bindFramebuffer(O.FRAMEBUFFER,J)&&ce&&Ie.drawBuffers(P,J),Ie.viewport(T),Ie.scissor(N),Ie.setScissorTest(L),ze){const st=K.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Q,st.__webglTexture,ae)}else if(Ze){const st=K.get(P.texture),vt=Q||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,st.__webglTexture,ae||0,vt)}y=-1},this.readRenderTargetPixels=function(P,Q,ae,ce,J,ze,Ze){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=K.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ze!==void 0&&(it=it[Ze]),it){Ie.bindFramebuffer(O.FRAMEBUFFER,it);try{const st=P.texture,vt=st.format,k=st.type;if(!Ge.textureFormatReadable(vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(k)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=P.width-ce&&ae>=0&&ae<=P.height-J&&O.readPixels(Q,ae,ce,J,ft.convert(vt),ft.convert(k),ze)}finally{const st=A!==null?K.get(A).__webglFramebuffer:null;Ie.bindFramebuffer(O.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(P,Q,ae,ce,J,ze,Ze){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let it=K.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ze!==void 0&&(it=it[Ze]),it){const st=P.texture,vt=st.format,k=st.type;if(!Ge.textureFormatReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(k))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Q>=0&&Q<=P.width-ce&&ae>=0&&ae<=P.height-J){Ie.bindFramebuffer(O.FRAMEBUFFER,it);const F=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,F),O.bufferData(O.PIXEL_PACK_BUFFER,ze.byteLength,O.STREAM_READ),O.readPixels(Q,ae,ce,J,ft.convert(vt),ft.convert(k),0);const ee=A!==null?K.get(A).__webglFramebuffer:null;Ie.bindFramebuffer(O.FRAMEBUFFER,ee);const pe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await i0(O,pe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,F),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ze),O.deleteBuffer(F),O.deleteSync(pe),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,Q=null,ae=0){P.isTexture!==!0&&(Qr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Q=arguments[0]||null,P=arguments[1]);const ce=Math.pow(2,-ae),J=Math.floor(P.image.width*ce),ze=Math.floor(P.image.height*ce),Ze=Q!==null?Q.x:0,it=Q!==null?Q.y:0;R.setTexture2D(P,0),O.copyTexSubImage2D(O.TEXTURE_2D,ae,0,0,Ze,it,J,ze),Ie.unbindTexture()},this.copyTextureToTexture=function(P,Q,ae=null,ce=null,J=0){P.isTexture!==!0&&(Qr("WebGLRenderer: copyTextureToTexture function signature has changed."),ce=arguments[0]||null,P=arguments[1],Q=arguments[2],J=arguments[3]||0,ae=null);let ze,Ze,it,st,vt,k,F,ee,pe;const Se=P.isCompressedTexture?P.mipmaps[J]:P.image;ae!==null?(ze=ae.max.x-ae.min.x,Ze=ae.max.y-ae.min.y,it=ae.isBox3?ae.max.z-ae.min.z:1,st=ae.min.x,vt=ae.min.y,k=ae.isBox3?ae.min.z:0):(ze=Se.width,Ze=Se.height,it=Se.depth||1,st=0,vt=0,k=0),ce!==null?(F=ce.x,ee=ce.y,pe=ce.z):(F=0,ee=0,pe=0);const Pe=ft.convert(Q.format),Te=ft.convert(Q.type);let te;Q.isData3DTexture?(R.setTexture3D(Q,0),te=O.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(R.setTexture2DArray(Q,0),te=O.TEXTURE_2D_ARRAY):(R.setTexture2D(Q,0),te=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Q.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Q.unpackAlignment);const $e=O.getParameter(O.UNPACK_ROW_LENGTH),Xe=O.getParameter(O.UNPACK_IMAGE_HEIGHT),pt=O.getParameter(O.UNPACK_SKIP_PIXELS),Rt=O.getParameter(O.UNPACK_SKIP_ROWS),Dt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Se.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Se.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,st),O.pixelStorei(O.UNPACK_SKIP_ROWS,vt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,k);const Oi=P.isDataArrayTexture||P.isData3DTexture,Pt=Q.isDataArrayTexture||Q.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const Rn=K.get(P),ui=K.get(Q),Pn=K.get(Rn.__renderTarget),$n=K.get(ui.__renderTarget);Ie.bindFramebuffer(O.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let jn=0;jn<it;jn++)Oi&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,K.get(P).__webglTexture,J,k+jn),P.isDepthTexture?(Pt&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,K.get(Q).__webglTexture,J,pe+jn),O.blitFramebuffer(st,vt,ze,Ze,F,ee,ze,Ze,O.DEPTH_BUFFER_BIT,O.NEAREST)):Pt?O.copyTexSubImage3D(te,J,F,ee,pe+jn,st,vt,ze,Ze):O.copyTexSubImage2D(te,J,F,ee,pe+jn,st,vt,ze,Ze);Ie.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Pt?P.isDataTexture||P.isData3DTexture?O.texSubImage3D(te,J,F,ee,pe,ze,Ze,it,Pe,Te,Se.data):Q.isCompressedArrayTexture?O.compressedTexSubImage3D(te,J,F,ee,pe,ze,Ze,it,Pe,Se.data):O.texSubImage3D(te,J,F,ee,pe,ze,Ze,it,Pe,Te,Se):P.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,J,F,ee,ze,Ze,Pe,Te,Se.data):P.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,J,F,ee,Se.width,Se.height,Pe,Se.data):O.texSubImage2D(O.TEXTURE_2D,J,F,ee,ze,Ze,Pe,Te,Se);O.pixelStorei(O.UNPACK_ROW_LENGTH,$e),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Xe),O.pixelStorei(O.UNPACK_SKIP_PIXELS,pt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Rt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Dt),J===0&&Q.generateMipmaps&&O.generateMipmap(te),Ie.unbindTexture()},this.copyTextureToTexture3D=function(P,Q,ae=null,ce=null,J=0){return P.isTexture!==!0&&(Qr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,ce=arguments[1]||null,P=arguments[2],Q=arguments[3],J=arguments[4]||0),Qr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,Q,ae,ce,J)},this.initRenderTarget=function(P){K.get(P).__webglFramebuffer===void 0&&R.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),Ie.unbindTexture()},this.resetState=function(){S=0,E=0,A=null,Ie.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}}class fu{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=n}clone(){return new fu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class p1 extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Na extends Un{constructor(e=null,t=1,n=1,s,r,o,a,l,c=An,u=An,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nh extends Xt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const hr=new Ut,kh=new Ut,Ko=[],Fh=new Xs,m1=new Ut,Yr=new lt,$r=new Fr;class wn extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Nh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,m1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hr),Fh.copy(e.boundingBox).applyMatrix4(hr),this.boundingBox.union(Fh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hr),$r.copy(e.boundingSphere).applyMatrix4(hr),this.boundingSphere.union($r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Yr.geometry=this.geometry,Yr.material=this.material,Yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(n),e.ray.intersectsSphere($r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hr),kh.multiplyMatrices(n,hr),Yr.matrixWorld=kh,Yr.raycast(e,Ko);for(let o=0,a=Ko.length;o<a;o++){const l=Ko[o];l.instanceId=r,l.object=this,t.push(l)}Ko.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Nh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Na(new Float32Array(s*this.count),s,this.count,Ia,bi));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ka extends qs{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Oh=new Ut,wc=new ou,Zo=new Fr,Jo=new V;class du extends qt{constructor(e=new Ft,t=new ka){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,e.ray.intersectsSphere(Zo)===!1)return;Oh.copy(s).invert(),wc.copy(e.ray).applyMatrix4(Oh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,M=p;g<M;g++){const m=c.getX(g);Jo.fromBufferAttribute(h,m),Bh(Jo,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,M=p;g<M;g++)Jo.fromBufferAttribute(h,g),Bh(Jo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Bh(i,e,t,n,s,r,o){const a=wc.distanceSqToPoint(i);if(a<t){const l=new V;wc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class wi extends Un{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,p=(o-u)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Re:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new V,s=[],r=[],o=[],a=new V,l=new Ut;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new V)}r[0]=new V,o[0]=new V;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(bn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(bn(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class pu extends Fi{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Re){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class g1 extends pu{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function mu(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,p*=u,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Qo=new V,yl=new mu,bl=new mu,Sl=new mu;class gu extends Fi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new V){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Qo.subVectors(s[0],s[1]).add(s[0]),c=Qo);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Qo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Qo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),M=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),yl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,M,m),bl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,M,m),Sl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,M,m)}else this.curveType==="catmullrom"&&(yl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),bl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Sl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(yl.calc(l),bl.calc(l),Sl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new V().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Gh(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function v1(i,e){const t=1-i;return t*t*e}function x1(i,e){return 2*(1-i)*i*e}function _1(i,e){return i*i*e}function so(i,e,t,n){return v1(i,e)+x1(i,t)+_1(i,n)}function M1(i,e){const t=1-i;return t*t*t*e}function y1(i,e){const t=1-i;return 3*t*t*i*e}function b1(i,e){return 3*(1-i)*i*i*e}function S1(i,e){return i*i*i*e}function ro(i,e,t,n,s){return M1(i,e)+y1(i,t)+b1(i,n)+S1(i,s)}class ad extends Fi{constructor(e=new Re,t=new Re,n=new Re,s=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Re){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ro(e,s.x,r.x,o.x,a.x),ro(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class w1 extends Fi{constructor(e=new V,t=new V,n=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new V){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ro(e,s.x,r.x,o.x,a.x),ro(e,s.y,r.y,o.y,a.y),ro(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ld extends Fi{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class E1 extends Fi{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cd extends Fi{constructor(e=new Re,t=new Re,n=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Re){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(so(e,s.x,r.x,o.x),so(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class T1 extends Fi{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(so(e,s.x,r.x,o.x),so(e,s.y,r.y,o.y),so(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ud extends Fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Gh(a,l.x,c.x,u.x,h.x),Gh(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Re().fromArray(s))}return this}}var Ec=Object.freeze({__proto__:null,ArcCurve:g1,CatmullRomCurve3:gu,CubicBezierCurve:ad,CubicBezierCurve3:w1,EllipseCurve:pu,LineCurve:ld,LineCurve3:E1,QuadraticBezierCurve:cd,QuadraticBezierCurve3:T1,SplineCurve:ud});class A1 extends Fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ec[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Ec[s.type]().fromJSON(s))}return this}}class Tc extends A1{constructor(e){super(),this.type="Path",this.currentPoint=new Re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ld(this.currentPoint.clone(),new Re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new cd(this.currentPoint.clone(),new Re(e,t),new Re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new ad(this.currentPoint.clone(),new Re(e,t),new Re(n,s),new Re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ud(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new pu(e,t,n,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class vu extends Ft{constructor(e=[new Re(0,-.5),new Re(.5,0),new Re(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=bn(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/t,h=new V,d=new Re,p=new V,g=new V,M=new V;let m=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,M.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(M.x,M.y,M.z);break;default:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=M.x,p.y+=M.y,p.z+=M.z,p.normalize(),l.push(p.x,p.y,p.z),M.copy(g)}for(let _=0;_<=t;_++){const b=n+_*u*s,x=Math.sin(b),C=Math.cos(b);for(let S=0;S<=e.length-1;S++){h.x=e[S].x*x,h.y=e[S].y,h.z=e[S].x*C,o.push(h.x,h.y,h.z),d.x=_/t,d.y=S/(e.length-1),a.push(d.x,d.y);const E=l[3*S+0]*x,A=l[3*S+1],y=l[3*S+0]*C;c.push(E,A,y)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){const x=b+_*e.length,C=x,S=x+e.length,E=x+e.length+1,A=x+1;r.push(C,S,A),r.push(E,A,S)}this.setIndex(r),this.setAttribute("position",new ht(o,3)),this.setAttribute("uv",new ht(a,2)),this.setAttribute("normal",new ht(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vu(e.points,e.segments,e.phiStart,e.phiLength)}}class Fa extends vu{constructor(e=1,t=1,n=4,s=8){const r=new Tc;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new Fa(e.radius,e.length,e.capSegments,e.radialSegments)}}class Pr extends Ft{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new V,u=new Re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const p=n+h/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(a,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class jt extends Ft{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let g=0;const M=[],m=n/2;let f=0;_(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new ht(h,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(p,2));function _(){const x=new V,C=new V;let S=0;const E=(t-e)/n;for(let A=0;A<=r;A++){const y=[],v=A/r,T=v*(t-e)+e;for(let N=0;N<=s;N++){const L=N/s,U=L*l+a,W=Math.sin(U),G=Math.cos(U);C.x=T*W,C.y=-v*n+m,C.z=T*G,h.push(C.x,C.y,C.z),x.set(W,E,G).normalize(),d.push(x.x,x.y,x.z),p.push(L,1-v),y.push(g++)}M.push(y)}for(let A=0;A<s;A++)for(let y=0;y<r;y++){const v=M[y][A],T=M[y+1][A],N=M[y+1][A+1],L=M[y][A+1];(e>0||y!==0)&&(u.push(v,T,L),S+=3),(t>0||y!==r-1)&&(u.push(T,N,L),S+=3)}c.addGroup(f,S,0),f+=S}function b(x){const C=g,S=new Re,E=new V;let A=0;const y=x===!0?e:t,v=x===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,m*v,0),d.push(0,v,0),p.push(.5,.5),g++;const T=g;for(let N=0;N<=s;N++){const U=N/s*l+a,W=Math.cos(U),G=Math.sin(U);E.x=y*G,E.y=m*v,E.z=y*W,h.push(E.x,E.y,E.z),d.push(0,v,0),S.x=W*.5+.5,S.y=G*.5*v+.5,p.push(S.x,S.y),g++}for(let N=0;N<s;N++){const L=C+N,U=T+N;x===!0?u.push(U,U+1,L):u.push(U+1,U,L),A+=3}c.addGroup(f,A,x===!0?1:2),f+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ei extends jt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ei(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class So extends Ft{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(r.slice(),3)),this.setAttribute("uv",new ht(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const b=new V,x=new V,C=new V;for(let S=0;S<t.length;S+=3)p(t[S+0],b),p(t[S+1],x),p(t[S+2],C),l(b,x,C,_)}function l(_,b,x,C){const S=C+1,E=[];for(let A=0;A<=S;A++){E[A]=[];const y=_.clone().lerp(x,A/S),v=b.clone().lerp(x,A/S),T=S-A;for(let N=0;N<=T;N++)N===0&&A===S?E[A][N]=y:E[A][N]=y.clone().lerp(v,N/T)}for(let A=0;A<S;A++)for(let y=0;y<2*(S-A)-1;y++){const v=Math.floor(y/2);y%2===0?(d(E[A][v+1]),d(E[A+1][v]),d(E[A][v])):(d(E[A][v+1]),d(E[A+1][v+1]),d(E[A+1][v]))}}function c(_){const b=new V;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(_),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function u(){const _=new V;for(let b=0;b<r.length;b+=3){_.x=r[b+0],_.y=r[b+1],_.z=r[b+2];const x=m(_)/2/Math.PI+.5,C=f(_)/Math.PI+.5;o.push(x,1-C)}g(),h()}function h(){for(let _=0;_<o.length;_+=6){const b=o[_+0],x=o[_+2],C=o[_+4],S=Math.max(b,x,C),E=Math.min(b,x,C);S>.9&&E<.1&&(b<.2&&(o[_+0]+=1),x<.2&&(o[_+2]+=1),C<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function p(_,b){const x=_*3;b.x=e[x+0],b.y=e[x+1],b.z=e[x+2]}function g(){const _=new V,b=new V,x=new V,C=new V,S=new Re,E=new Re,A=new Re;for(let y=0,v=0;y<r.length;y+=9,v+=6){_.set(r[y+0],r[y+1],r[y+2]),b.set(r[y+3],r[y+4],r[y+5]),x.set(r[y+6],r[y+7],r[y+8]),S.set(o[v+0],o[v+1]),E.set(o[v+2],o[v+3]),A.set(o[v+4],o[v+5]),C.copy(_).add(b).add(x).divideScalar(3);const T=m(C);M(S,v+0,_,T),M(E,v+2,b,T),M(A,v+4,x,T)}}function M(_,b,x,C){C<0&&_.x===1&&(o[b]=_.x-1),x.x===0&&x.z===0&&(o[b]=C/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.vertices,e.indices,e.radius,e.details)}}class Oa extends So{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Oa(e.radius,e.detail)}}class hd extends Tc{constructor(e){super(e),this.uuid=Ws(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Tc().fromJSON(s))}return this}}const C1={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=fd(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,p;if(n&&(r=I1(i,e,r,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<s;g+=t)h=i[g],d=i[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return po(r,o,t,a,l,p,0),o}};function fd(i,e,t,n,s){let r,o;if(s===W1(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Vh(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Vh(r,i[r],i[r+1],o);return o&&Ba(o,o.next)&&(go(o),o=o.next),o}function Vs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ba(t,t.next)||ln(t.prev,t,t.next)===0)){if(go(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function po(i,e,t,n,s,r,o){if(!i)return;!o&&r&&F1(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?P1(i,n,s,r):R1(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),go(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=L1(Vs(i),e,t),po(i,e,t,n,s,r,2)):o===2&&D1(i,e,t,n,s,r):po(Vs(i),e,t,n,s,r,1);break}}}function R1(i){const e=i.prev,t=i,n=i.next;if(ln(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&vr(s,a,r,l,o,c,g.x,g.y)&&ln(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function P1(i,e,t,n){const s=i.prev,r=i,o=i.next;if(ln(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,M=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,f=Ac(p,g,e,t,n),_=Ac(M,m,e,t,n);let b=i.prevZ,x=i.nextZ;for(;b&&b.z>=f&&x&&x.z<=_;){if(b.x>=p&&b.x<=M&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&vr(a,u,l,h,c,d,b.x,b.y)&&ln(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=p&&x.x<=M&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&vr(a,u,l,h,c,d,x.x,x.y)&&ln(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=f;){if(b.x>=p&&b.x<=M&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&vr(a,u,l,h,c,d,b.x,b.y)&&ln(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=_;){if(x.x>=p&&x.x<=M&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&vr(a,u,l,h,c,d,x.x,x.y)&&ln(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function L1(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Ba(s,r)&&dd(s,n,n.next,r)&&mo(s,r)&&mo(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),go(n),go(n.next),n=i=r),n=n.next}while(n!==i);return Vs(n)}function D1(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&G1(o,a)){let l=pd(o,a);o=Vs(o,o.next),l=Vs(l,l.next),po(o,e,t,n,s,r,0),po(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function I1(i,e,t,n){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=fd(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(B1(c));for(s.sort(U1),r=0;r<s.length;r++)t=z1(s[r],t);return t}function U1(i,e){return i.x-e.x}function z1(i,e){const t=N1(i,e);if(!t)return e;const n=pd(t,i);return Vs(n,n.next),Vs(t,t.next)}function N1(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&vr(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),mo(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&k1(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function k1(i,e){return ln(i.prev,i,e.prev)<0&&ln(e.next,i,i.next)<0}function F1(i,e,t,n){let s=i;do s.z===0&&(s.z=Ac(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,O1(s)}function O1(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Ac(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function B1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function vr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function G1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!V1(i,e)&&(mo(i,e)&&mo(e,i)&&H1(i,e)&&(ln(i.prev,i,e.prev)||ln(i,e.prev,e))||Ba(i,e)&&ln(i.prev,i,i.next)>0&&ln(e.prev,e,e.next)>0)}function ln(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ba(i,e){return i.x===e.x&&i.y===e.y}function dd(i,e,t,n){const s=ta(ln(i,e,t)),r=ta(ln(i,e,n)),o=ta(ln(t,n,i)),a=ta(ln(t,n,e));return!!(s!==r&&o!==a||s===0&&ea(i,t,e)||r===0&&ea(i,n,e)||o===0&&ea(t,i,n)||a===0&&ea(t,e,n))}function ea(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ta(i){return i>0?1:i<0?-1:0}function V1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&dd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function mo(i,e){return ln(i.prev,i,i.next)<0?ln(i,e,i.next)>=0&&ln(i,i.prev,e)>=0:ln(i,e,i.prev)<0||ln(i,i.next,e)<0}function H1(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function pd(i,e){const t=new Cc(i.i,i.x,i.y),n=new Cc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Vh(i,e,t,n){const s=new Cc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function go(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Cc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function W1(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class oo{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return oo.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Hh(e),Wh(n,e);let o=e.length;t.forEach(Hh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Wh(n,t[l]);const a=C1.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Hh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Wh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class xu extends Ft{constructor(e=new hd([new Re(.5,.5),new Re(-.5,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ht(s,3)),this.setAttribute("uv",new ht(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:X1;let b,x=!1,C,S,E,A;f&&(b=f.getSpacedPoints(u),x=!0,d=!1,C=f.computeFrenetFrames(u,!1),S=new V,E=new V,A=new V),d||(m=0,p=0,g=0,M=0);const y=a.extractPoints(c);let v=y.shape;const T=y.holes;if(!oo.isClockWise(v)){v=v.reverse();for(let fe=0,_e=T.length;fe<_e;fe++){const O=T[fe];oo.isClockWise(O)&&(T[fe]=O.reverse())}}const L=oo.triangulateShape(v,T),U=v;for(let fe=0,_e=T.length;fe<_e;fe++){const O=T[fe];v=v.concat(O)}function W(fe,_e,O){return _e||console.error("THREE.ExtrudeGeometry: vec does not exist"),fe.clone().addScaledVector(_e,O)}const G=v.length,z=L.length;function I(fe,_e,O){let Qe,be,Ge;const Ie=fe.x-_e.x,nt=fe.y-_e.y,K=O.x-fe.x,R=O.y-fe.y,w=Ie*Ie+nt*nt,X=Ie*R-nt*K;if(Math.abs(X)>Number.EPSILON){const ne=Math.sqrt(w),se=Math.sqrt(K*K+R*R),re=_e.x-nt/ne,ke=_e.y+Ie/ne,we=O.x-R/se,Ue=O.y+K/se,ot=((we-re)*R-(Ue-ke)*K)/(Ie*R-nt*K);Qe=re+Ie*ot-fe.x,be=ke+nt*ot-fe.y;const Ae=Qe*Qe+be*be;if(Ae<=2)return new Re(Qe,be);Ge=Math.sqrt(Ae/2)}else{let ne=!1;Ie>Number.EPSILON?K>Number.EPSILON&&(ne=!0):Ie<-Number.EPSILON?K<-Number.EPSILON&&(ne=!0):Math.sign(nt)===Math.sign(R)&&(ne=!0),ne?(Qe=-nt,be=Ie,Ge=Math.sqrt(w)):(Qe=Ie,be=nt,Ge=Math.sqrt(w/2))}return new Re(Qe/Ge,be/Ge)}const Y=[];for(let fe=0,_e=U.length,O=_e-1,Qe=fe+1;fe<_e;fe++,O++,Qe++)O===_e&&(O=0),Qe===_e&&(Qe=0),Y[fe]=I(U[fe],U[O],U[Qe]);const $=[];let ie,ge=Y.concat();for(let fe=0,_e=T.length;fe<_e;fe++){const O=T[fe];ie=[];for(let Qe=0,be=O.length,Ge=be-1,Ie=Qe+1;Qe<be;Qe++,Ge++,Ie++)Ge===be&&(Ge=0),Ie===be&&(Ie=0),ie[Qe]=I(O[Qe],O[Ge],O[Ie]);$.push(ie),ge=ge.concat(ie)}for(let fe=0;fe<m;fe++){const _e=fe/m,O=p*Math.cos(_e*Math.PI/2),Qe=g*Math.sin(_e*Math.PI/2)+M;for(let be=0,Ge=U.length;be<Ge;be++){const Ie=W(U[be],Y[be],Qe);oe(Ie.x,Ie.y,-O)}for(let be=0,Ge=T.length;be<Ge;be++){const Ie=T[be];ie=$[be];for(let nt=0,K=Ie.length;nt<K;nt++){const R=W(Ie[nt],ie[nt],Qe);oe(R.x,R.y,-O)}}}const Ne=g+M;for(let fe=0;fe<G;fe++){const _e=d?W(v[fe],ge[fe],Ne):v[fe];x?(E.copy(C.normals[0]).multiplyScalar(_e.x),S.copy(C.binormals[0]).multiplyScalar(_e.y),A.copy(b[0]).add(E).add(S),oe(A.x,A.y,A.z)):oe(_e.x,_e.y,0)}for(let fe=1;fe<=u;fe++)for(let _e=0;_e<G;_e++){const O=d?W(v[_e],ge[_e],Ne):v[_e];x?(E.copy(C.normals[fe]).multiplyScalar(O.x),S.copy(C.binormals[fe]).multiplyScalar(O.y),A.copy(b[fe]).add(E).add(S),oe(A.x,A.y,A.z)):oe(O.x,O.y,h/u*fe)}for(let fe=m-1;fe>=0;fe--){const _e=fe/m,O=p*Math.cos(_e*Math.PI/2),Qe=g*Math.sin(_e*Math.PI/2)+M;for(let be=0,Ge=U.length;be<Ge;be++){const Ie=W(U[be],Y[be],Qe);oe(Ie.x,Ie.y,h+O)}for(let be=0,Ge=T.length;be<Ge;be++){const Ie=T[be];ie=$[be];for(let nt=0,K=Ie.length;nt<K;nt++){const R=W(Ie[nt],ie[nt],Qe);x?oe(R.x,R.y+b[u-1].y,b[u-1].x+O):oe(R.x,R.y,h+O)}}}H(),Z();function H(){const fe=s.length/3;if(d){let _e=0,O=G*_e;for(let Qe=0;Qe<z;Qe++){const be=L[Qe];me(be[2]+O,be[1]+O,be[0]+O)}_e=u+m*2,O=G*_e;for(let Qe=0;Qe<z;Qe++){const be=L[Qe];me(be[0]+O,be[1]+O,be[2]+O)}}else{for(let _e=0;_e<z;_e++){const O=L[_e];me(O[2],O[1],O[0])}for(let _e=0;_e<z;_e++){const O=L[_e];me(O[0]+G*u,O[1]+G*u,O[2]+G*u)}}n.addGroup(fe,s.length/3-fe,0)}function Z(){const fe=s.length/3;let _e=0;ue(U,_e),_e+=U.length;for(let O=0,Qe=T.length;O<Qe;O++){const be=T[O];ue(be,_e),_e+=be.length}n.addGroup(fe,s.length/3-fe,1)}function ue(fe,_e){let O=fe.length;for(;--O>=0;){const Qe=O;let be=O-1;be<0&&(be=fe.length-1);for(let Ge=0,Ie=u+m*2;Ge<Ie;Ge++){const nt=G*Ge,K=G*(Ge+1),R=_e+Qe+nt,w=_e+be+nt,X=_e+be+K,ne=_e+Qe+K;De(R,w,X,ne)}}}function oe(fe,_e,O){l.push(fe),l.push(_e),l.push(O)}function me(fe,_e,O){Ee(fe),Ee(_e),Ee(O);const Qe=s.length/3,be=_.generateTopUV(n,s,Qe-3,Qe-2,Qe-1);Oe(be[0]),Oe(be[1]),Oe(be[2])}function De(fe,_e,O,Qe){Ee(fe),Ee(_e),Ee(Qe),Ee(_e),Ee(O),Ee(Qe);const be=s.length/3,Ge=_.generateSideWallUV(n,s,be-6,be-3,be-2,be-1);Oe(Ge[0]),Oe(Ge[1]),Oe(Ge[3]),Oe(Ge[1]),Oe(Ge[2]),Oe(Ge[3])}function Ee(fe){s.push(l[fe*3+0]),s.push(l[fe*3+1]),s.push(l[fe*3+2])}function Oe(fe){r.push(fe.x),r.push(fe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return q1(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ec[s.type]().fromJSON(s)),new xu(n,e.options)}}const X1={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new Re(r,o),new Re(a,l),new Re(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],M=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Re(o,1-l),new Re(c,1-h),new Re(d,1-g),new Re(M,1-f)]:[new Re(a,1-l),new Re(u,1-h),new Re(p,1-g),new Re(m,1-f)]}};function q1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ms extends So{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ms(e.radius,e.detail)}}class Lr extends So{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Lr(e.radius,e.detail)}}class Ms extends Ft{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/s,p=new V,g=new Re;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let M=0;M<s;M++){const m=M*(n+1);for(let f=0;f<n;f++){const _=f+m,b=_,x=_+n+1,C=_+n+2,S=_+1;a.push(b,x,S),a.push(x,C,S)}}this.setIndex(a),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ti extends Ft{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new V,d=new V,p=[],g=[],M=[],m=[];for(let f=0;f<=n;f++){const _=[],b=f/n;let x=0;f===0&&o===0?x=.5/t:f===n&&l===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){const S=C/t;h.x=-e*Math.cos(s+S*r)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(s+S*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),M.push(d.x,d.y,d.z),m.push(S+x,1-b),_.push(c++)}u.push(_)}for(let f=0;f<n;f++)for(let _=0;_<t;_++){const b=u[f][_+1],x=u[f][_],C=u[f+1][_],S=u[f+1][_+1];(f!==0||o>0)&&p.push(b,x,S),(f!==n-1||l<Math.PI)&&p.push(x,C,S)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(M,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Mr extends Ft{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new V,h=new V,d=new V;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const M=g/s*r,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(M),h.y=(e+t*Math.cos(m))*Math.sin(M),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const M=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,_=(s+1)*p+g;o.push(M,m,_),o.push(m,f,_)}this.setIndex(o),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Y1 extends rn{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class $1 extends qs{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Wt extends qs{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _u extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class j1 extends _u{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const wl=new Ut,Xh=new V,qh=new V;class md{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lu,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xh),qh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qh),t.updateMatrixWorld(),wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yh=new Ut,jr=new V,El=new V;class K1 extends md{constructor(){super(new Qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new Ht(2,1,1,1),new Ht(0,1,1,1),new Ht(3,1,1,1),new Ht(1,1,1,1),new Ht(3,0,1,1),new Ht(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(jr),El.copy(n.position),El.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(El),n.updateMatrixWorld(),s.makeTranslation(-jr.x,-jr.y,-jr.z),Yh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yh)}}class vo extends _u{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new K1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Z1 extends md{constructor(){super(new cu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class J1 extends _u{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new Z1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$h(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=$h();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $h(){return performance.now()}const jh=new Ut;class Q1{constructor(e,t,n=0,s=1/0){this.ray=new ou(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new au,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return jh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jh),this}intersectObject(e,t=!0,n=[]){return Rc(e,this,n,t),n.sort(Kh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Rc(e[s],this,n,t);return n.sort(Kh),n}}function Kh(i,e){return i.distance-e.distance}function Rc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Rc(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jc);function Mu(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ft;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0;const h=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Zh(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const p=[];for(let M=0;M<o[u].length;++M)p.push(o[u][M][d]);const g=Zh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Zh(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Xt(o,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,p=u.count;d<p;d++)for(let g=0;g<t;g++){const M=u.getComponent(d,g);a.setComponent(d+h,g,M)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function vd(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let o=0;const a=Object.keys(i.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let _=0,b=a.length;_<b;_++){const x=a[_],C=i.attributes[x];l[x]=new C.constructor(new C.array.constructor(C.count*C.itemSize),C.itemSize,C.normalized);const S=i.morphAttributes[x];S&&(c[x]||(c[x]=[]),S.forEach((E,A)=>{const y=new E.array.constructor(E.count*E.itemSize);c[x][A]=new E.constructor(y,E.itemSize,E.normalized)}))}const p=e*.5,g=Math.log10(1/e),M=Math.pow(10,g),m=p*M;for(let _=0;_<r;_++){const b=n?n.getX(_):_;let x="";for(let C=0,S=a.length;C<S;C++){const E=a[C],A=i.getAttribute(E),y=A.itemSize;for(let v=0;v<y;v++)x+=`${~~(A[h[v]](b)*M+m)},`}if(x in t)u.push(t[x]);else{for(let C=0,S=a.length;C<S;C++){const E=a[C],A=i.getAttribute(E),y=i.morphAttributes[E],v=A.itemSize,T=l[E],N=c[E];for(let L=0;L<v;L++){const U=h[L],W=d[L];if(T[W](o,A[U](b)),y)for(let G=0,z=y.length;G<z;G++)N[G][W](o,y[G][U](b))}}t[x]=o,u.push(o),o++}}const f=i.clone();for(const _ in i.attributes){const b=l[_];if(f.setAttribute(_,new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)),_ in c)for(let x=0;x<c[_].length;x++){const C=c[_][x];f.morphAttributes[_][x]=new C.constructor(C.array.slice(0,o*C.itemSize),C.itemSize,C.normalized)}}return f.setIndex(u),f}function Dr(i){const e=i.map(([h])=>h.index?h.toNonIndexed():h),t=e.reduce((h,d)=>h+d.attributes.position.count,0),n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Ce,o=new V;let a=0;e.forEach((h,d)=>{const p=i[d][1],g=h.attributes.position;for(let M=0;M<g.count;M++)o.fromBufferAttribute(g,M),p(o,r),n.set([o.x,o.y,o.z],(a+M)*3),s.set([r.r,r.g,r.b],(a+M)*3);a+=g.count});const l=new Ft;l.setAttribute("position",new Xt(n,3)),l.setAttribute("color",new Xt(s,3)),l.computeVertexNormals();let c=0;const u=l.attributes.normal;return e.forEach((h,d)=>{const p=i[d][2],g=h.attributes.position.count;if(p)for(let M=0;M<g;M++)o.fromBufferAttribute(l.attributes.position,c+M).sub(p).normalize(),u.setXYZ(c+M,o.x,o.y,o.z);c+=g}),l}const Pc=.7,Lc=3.8;function e_(){const i=[],t=Lc/8,n=new Ce("#7a5434"),s=new Ce("#a57a4e");for(let r=0;r<8;r++){const o=r/8,a=(r+1)/8,l=.24-o*.08,c=.24-a*.08,u=new jt(c,l*1.12,t,7,1),h=u.attributes.position;for(let d=0;d<h.count;d++){const p=h.getY(d)+t/2+r*t,g=p/Lc;h.setXYZ(d,h.getX(d)+Pc*g*g,p,h.getZ(d))}i.push([u,(d,p)=>p.copy(n).lerp(s,d.y/t%1).multiplyScalar(.55+.45*Mt.smoothstep(d.y,0,1.3))])}return Dr(i)}const As={ink:new Ce("#14261a"),rib:new Ce("#d6ec96"),body:new Ce("#79bf48"),edge:new Ce("#2f7f33"),tip:new Ce("#a8d65c")};function Jh(i,e,t){const n=[],s=[],r=[],o=new Ce,a=new V,l=p=>e*Math.sin(Math.PI*Math.pow(Math.min(1,p),.85))+.02,c=(p,g)=>{const M=l(p)*Math.abs(g);return new V(Math.sign(g)*M,.35*p-1.25*p*p-M*.3,p*i)},u=(p,g,M,m)=>{n.push(p.x,m?p.y-.02:p.y,p.z),a.set(Math.sign(M)*.3,1,-(.35-2.5*g)/i).normalize(),s.push(a.x,a.y,a.z),m?o.copy(As.ink):o.copy(As.body).lerp(As.tip,g).lerp(As.edge,Math.abs(M)*.85).multiplyScalar(.6+.4*Mt.smoothstep(g,0,.3)),r.push(o.r,o.g,o.b)},h=(p,g,M,m)=>{const[f,_,b]=[p,g,M].map(([S,E])=>c(S,E)),C=_.clone().sub(f).cross(b.clone().sub(f)).y>0?[[p,f],[g,_],[M,b]]:[[p,f],[M,b],[g,_]];for(const[[S,E],A]of C)m&&E!==0&&A.add(a.set(Math.sign(E),0,.5).normalize().multiplyScalar(.022)),u(A,S,E,m)};for(const p of[!0,!1])for(const g of[-1,1])for(let M=0;M<t;M++){const m=M/t,f=(M+1)/t,_=Math.min(1,f+.08),b=[m,0],x=[f,0],C=[m,g*.56],S=[_,g],E=[f,g*.56];h(b,C,S,p),h(b,S,E,p),p||h(b,E,x,p)}for(let p=0;p<t;p++){const g=p/t,M=(p+1)/t,m=c(g,1e-6),f=c(M,1e-6),_=.022*(1-g)+.004,b=.022*(1-M)+.004,x=[[m,-_,g],[f,b,M],[m,_,g],[m,-_,g],[f,-b,M],[f,b,M]];for(const[C,S,E]of x)n.push(C.x+S,C.y+.012,C.z),a.set(0,1,-(.35-2.5*E)/i).normalize(),s.push(a.x,a.y,a.z),r.push(As.rib.r,As.rib.g,As.rib.b)}const d=new Ft;return d.setAttribute("position",new ht(n,3)),d.setAttribute("normal",new ht(s,3)),d.setAttribute("color",new ht(r,3)),d}function t_(){const i=[];for(let t=0;t<6;t++){const n=Jh(2.75,.9,7);n.rotateX(-.12+t%2*.16),n.rotateY(t/6*Math.PI*2+t%2*.12),i.push(n)}for(let t=0;t<3;t++){const n=Jh(1.55,.5,5);n.rotateX(-.5),n.rotateY(t/3*Math.PI*2+.5),i.push(n)}const e=[];for(let t=0;t<3;t++){const n=new ti(.16,6,4);n.translate(Math.cos(t*2.1)*.18,-.2,Math.sin(t*2.1)*.18),e.push([n,(s,r)=>r.set("#6b4a2a")])}return Mu([...i,Dr(e)])}function na(i,e,t,{leaf:n=.24,density:s=64,fruit:r=0,seed:o=1}={}){let a=o*7919+13;const l=()=>(a=a*16807%2147483647,a/2147483647),c=new Ce("#16241a"),u=new Ce("#e4f0a0"),h=[],d=[],p=[],g=new Ce,M=new V,m=new V,f=new V,_=new V,b=new V(0,-1,0),x=(y,v,T)=>{h.push(y.x,y.y,y.z),d.push(v.x,v.y,v.z),p.push(T.r,T.g,T.b)},C=i.map(([y,v,T,N])=>[new V(y,v,T),N]),S=Math.min(...i.map(([,y,,v])=>y-v)),E=Math.max(...i.map(([,y,,v])=>y+v));for(const[y,v]of C){const T=Math.round(s*(v/.5)*(v/.5));for(let U=0;U<T;U++){const W=1-2*(U+.5)/T,G=Math.sqrt(Math.max(0,1-W*W)),z=U*2.39996+l()*.5;m.set(Math.cos(z)*G,W,Math.sin(z)*G).normalize();const I=M.copy(y).addScaledVector(m,v*(.92+l()*.14));if(C.some(([Ee,Oe])=>Ee!==y&&I.distanceTo(Ee)<Oe*.82))continue;f.copy(b).addScaledVector(m,-b.dot(m)).normalize().multiplyScalar(.7).add(_.set(l()-.5,l()-.5,l()-.5)).addScaledVector(m,.35).normalize(),_.copy(m).cross(f).normalize();const Y=n*(1.05+l()*.6),$=Y*.34,ie=(I.y-S)/(E-S);g.copy(t).lerp(e,Mt.smoothstep(ie+m.y*.3,.15,.85)).multiplyScalar(.7+.42*Mt.smoothstep(m.y,-.8,.3)+(l()-.5)*.16),l()<.12&&g.lerp(u,.3);const ge=I.clone().addScaledVector(f,-Y*.5),Ne=I.clone().addScaledVector(f,Y*.5),H=I.clone().addScaledVector(f,-Y*.16),Z=H.clone().addScaledVector(_,-$),ue=H.clone().addScaledVector(_,$),oe=m.clone().multiplyScalar(-.02),me=Ee=>Ee.clone().sub(I).multiplyScalar(1.14).add(I).add(oe),De=g.clone().multiplyScalar(.3).lerp(c,.45);for(const[Ee,Oe,fe,_e]of[[me(ge),me(ue),me(Ne),De],[me(ge),me(Ne),me(Z),De],[ge,ue,Ne,g],[ge,Ne,Z,g]]){const O=Oe.clone().sub(Ee).cross(fe.clone().sub(Ee)).dot(m)>0;for(const Qe of O?[Ee,Oe,fe]:[Ee,fe,Oe])x(Qe,m,_e)}}const N=new ms(v*.86,1).toNonIndexed();N.translate(y.x,y.y,y.z);const L=N.attributes.position;for(let U=0;U<L.count;U++)M.fromBufferAttribute(L,U),g.copy(t).multiplyScalar(.62),x(M,m.copy(M).sub(y).normalize(),g)}for(let y=0;y<r;y++){const[v,T]=C[y%C.length],N=y*2.39996+l(),L=.05+l()*.7,U=Math.sqrt(1-L*L),W=new ms(.085+l()*.03,1).toNonIndexed(),G=v.x+Math.cos(N)*U*T*1.03,z=v.y+L*T*1.03,I=v.z+Math.sin(N)*U*T*1.03,Y=W.attributes.position,$=new V(G,z,I);for(let ie=0;ie<Y.count;ie++)M.fromBufferAttribute(Y,ie),m.copy(M).normalize(),M.add($),x(M,m,g.set("#f0862a").lerp(u,.15*Math.max(0,m.y)))}const A=new Ft;return A.setAttribute("position",new ht(h,3)),A.setAttribute("normal",new ht(d,3)),A.setAttribute("color",new ht(p,3)),A}function n_(i){const e=[],t=new Ce("#2f6a48"),n=new Ce("#4a8a5a"),s=new Ce("#ffffff");return[[1.5,1.5,.9],[1.15,1.35,1.8],[.8,1.2,2.6],[.45,.9,3.25]].forEach(([r,o,a])=>{const l=new ei(r,o,10,2),c=l.attributes.position;for(let u=0;u<c.count;u++)c.getY(u)<-o/2+.01&&c.setY(u,c.getY(u)+Math.sin(u*1.7)*.12);l.translate(0,a,0),e.push([l,(u,h)=>{const d=(u.y-a+o/2)/o;h.copy(t).lerp(n,d),i&&d>.12&&h.lerp(s,Math.min(1,(d-.12)*2.6))}])}),Dr(e)}function i_(){const i=[],e=new jt(.12,.26,3,6,4),t=e.attributes.position;for(let n=0;n<t.count;n++){const s=t.getY(n);t.setX(n,t.getX(n)+Math.sin(s*1.7)*.12)}return e.translate(0,1.5,0),i.push([e,(n,s)=>s.set(n.y<.4?"#1e1a18":"#3a302a")]),[[.4,1.9,.9,.7],[-.5,2.3,-.8,.6],[.2,2.7,.6,.5]].forEach(([n,s,r,o])=>{const a=new jt(.03,.08,o,4);a.translate(0,o/2,0),a.rotateZ(r),a.translate(n*.3,s,0),i.push([a,(l,c)=>c.set("#2e2622")])}),Dr(i)}const xs={uKeep:{value:new V(-1e4,-1e4,0)},uRad:{value:120}};function Dc(i){return i.onBeforeCompile=e=>{e.uniforms.uKeep=xs.uKeep,e.uniforms.uRad=xs.uRad,e.fragmentShader=e.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
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
      #endif`)},i}function s_(i,e){const t=Dc(new Wt({vertexColors:!0,side:e.side,transparent:!0,depthWrite:!1}));t.defines={FADE_PASS:1};const n=new wn(i.geometry,t,Math.max(1,i.count));return n.instanceMatrix.setUsage(bc),n.count=0,n.visible=!1,n.frustumCulled=!1,n.receiveShadow=!0,n.renderOrder=3,i.add(n),i.geometry.computeBoundingSphere(),{o:n,src:i,sphere:i.geometry.boundingSphere}}const Kr=new V,ia=new Ut;function r_({o:i,src:e,sphere:t},n,s,r){const{x:o,y:a,z:l}=xs.uKeep.value,c=xs.uRad.value,u=r*n.aspect;let h=0;for(let d=0;d<e.count;d++){e.getMatrixAt(d,ia);const p=t.radius*ia.getMaxScaleOnAxis();Kr.copy(t.center).applyMatrix4(ia).applyMatrix4(n.matrixWorldInverse);const g=-Kr.z;if(!(g+p<.1)){if(g-p>=5.5){if(g-p>l-.3)continue;Kr.applyMatrix4(n.projectionMatrix);const M=p*r/(2*s*Math.max(g,1));if(Math.hypot((Kr.x*.5+.5)*u-o,(Kr.y*.5+.5)*r-a)>c+M)continue}ia.toArray(i.instanceMatrix.array,h++*16)}}i.count=h,i.visible=h>0,h&&(i.instanceMatrix.clearUpdateRanges(),i.instanceMatrix.addUpdateRange(0,h*16),i.instanceMatrix.needsUpdate=!0)}function o_(i,e,t,n){const s=e.filter(z=>z.kind==="palm"),r=e.filter(z=>z.kind==="round"),o=e.filter(z=>z.kind==="bush"),a=e.filter(z=>z.kind==="pine"),l=e.filter(z=>z.kind==="dead"),c=Dc(new Wt({vertexColors:!0})),u=Dc(new Wt({vertexColors:!0,side:hn})),h=new Ce(n.trees.leaf[0]),d=new Ce(n.trees.leaf[1]),p=new jt(.16,.26,1.6,7);p.translate(0,.8,0);const g=Dr([[p,(z,I)=>I.set("#7a5434").multiplyScalar(.55+.45*Mt.smoothstep(z.y,0,1.1))]]),M=na([[0,2.2,0,1.15],[.8,1.9,.3,.8],[-.7,1.95,-.2,.85],[.1,2,-.85,.75],[-.2,2.9,.2,.8],[.35,1.8,.85,.7]],h,d,{leaf:.32,density:26,seed:2}),m=[na([[0,.45,0,.6],[.5,.35,.2,.45],[-.45,.38,-.15,.48],[.05,.7,.1,.42]],h,d,{seed:3}),na([[0,.36,0,.5],[.55,.3,-.12,.42],[-.55,.3,.1,.42],[.1,.32,.5,.38],[-.1,.34,-.5,.36]],h,d,{seed:4}),na([[0,.5,0,.58],[.3,.9,.1,.42],[-.3,.8,-.1,.44],[.05,1.15,0,.3]],h,d,{seed:5,fruit:n.id==="tak"?11:0})],f=[],_=(z,I,Y)=>{const $=new wn(z,I,Math.max(1,Y));return $.count=Y,$.castShadow=!0,$.receiveShadow=!0,i.add($),Ta($,"tree",!0),Y&&f.push(s_($,I)),$},b=_(e_(),c,s.length),x=_(t_(),u,s.length),C=_(g,c,r.length),S=_(M,u,r.length),E=m.map((z,I)=>o.filter((Y,$)=>$%m.length===I)),A=m.map((z,I)=>_(z,u,E[I].length)),y=new jt(.14,.22,1.2,6);y.translate(0,.6,0);const v=_(Dr([[y,(z,I)=>I.set("#5a3e2a").multiplyScalar(.55+.45*Mt.smoothstep(z.y,0,1))]]),c,a.length),T=_(n_(n.id==="vinter"),c,a.length),N=_(i_(),c,l.length),L=new qt;s.forEach((z,I)=>{L.position.set(z.x,z.y-.1,z.z),L.rotation.set(0,z.phase,0),L.scale.setScalar(z.s),L.updateMatrix(),b.setMatrixAt(I,L.matrix)}),r.forEach((z,I)=>{L.position.set(z.x,z.y-.1,z.z),L.rotation.set(0,z.phase,0),L.scale.setScalar(z.s),L.updateMatrix(),C.setMatrixAt(I,L.matrix)}),a.forEach((z,I)=>{L.position.set(z.x,z.y-.1,z.z),L.rotation.set(0,z.phase,0),L.scale.setScalar(z.s),L.updateMatrix(),v.setMatrixAt(I,L.matrix)}),l.forEach((z,I)=>{L.position.set(z.x,z.y-.1,z.z),L.rotation.set(0,z.phase,(z.phase%1-.5)*.15),L.scale.setScalar(z.s),L.updateMatrix(),N.setMatrixAt(I,L.matrix)});const U=z=>{s.forEach((I,Y)=>{const $=Math.cos(I.phase),ie=Math.sin(I.phase);L.position.set(I.x+Pc*$*I.s,I.y-.1+Lc*I.s,I.z-Pc*ie*I.s),L.rotation.set(Math.sin(z*1.2+I.phase)*.07,I.phase+Math.sin(z*.7+I.phase)*.05,Math.cos(z*1+I.phase)*.07),L.scale.setScalar(I.s),L.updateMatrix(),x.setMatrixAt(Y,L.matrix)}),x.instanceMatrix.needsUpdate=!0,r.forEach((I,Y)=>{L.position.set(I.x,I.y-.1,I.z),L.rotation.set(Math.sin(z*1.1+I.phase)*.025,I.phase,Math.cos(z*.9+I.phase)*.025),L.scale.setScalar(I.s),L.updateMatrix(),S.setMatrixAt(Y,L.matrix)}),S.instanceMatrix.needsUpdate=!0,E.forEach((I,Y)=>{I.forEach(($,ie)=>{const ge=1+Math.sin(z*1.6+$.phase)*.035;L.position.set($.x,$.y-.12,$.z),L.rotation.set(0,$.phase,0),L.scale.set($.s*ge,$.s/ge,$.s*ge),L.updateMatrix(),A[Y].setMatrixAt(ie,L.matrix)}),A[Y].instanceMatrix.needsUpdate=!0}),a.forEach((I,Y)=>{L.position.set(I.x,I.y-.1,I.z),L.rotation.set(Math.sin(z*.9+I.phase)*.02,I.phase,Math.cos(z*.8+I.phase)*.02),L.scale.setScalar(I.s),L.updateMatrix(),T.setMatrixAt(Y,L.matrix)}),T.instanceMatrix.needsUpdate=!0};return U(0),{colliders:[...s.map(z=>({x:z.x,z:z.z,r:.35*z.s})),...r.map(z=>({x:z.x,z:z.z,r:.4*z.s})),...o.map(z=>({x:z.x,z:z.z,r:.7*z.s})),...a.map(z=>({x:z.x,z:z.z,r:.4*z.s})),...l.map(z=>({x:z.x,z:z.z,r:.3*z.s}))],update:U,cullFade:(z,I)=>{const Y=Math.tan(Mt.degToRad(z.fov/2));for(const $ of f)r_($,z,Y,I)}}}const Ic={uOlPx:{value:2},uOlRes:{value:new Re(1,1)},uInk:{value:new Ce("#1f1a1c")}},a_=.16,l_=.65,Uc={rock:new Set,tree:new Set,tower:new Set,figure:new Set},zc={rock:!0,tree:!0,tower:!0,figure:!0};function c_(i,e,t,n){Ic.uOlPx.value=i*e,Ic.uOlRes.value.set(Math.max(1,t*e),Math.max(1,n*e))}function xd(i){for(const e in Uc)zc[e]=!!i[e],Uc[e].forEach(t=>t.visible=zc[e])}function _d(i){if(i.attributes.olNormal)return;i.attributes.normal||i.computeVertexNormals();const e=i.attributes.position,t=i.attributes.normal,n=e.count,s=new Map,r=new Array(n);for(let a=0;a<n;a++){const l=`${Math.round(e.getX(a)*1e4)},${Math.round(e.getY(a)*1e4)},${Math.round(e.getZ(a)*1e4)}`;r[a]=l;const c=s.get(l)||[0,0,0];c[0]+=t.getX(a),c[1]+=t.getY(a),c[2]+=t.getZ(a),s.set(l,c)}const o=new Float32Array(n*3);for(let a=0;a<n;a++){const l=s.get(r[a]),c=Math.hypot(l[0],l[1],l[2])||1;o[a*3]=l[0]/c,o[a*3+1]=l[1]/c,o[a*3+2]=l[2]/c}i.setAttribute("olNormal",new Xt(o,3))}const Tl=new Map;function Md(i,e,t,n){const s=`${i?i.uuid:"batch"}|${e}|${t}|${n}`;if(Tl.has(s))return Tl.get(s);const r=new zt({side:Hn,vertexColors:t});return r.color.copy(t||!i?new Ce(1,1,1):i.color).multiplyScalar(a_),r.visible=zc[e],r.onBeforeCompile=o=>{Object.assign(o.uniforms,Ic),o.vertexShader=`attribute vec3 olNormal;
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
      diffuseColor.rgb = mix(diffuseColor.rgb, uInk, ${l_.toFixed(2)});`),n&&(o.uniforms.uKeep=xs.uKeep,o.uniforms.uRad=xs.uRad,o.fragmentShader=`uniform vec3 uKeep;
uniform float uRad;
`+o.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        if (vOlZ < uKeep.z && length(gl_FragCoord.xy - uKeep.xy) < uRad * 0.78) discard;
        if (vOlZ + 2.6 < 4.2) discard; // nær-fade (kameraet)`))},r.customProgramCacheKey=()=>`ol${n?"f":""}`,Uc[e].add(r),Tl.set(s,r),r}const yd=i=>{const e=i.material;return i.isMesh&&!Array.isArray(e)&&(e.isMeshLambertMaterial||e.isMeshStandardMaterial)&&!e.transparent&&e.side!==hn};function Ta(i,e,t=!1){if(!yd(i))return null;_d(i.geometry);const n=!!(i.material.vertexColors&&i.geometry.attributes.color),s=new wn(i.geometry,Md(i.material,e,n,t),i.instanceMatrix.count);return s.instanceMatrix=i.instanceMatrix,s.count=i.count,s.frustumCulled=!1,s.renderOrder=1,s.onBeforeRender=()=>{s.count=i.count},i.add(s),s}const Qh=512,ef=new Map;let Nc=null;function u_(i){Nc=i}function h_(i,e){const t=`${i.uuid}|${e}`;let n=ef.get(t);if(n)return n;_d(i);const s=new wn(i,Md(null,e,!1,!1),Qh);return s.instanceMatrix.setUsage(bc),s.setColorAt(0,new Ce),s.instanceColor.setUsage(bc),s.count=0,s.frustumCulled=!1,s.matrixAutoUpdate=!1,s.renderOrder=1,s.raycast=()=>{},n={mesh:s,parts:[]},s.onBeforeRender=()=>{const r=s.instanceMatrix.array,o=s.instanceColor.array;let a=0;for(let l=n.parts.length-1;l>=0;l--){const c=n.parts[l];let u=c,h=!0;for(;u.parent;){if(!u.visible){h=!1;break}u=u.parent}if(u!==Nc){++c.userData.olMiss>300&&n.parts.splice(l,1);continue}if(c.userData.olMiss=0,!h||a>=Qh)continue;r.set(c.matrixWorld.elements,a*16);const d=c.material.color;o[a*3]=d.r,o[a*3+1]=d.g,o[a*3+2]=d.b,a++}s.count=a,a&&(s.instanceMatrix.clearUpdateRanges(),s.instanceMatrix.addUpdateRange(0,a*16),s.instanceColor.clearUpdateRanges(),s.instanceColor.addUpdateRange(0,a*3),s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0)},Nc.add(s),ef.set(t,n),n}function Br(i,e){return i.traverse(t=>{!yd(t)||t.userData.noOutline||(t.userData.olMiss=0,h_(t.geometry,e).parts.push(t))}),i}const gn=(i,e={})=>new Wt({color:i,flatShading:!0,...e});function cs(i){const e=i.map(o=>o.toNonIndexed()),t=e.reduce((o,a)=>o+a.attributes.position.count,0),n=new Float32Array(t*3);let s=0;for(const o of e)n.set(o.attributes.position.array,s),s+=o.attributes.position.array.length;const r=new Ft;return r.setAttribute("position",new Xt(n,3)),r.computeVertexNormals(),r}function f_(i,e,t,n,s,r){const o=r.id,{heightAt:a,pathDist:l,plinths:c}=e,u=e.lighthouse.pos,h=new qt,d=new Ce,p=[],g=(B,Me,he,je=2,Ke=5)=>l(B,Me)>he&&Math.hypot(B-u.x,Me-u.z)>Ke&&!c.some(Le=>Math.hypot(Le.x-B,Le.z-Me)<je),M=(B,Me,he=B*20)=>{const je=[];for(let Ke=0;Ke<he&&je.length<B;Ke++){const Le=(n()-.5)*104,et=(n()-.5)*104,rt=a(Le,et);Me(Le,et,rt)&&je.push({x:Le,z:et,h:rt,r:n(),s:n()})}return je},m=(B,Me,he,je,Ke=!1)=>{const Le=new wn(B,Me,Math.max(1,he.length));return Le.count=he.length,he.forEach((et,rt)=>{je(et,rt,Le),h.updateMatrix(),Le.setMatrixAt(rt,h.matrix)}),Le.instanceColor&&(Le.instanceColor.needsUpdate=!0),Le.castShadow=Ke,Le.receiveShadow=!0,i.add(Le),Le},f=(t.mobile?.55:1)*1.8,_=(()=>{const B=[[-.9,.5,.05],[-.45,.68,-.06],[0,.78,.02],[.45,.66,-.04],[.9,.48,.06]].map(([Ke,Le,et])=>{const rt=new ei(.045,Le,3);return rt.translate(0,Le/2,0),rt.rotateZ(Ke*.45),rt.rotateX(et*3),rt.translate(Ke*.09,0,et),rt}),Me=cs(B),he=Me.attributes.position,je=[];for(let Ke=0;Ke<he.count;Ke++){const Le=Mt.clamp(he.getY(Ke)/.7,0,1),et=.5+.7*Le;je.push(et,et,et*.95)}return Me.setAttribute("color",new ht(je,3)),Me})(),b=M(Math.round(150*f),(B,Me,he)=>he>.8&&g(B,Me,1.7,1.7,4.4)),x=m(_,gn("#ffffff",{vertexColors:!0}),b,(B,Me,he)=>{h.position.set(B.x,B.h-.05,B.z),h.rotation.set(0,B.r*6,0),h.scale.setScalar(.8+B.s*.7),he.setColorAt(Me,d.set(o==="vinter"?B.s<.5?"#c8d4c0":"#e6eef4":o==="vulkan"?B.s<.5?"#5a6a3a":"#7a7a4a":B.s<.5?"#6fb04a":"#8cc656"))});Ta(x,"tree");const C=M(Math.round((o==="vinter"?0:o==="vulkan"?30:36)*f),(B,Me,he)=>he>.85&&g(B,Me,1.9,2,4.5)),S=new jt(.025,.03,.4,4);S.translate(0,.2,0);const E=new ms(.11,0);E.translate(0,.42,0);const A=["#ff8fb0","#ffd54a","#ffffff","#b58cff","#ff7a4a"];if(m(S,gn("#5f8f3a"),C,B=>{h.position.set(B.x,B.h-.03,B.z),h.rotation.set(0,0,0),h.scale.setScalar(.9+B.s*.6)}),m(E,gn("#ffffff"),C,(B,Me,he)=>{h.position.set(B.x,B.h-.03,B.z),h.scale.setScalar(.9+B.s*.6),he.setColorAt(Me,d.set(A[Math.floor(B.r*A.length)]))}),o!=="vulkan"){const B=(()=>{const je=[],Ke=[];for(let rt=0;rt<8;rt++){const mt=rt/8*Math.PI*2,Gt=.32;je.push(0,0,0,Math.cos(mt)*.12,0,Math.sin(mt)*.12,Math.cos(mt-Gt)*.045,0,Math.sin(mt-Gt)*.045),je.push(0,0,0,Math.cos(mt+Gt)*.045,0,Math.sin(mt+Gt)*.045,Math.cos(mt)*.12,0,Math.sin(mt)*.12);for(let un=0;un<6;un++)Ke.push(1,1,1)}for(let rt=0;rt<6;rt++){const mt=rt/6*Math.PI*2,Gt=(rt+1)/6*Math.PI*2;je.push(0,.012,0,Math.cos(Gt)*.035,.012,Math.sin(Gt)*.035,Math.cos(mt)*.035,.012,Math.sin(mt)*.035);for(let un=0;un<3;un++)Ke.push(1,.78,.18)}const et=new Ft;return et.setAttribute("position",new ht(je,3)),et.setAttribute("color",new ht(Ke,3)),et.setAttribute("normal",new ht(new Array(je.length/3).fill(0).flatMap(()=>[0,1,0]),3)),et})(),Me=M(Math.round((o==="vinter"?10:70)*f),(je,Ke,Le)=>Le>.9&&g(je,Ke,1.6,2,4.5)),he=[];for(const je of Me){const Ke=3+Math.floor(je.r*5);for(let Le=0;Le<Ke;Le++){const et=n()*6.28,rt=Math.sqrt(n())*.85,mt=je.x+Math.cos(et)*rt,Gt=je.z+Math.sin(et)*rt,un=a(mt,Gt);un>.85&&g(mt,Gt,1.4,2,4.5)&&he.push({x:mt,z:Gt,h:un,r:n(),s:n()})}}m(B,new Wt({color:"#ffffff",vertexColors:!0,side:hn}),he,(je,Ke,Le)=>{h.position.set(je.x,je.h+.035,je.z),h.rotation.set((je.s-.5)*.3,je.r*6.28,0),h.scale.setScalar(1.3+je.s*.7),Le.setColorAt(Ke,d.setRGB(1,.97+je.r*.03,.94+je.s*.06))})}const y=M(Math.round((o==="tak"?36:0)*f),(B,Me,he)=>he>1&&g(B,Me,2.4,2.4,5)),v=new ti(.22,8,4,0,Math.PI*2,0,Math.PI/2);v.scale(1,.7,1),v.translate(0,.28,0);const T=new jt(.07,.09,.3,6);T.translate(0,.14,0),m(T,gn("#f4ead6"),y,B=>{h.position.set(B.x,B.h-.03,B.z),h.rotation.set(0,0,(B.r-.5)*.3),h.scale.setScalar(.8+B.s)},!0),m(v,gn("#ffffff"),y,(B,Me,he)=>{h.position.set(B.x,B.h-.03,B.z),h.rotation.set(0,0,(B.r-.5)*.3),h.scale.setScalar(.8+B.s),he.setColorAt(Me,d.set(B.r<.6?"#d8453a":"#c89a5a"))},!0);const N=cs([[-.08,0],[.07,.05],[0,-.07]].map(([B,Me],he)=>{const je=new ei(.04,1.1+he*.2,3);return je.translate(B,.55+he*.1,Me),je}).concat([(()=>{const B=new Fa(.05,.18,2,4);return B.translate(.07,1.25,.05),B})()])),L=M(Math.round(150*f),(B,Me,he)=>he>.05&&he<.55&&g(B,Me,2.2,2,5),6e3),U=m(N,gn(o==="vinter"?"#a89878":o==="vulkan"?"#5a5a3a":"#9aa856"),L,B=>{h.position.set(B.x,B.h-.1,B.z),h.rotation.set(0,B.r*6,0),h.scale.setScalar(.8+B.s*.6)}),W=[],G=[];for(const B of e.paths)for(const Me of[-1,1]){let he=null,je=0,Ke=0;for(let Le=2;Le<B.length-7;Le+=1.7){const et=Le/B.length,rt=B.curve.getPointAt(et),mt=B.curve.getTangentAt(et),Gt=rt.x-mt.z*Me*2.25,un=rt.z+mt.x*Me*2.25,Xn=a(Gt,un);if(!(Xn>.5&&Ke<=0&&g(Gt,un,1.9,2.6,6))){he=null,Ke>0&&Ke--;continue}W.push({x:Gt,z:un,h:Xn}),he&&G.push({a:he,b:{x:Gt,z:un,h:Xn}}),he={x:Gt,z:un,h:Xn},++je>4+Math.floor(n()*5)&&(je=0,he=null,Ke=3+Math.floor(n()*5))}}const z=new Bn(.14,.8,.14);z.translate(0,.4,0);const I=new Bn(1,.07,.06),Y=gn("#a07650");m(z,Y,W,B=>{h.position.set(B.x,B.h-.05,B.z),h.rotation.set(0,n()*.3,(n()-.5)*.12),h.scale.set(1,1,1)},!0);const $=G.flatMap(B=>[{...B,y:.32},{...B,y:.62}]);m(I,Y,$,({a:B,b:Me,y:he})=>{const je=Math.hypot(Me.x-B.x,Me.z-B.z);h.position.set((B.x+Me.x)/2,(B.h+Me.h)/2+he-.05,(B.z+Me.z)/2),h.rotation.set(0,-Math.atan2(Me.z-B.z,Me.x-B.x),0),h.scale.set(je,1,1)},!0);const ie=r.dockTheta??-2.35,ge=new Re(Math.cos(ie),Math.sin(ie)),Ne=s(ie);let H=Ne-6;for(let B=Ne-10;B<Ne+4;B+=.25)if(a(ge.x*B,ge.y*B)<.3){H=B;break}const Z=new bt,ue=gn("#b48a5e"),oe=gn("#6e4a2c"),me=8,De=H-2.5;for(let B=0;B<me/.55;B++){const Me=new lt(new Bn(.5,.12,2.2),ue);Me.position.set(De+B*.55,.75+(n()-.5)*.04,0),Me.rotation.y=(n()-.5)*.05,Me.castShadow=Me.receiveShadow=!0,Z.add(Me)}for(let B=0;B<=me;B+=2)for(const Me of[-1,1]){const he=new lt(new jt(.12,.12,2.2,6),oe);he.position.set(De+B,.1,Me*1.05),he.castShadow=!0,Z.add(he)}Z.rotation.y=-ie,i.add(Z);const Ee=new bt,Oe=new jt(.9,.9,3.4,10,1,!0,0,Math.PI);Oe.rotateZ(Math.PI/2),Oe.rotateX(Math.PI/2),Oe.scale(1,.6,.7);const fe=new lt(Oe,gn("#3f6f9a",{side:hn}));fe.rotation.y=Math.PI/2,fe.castShadow=!0,Ee.add(fe);for(const B of[-.6,.6]){const Me=new lt(new Bn(.3,.08,1.2),ue);Me.position.set(B,-.15,0),Ee.add(Me)}const _e=new lt(new Bn(2.4,.06,.12),ue);_e.position.set(.2,.05,.4),_e.rotation.y=.3,Ee.add(_e);const O=ge.x*(De+me-1)+-ge.y*2.1,Qe=ge.y*(De+me-1)+ge.x*2.1;Ee.position.set(O,.3,Qe),Ee.rotation.y=-ie,i.add(Ee);const be=new bt,Ge=new lt(new li(3,1.4,10,5),new zt({color:"#4a3a2a",wireframe:!0}));Ge.position.y=1;const Ie=Ge.geometry.attributes.position;for(let B=0;B<Ie.count;B++)Ie.setZ(B,Math.sin(Ie.getX(B)/3*Math.PI+1.5)*.15-Math.abs(Ie.getY(B))*.05);be.add(Ge);for(const B of[-1.6,1.6]){const Me=new lt(new jt(.07,.09,2,5),oe);Me.position.set(B,.9,0),Me.castShadow=!0,be.add(Me)}for(let B=0;B<5;B++){const Me=new lt(new ti(.09,6,4),gn("#f0a43a"));Me.position.set(-1.2+B*.6,1.66,.05),be.add(Me)}const nt=H-4.5,K=4.2,R=ge.x*nt-ge.y*K,w=ge.y*nt+ge.x*K;be.position.set(R,a(R,w)-.1,w),be.rotation.y=-ie+Math.PI/2,i.add(be),p.push({x:R,z:w,r:1.4});const X=new jt(.42,.42,.95,10);X.translate(0,.47,0);const ne=new jt(.44,.44,.08,10),se=new Bn(.8,.8,.8);se.translate(0,.4,0);const re=[],ke=(B,Me,he,je)=>{for(let Ke=0;Ke<60&&he>0;Ke++){const Le=B+(n()-.5)*6,et=Me+(n()-.5)*6,rt=a(Le,et);rt<.4||!g(Le,et,2.3,2.4,4.6)||re.some(mt=>Math.hypot(mt.x-Le,mt.z-et)<1.1)||(re.push({x:Le,z:et,h:rt,kind:je??(n()<.6?"barrel":"crate"),r:n()}),he--)}};ke(ge.x*(H-2.5),ge.y*(H-2.5),5),ke(u.x+6,u.z+1,3,"barrel"),ke(u.x-6,u.z+2,2);const we=re.filter(B=>B.kind==="barrel"),Ue=re.filter(B=>B.kind==="crate");m(X,gn("#8a5a36"),we,B=>{h.position.set(B.x,B.h-.05,B.z),h.rotation.set(0,B.r*6,0),h.scale.setScalar(1)},!0),m(ne,gn("#3e3a38"),we.flatMap(B=>[{...B,y:.2},{...B,y:.75}]),B=>{h.position.set(B.x,B.h-.05+B.y,B.z)},!1),m(se,gn("#b8925e"),Ue,B=>{h.position.set(B.x,B.h-.05,B.z),h.rotation.set(0,B.r*6,0),h.scale.setScalar(.8+B.r*.4)},!0);for(const B of re)p.push({x:B.x,z:B.z,r:.55});const ot=M(Math.round(380*f),(B,Me,he)=>he>.9&&g(B,Me,1.6,1.6,4.4)),Ae=new ms(.06,0);Ae.translate(0,.06,0),m(Ae,new Wt({color:o==="vulkan"?"#ff9a5a":"#fffdf4"}),ot,B=>{h.position.set(B.x,B.h-.02,B.z),h.rotation.set(0,0,0),h.scale.setScalar(.8+B.s*.8)});const qe=(B,Me,he)=>{const je=[];for(let Ke=0;Ke<B*40&&je.length<B;Ke++){const Le=(n()-.5)*130,et=(n()-.5)*130,rt=a(Le,et),mt=.05-rt;mt>Me&&mt<he&&Math.hypot(Le-u.x,et-u.z)>6&&je.push({x:Le,z:et,h:rt,r:n(),s:n()})}return je},at=cs([0,1,2].map(B=>{const Me=new ei(.08,.9+B*.25,3);return Me.translate((B-1)*.12,.45+B*.12,B%2*.1),Me.rotateZ((B-1)*.25),Me})),ut=qe(Math.round(90*f),.35,1.8),Je=m(at,gn("#4f9a5a"),ut,B=>{h.position.set(B.x,B.h,B.z),h.rotation.set(0,B.r*6,0),h.scale.setScalar(.8+B.s*.7)}),Et=cs([[0,0,.32],[.3,.1,.22],[-.25,.05,.26],[.05,.3,.2]].map(([B,Me,he])=>{const je=new ms(he,0);return je.translate(B,he*.8,Me),je})),ft=qe(Math.round((o==="tak"?28:0)*f),.5,1.6),St=["#b58cff","#ff8fa8","#ffc65a","#7fd6ff"];if(m(Et,gn("#ffffff"),ft,(B,Me,he)=>{h.position.set(B.x,B.h,B.z),h.rotation.set(0,B.r*6,0),h.scale.setScalar(.8+B.s*.9),he.setColorAt(Me,d.set(St[Math.floor(B.r*St.length)]))}),o==="tak"){const B=cs([[0,0,0,.55],[.12,.05,.4,.42],[-.13,-.04,-.45,.4],[.05,.12,.2,.33],[-.06,-.1,-.15,.36]].map(([Le,et,rt,mt])=>{const Gt=new ei(.05,mt,4);return Gt.translate(0,mt/2,0),Gt.rotateZ(rt),Gt.rotateX(et*2),Gt.translate(Le,0,et),Gt})),Me=cs([(()=>{const Le=new jt(.12,.16,.12,7);return Le.translate(0,.06,0),Le})(),...Array.from({length:7},(Le,et)=>{const rt=new ei(.025,.2,3),mt=et/7*6.28;return rt.translate(0,.1,0),rt.rotateZ(.5),rt.rotateY(mt),rt.translate(Math.cos(mt)*.08,.12,-Math.sin(mt)*.08),rt})]),he=M(Math.round(16*f),(Le,et,rt)=>.05-rt>.08&&e.landDist(Le,et)>5,3e4).map(Le=>({...Le,big:2.4,pool:!0})),je=[...qe(Math.round(36*f),.12,.9),...he],Ke=["#ff5a80","#a060ff","#ffb820","#ff5a2a","#ff7ad0","#f4d070"];m(B,gn("#ffffff"),je.filter((Le,et)=>et%2===0),(Le,et,rt)=>{h.position.set(Le.x,Le.h-.02,Le.z),h.rotation.set(0,Le.r*6,0),h.scale.setScalar((.8+Le.s*.8)*(Le.big??1)),rt.setColorAt(et,d.set(Ke[Math.floor(Le.r*Ke.length)]).multiplyScalar(Le.pool?1.6:1))}),m(Me,gn("#ffffff"),je.filter((Le,et)=>et%2===1),(Le,et,rt)=>{h.position.set(Le.x,Le.h-.02,Le.z),h.rotation.set(0,Le.r*6,0),h.scale.setScalar((.9+Le.s*.9)*(Le.big??1)),rt.setColorAt(et,d.set(Ke[(Math.floor(Le.s*Ke.length)+2)%Ke.length]).multiplyScalar(Le.pool?1.6:1))})}const j=cs([(()=>{const B=new ti(.17,7,4);return B.scale(1.2,.5,.85),B.translate(0,.07,0),B})(),...[-1,1].map(B=>{const Me=new ti(.06,5,3);return Me.scale(1.3,.7,1),Me.translate(B*.17,.08,.15),Me}),...[-1,1].flatMap(B=>[0,1,2].map(Me=>{const he=new Bn(.16,.02,.02);return he.rotateZ(B*-.5),he.translate(B*.18,.04,-.06+Me*.07),he})),...[-1,1].map(B=>{const Me=new ti(.025,4,3);return Me.translate(B*.05,.13,.09),Me})]),Fe=o==="vulkan"?[]:M(Math.round((o==="vinter"?5:18)*f),(B,Me,he)=>he>.08&&he<.42&&g(B,Me,2.2,2,5),12e3).map(B=>({...B,home:{x:B.x,z:B.z},dir:B.r*6.28,t:B.s*4,run:0})),le=m(j,gn(o==="vinter"?"#b8584a":"#d8553a"),Fe,B=>{h.position.set(B.x,B.h,B.z),h.rotation.set(0,B.dir,0),h.scale.setScalar(1)},!0),ye=cs([(()=>{const Me=new ti(.07,6,4);return Me.scale(.6,.5,1.4),Me})(),(()=>{const Me=new ei(.06,.1,3);return Me.rotateX(-Math.PI/2),Me.translate(0,0,-.13),Me})()]),He=[...qe(Math.round(26*f),.1,.8),...M(Math.round(12*f),(B,Me,he)=>.05-he>.12&&e.landDist(B,Me)>5,3e4).map(B=>({...B,big:1.5}))].map(B=>({...B,rad:.5+B.s*.9,sp:(.5+B.r)*(B.s<.5?1:-1)})),We=["#ff9a3a","#3a7ad8","#f2c94c","#2f8f9a"],dt=m(ye,gn("#ffffff"),He,(B,Me,he)=>{h.position.set(B.x,B.h,B.z),he.setColorAt(Me,d.set(We[Me%We.length]))}),Bt=new Lr(.16,0);Bt.scale(.45,.3,1.4);const Kt=qe(t.mobile?5:8,.9,2.6).map(B=>({...B,rad:2+B.s*3,speed:(.25+B.r*.3)*(B.r<.5?1:-1)})),At=9,pn=new wn(Bt,new zt({color:"#2f5f72",transparent:!0,opacity:.75}),Math.max(1,Kt.length*At));pn.count=Kt.length*At,pn.renderOrder=1,i.add(pn);const Nn=Array.from({length:At},()=>[(n()-.5)*1.4,(n()-.5)*.25,(n()-.5)*1.4,n()*6]),ci=B=>{Ee.position.y=.3+Math.sin(B*1.2)*.08,Ee.rotation.z=Math.sin(B*.9)*.04,Ee.rotation.x=Math.sin(B*1.3+1)*.03,Kt.forEach((he,je)=>{const Ke=B*he.speed+he.r*6,Le=he.x+Math.cos(Ke)*he.rad,et=he.z+Math.sin(Ke)*he.rad,rt=Math.atan2(-Math.sin(Ke)*he.speed,Math.cos(Ke)*he.speed);for(let mt=0;mt<At;mt++){const[Gt,un,Xn,P]=Nn[mt];h.position.set(Le+Gt+Math.sin(B*2+P)*.1,Math.max(a(Le,et)+.25,-.75)+un,et+Xn),h.rotation.set(0,rt+Math.sin(B*6+P)*.15,0),h.scale.setScalar(1),h.updateMatrix(),pn.setMatrixAt(je*At+mt,h.matrix)}}),pn.instanceMatrix.needsUpdate=!0,He.forEach((he,je)=>{const Ke=B*he.sp+he.r*6+Math.sin(B*.7+je)*.6,Le=he.x+Math.cos(Ke)*he.rad,et=he.z+Math.sin(Ke)*he.rad;h.position.set(Le,Math.min(a(Le,et)+.08,0),et),h.rotation.set(0,-Ke+(he.sp>0?0:Math.PI),Math.sin(B*9+je)*.2),h.scale.setScalar((.9+he.s*.5)*(he.big??1)),h.updateMatrix(),dt.setMatrixAt(je,h.matrix)}),dt.instanceMatrix.needsUpdate=!0;const Me=Math.min(.05,Math.max(0,B-(ci.last??B)));ci.last=B,Fe.forEach((he,je)=>{if(he.t-=Me,he.t<=0&&(he.run>0?(he.run=0,he.t=.8+Math.random()*2.5):(he.run=(Math.random()<.5?-1:1)*(.9+Math.random()*.8),he.t=.4+Math.random()*.9,Math.random()<.3&&(he.dir+=(Math.random()-.5)*1.5))),he.run){const Ke=he.x+Math.cos(he.dir)*he.run*Me,Le=he.z-Math.sin(he.dir)*he.run*Me,et=a(Ke,Le);et>.05&&et<.5&&Math.hypot(Ke-he.home.x,Le-he.home.z)<3.5?(he.x=Ke,he.z=Le,he.h=et):he.run=-he.run}h.position.set(he.x,he.h+(he.run?Math.abs(Math.sin(B*30+je))*.015:0),he.z),h.rotation.set(0,he.dir,he.run?Math.sin(B*30+je)*.08:0),h.scale.setScalar(1),h.updateMatrix(),le.setMatrixAt(je,h.matrix)}),le.instanceMatrix.needsUpdate=!0,!((B*60|0)%2)&&(L.forEach((he,je)=>{h.position.set(he.x,he.h-.1,he.z),h.rotation.set(Math.sin(B*1.7+he.x*.3)*.08,he.r*6,Math.cos(B*1.4+he.z*.3)*.08),h.scale.setScalar(.8+he.s*.6),h.updateMatrix(),U.setMatrixAt(je,h.matrix)}),U.instanceMatrix.needsUpdate=!0,ut.forEach((he,je)=>{h.position.set(he.x,he.h,he.z),h.rotation.set(Math.sin(B*1.1+he.x)*.12,he.r*6,Math.cos(B*.9+he.z)*.12),h.scale.setScalar(.8+he.s*.7),h.updateMatrix(),Je.setMatrixAt(je,h.matrix)}),Je.instanceMatrix.needsUpdate=!0)};Z.updateMatrixWorld(!0);const Yt=[];return Z.children.forEach(B=>{if(B.geometry.type==="CylinderGeometry"){const Me=B.getWorldPosition(new V);Yt.push({x:Me.x,z:Me.z,r:.15})}}),Yt.push({x:O,z:Qe,r:.9}),{colliders:p,update:ci,obstacles:Yt}}function tf(i,{heightTex:e,ext:t,grid:n,quality:s,sunDir:r,colors:o,level:a=.05,size:l=220,center:c=[0,0],maxDepth:u=100}){const h=_i.merge([Ye.fog,{uTime:{value:0},uHeight:{value:e},uExt:{value:t},uGrid:{value:n},uLevel:{value:a},uMaxDepth:{value:u},uShallow:{value:new Ce(o.shallow)},uMid:{value:new Ce(o.mid)},uDeep:{value:new Ce(o.deep)},uSun:{value:r.clone().normalize()},uCaustic:{value:(s.mobile?.8:1)*o.caustic}}]);h.uHeight.value=e;const d=new rn({uniforms:h,transparent:!0,depthWrite:!1,fog:!0,vertexShader:`
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
      }`}),p=l<50?8:s.mobile?40:64,g=new li(l,l,p,p);g.rotateX(-Math.PI/2);const M=new lt(g,d);return M.position.set(c[0],a,c[1]),M.renderOrder=2,i.add(M),{mesh:M,update(m){h.uTime.value=m}}}function nf(i,e){const t=new Na(Float32Array.from(i),e,e,Ia,bi);return t.magFilter=t.minFilter=An,t.generateMipmaps=!1,t.needsUpdate=!0,t}function Al(i,e=5){const t=[],n=[],s=new Ce,r=new Ce;for(let a=0;a<e;a++){const l=i()*Math.PI*2,c=i()*.16,u=.28+i()*.3,h=.04+i()*.03,d=Math.cos(l)*c,p=Math.sin(l)*c,g=(i()-.5)*.25,M=i()*Math.PI,m=Math.cos(M)*h,f=Math.sin(M)*h;t.push(d-m,0,p-f,d+m,0,p+f,d+Math.cos(l)*g,u,p+Math.sin(l)*g),s.setRGB(.72,.72,.72),r.setRGB(1.2,1.22,1.12),n.push(s.r,s.g,s.b,s.r,s.g,s.b,r.r,r.g,r.b)}const o=new Ft;return o.setAttribute("position",new ht(t,3)),o.setAttribute("color",new ht(n,3)),o.setAttribute("normal",new ht(new Array(t.length/3).fill(0).flatMap(()=>[0,1,0]),3)),o}function d_(){const i=[];for(let o=0;o<3;o++){const a=new ti(.07,6,3);a.scale(1,.25,1.15);const l=o*2.094;a.translate(Math.cos(l)*.065,.05,Math.sin(l)*.065),i.push(a.toNonIndexed())}const e=i.reduce((o,a)=>o+a.attributes.position.count,0),t=new Float32Array(e*3),n=new Float32Array(e*3);let s=0;for(const o of i)t.set(o.attributes.position.array,s*3),n.set(o.attributes.normal.array,s*3),s+=o.attributes.position.count;const r=new Ft;return r.setAttribute("position",new Xt(t,3)),r.setAttribute("normal",new Xt(n,3)),r}function p_(i,e,t,n,s){const{heightAt:r,pathDist:o,plinths:a}=e,l=e.lighthouse.pos,c={uTime:{value:0}},h=(T=>(T.onBeforeCompile=N=>{N.uniforms.uTime=c.uTime,N.vertexShader=N.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          #ifdef USE_INSTANCING
            vec2 ip = instanceMatrix[3].xz;
          #else
            vec2 ip = vec2(0.0);
          #endif
          float sway = sin(uTime * 1.8 + ip.x * 0.35 + ip.y * 0.27) * 0.6 + sin(uTime * 3.1 + ip.x * 1.3) * 0.25;
          transformed.x += sway * transformed.y * 0.22;
          transformed.z += cos(uTime * 1.5 + ip.y * 0.4) * transformed.y * 0.12;`),N.fragmentShader=N.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
  normal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);`)},T))(new Wt({vertexColors:!0,side:hn})),d=new Wt({color:"#ffffff"}),p=[Al(s,7),Al(s,8),Al(s,6)],g=d_(),M={tak:{grass:["#6cae48","#a2d05e"],density:.45,clover:.08,cloverCol:["#4f9c3e","#6cb850"]},vinter:{grass:["#9a9a7a","#c8c4a0"],density:.18,clover:0,cloverCol:["#fff","#fff"]},vulkan:{grass:["#4a5a30","#6a7a3a"],density:.35,clover:0,cloverCol:["#fff","#fff"]}}[n.id],m=(t.mobile?.45:1)*M.density,f=13,_=8,b=Math.round(720*m),x=[],C=new qt,S=new Ce,E=new Ce(M.grass[0]),A=new Ce(M.grass[1]),y=(T,N,L)=>{if(L<.72)return!1;const U=o(T,N);if(U<1||U<1.7&&s()<.6||Math.hypot(T-l.x,N-l.z)<4.3||n.volcano&&Math.hypot(T-n.volcano.x,N-n.volcano.z)<n.volcano.r*.7)return!1;for(const W of a)if((W.x-T)**2+(W.z-N)**2<2.6)return!1;return!e.extrasBlock||!e.extrasBlock(T,N)};for(let T=0;T<_;T++)for(let N=0;N<_;N++){const L=-_*f/2+T*f,U=-_*f/2+N*f;for(const[W,G]of[[0,b*.4],[1,b*.35],[2,b*.25]]){const z=[];for(let Y=0;Y<G*3&&z.length<G;Y++){const $=L+s()*f,ie=U+s()*f,ge=r($,ie);y($,ie,ge)&&z.push([$,ie,ge])}if(!z.length)continue;const I=new wn(p[W],h,z.length);I.userData.tier=W,z.forEach(([Y,$,ie],ge)=>{C.position.set(Y,ie-.04,$),C.rotation.set(0,s()*6.28,0),C.scale.setScalar(.8+s()*.7),C.updateMatrix(),I.setMatrixAt(ge,C.matrix),I.setColorAt(ge,S.copy(E).lerp(A,s()).multiplyScalar(e.shadeAt?e.shadeAt(Y,$):1))}),I.receiveShadow=!0,I.computeBoundingSphere(),i.add(I),x.push(I)}if(M.clover>0){const W=[],G=L+s()*f,z=U+s()*f;for(let I=0;I<b*M.clover*3&&W.length<b*M.clover;I++){const Y=G+(s()-.5)*6,$=z+(s()-.5)*6,ie=r(Y,$);y(Y,$,ie)&&W.push([Y,$,ie])}if(W.length){const I=new wn(g,d,W.length),Y=new Ce(M.cloverCol[0]),$=new Ce(M.cloverCol[1]);W.forEach(([ie,ge,Ne],H)=>{C.position.set(ie,Ne-.02,ge),C.rotation.set(0,s()*6.28,0),C.scale.setScalar(.8+s()*.8),C.updateMatrix(),I.setMatrixAt(H,C.matrix),I.setColorAt(H,S.copy(Y).lerp($,s()).multiplyScalar(e.shadeAt?e.shadeAt(ie,ge):1))}),I.receiveShadow=!0,I.userData.tier=1,I.computeBoundingSphere(),i.add(I),x.push(I)}}}return{update(T){c.uTime.value=T},setLevel:T=>x.forEach(N=>{N.visible=T==="high"||N.userData.tier===0,N.receiveShadow=T==="high"}),count:x.reduce((T,N)=>T+N.count,0)}}function sf(i,{arms:e=4,rStart:t=56,rEnd:n=4.2,turns:s=.7,a0:r=.35,steps:o=16}={}){const a=[];for(let l=0;l<e;l++){const c=r+l/e*Math.PI*2,u=[];for(let h=0;h<=o;h++){const d=h/o,p=t*(1-d)+n*d,g=c+d*s*Math.PI*2;u.push([i[0]+Math.cos(g)*p,i[1]+Math.sin(g)*p])}a.push(u)}return a}const m_={xc:i=>3*Math.sin(i*.06),w:4.2,bridgeZ:-20,top:50,wall:27},g_=[[[-15,56],[-17,40],[-13,24],[-17,8],[-14,-6],[-12,-18],[-11,-26],[-10,-33],[-10,-38.4]],[[17,56],[19,40],[15,24],[18,8],[15,-6],[12,-16],[5,-20],[-2,-20.5],[-8,-22],[-11,-26],[-10,-33],[-10,-38.4]]],v_=[90,210,330].map(i=>i*Math.PI/180),Ma=11,x_=()=>{const i=[];for(let t=0;t<=48;t++){const n=t/48*Math.PI*2;i.push([Math.cos(n)*Ma,Math.sin(n)*Ma])}const e=v_.map(t=>[Ma,20,30,40,50].map((n,s)=>{const r=t+Math.sin(n*.25+s)*.04;return[Math.cos(r)*n,Math.sin(r)*n]}));return[i,...e]},Ys=[{id:"tak",name:"Tåkeøya",blurb:"Palmer, turkis lagune og en joint som har glødd i hundre år.",seed:1,radius:46,edgeAmp:[4.5,2.6,1.5],lighthouse:[0,0],paths:sf([0,0]),plateausAuto:[{r:6.5,h:4.2},{r:5.5,h:3.4},{r:5,h:3}],waterfall:{poolR:1.9,basinR:2.7},palette:{sand:"#d8bb88",grass:"#8cc752",grass2:"#70ae45",path:"#d4b98a",deep:"#cdb987",pathMix:.35},water:{shallow:"#a6e6cc",mid:"#45c2ae",deep:"#1f9aa2",caustic:1},sky:{fog:"#c4d8dc",hemiSky:"#dce9ff",hemiGround:"#5a6650",hemi:1.35,sun:"#ffeccc",sunI:2.25,exposure:.92,sunDir:[14,30,10],lantern:.9,grade:{tint:[1.02,1,.965],lift:[.008,.02,.035],sat:.92,vignette:.2}},skyDusk:{fog:"#d9a48e",hemiSky:"#ffd6b0",hemiGround:"#5a4a72",hemi:1.35,sun:"#ffb27a",sunI:2.7,exposure:1.05,sunDir:[24,17,4],grade:{tint:[1.07,1,.9],lift:[.025,.008,.03],sat:1.1,vignette:.3}},trees:{beach:{palm:.75,bush:.25},inland:{palm:.25,round:.45,bush:.3},leaf:["#a2cc5c","#357238"]},rock:["#b6bab8","#7f9f52"],life:["fireflies","butterflies","birds","leaves"],balance:{hp:1.3,count:1.25,speed:1,air:.5,types:{clerk:{hp:.7},complainer:{hp:.7},tank:{hp:.65},gull:{hp:.75}},extra:null},intro:{complainer:2,drone:3,lobbyist:5,heli:6,auditor:7,balloon:8}},{id:"vinter",name:"Vinterfjorden",blurb:"Snø, nordlys og isflak. Forbudsdirektoratet har kledd seg varmt.",seed:2,radius:47,edgeAmp:[3.5,3.2,2.2],lighthouse:[-10,-42.5],paths:g_,shape:"fjord",fjord:m_,nes:{x:-10,z0:-20,z1:-45,r:6.5},dockTheta:-1.2,icy:!0,palette:{sand:"#b9bec4",grass:"#f1f5fa",grass2:"#dfe8f2",path:"#c2ccd8",deep:"#9aa8b4"},water:{shallow:"#b8e2ee",mid:"#5a9cc0",deep:"#1d3f66",caustic:.55},sky:{fog:"#2a3550",hemiSky:"#9fb8ff",hemiGround:"#1c2440",hemi:1.1,sun:"#b8ccff",sunI:1.5,exposure:1.15,sunDir:[-12,26,8],grade:{tint:[.96,1,1.06],lift:[0,.01,.03],sat:1.05,vignette:.32}},trees:{beach:{pine:.6,bush:.4},inland:{pine:.8,bush:.2},leaf:["#e8f0f8","#2c5a44"]},rock:["#a9b2bc","#eef4fa"],life:["snow","aurora","icefloes"],balance:{hp:1.5,count:1.2,speed:.97,types:{tank:{hp:.95},clerk:{hp:1},lobbyMini:{hp:.9}},extra:{type:"tank",n:1,gap:4,path:"both",from:3}},intro:{balloon:3,auditor:4,lobbyist:5,drone:5,heli:6,complainer:6}},{id:"vulkan",name:"Vulkanøya",blurb:"Svart sand, lava-elver og glødende stein. Her trenger ingen fyrstikker.",seed:3,radius:48,edgeAmp:[3.5,2.2,1.6],lighthouse:[0,0],dockTheta:.5,paths:sf([0,0],{arms:3,rStart:56,rEnd:4.4,turns:.75,a0:Math.PI/6,steps:24}),lava:x_(),moat:Ma,eruption:{every:60,closed:10},fog:[38,100],palette:{sand:"#3a3533",grass:"#5a6a3c",grass2:"#3f4c2e",path:"#3e3b3a",deep:"#2c2826",pathMix:.15},water:{shallow:"#5a8f90",mid:"#2c5a63",deep:"#122b35",caustic:.4},sky:{fog:"#4a2c2a",hemiSky:"#ff9a6a",hemiGround:"#2a1a1a",hemi:1.15,sun:"#ff7a40",sunI:2.3,exposure:1.1,sunDir:[20,20,6],grade:{tint:[1.05,.98,.94],lift:[.02,0,0],sat:1.08,vignette:.32}},trees:{beach:{dead:.5,bush:.5},inland:{dead:.45,palm:.2,bush:.35},leaf:["#7a9a4a","#2f4a2a"]},rock:["#2e2a2a","#5a3a2a"],life:["ash","embers"],balance:{hp:1.25,count:1.1,speed:1,air:.6,types:{lobbyist:{hp:.6},lobbyMini:{hp:.6},clerk:{hp:.72},complainer:{hp:.72},gull:{hp:.75},drone:{hp:.8}},extra:{type:"gull",n:1,gap:1.4,from:3}},intro:{complainer:2,drone:2,lobbyist:3,heli:4,auditor:5,balloon:7}}];function __(i){const[e,t,n]=i.edgeAmp,s=i.seed;return r=>i.radius+e*Math.sin(3*r+.4*s)+t*Math.sin(7*r+1.3*s)+n*Math.sin(11*r+s)}const rf={clerk:["complainer","lobbyist"],swarm:["complainer"],tank:["auditor","lobbyist"],gull:["drone","heli","balloon"]},Cl={clerk:22,swarm:7,tank:95,gull:16,complainer:17,lobbyist:97,auditor:112,drone:9,heli:62,balloon:150},Rl={complainer:.6,lobbyist:1.8,auditor:2.2,drone:.4,heli:2.4,balloon:3.5};function M_(i,e){let t=i.seed*9301+49297;const n=()=>(t=(t*9301+49297)%233280)/233280,s=i.intro||{};return e.map((r,o)=>{const a=o+1,l=r.map(d=>({...d})),c=i.balance.extra;c&&a>=c.from&&l.push({...c,n:c.n+Math.floor((a-c.from)/2),at:5});const u=(d,p,g)=>Math.max(1,Math.round(d*Math.min(1,Cl[p]/Cl[g]))),h=(d,p)=>{d.n=u(d.n,d.type,p),d.gap=Rl[p]??d.gap,d.type=p};for(const[d,p]of Object.entries(s)){if(p!==a)continue;const g=l.find(M=>{var m;return(m=rf[M.type])==null?void 0:m.includes(d)});if(g&&g.n>=2){const M=Math.floor(g.n/2);l.push({...g,type:d,n:u(M,g.type,d),gap:Rl[d]??g.gap,at:(g.at??0)+2}),g.n-=M}else g?h(g,d):l.push({type:d,n:Math.max(1,Math.min(3,Math.round(44/Cl[d]))),gap:Rl[d],path:0,at:6})}for(const d of l){const p=(rf[d.type]||[]).filter(g=>s[g]&&s[g]<a);p.length&&n()<.45&&h(d,p[Math.floor(n()*p.length)])}return l})}function xo(){try{return Math.max(1,Math.min(Ys.length,Number(localStorage.getItem("glod-unlocked"))||1))}catch{return 1}}function y_(i){try{i+2>xo()&&localStorage.setItem("glod-unlocked",String(Math.min(Ys.length,i+2)))}catch{}}function sa(i,e,{color:t,size:n,speed:s,drift:r,additive:o,area:a=46,top:l=22}){const c=new Float32Array(e*3),u=new Float32Array(e);for(let f=0;f<e;f++)c[f*3]=(Math.random()-.5)*a*2,c[f*3+1]=Math.random()*l,c[f*3+2]=(Math.random()-.5)*a*2,u[f]=Math.random()*6.28;const h=new Ft;h.setAttribute("position",new Xt(c,3));const d=document.createElement("canvas");d.width=d.height=32;const p=d.getContext("2d"),g=p.createRadialGradient(16,16,0,16,16,16);g.addColorStop(0,"rgba(255,255,255,1)"),g.addColorStop(1,"rgba(255,255,255,0)"),p.fillStyle=g,p.fillRect(0,0,32,32);const M=new ka({color:t,size:n,map:new wi(d),transparent:!0,depthWrite:!1,blending:o?Ti:ds,opacity:o?1:.85}),m=new du(h,M);return m.frustumCulled=!1,i.add(m),(f,_,b)=>{for(let x=0;x<e;x++){let C=c[x*3+1]-s*f*(.7+u[x]%1*.6);c[x*3]+=Math.sin(b*.7+u[x])*r*f,(s<0?C>l:C<0)&&(C=s<0?0:l,c[x*3]=_.x+(Math.random()-.5)*a*2,c[x*3+2]=_.z+(Math.random()-.5)*a*2),c[x*3+1]=C}h.attributes.position.needsUpdate=!0}}function b_(i,e,t,n,s=160){const r=new gu(i.map(([h,d])=>new V(h,0,d))),o=r.getLength(),a=[],l=[],c=[];for(let h=0;h<=s;h++){const d=h/s,p=r.getPointAt(d),g=r.getTangentAt(d),M=-g.z,m=g.x,f=e*(.75+.25*Math.sin(d*9));for(const _ of[-1,1]){const b=p.x+M*f*_,x=p.z+m*f*_;a.push(b,t(b,x)+n,x),l.push(d*o,(_+1)/2)}if(h<s){const _=h*2;c.push(_,_+1,_+2,_+1,_+3,_+2)}}const u=new Ft;return u.setAttribute("position",new ht(a,3)),u.setAttribute("uv",new ht(l,2)),u.setIndex(c),u.computeVertexNormals(),{geo:u,curve:r,len:o}}function S_(i,e,t,n){var M;const{heightAt:s}=e,r=[],o=[],a=[],l=[],c=[],u=t.mobile?.5:1,h=new Set(n.life);if(h.has("aurora")){const m=new rn({transparent:!0,depthWrite:!1,blending:Ti,side:hn,fog:!1,uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const[f,_,b]of[[0,-66,0],[-62,-20,Math.PI/2.4],[62,-24,-Math.PI/2.4]]){const x=new lt(new li(150,26,96,1),m);x.position.set(f,20,_),x.rotation.y=b,i.add(x)}o.push((f,_,b)=>m.uniforms.uTime.value=b)}if(h.has("snow")&&o.push(sa(i,Math.round(900*u),{color:"#ffffff",size:.28,speed:2.2,drift:.8})),h.has("ash")&&o.push(sa(i,Math.round(500*u),{color:"#6a625e",size:.22,speed:1.2,drift:.6})),h.has("embers")&&o.push(sa(i,Math.round(160*u),{color:"#ff8a3a",size:.25,speed:-1.6,drift:1.2,additive:!0,top:10})),h.has("icefloes")){const m=[];for(let C=0;C<6e3&&m.length<70*u;C++){const S=(Math.random()-.5)*120,E=(Math.random()-.5)*120,A=.05-s(S,E);A>.15&&A<1.4&&m.every(y=>Math.hypot(y.x-S,y.z-E)>2.2)&&m.push({x:S,z:E,s:.6+Math.random()*1.1,r:Math.random()*6})}const f=new jt(1,.9,.18,7),_=f.attributes.position;for(let C=0;C<_.count;C++){const S=Math.atan2(_.getZ(C),_.getX(C)),E=.75+.35*Math.abs(Math.sin(S*2.3+C));_.setX(C,_.getX(C)*E),_.setZ(C,_.getZ(C)*E)}f.computeVertexNormals();const b=new wn(f,new Wt({color:"#eaf6ff"}),Math.max(1,m.length));b.count=m.length,b.receiveShadow=!0,i.add(b);const x=new qt;o.push((C,S,E)=>{m.forEach((A,y)=>{x.position.set(A.x+Math.sin(E*.1+A.r)*.4,.08+Math.sin(E*1.1+A.r)*.03,A.z),x.rotation.set(Math.sin(E*.9+A.r)*.03,A.r+E*.02,Math.cos(E*.8+A.r)*.03),x.scale.set(A.s,1,A.s),x.updateMatrix(),b.setMatrixAt(y,x.matrix)}),b.instanceMatrix.needsUpdate=!0})}if(n.lava){const m=new rn({uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const x of n.lava){const C=b_(x,1.25,s,.07);i.add(new lt(C.geo,m));const S=[];let E=!1;for(let A=0;A<=1;A+=1.4/C.len){const y=C.curve.getPointAt(Math.min(1,A));if(e.pathDist(y.x,y.z)<2.4){E||c.push({x:y.x,z:y.z,tan:C.curve.getTangentAt(Math.min(1,A))}),E=!0;continue}E=!1,a.push({x:y.x,z:y.z,r:1.4})}for(const A of[.25,.7]){const y=C.curve.getPointAt(A),v=new vo("#ff6a2a",14,12,1.6);v.position.set(y.x,s(y.x,y.z)+1.2,y.z),i.add(v),S.push(v)}o.push((A,y,v)=>S.forEach((T,N)=>T.intensity=12+3*Math.sin(v*2.3+N)))}o.push((x,C,S)=>m.uniforms.uTime.value=S);const f=new Bn(3.4,.35,4.2),_=new Wt({color:((M=n.rock)==null?void 0:M[0])??"#555"}),b=new jt(2.4,2.4,.1,18);for(const x of c){const C=s(x.x,x.z)+.12,S=new lt(f,_);S.position.set(x.x,C,x.z),S.rotation.y=-Math.atan2(x.tan.z,x.tan.x),S.castShadow=S.receiveShadow=!0,i.add(S);const E=new lt(b,new zt({color:new Ce("#ff5a1a").multiplyScalar(2.2),transparent:!0,opacity:0}));E.position.set(x.x,C+.25,x.z),E.visible=!1,i.add(E);const A=new vo("#ff6a2a",0,14,1.6);A.position.set(x.x,C+1.6,x.z),i.add(A);let y=!1;l.push({x:x.x,z:x.z,get closed(){return y},setClosed(v){y=v,E.visible=v}}),o.push((v,T,N)=>{const L=y?1:0;E.material.opacity+=(L*.9-E.material.opacity)*Math.min(1,v*3),!y&&E.material.opacity<.02&&(E.visible=!1),A.intensity=E.material.opacity*(22+6*Math.sin(N*9))})}}if(n.volcano){const m=n.volcano;a.push({x:m.x,z:m.z,r:m.r*.55});const f=new lt(new Pr(m.r*.22,20),new zt({color:new Ce("#ff5a1a").multiplyScalar(2.4)}));f.rotation.x=-Math.PI/2,f.position.set(m.x,s(m.x,m.z)+.2,m.z),i.add(f);const _=new Oa(.35,0),b=[];for(let S=0;S<3e3&&b.length<50*u;S++){const E=(Math.random()-.5)*96,A=(Math.random()-.5)*96,y=s(E,A);y>.4&&e.pathDist(E,A)>2.2&&b.push({x:E,z:A,h:y,s:.5+Math.random()})}const x=new wn(_,new zt({color:new Ce("#ff7a2a").multiplyScalar(1.8)}),Math.max(1,b.length));x.count=b.length;const C=new qt;b.forEach((S,E)=>{C.position.set(S.x,S.h,S.z),C.rotation.set(S.s,S.s*3,0),C.scale.set(S.s,S.s*.5,S.s),C.updateMatrix(),x.setMatrixAt(E,C.matrix)}),i.add(x)}if(n.waterfall&&n.waterfall._lvl!==void 0){const m=n.waterfall,f=m.basin[0]-m.lip[0],_=m.basin[1]-m.lip[1],b=Math.hypot(f,_),x=f/b,C=_/b,S=m._lvl-.1,E=14,A=1.25,y=[],v=[],T=[];for(let Y=0;Y<=E;Y++){const $=Y/E,ie=.35+1.5*$*$,ge=S-(S-.06)*($*$*.6+$*.4);for(const Ne of[-1,1])y.push(m.lip[0]+x*ie-C*A*Ne*(.85+$*.3),ge,m.lip[1]+C*ie+x*A*Ne*(.85+$*.3)),v.push((Ne+1)/2,$);if(Y<E){const Ne=Y*2;T.push(Ne,Ne+1,Ne+2,Ne+1,Ne+3,Ne+2)}}const N=new Ft;N.setAttribute("position",new ht(y,3)),N.setAttribute("uv",new ht(v,2)),N.setIndex(T);const L=new rn({transparent:!0,depthWrite:!1,side:hn,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform float uTime; varying vec2 vUv;
        float h(float x) { return fract(sin(x * 127.1) * 43758.5); }
        void main() {
          float col = floor(vUv.x * 18.0);
          float streak = fract(vUv.y * (1.6 + h(col) * 1.2) - uTime * (1.4 + h(col + 3.0) * 0.8));
          float s = smoothstep(0.0, 0.25, streak) * (1.0 - smoothstep(0.55, 1.0, streak));
          float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
          vec3 c = mix(vec3(0.45, 0.85, 0.88), vec3(1.0), s * 0.8 + vUv.y * 0.3);
          gl_FragColor = vec4(c, (0.55 + 0.4 * s) * edge);
        }`});i.add(new lt(N,L));const U=(()=>{const Y=document.createElement("canvas");Y.width=Y.height=128;const $=Y.getContext("2d"),ie=(()=>{let Ne=9;return()=>(Ne=Ne*16807%2147483647)/2147483647})();for(let Ne=0;Ne<260;Ne++){const H=ie()*Math.PI*2,Z=Math.pow(ie(),.7)*58,ue=1.5+ie()*5*(1-Z/70);$.fillStyle=`rgba(255,255,255,${.55+ie()*.45})`,$.beginPath(),$.arc(64+Math.cos(H)*Z,64+Math.sin(H)*Z,ue,0,Math.PI*2),$.fill()}$.globalCompositeOperation="destination-in";const ge=$.createRadialGradient(64,64,8,64,64,63);return ge.addColorStop(0,"rgba(0,0,0,1)"),ge.addColorStop(.6,"rgba(0,0,0,0.85)"),ge.addColorStop(1,"rgba(0,0,0,0)"),$.fillStyle=ge,$.fillRect(0,0,128,128),new wi(Y)})(),W=new lt(new Pr(1.5,20),new zt({map:U,color:"#ffffff",transparent:!0,opacity:.9,depthWrite:!1}));W.rotation.x=-Math.PI/2;const G=m.lip[0]+x*1.9,z=m.lip[1]+C*1.9;W.position.set(G,.1,z),i.add(W);const I=sa(i,Math.round(60*u),{color:"#ffffff",size:.35,speed:-.9,drift:.6,area:1.4,top:2.2});o.push((Y,$,ie)=>{L.uniforms.uTime.value=ie,W.scale.setScalar(1+Math.sin(ie*5)*.06),W.rotation.z=ie*.4,W.material.opacity=.8+.12*Math.sin(ie*7),I(Y,{x:G,z},ie)}),a.push({x:G,z,r:.9})}const d=(m,f)=>a.some(_=>(_.x-m)**2+(_.z-f)**2<_.r*_.r);let p=0;return{colliders:r,update:(m,f=e.lighthouse.pos)=>{const _=Math.min(.05,Math.max(0,m-p));p=m;for(const b of o)b(_,f,m)},blocks:d,blockers:a,bridges:l}}const gt=(i,e={})=>new Wt({color:i,flatShading:!0,...e}),fr=(i,e)=>new zt({color:new Ce(i).multiplyScalar(e)}),de={coat:gt("#f2c23c"),coatDark:gt("#c99a22"),skin:gt("#f1c7a0"),beanieG:gt("#3f8f4a"),beanieY:gt("#f2c94c"),beanieR:gt("#d4553a"),boot:gt("#3a2c22"),eyeW:new zt({color:"#ffffff"}),eyeB:new zt({color:"#1c1820"}),suit:gt("#6b6f78"),suitDark:gt("#3c4150"),suitNavy:gt("#2c3a5c"),shirt:gt("#f4f1ea"),tie:gt("#b8322a"),paper:gt("#fbfaf4"),stampInk:gt("#a8233a"),woodLight:gt("#c49360"),glasses:gt("#222428"),binderR:gt("#c94f3f"),binderB:gt("#3f6fc9"),binderY:gt("#e6b93f"),gull:gt("#f4f2ee"),gullWing:gt("#c4ccd4"),gullTip:gt("#2e3038"),gullBand:gt("#8e98a4"),beak:gt("#f0a43a"),megaRed:gt("#d8453a"),mouth:new zt({color:"#4a2a2a"}),smile:new zt({color:"#c8485a"}),wood:gt("#9a6a42"),woodDark:gt("#6e4a2c"),iron:gt("#55585e"),speaker:gt("#2a2a30"),cone:gt("#4a4a52"),rasG:gt("#3f9a4a"),rasY:gt("#f2c94c"),rasR:gt("#d4553a"),chipsBag:gt("#f2b632"),chipsRed:gt("#d8453a"),chip:gt("#f0c860"),ringMat:new Wt({color:"#f1efe9",transparent:!0,opacity:.8}),ember:fr("#ff9a3a",2.4),emberCore:fr("#fff1c2",2),rolling:gt("#5a9a5a"),rollingPaper:gt("#fffdf5"),lantern:fr("#ffd27a",2.2),hpBg:new zt({color:"#2a2020",depthTest:!1,transparent:!0,opacity:.6}),hpFg:new zt({color:"#d8553a",depthTest:!1}),levelPip:fr("#9fffb0",1.6),bottle:new Wt({color:"#7fd6ff",transparent:!0,opacity:.8}),bubble:new Wt({color:"#dff6ff",transparent:!0,opacity:.45,emissive:"#5a7a9a"}),kiteSail:new Wt({color:"#ff7a5a",side:hn}),rope:gt("#d9c8a0"),ledger:gt("#2f5a3a"),track:gt("#8a4ac8"),briefcase:gt("#6a3a1a"),brass:gt("#d8b040"),rotor:new zt({color:"#cfd6dc",transparent:!0,opacity:.45}),redLight:fr("#ff3030",2),balloonA:gt("#e8e4d8"),balloonB:gt("#c8463a"),heli:gt("#f2c23c"),glassDark:gt("#2a3440"),spot:new zt({color:"#fff6c8",transparent:!0,opacity:.18,blending:Ti,depthWrite:!1,side:hn}),pizza:gt("#e8603a"),pizzaCrust:gt("#e8b866"),lampGlass:new Wt({color:"#ff8a5a",transparent:!0,opacity:.45,emissive:"#6a1a10"}),lampBlob:fr("#ff9a2a",2.2)},ve={sphere:new ti(1,10,8),lowSphere:new ms(1,1),capsule:new Fa(.5,.7,3,8),cyl:new jt(1,1,1,10),cone:new ei(1,1,10),box:new Bn(1,1,1),dome:new ti(1,10,6,0,Math.PI*2,0,Math.PI/2),ember:new Lr(.22,0),leaf:new Lr(.3,0),plane:new li(1,1),smileArc:new Mr(.06,.018,4,10,Math.PI),ring:new Mr(.32,.12,6,14),bubbleRing:new Mr(.18,.025,4,12)};function xe(i,e,t,n,s,r=0,o=0,a=0,l=!0){const c=new lt(i,e);return c.scale.set(t,n,s),c.position.set(r,o,a),c.castShadow=l,c}function yu(i,e,t,n,s=.12,r=.18){const o=new bt;o.position.set(e,t,n),o.userData.isEyes=!0;for(const a of[-1,1])o.add(xe(ve.sphere,de.eyeW,s,s,s,a*r,0,0,!1)),o.add(xe(ve.sphere,de.eyeB,s*.55,s*.55,s*.55,a*r,.01,-s*.7,!1));return i.add(o),o}const bd=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,31);return t.addColorStop(0,"rgba(0,0,0,0.55)"),t.addColorStop(.6,"rgba(0,0,0,0.25)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new wi(i)})(),w_=new zt({map:bd,transparent:!0,depthWrite:!1,fog:!1}),Sd=new li(1,1).rotateX(-Math.PI/2);function bu(i,e){const t=new lt(Sd,w_);t.scale.set(e*2,1,e*2),t.position.y=.04,t.renderOrder=1,i.add(t),i.userData.blob=t}function E_(i,e,t=.8){const n=new zt({map:bd,color:"#000000",transparent:!0,opacity:t,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),s=new wn(Sd,n,Math.max(1,e.length));s.count=e.length;const r=new qt;return e.forEach((o,a)=>{r.position.set(o.x,o.y+.04,o.z),r.scale.set(o.r*2,1,o.r*2),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.renderOrder=1,i.add(s),s}function wd(i){const e=[];i.traverse(t=>{t.userData.isEyes&&e.push(t)}),i.userData.eyes=e}function Ed(i,e,t,n=1){const s=xe(ve.box,de.mouth,.14*n,.025*n,.02,0,e,t,!1);s.rotation.z=.15;const r=xe(ve.smileArc,de.smile,n,n,n,0,e+.03*n,t,!1);return r.rotation.z=Math.PI,r.visible=!1,i.add(s,r),{sour:s,smile:r}}const T_=(()=>{const i=new jt(.07,.05,.55,8);return i.rotateZ(Math.PI/2),i})();function Td(){const i=new bt,e=xe(ve.box,de.rollingPaper,.55,.012,.26,0,0,0,!1),t=xe(ve.lowSphere,de.rasG,.22,.06,.07,0,.03,0,!1),n=new lt(T_,de.rollingPaper),s=xe(ve.cone,de.rollingPaper,.05,.1,.05,.32,0,0,!1);return s.rotation.z=-Math.PI/2,n.add(s),i.add(e,t,n),i.userData={paper:e,herb:t,joint:n,tip:s},Su(i,0),i}function Su(i,e){const{paper:t,herb:n,joint:s,tip:r}=i.userData,o=Mt.smoothstep,a=o(e,.08,.45),l=o(e,.5,.85);t.visible=l<.98,t.scale.set(.55,.012,.26*(1-.7*l)),n.visible=a>.01&&l<.98,n.scale.set(.22*a+.001,.06*a+.001,.07*(1-.5*l)+.001),s.visible=l>.02,s.scale.set(1,.35+.65*l,.35+.65*l),r.visible=e>.88}function Ad(){const i=new bt,e=new bt;i.add(e),e.add(xe(ve.capsule,de.coat,.75,.75,.7,0,.75,0)),e.add(xe(ve.cyl,de.coatDark,.4,.06,.38,0,.62,0));const t=new bt;t.position.y=1.62,t.scale.setScalar(1.22),t.add(xe(ve.sphere,de.skin,.33,.32,.32)),t.add(xe(ve.cyl,de.beanieG,.35,.1,.35,0,.14,0)),t.add(xe(ve.cyl,de.beanieY,.31,.1,.31,0,.24,0)),t.add(xe(ve.dome,de.beanieR,.27,.22,.27,0,.29,0)),t.add(xe(ve.sphere,de.beanieY,.08,.08,.08,0,.52,0)),yu(t,0,.02,-.26,.07,.12);const n=Ed(t,-.12,-.3,.8);n.sour.visible=!1,n.smile.visible=!0,e.add(t);const s=[-1,1].map(h=>{const d=xe(ve.capsule,de.boot,.24,.32,.24,h*.18,.2,0);return e.add(d),d}),r=new bt;r.position.set(.48,1,-.1),r.add(xe(ve.box,de.iron,.2,.28,.2,0,-.25,0)),r.add(xe(ve.sphere,de.lantern,.1,.13,.1,0,-.25,0,!1)),e.add(r);const o=new bt;o.position.set(-.46,1.08,0),o.add(xe(ve.capsule,de.coat,.16,.34,.16,0,-.28,0)),o.add(xe(ve.sphere,de.skin,.1,.1,.1,0,-.52,0)),e.add(o);const a=new bt;a.add(xe(ve.box,de.rolling,.7,.12,.42,0,0,0,!1)),a.add(xe(ve.box,de.rollingPaper,.6,.08,.36,.06,.08,0,!1)),a.add(xe(ve.leaf,de.rasG,.35,.05,.35,-.12,.07,0,!1)),a.position.y=2.35,a.visible=!1,i.add(a);const l=new bt;l.position.y=2;for(let h=0;h<3;h++)l.add(xe(ve.ember,de.emberCore,.6,.6,.6,Math.cos(h*2.1)*.45,0,Math.sin(h*2.1)*.45,!1));l.visible=!1,i.add(l);const c=new bt;c.position.set(.46,1.08,0),c.add(xe(ve.capsule,de.coat,.16,.34,.16,0,-.28,0)),c.add(xe(ve.sphere,de.skin,.1,.1,.1,0,-.52,0)),c.visible=!1,e.add(c);const u=Td();return u.position.set(0,1,-.62),u.scale.setScalar(1.6),u.visible=!1,e.add(u),bu(i,.62),i.userData={body:e,legs:s,head:t,lanternArm:r,armL:o,armR:c,roll:u,carried:a,stars:l,blob:i.userData.blob},wd(i),i}function Ci(i,e){const t=new bt;t.position.y=e;const n=new lt(ve.plane,de.hpBg);n.scale.set(1,.14,1),n.renderOrder=10;const s=new lt(ve.plane,de.hpFg.clone());s.scale.set(.96,.09,1),s.position.z=.001,s.renderOrder=11,t.add(n,s),t.visible=!1,i.add(t),i.userData.hpBar=t,i.userData.hpFg=s}function dr(i,{scale:e=1,suit:t=de.suit,wide:n=1}={}){const s=e;i.add(xe(ve.capsule,t,.7*s*n,.62*s,.6*s,0,.72*s,0)),i.add(xe(ve.box,de.shirt,.22*s,.4*s,.05,0,.98*s,-.27*s*Math.min(n,1.2),!1)),i.add(xe(ve.box,de.tie,.07*s,.32*s,.05,0,.94*s,-.29*s*Math.min(n,1.2),!1));for(const a of[-1,1])i.add(xe(ve.capsule,de.suitDark,.2*s,.25*s,.2*s,a*.16*s,.17*s,0));const r=new bt;r.position.y=1.5*s,r.add(xe(ve.sphere,de.skin,.3*s,.3*s,.3*s)),r.add(xe(ve.dome,de.suitDark,.31*s,.14*s,.31*s,0,.12*s,.02)),yu(r,0,.03*s,-.25*s,.065*s,.11*s);const o=Ed(r,-.12*s,-.28*s,s);return i.add(r),{head:r,mouth:o}}function A_(i){const e=new bt,t=new bt;if(e.add(t),e.userData.body=t,i==="clerk"){const{head:n,mouth:s}=dr(t);for(const a of[-1,1])n.add(xe(ve.box,de.glasses,.11,.07,.02,a*.11,.03,-.3,!1));n.add(xe(ve.box,de.glasses,.08,.015,.02,0,.04,-.3,!1));const r=new bt;r.position.set(.48,.9,-.15),r.add(xe(ve.cyl,de.woodLight,.06,.25,.06,0,.12,0)),r.add(xe(ve.sphere,de.woodLight,.09,.09,.09,0,.27,0)),r.add(xe(ve.box,de.stampInk,.22,.08,.16,0,-.02,0)),t.add(r);const o=xe(ve.box,de.paper,.3,.38,.02,-.46,.92,-.2);o.rotation.y=.4,t.add(o),e.userData.mouth=s,e.userData.arm=r,Ci(e,2.15)}else if(i==="tank"){const{mouth:n}=dr(t,{scale:1.25,suit:de.suitNavy,wide:1.45}),s=new bt;s.position.set(0,0,-.95),s.add(xe(ve.box,de.woodDark,.75,1.05,.45,0,.52,0));const r=xe(ve.box,de.woodLight,.9,.08,.6,0,1.1,.04);r.rotation.x=.35,s.add(r),s.add(xe(ve.cyl,de.iron,.02,.45,.02,.18,1.3,.1,!1)),s.add(xe(ve.sphere,de.speaker,.05,.05,.05,.18,1.52,.04,!1)),t.add(s),e.userData.mouth=n,Ci(e,2.6)}else if(i==="gull"){t.add(xe(ve.lowSphere,de.gull,.36,.3,.6,0,0,0)),t.add(xe(ve.cone,de.beak,.08,.3,.08,0,0,-.65).rotateX(-Math.PI/2));const n=xe(ve.cone,de.megaRed,.2,.5,.2,0,-.22,-.65);n.rotation.x=Math.PI/2,t.add(n),t.add(xe(ve.cyl,de.paper,.21,.06,.21,0,-.22,-.89).rotateX(Math.PI/2));const s=[-1,1].map(r=>{const o=new bt;o.position.set(r*.25,.05,0),o.add(xe(ve.box,de.gullWing,.6,.06,.42,r*.3,0,0)),o.add(xe(ve.box,de.gullBand,.58,.065,.1,r*.31,0,.17));const a=xe(ve.box,de.gullTip,.42,.055,.3,r*.78,0,.04);return a.rotation.y=r*.18,o.add(a),t.add(o),o});e.userData.wings=s,yu(t,0,.12,-.42,.06,.13),e.userData.mouth=null,Ci(e,.8)}else if(i==="swarm"){const{mouth:n}=dr(t,{scale:.6}),s=[de.binderR,de.binderB,de.binderY],r=xe(ve.box,s[Math.floor(Math.random()*3)],.08,.34,.28,.32,.55,-.08);t.add(r),e.userData.mouth=n,Ci(e,1.3)}else if(i==="auditor"){const{head:n,mouth:s}=dr(t,{scale:1.1,suit:de.suitDark});for(const o of[-1,1])n.add(xe(ve.box,de.glasses,.12,.08,.02,o*.12,.03,-.33,!1));const r=new bt;r.position.set(0,.95,-.55),r.add(xe(ve.box,de.ledger,1.05,1.2,.14)),r.add(xe(ve.box,de.paper,.95,1.1,.1,0,0,.03,!1)),r.add(xe(ve.box,de.brass,.3,.3,.02,0,.15,-.08,!1)),t.add(r),e.userData.mouth=s,e.userData.shield=r,Ci(e,2.3)}else if(i==="complainer"){const{head:n,mouth:s}=dr(t,{scale:.85,suit:de.track});n.add(xe(ve.cyl,de.rasR,.27,.06,.27,0,.1,0,!1));const r=new bt;r.position.set(.35,1.2,-.1),r.add(xe(ve.cyl,de.track,.06,.45,.06,0,.2,0)),r.add(xe(ve.box,de.paper,.32,.42,.02,0,.55,0)),t.add(r),e.userData.mouth=s,e.userData.arm=r,Ci(e,1.8)}else if(i==="lobbyist"||i==="lobbyMini"){const n=i==="lobbyMini",{mouth:s}=dr(t,{scale:n?.55:1.05,suit:de.suitNavy});t.add(xe(ve.box,de.brass,.08,.3,.05,0,n?.52:.99,n?-.17:-.32,!1)),t.add(xe(ve.box,de.briefcase,n?.28:.5,n?.22:.36,.12,n?.3:.55,n?.3:.55,0)),e.userData.mouth=s,Ci(e,n?1.2:2.1)}else if(i==="drone"){t.add(xe(ve.box,de.iron,.42,.14,.42));const n=[];for(const[s,r]of[[1,1],[-1,1],[1,-1],[-1,-1]]){t.add(xe(ve.box,de.speaker,.5,.04,.05,s*.22,0,r*.22).rotateY(s*r>0?Math.PI/4:-Math.PI/4));const o=xe(ve.cyl,de.rotor,.2,.01,.2,s*.4,.08,r*.4,!1);t.add(o),n.push(o)}t.add(xe(ve.sphere,de.redLight,.07,.07,.07,0,-.06,-.22,!1)),e.userData.rotors=n,e.userData.mouth=null,Ci(e,.6)}else if(i==="balloon"){t.add(xe(ve.sphere,de.balloonA,1.1,1.3,1.1,0,1.6,0));for(let n=0;n<4;n++)t.add(xe(ve.cyl,de.balloonB,1.12-Math.abs(n-1.5)*.18,.18,1.12-Math.abs(n-1.5)*.18,0,1+n*.42,0,!1));t.add(xe(ve.box,de.woodLight,.6,.4,.6,0,-.1,0)),t.add(xe(ve.sphere,de.skin,.2,.2,.2,0,.25,0)),t.add(xe(ve.dome,de.suitDark,.21,.1,.21,0,.32,0,!1));for(const[n,s]of[[1,1],[-1,1],[1,-1],[-1,-1]])t.add(xe(ve.cyl,de.rope,.015,.8,.015,n*.28,.45,s*.28,!1));e.userData.mouth=null,Ci(e,3.3)}else if(i==="heli"){t.add(xe(ve.capsule,de.heli,.6,.55,.9,0,0,0).rotateX(Math.PI/2)),t.add(xe(ve.sphere,de.glassDark,.28,.22,.24,0,.05,-.38,!1)),t.add(xe(ve.box,de.heli,.12,.12,1.1,0,.05,.85));const n=xe(ve.box,de.speaker,1.9,.02,.12,0,.4,0,!1),s=xe(ve.box,de.speaker,.04,.5,.08,.08,.1,1.38,!1);t.add(n,s);const r=new lt(new ei(1.2,4.5,14,1,!0),de.spot);r.position.set(0,-2.3,-.2),r.visible=!1,t.add(r),e.userData.rotor=n,e.userData.tail=s,e.userData.beam=r,e.userData.mouth=null,Ci(e,1)}return bu(e,{tank:.85,auditor:.7,balloon:.9,heli:.6,swarm:.35,lobbyMini:.35,drone:.35,gull:.45}[i]??.55),wd(e),e}function C_(i){const e=i.mesh.userData.mouth;e&&(e.sour.visible=!1,e.smile.visible=!0),i.mesh.userData.hpBar.visible=!1}function R_(i){const e=new bt,t=new bt;if(e.add(t),i==="ring"){e.add(xe(ve.box,de.wood,.9,.5,.9,0,.25,0)),t.position.y=.95;const o=xe(ve.cyl,de.iron,.32,1.1,.32,0,0,-.15);o.rotation.x=Math.PI/2-.15,t.add(o),t.add(xe(ve.cyl,de.woodDark,.38,.12,.38,0,.08,-.7).rotateX(Math.PI/2-.15)),t.add(xe(ve.sphere,de.iron,.42,.42,.42,0,0,.42)),t.add(xe(ve.sphere,de.ember,.12,.12,.12,0,.1,.8,!1))}else if(i==="chips"){e.add(xe(ve.cyl,de.iron,.7,.3,.7,0,.15,0)),t.position.y=.3;const o=xe(ve.box,de.chipsBag,.95,1.1,.6,0,.6,0);o.rotation.x=-.35,t.add(o),t.add(xe(ve.box,de.chipsRed,.97,.3,.62,0,.55,0).rotateX(-.35));for(let a=0;a<5;a++)t.add(xe(ve.leaf,de.chip,.3,.08,.3,(a-2)*.17,1.2,-.3-a%2*.1,!1))}else if(i==="speaker"){const o=new bt;o.add(xe(ve.box,de.speaker,1,1.5,.75,0,.75,0)),o.add(xe(ve.box,de.rasG,1.02,.12,.77,0,1.38,0,!1)),o.add(xe(ve.box,de.rasY,1.02,.12,.77,0,1.26,0,!1)),o.add(xe(ve.box,de.rasR,1.02,.12,.77,0,1.14,0,!1));const a=[];for(const[l,c]of[[.85,.33],[.35,.2]]){const u=xe(ve.cyl,de.cone,c,.08,c,0,l,-.38,!1);u.rotation.x=Math.PI/2,o.add(u),a.push(u)}t.add(o),e.userData.woofers=a}else if(i==="bubble"){e.add(xe(ve.cyl,de.speaker,.5,.25,.5,0,.12,0)),t.position.y=.3,t.add(xe(ve.cyl,de.bottle,.36,1,.36,0,.5,0)),t.add(xe(ve.cyl,de.rasR,.22,.2,.22,0,1.08,0));const o=xe(ve.cyl,de.wood,.03,.8,.03,0,1.4,-.2);o.rotation.x=.5,t.add(o),t.add(xe(ve.bubbleRing,de.rasY,1,1,1,0,1.75,-.42,!1).rotateX(.5));for(let a=0;a<3;a++)t.add(xe(ve.sphere,de.bubble,.14+a*.04,.14+a*.04,.14+a*.04,.3-a*.25,1.7+a*.3,-.7-a*.15,!1))}else if(i==="kite"){for(let a=0;a<3;a++){const l=a/3*Math.PI*2,c=xe(ve.cyl,de.wood,.07,1.6,.07,Math.cos(l)*.45,.7,Math.sin(l)*.45);c.rotation.set(Math.sin(l)*.28,0,-Math.cos(l)*.28),e.add(c)}t.position.y=1.55,t.add(xe(ve.cyl,de.iron,.22,.3,.22,0,0,0).rotateZ(Math.PI/2));const o=Ld();o.position.set(0,.7,0),o.scale.setScalar(.8),t.add(o),e.userData.kite=o}else if(i==="pizza"){e.add(xe(ve.box,de.wood,1.2,.35,.9,0,.18,0));for(const a of[-1,1])e.add(xe(ve.box,de.woodDark,.12,.9,.12,a*.45,.65,0));t.position.y=1;const o=new bt;o.add(xe(ve.box,de.woodLight,.12,.12,1.5,0,0,-.4)),o.add(xe(ve.cyl,de.pizzaCrust,.32,.06,.32,0,.08,-1.1)),o.add(xe(ve.cyl,de.pizza,.27,.03,.27,0,.12,-1.1,!1)),o.rotation.x=-.35,t.add(o),e.userData.arm=o}else if(i==="lamp"){e.add(xe(ve.cone,de.brass,.55,.7,.55,0,.35,0)),t.position.y=.7,t.add(xe(ve.capsule,de.lampGlass,.75,.9,.75,0,.75,0,!1));const o=[];for(let a=0;a<3;a++){const l=xe(ve.sphere,de.lampBlob,.16,.2,.16,0,.5+a*.3,0,!1);t.add(l),o.push(l)}t.add(xe(ve.cone,de.brass,.3,.35,.3,0,1.55,0)),e.userData.blobs=o}const n=[];for(let o=0;o<5;o++){const a=xe(ve.leaf,de.levelPip,.45,.1,.45,Math.cos(o*1.2566)*.95,.15,Math.sin(o*1.2566)*.95,!1);a.visible=o===0,e.add(a),n.push(a)}const s=new Ms(1.45,1.7,40,1,0,Math.PI*2);s.rotateX(-Math.PI/2);const r=new lt(s,new zt({color:"#9fffb0",transparent:!0,opacity:.8,depthWrite:!1}));return r.position.y=.06,r.visible=!1,e.add(r),e.traverse(o=>{o.isMesh&&o!==r&&o.material!==de.levelPip&&(o.castShadow=!0)}),bu(e,1),e.userData.head=t,e.userData.pips=n,e.userData.ring=r,e}function wu(i,e){i.mesh.userData.pips.forEach((t,n)=>t.visible=n<e),i.mesh.scale.setScalar(1+(e-1)*.08)}function Si(i,e){const t=i.mesh.userData.ring;if(t.visible=e>0,e<=0)return;t.geometry.dispose();const n=new Ms(1.45,1.7,40,1,0,Math.PI*2*e);n.rotateX(-Math.PI/2),t.geometry=n}function Cd(){const i=new bt;return i.add(xe(ve.ember,de.ember,1,1.3,1,0,0,0,!1)),i.add(xe(ve.ember,de.emberCore,.5,.7,.5,0,0,0,!1)),i}function P_(){const i=new lt(ve.ring,de.ringMat);return i.castShadow=!1,i}function Rd(){const i=new bt;return i.add(xe(ve.box,de.chipsBag,.32,.4,.14,0,0,0,!0)),i.add(xe(ve.box,de.chipsRed,.33,.12,.15,0,.02,0,!1)),i}function Pd(){const i=new Mr(1,.08,4,32);return i.rotateX(Math.PI/2),new lt(i,new zt({color:"#c8ffd0",transparent:!0,opacity:.7,depthWrite:!1}))}let ra=null;function L_(){if(ra)return ra;const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d");["#d8453a","#f2c94c","#d8453a","#f2c94c","#3f9a4a","#f2c94c","#d8453a","#f2c94c"].forEach((n,s)=>{e.fillStyle=n,e.fillRect(0,s*8,64,8)});const t=new wi(i);return t.colorSpace=Tn,t.wrapS=t.wrapT=zi,t.repeat.set(1,1.4),t.magFilter=An,ra=new Wt({map:t,flatShading:!0}),ra}function Ld(){const i=new bt,e=new hd([new Re(0,.55),new Re(.38,0),new Re(0,-.75),new Re(-.38,0)]),t=new xu(e,{depth:.035,bevelEnabled:!1});t.translate(0,0,-.0175);const n=new lt(t,L_());n.rotation.x=-Math.PI/2.4,n.castShadow=!0,i.add(n);const s=xe(ve.box,de.woodDark,.025,1.3,.025,0,-.1,.03,!1),r=xe(ve.box,de.woodDark,.76,.025,.025,0,0,.03,!1);n.add(s,r);const o=new bt;o.position.set(0,-.68,0),n.add(o);const a=[de.rasR,de.rasY,de.rasG,de.rasR,de.rasY];let l=o;const c=[];for(let u=0;u<a.length;u++){const h=new bt;h.position.y=u?-.2:0,h.add(xe(ve.box,de.rope,.015,.2,.015,0,-.1,0,!1));const d=new bt;d.position.y=-.2;for(const p of[-1,1]){const g=xe(ve.cone,a[u],.05,.1,.03,p*.05,0,0,!1);g.rotation.z=p*Math.PI/2,d.add(g)}h.add(d),l.add(h),l=h,c.push(h)}return i.userData.tailSegs=c,i}function Dd(){return xe(ve.sphere,de.bubble,.28,.28,.28,0,0,0,!1)}function D_(){const i=new bt;return i.add(xe(ve.cyl,de.pizzaCrust,.3,.06,.3,0,0,0,!0)),i.add(xe(ve.cyl,de.pizza,.25,.03,.25,0,.04,0,!1)),i}const Ir=20;function Jn(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function I_(i){const e=new gu(i.map(([s,r])=>new V(s,0,r)),!1,"catmullrom",.5),t=e.getLength(),n=e.getSpacedPoints(400);return{curve:e,length:t,samples:n}}function U_(i,e,t,n,s){const o=new Bn(1,1,1,5,5,5),a=o.attributes.position,l=new V,c=new V,u=i/2,h=e/2,d=t/2,p=Math.min(n,u,h,d)*.98,g=s()*10,M=(s()-.5)*.12;for(let f=0;f<a.count;f++){l.set(a.getX(f)*i,a.getY(f)*e,a.getZ(f)*t),c.set(Mt.clamp(l.x,-u+p,u-p),Mt.clamp(l.y,-h+p,h-p),Mt.clamp(l.z,-d+p,d-p)),l.sub(c);const _=l.length();_>0&&l.multiplyScalar(p/_),l.add(c);const b=1+.035*Math.sin(l.x*4.1+g)*Math.sin(l.z*3.7-g)+.025*Math.sin(l.y*6+g*2);l.x*=b,l.z*=b,l.y+=l.x*M,a.setXYZ(f,l.x,l.y,l.z)}o.deleteAttribute("normal"),o.deleteAttribute("uv");const m=vd(o);return m.computeVertexNormals(),m}function z_(i,e,t,n){const s=new Ce(e),r=new Ce(t),o=new Ce,a=[[[2.3,.85,1.9,0,0,0],[1.6,.7,1.4,.2,-.1,.35]],[[1.5,1.5,1.4,-.35,.1,.1],[1.4,.8,1.3,.75,-.2,-.3],[.9,.6,.85,-.3,.05,.6]],[[2.4,.7,2,0,0,.2],[1.8,.65,1.5,-.15,.15,-.25],[1.1,.55,1,.2,-.1,.5]]][n%3],l=[];let c=0,u=0;a.forEach(([f,_,b,x,C,S],E)=>{const A=.88+i()*.24,y=U_(f*A,_*(.9+i()*.2),b*A,Math.min(f,_,b)*.28,i);y.rotateY(S+(i()-.5)*.3);const v=n%3===1&&E===1?0:c;y.translate(x,v+_/2,C),n%3===1&&E===1||(c=v+_*.92),u=Math.max(u,v+_),l.push(y)});const h=Mu(l),d=h.attributes.position,p=h.attributes.normal,g=[],M=.95+i()*.1,m=i()*10;for(let f=0;f<d.count;f++){const _=d.getX(f),b=d.getY(f),x=d.getZ(f);o.copy(s).multiplyScalar(M*(.72+.28*Mt.smoothstep(b,0,.9))*(p.getY(f)<-.3?.8:1));const C=Math.sin(_*2.3+m)*Math.sin(x*2.7-m)+.5*Math.sin(_*5.1-x*4.3+m),S=Mt.smoothstep(p.getY(f),.6,.9)*Mt.smoothstep(b,u-.3,u-.08)*Mt.smoothstep(C,-.55,0);o.lerp(r,S),g.push(o.r,o.g,o.b)}return h.setAttribute("color",new ht(g,3)),h}function of(i,e,t,n,s,r,o=12,a={}){const l=a.dressed?.3:1,c=new jt(e,t,n,o,3,!0),u=new Ms(.001,e,o,4);u.rotateX(-Math.PI/2),u.translate(0,n/2,0);const h=Mu([c,u]),d=h.attributes.position,p=i()*10;for(let S=0;S<d.count;S++){const E=d.getX(S),A=d.getY(S),y=d.getZ(S),v=Math.hypot(E,y);if(v<1e-4)continue;const T=Math.atan2(y,E);let N=1+l*(.05*Math.sin(T*3+p)+.035*Math.sin(T*7-p*2)+.025*Math.sin(A*9+T*4)),L=A;A>n/2-1e-4&&v>e*.97&&(N*=.93,L-=.08),d.setXYZ(S,E*N,L,y*N)}h.deleteAttribute("normal"),h.deleteAttribute("uv");const g=vd(h);g.computeVertexNormals(),g.translate(0,n/2,0);const M=new Ce(s),m=new Ce(r),f=new Ce,_=[],b=new Ce("#ece3cc"),x=g.attributes.position,C=g.attributes.normal;for(let S=0;S<x.count;S++){const E=x.getX(S),A=x.getY(S),y=x.getZ(S),v=Math.atan2(y,E),T=Math.hypot(E,y);if(f.copy(M).multiplyScalar(.55+.45*Mt.smoothstep(A,0,n*.9)),a.dressed){const U=Mt.smoothstep(C.getY(S),.75,.95)*Mt.smoothstep(A,n-.15,n-.08),W=1-Mt.smoothstep(Math.abs(T-e*.72),.04,.1);f.lerp(b,U*(1-.75*W)),f.multiplyScalar(1-.45*W*U),_.push(f.r,f.g,f.b);continue}const N=Math.sin(E*1.9+p)*Math.sin(y*2.3-p)+.5*Math.sin(v*5+p)+.3*Math.sin(T*4),L=Mt.smoothstep(A,n-.25,n-.05)*Mt.smoothstep(N,0,.5)*Mt.smoothstep(C.getY(S),.2,.7);f.lerp(m,L),_.push(f.r,f.g,f.b)}return g.setAttribute("color",new ht(_,3)),g}function af(i,e=.55){const t=document.createElement("canvas");t.width=t.height=256;const n=t.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,256,256);const s=Jn(4242);for(let l=0;l<90;l++){const c=225+s()*30|0;n.fillStyle=`rgba(${c},${c},${c},0.5)`,n.beginPath(),n.ellipse(s()*256,s()*256,8+s()*22,4+s()*10,s()*3,0,Math.PI*2),n.fill()}n.lineCap="round",n.lineJoin="round";const r=(l,c,u,h,d)=>{n.lineWidth=d,n.strokeStyle="rgba(46,44,50,0.85)",n.beginPath(),n.moveTo(l,c);for(let p=0;p<h;p++)u+=(s()-.5)*.9,l+=Math.cos(u)*9,c+=Math.sin(u)*9,n.lineTo(l,c),s()<.12&&d>1.2&&(n.stroke(),r(l,c,u+(s()<.5?1:-1)*(.6+s()*.6),h>>1,d*.7),n.lineWidth=d,n.strokeStyle="rgba(46,44,50,0.85)",n.beginPath(),n.moveTo(l,c));n.stroke()};for(let l=0;l<9;l++){const c=s()*256,u=s()*256,h=s()*6.28,d=5+(s()*7|0),p=1.6+s()*1.2;for(const[g,M]of[[0,0],[256,0],[-256,0],[0,256],[0,-256]])n.save(),n.translate(g,M),r(c,u,h,d,p),n.restore()}const o=new wi(t);o.colorSpace=Tn,o.wrapS=o.wrapT=zi,o.anisotropy=4;const a=new Wt({vertexColors:!0});return a.onBeforeCompile=l=>{l.uniforms.uCrack={value:o},l.uniforms.uWaterC={value:new Ce(i)},l.vertexShader=`varying vec3 vRP;
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
      }`)},a.customProgramCacheKey=()=>`rock${e}`,a}function N_(i,e,t){const n=__(t),s=new V(t.lighthouse[0],0,t.lighthouse[1]),r=t.paths.map(I_),o=r.flatMap(k=>k.samples),a=(k,F)=>{let ee=1/0;for(let pe=0;pe<o.length;pe+=3){const Se=o[pe],Pe=(Se.x-k)**2+(Se.z-F)**2;Pe<ee&&(ee=Pe)}return Math.sqrt(ee)};if(t.plateausAuto&&!t.plateaus){const k=Jn(500+t.seed),F=[];for(const ee of t.plateausAuto){let pe=null,Se=-1;for(let Pe=0;Pe<500;Pe++){const Te=k()*Math.PI*2,te=12+k()*24,$e=Math.cos(Te)*te,Xe=Math.sin(Te)*te,pt=a($e,Xe);if(pt<ee.r+3.5||Math.hypot($e-s.x,Xe-s.z)<ee.r+9||F.some(Dt=>Math.hypot(Dt.x-$e,Dt.z-Xe)<Dt.r+ee.r+5))continue;const Rt=Math.min(pt-ee.r,9)+k()*.5;Rt>Se&&(Se=Rt,pe={x:$e,z:Xe,...ee})}pe&&F.push(pe)}if(t.plateaus=F,t.waterfall&&F[0]){const ee=F[0],pe=t.waterfall;let Se=0,Pe=-1;for(let $e=0;$e<16;$e++){const Xe=$e/16*Math.PI*2,pt=ee.x+Math.cos(Xe)*(ee.r+3.2),Rt=ee.z+Math.sin(Xe)*(ee.r+3.2),Dt=a(pt,Rt);Dt>Pe&&(Pe=Dt,Se=Xe)}const Te=Math.cos(Se),te=Math.sin(Se);pe.pool=[ee.x+Te*(ee.r-2.4),ee.z+te*(ee.r-2.4)],pe.lip=[ee.x+Te*(ee.r-.3),ee.z+te*(ee.r-.3)],pe.basin=[ee.x+Te*(ee.r+3),ee.z+te*(ee.r+3)]}}const l=t.fjord,c=t.nes,u=(k,F)=>{if(t.shape==="fjord"){const ee=F+30+2.2*Math.sin(k*.21)+1.2*Math.sin(k*.53+1),pe=Mt.clamp(F,c.z1,c.z0),Se=c.r-Math.hypot(k-c.x,F-pe)+(F<c.z1?0:.6*Math.sin(F*.7));return Math.max(ee,Se)}return n(Math.atan2(F,k))-Math.hypot(k,F)},h=(k,F,ee=!1)=>{const pe=Mt.smoothstep(u(k,F),-3,7),Se=.9+.7*Math.sin(k*.17+1)*Math.cos(F*.21)+.35*Math.sin(k*.5+F*.4)+.3*Math.sin(k*.31-F*.23+2.1)+.18*Math.cos(k*.73+F*.61),Pe=2.4*Math.exp(-((k-s.x-2)**2+(F-s.z+1)**2)/60);let Te=-2.2+pe*(2.2+Se+Pe);if(pe>.85&&Te<.35&&(Te=Math.max(-.42,.35-(.35-Te)*3.2)),l){const te=Math.max(Mt.smoothstep(Math.abs(k),l.wall-3,l.wall+6),Mt.smoothstep(F,l.top+6,l.top+14));Te+=te*(7+1.5*Math.sin(F*.13+k*.05));const $e=Math.abs(k-l.xc(F)),Xe=1-Mt.smoothstep(F,l.top-6,l.top+2);$e<l.w+1.5&&Xe>0&&(Te=Math.min(Te,Mt.lerp(Te,-1.6,Xe*(1-Mt.smoothstep($e,l.w-.8,l.w+1.5)))))}for(const te of t.plateaus||[]){const $e=Math.hypot(k-te.x,F-te.z),Xe=Math.atan2(F-te.z,k-te.x),pt=te.r+Math.sin(Xe*5+te.x)*.8+Math.sin(Xe*11)*.3;Te+=te.h*Mt.smoothstep(pt-$e,0,1.3)}if(t.waterfall&&!ee){const te=t.waterfall,$e=Math.hypot(k-te.pool[0],F-te.pool[1]);$e<te.poolR+.6&&(te._lvl??(te._lvl=h(te.pool[0],te.pool[1],!0)-.12),Te=Math.min(Te,te._lvl-.48*Math.sqrt(Math.max(0,1-$e/(te.poolR+.6)))));const Xe=Mt.clamp(((k-te.pool[0])*(te.lip[0]-te.pool[0])+(F-te.pool[1])*(te.lip[1]-te.pool[1]))/((te.lip[0]-te.pool[0])**2+(te.lip[1]-te.pool[1])**2),0,1),pt=te.pool[0]+(te.lip[0]-te.pool[0])*Xe,Rt=te.pool[1]+(te.lip[1]-te.pool[1])*Xe;Math.hypot(k-pt,F-Rt)<.75&&te._lvl!==void 0&&(Te=Math.min(Te,te._lvl-.25));const Dt=Math.hypot(k-te.basin[0],F-te.basin[1]);Dt<te.basinR&&(Te=Math.min(Te,Math.max(-.42,.05-.47*Math.sqrt(1-Dt/te.basinR))))}if(t.volcano){const te=t.volcano,$e=Math.hypot(k-te.x,F-te.z);Te+=te.h*Math.max(0,1-$e/te.r)**1.4-te.h*.5*Math.max(0,1-$e/(te.r*.25))}return Te},d=68,p=e.mobile?160:176,g=new Float32Array((p+1)*(p+1)),M=new Float32Array((p+1)*(p+1));for(let k=0;k<=p;k++)for(let F=0;F<=p;F++){const ee=-d+F/p*d*2,pe=-d+k/p*d*2,Se=a(ee,pe);M[k*(p+1)+F]=Se;let Pe=h(ee,pe);const Te=Mt.smoothstep(Se,1.4,3.2),te=Math.max(h(ee,pe)*.6+.3,.45);Pe=Mt.lerp(Math.min(Pe,te+.1),Pe,Te),l&&Math.abs(pe-l.bridgeZ)<4&&Math.abs(ee-l.xc(pe))<l.w+2&&Se<2.2&&(Pe=Math.max(Pe,.5)),g[k*(p+1)+F]=Pe}const m=(k,F,ee)=>{const pe=Mt.clamp((F+d)/(d*2)*p,0,p-.001),Se=Mt.clamp((ee+d)/(d*2)*p,0,p-.001),Pe=Math.floor(pe),Te=Math.floor(Se),te=pe-Pe,$e=Se-Te,Xe=k[Te*(p+1)+Pe],pt=k[Te*(p+1)+Pe+1],Rt=k[(Te+1)*(p+1)+Pe],Dt=k[(Te+1)*(p+1)+Pe+1];return(Xe*(1-te)+pt*te)*(1-$e)+(Rt*(1-te)+Dt*te)*$e},f=(k,F)=>m(g,k,F),_=(k,F)=>m(M,k,F),b=(k,F)=>f(k,F)>.35,x=.5,C=(k,F)=>Math.max(Math.abs(f(k+.4,F)-f(k-.4,F)),Math.abs(f(k,F+.4)-f(k,F-.4)))/.8,S=(k,F)=>!!l&&Math.abs(F-l.bridgeZ)<4&&Math.abs(k-l.xc(F))<l.w+1.5&&_(k,F)<2.6,E=new Ce("#cfeaff"),A=(k,F)=>f(k,F)>.05-x&&C(k,F)<1.05,y=e.mobile?170:256,v=new li(d*2,d*2,y,y);v.rotateX(-Math.PI/2);const T=v.attributes.position,N=new Float32Array(T.count*3),L=new Float32Array(T.count*3),U=new Float32Array(T.count),W=new Float32Array(T.count*4),G=new Ce,z=new Ce,I=t.palette,Y=new Ce(t.rock[0]).multiplyScalar(.7),$=new Ce(t.rock[0]).multiplyScalar(1.08),ie=new Ce,ge=new Ce(I.sand),Ne=new Ce(I.grass),H=new Ce(I.grass2),Z=new Ce(I.path),ue=new Ce(I.deep),oe=new Ce,me=Jn(7);for(let k=0;k<T.count;k++){const F=T.getX(k),ee=T.getZ(k),pe=f(F,ee);T.setY(k,pe);const Se=_(F,ee),Pe=(me()-.5)*.04,Te=oe.copy(Ne).lerp(H,Mt.clamp((pe-1)*.6+me()*.3,0,1)).offsetHSL(0,0,Pe);L.set([Te.r,Te.g,Te.b],k*3),G.copy(ue).lerp(ge,Mt.smoothstep(pe,0,.3)).offsetHSL(0,0,Pe),N.set([G.r,G.g,G.b],k*3);const te=.5+.5*Math.sin(F*1.7+ee*.9)*Math.cos(ee*1.3-F*.6);U[k]=1.9-Math.min(Se,6)+(te-.5)*(I.pathMix??.3)*2.4-Math.max(0,.3-pe)*2.5;let $e=0;l&&S(F,ee)&&(z.copy(E),$e=.85);const Xe=C(F,ee);if(Xe>.75){const pt=.5+.5*Math.sin(pe*7.5+Math.sin(F*.7+ee*.5)*1.5);ie.copy(Y).lerp($,pt);const Rt=Mt.smoothstep(Xe,.75,1.3);z.copy($e?z:ie).lerp(ie,Rt),$e=Math.max($e,Rt)}W.set([z.r,z.g,z.b,$e],k*4)}v.setAttribute("aLow",new Xt(N,3)),v.setAttribute("aGrass",new Xt(L,3)),v.setAttribute("aPathF",new Xt(U,1)),v.setAttribute("aOver",new Xt(W,4)),v.computeVertexNormals();const De=new Wt({color:"#ffffff"});De.onBeforeCompile=k=>{k.vertexShader=k.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTW, vLow, vGrass;
varying vec4 vOver;
varying float vPathF;
attribute vec3 aLow, aGrass;
attribute vec4 aOver;
attribute float aPathF;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vTW = (modelMatrix * vec4(transformed, 1.0)).xyz;
vLow = aLow; vGrass = aGrass; vOver = aOver; vPathF = aPathF;`),k.uniforms.uPath={value:Z},k.fragmentShader=k.fragmentShader.replace("#include <common>",`#include <common>
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
          float ph = dot(sq, vec2(0.6, 0.8)) * 11.0 + warp * 2.0; // R5: finere riller
          float s = sin(ph);
          float crest = smoothstep(0.55, 0.97, s), trough = smoothstep(0.1, -0.85, s);
          float aa = 1.0 - smoothstep(0.5, 1.4, fwidth(ph));
          float wetR = 1.0 - smoothstep(0.08, 0.34, vTW.y);
          // Overalt der bakken er sand: lav sand under gress-konturen og sand-stiene (ikke på gress/klippe-overlegg)
          float sandy = max(1.0 - smoothstep(0.76, 0.80, vTW.y + edgeN * 0.06), smoothstep(0.34, 0.40, vPathF)) * (1.0 - vOver.a);
          // R5: −60 % kontrast, de brune stripene gjorde stiene skitne
          diffuseColor.rgb *= 1.0 + (0.04 * crest - 0.044 * trough) * sandy * aa * mix(1.0, 0.45, wetR);
        }
        // Malt overflate: myk to-oktavs støy i lyshet og litt i fargetone
        vec2 q = vTW.xz;
        float n1 = sin(q.x * 0.9 + sin(q.y * 0.7) * 1.7) * sin(q.y * 1.1 + sin(q.x * 0.5) * 1.3);
        float n2 = sin(q.x * 3.7 + q.y * 2.3) * sin(q.y * 3.1 - q.x * 1.9);
        diffuseColor.rgb *= 0.96 + 0.04 * n1 + 0.02 * n2; // R4: roligere, mindre flekkete
        diffuseColor.g *= 1.0 + 0.025 * n1;`)};const Ee=new lt(v,De);Ee.receiveShadow=!0,i.add(Ee);const Oe=[],fe=(k,F)=>Math.hypot(k-s.x,F-s.z)>6;for(const[k,F]of r.entries()){let ee=k%2===0?1:-1,pe=0;for(let Se=.16;Se<.95&&pe<6;Se+=.055){const Pe=F.curve.getPointAt(Se),Te=F.curve.getTangentAt(Se),te=new V(-Te.z,0,Te.x).normalize();for(const $e of[ee,-ee]){const Xe=Pe.x+te.x*3.6*$e,pt=Pe.z+te.z*3.6*$e;if(!(_(Xe,pt)<2.7||!b(Xe,pt)||!fe(Xe,pt))&&!Oe.some(Rt=>Math.hypot(Rt.x-Xe,Rt.z-pt)<5.2)&&!(t.volcano&&Math.hypot(Xe-t.volcano.x,pt-t.volcano.z)<t.volcano.r+2)){Oe.push({x:Xe,z:pt,tower:null}),pe++;break}}ee=-ee}}const _e=af(t.water.mid),O=new zt({color:new Ce("#ffd27a").multiplyScalar(1.6),transparent:!0,opacity:.75,depthWrite:!1}),Qe=new zt({color:new Ce("#ffe9a8").multiplyScalar(2),transparent:!0,opacity:.85,depthWrite:!1}),be=of(Jn(61+t.seed),1.3,1.45,.98,t.rock[0],t.rock[1],8,{dressed:!0});be.translate(0,-.1,0);const Ge=new Ms(.55,.75,6);Ge.rotateX(-Math.PI/2);const Ie=new Lr(1,0),nt=Oe.length,K=new wn(be,_e,nt),R=new wn(Ge,O,nt),w=new wn(Ie,Qe,nt*3);K.castShadow=K.receiveShadow=!0;const X=new qt;Oe.forEach((k,F)=>{k.y0=f(k.x,k.z),k.y=k.y0+.88,X.position.set(k.x,k.y0,k.z),X.rotation.set(0,F,0),X.scale.setScalar(1),X.updateMatrix(),K.setMatrixAt(F,X.matrix)}),i.add(K,R,w),Ta(K,"rock");const ne=k=>{Oe.forEach((F,ee)=>{const pe=!F.tower;X.position.set(F.x,F.y0+.9,F.z),X.rotation.set(0,k*.5,0),X.scale.setScalar(pe?1:0),X.updateMatrix(),R.setMatrixAt(ee,X.matrix);for(let Se=0;Se<3;Se++){const Pe=k*.4+Se*2.1+F.x,Te=(Pe%1+1)%1;X.position.set(F.x+Math.cos(Pe*2.3)*.55,F.y0+1+Te*1.1,F.z+Math.sin(Pe*2.3)*.55),X.rotation.set(0,Pe*3,0);const te=pe?.07*Math.sin(Te*Math.PI):0;X.scale.set(te,te*1.6,te),X.updateMatrix(),w.setMatrixAt(ee*3+Se,X.matrix)}}),R.instanceMatrix.needsUpdate=!0,w.instanceMatrix.needsUpdate=!0},se=new bt,re=f(s.x,s.z);se.position.set(s.x,re,s.z);const ke=(()=>{const k=document.createElement("canvas");k.width=512,k.height=512;const F=k.getContext("2d");F.fillStyle="#f6f1e6",F.fillRect(0,0,512,512);const ee=Jn(5);for(let Se=0;Se<520;Se++){const Pe=ee()*512,Te=ee()*512,te=2+ee()*9,$e=ee()<.65;F.fillStyle=$e?`rgba(${90+ee()*40},${120+ee()*40},${60+ee()*20},${.12+ee()*.18})`:`rgba(${130+ee()*30},${95+ee()*20},60,${.12+ee()*.15})`,F.beginPath(),F.ellipse(Pe,Te,te,te*(.4+ee()*.6),ee()*3,0,Math.PI*2),F.fill()}for(let Se=0;Se<1200;Se++){F.strokeStyle=`rgba(190,170,140,${.04+ee()*.07})`,F.lineWidth=1;const Pe=ee()*512,Te=ee()*512;F.beginPath(),F.moveTo(Pe,Te),F.lineTo(Pe+(ee()-.5)*8,Te+6+ee()*20),F.stroke()}for(let Se=0;Se<26;Se++){const Pe=ee()*512;F.strokeStyle=ee()<.5?"rgba(255,255,255,0.35)":"rgba(150,130,100,0.18)",F.lineWidth=2+ee()*5,F.beginPath(),F.moveTo(Pe,512),F.bezierCurveTo(Pe+40,350,Pe-30,160,Pe+20+ee()*40,0),F.stroke()}F.strokeStyle="rgba(175,145,100,0.55)",F.lineWidth=4,F.beginPath(),F.moveTo(60,512),F.bezierCurveTo(90,330,110,180,150,0),F.stroke();const pe=new wi(k);return pe.colorSpace=Tn,pe.wrapS=zi,pe})(),we=new Wt({map:ke}),Ue=(()=>{const k=document.createElement("canvas");k.width=k.height=128;const F=k.getContext("2d");F.fillStyle="#e9dcbf",F.fillRect(0,0,128,128),F.strokeStyle="#a88d62",F.lineWidth=3,F.beginPath();for(let pe=0;pe<Math.PI*9;pe+=.1){const Se=4+pe*2;F.lineTo(64+Math.cos(pe)*Se,64+Math.sin(pe)*Se)}F.stroke();const ee=new wi(k);return ee.colorSpace=Tn,ee})(),ot=new Wt({color:"#e6d8b8"}),Ae=new Wt({map:Ue}),qe=new Wt({color:"#3a3330",flatShading:!0}),at=new Wt({color:"#b8b2aa",flatShading:!0}),ut=(()=>{const k=document.createElement("canvas");k.width=256,k.height=128;const F=k.getContext("2d"),ee=F.createLinearGradient(0,0,0,128);ee.addColorStop(0,"#fff0b0"),ee.addColorStop(.45,"#ffb040"),ee.addColorStop(1,"#ff5a10"),F.fillStyle=ee,F.fillRect(0,0,256,128);const pe=Jn(11);for(let Pe=0;Pe<70;Pe++){const Te=pe();F.fillStyle=Te<.5?`rgba(70,60,55,${.5+pe()*.4})`:`rgba(170,165,160,${.5+pe()*.4})`,F.beginPath(),F.ellipse(pe()*256,20+pe()*108,4+pe()*14,2+pe()*6,pe()*3,0,Math.PI*2),F.fill()}F.strokeStyle="rgba(60,30,20,0.6)",F.lineWidth=1.5;for(let Pe=0;Pe<40;Pe++){const Te=pe()*256,te=pe()*128;F.beginPath(),F.moveTo(Te,te),F.lineTo(Te+(pe()-.5)*30,te+(pe()-.5)*20),F.stroke()}const Se=new wi(k);return Se.colorSpace=Tn,Se})(),Je=new zt({map:ut,color:new Ce("#ffffff").multiplyScalar(2.2)});function Et({len:k,rTop:F,rBot:ee,crutchH:pe,seg:Se,bend:Pe,glowMat:Te,shadow:te}){const $e=new bt,Xe=new lt(new jt(ee*.98,ee*.95,pe,Se),[ot,ot,Ae]);Xe.position.y=pe/2,Xe.castShadow=te,$e.add(Xe);const pt=new jt(F,ee,k,Se,8,!0),Rt=pt.attributes.position,Dt=Jn(Math.round(k*100)),Oi=Array.from({length:6},()=>[Dt()*6.28,Dt()*3,.03+Dt()*.04]);for(let Nt=0;Nt<Rt.count;Nt++){const hi=Rt.getY(Nt),fi=(hi+k/2)/k,Vr=Math.atan2(Rt.getZ(Nt),Rt.getX(Nt));let Ks=1+Math.sin(Vr*7+hi*3)*.018;for(const[ap,lp,cp]of Oi)Ks+=Math.cos(Vr-ap)*Math.sin(fi*6+lp)*cp*.5;Rt.setXYZ(Nt,Rt.getX(Nt)*Ks+Pe*fi*fi*k,hi,Rt.getZ(Nt)*Ks)}pt.translate(0,k/2,0),pt.computeVertexNormals();const Pt=new lt(pt,we);Pt.position.y=pe,Pt.castShadow=te,Pt.receiveShadow=!0,$e.add(Pt);const Rn=Pe*k,ui=pe+k,Pn=new jt(F*1.02,F*1.04,F*.35,Se,1,!0),$n=Pn.attributes.position;for(let Nt=0;Nt<$n.count;Nt++)$n.getY(Nt)>0&&$n.setY(Nt,$n.getY(Nt)+Math.sin(Nt*2.7)*F*.12);Pn.computeVertexNormals();const jn=new lt(Pn,qe);jn.position.set(Rn,ui+F*.12,0),$e.add(jn);const ns=new lt(new ti(F*.97,Se,6,0,Math.PI*2,0,Math.PI/2),Te);ns.scale.y=.38,ns.position.set(Rn,ui+F*.2,0),$e.add(ns);const Xa=[];for(let Nt=0;Nt<5;Nt++){const hi=new lt(new Oa(F*(.2+Nt%3*.07),0),at),fi=Nt*1.25+.3;hi.position.set(Rn+Math.cos(fi)*F*.55,ui+F*.33,Math.sin(fi)*F*.55),hi.scale.y=.4,$e.add(hi),Xa.push(hi)}const qa=new ei(F*.28,F*1.1,6,4),js=qa.attributes.position;for(let Nt=0;Nt<js.count;Nt++){const hi=js.getY(Nt),fi=(hi/(F*1.1)+.5)*2.2,Vr=js.getX(Nt),Ks=js.getZ(Nt);js.setX(Nt,Vr*Math.cos(fi)-Ks*Math.sin(fi)+(hi+F*.55)*.25),js.setZ(Nt,Vr*Math.sin(fi)+Ks*Math.cos(fi))}qa.computeVertexNormals();const Gr=new lt(qa,qe);return Gr.position.set(Rn+F*.1,ui+F*.7,F*.1),Gr.rotation.z=-.35,$e.add(Gr),$e.userData={glow:ns,top:new V(Rn,ui,0),charRing:jn,ashFlakes:Xa,body:Pt,twist:Gr,len:k,rTop:F,rBot:ee,bend:Pe,crutchH:pe,base:Pt.geometry.attributes.position.array.slice(),topParts:[jn,ns,Gr,...Xa].map(Nt=>[Nt,Nt.position.clone(),Nt.scale.clone()])},$e}const ft=new Ce(t.rock[0]).multiplyScalar(.86),St=new lt(of(Jn(67+t.seed),3.3,3.9,1,ft,t.rock[1],16),af(t.water.mid,.2));St.position.y=-.2,St.castShadow=St.receiveShadow=!0,se.add(St),Br(St,"rock");const j=7.4,Fe=1.4,le=Et({len:j,rTop:2.35,rBot:.95,crutchH:Fe,seg:22,bend:.06,glowMat:Je,shadow:!0});le.position.y=.75,le.rotation.set(.06,0,-.03);const ye=le.userData.charRing;se.add(le);const He=new qt;He.position.y=Fe+j+1.2,le.add(He);const We=new vo("#ff8a3a",40,34,1.5);We.position.y=Fe+j+1.4,le.add(We);const dt=new ei(2.2,16,16,6,!0);dt.translate(0,-8,0);{const k=dt.attributes.position,F=new Float32Array(k.count*3);for(let ee=0;ee<k.count;ee++){const pe=Math.pow(1-Math.min(1,-k.getY(ee)/16),1.6);F.set([pe,pe,pe],ee*3)}dt.setAttribute("color",new Xt(F,3))}dt.rotateZ(Math.PI/2);const Bt=new zt({color:"#ffc890",vertexColors:!0,transparent:!0,opacity:.05,blending:Ti,depthWrite:!1,side:hn,fog:!1}),Kt=new bt;Kt.position.y=Fe+j+.8;const At=new lt(dt,Bt),pn=At.clone();pn.rotation.y=Math.PI,Kt.add(At,pn),le.add(Kt);const Nn=new vo("#ffa050",12,10,1.4);Nn.position.set(0,1.3,4.6),se.add(Nn),i.add(se),se.updateMatrixWorld(!0);const ci=new V;He.getWorldPosition(ci);const Yt=le.userData,B=[He,We,Kt].map(k=>[k,k.position.y]),Me=k=>Yt.rBot+(Yt.rTop-Yt.rBot)*k;function he(k){const F=.15+.85*Math.max(0,Math.min(1,k)),ee=Yt.body.geometry.attributes.position,pe=Yt.base;for(let te=0;te<ee.count;te++){const $e=pe[te*3+1],Xe=$e/Yt.len,pt=Xe*F,Rt=Me(pt)/Me(Xe);ee.setXYZ(te,(pe[te*3]-Yt.bend*Xe*Xe*Yt.len)*Rt+Yt.bend*pt*pt*Yt.len,pt*Yt.len,pe[te*3+2]*Rt)}ee.needsUpdate=!0,Yt.body.geometry.computeVertexNormals(),Yt.body.geometry.computeBoundingSphere();const Se=(F-1)*Yt.len,Pe=Me(F)/Yt.rTop,Te=Yt.bend*Yt.len*(F*F-1);for(const[te,$e,Xe]of Yt.topParts)te.position.set(Yt.top.x+($e.x-Yt.top.x)*Pe+Te,$e.y+Se,$e.z*Pe),te.scale.set(Xe.x*Pe,Xe.y*Pe,Xe.z*Pe);for(const[te,$e]of B)te.position.y=$e+Se;se.updateMatrixWorld(!0),He.getWorldPosition(ci)}const je={tip:ci,pos:new V(s.x,re,s.z),lights:Ir,flamePos(){return ci.clone()},setLights(k){this.lights=k;const F=k/Ir;he(F),this.glow=F,Nn.intensity=3+9*F,Bt.opacity=.01+.04*F,ye.scale.y*=1+(1-F)*2.5}},Ke=Jn(42),Le=[];for(let k=0;k<3e3&&Le.length<(e.mobile?70:104);k++){const F=(Ke()-.5)*102,ee=(Ke()-.5)*102,pe=f(F,ee);if(pe<.75||_(F,ee)<3.2||!fe(F,ee)||Oe.some(te=>Math.hypot(te.x-F,te.z-ee)<3.2)||Le.some(te=>Math.hypot(te.x-F,te.z-ee)<2.4)||t.volcano&&Math.hypot(F-t.volcano.x,ee-t.volcano.z)<t.volcano.r)continue;const Se=pe<1.45?t.trees.beach:t.trees.inland;let Pe=Ke(),Te="bush";for(const[te,$e]of Object.entries(Se)){if(Pe<$e){Te=te;break}Pe-=$e}Te==="palm"&&(Ke()<.5||_(F,ee)<4.6||Oe.some(te=>Math.hypot(te.x-F,te.z-ee)<4.8))||Le.push({x:F,z:ee,y:pe,s:(Te==="bush"?.8:.75)+Ke()*.45,phase:Ke()*6.28,kind:Te})}if(t.trees.inland.bush){const k=Jn(303+t.seed),F=Le.filter(ee=>ee.kind!=="bush"&&ee.y>=1);for(const ee of F){if(k()>(e.mobile?.6:.75))continue;const pe=1+Math.floor(k()*3);for(let Se=0;Se<pe;Se++){const Pe=k()*6.28,Te=1.3+k()*1,te=ee.x+Math.cos(Pe)*Te,$e=ee.z+Math.sin(Pe)*Te,Xe=f(te,$e);Xe<1||_(te,$e)<3||!fe(te,$e)||Oe.some(pt=>Math.hypot(pt.x-te,pt.z-$e)<3)||Le.some(pt=>pt!==ee&&Math.hypot(pt.x-te,pt.z-$e)<1.3)||Le.push({x:te,z:$e,y:Xe,s:.55+k()*.35,phase:k()*6.28,kind:"bush"})}}}const et=o_(i,Le,e,t),rt=new qt,mt=[];for(let k=0;k<1200&&mt.length<(e.mobile?40:56);k++){const F=Ke()*Math.PI*2,ee=n(F)-3+Ke()*5.5,pe=Math.cos(F)*ee,Se=Math.sin(F)*ee;_(pe,Se)<3.4||f(pe,Se)<-1.2||mt.some(Pe=>Math.hypot(Pe.x-pe,Pe.z-Se)<2.2)||mt.push({x:pe,z:Se,s:.6+Ke()*1.2,r:Ke()*6})}for(const k of t.plateaus||[]){const F=Math.round(k.r*2*Math.PI/2.3);for(let ee=0;ee<F;ee++){const pe=ee/F*Math.PI*2+Ke()*.2,Se=k.r+Math.sin(pe*5+k.x)*.8+Math.sin(pe*11)*.3-.2,Pe=k.x+Math.cos(pe)*Se,Te=k.z+Math.sin(pe)*Se;t.waterfall&&Math.hypot(Pe-t.waterfall.lip[0],Te-t.waterfall.lip[1])<2.2||_(Pe,Te)<2.6||mt.push({x:Pe,z:Te,s:1.3+Ke()*.9,r:Ke()*6,cliff:!0})}}[0,1,2].map(k=>z_(Jn(31+k*7+t.seed),t.rock[0],t.rock[1],k)).map((k,F)=>{const ee=mt.filter((Se,Pe)=>Pe%3===F),pe=new wn(k,_e,Math.max(1,ee.length));return pe.count=ee.length,ee.forEach((Se,Pe)=>{rt.position.set(Se.x,f(Se.x,Se.z)-.2*Se.s,Se.z),rt.rotation.set(0,Se.r*2,0),rt.scale.set(Se.s*1.1,Se.s*.9,Se.s),rt.updateMatrix(),pe.setMatrixAt(Pe,rt.matrix)}),pe.castShadow=pe.receiveShadow=!0,i.add(pe),Ta(pe,"rock"),pe});const un=f_(i,{heightAt:f,pathDist:_,plinths:Oe,paths:r,lighthouse:je,landDist:u},e,Jn(99+t.seed),n,t),Xn=S_(i,{heightAt:f,pathDist:_,paths:r,lighthouse:je,islandEdge:n},e,t),P=[...Le.map(k=>[k.x,k.z,1.3*k.s]),...mt.map(k=>[k.x,k.z,k.s*1.6]),...Oe.map(k=>[k.x,k.z,1.9])],Q=(k,F)=>{let ee=1;for(const[pe,Se,Pe]of P){const Te=(pe-k)**2+(Se-F)**2;Te<Pe*Pe&&(ee=Math.min(ee,.55+.45*Math.sqrt(Te)/Pe))}return ee},ae=p_(i,{heightAt:f,pathDist:_,plinths:Oe,lighthouse:je,extrasBlock:Xn.blocks,shadeAt:Q},e,t,Jn(7+t.seed)),ce={palm:.9,round:1.45,bush:1,pine:1.35,dead:.6};E_(i,[...Le.map(k=>({x:k.x,y:k.y,z:k.z,r:(ce[k.kind]??1)*k.s})),...mt.map(k=>({x:k.x,y:f(k.x,k.z),z:k.z,r:k.s*(k.cliff?1.7:1.55)})).filter(k=>k.y>.05),...Oe.map(k=>({x:k.x,y:k.y0,z:k.z,r:1.95})),{x:s.x,y:re,z:s.z,r:4.8}]);const J=Float32Array.from(g),ze=[...mt.map(k=>({x:k.x,z:k.z,r:k.s*.85})),...un.obstacles];for(const k of ze){const F=k.r+1,ee=d*2/p,pe=Math.floor((k.x-F+d)/ee),Se=Math.ceil((k.x+F+d)/ee),Pe=Math.floor((k.z-F+d)/ee),Te=Math.ceil((k.z+F+d)/ee);for(let te=Math.max(0,Pe);te<=Math.min(p,Te);te++)for(let $e=Math.max(0,pe);$e<=Math.min(p,Se);$e++){const Xe=-d+$e*ee,pt=-d+te*ee,Rt=Math.max(0,Math.hypot(Xe-k.x,pt-k.z)-k.r);if(Rt>.9)continue;const Dt=te*(p+1)+$e,Oi=.06-Rt*.35,Pt=1-Rt/.9;J[Dt]=Math.max(J[Dt],J[Dt]+(Oi-J[Dt])*Pt*Pt)}}if(t.waterfall&&t.waterfall._lvl!==void 0){const k=t.waterfall;tf(i,{heightTex:nf(J,p+1),ext:d,grid:p,quality:e,sunDir:new V(24,17,4),colors:t.water,level:k._lvl,size:9,maxDepth:.8,center:[(k.pool[0]+k.lip[0])/2,(k.pool[1]+k.lip[1])/2]})}const Ze=tf(i,{heightTex:nf(J,p+1),ext:d,grid:p,quality:e,sunDir:new V(24,17,4),colors:t.water}),it=[{x:s.x,z:s.z,r:3.5},...Oe.map(k=>({x:k.x,z:k.z,r:1.4})),...et.colliders,...mt.filter(k=>f(k.x,k.z)>-.45).map(k=>({x:k.x,z:k.z,r:k.s*.85})),...un.colliders,...Xn.colliders];return{def:t,paths:r,plinths:Oe,lighthouse:je,heightAt:f,pathDist:_,slopeAt:C,isLand:b,isIce:S,landDist:u,isWalkable:(k,F)=>A(k,F)&&!Xn.blocks(k,F),colliders:it,update:k=>{Ze.update(k),un.update(k),Xn.update(k),ae.update(k);const F=je.glow??1,ee=.75+.25*Math.sin(k*1.3)+.1*Math.sin(k*7.1);Je.color.setRGB(1,.85,.75).multiplyScalar(F>0?(.7+1.5*F)*ee:.12),We.intensity=(8+40*F)*ee,Kt.rotation.y=k*.6,et.update(k),ne(k)},terrain:Ee,extras:Xn,grass:ae,cullFade:et.cullFade,treeSpots:Le}}const ao={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class $s{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const k_=new cu(-1,1,1,-1,0,1);class F_ extends Ft{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}}const O_=new F_;class Ga{constructor(e){this._mesh=new lt(O_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,k_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Id extends $s{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof rn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_i.clone(e.uniforms),this.material=new rn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ga(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class lf extends $s{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class B_ extends $s{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class G_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Re);this._width=n.width,this._height=n.height,t=new Yn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ai}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Id(ao),this.copyPass.material.blending=En,this.clock=new gd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}lf!==void 0&&(o instanceof lf?n=!0:o instanceof B_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class V_ extends $s{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ce}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const oa={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Re},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ut},cameraProjectionMatrixInverse:{value:new Ut},cameraWorldMatrix:{value:new Ut},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new V(-1,-1,-1)},sceneBoxMax:{value:new V(1,1,1)}},vertexShader:`

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
		}`},aa={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Pl={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function H_(i=5){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=W_(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){const a=t[o],l=2*Math.PI*a/n,c=new V(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}const r=new Na(s,e,e);return r.wrapS=zi,r.wrapT=zi,r.needsUpdate=!0,r}function W_(i){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0);let s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}const la={defines:{SAMPLES:16,SAMPLE_VECTORS:Ud(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Re},cameraProjectionMatrixInverse:{value:new Ut},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Ud(i,e,t){const n=X_(i,e,t);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function X_(i,e,t){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new V(Math.cos(r),Math.sin(r),o))}return n}class q_{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,d=l-h,p=c-h,g=e-d,M=t-p;let m,f;g>M?(m=1,f=0):(m=0,f=1);const _=g-m+u,b=M-f+u,x=g-1+2*u,C=M-1+2*u,S=l&255,E=c&255,A=this.perm[S+this.perm[E]]%12,y=this.perm[S+m+this.perm[E+f]]%12,v=this.perm[S+1+this.perm[E+1]]%12;let T=.5-g*g-M*M;T<0?n=0:(T*=T,n=T*T*this.dot(this.grad3[A],g,M));let N=.5-_*_-b*b;N<0?s=0:(N*=N,s=N*N*this.dot(this.grad3[y],_,b));let L=.5-x*x-C*C;return L<0?r=0:(L*=L,r=L*L*this.dot(this.grad3[v],x,C)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a;const c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),d=Math.floor(n+c),p=1/6,g=(u+h+d)*p,M=u-g,m=h-g,f=d-g,_=e-M,b=t-m,x=n-f;let C,S,E,A,y,v;_>=b?b>=x?(C=1,S=0,E=0,A=1,y=1,v=0):_>=x?(C=1,S=0,E=0,A=1,y=0,v=1):(C=0,S=0,E=1,A=1,y=0,v=1):b<x?(C=0,S=0,E=1,A=0,y=1,v=1):_<x?(C=0,S=1,E=0,A=0,y=1,v=1):(C=0,S=1,E=0,A=1,y=1,v=0);const T=_-C+p,N=b-S+p,L=x-E+p,U=_-A+2*p,W=b-y+2*p,G=x-v+2*p,z=_-1+3*p,I=b-1+3*p,Y=x-1+3*p,$=u&255,ie=h&255,ge=d&255,Ne=this.perm[$+this.perm[ie+this.perm[ge]]]%12,H=this.perm[$+C+this.perm[ie+S+this.perm[ge+E]]]%12,Z=this.perm[$+A+this.perm[ie+y+this.perm[ge+v]]]%12,ue=this.perm[$+1+this.perm[ie+1+this.perm[ge+1]]]%12;let oe=.6-_*_-b*b-x*x;oe<0?s=0:(oe*=oe,s=oe*oe*this.dot3(this.grad3[Ne],_,b,x));let me=.6-T*T-N*N-L*L;me<0?r=0:(me*=me,r=me*me*this.dot3(this.grad3[H],T,N,L));let De=.6-U*U-W*W-G*G;De<0?o=0:(De*=De,o=De*De*this.dot3(this.grad3[Z],U,W,G));let Ee=.6-z*z-I*I-Y*Y;return Ee<0?a=0:(Ee*=Ee,a=Ee*Ee*this.dot3(this.grad3[ue],z,I,Y)),32*(s+r+o+a)}noise4d(e,t,n,s){const r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,h,d,p,g;const M=(e+t+n+s)*l,m=Math.floor(e+M),f=Math.floor(t+M),_=Math.floor(n+M),b=Math.floor(s+M),x=(m+f+_+b)*c,C=m-x,S=f-x,E=_-x,A=b-x,y=e-C,v=t-S,T=n-E,N=s-A,L=y>v?32:0,U=y>T?16:0,W=v>T?8:0,G=y>N?4:0,z=v>N?2:0,I=T>N?1:0,Y=L+U+W+G+z+I,$=o[Y][0]>=3?1:0,ie=o[Y][1]>=3?1:0,ge=o[Y][2]>=3?1:0,Ne=o[Y][3]>=3?1:0,H=o[Y][0]>=2?1:0,Z=o[Y][1]>=2?1:0,ue=o[Y][2]>=2?1:0,oe=o[Y][3]>=2?1:0,me=o[Y][0]>=1?1:0,De=o[Y][1]>=1?1:0,Ee=o[Y][2]>=1?1:0,Oe=o[Y][3]>=1?1:0,fe=y-$+c,_e=v-ie+c,O=T-ge+c,Qe=N-Ne+c,be=y-H+2*c,Ge=v-Z+2*c,Ie=T-ue+2*c,nt=N-oe+2*c,K=y-me+3*c,R=v-De+3*c,w=T-Ee+3*c,X=N-Oe+3*c,ne=y-1+4*c,se=v-1+4*c,re=T-1+4*c,ke=N-1+4*c,we=m&255,Ue=f&255,ot=_&255,Ae=b&255,qe=a[we+a[Ue+a[ot+a[Ae]]]]%32,at=a[we+$+a[Ue+ie+a[ot+ge+a[Ae+Ne]]]]%32,ut=a[we+H+a[Ue+Z+a[ot+ue+a[Ae+oe]]]]%32,Je=a[we+me+a[Ue+De+a[ot+Ee+a[Ae+Oe]]]]%32,Et=a[we+1+a[Ue+1+a[ot+1+a[Ae+1]]]]%32;let ft=.6-y*y-v*v-T*T-N*N;ft<0?u=0:(ft*=ft,u=ft*ft*this.dot4(r[qe],y,v,T,N));let St=.6-fe*fe-_e*_e-O*O-Qe*Qe;St<0?h=0:(St*=St,h=St*St*this.dot4(r[at],fe,_e,O,Qe));let j=.6-be*be-Ge*Ge-Ie*Ie-nt*nt;j<0?d=0:(j*=j,d=j*j*this.dot4(r[ut],be,Ge,Ie,nt));let Fe=.6-K*K-R*R-w*w-X*X;Fe<0?p=0:(Fe*=Fe,p=Fe*Fe*this.dot4(r[Je],K,R,w,X));let le=.6-ne*ne-se*se-re*re-ke*ke;return le<0?g=0:(le*=le,g=le*le*this.dot4(r[Et],ne,se,re,ke)),27*(u+h+d+p+g)}}class Pi extends $s{constructor(e,t,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=H_(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Yn(this.width,this.height,{type:ai}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new rn({defines:Object.assign({},oa.defines),uniforms:_i.clone(oa.uniforms),vertexShader:oa.vertexShader,fragmentShader:oa.fragmentShader,blending:En,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new $1,this.normalMaterial.blending=En,this.pdMaterial=new rn({defines:Object.assign({},la.defines),uniforms:_i.clone(la.uniforms),vertexShader:la.vertexShader,fragmentShader:la.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new rn({defines:Object.assign({},aa.defines),uniforms:_i.clone(aa.uniforms),vertexShader:aa.vertexShader,fragmentShader:aa.fragmentShader,blending:En}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new rn({uniforms:_i.clone(ao.uniforms),vertexShader:ao.vertexShader,fragmentShader:ao.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ol,blendDst:Jr,blendEquation:vi,blendSrcAlpha:Fl,blendDstAlpha:Jr,blendEquationAlpha:vi}),this.blendMaterial=new rn({uniforms:_i.clone(Pl.uniforms),vertexShader:Pl.vertexShader,fragmentShader:Pl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Pf,blendSrc:Ol,blendDst:Jr,blendEquation:vi,blendSrcAlpha:Fl,blendDstAlpha:Jr,blendEquationAlpha:vi}),this.fsQuad=new Ga(null),this.originalClearColor=new Ce,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new hu,this.depthTexture.format=Gs,this.depthTexture.type=Bs,this.normalRenderTarget=new Yn(this.width,this.height,{minFilter:An,magFilter:An,type:ai,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ud(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Pi.OUTPUT.Off:break;case Pi.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=En,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Pi.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=En,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Pi.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=En,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Pi.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Pi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=En,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Pi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=En,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){const t=new q_,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}const r=new Na(s,e,e,oi,Ni);return r.wrapS=zi,r.wrapT=zi,r.needsUpdate=!0,r}}Pi.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Y_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ur extends $s{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Re(e.x,e.y):new Re(256,256),this.clearColor=new Ce(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Yn(r,o,{type:ai}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Yn(r,o,{type:ai});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new Yn(r,o,{type:ai});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=Y_;this.highPassUniforms=_i.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new rn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Re(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=ao;this.copyUniforms=_i.clone(u.uniforms),this.blendMaterial=new rn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ti,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ce,this.oldClearAlpha=1,this.basic=new zt,this.fsQuad=new Ga(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Re(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ur.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ur.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new rn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Re(.5,.5)},direction:{value:new Re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new rn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ur.BlurDirectionX=new Re(1,0);Ur.BlurDirectionY=new Re(0,1);const $_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class j_ extends $s{constructor(){super();const e=$_;this.uniforms=_i.clone(e.uniforms),this.material=new Y1({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ga(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},It.getTransfer(this._outputColorSpace)===Ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Lf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Df?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===If?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Zc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Uf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zf&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const K_={name:"WarmGrade",uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uTint:{value:new V(1,1,1)},uLift:{value:new V},uSat:{value:1.08}},vertexShader:`
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
    }`},Z_=new URLSearchParams(location.search).get("ao")==="1";function J_(i,e,t,n={}){const s=new G_(i,new Yn(1,1,{type:ai})),r=new V_(e,t),o=new Pi(e,t,1,1,void 0,{radius:.8,distanceExponent:1.3,thickness:1.4,scale:1.2,samples:12});o.blendIntensity=1;const a=new Ur(new Re(256,256),.6,.55,1),l=new Id(K_);n.tint&&l.uniforms.uTint.value.set(...n.tint),n.lift&&l.uniforms.uLift.value.set(...n.lift),n.sat&&(l.uniforms.uSat.value=n.sat),l.uniforms.uVignette.value=n.vignette??.25;const c=new j_;for(const g of[r,o,a,l,c])s.addPass(g);let u="high",h=1,d=1;const p={composer:s,get level(){return u},setLevel(g){u=g,o.enabled=g==="high"&&Z_,a.strength=g==="high"?.6:.5;const M=g==="high"?4:0;for(const m of[s.renderTarget1,s.renderTarget2])m.samples!==M&&(m.samples=M,m.dispose());p.setSize(h,d)},setSize(g,M){h=g,d=M;const m=i.getPixelRatio();s.setPixelRatio(m),s.setSize(g,M);const f=u==="high"?2:4;a.resolution.set(g*m/f,M*m/f),a.setSize(g*m/f,M*m/f)},render(g){s.render(g)}};return p}function Q_(i,e,t,n,s,r=null){const{heightAt:o}=e,a=t.mobile?.5:1,l=new Set(n.life),c=new qt,u=new Ce,h=[],d=()=>{for(let g=0;g<50;g++){const M=(Math.random()-.5)*80,m=(Math.random()-.5)*80,f=o(M,m);if(f>.8)return{x:M,z:m,h:f}}return{x:0,z:0,h:1}};if(l.has("butterflies")){const g=Math.round(26*a),M=new Pr(.16,6,0,Math.PI);M.scale(1,1.3,1);const f=[-1,1].map(()=>new Wt({color:"#ffffff",side:hn})).map(x=>{const C=new wn(M,x,g);return i.add(C),C}),_=Array.from({length:g},(x,C)=>({...d(),a:Math.random()*6,sp:.6+Math.random()*.6,ph:Math.random()*6,home:null})),b=["#ffd84a","#ff9ad0","#9ad8ff","#ffffff","#ffa040"];_.forEach((x,C)=>{x.home={x:x.x,z:x.z},f.forEach(S=>S.setColorAt(C,u.set(b[C%b.length])))}),f.forEach(x=>x.instanceColor.needsUpdate=!0),h.push((x,C)=>{_.forEach((S,E)=>{S.a+=Math.sin(C*.7+S.ph)*1.6*x,S.x+=Math.cos(S.a)*S.sp*x,S.z+=Math.sin(S.a)*S.sp*x,Math.hypot(S.x-S.home.x,S.z-S.home.z)>5&&(S.a=Math.atan2(S.home.z-S.z,S.home.x-S.x));const A=o(S.x,S.z)+.6+Math.sin(C*2+S.ph)*.25,y=Math.sin(C*18+S.ph)*1.1;f.forEach((v,T)=>{c.position.set(S.x,A,S.z),c.rotation.set(0,-S.a+Math.PI/2,0),c.rotateZ((T?1:-1)*(.3+y*.5)),c.rotateX(-Math.PI/2),c.scale.set(T?1:-1,1,1),c.updateMatrix(),v.setMatrixAt(E,c.matrix)})}),f.forEach(S=>S.instanceMatrix.needsUpdate=!0)})}if(l.has("birds")){const M=new Ft;M.setAttribute("position",new ht([-.7,.12,.1,0,0,-.15,0,0,.15,0,0,-.15,.7,.12,.1,0,0,.15],3)),M.computeVertexNormals();const m=new wn(M,new Wt({color:"#f4f4f0",side:hn}),7);m.castShadow=!0,i.add(m);const f=Array.from({length:7},(_,b)=>({cx:(Math.random()-.5)*50,cz:(Math.random()-.5)*50,r:8+Math.random()*10,y:9+Math.random()*4,sp:.15+Math.random()*.1,ph:b}));h.push((_,b)=>{f.forEach((x,C)=>{const S=b*x.sp+x.ph;c.position.set(x.cx+Math.cos(S)*x.r,x.y+Math.sin(b*.7+C)*.4,x.cz+Math.sin(S)*x.r),c.rotation.set(0,-S,Math.sin(b*.5+C)*.15);const E=1+Math.sin(b*6+C)*.35*(Math.sin(b*.4+C)>.3?1:.1),A=r?Mt.smoothstep(c.position.distanceTo(r.position),3,7):1;c.scale.set(1.4*A,E*1.4*A,1.4*A),c.updateMatrix(),m.setMatrixAt(C,c.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(l.has("leaves")){const g=Math.round(60*a),M=new li(.16,.1),m=new wn(M,new Wt({color:"#ffffff",side:hn}),g);i.add(m);const f=Array.from({length:g},(_,b)=>({...d(),ph:Math.random()*6,sp:1+Math.random()*1.5}));f.forEach((_,b)=>m.setColorAt(b,u.set(["#8fbf4a","#c8b04a","#6a9a3a","#d89a3a"][b%4]))),m.instanceColor.needsUpdate=!0,h.push((_,b)=>{f.forEach((x,C)=>{x.x+=x.sp*_,x.z+=Math.sin(b*.8+x.ph)*.6*_,x.x>45&&Object.assign(x,d(),{x:-45});const S=Math.max(o(x.x,x.z),.1)+.3+Math.abs(Math.sin(b*1.3+x.ph))*.9;c.position.set(x.x,S,x.z),c.rotation.set(b*3+x.ph,b*2+x.ph,b*1.5),c.scale.setScalar(1),c.updateMatrix(),m.setMatrixAt(C,c.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(l.has("fireflies")&&s==="skumring"){const g=Math.round(120*a),M=new Float32Array(g*3),m=new Float32Array(g*3),f=Array.from({length:g},()=>({...d(),ph:Math.random()*6})),_=new Ft;_.setAttribute("position",new Xt(M,3)),_.setAttribute("color",new Xt(m,3));const b=document.createElement("canvas");b.width=b.height=32;const x=b.getContext("2d"),C=x.createRadialGradient(16,16,0,16,16,16);C.addColorStop(0,"rgba(255,255,255,1)"),C.addColorStop(1,"rgba(255,255,255,0)"),x.fillStyle=C,x.fillRect(0,0,32,32);const S=new du(_,new ka({size:.35,map:new wi(b),vertexColors:!0,transparent:!0,blending:Ti,depthWrite:!1}));S.frustumCulled=!1,i.add(S),h.push((E,A)=>{f.forEach((y,v)=>{M[v*3]=y.x+Math.sin(A*.4+y.ph)*1.2,M[v*3+1]=y.h+.5+Math.sin(A*.9+y.ph*2)*.4,M[v*3+2]=y.z+Math.cos(A*.35+y.ph)*1.2;const T=Math.max(0,Math.sin(A*1.7+y.ph*3))**3*2.5;m[v*3]=1*T,m[v*3+1]=.9*T,m[v*3+2]=.35*T}),_.attributes.position.needsUpdate=!0,_.attributes.color.needsUpdate=!0})}let p=0;return{update(g){const M=Math.min(.05,Math.max(0,g-p));p=g;for(const m of h)m(M,g)}}}function eM(i,{cell:e=.75,ext:t=68}={}){const n=Math.ceil(t*2/e)+1,s=new Float64Array(n*n),r=new Float32Array(n*n),o=new Float32Array(n*n),a=i.lighthouse.pos,l=(E,A)=>[Math.round((E+t)/e),Math.round((A+t)/e)],c=(E,A)=>[-t+E*e,-t+A*e];let u=()=>!1;function h(){for(let E=0;E<n;E++)for(let A=0;A<n;A++){const[y,v]=c(A,E),T=i.heightAt(y,v),N=E*n+A,L=Math.hypot(y-a.x,v-a.z);let U=1.8;T<-.5||i.slopeAt(y,v)>1.1||i.extras.blocks(y,v)||u(y,v)||L<3.2?U=1/0:i.pathDist(y,v)<1.6?U=.2:T<.05&&(U=2.6),r[N]=U}}function d(){s.fill(1/0),o.fill(0);const E=[],A=(T,N)=>{E.push([T,N]);let L=E.length-1;for(;L>0;){const U=L-1>>1;if(E[U][0]<=E[L][0])break;[E[U],E[L]]=[E[L],E[U]],L=U}},y=()=>{const T=E[0],N=E.pop();if(E.length){E[0]=N;let L=0;for(;;){const U=2*L+1,W=U+1;let G=L;if(U<E.length&&E[U][0]<E[G][0]&&(G=U),W<E.length&&E[W][0]<E[G][0]&&(G=W),G===L)break;[E[G],E[L]]=[E[L],E[G]],L=G}}return T};for(let T=0;T<n;T++)for(let N=0;N<n;N++){const[L,U]=c(N,T),W=Math.hypot(L-a.x,U-a.z);W>=3.2&&W<4.2&&r[T*n+N]<1/0&&(s[T*n+N]=0,A(0,T*n+N))}const v=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;E.length;){const[T,N]=y();if(T>s[N])continue;const L=N%n,U=N/n|0;for(const[W,G,z]of v){const I=L+W,Y=U+G;if(I<0||Y<0||I>=n||Y>=n)continue;const $=Y*n+I,ie=r[$];if(ie===1/0)continue;const ge=T+z*e*(ie+r[N])*.5;ge<s[$]&&(s[$]=ge,o[$]=o[N]+z*e,A(ge,$))}}}const p=(E,A)=>{const[y,v]=l(E,A);return y<0||v<0||y>=n||v>=n?1/0:s[v*n+y]};function g(E,A){const[y,v]=l(E,A);let T=p(E,A),N=0,L=0;for(let W=-1;W<=1;W++)for(let G=-1;G<=1;G++){if(!G&&!W)continue;const z=y+G,I=v+W;if(z<0||I<0||z>=n||I>=n)continue;const Y=s[I*n+z];Y<T&&(T=Y,N=G,L=W)}const U=Math.hypot(N,L)||1;return[N/U,L/U,T]}const M=(E,A)=>{const[y,v]=l(E,A);return y<0||v<0||y>=n||v>=n?-1:v*n+y},m=(E,A)=>{const y=M(E,A);return y<0||s[y]===1/0?0:o[y]};function f(){const E=[];for(const A of i.paths){const y=A.samples.find(v=>i.heightAt(v.x,v.z)>-.4&&m(v.x,v.z)>0);y&&E.push([y.x,y.z])}return E}function _(E,A=22,{near:y=8,minFrac:v=.6}={}){const T=f(),N=Math.max(0,...T.map(([G,z])=>m(G,z))),L=(G,z)=>{const I=i.heightAt(G,z);return I>-.4&&I<.15&&[[4,0],[-4,0],[0,4],[0,-4],[3,3],[-3,3],[3,-3],[-3,-3]].some(([Y,$])=>i.heightAt(G+Y,z+$)<-.9)},U=T.map(([G,z])=>{const I=[],Y=[],$=Math.ceil(y/e),[ie,ge]=l(G,z);for(let H=-$;H<=$;H++)for(let Z=-$;Z<=$;Z++){const[ue,oe]=c(ie+Z,ge+H);Math.hypot(ue-G,oe-z)>y||m(ue,oe)<v*N||(L(ue,oe)?I.push([ue,oe]):i.heightAt(ue,oe)>.3&&i.slopeAt(ue,oe)<.6&&Y.push([ue,oe]))}return(I.length?I:Y).sort(()=>Math.random()-.5)}).filter(G=>G.length).sort(()=>Math.random()-.5),W=[];for(let G=0;W.length<E&&G<4;G++){for(const z of U){const I=z.find(Y=>W.every($=>Math.hypot($[0]-Y[0],$[1]-Y[1])>A));if(I&&W.push(I),W.length>=E)break}A=Math.min(A,6)}return W}let b=null;function x(E,A){if(!b){b=new Float32Array(n*n);for(let G=0;G<n;G++)for(let z=0;z<n;z++){const[I,Y]=c(z,G);b[G*n+z]=i.isWalkable(I,Y)?i.heightAt(I,Y)<.05?1.6:1:1/0}}const y=new Float64Array(n*n).fill(1/0),v=[],T=(G,z)=>{v.push([G,z]);let I=v.length-1;for(;I>0;){const Y=I-1>>1;if(v[Y][0]<=v[I][0])break;[v[Y],v[I]]=[v[I],v[Y]],I=Y}},N=()=>{const G=v[0],z=v.pop();if(v.length){v[0]=z;let I=0;for(;;){const Y=2*I+1,$=Y+1;let ie=I;if(Y<v.length&&v[Y][0]<v[ie][0]&&(ie=Y),$<v.length&&v[$][0]<v[ie][0]&&(ie=$),ie===I)break;[v[ie],v[I]]=[v[I],v[ie]],I=ie}}return G},L=M(E,A);if(L<0)return null;y[L]=0,T(0,L);const U=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;v.length;){const[G,z]=N();if(G>y[z])continue;const I=z%n,Y=z/n|0;for(const[$,ie,ge]of U){const Ne=I+$,H=Y+ie;if(Ne<0||H<0||Ne>=n||H>=n)continue;const Z=H*n+Ne,ue=b[Z];if(ue===1/0)continue;const oe=G+ge*e*ue;oe<y[Z]&&(y[Z]=oe,T(oe,Z))}}const W=(G,z)=>{const I=M(G,z);return I<0?1/0:y[I]};return{at:W,dir(G,z){const[I,Y]=l(G,z);let $=W(G,z),ie=0,ge=0;for(let H=-1;H<=1;H++)for(let Z=-1;Z<=1;Z++){if(!Z&&!H)continue;const ue=I+Z,oe=Y+H;ue<0||oe<0||ue>=n||oe>=n||y[oe*n+ue]<$&&($=y[oe*n+ue],ie=Z,ge=H)}const Ne=Math.hypot(ie,ge)||1;return[ie/Ne,ge/Ne]}}}const C=()=>{let E=0;for(const A of s)A<1/0&&A>E&&(E=A);return E},S=()=>{h(),d()};return S(),{at:p,dir:g,coastPoints:_,roadEnds:f,routeLen:m,walkField:x,rebuild:S,setBlock(E){u=E,S()},maxDist:C(),N:n,cell:e}}function zd(i,e=700,{blending:t=Ti,size:n=.55,opacity:s=1,fadeTo:r=null}={}){const o=new Ce(r||"#000000"),a=new Float32Array(e*3),l=new Float32Array(e*3),c=new Float32Array(e*3),u=new Float32Array(e*3),h=new Float32Array(e),d=new Float32Array(e),p=new Float32Array(e);let g=0;const M=new Ft;M.setAttribute("position",new Xt(a,3)),M.setAttribute("color",new Xt(l,3));const m=document.createElement("canvas");m.width=m.height=64;const f=m.getContext("2d"),_=f.createRadialGradient(32,32,0,32,32,32);_.addColorStop(0,"rgba(255,255,255,1)"),_.addColorStop(.4,"rgba(255,255,255,0.6)"),_.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=_,f.fillRect(0,0,64,64);const b=new ka({size:n,map:new wi(m),vertexColors:!0,transparent:!0,opacity:s,blending:t,depthWrite:!1}),x=new du(M,b);x.frustumCulled=!1,i.add(x);for(let A=0;A<e;A++)a[A*3+1]=-999;const C=new Ce;function S(A,y,v,{n:T=10,color:N="#ffb347",speed:L=4,up:U=3,life:W=.7,gravity:G=9,spread:z=1}={}){C.set(N);for(let I=0;I<T;I++){const Y=g;g=(g+1)%e,a[Y*3]=A,a[Y*3+1]=y,a[Y*3+2]=v;const $=Math.random()*Math.PI*2,ie=L*(.4+Math.random()*.6)*z;c[Y*3]=Math.cos($)*ie,c[Y*3+1]=U*(.5+Math.random()),c[Y*3+2]=Math.sin($)*ie,u[Y*3]=C.r,u[Y*3+1]=C.g,u[Y*3+2]=C.b,d[Y]=h[Y]=W*(.6+Math.random()*.6),p[Y]=G}}function E(A){for(let y=0;y<e;y++){if(h[y]<=0)continue;if(h[y]-=A,h[y]<=0){a[y*3+1]=-999,l[y*3]=l[y*3+1]=l[y*3+2]=0;continue}c[y*3+1]-=p[y]*A,a[y*3]+=c[y*3]*A,a[y*3+1]+=c[y*3+1]*A,a[y*3+2]+=c[y*3+2]*A;const v=h[y]/d[y];l[y*3]=u[y*3]*v+o.r*(1-v),l[y*3+1]=u[y*3+1]*v+o.g*(1-v),l[y*3+2]=u[y*3+2]*v+o.b*(1-v)}M.attributes.position.needsUpdate=!0,M.attributes.color.needsUpdate=!0}return{emit:S,update:E}}const tM={xbox:{build:"Ⓐ",carry:"Ⓑ",next:"Ⓨ",sel:"LB/RB",pause:"☰",restart:"View",name:"Xbox"},ps:{build:"✕",carry:"○",next:"△",sel:"L1/R1",pause:"Options",restart:"Select",name:"PlayStation"},ps3:{build:"✕",carry:"○",next:"△",sel:"L1/R1",pause:"Start",restart:"Select",name:"PlayStation 3"},switch:{build:"A",carry:"B",next:"X",sel:"L/R",pause:"+",restart:"−",name:"Switch"}},nM={build:"B",carry:"E",next:"N",sel:"Z/X",pause:"Esc",restart:"R",name:"Tastatur"},iM={build:"Bygg",carry:"Bær",next:"Neste bølge",sel:"",pause:"⏸",restart:"⏸ → ↺",name:"Berøring"};function sM(i=""){const e=i.toLowerCase();return/nintendo|pro controller|joy-con|joycon|057e/.test(e)?"switch":/0268|playstation\(r\)\s*3|ps3/.test(e)?"ps3":/playstation|dualshock|dualsense|wireless controller|054c|sony/.test(e)?"ps":"xbox"}function rM(i=""){const e=i.toLowerCase();return/0268|playstation\(r\)\s*3|ps3/.test(e)?"PS3 (DualShock 3)":/0ce6|0df2|dualsense/.test(e)?"PS5 (DualSense)":/05c4|09cc|0ba0|dualshock\s*4/.test(e)?"PS4 (DualShock 4)":/playstation|wireless controller|054c|sony/.test(e)?"PlayStation":/xbox|xinput|045e/.test(e)?"Xbox":/nintendo|pro controller|057e/.test(e)?"Switch Pro":/joy-con|joycon/.test(e)?"Joy-Con":"Spillkontroll"}const hs={evdev:{btn:[0,1,3,2,4,5,6,7,8,9,11,12],home:10,hat:[6,7],look:3},ds3:{btn:[0,1,3,2,4,5,6,7,8,9,11,12],home:10,dpad:[13,14,15,16],look:3},ds3old:{btn:[14,13,15,12,10,11,8,9,0,3,1,2],home:16,dpad:[4,6,7,5],look:2},dinput:{btn:[0,1,2,3,4,5,6,7,8,9,10,11],home:12,hat9:!0,look:2}};function oM(i,e=[]){return i.mapping==="standard"?null:/0268|playstation\(r\)\s*3/i.test(i.id)?i.axes.length>8?hs.ds3old:hs.ds3:Math.abs(e[9]??0)>1.1?hs.dinput:i.axes.length>=8?hs.evdev:hs.dinput}function aM(i){if(i===void 0||i>1.1||i<-1.1)return[!1,!1,!1,!1];const e=Math.round((i+1)*3.5)%8;return[e===7||e<=1,e>=3&&e<=5,e>=5&&e<=7,e>=1&&e<=3]}function lM(i,e=[]){const t=i.buttons.map(a=>!!a&&(a.pressed||a.value>.5)),n=oM(i,e);if(!n)return{down:t,axes:[i.axes[0]||0,i.axes[1]||0,i.axes[2]||0,i.axes[3]||0],layout:"standard"};const s=n.btn.map(a=>!!t[a]);let r=[!1,!1,!1,!1];if(n.dpad)r=n.dpad.map(a=>!!t[a]);else if(n.hat&&i.axes.length>n.hat[1]){const a=i.axes[n.hat[0]],l=i.axes[n.hat[1]];r=[l<-.5,l>.5,a<-.5,a>.5]}else n.hat9&&(r=aM(i.axes[9]));s.push(...r,!!t[n.home]);const o=a=>Math.abs(e[a]??0)>.5?0:i.axes[a]||0;return{down:s,axes:[o(0),o(1),o(n.look),o(n.look+1)],layout:n===hs.evdev?"evdev":n===hs.ds3?"ds3":n===hs.ds3old?"ds3old":"dinput"}}function cM(i){const e=i==="switch";return{build:e?1:0,carry:e?0:1,next:3,prev:4,nextSel:5,zoomOut:6,zoomIn:7,pause:9,back:8}}function uM(i){const e=new Set,t={move:{x:0,z:0},look:0,lookDelta:0,zoom:1,pressed:new Set,rollMode:!1,clicks:[],device:matchMedia("(pointer: coarse)").matches?"touch":"kb",padKind:"xbox",padId:""},n=v=>t.pressed.add(v),s=v=>{t.device=v};addEventListener("keydown",v=>{if(s("kb"),(v.code==="Space"||v.code.startsWith("Arrow")||v.code==="Tab")&&v.preventDefault(),v.repeat)return;if(t.rollMode){const N={ArrowUp:"rU",KeyW:"rU",ArrowRight:"rR",KeyD:"rR",ArrowDown:"rD",KeyS:"rD",ArrowLeft:"rL",KeyA:"rL",Escape:"rollExit",KeyQ:"rollExit"}[v.code];if(N){n(N);return}}e.add(v.code);const T={KeyE:"carry",Space:"carry",KeyB:"build",Digit1:"b1",Digit2:"b2",Digit3:"b3",Digit4:"b4",Digit5:"b5",Digit6:"b6",Digit7:"b7",Numpad1:"b1",Numpad2:"b2",Numpad3:"b3",Numpad4:"b4",Numpad5:"b5",Numpad6:"b6",Numpad7:"b7",KeyZ:"selPrev",KeyX:"selNext",KeyQ:"selPrev",KeyR:"restart",KeyN:"next",Enter:"next",KeyF:"fps",KeyM:"music",Escape:"pause",KeyP:"pause"};T[v.code]&&n(T[v.code])}),addEventListener("keyup",v=>e.delete(v.code)),addEventListener("blur",()=>e.clear()),i.addEventListener("wheel",v=>{v.preventDefault(),s("kb"),t.zoom=ca(t.zoom*(v.deltaY>0?1.08:1/1.08),.55,4.5)},{passive:!1}),i.addEventListener("contextmenu",v=>v.preventDefault());const r=new Map;let o=0,a=1,l=null;const c=v=>({x:v.clientX/innerWidth*2-1,y:-(v.clientY/innerHeight)*2+1});i.addEventListener("pointerdown",v=>{if(s(v.pointerType==="touch"?"touch":"kb"),v.pointerType==="mouse"&&v.button===2){l={x:v.clientX},i.setPointerCapture(v.pointerId);return}v.pointerType==="mouse"&&v.button!==0||(r.set(v.pointerId,{e:v,t:performance.now(),x0:v.clientX,y0:v.clientY}),r.size===2&&(o=cf(r),a=t.zoom))}),i.addEventListener("pointermove",v=>{if(l){t.lookDelta+=(v.clientX-l.x)*.008,l.x=v.clientX;return}const T=r.get(v.pointerId);T&&(T.e=v,r.size===2&&o>0&&(t.zoom=ca(a*(o/cf(r)),.55,4.5)))});const u=v=>{if(l&&v.button===2){l=null;return}const T=r.get(v.pointerId);T&&r.size===1&&o===0&&Math.hypot(v.clientX-T.x0,v.clientY-T.y0)<12&&t.clicks.push(c(v)),r.delete(v.pointerId),r.size<2&&(o=0)};i.addEventListener("pointerup",u),i.addEventListener("pointercancel",v=>{r.delete(v.pointerId),l=null,o=0});const h=document.getElementById("stick"),d=document.getElementById("knob"),p={x:0,z:0};let g=null;const M=v=>{const T=h.getBoundingClientRect();let N=v.clientX-(T.left+T.width/2),L=v.clientY-(T.top+T.height/2);const U=T.width/2,W=Math.hypot(N,L);W>U&&(N*=U/W,L*=U/W),d.style.transform=`translate(${N}px, ${L}px)`;const G=W/U<.15?0:1;p.x=N/U*G,p.z=L/U*G};h.addEventListener("pointerdown",v=>{s("touch"),g=v.pointerId,h.setPointerCapture(v.pointerId),M(v)}),h.addEventListener("pointermove",v=>{v.pointerId===g&&M(v)});const m=v=>{v.pointerId===g&&(g=null,p.x=p.z=0,d.style.transform="")};h.addEventListener("pointerup",m),h.addEventListener("pointercancel",m);const f=(v,T)=>v.addEventListener("pointerdown",N=>{N.preventDefault(),N.stopPropagation(),N.pointerType==="touch"&&s("touch"),n(T)});f(document.getElementById("btn-build"),"build"),f(document.getElementById("btn-carry"),"carry"),f(document.getElementById("btn-next"),"next"),f(document.getElementById("btn-pause"),"pause"),document.querySelectorAll("#build-panel button").forEach((v,T)=>f(v,"b"+(T+1))),document.querySelectorAll("#rollpad [data-r]").forEach(v=>f(v,v.dataset.r)),f(document.getElementById("btn-rollexit"),"rollExit");let _=[],b=null,x={dir:null,t:0,rep:0},C=0,S=0;t.padSeen=!1,t.onPad=null;const E=v=>{var T;b=v?v.axes.slice():null,_=[],v&&(t.padId=v.id,t.padKind=sM(v.id),t.padSeen=!0,(T=t.onPad)==null||T.call(t,"connect",v.id))};addEventListener("gamepadconnected",v=>{v.gamepad.id!==t.padId&&E(v.gamepad)}),addEventListener("gamepaddisconnected",v=>{var T;v.gamepad.id===t.padId&&(t.padId="",b=null,(T=t.onPad)==null||T.call(t,"disconnect",v.gamepad.id),t.device==="pad"&&(t.device=matchMedia("(pointer: coarse)").matches?"touch":"kb"))});let A=null;function y(v){var ue,oe;let T=[];try{T=navigator.getGamepads?[...navigator.getGamepads()]:[]}catch{T=[]}const N=T.find(me=>me&&me.connected&&me.id===t.padId)||T.find(me=>me&&me.connected);if(A=N||null,!N)return null;(N.id!==t.padId||!b)&&E(N);const L=cM(t.padKind),{down:U,axes:W}=lM(N,b),G=_,z=me=>U[me]&&!G[me],I=me=>Math.abs(me)<.2?0:(me-Math.sign(me)*.2)/.8;let Y=I(W[0]),$=I(W[1]);const ie=U[14]?-1:U[15]?1:0,ge=U[12]?-1:U[13]?1:0;ie&&(Y=ie),ge&&($=ge);const Ne=I(W[2]);if((Y||$||Ne||U.some(Boolean))&&s("pad"),_=U,(ue=t.menu)==null?void 0:ue.root()){const me=ge<0||W[1]<-.6?"up":ge>0||W[1]>.6?"down":ie<0||W[0]<-.6?"left":ie>0||W[0]>.6?"right":null;return me!==x.dir?(x={dir:me,t:0,rep:0},me&&t.menu.move(me)):me&&(x.t+=v,x.t>.4+x.rep*.15&&(x.rep++,t.menu.move(me))),z(L.build)&&t.menu.ok(),z(L.carry)&&t.menu.back(),z(L.pause)&&n("pause"),z(L.back)&&n("restart"),{x:0,z:0,look:0,zoomIn:!1,zoomOut:!1}}return x.dir=null,t.rollMode?(z(12)&&n("rU"),z(15)&&n("rR"),z(13)&&n("rD"),z(14)&&n("rL"),z(L.carry)&&n("rollExit"),S=Math.hypot(W[0],W[1])>.6?S+v:0,S>=.3&&(S=0,n("rollExit")),z(L.pause)&&n("pause"),{x:0,z:0,look:Ne,zoomIn:U[L.zoomIn],zoomOut:U[L.zoomOut]}):(S=0,(oe=t.panelOpen)!=null&&oe.call(t)&&ie?(z(14)&&n("selPrev"),z(15)&&n("selNext"),C+=v,C<.25&&!I(W[0])&&(Y=0)):C=0,z(L.build)&&n("build"),z(L.carry)&&n("carry"),z(L.next)&&n("next"),z(L.prev)&&n("selPrev"),z(L.nextSel)&&n("selNext"),z(L.pause)&&n("pause"),z(L.back)&&n("restart"),z(2)&&t.padKind!=="switch"&&n("next"),{x:Y,z:$,look:Ne,zoomIn:U[L.zoomIn],zoomOut:U[L.zoomOut]})}return t.rumble=(v=200,T=.6)=>{var N,L,U,W;if(!(!A||t.device!=="pad"))try{(N=A.vibrationActuator)!=null&&N.playEffect?A.vibrationActuator.playEffect("dual-rumble",{duration:v,strongMagnitude:T,weakMagnitude:T/2}):(W=(U=(L=A.hapticActuators)==null?void 0:L[0])==null?void 0:U.pulse)==null||W.call(U,T,v)}catch{}},t.update=v=>{let T=0,N=0;(e.has("KeyA")||e.has("ArrowLeft"))&&(T-=1),(e.has("KeyD")||e.has("ArrowRight"))&&(T+=1),(e.has("KeyW")||e.has("ArrowUp"))&&(N-=1),(e.has("KeyS")||e.has("ArrowDown"))&&(N+=1);const L=y(v);L&&(L.x||L.z)&&(T=L.x,N=L.z),(p.x||p.z)&&(T=p.x,N=p.z);const U=Math.hypot(T,N);U>1&&(T/=U,N/=U),t.move.x=T,t.move.z=N,t.look=t.lookDelta+(L?L.look*2.2*v:0),t.lookDelta=0,L!=null&&L.zoomIn&&(t.zoom=ca(t.zoom/(1+v*1.2),.55,4.5)),L!=null&&L.zoomOut&&(t.zoom=ca(t.zoom*(1+v*1.2),.55,4.5))},t.labels=()=>t.device==="pad"?tM[t.padKind]:t.device==="touch"?iM:nM,t.consume=v=>t.pressed.delete(v),t.clear=()=>{t.pressed.clear(),t.clicks.length=0},t}const ca=(i,e,t)=>Math.max(e,Math.min(t,i));function cf(i){const[e,t]=[...i.values()].map(n=>n.e);return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)||1}const ri=i=>document.getElementById(i),hM=["btn-start","btn-again","btn-yes","btn-resume","btn-portrait"];function fM(i){let e=null;const t=u=>u&&!u.classList.contains("hidden")&&getComputedStyle(u).display!=="none";function n(){return t(ri("rotate"))?ri("rotate"):t(ri("pause"))?t(ri("confirm"))?ri("confirm"):ri("pause"):t(ri("overlay"))?ri("overlay"):null}const s=u=>[...u.querySelectorAll("button, input[type=range]")].filter(h=>!h.disabled&&h.offsetParent!==null&&!h.closest(".hidden")&&(u.id==="confirm"||!h.closest("#confirm")));function r(u){var h;e&&e!==u&&e.classList.remove("pad-focus"),e=u,u&&(i.device==="pad"&&u.classList.add("pad-focus"),(h=u.scrollIntoView)==null||h.call(u,{block:"nearest"}))}function o(){const u=n();if(!u)return e&&(e.classList.remove("pad-focus"),e=null),null;const h=s(u);return(!e||!h.includes(e))&&r(hM.map(d=>h.find(p=>p.id===d)).find(Boolean)||h[0]||null),e&&e.classList.toggle("pad-focus",i.device==="pad"),u}function a(u){const h=o();if(!h||!e)return;if(e.type==="range"&&(u==="left"||u==="right")){e.value=String(Math.max(0,Math.min(100,+e.value+(u==="left"?-10:10)))),e.dispatchEvent(new Event("input",{bubbles:!0}));return}const d=e.getBoundingClientRect(),p=d.left+d.width/2,g=d.top+d.height/2,[M,m]={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]}[u];let f=null,_=1/0,b=!1;for(const x of s(h)){if(x===e)continue;const C=x.getBoundingClientRect(),S=C.left+C.width/2-p,E=C.top+C.height/2-g,A=S*M+E*m,y=Math.abs(S*m-E*M);if(A<=4)continue;const v=y<=A,T=A+y*2;(v&&!b||v===b&&T<_)&&(_=T,f=x,b=v)}f&&r(f)}function l(){!o()||!e||e.type==="range"||e.click()}function c(){const u=o();u&&(u.id==="confirm"?ri("btn-no").click():u.id==="pause"&&(t(ri("lex"))?ri("lex").classList.add("hidden"):ri("btn-resume").click()))}return{root:()=>o(),move:a,ok:l,back:c,sync:o,get focused(){return e}}}let Jt=null,yr=null,_o=null;function dM(){if(Jt){Jt.resume();return}const i=window.AudioContext||window.webkitAudioContext;if(!i)return;Jt=new i,yr=Jt.createGain(),yr.gain.value=.5,yr.connect(Jt.destination),_o=Jt.createBuffer(1,Jt.sampleRate*2,Jt.sampleRate);const e=_o.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1;pM()}const Nd=()=>Jt?{ctx:Jt,noiseBuf:_o}:null;function nn(i,e,{type:t="sine",vol:n=.2,slide:s=0,delay:r=0}={}){if(!Jt)return;const o=Jt.currentTime+r,a=Jt.createOscillator(),l=Jt.createGain();a.type=t,a.frequency.setValueAtTime(i,o),s&&a.frequency.exponentialRampToValueAtTime(Math.max(30,i+s),o+e),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(n,o+.01),l.gain.exponentialRampToValueAtTime(1e-4,o+e),a.connect(l).connect(yr),a.start(o),a.stop(o+e+.02)}function Xi(i,{vol:e=.3,freq:t=800,q:n=.7,delay:s=0}={}){if(!Jt)return;const r=Jt.currentTime+s,o=Jt.createBufferSource();o.buffer=_o;const a=Jt.createBiquadFilter();a.type="lowpass",a.frequency.value=t,a.Q.value=n;const l=Jt.createGain();l.gain.setValueAtTime(e,r),l.gain.exponentialRampToValueAtTime(1e-4,r+i),o.connect(a).connect(l).connect(yr),o.start(r,Math.random()),o.stop(r+i+.02)}function pM(){const i=Jt.createBufferSource();i.buffer=_o,i.loop=!0;const e=Jt.createBiquadFilter();e.type="lowpass",e.frequency.value=420;const t=Jt.createGain();t.gain.value=.035;const n=Jt.createOscillator(),s=Jt.createGain();n.frequency.value=.12,s.gain.value=.03,n.connect(s).connect(t.gain),i.connect(e).connect(t).connect(yr),i.start(),n.start()}let uf=0;const Lt={pickup(){if(!Jt)return;const i=Jt.currentTime,e=i-uf<.4?1.12:1;uf=i,nn(880*e+Math.random()*60,.12,{type:"triangle",vol:.12}),nn(1320*e,.1,{type:"sine",vol:.06,delay:.04})},puff(){Xi(.18,{vol:.07,freq:600,q:.3}),nn(240,.12,{vol:.04,slide:-60})},crunch(){for(let i=0;i<4;i++)Xi(.05,{vol:.1,freq:3500,delay:i*.03});nn(130,.18,{vol:.08,slide:-40})},skank(){[[392,494,587],[349,440,523]][Math.random()<.5?0:1].forEach(i=>nn(i,.11,{type:"square",vol:.025})),nn(98,.3,{vol:.08})},chill(){nn(330,.5,{type:"sine",vol:.07,slide:160}),nn(495,.45,{type:"triangle",vol:.04,slide:120,delay:.08})},shoot(){nn(520,.07,{type:"square",vol:.03,slide:-300})},mortar(){Xi(.12,{vol:.12,freq:500}),nn(160,.15,{type:"sine",vol:.12,slide:-80})},boom(){Xi(.45,{vol:.28,freq:380}),nn(90,.35,{vol:.18,slide:-50})},horn(){nn(196,.5,{type:"sawtooth",vol:.035}),nn(147,.55,{type:"sine",vol:.06})},hit(){Xi(.05,{vol:.08,freq:2500})},die(){nn(420,.18,{type:"triangle",vol:.09,slide:-280}),Xi(.12,{vol:.07,freq:1200})},build(){[392,494,587].forEach((i,e)=>nn(i,.25,{type:"triangle",vol:.1,delay:e*.06}))},upgrade(){[523,659,784,1047].forEach((i,e)=>nn(i,.22,{type:"triangle",vol:.1,delay:e*.07}))},bonk(){nn(110,.16,{type:"sine",vol:.12,slide:-40}),Xi(.05,{vol:.05,freq:400})},tick(i=1){Xi(.025,{vol:.06,freq:4e3}),nn(392*Math.pow(2,i/12*2),.07,{type:"triangle",vol:.07})},stone(){nn(660,.2,{type:"sine",vol:.1,slide:200})},lose(){nn(220,.6,{type:"sawtooth",vol:.06,slide:-120}),Xi(.3,{vol:.08,freq:300})},stun(){nn(700,.4,{type:"square",vol:.05,slide:-500})},deny(){nn(150,.12,{type:"square",vol:.05})},wave(){[330,330,440].forEach((i,e)=>nn(i,.3,{type:"sawtooth",vol:.04,delay:e*.18}))},win(){[523,659,784,1047,1319].forEach((i,e)=>nn(i,.4,{type:"triangle",vol:.12,delay:e*.12}))}},kc=172,qi=60/kc/4,Cs=i=>440*Math.pow(2,(i-69)/12),hf={tak:{chords:[[50,66,69,73,76],[47,62,66,69,74],[43,59,62,66,71],[45,61,64,69,73]],hook:[[0,78,3],[3,76,3],[6,73,2],[8,74,4],[14,71,2],[16,73,3],[19,74,3],[22,76,6],[28,69,4]],pad:"sawtooth",padCut:2400,arpOct:12,reeseDetune:9,drive:0,space:.35,arpRate:1,lead:"square"},vinter:{chords:[[45,60,64,71,76],[41,57,64,69,72],[48,64,67,72,79],[43,59,62,67,71]],hook:[[0,76,6],[6,74,2],[8,72,6],[16,71,4],[20,72,2],[22,74,4],[26,79,6]],pad:"triangle",padCut:1500,arpOct:24,reeseDetune:6,drive:0,space:.6,arpRate:2,lead:"triangle"},vulkan:{chords:[[40,55,59,64,67],[41,57,60,65,69],[40,55,59,64,71],[38,54,57,62,66]],hook:[[0,64,2],[2,65,2],[4,64,4],[10,62,2],[12,59,4],[16,64,2],[18,67,2],[20,65,4],[26,64,6]],pad:"sawtooth",padCut:900,arpOct:0,reeseDetune:16,drive:.6,space:.25,arpRate:1,lead:"sawtooth"}},Ll={A:{k:"x.x.......xx....x.x.......x.....",s:"....x..x.x..x..x....x..x.x..x.x.",g:"..........x...........x.....x..."},B:{k:"x.....x...x.x...x.x...x...x.....",s:"....x.x..x..x.x.....x..xx..x..x.",g:".x.......x.....x.x.......x......"},FILL:{k:"x.x.......x.....x...............",s:"....x..x.x..x..x....x.xxxxxxxxxx",g:"................................"}},ff=[["build",8],["drop",16],["break",8],["drop",16]];function mM(i,e,t){const n=hf[t]||hf.tak,s=i.createDynamicsCompressor();s.threshold.value=-18,s.ratio.value=3,s.attack.value=.01,s.release.value=.2;const r=i.createDynamicsCompressor();r.threshold.value=-3,r.ratio.value=20,r.attack.value=.002,r.release.value=.08;const o=i.createGain();o.gain.value=0,s.connect(r).connect(o).connect(i.destination);const a=i.createAnalyser();a.fftSize=1024,o.connect(a);const l={};for(const K of["drums","bass","pad","arp","lead"]){const R=i.createGain();R.gain.value=0,R.connect(s),l[K]=R}const c={};for(const K of["pad","bass"]){const R=i.createGain();R.gain.value=1,R.connect(l[K]),c[K]=R}const u=(K,R)=>{const w=i.createBuffer(2,Math.floor(i.sampleRate*K),i.sampleRate);for(let X=0;X<2;X++){const ne=w.getChannelData(X);for(let se=0;se<ne.length;se++)ne[se]=(Math.random()*2-1)*Math.pow(1-se/ne.length,R)}return w},h=i.createConvolver();h.buffer=u(2.4,2.5);const d=i.createGain();d.gain.value=n.space,h.connect(d).connect(s);const p=i.createConvolver();p.buffer=u(.5,.4);const g=i.createGain();g.gain.value=0,p.connect(g).connect(l.drums);const M=i.createDelay(1);M.delayTime.value=qi*3;const m=i.createGain();m.gain.value=.38;const f=i.createBiquadFilter();f.type="lowpass",f.frequency.value=2400;const _=i.createStereoPanner(),b=i.createOscillator(),x=i.createGain();b.frequency.value=kc/60/3,x.gain.value=.8,b.connect(x).connect(_.pan),b.start(),M.connect(f).connect(m).connect(M),f.connect(_).connect(l.arp);const C=i.createBiquadFilter();C.type="highpass",C.frequency.value=180;const S=i.createBiquadFilter();S.type="lowpass",S.frequency.value=n.padCut,S.Q.value=2;const E=i.createOscillator(),A=i.createGain();E.frequency.value=.07,A.gain.value=n.padCut*.45,E.connect(A).connect(S.frequency),E.start();const y=i.createDelay(.05);y.delayTime.value=.014;const v=i.createOscillator(),T=i.createGain();v.frequency.value=.5,T.gain.value=.004,v.connect(T).connect(y.delayTime),v.start();const N=i.createStereoPanner();N.pan.value=.6,C.connect(S),S.connect(c.pad),S.connect(y).connect(N).connect(c.pad),S.connect(h);const L=i.createBiquadFilter();L.type="lowpass",L.frequency.value=420,L.Q.value=6;const U=i.createOscillator(),W=i.createGain();if(U.frequency.value=kc/60/4,W.gain.value=260,U.connect(W).connect(L.frequency),U.start(),n.drive>0){const K=i.createWaveShaper(),R=new Float32Array(1024);for(let w=0;w<1024;w++){const X=w/512-1;R[w]=Math.tanh(X*(1+n.drive*6))}K.curve=R,L.connect(K).connect(c.bass)}else L.connect(c.bass);const G=i.createBiquadFilter();G.type="lowpass",G.frequency.value=3600,G.Q.value=3,G.connect(l.lead),G.connect(M),G.connect(h);const z=(K,R,w,X,ne,se)=>{K.gain.setValueAtTime(1e-4,R),K.gain.exponentialRampToValueAtTime(X,R+w),K.gain.setValueAtTime(X,R+Math.max(w,se-ne)),K.gain.exponentialRampToValueAtTime(1e-4,R+se)},I=(K,R)=>{const w=i.createStereoPanner();return w.pan.value=R,K.connect(w),w},Y=(K,R,w,X,ne,se,re="bandpass",ke=0)=>{const we=i.createBufferSource();we.buffer=e;const Ue=i.createBiquadFilter();Ue.type=re,Ue.frequency.value=w,Ue.Q.value=X;const ot=i.createGain();z(ot,K,.001,ne,R*.8,R),we.connect(Ue).connect(ot);const Ae=ke?I(ot,ke):ot;for(const qe of se)Ae.connect(qe);we.start(K,Math.random()*1.5),we.stop(K+R+.02)},$=(K,R=1)=>{const w=i.createOscillator(),X=i.createGain();w.frequency.setValueAtTime(160,K),w.frequency.exponentialRampToValueAtTime(44,K+.11),z(X,K,.002,1*R,.2,.3),w.connect(X).connect(l.drums),w.start(K),w.stop(K+.32),Y(K,.012,3500,.7,.35*R,[l.drums],"highpass");for(const ne of Object.values(c))ne.gain.cancelScheduledValues(K),ne.gain.setValueAtTime(.35,K),ne.gain.linearRampToValueAtTime(1,K+.2)},ie=(K,R=1)=>{Y(K,.17,1900,.8,.5*R,[l.drums,p]);for(const[w,X,ne]of[[200,160,.3],[340,260,.14]]){const se=i.createOscillator(),re=i.createGain();se.type="triangle",se.frequency.setValueAtTime(w,K),se.frequency.exponentialRampToValueAtTime(X,K+.08),z(re,K,.001,ne*R,.06,.11),se.connect(re).connect(l.drums),se.start(K),se.stop(K+.13)}g.gain.setValueAtTime(.9*R,K),g.gain.setValueAtTime(1e-4,K+.21)};let ge=1;const Ne=(K,R,w)=>{ge=-ge,Y(K,w?.14:.035,9e3,.6,(w?.12:.08)*R,[l.drums],"highpass",ge*.35)},H=(K,R,w)=>{for(const se of[-n.reeseDetune,n.reeseDetune]){const re=i.createOscillator(),ke=i.createGain();re.type="sawtooth",re.frequency.value=Cs(R),re.detune.value=se,z(ke,K,.02,.2,.1,w),I(re.connect(ke),se>0?.25:-.25).connect(L),re.start(K),re.stop(K+w+.05)}const X=i.createOscillator(),ne=i.createGain();X.frequency.value=Cs(R-12),z(ne,K,.02,.42,.1,w),X.connect(ne).connect(c.bass),X.start(K),X.stop(K+w+.05)},Z=(K,R,w,X=1)=>{for(const ne of R.slice(1))for(const[se,re]of[[-9,-.6],[0,0],[8,.6]]){const ke=i.createOscillator(),we=i.createGain();ke.type=n.pad,ke.frequency.value=Cs(ne),ke.detune.value=se,z(we,K,.8,.026*X,1.4,w),I(ke.connect(we),re).connect(C),ke.start(K),ke.stop(K+w+.1)}},ue=(K,R,w=1)=>{const X=i.createOscillator(),ne=i.createGain();X.type="square",X.frequency.value=Cs(R+n.arpOct);const se=i.createBiquadFilter();se.type="lowpass",se.frequency.value=3200,z(ne,K,.003,.05*w,.08,qi*1.6),X.connect(se).connect(ne),ne.connect(l.arp),ne.connect(M),X.start(K),X.stop(K+qi*2)},oe=(K,R,w,X)=>{const ne=w*qi;for(const se of[-6,6]){const re=i.createOscillator(),ke=i.createGain();re.type=n.lead,X?(re.frequency.setValueAtTime(Cs(X),K),re.frequency.exponentialRampToValueAtTime(Cs(R),K+.05)):re.frequency.value=Cs(R),re.detune.value=se;const we=i.createOscillator(),Ue=i.createGain();we.frequency.value=5.5,Ue.gain.value=9,we.connect(Ue).connect(re.detune),we.start(K+.12),we.stop(K+ne+.05),z(ke,K,.01,.07,Math.min(.12,ne*.4),ne),I(re.connect(ke),se>0?.2:-.2).connect(G),re.start(K),re.stop(K+ne+.05)}};let me=0,De=0,Ee=null,Oe=0,fe=.7,_e=!1,O=0;const Qe=ff.reduce((K,[,R])=>K+R,0),be=()=>{if(Oe<.5)return"ambient";let K=O%Qe;for(const[R,w]of ff){if(K<w)return R;K-=w}return"drop"},Ge=()=>{const K=i.currentTime,R=(X,ne)=>{X.gain.cancelScheduledValues(K),X.gain.setTargetAtTime(ne,K,.8)},w=Oe;R(l.drums,.1+.85*w),R(l.bass,.3+.6*w),R(l.pad,.75-.2*w),R(l.arp,.35+.3*w),R(l.lead,.55+.35*w),o.gain.cancelScheduledValues(K),o.gain.setTargetAtTime(_e?0:fe*.8,K,.3)},Ie=K=>K%2?qi*.12:0,nt=()=>{for(;De<i.currentTime+.15;){const K=me%32,R=Math.floor(me/16),w=Math.floor(me/32)%n.chords.length,X=n.chords[w];K%16===0&&me>0&&Oe>.5&&O++;const ne=be(),se=De+Ie(K),re=O%8;if(ne==="drop"||ne==="build"){const we=re%4===3&&K>=16?Ll.FILL:re>=6?Ll.B:Ll.A,Ue=ne==="build"&&re<4;we.k[K]==="x"&&!(Ue&&K%8)&&$(se),we.s[K]==="x"&&!Ue&&ie(se,ne==="build"?.7:1),we.g[K]==="x"&&ie(se,.3),(!Ue||K%2===0)&&Ne(se,K%2?.6:1,K%8===6)}else ne==="break"?(K%4===2&&Ne(se,.6,!1),(K===0||K===16)&&$(se,.4)):K%4===2&&Ne(se,.45,!1);if(K===0&&(Z(se,X,qi*32,ne==="break"?1.3:1),H(se,X[0],qi*(ne==="drop"?14:30))),ne==="drop"&&K===16&&H(se,X[0]+(w%2?3:7),qi*14),K%n.arpRate===0&&ne!=="break"&&ue(se,X[1+K/n.arpRate%4]+(K>=16?12:0),ne==="ambient"?.7:1),ne==="drop"||(ne==="break"||ne==="ambient")&&Math.floor(R/4)%2===1){const we=n.hook.findIndex(([Ue])=>Ue===K);if(we>=0){const[,Ue,ot]=n.hook[we];oe(se,Ue+(ne==="ambient"?-12:0),ot,we>0?n.hook[we-1][1]:0)}}De+=qi,me++}};return{start(){Ee||(De=i.currentTime+.1,Ee=setInterval(nt,25),Ge())},stop(){clearInterval(Ee),Ee=null,o.gain.setTargetAtTime(0,i.currentTime,.2)},setIntensity(K){K>.5&&Oe<=.5&&(O=0),Oe=K,Ge()},setVolume(K){fe=K,Ge()},setMuted(K){_e=K,Ge()},get muted(){return _e},get volume(){return fe},rms(){const K=new Float32Array(a.fftSize);return a.getFloatTimeDomainData(K),Math.sqrt(K.reduce((R,w)=>R+w*w,0)/K.length)},get intensity(){return Oe},get section(){return be()},tap(K){o.connect(K)}}}const df=i=>440*Math.pow(2,(i-69)/12),Zr=60/76,pf={tak:{chords:[[50,62,66,69,73],[47,59,62,66,71],[43,59,62,67,71],[45,57,61,64,69]],scale:[62,64,66,69,71,74,76,78,81],bell:"sine",padCut:1400,nature:"birds"},vinter:{chords:[[45,57,64,67,71],[41,57,60,64,67],[48,60,64,67,74],[43,55,62,67,69]],scale:[64,67,69,71,74,76,79,81,83],bell:"triangle",padCut:1100,nature:"wind"},vulkan:{chords:[[40,52,59,62,67],[41,53,60,64,67],[38,50,57,62,65],[40,52,55,59,64]],scale:[52,55,57,59,62,64,67,69,71],bell:"sine",padCut:800,nature:"rumble"}},mf=8;function gM(i,e,t){const n=pf[t]||pf.tak,s=i.createDynamicsCompressor();s.threshold.value=-20,s.ratio.value=2.5,s.attack.value=.03,s.release.value=.4;const r=i.createGain();r.gain.value=0,s.connect(r).connect(i.destination);const o=i.createAnalyser();o.fftSize=1024,r.connect(o);const a={};for(const H of["pad","bell","nature","pulse"]){const Z=i.createGain();Z.gain.value=0,Z.connect(s),a[H]=Z}const l=i.createBuffer(2,Math.floor(i.sampleRate*3.5),i.sampleRate);for(let H=0;H<2;H++){const Z=l.getChannelData(H);for(let ue=0;ue<Z.length;ue++)Z[ue]=(Math.random()*2-1)*Math.pow(1-ue/Z.length,3)}const c=i.createConvolver();c.buffer=l;const u=i.createGain();u.gain.value=.55,c.connect(u).connect(s);const h=i.createDelay(2);h.delayTime.value=Zr*.75;const d=i.createGain();d.gain.value=.35;const p=i.createBiquadFilter();p.type="lowpass",p.frequency.value=2200,h.connect(p).connect(d).connect(h),p.connect(a.bell);const g=i.createBiquadFilter();g.type="lowpass",g.frequency.value=n.padCut,g.Q.value=.7;const M=i.createOscillator(),m=i.createGain();M.frequency.value=.05,m.gain.value=n.padCut*.3,M.connect(m).connect(g.frequency),M.start(),g.connect(a.pad),g.connect(c);const f=(H,Z,ue,oe,me,De)=>{H.gain.setValueAtTime(1e-4,Z),H.gain.exponentialRampToValueAtTime(oe,Z+ue),H.gain.setValueAtTime(oe,Z+Math.max(ue,De-me)),H.gain.exponentialRampToValueAtTime(1e-4,Z+De)},_=(H,Z)=>{const ue=i.createStereoPanner();return ue.pan.value=Z,H.connect(ue),ue},b=(H,Z,ue)=>{for(const oe of Z)for(const[me,De]of[[-7,-.5],[7,.5]]){const Ee=i.createOscillator(),Oe=i.createGain();Ee.type=oe===Z[0]?"sine":"triangle",Ee.frequency.value=df(oe),Ee.detune.value=me,f(Oe,H,2.5,oe===Z[0]?.05:.022,3,ue),_(Ee.connect(Oe),De).connect(g),Ee.start(H),Ee.stop(H+ue+.1)}},x=(H,Z,ue=1)=>{const oe=(Math.random()-.5)*.8;for(const[me,De,Ee]of[[1,.09,1.6],[4.2,.02,.25],[2,.025,.7]]){const Oe=i.createOscillator(),fe=i.createGain();Oe.type=me===1?n.bell:"sine",Oe.frequency.value=df(Z)*me,fe.gain.setValueAtTime(1e-4,H),fe.gain.exponentialRampToValueAtTime(De*ue,H+.005),fe.gain.exponentialRampToValueAtTime(1e-4,H+Ee);const _e=_(Oe.connect(fe),oe);_e.connect(a.bell),_e.connect(h),_e.connect(c),Oe.start(H),Oe.stop(H+Ee+.05)}},C=(H,Z,ue,oe,me,De,Ee,Oe=.002)=>{const fe=i.createBufferSource();fe.buffer=e;const _e=i.createBiquadFilter();_e.type=ue,_e.frequency.value=oe,_e.Q.value=me;const O=i.createGain();return f(O,H,Oe,De,Z*.7,Z),fe.connect(_e).connect(O).connect(Ee),fe.start(H,Math.random()*1.5),fe.stop(H+Z+.05),_e},S=H=>{const Z=i.createOscillator(),ue=i.createGain();Z.frequency.setValueAtTime(90,H),Z.frequency.exponentialRampToValueAtTime(50,H+.18),f(ue,H,.01,.35,.2,.3),Z.connect(ue).connect(a.pulse),Z.start(H),Z.stop(H+.32)},E=(H,Z)=>C(H,.09,"highpass",7e3,.5,.05*Z,a.pulse,.02),A=H=>{const Z=2+Math.floor(Math.random()*3),ue=2400+Math.random()*1600,oe=(Math.random()-.5)*1.4;for(let me=0;me<Z;me++){const De=H+me*(.09+Math.random()*.06),Ee=i.createOscillator(),Oe=i.createGain();Ee.frequency.setValueAtTime(ue*(1+Math.random()*.2),De),Ee.frequency.exponentialRampToValueAtTime(ue*(.75+Math.random()*.6),De+.07),f(Oe,De,.008,.03,.04,.08),_(Ee.connect(Oe),oe).connect(a.nature),Ee.start(De),Ee.stop(De+.1)}};let y=null;const v=()=>{const H=i.createBufferSource();H.buffer=e,H.loop=!0;const Z=i.createBiquadFilter(),ue=i.createGain(),oe=i.createOscillator(),me=i.createGain(),De=i.createGain();n.nature==="wind"?(Z.type="bandpass",Z.frequency.value=500,Z.Q.value=1.2,ue.gain.value=.05,oe.frequency.value=.08,me.gain.value=.04,De.gain.value=350):n.nature==="rumble"?(Z.type="lowpass",Z.frequency.value=120,Z.Q.value=.8,ue.gain.value=.18,oe.frequency.value=.05,me.gain.value=.08,De.gain.value=40):(Z.type="highpass",Z.frequency.value=3e3,Z.Q.value=.5,ue.gain.value=.012,oe.frequency.value=.11,me.gain.value=.01,De.gain.value=800),oe.connect(me).connect(ue.gain),oe.connect(De).connect(Z.frequency),H.connect(Z).connect(ue).connect(a.nature),H.start(),oe.start(),y={s:H,lfo:oe}};let T=null,N=0,L=.7,U=!1,W=0,G=0,z=0,I=0,Y=0,$=0,ie=4;const ge=()=>{const H=i.currentTime,Z=N,ue=(oe,me)=>{oe.gain.cancelScheduledValues(H),oe.gain.setTargetAtTime(me,H,1.2)};ue(a.pad,.9),ue(a.bell,.7+.2*Z),ue(a.nature,.9-.4*Z),ue(a.pulse,.55*Z),g.frequency.cancelScheduledValues(H),g.frequency.setTargetAtTime(n.padCut*(1+.9*Z),H,2),r.gain.cancelScheduledValues(H),r.gain.setTargetAtTime(U?0:L*1.6,H,.4)},Ne=()=>{const H=i.currentTime+.3;for(;W<H;)b(W,n.chords[G],mf+3),G=(G+1)%n.chords.length,W+=mf;for(;z<H;)Math.random()<.8&&(ie=Math.max(0,Math.min(n.scale.length-1,ie+[-2,-1,-1,1,1,2,0][Math.floor(Math.random()*7)])),x(z,n.scale[ie],.8+Math.random()*.3),Math.random()<.15&&x(z+Zr/4,n.scale[Math.max(0,ie-2)],.6)),z+=Zr*(N>.5?Math.random()<.5?.5:1:[1,1.5,2,3][Math.floor(Math.random()*4)]);for(;I<H;)N>.5&&(Y%2===0&&S(I),E(I,1),E(I+Zr/2,.6)),Y++,I+=Zr;for(;$<H;){if(n.nature==="birds"&&Math.random()<.55&&A($),n.nature==="wind"&&Math.random()<.3&&C($,2.5,"bandpass",1400+Math.random()*900,6,.03,a.nature,.9),n.nature==="rumble")for(let Z=0;Z<3;Z++)Math.random()<.5&&C($+Math.random(),.02,"highpass",2500,.5,.12,a.nature);$+=1.5+Math.random()*2.5}};return{start(){if(T)return;W=z=I=$=i.currentTime+.1,y||v(),T=setInterval(Ne,50),ge()},stop(){clearInterval(T),T=null,r.gain.setTargetAtTime(0,i.currentTime,.3)},setIntensity(H){N=H,ge()},setVolume(H){L=H,ge()},setMuted(H){U=H,ge()},get muted(){return U},get volume(){return L},rms(){const H=new Float32Array(o.fftSize);return o.getFloatTimeDomainData(H),Math.sqrt(H.reduce((Z,ue)=>Z+ue*ue,0)/H.length)},get intensity(){return N},get section(){return N>.5?"wave":"calm"},tap(H){r.connect(H)}}}const tt={startEmbers:225,emberLife:25,expiredRefund:.5,magnet:4.6,reach:2.7,placeAhead:2.3,minTowerGap:2.5,plinthBonus:1.25,lighthouseReach:5.4,stoneCost:30,chargeTime:.4,upgradeTime:[15,20,25,30],keeperSpeed:6.4,carrySlow:.82,wadeSlow:.7,stunTime:1.6,stunLoss:.3,chillMax:100,stressInvuln:1,stressPush:7,airStress:10,faintTime:6,faintLoss:.25,wakeChill:.6,regen:3,regenReach:9,bagChance:.05,bagHeal:25,bagLife:20,hpGrowth:.2,waveBonus:20,waveBonusPer:5,interest:.1,firstPrep:30,prepTime:15,earlyScale:[.55,.65,.8],activePaths:[1,2,2]},zs={ring:{name:"Røykring-kanon",cost:22,range:7.5,dmg:7,cooldown:.65,air:!1,tip:"rask · kun bakke"},chips:{name:"Chips-mørtel",cost:38,range:10,dmg:18,cooldown:2.2,air:!1,splash:2.5,tip:"splash · kun bakke"},speaker:{name:"Reggae-høyttaler",cost:30,range:5.5,dmg:3,cooldown:1.6,air:!0,slowTime:2.2,tip:"bremser i ring"},bubble:{name:"Bobleblåser",cost:20,range:7,dmg:2.5,cooldown:.38,air:!0,ground:!1,trap:1.4,tip:"fanger flyvere · kun luft"},kite:{name:"Papirdrage",cost:40,range:13,dmg:5,cooldown:2.8,air:!0,ground:!1,zone:3.4,hover:2.4,tip:"sone, lang · kun luft"},pizza:{name:"Pizza-katapult",cost:55,range:14,dmg:24,cooldown:3,air:!1,splash:2.9,tip:"lang splash · kun bakke"},lamp:{name:"Lavalampe",cost:50,range:4.6,dmg:1.1,cooldown:.3,air:!0,slowTime:.5,tip:"aura, bremser alt"}},wo={clerk:{name:"Forbuds-byråkrat",hp:22,speed:2.6,embers:4,anim:12,puff:"#9fffb0",stress:10},tank:{name:"Stortings-tanken",hp:95,speed:1.25,embers:10,anim:5,puff:"#9fffb0",resist:{ring:.5,chips:1.5},stress:15},gull:{name:"Moralpanikk-måke",hp:16,speed:3.4,embers:5,anim:12,puff:"#ffffff",flying:!0,swoop:!0},swarm:{name:"Komité-sverm",hp:7,speed:2.2,embers:1,anim:9,puff:"#ffe08a",stress:8},auditor:{name:"Revisoren",hp:70,speed:1.6,embers:8,anim:7,puff:"#9fffb0",shield:.25,resist:{lamp:1.5},info:"skjold forfra (×0,25), ikke mot aura",stress:14},complainer:{name:"Naboklageren",hp:12,speed:4.3,embers:3,anim:18,puff:"#ffb0f0",resist:{chips:.5,ring:1.5},info:"rask, mørtel bommer",stress:10},lobbyist:{name:"Lobbyisten",hp:55,speed:1.9,embers:6,anim:9,puff:"#ffe08a",splits:3,resist:{speaker:.5,pizza:1.5},noMood:!0,info:"deler seg i tre, immun mot stemning",stress:12},lobbyMini:{name:"Mini-lobbyist",hp:14,speed:2.7,embers:1,anim:14,puff:"#ffe08a",resist:{speaker:.5,pizza:1.5},noMood:!0,stress:8},drone:{name:"Overvåkings-drone",hp:9,speed:4.6,embers:1,anim:30,puff:"#c8d8ff",flying:!0,alt:3.6,resist:{bubble:1.5,lamp:1.5,kite:.5},info:"rask sverm i lufta"},balloon:{name:"Ballong-byråkraten",hp:150,speed:1.05,embers:14,anim:2,puff:"#ffffff",flying:!0,alt:5.6,resist:{bubble:.5,kite:1.5},info:"seig, høyt oppe"},heli:{name:"Mini-helikopteret",hp:48,speed:2.5,embers:7,anim:40,puff:"#ffffff",flying:!0,alt:4.6,blind:{every:6,dur:3,range:9},resist:{ring:.5,kite:1.5},info:"søkelys blender et tårn i 3 s"}},vM=[[{type:"clerk",n:8,gap:1.4,path:0}],[{type:"clerk",n:6,gap:1.3,path:"both"}],[{type:"swarm",n:7,gap:.35,path:1},{type:"clerk",n:6,gap:1.2,path:0,at:4},{type:"swarm",n:7,gap:.35,path:0,at:12}],[{type:"tank",n:3,gap:4,path:0},{type:"clerk",n:6,gap:1,path:1,at:2}],[{type:"gull",n:5,gap:2.5},{type:"clerk",n:7,gap:1,path:"both",at:3}],[{type:"tank",n:3,gap:3.5,path:"both"},{type:"swarm",n:8,gap:.3,path:"both",at:8}],[{type:"gull",n:8,gap:1.6},{type:"clerk",n:9,gap:.8,path:"both",at:2}],[{type:"tank",n:4,gap:3,path:"both"},{type:"swarm",n:10,gap:.3,path:"both",at:6},{type:"gull",n:4,gap:2,at:10}],[{type:"gull",n:10,gap:1.2},{type:"tank",n:4,gap:3,path:"both",at:3},{type:"clerk",n:10,gap:.7,path:"both",at:8}],[{type:"clerk",n:10,gap:.6,path:"both"},{type:"tank",n:5,gap:2.5,path:"both",at:6},{type:"swarm",n:12,gap:.25,path:"both",at:14},{type:"gull",n:12,gap:1,at:18}]],xM="modulepreload",_M=function(i,e){return new URL(i,e).href},gf={},MM=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(t.map(c=>{if(c=_M(c,n),c in gf)return;gf[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!n)for(let g=o.length-1;g>=0;g--){const M=o[g];if(M.href===c&&(!u||M.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${h}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":xM,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((g,M)=>{p.addEventListener("load",g),p.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},vf="glodevokteren-",xf="ABCDEFGHJKLMNPQRSTUVWXYZ",Fc=3,yM=9e3,bM=14e3,_f=6e3;function SM(){let i="";for(let e=0;e<4;e++)i+=xf[Math.floor(Math.random()*xf.length)];return i}function Oc(i=""){return i.toUpperCase().replace(/[^A-Z]/g,"").slice(0,4)}let Dl=null;async function wM(){return Dl||(Dl=(await MM(async()=>{const{Peer:i}=await import("./bundler-DrDBPFLh.js");return{Peer:i}},[],import.meta.url)).Peer),Dl}const ua={network:"Mistet kontakten med koblingstjenesten. Sjekk nettet.","server-error":"Koblingstjenesten svarer ikke akkurat nå. Prøv igjen om litt.","socket-error":"Koblingstjenesten svarer ikke akkurat nå. Prøv igjen om litt.","socket-closed":"Mistet kontakten med koblingstjenesten.","browser-incompatible":"Nettleseren støtter ikke nettspill (WebRTC).",webrtc:"Klarte ikke å koble direkte. Nettet ditt blokkerer kanskje peer-to-peer (vanlig på mobilnett/jobbnett)."};function Mf(i={}){const e={role:null,code:"",slot:0,players:[],stats:{sentBytes:0,recvBytes:0,sentMsgs:0,recvMsgs:0}};let t=null,n=null,s=0,r=!1;const o=new Map,a=m=>{var f;r||(f=i.onError)==null||f.call(i,m)},l=()=>performance.now(),c=(m,f)=>{if(!(m!=null&&m.open))return;const _=JSON.stringify(f);e.stats.sentBytes+=_.length,e.stats.sentMsgs++,m.send(_)},u=m=>{e.stats.recvBytes+=m.length,e.stats.recvMsgs++;try{return JSON.parse(m)}catch{return null}},h=()=>{var m;e.players=[{slot:0,name:e.hostName},...[...o].map(([f,_])=>({slot:f,name:_.name}))].sort((f,_)=>f.slot-_.slot);for(const f of o.values())c(f.conn,{t:"lobby",players:e.players});(m=i.onLobby)==null||m.call(i,e.players)},d=m=>{var _;const f=o.get(m);if(f){o.delete(m);try{f.conn.close()}catch{}(_=i.onLeave)==null||_.call(i,m,f.name),h()}};function p(m){return wM().then(f=>new Promise((_,b)=>{const x=m?new f(m,{debug:0,serialization:"raw"}):new f({debug:0}),C=setTimeout(()=>b(new Error("Fikk ikke kontakt med koblingstjenesten (PeerJS). Sjekk nettet og prøv igjen.")),yM);x.on("open",()=>{clearTimeout(C),_(x)}),x.on("error",S=>{clearTimeout(C),S.type==="unavailable-id"?b(Object.assign(new Error("taken"),{taken:!0})):x.open||b(new Error(ua[S.type]||`Nettfeil: ${S.type}`))})}))}e.host=async m=>{e.role="host",e.slot=0,e.hostName=m||"Vokter 1";for(let f=0;;f++){const _=SM();try{t=await p(vf+_),e.code=_;break}catch(b){if(!b.taken||f>4)throw e.role=null,b}}return t.on("error",f=>{f.type!=="peer-unavailable"&&a(ua[f.type]||`Nettfeil: ${f.type}`)}),t.on("connection",f=>{f.on("open",()=>{var x;let _=1;for(;o.has(_);)_++;if(_>=Fc||e.closedRoom){c(f,{t:"refuse",why:e.closedRoom?"Spillet er allerede i gang.":`Rommet er fullt (${Fc} spillere).`}),setTimeout(()=>f.close(),300);return}const b=String(((x=f.metadata)==null?void 0:x.name)||`Vokter ${_+1}`).slice(0,14);o.set(_,{conn:f,name:b,seen:l()}),c(f,{t:"hello",slot:_,world:e.world,tid:e.tid}),h(),f.on("data",C=>{var A;const S=o.get(_);if(!S||S.conn!==f)return;S.seen=l();const E=u(C);E&&E.t!=="ping"&&((A=i.onMessage)==null||A.call(i,E,_))}),f.on("close",()=>{var C;((C=o.get(_))==null?void 0:C.conn)===f&&d(_)}),f.on("error",()=>{var C;((C=o.get(_))==null?void 0:C.conn)===f&&d(_)})})}),M(),h(),e.code},e.join=async(m,f)=>(e.role="guest",e.code=Oc(m),t=await p(null),new Promise((_,b)=>{let x=!1;const C=(E,A)=>{x||(x=!0,clearTimeout(S),E(A))},S=setTimeout(()=>C(b,new Error("Fikk ikke koblet til verten. Enten er koden feil, eller nettet blokkerer direkte kobling (vanlig på mobilnett/jobbnett).")),bM);t.on("error",E=>{E.type==="peer-unavailable"?C(b,new Error(`Fant ikke rom ${e.code}. Sjekk koden.`)):x?E.type==="webrtc"&&a(ua.webrtc):C(b,new Error(ua[E.type]||`Nettfeil: ${E.type}`))}),n=t.connect(vf+e.code,{serialization:"raw",reliable:!0,metadata:{name:f}}),n.on("data",E=>{var y,v;e.hostSeen=l();const A=u(E);if(A){if(A.t==="hello"){e.slot=A.slot,C(_,A);return}if(A.t==="refuse"){C(b,new Error(A.why));return}if(A.t==="lobby"){e.players=A.players,(y=i.onLobby)==null||y.call(i,A.players);return}A.t!=="ping"&&((v=i.onMessage)==null||v.call(i,A,0))}}),n.on("close",()=>{x?g():C(b,new Error("Verten lukket koblingen."))}),n.on("open",()=>{e.hostSeen=l(),M()})}));function g(){var m;r||(r=!0,(m=i.onHostGone)==null||m.call(i),e.close())}function M(){clearInterval(s),s=setInterval(()=>{const m=l();if(e.role==="host")for(const[f,_]of o)m-_.seen>_f?d(f):m-(_.pinged||0)>1e3&&(_.pinged=m,c(_.conn,{t:"ping"}));else e.role==="guest"&&n&&(m-e.hostSeen>_f?g():c(n,{t:"ping"}))},1e3)}return e.send=m=>c(n,m),e.sendTo=(m,f)=>{var _;return c((_=o.get(m))==null?void 0:_.conn,f)},e.broadcast=m=>{if(!o.size)return;const f=JSON.stringify(m);for(const _ of o.values())_.conn.open&&(e.stats.sentBytes+=f.length,e.stats.sentMsgs++,_.conn.send(f))},e.guestCount=()=>o.size,e.close=()=>{clearInterval(s);for(const m of o.values())try{m.conn.close()}catch{}o.clear();try{n==null||n.close()}catch{}try{t==null||t.destroy()}catch{}t=null,n=null},addEventListener("pagehide",()=>e.close()),e}const Qt=i=>document.getElementById(i),yf=["#f2c23c","#4fb3d9","#c46bd6"],Eo=i=>yf[i%yf.length];function EM(i){const e=Qt("net"),t=Qt("net-status"),n=Qt("net-players"),s=Qt("net-share");let r=null,o=!1,a="";try{a=localStorage.getItem("glod-name")||""}catch{}Qt("net-name").value=a,Qt("net-name").addEventListener("input",m=>{try{localStorage.setItem("glod-name",m.target.value.trim())}catch{}});const l=(m,f=!1)=>{t.textContent=m,t.classList.toggle("err",f)},c=m=>(Qt("net-name").value.trim()||m).slice(0,14),h={onLobby:m=>{n.innerHTML=m.map(f=>`<li><i style="background:${Eo(f.slot)}"></i>${TM(f.name)}${f.slot===0?" <small>(vert)</small>":""}${r&&f.slot===r.slot?" <small>← deg</small>":""}</li>`).join(""),(r==null?void 0:r.role)==="host"&&(Qt("net-go").disabled=!1,Qt("net-go").textContent=m.length>1?`Start på ${i.worldName} (${m.length} spillere)`:"Start (venter på andre …)")},onMessage:(m,f)=>{var _;if(m.t==="start"&&r.role==="guest"){e.dataset.state="playing",i.onGuestStart(r);return}(_=i.onMessage)==null||_.call(i,m,f)},onLeave:(m,f)=>{var _;return(_=i.onLeave)==null?void 0:_.call(i,m,f)},onError:m=>l(m,!0),onHostGone:()=>{var m;return(m=i.onHostGone)==null?void 0:m.call(i)}},d=m=>{e.dataset.state=m,Qt("btn-start").classList.toggle("hidden",m==="host"||m==="guest"||m==="connecting")},p=m=>{r==null||r.close(),r=null,o=!1,d("idle"),n.innerHTML="",s.classList.add("hidden"),m?l(m,!0):l("")};Qt("btn-net").addEventListener("click",()=>{e.classList.toggle("hidden"),Qt("btn-net").classList.toggle("sel",!e.classList.contains("hidden"))}),Qt("net-host").addEventListener("click",async()=>{if(!o){o=!0,d("connecting"),l("Lager rom …"),r=Mf(h),r.world=i.worldIndex,r.tid=i.timeOfDay;try{const m=await r.host(c("Vokter 1"));d("host");const f=`${location.origin}${location.pathname}?join=${m}`;Qt("net-code").textContent=m,Qt("net-link").value=f,s.classList.remove("hidden"),l(`Rom ${m} er åpent. Del koden eller lenken (maks ${Fc} spillere).`)}catch(m){p(m.message)}}});const g=async m=>{const f=Oc(m);if(!o){if(f.length!==4){l("Koden har fire bokstaver.",!0);return}o=!0,d("connecting"),l(`Kobler til rom ${f} …`),r=Mf(h);try{const _=await r.join(f,c("Vokter"));if(_.world!==i.worldIndex||_.tid&&_.tid!==i.timeOfDay){l("Henter vertens verden …"),r.close(),location.href=`${location.pathname}?world=${_.world}&tid=${_.tid||"dag"}&join=${f}`;return}d("guest"),l(`Du er med i rom ${f}. Venter på at verten starter …`)}catch(_){p(_.message)}}};Qt("net-join").addEventListener("click",()=>g(Qt("net-code-in").value)),Qt("net-code-in").addEventListener("keydown",m=>{m.stopPropagation(),m.key==="Enter"&&g(m.target.value)}),Qt("net-name").addEventListener("keydown",m=>m.stopPropagation()),Qt("net-copy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(Qt("net-link").value),l("Lenke kopiert.")}catch{Qt("net-link").select()}}),Qt("net-leave").addEventListener("click",()=>p()),Qt("net-go").addEventListener("click",()=>{(r==null?void 0:r.role)==="host"&&(r.closedRoom=!0,r.broadcast({t:"start"}),d("playing"),i.onHostStart(r))});const M=Oc(i.params.get("join")||"");return M&&(e.classList.remove("hidden"),Qt("net-code-in").value=M,g(M)),{get net(){return r},say:l}}function TM(i){return String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}const cn=new URLSearchParams(location.search),kd=cn.has("demo");if(cn.has("unlockall"))try{localStorage.setItem("glod-unlocked",String(Ys.length))}catch{}let Sn=Number(cn.get("world"));if(!Number.isInteger(Sn))try{Sn=Number(localStorage.getItem("glod-world"))||0}catch{Sn=0}Sn=Math.max(0,Math.min((cn.has("join")?Ys.length:xo())-1,Sn));try{localStorage.setItem("glod-world",String(Sn))}catch{}const dn=Ys[Sn],Eu=M_(dn,vM),AM=.3;function CM(){return 1+AM*(kt.length-1)}const RM=Math.max(1,Math.min(20,Number(cn.get("speed"))||1)),ts=matchMedia("(pointer: coarse)").matches||cn.has("mobile"),Bc={high:{shadow:2048,dprCap:2},low:{shadow:1024,dprCap:2}};let Ai=ts?"low":"high";try{const i=localStorage.getItem("glod-quality");(i==="high"||i==="low")&&(Ai=i)}catch{}(cn.get("q")==="high"||cn.get("q")==="low")&&(Ai=cn.get("q"));const Mo={mobile:ts,shadow:Bc[Ai].shadow,dprCap:Bc[Ai].dprCap},PM={high:["rock","tree","tower","figure"],low:["rock","tree","tower","figure"]};function Fd(i){const e=cn.has("ol")?cn.get("ol").split(","):PM[i];xd(Object.fromEntries(["rock","tree","tower","figure"].map(t=>[t,e.includes(t)])))}Fd(Ai);const Od=document.getElementById("game"),zn=new d1({canvas:Od,antialias:!ts,powerPreference:"high-performance",preserveDrawingBuffer:cn.has("shot")});let fs=Math.min(devicePixelRatio||1,Mo.dprCap);zn.setPixelRatio(fs);zn.shadowMap.enabled=!0;zn.shadowMap.type=Rf;zn.toneMapping=Zc;let gs="dag";try{gs=localStorage.getItem("glod-tid")||"dag"}catch{}cn.get("tid")&&(gs=cn.get("tid"));const ii=gs==="skumring"&&dn.skyDusk?dn.skyDusk:dn.sky;zn.toneMappingExposure=ii.exposure;zn.info.autoReset=!1;const _t=new p1,Bd=new Ce(ii.fog);_t.background=Bd;_t.fog=new fu(Bd,...dn.fog??[55,115]);const $t=new Qn(38,1,.5,200),LM=new j1(ii.hemiSky,ii.hemiGround,ii.hemi);_t.add(LM);const yn=new J1(ii.sun,ii.sunI);yn.castShadow=!0;yn.shadow.mapSize.set(Mo.shadow,Mo.shadow);Object.assign(yn.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:90});yn.shadow.bias=-8e-4;yn.shadow.normalBias=.03;_t.add(yn,yn.target);u_(_t);const Ve=N_(_t,Mo,dn);Ve.grass.setLevel(Ai);const DM=Q_(_t,Ve,Mo,dn,gs,$t),Cn=eM(Ve);window.__nav=Cn;const Ct=zd(_t,ts?450:800),_s=zd(_t,ts?120:220,{blending:ds,size:1.6,opacity:.45,fadeTo:ii.fog}),To=J_(zn,_t,$t,ii.grade);To.setLevel(Ai);const xt=uM(Od),Gd=fM(xt);xt.menu=Gd;xt.panelOpen=()=>!Ei.classList.contains("hidden");const lo=document.createElement("div");lo.id="toast";document.body.appendChild(lo);let bf=0;function Aa(i){lo.textContent=i,lo.classList.add("on"),clearTimeout(bf),bf=setTimeout(()=>lo.classList.remove("on"),3200)}xt.onPad=(i,e)=>{Aa(i==="connect"?`🎮 Kontroll tilkoblet: ${rM(e)}`:"🎮 Kontroll frakoblet"),ni.device=null,ct("pause").classList.contains("hidden")||ks(!0,q.confirming)};function Ao(){const i=innerWidth,e=innerHeight;zn.setSize(i,e,!1),$t.aspect=i/e,$t.updateProjectionMatrix(),To.setSize(i,e),c_(ts?2:2.2,zn.getPixelRatio(),i,e)}function Vd(i){Ai=i;try{localStorage.setItem("glod-quality",i)}catch{}const e=Bc[i];yn.shadow.mapSize.set(e.shadow,e.shadow),yn.shadow.map&&(yn.shadow.map.dispose(),yn.shadow.map=null),fs=Math.min(devicePixelRatio||1,e.dprCap),zn.setPixelRatio(fs),To.setLevel(i),Ve.grass.setLevel(i),Fd(i),Ao(),document.getElementById("btn-quality").textContent=i==="high"?"Høy":"Lav"}addEventListener("resize",Ao);Ao();const q={phase:"title",wave:0,timer:0,embers:tt.startEmbers,lights:Ir,spawnQueue:[],leaks:{},seen:{},time:0,sel:0,paused:!1},Gc=tt.upgradeTime.length+1,Di=["ring","chips","speaker","bubble","kite","pizza","lamp"];let Ki=dn.camYaw??0;const Sf=new Q1,fn=[],sn=[],gi=[],qn=[],br=[],co=[],Be={host:!1,guest:!1,net:null,sendT:0,goal:null,ids:0,ev:[],snapT:0};let en=Br(Ad(),"figure"),D={x:Ve.lighthouse.pos.x+1,z:Ve.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,walk:0,charge:0,chargeTower:null,face:Math.PI,goal:null,chill:tt.chillMax,inv:0,faint:0,faints:0,roll:null,stillT:0,rollBlock:null};en.position.set(D.x,Ve.heightAt(D.x,D.z),D.z);_t.add(en);const Hd=ii.lantern??2.6,Tu=new vo("#ffcf70",Hd,6,1.8);Tu.position.set(.8,.45,-.3);en.add(Tu);const kt=[{slot:0,K:D,mesh:en,input:xt,sel:0,buildMode:!1,local:!0}];let vn=kt[0],Vt=xt;function wf(i){vn.sel=q.sel,vn.buildMode=q.buildMode,vn=i,D=i.K,en=i.mesh,Vt=i.input,q.sel=i.sel,q.buildMode=i.buildMode}function Ui(i,e){if(i===vn)return e();const t=vn;wf(i);try{return e()}finally{wf(t)}}const Wd=(i=0)=>({x:Ve.lighthouse.pos.x+1+i*1.2,z:Ve.lighthouse.pos.z+7.5-i*.6,vx:0,vz:0,carrying:!1,stun:0,walk:0,charge:0,chargeTower:null,face:Math.PI,goal:null,chill:tt.chillMax,inv:0,faint:0,faints:0,roll:null,stillT:0,rollBlock:null});function Au(i,e,t=()=>!0){let n=null,s=1/0;for(const r of kt){const o=Math.hypot(r.K.x-i,r.K.z-e);o<s&&t(r)&&(s=o,n=r)}return n}const ct=i=>document.getElementById(i),on={chill:ct("hud-chill"),lights:ct("hud-lights"),embers:ct("hud-embers"),wave:ct("hud-wave"),timer:ct("hud-timer")},Qi=ct("hint"),Ei=ct("build-panel"),Cu=ct("btn-next"),Ru=ct("fps");cn.has("debug")||Ru.classList.add("hidden");let ni={};function Wn(i,e,t,n){ni[e]!==t&&(ni[e]=t,i.querySelector("b").textContent=t,n&&(i.classList.remove(n),i.offsetWidth,i.classList.add(n)))}const IM=4;let Xd=0;function Vc(i){if(Qi.textContent===i)return;Qi.textContent=i,Xd=0,Qi.classList.remove("faded");const e=Ei.classList.contains("hidden")?null:Ei.getBoundingClientRect();Qi.style.bottom=e&&e.height?`${Math.round(innerHeight-e.top+6)}px`:""}function UM(i){(Xd+=i)>IM&&Qi.classList.add("faded")}function Pu(i){q.phase="prep",q.timer=i,Cu.classList.remove("hidden"),zM()}function zM(){if(Be.guest){q.spawnPoints=Be.spawnPoints||[],q.spawnPoints.length&&Wc();return}const i=q.wave+1,e=i===1?1:i<=3?2:2+Math.floor(Math.random()*3);q.spawnPoints=Cn.coastPoints(e,24),q.spawnPoints.length||(q.spawnPoints=Cn.coastPoints(e,8,{near:12,minFrac:.5})),q.spawnPoints.length||(q.spawnPoints=Cn.roadEnds().slice(0,e)),Be.host&&Be.ev.push(["sp",q.spawnPoints.map(t=>[+t[0].toFixed(2),+t[1].toFixed(2)])]),Wc()}function Lu(){q.wave+=1,q.phase="wave",Cu.classList.add("hidden"),q.spawnQueue=[];for(const i of Eu[q.wave-1]){const e=q.wave<=tt.earlyScale.length?q.wave-1:-1,t=q.spawnPoints.length,n=wo[i.type].flying?dn.balance.air??1:1,s=Math.max(1,Math.round(i.n*(dn.balance.count||1)*n*(e>=0?tt.earlyScale[e]:1)));if(i.path==="both"){const r=Math.ceil(s/Math.min(2,t));for(let o=0;o<t;o++)for(let a=0;a<r;a++)q.spawnQueue.push({t:(i.at??0)+a*i.gap+o*.3,type:i.type,path:o})}else{const r=i.path??0;for(let o=0;o<s;o++)q.spawnQueue.push({t:(i.at??0)+o*i.gap,type:i.type,path:(r+o%2)%t})}}q.spawnQueue.sort((i,e)=>i.t-e.t),q.waveClock=0,Lt.wave(),tn==null||tn.setIntensity(1),Wn(on.wave,"wave",q.wave,"bump")}function Va(i,e){var l,c;const t=wo[i],n=Br(A_(i),"figure"),s=t.hp*(1+tt.hpGrowth*(q.wave-1))*dn.balance.hp*(((c=(l=dn.balance.types)==null?void 0:l[i])==null?void 0:c.hp)??1)*CM(),r={id:++Be.ids,type:i,def:t,mesh:n,hp:s,maxHp:s,slow:0,phase:Math.random()*6,alive:!0,speedMul:dn.balance.speed*(t.flying?dn.balance.airSpeed??1:1),lane:(Math.random()-.5)*1.4};r.var=.95+Math.random()*.1,r.speedMul*=.95+Math.random()*.1,n.scale.setScalar(r.var),r.blinkT=Math.random()*4;const o=q.spawnPoints[e%q.spawnPoints.length]||[0,50],a=Ve.lighthouse.pos;if(t.flying){const u=Math.atan2(o[1]-a.z,o[0]-a.x)+(Math.random()-.5)*.5,h=a.x+Math.cos(u)*66,d=a.z+Math.sin(u)*66;r.x=h,r.z=d,r.y=t.alt||4,r.dist0=Math.hypot(a.x-h,a.z-d),r.hitCd=0}else r.x=o[0]+(Math.random()-.5)*1.5,r.z=o[1]+(Math.random()-.5)*1.5,r.y=Ve.heightAt(r.x,r.z),r.remain=Cn.at(r.x,r.z);return n.position.set(r.x,r.y,r.z),_t.add(n),fn.push(r),!q.seen[i]&&i!=="lobbyMini"&&(q.seen[i]=!0,NM(r)),r}const Hc={ring:"💨",chips:"🥔",speaker:"🔊",bubble:"🫧",kite:"🪁",pizza:"🍕",lamp:"🌋"};function qd(i){const e=Object.entries(i.resist||{}),t=e.filter(([,s])=>s<1).map(([s])=>Hc[s]).join(""),n=e.filter(([,s])=>s>1).map(([s])=>Hc[s]).join("");return{tough:t+(i.shield?"📒":""),weak:n}}const ji=[],Ha=document.createElement("div");Ha.id="tags";document.body.appendChild(Ha);function NM(i){const{tough:e,weak:t}=qd(i.def),n=document.createElement("div");n.className="enemy-tag",n.innerHTML=`<b>${i.def.flying?"🪶":"🐾"} ${i.def.name}</b>${e?`<span>🛡️${e}</span>`:""}${t?`<span>💥${t}</span>`:""}`,Ha.appendChild(n),ji.push({m:i,el:n,t:0}),(q.wave>1||i.def.flying)&&an(`Ny fiende: ${i.def.name}${e?` · tåler ${e}`:""}${t?` · svak mot ${t}`:""}`)}const yo=document.createElement("div");yo.id="upgbars";document.body.appendChild(yo);const Ca=[];function kM(){var i;Ca.length=0,yo.style.visibility=q.paused?"hidden":"";for(const e of sn){if(!e.upg){e.upgEl&&(e.upgEl.remove(),e.upgEl=null);continue}e.upgEl||(e.upgEl=document.createElement("div"),e.upgEl.className="upg-bar",e.upgEl.innerHTML='<div class="upg-arrows"></div><div class="upg-track"><i></i></div><span></span>',yo.appendChild(e.upgEl));const t=e.upgEl,n=Math.min(1,e.upg.t/e.upg.dur),s=((i=D.roll)==null?void 0:i.tower)===e?D.roll:null,r=s?s.seq.join()+s.i:"";t.dataset.k!==r&&(t.dataset.k=r,t.firstChild.innerHTML=s?s.seq.map((h,d)=>`<b class="${d<s.i?"lit":d===s.i?"next":""}">${{rU:"▲",rR:"▶",rD:"▼",rL:"◀"}[h]}</b>`).join(""):""),s!=null&&s.shake&&(s.shake=!1,t.firstChild.classList.remove("shake"),t.offsetWidth,t.firstChild.classList.add("shake"),t.firstChild.onanimationend=()=>t.firstChild.classList.remove("shake")),e.upgReset&&(e.upgReset=!1,t.classList.remove("reset"),t.offsetWidth,t.classList.add("reset")),t.children[1].firstChild.style.width=`${(100*n).toFixed(1)}%`;const o=e.upg.t>0||s?`nv. ${e.level+1} · ${Math.ceil(e.upg.dur-e.upg.t)} s igjen`:`nv. ${e.level+1} · stå stille for å rulle`;t.lastChild.textContent!==o&&(t.lastChild.textContent=o),yt.set(e.x,e.y+2.9*e.mesh.scale.y,e.z).project($t);const a=yt.z<1&&Math.abs(yt.x)<1&&Math.abs(yt.y)<1;if(t.style.display=a?"flex":"none",!a)continue;const l=t.offsetWidth,c=t.offsetHeight,u={x:Math.min(Math.max((yt.x*.5+.5)*innerWidth,l/2+6),innerWidth-l/2-6),y:(-yt.y*.5+.5)*innerHeight,w:l,h:c,on:a};t.style.left=`${u.x}px`,t.style.top=`${u.y}px`,Ca.push(u)}}function FM(i){var n;const e=ji.length?ct("hud").getBoundingClientRect().bottom:0;for(let s=ji.length-1;s>=0;s--){const r=ji[s];r.age=(r.age||0)+i,yt.set(r.m.x,r.m.y+(((n=r.m.mesh.userData.hpBar)==null?void 0:n.position.y)??2.2)+.5,r.m.z).project($t);const o=yt.z<1&&Math.abs(yt.x)<1&&Math.abs(yt.y)<1;r.el.style.display=o?"flex":"none",o&&(r.t+=i);const a=r.el.offsetWidth,l=r.el.offsetHeight;r.x=Math.min(Math.max((yt.x*.5+.5)*innerWidth,a/2+6),innerWidth-a/2-6),r.y=Math.max((-yt.y*.5+.5)*innerHeight,e+l+6),r.w=a,r.h=l,r.on=o,r.el.style.opacity=String(Math.min(1,(6-r.t)/.6)),(r.t>6||r.age>90||!r.m.alive)&&(r.el.remove(),ji.splice(s,1))}const t=[...Ca];for(const s of ji.filter(r=>r.on).sort((r,o)=>r.y-o.y)){let r=!0;for(let o=0;r&&o<8;o++){r=!1;for(const a of t)Math.abs(s.x-a.x)<(s.w+a.w)/2+4&&s.y>a.y-a.h-3&&s.y-s.h<a.y+3&&(s.y=a.y+s.h+4,r=!0)}t.push(s)}for(const s of ji)s.on&&(s.el.style.left=`${s.x}px`,s.el.style.top=`${s.y}px`)}function OM(i){return i.def.flying?1-Math.hypot(Ve.lighthouse.pos.x-i.x,Ve.lighthouse.pos.z-i.z)/i.dist0:1-Math.min(1,(i.remain??Cn.maxDist)/Cn.maxDist)}const ya=[],Ns=document.createElement("div");Ns.id="warn";document.body.appendChild(Ns);function Wc(){for(const t of ya)_t.remove(t);ya.length=0,Ns.innerHTML="";for(const[t,n]of q.spawnPoints){const s=new lt(Yd,new zt({color:"#ff7a3a",transparent:!0,opacity:.8,depthWrite:!1}));s.position.set(t,Math.max(Ve.heightAt(t,n),.08)+.1,n);const r=new lt(BM,new zt({color:"#ff8a3a",transparent:!0,opacity:.35,blending:Ti,depthWrite:!1,fog:!1}));r.position.y=4,s.add(r),_t.add(s),ya.push(s);const o=document.createElement("div");o.className="warn-arrow",o.innerHTML='<span class="arr">➤</span><span class="kind"></span>',Ns.appendChild(o)}const i=q.spawnPoints.length,e=q.spawnPoints.map(()=>({air:!1,ground:!1}));for(const t of Eu[q.wave]||[]){const n=t.path==="both"?e.map((s,r)=>r):[(t.path??0)%i,((t.path??0)+1)%i];for(const s of n)e[s][wo[t.type].flying?"air":"ground"]=!0}e.forEach((t,n)=>{var r;const s=(r=Ns.children[n])==null?void 0:r.querySelector(".kind");s&&(s.textContent=(t.air?"🪶":"")+(t.ground?"🐾":""))})}const Yd=new Ms(1.6,2.2,32);Yd.rotateX(-Math.PI/2);const BM=new jt(.5,1.4,8,12,1,!0);function GM(){var o;const i=q.phase==="prep"||q.phase==="wave"&&q.waveClock<8,e=Ns.children,t=i&&!Ei.classList.contains("hidden")?Ei.getBoundingClientRect():null,n=t&&Qi.textContent&&!Qi.classList.contains("faded"),s=i?ct("hud").getBoundingClientRect().bottom:0;Ns.style.visibility=Ha.style.visibility=q.paused?"hidden":"";const r=t?n?Math.min(t.top,Qi.getBoundingClientRect().top):t.top:0;(o=q.spawnPoints)==null||o.forEach(([a,l],c)=>{const u=ya[c],h=e[c];if(!u||!h)return;u.visible=i;const d=.5+.5*Math.sin(q.time*6);u.scale.setScalar(1+d*.35),u.material.opacity=.35+.5*d,yt.set(a,u.position.y,l).project($t);const p=Math.abs(yt.x)>.92||Math.abs(yt.y)>.88||yt.z>1;if(h.style.display=i?"block":"none",h.classList.toggle("onscreen",!p),i&&!p&&(h.style.left=`${(yt.x*.5+.5)*innerWidth}px`,h.style.top=`${Math.max((-yt.y*.5+.5)*innerHeight-30,s+30)}px`,h.style.transform="translate(-50%, -50%)",h.firstChild.style.transform=""),i&&p){let g=yt.x,M=yt.y;yt.z>1&&(g=-g,M=-M);const m=Math.atan2(-M,g),f=Math.max(Math.abs(g),Math.abs(M))||1,_=Mt.clamp(g/f,-1,1),b=Mt.clamp(M/f,-1,1),x=(_*.46+.5)*innerWidth;let C=(-b*.44+.5)*innerHeight;t&&x>t.left-24&&x<t.right+24&&C>r-24&&(C=r-24),C=Math.max(C,s+30),h.style.left=`${x}px`,h.style.top=`${C}px`,h.style.transform=`translate(-50%, -50%) scale(${1+d*.25})`,h.firstChild.style.transform=`rotate(${m}rad)`}})}function Us(i,e,t){var n;if(i.alive){if(t&&(e*=((n=i.def.resist)==null?void 0:n[t.type])??1,i.def.shield&&t.type!=="lamp")){const s=t.x-i.x,r=t.z-i.z,o=Math.hypot(s,r)||1,a=Math.hypot(i.hx||0,i.hz||0)||1;(s*(i.hx||0)+r*(i.hz||0))/(o*a)>.35&&(e*=i.def.shield,Math.random()<.3&&Ct.emit(i.x,i.y+1,i.z,{n:2,color:"#d8c890",speed:1.5,up:1,life:.3}))}if(Be.guest){i.hitT=.18,i.mesh.userData.hpBar.visible=!0;return}i.hp-=e,i.hitT=.18,i.mesh.userData.hpBar.visible=!0,i.hp<=0&&$d(i)}}function $d(i){if(i.alive=!1,i.chillT=0,C_(i),co.push(i),Ct.emit(i.x,i.y+1.2,i.z,{n:12,color:i.def.puff,speed:1.6,up:2.2,life:.9,gravity:1.5}),Lt.chill(),Be.host&&Be.ev.push(["c",i.id]),!Be.guest){Du(i.x,i.y+.5,i.z,i.def.embers,i.def.flying),!i.def.flying&&Math.random()<tt.bagChance&&Iu(i.x,i.z);for(let e=0;e<(i.def.splits||0);e++){const t=Va("lobbyMini",0);t.x=i.x+(e-1)*.6,t.z=i.z+(e%2?.5:-.5),t.y=Ve.heightAt(t.x,t.z),t.mesh.position.set(t.x,t.y,t.z)}}}function VM(i){var e;for(let t=co.length-1;t>=0;t--){const n=co[t];n.chillT+=i;const s=n.chillT,r=n.mesh.userData.body;if(n.def.flying)n.y+=i*2.5,n.z+=i*3,(e=n.mesh.userData.wings)==null||e.forEach((a,l)=>a.rotation.z=Math.sin(s*6)*.4*(l?-1:1));else if(s<1.4){const a=Math.min(1,s/.4);r.position.y=-.25*a*(n.type==="tank"?1.3:1),r.rotation.x=.25*a,r.rotation.z=Math.sin(s*3)*.05}else{r.rotation.x=0,r.position.y=Math.abs(Math.sin(s*7))*.06;const[a,l]=Cn.dir(n.x,n.z),c=n.x-a*n.def.speed*.45*i,u=n.z-l*n.def.speed*.45*i;Ve.isWalkable(c,u)&&(n.x=c,n.z=u),n.y=Ve.heightAt(n.x,n.z),(a||l)&&(n.mesh.rotation.y=Math.atan2(a,l))}Math.random()<i*1.5&&Ct.emit(n.x,n.y+1.8,n.z,{n:1,color:"#c8ffb0",speed:.3,up:1,life:.8,gravity:-.4}),s>2.6&&!n.popped&&(n.popped=!0,_s.emit(n.x,n.y+.8,n.z,{n:8,color:"#eef6e8",speed:1.4,up:1.2,life:.7,gravity:-.5}));const o=Math.max(0,Math.min(1,(3.2-s)/.6));n.mesh.scale.setScalar(o*(n.var||1)*(s>2.6?1+Math.sin((s-2.6)*10)*.08:1)),n.mesh.position.set(n.x,n.y,n.z),s>3.2&&(_t.remove(n.mesh),co.splice(t,1))}}function Du(i,e,t,n,s=!1,r=1){if(Be.guest)return;const o=Math.min(n,n>=6?3:n>=3?2:1);let a=n;for(let l=0;l<o;l++){const c=l===o-1?a:Math.ceil(n/o);a-=c;const u=Cd(),h=Math.random()*Math.PI*2,d=(1.2+Math.random()*1.8)*r,p={id:++Be.ids,mesh:u,x:i,y:e,z:t,vx:Math.cos(h)*d,vz:Math.sin(h)*d,vy:5+Math.random()*2,life:tt.emberLife,value:c,settled:!1,phase:Math.random()*6};u.scale.setScalar(.8+Math.min(c,6)*.08),_t.add(u),qn.push(p)}}function Hs(i,e,t,n,s=()=>!0){let r=null,o=n;for(const a of i){if(!s(a))continue;const l=Math.hypot(a.x-e,a.z-t);l<o&&(o=l,r=a)}return r}function Wa(){const i=Hs(Ve.plinths,D.x,D.z,tt.reach,l=>!l.tower);if(i)return{x:i.x,z:i.z,y:i.y,plinth:i,ok:!0};const e=-Math.sin(D.face),t=-Math.cos(D.face),n=D.x+e*tt.placeAhead,s=D.z+t*tt.placeAhead,r=Ve.heightAt(n,s),o=Ve.lighthouse.pos;let a="";return r<.35?a="i vannet":Ve.extras.blocks(n,s)?a="i lavaen":Ve.pathDist(n,s)<1.9?a="på stien":Ve.slopeAt(n,s)>.6?a="for bratt":Math.hypot(n-o.x,s-o.z)<5.5?a="for nær fyret":sn.some(l=>Math.hypot(l.x-n,l.z-s)<tt.minTowerGap)?a="for nær et annet tårn":Ve.plinths.some(l=>Math.hypot(l.x-n,l.z-s)<1.9)?a="oppå en sokkel (gå helt bort til den)":Ve.colliders.some(l=>!l.tower&&(l.x-n)**2+(l.z-s)**2<(l.r+.7)**2)&&(a="i veien for et tre eller en stein"),{x:n,z:s,y:r,plinth:null,ok:!a,why:a}}function Ra(i){const e=Wa();if(!e.ok){Lt.deny(),an(`Ikke lov å bygge her: ${e.why}`);return}const t=zs[i];if(q.embers<t.cost){Lt.deny(),an(`Trenger ${t.cost} ✦ glør`),Wn(on.embers,"embersBad",Math.random(),"bad");return}q.embers-=t.cost,jd(i,e),q.buildMode=!1,e.plinth&&an(`${t.name} på gammel sokkel: +25 % rekkevidde`)}function jd(i,e,t=0){const n=zs[i],s=Br(R_(i),"tower");if(s.position.set(e.x,e.y,e.z),!e.plinth){const o=new lt(HM,WM);o.position.y=.04,o.receiveShadow=!0,s.add(o)}_t.add(s);const r={id:t||++Be.ids,type:i,def:n,mesh:s,x:e.x,z:e.z,y:e.y,level:1,cd:.3,plinth:e.plinth,onPlinth:!!e.plinth};return e.plinth&&(e.plinth.tower=r),sn.push(r),Ve.colliders.push({x:e.x,z:e.z,r:1,tower:r}),Ct.emit(e.x,e.y+.3,e.z,{n:24,color:"#ffe3a0",speed:4,up:3,life:.8,gravity:5}),Lt.build(),r}const HM=new jt(.95,1.05,.12,10),WM=new Wt({color:"#8a8478"}),Zi=new bt;{const i=new lt(new Pr(1,24),new zt({transparent:!0,opacity:.35,depthWrite:!1}));i.rotation.x=-Math.PI/2;const e=new Ms(.965,1,64);e.rotateX(-Math.PI/2);const t=new lt(e,new zt({transparent:!0,opacity:.6,depthWrite:!1})),n=new lt(new jt(.55,.7,1.6,10),new zt({transparent:!0,opacity:.25,depthWrite:!1}));n.position.y=.8,Zi.add(i,t,n),Zi.userData={disc:i,ring:t,pillar:n},Zi.visible=!1,Zi.renderOrder=20,_t.add(Zi)}function XM(i,e,t){if(Zi.visible=i,!i)return;const n=e.ok,s=n?e.plinth?"#9fffb0":"#7be06a":"#ff5a4a",r=zs[t].range*(e.plinth?tt.plinthBonus:1);Zi.position.set(e.x,e.y+.06,e.z);const o=Zi.userData;for(const a of[o.disc,o.ring,o.pillar])a.material.color.set(s);o.ring.scale.setScalar(r),o.ring.visible=n,o.pillar.visible=!e.plinth}const Yi=(i,e)=>{const t=i.level-1;return e==="range"?i.def.range*(1+.12*t)*(i.onPlinth?tt.plinthBonus:1):e==="dmg"?i.def.dmg*[1,1.7,2.6,3.9,5.85][t]:e==="rate"?i.def.cooldown/(1+.15*t):i.def[e]},ba=[];function Kd(i){const e=Td();Su(e,1),en.userData.roll.getWorldPosition(e.position),_t.add(e),ba.push({mesh:e,from:e.position.clone(),to:new V(i.x,i.y+1.3*i.mesh.scale.y,i.z),age:0})}function qM(i){for(let e=ba.length-1;e>=0;e--){const t=ba[e];t.age+=i;const n=Math.min(1,t.age/.45);t.mesh.position.lerpVectors(t.from,t.to,n),t.mesh.position.y+=Math.sin(n*Math.PI)*1.2,t.mesh.rotation.z+=i*14,n>=1&&(_t.remove(t.mesh),ba.splice(e,1),_s.emit(t.to.x,t.to.y+.3,t.to.z,{n:6,color:"#e8e2dc",speed:1.2,up:1.4,life:1.2,gravity:-.3}))}}function YM(i){for(const e of kt)e.K.rollP=-1;qM(i);for(const e of sn){if(e.cd-=i,e.upg&&Be.guest)Si(e,Math.min(1,e.upg.t/e.upg.dur));else if(e.upg){const c=kt.find(h=>{var d;return h.K.stun<=0&&((d=h.K.roll)==null?void 0:d.tower)===e})||null,u=!!c;Ui(c||vn,()=>{if(u)e.upg.t+=i,e.rollEase=(e.rollEase??0)+(Math.min(1,e.upg.t/e.upg.dur)-(e.rollEase??0))*(1-Math.exp(-i/.05)),D.rollP=Math.min(1,e.rollEase),D.rollTower=e;else if(e.upg.t>0){const h=en.userData.roll.getWorldPosition(wr);Ct.emit(h.x,h.y,h.z,{n:14,color:"#4f8f3a",speed:1.4,up:.8,life:.8,gravity:6}),Ct.emit(h.x,h.y,h.z,{n:5,color:"#fffdf5",speed:1,up:.6,life:.7,gravity:5}),e.upg.t=0,e.rollEase=0,e.upgReset=!0,Co("😩"),Vt.rumble(220,.5),an(`Rullingen ble avbrutt! Start på nytt ved ${e.def.name}`)}}),Si(e,Math.min(1,e.upg.t/e.upg.dur)),u&&Math.random()<i*8&&Ct.emit(c.K.x,c.mesh.position.y+2.2,c.K.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),e.upg.t>=e.upg.dur&&(!u||e.rollEase>=.97)&&(Ui(c||vn,()=>Kd(e)),Be.host&&Be.ev.push(["u",e.id,c?c.slot:-1]),c&&(c.K.rollP=-1,c.K.roll=null),e.rollEase=0,e.upg=null,e.level+=1,wu(e,e.level),Si(e,0),Ct.emit(e.x,e.y+1.2,e.z,{n:30,color:"#8ff0ff",speed:4,up:4,life:.9,gravity:5}),Lt.upgrade(),an(`${e.def.name} er nå nivå ${e.level}`))}if(e.armBack>0&&(e.armBack-=i,e.armBack<=0&&(e.mesh.userData.arm.rotation.x=-.35)),e.type==="lamp"&&e.mesh.userData.blobs.forEach((c,u)=>c.position.y=.75+Math.sin(q.time*.8+u*2.1)*.35),e.blind>0){e.blind-=i,Math.random()<i*8&&Ct.emit(e.x,e.y+2,e.z,{n:1,color:"#fff6c8",speed:.6,up:.8,life:.5,gravity:-.4});continue}const t=Yi(e,"range");let n=null,s=-1;for(const c of fn){if(!c.alive||(c.def.flying?!e.def.air:e.def.ground===!1)||Math.hypot(c.x-e.x,c.z-e.z)>t)continue;const u=OM(c);u>s&&(s=u,n=c)}const r=e.mesh.userData.head;if(e.type==="speaker"){const c=Math.max(0,Math.sin(q.time*7.3));r.rotation.z=Math.sin(q.time*3.65)*.05,e.mesh.userData.woofers.forEach(u=>u.scale.set(1+c*.15,1,1+c*.15)),n&&(r.rotation.y+=La(Math.atan2(-(n.x-e.x),-(n.z-e.z)),r.rotation.y)*Math.min(1,i*3))}else if(n){const c=Math.atan2(-(n.x-e.x),-(n.z-e.z));r.rotation.y+=La(c,r.rotation.y)*Math.min(1,i*10)}if(!n||e.cd>0)continue;e.cd=Yi(e,"rate");const o=e.x,a=e.y+1.4*e.mesh.scale.y,l=e.z;if(e.type==="ring"){const c=P_();c.position.set(o,a-.3,l),_t.add(c),gi.push({kind:"bolt",src:e,mesh:c,target:n,dmg:Yi(e,"dmg"),tx:n.x,ty:n.y,tz:n.z,age:0}),Lt.puff()}else if(e.type==="chips"){const c=Rd();c.position.set(o,e.y+1,l),_t.add(c);const[u,h]=n.def.flying?[0,0]:Cn.dir(n.x,n.z),d=n.x+u*n.def.speed*.6,p=n.z+h*n.def.speed*.6;gi.push({kind:"shell",src:e,mesh:c,sx:o,sy:e.y+1,sz:l,ex:d,ez:p,ey:Ve.heightAt(d,p),t:0,dur:.95,dmg:Yi(e,"dmg"),splash:e.def.splash*(1+.1*(e.level-1))}),Ct.emit(o,e.y+1.3,l,{n:6,color:"#d8d0c0",speed:1,up:2,life:.5,gravity:-1}),Lt.mortar()}else if(e.type==="speaker"){for(const u of fn)!u.alive||Math.hypot(u.x-e.x,u.z-e.z)>t||(u.def.noMood||(u.slow=e.def.slowTime),Us(u,Yi(e,"dmg"),e));const c=Pd();c.position.set(e.x,e.y+.3,e.z),_t.add(c),br.push({mesh:c,t:0,r:t}),Ct.emit(e.x,e.y+1.8,e.z,{n:6,color:["#7be06a","#f2c94c","#ff7a5a"][Math.floor(Math.random()*3)],speed:2.2,up:1.6,life:.9,gravity:.5}),Lt.skank()}else if(e.type==="bubble"){const c=Dd();c.position.set(o,a+.2,l),_t.add(c),gi.push({kind:"bubble",src:e,mesh:c,target:n,dmg:Yi(e,"dmg"),trap:e.def.trap,tx:n.x,ty:n.y,tz:n.z}),Lt.pickup()}else if(e.type==="kite"){if(gi.some(u=>u.kind==="kite"&&u.tower===e)){e.cd=.2;continue}const c=Br(Ld(),"tower");c.position.set(o,a,l),_t.add(c),gi.push({kind:"kite",mesh:c,tower:e,sx:o,sz:l,tx:n.x,tz:n.z,phase:"out",t:0,tick:0,dmg:Yi(e,"dmg"),zone:e.def.zone*(1+.1*(e.level-1)),hover:e.def.hover}),Lt.puff()}else if(e.type==="pizza"){const c=D_();c.position.set(o,e.y+1.2,l),_t.add(c);const[u,h]=Cn.dir(n.x,n.z),d=n.x+u*n.def.speed*1.1,p=n.z+h*n.def.speed*1.1;gi.push({kind:"shell",src:e,pizza:!0,mesh:c,sx:o,sy:e.y+1.2,sz:l,ex:d,ez:p,ey:Ve.heightAt(d,p),t:0,dur:1.3,arc:7,dmg:Yi(e,"dmg"),splash:e.def.splash*(1+.1*(e.level-1))}),e.mesh.userData.arm.rotation.x=.9,e.armBack=.5,Lt.mortar()}else if(e.type==="lamp"){for(const c of fn)!c.alive||Math.hypot(c.x-e.x,c.z-e.z)>t||(c.slow=Math.max(c.slow,e.def.slowTime),Us(c,Yi(e,"dmg"),e));Math.random()<.3&&Ct.emit(e.x,e.y+1.6,e.z,{n:2,color:"#ff9a3a",speed:.8,up:1.2,life:.8,gravity:-.3})}}}function $M(i){var e;for(let t=gi.length-1;t>=0;t--){const n=gi[t];let s=!1;if(n.kind==="bolt"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y+(n.target.def.flying?0:.5),n.tz=n.target.z);const r=n.mesh.position,o=n.tx-r.x,a=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(o,a,l),u=18*i;n.age+=i,n.mesh.lookAt(n.tx,n.ty,n.tz),n.mesh.scale.setScalar(.7+n.age*2.2),c<=u+.3?(s=!0,n.target.alive&&(Us(n.target,n.dmg,n.src),_s.emit(n.tx,n.ty+.3,n.tz,{n:3,color:"#f4f0ea",speed:1,up:.8,life:.8,gravity:-.6}),Lt.hit())):r.set(r.x+o/c*u,r.y+a/c*u,r.z+l/c*u)}else if(n.kind==="shell"){n.t+=i/n.dur;const r=Math.min(1,n.t);if(n.mesh.position.set(n.sx+(n.ex-n.sx)*r,n.sy+(n.ey-n.sy)*r+Math.sin(Math.PI*r)*(n.arc||5),n.sz+(n.ez-n.sz)*r),n.mesh.rotation.set(r*9,r*5,0),n.t>=1){s=!0;for(const o of fn){if(!o.alive||o.def.flying)continue;const a=Math.hypot(o.x-n.ex,o.z-n.ez);a<n.splash&&Us(o,n.dmg*(a<n.splash*.4?1:.6),n.src)}Ct.emit(n.ex,n.ey+.3,n.ez,{n:26,color:n.pizza?"#ff7040":"#ffd060",speed:5,up:5,life:.7,gravity:12}),_s.emit(n.ex,n.ey+.3,n.ez,{n:4,color:"#f6e7c0",speed:1.5,up:1,life:.8,gravity:-.3}),Lt.crunch(),Vn=Math.max(Vn,.12)}}else if(n.kind==="bubble"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y,n.tz=n.target.z);const r=n.mesh.position,o=n.tx-r.x,a=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(o,a,l),u=13*i;n.mesh.scale.setScalar(1+Math.sin(q.time*12)*.06),c<=u+.3?(s=!0,n.target.alive&&(Us(n.target,n.dmg,n.src),n.target.trap=Math.max(n.target.trap||0,n.trap*Math.min(1,((e=n.target.def.resist)==null?void 0:e.bubble)??1))),Ct.emit(n.tx,n.ty,n.tz,{n:6,color:"#dff6ff",speed:2,up:1,life:.35})):r.set(r.x+o/c*u,r.y+a/c*u,r.z+l/c*u)}else if(n.kind==="kite"){n.t+=i;const r=n.mesh.position;if(n.mesh.userData.tailSegs.forEach((o,a)=>{o.rotation.x=Math.sin(q.time*5-a*.9)*.35,o.rotation.z=Math.sin(q.time*3.7-a*.7)*.25}),sn.includes(n.tower)||(n.phase="back"),n.phase==="out"){const o=n.tx-r.x,a=n.tz-r.z,l=Math.hypot(o,a),c=9*i;r.y+=(4.2-r.y)*Math.min(1,i*2),l<c?(n.phase="hover",n.t=0):(r.x+=o/l*c,r.z+=a/l*c)}else if(n.phase==="hover"){if(r.x=n.tx+Math.sin(q.time*1.7)*.6,r.z=n.tz+Math.cos(q.time*1.3)*.4,r.y=4.2+Math.sin(q.time*2.3)*.3,n.tick-=i,n.tick<=0){n.tick=.25;for(const o of fn)o.alive&&o.def.flying&&Math.hypot(o.x-r.x,o.z-r.z)<n.zone&&(Us(o,n.dmg*.4,n.tower),o.slow=Math.max(o.slow,.4));Ct.emit(r.x,r.y-.3,r.z,{n:2,color:"#ffd0b0",speed:1.5,up:-.5,life:.5,gravity:0})}n.t>n.hover&&(n.phase="back")}else{const o=n.sx-r.x,a=n.sz-r.z,l=Math.hypot(o,a),c=11*i;l<c?s=!0:(r.x+=o/l*c,r.z+=a/l*c)}n.mesh.rotation.set(Math.sin(q.time*3)*.2,q.time*.5,Math.cos(q.time*2.5)*.25)}s&&(_t.remove(n.mesh),gi.splice(t,1))}for(let t=br.length-1;t>=0;t--){const n=br[t];n.t+=i/(n.dur||.6),n.mesh.scale.setScalar(.5+n.t*n.r),n.mesh.material.opacity=.7*(1-n.t),n.t>=1&&(_t.remove(n.mesh),n.mesh.material.dispose(),br.splice(t,1))}}function jM(i){var e,t;for(const n of fn){if(!n.alive)continue;n.phase+=i*n.def.anim;const s=n.slow>0?.5:1;n.slow-=i;let r=n.def.speed*s*(n.speedMul||1);n.trap>0?(n.trap-=i,r*=.15,n.bubbleFx||(n.bubbleFx=Dd(),n.bubbleFx.scale.setScalar(3.2),n.mesh.add(n.bubbleFx)),n.bubbleFx.visible=!0):n.bubbleFx&&(n.bubbleFx.visible=!1);const o=n.mesh.userData.body;if(n.def.flying){const l=Ve.lighthouse.pos;let c=l.x-n.x,u=l.z-n.z;const h=Au(n.x,n.z),d=h.K,p=Math.hypot(d.x-n.x,d.z-n.z);let g=n.trap>0?1.1:n.def.alt||4.2;if(n.def.swoop&&p<6&&d.stun<=0&&n.hitCd<=0&&!(n.trap>0)){const x=Math.hypot(c,u);c=c/x*.5+(d.x-n.x)/p*.9,u=u/x*.5+(d.z-n.z)/p*.9,g=1.5}n.hitCd-=i;const M=Math.hypot(c,u)||1,m=Math.cos(q.time*1.3+n.lane*4)*(n.type==="balloon"?.4:1.2);n.x+=(c/M+-u/M*m*.35)*r*i,n.z+=(u/M+c/M*m*.35)*r*i,n.mesh.rotation.z=-m*(n.type==="balloon"?.05:.25);const f=Math.max(Ve.heightAt(n.x,n.z),0);n.y+=(f+g-n.y)*Math.min(1,i*2.5);const _=n.mesh.userData.blob;_&&(_.position.y=(f-n.y)/n.var+.05,_.material.opacity=1,_.scale.setScalar(1)),n.mesh.rotation.y=Math.atan2(-c,-u);const b=n.mesh.userData;if((e=b.wings)==null||e.forEach((x,C)=>x.rotation.z=Math.sin(n.phase)*.45*(C?-1:1)),(t=b.rotors)==null||t.forEach(x=>x.rotation.y+=i*40),b.rotor&&(b.rotor.rotation.y+=i*30,b.tail.rotation.x+=i*30),o.position.y=Math.sin(n.phase*.5)*(n.type==="balloon"?.3:.15),n.def.blind&&(n.blindCd=(n.blindCd??n.def.blind.every*.5)-i,b.beam&&(b.beam.visible=n.blindCd>n.def.blind.every-.8),n.blindCd<=0)){n.blindCd=n.def.blind.every;const x=Hs(sn,n.x,n.z,n.def.blind.range);x&&(x.blind=n.def.blind.dur,an(`${n.def.name} blendet ${x.def.name}!`)),p<5&&Ui(h,()=>qc(tt.airStress,n.x,n.z,!0))}n.def.swoop&&p<1.3&&Math.abs(n.y-h.mesh.position.y-1)<1.4&&d.stun<=0&&n.hitCd<=0&&Ui(h,()=>JM(n)),Math.hypot(l.x-n.x,l.z-n.z)<3.4&&Xc(n)}else{const[l,c,u]=Cn.dir(n.x,n.z);n.remain=u;const h=Ve.lighthouse.pos,d=Math.hypot(h.x-n.x,h.z-n.z);if(d<4.3||u<.6){Xc(n);continue}let p=l,g=c;!p&&!g&&(p=(h.x-n.x)/d,g=(h.z-n.z)/d),n.hx=(n.hx||0)+(p-(n.hx||0))*Math.min(1,i*6),n.hz=(n.hz||0)+(g-(n.hz||0))*Math.min(1,i*6);const M=Math.hypot(n.hx,n.hz)||1,m=n.lane*Math.min(1,d/10);n.x+=n.hx/M*r*i+-n.hz/M*m*i*.5,n.z+=n.hz/M*r*i+n.hx/M*m*i*.5,n.y=Ve.heightAt(n.x,n.z),n.mesh.rotation.y=Math.atan2(-n.hx,-n.hz);for(const f of kt){const _=f.K;_.inv<=0&&_.faint<=0&&Math.abs(_.x-n.x)<1.2&&Math.abs(_.z-n.z)<1.2&&Math.hypot(_.x-n.x,_.z-n.z)<1.1&&Ui(f,()=>qc(n.def.stress??10,n.x,n.z))}if(n.type==="clerk")o.position.y=Math.abs(Math.sin(n.phase))*.12,o.rotation.z=Math.sin(n.phase)*.06,n.mesh.userData.arm.position.y=.9+Math.max(0,Math.sin(n.phase*.5))*.25;else if(n.type==="tank"){const f=Math.abs(Math.sin(n.phase));o.position.y=f*.05,o.rotation.z=Math.sin(n.phase)*.07;const _=Math.pow(1-f,6);o.scale.set(1+_*.06,1-_*.08,1+_*.06)}else n.type==="swarm"?(o.position.y=Math.abs(Math.sin(n.phase))*.14,o.rotation.y=Math.sin(n.phase*.5)*.3):n.type==="complainer"?(o.position.y=Math.abs(Math.sin(n.phase))*.16,n.mesh.userData.arm.rotation.z=Math.sin(n.phase*.5)*.4):n.type==="lobbyist"||n.type==="lobbyMini"?(o.position.y=Math.abs(Math.sin(n.phase))*.05,o.rotation.z=Math.sin(n.phase*.5)*.17):n.type==="auditor"?(o.position.y=Math.abs(Math.sin(n.phase))*.03,o.rotation.z=0):(o.position.y=Math.abs(Math.sin(n.phase))*.08,o.rotation.z=Math.sin(n.phase)*.05)}if(n.hitT>0){n.hitT-=i;const l=Math.max(0,n.hitT)/.18;o.scale.set(1+l*.16,1-l*.16,1+l*.16),o.position.z=l*.15,n.hitT<=0&&(o.scale.set(1,1,1),o.position.z=0)}n.blinkT-=i,n.blinkT<-.12&&(n.blinkT=2+Math.random()*3.5);for(const l of n.mesh.userData.eyes)l.scale.y=n.blinkT<0?.12:1;n.mesh.position.set(n.x,n.y,n.z),n.slow>0&&Math.random()<i*6&&Ct.emit(n.x,n.y+.8,n.z,{n:1,color:"#b8e6ff",speed:.4,up:.6,life:.6,gravity:-.5});const a=n.mesh.userData.hpBar;if(a.visible){a.quaternion.copy($t.quaternion),a.quaternion.premultiply(n.mesh.quaternion.clone().invert());const l=Math.max(0,n.hp/n.maxHp),c=n.mesh.userData.hpFg;c.scale.x=.96*l,c.position.x=-.48*(1-l),c.material.color.setHSL(.33*(1-l),.7,.55)}}for(let n=fn.length-1;n>=0;n--)fn[n].alive||fn.splice(n,1)}function Xc(i,e=!1){if(Be.guest&&!e)return;Be.host&&Be.ev.push(["l",i.id]),q.leaks[i.type]=(q.leaks[i.type]||0)+1,i.alive=!1,_t.remove(i.mesh),q.lights=Math.max(0,q.lights-1),Ve.lighthouse.setLights(q.lights),Wn(on.lights,"lights",q.lights,"bad");const t=Ve.lighthouse.flamePos();_s.emit(t.x,t.y,t.z,{n:10,color:"#b8b4b0",speed:.8,up:1.6,life:1.8,gravity:-.4}),Ct.emit(t.x,t.y,t.z,{n:14,color:"#8a8580",speed:1.6,up:.6,life:1.6,gravity:4}),an(`${i.def.name} slukket litt glød!`),Lt.lose(),Vn=.3,q.lights<=0&&!Be.guest&&Uu(!1)}const Gn=[],Mi=document.createElement("div");Mi.id="chillbar";Mi.innerHTML="<i></i>";document.body.appendChild(Mi);let Ef=0;function Co(i){if(!vn.local)return;const e=document.createElement("div");e.className="pop-emoji",e.textContent=i,yt.set(D.x,en.position.y+2.6,D.z).project($t),e.style.left=`${(yt.x*.5+.5)*innerWidth}px`,e.style.top=`${(-yt.y*.5+.5)*innerHeight}px`,document.body.appendChild(e),setTimeout(()=>e.remove(),900)}function qc(i,e,t,n=!1){if(!Be.guest&&!(D.faint>0||D.inv>0)){if(D.chill=Math.max(0,D.chill-i),D.inv=tt.stressInvuln,D.flinch=.55,!n){const s=D.x-e,r=D.z-t,o=Math.hypot(s,r)||1;D.vx+=s/o*tt.stressPush,D.vz+=r/o*tt.stressPush,D.goal=null}Ct.emit(D.x,en.position.y+1.4,D.z,{n:8,color:"#ff6a5a",speed:2,up:1.5,life:.4}),Co("😓"),Mi.classList.remove("hit"),Mi.offsetWidth,Mi.classList.add("hit"),Wn(on.chill,"chillBad",Math.random(),"bad"),D.chill<=0&&KM()}}function KM(){D.faint=tt.faintTime,D.stun=tt.faintTime,D.faints++,D.goal=null,D.vx=D.vz=0;const i=Math.floor(q.embers*tt.faintLoss);i>0&&(q.embers-=i,Du(D.x,en.position.y+1,D.z,i,!1,1.6)),D.carrying&&(D.carrying=!1),Co("😵"),an(`😵 Vokteren besvimte av stress! Våkner ved fyret om ${tt.faintTime} s`),Lt.stun()}function Iu(i,e,t=0){if(Be.guest&&!t)return;const n=Rd();n.scale.setScalar(1.8),n.position.set(i,Ve.heightAt(i,e)+.5,e),_t.add(n),Gn.push({id:t||++Be.ids,mesh:n,x:i,z:e,life:tt.bagLife})}function ZM(i){if(Be.guest){vn.local&&Tf();return}D.inv-=i;const e=Ve.lighthouse.pos;D.faint>0?(D.faint-=i,D.faint<=0&&(D.x=e.x+1,D.z=e.z+7.5,D.vx=D.vz=0,D.stun=0,D.chill=tt.chillMax*tt.wakeChill,D.inv=tt.stressInvuln*2,Ct.emit(D.x,Ve.heightAt(D.x,D.z)+1,D.z,{n:14,color:"#9fffb0",speed:2,up:2,life:.7}))):Math.hypot(e.x-D.x,e.z-D.z)<tt.regenReach&&(D.chill=Math.min(tt.chillMax,D.chill+tt.regen*i));for(let t=Gn.length-1;vn===kt[0]&&t>=0;t--){const n=Gn[t];n.life-=i,n.mesh.rotation.y+=i*1.5,n.mesh.position.y=Ve.heightAt(n.x,n.z)+.5+Math.sin(q.time*3+t)*.12,n.mesh.visible=n.life>4||Math.sin(n.life*12)>0;const s=Au(n.x,n.z,r=>r.K.faint<=0&&Math.hypot(n.x-r.K.x,n.z-r.K.z)<1.4);s&&Ui(s,()=>{D.chill=Math.min(tt.chillMax,D.chill+tt.bagHeal),an(`🥔 Chips! +${tt.bagHeal} chill`),Co("😌"),Lt.pickup(),n.life=0}),n.life<=0&&(_t.remove(n.mesh),Gn.splice(t,1))}vn.local&&Tf()}function Tf(){const i=Math.round(D.chill);Wn(on.chill,"chill",i),on.chill.classList.toggle("low",i<30),i!==Ef&&(Ef=i,Mi.firstChild.style.width=`${100*D.chill/tt.chillMax}%`,Mi.classList.toggle("low",i<30));const e=(i<tt.chillMax||D.faint>0)&&q.phase!=="title";Mi.style.display=e?"block":"none",e&&(yt.set(D.x,en.position.y+2.3,D.z).project($t),Mi.style.left=`${(yt.x*.5+.5)*innerWidth}px`,Mi.style.top=`${(-yt.y*.5+.5)*innerHeight}px`)}function JM(i){if(Be.guest||(Be.host&&Be.ev.push(["st",vn.slot]),qc(tt.airStress,i.x,i.z,!0),D.faint>0))return;D.stun=tt.stunTime,i.hitCd=4;const e=Math.floor(q.embers*tt.stunLoss);e>0&&(q.embers-=e,Du(D.x,en.position.y+1,D.z,e,!1,1.6)),D.carrying&&(D.carrying=!1,an("Rullepapiret blåste bort!")),Ct.emit(D.x,en.position.y+1.5,D.z,{n:16,color:"#ffffff",speed:3,up:2,life:.5}),Lt.stun(),Vn=.2}function QM(i){if(Be.guest){Sy(i);return}for(let e=qn.length-1;e>=0;e--){const t=qn[e];t.life-=i,t.phase+=i;const n=Math.max(Ve.heightAt(t.x,t.z),.1)+.35;t.settled||(t.vy-=16*i,t.x+=t.vx*i,t.z+=t.vz*i,t.y+=t.vy*i,t.y<=n&&(t.y=n,Math.abs(t.vy)>2.5?(t.vy=-t.vy*.4,t.vx*=.6,t.vz*=.6):t.settled=!0));const s=Au(t.x,t.z,u=>u.K.stun<=0),r=s==null?void 0:s.K,o=r?Math.hypot(r.x-t.x,r.z-t.z):1/0;if(o<tt.magnet){const u=(1-o/tt.magnet)*14+3;t.x+=(r.x-t.x)/o*u*i,t.z+=(r.z-t.z)/o*u*i,t.settled=!0,t.y=n}const a=t.settled?Math.sin(t.phase*3)*.12:0;t.mesh.position.set(t.x,t.y+a,t.z),t.mesh.rotation.y+=i*3;const l=t.life<5,c=(.8+Math.min(t.value,6)*.08)*(l?.55+.45*(t.life/5):1);if(t.mesh.scale.setScalar(c),t.mesh.visible=!l||Math.sin(t.life*(t.life<1.5?30:16))>-.4,Math.random()<i*2.5&&Ct.emit(t.x,t.y+.2,t.z,{n:1,color:"#ffb347",speed:.3,up:1.2,life:.6,gravity:-.5}),o<.9)q.embers+=t.value,Wn(on.embers,"embers",q.embers,"bump"),Ct.emit(t.x,t.y+.3,t.z,{n:8,color:"#ffe08a",speed:2,up:2.5,life:.4}),Lt.pickup(),_t.remove(t.mesh),qn.splice(e,1);else if(t.life<=0){const u=Math.max(1,Math.round(t.value*tt.expiredRefund));q.embers+=u,Ct.emit(t.x,t.y,t.z,{n:6,color:"#555048",speed:.6,up:1,life:.8,gravity:-.6}),_t.remove(t.mesh),qn.splice(e,1)}}}let Pa=0,Zd="";function an(i){var e;if(!vn.local){(e=vn.hints)==null||e.push(i);return}Pa=2,Zd=i,Qi.textContent=""}function Af(i){for(const e of kt)Ui(e,()=>ey(i))}function ey(i){var N,L;const e=en.userData;(q.phase==="prep"||q.phase==="wave")&&ZM(i),D.stun-=i,e.stars.visible=D.stun>0,e.stars.rotation.y+=i*6;let t=0,n=0;if(D.stillT=!Vt.move.x&&!Vt.move.z&&!D.goal?D.stillT+i:0,D.roll)D.goal=null;else if(D.stun<=0&&(q.phase==="prep"||q.phase==="wave")){if(Vt.move.x||Vt.move.z){D.goal=null;const U=Vt.yaw??Ki,W=Math.cos(U),G=Math.sin(U);t=Vt.move.x*W+Vt.move.z*G,n=-Vt.move.x*G+Vt.move.z*W}else if(D.goal){const U=D.goal,W=U.x-D.x,G=U.z-D.z;if(U.field===void 0){U.field=null;const Y=Math.ceil(Math.hypot(W,G)/.5);for(let $=1;$<Y;$++)if(!Ve.isWalkable(D.x+W*$/Y,D.z+G*$/Y)){U.field=Cn.walkField(U.x,U.z);break}}const z=U.field?Math.min(U.field.at(D.x,D.z),Math.hypot(W,G)+50):Math.hypot(W,G);U.t+=i;const I=z<.35||U.spot&&Math.hypot(U.spot.x-D.x,U.spot.z-D.z)<U.reach;if(z<U.best-.3&&(U.best=z,U.lastGain=U.t),I||U.t>12||U.t-U.lastGain>1.5)D.goal=null;else{const Y=Math.min(1,z/.8),$=U.field&&Math.hypot(W,G)>1.5?U.field.dir(D.x,D.z):null,ie=$&&($[0]||$[1])?$[0]:W/Math.hypot(W,G),ge=$&&($[0]||$[1])?$[1]:G/Math.hypot(W,G);t=ie,n=ge;for(const H of Ve.colliders){if(U.spot&&H.x===U.spot.x&&H.z===U.spot.z)continue;const Z=H.x-D.x,ue=H.z-D.z,oe=Z*ie+ue*ge;if(oe<=0||oe>H.r+2.2||oe>z)continue;const me=-Z*ge+ue*ie;if(Math.abs(me)>H.r+.6)continue;const De=(1-Math.abs(me)/(H.r+.6))*1.6*(me>=0?1:-1);t-=-ge*De,n-=ie*De}const Ne=Math.hypot(t,n)||1;t=t/Ne*Y,n=n/Ne*Y}}}Be.guest&&!vn.local&&(My(i),t=n=0);const r=Ve.heightAt(D.x,D.z)<.05,o=tt.keeperSpeed*(D.carrying?tt.carrySlow:1)*(r?tt.wadeSlow:1),a=t*o,l=n*o,c=(N=Ve.isIce)!=null&&N.call(Ve,D.x,D.z)?1.6:12;Be.guest&&!vn.local||(D.vx+=(a-D.vx)*Math.min(1,i*c),D.vz+=(l-D.vz)*Math.min(1,i*c));let u=D.x+D.vx*i,h=D.z+D.vz*i;Be.guest&&!vn.local&&(u=D.x,h=D.z),Ve.isWalkable(u,h)||(Ve.isWalkable(u,D.z)?h=D.z:Ve.isWalkable(D.x,h)?u=D.x:(u=D.x,h=D.z));for(const U of Ve.colliders){const W=u-U.x,G=h-U.z,z=Math.hypot(W,G),I=U.r+.4;z<I&&z>1e-4&&(u=U.x+W/z*I,h=U.z+G/z*I)}D.x=u,D.z=h;const d=Math.hypot(D.vx,D.vz);if(d>.3){const U=Math.atan2(-D.vx,-D.vz);D.face+=La(U,D.face)*Math.min(1,i*12),D.walk+=i*d*2.2}if(en.rotation.y=D.face,en.position.set(D.x,Math.max(Ve.heightAt(D.x,D.z),-.25),D.z),r&&d>1&&(D.splash=(D.splash||0)-i,D.splash<=0)){D.splash=.22,Ct.emit(D.x,.15,D.z,{n:4,color:"#e8fbff",speed:1.6,up:2.2,life:.35,gravity:12});const U=Pd();U.position.set(D.x,.1,D.z),U.material.color.set("#f4fdff"),_t.add(U),br.push({mesh:U,t:0,r:1.6,dur:.9})}const p=Math.min(1,d/3),g=Math.sin(D.walk)*p;e.legs[0].position.z=g*.2,e.legs[1].position.z=-g*.2,e.legs[0].position.y=.2+Math.max(0,g)*.12,e.legs[1].position.y=.2+Math.max(0,-g)*.12;const M=d>.6;M!==!!D.wasMoving&&(D.sq=M?1:-1,D.wasMoving=M),D.sq=(D.sq||0)*Math.exp(-i*7);const m=d<.3?Math.sin(q.time*2.2)*.025:0;e.body.scale.set(1-m*.5-D.sq*.07,1+m+D.sq*.12,1-m*.5-D.sq*.07);const f=Math.sign(Math.sin(D.walk));d>2&&!r&&f!==D.lastStep&&Ct.emit(D.x,en.position.y+.1,D.z,{n:2,color:"#d9c9a4",speed:.7,up:.6,life:.45,gravity:1}),D.lastStep=f,D.flinch=Math.max(0,(D.flinch||0)-i),D.cheer=Math.max(0,(D.cheer||0)-i);const _=d>.5&&((L=Ve.isIce)==null?void 0:L.call(Ve,D.x,D.z)),b=Math.abs(g)*.09+(D.cheer>0?Math.abs(Math.sin(D.cheer*9))*.35:0);if(D.sit=(D.sit??0)+((D.roll?1:0)-(D.sit??0))*Math.min(1,i*10),e.body.position.y=b-D.sit*.24,D.sit>.01)for(const U of e.legs)U.position.z-=D.sit*.3,U.position.y+=D.sit*.12;e.body.rotation.x=D.faint>0?0:-.35*Math.min(1,D.flinch*2.5),e.body.rotation.z=D.faint>0?1.45:D.stun>0?.5:g*.05+(_?Math.sin(q.time*7)*.12:0)+(D.flinch>0?Math.sin(D.flinch*40)*.08:0);let x=g*.6,C=-g*.45,S=0,E=0;_&&(S=-1.25+Math.sin(q.time*9)*.25,E=1.25+Math.cos(q.time*8)*.25,x=C=0),D.cheer>0&&(x=C=-2.9,S=-.3,E=.3),D.flinch>0&&(x=-2.5,S=.5);const A=D.rollP>=0&&d<.3&&D.faint<=0;if(A){const U=Math.sin(q.time*7)*.12;x=1.35+U,S=.55,C=1.35-U,E=-.55;const W=D.rollTower,G=Math.atan2(-(W.x-D.x),-(W.z-D.z));if(D.face+=La(G,D.face)*Math.min(1,i*8),en.rotation.y=D.face,Su(e.roll,D.rollP),e.roll.rotation.x=Math.sin(q.time*7)*.5,Math.random()<i*4&&D.rollP<.5){const z=e.roll.getWorldPosition(wr);Ct.emit(z.x,z.y,z.z,{n:1,color:"#5aa84a",speed:.4,up:.3,life:.5,gravity:4})}}e.roll.visible=A,e.armR.visible=A,A?e.lanternArm.position.set(.36,.72,.18):e.lanternArm.position.set(.48,1,-.1);const y=Math.min(1,i*14);e.armL.rotation.x+=(x-e.armL.rotation.x)*y,e.armL.rotation.z+=(S-e.armL.rotation.z)*y;const v=A?e.armR:e.lanternArm;A&&e.lanternArm.rotation.set(0,0,0),v.rotation.x+=(C-v.rotation.x)*y,v.rotation.z+=(E-v.rotation.z)*y,D.idle=d<.3?(D.idle||0)+i:0;const T=D.idle>2?Math.sin(q.time*.55)*.7*Math.min(1,(D.idle-2)/1.5):0;e.head.rotation.y+=(T-e.head.rotation.y)*Math.min(1,i*4),D.blink=(D.blink??2)-i,D.blink<-.12&&(D.blink=2+Math.random()*3);for(const U of e.eyes)U.scale.y=D.faint>0?.1:D.blink<0?.12:1;e.carried.visible=D.carrying,D.chargeTower?(e.carried.position.lerp(wr.set(0,.95,-.5),Math.min(1,i*14)),e.carried.rotation.y=0,e.carried.scale.setScalar(Math.max(.55,e.carried.scale.x-i*3))):(e.carried.rotation.y+=i*2,e.carried.scale.setScalar(1),e.carried.position.set(0,2.35+Math.sin(q.time*3)*.08,0)),Tu.intensity=Hd*(1+Math.sin(q.time*11)*.115)}function ty(){for(const i of xt.clicks.splice(0)){Sf.setFromCamera(i,$t);const e=Sf.intersectObject(Ve.terrain)[0];e&&(Be.guest&&(Be.goal=[e.point.x,e.point.z]),Jd(e.point.x,e.point.z))}}function Jd(i,e){const t=Ve.lighthouse.pos,n=Hs(Ve.plinths,i,e,2.2)||(Math.hypot(t.x-i,t.z-e)<4.5?{x:t.x,z:t.z,big:!0}:null);if(n){const s=n.big?4.3:1.95;let r=D.x-n.x,o=D.z-n.z;const a=Math.hypot(r,o)||1;i=n.x+r/a*s,e=n.z+o/a*s}D.goal={x:i,z:e,t:0,best:1/0,lastGain:0,spot:n,reach:n?n.big?tt.lighthouseReach-.4:tt.reach-.25:0},Ct.emit(i,Ve.heightAt(i,e)+.2,e,{n:6,color:"#fff3d0",speed:1.5,up:.5,life:.35,gravity:0})}function ks(i=!q.paused,e=!1){q.paused=i;const t=xt.labels();ct("pause-keys").textContent=`${t.name}: fortsett med ${t.pause} · start på nytt med ${t.restart}`,ct("pad-help").classList.toggle("hidden",xt.padSeen),ct("pause").classList.toggle("hidden",!i),ct("confirm").classList.toggle("hidden",!e),q.confirming=i&&e}try{sessionStorage.getItem("glod-portrait")&&document.documentElement.classList.add("portrait-ok")}catch{}ct("btn-portrait").addEventListener("click",()=>{document.documentElement.classList.add("portrait-ok");try{sessionStorage.setItem("glod-portrait","1")}catch{}Ao()});ct("btn-resume").addEventListener("click",()=>ks(!1));ct("btn-restart").addEventListener("click",()=>ks(!0,!0));ct("btn-yes").addEventListener("click",()=>Sr());ct("btn-no").addEventListener("click",()=>ks(!0,!1));ct("btn-worlds").addEventListener("click",()=>{location.href=`${location.pathname}?world=${Sn}`});ct("btn-lex").addEventListener("click",()=>{const i=ct("lex");i.innerHTML||(i.innerHTML=Object.entries(wo).filter(([e])=>e!=="lobbyMini").map(([e,t])=>{const{tough:n,weak:s}=qd(t);return`<div class="lex-row"><b>${t.flying?"🪶":"🐾"} ${t.name}</b><small>${t.info||(t.flying?"flyr rett mot fyret":"går langs veien")}</small><span>${n?`🛡️ ${n}`:""} ${s?`💥 ${s}`:""}</span></div>`}).join("")+`<p class="lex-key">🛡️ tåler · 💥 svak mot · ${Object.entries(Hc).map(([e,t])=>`${t} ${zs[e].name}`).join(" · ")} · 📒 skjold forfra</p>`),i.classList.toggle("hidden")});function Sr(){Be.host&&Be.net.broadcast({t:"restart"}),Be.guest&&(Be.snap=null);for(const i of ji)i.el.remove();ji.length=0;for(const i of[fn,co,qn,gi,br]){for(const e of i)e.mesh&&_t.remove(e.mesh);i.length=0}for(const i of sn)_t.remove(i.mesh);sn.length=0,yo.innerHTML="",Ca.length=0;for(const i of Ve.plinths)i.tower=null;for(let i=Ve.colliders.length-1;i>=0;i--)Ve.colliders[i].tower&&Ve.colliders.splice(i,1);q.buildMode=!1;for(const i of kt)i.K.chargeTower&&Si(i.K.chargeTower,0);Object.assign(q,{phase:"title",wave:0,timer:0,embers:tt.startEmbers,lights:Ir,spawnQueue:[],leaks:{},seen:{},waveClock:0,sel:0,paused:!1,confirming:!1});for(const i of kt){const{walk:e,face:t,...n}=Wd(i.slot);Object.assign(i.K,n),i.sel=0,i.buildMode=!1}for(const i of Gn)_t.remove(i.mesh);Gn.length=0,Ve.lighthouse.setLights(Ir),uy(),Vn=0,Pa=0,ni={},Wn(on.lights,"lights",q.lights),Wn(on.embers,"embers",q.embers),Wn(on.wave,"wave",0),on.timer.textContent="",ct("pause").classList.add("hidden"),ct("confirm").classList.add("hidden"),ct("overlay").classList.add("hidden"),xt.clear(),q.phase="title",zr(!0),window.__restarts=(window.__restarts||0)+1}function ny(){Gd.sync();const i=xt.device,e=!!D.roll&&i==="touch"&&!q.paused;if(ct("rollpad").classList.toggle("hidden",!e),e!==ni.rollTouch&&(ni.rollTouch=e,ni.device=null),e&&ct("touch").classList.add("hidden"),ni.device===i+xt.padKind)return;ni.device=i+xt.padKind;const t=xt.labels();ct("touch").classList.toggle("hidden",i!=="touch"||q.phase==="title"||e),Ei.querySelectorAll("button i").forEach((n,s)=>{n.textContent=i==="pad"?s===q.sel?t.build:"":i==="touch"?"":String(s+1)}),Cu.textContent="Neste bølge ▶",ni.sel=-1}const Yc={still:.3,step:.25,bonus:.1},$c=["rU","rR","rD","rL"];function Qd(i){const e=Math.min(8,Math.max(4,i.level+3));return Array.from({length:e},()=>$c[Math.floor(Math.random()*4)])}function iy(i,e){const t=i!=null&&i.upg&&!D.carrying&&!e?i:null;if(D.rollBlock&&D.rollBlock!==t&&(D.rollBlock=null),D.roll&&D.roll.tower!==t&&(D.roll=null),!D.roll&&t&&(Vt.consume("build")||Vt.consume("carry")||D.rollBlock!==t&&D.stillT>=Yc.still)&&(D.roll={tower:t,seq:Qd(t),i:0,shake:!1,done:0},D.goal=null,D.vx=D.vz=0),Vt.rollMode=!!D.roll,!D.roll){for(const n of[...$c,"rollExit"])Vt.consume(n);return}if(Vt.consume("build"),Vt.consume("carry"),Vt.consume("rollExit")){D.rollBlock=D.roll.tower,D.roll=null,Vt.rollMode=!1;return}for(const n of $c)Vt.consume(n)&&sy(n)}function sy(i){const e=D.roll,t=e.tower.upg;i===e.seq[e.i]?(e.i++,t.t=Math.min(t.dur,t.t+t.dur*Yc.step/e.seq.length),Lt.tick(e.i),e.i>=e.seq.length&&(t.t=Math.min(t.dur,t.t+t.dur*Yc.bonus),e.seq=Qd(e.tower),e.i=0,e.done++,Lt.stone(),Ct.emit(D.x,en.position.y+2.2,D.z,{n:10,color:"#8ff0ff",speed:1.6,up:1.6,life:.6,gravity:2}))):(e.i=0,e.shake=!0,e.shakes=(e.shakes||0)+1,Lt.bonk(),Vt.rumble(150,.4))}function ry(i){if(xt.consume("fps")&&Ru.classList.toggle("hidden"),xt.consume("music")&&ip(),ny(),q.phase==="title"){["build","carry","next","pause"].some(t=>xt.consume(t))&&zr();for(const t of kt)t.input.clear();return}if(Wn(on.embers,"embers",q.embers),!(q.phase==="prep"||q.phase==="wave")){if((q.phase==="won"||q.phase==="lost")&&xt.consume("restart")){Sr();return}xt.clear(),Ei.classList.add("hidden"),Vc("");return}if(xt.consume("restart")){Be.guest?an("Bare verten kan starte på nytt"):q.confirming?Sr():ks(!0,!0);return}if(xt.consume("pause")&&(Be.guest?an("Bare verten kan pause"):ks(!q.paused)),q.confirming){if(xt.consume("build")||xt.consume("next")){Sr();return}xt.consume("carry")&&ks(!0,!1)}if(q.paused){for(const t of kt)t.input.clear();Be.guest&&Vc("⏸ Verten har pauset");return}ty();for(const t of kt)Ui(t,()=>oy(i))}function oy(i){if(Be.guest){wy(i);return}Vt.consume("next")&&q.phase==="prep"&&(q.timer=0),Vt.consume("selPrev")&&(q.sel=(q.sel+Di.length-1)%Di.length),Vt.consume("selNext")&&(q.sel=(q.sel+1)%Di.length);const e=Hs(Ve.plinths,D.x,D.z,tt.reach,c=>!c.tower),t=Hs(sn,D.x,D.z,tt.reach),n=Ve.lighthouse.pos,s=Math.hypot(n.x-D.x,n.z-D.z)<tt.lighthouseReach,r=D.stun>0;iy(t,r);const o=Wa();Vt.consume("build")&&!r&&(q.buildMode||e?Ra(Di[q.sel]):q.buildMode=!0),Di.forEach((c,u)=>{Vt.consume("b"+(u+1))&&!r&&(q.sel=u,Ra(c))});const a=(q.buildMode||!!e)&&!r&&!D.carrying;vn.panelOpen=a,Vt.consume("carry")&&!r&&(!D.carrying&&s?q.embers>=tt.stoneCost?(q.embers-=tt.stoneCost,D.carrying=!0,Wn(on.embers,"embers",q.embers,"bump"),Ct.emit(D.x,en.position.y+2.3,D.z,{n:14,color:"#8ff0ff",speed:2,up:2,life:.6,gravity:2}),Lt.stone()):(Lt.deny(),an(`Rullepapir koster ${tt.stoneCost} ✦`)):D.carrying&&s?(D.carrying=!1,q.embers+=tt.stoneCost,Lt.stone(),an("Rullepapiret er lagt tilbake")):!D.carrying&&q.buildMode?q.buildMode=!1:D.carrying?t||an("Bær rullepapiret til et tårn"):an("Rullepapir hentes ved fyret"));const l=D.carrying&&!r&&t&&t.level<Gc&&!t.upg?t:null;l!==D.chargeTower&&(D.chargeTower&&Si(D.chargeTower,0),D.chargeTower=l,D.charge=0),l&&(D.charge+=i/tt.chargeTime,Si(l,Math.min(1,D.charge)),Math.random()<i*20&&Ct.emit(D.x,en.position.y+2.2,D.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),D.charge>=1&&(l.upg={t:0,dur:tt.upgradeTime[l.level-1]},D.carrying=!1,D.chargeTower=null,D.charge=0,Ct.emit(l.x,l.y+1.2,l.z,{n:12,color:"#8ff0ff",speed:2,up:2,life:.6}),Lt.stone(),an(`${l.def.name}: stå stille og rull – pilene går fortere`))),vn.local&&ep(i,{panelOpen:a,spot:o,tower:t,atLighthouse:s,stunned:r,target:l})}function ep(i,{panelOpen:e,spot:t,tower:n,atLighthouse:s,stunned:r,target:o}){XM(e,t,Di[q.sel]),Ei.classList.toggle("hidden",!e),e&&(Ei.querySelectorAll("button").forEach((c,u)=>{c.disabled=q.embers<zs[c.dataset.tower].cost,c.classList.toggle("sel",u===q.sel)}),ni.sel!==q.sel&&xt.device==="pad"&&(ni.sel=q.sel,Ei.querySelectorAll("button i").forEach((c,u)=>c.textContent=u===q.sel?xt.labels().build:"")));const a=xt.labels();Pa-=i;let l="";if(Pa>0)l=Zd;else if(r)l="Moralpanikk! Måka slo deg ut";else if(o)l="Leverer rullepapiret …";else if(D.roll)l=`Rull! Trykk pilene i rekkefølge for å rulle fortere · ${xt.device==="pad"?`${a.carry} / hold stikka = gå`:xt.device==="touch"?"✕ Gå = gå":"Esc / Q = gå"}`;else if(n!=null&&n.upg)l=`${n.def.name}: stå stille eller trykk ${a.build} for å rulle (${Math.ceil(n.upg.dur-n.upg.t)} s)`;else if(D.carrying&&n&&n.level>=Gc)l="Tårnet er på maks nivå";else if(D.carrying)l="Bær rullepapiret til et tårn";else if(s&&!D.carrying)l=`${a.carry} = hent rullepapir (${tt.stoneCost} ✦)`;else if(s&&D.carrying)l=`${a.carry} = legg rullepapiret tilbake`;else if(n&&n.level<Gc)l=`${n.def.name} nv. ${n.level} · hent rullepapir ved fyret for å oppgradere`;else if(e&&!t.ok)l=`Ikke lov her: ${t.why} · ${a.carry} = avbryt`;else if(e){const c=`${zs[Di[q.sel]].name} (${zs[Di[q.sel]].tip})`,u=t.plinth?" (sokkel: +25 % rekkevidde)":"";l=xt.device==="pad"?`${a.sel} = velg tårn · ${a.build} = sett ned ${c}${u}`:xt.device==="touch"?`Trykk på et tårn, eller Bygg = ${c}${u}`:`1 / 2 / 3 eller ${a.build} = sett ned ${c}${u}`}else q.phase==="prep"&&q.wave===0&&(l=`${a.build} = bygg et tårn der du står (sokler gir +25 % rekkevidde)`);Vc(l),UM(i)}const Fs=new bt;{const i=document.createElement("canvas");i.width=64,i.height=256;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,64,0);t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.5,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,256),e.globalCompositeOperation="destination-in";const n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.2,"rgba(0,0,0,0.8)"),n.addColorStop(.65,"rgba(0,0,0,0.3)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,64,256);const s=new wi(i);for(let r=0;r<6;r++){const o=new lt(new li(1,1),new zt({map:s,color:"#ffdcae",transparent:!0,opacity:.05,blending:Ti,depthWrite:!1,depthTest:!1,fog:!1}));o.scale.set(3.5+r%3*2.4,34,1),o.position.set(-22+r*8.5,9,-4+r%2*6),o.rotation.set(-.95,0,.55),o.userData.phase=r*1.3,Fs.add(o)}}Fs.visible=dn.id==="tak";Fs.renderOrder=50;_t.add(Fs);function ay(i){Fs.position.set(On.x,0,On.z),Fs.rotation.y=Ki,Fs.children.forEach(e=>e.material.opacity=.06+.035*Math.sin(i*.35+e.userData.phase))}let Vn=0;const yt=new V,wr=new V,pr=new V,ha=new V,Il=new V,On=new V(D.x,0,D.z);function ly(i){On.x+=(D.x-On.x)*Math.min(1,i*4),On.z+=(D.z-On.z)*Math.min(1,i*4),On.y=en.position.y;const e=ts?1.15:1,t=xt.zoom*e,n=$t.aspect<1.2?1.25:1;Ki+=xt.look;const s=6.6*t*n;$t.position.set(On.x+Math.sin(Ki)*s,On.y+12.5*t*n,On.z+Math.cos(Ki)*s),Vn=Math.max(0,Vn-i),Vn>0&&($t.position.x+=(Math.random()-.5)*Vn*2,$t.position.y+=(Math.random()-.5)*Vn),$t.lookAt(On.x-Math.sin(Ki),On.y+.5,On.z-Math.cos(Ki)),$t.updateMatrixWorld();let r=0,o=0,a=0;const l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([f,_])=>{const b=yt.set(f,_,.5).unproject($t),x=b.sub($t.position).normalize(),C=x.y<-.05?(On.y-$t.position.y)/x.y:80;return[$t.position.x+x.x*Math.min(C,80),$t.position.z+x.z*Math.min(C,80)]});for(const[f,_]of l)r+=f/4,o+=_/4;for(const[f,_]of l)a=Math.max(a,Math.hypot(f-r,_-o));const c=Mt.clamp(Math.ceil((a+4)/4)*4,16,80);yn.shadow.camera.right!==c&&(Object.assign(yn.shadow.camera,{left:-c,right:c,top:c,bottom:-c}),yn.shadow.camera.updateProjectionMatrix());const u=2*c/yn.shadow.mapSize.x;pr.set(ii.sunDir[0],ii.sunDir[1],ii.sunDir[2]).normalize(),ha.set(0,1,0).cross(pr).normalize(),Il.copy(pr).cross(ha).normalize(),yt.set(r,On.y,o);const h=Math.round(yt.dot(ha)/u)*u,d=Math.round(yt.dot(Il)/u)*u,p=yt.dot(pr);wr.copy(ha).multiplyScalar(h).addScaledVector(Il,d).addScaledVector(pr,p),yn.target.position.copy(wr),yn.position.copy(wr).addScaledVector(pr,40),yn.shadow.camera.far=40+c+20,ay(q.time),GM(),yt.set(D.x,en.position.y+.9,D.z);const g=-yt.clone().applyMatrix4($t.matrixWorldInverse).z;yt.project($t);const M=innerWidth*zn.getPixelRatio(),m=innerHeight*zn.getPixelRatio();xs.uKeep.value.set((yt.x*.5+.5)*M,(yt.y*.5+.5)*m,g),xs.uRad.value=m*.3,Ve.cullFade($t,m),kM(),FM(q.paused?0:i)}const Ul=dn.eruption,Er=Ve.extras.bridges??[];let to=0,In=null;function cy(i){if(!(!Ul||!Er.length||q.phase!=="wave")){if(to+=i,In&&to>=Ul.closed)In.setClosed(!1),In=null,Cn.setBlock(()=>!1);else if(!In&&to>=Ul.every){to=0;const e=Er[Math.random()*Er.length|0];e.setClosed(!0),In=e,Cn.setBlock((t,n)=>(t-e.x)**2+(n-e.z)**2<2.8*2.8),Vn=Math.max(Vn,.35),Lt.boom(),an("🌋 Utbrudd! En bro er stengt av lava i 10 s")}}}function uy(){In&&(In.setClosed(!1),Cn.setBlock(()=>!1)),In=null,to=0}function hy(i){if(Be.guest){by(i);return}if(cy(i),q.phase==="prep")q.timer-=i,on.timer.textContent=`Neste bølge om ${Math.ceil(Math.max(0,q.timer))} s`,q.timer<=0&&(on.timer.textContent="",Lu());else if(q.phase==="wave"){for(q.waveClock+=i;q.spawnQueue.length&&q.spawnQueue[0].t<=q.waveClock;){const e=q.spawnQueue.shift();Va(e.type,e.path)}if(on.timer.textContent=`${fn.length+q.spawnQueue.length} monstre igjen`,!q.spawnQueue.length&&!fn.length){if(on.timer.textContent="",q.wave>=Eu.length){Uu(!0);return}const e=tt.waveBonus+q.wave*tt.waveBonusPer+Math.floor(Math.min(q.embers,300)*tt.interest);q.embers+=e,Wn(on.embers,"embers",q.embers,"bump"),an(`Bølge ${q.wave} slått! +${e} ✦`);for(const t of kt)t.K.cheer=1.4;Pu(tt.prepTime),tn==null||tn.setIntensity(0)}}}function Uu(i){q.phase=i?"won":"lost",i||xt.rumble(500,.9),ct("touch").classList.add("hidden"),ct("btn-pause").classList.add("hidden"),Ei.classList.add("hidden");let e="";if(tn==null||tn.setIntensity(0),i){Lt.win();const n=xo();y_(Sn),xo()>n&&(e=`<p class="lead">🔓 Ny verden låst opp: <b>${Ys[Sn+1].name}</b>!</p>`)}const t=ct("overlay");if(t.querySelector(".card").innerHTML=i?`<h1>Gløden lever!</h1><p class="lead">Ti bølger med forbud, komitéer og moralpanikk er chillet ned, og ${q.lights} av 20 glødepunkter brenner fortsatt. Øya ånder ut.</p>${e}<div class="menu-row"><button id="btn-again">↺ Spill kartet igjen</button>${e?'<button id="btn-nextworld" class="alt">Neste verden ▶</button>':""}<button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`:`<h1>Gløden sluknet</h1><p class="lead">Byråkratiet vant denne gangen, i bølge ${q.wave}. Rull opp og prøv på nytt.</p><div class="menu-row"><button id="btn-again">↺ Start kartet på nytt</button><button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`,Be.guest){t.querySelector(".menu-row").innerHTML='<p class="lead">Venter på at verten starter på nytt …</p><button id="btn-again" class="alt">Forlat</button><button id="btn-worlds2" class="alt hidden"></button>',ct("btn-again").addEventListener("click",()=>{location.href=`${location.pathname}?world=${Sn}`}),ct("btn-worlds2").addEventListener("click",()=>{}),t.classList.remove("hidden");return}t.classList.remove("hidden"),ct("btn-again").addEventListener("click",()=>Sr()),ct("btn-worlds2").addEventListener("click",()=>{location.href=`${location.pathname}?world=${Sn}`}),e&&ct("btn-nextworld").addEventListener("click",()=>{location.href=`${location.pathname}?world=${Sn+1}`})}let tn=null;const Sa=(()=>{try{return JSON.parse(localStorage.getItem("glod-music")||"{}")}catch{return{}}})(),uo=["rolig","dnb","av"],tp={rolig:"Rolig",dnb:"DnB",av:"Av"};let yi=uo.includes(Sa.mode)?Sa.mode:Sa.muted?"av":"rolig";cn.get("musikk")&&uo.includes(cn.get("musikk"))&&(yi=cn.get("musikk"));function np(){try{localStorage.setItem("glod-music",JSON.stringify({vol:tn.volume,mode:yi}))}catch{}}function fy(i){const e={};let t=null,n=0,s=Sa.vol??.7;return{use:o=>{const a=o==="dnb"?"dnb":"rolig";t&&t!==e[a]&&t.stop(),e[a]??(e[a]=a==="dnb"?mM(i.ctx,i.noiseBuf,dn.id):gM(i.ctx,i.noiseBuf,dn.id)),t=e[a],t.setVolume(s),t.setIntensity(n),t.setMuted(o==="av"),o==="av"?t.stop():t.start()},setIntensity(o){n=o,t==null||t.setIntensity(o)},setVolume(o){s=o,t==null||t.setVolume(o)},get volume(){return s},get muted(){return yi==="av"},get intensity(){return n},get mode(){return yi},get section(){return t==null?void 0:t.section},rms(){return t?t.rms():0},tap(o){for(const a of Object.values(e))a.tap(o)}}}function dy(){const i=Nd();tn||!i||cn.has("nomusic")||(tn=fy(i),tn.use(yi),ct("music-vol").value=Math.round(tn.volume*100),ct("btn-mute").textContent=`M: ${tp[yi]}`,window.__music=tn,window.__audioCtx=i.ctx)}function ip(){tn&&(yi=uo[(uo.indexOf(yi)+1)%uo.length],tn.use(yi),ct("btn-mute").textContent=`M: ${tp[yi]}`,np(),an({rolig:"🎶 Musikk: rolig",dnb:"🎶 Musikk: drum & bass",av:"🎶 Musikk av"}[yi]))}for(const i of["pointerdown","keydown","touchend"])addEventListener(i,()=>{const e=Nd();e&&e.ctx.state!=="running"&&e.ctx.resume()},{passive:!0});ct("music-vol").addEventListener("input",i=>{tn&&(tn.setVolume(i.target.value/100),np())});ct("btn-mute").addEventListener("click",i=>{i.preventDefault(),ip()});function zr(i=!1){q.phase==="title"&&(dM(),dy(),tn==null||tn.setIntensity(0),i&&ct("touch").classList.toggle("hidden",xt.device!=="touch"),ct("overlay").classList.add("hidden"),ts&&xt.device!=="pad"&&(xt.device="touch"),ni.device=null,ct("btn-pause").classList.remove("hidden"),Ve.lighthouse.setLights(q.lights),Wn(on.embers,"embers",q.embers),Pu(tt.firstPrep),kd&&Ay())}ct("btn-start").addEventListener("click",zr);const zu=["build","carry","next","selPrev","selNext","b1","b2","b3","b4","b5","b6","b7","rU","rR","rD","rL","rollExit"];function py(){const i=new Set;return{move:{x:0,z:0},yaw:0,pressed:i,rollMode:!1,device:"kb",padKind:"xbox",clicks:[],consume:e=>i.delete(e),clear:()=>i.clear(),rumble:()=>{},labels:()=>xt.labels()}}function sp(i,e){if(e===Eo(0))return;const t=i.userData.body.children[0];t.material=t.material.clone(),t.material.color.set(e)}function Nu(i,e){if(kt.some(r=>r.slot===i))return null;const t=Br(Ad(),"figure");sp(t,Eo(i));const n=Wd(i);t.position.set(n.x,Ve.heightAt(n.x,n.z),n.z),_t.add(t);const s={slot:i,name:e,K:n,mesh:t,input:py(),sel:0,buildMode:!1,local:!1,hints:[]};return kt.push(s),s}function ku(i){var n;const e=kt.findIndex(s=>s.slot===i&&!s.local);if(e<0)return;const t=kt[e];t.K.chargeTower&&Si(t.K.chargeTower,0),(n=t.tag)==null||n.remove(),_s.emit(t.K.x,t.mesh.position.y+.8,t.K.z,{n:10,color:"#eef6e8",speed:1.4,up:1.2,life:.7,gravity:-.5}),_t.remove(t.mesh),kt.splice(e,1)}function my(i,e){if(Be.guest){if(i.t==="s")Be.snap=i;else if(i.t==="h")for(const s of i.h)an(s);else i.t==="restart"&&Sr();return}if(!Be.host||i.t!=="in")return;const t=kt.find(s=>s.slot===e);if(!t)return;const n=t.input;if(n.move.x=Math.max(-1,Math.min(1,+i.x||0)),n.move.z=Math.max(-1,Math.min(1,+i.z||0)),Number.isFinite(i.yaw)&&(n.yaw=i.yaw),Array.isArray(i.a))for(const s of i.a)zu.includes(s)&&n.pressed.add(s);Array.isArray(i.g)&&i.g.every(Number.isFinite)&&Ui(t,()=>Jd(i.g[0],i.g[1]))}const rp=Object.keys(wo),Zt=i=>Math.round(i*100)/100;function gy(){return{t:"s",ph:q.phase,w:q.wave,tm:Zt(q.timer),em:q.embers,li:q.lights,left:fn.length+q.spawnQueue.length,pz:q.paused?1:0,er:In?Er.indexOf(In):-1,P:kt.map(i=>{var s,r;const e=i.K,t=e.roll,n=i===vn;return[i.slot,Zt(e.x),Zt(e.z),Zt(e.face),Zt(e.vx),Zt(e.vz),e.carrying?1:0,Zt(Math.max(0,e.stun)),Zt(Math.max(0,e.faint)),Math.round(e.chill),n?q.sel:i.sel,(n?q.buildMode:i.buildMode)?1:0,Zt(e.rollP??-1),((s=e.rollTower)==null?void 0:s.id)||0,((r=e.chargeTower)==null?void 0:r.id)||0,Zt(e.charge||0),t?[t.tower.id,t.seq.join(","),t.i,t.done,t.shakes||0]:0,i.name||""]}),M:fn.filter(i=>i.alive).map(i=>[i.id,rp.indexOf(i.type),Zt(i.x),Zt(i.y),Zt(i.z),Math.round(i.hp*10)/10,Math.round(i.maxHp*10)/10,i.trap>0?Zt(i.trap):0,i.slow>0?1:0]),T:sn.map(i=>[i.id,Di.indexOf(i.type),Zt(i.x),Zt(i.y),Zt(i.z),i.level,i.plinth?Ve.plinths.indexOf(i.plinth):-1,i.upg?[Zt(i.upg.t),i.upg.dur]:0,i.blind>0?Zt(i.blind):0]),E:qn.map(i=>[i.id,Zt(i.x),Zt(i.y),Zt(i.z),i.value,Zt(i.life)]),B:Gn.map(i=>[i.id,Zt(i.x),Zt(i.z),Zt(i.life)]),ev:Be.ev.splice(0)}}function vy(i){if(!Be.host)return;if(Be.ev.length>200&&Be.ev.splice(0,Be.ev.length-200),!Be.net.guestCount()){Be.ev.length=0;return}if(Be.snapT-=i,Be.snapT>0)return;Be.snapT=.05;const e=gy();Be.lastSnapBytes=JSON.stringify(e).length,Be.net.broadcast(e);for(const t of kt)!t.local&&t.hints.length&&Be.net.sendTo(t.slot,{t:"h",h:t.hints.splice(0)})}const Ri=(i,e)=>i.find(t=>t.id===e);function xy(i){for(const a of i.ev||[])if(a[0]==="sp")Be.spawnPoints=a[1],q.spawnPoints=a[1],Wc();else if(a[0]==="c"){const l=Ri(fn,a[1]);l!=null&&l.alive&&$d(l)}else if(a[0]==="l"){const l=Ri(fn,a[1]);l!=null&&l.alive&&Xc(l,!0)}else if(a[0]==="u"){const l=Ri(sn,a[1]),c=kt.find(u=>u.slot===a[2]);l&&c&&Ui(c,()=>Kd(l))}else if(a[0]==="st"){const l=kt.find(c=>c.slot===a[1]);l&&(Ct.emit(l.K.x,l.mesh.position.y+1.5,l.K.z,{n:16,color:"#ffffff",speed:3,up:2,life:.5}),l.local&&(Lt.stun(),Vn=.2))}const e=q.phase;if(q.embers=i.em,q.timer=i.tm,q.paused=!!i.pz,Be.left=i.left,i.li!==q.lights&&(q.lights=i.li,Ve.lighthouse.setLights(q.lights),Wn(on.lights,"lights",q.lights,"bad")),e==="prep"&&i.ph==="wave")Lu(),q.spawnQueue=[];else if(e==="wave"&&i.ph==="prep"){on.timer.textContent="",an(`Bølge ${q.wave} slått!`);for(const a of kt)a.K.cheer=1.4;Pu(i.tm),tn==null||tn.setIntensity(0)}else(i.ph==="won"||i.ph==="lost")&&e!==i.ph&&Uu(i.ph==="won");if(q.wave=i.w,i.er!==(In?Er.indexOf(In):-1)){In&&(In.setClosed(!1),In=null,Cn.setBlock(()=>!1));const a=Er[i.er];a&&(a.setClosed(!0),In=a,Cn.setBlock((l,c)=>(l-a.x)**2+(c-a.z)**2<2.8*2.8),Vn=Math.max(Vn,.35),Lt.boom(),an("🌋 Utbrudd! En bro er stengt av lava i 10 s"))}for(const a of i.T){let l=Ri(sn,a[0]);if(!l){const c=a[6]>=0?Ve.plinths[a[6]]:null;l=jd(Di[a[1]],{x:a[2],y:a[3],z:a[4],plinth:c},a[0])}l.level!==a[5]&&(l.level=a[5],wu(l,l.level),Si(l,0),Ct.emit(l.x,l.y+1.2,l.z,{n:30,color:"#8ff0ff",speed:4,up:4,life:.9,gravity:5}),Lt.upgrade()),a[7]?(l.upg||(l.upg={t:0,dur:a[7][1]}),a[7][0]<l.upg.t-.5&&l.upg.t>0&&(l.upgReset=!0),l.upg.t=a[7][0],l.upg.dur=a[7][1]):l.upg&&(l.upg=null,Si(l,0)),l.blind=a[8]}const t=new Set(i.T.map(a=>a[0]));for(let a=sn.length-1;a>=0;a--){const l=sn[a];if(t.has(l.id))continue;_t.remove(l.mesh),sn.splice(a,1),l.plinth&&(l.plinth.tower=null);const c=Ve.colliders.findIndex(u=>u.tower===l);c>=0&&Ve.colliders.splice(c,1)}const n=new Set;for(const a of i.M){n.add(a[0]);let l=Ri(fn,a[0]);l||(l=Va(rp[a[1]],0),l.id=a[0],l.x=a[2],l.y=a[3],l.z=a[4],l.mesh.position.set(l.x,l.y,l.z)),l.sx=a[2],l.sy=a[3],l.sz=a[4],a[5]<l.hp&&(l.mesh.userData.hpBar.visible=!0),l.hp=a[5],l.maxHp=a[6],l.trap=a[7],a[8]&&(l.slow=Math.max(l.slow,.1))}for(const a of fn)a.alive&&!n.has(a.id)&&(a.alive=!1,_t.remove(a.mesh));const s=new Set;for(const a of i.E){s.add(a[0]);let l=Ri(qn,a[0]);if(!l){const c=Cd();c.scale.setScalar(.8+Math.min(a[4],6)*.08),l={id:a[0],mesh:c,x:a[1],y:a[2],z:a[3],value:a[4],phase:Math.random()*6},_t.add(c),qn.push(l)}l.sx=a[1],l.sy=a[2],l.sz=a[3],l.life=a[5]}for(let a=qn.length-1;a>=0;a--){const l=qn[a];s.has(l.id)||(l.life>.3&&(Ct.emit(l.x,l.y+.3,l.z,{n:8,color:"#ffe08a",speed:2,up:2.5,life:.4}),Math.hypot(D.x-l.x,D.z-l.z)<2&&(Lt.pickup(),Wn(on.embers,"embers",q.embers,"bump"))),_t.remove(l.mesh),qn.splice(a,1))}const r=new Set;for(const a of i.B){r.add(a[0]);const l=Ri(Gn,a[0])||(Iu(a[1],a[2],a[0]),Gn[Gn.length-1]);l.life=a[3]}for(let a=Gn.length-1;a>=0;a--)r.has(Gn[a].id)||(_t.remove(Gn[a].mesh),Gn.splice(a,1));const o=new Set;for(const a of i.P){const l=a[0];o.add(l);let c=kt.find(p=>p.slot===l);c||(c=Nu(l,a[17]),c.K.x=a[1],c.K.z=a[2]);const u=c.K;if(c.local){const p=Math.hypot(a[1]-u.x,a[2]-u.z);p>2.5?(u.x=a[1],u.z=a[2]):p>.9&&(u.x+=(a[1]-u.x)*.25,u.z+=(a[2]-u.z)*.25),a[9]<u.chill-2&&(u.flinch=.55,Co("😣"),xt.rumble(120,.3)),q.sel=a[10],q.buildMode=!!a[11]}else u.tx=a[1],u.tz=a[2],u.tface=a[3],u.vx=a[4],u.vz=a[5],c.sel=a[10],c.buildMode=!!a[11];u.carrying=!!a[6],u.stun=a[7],u.faint=a[8],u.chill=a[9],u.rollP=a[12],u.rollTower=Ri(sn,a[13])||null;const h=Ri(sn,a[14])||null;u.chargeTower&&u.chargeTower!==h&&Si(u.chargeTower,0),u.chargeTower=h,u.charge=a[15],h&&Si(h,Math.min(1,u.charge));const d=a[16];if(d){const p=Ri(sn,d[0]),g=u.roll&&u.roll.tower===p?u.roll:null;u.roll=p?{tower:p,seq:d[1].split(","),i:d[2],done:d[3],shakes:d[4],shake:!!(g!=null&&g.shake)}:null,c.local&&g&&u.roll&&(d[4]>(g.shakes||0)?(u.roll.shake=!0,Lt.bonk(),xt.rumble(150,.4)):d[3]>g.done?(Lt.stone(),Ct.emit(u.x,c.mesh.position.y+2.2,u.z,{n:10,color:"#8ff0ff",speed:1.6,up:1.6,life:.6,gravity:2})):d[2]>g.i&&Lt.tick(d[2]))}else u.roll=null;c.local&&(xt.rollMode=!!u.roll)}for(const a of kt.slice())!a.local&&!o.has(a.slot)&&(ku(a.slot),Aa(`${a.name||"En vokter"} forlot spillet`))}function _y(){for(const i of kt){if(i.local)continue;i.tag||(i.tag=document.createElement("div"),i.tag.className="ptag",i.tag.textContent=i.name||`Vokter ${i.slot+1}`,i.tag.style.borderColor=Eo(i.slot),document.body.appendChild(i.tag)),yt.set(i.K.x,i.mesh.position.y+3,i.K.z).project($t);const e=yt.z<1&&Math.abs(yt.x)<1.05&&Math.abs(yt.y)<1.05&&q.phase!=="title";i.tag.style.display=e?"block":"none",e&&(i.tag.style.left=`${(yt.x*.5+.5)*innerWidth}px`,i.tag.style.top=`${(-yt.y*.5+.5)*innerHeight}px`)}}function My(i){if(D.tx===void 0)return;const e=1-Math.exp(-i*12);D.x+=(D.tx-D.x)*e,D.z+=(D.tz-D.z)*e,Math.hypot(D.tx-D.x,D.tz-D.z)>4&&(D.x=D.tx,D.z=D.tz)}function yy(i){const e=1-Math.exp(-i*6);for(const t of fn){if(!t.alive||t.sx===void 0)continue;Math.hypot(t.sx-t.x,t.sz-t.z)>6?(t.x=t.sx,t.z=t.sz):(t.x+=(t.sx-t.x)*e,t.z+=(t.sz-t.z)*e),t.def.flying&&(t.y+=(t.sy-t.y)*e)}}function by(i){q.phase==="prep"?(q.timer-=i,on.timer.textContent=`Neste bølge om ${Math.ceil(Math.max(0,q.timer))} s`):q.phase==="wave"&&(on.timer.textContent=`${Be.left??fn.length} monstre igjen`)}function Sy(i){const e=1-Math.exp(-i*10);for(const t of qn){if(t.sx===void 0)continue;t.x+=(t.sx-t.x)*e,t.y+=(t.sy-t.y)*e,t.z+=(t.sz-t.z)*e,t.phase+=i,t.life-=i;const n=Math.sin(t.phase*3)*.12;t.mesh.position.set(t.x,t.y+n,t.z),t.mesh.rotation.y+=i*3;const s=t.life<5;t.mesh.scale.setScalar((.8+Math.min(t.value,6)*.08)*(s?.55+.45*Math.max(0,t.life/5):1)),t.mesh.visible=!s||Math.sin(t.life*(t.life<1.5?30:16))>-.4,Math.random()<i*2.5&&Ct.emit(t.x,t.y+.2,t.z,{n:1,color:"#ffb347",speed:.3,up:1.2,life:.6,gravity:-.5})}Gn.forEach((t,n)=>{t.life-=i,t.mesh.rotation.y+=i*1.5,t.mesh.position.y=Ve.heightAt(t.x,t.z)+.5+Math.sin(q.time*3+n)*.12,t.mesh.visible=t.life>4||Math.sin(t.life*12)>0})}function wy(i){for(const c of zu)Vt.consume(c);const e=Hs(Ve.plinths,D.x,D.z,tt.reach,c=>!c.tower),t=Hs(sn,D.x,D.z,tt.reach),n=Ve.lighthouse.pos,s=Math.hypot(n.x-D.x,n.z-D.z)<tt.lighthouseReach,r=D.stun>0,o=Wa(),a=(q.buildMode||!!e)&&!r&&!D.carrying,l=D.chargeTower;l&&Math.random()<i*20&&Ct.emit(D.x,en.position.y+2.2,D.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),ep(i,{panelOpen:a,spot:o,tower:t,atLighthouse:s,stunned:r,target:l})}function Ey(i){if(!Be.guest||q.phase==="title")return;const e=zu.filter(r=>xt.pressed.has(r));Be.sendT-=i;const t=xt.move,n=t.x!==Be.lastX||t.z!==Be.lastZ;if(!e.length&&!Be.goal&&!(n&&Be.sendT<=0)&&Be.sendT>-.25)return;Be.sendT=1/30,Be.lastX=t.x,Be.lastZ=t.z;const s={t:"in",x:+t.x.toFixed(3),z:+t.z.toFixed(3),yaw:+Ki.toFixed(3)};e.length&&(s.a=e),Be.goal&&(s.g=Be.goal.map(r=>+r.toFixed(2)),Be.goal=null),Be.net.send(s)}const Ty=EM({worldIndex:Sn,worldName:dn.name,timeOfDay:gs,params:cn,onHostStart:i=>{Object.assign(Be,{host:!0,net:i}),kt[0].name=i.hostName;for(const e of i.players)e.slot>0&&Nu(e.slot,e.name);zr()},onGuestStart:i=>{Object.assign(Be,{guest:!0,net:i}),kt[0].slot=i.slot,sp(en,Eo(i.slot)),zr()},onMessage:my,onLeave:(i,e)=>{ku(i),Aa(`${e} forlot spillet`)},onHostGone:()=>{Aa("Verten forlot spillet"),setTimeout(()=>{location.href=`${location.pathname}?world=${Sn}`},2500)}});{const i=ct("worlds"),e=xo();if(Ys.forEach((t,n)=>{const s=document.createElement("button");s.className="world"+(n===Sn?" sel":"")+(n>=e?" locked":""),s.innerHTML=`<b>${n>=e?"🔒 ":""}${t.name}</b><small>${n>=e?"Vinn forrige verden for å låse opp":t.blurb}</small>`,s.disabled=n>=e,s.addEventListener("click",()=>{n!==Sn&&(location.href=`${location.pathname}?world=${n}`)}),i.appendChild(s)}),ct("btn-start").textContent=`Tenn gløden på ${dn.name}`,dn.skyDusk){const t=document.createElement("button");t.id="btn-tod",t.className="tod",t.textContent=gs==="skumring"?"🌅 Skumring (bytt til dag)":"☀️ Dag (bytt til skumring)",t.addEventListener("click",()=>{try{localStorage.setItem("glod-tid",gs==="skumring"?"dag":"skumring")}catch{}location.href=`${location.pathname}?world=${Sn}&tid=${gs==="skumring"?"dag":"skumring"}`}),ct("worlds").after(t)}}ct("btn-quality").addEventListener("click",()=>Vd(Ai==="high"?"low":"high"));addEventListener("keydown",i=>{i.code==="KeyG"&&!i.repeat&&Vd(Ai==="high"?"low":"high")});ct("btn-quality").textContent=Ai==="high"?"Høy":"Lav";ct("btn-pause").classList.add("hidden");function Ay(){q.embers=999;const i=Ve.lighthouse.pos,e=Ve.plinths.slice().sort((t,n)=>Math.hypot(t.x-i.x,t.z-i.z-4)-Math.hypot(n.x-i.x,n.z-i.z-4));["ring","chips","speaker","ring","chips","ring"].forEach((t,n)=>{const s=e[n];D.x=s.x+1.9,D.z=s.z,Ra(t),n<3&&(sn[sn.length-1].level=n+1,wu(sn[sn.length-1],n+1))}),D.x=i.x+1,D.z=i.z+6,D.carrying=!0,q.wave=Number(cn.get("demo"))||4,q.wave-=1,Lu(),q.waveClock=6,q.embers=142}const Cy=new gd;let zl=0,fa=0,da=0;window.__fpsSamples=[];window.__game={get net(){return Ty.net},get snapBytes(){return Be.lastSnapBytes},players:kt,addRemotePlayer:(i,e)=>Nu(i,e),removeRemotePlayer:i=>ku(i),S:q,monsters:fn,towers:sn,embers:qn,world:Ve,K:D,renderer:zn,camera:$t,input:xt,buildSpot:()=>Wa(),build:i=>Ra(i),renderOnce:()=>To.render(0),outlineCats:xd,spawnMonster:Va,projectiles:gi,damage:Us,dropBag:(i,e)=>Iu(i,e),ghost:Zi,get camYaw(){return Ki}};window.__errors=[];addEventListener("error",i=>window.__errors.push(String(i.message)));addEventListener("unhandledrejection",i=>window.__errors.push(String(i.reason)));function op(){requestAnimationFrame(op);const i=Cy.getDelta(),e=Math.min(i,.05);if(q.paused||(q.time+=e),xt.update(e),Ey(i),Be.snap){const t=Be.snap;Be.snap=null,xy(t)}q.paused||(Ve.update(q.time),DM.update(q.time));for(let t=0;t<RM&&!q.paused&&(q.phase==="prep"||q.phase==="wave");t++)t>0&&(q.time+=e,Af(e)),hy(e),jM(e),Be.guest&&yy(e),YM(e),$M(e),QM(e),VM(e);if(q.paused||Af(e),ry(e),vy(i),kt.length>1&&_y(),!q.paused){if(Ct.update(e),Math.random()<e*(4+10*(q.lights/Ir))){const t=Ve.lighthouse.tip;_s.emit(t.x,t.y,t.z,{n:1,color:"#e8e2dc",speed:.5,up:1.6,life:3.2,gravity:-.15})}_s.update(e)}if(ly(e),zn.info.reset(),To.render(e),zl++,fa+=i,fa>=.5){const t=zl/fa;window.__fpsSamples.push(t),window.__fpsSamples.length>240&&window.__fpsSamples.shift(),Ru.textContent=`${t.toFixed(0)} fps · ${zn.info.render.calls} dc`,da=t<(ts?28:45)?da+1:0,da>=6&&fs>1&&(fs=Math.max(1,fs-.25),zn.setPixelRatio(fs),Ao(),da=0,window.__dprDrops=(window.__dprDrops||0)+1,cn.has("debug")&&console.info(`[fps] ${t.toFixed(0)} fps over tid → dpr senket til ${fs}`)),zl=0,fa=0}}op();kd&&cn.has("autostart")&&zr();function La(i,e){let t=i-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}
