(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wc="170",Sd=0,ru=1,wd=2,Wh=1,Xh=2,Ui=3,is=0,Pn=1,Je=2,pn=0,es=1,gi=2,au=3,ou=4,qh=5,li=100,Ed=101,Td=102,Ad=103,Cd=104,zr=200,Rd=201,Pd=202,Dd=203,xl=204,_l=205,Ml=206,Ld=207,yl=208,Id=209,Ud=210,Nd=211,zd=212,Fd=213,Od=214,bl=0,Sl=1,wl=2,fr=3,El=4,Tl=5,Al=6,Cl=7,Ec=0,kd=1,Bd=2,ns=0,Yh=1,$h=2,jh=3,Tc=4,Gd=5,Zh=6,Kh=7,Jh=300,dr=301,pr=302,Rl=303,Pl=304,ho=306,bi=1e3,gs=1001,Dl=1002,vn=1003,Vd=1004,da=1005,yi=1006,Co=1007,vs=1008,Si=1009,Qh=1010,tf=1011,Zr=1012,Ac=1013,Es=1014,di=1015,Kn=1016,Cc=1017,Rc=1018,Ts=1020,ef=35902,nf=1021,sf=1022,Zn=1023,rf=1024,af=1025,sr=1026,As=1027,fo=1028,Pc=1029,of=1030,Dc=1031,Lc=1033,ja=33776,Za=33777,Ka=33778,Ja=33779,Ll=35840,Il=35841,Ul=35842,Nl=35843,zl=36196,Fl=37492,Ol=37496,kl=37808,Bl=37809,Gl=37810,Vl=37811,Hl=37812,Wl=37813,Xl=37814,ql=37815,Yl=37816,$l=37817,jl=37818,Zl=37819,Kl=37820,Jl=37821,Qa=36492,Ql=36494,tc=36495,lf=36283,ec=36284,nc=36285,ic=36286,Hd=3200,Wd=3201,Ic=0,Xd=1,Ki="",mn="srgb",yr="srgb-linear",po="linear",Oe="srgb",Fs=7680,lu=519,qd=512,Yd=513,$d=514,cf=515,jd=516,Zd=517,Kd=518,Jd=519,cu=35044,uu=35048,hu="300 es",Oi=2e3,ro=2001;class br{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fu=1234567;const Br=Math.PI/180,Kr=180/Math.PI;function Ds(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function fn(i,t,e){return Math.max(t,Math.min(e,i))}function Uc(i,t){return(i%t+t)%t}function Qd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function tp(i,t,e){return i!==t?(e-i)/(t-i):0}function Gr(i,t,e){return(1-e)*i+e*t}function ep(i,t,e,n){return Gr(i,t,1-Math.exp(-e*n))}function np(i,t=1){return t-Math.abs(Uc(i,t*2)-t)}function ip(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function sp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function rp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ap(i,t){return i+Math.random()*(t-i)}function op(i){return i*(.5-Math.random())}function lp(i){i!==void 0&&(fu=i);let t=fu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cp(i){return i*Br}function up(i){return i*Kr}function hp(i){return(i&i-1)===0&&i!==0}function fp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function dp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pp(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function er(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function En(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const xe={DEG2RAD:Br,RAD2DEG:Kr,generateUUID:Ds,clamp:fn,euclideanModulo:Uc,mapLinear:Qd,inverseLerp:tp,lerp:Gr,damp:ep,pingpong:np,smoothstep:ip,smootherstep:sp,randInt:rp,randFloat:ap,randFloatSpread:op,seededRandom:lp,degToRad:cp,radToDeg:up,isPowerOfTwo:hp,ceilPowerOfTwo:fp,floorPowerOfTwo:dp,setQuaternionFromProperEuler:pp,normalize:En,denormalize:er};class At{constructor(t=0,e=0){At.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Me{constructor(t,e,n,s,r,a,o,l,c){Me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],y=s[1],b=s[4],x=s[7],R=s[2],T=s[5],E=s[8];return r[0]=a*_+o*y+l*R,r[3]=a*m+o*b+l*T,r[6]=a*d+o*x+l*E,r[1]=c*_+h*y+u*R,r[4]=c*m+h*b+u*T,r[7]=c*d+h*x+u*E,r[2]=f*_+p*y+g*R,r[5]=f*m+p*b+g*T,r[8]=f*d+p*x+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ro.makeScale(t,e)),this}rotate(t){return this.premultiply(Ro.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ro.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ro=new Me;function uf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mp(){const i=ao("canvas");return i.style.display="block",i}const du={};function Fr(i){i in du||(du[i]=!0,console.warn(i))}function gp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function vp(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xp(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const De={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Oe&&(i.r=Bi(i.r),i.g=Bi(i.g),i.b=Bi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Oe&&(i.r=rr(i.r),i.g=rr(i.g),i.b=rr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ki?po:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const pu=[.64,.33,.3,.6,.15,.06],mu=[.2126,.7152,.0722],gu=[.3127,.329],vu=new Me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xu=new Me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);De.define({[yr]:{primaries:pu,whitePoint:gu,transfer:po,toXYZ:vu,fromXYZ:xu,luminanceCoefficients:mu,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:pu,whitePoint:gu,transfer:Oe,toXYZ:vu,fromXYZ:xu,luminanceCoefficients:mu,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}});let Os;class _p{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Os===void 0&&(Os=ao("canvas")),Os.width=t.width,Os.height=t.height;const n=Os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ao("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bi(e[n]/255)*255):e[n]=Bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Mp=0;class hf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Ds(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Po(s[a].image)):r.push(Po(s[a]))}else r=Po(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_p.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yp=0;class Sn extends br{constructor(t=Sn.DEFAULT_IMAGE,e=Sn.DEFAULT_MAPPING,n=gs,s=gs,r=yi,a=vs,o=Zn,l=Si,c=Sn.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Ds(),this.name="",this.source=new hf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bi:t.x=t.x-Math.floor(t.x);break;case gs:t.x=t.x<0?0:1;break;case Dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bi:t.y=t.y-Math.floor(t.y);break;case gs:t.y=t.y<0?0:1;break;case Dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Jh;Sn.DEFAULT_ANISOTROPY=1;class Ge{constructor(t=0,e=0,n=0,s=1){Ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,x=(p+1)/2,R=(d+1)/2,T=(h+f)/4,E=(u+_)/4,A=(g+m)/4;return b>x&&b>R?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=E/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=A/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=E/r,s=A/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bp extends br{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new hf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends bp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ff extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sp extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class la{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==p||h!==g){let m=1-o;const d=l*f+c*p+h*g+u*_,y=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const R=Math.sqrt(b),T=Math.atan2(R,d*y);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}const x=o*y;if(l=l*m+f*x,c=c*m+p*x,h=h*m+g*x,u=u*m+_*x,m===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-o*p,t[e+2]=c*g+h*p+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,n=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_u.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_u.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Do.copy(this).projectOnVector(t),this.sub(Do)}reflect(t){return this.sub(Do.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new G,_u=new la;class Ls{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,si):si.fromBufferAttribute(r,a),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(t.matrixWorld),this.union(pa)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cr),ma.subVectors(this.max,Cr),ks.subVectors(t.a,Cr),Bs.subVectors(t.b,Cr),Gs.subVectors(t.c,Cr),Hi.subVectors(Bs,ks),Wi.subVectors(Gs,Bs),rs.subVectors(ks,Gs);let e=[0,-Hi.z,Hi.y,0,-Wi.z,Wi.y,0,-rs.z,rs.y,Hi.z,0,-Hi.x,Wi.z,0,-Wi.x,rs.z,0,-rs.x,-Hi.y,Hi.x,0,-Wi.y,Wi.x,0,-rs.y,rs.x,0];return!Lo(e,ks,Bs,Gs,ma)||(e=[1,0,0,0,1,0,0,0,1],!Lo(e,ks,Bs,Gs,ma))?!1:(ga.crossVectors(Hi,Wi),e=[ga.x,ga.y,ga.z],Lo(e,ks,Bs,Gs,ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ai=[new G,new G,new G,new G,new G,new G,new G,new G],si=new G,pa=new Ls,ks=new G,Bs=new G,Gs=new G,Hi=new G,Wi=new G,rs=new G,Cr=new G,ma=new G,ga=new G,as=new G;function Lo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){as.fromArray(i,r);const o=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),l=t.dot(as),c=e.dot(as),h=n.dot(as);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const wp=new Ls,Rr=new G,Io=new G;class Sr{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):wp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rr.subVectors(t,this.center);const e=Rr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Rr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rr.copy(t.center).add(Io)),this.expandByPoint(Rr.copy(t.center).sub(Io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new G,Uo=new G,va=new G,Xi=new G,No=new G,xa=new G,zo=new G;class Nc{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Uo.copy(t).add(e).multiplyScalar(.5),va.copy(e).sub(t).normalize(),Xi.copy(this.origin).sub(Uo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(va),o=Xi.dot(this.direction),l=-Xi.dot(va),c=Xi.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Uo).addScaledVector(va,f),p}intersectSphere(t,e){Ci.subVectors(t.center,this.origin);const n=Ci.dot(this.direction),s=Ci.dot(Ci)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,n,s,r){No.subVectors(e,t),xa.subVectors(n,t),zo.crossVectors(No,xa);let a=this.direction.dot(zo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xi.subVectors(this.origin,t);const l=o*this.direction.dot(xa.crossVectors(Xi,xa));if(l<0)return null;const c=o*this.direction.dot(No.cross(Xi));if(c<0||l+c>a)return null;const h=-o*Xi.dot(zo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(t,e,n,s,r,a,o,l,c,h,u,f,p,g,_,m){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,p,g,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Vs.setFromMatrixColumn(t,0).length(),r=1/Vs.setFromMatrixColumn(t,1).length(),a=1/Vs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ep,t,Tp)}lookAt(t,e,n){const s=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),qi.crossVectors(n,Fn),qi.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),qi.crossVectors(n,Fn)),qi.normalize(),_a.crossVectors(Fn,qi),s[0]=qi.x,s[4]=_a.x,s[8]=Fn.x,s[1]=qi.y,s[5]=_a.y,s[9]=Fn.y,s[2]=qi.z,s[6]=_a.z,s[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],y=n[3],b=n[7],x=n[11],R=n[15],T=s[0],E=s[4],A=s[8],M=s[12],v=s[1],S=s[5],I=s[9],N=s[13],P=s[2],U=s[6],B=s[10],H=s[14],V=s[3],$=s[7],Q=s[11],st=s[15];return r[0]=a*T+o*v+l*P+c*V,r[4]=a*E+o*S+l*U+c*$,r[8]=a*A+o*I+l*B+c*Q,r[12]=a*M+o*N+l*H+c*st,r[1]=h*T+u*v+f*P+p*V,r[5]=h*E+u*S+f*U+p*$,r[9]=h*A+u*I+f*B+p*Q,r[13]=h*M+u*N+f*H+p*st,r[2]=g*T+_*v+m*P+d*V,r[6]=g*E+_*S+m*U+d*$,r[10]=g*A+_*I+m*B+d*Q,r[14]=g*M+_*N+m*H+d*st,r[3]=y*T+b*v+x*P+R*V,r[7]=y*E+b*S+x*U+R*$,r[11]=y*A+b*I+x*B+R*Q,r[15]=y*M+b*N+x*H+R*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*p-n*l*p)+_*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],y=u*m*c-_*f*c+_*l*p-o*m*p-u*l*d+o*f*d,b=g*f*c-h*m*c-g*l*p+a*m*p+h*l*d-a*f*d,x=h*_*c-g*u*c+g*o*p-a*_*p-h*o*d+a*u*d,R=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,T=e*y+n*b+s*x+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=y*E,t[1]=(_*f*r-u*m*r-_*s*p+n*m*p+u*s*d-n*f*d)*E,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*d+n*l*d)*E,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*p-n*l*p)*E,t[4]=b*E,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*E,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*d-e*l*d)*E,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*p+e*l*p)*E,t[8]=x*E,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*d-e*u*d)*E,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*d+e*o*d)*E,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*E,t[12]=R*E,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*E,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*E,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,g=r*u,_=a*h,m=a*u,d=o*u,y=l*c,b=l*h,x=l*u,R=n.x,T=n.y,E=n.z;return s[0]=(1-(_+d))*R,s[1]=(p+x)*R,s[2]=(g-b)*R,s[3]=0,s[4]=(p-x)*T,s[5]=(1-(f+d))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+b)*E,s[9]=(m-y)*E,s[10]=(1-(f+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Vs.set(s[0],s[1],s[2]).length();const a=Vs.set(s[4],s[5],s[6]).length(),o=Vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ri.copy(this);const c=1/r,h=1/a,u=1/o;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=u,ri.elements[9]*=u,ri.elements[10]*=u,e.setFromRotationMatrix(ri),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Oi){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(o===Oi)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ro)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Oi){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,p=(n+s)*h;let g,_;if(o===Oi)g=(a+r)*u,_=-2*u;else if(o===ro)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Vs=new G,ri=new Ie,Ep=new G(0,0,0),Tp=new G(1,1,1),qi=new G,_a=new G,Fn=new G,Mu=new Ie,yu=new la;class wi{constructor(t=0,e=0,n=0,s=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(fn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-fn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yu.setFromEuler(this),this.setFromQuaternion(yu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class zc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ap=0;const bu=new G,Hs=new la,Ri=new Ie,Ma=new G,Pr=new G,Cp=new G,Rp=new la,Su=new G(1,0,0),wu=new G(0,1,0),Eu=new G(0,0,1),Tu={type:"added"},Pp={type:"removed"},Ws={type:"childadded",child:null},Fo={type:"childremoved",child:null};class He extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new G,e=new wi,n=new la,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Me}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(Su,t)}rotateY(t){return this.rotateOnAxis(wu,t)}rotateZ(t){return this.rotateOnAxis(Eu,t)}translateOnAxis(t,e){return bu.copy(t).applyQuaternion(this.quaternion),this.position.add(bu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Su,t)}translateY(t){return this.translateOnAxis(wu,t)}translateZ(t){return this.translateOnAxis(Eu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ma.copy(t):Ma.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Pr,Ma,this.up):Ri.lookAt(Ma,Pr,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(Ri),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tu),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pp),Fo.child=t,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tu),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,t,Cp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,Rp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}He.DEFAULT_UP=new G(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new G,Pi=new G,Oo=new G,Di=new G,Xs=new G,qs=new G,Au=new G,ko=new G,Bo=new G,Go=new G,Vo=new Ge,Ho=new Ge,Wo=new Ge;class ci{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ai.subVectors(t,e),s.cross(ai);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ai.subVectors(s,e),Pi.subVectors(n,e),Oo.subVectors(t,e);const a=ai.dot(ai),o=ai.dot(Pi),l=ai.dot(Oo),c=Pi.dot(Pi),h=Pi.dot(Oo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(a,Di.y),l.addScaledVector(o,Di.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Vo.setScalar(0),Ho.setScalar(0),Wo.setScalar(0),Vo.fromBufferAttribute(t,e),Ho.fromBufferAttribute(t,n),Wo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Vo,r.x),a.addScaledVector(Ho,r.y),a.addScaledVector(Wo,r.z),a}static isFrontFacing(t,e,n,s){return ai.subVectors(n,e),Pi.subVectors(t,e),ai.cross(Pi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ai.cross(Pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ci.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return ci.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Xs.subVectors(s,n),qs.subVectors(r,n),ko.subVectors(t,n);const l=Xs.dot(ko),c=qs.dot(ko);if(l<=0&&c<=0)return e.copy(n);Bo.subVectors(t,s);const h=Xs.dot(Bo),u=qs.dot(Bo);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Xs,a);Go.subVectors(t,r);const p=Xs.dot(Go),g=qs.dot(Go);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(qs,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Au.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Au,o);const d=1/(m+_+f);return a=_*d,o=f*d,e.copy(n).addScaledVector(Xs,a).addScaledVector(qs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},ya={h:0,s:0,l:0};function Xo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Pt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=De.workingColorSpace){return this.r=t,this.g=e,this.b=n,De.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=De.workingColorSpace){if(t=Uc(t,1),e=fn(e,0,1),n=fn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Xo(a,r,t+1/3),this.g=Xo(a,r,t),this.b=Xo(a,r,t-1/3)}return De.toWorkingColorSpace(this,s),this}setStyle(t,e=mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){const n=df[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return De.fromWorkingColorSpace(bn.copy(this),t),Math.round(fn(bn.r*255,0,255))*65536+Math.round(fn(bn.g*255,0,255))*256+Math.round(fn(bn.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=De.workingColorSpace){De.fromWorkingColorSpace(bn.copy(this),e);const n=bn.r,s=bn.g,r=bn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=De.workingColorSpace){return De.fromWorkingColorSpace(bn.copy(this),e),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=mn){De.fromWorkingColorSpace(bn.copy(this),t);const e=bn.r,n=bn.g,s=bn.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(ya);const n=Gr(Yi.h,ya.h,e),s=Gr(Yi.s,ya.s,e),r=Gr(Yi.l,ya.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Pt;Pt.NAMES=df;let Dp=0;class Is extends br{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Ds(),this.name="",this.blending=es,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=_l,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==is&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xl&&(n.blendSrc=this.blendSrc),this.blendDst!==_l&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Le extends Is{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const en=new G,ba=new At;class Ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cu,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ba.fromBufferAttribute(this,e),ba.applyMatrix3(t),this.setXY(e,ba.x,ba.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=er(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=er(e,this.array)),e}setX(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=er(e,this.array)),e}setY(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=er(e,this.array)),e}setZ(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=er(e,this.array)),e}setW(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array),s=En(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array),s=En(s,this.array),r=En(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cu&&(t.usage=this.usage),t}}class pf extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class mf extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Lp=0;const Yn=new Ie,qo=new He,Ys=new G,On=new Ls,Dr=new Ls,un=new G;class ze extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uf(t)?mf:pf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Me().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Yn.makeRotationFromQuaternion(t),this.applyMatrix4(Yn),this}rotateX(t){return Yn.makeRotationX(t),this.applyMatrix4(Yn),this}rotateY(t){return Yn.makeRotationY(t),this.applyMatrix4(Yn),this}rotateZ(t){return Yn.makeRotationZ(t),this.applyMatrix4(Yn),this}translate(t,e,n){return Yn.makeTranslation(t,e,n),this.applyMatrix4(Yn),this}scale(t,e,n){return Yn.makeScale(t,e,n),this.applyMatrix4(Yn),this}lookAt(t){return qo.lookAt(t),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];On.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Dr.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors(On.min,Dr.min),On.expandByPoint(un),un.addVectors(On.max,Dr.max),On.expandByPoint(un)):(On.expandByPoint(Dr.min),On.expandByPoint(Dr.max))}On.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)un.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(un));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)un.fromBufferAttribute(o,c),l&&(Ys.fromBufferAttribute(t,c),un.add(Ys)),s=Math.max(s,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new G,l[A]=new G;const c=new G,h=new G,u=new G,f=new At,p=new At,g=new At,_=new G,m=new G;function d(A,M,v){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const S=1/(p.x*g.y-g.x*p.y);isFinite(S)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(S),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(S),o[A].add(_),o[M].add(_),o[v].add(_),l[A].add(m),l[M].add(m),l[v].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let A=0,M=y.length;A<M;++A){const v=y[A],S=v.start,I=v.count;for(let N=S,P=S+I;N<P;N+=3)d(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const b=new G,x=new G,R=new G,T=new G;function E(A){R.fromBufferAttribute(s,A),T.copy(R);const M=o[A];b.copy(M),b.sub(R.multiplyScalar(R.dot(M))).normalize(),x.crossVectors(T,M);const S=x.dot(l[A])<0?-1:1;a.setXYZW(A,b.x,b.y,b.z,S)}for(let A=0,M=y.length;A<M;++A){const v=y[A],S=v.start,I=v.count;for(let N=S,P=S+I;N<P;N+=3)E(t.getX(N+0)),E(t.getX(N+1)),E(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,h=new G,u=new G;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new Ve(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cu=new Ie,os=new Nc,Sa=new Sr,Ru=new G,wa=new G,Ea=new G,Ta=new G,Yo=new G,Aa=new G,Pu=new G,Ca=new G;class le extends He{constructor(t=new ze,e=new Le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Aa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Yo.fromBufferAttribute(u,t),a?Aa.addScaledVector(Yo,h):Aa.addScaledVector(Yo.sub(e),h))}e.add(Aa)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(r),os.copy(t.ray).recast(t.near),!(Sa.containsPoint(os.origin)===!1&&(os.intersectSphere(Sa,Ru)===null||os.origin.distanceToSquared(Ru)>(t.far-t.near)**2))&&(Cu.copy(r).invert(),os.copy(t.ray).applyMatrix4(Cu),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,os)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,R=b;x<R;x+=3){const T=o.getX(x),E=o.getX(x+1),A=o.getX(x+2);s=Ra(this,d,t,n,c,h,u,T,E,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const y=o.getX(m),b=o.getX(m+1),x=o.getX(m+2);s=Ra(this,a,t,n,c,h,u,y,b,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,R=b;x<R;x+=3){const T=x,E=x+1,A=x+2;s=Ra(this,d,t,n,c,h,u,T,E,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const y=m,b=m+1,x=m+2;s=Ra(this,a,t,n,c,h,u,y,b,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ip(i,t,e,n,s,r,a,o){let l;if(t.side===Pn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===is,o),l===null)return null;Ca.copy(o),Ca.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ca);return c<e.near||c>e.far?null:{distance:c,point:Ca.clone(),object:i}}function Ra(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,wa),i.getVertexPosition(l,Ea),i.getVertexPosition(c,Ta);const h=Ip(i,t,e,n,wa,Ea,Ta,Pu);if(h){const u=new G;ci.getBarycoord(Pu,wa,Ea,Ta,u),s&&(h.uv=ci.getInterpolatedAttribute(s,o,l,c,u,new At)),r&&(h.uv1=ci.getInterpolatedAttribute(r,o,l,c,u,new At)),a&&(h.normal=ci.getInterpolatedAttribute(a,o,l,c,u,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new G,materialIndex:0};ci.getNormal(wa,Ea,Ta,f.normal),h.face=f,h.barycoord=u}return h}class Cn extends ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2));function g(_,m,d,y,b,x,R,T,E,A,M){const v=x/E,S=R/A,I=x/2,N=R/2,P=T/2,U=E+1,B=A+1;let H=0,V=0;const $=new G;for(let Q=0;Q<B;Q++){const st=Q*S-N;for(let Et=0;Et<U;Et++){const Ot=Et*v-I;$[_]=Ot*y,$[m]=st*b,$[d]=P,c.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[d]=T>0?1:-1,h.push($.x,$.y,$.z),u.push(Et/E),u.push(1-Q/A),H+=1}}for(let Q=0;Q<A;Q++)for(let st=0;st<E;st++){const Et=f+st+U*Q,Ot=f+st+U*(Q+1),W=f+(st+1)+U*(Q+1),Z=f+(st+1)+U*Q;l.push(Et,Ot,Z),l.push(Ot,W,Z),V+=6}o.addGroup(p,V,M),p+=V,f+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Tn(i){const t={};for(let e=0;e<i.length;e++){const n=mr(i[e]);for(const s in n)t[s]=n[s]}return t}function Up(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const ui={clone:mr,merge:Tn};var Np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $e extends Is{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Np,this.fragmentShader=zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mr(t.uniforms),this.uniformsGroups=Up(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class vf extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new G,Du=new At,Lu=new At;class Bn extends vf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Kr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,Du,Lu),e.subVectors(Lu,Du)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Br*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const $s=-90,js=1;class Fp extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Bn($s,js,t,e);s.layers=this.layers,this.add(s);const r=new Bn($s,js,t,e);r.layers=this.layers,this.add(r);const a=new Bn($s,js,t,e);a.layers=this.layers,this.add(a);const o=new Bn($s,js,t,e);o.layers=this.layers,this.add(o);const l=new Bn($s,js,t,e);l.layers=this.layers,this.add(l);const c=new Bn($s,js,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class xf extends Sn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:dr,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Op extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Cn(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:pn});r.uniforms.tEquirect.value=e;const a=new le(s,r),o=e.minFilter;return e.minFilter===vs&&(e.minFilter=yi),new Fp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const $o=new G,kp=new G,Bp=new Me;class ds{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=$o.subVectors(n,e).cross(kp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta($o),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Bp.getNormalMatrix(t),s=this.coplanarPoint($o).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new Sr,Pa=new G;class Fc{constructor(t=new ds,e=new ds,n=new ds,s=new ds,r=new ds,a=new ds){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Oi){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],y=s[13],b=s[14],x=s[15];if(n[0].setComponents(l-r,f-c,m-p,x-d).normalize(),n[1].setComponents(l+r,f+c,m+p,x+d).normalize(),n[2].setComponents(l+a,f+h,m+g,x+y).normalize(),n[3].setComponents(l-a,f-h,m-g,x-y).normalize(),n[4].setComponents(l-o,f-u,m-_,x-b).normalize(),e===Oi)n[5].setComponents(l+o,f+u,m+_,x+b).normalize();else if(e===ro)n[5].setComponents(o,u,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(t){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Pa.x=s.normal.x>0?t.max.x:t.min.x,Pa.y=s.normal.y>0?t.max.y:t.min.y,Pa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _f(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gp(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Jn extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const y=d*f-a;for(let b=0;b<c;b++){const x=b*u-r;g.push(x,-y,0),_.push(0,0,1),m.push(b/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){const b=y+c*d,x=y+c*(d+1),R=y+1+c*(d+1),T=y+1+c*d;p.push(b,x,T),p.push(x,R,T)}this.setIndex(p),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hp=`#ifdef USE_ALPHAHASH
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
#endif`,Wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$p=`#ifdef USE_AOMAP
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
#endif`,jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zp=`#ifdef USE_BATCHING
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
#endif`,Kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,e0=`#ifdef USE_IRIDESCENCE
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
#endif`,n0=`#ifdef USE_BUMPMAP
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
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,h0=`#define PI 3.141592653589793
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
} // validated`,f0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,d0=`vec3 transformedNormal = objectNormal;
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
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x0="gl_FragColor = linearToOutputTexel( gl_FragColor );",_0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,b0=`#ifdef USE_ENVMAP
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
#endif`,S0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R0=`#ifdef USE_GRADIENTMAP
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
}`,P0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I0=`uniform bool receiveShadow;
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
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,N0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k0=`PhysicalMaterial material;
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
#endif`,B0=`struct PhysicalMaterial {
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
}`,G0=`
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
#endif`,V0=`#if defined( RE_IndirectDiffuse )
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
#endif`,H0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,K0=`#if defined( USE_POINTS_UV )
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
#endif`,J0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,em=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,im=`#ifdef USE_MORPHTARGETS
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
#endif`,sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,am=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,um=`#ifdef USE_NORMALMAP
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
#endif`,hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tm=`float getShadowMask() {
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
}`,Am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cm=`#ifdef USE_SKINNING
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
#endif`,Rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Um=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nm=`#ifdef USE_TRANSMISSION
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
#endif`,zm=`#ifdef USE_TRANSMISSION
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vm=`uniform sampler2D t2D;
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`#include <common>
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
}`,$m=`#if DEPTH_PACKING == 3200
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
}`,jm=`#define DISTANCE
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
}`,Zm=`#define DISTANCE
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`uniform float scale;
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
}`,tg=`uniform vec3 diffuse;
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
}`,eg=`#include <common>
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#define LAMBERT
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
}`,sg=`#define LAMBERT
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
}`,rg=`#define MATCAP
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
}`,ag=`#define MATCAP
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
}`,og=`#define NORMAL
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
}`,lg=`#define NORMAL
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
}`,cg=`#define PHONG
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
}`,ug=`#define PHONG
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
}`,hg=`#define STANDARD
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
}`,fg=`#define STANDARD
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
}`,dg=`#define TOON
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
}`,pg=`#define TOON
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
}`,mg=`uniform float size;
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
}`,gg=`uniform vec3 diffuse;
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
}`,vg=`#include <common>
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
}`,xg=`uniform vec3 color;
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
}`,_g=`uniform float rotation;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,Se={alphahash_fragment:Vp,alphahash_pars_fragment:Hp,alphamap_fragment:Wp,alphamap_pars_fragment:Xp,alphatest_fragment:qp,alphatest_pars_fragment:Yp,aomap_fragment:$p,aomap_pars_fragment:jp,batching_pars_vertex:Zp,batching_vertex:Kp,begin_vertex:Jp,beginnormal_vertex:Qp,bsdfs:t0,iridescence_fragment:e0,bumpmap_pars_fragment:n0,clipping_planes_fragment:i0,clipping_planes_pars_fragment:s0,clipping_planes_pars_vertex:r0,clipping_planes_vertex:a0,color_fragment:o0,color_pars_fragment:l0,color_pars_vertex:c0,color_vertex:u0,common:h0,cube_uv_reflection_fragment:f0,defaultnormal_vertex:d0,displacementmap_pars_vertex:p0,displacementmap_vertex:m0,emissivemap_fragment:g0,emissivemap_pars_fragment:v0,colorspace_fragment:x0,colorspace_pars_fragment:_0,envmap_fragment:M0,envmap_common_pars_fragment:y0,envmap_pars_fragment:b0,envmap_pars_vertex:S0,envmap_physical_pars_fragment:U0,envmap_vertex:w0,fog_vertex:E0,fog_pars_vertex:T0,fog_fragment:A0,fog_pars_fragment:C0,gradientmap_pars_fragment:R0,lightmap_pars_fragment:P0,lights_lambert_fragment:D0,lights_lambert_pars_fragment:L0,lights_pars_begin:I0,lights_toon_fragment:N0,lights_toon_pars_fragment:z0,lights_phong_fragment:F0,lights_phong_pars_fragment:O0,lights_physical_fragment:k0,lights_physical_pars_fragment:B0,lights_fragment_begin:G0,lights_fragment_maps:V0,lights_fragment_end:H0,logdepthbuf_fragment:W0,logdepthbuf_pars_fragment:X0,logdepthbuf_pars_vertex:q0,logdepthbuf_vertex:Y0,map_fragment:$0,map_pars_fragment:j0,map_particle_fragment:Z0,map_particle_pars_fragment:K0,metalnessmap_fragment:J0,metalnessmap_pars_fragment:Q0,morphinstance_vertex:tm,morphcolor_vertex:em,morphnormal_vertex:nm,morphtarget_pars_vertex:im,morphtarget_vertex:sm,normal_fragment_begin:rm,normal_fragment_maps:am,normal_pars_fragment:om,normal_pars_vertex:lm,normal_vertex:cm,normalmap_pars_fragment:um,clearcoat_normal_fragment_begin:hm,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:dm,iridescence_pars_fragment:pm,opaque_fragment:mm,packing:gm,premultiplied_alpha_fragment:vm,project_vertex:xm,dithering_fragment:_m,dithering_pars_fragment:Mm,roughnessmap_fragment:ym,roughnessmap_pars_fragment:bm,shadowmap_pars_fragment:Sm,shadowmap_pars_vertex:wm,shadowmap_vertex:Em,shadowmask_pars_fragment:Tm,skinbase_vertex:Am,skinning_pars_vertex:Cm,skinning_vertex:Rm,skinnormal_vertex:Pm,specularmap_fragment:Dm,specularmap_pars_fragment:Lm,tonemapping_fragment:Im,tonemapping_pars_fragment:Um,transmission_fragment:Nm,transmission_pars_fragment:zm,uv_pars_fragment:Fm,uv_pars_vertex:Om,uv_vertex:km,worldpos_vertex:Bm,background_vert:Gm,background_frag:Vm,backgroundCube_vert:Hm,backgroundCube_frag:Wm,cube_vert:Xm,cube_frag:qm,depth_vert:Ym,depth_frag:$m,distanceRGBA_vert:jm,distanceRGBA_frag:Zm,equirect_vert:Km,equirect_frag:Jm,linedashed_vert:Qm,linedashed_frag:tg,meshbasic_vert:eg,meshbasic_frag:ng,meshlambert_vert:ig,meshlambert_frag:sg,meshmatcap_vert:rg,meshmatcap_frag:ag,meshnormal_vert:og,meshnormal_frag:lg,meshphong_vert:cg,meshphong_frag:ug,meshphysical_vert:hg,meshphysical_frag:fg,meshtoon_vert:dg,meshtoon_frag:pg,points_vert:mg,points_frag:gg,shadow_vert:vg,shadow_frag:xg,sprite_vert:_g,sprite_frag:Mg},Ht={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},envMapRotation:{value:new Me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},Mi={basic:{uniforms:Tn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Tn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Tn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Tn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Tn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Tn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Tn([Ht.points,Ht.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Tn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Tn([Ht.common,Ht.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Tn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Tn([Ht.sprite,Ht.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Me}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:Tn([Ht.common,Ht.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:Tn([Ht.lights,Ht.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Mi.physical={uniforms:Tn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const Da={r:0,b:0,g:0},cs=new wi,yg=new Ie;function bg(i,t,e,n,s,r,a){const o=new Pt(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?e:t).get(b)),b}function _(y){let b=!1;const x=g(y);x===null?d(o,l):x&&x.isColor&&(d(x,1),b=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,b){const x=g(b);x&&(x.isCubeTexture||x.mapping===ho)?(h===void 0&&(h=new le(new Cn(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:mr(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),cs.copy(b.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yg.makeRotationFromEuler(cs)),h.material.toneMapped=De.getTransfer(x.colorSpace)!==Oe,(u!==x||f!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new le(new Jn(2,2),new $e({name:"BackgroundMaterial",uniforms:mr(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=De.getTransfer(x.colorSpace)!==Oe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,b){y.getRGB(Da,gf(i)),n.buffers.color.setClear(Da.r,Da.g,Da.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),l=b,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(o,l)},render:_,addToRenderList:m}}function Sg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(v,S,I,N,P){let U=!1;const B=u(N,I,S);r!==B&&(r=B,c(r.object)),U=p(v,N,I,P),U&&g(v,N,I,P),P!==null&&t.update(P,i.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,x(v,S,I,N),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,S,I){const N=I.wireframe===!0;let P=n[v.id];P===void 0&&(P={},n[v.id]=P);let U=P[S.id];U===void 0&&(U={},P[S.id]=U);let B=U[N];return B===void 0&&(B=f(l()),U[N]=B),B}function f(v){const S=[],I=[],N=[];for(let P=0;P<e;P++)S[P]=0,I[P]=0,N[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:I,attributeDivisors:N,object:v,attributes:{},index:null}}function p(v,S,I,N){const P=r.attributes,U=S.attributes;let B=0;const H=I.getAttributes();for(const V in H)if(H[V].location>=0){const Q=P[V];let st=U[V];if(st===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(st=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(st=v.instanceColor)),Q===void 0||Q.attribute!==st||st&&Q.data!==st.data)return!0;B++}return r.attributesNum!==B||r.index!==N}function g(v,S,I,N){const P={},U=S.attributes;let B=0;const H=I.getAttributes();for(const V in H)if(H[V].location>=0){let Q=U[V];Q===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor));const st={};st.attribute=Q,Q&&Q.data&&(st.data=Q.data),P[V]=st,B++}r.attributes=P,r.attributesNum=B,r.index=N}function _(){const v=r.newAttributes;for(let S=0,I=v.length;S<I;S++)v[S]=0}function m(v){d(v,0)}function d(v,S){const I=r.newAttributes,N=r.enabledAttributes,P=r.attributeDivisors;I[v]=1,N[v]===0&&(i.enableVertexAttribArray(v),N[v]=1),P[v]!==S&&(i.vertexAttribDivisor(v,S),P[v]=S)}function y(){const v=r.newAttributes,S=r.enabledAttributes;for(let I=0,N=S.length;I<N;I++)S[I]!==v[I]&&(i.disableVertexAttribArray(I),S[I]=0)}function b(v,S,I,N,P,U,B){B===!0?i.vertexAttribIPointer(v,S,I,P,U):i.vertexAttribPointer(v,S,I,N,P,U)}function x(v,S,I,N){_();const P=N.attributes,U=I.getAttributes(),B=S.defaultAttributeValues;for(const H in U){const V=U[H];if(V.location>=0){let $=P[H];if($===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&($=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&($=v.instanceColor)),$!==void 0){const Q=$.normalized,st=$.itemSize,Et=t.get($);if(Et===void 0)continue;const Ot=Et.buffer,W=Et.type,Z=Et.bytesPerElement,ht=W===i.INT||W===i.UNSIGNED_INT||$.gpuType===Ac;if($.isInterleavedBufferAttribute){const at=$.data,mt=at.stride,Dt=$.offset;if(at.isInstancedInterleavedBuffer){for(let Ut=0;Ut<V.locationSize;Ut++)d(V.location+Ut,at.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ut=0;Ut<V.locationSize;Ut++)m(V.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let Ut=0;Ut<V.locationSize;Ut++)b(V.location+Ut,st/V.locationSize,W,Q,mt*Z,(Dt+st/V.locationSize*Ut)*Z,ht)}else{if($.isInstancedBufferAttribute){for(let at=0;at<V.locationSize;at++)d(V.location+at,$.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let at=0;at<V.locationSize;at++)m(V.location+at);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let at=0;at<V.locationSize;at++)b(V.location+at,st/V.locationSize,W,Q,st*Z,st/V.locationSize*at*Z,ht)}}else if(B!==void 0){const Q=B[H];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(V.location,Q);break;case 3:i.vertexAttrib3fv(V.location,Q);break;case 4:i.vertexAttrib4fv(V.location,Q);break;default:i.vertexAttrib1fv(V.location,Q)}}}}y()}function R(){A();for(const v in n){const S=n[v];for(const I in S){const N=S[I];for(const P in N)h(N[P].object),delete N[P];delete S[I]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;const S=n[v.id];for(const I in S){const N=S[I];for(const P in N)h(N[P].object),delete N[P];delete S[I]}delete n[v.id]}function E(v){for(const S in n){const I=n[S];if(I[v.id]===void 0)continue;const N=I[v.id];for(const P in N)h(N[P].object),delete N[P];delete I[v.id]}}function A(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function wg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Eg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Zn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const A=E===Kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Si&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==di&&!A)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:R,maxSamples:T}}function Tg(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ds,o=new Me,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,b=y*4;let x=d.clippingState||null;l.value=x,x=h(g,f,b,p);for(let R=0;R!==b;++R)x[R]=e[R];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,x=p;b!==_;++b,x+=4)a.copy(u[b]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Ag(i){let t=new WeakMap;function e(a,o){return o===Rl?a.mapping=dr:o===Pl&&(a.mapping=pr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Rl||o===Pl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Op(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Oc extends vf{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const nr=4,Iu=[.125,.215,.35,.446,.526,.582],ms=20,jo=new Oc,Uu=new Pt;let Zo=null,Ko=0,Jo=0,Qo=!1;const ps=(1+Math.sqrt(5))/2,Zs=1/ps,Nu=[new G(-ps,Zs,0),new G(ps,Zs,0),new G(-Zs,0,ps),new G(Zs,0,ps),new G(0,ps,-Zs),new G(0,ps,Zs),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class zu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Zo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zo,Ko,Jo),this._renderer.xr.enabled=Qo,t.scissorTest=!1,La(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===dr||t.mapping===pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Kn,format:Zn,colorSpace:yr,depthBuffer:!1},s=Fu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cg(r)),this._blurMaterial=Rg(r,t,e)}return s}_compileMaterial(t){const e=new le(this._lodPlanes[0],t);this._renderer.compile(e,jo)}_sceneToCubeUV(t,e,n,s){const o=new Bn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Uu),h.toneMapping=ns,h.autoClear=!1;const p=new Le({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),g=new le(new Cn,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Uu),_=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const b=this._cubeSize;La(s,y*b,d>2?b:0,b,b),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===dr||t.mapping===pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ou());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new le(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;La(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,jo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Nu[(s-r-1)%Nu.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new le(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ms-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ms;m>ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ms}`);const d=[];let y=0;for(let E=0;E<ms;++E){const A=E/_,M=Math.exp(-A*A/2);d.push(M),E===0?y+=M:E<m&&(y+=2*M)}for(let E=0;E<d.length;E++)d[E]=d[E]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const x=this._sizeLods[s],R=3*x*(s>b-nr?s-b+nr:0),T=4*(this._cubeSize-x);La(e,R,T,3*x,2*x),l.setRenderTarget(e),l.render(u,jo)}}function Cg(i){const t=[],e=[],n=[];let s=i;const r=i-nr+1+Iu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-nr?l=Iu[a-i+nr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,y=new Float32Array(_*g*p),b=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let T=0;T<p;T++){const E=T%3*2/3-1,A=T>2?0:-1,M=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];y.set(M,_*g*T),b.set(f,m*g*T);const v=[T,T,T,T,T,T];x.set(v,d*g*T)}const R=new ze;R.setAttribute("position",new Ve(y,_)),R.setAttribute("uv",new Ve(b,m)),R.setAttribute("faceIndex",new Ve(x,d)),t.push(R),s>nr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fu(i,t,e){const n=new Un(i,t,e);return n.texture.mapping=ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function La(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Rg(i,t,e){const n=new Float32Array(ms),s=new G(0,1,0);return new $e({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kc(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Ou(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function ku(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function kc(){return`

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
	`}function Pg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Rl||l===Pl,h=l===dr||l===pr;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new zu(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new zu(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Dg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Fr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Lg(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let b=0,x=y.length;b<x;b+=3){const R=y[b+0],T=y[b+1],E=y[b+2];f.push(R,T,T,E,E,R)}}else if(g!==void 0){const y=g.array;_=g.version;for(let b=0,x=y.length/3-1;b<x;b+=3){const R=b+0,T=b+1,E=b+2;f.push(R,T,T,E,E,R)}}else return;const m=new(uf(f)?mf:pf)(f,1);m.version=_;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Ig(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let d=0;for(let y=0;y<g;y++)d+=p[y]*_[y];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ug(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ng(i,t,e){const n=new WeakMap,s=new Ge;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let v=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var p=v;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let R=o.attributes.position.count*x,T=1;R>t.maxTextureSize&&(T=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const E=new Float32Array(R*T*4*u),A=new ff(E,R,T,u);A.type=di,A.needsUpdate=!0;const M=x*4;for(let S=0;S<u;S++){const I=d[S],N=y[S],P=b[S],U=R*T*4*S;for(let B=0;B<I.count;B++){const H=B*M;g===!0&&(s.fromBufferAttribute(I,B),E[U+H+0]=s.x,E[U+H+1]=s.y,E[U+H+2]=s.z,E[U+H+3]=0),_===!0&&(s.fromBufferAttribute(N,B),E[U+H+4]=s.x,E[U+H+5]=s.y,E[U+H+6]=s.z,E[U+H+7]=0),m===!0&&(s.fromBufferAttribute(P,B),E[U+H+8]=s.x,E[U+H+9]=s.y,E[U+H+10]=s.z,E[U+H+11]=P.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new At(R,T)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function zg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Bc extends Sn{constructor(t,e,n,s,r,a,o,l,c,h=sr){if(h!==sr&&h!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===sr&&(n=Es),n===void 0&&h===As&&(n=Ts),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Mf=new Sn,Bu=new Bc(1,1),yf=new ff,bf=new Sp,Sf=new xf,Gu=[],Vu=[],Hu=new Float32Array(16),Wu=new Float32Array(9),Xu=new Float32Array(4);function wr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Gu[s];if(r===void 0&&(r=new Float32Array(s),Gu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ln(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function cn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function mo(i,t){let e=Vu[t];e===void 0&&(e=new Int32Array(t),Vu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Fg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;i.uniform2fv(this.addr,t),cn(e,t)}}function kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ln(e,t))return;i.uniform3fv(this.addr,t),cn(e,t)}}function Bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;i.uniform4fv(this.addr,t),cn(e,t)}}function Gg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;Xu.set(n),i.uniformMatrix2fv(this.addr,!1,Xu),cn(e,n)}}function Vg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;Wu.set(n),i.uniformMatrix3fv(this.addr,!1,Wu),cn(e,n)}}function Hg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;Hu.set(n),i.uniformMatrix4fv(this.addr,!1,Hu),cn(e,n)}}function Wg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;i.uniform2iv(this.addr,t),cn(e,t)}}function qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;i.uniform3iv(this.addr,t),cn(e,t)}}function Yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;i.uniform4iv(this.addr,t),cn(e,t)}}function $g(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;i.uniform2uiv(this.addr,t),cn(e,t)}}function Zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;i.uniform3uiv(this.addr,t),cn(e,t)}}function Kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;i.uniform4uiv(this.addr,t),cn(e,t)}}function Jg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bu.compareFunction=cf,r=Bu):r=Mf,e.setTexture2D(t||r,s)}function Qg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||bf,s)}function tv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Sf,s)}function ev(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yf,s)}function nv(i){switch(i){case 5126:return Fg;case 35664:return Og;case 35665:return kg;case 35666:return Bg;case 35674:return Gg;case 35675:return Vg;case 35676:return Hg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return qg;case 35669:case 35673:return Yg;case 5125:return $g;case 36294:return jg;case 36295:return Zg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return ev}}function iv(i,t){i.uniform1fv(this.addr,t)}function sv(i,t){const e=wr(t,this.size,2);i.uniform2fv(this.addr,e)}function rv(i,t){const e=wr(t,this.size,3);i.uniform3fv(this.addr,e)}function av(i,t){const e=wr(t,this.size,4);i.uniform4fv(this.addr,e)}function ov(i,t){const e=wr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function lv(i,t){const e=wr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function cv(i,t){const e=wr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function uv(i,t){i.uniform1iv(this.addr,t)}function hv(i,t){i.uniform2iv(this.addr,t)}function fv(i,t){i.uniform3iv(this.addr,t)}function dv(i,t){i.uniform4iv(this.addr,t)}function pv(i,t){i.uniform1uiv(this.addr,t)}function mv(i,t){i.uniform2uiv(this.addr,t)}function gv(i,t){i.uniform3uiv(this.addr,t)}function vv(i,t){i.uniform4uiv(this.addr,t)}function xv(i,t,e){const n=this.cache,s=t.length,r=mo(e,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Mf,r[a])}function _v(i,t,e){const n=this.cache,s=t.length,r=mo(e,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||bf,r[a])}function Mv(i,t,e){const n=this.cache,s=t.length,r=mo(e,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Sf,r[a])}function yv(i,t,e){const n=this.cache,s=t.length,r=mo(e,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||yf,r[a])}function bv(i){switch(i){case 5126:return iv;case 35664:return sv;case 35665:return rv;case 35666:return av;case 35674:return ov;case 35675:return lv;case 35676:return cv;case 5124:case 35670:return uv;case 35667:case 35671:return hv;case 35668:case 35672:return fv;case 35669:case 35673:return dv;case 5125:return pv;case 36294:return mv;case 36295:return gv;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return xv;case 35679:case 36299:case 36307:return _v;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return yv}}class Sv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=nv(e.type)}}class wv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bv(e.type)}}class Ev{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const tl=/(\w+)(\])?(\[|\.)?/g;function qu(i,t){i.seq.push(t),i.map[t.id]=t}function Tv(i,t,e){const n=i.name,s=n.length;for(tl.lastIndex=0;;){const r=tl.exec(n),a=tl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){qu(e,c===void 0?new Sv(o,i,t):new wv(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Ev(o),qu(e,u)),e=u}}}class to{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Tv(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Yu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Av=37297;let Cv=0;function Rv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const $u=new Me;function Pv(i){De._getMatrix($u,De.workingColorSpace,i);const t=`mat3( ${$u.elements.map(e=>e.toFixed(4))} )`;switch(De.getTransfer(i)){case po:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ju(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Rv(i.getShaderSource(t),a)}else return s}function Dv(i,t){const e=Pv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Lv(i,t){let e;switch(t){case Yh:e="Linear";break;case $h:e="Reinhard";break;case jh:e="Cineon";break;case Tc:e="ACESFilmic";break;case Zh:e="AgX";break;case Kh:e="Neutral";break;case Gd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ia=new G;function Iv(){De.getLuminanceCoefficients(Ia);const i=Ia.x.toFixed(4),t=Ia.y.toFixed(4),e=Ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function Nv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Or(i){return i!==""}function Zu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ku(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(i){return i.replace(Fv,kv)}const Ov=new Map;function kv(i,t){let e=Se[t];if(e===void 0){const n=Ov.get(t);if(n!==void 0)e=Se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sc(e)}const Bv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(i){return i.replace(Bv,Gv)}function Gv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qu(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ui&&(t="SHADOWMAP_TYPE_VSM"),t}function Hv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case dr:case pr:t="ENVMAP_TYPE_CUBE";break;case ho:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pr:t="ENVMAP_MODE_REFRACTION";break}return t}function Xv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ec:t="ENVMAP_BLENDING_MULTIPLY";break;case kd:t="ENVMAP_BLENDING_MIX";break;case Bd:t="ENVMAP_BLENDING_ADD";break}return t}function qv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Yv(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Vv(e),c=Hv(e),h=Wv(e),u=Xv(e),f=qv(e),p=Uv(e),g=Nv(r),_=s.createProgram();let m,d,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Or).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Or).join(`
`),d.length>0&&(d+=`
`)):(m=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),d=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ns?"#define TONE_MAPPING":"",e.toneMapping!==ns?Se.tonemapping_pars_fragment:"",e.toneMapping!==ns?Lv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,Dv("linearToOutputTexel",e.outputColorSpace),Iv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Or).join(`
`)),a=sc(a),a=Zu(a,e),a=Ku(a,e),o=sc(o),o=Zu(o,e),o=Ku(o,e),a=Ju(a),o=Ju(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=y+m+a,x=y+d+o,R=Yu(s,s.VERTEX_SHADER,b),T=Yu(s,s.FRAGMENT_SHADER,x);s.attachShader(_,R),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(S){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(R).trim(),P=s.getShaderInfoLog(T).trim();let U=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,T);else{const H=ju(s,R,"vertex"),V=ju(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+I+`
`+H+`
`+V)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(N===""||P==="")&&(B=!1);B&&(S.diagnostics={runnable:U,programLog:I,vertexShader:{log:N,prefix:m},fragmentShader:{log:P,prefix:d}})}s.deleteShader(R),s.deleteShader(T),A=new to(s,_),M=zv(s,_)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Av)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let $v=0;class jv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Zv(t),e.set(t,n)),n}}class Zv{constructor(t){this.id=$v++,this.code=t,this.usedTimes=0}}function Kv(i,t,e,n,s,r,a){const o=new zc,l=new jv,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,v,S,I,N){const P=I.fog,U=N.geometry,B=M.isMeshStandardMaterial?I.environment:null,H=(M.isMeshStandardMaterial?e:t).get(M.envMap||B),V=H&&H.mapping===ho?H.image.height:null,$=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const Q=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,st=Q!==void 0?Q.length:0;let Et=0;U.morphAttributes.position!==void 0&&(Et=1),U.morphAttributes.normal!==void 0&&(Et=2),U.morphAttributes.color!==void 0&&(Et=3);let Ot,W,Z,ht;if($){const we=Mi[$];Ot=we.vertexShader,W=we.fragmentShader}else Ot=M.vertexShader,W=M.fragmentShader,l.update(M),Z=l.getVertexShaderID(M),ht=l.getFragmentShaderID(M);const at=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),Dt=N.isInstancedMesh===!0,Ut=N.isBatchedMesh===!0,Wt=!!M.map,dt=!!M.matcap,Mt=!!H,k=!!M.aoMap,qt=!!M.lightMap,bt=!!M.bumpMap,kt=!!M.normalMap,It=!!M.displacementMap,ne=!!M.emissiveMap,Y=!!M.metalnessMap,C=!!M.roughnessMap,w=M.anisotropy>0,X=M.clearcoat>0,tt=M.dispersion>0,it=M.iridescence>0,rt=M.sheen>0,Ft=M.transmission>0,St=w&&!!M.anisotropyMap,Lt=X&&!!M.clearcoatMap,ae=X&&!!M.clearcoatNormalMap,wt=X&&!!M.clearcoatRoughnessMap,Yt=it&&!!M.iridescenceMap,oe=it&&!!M.iridescenceThicknessMap,ce=rt&&!!M.sheenColorMap,Zt=rt&&!!M.sheenRoughnessMap,ye=!!M.specularMap,ue=!!M.specularColorMap,be=!!M.specularIntensityMap,q=Ft&&!!M.transmissionMap,zt=Ft&&!!M.thicknessMap,lt=!!M.gradientMap,_t=!!M.alphaMap,Bt=M.alphaTest>0,Gt=!!M.alphaHash,fe=!!M.extensions;let Fe=ns;M.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Fe=i.toneMapping);const ke={shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:Ot,fragmentShader:W,defines:M.defines,customVertexShaderID:Z,customFragmentShaderID:ht,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ut,batchingColor:Ut&&N._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&N.instanceColor!==null,instancingMorph:Dt&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:yr,alphaToCoverage:!!M.alphaToCoverage,map:Wt,matcap:dt,envMap:Mt,envMapMode:Mt&&H.mapping,envMapCubeUVHeight:V,aoMap:k,lightMap:qt,bumpMap:bt,normalMap:kt,displacementMap:f&&It,emissiveMap:ne,normalMapObjectSpace:kt&&M.normalMapType===Xd,normalMapTangentSpace:kt&&M.normalMapType===Ic,metalnessMap:Y,roughnessMap:C,anisotropy:w,anisotropyMap:St,clearcoat:X,clearcoatMap:Lt,clearcoatNormalMap:ae,clearcoatRoughnessMap:wt,dispersion:tt,iridescence:it,iridescenceMap:Yt,iridescenceThicknessMap:oe,sheen:rt,sheenColorMap:ce,sheenRoughnessMap:Zt,specularMap:ye,specularColorMap:ue,specularIntensityMap:be,transmission:Ft,transmissionMap:q,thicknessMap:zt,gradientMap:lt,opaque:M.transparent===!1&&M.blending===es&&M.alphaToCoverage===!1,alphaMap:_t,alphaTest:Bt,alphaHash:Gt,combine:M.combine,mapUv:Wt&&_(M.map.channel),aoMapUv:k&&_(M.aoMap.channel),lightMapUv:qt&&_(M.lightMap.channel),bumpMapUv:bt&&_(M.bumpMap.channel),normalMapUv:kt&&_(M.normalMap.channel),displacementMapUv:It&&_(M.displacementMap.channel),emissiveMapUv:ne&&_(M.emissiveMap.channel),metalnessMapUv:Y&&_(M.metalnessMap.channel),roughnessMapUv:C&&_(M.roughnessMap.channel),anisotropyMapUv:St&&_(M.anisotropyMap.channel),clearcoatMapUv:Lt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&_(M.sheenRoughnessMap.channel),specularMapUv:ye&&_(M.specularMap.channel),specularColorMapUv:ue&&_(M.specularColorMap.channel),specularIntensityMapUv:be&&_(M.specularIntensityMap.channel),transmissionMapUv:q&&_(M.transmissionMap.channel),thicknessMapUv:zt&&_(M.thicknessMap.channel),alphaMapUv:_t&&_(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(kt||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(Wt||_t),fog:!!P,useFog:M.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:mt,skinning:N.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:Et,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Wt&&M.map.isVideoTexture===!0&&De.getTransfer(M.map.colorSpace)===Oe,decodeVideoTextureEmissive:ne&&M.emissiveMap.isVideoTexture===!0&&De.getTransfer(M.emissiveMap.colorSpace)===Oe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Je,flipSided:M.side===Pn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:fe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&M.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function d(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const S in M.defines)v.push(S),v.push(M.defines[S]);return M.isRawShaderMaterial===!1&&(y(v,M),b(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function y(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function b(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){const v=g[M.type];let S;if(v){const I=Mi[v];S=ui.clone(I.uniforms)}else S=M.uniforms;return S}function R(M,v){let S;for(let I=0,N=h.length;I<N;I++){const P=h[I];if(P.cacheKey===v){S=P,++S.usedTimes;break}}return S===void 0&&(S=new Yv(i,v,M,r),h.push(S)),S}function T(M){if(--M.usedTimes===0){const v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function E(M){l.remove(M)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:R,releaseProgram:T,releaseShaderCache:E,programs:h,dispose:A}}function Jv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Qv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function th(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function eh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,p,g,_,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function o(u,f,p,g,_,m){const d=a(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,g,_,m){const d=a(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||Qv),n.length>1&&n.sort(f||th),s.length>1&&s.sort(f||th)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function tx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new eh,i.set(n,[a])):s>=r.length?(a=new eh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ex(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Pt};break;case"SpotLight":e={position:new G,direction:new G,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function nx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let ix=0;function sx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function rx(i){const t=new ex,e=nx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const s=new G,r=new Ie,a=new Ie;function o(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,y=0,b=0,x=0,R=0,T=0,E=0;c.sort(sx);for(let M=0,v=c.length;M<v;M++){const S=c[M],I=S.color,N=S.intensity,P=S.distance,U=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=I.r*N,u+=I.g*N,f+=I.b*N;else if(S.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(S.sh.coefficients[B],N);E++}else if(S.isDirectionalLight){const B=t.get(S);if(B.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const H=S.shadow,V=e.get(S);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=U,n.directionalShadowMatrix[p]=S.shadow.matrix,y++}n.directional[p]=B,p++}else if(S.isSpotLight){const B=t.get(S);B.position.setFromMatrixPosition(S.matrixWorld),B.color.copy(I).multiplyScalar(N),B.distance=P,B.coneCos=Math.cos(S.angle),B.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),B.decay=S.decay,n.spot[_]=B;const H=S.shadow;if(S.map&&(n.spotLightMap[R]=S.map,R++,H.updateMatrices(S),S.castShadow&&T++),n.spotLightMatrix[_]=H.matrix,S.castShadow){const V=e.get(S);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=U,x++}_++}else if(S.isRectAreaLight){const B=t.get(S);B.color.copy(I).multiplyScalar(N),B.halfWidth.set(S.width*.5,0,0),B.halfHeight.set(0,S.height*.5,0),n.rectArea[m]=B,m++}else if(S.isPointLight){const B=t.get(S);if(B.color.copy(S.color).multiplyScalar(S.intensity),B.distance=S.distance,B.decay=S.decay,S.castShadow){const H=S.shadow,V=e.get(S);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,V.shadowCameraNear=H.camera.near,V.shadowCameraFar=H.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=S.shadow.matrix,b++}n.point[g]=B,g++}else if(S.isHemisphereLight){const B=t.get(S);B.skyColor.copy(S.color).multiplyScalar(N),B.groundColor.copy(S.groundColor).multiplyScalar(N),n.hemi[d]=B,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const A=n.hash;(A.directionalLength!==p||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==d||A.numDirectionalShadows!==y||A.numPointShadows!==b||A.numSpotShadows!==x||A.numSpotMaps!==R||A.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,A.directionalLength=p,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=d,A.numDirectionalShadows=y,A.numPointShadows=b,A.numSpotShadows=x,A.numSpotMaps=R,A.numLightProbes=E,n.version=ix++)}function l(c,h){let u=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){const b=c[d];if(b.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(b.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function nh(i){const t=new rx(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ax(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new nh(i),t.set(s,[o])):r>=a.length?(o=new nh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class ox extends Is{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lx extends Is{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
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
}`;function hx(i,t,e){let n=new Fc;const s=new At,r=new At,a=new Ge,o=new ox({depthPacking:Wd}),l=new lx,c={},h=e.maxTextureSize,u={[is]:Pn,[Pn]:is,[Je]:Je},f=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:cx,fragmentShader:ux}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new ze;g.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new le(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wh;let d=this.type;this.render=function(T,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=i.getRenderTarget(),v=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),I=i.state;I.setBlending(pn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const N=d!==Ui&&this.type===Ui,P=d===Ui&&this.type!==Ui;for(let U=0,B=T.length;U<B;U++){const H=T[U],V=H.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const $=V.getFrameExtents();if(s.multiply($),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,V.mapSize.y=r.y)),V.map===null||N===!0||P===!0){const st=this.type!==Ui?{minFilter:vn,magFilter:vn}:{};V.map!==null&&V.map.dispose(),V.map=new Un(s.x,s.y,st),V.map.texture.name=H.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const Q=V.getViewportCount();for(let st=0;st<Q;st++){const Et=V.getViewport(st);a.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),I.viewport(a),V.updateMatrices(H,st),n=V.getFrustum(),x(E,A,V.camera,H,this.type)}V.isPointLightShadow!==!0&&this.type===Ui&&y(V,A),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,v,S)};function y(T,E){const A=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Un(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,A,f,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,A,p,_,null)}function b(T,E,A,M){let v=null;const S=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)v=S;else if(v=A.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const I=v.uuid,N=E.uuid;let P=c[I];P===void 0&&(P={},c[I]=P);let U=P[N];U===void 0&&(U=v.clone(),P[N]=U,E.addEventListener("dispose",R)),v=U}if(v.visible=E.visible,v.wireframe=E.wireframe,M===Ui?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:u[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,A.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const I=i.properties.get(v);I.light=A}return v}function x(T,E,A,M,v){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Ui)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const N=t.update(T),P=T.material;if(Array.isArray(P)){const U=N.groups;for(let B=0,H=U.length;B<H;B++){const V=U[B],$=P[V.materialIndex];if($&&$.visible){const Q=b(T,$,M,v);T.onBeforeShadow(i,T,E,A,N,Q,V),i.renderBufferDirect(A,null,N,Q,T,V),T.onAfterShadow(i,T,E,A,N,Q,V)}}}else if(P.visible){const U=b(T,P,M,v);T.onBeforeShadow(i,T,E,A,N,U,null),i.renderBufferDirect(A,null,N,U,T,null),T.onAfterShadow(i,T,E,A,N,U,null)}}const I=T.children;for(let N=0,P=I.length;N<P;N++)x(I[N],E,A,M,v)}function R(T){T.target.removeEventListener("dispose",R);for(const A in c){const M=c[A],v=T.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}const fx={[bl]:Sl,[wl]:Al,[El]:Cl,[fr]:Tl,[Sl]:bl,[Al]:wl,[Cl]:El,[Tl]:fr};function dx(i,t){function e(){let q=!1;const zt=new Ge;let lt=null;const _t=new Ge(0,0,0,0);return{setMask:function(Bt){lt!==Bt&&!q&&(i.colorMask(Bt,Bt,Bt,Bt),lt=Bt)},setLocked:function(Bt){q=Bt},setClear:function(Bt,Gt,fe,Fe,ke){ke===!0&&(Bt*=Fe,Gt*=Fe,fe*=Fe),zt.set(Bt,Gt,fe,Fe),_t.equals(zt)===!1&&(i.clearColor(Bt,Gt,fe,Fe),_t.copy(zt))},reset:function(){q=!1,lt=null,_t.set(-1,0,0,0)}}}function n(){let q=!1,zt=!1,lt=null,_t=null,Bt=null;return{setReversed:function(Gt){if(zt!==Gt){const fe=t.get("EXT_clip_control");zt?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT);const Fe=Bt;Bt=null,this.setClear(Fe)}zt=Gt},getReversed:function(){return zt},setTest:function(Gt){Gt?at(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(Gt){lt!==Gt&&!q&&(i.depthMask(Gt),lt=Gt)},setFunc:function(Gt){if(zt&&(Gt=fx[Gt]),_t!==Gt){switch(Gt){case bl:i.depthFunc(i.NEVER);break;case Sl:i.depthFunc(i.ALWAYS);break;case wl:i.depthFunc(i.LESS);break;case fr:i.depthFunc(i.LEQUAL);break;case El:i.depthFunc(i.EQUAL);break;case Tl:i.depthFunc(i.GEQUAL);break;case Al:i.depthFunc(i.GREATER);break;case Cl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=Gt}},setLocked:function(Gt){q=Gt},setClear:function(Gt){Bt!==Gt&&(zt&&(Gt=1-Gt),i.clearDepth(Gt),Bt=Gt)},reset:function(){q=!1,lt=null,_t=null,Bt=null,zt=!1}}}function s(){let q=!1,zt=null,lt=null,_t=null,Bt=null,Gt=null,fe=null,Fe=null,ke=null;return{setTest:function(we){q||(we?at(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(we){zt!==we&&!q&&(i.stencilMask(we),zt=we)},setFunc:function(we,xn,dn){(lt!==we||_t!==xn||Bt!==dn)&&(i.stencilFunc(we,xn,dn),lt=we,_t=xn,Bt=dn)},setOp:function(we,xn,dn){(Gt!==we||fe!==xn||Fe!==dn)&&(i.stencilOp(we,xn,dn),Gt=we,fe=xn,Fe=dn)},setLocked:function(we){q=we},setClear:function(we){ke!==we&&(i.clearStencil(we),ke=we)},reset:function(){q=!1,zt=null,lt=null,_t=null,Bt=null,Gt=null,fe=null,Fe=null,ke=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,y=null,b=null,x=null,R=null,T=null,E=new Pt(0,0,0),A=0,M=!1,v=null,S=null,I=null,N=null,P=null;const U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,H=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(V)[1]),B=H>=1):V.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),B=H>=2);let $=null,Q={};const st=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),Ot=new Ge().fromArray(st),W=new Ge().fromArray(Et);function Z(q,zt,lt,_t){const Bt=new Uint8Array(4),Gt=i.createTexture();i.bindTexture(q,Gt),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let fe=0;fe<lt;fe++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(zt,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,Bt):i.texImage2D(zt+fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Bt);return Gt}const ht={};ht[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(i.DEPTH_TEST),a.setFunc(fr),bt(!1),kt(ru),at(i.CULL_FACE),k(pn);function at(q){h[q]!==!0&&(i.enable(q),h[q]=!0)}function mt(q){h[q]!==!1&&(i.disable(q),h[q]=!1)}function Dt(q,zt){return u[q]!==zt?(i.bindFramebuffer(q,zt),u[q]=zt,q===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=zt),q===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=zt),!0):!1}function Ut(q,zt){let lt=p,_t=!1;if(q){lt=f.get(zt),lt===void 0&&(lt=[],f.set(zt,lt));const Bt=q.textures;if(lt.length!==Bt.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let Gt=0,fe=Bt.length;Gt<fe;Gt++)lt[Gt]=i.COLOR_ATTACHMENT0+Gt;lt.length=Bt.length,_t=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,_t=!0);_t&&i.drawBuffers(lt)}function Wt(q){return g!==q?(i.useProgram(q),g=q,!0):!1}const dt={[li]:i.FUNC_ADD,[Ed]:i.FUNC_SUBTRACT,[Td]:i.FUNC_REVERSE_SUBTRACT};dt[Ad]=i.MIN,dt[Cd]=i.MAX;const Mt={[zr]:i.ZERO,[Rd]:i.ONE,[Pd]:i.SRC_COLOR,[xl]:i.SRC_ALPHA,[Ud]:i.SRC_ALPHA_SATURATE,[yl]:i.DST_COLOR,[Ml]:i.DST_ALPHA,[Dd]:i.ONE_MINUS_SRC_COLOR,[_l]:i.ONE_MINUS_SRC_ALPHA,[Id]:i.ONE_MINUS_DST_COLOR,[Ld]:i.ONE_MINUS_DST_ALPHA,[Nd]:i.CONSTANT_COLOR,[zd]:i.ONE_MINUS_CONSTANT_COLOR,[Fd]:i.CONSTANT_ALPHA,[Od]:i.ONE_MINUS_CONSTANT_ALPHA};function k(q,zt,lt,_t,Bt,Gt,fe,Fe,ke,we){if(q===pn){_===!0&&(mt(i.BLEND),_=!1);return}if(_===!1&&(at(i.BLEND),_=!0),q!==qh){if(q!==m||we!==M){if((d!==li||x!==li)&&(i.blendEquation(i.FUNC_ADD),d=li,x=li),we)switch(q){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gi:i.blendFunc(i.ONE,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ou:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ou:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}y=null,b=null,R=null,T=null,E.set(0,0,0),A=0,m=q,M=we}return}Bt=Bt||zt,Gt=Gt||lt,fe=fe||_t,(zt!==d||Bt!==x)&&(i.blendEquationSeparate(dt[zt],dt[Bt]),d=zt,x=Bt),(lt!==y||_t!==b||Gt!==R||fe!==T)&&(i.blendFuncSeparate(Mt[lt],Mt[_t],Mt[Gt],Mt[fe]),y=lt,b=_t,R=Gt,T=fe),(Fe.equals(E)===!1||ke!==A)&&(i.blendColor(Fe.r,Fe.g,Fe.b,ke),E.copy(Fe),A=ke),m=q,M=!1}function qt(q,zt){q.side===Je?mt(i.CULL_FACE):at(i.CULL_FACE);let lt=q.side===Pn;zt&&(lt=!lt),bt(lt),q.blending===es&&q.transparent===!1?k(pn):k(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),r.setMask(q.colorWrite);const _t=q.stencilWrite;o.setTest(_t),_t&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ne(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function bt(q){v!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),v=q)}function kt(q){q!==Sd?(at(i.CULL_FACE),q!==S&&(q===ru?i.cullFace(i.BACK):q===wd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),S=q}function It(q){q!==I&&(B&&i.lineWidth(q),I=q)}function ne(q,zt,lt){q?(at(i.POLYGON_OFFSET_FILL),(N!==zt||P!==lt)&&(i.polygonOffset(zt,lt),N=zt,P=lt)):mt(i.POLYGON_OFFSET_FILL)}function Y(q){q?at(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function C(q){q===void 0&&(q=i.TEXTURE0+U-1),$!==q&&(i.activeTexture(q),$=q)}function w(q,zt,lt){lt===void 0&&($===null?lt=i.TEXTURE0+U-1:lt=$);let _t=Q[lt];_t===void 0&&(_t={type:void 0,texture:void 0},Q[lt]=_t),(_t.type!==q||_t.texture!==zt)&&($!==lt&&(i.activeTexture(lt),$=lt),i.bindTexture(q,zt||ht[q]),_t.type=q,_t.texture=zt)}function X(){const q=Q[$];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ft(){try{i.texSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function St(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ae(){try{i.texStorage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function wt(){try{i.texStorage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Yt(){try{i.texImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function oe(){try{i.texImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ce(q){Ot.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),Ot.copy(q))}function Zt(q){W.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),W.copy(q))}function ye(q,zt){let lt=c.get(zt);lt===void 0&&(lt=new WeakMap,c.set(zt,lt));let _t=lt.get(q);_t===void 0&&(_t=i.getUniformBlockIndex(zt,q.name),lt.set(q,_t))}function ue(q,zt){const _t=c.get(zt).get(q);l.get(zt)!==_t&&(i.uniformBlockBinding(zt,_t,q.__bindingPointIndex),l.set(zt,_t))}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},$=null,Q={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,y=null,b=null,x=null,R=null,T=null,E=new Pt(0,0,0),A=0,M=!1,v=null,S=null,I=null,N=null,P=null,Ot.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:mt,bindFramebuffer:Dt,drawBuffers:Ut,useProgram:Wt,setBlending:k,setMaterial:qt,setFlipSided:bt,setCullFace:kt,setLineWidth:It,setPolygonOffset:ne,setScissorTest:Y,activeTexture:C,bindTexture:w,unbindTexture:X,compressedTexImage2D:tt,compressedTexImage3D:it,texImage2D:Yt,texImage3D:oe,updateUBOMapping:ye,uniformBlockBinding:ue,texStorage2D:ae,texStorage3D:wt,texSubImage2D:rt,texSubImage3D:Ft,compressedTexSubImage2D:St,compressedTexSubImage3D:Lt,scissor:ce,viewport:Zt,reset:be}}function ih(i,t,e,n){const s=px(n);switch(e){case nf:return i*t;case rf:return i*t;case af:return i*t*2;case fo:return i*t/s.components*s.byteLength;case Pc:return i*t/s.components*s.byteLength;case of:return i*t*2/s.components*s.byteLength;case Dc:return i*t*2/s.components*s.byteLength;case sf:return i*t*3/s.components*s.byteLength;case Zn:return i*t*4/s.components*s.byteLength;case Lc:return i*t*4/s.components*s.byteLength;case ja:case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ka:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Il:case Nl:return Math.max(i,16)*Math.max(t,8)/4;case Ll:case Ul:return Math.max(i,8)*Math.max(t,8)/2;case zl:case Fl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ql:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case $l:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case jl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Kl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Jl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qa:case Ql:case tc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case lf:case ec:return Math.ceil(i/4)*Math.ceil(t/4)*8;case nc:case ic:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function px(i){switch(i){case Si:case Qh:return{byteLength:1,components:1};case Zr:case tf:case Kn:return{byteLength:2,components:1};case Cc:case Rc:return{byteLength:2,components:4};case Es:case Ac:case di:return{byteLength:4,components:1};case ef:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function mx(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,w){return p?new OffscreenCanvas(C,w):ao("canvas")}function _(C,w,X){let tt=1;const it=Y(C);if((it.width>X||it.height>X)&&(tt=X/Math.max(it.width,it.height)),tt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const rt=Math.floor(tt*it.width),Ft=Math.floor(tt*it.height);u===void 0&&(u=g(rt,Ft));const St=w?g(rt,Ft):u;return St.width=rt,St.height=Ft,St.getContext("2d").drawImage(C,0,0,rt,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+rt+"x"+Ft+")."),St}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),C;return C}function m(C){return C.generateMipmaps}function d(C){i.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(C,w,X,tt,it=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let rt=w;if(w===i.RED&&(X===i.FLOAT&&(rt=i.R32F),X===i.HALF_FLOAT&&(rt=i.R16F),X===i.UNSIGNED_BYTE&&(rt=i.R8)),w===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.R8UI),X===i.UNSIGNED_SHORT&&(rt=i.R16UI),X===i.UNSIGNED_INT&&(rt=i.R32UI),X===i.BYTE&&(rt=i.R8I),X===i.SHORT&&(rt=i.R16I),X===i.INT&&(rt=i.R32I)),w===i.RG&&(X===i.FLOAT&&(rt=i.RG32F),X===i.HALF_FLOAT&&(rt=i.RG16F),X===i.UNSIGNED_BYTE&&(rt=i.RG8)),w===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.RG8UI),X===i.UNSIGNED_SHORT&&(rt=i.RG16UI),X===i.UNSIGNED_INT&&(rt=i.RG32UI),X===i.BYTE&&(rt=i.RG8I),X===i.SHORT&&(rt=i.RG16I),X===i.INT&&(rt=i.RG32I)),w===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),X===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),X===i.UNSIGNED_INT&&(rt=i.RGB32UI),X===i.BYTE&&(rt=i.RGB8I),X===i.SHORT&&(rt=i.RGB16I),X===i.INT&&(rt=i.RGB32I)),w===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),X===i.UNSIGNED_INT&&(rt=i.RGBA32UI),X===i.BYTE&&(rt=i.RGBA8I),X===i.SHORT&&(rt=i.RGBA16I),X===i.INT&&(rt=i.RGBA32I)),w===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),w===i.RGBA){const Ft=it?po:De.getTransfer(tt);X===i.FLOAT&&(rt=i.RGBA32F),X===i.HALF_FLOAT&&(rt=i.RGBA16F),X===i.UNSIGNED_BYTE&&(rt=Ft===Oe?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function x(C,w){let X;return C?w===null||w===Es||w===Ts?X=i.DEPTH24_STENCIL8:w===di?X=i.DEPTH32F_STENCIL8:w===Zr&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Es||w===Ts?X=i.DEPTH_COMPONENT24:w===di?X=i.DEPTH_COMPONENT32F:w===Zr&&(X=i.DEPTH_COMPONENT16),X}function R(C,w){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==vn&&C.minFilter!==yi?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function T(C){const w=C.target;w.removeEventListener("dispose",T),A(w),w.isVideoTexture&&h.delete(w)}function E(C){const w=C.target;w.removeEventListener("dispose",E),v(w)}function A(C){const w=n.get(C);if(w.__webglInit===void 0)return;const X=C.source,tt=f.get(X);if(tt){const it=tt[w.__cacheKey];it.usedTimes--,it.usedTimes===0&&M(C),Object.keys(tt).length===0&&f.delete(X)}n.remove(C)}function M(C){const w=n.get(C);i.deleteTexture(w.__webglTexture);const X=C.source,tt=f.get(X);delete tt[w.__cacheKey],a.memory.textures--}function v(C){const w=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(w.__webglFramebuffer[tt]))for(let it=0;it<w.__webglFramebuffer[tt].length;it++)i.deleteFramebuffer(w.__webglFramebuffer[tt][it]);else i.deleteFramebuffer(w.__webglFramebuffer[tt]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[tt])}else{if(Array.isArray(w.__webglFramebuffer))for(let tt=0;tt<w.__webglFramebuffer.length;tt++)i.deleteFramebuffer(w.__webglFramebuffer[tt]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let tt=0;tt<w.__webglColorRenderbuffer.length;tt++)w.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[tt]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=C.textures;for(let tt=0,it=X.length;tt<it;tt++){const rt=n.get(X[tt]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(X[tt])}n.remove(C)}let S=0;function I(){S=0}function N(){const C=S;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),S+=1,C}function P(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function U(C,w){const X=n.get(C);if(C.isVideoTexture&&It(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const tt=C.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(X,C,w);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+w)}function B(C,w){const X=n.get(C);if(C.version>0&&X.__version!==C.version){W(X,C,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+w)}function H(C,w){const X=n.get(C);if(C.version>0&&X.__version!==C.version){W(X,C,w);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+w)}function V(C,w){const X=n.get(C);if(C.version>0&&X.__version!==C.version){Z(X,C,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+w)}const $={[bi]:i.REPEAT,[gs]:i.CLAMP_TO_EDGE,[Dl]:i.MIRRORED_REPEAT},Q={[vn]:i.NEAREST,[Vd]:i.NEAREST_MIPMAP_NEAREST,[da]:i.NEAREST_MIPMAP_LINEAR,[yi]:i.LINEAR,[Co]:i.LINEAR_MIPMAP_NEAREST,[vs]:i.LINEAR_MIPMAP_LINEAR},st={[qd]:i.NEVER,[Jd]:i.ALWAYS,[Yd]:i.LESS,[cf]:i.LEQUAL,[$d]:i.EQUAL,[Kd]:i.GEQUAL,[jd]:i.GREATER,[Zd]:i.NOTEQUAL};function Et(C,w){if(w.type===di&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===yi||w.magFilter===Co||w.magFilter===da||w.magFilter===vs||w.minFilter===yi||w.minFilter===Co||w.minFilter===da||w.minFilter===vs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,$[w.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,$[w.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,$[w.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Q[w.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Q[w.minFilter]),w.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,st[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===vn||w.minFilter!==da&&w.minFilter!==vs||w.type===di&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ot(C,w){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",T));const tt=w.source;let it=f.get(tt);it===void 0&&(it={},f.set(tt,it));const rt=P(w);if(rt!==C.__cacheKey){it[rt]===void 0&&(it[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),it[rt].usedTimes++;const Ft=it[C.__cacheKey];Ft!==void 0&&(it[C.__cacheKey].usedTimes--,Ft.usedTimes===0&&M(w)),C.__cacheKey=rt,C.__webglTexture=it[rt].texture}return X}function W(C,w,X){let tt=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(tt=i.TEXTURE_3D);const it=Ot(C,w),rt=w.source;e.bindTexture(tt,C.__webglTexture,i.TEXTURE0+X);const Ft=n.get(rt);if(rt.version!==Ft.__version||it===!0){e.activeTexture(i.TEXTURE0+X);const St=De.getPrimaries(De.workingColorSpace),Lt=w.colorSpace===Ki?null:De.getPrimaries(w.colorSpace),ae=w.colorSpace===Ki||St===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let wt=_(w.image,!1,s.maxTextureSize);wt=ne(w,wt);const Yt=r.convert(w.format,w.colorSpace),oe=r.convert(w.type);let ce=b(w.internalFormat,Yt,oe,w.colorSpace,w.isVideoTexture);Et(tt,w);let Zt;const ye=w.mipmaps,ue=w.isVideoTexture!==!0,be=Ft.__version===void 0||it===!0,q=rt.dataReady,zt=R(w,wt);if(w.isDepthTexture)ce=x(w.format===As,w.type),be&&(ue?e.texStorage2D(i.TEXTURE_2D,1,ce,wt.width,wt.height):e.texImage2D(i.TEXTURE_2D,0,ce,wt.width,wt.height,0,Yt,oe,null));else if(w.isDataTexture)if(ye.length>0){ue&&be&&e.texStorage2D(i.TEXTURE_2D,zt,ce,ye[0].width,ye[0].height);for(let lt=0,_t=ye.length;lt<_t;lt++)Zt=ye[lt],ue?q&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Zt.width,Zt.height,Yt,oe,Zt.data):e.texImage2D(i.TEXTURE_2D,lt,ce,Zt.width,Zt.height,0,Yt,oe,Zt.data);w.generateMipmaps=!1}else ue?(be&&e.texStorage2D(i.TEXTURE_2D,zt,ce,wt.width,wt.height),q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt.width,wt.height,Yt,oe,wt.data)):e.texImage2D(i.TEXTURE_2D,0,ce,wt.width,wt.height,0,Yt,oe,wt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ue&&be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,ce,ye[0].width,ye[0].height,wt.depth);for(let lt=0,_t=ye.length;lt<_t;lt++)if(Zt=ye[lt],w.format!==Zn)if(Yt!==null)if(ue){if(q)if(w.layerUpdates.size>0){const Bt=ih(Zt.width,Zt.height,w.format,w.type);for(const Gt of w.layerUpdates){const fe=Zt.data.subarray(Gt*Bt/Zt.data.BYTES_PER_ELEMENT,(Gt+1)*Bt/Zt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,Gt,Zt.width,Zt.height,1,Yt,fe)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Zt.width,Zt.height,wt.depth,Yt,Zt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,ce,Zt.width,Zt.height,wt.depth,0,Zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Zt.width,Zt.height,wt.depth,Yt,oe,Zt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,ce,Zt.width,Zt.height,wt.depth,0,Yt,oe,Zt.data)}else{ue&&be&&e.texStorage2D(i.TEXTURE_2D,zt,ce,ye[0].width,ye[0].height);for(let lt=0,_t=ye.length;lt<_t;lt++)Zt=ye[lt],w.format!==Zn?Yt!==null?ue?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,Zt.width,Zt.height,Yt,Zt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,ce,Zt.width,Zt.height,0,Zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?q&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Zt.width,Zt.height,Yt,oe,Zt.data):e.texImage2D(i.TEXTURE_2D,lt,ce,Zt.width,Zt.height,0,Yt,oe,Zt.data)}else if(w.isDataArrayTexture)if(ue){if(be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,ce,wt.width,wt.height,wt.depth),q)if(w.layerUpdates.size>0){const lt=ih(wt.width,wt.height,w.format,w.type);for(const _t of w.layerUpdates){const Bt=wt.data.subarray(_t*lt/wt.data.BYTES_PER_ELEMENT,(_t+1)*lt/wt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,wt.width,wt.height,1,Yt,oe,Bt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Yt,oe,wt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,wt.width,wt.height,wt.depth,0,Yt,oe,wt.data);else if(w.isData3DTexture)ue?(be&&e.texStorage3D(i.TEXTURE_3D,zt,ce,wt.width,wt.height,wt.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Yt,oe,wt.data)):e.texImage3D(i.TEXTURE_3D,0,ce,wt.width,wt.height,wt.depth,0,Yt,oe,wt.data);else if(w.isFramebufferTexture){if(be)if(ue)e.texStorage2D(i.TEXTURE_2D,zt,ce,wt.width,wt.height);else{let lt=wt.width,_t=wt.height;for(let Bt=0;Bt<zt;Bt++)e.texImage2D(i.TEXTURE_2D,Bt,ce,lt,_t,0,Yt,oe,null),lt>>=1,_t>>=1}}else if(ye.length>0){if(ue&&be){const lt=Y(ye[0]);e.texStorage2D(i.TEXTURE_2D,zt,ce,lt.width,lt.height)}for(let lt=0,_t=ye.length;lt<_t;lt++)Zt=ye[lt],ue?q&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Yt,oe,Zt):e.texImage2D(i.TEXTURE_2D,lt,ce,Yt,oe,Zt);w.generateMipmaps=!1}else if(ue){if(be){const lt=Y(wt);e.texStorage2D(i.TEXTURE_2D,zt,ce,lt.width,lt.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Yt,oe,wt)}else e.texImage2D(i.TEXTURE_2D,0,ce,Yt,oe,wt);m(w)&&d(tt),Ft.__version=rt.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Z(C,w,X){if(w.image.length!==6)return;const tt=Ot(C,w),it=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+X);const rt=n.get(it);if(it.version!==rt.__version||tt===!0){e.activeTexture(i.TEXTURE0+X);const Ft=De.getPrimaries(De.workingColorSpace),St=w.colorSpace===Ki?null:De.getPrimaries(w.colorSpace),Lt=w.colorSpace===Ki||Ft===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const ae=w.isCompressedTexture||w.image[0].isCompressedTexture,wt=w.image[0]&&w.image[0].isDataTexture,Yt=[];for(let _t=0;_t<6;_t++)!ae&&!wt?Yt[_t]=_(w.image[_t],!0,s.maxCubemapSize):Yt[_t]=wt?w.image[_t].image:w.image[_t],Yt[_t]=ne(w,Yt[_t]);const oe=Yt[0],ce=r.convert(w.format,w.colorSpace),Zt=r.convert(w.type),ye=b(w.internalFormat,ce,Zt,w.colorSpace),ue=w.isVideoTexture!==!0,be=rt.__version===void 0||tt===!0,q=it.dataReady;let zt=R(w,oe);Et(i.TEXTURE_CUBE_MAP,w);let lt;if(ae){ue&&be&&e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,ye,oe.width,oe.height);for(let _t=0;_t<6;_t++){lt=Yt[_t].mipmaps;for(let Bt=0;Bt<lt.length;Bt++){const Gt=lt[Bt];w.format!==Zn?ce!==null?ue?q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,0,0,Gt.width,Gt.height,ce,Gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,ye,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,0,0,Gt.width,Gt.height,ce,Zt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,ye,Gt.width,Gt.height,0,ce,Zt,Gt.data)}}}else{if(lt=w.mipmaps,ue&&be){lt.length>0&&zt++;const _t=Y(Yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,ye,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(wt){ue?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Yt[_t].width,Yt[_t].height,ce,Zt,Yt[_t].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ye,Yt[_t].width,Yt[_t].height,0,ce,Zt,Yt[_t].data);for(let Bt=0;Bt<lt.length;Bt++){const fe=lt[Bt].image[_t].image;ue?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,0,0,fe.width,fe.height,ce,Zt,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,ye,fe.width,fe.height,0,ce,Zt,fe.data)}}else{ue?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,ce,Zt,Yt[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ye,ce,Zt,Yt[_t]);for(let Bt=0;Bt<lt.length;Bt++){const Gt=lt[Bt];ue?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,0,0,ce,Zt,Gt.image[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,ye,ce,Zt,Gt.image[_t])}}}m(w)&&d(i.TEXTURE_CUBE_MAP),rt.__version=it.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ht(C,w,X,tt,it,rt){const Ft=r.convert(X.format,X.colorSpace),St=r.convert(X.type),Lt=b(X.internalFormat,Ft,St,X.colorSpace),ae=n.get(w),wt=n.get(X);if(wt.__renderTarget=w,!ae.__hasExternalTextures){const Yt=Math.max(1,w.width>>rt),oe=Math.max(1,w.height>>rt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,rt,Lt,Yt,oe,w.depth,0,Ft,St,null):e.texImage2D(it,rt,Lt,Yt,oe,0,Ft,St,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),kt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,it,wt.__webglTexture,0,bt(w)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,it,wt.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(C,w,X){if(i.bindRenderbuffer(i.RENDERBUFFER,C),w.depthBuffer){const tt=w.depthTexture,it=tt&&tt.isDepthTexture?tt.type:null,rt=x(w.stencilBuffer,it),Ft=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=bt(w);kt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St,rt,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,St,rt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,rt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,C)}else{const tt=w.textures;for(let it=0;it<tt.length;it++){const rt=tt[it],Ft=r.convert(rt.format,rt.colorSpace),St=r.convert(rt.type),Lt=b(rt.internalFormat,Ft,St,rt.colorSpace),ae=bt(w);X&&kt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,Lt,w.width,w.height):kt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,Lt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(w.depthTexture);tt.__renderTarget=w,(!tt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),U(w.depthTexture,0);const it=tt.__webglTexture,rt=bt(w);if(w.depthTexture.format===sr)kt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(w.depthTexture.format===As)kt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Dt(C){const w=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const tt=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),tt){const it=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,tt.removeEventListener("dispose",it)};tt.addEventListener("dispose",it),w.__depthDisposeCallback=it}w.__boundDepthTexture=tt}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");mt(w.__webglFramebuffer,C)}else if(X){w.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[tt]),w.__webglDepthbuffer[tt]===void 0)w.__webglDepthbuffer[tt]=i.createRenderbuffer(),at(w.__webglDepthbuffer[tt],C,!1);else{const it=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=w.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),at(w.__webglDepthbuffer,C,!1);else{const tt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(C,w,X){const tt=n.get(C);w!==void 0&&ht(tt.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Dt(C)}function Wt(C){const w=C.texture,X=n.get(C),tt=n.get(w);C.addEventListener("dispose",E);const it=C.textures,rt=C.isWebGLCubeRenderTarget===!0,Ft=it.length>1;if(Ft||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=w.version,a.memory.textures++),rt){X.__webglFramebuffer=[];for(let St=0;St<6;St++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[St]=[];for(let Lt=0;Lt<w.mipmaps.length;Lt++)X.__webglFramebuffer[St][Lt]=i.createFramebuffer()}else X.__webglFramebuffer[St]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let St=0;St<w.mipmaps.length;St++)X.__webglFramebuffer[St]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let St=0,Lt=it.length;St<Lt;St++){const ae=n.get(it[St]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&kt(C)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let St=0;St<it.length;St++){const Lt=it[St];X.__webglColorRenderbuffer[St]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[St]);const ae=r.convert(Lt.format,Lt.colorSpace),wt=r.convert(Lt.type),Yt=b(Lt.internalFormat,ae,wt,Lt.colorSpace,C.isXRRenderTarget===!0),oe=bt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Yt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,X.__webglColorRenderbuffer[St])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),at(X.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Et(i.TEXTURE_CUBE_MAP,w);for(let St=0;St<6;St++)if(w.mipmaps&&w.mipmaps.length>0)for(let Lt=0;Lt<w.mipmaps.length;Lt++)ht(X.__webglFramebuffer[St][Lt],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Lt);else ht(X.__webglFramebuffer[St],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);m(w)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let St=0,Lt=it.length;St<Lt;St++){const ae=it[St],wt=n.get(ae);e.bindTexture(i.TEXTURE_2D,wt.__webglTexture),Et(i.TEXTURE_2D,ae),ht(X.__webglFramebuffer,C,ae,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,0),m(ae)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let St=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(St=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,tt.__webglTexture),Et(St,w),w.mipmaps&&w.mipmaps.length>0)for(let Lt=0;Lt<w.mipmaps.length;Lt++)ht(X.__webglFramebuffer[Lt],C,w,i.COLOR_ATTACHMENT0,St,Lt);else ht(X.__webglFramebuffer,C,w,i.COLOR_ATTACHMENT0,St,0);m(w)&&d(St),e.unbindTexture()}C.depthBuffer&&Dt(C)}function dt(C){const w=C.textures;for(let X=0,tt=w.length;X<tt;X++){const it=w[X];if(m(it)){const rt=y(C),Ft=n.get(it).__webglTexture;e.bindTexture(rt,Ft),d(rt),e.unbindTexture()}}}const Mt=[],k=[];function qt(C){if(C.samples>0){if(kt(C)===!1){const w=C.textures,X=C.width,tt=C.height;let it=i.COLOR_BUFFER_BIT;const rt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=n.get(C),St=w.length>1;if(St)for(let Lt=0;Lt<w.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Lt=0;Lt<w.length;Lt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),St){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Lt]);const ae=n.get(w[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,X,tt,0,0,X,tt,it,i.NEAREST),l===!0&&(Mt.length=0,k.length=0,Mt.push(i.COLOR_ATTACHMENT0+Lt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Mt.push(rt),k.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),St)for(let Lt=0;Lt<w.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Lt]);const ae=n.get(w[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,ae,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const w=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function bt(C){return Math.min(s.maxSamples,C.samples)}function kt(C){const w=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function It(C){const w=a.render.frame;h.get(C)!==w&&(h.set(C,w),C.update())}function ne(C,w){const X=C.colorSpace,tt=C.format,it=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==yr&&X!==Ki&&(De.getTransfer(X)===Oe?(tt!==Zn||it!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function Y(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=U,this.setTexture2DArray=B,this.setTexture3D=H,this.setTextureCube=V,this.rebindTextures=Ut,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=kt}function gx(i,t){function e(n,s=Ki){let r;const a=De.getTransfer(s);if(n===Si)return i.UNSIGNED_BYTE;if(n===Cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ef)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qh)return i.BYTE;if(n===tf)return i.SHORT;if(n===Zr)return i.UNSIGNED_SHORT;if(n===Ac)return i.INT;if(n===Es)return i.UNSIGNED_INT;if(n===di)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===nf)return i.ALPHA;if(n===sf)return i.RGB;if(n===Zn)return i.RGBA;if(n===rf)return i.LUMINANCE;if(n===af)return i.LUMINANCE_ALPHA;if(n===sr)return i.DEPTH_COMPONENT;if(n===As)return i.DEPTH_STENCIL;if(n===fo)return i.RED;if(n===Pc)return i.RED_INTEGER;if(n===of)return i.RG;if(n===Dc)return i.RG_INTEGER;if(n===Lc)return i.RGBA_INTEGER;if(n===ja||n===Za||n===Ka||n===Ja)if(a===Oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ll||n===Il||n===Ul||n===Nl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zl||n===Fl||n===Ol)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zl||n===Fl)return a===Oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ol)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kl||n===Bl||n===Gl||n===Vl||n===Hl||n===Wl||n===Xl||n===ql||n===Yl||n===$l||n===jl||n===Zl||n===Kl||n===Jl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ql)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$l)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qa||n===Ql||n===tc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Qa)return a===Oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lf||n===ec||n===nc||n===ic)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class vx extends Bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _e extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xx={type:"move"};class el{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new _e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const _x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mx=`
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

}`;class yx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Sn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new $e({vertexShader:_x,fragmentShader:Mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new Jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bx extends br{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const _=new yx,m=e.getContextAttributes();let d=null,y=null;const b=[],x=[],R=new At;let T=null;const E=new Bn;E.viewport=new Ge;const A=new Bn;A.viewport=new Ge;const M=[E,A],v=new vx;let S=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=b[W];return Z===void 0&&(Z=new el,b[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=b[W];return Z===void 0&&(Z=new el,b[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=b[W];return Z===void 0&&(Z=new el,b[W]=Z),Z.getHandSpace()};function N(W){const Z=x.indexOf(W.inputSource);if(Z===-1)return;const ht=b[Z];ht!==void 0&&(ht.update(W.inputSource,W.frame,c||a),ht.dispatchEvent({type:W.type,data:W.inputSource}))}function P(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",U);for(let W=0;W<b.length;W++){const Z=x[W];Z!==null&&(x[W]=null,b[W].disconnect(Z))}S=null,I=null,_.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,y=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",P),s.addEventListener("inputsourceschange",U),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Un(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,ht=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=m.stencil?As:sr,ht=m.stencil?Ts:Es);const mt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(mt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Un(f.textureWidth,f.textureHeight,{format:Zn,type:Si,depthTexture:new Bc(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ot.setContext(s),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function U(W){for(let Z=0;Z<W.removed.length;Z++){const ht=W.removed[Z],at=x.indexOf(ht);at>=0&&(x[at]=null,b[at].disconnect(ht))}for(let Z=0;Z<W.added.length;Z++){const ht=W.added[Z];let at=x.indexOf(ht);if(at===-1){for(let Dt=0;Dt<b.length;Dt++)if(Dt>=x.length){x.push(ht),at=Dt;break}else if(x[Dt]===null){x[Dt]=ht,at=Dt;break}if(at===-1)break}const mt=b[at];mt&&mt.connect(ht)}}const B=new G,H=new G;function V(W,Z,ht){B.setFromMatrixPosition(Z.matrixWorld),H.setFromMatrixPosition(ht.matrixWorld);const at=B.distanceTo(H),mt=Z.projectionMatrix.elements,Dt=ht.projectionMatrix.elements,Ut=mt[14]/(mt[10]-1),Wt=mt[14]/(mt[10]+1),dt=(mt[9]+1)/mt[5],Mt=(mt[9]-1)/mt[5],k=(mt[8]-1)/mt[0],qt=(Dt[8]+1)/Dt[0],bt=Ut*k,kt=Ut*qt,It=at/(-k+qt),ne=It*-k;if(Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ne),W.translateZ(It),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),mt[10]===-1)W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Y=Ut+It,C=Wt+It,w=bt-ne,X=kt+(at-ne),tt=dt*Wt/C*Y,it=Mt*Wt/C*Y;W.projectionMatrix.makePerspective(w,X,tt,it,Y,C),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function $(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let Z=W.near,ht=W.far;_.texture!==null&&(_.depthNear>0&&(Z=_.depthNear),_.depthFar>0&&(ht=_.depthFar)),v.near=A.near=E.near=Z,v.far=A.far=E.far=ht,(S!==v.near||I!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,I=v.far),E.layers.mask=W.layers.mask|2,A.layers.mask=W.layers.mask|4,v.layers.mask=E.layers.mask|A.layers.mask;const at=W.parent,mt=v.cameras;$(v,at);for(let Dt=0;Dt<mt.length;Dt++)$(mt[Dt],at);mt.length===2?V(v,E,A):v.projectionMatrix.copy(E.projectionMatrix),Q(W,v,at)};function Q(W,Z,ht){ht===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(ht.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Kr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let st=null;function Et(W,Z){if(h=Z.getViewerPose(c||a),g=Z,h!==null){const ht=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let at=!1;ht.length!==v.cameras.length&&(v.cameras.length=0,at=!0);for(let Dt=0;Dt<ht.length;Dt++){const Ut=ht[Dt];let Wt=null;if(p!==null)Wt=p.getViewport(Ut);else{const Mt=u.getViewSubImage(f,Ut);Wt=Mt.viewport,Dt===0&&(t.setRenderTargetTextures(y,Mt.colorTexture,f.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(y))}let dt=M[Dt];dt===void 0&&(dt=new Bn,dt.layers.enable(Dt),dt.viewport=new Ge,M[Dt]=dt),dt.matrix.fromArray(Ut.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(Ut.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),Dt===0&&(v.matrix.copy(dt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),at===!0&&v.cameras.push(dt)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")){const Dt=u.getDepthInformation(ht[0]);Dt&&Dt.isValid&&Dt.texture&&_.init(t,Dt,s.renderState)}}for(let ht=0;ht<b.length;ht++){const at=x[ht],mt=b[ht];at!==null&&mt!==void 0&&mt.update(at,Z,c||a)}st&&st(W,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ot=new _f;Ot.setAnimationLoop(Et),this.setAnimationLoop=function(W){st=W},this.dispose=function(){}}}const us=new wi,Sx=new Ie;function wx(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,gf(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,b,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,y,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Pn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Pn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=t.get(d),b=y.envMap,x=y.envMapRotation;b&&(m.envMap.value=b,us.copy(x),us.x*=-1,us.y*=-1,us.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),m.envMapRotation.value.setFromMatrix4(Sx.makeRotationFromEuler(us)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=b*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const y=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ex(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const x=b.program;n.uniformBlockBinding(y,x)}function c(y,b){let x=s[y.id];x===void 0&&(g(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",m));const R=b.program;n.updateUBOMapping(y,R);const T=t.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function h(y){const b=u();y.__bindingPointIndex=b;const x=i.createBuffer(),R=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,x),x}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const b=s[y.id],x=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,E=x.length;T<E;T++){const A=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,v=A.length;M<v;M++){const S=A[M];if(p(S,T,M,R)===!0){const I=S.__offset,N=Array.isArray(S.value)?S.value:[S.value];let P=0;for(let U=0;U<N.length;U++){const B=N[U],H=_(B);typeof B=="number"||typeof B=="boolean"?(S.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,I+P,S.__data)):B.isMatrix3?(S.__data[0]=B.elements[0],S.__data[1]=B.elements[1],S.__data[2]=B.elements[2],S.__data[3]=0,S.__data[4]=B.elements[3],S.__data[5]=B.elements[4],S.__data[6]=B.elements[5],S.__data[7]=0,S.__data[8]=B.elements[6],S.__data[9]=B.elements[7],S.__data[10]=B.elements[8],S.__data[11]=0):(B.toArray(S.__data,P),P+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,b,x,R){const T=y.value,E=b+"_"+x;if(R[E]===void 0)return typeof T=="number"||typeof T=="boolean"?R[E]=T:R[E]=T.clone(),!0;{const A=R[E];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return R[E]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function g(y){const b=y.uniforms;let x=0;const R=16;for(let E=0,A=b.length;E<A;E++){const M=Array.isArray(b[E])?b[E]:[b[E]];for(let v=0,S=M.length;v<S;v++){const I=M[v],N=Array.isArray(I.value)?I.value:[I.value];for(let P=0,U=N.length;P<U;P++){const B=N[P],H=_(B),V=x%R,$=V%H.boundary,Q=V+$;x+=$,Q!==0&&R-Q<H.storage&&(x+=R-Q),I.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=H.storage}}}const T=x%R;return T>0&&(x+=R-T),y.__size=x,y.__cache={},this}function _(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const x=a.indexOf(b.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Tx{constructor(t={}){const{canvas:e=mp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const y=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=ns,this.toneMappingExposure=1;const x=this;let R=!1,T=0,E=0,A=null,M=-1,v=null;const S=new Ge,I=new Ge;let N=null;const P=new Pt(0);let U=0,B=e.width,H=e.height,V=1,$=null,Q=null;const st=new Ge(0,0,B,H),Et=new Ge(0,0,B,H);let Ot=!1;const W=new Fc;let Z=!1,ht=!1;const at=new Ie,mt=new Ie,Dt=new G,Ut=new Ge,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Mt(){return A===null?V:1}let k=n;function qt(D,K){return e.getContext(D,K)}try{const D={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wc}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Bt,!1),e.addEventListener("webglcontextcreationerror",Gt,!1),k===null){const K="webgl2";if(k=qt(K,D),k===null)throw qt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let bt,kt,It,ne,Y,C,w,X,tt,it,rt,Ft,St,Lt,ae,wt,Yt,oe,ce,Zt,ye,ue,be,q;function zt(){bt=new Dg(k),bt.init(),ue=new gx(k,bt),kt=new Eg(k,bt,t,ue),It=new dx(k,bt),kt.reverseDepthBuffer&&f&&It.buffers.depth.setReversed(!0),ne=new Ug(k),Y=new Jv,C=new mx(k,bt,It,Y,kt,ue,ne),w=new Ag(x),X=new Pg(x),tt=new Gp(k),be=new Sg(k,tt),it=new Lg(k,tt,ne,be),rt=new zg(k,it,tt,ne),ce=new Ng(k,kt,C),wt=new Tg(Y),Ft=new Kv(x,w,X,bt,kt,be,wt),St=new wx(x,Y),Lt=new tx,ae=new ax(bt),oe=new bg(x,w,X,It,rt,p,l),Yt=new hx(x,rt,kt),q=new Ex(k,ne,kt,It),Zt=new wg(k,bt,ne),ye=new Ig(k,bt,ne),ne.programs=Ft.programs,x.capabilities=kt,x.extensions=bt,x.properties=Y,x.renderLists=Lt,x.shadowMap=Yt,x.state=It,x.info=ne}zt();const lt=new bx(x,k);this.xr=lt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const D=bt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=bt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(D){D!==void 0&&(V=D,this.setSize(B,H,!1))},this.getSize=function(D){return D.set(B,H)},this.setSize=function(D,K,ot=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=D,H=K,e.width=Math.floor(D*V),e.height=Math.floor(K*V),ot===!0&&(e.style.width=D+"px",e.style.height=K+"px"),this.setViewport(0,0,D,K)},this.getDrawingBufferSize=function(D){return D.set(B*V,H*V).floor()},this.setDrawingBufferSize=function(D,K,ot){B=D,H=K,V=ot,e.width=Math.floor(D*ot),e.height=Math.floor(K*ot),this.setViewport(0,0,D,K)},this.getCurrentViewport=function(D){return D.copy(S)},this.getViewport=function(D){return D.copy(st)},this.setViewport=function(D,K,ot,ct){D.isVector4?st.set(D.x,D.y,D.z,D.w):st.set(D,K,ot,ct),It.viewport(S.copy(st).multiplyScalar(V).round())},this.getScissor=function(D){return D.copy(Et)},this.setScissor=function(D,K,ot,ct){D.isVector4?Et.set(D.x,D.y,D.z,D.w):Et.set(D,K,ot,ct),It.scissor(I.copy(Et).multiplyScalar(V).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(D){It.setScissorTest(Ot=D)},this.setOpaqueSort=function(D){$=D},this.setTransparentSort=function(D){Q=D},this.getClearColor=function(D){return D.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(D=!0,K=!0,ot=!0){let ct=0;if(D){let j=!1;if(A!==null){const Nt=A.texture.format;j=Nt===Lc||Nt===Dc||Nt===Pc}if(j){const Nt=A.texture.type,$t=Nt===Si||Nt===Es||Nt===Zr||Nt===Ts||Nt===Cc||Nt===Rc,ie=oe.getClearColor(),se=oe.getClearAlpha(),ve=ie.r,z=ie.g,O=ie.b;$t?(g[0]=ve,g[1]=z,g[2]=O,g[3]=se,k.clearBufferuiv(k.COLOR,0,g)):(_[0]=ve,_[1]=z,_[2]=O,_[3]=se,k.clearBufferiv(k.COLOR,0,_))}else ct|=k.COLOR_BUFFER_BIT}K&&(ct|=k.DEPTH_BUFFER_BIT),ot&&(ct|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Bt,!1),e.removeEventListener("webglcontextcreationerror",Gt,!1),Lt.dispose(),ae.dispose(),Y.dispose(),w.dispose(),X.dispose(),rt.dispose(),be.dispose(),q.dispose(),Ft.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Qn),lt.removeEventListener("sessionend",F),xt.stop()};function _t(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const D=ne.autoReset,K=Yt.enabled,ot=Yt.autoUpdate,ct=Yt.needsUpdate,j=Yt.type;zt(),ne.autoReset=D,Yt.enabled=K,Yt.autoUpdate=ot,Yt.needsUpdate=ct,Yt.type=j}function Gt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function fe(D){const K=D.target;K.removeEventListener("dispose",fe),Fe(K)}function Fe(D){ke(D),Y.remove(D)}function ke(D){const K=Y.get(D).programs;K!==void 0&&(K.forEach(function(ot){Ft.releaseProgram(ot)}),D.isShaderMaterial&&Ft.releaseShaderCache(D))}this.renderBufferDirect=function(D,K,ot,ct,j,Nt){K===null&&(K=Wt);const $t=j.isMesh&&j.matrixWorld.determinant()<0,ie=rn(D,K,ot,ct,j);It.setMaterial(ct,$t);let se=ot.index,ve=1;if(ct.wireframe===!0){if(se=it.getWireframeAttribute(ot),se===void 0)return;ve=2}const z=ot.drawRange,O=ot.attributes.position;let et=z.start*ve,pt=(z.start+z.count)*ve;Nt!==null&&(et=Math.max(et,Nt.start*ve),pt=Math.min(pt,(Nt.start+Nt.count)*ve)),se!==null?(et=Math.max(et,0),pt=Math.min(pt,se.count)):O!=null&&(et=Math.max(et,0),pt=Math.min(pt,O.count));const yt=pt-et;if(yt<0||yt===1/0)return;be.setup(j,ct,ie,ot,se);let Rt,Tt=Zt;if(se!==null&&(Rt=tt.get(se),Tt=ye,Tt.setIndex(Rt)),j.isMesh)ct.wireframe===!0?(It.setLineWidth(ct.wireframeLinewidth*Mt()),Tt.setMode(k.LINES)):Tt.setMode(k.TRIANGLES);else if(j.isLine){let nt=ct.linewidth;nt===void 0&&(nt=1),It.setLineWidth(nt*Mt()),j.isLineSegments?Tt.setMode(k.LINES):j.isLineLoop?Tt.setMode(k.LINE_LOOP):Tt.setMode(k.LINE_STRIP)}else j.isPoints?Tt.setMode(k.POINTS):j.isSprite&&Tt.setMode(k.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Tt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(bt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const nt=j._multiDrawStarts,Xt=j._multiDrawCounts,Vt=j._multiDrawCount,de=se?tt.get(se).bytesPerElement:1,Ce=Y.get(ct).currentProgram.getUniforms();for(let Pe=0;Pe<Vt;Pe++)Ce.setValue(k,"_gl_DrawID",Pe),Tt.render(nt[Pe]/de,Xt[Pe])}else if(j.isInstancedMesh)Tt.renderInstances(et,yt,j.count);else if(ot.isInstancedBufferGeometry){const nt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Xt=Math.min(ot.instanceCount,nt);Tt.renderInstances(et,yt,Xt)}else Tt.render(et,yt)};function we(D,K,ot){D.transparent===!0&&D.side===Je&&D.forceSinglePass===!1?(D.side=Pn,D.needsUpdate=!0,re(D,K,ot),D.side=is,D.needsUpdate=!0,re(D,K,ot),D.side=Je):re(D,K,ot)}this.compile=function(D,K,ot=null){ot===null&&(ot=D),d=ae.get(ot),d.init(K),b.push(d),ot.traverseVisible(function(j){j.isLight&&j.layers.test(K.layers)&&(d.pushLight(j),j.castShadow&&d.pushShadow(j))}),D!==ot&&D.traverseVisible(function(j){j.isLight&&j.layers.test(K.layers)&&(d.pushLight(j),j.castShadow&&d.pushShadow(j))}),d.setupLights();const ct=new Set;return D.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Nt=j.material;if(Nt)if(Array.isArray(Nt))for(let $t=0;$t<Nt.length;$t++){const ie=Nt[$t];we(ie,ot,j),ct.add(ie)}else we(Nt,ot,j),ct.add(Nt)}),b.pop(),d=null,ct},this.compileAsync=function(D,K,ot=null){const ct=this.compile(D,K,ot);return new Promise(j=>{function Nt(){if(ct.forEach(function($t){Y.get($t).currentProgram.isReady()&&ct.delete($t)}),ct.size===0){j(D);return}setTimeout(Nt,10)}bt.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let xn=null;function dn(D){xn&&xn(D)}function Qn(){xt.stop()}function F(){xt.start()}const xt=new _f;xt.setAnimationLoop(dn),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(D){xn=D,lt.setAnimationLoop(D),D===null?xt.stop():xt.start()},lt.addEventListener("sessionstart",Qn),lt.addEventListener("sessionend",F),this.render=function(D,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(K),K=lt.getCamera()),D.isScene===!0&&D.onBeforeRender(x,D,K,A),d=ae.get(D,b.length),d.init(K),b.push(d),mt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),W.setFromProjectionMatrix(mt),ht=this.localClippingEnabled,Z=wt.init(this.clippingPlanes,ht),m=Lt.get(D,y.length),m.init(),y.push(m),lt.enabled===!0&&lt.isPresenting===!0){const Nt=x.xr.getDepthSensingMesh();Nt!==null&&ut(Nt,K,-1/0,x.sortObjects)}ut(D,K,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort($,Q),dt=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,dt&&oe.addToRenderList(m,D),this.info.render.frame++,Z===!0&&wt.beginShadows();const ot=d.state.shadowsArray;Yt.render(ot,D,K),Z===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=m.opaque,j=m.transmissive;if(d.setupLights(),K.isArrayCamera){const Nt=K.cameras;if(j.length>0)for(let $t=0,ie=Nt.length;$t<ie;$t++){const se=Nt[$t];te(ct,j,D,se)}dt&&oe.render(D);for(let $t=0,ie=Nt.length;$t<ie;$t++){const se=Nt[$t];Kt(m,D,se,se.viewport)}}else j.length>0&&te(ct,j,D,K),dt&&oe.render(D),Kt(m,D,K);A!==null&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),D.isScene===!0&&D.onAfterRender(x,D,K),be.resetDefaultState(),M=-1,v=null,b.pop(),b.length>0?(d=b[b.length-1],Z===!0&&wt.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function ut(D,K,ot,ct){if(D.visible===!1)return;if(D.layers.test(K.layers)){if(D.isGroup)ot=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(K);else if(D.isLight)d.pushLight(D),D.castShadow&&d.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||W.intersectsSprite(D)){ct&&Ut.setFromMatrixPosition(D.matrixWorld).applyMatrix4(mt);const $t=rt.update(D),ie=D.material;ie.visible&&m.push(D,$t,ie,ot,Ut.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||W.intersectsObject(D))){const $t=rt.update(D),ie=D.material;if(ct&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Ut.copy(D.boundingSphere.center)):($t.boundingSphere===null&&$t.computeBoundingSphere(),Ut.copy($t.boundingSphere.center)),Ut.applyMatrix4(D.matrixWorld).applyMatrix4(mt)),Array.isArray(ie)){const se=$t.groups;for(let ve=0,z=se.length;ve<z;ve++){const O=se[ve],et=ie[O.materialIndex];et&&et.visible&&m.push(D,$t,et,ot,Ut.z,O)}}else ie.visible&&m.push(D,$t,ie,ot,Ut.z,null)}}const Nt=D.children;for(let $t=0,ie=Nt.length;$t<ie;$t++)ut(Nt[$t],K,ot,ct)}function Kt(D,K,ot,ct){const j=D.opaque,Nt=D.transmissive,$t=D.transparent;d.setupLightsView(ot),Z===!0&&wt.setGlobalState(x.clippingPlanes,ot),ct&&It.viewport(S.copy(ct)),j.length>0&&Ct(j,K,ot),Nt.length>0&&Ct(Nt,K,ot),$t.length>0&&Ct($t,K,ot),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function te(D,K,ot,ct){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ct.id]===void 0&&(d.state.transmissionRenderTarget[ct.id]=new Un(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float")?Kn:Si,minFilter:vs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const Nt=d.state.transmissionRenderTarget[ct.id],$t=ct.viewport||S;Nt.setSize($t.z,$t.w);const ie=x.getRenderTarget();x.setRenderTarget(Nt),x.getClearColor(P),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear(),dt&&oe.render(ot);const se=x.toneMapping;x.toneMapping=ns;const ve=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),d.setupLightsView(ct),Z===!0&&wt.setGlobalState(x.clippingPlanes,ct),Ct(D,ot,ct),C.updateMultisampleRenderTarget(Nt),C.updateRenderTargetMipmap(Nt),bt.has("WEBGL_multisampled_render_to_texture")===!1){let z=!1;for(let O=0,et=K.length;O<et;O++){const pt=K[O],yt=pt.object,Rt=pt.geometry,Tt=pt.material,nt=pt.group;if(Tt.side===Je&&yt.layers.test(ct.layers)){const Xt=Tt.side;Tt.side=Pn,Tt.needsUpdate=!0,Jt(yt,ot,ct,Rt,Tt,nt),Tt.side=Xt,Tt.needsUpdate=!0,z=!0}}z===!0&&(C.updateMultisampleRenderTarget(Nt),C.updateRenderTargetMipmap(Nt))}x.setRenderTarget(ie),x.setClearColor(P,U),ve!==void 0&&(ct.viewport=ve),x.toneMapping=se}function Ct(D,K,ot){const ct=K.isScene===!0?K.overrideMaterial:null;for(let j=0,Nt=D.length;j<Nt;j++){const $t=D[j],ie=$t.object,se=$t.geometry,ve=ct===null?$t.material:ct,z=$t.group;ie.layers.test(ot.layers)&&Jt(ie,K,ot,se,ve,z)}}function Jt(D,K,ot,ct,j,Nt){D.onBeforeRender(x,K,ot,ct,j,Nt),D.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),j.onBeforeRender(x,K,ot,ct,D,Nt),j.transparent===!0&&j.side===Je&&j.forceSinglePass===!1?(j.side=Pn,j.needsUpdate=!0,x.renderBufferDirect(ot,K,ct,j,D,Nt),j.side=is,j.needsUpdate=!0,x.renderBufferDirect(ot,K,ct,j,D,Nt),j.side=Je):x.renderBufferDirect(ot,K,ct,j,D,Nt),D.onAfterRender(x,K,ot,ct,j,Nt)}function re(D,K,ot){K.isScene!==!0&&(K=Wt);const ct=Y.get(D),j=d.state.lights,Nt=d.state.shadowsArray,$t=j.state.version,ie=Ft.getParameters(D,j.state,Nt,K,ot),se=Ft.getProgramCacheKey(ie);let ve=ct.programs;ct.environment=D.isMeshStandardMaterial?K.environment:null,ct.fog=K.fog,ct.envMap=(D.isMeshStandardMaterial?X:w).get(D.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&D.envMap===null?K.environmentRotation:D.envMapRotation,ve===void 0&&(D.addEventListener("dispose",fe),ve=new Map,ct.programs=ve);let z=ve.get(se);if(z!==void 0){if(ct.currentProgram===z&&ct.lightsStateVersion===$t)return Ee(D,ie),z}else ie.uniforms=Ft.getUniforms(D),D.onBeforeCompile(ie,x),z=Ft.acquireProgram(ie,se),ve.set(se,z),ct.uniforms=ie.uniforms;const O=ct.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(O.clippingPlanes=wt.uniform),Ee(D,ie),ct.needsLights=ti(D),ct.lightsStateVersion=$t,ct.needsLights&&(O.ambientLightColor.value=j.state.ambient,O.lightProbe.value=j.state.probe,O.directionalLights.value=j.state.directional,O.directionalLightShadows.value=j.state.directionalShadow,O.spotLights.value=j.state.spot,O.spotLightShadows.value=j.state.spotShadow,O.rectAreaLights.value=j.state.rectArea,O.ltc_1.value=j.state.rectAreaLTC1,O.ltc_2.value=j.state.rectAreaLTC2,O.pointLights.value=j.state.point,O.pointLightShadows.value=j.state.pointShadow,O.hemisphereLights.value=j.state.hemi,O.directionalShadowMap.value=j.state.directionalShadowMap,O.directionalShadowMatrix.value=j.state.directionalShadowMatrix,O.spotShadowMap.value=j.state.spotShadowMap,O.spotLightMatrix.value=j.state.spotLightMatrix,O.spotLightMap.value=j.state.spotLightMap,O.pointShadowMap.value=j.state.pointShadowMap,O.pointShadowMatrix.value=j.state.pointShadowMatrix),ct.currentProgram=z,ct.uniformsList=null,z}function ge(D){if(D.uniformsList===null){const K=D.currentProgram.getUniforms();D.uniformsList=to.seqWithValue(K.seq,D.uniforms)}return D.uniformsList}function Ee(D,K){const ot=Y.get(D);ot.outputColorSpace=K.outputColorSpace,ot.batching=K.batching,ot.batchingColor=K.batchingColor,ot.instancing=K.instancing,ot.instancingColor=K.instancingColor,ot.instancingMorph=K.instancingMorph,ot.skinning=K.skinning,ot.morphTargets=K.morphTargets,ot.morphNormals=K.morphNormals,ot.morphColors=K.morphColors,ot.morphTargetsCount=K.morphTargetsCount,ot.numClippingPlanes=K.numClippingPlanes,ot.numIntersection=K.numClipIntersection,ot.vertexAlphas=K.vertexAlphas,ot.vertexTangents=K.vertexTangents,ot.toneMapping=K.toneMapping}function rn(D,K,ot,ct,j){K.isScene!==!0&&(K=Wt),C.resetTextureUnits();const Nt=K.fog,$t=ct.isMeshStandardMaterial?K.environment:null,ie=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:yr,se=(ct.isMeshStandardMaterial?X:w).get(ct.envMap||$t),ve=ct.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,z=!!ot.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),O=!!ot.morphAttributes.position,et=!!ot.morphAttributes.normal,pt=!!ot.morphAttributes.color;let yt=ns;ct.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(yt=x.toneMapping);const Rt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Tt=Rt!==void 0?Rt.length:0,nt=Y.get(ct),Xt=d.state.lights;if(Z===!0&&(ht===!0||D!==v)){const Mn=D===v&&ct.id===M;wt.setState(ct,D,Mn)}let Vt=!1;ct.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Xt.state.version||nt.outputColorSpace!==ie||j.isBatchedMesh&&nt.batching===!1||!j.isBatchedMesh&&nt.batching===!0||j.isBatchedMesh&&nt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&nt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&nt.instancing===!1||!j.isInstancedMesh&&nt.instancing===!0||j.isSkinnedMesh&&nt.skinning===!1||!j.isSkinnedMesh&&nt.skinning===!0||j.isInstancedMesh&&nt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&nt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&nt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&nt.instancingMorph===!1&&j.morphTexture!==null||nt.envMap!==se||ct.fog===!0&&nt.fog!==Nt||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==wt.numPlanes||nt.numIntersection!==wt.numIntersection)||nt.vertexAlphas!==ve||nt.vertexTangents!==z||nt.morphTargets!==O||nt.morphNormals!==et||nt.morphColors!==pt||nt.toneMapping!==yt||nt.morphTargetsCount!==Tt)&&(Vt=!0):(Vt=!0,nt.__version=ct.version);let de=nt.currentProgram;Vt===!0&&(de=re(ct,K,j));let Ce=!1,Pe=!1,Ti=!1;const Re=de.getUniforms(),_n=nt.uniforms;if(It.useProgram(de.program)&&(Ce=!0,Pe=!0,Ti=!0),ct.id!==M&&(M=ct.id,Pe=!0),Ce||v!==D){It.buffers.depth.getReversed()?(at.copy(D.projectionMatrix),vp(at),xp(at),Re.setValue(k,"projectionMatrix",at)):Re.setValue(k,"projectionMatrix",D.projectionMatrix),Re.setValue(k,"viewMatrix",D.matrixWorldInverse);const Nn=Re.map.cameraPosition;Nn!==void 0&&Nn.setValue(k,Dt.setFromMatrixPosition(D.matrixWorld)),kt.logarithmicDepthBuffer&&Re.setValue(k,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Re.setValue(k,"isOrthographic",D.isOrthographicCamera===!0),v!==D&&(v=D,Pe=!0,Ti=!0)}if(j.isSkinnedMesh){Re.setOptional(k,j,"bindMatrix"),Re.setOptional(k,j,"bindMatrixInverse");const Mn=j.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Re.setValue(k,"boneTexture",Mn.boneTexture,C))}j.isBatchedMesh&&(Re.setOptional(k,j,"batchingTexture"),Re.setValue(k,"batchingTexture",j._matricesTexture,C),Re.setOptional(k,j,"batchingIdTexture"),Re.setValue(k,"batchingIdTexture",j._indirectTexture,C),Re.setOptional(k,j,"batchingColorTexture"),j._colorsTexture!==null&&Re.setValue(k,"batchingColorTexture",j._colorsTexture,C));const ei=ot.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&ce.update(j,ot,de),(Pe||nt.receiveShadow!==j.receiveShadow)&&(nt.receiveShadow=j.receiveShadow,Re.setValue(k,"receiveShadow",j.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(_n.envMap.value=se,_n.flipEnvMap.value=se.isCubeTexture&&se.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&K.environment!==null&&(_n.envMapIntensity.value=K.environmentIntensity),Pe&&(Re.setValue(k,"toneMappingExposure",x.toneMappingExposure),nt.needsLights&&qn(_n,Ti),Nt&&ct.fog===!0&&St.refreshFogUniforms(_n,Nt),St.refreshMaterialUniforms(_n,ct,V,H,d.state.transmissionRenderTarget[D.id]),to.upload(k,ge(nt),_n,C)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(to.upload(k,ge(nt),_n,C),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Re.setValue(k,"center",j.center),Re.setValue(k,"modelViewMatrix",j.modelViewMatrix),Re.setValue(k,"normalMatrix",j.normalMatrix),Re.setValue(k,"modelMatrix",j.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const Mn=ct.uniformsGroups;for(let Nn=0,zn=Mn.length;Nn<zn;Nn++){const Vi=Mn[Nn];q.update(Vi,de),q.bind(Vi,de)}}return de}function qn(D,K){D.ambientLightColor.needsUpdate=K,D.lightProbe.needsUpdate=K,D.directionalLights.needsUpdate=K,D.directionalLightShadows.needsUpdate=K,D.pointLights.needsUpdate=K,D.pointLightShadows.needsUpdate=K,D.spotLights.needsUpdate=K,D.spotLightShadows.needsUpdate=K,D.rectAreaLights.needsUpdate=K,D.hemisphereLights.needsUpdate=K}function ti(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(D,K,ot){Y.get(D.texture).__webglTexture=K,Y.get(D.depthTexture).__webglTexture=ot;const ct=Y.get(D);ct.__hasExternalTextures=!0,ct.__autoAllocateDepthBuffer=ot===void 0,ct.__autoAllocateDepthBuffer||bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ct.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,K){const ot=Y.get(D);ot.__webglFramebuffer=K,ot.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(D,K=0,ot=0){A=D,T=K,E=ot;let ct=!0,j=null,Nt=!1,$t=!1;if(D){const se=Y.get(D);if(se.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(k.FRAMEBUFFER,null),ct=!1;else if(se.__webglFramebuffer===void 0)C.setupRenderTarget(D);else if(se.__hasExternalTextures)C.rebindTextures(D,Y.get(D.texture).__webglTexture,Y.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const O=D.depthTexture;if(se.__boundDepthTexture!==O){if(O!==null&&Y.has(O)&&(D.width!==O.image.width||D.height!==O.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(D)}}const ve=D.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&($t=!0);const z=Y.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(z[K])?j=z[K][ot]:j=z[K],Nt=!0):D.samples>0&&C.useMultisampledRTT(D)===!1?j=Y.get(D).__webglMultisampledFramebuffer:Array.isArray(z)?j=z[ot]:j=z,S.copy(D.viewport),I.copy(D.scissor),N=D.scissorTest}else S.copy(st).multiplyScalar(V).floor(),I.copy(Et).multiplyScalar(V).floor(),N=Ot;if(It.bindFramebuffer(k.FRAMEBUFFER,j)&&ct&&It.drawBuffers(D,j),It.viewport(S),It.scissor(I),It.setScissorTest(N),Nt){const se=Y.get(D.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+K,se.__webglTexture,ot)}else if($t){const se=Y.get(D.texture),ve=K||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,se.__webglTexture,ot||0,ve)}M=-1},this.readRenderTargetPixels=function(D,K,ot,ct,j,Nt,$t){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ie=Y.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&$t!==void 0&&(ie=ie[$t]),ie){It.bindFramebuffer(k.FRAMEBUFFER,ie);try{const se=D.texture,ve=se.format,z=se.type;if(!kt.textureFormatReadable(ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(z)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=D.width-ct&&ot>=0&&ot<=D.height-j&&k.readPixels(K,ot,ct,j,ue.convert(ve),ue.convert(z),Nt)}finally{const se=A!==null?Y.get(A).__webglFramebuffer:null;It.bindFramebuffer(k.FRAMEBUFFER,se)}}},this.readRenderTargetPixelsAsync=async function(D,K,ot,ct,j,Nt,$t){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ie=Y.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&$t!==void 0&&(ie=ie[$t]),ie){const se=D.texture,ve=se.format,z=se.type;if(!kt.textureFormatReadable(ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(z))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=D.width-ct&&ot>=0&&ot<=D.height-j){It.bindFramebuffer(k.FRAMEBUFFER,ie);const O=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,O),k.bufferData(k.PIXEL_PACK_BUFFER,Nt.byteLength,k.STREAM_READ),k.readPixels(K,ot,ct,j,ue.convert(ve),ue.convert(z),0);const et=A!==null?Y.get(A).__webglFramebuffer:null;It.bindFramebuffer(k.FRAMEBUFFER,et);const pt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await gp(k,pt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,O),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Nt),k.deleteBuffer(O),k.deleteSync(pt),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,K=null,ot=0){D.isTexture!==!0&&(Fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,D=arguments[1]);const ct=Math.pow(2,-ot),j=Math.floor(D.image.width*ct),Nt=Math.floor(D.image.height*ct),$t=K!==null?K.x:0,ie=K!==null?K.y:0;C.setTexture2D(D,0),k.copyTexSubImage2D(k.TEXTURE_2D,ot,0,0,$t,ie,j,Nt),It.unbindTexture()},this.copyTextureToTexture=function(D,K,ot=null,ct=null,j=0){D.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture function signature has changed."),ct=arguments[0]||null,D=arguments[1],K=arguments[2],j=arguments[3]||0,ot=null);let Nt,$t,ie,se,ve,z,O,et,pt;const yt=D.isCompressedTexture?D.mipmaps[j]:D.image;ot!==null?(Nt=ot.max.x-ot.min.x,$t=ot.max.y-ot.min.y,ie=ot.isBox3?ot.max.z-ot.min.z:1,se=ot.min.x,ve=ot.min.y,z=ot.isBox3?ot.min.z:0):(Nt=yt.width,$t=yt.height,ie=yt.depth||1,se=0,ve=0,z=0),ct!==null?(O=ct.x,et=ct.y,pt=ct.z):(O=0,et=0,pt=0);const Rt=ue.convert(K.format),Tt=ue.convert(K.type);let nt;K.isData3DTexture?(C.setTexture3D(K,0),nt=k.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(C.setTexture2DArray(K,0),nt=k.TEXTURE_2D_ARRAY):(C.setTexture2D(K,0),nt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,K.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,K.unpackAlignment);const Xt=k.getParameter(k.UNPACK_ROW_LENGTH),Vt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),de=k.getParameter(k.UNPACK_SKIP_PIXELS),Ce=k.getParameter(k.UNPACK_SKIP_ROWS),Pe=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,yt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,yt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,se),k.pixelStorei(k.UNPACK_SKIP_ROWS,ve),k.pixelStorei(k.UNPACK_SKIP_IMAGES,z);const Ti=D.isDataArrayTexture||D.isData3DTexture,Re=K.isDataArrayTexture||K.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){const _n=Y.get(D),ei=Y.get(K),Mn=Y.get(_n.__renderTarget),Nn=Y.get(ei.__renderTarget);It.bindFramebuffer(k.READ_FRAMEBUFFER,Mn.__webglFramebuffer),It.bindFramebuffer(k.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let zn=0;zn<ie;zn++)Ti&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Y.get(D).__webglTexture,j,z+zn),D.isDepthTexture?(Re&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Y.get(K).__webglTexture,j,pt+zn),k.blitFramebuffer(se,ve,Nt,$t,O,et,Nt,$t,k.DEPTH_BUFFER_BIT,k.NEAREST)):Re?k.copyTexSubImage3D(nt,j,O,et,pt+zn,se,ve,Nt,$t):k.copyTexSubImage2D(nt,j,O,et,pt+zn,se,ve,Nt,$t);It.bindFramebuffer(k.READ_FRAMEBUFFER,null),It.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Re?D.isDataTexture||D.isData3DTexture?k.texSubImage3D(nt,j,O,et,pt,Nt,$t,ie,Rt,Tt,yt.data):K.isCompressedArrayTexture?k.compressedTexSubImage3D(nt,j,O,et,pt,Nt,$t,ie,Rt,yt.data):k.texSubImage3D(nt,j,O,et,pt,Nt,$t,ie,Rt,Tt,yt):D.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,j,O,et,Nt,$t,Rt,Tt,yt.data):D.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,j,O,et,yt.width,yt.height,Rt,yt.data):k.texSubImage2D(k.TEXTURE_2D,j,O,et,Nt,$t,Rt,Tt,yt);k.pixelStorei(k.UNPACK_ROW_LENGTH,Xt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Vt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,de),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ce),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Pe),j===0&&K.generateMipmaps&&k.generateMipmap(nt),It.unbindTexture()},this.copyTextureToTexture3D=function(D,K,ot=null,ct=null,j=0){return D.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ot=arguments[0]||null,ct=arguments[1]||null,D=arguments[2],K=arguments[3],j=arguments[4]||0),Fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,K,ot,ct,j)},this.initRenderTarget=function(D){Y.get(D).__webglFramebuffer===void 0&&C.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?C.setTextureCube(D,0):D.isData3DTexture?C.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?C.setTexture2DArray(D,0):C.setTexture2D(D,0),It.unbindTexture()},this.resetState=function(){T=0,E=0,A=null,It.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=De._getDrawingBufferColorSpace(t),e.unpackColorSpace=De._getUnpackColorSpace()}}class Gc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pt(t),this.near=e,this.far=n}clone(){return new Gc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ax extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class go extends Sn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=vn,h=vn,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sh extends Ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ks=new Ie,rh=new Ie,Ua=[],ah=new Ls,Cx=new Ie,Lr=new le,Ir=new Sr;class gn extends le{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new sh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ls),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ks),ah.copy(t.boundingBox).applyMatrix4(Ks),this.boundingBox.union(ah)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ks),Ir.copy(t.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(Ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(n),t.ray.intersectsSphere(Ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ks),rh.multiplyMatrices(n,Ks),Lr.matrixWorld=rh,Lr.raycast(t,Ua);for(let a=0,o=Ua.length;a<o;a++){const l=Ua[a];l.instanceId=r,l.object=this,e.push(l)}Ua.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new sh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new go(new Float32Array(s*this.count),s,this.count,fo,di));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class vo extends Is{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const oh=new Ie,rc=new Nc,Na=new Sr,za=new G;class Vc extends He{constructor(t=new ze,e=new vo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(s),Na.radius+=r,t.ray.intersectsSphere(Na)===!1)return;oh.copy(s).invert(),rc.copy(t.ray).applyMatrix4(oh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);za.fromBufferAttribute(u,m),lh(za,m,l,s,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,_=p;g<_;g++)za.fromBufferAttribute(u,g),lh(za,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function lh(i,t,e,n,s,r,a){const o=rc.distanceSqToPoint(i);if(o<e){const l=new G;rc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class mi extends Sn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new At:new G);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new G,s=[],r=[],a=[],o=new G,l=new Ie;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new G)}r[0]=new G,a[0]=new G;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(fn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(fn(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Hc extends Ei{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new At){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Rx extends Hc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Wc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,s(a,o,f,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Fa=new G,nl=new Wc,il=new Wc,sl=new Wc;class Xc extends Ei{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new G){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Fa.subVectors(s[0],s[1]).add(s[0]),c=Fa);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Fa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Fa),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),nl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),il.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),sl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(nl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),il.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),sl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(nl.calc(l),il.calc(l),sl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new G().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ch(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Px(i,t){const e=1-i;return e*e*t}function Dx(i,t){return 2*(1-i)*i*t}function Lx(i,t){return i*i*t}function Vr(i,t,e,n){return Px(i,t)+Dx(i,e)+Lx(i,n)}function Ix(i,t){const e=1-i;return e*e*e*t}function Ux(i,t){const e=1-i;return 3*e*e*i*t}function Nx(i,t){return 3*(1-i)*i*i*t}function zx(i,t){return i*i*i*t}function Hr(i,t,e,n,s){return Ix(i,t)+Ux(i,e)+Nx(i,n)+zx(i,s)}class wf extends Ei{constructor(t=new At,e=new At,n=new At,s=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new At){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hr(t,s.x,r.x,a.x,o.x),Hr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fx extends Ei{constructor(t=new G,e=new G,n=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new G){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hr(t,s.x,r.x,a.x,o.x),Hr(t,s.y,r.y,a.y,o.y),Hr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ef extends Ei{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ox extends Ei{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tf extends Ei{constructor(t=new At,e=new At,n=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new At){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Vr(t,s.x,r.x,a.x),Vr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kx extends Ei{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Vr(t,s.x,r.x,a.x),Vr(t,s.y,r.y,a.y),Vr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Af extends Ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(ch(o,l.x,c.x,h.x,u.x),ch(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new At().fromArray(s))}return this}}var ac=Object.freeze({__proto__:null,ArcCurve:Rx,CatmullRomCurve3:Xc,CubicBezierCurve:wf,CubicBezierCurve3:Fx,EllipseCurve:Hc,LineCurve:Ef,LineCurve3:Ox,QuadraticBezierCurve:Tf,QuadraticBezierCurve3:kx,SplineCurve:Af});class Bx extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ac[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ac[s.type]().fromJSON(s))}return this}}class oc extends Bx{constructor(t){super(),this.type="Path",this.currentPoint=new At,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ef(this.currentPoint.clone(),new At(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Tf(this.currentPoint.clone(),new At(t,e),new At(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new wf(this.currentPoint.clone(),new At(t,e),new At(n,s),new At(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Af(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Hc(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class qc extends ze{constructor(t=[new At(0,-.5),new At(.5,0),new At(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=fn(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new G,f=new At,p=new G,g=new G,_=new G;let m=0,d=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,d=t[y+1].y-t[y].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,d=t[y+1].y-t[y].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let y=0;y<=e;y++){const b=n+y*h*s,x=Math.sin(b),R=Math.cos(b);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*x,u.y=t[T].y,u.z=t[T].x*R,a.push(u.x,u.y,u.z),f.x=y/e,f.y=T/(t.length-1),o.push(f.x,f.y);const E=l[3*T+0]*x,A=l[3*T+1],M=l[3*T+0]*R;c.push(E,A,M)}}for(let y=0;y<e;y++)for(let b=0;b<t.length-1;b++){const x=b+y*t.length,R=x,T=x+t.length,E=x+t.length+1,A=x+1;r.push(R,T,A),r.push(E,A,T)}this.setIndex(r),this.setAttribute("position",new me(a,3)),this.setAttribute("uv",new me(o,2)),this.setAttribute("normal",new me(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qc(t.points,t.segments,t.phiStart,t.phiLength)}}class xo extends qc{constructor(t=1,e=1,n=4,s=8){const r=new oc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new xo(t.radius,t.length,t.capSegments,t.radialSegments)}}class gr extends ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new G,h=new At;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(o,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class We extends ze{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;y(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(p,2));function y(){const x=new G,R=new G;let T=0;const E=(e-t)/n;for(let A=0;A<=r;A++){const M=[],v=A/r,S=v*(e-t)+t;for(let I=0;I<=s;I++){const N=I/s,P=N*l+o,U=Math.sin(P),B=Math.cos(P);R.x=S*U,R.y=-v*n+m,R.z=S*B,u.push(R.x,R.y,R.z),x.set(U,E,B).normalize(),f.push(x.x,x.y,x.z),p.push(N,1-v),M.push(g++)}_.push(M)}for(let A=0;A<s;A++)for(let M=0;M<r;M++){const v=_[M][A],S=_[M+1][A],I=_[M+1][A+1],N=_[M][A+1];(t>0||M!==0)&&(h.push(v,S,N),T+=3),(e>0||M!==r-1)&&(h.push(S,I,N),T+=3)}c.addGroup(d,T,0),d+=T}function b(x){const R=g,T=new At,E=new G;let A=0;const M=x===!0?t:e,v=x===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*v,0),f.push(0,v,0),p.push(.5,.5),g++;const S=g;for(let I=0;I<=s;I++){const P=I/s*l+o,U=Math.cos(P),B=Math.sin(P);E.x=M*B,E.y=m*v,E.z=M*U,u.push(E.x,E.y,E.z),f.push(0,v,0),T.x=U*.5+.5,T.y=B*.5*v+.5,p.push(T.x,T.y),g++}for(let I=0;I<s;I++){const N=R+I,P=S+I;x===!0?h.push(P,P+1,N):h.push(P+1,P,N),A+=3}c.addGroup(d,A,x===!0?1:2),d+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gn extends We{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Gn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ca extends ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(r.slice(),3)),this.setAttribute("uv",new me(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const b=new G,x=new G,R=new G;for(let T=0;T<e.length;T+=3)p(e[T+0],b),p(e[T+1],x),p(e[T+2],R),l(b,x,R,y)}function l(y,b,x,R){const T=R+1,E=[];for(let A=0;A<=T;A++){E[A]=[];const M=y.clone().lerp(x,A/T),v=b.clone().lerp(x,A/T),S=T-A;for(let I=0;I<=S;I++)I===0&&A===T?E[A][I]=M:E[A][I]=M.clone().lerp(v,I/S)}for(let A=0;A<T;A++)for(let M=0;M<2*(T-A)-1;M++){const v=Math.floor(M/2);M%2===0?(f(E[A][v+1]),f(E[A+1][v]),f(E[A][v])):(f(E[A][v+1]),f(E[A+1][v+1]),f(E[A+1][v]))}}function c(y){const b=new G;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(y),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function h(){const y=new G;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];const x=m(y)/2/Math.PI+.5,R=d(y)/Math.PI+.5;a.push(x,1-R)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){const b=a[y+0],x=a[y+2],R=a[y+4],T=Math.max(b,x,R),E=Math.min(b,x,R);T>.9&&E<.1&&(b<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,b){const x=y*3;b.x=t[x+0],b.y=t[x+1],b.z=t[x+2]}function g(){const y=new G,b=new G,x=new G,R=new G,T=new At,E=new At,A=new At;for(let M=0,v=0;M<r.length;M+=9,v+=6){y.set(r[M+0],r[M+1],r[M+2]),b.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),T.set(a[v+0],a[v+1]),E.set(a[v+2],a[v+3]),A.set(a[v+4],a[v+5]),R.copy(y).add(b).add(x).divideScalar(3);const S=m(R);_(T,v+0,y,S),_(E,v+2,b,S),_(A,v+4,x,S)}}function _(y,b,x,R){R<0&&y.x===1&&(a[b]=y.x-1),x.x===0&&x.z===0&&(a[b]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ca(t.vertices,t.indices,t.radius,t.details)}}class _o extends ca{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _o(t.radius,t.detail)}}class Cf extends oc{constructor(t){super(t),this.uuid=Ds(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new oc().fromJSON(s))}return this}}const Gx={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Rf(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,p;if(n&&(r=qx(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Jr(r,a,e,o,l,p,0),a}};function Rf(i,t,e,n,s){let r,a;if(s===i1(i,t,e,n)>0)for(r=t;r<e;r+=n)a=uh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=uh(r,i[r],i[r+1],a);return a&&Mo(a,a.next)&&(ta(a),a=a.next),a}function Cs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Mo(e,e.next)||Ze(e.prev,e,e.next)===0)){if(ta(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Jr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Kx(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Hx(i,n,s,r):Vx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),ta(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Wx(Cs(i),t,e),Jr(i,t,e,n,s,r,2)):a===2&&Xx(i,t,e,n,s,r):Jr(Cs(i),t,e,n,s,r,1);break}}}function Vx(i){const t=i.prev,e=i,n=i.next;if(Ze(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&ir(s,o,r,l,a,c,g.x,g.y)&&Ze(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Hx(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Ze(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,p=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,d=lc(p,g,t,e,n),y=lc(_,m,t,e,n);let b=i.prevZ,x=i.nextZ;for(;b&&b.z>=d&&x&&x.z<=y;){if(b.x>=p&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&ir(o,h,l,u,c,f,b.x,b.y)&&Ze(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ir(o,h,l,u,c,f,x.x,x.y)&&Ze(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=d;){if(b.x>=p&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&ir(o,h,l,u,c,f,b.x,b.y)&&Ze(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=y;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ir(o,h,l,u,c,f,x.x,x.y)&&Ze(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Wx(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Mo(s,r)&&Pf(s,n,n.next,r)&&Qr(s,r)&&Qr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ta(n),ta(n.next),n=i=r),n=n.next}while(n!==i);return Cs(n)}function Xx(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&t1(a,o)){let l=Df(a,o);a=Cs(a,a.next),l=Cs(l,l.next),Jr(a,t,e,n,s,r,0),Jr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function qx(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Rf(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Qx(c));for(s.sort(Yx),r=0;r<s.length;r++)e=$x(s[r],e);return e}function Yx(i,t){return i.x-t.x}function $x(i,t){const e=jx(i,t);if(!e)return t;const n=Df(e,i);return Cs(n,n.next),Cs(e,e.next)}function jx(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ir(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Qr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Zx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Zx(i,t){return Ze(i.prev,i,t.prev)<0&&Ze(t.next,i,i.next)<0}function Kx(i,t,e,n){let s=i;do s.z===0&&(s.z=lc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Jx(s)}function Jx(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function lc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Qx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ir(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function t1(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!e1(i,t)&&(Qr(i,t)&&Qr(t,i)&&n1(i,t)&&(Ze(i.prev,i,t.prev)||Ze(i,t.prev,t))||Mo(i,t)&&Ze(i.prev,i,i.next)>0&&Ze(t.prev,t,t.next)>0)}function Ze(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Mo(i,t){return i.x===t.x&&i.y===t.y}function Pf(i,t,e,n){const s=ka(Ze(i,t,e)),r=ka(Ze(i,t,n)),a=ka(Ze(e,n,i)),o=ka(Ze(e,n,t));return!!(s!==r&&a!==o||s===0&&Oa(i,e,t)||r===0&&Oa(i,n,t)||a===0&&Oa(e,i,n)||o===0&&Oa(e,t,n))}function Oa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ka(i){return i>0?1:i<0?-1:0}function e1(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Pf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Qr(i,t){return Ze(i.prev,i,i.next)<0?Ze(i,t,i.next)>=0&&Ze(i,i.prev,t)>=0:Ze(i,t,i.prev)<0||Ze(i,i.next,t)<0}function n1(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Df(i,t){const e=new cc(i.i,i.x,i.y),n=new cc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function uh(i,t,e,n){const s=new cc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ta(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function cc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function i1(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Wr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Wr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];hh(t),fh(n,t);let a=t.length;e.forEach(hh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,fh(n,e[l]);const o=Gx.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function hh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function fh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Yc extends ze{constructor(t=new Cf([new At(.5,.5),new At(-.5,.5),new At(-.5,-.5),new At(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new me(s,3)),this.setAttribute("uv",new me(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:s1;let b,x=!1,R,T,E,A;d&&(b=d.getSpacedPoints(h),x=!0,f=!1,R=d.computeFrenetFrames(h,!1),T=new G,E=new G,A=new G),f||(m=0,p=0,g=0,_=0);const M=o.extractPoints(c);let v=M.shape;const S=M.holes;if(!Wr.isClockWise(v)){v=v.reverse();for(let dt=0,Mt=S.length;dt<Mt;dt++){const k=S[dt];Wr.isClockWise(k)&&(S[dt]=k.reverse())}}const N=Wr.triangulateShape(v,S),P=v;for(let dt=0,Mt=S.length;dt<Mt;dt++){const k=S[dt];v=v.concat(k)}function U(dt,Mt,k){return Mt||console.error("THREE.ExtrudeGeometry: vec does not exist"),dt.clone().addScaledVector(Mt,k)}const B=v.length,H=N.length;function V(dt,Mt,k){let qt,bt,kt;const It=dt.x-Mt.x,ne=dt.y-Mt.y,Y=k.x-dt.x,C=k.y-dt.y,w=It*It+ne*ne,X=It*C-ne*Y;if(Math.abs(X)>Number.EPSILON){const tt=Math.sqrt(w),it=Math.sqrt(Y*Y+C*C),rt=Mt.x-ne/tt,Ft=Mt.y+It/tt,St=k.x-C/it,Lt=k.y+Y/it,ae=((St-rt)*C-(Lt-Ft)*Y)/(It*C-ne*Y);qt=rt+It*ae-dt.x,bt=Ft+ne*ae-dt.y;const wt=qt*qt+bt*bt;if(wt<=2)return new At(qt,bt);kt=Math.sqrt(wt/2)}else{let tt=!1;It>Number.EPSILON?Y>Number.EPSILON&&(tt=!0):It<-Number.EPSILON?Y<-Number.EPSILON&&(tt=!0):Math.sign(ne)===Math.sign(C)&&(tt=!0),tt?(qt=-ne,bt=It,kt=Math.sqrt(w)):(qt=It,bt=ne,kt=Math.sqrt(w/2))}return new At(qt/kt,bt/kt)}const $=[];for(let dt=0,Mt=P.length,k=Mt-1,qt=dt+1;dt<Mt;dt++,k++,qt++)k===Mt&&(k=0),qt===Mt&&(qt=0),$[dt]=V(P[dt],P[k],P[qt]);const Q=[];let st,Et=$.concat();for(let dt=0,Mt=S.length;dt<Mt;dt++){const k=S[dt];st=[];for(let qt=0,bt=k.length,kt=bt-1,It=qt+1;qt<bt;qt++,kt++,It++)kt===bt&&(kt=0),It===bt&&(It=0),st[qt]=V(k[qt],k[kt],k[It]);Q.push(st),Et=Et.concat(st)}for(let dt=0;dt<m;dt++){const Mt=dt/m,k=p*Math.cos(Mt*Math.PI/2),qt=g*Math.sin(Mt*Math.PI/2)+_;for(let bt=0,kt=P.length;bt<kt;bt++){const It=U(P[bt],$[bt],qt);at(It.x,It.y,-k)}for(let bt=0,kt=S.length;bt<kt;bt++){const It=S[bt];st=Q[bt];for(let ne=0,Y=It.length;ne<Y;ne++){const C=U(It[ne],st[ne],qt);at(C.x,C.y,-k)}}}const Ot=g+_;for(let dt=0;dt<B;dt++){const Mt=f?U(v[dt],Et[dt],Ot):v[dt];x?(E.copy(R.normals[0]).multiplyScalar(Mt.x),T.copy(R.binormals[0]).multiplyScalar(Mt.y),A.copy(b[0]).add(E).add(T),at(A.x,A.y,A.z)):at(Mt.x,Mt.y,0)}for(let dt=1;dt<=h;dt++)for(let Mt=0;Mt<B;Mt++){const k=f?U(v[Mt],Et[Mt],Ot):v[Mt];x?(E.copy(R.normals[dt]).multiplyScalar(k.x),T.copy(R.binormals[dt]).multiplyScalar(k.y),A.copy(b[dt]).add(E).add(T),at(A.x,A.y,A.z)):at(k.x,k.y,u/h*dt)}for(let dt=m-1;dt>=0;dt--){const Mt=dt/m,k=p*Math.cos(Mt*Math.PI/2),qt=g*Math.sin(Mt*Math.PI/2)+_;for(let bt=0,kt=P.length;bt<kt;bt++){const It=U(P[bt],$[bt],qt);at(It.x,It.y,u+k)}for(let bt=0,kt=S.length;bt<kt;bt++){const It=S[bt];st=Q[bt];for(let ne=0,Y=It.length;ne<Y;ne++){const C=U(It[ne],st[ne],qt);x?at(C.x,C.y+b[h-1].y,b[h-1].x+k):at(C.x,C.y,u+k)}}}W(),Z();function W(){const dt=s.length/3;if(f){let Mt=0,k=B*Mt;for(let qt=0;qt<H;qt++){const bt=N[qt];mt(bt[2]+k,bt[1]+k,bt[0]+k)}Mt=h+m*2,k=B*Mt;for(let qt=0;qt<H;qt++){const bt=N[qt];mt(bt[0]+k,bt[1]+k,bt[2]+k)}}else{for(let Mt=0;Mt<H;Mt++){const k=N[Mt];mt(k[2],k[1],k[0])}for(let Mt=0;Mt<H;Mt++){const k=N[Mt];mt(k[0]+B*h,k[1]+B*h,k[2]+B*h)}}n.addGroup(dt,s.length/3-dt,0)}function Z(){const dt=s.length/3;let Mt=0;ht(P,Mt),Mt+=P.length;for(let k=0,qt=S.length;k<qt;k++){const bt=S[k];ht(bt,Mt),Mt+=bt.length}n.addGroup(dt,s.length/3-dt,1)}function ht(dt,Mt){let k=dt.length;for(;--k>=0;){const qt=k;let bt=k-1;bt<0&&(bt=dt.length-1);for(let kt=0,It=h+m*2;kt<It;kt++){const ne=B*kt,Y=B*(kt+1),C=Mt+qt+ne,w=Mt+bt+ne,X=Mt+bt+Y,tt=Mt+qt+Y;Dt(C,w,X,tt)}}}function at(dt,Mt,k){l.push(dt),l.push(Mt),l.push(k)}function mt(dt,Mt,k){Ut(dt),Ut(Mt),Ut(k);const qt=s.length/3,bt=y.generateTopUV(n,s,qt-3,qt-2,qt-1);Wt(bt[0]),Wt(bt[1]),Wt(bt[2])}function Dt(dt,Mt,k,qt){Ut(dt),Ut(Mt),Ut(qt),Ut(Mt),Ut(k),Ut(qt);const bt=s.length/3,kt=y.generateSideWallUV(n,s,bt-6,bt-3,bt-2,bt-1);Wt(kt[0]),Wt(kt[1]),Wt(kt[3]),Wt(kt[1]),Wt(kt[2]),Wt(kt[3])}function Ut(dt){s.push(l[dt*3+0]),s.push(l[dt*3+1]),s.push(l[dt*3+2])}function Wt(dt){r.push(dt.x),r.push(dt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return r1(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ac[s.type]().fromJSON(s)),new Yc(n,t.options)}}const s1={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new At(r,a),new At(o,l),new At(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],p=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new At(a,1-l),new At(c,1-u),new At(f,1-g),new At(_,1-d)]:[new At(o,1-l),new At(h,1-u),new At(p,1-g),new At(m,1-d)]}};function r1(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ms extends ca{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ms(t.radius,t.detail)}}class vr extends ca{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vr(t.radius,t.detail)}}class ss extends ze{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,p=new G,g=new At;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const d=r+m/n*a;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let d=0;d<n;d++){const y=d+m,b=y,x=y+n+1,R=y+n+2,T=y+1;o.push(b,x,T),o.push(x,R,T)}}this.setIndex(o),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ss(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Vn extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new G,f=new G,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const y=[],b=d/n;let x=0;d===0&&a===0?x=.5/e:d===n&&l===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){const T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(T+x,1-b),y.push(c++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){const b=h[d][y+1],x=h[d][y],R=h[d+1][y],T=h[d+1][y+1];(d!==0||a>0)&&p.push(b,x,T),(d!==n-1||l<Math.PI)&&p.push(x,R,T)}this.setIndex(p),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ar extends ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new G,u=new G,f=new G;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,y=(s+1)*p+g;a.push(_,m,y),a.push(m,d,y)}this.setIndex(a),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class a1 extends $e{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class o1 extends Is{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Xe extends Is{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $c extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class l1 extends $c{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const rl=new Ie,dh=new G,ph=new G;class Lf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fc,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;dh.setFromMatrixPosition(t.matrixWorld),e.position.copy(dh),ph.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ph),e.updateMatrixWorld(),rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const mh=new Ie,Ur=new G,al=new G;class c1 extends Lf{constructor(){super(new Bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new Ge(2,1,1,1),new Ge(0,1,1,1),new Ge(3,1,1,1),new Ge(1,1,1,1),new Ge(3,0,1,1),new Ge(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ur.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ur),al.copy(n.position),al.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(al),n.updateMatrixWorld(),s.makeTranslation(-Ur.x,-Ur.y,-Ur.z),mh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mh)}}class ea extends $c{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new c1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class u1 extends Lf{constructor(){super(new Oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class h1 extends $c{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new u1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class If{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=gh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function gh(){return performance.now()}const vh=new Ie;class f1{constructor(t,e,n=0,s=1/0){this.ray=new Nc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new zc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vh),this}intersectObject(t,e=!0,n=[]){return uc(t,this,n,e),n.sort(xh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)uc(t[s],this,n,e);return n.sort(xh),n}}function xh(i,t){return i.distance-t.distance}function uc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)uc(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wc);const nn=(i,t={})=>new Xe({color:i,flatShading:!0,...t});function ji(i){const t=i.map(a=>a.toNonIndexed()),e=t.reduce((a,o)=>a+o.attributes.position.count,0),n=new Float32Array(e*3);let s=0;for(const a of t)n.set(a.attributes.position.array,s),s+=a.attributes.position.array.length;const r=new ze;return r.setAttribute("position",new Ve(n,3)),r.computeVertexNormals(),r}function d1(i,t,e,n,s,r){const a=r.id,{heightAt:o,pathDist:l,plinths:c}=t,h=t.lighthouse.pos,u=new He,f=new Pt,p=[],g=(F,xt,ut,Kt=2,te=5)=>l(F,xt)>ut&&Math.hypot(F-h.x,xt-h.z)>te&&!c.some(Ct=>Math.hypot(Ct.x-F,Ct.z-xt)<Kt),_=(F,xt,ut=F*20)=>{const Kt=[];for(let te=0;te<ut&&Kt.length<F;te++){const Ct=(n()-.5)*104,Jt=(n()-.5)*104,re=o(Ct,Jt);xt(Ct,Jt,re)&&Kt.push({x:Ct,z:Jt,h:re,r:n(),s:n()})}return Kt},m=(F,xt,ut,Kt,te=!1)=>{const Ct=new gn(F,xt,Math.max(1,ut.length));return Ct.count=ut.length,ut.forEach((Jt,re)=>{Kt(Jt,re,Ct),u.updateMatrix(),Ct.setMatrixAt(re,u.matrix)}),Ct.instanceColor&&(Ct.instanceColor.needsUpdate=!0),Ct.castShadow=te,Ct.receiveShadow=!0,i.add(Ct),Ct},d=(e.mobile?.55:1)*1.8,y=(()=>{const F=[[-.9,.5,.05],[-.45,.68,-.06],[0,.78,.02],[.45,.66,-.04],[.9,.48,.06]].map(([te,Ct,Jt])=>{const re=new Gn(.045,Ct,3);return re.translate(0,Ct/2,0),re.rotateZ(te*.45),re.rotateX(Jt*3),re.translate(te*.09,0,Jt),re}),xt=ji(F),ut=xt.attributes.position,Kt=[];for(let te=0;te<ut.count;te++){const Ct=xe.clamp(ut.getY(te)/.7,0,1),Jt=.5+.7*Ct;Kt.push(Jt,Jt,Jt*.95)}return xt.setAttribute("color",new me(Kt,3)),xt})(),b=_(Math.round(280*d),(F,xt,ut)=>ut>.8&&g(F,xt,1.7,1.7,4.4));m(y,nn("#ffffff",{vertexColors:!0}),b,(F,xt,ut)=>{u.position.set(F.x,F.h-.05,F.z),u.rotation.set(0,F.r*6,0),u.scale.setScalar(.8+F.s*.7),ut.setColorAt(xt,f.set(a==="vinter"?F.s<.5?"#c8d4c0":"#e6eef4":a==="vulkan"?F.s<.5?"#5a6a3a":"#7a7a4a":F.s<.5?"#7fae4e":"#9cc45e"))});const x=_(Math.round((a==="vinter"?0:a==="vulkan"?30:120)*d),(F,xt,ut)=>ut>.85&&g(F,xt,1.9,2,4.5)),R=new We(.025,.03,.4,4);R.translate(0,.2,0);const T=new Ms(.11,0);T.translate(0,.42,0);const E=["#ff8fb0","#ffd54a","#ffffff","#b58cff","#ff7a4a"];if(m(R,nn("#5f8f3a"),x,F=>{u.position.set(F.x,F.h-.03,F.z),u.rotation.set(0,0,0),u.scale.setScalar(.9+F.s*.6)}),m(T,nn("#ffffff"),x,(F,xt,ut)=>{u.position.set(F.x,F.h-.03,F.z),u.scale.setScalar(.9+F.s*.6),ut.setColorAt(xt,f.set(E[Math.floor(F.r*E.length)]))}),a!=="vulkan"){const F=(()=>{const Kt=[],te=[];for(let re=0;re<8;re++){const ge=re/8*Math.PI*2,Ee=.32;Kt.push(0,0,0,Math.cos(ge)*.12,0,Math.sin(ge)*.12,Math.cos(ge-Ee)*.045,0,Math.sin(ge-Ee)*.045),Kt.push(0,0,0,Math.cos(ge+Ee)*.045,0,Math.sin(ge+Ee)*.045,Math.cos(ge)*.12,0,Math.sin(ge)*.12);for(let rn=0;rn<6;rn++)te.push(1,1,1)}for(let re=0;re<6;re++){const ge=re/6*Math.PI*2,Ee=(re+1)/6*Math.PI*2;Kt.push(0,.012,0,Math.cos(Ee)*.035,.012,Math.sin(Ee)*.035,Math.cos(ge)*.035,.012,Math.sin(ge)*.035);for(let rn=0;rn<3;rn++)te.push(1,.78,.18)}const Jt=new ze;return Jt.setAttribute("position",new me(Kt,3)),Jt.setAttribute("color",new me(te,3)),Jt.setAttribute("normal",new me(new Array(Kt.length/3).fill(0).flatMap(()=>[0,1,0]),3)),Jt})(),xt=_(Math.round((a==="vinter"?10:60)*d),(Kt,te,Ct)=>Ct>.9&&g(Kt,te,1.6,2,4.5)),ut=[];for(const Kt of xt){const te=5+Math.floor(Kt.r*9);for(let Ct=0;Ct<te;Ct++){const Jt=n()*6.28,re=Math.sqrt(n())*1.6,ge=Kt.x+Math.cos(Jt)*re,Ee=Kt.z+Math.sin(Jt)*re,rn=o(ge,Ee);rn>.85&&g(ge,Ee,1.4,2,4.5)&&ut.push({x:ge,z:Ee,h:rn,r:n(),s:n()})}}m(F,new Xe({color:"#ffffff",vertexColors:!0,side:Je}),ut,(Kt,te,Ct)=>{u.position.set(Kt.x,Kt.h+.035,Kt.z),u.rotation.set((Kt.s-.5)*.3,Kt.r*6.28,0),u.scale.setScalar(1.3+Kt.s*.7),Ct.setColorAt(te,f.setRGB(1,.97+Kt.r*.03,.94+Kt.s*.06))})}const A=_(Math.round((a==="tak"?36:0)*d),(F,xt,ut)=>ut>1&&g(F,xt,2.4,2.4,5)),M=new Vn(.22,8,4,0,Math.PI*2,0,Math.PI/2);M.scale(1,.7,1),M.translate(0,.28,0);const v=new We(.07,.09,.3,6);v.translate(0,.14,0),m(v,nn("#f4ead6"),A,F=>{u.position.set(F.x,F.h-.03,F.z),u.rotation.set(0,0,(F.r-.5)*.3),u.scale.setScalar(.8+F.s)},!0),m(M,nn("#ffffff"),A,(F,xt,ut)=>{u.position.set(F.x,F.h-.03,F.z),u.rotation.set(0,0,(F.r-.5)*.3),u.scale.setScalar(.8+F.s),ut.setColorAt(xt,f.set(F.r<.6?"#d8453a":"#c89a5a"))},!0);const S=ji([[-.08,0],[.07,.05],[0,-.07]].map(([F,xt],ut)=>{const Kt=new Gn(.04,1.1+ut*.2,3);return Kt.translate(F,.55+ut*.1,xt),Kt}).concat([(()=>{const F=new xo(.05,.18,2,4);return F.translate(.07,1.25,.05),F})()])),I=_(Math.round(150*d),(F,xt,ut)=>ut>.05&&ut<.55&&g(F,xt,2.2,2,5),6e3),N=m(S,nn(a==="vinter"?"#a89878":a==="vulkan"?"#5a5a3a":"#9aa856"),I,F=>{u.position.set(F.x,F.h-.1,F.z),u.rotation.set(0,F.r*6,0),u.scale.setScalar(.8+F.s*.6)}),P=[],U=[];for(const F of t.paths)for(const xt of[-1,1]){let ut=null,Kt=0,te=0;for(let Ct=2;Ct<F.length-7;Ct+=1.7){const Jt=Ct/F.length,re=F.curve.getPointAt(Jt),ge=F.curve.getTangentAt(Jt),Ee=re.x-ge.z*xt*2.25,rn=re.z+ge.x*xt*2.25,qn=o(Ee,rn);if(!(qn>.5&&te<=0&&g(Ee,rn,1.9,2.6,6))){ut=null,te>0&&te--;continue}P.push({x:Ee,z:rn,h:qn}),ut&&U.push({a:ut,b:{x:Ee,z:rn,h:qn}}),ut={x:Ee,z:rn,h:qn},++Kt>4+Math.floor(n()*5)&&(Kt=0,ut=null,te=3+Math.floor(n()*5))}}const B=new Cn(.14,.8,.14);B.translate(0,.4,0);const H=new Cn(1,.07,.06),V=nn("#a07650");m(B,V,P,F=>{u.position.set(F.x,F.h-.05,F.z),u.rotation.set(0,n()*.3,(n()-.5)*.12),u.scale.set(1,1,1)},!0);const $=U.flatMap(F=>[{...F,y:.32},{...F,y:.62}]);m(H,V,$,({a:F,b:xt,y:ut})=>{const Kt=Math.hypot(xt.x-F.x,xt.z-F.z);u.position.set((F.x+xt.x)/2,(F.h+xt.h)/2+ut-.05,(F.z+xt.z)/2),u.rotation.set(0,-Math.atan2(xt.z-F.z,xt.x-F.x),0),u.scale.set(Kt,1,1)},!0);const Q=r.dockTheta??-2.35,st=new At(Math.cos(Q),Math.sin(Q)),Et=s(Q);let Ot=Et-6;for(let F=Et-10;F<Et+4;F+=.25)if(o(st.x*F,st.y*F)<.3){Ot=F;break}const W=new _e,Z=nn("#b48a5e"),ht=nn("#6e4a2c"),at=8,mt=Ot-2.5;for(let F=0;F<at/.55;F++){const xt=new le(new Cn(.5,.12,2.2),Z);xt.position.set(mt+F*.55,.75+(n()-.5)*.04,0),xt.rotation.y=(n()-.5)*.05,xt.castShadow=xt.receiveShadow=!0,W.add(xt)}for(let F=0;F<=at;F+=2)for(const xt of[-1,1]){const ut=new le(new We(.12,.12,2.2,6),ht);ut.position.set(mt+F,.1,xt*1.05),ut.castShadow=!0,W.add(ut)}W.rotation.y=-Q,i.add(W);const Dt=new _e,Ut=new We(.9,.9,3.4,10,1,!0,0,Math.PI);Ut.rotateZ(Math.PI/2),Ut.rotateX(Math.PI/2),Ut.scale(1,.6,.7);const Wt=new le(Ut,nn("#3f6f9a",{side:Je}));Wt.rotation.y=Math.PI/2,Wt.castShadow=!0,Dt.add(Wt);for(const F of[-.6,.6]){const xt=new le(new Cn(.3,.08,1.2),Z);xt.position.set(F,-.15,0),Dt.add(xt)}const dt=new le(new Cn(2.4,.06,.12),Z);dt.position.set(.2,.05,.4),dt.rotation.y=.3,Dt.add(dt);const Mt=st.x*(mt+at-1)+-st.y*2.1,k=st.y*(mt+at-1)+st.x*2.1;Dt.position.set(Mt,.3,k),Dt.rotation.y=-Q,i.add(Dt);const qt=new _e,bt=new le(new Jn(3,1.4,10,5),new Le({color:"#4a3a2a",wireframe:!0}));bt.position.y=1;const kt=bt.geometry.attributes.position;for(let F=0;F<kt.count;F++)kt.setZ(F,Math.sin(kt.getX(F)/3*Math.PI+1.5)*.15-Math.abs(kt.getY(F))*.05);qt.add(bt);for(const F of[-1.6,1.6]){const xt=new le(new We(.07,.09,2,5),ht);xt.position.set(F,.9,0),xt.castShadow=!0,qt.add(xt)}for(let F=0;F<5;F++){const xt=new le(new Vn(.09,6,4),nn("#f0a43a"));xt.position.set(-1.2+F*.6,1.66,.05),qt.add(xt)}const It=Ot-4.5,ne=4.2,Y=st.x*It-st.y*ne,C=st.y*It+st.x*ne;qt.position.set(Y,o(Y,C)-.1,C),qt.rotation.y=-Q+Math.PI/2,i.add(qt),p.push({x:Y,z:C,r:1.4});const w=new We(.42,.42,.95,10);w.translate(0,.47,0);const X=new We(.44,.44,.08,10),tt=new Cn(.8,.8,.8);tt.translate(0,.4,0);const it=[],rt=(F,xt,ut,Kt)=>{for(let te=0;te<60&&ut>0;te++){const Ct=F+(n()-.5)*6,Jt=xt+(n()-.5)*6,re=o(Ct,Jt);re<.4||!g(Ct,Jt,2.3,2.4,4.6)||it.some(ge=>Math.hypot(ge.x-Ct,ge.z-Jt)<1.1)||(it.push({x:Ct,z:Jt,h:re,kind:Kt??(n()<.6?"barrel":"crate"),r:n()}),ut--)}};rt(st.x*(Ot-2.5),st.y*(Ot-2.5),5),rt(h.x+6,h.z+1,3,"barrel"),rt(h.x-6,h.z+2,2);const Ft=it.filter(F=>F.kind==="barrel"),St=it.filter(F=>F.kind==="crate");m(w,nn("#8a5a36"),Ft,F=>{u.position.set(F.x,F.h-.05,F.z),u.rotation.set(0,F.r*6,0),u.scale.setScalar(1)},!0),m(X,nn("#3e3a38"),Ft.flatMap(F=>[{...F,y:.2},{...F,y:.75}]),F=>{u.position.set(F.x,F.h-.05+F.y,F.z)},!1),m(tt,nn("#b8925e"),St,F=>{u.position.set(F.x,F.h-.05,F.z),u.rotation.set(0,F.r*6,0),u.scale.setScalar(.8+F.r*.4)},!0);for(const F of it)p.push({x:F.x,z:F.z,r:.55});const Lt=_(Math.round(380*d),(F,xt,ut)=>ut>.9&&g(F,xt,1.6,1.6,4.4)),ae=new Ms(.06,0);ae.translate(0,.06,0),m(ae,new Xe({color:a==="vulkan"?"#ff9a5a":"#fffdf4"}),Lt,F=>{u.position.set(F.x,F.h-.02,F.z),u.rotation.set(0,0,0),u.scale.setScalar(.8+F.s*.8)});const wt=(F,xt,ut)=>{const Kt=[];for(let te=0;te<F*40&&Kt.length<F;te++){const Ct=(n()-.5)*130,Jt=(n()-.5)*130,re=o(Ct,Jt),ge=.05-re;ge>xt&&ge<ut&&Math.hypot(Ct-h.x,Jt-h.z)>6&&Kt.push({x:Ct,z:Jt,h:re,r:n(),s:n()})}return Kt},Yt=ji([0,1,2].map(F=>{const xt=new Gn(.08,.9+F*.25,3);return xt.translate((F-1)*.12,.45+F*.12,F%2*.1),xt.rotateZ((F-1)*.25),xt})),oe=wt(Math.round(90*d),.35,1.8),ce=m(Yt,nn("#4f9a5a"),oe,F=>{u.position.set(F.x,F.h,F.z),u.rotation.set(0,F.r*6,0),u.scale.setScalar(.8+F.s*.7)}),Zt=ji([[0,0,.32],[.3,.1,.22],[-.25,.05,.26],[.05,.3,.2]].map(([F,xt,ut])=>{const Kt=new Ms(ut,0);return Kt.translate(F,ut*.8,xt),Kt})),ye=wt(Math.round((a==="tak"?28:0)*d),.5,1.6),ue=["#b58cff","#ff8fa8","#ffc65a","#7fd6ff"];if(m(Zt,nn("#ffffff"),ye,(F,xt,ut)=>{u.position.set(F.x,F.h,F.z),u.rotation.set(0,F.r*6,0),u.scale.setScalar(.8+F.s*.9),ut.setColorAt(xt,f.set(ue[Math.floor(F.r*ue.length)]))}),a==="tak"){const F=ji([[0,0,0,.55],[.12,.05,.4,.42],[-.13,-.04,-.45,.4],[.05,.12,.2,.33],[-.06,-.1,-.15,.36]].map(([Ct,Jt,re,ge])=>{const Ee=new Gn(.05,ge,4);return Ee.translate(0,ge/2,0),Ee.rotateZ(re),Ee.rotateX(Jt*2),Ee.translate(Ct,0,Jt),Ee})),xt=ji([(()=>{const Ct=new We(.12,.16,.12,7);return Ct.translate(0,.06,0),Ct})(),...Array.from({length:7},(Ct,Jt)=>{const re=new Gn(.025,.2,3),ge=Jt/7*6.28;return re.translate(0,.1,0),re.rotateZ(.5),re.rotateY(ge),re.translate(Math.cos(ge)*.08,.12,-Math.sin(ge)*.08),re})]),ut=_(Math.round(16*d),(Ct,Jt,re)=>.05-re>.08&&t.landDist(Ct,Jt)>5,3e4).map(Ct=>({...Ct,big:2.4,pool:!0})),Kt=[...wt(Math.round(36*d),.12,.9),...ut],te=["#ff5a80","#a060ff","#ffb820","#ff5a2a","#ff7ad0","#f4d070"];m(F,nn("#ffffff"),Kt.filter((Ct,Jt)=>Jt%2===0),(Ct,Jt,re)=>{u.position.set(Ct.x,Ct.h-.02,Ct.z),u.rotation.set(0,Ct.r*6,0),u.scale.setScalar((.8+Ct.s*.8)*(Ct.big??1)),re.setColorAt(Jt,f.set(te[Math.floor(Ct.r*te.length)]).multiplyScalar(Ct.pool?1.6:1))}),m(xt,nn("#ffffff"),Kt.filter((Ct,Jt)=>Jt%2===1),(Ct,Jt,re)=>{u.position.set(Ct.x,Ct.h-.02,Ct.z),u.rotation.set(0,Ct.r*6,0),u.scale.setScalar((.9+Ct.s*.9)*(Ct.big??1)),re.setColorAt(Jt,f.set(te[(Math.floor(Ct.s*te.length)+2)%te.length]).multiplyScalar(Ct.pool?1.6:1))})}const be=ji([(()=>{const F=new Vn(.17,7,4);return F.scale(1.2,.5,.85),F.translate(0,.07,0),F})(),...[-1,1].map(F=>{const xt=new Vn(.06,5,3);return xt.scale(1.3,.7,1),xt.translate(F*.17,.08,.15),xt}),...[-1,1].flatMap(F=>[0,1,2].map(xt=>{const ut=new Cn(.16,.02,.02);return ut.rotateZ(F*-.5),ut.translate(F*.18,.04,-.06+xt*.07),ut})),...[-1,1].map(F=>{const xt=new Vn(.025,4,3);return xt.translate(F*.05,.13,.09),xt})]),q=a==="vulkan"?[]:_(Math.round((a==="vinter"?5:18)*d),(F,xt,ut)=>ut>.08&&ut<.42&&g(F,xt,2.2,2,5),12e3).map(F=>({...F,home:{x:F.x,z:F.z},dir:F.r*6.28,t:F.s*4,run:0})),zt=m(be,nn(a==="vinter"?"#b8584a":"#d8553a"),q,F=>{u.position.set(F.x,F.h,F.z),u.rotation.set(0,F.dir,0),u.scale.setScalar(1)},!0),lt=ji([(()=>{const xt=new Vn(.07,6,4);return xt.scale(.6,.5,1.4),xt})(),(()=>{const xt=new Gn(.06,.1,3);return xt.rotateX(-Math.PI/2),xt.translate(0,0,-.13),xt})()]),_t=[...wt(Math.round(26*d),.1,.8),..._(Math.round(12*d),(F,xt,ut)=>.05-ut>.12&&t.landDist(F,xt)>5,3e4).map(F=>({...F,big:1.5}))].map(F=>({...F,rad:.5+F.s*.9,sp:(.5+F.r)*(F.s<.5?1:-1)})),Bt=["#ff9a3a","#3a7ad8","#f2c94c","#2f8f9a"],Gt=m(lt,nn("#ffffff"),_t,(F,xt,ut)=>{u.position.set(F.x,F.h,F.z),ut.setColorAt(xt,f.set(Bt[xt%Bt.length]))}),fe=new vr(.16,0);fe.scale(.45,.3,1.4);const Fe=wt(e.mobile?5:8,.9,2.6).map(F=>({...F,rad:2+F.s*3,speed:(.25+F.r*.3)*(F.r<.5?1:-1)})),ke=9,we=new gn(fe,new Le({color:"#2f5f72",transparent:!0,opacity:.75}),Math.max(1,Fe.length*ke));we.count=Fe.length*ke,we.renderOrder=1,i.add(we);const xn=Array.from({length:ke},()=>[(n()-.5)*1.4,(n()-.5)*.25,(n()-.5)*1.4,n()*6]),dn=F=>{Dt.position.y=.3+Math.sin(F*1.2)*.08,Dt.rotation.z=Math.sin(F*.9)*.04,Dt.rotation.x=Math.sin(F*1.3+1)*.03,Fe.forEach((ut,Kt)=>{const te=F*ut.speed+ut.r*6,Ct=ut.x+Math.cos(te)*ut.rad,Jt=ut.z+Math.sin(te)*ut.rad,re=Math.atan2(-Math.sin(te)*ut.speed,Math.cos(te)*ut.speed);for(let ge=0;ge<ke;ge++){const[Ee,rn,qn,ti]=xn[ge];u.position.set(Ct+Ee+Math.sin(F*2+ti)*.1,Math.max(o(Ct,Jt)+.25,-.75)+rn,Jt+qn),u.rotation.set(0,re+Math.sin(F*6+ti)*.15,0),u.scale.setScalar(1),u.updateMatrix(),we.setMatrixAt(Kt*ke+ge,u.matrix)}}),we.instanceMatrix.needsUpdate=!0,_t.forEach((ut,Kt)=>{const te=F*ut.sp+ut.r*6+Math.sin(F*.7+Kt)*.6,Ct=ut.x+Math.cos(te)*ut.rad,Jt=ut.z+Math.sin(te)*ut.rad;u.position.set(Ct,Math.min(o(Ct,Jt)+.08,0),Jt),u.rotation.set(0,-te+(ut.sp>0?0:Math.PI),Math.sin(F*9+Kt)*.2),u.scale.setScalar((.9+ut.s*.5)*(ut.big??1)),u.updateMatrix(),Gt.setMatrixAt(Kt,u.matrix)}),Gt.instanceMatrix.needsUpdate=!0;const xt=Math.min(.05,Math.max(0,F-(dn.last??F)));dn.last=F,q.forEach((ut,Kt)=>{if(ut.t-=xt,ut.t<=0&&(ut.run>0?(ut.run=0,ut.t=.8+Math.random()*2.5):(ut.run=(Math.random()<.5?-1:1)*(.9+Math.random()*.8),ut.t=.4+Math.random()*.9,Math.random()<.3&&(ut.dir+=(Math.random()-.5)*1.5))),ut.run){const te=ut.x+Math.cos(ut.dir)*ut.run*xt,Ct=ut.z-Math.sin(ut.dir)*ut.run*xt,Jt=o(te,Ct);Jt>.05&&Jt<.5&&Math.hypot(te-ut.home.x,Ct-ut.home.z)<3.5?(ut.x=te,ut.z=Ct,ut.h=Jt):ut.run=-ut.run}u.position.set(ut.x,ut.h+(ut.run?Math.abs(Math.sin(F*30+Kt))*.015:0),ut.z),u.rotation.set(0,ut.dir,ut.run?Math.sin(F*30+Kt)*.08:0),u.scale.setScalar(1),u.updateMatrix(),zt.setMatrixAt(Kt,u.matrix)}),zt.instanceMatrix.needsUpdate=!0,!((F*60|0)%2)&&(I.forEach((ut,Kt)=>{u.position.set(ut.x,ut.h-.1,ut.z),u.rotation.set(Math.sin(F*1.7+ut.x*.3)*.08,ut.r*6,Math.cos(F*1.4+ut.z*.3)*.08),u.scale.setScalar(.8+ut.s*.6),u.updateMatrix(),N.setMatrixAt(Kt,u.matrix)}),N.instanceMatrix.needsUpdate=!0,oe.forEach((ut,Kt)=>{u.position.set(ut.x,ut.h,ut.z),u.rotation.set(Math.sin(F*1.1+ut.x)*.12,ut.r*6,Math.cos(F*.9+ut.z)*.12),u.scale.setScalar(.8+ut.s*.7),u.updateMatrix(),ce.setMatrixAt(Kt,u.matrix)}),ce.instanceMatrix.needsUpdate=!0)};W.updateMatrixWorld(!0);const Qn=[];return W.children.forEach(F=>{if(F.geometry.type==="CylinderGeometry"){const xt=F.getWorldPosition(new G);Qn.push({x:xt.x,z:xt.z,r:.15})}}),Qn.push({x:Mt,z:k,r:.9}),{colliders:p,update:dn,obstacles:Qn}}function _h(i,{heightTex:t,ext:e,grid:n,quality:s,sunDir:r,colors:a,level:o=.05,size:l=220,center:c=[0,0],maxDepth:h=100}){const u=ui.merge([Ht.fog,{uTime:{value:0},uHeight:{value:t},uExt:{value:e},uGrid:{value:n},uLevel:{value:o},uMaxDepth:{value:h},uShallow:{value:new Pt(a.shallow)},uMid:{value:new Pt(a.mid)},uDeep:{value:new Pt(a.deep)},uSun:{value:r.clone().normalize()},uCaustic:{value:(s.mobile?.8:1)*a.caustic}}]);u.uHeight.value=t;const f=new $e({uniforms:u,transparent:!0,depthWrite:!1,fog:!0,vertexShader:`
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
      }`}),p=l<50?8:s.mobile?40:64,g=new Jn(l,l,p,p);g.rotateX(-Math.PI/2);const _=new le(g,f);return _.position.set(c[0],o,c[1]),_.renderOrder=2,i.add(_),{mesh:_,update(m){u.uTime.value=m}}}function Mh(i,t){const e=new go(Float32Array.from(i),t,t,fo,di);return e.magFilter=e.minFilter=vn,e.generateMipmaps=!1,e.needsUpdate=!0,e}const hc={uOlPx:{value:2},uOlRes:{value:new At(1,1)},uInk:{value:new Pt("#1f1a1c")}},p1=.16,m1=.65,fc={rock:new Set,tree:new Set,tower:new Set,figure:new Set},dc={rock:!0,tree:!0,tower:!0,figure:!0};function g1(i,t,e,n){hc.uOlPx.value=i*t,hc.uOlRes.value.set(Math.max(1,e*t),Math.max(1,n*t))}function Uf(i){for(const t in fc)dc[t]=!!i[t],fc[t].forEach(e=>e.visible=dc[t])}function Nf(i){if(i.attributes.olNormal)return;i.attributes.normal||i.computeVertexNormals();const t=i.attributes.position,e=i.attributes.normal,n=t.count,s=new Map,r=new Array(n);for(let o=0;o<n;o++){const l=`${Math.round(t.getX(o)*1e4)},${Math.round(t.getY(o)*1e4)},${Math.round(t.getZ(o)*1e4)}`;r[o]=l;const c=s.get(l)||[0,0,0];c[0]+=e.getX(o),c[1]+=e.getY(o),c[2]+=e.getZ(o),s.set(l,c)}const a=new Float32Array(n*3);for(let o=0;o<n;o++){const l=s.get(r[o]),c=Math.hypot(l[0],l[1],l[2])||1;a[o*3]=l[0]/c,a[o*3+1]=l[1]/c,a[o*3+2]=l[2]/c}i.setAttribute("olNormal",new Ve(a,3))}const ol=new Map;function zf(i,t,e,n){const s=`${i?i.uuid:"batch"}|${t}|${e}|${n}`;if(ol.has(s))return ol.get(s);const r=new Le({side:Pn,vertexColors:e});return r.color.copy(e||!i?new Pt(1,1,1):i.color).multiplyScalar(p1),r.visible=dc[t],r.onBeforeCompile=a=>{Object.assign(a.uniforms,hc),a.vertexShader=`attribute vec3 olNormal;
uniform float uOlPx;
uniform vec2 uOlRes;
varying float vOlZ;
`+a.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
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
        }`),a.fragmentShader=`varying float vOlZ;
uniform vec3 uInk;
`+a.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      diffuseColor.rgb = mix(diffuseColor.rgb, uInk, ${m1.toFixed(2)});`),n&&(a.uniforms.uKeep=xr.uKeep,a.uniforms.uRad=xr.uRad,a.fragmentShader=`uniform vec3 uKeep;
uniform float uRad;
`+a.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        {
          float k = 1.0 - smoothstep(uRad * 0.55, uRad, length(gl_FragCoord.xy - uKeep.xy));
          if (k > 0.0 && vOlZ < uKeep.z + 0.8) { // kronen ligger ~2 enheter nærmere kameraet enn foten
            float b = fract(52.9829189 * fract(dot(floor(gl_FragCoord.xy), vec2(0.06711056, 0.00583715)))); // samme støy som trærne (G7)
            if (k * 0.95 > b + 0.02) discard;
          }
        }`))},r.customProgramCacheKey=()=>`ol${n?"f":""}`,fc[t].add(r),ol.set(s,r),r}const Ff=i=>{const t=i.material;return i.isMesh&&!Array.isArray(t)&&(t.isMeshLambertMaterial||t.isMeshStandardMaterial)&&!t.transparent&&t.side!==Je};function pc(i,t,e=!1){if(!Ff(i))return null;Nf(i.geometry);const n=!!(i.material.vertexColors&&i.geometry.attributes.color),s=new gn(i.geometry,zf(i.material,t,n,e),i.instanceMatrix.count);return s.instanceMatrix=i.instanceMatrix,s.count=i.count,s.frustumCulled=!1,s.renderOrder=1,s.onBeforeRender=()=>{s.count=i.count},i.add(s),s}const yh=512,bh=new Map;let mc=null;function v1(i){mc=i}function x1(i,t){const e=`${i.uuid}|${t}`;let n=bh.get(e);if(n)return n;Nf(i);const s=new gn(i,zf(null,t,!1,!1),yh);return s.instanceMatrix.setUsage(uu),s.setColorAt(0,new Pt),s.instanceColor.setUsage(uu),s.count=0,s.frustumCulled=!1,s.matrixAutoUpdate=!1,s.renderOrder=1,s.raycast=()=>{},n={mesh:s,parts:[]},s.onBeforeRender=()=>{const r=s.instanceMatrix.array,a=s.instanceColor.array;let o=0;for(let l=n.parts.length-1;l>=0;l--){const c=n.parts[l];let h=c,u=!0;for(;h.parent;){if(!h.visible){u=!1;break}h=h.parent}if(h!==mc){++c.userData.olMiss>300&&n.parts.splice(l,1);continue}if(c.userData.olMiss=0,!u||o>=yh)continue;r.set(c.matrixWorld.elements,o*16);const f=c.material.color;a[o*3]=f.r,a[o*3+1]=f.g,a[o*3+2]=f.b,o++}s.count=o,o&&(s.instanceMatrix.clearUpdateRanges(),s.instanceMatrix.addUpdateRange(0,o*16),s.instanceColor.clearUpdateRanges(),s.instanceColor.addUpdateRange(0,o*3),s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0)},mc.add(s),bh.set(e,n),n}function ua(i,t){return i.traverse(e=>{!Ff(e)||e.userData.noOutline||(e.userData.olMiss=0,x1(e.geometry,t).parts.push(e))}),i}function Rs(i){const t=i.map(([u])=>u.index?u.toNonIndexed():u),e=t.reduce((u,f)=>u+f.attributes.position.count,0),n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Pt,a=new G;let o=0;t.forEach((u,f)=>{const p=i[f][1],g=u.attributes.position;for(let _=0;_<g.count;_++)a.fromBufferAttribute(g,_),p(a,r),n.set([a.x,a.y,a.z],(o+_)*3),s.set([r.r,r.g,r.b],(o+_)*3);o+=g.count});const l=new ze;l.setAttribute("position",new Ve(n,3)),l.setAttribute("color",new Ve(s,3)),l.computeVertexNormals();let c=0;const h=l.attributes.normal;return t.forEach((u,f)=>{const p=i[f][2],g=u.attributes.position.count;if(p)for(let _=0;_<g;_++)a.fromBufferAttribute(l.attributes.position,c+_).sub(p).normalize(),h.setXYZ(c+_,a.x,a.y,a.z);c+=g}),l}const gc=.7,vc=3.8;function _1(){const i=[],e=vc/8,n=new Pt("#7a5434"),s=new Pt("#a57a4e");for(let r=0;r<8;r++){const a=r/8,o=(r+1)/8,l=.24-a*.08,c=.24-o*.08,h=new We(c,l*1.12,e,7,1),u=h.attributes.position;for(let f=0;f<u.count;f++){const p=u.getY(f)+e/2+r*e,g=p/vc;u.setXYZ(f,u.getX(f)+gc*g*g,p,u.getZ(f))}i.push([h,(f,p)=>p.copy(n).lerp(s,f.y/e%1).multiplyScalar(.55+.45*xe.smoothstep(f.y,0,1.3))])}return Rs(i)}function M1(i){const n=[],s=[];for(let a=0;a<=12;a++){const o=a/12;s.push(new G(0,.35*o-1.25*o*o,o*2.7))}for(let a=0;a<12;a++){const o=a/12,l=s[a],c=s[a+1],h=.62*Math.sin(Math.PI*Math.min(1,o*1.1+.08))+.05;for(const u of[-1,1]){const f=new G(u*h,l.y-.08-h*.25,l.z+.32);u>0?n.push(l.x,l.y,l.z,c.x,c.y,c.z,f.x,f.y,f.z):n.push(l.x,l.y,l.z,f.x,f.y,f.z,c.x,c.y,c.z)}}const r=new ze;return r.setAttribute("position",new me(n,3)),r}function y1(){const i=[],t=new Pt("#3f8a3a"),e=new Pt("#9ad25a"),n=8;for(let s=0;s<n;s++){const r=M1();r.rotateX(-.15+s%2*.25),r.rotateY(s/n*Math.PI*2+s%2*.2),i.push([r,(a,o)=>{const l=Math.hypot(a.x,a.z);o.copy(t).lerp(e,Math.min(1,l/2.4))}])}for(let s=0;s<3;s++){const r=new Vn(.16,6,4);r.translate(Math.cos(s*2.1)*.18,-.2,Math.sin(s*2.1)*.18),i.push([r,(a,o)=>o.set("#6b4a2a")])}return Rs(i)}function Sh(i,t,e){const n=i.map(([s,r,a,o],l)=>{const c=new Ms(o,2),h=c.attributes.position;for(let u=0;u<h.count;u++){const f=h.getX(u),p=h.getY(u),g=h.getZ(u),_=1+.07*Math.sin(f*7+l)*Math.sin(p*6)+.05*Math.sin(g*9+p*4);h.setXYZ(u,f*_,p*_*.92,g*_)}return c.translate(s,r,a),[c,(u,f)=>f.copy(e).lerp(t,xe.smoothstep(u.y,r-o*.6,r+o*.9)).multiplyScalar((.6+.4*xe.smoothstep(u.y,r-o,r))*(.55+.45*xe.smoothstep(Math.hypot(u.x,u.z),.1,.9+o*.5))),new G(s,r,a)]});return Rs(n)}function b1(i){const t=[],e=new Pt("#2f6a48"),n=new Pt("#4a8a5a"),s=new Pt("#ffffff");return[[1.5,1.5,.9],[1.15,1.35,1.8],[.8,1.2,2.6],[.45,.9,3.25]].forEach(([r,a,o])=>{const l=new Gn(r,a,10,2),c=l.attributes.position;for(let h=0;h<c.count;h++)c.getY(h)<-a/2+.01&&c.setY(h,c.getY(h)+Math.sin(h*1.7)*.12);l.translate(0,o,0),t.push([l,(h,u)=>{const f=(h.y-o+a/2)/a;u.copy(e).lerp(n,f),i&&f>.12&&u.lerp(s,Math.min(1,(f-.12)*2.6))}])}),Rs(t)}function S1(){const i=[],t=new We(.12,.26,3,6,4),e=t.attributes.position;for(let n=0;n<e.count;n++){const s=e.getY(n);e.setX(n,e.getX(n)+Math.sin(s*1.7)*.12)}return t.translate(0,1.5,0),i.push([t,(n,s)=>s.set(n.y<.4?"#1e1a18":"#3a302a")]),[[.4,1.9,.9,.7],[-.5,2.3,-.8,.6],[.2,2.7,.6,.5]].forEach(([n,s,r,a])=>{const o=new We(.03,.08,a,4);o.translate(0,a/2,0),o.rotateZ(r),o.translate(n*.3,s,0),i.push([o,(l,c)=>c.set("#2e2622")])}),Rs(i)}const xr={uKeep:{value:new G(-1e4,-1e4,0)},uRad:{value:120}};function wh(i){return i.onBeforeCompile=t=>{t.uniforms.uKeep=xr.uKeep,t.uniforms.uRad=xr.uRad,t.fragmentShader=t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      #ifdef DOUBLE_SIDED
        if (!gl_FrontFacing) diffuseColor.rgb *= 0.6; // G7: undersiden av palmebladene er mørkere (raw4)
      #endif`),t.fragmentShader=`uniform vec3 uKeep;
uniform float uRad;
`+t.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      {
        float k = 1.0 - smoothstep(uRad * 0.55, uRad, length(gl_FragCoord.xy - uKeep.xy));
        if (k > 0.0 && -vViewPosition.z < uKeep.z - 1.2) {
          // G7: interleaved gradient noise (blå-støy-aktig) i stedet for et 4-trinns rutenett, som synes som prikker
          float b = fract(52.9829189 * fract(dot(floor(gl_FragCoord.xy), vec2(0.06711056, 0.00583715))));
          if (k * 0.95 > b + 0.02) discard;
        }
      }`)},i}function w1(i,t,e,n){const s=t.filter(P=>P.kind==="palm"),r=t.filter(P=>P.kind==="round"),a=t.filter(P=>P.kind==="bush"),o=t.filter(P=>P.kind==="pine"),l=t.filter(P=>P.kind==="dead"),c=wh(new Xe({vertexColors:!0})),h=wh(new Xe({vertexColors:!0,side:Je})),u=new Pt(n.trees.leaf[0]),f=new Pt(n.trees.leaf[1]),p=new We(.16,.26,1.6,7);p.translate(0,.8,0);const g=Rs([[p,(P,U)=>U.set("#7a5434").multiplyScalar(.55+.45*xe.smoothstep(P.y,0,1.1))]]),_=Sh([[0,2.2,0,1.15],[.8,1.9,.3,.8],[-.7,1.95,-.2,.85],[.1,2,-.85,.75],[-.2,2.9,.2,.8],[.35,1.8,.85,.7]],u,f),m=Sh([[0,.45,0,.6],[.5,.35,.2,.45],[-.45,.38,-.15,.48],[.05,.7,.1,.42]],u,f),d=(P,U,B)=>{const H=new gn(P,U,Math.max(1,B));return H.count=B,H.castShadow=!0,H.receiveShadow=!0,i.add(H),pc(H,"tree",!0),H},y=d(_1(),c,s.length),b=d(y1(),h,s.length),x=d(g,c,r.length),R=d(_,c,r.length),T=d(m,c,a.length),E=new We(.14,.22,1.2,6);E.translate(0,.6,0);const A=d(Rs([[E,(P,U)=>U.set("#5a3e2a").multiplyScalar(.55+.45*xe.smoothstep(P.y,0,1))]]),c,o.length),M=d(b1(n.id==="vinter"),c,o.length),v=d(S1(),c,l.length),S=new He;s.forEach((P,U)=>{S.position.set(P.x,P.y-.1,P.z),S.rotation.set(0,P.phase,0),S.scale.setScalar(P.s),S.updateMatrix(),y.setMatrixAt(U,S.matrix)}),r.forEach((P,U)=>{S.position.set(P.x,P.y-.1,P.z),S.rotation.set(0,P.phase,0),S.scale.setScalar(P.s),S.updateMatrix(),x.setMatrixAt(U,S.matrix)}),o.forEach((P,U)=>{S.position.set(P.x,P.y-.1,P.z),S.rotation.set(0,P.phase,0),S.scale.setScalar(P.s),S.updateMatrix(),A.setMatrixAt(U,S.matrix)}),l.forEach((P,U)=>{S.position.set(P.x,P.y-.1,P.z),S.rotation.set(0,P.phase,(P.phase%1-.5)*.15),S.scale.setScalar(P.s),S.updateMatrix(),v.setMatrixAt(U,S.matrix)});const I=P=>{s.forEach((U,B)=>{const H=Math.cos(U.phase),V=Math.sin(U.phase);S.position.set(U.x+gc*H*U.s,U.y-.1+vc*U.s,U.z-gc*V*U.s),S.rotation.set(Math.sin(P*1.2+U.phase)*.07,U.phase+Math.sin(P*.7+U.phase)*.05,Math.cos(P*1+U.phase)*.07),S.scale.setScalar(U.s),S.updateMatrix(),b.setMatrixAt(B,S.matrix)}),b.instanceMatrix.needsUpdate=!0,r.forEach((U,B)=>{S.position.set(U.x,U.y-.1,U.z),S.rotation.set(Math.sin(P*1.1+U.phase)*.025,U.phase,Math.cos(P*.9+U.phase)*.025),S.scale.setScalar(U.s),S.updateMatrix(),R.setMatrixAt(B,S.matrix)}),R.instanceMatrix.needsUpdate=!0,a.forEach((U,B)=>{const H=1+Math.sin(P*1.6+U.phase)*.035;S.position.set(U.x,U.y-.12,U.z),S.rotation.set(0,U.phase,0),S.scale.set(U.s*H,U.s/H,U.s*H),S.updateMatrix(),T.setMatrixAt(B,S.matrix)}),T.instanceMatrix.needsUpdate=!0,o.forEach((U,B)=>{S.position.set(U.x,U.y-.1,U.z),S.rotation.set(Math.sin(P*.9+U.phase)*.02,U.phase,Math.cos(P*.8+U.phase)*.02),S.scale.setScalar(U.s),S.updateMatrix(),M.setMatrixAt(B,S.matrix)}),M.instanceMatrix.needsUpdate=!0};return I(0),{colliders:[...s.map(P=>({x:P.x,z:P.z,r:.35*P.s})),...r.map(P=>({x:P.x,z:P.z,r:.4*P.s})),...a.map(P=>({x:P.x,z:P.z,r:.7*P.s})),...o.map(P=>({x:P.x,z:P.z,r:.4*P.s})),...l.map(P=>({x:P.x,z:P.z,r:.3*P.s}))],update:I}}function ll(i,t=5){const e=[],n=[],s=new Pt,r=new Pt;for(let o=0;o<t;o++){const l=i()*Math.PI*2,c=i()*.16,h=.28+i()*.3,u=.04+i()*.03,f=Math.cos(l)*c,p=Math.sin(l)*c,g=(i()-.5)*.25,_=i()*Math.PI,m=Math.cos(_)*u,d=Math.sin(_)*u;e.push(f-m,0,p-d,f+m,0,p+d,f+Math.cos(l)*g,h,p+Math.sin(l)*g),s.setRGB(.72,.72,.72),r.setRGB(1.2,1.22,1.12),n.push(s.r,s.g,s.b,s.r,s.g,s.b,r.r,r.g,r.b)}const a=new ze;return a.setAttribute("position",new me(e,3)),a.setAttribute("color",new me(n,3)),a.setAttribute("normal",new me(new Array(e.length/3).fill(0).flatMap(()=>[0,1,0]),3)),a}function E1(){const i=[];for(let a=0;a<3;a++){const o=new Vn(.07,6,3);o.scale(1,.25,1.15);const l=a*2.094;o.translate(Math.cos(l)*.065,.05,Math.sin(l)*.065),i.push(o.toNonIndexed())}const t=i.reduce((a,o)=>a+o.attributes.position.count,0),e=new Float32Array(t*3),n=new Float32Array(t*3);let s=0;for(const a of i)e.set(a.attributes.position.array,s*3),n.set(a.attributes.normal.array,s*3),s+=a.attributes.position.count;const r=new ze;return r.setAttribute("position",new Ve(e,3)),r.setAttribute("normal",new Ve(n,3)),r}function T1(i,t,e,n,s){const{heightAt:r,pathDist:a,plinths:o}=t,l=t.lighthouse.pos,c={uTime:{value:0}},u=(S=>(S.onBeforeCompile=I=>{I.uniforms.uTime=c.uTime,I.vertexShader=I.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          #ifdef USE_INSTANCING
            vec2 ip = instanceMatrix[3].xz;
          #else
            vec2 ip = vec2(0.0);
          #endif
          float sway = sin(uTime * 1.8 + ip.x * 0.35 + ip.y * 0.27) * 0.6 + sin(uTime * 3.1 + ip.x * 1.3) * 0.25;
          transformed.x += sway * transformed.y * 0.22;
          transformed.z += cos(uTime * 1.5 + ip.y * 0.4) * transformed.y * 0.12;`),I.fragmentShader=I.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
  normal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);`)},S))(new Xe({vertexColors:!0,side:Je})),f=new Xe({color:"#ffffff"}),p=[ll(s,7),ll(s,8),ll(s,6)],g=E1(),_={tak:{grass:["#4a8638","#86b452"],density:1,clover:.22,cloverCol:["#3a8a3a","#5aa84a"]},vinter:{grass:["#9a9a7a","#c8c4a0"],density:.18,clover:0,cloverCol:["#fff","#fff"]},vulkan:{grass:["#4a5a30","#6a7a3a"],density:.35,clover:0,cloverCol:["#fff","#fff"]}}[n.id],m=(e.mobile?.45:1)*_.density,d=13,y=8,b=Math.round(720*m),x=[],R=new He,T=new Pt,E=new Pt(_.grass[0]),A=new Pt(_.grass[1]),M=(S,I,N)=>{if(N<.72)return!1;const P=a(S,I);if(P<1||P<1.7&&s()<.6||Math.hypot(S-l.x,I-l.z)<4.3||n.volcano&&Math.hypot(S-n.volcano.x,I-n.volcano.z)<n.volcano.r*.7)return!1;for(const U of o)if((U.x-S)**2+(U.z-I)**2<2.6)return!1;return!t.extrasBlock||!t.extrasBlock(S,I)};for(let S=0;S<y;S++)for(let I=0;I<y;I++){const N=-y*d/2+S*d,P=-y*d/2+I*d;for(const[U,B]of[[0,b*.4],[1,b*.35],[2,b*.25]]){const H=[];for(let $=0;$<B*3&&H.length<B;$++){const Q=N+s()*d,st=P+s()*d,Et=r(Q,st);M(Q,st,Et)&&H.push([Q,st,Et])}if(!H.length)continue;const V=new gn(p[U],u,H.length);V.userData.tier=U,H.forEach(([$,Q,st],Et)=>{R.position.set($,st-.04,Q),R.rotation.set(0,s()*6.28,0),R.scale.setScalar(.8+s()*.7),R.updateMatrix(),V.setMatrixAt(Et,R.matrix),V.setColorAt(Et,T.copy(E).lerp(A,s()).multiplyScalar(t.shadeAt?t.shadeAt($,Q):1))}),V.receiveShadow=!0,V.computeBoundingSphere(),i.add(V),x.push(V)}if(_.clover>0){const U=[],B=N+s()*d,H=P+s()*d;for(let V=0;V<b*_.clover*3&&U.length<b*_.clover;V++){const $=B+(s()-.5)*6,Q=H+(s()-.5)*6,st=r($,Q);M($,Q,st)&&U.push([$,Q,st])}if(U.length){const V=new gn(g,f,U.length),$=new Pt(_.cloverCol[0]),Q=new Pt(_.cloverCol[1]);U.forEach(([st,Et,Ot],W)=>{R.position.set(st,Ot-.02,Et),R.rotation.set(0,s()*6.28,0),R.scale.setScalar(.8+s()*.8),R.updateMatrix(),V.setMatrixAt(W,R.matrix),V.setColorAt(W,T.copy($).lerp(Q,s()).multiplyScalar(t.shadeAt?t.shadeAt(st,Et):1))}),V.receiveShadow=!0,V.userData.tier=1,V.computeBoundingSphere(),i.add(V),x.push(V)}}}return{update(S){c.uTime.value=S},setLevel:S=>x.forEach(I=>{I.visible=S==="high"||I.userData.tier===0,I.receiveShadow=S==="high"}),count:x.reduce((S,I)=>S+I.count,0)}}function Eh(i,{arms:t=4,rStart:e=56,rEnd:n=4.2,turns:s=.7,a0:r=.35,steps:a=16}={}){const o=[];for(let l=0;l<t;l++){const c=r+l/t*Math.PI*2,h=[];for(let u=0;u<=a;u++){const f=u/a,p=e*(1-f)+n*f,g=c+f*s*Math.PI*2;h.push([i[0]+Math.cos(g)*p,i[1]+Math.sin(g)*p])}o.push(h)}return o}const A1={xc:i=>3*Math.sin(i*.06),w:4.2,bridgeZ:-20,top:50,wall:27},C1=[[[-15,56],[-17,40],[-13,24],[-17,8],[-14,-6],[-12,-18],[-11,-26],[-10,-33],[-10,-38.4]],[[17,56],[19,40],[15,24],[18,8],[15,-6],[12,-16],[5,-20],[-2,-20.5],[-8,-22],[-11,-26],[-10,-33],[-10,-38.4]]],R1=[90,210,330].map(i=>i*Math.PI/180),eo=11,P1=()=>{const i=[];for(let e=0;e<=48;e++){const n=e/48*Math.PI*2;i.push([Math.cos(n)*eo,Math.sin(n)*eo])}const t=R1.map(e=>[eo,20,30,40,50].map((n,s)=>{const r=e+Math.sin(n*.25+s)*.04;return[Math.cos(r)*n,Math.sin(r)*n]}));return[i,...t]},Er=[{id:"tak",name:"Tåkeøya",blurb:"Palmer, turkis lagune og en joint som har glødd i hundre år.",seed:1,radius:46,edgeAmp:[4.5,2.6,1.5],lighthouse:[0,0],paths:Eh([0,0]),plateausAuto:[{r:6.5,h:4.2},{r:5.5,h:3.4},{r:5,h:3}],waterfall:{poolR:1.9,basinR:2.7},palette:{sand:"#d8bb88",grass:"#6c9f4a",grass2:"#4d8340",path:"#b49c74",deep:"#cdb987",pathMix:.35},water:{shallow:"#a6e6cc",mid:"#45c2ae",deep:"#1f9aa2",caustic:1},sky:{fog:"#c4d8dc",hemiSky:"#dce9ff",hemiGround:"#5a6650",hemi:1.35,sun:"#ffeccc",sunI:2.25,exposure:.92,sunDir:[14,30,10],lantern:.9,grade:{tint:[1.02,1,.965],lift:[.008,.02,.035],sat:.92,vignette:.2}},skyDusk:{fog:"#d9a48e",hemiSky:"#ffd6b0",hemiGround:"#5a4a72",hemi:1.35,sun:"#ffb27a",sunI:2.7,exposure:1.05,sunDir:[24,17,4],grade:{tint:[1.07,1,.9],lift:[.025,.008,.03],sat:1.1,vignette:.3}},trees:{beach:{palm:.75,bush:.25},inland:{palm:.25,round:.45,bush:.3},leaf:["#a2cc5c","#357238"]},rock:["#b6bab8","#7f9f52"],life:["fireflies","butterflies","birds","leaves"],balance:{hp:1.3,count:1.25,speed:1,air:.5,types:{clerk:{hp:.7},complainer:{hp:.7},tank:{hp:.65},gull:{hp:.75}},extra:null},intro:{complainer:2,drone:3,lobbyist:5,heli:6,auditor:7,balloon:8}},{id:"vinter",name:"Vinterfjorden",blurb:"Snø, nordlys og isflak. Forbudsdirektoratet har kledd seg varmt.",seed:2,radius:47,edgeAmp:[3.5,3.2,2.2],lighthouse:[-10,-42.5],paths:C1,shape:"fjord",fjord:A1,nes:{x:-10,z0:-20,z1:-45,r:6.5},dockTheta:-1.2,icy:!0,palette:{sand:"#b9bec4",grass:"#f1f5fa",grass2:"#dfe8f2",path:"#c2ccd8",deep:"#9aa8b4"},water:{shallow:"#b8e2ee",mid:"#5a9cc0",deep:"#1d3f66",caustic:.55},sky:{fog:"#2a3550",hemiSky:"#9fb8ff",hemiGround:"#1c2440",hemi:1.1,sun:"#b8ccff",sunI:1.5,exposure:1.15,sunDir:[-12,26,8],grade:{tint:[.96,1,1.06],lift:[0,.01,.03],sat:1.05,vignette:.32}},trees:{beach:{pine:.6,bush:.4},inland:{pine:.8,bush:.2},leaf:["#e8f0f8","#2c5a44"]},rock:["#a9b2bc","#eef4fa"],life:["snow","aurora","icefloes"],balance:{hp:1.5,count:1.2,speed:.97,types:{tank:{hp:.95},clerk:{hp:1},lobbyMini:{hp:.9}},extra:{type:"tank",n:1,gap:4,path:"both",from:3}},intro:{balloon:3,auditor:4,lobbyist:5,drone:5,heli:6,complainer:6}},{id:"vulkan",name:"Vulkanøya",blurb:"Svart sand, lava-elver og glødende stein. Her trenger ingen fyrstikker.",seed:3,radius:48,edgeAmp:[3.5,2.2,1.6],lighthouse:[0,0],dockTheta:.5,paths:Eh([0,0],{arms:3,rStart:56,rEnd:4.4,turns:.75,a0:Math.PI/6,steps:24}),lava:P1(),moat:eo,eruption:{every:60,closed:10},fog:[38,100],palette:{sand:"#3a3533",grass:"#5a6a3c",grass2:"#3f4c2e",path:"#3e3b3a",deep:"#2c2826",pathMix:.15},water:{shallow:"#5a8f90",mid:"#2c5a63",deep:"#122b35",caustic:.4},sky:{fog:"#4a2c2a",hemiSky:"#ff9a6a",hemiGround:"#2a1a1a",hemi:1.15,sun:"#ff7a40",sunI:2.3,exposure:1.1,sunDir:[20,20,6],grade:{tint:[1.05,.98,.94],lift:[.02,0,0],sat:1.08,vignette:.32}},trees:{beach:{dead:.5,bush:.5},inland:{dead:.45,palm:.2,bush:.35},leaf:["#7a9a4a","#2f4a2a"]},rock:["#2e2a2a","#5a3a2a"],life:["ash","embers"],balance:{hp:1.25,count:1.1,speed:1,air:.6,types:{lobbyist:{hp:.6},lobbyMini:{hp:.6},clerk:{hp:.72},complainer:{hp:.72},gull:{hp:.75},drone:{hp:.8}},extra:{type:"gull",n:1,gap:1.4,from:3}},intro:{complainer:2,drone:2,lobbyist:3,heli:4,auditor:5,balloon:7}}];function D1(i){const[t,e,n]=i.edgeAmp,s=i.seed;return r=>i.radius+t*Math.sin(3*r+.4*s)+e*Math.sin(7*r+1.3*s)+n*Math.sin(11*r+s)}const Th={clerk:["complainer","lobbyist"],swarm:["complainer"],tank:["auditor","lobbyist"],gull:["drone","heli","balloon"]},cl={clerk:22,swarm:7,tank:95,gull:16,complainer:17,lobbyist:97,auditor:112,drone:9,heli:62,balloon:150},ul={complainer:.6,lobbyist:1.8,auditor:2.2,drone:.4,heli:2.4,balloon:3.5};function L1(i,t){let e=i.seed*9301+49297;const n=()=>(e=(e*9301+49297)%233280)/233280,s=i.intro||{};return t.map((r,a)=>{const o=a+1,l=r.map(f=>({...f})),c=i.balance.extra;c&&o>=c.from&&l.push({...c,n:c.n+Math.floor((o-c.from)/2),at:5});const h=(f,p,g)=>Math.max(1,Math.round(f*Math.min(1,cl[p]/cl[g]))),u=(f,p)=>{f.n=h(f.n,f.type,p),f.gap=ul[p]??f.gap,f.type=p};for(const[f,p]of Object.entries(s)){if(p!==o)continue;const g=l.find(_=>{var m;return(m=Th[_.type])==null?void 0:m.includes(f)});if(g&&g.n>=2){const _=Math.floor(g.n/2);l.push({...g,type:f,n:h(_,g.type,f),gap:ul[f]??g.gap,at:(g.at??0)+2}),g.n-=_}else g?u(g,f):l.push({type:f,n:Math.max(1,Math.min(3,Math.round(44/cl[f]))),gap:ul[f],path:0,at:6})}for(const f of l){const p=(Th[f.type]||[]).filter(g=>s[g]&&s[g]<o);p.length&&n()<.45&&u(f,p[Math.floor(n()*p.length)])}return l})}function na(){try{return Math.max(1,Math.min(Er.length,Number(localStorage.getItem("glod-unlocked"))||1))}catch{return 1}}function I1(i){try{i+2>na()&&localStorage.setItem("glod-unlocked",String(Math.min(Er.length,i+2)))}catch{}}function Ba(i,t,{color:e,size:n,speed:s,drift:r,additive:a,area:o=46,top:l=22}){const c=new Float32Array(t*3),h=new Float32Array(t);for(let d=0;d<t;d++)c[d*3]=(Math.random()-.5)*o*2,c[d*3+1]=Math.random()*l,c[d*3+2]=(Math.random()-.5)*o*2,h[d]=Math.random()*6.28;const u=new ze;u.setAttribute("position",new Ve(c,3));const f=document.createElement("canvas");f.width=f.height=32;const p=f.getContext("2d"),g=p.createRadialGradient(16,16,0,16,16,16);g.addColorStop(0,"rgba(255,255,255,1)"),g.addColorStop(1,"rgba(255,255,255,0)"),p.fillStyle=g,p.fillRect(0,0,32,32);const _=new vo({color:e,size:n,map:new mi(f),transparent:!0,depthWrite:!1,blending:a?gi:es,opacity:a?1:.85}),m=new Vc(u,_);return m.frustumCulled=!1,i.add(m),(d,y,b)=>{for(let x=0;x<t;x++){let R=c[x*3+1]-s*d*(.7+h[x]%1*.6);c[x*3]+=Math.sin(b*.7+h[x])*r*d,(s<0?R>l:R<0)&&(R=s<0?0:l,c[x*3]=y.x+(Math.random()-.5)*o*2,c[x*3+2]=y.z+(Math.random()-.5)*o*2),c[x*3+1]=R}u.attributes.position.needsUpdate=!0}}function U1(i,t,e,n,s=160){const r=new Xc(i.map(([u,f])=>new G(u,0,f))),a=r.getLength(),o=[],l=[],c=[];for(let u=0;u<=s;u++){const f=u/s,p=r.getPointAt(f),g=r.getTangentAt(f),_=-g.z,m=g.x,d=t*(.75+.25*Math.sin(f*9));for(const y of[-1,1]){const b=p.x+_*d*y,x=p.z+m*d*y;o.push(b,e(b,x)+n,x),l.push(f*a,(y+1)/2)}if(u<s){const y=u*2;c.push(y,y+1,y+2,y+1,y+3,y+2)}}const h=new ze;return h.setAttribute("position",new me(o,3)),h.setAttribute("uv",new me(l,2)),h.setIndex(c),h.computeVertexNormals(),{geo:h,curve:r,len:a}}function N1(i,t,e,n){var _;const{heightAt:s}=t,r=[],a=[],o=[],l=[],c=[],h=e.mobile?.5:1,u=new Set(n.life);if(u.has("aurora")){const m=new $e({transparent:!0,depthWrite:!1,blending:gi,side:Je,fog:!1,uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const[d,y,b]of[[0,-66,0],[-62,-20,Math.PI/2.4],[62,-24,-Math.PI/2.4]]){const x=new le(new Jn(150,26,96,1),m);x.position.set(d,20,y),x.rotation.y=b,i.add(x)}a.push((d,y,b)=>m.uniforms.uTime.value=b)}if(u.has("snow")&&a.push(Ba(i,Math.round(900*h),{color:"#ffffff",size:.28,speed:2.2,drift:.8})),u.has("ash")&&a.push(Ba(i,Math.round(500*h),{color:"#6a625e",size:.22,speed:1.2,drift:.6})),u.has("embers")&&a.push(Ba(i,Math.round(160*h),{color:"#ff8a3a",size:.25,speed:-1.6,drift:1.2,additive:!0,top:10})),u.has("icefloes")){const m=[];for(let R=0;R<6e3&&m.length<70*h;R++){const T=(Math.random()-.5)*120,E=(Math.random()-.5)*120,A=.05-s(T,E);A>.15&&A<1.4&&m.every(M=>Math.hypot(M.x-T,M.z-E)>2.2)&&m.push({x:T,z:E,s:.6+Math.random()*1.1,r:Math.random()*6})}const d=new We(1,.9,.18,7),y=d.attributes.position;for(let R=0;R<y.count;R++){const T=Math.atan2(y.getZ(R),y.getX(R)),E=.75+.35*Math.abs(Math.sin(T*2.3+R));y.setX(R,y.getX(R)*E),y.setZ(R,y.getZ(R)*E)}d.computeVertexNormals();const b=new gn(d,new Xe({color:"#eaf6ff"}),Math.max(1,m.length));b.count=m.length,b.receiveShadow=!0,i.add(b);const x=new He;a.push((R,T,E)=>{m.forEach((A,M)=>{x.position.set(A.x+Math.sin(E*.1+A.r)*.4,.08+Math.sin(E*1.1+A.r)*.03,A.z),x.rotation.set(Math.sin(E*.9+A.r)*.03,A.r+E*.02,Math.cos(E*.8+A.r)*.03),x.scale.set(A.s,1,A.s),x.updateMatrix(),b.setMatrixAt(M,x.matrix)}),b.instanceMatrix.needsUpdate=!0})}if(n.lava){const m=new $e({uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const x of n.lava){const R=U1(x,1.25,s,.07);i.add(new le(R.geo,m));const T=[];let E=!1;for(let A=0;A<=1;A+=1.4/R.len){const M=R.curve.getPointAt(Math.min(1,A));if(t.pathDist(M.x,M.z)<2.4){E||c.push({x:M.x,z:M.z,tan:R.curve.getTangentAt(Math.min(1,A))}),E=!0;continue}E=!1,o.push({x:M.x,z:M.z,r:1.4})}for(const A of[.25,.7]){const M=R.curve.getPointAt(A),v=new ea("#ff6a2a",14,12,1.6);v.position.set(M.x,s(M.x,M.z)+1.2,M.z),i.add(v),T.push(v)}a.push((A,M,v)=>T.forEach((S,I)=>S.intensity=12+3*Math.sin(v*2.3+I)))}a.push((x,R,T)=>m.uniforms.uTime.value=T);const d=new Cn(3.4,.35,4.2),y=new Xe({color:((_=n.rock)==null?void 0:_[0])??"#555"}),b=new We(2.4,2.4,.1,18);for(const x of c){const R=s(x.x,x.z)+.12,T=new le(d,y);T.position.set(x.x,R,x.z),T.rotation.y=-Math.atan2(x.tan.z,x.tan.x),T.castShadow=T.receiveShadow=!0,i.add(T);const E=new le(b,new Le({color:new Pt("#ff5a1a").multiplyScalar(2.2),transparent:!0,opacity:0}));E.position.set(x.x,R+.25,x.z),E.visible=!1,i.add(E);const A=new ea("#ff6a2a",0,14,1.6);A.position.set(x.x,R+1.6,x.z),i.add(A);let M=!1;l.push({x:x.x,z:x.z,get closed(){return M},setClosed(v){M=v,E.visible=v}}),a.push((v,S,I)=>{const N=M?1:0;E.material.opacity+=(N*.9-E.material.opacity)*Math.min(1,v*3),!M&&E.material.opacity<.02&&(E.visible=!1),A.intensity=E.material.opacity*(22+6*Math.sin(I*9))})}}if(n.volcano){const m=n.volcano;o.push({x:m.x,z:m.z,r:m.r*.55});const d=new le(new gr(m.r*.22,20),new Le({color:new Pt("#ff5a1a").multiplyScalar(2.4)}));d.rotation.x=-Math.PI/2,d.position.set(m.x,s(m.x,m.z)+.2,m.z),i.add(d);const y=new _o(.35,0),b=[];for(let T=0;T<3e3&&b.length<50*h;T++){const E=(Math.random()-.5)*96,A=(Math.random()-.5)*96,M=s(E,A);M>.4&&t.pathDist(E,A)>2.2&&b.push({x:E,z:A,h:M,s:.5+Math.random()})}const x=new gn(y,new Le({color:new Pt("#ff7a2a").multiplyScalar(1.8)}),Math.max(1,b.length));x.count=b.length;const R=new He;b.forEach((T,E)=>{R.position.set(T.x,T.h,T.z),R.rotation.set(T.s,T.s*3,0),R.scale.set(T.s,T.s*.5,T.s),R.updateMatrix(),x.setMatrixAt(E,R.matrix)}),i.add(x)}if(n.waterfall&&n.waterfall._lvl!==void 0){const m=n.waterfall,d=m.basin[0]-m.lip[0],y=m.basin[1]-m.lip[1],b=Math.hypot(d,y),x=d/b,R=y/b,T=m._lvl-.1,E=14,A=1.25,M=[],v=[],S=[];for(let $=0;$<=E;$++){const Q=$/E,st=.35+1.5*Q*Q,Et=T-(T-.06)*(Q*Q*.6+Q*.4);for(const Ot of[-1,1])M.push(m.lip[0]+x*st-R*A*Ot*(.85+Q*.3),Et,m.lip[1]+R*st+x*A*Ot*(.85+Q*.3)),v.push((Ot+1)/2,Q);if($<E){const Ot=$*2;S.push(Ot,Ot+1,Ot+2,Ot+1,Ot+3,Ot+2)}}const I=new ze;I.setAttribute("position",new me(M,3)),I.setAttribute("uv",new me(v,2)),I.setIndex(S);const N=new $e({transparent:!0,depthWrite:!1,side:Je,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform float uTime; varying vec2 vUv;
        float h(float x) { return fract(sin(x * 127.1) * 43758.5); }
        void main() {
          float col = floor(vUv.x * 18.0);
          float streak = fract(vUv.y * (1.6 + h(col) * 1.2) - uTime * (1.4 + h(col + 3.0) * 0.8));
          float s = smoothstep(0.0, 0.25, streak) * (1.0 - smoothstep(0.55, 1.0, streak));
          float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
          vec3 c = mix(vec3(0.45, 0.85, 0.88), vec3(1.0), s * 0.8 + vUv.y * 0.3);
          gl_FragColor = vec4(c, (0.55 + 0.4 * s) * edge);
        }`});i.add(new le(I,N));const P=(()=>{const $=document.createElement("canvas");$.width=$.height=128;const Q=$.getContext("2d"),st=(()=>{let Ot=9;return()=>(Ot=Ot*16807%2147483647)/2147483647})();for(let Ot=0;Ot<260;Ot++){const W=st()*Math.PI*2,Z=Math.pow(st(),.7)*58,ht=1.5+st()*5*(1-Z/70);Q.fillStyle=`rgba(255,255,255,${.55+st()*.45})`,Q.beginPath(),Q.arc(64+Math.cos(W)*Z,64+Math.sin(W)*Z,ht,0,Math.PI*2),Q.fill()}Q.globalCompositeOperation="destination-in";const Et=Q.createRadialGradient(64,64,8,64,64,63);return Et.addColorStop(0,"rgba(0,0,0,1)"),Et.addColorStop(.6,"rgba(0,0,0,0.85)"),Et.addColorStop(1,"rgba(0,0,0,0)"),Q.fillStyle=Et,Q.fillRect(0,0,128,128),new mi($)})(),U=new le(new gr(1.5,20),new Le({map:P,color:"#ffffff",transparent:!0,opacity:.9,depthWrite:!1}));U.rotation.x=-Math.PI/2;const B=m.lip[0]+x*1.9,H=m.lip[1]+R*1.9;U.position.set(B,.1,H),i.add(U);const V=Ba(i,Math.round(60*h),{color:"#ffffff",size:.35,speed:-.9,drift:.6,area:1.4,top:2.2});a.push(($,Q,st)=>{N.uniforms.uTime.value=st,U.scale.setScalar(1+Math.sin(st*5)*.06),U.rotation.z=st*.4,U.material.opacity=.8+.12*Math.sin(st*7),V($,{x:B,z:H},st)}),o.push({x:B,z:H,r:.9})}const f=(m,d)=>o.some(y=>(y.x-m)**2+(y.z-d)**2<y.r*y.r);let p=0;return{colliders:r,update:(m,d=t.lighthouse.pos)=>{const y=Math.min(.05,Math.max(0,m-p));p=m;for(const b of a)b(y,d,m)},blocks:f,blockers:o,bridges:l}}function Of(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ze;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Ah(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const p=[];for(let _=0;_<a[h].length;++_)p.push(a[h][_][f]);const g=Ah(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Ah(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Ve(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<e;g++){const _=h.getComponent(f,g);o.setComponent(f+u,g,_)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function kf(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let a=0;const o=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let y=0,b=o.length;y<b;y++){const x=o[y],R=i.attributes[x];l[x]=new R.constructor(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);const T=i.morphAttributes[x];T&&(c[x]||(c[x]=[]),T.forEach((E,A)=>{const M=new E.array.constructor(E.count*E.itemSize);c[x][A]=new E.constructor(M,E.itemSize,E.normalized)}))}const p=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=p*_;for(let y=0;y<r;y++){const b=n?n.getX(y):y;let x="";for(let R=0,T=o.length;R<T;R++){const E=o[R],A=i.getAttribute(E),M=A.itemSize;for(let v=0;v<M;v++)x+=`${~~(A[u[v]](b)*_+m)},`}if(x in e)h.push(e[x]);else{for(let R=0,T=o.length;R<T;R++){const E=o[R],A=i.getAttribute(E),M=i.morphAttributes[E],v=A.itemSize,S=l[E],I=c[E];for(let N=0;N<v;N++){const P=u[N],U=f[N];if(S[U](a,A[P](b)),M)for(let B=0,H=M.length;B<H;B++)I[B][U](a,M[B][P](b))}}e[x]=a,h.push(a),a++}}const d=i.clone();for(const y in i.attributes){const b=l[y];if(d.setAttribute(y,new b.constructor(b.array.slice(0,a*b.itemSize),b.itemSize,b.normalized)),y in c)for(let x=0;x<c[y].length;x++){const R=c[y][x];d.morphAttributes[y][x]=new R.constructor(R.array.slice(0,a*R.itemSize),R.itemSize,R.normalized)}}return d.setIndex(h),d}const pe=(i,t={})=>new Xe({color:i,flatShading:!0,...t}),Js=(i,t)=>new Le({color:new Pt(i).multiplyScalar(t)}),ft={coat:pe("#f2c23c"),coatDark:pe("#c99a22"),skin:pe("#f1c7a0"),beanieG:pe("#3f8f4a"),beanieY:pe("#f2c94c"),beanieR:pe("#d4553a"),boot:pe("#3a2c22"),eyeW:new Le({color:"#ffffff"}),eyeB:new Le({color:"#1c1820"}),suit:pe("#6b6f78"),suitDark:pe("#3c4150"),suitNavy:pe("#2c3a5c"),shirt:pe("#f4f1ea"),tie:pe("#b8322a"),paper:pe("#fbfaf4"),stampInk:pe("#a8233a"),woodLight:pe("#c49360"),glasses:pe("#222428"),binderR:pe("#c94f3f"),binderB:pe("#3f6fc9"),binderY:pe("#e6b93f"),gull:pe("#f4f2ee"),gullWing:pe("#c4ccd4"),gullTip:pe("#2e3038"),gullBand:pe("#8e98a4"),beak:pe("#f0a43a"),megaRed:pe("#d8453a"),mouth:new Le({color:"#4a2a2a"}),smile:new Le({color:"#c8485a"}),wood:pe("#9a6a42"),woodDark:pe("#6e4a2c"),iron:pe("#55585e"),speaker:pe("#2a2a30"),cone:pe("#4a4a52"),rasG:pe("#3f9a4a"),rasY:pe("#f2c94c"),rasR:pe("#d4553a"),chipsBag:pe("#f2b632"),chipsRed:pe("#d8453a"),chip:pe("#f0c860"),ringMat:new Xe({color:"#f1efe9",transparent:!0,opacity:.8}),ember:Js("#ff9a3a",2.4),emberCore:Js("#fff1c2",2),rolling:pe("#5a9a5a"),rollingPaper:pe("#fffdf5"),lantern:Js("#ffd27a",2.2),hpBg:new Le({color:"#2a2020",depthTest:!1,transparent:!0,opacity:.6}),hpFg:new Le({color:"#d8553a",depthTest:!1}),levelPip:Js("#9fffb0",1.6),bottle:new Xe({color:"#7fd6ff",transparent:!0,opacity:.8}),bubble:new Xe({color:"#dff6ff",transparent:!0,opacity:.45,emissive:"#5a7a9a"}),kiteSail:new Xe({color:"#ff7a5a",side:Je}),rope:pe("#d9c8a0"),ledger:pe("#2f5a3a"),track:pe("#8a4ac8"),briefcase:pe("#6a3a1a"),brass:pe("#d8b040"),rotor:new Le({color:"#cfd6dc",transparent:!0,opacity:.45}),redLight:Js("#ff3030",2),balloonA:pe("#e8e4d8"),balloonB:pe("#c8463a"),heli:pe("#f2c23c"),glassDark:pe("#2a3440"),spot:new Le({color:"#fff6c8",transparent:!0,opacity:.18,blending:gi,depthWrite:!1,side:Je}),pizza:pe("#e8603a"),pizzaCrust:pe("#e8b866"),lampGlass:new Xe({color:"#ff8a5a",transparent:!0,opacity:.45,emissive:"#6a1a10"}),lampBlob:Js("#ff9a2a",2.2)},gt={sphere:new Vn(1,10,8),lowSphere:new Ms(1,1),capsule:new xo(.5,.7,3,8),cyl:new We(1,1,1,10),cone:new Gn(1,1,10),box:new Cn(1,1,1),dome:new Vn(1,10,6,0,Math.PI*2,0,Math.PI/2),ember:new vr(.22,0),leaf:new vr(.3,0),plane:new Jn(1,1),smileArc:new ar(.06,.018,4,10,Math.PI),ring:new ar(.32,.12,6,14),bubbleRing:new ar(.18,.025,4,12)};function vt(i,t,e,n,s,r=0,a=0,o=0,l=!0){const c=new le(i,t);return c.scale.set(e,n,s),c.position.set(r,a,o),c.castShadow=l,c}function jc(i,t,e,n,s=.12,r=.18){const a=new _e;a.position.set(t,e,n),a.userData.isEyes=!0;for(const o of[-1,1])a.add(vt(gt.sphere,ft.eyeW,s,s,s,o*r,0,0,!1)),a.add(vt(gt.sphere,ft.eyeB,s*.55,s*.55,s*.55,o*r,.01,-s*.7,!1));return i.add(a),a}const Bf=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,31);return e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(.6,"rgba(0,0,0,0.25)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new mi(i)})(),z1=new Le({map:Bf,transparent:!0,depthWrite:!1,fog:!1}),Gf=new Jn(1,1).rotateX(-Math.PI/2);function Zc(i,t){const e=new le(Gf,z1);e.scale.set(t*2,1,t*2),e.position.y=.04,e.renderOrder=1,i.add(e),i.userData.blob=e}function F1(i,t,e=.8){const n=new Le({map:Bf,color:"#000000",transparent:!0,opacity:e,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),s=new gn(Gf,n,Math.max(1,t.length));s.count=t.length;const r=new He;return t.forEach((a,o)=>{r.position.set(a.x,a.y+.04,a.z),r.scale.set(a.r*2,1,a.r*2),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.renderOrder=1,i.add(s),s}function Vf(i){const t=[];i.traverse(e=>{e.userData.isEyes&&t.push(e)}),i.userData.eyes=t}function Hf(i,t,e,n=1){const s=vt(gt.box,ft.mouth,.14*n,.025*n,.02,0,t,e,!1);s.rotation.z=.15;const r=vt(gt.smileArc,ft.smile,n,n,n,0,t+.03*n,e,!1);return r.rotation.z=Math.PI,r.visible=!1,i.add(s,r),{sour:s,smile:r}}const O1=(()=>{const i=new We(.07,.05,.55,8);return i.rotateZ(Math.PI/2),i})();function Wf(){const i=new _e,t=vt(gt.box,ft.rollingPaper,.55,.012,.26,0,0,0,!1),e=vt(gt.lowSphere,ft.rasG,.22,.06,.07,0,.03,0,!1),n=new le(O1,ft.rollingPaper),s=vt(gt.cone,ft.rollingPaper,.05,.1,.05,.32,0,0,!1);return s.rotation.z=-Math.PI/2,n.add(s),i.add(t,e,n),i.userData={paper:t,herb:e,joint:n,tip:s},Kc(i,0),i}function Kc(i,t){const{paper:e,herb:n,joint:s,tip:r}=i.userData,a=xe.smoothstep,o=a(t,.08,.45),l=a(t,.5,.85);e.visible=l<.98,e.scale.set(.55,.012,.26*(1-.7*l)),n.visible=o>.01&&l<.98,n.scale.set(.22*o+.001,.06*o+.001,.07*(1-.5*l)+.001),s.visible=l>.02,s.scale.set(1,.35+.65*l,.35+.65*l),r.visible=t>.88}function k1(){const i=new _e,t=new _e;i.add(t),t.add(vt(gt.capsule,ft.coat,.75,.75,.7,0,.75,0)),t.add(vt(gt.cyl,ft.coatDark,.4,.06,.38,0,.62,0));const e=new _e;e.position.y=1.62,e.scale.setScalar(1.22),e.add(vt(gt.sphere,ft.skin,.33,.32,.32)),e.add(vt(gt.cyl,ft.beanieG,.35,.1,.35,0,.14,0)),e.add(vt(gt.cyl,ft.beanieY,.31,.1,.31,0,.24,0)),e.add(vt(gt.dome,ft.beanieR,.27,.22,.27,0,.29,0)),e.add(vt(gt.sphere,ft.beanieY,.08,.08,.08,0,.52,0)),jc(e,0,.02,-.26,.07,.12);const n=Hf(e,-.12,-.3,.8);n.sour.visible=!1,n.smile.visible=!0,t.add(e);const s=[-1,1].map(u=>{const f=vt(gt.capsule,ft.boot,.24,.32,.24,u*.18,.2,0);return t.add(f),f}),r=new _e;r.position.set(.48,1,-.1),r.add(vt(gt.box,ft.iron,.2,.28,.2,0,-.25,0)),r.add(vt(gt.sphere,ft.lantern,.1,.13,.1,0,-.25,0,!1)),t.add(r);const a=new _e;a.position.set(-.46,1.08,0),a.add(vt(gt.capsule,ft.coat,.16,.34,.16,0,-.28,0)),a.add(vt(gt.sphere,ft.skin,.1,.1,.1,0,-.52,0)),t.add(a);const o=new _e;o.add(vt(gt.box,ft.rolling,.7,.12,.42,0,0,0,!1)),o.add(vt(gt.box,ft.rollingPaper,.6,.08,.36,.06,.08,0,!1)),o.add(vt(gt.leaf,ft.rasG,.35,.05,.35,-.12,.07,0,!1)),o.position.y=2.35,o.visible=!1,i.add(o);const l=new _e;l.position.y=2;for(let u=0;u<3;u++)l.add(vt(gt.ember,ft.emberCore,.6,.6,.6,Math.cos(u*2.1)*.45,0,Math.sin(u*2.1)*.45,!1));l.visible=!1,i.add(l);const c=new _e;c.position.set(.46,1.08,0),c.add(vt(gt.capsule,ft.coat,.16,.34,.16,0,-.28,0)),c.add(vt(gt.sphere,ft.skin,.1,.1,.1,0,-.52,0)),c.visible=!1,t.add(c);const h=Wf();return h.position.set(0,1,-.62),h.scale.setScalar(1.6),h.visible=!1,t.add(h),Zc(i,.62),i.userData={body:t,legs:s,head:e,lanternArm:r,armL:a,armR:c,roll:h,carried:o,stars:l,blob:i.userData.blob},Vf(i),i}function xi(i,t){const e=new _e;e.position.y=t;const n=new le(gt.plane,ft.hpBg);n.scale.set(1,.14,1),n.renderOrder=10;const s=new le(gt.plane,ft.hpFg.clone());s.scale.set(.96,.09,1),s.position.z=.001,s.renderOrder=11,e.add(n,s),e.visible=!1,i.add(e),i.userData.hpBar=e,i.userData.hpFg=s}function Qs(i,{scale:t=1,suit:e=ft.suit,wide:n=1}={}){const s=t;i.add(vt(gt.capsule,e,.7*s*n,.62*s,.6*s,0,.72*s,0)),i.add(vt(gt.box,ft.shirt,.22*s,.4*s,.05,0,.98*s,-.27*s*Math.min(n,1.2),!1)),i.add(vt(gt.box,ft.tie,.07*s,.32*s,.05,0,.94*s,-.29*s*Math.min(n,1.2),!1));for(const o of[-1,1])i.add(vt(gt.capsule,ft.suitDark,.2*s,.25*s,.2*s,o*.16*s,.17*s,0));const r=new _e;r.position.y=1.5*s,r.add(vt(gt.sphere,ft.skin,.3*s,.3*s,.3*s)),r.add(vt(gt.dome,ft.suitDark,.31*s,.14*s,.31*s,0,.12*s,.02)),jc(r,0,.03*s,-.25*s,.065*s,.11*s);const a=Hf(r,-.12*s,-.28*s,s);return i.add(r),{head:r,mouth:a}}function B1(i){const t=new _e,e=new _e;if(t.add(e),t.userData.body=e,i==="clerk"){const{head:n,mouth:s}=Qs(e);for(const o of[-1,1])n.add(vt(gt.box,ft.glasses,.11,.07,.02,o*.11,.03,-.3,!1));n.add(vt(gt.box,ft.glasses,.08,.015,.02,0,.04,-.3,!1));const r=new _e;r.position.set(.48,.9,-.15),r.add(vt(gt.cyl,ft.woodLight,.06,.25,.06,0,.12,0)),r.add(vt(gt.sphere,ft.woodLight,.09,.09,.09,0,.27,0)),r.add(vt(gt.box,ft.stampInk,.22,.08,.16,0,-.02,0)),e.add(r);const a=vt(gt.box,ft.paper,.3,.38,.02,-.46,.92,-.2);a.rotation.y=.4,e.add(a),t.userData.mouth=s,t.userData.arm=r,xi(t,2.15)}else if(i==="tank"){const{mouth:n}=Qs(e,{scale:1.25,suit:ft.suitNavy,wide:1.45}),s=new _e;s.position.set(0,0,-.95),s.add(vt(gt.box,ft.woodDark,.75,1.05,.45,0,.52,0));const r=vt(gt.box,ft.woodLight,.9,.08,.6,0,1.1,.04);r.rotation.x=.35,s.add(r),s.add(vt(gt.cyl,ft.iron,.02,.45,.02,.18,1.3,.1,!1)),s.add(vt(gt.sphere,ft.speaker,.05,.05,.05,.18,1.52,.04,!1)),e.add(s),t.userData.mouth=n,xi(t,2.6)}else if(i==="gull"){e.add(vt(gt.lowSphere,ft.gull,.36,.3,.6,0,0,0)),e.add(vt(gt.cone,ft.beak,.08,.3,.08,0,0,-.65).rotateX(-Math.PI/2));const n=vt(gt.cone,ft.megaRed,.2,.5,.2,0,-.22,-.65);n.rotation.x=Math.PI/2,e.add(n),e.add(vt(gt.cyl,ft.paper,.21,.06,.21,0,-.22,-.89).rotateX(Math.PI/2));const s=[-1,1].map(r=>{const a=new _e;a.position.set(r*.25,.05,0),a.add(vt(gt.box,ft.gullWing,.6,.06,.42,r*.3,0,0)),a.add(vt(gt.box,ft.gullBand,.58,.065,.1,r*.31,0,.17));const o=vt(gt.box,ft.gullTip,.42,.055,.3,r*.78,0,.04);return o.rotation.y=r*.18,a.add(o),e.add(a),a});t.userData.wings=s,jc(e,0,.12,-.42,.06,.13),t.userData.mouth=null,xi(t,.8)}else if(i==="swarm"){const{mouth:n}=Qs(e,{scale:.6}),s=[ft.binderR,ft.binderB,ft.binderY],r=vt(gt.box,s[Math.floor(Math.random()*3)],.08,.34,.28,.32,.55,-.08);e.add(r),t.userData.mouth=n,xi(t,1.3)}else if(i==="auditor"){const{head:n,mouth:s}=Qs(e,{scale:1.1,suit:ft.suitDark});for(const a of[-1,1])n.add(vt(gt.box,ft.glasses,.12,.08,.02,a*.12,.03,-.33,!1));const r=new _e;r.position.set(0,.95,-.55),r.add(vt(gt.box,ft.ledger,1.05,1.2,.14)),r.add(vt(gt.box,ft.paper,.95,1.1,.1,0,0,.03,!1)),r.add(vt(gt.box,ft.brass,.3,.3,.02,0,.15,-.08,!1)),e.add(r),t.userData.mouth=s,t.userData.shield=r,xi(t,2.3)}else if(i==="complainer"){const{head:n,mouth:s}=Qs(e,{scale:.85,suit:ft.track});n.add(vt(gt.cyl,ft.rasR,.27,.06,.27,0,.1,0,!1));const r=new _e;r.position.set(.35,1.2,-.1),r.add(vt(gt.cyl,ft.track,.06,.45,.06,0,.2,0)),r.add(vt(gt.box,ft.paper,.32,.42,.02,0,.55,0)),e.add(r),t.userData.mouth=s,t.userData.arm=r,xi(t,1.8)}else if(i==="lobbyist"||i==="lobbyMini"){const n=i==="lobbyMini",{mouth:s}=Qs(e,{scale:n?.55:1.05,suit:ft.suitNavy});e.add(vt(gt.box,ft.brass,.08,.3,.05,0,n?.52:.99,n?-.17:-.32,!1)),e.add(vt(gt.box,ft.briefcase,n?.28:.5,n?.22:.36,.12,n?.3:.55,n?.3:.55,0)),t.userData.mouth=s,xi(t,n?1.2:2.1)}else if(i==="drone"){e.add(vt(gt.box,ft.iron,.42,.14,.42));const n=[];for(const[s,r]of[[1,1],[-1,1],[1,-1],[-1,-1]]){e.add(vt(gt.box,ft.speaker,.5,.04,.05,s*.22,0,r*.22).rotateY(s*r>0?Math.PI/4:-Math.PI/4));const a=vt(gt.cyl,ft.rotor,.2,.01,.2,s*.4,.08,r*.4,!1);e.add(a),n.push(a)}e.add(vt(gt.sphere,ft.redLight,.07,.07,.07,0,-.06,-.22,!1)),t.userData.rotors=n,t.userData.mouth=null,xi(t,.6)}else if(i==="balloon"){e.add(vt(gt.sphere,ft.balloonA,1.1,1.3,1.1,0,1.6,0));for(let n=0;n<4;n++)e.add(vt(gt.cyl,ft.balloonB,1.12-Math.abs(n-1.5)*.18,.18,1.12-Math.abs(n-1.5)*.18,0,1+n*.42,0,!1));e.add(vt(gt.box,ft.woodLight,.6,.4,.6,0,-.1,0)),e.add(vt(gt.sphere,ft.skin,.2,.2,.2,0,.25,0)),e.add(vt(gt.dome,ft.suitDark,.21,.1,.21,0,.32,0,!1));for(const[n,s]of[[1,1],[-1,1],[1,-1],[-1,-1]])e.add(vt(gt.cyl,ft.rope,.015,.8,.015,n*.28,.45,s*.28,!1));t.userData.mouth=null,xi(t,3.3)}else if(i==="heli"){e.add(vt(gt.capsule,ft.heli,.6,.55,.9,0,0,0).rotateX(Math.PI/2)),e.add(vt(gt.sphere,ft.glassDark,.28,.22,.24,0,.05,-.38,!1)),e.add(vt(gt.box,ft.heli,.12,.12,1.1,0,.05,.85));const n=vt(gt.box,ft.speaker,1.9,.02,.12,0,.4,0,!1),s=vt(gt.box,ft.speaker,.04,.5,.08,.08,.1,1.38,!1);e.add(n,s);const r=new le(new Gn(1.2,4.5,14,1,!0),ft.spot);r.position.set(0,-2.3,-.2),r.visible=!1,e.add(r),t.userData.rotor=n,t.userData.tail=s,t.userData.beam=r,t.userData.mouth=null,xi(t,1)}return Zc(t,{tank:.85,auditor:.7,balloon:.9,heli:.6,swarm:.35,lobbyMini:.35,drone:.35,gull:.45}[i]??.55),Vf(t),t}function G1(i){const t=i.mesh.userData.mouth;t&&(t.sour.visible=!1,t.smile.visible=!0),i.mesh.userData.hpBar.visible=!1}function V1(i){const t=new _e,e=new _e;if(t.add(e),i==="ring"){t.add(vt(gt.box,ft.wood,.9,.5,.9,0,.25,0)),e.position.y=.95;const a=vt(gt.cyl,ft.iron,.32,1.1,.32,0,0,-.15);a.rotation.x=Math.PI/2-.15,e.add(a),e.add(vt(gt.cyl,ft.woodDark,.38,.12,.38,0,.08,-.7).rotateX(Math.PI/2-.15)),e.add(vt(gt.sphere,ft.iron,.42,.42,.42,0,0,.42)),e.add(vt(gt.sphere,ft.ember,.12,.12,.12,0,.1,.8,!1))}else if(i==="chips"){t.add(vt(gt.cyl,ft.iron,.7,.3,.7,0,.15,0)),e.position.y=.3;const a=vt(gt.box,ft.chipsBag,.95,1.1,.6,0,.6,0);a.rotation.x=-.35,e.add(a),e.add(vt(gt.box,ft.chipsRed,.97,.3,.62,0,.55,0).rotateX(-.35));for(let o=0;o<5;o++)e.add(vt(gt.leaf,ft.chip,.3,.08,.3,(o-2)*.17,1.2,-.3-o%2*.1,!1))}else if(i==="speaker"){const a=new _e;a.add(vt(gt.box,ft.speaker,1,1.5,.75,0,.75,0)),a.add(vt(gt.box,ft.rasG,1.02,.12,.77,0,1.38,0,!1)),a.add(vt(gt.box,ft.rasY,1.02,.12,.77,0,1.26,0,!1)),a.add(vt(gt.box,ft.rasR,1.02,.12,.77,0,1.14,0,!1));const o=[];for(const[l,c]of[[.85,.33],[.35,.2]]){const h=vt(gt.cyl,ft.cone,c,.08,c,0,l,-.38,!1);h.rotation.x=Math.PI/2,a.add(h),o.push(h)}e.add(a),t.userData.woofers=o}else if(i==="bubble"){t.add(vt(gt.cyl,ft.speaker,.5,.25,.5,0,.12,0)),e.position.y=.3,e.add(vt(gt.cyl,ft.bottle,.36,1,.36,0,.5,0)),e.add(vt(gt.cyl,ft.rasR,.22,.2,.22,0,1.08,0));const a=vt(gt.cyl,ft.wood,.03,.8,.03,0,1.4,-.2);a.rotation.x=.5,e.add(a),e.add(vt(gt.bubbleRing,ft.rasY,1,1,1,0,1.75,-.42,!1).rotateX(.5));for(let o=0;o<3;o++)e.add(vt(gt.sphere,ft.bubble,.14+o*.04,.14+o*.04,.14+o*.04,.3-o*.25,1.7+o*.3,-.7-o*.15,!1))}else if(i==="kite"){for(let o=0;o<3;o++){const l=o/3*Math.PI*2,c=vt(gt.cyl,ft.wood,.07,1.6,.07,Math.cos(l)*.45,.7,Math.sin(l)*.45);c.rotation.set(Math.sin(l)*.28,0,-Math.cos(l)*.28),t.add(c)}e.position.y=1.55,e.add(vt(gt.cyl,ft.iron,.22,.3,.22,0,0,0).rotateZ(Math.PI/2));const a=$f();a.position.set(0,.7,0),a.scale.setScalar(.8),e.add(a),t.userData.kite=a}else if(i==="pizza"){t.add(vt(gt.box,ft.wood,1.2,.35,.9,0,.18,0));for(const o of[-1,1])t.add(vt(gt.box,ft.woodDark,.12,.9,.12,o*.45,.65,0));e.position.y=1;const a=new _e;a.add(vt(gt.box,ft.woodLight,.12,.12,1.5,0,0,-.4)),a.add(vt(gt.cyl,ft.pizzaCrust,.32,.06,.32,0,.08,-1.1)),a.add(vt(gt.cyl,ft.pizza,.27,.03,.27,0,.12,-1.1,!1)),a.rotation.x=-.35,e.add(a),t.userData.arm=a}else if(i==="lamp"){t.add(vt(gt.cone,ft.brass,.55,.7,.55,0,.35,0)),e.position.y=.7,e.add(vt(gt.capsule,ft.lampGlass,.75,.9,.75,0,.75,0,!1));const a=[];for(let o=0;o<3;o++){const l=vt(gt.sphere,ft.lampBlob,.16,.2,.16,0,.5+o*.3,0,!1);e.add(l),a.push(l)}e.add(vt(gt.cone,ft.brass,.3,.35,.3,0,1.55,0)),t.userData.blobs=a}const n=[];for(let a=0;a<5;a++){const o=vt(gt.leaf,ft.levelPip,.45,.1,.45,Math.cos(a*1.2566)*.95,.15,Math.sin(a*1.2566)*.95,!1);o.visible=a===0,t.add(o),n.push(o)}const s=new ss(1.45,1.7,40,1,0,Math.PI*2);s.rotateX(-Math.PI/2);const r=new le(s,new Le({color:"#9fffb0",transparent:!0,opacity:.8,depthWrite:!1}));return r.position.y=.06,r.visible=!1,t.add(r),t.traverse(a=>{a.isMesh&&a!==r&&a.material!==ft.levelPip&&(a.castShadow=!0)}),Zc(t,1),t.userData.head=e,t.userData.pips=n,t.userData.ring=r,t}function Xf(i,t){i.mesh.userData.pips.forEach((e,n)=>e.visible=n<t),i.mesh.scale.setScalar(1+(t-1)*.08)}function ia(i,t){const e=i.mesh.userData.ring;if(e.visible=t>0,t<=0)return;e.geometry.dispose();const n=new ss(1.45,1.7,40,1,0,Math.PI*2*t);n.rotateX(-Math.PI/2),e.geometry=n}function H1(){const i=new _e;return i.add(vt(gt.ember,ft.ember,1,1.3,1,0,0,0,!1)),i.add(vt(gt.ember,ft.emberCore,.5,.7,.5,0,0,0,!1)),i}function W1(){const i=new le(gt.ring,ft.ringMat);return i.castShadow=!1,i}function qf(){const i=new _e;return i.add(vt(gt.box,ft.chipsBag,.32,.4,.14,0,0,0,!0)),i.add(vt(gt.box,ft.chipsRed,.33,.12,.15,0,.02,0,!1)),i}function Yf(){const i=new ar(1,.08,4,32);return i.rotateX(Math.PI/2),new le(i,new Le({color:"#c8ffd0",transparent:!0,opacity:.7,depthWrite:!1}))}let Ga=null;function X1(){if(Ga)return Ga;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d");["#d8453a","#f2c94c","#d8453a","#f2c94c","#3f9a4a","#f2c94c","#d8453a","#f2c94c"].forEach((n,s)=>{t.fillStyle=n,t.fillRect(0,s*8,64,8)});const e=new mi(i);return e.colorSpace=mn,e.wrapS=e.wrapT=bi,e.repeat.set(1,1.4),e.magFilter=vn,Ga=new Xe({map:e,flatShading:!0}),Ga}function $f(){const i=new _e,t=new Cf([new At(0,.55),new At(.38,0),new At(0,-.75),new At(-.38,0)]),e=new Yc(t,{depth:.035,bevelEnabled:!1});e.translate(0,0,-.0175);const n=new le(e,X1());n.rotation.x=-Math.PI/2.4,n.castShadow=!0,i.add(n);const s=vt(gt.box,ft.woodDark,.025,1.3,.025,0,-.1,.03,!1),r=vt(gt.box,ft.woodDark,.76,.025,.025,0,0,.03,!1);n.add(s,r);const a=new _e;a.position.set(0,-.68,0),n.add(a);const o=[ft.rasR,ft.rasY,ft.rasG,ft.rasR,ft.rasY];let l=a;const c=[];for(let h=0;h<o.length;h++){const u=new _e;u.position.y=h?-.2:0,u.add(vt(gt.box,ft.rope,.015,.2,.015,0,-.1,0,!1));const f=new _e;f.position.y=-.2;for(const p of[-1,1]){const g=vt(gt.cone,o[h],.05,.1,.03,p*.05,0,0,!1);g.rotation.z=p*Math.PI/2,f.add(g)}u.add(f),l.add(u),l=u,c.push(u)}return i.userData.tailSegs=c,i}function jf(){return vt(gt.sphere,ft.bubble,.28,.28,.28,0,0,0,!1)}function q1(){const i=new _e;return i.add(vt(gt.cyl,ft.pizzaCrust,.3,.06,.3,0,0,0,!0)),i.add(vt(gt.cyl,ft.pizza,.25,.03,.25,0,.04,0,!1)),i}const _r=20;function kn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Y1(i){const t=new Xc(i.map(([s,r])=>new G(s,0,r)),!1,"catmullrom",.5),e=t.getLength(),n=t.getSpacedPoints(400);return{curve:t,length:e,samples:n}}function $1(i,t,e,n,s){const a=new Cn(1,1,1,5,5,5),o=a.attributes.position,l=new G,c=new G,h=i/2,u=t/2,f=e/2,p=Math.min(n,h,u,f)*.98,g=s()*10,_=(s()-.5)*.12;for(let d=0;d<o.count;d++){l.set(o.getX(d)*i,o.getY(d)*t,o.getZ(d)*e),c.set(xe.clamp(l.x,-h+p,h-p),xe.clamp(l.y,-u+p,u-p),xe.clamp(l.z,-f+p,f-p)),l.sub(c);const y=l.length();y>0&&l.multiplyScalar(p/y),l.add(c);const b=1+.035*Math.sin(l.x*4.1+g)*Math.sin(l.z*3.7-g)+.025*Math.sin(l.y*6+g*2);l.x*=b,l.z*=b,l.y+=l.x*_,o.setXYZ(d,l.x,l.y,l.z)}a.deleteAttribute("normal"),a.deleteAttribute("uv");const m=kf(a);return m.computeVertexNormals(),m}function j1(i,t,e,n){const s=new Pt(t),r=new Pt(e),a=new Pt,o=[[[2.3,.85,1.9,0,0,0],[1.6,.7,1.4,.2,-.1,.35]],[[1.5,1.5,1.4,-.35,.1,.1],[1.4,.8,1.3,.75,-.2,-.3],[.9,.6,.85,-.3,.05,.6]],[[2.4,.7,2,0,0,.2],[1.8,.65,1.5,-.15,.15,-.25],[1.1,.55,1,.2,-.1,.5]]][n%3],l=[];let c=0,h=0;o.forEach(([d,y,b,x,R,T],E)=>{const A=.88+i()*.24,M=$1(d*A,y*(.9+i()*.2),b*A,Math.min(d,y,b)*.28,i);M.rotateY(T+(i()-.5)*.3);const v=n%3===1&&E===1?0:c;M.translate(x,v+y/2,R),n%3===1&&E===1||(c=v+y*.92),h=Math.max(h,v+y),l.push(M)});const u=Of(l),f=u.attributes.position,p=u.attributes.normal,g=[],_=.95+i()*.1,m=i()*10;for(let d=0;d<f.count;d++){const y=f.getX(d),b=f.getY(d),x=f.getZ(d);a.copy(s).multiplyScalar(_*(.72+.28*xe.smoothstep(b,0,.9))*(p.getY(d)<-.3?.8:1));const R=Math.sin(y*2.3+m)*Math.sin(x*2.7-m)+.5*Math.sin(y*5.1-x*4.3+m),T=xe.smoothstep(p.getY(d),.6,.9)*xe.smoothstep(b,h-.3,h-.08)*xe.smoothstep(R,-.55,0);a.lerp(r,T),g.push(a.r,a.g,a.b)}return u.setAttribute("color",new me(g,3)),u}function Ch(i,t,e,n,s,r,a=12,o={}){const l=o.dressed?.3:1,c=new We(t,e,n,a,3,!0),h=new ss(.001,t,a,4);h.rotateX(-Math.PI/2),h.translate(0,n/2,0);const u=Of([c,h]),f=u.attributes.position,p=i()*10;for(let T=0;T<f.count;T++){const E=f.getX(T),A=f.getY(T),M=f.getZ(T),v=Math.hypot(E,M);if(v<1e-4)continue;const S=Math.atan2(M,E);let I=1+l*(.05*Math.sin(S*3+p)+.035*Math.sin(S*7-p*2)+.025*Math.sin(A*9+S*4)),N=A;A>n/2-1e-4&&v>t*.97&&(I*=.93,N-=.08),f.setXYZ(T,E*I,N,M*I)}u.deleteAttribute("normal"),u.deleteAttribute("uv");const g=kf(u);g.computeVertexNormals(),g.translate(0,n/2,0);const _=new Pt(s),m=new Pt(r),d=new Pt,y=[],b=new Pt("#ece3cc"),x=g.attributes.position,R=g.attributes.normal;for(let T=0;T<x.count;T++){const E=x.getX(T),A=x.getY(T),M=x.getZ(T),v=Math.atan2(M,E),S=Math.hypot(E,M);if(d.copy(_).multiplyScalar(.55+.45*xe.smoothstep(A,0,n*.9)),o.dressed){const P=xe.smoothstep(R.getY(T),.75,.95)*xe.smoothstep(A,n-.15,n-.08),U=1-xe.smoothstep(Math.abs(S-t*.72),.04,.1);d.lerp(b,P*(1-.75*U)),d.multiplyScalar(1-.45*U*P),y.push(d.r,d.g,d.b);continue}const I=Math.sin(E*1.9+p)*Math.sin(M*2.3-p)+.5*Math.sin(v*5+p)+.3*Math.sin(S*4),N=xe.smoothstep(A,n-.25,n-.05)*xe.smoothstep(I,0,.5)*xe.smoothstep(R.getY(T),.2,.7);d.lerp(m,N),y.push(d.r,d.g,d.b)}return g.setAttribute("color",new me(y,3)),g}function Rh(i,t=.55){const e=document.createElement("canvas");e.width=e.height=256;const n=e.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,256,256);const s=kn(4242);for(let l=0;l<90;l++){const c=225+s()*30|0;n.fillStyle=`rgba(${c},${c},${c},0.5)`,n.beginPath(),n.ellipse(s()*256,s()*256,8+s()*22,4+s()*10,s()*3,0,Math.PI*2),n.fill()}n.lineCap="round",n.lineJoin="round";const r=(l,c,h,u,f)=>{n.lineWidth=f,n.strokeStyle="rgba(46,44,50,0.85)",n.beginPath(),n.moveTo(l,c);for(let p=0;p<u;p++)h+=(s()-.5)*.9,l+=Math.cos(h)*9,c+=Math.sin(h)*9,n.lineTo(l,c),s()<.12&&f>1.2&&(n.stroke(),r(l,c,h+(s()<.5?1:-1)*(.6+s()*.6),u>>1,f*.7),n.lineWidth=f,n.strokeStyle="rgba(46,44,50,0.85)",n.beginPath(),n.moveTo(l,c));n.stroke()};for(let l=0;l<9;l++){const c=s()*256,h=s()*256,u=s()*6.28,f=5+(s()*7|0),p=1.6+s()*1.2;for(const[g,_]of[[0,0],[256,0],[-256,0],[0,256],[0,-256]])n.save(),n.translate(g,_),r(c,h,u,f,p),n.restore()}const a=new mi(e);a.colorSpace=mn,a.wrapS=a.wrapT=bi,a.anisotropy=4;const o=new Xe({vertexColors:!0});return o.onBeforeCompile=l=>{l.uniforms.uCrack={value:a},l.uniforms.uWaterC={value:new Pt(i)},l.vertexShader=`varying vec3 vRP;
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
        vec3 q = vRP * ${t.toFixed(3)}; // sprekk-tetthet per objektrom-enhet (store fyrfoten trenger glissere)
        vec3 cr = texture2D(uCrack, q.zy).rgb * w.x + texture2D(uCrack, q.xz).rgb * w.y + texture2D(uCrack, q.xy).rgb * w.z;
        diffuseColor.rgb *= cr;
        // Under vannflata (0,05) tar steinen vannets farge (som de turkise undervannssteinene i raw1):
        // flate blokk-topper rett under overflata viste seg ellers som lyse grå firkanter i det klare vannet
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.35 + uWaterC * 0.55, 0.8 * smoothstep(-0.03, 0.06, 0.05 - vRWY));
      }`)},o.customProgramCacheKey=()=>`rock${t}`,o}function Z1(i,t,e){const n=D1(e),s=new G(e.lighthouse[0],0,e.lighthouse[1]),r=e.paths.map(Y1),a=r.flatMap(z=>z.samples),o=(z,O)=>{let et=1/0;for(let pt=0;pt<a.length;pt+=3){const yt=a[pt],Rt=(yt.x-z)**2+(yt.z-O)**2;Rt<et&&(et=Rt)}return Math.sqrt(et)};if(e.plateausAuto&&!e.plateaus){const z=kn(500+e.seed),O=[];for(const et of e.plateausAuto){let pt=null,yt=-1;for(let Rt=0;Rt<500;Rt++){const Tt=z()*Math.PI*2,nt=12+z()*24,Xt=Math.cos(Tt)*nt,Vt=Math.sin(Tt)*nt,de=o(Xt,Vt);if(de<et.r+3.5||Math.hypot(Xt-s.x,Vt-s.z)<et.r+9||O.some(Pe=>Math.hypot(Pe.x-Xt,Pe.z-Vt)<Pe.r+et.r+5))continue;const Ce=Math.min(de-et.r,9)+z()*.5;Ce>yt&&(yt=Ce,pt={x:Xt,z:Vt,...et})}pt&&O.push(pt)}if(e.plateaus=O,e.waterfall&&O[0]){const et=O[0],pt=e.waterfall;let yt=0,Rt=-1;for(let Xt=0;Xt<16;Xt++){const Vt=Xt/16*Math.PI*2,de=et.x+Math.cos(Vt)*(et.r+3.2),Ce=et.z+Math.sin(Vt)*(et.r+3.2),Pe=o(de,Ce);Pe>Rt&&(Rt=Pe,yt=Vt)}const Tt=Math.cos(yt),nt=Math.sin(yt);pt.pool=[et.x+Tt*(et.r-2.4),et.z+nt*(et.r-2.4)],pt.lip=[et.x+Tt*(et.r-.3),et.z+nt*(et.r-.3)],pt.basin=[et.x+Tt*(et.r+3),et.z+nt*(et.r+3)]}}const l=e.fjord,c=e.nes,h=(z,O)=>{if(e.shape==="fjord"){const et=O+30+2.2*Math.sin(z*.21)+1.2*Math.sin(z*.53+1),pt=xe.clamp(O,c.z1,c.z0),yt=c.r-Math.hypot(z-c.x,O-pt)+(O<c.z1?0:.6*Math.sin(O*.7));return Math.max(et,yt)}return n(Math.atan2(O,z))-Math.hypot(z,O)},u=(z,O,et=!1)=>{const pt=xe.smoothstep(h(z,O),-3,7),yt=.9+.7*Math.sin(z*.17+1)*Math.cos(O*.21)+.35*Math.sin(z*.5+O*.4)+.3*Math.sin(z*.31-O*.23+2.1)+.18*Math.cos(z*.73+O*.61),Rt=2.4*Math.exp(-((z-s.x-2)**2+(O-s.z+1)**2)/60);let Tt=-2.2+pt*(2.2+yt+Rt);if(pt>.85&&Tt<.35&&(Tt=Math.max(-.42,.35-(.35-Tt)*3.2)),l){const nt=Math.max(xe.smoothstep(Math.abs(z),l.wall-3,l.wall+6),xe.smoothstep(O,l.top+6,l.top+14));Tt+=nt*(7+1.5*Math.sin(O*.13+z*.05));const Xt=Math.abs(z-l.xc(O)),Vt=1-xe.smoothstep(O,l.top-6,l.top+2);Xt<l.w+1.5&&Vt>0&&(Tt=Math.min(Tt,xe.lerp(Tt,-1.6,Vt*(1-xe.smoothstep(Xt,l.w-.8,l.w+1.5)))))}for(const nt of e.plateaus||[]){const Xt=Math.hypot(z-nt.x,O-nt.z),Vt=Math.atan2(O-nt.z,z-nt.x),de=nt.r+Math.sin(Vt*5+nt.x)*.8+Math.sin(Vt*11)*.3;Tt+=nt.h*xe.smoothstep(de-Xt,0,1.3)}if(e.waterfall&&!et){const nt=e.waterfall,Xt=Math.hypot(z-nt.pool[0],O-nt.pool[1]);Xt<nt.poolR+.6&&(nt._lvl??(nt._lvl=u(nt.pool[0],nt.pool[1],!0)-.12),Tt=Math.min(Tt,nt._lvl-.48*Math.sqrt(Math.max(0,1-Xt/(nt.poolR+.6)))));const Vt=xe.clamp(((z-nt.pool[0])*(nt.lip[0]-nt.pool[0])+(O-nt.pool[1])*(nt.lip[1]-nt.pool[1]))/((nt.lip[0]-nt.pool[0])**2+(nt.lip[1]-nt.pool[1])**2),0,1),de=nt.pool[0]+(nt.lip[0]-nt.pool[0])*Vt,Ce=nt.pool[1]+(nt.lip[1]-nt.pool[1])*Vt;Math.hypot(z-de,O-Ce)<.75&&nt._lvl!==void 0&&(Tt=Math.min(Tt,nt._lvl-.25));const Pe=Math.hypot(z-nt.basin[0],O-nt.basin[1]);Pe<nt.basinR&&(Tt=Math.min(Tt,Math.max(-.42,.05-.47*Math.sqrt(1-Pe/nt.basinR))))}if(e.volcano){const nt=e.volcano,Xt=Math.hypot(z-nt.x,O-nt.z);Tt+=nt.h*Math.max(0,1-Xt/nt.r)**1.4-nt.h*.5*Math.max(0,1-Xt/(nt.r*.25))}return Tt},f=68,p=t.mobile?160:176,g=new Float32Array((p+1)*(p+1)),_=new Float32Array((p+1)*(p+1));for(let z=0;z<=p;z++)for(let O=0;O<=p;O++){const et=-f+O/p*f*2,pt=-f+z/p*f*2,yt=o(et,pt);_[z*(p+1)+O]=yt;let Rt=u(et,pt);const Tt=xe.smoothstep(yt,1.4,3.2),nt=Math.max(u(et,pt)*.6+.3,.45);Rt=xe.lerp(Math.min(Rt,nt+.1),Rt,Tt),l&&Math.abs(pt-l.bridgeZ)<4&&Math.abs(et-l.xc(pt))<l.w+2&&yt<2.2&&(Rt=Math.max(Rt,.5)),g[z*(p+1)+O]=Rt}const m=(z,O,et)=>{const pt=xe.clamp((O+f)/(f*2)*p,0,p-.001),yt=xe.clamp((et+f)/(f*2)*p,0,p-.001),Rt=Math.floor(pt),Tt=Math.floor(yt),nt=pt-Rt,Xt=yt-Tt,Vt=z[Tt*(p+1)+Rt],de=z[Tt*(p+1)+Rt+1],Ce=z[(Tt+1)*(p+1)+Rt],Pe=z[(Tt+1)*(p+1)+Rt+1];return(Vt*(1-nt)+de*nt)*(1-Xt)+(Ce*(1-nt)+Pe*nt)*Xt},d=(z,O)=>m(g,z,O),y=(z,O)=>m(_,z,O),b=(z,O)=>d(z,O)>.35,x=.5,R=(z,O)=>Math.max(Math.abs(d(z+.4,O)-d(z-.4,O)),Math.abs(d(z,O+.4)-d(z,O-.4)))/.8,T=(z,O)=>!!l&&Math.abs(O-l.bridgeZ)<4&&Math.abs(z-l.xc(O))<l.w+1.5&&y(z,O)<2.6,E=new Pt("#cfeaff"),A=(z,O)=>d(z,O)>.05-x&&R(z,O)<1.05,M=t.mobile?170:256,v=new Jn(f*2,f*2,M,M);v.rotateX(-Math.PI/2);const S=v.attributes.position,I=new Float32Array(S.count*3),N=new Float32Array(S.count*3),P=new Float32Array(S.count),U=new Float32Array(S.count*4),B=new Pt,H=new Pt,V=e.palette,$=new Pt(e.rock[0]).multiplyScalar(.7),Q=new Pt(e.rock[0]).multiplyScalar(1.08),st=new Pt,Et=new Pt(V.sand),Ot=new Pt(V.grass),W=new Pt(V.grass2),Z=new Pt(V.path),ht=new Pt(V.deep),at=new Pt,mt=kn(7);for(let z=0;z<S.count;z++){const O=S.getX(z),et=S.getZ(z),pt=d(O,et);S.setY(z,pt);const yt=y(O,et),Rt=(mt()-.5)*.04,Tt=at.copy(Ot).lerp(W,xe.clamp((pt-1)*.6+mt()*.3,0,1)).offsetHSL(0,0,Rt);N.set([Tt.r,Tt.g,Tt.b],z*3),B.copy(ht).lerp(Et,xe.smoothstep(pt,0,.3)).offsetHSL(0,0,Rt),I.set([B.r,B.g,B.b],z*3);const nt=.5+.5*Math.sin(O*1.7+et*.9)*Math.cos(et*1.3-O*.6);P[z]=1.9-Math.min(yt,6)+(nt-.5)*(V.pathMix??.3)*2.4-Math.max(0,.3-pt)*2.5;let Xt=0;l&&T(O,et)&&(H.copy(E),Xt=.85);const Vt=R(O,et);if(Vt>.75){const de=.5+.5*Math.sin(pt*7.5+Math.sin(O*.7+et*.5)*1.5);st.copy($).lerp(Q,de);const Ce=xe.smoothstep(Vt,.75,1.3);H.copy(Xt?H:st).lerp(st,Ce),Xt=Math.max(Xt,Ce)}U.set([H.r,H.g,H.b,Xt],z*4)}v.setAttribute("aLow",new Ve(I,3)),v.setAttribute("aGrass",new Ve(N,3)),v.setAttribute("aPathF",new Ve(P,1)),v.setAttribute("aOver",new Ve(U,4)),v.computeVertexNormals();const Dt=new Xe({color:"#ffffff"});Dt.onBeforeCompile=z=>{z.vertexShader=z.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.g *= 1.0 + 0.025 * n1;`)};const Ut=new le(v,Dt);Ut.receiveShadow=!0,i.add(Ut);const Wt=[],dt=(z,O)=>Math.hypot(z-s.x,O-s.z)>6;for(const[z,O]of r.entries()){let et=z%2===0?1:-1,pt=0;for(let yt=.16;yt<.95&&pt<6;yt+=.055){const Rt=O.curve.getPointAt(yt),Tt=O.curve.getTangentAt(yt),nt=new G(-Tt.z,0,Tt.x).normalize();for(const Xt of[et,-et]){const Vt=Rt.x+nt.x*3.6*Xt,de=Rt.z+nt.z*3.6*Xt;if(!(y(Vt,de)<2.7||!b(Vt,de)||!dt(Vt,de))&&!Wt.some(Ce=>Math.hypot(Ce.x-Vt,Ce.z-de)<5.2)&&!(e.volcano&&Math.hypot(Vt-e.volcano.x,de-e.volcano.z)<e.volcano.r+2)){Wt.push({x:Vt,z:de,tower:null}),pt++;break}}et=-et}}const Mt=Rh(e.water.mid),k=new Le({color:new Pt("#ffd27a").multiplyScalar(1.6),transparent:!0,opacity:.75,depthWrite:!1}),qt=new Le({color:new Pt("#ffe9a8").multiplyScalar(2),transparent:!0,opacity:.85,depthWrite:!1}),bt=Ch(kn(61+e.seed),1.3,1.45,.98,e.rock[0],e.rock[1],8,{dressed:!0});bt.translate(0,-.1,0);const kt=new ss(.55,.75,6);kt.rotateX(-Math.PI/2);const It=new vr(1,0),ne=Wt.length,Y=new gn(bt,Mt,ne),C=new gn(kt,k,ne),w=new gn(It,qt,ne*3);Y.castShadow=Y.receiveShadow=!0;const X=new He;Wt.forEach((z,O)=>{z.y0=d(z.x,z.z),z.y=z.y0+.88,X.position.set(z.x,z.y0,z.z),X.rotation.set(0,O,0),X.scale.setScalar(1),X.updateMatrix(),Y.setMatrixAt(O,X.matrix)}),i.add(Y,C,w),pc(Y,"rock");const tt=z=>{Wt.forEach((O,et)=>{const pt=!O.tower;X.position.set(O.x,O.y0+.9,O.z),X.rotation.set(0,z*.5,0),X.scale.setScalar(pt?1:0),X.updateMatrix(),C.setMatrixAt(et,X.matrix);for(let yt=0;yt<3;yt++){const Rt=z*.4+yt*2.1+O.x,Tt=(Rt%1+1)%1;X.position.set(O.x+Math.cos(Rt*2.3)*.55,O.y0+1+Tt*1.1,O.z+Math.sin(Rt*2.3)*.55),X.rotation.set(0,Rt*3,0);const nt=pt?.07*Math.sin(Tt*Math.PI):0;X.scale.set(nt,nt*1.6,nt),X.updateMatrix(),w.setMatrixAt(et*3+yt,X.matrix)}}),C.instanceMatrix.needsUpdate=!0,w.instanceMatrix.needsUpdate=!0},it=new _e,rt=d(s.x,s.z);it.position.set(s.x,rt,s.z);const Ft=(()=>{const z=document.createElement("canvas");z.width=512,z.height=512;const O=z.getContext("2d");O.fillStyle="#f6f1e6",O.fillRect(0,0,512,512);const et=kn(5);for(let yt=0;yt<520;yt++){const Rt=et()*512,Tt=et()*512,nt=2+et()*9,Xt=et()<.65;O.fillStyle=Xt?`rgba(${90+et()*40},${120+et()*40},${60+et()*20},${.12+et()*.18})`:`rgba(${130+et()*30},${95+et()*20},60,${.12+et()*.15})`,O.beginPath(),O.ellipse(Rt,Tt,nt,nt*(.4+et()*.6),et()*3,0,Math.PI*2),O.fill()}for(let yt=0;yt<1200;yt++){O.strokeStyle=`rgba(190,170,140,${.04+et()*.07})`,O.lineWidth=1;const Rt=et()*512,Tt=et()*512;O.beginPath(),O.moveTo(Rt,Tt),O.lineTo(Rt+(et()-.5)*8,Tt+6+et()*20),O.stroke()}for(let yt=0;yt<26;yt++){const Rt=et()*512;O.strokeStyle=et()<.5?"rgba(255,255,255,0.35)":"rgba(150,130,100,0.18)",O.lineWidth=2+et()*5,O.beginPath(),O.moveTo(Rt,512),O.bezierCurveTo(Rt+40,350,Rt-30,160,Rt+20+et()*40,0),O.stroke()}O.strokeStyle="rgba(175,145,100,0.55)",O.lineWidth=4,O.beginPath(),O.moveTo(60,512),O.bezierCurveTo(90,330,110,180,150,0),O.stroke();const pt=new mi(z);return pt.colorSpace=mn,pt.wrapS=bi,pt})(),St=new Xe({map:Ft}),Lt=(()=>{const z=document.createElement("canvas");z.width=z.height=128;const O=z.getContext("2d");O.fillStyle="#e9dcbf",O.fillRect(0,0,128,128),O.strokeStyle="#a88d62",O.lineWidth=3,O.beginPath();for(let pt=0;pt<Math.PI*9;pt+=.1){const yt=4+pt*2;O.lineTo(64+Math.cos(pt)*yt,64+Math.sin(pt)*yt)}O.stroke();const et=new mi(z);return et.colorSpace=mn,et})(),ae=new Xe({color:"#e6d8b8"}),wt=new Xe({map:Lt}),Yt=new Xe({color:"#3a3330",flatShading:!0}),oe=new Xe({color:"#b8b2aa",flatShading:!0}),ce=(()=>{const z=document.createElement("canvas");z.width=256,z.height=128;const O=z.getContext("2d"),et=O.createLinearGradient(0,0,0,128);et.addColorStop(0,"#fff0b0"),et.addColorStop(.45,"#ffb040"),et.addColorStop(1,"#ff5a10"),O.fillStyle=et,O.fillRect(0,0,256,128);const pt=kn(11);for(let Rt=0;Rt<70;Rt++){const Tt=pt();O.fillStyle=Tt<.5?`rgba(70,60,55,${.5+pt()*.4})`:`rgba(170,165,160,${.5+pt()*.4})`,O.beginPath(),O.ellipse(pt()*256,20+pt()*108,4+pt()*14,2+pt()*6,pt()*3,0,Math.PI*2),O.fill()}O.strokeStyle="rgba(60,30,20,0.6)",O.lineWidth=1.5;for(let Rt=0;Rt<40;Rt++){const Tt=pt()*256,nt=pt()*128;O.beginPath(),O.moveTo(Tt,nt),O.lineTo(Tt+(pt()-.5)*30,nt+(pt()-.5)*20),O.stroke()}const yt=new mi(z);return yt.colorSpace=mn,yt})(),Zt=new Le({map:ce,color:new Pt("#ffffff").multiplyScalar(2.2)});function ye({len:z,rTop:O,rBot:et,crutchH:pt,seg:yt,bend:Rt,glowMat:Tt,shadow:nt}){const Xt=new _e,Vt=new le(new We(et*.98,et*.95,pt,yt),[ae,ae,wt]);Vt.position.y=pt/2,Vt.castShadow=nt,Xt.add(Vt);const de=new We(O,et,z,yt,8,!0),Ce=de.attributes.position,Pe=kn(Math.round(z*100)),Ti=Array.from({length:6},()=>[Pe()*6.28,Pe()*3,.03+Pe()*.04]);for(let Ue=0;Ue<Ce.count;Ue++){const ni=Ce.getY(Ue),ii=(ni+z/2)/z,Ar=Math.atan2(Ce.getZ(Ue),Ce.getX(Ue));let zs=1+Math.sin(Ar*7+ni*3)*.018;for(const[Md,yd,bd]of Ti)zs+=Math.cos(Ar-Md)*Math.sin(ii*6+yd)*bd*.5;Ce.setXYZ(Ue,Ce.getX(Ue)*zs+Rt*ii*ii*z,ni,Ce.getZ(Ue)*zs)}de.translate(0,z/2,0),de.computeVertexNormals();const Re=new le(de,St);Re.position.y=pt,Re.castShadow=nt,Re.receiveShadow=!0,Xt.add(Re);const _n=Rt*z,ei=pt+z,Mn=new We(O*1.02,O*1.04,O*.35,yt,1,!0),Nn=Mn.attributes.position;for(let Ue=0;Ue<Nn.count;Ue++)Nn.getY(Ue)>0&&Nn.setY(Ue,Nn.getY(Ue)+Math.sin(Ue*2.7)*O*.12);Mn.computeVertexNormals();const zn=new le(Mn,Yt);zn.position.set(_n,ei+O*.12,0),Xt.add(zn);const Vi=new le(new Vn(O*.97,yt,6,0,Math.PI*2,0,Math.PI/2),Tt);Vi.scale.y=.38,Vi.position.set(_n,ei+O*.2,0),Xt.add(Vi);const To=[];for(let Ue=0;Ue<5;Ue++){const ni=new le(new _o(O*(.2+Ue%3*.07),0),oe),ii=Ue*1.25+.3;ni.position.set(_n+Math.cos(ii)*O*.55,ei+O*.33,Math.sin(ii)*O*.55),ni.scale.y=.4,Xt.add(ni),To.push(ni)}const Ao=new Gn(O*.28,O*1.1,6,4),Ns=Ao.attributes.position;for(let Ue=0;Ue<Ns.count;Ue++){const ni=Ns.getY(Ue),ii=(ni/(O*1.1)+.5)*2.2,Ar=Ns.getX(Ue),zs=Ns.getZ(Ue);Ns.setX(Ue,Ar*Math.cos(ii)-zs*Math.sin(ii)+(ni+O*.55)*.25),Ns.setZ(Ue,Ar*Math.sin(ii)+zs*Math.cos(ii))}Ao.computeVertexNormals();const Tr=new le(Ao,Yt);return Tr.position.set(_n+O*.1,ei+O*.7,O*.1),Tr.rotation.z=-.35,Xt.add(Tr),Xt.userData={glow:Vi,top:new G(_n,ei,0),charRing:zn,ashFlakes:To,body:Re,twist:Tr,len:z,rTop:O,rBot:et,bend:Rt,crutchH:pt,base:Re.geometry.attributes.position.array.slice(),topParts:[zn,Vi,Tr,...To].map(Ue=>[Ue,Ue.position.clone(),Ue.scale.clone()])},Xt}const ue=new Pt(e.rock[0]).multiplyScalar(.86),be=new le(Ch(kn(67+e.seed),3.3,3.9,1,ue,e.rock[1],16),Rh(e.water.mid,.2));be.position.y=-.2,be.castShadow=be.receiveShadow=!0,it.add(be),ua(be,"rock");const q=7.4,zt=1.4,lt=ye({len:q,rTop:2.35,rBot:.95,crutchH:zt,seg:22,bend:.06,glowMat:Zt,shadow:!0});lt.position.y=.75,lt.rotation.set(.06,0,-.03);const _t=lt.userData.charRing;it.add(lt);const Bt=new He;Bt.position.y=zt+q+1.2,lt.add(Bt);const Gt=new ea("#ff8a3a",40,34,1.5);Gt.position.y=zt+q+1.4,lt.add(Gt);const fe=new Gn(2.2,16,16,6,!0);fe.translate(0,-8,0);{const z=fe.attributes.position,O=new Float32Array(z.count*3);for(let et=0;et<z.count;et++){const pt=Math.pow(1-Math.min(1,-z.getY(et)/16),1.6);O.set([pt,pt,pt],et*3)}fe.setAttribute("color",new Ve(O,3))}fe.rotateZ(Math.PI/2);const Fe=new Le({color:"#ffc890",vertexColors:!0,transparent:!0,opacity:.05,blending:gi,depthWrite:!1,side:Je,fog:!1}),ke=new _e;ke.position.y=zt+q+.8;const we=new le(fe,Fe),xn=we.clone();xn.rotation.y=Math.PI,ke.add(we,xn),lt.add(ke);const dn=new ea("#ffa050",12,10,1.4);dn.position.set(0,1.3,4.6),it.add(dn),i.add(it),it.updateMatrixWorld(!0);const Qn=new G;Bt.getWorldPosition(Qn);const F=lt.userData,xt=[Bt,Gt,ke].map(z=>[z,z.position.y]),ut=z=>F.rBot+(F.rTop-F.rBot)*z;function Kt(z){const O=.15+.85*Math.max(0,Math.min(1,z)),et=F.body.geometry.attributes.position,pt=F.base;for(let nt=0;nt<et.count;nt++){const Xt=pt[nt*3+1],Vt=Xt/F.len,de=Vt*O,Ce=ut(de)/ut(Vt);et.setXYZ(nt,(pt[nt*3]-F.bend*Vt*Vt*F.len)*Ce+F.bend*de*de*F.len,de*F.len,pt[nt*3+2]*Ce)}et.needsUpdate=!0,F.body.geometry.computeVertexNormals(),F.body.geometry.computeBoundingSphere();const yt=(O-1)*F.len,Rt=ut(O)/F.rTop,Tt=F.bend*F.len*(O*O-1);for(const[nt,Xt,Vt]of F.topParts)nt.position.set(F.top.x+(Xt.x-F.top.x)*Rt+Tt,Xt.y+yt,Xt.z*Rt),nt.scale.set(Vt.x*Rt,Vt.y*Rt,Vt.z*Rt);for(const[nt,Xt]of xt)nt.position.y=Xt+yt;it.updateMatrixWorld(!0),Bt.getWorldPosition(Qn)}const te={tip:Qn,pos:new G(s.x,rt,s.z),lights:_r,flamePos(){return Qn.clone()},setLights(z){this.lights=z;const O=z/_r;Kt(O),this.glow=O,dn.intensity=3+9*O,Fe.opacity=.01+.04*O,_t.scale.y*=1+(1-O)*2.5}},Ct=kn(42),Jt=[];for(let z=0;z<3e3&&Jt.length<(t.mobile?70:104);z++){const O=(Ct()-.5)*102,et=(Ct()-.5)*102,pt=d(O,et);if(pt<.75||y(O,et)<3.2||!dt(O,et)||Wt.some(nt=>Math.hypot(nt.x-O,nt.z-et)<3.2)||Jt.some(nt=>Math.hypot(nt.x-O,nt.z-et)<2.4)||e.volcano&&Math.hypot(O-e.volcano.x,et-e.volcano.z)<e.volcano.r)continue;const yt=pt<1.45?e.trees.beach:e.trees.inland;let Rt=Ct(),Tt="bush";for(const[nt,Xt]of Object.entries(yt)){if(Rt<Xt){Tt=nt;break}Rt-=Xt}Jt.push({x:O,z:et,y:pt,s:(Tt==="bush"?.8:.75)+Ct()*.45,phase:Ct()*6.28,kind:Tt})}if(e.trees.inland.bush){const z=kn(303+e.seed),O=Jt.filter(et=>et.kind!=="bush"&&et.y>=1);for(const et of O){if(z()>(t.mobile?.6:.75))continue;const pt=1+Math.floor(z()*3);for(let yt=0;yt<pt;yt++){const Rt=z()*6.28,Tt=1.3+z()*1,nt=et.x+Math.cos(Rt)*Tt,Xt=et.z+Math.sin(Rt)*Tt,Vt=d(nt,Xt);Vt<1||y(nt,Xt)<3||!dt(nt,Xt)||Wt.some(de=>Math.hypot(de.x-nt,de.z-Xt)<3)||Jt.some(de=>de!==et&&Math.hypot(de.x-nt,de.z-Xt)<1.3)||Jt.push({x:nt,z:Xt,y:Vt,s:.55+z()*.35,phase:z()*6.28,kind:"bush"})}}}const re=w1(i,Jt,t,e),ge=new He,Ee=[];for(let z=0;z<1200&&Ee.length<(t.mobile?40:56);z++){const O=Ct()*Math.PI*2,et=n(O)-3+Ct()*5.5,pt=Math.cos(O)*et,yt=Math.sin(O)*et;y(pt,yt)<3.4||d(pt,yt)<-1.2||Ee.some(Rt=>Math.hypot(Rt.x-pt,Rt.z-yt)<2.2)||Ee.push({x:pt,z:yt,s:.6+Ct()*1.2,r:Ct()*6})}for(const z of e.plateaus||[]){const O=Math.round(z.r*2*Math.PI/2.3);for(let et=0;et<O;et++){const pt=et/O*Math.PI*2+Ct()*.2,yt=z.r+Math.sin(pt*5+z.x)*.8+Math.sin(pt*11)*.3-.2,Rt=z.x+Math.cos(pt)*yt,Tt=z.z+Math.sin(pt)*yt;e.waterfall&&Math.hypot(Rt-e.waterfall.lip[0],Tt-e.waterfall.lip[1])<2.2||y(Rt,Tt)<2.6||Ee.push({x:Rt,z:Tt,s:1.3+Ct()*.9,r:Ct()*6,cliff:!0})}}[0,1,2].map(z=>j1(kn(31+z*7+e.seed),e.rock[0],e.rock[1],z)).map((z,O)=>{const et=Ee.filter((yt,Rt)=>Rt%3===O),pt=new gn(z,Mt,Math.max(1,et.length));return pt.count=et.length,et.forEach((yt,Rt)=>{ge.position.set(yt.x,d(yt.x,yt.z)-.2*yt.s,yt.z),ge.rotation.set(0,yt.r*2,0),ge.scale.set(yt.s*1.1,yt.s*.9,yt.s),ge.updateMatrix(),pt.setMatrixAt(Rt,ge.matrix)}),pt.castShadow=pt.receiveShadow=!0,i.add(pt),pc(pt,"rock"),pt});const qn=d1(i,{heightAt:d,pathDist:y,plinths:Wt,paths:r,lighthouse:te,landDist:h},t,kn(99+e.seed),n,e),ti=N1(i,{heightAt:d,pathDist:y,paths:r,lighthouse:te,islandEdge:n},t,e),D=[...Jt.map(z=>[z.x,z.z,1.3*z.s]),...Ee.map(z=>[z.x,z.z,z.s*1.6]),...Wt.map(z=>[z.x,z.z,1.9])],K=(z,O)=>{let et=1;for(const[pt,yt,Rt]of D){const Tt=(pt-z)**2+(yt-O)**2;Tt<Rt*Rt&&(et=Math.min(et,.55+.45*Math.sqrt(Tt)/Rt))}return et},ot=T1(i,{heightAt:d,pathDist:y,plinths:Wt,lighthouse:te,extrasBlock:ti.blocks,shadeAt:K},t,e,kn(7+e.seed)),ct={palm:.9,round:1.45,bush:1,pine:1.35,dead:.6};F1(i,[...Jt.map(z=>({x:z.x,y:z.y,z:z.z,r:(ct[z.kind]??1)*z.s})),...Ee.map(z=>({x:z.x,y:d(z.x,z.z),z:z.z,r:z.s*(z.cliff?1.7:1.55)})).filter(z=>z.y>.05),...Wt.map(z=>({x:z.x,y:z.y0,z:z.z,r:1.95})),{x:s.x,y:rt,z:s.z,r:4.8}]);const j=Float32Array.from(g),Nt=[...Ee.map(z=>({x:z.x,z:z.z,r:z.s*.85})),...qn.obstacles];for(const z of Nt){const O=z.r+1,et=f*2/p,pt=Math.floor((z.x-O+f)/et),yt=Math.ceil((z.x+O+f)/et),Rt=Math.floor((z.z-O+f)/et),Tt=Math.ceil((z.z+O+f)/et);for(let nt=Math.max(0,Rt);nt<=Math.min(p,Tt);nt++)for(let Xt=Math.max(0,pt);Xt<=Math.min(p,yt);Xt++){const Vt=-f+Xt*et,de=-f+nt*et,Ce=Math.max(0,Math.hypot(Vt-z.x,de-z.z)-z.r);if(Ce>.9)continue;const Pe=nt*(p+1)+Xt,Ti=.06-Ce*.35,Re=1-Ce/.9;j[Pe]=Math.max(j[Pe],j[Pe]+(Ti-j[Pe])*Re*Re)}}if(e.waterfall&&e.waterfall._lvl!==void 0){const z=e.waterfall;_h(i,{heightTex:Mh(j,p+1),ext:f,grid:p,quality:t,sunDir:new G(24,17,4),colors:e.water,level:z._lvl,size:9,maxDepth:.8,center:[(z.pool[0]+z.lip[0])/2,(z.pool[1]+z.lip[1])/2]})}const $t=_h(i,{heightTex:Mh(j,p+1),ext:f,grid:p,quality:t,sunDir:new G(24,17,4),colors:e.water}),ie=[{x:s.x,z:s.z,r:3.5},...Wt.map(z=>({x:z.x,z:z.z,r:1.4})),...re.colliders,...Ee.filter(z=>d(z.x,z.z)>-.45).map(z=>({x:z.x,z:z.z,r:z.s*.85})),...qn.colliders,...ti.colliders];return{def:e,paths:r,plinths:Wt,lighthouse:te,heightAt:d,pathDist:y,slopeAt:R,isLand:b,isIce:T,landDist:h,isWalkable:(z,O)=>A(z,O)&&!ti.blocks(z,O),colliders:ie,update:z=>{$t.update(z),qn.update(z),ti.update(z),ot.update(z);const O=te.glow??1,et=.75+.25*Math.sin(z*1.3)+.1*Math.sin(z*7.1);Zt.color.setRGB(1,.85,.75).multiplyScalar(O>0?(.7+1.5*O)*et:.12),Gt.intensity=(8+40*O)*et,ke.rotation.y=z*.6,re.update(z),tt(z)},terrain:Ut,extras:ti,grass:ot}}const Xr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Us{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const K1=new Oc(-1,1,1,-1,0,1);class J1 extends ze{constructor(){super(),this.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new me([0,2,0,0,2,0],2))}}const Q1=new J1;class yo{constructor(t){this._mesh=new le(Q1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,K1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Zf extends Us{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof $e?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ui.clone(t.uniforms),this.material=new $e({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new yo(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ph extends Us{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class t_ extends Us{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class e_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new At);this._width=n.width,this._height=n.height,e=new Un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Zf(Xr),this.copyPass.material.blending=pn,this.clock=new If}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ph!==void 0&&(a instanceof Ph?n=!0:a instanceof t_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new At);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class n_ extends Us{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const Va={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new At},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ie},cameraProjectionMatrixInverse:{value:new Ie},cameraWorldMatrix:{value:new Ie},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new G(-1,-1,-1)},sceneBoxMax:{value:new G(1,1,1)}},vertexShader:`

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
		}`},Ha={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},hl={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function i_(i=5){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=s_(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){const o=e[a],l=2*Math.PI*o/n,c=new G(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}const r=new go(s,t,t);return r.wrapS=bi,r.wrapT=bi,r.needsUpdate=!0,r}function s_(i){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0);let s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}const Wa={defines:{SAMPLES:16,SAMPLE_VECTORS:Kf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new At},cameraProjectionMatrixInverse:{value:new Ie},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Kf(i,t,e){const n=r_(i,t,e);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function r_(i,t,e){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new G(Math.cos(r),Math.sin(r),a))}return n}class a_{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r;const a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,p=c-u,g=t-f,_=e-p;let m,d;g>_?(m=1,d=0):(m=0,d=1);const y=g-m+h,b=_-d+h,x=g-1+2*h,R=_-1+2*h,T=l&255,E=c&255,A=this.perm[T+this.perm[E]]%12,M=this.perm[T+m+this.perm[E+d]]%12,v=this.perm[T+1+this.perm[E+1]]%12;let S=.5-g*g-_*_;S<0?n=0:(S*=S,n=S*S*this.dot(this.grad3[A],g,_));let I=.5-y*y-b*b;I<0?s=0:(I*=I,s=I*I*this.dot(this.grad3[M],y,b));let N=.5-x*x-R*R;return N<0?r=0:(N*=N,r=N*N*this.dot(this.grad3[v],x,R)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o;const c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),f=Math.floor(n+c),p=1/6,g=(h+u+f)*p,_=h-g,m=u-g,d=f-g,y=t-_,b=e-m,x=n-d;let R,T,E,A,M,v;y>=b?b>=x?(R=1,T=0,E=0,A=1,M=1,v=0):y>=x?(R=1,T=0,E=0,A=1,M=0,v=1):(R=0,T=0,E=1,A=1,M=0,v=1):b<x?(R=0,T=0,E=1,A=0,M=1,v=1):y<x?(R=0,T=1,E=0,A=0,M=1,v=1):(R=0,T=1,E=0,A=1,M=1,v=0);const S=y-R+p,I=b-T+p,N=x-E+p,P=y-A+2*p,U=b-M+2*p,B=x-v+2*p,H=y-1+3*p,V=b-1+3*p,$=x-1+3*p,Q=h&255,st=u&255,Et=f&255,Ot=this.perm[Q+this.perm[st+this.perm[Et]]]%12,W=this.perm[Q+R+this.perm[st+T+this.perm[Et+E]]]%12,Z=this.perm[Q+A+this.perm[st+M+this.perm[Et+v]]]%12,ht=this.perm[Q+1+this.perm[st+1+this.perm[Et+1]]]%12;let at=.6-y*y-b*b-x*x;at<0?s=0:(at*=at,s=at*at*this.dot3(this.grad3[Ot],y,b,x));let mt=.6-S*S-I*I-N*N;mt<0?r=0:(mt*=mt,r=mt*mt*this.dot3(this.grad3[W],S,I,N));let Dt=.6-P*P-U*U-B*B;Dt<0?a=0:(Dt*=Dt,a=Dt*Dt*this.dot3(this.grad3[Z],P,U,B));let Ut=.6-H*H-V*V-$*$;return Ut<0?o=0:(Ut*=Ut,o=Ut*Ut*this.dot3(this.grad3[ht],H,V,$)),32*(s+r+a+o)}noise4d(t,e,n,s){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,f,p,g;const _=(t+e+n+s)*l,m=Math.floor(t+_),d=Math.floor(e+_),y=Math.floor(n+_),b=Math.floor(s+_),x=(m+d+y+b)*c,R=m-x,T=d-x,E=y-x,A=b-x,M=t-R,v=e-T,S=n-E,I=s-A,N=M>v?32:0,P=M>S?16:0,U=v>S?8:0,B=M>I?4:0,H=v>I?2:0,V=S>I?1:0,$=N+P+U+B+H+V,Q=a[$][0]>=3?1:0,st=a[$][1]>=3?1:0,Et=a[$][2]>=3?1:0,Ot=a[$][3]>=3?1:0,W=a[$][0]>=2?1:0,Z=a[$][1]>=2?1:0,ht=a[$][2]>=2?1:0,at=a[$][3]>=2?1:0,mt=a[$][0]>=1?1:0,Dt=a[$][1]>=1?1:0,Ut=a[$][2]>=1?1:0,Wt=a[$][3]>=1?1:0,dt=M-Q+c,Mt=v-st+c,k=S-Et+c,qt=I-Ot+c,bt=M-W+2*c,kt=v-Z+2*c,It=S-ht+2*c,ne=I-at+2*c,Y=M-mt+3*c,C=v-Dt+3*c,w=S-Ut+3*c,X=I-Wt+3*c,tt=M-1+4*c,it=v-1+4*c,rt=S-1+4*c,Ft=I-1+4*c,St=m&255,Lt=d&255,ae=y&255,wt=b&255,Yt=o[St+o[Lt+o[ae+o[wt]]]]%32,oe=o[St+Q+o[Lt+st+o[ae+Et+o[wt+Ot]]]]%32,ce=o[St+W+o[Lt+Z+o[ae+ht+o[wt+at]]]]%32,Zt=o[St+mt+o[Lt+Dt+o[ae+Ut+o[wt+Wt]]]]%32,ye=o[St+1+o[Lt+1+o[ae+1+o[wt+1]]]]%32;let ue=.6-M*M-v*v-S*S-I*I;ue<0?h=0:(ue*=ue,h=ue*ue*this.dot4(r[Yt],M,v,S,I));let be=.6-dt*dt-Mt*Mt-k*k-qt*qt;be<0?u=0:(be*=be,u=be*be*this.dot4(r[oe],dt,Mt,k,qt));let q=.6-bt*bt-kt*kt-It*It-ne*ne;q<0?f=0:(q*=q,f=q*q*this.dot4(r[ce],bt,kt,It,ne));let zt=.6-Y*Y-C*C-w*w-X*X;zt<0?p=0:(zt*=zt,p=zt*zt*this.dot4(r[Zt],Y,C,w,X));let lt=.6-tt*tt-it*it-rt*rt-Ft*Ft;return lt<0?g=0:(lt*=lt,g=lt*lt*this.dot4(r[ye],tt,it,rt,Ft)),27*(h+u+f+p+g)}}class _i extends Us{constructor(t,e,n,s,r,a,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=i_(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Un(this.width,this.height,{type:Kn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new $e({defines:Object.assign({},Va.defines),uniforms:ui.clone(Va.uniforms),vertexShader:Va.vertexShader,fragmentShader:Va.fragmentShader,blending:pn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new o1,this.normalMaterial.blending=pn,this.pdMaterial=new $e({defines:Object.assign({},Wa.defines),uniforms:ui.clone(Wa.uniforms),vertexShader:Wa.vertexShader,fragmentShader:Wa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new $e({defines:Object.assign({},Ha.defines),uniforms:ui.clone(Ha.uniforms),vertexShader:Ha.vertexShader,fragmentShader:Ha.fragmentShader,blending:pn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new $e({uniforms:ui.clone(Xr.uniforms),vertexShader:Xr.vertexShader,fragmentShader:Xr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:yl,blendDst:zr,blendEquation:li,blendSrcAlpha:Ml,blendDstAlpha:zr,blendEquationAlpha:li}),this.blendMaterial=new $e({uniforms:ui.clone(hl.uniforms),vertexShader:hl.vertexShader,fragmentShader:hl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:qh,blendSrc:yl,blendDst:zr,blendEquation:li,blendSrcAlpha:Ml,blendDstAlpha:zr,blendEquationAlpha:li}),this.fsQuad=new yo(null),this.originalClearColor=new Pt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Bc,this.depthTexture.format=As,this.depthTexture.type=Ts,this.normalRenderTarget=new Un(this.width,this.height,{minFilter:vn,magFilter:vn,type:Kn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Kf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case _i.OUTPUT.Off:break;case _i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case _i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case _i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case _i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case _i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case _i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const s=e.get(n);n.visible=s}),e.clear()}generateNoise(t=64){const e=new a_,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){const l=a,c=o;s[(a*t+o)*4]=(e.noise(l,c)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}const r=new go(s,t,t,Zn,Si);return r.wrapS=bi,r.wrapT=bi,r.needsUpdate=!0,r}}_i.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const o_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Mr extends Us{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new At(t.x,t.y):new At(256,256),this.clearColor=new Pt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Un(r,a,{type:Kn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Un(r,a,{type:Kn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new Un(r,a,{type:Kn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}const o=o_;this.highPassUniforms=ui.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new $e({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new At(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Xr;this.copyUniforms=ui.clone(h.uniforms),this.blendMaterial=new $e({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:gi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Pt,this.oldClearAlpha=1,this.basic=new Le,this.fsQuad=new yo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new At(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Mr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Mr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new $e({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new At(.5,.5)},direction:{value:new At(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new $e({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Mr.BlurDirectionX=new At(1,0);Mr.BlurDirectionY=new At(0,1);const l_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class c_ extends Us{constructor(){super();const t=l_;this.uniforms=ui.clone(t.uniforms),this.material=new a1({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new yo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},De.getTransfer(this._outputColorSpace)===Oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Yh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$h?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===jh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Tc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Kh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const u_={name:"WarmGrade",uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uTint:{value:new G(1,1,1)},uLift:{value:new G},uSat:{value:1.08}},vertexShader:`
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
    }`},h_=new URLSearchParams(location.search).get("ao")==="1";function f_(i,t,e,n={}){const s=new e_(i,new Un(1,1,{type:Kn})),r=new n_(t,e),a=new _i(t,e,1,1,void 0,{radius:.8,distanceExponent:1.3,thickness:1.4,scale:1.2,samples:12});a.blendIntensity=1;const o=new Mr(new At(256,256),.6,.55,1),l=new Zf(u_);n.tint&&l.uniforms.uTint.value.set(...n.tint),n.lift&&l.uniforms.uLift.value.set(...n.lift),n.sat&&(l.uniforms.uSat.value=n.sat),l.uniforms.uVignette.value=n.vignette??.25;const c=new c_;for(const g of[r,a,o,l,c])s.addPass(g);let h="high",u=1,f=1;const p={composer:s,get level(){return h},setLevel(g){h=g,a.enabled=g==="high"&&h_,o.strength=g==="high"?.6:.5;const _=g==="high"?4:0;for(const m of[s.renderTarget1,s.renderTarget2])m.samples!==_&&(m.samples=_,m.dispose());p.setSize(u,f)},setSize(g,_){u=g,f=_;const m=i.getPixelRatio();s.setPixelRatio(m),s.setSize(g,_);const d=h==="high"?2:4;o.resolution.set(g*m/d,_*m/d),o.setSize(g*m/d,_*m/d)},render(g){s.render(g)}};return p}function d_(i,t,e,n,s,r=null){const{heightAt:a}=t,o=e.mobile?.5:1,l=new Set(n.life),c=new He,h=new Pt,u=[],f=()=>{for(let g=0;g<50;g++){const _=(Math.random()-.5)*80,m=(Math.random()-.5)*80,d=a(_,m);if(d>.8)return{x:_,z:m,h:d}}return{x:0,z:0,h:1}};if(l.has("butterflies")){const g=Math.round(26*o),_=new gr(.16,6,0,Math.PI);_.scale(1,1.3,1);const d=[-1,1].map(()=>new Xe({color:"#ffffff",side:Je})).map(x=>{const R=new gn(_,x,g);return i.add(R),R}),y=Array.from({length:g},(x,R)=>({...f(),a:Math.random()*6,sp:.6+Math.random()*.6,ph:Math.random()*6,home:null})),b=["#ffd84a","#ff9ad0","#9ad8ff","#ffffff","#ffa040"];y.forEach((x,R)=>{x.home={x:x.x,z:x.z},d.forEach(T=>T.setColorAt(R,h.set(b[R%b.length])))}),d.forEach(x=>x.instanceColor.needsUpdate=!0),u.push((x,R)=>{y.forEach((T,E)=>{T.a+=Math.sin(R*.7+T.ph)*1.6*x,T.x+=Math.cos(T.a)*T.sp*x,T.z+=Math.sin(T.a)*T.sp*x,Math.hypot(T.x-T.home.x,T.z-T.home.z)>5&&(T.a=Math.atan2(T.home.z-T.z,T.home.x-T.x));const A=a(T.x,T.z)+.6+Math.sin(R*2+T.ph)*.25,M=Math.sin(R*18+T.ph)*1.1;d.forEach((v,S)=>{c.position.set(T.x,A,T.z),c.rotation.set(0,-T.a+Math.PI/2,0),c.rotateZ((S?1:-1)*(.3+M*.5)),c.rotateX(-Math.PI/2),c.scale.set(S?1:-1,1,1),c.updateMatrix(),v.setMatrixAt(E,c.matrix)})}),d.forEach(T=>T.instanceMatrix.needsUpdate=!0)})}if(l.has("birds")){const _=new ze;_.setAttribute("position",new me([-.7,.12,.1,0,0,-.15,0,0,.15,0,0,-.15,.7,.12,.1,0,0,.15],3)),_.computeVertexNormals();const m=new gn(_,new Xe({color:"#f4f4f0",side:Je}),7);m.castShadow=!0,i.add(m);const d=Array.from({length:7},(y,b)=>({cx:(Math.random()-.5)*50,cz:(Math.random()-.5)*50,r:8+Math.random()*10,y:9+Math.random()*4,sp:.15+Math.random()*.1,ph:b}));u.push((y,b)=>{d.forEach((x,R)=>{const T=b*x.sp+x.ph;c.position.set(x.cx+Math.cos(T)*x.r,x.y+Math.sin(b*.7+R)*.4,x.cz+Math.sin(T)*x.r),c.rotation.set(0,-T,Math.sin(b*.5+R)*.15);const E=1+Math.sin(b*6+R)*.35*(Math.sin(b*.4+R)>.3?1:.1),A=r?xe.smoothstep(c.position.distanceTo(r.position),3,7):1;c.scale.set(1.4*A,E*1.4*A,1.4*A),c.updateMatrix(),m.setMatrixAt(R,c.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(l.has("leaves")){const g=Math.round(60*o),_=new Jn(.16,.1),m=new gn(_,new Xe({color:"#ffffff",side:Je}),g);i.add(m);const d=Array.from({length:g},(y,b)=>({...f(),ph:Math.random()*6,sp:1+Math.random()*1.5}));d.forEach((y,b)=>m.setColorAt(b,h.set(["#8fbf4a","#c8b04a","#6a9a3a","#d89a3a"][b%4]))),m.instanceColor.needsUpdate=!0,u.push((y,b)=>{d.forEach((x,R)=>{x.x+=x.sp*y,x.z+=Math.sin(b*.8+x.ph)*.6*y,x.x>45&&Object.assign(x,f(),{x:-45});const T=Math.max(a(x.x,x.z),.1)+.3+Math.abs(Math.sin(b*1.3+x.ph))*.9;c.position.set(x.x,T,x.z),c.rotation.set(b*3+x.ph,b*2+x.ph,b*1.5),c.scale.setScalar(1),c.updateMatrix(),m.setMatrixAt(R,c.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(l.has("fireflies")&&s==="skumring"){const g=Math.round(120*o),_=new Float32Array(g*3),m=new Float32Array(g*3),d=Array.from({length:g},()=>({...f(),ph:Math.random()*6})),y=new ze;y.setAttribute("position",new Ve(_,3)),y.setAttribute("color",new Ve(m,3));const b=document.createElement("canvas");b.width=b.height=32;const x=b.getContext("2d"),R=x.createRadialGradient(16,16,0,16,16,16);R.addColorStop(0,"rgba(255,255,255,1)"),R.addColorStop(1,"rgba(255,255,255,0)"),x.fillStyle=R,x.fillRect(0,0,32,32);const T=new Vc(y,new vo({size:.35,map:new mi(b),vertexColors:!0,transparent:!0,blending:gi,depthWrite:!1}));T.frustumCulled=!1,i.add(T),u.push((E,A)=>{d.forEach((M,v)=>{_[v*3]=M.x+Math.sin(A*.4+M.ph)*1.2,_[v*3+1]=M.h+.5+Math.sin(A*.9+M.ph*2)*.4,_[v*3+2]=M.z+Math.cos(A*.35+M.ph)*1.2;const S=Math.max(0,Math.sin(A*1.7+M.ph*3))**3*2.5;m[v*3]=1*S,m[v*3+1]=.9*S,m[v*3+2]=.35*S}),y.attributes.position.needsUpdate=!0,y.attributes.color.needsUpdate=!0})}let p=0;return{update(g){const _=Math.min(.05,Math.max(0,g-p));p=g;for(const m of u)m(_,g)}}}function p_(i,{cell:t=.75,ext:e=68}={}){const n=Math.ceil(e*2/t)+1,s=new Float64Array(n*n),r=new Float32Array(n*n),a=new Float32Array(n*n),o=i.lighthouse.pos,l=(E,A)=>[Math.round((E+e)/t),Math.round((A+e)/t)],c=(E,A)=>[-e+E*t,-e+A*t];let h=()=>!1;function u(){for(let E=0;E<n;E++)for(let A=0;A<n;A++){const[M,v]=c(A,E),S=i.heightAt(M,v),I=E*n+A,N=Math.hypot(M-o.x,v-o.z);let P=1.8;S<-.5||i.slopeAt(M,v)>1.1||i.extras.blocks(M,v)||h(M,v)||N<3.2?P=1/0:i.pathDist(M,v)<1.6?P=.2:S<.05&&(P=2.6),r[I]=P}}function f(){s.fill(1/0),a.fill(0);const E=[],A=(S,I)=>{E.push([S,I]);let N=E.length-1;for(;N>0;){const P=N-1>>1;if(E[P][0]<=E[N][0])break;[E[P],E[N]]=[E[N],E[P]],N=P}},M=()=>{const S=E[0],I=E.pop();if(E.length){E[0]=I;let N=0;for(;;){const P=2*N+1,U=P+1;let B=N;if(P<E.length&&E[P][0]<E[B][0]&&(B=P),U<E.length&&E[U][0]<E[B][0]&&(B=U),B===N)break;[E[B],E[N]]=[E[N],E[B]],N=B}}return S};for(let S=0;S<n;S++)for(let I=0;I<n;I++){const[N,P]=c(I,S),U=Math.hypot(N-o.x,P-o.z);U>=3.2&&U<4.2&&r[S*n+I]<1/0&&(s[S*n+I]=0,A(0,S*n+I))}const v=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;E.length;){const[S,I]=M();if(S>s[I])continue;const N=I%n,P=I/n|0;for(const[U,B,H]of v){const V=N+U,$=P+B;if(V<0||$<0||V>=n||$>=n)continue;const Q=$*n+V,st=r[Q];if(st===1/0)continue;const Et=S+H*t*(st+r[I])*.5;Et<s[Q]&&(s[Q]=Et,a[Q]=a[I]+H*t,A(Et,Q))}}}const p=(E,A)=>{const[M,v]=l(E,A);return M<0||v<0||M>=n||v>=n?1/0:s[v*n+M]};function g(E,A){const[M,v]=l(E,A);let S=p(E,A),I=0,N=0;for(let U=-1;U<=1;U++)for(let B=-1;B<=1;B++){if(!B&&!U)continue;const H=M+B,V=v+U;if(H<0||V<0||H>=n||V>=n)continue;const $=s[V*n+H];$<S&&(S=$,I=B,N=U)}const P=Math.hypot(I,N)||1;return[I/P,N/P,S]}const _=(E,A)=>{const[M,v]=l(E,A);return M<0||v<0||M>=n||v>=n?-1:v*n+M},m=(E,A)=>{const M=_(E,A);return M<0||s[M]===1/0?0:a[M]};function d(){const E=[];for(const A of i.paths){const M=A.samples.find(v=>i.heightAt(v.x,v.z)>-.4&&m(v.x,v.z)>0);M&&E.push([M.x,M.z])}return E}function y(E,A=22,{near:M=8,minFrac:v=.6}={}){const S=d(),I=Math.max(0,...S.map(([B,H])=>m(B,H))),N=(B,H)=>{const V=i.heightAt(B,H);return V>-.4&&V<.15&&[[4,0],[-4,0],[0,4],[0,-4],[3,3],[-3,3],[3,-3],[-3,-3]].some(([$,Q])=>i.heightAt(B+$,H+Q)<-.9)},P=S.map(([B,H])=>{const V=[],$=[],Q=Math.ceil(M/t),[st,Et]=l(B,H);for(let W=-Q;W<=Q;W++)for(let Z=-Q;Z<=Q;Z++){const[ht,at]=c(st+Z,Et+W);Math.hypot(ht-B,at-H)>M||m(ht,at)<v*I||(N(ht,at)?V.push([ht,at]):i.heightAt(ht,at)>.3&&i.slopeAt(ht,at)<.6&&$.push([ht,at]))}return(V.length?V:$).sort(()=>Math.random()-.5)}).filter(B=>B.length).sort(()=>Math.random()-.5),U=[];for(let B=0;U.length<E&&B<4;B++){for(const H of P){const V=H.find($=>U.every(Q=>Math.hypot(Q[0]-$[0],Q[1]-$[1])>A));if(V&&U.push(V),U.length>=E)break}A=Math.min(A,6)}return U}let b=null;function x(E,A){if(!b){b=new Float32Array(n*n);for(let B=0;B<n;B++)for(let H=0;H<n;H++){const[V,$]=c(H,B);b[B*n+H]=i.isWalkable(V,$)?i.heightAt(V,$)<.05?1.6:1:1/0}}const M=new Float64Array(n*n).fill(1/0),v=[],S=(B,H)=>{v.push([B,H]);let V=v.length-1;for(;V>0;){const $=V-1>>1;if(v[$][0]<=v[V][0])break;[v[$],v[V]]=[v[V],v[$]],V=$}},I=()=>{const B=v[0],H=v.pop();if(v.length){v[0]=H;let V=0;for(;;){const $=2*V+1,Q=$+1;let st=V;if($<v.length&&v[$][0]<v[st][0]&&(st=$),Q<v.length&&v[Q][0]<v[st][0]&&(st=Q),st===V)break;[v[st],v[V]]=[v[V],v[st]],V=st}}return B},N=_(E,A);if(N<0)return null;M[N]=0,S(0,N);const P=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;v.length;){const[B,H]=I();if(B>M[H])continue;const V=H%n,$=H/n|0;for(const[Q,st,Et]of P){const Ot=V+Q,W=$+st;if(Ot<0||W<0||Ot>=n||W>=n)continue;const Z=W*n+Ot,ht=b[Z];if(ht===1/0)continue;const at=B+Et*t*ht;at<M[Z]&&(M[Z]=at,S(at,Z))}}const U=(B,H)=>{const V=_(B,H);return V<0?1/0:M[V]};return{at:U,dir(B,H){const[V,$]=l(B,H);let Q=U(B,H),st=0,Et=0;for(let W=-1;W<=1;W++)for(let Z=-1;Z<=1;Z++){if(!Z&&!W)continue;const ht=V+Z,at=$+W;ht<0||at<0||ht>=n||at>=n||M[at*n+ht]<Q&&(Q=M[at*n+ht],st=Z,Et=W)}const Ot=Math.hypot(st,Et)||1;return[st/Ot,Et/Ot]}}}const R=()=>{let E=0;for(const A of s)A<1/0&&A>E&&(E=A);return E},T=()=>{u(),f()};return T(),{at:p,dir:g,coastPoints:y,roadEnds:d,routeLen:m,walkField:x,rebuild:T,setBlock(E){h=E,T()},maxDist:R(),N:n,cell:t}}function Jf(i,t=700,{blending:e=gi,size:n=.55,opacity:s=1,fadeTo:r=null}={}){const a=new Pt(r||"#000000"),o=new Float32Array(t*3),l=new Float32Array(t*3),c=new Float32Array(t*3),h=new Float32Array(t*3),u=new Float32Array(t),f=new Float32Array(t),p=new Float32Array(t);let g=0;const _=new ze;_.setAttribute("position",new Ve(o,3)),_.setAttribute("color",new Ve(l,3));const m=document.createElement("canvas");m.width=m.height=64;const d=m.getContext("2d"),y=d.createRadialGradient(32,32,0,32,32,32);y.addColorStop(0,"rgba(255,255,255,1)"),y.addColorStop(.4,"rgba(255,255,255,0.6)"),y.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=y,d.fillRect(0,0,64,64);const b=new vo({size:n,map:new mi(m),vertexColors:!0,transparent:!0,opacity:s,blending:e,depthWrite:!1}),x=new Vc(_,b);x.frustumCulled=!1,i.add(x);for(let A=0;A<t;A++)o[A*3+1]=-999;const R=new Pt;function T(A,M,v,{n:S=10,color:I="#ffb347",speed:N=4,up:P=3,life:U=.7,gravity:B=9,spread:H=1}={}){R.set(I);for(let V=0;V<S;V++){const $=g;g=(g+1)%t,o[$*3]=A,o[$*3+1]=M,o[$*3+2]=v;const Q=Math.random()*Math.PI*2,st=N*(.4+Math.random()*.6)*H;c[$*3]=Math.cos(Q)*st,c[$*3+1]=P*(.5+Math.random()),c[$*3+2]=Math.sin(Q)*st,h[$*3]=R.r,h[$*3+1]=R.g,h[$*3+2]=R.b,f[$]=u[$]=U*(.6+Math.random()*.6),p[$]=B}}function E(A){for(let M=0;M<t;M++){if(u[M]<=0)continue;if(u[M]-=A,u[M]<=0){o[M*3+1]=-999,l[M*3]=l[M*3+1]=l[M*3+2]=0;continue}c[M*3+1]-=p[M]*A,o[M*3]+=c[M*3]*A,o[M*3+1]+=c[M*3+1]*A,o[M*3+2]+=c[M*3+2]*A;const v=u[M]/f[M];l[M*3]=h[M*3]*v+a.r*(1-v),l[M*3+1]=h[M*3+1]*v+a.g*(1-v),l[M*3+2]=h[M*3+2]*v+a.b*(1-v)}_.attributes.position.needsUpdate=!0,_.attributes.color.needsUpdate=!0}return{emit:T,update:E}}const m_={xbox:{build:"Ⓐ",carry:"Ⓑ",next:"Ⓨ",sel:"LB/RB",pause:"☰",restart:"View",name:"Xbox"},ps:{build:"✕",carry:"○",next:"△",sel:"L1/R1",pause:"Options",restart:"Select",name:"PlayStation"},ps3:{build:"✕",carry:"○",next:"△",sel:"L1/R1",pause:"Start",restart:"Select",name:"PlayStation 3"},switch:{build:"A",carry:"B",next:"X",sel:"L/R",pause:"+",restart:"−",name:"Switch"}},g_={build:"B",carry:"E",next:"N",sel:"Z/X",pause:"Esc",restart:"R",name:"Tastatur"},v_={build:"Bygg",carry:"Bær",next:"Neste bølge",sel:"",pause:"⏸",restart:"⏸ → ↺",name:"Berøring"};function x_(i=""){const t=i.toLowerCase();return/nintendo|pro controller|joy-con|joycon|057e/.test(t)?"switch":/0268|playstation\(r\)\s*3|ps3/.test(t)?"ps3":/playstation|dualshock|dualsense|wireless controller|054c|sony/.test(t)?"ps":"xbox"}function __(i=""){const t=i.toLowerCase();return/0268|playstation\(r\)\s*3|ps3/.test(t)?"PS3 (DualShock 3)":/0ce6|0df2|dualsense/.test(t)?"PS5 (DualSense)":/05c4|09cc|0ba0|dualshock\s*4/.test(t)?"PS4 (DualShock 4)":/playstation|wireless controller|054c|sony/.test(t)?"PlayStation":/xbox|xinput|045e/.test(t)?"Xbox":/nintendo|pro controller|057e/.test(t)?"Switch Pro":/joy-con|joycon/.test(t)?"Joy-Con":"Spillkontroll"}const Ji={evdev:{btn:[0,1,3,2,4,5,6,7,8,9,11,12],home:10,hat:[6,7],look:3},ds3:{btn:[0,1,3,2,4,5,6,7,8,9,11,12],home:10,dpad:[13,14,15,16],look:3},ds3old:{btn:[14,13,15,12,10,11,8,9,0,3,1,2],home:16,dpad:[4,6,7,5],look:2},dinput:{btn:[0,1,2,3,4,5,6,7,8,9,10,11],home:12,hat9:!0,look:2}};function M_(i,t=[]){return i.mapping==="standard"?null:/0268|playstation\(r\)\s*3/i.test(i.id)?i.axes.length>8?Ji.ds3old:Ji.ds3:Math.abs(t[9]??0)>1.1?Ji.dinput:i.axes.length>=8?Ji.evdev:Ji.dinput}function y_(i){if(i===void 0||i>1.1||i<-1.1)return[!1,!1,!1,!1];const t=Math.round((i+1)*3.5)%8;return[t===7||t<=1,t>=3&&t<=5,t>=5&&t<=7,t>=1&&t<=3]}function b_(i,t=[]){const e=i.buttons.map(o=>!!o&&(o.pressed||o.value>.5)),n=M_(i,t);if(!n)return{down:e,axes:[i.axes[0]||0,i.axes[1]||0,i.axes[2]||0,i.axes[3]||0],layout:"standard"};const s=n.btn.map(o=>!!e[o]);let r=[!1,!1,!1,!1];if(n.dpad)r=n.dpad.map(o=>!!e[o]);else if(n.hat&&i.axes.length>n.hat[1]){const o=i.axes[n.hat[0]],l=i.axes[n.hat[1]];r=[l<-.5,l>.5,o<-.5,o>.5]}else n.hat9&&(r=y_(i.axes[9]));s.push(...r,!!e[n.home]);const a=o=>Math.abs(t[o]??0)>.5?0:i.axes[o]||0;return{down:s,axes:[a(0),a(1),a(n.look),a(n.look+1)],layout:n===Ji.evdev?"evdev":n===Ji.ds3?"ds3":n===Ji.ds3old?"ds3old":"dinput"}}function S_(i){const t=i==="switch";return{build:t?1:0,carry:t?0:1,next:3,prev:4,nextSel:5,zoomOut:6,zoomIn:7,pause:9,back:8}}function w_(i){const t=new Set,e={move:{x:0,z:0},look:0,lookDelta:0,zoom:1,pressed:new Set,rollMode:!1,clicks:[],device:matchMedia("(pointer: coarse)").matches?"touch":"kb",padKind:"xbox",padId:""},n=v=>e.pressed.add(v),s=v=>{e.device=v};addEventListener("keydown",v=>{if(s("kb"),(v.code==="Space"||v.code.startsWith("Arrow")||v.code==="Tab")&&v.preventDefault(),v.repeat)return;if(e.rollMode){const I={ArrowUp:"rU",KeyW:"rU",ArrowRight:"rR",KeyD:"rR",ArrowDown:"rD",KeyS:"rD",ArrowLeft:"rL",KeyA:"rL",Escape:"rollExit",KeyQ:"rollExit"}[v.code];if(I){n(I);return}}t.add(v.code);const S={KeyE:"carry",Space:"carry",KeyB:"build",Digit1:"b1",Digit2:"b2",Digit3:"b3",Digit4:"b4",Digit5:"b5",Digit6:"b6",Digit7:"b7",Numpad1:"b1",Numpad2:"b2",Numpad3:"b3",Numpad4:"b4",Numpad5:"b5",Numpad6:"b6",Numpad7:"b7",KeyZ:"selPrev",KeyX:"selNext",KeyQ:"selPrev",KeyR:"restart",KeyN:"next",Enter:"next",KeyF:"fps",KeyM:"music",Escape:"pause",KeyP:"pause"};S[v.code]&&n(S[v.code])}),addEventListener("keyup",v=>t.delete(v.code)),addEventListener("blur",()=>t.clear()),i.addEventListener("wheel",v=>{v.preventDefault(),s("kb"),e.zoom=Xa(e.zoom*(v.deltaY>0?1.08:1/1.08),.55,4.5)},{passive:!1}),i.addEventListener("contextmenu",v=>v.preventDefault());const r=new Map;let a=0,o=1,l=null;const c=v=>({x:v.clientX/innerWidth*2-1,y:-(v.clientY/innerHeight)*2+1});i.addEventListener("pointerdown",v=>{if(s(v.pointerType==="touch"?"touch":"kb"),v.pointerType==="mouse"&&v.button===2){l={x:v.clientX},i.setPointerCapture(v.pointerId);return}v.pointerType==="mouse"&&v.button!==0||(r.set(v.pointerId,{e:v,t:performance.now(),x0:v.clientX,y0:v.clientY}),r.size===2&&(a=Dh(r),o=e.zoom))}),i.addEventListener("pointermove",v=>{if(l){e.lookDelta+=(v.clientX-l.x)*.008,l.x=v.clientX;return}const S=r.get(v.pointerId);S&&(S.e=v,r.size===2&&a>0&&(e.zoom=Xa(o*(a/Dh(r)),.55,4.5)))});const h=v=>{if(l&&v.button===2){l=null;return}const S=r.get(v.pointerId);S&&r.size===1&&a===0&&Math.hypot(v.clientX-S.x0,v.clientY-S.y0)<12&&e.clicks.push(c(v)),r.delete(v.pointerId),r.size<2&&(a=0)};i.addEventListener("pointerup",h),i.addEventListener("pointercancel",v=>{r.delete(v.pointerId),l=null,a=0});const u=document.getElementById("stick"),f=document.getElementById("knob"),p={x:0,z:0};let g=null;const _=v=>{const S=u.getBoundingClientRect();let I=v.clientX-(S.left+S.width/2),N=v.clientY-(S.top+S.height/2);const P=S.width/2,U=Math.hypot(I,N);U>P&&(I*=P/U,N*=P/U),f.style.transform=`translate(${I}px, ${N}px)`;const B=U/P<.15?0:1;p.x=I/P*B,p.z=N/P*B};u.addEventListener("pointerdown",v=>{s("touch"),g=v.pointerId,u.setPointerCapture(v.pointerId),_(v)}),u.addEventListener("pointermove",v=>{v.pointerId===g&&_(v)});const m=v=>{v.pointerId===g&&(g=null,p.x=p.z=0,f.style.transform="")};u.addEventListener("pointerup",m),u.addEventListener("pointercancel",m);const d=(v,S)=>v.addEventListener("pointerdown",I=>{I.preventDefault(),I.stopPropagation(),I.pointerType==="touch"&&s("touch"),n(S)});d(document.getElementById("btn-build"),"build"),d(document.getElementById("btn-carry"),"carry"),d(document.getElementById("btn-next"),"next"),d(document.getElementById("btn-pause"),"pause"),document.querySelectorAll("#build-panel button").forEach((v,S)=>d(v,"b"+(S+1))),document.querySelectorAll("#rollpad [data-r]").forEach(v=>d(v,v.dataset.r)),d(document.getElementById("btn-rollexit"),"rollExit");let y=[],b=null,x={dir:null,t:0,rep:0},R=0,T=0;e.padSeen=!1,e.onPad=null;const E=v=>{var S;b=v?v.axes.slice():null,y=[],v&&(e.padId=v.id,e.padKind=x_(v.id),e.padSeen=!0,(S=e.onPad)==null||S.call(e,"connect",v.id))};addEventListener("gamepadconnected",v=>{v.gamepad.id!==e.padId&&E(v.gamepad)}),addEventListener("gamepaddisconnected",v=>{var S;v.gamepad.id===e.padId&&(e.padId="",b=null,(S=e.onPad)==null||S.call(e,"disconnect",v.gamepad.id),e.device==="pad"&&(e.device=matchMedia("(pointer: coarse)").matches?"touch":"kb"))});let A=null;function M(v){var ht,at;let S=[];try{S=navigator.getGamepads?[...navigator.getGamepads()]:[]}catch{S=[]}const I=S.find(mt=>mt&&mt.connected&&mt.id===e.padId)||S.find(mt=>mt&&mt.connected);if(A=I||null,!I)return null;(I.id!==e.padId||!b)&&E(I);const N=S_(e.padKind),{down:P,axes:U}=b_(I,b),B=y,H=mt=>P[mt]&&!B[mt],V=mt=>Math.abs(mt)<.2?0:(mt-Math.sign(mt)*.2)/.8;let $=V(U[0]),Q=V(U[1]);const st=P[14]?-1:P[15]?1:0,Et=P[12]?-1:P[13]?1:0;st&&($=st),Et&&(Q=Et);const Ot=V(U[2]);if(($||Q||Ot||P.some(Boolean))&&s("pad"),y=P,(ht=e.menu)==null?void 0:ht.root()){const mt=Et<0||U[1]<-.6?"up":Et>0||U[1]>.6?"down":st<0||U[0]<-.6?"left":st>0||U[0]>.6?"right":null;return mt!==x.dir?(x={dir:mt,t:0,rep:0},mt&&e.menu.move(mt)):mt&&(x.t+=v,x.t>.4+x.rep*.15&&(x.rep++,e.menu.move(mt))),H(N.build)&&e.menu.ok(),H(N.carry)&&e.menu.back(),H(N.pause)&&n("pause"),H(N.back)&&n("restart"),{x:0,z:0,look:0,zoomIn:!1,zoomOut:!1}}return x.dir=null,e.rollMode?(H(12)&&n("rU"),H(15)&&n("rR"),H(13)&&n("rD"),H(14)&&n("rL"),H(N.carry)&&n("rollExit"),T=Math.hypot(U[0],U[1])>.6?T+v:0,T>=.3&&(T=0,n("rollExit")),H(N.pause)&&n("pause"),{x:0,z:0,look:Ot,zoomIn:P[N.zoomIn],zoomOut:P[N.zoomOut]}):(T=0,(at=e.panelOpen)!=null&&at.call(e)&&st?(H(14)&&n("selPrev"),H(15)&&n("selNext"),R+=v,R<.25&&!V(U[0])&&($=0)):R=0,H(N.build)&&n("build"),H(N.carry)&&n("carry"),H(N.next)&&n("next"),H(N.prev)&&n("selPrev"),H(N.nextSel)&&n("selNext"),H(N.pause)&&n("pause"),H(N.back)&&n("restart"),H(2)&&e.padKind!=="switch"&&n("next"),{x:$,z:Q,look:Ot,zoomIn:P[N.zoomIn],zoomOut:P[N.zoomOut]})}return e.rumble=(v=200,S=.6)=>{var I,N,P,U;if(!(!A||e.device!=="pad"))try{(I=A.vibrationActuator)!=null&&I.playEffect?A.vibrationActuator.playEffect("dual-rumble",{duration:v,strongMagnitude:S,weakMagnitude:S/2}):(U=(P=(N=A.hapticActuators)==null?void 0:N[0])==null?void 0:P.pulse)==null||U.call(P,S,v)}catch{}},e.update=v=>{let S=0,I=0;(t.has("KeyA")||t.has("ArrowLeft"))&&(S-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(S+=1),(t.has("KeyW")||t.has("ArrowUp"))&&(I-=1),(t.has("KeyS")||t.has("ArrowDown"))&&(I+=1);const N=M(v);N&&(N.x||N.z)&&(S=N.x,I=N.z),(p.x||p.z)&&(S=p.x,I=p.z);const P=Math.hypot(S,I);P>1&&(S/=P,I/=P),e.move.x=S,e.move.z=I,e.look=e.lookDelta+(N?N.look*2.2*v:0),e.lookDelta=0,N!=null&&N.zoomIn&&(e.zoom=Xa(e.zoom/(1+v*1.2),.55,4.5)),N!=null&&N.zoomOut&&(e.zoom=Xa(e.zoom*(1+v*1.2),.55,4.5))},e.labels=()=>e.device==="pad"?m_[e.padKind]:e.device==="touch"?v_:g_,e.consume=v=>e.pressed.delete(v),e.clear=()=>{e.pressed.clear(),e.clicks.length=0},e}const Xa=(i,t,e)=>Math.max(t,Math.min(e,i));function Dh(i){const[t,e]=[...i.values()].map(n=>n.e);return Math.hypot(t.clientX-e.clientX,t.clientY-e.clientY)||1}const $n=i=>document.getElementById(i),E_=["btn-start","btn-again","btn-yes","btn-resume","btn-portrait"];function T_(i){let t=null;const e=h=>h&&!h.classList.contains("hidden")&&getComputedStyle(h).display!=="none";function n(){return e($n("rotate"))?$n("rotate"):e($n("pause"))?e($n("confirm"))?$n("confirm"):$n("pause"):e($n("overlay"))?$n("overlay"):null}const s=h=>[...h.querySelectorAll("button, input[type=range]")].filter(u=>!u.disabled&&u.offsetParent!==null&&!u.closest(".hidden")&&(h.id==="confirm"||!u.closest("#confirm")));function r(h){var u;t&&t!==h&&t.classList.remove("pad-focus"),t=h,h&&(i.device==="pad"&&h.classList.add("pad-focus"),(u=h.scrollIntoView)==null||u.call(h,{block:"nearest"}))}function a(){const h=n();if(!h)return t&&(t.classList.remove("pad-focus"),t=null),null;const u=s(h);return(!t||!u.includes(t))&&r(E_.map(f=>u.find(p=>p.id===f)).find(Boolean)||u[0]||null),t&&t.classList.toggle("pad-focus",i.device==="pad"),h}function o(h){const u=a();if(!u||!t)return;if(t.type==="range"&&(h==="left"||h==="right")){t.value=String(Math.max(0,Math.min(100,+t.value+(h==="left"?-10:10)))),t.dispatchEvent(new Event("input",{bubbles:!0}));return}const f=t.getBoundingClientRect(),p=f.left+f.width/2,g=f.top+f.height/2,[_,m]={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]}[h];let d=null,y=1/0,b=!1;for(const x of s(u)){if(x===t)continue;const R=x.getBoundingClientRect(),T=R.left+R.width/2-p,E=R.top+R.height/2-g,A=T*_+E*m,M=Math.abs(T*m-E*_);if(A<=4)continue;const v=M<=A,S=A+M*2;(v&&!b||v===b&&S<y)&&(y=S,d=x,b=v)}d&&r(d)}function l(){!a()||!t||t.type==="range"||t.click()}function c(){const h=a();h&&(h.id==="confirm"?$n("btn-no").click():h.id==="pause"&&(e($n("lex"))?$n("lex").classList.add("hidden"):$n("btn-resume").click()))}return{root:()=>a(),move:o,ok:l,back:c,sync:a,get focused(){return t}}}let qe=null,or=null,sa=null;function A_(){if(qe){qe.resume();return}const i=window.AudioContext||window.webkitAudioContext;if(!i)return;qe=new i,or=qe.createGain(),or.gain.value=.5,or.connect(qe.destination),sa=qe.createBuffer(1,qe.sampleRate*2,qe.sampleRate);const t=sa.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1;C_()}const Qf=()=>qe?{ctx:qe,noiseBuf:sa}:null;function je(i,t,{type:e="sine",vol:n=.2,slide:s=0,delay:r=0}={}){if(!qe)return;const a=qe.currentTime+r,o=qe.createOscillator(),l=qe.createGain();o.type=e,o.frequency.setValueAtTime(i,a),s&&o.frequency.exponentialRampToValueAtTime(Math.max(30,i+s),a+t),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(n,a+.01),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l).connect(or),o.start(a),o.stop(a+t+.02)}function hs(i,{vol:t=.3,freq:e=800,q:n=.7,delay:s=0}={}){if(!qe)return;const r=qe.currentTime+s,a=qe.createBufferSource();a.buffer=sa;const o=qe.createBiquadFilter();o.type="lowpass",o.frequency.value=e,o.Q.value=n;const l=qe.createGain();l.gain.setValueAtTime(t,r),l.gain.exponentialRampToValueAtTime(1e-4,r+i),a.connect(o).connect(l).connect(or),a.start(r,Math.random()),a.stop(r+i+.02)}function C_(){const i=qe.createBufferSource();i.buffer=sa,i.loop=!0;const t=qe.createBiquadFilter();t.type="lowpass",t.frequency.value=420;const e=qe.createGain();e.gain.value=.035;const n=qe.createOscillator(),s=qe.createGain();n.frequency.value=.12,s.gain.value=.03,n.connect(s).connect(e.gain),i.connect(t).connect(e).connect(or),i.start(),n.start()}let Lh=0;const Be={pickup(){if(!qe)return;const i=qe.currentTime,t=i-Lh<.4?1.12:1;Lh=i,je(880*t+Math.random()*60,.12,{type:"triangle",vol:.12}),je(1320*t,.1,{type:"sine",vol:.06,delay:.04})},puff(){hs(.18,{vol:.07,freq:600,q:.3}),je(240,.12,{vol:.04,slide:-60})},crunch(){for(let i=0;i<4;i++)hs(.05,{vol:.1,freq:3500,delay:i*.03});je(130,.18,{vol:.08,slide:-40})},skank(){[[392,494,587],[349,440,523]][Math.random()<.5?0:1].forEach(i=>je(i,.11,{type:"square",vol:.025})),je(98,.3,{vol:.08})},chill(){je(330,.5,{type:"sine",vol:.07,slide:160}),je(495,.45,{type:"triangle",vol:.04,slide:120,delay:.08})},shoot(){je(520,.07,{type:"square",vol:.03,slide:-300})},mortar(){hs(.12,{vol:.12,freq:500}),je(160,.15,{type:"sine",vol:.12,slide:-80})},boom(){hs(.45,{vol:.28,freq:380}),je(90,.35,{vol:.18,slide:-50})},horn(){je(196,.5,{type:"sawtooth",vol:.035}),je(147,.55,{type:"sine",vol:.06})},hit(){hs(.05,{vol:.08,freq:2500})},die(){je(420,.18,{type:"triangle",vol:.09,slide:-280}),hs(.12,{vol:.07,freq:1200})},build(){[392,494,587].forEach((i,t)=>je(i,.25,{type:"triangle",vol:.1,delay:t*.06}))},upgrade(){[523,659,784,1047].forEach((i,t)=>je(i,.22,{type:"triangle",vol:.1,delay:t*.07}))},tick(i=1){je(392*Math.pow(2,i/12*2),.07,{type:"triangle",vol:.07})},stone(){je(660,.2,{type:"sine",vol:.1,slide:200})},lose(){je(220,.6,{type:"sawtooth",vol:.06,slide:-120}),hs(.3,{vol:.08,freq:300})},stun(){je(700,.4,{type:"square",vol:.05,slide:-500})},deny(){je(150,.12,{type:"square",vol:.05})},wave(){[330,330,440].forEach((i,t)=>je(i,.3,{type:"sawtooth",vol:.04,delay:t*.18}))},win(){[523,659,784,1047,1319].forEach((i,t)=>je(i,.4,{type:"triangle",vol:.12,delay:t*.12}))}},xc=172,Li=60/xc/4,fs=i=>440*Math.pow(2,(i-69)/12),Ih={tak:{chords:[[50,66,69,73,76],[47,62,66,69,74],[43,59,62,66,71],[45,61,64,69,73]],hook:[[0,78,3],[3,76,3],[6,73,2],[8,74,4],[14,71,2],[16,73,3],[19,74,3],[22,76,6],[28,69,4]],pad:"sawtooth",padCut:2400,arpOct:12,reeseDetune:9,drive:0,space:.35,arpRate:1,lead:"square"},vinter:{chords:[[45,60,64,71,76],[41,57,64,69,72],[48,64,67,72,79],[43,59,62,67,71]],hook:[[0,76,6],[6,74,2],[8,72,6],[16,71,4],[20,72,2],[22,74,4],[26,79,6]],pad:"triangle",padCut:1500,arpOct:24,reeseDetune:6,drive:0,space:.6,arpRate:2,lead:"triangle"},vulkan:{chords:[[40,55,59,64,67],[41,57,60,65,69],[40,55,59,64,71],[38,54,57,62,66]],hook:[[0,64,2],[2,65,2],[4,64,4],[10,62,2],[12,59,4],[16,64,2],[18,67,2],[20,65,4],[26,64,6]],pad:"sawtooth",padCut:900,arpOct:0,reeseDetune:16,drive:.6,space:.25,arpRate:1,lead:"sawtooth"}},fl={A:{k:"x.x.......xx....x.x.......x.....",s:"....x..x.x..x..x....x..x.x..x.x.",g:"..........x...........x.....x..."},B:{k:"x.....x...x.x...x.x...x...x.....",s:"....x.x..x..x.x.....x..xx..x..x.",g:".x.......x.....x.x.......x......"},FILL:{k:"x.x.......x.....x...............",s:"....x..x.x..x..x....x.xxxxxxxxxx",g:"................................"}},Uh=[["build",8],["drop",16],["break",8],["drop",16]];function R_(i,t,e){const n=Ih[e]||Ih.tak,s=i.createDynamicsCompressor();s.threshold.value=-18,s.ratio.value=3,s.attack.value=.01,s.release.value=.2;const r=i.createDynamicsCompressor();r.threshold.value=-3,r.ratio.value=20,r.attack.value=.002,r.release.value=.08;const a=i.createGain();a.gain.value=0,s.connect(r).connect(a).connect(i.destination);const o=i.createAnalyser();o.fftSize=1024,a.connect(o);const l={};for(const Y of["drums","bass","pad","arp","lead"]){const C=i.createGain();C.gain.value=0,C.connect(s),l[Y]=C}const c={};for(const Y of["pad","bass"]){const C=i.createGain();C.gain.value=1,C.connect(l[Y]),c[Y]=C}const h=(Y,C)=>{const w=i.createBuffer(2,Math.floor(i.sampleRate*Y),i.sampleRate);for(let X=0;X<2;X++){const tt=w.getChannelData(X);for(let it=0;it<tt.length;it++)tt[it]=(Math.random()*2-1)*Math.pow(1-it/tt.length,C)}return w},u=i.createConvolver();u.buffer=h(2.4,2.5);const f=i.createGain();f.gain.value=n.space,u.connect(f).connect(s);const p=i.createConvolver();p.buffer=h(.5,.4);const g=i.createGain();g.gain.value=0,p.connect(g).connect(l.drums);const _=i.createDelay(1);_.delayTime.value=Li*3;const m=i.createGain();m.gain.value=.38;const d=i.createBiquadFilter();d.type="lowpass",d.frequency.value=2400;const y=i.createStereoPanner(),b=i.createOscillator(),x=i.createGain();b.frequency.value=xc/60/3,x.gain.value=.8,b.connect(x).connect(y.pan),b.start(),_.connect(d).connect(m).connect(_),d.connect(y).connect(l.arp);const R=i.createBiquadFilter();R.type="highpass",R.frequency.value=180;const T=i.createBiquadFilter();T.type="lowpass",T.frequency.value=n.padCut,T.Q.value=2;const E=i.createOscillator(),A=i.createGain();E.frequency.value=.07,A.gain.value=n.padCut*.45,E.connect(A).connect(T.frequency),E.start();const M=i.createDelay(.05);M.delayTime.value=.014;const v=i.createOscillator(),S=i.createGain();v.frequency.value=.5,S.gain.value=.004,v.connect(S).connect(M.delayTime),v.start();const I=i.createStereoPanner();I.pan.value=.6,R.connect(T),T.connect(c.pad),T.connect(M).connect(I).connect(c.pad),T.connect(u);const N=i.createBiquadFilter();N.type="lowpass",N.frequency.value=420,N.Q.value=6;const P=i.createOscillator(),U=i.createGain();if(P.frequency.value=xc/60/4,U.gain.value=260,P.connect(U).connect(N.frequency),P.start(),n.drive>0){const Y=i.createWaveShaper(),C=new Float32Array(1024);for(let w=0;w<1024;w++){const X=w/512-1;C[w]=Math.tanh(X*(1+n.drive*6))}Y.curve=C,N.connect(Y).connect(c.bass)}else N.connect(c.bass);const B=i.createBiquadFilter();B.type="lowpass",B.frequency.value=3600,B.Q.value=3,B.connect(l.lead),B.connect(_),B.connect(u);const H=(Y,C,w,X,tt,it)=>{Y.gain.setValueAtTime(1e-4,C),Y.gain.exponentialRampToValueAtTime(X,C+w),Y.gain.setValueAtTime(X,C+Math.max(w,it-tt)),Y.gain.exponentialRampToValueAtTime(1e-4,C+it)},V=(Y,C)=>{const w=i.createStereoPanner();return w.pan.value=C,Y.connect(w),w},$=(Y,C,w,X,tt,it,rt="bandpass",Ft=0)=>{const St=i.createBufferSource();St.buffer=t;const Lt=i.createBiquadFilter();Lt.type=rt,Lt.frequency.value=w,Lt.Q.value=X;const ae=i.createGain();H(ae,Y,.001,tt,C*.8,C),St.connect(Lt).connect(ae);const wt=Ft?V(ae,Ft):ae;for(const Yt of it)wt.connect(Yt);St.start(Y,Math.random()*1.5),St.stop(Y+C+.02)},Q=(Y,C=1)=>{const w=i.createOscillator(),X=i.createGain();w.frequency.setValueAtTime(160,Y),w.frequency.exponentialRampToValueAtTime(44,Y+.11),H(X,Y,.002,1*C,.2,.3),w.connect(X).connect(l.drums),w.start(Y),w.stop(Y+.32),$(Y,.012,3500,.7,.35*C,[l.drums],"highpass");for(const tt of Object.values(c))tt.gain.cancelScheduledValues(Y),tt.gain.setValueAtTime(.35,Y),tt.gain.linearRampToValueAtTime(1,Y+.2)},st=(Y,C=1)=>{$(Y,.17,1900,.8,.5*C,[l.drums,p]);for(const[w,X,tt]of[[200,160,.3],[340,260,.14]]){const it=i.createOscillator(),rt=i.createGain();it.type="triangle",it.frequency.setValueAtTime(w,Y),it.frequency.exponentialRampToValueAtTime(X,Y+.08),H(rt,Y,.001,tt*C,.06,.11),it.connect(rt).connect(l.drums),it.start(Y),it.stop(Y+.13)}g.gain.setValueAtTime(.9*C,Y),g.gain.setValueAtTime(1e-4,Y+.21)};let Et=1;const Ot=(Y,C,w)=>{Et=-Et,$(Y,w?.14:.035,9e3,.6,(w?.12:.08)*C,[l.drums],"highpass",Et*.35)},W=(Y,C,w)=>{for(const it of[-n.reeseDetune,n.reeseDetune]){const rt=i.createOscillator(),Ft=i.createGain();rt.type="sawtooth",rt.frequency.value=fs(C),rt.detune.value=it,H(Ft,Y,.02,.2,.1,w),V(rt.connect(Ft),it>0?.25:-.25).connect(N),rt.start(Y),rt.stop(Y+w+.05)}const X=i.createOscillator(),tt=i.createGain();X.frequency.value=fs(C-12),H(tt,Y,.02,.42,.1,w),X.connect(tt).connect(c.bass),X.start(Y),X.stop(Y+w+.05)},Z=(Y,C,w,X=1)=>{for(const tt of C.slice(1))for(const[it,rt]of[[-9,-.6],[0,0],[8,.6]]){const Ft=i.createOscillator(),St=i.createGain();Ft.type=n.pad,Ft.frequency.value=fs(tt),Ft.detune.value=it,H(St,Y,.8,.026*X,1.4,w),V(Ft.connect(St),rt).connect(R),Ft.start(Y),Ft.stop(Y+w+.1)}},ht=(Y,C,w=1)=>{const X=i.createOscillator(),tt=i.createGain();X.type="square",X.frequency.value=fs(C+n.arpOct);const it=i.createBiquadFilter();it.type="lowpass",it.frequency.value=3200,H(tt,Y,.003,.05*w,.08,Li*1.6),X.connect(it).connect(tt),tt.connect(l.arp),tt.connect(_),X.start(Y),X.stop(Y+Li*2)},at=(Y,C,w,X)=>{const tt=w*Li;for(const it of[-6,6]){const rt=i.createOscillator(),Ft=i.createGain();rt.type=n.lead,X?(rt.frequency.setValueAtTime(fs(X),Y),rt.frequency.exponentialRampToValueAtTime(fs(C),Y+.05)):rt.frequency.value=fs(C),rt.detune.value=it;const St=i.createOscillator(),Lt=i.createGain();St.frequency.value=5.5,Lt.gain.value=9,St.connect(Lt).connect(rt.detune),St.start(Y+.12),St.stop(Y+tt+.05),H(Ft,Y,.01,.07,Math.min(.12,tt*.4),tt),V(rt.connect(Ft),it>0?.2:-.2).connect(B),rt.start(Y),rt.stop(Y+tt+.05)}};let mt=0,Dt=0,Ut=null,Wt=0,dt=.7,Mt=!1,k=0;const qt=Uh.reduce((Y,[,C])=>Y+C,0),bt=()=>{if(Wt<.5)return"ambient";let Y=k%qt;for(const[C,w]of Uh){if(Y<w)return C;Y-=w}return"drop"},kt=()=>{const Y=i.currentTime,C=(X,tt)=>{X.gain.cancelScheduledValues(Y),X.gain.setTargetAtTime(tt,Y,.8)},w=Wt;C(l.drums,.1+.85*w),C(l.bass,.3+.6*w),C(l.pad,.75-.2*w),C(l.arp,.35+.3*w),C(l.lead,.55+.35*w),a.gain.cancelScheduledValues(Y),a.gain.setTargetAtTime(Mt?0:dt*.8,Y,.3)},It=Y=>Y%2?Li*.12:0,ne=()=>{for(;Dt<i.currentTime+.15;){const Y=mt%32,C=Math.floor(mt/16),w=Math.floor(mt/32)%n.chords.length,X=n.chords[w];Y%16===0&&mt>0&&Wt>.5&&k++;const tt=bt(),it=Dt+It(Y),rt=k%8;if(tt==="drop"||tt==="build"){const St=rt%4===3&&Y>=16?fl.FILL:rt>=6?fl.B:fl.A,Lt=tt==="build"&&rt<4;St.k[Y]==="x"&&!(Lt&&Y%8)&&Q(it),St.s[Y]==="x"&&!Lt&&st(it,tt==="build"?.7:1),St.g[Y]==="x"&&st(it,.3),(!Lt||Y%2===0)&&Ot(it,Y%2?.6:1,Y%8===6)}else tt==="break"?(Y%4===2&&Ot(it,.6,!1),(Y===0||Y===16)&&Q(it,.4)):Y%4===2&&Ot(it,.45,!1);if(Y===0&&(Z(it,X,Li*32,tt==="break"?1.3:1),W(it,X[0],Li*(tt==="drop"?14:30))),tt==="drop"&&Y===16&&W(it,X[0]+(w%2?3:7),Li*14),Y%n.arpRate===0&&tt!=="break"&&ht(it,X[1+Y/n.arpRate%4]+(Y>=16?12:0),tt==="ambient"?.7:1),tt==="drop"||(tt==="break"||tt==="ambient")&&Math.floor(C/4)%2===1){const St=n.hook.findIndex(([Lt])=>Lt===Y);if(St>=0){const[,Lt,ae]=n.hook[St];at(it,Lt+(tt==="ambient"?-12:0),ae,St>0?n.hook[St-1][1]:0)}}Dt+=Li,mt++}};return{start(){Ut||(Dt=i.currentTime+.1,Ut=setInterval(ne,25),kt())},stop(){clearInterval(Ut),Ut=null,a.gain.setTargetAtTime(0,i.currentTime,.2)},setIntensity(Y){Y>.5&&Wt<=.5&&(k=0),Wt=Y,kt()},setVolume(Y){dt=Y,kt()},setMuted(Y){Mt=Y,kt()},get muted(){return Mt},get volume(){return dt},rms(){const Y=new Float32Array(o.fftSize);return o.getFloatTimeDomainData(Y),Math.sqrt(Y.reduce((C,w)=>C+w*w,0)/Y.length)},get intensity(){return Wt},get section(){return bt()},tap(Y){a.connect(Y)}}}const Nh=i=>440*Math.pow(2,(i-69)/12),Nr=60/76,zh={tak:{chords:[[50,62,66,69,73],[47,59,62,66,71],[43,59,62,67,71],[45,57,61,64,69]],scale:[62,64,66,69,71,74,76,78,81],bell:"sine",padCut:1400,nature:"birds"},vinter:{chords:[[45,57,64,67,71],[41,57,60,64,67],[48,60,64,67,74],[43,55,62,67,69]],scale:[64,67,69,71,74,76,79,81,83],bell:"triangle",padCut:1100,nature:"wind"},vulkan:{chords:[[40,52,59,62,67],[41,53,60,64,67],[38,50,57,62,65],[40,52,55,59,64]],scale:[52,55,57,59,62,64,67,69,71],bell:"sine",padCut:800,nature:"rumble"}},Fh=8;function P_(i,t,e){const n=zh[e]||zh.tak,s=i.createDynamicsCompressor();s.threshold.value=-20,s.ratio.value=2.5,s.attack.value=.03,s.release.value=.4;const r=i.createGain();r.gain.value=0,s.connect(r).connect(i.destination);const a=i.createAnalyser();a.fftSize=1024,r.connect(a);const o={};for(const W of["pad","bell","nature","pulse"]){const Z=i.createGain();Z.gain.value=0,Z.connect(s),o[W]=Z}const l=i.createBuffer(2,Math.floor(i.sampleRate*3.5),i.sampleRate);for(let W=0;W<2;W++){const Z=l.getChannelData(W);for(let ht=0;ht<Z.length;ht++)Z[ht]=(Math.random()*2-1)*Math.pow(1-ht/Z.length,3)}const c=i.createConvolver();c.buffer=l;const h=i.createGain();h.gain.value=.55,c.connect(h).connect(s);const u=i.createDelay(2);u.delayTime.value=Nr*.75;const f=i.createGain();f.gain.value=.35;const p=i.createBiquadFilter();p.type="lowpass",p.frequency.value=2200,u.connect(p).connect(f).connect(u),p.connect(o.bell);const g=i.createBiquadFilter();g.type="lowpass",g.frequency.value=n.padCut,g.Q.value=.7;const _=i.createOscillator(),m=i.createGain();_.frequency.value=.05,m.gain.value=n.padCut*.3,_.connect(m).connect(g.frequency),_.start(),g.connect(o.pad),g.connect(c);const d=(W,Z,ht,at,mt,Dt)=>{W.gain.setValueAtTime(1e-4,Z),W.gain.exponentialRampToValueAtTime(at,Z+ht),W.gain.setValueAtTime(at,Z+Math.max(ht,Dt-mt)),W.gain.exponentialRampToValueAtTime(1e-4,Z+Dt)},y=(W,Z)=>{const ht=i.createStereoPanner();return ht.pan.value=Z,W.connect(ht),ht},b=(W,Z,ht)=>{for(const at of Z)for(const[mt,Dt]of[[-7,-.5],[7,.5]]){const Ut=i.createOscillator(),Wt=i.createGain();Ut.type=at===Z[0]?"sine":"triangle",Ut.frequency.value=Nh(at),Ut.detune.value=mt,d(Wt,W,2.5,at===Z[0]?.05:.022,3,ht),y(Ut.connect(Wt),Dt).connect(g),Ut.start(W),Ut.stop(W+ht+.1)}},x=(W,Z,ht=1)=>{const at=(Math.random()-.5)*.8;for(const[mt,Dt,Ut]of[[1,.09,1.6],[4.2,.02,.25],[2,.025,.7]]){const Wt=i.createOscillator(),dt=i.createGain();Wt.type=mt===1?n.bell:"sine",Wt.frequency.value=Nh(Z)*mt,dt.gain.setValueAtTime(1e-4,W),dt.gain.exponentialRampToValueAtTime(Dt*ht,W+.005),dt.gain.exponentialRampToValueAtTime(1e-4,W+Ut);const Mt=y(Wt.connect(dt),at);Mt.connect(o.bell),Mt.connect(u),Mt.connect(c),Wt.start(W),Wt.stop(W+Ut+.05)}},R=(W,Z,ht,at,mt,Dt,Ut,Wt=.002)=>{const dt=i.createBufferSource();dt.buffer=t;const Mt=i.createBiquadFilter();Mt.type=ht,Mt.frequency.value=at,Mt.Q.value=mt;const k=i.createGain();return d(k,W,Wt,Dt,Z*.7,Z),dt.connect(Mt).connect(k).connect(Ut),dt.start(W,Math.random()*1.5),dt.stop(W+Z+.05),Mt},T=W=>{const Z=i.createOscillator(),ht=i.createGain();Z.frequency.setValueAtTime(90,W),Z.frequency.exponentialRampToValueAtTime(50,W+.18),d(ht,W,.01,.35,.2,.3),Z.connect(ht).connect(o.pulse),Z.start(W),Z.stop(W+.32)},E=(W,Z)=>R(W,.09,"highpass",7e3,.5,.05*Z,o.pulse,.02),A=W=>{const Z=2+Math.floor(Math.random()*3),ht=2400+Math.random()*1600,at=(Math.random()-.5)*1.4;for(let mt=0;mt<Z;mt++){const Dt=W+mt*(.09+Math.random()*.06),Ut=i.createOscillator(),Wt=i.createGain();Ut.frequency.setValueAtTime(ht*(1+Math.random()*.2),Dt),Ut.frequency.exponentialRampToValueAtTime(ht*(.75+Math.random()*.6),Dt+.07),d(Wt,Dt,.008,.03,.04,.08),y(Ut.connect(Wt),at).connect(o.nature),Ut.start(Dt),Ut.stop(Dt+.1)}};let M=null;const v=()=>{const W=i.createBufferSource();W.buffer=t,W.loop=!0;const Z=i.createBiquadFilter(),ht=i.createGain(),at=i.createOscillator(),mt=i.createGain(),Dt=i.createGain();n.nature==="wind"?(Z.type="bandpass",Z.frequency.value=500,Z.Q.value=1.2,ht.gain.value=.05,at.frequency.value=.08,mt.gain.value=.04,Dt.gain.value=350):n.nature==="rumble"?(Z.type="lowpass",Z.frequency.value=120,Z.Q.value=.8,ht.gain.value=.18,at.frequency.value=.05,mt.gain.value=.08,Dt.gain.value=40):(Z.type="highpass",Z.frequency.value=3e3,Z.Q.value=.5,ht.gain.value=.012,at.frequency.value=.11,mt.gain.value=.01,Dt.gain.value=800),at.connect(mt).connect(ht.gain),at.connect(Dt).connect(Z.frequency),W.connect(Z).connect(ht).connect(o.nature),W.start(),at.start(),M={s:W,lfo:at}};let S=null,I=0,N=.7,P=!1,U=0,B=0,H=0,V=0,$=0,Q=0,st=4;const Et=()=>{const W=i.currentTime,Z=I,ht=(at,mt)=>{at.gain.cancelScheduledValues(W),at.gain.setTargetAtTime(mt,W,1.2)};ht(o.pad,.9),ht(o.bell,.7+.2*Z),ht(o.nature,.9-.4*Z),ht(o.pulse,.55*Z),g.frequency.cancelScheduledValues(W),g.frequency.setTargetAtTime(n.padCut*(1+.9*Z),W,2),r.gain.cancelScheduledValues(W),r.gain.setTargetAtTime(P?0:N*1.6,W,.4)},Ot=()=>{const W=i.currentTime+.3;for(;U<W;)b(U,n.chords[B],Fh+3),B=(B+1)%n.chords.length,U+=Fh;for(;H<W;)Math.random()<.8&&(st=Math.max(0,Math.min(n.scale.length-1,st+[-2,-1,-1,1,1,2,0][Math.floor(Math.random()*7)])),x(H,n.scale[st],.8+Math.random()*.3),Math.random()<.15&&x(H+Nr/4,n.scale[Math.max(0,st-2)],.6)),H+=Nr*(I>.5?Math.random()<.5?.5:1:[1,1.5,2,3][Math.floor(Math.random()*4)]);for(;V<W;)I>.5&&($%2===0&&T(V),E(V,1),E(V+Nr/2,.6)),$++,V+=Nr;for(;Q<W;){if(n.nature==="birds"&&Math.random()<.55&&A(Q),n.nature==="wind"&&Math.random()<.3&&R(Q,2.5,"bandpass",1400+Math.random()*900,6,.03,o.nature,.9),n.nature==="rumble")for(let Z=0;Z<3;Z++)Math.random()<.5&&R(Q+Math.random(),.02,"highpass",2500,.5,.12,o.nature);Q+=1.5+Math.random()*2.5}};return{start(){if(S)return;U=H=V=Q=i.currentTime+.1,M||v(),S=setInterval(Ot,50),Et()},stop(){clearInterval(S),S=null,r.gain.setTargetAtTime(0,i.currentTime,.3)},setIntensity(W){I=W,Et()},setVolume(W){N=W,Et()},setMuted(W){P=W,Et()},get muted(){return P},get volume(){return N},rms(){const W=new Float32Array(a.fftSize);return a.getFloatTimeDomainData(W),Math.sqrt(W.reduce((Z,ht)=>Z+ht*ht,0)/W.length)},get intensity(){return I},get section(){return I>.5?"wave":"calm"},tap(W){r.connect(W)}}}const ee={startEmbers:225,emberLife:25,expiredRefund:.5,magnet:4.6,reach:2.7,placeAhead:2.3,minTowerGap:2.5,plinthBonus:1.25,lighthouseReach:5.4,stoneCost:30,chargeTime:.4,upgradeTime:[15,20,25,30],keeperSpeed:6.4,carrySlow:.82,wadeSlow:.7,stunTime:1.6,stunLoss:.3,chillMax:100,stressInvuln:1,stressPush:7,airStress:10,faintTime:6,faintLoss:.25,wakeChill:.6,regen:3,regenReach:9,bagChance:.05,bagHeal:25,bagLife:20,hpGrowth:.2,waveBonus:20,waveBonusPer:5,interest:.1,firstPrep:30,prepTime:15,earlyScale:[.55,.65,.8]},lr={ring:{name:"Røykring-kanon",cost:22,range:7.5,dmg:7,cooldown:.65,air:!0,tip:"rask · bakke + luft"},chips:{name:"Chips-mørtel",cost:38,range:10,dmg:18,cooldown:2.2,air:!1,splash:2.5,tip:"splash · kun bakke"},speaker:{name:"Reggae-høyttaler",cost:30,range:5.5,dmg:3,cooldown:1.6,air:!0,slowTime:2.2,tip:"bremser i ring"},bubble:{name:"Bobleblåser",cost:20,range:7,dmg:2.5,cooldown:.38,air:!0,ground:!1,trap:1.4,tip:"fanger flyvere · kun luft"},kite:{name:"Papirdrage",cost:40,range:13,dmg:5,cooldown:2.8,air:!0,ground:!1,zone:3.4,hover:2.4,tip:"sone, lang · kun luft"},pizza:{name:"Pizza-katapult",cost:55,range:14,dmg:24,cooldown:3,air:!1,splash:2.9,tip:"lang splash · kun bakke"},lamp:{name:"Lavalampe",cost:50,range:4.6,dmg:1.1,cooldown:.3,air:!0,slowTime:.5,tip:"aura, bremser alt"}},bo={clerk:{name:"Forbuds-byråkrat",hp:22,speed:2.6,embers:4,anim:12,puff:"#9fffb0",stress:10},tank:{name:"Stortings-tanken",hp:95,speed:1.25,embers:10,anim:5,puff:"#9fffb0",resist:{ring:.5,chips:1.5},stress:15},gull:{name:"Moralpanikk-måke",hp:16,speed:3.4,embers:5,anim:12,puff:"#ffffff",flying:!0,swoop:!0},swarm:{name:"Komité-sverm",hp:7,speed:2.2,embers:1,anim:9,puff:"#ffe08a",stress:8},auditor:{name:"Revisoren",hp:70,speed:1.6,embers:8,anim:7,puff:"#9fffb0",shield:.25,resist:{lamp:1.5},info:"skjold forfra (×0,25), ikke mot aura",stress:14},complainer:{name:"Naboklageren",hp:12,speed:4.3,embers:3,anim:18,puff:"#ffb0f0",resist:{chips:.5,ring:1.5},info:"rask, mørtel bommer",stress:10},lobbyist:{name:"Lobbyisten",hp:55,speed:1.9,embers:6,anim:9,puff:"#ffe08a",splits:3,resist:{speaker:.5,pizza:1.5},noMood:!0,info:"deler seg i tre, immun mot stemning",stress:12},lobbyMini:{name:"Mini-lobbyist",hp:14,speed:2.7,embers:1,anim:14,puff:"#ffe08a",resist:{speaker:.5,pizza:1.5},noMood:!0,stress:8},drone:{name:"Overvåkings-drone",hp:9,speed:4.6,embers:1,anim:30,puff:"#c8d8ff",flying:!0,alt:3.6,resist:{bubble:1.5,lamp:1.5,kite:.5},info:"rask sverm i lufta"},balloon:{name:"Ballong-byråkraten",hp:150,speed:1.05,embers:14,anim:2,puff:"#ffffff",flying:!0,alt:5.6,resist:{bubble:.5,kite:1.5},info:"seig, høyt oppe"},heli:{name:"Mini-helikopteret",hp:48,speed:2.5,embers:7,anim:40,puff:"#ffffff",flying:!0,alt:4.6,blind:{every:6,dur:3,range:9},resist:{ring:.5,kite:1.5},info:"søkelys blender et tårn i 3 s"}},D_=[[{type:"clerk",n:8,gap:1.4,path:0}],[{type:"clerk",n:6,gap:1.3,path:"both"}],[{type:"swarm",n:7,gap:.35,path:1},{type:"clerk",n:6,gap:1.2,path:0,at:4},{type:"swarm",n:7,gap:.35,path:0,at:12}],[{type:"tank",n:3,gap:4,path:0},{type:"clerk",n:6,gap:1,path:1,at:2}],[{type:"gull",n:5,gap:2.5},{type:"clerk",n:7,gap:1,path:"both",at:3}],[{type:"tank",n:3,gap:3.5,path:"both"},{type:"swarm",n:8,gap:.3,path:"both",at:8}],[{type:"gull",n:8,gap:1.6},{type:"clerk",n:9,gap:.8,path:"both",at:2}],[{type:"tank",n:4,gap:3,path:"both"},{type:"swarm",n:10,gap:.3,path:"both",at:6},{type:"gull",n:4,gap:2,at:10}],[{type:"gull",n:10,gap:1.2},{type:"tank",n:4,gap:3,path:"both",at:3},{type:"clerk",n:10,gap:.7,path:"both",at:8}],[{type:"clerk",n:10,gap:.6,path:"both"},{type:"tank",n:5,gap:2.5,path:"both",at:6},{type:"swarm",n:12,gap:.25,path:"both",at:14},{type:"gull",n:12,gap:1,at:18}]],tn=new URLSearchParams(location.search),td=tn.has("demo");if(tn.has("unlockall"))try{localStorage.setItem("glod-unlocked",String(Er.length))}catch{}let Rn=Number(tn.get("world"));if(!Number.isInteger(Rn))try{Rn=Number(localStorage.getItem("glod-world"))||0}catch{Rn=0}Rn=Math.max(0,Math.min(na()-1,Rn));try{localStorage.setItem("glod-world",String(Rn))}catch{}const sn=Er[Rn],Jc=L1(sn,D_);function L_(){return 1}const I_=Math.max(1,Math.min(20,Number(tn.get("speed"))||1)),Gi=matchMedia("(pointer: coarse)").matches||tn.has("mobile"),_c={high:{shadow:2048,dprCap:2},low:{shadow:1024,dprCap:2}};let vi=Gi?"low":"high";try{const i=localStorage.getItem("glod-quality");(i==="high"||i==="low")&&(vi=i)}catch{}(tn.get("q")==="high"||tn.get("q")==="low")&&(vi=tn.get("q"));const ra={mobile:Gi,shadow:_c[vi].shadow,dprCap:_c[vi].dprCap},U_={high:["rock","tree","tower","figure"],low:["rock","tree","tower","figure"]};function ed(i){const t=tn.has("ol")?tn.get("ol").split(","):U_[i];Uf(Object.fromEntries(["rock","tree","tower","figure"].map(e=>[e,t.includes(e)])))}ed(vi);const nd=document.getElementById("game"),wn=new Tx({canvas:nd,antialias:!Gi,powerPreference:"high-performance",preserveDrawingBuffer:tn.has("shot")});let Qi=Math.min(devicePixelRatio||1,ra.dprCap);wn.setPixelRatio(Qi);wn.shadowMap.enabled=!0;wn.shadowMap.type=Xh;wn.toneMapping=Tc;let ys="dag";try{ys=localStorage.getItem("glod-tid")||"dag"}catch{}tn.get("tid")&&(ys=tn.get("tid"));const Wn=ys==="skumring"&&sn.skyDusk?sn.skyDusk:sn.sky;wn.toneMappingExposure=Wn.exposure;wn.info.autoReset=!1;const Te=new Ax,id=new Pt(Wn.fog);Te.background=id;Te.fog=new Gc(id,...sn.fog??[55,115]);const Ye=new Bn(38,1,.5,200),N_=new l1(Wn.hemiSky,Wn.hemiGround,Wn.hemi);Te.add(N_);const hn=new h1(Wn.sun,Wn.sunI);hn.castShadow=!0;hn.shadow.mapSize.set(ra.shadow,ra.shadow);Object.assign(hn.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:90});hn.shadow.bias=-8e-4;hn.shadow.normalBias=.03;Te.add(hn,hn.target);v1(Te);const jt=Z1(Te,ra,sn);jt.grass.setLevel(vi);const z_=d_(Te,jt,ra,sn,ys,Ye),Dn=p_(jt);window.__nav=Dn;const Ne=Jf(Te,Gi?450:800),Ps=Jf(Te,Gi?120:220,{blending:es,size:1.6,opacity:.45,fadeTo:Wn.fog}),ha=f_(wn,Te,Ye,Wn.grade);ha.setLevel(vi);const Qt=w_(nd),sd=T_(Qt);Qt.menu=sd;Qt.panelOpen=()=>!pi.classList.contains("hidden");const qr=document.createElement("div");qr.id="toast";document.body.appendChild(qr);let Oh=0;function F_(i){qr.textContent=i,qr.classList.add("on"),clearTimeout(Oh),Oh=setTimeout(()=>qr.classList.remove("on"),3200)}Qt.onPad=(i,t)=>{F_(i==="connect"?`🎮 Kontroll tilkoblet: ${__(t)}`:"🎮 Kontroll frakoblet"),Hn.device=null,he("pause").classList.contains("hidden")||Ss(!0,J.confirming)};function fa(){const i=innerWidth,t=innerHeight;wn.setSize(i,t,!1),Ye.aspect=i/t,Ye.updateProjectionMatrix(),ha.setSize(i,t),g1(Gi?2:2.2,wn.getPixelRatio(),i,t)}function rd(i){vi=i;try{localStorage.setItem("glod-quality",i)}catch{}const t=_c[i];hn.shadow.mapSize.set(t.shadow,t.shadow),hn.shadow.map&&(hn.shadow.map.dispose(),hn.shadow.map=null),Qi=Math.min(devicePixelRatio||1,t.dprCap),wn.setPixelRatio(Qi),ha.setLevel(i),jt.grass.setLevel(i),ed(i),fa(),document.getElementById("btn-quality").textContent=i==="high"?"Høy":"Lav"}addEventListener("resize",fa);fa();const J={phase:"title",wave:0,timer:0,embers:ee.startEmbers,lights:_r,spawnQueue:[],leaks:{},seen:{},time:0,sel:0,paused:!1},dl=ee.upgradeTime.length+1,Zi=["ring","chips","speaker","bubble","kite","pizza","lamp"];let zi=sn.camYaw??0;const kh=new f1,Ln=[],In=[],oi=[],xs=[],cr=[],Yr=[],Ke=ua(k1(),"figure"),L={x:jt.lighthouse.pos.x+1,z:jt.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,walk:0,charge:0,chargeTower:null,face:Math.PI,goal:null,chill:ee.chillMax,inv:0,faint:0,faints:0,roll:null,stillT:0,rollBlock:null};Ke.position.set(L.x,jt.heightAt(L.x,L.z),L.z);Te.add(Ke);const ad=Wn.lantern??2.6,Qc=new ea("#ffcf70",ad,6,1.8);Qc.position.set(.8,.45,-.3);Ke.add(Qc);const he=i=>document.getElementById(i),an={chill:he("hud-chill"),lights:he("hud-lights"),embers:he("hud-embers"),wave:he("hud-wave"),timer:he("hud-timer")},ki=he("hint"),pi=he("build-panel"),tu=he("btn-next"),eu=he("fps");tn.has("debug")||eu.classList.add("hidden");let Hn={};function Xn(i,t,e,n){Hn[t]!==e&&(Hn[t]=e,i.querySelector("b").textContent=e,n&&(i.classList.remove(n),i.offsetWidth,i.classList.add(n)))}const O_=4;let od=0;function Bh(i){if(ki.textContent===i)return;ki.textContent=i,od=0,ki.classList.remove("faded");const t=pi.classList.contains("hidden")?null:pi.getBoundingClientRect();ki.style.bottom=t&&t.height?`${Math.round(innerHeight-t.top+6)}px`:""}function k_(i){(od+=i)>O_&&ki.classList.add("faded")}function ld(i){J.phase="prep",J.timer=i,tu.classList.remove("hidden"),B_()}function B_(){const i=J.wave+1,t=i===1?1:i<=3?2:2+Math.floor(Math.random()*3);J.spawnPoints=Dn.coastPoints(t,24),J.spawnPoints.length||(J.spawnPoints=Dn.coastPoints(t,8,{near:12,minFrac:.5})),J.spawnPoints.length||(J.spawnPoints=Dn.roadEnds().slice(0,t)),X_()}function cd(){J.wave+=1,J.phase="wave",tu.classList.add("hidden"),J.spawnQueue=[];for(const i of Jc[J.wave-1]){const t=J.wave<=ee.earlyScale.length?J.wave-1:-1,e=J.spawnPoints.length,n=bo[i.type].flying?sn.balance.air??1:1,s=Math.max(1,Math.round(i.n*(sn.balance.count||1)*n*(t>=0?ee.earlyScale[t]:1)));if(i.path==="both"){const r=Math.ceil(s/Math.min(2,e));for(let a=0;a<e;a++)for(let o=0;o<r;o++)J.spawnQueue.push({t:(i.at??0)+o*i.gap+a*.3,type:i.type,path:a})}else{const r=i.path??0;for(let a=0;a<s;a++)J.spawnQueue.push({t:(i.at??0)+a*i.gap,type:i.type,path:(r+a%2)%e})}}J.spawnQueue.sort((i,t)=>i.t-t.t),J.waveClock=0,Be.wave(),Qe==null||Qe.setIntensity(1),Xn(an.wave,"wave",J.wave,"bump")}function nu(i,t){var l,c;const e=bo[i],n=ua(B1(i),"figure"),s=e.hp*(1+ee.hpGrowth*(J.wave-1))*sn.balance.hp*(((c=(l=sn.balance.types)==null?void 0:l[i])==null?void 0:c.hp)??1)*L_(),r={type:i,def:e,mesh:n,hp:s,maxHp:s,slow:0,phase:Math.random()*6,alive:!0,speedMul:sn.balance.speed*(e.flying?sn.balance.airSpeed??1:1),lane:(Math.random()-.5)*1.4};r.var=.95+Math.random()*.1,r.speedMul*=.95+Math.random()*.1,n.scale.setScalar(r.var),r.blinkT=Math.random()*4;const a=J.spawnPoints[t%J.spawnPoints.length]||[0,50],o=jt.lighthouse.pos;if(e.flying){const h=Math.atan2(a[1]-o.z,a[0]-o.x)+(Math.random()-.5)*.5,u=o.x+Math.cos(h)*66,f=o.z+Math.sin(h)*66;r.x=u,r.z=f,r.y=e.alt||4,r.dist0=Math.hypot(o.x-u,o.z-f),r.hitCd=0}else r.x=a[0]+(Math.random()-.5)*1.5,r.z=a[1]+(Math.random()-.5)*1.5,r.y=jt.heightAt(r.x,r.z),r.remain=Dn.at(r.x,r.z);return n.position.set(r.x,r.y,r.z),Te.add(n),Ln.push(r),!J.seen[i]&&i!=="lobbyMini"&&(J.seen[i]=!0,G_(r)),r}const Mc={ring:"💨",chips:"🥔",speaker:"🔊",bubble:"🫧",kite:"🪁",pizza:"🍕",lamp:"🌋"};function ud(i){const t=Object.entries(i.resist||{}),e=t.filter(([,s])=>s<1).map(([s])=>Mc[s]).join(""),n=t.filter(([,s])=>s>1).map(([s])=>Mc[s]).join("");return{tough:e+(i.shield?"📒":""),weak:n}}const Ni=[],So=document.createElement("div");So.id="tags";document.body.appendChild(So);function G_(i){const{tough:t,weak:e}=ud(i.def),n=document.createElement("div");n.className="enemy-tag",n.innerHTML=`<b>${i.def.flying?"🪶":"🐾"} ${i.def.name}</b>${t?`<span>🛡️${t}</span>`:""}${e?`<span>💥${e}</span>`:""}`,So.appendChild(n),Ni.push({m:i,el:n,t:0}),(J.wave>1||i.def.flying)&&on(`Ny fiende: ${i.def.name}${t?` · tåler ${t}`:""}${e?` · svak mot ${e}`:""}`)}const aa=document.createElement("div");aa.id="upgbars";document.body.appendChild(aa);const oo=[];function V_(){var i;oo.length=0,aa.style.visibility=J.paused?"hidden":"";for(const t of In){if(!t.upg){t.upgEl&&(t.upgEl.remove(),t.upgEl=null);continue}t.upgEl||(t.upgEl=document.createElement("div"),t.upgEl.className="upg-bar",t.upgEl.innerHTML='<div class="upg-arrows"></div><div class="upg-track"><i></i></div><span></span>',aa.appendChild(t.upgEl));const e=t.upgEl,n=Math.min(1,t.upg.t/t.upg.dur),s=((i=L.roll)==null?void 0:i.tower)===t?L.roll:null,r=s?s.seq.join()+s.i:"";e.dataset.k!==r&&(e.dataset.k=r,e.firstChild.innerHTML=s?s.seq.map((u,f)=>`<b class="${f<s.i?"lit":f===s.i?"next":""}">${{rU:"▲",rR:"▶",rD:"▼",rL:"◀"}[u]}</b>`).join(""):""),s!=null&&s.shake&&(s.shake=!1,e.firstChild.classList.remove("shake"),e.offsetWidth,e.firstChild.classList.add("shake"),e.firstChild.onanimationend=()=>e.firstChild.classList.remove("shake")),t.upgReset&&(t.upgReset=!1,e.classList.remove("reset"),e.offsetWidth,e.classList.add("reset")),e.children[1].firstChild.style.width=`${(100*n).toFixed(1)}%`;const a=t.upg.t>0||s?`nv. ${t.level+1} · ${Math.ceil(t.upg.dur-t.upg.t)} s igjen`:`nv. ${t.level+1} · stå stille for å rulle`;e.lastChild.textContent!==a&&(e.lastChild.textContent=a),Ae.set(t.x,t.y+2.9*t.mesh.scale.y,t.z).project(Ye);const o=Ae.z<1&&Math.abs(Ae.x)<1&&Math.abs(Ae.y)<1;if(e.style.display=o?"flex":"none",!o)continue;const l=e.offsetWidth,c=e.offsetHeight,h={x:Math.min(Math.max((Ae.x*.5+.5)*innerWidth,l/2+6),innerWidth-l/2-6),y:(-Ae.y*.5+.5)*innerHeight,w:l,h:c,on:o};e.style.left=`${h.x}px`,e.style.top=`${h.y}px`,oo.push(h)}}function H_(i){var n;const t=Ni.length?he("hud").getBoundingClientRect().bottom:0;for(let s=Ni.length-1;s>=0;s--){const r=Ni[s];r.age=(r.age||0)+i,Ae.set(r.m.x,r.m.y+(((n=r.m.mesh.userData.hpBar)==null?void 0:n.position.y)??2.2)+.5,r.m.z).project(Ye);const a=Ae.z<1&&Math.abs(Ae.x)<1&&Math.abs(Ae.y)<1;r.el.style.display=a?"flex":"none",a&&(r.t+=i);const o=r.el.offsetWidth,l=r.el.offsetHeight;r.x=Math.min(Math.max((Ae.x*.5+.5)*innerWidth,o/2+6),innerWidth-o/2-6),r.y=Math.max((-Ae.y*.5+.5)*innerHeight,t+l+6),r.w=o,r.h=l,r.on=a,r.el.style.opacity=String(Math.min(1,(6-r.t)/.6)),(r.t>6||r.age>90||!r.m.alive)&&(r.el.remove(),Ni.splice(s,1))}const e=[...oo];for(const s of Ni.filter(r=>r.on).sort((r,a)=>r.y-a.y)){let r=!0;for(let a=0;r&&a<8;a++){r=!1;for(const o of e)Math.abs(s.x-o.x)<(s.w+o.w)/2+4&&s.y>o.y-o.h-3&&s.y-s.h<o.y+3&&(s.y=o.y+s.h+4,r=!0)}e.push(s)}for(const s of Ni)s.on&&(s.el.style.left=`${s.x}px`,s.el.style.top=`${s.y}px`)}function W_(i){return i.def.flying?1-Math.hypot(jt.lighthouse.pos.x-i.x,jt.lighthouse.pos.z-i.z)/i.dist0:1-Math.min(1,(i.remain??Dn.maxDist)/Dn.maxDist)}const no=[],bs=document.createElement("div");bs.id="warn";document.body.appendChild(bs);function X_(){for(const e of no)Te.remove(e);no.length=0,bs.innerHTML="";for(const[e,n]of J.spawnPoints){const s=new le(hd,new Le({color:"#ff7a3a",transparent:!0,opacity:.8,depthWrite:!1}));s.position.set(e,Math.max(jt.heightAt(e,n),.08)+.1,n);const r=new le(q_,new Le({color:"#ff8a3a",transparent:!0,opacity:.35,blending:gi,depthWrite:!1,fog:!1}));r.position.y=4,s.add(r),Te.add(s),no.push(s);const a=document.createElement("div");a.className="warn-arrow",a.innerHTML='<span class="arr">➤</span><span class="kind"></span>',bs.appendChild(a)}const i=J.spawnPoints.length,t=J.spawnPoints.map(()=>({air:!1,ground:!1}));for(const e of Jc[J.wave]||[]){const n=e.path==="both"?t.map((s,r)=>r):[(e.path??0)%i,((e.path??0)+1)%i];for(const s of n)t[s][bo[e.type].flying?"air":"ground"]=!0}t.forEach((e,n)=>{var r;const s=(r=bs.children[n])==null?void 0:r.querySelector(".kind");s&&(s.textContent=(e.air?"🪶":"")+(e.ground?"🐾":""))})}const hd=new ss(1.6,2.2,32);hd.rotateX(-Math.PI/2);const q_=new We(.5,1.4,8,12,1,!0);function Y_(){var a;const i=J.phase==="prep"||J.phase==="wave"&&J.waveClock<8,t=bs.children,e=i&&!pi.classList.contains("hidden")?pi.getBoundingClientRect():null,n=e&&ki.textContent&&!ki.classList.contains("faded"),s=i?he("hud").getBoundingClientRect().bottom:0;bs.style.visibility=So.style.visibility=J.paused?"hidden":"";const r=e?n?Math.min(e.top,ki.getBoundingClientRect().top):e.top:0;(a=J.spawnPoints)==null||a.forEach(([o,l],c)=>{const h=no[c],u=t[c];if(!h||!u)return;h.visible=i;const f=.5+.5*Math.sin(J.time*6);h.scale.setScalar(1+f*.35),h.material.opacity=.35+.5*f,Ae.set(o,h.position.y,l).project(Ye);const p=Math.abs(Ae.x)>.92||Math.abs(Ae.y)>.88||Ae.z>1;if(u.style.display=i?"block":"none",u.classList.toggle("onscreen",!p),i&&!p&&(u.style.left=`${(Ae.x*.5+.5)*innerWidth}px`,u.style.top=`${Math.max((-Ae.y*.5+.5)*innerHeight-30,s+30)}px`,u.style.transform="translate(-50%, -50%)",u.firstChild.style.transform=""),i&&p){let g=Ae.x,_=Ae.y;Ae.z>1&&(g=-g,_=-_);const m=Math.atan2(-_,g),d=Math.max(Math.abs(g),Math.abs(_))||1,y=xe.clamp(g/d,-1,1),b=xe.clamp(_/d,-1,1),x=(y*.46+.5)*innerWidth;let R=(-b*.44+.5)*innerHeight;e&&x>e.left-24&&x<e.right+24&&R>r-24&&(R=r-24),R=Math.max(R,s+30),u.style.left=`${x}px`,u.style.top=`${R}px`,u.style.transform=`translate(-50%, -50%) scale(${1+f*.25})`,u.firstChild.style.transform=`rotate(${m}rad)`}})}function _s(i,t,e){var n;if(i.alive){if(e&&(t*=((n=i.def.resist)==null?void 0:n[e.type])??1,i.def.shield&&e.type!=="lamp")){const s=e.x-i.x,r=e.z-i.z,a=Math.hypot(s,r)||1,o=Math.hypot(i.hx||0,i.hz||0)||1;(s*(i.hx||0)+r*(i.hz||0))/(a*o)>.35&&(t*=i.def.shield,Math.random()<.3&&Ne.emit(i.x,i.y+1,i.z,{n:2,color:"#d8c890",speed:1.5,up:1,life:.3}))}i.hp-=t,i.hitT=.18,i.mesh.userData.hpBar.visible=!0,i.hp<=0&&$_(i)}}function $_(i){i.alive=!1,i.chillT=0,G1(i),Yr.push(i),Ne.emit(i.x,i.y+1.2,i.z,{n:12,color:i.def.puff,speed:1.6,up:2.2,life:.9,gravity:1.5}),Be.chill(),iu(i.x,i.y+.5,i.z,i.def.embers,i.def.flying),!i.def.flying&&Math.random()<ee.bagChance&&fd(i.x,i.z);for(let t=0;t<(i.def.splits||0);t++){const e=nu("lobbyMini",0);e.x=i.x+(t-1)*.6,e.z=i.z+(t%2?.5:-.5),e.y=jt.heightAt(e.x,e.z),e.mesh.position.set(e.x,e.y,e.z)}}function j_(i){var t;for(let e=Yr.length-1;e>=0;e--){const n=Yr[e];n.chillT+=i;const s=n.chillT,r=n.mesh.userData.body;if(n.def.flying)n.y+=i*2.5,n.z+=i*3,(t=n.mesh.userData.wings)==null||t.forEach((o,l)=>o.rotation.z=Math.sin(s*6)*.4*(l?-1:1));else if(s<1.4){const o=Math.min(1,s/.4);r.position.y=-.25*o*(n.type==="tank"?1.3:1),r.rotation.x=.25*o,r.rotation.z=Math.sin(s*3)*.05}else{r.rotation.x=0,r.position.y=Math.abs(Math.sin(s*7))*.06;const[o,l]=Dn.dir(n.x,n.z),c=n.x-o*n.def.speed*.45*i,h=n.z-l*n.def.speed*.45*i;jt.isWalkable(c,h)&&(n.x=c,n.z=h),n.y=jt.heightAt(n.x,n.z),(o||l)&&(n.mesh.rotation.y=Math.atan2(o,l))}Math.random()<i*1.5&&Ne.emit(n.x,n.y+1.8,n.z,{n:1,color:"#c8ffb0",speed:.3,up:1,life:.8,gravity:-.4}),s>2.6&&!n.popped&&(n.popped=!0,Ps.emit(n.x,n.y+.8,n.z,{n:8,color:"#eef6e8",speed:1.4,up:1.2,life:.7,gravity:-.5}));const a=Math.max(0,Math.min(1,(3.2-s)/.6));n.mesh.scale.setScalar(a*(n.var||1)*(s>2.6?1+Math.sin((s-2.6)*10)*.08:1)),n.mesh.position.set(n.x,n.y,n.z),s>3.2&&(Te.remove(n.mesh),Yr.splice(e,1))}}function iu(i,t,e,n,s=!1,r=1){const a=Math.min(n,n>=6?3:n>=3?2:1);let o=n;for(let l=0;l<a;l++){const c=l===a-1?o:Math.ceil(n/a);o-=c;const h=H1(),u=Math.random()*Math.PI*2,f=(1.2+Math.random()*1.8)*r,p={mesh:h,x:i,y:t,z:e,vx:Math.cos(u)*f,vz:Math.sin(u)*f,vy:5+Math.random()*2,life:ee.emberLife,value:c,settled:!1,phase:Math.random()*6};h.scale.setScalar(.8+Math.min(c,6)*.08),Te.add(h),xs.push(p)}}function oa(i,t,e,n,s=()=>!0){let r=null,a=n;for(const o of i){if(!s(o))continue;const l=Math.hypot(o.x-t,o.z-e);l<a&&(a=l,r=o)}return r}function su(){const i=oa(jt.plinths,L.x,L.z,ee.reach,l=>!l.tower);if(i)return{x:i.x,z:i.z,y:i.y,plinth:i,ok:!0};const t=-Math.sin(L.face),e=-Math.cos(L.face),n=L.x+t*ee.placeAhead,s=L.z+e*ee.placeAhead,r=jt.heightAt(n,s),a=jt.lighthouse.pos;let o="";return r<.35?o="i vannet":jt.extras.blocks(n,s)?o="i lavaen":jt.pathDist(n,s)<1.9?o="på stien":jt.slopeAt(n,s)>.6?o="for bratt":Math.hypot(n-a.x,s-a.z)<5.5?o="for nær fyret":In.some(l=>Math.hypot(l.x-n,l.z-s)<ee.minTowerGap)?o="for nær et annet tårn":jt.plinths.some(l=>Math.hypot(l.x-n,l.z-s)<1.9)?o="oppå en sokkel (gå helt bort til den)":jt.colliders.some(l=>!l.tower&&(l.x-n)**2+(l.z-s)**2<(l.r+.7)**2)&&(o="i veien for et tre eller en stein"),{x:n,z:s,y:r,plinth:null,ok:!o,why:o}}function lo(i){const t=su();if(!t.ok){Be.deny(),on(`Ikke lov å bygge her: ${t.why}`);return}const e=lr[i];if(J.embers<e.cost){Be.deny(),on(`Trenger ${e.cost} ✦ glør`),Xn(an.embers,"embersBad",Math.random(),"bad");return}J.embers-=e.cost;const n=ua(V1(i),"tower");if(n.position.set(t.x,t.y,t.z),!t.plinth){const r=new le(Z_,K_);r.position.y=.04,r.receiveShadow=!0,n.add(r)}Te.add(n);const s={type:i,def:e,mesh:n,x:t.x,z:t.z,y:t.y,level:1,cd:.3,plinth:t.plinth,onPlinth:!!t.plinth};t.plinth&&(t.plinth.tower=s),In.push(s),jt.colliders.push({x:t.x,z:t.z,r:1,tower:s}),Ne.emit(t.x,t.y+.3,t.z,{n:24,color:"#ffe3a0",speed:4,up:3,life:.8,gravity:5}),Be.build(),J.buildMode=!1,t.plinth&&on(`${e.name} på gammel sokkel: +25 % rekkevidde`)}const Z_=new We(.95,1.05,.12,10),K_=new Xe({color:"#8a8478"}),Fi=new _e;{const i=new le(new gr(1,24),new Le({transparent:!0,opacity:.35,depthWrite:!1}));i.rotation.x=-Math.PI/2;const t=new ss(.965,1,64);t.rotateX(-Math.PI/2);const e=new le(t,new Le({transparent:!0,opacity:.6,depthWrite:!1})),n=new le(new We(.55,.7,1.6,10),new Le({transparent:!0,opacity:.25,depthWrite:!1}));n.position.y=.8,Fi.add(i,e,n),Fi.userData={disc:i,ring:e,pillar:n},Fi.visible=!1,Fi.renderOrder=20,Te.add(Fi)}function J_(i,t,e){if(Fi.visible=i,!i)return;const n=t.ok,s=n?t.plinth?"#9fffb0":"#7be06a":"#ff5a4a",r=lr[e].range*(t.plinth?ee.plinthBonus:1);Fi.position.set(t.x,t.y+.06,t.z);const a=Fi.userData;for(const o of[a.disc,a.ring,a.pillar])o.material.color.set(s);a.ring.scale.setScalar(r),a.ring.visible=n,a.pillar.visible=!t.plinth}const Ii=(i,t)=>{const e=i.level-1;return t==="range"?i.def.range*(1+.12*e)*(i.onPlinth?ee.plinthBonus:1):t==="dmg"?i.def.dmg*[1,1.7,2.6,3.9,5.85][e]:t==="rate"?i.def.cooldown/(1+.15*e):i.def[t]},io=[];function Q_(i){const t=Wf();Kc(t,1),Ke.userData.roll.getWorldPosition(t.position),Te.add(t),io.push({mesh:t,from:t.position.clone(),to:new G(i.x,i.y+1.3*i.mesh.scale.y,i.z),age:0})}function tM(i){for(let t=io.length-1;t>=0;t--){const e=io[t];e.age+=i;const n=Math.min(1,e.age/.45);e.mesh.position.lerpVectors(e.from,e.to,n),e.mesh.position.y+=Math.sin(n*Math.PI)*1.2,e.mesh.rotation.z+=i*14,n>=1&&(Te.remove(e.mesh),io.splice(t,1),Ps.emit(e.to.x,e.to.y+.3,e.to.z,{n:6,color:"#e8e2dc",speed:1.2,up:1.4,life:1.2,gravity:-.3}))}}function eM(i){var t,e;L.rollP=-1,tM(i);for(const n of In){if(n.cd-=i,n.upg){const u=L.stun<=0&&((t=L.roll)==null?void 0:t.tower)===n;if(u)n.upg.t+=i,n.rollEase=(n.rollEase??0)+(Math.min(1,n.upg.t/n.upg.dur)-(n.rollEase??0))*(1-Math.exp(-i/.05)),L.rollP=Math.min(1,n.rollEase),L.rollTower=n;else if(n.upg.t>0){const f=Ke.userData.roll.getWorldPosition(hr);Ne.emit(f.x,f.y,f.z,{n:14,color:"#4f8f3a",speed:1.4,up:.8,life:.8,gravity:6}),Ne.emit(f.x,f.y,f.z,{n:5,color:"#fffdf5",speed:1,up:.6,life:.7,gravity:5}),n.upg.t=0,n.rollEase=0,n.upgReset=!0,wo("😩"),Qt.rumble(220,.5),on(`Rullingen ble avbrutt! Start på nytt ved ${n.def.name}`)}ia(n,Math.min(1,n.upg.t/n.upg.dur)),u&&Math.random()<i*8&&Ne.emit(L.x,Ke.position.y+2.2,L.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),n.upg.t>=n.upg.dur&&(!u||n.rollEase>=.97)&&(Q_(n),L.rollP=-1,n.rollEase=0,((e=L.roll)==null?void 0:e.tower)===n&&(L.roll=null),n.upg=null,n.level+=1,Xf(n,n.level),ia(n,0),Ne.emit(n.x,n.y+1.2,n.z,{n:30,color:"#8ff0ff",speed:4,up:4,life:.9,gravity:5}),Be.upgrade(),on(`${n.def.name} er nå nivå ${n.level}`))}if(n.armBack>0&&(n.armBack-=i,n.armBack<=0&&(n.mesh.userData.arm.rotation.x=-.35)),n.type==="lamp"&&n.mesh.userData.blobs.forEach((u,f)=>u.position.y=.75+Math.sin(J.time*.8+f*2.1)*.35),n.blind>0){n.blind-=i,Math.random()<i*8&&Ne.emit(n.x,n.y+2,n.z,{n:1,color:"#fff6c8",speed:.6,up:.8,life:.5,gravity:-.4});continue}const s=Ii(n,"range");let r=null,a=-1;for(const u of Ln){if(!u.alive||(u.def.flying?!n.def.air:n.def.ground===!1)||Math.hypot(u.x-n.x,u.z-n.z)>s)continue;const f=W_(u);f>a&&(a=f,r=u)}const o=n.mesh.userData.head;if(n.type==="speaker"){const u=Math.max(0,Math.sin(J.time*7.3));o.rotation.z=Math.sin(J.time*3.65)*.05,n.mesh.userData.woofers.forEach(f=>f.scale.set(1+u*.15,1,1+u*.15)),r&&(o.rotation.y+=uo(Math.atan2(-(r.x-n.x),-(r.z-n.z)),o.rotation.y)*Math.min(1,i*3))}else if(r){const u=Math.atan2(-(r.x-n.x),-(r.z-n.z));o.rotation.y+=uo(u,o.rotation.y)*Math.min(1,i*10)}if(!r||n.cd>0)continue;n.cd=Ii(n,"rate");const l=n.x,c=n.y+1.4*n.mesh.scale.y,h=n.z;if(n.type==="ring"){const u=W1();u.position.set(l,c-.3,h),Te.add(u),oi.push({kind:"bolt",src:n,mesh:u,target:r,dmg:Ii(n,"dmg"),tx:r.x,ty:r.y,tz:r.z,age:0}),Be.puff()}else if(n.type==="chips"){const u=qf();u.position.set(l,n.y+1,h),Te.add(u);const[f,p]=r.def.flying?[0,0]:Dn.dir(r.x,r.z),g=r.x+f*r.def.speed*.6,_=r.z+p*r.def.speed*.6;oi.push({kind:"shell",src:n,mesh:u,sx:l,sy:n.y+1,sz:h,ex:g,ez:_,ey:jt.heightAt(g,_),t:0,dur:.95,dmg:Ii(n,"dmg"),splash:n.def.splash*(1+.1*(n.level-1))}),Ne.emit(l,n.y+1.3,h,{n:6,color:"#d8d0c0",speed:1,up:2,life:.5,gravity:-1}),Be.mortar()}else if(n.type==="speaker"){for(const f of Ln)!f.alive||Math.hypot(f.x-n.x,f.z-n.z)>s||(f.def.noMood||(f.slow=n.def.slowTime),_s(f,Ii(n,"dmg"),n));const u=Yf();u.position.set(n.x,n.y+.3,n.z),Te.add(u),cr.push({mesh:u,t:0,r:s}),Ne.emit(n.x,n.y+1.8,n.z,{n:6,color:["#7be06a","#f2c94c","#ff7a5a"][Math.floor(Math.random()*3)],speed:2.2,up:1.6,life:.9,gravity:.5}),Be.skank()}else if(n.type==="bubble"){const u=jf();u.position.set(l,c+.2,h),Te.add(u),oi.push({kind:"bubble",src:n,mesh:u,target:r,dmg:Ii(n,"dmg"),trap:n.def.trap,tx:r.x,ty:r.y,tz:r.z}),Be.pickup()}else if(n.type==="kite"){if(oi.some(f=>f.kind==="kite"&&f.tower===n)){n.cd=.2;continue}const u=ua($f(),"tower");u.position.set(l,c,h),Te.add(u),oi.push({kind:"kite",mesh:u,tower:n,sx:l,sz:h,tx:r.x,tz:r.z,phase:"out",t:0,tick:0,dmg:Ii(n,"dmg"),zone:n.def.zone*(1+.1*(n.level-1)),hover:n.def.hover}),Be.puff()}else if(n.type==="pizza"){const u=q1();u.position.set(l,n.y+1.2,h),Te.add(u);const[f,p]=Dn.dir(r.x,r.z),g=r.x+f*r.def.speed*1.1,_=r.z+p*r.def.speed*1.1;oi.push({kind:"shell",src:n,pizza:!0,mesh:u,sx:l,sy:n.y+1.2,sz:h,ex:g,ez:_,ey:jt.heightAt(g,_),t:0,dur:1.3,arc:7,dmg:Ii(n,"dmg"),splash:n.def.splash*(1+.1*(n.level-1))}),n.mesh.userData.arm.rotation.x=.9,n.armBack=.5,Be.mortar()}else if(n.type==="lamp"){for(const u of Ln)!u.alive||Math.hypot(u.x-n.x,u.z-n.z)>s||(u.slow=Math.max(u.slow,n.def.slowTime),_s(u,Ii(n,"dmg"),n));Math.random()<.3&&Ne.emit(n.x,n.y+1.6,n.z,{n:2,color:"#ff9a3a",speed:.8,up:1.2,life:.8,gravity:-.3})}}}function nM(i){var t;for(let e=oi.length-1;e>=0;e--){const n=oi[e];let s=!1;if(n.kind==="bolt"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y+(n.target.def.flying?0:.5),n.tz=n.target.z);const r=n.mesh.position,a=n.tx-r.x,o=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(a,o,l),h=18*i;n.age+=i,n.mesh.lookAt(n.tx,n.ty,n.tz),n.mesh.scale.setScalar(.7+n.age*2.2),c<=h+.3?(s=!0,n.target.alive&&(_s(n.target,n.dmg,n.src),Ps.emit(n.tx,n.ty+.3,n.tz,{n:3,color:"#f4f0ea",speed:1,up:.8,life:.8,gravity:-.6}),Be.hit())):r.set(r.x+a/c*h,r.y+o/c*h,r.z+l/c*h)}else if(n.kind==="shell"){n.t+=i/n.dur;const r=Math.min(1,n.t);if(n.mesh.position.set(n.sx+(n.ex-n.sx)*r,n.sy+(n.ey-n.sy)*r+Math.sin(Math.PI*r)*(n.arc||5),n.sz+(n.ez-n.sz)*r),n.mesh.rotation.set(r*9,r*5,0),n.t>=1){s=!0;for(const a of Ln){if(!a.alive||a.def.flying)continue;const o=Math.hypot(a.x-n.ex,a.z-n.ez);o<n.splash&&_s(a,n.dmg*(o<n.splash*.4?1:.6),n.src)}Ne.emit(n.ex,n.ey+.3,n.ez,{n:26,color:n.pizza?"#ff7040":"#ffd060",speed:5,up:5,life:.7,gravity:12}),Ps.emit(n.ex,n.ey+.3,n.ez,{n:4,color:"#f6e7c0",speed:1.5,up:1,life:.8,gravity:-.3}),Be.crunch(),jn=Math.max(jn,.12)}}else if(n.kind==="bubble"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y,n.tz=n.target.z);const r=n.mesh.position,a=n.tx-r.x,o=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(a,o,l),h=13*i;n.mesh.scale.setScalar(1+Math.sin(J.time*12)*.06),c<=h+.3?(s=!0,n.target.alive&&(_s(n.target,n.dmg,n.src),n.target.trap=Math.max(n.target.trap||0,n.trap*Math.min(1,((t=n.target.def.resist)==null?void 0:t.bubble)??1))),Ne.emit(n.tx,n.ty,n.tz,{n:6,color:"#dff6ff",speed:2,up:1,life:.35})):r.set(r.x+a/c*h,r.y+o/c*h,r.z+l/c*h)}else if(n.kind==="kite"){n.t+=i;const r=n.mesh.position;if(n.mesh.userData.tailSegs.forEach((a,o)=>{a.rotation.x=Math.sin(J.time*5-o*.9)*.35,a.rotation.z=Math.sin(J.time*3.7-o*.7)*.25}),In.includes(n.tower)||(n.phase="back"),n.phase==="out"){const a=n.tx-r.x,o=n.tz-r.z,l=Math.hypot(a,o),c=9*i;r.y+=(4.2-r.y)*Math.min(1,i*2),l<c?(n.phase="hover",n.t=0):(r.x+=a/l*c,r.z+=o/l*c)}else if(n.phase==="hover"){if(r.x=n.tx+Math.sin(J.time*1.7)*.6,r.z=n.tz+Math.cos(J.time*1.3)*.4,r.y=4.2+Math.sin(J.time*2.3)*.3,n.tick-=i,n.tick<=0){n.tick=.25;for(const a of Ln)a.alive&&a.def.flying&&Math.hypot(a.x-r.x,a.z-r.z)<n.zone&&(_s(a,n.dmg*.4,n.tower),a.slow=Math.max(a.slow,.4));Ne.emit(r.x,r.y-.3,r.z,{n:2,color:"#ffd0b0",speed:1.5,up:-.5,life:.5,gravity:0})}n.t>n.hover&&(n.phase="back")}else{const a=n.sx-r.x,o=n.sz-r.z,l=Math.hypot(a,o),c=11*i;l<c?s=!0:(r.x+=a/l*c,r.z+=o/l*c)}n.mesh.rotation.set(Math.sin(J.time*3)*.2,J.time*.5,Math.cos(J.time*2.5)*.25)}s&&(Te.remove(n.mesh),oi.splice(e,1))}for(let e=cr.length-1;e>=0;e--){const n=cr[e];n.t+=i/(n.dur||.6),n.mesh.scale.setScalar(.5+n.t*n.r),n.mesh.material.opacity=.7*(1-n.t),n.t>=1&&(Te.remove(n.mesh),n.mesh.material.dispose(),cr.splice(e,1))}}function iM(i){var t,e;for(const n of Ln){if(!n.alive)continue;n.phase+=i*n.def.anim;const s=n.slow>0?.5:1;n.slow-=i;let r=n.def.speed*s*(n.speedMul||1);n.trap>0?(n.trap-=i,r*=.15,n.bubbleFx||(n.bubbleFx=jf(),n.bubbleFx.scale.setScalar(3.2),n.mesh.add(n.bubbleFx)),n.bubbleFx.visible=!0):n.bubbleFx&&(n.bubbleFx.visible=!1);const a=n.mesh.userData.body;if(n.def.flying){const l=jt.lighthouse.pos;let c=l.x-n.x,h=l.z-n.z;const u=Math.hypot(L.x-n.x,L.z-n.z);let f=n.trap>0?1.1:n.def.alt||4.2;if(n.def.swoop&&u<6&&L.stun<=0&&n.hitCd<=0&&!(n.trap>0)){const y=Math.hypot(c,h);c=c/y*.5+(L.x-n.x)/u*.9,h=h/y*.5+(L.z-n.z)/u*.9,f=1.5}n.hitCd-=i;const p=Math.hypot(c,h)||1,g=Math.cos(J.time*1.3+n.lane*4)*(n.type==="balloon"?.4:1.2);n.x+=(c/p+-h/p*g*.35)*r*i,n.z+=(h/p+c/p*g*.35)*r*i,n.mesh.rotation.z=-g*(n.type==="balloon"?.05:.25);const _=Math.max(jt.heightAt(n.x,n.z),0);n.y+=(_+f-n.y)*Math.min(1,i*2.5);const m=n.mesh.userData.blob;m&&(m.position.y=(_-n.y)/n.var+.05,m.material.opacity=1,m.scale.setScalar(1)),n.mesh.rotation.y=Math.atan2(-c,-h);const d=n.mesh.userData;if((t=d.wings)==null||t.forEach((y,b)=>y.rotation.z=Math.sin(n.phase)*.45*(b?-1:1)),(e=d.rotors)==null||e.forEach(y=>y.rotation.y+=i*40),d.rotor&&(d.rotor.rotation.y+=i*30,d.tail.rotation.x+=i*30),a.position.y=Math.sin(n.phase*.5)*(n.type==="balloon"?.3:.15),n.def.blind&&(n.blindCd=(n.blindCd??n.def.blind.every*.5)-i,d.beam&&(d.beam.visible=n.blindCd>n.def.blind.every-.8),n.blindCd<=0)){n.blindCd=n.def.blind.every;const y=oa(In,n.x,n.z,n.def.blind.range);y&&(y.blind=n.def.blind.dur,on(`${n.def.name} blendet ${y.def.name}!`)),Math.hypot(L.x-n.x,L.z-n.z)<5&&yc(ee.airStress,n.x,n.z,!0)}n.def.swoop&&u<1.3&&Math.abs(n.y-Ke.position.y-1)<1.4&&L.stun<=0&&n.hitCd<=0&&aM(n),Math.hypot(l.x-n.x,l.z-n.z)<3.4&&Gh(n)}else{const[l,c,h]=Dn.dir(n.x,n.z);n.remain=h;const u=jt.lighthouse.pos,f=Math.hypot(u.x-n.x,u.z-n.z);if(f<4.3||h<.6){Gh(n);continue}let p=l,g=c;!p&&!g&&(p=(u.x-n.x)/f,g=(u.z-n.z)/f),n.hx=(n.hx||0)+(p-(n.hx||0))*Math.min(1,i*6),n.hz=(n.hz||0)+(g-(n.hz||0))*Math.min(1,i*6);const _=Math.hypot(n.hx,n.hz)||1,m=n.lane*Math.min(1,f/10);if(n.x+=n.hx/_*r*i+-n.hz/_*m*i*.5,n.z+=n.hz/_*r*i+n.hx/_*m*i*.5,n.y=jt.heightAt(n.x,n.z),n.mesh.rotation.y=Math.atan2(-n.hx,-n.hz),L.inv<=0&&L.faint<=0&&Math.abs(L.x-n.x)<1.2&&Math.abs(L.z-n.z)<1.2&&Math.hypot(L.x-n.x,L.z-n.z)<1.1&&yc(n.def.stress??10,n.x,n.z),n.type==="clerk")a.position.y=Math.abs(Math.sin(n.phase))*.12,a.rotation.z=Math.sin(n.phase)*.06,n.mesh.userData.arm.position.y=.9+Math.max(0,Math.sin(n.phase*.5))*.25;else if(n.type==="tank"){const d=Math.abs(Math.sin(n.phase));a.position.y=d*.05,a.rotation.z=Math.sin(n.phase)*.07;const y=Math.pow(1-d,6);a.scale.set(1+y*.06,1-y*.08,1+y*.06)}else n.type==="swarm"?(a.position.y=Math.abs(Math.sin(n.phase))*.14,a.rotation.y=Math.sin(n.phase*.5)*.3):n.type==="complainer"?(a.position.y=Math.abs(Math.sin(n.phase))*.16,n.mesh.userData.arm.rotation.z=Math.sin(n.phase*.5)*.4):n.type==="lobbyist"||n.type==="lobbyMini"?(a.position.y=Math.abs(Math.sin(n.phase))*.05,a.rotation.z=Math.sin(n.phase*.5)*.17):n.type==="auditor"?(a.position.y=Math.abs(Math.sin(n.phase))*.03,a.rotation.z=0):(a.position.y=Math.abs(Math.sin(n.phase))*.08,a.rotation.z=Math.sin(n.phase)*.05)}if(n.hitT>0){n.hitT-=i;const l=Math.max(0,n.hitT)/.18;a.scale.set(1+l*.16,1-l*.16,1+l*.16),a.position.z=l*.15,n.hitT<=0&&(a.scale.set(1,1,1),a.position.z=0)}n.blinkT-=i,n.blinkT<-.12&&(n.blinkT=2+Math.random()*3.5);for(const l of n.mesh.userData.eyes)l.scale.y=n.blinkT<0?.12:1;n.mesh.position.set(n.x,n.y,n.z),n.slow>0&&Math.random()<i*6&&Ne.emit(n.x,n.y+.8,n.z,{n:1,color:"#b8e6ff",speed:.4,up:.6,life:.6,gravity:-.5});const o=n.mesh.userData.hpBar;if(o.visible){o.quaternion.copy(Ye.quaternion),o.quaternion.premultiply(n.mesh.quaternion.clone().invert());const l=Math.max(0,n.hp/n.maxHp),c=n.mesh.userData.hpFg;c.scale.x=.96*l,c.position.x=-.48*(1-l),c.material.color.setHSL(.33*(1-l),.7,.55)}}for(let n=Ln.length-1;n>=0;n--)Ln[n].alive||Ln.splice(n,1)}function Gh(i){J.leaks[i.type]=(J.leaks[i.type]||0)+1,i.alive=!1,Te.remove(i.mesh),J.lights=Math.max(0,J.lights-1),jt.lighthouse.setLights(J.lights),Xn(an.lights,"lights",J.lights,"bad");const t=jt.lighthouse.flamePos();Ps.emit(t.x,t.y,t.z,{n:10,color:"#b8b4b0",speed:.8,up:1.6,life:1.8,gravity:-.4}),Ne.emit(t.x,t.y,t.z,{n:14,color:"#8a8580",speed:1.6,up:.6,life:1.6,gravity:4}),on(`${i.def.name} slukket litt glød!`),Be.lose(),jn=.3,J.lights<=0&&md(!1)}const ur=[],hi=document.createElement("div");hi.id="chillbar";hi.innerHTML="<i></i>";document.body.appendChild(hi);let Vh=0;function wo(i){const t=document.createElement("div");t.className="pop-emoji",t.textContent=i,Ae.set(L.x,Ke.position.y+2.6,L.z).project(Ye),t.style.left=`${(Ae.x*.5+.5)*innerWidth}px`,t.style.top=`${(-Ae.y*.5+.5)*innerHeight}px`,document.body.appendChild(t),setTimeout(()=>t.remove(),900)}function yc(i,t,e,n=!1){if(!(L.faint>0||L.inv>0)){if(L.chill=Math.max(0,L.chill-i),L.inv=ee.stressInvuln,L.flinch=.55,!n){const s=L.x-t,r=L.z-e,a=Math.hypot(s,r)||1;L.vx+=s/a*ee.stressPush,L.vz+=r/a*ee.stressPush,L.goal=null}Ne.emit(L.x,Ke.position.y+1.4,L.z,{n:8,color:"#ff6a5a",speed:2,up:1.5,life:.4}),wo("😓"),hi.classList.remove("hit"),hi.offsetWidth,hi.classList.add("hit"),Xn(an.chill,"chillBad",Math.random(),"bad"),L.chill<=0&&sM()}}function sM(){L.faint=ee.faintTime,L.stun=ee.faintTime,L.faints++,L.goal=null,L.vx=L.vz=0;const i=Math.floor(J.embers*ee.faintLoss);i>0&&(J.embers-=i,iu(L.x,Ke.position.y+1,L.z,i,!1,1.6)),L.carrying&&(L.carrying=!1),wo("😵"),on(`😵 Vokteren besvimte av stress! Våkner ved fyret om ${ee.faintTime} s`),Be.stun()}function fd(i,t){const e=qf();e.scale.setScalar(1.8),e.position.set(i,jt.heightAt(i,t)+.5,t),Te.add(e),ur.push({mesh:e,x:i,z:t,life:ee.bagLife})}function rM(i){L.inv-=i;const t=jt.lighthouse.pos;L.faint>0?(L.faint-=i,L.faint<=0&&(L.x=t.x+1,L.z=t.z+7.5,L.vx=L.vz=0,L.stun=0,L.chill=ee.chillMax*ee.wakeChill,L.inv=ee.stressInvuln*2,Ne.emit(L.x,jt.heightAt(L.x,L.z)+1,L.z,{n:14,color:"#9fffb0",speed:2,up:2,life:.7}))):Math.hypot(t.x-L.x,t.z-L.z)<ee.regenReach&&(L.chill=Math.min(ee.chillMax,L.chill+ee.regen*i));for(let s=ur.length-1;s>=0;s--){const r=ur[s];r.life-=i,r.mesh.rotation.y+=i*1.5,r.mesh.position.y=jt.heightAt(r.x,r.z)+.5+Math.sin(J.time*3+s)*.12,r.mesh.visible=r.life>4||Math.sin(r.life*12)>0,L.faint<=0&&Math.hypot(r.x-L.x,r.z-L.z)<1.4&&(L.chill=Math.min(ee.chillMax,L.chill+ee.bagHeal),on(`🥔 Chips! +${ee.bagHeal} chill`),wo("😌"),Be.pickup(),r.life=0),r.life<=0&&(Te.remove(r.mesh),ur.splice(s,1))}const e=Math.round(L.chill);Xn(an.chill,"chill",e),an.chill.classList.toggle("low",e<30),e!==Vh&&(Vh=e,hi.firstChild.style.width=`${100*L.chill/ee.chillMax}%`,hi.classList.toggle("low",e<30));const n=(e<ee.chillMax||L.faint>0)&&J.phase!=="title";hi.style.display=n?"block":"none",n&&(Ae.set(L.x,Ke.position.y+2.3,L.z).project(Ye),hi.style.left=`${(Ae.x*.5+.5)*innerWidth}px`,hi.style.top=`${(-Ae.y*.5+.5)*innerHeight}px`)}function aM(i){if(yc(ee.airStress,i.x,i.z,!0),L.faint>0)return;L.stun=ee.stunTime,i.hitCd=4;const t=Math.floor(J.embers*ee.stunLoss);t>0&&(J.embers-=t,iu(L.x,Ke.position.y+1,L.z,t,!1,1.6)),L.carrying&&(L.carrying=!1,on("Rullepapiret blåste bort!")),Ne.emit(L.x,Ke.position.y+1.5,L.z,{n:16,color:"#ffffff",speed:3,up:2,life:.5}),Be.stun(),jn=.2}function oM(i){for(let t=xs.length-1;t>=0;t--){const e=xs[t];e.life-=i,e.phase+=i;const n=Math.max(jt.heightAt(e.x,e.z),.1)+.35;e.settled||(e.vy-=16*i,e.x+=e.vx*i,e.z+=e.vz*i,e.y+=e.vy*i,e.y<=n&&(e.y=n,Math.abs(e.vy)>2.5?(e.vy=-e.vy*.4,e.vx*=.6,e.vz*=.6):e.settled=!0));const s=Math.hypot(L.x-e.x,L.z-e.z);if(L.stun<=0&&s<ee.magnet){const l=(1-s/ee.magnet)*14+3;e.x+=(L.x-e.x)/s*l*i,e.z+=(L.z-e.z)/s*l*i,e.settled=!0,e.y=n}const r=e.settled?Math.sin(e.phase*3)*.12:0;e.mesh.position.set(e.x,e.y+r,e.z),e.mesh.rotation.y+=i*3;const a=e.life<5,o=(.8+Math.min(e.value,6)*.08)*(a?.55+.45*(e.life/5):1);if(e.mesh.scale.setScalar(o),e.mesh.visible=!a||Math.sin(e.life*(e.life<1.5?30:16))>-.4,Math.random()<i*2.5&&Ne.emit(e.x,e.y+.2,e.z,{n:1,color:"#ffb347",speed:.3,up:1.2,life:.6,gravity:-.5}),L.stun<=0&&s<.9)J.embers+=e.value,Xn(an.embers,"embers",J.embers,"bump"),Ne.emit(e.x,e.y+.3,e.z,{n:8,color:"#ffe08a",speed:2,up:2.5,life:.4}),Be.pickup(),Te.remove(e.mesh),xs.splice(t,1);else if(e.life<=0){const l=Math.max(1,Math.round(e.value*ee.expiredRefund));J.embers+=l,Ne.emit(e.x,e.y,e.z,{n:6,color:"#555048",speed:.6,up:1,life:.8,gravity:-.6}),Te.remove(e.mesh),xs.splice(t,1)}}}let co=0,dd="";function on(i){co=2,dd=i,ki.textContent=""}function Hh(i){var I,N;const t=Ke.userData;(J.phase==="prep"||J.phase==="wave")&&rM(i),L.stun-=i,t.stars.visible=L.stun>0,t.stars.rotation.y+=i*6;let e=0,n=0;if(L.stillT=!Qt.move.x&&!Qt.move.z&&!L.goal?L.stillT+i:0,L.roll)L.goal=null;else if(L.stun<=0&&(J.phase==="prep"||J.phase==="wave")){if(Qt.move.x||Qt.move.z){L.goal=null;const P=Math.cos(zi),U=Math.sin(zi);e=Qt.move.x*P+Qt.move.z*U,n=-Qt.move.x*U+Qt.move.z*P}else if(L.goal){const P=L.goal,U=P.x-L.x,B=P.z-L.z;if(P.field===void 0){P.field=null;const $=Math.ceil(Math.hypot(U,B)/.5);for(let Q=1;Q<$;Q++)if(!jt.isWalkable(L.x+U*Q/$,L.z+B*Q/$)){P.field=Dn.walkField(P.x,P.z);break}}const H=P.field?Math.min(P.field.at(L.x,L.z),Math.hypot(U,B)+50):Math.hypot(U,B);P.t+=i;const V=H<.35||P.spot&&Math.hypot(P.spot.x-L.x,P.spot.z-L.z)<P.reach;if(H<P.best-.3&&(P.best=H,P.lastGain=P.t),V||P.t>12||P.t-P.lastGain>1.5)L.goal=null;else{const $=Math.min(1,H/.8),Q=P.field&&Math.hypot(U,B)>1.5?P.field.dir(L.x,L.z):null,st=Q&&(Q[0]||Q[1])?Q[0]:U/Math.hypot(U,B),Et=Q&&(Q[0]||Q[1])?Q[1]:B/Math.hypot(U,B);e=st,n=Et;for(const W of jt.colliders){if(P.spot&&W.x===P.spot.x&&W.z===P.spot.z)continue;const Z=W.x-L.x,ht=W.z-L.z,at=Z*st+ht*Et;if(at<=0||at>W.r+2.2||at>H)continue;const mt=-Z*Et+ht*st;if(Math.abs(mt)>W.r+.6)continue;const Dt=(1-Math.abs(mt)/(W.r+.6))*1.6*(mt>=0?1:-1);e-=-Et*Dt,n-=st*Dt}const Ot=Math.hypot(e,n)||1;e=e/Ot*$,n=n/Ot*$}}}const r=jt.heightAt(L.x,L.z)<.05,a=ee.keeperSpeed*(L.carrying?ee.carrySlow:1)*(r?ee.wadeSlow:1),o=e*a,l=n*a,c=(I=jt.isIce)!=null&&I.call(jt,L.x,L.z)?1.6:12;L.vx+=(o-L.vx)*Math.min(1,i*c),L.vz+=(l-L.vz)*Math.min(1,i*c);let h=L.x+L.vx*i,u=L.z+L.vz*i;jt.isWalkable(h,u)||(jt.isWalkable(h,L.z)?u=L.z:jt.isWalkable(L.x,u)?h=L.x:(h=L.x,u=L.z));for(const P of jt.colliders){const U=h-P.x,B=u-P.z,H=Math.hypot(U,B),V=P.r+.4;H<V&&H>1e-4&&(h=P.x+U/H*V,u=P.z+B/H*V)}L.x=h,L.z=u;const f=Math.hypot(L.vx,L.vz);if(f>.3){const P=Math.atan2(-L.vx,-L.vz);L.face+=uo(P,L.face)*Math.min(1,i*12),L.walk+=i*f*2.2}if(Ke.rotation.y=L.face,Ke.position.set(L.x,Math.max(jt.heightAt(L.x,L.z),-.25),L.z),r&&f>1&&(L.splash=(L.splash||0)-i,L.splash<=0)){L.splash=.22,Ne.emit(L.x,.15,L.z,{n:4,color:"#e8fbff",speed:1.6,up:2.2,life:.35,gravity:12});const P=Yf();P.position.set(L.x,.1,L.z),P.material.color.set("#f4fdff"),Te.add(P),cr.push({mesh:P,t:0,r:1.6,dur:.9})}const p=Math.min(1,f/3),g=Math.sin(L.walk)*p;t.legs[0].position.z=g*.2,t.legs[1].position.z=-g*.2,t.legs[0].position.y=.2+Math.max(0,g)*.12,t.legs[1].position.y=.2+Math.max(0,-g)*.12;const _=f>.6;_!==!!L.wasMoving&&(L.sq=_?1:-1,L.wasMoving=_),L.sq=(L.sq||0)*Math.exp(-i*7);const m=f<.3?Math.sin(J.time*2.2)*.025:0;t.body.scale.set(1-m*.5-L.sq*.07,1+m+L.sq*.12,1-m*.5-L.sq*.07);const d=Math.sign(Math.sin(L.walk));f>2&&!r&&d!==L.lastStep&&Ne.emit(L.x,Ke.position.y+.1,L.z,{n:2,color:"#d9c9a4",speed:.7,up:.6,life:.45,gravity:1}),L.lastStep=d,L.flinch=Math.max(0,(L.flinch||0)-i),L.cheer=Math.max(0,(L.cheer||0)-i);const y=f>.5&&((N=jt.isIce)==null?void 0:N.call(jt,L.x,L.z)),b=Math.abs(g)*.09+(L.cheer>0?Math.abs(Math.sin(L.cheer*9))*.35:0);if(L.sit=(L.sit??0)+((L.roll?1:0)-(L.sit??0))*Math.min(1,i*10),t.body.position.y=b-L.sit*.24,L.sit>.01)for(const P of t.legs)P.position.z-=L.sit*.3,P.position.y+=L.sit*.12;t.body.rotation.x=L.faint>0?0:-.35*Math.min(1,L.flinch*2.5),t.body.rotation.z=L.faint>0?1.45:L.stun>0?.5:g*.05+(y?Math.sin(J.time*7)*.12:0)+(L.flinch>0?Math.sin(L.flinch*40)*.08:0);let x=g*.6,R=-g*.45,T=0,E=0;y&&(T=-1.25+Math.sin(J.time*9)*.25,E=1.25+Math.cos(J.time*8)*.25,x=R=0),L.cheer>0&&(x=R=-2.9,T=-.3,E=.3),L.flinch>0&&(x=-2.5,T=.5);const A=L.rollP>=0&&f<.3&&L.faint<=0;if(A){const P=Math.sin(J.time*7)*.12;x=1.35+P,T=.55,R=1.35-P,E=-.55;const U=L.rollTower,B=Math.atan2(-(U.x-L.x),-(U.z-L.z));if(L.face+=uo(B,L.face)*Math.min(1,i*8),Ke.rotation.y=L.face,Kc(t.roll,L.rollP),t.roll.rotation.x=Math.sin(J.time*7)*.5,Math.random()<i*4&&L.rollP<.5){const H=t.roll.getWorldPosition(hr);Ne.emit(H.x,H.y,H.z,{n:1,color:"#5aa84a",speed:.4,up:.3,life:.5,gravity:4})}}t.roll.visible=A,t.armR.visible=A,A?t.lanternArm.position.set(.36,.72,.18):t.lanternArm.position.set(.48,1,-.1);const M=Math.min(1,i*14);t.armL.rotation.x+=(x-t.armL.rotation.x)*M,t.armL.rotation.z+=(T-t.armL.rotation.z)*M;const v=A?t.armR:t.lanternArm;A&&t.lanternArm.rotation.set(0,0,0),v.rotation.x+=(R-v.rotation.x)*M,v.rotation.z+=(E-v.rotation.z)*M,L.idle=f<.3?(L.idle||0)+i:0;const S=L.idle>2?Math.sin(J.time*.55)*.7*Math.min(1,(L.idle-2)/1.5):0;t.head.rotation.y+=(S-t.head.rotation.y)*Math.min(1,i*4),L.blink=(L.blink??2)-i,L.blink<-.12&&(L.blink=2+Math.random()*3);for(const P of t.eyes)P.scale.y=L.faint>0?.1:L.blink<0?.12:1;t.carried.visible=L.carrying,L.chargeTower?(t.carried.position.lerp(hr.set(0,.95,-.5),Math.min(1,i*14)),t.carried.rotation.y=0,t.carried.scale.setScalar(Math.max(.55,t.carried.scale.x-i*3))):(t.carried.rotation.y+=i*2,t.carried.scale.setScalar(1),t.carried.position.set(0,2.35+Math.sin(J.time*3)*.08,0)),Qc.intensity=ad*(1+Math.sin(J.time*11)*.115)}function lM(){for(const i of Qt.clicks.splice(0)){kh.setFromCamera(i,Ye);const t=kh.intersectObject(jt.terrain)[0];if(!t)continue;let e=t.point.x,n=t.point.z;const s=jt.lighthouse.pos,r=oa(jt.plinths,e,n,2.2)||(Math.hypot(s.x-e,s.z-n)<4.5?{x:s.x,z:s.z,big:!0}:null);if(r){const a=r.big?4.3:1.95;let o=L.x-r.x,l=L.z-r.z;const c=Math.hypot(o,l)||1;e=r.x+o/c*a,n=r.z+l/c*a}L.goal={x:e,z:n,t:0,best:1/0,lastGain:0,spot:r,reach:r?r.big?ee.lighthouseReach-.4:ee.reach-.25:0},Ne.emit(e,jt.heightAt(e,n)+.2,n,{n:6,color:"#fff3d0",speed:1.5,up:.5,life:.35,gravity:0})}}function Ss(i=!J.paused,t=!1){J.paused=i;const e=Qt.labels();he("pause-keys").textContent=`${e.name}: fortsett med ${e.pause} · start på nytt med ${e.restart}`,he("pad-help").classList.toggle("hidden",Qt.padSeen),he("pause").classList.toggle("hidden",!i),he("confirm").classList.toggle("hidden",!t),J.confirming=i&&t}try{sessionStorage.getItem("glod-portrait")&&document.documentElement.classList.add("portrait-ok")}catch{}he("btn-portrait").addEventListener("click",()=>{document.documentElement.classList.add("portrait-ok");try{sessionStorage.setItem("glod-portrait","1")}catch{}fa()});he("btn-resume").addEventListener("click",()=>Ss(!1));he("btn-restart").addEventListener("click",()=>Ss(!0,!0));he("btn-yes").addEventListener("click",()=>$r());he("btn-no").addEventListener("click",()=>Ss(!0,!1));he("btn-worlds").addEventListener("click",()=>{location.href=`${location.pathname}?world=${Rn}`});he("btn-lex").addEventListener("click",()=>{const i=he("lex");i.innerHTML||(i.innerHTML=Object.entries(bo).filter(([t])=>t!=="lobbyMini").map(([t,e])=>{const{tough:n,weak:s}=ud(e);return`<div class="lex-row"><b>${e.flying?"🪶":"🐾"} ${e.name}</b><small>${e.info||(e.flying?"flyr rett mot fyret":"går langs veien")}</small><span>${n?`🛡️ ${n}`:""} ${s?`💥 ${s}`:""}</span></div>`}).join("")+`<p class="lex-key">🛡️ tåler · 💥 svak mot · ${Object.entries(Mc).map(([t,e])=>`${e} ${lr[t].name}`).join(" · ")} · 📒 skjold forfra</p>`),i.classList.toggle("hidden")});function $r(){for(const i of Ni)i.el.remove();Ni.length=0;for(const i of[Ln,Yr,xs,oi,cr]){for(const t of i)t.mesh&&Te.remove(t.mesh);i.length=0}for(const i of In)Te.remove(i.mesh);In.length=0,aa.innerHTML="",oo.length=0;for(const i of jt.plinths)i.tower=null;for(let i=jt.colliders.length-1;i>=0;i--)jt.colliders[i].tower&&jt.colliders.splice(i,1);J.buildMode=!1,L.chargeTower&&ia(L.chargeTower,0),Object.assign(J,{phase:"title",wave:0,timer:0,embers:ee.startEmbers,lights:_r,spawnQueue:[],leaks:{},seen:{},waveClock:0,sel:0,paused:!1,confirming:!1}),Object.assign(L,{x:jt.lighthouse.pos.x+1,z:jt.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,charge:0,chargeTower:null,goal:null,chill:ee.chillMax,inv:0,faint:0,faints:0,roll:null,stillT:0,rollBlock:null});for(const i of ur)Te.remove(i.mesh);ur.length=0,jt.lighthouse.setLights(_r),gM(),jn=0,co=0,Hn={},Xn(an.lights,"lights",J.lights),Xn(an.embers,"embers",J.embers),Xn(an.wave,"wave",0),an.timer.textContent="",he("pause").classList.add("hidden"),he("confirm").classList.add("hidden"),he("overlay").classList.add("hidden"),Qt.clear(),J.phase="title",Eo(!0),window.__restarts=(window.__restarts||0)+1}function cM(){sd.sync();const i=Qt.device,t=!!L.roll&&i==="touch"&&!J.paused;if(he("rollpad").classList.toggle("hidden",!t),t!==Hn.rollTouch&&(Hn.rollTouch=t,Hn.device=null),t&&he("touch").classList.add("hidden"),Hn.device===i+Qt.padKind)return;Hn.device=i+Qt.padKind;const e=Qt.labels();he("touch").classList.toggle("hidden",i!=="touch"||J.phase==="title"||t),pi.querySelectorAll("button i").forEach((n,s)=>{n.textContent=i==="pad"?s===J.sel?e.build:"":i==="touch"?"":String(s+1)}),tu.textContent="Neste bølge ▶",Hn.sel=-1}const bc={still:.3,step:.25,bonus:.1},Sc=["rU","rR","rD","rL"];function pd(i){const t=Math.min(8,Math.max(4,i.level+3));return Array.from({length:t},()=>Sc[Math.floor(Math.random()*4)])}function uM(i,t){const e=i!=null&&i.upg&&!L.carrying&&!t?i:null;if(L.rollBlock&&L.rollBlock!==e&&(L.rollBlock=null),L.roll&&L.roll.tower!==e&&(L.roll=null),!L.roll&&e&&(Qt.consume("build")||Qt.consume("carry")||L.rollBlock!==e&&L.stillT>=bc.still)&&(L.roll={tower:e,seq:pd(e),i:0,shake:!1,done:0},L.goal=null,L.vx=L.vz=0),Qt.rollMode=!!L.roll,!L.roll){for(const n of[...Sc,"rollExit"])Qt.consume(n);return}if(Qt.consume("build"),Qt.consume("carry"),Qt.consume("rollExit")){L.rollBlock=L.roll.tower,L.roll=null,Qt.rollMode=!1;return}for(const n of Sc)Qt.consume(n)&&hM(n)}function hM(i){const t=L.roll,e=t.tower.upg;i===t.seq[t.i]?(t.i++,e.t=Math.min(e.dur,e.t+e.dur*bc.step/t.seq.length),Be.tick(t.i),t.i>=t.seq.length&&(e.t=Math.min(e.dur,e.t+e.dur*bc.bonus),t.seq=pd(t.tower),t.i=0,t.done++,Be.stone(),Ne.emit(L.x,Ke.position.y+2.2,L.z,{n:10,color:"#8ff0ff",speed:1.6,up:1.6,life:.6,gravity:2}))):(t.i=0,t.shake=!0,Be.deny(),Qt.rumble(150,.4))}function fM(i){if(Qt.consume("fps")&&eu.classList.toggle("hidden"),Qt.consume("music")&&xd(),cM(),J.phase==="title"){["build","carry","next","pause"].some(f=>Qt.consume(f))&&Eo(),Qt.clear();return}if(Xn(an.embers,"embers",J.embers),!(J.phase==="prep"||J.phase==="wave")){if((J.phase==="won"||J.phase==="lost")&&Qt.consume("restart")){$r();return}Qt.clear(),pi.classList.add("hidden"),Bh("");return}if(Qt.consume("restart")){J.confirming?$r():Ss(!0,!0);return}if(Qt.consume("pause")&&Ss(!J.paused),J.confirming){if(Qt.consume("build")||Qt.consume("next")){$r();return}Qt.consume("carry")&&Ss(!0,!1)}if(J.paused){Qt.clear();return}lM(),Qt.consume("next")&&J.phase==="prep"&&(J.timer=0),Qt.consume("selPrev")&&(J.sel=(J.sel+Zi.length-1)%Zi.length),Qt.consume("selNext")&&(J.sel=(J.sel+1)%Zi.length);const e=oa(jt.plinths,L.x,L.z,ee.reach,f=>!f.tower),n=oa(In,L.x,L.z,ee.reach),s=jt.lighthouse.pos,r=Math.hypot(s.x-L.x,s.z-L.z)<ee.lighthouseReach,a=L.stun>0;uM(n,a);const o=su();Qt.consume("build")&&!a&&(J.buildMode||e?lo(Zi[J.sel]):J.buildMode=!0),Zi.forEach((f,p)=>{Qt.consume("b"+(p+1))&&!a&&(J.sel=p,lo(f))});const l=(J.buildMode||!!e)&&!a&&!L.carrying;J_(l,o,Zi[J.sel]),pi.classList.toggle("hidden",!l),l&&(pi.querySelectorAll("button").forEach((f,p)=>{f.disabled=J.embers<lr[f.dataset.tower].cost,f.classList.toggle("sel",p===J.sel)}),Hn.sel!==J.sel&&Qt.device==="pad"&&(Hn.sel=J.sel,pi.querySelectorAll("button i").forEach((f,p)=>f.textContent=p===J.sel?Qt.labels().build:""))),Qt.consume("carry")&&!a&&(!L.carrying&&r?J.embers>=ee.stoneCost?(J.embers-=ee.stoneCost,L.carrying=!0,Xn(an.embers,"embers",J.embers,"bump"),Ne.emit(L.x,Ke.position.y+2.3,L.z,{n:14,color:"#8ff0ff",speed:2,up:2,life:.6,gravity:2}),Be.stone()):(Be.deny(),on(`Rullepapir koster ${ee.stoneCost} ✦`)):L.carrying&&r?(L.carrying=!1,J.embers+=ee.stoneCost,Be.stone(),on("Rullepapiret er lagt tilbake")):!L.carrying&&J.buildMode?J.buildMode=!1:L.carrying?n||on("Bær rullepapiret til et tårn"):on("Rullepapir hentes ved fyret"));const c=L.carrying&&!a&&n&&n.level<dl&&!n.upg?n:null;c!==L.chargeTower&&(L.chargeTower&&ia(L.chargeTower,0),L.chargeTower=c,L.charge=0),c&&(L.charge+=i/ee.chargeTime,ia(c,Math.min(1,L.charge)),Math.random()<i*20&&Ne.emit(L.x,Ke.position.y+2.2,L.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),L.charge>=1&&(c.upg={t:0,dur:ee.upgradeTime[c.level-1]},L.carrying=!1,L.chargeTower=null,L.charge=0,Ne.emit(c.x,c.y+1.2,c.z,{n:12,color:"#8ff0ff",speed:2,up:2,life:.6}),Be.stone(),on(`${c.def.name}: stå stille og rull – pilene går fortere`)));const h=Qt.labels();co-=i;let u="";if(co>0)u=dd;else if(a)u="Moralpanikk! Måka slo deg ut";else if(c)u="Leverer rullepapiret …";else if(L.roll)u=`Rull! Trykk pilene i rekkefølge for å rulle fortere · ${Qt.device==="pad"?`${h.carry} / hold stikka = gå`:Qt.device==="touch"?"✕ Gå = gå":"Esc / Q = gå"}`;else if(n!=null&&n.upg)u=`${n.def.name}: stå stille eller trykk ${h.build} for å rulle (${Math.ceil(n.upg.dur-n.upg.t)} s)`;else if(L.carrying&&n&&n.level>=dl)u="Tårnet er på maks nivå";else if(L.carrying)u="Bær rullepapiret til et tårn";else if(r&&!L.carrying)u=`${h.carry} = hent rullepapir (${ee.stoneCost} ✦)`;else if(r&&L.carrying)u=`${h.carry} = legg rullepapiret tilbake`;else if(n&&n.level<dl)u=`${n.def.name} nv. ${n.level} · hent rullepapir ved fyret for å oppgradere`;else if(l&&!o.ok)u=`Ikke lov her: ${o.why} · ${h.carry} = avbryt`;else if(l){const f=`${lr[Zi[J.sel]].name} (${lr[Zi[J.sel]].tip})`,p=o.plinth?" (sokkel: +25 % rekkevidde)":"";u=Qt.device==="pad"?`${h.sel} = velg tårn · ${h.build} = sett ned ${f}${p}`:Qt.device==="touch"?`Trykk på et tårn, eller Bygg = ${f}${p}`:`1 / 2 / 3 eller ${h.build} = sett ned ${f}${p}`}else J.phase==="prep"&&J.wave===0&&(u=`${h.build} = bygg et tårn der du står (sokler gir +25 % rekkevidde)`);Bh(u),k_(i)}const ws=new _e;{const i=document.createElement("canvas");i.width=64,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,64,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.5,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,256),t.globalCompositeOperation="destination-in";const n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.2,"rgba(0,0,0,0.8)"),n.addColorStop(.65,"rgba(0,0,0,0.3)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,256);const s=new mi(i);for(let r=0;r<6;r++){const a=new le(new Jn(1,1),new Le({map:s,color:"#ffdcae",transparent:!0,opacity:.05,blending:gi,depthWrite:!1,depthTest:!1,fog:!1}));a.scale.set(3.5+r%3*2.4,34,1),a.position.set(-22+r*8.5,9,-4+r%2*6),a.rotation.set(-.95,0,.55),a.userData.phase=r*1.3,ws.add(a)}}ws.visible=sn.id==="tak";ws.renderOrder=50;Te.add(ws);function dM(i){ws.position.set(An.x,0,An.z),ws.rotation.y=zi,ws.children.forEach(t=>t.material.opacity=.06+.035*Math.sin(i*.35+t.userData.phase))}let jn=0;const Ae=new G,hr=new G,tr=new G,qa=new G,pl=new G,An=new G(L.x,0,L.z);function pM(i){An.x+=(L.x-An.x)*Math.min(1,i*4),An.z+=(L.z-An.z)*Math.min(1,i*4),An.y=Ke.position.y;const t=Gi?1.15:1,e=Qt.zoom*t,n=Ye.aspect<1.2?1.25:1;zi+=Qt.look;const s=6.6*e*n;Ye.position.set(An.x+Math.sin(zi)*s,An.y+12.5*e*n,An.z+Math.cos(zi)*s),jn=Math.max(0,jn-i),jn>0&&(Ye.position.x+=(Math.random()-.5)*jn*2,Ye.position.y+=(Math.random()-.5)*jn),Ye.lookAt(An.x-Math.sin(zi),An.y+.5,An.z-Math.cos(zi)),Ye.updateMatrixWorld();let r=0,a=0,o=0;const l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([d,y])=>{const b=Ae.set(d,y,.5).unproject(Ye),x=b.sub(Ye.position).normalize(),R=x.y<-.05?(An.y-Ye.position.y)/x.y:80;return[Ye.position.x+x.x*Math.min(R,80),Ye.position.z+x.z*Math.min(R,80)]});for(const[d,y]of l)r+=d/4,a+=y/4;for(const[d,y]of l)o=Math.max(o,Math.hypot(d-r,y-a));const c=xe.clamp(Math.ceil((o+4)/4)*4,16,80);hn.shadow.camera.right!==c&&(Object.assign(hn.shadow.camera,{left:-c,right:c,top:c,bottom:-c}),hn.shadow.camera.updateProjectionMatrix());const h=2*c/hn.shadow.mapSize.x;tr.set(Wn.sunDir[0],Wn.sunDir[1],Wn.sunDir[2]).normalize(),qa.set(0,1,0).cross(tr).normalize(),pl.copy(tr).cross(qa).normalize(),Ae.set(r,An.y,a);const u=Math.round(Ae.dot(qa)/h)*h,f=Math.round(Ae.dot(pl)/h)*h,p=Ae.dot(tr);hr.copy(qa).multiplyScalar(u).addScaledVector(pl,f).addScaledVector(tr,p),hn.target.position.copy(hr),hn.position.copy(hr).addScaledVector(tr,40),hn.shadow.camera.far=40+c+20,dM(J.time),Y_(),Ae.set(L.x,Ke.position.y+.9,L.z);const g=-Ae.clone().applyMatrix4(Ye.matrixWorldInverse).z;Ae.project(Ye);const _=innerWidth*wn.getPixelRatio(),m=innerHeight*wn.getPixelRatio();xr.uKeep.value.set((Ae.x*.5+.5)*_,(Ae.y*.5+.5)*m,g),xr.uRad.value=m*.3,V_(),H_(J.paused?0:i)}const ml=sn.eruption,gl=jt.extras.bridges??[];let kr=0,ts=null;function mM(i){if(!(!ml||!gl.length||J.phase!=="wave")){if(kr+=i,ts&&kr>=ml.closed)ts.setClosed(!1),ts=null,Dn.setBlock(()=>!1);else if(!ts&&kr>=ml.every){kr=0;const t=gl[Math.random()*gl.length|0];t.setClosed(!0),ts=t,Dn.setBlock((e,n)=>(e-t.x)**2+(n-t.z)**2<2.8*2.8),jn=Math.max(jn,.35),Be.boom(),on("🌋 Utbrudd! En bro er stengt av lava i 10 s")}}}function gM(){ts&&(ts.setClosed(!1),Dn.setBlock(()=>!1)),ts=null,kr=0}function vM(i){if(mM(i),J.phase==="prep")J.timer-=i,an.timer.textContent=`Neste bølge om ${Math.ceil(Math.max(0,J.timer))} s`,J.timer<=0&&(an.timer.textContent="",cd());else if(J.phase==="wave"){for(J.waveClock+=i;J.spawnQueue.length&&J.spawnQueue[0].t<=J.waveClock;){const t=J.spawnQueue.shift();nu(t.type,t.path)}if(an.timer.textContent=`${Ln.length+J.spawnQueue.length} monstre igjen`,!J.spawnQueue.length&&!Ln.length){if(an.timer.textContent="",J.wave>=Jc.length){md(!0);return}const t=ee.waveBonus+J.wave*ee.waveBonusPer+Math.floor(Math.min(J.embers,300)*ee.interest);J.embers+=t,Xn(an.embers,"embers",J.embers,"bump"),on(`Bølge ${J.wave} slått! +${t} ✦`),L.cheer=1.4,ld(ee.prepTime),Qe==null||Qe.setIntensity(0)}}}function md(i){J.phase=i?"won":"lost",i||Qt.rumble(500,.9),he("touch").classList.add("hidden"),he("btn-pause").classList.add("hidden"),pi.classList.add("hidden");let t="";if(Qe==null||Qe.setIntensity(0),i){Be.win();const n=na();I1(Rn),na()>n&&(t=`<p class="lead">🔓 Ny verden låst opp: <b>${Er[Rn+1].name}</b>!</p>`)}const e=he("overlay");e.querySelector(".card").innerHTML=i?`<h1>Gløden lever!</h1><p class="lead">Ti bølger med forbud, komitéer og moralpanikk er chillet ned, og ${J.lights} av 20 glødepunkter brenner fortsatt. Øya ånder ut.</p>${t}<div class="menu-row"><button id="btn-again">↺ Spill kartet igjen</button>${t?'<button id="btn-nextworld" class="alt">Neste verden ▶</button>':""}<button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`:`<h1>Gløden sluknet</h1><p class="lead">Byråkratiet vant denne gangen, i bølge ${J.wave}. Rull opp og prøv på nytt.</p><div class="menu-row"><button id="btn-again">↺ Start kartet på nytt</button><button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`,e.classList.remove("hidden"),he("btn-again").addEventListener("click",()=>$r()),he("btn-worlds2").addEventListener("click",()=>{location.href=`${location.pathname}?world=${Rn}`}),t&&he("btn-nextworld").addEventListener("click",()=>{location.href=`${location.pathname}?world=${Rn+1}`})}let Qe=null;const so=(()=>{try{return JSON.parse(localStorage.getItem("glod-music")||"{}")}catch{return{}}})(),jr=["rolig","dnb","av"],gd={rolig:"Rolig",dnb:"DnB",av:"Av"};let fi=jr.includes(so.mode)?so.mode:so.muted?"av":"rolig";tn.get("musikk")&&jr.includes(tn.get("musikk"))&&(fi=tn.get("musikk"));function vd(){try{localStorage.setItem("glod-music",JSON.stringify({vol:Qe.volume,mode:fi}))}catch{}}function xM(i){const t={};let e=null,n=0,s=so.vol??.7;return{use:a=>{const o=a==="dnb"?"dnb":"rolig";e&&e!==t[o]&&e.stop(),t[o]??(t[o]=o==="dnb"?R_(i.ctx,i.noiseBuf,sn.id):P_(i.ctx,i.noiseBuf,sn.id)),e=t[o],e.setVolume(s),e.setIntensity(n),e.setMuted(a==="av"),a==="av"?e.stop():e.start()},setIntensity(a){n=a,e==null||e.setIntensity(a)},setVolume(a){s=a,e==null||e.setVolume(a)},get volume(){return s},get muted(){return fi==="av"},get intensity(){return n},get mode(){return fi},get section(){return e==null?void 0:e.section},rms(){return e?e.rms():0},tap(a){for(const o of Object.values(t))o.tap(a)}}}function _M(){const i=Qf();Qe||!i||tn.has("nomusic")||(Qe=xM(i),Qe.use(fi),he("music-vol").value=Math.round(Qe.volume*100),he("btn-mute").textContent=`M: ${gd[fi]}`,window.__music=Qe,window.__audioCtx=i.ctx)}function xd(){Qe&&(fi=jr[(jr.indexOf(fi)+1)%jr.length],Qe.use(fi),he("btn-mute").textContent=`M: ${gd[fi]}`,vd(),on({rolig:"🎶 Musikk: rolig",dnb:"🎶 Musikk: drum & bass",av:"🎶 Musikk av"}[fi]))}for(const i of["pointerdown","keydown","touchend"])addEventListener(i,()=>{const t=Qf();t&&t.ctx.state!=="running"&&t.ctx.resume()},{passive:!0});he("music-vol").addEventListener("input",i=>{Qe&&(Qe.setVolume(i.target.value/100),vd())});he("btn-mute").addEventListener("click",i=>{i.preventDefault(),xd()});function Eo(i=!1){J.phase==="title"&&(A_(),_M(),Qe==null||Qe.setIntensity(0),i&&he("touch").classList.toggle("hidden",Qt.device!=="touch"),he("overlay").classList.add("hidden"),Gi&&Qt.device!=="pad"&&(Qt.device="touch"),Hn.device=null,he("btn-pause").classList.remove("hidden"),jt.lighthouse.setLights(J.lights),Xn(an.embers,"embers",J.embers),ld(ee.firstPrep),td&&MM())}he("btn-start").addEventListener("click",Eo);{const i=he("worlds"),t=na();if(Er.forEach((e,n)=>{const s=document.createElement("button");s.className="world"+(n===Rn?" sel":"")+(n>=t?" locked":""),s.innerHTML=`<b>${n>=t?"🔒 ":""}${e.name}</b><small>${n>=t?"Vinn forrige verden for å låse opp":e.blurb}</small>`,s.disabled=n>=t,s.addEventListener("click",()=>{n!==Rn&&(location.href=`${location.pathname}?world=${n}`)}),i.appendChild(s)}),he("btn-start").textContent=`Tenn gløden på ${sn.name}`,sn.skyDusk){const e=document.createElement("button");e.id="btn-tod",e.className="tod",e.textContent=ys==="skumring"?"🌅 Skumring (bytt til dag)":"☀️ Dag (bytt til skumring)",e.addEventListener("click",()=>{try{localStorage.setItem("glod-tid",ys==="skumring"?"dag":"skumring")}catch{}location.href=`${location.pathname}?world=${Rn}&tid=${ys==="skumring"?"dag":"skumring"}`}),he("worlds").after(e)}}he("btn-quality").addEventListener("click",()=>rd(vi==="high"?"low":"high"));addEventListener("keydown",i=>{i.code==="KeyG"&&!i.repeat&&rd(vi==="high"?"low":"high")});he("btn-quality").textContent=vi==="high"?"Høy":"Lav";he("btn-pause").classList.add("hidden");function MM(){J.embers=999;const i=jt.lighthouse.pos,t=jt.plinths.slice().sort((e,n)=>Math.hypot(e.x-i.x,e.z-i.z-4)-Math.hypot(n.x-i.x,n.z-i.z-4));["ring","chips","speaker","ring","chips","ring"].forEach((e,n)=>{const s=t[n];L.x=s.x+1.9,L.z=s.z,lo(e),n<3&&(In[In.length-1].level=n+1,Xf(In[In.length-1],n+1))}),L.x=i.x+1,L.z=i.z+6,L.carrying=!0,J.wave=Number(tn.get("demo"))||4,J.wave-=1,cd(),J.waveClock=6,J.embers=142}const yM=new If;let vl=0,Ya=0,$a=0;window.__fpsSamples=[];window.__game={S:J,monsters:Ln,towers:In,embers:xs,world:jt,K:L,renderer:wn,camera:Ye,input:Qt,buildSpot:()=>su(),build:i=>lo(i),renderOnce:()=>ha.render(0),outlineCats:Uf,spawnMonster:nu,projectiles:oi,damage:_s,dropBag:(i,t)=>fd(i,t),ghost:Fi,get camYaw(){return zi}};window.__errors=[];addEventListener("error",i=>window.__errors.push(String(i.message)));addEventListener("unhandledrejection",i=>window.__errors.push(String(i.reason)));function _d(){requestAnimationFrame(_d);const i=yM.getDelta(),t=Math.min(i,.05);J.paused||(J.time+=t),Qt.update(t),J.paused||(jt.update(J.time),z_.update(J.time));for(let e=0;e<I_&&!J.paused&&(J.phase==="prep"||J.phase==="wave");e++)e>0&&(J.time+=t,Hh(t)),vM(t),iM(t),eM(t),nM(t),oM(t),j_(t);if(J.paused||Hh(t),fM(t),!J.paused){if(Ne.update(t),Math.random()<t*(4+10*(J.lights/_r))){const e=jt.lighthouse.tip;Ps.emit(e.x,e.y,e.z,{n:1,color:"#e8e2dc",speed:.5,up:1.6,life:3.2,gravity:-.15})}Ps.update(t)}if(pM(t),wn.info.reset(),ha.render(t),vl++,Ya+=i,Ya>=.5){const e=vl/Ya;window.__fpsSamples.push(e),window.__fpsSamples.length>240&&window.__fpsSamples.shift(),eu.textContent=`${e.toFixed(0)} fps · ${wn.info.render.calls} dc`,$a=e<(Gi?28:45)?$a+1:0,$a>=6&&Qi>1&&(Qi=Math.max(1,Qi-.25),wn.setPixelRatio(Qi),fa(),$a=0,window.__dprDrops=(window.__dprDrops||0)+1,tn.has("debug")&&console.info(`[fps] ${e.toFixed(0)} fps over tid → dpr senket til ${Qi}`)),vl=0,Ya=0}}_d();td&&tn.has("autostart")&&Eo();function uo(i,t){let e=i-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}
