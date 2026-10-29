(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bc="170",Md=0,iu=1,yd=2,Vh=1,Hh=2,Ui=3,is=0,Pn=1,Ke=2,pn=0,es=1,mi=2,su=3,ru=4,Wh=5,oi=100,bd=101,Sd=102,wd=103,Ed=104,zr=200,Td=201,Ad=202,Cd=203,xl=204,_l=205,Ml=206,Rd=207,yl=208,Pd=209,Dd=210,Ld=211,Id=212,Ud=213,Nd=214,bl=0,Sl=1,wl=2,fr=3,El=4,Tl=5,Al=6,Cl=7,Sc=0,zd=1,Fd=2,ns=0,Xh=1,qh=2,Yh=3,wc=4,Od=5,$h=6,jh=7,Zh=300,dr=301,pr=302,Rl=303,Pl=304,ho=306,bi=1e3,gs=1001,Dl=1002,vn=1003,kd=1004,da=1005,Mi=1006,Co=1007,vs=1008,Si=1009,Kh=1010,Jh=1011,Zr=1012,Ec=1013,Es=1014,fi=1015,Zn=1016,Tc=1017,Ac=1018,Ts=1020,Qh=35902,tf=1021,ef=1022,jn=1023,nf=1024,sf=1025,sr=1026,As=1027,fo=1028,Cc=1029,rf=1030,Rc=1031,Pc=1033,ja=33776,Za=33777,Ka=33778,Ja=33779,Ll=35840,Il=35841,Ul=35842,Nl=35843,zl=36196,Fl=37492,Ol=37496,kl=37808,Bl=37809,Gl=37810,Vl=37811,Hl=37812,Wl=37813,Xl=37814,ql=37815,Yl=37816,$l=37817,jl=37818,Zl=37819,Kl=37820,Jl=37821,Qa=36492,Ql=36494,tc=36495,af=36283,ec=36284,nc=36285,ic=36286,Bd=3200,Gd=3201,Dc=0,Vd=1,Ki="",mn="srgb",yr="srgb-linear",po="linear",Oe="srgb",Fs=7680,au=519,Hd=512,Wd=513,Xd=514,of=515,qd=516,Yd=517,$d=518,jd=519,ou=35044,lu=35048,cu="300 es",Oi=2e3,ro=2001;class br{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uu=1234567;const Br=Math.PI/180,Kr=180/Math.PI;function Ds(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function fn(i,t,e){return Math.max(t,Math.min(e,i))}function Lc(i,t){return(i%t+t)%t}function Zd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Kd(i,t,e){return i!==t?(e-i)/(t-i):0}function Gr(i,t,e){return(1-e)*i+e*t}function Jd(i,t,e,n){return Gr(i,t,1-Math.exp(-e*n))}function Qd(i,t=1){return t-Math.abs(Lc(i,t*2)-t)}function tp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ep(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function np(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ip(i,t){return i+Math.random()*(t-i)}function sp(i){return i*(.5-Math.random())}function rp(i){i!==void 0&&(uu=i);let t=uu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ap(i){return i*Br}function op(i){return i*Kr}function lp(i){return(i&i-1)===0&&i!==0}function cp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function up(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hp(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function er(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function En(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const xe={DEG2RAD:Br,RAD2DEG:Kr,generateUUID:Ds,clamp:fn,euclideanModulo:Lc,mapLinear:Zd,inverseLerp:Kd,lerp:Gr,damp:Jd,pingpong:Qd,smoothstep:tp,smootherstep:ep,randInt:np,randFloat:ip,randFloatSpread:sp,seededRandom:rp,degToRad:ap,radToDeg:op,isPowerOfTwo:lp,ceilPowerOfTwo:cp,floorPowerOfTwo:up,setQuaternionFromProperEuler:hp,normalize:En,denormalize:er};class Et{constructor(t=0,e=0){Et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Me{constructor(t,e,n,s,r,a,o,l,c){Me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],M=s[0],m=s[3],d=s[6],y=s[1],b=s[4],x=s[7],R=s[2],T=s[5],E=s[8];return r[0]=a*M+o*y+l*R,r[3]=a*m+o*b+l*T,r[6]=a*d+o*x+l*E,r[1]=c*M+h*y+u*R,r[4]=c*m+h*b+u*T,r[7]=c*d+h*x+u*E,r[2]=f*M+p*y+g*R,r[5]=f*m+p*b+g*T,r[8]=f*d+p*x+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=u*M,t[1]=(s*c-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=f*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=p*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ro.makeScale(t,e)),this}rotate(t){return this.premultiply(Ro.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ro.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ro=new Me;function lf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fp(){const i=ao("canvas");return i.style.display="block",i}const hu={};function Fr(i){i in hu||(hu[i]=!0,console.warn(i))}function dp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function pp(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function mp(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const De={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Oe&&(i.r=Bi(i.r),i.g=Bi(i.g),i.b=Bi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Oe&&(i.r=rr(i.r),i.g=rr(i.g),i.b=rr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ki?po:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const fu=[.64,.33,.3,.6,.15,.06],du=[.2126,.7152,.0722],pu=[.3127,.329],mu=new Me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gu=new Me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);De.define({[yr]:{primaries:fu,whitePoint:pu,transfer:po,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:du,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:fu,whitePoint:pu,transfer:Oe,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:du,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}});let Os;class gp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Os===void 0&&(Os=ao("canvas")),Os.width=t.width,Os.height=t.height;const n=Os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ao("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bi(e[n]/255)*255):e[n]=Bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vp=0;class cf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Ds(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Po(s[a].image)):r.push(Po(s[a]))}else r=Po(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xp=0;class Sn extends br{constructor(t=Sn.DEFAULT_IMAGE,e=Sn.DEFAULT_MAPPING,n=gs,s=gs,r=Mi,a=vs,o=jn,l=Si,c=Sn.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Ds(),this.name="",this.source=new cf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bi:t.x=t.x-Math.floor(t.x);break;case gs:t.x=t.x<0?0:1;break;case Dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bi:t.y=t.y-Math.floor(t.y);break;case gs:t.y=t.y<0?0:1;break;case Dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Zh;Sn.DEFAULT_ANISOTROPY=1;class Be{constructor(t=0,e=0,n=0,s=1){Be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],M=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,x=(p+1)/2,R=(d+1)/2,T=(h+f)/4,E=(u+M)/4,A=(g+m)/4;return b>x&&b>R?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=E/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=A/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=E/r,s=A/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-M)*(u-M)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-M)/y,this.z=(f-h)/y,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _p extends br{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new cf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends _p{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class uf extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mp extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class la{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],M=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=M;return}if(u!==M||l!==f||c!==p||h!==g){let m=1-o;const d=l*f+c*p+h*g+u*M,y=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const R=Math.sqrt(b),T=Math.atan2(R,d*y);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}const x=o*y;if(l=l*m+f*x,c=c*m+p*x,h=h*m+g*x,u=u*m+M*x,m===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-o*p,t[e+2]=c*g+h*p+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,n=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Do.copy(this).projectOnVector(t),this.sub(Do)}reflect(t){return this.sub(Do.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new G,vu=new la;class Ls{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ii):ii.fromBufferAttribute(r,a),ii.applyMatrix4(t.matrixWorld),this.expandByPoint(ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(t.matrixWorld),this.union(pa)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ii),ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cr),ma.subVectors(this.max,Cr),ks.subVectors(t.a,Cr),Bs.subVectors(t.b,Cr),Gs.subVectors(t.c,Cr),Hi.subVectors(Bs,ks),Wi.subVectors(Gs,Bs),rs.subVectors(ks,Gs);let e=[0,-Hi.z,Hi.y,0,-Wi.z,Wi.y,0,-rs.z,rs.y,Hi.z,0,-Hi.x,Wi.z,0,-Wi.x,rs.z,0,-rs.x,-Hi.y,Hi.x,0,-Wi.y,Wi.x,0,-rs.y,rs.x,0];return!Lo(e,ks,Bs,Gs,ma)||(e=[1,0,0,0,1,0,0,0,1],!Lo(e,ks,Bs,Gs,ma))?!1:(ga.crossVectors(Hi,Wi),e=[ga.x,ga.y,ga.z],Lo(e,ks,Bs,Gs,ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ai=[new G,new G,new G,new G,new G,new G,new G,new G],ii=new G,pa=new Ls,ks=new G,Bs=new G,Gs=new G,Hi=new G,Wi=new G,rs=new G,Cr=new G,ma=new G,ga=new G,as=new G;function Lo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){as.fromArray(i,r);const o=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),l=t.dot(as),c=e.dot(as),h=n.dot(as);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const yp=new Ls,Rr=new G,Io=new G;class Sr{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):yp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rr.subVectors(t,this.center);const e=Rr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Rr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rr.copy(t.center).add(Io)),this.expandByPoint(Rr.copy(t.center).sub(Io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new G,Uo=new G,va=new G,Xi=new G,No=new G,xa=new G,zo=new G;class Ic{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Uo.copy(t).add(e).multiplyScalar(.5),va.copy(e).sub(t).normalize(),Xi.copy(this.origin).sub(Uo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(va),o=Xi.dot(this.direction),l=-Xi.dot(va),c=Xi.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const M=1/h;u*=M,f*=M,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Uo).addScaledVector(va,f),p}intersectSphere(t,e){Ci.subVectors(t.center,this.origin);const n=Ci.dot(this.direction),s=Ci.dot(Ci)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,n,s,r){No.subVectors(e,t),xa.subVectors(n,t),zo.crossVectors(No,xa);let a=this.direction.dot(zo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xi.subVectors(this.origin,t);const l=o*this.direction.dot(xa.crossVectors(Xi,xa));if(l<0)return null;const c=o*this.direction.dot(No.cross(Xi));if(c<0||l+c>a)return null;const h=-o*Xi.dot(zo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(t,e,n,s,r,a,o,l,c,h,u,f,p,g,M,m){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,p,g,M,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,p,g,M,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=M,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Vs.setFromMatrixColumn(t,0).length(),r=1/Vs.setFromMatrixColumn(t,1).length(),a=1/Vs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,p=a*u,g=o*h,M=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-M*c,e[9]=-o*l,e[2]=M-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,g=c*h,M=c*u;e[0]=f+M*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=M+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,g=c*h,M=c*u;e[0]=f-M*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=M-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,p=a*u,g=o*h,M=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+M,e[1]=l*u,e[5]=M*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=M-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-M*u}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+M,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=M*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bp,t,Sp)}lookAt(t,e,n){const s=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),qi.crossVectors(n,Fn),qi.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),qi.crossVectors(n,Fn)),qi.normalize(),_a.crossVectors(Fn,qi),s[0]=qi.x,s[4]=_a.x,s[8]=Fn.x,s[1]=qi.y,s[5]=_a.y,s[9]=Fn.y,s[2]=qi.z,s[6]=_a.z,s[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],M=n[6],m=n[10],d=n[14],y=n[3],b=n[7],x=n[11],R=n[15],T=s[0],E=s[4],A=s[8],v=s[12],_=s[1],w=s[5],L=s[9],O=s[13],D=s[2],z=s[6],k=s[10],W=s[14],V=s[3],$=s[7],J=s[11],at=s[15];return r[0]=a*T+o*_+l*D+c*V,r[4]=a*E+o*w+l*z+c*$,r[8]=a*A+o*L+l*k+c*J,r[12]=a*v+o*O+l*W+c*at,r[1]=h*T+u*_+f*D+p*V,r[5]=h*E+u*w+f*z+p*$,r[9]=h*A+u*L+f*k+p*J,r[13]=h*v+u*O+f*W+p*at,r[2]=g*T+M*_+m*D+d*V,r[6]=g*E+M*w+m*z+d*$,r[10]=g*A+M*L+m*k+d*J,r[14]=g*v+M*O+m*W+d*at,r[3]=y*T+b*_+x*D+R*V,r[7]=y*E+b*w+x*z+R*$,r[11]=y*A+b*L+x*k+R*J,r[15]=y*v+b*O+x*W+R*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],M=t[7],m=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*p-n*l*p)+M*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],M=t[13],m=t[14],d=t[15],y=u*m*c-M*f*c+M*l*p-o*m*p-u*l*d+o*f*d,b=g*f*c-h*m*c-g*l*p+a*m*p+h*l*d-a*f*d,x=h*M*c-g*u*c+g*o*p-a*M*p-h*o*d+a*u*d,R=g*u*l-h*M*l-g*o*f+a*M*f+h*o*m-a*u*m,T=e*y+n*b+s*x+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=y*E,t[1]=(M*f*r-u*m*r-M*s*p+n*m*p+u*s*d-n*f*d)*E,t[2]=(o*m*r-M*l*r+M*s*c-n*m*c-o*s*d+n*l*d)*E,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*p-n*l*p)*E,t[4]=b*E,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*E,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*d-e*l*d)*E,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*p+e*l*p)*E,t[8]=x*E,t[9]=(g*u*r-h*M*r-g*n*p+e*M*p+h*n*d-e*u*d)*E,t[10]=(a*M*r-g*o*r+g*n*c-e*M*c-a*n*d+e*o*d)*E,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*E,t[12]=R*E,t[13]=(h*M*s-g*u*s+g*n*f-e*M*f-h*n*m+e*u*m)*E,t[14]=(g*o*s-a*M*s-g*n*l+e*M*l+a*n*m-e*o*m)*E,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,g=r*u,M=a*h,m=a*u,d=o*u,y=l*c,b=l*h,x=l*u,R=n.x,T=n.y,E=n.z;return s[0]=(1-(M+d))*R,s[1]=(p+x)*R,s[2]=(g-b)*R,s[3]=0,s[4]=(p-x)*T,s[5]=(1-(f+d))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+b)*E,s[9]=(m-y)*E,s[10]=(1-(f+M))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Vs.set(s[0],s[1],s[2]).length();const a=Vs.set(s[4],s[5],s[6]).length(),o=Vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],si.copy(this);const c=1/r,h=1/a,u=1/o;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=h,si.elements[5]*=h,si.elements[6]*=h,si.elements[8]*=u,si.elements[9]*=u,si.elements[10]*=u,e.setFromRotationMatrix(si),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Oi){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(o===Oi)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ro)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Oi){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,p=(n+s)*h;let g,M;if(o===Oi)g=(a+r)*u,M=-2*u;else if(o===ro)g=r*u,M=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Vs=new G,si=new Ie,bp=new G(0,0,0),Sp=new G(1,1,1),qi=new G,_a=new G,Fn=new G,xu=new Ie,_u=new la;class wi{constructor(t=0,e=0,n=0,s=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(fn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-fn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _u.setFromEuler(this),this.setFromQuaternion(_u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class Uc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wp=0;const Mu=new G,Hs=new la,Ri=new Ie,Ma=new G,Pr=new G,Ep=new G,Tp=new la,yu=new G(1,0,0),bu=new G(0,1,0),Su=new G(0,0,1),wu={type:"added"},Ap={type:"removed"},Ws={type:"childadded",child:null},Fo={type:"childremoved",child:null};class Ve extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new G,e=new wi,n=new la,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Me}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(yu,t)}rotateY(t){return this.rotateOnAxis(bu,t)}rotateZ(t){return this.rotateOnAxis(Su,t)}translateOnAxis(t,e){return Mu.copy(t).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yu,t)}translateY(t){return this.translateOnAxis(bu,t)}translateZ(t){return this.translateOnAxis(Su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ma.copy(t):Ma.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Pr,Ma,this.up):Ri.lookAt(Ma,Pr,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(Ri),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wu),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ap),Fo.child=t,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wu),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,t,Ep),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,Tp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ve.DEFAULT_UP=new G(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new G,Pi=new G,Oo=new G,Di=new G,Xs=new G,qs=new G,Eu=new G,ko=new G,Bo=new G,Go=new G,Vo=new Be,Ho=new Be,Wo=new Be;class li{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ri.subVectors(t,e),s.cross(ri);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ri.subVectors(s,e),Pi.subVectors(n,e),Oo.subVectors(t,e);const a=ri.dot(ri),o=ri.dot(Pi),l=ri.dot(Oo),c=Pi.dot(Pi),h=Pi.dot(Oo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(a,Di.y),l.addScaledVector(o,Di.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Vo.setScalar(0),Ho.setScalar(0),Wo.setScalar(0),Vo.fromBufferAttribute(t,e),Ho.fromBufferAttribute(t,n),Wo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Vo,r.x),a.addScaledVector(Ho,r.y),a.addScaledVector(Wo,r.z),a}static isFrontFacing(t,e,n,s){return ri.subVectors(n,e),Pi.subVectors(t,e),ri.cross(Pi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ri.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ri.cross(Pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return li.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return li.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Xs.subVectors(s,n),qs.subVectors(r,n),ko.subVectors(t,n);const l=Xs.dot(ko),c=qs.dot(ko);if(l<=0&&c<=0)return e.copy(n);Bo.subVectors(t,s);const h=Xs.dot(Bo),u=qs.dot(Bo);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Xs,a);Go.subVectors(t,r);const p=Xs.dot(Go),g=qs.dot(Go);if(g>=0&&p<=g)return e.copy(r);const M=p*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(qs,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Eu.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Eu,o);const d=1/(m+M+f);return a=M*d,o=f*d,e.copy(n).addScaledVector(Xs,a).addScaledVector(qs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},ya={h:0,s:0,l:0};function Xo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Pt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=De.workingColorSpace){return this.r=t,this.g=e,this.b=n,De.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=De.workingColorSpace){if(t=Lc(t,1),e=fn(e,0,1),n=fn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Xo(a,r,t+1/3),this.g=Xo(a,r,t),this.b=Xo(a,r,t-1/3)}return De.toWorkingColorSpace(this,s),this}setStyle(t,e=mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){const n=hf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return De.fromWorkingColorSpace(bn.copy(this),t),Math.round(fn(bn.r*255,0,255))*65536+Math.round(fn(bn.g*255,0,255))*256+Math.round(fn(bn.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=De.workingColorSpace){De.fromWorkingColorSpace(bn.copy(this),e);const n=bn.r,s=bn.g,r=bn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=De.workingColorSpace){return De.fromWorkingColorSpace(bn.copy(this),e),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=mn){De.fromWorkingColorSpace(bn.copy(this),t);const e=bn.r,n=bn.g,s=bn.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(ya);const n=Gr(Yi.h,ya.h,e),s=Gr(Yi.s,ya.s,e),r=Gr(Yi.l,ya.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Pt;Pt.NAMES=hf;let Cp=0;class Is extends br{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Ds(),this.name="",this.blending=es,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=_l,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==is&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xl&&(n.blendSrc=this.blendSrc),this.blendDst!==_l&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==au&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Le extends Is{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const en=new G,ba=new Et;class Ge{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ou,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ba.fromBufferAttribute(this,e),ba.applyMatrix3(t),this.setXY(e,ba.x,ba.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=er(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=er(e,this.array)),e}setX(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=er(e,this.array)),e}setY(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=er(e,this.array)),e}setZ(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=er(e,this.array)),e}setW(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array),s=En(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array),s=En(s,this.array),r=En(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ou&&(t.usage=this.usage),t}}class ff extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class df extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rp=0;const qn=new Ie,qo=new Ve,Ys=new G,On=new Ls,Dr=new Ls,un=new G;class ze extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lf(t)?df:ff)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Me().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,n){return qn.makeTranslation(t,e,n),this.applyMatrix4(qn),this}scale(t,e,n){return qn.makeScale(t,e,n),this.applyMatrix4(qn),this}lookAt(t){return qo.lookAt(t),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];On.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Dr.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors(On.min,Dr.min),On.expandByPoint(un),un.addVectors(On.max,Dr.max),On.expandByPoint(un)):(On.expandByPoint(Dr.min),On.expandByPoint(Dr.max))}On.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)un.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(un));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)un.fromBufferAttribute(o,c),l&&(Ys.fromBufferAttribute(t,c),un.add(Ys)),s=Math.max(s,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new G,l[A]=new G;const c=new G,h=new G,u=new G,f=new Et,p=new Et,g=new Et,M=new G,m=new G;function d(A,v,_){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,v),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(w),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(w),o[A].add(M),o[v].add(M),o[_].add(M),l[A].add(m),l[v].add(m),l[_].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let A=0,v=y.length;A<v;++A){const _=y[A],w=_.start,L=_.count;for(let O=w,D=w+L;O<D;O+=3)d(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const b=new G,x=new G,R=new G,T=new G;function E(A){R.fromBufferAttribute(s,A),T.copy(R);const v=o[A];b.copy(v),b.sub(R.multiplyScalar(R.dot(v))).normalize(),x.crossVectors(T,v);const w=x.dot(l[A])<0?-1:1;a.setXYZW(A,b.x,b.y,b.z,w)}for(let A=0,v=y.length;A<v;++A){const _=y[A],w=_.start,L=_.count;for(let O=w,D=w+L;O<D;O+=3)E(t.getX(O+0)),E(t.getX(O+1)),E(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,h=new G,u=new G;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),M=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new Ge(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tu=new Ie,os=new Ic,Sa=new Sr,Au=new G,wa=new G,Ea=new G,Ta=new G,Yo=new G,Aa=new G,Cu=new G,Ca=new G;class oe extends Ve{constructor(t=new ze,e=new Le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Aa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Yo.fromBufferAttribute(u,t),a?Aa.addScaledVector(Yo,h):Aa.addScaledVector(Yo.sub(e),h))}e.add(Aa)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(r),os.copy(t.ray).recast(t.near),!(Sa.containsPoint(os.origin)===!1&&(os.intersectSphere(Sa,Au)===null||os.origin.distanceToSquared(Au)>(t.far-t.near)**2))&&(Tu.copy(r).invert(),os.copy(t.ray).applyMatrix4(Tu),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,os)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=f.length;g<M;g++){const m=f[g],d=a[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,R=b;x<R;x+=3){const T=o.getX(x),E=o.getX(x+1),A=o.getX(x+2);s=Ra(this,d,t,n,c,h,u,T,E,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=g,d=M;m<d;m+=3){const y=o.getX(m),b=o.getX(m+1),x=o.getX(m+2);s=Ra(this,a,t,n,c,h,u,y,b,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=f.length;g<M;g++){const m=f[g],d=a[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,R=b;x<R;x+=3){const T=x,E=x+1,A=x+2;s=Ra(this,d,t,n,c,h,u,T,E,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=g,d=M;m<d;m+=3){const y=m,b=m+1,x=m+2;s=Ra(this,a,t,n,c,h,u,y,b,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Pp(i,t,e,n,s,r,a,o){let l;if(t.side===Pn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===is,o),l===null)return null;Ca.copy(o),Ca.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ca);return c<e.near||c>e.far?null:{distance:c,point:Ca.clone(),object:i}}function Ra(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,wa),i.getVertexPosition(l,Ea),i.getVertexPosition(c,Ta);const h=Pp(i,t,e,n,wa,Ea,Ta,Cu);if(h){const u=new G;li.getBarycoord(Cu,wa,Ea,Ta,u),s&&(h.uv=li.getInterpolatedAttribute(s,o,l,c,u,new Et)),r&&(h.uv1=li.getInterpolatedAttribute(r,o,l,c,u,new Et)),a&&(h.normal=li.getInterpolatedAttribute(a,o,l,c,u,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new G,materialIndex:0};li.getNormal(wa,Ea,Ta,f.normal),h.face=f,h.barycoord=u}return h}class Cn extends ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2));function g(M,m,d,y,b,x,R,T,E,A,v){const _=x/E,w=R/A,L=x/2,O=R/2,D=T/2,z=E+1,k=A+1;let W=0,V=0;const $=new G;for(let J=0;J<k;J++){const at=J*w-O;for(let Tt=0;Tt<z;Tt++){const kt=Tt*_-L;$[M]=kt*y,$[m]=at*b,$[d]=D,c.push($.x,$.y,$.z),$[M]=0,$[m]=0,$[d]=T>0?1:-1,h.push($.x,$.y,$.z),u.push(Tt/E),u.push(1-J/A),W+=1}}for(let J=0;J<A;J++)for(let at=0;at<E;at++){const Tt=f+at+z*J,kt=f+at+z*(J+1),H=f+(at+1)+z*(J+1),Z=f+(at+1)+z*J;l.push(Tt,kt,Z),l.push(kt,H,Z),V+=6}o.addGroup(p,V,v),p+=V,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Tn(i){const t={};for(let e=0;e<i.length;e++){const n=mr(i[e]);for(const s in n)t[s]=n[s]}return t}function Dp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function pf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const ci={clone:mr,merge:Tn};var Lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $e extends Is{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lp,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mr(t.uniforms),this.uniformsGroups=Dp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class mf extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new G,Ru=new Et,Pu=new Et;class Bn extends mf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Kr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,Ru,Pu),e.subVectors(Pu,Ru)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Br*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const $s=-90,js=1;class Up extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Bn($s,js,t,e);s.layers=this.layers,this.add(s);const r=new Bn($s,js,t,e);r.layers=this.layers,this.add(r);const a=new Bn($s,js,t,e);a.layers=this.layers,this.add(a);const o=new Bn($s,js,t,e);o.layers=this.layers,this.add(o);const l=new Bn($s,js,t,e);l.layers=this.layers,this.add(l);const c=new Bn($s,js,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class gf extends Sn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:dr,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Np extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new gf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Cn(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:pn});r.uniforms.tEquirect.value=e;const a=new oe(s,r),o=e.minFilter;return e.minFilter===vs&&(e.minFilter=Mi),new Up(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const $o=new G,zp=new G,Fp=new Me;class ds{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=$o.subVectors(n,e).cross(zp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta($o),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Fp.getNormalMatrix(t),s=this.coplanarPoint($o).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new Sr,Pa=new G;class Nc{constructor(t=new ds,e=new ds,n=new ds,s=new ds,r=new ds,a=new ds){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Oi){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],M=s[10],m=s[11],d=s[12],y=s[13],b=s[14],x=s[15];if(n[0].setComponents(l-r,f-c,m-p,x-d).normalize(),n[1].setComponents(l+r,f+c,m+p,x+d).normalize(),n[2].setComponents(l+a,f+h,m+g,x+y).normalize(),n[3].setComponents(l-a,f-h,m-g,x-y).normalize(),n[4].setComponents(l-o,f-u,m-M,x-b).normalize(),e===Oi)n[5].setComponents(l+o,f+u,m+M,x+b).normalize();else if(e===ro)n[5].setComponents(o,u,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(t){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Pa.x=s.normal.x>0?t.max.x:t.min.x,Pa.y=s.normal.y>0?t.max.y:t.min.y,Pa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vf(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Op(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],M=u[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++f,u[f]=M)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const M=u[p];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Kn extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,p=[],g=[],M=[],m=[];for(let d=0;d<h;d++){const y=d*f-a;for(let b=0;b<c;b++){const x=b*u-r;g.push(x,-y,0),M.push(0,0,1),m.push(b/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){const b=y+c*d,x=y+c*(d+1),R=y+1+c*(d+1),T=y+1+c*d;p.push(b,x,T),p.push(x,R,T)}this.setIndex(p),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(M,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.width,t.height,t.widthSegments,t.heightSegments)}}var kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bp=`#ifdef USE_ALPHAHASH
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
#endif`,Gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xp=`#ifdef USE_AOMAP
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
#endif`,qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yp=`#ifdef USE_BATCHING
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
#endif`,$p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jp=`#ifdef USE_IRIDESCENCE
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
#endif`,Qp=`#ifdef USE_BUMPMAP
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
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,l0=`#define PI 3.141592653589793
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
} // validated`,c0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,u0=`vec3 transformedNormal = objectNormal;
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
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m0="gl_FragColor = linearToOutputTexel( gl_FragColor );",g0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T0=`#ifdef USE_GRADIENTMAP
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
}`,A0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P0=`uniform bool receiveShadow;
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
#endif`,D0=`#ifdef USE_ENVMAP
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
#endif`,L0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z0=`PhysicalMaterial material;
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
#endif`,F0=`struct PhysicalMaterial {
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
}`,O0=`
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
#endif`,k0=`#if defined( RE_IndirectDiffuse )
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
#endif`,B0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$0=`#if defined( USE_POINTS_UV )
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
#endif`,j0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`#ifdef USE_MORPHTARGETS
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
#endif`,em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,im=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,om=`#ifdef USE_NORMALMAP
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
#endif`,lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,um=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_m=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sm=`float getShadowMask() {
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
}`,wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Em=`#ifdef USE_SKINNING
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
#endif`,Tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Am=`#ifdef USE_SKINNING
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
#endif`,Cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lm=`#ifdef USE_TRANSMISSION
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
#endif`,Im=`#ifdef USE_TRANSMISSION
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,km=`uniform sampler2D t2D;
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`#include <common>
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
}`,Xm=`#if DEPTH_PACKING == 3200
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
}`,qm=`#define DISTANCE
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
}`,Ym=`#define DISTANCE
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`uniform float scale;
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
}`,Km=`uniform vec3 diffuse;
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
}`,Jm=`#include <common>
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
}`,Qm=`uniform vec3 diffuse;
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
}`,tg=`#define LAMBERT
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
}`,eg=`#define LAMBERT
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
}`,ng=`#define MATCAP
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
}`,ig=`#define MATCAP
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
}`,sg=`#define NORMAL
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
}`,rg=`#define NORMAL
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
}`,ag=`#define PHONG
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
}`,og=`#define PHONG
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
}`,lg=`#define STANDARD
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
}`,cg=`#define STANDARD
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
}`,ug=`#define TOON
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
}`,hg=`#define TOON
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
}`,fg=`uniform float size;
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
}`,dg=`uniform vec3 diffuse;
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
}`,pg=`#include <common>
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
}`,mg=`uniform vec3 color;
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
}`,gg=`uniform float rotation;
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
}`,vg=`uniform vec3 diffuse;
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
}`,Se={alphahash_fragment:kp,alphahash_pars_fragment:Bp,alphamap_fragment:Gp,alphamap_pars_fragment:Vp,alphatest_fragment:Hp,alphatest_pars_fragment:Wp,aomap_fragment:Xp,aomap_pars_fragment:qp,batching_pars_vertex:Yp,batching_vertex:$p,begin_vertex:jp,beginnormal_vertex:Zp,bsdfs:Kp,iridescence_fragment:Jp,bumpmap_pars_fragment:Qp,clipping_planes_fragment:t0,clipping_planes_pars_fragment:e0,clipping_planes_pars_vertex:n0,clipping_planes_vertex:i0,color_fragment:s0,color_pars_fragment:r0,color_pars_vertex:a0,color_vertex:o0,common:l0,cube_uv_reflection_fragment:c0,defaultnormal_vertex:u0,displacementmap_pars_vertex:h0,displacementmap_vertex:f0,emissivemap_fragment:d0,emissivemap_pars_fragment:p0,colorspace_fragment:m0,colorspace_pars_fragment:g0,envmap_fragment:v0,envmap_common_pars_fragment:x0,envmap_pars_fragment:_0,envmap_pars_vertex:M0,envmap_physical_pars_fragment:D0,envmap_vertex:y0,fog_vertex:b0,fog_pars_vertex:S0,fog_fragment:w0,fog_pars_fragment:E0,gradientmap_pars_fragment:T0,lightmap_pars_fragment:A0,lights_lambert_fragment:C0,lights_lambert_pars_fragment:R0,lights_pars_begin:P0,lights_toon_fragment:L0,lights_toon_pars_fragment:I0,lights_phong_fragment:U0,lights_phong_pars_fragment:N0,lights_physical_fragment:z0,lights_physical_pars_fragment:F0,lights_fragment_begin:O0,lights_fragment_maps:k0,lights_fragment_end:B0,logdepthbuf_fragment:G0,logdepthbuf_pars_fragment:V0,logdepthbuf_pars_vertex:H0,logdepthbuf_vertex:W0,map_fragment:X0,map_pars_fragment:q0,map_particle_fragment:Y0,map_particle_pars_fragment:$0,metalnessmap_fragment:j0,metalnessmap_pars_fragment:Z0,morphinstance_vertex:K0,morphcolor_vertex:J0,morphnormal_vertex:Q0,morphtarget_pars_vertex:tm,morphtarget_vertex:em,normal_fragment_begin:nm,normal_fragment_maps:im,normal_pars_fragment:sm,normal_pars_vertex:rm,normal_vertex:am,normalmap_pars_fragment:om,clearcoat_normal_fragment_begin:lm,clearcoat_normal_fragment_maps:cm,clearcoat_pars_fragment:um,iridescence_pars_fragment:hm,opaque_fragment:fm,packing:dm,premultiplied_alpha_fragment:pm,project_vertex:mm,dithering_fragment:gm,dithering_pars_fragment:vm,roughnessmap_fragment:xm,roughnessmap_pars_fragment:_m,shadowmap_pars_fragment:Mm,shadowmap_pars_vertex:ym,shadowmap_vertex:bm,shadowmask_pars_fragment:Sm,skinbase_vertex:wm,skinning_pars_vertex:Em,skinning_vertex:Tm,skinnormal_vertex:Am,specularmap_fragment:Cm,specularmap_pars_fragment:Rm,tonemapping_fragment:Pm,tonemapping_pars_fragment:Dm,transmission_fragment:Lm,transmission_pars_fragment:Im,uv_pars_fragment:Um,uv_pars_vertex:Nm,uv_vertex:zm,worldpos_vertex:Fm,background_vert:Om,background_frag:km,backgroundCube_vert:Bm,backgroundCube_frag:Gm,cube_vert:Vm,cube_frag:Hm,depth_vert:Wm,depth_frag:Xm,distanceRGBA_vert:qm,distanceRGBA_frag:Ym,equirect_vert:$m,equirect_frag:jm,linedashed_vert:Zm,linedashed_frag:Km,meshbasic_vert:Jm,meshbasic_frag:Qm,meshlambert_vert:tg,meshlambert_frag:eg,meshmatcap_vert:ng,meshmatcap_frag:ig,meshnormal_vert:sg,meshnormal_frag:rg,meshphong_vert:ag,meshphong_frag:og,meshphysical_vert:lg,meshphysical_frag:cg,meshtoon_vert:ug,meshtoon_frag:hg,points_vert:fg,points_frag:dg,shadow_vert:pg,shadow_frag:mg,sprite_vert:gg,sprite_frag:vg},Ht={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},envMapRotation:{value:new Me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},_i={basic:{uniforms:Tn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Tn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Tn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Tn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Tn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Tn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Tn([Ht.points,Ht.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Tn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Tn([Ht.common,Ht.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Tn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Tn([Ht.sprite,Ht.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Me}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:Tn([Ht.common,Ht.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:Tn([Ht.lights,Ht.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};_i.physical={uniforms:Tn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const Da={r:0,b:0,g:0},cs=new wi,xg=new Ie;function _g(i,t,e,n,s,r,a){const o=new Pt(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?e:t).get(b)),b}function M(y){let b=!1;const x=g(y);x===null?d(o,l):x&&x.isColor&&(d(x,1),b=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,b){const x=g(b);x&&(x.isCubeTexture||x.mapping===ho)?(h===void 0&&(h=new oe(new Cn(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:mr(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),cs.copy(b.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xg.makeRotationFromEuler(cs)),h.material.toneMapped=De.getTransfer(x.colorSpace)!==Oe,(u!==x||f!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new oe(new Kn(2,2),new $e({name:"BackgroundMaterial",uniforms:mr(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=De.getTransfer(x.colorSpace)!==Oe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,b){y.getRGB(Da,pf(i)),n.buffers.color.setClear(Da.r,Da.g,Da.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),l=b,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(o,l)},render:M,addToRenderList:m}}function Mg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(_,w,L,O,D){let z=!1;const k=u(O,L,w);r!==k&&(r=k,c(r.object)),z=p(_,O,L,D),z&&g(_,O,L,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,x(_,w,L,O),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,w,L){const O=L.wireframe===!0;let D=n[_.id];D===void 0&&(D={},n[_.id]=D);let z=D[w.id];z===void 0&&(z={},D[w.id]=z);let k=z[O];return k===void 0&&(k=f(l()),z[O]=k),k}function f(_){const w=[],L=[],O=[];for(let D=0;D<e;D++)w[D]=0,L[D]=0,O[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:L,attributeDivisors:O,object:_,attributes:{},index:null}}function p(_,w,L,O){const D=r.attributes,z=w.attributes;let k=0;const W=L.getAttributes();for(const V in W)if(W[V].location>=0){const J=D[V];let at=z[V];if(at===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(at=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(at=_.instanceColor)),J===void 0||J.attribute!==at||at&&J.data!==at.data)return!0;k++}return r.attributesNum!==k||r.index!==O}function g(_,w,L,O){const D={},z=w.attributes;let k=0;const W=L.getAttributes();for(const V in W)if(W[V].location>=0){let J=z[V];J===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(J=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(J=_.instanceColor));const at={};at.attribute=J,J&&J.data&&(at.data=J.data),D[V]=at,k++}r.attributes=D,r.attributesNum=k,r.index=O}function M(){const _=r.newAttributes;for(let w=0,L=_.length;w<L;w++)_[w]=0}function m(_){d(_,0)}function d(_,w){const L=r.newAttributes,O=r.enabledAttributes,D=r.attributeDivisors;L[_]=1,O[_]===0&&(i.enableVertexAttribArray(_),O[_]=1),D[_]!==w&&(i.vertexAttribDivisor(_,w),D[_]=w)}function y(){const _=r.newAttributes,w=r.enabledAttributes;for(let L=0,O=w.length;L<O;L++)w[L]!==_[L]&&(i.disableVertexAttribArray(L),w[L]=0)}function b(_,w,L,O,D,z,k){k===!0?i.vertexAttribIPointer(_,w,L,D,z):i.vertexAttribPointer(_,w,L,O,D,z)}function x(_,w,L,O){M();const D=O.attributes,z=L.getAttributes(),k=w.defaultAttributeValues;for(const W in z){const V=z[W];if(V.location>=0){let $=D[W];if($===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&($=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&($=_.instanceColor)),$!==void 0){const J=$.normalized,at=$.itemSize,Tt=t.get($);if(Tt===void 0)continue;const kt=Tt.buffer,H=Tt.type,Z=Tt.bytesPerElement,ht=H===i.INT||H===i.UNSIGNED_INT||$.gpuType===Ec;if($.isInterleavedBufferAttribute){const it=$.data,Ct=it.stride,Dt=$.offset;if(it.isInstancedInterleavedBuffer){for(let Ut=0;Ut<V.locationSize;Ut++)d(V.location+Ut,it.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Ut=0;Ut<V.locationSize;Ut++)m(V.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let Ut=0;Ut<V.locationSize;Ut++)b(V.location+Ut,at/V.locationSize,H,J,Ct*Z,(Dt+at/V.locationSize*Ut)*Z,ht)}else{if($.isInstancedBufferAttribute){for(let it=0;it<V.locationSize;it++)d(V.location+it,$.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let it=0;it<V.locationSize;it++)m(V.location+it);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let it=0;it<V.locationSize;it++)b(V.location+it,at/V.locationSize,H,J,at*Z,at/V.locationSize*it*Z,ht)}}else if(k!==void 0){const J=k[W];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(V.location,J);break;case 3:i.vertexAttrib3fv(V.location,J);break;case 4:i.vertexAttrib4fv(V.location,J);break;default:i.vertexAttrib1fv(V.location,J)}}}}y()}function R(){A();for(const _ in n){const w=n[_];for(const L in w){const O=w[L];for(const D in O)h(O[D].object),delete O[D];delete w[L]}delete n[_]}}function T(_){if(n[_.id]===void 0)return;const w=n[_.id];for(const L in w){const O=w[L];for(const D in O)h(O[D].object),delete O[D];delete w[L]}delete n[_.id]}function E(_){for(const w in n){const L=n[w];if(L[_.id]===void 0)continue;const O=L[_.id];for(const D in O)h(O[D].object),delete O[D];delete L[_.id]}}function A(){v(),a=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:v,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:M,enableAttribute:m,disableUnusedAttributes:y}}function yg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let M=0;M<u;M++)g+=h[M]*f[M];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function bg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==jn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const A=E===Zn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Si&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==fi&&!A)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:R,maxSamples:T}}function Sg(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ds,o=new Me,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,b=y*4;let x=d.clippingState||null;l.value=x,x=h(g,f,b,p);for(let R=0;R!==b;++R)x[R]=e[R];d.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const M=u!==null?u.length:0;let m=null;if(M!==0){if(m=l.value,g!==!0||m===null){const d=p+M*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,x=p;b!==M;++b,x+=4)a.copy(u[b]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function wg(i){let t=new WeakMap;function e(a,o){return o===Rl?a.mapping=dr:o===Pl&&(a.mapping=pr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Rl||o===Pl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Np(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class zc extends mf{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const nr=4,Du=[.125,.215,.35,.446,.526,.582],ms=20,jo=new zc,Lu=new Pt;let Zo=null,Ko=0,Jo=0,Qo=!1;const ps=(1+Math.sqrt(5))/2,Zs=1/ps,Iu=[new G(-ps,Zs,0),new G(ps,Zs,0),new G(-Zs,0,ps),new G(Zs,0,ps),new G(0,ps,-Zs),new G(0,ps,Zs),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Uu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Zo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zo,Ko,Jo),this._renderer.xr.enabled=Qo,t.scissorTest=!1,La(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===dr||t.mapping===pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:Zn,format:jn,colorSpace:yr,depthBuffer:!1},s=Nu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eg(r)),this._blurMaterial=Tg(r,t,e)}return s}_compileMaterial(t){const e=new oe(this._lodPlanes[0],t);this._renderer.compile(e,jo)}_sceneToCubeUV(t,e,n,s){const o=new Bn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Lu),h.toneMapping=ns,h.autoClear=!1;const p=new Le({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),g=new oe(new Cn,p);let M=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,M=!0):(p.color.copy(Lu),M=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const b=this._cubeSize;La(s,y*b,d>2?b:0,b,b),h.setRenderTarget(s),M&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===dr||t.mapping===pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new oe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;La(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,jo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Iu[(s-r-1)%Iu.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new oe(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ms-1),M=r/g,m=isFinite(r)?1+Math.floor(h*M):ms;m>ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ms}`);const d=[];let y=0;for(let E=0;E<ms;++E){const A=E/M,v=Math.exp(-A*A/2);d.push(v),E===0?y+=v:E<m&&(y+=2*v)}for(let E=0;E<d.length;E++)d[E]=d[E]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const x=this._sizeLods[s],R=3*x*(s>b-nr?s-b+nr:0),T=4*(this._cubeSize-x);La(e,R,T,3*x,2*x),l.setRenderTarget(e),l.render(u,jo)}}function Eg(i){const t=[],e=[],n=[];let s=i;const r=i-nr+1+Du.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-nr?l=Du[a-i+nr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,M=3,m=2,d=1,y=new Float32Array(M*g*p),b=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let T=0;T<p;T++){const E=T%3*2/3-1,A=T>2?0:-1,v=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];y.set(v,M*g*T),b.set(f,m*g*T);const _=[T,T,T,T,T,T];x.set(_,d*g*T)}const R=new ze;R.setAttribute("position",new Ge(y,M)),R.setAttribute("uv",new Ge(b,m)),R.setAttribute("faceIndex",new Ge(x,d)),t.push(R),s>nr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nu(i,t,e){const n=new Un(i,t,e);return n.texture.mapping=ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function La(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Tg(i,t,e){const n=new Float32Array(ms),s=new G(0,1,0);return new $e({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fc(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function zu(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fc(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Fu(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Fc(){return`

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
	`}function Ag(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Rl||l===Pl,h=l===dr||l===pr;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Uu(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Uu(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Cg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Fr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Rg(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const M=f.morphAttributes[g];for(let m=0,d=M.length;m<d;m++)t.remove(M[m])}f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const M=p[g];for(let m=0,d=M.length;m<d;m++)t.update(M[m],i.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,g=u.attributes.position;let M=0;if(p!==null){const y=p.array;M=p.version;for(let b=0,x=y.length;b<x;b+=3){const R=y[b+0],T=y[b+1],E=y[b+2];f.push(R,T,T,E,E,R)}}else if(g!==void 0){const y=g.array;M=g.version;for(let b=0,x=y.length/3-1;b<x;b+=3){const R=b+0,T=b+1,E=b+2;f.push(R,T,T,E,E,R)}}else return;const m=new(lf(f)?df:ff)(f,1);m.version=M;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Pg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,M){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],M[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,M,0,g);let d=0;for(let y=0;y<g;y++)d+=p[y]*M[y];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Dg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Lg(i,t,e){const n=new WeakMap,s=new Be;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let _=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var p=_;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),M===!0&&(x=2),m===!0&&(x=3);let R=o.attributes.position.count*x,T=1;R>t.maxTextureSize&&(T=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const E=new Float32Array(R*T*4*u),A=new uf(E,R,T,u);A.type=fi,A.needsUpdate=!0;const v=x*4;for(let w=0;w<u;w++){const L=d[w],O=y[w],D=b[w],z=R*T*4*w;for(let k=0;k<L.count;k++){const W=k*v;g===!0&&(s.fromBufferAttribute(L,k),E[z+W+0]=s.x,E[z+W+1]=s.y,E[z+W+2]=s.z,E[z+W+3]=0),M===!0&&(s.fromBufferAttribute(O,k),E[z+W+4]=s.x,E[z+W+5]=s.y,E[z+W+6]=s.z,E[z+W+7]=0),m===!0&&(s.fromBufferAttribute(D,k),E[z+W+8]=s.x,E[z+W+9]=s.y,E[z+W+10]=s.z,E[z+W+11]=D.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new Et(R,T)},n.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const M=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Ig(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Oc extends Sn{constructor(t,e,n,s,r,a,o,l,c,h=sr){if(h!==sr&&h!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===sr&&(n=Es),n===void 0&&h===As&&(n=Ts),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const xf=new Sn,Ou=new Oc(1,1),_f=new uf,Mf=new Mp,yf=new gf,ku=[],Bu=[],Gu=new Float32Array(16),Vu=new Float32Array(9),Hu=new Float32Array(4);function wr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ku[s];if(r===void 0&&(r=new Float32Array(s),ku[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ln(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function cn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function mo(i,t){let e=Bu[t];e===void 0&&(e=new Int32Array(t),Bu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ug(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;i.uniform2fv(this.addr,t),cn(e,t)}}function zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ln(e,t))return;i.uniform3fv(this.addr,t),cn(e,t)}}function Fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;i.uniform4fv(this.addr,t),cn(e,t)}}function Og(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;Hu.set(n),i.uniformMatrix2fv(this.addr,!1,Hu),cn(e,n)}}function kg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;Vu.set(n),i.uniformMatrix3fv(this.addr,!1,Vu),cn(e,n)}}function Bg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;Gu.set(n),i.uniformMatrix4fv(this.addr,!1,Gu),cn(e,n)}}function Gg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;i.uniform2iv(this.addr,t),cn(e,t)}}function Hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;i.uniform3iv(this.addr,t),cn(e,t)}}function Wg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;i.uniform4iv(this.addr,t),cn(e,t)}}function Xg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;i.uniform2uiv(this.addr,t),cn(e,t)}}function Yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;i.uniform3uiv(this.addr,t),cn(e,t)}}function $g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;i.uniform4uiv(this.addr,t),cn(e,t)}}function jg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ou.compareFunction=of,r=Ou):r=xf,e.setTexture2D(t||r,s)}function Zg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Mf,s)}function Kg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||yf,s)}function Jg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||_f,s)}function Qg(i){switch(i){case 5126:return Ug;case 35664:return Ng;case 35665:return zg;case 35666:return Fg;case 35674:return Og;case 35675:return kg;case 35676:return Bg;case 5124:case 35670:return Gg;case 35667:case 35671:return Vg;case 35668:case 35672:return Hg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return qg;case 36295:return Yg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return Jg}}function tv(i,t){i.uniform1fv(this.addr,t)}function ev(i,t){const e=wr(t,this.size,2);i.uniform2fv(this.addr,e)}function nv(i,t){const e=wr(t,this.size,3);i.uniform3fv(this.addr,e)}function iv(i,t){const e=wr(t,this.size,4);i.uniform4fv(this.addr,e)}function sv(i,t){const e=wr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function rv(i,t){const e=wr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function av(i,t){const e=wr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ov(i,t){i.uniform1iv(this.addr,t)}function lv(i,t){i.uniform2iv(this.addr,t)}function cv(i,t){i.uniform3iv(this.addr,t)}function uv(i,t){i.uniform4iv(this.addr,t)}function hv(i,t){i.uniform1uiv(this.addr,t)}function fv(i,t){i.uniform2uiv(this.addr,t)}function dv(i,t){i.uniform3uiv(this.addr,t)}function pv(i,t){i.uniform4uiv(this.addr,t)}function mv(i,t,e){const n=this.cache,s=t.length,r=mo(e,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||xf,r[a])}function gv(i,t,e){const n=this.cache,s=t.length,r=mo(e,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Mf,r[a])}function vv(i,t,e){const n=this.cache,s=t.length,r=mo(e,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||yf,r[a])}function xv(i,t,e){const n=this.cache,s=t.length,r=mo(e,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||_f,r[a])}function _v(i){switch(i){case 5126:return tv;case 35664:return ev;case 35665:return nv;case 35666:return iv;case 35674:return sv;case 35675:return rv;case 35676:return av;case 5124:case 35670:return ov;case 35667:case 35671:return lv;case 35668:case 35672:return cv;case 35669:case 35673:return uv;case 5125:return hv;case 36294:return fv;case 36295:return dv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return mv;case 35679:case 36299:case 36307:return gv;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return xv}}class Mv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qg(e.type)}}class yv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_v(e.type)}}class bv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const tl=/(\w+)(\])?(\[|\.)?/g;function Wu(i,t){i.seq.push(t),i.map[t.id]=t}function Sv(i,t,e){const n=i.name,s=n.length;for(tl.lastIndex=0;;){const r=tl.exec(n),a=tl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Wu(e,c===void 0?new Mv(o,i,t):new yv(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new bv(o),Wu(e,u)),e=u}}}class to{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Sv(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Xu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const wv=37297;let Ev=0;function Tv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const qu=new Me;function Av(i){De._getMatrix(qu,De.workingColorSpace,i);const t=`mat3( ${qu.elements.map(e=>e.toFixed(4))} )`;switch(De.getTransfer(i)){case po:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Tv(i.getShaderSource(t),a)}else return s}function Cv(i,t){const e=Av(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Rv(i,t){let e;switch(t){case Xh:e="Linear";break;case qh:e="Reinhard";break;case Yh:e="Cineon";break;case wc:e="ACESFilmic";break;case $h:e="AgX";break;case jh:e="Neutral";break;case Od:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ia=new G;function Pv(){De.getLuminanceCoefficients(Ia);const i=Ia.x.toFixed(4),t=Ia.y.toFixed(4),e=Ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function Lv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Iv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Or(i){return i!==""}function $u(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ju(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(i){return i.replace(Uv,zv)}const Nv=new Map;function zv(i,t){let e=Se[t];if(e===void 0){const n=Nv.get(t);if(n!==void 0)e=Se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sc(e)}const Fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(i){return i.replace(Fv,Ov)}function Ov(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ku(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function kv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ui&&(t="SHADOWMAP_TYPE_VSM"),t}function Bv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case dr:case pr:t="ENVMAP_TYPE_CUBE";break;case ho:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pr:t="ENVMAP_MODE_REFRACTION";break}return t}function Vv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Sc:t="ENVMAP_BLENDING_MULTIPLY";break;case zd:t="ENVMAP_BLENDING_MIX";break;case Fd:t="ENVMAP_BLENDING_ADD";break}return t}function Hv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Wv(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=kv(e),c=Bv(e),h=Gv(e),u=Vv(e),f=Hv(e),p=Dv(e),g=Lv(r),M=s.createProgram();let m,d,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Or).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Or).join(`
`),d.length>0&&(d+=`
`)):(m=[Ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),d=[Ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ns?"#define TONE_MAPPING":"",e.toneMapping!==ns?Se.tonemapping_pars_fragment:"",e.toneMapping!==ns?Rv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,Cv("linearToOutputTexel",e.outputColorSpace),Pv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Or).join(`
`)),a=sc(a),a=$u(a,e),a=ju(a,e),o=sc(o),o=$u(o,e),o=ju(o,e),a=Zu(a),o=Zu(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=y+m+a,x=y+d+o,R=Xu(s,s.VERTEX_SHADER,b),T=Xu(s,s.FRAGMENT_SHADER,x);s.attachShader(M,R),s.attachShader(M,T),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function E(w){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(M).trim(),O=s.getShaderInfoLog(R).trim(),D=s.getShaderInfoLog(T).trim();let z=!0,k=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,R,T);else{const W=Yu(s,R,"vertex"),V=Yu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+L+`
`+W+`
`+V)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(O===""||D==="")&&(k=!1);k&&(w.diagnostics={runnable:z,programLog:L,vertexShader:{log:O,prefix:m},fragmentShader:{log:D,prefix:d}})}s.deleteShader(R),s.deleteShader(T),A=new to(s,M),v=Iv(s,M)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let v;this.getAttributes=function(){return v===void 0&&E(this),v};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(M,wv)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ev++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=R,this.fragmentShader=T,this}let Xv=0;class qv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Yv(t),e.set(t,n)),n}}class Yv{constructor(t){this.id=Xv++,this.code=t,this.usedTimes=0}}function $v(i,t,e,n,s,r,a){const o=new Uc,l=new qv,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,_,w,L,O){const D=L.fog,z=O.geometry,k=v.isMeshStandardMaterial?L.environment:null,W=(v.isMeshStandardMaterial?e:t).get(v.envMap||k),V=W&&W.mapping===ho?W.image.height:null,$=g[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const J=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,at=J!==void 0?J.length:0;let Tt=0;z.morphAttributes.position!==void 0&&(Tt=1),z.morphAttributes.normal!==void 0&&(Tt=2),z.morphAttributes.color!==void 0&&(Tt=3);let kt,H,Z,ht;if($){const we=_i[$];kt=we.vertexShader,H=we.fragmentShader}else kt=v.vertexShader,H=v.fragmentShader,l.update(v),Z=l.getVertexShaderID(v),ht=l.getFragmentShaderID(v);const it=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Dt=O.isInstancedMesh===!0,Ut=O.isBatchedMesh===!0,Wt=!!v.map,dt=!!v.matcap,_t=!!W,B=!!v.aoMap,qt=!!v.lightMap,yt=!!v.bumpMap,Ot=!!v.normalMap,It=!!v.displacementMap,ee=!!v.emissiveMap,Y=!!v.metalnessMap,C=!!v.roughnessMap,S=v.anisotropy>0,X=v.clearcoat>0,tt=v.dispersion>0,st=v.iridescence>0,rt=v.sheen>0,Ft=v.transmission>0,bt=S&&!!v.anisotropyMap,Lt=X&&!!v.clearcoatMap,re=X&&!!v.clearcoatNormalMap,St=X&&!!v.clearcoatRoughnessMap,Yt=st&&!!v.iridescenceMap,ae=st&&!!v.iridescenceThicknessMap,le=rt&&!!v.sheenColorMap,Zt=rt&&!!v.sheenRoughnessMap,ye=!!v.specularMap,ce=!!v.specularColorMap,be=!!v.specularIntensityMap,q=Ft&&!!v.transmissionMap,zt=Ft&&!!v.thicknessMap,lt=!!v.gradientMap,xt=!!v.alphaMap,Bt=v.alphaTest>0,Gt=!!v.alphaHash,ue=!!v.extensions;let Fe=ns;v.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Fe=i.toneMapping);const ke={shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:kt,fragmentShader:H,defines:v.defines,customVertexShaderID:Z,customFragmentShaderID:ht,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Ut,batchingColor:Ut&&O._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&O.instanceColor!==null,instancingMorph:Dt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:yr,alphaToCoverage:!!v.alphaToCoverage,map:Wt,matcap:dt,envMap:_t,envMapMode:_t&&W.mapping,envMapCubeUVHeight:V,aoMap:B,lightMap:qt,bumpMap:yt,normalMap:Ot,displacementMap:f&&It,emissiveMap:ee,normalMapObjectSpace:Ot&&v.normalMapType===Vd,normalMapTangentSpace:Ot&&v.normalMapType===Dc,metalnessMap:Y,roughnessMap:C,anisotropy:S,anisotropyMap:bt,clearcoat:X,clearcoatMap:Lt,clearcoatNormalMap:re,clearcoatRoughnessMap:St,dispersion:tt,iridescence:st,iridescenceMap:Yt,iridescenceThicknessMap:ae,sheen:rt,sheenColorMap:le,sheenRoughnessMap:Zt,specularMap:ye,specularColorMap:ce,specularIntensityMap:be,transmission:Ft,transmissionMap:q,thicknessMap:zt,gradientMap:lt,opaque:v.transparent===!1&&v.blending===es&&v.alphaToCoverage===!1,alphaMap:xt,alphaTest:Bt,alphaHash:Gt,combine:v.combine,mapUv:Wt&&M(v.map.channel),aoMapUv:B&&M(v.aoMap.channel),lightMapUv:qt&&M(v.lightMap.channel),bumpMapUv:yt&&M(v.bumpMap.channel),normalMapUv:Ot&&M(v.normalMap.channel),displacementMapUv:It&&M(v.displacementMap.channel),emissiveMapUv:ee&&M(v.emissiveMap.channel),metalnessMapUv:Y&&M(v.metalnessMap.channel),roughnessMapUv:C&&M(v.roughnessMap.channel),anisotropyMapUv:bt&&M(v.anisotropyMap.channel),clearcoatMapUv:Lt&&M(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&M(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&M(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&M(v.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&M(v.iridescenceThicknessMap.channel),sheenColorMapUv:le&&M(v.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&M(v.sheenRoughnessMap.channel),specularMapUv:ye&&M(v.specularMap.channel),specularColorMapUv:ce&&M(v.specularColorMap.channel),specularIntensityMapUv:be&&M(v.specularIntensityMap.channel),transmissionMapUv:q&&M(v.transmissionMap.channel),thicknessMapUv:zt&&M(v.thicknessMap.channel),alphaMapUv:xt&&M(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ot||S),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(Wt||xt),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ct,skinning:O.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:Tt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Wt&&v.map.isVideoTexture===!0&&De.getTransfer(v.map.colorSpace)===Oe,decodeVideoTextureEmissive:ee&&v.emissiveMap.isVideoTexture===!0&&De.getTransfer(v.emissiveMap.colorSpace)===Oe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ke,flipSided:v.side===Pn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ue&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&v.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function d(v){const _=[];if(v.shaderID?_.push(v.shaderID):(_.push(v.customVertexShaderID),_.push(v.customFragmentShaderID)),v.defines!==void 0)for(const w in v.defines)_.push(w),_.push(v.defines[w]);return v.isRawShaderMaterial===!1&&(y(_,v),b(_,v),_.push(i.outputColorSpace)),_.push(v.customProgramCacheKey),_.join()}function y(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}function b(v,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),v.push(o.mask)}function x(v){const _=g[v.type];let w;if(_){const L=_i[_];w=ci.clone(L.uniforms)}else w=v.uniforms;return w}function R(v,_){let w;for(let L=0,O=h.length;L<O;L++){const D=h[L];if(D.cacheKey===_){w=D,++w.usedTimes;break}}return w===void 0&&(w=new Wv(i,_,v,r),h.push(w)),w}function T(v){if(--v.usedTimes===0){const _=h.indexOf(v);h[_]=h[h.length-1],h.pop(),v.destroy()}}function E(v){l.remove(v)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:R,releaseProgram:T,releaseShaderCache:E,programs:h,dispose:A}}function jv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Zv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ju(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,p,g,M,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:M,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=M,d.group=m),t++,d}function o(u,f,p,g,M,m){const d=a(u,f,p,g,M,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,g,M,m){const d=a(u,f,p,g,M,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||Zv),n.length>1&&n.sort(f||Ju),s.length>1&&s.sort(f||Ju)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Kv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Qu,i.set(n,[a])):s>=r.length?(a=new Qu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Jv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Pt};break;case"SpotLight":e={position:new G,direction:new G,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function Qv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let tx=0;function ex(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function nx(i){const t=new Jv,e=Qv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const s=new G,r=new Ie,a=new Ie;function o(c){let h=0,u=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,g=0,M=0,m=0,d=0,y=0,b=0,x=0,R=0,T=0,E=0;c.sort(ex);for(let v=0,_=c.length;v<_;v++){const w=c[v],L=w.color,O=w.intensity,D=w.distance,z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=L.r*O,u+=L.g*O,f+=L.b*O;else if(w.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(w.sh.coefficients[k],O);E++}else if(w.isDirectionalLight){const k=t.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const W=w.shadow,V=e.get(w);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=z,n.directionalShadowMatrix[p]=w.shadow.matrix,y++}n.directional[p]=k,p++}else if(w.isSpotLight){const k=t.get(w);k.position.setFromMatrixPosition(w.matrixWorld),k.color.copy(L).multiplyScalar(O),k.distance=D,k.coneCos=Math.cos(w.angle),k.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),k.decay=w.decay,n.spot[M]=k;const W=w.shadow;if(w.map&&(n.spotLightMap[R]=w.map,R++,W.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[M]=W.matrix,w.castShadow){const V=e.get(w);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.spotShadow[M]=V,n.spotShadowMap[M]=z,x++}M++}else if(w.isRectAreaLight){const k=t.get(w);k.color.copy(L).multiplyScalar(O),k.halfWidth.set(w.width*.5,0,0),k.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=k,m++}else if(w.isPointLight){const k=t.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),k.distance=w.distance,k.decay=w.decay,w.castShadow){const W=w.shadow,V=e.get(w);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=w.shadow.matrix,b++}n.point[g]=k,g++}else if(w.isHemisphereLight){const k=t.get(w);k.skyColor.copy(w.color).multiplyScalar(O),k.groundColor.copy(w.groundColor).multiplyScalar(O),n.hemi[d]=k,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const A=n.hash;(A.directionalLength!==p||A.pointLength!==g||A.spotLength!==M||A.rectAreaLength!==m||A.hemiLength!==d||A.numDirectionalShadows!==y||A.numPointShadows!==b||A.numSpotShadows!==x||A.numSpotMaps!==R||A.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=M,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,A.directionalLength=p,A.pointLength=g,A.spotLength=M,A.rectAreaLength=m,A.hemiLength=d,A.numDirectionalShadows=y,A.numPointShadows=b,A.numSpotShadows=x,A.numSpotMaps=R,A.numLightProbes=E,n.version=tx++)}function l(c,h){let u=0,f=0,p=0,g=0,M=0;const m=h.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){const b=c[d];if(b.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(b.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const x=n.hemi[M];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),M++}}}return{setup:o,setupView:l,state:n}}function th(i){const t=new nx(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ix(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new th(i),t.set(s,[o])):r>=a.length?(o=new th(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class sx extends Is{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rx extends Is{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ox=`uniform sampler2D shadow_pass;
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
}`;function lx(i,t,e){let n=new Nc;const s=new Et,r=new Et,a=new Be,o=new sx({depthPacking:Gd}),l=new rx,c={},h=e.maxTextureSize,u={[is]:Pn,[Pn]:is,[Ke]:Ke},f=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:ax,fragmentShader:ox}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new ze;g.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new oe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vh;let d=this.type;this.render=function(T,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const v=i.getRenderTarget(),_=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),L=i.state;L.setBlending(pn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const O=d!==Ui&&this.type===Ui,D=d===Ui&&this.type!==Ui;for(let z=0,k=T.length;z<k;z++){const W=T[z],V=W.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const $=V.getFrameExtents();if(s.multiply($),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,V.mapSize.y=r.y)),V.map===null||O===!0||D===!0){const at=this.type!==Ui?{minFilter:vn,magFilter:vn}:{};V.map!==null&&V.map.dispose(),V.map=new Un(s.x,s.y,at),V.map.texture.name=W.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const J=V.getViewportCount();for(let at=0;at<J;at++){const Tt=V.getViewport(at);a.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),L.viewport(a),V.updateMatrices(W,at),n=V.getFrustum(),x(E,A,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===Ui&&y(V,A),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(v,_,w)};function y(T,E){const A=t.update(M);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Un(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,A,f,M,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,A,p,M,null)}function b(T,E,A,v){let _=null;const w=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)_=w;else if(_=A.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const L=_.uuid,O=E.uuid;let D=c[L];D===void 0&&(D={},c[L]=D);let z=D[O];z===void 0&&(z=_.clone(),D[O]=z,E.addEventListener("dispose",R)),_=z}if(_.visible=E.visible,_.wireframe=E.wireframe,v===Ui?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:u[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,A.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const L=i.properties.get(_);L.light=A}return _}function x(T,E,A,v,_){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===Ui)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const O=t.update(T),D=T.material;if(Array.isArray(D)){const z=O.groups;for(let k=0,W=z.length;k<W;k++){const V=z[k],$=D[V.materialIndex];if($&&$.visible){const J=b(T,$,v,_);T.onBeforeShadow(i,T,E,A,O,J,V),i.renderBufferDirect(A,null,O,J,T,V),T.onAfterShadow(i,T,E,A,O,J,V)}}}else if(D.visible){const z=b(T,D,v,_);T.onBeforeShadow(i,T,E,A,O,z,null),i.renderBufferDirect(A,null,O,z,T,null),T.onAfterShadow(i,T,E,A,O,z,null)}}const L=T.children;for(let O=0,D=L.length;O<D;O++)x(L[O],E,A,v,_)}function R(T){T.target.removeEventListener("dispose",R);for(const A in c){const v=c[A],_=T.target.uuid;_ in v&&(v[_].dispose(),delete v[_])}}}const cx={[bl]:Sl,[wl]:Al,[El]:Cl,[fr]:Tl,[Sl]:bl,[Al]:wl,[Cl]:El,[Tl]:fr};function ux(i,t){function e(){let q=!1;const zt=new Be;let lt=null;const xt=new Be(0,0,0,0);return{setMask:function(Bt){lt!==Bt&&!q&&(i.colorMask(Bt,Bt,Bt,Bt),lt=Bt)},setLocked:function(Bt){q=Bt},setClear:function(Bt,Gt,ue,Fe,ke){ke===!0&&(Bt*=Fe,Gt*=Fe,ue*=Fe),zt.set(Bt,Gt,ue,Fe),xt.equals(zt)===!1&&(i.clearColor(Bt,Gt,ue,Fe),xt.copy(zt))},reset:function(){q=!1,lt=null,xt.set(-1,0,0,0)}}}function n(){let q=!1,zt=!1,lt=null,xt=null,Bt=null;return{setReversed:function(Gt){if(zt!==Gt){const ue=t.get("EXT_clip_control");zt?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT);const Fe=Bt;Bt=null,this.setClear(Fe)}zt=Gt},getReversed:function(){return zt},setTest:function(Gt){Gt?it(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(Gt){lt!==Gt&&!q&&(i.depthMask(Gt),lt=Gt)},setFunc:function(Gt){if(zt&&(Gt=cx[Gt]),xt!==Gt){switch(Gt){case bl:i.depthFunc(i.NEVER);break;case Sl:i.depthFunc(i.ALWAYS);break;case wl:i.depthFunc(i.LESS);break;case fr:i.depthFunc(i.LEQUAL);break;case El:i.depthFunc(i.EQUAL);break;case Tl:i.depthFunc(i.GEQUAL);break;case Al:i.depthFunc(i.GREATER);break;case Cl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=Gt}},setLocked:function(Gt){q=Gt},setClear:function(Gt){Bt!==Gt&&(zt&&(Gt=1-Gt),i.clearDepth(Gt),Bt=Gt)},reset:function(){q=!1,lt=null,xt=null,Bt=null,zt=!1}}}function s(){let q=!1,zt=null,lt=null,xt=null,Bt=null,Gt=null,ue=null,Fe=null,ke=null;return{setTest:function(we){q||(we?it(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(we){zt!==we&&!q&&(i.stencilMask(we),zt=we)},setFunc:function(we,xn,dn){(lt!==we||xt!==xn||Bt!==dn)&&(i.stencilFunc(we,xn,dn),lt=we,xt=xn,Bt=dn)},setOp:function(we,xn,dn){(Gt!==we||ue!==xn||Fe!==dn)&&(i.stencilOp(we,xn,dn),Gt=we,ue=xn,Fe=dn)},setLocked:function(we){q=we},setClear:function(we){ke!==we&&(i.clearStencil(we),ke=we)},reset:function(){q=!1,zt=null,lt=null,xt=null,Bt=null,Gt=null,ue=null,Fe=null,ke=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,M=!1,m=null,d=null,y=null,b=null,x=null,R=null,T=null,E=new Pt(0,0,0),A=0,v=!1,_=null,w=null,L=null,O=null,D=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,W=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=W>=1):V.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=W>=2);let $=null,J={};const at=i.getParameter(i.SCISSOR_BOX),Tt=i.getParameter(i.VIEWPORT),kt=new Be().fromArray(at),H=new Be().fromArray(Tt);function Z(q,zt,lt,xt){const Bt=new Uint8Array(4),Gt=i.createTexture();i.bindTexture(q,Gt),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ue=0;ue<lt;ue++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(zt,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,Bt):i.texImage2D(zt+ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Bt);return Gt}const ht={};ht[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(i.DEPTH_TEST),a.setFunc(fr),yt(!1),Ot(iu),it(i.CULL_FACE),B(pn);function it(q){h[q]!==!0&&(i.enable(q),h[q]=!0)}function Ct(q){h[q]!==!1&&(i.disable(q),h[q]=!1)}function Dt(q,zt){return u[q]!==zt?(i.bindFramebuffer(q,zt),u[q]=zt,q===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=zt),q===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=zt),!0):!1}function Ut(q,zt){let lt=p,xt=!1;if(q){lt=f.get(zt),lt===void 0&&(lt=[],f.set(zt,lt));const Bt=q.textures;if(lt.length!==Bt.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let Gt=0,ue=Bt.length;Gt<ue;Gt++)lt[Gt]=i.COLOR_ATTACHMENT0+Gt;lt.length=Bt.length,xt=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,xt=!0);xt&&i.drawBuffers(lt)}function Wt(q){return g!==q?(i.useProgram(q),g=q,!0):!1}const dt={[oi]:i.FUNC_ADD,[bd]:i.FUNC_SUBTRACT,[Sd]:i.FUNC_REVERSE_SUBTRACT};dt[wd]=i.MIN,dt[Ed]=i.MAX;const _t={[zr]:i.ZERO,[Td]:i.ONE,[Ad]:i.SRC_COLOR,[xl]:i.SRC_ALPHA,[Dd]:i.SRC_ALPHA_SATURATE,[yl]:i.DST_COLOR,[Ml]:i.DST_ALPHA,[Cd]:i.ONE_MINUS_SRC_COLOR,[_l]:i.ONE_MINUS_SRC_ALPHA,[Pd]:i.ONE_MINUS_DST_COLOR,[Rd]:i.ONE_MINUS_DST_ALPHA,[Ld]:i.CONSTANT_COLOR,[Id]:i.ONE_MINUS_CONSTANT_COLOR,[Ud]:i.CONSTANT_ALPHA,[Nd]:i.ONE_MINUS_CONSTANT_ALPHA};function B(q,zt,lt,xt,Bt,Gt,ue,Fe,ke,we){if(q===pn){M===!0&&(Ct(i.BLEND),M=!1);return}if(M===!1&&(it(i.BLEND),M=!0),q!==Wh){if(q!==m||we!==v){if((d!==oi||x!==oi)&&(i.blendEquation(i.FUNC_ADD),d=oi,x=oi),we)switch(q){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mi:i.blendFunc(i.ONE,i.ONE);break;case su:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case su:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ru:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}y=null,b=null,R=null,T=null,E.set(0,0,0),A=0,m=q,v=we}return}Bt=Bt||zt,Gt=Gt||lt,ue=ue||xt,(zt!==d||Bt!==x)&&(i.blendEquationSeparate(dt[zt],dt[Bt]),d=zt,x=Bt),(lt!==y||xt!==b||Gt!==R||ue!==T)&&(i.blendFuncSeparate(_t[lt],_t[xt],_t[Gt],_t[ue]),y=lt,b=xt,R=Gt,T=ue),(Fe.equals(E)===!1||ke!==A)&&(i.blendColor(Fe.r,Fe.g,Fe.b,ke),E.copy(Fe),A=ke),m=q,v=!1}function qt(q,zt){q.side===Ke?Ct(i.CULL_FACE):it(i.CULL_FACE);let lt=q.side===Pn;zt&&(lt=!lt),yt(lt),q.blending===es&&q.transparent===!1?B(pn):B(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),r.setMask(q.colorWrite);const xt=q.stencilWrite;o.setTest(xt),xt&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ee(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(q){_!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),_=q)}function Ot(q){q!==Md?(it(i.CULL_FACE),q!==w&&(q===iu?i.cullFace(i.BACK):q===yd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),w=q}function It(q){q!==L&&(k&&i.lineWidth(q),L=q)}function ee(q,zt,lt){q?(it(i.POLYGON_OFFSET_FILL),(O!==zt||D!==lt)&&(i.polygonOffset(zt,lt),O=zt,D=lt)):Ct(i.POLYGON_OFFSET_FILL)}function Y(q){q?it(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function C(q){q===void 0&&(q=i.TEXTURE0+z-1),$!==q&&(i.activeTexture(q),$=q)}function S(q,zt,lt){lt===void 0&&($===null?lt=i.TEXTURE0+z-1:lt=$);let xt=J[lt];xt===void 0&&(xt={type:void 0,texture:void 0},J[lt]=xt),(xt.type!==q||xt.texture!==zt)&&($!==lt&&(i.activeTexture(lt),$=lt),i.bindTexture(q,zt||ht[q]),xt.type=q,xt.texture=zt)}function X(){const q=J[$];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ft(){try{i.texSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function bt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function re(){try{i.texStorage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function St(){try{i.texStorage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Yt(){try{i.texImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ae(){try{i.texImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function le(q){kt.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),kt.copy(q))}function Zt(q){H.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),H.copy(q))}function ye(q,zt){let lt=c.get(zt);lt===void 0&&(lt=new WeakMap,c.set(zt,lt));let xt=lt.get(q);xt===void 0&&(xt=i.getUniformBlockIndex(zt,q.name),lt.set(q,xt))}function ce(q,zt){const xt=c.get(zt).get(q);l.get(zt)!==xt&&(i.uniformBlockBinding(zt,xt,q.__bindingPointIndex),l.set(zt,xt))}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},$=null,J={},u={},f=new WeakMap,p=[],g=null,M=!1,m=null,d=null,y=null,b=null,x=null,R=null,T=null,E=new Pt(0,0,0),A=0,v=!1,_=null,w=null,L=null,O=null,D=null,kt.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:Ct,bindFramebuffer:Dt,drawBuffers:Ut,useProgram:Wt,setBlending:B,setMaterial:qt,setFlipSided:yt,setCullFace:Ot,setLineWidth:It,setPolygonOffset:ee,setScissorTest:Y,activeTexture:C,bindTexture:S,unbindTexture:X,compressedTexImage2D:tt,compressedTexImage3D:st,texImage2D:Yt,texImage3D:ae,updateUBOMapping:ye,uniformBlockBinding:ce,texStorage2D:re,texStorage3D:St,texSubImage2D:rt,texSubImage3D:Ft,compressedTexSubImage2D:bt,compressedTexSubImage3D:Lt,scissor:le,viewport:Zt,reset:be}}function eh(i,t,e,n){const s=hx(n);switch(e){case tf:return i*t;case nf:return i*t;case sf:return i*t*2;case fo:return i*t/s.components*s.byteLength;case Cc:return i*t/s.components*s.byteLength;case rf:return i*t*2/s.components*s.byteLength;case Rc:return i*t*2/s.components*s.byteLength;case ef:return i*t*3/s.components*s.byteLength;case jn:return i*t*4/s.components*s.byteLength;case Pc:return i*t*4/s.components*s.byteLength;case ja:case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ka:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Il:case Nl:return Math.max(i,16)*Math.max(t,8)/4;case Ll:case Ul:return Math.max(i,8)*Math.max(t,8)/2;case zl:case Fl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ql:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case $l:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case jl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Kl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Jl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qa:case Ql:case tc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case af:case ec:return Math.ceil(i/4)*Math.ceil(t/4)*8;case nc:case ic:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hx(i){switch(i){case Si:case Kh:return{byteLength:1,components:1};case Zr:case Jh:case Zn:return{byteLength:2,components:1};case Tc:case Ac:return{byteLength:2,components:4};case Es:case Ec:case fi:return{byteLength:4,components:1};case Qh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function fx(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return p?new OffscreenCanvas(C,S):ao("canvas")}function M(C,S,X){let tt=1;const st=Y(C);if((st.width>X||st.height>X)&&(tt=X/Math.max(st.width,st.height)),tt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const rt=Math.floor(tt*st.width),Ft=Math.floor(tt*st.height);u===void 0&&(u=g(rt,Ft));const bt=S?g(rt,Ft):u;return bt.width=rt,bt.height=Ft,bt.getContext("2d").drawImage(C,0,0,rt,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+rt+"x"+Ft+")."),bt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),C;return C}function m(C){return C.generateMipmaps}function d(C){i.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(C,S,X,tt,st=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let rt=S;if(S===i.RED&&(X===i.FLOAT&&(rt=i.R32F),X===i.HALF_FLOAT&&(rt=i.R16F),X===i.UNSIGNED_BYTE&&(rt=i.R8)),S===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.R8UI),X===i.UNSIGNED_SHORT&&(rt=i.R16UI),X===i.UNSIGNED_INT&&(rt=i.R32UI),X===i.BYTE&&(rt=i.R8I),X===i.SHORT&&(rt=i.R16I),X===i.INT&&(rt=i.R32I)),S===i.RG&&(X===i.FLOAT&&(rt=i.RG32F),X===i.HALF_FLOAT&&(rt=i.RG16F),X===i.UNSIGNED_BYTE&&(rt=i.RG8)),S===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.RG8UI),X===i.UNSIGNED_SHORT&&(rt=i.RG16UI),X===i.UNSIGNED_INT&&(rt=i.RG32UI),X===i.BYTE&&(rt=i.RG8I),X===i.SHORT&&(rt=i.RG16I),X===i.INT&&(rt=i.RG32I)),S===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),X===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),X===i.UNSIGNED_INT&&(rt=i.RGB32UI),X===i.BYTE&&(rt=i.RGB8I),X===i.SHORT&&(rt=i.RGB16I),X===i.INT&&(rt=i.RGB32I)),S===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),X===i.UNSIGNED_INT&&(rt=i.RGBA32UI),X===i.BYTE&&(rt=i.RGBA8I),X===i.SHORT&&(rt=i.RGBA16I),X===i.INT&&(rt=i.RGBA32I)),S===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),S===i.RGBA){const Ft=st?po:De.getTransfer(tt);X===i.FLOAT&&(rt=i.RGBA32F),X===i.HALF_FLOAT&&(rt=i.RGBA16F),X===i.UNSIGNED_BYTE&&(rt=Ft===Oe?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function x(C,S){let X;return C?S===null||S===Es||S===Ts?X=i.DEPTH24_STENCIL8:S===fi?X=i.DEPTH32F_STENCIL8:S===Zr&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Es||S===Ts?X=i.DEPTH_COMPONENT24:S===fi?X=i.DEPTH_COMPONENT32F:S===Zr&&(X=i.DEPTH_COMPONENT16),X}function R(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==vn&&C.minFilter!==Mi?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function T(C){const S=C.target;S.removeEventListener("dispose",T),A(S),S.isVideoTexture&&h.delete(S)}function E(C){const S=C.target;S.removeEventListener("dispose",E),_(S)}function A(C){const S=n.get(C);if(S.__webglInit===void 0)return;const X=C.source,tt=f.get(X);if(tt){const st=tt[S.__cacheKey];st.usedTimes--,st.usedTimes===0&&v(C),Object.keys(tt).length===0&&f.delete(X)}n.remove(C)}function v(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const X=C.source,tt=f.get(X);delete tt[S.__cacheKey],a.memory.textures--}function _(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(S.__webglFramebuffer[tt]))for(let st=0;st<S.__webglFramebuffer[tt].length;st++)i.deleteFramebuffer(S.__webglFramebuffer[tt][st]);else i.deleteFramebuffer(S.__webglFramebuffer[tt]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[tt])}else{if(Array.isArray(S.__webglFramebuffer))for(let tt=0;tt<S.__webglFramebuffer.length;tt++)i.deleteFramebuffer(S.__webglFramebuffer[tt]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let tt=0;tt<S.__webglColorRenderbuffer.length;tt++)S.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[tt]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const X=C.textures;for(let tt=0,st=X.length;tt<st;tt++){const rt=n.get(X[tt]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(X[tt])}n.remove(C)}let w=0;function L(){w=0}function O(){const C=w;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),w+=1,C}function D(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function z(C,S){const X=n.get(C);if(C.isVideoTexture&&It(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const tt=C.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(X,C,S);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+S)}function k(C,S){const X=n.get(C);if(C.version>0&&X.__version!==C.version){H(X,C,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+S)}function W(C,S){const X=n.get(C);if(C.version>0&&X.__version!==C.version){H(X,C,S);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+S)}function V(C,S){const X=n.get(C);if(C.version>0&&X.__version!==C.version){Z(X,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+S)}const $={[bi]:i.REPEAT,[gs]:i.CLAMP_TO_EDGE,[Dl]:i.MIRRORED_REPEAT},J={[vn]:i.NEAREST,[kd]:i.NEAREST_MIPMAP_NEAREST,[da]:i.NEAREST_MIPMAP_LINEAR,[Mi]:i.LINEAR,[Co]:i.LINEAR_MIPMAP_NEAREST,[vs]:i.LINEAR_MIPMAP_LINEAR},at={[Hd]:i.NEVER,[jd]:i.ALWAYS,[Wd]:i.LESS,[of]:i.LEQUAL,[Xd]:i.EQUAL,[$d]:i.GEQUAL,[qd]:i.GREATER,[Yd]:i.NOTEQUAL};function Tt(C,S){if(S.type===fi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Mi||S.magFilter===Co||S.magFilter===da||S.magFilter===vs||S.minFilter===Mi||S.minFilter===Co||S.minFilter===da||S.minFilter===vs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,$[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,$[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,$[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,J[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,J[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,at[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===vn||S.minFilter!==da&&S.minFilter!==vs||S.type===fi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function kt(C,S){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",T));const tt=S.source;let st=f.get(tt);st===void 0&&(st={},f.set(tt,st));const rt=D(S);if(rt!==C.__cacheKey){st[rt]===void 0&&(st[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),st[rt].usedTimes++;const Ft=st[C.__cacheKey];Ft!==void 0&&(st[C.__cacheKey].usedTimes--,Ft.usedTimes===0&&v(S)),C.__cacheKey=rt,C.__webglTexture=st[rt].texture}return X}function H(C,S,X){let tt=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(tt=i.TEXTURE_3D);const st=kt(C,S),rt=S.source;e.bindTexture(tt,C.__webglTexture,i.TEXTURE0+X);const Ft=n.get(rt);if(rt.version!==Ft.__version||st===!0){e.activeTexture(i.TEXTURE0+X);const bt=De.getPrimaries(De.workingColorSpace),Lt=S.colorSpace===Ki?null:De.getPrimaries(S.colorSpace),re=S.colorSpace===Ki||bt===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let St=M(S.image,!1,s.maxTextureSize);St=ee(S,St);const Yt=r.convert(S.format,S.colorSpace),ae=r.convert(S.type);let le=b(S.internalFormat,Yt,ae,S.colorSpace,S.isVideoTexture);Tt(tt,S);let Zt;const ye=S.mipmaps,ce=S.isVideoTexture!==!0,be=Ft.__version===void 0||st===!0,q=rt.dataReady,zt=R(S,St);if(S.isDepthTexture)le=x(S.format===As,S.type),be&&(ce?e.texStorage2D(i.TEXTURE_2D,1,le,St.width,St.height):e.texImage2D(i.TEXTURE_2D,0,le,St.width,St.height,0,Yt,ae,null));else if(S.isDataTexture)if(ye.length>0){ce&&be&&e.texStorage2D(i.TEXTURE_2D,zt,le,ye[0].width,ye[0].height);for(let lt=0,xt=ye.length;lt<xt;lt++)Zt=ye[lt],ce?q&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Zt.width,Zt.height,Yt,ae,Zt.data):e.texImage2D(i.TEXTURE_2D,lt,le,Zt.width,Zt.height,0,Yt,ae,Zt.data);S.generateMipmaps=!1}else ce?(be&&e.texStorage2D(i.TEXTURE_2D,zt,le,St.width,St.height),q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St.width,St.height,Yt,ae,St.data)):e.texImage2D(i.TEXTURE_2D,0,le,St.width,St.height,0,Yt,ae,St.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ce&&be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,le,ye[0].width,ye[0].height,St.depth);for(let lt=0,xt=ye.length;lt<xt;lt++)if(Zt=ye[lt],S.format!==jn)if(Yt!==null)if(ce){if(q)if(S.layerUpdates.size>0){const Bt=eh(Zt.width,Zt.height,S.format,S.type);for(const Gt of S.layerUpdates){const ue=Zt.data.subarray(Gt*Bt/Zt.data.BYTES_PER_ELEMENT,(Gt+1)*Bt/Zt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,Gt,Zt.width,Zt.height,1,Yt,ue)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Zt.width,Zt.height,St.depth,Yt,Zt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,le,Zt.width,Zt.height,St.depth,0,Zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Zt.width,Zt.height,St.depth,Yt,ae,Zt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,le,Zt.width,Zt.height,St.depth,0,Yt,ae,Zt.data)}else{ce&&be&&e.texStorage2D(i.TEXTURE_2D,zt,le,ye[0].width,ye[0].height);for(let lt=0,xt=ye.length;lt<xt;lt++)Zt=ye[lt],S.format!==jn?Yt!==null?ce?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,Zt.width,Zt.height,Yt,Zt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,le,Zt.width,Zt.height,0,Zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?q&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Zt.width,Zt.height,Yt,ae,Zt.data):e.texImage2D(i.TEXTURE_2D,lt,le,Zt.width,Zt.height,0,Yt,ae,Zt.data)}else if(S.isDataArrayTexture)if(ce){if(be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,le,St.width,St.height,St.depth),q)if(S.layerUpdates.size>0){const lt=eh(St.width,St.height,S.format,S.type);for(const xt of S.layerUpdates){const Bt=St.data.subarray(xt*lt/St.data.BYTES_PER_ELEMENT,(xt+1)*lt/St.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xt,St.width,St.height,1,Yt,ae,Bt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Yt,ae,St.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,le,St.width,St.height,St.depth,0,Yt,ae,St.data);else if(S.isData3DTexture)ce?(be&&e.texStorage3D(i.TEXTURE_3D,zt,le,St.width,St.height,St.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Yt,ae,St.data)):e.texImage3D(i.TEXTURE_3D,0,le,St.width,St.height,St.depth,0,Yt,ae,St.data);else if(S.isFramebufferTexture){if(be)if(ce)e.texStorage2D(i.TEXTURE_2D,zt,le,St.width,St.height);else{let lt=St.width,xt=St.height;for(let Bt=0;Bt<zt;Bt++)e.texImage2D(i.TEXTURE_2D,Bt,le,lt,xt,0,Yt,ae,null),lt>>=1,xt>>=1}}else if(ye.length>0){if(ce&&be){const lt=Y(ye[0]);e.texStorage2D(i.TEXTURE_2D,zt,le,lt.width,lt.height)}for(let lt=0,xt=ye.length;lt<xt;lt++)Zt=ye[lt],ce?q&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Yt,ae,Zt):e.texImage2D(i.TEXTURE_2D,lt,le,Yt,ae,Zt);S.generateMipmaps=!1}else if(ce){if(be){const lt=Y(St);e.texStorage2D(i.TEXTURE_2D,zt,le,lt.width,lt.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Yt,ae,St)}else e.texImage2D(i.TEXTURE_2D,0,le,Yt,ae,St);m(S)&&d(tt),Ft.__version=rt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Z(C,S,X){if(S.image.length!==6)return;const tt=kt(C,S),st=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+X);const rt=n.get(st);if(st.version!==rt.__version||tt===!0){e.activeTexture(i.TEXTURE0+X);const Ft=De.getPrimaries(De.workingColorSpace),bt=S.colorSpace===Ki?null:De.getPrimaries(S.colorSpace),Lt=S.colorSpace===Ki||Ft===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const re=S.isCompressedTexture||S.image[0].isCompressedTexture,St=S.image[0]&&S.image[0].isDataTexture,Yt=[];for(let xt=0;xt<6;xt++)!re&&!St?Yt[xt]=M(S.image[xt],!0,s.maxCubemapSize):Yt[xt]=St?S.image[xt].image:S.image[xt],Yt[xt]=ee(S,Yt[xt]);const ae=Yt[0],le=r.convert(S.format,S.colorSpace),Zt=r.convert(S.type),ye=b(S.internalFormat,le,Zt,S.colorSpace),ce=S.isVideoTexture!==!0,be=rt.__version===void 0||tt===!0,q=st.dataReady;let zt=R(S,ae);Tt(i.TEXTURE_CUBE_MAP,S);let lt;if(re){ce&&be&&e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,ye,ae.width,ae.height);for(let xt=0;xt<6;xt++){lt=Yt[xt].mipmaps;for(let Bt=0;Bt<lt.length;Bt++){const Gt=lt[Bt];S.format!==jn?le!==null?ce?q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt,0,0,Gt.width,Gt.height,le,Gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt,ye,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt,0,0,Gt.width,Gt.height,le,Zt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt,ye,Gt.width,Gt.height,0,le,Zt,Gt.data)}}}else{if(lt=S.mipmaps,ce&&be){lt.length>0&&zt++;const xt=Y(Yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,ye,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(St){ce?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Yt[xt].width,Yt[xt].height,le,Zt,Yt[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ye,Yt[xt].width,Yt[xt].height,0,le,Zt,Yt[xt].data);for(let Bt=0;Bt<lt.length;Bt++){const ue=lt[Bt].image[xt].image;ce?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt+1,0,0,ue.width,ue.height,le,Zt,ue.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt+1,ye,ue.width,ue.height,0,le,Zt,ue.data)}}else{ce?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,le,Zt,Yt[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ye,le,Zt,Yt[xt]);for(let Bt=0;Bt<lt.length;Bt++){const Gt=lt[Bt];ce?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt+1,0,0,le,Zt,Gt.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt+1,ye,le,Zt,Gt.image[xt])}}}m(S)&&d(i.TEXTURE_CUBE_MAP),rt.__version=st.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ht(C,S,X,tt,st,rt){const Ft=r.convert(X.format,X.colorSpace),bt=r.convert(X.type),Lt=b(X.internalFormat,Ft,bt,X.colorSpace),re=n.get(S),St=n.get(X);if(St.__renderTarget=S,!re.__hasExternalTextures){const Yt=Math.max(1,S.width>>rt),ae=Math.max(1,S.height>>rt);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,rt,Lt,Yt,ae,S.depth,0,Ft,bt,null):e.texImage2D(st,rt,Lt,Yt,ae,0,Ft,bt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Ot(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,st,St.__webglTexture,0,yt(S)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,st,St.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(C,S,X){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const tt=S.depthTexture,st=tt&&tt.isDepthTexture?tt.type:null,rt=x(S.stencilBuffer,st),Ft=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=yt(S);Ot(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,rt,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,rt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,rt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,C)}else{const tt=S.textures;for(let st=0;st<tt.length;st++){const rt=tt[st],Ft=r.convert(rt.format,rt.colorSpace),bt=r.convert(rt.type),Lt=b(rt.internalFormat,Ft,bt,rt.colorSpace),re=yt(S);X&&Ot(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,Lt,S.width,S.height):Ot(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,Lt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(S.depthTexture);tt.__renderTarget=S,(!tt.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);const st=tt.__webglTexture,rt=yt(S);if(S.depthTexture.format===sr)Ot(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(S.depthTexture.format===As)Ot(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Dt(C){const S=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const tt=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),tt){const st=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,tt.removeEventListener("dispose",st)};tt.addEventListener("dispose",st),S.__depthDisposeCallback=st}S.__boundDepthTexture=tt}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Ct(S.__webglFramebuffer,C)}else if(X){S.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[tt]),S.__webglDepthbuffer[tt]===void 0)S.__webglDepthbuffer[tt]=i.createRenderbuffer(),it(S.__webglDepthbuffer[tt],C,!1);else{const st=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=S.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),it(S.__webglDepthbuffer,C,!1);else{const tt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(C,S,X){const tt=n.get(C);S!==void 0&&ht(tt.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Dt(C)}function Wt(C){const S=C.texture,X=n.get(C),tt=n.get(S);C.addEventListener("dispose",E);const st=C.textures,rt=C.isWebGLCubeRenderTarget===!0,Ft=st.length>1;if(Ft||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=S.version,a.memory.textures++),rt){X.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[bt]=[];for(let Lt=0;Lt<S.mipmaps.length;Lt++)X.__webglFramebuffer[bt][Lt]=i.createFramebuffer()}else X.__webglFramebuffer[bt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let bt=0;bt<S.mipmaps.length;bt++)X.__webglFramebuffer[bt]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let bt=0,Lt=st.length;bt<Lt;bt++){const re=n.get(st[bt]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Ot(C)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let bt=0;bt<st.length;bt++){const Lt=st[bt];X.__webglColorRenderbuffer[bt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[bt]);const re=r.convert(Lt.format,Lt.colorSpace),St=r.convert(Lt.type),Yt=b(Lt.internalFormat,re,St,Lt.colorSpace,C.isXRRenderTarget===!0),ae=yt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,Yt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,X.__webglColorRenderbuffer[bt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),it(X.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Tt(i.TEXTURE_CUBE_MAP,S);for(let bt=0;bt<6;bt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Lt=0;Lt<S.mipmaps.length;Lt++)ht(X.__webglFramebuffer[bt][Lt],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Lt);else ht(X.__webglFramebuffer[bt],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);m(S)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let bt=0,Lt=st.length;bt<Lt;bt++){const re=st[bt],St=n.get(re);e.bindTexture(i.TEXTURE_2D,St.__webglTexture),Tt(i.TEXTURE_2D,re),ht(X.__webglFramebuffer,C,re,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,0),m(re)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let bt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(bt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,tt.__webglTexture),Tt(bt,S),S.mipmaps&&S.mipmaps.length>0)for(let Lt=0;Lt<S.mipmaps.length;Lt++)ht(X.__webglFramebuffer[Lt],C,S,i.COLOR_ATTACHMENT0,bt,Lt);else ht(X.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,bt,0);m(S)&&d(bt),e.unbindTexture()}C.depthBuffer&&Dt(C)}function dt(C){const S=C.textures;for(let X=0,tt=S.length;X<tt;X++){const st=S[X];if(m(st)){const rt=y(C),Ft=n.get(st).__webglTexture;e.bindTexture(rt,Ft),d(rt),e.unbindTexture()}}}const _t=[],B=[];function qt(C){if(C.samples>0){if(Ot(C)===!1){const S=C.textures,X=C.width,tt=C.height;let st=i.COLOR_BUFFER_BIT;const rt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=n.get(C),bt=S.length>1;if(bt)for(let Lt=0;Lt<S.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Lt=0;Lt<S.length;Lt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),bt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Lt]);const re=n.get(S[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,X,tt,0,0,X,tt,st,i.NEAREST),l===!0&&(_t.length=0,B.length=0,_t.push(i.COLOR_ATTACHMENT0+Lt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(_t.push(rt),B.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),bt)for(let Lt=0;Lt<S.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Lt]);const re=n.get(S[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,re,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function yt(C){return Math.min(s.maxSamples,C.samples)}function Ot(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function It(C){const S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function ee(C,S){const X=C.colorSpace,tt=C.format,st=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==yr&&X!==Ki&&(De.getTransfer(X)===Oe?(tt!==jn||st!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}function Y(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=L,this.setTexture2D=z,this.setTexture2DArray=k,this.setTexture3D=W,this.setTextureCube=V,this.rebindTextures=Ut,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Ot}function dx(i,t){function e(n,s=Ki){let r;const a=De.getTransfer(s);if(n===Si)return i.UNSIGNED_BYTE;if(n===Tc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ac)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kh)return i.BYTE;if(n===Jh)return i.SHORT;if(n===Zr)return i.UNSIGNED_SHORT;if(n===Ec)return i.INT;if(n===Es)return i.UNSIGNED_INT;if(n===fi)return i.FLOAT;if(n===Zn)return i.HALF_FLOAT;if(n===tf)return i.ALPHA;if(n===ef)return i.RGB;if(n===jn)return i.RGBA;if(n===nf)return i.LUMINANCE;if(n===sf)return i.LUMINANCE_ALPHA;if(n===sr)return i.DEPTH_COMPONENT;if(n===As)return i.DEPTH_STENCIL;if(n===fo)return i.RED;if(n===Cc)return i.RED_INTEGER;if(n===rf)return i.RG;if(n===Rc)return i.RG_INTEGER;if(n===Pc)return i.RGBA_INTEGER;if(n===ja||n===Za||n===Ka||n===Ja)if(a===Oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ll||n===Il||n===Ul||n===Nl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zl||n===Fl||n===Ol)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zl||n===Fl)return a===Oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ol)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kl||n===Bl||n===Gl||n===Vl||n===Hl||n===Wl||n===Xl||n===ql||n===Yl||n===$l||n===jl||n===Zl||n===Kl||n===Jl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ql)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$l)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qa||n===Ql||n===tc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Qa)return a===Oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===af||n===ec||n===nc||n===ic)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class px extends Bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _e extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mx={type:"move"};class el{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,n),d=this._getHandJoint(c,M);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new _e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vx=`
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

}`;class xx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Sn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new $e({vertexShader:gx,fragmentShader:vx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new Kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _x extends br{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const M=new xx,m=e.getContextAttributes();let d=null,y=null;const b=[],x=[],R=new Et;let T=null;const E=new Bn;E.viewport=new Be;const A=new Bn;A.viewport=new Be;const v=[E,A],_=new px;let w=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=b[H];return Z===void 0&&(Z=new el,b[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=b[H];return Z===void 0&&(Z=new el,b[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=b[H];return Z===void 0&&(Z=new el,b[H]=Z),Z.getHandSpace()};function O(H){const Z=x.indexOf(H.inputSource);if(Z===-1)return;const ht=b[Z];ht!==void 0&&(ht.update(H.inputSource,H.frame,c||a),ht.dispatchEvent({type:H.type,data:H.inputSource}))}function D(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",z);for(let H=0;H<b.length;H++){const Z=x[H];Z!==null&&(x[H]=null,b[H].disconnect(Z))}w=null,L=null,M.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,y=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",D),s.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Un(p.framebufferWidth,p.framebufferHeight,{format:jn,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,ht=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=m.stencil?As:sr,ht=m.stencil?Ts:Es);const Ct={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Ct),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Un(f.textureWidth,f.textureHeight,{format:jn,type:Si,depthTexture:new Oc(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function z(H){for(let Z=0;Z<H.removed.length;Z++){const ht=H.removed[Z],it=x.indexOf(ht);it>=0&&(x[it]=null,b[it].disconnect(ht))}for(let Z=0;Z<H.added.length;Z++){const ht=H.added[Z];let it=x.indexOf(ht);if(it===-1){for(let Dt=0;Dt<b.length;Dt++)if(Dt>=x.length){x.push(ht),it=Dt;break}else if(x[Dt]===null){x[Dt]=ht,it=Dt;break}if(it===-1)break}const Ct=b[it];Ct&&Ct.connect(ht)}}const k=new G,W=new G;function V(H,Z,ht){k.setFromMatrixPosition(Z.matrixWorld),W.setFromMatrixPosition(ht.matrixWorld);const it=k.distanceTo(W),Ct=Z.projectionMatrix.elements,Dt=ht.projectionMatrix.elements,Ut=Ct[14]/(Ct[10]-1),Wt=Ct[14]/(Ct[10]+1),dt=(Ct[9]+1)/Ct[5],_t=(Ct[9]-1)/Ct[5],B=(Ct[8]-1)/Ct[0],qt=(Dt[8]+1)/Dt[0],yt=Ut*B,Ot=Ut*qt,It=it/(-B+qt),ee=It*-B;if(Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(ee),H.translateZ(It),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Ct[10]===-1)H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Y=Ut+It,C=Wt+It,S=yt-ee,X=Ot+(it-ee),tt=dt*Wt/C*Y,st=_t*Wt/C*Y;H.projectionMatrix.makePerspective(S,X,tt,st,Y,C),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function $(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let Z=H.near,ht=H.far;M.texture!==null&&(M.depthNear>0&&(Z=M.depthNear),M.depthFar>0&&(ht=M.depthFar)),_.near=A.near=E.near=Z,_.far=A.far=E.far=ht,(w!==_.near||L!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,L=_.far),E.layers.mask=H.layers.mask|2,A.layers.mask=H.layers.mask|4,_.layers.mask=E.layers.mask|A.layers.mask;const it=H.parent,Ct=_.cameras;$(_,it);for(let Dt=0;Dt<Ct.length;Dt++)$(Ct[Dt],it);Ct.length===2?V(_,E,A):_.projectionMatrix.copy(E.projectionMatrix),J(H,_,it)};function J(H,Z,ht){ht===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(ht.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Kr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(_)};let at=null;function Tt(H,Z){if(h=Z.getViewerPose(c||a),g=Z,h!==null){const ht=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let it=!1;ht.length!==_.cameras.length&&(_.cameras.length=0,it=!0);for(let Dt=0;Dt<ht.length;Dt++){const Ut=ht[Dt];let Wt=null;if(p!==null)Wt=p.getViewport(Ut);else{const _t=u.getViewSubImage(f,Ut);Wt=_t.viewport,Dt===0&&(t.setRenderTargetTextures(y,_t.colorTexture,f.ignoreDepthValues?void 0:_t.depthStencilTexture),t.setRenderTarget(y))}let dt=v[Dt];dt===void 0&&(dt=new Bn,dt.layers.enable(Dt),dt.viewport=new Be,v[Dt]=dt),dt.matrix.fromArray(Ut.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(Ut.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),Dt===0&&(_.matrix.copy(dt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),it===!0&&_.cameras.push(dt)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Dt=u.getDepthInformation(ht[0]);Dt&&Dt.isValid&&Dt.texture&&M.init(t,Dt,s.renderState)}}for(let ht=0;ht<b.length;ht++){const it=x[ht],Ct=b[ht];it!==null&&Ct!==void 0&&Ct.update(it,Z,c||a)}at&&at(H,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const kt=new vf;kt.setAnimationLoop(Tt),this.setAnimationLoop=function(H){at=H},this.dispose=function(){}}}const us=new wi,Mx=new Ie;function yx(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,pf(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,b,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),M(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,y,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Pn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Pn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=t.get(d),b=y.envMap,x=y.envMapRotation;b&&(m.envMap.value=b,us.copy(x),us.x*=-1,us.y*=-1,us.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),m.envMapRotation.value.setFromMatrix4(Mx.makeRotationFromEuler(us)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=b*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function M(m,d){const y=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bx(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const x=b.program;n.uniformBlockBinding(y,x)}function c(y,b){let x=s[y.id];x===void 0&&(g(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",m));const R=b.program;n.updateUBOMapping(y,R);const T=t.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function h(y){const b=u();y.__bindingPointIndex=b;const x=i.createBuffer(),R=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,x),x}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const b=s[y.id],x=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,E=x.length;T<E;T++){const A=Array.isArray(x[T])?x[T]:[x[T]];for(let v=0,_=A.length;v<_;v++){const w=A[v];if(p(w,T,v,R)===!0){const L=w.__offset,O=Array.isArray(w.value)?w.value:[w.value];let D=0;for(let z=0;z<O.length;z++){const k=O[z],W=M(k);typeof k=="number"||typeof k=="boolean"?(w.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,L+D,w.__data)):k.isMatrix3?(w.__data[0]=k.elements[0],w.__data[1]=k.elements[1],w.__data[2]=k.elements[2],w.__data[3]=0,w.__data[4]=k.elements[3],w.__data[5]=k.elements[4],w.__data[6]=k.elements[5],w.__data[7]=0,w.__data[8]=k.elements[6],w.__data[9]=k.elements[7],w.__data[10]=k.elements[8],w.__data[11]=0):(k.toArray(w.__data,D),D+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,b,x,R){const T=y.value,E=b+"_"+x;if(R[E]===void 0)return typeof T=="number"||typeof T=="boolean"?R[E]=T:R[E]=T.clone(),!0;{const A=R[E];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return R[E]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function g(y){const b=y.uniforms;let x=0;const R=16;for(let E=0,A=b.length;E<A;E++){const v=Array.isArray(b[E])?b[E]:[b[E]];for(let _=0,w=v.length;_<w;_++){const L=v[_],O=Array.isArray(L.value)?L.value:[L.value];for(let D=0,z=O.length;D<z;D++){const k=O[D],W=M(k),V=x%R,$=V%W.boundary,J=V+$;x+=$,J!==0&&R-J<W.storage&&(x+=R-J),L.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=W.storage}}}const T=x%R;return T>0&&(x+=R-T),y.__size=x,y.__cache={},this}function M(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const x=a.indexOf(b.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Sx{constructor(t={}){const{canvas:e=fp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),M=new Int32Array(4);let m=null,d=null;const y=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=ns,this.toneMappingExposure=1;const x=this;let R=!1,T=0,E=0,A=null,v=-1,_=null;const w=new Be,L=new Be;let O=null;const D=new Pt(0);let z=0,k=e.width,W=e.height,V=1,$=null,J=null;const at=new Be(0,0,k,W),Tt=new Be(0,0,k,W);let kt=!1;const H=new Nc;let Z=!1,ht=!1;const it=new Ie,Ct=new Ie,Dt=new G,Ut=new Be,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function _t(){return A===null?V:1}let B=n;function qt(P,K){return e.getContext(P,K)}try{const P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bc}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Bt,!1),e.addEventListener("webglcontextcreationerror",Gt,!1),B===null){const K="webgl2";if(B=qt(K,P),B===null)throw qt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let yt,Ot,It,ee,Y,C,S,X,tt,st,rt,Ft,bt,Lt,re,St,Yt,ae,le,Zt,ye,ce,be,q;function zt(){yt=new Cg(B),yt.init(),ce=new dx(B,yt),Ot=new bg(B,yt,t,ce),It=new ux(B,yt),Ot.reverseDepthBuffer&&f&&It.buffers.depth.setReversed(!0),ee=new Dg(B),Y=new jv,C=new fx(B,yt,It,Y,Ot,ce,ee),S=new wg(x),X=new Ag(x),tt=new Op(B),be=new Mg(B,tt),st=new Rg(B,tt,ee,be),rt=new Ig(B,st,tt,ee),le=new Lg(B,Ot,C),St=new Sg(Y),Ft=new $v(x,S,X,yt,Ot,be,St),bt=new yx(x,Y),Lt=new Kv,re=new ix(yt),ae=new _g(x,S,X,It,rt,p,l),Yt=new lx(x,rt,Ot),q=new bx(B,ee,Ot,It),Zt=new yg(B,yt,ee),ye=new Pg(B,yt,ee),ee.programs=Ft.programs,x.capabilities=Ot,x.extensions=yt,x.properties=Y,x.renderLists=Lt,x.shadowMap=Yt,x.state=It,x.info=ee}zt();const lt=new _x(x,B);this.xr=lt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const P=yt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=yt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(P){P!==void 0&&(V=P,this.setSize(k,W,!1))},this.getSize=function(P){return P.set(k,W)},this.setSize=function(P,K,ot=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=P,W=K,e.width=Math.floor(P*V),e.height=Math.floor(K*V),ot===!0&&(e.style.width=P+"px",e.style.height=K+"px"),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(k*V,W*V).floor()},this.setDrawingBufferSize=function(P,K,ot){k=P,W=K,V=ot,e.width=Math.floor(P*ot),e.height=Math.floor(K*ot),this.setViewport(0,0,P,K)},this.getCurrentViewport=function(P){return P.copy(w)},this.getViewport=function(P){return P.copy(at)},this.setViewport=function(P,K,ot,ct){P.isVector4?at.set(P.x,P.y,P.z,P.w):at.set(P,K,ot,ct),It.viewport(w.copy(at).multiplyScalar(V).round())},this.getScissor=function(P){return P.copy(Tt)},this.setScissor=function(P,K,ot,ct){P.isVector4?Tt.set(P.x,P.y,P.z,P.w):Tt.set(P,K,ot,ct),It.scissor(L.copy(Tt).multiplyScalar(V).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(P){It.setScissorTest(kt=P)},this.setOpaqueSort=function(P){$=P},this.setTransparentSort=function(P){J=P},this.getClearColor=function(P){return P.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(P=!0,K=!0,ot=!0){let ct=0;if(P){let j=!1;if(A!==null){const Nt=A.texture.format;j=Nt===Pc||Nt===Rc||Nt===Cc}if(j){const Nt=A.texture.type,$t=Nt===Si||Nt===Es||Nt===Zr||Nt===Ts||Nt===Tc||Nt===Ac,ne=ae.getClearColor(),ie=ae.getClearAlpha(),ve=ne.r,I=ne.g,F=ne.b;$t?(g[0]=ve,g[1]=I,g[2]=F,g[3]=ie,B.clearBufferuiv(B.COLOR,0,g)):(M[0]=ve,M[1]=I,M[2]=F,M[3]=ie,B.clearBufferiv(B.COLOR,0,M))}else ct|=B.COLOR_BUFFER_BIT}K&&(ct|=B.DEPTH_BUFFER_BIT),ot&&(ct|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Bt,!1),e.removeEventListener("webglcontextcreationerror",Gt,!1),Lt.dispose(),re.dispose(),Y.dispose(),S.dispose(),X.dispose(),rt.dispose(),be.dispose(),q.dispose(),Ft.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Jn),lt.removeEventListener("sessionend",N),vt.stop()};function xt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const P=ee.autoReset,K=Yt.enabled,ot=Yt.autoUpdate,ct=Yt.needsUpdate,j=Yt.type;zt(),ee.autoReset=P,Yt.enabled=K,Yt.autoUpdate=ot,Yt.needsUpdate=ct,Yt.type=j}function Gt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ue(P){const K=P.target;K.removeEventListener("dispose",ue),Fe(K)}function Fe(P){ke(P),Y.remove(P)}function ke(P){const K=Y.get(P).programs;K!==void 0&&(K.forEach(function(ot){Ft.releaseProgram(ot)}),P.isShaderMaterial&&Ft.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,ot,ct,j,Nt){K===null&&(K=Wt);const $t=j.isMesh&&j.matrixWorld.determinant()<0,ne=rn(P,K,ot,ct,j);It.setMaterial(ct,$t);let ie=ot.index,ve=1;if(ct.wireframe===!0){if(ie=st.getWireframeAttribute(ot),ie===void 0)return;ve=2}const I=ot.drawRange,F=ot.attributes.position;let et=I.start*ve,pt=(I.start+I.count)*ve;Nt!==null&&(et=Math.max(et,Nt.start*ve),pt=Math.min(pt,(Nt.start+Nt.count)*ve)),ie!==null?(et=Math.max(et,0),pt=Math.min(pt,ie.count)):F!=null&&(et=Math.max(et,0),pt=Math.min(pt,F.count));const Mt=pt-et;if(Mt<0||Mt===1/0)return;be.setup(j,ct,ne,ot,ie);let Rt,wt=Zt;if(ie!==null&&(Rt=tt.get(ie),wt=ye,wt.setIndex(Rt)),j.isMesh)ct.wireframe===!0?(It.setLineWidth(ct.wireframeLinewidth*_t()),wt.setMode(B.LINES)):wt.setMode(B.TRIANGLES);else if(j.isLine){let nt=ct.linewidth;nt===void 0&&(nt=1),It.setLineWidth(nt*_t()),j.isLineSegments?wt.setMode(B.LINES):j.isLineLoop?wt.setMode(B.LINE_LOOP):wt.setMode(B.LINE_STRIP)}else j.isPoints?wt.setMode(B.POINTS):j.isSprite&&wt.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)wt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))wt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const nt=j._multiDrawStarts,Xt=j._multiDrawCounts,Vt=j._multiDrawCount,he=ie?tt.get(ie).bytesPerElement:1,Ce=Y.get(ct).currentProgram.getUniforms();for(let Pe=0;Pe<Vt;Pe++)Ce.setValue(B,"_gl_DrawID",Pe),wt.render(nt[Pe]/he,Xt[Pe])}else if(j.isInstancedMesh)wt.renderInstances(et,Mt,j.count);else if(ot.isInstancedBufferGeometry){const nt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Xt=Math.min(ot.instanceCount,nt);wt.renderInstances(et,Mt,Xt)}else wt.render(et,Mt)};function we(P,K,ot){P.transparent===!0&&P.side===Ke&&P.forceSinglePass===!1?(P.side=Pn,P.needsUpdate=!0,se(P,K,ot),P.side=is,P.needsUpdate=!0,se(P,K,ot),P.side=Ke):se(P,K,ot)}this.compile=function(P,K,ot=null){ot===null&&(ot=P),d=re.get(ot),d.init(K),b.push(d),ot.traverseVisible(function(j){j.isLight&&j.layers.test(K.layers)&&(d.pushLight(j),j.castShadow&&d.pushShadow(j))}),P!==ot&&P.traverseVisible(function(j){j.isLight&&j.layers.test(K.layers)&&(d.pushLight(j),j.castShadow&&d.pushShadow(j))}),d.setupLights();const ct=new Set;return P.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Nt=j.material;if(Nt)if(Array.isArray(Nt))for(let $t=0;$t<Nt.length;$t++){const ne=Nt[$t];we(ne,ot,j),ct.add(ne)}else we(Nt,ot,j),ct.add(Nt)}),b.pop(),d=null,ct},this.compileAsync=function(P,K,ot=null){const ct=this.compile(P,K,ot);return new Promise(j=>{function Nt(){if(ct.forEach(function($t){Y.get($t).currentProgram.isReady()&&ct.delete($t)}),ct.size===0){j(P);return}setTimeout(Nt,10)}yt.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let xn=null;function dn(P){xn&&xn(P)}function Jn(){vt.stop()}function N(){vt.start()}const vt=new vf;vt.setAnimationLoop(dn),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(P){xn=P,lt.setAnimationLoop(P),P===null?vt.stop():vt.start()},lt.addEventListener("sessionstart",Jn),lt.addEventListener("sessionend",N),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(K),K=lt.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,K,A),d=re.get(P,b.length),d.init(K),b.push(d),Ct.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H.setFromProjectionMatrix(Ct),ht=this.localClippingEnabled,Z=St.init(this.clippingPlanes,ht),m=Lt.get(P,y.length),m.init(),y.push(m),lt.enabled===!0&&lt.isPresenting===!0){const Nt=x.xr.getDepthSensingMesh();Nt!==null&&ut(Nt,K,-1/0,x.sortObjects)}ut(P,K,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort($,J),dt=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,dt&&ae.addToRenderList(m,P),this.info.render.frame++,Z===!0&&St.beginShadows();const ot=d.state.shadowsArray;Yt.render(ot,P,K),Z===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=m.opaque,j=m.transmissive;if(d.setupLights(),K.isArrayCamera){const Nt=K.cameras;if(j.length>0)for(let $t=0,ne=Nt.length;$t<ne;$t++){const ie=Nt[$t];te(ct,j,P,ie)}dt&&ae.render(P);for(let $t=0,ne=Nt.length;$t<ne;$t++){const ie=Nt[$t];Kt(m,P,ie,ie.viewport)}}else j.length>0&&te(ct,j,P,K),dt&&ae.render(P),Kt(m,P,K);A!==null&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),P.isScene===!0&&P.onAfterRender(x,P,K),be.resetDefaultState(),v=-1,_=null,b.pop(),b.length>0?(d=b[b.length-1],Z===!0&&St.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function ut(P,K,ot,ct){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)ot=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLight)d.pushLight(P),P.castShadow&&d.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||H.intersectsSprite(P)){ct&&Ut.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ct);const $t=rt.update(P),ne=P.material;ne.visible&&m.push(P,$t,ne,ot,Ut.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||H.intersectsObject(P))){const $t=rt.update(P),ne=P.material;if(ct&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ut.copy(P.boundingSphere.center)):($t.boundingSphere===null&&$t.computeBoundingSphere(),Ut.copy($t.boundingSphere.center)),Ut.applyMatrix4(P.matrixWorld).applyMatrix4(Ct)),Array.isArray(ne)){const ie=$t.groups;for(let ve=0,I=ie.length;ve<I;ve++){const F=ie[ve],et=ne[F.materialIndex];et&&et.visible&&m.push(P,$t,et,ot,Ut.z,F)}}else ne.visible&&m.push(P,$t,ne,ot,Ut.z,null)}}const Nt=P.children;for(let $t=0,ne=Nt.length;$t<ne;$t++)ut(Nt[$t],K,ot,ct)}function Kt(P,K,ot,ct){const j=P.opaque,Nt=P.transmissive,$t=P.transparent;d.setupLightsView(ot),Z===!0&&St.setGlobalState(x.clippingPlanes,ot),ct&&It.viewport(w.copy(ct)),j.length>0&&At(j,K,ot),Nt.length>0&&At(Nt,K,ot),$t.length>0&&At($t,K,ot),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function te(P,K,ot,ct){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ct.id]===void 0&&(d.state.transmissionRenderTarget[ct.id]=new Un(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float")?Zn:Si,minFilter:vs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const Nt=d.state.transmissionRenderTarget[ct.id],$t=ct.viewport||w;Nt.setSize($t.z,$t.w);const ne=x.getRenderTarget();x.setRenderTarget(Nt),x.getClearColor(D),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),dt&&ae.render(ot);const ie=x.toneMapping;x.toneMapping=ns;const ve=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),d.setupLightsView(ct),Z===!0&&St.setGlobalState(x.clippingPlanes,ct),At(P,ot,ct),C.updateMultisampleRenderTarget(Nt),C.updateRenderTargetMipmap(Nt),yt.has("WEBGL_multisampled_render_to_texture")===!1){let I=!1;for(let F=0,et=K.length;F<et;F++){const pt=K[F],Mt=pt.object,Rt=pt.geometry,wt=pt.material,nt=pt.group;if(wt.side===Ke&&Mt.layers.test(ct.layers)){const Xt=wt.side;wt.side=Pn,wt.needsUpdate=!0,Jt(Mt,ot,ct,Rt,wt,nt),wt.side=Xt,wt.needsUpdate=!0,I=!0}}I===!0&&(C.updateMultisampleRenderTarget(Nt),C.updateRenderTargetMipmap(Nt))}x.setRenderTarget(ne),x.setClearColor(D,z),ve!==void 0&&(ct.viewport=ve),x.toneMapping=ie}function At(P,K,ot){const ct=K.isScene===!0?K.overrideMaterial:null;for(let j=0,Nt=P.length;j<Nt;j++){const $t=P[j],ne=$t.object,ie=$t.geometry,ve=ct===null?$t.material:ct,I=$t.group;ne.layers.test(ot.layers)&&Jt(ne,K,ot,ie,ve,I)}}function Jt(P,K,ot,ct,j,Nt){P.onBeforeRender(x,K,ot,ct,j,Nt),P.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),j.onBeforeRender(x,K,ot,ct,P,Nt),j.transparent===!0&&j.side===Ke&&j.forceSinglePass===!1?(j.side=Pn,j.needsUpdate=!0,x.renderBufferDirect(ot,K,ct,j,P,Nt),j.side=is,j.needsUpdate=!0,x.renderBufferDirect(ot,K,ct,j,P,Nt),j.side=Ke):x.renderBufferDirect(ot,K,ct,j,P,Nt),P.onAfterRender(x,K,ot,ct,j,Nt)}function se(P,K,ot){K.isScene!==!0&&(K=Wt);const ct=Y.get(P),j=d.state.lights,Nt=d.state.shadowsArray,$t=j.state.version,ne=Ft.getParameters(P,j.state,Nt,K,ot),ie=Ft.getProgramCacheKey(ne);let ve=ct.programs;ct.environment=P.isMeshStandardMaterial?K.environment:null,ct.fog=K.fog,ct.envMap=(P.isMeshStandardMaterial?X:S).get(P.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&P.envMap===null?K.environmentRotation:P.envMapRotation,ve===void 0&&(P.addEventListener("dispose",ue),ve=new Map,ct.programs=ve);let I=ve.get(ie);if(I!==void 0){if(ct.currentProgram===I&&ct.lightsStateVersion===$t)return Ee(P,ne),I}else ne.uniforms=Ft.getUniforms(P),P.onBeforeCompile(ne,x),I=Ft.acquireProgram(ne,ie),ve.set(ie,I),ct.uniforms=ne.uniforms;const F=ct.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(F.clippingPlanes=St.uniform),Ee(P,ne),ct.needsLights=Qn(P),ct.lightsStateVersion=$t,ct.needsLights&&(F.ambientLightColor.value=j.state.ambient,F.lightProbe.value=j.state.probe,F.directionalLights.value=j.state.directional,F.directionalLightShadows.value=j.state.directionalShadow,F.spotLights.value=j.state.spot,F.spotLightShadows.value=j.state.spotShadow,F.rectAreaLights.value=j.state.rectArea,F.ltc_1.value=j.state.rectAreaLTC1,F.ltc_2.value=j.state.rectAreaLTC2,F.pointLights.value=j.state.point,F.pointLightShadows.value=j.state.pointShadow,F.hemisphereLights.value=j.state.hemi,F.directionalShadowMap.value=j.state.directionalShadowMap,F.directionalShadowMatrix.value=j.state.directionalShadowMatrix,F.spotShadowMap.value=j.state.spotShadowMap,F.spotLightMatrix.value=j.state.spotLightMatrix,F.spotLightMap.value=j.state.spotLightMap,F.pointShadowMap.value=j.state.pointShadowMap,F.pointShadowMatrix.value=j.state.pointShadowMatrix),ct.currentProgram=I,ct.uniformsList=null,I}function ge(P){if(P.uniformsList===null){const K=P.currentProgram.getUniforms();P.uniformsList=to.seqWithValue(K.seq,P.uniforms)}return P.uniformsList}function Ee(P,K){const ot=Y.get(P);ot.outputColorSpace=K.outputColorSpace,ot.batching=K.batching,ot.batchingColor=K.batchingColor,ot.instancing=K.instancing,ot.instancingColor=K.instancingColor,ot.instancingMorph=K.instancingMorph,ot.skinning=K.skinning,ot.morphTargets=K.morphTargets,ot.morphNormals=K.morphNormals,ot.morphColors=K.morphColors,ot.morphTargetsCount=K.morphTargetsCount,ot.numClippingPlanes=K.numClippingPlanes,ot.numIntersection=K.numClipIntersection,ot.vertexAlphas=K.vertexAlphas,ot.vertexTangents=K.vertexTangents,ot.toneMapping=K.toneMapping}function rn(P,K,ot,ct,j){K.isScene!==!0&&(K=Wt),C.resetTextureUnits();const Nt=K.fog,$t=ct.isMeshStandardMaterial?K.environment:null,ne=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:yr,ie=(ct.isMeshStandardMaterial?X:S).get(ct.envMap||$t),ve=ct.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,I=!!ot.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),F=!!ot.morphAttributes.position,et=!!ot.morphAttributes.normal,pt=!!ot.morphAttributes.color;let Mt=ns;ct.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Mt=x.toneMapping);const Rt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,wt=Rt!==void 0?Rt.length:0,nt=Y.get(ct),Xt=d.state.lights;if(Z===!0&&(ht===!0||P!==_)){const Mn=P===_&&ct.id===v;St.setState(ct,P,Mn)}let Vt=!1;ct.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Xt.state.version||nt.outputColorSpace!==ne||j.isBatchedMesh&&nt.batching===!1||!j.isBatchedMesh&&nt.batching===!0||j.isBatchedMesh&&nt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&nt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&nt.instancing===!1||!j.isInstancedMesh&&nt.instancing===!0||j.isSkinnedMesh&&nt.skinning===!1||!j.isSkinnedMesh&&nt.skinning===!0||j.isInstancedMesh&&nt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&nt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&nt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&nt.instancingMorph===!1&&j.morphTexture!==null||nt.envMap!==ie||ct.fog===!0&&nt.fog!==Nt||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==St.numPlanes||nt.numIntersection!==St.numIntersection)||nt.vertexAlphas!==ve||nt.vertexTangents!==I||nt.morphTargets!==F||nt.morphNormals!==et||nt.morphColors!==pt||nt.toneMapping!==Mt||nt.morphTargetsCount!==wt)&&(Vt=!0):(Vt=!0,nt.__version=ct.version);let he=nt.currentProgram;Vt===!0&&(he=se(ct,K,j));let Ce=!1,Pe=!1,Ti=!1;const Re=he.getUniforms(),_n=nt.uniforms;if(It.useProgram(he.program)&&(Ce=!0,Pe=!0,Ti=!0),ct.id!==v&&(v=ct.id,Pe=!0),Ce||_!==P){It.buffers.depth.getReversed()?(it.copy(P.projectionMatrix),pp(it),mp(it),Re.setValue(B,"projectionMatrix",it)):Re.setValue(B,"projectionMatrix",P.projectionMatrix),Re.setValue(B,"viewMatrix",P.matrixWorldInverse);const Nn=Re.map.cameraPosition;Nn!==void 0&&Nn.setValue(B,Dt.setFromMatrixPosition(P.matrixWorld)),Ot.logarithmicDepthBuffer&&Re.setValue(B,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Re.setValue(B,"isOrthographic",P.isOrthographicCamera===!0),_!==P&&(_=P,Pe=!0,Ti=!0)}if(j.isSkinnedMesh){Re.setOptional(B,j,"bindMatrix"),Re.setOptional(B,j,"bindMatrixInverse");const Mn=j.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Re.setValue(B,"boneTexture",Mn.boneTexture,C))}j.isBatchedMesh&&(Re.setOptional(B,j,"batchingTexture"),Re.setValue(B,"batchingTexture",j._matricesTexture,C),Re.setOptional(B,j,"batchingIdTexture"),Re.setValue(B,"batchingIdTexture",j._indirectTexture,C),Re.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&Re.setValue(B,"batchingColorTexture",j._colorsTexture,C));const ti=ot.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&le.update(j,ot,he),(Pe||nt.receiveShadow!==j.receiveShadow)&&(nt.receiveShadow=j.receiveShadow,Re.setValue(B,"receiveShadow",j.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(_n.envMap.value=ie,_n.flipEnvMap.value=ie.isCubeTexture&&ie.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&K.environment!==null&&(_n.envMapIntensity.value=K.environmentIntensity),Pe&&(Re.setValue(B,"toneMappingExposure",x.toneMappingExposure),nt.needsLights&&Xn(_n,Ti),Nt&&ct.fog===!0&&bt.refreshFogUniforms(_n,Nt),bt.refreshMaterialUniforms(_n,ct,V,W,d.state.transmissionRenderTarget[P.id]),to.upload(B,ge(nt),_n,C)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(to.upload(B,ge(nt),_n,C),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Re.setValue(B,"center",j.center),Re.setValue(B,"modelViewMatrix",j.modelViewMatrix),Re.setValue(B,"normalMatrix",j.normalMatrix),Re.setValue(B,"modelMatrix",j.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const Mn=ct.uniformsGroups;for(let Nn=0,zn=Mn.length;Nn<zn;Nn++){const Vi=Mn[Nn];q.update(Vi,he),q.bind(Vi,he)}}return he}function Xn(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function Qn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(P,K,ot){Y.get(P.texture).__webglTexture=K,Y.get(P.depthTexture).__webglTexture=ot;const ct=Y.get(P);ct.__hasExternalTextures=!0,ct.__autoAllocateDepthBuffer=ot===void 0,ct.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ct.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,K){const ot=Y.get(P);ot.__webglFramebuffer=K,ot.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(P,K=0,ot=0){A=P,T=K,E=ot;let ct=!0,j=null,Nt=!1,$t=!1;if(P){const ie=Y.get(P);if(ie.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(B.FRAMEBUFFER,null),ct=!1;else if(ie.__webglFramebuffer===void 0)C.setupRenderTarget(P);else if(ie.__hasExternalTextures)C.rebindTextures(P,Y.get(P.texture).__webglTexture,Y.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const F=P.depthTexture;if(ie.__boundDepthTexture!==F){if(F!==null&&Y.has(F)&&(P.width!==F.image.width||P.height!==F.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(P)}}const ve=P.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&($t=!0);const I=Y.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(I[K])?j=I[K][ot]:j=I[K],Nt=!0):P.samples>0&&C.useMultisampledRTT(P)===!1?j=Y.get(P).__webglMultisampledFramebuffer:Array.isArray(I)?j=I[ot]:j=I,w.copy(P.viewport),L.copy(P.scissor),O=P.scissorTest}else w.copy(at).multiplyScalar(V).floor(),L.copy(Tt).multiplyScalar(V).floor(),O=kt;if(It.bindFramebuffer(B.FRAMEBUFFER,j)&&ct&&It.drawBuffers(P,j),It.viewport(w),It.scissor(L),It.setScissorTest(O),Nt){const ie=Y.get(P.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie.__webglTexture,ot)}else if($t){const ie=Y.get(P.texture),ve=K||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,ie.__webglTexture,ot||0,ve)}v=-1},this.readRenderTargetPixels=function(P,K,ot,ct,j,Nt,$t){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ne=Y.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&$t!==void 0&&(ne=ne[$t]),ne){It.bindFramebuffer(B.FRAMEBUFFER,ne);try{const ie=P.texture,ve=ie.format,I=ie.type;if(!Ot.textureFormatReadable(ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(I)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-ct&&ot>=0&&ot<=P.height-j&&B.readPixels(K,ot,ct,j,ce.convert(ve),ce.convert(I),Nt)}finally{const ie=A!==null?Y.get(A).__webglFramebuffer:null;It.bindFramebuffer(B.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(P,K,ot,ct,j,Nt,$t){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ne=Y.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&$t!==void 0&&(ne=ne[$t]),ne){const ie=P.texture,ve=ie.format,I=ie.type;if(!Ot.textureFormatReadable(ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(I))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=P.width-ct&&ot>=0&&ot<=P.height-j){It.bindFramebuffer(B.FRAMEBUFFER,ne);const F=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,F),B.bufferData(B.PIXEL_PACK_BUFFER,Nt.byteLength,B.STREAM_READ),B.readPixels(K,ot,ct,j,ce.convert(ve),ce.convert(I),0);const et=A!==null?Y.get(A).__webglFramebuffer:null;It.bindFramebuffer(B.FRAMEBUFFER,et);const pt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await dp(B,pt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,F),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Nt),B.deleteBuffer(F),B.deleteSync(pt),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,K=null,ot=0){P.isTexture!==!0&&(Fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,P=arguments[1]);const ct=Math.pow(2,-ot),j=Math.floor(P.image.width*ct),Nt=Math.floor(P.image.height*ct),$t=K!==null?K.x:0,ne=K!==null?K.y:0;C.setTexture2D(P,0),B.copyTexSubImage2D(B.TEXTURE_2D,ot,0,0,$t,ne,j,Nt),It.unbindTexture()},this.copyTextureToTexture=function(P,K,ot=null,ct=null,j=0){P.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture function signature has changed."),ct=arguments[0]||null,P=arguments[1],K=arguments[2],j=arguments[3]||0,ot=null);let Nt,$t,ne,ie,ve,I,F,et,pt;const Mt=P.isCompressedTexture?P.mipmaps[j]:P.image;ot!==null?(Nt=ot.max.x-ot.min.x,$t=ot.max.y-ot.min.y,ne=ot.isBox3?ot.max.z-ot.min.z:1,ie=ot.min.x,ve=ot.min.y,I=ot.isBox3?ot.min.z:0):(Nt=Mt.width,$t=Mt.height,ne=Mt.depth||1,ie=0,ve=0,I=0),ct!==null?(F=ct.x,et=ct.y,pt=ct.z):(F=0,et=0,pt=0);const Rt=ce.convert(K.format),wt=ce.convert(K.type);let nt;K.isData3DTexture?(C.setTexture3D(K,0),nt=B.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(C.setTexture2DArray(K,0),nt=B.TEXTURE_2D_ARRAY):(C.setTexture2D(K,0),nt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment);const Xt=B.getParameter(B.UNPACK_ROW_LENGTH),Vt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),he=B.getParameter(B.UNPACK_SKIP_PIXELS),Ce=B.getParameter(B.UNPACK_SKIP_ROWS),Pe=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Mt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Mt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ie),B.pixelStorei(B.UNPACK_SKIP_ROWS,ve),B.pixelStorei(B.UNPACK_SKIP_IMAGES,I);const Ti=P.isDataArrayTexture||P.isData3DTexture,Re=K.isDataArrayTexture||K.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const _n=Y.get(P),ti=Y.get(K),Mn=Y.get(_n.__renderTarget),Nn=Y.get(ti.__renderTarget);It.bindFramebuffer(B.READ_FRAMEBUFFER,Mn.__webglFramebuffer),It.bindFramebuffer(B.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let zn=0;zn<ne;zn++)Ti&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Y.get(P).__webglTexture,j,I+zn),P.isDepthTexture?(Re&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Y.get(K).__webglTexture,j,pt+zn),B.blitFramebuffer(ie,ve,Nt,$t,F,et,Nt,$t,B.DEPTH_BUFFER_BIT,B.NEAREST)):Re?B.copyTexSubImage3D(nt,j,F,et,pt+zn,ie,ve,Nt,$t):B.copyTexSubImage2D(nt,j,F,et,pt+zn,ie,ve,Nt,$t);It.bindFramebuffer(B.READ_FRAMEBUFFER,null),It.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Re?P.isDataTexture||P.isData3DTexture?B.texSubImage3D(nt,j,F,et,pt,Nt,$t,ne,Rt,wt,Mt.data):K.isCompressedArrayTexture?B.compressedTexSubImage3D(nt,j,F,et,pt,Nt,$t,ne,Rt,Mt.data):B.texSubImage3D(nt,j,F,et,pt,Nt,$t,ne,Rt,wt,Mt):P.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,j,F,et,Nt,$t,Rt,wt,Mt.data):P.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,j,F,et,Mt.width,Mt.height,Rt,Mt.data):B.texSubImage2D(B.TEXTURE_2D,j,F,et,Nt,$t,Rt,wt,Mt);B.pixelStorei(B.UNPACK_ROW_LENGTH,Xt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Vt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,he),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ce),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Pe),j===0&&K.generateMipmaps&&B.generateMipmap(nt),It.unbindTexture()},this.copyTextureToTexture3D=function(P,K,ot=null,ct=null,j=0){return P.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ot=arguments[0]||null,ct=arguments[1]||null,P=arguments[2],K=arguments[3],j=arguments[4]||0),Fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,K,ot,ct,j)},this.initRenderTarget=function(P){Y.get(P).__webglFramebuffer===void 0&&C.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?C.setTextureCube(P,0):P.isData3DTexture?C.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?C.setTexture2DArray(P,0):C.setTexture2D(P,0),It.unbindTexture()},this.resetState=function(){T=0,E=0,A=null,It.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=De._getDrawingBufferColorSpace(t),e.unpackColorSpace=De._getUnpackColorSpace()}}class kc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pt(t),this.near=e,this.far=n}clone(){return new kc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wx extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class go extends Sn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=vn,h=vn,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nh extends Ge{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ks=new Ie,ih=new Ie,Ua=[],sh=new Ls,Ex=new Ie,Lr=new oe,Ir=new Sr;class gn extends oe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new nh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ex)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ls),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ks),sh.copy(t.boundingBox).applyMatrix4(Ks),this.boundingBox.union(sh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ks),Ir.copy(t.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(Ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(n),t.ray.intersectsSphere(Ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ks),ih.multiplyMatrices(n,Ks),Lr.matrixWorld=ih,Lr.raycast(t,Ua);for(let a=0,o=Ua.length;a<o;a++){const l=Ua[a];l.instanceId=r,l.object=this,e.push(l)}Ua.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new nh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new go(new Float32Array(s*this.count),s,this.count,fo,fi));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class vo extends Is{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const rh=new Ie,rc=new Ic,Na=new Sr,za=new G;class Bc extends Ve{constructor(t=new ze,e=new vo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(s),Na.radius+=r,t.ray.intersectsSphere(Na)===!1)return;rh.copy(s).invert(),rc.copy(t.ray).applyMatrix4(rh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,M=p;g<M;g++){const m=c.getX(g);za.fromBufferAttribute(u,m),ah(za,m,l,s,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,M=p;g<M;g++)za.fromBufferAttribute(u,g),ah(za,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ah(i,t,e,n,s,r,a){const o=rc.distanceSqToPoint(i);if(o<e){const l=new G;rc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class pi extends Sn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Et:new G);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new G,s=[],r=[],a=[],o=new G,l=new Ie;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new G)}r[0]=new G,a[0]=new G;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(fn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(fn(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Gc extends Ei{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Et){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Tx extends Gc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Vc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,s(a,o,f,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Fa=new G,nl=new Vc,il=new Vc,sl=new Vc;class Hc extends Ei{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new G){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Fa.subVectors(s[0],s[1]).add(s[0]),c=Fa);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Fa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Fa),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),M=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),nl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,M,m),il.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,M,m),sl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&(nl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),il.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),sl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(nl.calc(l),il.calc(l),sl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new G().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function oh(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Ax(i,t){const e=1-i;return e*e*t}function Cx(i,t){return 2*(1-i)*i*t}function Rx(i,t){return i*i*t}function Vr(i,t,e,n){return Ax(i,t)+Cx(i,e)+Rx(i,n)}function Px(i,t){const e=1-i;return e*e*e*t}function Dx(i,t){const e=1-i;return 3*e*e*i*t}function Lx(i,t){return 3*(1-i)*i*i*t}function Ix(i,t){return i*i*i*t}function Hr(i,t,e,n,s){return Px(i,t)+Dx(i,e)+Lx(i,n)+Ix(i,s)}class bf extends Ei{constructor(t=new Et,e=new Et,n=new Et,s=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Et){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hr(t,s.x,r.x,a.x,o.x),Hr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ux extends Ei{constructor(t=new G,e=new G,n=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new G){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hr(t,s.x,r.x,a.x,o.x),Hr(t,s.y,r.y,a.y,o.y),Hr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sf extends Ei{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nx extends Ei{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wf extends Ei{constructor(t=new Et,e=new Et,n=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Et){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Vr(t,s.x,r.x,a.x),Vr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zx extends Ei{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Vr(t,s.x,r.x,a.x),Vr(t,s.y,r.y,a.y),Vr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ef extends Ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(oh(o,l.x,c.x,h.x,u.x),oh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Et().fromArray(s))}return this}}var ac=Object.freeze({__proto__:null,ArcCurve:Tx,CatmullRomCurve3:Hc,CubicBezierCurve:bf,CubicBezierCurve3:Ux,EllipseCurve:Gc,LineCurve:Sf,LineCurve3:Nx,QuadraticBezierCurve:wf,QuadraticBezierCurve3:zx,SplineCurve:Ef});class Fx extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ac[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ac[s.type]().fromJSON(s))}return this}}class oc extends Fx{constructor(t){super(),this.type="Path",this.currentPoint=new Et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Sf(this.currentPoint.clone(),new Et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new wf(this.currentPoint.clone(),new Et(t,e),new Et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new bf(this.currentPoint.clone(),new Et(t,e),new Et(n,s),new Et(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ef(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Gc(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Wc extends ze{constructor(t=[new Et(0,-.5),new Et(.5,0),new Et(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=fn(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new G,f=new Et,p=new G,g=new G,M=new G;let m=0,d=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,d=t[y+1].y-t[y].y,p.x=d*1,p.y=-m,p.z=d*0,M.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:m=t[y+1].x-t[y].x,d=t[y+1].y-t[y].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=M.x,p.y+=M.y,p.z+=M.z,p.normalize(),l.push(p.x,p.y,p.z),M.copy(g)}for(let y=0;y<=e;y++){const b=n+y*h*s,x=Math.sin(b),R=Math.cos(b);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*x,u.y=t[T].y,u.z=t[T].x*R,a.push(u.x,u.y,u.z),f.x=y/e,f.y=T/(t.length-1),o.push(f.x,f.y);const E=l[3*T+0]*x,A=l[3*T+1],v=l[3*T+0]*R;c.push(E,A,v)}}for(let y=0;y<e;y++)for(let b=0;b<t.length-1;b++){const x=b+y*t.length,R=x,T=x+t.length,E=x+t.length+1,A=x+1;r.push(R,T,A),r.push(E,A,T)}this.setIndex(r),this.setAttribute("position",new me(a,3)),this.setAttribute("uv",new me(o,2)),this.setAttribute("normal",new me(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wc(t.points,t.segments,t.phiStart,t.phiLength)}}class xo extends Wc{constructor(t=1,e=1,n=4,s=8){const r=new oc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new xo(t.radius,t.length,t.capSegments,t.radialSegments)}}class gr extends ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new G,h=new Et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(o,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class He extends ze{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const M=[],m=n/2;let d=0;y(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(p,2));function y(){const x=new G,R=new G;let T=0;const E=(e-t)/n;for(let A=0;A<=r;A++){const v=[],_=A/r,w=_*(e-t)+t;for(let L=0;L<=s;L++){const O=L/s,D=O*l+o,z=Math.sin(D),k=Math.cos(D);R.x=w*z,R.y=-_*n+m,R.z=w*k,u.push(R.x,R.y,R.z),x.set(z,E,k).normalize(),f.push(x.x,x.y,x.z),p.push(O,1-_),v.push(g++)}M.push(v)}for(let A=0;A<s;A++)for(let v=0;v<r;v++){const _=M[v][A],w=M[v+1][A],L=M[v+1][A+1],O=M[v][A+1];(t>0||v!==0)&&(h.push(_,w,O),T+=3),(e>0||v!==r-1)&&(h.push(w,L,O),T+=3)}c.addGroup(d,T,0),d+=T}function b(x){const R=g,T=new Et,E=new G;let A=0;const v=x===!0?t:e,_=x===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,m*_,0),f.push(0,_,0),p.push(.5,.5),g++;const w=g;for(let L=0;L<=s;L++){const D=L/s*l+o,z=Math.cos(D),k=Math.sin(D);E.x=v*k,E.y=m*_,E.z=v*z,u.push(E.x,E.y,E.z),f.push(0,_,0),T.x=z*.5+.5,T.y=k*.5*_+.5,p.push(T.x,T.y),g++}for(let L=0;L<s;L++){const O=R+L,D=w+L;x===!0?h.push(D,D+1,O):h.push(D+1,D,O),A+=3}c.addGroup(d,A,x===!0?1:2),d+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gn extends He{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Gn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ca extends ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(r.slice(),3)),this.setAttribute("uv",new me(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const b=new G,x=new G,R=new G;for(let T=0;T<e.length;T+=3)p(e[T+0],b),p(e[T+1],x),p(e[T+2],R),l(b,x,R,y)}function l(y,b,x,R){const T=R+1,E=[];for(let A=0;A<=T;A++){E[A]=[];const v=y.clone().lerp(x,A/T),_=b.clone().lerp(x,A/T),w=T-A;for(let L=0;L<=w;L++)L===0&&A===T?E[A][L]=v:E[A][L]=v.clone().lerp(_,L/w)}for(let A=0;A<T;A++)for(let v=0;v<2*(T-A)-1;v++){const _=Math.floor(v/2);v%2===0?(f(E[A][_+1]),f(E[A+1][_]),f(E[A][_])):(f(E[A][_+1]),f(E[A+1][_+1]),f(E[A+1][_]))}}function c(y){const b=new G;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(y),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function h(){const y=new G;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];const x=m(y)/2/Math.PI+.5,R=d(y)/Math.PI+.5;a.push(x,1-R)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){const b=a[y+0],x=a[y+2],R=a[y+4],T=Math.max(b,x,R),E=Math.min(b,x,R);T>.9&&E<.1&&(b<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,b){const x=y*3;b.x=t[x+0],b.y=t[x+1],b.z=t[x+2]}function g(){const y=new G,b=new G,x=new G,R=new G,T=new Et,E=new Et,A=new Et;for(let v=0,_=0;v<r.length;v+=9,_+=6){y.set(r[v+0],r[v+1],r[v+2]),b.set(r[v+3],r[v+4],r[v+5]),x.set(r[v+6],r[v+7],r[v+8]),T.set(a[_+0],a[_+1]),E.set(a[_+2],a[_+3]),A.set(a[_+4],a[_+5]),R.copy(y).add(b).add(x).divideScalar(3);const w=m(R);M(T,_+0,y,w),M(E,_+2,b,w),M(A,_+4,x,w)}}function M(y,b,x,R){R<0&&y.x===1&&(a[b]=y.x-1),x.x===0&&x.z===0&&(a[b]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ca(t.vertices,t.indices,t.radius,t.details)}}class _o extends ca{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _o(t.radius,t.detail)}}class Tf extends oc{constructor(t){super(t),this.uuid=Ds(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new oc().fromJSON(s))}return this}}const Ox={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Af(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,p;if(n&&(r=Hx(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Jr(r,a,e,o,l,p,0),a}};function Af(i,t,e,n,s){let r,a;if(s===t1(i,t,e,n)>0)for(r=t;r<e;r+=n)a=lh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=lh(r,i[r],i[r+1],a);return a&&Mo(a,a.next)&&(ta(a),a=a.next),a}function Cs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Mo(e,e.next)||je(e.prev,e,e.next)===0)){if(ta(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Jr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&$x(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Bx(i,n,s,r):kx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),ta(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Gx(Cs(i),t,e),Jr(i,t,e,n,s,r,2)):a===2&&Vx(i,t,e,n,s,r):Jr(Cs(i),t,e,n,s,r,1);break}}}function kx(i){const t=i.prev,e=i,n=i.next;if(je(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&ir(s,o,r,l,a,c,g.x,g.y)&&je(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Bx(i,t,e,n){const s=i.prev,r=i,a=i.next;if(je(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,p=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,M=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,d=lc(p,g,t,e,n),y=lc(M,m,t,e,n);let b=i.prevZ,x=i.nextZ;for(;b&&b.z>=d&&x&&x.z<=y;){if(b.x>=p&&b.x<=M&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&ir(o,h,l,u,c,f,b.x,b.y)&&je(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=p&&x.x<=M&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ir(o,h,l,u,c,f,x.x,x.y)&&je(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=d;){if(b.x>=p&&b.x<=M&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&ir(o,h,l,u,c,f,b.x,b.y)&&je(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=y;){if(x.x>=p&&x.x<=M&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ir(o,h,l,u,c,f,x.x,x.y)&&je(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Gx(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Mo(s,r)&&Cf(s,n,n.next,r)&&Qr(s,r)&&Qr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ta(n),ta(n.next),n=i=r),n=n.next}while(n!==i);return Cs(n)}function Vx(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Kx(a,o)){let l=Rf(a,o);a=Cs(a,a.next),l=Cs(l,l.next),Jr(a,t,e,n,s,r,0),Jr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Hx(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Af(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Zx(c));for(s.sort(Wx),r=0;r<s.length;r++)e=Xx(s[r],e);return e}function Wx(i,t){return i.x-t.x}function Xx(i,t){const e=qx(i,t);if(!e)return t;const n=Rf(e,i);return Cs(n,n.next),Cs(e,e.next)}function qx(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ir(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Qr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Yx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Yx(i,t){return je(i.prev,i,t.prev)<0&&je(t.next,i,i.next)<0}function $x(i,t,e,n){let s=i;do s.z===0&&(s.z=lc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,jx(s)}function jx(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function lc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Zx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ir(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Kx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Jx(i,t)&&(Qr(i,t)&&Qr(t,i)&&Qx(i,t)&&(je(i.prev,i,t.prev)||je(i,t.prev,t))||Mo(i,t)&&je(i.prev,i,i.next)>0&&je(t.prev,t,t.next)>0)}function je(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Mo(i,t){return i.x===t.x&&i.y===t.y}function Cf(i,t,e,n){const s=ka(je(i,t,e)),r=ka(je(i,t,n)),a=ka(je(e,n,i)),o=ka(je(e,n,t));return!!(s!==r&&a!==o||s===0&&Oa(i,e,t)||r===0&&Oa(i,n,t)||a===0&&Oa(e,i,n)||o===0&&Oa(e,t,n))}function Oa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ka(i){return i>0?1:i<0?-1:0}function Jx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Cf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Qr(i,t){return je(i.prev,i,i.next)<0?je(i,t,i.next)>=0&&je(i,i.prev,t)>=0:je(i,t,i.prev)<0||je(i,i.next,t)<0}function Qx(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Rf(i,t){const e=new cc(i.i,i.x,i.y),n=new cc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function lh(i,t,e,n){const s=new cc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ta(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function cc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function t1(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Wr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Wr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];ch(t),uh(n,t);let a=t.length;e.forEach(ch);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,uh(n,e[l]);const o=Ox.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function ch(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function uh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Xc extends ze{constructor(t=new Tf([new Et(.5,.5),new Et(-.5,.5),new Et(-.5,-.5),new Et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new me(s,3)),this.setAttribute("uv",new me(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:e1;let b,x=!1,R,T,E,A;d&&(b=d.getSpacedPoints(h),x=!0,f=!1,R=d.computeFrenetFrames(h,!1),T=new G,E=new G,A=new G),f||(m=0,p=0,g=0,M=0);const v=o.extractPoints(c);let _=v.shape;const w=v.holes;if(!Wr.isClockWise(_)){_=_.reverse();for(let dt=0,_t=w.length;dt<_t;dt++){const B=w[dt];Wr.isClockWise(B)&&(w[dt]=B.reverse())}}const O=Wr.triangulateShape(_,w),D=_;for(let dt=0,_t=w.length;dt<_t;dt++){const B=w[dt];_=_.concat(B)}function z(dt,_t,B){return _t||console.error("THREE.ExtrudeGeometry: vec does not exist"),dt.clone().addScaledVector(_t,B)}const k=_.length,W=O.length;function V(dt,_t,B){let qt,yt,Ot;const It=dt.x-_t.x,ee=dt.y-_t.y,Y=B.x-dt.x,C=B.y-dt.y,S=It*It+ee*ee,X=It*C-ee*Y;if(Math.abs(X)>Number.EPSILON){const tt=Math.sqrt(S),st=Math.sqrt(Y*Y+C*C),rt=_t.x-ee/tt,Ft=_t.y+It/tt,bt=B.x-C/st,Lt=B.y+Y/st,re=((bt-rt)*C-(Lt-Ft)*Y)/(It*C-ee*Y);qt=rt+It*re-dt.x,yt=Ft+ee*re-dt.y;const St=qt*qt+yt*yt;if(St<=2)return new Et(qt,yt);Ot=Math.sqrt(St/2)}else{let tt=!1;It>Number.EPSILON?Y>Number.EPSILON&&(tt=!0):It<-Number.EPSILON?Y<-Number.EPSILON&&(tt=!0):Math.sign(ee)===Math.sign(C)&&(tt=!0),tt?(qt=-ee,yt=It,Ot=Math.sqrt(S)):(qt=It,yt=ee,Ot=Math.sqrt(S/2))}return new Et(qt/Ot,yt/Ot)}const $=[];for(let dt=0,_t=D.length,B=_t-1,qt=dt+1;dt<_t;dt++,B++,qt++)B===_t&&(B=0),qt===_t&&(qt=0),$[dt]=V(D[dt],D[B],D[qt]);const J=[];let at,Tt=$.concat();for(let dt=0,_t=w.length;dt<_t;dt++){const B=w[dt];at=[];for(let qt=0,yt=B.length,Ot=yt-1,It=qt+1;qt<yt;qt++,Ot++,It++)Ot===yt&&(Ot=0),It===yt&&(It=0),at[qt]=V(B[qt],B[Ot],B[It]);J.push(at),Tt=Tt.concat(at)}for(let dt=0;dt<m;dt++){const _t=dt/m,B=p*Math.cos(_t*Math.PI/2),qt=g*Math.sin(_t*Math.PI/2)+M;for(let yt=0,Ot=D.length;yt<Ot;yt++){const It=z(D[yt],$[yt],qt);it(It.x,It.y,-B)}for(let yt=0,Ot=w.length;yt<Ot;yt++){const It=w[yt];at=J[yt];for(let ee=0,Y=It.length;ee<Y;ee++){const C=z(It[ee],at[ee],qt);it(C.x,C.y,-B)}}}const kt=g+M;for(let dt=0;dt<k;dt++){const _t=f?z(_[dt],Tt[dt],kt):_[dt];x?(E.copy(R.normals[0]).multiplyScalar(_t.x),T.copy(R.binormals[0]).multiplyScalar(_t.y),A.copy(b[0]).add(E).add(T),it(A.x,A.y,A.z)):it(_t.x,_t.y,0)}for(let dt=1;dt<=h;dt++)for(let _t=0;_t<k;_t++){const B=f?z(_[_t],Tt[_t],kt):_[_t];x?(E.copy(R.normals[dt]).multiplyScalar(B.x),T.copy(R.binormals[dt]).multiplyScalar(B.y),A.copy(b[dt]).add(E).add(T),it(A.x,A.y,A.z)):it(B.x,B.y,u/h*dt)}for(let dt=m-1;dt>=0;dt--){const _t=dt/m,B=p*Math.cos(_t*Math.PI/2),qt=g*Math.sin(_t*Math.PI/2)+M;for(let yt=0,Ot=D.length;yt<Ot;yt++){const It=z(D[yt],$[yt],qt);it(It.x,It.y,u+B)}for(let yt=0,Ot=w.length;yt<Ot;yt++){const It=w[yt];at=J[yt];for(let ee=0,Y=It.length;ee<Y;ee++){const C=z(It[ee],at[ee],qt);x?it(C.x,C.y+b[h-1].y,b[h-1].x+B):it(C.x,C.y,u+B)}}}H(),Z();function H(){const dt=s.length/3;if(f){let _t=0,B=k*_t;for(let qt=0;qt<W;qt++){const yt=O[qt];Ct(yt[2]+B,yt[1]+B,yt[0]+B)}_t=h+m*2,B=k*_t;for(let qt=0;qt<W;qt++){const yt=O[qt];Ct(yt[0]+B,yt[1]+B,yt[2]+B)}}else{for(let _t=0;_t<W;_t++){const B=O[_t];Ct(B[2],B[1],B[0])}for(let _t=0;_t<W;_t++){const B=O[_t];Ct(B[0]+k*h,B[1]+k*h,B[2]+k*h)}}n.addGroup(dt,s.length/3-dt,0)}function Z(){const dt=s.length/3;let _t=0;ht(D,_t),_t+=D.length;for(let B=0,qt=w.length;B<qt;B++){const yt=w[B];ht(yt,_t),_t+=yt.length}n.addGroup(dt,s.length/3-dt,1)}function ht(dt,_t){let B=dt.length;for(;--B>=0;){const qt=B;let yt=B-1;yt<0&&(yt=dt.length-1);for(let Ot=0,It=h+m*2;Ot<It;Ot++){const ee=k*Ot,Y=k*(Ot+1),C=_t+qt+ee,S=_t+yt+ee,X=_t+yt+Y,tt=_t+qt+Y;Dt(C,S,X,tt)}}}function it(dt,_t,B){l.push(dt),l.push(_t),l.push(B)}function Ct(dt,_t,B){Ut(dt),Ut(_t),Ut(B);const qt=s.length/3,yt=y.generateTopUV(n,s,qt-3,qt-2,qt-1);Wt(yt[0]),Wt(yt[1]),Wt(yt[2])}function Dt(dt,_t,B,qt){Ut(dt),Ut(_t),Ut(qt),Ut(_t),Ut(B),Ut(qt);const yt=s.length/3,Ot=y.generateSideWallUV(n,s,yt-6,yt-3,yt-2,yt-1);Wt(Ot[0]),Wt(Ot[1]),Wt(Ot[3]),Wt(Ot[1]),Wt(Ot[2]),Wt(Ot[3])}function Ut(dt){s.push(l[dt*3+0]),s.push(l[dt*3+1]),s.push(l[dt*3+2])}function Wt(dt){r.push(dt.x),r.push(dt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return n1(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ac[s.type]().fromJSON(s)),new Xc(n,t.options)}}const e1={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Et(r,a),new Et(o,l),new Et(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],p=t[s*3+1],g=t[s*3+2],M=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Et(a,1-l),new Et(c,1-u),new Et(f,1-g),new Et(M,1-d)]:[new Et(o,1-l),new Et(h,1-u),new Et(p,1-g),new Et(m,1-d)]}};function n1(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ms extends ca{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ms(t.radius,t.detail)}}class vr extends ca{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vr(t.radius,t.detail)}}class ss extends ze{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,p=new G,g=new Et;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){const d=r+m/n*a;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let M=0;M<s;M++){const m=M*(n+1);for(let d=0;d<n;d++){const y=d+m,b=y,x=y+n+1,R=y+n+2,T=y+1;o.push(b,x,T),o.push(x,R,T)}}this.setIndex(o),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ss(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Vn extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new G,f=new G,p=[],g=[],M=[],m=[];for(let d=0;d<=n;d++){const y=[],b=d/n;let x=0;d===0&&a===0?x=.5/e:d===n&&l===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){const T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),M.push(f.x,f.y,f.z),m.push(T+x,1-b),y.push(c++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){const b=h[d][y+1],x=h[d][y],R=h[d+1][y],T=h[d+1][y+1];(d!==0||a>0)&&p.push(b,x,T),(d!==n-1||l<Math.PI)&&p.push(x,R,T)}this.setIndex(p),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(M,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ar extends ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new G,u=new G,f=new G;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const M=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(M),u.y=(t+e*Math.cos(m))*Math.sin(M),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const M=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,y=(s+1)*p+g;a.push(M,m,y),a.push(m,d,y)}this.setIndex(a),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class i1 extends $e{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class s1 extends Is{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class We extends Is{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qc extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class r1 extends qc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const rl=new Ie,hh=new G,fh=new G;class Pf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nc,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;hh.setFromMatrixPosition(t.matrixWorld),e.position.copy(hh),fh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fh),e.updateMatrixWorld(),rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const dh=new Ie,Ur=new G,al=new G;class a1 extends Pf{constructor(){super(new Bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new Be(2,1,1,1),new Be(0,1,1,1),new Be(3,1,1,1),new Be(1,1,1,1),new Be(3,0,1,1),new Be(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ur.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ur),al.copy(n.position),al.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(al),n.updateMatrixWorld(),s.makeTranslation(-Ur.x,-Ur.y,-Ur.z),dh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dh)}}class ea extends qc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new a1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class o1 extends Pf{constructor(){super(new zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class l1 extends qc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new o1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Df{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ph(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ph();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ph(){return performance.now()}const mh=new Ie;class c1{constructor(t,e,n=0,s=1/0){this.ray=new Ic(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Uc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return mh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mh),this}intersectObject(t,e=!0,n=[]){return uc(t,this,n,e),n.sort(gh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)uc(t[s],this,n,e);return n.sort(gh),n}}function gh(i,t){return i.distance-t.distance}function uc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)uc(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bc);const nn=(i,t={})=>new We({color:i,flatShading:!0,...t});function ji(i){const t=i.map(a=>a.toNonIndexed()),e=t.reduce((a,o)=>a+o.attributes.position.count,0),n=new Float32Array(e*3);let s=0;for(const a of t)n.set(a.attributes.position.array,s),s+=a.attributes.position.array.length;const r=new ze;return r.setAttribute("position",new Ge(n,3)),r.computeVertexNormals(),r}function u1(i,t,e,n,s,r){const a=r.id,{heightAt:o,pathDist:l,plinths:c}=t,h=t.lighthouse.pos,u=new Ve,f=new Pt,p=[],g=(N,vt,ut,Kt=2,te=5)=>l(N,vt)>ut&&Math.hypot(N-h.x,vt-h.z)>te&&!c.some(At=>Math.hypot(At.x-N,At.z-vt)<Kt),M=(N,vt,ut=N*20)=>{const Kt=[];for(let te=0;te<ut&&Kt.length<N;te++){const At=(n()-.5)*104,Jt=(n()-.5)*104,se=o(At,Jt);vt(At,Jt,se)&&Kt.push({x:At,z:Jt,h:se,r:n(),s:n()})}return Kt},m=(N,vt,ut,Kt,te=!1)=>{const At=new gn(N,vt,Math.max(1,ut.length));return At.count=ut.length,ut.forEach((Jt,se)=>{Kt(Jt,se,At),u.updateMatrix(),At.setMatrixAt(se,u.matrix)}),At.instanceColor&&(At.instanceColor.needsUpdate=!0),At.castShadow=te,At.receiveShadow=!0,i.add(At),At},d=(e.mobile?.55:1)*1.8,y=(()=>{const N=[[-.9,.5,.05],[-.45,.68,-.06],[0,.78,.02],[.45,.66,-.04],[.9,.48,.06]].map(([te,At,Jt])=>{const se=new Gn(.045,At,3);return se.translate(0,At/2,0),se.rotateZ(te*.45),se.rotateX(Jt*3),se.translate(te*.09,0,Jt),se}),vt=ji(N),ut=vt.attributes.position,Kt=[];for(let te=0;te<ut.count;te++){const At=xe.clamp(ut.getY(te)/.7,0,1),Jt=.5+.7*At;Kt.push(Jt,Jt,Jt*.95)}return vt.setAttribute("color",new me(Kt,3)),vt})(),b=M(Math.round(280*d),(N,vt,ut)=>ut>.8&&g(N,vt,1.7,1.7,4.4));m(y,nn("#ffffff",{vertexColors:!0}),b,(N,vt,ut)=>{u.position.set(N.x,N.h-.05,N.z),u.rotation.set(0,N.r*6,0),u.scale.setScalar(.8+N.s*.7),ut.setColorAt(vt,f.set(a==="vinter"?N.s<.5?"#c8d4c0":"#e6eef4":a==="vulkan"?N.s<.5?"#5a6a3a":"#7a7a4a":N.s<.5?"#7fae4e":"#9cc45e"))});const x=M(Math.round((a==="vinter"?0:a==="vulkan"?30:120)*d),(N,vt,ut)=>ut>.85&&g(N,vt,1.9,2,4.5)),R=new He(.025,.03,.4,4);R.translate(0,.2,0);const T=new Ms(.11,0);T.translate(0,.42,0);const E=["#ff8fb0","#ffd54a","#ffffff","#b58cff","#ff7a4a"];if(m(R,nn("#5f8f3a"),x,N=>{u.position.set(N.x,N.h-.03,N.z),u.rotation.set(0,0,0),u.scale.setScalar(.9+N.s*.6)}),m(T,nn("#ffffff"),x,(N,vt,ut)=>{u.position.set(N.x,N.h-.03,N.z),u.scale.setScalar(.9+N.s*.6),ut.setColorAt(vt,f.set(E[Math.floor(N.r*E.length)]))}),a!=="vulkan"){const N=(()=>{const Kt=[],te=[];for(let se=0;se<8;se++){const ge=se/8*Math.PI*2,Ee=.32;Kt.push(0,0,0,Math.cos(ge)*.12,0,Math.sin(ge)*.12,Math.cos(ge-Ee)*.045,0,Math.sin(ge-Ee)*.045),Kt.push(0,0,0,Math.cos(ge+Ee)*.045,0,Math.sin(ge+Ee)*.045,Math.cos(ge)*.12,0,Math.sin(ge)*.12);for(let rn=0;rn<6;rn++)te.push(1,1,1)}for(let se=0;se<6;se++){const ge=se/6*Math.PI*2,Ee=(se+1)/6*Math.PI*2;Kt.push(0,.012,0,Math.cos(Ee)*.035,.012,Math.sin(Ee)*.035,Math.cos(ge)*.035,.012,Math.sin(ge)*.035);for(let rn=0;rn<3;rn++)te.push(1,.78,.18)}const Jt=new ze;return Jt.setAttribute("position",new me(Kt,3)),Jt.setAttribute("color",new me(te,3)),Jt.setAttribute("normal",new me(new Array(Kt.length/3).fill(0).flatMap(()=>[0,1,0]),3)),Jt})(),vt=M(Math.round((a==="vinter"?10:60)*d),(Kt,te,At)=>At>.9&&g(Kt,te,1.6,2,4.5)),ut=[];for(const Kt of vt){const te=5+Math.floor(Kt.r*9);for(let At=0;At<te;At++){const Jt=n()*6.28,se=Math.sqrt(n())*1.6,ge=Kt.x+Math.cos(Jt)*se,Ee=Kt.z+Math.sin(Jt)*se,rn=o(ge,Ee);rn>.85&&g(ge,Ee,1.4,2,4.5)&&ut.push({x:ge,z:Ee,h:rn,r:n(),s:n()})}}m(N,new We({color:"#ffffff",vertexColors:!0,side:Ke}),ut,(Kt,te,At)=>{u.position.set(Kt.x,Kt.h+.035,Kt.z),u.rotation.set((Kt.s-.5)*.3,Kt.r*6.28,0),u.scale.setScalar(1.3+Kt.s*.7),At.setColorAt(te,f.setRGB(1,.97+Kt.r*.03,.94+Kt.s*.06))})}const A=M(Math.round((a==="tak"?36:0)*d),(N,vt,ut)=>ut>1&&g(N,vt,2.4,2.4,5)),v=new Vn(.22,8,4,0,Math.PI*2,0,Math.PI/2);v.scale(1,.7,1),v.translate(0,.28,0);const _=new He(.07,.09,.3,6);_.translate(0,.14,0),m(_,nn("#f4ead6"),A,N=>{u.position.set(N.x,N.h-.03,N.z),u.rotation.set(0,0,(N.r-.5)*.3),u.scale.setScalar(.8+N.s)},!0),m(v,nn("#ffffff"),A,(N,vt,ut)=>{u.position.set(N.x,N.h-.03,N.z),u.rotation.set(0,0,(N.r-.5)*.3),u.scale.setScalar(.8+N.s),ut.setColorAt(vt,f.set(N.r<.6?"#d8453a":"#c89a5a"))},!0);const w=ji([[-.08,0],[.07,.05],[0,-.07]].map(([N,vt],ut)=>{const Kt=new Gn(.04,1.1+ut*.2,3);return Kt.translate(N,.55+ut*.1,vt),Kt}).concat([(()=>{const N=new xo(.05,.18,2,4);return N.translate(.07,1.25,.05),N})()])),L=M(Math.round(150*d),(N,vt,ut)=>ut>.05&&ut<.55&&g(N,vt,2.2,2,5),6e3),O=m(w,nn(a==="vinter"?"#a89878":a==="vulkan"?"#5a5a3a":"#9aa856"),L,N=>{u.position.set(N.x,N.h-.1,N.z),u.rotation.set(0,N.r*6,0),u.scale.setScalar(.8+N.s*.6)}),D=[],z=[];for(const N of t.paths)for(const vt of[-1,1]){let ut=null,Kt=0,te=0;for(let At=2;At<N.length-7;At+=1.7){const Jt=At/N.length,se=N.curve.getPointAt(Jt),ge=N.curve.getTangentAt(Jt),Ee=se.x-ge.z*vt*2.25,rn=se.z+ge.x*vt*2.25,Xn=o(Ee,rn);if(!(Xn>.5&&te<=0&&g(Ee,rn,1.9,2.6,6))){ut=null,te>0&&te--;continue}D.push({x:Ee,z:rn,h:Xn}),ut&&z.push({a:ut,b:{x:Ee,z:rn,h:Xn}}),ut={x:Ee,z:rn,h:Xn},++Kt>4+Math.floor(n()*5)&&(Kt=0,ut=null,te=3+Math.floor(n()*5))}}const k=new Cn(.14,.8,.14);k.translate(0,.4,0);const W=new Cn(1,.07,.06),V=nn("#a07650");m(k,V,D,N=>{u.position.set(N.x,N.h-.05,N.z),u.rotation.set(0,n()*.3,(n()-.5)*.12),u.scale.set(1,1,1)},!0);const $=z.flatMap(N=>[{...N,y:.32},{...N,y:.62}]);m(W,V,$,({a:N,b:vt,y:ut})=>{const Kt=Math.hypot(vt.x-N.x,vt.z-N.z);u.position.set((N.x+vt.x)/2,(N.h+vt.h)/2+ut-.05,(N.z+vt.z)/2),u.rotation.set(0,-Math.atan2(vt.z-N.z,vt.x-N.x),0),u.scale.set(Kt,1,1)},!0);const J=r.dockTheta??-2.35,at=new Et(Math.cos(J),Math.sin(J)),Tt=s(J);let kt=Tt-6;for(let N=Tt-10;N<Tt+4;N+=.25)if(o(at.x*N,at.y*N)<.3){kt=N;break}const H=new _e,Z=nn("#b48a5e"),ht=nn("#6e4a2c"),it=8,Ct=kt-2.5;for(let N=0;N<it/.55;N++){const vt=new oe(new Cn(.5,.12,2.2),Z);vt.position.set(Ct+N*.55,.75+(n()-.5)*.04,0),vt.rotation.y=(n()-.5)*.05,vt.castShadow=vt.receiveShadow=!0,H.add(vt)}for(let N=0;N<=it;N+=2)for(const vt of[-1,1]){const ut=new oe(new He(.12,.12,2.2,6),ht);ut.position.set(Ct+N,.1,vt*1.05),ut.castShadow=!0,H.add(ut)}H.rotation.y=-J,i.add(H);const Dt=new _e,Ut=new He(.9,.9,3.4,10,1,!0,0,Math.PI);Ut.rotateZ(Math.PI/2),Ut.rotateX(Math.PI/2),Ut.scale(1,.6,.7);const Wt=new oe(Ut,nn("#3f6f9a",{side:Ke}));Wt.rotation.y=Math.PI/2,Wt.castShadow=!0,Dt.add(Wt);for(const N of[-.6,.6]){const vt=new oe(new Cn(.3,.08,1.2),Z);vt.position.set(N,-.15,0),Dt.add(vt)}const dt=new oe(new Cn(2.4,.06,.12),Z);dt.position.set(.2,.05,.4),dt.rotation.y=.3,Dt.add(dt);const _t=at.x*(Ct+it-1)+-at.y*2.1,B=at.y*(Ct+it-1)+at.x*2.1;Dt.position.set(_t,.3,B),Dt.rotation.y=-J,i.add(Dt);const qt=new _e,yt=new oe(new Kn(3,1.4,10,5),new Le({color:"#4a3a2a",wireframe:!0}));yt.position.y=1;const Ot=yt.geometry.attributes.position;for(let N=0;N<Ot.count;N++)Ot.setZ(N,Math.sin(Ot.getX(N)/3*Math.PI+1.5)*.15-Math.abs(Ot.getY(N))*.05);qt.add(yt);for(const N of[-1.6,1.6]){const vt=new oe(new He(.07,.09,2,5),ht);vt.position.set(N,.9,0),vt.castShadow=!0,qt.add(vt)}for(let N=0;N<5;N++){const vt=new oe(new Vn(.09,6,4),nn("#f0a43a"));vt.position.set(-1.2+N*.6,1.66,.05),qt.add(vt)}const It=kt-4.5,ee=4.2,Y=at.x*It-at.y*ee,C=at.y*It+at.x*ee;qt.position.set(Y,o(Y,C)-.1,C),qt.rotation.y=-J+Math.PI/2,i.add(qt),p.push({x:Y,z:C,r:1.4});const S=new He(.42,.42,.95,10);S.translate(0,.47,0);const X=new He(.44,.44,.08,10),tt=new Cn(.8,.8,.8);tt.translate(0,.4,0);const st=[],rt=(N,vt,ut,Kt)=>{for(let te=0;te<60&&ut>0;te++){const At=N+(n()-.5)*6,Jt=vt+(n()-.5)*6,se=o(At,Jt);se<.4||!g(At,Jt,2.3,2.4,4.6)||st.some(ge=>Math.hypot(ge.x-At,ge.z-Jt)<1.1)||(st.push({x:At,z:Jt,h:se,kind:Kt??(n()<.6?"barrel":"crate"),r:n()}),ut--)}};rt(at.x*(kt-2.5),at.y*(kt-2.5),5),rt(h.x+6,h.z+1,3,"barrel"),rt(h.x-6,h.z+2,2);const Ft=st.filter(N=>N.kind==="barrel"),bt=st.filter(N=>N.kind==="crate");m(S,nn("#8a5a36"),Ft,N=>{u.position.set(N.x,N.h-.05,N.z),u.rotation.set(0,N.r*6,0),u.scale.setScalar(1)},!0),m(X,nn("#3e3a38"),Ft.flatMap(N=>[{...N,y:.2},{...N,y:.75}]),N=>{u.position.set(N.x,N.h-.05+N.y,N.z)},!1),m(tt,nn("#b8925e"),bt,N=>{u.position.set(N.x,N.h-.05,N.z),u.rotation.set(0,N.r*6,0),u.scale.setScalar(.8+N.r*.4)},!0);for(const N of st)p.push({x:N.x,z:N.z,r:.55});const Lt=M(Math.round(380*d),(N,vt,ut)=>ut>.9&&g(N,vt,1.6,1.6,4.4)),re=new Ms(.06,0);re.translate(0,.06,0),m(re,new We({color:a==="vulkan"?"#ff9a5a":"#fffdf4"}),Lt,N=>{u.position.set(N.x,N.h-.02,N.z),u.rotation.set(0,0,0),u.scale.setScalar(.8+N.s*.8)});const St=(N,vt,ut)=>{const Kt=[];for(let te=0;te<N*40&&Kt.length<N;te++){const At=(n()-.5)*130,Jt=(n()-.5)*130,se=o(At,Jt),ge=.05-se;ge>vt&&ge<ut&&Math.hypot(At-h.x,Jt-h.z)>6&&Kt.push({x:At,z:Jt,h:se,r:n(),s:n()})}return Kt},Yt=ji([0,1,2].map(N=>{const vt=new Gn(.08,.9+N*.25,3);return vt.translate((N-1)*.12,.45+N*.12,N%2*.1),vt.rotateZ((N-1)*.25),vt})),ae=St(Math.round(90*d),.35,1.8),le=m(Yt,nn("#4f9a5a"),ae,N=>{u.position.set(N.x,N.h,N.z),u.rotation.set(0,N.r*6,0),u.scale.setScalar(.8+N.s*.7)}),Zt=ji([[0,0,.32],[.3,.1,.22],[-.25,.05,.26],[.05,.3,.2]].map(([N,vt,ut])=>{const Kt=new Ms(ut,0);return Kt.translate(N,ut*.8,vt),Kt})),ye=St(Math.round((a==="tak"?28:0)*d),.5,1.6),ce=["#b58cff","#ff8fa8","#ffc65a","#7fd6ff"];if(m(Zt,nn("#ffffff"),ye,(N,vt,ut)=>{u.position.set(N.x,N.h,N.z),u.rotation.set(0,N.r*6,0),u.scale.setScalar(.8+N.s*.9),ut.setColorAt(vt,f.set(ce[Math.floor(N.r*ce.length)]))}),a==="tak"){const N=ji([[0,0,0,.55],[.12,.05,.4,.42],[-.13,-.04,-.45,.4],[.05,.12,.2,.33],[-.06,-.1,-.15,.36]].map(([At,Jt,se,ge])=>{const Ee=new Gn(.05,ge,4);return Ee.translate(0,ge/2,0),Ee.rotateZ(se),Ee.rotateX(Jt*2),Ee.translate(At,0,Jt),Ee})),vt=ji([(()=>{const At=new He(.12,.16,.12,7);return At.translate(0,.06,0),At})(),...Array.from({length:7},(At,Jt)=>{const se=new Gn(.025,.2,3),ge=Jt/7*6.28;return se.translate(0,.1,0),se.rotateZ(.5),se.rotateY(ge),se.translate(Math.cos(ge)*.08,.12,-Math.sin(ge)*.08),se})]),ut=M(Math.round(16*d),(At,Jt,se)=>.05-se>.08&&t.landDist(At,Jt)>5,3e4).map(At=>({...At,big:2.4,pool:!0})),Kt=[...St(Math.round(36*d),.12,.9),...ut],te=["#ff5a80","#a060ff","#ffb820","#ff5a2a","#ff7ad0","#f4d070"];m(N,nn("#ffffff"),Kt.filter((At,Jt)=>Jt%2===0),(At,Jt,se)=>{u.position.set(At.x,At.h-.02,At.z),u.rotation.set(0,At.r*6,0),u.scale.setScalar((.8+At.s*.8)*(At.big??1)),se.setColorAt(Jt,f.set(te[Math.floor(At.r*te.length)]).multiplyScalar(At.pool?1.6:1))}),m(vt,nn("#ffffff"),Kt.filter((At,Jt)=>Jt%2===1),(At,Jt,se)=>{u.position.set(At.x,At.h-.02,At.z),u.rotation.set(0,At.r*6,0),u.scale.setScalar((.9+At.s*.9)*(At.big??1)),se.setColorAt(Jt,f.set(te[(Math.floor(At.s*te.length)+2)%te.length]).multiplyScalar(At.pool?1.6:1))})}const be=ji([(()=>{const N=new Vn(.17,7,4);return N.scale(1.2,.5,.85),N.translate(0,.07,0),N})(),...[-1,1].map(N=>{const vt=new Vn(.06,5,3);return vt.scale(1.3,.7,1),vt.translate(N*.17,.08,.15),vt}),...[-1,1].flatMap(N=>[0,1,2].map(vt=>{const ut=new Cn(.16,.02,.02);return ut.rotateZ(N*-.5),ut.translate(N*.18,.04,-.06+vt*.07),ut})),...[-1,1].map(N=>{const vt=new Vn(.025,4,3);return vt.translate(N*.05,.13,.09),vt})]),q=a==="vulkan"?[]:M(Math.round((a==="vinter"?5:18)*d),(N,vt,ut)=>ut>.08&&ut<.42&&g(N,vt,2.2,2,5),12e3).map(N=>({...N,home:{x:N.x,z:N.z},dir:N.r*6.28,t:N.s*4,run:0})),zt=m(be,nn(a==="vinter"?"#b8584a":"#d8553a"),q,N=>{u.position.set(N.x,N.h,N.z),u.rotation.set(0,N.dir,0),u.scale.setScalar(1)},!0),lt=ji([(()=>{const vt=new Vn(.07,6,4);return vt.scale(.6,.5,1.4),vt})(),(()=>{const vt=new Gn(.06,.1,3);return vt.rotateX(-Math.PI/2),vt.translate(0,0,-.13),vt})()]),xt=[...St(Math.round(26*d),.1,.8),...M(Math.round(12*d),(N,vt,ut)=>.05-ut>.12&&t.landDist(N,vt)>5,3e4).map(N=>({...N,big:1.5}))].map(N=>({...N,rad:.5+N.s*.9,sp:(.5+N.r)*(N.s<.5?1:-1)})),Bt=["#ff9a3a","#3a7ad8","#f2c94c","#2f8f9a"],Gt=m(lt,nn("#ffffff"),xt,(N,vt,ut)=>{u.position.set(N.x,N.h,N.z),ut.setColorAt(vt,f.set(Bt[vt%Bt.length]))}),ue=new vr(.16,0);ue.scale(.45,.3,1.4);const Fe=St(e.mobile?5:8,.9,2.6).map(N=>({...N,rad:2+N.s*3,speed:(.25+N.r*.3)*(N.r<.5?1:-1)})),ke=9,we=new gn(ue,new Le({color:"#2f5f72",transparent:!0,opacity:.75}),Math.max(1,Fe.length*ke));we.count=Fe.length*ke,we.renderOrder=1,i.add(we);const xn=Array.from({length:ke},()=>[(n()-.5)*1.4,(n()-.5)*.25,(n()-.5)*1.4,n()*6]),dn=N=>{Dt.position.y=.3+Math.sin(N*1.2)*.08,Dt.rotation.z=Math.sin(N*.9)*.04,Dt.rotation.x=Math.sin(N*1.3+1)*.03,Fe.forEach((ut,Kt)=>{const te=N*ut.speed+ut.r*6,At=ut.x+Math.cos(te)*ut.rad,Jt=ut.z+Math.sin(te)*ut.rad,se=Math.atan2(-Math.sin(te)*ut.speed,Math.cos(te)*ut.speed);for(let ge=0;ge<ke;ge++){const[Ee,rn,Xn,Qn]=xn[ge];u.position.set(At+Ee+Math.sin(N*2+Qn)*.1,Math.max(o(At,Jt)+.25,-.75)+rn,Jt+Xn),u.rotation.set(0,se+Math.sin(N*6+Qn)*.15,0),u.scale.setScalar(1),u.updateMatrix(),we.setMatrixAt(Kt*ke+ge,u.matrix)}}),we.instanceMatrix.needsUpdate=!0,xt.forEach((ut,Kt)=>{const te=N*ut.sp+ut.r*6+Math.sin(N*.7+Kt)*.6,At=ut.x+Math.cos(te)*ut.rad,Jt=ut.z+Math.sin(te)*ut.rad;u.position.set(At,Math.min(o(At,Jt)+.08,0),Jt),u.rotation.set(0,-te+(ut.sp>0?0:Math.PI),Math.sin(N*9+Kt)*.2),u.scale.setScalar((.9+ut.s*.5)*(ut.big??1)),u.updateMatrix(),Gt.setMatrixAt(Kt,u.matrix)}),Gt.instanceMatrix.needsUpdate=!0;const vt=Math.min(.05,Math.max(0,N-(dn.last??N)));dn.last=N,q.forEach((ut,Kt)=>{if(ut.t-=vt,ut.t<=0&&(ut.run>0?(ut.run=0,ut.t=.8+Math.random()*2.5):(ut.run=(Math.random()<.5?-1:1)*(.9+Math.random()*.8),ut.t=.4+Math.random()*.9,Math.random()<.3&&(ut.dir+=(Math.random()-.5)*1.5))),ut.run){const te=ut.x+Math.cos(ut.dir)*ut.run*vt,At=ut.z-Math.sin(ut.dir)*ut.run*vt,Jt=o(te,At);Jt>.05&&Jt<.5&&Math.hypot(te-ut.home.x,At-ut.home.z)<3.5?(ut.x=te,ut.z=At,ut.h=Jt):ut.run=-ut.run}u.position.set(ut.x,ut.h+(ut.run?Math.abs(Math.sin(N*30+Kt))*.015:0),ut.z),u.rotation.set(0,ut.dir,ut.run?Math.sin(N*30+Kt)*.08:0),u.scale.setScalar(1),u.updateMatrix(),zt.setMatrixAt(Kt,u.matrix)}),zt.instanceMatrix.needsUpdate=!0,!((N*60|0)%2)&&(L.forEach((ut,Kt)=>{u.position.set(ut.x,ut.h-.1,ut.z),u.rotation.set(Math.sin(N*1.7+ut.x*.3)*.08,ut.r*6,Math.cos(N*1.4+ut.z*.3)*.08),u.scale.setScalar(.8+ut.s*.6),u.updateMatrix(),O.setMatrixAt(Kt,u.matrix)}),O.instanceMatrix.needsUpdate=!0,ae.forEach((ut,Kt)=>{u.position.set(ut.x,ut.h,ut.z),u.rotation.set(Math.sin(N*1.1+ut.x)*.12,ut.r*6,Math.cos(N*.9+ut.z)*.12),u.scale.setScalar(.8+ut.s*.7),u.updateMatrix(),le.setMatrixAt(Kt,u.matrix)}),le.instanceMatrix.needsUpdate=!0)};H.updateMatrixWorld(!0);const Jn=[];return H.children.forEach(N=>{if(N.geometry.type==="CylinderGeometry"){const vt=N.getWorldPosition(new G);Jn.push({x:vt.x,z:vt.z,r:.15})}}),Jn.push({x:_t,z:B,r:.9}),{colliders:p,update:dn,obstacles:Jn}}function vh(i,{heightTex:t,ext:e,grid:n,quality:s,sunDir:r,colors:a,level:o=.05,size:l=220,center:c=[0,0],maxDepth:h=100}){const u=ci.merge([Ht.fog,{uTime:{value:0},uHeight:{value:t},uExt:{value:e},uGrid:{value:n},uLevel:{value:o},uMaxDepth:{value:h},uShallow:{value:new Pt(a.shallow)},uMid:{value:new Pt(a.mid)},uDeep:{value:new Pt(a.deep)},uSun:{value:r.clone().normalize()},uCaustic:{value:(s.mobile?.8:1)*a.caustic}}]);u.uHeight.value=t;const f=new $e({uniforms:u,transparent:!0,depthWrite:!1,fog:!0,vertexShader:`
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
      }`}),p=l<50?8:s.mobile?40:64,g=new Kn(l,l,p,p);g.rotateX(-Math.PI/2);const M=new oe(g,f);return M.position.set(c[0],o,c[1]),M.renderOrder=2,i.add(M),{mesh:M,update(m){u.uTime.value=m}}}function xh(i,t){const e=new go(Float32Array.from(i),t,t,fo,fi);return e.magFilter=e.minFilter=vn,e.generateMipmaps=!1,e.needsUpdate=!0,e}const hc={uOlPx:{value:2},uOlRes:{value:new Et(1,1)},uInk:{value:new Pt("#1f1a1c")}},h1=.16,f1=.65,fc={rock:new Set,tree:new Set,tower:new Set,figure:new Set},dc={rock:!0,tree:!0,tower:!0,figure:!0};function d1(i,t,e,n){hc.uOlPx.value=i*t,hc.uOlRes.value.set(Math.max(1,e*t),Math.max(1,n*t))}function Lf(i){for(const t in fc)dc[t]=!!i[t],fc[t].forEach(e=>e.visible=dc[t])}function If(i){if(i.attributes.olNormal)return;i.attributes.normal||i.computeVertexNormals();const t=i.attributes.position,e=i.attributes.normal,n=t.count,s=new Map,r=new Array(n);for(let o=0;o<n;o++){const l=`${Math.round(t.getX(o)*1e4)},${Math.round(t.getY(o)*1e4)},${Math.round(t.getZ(o)*1e4)}`;r[o]=l;const c=s.get(l)||[0,0,0];c[0]+=e.getX(o),c[1]+=e.getY(o),c[2]+=e.getZ(o),s.set(l,c)}const a=new Float32Array(n*3);for(let o=0;o<n;o++){const l=s.get(r[o]),c=Math.hypot(l[0],l[1],l[2])||1;a[o*3]=l[0]/c,a[o*3+1]=l[1]/c,a[o*3+2]=l[2]/c}i.setAttribute("olNormal",new Ge(a,3))}const ol=new Map;function Uf(i,t,e,n){const s=`${i?i.uuid:"batch"}|${t}|${e}|${n}`;if(ol.has(s))return ol.get(s);const r=new Le({side:Pn,vertexColors:e});return r.color.copy(e||!i?new Pt(1,1,1):i.color).multiplyScalar(h1),r.visible=dc[t],r.onBeforeCompile=a=>{Object.assign(a.uniforms,hc),a.vertexShader=`attribute vec3 olNormal;
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
      diffuseColor.rgb = mix(diffuseColor.rgb, uInk, ${f1.toFixed(2)});`),n&&(a.uniforms.uKeep=xr.uKeep,a.uniforms.uRad=xr.uRad,a.fragmentShader=`uniform vec3 uKeep;
uniform float uRad;
`+a.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        {
          float k = 1.0 - smoothstep(uRad * 0.55, uRad, length(gl_FragCoord.xy - uKeep.xy));
          if (k > 0.0 && vOlZ < uKeep.z + 0.8) { // kronen ligger ~2 enheter nærmere kameraet enn foten
            float b = fract(52.9829189 * fract(dot(floor(gl_FragCoord.xy), vec2(0.06711056, 0.00583715)))); // samme støy som trærne (G7)
            if (k * 0.95 > b + 0.02) discard;
          }
        }`))},r.customProgramCacheKey=()=>`ol${n?"f":""}`,fc[t].add(r),ol.set(s,r),r}const Nf=i=>{const t=i.material;return i.isMesh&&!Array.isArray(t)&&(t.isMeshLambertMaterial||t.isMeshStandardMaterial)&&!t.transparent&&t.side!==Ke};function pc(i,t,e=!1){if(!Nf(i))return null;If(i.geometry);const n=!!(i.material.vertexColors&&i.geometry.attributes.color),s=new gn(i.geometry,Uf(i.material,t,n,e),i.instanceMatrix.count);return s.instanceMatrix=i.instanceMatrix,s.count=i.count,s.frustumCulled=!1,s.renderOrder=1,s.onBeforeRender=()=>{s.count=i.count},i.add(s),s}const _h=512,Mh=new Map;let mc=null;function p1(i){mc=i}function m1(i,t){const e=`${i.uuid}|${t}`;let n=Mh.get(e);if(n)return n;If(i);const s=new gn(i,Uf(null,t,!1,!1),_h);return s.instanceMatrix.setUsage(lu),s.setColorAt(0,new Pt),s.instanceColor.setUsage(lu),s.count=0,s.frustumCulled=!1,s.matrixAutoUpdate=!1,s.renderOrder=1,s.raycast=()=>{},n={mesh:s,parts:[]},s.onBeforeRender=()=>{const r=s.instanceMatrix.array,a=s.instanceColor.array;let o=0;for(let l=n.parts.length-1;l>=0;l--){const c=n.parts[l];let h=c,u=!0;for(;h.parent;){if(!h.visible){u=!1;break}h=h.parent}if(h!==mc){++c.userData.olMiss>300&&n.parts.splice(l,1);continue}if(c.userData.olMiss=0,!u||o>=_h)continue;r.set(c.matrixWorld.elements,o*16);const f=c.material.color;a[o*3]=f.r,a[o*3+1]=f.g,a[o*3+2]=f.b,o++}s.count=o,o&&(s.instanceMatrix.clearUpdateRanges(),s.instanceMatrix.addUpdateRange(0,o*16),s.instanceColor.clearUpdateRanges(),s.instanceColor.addUpdateRange(0,o*3),s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0)},mc.add(s),Mh.set(e,n),n}function ua(i,t){return i.traverse(e=>{!Nf(e)||e.userData.noOutline||(e.userData.olMiss=0,m1(e.geometry,t).parts.push(e))}),i}function Rs(i){const t=i.map(([u])=>u.index?u.toNonIndexed():u),e=t.reduce((u,f)=>u+f.attributes.position.count,0),n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Pt,a=new G;let o=0;t.forEach((u,f)=>{const p=i[f][1],g=u.attributes.position;for(let M=0;M<g.count;M++)a.fromBufferAttribute(g,M),p(a,r),n.set([a.x,a.y,a.z],(o+M)*3),s.set([r.r,r.g,r.b],(o+M)*3);o+=g.count});const l=new ze;l.setAttribute("position",new Ge(n,3)),l.setAttribute("color",new Ge(s,3)),l.computeVertexNormals();let c=0;const h=l.attributes.normal;return t.forEach((u,f)=>{const p=i[f][2],g=u.attributes.position.count;if(p)for(let M=0;M<g;M++)a.fromBufferAttribute(l.attributes.position,c+M).sub(p).normalize(),h.setXYZ(c+M,a.x,a.y,a.z);c+=g}),l}const gc=.7,vc=3.8;function g1(){const i=[],e=vc/8,n=new Pt("#7a5434"),s=new Pt("#a57a4e");for(let r=0;r<8;r++){const a=r/8,o=(r+1)/8,l=.24-a*.08,c=.24-o*.08,h=new He(c,l*1.12,e,7,1),u=h.attributes.position;for(let f=0;f<u.count;f++){const p=u.getY(f)+e/2+r*e,g=p/vc;u.setXYZ(f,u.getX(f)+gc*g*g,p,u.getZ(f))}i.push([h,(f,p)=>p.copy(n).lerp(s,f.y/e%1).multiplyScalar(.55+.45*xe.smoothstep(f.y,0,1.3))])}return Rs(i)}function v1(i){const n=[],s=[];for(let a=0;a<=12;a++){const o=a/12;s.push(new G(0,.35*o-1.25*o*o,o*2.7))}for(let a=0;a<12;a++){const o=a/12,l=s[a],c=s[a+1],h=.62*Math.sin(Math.PI*Math.min(1,o*1.1+.08))+.05;for(const u of[-1,1]){const f=new G(u*h,l.y-.08-h*.25,l.z+.32);u>0?n.push(l.x,l.y,l.z,c.x,c.y,c.z,f.x,f.y,f.z):n.push(l.x,l.y,l.z,f.x,f.y,f.z,c.x,c.y,c.z)}}const r=new ze;return r.setAttribute("position",new me(n,3)),r}function x1(){const i=[],t=new Pt("#3f8a3a"),e=new Pt("#9ad25a"),n=8;for(let s=0;s<n;s++){const r=v1();r.rotateX(-.15+s%2*.25),r.rotateY(s/n*Math.PI*2+s%2*.2),i.push([r,(a,o)=>{const l=Math.hypot(a.x,a.z);o.copy(t).lerp(e,Math.min(1,l/2.4))}])}for(let s=0;s<3;s++){const r=new Vn(.16,6,4);r.translate(Math.cos(s*2.1)*.18,-.2,Math.sin(s*2.1)*.18),i.push([r,(a,o)=>o.set("#6b4a2a")])}return Rs(i)}function yh(i,t,e){const n=i.map(([s,r,a,o],l)=>{const c=new Ms(o,2),h=c.attributes.position;for(let u=0;u<h.count;u++){const f=h.getX(u),p=h.getY(u),g=h.getZ(u),M=1+.07*Math.sin(f*7+l)*Math.sin(p*6)+.05*Math.sin(g*9+p*4);h.setXYZ(u,f*M,p*M*.92,g*M)}return c.translate(s,r,a),[c,(u,f)=>f.copy(e).lerp(t,xe.smoothstep(u.y,r-o*.6,r+o*.9)).multiplyScalar((.6+.4*xe.smoothstep(u.y,r-o,r))*(.55+.45*xe.smoothstep(Math.hypot(u.x,u.z),.1,.9+o*.5))),new G(s,r,a)]});return Rs(n)}function _1(i){const t=[],e=new Pt("#2f6a48"),n=new Pt("#4a8a5a"),s=new Pt("#ffffff");return[[1.5,1.5,.9],[1.15,1.35,1.8],[.8,1.2,2.6],[.45,.9,3.25]].forEach(([r,a,o])=>{const l=new Gn(r,a,10,2),c=l.attributes.position;for(let h=0;h<c.count;h++)c.getY(h)<-a/2+.01&&c.setY(h,c.getY(h)+Math.sin(h*1.7)*.12);l.translate(0,o,0),t.push([l,(h,u)=>{const f=(h.y-o+a/2)/a;u.copy(e).lerp(n,f),i&&f>.12&&u.lerp(s,Math.min(1,(f-.12)*2.6))}])}),Rs(t)}function M1(){const i=[],t=new He(.12,.26,3,6,4),e=t.attributes.position;for(let n=0;n<e.count;n++){const s=e.getY(n);e.setX(n,e.getX(n)+Math.sin(s*1.7)*.12)}return t.translate(0,1.5,0),i.push([t,(n,s)=>s.set(n.y<.4?"#1e1a18":"#3a302a")]),[[.4,1.9,.9,.7],[-.5,2.3,-.8,.6],[.2,2.7,.6,.5]].forEach(([n,s,r,a])=>{const o=new He(.03,.08,a,4);o.translate(0,a/2,0),o.rotateZ(r),o.translate(n*.3,s,0),i.push([o,(l,c)=>c.set("#2e2622")])}),Rs(i)}const xr={uKeep:{value:new G(-1e4,-1e4,0)},uRad:{value:120}};function bh(i){return i.onBeforeCompile=t=>{t.uniforms.uKeep=xr.uKeep,t.uniforms.uRad=xr.uRad,t.fragmentShader=t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
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
      }`)},i}function y1(i,t,e,n){const s=t.filter(D=>D.kind==="palm"),r=t.filter(D=>D.kind==="round"),a=t.filter(D=>D.kind==="bush"),o=t.filter(D=>D.kind==="pine"),l=t.filter(D=>D.kind==="dead"),c=bh(new We({vertexColors:!0})),h=bh(new We({vertexColors:!0,side:Ke})),u=new Pt(n.trees.leaf[0]),f=new Pt(n.trees.leaf[1]),p=new He(.16,.26,1.6,7);p.translate(0,.8,0);const g=Rs([[p,(D,z)=>z.set("#7a5434").multiplyScalar(.55+.45*xe.smoothstep(D.y,0,1.1))]]),M=yh([[0,2.2,0,1.15],[.8,1.9,.3,.8],[-.7,1.95,-.2,.85],[.1,2,-.85,.75],[-.2,2.9,.2,.8],[.35,1.8,.85,.7]],u,f),m=yh([[0,.45,0,.6],[.5,.35,.2,.45],[-.45,.38,-.15,.48],[.05,.7,.1,.42]],u,f),d=(D,z,k)=>{const W=new gn(D,z,Math.max(1,k));return W.count=k,W.castShadow=!0,W.receiveShadow=!0,i.add(W),pc(W,"tree",!0),W},y=d(g1(),c,s.length),b=d(x1(),h,s.length),x=d(g,c,r.length),R=d(M,c,r.length),T=d(m,c,a.length),E=new He(.14,.22,1.2,6);E.translate(0,.6,0);const A=d(Rs([[E,(D,z)=>z.set("#5a3e2a").multiplyScalar(.55+.45*xe.smoothstep(D.y,0,1))]]),c,o.length),v=d(_1(n.id==="vinter"),c,o.length),_=d(M1(),c,l.length),w=new Ve;s.forEach((D,z)=>{w.position.set(D.x,D.y-.1,D.z),w.rotation.set(0,D.phase,0),w.scale.setScalar(D.s),w.updateMatrix(),y.setMatrixAt(z,w.matrix)}),r.forEach((D,z)=>{w.position.set(D.x,D.y-.1,D.z),w.rotation.set(0,D.phase,0),w.scale.setScalar(D.s),w.updateMatrix(),x.setMatrixAt(z,w.matrix)}),o.forEach((D,z)=>{w.position.set(D.x,D.y-.1,D.z),w.rotation.set(0,D.phase,0),w.scale.setScalar(D.s),w.updateMatrix(),A.setMatrixAt(z,w.matrix)}),l.forEach((D,z)=>{w.position.set(D.x,D.y-.1,D.z),w.rotation.set(0,D.phase,(D.phase%1-.5)*.15),w.scale.setScalar(D.s),w.updateMatrix(),_.setMatrixAt(z,w.matrix)});const L=D=>{s.forEach((z,k)=>{const W=Math.cos(z.phase),V=Math.sin(z.phase);w.position.set(z.x+gc*W*z.s,z.y-.1+vc*z.s,z.z-gc*V*z.s),w.rotation.set(Math.sin(D*1.2+z.phase)*.07,z.phase+Math.sin(D*.7+z.phase)*.05,Math.cos(D*1+z.phase)*.07),w.scale.setScalar(z.s),w.updateMatrix(),b.setMatrixAt(k,w.matrix)}),b.instanceMatrix.needsUpdate=!0,r.forEach((z,k)=>{w.position.set(z.x,z.y-.1,z.z),w.rotation.set(Math.sin(D*1.1+z.phase)*.025,z.phase,Math.cos(D*.9+z.phase)*.025),w.scale.setScalar(z.s),w.updateMatrix(),R.setMatrixAt(k,w.matrix)}),R.instanceMatrix.needsUpdate=!0,a.forEach((z,k)=>{const W=1+Math.sin(D*1.6+z.phase)*.035;w.position.set(z.x,z.y-.12,z.z),w.rotation.set(0,z.phase,0),w.scale.set(z.s*W,z.s/W,z.s*W),w.updateMatrix(),T.setMatrixAt(k,w.matrix)}),T.instanceMatrix.needsUpdate=!0,o.forEach((z,k)=>{w.position.set(z.x,z.y-.1,z.z),w.rotation.set(Math.sin(D*.9+z.phase)*.02,z.phase,Math.cos(D*.8+z.phase)*.02),w.scale.setScalar(z.s),w.updateMatrix(),v.setMatrixAt(k,w.matrix)}),v.instanceMatrix.needsUpdate=!0};return L(0),{colliders:[...s.map(D=>({x:D.x,z:D.z,r:.35*D.s})),...r.map(D=>({x:D.x,z:D.z,r:.4*D.s})),...a.map(D=>({x:D.x,z:D.z,r:.7*D.s})),...o.map(D=>({x:D.x,z:D.z,r:.4*D.s})),...l.map(D=>({x:D.x,z:D.z,r:.3*D.s}))],update:L}}function ll(i,t=5){const e=[],n=[],s=new Pt,r=new Pt;for(let o=0;o<t;o++){const l=i()*Math.PI*2,c=i()*.16,h=.28+i()*.3,u=.04+i()*.03,f=Math.cos(l)*c,p=Math.sin(l)*c,g=(i()-.5)*.25,M=i()*Math.PI,m=Math.cos(M)*u,d=Math.sin(M)*u;e.push(f-m,0,p-d,f+m,0,p+d,f+Math.cos(l)*g,h,p+Math.sin(l)*g),s.setRGB(.72,.72,.72),r.setRGB(1.2,1.22,1.12),n.push(s.r,s.g,s.b,s.r,s.g,s.b,r.r,r.g,r.b)}const a=new ze;return a.setAttribute("position",new me(e,3)),a.setAttribute("color",new me(n,3)),a.setAttribute("normal",new me(new Array(e.length/3).fill(0).flatMap(()=>[0,1,0]),3)),a}function b1(){const i=[];for(let a=0;a<3;a++){const o=new Vn(.07,6,3);o.scale(1,.25,1.15);const l=a*2.094;o.translate(Math.cos(l)*.065,.05,Math.sin(l)*.065),i.push(o.toNonIndexed())}const t=i.reduce((a,o)=>a+o.attributes.position.count,0),e=new Float32Array(t*3),n=new Float32Array(t*3);let s=0;for(const a of i)e.set(a.attributes.position.array,s*3),n.set(a.attributes.normal.array,s*3),s+=a.attributes.position.count;const r=new ze;return r.setAttribute("position",new Ge(e,3)),r.setAttribute("normal",new Ge(n,3)),r}function S1(i,t,e,n,s){const{heightAt:r,pathDist:a,plinths:o}=t,l=t.lighthouse.pos,c={uTime:{value:0}},u=(w=>(w.onBeforeCompile=L=>{L.uniforms.uTime=c.uTime,L.vertexShader=L.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          #ifdef USE_INSTANCING
            vec2 ip = instanceMatrix[3].xz;
          #else
            vec2 ip = vec2(0.0);
          #endif
          float sway = sin(uTime * 1.8 + ip.x * 0.35 + ip.y * 0.27) * 0.6 + sin(uTime * 3.1 + ip.x * 1.3) * 0.25;
          transformed.x += sway * transformed.y * 0.22;
          transformed.z += cos(uTime * 1.5 + ip.y * 0.4) * transformed.y * 0.12;`),L.fragmentShader=L.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
  normal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);`)},w))(new We({vertexColors:!0,side:Ke})),f=new We({color:"#ffffff"}),p=[ll(s,7),ll(s,8),ll(s,6)],g=b1(),M={tak:{grass:["#4a8638","#86b452"],density:1,clover:.22,cloverCol:["#3a8a3a","#5aa84a"]},vinter:{grass:["#9a9a7a","#c8c4a0"],density:.18,clover:0,cloverCol:["#fff","#fff"]},vulkan:{grass:["#4a5a30","#6a7a3a"],density:.35,clover:0,cloverCol:["#fff","#fff"]}}[n.id],m=(e.mobile?.45:1)*M.density,d=13,y=8,b=Math.round(720*m),x=[],R=new Ve,T=new Pt,E=new Pt(M.grass[0]),A=new Pt(M.grass[1]),v=(w,L,O)=>{if(O<.72)return!1;const D=a(w,L);if(D<1||D<1.7&&s()<.6||Math.hypot(w-l.x,L-l.z)<4.3||n.volcano&&Math.hypot(w-n.volcano.x,L-n.volcano.z)<n.volcano.r*.7)return!1;for(const z of o)if((z.x-w)**2+(z.z-L)**2<2.6)return!1;return!t.extrasBlock||!t.extrasBlock(w,L)};for(let w=0;w<y;w++)for(let L=0;L<y;L++){const O=-y*d/2+w*d,D=-y*d/2+L*d;for(const[z,k]of[[0,b*.4],[1,b*.35],[2,b*.25]]){const W=[];for(let $=0;$<k*3&&W.length<k;$++){const J=O+s()*d,at=D+s()*d,Tt=r(J,at);v(J,at,Tt)&&W.push([J,at,Tt])}if(!W.length)continue;const V=new gn(p[z],u,W.length);V.userData.tier=z,W.forEach(([$,J,at],Tt)=>{R.position.set($,at-.04,J),R.rotation.set(0,s()*6.28,0),R.scale.setScalar(.8+s()*.7),R.updateMatrix(),V.setMatrixAt(Tt,R.matrix),V.setColorAt(Tt,T.copy(E).lerp(A,s()).multiplyScalar(t.shadeAt?t.shadeAt($,J):1))}),V.receiveShadow=!0,V.computeBoundingSphere(),i.add(V),x.push(V)}if(M.clover>0){const z=[],k=O+s()*d,W=D+s()*d;for(let V=0;V<b*M.clover*3&&z.length<b*M.clover;V++){const $=k+(s()-.5)*6,J=W+(s()-.5)*6,at=r($,J);v($,J,at)&&z.push([$,J,at])}if(z.length){const V=new gn(g,f,z.length),$=new Pt(M.cloverCol[0]),J=new Pt(M.cloverCol[1]);z.forEach(([at,Tt,kt],H)=>{R.position.set(at,kt-.02,Tt),R.rotation.set(0,s()*6.28,0),R.scale.setScalar(.8+s()*.8),R.updateMatrix(),V.setMatrixAt(H,R.matrix),V.setColorAt(H,T.copy($).lerp(J,s()).multiplyScalar(t.shadeAt?t.shadeAt(at,Tt):1))}),V.receiveShadow=!0,V.userData.tier=1,V.computeBoundingSphere(),i.add(V),x.push(V)}}}return{update(w){c.uTime.value=w},setLevel:w=>x.forEach(L=>{L.visible=w==="high"||L.userData.tier===0,L.receiveShadow=w==="high"}),count:x.reduce((w,L)=>w+L.count,0)}}function Sh(i,{arms:t=4,rStart:e=56,rEnd:n=4.2,turns:s=.7,a0:r=.35,steps:a=16}={}){const o=[];for(let l=0;l<t;l++){const c=r+l/t*Math.PI*2,h=[];for(let u=0;u<=a;u++){const f=u/a,p=e*(1-f)+n*f,g=c+f*s*Math.PI*2;h.push([i[0]+Math.cos(g)*p,i[1]+Math.sin(g)*p])}o.push(h)}return o}const w1={xc:i=>3*Math.sin(i*.06),w:4.2,bridgeZ:-20,top:50,wall:27},E1=[[[-15,56],[-17,40],[-13,24],[-17,8],[-14,-6],[-12,-18],[-11,-26],[-10,-33],[-10,-38.4]],[[17,56],[19,40],[15,24],[18,8],[15,-6],[12,-16],[5,-20],[-2,-20.5],[-8,-22],[-11,-26],[-10,-33],[-10,-38.4]]],T1=[90,210,330].map(i=>i*Math.PI/180),eo=11,A1=()=>{const i=[];for(let e=0;e<=48;e++){const n=e/48*Math.PI*2;i.push([Math.cos(n)*eo,Math.sin(n)*eo])}const t=T1.map(e=>[eo,20,30,40,50].map((n,s)=>{const r=e+Math.sin(n*.25+s)*.04;return[Math.cos(r)*n,Math.sin(r)*n]}));return[i,...t]},Er=[{id:"tak",name:"Tåkeøya",blurb:"Palmer, turkis lagune og en joint som har glødd i hundre år.",seed:1,radius:46,edgeAmp:[4.5,2.6,1.5],lighthouse:[0,0],paths:Sh([0,0]),plateausAuto:[{r:6.5,h:4.2},{r:5.5,h:3.4},{r:5,h:3}],waterfall:{poolR:1.9,basinR:2.7},palette:{sand:"#d8bb88",grass:"#6c9f4a",grass2:"#4d8340",path:"#b49c74",deep:"#cdb987",pathMix:.35},water:{shallow:"#a6e6cc",mid:"#45c2ae",deep:"#1f9aa2",caustic:1},sky:{fog:"#c4d8dc",hemiSky:"#dce9ff",hemiGround:"#5a6650",hemi:1.35,sun:"#ffeccc",sunI:2.25,exposure:.92,sunDir:[14,30,10],lantern:.9,grade:{tint:[1.02,1,.965],lift:[.008,.02,.035],sat:.92,vignette:.2}},skyDusk:{fog:"#d9a48e",hemiSky:"#ffd6b0",hemiGround:"#5a4a72",hemi:1.35,sun:"#ffb27a",sunI:2.7,exposure:1.05,sunDir:[24,17,4],grade:{tint:[1.07,1,.9],lift:[.025,.008,.03],sat:1.1,vignette:.3}},trees:{beach:{palm:.75,bush:.25},inland:{palm:.25,round:.45,bush:.3},leaf:["#a2cc5c","#357238"]},rock:["#b6bab8","#7f9f52"],life:["fireflies","butterflies","birds","leaves"],balance:{hp:1.3,count:1.25,speed:1,air:.5,types:{clerk:{hp:.7},complainer:{hp:.7},tank:{hp:.65},gull:{hp:.75}},extra:null},intro:{complainer:2,drone:3,lobbyist:5,heli:6,auditor:7,balloon:8}},{id:"vinter",name:"Vinterfjorden",blurb:"Snø, nordlys og isflak. Forbudsdirektoratet har kledd seg varmt.",seed:2,radius:47,edgeAmp:[3.5,3.2,2.2],lighthouse:[-10,-42.5],paths:E1,shape:"fjord",fjord:w1,nes:{x:-10,z0:-20,z1:-45,r:6.5},dockTheta:-1.2,icy:!0,palette:{sand:"#b9bec4",grass:"#f1f5fa",grass2:"#dfe8f2",path:"#c2ccd8",deep:"#9aa8b4"},water:{shallow:"#b8e2ee",mid:"#5a9cc0",deep:"#1d3f66",caustic:.55},sky:{fog:"#2a3550",hemiSky:"#9fb8ff",hemiGround:"#1c2440",hemi:1.1,sun:"#b8ccff",sunI:1.5,exposure:1.15,sunDir:[-12,26,8],grade:{tint:[.96,1,1.06],lift:[0,.01,.03],sat:1.05,vignette:.32}},trees:{beach:{pine:.6,bush:.4},inland:{pine:.8,bush:.2},leaf:["#e8f0f8","#2c5a44"]},rock:["#a9b2bc","#eef4fa"],life:["snow","aurora","icefloes"],balance:{hp:1.5,count:1.2,speed:.97,types:{tank:{hp:.95},clerk:{hp:1},lobbyMini:{hp:.9}},extra:{type:"tank",n:1,gap:4,path:"both",from:3}},intro:{balloon:3,auditor:4,lobbyist:5,drone:5,heli:6,complainer:6}},{id:"vulkan",name:"Vulkanøya",blurb:"Svart sand, lava-elver og glødende stein. Her trenger ingen fyrstikker.",seed:3,radius:48,edgeAmp:[3.5,2.2,1.6],lighthouse:[0,0],dockTheta:.5,paths:Sh([0,0],{arms:3,rStart:56,rEnd:4.4,turns:.75,a0:Math.PI/6,steps:24}),lava:A1(),moat:eo,eruption:{every:60,closed:10},fog:[38,100],palette:{sand:"#3a3533",grass:"#5a6a3c",grass2:"#3f4c2e",path:"#3e3b3a",deep:"#2c2826",pathMix:.15},water:{shallow:"#5a8f90",mid:"#2c5a63",deep:"#122b35",caustic:.4},sky:{fog:"#4a2c2a",hemiSky:"#ff9a6a",hemiGround:"#2a1a1a",hemi:1.15,sun:"#ff7a40",sunI:2.3,exposure:1.1,sunDir:[20,20,6],grade:{tint:[1.05,.98,.94],lift:[.02,0,0],sat:1.08,vignette:.32}},trees:{beach:{dead:.5,bush:.5},inland:{dead:.45,palm:.2,bush:.35},leaf:["#7a9a4a","#2f4a2a"]},rock:["#2e2a2a","#5a3a2a"],life:["ash","embers"],balance:{hp:1.25,count:1.1,speed:1,air:.6,types:{lobbyist:{hp:.6},lobbyMini:{hp:.6},clerk:{hp:.72},complainer:{hp:.72},gull:{hp:.75},drone:{hp:.8}},extra:{type:"gull",n:1,gap:1.4,from:3}},intro:{complainer:2,drone:2,lobbyist:3,heli:4,auditor:5,balloon:7}}];function C1(i){const[t,e,n]=i.edgeAmp,s=i.seed;return r=>i.radius+t*Math.sin(3*r+.4*s)+e*Math.sin(7*r+1.3*s)+n*Math.sin(11*r+s)}const wh={clerk:["complainer","lobbyist"],swarm:["complainer"],tank:["auditor","lobbyist"],gull:["drone","heli","balloon"]},cl={clerk:22,swarm:7,tank:95,gull:16,complainer:17,lobbyist:97,auditor:112,drone:9,heli:62,balloon:150},ul={complainer:.6,lobbyist:1.8,auditor:2.2,drone:.4,heli:2.4,balloon:3.5};function R1(i,t){let e=i.seed*9301+49297;const n=()=>(e=(e*9301+49297)%233280)/233280,s=i.intro||{};return t.map((r,a)=>{const o=a+1,l=r.map(f=>({...f})),c=i.balance.extra;c&&o>=c.from&&l.push({...c,n:c.n+Math.floor((o-c.from)/2),at:5});const h=(f,p,g)=>Math.max(1,Math.round(f*Math.min(1,cl[p]/cl[g]))),u=(f,p)=>{f.n=h(f.n,f.type,p),f.gap=ul[p]??f.gap,f.type=p};for(const[f,p]of Object.entries(s)){if(p!==o)continue;const g=l.find(M=>{var m;return(m=wh[M.type])==null?void 0:m.includes(f)});if(g&&g.n>=2){const M=Math.floor(g.n/2);l.push({...g,type:f,n:h(M,g.type,f),gap:ul[f]??g.gap,at:(g.at??0)+2}),g.n-=M}else g?u(g,f):l.push({type:f,n:Math.max(1,Math.min(3,Math.round(44/cl[f]))),gap:ul[f],path:0,at:6})}for(const f of l){const p=(wh[f.type]||[]).filter(g=>s[g]&&s[g]<o);p.length&&n()<.45&&u(f,p[Math.floor(n()*p.length)])}return l})}function na(){try{return Math.max(1,Math.min(Er.length,Number(localStorage.getItem("glod-unlocked"))||1))}catch{return 1}}function P1(i){try{i+2>na()&&localStorage.setItem("glod-unlocked",String(Math.min(Er.length,i+2)))}catch{}}function Ba(i,t,{color:e,size:n,speed:s,drift:r,additive:a,area:o=46,top:l=22}){const c=new Float32Array(t*3),h=new Float32Array(t);for(let d=0;d<t;d++)c[d*3]=(Math.random()-.5)*o*2,c[d*3+1]=Math.random()*l,c[d*3+2]=(Math.random()-.5)*o*2,h[d]=Math.random()*6.28;const u=new ze;u.setAttribute("position",new Ge(c,3));const f=document.createElement("canvas");f.width=f.height=32;const p=f.getContext("2d"),g=p.createRadialGradient(16,16,0,16,16,16);g.addColorStop(0,"rgba(255,255,255,1)"),g.addColorStop(1,"rgba(255,255,255,0)"),p.fillStyle=g,p.fillRect(0,0,32,32);const M=new vo({color:e,size:n,map:new pi(f),transparent:!0,depthWrite:!1,blending:a?mi:es,opacity:a?1:.85}),m=new Bc(u,M);return m.frustumCulled=!1,i.add(m),(d,y,b)=>{for(let x=0;x<t;x++){let R=c[x*3+1]-s*d*(.7+h[x]%1*.6);c[x*3]+=Math.sin(b*.7+h[x])*r*d,(s<0?R>l:R<0)&&(R=s<0?0:l,c[x*3]=y.x+(Math.random()-.5)*o*2,c[x*3+2]=y.z+(Math.random()-.5)*o*2),c[x*3+1]=R}u.attributes.position.needsUpdate=!0}}function D1(i,t,e,n,s=160){const r=new Hc(i.map(([u,f])=>new G(u,0,f))),a=r.getLength(),o=[],l=[],c=[];for(let u=0;u<=s;u++){const f=u/s,p=r.getPointAt(f),g=r.getTangentAt(f),M=-g.z,m=g.x,d=t*(.75+.25*Math.sin(f*9));for(const y of[-1,1]){const b=p.x+M*d*y,x=p.z+m*d*y;o.push(b,e(b,x)+n,x),l.push(f*a,(y+1)/2)}if(u<s){const y=u*2;c.push(y,y+1,y+2,y+1,y+3,y+2)}}const h=new ze;return h.setAttribute("position",new me(o,3)),h.setAttribute("uv",new me(l,2)),h.setIndex(c),h.computeVertexNormals(),{geo:h,curve:r,len:a}}function L1(i,t,e,n){var M;const{heightAt:s}=t,r=[],a=[],o=[],l=[],c=[],h=e.mobile?.5:1,u=new Set(n.life);if(u.has("aurora")){const m=new $e({transparent:!0,depthWrite:!1,blending:mi,side:Ke,fog:!1,uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const[d,y,b]of[[0,-66,0],[-62,-20,Math.PI/2.4],[62,-24,-Math.PI/2.4]]){const x=new oe(new Kn(150,26,96,1),m);x.position.set(d,20,y),x.rotation.y=b,i.add(x)}a.push((d,y,b)=>m.uniforms.uTime.value=b)}if(u.has("snow")&&a.push(Ba(i,Math.round(900*h),{color:"#ffffff",size:.28,speed:2.2,drift:.8})),u.has("ash")&&a.push(Ba(i,Math.round(500*h),{color:"#6a625e",size:.22,speed:1.2,drift:.6})),u.has("embers")&&a.push(Ba(i,Math.round(160*h),{color:"#ff8a3a",size:.25,speed:-1.6,drift:1.2,additive:!0,top:10})),u.has("icefloes")){const m=[];for(let R=0;R<6e3&&m.length<70*h;R++){const T=(Math.random()-.5)*120,E=(Math.random()-.5)*120,A=.05-s(T,E);A>.15&&A<1.4&&m.every(v=>Math.hypot(v.x-T,v.z-E)>2.2)&&m.push({x:T,z:E,s:.6+Math.random()*1.1,r:Math.random()*6})}const d=new He(1,.9,.18,7),y=d.attributes.position;for(let R=0;R<y.count;R++){const T=Math.atan2(y.getZ(R),y.getX(R)),E=.75+.35*Math.abs(Math.sin(T*2.3+R));y.setX(R,y.getX(R)*E),y.setZ(R,y.getZ(R)*E)}d.computeVertexNormals();const b=new gn(d,new We({color:"#eaf6ff"}),Math.max(1,m.length));b.count=m.length,b.receiveShadow=!0,i.add(b);const x=new Ve;a.push((R,T,E)=>{m.forEach((A,v)=>{x.position.set(A.x+Math.sin(E*.1+A.r)*.4,.08+Math.sin(E*1.1+A.r)*.03,A.z),x.rotation.set(Math.sin(E*.9+A.r)*.03,A.r+E*.02,Math.cos(E*.8+A.r)*.03),x.scale.set(A.s,1,A.s),x.updateMatrix(),b.setMatrixAt(v,x.matrix)}),b.instanceMatrix.needsUpdate=!0})}if(n.lava){const m=new $e({uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const x of n.lava){const R=D1(x,1.25,s,.07);i.add(new oe(R.geo,m));const T=[];let E=!1;for(let A=0;A<=1;A+=1.4/R.len){const v=R.curve.getPointAt(Math.min(1,A));if(t.pathDist(v.x,v.z)<2.4){E||c.push({x:v.x,z:v.z,tan:R.curve.getTangentAt(Math.min(1,A))}),E=!0;continue}E=!1,o.push({x:v.x,z:v.z,r:1.4})}for(const A of[.25,.7]){const v=R.curve.getPointAt(A),_=new ea("#ff6a2a",14,12,1.6);_.position.set(v.x,s(v.x,v.z)+1.2,v.z),i.add(_),T.push(_)}a.push((A,v,_)=>T.forEach((w,L)=>w.intensity=12+3*Math.sin(_*2.3+L)))}a.push((x,R,T)=>m.uniforms.uTime.value=T);const d=new Cn(3.4,.35,4.2),y=new We({color:((M=n.rock)==null?void 0:M[0])??"#555"}),b=new He(2.4,2.4,.1,18);for(const x of c){const R=s(x.x,x.z)+.12,T=new oe(d,y);T.position.set(x.x,R,x.z),T.rotation.y=-Math.atan2(x.tan.z,x.tan.x),T.castShadow=T.receiveShadow=!0,i.add(T);const E=new oe(b,new Le({color:new Pt("#ff5a1a").multiplyScalar(2.2),transparent:!0,opacity:0}));E.position.set(x.x,R+.25,x.z),E.visible=!1,i.add(E);const A=new ea("#ff6a2a",0,14,1.6);A.position.set(x.x,R+1.6,x.z),i.add(A);let v=!1;l.push({x:x.x,z:x.z,get closed(){return v},setClosed(_){v=_,E.visible=_}}),a.push((_,w,L)=>{const O=v?1:0;E.material.opacity+=(O*.9-E.material.opacity)*Math.min(1,_*3),!v&&E.material.opacity<.02&&(E.visible=!1),A.intensity=E.material.opacity*(22+6*Math.sin(L*9))})}}if(n.volcano){const m=n.volcano;o.push({x:m.x,z:m.z,r:m.r*.55});const d=new oe(new gr(m.r*.22,20),new Le({color:new Pt("#ff5a1a").multiplyScalar(2.4)}));d.rotation.x=-Math.PI/2,d.position.set(m.x,s(m.x,m.z)+.2,m.z),i.add(d);const y=new _o(.35,0),b=[];for(let T=0;T<3e3&&b.length<50*h;T++){const E=(Math.random()-.5)*96,A=(Math.random()-.5)*96,v=s(E,A);v>.4&&t.pathDist(E,A)>2.2&&b.push({x:E,z:A,h:v,s:.5+Math.random()})}const x=new gn(y,new Le({color:new Pt("#ff7a2a").multiplyScalar(1.8)}),Math.max(1,b.length));x.count=b.length;const R=new Ve;b.forEach((T,E)=>{R.position.set(T.x,T.h,T.z),R.rotation.set(T.s,T.s*3,0),R.scale.set(T.s,T.s*.5,T.s),R.updateMatrix(),x.setMatrixAt(E,R.matrix)}),i.add(x)}if(n.waterfall&&n.waterfall._lvl!==void 0){const m=n.waterfall,d=m.basin[0]-m.lip[0],y=m.basin[1]-m.lip[1],b=Math.hypot(d,y),x=d/b,R=y/b,T=m._lvl-.1,E=14,A=1.25,v=[],_=[],w=[];for(let $=0;$<=E;$++){const J=$/E,at=.35+1.5*J*J,Tt=T-(T-.06)*(J*J*.6+J*.4);for(const kt of[-1,1])v.push(m.lip[0]+x*at-R*A*kt*(.85+J*.3),Tt,m.lip[1]+R*at+x*A*kt*(.85+J*.3)),_.push((kt+1)/2,J);if($<E){const kt=$*2;w.push(kt,kt+1,kt+2,kt+1,kt+3,kt+2)}}const L=new ze;L.setAttribute("position",new me(v,3)),L.setAttribute("uv",new me(_,2)),L.setIndex(w);const O=new $e({transparent:!0,depthWrite:!1,side:Ke,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform float uTime; varying vec2 vUv;
        float h(float x) { return fract(sin(x * 127.1) * 43758.5); }
        void main() {
          float col = floor(vUv.x * 18.0);
          float streak = fract(vUv.y * (1.6 + h(col) * 1.2) - uTime * (1.4 + h(col + 3.0) * 0.8));
          float s = smoothstep(0.0, 0.25, streak) * (1.0 - smoothstep(0.55, 1.0, streak));
          float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
          vec3 c = mix(vec3(0.45, 0.85, 0.88), vec3(1.0), s * 0.8 + vUv.y * 0.3);
          gl_FragColor = vec4(c, (0.55 + 0.4 * s) * edge);
        }`});i.add(new oe(L,O));const D=(()=>{const $=document.createElement("canvas");$.width=$.height=128;const J=$.getContext("2d"),at=(()=>{let kt=9;return()=>(kt=kt*16807%2147483647)/2147483647})();for(let kt=0;kt<260;kt++){const H=at()*Math.PI*2,Z=Math.pow(at(),.7)*58,ht=1.5+at()*5*(1-Z/70);J.fillStyle=`rgba(255,255,255,${.55+at()*.45})`,J.beginPath(),J.arc(64+Math.cos(H)*Z,64+Math.sin(H)*Z,ht,0,Math.PI*2),J.fill()}J.globalCompositeOperation="destination-in";const Tt=J.createRadialGradient(64,64,8,64,64,63);return Tt.addColorStop(0,"rgba(0,0,0,1)"),Tt.addColorStop(.6,"rgba(0,0,0,0.85)"),Tt.addColorStop(1,"rgba(0,0,0,0)"),J.fillStyle=Tt,J.fillRect(0,0,128,128),new pi($)})(),z=new oe(new gr(1.5,20),new Le({map:D,color:"#ffffff",transparent:!0,opacity:.9,depthWrite:!1}));z.rotation.x=-Math.PI/2;const k=m.lip[0]+x*1.9,W=m.lip[1]+R*1.9;z.position.set(k,.1,W),i.add(z);const V=Ba(i,Math.round(60*h),{color:"#ffffff",size:.35,speed:-.9,drift:.6,area:1.4,top:2.2});a.push(($,J,at)=>{O.uniforms.uTime.value=at,z.scale.setScalar(1+Math.sin(at*5)*.06),z.rotation.z=at*.4,z.material.opacity=.8+.12*Math.sin(at*7),V($,{x:k,z:W},at)}),o.push({x:k,z:W,r:.9})}const f=(m,d)=>o.some(y=>(y.x-m)**2+(y.z-d)**2<y.r*y.r);let p=0;return{colliders:r,update:(m,d=t.lighthouse.pos)=>{const y=Math.min(.05,Math.max(0,m-p));p=m;for(const b of a)b(y,d,m)},blocks:f,blockers:o,bridges:l}}function zf(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ze;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Eh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const p=[];for(let M=0;M<a[h].length;++M)p.push(a[h][M][f]);const g=Eh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Eh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Ge(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<e;g++){const M=h.getComponent(f,g);o.setComponent(f+u,g,M)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function Ff(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let a=0;const o=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let y=0,b=o.length;y<b;y++){const x=o[y],R=i.attributes[x];l[x]=new R.constructor(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);const T=i.morphAttributes[x];T&&(c[x]||(c[x]=[]),T.forEach((E,A)=>{const v=new E.array.constructor(E.count*E.itemSize);c[x][A]=new E.constructor(v,E.itemSize,E.normalized)}))}const p=t*.5,g=Math.log10(1/t),M=Math.pow(10,g),m=p*M;for(let y=0;y<r;y++){const b=n?n.getX(y):y;let x="";for(let R=0,T=o.length;R<T;R++){const E=o[R],A=i.getAttribute(E),v=A.itemSize;for(let _=0;_<v;_++)x+=`${~~(A[u[_]](b)*M+m)},`}if(x in e)h.push(e[x]);else{for(let R=0,T=o.length;R<T;R++){const E=o[R],A=i.getAttribute(E),v=i.morphAttributes[E],_=A.itemSize,w=l[E],L=c[E];for(let O=0;O<_;O++){const D=u[O],z=f[O];if(w[z](a,A[D](b)),v)for(let k=0,W=v.length;k<W;k++)L[k][z](a,v[k][D](b))}}e[x]=a,h.push(a),a++}}const d=i.clone();for(const y in i.attributes){const b=l[y];if(d.setAttribute(y,new b.constructor(b.array.slice(0,a*b.itemSize),b.itemSize,b.normalized)),y in c)for(let x=0;x<c[y].length;x++){const R=c[y][x];d.morphAttributes[y][x]=new R.constructor(R.array.slice(0,a*R.itemSize),R.itemSize,R.normalized)}}return d.setIndex(h),d}const de=(i,t={})=>new We({color:i,flatShading:!0,...t}),Js=(i,t)=>new Le({color:new Pt(i).multiplyScalar(t)}),ft={coat:de("#f2c23c"),coatDark:de("#c99a22"),skin:de("#f1c7a0"),beanieG:de("#3f8f4a"),beanieY:de("#f2c94c"),beanieR:de("#d4553a"),boot:de("#3a2c22"),eyeW:new Le({color:"#ffffff"}),eyeB:new Le({color:"#1c1820"}),suit:de("#6b6f78"),suitDark:de("#3c4150"),suitNavy:de("#2c3a5c"),shirt:de("#f4f1ea"),tie:de("#b8322a"),paper:de("#fbfaf4"),stampInk:de("#a8233a"),woodLight:de("#c49360"),glasses:de("#222428"),binderR:de("#c94f3f"),binderB:de("#3f6fc9"),binderY:de("#e6b93f"),gull:de("#f4f2ee"),gullWing:de("#c4ccd4"),gullTip:de("#2e3038"),gullBand:de("#8e98a4"),beak:de("#f0a43a"),megaRed:de("#d8453a"),mouth:new Le({color:"#4a2a2a"}),smile:new Le({color:"#c8485a"}),wood:de("#9a6a42"),woodDark:de("#6e4a2c"),iron:de("#55585e"),speaker:de("#2a2a30"),cone:de("#4a4a52"),rasG:de("#3f9a4a"),rasY:de("#f2c94c"),rasR:de("#d4553a"),chipsBag:de("#f2b632"),chipsRed:de("#d8453a"),chip:de("#f0c860"),ringMat:new We({color:"#f1efe9",transparent:!0,opacity:.8}),ember:Js("#ff9a3a",2.4),emberCore:Js("#fff1c2",2),rolling:de("#5a9a5a"),rollingPaper:de("#fffdf5"),lantern:Js("#ffd27a",2.2),hpBg:new Le({color:"#2a2020",depthTest:!1,transparent:!0,opacity:.6}),hpFg:new Le({color:"#d8553a",depthTest:!1}),levelPip:Js("#9fffb0",1.6),bottle:new We({color:"#7fd6ff",transparent:!0,opacity:.8}),bubble:new We({color:"#dff6ff",transparent:!0,opacity:.45,emissive:"#5a7a9a"}),kiteSail:new We({color:"#ff7a5a",side:Ke}),rope:de("#d9c8a0"),ledger:de("#2f5a3a"),track:de("#8a4ac8"),briefcase:de("#6a3a1a"),brass:de("#d8b040"),rotor:new Le({color:"#cfd6dc",transparent:!0,opacity:.45}),redLight:Js("#ff3030",2),balloonA:de("#e8e4d8"),balloonB:de("#c8463a"),heli:de("#f2c23c"),glassDark:de("#2a3440"),spot:new Le({color:"#fff6c8",transparent:!0,opacity:.18,blending:mi,depthWrite:!1,side:Ke}),pizza:de("#e8603a"),pizzaCrust:de("#e8b866"),lampGlass:new We({color:"#ff8a5a",transparent:!0,opacity:.45,emissive:"#6a1a10"}),lampBlob:Js("#ff9a2a",2.2)},mt={sphere:new Vn(1,10,8),lowSphere:new Ms(1,1),capsule:new xo(.5,.7,3,8),cyl:new He(1,1,1,10),cone:new Gn(1,1,10),box:new Cn(1,1,1),dome:new Vn(1,10,6,0,Math.PI*2,0,Math.PI/2),ember:new vr(.22,0),leaf:new vr(.3,0),plane:new Kn(1,1),smileArc:new ar(.06,.018,4,10,Math.PI),ring:new ar(.32,.12,6,14),bubbleRing:new ar(.18,.025,4,12)};function gt(i,t,e,n,s,r=0,a=0,o=0,l=!0){const c=new oe(i,t);return c.scale.set(e,n,s),c.position.set(r,a,o),c.castShadow=l,c}function Yc(i,t,e,n,s=.12,r=.18){const a=new _e;a.position.set(t,e,n),a.userData.isEyes=!0;for(const o of[-1,1])a.add(gt(mt.sphere,ft.eyeW,s,s,s,o*r,0,0,!1)),a.add(gt(mt.sphere,ft.eyeB,s*.55,s*.55,s*.55,o*r,.01,-s*.7,!1));return i.add(a),a}const Of=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,31);return e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(.6,"rgba(0,0,0,0.25)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new pi(i)})(),I1=new Le({map:Of,transparent:!0,depthWrite:!1,fog:!1}),kf=new Kn(1,1).rotateX(-Math.PI/2);function $c(i,t){const e=new oe(kf,I1);e.scale.set(t*2,1,t*2),e.position.y=.04,e.renderOrder=1,i.add(e),i.userData.blob=e}function U1(i,t,e=.8){const n=new Le({map:Of,color:"#000000",transparent:!0,opacity:e,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),s=new gn(kf,n,Math.max(1,t.length));s.count=t.length;const r=new Ve;return t.forEach((a,o)=>{r.position.set(a.x,a.y+.04,a.z),r.scale.set(a.r*2,1,a.r*2),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.renderOrder=1,i.add(s),s}function Bf(i){const t=[];i.traverse(e=>{e.userData.isEyes&&t.push(e)}),i.userData.eyes=t}function Gf(i,t,e,n=1){const s=gt(mt.box,ft.mouth,.14*n,.025*n,.02,0,t,e,!1);s.rotation.z=.15;const r=gt(mt.smileArc,ft.smile,n,n,n,0,t+.03*n,e,!1);return r.rotation.z=Math.PI,r.visible=!1,i.add(s,r),{sour:s,smile:r}}const N1=(()=>{const i=new He(.07,.05,.55,8);return i.rotateZ(Math.PI/2),i})();function Vf(){const i=new _e,t=gt(mt.box,ft.rollingPaper,.55,.012,.26,0,0,0,!1),e=gt(mt.lowSphere,ft.rasG,.22,.06,.07,0,.03,0,!1),n=new oe(N1,ft.rollingPaper),s=gt(mt.cone,ft.rollingPaper,.05,.1,.05,.32,0,0,!1);return s.rotation.z=-Math.PI/2,n.add(s),i.add(t,e,n),i.userData={paper:t,herb:e,joint:n,tip:s},jc(i,0),i}function jc(i,t){const{paper:e,herb:n,joint:s,tip:r}=i.userData,a=xe.smoothstep,o=a(t,.08,.45),l=a(t,.5,.85);e.visible=l<.98,e.scale.set(.55,.012,.26*(1-.7*l)),n.visible=o>.01&&l<.98,n.scale.set(.22*o+.001,.06*o+.001,.07*(1-.5*l)+.001),s.visible=l>.02,s.scale.set(1,.35+.65*l,.35+.65*l),r.visible=t>.88}function z1(){const i=new _e,t=new _e;i.add(t),t.add(gt(mt.capsule,ft.coat,.75,.75,.7,0,.75,0)),t.add(gt(mt.cyl,ft.coatDark,.4,.06,.38,0,.62,0));const e=new _e;e.position.y=1.62,e.scale.setScalar(1.22),e.add(gt(mt.sphere,ft.skin,.33,.32,.32)),e.add(gt(mt.cyl,ft.beanieG,.35,.1,.35,0,.14,0)),e.add(gt(mt.cyl,ft.beanieY,.31,.1,.31,0,.24,0)),e.add(gt(mt.dome,ft.beanieR,.27,.22,.27,0,.29,0)),e.add(gt(mt.sphere,ft.beanieY,.08,.08,.08,0,.52,0)),Yc(e,0,.02,-.26,.07,.12);const n=Gf(e,-.12,-.3,.8);n.sour.visible=!1,n.smile.visible=!0,t.add(e);const s=[-1,1].map(u=>{const f=gt(mt.capsule,ft.boot,.24,.32,.24,u*.18,.2,0);return t.add(f),f}),r=new _e;r.position.set(.48,1,-.1),r.add(gt(mt.box,ft.iron,.2,.28,.2,0,-.25,0)),r.add(gt(mt.sphere,ft.lantern,.1,.13,.1,0,-.25,0,!1)),t.add(r);const a=new _e;a.position.set(-.46,1.08,0),a.add(gt(mt.capsule,ft.coat,.16,.34,.16,0,-.28,0)),a.add(gt(mt.sphere,ft.skin,.1,.1,.1,0,-.52,0)),t.add(a);const o=new _e;o.add(gt(mt.box,ft.rolling,.7,.12,.42,0,0,0,!1)),o.add(gt(mt.box,ft.rollingPaper,.6,.08,.36,.06,.08,0,!1)),o.add(gt(mt.leaf,ft.rasG,.35,.05,.35,-.12,.07,0,!1)),o.position.y=2.35,o.visible=!1,i.add(o);const l=new _e;l.position.y=2;for(let u=0;u<3;u++)l.add(gt(mt.ember,ft.emberCore,.6,.6,.6,Math.cos(u*2.1)*.45,0,Math.sin(u*2.1)*.45,!1));l.visible=!1,i.add(l);const c=new _e;c.position.set(.46,1.08,0),c.add(gt(mt.capsule,ft.coat,.16,.34,.16,0,-.28,0)),c.add(gt(mt.sphere,ft.skin,.1,.1,.1,0,-.52,0)),c.visible=!1,t.add(c);const h=Vf();return h.position.set(0,1,-.62),h.scale.setScalar(1.6),h.visible=!1,t.add(h),$c(i,.62),i.userData={body:t,legs:s,head:e,lanternArm:r,armL:a,armR:c,roll:h,carried:o,stars:l,blob:i.userData.blob},Bf(i),i}function vi(i,t){const e=new _e;e.position.y=t;const n=new oe(mt.plane,ft.hpBg);n.scale.set(1,.14,1),n.renderOrder=10;const s=new oe(mt.plane,ft.hpFg.clone());s.scale.set(.96,.09,1),s.position.z=.001,s.renderOrder=11,e.add(n,s),e.visible=!1,i.add(e),i.userData.hpBar=e,i.userData.hpFg=s}function Qs(i,{scale:t=1,suit:e=ft.suit,wide:n=1}={}){const s=t;i.add(gt(mt.capsule,e,.7*s*n,.62*s,.6*s,0,.72*s,0)),i.add(gt(mt.box,ft.shirt,.22*s,.4*s,.05,0,.98*s,-.27*s*Math.min(n,1.2),!1)),i.add(gt(mt.box,ft.tie,.07*s,.32*s,.05,0,.94*s,-.29*s*Math.min(n,1.2),!1));for(const o of[-1,1])i.add(gt(mt.capsule,ft.suitDark,.2*s,.25*s,.2*s,o*.16*s,.17*s,0));const r=new _e;r.position.y=1.5*s,r.add(gt(mt.sphere,ft.skin,.3*s,.3*s,.3*s)),r.add(gt(mt.dome,ft.suitDark,.31*s,.14*s,.31*s,0,.12*s,.02)),Yc(r,0,.03*s,-.25*s,.065*s,.11*s);const a=Gf(r,-.12*s,-.28*s,s);return i.add(r),{head:r,mouth:a}}function F1(i){const t=new _e,e=new _e;if(t.add(e),t.userData.body=e,i==="clerk"){const{head:n,mouth:s}=Qs(e);for(const o of[-1,1])n.add(gt(mt.box,ft.glasses,.11,.07,.02,o*.11,.03,-.3,!1));n.add(gt(mt.box,ft.glasses,.08,.015,.02,0,.04,-.3,!1));const r=new _e;r.position.set(.48,.9,-.15),r.add(gt(mt.cyl,ft.woodLight,.06,.25,.06,0,.12,0)),r.add(gt(mt.sphere,ft.woodLight,.09,.09,.09,0,.27,0)),r.add(gt(mt.box,ft.stampInk,.22,.08,.16,0,-.02,0)),e.add(r);const a=gt(mt.box,ft.paper,.3,.38,.02,-.46,.92,-.2);a.rotation.y=.4,e.add(a),t.userData.mouth=s,t.userData.arm=r,vi(t,2.15)}else if(i==="tank"){const{mouth:n}=Qs(e,{scale:1.25,suit:ft.suitNavy,wide:1.45}),s=new _e;s.position.set(0,0,-.95),s.add(gt(mt.box,ft.woodDark,.75,1.05,.45,0,.52,0));const r=gt(mt.box,ft.woodLight,.9,.08,.6,0,1.1,.04);r.rotation.x=.35,s.add(r),s.add(gt(mt.cyl,ft.iron,.02,.45,.02,.18,1.3,.1,!1)),s.add(gt(mt.sphere,ft.speaker,.05,.05,.05,.18,1.52,.04,!1)),e.add(s),t.userData.mouth=n,vi(t,2.6)}else if(i==="gull"){e.add(gt(mt.lowSphere,ft.gull,.36,.3,.6,0,0,0)),e.add(gt(mt.cone,ft.beak,.08,.3,.08,0,0,-.65).rotateX(-Math.PI/2));const n=gt(mt.cone,ft.megaRed,.2,.5,.2,0,-.22,-.65);n.rotation.x=Math.PI/2,e.add(n),e.add(gt(mt.cyl,ft.paper,.21,.06,.21,0,-.22,-.89).rotateX(Math.PI/2));const s=[-1,1].map(r=>{const a=new _e;a.position.set(r*.25,.05,0),a.add(gt(mt.box,ft.gullWing,.6,.06,.42,r*.3,0,0)),a.add(gt(mt.box,ft.gullBand,.58,.065,.1,r*.31,0,.17));const o=gt(mt.box,ft.gullTip,.42,.055,.3,r*.78,0,.04);return o.rotation.y=r*.18,a.add(o),e.add(a),a});t.userData.wings=s,Yc(e,0,.12,-.42,.06,.13),t.userData.mouth=null,vi(t,.8)}else if(i==="swarm"){const{mouth:n}=Qs(e,{scale:.6}),s=[ft.binderR,ft.binderB,ft.binderY],r=gt(mt.box,s[Math.floor(Math.random()*3)],.08,.34,.28,.32,.55,-.08);e.add(r),t.userData.mouth=n,vi(t,1.3)}else if(i==="auditor"){const{head:n,mouth:s}=Qs(e,{scale:1.1,suit:ft.suitDark});for(const a of[-1,1])n.add(gt(mt.box,ft.glasses,.12,.08,.02,a*.12,.03,-.33,!1));const r=new _e;r.position.set(0,.95,-.55),r.add(gt(mt.box,ft.ledger,1.05,1.2,.14)),r.add(gt(mt.box,ft.paper,.95,1.1,.1,0,0,.03,!1)),r.add(gt(mt.box,ft.brass,.3,.3,.02,0,.15,-.08,!1)),e.add(r),t.userData.mouth=s,t.userData.shield=r,vi(t,2.3)}else if(i==="complainer"){const{head:n,mouth:s}=Qs(e,{scale:.85,suit:ft.track});n.add(gt(mt.cyl,ft.rasR,.27,.06,.27,0,.1,0,!1));const r=new _e;r.position.set(.35,1.2,-.1),r.add(gt(mt.cyl,ft.track,.06,.45,.06,0,.2,0)),r.add(gt(mt.box,ft.paper,.32,.42,.02,0,.55,0)),e.add(r),t.userData.mouth=s,t.userData.arm=r,vi(t,1.8)}else if(i==="lobbyist"||i==="lobbyMini"){const n=i==="lobbyMini",{mouth:s}=Qs(e,{scale:n?.55:1.05,suit:ft.suitNavy});e.add(gt(mt.box,ft.brass,.08,.3,.05,0,n?.52:.99,n?-.17:-.32,!1)),e.add(gt(mt.box,ft.briefcase,n?.28:.5,n?.22:.36,.12,n?.3:.55,n?.3:.55,0)),t.userData.mouth=s,vi(t,n?1.2:2.1)}else if(i==="drone"){e.add(gt(mt.box,ft.iron,.42,.14,.42));const n=[];for(const[s,r]of[[1,1],[-1,1],[1,-1],[-1,-1]]){e.add(gt(mt.box,ft.speaker,.5,.04,.05,s*.22,0,r*.22).rotateY(s*r>0?Math.PI/4:-Math.PI/4));const a=gt(mt.cyl,ft.rotor,.2,.01,.2,s*.4,.08,r*.4,!1);e.add(a),n.push(a)}e.add(gt(mt.sphere,ft.redLight,.07,.07,.07,0,-.06,-.22,!1)),t.userData.rotors=n,t.userData.mouth=null,vi(t,.6)}else if(i==="balloon"){e.add(gt(mt.sphere,ft.balloonA,1.1,1.3,1.1,0,1.6,0));for(let n=0;n<4;n++)e.add(gt(mt.cyl,ft.balloonB,1.12-Math.abs(n-1.5)*.18,.18,1.12-Math.abs(n-1.5)*.18,0,1+n*.42,0,!1));e.add(gt(mt.box,ft.woodLight,.6,.4,.6,0,-.1,0)),e.add(gt(mt.sphere,ft.skin,.2,.2,.2,0,.25,0)),e.add(gt(mt.dome,ft.suitDark,.21,.1,.21,0,.32,0,!1));for(const[n,s]of[[1,1],[-1,1],[1,-1],[-1,-1]])e.add(gt(mt.cyl,ft.rope,.015,.8,.015,n*.28,.45,s*.28,!1));t.userData.mouth=null,vi(t,3.3)}else if(i==="heli"){e.add(gt(mt.capsule,ft.heli,.6,.55,.9,0,0,0).rotateX(Math.PI/2)),e.add(gt(mt.sphere,ft.glassDark,.28,.22,.24,0,.05,-.38,!1)),e.add(gt(mt.box,ft.heli,.12,.12,1.1,0,.05,.85));const n=gt(mt.box,ft.speaker,1.9,.02,.12,0,.4,0,!1),s=gt(mt.box,ft.speaker,.04,.5,.08,.08,.1,1.38,!1);e.add(n,s);const r=new oe(new Gn(1.2,4.5,14,1,!0),ft.spot);r.position.set(0,-2.3,-.2),r.visible=!1,e.add(r),t.userData.rotor=n,t.userData.tail=s,t.userData.beam=r,t.userData.mouth=null,vi(t,1)}return $c(t,{tank:.85,auditor:.7,balloon:.9,heli:.6,swarm:.35,lobbyMini:.35,drone:.35,gull:.45}[i]??.55),Bf(t),t}function O1(i){const t=i.mesh.userData.mouth;t&&(t.sour.visible=!1,t.smile.visible=!0),i.mesh.userData.hpBar.visible=!1}function k1(i){const t=new _e,e=new _e;if(t.add(e),i==="ring"){t.add(gt(mt.box,ft.wood,.9,.5,.9,0,.25,0)),e.position.y=.95;const a=gt(mt.cyl,ft.iron,.32,1.1,.32,0,0,-.15);a.rotation.x=Math.PI/2-.15,e.add(a),e.add(gt(mt.cyl,ft.woodDark,.38,.12,.38,0,.08,-.7).rotateX(Math.PI/2-.15)),e.add(gt(mt.sphere,ft.iron,.42,.42,.42,0,0,.42)),e.add(gt(mt.sphere,ft.ember,.12,.12,.12,0,.1,.8,!1))}else if(i==="chips"){t.add(gt(mt.cyl,ft.iron,.7,.3,.7,0,.15,0)),e.position.y=.3;const a=gt(mt.box,ft.chipsBag,.95,1.1,.6,0,.6,0);a.rotation.x=-.35,e.add(a),e.add(gt(mt.box,ft.chipsRed,.97,.3,.62,0,.55,0).rotateX(-.35));for(let o=0;o<5;o++)e.add(gt(mt.leaf,ft.chip,.3,.08,.3,(o-2)*.17,1.2,-.3-o%2*.1,!1))}else if(i==="speaker"){const a=new _e;a.add(gt(mt.box,ft.speaker,1,1.5,.75,0,.75,0)),a.add(gt(mt.box,ft.rasG,1.02,.12,.77,0,1.38,0,!1)),a.add(gt(mt.box,ft.rasY,1.02,.12,.77,0,1.26,0,!1)),a.add(gt(mt.box,ft.rasR,1.02,.12,.77,0,1.14,0,!1));const o=[];for(const[l,c]of[[.85,.33],[.35,.2]]){const h=gt(mt.cyl,ft.cone,c,.08,c,0,l,-.38,!1);h.rotation.x=Math.PI/2,a.add(h),o.push(h)}e.add(a),t.userData.woofers=o}else if(i==="bubble"){t.add(gt(mt.cyl,ft.speaker,.5,.25,.5,0,.12,0)),e.position.y=.3,e.add(gt(mt.cyl,ft.bottle,.36,1,.36,0,.5,0)),e.add(gt(mt.cyl,ft.rasR,.22,.2,.22,0,1.08,0));const a=gt(mt.cyl,ft.wood,.03,.8,.03,0,1.4,-.2);a.rotation.x=.5,e.add(a),e.add(gt(mt.bubbleRing,ft.rasY,1,1,1,0,1.75,-.42,!1).rotateX(.5));for(let o=0;o<3;o++)e.add(gt(mt.sphere,ft.bubble,.14+o*.04,.14+o*.04,.14+o*.04,.3-o*.25,1.7+o*.3,-.7-o*.15,!1))}else if(i==="kite"){for(let o=0;o<3;o++){const l=o/3*Math.PI*2,c=gt(mt.cyl,ft.wood,.07,1.6,.07,Math.cos(l)*.45,.7,Math.sin(l)*.45);c.rotation.set(Math.sin(l)*.28,0,-Math.cos(l)*.28),t.add(c)}e.position.y=1.55,e.add(gt(mt.cyl,ft.iron,.22,.3,.22,0,0,0).rotateZ(Math.PI/2));const a=qf();a.position.set(0,.7,0),a.scale.setScalar(.8),e.add(a),t.userData.kite=a}else if(i==="pizza"){t.add(gt(mt.box,ft.wood,1.2,.35,.9,0,.18,0));for(const o of[-1,1])t.add(gt(mt.box,ft.woodDark,.12,.9,.12,o*.45,.65,0));e.position.y=1;const a=new _e;a.add(gt(mt.box,ft.woodLight,.12,.12,1.5,0,0,-.4)),a.add(gt(mt.cyl,ft.pizzaCrust,.32,.06,.32,0,.08,-1.1)),a.add(gt(mt.cyl,ft.pizza,.27,.03,.27,0,.12,-1.1,!1)),a.rotation.x=-.35,e.add(a),t.userData.arm=a}else if(i==="lamp"){t.add(gt(mt.cone,ft.brass,.55,.7,.55,0,.35,0)),e.position.y=.7,e.add(gt(mt.capsule,ft.lampGlass,.75,.9,.75,0,.75,0,!1));const a=[];for(let o=0;o<3;o++){const l=gt(mt.sphere,ft.lampBlob,.16,.2,.16,0,.5+o*.3,0,!1);e.add(l),a.push(l)}e.add(gt(mt.cone,ft.brass,.3,.35,.3,0,1.55,0)),t.userData.blobs=a}const n=[];for(let a=0;a<5;a++){const o=gt(mt.leaf,ft.levelPip,.45,.1,.45,Math.cos(a*1.2566)*.95,.15,Math.sin(a*1.2566)*.95,!1);o.visible=a===0,t.add(o),n.push(o)}const s=new ss(1.45,1.7,40,1,0,Math.PI*2);s.rotateX(-Math.PI/2);const r=new oe(s,new Le({color:"#9fffb0",transparent:!0,opacity:.8,depthWrite:!1}));return r.position.y=.06,r.visible=!1,t.add(r),t.traverse(a=>{a.isMesh&&a!==r&&a.material!==ft.levelPip&&(a.castShadow=!0)}),$c(t,1),t.userData.head=e,t.userData.pips=n,t.userData.ring=r,t}function Hf(i,t){i.mesh.userData.pips.forEach((e,n)=>e.visible=n<t),i.mesh.scale.setScalar(1+(t-1)*.08)}function ia(i,t){const e=i.mesh.userData.ring;if(e.visible=t>0,t<=0)return;e.geometry.dispose();const n=new ss(1.45,1.7,40,1,0,Math.PI*2*t);n.rotateX(-Math.PI/2),e.geometry=n}function B1(){const i=new _e;return i.add(gt(mt.ember,ft.ember,1,1.3,1,0,0,0,!1)),i.add(gt(mt.ember,ft.emberCore,.5,.7,.5,0,0,0,!1)),i}function G1(){const i=new oe(mt.ring,ft.ringMat);return i.castShadow=!1,i}function Wf(){const i=new _e;return i.add(gt(mt.box,ft.chipsBag,.32,.4,.14,0,0,0,!0)),i.add(gt(mt.box,ft.chipsRed,.33,.12,.15,0,.02,0,!1)),i}function Xf(){const i=new ar(1,.08,4,32);return i.rotateX(Math.PI/2),new oe(i,new Le({color:"#c8ffd0",transparent:!0,opacity:.7,depthWrite:!1}))}let Ga=null;function V1(){if(Ga)return Ga;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d");["#d8453a","#f2c94c","#d8453a","#f2c94c","#3f9a4a","#f2c94c","#d8453a","#f2c94c"].forEach((n,s)=>{t.fillStyle=n,t.fillRect(0,s*8,64,8)});const e=new pi(i);return e.colorSpace=mn,e.wrapS=e.wrapT=bi,e.repeat.set(1,1.4),e.magFilter=vn,Ga=new We({map:e,flatShading:!0}),Ga}function qf(){const i=new _e,t=new Tf([new Et(0,.55),new Et(.38,0),new Et(0,-.75),new Et(-.38,0)]),e=new Xc(t,{depth:.035,bevelEnabled:!1});e.translate(0,0,-.0175);const n=new oe(e,V1());n.rotation.x=-Math.PI/2.4,n.castShadow=!0,i.add(n);const s=gt(mt.box,ft.woodDark,.025,1.3,.025,0,-.1,.03,!1),r=gt(mt.box,ft.woodDark,.76,.025,.025,0,0,.03,!1);n.add(s,r);const a=new _e;a.position.set(0,-.68,0),n.add(a);const o=[ft.rasR,ft.rasY,ft.rasG,ft.rasR,ft.rasY];let l=a;const c=[];for(let h=0;h<o.length;h++){const u=new _e;u.position.y=h?-.2:0,u.add(gt(mt.box,ft.rope,.015,.2,.015,0,-.1,0,!1));const f=new _e;f.position.y=-.2;for(const p of[-1,1]){const g=gt(mt.cone,o[h],.05,.1,.03,p*.05,0,0,!1);g.rotation.z=p*Math.PI/2,f.add(g)}u.add(f),l.add(u),l=u,c.push(u)}return i.userData.tailSegs=c,i}function Yf(){return gt(mt.sphere,ft.bubble,.28,.28,.28,0,0,0,!1)}function H1(){const i=new _e;return i.add(gt(mt.cyl,ft.pizzaCrust,.3,.06,.3,0,0,0,!0)),i.add(gt(mt.cyl,ft.pizza,.25,.03,.25,0,.04,0,!1)),i}const _r=20;function kn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function W1(i){const t=new Hc(i.map(([s,r])=>new G(s,0,r)),!1,"catmullrom",.5),e=t.getLength(),n=t.getSpacedPoints(400);return{curve:t,length:e,samples:n}}function X1(i,t,e,n,s){const a=new Cn(1,1,1,5,5,5),o=a.attributes.position,l=new G,c=new G,h=i/2,u=t/2,f=e/2,p=Math.min(n,h,u,f)*.98,g=s()*10,M=(s()-.5)*.12;for(let d=0;d<o.count;d++){l.set(o.getX(d)*i,o.getY(d)*t,o.getZ(d)*e),c.set(xe.clamp(l.x,-h+p,h-p),xe.clamp(l.y,-u+p,u-p),xe.clamp(l.z,-f+p,f-p)),l.sub(c);const y=l.length();y>0&&l.multiplyScalar(p/y),l.add(c);const b=1+.035*Math.sin(l.x*4.1+g)*Math.sin(l.z*3.7-g)+.025*Math.sin(l.y*6+g*2);l.x*=b,l.z*=b,l.y+=l.x*M,o.setXYZ(d,l.x,l.y,l.z)}a.deleteAttribute("normal"),a.deleteAttribute("uv");const m=Ff(a);return m.computeVertexNormals(),m}function q1(i,t,e,n){const s=new Pt(t),r=new Pt(e),a=new Pt,o=[[[2.3,.85,1.9,0,0,0],[1.6,.7,1.4,.2,-.1,.35]],[[1.5,1.5,1.4,-.35,.1,.1],[1.4,.8,1.3,.75,-.2,-.3],[.9,.6,.85,-.3,.05,.6]],[[2.4,.7,2,0,0,.2],[1.8,.65,1.5,-.15,.15,-.25],[1.1,.55,1,.2,-.1,.5]]][n%3],l=[];let c=0,h=0;o.forEach(([d,y,b,x,R,T],E)=>{const A=.88+i()*.24,v=X1(d*A,y*(.9+i()*.2),b*A,Math.min(d,y,b)*.28,i);v.rotateY(T+(i()-.5)*.3);const _=n%3===1&&E===1?0:c;v.translate(x,_+y/2,R),n%3===1&&E===1||(c=_+y*.92),h=Math.max(h,_+y),l.push(v)});const u=zf(l),f=u.attributes.position,p=u.attributes.normal,g=[],M=.95+i()*.1,m=i()*10;for(let d=0;d<f.count;d++){const y=f.getX(d),b=f.getY(d),x=f.getZ(d);a.copy(s).multiplyScalar(M*(.72+.28*xe.smoothstep(b,0,.9))*(p.getY(d)<-.3?.8:1));const R=Math.sin(y*2.3+m)*Math.sin(x*2.7-m)+.5*Math.sin(y*5.1-x*4.3+m),T=xe.smoothstep(p.getY(d),.6,.9)*xe.smoothstep(b,h-.3,h-.08)*xe.smoothstep(R,-.55,0);a.lerp(r,T),g.push(a.r,a.g,a.b)}return u.setAttribute("color",new me(g,3)),u}function Th(i,t,e,n,s,r,a=12,o={}){const l=o.dressed?.3:1,c=new He(t,e,n,a,3,!0),h=new ss(.001,t,a,4);h.rotateX(-Math.PI/2),h.translate(0,n/2,0);const u=zf([c,h]),f=u.attributes.position,p=i()*10;for(let T=0;T<f.count;T++){const E=f.getX(T),A=f.getY(T),v=f.getZ(T),_=Math.hypot(E,v);if(_<1e-4)continue;const w=Math.atan2(v,E);let L=1+l*(.05*Math.sin(w*3+p)+.035*Math.sin(w*7-p*2)+.025*Math.sin(A*9+w*4)),O=A;A>n/2-1e-4&&_>t*.97&&(L*=.93,O-=.08),f.setXYZ(T,E*L,O,v*L)}u.deleteAttribute("normal"),u.deleteAttribute("uv");const g=Ff(u);g.computeVertexNormals(),g.translate(0,n/2,0);const M=new Pt(s),m=new Pt(r),d=new Pt,y=[],b=new Pt("#ece3cc"),x=g.attributes.position,R=g.attributes.normal;for(let T=0;T<x.count;T++){const E=x.getX(T),A=x.getY(T),v=x.getZ(T),_=Math.atan2(v,E),w=Math.hypot(E,v);if(d.copy(M).multiplyScalar(.55+.45*xe.smoothstep(A,0,n*.9)),o.dressed){const D=xe.smoothstep(R.getY(T),.75,.95)*xe.smoothstep(A,n-.15,n-.08),z=1-xe.smoothstep(Math.abs(w-t*.72),.04,.1);d.lerp(b,D*(1-.75*z)),d.multiplyScalar(1-.45*z*D),y.push(d.r,d.g,d.b);continue}const L=Math.sin(E*1.9+p)*Math.sin(v*2.3-p)+.5*Math.sin(_*5+p)+.3*Math.sin(w*4),O=xe.smoothstep(A,n-.25,n-.05)*xe.smoothstep(L,0,.5)*xe.smoothstep(R.getY(T),.2,.7);d.lerp(m,O),y.push(d.r,d.g,d.b)}return g.setAttribute("color",new me(y,3)),g}function Ah(i,t=.55){const e=document.createElement("canvas");e.width=e.height=256;const n=e.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,256,256);const s=kn(4242);for(let l=0;l<90;l++){const c=225+s()*30|0;n.fillStyle=`rgba(${c},${c},${c},0.5)`,n.beginPath(),n.ellipse(s()*256,s()*256,8+s()*22,4+s()*10,s()*3,0,Math.PI*2),n.fill()}n.lineCap="round",n.lineJoin="round";const r=(l,c,h,u,f)=>{n.lineWidth=f,n.strokeStyle="rgba(46,44,50,0.85)",n.beginPath(),n.moveTo(l,c);for(let p=0;p<u;p++)h+=(s()-.5)*.9,l+=Math.cos(h)*9,c+=Math.sin(h)*9,n.lineTo(l,c),s()<.12&&f>1.2&&(n.stroke(),r(l,c,h+(s()<.5?1:-1)*(.6+s()*.6),u>>1,f*.7),n.lineWidth=f,n.strokeStyle="rgba(46,44,50,0.85)",n.beginPath(),n.moveTo(l,c));n.stroke()};for(let l=0;l<9;l++){const c=s()*256,h=s()*256,u=s()*6.28,f=5+(s()*7|0),p=1.6+s()*1.2;for(const[g,M]of[[0,0],[256,0],[-256,0],[0,256],[0,-256]])n.save(),n.translate(g,M),r(c,h,u,f,p),n.restore()}const a=new pi(e);a.colorSpace=mn,a.wrapS=a.wrapT=bi,a.anisotropy=4;const o=new We({vertexColors:!0});return o.onBeforeCompile=l=>{l.uniforms.uCrack={value:a},l.uniforms.uWaterC={value:new Pt(i)},l.vertexShader=`varying vec3 vRP;
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
      }`)},o.customProgramCacheKey=()=>`rock${t}`,o}function Y1(i,t,e){const n=C1(e),s=new G(e.lighthouse[0],0,e.lighthouse[1]),r=e.paths.map(W1),a=r.flatMap(I=>I.samples),o=(I,F)=>{let et=1/0;for(let pt=0;pt<a.length;pt+=3){const Mt=a[pt],Rt=(Mt.x-I)**2+(Mt.z-F)**2;Rt<et&&(et=Rt)}return Math.sqrt(et)};if(e.plateausAuto&&!e.plateaus){const I=kn(500+e.seed),F=[];for(const et of e.plateausAuto){let pt=null,Mt=-1;for(let Rt=0;Rt<500;Rt++){const wt=I()*Math.PI*2,nt=12+I()*24,Xt=Math.cos(wt)*nt,Vt=Math.sin(wt)*nt,he=o(Xt,Vt);if(he<et.r+3.5||Math.hypot(Xt-s.x,Vt-s.z)<et.r+9||F.some(Pe=>Math.hypot(Pe.x-Xt,Pe.z-Vt)<Pe.r+et.r+5))continue;const Ce=Math.min(he-et.r,9)+I()*.5;Ce>Mt&&(Mt=Ce,pt={x:Xt,z:Vt,...et})}pt&&F.push(pt)}if(e.plateaus=F,e.waterfall&&F[0]){const et=F[0],pt=e.waterfall;let Mt=0,Rt=-1;for(let Xt=0;Xt<16;Xt++){const Vt=Xt/16*Math.PI*2,he=et.x+Math.cos(Vt)*(et.r+3.2),Ce=et.z+Math.sin(Vt)*(et.r+3.2),Pe=o(he,Ce);Pe>Rt&&(Rt=Pe,Mt=Vt)}const wt=Math.cos(Mt),nt=Math.sin(Mt);pt.pool=[et.x+wt*(et.r-2.4),et.z+nt*(et.r-2.4)],pt.lip=[et.x+wt*(et.r-.3),et.z+nt*(et.r-.3)],pt.basin=[et.x+wt*(et.r+3),et.z+nt*(et.r+3)]}}const l=e.fjord,c=e.nes,h=(I,F)=>{if(e.shape==="fjord"){const et=F+30+2.2*Math.sin(I*.21)+1.2*Math.sin(I*.53+1),pt=xe.clamp(F,c.z1,c.z0),Mt=c.r-Math.hypot(I-c.x,F-pt)+(F<c.z1?0:.6*Math.sin(F*.7));return Math.max(et,Mt)}return n(Math.atan2(F,I))-Math.hypot(I,F)},u=(I,F,et=!1)=>{const pt=xe.smoothstep(h(I,F),-3,7),Mt=.9+.7*Math.sin(I*.17+1)*Math.cos(F*.21)+.35*Math.sin(I*.5+F*.4)+.3*Math.sin(I*.31-F*.23+2.1)+.18*Math.cos(I*.73+F*.61),Rt=2.4*Math.exp(-((I-s.x-2)**2+(F-s.z+1)**2)/60);let wt=-2.2+pt*(2.2+Mt+Rt);if(pt>.85&&wt<.35&&(wt=Math.max(-.42,.35-(.35-wt)*3.2)),l){const nt=Math.max(xe.smoothstep(Math.abs(I),l.wall-3,l.wall+6),xe.smoothstep(F,l.top+6,l.top+14));wt+=nt*(7+1.5*Math.sin(F*.13+I*.05));const Xt=Math.abs(I-l.xc(F)),Vt=1-xe.smoothstep(F,l.top-6,l.top+2);Xt<l.w+1.5&&Vt>0&&(wt=Math.min(wt,xe.lerp(wt,-1.6,Vt*(1-xe.smoothstep(Xt,l.w-.8,l.w+1.5)))))}for(const nt of e.plateaus||[]){const Xt=Math.hypot(I-nt.x,F-nt.z),Vt=Math.atan2(F-nt.z,I-nt.x),he=nt.r+Math.sin(Vt*5+nt.x)*.8+Math.sin(Vt*11)*.3;wt+=nt.h*xe.smoothstep(he-Xt,0,1.3)}if(e.waterfall&&!et){const nt=e.waterfall,Xt=Math.hypot(I-nt.pool[0],F-nt.pool[1]);Xt<nt.poolR+.6&&(nt._lvl??(nt._lvl=u(nt.pool[0],nt.pool[1],!0)-.12),wt=Math.min(wt,nt._lvl-.48*Math.sqrt(Math.max(0,1-Xt/(nt.poolR+.6)))));const Vt=xe.clamp(((I-nt.pool[0])*(nt.lip[0]-nt.pool[0])+(F-nt.pool[1])*(nt.lip[1]-nt.pool[1]))/((nt.lip[0]-nt.pool[0])**2+(nt.lip[1]-nt.pool[1])**2),0,1),he=nt.pool[0]+(nt.lip[0]-nt.pool[0])*Vt,Ce=nt.pool[1]+(nt.lip[1]-nt.pool[1])*Vt;Math.hypot(I-he,F-Ce)<.75&&nt._lvl!==void 0&&(wt=Math.min(wt,nt._lvl-.25));const Pe=Math.hypot(I-nt.basin[0],F-nt.basin[1]);Pe<nt.basinR&&(wt=Math.min(wt,Math.max(-.42,.05-.47*Math.sqrt(1-Pe/nt.basinR))))}if(e.volcano){const nt=e.volcano,Xt=Math.hypot(I-nt.x,F-nt.z);wt+=nt.h*Math.max(0,1-Xt/nt.r)**1.4-nt.h*.5*Math.max(0,1-Xt/(nt.r*.25))}return wt},f=68,p=t.mobile?160:176,g=new Float32Array((p+1)*(p+1)),M=new Float32Array((p+1)*(p+1));for(let I=0;I<=p;I++)for(let F=0;F<=p;F++){const et=-f+F/p*f*2,pt=-f+I/p*f*2,Mt=o(et,pt);M[I*(p+1)+F]=Mt;let Rt=u(et,pt);const wt=xe.smoothstep(Mt,1.4,3.2),nt=Math.max(u(et,pt)*.6+.3,.45);Rt=xe.lerp(Math.min(Rt,nt+.1),Rt,wt),l&&Math.abs(pt-l.bridgeZ)<4&&Math.abs(et-l.xc(pt))<l.w+2&&Mt<2.2&&(Rt=Math.max(Rt,.5)),g[I*(p+1)+F]=Rt}const m=(I,F,et)=>{const pt=xe.clamp((F+f)/(f*2)*p,0,p-.001),Mt=xe.clamp((et+f)/(f*2)*p,0,p-.001),Rt=Math.floor(pt),wt=Math.floor(Mt),nt=pt-Rt,Xt=Mt-wt,Vt=I[wt*(p+1)+Rt],he=I[wt*(p+1)+Rt+1],Ce=I[(wt+1)*(p+1)+Rt],Pe=I[(wt+1)*(p+1)+Rt+1];return(Vt*(1-nt)+he*nt)*(1-Xt)+(Ce*(1-nt)+Pe*nt)*Xt},d=(I,F)=>m(g,I,F),y=(I,F)=>m(M,I,F),b=(I,F)=>d(I,F)>.35,x=.5,R=(I,F)=>Math.max(Math.abs(d(I+.4,F)-d(I-.4,F)),Math.abs(d(I,F+.4)-d(I,F-.4)))/.8,T=(I,F)=>!!l&&Math.abs(F-l.bridgeZ)<4&&Math.abs(I-l.xc(F))<l.w+1.5&&y(I,F)<2.6,E=new Pt("#cfeaff"),A=(I,F)=>d(I,F)>.05-x&&R(I,F)<1.05,v=t.mobile?170:256,_=new Kn(f*2,f*2,v,v);_.rotateX(-Math.PI/2);const w=_.attributes.position,L=new Float32Array(w.count*3),O=new Float32Array(w.count*3),D=new Float32Array(w.count),z=new Float32Array(w.count*4),k=new Pt,W=new Pt,V=e.palette,$=new Pt(e.rock[0]).multiplyScalar(.7),J=new Pt(e.rock[0]).multiplyScalar(1.08),at=new Pt,Tt=new Pt(V.sand),kt=new Pt(V.grass),H=new Pt(V.grass2),Z=new Pt(V.path),ht=new Pt(V.deep),it=new Pt,Ct=kn(7);for(let I=0;I<w.count;I++){const F=w.getX(I),et=w.getZ(I),pt=d(F,et);w.setY(I,pt);const Mt=y(F,et),Rt=(Ct()-.5)*.04,wt=it.copy(kt).lerp(H,xe.clamp((pt-1)*.6+Ct()*.3,0,1)).offsetHSL(0,0,Rt);O.set([wt.r,wt.g,wt.b],I*3),k.copy(ht).lerp(Tt,xe.smoothstep(pt,0,.3)).offsetHSL(0,0,Rt),L.set([k.r,k.g,k.b],I*3);const nt=.5+.5*Math.sin(F*1.7+et*.9)*Math.cos(et*1.3-F*.6);D[I]=1.9-Math.min(Mt,6)+(nt-.5)*(V.pathMix??.3)*2.4-Math.max(0,.3-pt)*2.5;let Xt=0;l&&T(F,et)&&(W.copy(E),Xt=.85);const Vt=R(F,et);if(Vt>.75){const he=.5+.5*Math.sin(pt*7.5+Math.sin(F*.7+et*.5)*1.5);at.copy($).lerp(J,he);const Ce=xe.smoothstep(Vt,.75,1.3);W.copy(Xt?W:at).lerp(at,Ce),Xt=Math.max(Xt,Ce)}z.set([W.r,W.g,W.b,Xt],I*4)}_.setAttribute("aLow",new Ge(L,3)),_.setAttribute("aGrass",new Ge(O,3)),_.setAttribute("aPathF",new Ge(D,1)),_.setAttribute("aOver",new Ge(z,4)),_.computeVertexNormals();const Dt=new We({color:"#ffffff"});Dt.onBeforeCompile=I=>{I.vertexShader=I.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTW, vLow, vGrass;
varying vec4 vOver;
varying float vPathF;
attribute vec3 aLow, aGrass;
attribute vec4 aOver;
attribute float aPathF;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vTW = (modelMatrix * vec4(transformed, 1.0)).xyz;
vLow = aLow; vGrass = aGrass; vOver = aOver; vPathF = aPathF;`),I.uniforms.uPath={value:Z},I.fragmentShader=I.fragmentShader.replace("#include <common>",`#include <common>
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
        diffuseColor.g *= 1.0 + 0.025 * n1;`)};const Ut=new oe(_,Dt);Ut.receiveShadow=!0,i.add(Ut);const Wt=[],dt=(I,F)=>Math.hypot(I-s.x,F-s.z)>6;for(const[I,F]of r.entries()){let et=I%2===0?1:-1,pt=0;for(let Mt=.16;Mt<.95&&pt<6;Mt+=.055){const Rt=F.curve.getPointAt(Mt),wt=F.curve.getTangentAt(Mt),nt=new G(-wt.z,0,wt.x).normalize();for(const Xt of[et,-et]){const Vt=Rt.x+nt.x*3.6*Xt,he=Rt.z+nt.z*3.6*Xt;if(!(y(Vt,he)<2.7||!b(Vt,he)||!dt(Vt,he))&&!Wt.some(Ce=>Math.hypot(Ce.x-Vt,Ce.z-he)<5.2)&&!(e.volcano&&Math.hypot(Vt-e.volcano.x,he-e.volcano.z)<e.volcano.r+2)){Wt.push({x:Vt,z:he,tower:null}),pt++;break}}et=-et}}const _t=Ah(e.water.mid),B=new Le({color:new Pt("#ffd27a").multiplyScalar(1.6),transparent:!0,opacity:.75,depthWrite:!1}),qt=new Le({color:new Pt("#ffe9a8").multiplyScalar(2),transparent:!0,opacity:.85,depthWrite:!1}),yt=Th(kn(61+e.seed),1.3,1.45,.98,e.rock[0],e.rock[1],8,{dressed:!0});yt.translate(0,-.1,0);const Ot=new ss(.55,.75,6);Ot.rotateX(-Math.PI/2);const It=new vr(1,0),ee=Wt.length,Y=new gn(yt,_t,ee),C=new gn(Ot,B,ee),S=new gn(It,qt,ee*3);Y.castShadow=Y.receiveShadow=!0;const X=new Ve;Wt.forEach((I,F)=>{I.y0=d(I.x,I.z),I.y=I.y0+.88,X.position.set(I.x,I.y0,I.z),X.rotation.set(0,F,0),X.scale.setScalar(1),X.updateMatrix(),Y.setMatrixAt(F,X.matrix)}),i.add(Y,C,S),pc(Y,"rock");const tt=I=>{Wt.forEach((F,et)=>{const pt=!F.tower;X.position.set(F.x,F.y0+.9,F.z),X.rotation.set(0,I*.5,0),X.scale.setScalar(pt?1:0),X.updateMatrix(),C.setMatrixAt(et,X.matrix);for(let Mt=0;Mt<3;Mt++){const Rt=I*.4+Mt*2.1+F.x,wt=(Rt%1+1)%1;X.position.set(F.x+Math.cos(Rt*2.3)*.55,F.y0+1+wt*1.1,F.z+Math.sin(Rt*2.3)*.55),X.rotation.set(0,Rt*3,0);const nt=pt?.07*Math.sin(wt*Math.PI):0;X.scale.set(nt,nt*1.6,nt),X.updateMatrix(),S.setMatrixAt(et*3+Mt,X.matrix)}}),C.instanceMatrix.needsUpdate=!0,S.instanceMatrix.needsUpdate=!0},st=new _e,rt=d(s.x,s.z);st.position.set(s.x,rt,s.z);const Ft=(()=>{const I=document.createElement("canvas");I.width=512,I.height=512;const F=I.getContext("2d");F.fillStyle="#f6f1e6",F.fillRect(0,0,512,512);const et=kn(5);for(let Mt=0;Mt<520;Mt++){const Rt=et()*512,wt=et()*512,nt=2+et()*9,Xt=et()<.65;F.fillStyle=Xt?`rgba(${90+et()*40},${120+et()*40},${60+et()*20},${.12+et()*.18})`:`rgba(${130+et()*30},${95+et()*20},60,${.12+et()*.15})`,F.beginPath(),F.ellipse(Rt,wt,nt,nt*(.4+et()*.6),et()*3,0,Math.PI*2),F.fill()}for(let Mt=0;Mt<1200;Mt++){F.strokeStyle=`rgba(190,170,140,${.04+et()*.07})`,F.lineWidth=1;const Rt=et()*512,wt=et()*512;F.beginPath(),F.moveTo(Rt,wt),F.lineTo(Rt+(et()-.5)*8,wt+6+et()*20),F.stroke()}for(let Mt=0;Mt<26;Mt++){const Rt=et()*512;F.strokeStyle=et()<.5?"rgba(255,255,255,0.35)":"rgba(150,130,100,0.18)",F.lineWidth=2+et()*5,F.beginPath(),F.moveTo(Rt,512),F.bezierCurveTo(Rt+40,350,Rt-30,160,Rt+20+et()*40,0),F.stroke()}F.strokeStyle="rgba(175,145,100,0.55)",F.lineWidth=4,F.beginPath(),F.moveTo(60,512),F.bezierCurveTo(90,330,110,180,150,0),F.stroke();const pt=new pi(I);return pt.colorSpace=mn,pt.wrapS=bi,pt})(),bt=new We({map:Ft}),Lt=(()=>{const I=document.createElement("canvas");I.width=I.height=128;const F=I.getContext("2d");F.fillStyle="#e9dcbf",F.fillRect(0,0,128,128),F.strokeStyle="#a88d62",F.lineWidth=3,F.beginPath();for(let pt=0;pt<Math.PI*9;pt+=.1){const Mt=4+pt*2;F.lineTo(64+Math.cos(pt)*Mt,64+Math.sin(pt)*Mt)}F.stroke();const et=new pi(I);return et.colorSpace=mn,et})(),re=new We({color:"#e6d8b8"}),St=new We({map:Lt}),Yt=new We({color:"#3a3330",flatShading:!0}),ae=new We({color:"#b8b2aa",flatShading:!0}),le=(()=>{const I=document.createElement("canvas");I.width=256,I.height=128;const F=I.getContext("2d"),et=F.createLinearGradient(0,0,0,128);et.addColorStop(0,"#fff0b0"),et.addColorStop(.45,"#ffb040"),et.addColorStop(1,"#ff5a10"),F.fillStyle=et,F.fillRect(0,0,256,128);const pt=kn(11);for(let Rt=0;Rt<70;Rt++){const wt=pt();F.fillStyle=wt<.5?`rgba(70,60,55,${.5+pt()*.4})`:`rgba(170,165,160,${.5+pt()*.4})`,F.beginPath(),F.ellipse(pt()*256,20+pt()*108,4+pt()*14,2+pt()*6,pt()*3,0,Math.PI*2),F.fill()}F.strokeStyle="rgba(60,30,20,0.6)",F.lineWidth=1.5;for(let Rt=0;Rt<40;Rt++){const wt=pt()*256,nt=pt()*128;F.beginPath(),F.moveTo(wt,nt),F.lineTo(wt+(pt()-.5)*30,nt+(pt()-.5)*20),F.stroke()}const Mt=new pi(I);return Mt.colorSpace=mn,Mt})(),Zt=new Le({map:le,color:new Pt("#ffffff").multiplyScalar(2.2)});function ye({len:I,rTop:F,rBot:et,crutchH:pt,seg:Mt,bend:Rt,glowMat:wt,shadow:nt}){const Xt=new _e,Vt=new oe(new He(et*.98,et*.95,pt,Mt),[re,re,St]);Vt.position.y=pt/2,Vt.castShadow=nt,Xt.add(Vt);const he=new He(F,et,I,Mt,8,!0),Ce=he.attributes.position,Pe=kn(Math.round(I*100)),Ti=Array.from({length:6},()=>[Pe()*6.28,Pe()*3,.03+Pe()*.04]);for(let Ue=0;Ue<Ce.count;Ue++){const ei=Ce.getY(Ue),ni=(ei+I/2)/I,Ar=Math.atan2(Ce.getZ(Ue),Ce.getX(Ue));let zs=1+Math.sin(Ar*7+ei*3)*.018;for(const[vd,xd,_d]of Ti)zs+=Math.cos(Ar-vd)*Math.sin(ni*6+xd)*_d*.5;Ce.setXYZ(Ue,Ce.getX(Ue)*zs+Rt*ni*ni*I,ei,Ce.getZ(Ue)*zs)}he.translate(0,I/2,0),he.computeVertexNormals();const Re=new oe(he,bt);Re.position.y=pt,Re.castShadow=nt,Re.receiveShadow=!0,Xt.add(Re);const _n=Rt*I,ti=pt+I,Mn=new He(F*1.02,F*1.04,F*.35,Mt,1,!0),Nn=Mn.attributes.position;for(let Ue=0;Ue<Nn.count;Ue++)Nn.getY(Ue)>0&&Nn.setY(Ue,Nn.getY(Ue)+Math.sin(Ue*2.7)*F*.12);Mn.computeVertexNormals();const zn=new oe(Mn,Yt);zn.position.set(_n,ti+F*.12,0),Xt.add(zn);const Vi=new oe(new Vn(F*.97,Mt,6,0,Math.PI*2,0,Math.PI/2),wt);Vi.scale.y=.38,Vi.position.set(_n,ti+F*.2,0),Xt.add(Vi);const To=[];for(let Ue=0;Ue<5;Ue++){const ei=new oe(new _o(F*(.2+Ue%3*.07),0),ae),ni=Ue*1.25+.3;ei.position.set(_n+Math.cos(ni)*F*.55,ti+F*.33,Math.sin(ni)*F*.55),ei.scale.y=.4,Xt.add(ei),To.push(ei)}const Ao=new Gn(F*.28,F*1.1,6,4),Ns=Ao.attributes.position;for(let Ue=0;Ue<Ns.count;Ue++){const ei=Ns.getY(Ue),ni=(ei/(F*1.1)+.5)*2.2,Ar=Ns.getX(Ue),zs=Ns.getZ(Ue);Ns.setX(Ue,Ar*Math.cos(ni)-zs*Math.sin(ni)+(ei+F*.55)*.25),Ns.setZ(Ue,Ar*Math.sin(ni)+zs*Math.cos(ni))}Ao.computeVertexNormals();const Tr=new oe(Ao,Yt);return Tr.position.set(_n+F*.1,ti+F*.7,F*.1),Tr.rotation.z=-.35,Xt.add(Tr),Xt.userData={glow:Vi,top:new G(_n,ti,0),charRing:zn,ashFlakes:To,body:Re,twist:Tr,len:I,rTop:F,rBot:et,bend:Rt,crutchH:pt,base:Re.geometry.attributes.position.array.slice(),topParts:[zn,Vi,Tr,...To].map(Ue=>[Ue,Ue.position.clone(),Ue.scale.clone()])},Xt}const ce=new Pt(e.rock[0]).multiplyScalar(.86),be=new oe(Th(kn(67+e.seed),3.3,3.9,1,ce,e.rock[1],16),Ah(e.water.mid,.2));be.position.y=-.2,be.castShadow=be.receiveShadow=!0,st.add(be),ua(be,"rock");const q=7.4,zt=1.4,lt=ye({len:q,rTop:2.35,rBot:.95,crutchH:zt,seg:22,bend:.06,glowMat:Zt,shadow:!0});lt.position.y=.75,lt.rotation.set(.06,0,-.03);const xt=lt.userData.charRing;st.add(lt);const Bt=new Ve;Bt.position.y=zt+q+1.2,lt.add(Bt);const Gt=new ea("#ff8a3a",40,34,1.5);Gt.position.y=zt+q+1.4,lt.add(Gt);const ue=new Gn(2.2,16,16,6,!0);ue.translate(0,-8,0);{const I=ue.attributes.position,F=new Float32Array(I.count*3);for(let et=0;et<I.count;et++){const pt=Math.pow(1-Math.min(1,-I.getY(et)/16),1.6);F.set([pt,pt,pt],et*3)}ue.setAttribute("color",new Ge(F,3))}ue.rotateZ(Math.PI/2);const Fe=new Le({color:"#ffc890",vertexColors:!0,transparent:!0,opacity:.05,blending:mi,depthWrite:!1,side:Ke,fog:!1}),ke=new _e;ke.position.y=zt+q+.8;const we=new oe(ue,Fe),xn=we.clone();xn.rotation.y=Math.PI,ke.add(we,xn),lt.add(ke);const dn=new ea("#ffa050",12,10,1.4);dn.position.set(0,1.3,4.6),st.add(dn),i.add(st),st.updateMatrixWorld(!0);const Jn=new G;Bt.getWorldPosition(Jn);const N=lt.userData,vt=[Bt,Gt,ke].map(I=>[I,I.position.y]),ut=I=>N.rBot+(N.rTop-N.rBot)*I;function Kt(I){const F=.15+.85*Math.max(0,Math.min(1,I)),et=N.body.geometry.attributes.position,pt=N.base;for(let nt=0;nt<et.count;nt++){const Xt=pt[nt*3+1],Vt=Xt/N.len,he=Vt*F,Ce=ut(he)/ut(Vt);et.setXYZ(nt,(pt[nt*3]-N.bend*Vt*Vt*N.len)*Ce+N.bend*he*he*N.len,he*N.len,pt[nt*3+2]*Ce)}et.needsUpdate=!0,N.body.geometry.computeVertexNormals(),N.body.geometry.computeBoundingSphere();const Mt=(F-1)*N.len,Rt=ut(F)/N.rTop,wt=N.bend*N.len*(F*F-1);for(const[nt,Xt,Vt]of N.topParts)nt.position.set(N.top.x+(Xt.x-N.top.x)*Rt+wt,Xt.y+Mt,Xt.z*Rt),nt.scale.set(Vt.x*Rt,Vt.y*Rt,Vt.z*Rt);for(const[nt,Xt]of vt)nt.position.y=Xt+Mt;st.updateMatrixWorld(!0),Bt.getWorldPosition(Jn)}const te={tip:Jn,pos:new G(s.x,rt,s.z),lights:_r,flamePos(){return Jn.clone()},setLights(I){this.lights=I;const F=I/_r;Kt(F),this.glow=F,dn.intensity=3+9*F,Fe.opacity=.01+.04*F,xt.scale.y*=1+(1-F)*2.5}},At=kn(42),Jt=[];for(let I=0;I<3e3&&Jt.length<(t.mobile?70:104);I++){const F=(At()-.5)*102,et=(At()-.5)*102,pt=d(F,et);if(pt<.75||y(F,et)<3.2||!dt(F,et)||Wt.some(nt=>Math.hypot(nt.x-F,nt.z-et)<3.2)||Jt.some(nt=>Math.hypot(nt.x-F,nt.z-et)<2.4)||e.volcano&&Math.hypot(F-e.volcano.x,et-e.volcano.z)<e.volcano.r)continue;const Mt=pt<1.45?e.trees.beach:e.trees.inland;let Rt=At(),wt="bush";for(const[nt,Xt]of Object.entries(Mt)){if(Rt<Xt){wt=nt;break}Rt-=Xt}Jt.push({x:F,z:et,y:pt,s:(wt==="bush"?.8:.75)+At()*.45,phase:At()*6.28,kind:wt})}if(e.trees.inland.bush){const I=kn(303+e.seed),F=Jt.filter(et=>et.kind!=="bush"&&et.y>=1);for(const et of F){if(I()>(t.mobile?.6:.75))continue;const pt=1+Math.floor(I()*3);for(let Mt=0;Mt<pt;Mt++){const Rt=I()*6.28,wt=1.3+I()*1,nt=et.x+Math.cos(Rt)*wt,Xt=et.z+Math.sin(Rt)*wt,Vt=d(nt,Xt);Vt<1||y(nt,Xt)<3||!dt(nt,Xt)||Wt.some(he=>Math.hypot(he.x-nt,he.z-Xt)<3)||Jt.some(he=>he!==et&&Math.hypot(he.x-nt,he.z-Xt)<1.3)||Jt.push({x:nt,z:Xt,y:Vt,s:.55+I()*.35,phase:I()*6.28,kind:"bush"})}}}const se=y1(i,Jt,t,e),ge=new Ve,Ee=[];for(let I=0;I<1200&&Ee.length<(t.mobile?40:56);I++){const F=At()*Math.PI*2,et=n(F)-3+At()*5.5,pt=Math.cos(F)*et,Mt=Math.sin(F)*et;y(pt,Mt)<3.4||d(pt,Mt)<-1.2||Ee.some(Rt=>Math.hypot(Rt.x-pt,Rt.z-Mt)<2.2)||Ee.push({x:pt,z:Mt,s:.6+At()*1.2,r:At()*6})}for(const I of e.plateaus||[]){const F=Math.round(I.r*2*Math.PI/2.3);for(let et=0;et<F;et++){const pt=et/F*Math.PI*2+At()*.2,Mt=I.r+Math.sin(pt*5+I.x)*.8+Math.sin(pt*11)*.3-.2,Rt=I.x+Math.cos(pt)*Mt,wt=I.z+Math.sin(pt)*Mt;e.waterfall&&Math.hypot(Rt-e.waterfall.lip[0],wt-e.waterfall.lip[1])<2.2||y(Rt,wt)<2.6||Ee.push({x:Rt,z:wt,s:1.3+At()*.9,r:At()*6,cliff:!0})}}[0,1,2].map(I=>q1(kn(31+I*7+e.seed),e.rock[0],e.rock[1],I)).map((I,F)=>{const et=Ee.filter((Mt,Rt)=>Rt%3===F),pt=new gn(I,_t,Math.max(1,et.length));return pt.count=et.length,et.forEach((Mt,Rt)=>{ge.position.set(Mt.x,d(Mt.x,Mt.z)-.2*Mt.s,Mt.z),ge.rotation.set(0,Mt.r*2,0),ge.scale.set(Mt.s*1.1,Mt.s*.9,Mt.s),ge.updateMatrix(),pt.setMatrixAt(Rt,ge.matrix)}),pt.castShadow=pt.receiveShadow=!0,i.add(pt),pc(pt,"rock"),pt});const Xn=u1(i,{heightAt:d,pathDist:y,plinths:Wt,paths:r,lighthouse:te,landDist:h},t,kn(99+e.seed),n,e),Qn=L1(i,{heightAt:d,pathDist:y,paths:r,lighthouse:te,islandEdge:n},t,e),P=[...Jt.map(I=>[I.x,I.z,1.3*I.s]),...Ee.map(I=>[I.x,I.z,I.s*1.6]),...Wt.map(I=>[I.x,I.z,1.9])],K=(I,F)=>{let et=1;for(const[pt,Mt,Rt]of P){const wt=(pt-I)**2+(Mt-F)**2;wt<Rt*Rt&&(et=Math.min(et,.55+.45*Math.sqrt(wt)/Rt))}return et},ot=S1(i,{heightAt:d,pathDist:y,plinths:Wt,lighthouse:te,extrasBlock:Qn.blocks,shadeAt:K},t,e,kn(7+e.seed)),ct={palm:.9,round:1.45,bush:1,pine:1.35,dead:.6};U1(i,[...Jt.map(I=>({x:I.x,y:I.y,z:I.z,r:(ct[I.kind]??1)*I.s})),...Ee.map(I=>({x:I.x,y:d(I.x,I.z),z:I.z,r:I.s*(I.cliff?1.7:1.55)})).filter(I=>I.y>.05),...Wt.map(I=>({x:I.x,y:I.y0,z:I.z,r:1.95})),{x:s.x,y:rt,z:s.z,r:4.8}]);const j=Float32Array.from(g),Nt=[...Ee.map(I=>({x:I.x,z:I.z,r:I.s*.85})),...Xn.obstacles];for(const I of Nt){const F=I.r+1,et=f*2/p,pt=Math.floor((I.x-F+f)/et),Mt=Math.ceil((I.x+F+f)/et),Rt=Math.floor((I.z-F+f)/et),wt=Math.ceil((I.z+F+f)/et);for(let nt=Math.max(0,Rt);nt<=Math.min(p,wt);nt++)for(let Xt=Math.max(0,pt);Xt<=Math.min(p,Mt);Xt++){const Vt=-f+Xt*et,he=-f+nt*et,Ce=Math.max(0,Math.hypot(Vt-I.x,he-I.z)-I.r);if(Ce>.9)continue;const Pe=nt*(p+1)+Xt,Ti=.06-Ce*.35,Re=1-Ce/.9;j[Pe]=Math.max(j[Pe],j[Pe]+(Ti-j[Pe])*Re*Re)}}if(e.waterfall&&e.waterfall._lvl!==void 0){const I=e.waterfall;vh(i,{heightTex:xh(j,p+1),ext:f,grid:p,quality:t,sunDir:new G(24,17,4),colors:e.water,level:I._lvl,size:9,maxDepth:.8,center:[(I.pool[0]+I.lip[0])/2,(I.pool[1]+I.lip[1])/2]})}const $t=vh(i,{heightTex:xh(j,p+1),ext:f,grid:p,quality:t,sunDir:new G(24,17,4),colors:e.water}),ne=[{x:s.x,z:s.z,r:3.5},...Wt.map(I=>({x:I.x,z:I.z,r:1.4})),...se.colliders,...Ee.filter(I=>d(I.x,I.z)>-.45).map(I=>({x:I.x,z:I.z,r:I.s*.85})),...Xn.colliders,...Qn.colliders];return{def:e,paths:r,plinths:Wt,lighthouse:te,heightAt:d,pathDist:y,slopeAt:R,isLand:b,isIce:T,landDist:h,isWalkable:(I,F)=>A(I,F)&&!Qn.blocks(I,F),colliders:ne,update:I=>{$t.update(I),Xn.update(I),Qn.update(I),ot.update(I);const F=te.glow??1,et=.75+.25*Math.sin(I*1.3)+.1*Math.sin(I*7.1);Zt.color.setRGB(1,.85,.75).multiplyScalar(F>0?(.7+1.5*F)*et:.12),Gt.intensity=(8+40*F)*et,ke.rotation.y=I*.6,se.update(I),tt(I)},terrain:Ut,extras:Qn,grass:ot}}const Xr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Us{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const $1=new zc(-1,1,1,-1,0,1);class j1 extends ze{constructor(){super(),this.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new me([0,2,0,0,2,0],2))}}const Z1=new j1;class yo{constructor(t){this._mesh=new oe(Z1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,$1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class $f extends Us{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof $e?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ci.clone(t.uniforms),this.material=new $e({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new yo(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ch extends Us{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class K1 extends Us{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class J1{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Et);this._width=n.width,this._height=n.height,e=new Un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $f(Xr),this.copyPass.material.blending=pn,this.clock=new Df}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ch!==void 0&&(a instanceof Ch?n=!0:a instanceof K1&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Q1 extends Us{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const Va={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Et},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ie},cameraProjectionMatrixInverse:{value:new Ie},cameraWorldMatrix:{value:new Ie},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new G(-1,-1,-1)},sceneBoxMax:{value:new G(1,1,1)}},vertexShader:`

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
		}`};function t_(i=5){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=e_(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){const o=e[a],l=2*Math.PI*o/n,c=new G(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}const r=new go(s,t,t);return r.wrapS=bi,r.wrapT=bi,r.needsUpdate=!0,r}function e_(i){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0);let s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}const Wa={defines:{SAMPLES:16,SAMPLE_VECTORS:jf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Et},cameraProjectionMatrixInverse:{value:new Ie},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function jf(i,t,e){const n=n_(i,t,e);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function n_(i,t,e){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new G(Math.cos(r),Math.sin(r),a))}return n}class i_{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r;const a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,p=c-u,g=t-f,M=e-p;let m,d;g>M?(m=1,d=0):(m=0,d=1);const y=g-m+h,b=M-d+h,x=g-1+2*h,R=M-1+2*h,T=l&255,E=c&255,A=this.perm[T+this.perm[E]]%12,v=this.perm[T+m+this.perm[E+d]]%12,_=this.perm[T+1+this.perm[E+1]]%12;let w=.5-g*g-M*M;w<0?n=0:(w*=w,n=w*w*this.dot(this.grad3[A],g,M));let L=.5-y*y-b*b;L<0?s=0:(L*=L,s=L*L*this.dot(this.grad3[v],y,b));let O=.5-x*x-R*R;return O<0?r=0:(O*=O,r=O*O*this.dot(this.grad3[_],x,R)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o;const c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),f=Math.floor(n+c),p=1/6,g=(h+u+f)*p,M=h-g,m=u-g,d=f-g,y=t-M,b=e-m,x=n-d;let R,T,E,A,v,_;y>=b?b>=x?(R=1,T=0,E=0,A=1,v=1,_=0):y>=x?(R=1,T=0,E=0,A=1,v=0,_=1):(R=0,T=0,E=1,A=1,v=0,_=1):b<x?(R=0,T=0,E=1,A=0,v=1,_=1):y<x?(R=0,T=1,E=0,A=0,v=1,_=1):(R=0,T=1,E=0,A=1,v=1,_=0);const w=y-R+p,L=b-T+p,O=x-E+p,D=y-A+2*p,z=b-v+2*p,k=x-_+2*p,W=y-1+3*p,V=b-1+3*p,$=x-1+3*p,J=h&255,at=u&255,Tt=f&255,kt=this.perm[J+this.perm[at+this.perm[Tt]]]%12,H=this.perm[J+R+this.perm[at+T+this.perm[Tt+E]]]%12,Z=this.perm[J+A+this.perm[at+v+this.perm[Tt+_]]]%12,ht=this.perm[J+1+this.perm[at+1+this.perm[Tt+1]]]%12;let it=.6-y*y-b*b-x*x;it<0?s=0:(it*=it,s=it*it*this.dot3(this.grad3[kt],y,b,x));let Ct=.6-w*w-L*L-O*O;Ct<0?r=0:(Ct*=Ct,r=Ct*Ct*this.dot3(this.grad3[H],w,L,O));let Dt=.6-D*D-z*z-k*k;Dt<0?a=0:(Dt*=Dt,a=Dt*Dt*this.dot3(this.grad3[Z],D,z,k));let Ut=.6-W*W-V*V-$*$;return Ut<0?o=0:(Ut*=Ut,o=Ut*Ut*this.dot3(this.grad3[ht],W,V,$)),32*(s+r+a+o)}noise4d(t,e,n,s){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,f,p,g;const M=(t+e+n+s)*l,m=Math.floor(t+M),d=Math.floor(e+M),y=Math.floor(n+M),b=Math.floor(s+M),x=(m+d+y+b)*c,R=m-x,T=d-x,E=y-x,A=b-x,v=t-R,_=e-T,w=n-E,L=s-A,O=v>_?32:0,D=v>w?16:0,z=_>w?8:0,k=v>L?4:0,W=_>L?2:0,V=w>L?1:0,$=O+D+z+k+W+V,J=a[$][0]>=3?1:0,at=a[$][1]>=3?1:0,Tt=a[$][2]>=3?1:0,kt=a[$][3]>=3?1:0,H=a[$][0]>=2?1:0,Z=a[$][1]>=2?1:0,ht=a[$][2]>=2?1:0,it=a[$][3]>=2?1:0,Ct=a[$][0]>=1?1:0,Dt=a[$][1]>=1?1:0,Ut=a[$][2]>=1?1:0,Wt=a[$][3]>=1?1:0,dt=v-J+c,_t=_-at+c,B=w-Tt+c,qt=L-kt+c,yt=v-H+2*c,Ot=_-Z+2*c,It=w-ht+2*c,ee=L-it+2*c,Y=v-Ct+3*c,C=_-Dt+3*c,S=w-Ut+3*c,X=L-Wt+3*c,tt=v-1+4*c,st=_-1+4*c,rt=w-1+4*c,Ft=L-1+4*c,bt=m&255,Lt=d&255,re=y&255,St=b&255,Yt=o[bt+o[Lt+o[re+o[St]]]]%32,ae=o[bt+J+o[Lt+at+o[re+Tt+o[St+kt]]]]%32,le=o[bt+H+o[Lt+Z+o[re+ht+o[St+it]]]]%32,Zt=o[bt+Ct+o[Lt+Dt+o[re+Ut+o[St+Wt]]]]%32,ye=o[bt+1+o[Lt+1+o[re+1+o[St+1]]]]%32;let ce=.6-v*v-_*_-w*w-L*L;ce<0?h=0:(ce*=ce,h=ce*ce*this.dot4(r[Yt],v,_,w,L));let be=.6-dt*dt-_t*_t-B*B-qt*qt;be<0?u=0:(be*=be,u=be*be*this.dot4(r[ae],dt,_t,B,qt));let q=.6-yt*yt-Ot*Ot-It*It-ee*ee;q<0?f=0:(q*=q,f=q*q*this.dot4(r[le],yt,Ot,It,ee));let zt=.6-Y*Y-C*C-S*S-X*X;zt<0?p=0:(zt*=zt,p=zt*zt*this.dot4(r[Zt],Y,C,S,X));let lt=.6-tt*tt-st*st-rt*rt-Ft*Ft;return lt<0?g=0:(lt*=lt,g=lt*lt*this.dot4(r[ye],tt,st,rt,Ft)),27*(h+u+f+p+g)}}class xi extends Us{constructor(t,e,n,s,r,a,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=t_(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Un(this.width,this.height,{type:Zn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new $e({defines:Object.assign({},Va.defines),uniforms:ci.clone(Va.uniforms),vertexShader:Va.vertexShader,fragmentShader:Va.fragmentShader,blending:pn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new s1,this.normalMaterial.blending=pn,this.pdMaterial=new $e({defines:Object.assign({},Wa.defines),uniforms:ci.clone(Wa.uniforms),vertexShader:Wa.vertexShader,fragmentShader:Wa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new $e({defines:Object.assign({},Ha.defines),uniforms:ci.clone(Ha.uniforms),vertexShader:Ha.vertexShader,fragmentShader:Ha.fragmentShader,blending:pn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new $e({uniforms:ci.clone(Xr.uniforms),vertexShader:Xr.vertexShader,fragmentShader:Xr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:yl,blendDst:zr,blendEquation:oi,blendSrcAlpha:Ml,blendDstAlpha:zr,blendEquationAlpha:oi}),this.blendMaterial=new $e({uniforms:ci.clone(hl.uniforms),vertexShader:hl.vertexShader,fragmentShader:hl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Wh,blendSrc:yl,blendDst:zr,blendEquation:oi,blendSrcAlpha:Ml,blendDstAlpha:zr,blendEquationAlpha:oi}),this.fsQuad=new yo(null),this.originalClearColor=new Pt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Oc,this.depthTexture.format=As,this.depthTexture.type=Ts,this.normalRenderTarget=new Un(this.width,this.height,{minFilter:vn,magFilter:vn,type:Zn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=jf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case xi.OUTPUT.Off:break;case xi.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case xi.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case xi.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case xi.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case xi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case xi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const s=e.get(n);n.visible=s}),e.clear()}generateNoise(t=64){const e=new i_,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){const l=a,c=o;s[(a*t+o)*4]=(e.noise(l,c)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}const r=new go(s,t,t,jn,Si);return r.wrapS=bi,r.wrapT=bi,r.needsUpdate=!0,r}}xi.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const s_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Mr extends Us{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Et(t.x,t.y):new Et(256,256),this.clearColor=new Pt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Un(r,a,{type:Zn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Un(r,a,{type:Zn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new Un(r,a,{type:Zn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}const o=s_;this.highPassUniforms=ci.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new $e({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Et(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Xr;this.copyUniforms=ci.clone(h.uniforms),this.blendMaterial=new $e({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:mi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Pt,this.oldClearAlpha=1,this.basic=new Le,this.fsQuad=new yo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Et(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Mr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Mr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new $e({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Et(.5,.5)},direction:{value:new Et(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}}Mr.BlurDirectionX=new Et(1,0);Mr.BlurDirectionY=new Et(0,1);const r_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class a_ extends Us{constructor(){super();const t=r_;this.uniforms=ci.clone(t.uniforms),this.material=new i1({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new yo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},De.getTransfer(this._outputColorSpace)===Oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Xh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===qh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Yh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===wc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===$h?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===jh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const o_={name:"WarmGrade",uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uTint:{value:new G(1,1,1)},uLift:{value:new G},uSat:{value:1.08}},vertexShader:`
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
    }`},l_=new URLSearchParams(location.search).get("ao")==="1";function c_(i,t,e,n={}){const s=new J1(i,new Un(1,1,{type:Zn})),r=new Q1(t,e),a=new xi(t,e,1,1,void 0,{radius:.8,distanceExponent:1.3,thickness:1.4,scale:1.2,samples:12});a.blendIntensity=1;const o=new Mr(new Et(256,256),.6,.55,1),l=new $f(o_);n.tint&&l.uniforms.uTint.value.set(...n.tint),n.lift&&l.uniforms.uLift.value.set(...n.lift),n.sat&&(l.uniforms.uSat.value=n.sat),l.uniforms.uVignette.value=n.vignette??.25;const c=new a_;for(const g of[r,a,o,l,c])s.addPass(g);let h="high",u=1,f=1;const p={composer:s,get level(){return h},setLevel(g){h=g,a.enabled=g==="high"&&l_,o.strength=g==="high"?.6:.5;const M=g==="high"?4:0;for(const m of[s.renderTarget1,s.renderTarget2])m.samples!==M&&(m.samples=M,m.dispose());p.setSize(u,f)},setSize(g,M){u=g,f=M;const m=i.getPixelRatio();s.setPixelRatio(m),s.setSize(g,M);const d=h==="high"?2:4;o.resolution.set(g*m/d,M*m/d),o.setSize(g*m/d,M*m/d)},render(g){s.render(g)}};return p}function u_(i,t,e,n,s,r=null){const{heightAt:a}=t,o=e.mobile?.5:1,l=new Set(n.life),c=new Ve,h=new Pt,u=[],f=()=>{for(let g=0;g<50;g++){const M=(Math.random()-.5)*80,m=(Math.random()-.5)*80,d=a(M,m);if(d>.8)return{x:M,z:m,h:d}}return{x:0,z:0,h:1}};if(l.has("butterflies")){const g=Math.round(26*o),M=new gr(.16,6,0,Math.PI);M.scale(1,1.3,1);const d=[-1,1].map(()=>new We({color:"#ffffff",side:Ke})).map(x=>{const R=new gn(M,x,g);return i.add(R),R}),y=Array.from({length:g},(x,R)=>({...f(),a:Math.random()*6,sp:.6+Math.random()*.6,ph:Math.random()*6,home:null})),b=["#ffd84a","#ff9ad0","#9ad8ff","#ffffff","#ffa040"];y.forEach((x,R)=>{x.home={x:x.x,z:x.z},d.forEach(T=>T.setColorAt(R,h.set(b[R%b.length])))}),d.forEach(x=>x.instanceColor.needsUpdate=!0),u.push((x,R)=>{y.forEach((T,E)=>{T.a+=Math.sin(R*.7+T.ph)*1.6*x,T.x+=Math.cos(T.a)*T.sp*x,T.z+=Math.sin(T.a)*T.sp*x,Math.hypot(T.x-T.home.x,T.z-T.home.z)>5&&(T.a=Math.atan2(T.home.z-T.z,T.home.x-T.x));const A=a(T.x,T.z)+.6+Math.sin(R*2+T.ph)*.25,v=Math.sin(R*18+T.ph)*1.1;d.forEach((_,w)=>{c.position.set(T.x,A,T.z),c.rotation.set(0,-T.a+Math.PI/2,0),c.rotateZ((w?1:-1)*(.3+v*.5)),c.rotateX(-Math.PI/2),c.scale.set(w?1:-1,1,1),c.updateMatrix(),_.setMatrixAt(E,c.matrix)})}),d.forEach(T=>T.instanceMatrix.needsUpdate=!0)})}if(l.has("birds")){const M=new ze;M.setAttribute("position",new me([-.7,.12,.1,0,0,-.15,0,0,.15,0,0,-.15,.7,.12,.1,0,0,.15],3)),M.computeVertexNormals();const m=new gn(M,new We({color:"#f4f4f0",side:Ke}),7);m.castShadow=!0,i.add(m);const d=Array.from({length:7},(y,b)=>({cx:(Math.random()-.5)*50,cz:(Math.random()-.5)*50,r:8+Math.random()*10,y:9+Math.random()*4,sp:.15+Math.random()*.1,ph:b}));u.push((y,b)=>{d.forEach((x,R)=>{const T=b*x.sp+x.ph;c.position.set(x.cx+Math.cos(T)*x.r,x.y+Math.sin(b*.7+R)*.4,x.cz+Math.sin(T)*x.r),c.rotation.set(0,-T,Math.sin(b*.5+R)*.15);const E=1+Math.sin(b*6+R)*.35*(Math.sin(b*.4+R)>.3?1:.1),A=r?xe.smoothstep(c.position.distanceTo(r.position),3,7):1;c.scale.set(1.4*A,E*1.4*A,1.4*A),c.updateMatrix(),m.setMatrixAt(R,c.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(l.has("leaves")){const g=Math.round(60*o),M=new Kn(.16,.1),m=new gn(M,new We({color:"#ffffff",side:Ke}),g);i.add(m);const d=Array.from({length:g},(y,b)=>({...f(),ph:Math.random()*6,sp:1+Math.random()*1.5}));d.forEach((y,b)=>m.setColorAt(b,h.set(["#8fbf4a","#c8b04a","#6a9a3a","#d89a3a"][b%4]))),m.instanceColor.needsUpdate=!0,u.push((y,b)=>{d.forEach((x,R)=>{x.x+=x.sp*y,x.z+=Math.sin(b*.8+x.ph)*.6*y,x.x>45&&Object.assign(x,f(),{x:-45});const T=Math.max(a(x.x,x.z),.1)+.3+Math.abs(Math.sin(b*1.3+x.ph))*.9;c.position.set(x.x,T,x.z),c.rotation.set(b*3+x.ph,b*2+x.ph,b*1.5),c.scale.setScalar(1),c.updateMatrix(),m.setMatrixAt(R,c.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(l.has("fireflies")&&s==="skumring"){const g=Math.round(120*o),M=new Float32Array(g*3),m=new Float32Array(g*3),d=Array.from({length:g},()=>({...f(),ph:Math.random()*6})),y=new ze;y.setAttribute("position",new Ge(M,3)),y.setAttribute("color",new Ge(m,3));const b=document.createElement("canvas");b.width=b.height=32;const x=b.getContext("2d"),R=x.createRadialGradient(16,16,0,16,16,16);R.addColorStop(0,"rgba(255,255,255,1)"),R.addColorStop(1,"rgba(255,255,255,0)"),x.fillStyle=R,x.fillRect(0,0,32,32);const T=new Bc(y,new vo({size:.35,map:new pi(b),vertexColors:!0,transparent:!0,blending:mi,depthWrite:!1}));T.frustumCulled=!1,i.add(T),u.push((E,A)=>{d.forEach((v,_)=>{M[_*3]=v.x+Math.sin(A*.4+v.ph)*1.2,M[_*3+1]=v.h+.5+Math.sin(A*.9+v.ph*2)*.4,M[_*3+2]=v.z+Math.cos(A*.35+v.ph)*1.2;const w=Math.max(0,Math.sin(A*1.7+v.ph*3))**3*2.5;m[_*3]=1*w,m[_*3+1]=.9*w,m[_*3+2]=.35*w}),y.attributes.position.needsUpdate=!0,y.attributes.color.needsUpdate=!0})}let p=0;return{update(g){const M=Math.min(.05,Math.max(0,g-p));p=g;for(const m of u)m(M,g)}}}function h_(i,{cell:t=.75,ext:e=68}={}){const n=Math.ceil(e*2/t)+1,s=new Float64Array(n*n),r=new Float32Array(n*n),a=new Float32Array(n*n),o=i.lighthouse.pos,l=(E,A)=>[Math.round((E+e)/t),Math.round((A+e)/t)],c=(E,A)=>[-e+E*t,-e+A*t];let h=()=>!1;function u(){for(let E=0;E<n;E++)for(let A=0;A<n;A++){const[v,_]=c(A,E),w=i.heightAt(v,_),L=E*n+A,O=Math.hypot(v-o.x,_-o.z);let D=1.8;w<-.5||i.slopeAt(v,_)>1.1||i.extras.blocks(v,_)||h(v,_)||O<3.2?D=1/0:i.pathDist(v,_)<1.6?D=.2:w<.05&&(D=2.6),r[L]=D}}function f(){s.fill(1/0),a.fill(0);const E=[],A=(w,L)=>{E.push([w,L]);let O=E.length-1;for(;O>0;){const D=O-1>>1;if(E[D][0]<=E[O][0])break;[E[D],E[O]]=[E[O],E[D]],O=D}},v=()=>{const w=E[0],L=E.pop();if(E.length){E[0]=L;let O=0;for(;;){const D=2*O+1,z=D+1;let k=O;if(D<E.length&&E[D][0]<E[k][0]&&(k=D),z<E.length&&E[z][0]<E[k][0]&&(k=z),k===O)break;[E[k],E[O]]=[E[O],E[k]],O=k}}return w};for(let w=0;w<n;w++)for(let L=0;L<n;L++){const[O,D]=c(L,w),z=Math.hypot(O-o.x,D-o.z);z>=3.2&&z<4.2&&r[w*n+L]<1/0&&(s[w*n+L]=0,A(0,w*n+L))}const _=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;E.length;){const[w,L]=v();if(w>s[L])continue;const O=L%n,D=L/n|0;for(const[z,k,W]of _){const V=O+z,$=D+k;if(V<0||$<0||V>=n||$>=n)continue;const J=$*n+V,at=r[J];if(at===1/0)continue;const Tt=w+W*t*(at+r[L])*.5;Tt<s[J]&&(s[J]=Tt,a[J]=a[L]+W*t,A(Tt,J))}}}const p=(E,A)=>{const[v,_]=l(E,A);return v<0||_<0||v>=n||_>=n?1/0:s[_*n+v]};function g(E,A){const[v,_]=l(E,A);let w=p(E,A),L=0,O=0;for(let z=-1;z<=1;z++)for(let k=-1;k<=1;k++){if(!k&&!z)continue;const W=v+k,V=_+z;if(W<0||V<0||W>=n||V>=n)continue;const $=s[V*n+W];$<w&&(w=$,L=k,O=z)}const D=Math.hypot(L,O)||1;return[L/D,O/D,w]}const M=(E,A)=>{const[v,_]=l(E,A);return v<0||_<0||v>=n||_>=n?-1:_*n+v},m=(E,A)=>{const v=M(E,A);return v<0||s[v]===1/0?0:a[v]};function d(){const E=[];for(const A of i.paths){const v=A.samples.find(_=>i.heightAt(_.x,_.z)>-.4&&m(_.x,_.z)>0);v&&E.push([v.x,v.z])}return E}function y(E,A=22,{near:v=8,minFrac:_=.6}={}){const w=d(),L=Math.max(0,...w.map(([k,W])=>m(k,W))),O=(k,W)=>{const V=i.heightAt(k,W);return V>-.4&&V<.15&&[[4,0],[-4,0],[0,4],[0,-4],[3,3],[-3,3],[3,-3],[-3,-3]].some(([$,J])=>i.heightAt(k+$,W+J)<-.9)},D=w.map(([k,W])=>{const V=[],$=[],J=Math.ceil(v/t),[at,Tt]=l(k,W);for(let H=-J;H<=J;H++)for(let Z=-J;Z<=J;Z++){const[ht,it]=c(at+Z,Tt+H);Math.hypot(ht-k,it-W)>v||m(ht,it)<_*L||(O(ht,it)?V.push([ht,it]):i.heightAt(ht,it)>.3&&i.slopeAt(ht,it)<.6&&$.push([ht,it]))}return(V.length?V:$).sort(()=>Math.random()-.5)}).filter(k=>k.length).sort(()=>Math.random()-.5),z=[];for(let k=0;z.length<E&&k<4;k++){for(const W of D){const V=W.find($=>z.every(J=>Math.hypot(J[0]-$[0],J[1]-$[1])>A));if(V&&z.push(V),z.length>=E)break}A=Math.min(A,6)}return z}let b=null;function x(E,A){if(!b){b=new Float32Array(n*n);for(let k=0;k<n;k++)for(let W=0;W<n;W++){const[V,$]=c(W,k);b[k*n+W]=i.isWalkable(V,$)?i.heightAt(V,$)<.05?1.6:1:1/0}}const v=new Float64Array(n*n).fill(1/0),_=[],w=(k,W)=>{_.push([k,W]);let V=_.length-1;for(;V>0;){const $=V-1>>1;if(_[$][0]<=_[V][0])break;[_[$],_[V]]=[_[V],_[$]],V=$}},L=()=>{const k=_[0],W=_.pop();if(_.length){_[0]=W;let V=0;for(;;){const $=2*V+1,J=$+1;let at=V;if($<_.length&&_[$][0]<_[at][0]&&(at=$),J<_.length&&_[J][0]<_[at][0]&&(at=J),at===V)break;[_[at],_[V]]=[_[V],_[at]],V=at}}return k},O=M(E,A);if(O<0)return null;v[O]=0,w(0,O);const D=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;_.length;){const[k,W]=L();if(k>v[W])continue;const V=W%n,$=W/n|0;for(const[J,at,Tt]of D){const kt=V+J,H=$+at;if(kt<0||H<0||kt>=n||H>=n)continue;const Z=H*n+kt,ht=b[Z];if(ht===1/0)continue;const it=k+Tt*t*ht;it<v[Z]&&(v[Z]=it,w(it,Z))}}const z=(k,W)=>{const V=M(k,W);return V<0?1/0:v[V]};return{at:z,dir(k,W){const[V,$]=l(k,W);let J=z(k,W),at=0,Tt=0;for(let H=-1;H<=1;H++)for(let Z=-1;Z<=1;Z++){if(!Z&&!H)continue;const ht=V+Z,it=$+H;ht<0||it<0||ht>=n||it>=n||v[it*n+ht]<J&&(J=v[it*n+ht],at=Z,Tt=H)}const kt=Math.hypot(at,Tt)||1;return[at/kt,Tt/kt]}}}const R=()=>{let E=0;for(const A of s)A<1/0&&A>E&&(E=A);return E},T=()=>{u(),f()};return T(),{at:p,dir:g,coastPoints:y,roadEnds:d,routeLen:m,walkField:x,rebuild:T,setBlock(E){h=E,T()},maxDist:R(),N:n,cell:t}}function Zf(i,t=700,{blending:e=mi,size:n=.55,opacity:s=1,fadeTo:r=null}={}){const a=new Pt(r||"#000000"),o=new Float32Array(t*3),l=new Float32Array(t*3),c=new Float32Array(t*3),h=new Float32Array(t*3),u=new Float32Array(t),f=new Float32Array(t),p=new Float32Array(t);let g=0;const M=new ze;M.setAttribute("position",new Ge(o,3)),M.setAttribute("color",new Ge(l,3));const m=document.createElement("canvas");m.width=m.height=64;const d=m.getContext("2d"),y=d.createRadialGradient(32,32,0,32,32,32);y.addColorStop(0,"rgba(255,255,255,1)"),y.addColorStop(.4,"rgba(255,255,255,0.6)"),y.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=y,d.fillRect(0,0,64,64);const b=new vo({size:n,map:new pi(m),vertexColors:!0,transparent:!0,opacity:s,blending:e,depthWrite:!1}),x=new Bc(M,b);x.frustumCulled=!1,i.add(x);for(let A=0;A<t;A++)o[A*3+1]=-999;const R=new Pt;function T(A,v,_,{n:w=10,color:L="#ffb347",speed:O=4,up:D=3,life:z=.7,gravity:k=9,spread:W=1}={}){R.set(L);for(let V=0;V<w;V++){const $=g;g=(g+1)%t,o[$*3]=A,o[$*3+1]=v,o[$*3+2]=_;const J=Math.random()*Math.PI*2,at=O*(.4+Math.random()*.6)*W;c[$*3]=Math.cos(J)*at,c[$*3+1]=D*(.5+Math.random()),c[$*3+2]=Math.sin(J)*at,h[$*3]=R.r,h[$*3+1]=R.g,h[$*3+2]=R.b,f[$]=u[$]=z*(.6+Math.random()*.6),p[$]=k}}function E(A){for(let v=0;v<t;v++){if(u[v]<=0)continue;if(u[v]-=A,u[v]<=0){o[v*3+1]=-999,l[v*3]=l[v*3+1]=l[v*3+2]=0;continue}c[v*3+1]-=p[v]*A,o[v*3]+=c[v*3]*A,o[v*3+1]+=c[v*3+1]*A,o[v*3+2]+=c[v*3+2]*A;const _=u[v]/f[v];l[v*3]=h[v*3]*_+a.r*(1-_),l[v*3+1]=h[v*3+1]*_+a.g*(1-_),l[v*3+2]=h[v*3+2]*_+a.b*(1-_)}M.attributes.position.needsUpdate=!0,M.attributes.color.needsUpdate=!0}return{emit:T,update:E}}const f_={xbox:{build:"Ⓐ",carry:"Ⓑ",next:"Ⓨ",sel:"LB/RB",pause:"☰",restart:"View",name:"Xbox"},ps:{build:"✕",carry:"○",next:"△",sel:"L1/R1",pause:"Options",restart:"Select",name:"PlayStation"},ps3:{build:"✕",carry:"○",next:"△",sel:"L1/R1",pause:"Start",restart:"Select",name:"PlayStation 3"},switch:{build:"A",carry:"B",next:"X",sel:"L/R",pause:"+",restart:"−",name:"Switch"}},d_={build:"B",carry:"E",next:"N",sel:"Z/X",pause:"Esc",restart:"R",name:"Tastatur"},p_={build:"Bygg",carry:"Bær",next:"Neste bølge",sel:"",pause:"⏸",restart:"⏸ → ↺",name:"Berøring"};function m_(i=""){const t=i.toLowerCase();return/nintendo|pro controller|joy-con|joycon|057e/.test(t)?"switch":/0268|playstation\(r\)\s*3|ps3/.test(t)?"ps3":/playstation|dualshock|dualsense|wireless controller|054c|sony/.test(t)?"ps":"xbox"}function g_(i=""){const t=i.toLowerCase();return/0268|playstation\(r\)\s*3|ps3/.test(t)?"PS3 (DualShock 3)":/0ce6|0df2|dualsense/.test(t)?"PS5 (DualSense)":/05c4|09cc|0ba0|dualshock\s*4/.test(t)?"PS4 (DualShock 4)":/playstation|wireless controller|054c|sony/.test(t)?"PlayStation":/xbox|xinput|045e/.test(t)?"Xbox":/nintendo|pro controller|057e/.test(t)?"Switch Pro":/joy-con|joycon/.test(t)?"Joy-Con":"Spillkontroll"}const Ji={evdev:{btn:[0,1,3,2,4,5,6,7,8,9,11,12],home:10,hat:[6,7],look:3},ds3:{btn:[0,1,3,2,4,5,6,7,8,9,11,12],home:10,dpad:[13,14,15,16],look:3},ds3old:{btn:[14,13,15,12,10,11,8,9,0,3,1,2],home:16,dpad:[4,6,7,5],look:2},dinput:{btn:[0,1,2,3,4,5,6,7,8,9,10,11],home:12,hat9:!0,look:2}};function v_(i,t=[]){return i.mapping==="standard"?null:/0268|playstation\(r\)\s*3/i.test(i.id)?i.axes.length>8?Ji.ds3old:Ji.ds3:Math.abs(t[9]??0)>1.1?Ji.dinput:i.axes.length>=8?Ji.evdev:Ji.dinput}function x_(i){if(i===void 0||i>1.1||i<-1.1)return[!1,!1,!1,!1];const t=Math.round((i+1)*3.5)%8;return[t===7||t<=1,t>=3&&t<=5,t>=5&&t<=7,t>=1&&t<=3]}function __(i,t=[]){const e=i.buttons.map(o=>!!o&&(o.pressed||o.value>.5)),n=v_(i,t);if(!n)return{down:e,axes:[i.axes[0]||0,i.axes[1]||0,i.axes[2]||0,i.axes[3]||0],layout:"standard"};const s=n.btn.map(o=>!!e[o]);let r=[!1,!1,!1,!1];if(n.dpad)r=n.dpad.map(o=>!!e[o]);else if(n.hat&&i.axes.length>n.hat[1]){const o=i.axes[n.hat[0]],l=i.axes[n.hat[1]];r=[l<-.5,l>.5,o<-.5,o>.5]}else n.hat9&&(r=x_(i.axes[9]));s.push(...r,!!e[n.home]);const a=o=>Math.abs(t[o]??0)>.5?0:i.axes[o]||0;return{down:s,axes:[a(0),a(1),a(n.look),a(n.look+1)],layout:n===Ji.evdev?"evdev":n===Ji.ds3?"ds3":n===Ji.ds3old?"ds3old":"dinput"}}function M_(i){const t=i==="switch";return{build:t?1:0,carry:t?0:1,next:3,prev:4,nextSel:5,zoomOut:6,zoomIn:7,pause:9,back:8}}function y_(i){const t=new Set,e={move:{x:0,z:0},look:0,lookDelta:0,zoom:1,pressed:new Set,clicks:[],device:matchMedia("(pointer: coarse)").matches?"touch":"kb",padKind:"xbox",padId:""},n=v=>e.pressed.add(v),s=v=>{e.device=v};addEventListener("keydown",v=>{if(s("kb"),(v.code==="Space"||v.code.startsWith("Arrow")||v.code==="Tab")&&v.preventDefault(),v.repeat)return;t.add(v.code);const _={KeyE:"carry",Space:"carry",KeyB:"build",Digit1:"b1",Digit2:"b2",Digit3:"b3",Digit4:"b4",Digit5:"b5",Digit6:"b6",Digit7:"b7",Numpad1:"b1",Numpad2:"b2",Numpad3:"b3",Numpad4:"b4",Numpad5:"b5",Numpad6:"b6",Numpad7:"b7",KeyZ:"selPrev",KeyX:"selNext",KeyQ:"selPrev",KeyR:"restart",KeyN:"next",Enter:"next",KeyF:"fps",KeyM:"music",Escape:"pause",KeyP:"pause"};_[v.code]&&n(_[v.code])}),addEventListener("keyup",v=>t.delete(v.code)),addEventListener("blur",()=>t.clear()),i.addEventListener("wheel",v=>{v.preventDefault(),s("kb"),e.zoom=Xa(e.zoom*(v.deltaY>0?1.08:1/1.08),.55,4.5)},{passive:!1}),i.addEventListener("contextmenu",v=>v.preventDefault());const r=new Map;let a=0,o=1,l=null;const c=v=>({x:v.clientX/innerWidth*2-1,y:-(v.clientY/innerHeight)*2+1});i.addEventListener("pointerdown",v=>{if(s(v.pointerType==="touch"?"touch":"kb"),v.pointerType==="mouse"&&v.button===2){l={x:v.clientX},i.setPointerCapture(v.pointerId);return}v.pointerType==="mouse"&&v.button!==0||(r.set(v.pointerId,{e:v,t:performance.now(),x0:v.clientX,y0:v.clientY}),r.size===2&&(a=Rh(r),o=e.zoom))}),i.addEventListener("pointermove",v=>{if(l){e.lookDelta+=(v.clientX-l.x)*.008,l.x=v.clientX;return}const _=r.get(v.pointerId);_&&(_.e=v,r.size===2&&a>0&&(e.zoom=Xa(o*(a/Rh(r)),.55,4.5)))});const h=v=>{if(l&&v.button===2){l=null;return}const _=r.get(v.pointerId);_&&r.size===1&&a===0&&Math.hypot(v.clientX-_.x0,v.clientY-_.y0)<12&&e.clicks.push(c(v)),r.delete(v.pointerId),r.size<2&&(a=0)};i.addEventListener("pointerup",h),i.addEventListener("pointercancel",v=>{r.delete(v.pointerId),l=null,a=0});const u=document.getElementById("stick"),f=document.getElementById("knob"),p={x:0,z:0};let g=null;const M=v=>{const _=u.getBoundingClientRect();let w=v.clientX-(_.left+_.width/2),L=v.clientY-(_.top+_.height/2);const O=_.width/2,D=Math.hypot(w,L);D>O&&(w*=O/D,L*=O/D),f.style.transform=`translate(${w}px, ${L}px)`;const z=D/O<.15?0:1;p.x=w/O*z,p.z=L/O*z};u.addEventListener("pointerdown",v=>{s("touch"),g=v.pointerId,u.setPointerCapture(v.pointerId),M(v)}),u.addEventListener("pointermove",v=>{v.pointerId===g&&M(v)});const m=v=>{v.pointerId===g&&(g=null,p.x=p.z=0,f.style.transform="")};u.addEventListener("pointerup",m),u.addEventListener("pointercancel",m);const d=(v,_)=>v.addEventListener("pointerdown",w=>{w.preventDefault(),w.stopPropagation(),w.pointerType==="touch"&&s("touch"),n(_)});d(document.getElementById("btn-build"),"build"),d(document.getElementById("btn-carry"),"carry"),d(document.getElementById("btn-next"),"next"),d(document.getElementById("btn-pause"),"pause"),document.querySelectorAll("#build-panel button").forEach((v,_)=>d(v,"b"+(_+1)));let y=[],b=null,x={dir:null,t:0,rep:0},R=0;e.padSeen=!1,e.onPad=null;const T=v=>{var _;b=v?v.axes.slice():null,y=[],v&&(e.padId=v.id,e.padKind=m_(v.id),e.padSeen=!0,(_=e.onPad)==null||_.call(e,"connect",v.id))};addEventListener("gamepadconnected",v=>{v.gamepad.id!==e.padId&&T(v.gamepad)}),addEventListener("gamepaddisconnected",v=>{var _;v.gamepad.id===e.padId&&(e.padId="",b=null,(_=e.onPad)==null||_.call(e,"disconnect",v.gamepad.id),e.device==="pad"&&(e.device=matchMedia("(pointer: coarse)").matches?"touch":"kb"))});let E=null;function A(v){var Z,ht;let _=[];try{_=navigator.getGamepads?[...navigator.getGamepads()]:[]}catch{_=[]}const w=_.find(it=>it&&it.connected&&it.id===e.padId)||_.find(it=>it&&it.connected);if(E=w||null,!w)return null;(w.id!==e.padId||!b)&&T(w);const L=M_(e.padKind),{down:O,axes:D}=__(w,b),z=y,k=it=>O[it]&&!z[it],W=it=>Math.abs(it)<.2?0:(it-Math.sign(it)*.2)/.8;let V=W(D[0]),$=W(D[1]);const J=O[14]?-1:O[15]?1:0,at=O[12]?-1:O[13]?1:0;J&&(V=J),at&&($=at);const Tt=W(D[2]);if((V||$||Tt||O.some(Boolean))&&s("pad"),y=O,(Z=e.menu)==null?void 0:Z.root()){const it=at<0||D[1]<-.6?"up":at>0||D[1]>.6?"down":J<0||D[0]<-.6?"left":J>0||D[0]>.6?"right":null;return it!==x.dir?(x={dir:it,t:0,rep:0},it&&e.menu.move(it)):it&&(x.t+=v,x.t>.4+x.rep*.15&&(x.rep++,e.menu.move(it))),k(L.build)&&e.menu.ok(),k(L.carry)&&e.menu.back(),k(L.pause)&&n("pause"),k(L.back)&&n("restart"),{x:0,z:0,look:0,zoomIn:!1,zoomOut:!1}}return x.dir=null,(ht=e.panelOpen)!=null&&ht.call(e)&&J?(k(14)&&n("selPrev"),k(15)&&n("selNext"),R+=v,R<.25&&!W(D[0])&&(V=0)):R=0,k(L.build)&&n("build"),k(L.carry)&&n("carry"),k(L.next)&&n("next"),k(L.prev)&&n("selPrev"),k(L.nextSel)&&n("selNext"),k(L.pause)&&n("pause"),k(L.back)&&n("restart"),k(2)&&e.padKind!=="switch"&&n("next"),{x:V,z:$,look:Tt,zoomIn:O[L.zoomIn],zoomOut:O[L.zoomOut]}}return e.rumble=(v=200,_=.6)=>{var w,L,O,D;if(!(!E||e.device!=="pad"))try{(w=E.vibrationActuator)!=null&&w.playEffect?E.vibrationActuator.playEffect("dual-rumble",{duration:v,strongMagnitude:_,weakMagnitude:_/2}):(D=(O=(L=E.hapticActuators)==null?void 0:L[0])==null?void 0:O.pulse)==null||D.call(O,_,v)}catch{}},e.update=v=>{let _=0,w=0;(t.has("KeyA")||t.has("ArrowLeft"))&&(_-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(_+=1),(t.has("KeyW")||t.has("ArrowUp"))&&(w-=1),(t.has("KeyS")||t.has("ArrowDown"))&&(w+=1);const L=A(v);L&&(L.x||L.z)&&(_=L.x,w=L.z),(p.x||p.z)&&(_=p.x,w=p.z);const O=Math.hypot(_,w);O>1&&(_/=O,w/=O),e.move.x=_,e.move.z=w,e.look=e.lookDelta+(L?L.look*2.2*v:0),e.lookDelta=0,L!=null&&L.zoomIn&&(e.zoom=Xa(e.zoom/(1+v*1.2),.55,4.5)),L!=null&&L.zoomOut&&(e.zoom=Xa(e.zoom*(1+v*1.2),.55,4.5))},e.labels=()=>e.device==="pad"?f_[e.padKind]:e.device==="touch"?p_:d_,e.consume=v=>e.pressed.delete(v),e.clear=()=>{e.pressed.clear(),e.clicks.length=0},e}const Xa=(i,t,e)=>Math.max(t,Math.min(e,i));function Rh(i){const[t,e]=[...i.values()].map(n=>n.e);return Math.hypot(t.clientX-e.clientX,t.clientY-e.clientY)||1}const Yn=i=>document.getElementById(i),b_=["btn-start","btn-again","btn-yes","btn-resume","btn-portrait"];function S_(i){let t=null;const e=h=>h&&!h.classList.contains("hidden")&&getComputedStyle(h).display!=="none";function n(){return e(Yn("rotate"))?Yn("rotate"):e(Yn("pause"))?e(Yn("confirm"))?Yn("confirm"):Yn("pause"):e(Yn("overlay"))?Yn("overlay"):null}const s=h=>[...h.querySelectorAll("button, input[type=range]")].filter(u=>!u.disabled&&u.offsetParent!==null&&!u.closest(".hidden")&&(h.id==="confirm"||!u.closest("#confirm")));function r(h){var u;t&&t!==h&&t.classList.remove("pad-focus"),t=h,h&&(i.device==="pad"&&h.classList.add("pad-focus"),(u=h.scrollIntoView)==null||u.call(h,{block:"nearest"}))}function a(){const h=n();if(!h)return t&&(t.classList.remove("pad-focus"),t=null),null;const u=s(h);return(!t||!u.includes(t))&&r(b_.map(f=>u.find(p=>p.id===f)).find(Boolean)||u[0]||null),t&&t.classList.toggle("pad-focus",i.device==="pad"),h}function o(h){const u=a();if(!u||!t)return;if(t.type==="range"&&(h==="left"||h==="right")){t.value=String(Math.max(0,Math.min(100,+t.value+(h==="left"?-10:10)))),t.dispatchEvent(new Event("input",{bubbles:!0}));return}const f=t.getBoundingClientRect(),p=f.left+f.width/2,g=f.top+f.height/2,[M,m]={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]}[h];let d=null,y=1/0,b=!1;for(const x of s(u)){if(x===t)continue;const R=x.getBoundingClientRect(),T=R.left+R.width/2-p,E=R.top+R.height/2-g,A=T*M+E*m,v=Math.abs(T*m-E*M);if(A<=4)continue;const _=v<=A,w=A+v*2;(_&&!b||_===b&&w<y)&&(y=w,d=x,b=_)}d&&r(d)}function l(){!a()||!t||t.type==="range"||t.click()}function c(){const h=a();h&&(h.id==="confirm"?Yn("btn-no").click():h.id==="pause"&&(e(Yn("lex"))?Yn("lex").classList.add("hidden"):Yn("btn-resume").click()))}return{root:()=>a(),move:o,ok:l,back:c,sync:a,get focused(){return t}}}let Xe=null,or=null,sa=null;function w_(){if(Xe){Xe.resume();return}const i=window.AudioContext||window.webkitAudioContext;if(!i)return;Xe=new i,or=Xe.createGain(),or.gain.value=.5,or.connect(Xe.destination),sa=Xe.createBuffer(1,Xe.sampleRate*2,Xe.sampleRate);const t=sa.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1;E_()}const Kf=()=>Xe?{ctx:Xe,noiseBuf:sa}:null;function Ze(i,t,{type:e="sine",vol:n=.2,slide:s=0,delay:r=0}={}){if(!Xe)return;const a=Xe.currentTime+r,o=Xe.createOscillator(),l=Xe.createGain();o.type=e,o.frequency.setValueAtTime(i,a),s&&o.frequency.exponentialRampToValueAtTime(Math.max(30,i+s),a+t),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(n,a+.01),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l).connect(or),o.start(a),o.stop(a+t+.02)}function hs(i,{vol:t=.3,freq:e=800,q:n=.7,delay:s=0}={}){if(!Xe)return;const r=Xe.currentTime+s,a=Xe.createBufferSource();a.buffer=sa;const o=Xe.createBiquadFilter();o.type="lowpass",o.frequency.value=e,o.Q.value=n;const l=Xe.createGain();l.gain.setValueAtTime(t,r),l.gain.exponentialRampToValueAtTime(1e-4,r+i),a.connect(o).connect(l).connect(or),a.start(r,Math.random()),a.stop(r+i+.02)}function E_(){const i=Xe.createBufferSource();i.buffer=sa,i.loop=!0;const t=Xe.createBiquadFilter();t.type="lowpass",t.frequency.value=420;const e=Xe.createGain();e.gain.value=.035;const n=Xe.createOscillator(),s=Xe.createGain();n.frequency.value=.12,s.gain.value=.03,n.connect(s).connect(e.gain),i.connect(t).connect(e).connect(or),i.start(),n.start()}let Ph=0;const Ye={pickup(){if(!Xe)return;const i=Xe.currentTime,t=i-Ph<.4?1.12:1;Ph=i,Ze(880*t+Math.random()*60,.12,{type:"triangle",vol:.12}),Ze(1320*t,.1,{type:"sine",vol:.06,delay:.04})},puff(){hs(.18,{vol:.07,freq:600,q:.3}),Ze(240,.12,{vol:.04,slide:-60})},crunch(){for(let i=0;i<4;i++)hs(.05,{vol:.1,freq:3500,delay:i*.03});Ze(130,.18,{vol:.08,slide:-40})},skank(){[[392,494,587],[349,440,523]][Math.random()<.5?0:1].forEach(i=>Ze(i,.11,{type:"square",vol:.025})),Ze(98,.3,{vol:.08})},chill(){Ze(330,.5,{type:"sine",vol:.07,slide:160}),Ze(495,.45,{type:"triangle",vol:.04,slide:120,delay:.08})},shoot(){Ze(520,.07,{type:"square",vol:.03,slide:-300})},mortar(){hs(.12,{vol:.12,freq:500}),Ze(160,.15,{type:"sine",vol:.12,slide:-80})},boom(){hs(.45,{vol:.28,freq:380}),Ze(90,.35,{vol:.18,slide:-50})},horn(){Ze(196,.5,{type:"sawtooth",vol:.035}),Ze(147,.55,{type:"sine",vol:.06})},hit(){hs(.05,{vol:.08,freq:2500})},die(){Ze(420,.18,{type:"triangle",vol:.09,slide:-280}),hs(.12,{vol:.07,freq:1200})},build(){[392,494,587].forEach((i,t)=>Ze(i,.25,{type:"triangle",vol:.1,delay:t*.06}))},upgrade(){[523,659,784,1047].forEach((i,t)=>Ze(i,.22,{type:"triangle",vol:.1,delay:t*.07}))},stone(){Ze(660,.2,{type:"sine",vol:.1,slide:200})},lose(){Ze(220,.6,{type:"sawtooth",vol:.06,slide:-120}),hs(.3,{vol:.08,freq:300})},stun(){Ze(700,.4,{type:"square",vol:.05,slide:-500})},deny(){Ze(150,.12,{type:"square",vol:.05})},wave(){[330,330,440].forEach((i,t)=>Ze(i,.3,{type:"sawtooth",vol:.04,delay:t*.18}))},win(){[523,659,784,1047,1319].forEach((i,t)=>Ze(i,.4,{type:"triangle",vol:.12,delay:t*.12}))}},xc=172,Li=60/xc/4,fs=i=>440*Math.pow(2,(i-69)/12),Dh={tak:{chords:[[50,66,69,73,76],[47,62,66,69,74],[43,59,62,66,71],[45,61,64,69,73]],hook:[[0,78,3],[3,76,3],[6,73,2],[8,74,4],[14,71,2],[16,73,3],[19,74,3],[22,76,6],[28,69,4]],pad:"sawtooth",padCut:2400,arpOct:12,reeseDetune:9,drive:0,space:.35,arpRate:1,lead:"square"},vinter:{chords:[[45,60,64,71,76],[41,57,64,69,72],[48,64,67,72,79],[43,59,62,67,71]],hook:[[0,76,6],[6,74,2],[8,72,6],[16,71,4],[20,72,2],[22,74,4],[26,79,6]],pad:"triangle",padCut:1500,arpOct:24,reeseDetune:6,drive:0,space:.6,arpRate:2,lead:"triangle"},vulkan:{chords:[[40,55,59,64,67],[41,57,60,65,69],[40,55,59,64,71],[38,54,57,62,66]],hook:[[0,64,2],[2,65,2],[4,64,4],[10,62,2],[12,59,4],[16,64,2],[18,67,2],[20,65,4],[26,64,6]],pad:"sawtooth",padCut:900,arpOct:0,reeseDetune:16,drive:.6,space:.25,arpRate:1,lead:"sawtooth"}},fl={A:{k:"x.x.......xx....x.x.......x.....",s:"....x..x.x..x..x....x..x.x..x.x.",g:"..........x...........x.....x..."},B:{k:"x.....x...x.x...x.x...x...x.....",s:"....x.x..x..x.x.....x..xx..x..x.",g:".x.......x.....x.x.......x......"},FILL:{k:"x.x.......x.....x...............",s:"....x..x.x..x..x....x.xxxxxxxxxx",g:"................................"}},Lh=[["build",8],["drop",16],["break",8],["drop",16]];function T_(i,t,e){const n=Dh[e]||Dh.tak,s=i.createDynamicsCompressor();s.threshold.value=-18,s.ratio.value=3,s.attack.value=.01,s.release.value=.2;const r=i.createDynamicsCompressor();r.threshold.value=-3,r.ratio.value=20,r.attack.value=.002,r.release.value=.08;const a=i.createGain();a.gain.value=0,s.connect(r).connect(a).connect(i.destination);const o=i.createAnalyser();o.fftSize=1024,a.connect(o);const l={};for(const Y of["drums","bass","pad","arp","lead"]){const C=i.createGain();C.gain.value=0,C.connect(s),l[Y]=C}const c={};for(const Y of["pad","bass"]){const C=i.createGain();C.gain.value=1,C.connect(l[Y]),c[Y]=C}const h=(Y,C)=>{const S=i.createBuffer(2,Math.floor(i.sampleRate*Y),i.sampleRate);for(let X=0;X<2;X++){const tt=S.getChannelData(X);for(let st=0;st<tt.length;st++)tt[st]=(Math.random()*2-1)*Math.pow(1-st/tt.length,C)}return S},u=i.createConvolver();u.buffer=h(2.4,2.5);const f=i.createGain();f.gain.value=n.space,u.connect(f).connect(s);const p=i.createConvolver();p.buffer=h(.5,.4);const g=i.createGain();g.gain.value=0,p.connect(g).connect(l.drums);const M=i.createDelay(1);M.delayTime.value=Li*3;const m=i.createGain();m.gain.value=.38;const d=i.createBiquadFilter();d.type="lowpass",d.frequency.value=2400;const y=i.createStereoPanner(),b=i.createOscillator(),x=i.createGain();b.frequency.value=xc/60/3,x.gain.value=.8,b.connect(x).connect(y.pan),b.start(),M.connect(d).connect(m).connect(M),d.connect(y).connect(l.arp);const R=i.createBiquadFilter();R.type="highpass",R.frequency.value=180;const T=i.createBiquadFilter();T.type="lowpass",T.frequency.value=n.padCut,T.Q.value=2;const E=i.createOscillator(),A=i.createGain();E.frequency.value=.07,A.gain.value=n.padCut*.45,E.connect(A).connect(T.frequency),E.start();const v=i.createDelay(.05);v.delayTime.value=.014;const _=i.createOscillator(),w=i.createGain();_.frequency.value=.5,w.gain.value=.004,_.connect(w).connect(v.delayTime),_.start();const L=i.createStereoPanner();L.pan.value=.6,R.connect(T),T.connect(c.pad),T.connect(v).connect(L).connect(c.pad),T.connect(u);const O=i.createBiquadFilter();O.type="lowpass",O.frequency.value=420,O.Q.value=6;const D=i.createOscillator(),z=i.createGain();if(D.frequency.value=xc/60/4,z.gain.value=260,D.connect(z).connect(O.frequency),D.start(),n.drive>0){const Y=i.createWaveShaper(),C=new Float32Array(1024);for(let S=0;S<1024;S++){const X=S/512-1;C[S]=Math.tanh(X*(1+n.drive*6))}Y.curve=C,O.connect(Y).connect(c.bass)}else O.connect(c.bass);const k=i.createBiquadFilter();k.type="lowpass",k.frequency.value=3600,k.Q.value=3,k.connect(l.lead),k.connect(M),k.connect(u);const W=(Y,C,S,X,tt,st)=>{Y.gain.setValueAtTime(1e-4,C),Y.gain.exponentialRampToValueAtTime(X,C+S),Y.gain.setValueAtTime(X,C+Math.max(S,st-tt)),Y.gain.exponentialRampToValueAtTime(1e-4,C+st)},V=(Y,C)=>{const S=i.createStereoPanner();return S.pan.value=C,Y.connect(S),S},$=(Y,C,S,X,tt,st,rt="bandpass",Ft=0)=>{const bt=i.createBufferSource();bt.buffer=t;const Lt=i.createBiquadFilter();Lt.type=rt,Lt.frequency.value=S,Lt.Q.value=X;const re=i.createGain();W(re,Y,.001,tt,C*.8,C),bt.connect(Lt).connect(re);const St=Ft?V(re,Ft):re;for(const Yt of st)St.connect(Yt);bt.start(Y,Math.random()*1.5),bt.stop(Y+C+.02)},J=(Y,C=1)=>{const S=i.createOscillator(),X=i.createGain();S.frequency.setValueAtTime(160,Y),S.frequency.exponentialRampToValueAtTime(44,Y+.11),W(X,Y,.002,1*C,.2,.3),S.connect(X).connect(l.drums),S.start(Y),S.stop(Y+.32),$(Y,.012,3500,.7,.35*C,[l.drums],"highpass");for(const tt of Object.values(c))tt.gain.cancelScheduledValues(Y),tt.gain.setValueAtTime(.35,Y),tt.gain.linearRampToValueAtTime(1,Y+.2)},at=(Y,C=1)=>{$(Y,.17,1900,.8,.5*C,[l.drums,p]);for(const[S,X,tt]of[[200,160,.3],[340,260,.14]]){const st=i.createOscillator(),rt=i.createGain();st.type="triangle",st.frequency.setValueAtTime(S,Y),st.frequency.exponentialRampToValueAtTime(X,Y+.08),W(rt,Y,.001,tt*C,.06,.11),st.connect(rt).connect(l.drums),st.start(Y),st.stop(Y+.13)}g.gain.setValueAtTime(.9*C,Y),g.gain.setValueAtTime(1e-4,Y+.21)};let Tt=1;const kt=(Y,C,S)=>{Tt=-Tt,$(Y,S?.14:.035,9e3,.6,(S?.12:.08)*C,[l.drums],"highpass",Tt*.35)},H=(Y,C,S)=>{for(const st of[-n.reeseDetune,n.reeseDetune]){const rt=i.createOscillator(),Ft=i.createGain();rt.type="sawtooth",rt.frequency.value=fs(C),rt.detune.value=st,W(Ft,Y,.02,.2,.1,S),V(rt.connect(Ft),st>0?.25:-.25).connect(O),rt.start(Y),rt.stop(Y+S+.05)}const X=i.createOscillator(),tt=i.createGain();X.frequency.value=fs(C-12),W(tt,Y,.02,.42,.1,S),X.connect(tt).connect(c.bass),X.start(Y),X.stop(Y+S+.05)},Z=(Y,C,S,X=1)=>{for(const tt of C.slice(1))for(const[st,rt]of[[-9,-.6],[0,0],[8,.6]]){const Ft=i.createOscillator(),bt=i.createGain();Ft.type=n.pad,Ft.frequency.value=fs(tt),Ft.detune.value=st,W(bt,Y,.8,.026*X,1.4,S),V(Ft.connect(bt),rt).connect(R),Ft.start(Y),Ft.stop(Y+S+.1)}},ht=(Y,C,S=1)=>{const X=i.createOscillator(),tt=i.createGain();X.type="square",X.frequency.value=fs(C+n.arpOct);const st=i.createBiquadFilter();st.type="lowpass",st.frequency.value=3200,W(tt,Y,.003,.05*S,.08,Li*1.6),X.connect(st).connect(tt),tt.connect(l.arp),tt.connect(M),X.start(Y),X.stop(Y+Li*2)},it=(Y,C,S,X)=>{const tt=S*Li;for(const st of[-6,6]){const rt=i.createOscillator(),Ft=i.createGain();rt.type=n.lead,X?(rt.frequency.setValueAtTime(fs(X),Y),rt.frequency.exponentialRampToValueAtTime(fs(C),Y+.05)):rt.frequency.value=fs(C),rt.detune.value=st;const bt=i.createOscillator(),Lt=i.createGain();bt.frequency.value=5.5,Lt.gain.value=9,bt.connect(Lt).connect(rt.detune),bt.start(Y+.12),bt.stop(Y+tt+.05),W(Ft,Y,.01,.07,Math.min(.12,tt*.4),tt),V(rt.connect(Ft),st>0?.2:-.2).connect(k),rt.start(Y),rt.stop(Y+tt+.05)}};let Ct=0,Dt=0,Ut=null,Wt=0,dt=.7,_t=!1,B=0;const qt=Lh.reduce((Y,[,C])=>Y+C,0),yt=()=>{if(Wt<.5)return"ambient";let Y=B%qt;for(const[C,S]of Lh){if(Y<S)return C;Y-=S}return"drop"},Ot=()=>{const Y=i.currentTime,C=(X,tt)=>{X.gain.cancelScheduledValues(Y),X.gain.setTargetAtTime(tt,Y,.8)},S=Wt;C(l.drums,.1+.85*S),C(l.bass,.3+.6*S),C(l.pad,.75-.2*S),C(l.arp,.35+.3*S),C(l.lead,.55+.35*S),a.gain.cancelScheduledValues(Y),a.gain.setTargetAtTime(_t?0:dt*.8,Y,.3)},It=Y=>Y%2?Li*.12:0,ee=()=>{for(;Dt<i.currentTime+.15;){const Y=Ct%32,C=Math.floor(Ct/16),S=Math.floor(Ct/32)%n.chords.length,X=n.chords[S];Y%16===0&&Ct>0&&Wt>.5&&B++;const tt=yt(),st=Dt+It(Y),rt=B%8;if(tt==="drop"||tt==="build"){const bt=rt%4===3&&Y>=16?fl.FILL:rt>=6?fl.B:fl.A,Lt=tt==="build"&&rt<4;bt.k[Y]==="x"&&!(Lt&&Y%8)&&J(st),bt.s[Y]==="x"&&!Lt&&at(st,tt==="build"?.7:1),bt.g[Y]==="x"&&at(st,.3),(!Lt||Y%2===0)&&kt(st,Y%2?.6:1,Y%8===6)}else tt==="break"?(Y%4===2&&kt(st,.6,!1),(Y===0||Y===16)&&J(st,.4)):Y%4===2&&kt(st,.45,!1);if(Y===0&&(Z(st,X,Li*32,tt==="break"?1.3:1),H(st,X[0],Li*(tt==="drop"?14:30))),tt==="drop"&&Y===16&&H(st,X[0]+(S%2?3:7),Li*14),Y%n.arpRate===0&&tt!=="break"&&ht(st,X[1+Y/n.arpRate%4]+(Y>=16?12:0),tt==="ambient"?.7:1),tt==="drop"||(tt==="break"||tt==="ambient")&&Math.floor(C/4)%2===1){const bt=n.hook.findIndex(([Lt])=>Lt===Y);if(bt>=0){const[,Lt,re]=n.hook[bt];it(st,Lt+(tt==="ambient"?-12:0),re,bt>0?n.hook[bt-1][1]:0)}}Dt+=Li,Ct++}};return{start(){Ut||(Dt=i.currentTime+.1,Ut=setInterval(ee,25),Ot())},stop(){clearInterval(Ut),Ut=null,a.gain.setTargetAtTime(0,i.currentTime,.2)},setIntensity(Y){Y>.5&&Wt<=.5&&(B=0),Wt=Y,Ot()},setVolume(Y){dt=Y,Ot()},setMuted(Y){_t=Y,Ot()},get muted(){return _t},get volume(){return dt},rms(){const Y=new Float32Array(o.fftSize);return o.getFloatTimeDomainData(Y),Math.sqrt(Y.reduce((C,S)=>C+S*S,0)/Y.length)},get intensity(){return Wt},get section(){return yt()},tap(Y){a.connect(Y)}}}const Ih=i=>440*Math.pow(2,(i-69)/12),Nr=60/76,Uh={tak:{chords:[[50,62,66,69,73],[47,59,62,66,71],[43,59,62,67,71],[45,57,61,64,69]],scale:[62,64,66,69,71,74,76,78,81],bell:"sine",padCut:1400,nature:"birds"},vinter:{chords:[[45,57,64,67,71],[41,57,60,64,67],[48,60,64,67,74],[43,55,62,67,69]],scale:[64,67,69,71,74,76,79,81,83],bell:"triangle",padCut:1100,nature:"wind"},vulkan:{chords:[[40,52,59,62,67],[41,53,60,64,67],[38,50,57,62,65],[40,52,55,59,64]],scale:[52,55,57,59,62,64,67,69,71],bell:"sine",padCut:800,nature:"rumble"}},Nh=8;function A_(i,t,e){const n=Uh[e]||Uh.tak,s=i.createDynamicsCompressor();s.threshold.value=-20,s.ratio.value=2.5,s.attack.value=.03,s.release.value=.4;const r=i.createGain();r.gain.value=0,s.connect(r).connect(i.destination);const a=i.createAnalyser();a.fftSize=1024,r.connect(a);const o={};for(const H of["pad","bell","nature","pulse"]){const Z=i.createGain();Z.gain.value=0,Z.connect(s),o[H]=Z}const l=i.createBuffer(2,Math.floor(i.sampleRate*3.5),i.sampleRate);for(let H=0;H<2;H++){const Z=l.getChannelData(H);for(let ht=0;ht<Z.length;ht++)Z[ht]=(Math.random()*2-1)*Math.pow(1-ht/Z.length,3)}const c=i.createConvolver();c.buffer=l;const h=i.createGain();h.gain.value=.55,c.connect(h).connect(s);const u=i.createDelay(2);u.delayTime.value=Nr*.75;const f=i.createGain();f.gain.value=.35;const p=i.createBiquadFilter();p.type="lowpass",p.frequency.value=2200,u.connect(p).connect(f).connect(u),p.connect(o.bell);const g=i.createBiquadFilter();g.type="lowpass",g.frequency.value=n.padCut,g.Q.value=.7;const M=i.createOscillator(),m=i.createGain();M.frequency.value=.05,m.gain.value=n.padCut*.3,M.connect(m).connect(g.frequency),M.start(),g.connect(o.pad),g.connect(c);const d=(H,Z,ht,it,Ct,Dt)=>{H.gain.setValueAtTime(1e-4,Z),H.gain.exponentialRampToValueAtTime(it,Z+ht),H.gain.setValueAtTime(it,Z+Math.max(ht,Dt-Ct)),H.gain.exponentialRampToValueAtTime(1e-4,Z+Dt)},y=(H,Z)=>{const ht=i.createStereoPanner();return ht.pan.value=Z,H.connect(ht),ht},b=(H,Z,ht)=>{for(const it of Z)for(const[Ct,Dt]of[[-7,-.5],[7,.5]]){const Ut=i.createOscillator(),Wt=i.createGain();Ut.type=it===Z[0]?"sine":"triangle",Ut.frequency.value=Ih(it),Ut.detune.value=Ct,d(Wt,H,2.5,it===Z[0]?.05:.022,3,ht),y(Ut.connect(Wt),Dt).connect(g),Ut.start(H),Ut.stop(H+ht+.1)}},x=(H,Z,ht=1)=>{const it=(Math.random()-.5)*.8;for(const[Ct,Dt,Ut]of[[1,.09,1.6],[4.2,.02,.25],[2,.025,.7]]){const Wt=i.createOscillator(),dt=i.createGain();Wt.type=Ct===1?n.bell:"sine",Wt.frequency.value=Ih(Z)*Ct,dt.gain.setValueAtTime(1e-4,H),dt.gain.exponentialRampToValueAtTime(Dt*ht,H+.005),dt.gain.exponentialRampToValueAtTime(1e-4,H+Ut);const _t=y(Wt.connect(dt),it);_t.connect(o.bell),_t.connect(u),_t.connect(c),Wt.start(H),Wt.stop(H+Ut+.05)}},R=(H,Z,ht,it,Ct,Dt,Ut,Wt=.002)=>{const dt=i.createBufferSource();dt.buffer=t;const _t=i.createBiquadFilter();_t.type=ht,_t.frequency.value=it,_t.Q.value=Ct;const B=i.createGain();return d(B,H,Wt,Dt,Z*.7,Z),dt.connect(_t).connect(B).connect(Ut),dt.start(H,Math.random()*1.5),dt.stop(H+Z+.05),_t},T=H=>{const Z=i.createOscillator(),ht=i.createGain();Z.frequency.setValueAtTime(90,H),Z.frequency.exponentialRampToValueAtTime(50,H+.18),d(ht,H,.01,.35,.2,.3),Z.connect(ht).connect(o.pulse),Z.start(H),Z.stop(H+.32)},E=(H,Z)=>R(H,.09,"highpass",7e3,.5,.05*Z,o.pulse,.02),A=H=>{const Z=2+Math.floor(Math.random()*3),ht=2400+Math.random()*1600,it=(Math.random()-.5)*1.4;for(let Ct=0;Ct<Z;Ct++){const Dt=H+Ct*(.09+Math.random()*.06),Ut=i.createOscillator(),Wt=i.createGain();Ut.frequency.setValueAtTime(ht*(1+Math.random()*.2),Dt),Ut.frequency.exponentialRampToValueAtTime(ht*(.75+Math.random()*.6),Dt+.07),d(Wt,Dt,.008,.03,.04,.08),y(Ut.connect(Wt),it).connect(o.nature),Ut.start(Dt),Ut.stop(Dt+.1)}};let v=null;const _=()=>{const H=i.createBufferSource();H.buffer=t,H.loop=!0;const Z=i.createBiquadFilter(),ht=i.createGain(),it=i.createOscillator(),Ct=i.createGain(),Dt=i.createGain();n.nature==="wind"?(Z.type="bandpass",Z.frequency.value=500,Z.Q.value=1.2,ht.gain.value=.05,it.frequency.value=.08,Ct.gain.value=.04,Dt.gain.value=350):n.nature==="rumble"?(Z.type="lowpass",Z.frequency.value=120,Z.Q.value=.8,ht.gain.value=.18,it.frequency.value=.05,Ct.gain.value=.08,Dt.gain.value=40):(Z.type="highpass",Z.frequency.value=3e3,Z.Q.value=.5,ht.gain.value=.012,it.frequency.value=.11,Ct.gain.value=.01,Dt.gain.value=800),it.connect(Ct).connect(ht.gain),it.connect(Dt).connect(Z.frequency),H.connect(Z).connect(ht).connect(o.nature),H.start(),it.start(),v={s:H,lfo:it}};let w=null,L=0,O=.7,D=!1,z=0,k=0,W=0,V=0,$=0,J=0,at=4;const Tt=()=>{const H=i.currentTime,Z=L,ht=(it,Ct)=>{it.gain.cancelScheduledValues(H),it.gain.setTargetAtTime(Ct,H,1.2)};ht(o.pad,.9),ht(o.bell,.7+.2*Z),ht(o.nature,.9-.4*Z),ht(o.pulse,.55*Z),g.frequency.cancelScheduledValues(H),g.frequency.setTargetAtTime(n.padCut*(1+.9*Z),H,2),r.gain.cancelScheduledValues(H),r.gain.setTargetAtTime(D?0:O*1.6,H,.4)},kt=()=>{const H=i.currentTime+.3;for(;z<H;)b(z,n.chords[k],Nh+3),k=(k+1)%n.chords.length,z+=Nh;for(;W<H;)Math.random()<.8&&(at=Math.max(0,Math.min(n.scale.length-1,at+[-2,-1,-1,1,1,2,0][Math.floor(Math.random()*7)])),x(W,n.scale[at],.8+Math.random()*.3),Math.random()<.15&&x(W+Nr/4,n.scale[Math.max(0,at-2)],.6)),W+=Nr*(L>.5?Math.random()<.5?.5:1:[1,1.5,2,3][Math.floor(Math.random()*4)]);for(;V<H;)L>.5&&($%2===0&&T(V),E(V,1),E(V+Nr/2,.6)),$++,V+=Nr;for(;J<H;){if(n.nature==="birds"&&Math.random()<.55&&A(J),n.nature==="wind"&&Math.random()<.3&&R(J,2.5,"bandpass",1400+Math.random()*900,6,.03,o.nature,.9),n.nature==="rumble")for(let Z=0;Z<3;Z++)Math.random()<.5&&R(J+Math.random(),.02,"highpass",2500,.5,.12,o.nature);J+=1.5+Math.random()*2.5}};return{start(){if(w)return;z=W=V=J=i.currentTime+.1,v||_(),w=setInterval(kt,50),Tt()},stop(){clearInterval(w),w=null,r.gain.setTargetAtTime(0,i.currentTime,.3)},setIntensity(H){L=H,Tt()},setVolume(H){O=H,Tt()},setMuted(H){D=H,Tt()},get muted(){return D},get volume(){return O},rms(){const H=new Float32Array(a.fftSize);return a.getFloatTimeDomainData(H),Math.sqrt(H.reduce((Z,ht)=>Z+ht*ht,0)/H.length)},get intensity(){return L},get section(){return L>.5?"wave":"calm"},tap(H){r.connect(H)}}}const Qt={startEmbers:225,emberLife:25,expiredRefund:.5,magnet:4.6,reach:2.7,placeAhead:2.3,minTowerGap:2.5,plinthBonus:1.25,lighthouseReach:5.4,stoneCost:30,chargeTime:.4,upgradeTime:[15,20,25,30],keeperSpeed:6.4,carrySlow:.82,wadeSlow:.7,stunTime:1.6,stunLoss:.3,chillMax:100,stressInvuln:1,stressPush:7,airStress:10,faintTime:6,faintLoss:.25,wakeChill:.6,regen:3,regenReach:9,bagChance:.05,bagHeal:25,bagLife:20,hpGrowth:.2,waveBonus:20,waveBonusPer:5,interest:.1,firstPrep:30,prepTime:15,earlyScale:[.55,.65,.8]},lr={ring:{name:"Røykring-kanon",cost:22,range:7.5,dmg:7,cooldown:.65,air:!0,tip:"rask · bakke + luft"},chips:{name:"Chips-mørtel",cost:38,range:10,dmg:18,cooldown:2.2,air:!1,splash:2.5,tip:"splash · kun bakke"},speaker:{name:"Reggae-høyttaler",cost:30,range:5.5,dmg:3,cooldown:1.6,air:!0,slowTime:2.2,tip:"bremser i ring"},bubble:{name:"Bobleblåser",cost:20,range:7,dmg:2.5,cooldown:.38,air:!0,ground:!1,trap:1.4,tip:"fanger flyvere · kun luft"},kite:{name:"Papirdrage",cost:40,range:13,dmg:5,cooldown:2.8,air:!0,ground:!1,zone:3.4,hover:2.4,tip:"sone, lang · kun luft"},pizza:{name:"Pizza-katapult",cost:55,range:14,dmg:24,cooldown:3,air:!1,splash:2.9,tip:"lang splash · kun bakke"},lamp:{name:"Lavalampe",cost:50,range:4.6,dmg:1.1,cooldown:.3,air:!0,slowTime:.5,tip:"aura, bremser alt"}},bo={clerk:{name:"Forbuds-byråkrat",hp:22,speed:2.6,embers:4,anim:12,puff:"#9fffb0",stress:10},tank:{name:"Stortings-tanken",hp:95,speed:1.25,embers:10,anim:5,puff:"#9fffb0",resist:{ring:.5,chips:1.5},stress:15},gull:{name:"Moralpanikk-måke",hp:16,speed:3.4,embers:5,anim:12,puff:"#ffffff",flying:!0,swoop:!0},swarm:{name:"Komité-sverm",hp:7,speed:2.2,embers:1,anim:9,puff:"#ffe08a",stress:8},auditor:{name:"Revisoren",hp:70,speed:1.6,embers:8,anim:7,puff:"#9fffb0",shield:.25,resist:{lamp:1.5},info:"skjold forfra (×0,25), ikke mot aura",stress:14},complainer:{name:"Naboklageren",hp:12,speed:4.3,embers:3,anim:18,puff:"#ffb0f0",resist:{chips:.5,ring:1.5},info:"rask, mørtel bommer",stress:10},lobbyist:{name:"Lobbyisten",hp:55,speed:1.9,embers:6,anim:9,puff:"#ffe08a",splits:3,resist:{speaker:.5,pizza:1.5},noMood:!0,info:"deler seg i tre, immun mot stemning",stress:12},lobbyMini:{name:"Mini-lobbyist",hp:14,speed:2.7,embers:1,anim:14,puff:"#ffe08a",resist:{speaker:.5,pizza:1.5},noMood:!0,stress:8},drone:{name:"Overvåkings-drone",hp:9,speed:4.6,embers:1,anim:30,puff:"#c8d8ff",flying:!0,alt:3.6,resist:{bubble:1.5,lamp:1.5,kite:.5},info:"rask sverm i lufta"},balloon:{name:"Ballong-byråkraten",hp:150,speed:1.05,embers:14,anim:2,puff:"#ffffff",flying:!0,alt:5.6,resist:{bubble:.5,kite:1.5},info:"seig, høyt oppe"},heli:{name:"Mini-helikopteret",hp:48,speed:2.5,embers:7,anim:40,puff:"#ffffff",flying:!0,alt:4.6,blind:{every:6,dur:3,range:9},resist:{ring:.5,kite:1.5},info:"søkelys blender et tårn i 3 s"}},C_=[[{type:"clerk",n:8,gap:1.4,path:0}],[{type:"clerk",n:6,gap:1.3,path:"both"}],[{type:"swarm",n:7,gap:.35,path:1},{type:"clerk",n:6,gap:1.2,path:0,at:4},{type:"swarm",n:7,gap:.35,path:0,at:12}],[{type:"tank",n:3,gap:4,path:0},{type:"clerk",n:6,gap:1,path:1,at:2}],[{type:"gull",n:5,gap:2.5},{type:"clerk",n:7,gap:1,path:"both",at:3}],[{type:"tank",n:3,gap:3.5,path:"both"},{type:"swarm",n:8,gap:.3,path:"both",at:8}],[{type:"gull",n:8,gap:1.6},{type:"clerk",n:9,gap:.8,path:"both",at:2}],[{type:"tank",n:4,gap:3,path:"both"},{type:"swarm",n:10,gap:.3,path:"both",at:6},{type:"gull",n:4,gap:2,at:10}],[{type:"gull",n:10,gap:1.2},{type:"tank",n:4,gap:3,path:"both",at:3},{type:"clerk",n:10,gap:.7,path:"both",at:8}],[{type:"clerk",n:10,gap:.6,path:"both"},{type:"tank",n:5,gap:2.5,path:"both",at:6},{type:"swarm",n:12,gap:.25,path:"both",at:14},{type:"gull",n:12,gap:1,at:18}]],tn=new URLSearchParams(location.search),Jf=tn.has("demo");if(tn.has("unlockall"))try{localStorage.setItem("glod-unlocked",String(Er.length))}catch{}let Rn=Number(tn.get("world"));if(!Number.isInteger(Rn))try{Rn=Number(localStorage.getItem("glod-world"))||0}catch{Rn=0}Rn=Math.max(0,Math.min(na()-1,Rn));try{localStorage.setItem("glod-world",String(Rn))}catch{}const sn=Er[Rn],Zc=R1(sn,C_);function R_(){return 1}const P_=Math.max(1,Math.min(20,Number(tn.get("speed"))||1)),Gi=matchMedia("(pointer: coarse)").matches||tn.has("mobile"),_c={high:{shadow:2048,dprCap:2},low:{shadow:1024,dprCap:2}};let gi=Gi?"low":"high";try{const i=localStorage.getItem("glod-quality");(i==="high"||i==="low")&&(gi=i)}catch{}(tn.get("q")==="high"||tn.get("q")==="low")&&(gi=tn.get("q"));const ra={mobile:Gi,shadow:_c[gi].shadow,dprCap:_c[gi].dprCap},D_={high:["rock","tree","tower","figure"],low:["rock","tree","tower","figure"]};function Qf(i){const t=tn.has("ol")?tn.get("ol").split(","):D_[i];Lf(Object.fromEntries(["rock","tree","tower","figure"].map(e=>[e,t.includes(e)])))}Qf(gi);const td=document.getElementById("game"),wn=new Sx({canvas:td,antialias:!Gi,powerPreference:"high-performance",preserveDrawingBuffer:tn.has("shot")});let Qi=Math.min(devicePixelRatio||1,ra.dprCap);wn.setPixelRatio(Qi);wn.shadowMap.enabled=!0;wn.shadowMap.type=Hh;wn.toneMapping=wc;let ys="dag";try{ys=localStorage.getItem("glod-tid")||"dag"}catch{}tn.get("tid")&&(ys=tn.get("tid"));const Hn=ys==="skumring"&&sn.skyDusk?sn.skyDusk:sn.sky;wn.toneMappingExposure=Hn.exposure;wn.info.autoReset=!1;const Te=new wx,ed=new Pt(Hn.fog);Te.background=ed;Te.fog=new kc(ed,...sn.fog??[55,115]);const qe=new Bn(38,1,.5,200),L_=new r1(Hn.hemiSky,Hn.hemiGround,Hn.hemi);Te.add(L_);const hn=new l1(Hn.sun,Hn.sunI);hn.castShadow=!0;hn.shadow.mapSize.set(ra.shadow,ra.shadow);Object.assign(hn.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:90});hn.shadow.bias=-8e-4;hn.shadow.normalBias=.03;Te.add(hn,hn.target);p1(Te);const jt=Y1(Te,ra,sn);jt.grass.setLevel(gi);const I_=u_(Te,jt,ra,sn,ys,qe),Dn=h_(jt);window.__nav=Dn;const Ne=Zf(Te,Gi?450:800),Ps=Zf(Te,Gi?120:220,{blending:es,size:1.6,opacity:.45,fadeTo:Hn.fog}),ha=c_(wn,Te,qe,Hn.grade);ha.setLevel(gi);const fe=y_(td),nd=S_(fe);fe.menu=nd;fe.panelOpen=()=>!di.classList.contains("hidden");const qr=document.createElement("div");qr.id="toast";document.body.appendChild(qr);let zh=0;function U_(i){qr.textContent=i,qr.classList.add("on"),clearTimeout(zh),zh=setTimeout(()=>qr.classList.remove("on"),3200)}fe.onPad=(i,t)=>{U_(i==="connect"?`🎮 Kontroll tilkoblet: ${g_(t)}`:"🎮 Kontroll frakoblet"),yi.device=null,pe("pause").classList.contains("hidden")||Ss(!0,Q.confirming)};function fa(){const i=innerWidth,t=innerHeight;wn.setSize(i,t,!1),qe.aspect=i/t,qe.updateProjectionMatrix(),ha.setSize(i,t),d1(Gi?2:2.2,wn.getPixelRatio(),i,t)}function id(i){gi=i;try{localStorage.setItem("glod-quality",i)}catch{}const t=_c[i];hn.shadow.mapSize.set(t.shadow,t.shadow),hn.shadow.map&&(hn.shadow.map.dispose(),hn.shadow.map=null),Qi=Math.min(devicePixelRatio||1,t.dprCap),wn.setPixelRatio(Qi),ha.setLevel(i),jt.grass.setLevel(i),Qf(i),fa(),document.getElementById("btn-quality").textContent=i==="high"?"Høy":"Lav"}addEventListener("resize",fa);fa();const Q={phase:"title",wave:0,timer:0,embers:Qt.startEmbers,lights:_r,spawnQueue:[],leaks:{},seen:{},time:0,sel:0,paused:!1},dl=Qt.upgradeTime.length+1,Zi=["ring","chips","speaker","bubble","kite","pizza","lamp"];let zi=sn.camYaw??0;const Fh=new c1,Ln=[],In=[],ai=[],xs=[],cr=[],Yr=[],Je=ua(z1(),"figure"),U={x:jt.lighthouse.pos.x+1,z:jt.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,walk:0,charge:0,chargeTower:null,face:Math.PI,goal:null,chill:Qt.chillMax,inv:0,faint:0,faints:0};Je.position.set(U.x,jt.heightAt(U.x,U.z),U.z);Te.add(Je);const sd=Hn.lantern??2.6,Kc=new ea("#ffcf70",sd,6,1.8);Kc.position.set(.8,.45,-.3);Je.add(Kc);const pe=i=>document.getElementById(i),an={chill:pe("hud-chill"),lights:pe("hud-lights"),embers:pe("hud-embers"),wave:pe("hud-wave"),timer:pe("hud-timer")},ki=pe("hint"),di=pe("build-panel"),Jc=pe("btn-next"),Qc=pe("fps");tn.has("debug")||Qc.classList.add("hidden");let yi={};function Wn(i,t,e,n){yi[t]!==e&&(yi[t]=e,i.querySelector("b").textContent=e,n&&(i.classList.remove(n),i.offsetWidth,i.classList.add(n)))}const N_=4;let rd=0;function Oh(i){if(ki.textContent===i)return;ki.textContent=i,rd=0,ki.classList.remove("faded");const t=di.classList.contains("hidden")?null:di.getBoundingClientRect();ki.style.bottom=t&&t.height?`${Math.round(innerHeight-t.top+6)}px`:""}function z_(i){(rd+=i)>N_&&ki.classList.add("faded")}function ad(i){Q.phase="prep",Q.timer=i,Jc.classList.remove("hidden"),F_()}function F_(){const i=Q.wave+1,t=i===1?1:i<=3?2:2+Math.floor(Math.random()*3);Q.spawnPoints=Dn.coastPoints(t,24),Q.spawnPoints.length||(Q.spawnPoints=Dn.coastPoints(t,8,{near:12,minFrac:.5})),Q.spawnPoints.length||(Q.spawnPoints=Dn.roadEnds().slice(0,t)),V_()}function od(){Q.wave+=1,Q.phase="wave",Jc.classList.add("hidden"),Q.spawnQueue=[];for(const i of Zc[Q.wave-1]){const t=Q.wave<=Qt.earlyScale.length?Q.wave-1:-1,e=Q.spawnPoints.length,n=bo[i.type].flying?sn.balance.air??1:1,s=Math.max(1,Math.round(i.n*(sn.balance.count||1)*n*(t>=0?Qt.earlyScale[t]:1)));if(i.path==="both"){const r=Math.ceil(s/Math.min(2,e));for(let a=0;a<e;a++)for(let o=0;o<r;o++)Q.spawnQueue.push({t:(i.at??0)+o*i.gap+a*.3,type:i.type,path:a})}else{const r=i.path??0;for(let a=0;a<s;a++)Q.spawnQueue.push({t:(i.at??0)+a*i.gap,type:i.type,path:(r+a%2)%e})}}Q.spawnQueue.sort((i,t)=>i.t-t.t),Q.waveClock=0,Ye.wave(),Qe==null||Qe.setIntensity(1),Wn(an.wave,"wave",Q.wave,"bump")}function tu(i,t){var l,c;const e=bo[i],n=ua(F1(i),"figure"),s=e.hp*(1+Qt.hpGrowth*(Q.wave-1))*sn.balance.hp*(((c=(l=sn.balance.types)==null?void 0:l[i])==null?void 0:c.hp)??1)*R_(),r={type:i,def:e,mesh:n,hp:s,maxHp:s,slow:0,phase:Math.random()*6,alive:!0,speedMul:sn.balance.speed*(e.flying?sn.balance.airSpeed??1:1),lane:(Math.random()-.5)*1.4};r.var=.95+Math.random()*.1,r.speedMul*=.95+Math.random()*.1,n.scale.setScalar(r.var),r.blinkT=Math.random()*4;const a=Q.spawnPoints[t%Q.spawnPoints.length]||[0,50],o=jt.lighthouse.pos;if(e.flying){const h=Math.atan2(a[1]-o.z,a[0]-o.x)+(Math.random()-.5)*.5,u=o.x+Math.cos(h)*66,f=o.z+Math.sin(h)*66;r.x=u,r.z=f,r.y=e.alt||4,r.dist0=Math.hypot(o.x-u,o.z-f),r.hitCd=0}else r.x=a[0]+(Math.random()-.5)*1.5,r.z=a[1]+(Math.random()-.5)*1.5,r.y=jt.heightAt(r.x,r.z),r.remain=Dn.at(r.x,r.z);return n.position.set(r.x,r.y,r.z),Te.add(n),Ln.push(r),!Q.seen[i]&&i!=="lobbyMini"&&(Q.seen[i]=!0,O_(r)),r}const Mc={ring:"💨",chips:"🥔",speaker:"🔊",bubble:"🫧",kite:"🪁",pizza:"🍕",lamp:"🌋"};function ld(i){const t=Object.entries(i.resist||{}),e=t.filter(([,s])=>s<1).map(([s])=>Mc[s]).join(""),n=t.filter(([,s])=>s>1).map(([s])=>Mc[s]).join("");return{tough:e+(i.shield?"📒":""),weak:n}}const Ni=[],So=document.createElement("div");So.id="tags";document.body.appendChild(So);function O_(i){const{tough:t,weak:e}=ld(i.def),n=document.createElement("div");n.className="enemy-tag",n.innerHTML=`<b>${i.def.flying?"🪶":"🐾"} ${i.def.name}</b>${t?`<span>🛡️${t}</span>`:""}${e?`<span>💥${e}</span>`:""}`,So.appendChild(n),Ni.push({m:i,el:n,t:0}),(Q.wave>1||i.def.flying)&&on(`Ny fiende: ${i.def.name}${t?` · tåler ${t}`:""}${e?` · svak mot ${e}`:""}`)}const aa=document.createElement("div");aa.id="upgbars";document.body.appendChild(aa);const oo=[];function k_(){oo.length=0,aa.style.visibility=Q.paused?"hidden":"";for(const i of In){if(!i.upg){i.upgEl&&(i.upgEl.remove(),i.upgEl=null);continue}i.upgEl||(i.upgEl=document.createElement("div"),i.upgEl.className="upg-bar",i.upgEl.innerHTML='<div class="upg-track"><i></i></div><span></span>',aa.appendChild(i.upgEl));const t=i.upgEl,e=Math.min(1,i.upg.t/i.upg.dur);i.upgReset&&(i.upgReset=!1,t.classList.remove("reset"),t.offsetWidth,t.classList.add("reset")),t.firstChild.firstChild.style.width=`${(100*e).toFixed(1)}%`;const n=i.upg.t>0?`nv. ${i.level+1} · ${Math.ceil(i.upg.dur-i.upg.t)} s igjen`:`nv. ${i.level+1} · stå her ${i.upg.dur} s`;t.lastChild.textContent!==n&&(t.lastChild.textContent=n),Ae.set(i.x,i.y+2.9*i.mesh.scale.y,i.z).project(qe);const s=Ae.z<1&&Math.abs(Ae.x)<1&&Math.abs(Ae.y)<1;if(t.style.display=s?"flex":"none",!s)continue;const r=t.offsetWidth,a=t.offsetHeight,o={x:Math.min(Math.max((Ae.x*.5+.5)*innerWidth,r/2+6),innerWidth-r/2-6),y:(-Ae.y*.5+.5)*innerHeight,w:r,h:a,on:s};t.style.left=`${o.x}px`,t.style.top=`${o.y}px`,oo.push(o)}}function B_(i){var n;const t=Ni.length?pe("hud").getBoundingClientRect().bottom:0;for(let s=Ni.length-1;s>=0;s--){const r=Ni[s];r.age=(r.age||0)+i,Ae.set(r.m.x,r.m.y+(((n=r.m.mesh.userData.hpBar)==null?void 0:n.position.y)??2.2)+.5,r.m.z).project(qe);const a=Ae.z<1&&Math.abs(Ae.x)<1&&Math.abs(Ae.y)<1;r.el.style.display=a?"flex":"none",a&&(r.t+=i);const o=r.el.offsetWidth,l=r.el.offsetHeight;r.x=Math.min(Math.max((Ae.x*.5+.5)*innerWidth,o/2+6),innerWidth-o/2-6),r.y=Math.max((-Ae.y*.5+.5)*innerHeight,t+l+6),r.w=o,r.h=l,r.on=a,r.el.style.opacity=String(Math.min(1,(6-r.t)/.6)),(r.t>6||r.age>90||!r.m.alive)&&(r.el.remove(),Ni.splice(s,1))}const e=[...oo];for(const s of Ni.filter(r=>r.on).sort((r,a)=>r.y-a.y)){let r=!0;for(let a=0;r&&a<8;a++){r=!1;for(const o of e)Math.abs(s.x-o.x)<(s.w+o.w)/2+4&&s.y>o.y-o.h-3&&s.y-s.h<o.y+3&&(s.y=o.y+s.h+4,r=!0)}e.push(s)}for(const s of Ni)s.on&&(s.el.style.left=`${s.x}px`,s.el.style.top=`${s.y}px`)}function G_(i){return i.def.flying?1-Math.hypot(jt.lighthouse.pos.x-i.x,jt.lighthouse.pos.z-i.z)/i.dist0:1-Math.min(1,(i.remain??Dn.maxDist)/Dn.maxDist)}const no=[],bs=document.createElement("div");bs.id="warn";document.body.appendChild(bs);function V_(){for(const e of no)Te.remove(e);no.length=0,bs.innerHTML="";for(const[e,n]of Q.spawnPoints){const s=new oe(cd,new Le({color:"#ff7a3a",transparent:!0,opacity:.8,depthWrite:!1}));s.position.set(e,Math.max(jt.heightAt(e,n),.08)+.1,n);const r=new oe(H_,new Le({color:"#ff8a3a",transparent:!0,opacity:.35,blending:mi,depthWrite:!1,fog:!1}));r.position.y=4,s.add(r),Te.add(s),no.push(s);const a=document.createElement("div");a.className="warn-arrow",a.innerHTML='<span class="arr">➤</span><span class="kind"></span>',bs.appendChild(a)}const i=Q.spawnPoints.length,t=Q.spawnPoints.map(()=>({air:!1,ground:!1}));for(const e of Zc[Q.wave]||[]){const n=e.path==="both"?t.map((s,r)=>r):[(e.path??0)%i,((e.path??0)+1)%i];for(const s of n)t[s][bo[e.type].flying?"air":"ground"]=!0}t.forEach((e,n)=>{var r;const s=(r=bs.children[n])==null?void 0:r.querySelector(".kind");s&&(s.textContent=(e.air?"🪶":"")+(e.ground?"🐾":""))})}const cd=new ss(1.6,2.2,32);cd.rotateX(-Math.PI/2);const H_=new He(.5,1.4,8,12,1,!0);function W_(){var a;const i=Q.phase==="prep"||Q.phase==="wave"&&Q.waveClock<8,t=bs.children,e=i&&!di.classList.contains("hidden")?di.getBoundingClientRect():null,n=e&&ki.textContent&&!ki.classList.contains("faded"),s=i?pe("hud").getBoundingClientRect().bottom:0;bs.style.visibility=So.style.visibility=Q.paused?"hidden":"";const r=e?n?Math.min(e.top,ki.getBoundingClientRect().top):e.top:0;(a=Q.spawnPoints)==null||a.forEach(([o,l],c)=>{const h=no[c],u=t[c];if(!h||!u)return;h.visible=i;const f=.5+.5*Math.sin(Q.time*6);h.scale.setScalar(1+f*.35),h.material.opacity=.35+.5*f,Ae.set(o,h.position.y,l).project(qe);const p=Math.abs(Ae.x)>.92||Math.abs(Ae.y)>.88||Ae.z>1;if(u.style.display=i?"block":"none",u.classList.toggle("onscreen",!p),i&&!p&&(u.style.left=`${(Ae.x*.5+.5)*innerWidth}px`,u.style.top=`${Math.max((-Ae.y*.5+.5)*innerHeight-30,s+30)}px`,u.style.transform="translate(-50%, -50%)",u.firstChild.style.transform=""),i&&p){let g=Ae.x,M=Ae.y;Ae.z>1&&(g=-g,M=-M);const m=Math.atan2(-M,g),d=Math.max(Math.abs(g),Math.abs(M))||1,y=xe.clamp(g/d,-1,1),b=xe.clamp(M/d,-1,1),x=(y*.46+.5)*innerWidth;let R=(-b*.44+.5)*innerHeight;e&&x>e.left-24&&x<e.right+24&&R>r-24&&(R=r-24),R=Math.max(R,s+30),u.style.left=`${x}px`,u.style.top=`${R}px`,u.style.transform=`translate(-50%, -50%) scale(${1+f*.25})`,u.firstChild.style.transform=`rotate(${m}rad)`}})}function _s(i,t,e){var n;if(i.alive){if(e&&(t*=((n=i.def.resist)==null?void 0:n[e.type])??1,i.def.shield&&e.type!=="lamp")){const s=e.x-i.x,r=e.z-i.z,a=Math.hypot(s,r)||1,o=Math.hypot(i.hx||0,i.hz||0)||1;(s*(i.hx||0)+r*(i.hz||0))/(a*o)>.35&&(t*=i.def.shield,Math.random()<.3&&Ne.emit(i.x,i.y+1,i.z,{n:2,color:"#d8c890",speed:1.5,up:1,life:.3}))}i.hp-=t,i.hitT=.18,i.mesh.userData.hpBar.visible=!0,i.hp<=0&&X_(i)}}function X_(i){i.alive=!1,i.chillT=0,O1(i),Yr.push(i),Ne.emit(i.x,i.y+1.2,i.z,{n:12,color:i.def.puff,speed:1.6,up:2.2,life:.9,gravity:1.5}),Ye.chill(),eu(i.x,i.y+.5,i.z,i.def.embers,i.def.flying),!i.def.flying&&Math.random()<Qt.bagChance&&ud(i.x,i.z);for(let t=0;t<(i.def.splits||0);t++){const e=tu("lobbyMini",0);e.x=i.x+(t-1)*.6,e.z=i.z+(t%2?.5:-.5),e.y=jt.heightAt(e.x,e.z),e.mesh.position.set(e.x,e.y,e.z)}}function q_(i){var t;for(let e=Yr.length-1;e>=0;e--){const n=Yr[e];n.chillT+=i;const s=n.chillT,r=n.mesh.userData.body;if(n.def.flying)n.y+=i*2.5,n.z+=i*3,(t=n.mesh.userData.wings)==null||t.forEach((o,l)=>o.rotation.z=Math.sin(s*6)*.4*(l?-1:1));else if(s<1.4){const o=Math.min(1,s/.4);r.position.y=-.25*o*(n.type==="tank"?1.3:1),r.rotation.x=.25*o,r.rotation.z=Math.sin(s*3)*.05}else{r.rotation.x=0,r.position.y=Math.abs(Math.sin(s*7))*.06;const[o,l]=Dn.dir(n.x,n.z),c=n.x-o*n.def.speed*.45*i,h=n.z-l*n.def.speed*.45*i;jt.isWalkable(c,h)&&(n.x=c,n.z=h),n.y=jt.heightAt(n.x,n.z),(o||l)&&(n.mesh.rotation.y=Math.atan2(o,l))}Math.random()<i*1.5&&Ne.emit(n.x,n.y+1.8,n.z,{n:1,color:"#c8ffb0",speed:.3,up:1,life:.8,gravity:-.4}),s>2.6&&!n.popped&&(n.popped=!0,Ps.emit(n.x,n.y+.8,n.z,{n:8,color:"#eef6e8",speed:1.4,up:1.2,life:.7,gravity:-.5}));const a=Math.max(0,Math.min(1,(3.2-s)/.6));n.mesh.scale.setScalar(a*(n.var||1)*(s>2.6?1+Math.sin((s-2.6)*10)*.08:1)),n.mesh.position.set(n.x,n.y,n.z),s>3.2&&(Te.remove(n.mesh),Yr.splice(e,1))}}function eu(i,t,e,n,s=!1,r=1){const a=Math.min(n,n>=6?3:n>=3?2:1);let o=n;for(let l=0;l<a;l++){const c=l===a-1?o:Math.ceil(n/a);o-=c;const h=B1(),u=Math.random()*Math.PI*2,f=(1.2+Math.random()*1.8)*r,p={mesh:h,x:i,y:t,z:e,vx:Math.cos(u)*f,vz:Math.sin(u)*f,vy:5+Math.random()*2,life:Qt.emberLife,value:c,settled:!1,phase:Math.random()*6};h.scale.setScalar(.8+Math.min(c,6)*.08),Te.add(h),xs.push(p)}}function oa(i,t,e,n,s=()=>!0){let r=null,a=n;for(const o of i){if(!s(o))continue;const l=Math.hypot(o.x-t,o.z-e);l<a&&(a=l,r=o)}return r}function nu(){const i=oa(jt.plinths,U.x,U.z,Qt.reach,l=>!l.tower);if(i)return{x:i.x,z:i.z,y:i.y,plinth:i,ok:!0};const t=-Math.sin(U.face),e=-Math.cos(U.face),n=U.x+t*Qt.placeAhead,s=U.z+e*Qt.placeAhead,r=jt.heightAt(n,s),a=jt.lighthouse.pos;let o="";return r<.35?o="i vannet":jt.extras.blocks(n,s)?o="i lavaen":jt.pathDist(n,s)<1.9?o="på stien":jt.slopeAt(n,s)>.6?o="for bratt":Math.hypot(n-a.x,s-a.z)<5.5?o="for nær fyret":In.some(l=>Math.hypot(l.x-n,l.z-s)<Qt.minTowerGap)?o="for nær et annet tårn":jt.plinths.some(l=>Math.hypot(l.x-n,l.z-s)<1.9)?o="oppå en sokkel (gå helt bort til den)":jt.colliders.some(l=>!l.tower&&(l.x-n)**2+(l.z-s)**2<(l.r+.7)**2)&&(o="i veien for et tre eller en stein"),{x:n,z:s,y:r,plinth:null,ok:!o,why:o}}function lo(i){const t=nu();if(!t.ok){Ye.deny(),on(`Ikke lov å bygge her: ${t.why}`);return}const e=lr[i];if(Q.embers<e.cost){Ye.deny(),on(`Trenger ${e.cost} ✦ glør`),Wn(an.embers,"embersBad",Math.random(),"bad");return}Q.embers-=e.cost;const n=ua(k1(i),"tower");if(n.position.set(t.x,t.y,t.z),!t.plinth){const r=new oe(Y_,$_);r.position.y=.04,r.receiveShadow=!0,n.add(r)}Te.add(n);const s={type:i,def:e,mesh:n,x:t.x,z:t.z,y:t.y,level:1,cd:.3,plinth:t.plinth,onPlinth:!!t.plinth};t.plinth&&(t.plinth.tower=s),In.push(s),jt.colliders.push({x:t.x,z:t.z,r:1,tower:s}),Ne.emit(t.x,t.y+.3,t.z,{n:24,color:"#ffe3a0",speed:4,up:3,life:.8,gravity:5}),Ye.build(),Q.buildMode=!1,t.plinth&&on(`${e.name} på gammel sokkel: +25 % rekkevidde`)}const Y_=new He(.95,1.05,.12,10),$_=new We({color:"#8a8478"}),Fi=new _e;{const i=new oe(new gr(1,24),new Le({transparent:!0,opacity:.35,depthWrite:!1}));i.rotation.x=-Math.PI/2;const t=new ss(.965,1,64);t.rotateX(-Math.PI/2);const e=new oe(t,new Le({transparent:!0,opacity:.6,depthWrite:!1})),n=new oe(new He(.55,.7,1.6,10),new Le({transparent:!0,opacity:.25,depthWrite:!1}));n.position.y=.8,Fi.add(i,e,n),Fi.userData={disc:i,ring:e,pillar:n},Fi.visible=!1,Fi.renderOrder=20,Te.add(Fi)}function j_(i,t,e){if(Fi.visible=i,!i)return;const n=t.ok,s=n?t.plinth?"#9fffb0":"#7be06a":"#ff5a4a",r=lr[e].range*(t.plinth?Qt.plinthBonus:1);Fi.position.set(t.x,t.y+.06,t.z);const a=Fi.userData;for(const o of[a.disc,a.ring,a.pillar])o.material.color.set(s);a.ring.scale.setScalar(r),a.ring.visible=n,a.pillar.visible=!t.plinth}const Ii=(i,t)=>{const e=i.level-1;return t==="range"?i.def.range*(1+.12*e)*(i.onPlinth?Qt.plinthBonus:1):t==="dmg"?i.def.dmg*[1,1.7,2.6,3.9,5.85][e]:t==="rate"?i.def.cooldown/(1+.15*e):i.def[t]},io=[];function Z_(i){const t=Vf();jc(t,1),Je.userData.roll.getWorldPosition(t.position),Te.add(t),io.push({mesh:t,from:t.position.clone(),to:new G(i.x,i.y+1.3*i.mesh.scale.y,i.z),age:0})}function K_(i){for(let t=io.length-1;t>=0;t--){const e=io[t];e.age+=i;const n=Math.min(1,e.age/.45);e.mesh.position.lerpVectors(e.from,e.to,n),e.mesh.position.y+=Math.sin(n*Math.PI)*1.2,e.mesh.rotation.z+=i*14,n>=1&&(Te.remove(e.mesh),io.splice(t,1),Ps.emit(e.to.x,e.to.y+.3,e.to.z,{n:6,color:"#e8e2dc",speed:1.2,up:1.4,life:1.2,gravity:-.3}))}}function J_(i){U.rollP=-1,K_(i);for(const t of In){if(t.cd-=i,t.upg){const c=U.stun<=0&&Math.hypot(U.x-t.x,U.z-t.z)<Qt.reach+.3;if(c)t.upg.t+=i,U.rollP=Math.min(1,t.upg.t/t.upg.dur),U.rollTower=t;else if(t.upg.t>0){const h=Je.userData.roll.getWorldPosition(hr);Ne.emit(h.x,h.y,h.z,{n:14,color:"#4f8f3a",speed:1.4,up:.8,life:.8,gravity:6}),Ne.emit(h.x,h.y,h.z,{n:5,color:"#fffdf5",speed:1,up:.6,life:.7,gravity:5}),t.upg.t=0,t.upgReset=!0,wo("😩"),fe.rumble(220,.5),on(`Rullingen ble avbrutt! Start på nytt ved ${t.def.name}`)}ia(t,Math.min(1,t.upg.t/t.upg.dur)),c&&Math.random()<i*8&&Ne.emit(U.x,Je.position.y+2.2,U.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),t.upg.t>=t.upg.dur&&(Z_(t),U.rollP=-1,t.upg=null,t.level+=1,Hf(t,t.level),ia(t,0),Ne.emit(t.x,t.y+1.2,t.z,{n:30,color:"#8ff0ff",speed:4,up:4,life:.9,gravity:5}),Ye.upgrade(),on(`${t.def.name} er nå nivå ${t.level}`))}if(t.armBack>0&&(t.armBack-=i,t.armBack<=0&&(t.mesh.userData.arm.rotation.x=-.35)),t.type==="lamp"&&t.mesh.userData.blobs.forEach((c,h)=>c.position.y=.75+Math.sin(Q.time*.8+h*2.1)*.35),t.blind>0){t.blind-=i,Math.random()<i*8&&Ne.emit(t.x,t.y+2,t.z,{n:1,color:"#fff6c8",speed:.6,up:.8,life:.5,gravity:-.4});continue}const e=Ii(t,"range");let n=null,s=-1;for(const c of Ln){if(!c.alive||(c.def.flying?!t.def.air:t.def.ground===!1)||Math.hypot(c.x-t.x,c.z-t.z)>e)continue;const h=G_(c);h>s&&(s=h,n=c)}const r=t.mesh.userData.head;if(t.type==="speaker"){const c=Math.max(0,Math.sin(Q.time*7.3));r.rotation.z=Math.sin(Q.time*3.65)*.05,t.mesh.userData.woofers.forEach(h=>h.scale.set(1+c*.15,1,1+c*.15)),n&&(r.rotation.y+=uo(Math.atan2(-(n.x-t.x),-(n.z-t.z)),r.rotation.y)*Math.min(1,i*3))}else if(n){const c=Math.atan2(-(n.x-t.x),-(n.z-t.z));r.rotation.y+=uo(c,r.rotation.y)*Math.min(1,i*10)}if(!n||t.cd>0)continue;t.cd=Ii(t,"rate");const a=t.x,o=t.y+1.4*t.mesh.scale.y,l=t.z;if(t.type==="ring"){const c=G1();c.position.set(a,o-.3,l),Te.add(c),ai.push({kind:"bolt",src:t,mesh:c,target:n,dmg:Ii(t,"dmg"),tx:n.x,ty:n.y,tz:n.z,age:0}),Ye.puff()}else if(t.type==="chips"){const c=Wf();c.position.set(a,t.y+1,l),Te.add(c);const[h,u]=n.def.flying?[0,0]:Dn.dir(n.x,n.z),f=n.x+h*n.def.speed*.6,p=n.z+u*n.def.speed*.6;ai.push({kind:"shell",src:t,mesh:c,sx:a,sy:t.y+1,sz:l,ex:f,ez:p,ey:jt.heightAt(f,p),t:0,dur:.95,dmg:Ii(t,"dmg"),splash:t.def.splash*(1+.1*(t.level-1))}),Ne.emit(a,t.y+1.3,l,{n:6,color:"#d8d0c0",speed:1,up:2,life:.5,gravity:-1}),Ye.mortar()}else if(t.type==="speaker"){for(const h of Ln)!h.alive||Math.hypot(h.x-t.x,h.z-t.z)>e||(h.def.noMood||(h.slow=t.def.slowTime),_s(h,Ii(t,"dmg"),t));const c=Xf();c.position.set(t.x,t.y+.3,t.z),Te.add(c),cr.push({mesh:c,t:0,r:e}),Ne.emit(t.x,t.y+1.8,t.z,{n:6,color:["#7be06a","#f2c94c","#ff7a5a"][Math.floor(Math.random()*3)],speed:2.2,up:1.6,life:.9,gravity:.5}),Ye.skank()}else if(t.type==="bubble"){const c=Yf();c.position.set(a,o+.2,l),Te.add(c),ai.push({kind:"bubble",src:t,mesh:c,target:n,dmg:Ii(t,"dmg"),trap:t.def.trap,tx:n.x,ty:n.y,tz:n.z}),Ye.pickup()}else if(t.type==="kite"){if(ai.some(h=>h.kind==="kite"&&h.tower===t)){t.cd=.2;continue}const c=ua(qf(),"tower");c.position.set(a,o,l),Te.add(c),ai.push({kind:"kite",mesh:c,tower:t,sx:a,sz:l,tx:n.x,tz:n.z,phase:"out",t:0,tick:0,dmg:Ii(t,"dmg"),zone:t.def.zone*(1+.1*(t.level-1)),hover:t.def.hover}),Ye.puff()}else if(t.type==="pizza"){const c=H1();c.position.set(a,t.y+1.2,l),Te.add(c);const[h,u]=Dn.dir(n.x,n.z),f=n.x+h*n.def.speed*1.1,p=n.z+u*n.def.speed*1.1;ai.push({kind:"shell",src:t,pizza:!0,mesh:c,sx:a,sy:t.y+1.2,sz:l,ex:f,ez:p,ey:jt.heightAt(f,p),t:0,dur:1.3,arc:7,dmg:Ii(t,"dmg"),splash:t.def.splash*(1+.1*(t.level-1))}),t.mesh.userData.arm.rotation.x=.9,t.armBack=.5,Ye.mortar()}else if(t.type==="lamp"){for(const c of Ln)!c.alive||Math.hypot(c.x-t.x,c.z-t.z)>e||(c.slow=Math.max(c.slow,t.def.slowTime),_s(c,Ii(t,"dmg"),t));Math.random()<.3&&Ne.emit(t.x,t.y+1.6,t.z,{n:2,color:"#ff9a3a",speed:.8,up:1.2,life:.8,gravity:-.3})}}}function Q_(i){var t;for(let e=ai.length-1;e>=0;e--){const n=ai[e];let s=!1;if(n.kind==="bolt"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y+(n.target.def.flying?0:.5),n.tz=n.target.z);const r=n.mesh.position,a=n.tx-r.x,o=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(a,o,l),h=18*i;n.age+=i,n.mesh.lookAt(n.tx,n.ty,n.tz),n.mesh.scale.setScalar(.7+n.age*2.2),c<=h+.3?(s=!0,n.target.alive&&(_s(n.target,n.dmg,n.src),Ps.emit(n.tx,n.ty+.3,n.tz,{n:3,color:"#f4f0ea",speed:1,up:.8,life:.8,gravity:-.6}),Ye.hit())):r.set(r.x+a/c*h,r.y+o/c*h,r.z+l/c*h)}else if(n.kind==="shell"){n.t+=i/n.dur;const r=Math.min(1,n.t);if(n.mesh.position.set(n.sx+(n.ex-n.sx)*r,n.sy+(n.ey-n.sy)*r+Math.sin(Math.PI*r)*(n.arc||5),n.sz+(n.ez-n.sz)*r),n.mesh.rotation.set(r*9,r*5,0),n.t>=1){s=!0;for(const a of Ln){if(!a.alive||a.def.flying)continue;const o=Math.hypot(a.x-n.ex,a.z-n.ez);o<n.splash&&_s(a,n.dmg*(o<n.splash*.4?1:.6),n.src)}Ne.emit(n.ex,n.ey+.3,n.ez,{n:26,color:n.pizza?"#ff7040":"#ffd060",speed:5,up:5,life:.7,gravity:12}),Ps.emit(n.ex,n.ey+.3,n.ez,{n:4,color:"#f6e7c0",speed:1.5,up:1,life:.8,gravity:-.3}),Ye.crunch(),$n=Math.max($n,.12)}}else if(n.kind==="bubble"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y,n.tz=n.target.z);const r=n.mesh.position,a=n.tx-r.x,o=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(a,o,l),h=13*i;n.mesh.scale.setScalar(1+Math.sin(Q.time*12)*.06),c<=h+.3?(s=!0,n.target.alive&&(_s(n.target,n.dmg,n.src),n.target.trap=Math.max(n.target.trap||0,n.trap*Math.min(1,((t=n.target.def.resist)==null?void 0:t.bubble)??1))),Ne.emit(n.tx,n.ty,n.tz,{n:6,color:"#dff6ff",speed:2,up:1,life:.35})):r.set(r.x+a/c*h,r.y+o/c*h,r.z+l/c*h)}else if(n.kind==="kite"){n.t+=i;const r=n.mesh.position;if(n.mesh.userData.tailSegs.forEach((a,o)=>{a.rotation.x=Math.sin(Q.time*5-o*.9)*.35,a.rotation.z=Math.sin(Q.time*3.7-o*.7)*.25}),In.includes(n.tower)||(n.phase="back"),n.phase==="out"){const a=n.tx-r.x,o=n.tz-r.z,l=Math.hypot(a,o),c=9*i;r.y+=(4.2-r.y)*Math.min(1,i*2),l<c?(n.phase="hover",n.t=0):(r.x+=a/l*c,r.z+=o/l*c)}else if(n.phase==="hover"){if(r.x=n.tx+Math.sin(Q.time*1.7)*.6,r.z=n.tz+Math.cos(Q.time*1.3)*.4,r.y=4.2+Math.sin(Q.time*2.3)*.3,n.tick-=i,n.tick<=0){n.tick=.25;for(const a of Ln)a.alive&&a.def.flying&&Math.hypot(a.x-r.x,a.z-r.z)<n.zone&&(_s(a,n.dmg*.4,n.tower),a.slow=Math.max(a.slow,.4));Ne.emit(r.x,r.y-.3,r.z,{n:2,color:"#ffd0b0",speed:1.5,up:-.5,life:.5,gravity:0})}n.t>n.hover&&(n.phase="back")}else{const a=n.sx-r.x,o=n.sz-r.z,l=Math.hypot(a,o),c=11*i;l<c?s=!0:(r.x+=a/l*c,r.z+=o/l*c)}n.mesh.rotation.set(Math.sin(Q.time*3)*.2,Q.time*.5,Math.cos(Q.time*2.5)*.25)}s&&(Te.remove(n.mesh),ai.splice(e,1))}for(let e=cr.length-1;e>=0;e--){const n=cr[e];n.t+=i/(n.dur||.6),n.mesh.scale.setScalar(.5+n.t*n.r),n.mesh.material.opacity=.7*(1-n.t),n.t>=1&&(Te.remove(n.mesh),n.mesh.material.dispose(),cr.splice(e,1))}}function tM(i){var t,e;for(const n of Ln){if(!n.alive)continue;n.phase+=i*n.def.anim;const s=n.slow>0?.5:1;n.slow-=i;let r=n.def.speed*s*(n.speedMul||1);n.trap>0?(n.trap-=i,r*=.15,n.bubbleFx||(n.bubbleFx=Yf(),n.bubbleFx.scale.setScalar(3.2),n.mesh.add(n.bubbleFx)),n.bubbleFx.visible=!0):n.bubbleFx&&(n.bubbleFx.visible=!1);const a=n.mesh.userData.body;if(n.def.flying){const l=jt.lighthouse.pos;let c=l.x-n.x,h=l.z-n.z;const u=Math.hypot(U.x-n.x,U.z-n.z);let f=n.trap>0?1.1:n.def.alt||4.2;if(n.def.swoop&&u<6&&U.stun<=0&&n.hitCd<=0&&!(n.trap>0)){const y=Math.hypot(c,h);c=c/y*.5+(U.x-n.x)/u*.9,h=h/y*.5+(U.z-n.z)/u*.9,f=1.5}n.hitCd-=i;const p=Math.hypot(c,h)||1,g=Math.cos(Q.time*1.3+n.lane*4)*(n.type==="balloon"?.4:1.2);n.x+=(c/p+-h/p*g*.35)*r*i,n.z+=(h/p+c/p*g*.35)*r*i,n.mesh.rotation.z=-g*(n.type==="balloon"?.05:.25);const M=Math.max(jt.heightAt(n.x,n.z),0);n.y+=(M+f-n.y)*Math.min(1,i*2.5);const m=n.mesh.userData.blob;m&&(m.position.y=(M-n.y)/n.var+.05,m.material.opacity=1,m.scale.setScalar(1)),n.mesh.rotation.y=Math.atan2(-c,-h);const d=n.mesh.userData;if((t=d.wings)==null||t.forEach((y,b)=>y.rotation.z=Math.sin(n.phase)*.45*(b?-1:1)),(e=d.rotors)==null||e.forEach(y=>y.rotation.y+=i*40),d.rotor&&(d.rotor.rotation.y+=i*30,d.tail.rotation.x+=i*30),a.position.y=Math.sin(n.phase*.5)*(n.type==="balloon"?.3:.15),n.def.blind&&(n.blindCd=(n.blindCd??n.def.blind.every*.5)-i,d.beam&&(d.beam.visible=n.blindCd>n.def.blind.every-.8),n.blindCd<=0)){n.blindCd=n.def.blind.every;const y=oa(In,n.x,n.z,n.def.blind.range);y&&(y.blind=n.def.blind.dur,on(`${n.def.name} blendet ${y.def.name}!`)),Math.hypot(U.x-n.x,U.z-n.z)<5&&yc(Qt.airStress,n.x,n.z,!0)}n.def.swoop&&u<1.3&&Math.abs(n.y-Je.position.y-1)<1.4&&U.stun<=0&&n.hitCd<=0&&iM(n),Math.hypot(l.x-n.x,l.z-n.z)<3.4&&kh(n)}else{const[l,c,h]=Dn.dir(n.x,n.z);n.remain=h;const u=jt.lighthouse.pos,f=Math.hypot(u.x-n.x,u.z-n.z);if(f<4.3||h<.6){kh(n);continue}let p=l,g=c;!p&&!g&&(p=(u.x-n.x)/f,g=(u.z-n.z)/f),n.hx=(n.hx||0)+(p-(n.hx||0))*Math.min(1,i*6),n.hz=(n.hz||0)+(g-(n.hz||0))*Math.min(1,i*6);const M=Math.hypot(n.hx,n.hz)||1,m=n.lane*Math.min(1,f/10);if(n.x+=n.hx/M*r*i+-n.hz/M*m*i*.5,n.z+=n.hz/M*r*i+n.hx/M*m*i*.5,n.y=jt.heightAt(n.x,n.z),n.mesh.rotation.y=Math.atan2(-n.hx,-n.hz),U.inv<=0&&U.faint<=0&&Math.abs(U.x-n.x)<1.2&&Math.abs(U.z-n.z)<1.2&&Math.hypot(U.x-n.x,U.z-n.z)<1.1&&yc(n.def.stress??10,n.x,n.z),n.type==="clerk")a.position.y=Math.abs(Math.sin(n.phase))*.12,a.rotation.z=Math.sin(n.phase)*.06,n.mesh.userData.arm.position.y=.9+Math.max(0,Math.sin(n.phase*.5))*.25;else if(n.type==="tank"){const d=Math.abs(Math.sin(n.phase));a.position.y=d*.05,a.rotation.z=Math.sin(n.phase)*.07;const y=Math.pow(1-d,6);a.scale.set(1+y*.06,1-y*.08,1+y*.06)}else n.type==="swarm"?(a.position.y=Math.abs(Math.sin(n.phase))*.14,a.rotation.y=Math.sin(n.phase*.5)*.3):n.type==="complainer"?(a.position.y=Math.abs(Math.sin(n.phase))*.16,n.mesh.userData.arm.rotation.z=Math.sin(n.phase*.5)*.4):n.type==="lobbyist"||n.type==="lobbyMini"?(a.position.y=Math.abs(Math.sin(n.phase))*.05,a.rotation.z=Math.sin(n.phase*.5)*.17):n.type==="auditor"?(a.position.y=Math.abs(Math.sin(n.phase))*.03,a.rotation.z=0):(a.position.y=Math.abs(Math.sin(n.phase))*.08,a.rotation.z=Math.sin(n.phase)*.05)}if(n.hitT>0){n.hitT-=i;const l=Math.max(0,n.hitT)/.18;a.scale.set(1+l*.16,1-l*.16,1+l*.16),a.position.z=l*.15,n.hitT<=0&&(a.scale.set(1,1,1),a.position.z=0)}n.blinkT-=i,n.blinkT<-.12&&(n.blinkT=2+Math.random()*3.5);for(const l of n.mesh.userData.eyes)l.scale.y=n.blinkT<0?.12:1;n.mesh.position.set(n.x,n.y,n.z),n.slow>0&&Math.random()<i*6&&Ne.emit(n.x,n.y+.8,n.z,{n:1,color:"#b8e6ff",speed:.4,up:.6,life:.6,gravity:-.5});const o=n.mesh.userData.hpBar;if(o.visible){o.quaternion.copy(qe.quaternion),o.quaternion.premultiply(n.mesh.quaternion.clone().invert());const l=Math.max(0,n.hp/n.maxHp),c=n.mesh.userData.hpFg;c.scale.x=.96*l,c.position.x=-.48*(1-l),c.material.color.setHSL(.33*(1-l),.7,.55)}}for(let n=Ln.length-1;n>=0;n--)Ln[n].alive||Ln.splice(n,1)}function kh(i){Q.leaks[i.type]=(Q.leaks[i.type]||0)+1,i.alive=!1,Te.remove(i.mesh),Q.lights=Math.max(0,Q.lights-1),jt.lighthouse.setLights(Q.lights),Wn(an.lights,"lights",Q.lights,"bad");const t=jt.lighthouse.flamePos();Ps.emit(t.x,t.y,t.z,{n:10,color:"#b8b4b0",speed:.8,up:1.6,life:1.8,gravity:-.4}),Ne.emit(t.x,t.y,t.z,{n:14,color:"#8a8580",speed:1.6,up:.6,life:1.6,gravity:4}),on(`${i.def.name} slukket litt glød!`),Ye.lose(),$n=.3,Q.lights<=0&&fd(!1)}const ur=[],ui=document.createElement("div");ui.id="chillbar";ui.innerHTML="<i></i>";document.body.appendChild(ui);let Bh=0;function wo(i){const t=document.createElement("div");t.className="pop-emoji",t.textContent=i,Ae.set(U.x,Je.position.y+2.6,U.z).project(qe),t.style.left=`${(Ae.x*.5+.5)*innerWidth}px`,t.style.top=`${(-Ae.y*.5+.5)*innerHeight}px`,document.body.appendChild(t),setTimeout(()=>t.remove(),900)}function yc(i,t,e,n=!1){if(!(U.faint>0||U.inv>0)){if(U.chill=Math.max(0,U.chill-i),U.inv=Qt.stressInvuln,U.flinch=.55,!n){const s=U.x-t,r=U.z-e,a=Math.hypot(s,r)||1;U.vx+=s/a*Qt.stressPush,U.vz+=r/a*Qt.stressPush,U.goal=null}Ne.emit(U.x,Je.position.y+1.4,U.z,{n:8,color:"#ff6a5a",speed:2,up:1.5,life:.4}),wo("😓"),ui.classList.remove("hit"),ui.offsetWidth,ui.classList.add("hit"),Wn(an.chill,"chillBad",Math.random(),"bad"),U.chill<=0&&eM()}}function eM(){U.faint=Qt.faintTime,U.stun=Qt.faintTime,U.faints++,U.goal=null,U.vx=U.vz=0;const i=Math.floor(Q.embers*Qt.faintLoss);i>0&&(Q.embers-=i,eu(U.x,Je.position.y+1,U.z,i,!1,1.6)),U.carrying&&(U.carrying=!1),wo("😵"),on(`😵 Vokteren besvimte av stress! Våkner ved fyret om ${Qt.faintTime} s`),Ye.stun()}function ud(i,t){const e=Wf();e.scale.setScalar(1.8),e.position.set(i,jt.heightAt(i,t)+.5,t),Te.add(e),ur.push({mesh:e,x:i,z:t,life:Qt.bagLife})}function nM(i){U.inv-=i;const t=jt.lighthouse.pos;U.faint>0?(U.faint-=i,U.faint<=0&&(U.x=t.x+1,U.z=t.z+7.5,U.vx=U.vz=0,U.stun=0,U.chill=Qt.chillMax*Qt.wakeChill,U.inv=Qt.stressInvuln*2,Ne.emit(U.x,jt.heightAt(U.x,U.z)+1,U.z,{n:14,color:"#9fffb0",speed:2,up:2,life:.7}))):Math.hypot(t.x-U.x,t.z-U.z)<Qt.regenReach&&(U.chill=Math.min(Qt.chillMax,U.chill+Qt.regen*i));for(let s=ur.length-1;s>=0;s--){const r=ur[s];r.life-=i,r.mesh.rotation.y+=i*1.5,r.mesh.position.y=jt.heightAt(r.x,r.z)+.5+Math.sin(Q.time*3+s)*.12,r.mesh.visible=r.life>4||Math.sin(r.life*12)>0,U.faint<=0&&Math.hypot(r.x-U.x,r.z-U.z)<1.4&&(U.chill=Math.min(Qt.chillMax,U.chill+Qt.bagHeal),on(`🥔 Chips! +${Qt.bagHeal} chill`),wo("😌"),Ye.pickup(),r.life=0),r.life<=0&&(Te.remove(r.mesh),ur.splice(s,1))}const e=Math.round(U.chill);Wn(an.chill,"chill",e),an.chill.classList.toggle("low",e<30),e!==Bh&&(Bh=e,ui.firstChild.style.width=`${100*U.chill/Qt.chillMax}%`,ui.classList.toggle("low",e<30));const n=(e<Qt.chillMax||U.faint>0)&&Q.phase!=="title";ui.style.display=n?"block":"none",n&&(Ae.set(U.x,Je.position.y+2.3,U.z).project(qe),ui.style.left=`${(Ae.x*.5+.5)*innerWidth}px`,ui.style.top=`${(-Ae.y*.5+.5)*innerHeight}px`)}function iM(i){if(yc(Qt.airStress,i.x,i.z,!0),U.faint>0)return;U.stun=Qt.stunTime,i.hitCd=4;const t=Math.floor(Q.embers*Qt.stunLoss);t>0&&(Q.embers-=t,eu(U.x,Je.position.y+1,U.z,t,!1,1.6)),U.carrying&&(U.carrying=!1,on("Rullepapiret blåste bort!")),Ne.emit(U.x,Je.position.y+1.5,U.z,{n:16,color:"#ffffff",speed:3,up:2,life:.5}),Ye.stun(),$n=.2}function sM(i){for(let t=xs.length-1;t>=0;t--){const e=xs[t];e.life-=i,e.phase+=i;const n=Math.max(jt.heightAt(e.x,e.z),.1)+.35;e.settled||(e.vy-=16*i,e.x+=e.vx*i,e.z+=e.vz*i,e.y+=e.vy*i,e.y<=n&&(e.y=n,Math.abs(e.vy)>2.5?(e.vy=-e.vy*.4,e.vx*=.6,e.vz*=.6):e.settled=!0));const s=Math.hypot(U.x-e.x,U.z-e.z);if(U.stun<=0&&s<Qt.magnet){const l=(1-s/Qt.magnet)*14+3;e.x+=(U.x-e.x)/s*l*i,e.z+=(U.z-e.z)/s*l*i,e.settled=!0,e.y=n}const r=e.settled?Math.sin(e.phase*3)*.12:0;e.mesh.position.set(e.x,e.y+r,e.z),e.mesh.rotation.y+=i*3;const a=e.life<5,o=(.8+Math.min(e.value,6)*.08)*(a?.55+.45*(e.life/5):1);if(e.mesh.scale.setScalar(o),e.mesh.visible=!a||Math.sin(e.life*(e.life<1.5?30:16))>-.4,Math.random()<i*2.5&&Ne.emit(e.x,e.y+.2,e.z,{n:1,color:"#ffb347",speed:.3,up:1.2,life:.6,gravity:-.5}),U.stun<=0&&s<.9)Q.embers+=e.value,Wn(an.embers,"embers",Q.embers,"bump"),Ne.emit(e.x,e.y+.3,e.z,{n:8,color:"#ffe08a",speed:2,up:2.5,life:.4}),Ye.pickup(),Te.remove(e.mesh),xs.splice(t,1);else if(e.life<=0){const l=Math.max(1,Math.round(e.value*Qt.expiredRefund));Q.embers+=l,Ne.emit(e.x,e.y,e.z,{n:6,color:"#555048",speed:.6,up:1,life:.8,gravity:-.6}),Te.remove(e.mesh),xs.splice(t,1)}}}let co=0,hd="";function on(i){co=2,hd=i,ki.textContent=""}function Gh(i){var L,O;const t=Je.userData;(Q.phase==="prep"||Q.phase==="wave")&&nM(i),U.stun-=i,t.stars.visible=U.stun>0,t.stars.rotation.y+=i*6;let e=0,n=0;if(U.stun<=0&&(Q.phase==="prep"||Q.phase==="wave")){if(fe.move.x||fe.move.z){U.goal=null;const D=Math.cos(zi),z=Math.sin(zi);e=fe.move.x*D+fe.move.z*z,n=-fe.move.x*z+fe.move.z*D}else if(U.goal){const D=U.goal,z=D.x-U.x,k=D.z-U.z;if(D.field===void 0){D.field=null;const $=Math.ceil(Math.hypot(z,k)/.5);for(let J=1;J<$;J++)if(!jt.isWalkable(U.x+z*J/$,U.z+k*J/$)){D.field=Dn.walkField(D.x,D.z);break}}const W=D.field?Math.min(D.field.at(U.x,U.z),Math.hypot(z,k)+50):Math.hypot(z,k);D.t+=i;const V=W<.35||D.spot&&Math.hypot(D.spot.x-U.x,D.spot.z-U.z)<D.reach;if(W<D.best-.3&&(D.best=W,D.lastGain=D.t),V||D.t>12||D.t-D.lastGain>1.5)U.goal=null;else{const $=Math.min(1,W/.8),J=D.field&&Math.hypot(z,k)>1.5?D.field.dir(U.x,U.z):null,at=J&&(J[0]||J[1])?J[0]:z/Math.hypot(z,k),Tt=J&&(J[0]||J[1])?J[1]:k/Math.hypot(z,k);e=at,n=Tt;for(const H of jt.colliders){if(D.spot&&H.x===D.spot.x&&H.z===D.spot.z)continue;const Z=H.x-U.x,ht=H.z-U.z,it=Z*at+ht*Tt;if(it<=0||it>H.r+2.2||it>W)continue;const Ct=-Z*Tt+ht*at;if(Math.abs(Ct)>H.r+.6)continue;const Dt=(1-Math.abs(Ct)/(H.r+.6))*1.6*(Ct>=0?1:-1);e-=-Tt*Dt,n-=at*Dt}const kt=Math.hypot(e,n)||1;e=e/kt*$,n=n/kt*$}}}const r=jt.heightAt(U.x,U.z)<.05,a=Qt.keeperSpeed*(U.carrying?Qt.carrySlow:1)*(r?Qt.wadeSlow:1),o=e*a,l=n*a,c=(L=jt.isIce)!=null&&L.call(jt,U.x,U.z)?1.6:12;U.vx+=(o-U.vx)*Math.min(1,i*c),U.vz+=(l-U.vz)*Math.min(1,i*c);let h=U.x+U.vx*i,u=U.z+U.vz*i;jt.isWalkable(h,u)||(jt.isWalkable(h,U.z)?u=U.z:jt.isWalkable(U.x,u)?h=U.x:(h=U.x,u=U.z));for(const D of jt.colliders){const z=h-D.x,k=u-D.z,W=Math.hypot(z,k),V=D.r+.4;W<V&&W>1e-4&&(h=D.x+z/W*V,u=D.z+k/W*V)}U.x=h,U.z=u;const f=Math.hypot(U.vx,U.vz);if(f>.3){const D=Math.atan2(-U.vx,-U.vz);U.face+=uo(D,U.face)*Math.min(1,i*12),U.walk+=i*f*2.2}if(Je.rotation.y=U.face,Je.position.set(U.x,Math.max(jt.heightAt(U.x,U.z),-.25),U.z),r&&f>1&&(U.splash=(U.splash||0)-i,U.splash<=0)){U.splash=.22,Ne.emit(U.x,.15,U.z,{n:4,color:"#e8fbff",speed:1.6,up:2.2,life:.35,gravity:12});const D=Xf();D.position.set(U.x,.1,U.z),D.material.color.set("#f4fdff"),Te.add(D),cr.push({mesh:D,t:0,r:1.6,dur:.9})}const p=Math.min(1,f/3),g=Math.sin(U.walk)*p;t.legs[0].position.z=g*.2,t.legs[1].position.z=-g*.2,t.legs[0].position.y=.2+Math.max(0,g)*.12,t.legs[1].position.y=.2+Math.max(0,-g)*.12;const M=f>.6;M!==!!U.wasMoving&&(U.sq=M?1:-1,U.wasMoving=M),U.sq=(U.sq||0)*Math.exp(-i*7);const m=f<.3?Math.sin(Q.time*2.2)*.025:0;t.body.scale.set(1-m*.5-U.sq*.07,1+m+U.sq*.12,1-m*.5-U.sq*.07);const d=Math.sign(Math.sin(U.walk));f>2&&!r&&d!==U.lastStep&&Ne.emit(U.x,Je.position.y+.1,U.z,{n:2,color:"#d9c9a4",speed:.7,up:.6,life:.45,gravity:1}),U.lastStep=d,U.flinch=Math.max(0,(U.flinch||0)-i),U.cheer=Math.max(0,(U.cheer||0)-i);const y=f>.5&&((O=jt.isIce)==null?void 0:O.call(jt,U.x,U.z)),b=Math.abs(g)*.09+(U.cheer>0?Math.abs(Math.sin(U.cheer*9))*.35:0);t.body.position.y=b,t.body.rotation.x=U.faint>0?0:-.35*Math.min(1,U.flinch*2.5),t.body.rotation.z=U.faint>0?1.45:U.stun>0?.5:g*.05+(y?Math.sin(Q.time*7)*.12:0)+(U.flinch>0?Math.sin(U.flinch*40)*.08:0);let x=g*.6,R=-g*.45,T=0,E=0;y&&(T=-1.25+Math.sin(Q.time*9)*.25,E=1.25+Math.cos(Q.time*8)*.25,x=R=0),U.cheer>0&&(x=R=-2.9,T=-.3,E=.3),U.flinch>0&&(x=-2.5,T=.5);const A=U.rollP>=0&&f<.3&&U.faint<=0;if(A){const D=Math.sin(Q.time*7)*.12;x=1.35+D,T=.55,R=1.35-D,E=-.55;const z=U.rollTower,k=Math.atan2(-(z.x-U.x),-(z.z-U.z));if(U.face+=uo(k,U.face)*Math.min(1,i*8),Je.rotation.y=U.face,jc(t.roll,U.rollP),t.roll.rotation.x=Math.sin(Q.time*7)*.5,Math.random()<i*4&&U.rollP<.5){const W=t.roll.getWorldPosition(hr);Ne.emit(W.x,W.y,W.z,{n:1,color:"#5aa84a",speed:.4,up:.3,life:.5,gravity:4})}}t.roll.visible=A,t.armR.visible=A,A?t.lanternArm.position.set(.36,.72,.18):t.lanternArm.position.set(.48,1,-.1);const v=Math.min(1,i*14);t.armL.rotation.x+=(x-t.armL.rotation.x)*v,t.armL.rotation.z+=(T-t.armL.rotation.z)*v;const _=A?t.armR:t.lanternArm;A&&t.lanternArm.rotation.set(0,0,0),_.rotation.x+=(R-_.rotation.x)*v,_.rotation.z+=(E-_.rotation.z)*v,U.idle=f<.3?(U.idle||0)+i:0;const w=U.idle>2?Math.sin(Q.time*.55)*.7*Math.min(1,(U.idle-2)/1.5):0;t.head.rotation.y+=(w-t.head.rotation.y)*Math.min(1,i*4),U.blink=(U.blink??2)-i,U.blink<-.12&&(U.blink=2+Math.random()*3);for(const D of t.eyes)D.scale.y=U.faint>0?.1:U.blink<0?.12:1;t.carried.visible=U.carrying,U.chargeTower?(t.carried.position.lerp(hr.set(0,.95,-.5),Math.min(1,i*14)),t.carried.rotation.y=0,t.carried.scale.setScalar(Math.max(.55,t.carried.scale.x-i*3))):(t.carried.rotation.y+=i*2,t.carried.scale.setScalar(1),t.carried.position.set(0,2.35+Math.sin(Q.time*3)*.08,0)),Kc.intensity=sd*(1+Math.sin(Q.time*11)*.115)}function rM(){for(const i of fe.clicks.splice(0)){Fh.setFromCamera(i,qe);const t=Fh.intersectObject(jt.terrain)[0];if(!t)continue;let e=t.point.x,n=t.point.z;const s=jt.lighthouse.pos,r=oa(jt.plinths,e,n,2.2)||(Math.hypot(s.x-e,s.z-n)<4.5?{x:s.x,z:s.z,big:!0}:null);if(r){const a=r.big?4.3:1.95;let o=U.x-r.x,l=U.z-r.z;const c=Math.hypot(o,l)||1;e=r.x+o/c*a,n=r.z+l/c*a}U.goal={x:e,z:n,t:0,best:1/0,lastGain:0,spot:r,reach:r?r.big?Qt.lighthouseReach-.4:Qt.reach-.25:0},Ne.emit(e,jt.heightAt(e,n)+.2,n,{n:6,color:"#fff3d0",speed:1.5,up:.5,life:.35,gravity:0})}}function Ss(i=!Q.paused,t=!1){Q.paused=i;const e=fe.labels();pe("pause-keys").textContent=`${e.name}: fortsett med ${e.pause} · start på nytt med ${e.restart}`,pe("pad-help").classList.toggle("hidden",fe.padSeen),pe("pause").classList.toggle("hidden",!i),pe("confirm").classList.toggle("hidden",!t),Q.confirming=i&&t}try{sessionStorage.getItem("glod-portrait")&&document.documentElement.classList.add("portrait-ok")}catch{}pe("btn-portrait").addEventListener("click",()=>{document.documentElement.classList.add("portrait-ok");try{sessionStorage.setItem("glod-portrait","1")}catch{}fa()});pe("btn-resume").addEventListener("click",()=>Ss(!1));pe("btn-restart").addEventListener("click",()=>Ss(!0,!0));pe("btn-yes").addEventListener("click",()=>$r());pe("btn-no").addEventListener("click",()=>Ss(!0,!1));pe("btn-worlds").addEventListener("click",()=>{location.href=`${location.pathname}?world=${Rn}`});pe("btn-lex").addEventListener("click",()=>{const i=pe("lex");i.innerHTML||(i.innerHTML=Object.entries(bo).filter(([t])=>t!=="lobbyMini").map(([t,e])=>{const{tough:n,weak:s}=ld(e);return`<div class="lex-row"><b>${e.flying?"🪶":"🐾"} ${e.name}</b><small>${e.info||(e.flying?"flyr rett mot fyret":"går langs veien")}</small><span>${n?`🛡️ ${n}`:""} ${s?`💥 ${s}`:""}</span></div>`}).join("")+`<p class="lex-key">🛡️ tåler · 💥 svak mot · ${Object.entries(Mc).map(([t,e])=>`${e} ${lr[t].name}`).join(" · ")} · 📒 skjold forfra</p>`),i.classList.toggle("hidden")});function $r(){for(const i of Ni)i.el.remove();Ni.length=0;for(const i of[Ln,Yr,xs,ai,cr]){for(const t of i)t.mesh&&Te.remove(t.mesh);i.length=0}for(const i of In)Te.remove(i.mesh);In.length=0,aa.innerHTML="",oo.length=0;for(const i of jt.plinths)i.tower=null;for(let i=jt.colliders.length-1;i>=0;i--)jt.colliders[i].tower&&jt.colliders.splice(i,1);Q.buildMode=!1,U.chargeTower&&ia(U.chargeTower,0),Object.assign(Q,{phase:"title",wave:0,timer:0,embers:Qt.startEmbers,lights:_r,spawnQueue:[],leaks:{},seen:{},waveClock:0,sel:0,paused:!1,confirming:!1}),Object.assign(U,{x:jt.lighthouse.pos.x+1,z:jt.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,charge:0,chargeTower:null,goal:null,chill:Qt.chillMax,inv:0,faint:0,faints:0});for(const i of ur)Te.remove(i.mesh);ur.length=0,jt.lighthouse.setLights(_r),hM(),$n=0,co=0,yi={},Wn(an.lights,"lights",Q.lights),Wn(an.embers,"embers",Q.embers),Wn(an.wave,"wave",0),an.timer.textContent="",pe("pause").classList.add("hidden"),pe("confirm").classList.add("hidden"),pe("overlay").classList.add("hidden"),fe.clear(),Q.phase="title",Eo(!0),window.__restarts=(window.__restarts||0)+1}function aM(){nd.sync();const i=fe.device;if(yi.device===i+fe.padKind)return;yi.device=i+fe.padKind;const t=fe.labels();pe("touch").classList.toggle("hidden",i!=="touch"||Q.phase==="title"),di.querySelectorAll("button i").forEach((e,n)=>{e.textContent=i==="pad"?n===Q.sel?t.build:"":i==="touch"?"":String(n+1)}),Jc.textContent="Neste bølge ▶",yi.sel=-1}function oM(i){if(fe.consume("fps")&&Qc.classList.toggle("hidden"),fe.consume("music")&&md(),aM(),Q.phase==="title"){["build","carry","next","pause"].some(f=>fe.consume(f))&&Eo(),fe.clear();return}if(Wn(an.embers,"embers",Q.embers),!(Q.phase==="prep"||Q.phase==="wave")){if((Q.phase==="won"||Q.phase==="lost")&&fe.consume("restart")){$r();return}fe.clear(),di.classList.add("hidden"),Oh("");return}if(fe.consume("restart")){Q.confirming?$r():Ss(!0,!0);return}if(fe.consume("pause")&&Ss(!Q.paused),Q.confirming){if(fe.consume("build")||fe.consume("next")){$r();return}fe.consume("carry")&&Ss(!0,!1)}if(Q.paused){fe.clear();return}rM(),fe.consume("next")&&Q.phase==="prep"&&(Q.timer=0),fe.consume("selPrev")&&(Q.sel=(Q.sel+Zi.length-1)%Zi.length),fe.consume("selNext")&&(Q.sel=(Q.sel+1)%Zi.length);const e=oa(jt.plinths,U.x,U.z,Qt.reach,f=>!f.tower),n=oa(In,U.x,U.z,Qt.reach),s=jt.lighthouse.pos,r=Math.hypot(s.x-U.x,s.z-U.z)<Qt.lighthouseReach,a=U.stun>0,o=nu();fe.consume("build")&&!a&&(Q.buildMode||e?lo(Zi[Q.sel]):Q.buildMode=!0),Zi.forEach((f,p)=>{fe.consume("b"+(p+1))&&!a&&(Q.sel=p,lo(f))});const l=(Q.buildMode||!!e)&&!a&&!U.carrying;j_(l,o,Zi[Q.sel]),di.classList.toggle("hidden",!l),l&&(di.querySelectorAll("button").forEach((f,p)=>{f.disabled=Q.embers<lr[f.dataset.tower].cost,f.classList.toggle("sel",p===Q.sel)}),yi.sel!==Q.sel&&fe.device==="pad"&&(yi.sel=Q.sel,di.querySelectorAll("button i").forEach((f,p)=>f.textContent=p===Q.sel?fe.labels().build:""))),fe.consume("carry")&&!a&&(!U.carrying&&r?Q.embers>=Qt.stoneCost?(Q.embers-=Qt.stoneCost,U.carrying=!0,Wn(an.embers,"embers",Q.embers,"bump"),Ne.emit(U.x,Je.position.y+2.3,U.z,{n:14,color:"#8ff0ff",speed:2,up:2,life:.6,gravity:2}),Ye.stone()):(Ye.deny(),on(`Rullepapir koster ${Qt.stoneCost} ✦`)):U.carrying&&r?(U.carrying=!1,Q.embers+=Qt.stoneCost,Ye.stone(),on("Rullepapiret er lagt tilbake")):!U.carrying&&Q.buildMode?Q.buildMode=!1:U.carrying?n||on("Bær rullepapiret til et tårn"):on("Rullepapir hentes ved fyret"));const c=U.carrying&&!a&&n&&n.level<dl&&!n.upg?n:null;c!==U.chargeTower&&(U.chargeTower&&ia(U.chargeTower,0),U.chargeTower=c,U.charge=0),c&&(U.charge+=i/Qt.chargeTime,ia(c,Math.min(1,U.charge)),Math.random()<i*20&&Ne.emit(U.x,Je.position.y+2.2,U.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),U.charge>=1&&(c.upg={t:0,dur:Qt.upgradeTime[c.level-1]},U.carrying=!1,U.chargeTower=null,U.charge=0,Ne.emit(c.x,c.y+1.2,c.z,{n:12,color:"#8ff0ff",speed:2,up:2,life:.6}),Ye.stone(),on(`${c.def.name}: bli stående i ${c.upg.dur} s for å oppgradere`)));const h=fe.labels();co-=i;let u="";if(co>0)u=hd;else if(a)u="Moralpanikk! Måka slo deg ut";else if(c)u="Leverer rullepapiret …";else if(n!=null&&n.upg)u=`Lader ${n.def.name} … ${Math.ceil(n.upg.dur-n.upg.t)} s igjen (bli stående)`;else if(U.carrying&&n&&n.level>=dl)u="Tårnet er på maks nivå";else if(U.carrying)u="Bær rullepapiret til et tårn";else if(r&&!U.carrying)u=`${h.carry} = hent rullepapir (${Qt.stoneCost} ✦)`;else if(r&&U.carrying)u=`${h.carry} = legg rullepapiret tilbake`;else if(n&&n.level<dl)u=`${n.def.name} nv. ${n.level} · hent rullepapir ved fyret for å oppgradere`;else if(l&&!o.ok)u=`Ikke lov her: ${o.why} · ${h.carry} = avbryt`;else if(l){const f=`${lr[Zi[Q.sel]].name} (${lr[Zi[Q.sel]].tip})`,p=o.plinth?" (sokkel: +25 % rekkevidde)":"";u=fe.device==="pad"?`${h.sel} = velg tårn · ${h.build} = sett ned ${f}${p}`:fe.device==="touch"?`Trykk på et tårn, eller Bygg = ${f}${p}`:`1 / 2 / 3 eller ${h.build} = sett ned ${f}${p}`}else Q.phase==="prep"&&Q.wave===0&&(u=`${h.build} = bygg et tårn der du står (sokler gir +25 % rekkevidde)`);Oh(u),z_(i)}const ws=new _e;{const i=document.createElement("canvas");i.width=64,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,64,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.5,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,256),t.globalCompositeOperation="destination-in";const n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.2,"rgba(0,0,0,0.8)"),n.addColorStop(.65,"rgba(0,0,0,0.3)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,256);const s=new pi(i);for(let r=0;r<6;r++){const a=new oe(new Kn(1,1),new Le({map:s,color:"#ffdcae",transparent:!0,opacity:.05,blending:mi,depthWrite:!1,depthTest:!1,fog:!1}));a.scale.set(3.5+r%3*2.4,34,1),a.position.set(-22+r*8.5,9,-4+r%2*6),a.rotation.set(-.95,0,.55),a.userData.phase=r*1.3,ws.add(a)}}ws.visible=sn.id==="tak";ws.renderOrder=50;Te.add(ws);function lM(i){ws.position.set(An.x,0,An.z),ws.rotation.y=zi,ws.children.forEach(t=>t.material.opacity=.06+.035*Math.sin(i*.35+t.userData.phase))}let $n=0;const Ae=new G,hr=new G,tr=new G,qa=new G,pl=new G,An=new G(U.x,0,U.z);function cM(i){An.x+=(U.x-An.x)*Math.min(1,i*4),An.z+=(U.z-An.z)*Math.min(1,i*4),An.y=Je.position.y;const t=Gi?1.15:1,e=fe.zoom*t,n=qe.aspect<1.2?1.25:1;zi+=fe.look;const s=6.6*e*n;qe.position.set(An.x+Math.sin(zi)*s,An.y+12.5*e*n,An.z+Math.cos(zi)*s),$n=Math.max(0,$n-i),$n>0&&(qe.position.x+=(Math.random()-.5)*$n*2,qe.position.y+=(Math.random()-.5)*$n),qe.lookAt(An.x-Math.sin(zi),An.y+.5,An.z-Math.cos(zi)),qe.updateMatrixWorld();let r=0,a=0,o=0;const l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([d,y])=>{const b=Ae.set(d,y,.5).unproject(qe),x=b.sub(qe.position).normalize(),R=x.y<-.05?(An.y-qe.position.y)/x.y:80;return[qe.position.x+x.x*Math.min(R,80),qe.position.z+x.z*Math.min(R,80)]});for(const[d,y]of l)r+=d/4,a+=y/4;for(const[d,y]of l)o=Math.max(o,Math.hypot(d-r,y-a));const c=xe.clamp(Math.ceil((o+4)/4)*4,16,80);hn.shadow.camera.right!==c&&(Object.assign(hn.shadow.camera,{left:-c,right:c,top:c,bottom:-c}),hn.shadow.camera.updateProjectionMatrix());const h=2*c/hn.shadow.mapSize.x;tr.set(Hn.sunDir[0],Hn.sunDir[1],Hn.sunDir[2]).normalize(),qa.set(0,1,0).cross(tr).normalize(),pl.copy(tr).cross(qa).normalize(),Ae.set(r,An.y,a);const u=Math.round(Ae.dot(qa)/h)*h,f=Math.round(Ae.dot(pl)/h)*h,p=Ae.dot(tr);hr.copy(qa).multiplyScalar(u).addScaledVector(pl,f).addScaledVector(tr,p),hn.target.position.copy(hr),hn.position.copy(hr).addScaledVector(tr,40),hn.shadow.camera.far=40+c+20,lM(Q.time),W_(),Ae.set(U.x,Je.position.y+.9,U.z);const g=-Ae.clone().applyMatrix4(qe.matrixWorldInverse).z;Ae.project(qe);const M=innerWidth*wn.getPixelRatio(),m=innerHeight*wn.getPixelRatio();xr.uKeep.value.set((Ae.x*.5+.5)*M,(Ae.y*.5+.5)*m,g),xr.uRad.value=m*.3,k_(),B_(Q.paused?0:i)}const ml=sn.eruption,gl=jt.extras.bridges??[];let kr=0,ts=null;function uM(i){if(!(!ml||!gl.length||Q.phase!=="wave")){if(kr+=i,ts&&kr>=ml.closed)ts.setClosed(!1),ts=null,Dn.setBlock(()=>!1);else if(!ts&&kr>=ml.every){kr=0;const t=gl[Math.random()*gl.length|0];t.setClosed(!0),ts=t,Dn.setBlock((e,n)=>(e-t.x)**2+(n-t.z)**2<2.8*2.8),$n=Math.max($n,.35),Ye.boom(),on("🌋 Utbrudd! En bro er stengt av lava i 10 s")}}}function hM(){ts&&(ts.setClosed(!1),Dn.setBlock(()=>!1)),ts=null,kr=0}function fM(i){if(uM(i),Q.phase==="prep")Q.timer-=i,an.timer.textContent=`Neste bølge om ${Math.ceil(Math.max(0,Q.timer))} s`,Q.timer<=0&&(an.timer.textContent="",od());else if(Q.phase==="wave"){for(Q.waveClock+=i;Q.spawnQueue.length&&Q.spawnQueue[0].t<=Q.waveClock;){const t=Q.spawnQueue.shift();tu(t.type,t.path)}if(an.timer.textContent=`${Ln.length+Q.spawnQueue.length} monstre igjen`,!Q.spawnQueue.length&&!Ln.length){if(an.timer.textContent="",Q.wave>=Zc.length){fd(!0);return}const t=Qt.waveBonus+Q.wave*Qt.waveBonusPer+Math.floor(Math.min(Q.embers,300)*Qt.interest);Q.embers+=t,Wn(an.embers,"embers",Q.embers,"bump"),on(`Bølge ${Q.wave} slått! +${t} ✦`),U.cheer=1.4,ad(Qt.prepTime),Qe==null||Qe.setIntensity(0)}}}function fd(i){Q.phase=i?"won":"lost",i||fe.rumble(500,.9),pe("touch").classList.add("hidden"),pe("btn-pause").classList.add("hidden"),di.classList.add("hidden");let t="";if(Qe==null||Qe.setIntensity(0),i){Ye.win();const n=na();P1(Rn),na()>n&&(t=`<p class="lead">🔓 Ny verden låst opp: <b>${Er[Rn+1].name}</b>!</p>`)}const e=pe("overlay");e.querySelector(".card").innerHTML=i?`<h1>Gløden lever!</h1><p class="lead">Ti bølger med forbud, komitéer og moralpanikk er chillet ned, og ${Q.lights} av 20 glødepunkter brenner fortsatt. Øya ånder ut.</p>${t}<div class="menu-row"><button id="btn-again">↺ Spill kartet igjen</button>${t?'<button id="btn-nextworld" class="alt">Neste verden ▶</button>':""}<button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`:`<h1>Gløden sluknet</h1><p class="lead">Byråkratiet vant denne gangen, i bølge ${Q.wave}. Rull opp og prøv på nytt.</p><div class="menu-row"><button id="btn-again">↺ Start kartet på nytt</button><button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`,e.classList.remove("hidden"),pe("btn-again").addEventListener("click",()=>$r()),pe("btn-worlds2").addEventListener("click",()=>{location.href=`${location.pathname}?world=${Rn}`}),t&&pe("btn-nextworld").addEventListener("click",()=>{location.href=`${location.pathname}?world=${Rn+1}`})}let Qe=null;const so=(()=>{try{return JSON.parse(localStorage.getItem("glod-music")||"{}")}catch{return{}}})(),jr=["rolig","dnb","av"],dd={rolig:"Rolig",dnb:"DnB",av:"Av"};let hi=jr.includes(so.mode)?so.mode:so.muted?"av":"rolig";tn.get("musikk")&&jr.includes(tn.get("musikk"))&&(hi=tn.get("musikk"));function pd(){try{localStorage.setItem("glod-music",JSON.stringify({vol:Qe.volume,mode:hi}))}catch{}}function dM(i){const t={};let e=null,n=0,s=so.vol??.7;return{use:a=>{const o=a==="dnb"?"dnb":"rolig";e&&e!==t[o]&&e.stop(),t[o]??(t[o]=o==="dnb"?T_(i.ctx,i.noiseBuf,sn.id):A_(i.ctx,i.noiseBuf,sn.id)),e=t[o],e.setVolume(s),e.setIntensity(n),e.setMuted(a==="av"),a==="av"?e.stop():e.start()},setIntensity(a){n=a,e==null||e.setIntensity(a)},setVolume(a){s=a,e==null||e.setVolume(a)},get volume(){return s},get muted(){return hi==="av"},get intensity(){return n},get mode(){return hi},get section(){return e==null?void 0:e.section},rms(){return e?e.rms():0},tap(a){for(const o of Object.values(t))o.tap(a)}}}function pM(){const i=Kf();Qe||!i||tn.has("nomusic")||(Qe=dM(i),Qe.use(hi),pe("music-vol").value=Math.round(Qe.volume*100),pe("btn-mute").textContent=`M: ${dd[hi]}`,window.__music=Qe,window.__audioCtx=i.ctx)}function md(){Qe&&(hi=jr[(jr.indexOf(hi)+1)%jr.length],Qe.use(hi),pe("btn-mute").textContent=`M: ${dd[hi]}`,pd(),on({rolig:"🎶 Musikk: rolig",dnb:"🎶 Musikk: drum & bass",av:"🎶 Musikk av"}[hi]))}for(const i of["pointerdown","keydown","touchend"])addEventListener(i,()=>{const t=Kf();t&&t.ctx.state!=="running"&&t.ctx.resume()},{passive:!0});pe("music-vol").addEventListener("input",i=>{Qe&&(Qe.setVolume(i.target.value/100),pd())});pe("btn-mute").addEventListener("click",i=>{i.preventDefault(),md()});function Eo(i=!1){Q.phase==="title"&&(w_(),pM(),Qe==null||Qe.setIntensity(0),i&&pe("touch").classList.toggle("hidden",fe.device!=="touch"),pe("overlay").classList.add("hidden"),Gi&&fe.device!=="pad"&&(fe.device="touch"),yi.device=null,pe("btn-pause").classList.remove("hidden"),jt.lighthouse.setLights(Q.lights),Wn(an.embers,"embers",Q.embers),ad(Qt.firstPrep),Jf&&mM())}pe("btn-start").addEventListener("click",Eo);{const i=pe("worlds"),t=na();if(Er.forEach((e,n)=>{const s=document.createElement("button");s.className="world"+(n===Rn?" sel":"")+(n>=t?" locked":""),s.innerHTML=`<b>${n>=t?"🔒 ":""}${e.name}</b><small>${n>=t?"Vinn forrige verden for å låse opp":e.blurb}</small>`,s.disabled=n>=t,s.addEventListener("click",()=>{n!==Rn&&(location.href=`${location.pathname}?world=${n}`)}),i.appendChild(s)}),pe("btn-start").textContent=`Tenn gløden på ${sn.name}`,sn.skyDusk){const e=document.createElement("button");e.id="btn-tod",e.className="tod",e.textContent=ys==="skumring"?"🌅 Skumring (bytt til dag)":"☀️ Dag (bytt til skumring)",e.addEventListener("click",()=>{try{localStorage.setItem("glod-tid",ys==="skumring"?"dag":"skumring")}catch{}location.href=`${location.pathname}?world=${Rn}&tid=${ys==="skumring"?"dag":"skumring"}`}),pe("worlds").after(e)}}pe("btn-quality").addEventListener("click",()=>id(gi==="high"?"low":"high"));addEventListener("keydown",i=>{i.code==="KeyG"&&!i.repeat&&id(gi==="high"?"low":"high")});pe("btn-quality").textContent=gi==="high"?"Høy":"Lav";pe("btn-pause").classList.add("hidden");function mM(){Q.embers=999;const i=jt.lighthouse.pos,t=jt.plinths.slice().sort((e,n)=>Math.hypot(e.x-i.x,e.z-i.z-4)-Math.hypot(n.x-i.x,n.z-i.z-4));["ring","chips","speaker","ring","chips","ring"].forEach((e,n)=>{const s=t[n];U.x=s.x+1.9,U.z=s.z,lo(e),n<3&&(In[In.length-1].level=n+1,Hf(In[In.length-1],n+1))}),U.x=i.x+1,U.z=i.z+6,U.carrying=!0,Q.wave=Number(tn.get("demo"))||4,Q.wave-=1,od(),Q.waveClock=6,Q.embers=142}const gM=new Df;let vl=0,Ya=0,$a=0;window.__fpsSamples=[];window.__game={S:Q,monsters:Ln,towers:In,embers:xs,world:jt,K:U,renderer:wn,camera:qe,input:fe,buildSpot:()=>nu(),build:i=>lo(i),renderOnce:()=>ha.render(0),outlineCats:Lf,spawnMonster:tu,projectiles:ai,damage:_s,dropBag:(i,t)=>ud(i,t),ghost:Fi,get camYaw(){return zi}};window.__errors=[];addEventListener("error",i=>window.__errors.push(String(i.message)));addEventListener("unhandledrejection",i=>window.__errors.push(String(i.reason)));function gd(){requestAnimationFrame(gd);const i=gM.getDelta(),t=Math.min(i,.05);Q.paused||(Q.time+=t),fe.update(t),Q.paused||(jt.update(Q.time),I_.update(Q.time));for(let e=0;e<P_&&!Q.paused&&(Q.phase==="prep"||Q.phase==="wave");e++)e>0&&(Q.time+=t,Gh(t)),fM(t),tM(t),J_(t),Q_(t),sM(t),q_(t);if(Q.paused||Gh(t),oM(t),!Q.paused){if(Ne.update(t),Math.random()<t*(4+10*(Q.lights/_r))){const e=jt.lighthouse.tip;Ps.emit(e.x,e.y,e.z,{n:1,color:"#e8e2dc",speed:.5,up:1.6,life:3.2,gravity:-.15})}Ps.update(t)}if(cM(t),wn.info.reset(),ha.render(t),vl++,Ya+=i,Ya>=.5){const e=vl/Ya;window.__fpsSamples.push(e),window.__fpsSamples.length>240&&window.__fpsSamples.shift(),Qc.textContent=`${e.toFixed(0)} fps · ${wn.info.render.calls} dc`,$a=e<(Gi?28:45)?$a+1:0,$a>=6&&Qi>1&&(Qi=Math.max(1,Qi-.25),wn.setPixelRatio(Qi),fa(),$a=0,window.__dprDrops=(window.__dprDrops||0)+1,tn.has("debug")&&console.info(`[fps] ${e.toFixed(0)} fps over tid → dpr senket til ${Qi}`)),vl=0,Ya=0}}gd();Jf&&tn.has("autostart")&&Eo();function uo(i,t){let e=i-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}
