(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vc="170",pd=0,Jc=1,md=2,Fh=1,Oh=2,Li=3,es=0,Pn=1,Ke=2,pn=0,Qi=1,di=2,Qc=3,tu=4,kh=5,ai=100,gd=101,vd=102,xd=103,_d=104,Ur=200,Md=201,yd=202,Sd=203,dl=204,pl=205,ml=206,bd=207,gl=208,wd=209,Ed=210,Td=211,Ad=212,Cd=213,Rd=214,vl=0,xl=1,_l=2,ur=3,Ml=4,yl=5,Sl=6,bl=7,xc=0,Pd=1,Dd=2,ts=0,Bh=1,Gh=2,Vh=3,_c=4,Ld=5,Hh=6,Wh=7,Xh=300,hr=301,fr=302,wl=303,El=304,ao=306,Mi=1e3,ps=1001,Tl=1002,vn=1003,Id=1004,ca=1005,xi=1006,bo=1007,ms=1008,yi=1009,qh=1010,Yh=1011,Yr=1012,Mc=1013,Ss=1014,hi=1015,jn=1016,yc=1017,Sc=1018,bs=1020,$h=35902,jh=1021,Zh=1022,$n=1023,Kh=1024,Jh=1025,er=1026,ws=1027,oo=1028,bc=1029,Qh=1030,wc=1031,Ec=1033,Xa=33776,qa=33777,Ya=33778,$a=33779,Al=35840,Cl=35841,Rl=35842,Pl=35843,Dl=36196,Ll=37492,Il=37496,Ul=37808,Nl=37809,zl=37810,Fl=37811,Ol=37812,kl=37813,Bl=37814,Gl=37815,Vl=37816,Hl=37817,Wl=37818,Xl=37819,ql=37820,Yl=37821,ja=36492,$l=36494,jl=36495,tf=36283,Zl=36284,Kl=36285,Jl=36286,Ud=3200,Nd=3201,Tc=0,zd=1,Zi="",mn="srgb",_r="srgb-linear",lo="linear",Oe="srgb",Us=7680,eu=519,Fd=512,Od=513,kd=514,ef=515,Bd=516,Gd=517,Vd=518,Hd=519,nu=35044,iu=35048,su="300 es",zi=2e3,eo=2001;class Mr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ru=1234567;const Or=Math.PI/180,$r=180/Math.PI;function Cs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function fn(i,t,e){return Math.max(t,Math.min(e,i))}function Ac(i,t){return(i%t+t)%t}function Wd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Xd(i,t,e){return i!==t?(e-i)/(t-i):0}function kr(i,t,e){return(1-e)*i+e*t}function qd(i,t,e,n){return kr(i,t,1-Math.exp(-e*n))}function Yd(i,t=1){return t-Math.abs(Ac(i,t*2)-t)}function $d(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function jd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Zd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Kd(i,t){return i+Math.random()*(t-i)}function Jd(i){return i*(.5-Math.random())}function Qd(i){i!==void 0&&(ru=i);let t=ru+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tp(i){return i*Or}function ep(i){return i*$r}function np(i){return(i&i-1)===0&&i!==0}function ip(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rp(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*v,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*v,o*c);break;case"ZYZ":i.set(l*v,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Js(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function En(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const xe={DEG2RAD:Or,RAD2DEG:$r,generateUUID:Cs,clamp:fn,euclideanModulo:Ac,mapLinear:Wd,inverseLerp:Xd,lerp:kr,damp:qd,pingpong:Yd,smoothstep:$d,smootherstep:jd,randInt:Zd,randFloat:Kd,randFloatSpread:Jd,seededRandom:Qd,degToRad:tp,radToDeg:ep,isPowerOfTwo:np,ceilPowerOfTwo:ip,floorPowerOfTwo:sp,setQuaternionFromProperEuler:rp,normalize:En,denormalize:Js};class Et{constructor(t=0,e=0){Et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Me{constructor(t,e,n,s,r,a,o,l,c){Me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],v=n[8],x=s[0],m=s[3],d=s[6],y=s[1],S=s[4],g=s[7],A=s[2],E=s[5],b=s[8];return r[0]=a*x+o*y+l*A,r[3]=a*m+o*S+l*E,r[6]=a*d+o*g+l*b,r[1]=c*x+h*y+u*A,r[4]=c*m+h*S+u*E,r[7]=c*d+h*g+u*b,r[2]=f*x+p*y+v*A,r[5]=f*m+p*S+v*E,r[8]=f*d+p*g+v*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,v=e*u+n*f+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(wo.makeScale(t,e)),this}rotate(t){return this.premultiply(wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wo=new Me;function nf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function no(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ap(){const i=no("canvas");return i.style.display="block",i}const au={};function Nr(i){i in au||(au[i]=!0,console.warn(i))}function op(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function lp(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function cp(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Pe={enabled:!0,workingColorSpace:_r,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Oe&&(i.r=Oi(i.r),i.g=Oi(i.g),i.b=Oi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Oe&&(i.r=nr(i.r),i.g=nr(i.g),i.b=nr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Zi?lo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ou=[.64,.33,.3,.6,.15,.06],lu=[.2126,.7152,.0722],cu=[.3127,.329],uu=new Me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hu=new Me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Pe.define({[_r]:{primaries:ou,whitePoint:cu,transfer:lo,toXYZ:uu,fromXYZ:hu,luminanceCoefficients:lu,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:ou,whitePoint:cu,transfer:Oe,toXYZ:uu,fromXYZ:hu,luminanceCoefficients:lu,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}});let Ns;class up{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ns===void 0&&(Ns=no("canvas")),Ns.width=t.width,Ns.height=t.height;const n=Ns.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ns}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=no("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Oi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hp=0;class sf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Cs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Eo(s[a].image)):r.push(Eo(s[a]))}else r=Eo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?up.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fp=0;class bn extends Mr{constructor(t=bn.DEFAULT_IMAGE,e=bn.DEFAULT_MAPPING,n=ps,s=ps,r=xi,a=ms,o=$n,l=yi,c=bn.DEFAULT_ANISOTROPY,h=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Cs(),this.name="",this.source=new sf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mi:t.x=t.x-Math.floor(t.x);break;case ps:t.x=t.x<0?0:1;break;case Tl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mi:t.y=t.y-Math.floor(t.y);break;case ps:t.y=t.y<0?0:1;break;case Tl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Xh;bn.DEFAULT_ANISOTROPY=1;class Be{constructor(t=0,e=0,n=0,s=1){Be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],v=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,g=(p+1)/2,A=(d+1)/2,E=(h+f)/4,b=(u+x)/4,C=(v+m)/4;return S>g&&S>A?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=E/n,r=b/n):g>A?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=E/s,r=C/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=b/r,s=C/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-v)*(m-v)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dp extends Mr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new bn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new sf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends dp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class rf extends bn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pp extends bn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sa{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],p=r[a+1],v=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=v,t[e+3]=x;return}if(u!==x||l!==f||c!==p||h!==v){let m=1-o;const d=l*f+c*p+h*v+u*x,y=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const A=Math.sqrt(S),E=Math.atan2(A,d*y);m=Math.sin(m*E)/A,o=Math.sin(o*E)/A}const g=o*y;if(l=l*m+f*g,c=c*m+p*g,h=h*m+v*g,u=u*m+x*g,m===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],v=r[a+3];return t[e]=o*v+h*u+l*p-c*f,t[e+1]=l*v+h*f+c*u-o*p,t[e+2]=c*v+h*p+o*f-l*u,t[e+3]=h*v-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*v,this._y=c*p*u-f*h*v,this._z=c*h*v+f*p*u,this._w=c*h*u-f*p*v;break;case"YXZ":this._x=f*h*u+c*p*v,this._y=c*p*u-f*h*v,this._z=c*h*v-f*p*u,this._w=c*h*u+f*p*v;break;case"ZXY":this._x=f*h*u-c*p*v,this._y=c*p*u+f*h*v,this._z=c*h*v+f*p*u,this._w=c*h*u-f*p*v;break;case"ZYX":this._x=f*h*u-c*p*v,this._y=c*p*u+f*h*v,this._z=c*h*v-f*p*u,this._w=c*h*u+f*p*v;break;case"YZX":this._x=f*h*u+c*p*v,this._y=c*p*u+f*h*v,this._z=c*h*v-f*p*u,this._w=c*h*u-f*p*v;break;case"XZY":this._x=f*h*u-c*p*v,this._y=c*p*u-f*h*v,this._z=c*h*v+f*p*u,this._w=c*h*u+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return To.copy(this).projectOnVector(t),this.sub(To)}reflect(t){return this.sub(To.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const To=new B,fu=new sa;class Rs{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ni):ni.fromBufferAttribute(r,a),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ua.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ua.copy(n.boundingBox)),ua.applyMatrix4(t.matrixWorld),this.union(ua)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tr),ha.subVectors(this.max,Tr),zs.subVectors(t.a,Tr),Fs.subVectors(t.b,Tr),Os.subVectors(t.c,Tr),Vi.subVectors(Fs,zs),Hi.subVectors(Os,Fs),is.subVectors(zs,Os);let e=[0,-Vi.z,Vi.y,0,-Hi.z,Hi.y,0,-is.z,is.y,Vi.z,0,-Vi.x,Hi.z,0,-Hi.x,is.z,0,-is.x,-Vi.y,Vi.x,0,-Hi.y,Hi.x,0,-is.y,is.x,0];return!Ao(e,zs,Fs,Os,ha)||(e=[1,0,0,0,1,0,0,0,1],!Ao(e,zs,Fs,Os,ha))?!1:(fa.crossVectors(Vi,Hi),e=[fa.x,fa.y,fa.z],Ao(e,zs,Fs,Os,ha))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ei=[new B,new B,new B,new B,new B,new B,new B,new B],ni=new B,ua=new Rs,zs=new B,Fs=new B,Os=new B,Vi=new B,Hi=new B,is=new B,Tr=new B,ha=new B,fa=new B,ss=new B;function Ao(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ss.fromArray(i,r);const o=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),l=t.dot(ss),c=e.dot(ss),h=n.dot(ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const mp=new Rs,Ar=new B,Co=new B;class yr{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):mp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ar.subVectors(t,this.center);const e=Ar.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ar,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Co.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ar.copy(t.center).add(Co)),this.expandByPoint(Ar.copy(t.center).sub(Co))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new B,Ro=new B,da=new B,Wi=new B,Po=new B,pa=new B,Do=new B;class Cc{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ti.copy(this.origin).addScaledVector(this.direction,e),Ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ro.copy(t).add(e).multiplyScalar(.5),da.copy(e).sub(t).normalize(),Wi.copy(this.origin).sub(Ro);const r=t.distanceTo(e)*.5,a=-this.direction.dot(da),o=Wi.dot(this.direction),l=-Wi.dot(da),c=Wi.lengthSq(),h=Math.abs(1-a*a);let u,f,p,v;if(h>0)if(u=a*l-o,f=a*o-l,v=r*h,u>=0)if(f>=-v)if(f<=v){const x=1/h;u*=x,f*=x,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-v?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=v?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ro).addScaledVector(da,f),p}intersectSphere(t,e){Ti.subVectors(t.center,this.origin);const n=Ti.dot(this.direction),s=Ti.dot(Ti)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ti)!==null}intersectTriangle(t,e,n,s,r){Po.subVectors(e,t),pa.subVectors(n,t),Do.crossVectors(Po,pa);let a=this.direction.dot(Do),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wi.subVectors(this.origin,t);const l=o*this.direction.dot(pa.crossVectors(Wi,pa));if(l<0)return null;const c=o*this.direction.dot(Po.cross(Wi));if(c<0||l+c>a)return null;const h=-o*Wi.dot(Do);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(t,e,n,s,r,a,o,l,c,h,u,f,p,v,x,m){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,p,v,x,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,p,v,x,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=v,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ks.setFromMatrixColumn(t,0).length(),r=1/ks.setFromMatrixColumn(t,1).length(),a=1/ks.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,p=a*u,v=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+v*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=v+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,v=c*h,x=c*u;e[0]=f+x*o,e[4]=v*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-v,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,v=c*h,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=v+p*o,e[1]=p+v*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,p=a*u,v=o*h,x=o*u;e[0]=l*h,e[4]=v*c-p,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=p*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,v=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=v*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+v,e[10]=f-x*u}else if(t.order==="XZY"){const f=a*l,p=a*c,v=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=p*u-v,e[2]=v*u-p,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gp,t,vp)}lookAt(t,e,n){const s=this.elements;return zn.subVectors(t,e),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),Xi.crossVectors(n,zn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),Xi.crossVectors(n,zn)),Xi.normalize(),ma.crossVectors(zn,Xi),s[0]=Xi.x,s[4]=ma.x,s[8]=zn.x,s[1]=Xi.y,s[5]=ma.y,s[9]=zn.y,s[2]=Xi.z,s[6]=ma.z,s[10]=zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],v=n[2],x=n[6],m=n[10],d=n[14],y=n[3],S=n[7],g=n[11],A=n[15],E=s[0],b=s[4],C=s[8],M=s[12],_=s[1],T=s[5],O=s[9],G=s[13],D=s[2],z=s[6],k=s[10],X=s[14],V=s[3],j=s[7],nt=s[11],rt=s[15];return r[0]=a*E+o*_+l*D+c*V,r[4]=a*b+o*T+l*z+c*j,r[8]=a*C+o*O+l*k+c*nt,r[12]=a*M+o*G+l*X+c*rt,r[1]=h*E+u*_+f*D+p*V,r[5]=h*b+u*T+f*z+p*j,r[9]=h*C+u*O+f*k+p*nt,r[13]=h*M+u*G+f*X+p*rt,r[2]=v*E+x*_+m*D+d*V,r[6]=v*b+x*T+m*z+d*j,r[10]=v*C+x*O+m*k+d*nt,r[14]=v*M+x*G+m*X+d*rt,r[3]=y*E+S*_+g*D+A*V,r[7]=y*b+S*T+g*z+A*j,r[11]=y*C+S*O+g*k+A*nt,r[15]=y*M+S*G+g*X+A*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],v=t[3],x=t[7],m=t[11],d=t[15];return v*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*p-n*l*p)+x*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],v=t[12],x=t[13],m=t[14],d=t[15],y=u*m*c-x*f*c+x*l*p-o*m*p-u*l*d+o*f*d,S=v*f*c-h*m*c-v*l*p+a*m*p+h*l*d-a*f*d,g=h*x*c-v*u*c+v*o*p-a*x*p-h*o*d+a*u*d,A=v*u*l-h*x*l-v*o*f+a*x*f+h*o*m-a*u*m,E=e*y+n*S+s*g+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=y*b,t[1]=(x*f*r-u*m*r-x*s*p+n*m*p+u*s*d-n*f*d)*b,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*d+n*l*d)*b,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*p-n*l*p)*b,t[4]=S*b,t[5]=(h*m*r-v*f*r+v*s*p-e*m*p-h*s*d+e*f*d)*b,t[6]=(v*l*r-a*m*r-v*s*c+e*m*c+a*s*d-e*l*d)*b,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*p+e*l*p)*b,t[8]=g*b,t[9]=(v*u*r-h*x*r-v*n*p+e*x*p+h*n*d-e*u*d)*b,t[10]=(a*x*r-v*o*r+v*n*c-e*x*c-a*n*d+e*o*d)*b,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*b,t[12]=A*b,t[13]=(h*x*s-v*u*s+v*n*f-e*x*f-h*n*m+e*u*m)*b,t[14]=(v*o*s-a*x*s-v*n*l+e*x*l+a*n*m-e*o*m)*b,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,v=r*u,x=a*h,m=a*u,d=o*u,y=l*c,S=l*h,g=l*u,A=n.x,E=n.y,b=n.z;return s[0]=(1-(x+d))*A,s[1]=(p+g)*A,s[2]=(v-S)*A,s[3]=0,s[4]=(p-g)*E,s[5]=(1-(f+d))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(v+S)*b,s[9]=(m-y)*b,s[10]=(1-(f+x))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ks.set(s[0],s[1],s[2]).length();const a=ks.set(s[4],s[5],s[6]).length(),o=ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ii.copy(this);const c=1/r,h=1/a,u=1/o;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=u,ii.elements[9]*=u,ii.elements[10]*=u,e.setFromRotationMatrix(ii),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=zi){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let p,v;if(o===zi)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===eo)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=zi){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,p=(n+s)*h;let v,x;if(o===zi)v=(a+r)*u,x=-2*u;else if(o===eo)v=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ks=new B,ii=new Le,gp=new B(0,0,0),vp=new B(1,1,1),Xi=new B,ma=new B,zn=new B,du=new Le,pu=new sa;class Si{constructor(t=0,e=0,n=0,s=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(fn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-fn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return du.makeRotationFromQuaternion(t),this.setFromRotationMatrix(du,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pu.setFromEuler(this),this.setFromQuaternion(pu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class Rc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xp=0;const mu=new B,Bs=new sa,Ai=new Le,ga=new B,Cr=new B,_p=new B,Mp=new sa,gu=new B(1,0,0),vu=new B(0,1,0),xu=new B(0,0,1),_u={type:"added"},yp={type:"removed"},Gs={type:"childadded",child:null},Lo={type:"childremoved",child:null};class Ve extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new B,e=new Si,n=new sa,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new Me}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(gu,t)}rotateY(t){return this.rotateOnAxis(vu,t)}rotateZ(t){return this.rotateOnAxis(xu,t)}translateOnAxis(t,e){return mu.copy(t).applyQuaternion(this.quaternion),this.position.add(mu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gu,t)}translateY(t){return this.translateOnAxis(vu,t)}translateZ(t){return this.translateOnAxis(xu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ga.copy(t):ga.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Cr,ga,this.up):Ai.lookAt(ga,Cr,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(Ai),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_u),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yp),Lo.child=t,this.dispatchEvent(Lo),Lo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_u),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,t,_p),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,Mp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ve.DEFAULT_UP=new B(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new B,Ci=new B,Io=new B,Ri=new B,Vs=new B,Hs=new B,Mu=new B,Uo=new B,No=new B,zo=new B,Fo=new Be,Oo=new Be,ko=new Be;class oi{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),si.subVectors(t,e),s.cross(si);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){si.subVectors(s,e),Ci.subVectors(n,e),Io.subVectors(t,e);const a=si.dot(si),o=si.dot(Ci),l=si.dot(Io),c=Ci.dot(Ci),h=Ci.dot(Io),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,v=(a*h-o*l)*f;return r.set(1-p-v,v,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ri.x),l.addScaledVector(a,Ri.y),l.addScaledVector(o,Ri.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Fo.setScalar(0),Oo.setScalar(0),ko.setScalar(0),Fo.fromBufferAttribute(t,e),Oo.fromBufferAttribute(t,n),ko.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Fo,r.x),a.addScaledVector(Oo,r.y),a.addScaledVector(ko,r.z),a}static isFrontFacing(t,e,n,s){return si.subVectors(n,e),Ci.subVectors(t,e),si.cross(Ci).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),si.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return oi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return oi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return oi.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return oi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return oi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Vs.subVectors(s,n),Hs.subVectors(r,n),Uo.subVectors(t,n);const l=Vs.dot(Uo),c=Hs.dot(Uo);if(l<=0&&c<=0)return e.copy(n);No.subVectors(t,s);const h=Vs.dot(No),u=Hs.dot(No);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Vs,a);zo.subVectors(t,r);const p=Vs.dot(zo),v=Hs.dot(zo);if(v>=0&&p<=v)return e.copy(r);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(Hs,o);const m=h*v-p*u;if(m<=0&&u-h>=0&&p-v>=0)return Mu.subVectors(r,s),o=(u-h)/(u-h+(p-v)),e.copy(s).addScaledVector(Mu,o);const d=1/(m+x+f);return a=x*d,o=f*d,e.copy(n).addScaledVector(Vs,a).addScaledVector(Hs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},va={h:0,s:0,l:0};function Bo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Pt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Pe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Pe.workingColorSpace){if(t=Ac(t,1),e=fn(e,0,1),n=fn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Bo(a,r,t+1/3),this.g=Bo(a,r,t),this.b=Bo(a,r,t-1/3)}return Pe.toWorkingColorSpace(this,s),this}setStyle(t,e=mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){const n=af[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=nr(t.r),this.g=nr(t.g),this.b=nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return Pe.fromWorkingColorSpace(Sn.copy(this),t),Math.round(fn(Sn.r*255,0,255))*65536+Math.round(fn(Sn.g*255,0,255))*256+Math.round(fn(Sn.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Pe.workingColorSpace){Pe.fromWorkingColorSpace(Sn.copy(this),e);const n=Sn.r,s=Sn.g,r=Sn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Pe.workingColorSpace){return Pe.fromWorkingColorSpace(Sn.copy(this),e),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=mn){Pe.fromWorkingColorSpace(Sn.copy(this),t);const e=Sn.r,n=Sn.g,s=Sn.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(qi),this.setHSL(qi.h+t,qi.s+e,qi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qi),t.getHSL(va);const n=kr(qi.h,va.h,e),s=kr(qi.s,va.s,e),r=kr(qi.l,va.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Pt;Pt.NAMES=af;let Sp=0;class Ps extends Mr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Cs(),this.name="",this.blending=Qi,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=pl,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==es&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dl&&(n.blendSrc=this.blendSrc),this.blendDst!==pl&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class De extends Ps{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const en=new B,xa=new Et;class Ge{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nu,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xa.fromBufferAttribute(this,e),xa.applyMatrix3(t),this.setXY(e,xa.x,xa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Js(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Js(e,this.array)),e}setX(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Js(e,this.array)),e}setY(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Js(e,this.array)),e}setZ(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Js(e,this.array)),e}setW(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array),s=En(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array),s=En(s,this.array),r=En(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nu&&(t.usage=this.usage),t}}class of extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class lf extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pe extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}}let bp=0;const qn=new Le,Go=new Ve,Ws=new B,Fn=new Rs,Rr=new Rs,un=new B;class ze extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nf(t)?lf:of)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Me().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,n){return qn.makeTranslation(t,e,n),this.applyMatrix4(qn),this}scale(t,e,n){return qn.makeScale(t,e,n),this.applyMatrix4(qn),this}lookAt(t){return Go.lookAt(t),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Rr.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors(Fn.min,Rr.min),Fn.expandByPoint(un),un.addVectors(Fn.max,Rr.max),Fn.expandByPoint(un)):(Fn.expandByPoint(Rr.min),Fn.expandByPoint(Rr.max))}Fn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)un.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(un));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)un.fromBufferAttribute(o,c),l&&(Ws.fromBufferAttribute(t,c),un.add(Ws)),s=Math.max(s,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new B,l[C]=new B;const c=new B,h=new B,u=new B,f=new Et,p=new Et,v=new Et,x=new B,m=new B;function d(C,M,_){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),v.fromBufferAttribute(r,_),h.sub(c),u.sub(c),p.sub(f),v.sub(f);const T=1/(p.x*v.y-v.x*p.y);isFinite(T)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(T),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(T),o[C].add(x),o[M].add(x),o[_].add(x),l[C].add(m),l[M].add(m),l[_].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,M=y.length;C<M;++C){const _=y[C],T=_.start,O=_.count;for(let G=T,D=T+O;G<D;G+=3)d(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const S=new B,g=new B,A=new B,E=new B;function b(C){A.fromBufferAttribute(s,C),E.copy(A);const M=o[C];S.copy(M),S.sub(A.multiplyScalar(A.dot(M))).normalize(),g.crossVectors(E,M);const T=g.dot(l[C])<0?-1:1;a.setXYZW(C,S.x,S.y,S.z,T)}for(let C=0,M=y.length;C<M;++C){const _=y[C],T=_.start,O=_.count;for(let G=T,D=T+O;G<D;G+=3)b(t.getX(G+0)),b(t.getX(G+1)),b(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,u=new B;if(t)for(let f=0,p=t.count;f<p;f+=3){const v=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let d=0;d<h;d++)f[v++]=c[p++]}return new Ge(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yu=new Le,rs=new Cc,_a=new yr,Su=new B,Ma=new B,ya=new B,Sa=new B,Vo=new B,ba=new B,bu=new B,wa=new B;class oe extends Ve{constructor(t=new ze,e=new De){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ba.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Vo.fromBufferAttribute(u,t),a?ba.addScaledVector(Vo,h):ba.addScaledVector(Vo.sub(e),h))}e.add(ba)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(r),rs.copy(t.ray).recast(t.near),!(_a.containsPoint(rs.origin)===!1&&(rs.intersectSphere(_a,Su)===null||rs.origin.distanceToSquared(Su)>(t.far-t.near)**2))&&(yu.copy(r).invert(),rs.copy(t.ray).applyMatrix4(yu),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,rs)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const m=f[v],d=a[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let g=y,A=S;g<A;g+=3){const E=o.getX(g),b=o.getX(g+1),C=o.getX(g+2);s=Ea(this,d,t,n,c,h,u,E,b,C),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=v,d=x;m<d;m+=3){const y=o.getX(m),S=o.getX(m+1),g=o.getX(m+2);s=Ea(this,a,t,n,c,h,u,y,S,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const m=f[v],d=a[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let g=y,A=S;g<A;g+=3){const E=g,b=g+1,C=g+2;s=Ea(this,d,t,n,c,h,u,E,b,C),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,d=x;m<d;m+=3){const y=m,S=m+1,g=m+2;s=Ea(this,a,t,n,c,h,u,y,S,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function wp(i,t,e,n,s,r,a,o){let l;if(t.side===Pn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===es,o),l===null)return null;wa.copy(o),wa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(wa);return c<e.near||c>e.far?null:{distance:c,point:wa.clone(),object:i}}function Ea(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ma),i.getVertexPosition(l,ya),i.getVertexPosition(c,Sa);const h=wp(i,t,e,n,Ma,ya,Sa,bu);if(h){const u=new B;oi.getBarycoord(bu,Ma,ya,Sa,u),s&&(h.uv=oi.getInterpolatedAttribute(s,o,l,c,u,new Et)),r&&(h.uv1=oi.getInterpolatedAttribute(r,o,l,c,u,new Et)),a&&(h.normal=oi.getInterpolatedAttribute(a,o,l,c,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new B,materialIndex:0};oi.getNormal(Ma,ya,Sa,f.normal),h.face=f,h.barycoord=u}return h}class Cn extends ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2));function v(x,m,d,y,S,g,A,E,b,C,M){const _=g/b,T=A/C,O=g/2,G=A/2,D=E/2,z=b+1,k=C+1;let X=0,V=0;const j=new B;for(let nt=0;nt<k;nt++){const rt=nt*T-G;for(let Ct=0;Ct<z;Ct++){const kt=Ct*_-O;j[x]=kt*y,j[m]=rt*S,j[d]=D,c.push(j.x,j.y,j.z),j[x]=0,j[m]=0,j[d]=E>0?1:-1,h.push(j.x,j.y,j.z),u.push(Ct/b),u.push(1-nt/C),X+=1}}for(let nt=0;nt<C;nt++)for(let rt=0;rt<b;rt++){const Ct=f+rt+z*nt,kt=f+rt+z*(nt+1),H=f+(rt+1)+z*(nt+1),K=f+(rt+1)+z*nt;l.push(Ct,kt,K),l.push(kt,H,K),V+=6}o.addGroup(p,V,M),p+=V,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function dr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Tn(i){const t={};for(let e=0;e<i.length;e++){const n=dr(i[e]);for(const s in n)t[s]=n[s]}return t}function Ep(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function cf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pe.workingColorSpace}const li={clone:dr,merge:Tn};var Tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $e extends Ps{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tp,this.fragmentShader=Ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=dr(t.uniforms),this.uniformsGroups=Ep(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class uf extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=zi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new B,wu=new Et,Eu=new Et;class kn extends uf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$r*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z)}getViewSize(t,e){return this.getViewBounds(t,wu,Eu),e.subVectors(Eu,wu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Or*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Xs=-90,qs=1;class Cp extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new kn(Xs,qs,t,e);s.layers=this.layers,this.add(s);const r=new kn(Xs,qs,t,e);r.layers=this.layers,this.add(r);const a=new kn(Xs,qs,t,e);a.layers=this.layers,this.add(a);const o=new kn(Xs,qs,t,e);o.layers=this.layers,this.add(o);const l=new kn(Xs,qs,t,e);l.layers=this.layers,this.add(l);const c=new kn(Xs,qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===zi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class hf extends bn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:hr,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rp extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new hf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Cn(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:pn});r.uniforms.tEquirect.value=e;const a=new oe(s,r),o=e.minFilter;return e.minFilter===ms&&(e.minFilter=xi),new Cp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Ho=new B,Pp=new B,Dp=new Me;class hs{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ho.subVectors(n,e).cross(Pp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ho),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Dp.getNormalMatrix(t),s=this.coplanarPoint(Ho).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new yr,Ta=new B;class Pc{constructor(t=new hs,e=new hs,n=new hs,s=new hs,r=new hs,a=new hs){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zi){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],v=s[9],x=s[10],m=s[11],d=s[12],y=s[13],S=s[14],g=s[15];if(n[0].setComponents(l-r,f-c,m-p,g-d).normalize(),n[1].setComponents(l+r,f+c,m+p,g+d).normalize(),n[2].setComponents(l+a,f+h,m+v,g+y).normalize(),n[3].setComponents(l-a,f-h,m-v,g-y).normalize(),n[4].setComponents(l-o,f-u,m-x,g-S).normalize(),e===zi)n[5].setComponents(l+o,f+u,m+x,g+S).normalize();else if(e===eo)n[5].setComponents(o,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ta.x=s.normal.x>0?t.max.x:t.min.x,Ta.y=s.normal.y>0?t.max.y:t.min.y,Ta.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ff(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Lp(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<u.length;p++){const v=u[f],x=u[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,v=u.length;p<v;p++){const x=u[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Zn extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,p=[],v=[],x=[],m=[];for(let d=0;d<h;d++){const y=d*f-a;for(let S=0;S<c;S++){const g=S*u-r;v.push(g,-y,0),x.push(0,0,1),m.push(S/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){const S=y+c*d,g=y+c*(d+1),A=y+1+c*(d+1),E=y+1+c*d;p.push(S,g,E),p.push(g,A,E)}this.setIndex(p),this.setAttribute("position",new pe(v,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ip=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Up=`#ifdef USE_ALPHAHASH
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
#endif`,Np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kp=`#ifdef USE_AOMAP
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
#endif`,Bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gp=`#ifdef USE_BATCHING
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
#endif`,Vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qp=`#ifdef USE_IRIDESCENCE
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
#endif`,Yp=`#ifdef USE_BUMPMAP
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,n0=`#define PI 3.141592653589793
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
} // validated`,i0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,s0=`vec3 transformedNormal = objectNormal;
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
#endif`,r0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,c0="gl_FragColor = linearToOutputTexel( gl_FragColor );",u0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,h0=`#ifdef USE_ENVMAP
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
#endif`,f0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,d0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M0=`#ifdef USE_GRADIENTMAP
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
}`,y0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,w0=`uniform bool receiveShadow;
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
#endif`,E0=`#ifdef USE_ENVMAP
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
#endif`,T0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P0=`PhysicalMaterial material;
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
#endif`,D0=`struct PhysicalMaterial {
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
}`,L0=`
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
#endif`,I0=`#if defined( RE_IndirectDiffuse )
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
#endif`,U0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,V0=`#if defined( USE_POINTS_UV )
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
#endif`,H0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,W0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,X0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,q0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`#ifdef USE_MORPHTARGETS
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
#endif`,j0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,K0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,J0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,em=`#ifdef USE_NORMALMAP
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
#endif`,nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,om=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vm=`float getShadowMask() {
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
}`,xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_m=`#ifdef USE_SKINNING
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
#endif`,Mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ym=`#ifdef USE_SKINNING
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
#endif`,Sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Em=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tm=`#ifdef USE_TRANSMISSION
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
#endif`,Am=`#ifdef USE_TRANSMISSION
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Im=`uniform sampler2D t2D;
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`#include <common>
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
}`,km=`#if DEPTH_PACKING == 3200
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
}`,Bm=`#define DISTANCE
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
}`,Gm=`#define DISTANCE
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`uniform float scale;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,qm=`#include <common>
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
}`,Ym=`uniform vec3 diffuse;
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
}`,$m=`#define LAMBERT
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
}`,jm=`#define LAMBERT
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
}`,Zm=`#define MATCAP
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
}`,Km=`#define MATCAP
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
}`,Jm=`#define NORMAL
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
}`,Qm=`#define NORMAL
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
}`,tg=`#define PHONG
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
}`,eg=`#define PHONG
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
}`,ng=`#define STANDARD
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
}`,ig=`#define STANDARD
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
}`,sg=`#define TOON
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
}`,rg=`#define TOON
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
}`,ag=`uniform float size;
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
}`,og=`uniform vec3 diffuse;
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
}`,lg=`#include <common>
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
}`,cg=`uniform vec3 color;
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
}`,ug=`uniform float rotation;
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
}`,hg=`uniform vec3 diffuse;
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
}`,be={alphahash_fragment:Ip,alphahash_pars_fragment:Up,alphamap_fragment:Np,alphamap_pars_fragment:zp,alphatest_fragment:Fp,alphatest_pars_fragment:Op,aomap_fragment:kp,aomap_pars_fragment:Bp,batching_pars_vertex:Gp,batching_vertex:Vp,begin_vertex:Hp,beginnormal_vertex:Wp,bsdfs:Xp,iridescence_fragment:qp,bumpmap_pars_fragment:Yp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:jp,clipping_planes_pars_vertex:Zp,clipping_planes_vertex:Kp,color_fragment:Jp,color_pars_fragment:Qp,color_pars_vertex:t0,color_vertex:e0,common:n0,cube_uv_reflection_fragment:i0,defaultnormal_vertex:s0,displacementmap_pars_vertex:r0,displacementmap_vertex:a0,emissivemap_fragment:o0,emissivemap_pars_fragment:l0,colorspace_fragment:c0,colorspace_pars_fragment:u0,envmap_fragment:h0,envmap_common_pars_fragment:f0,envmap_pars_fragment:d0,envmap_pars_vertex:p0,envmap_physical_pars_fragment:E0,envmap_vertex:m0,fog_vertex:g0,fog_pars_vertex:v0,fog_fragment:x0,fog_pars_fragment:_0,gradientmap_pars_fragment:M0,lightmap_pars_fragment:y0,lights_lambert_fragment:S0,lights_lambert_pars_fragment:b0,lights_pars_begin:w0,lights_toon_fragment:T0,lights_toon_pars_fragment:A0,lights_phong_fragment:C0,lights_phong_pars_fragment:R0,lights_physical_fragment:P0,lights_physical_pars_fragment:D0,lights_fragment_begin:L0,lights_fragment_maps:I0,lights_fragment_end:U0,logdepthbuf_fragment:N0,logdepthbuf_pars_fragment:z0,logdepthbuf_pars_vertex:F0,logdepthbuf_vertex:O0,map_fragment:k0,map_pars_fragment:B0,map_particle_fragment:G0,map_particle_pars_fragment:V0,metalnessmap_fragment:H0,metalnessmap_pars_fragment:W0,morphinstance_vertex:X0,morphcolor_vertex:q0,morphnormal_vertex:Y0,morphtarget_pars_vertex:$0,morphtarget_vertex:j0,normal_fragment_begin:Z0,normal_fragment_maps:K0,normal_pars_fragment:J0,normal_pars_vertex:Q0,normal_vertex:tm,normalmap_pars_fragment:em,clearcoat_normal_fragment_begin:nm,clearcoat_normal_fragment_maps:im,clearcoat_pars_fragment:sm,iridescence_pars_fragment:rm,opaque_fragment:am,packing:om,premultiplied_alpha_fragment:lm,project_vertex:cm,dithering_fragment:um,dithering_pars_fragment:hm,roughnessmap_fragment:fm,roughnessmap_pars_fragment:dm,shadowmap_pars_fragment:pm,shadowmap_pars_vertex:mm,shadowmap_vertex:gm,shadowmask_pars_fragment:vm,skinbase_vertex:xm,skinning_pars_vertex:_m,skinning_vertex:Mm,skinnormal_vertex:ym,specularmap_fragment:Sm,specularmap_pars_fragment:bm,tonemapping_fragment:wm,tonemapping_pars_fragment:Em,transmission_fragment:Tm,transmission_pars_fragment:Am,uv_pars_fragment:Cm,uv_pars_vertex:Rm,uv_vertex:Pm,worldpos_vertex:Dm,background_vert:Lm,background_frag:Im,backgroundCube_vert:Um,backgroundCube_frag:Nm,cube_vert:zm,cube_frag:Fm,depth_vert:Om,depth_frag:km,distanceRGBA_vert:Bm,distanceRGBA_frag:Gm,equirect_vert:Vm,equirect_frag:Hm,linedashed_vert:Wm,linedashed_frag:Xm,meshbasic_vert:qm,meshbasic_frag:Ym,meshlambert_vert:$m,meshlambert_frag:jm,meshmatcap_vert:Zm,meshmatcap_frag:Km,meshnormal_vert:Jm,meshnormal_frag:Qm,meshphong_vert:tg,meshphong_frag:eg,meshphysical_vert:ng,meshphysical_frag:ig,meshtoon_vert:sg,meshtoon_frag:rg,points_vert:ag,points_frag:og,shadow_vert:lg,shadow_frag:cg,sprite_vert:ug,sprite_frag:hg},Ht={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},envMapRotation:{value:new Me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},vi={basic:{uniforms:Tn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:Tn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Pt(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:Tn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:Tn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:Tn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Pt(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:Tn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:Tn([Ht.points,Ht.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:Tn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:Tn([Ht.common,Ht.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:Tn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:Tn([Ht.sprite,Ht.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Me}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:Tn([Ht.common,Ht.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:Tn([Ht.lights,Ht.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};vi.physical={uniforms:Tn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const Aa={r:0,b:0,g:0},os=new Si,fg=new Le;function dg(i,t,e,n,s,r,a){const o=new Pt(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function v(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function x(y){let S=!1;const g=v(y);g===null?d(o,l):g&&g.isColor&&(d(g,1),S=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,S){const g=v(S);g&&(g.isCubeTexture||g.mapping===ao)?(h===void 0&&(h=new oe(new Cn(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:dr(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),os.copy(S.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fg.makeRotationFromEuler(os)),h.material.toneMapped=Pe.getTransfer(g.colorSpace)!==Oe,(u!==g||f!==g.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=g,f=g.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new oe(new Zn(2,2),new $e({name:"BackgroundMaterial",uniforms:dr(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Pe.getTransfer(g.colorSpace)!==Oe,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||f!==g.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=g,f=g.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,S){y.getRGB(Aa,cf(i)),n.buffers.color.setClear(Aa.r,Aa.g,Aa.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(o,l)},render:x,addToRenderList:m}}function pg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(_,T,O,G,D){let z=!1;const k=u(G,O,T);r!==k&&(r=k,c(r.object)),z=p(_,G,O,D),z&&v(_,G,O,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,g(_,T,O,G),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,T,O){const G=O.wireframe===!0;let D=n[_.id];D===void 0&&(D={},n[_.id]=D);let z=D[T.id];z===void 0&&(z={},D[T.id]=z);let k=z[G];return k===void 0&&(k=f(l()),z[G]=k),k}function f(_){const T=[],O=[],G=[];for(let D=0;D<e;D++)T[D]=0,O[D]=0,G[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:O,attributeDivisors:G,object:_,attributes:{},index:null}}function p(_,T,O,G){const D=r.attributes,z=T.attributes;let k=0;const X=O.getAttributes();for(const V in X)if(X[V].location>=0){const nt=D[V];let rt=z[V];if(rt===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(rt=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(rt=_.instanceColor)),nt===void 0||nt.attribute!==rt||rt&&nt.data!==rt.data)return!0;k++}return r.attributesNum!==k||r.index!==G}function v(_,T,O,G){const D={},z=T.attributes;let k=0;const X=O.getAttributes();for(const V in X)if(X[V].location>=0){let nt=z[V];nt===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(nt=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(nt=_.instanceColor));const rt={};rt.attribute=nt,nt&&nt.data&&(rt.data=nt.data),D[V]=rt,k++}r.attributes=D,r.attributesNum=k,r.index=G}function x(){const _=r.newAttributes;for(let T=0,O=_.length;T<O;T++)_[T]=0}function m(_){d(_,0)}function d(_,T){const O=r.newAttributes,G=r.enabledAttributes,D=r.attributeDivisors;O[_]=1,G[_]===0&&(i.enableVertexAttribArray(_),G[_]=1),D[_]!==T&&(i.vertexAttribDivisor(_,T),D[_]=T)}function y(){const _=r.newAttributes,T=r.enabledAttributes;for(let O=0,G=T.length;O<G;O++)T[O]!==_[O]&&(i.disableVertexAttribArray(O),T[O]=0)}function S(_,T,O,G,D,z,k){k===!0?i.vertexAttribIPointer(_,T,O,D,z):i.vertexAttribPointer(_,T,O,G,D,z)}function g(_,T,O,G){x();const D=G.attributes,z=O.getAttributes(),k=T.defaultAttributeValues;for(const X in z){const V=z[X];if(V.location>=0){let j=D[X];if(j===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(j=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(j=_.instanceColor)),j!==void 0){const nt=j.normalized,rt=j.itemSize,Ct=t.get(j);if(Ct===void 0)continue;const kt=Ct.buffer,H=Ct.type,K=Ct.bytesPerElement,ht=H===i.INT||H===i.UNSIGNED_INT||j.gpuType===Mc;if(j.isInterleavedBufferAttribute){const ot=j.data,At=ot.stride,Dt=j.offset;if(ot.isInstancedInterleavedBuffer){for(let Ut=0;Ut<V.locationSize;Ut++)d(V.location+Ut,ot.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ut=0;Ut<V.locationSize;Ut++)m(V.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let Ut=0;Ut<V.locationSize;Ut++)S(V.location+Ut,rt/V.locationSize,H,nt,At*K,(Dt+rt/V.locationSize*Ut)*K,ht)}else{if(j.isInstancedBufferAttribute){for(let ot=0;ot<V.locationSize;ot++)d(V.location+ot,j.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ot=0;ot<V.locationSize;ot++)m(V.location+ot);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let ot=0;ot<V.locationSize;ot++)S(V.location+ot,rt/V.locationSize,H,nt,rt*K,rt/V.locationSize*ot*K,ht)}}else if(k!==void 0){const nt=k[X];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(V.location,nt);break;case 3:i.vertexAttrib3fv(V.location,nt);break;case 4:i.vertexAttrib4fv(V.location,nt);break;default:i.vertexAttrib1fv(V.location,nt)}}}}y()}function A(){C();for(const _ in n){const T=n[_];for(const O in T){const G=T[O];for(const D in G)h(G[D].object),delete G[D];delete T[O]}delete n[_]}}function E(_){if(n[_.id]===void 0)return;const T=n[_.id];for(const O in T){const G=T[O];for(const D in G)h(G[D].object),delete G[D];delete T[O]}delete n[_.id]}function b(_){for(const T in n){const O=n[T];if(O[_.id]===void 0)continue;const G=O[_.id];for(const D in G)h(G[D].object),delete G[D];delete O[_.id]}}function C(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function mg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],h[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let v=0;for(let x=0;x<u;x++)v+=h[x]*f[x];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function gg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==$n&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const C=b===jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==yi&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==hi&&!C)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=v>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:g,vertexTextures:A,maxSamples:E}}function vg(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new hs,o=new Me,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const v=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||v===null||v.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,S=y*4;let g=d.clippingState||null;l.value=g,g=h(v,f,S,p);for(let A=0;A!==S;++A)g[A]=e[A];d.clippingState=g,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,v){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const d=p+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,g=p;S!==x;++S,g+=4)a.copy(u[S]).applyMatrix4(y,o),a.normal.toArray(m,g),m[g+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function xg(i){let t=new WeakMap;function e(a,o){return o===wl?a.mapping=hr:o===El&&(a.mapping=fr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===wl||o===El)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Rp(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Dc extends uf{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Qs=4,Tu=[.125,.215,.35,.446,.526,.582],ds=20,Wo=new Dc,Au=new Pt;let Xo=null,qo=0,Yo=0,$o=!1;const fs=(1+Math.sqrt(5))/2,Ys=1/fs,Cu=[new B(-fs,Ys,0),new B(fs,Ys,0),new B(-Ys,0,fs),new B(Ys,0,fs),new B(0,fs,-Ys),new B(0,fs,Ys),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Ru{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xo,qo,Yo),this._renderer.xr.enabled=$o,t.scissorTest=!1,Ca(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hr||t.mapping===fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:jn,format:$n,colorSpace:_r,depthBuffer:!1},s=Pu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_g(r)),this._blurMaterial=Mg(r,t,e)}return s}_compileMaterial(t){const e=new oe(this._lodPlanes[0],t);this._renderer.compile(e,Wo)}_sceneToCubeUV(t,e,n,s){const o=new kn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Au),h.toneMapping=ts,h.autoClear=!1;const p=new De({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),v=new oe(new Cn,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Au),x=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const S=this._cubeSize;Ca(s,y*S,d>2?S:0,S,S),h.setRenderTarget(s),x&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===hr||t.mapping===fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Du());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new oe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ca(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Wo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Cu[(s-r-1)%Cu.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new oe(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ds-1),x=r/v,m=isFinite(r)?1+Math.floor(h*x):ds;m>ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ds}`);const d=[];let y=0;for(let b=0;b<ds;++b){const C=b/x,M=Math.exp(-C*C/2);d.push(M),b===0?y+=M:b<m&&(y+=2*M)}for(let b=0;b<d.length;b++)d[b]=d[b]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=v,f.mipInt.value=S-n;const g=this._sizeLods[s],A=3*g*(s>S-Qs?s-S+Qs:0),E=4*(this._cubeSize-g);Ca(e,A,E,3*g,2*g),l.setRenderTarget(e),l.render(u,Wo)}}function _g(i){const t=[],e=[],n=[];let s=i;const r=i-Qs+1+Tu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Qs?l=Tu[a-i+Qs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,v=6,x=3,m=2,d=1,y=new Float32Array(x*v*p),S=new Float32Array(m*v*p),g=new Float32Array(d*v*p);for(let E=0;E<p;E++){const b=E%3*2/3-1,C=E>2?0:-1,M=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];y.set(M,x*v*E),S.set(f,m*v*E);const _=[E,E,E,E,E,E];g.set(_,d*v*E)}const A=new ze;A.setAttribute("position",new Ge(y,x)),A.setAttribute("uv",new Ge(S,m)),A.setAttribute("faceIndex",new Ge(g,d)),t.push(A),s>Qs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pu(i,t,e){const n=new In(i,t,e);return n.texture.mapping=ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ca(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Mg(i,t,e){const n=new Float32Array(ds),s=new B(0,1,0);return new $e({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Du(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Lu(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Lc(){return`

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
	`}function yg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===wl||l===El,h=l===hr||l===fr;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Ru(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Ru(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Sg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Nr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function bg(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const x=f.morphAttributes[v];for(let m=0,d=x.length;m<d;m++)t.remove(x[m])}f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const v in f)t.update(f[v],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const v in p){const x=p[v];for(let m=0,d=x.length;m<d;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,v=u.attributes.position;let x=0;if(p!==null){const y=p.array;x=p.version;for(let S=0,g=y.length;S<g;S+=3){const A=y[S+0],E=y[S+1],b=y[S+2];f.push(A,E,E,b,b,A)}}else if(v!==void 0){const y=v.array;x=v.version;for(let S=0,g=y.length/3-1;S<g;S+=3){const A=S+0,E=S+1,b=S+2;f.push(A,E,E,b,b,A)}}else return;const m=new(nf(f)?lf:of)(f,1);m.version=x;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function wg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,v){v!==0&&(i.drawElementsInstanced(n,p,r,f*a,v),e.update(p,n,v))}function h(f,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,v);let m=0;for(let d=0;d<v;d++)m+=p[d];e.update(m,n,1)}function u(f,p,v,x){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,v);let d=0;for(let y=0;y<v;y++)d+=p[y]*x[y];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Eg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Tg(i,t,e){const n=new WeakMap,s=new Be;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let _=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var p=_;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let g=0;v===!0&&(g=1),x===!0&&(g=2),m===!0&&(g=3);let A=o.attributes.position.count*g,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const b=new Float32Array(A*E*4*u),C=new rf(b,A,E,u);C.type=hi,C.needsUpdate=!0;const M=g*4;for(let T=0;T<u;T++){const O=d[T],G=y[T],D=S[T],z=A*E*4*T;for(let k=0;k<O.count;k++){const X=k*M;v===!0&&(s.fromBufferAttribute(O,k),b[z+X+0]=s.x,b[z+X+1]=s.y,b[z+X+2]=s.z,b[z+X+3]=0),x===!0&&(s.fromBufferAttribute(G,k),b[z+X+4]=s.x,b[z+X+5]=s.y,b[z+X+6]=s.z,b[z+X+7]=0),m===!0&&(s.fromBufferAttribute(D,k),b[z+X+8]=s.x,b[z+X+9]=s.y,b[z+X+10]=s.z,b[z+X+11]=D.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new Et(A,E)},n.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const x=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Ag(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Ic extends bn{constructor(t,e,n,s,r,a,o,l,c,h=er){if(h!==er&&h!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===er&&(n=Ss),n===void 0&&h===ws&&(n=bs),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const df=new bn,Iu=new Ic(1,1),pf=new rf,mf=new pp,gf=new hf,Uu=[],Nu=[],zu=new Float32Array(16),Fu=new Float32Array(9),Ou=new Float32Array(4);function Sr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Uu[s];if(r===void 0&&(r=new Float32Array(s),Uu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ln(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function cn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function co(i,t){let e=Nu[t];e===void 0&&(e=new Int32Array(t),Nu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Cg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;i.uniform2fv(this.addr,t),cn(e,t)}}function Pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ln(e,t))return;i.uniform3fv(this.addr,t),cn(e,t)}}function Dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;i.uniform4fv(this.addr,t),cn(e,t)}}function Lg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;Ou.set(n),i.uniformMatrix2fv(this.addr,!1,Ou),cn(e,n)}}function Ig(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;Fu.set(n),i.uniformMatrix3fv(this.addr,!1,Fu),cn(e,n)}}function Ug(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;zu.set(n),i.uniformMatrix4fv(this.addr,!1,zu),cn(e,n)}}function Ng(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;i.uniform2iv(this.addr,t),cn(e,t)}}function Fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;i.uniform3iv(this.addr,t),cn(e,t)}}function Og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;i.uniform4iv(this.addr,t),cn(e,t)}}function kg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;i.uniform2uiv(this.addr,t),cn(e,t)}}function Gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;i.uniform3uiv(this.addr,t),cn(e,t)}}function Vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;i.uniform4uiv(this.addr,t),cn(e,t)}}function Hg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Iu.compareFunction=ef,r=Iu):r=df,e.setTexture2D(t||r,s)}function Wg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||mf,s)}function Xg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||gf,s)}function qg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||pf,s)}function Yg(i){switch(i){case 5126:return Cg;case 35664:return Rg;case 35665:return Pg;case 35666:return Dg;case 35674:return Lg;case 35675:return Ig;case 35676:return Ug;case 5124:case 35670:return Ng;case 35667:case 35671:return zg;case 35668:case 35672:return Fg;case 35669:case 35673:return Og;case 5125:return kg;case 36294:return Bg;case 36295:return Gg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return qg}}function $g(i,t){i.uniform1fv(this.addr,t)}function jg(i,t){const e=Sr(t,this.size,2);i.uniform2fv(this.addr,e)}function Zg(i,t){const e=Sr(t,this.size,3);i.uniform3fv(this.addr,e)}function Kg(i,t){const e=Sr(t,this.size,4);i.uniform4fv(this.addr,e)}function Jg(i,t){const e=Sr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Qg(i,t){const e=Sr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function tv(i,t){const e=Sr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ev(i,t){i.uniform1iv(this.addr,t)}function nv(i,t){i.uniform2iv(this.addr,t)}function iv(i,t){i.uniform3iv(this.addr,t)}function sv(i,t){i.uniform4iv(this.addr,t)}function rv(i,t){i.uniform1uiv(this.addr,t)}function av(i,t){i.uniform2uiv(this.addr,t)}function ov(i,t){i.uniform3uiv(this.addr,t)}function lv(i,t){i.uniform4uiv(this.addr,t)}function cv(i,t,e){const n=this.cache,s=t.length,r=co(e,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||df,r[a])}function uv(i,t,e){const n=this.cache,s=t.length,r=co(e,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||mf,r[a])}function hv(i,t,e){const n=this.cache,s=t.length,r=co(e,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||gf,r[a])}function fv(i,t,e){const n=this.cache,s=t.length,r=co(e,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||pf,r[a])}function dv(i){switch(i){case 5126:return $g;case 35664:return jg;case 35665:return Zg;case 35666:return Kg;case 35674:return Jg;case 35675:return Qg;case 35676:return tv;case 5124:case 35670:return ev;case 35667:case 35671:return nv;case 35668:case 35672:return iv;case 35669:case 35673:return sv;case 5125:return rv;case 36294:return av;case 36295:return ov;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return cv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return fv}}class pv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yg(e.type)}}class mv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dv(e.type)}}class gv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const jo=/(\w+)(\])?(\[|\.)?/g;function ku(i,t){i.seq.push(t),i.map[t.id]=t}function vv(i,t,e){const n=i.name,s=n.length;for(jo.lastIndex=0;;){const r=jo.exec(n),a=jo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ku(e,c===void 0?new pv(o,i,t):new mv(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new gv(o),ku(e,u)),e=u}}}class Za{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);vv(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Bu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const xv=37297;let _v=0;function Mv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Gu=new Me;function yv(i){Pe._getMatrix(Gu,Pe.workingColorSpace,i);const t=`mat3( ${Gu.elements.map(e=>e.toFixed(4))} )`;switch(Pe.getTransfer(i)){case lo:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Vu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Mv(i.getShaderSource(t),a)}else return s}function Sv(i,t){const e=yv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function bv(i,t){let e;switch(t){case Bh:e="Linear";break;case Gh:e="Reinhard";break;case Vh:e="Cineon";break;case _c:e="ACESFilmic";break;case Hh:e="AgX";break;case Wh:e="Neutral";break;case Ld:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ra=new B;function wv(){Pe.getLuminanceCoefficients(Ra);const i=Ra.x.toFixed(4),t=Ra.y.toFixed(4),e=Ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ev(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function Tv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Av(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function zr(i){return i!==""}function Hu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(i){return i.replace(Cv,Pv)}const Rv=new Map;function Pv(i,t){let e=be[t];if(e===void 0){const n=Rv.get(t);if(n!==void 0)e=be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ql(e)}const Dv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(i){return i.replace(Dv,Lv)}function Lv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Iv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Oh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Li&&(t="SHADOWMAP_TYPE_VSM"),t}function Uv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hr:case fr:t="ENVMAP_TYPE_CUBE";break;case ao:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Nv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fr:t="ENVMAP_MODE_REFRACTION";break}return t}function zv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xc:t="ENVMAP_BLENDING_MULTIPLY";break;case Pd:t="ENVMAP_BLENDING_MIX";break;case Dd:t="ENVMAP_BLENDING_ADD";break}return t}function Fv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ov(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Iv(e),c=Uv(e),h=Nv(e),u=zv(e),f=Fv(e),p=Ev(e),v=Tv(r),x=s.createProgram();let m,d,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(zr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(zr).join(`
`),d.length>0&&(d+=`
`)):(m=[qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),d=[qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ts?"#define TONE_MAPPING":"",e.toneMapping!==ts?be.tonemapping_pars_fragment:"",e.toneMapping!==ts?bv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",be.colorspace_pars_fragment,Sv("linearToOutputTexel",e.outputColorSpace),wv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zr).join(`
`)),a=Ql(a),a=Hu(a,e),a=Wu(a,e),o=Ql(o),o=Hu(o,e),o=Wu(o,e),a=Xu(a),o=Xu(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===su?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=y+m+a,g=y+d+o,A=Bu(s,s.VERTEX_SHADER,S),E=Bu(s,s.FRAGMENT_SHADER,g);s.attachShader(x,A),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function b(T){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(x).trim(),G=s.getShaderInfoLog(A).trim(),D=s.getShaderInfoLog(E).trim();let z=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,E);else{const X=Vu(s,A,"vertex"),V=Vu(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+O+`
`+X+`
`+V)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(G===""||D==="")&&(k=!1);k&&(T.diagnostics={runnable:z,programLog:O,vertexShader:{log:G,prefix:m},fragmentShader:{log:D,prefix:d}})}s.deleteShader(A),s.deleteShader(E),C=new Za(s,x),M=Av(s,x)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,xv)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_v++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}let kv=0;class Bv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Gv(t),e.set(t,n)),n}}class Gv{constructor(t){this.id=kv++,this.code=t,this.usedTimes=0}}function Vv(i,t,e,n,s,r,a){const o=new Rc,l=new Bv,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,_,T,O,G){const D=O.fog,z=G.geometry,k=M.isMeshStandardMaterial?O.environment:null,X=(M.isMeshStandardMaterial?e:t).get(M.envMap||k),V=X&&X.mapping===ao?X.image.height:null,j=v[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const nt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,rt=nt!==void 0?nt.length:0;let Ct=0;z.morphAttributes.position!==void 0&&(Ct=1),z.morphAttributes.normal!==void 0&&(Ct=2),z.morphAttributes.color!==void 0&&(Ct=3);let kt,H,K,ht;if(j){const we=vi[j];kt=we.vertexShader,H=we.fragmentShader}else kt=M.vertexShader,H=M.fragmentShader,l.update(M),K=l.getVertexShaderID(M),ht=l.getFragmentShaderID(M);const ot=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Dt=G.isInstancedMesh===!0,Ut=G.isBatchedMesh===!0,Wt=!!M.map,dt=!!M.matcap,_t=!!X,F=!!M.aoMap,qt=!!M.lightMap,yt=!!M.bumpMap,Ot=!!M.normalMap,It=!!M.displacementMap,ee=!!M.emissiveMap,Y=!!M.metalnessMap,R=!!M.roughnessMap,w=M.anisotropy>0,W=M.clearcoat>0,Q=M.dispersion>0,it=M.iridescence>0,st=M.sheen>0,Ft=M.transmission>0,St=w&&!!M.anisotropyMap,Lt=W&&!!M.clearcoatMap,re=W&&!!M.clearcoatNormalMap,bt=W&&!!M.clearcoatRoughnessMap,Yt=it&&!!M.iridescenceMap,ae=it&&!!M.iridescenceThicknessMap,le=st&&!!M.sheenColorMap,Zt=st&&!!M.sheenRoughnessMap,ye=!!M.specularMap,ce=!!M.specularColorMap,Se=!!M.specularIntensityMap,q=Ft&&!!M.transmissionMap,zt=Ft&&!!M.thicknessMap,lt=!!M.gradientMap,xt=!!M.alphaMap,Bt=M.alphaTest>0,Gt=!!M.alphaHash,ue=!!M.extensions;let Fe=ts;M.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Fe=i.toneMapping);const ke={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:kt,fragmentShader:H,defines:M.defines,customVertexShaderID:K,customFragmentShaderID:ht,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ut,batchingColor:Ut&&G._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&G.instanceColor!==null,instancingMorph:Dt&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:_r,alphaToCoverage:!!M.alphaToCoverage,map:Wt,matcap:dt,envMap:_t,envMapMode:_t&&X.mapping,envMapCubeUVHeight:V,aoMap:F,lightMap:qt,bumpMap:yt,normalMap:Ot,displacementMap:f&&It,emissiveMap:ee,normalMapObjectSpace:Ot&&M.normalMapType===zd,normalMapTangentSpace:Ot&&M.normalMapType===Tc,metalnessMap:Y,roughnessMap:R,anisotropy:w,anisotropyMap:St,clearcoat:W,clearcoatMap:Lt,clearcoatNormalMap:re,clearcoatRoughnessMap:bt,dispersion:Q,iridescence:it,iridescenceMap:Yt,iridescenceThicknessMap:ae,sheen:st,sheenColorMap:le,sheenRoughnessMap:Zt,specularMap:ye,specularColorMap:ce,specularIntensityMap:Se,transmission:Ft,transmissionMap:q,thicknessMap:zt,gradientMap:lt,opaque:M.transparent===!1&&M.blending===Qi&&M.alphaToCoverage===!1,alphaMap:xt,alphaTest:Bt,alphaHash:Gt,combine:M.combine,mapUv:Wt&&x(M.map.channel),aoMapUv:F&&x(M.aoMap.channel),lightMapUv:qt&&x(M.lightMap.channel),bumpMapUv:yt&&x(M.bumpMap.channel),normalMapUv:Ot&&x(M.normalMap.channel),displacementMapUv:It&&x(M.displacementMap.channel),emissiveMapUv:ee&&x(M.emissiveMap.channel),metalnessMapUv:Y&&x(M.metalnessMap.channel),roughnessMapUv:R&&x(M.roughnessMap.channel),anisotropyMapUv:St&&x(M.anisotropyMap.channel),clearcoatMapUv:Lt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:le&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&x(M.sheenRoughnessMap.channel),specularMapUv:ye&&x(M.specularMap.channel),specularColorMapUv:ce&&x(M.specularColorMap.channel),specularIntensityMapUv:Se&&x(M.specularIntensityMap.channel),transmissionMapUv:q&&x(M.transmissionMap.channel),thicknessMapUv:zt&&x(M.thicknessMap.channel),alphaMapUv:xt&&x(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ot||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!z.attributes.uv&&(Wt||xt),fog:!!D,useFog:M.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:At,skinning:G.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:Ct,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Wt&&M.map.isVideoTexture===!0&&Pe.getTransfer(M.map.colorSpace)===Oe,decodeVideoTextureEmissive:ee&&M.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(M.emissiveMap.colorSpace)===Oe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ke,flipSided:M.side===Pn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ue&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&M.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function d(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const T in M.defines)_.push(T),_.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(y(_,M),S(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function y(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function S(M,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),M.push(o.mask)}function g(M){const _=v[M.type];let T;if(_){const O=vi[_];T=li.clone(O.uniforms)}else T=M.uniforms;return T}function A(M,_){let T;for(let O=0,G=h.length;O<G;O++){const D=h[O];if(D.cacheKey===_){T=D,++T.usedTimes;break}}return T===void 0&&(T=new Ov(i,_,M,r),h.push(T)),T}function E(M){if(--M.usedTimes===0){const _=h.indexOf(M);h[_]=h[h.length-1],h.pop(),M.destroy()}}function b(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:g,acquireProgram:A,releaseProgram:E,releaseShaderCache:b,programs:h,dispose:C}}function Hv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Wv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function $u(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,p,v,x,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:v,renderOrder:u.renderOrder,z:x,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=v,d.renderOrder=u.renderOrder,d.z=x,d.group=m),t++,d}function o(u,f,p,v,x,m){const d=a(u,f,p,v,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,v,x,m){const d=a(u,f,p,v,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||Wv),n.length>1&&n.sort(f||Yu),s.length>1&&s.sort(f||Yu)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Xv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new $u,i.set(n,[a])):s>=r.length?(a=new $u,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function qv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Pt};break;case"SpotLight":e={position:new B,direction:new B,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function Yv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let $v=0;function jv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Zv(i){const t=new qv,e=Yv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const s=new B,r=new Le,a=new Le;function o(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,v=0,x=0,m=0,d=0,y=0,S=0,g=0,A=0,E=0,b=0;c.sort(jv);for(let M=0,_=c.length;M<_;M++){const T=c[M],O=T.color,G=T.intensity,D=T.distance,z=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=O.r*G,u+=O.g*G,f+=O.b*G;else if(T.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(T.sh.coefficients[k],G);b++}else if(T.isDirectionalLight){const k=t.get(T);if(k.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const X=T.shadow,V=e.get(T);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=z,n.directionalShadowMatrix[p]=T.shadow.matrix,y++}n.directional[p]=k,p++}else if(T.isSpotLight){const k=t.get(T);k.position.setFromMatrixPosition(T.matrixWorld),k.color.copy(O).multiplyScalar(G),k.distance=D,k.coneCos=Math.cos(T.angle),k.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),k.decay=T.decay,n.spot[x]=k;const X=T.shadow;if(T.map&&(n.spotLightMap[A]=T.map,A++,X.updateMatrices(T),T.castShadow&&E++),n.spotLightMatrix[x]=X.matrix,T.castShadow){const V=e.get(T);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=z,g++}x++}else if(T.isRectAreaLight){const k=t.get(T);k.color.copy(O).multiplyScalar(G),k.halfWidth.set(T.width*.5,0,0),k.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=k,m++}else if(T.isPointLight){const k=t.get(T);if(k.color.copy(T.color).multiplyScalar(T.intensity),k.distance=T.distance,k.decay=T.decay,T.castShadow){const X=T.shadow,V=e.get(T);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,n.pointShadow[v]=V,n.pointShadowMap[v]=z,n.pointShadowMatrix[v]=T.shadow.matrix,S++}n.point[v]=k,v++}else if(T.isHemisphereLight){const k=t.get(T);k.skyColor.copy(T.color).multiplyScalar(G),k.groundColor.copy(T.groundColor).multiplyScalar(G),n.hemi[d]=k,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==p||C.pointLength!==v||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==y||C.numPointShadows!==S||C.numSpotShadows!==g||C.numSpotMaps!==A||C.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=v,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=g+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=b,C.directionalLength=p,C.pointLength=v,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=y,C.numPointShadows=S,C.numSpotShadows=g,C.numSpotMaps=A,C.numLightProbes=b,n.version=$v++)}function l(c,h){let u=0,f=0,p=0,v=0,x=0;const m=h.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){const S=c[d];if(S.isDirectionalLight){const g=n.directional[u];g.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),u++}else if(S.isSpotLight){const g=n.spot[p];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const g=n.rectArea[v];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),g.halfWidth.set(S.width*.5,0,0),g.halfHeight.set(0,S.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const g=n.point[f];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const g=n.hemi[x];g.direction.setFromMatrixPosition(S.matrixWorld),g.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function ju(i){const t=new Zv(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Kv(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new ju(i),t.set(s,[o])):r>=a.length?(o=new ju(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Jv extends Ps{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qv extends Ps{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ex=`uniform sampler2D shadow_pass;
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
}`;function nx(i,t,e){let n=new Pc;const s=new Et,r=new Et,a=new Be,o=new Jv({depthPacking:Nd}),l=new Qv,c={},h=e.maxTextureSize,u={[es]:Pn,[Pn]:es,[Ke]:Ke},f=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:tx,fragmentShader:ex}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new ze;v.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new oe(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fh;let d=this.type;this.render=function(E,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=i.getRenderTarget(),_=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),O=i.state;O.setBlending(pn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const G=d!==Li&&this.type===Li,D=d===Li&&this.type!==Li;for(let z=0,k=E.length;z<k;z++){const X=E[z],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const j=V.getFrameExtents();if(s.multiply(j),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,V.mapSize.y=r.y)),V.map===null||G===!0||D===!0){const rt=this.type!==Li?{minFilter:vn,magFilter:vn}:{};V.map!==null&&V.map.dispose(),V.map=new In(s.x,s.y,rt),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const nt=V.getViewportCount();for(let rt=0;rt<nt;rt++){const Ct=V.getViewport(rt);a.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),O.viewport(a),V.updateMatrices(X,rt),n=V.getFrustum(),g(b,C,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===Li&&y(V,C),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,_,T)};function y(E,b){const C=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new In(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,C,f,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,C,p,x,null)}function S(E,b,C,M){let _=null;const T=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)_=T;else if(_=C.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const O=_.uuid,G=b.uuid;let D=c[O];D===void 0&&(D={},c[O]=D);let z=D[G];z===void 0&&(z=_.clone(),D[G]=z,b.addEventListener("dispose",A)),_=z}if(_.visible=b.visible,_.wireframe=b.wireframe,M===Li?_.side=b.shadowSide!==null?b.shadowSide:b.side:_.side=b.shadowSide!==null?b.shadowSide:u[b.side],_.alphaMap=b.alphaMap,_.alphaTest=b.alphaTest,_.map=b.map,_.clipShadows=b.clipShadows,_.clippingPlanes=b.clippingPlanes,_.clipIntersection=b.clipIntersection,_.displacementMap=b.displacementMap,_.displacementScale=b.displacementScale,_.displacementBias=b.displacementBias,_.wireframeLinewidth=b.wireframeLinewidth,_.linewidth=b.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const O=i.properties.get(_);O.light=C}return _}function g(E,b,C,M,_){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===Li)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const G=t.update(E),D=E.material;if(Array.isArray(D)){const z=G.groups;for(let k=0,X=z.length;k<X;k++){const V=z[k],j=D[V.materialIndex];if(j&&j.visible){const nt=S(E,j,M,_);E.onBeforeShadow(i,E,b,C,G,nt,V),i.renderBufferDirect(C,null,G,nt,E,V),E.onAfterShadow(i,E,b,C,G,nt,V)}}}else if(D.visible){const z=S(E,D,M,_);E.onBeforeShadow(i,E,b,C,G,z,null),i.renderBufferDirect(C,null,G,z,E,null),E.onAfterShadow(i,E,b,C,G,z,null)}}const O=E.children;for(let G=0,D=O.length;G<D;G++)g(O[G],b,C,M,_)}function A(E){E.target.removeEventListener("dispose",A);for(const C in c){const M=c[C],_=E.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const ix={[vl]:xl,[_l]:Sl,[Ml]:bl,[ur]:yl,[xl]:vl,[Sl]:_l,[bl]:Ml,[yl]:ur};function sx(i,t){function e(){let q=!1;const zt=new Be;let lt=null;const xt=new Be(0,0,0,0);return{setMask:function(Bt){lt!==Bt&&!q&&(i.colorMask(Bt,Bt,Bt,Bt),lt=Bt)},setLocked:function(Bt){q=Bt},setClear:function(Bt,Gt,ue,Fe,ke){ke===!0&&(Bt*=Fe,Gt*=Fe,ue*=Fe),zt.set(Bt,Gt,ue,Fe),xt.equals(zt)===!1&&(i.clearColor(Bt,Gt,ue,Fe),xt.copy(zt))},reset:function(){q=!1,lt=null,xt.set(-1,0,0,0)}}}function n(){let q=!1,zt=!1,lt=null,xt=null,Bt=null;return{setReversed:function(Gt){if(zt!==Gt){const ue=t.get("EXT_clip_control");zt?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT);const Fe=Bt;Bt=null,this.setClear(Fe)}zt=Gt},getReversed:function(){return zt},setTest:function(Gt){Gt?ot(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(Gt){lt!==Gt&&!q&&(i.depthMask(Gt),lt=Gt)},setFunc:function(Gt){if(zt&&(Gt=ix[Gt]),xt!==Gt){switch(Gt){case vl:i.depthFunc(i.NEVER);break;case xl:i.depthFunc(i.ALWAYS);break;case _l:i.depthFunc(i.LESS);break;case ur:i.depthFunc(i.LEQUAL);break;case Ml:i.depthFunc(i.EQUAL);break;case yl:i.depthFunc(i.GEQUAL);break;case Sl:i.depthFunc(i.GREATER);break;case bl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=Gt}},setLocked:function(Gt){q=Gt},setClear:function(Gt){Bt!==Gt&&(zt&&(Gt=1-Gt),i.clearDepth(Gt),Bt=Gt)},reset:function(){q=!1,lt=null,xt=null,Bt=null,zt=!1}}}function s(){let q=!1,zt=null,lt=null,xt=null,Bt=null,Gt=null,ue=null,Fe=null,ke=null;return{setTest:function(we){q||(we?ot(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(we){zt!==we&&!q&&(i.stencilMask(we),zt=we)},setFunc:function(we,xn,dn){(lt!==we||xt!==xn||Bt!==dn)&&(i.stencilFunc(we,xn,dn),lt=we,xt=xn,Bt=dn)},setOp:function(we,xn,dn){(Gt!==we||ue!==xn||Fe!==dn)&&(i.stencilOp(we,xn,dn),Gt=we,ue=xn,Fe=dn)},setLocked:function(we){q=we},setClear:function(we){ke!==we&&(i.clearStencil(we),ke=we)},reset:function(){q=!1,zt=null,lt=null,xt=null,Bt=null,Gt=null,ue=null,Fe=null,ke=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],v=null,x=!1,m=null,d=null,y=null,S=null,g=null,A=null,E=null,b=new Pt(0,0,0),C=0,M=!1,_=null,T=null,O=null,G=null,D=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,X=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=X>=2);let j=null,nt={};const rt=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),kt=new Be().fromArray(rt),H=new Be().fromArray(Ct);function K(q,zt,lt,xt){const Bt=new Uint8Array(4),Gt=i.createTexture();i.bindTexture(q,Gt),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ue=0;ue<lt;ue++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(zt,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,Bt):i.texImage2D(zt+ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Bt);return Gt}const ht={};ht[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(i.DEPTH_TEST),a.setFunc(ur),yt(!1),Ot(Jc),ot(i.CULL_FACE),F(pn);function ot(q){h[q]!==!0&&(i.enable(q),h[q]=!0)}function At(q){h[q]!==!1&&(i.disable(q),h[q]=!1)}function Dt(q,zt){return u[q]!==zt?(i.bindFramebuffer(q,zt),u[q]=zt,q===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=zt),q===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=zt),!0):!1}function Ut(q,zt){let lt=p,xt=!1;if(q){lt=f.get(zt),lt===void 0&&(lt=[],f.set(zt,lt));const Bt=q.textures;if(lt.length!==Bt.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let Gt=0,ue=Bt.length;Gt<ue;Gt++)lt[Gt]=i.COLOR_ATTACHMENT0+Gt;lt.length=Bt.length,xt=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,xt=!0);xt&&i.drawBuffers(lt)}function Wt(q){return v!==q?(i.useProgram(q),v=q,!0):!1}const dt={[ai]:i.FUNC_ADD,[gd]:i.FUNC_SUBTRACT,[vd]:i.FUNC_REVERSE_SUBTRACT};dt[xd]=i.MIN,dt[_d]=i.MAX;const _t={[Ur]:i.ZERO,[Md]:i.ONE,[yd]:i.SRC_COLOR,[dl]:i.SRC_ALPHA,[Ed]:i.SRC_ALPHA_SATURATE,[gl]:i.DST_COLOR,[ml]:i.DST_ALPHA,[Sd]:i.ONE_MINUS_SRC_COLOR,[pl]:i.ONE_MINUS_SRC_ALPHA,[wd]:i.ONE_MINUS_DST_COLOR,[bd]:i.ONE_MINUS_DST_ALPHA,[Td]:i.CONSTANT_COLOR,[Ad]:i.ONE_MINUS_CONSTANT_COLOR,[Cd]:i.CONSTANT_ALPHA,[Rd]:i.ONE_MINUS_CONSTANT_ALPHA};function F(q,zt,lt,xt,Bt,Gt,ue,Fe,ke,we){if(q===pn){x===!0&&(At(i.BLEND),x=!1);return}if(x===!1&&(ot(i.BLEND),x=!0),q!==kh){if(q!==m||we!==M){if((d!==ai||g!==ai)&&(i.blendEquation(i.FUNC_ADD),d=ai,g=ai),we)switch(q){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case di:i.blendFunc(i.ONE,i.ONE);break;case Qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case di:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}y=null,S=null,A=null,E=null,b.set(0,0,0),C=0,m=q,M=we}return}Bt=Bt||zt,Gt=Gt||lt,ue=ue||xt,(zt!==d||Bt!==g)&&(i.blendEquationSeparate(dt[zt],dt[Bt]),d=zt,g=Bt),(lt!==y||xt!==S||Gt!==A||ue!==E)&&(i.blendFuncSeparate(_t[lt],_t[xt],_t[Gt],_t[ue]),y=lt,S=xt,A=Gt,E=ue),(Fe.equals(b)===!1||ke!==C)&&(i.blendColor(Fe.r,Fe.g,Fe.b,ke),b.copy(Fe),C=ke),m=q,M=!1}function qt(q,zt){q.side===Ke?At(i.CULL_FACE):ot(i.CULL_FACE);let lt=q.side===Pn;zt&&(lt=!lt),yt(lt),q.blending===Qi&&q.transparent===!1?F(pn):F(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),r.setMask(q.colorWrite);const xt=q.stencilWrite;o.setTest(xt),xt&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ee(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(q){_!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),_=q)}function Ot(q){q!==pd?(ot(i.CULL_FACE),q!==T&&(q===Jc?i.cullFace(i.BACK):q===md?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),T=q}function It(q){q!==O&&(k&&i.lineWidth(q),O=q)}function ee(q,zt,lt){q?(ot(i.POLYGON_OFFSET_FILL),(G!==zt||D!==lt)&&(i.polygonOffset(zt,lt),G=zt,D=lt)):At(i.POLYGON_OFFSET_FILL)}function Y(q){q?ot(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function R(q){q===void 0&&(q=i.TEXTURE0+z-1),j!==q&&(i.activeTexture(q),j=q)}function w(q,zt,lt){lt===void 0&&(j===null?lt=i.TEXTURE0+z-1:lt=j);let xt=nt[lt];xt===void 0&&(xt={type:void 0,texture:void 0},nt[lt]=xt),(xt.type!==q||xt.texture!==zt)&&(j!==lt&&(i.activeTexture(lt),j=lt),i.bindTexture(q,zt||ht[q]),xt.type=q,xt.texture=zt)}function W(){const q=nt[j];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function st(){try{i.texSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ft(){try{i.texSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function St(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function re(){try{i.texStorage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function bt(){try{i.texStorage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Yt(){try{i.texImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ae(){try{i.texImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function le(q){kt.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),kt.copy(q))}function Zt(q){H.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),H.copy(q))}function ye(q,zt){let lt=c.get(zt);lt===void 0&&(lt=new WeakMap,c.set(zt,lt));let xt=lt.get(q);xt===void 0&&(xt=i.getUniformBlockIndex(zt,q.name),lt.set(q,xt))}function ce(q,zt){const xt=c.get(zt).get(q);l.get(zt)!==xt&&(i.uniformBlockBinding(zt,xt,q.__bindingPointIndex),l.set(zt,xt))}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},j=null,nt={},u={},f=new WeakMap,p=[],v=null,x=!1,m=null,d=null,y=null,S=null,g=null,A=null,E=null,b=new Pt(0,0,0),C=0,M=!1,_=null,T=null,O=null,G=null,D=null,kt.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:At,bindFramebuffer:Dt,drawBuffers:Ut,useProgram:Wt,setBlending:F,setMaterial:qt,setFlipSided:yt,setCullFace:Ot,setLineWidth:It,setPolygonOffset:ee,setScissorTest:Y,activeTexture:R,bindTexture:w,unbindTexture:W,compressedTexImage2D:Q,compressedTexImage3D:it,texImage2D:Yt,texImage3D:ae,updateUBOMapping:ye,uniformBlockBinding:ce,texStorage2D:re,texStorage3D:bt,texSubImage2D:st,texSubImage3D:Ft,compressedTexSubImage2D:St,compressedTexSubImage3D:Lt,scissor:le,viewport:Zt,reset:Se}}function Zu(i,t,e,n){const s=rx(n);switch(e){case jh:return i*t;case Kh:return i*t;case Jh:return i*t*2;case oo:return i*t/s.components*s.byteLength;case bc:return i*t/s.components*s.byteLength;case Qh:return i*t*2/s.components*s.byteLength;case wc:return i*t*2/s.components*s.byteLength;case Zh:return i*t*3/s.components*s.byteLength;case $n:return i*t*4/s.components*s.byteLength;case Ec:return i*t*4/s.components*s.byteLength;case Xa:case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ya:case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cl:case Pl:return Math.max(i,16)*Math.max(t,8)/4;case Al:case Rl:return Math.max(i,8)*Math.max(t,8)/2;case Dl:case Ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case zl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case kl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Yl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ja:case $l:case jl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case tf:case Zl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Kl:case Jl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rx(i){switch(i){case yi:case qh:return{byteLength:1,components:1};case Yr:case Yh:case jn:return{byteLength:2,components:1};case yc:case Sc:return{byteLength:2,components:4};case Ss:case Mc:case hi:return{byteLength:4,components:1};case $h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ax(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,w){return p?new OffscreenCanvas(R,w):no("canvas")}function x(R,w,W){let Q=1;const it=Y(R);if((it.width>W||it.height>W)&&(Q=W/Math.max(it.width,it.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const st=Math.floor(Q*it.width),Ft=Math.floor(Q*it.height);u===void 0&&(u=v(st,Ft));const St=w?v(st,Ft):u;return St.width=st,St.height=Ft,St.getContext("2d").drawImage(R,0,0,st,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+st+"x"+Ft+")."),St}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,w,W,Q,it=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let st=w;if(w===i.RED&&(W===i.FLOAT&&(st=i.R32F),W===i.HALF_FLOAT&&(st=i.R16F),W===i.UNSIGNED_BYTE&&(st=i.R8)),w===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(st=i.R8UI),W===i.UNSIGNED_SHORT&&(st=i.R16UI),W===i.UNSIGNED_INT&&(st=i.R32UI),W===i.BYTE&&(st=i.R8I),W===i.SHORT&&(st=i.R16I),W===i.INT&&(st=i.R32I)),w===i.RG&&(W===i.FLOAT&&(st=i.RG32F),W===i.HALF_FLOAT&&(st=i.RG16F),W===i.UNSIGNED_BYTE&&(st=i.RG8)),w===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(st=i.RG8UI),W===i.UNSIGNED_SHORT&&(st=i.RG16UI),W===i.UNSIGNED_INT&&(st=i.RG32UI),W===i.BYTE&&(st=i.RG8I),W===i.SHORT&&(st=i.RG16I),W===i.INT&&(st=i.RG32I)),w===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(st=i.RGB8UI),W===i.UNSIGNED_SHORT&&(st=i.RGB16UI),W===i.UNSIGNED_INT&&(st=i.RGB32UI),W===i.BYTE&&(st=i.RGB8I),W===i.SHORT&&(st=i.RGB16I),W===i.INT&&(st=i.RGB32I)),w===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),W===i.UNSIGNED_INT&&(st=i.RGBA32UI),W===i.BYTE&&(st=i.RGBA8I),W===i.SHORT&&(st=i.RGBA16I),W===i.INT&&(st=i.RGBA32I)),w===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),w===i.RGBA){const Ft=it?lo:Pe.getTransfer(Q);W===i.FLOAT&&(st=i.RGBA32F),W===i.HALF_FLOAT&&(st=i.RGBA16F),W===i.UNSIGNED_BYTE&&(st=Ft===Oe?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function g(R,w){let W;return R?w===null||w===Ss||w===bs?W=i.DEPTH24_STENCIL8:w===hi?W=i.DEPTH32F_STENCIL8:w===Yr&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ss||w===bs?W=i.DEPTH_COMPONENT24:w===hi?W=i.DEPTH_COMPONENT32F:w===Yr&&(W=i.DEPTH_COMPONENT16),W}function A(R,w){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==vn&&R.minFilter!==xi?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function E(R){const w=R.target;w.removeEventListener("dispose",E),C(w),w.isVideoTexture&&h.delete(w)}function b(R){const w=R.target;w.removeEventListener("dispose",b),_(w)}function C(R){const w=n.get(R);if(w.__webglInit===void 0)return;const W=R.source,Q=f.get(W);if(Q){const it=Q[w.__cacheKey];it.usedTimes--,it.usedTimes===0&&M(R),Object.keys(Q).length===0&&f.delete(W)}n.remove(R)}function M(R){const w=n.get(R);i.deleteTexture(w.__webglTexture);const W=R.source,Q=f.get(W);delete Q[w.__cacheKey],a.memory.textures--}function _(R){const w=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(w.__webglFramebuffer[Q]))for(let it=0;it<w.__webglFramebuffer[Q].length;it++)i.deleteFramebuffer(w.__webglFramebuffer[Q][it]);else i.deleteFramebuffer(w.__webglFramebuffer[Q]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[Q])}else{if(Array.isArray(w.__webglFramebuffer))for(let Q=0;Q<w.__webglFramebuffer.length;Q++)i.deleteFramebuffer(w.__webglFramebuffer[Q]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Q=0;Q<w.__webglColorRenderbuffer.length;Q++)w.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[Q]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const W=R.textures;for(let Q=0,it=W.length;Q<it;Q++){const st=n.get(W[Q]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),a.memory.textures--),n.remove(W[Q])}n.remove(R)}let T=0;function O(){T=0}function G(){const R=T;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),T+=1,R}function D(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function z(R,w){const W=n.get(R);if(R.isVideoTexture&&It(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(W,R,w);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+w)}function k(R,w){const W=n.get(R);if(R.version>0&&W.__version!==R.version){H(W,R,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+w)}function X(R,w){const W=n.get(R);if(R.version>0&&W.__version!==R.version){H(W,R,w);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+w)}function V(R,w){const W=n.get(R);if(R.version>0&&W.__version!==R.version){K(W,R,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+w)}const j={[Mi]:i.REPEAT,[ps]:i.CLAMP_TO_EDGE,[Tl]:i.MIRRORED_REPEAT},nt={[vn]:i.NEAREST,[Id]:i.NEAREST_MIPMAP_NEAREST,[ca]:i.NEAREST_MIPMAP_LINEAR,[xi]:i.LINEAR,[bo]:i.LINEAR_MIPMAP_NEAREST,[ms]:i.LINEAR_MIPMAP_LINEAR},rt={[Fd]:i.NEVER,[Hd]:i.ALWAYS,[Od]:i.LESS,[ef]:i.LEQUAL,[kd]:i.EQUAL,[Vd]:i.GEQUAL,[Bd]:i.GREATER,[Gd]:i.NOTEQUAL};function Ct(R,w){if(w.type===hi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===xi||w.magFilter===bo||w.magFilter===ca||w.magFilter===ms||w.minFilter===xi||w.minFilter===bo||w.minFilter===ca||w.minFilter===ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,j[w.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,j[w.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,j[w.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,nt[w.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,nt[w.minFilter]),w.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,rt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===vn||w.minFilter!==ca&&w.minFilter!==ms||w.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function kt(R,w){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",E));const Q=w.source;let it=f.get(Q);it===void 0&&(it={},f.set(Q,it));const st=D(w);if(st!==R.__cacheKey){it[st]===void 0&&(it[st]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),it[st].usedTimes++;const Ft=it[R.__cacheKey];Ft!==void 0&&(it[R.__cacheKey].usedTimes--,Ft.usedTimes===0&&M(w)),R.__cacheKey=st,R.__webglTexture=it[st].texture}return W}function H(R,w,W){let Q=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Q=i.TEXTURE_3D);const it=kt(R,w),st=w.source;e.bindTexture(Q,R.__webglTexture,i.TEXTURE0+W);const Ft=n.get(st);if(st.version!==Ft.__version||it===!0){e.activeTexture(i.TEXTURE0+W);const St=Pe.getPrimaries(Pe.workingColorSpace),Lt=w.colorSpace===Zi?null:Pe.getPrimaries(w.colorSpace),re=w.colorSpace===Zi||St===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let bt=x(w.image,!1,s.maxTextureSize);bt=ee(w,bt);const Yt=r.convert(w.format,w.colorSpace),ae=r.convert(w.type);let le=S(w.internalFormat,Yt,ae,w.colorSpace,w.isVideoTexture);Ct(Q,w);let Zt;const ye=w.mipmaps,ce=w.isVideoTexture!==!0,Se=Ft.__version===void 0||it===!0,q=st.dataReady,zt=A(w,bt);if(w.isDepthTexture)le=g(w.format===ws,w.type),Se&&(ce?e.texStorage2D(i.TEXTURE_2D,1,le,bt.width,bt.height):e.texImage2D(i.TEXTURE_2D,0,le,bt.width,bt.height,0,Yt,ae,null));else if(w.isDataTexture)if(ye.length>0){ce&&Se&&e.texStorage2D(i.TEXTURE_2D,zt,le,ye[0].width,ye[0].height);for(let lt=0,xt=ye.length;lt<xt;lt++)Zt=ye[lt],ce?q&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Zt.width,Zt.height,Yt,ae,Zt.data):e.texImage2D(i.TEXTURE_2D,lt,le,Zt.width,Zt.height,0,Yt,ae,Zt.data);w.generateMipmaps=!1}else ce?(Se&&e.texStorage2D(i.TEXTURE_2D,zt,le,bt.width,bt.height),q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt.width,bt.height,Yt,ae,bt.data)):e.texImage2D(i.TEXTURE_2D,0,le,bt.width,bt.height,0,Yt,ae,bt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ce&&Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,le,ye[0].width,ye[0].height,bt.depth);for(let lt=0,xt=ye.length;lt<xt;lt++)if(Zt=ye[lt],w.format!==$n)if(Yt!==null)if(ce){if(q)if(w.layerUpdates.size>0){const Bt=Zu(Zt.width,Zt.height,w.format,w.type);for(const Gt of w.layerUpdates){const ue=Zt.data.subarray(Gt*Bt/Zt.data.BYTES_PER_ELEMENT,(Gt+1)*Bt/Zt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,Gt,Zt.width,Zt.height,1,Yt,ue)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Zt.width,Zt.height,bt.depth,Yt,Zt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,le,Zt.width,Zt.height,bt.depth,0,Zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Zt.width,Zt.height,bt.depth,Yt,ae,Zt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,le,Zt.width,Zt.height,bt.depth,0,Yt,ae,Zt.data)}else{ce&&Se&&e.texStorage2D(i.TEXTURE_2D,zt,le,ye[0].width,ye[0].height);for(let lt=0,xt=ye.length;lt<xt;lt++)Zt=ye[lt],w.format!==$n?Yt!==null?ce?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,Zt.width,Zt.height,Yt,Zt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,le,Zt.width,Zt.height,0,Zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?q&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Zt.width,Zt.height,Yt,ae,Zt.data):e.texImage2D(i.TEXTURE_2D,lt,le,Zt.width,Zt.height,0,Yt,ae,Zt.data)}else if(w.isDataArrayTexture)if(ce){if(Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,le,bt.width,bt.height,bt.depth),q)if(w.layerUpdates.size>0){const lt=Zu(bt.width,bt.height,w.format,w.type);for(const xt of w.layerUpdates){const Bt=bt.data.subarray(xt*lt/bt.data.BYTES_PER_ELEMENT,(xt+1)*lt/bt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xt,bt.width,bt.height,1,Yt,ae,Bt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Yt,ae,bt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,le,bt.width,bt.height,bt.depth,0,Yt,ae,bt.data);else if(w.isData3DTexture)ce?(Se&&e.texStorage3D(i.TEXTURE_3D,zt,le,bt.width,bt.height,bt.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Yt,ae,bt.data)):e.texImage3D(i.TEXTURE_3D,0,le,bt.width,bt.height,bt.depth,0,Yt,ae,bt.data);else if(w.isFramebufferTexture){if(Se)if(ce)e.texStorage2D(i.TEXTURE_2D,zt,le,bt.width,bt.height);else{let lt=bt.width,xt=bt.height;for(let Bt=0;Bt<zt;Bt++)e.texImage2D(i.TEXTURE_2D,Bt,le,lt,xt,0,Yt,ae,null),lt>>=1,xt>>=1}}else if(ye.length>0){if(ce&&Se){const lt=Y(ye[0]);e.texStorage2D(i.TEXTURE_2D,zt,le,lt.width,lt.height)}for(let lt=0,xt=ye.length;lt<xt;lt++)Zt=ye[lt],ce?q&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Yt,ae,Zt):e.texImage2D(i.TEXTURE_2D,lt,le,Yt,ae,Zt);w.generateMipmaps=!1}else if(ce){if(Se){const lt=Y(bt);e.texStorage2D(i.TEXTURE_2D,zt,le,lt.width,lt.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Yt,ae,bt)}else e.texImage2D(i.TEXTURE_2D,0,le,Yt,ae,bt);m(w)&&d(Q),Ft.__version=st.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function K(R,w,W){if(w.image.length!==6)return;const Q=kt(R,w),it=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+W);const st=n.get(it);if(it.version!==st.__version||Q===!0){e.activeTexture(i.TEXTURE0+W);const Ft=Pe.getPrimaries(Pe.workingColorSpace),St=w.colorSpace===Zi?null:Pe.getPrimaries(w.colorSpace),Lt=w.colorSpace===Zi||Ft===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const re=w.isCompressedTexture||w.image[0].isCompressedTexture,bt=w.image[0]&&w.image[0].isDataTexture,Yt=[];for(let xt=0;xt<6;xt++)!re&&!bt?Yt[xt]=x(w.image[xt],!0,s.maxCubemapSize):Yt[xt]=bt?w.image[xt].image:w.image[xt],Yt[xt]=ee(w,Yt[xt]);const ae=Yt[0],le=r.convert(w.format,w.colorSpace),Zt=r.convert(w.type),ye=S(w.internalFormat,le,Zt,w.colorSpace),ce=w.isVideoTexture!==!0,Se=st.__version===void 0||Q===!0,q=it.dataReady;let zt=A(w,ae);Ct(i.TEXTURE_CUBE_MAP,w);let lt;if(re){ce&&Se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,ye,ae.width,ae.height);for(let xt=0;xt<6;xt++){lt=Yt[xt].mipmaps;for(let Bt=0;Bt<lt.length;Bt++){const Gt=lt[Bt];w.format!==$n?le!==null?ce?q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt,0,0,Gt.width,Gt.height,le,Gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt,ye,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt,0,0,Gt.width,Gt.height,le,Zt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt,ye,Gt.width,Gt.height,0,le,Zt,Gt.data)}}}else{if(lt=w.mipmaps,ce&&Se){lt.length>0&&zt++;const xt=Y(Yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,ye,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(bt){ce?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Yt[xt].width,Yt[xt].height,le,Zt,Yt[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ye,Yt[xt].width,Yt[xt].height,0,le,Zt,Yt[xt].data);for(let Bt=0;Bt<lt.length;Bt++){const ue=lt[Bt].image[xt].image;ce?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt+1,0,0,ue.width,ue.height,le,Zt,ue.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt+1,ye,ue.width,ue.height,0,le,Zt,ue.data)}}else{ce?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,le,Zt,Yt[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ye,le,Zt,Yt[xt]);for(let Bt=0;Bt<lt.length;Bt++){const Gt=lt[Bt];ce?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt+1,0,0,le,Zt,Gt.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt+1,ye,le,Zt,Gt.image[xt])}}}m(w)&&d(i.TEXTURE_CUBE_MAP),st.__version=it.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ht(R,w,W,Q,it,st){const Ft=r.convert(W.format,W.colorSpace),St=r.convert(W.type),Lt=S(W.internalFormat,Ft,St,W.colorSpace),re=n.get(w),bt=n.get(W);if(bt.__renderTarget=w,!re.__hasExternalTextures){const Yt=Math.max(1,w.width>>st),ae=Math.max(1,w.height>>st);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,st,Lt,Yt,ae,w.depth,0,Ft,St,null):e.texImage2D(it,st,Lt,Yt,ae,0,Ft,St,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Ot(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,it,bt.__webglTexture,0,yt(w)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,it,bt.__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(R,w,W){if(i.bindRenderbuffer(i.RENDERBUFFER,R),w.depthBuffer){const Q=w.depthTexture,it=Q&&Q.isDepthTexture?Q.type:null,st=g(w.stencilBuffer,it),Ft=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=yt(w);Ot(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St,st,w.width,w.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,St,st,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,st,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,R)}else{const Q=w.textures;for(let it=0;it<Q.length;it++){const st=Q[it],Ft=r.convert(st.format,st.colorSpace),St=r.convert(st.type),Lt=S(st.internalFormat,Ft,St,st.colorSpace),re=yt(w);W&&Ot(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,Lt,w.width,w.height):Ot(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,Lt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(w.depthTexture);Q.__renderTarget=w,(!Q.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),z(w.depthTexture,0);const it=Q.__webglTexture,st=yt(w);if(w.depthTexture.format===er)Ot(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(w.depthTexture.format===ws)Ot(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Dt(R){const w=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Q){const it=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Q.removeEventListener("dispose",it)};Q.addEventListener("dispose",it),w.__depthDisposeCallback=it}w.__boundDepthTexture=Q}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");At(w.__webglFramebuffer,R)}else if(W){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]===void 0)w.__webglDepthbuffer[Q]=i.createRenderbuffer(),ot(w.__webglDepthbuffer[Q],R,!1);else{const it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=w.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,st)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ot(w.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(R,w,W){const Q=n.get(R);w!==void 0&&ht(Q.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Dt(R)}function Wt(R){const w=R.texture,W=n.get(R),Q=n.get(w);R.addEventListener("dispose",b);const it=R.textures,st=R.isWebGLCubeRenderTarget===!0,Ft=it.length>1;if(Ft||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=w.version,a.memory.textures++),st){W.__webglFramebuffer=[];for(let St=0;St<6;St++)if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer[St]=[];for(let Lt=0;Lt<w.mipmaps.length;Lt++)W.__webglFramebuffer[St][Lt]=i.createFramebuffer()}else W.__webglFramebuffer[St]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer=[];for(let St=0;St<w.mipmaps.length;St++)W.__webglFramebuffer[St]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let St=0,Lt=it.length;St<Lt;St++){const re=n.get(it[St]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Ot(R)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let St=0;St<it.length;St++){const Lt=it[St];W.__webglColorRenderbuffer[St]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[St]);const re=r.convert(Lt.format,Lt.colorSpace),bt=r.convert(Lt.type),Yt=S(Lt.internalFormat,re,bt,Lt.colorSpace,R.isXRRenderTarget===!0),ae=yt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,Yt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,W.__webglColorRenderbuffer[St])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(W.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Ct(i.TEXTURE_CUBE_MAP,w);for(let St=0;St<6;St++)if(w.mipmaps&&w.mipmaps.length>0)for(let Lt=0;Lt<w.mipmaps.length;Lt++)ht(W.__webglFramebuffer[St][Lt],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Lt);else ht(W.__webglFramebuffer[St],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);m(w)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let St=0,Lt=it.length;St<Lt;St++){const re=it[St],bt=n.get(re);e.bindTexture(i.TEXTURE_2D,bt.__webglTexture),Ct(i.TEXTURE_2D,re),ht(W.__webglFramebuffer,R,re,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,0),m(re)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let St=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(St=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,Q.__webglTexture),Ct(St,w),w.mipmaps&&w.mipmaps.length>0)for(let Lt=0;Lt<w.mipmaps.length;Lt++)ht(W.__webglFramebuffer[Lt],R,w,i.COLOR_ATTACHMENT0,St,Lt);else ht(W.__webglFramebuffer,R,w,i.COLOR_ATTACHMENT0,St,0);m(w)&&d(St),e.unbindTexture()}R.depthBuffer&&Dt(R)}function dt(R){const w=R.textures;for(let W=0,Q=w.length;W<Q;W++){const it=w[W];if(m(it)){const st=y(R),Ft=n.get(it).__webglTexture;e.bindTexture(st,Ft),d(st),e.unbindTexture()}}}const _t=[],F=[];function qt(R){if(R.samples>0){if(Ot(R)===!1){const w=R.textures,W=R.width,Q=R.height;let it=i.COLOR_BUFFER_BIT;const st=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=n.get(R),St=w.length>1;if(St)for(let Lt=0;Lt<w.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Lt=0;Lt<w.length;Lt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),St){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Lt]);const re=n.get(w[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,W,Q,0,0,W,Q,it,i.NEAREST),l===!0&&(_t.length=0,F.length=0,_t.push(i.COLOR_ATTACHMENT0+Lt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(_t.push(st),F.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),St)for(let Lt=0;Lt<w.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Lt]);const re=n.get(w[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,re,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function yt(R){return Math.min(s.maxSamples,R.samples)}function Ot(R){const w=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function It(R){const w=a.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function ee(R,w){const W=R.colorSpace,Q=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==_r&&W!==Zi&&(Pe.getTransfer(W)===Oe?(Q!==$n||it!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),w}function Y(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=O,this.setTexture2D=z,this.setTexture2DArray=k,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=Ut,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Ot}function ox(i,t){function e(n,s=Zi){let r;const a=Pe.getTransfer(s);if(n===yi)return i.UNSIGNED_BYTE;if(n===yc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$h)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qh)return i.BYTE;if(n===Yh)return i.SHORT;if(n===Yr)return i.UNSIGNED_SHORT;if(n===Mc)return i.INT;if(n===Ss)return i.UNSIGNED_INT;if(n===hi)return i.FLOAT;if(n===jn)return i.HALF_FLOAT;if(n===jh)return i.ALPHA;if(n===Zh)return i.RGB;if(n===$n)return i.RGBA;if(n===Kh)return i.LUMINANCE;if(n===Jh)return i.LUMINANCE_ALPHA;if(n===er)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===oo)return i.RED;if(n===bc)return i.RED_INTEGER;if(n===Qh)return i.RG;if(n===wc)return i.RG_INTEGER;if(n===Ec)return i.RGBA_INTEGER;if(n===Xa||n===qa||n===Ya||n===$a)if(a===Oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Al||n===Cl||n===Rl||n===Pl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dl||n===Ll||n===Il)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dl||n===Ll)return a===Oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Il)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ul||n===Nl||n===zl||n===Fl||n===Ol||n===kl||n===Bl||n===Gl||n===Vl||n===Hl||n===Wl||n===Xl||n===ql||n===Yl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ul)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ol)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ql)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yl)return a===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ja||n===$l||n===jl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ja)return a===Oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tf||n===Zl||n===Kl||n===Jl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ja)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class lx extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _e extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cx={type:"move"};class Zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new _e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ux=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hx=`
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

}`;class fx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new bn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new $e({vertexShader:ux,fragmentShader:hx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new Zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dx extends Mr{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,v=null;const x=new fx,m=e.getContextAttributes();let d=null,y=null;const S=[],g=[],A=new Et;let E=null;const b=new kn;b.viewport=new Be;const C=new kn;C.viewport=new Be;const M=[b,C],_=new lx;let T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let K=S[H];return K===void 0&&(K=new Zo,S[H]=K),K.getTargetRaySpace()},this.getControllerGrip=function(H){let K=S[H];return K===void 0&&(K=new Zo,S[H]=K),K.getGripSpace()},this.getHand=function(H){let K=S[H];return K===void 0&&(K=new Zo,S[H]=K),K.getHandSpace()};function G(H){const K=g.indexOf(H.inputSource);if(K===-1)return;const ht=S[K];ht!==void 0&&(ht.update(H.inputSource,H.frame,c||a),ht.dispatchEvent({type:H.type,data:H.inputSource}))}function D(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",z);for(let H=0;H<S.length;H++){const K=g[H];K!==null&&(g[H]=null,S[H].disconnect(K))}T=null,O=null,x.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,y=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",D),s.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new In(p.framebufferWidth,p.framebufferHeight,{format:$n,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,ht=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=m.stencil?ws:er,ht=m.stencil?bs:Ss);const At={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(At),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new In(f.textureWidth,f.textureHeight,{format:$n,type:yi,depthTexture:new Ic(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function z(H){for(let K=0;K<H.removed.length;K++){const ht=H.removed[K],ot=g.indexOf(ht);ot>=0&&(g[ot]=null,S[ot].disconnect(ht))}for(let K=0;K<H.added.length;K++){const ht=H.added[K];let ot=g.indexOf(ht);if(ot===-1){for(let Dt=0;Dt<S.length;Dt++)if(Dt>=g.length){g.push(ht),ot=Dt;break}else if(g[Dt]===null){g[Dt]=ht,ot=Dt;break}if(ot===-1)break}const At=S[ot];At&&At.connect(ht)}}const k=new B,X=new B;function V(H,K,ht){k.setFromMatrixPosition(K.matrixWorld),X.setFromMatrixPosition(ht.matrixWorld);const ot=k.distanceTo(X),At=K.projectionMatrix.elements,Dt=ht.projectionMatrix.elements,Ut=At[14]/(At[10]-1),Wt=At[14]/(At[10]+1),dt=(At[9]+1)/At[5],_t=(At[9]-1)/At[5],F=(At[8]-1)/At[0],qt=(Dt[8]+1)/Dt[0],yt=Ut*F,Ot=Ut*qt,It=ot/(-F+qt),ee=It*-F;if(K.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(ee),H.translateZ(It),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),At[10]===-1)H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Y=Ut+It,R=Wt+It,w=yt-ee,W=Ot+(ot-ee),Q=dt*Wt/R*Y,it=_t*Wt/R*Y;H.projectionMatrix.makePerspective(w,W,Q,it,Y,R),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function j(H,K){K===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(K.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let K=H.near,ht=H.far;x.texture!==null&&(x.depthNear>0&&(K=x.depthNear),x.depthFar>0&&(ht=x.depthFar)),_.near=C.near=b.near=K,_.far=C.far=b.far=ht,(T!==_.near||O!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,O=_.far),b.layers.mask=H.layers.mask|2,C.layers.mask=H.layers.mask|4,_.layers.mask=b.layers.mask|C.layers.mask;const ot=H.parent,At=_.cameras;j(_,ot);for(let Dt=0;Dt<At.length;Dt++)j(At[Dt],ot);At.length===2?V(_,b,C):_.projectionMatrix.copy(b.projectionMatrix),nt(H,_,ot)};function nt(H,K,ht){ht===null?H.matrix.copy(K.matrixWorld):(H.matrix.copy(ht.matrixWorld),H.matrix.invert(),H.matrix.multiply(K.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=$r*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let rt=null;function Ct(H,K){if(h=K.getViewerPose(c||a),v=K,h!==null){const ht=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let ot=!1;ht.length!==_.cameras.length&&(_.cameras.length=0,ot=!0);for(let Dt=0;Dt<ht.length;Dt++){const Ut=ht[Dt];let Wt=null;if(p!==null)Wt=p.getViewport(Ut);else{const _t=u.getViewSubImage(f,Ut);Wt=_t.viewport,Dt===0&&(t.setRenderTargetTextures(y,_t.colorTexture,f.ignoreDepthValues?void 0:_t.depthStencilTexture),t.setRenderTarget(y))}let dt=M[Dt];dt===void 0&&(dt=new kn,dt.layers.enable(Dt),dt.viewport=new Be,M[Dt]=dt),dt.matrix.fromArray(Ut.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(Ut.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),Dt===0&&(_.matrix.copy(dt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ot===!0&&_.cameras.push(dt)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){const Dt=u.getDepthInformation(ht[0]);Dt&&Dt.isValid&&Dt.texture&&x.init(t,Dt,s.renderState)}}for(let ht=0;ht<S.length;ht++){const ot=g[ht],At=S[ht];ot!==null&&At!==void 0&&At.update(ot,K,c||a)}rt&&rt(H,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),v=null}const kt=new ff;kt.setAnimationLoop(Ct),this.setAnimationLoop=function(H){rt=H},this.dispose=function(){}}}const ls=new Si,px=new Le;function mx(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,cf(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,S,g){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,g)):d.isMeshMatcapMaterial?(r(m,d),v(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,y,S):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Pn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Pn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=t.get(d),S=y.envMap,g=y.envMapRotation;S&&(m.envMap.value=S,ls.copy(g),ls.x*=-1,ls.y*=-1,ls.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),m.envMapRotation.value.setFromMatrix4(px.makeRotationFromEuler(ls)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=S*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const y=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gx(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const g=S.program;n.uniformBlockBinding(y,g)}function c(y,S){let g=s[y.id];g===void 0&&(v(y),g=h(y),s[y.id]=g,y.addEventListener("dispose",m));const A=S.program;n.updateUBOMapping(y,A);const E=t.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function h(y){const S=u();y.__bindingPointIndex=S;const g=i.createBuffer(),A=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,g),g}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const S=s[y.id],g=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let E=0,b=g.length;E<b;E++){const C=Array.isArray(g[E])?g[E]:[g[E]];for(let M=0,_=C.length;M<_;M++){const T=C[M];if(p(T,E,M,A)===!0){const O=T.__offset,G=Array.isArray(T.value)?T.value:[T.value];let D=0;for(let z=0;z<G.length;z++){const k=G[z],X=x(k);typeof k=="number"||typeof k=="boolean"?(T.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,O+D,T.__data)):k.isMatrix3?(T.__data[0]=k.elements[0],T.__data[1]=k.elements[1],T.__data[2]=k.elements[2],T.__data[3]=0,T.__data[4]=k.elements[3],T.__data[5]=k.elements[4],T.__data[6]=k.elements[5],T.__data[7]=0,T.__data[8]=k.elements[6],T.__data[9]=k.elements[7],T.__data[10]=k.elements[8],T.__data[11]=0):(k.toArray(T.__data,D),D+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,S,g,A){const E=y.value,b=S+"_"+g;if(A[b]===void 0)return typeof E=="number"||typeof E=="boolean"?A[b]=E:A[b]=E.clone(),!0;{const C=A[b];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return A[b]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function v(y){const S=y.uniforms;let g=0;const A=16;for(let b=0,C=S.length;b<C;b++){const M=Array.isArray(S[b])?S[b]:[S[b]];for(let _=0,T=M.length;_<T;_++){const O=M[_],G=Array.isArray(O.value)?O.value:[O.value];for(let D=0,z=G.length;D<z;D++){const k=G[D],X=x(k),V=g%A,j=V%X.boundary,nt=V+j;g+=j,nt!==0&&A-nt<X.storage&&(g+=A-nt),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=g,g+=X.storage}}}const E=g%A;return E>0&&(g+=A-E),y.__size=g,y.__cache={},this}function x(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const g=a.indexOf(S.__bindingPointIndex);a.splice(g,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function d(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class vx{constructor(t={}){const{canvas:e=ap(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const v=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const y=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=ts,this.toneMappingExposure=1;const g=this;let A=!1,E=0,b=0,C=null,M=-1,_=null;const T=new Be,O=new Be;let G=null;const D=new Pt(0);let z=0,k=e.width,X=e.height,V=1,j=null,nt=null;const rt=new Be(0,0,k,X),Ct=new Be(0,0,k,X);let kt=!1;const H=new Pc;let K=!1,ht=!1;const ot=new Le,At=new Le,Dt=new B,Ut=new Be,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function _t(){return C===null?V:1}let F=n;function qt(P,Z){return e.getContext(P,Z)}try{const P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vc}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Bt,!1),e.addEventListener("webglcontextcreationerror",Gt,!1),F===null){const Z="webgl2";if(F=qt(Z,P),F===null)throw qt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let yt,Ot,It,ee,Y,R,w,W,Q,it,st,Ft,St,Lt,re,bt,Yt,ae,le,Zt,ye,ce,Se,q;function zt(){yt=new Sg(F),yt.init(),ce=new ox(F,yt),Ot=new gg(F,yt,t,ce),It=new sx(F,yt),Ot.reverseDepthBuffer&&f&&It.buffers.depth.setReversed(!0),ee=new Eg(F),Y=new Hv,R=new ax(F,yt,It,Y,Ot,ce,ee),w=new xg(g),W=new yg(g),Q=new Lp(F),Se=new pg(F,Q),it=new bg(F,Q,ee,Se),st=new Ag(F,it,Q,ee),le=new Tg(F,Ot,R),bt=new vg(Y),Ft=new Vv(g,w,W,yt,Ot,Se,bt),St=new mx(g,Y),Lt=new Xv,re=new Kv(yt),ae=new dg(g,w,W,It,st,p,l),Yt=new nx(g,st,Ot),q=new gx(F,ee,Ot,It),Zt=new mg(F,yt,ee),ye=new wg(F,yt,ee),ee.programs=Ft.programs,g.capabilities=Ot,g.extensions=yt,g.properties=Y,g.renderLists=Lt,g.shadowMap=Yt,g.state=It,g.info=ee}zt();const lt=new dx(g,F);this.xr=lt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const P=yt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=yt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(P){P!==void 0&&(V=P,this.setSize(k,X,!1))},this.getSize=function(P){return P.set(k,X)},this.setSize=function(P,Z,at=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=P,X=Z,e.width=Math.floor(P*V),e.height=Math.floor(Z*V),at===!0&&(e.style.width=P+"px",e.style.height=Z+"px"),this.setViewport(0,0,P,Z)},this.getDrawingBufferSize=function(P){return P.set(k*V,X*V).floor()},this.setDrawingBufferSize=function(P,Z,at){k=P,X=Z,V=at,e.width=Math.floor(P*at),e.height=Math.floor(Z*at),this.setViewport(0,0,P,Z)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(rt)},this.setViewport=function(P,Z,at,ct){P.isVector4?rt.set(P.x,P.y,P.z,P.w):rt.set(P,Z,at,ct),It.viewport(T.copy(rt).multiplyScalar(V).round())},this.getScissor=function(P){return P.copy(Ct)},this.setScissor=function(P,Z,at,ct){P.isVector4?Ct.set(P.x,P.y,P.z,P.w):Ct.set(P,Z,at,ct),It.scissor(O.copy(Ct).multiplyScalar(V).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(P){It.setScissorTest(kt=P)},this.setOpaqueSort=function(P){j=P},this.setTransparentSort=function(P){nt=P},this.getClearColor=function(P){return P.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(P=!0,Z=!0,at=!0){let ct=0;if(P){let $=!1;if(C!==null){const Nt=C.texture.format;$=Nt===Ec||Nt===wc||Nt===bc}if($){const Nt=C.texture.type,$t=Nt===yi||Nt===Ss||Nt===Yr||Nt===bs||Nt===yc||Nt===Sc,ne=ae.getClearColor(),ie=ae.getClearAlpha(),ge=ne.r,L=ne.g,N=ne.b;$t?(v[0]=ge,v[1]=L,v[2]=N,v[3]=ie,F.clearBufferuiv(F.COLOR,0,v)):(x[0]=ge,x[1]=L,x[2]=N,x[3]=ie,F.clearBufferiv(F.COLOR,0,x))}else ct|=F.COLOR_BUFFER_BIT}Z&&(ct|=F.DEPTH_BUFFER_BIT),at&&(ct|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Bt,!1),e.removeEventListener("webglcontextcreationerror",Gt,!1),Lt.dispose(),re.dispose(),Y.dispose(),w.dispose(),W.dispose(),st.dispose(),Se.dispose(),q.dispose(),Ft.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Kn),lt.removeEventListener("sessionend",U),vt.stop()};function xt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const P=ee.autoReset,Z=Yt.enabled,at=Yt.autoUpdate,ct=Yt.needsUpdate,$=Yt.type;zt(),ee.autoReset=P,Yt.enabled=Z,Yt.autoUpdate=at,Yt.needsUpdate=ct,Yt.type=$}function Gt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ue(P){const Z=P.target;Z.removeEventListener("dispose",ue),Fe(Z)}function Fe(P){ke(P),Y.remove(P)}function ke(P){const Z=Y.get(P).programs;Z!==void 0&&(Z.forEach(function(at){Ft.releaseProgram(at)}),P.isShaderMaterial&&Ft.releaseShaderCache(P))}this.renderBufferDirect=function(P,Z,at,ct,$,Nt){Z===null&&(Z=Wt);const $t=$.isMesh&&$.matrixWorld.determinant()<0,ne=rn(P,Z,at,ct,$);It.setMaterial(ct,$t);let ie=at.index,ge=1;if(ct.wireframe===!0){if(ie=it.getWireframeAttribute(at),ie===void 0)return;ge=2}const L=at.drawRange,N=at.attributes.position;let tt=L.start*ge,pt=(L.start+L.count)*ge;Nt!==null&&(tt=Math.max(tt,Nt.start*ge),pt=Math.min(pt,(Nt.start+Nt.count)*ge)),ie!==null?(tt=Math.max(tt,0),pt=Math.min(pt,ie.count)):N!=null&&(tt=Math.max(tt,0),pt=Math.min(pt,N.count));const Mt=pt-tt;if(Mt<0||Mt===1/0)return;Se.setup($,ct,ne,at,ie);let Rt,wt=Zt;if(ie!==null&&(Rt=Q.get(ie),wt=ye,wt.setIndex(Rt)),$.isMesh)ct.wireframe===!0?(It.setLineWidth(ct.wireframeLinewidth*_t()),wt.setMode(F.LINES)):wt.setMode(F.TRIANGLES);else if($.isLine){let et=ct.linewidth;et===void 0&&(et=1),It.setLineWidth(et*_t()),$.isLineSegments?wt.setMode(F.LINES):$.isLineLoop?wt.setMode(F.LINE_LOOP):wt.setMode(F.LINE_STRIP)}else $.isPoints?wt.setMode(F.POINTS):$.isSprite&&wt.setMode(F.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)wt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))wt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const et=$._multiDrawStarts,Xt=$._multiDrawCounts,Vt=$._multiDrawCount,he=ie?Q.get(ie).bytesPerElement:1,Ae=Y.get(ct).currentProgram.getUniforms();for(let Re=0;Re<Vt;Re++)Ae.setValue(F,"_gl_DrawID",Re),wt.render(et[Re]/he,Xt[Re])}else if($.isInstancedMesh)wt.renderInstances(tt,Mt,$.count);else if(at.isInstancedBufferGeometry){const et=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Xt=Math.min(at.instanceCount,et);wt.renderInstances(tt,Mt,Xt)}else wt.render(tt,Mt)};function we(P,Z,at){P.transparent===!0&&P.side===Ke&&P.forceSinglePass===!1?(P.side=Pn,P.needsUpdate=!0,se(P,Z,at),P.side=es,P.needsUpdate=!0,se(P,Z,at),P.side=Ke):se(P,Z,at)}this.compile=function(P,Z,at=null){at===null&&(at=P),d=re.get(at),d.init(Z),S.push(d),at.traverseVisible(function($){$.isLight&&$.layers.test(Z.layers)&&(d.pushLight($),$.castShadow&&d.pushShadow($))}),P!==at&&P.traverseVisible(function($){$.isLight&&$.layers.test(Z.layers)&&(d.pushLight($),$.castShadow&&d.pushShadow($))}),d.setupLights();const ct=new Set;return P.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Nt=$.material;if(Nt)if(Array.isArray(Nt))for(let $t=0;$t<Nt.length;$t++){const ne=Nt[$t];we(ne,at,$),ct.add(ne)}else we(Nt,at,$),ct.add(Nt)}),S.pop(),d=null,ct},this.compileAsync=function(P,Z,at=null){const ct=this.compile(P,Z,at);return new Promise($=>{function Nt(){if(ct.forEach(function($t){Y.get($t).currentProgram.isReady()&&ct.delete($t)}),ct.size===0){$(P);return}setTimeout(Nt,10)}yt.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let xn=null;function dn(P){xn&&xn(P)}function Kn(){vt.stop()}function U(){vt.start()}const vt=new ff;vt.setAnimationLoop(dn),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(P){xn=P,lt.setAnimationLoop(P),P===null?vt.stop():vt.start()},lt.addEventListener("sessionstart",Kn),lt.addEventListener("sessionend",U),this.render=function(P,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(Z),Z=lt.getCamera()),P.isScene===!0&&P.onBeforeRender(g,P,Z,C),d=re.get(P,S.length),d.init(Z),S.push(d),At.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H.setFromProjectionMatrix(At),ht=this.localClippingEnabled,K=bt.init(this.clippingPlanes,ht),m=Lt.get(P,y.length),m.init(),y.push(m),lt.enabled===!0&&lt.isPresenting===!0){const Nt=g.xr.getDepthSensingMesh();Nt!==null&&ut(Nt,Z,-1/0,g.sortObjects)}ut(P,Z,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(j,nt),dt=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,dt&&ae.addToRenderList(m,P),this.info.render.frame++,K===!0&&bt.beginShadows();const at=d.state.shadowsArray;Yt.render(at,P,Z),K===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=m.opaque,$=m.transmissive;if(d.setupLights(),Z.isArrayCamera){const Nt=Z.cameras;if($.length>0)for(let $t=0,ne=Nt.length;$t<ne;$t++){const ie=Nt[$t];te(ct,$,P,ie)}dt&&ae.render(P);for(let $t=0,ne=Nt.length;$t<ne;$t++){const ie=Nt[$t];Kt(m,P,ie,ie.viewport)}}else $.length>0&&te(ct,$,P,Z),dt&&ae.render(P),Kt(m,P,Z);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(g,P,Z),Se.resetDefaultState(),M=-1,_=null,S.pop(),S.length>0?(d=S[S.length-1],K===!0&&bt.setGlobalState(g.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function ut(P,Z,at,ct){if(P.visible===!1)return;if(P.layers.test(Z.layers)){if(P.isGroup)at=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Z);else if(P.isLight)d.pushLight(P),P.castShadow&&d.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||H.intersectsSprite(P)){ct&&Ut.setFromMatrixPosition(P.matrixWorld).applyMatrix4(At);const $t=st.update(P),ne=P.material;ne.visible&&m.push(P,$t,ne,at,Ut.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||H.intersectsObject(P))){const $t=st.update(P),ne=P.material;if(ct&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ut.copy(P.boundingSphere.center)):($t.boundingSphere===null&&$t.computeBoundingSphere(),Ut.copy($t.boundingSphere.center)),Ut.applyMatrix4(P.matrixWorld).applyMatrix4(At)),Array.isArray(ne)){const ie=$t.groups;for(let ge=0,L=ie.length;ge<L;ge++){const N=ie[ge],tt=ne[N.materialIndex];tt&&tt.visible&&m.push(P,$t,tt,at,Ut.z,N)}}else ne.visible&&m.push(P,$t,ne,at,Ut.z,null)}}const Nt=P.children;for(let $t=0,ne=Nt.length;$t<ne;$t++)ut(Nt[$t],Z,at,ct)}function Kt(P,Z,at,ct){const $=P.opaque,Nt=P.transmissive,$t=P.transparent;d.setupLightsView(at),K===!0&&bt.setGlobalState(g.clippingPlanes,at),ct&&It.viewport(T.copy(ct)),$.length>0&&Tt($,Z,at),Nt.length>0&&Tt(Nt,Z,at),$t.length>0&&Tt($t,Z,at),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function te(P,Z,at,ct){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ct.id]===void 0&&(d.state.transmissionRenderTarget[ct.id]=new In(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float")?jn:yi,minFilter:ms,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pe.workingColorSpace}));const Nt=d.state.transmissionRenderTarget[ct.id],$t=ct.viewport||T;Nt.setSize($t.z,$t.w);const ne=g.getRenderTarget();g.setRenderTarget(Nt),g.getClearColor(D),z=g.getClearAlpha(),z<1&&g.setClearColor(16777215,.5),g.clear(),dt&&ae.render(at);const ie=g.toneMapping;g.toneMapping=ts;const ge=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),d.setupLightsView(ct),K===!0&&bt.setGlobalState(g.clippingPlanes,ct),Tt(P,at,ct),R.updateMultisampleRenderTarget(Nt),R.updateRenderTargetMipmap(Nt),yt.has("WEBGL_multisampled_render_to_texture")===!1){let L=!1;for(let N=0,tt=Z.length;N<tt;N++){const pt=Z[N],Mt=pt.object,Rt=pt.geometry,wt=pt.material,et=pt.group;if(wt.side===Ke&&Mt.layers.test(ct.layers)){const Xt=wt.side;wt.side=Pn,wt.needsUpdate=!0,Jt(Mt,at,ct,Rt,wt,et),wt.side=Xt,wt.needsUpdate=!0,L=!0}}L===!0&&(R.updateMultisampleRenderTarget(Nt),R.updateRenderTargetMipmap(Nt))}g.setRenderTarget(ne),g.setClearColor(D,z),ge!==void 0&&(ct.viewport=ge),g.toneMapping=ie}function Tt(P,Z,at){const ct=Z.isScene===!0?Z.overrideMaterial:null;for(let $=0,Nt=P.length;$<Nt;$++){const $t=P[$],ne=$t.object,ie=$t.geometry,ge=ct===null?$t.material:ct,L=$t.group;ne.layers.test(at.layers)&&Jt(ne,Z,at,ie,ge,L)}}function Jt(P,Z,at,ct,$,Nt){P.onBeforeRender(g,Z,at,ct,$,Nt),P.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),$.onBeforeRender(g,Z,at,ct,P,Nt),$.transparent===!0&&$.side===Ke&&$.forceSinglePass===!1?($.side=Pn,$.needsUpdate=!0,g.renderBufferDirect(at,Z,ct,$,P,Nt),$.side=es,$.needsUpdate=!0,g.renderBufferDirect(at,Z,ct,$,P,Nt),$.side=Ke):g.renderBufferDirect(at,Z,ct,$,P,Nt),P.onAfterRender(g,Z,at,ct,$,Nt)}function se(P,Z,at){Z.isScene!==!0&&(Z=Wt);const ct=Y.get(P),$=d.state.lights,Nt=d.state.shadowsArray,$t=$.state.version,ne=Ft.getParameters(P,$.state,Nt,Z,at),ie=Ft.getProgramCacheKey(ne);let ge=ct.programs;ct.environment=P.isMeshStandardMaterial?Z.environment:null,ct.fog=Z.fog,ct.envMap=(P.isMeshStandardMaterial?W:w).get(P.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&P.envMap===null?Z.environmentRotation:P.envMapRotation,ge===void 0&&(P.addEventListener("dispose",ue),ge=new Map,ct.programs=ge);let L=ge.get(ie);if(L!==void 0){if(ct.currentProgram===L&&ct.lightsStateVersion===$t)return Ee(P,ne),L}else ne.uniforms=Ft.getUniforms(P),P.onBeforeCompile(ne,g),L=Ft.acquireProgram(ne,ie),ge.set(ie,L),ct.uniforms=ne.uniforms;const N=ct.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(N.clippingPlanes=bt.uniform),Ee(P,ne),ct.needsLights=Jn(P),ct.lightsStateVersion=$t,ct.needsLights&&(N.ambientLightColor.value=$.state.ambient,N.lightProbe.value=$.state.probe,N.directionalLights.value=$.state.directional,N.directionalLightShadows.value=$.state.directionalShadow,N.spotLights.value=$.state.spot,N.spotLightShadows.value=$.state.spotShadow,N.rectAreaLights.value=$.state.rectArea,N.ltc_1.value=$.state.rectAreaLTC1,N.ltc_2.value=$.state.rectAreaLTC2,N.pointLights.value=$.state.point,N.pointLightShadows.value=$.state.pointShadow,N.hemisphereLights.value=$.state.hemi,N.directionalShadowMap.value=$.state.directionalShadowMap,N.directionalShadowMatrix.value=$.state.directionalShadowMatrix,N.spotShadowMap.value=$.state.spotShadowMap,N.spotLightMatrix.value=$.state.spotLightMatrix,N.spotLightMap.value=$.state.spotLightMap,N.pointShadowMap.value=$.state.pointShadowMap,N.pointShadowMatrix.value=$.state.pointShadowMatrix),ct.currentProgram=L,ct.uniformsList=null,L}function me(P){if(P.uniformsList===null){const Z=P.currentProgram.getUniforms();P.uniformsList=Za.seqWithValue(Z.seq,P.uniforms)}return P.uniformsList}function Ee(P,Z){const at=Y.get(P);at.outputColorSpace=Z.outputColorSpace,at.batching=Z.batching,at.batchingColor=Z.batchingColor,at.instancing=Z.instancing,at.instancingColor=Z.instancingColor,at.instancingMorph=Z.instancingMorph,at.skinning=Z.skinning,at.morphTargets=Z.morphTargets,at.morphNormals=Z.morphNormals,at.morphColors=Z.morphColors,at.morphTargetsCount=Z.morphTargetsCount,at.numClippingPlanes=Z.numClippingPlanes,at.numIntersection=Z.numClipIntersection,at.vertexAlphas=Z.vertexAlphas,at.vertexTangents=Z.vertexTangents,at.toneMapping=Z.toneMapping}function rn(P,Z,at,ct,$){Z.isScene!==!0&&(Z=Wt),R.resetTextureUnits();const Nt=Z.fog,$t=ct.isMeshStandardMaterial?Z.environment:null,ne=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:_r,ie=(ct.isMeshStandardMaterial?W:w).get(ct.envMap||$t),ge=ct.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,L=!!at.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),N=!!at.morphAttributes.position,tt=!!at.morphAttributes.normal,pt=!!at.morphAttributes.color;let Mt=ts;ct.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Mt=g.toneMapping);const Rt=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,wt=Rt!==void 0?Rt.length:0,et=Y.get(ct),Xt=d.state.lights;if(K===!0&&(ht===!0||P!==_)){const Mn=P===_&&ct.id===M;bt.setState(ct,P,Mn)}let Vt=!1;ct.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Xt.state.version||et.outputColorSpace!==ne||$.isBatchedMesh&&et.batching===!1||!$.isBatchedMesh&&et.batching===!0||$.isBatchedMesh&&et.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&et.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&et.instancing===!1||!$.isInstancedMesh&&et.instancing===!0||$.isSkinnedMesh&&et.skinning===!1||!$.isSkinnedMesh&&et.skinning===!0||$.isInstancedMesh&&et.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&et.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&et.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&et.instancingMorph===!1&&$.morphTexture!==null||et.envMap!==ie||ct.fog===!0&&et.fog!==Nt||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==bt.numPlanes||et.numIntersection!==bt.numIntersection)||et.vertexAlphas!==ge||et.vertexTangents!==L||et.morphTargets!==N||et.morphNormals!==tt||et.morphColors!==pt||et.toneMapping!==Mt||et.morphTargetsCount!==wt)&&(Vt=!0):(Vt=!0,et.__version=ct.version);let he=et.currentProgram;Vt===!0&&(he=se(ct,Z,$));let Ae=!1,Re=!1,wi=!1;const Ce=he.getUniforms(),_n=et.uniforms;if(It.useProgram(he.program)&&(Ae=!0,Re=!0,wi=!0),ct.id!==M&&(M=ct.id,Re=!0),Ae||_!==P){It.buffers.depth.getReversed()?(ot.copy(P.projectionMatrix),lp(ot),cp(ot),Ce.setValue(F,"projectionMatrix",ot)):Ce.setValue(F,"projectionMatrix",P.projectionMatrix),Ce.setValue(F,"viewMatrix",P.matrixWorldInverse);const Un=Ce.map.cameraPosition;Un!==void 0&&Un.setValue(F,Dt.setFromMatrixPosition(P.matrixWorld)),Ot.logarithmicDepthBuffer&&Ce.setValue(F,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Ce.setValue(F,"isOrthographic",P.isOrthographicCamera===!0),_!==P&&(_=P,Re=!0,wi=!0)}if($.isSkinnedMesh){Ce.setOptional(F,$,"bindMatrix"),Ce.setOptional(F,$,"bindMatrixInverse");const Mn=$.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Ce.setValue(F,"boneTexture",Mn.boneTexture,R))}$.isBatchedMesh&&(Ce.setOptional(F,$,"batchingTexture"),Ce.setValue(F,"batchingTexture",$._matricesTexture,R),Ce.setOptional(F,$,"batchingIdTexture"),Ce.setValue(F,"batchingIdTexture",$._indirectTexture,R),Ce.setOptional(F,$,"batchingColorTexture"),$._colorsTexture!==null&&Ce.setValue(F,"batchingColorTexture",$._colorsTexture,R));const Qn=at.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&le.update($,at,he),(Re||et.receiveShadow!==$.receiveShadow)&&(et.receiveShadow=$.receiveShadow,Ce.setValue(F,"receiveShadow",$.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(_n.envMap.value=ie,_n.flipEnvMap.value=ie.isCubeTexture&&ie.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&Z.environment!==null&&(_n.envMapIntensity.value=Z.environmentIntensity),Re&&(Ce.setValue(F,"toneMappingExposure",g.toneMappingExposure),et.needsLights&&Xn(_n,wi),Nt&&ct.fog===!0&&St.refreshFogUniforms(_n,Nt),St.refreshMaterialUniforms(_n,ct,V,X,d.state.transmissionRenderTarget[P.id]),Za.upload(F,me(et),_n,R)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(Za.upload(F,me(et),_n,R),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Ce.setValue(F,"center",$.center),Ce.setValue(F,"modelViewMatrix",$.modelViewMatrix),Ce.setValue(F,"normalMatrix",$.normalMatrix),Ce.setValue(F,"modelMatrix",$.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const Mn=ct.uniformsGroups;for(let Un=0,Nn=Mn.length;Un<Nn;Un++){const Gi=Mn[Un];q.update(Gi,he),q.bind(Gi,he)}}return he}function Xn(P,Z){P.ambientLightColor.needsUpdate=Z,P.lightProbe.needsUpdate=Z,P.directionalLights.needsUpdate=Z,P.directionalLightShadows.needsUpdate=Z,P.pointLights.needsUpdate=Z,P.pointLightShadows.needsUpdate=Z,P.spotLights.needsUpdate=Z,P.spotLightShadows.needsUpdate=Z,P.rectAreaLights.needsUpdate=Z,P.hemisphereLights.needsUpdate=Z}function Jn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,Z,at){Y.get(P.texture).__webglTexture=Z,Y.get(P.depthTexture).__webglTexture=at;const ct=Y.get(P);ct.__hasExternalTextures=!0,ct.__autoAllocateDepthBuffer=at===void 0,ct.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ct.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,Z){const at=Y.get(P);at.__webglFramebuffer=Z,at.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(P,Z=0,at=0){C=P,E=Z,b=at;let ct=!0,$=null,Nt=!1,$t=!1;if(P){const ie=Y.get(P);if(ie.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(F.FRAMEBUFFER,null),ct=!1;else if(ie.__webglFramebuffer===void 0)R.setupRenderTarget(P);else if(ie.__hasExternalTextures)R.rebindTextures(P,Y.get(P.texture).__webglTexture,Y.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const N=P.depthTexture;if(ie.__boundDepthTexture!==N){if(N!==null&&Y.has(N)&&(P.width!==N.image.width||P.height!==N.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(P)}}const ge=P.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&($t=!0);const L=Y.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(L[Z])?$=L[Z][at]:$=L[Z],Nt=!0):P.samples>0&&R.useMultisampledRTT(P)===!1?$=Y.get(P).__webglMultisampledFramebuffer:Array.isArray(L)?$=L[at]:$=L,T.copy(P.viewport),O.copy(P.scissor),G=P.scissorTest}else T.copy(rt).multiplyScalar(V).floor(),O.copy(Ct).multiplyScalar(V).floor(),G=kt;if(It.bindFramebuffer(F.FRAMEBUFFER,$)&&ct&&It.drawBuffers(P,$),It.viewport(T),It.scissor(O),It.setScissorTest(G),Nt){const ie=Y.get(P.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ie.__webglTexture,at)}else if($t){const ie=Y.get(P.texture),ge=Z||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ie.__webglTexture,at||0,ge)}M=-1},this.readRenderTargetPixels=function(P,Z,at,ct,$,Nt,$t){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ne=Y.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&$t!==void 0&&(ne=ne[$t]),ne){It.bindFramebuffer(F.FRAMEBUFFER,ne);try{const ie=P.texture,ge=ie.format,L=ie.type;if(!Ot.textureFormatReadable(ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(L)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=P.width-ct&&at>=0&&at<=P.height-$&&F.readPixels(Z,at,ct,$,ce.convert(ge),ce.convert(L),Nt)}finally{const ie=C!==null?Y.get(C).__webglFramebuffer:null;It.bindFramebuffer(F.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(P,Z,at,ct,$,Nt,$t){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ne=Y.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&$t!==void 0&&(ne=ne[$t]),ne){const ie=P.texture,ge=ie.format,L=ie.type;if(!Ot.textureFormatReadable(ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(L))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=P.width-ct&&at>=0&&at<=P.height-$){It.bindFramebuffer(F.FRAMEBUFFER,ne);const N=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,N),F.bufferData(F.PIXEL_PACK_BUFFER,Nt.byteLength,F.STREAM_READ),F.readPixels(Z,at,ct,$,ce.convert(ge),ce.convert(L),0);const tt=C!==null?Y.get(C).__webglFramebuffer:null;It.bindFramebuffer(F.FRAMEBUFFER,tt);const pt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await op(F,pt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,N),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Nt),F.deleteBuffer(N),F.deleteSync(pt),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,Z=null,at=0){P.isTexture!==!0&&(Nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,P=arguments[1]);const ct=Math.pow(2,-at),$=Math.floor(P.image.width*ct),Nt=Math.floor(P.image.height*ct),$t=Z!==null?Z.x:0,ne=Z!==null?Z.y:0;R.setTexture2D(P,0),F.copyTexSubImage2D(F.TEXTURE_2D,at,0,0,$t,ne,$,Nt),It.unbindTexture()},this.copyTextureToTexture=function(P,Z,at=null,ct=null,$=0){P.isTexture!==!0&&(Nr("WebGLRenderer: copyTextureToTexture function signature has changed."),ct=arguments[0]||null,P=arguments[1],Z=arguments[2],$=arguments[3]||0,at=null);let Nt,$t,ne,ie,ge,L,N,tt,pt;const Mt=P.isCompressedTexture?P.mipmaps[$]:P.image;at!==null?(Nt=at.max.x-at.min.x,$t=at.max.y-at.min.y,ne=at.isBox3?at.max.z-at.min.z:1,ie=at.min.x,ge=at.min.y,L=at.isBox3?at.min.z:0):(Nt=Mt.width,$t=Mt.height,ne=Mt.depth||1,ie=0,ge=0,L=0),ct!==null?(N=ct.x,tt=ct.y,pt=ct.z):(N=0,tt=0,pt=0);const Rt=ce.convert(Z.format),wt=ce.convert(Z.type);let et;Z.isData3DTexture?(R.setTexture3D(Z,0),et=F.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(R.setTexture2DArray(Z,0),et=F.TEXTURE_2D_ARRAY):(R.setTexture2D(Z,0),et=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Z.unpackAlignment);const Xt=F.getParameter(F.UNPACK_ROW_LENGTH),Vt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),he=F.getParameter(F.UNPACK_SKIP_PIXELS),Ae=F.getParameter(F.UNPACK_SKIP_ROWS),Re=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Mt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ie),F.pixelStorei(F.UNPACK_SKIP_ROWS,ge),F.pixelStorei(F.UNPACK_SKIP_IMAGES,L);const wi=P.isDataArrayTexture||P.isData3DTexture,Ce=Z.isDataArrayTexture||Z.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const _n=Y.get(P),Qn=Y.get(Z),Mn=Y.get(_n.__renderTarget),Un=Y.get(Qn.__renderTarget);It.bindFramebuffer(F.READ_FRAMEBUFFER,Mn.__webglFramebuffer),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let Nn=0;Nn<ne;Nn++)wi&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get(P).__webglTexture,$,L+Nn),P.isDepthTexture?(Ce&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get(Z).__webglTexture,$,pt+Nn),F.blitFramebuffer(ie,ge,Nt,$t,N,tt,Nt,$t,F.DEPTH_BUFFER_BIT,F.NEAREST)):Ce?F.copyTexSubImage3D(et,$,N,tt,pt+Nn,ie,ge,Nt,$t):F.copyTexSubImage2D(et,$,N,tt,pt+Nn,ie,ge,Nt,$t);It.bindFramebuffer(F.READ_FRAMEBUFFER,null),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ce?P.isDataTexture||P.isData3DTexture?F.texSubImage3D(et,$,N,tt,pt,Nt,$t,ne,Rt,wt,Mt.data):Z.isCompressedArrayTexture?F.compressedTexSubImage3D(et,$,N,tt,pt,Nt,$t,ne,Rt,Mt.data):F.texSubImage3D(et,$,N,tt,pt,Nt,$t,ne,Rt,wt,Mt):P.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,$,N,tt,Nt,$t,Rt,wt,Mt.data):P.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,$,N,tt,Mt.width,Mt.height,Rt,Mt.data):F.texSubImage2D(F.TEXTURE_2D,$,N,tt,Nt,$t,Rt,wt,Mt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Xt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Vt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,he),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ae),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Re),$===0&&Z.generateMipmaps&&F.generateMipmap(et),It.unbindTexture()},this.copyTextureToTexture3D=function(P,Z,at=null,ct=null,$=0){return P.isTexture!==!0&&(Nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,ct=arguments[1]||null,P=arguments[2],Z=arguments[3],$=arguments[4]||0),Nr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,Z,at,ct,$)},this.initRenderTarget=function(P){Y.get(P).__webglFramebuffer===void 0&&R.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),It.unbindTexture()},this.resetState=function(){E=0,b=0,C=null,It.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Pe._getUnpackColorSpace()}}class Uc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pt(t),this.near=e,this.far=n}clone(){return new Uc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class xx extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class uo extends bn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=vn,h=vn,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ku extends Ge{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $s=new Le,Ju=new Le,Pa=[],Qu=new Rs,_x=new Le,Pr=new oe,Dr=new yr;class gn extends oe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ku(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,_x)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Rs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$s),Qu.copy(t.boundingBox).applyMatrix4($s),this.boundingBox.union(Qu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$s),Dr.copy(t.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Dr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(n),t.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$s),Ju.multiplyMatrices(n,$s),Pr.matrixWorld=Ju,Pr.raycast(t,Pa);for(let a=0,o=Pa.length;a<o;a++){const l=Pa[a];l.instanceId=r,l.object=this,e.push(l)}Pa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ku(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new uo(new Float32Array(s*this.count),s,this.count,oo,hi));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ho extends Ps{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const th=new Le,tc=new Cc,Da=new yr,La=new B;class Nc extends Ve{constructor(t=new ze,e=new ho){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(s),Da.radius+=r,t.ray.intersectsSphere(Da)===!1)return;th.copy(s).invert(),tc.copy(t.ray).applyMatrix4(th);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=f,x=p;v<x;v++){const m=c.getX(v);La.fromBufferAttribute(u,m),eh(La,m,l,s,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=f,x=p;v<x;v++)La.fromBufferAttribute(u,v),eh(La,v,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function eh(i,t,e,n,s,r,a){const o=tc.distanceSqToPoint(i);if(o<e){const l=new B;tc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class fi extends bn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Et:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new B,s=[],r=[],a=[],o=new B,l=new Le;for(let p=0;p<=t;p++){const v=p/t;s[p]=this.getTangentAt(v,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(fn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,v))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(fn(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],p*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class zc extends bi{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Et){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Mx extends zc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Fc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,s(a,o,f,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Ia=new B,Ko=new Fc,Jo=new Fc,Qo=new Fc;class Oc extends bi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ia.subVectors(s[0],s[1]).add(s[0]),c=Ia);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ia.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ia),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),Ko.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,v,x,m),Jo.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,v,x,m),Qo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,v,x,m)}else this.curveType==="catmullrom"&&(Ko.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Jo.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Qo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Ko.calc(l),Jo.calc(l),Qo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function nh(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function yx(i,t){const e=1-i;return e*e*t}function Sx(i,t){return 2*(1-i)*i*t}function bx(i,t){return i*i*t}function Br(i,t,e,n){return yx(i,t)+Sx(i,e)+bx(i,n)}function wx(i,t){const e=1-i;return e*e*e*t}function Ex(i,t){const e=1-i;return 3*e*e*i*t}function Tx(i,t){return 3*(1-i)*i*i*t}function Ax(i,t){return i*i*i*t}function Gr(i,t,e,n,s){return wx(i,t)+Ex(i,e)+Tx(i,n)+Ax(i,s)}class vf extends bi{constructor(t=new Et,e=new Et,n=new Et,s=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Et){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gr(t,s.x,r.x,a.x,o.x),Gr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Cx extends bi{constructor(t=new B,e=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new B){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gr(t,s.x,r.x,a.x,o.x),Gr(t,s.y,r.y,a.y,o.y),Gr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class xf extends bi{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rx extends bi{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _f extends bi{constructor(t=new Et,e=new Et,n=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Et){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Br(t,s.x,r.x,a.x),Br(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Px extends bi{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Br(t,s.x,r.x,a.x),Br(t,s.y,r.y,a.y),Br(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mf extends bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(nh(o,l.x,c.x,h.x,u.x),nh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Et().fromArray(s))}return this}}var ec=Object.freeze({__proto__:null,ArcCurve:Mx,CatmullRomCurve3:Oc,CubicBezierCurve:vf,CubicBezierCurve3:Cx,EllipseCurve:zc,LineCurve:xf,LineCurve3:Rx,QuadraticBezierCurve:_f,QuadraticBezierCurve3:Px,SplineCurve:Mf});class Dx extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ec[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ec[s.type]().fromJSON(s))}return this}}class nc extends Dx{constructor(t){super(),this.type="Path",this.currentPoint=new Et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new xf(this.currentPoint.clone(),new Et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new _f(this.currentPoint.clone(),new Et(t,e),new Et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new vf(this.currentPoint.clone(),new Et(t,e),new Et(n,s),new Et(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Mf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new zc(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class kc extends ze{constructor(t=[new Et(0,-.5),new Et(.5,0),new Et(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=fn(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new B,f=new Et,p=new B,v=new B,x=new B;let m=0,d=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,d=t[y+1].y-t[y].y,p.x=d*1,p.y=-m,p.z=d*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,d=t[y+1].y-t[y].y,p.x=d*1,p.y=-m,p.z=d*0,v.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(v)}for(let y=0;y<=e;y++){const S=n+y*h*s,g=Math.sin(S),A=Math.cos(S);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*g,u.y=t[E].y,u.z=t[E].x*A,a.push(u.x,u.y,u.z),f.x=y/e,f.y=E/(t.length-1),o.push(f.x,f.y);const b=l[3*E+0]*g,C=l[3*E+1],M=l[3*E+0]*A;c.push(b,C,M)}}for(let y=0;y<e;y++)for(let S=0;S<t.length-1;S++){const g=S+y*t.length,A=g,E=g+t.length,b=g+t.length+1,C=g+1;r.push(A,E,C),r.push(b,C,E)}this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("uv",new pe(o,2)),this.setAttribute("normal",new pe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kc(t.points,t.segments,t.phiStart,t.phiLength)}}class fo extends kc{constructor(t=1,e=1,n=4,s=8){const r=new nc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new fo(t.radius,t.length,t.capSegments,t.radialSegments)}}class pr extends ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new B,h=new Et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(o,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class He extends ze{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let v=0;const x=[],m=n/2;let d=0;y(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(p,2));function y(){const g=new B,A=new B;let E=0;const b=(e-t)/n;for(let C=0;C<=r;C++){const M=[],_=C/r,T=_*(e-t)+t;for(let O=0;O<=s;O++){const G=O/s,D=G*l+o,z=Math.sin(D),k=Math.cos(D);A.x=T*z,A.y=-_*n+m,A.z=T*k,u.push(A.x,A.y,A.z),g.set(z,b,k).normalize(),f.push(g.x,g.y,g.z),p.push(G,1-_),M.push(v++)}x.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){const _=x[M][C],T=x[M+1][C],O=x[M+1][C+1],G=x[M][C+1];(t>0||M!==0)&&(h.push(_,T,G),E+=3),(e>0||M!==r-1)&&(h.push(T,O,G),E+=3)}c.addGroup(d,E,0),d+=E}function S(g){const A=v,E=new Et,b=new B;let C=0;const M=g===!0?t:e,_=g===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*_,0),f.push(0,_,0),p.push(.5,.5),v++;const T=v;for(let O=0;O<=s;O++){const D=O/s*l+o,z=Math.cos(D),k=Math.sin(D);b.x=M*k,b.y=m*_,b.z=M*z,u.push(b.x,b.y,b.z),f.push(0,_,0),E.x=z*.5+.5,E.y=k*.5*_+.5,p.push(E.x,E.y),v++}for(let O=0;O<s;O++){const G=A+O,D=T+O;g===!0?h.push(D,D+1,G):h.push(D+1,D,G),C+=3}c.addGroup(d,C,g===!0?1:2),d+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bn extends He{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Bn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ra extends ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(r.slice(),3)),this.setAttribute("uv",new pe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const S=new B,g=new B,A=new B;for(let E=0;E<e.length;E+=3)p(e[E+0],S),p(e[E+1],g),p(e[E+2],A),l(S,g,A,y)}function l(y,S,g,A){const E=A+1,b=[];for(let C=0;C<=E;C++){b[C]=[];const M=y.clone().lerp(g,C/E),_=S.clone().lerp(g,C/E),T=E-C;for(let O=0;O<=T;O++)O===0&&C===E?b[C][O]=M:b[C][O]=M.clone().lerp(_,O/T)}for(let C=0;C<E;C++)for(let M=0;M<2*(E-C)-1;M++){const _=Math.floor(M/2);M%2===0?(f(b[C][_+1]),f(b[C+1][_]),f(b[C][_])):(f(b[C][_+1]),f(b[C+1][_+1]),f(b[C+1][_]))}}function c(y){const S=new B;for(let g=0;g<r.length;g+=3)S.x=r[g+0],S.y=r[g+1],S.z=r[g+2],S.normalize().multiplyScalar(y),r[g+0]=S.x,r[g+1]=S.y,r[g+2]=S.z}function h(){const y=new B;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const g=m(y)/2/Math.PI+.5,A=d(y)/Math.PI+.5;a.push(g,1-A)}v(),u()}function u(){for(let y=0;y<a.length;y+=6){const S=a[y+0],g=a[y+2],A=a[y+4],E=Math.max(S,g,A),b=Math.min(S,g,A);E>.9&&b<.1&&(S<.2&&(a[y+0]+=1),g<.2&&(a[y+2]+=1),A<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,S){const g=y*3;S.x=t[g+0],S.y=t[g+1],S.z=t[g+2]}function v(){const y=new B,S=new B,g=new B,A=new B,E=new Et,b=new Et,C=new Et;for(let M=0,_=0;M<r.length;M+=9,_+=6){y.set(r[M+0],r[M+1],r[M+2]),S.set(r[M+3],r[M+4],r[M+5]),g.set(r[M+6],r[M+7],r[M+8]),E.set(a[_+0],a[_+1]),b.set(a[_+2],a[_+3]),C.set(a[_+4],a[_+5]),A.copy(y).add(S).add(g).divideScalar(3);const T=m(A);x(E,_+0,y,T),x(b,_+2,S,T),x(C,_+4,g,T)}}function x(y,S,g,A){A<0&&y.x===1&&(a[S]=y.x-1),g.x===0&&g.z===0&&(a[S]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ra(t.vertices,t.indices,t.radius,t.details)}}class po extends ra{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new po(t.radius,t.detail)}}class yf extends nc{constructor(t){super(t),this.uuid=Cs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new nc().fromJSON(s))}return this}}const Lx={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Sf(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,p;if(n&&(r=Fx(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let v=e;v<s;v+=e)u=i[v],f=i[v+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return jr(r,a,e,o,l,p,0),a}};function Sf(i,t,e,n,s){let r,a;if(s===$x(i,t,e,n)>0)for(r=t;r<e;r+=n)a=ih(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=ih(r,i[r],i[r+1],a);return a&&mo(a,a.next)&&(Kr(a),a=a.next),a}function Es(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(mo(e,e.next)||je(e.prev,e,e.next)===0)){if(Kr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function jr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Vx(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Ux(i,n,s,r):Ix(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Kr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Nx(Es(i),t,e),jr(i,t,e,n,s,r,2)):a===2&&zx(i,t,e,n,s,r):jr(Es(i),t,e,n,s,r,1);break}}}function Ix(i){const t=i.prev,e=i,n=i.next;if(je(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c;let v=n.next;for(;v!==t;){if(v.x>=h&&v.x<=f&&v.y>=u&&v.y<=p&&tr(s,o,r,l,a,c,v.x,v.y)&&je(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function Ux(i,t,e,n){const s=i.prev,r=i,a=i.next;if(je(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,p=o<l?o<c?o:c:l<c?l:c,v=h<u?h<f?h:f:u<f?u:f,x=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,d=ic(p,v,t,e,n),y=ic(x,m,t,e,n);let S=i.prevZ,g=i.nextZ;for(;S&&S.z>=d&&g&&g.z<=y;){if(S.x>=p&&S.x<=x&&S.y>=v&&S.y<=m&&S!==s&&S!==a&&tr(o,h,l,u,c,f,S.x,S.y)&&je(S.prev,S,S.next)>=0||(S=S.prevZ,g.x>=p&&g.x<=x&&g.y>=v&&g.y<=m&&g!==s&&g!==a&&tr(o,h,l,u,c,f,g.x,g.y)&&je(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;S&&S.z>=d;){if(S.x>=p&&S.x<=x&&S.y>=v&&S.y<=m&&S!==s&&S!==a&&tr(o,h,l,u,c,f,S.x,S.y)&&je(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;g&&g.z<=y;){if(g.x>=p&&g.x<=x&&g.y>=v&&g.y<=m&&g!==s&&g!==a&&tr(o,h,l,u,c,f,g.x,g.y)&&je(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Nx(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!mo(s,r)&&bf(s,n,n.next,r)&&Zr(s,r)&&Zr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Kr(n),Kr(n.next),n=i=r),n=n.next}while(n!==i);return Es(n)}function zx(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Xx(a,o)){let l=wf(a,o);a=Es(a,a.next),l=Es(l,l.next),jr(a,t,e,n,s,r,0),jr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Fx(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Sf(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Wx(c));for(s.sort(Ox),r=0;r<s.length;r++)e=kx(s[r],e);return e}function Ox(i,t){return i.x-t.x}function kx(i,t){const e=Bx(i,t);if(!e)return t;const n=wf(e,i);return Es(n,n.next),Es(e,e.next)}function Bx(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&tr(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Zr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Gx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Gx(i,t){return je(i.prev,i,t.prev)<0&&je(t.next,i,i.next)<0}function Vx(i,t,e,n){let s=i;do s.z===0&&(s.z=ic(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hx(s)}function Hx(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function ic(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Wx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function tr(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Xx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!qx(i,t)&&(Zr(i,t)&&Zr(t,i)&&Yx(i,t)&&(je(i.prev,i,t.prev)||je(i,t.prev,t))||mo(i,t)&&je(i.prev,i,i.next)>0&&je(t.prev,t,t.next)>0)}function je(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function mo(i,t){return i.x===t.x&&i.y===t.y}function bf(i,t,e,n){const s=Na(je(i,t,e)),r=Na(je(i,t,n)),a=Na(je(e,n,i)),o=Na(je(e,n,t));return!!(s!==r&&a!==o||s===0&&Ua(i,e,t)||r===0&&Ua(i,n,t)||a===0&&Ua(e,i,n)||o===0&&Ua(e,t,n))}function Ua(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Na(i){return i>0?1:i<0?-1:0}function qx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&bf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Zr(i,t){return je(i.prev,i,i.next)<0?je(i,t,i.next)>=0&&je(i,i.prev,t)>=0:je(i,t,i.prev)<0||je(i,i.next,t)<0}function Yx(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function wf(i,t){const e=new sc(i.i,i.x,i.y),n=new sc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ih(i,t,e,n){const s=new sc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Kr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function sc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function $x(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Vr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Vr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];sh(t),rh(n,t);let a=t.length;e.forEach(sh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,rh(n,e[l]);const o=Lx.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function sh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function rh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Bc extends ze{constructor(t=new yf([new Et(.5,.5),new Et(-.5,.5),new Et(-.5,-.5),new Et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new pe(s,3)),this.setAttribute("uv",new pe(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,v=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:jx;let S,g=!1,A,E,b,C;d&&(S=d.getSpacedPoints(h),g=!0,f=!1,A=d.computeFrenetFrames(h,!1),E=new B,b=new B,C=new B),f||(m=0,p=0,v=0,x=0);const M=o.extractPoints(c);let _=M.shape;const T=M.holes;if(!Vr.isClockWise(_)){_=_.reverse();for(let dt=0,_t=T.length;dt<_t;dt++){const F=T[dt];Vr.isClockWise(F)&&(T[dt]=F.reverse())}}const G=Vr.triangulateShape(_,T),D=_;for(let dt=0,_t=T.length;dt<_t;dt++){const F=T[dt];_=_.concat(F)}function z(dt,_t,F){return _t||console.error("THREE.ExtrudeGeometry: vec does not exist"),dt.clone().addScaledVector(_t,F)}const k=_.length,X=G.length;function V(dt,_t,F){let qt,yt,Ot;const It=dt.x-_t.x,ee=dt.y-_t.y,Y=F.x-dt.x,R=F.y-dt.y,w=It*It+ee*ee,W=It*R-ee*Y;if(Math.abs(W)>Number.EPSILON){const Q=Math.sqrt(w),it=Math.sqrt(Y*Y+R*R),st=_t.x-ee/Q,Ft=_t.y+It/Q,St=F.x-R/it,Lt=F.y+Y/it,re=((St-st)*R-(Lt-Ft)*Y)/(It*R-ee*Y);qt=st+It*re-dt.x,yt=Ft+ee*re-dt.y;const bt=qt*qt+yt*yt;if(bt<=2)return new Et(qt,yt);Ot=Math.sqrt(bt/2)}else{let Q=!1;It>Number.EPSILON?Y>Number.EPSILON&&(Q=!0):It<-Number.EPSILON?Y<-Number.EPSILON&&(Q=!0):Math.sign(ee)===Math.sign(R)&&(Q=!0),Q?(qt=-ee,yt=It,Ot=Math.sqrt(w)):(qt=It,yt=ee,Ot=Math.sqrt(w/2))}return new Et(qt/Ot,yt/Ot)}const j=[];for(let dt=0,_t=D.length,F=_t-1,qt=dt+1;dt<_t;dt++,F++,qt++)F===_t&&(F=0),qt===_t&&(qt=0),j[dt]=V(D[dt],D[F],D[qt]);const nt=[];let rt,Ct=j.concat();for(let dt=0,_t=T.length;dt<_t;dt++){const F=T[dt];rt=[];for(let qt=0,yt=F.length,Ot=yt-1,It=qt+1;qt<yt;qt++,Ot++,It++)Ot===yt&&(Ot=0),It===yt&&(It=0),rt[qt]=V(F[qt],F[Ot],F[It]);nt.push(rt),Ct=Ct.concat(rt)}for(let dt=0;dt<m;dt++){const _t=dt/m,F=p*Math.cos(_t*Math.PI/2),qt=v*Math.sin(_t*Math.PI/2)+x;for(let yt=0,Ot=D.length;yt<Ot;yt++){const It=z(D[yt],j[yt],qt);ot(It.x,It.y,-F)}for(let yt=0,Ot=T.length;yt<Ot;yt++){const It=T[yt];rt=nt[yt];for(let ee=0,Y=It.length;ee<Y;ee++){const R=z(It[ee],rt[ee],qt);ot(R.x,R.y,-F)}}}const kt=v+x;for(let dt=0;dt<k;dt++){const _t=f?z(_[dt],Ct[dt],kt):_[dt];g?(b.copy(A.normals[0]).multiplyScalar(_t.x),E.copy(A.binormals[0]).multiplyScalar(_t.y),C.copy(S[0]).add(b).add(E),ot(C.x,C.y,C.z)):ot(_t.x,_t.y,0)}for(let dt=1;dt<=h;dt++)for(let _t=0;_t<k;_t++){const F=f?z(_[_t],Ct[_t],kt):_[_t];g?(b.copy(A.normals[dt]).multiplyScalar(F.x),E.copy(A.binormals[dt]).multiplyScalar(F.y),C.copy(S[dt]).add(b).add(E),ot(C.x,C.y,C.z)):ot(F.x,F.y,u/h*dt)}for(let dt=m-1;dt>=0;dt--){const _t=dt/m,F=p*Math.cos(_t*Math.PI/2),qt=v*Math.sin(_t*Math.PI/2)+x;for(let yt=0,Ot=D.length;yt<Ot;yt++){const It=z(D[yt],j[yt],qt);ot(It.x,It.y,u+F)}for(let yt=0,Ot=T.length;yt<Ot;yt++){const It=T[yt];rt=nt[yt];for(let ee=0,Y=It.length;ee<Y;ee++){const R=z(It[ee],rt[ee],qt);g?ot(R.x,R.y+S[h-1].y,S[h-1].x+F):ot(R.x,R.y,u+F)}}}H(),K();function H(){const dt=s.length/3;if(f){let _t=0,F=k*_t;for(let qt=0;qt<X;qt++){const yt=G[qt];At(yt[2]+F,yt[1]+F,yt[0]+F)}_t=h+m*2,F=k*_t;for(let qt=0;qt<X;qt++){const yt=G[qt];At(yt[0]+F,yt[1]+F,yt[2]+F)}}else{for(let _t=0;_t<X;_t++){const F=G[_t];At(F[2],F[1],F[0])}for(let _t=0;_t<X;_t++){const F=G[_t];At(F[0]+k*h,F[1]+k*h,F[2]+k*h)}}n.addGroup(dt,s.length/3-dt,0)}function K(){const dt=s.length/3;let _t=0;ht(D,_t),_t+=D.length;for(let F=0,qt=T.length;F<qt;F++){const yt=T[F];ht(yt,_t),_t+=yt.length}n.addGroup(dt,s.length/3-dt,1)}function ht(dt,_t){let F=dt.length;for(;--F>=0;){const qt=F;let yt=F-1;yt<0&&(yt=dt.length-1);for(let Ot=0,It=h+m*2;Ot<It;Ot++){const ee=k*Ot,Y=k*(Ot+1),R=_t+qt+ee,w=_t+yt+ee,W=_t+yt+Y,Q=_t+qt+Y;Dt(R,w,W,Q)}}}function ot(dt,_t,F){l.push(dt),l.push(_t),l.push(F)}function At(dt,_t,F){Ut(dt),Ut(_t),Ut(F);const qt=s.length/3,yt=y.generateTopUV(n,s,qt-3,qt-2,qt-1);Wt(yt[0]),Wt(yt[1]),Wt(yt[2])}function Dt(dt,_t,F,qt){Ut(dt),Ut(_t),Ut(qt),Ut(_t),Ut(F),Ut(qt);const yt=s.length/3,Ot=y.generateSideWallUV(n,s,yt-6,yt-3,yt-2,yt-1);Wt(Ot[0]),Wt(Ot[1]),Wt(Ot[3]),Wt(Ot[1]),Wt(Ot[2]),Wt(Ot[3])}function Ut(dt){s.push(l[dt*3+0]),s.push(l[dt*3+1]),s.push(l[dt*3+2])}function Wt(dt){r.push(dt.x),r.push(dt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Zx(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ec[s.type]().fromJSON(s)),new Bc(n,t.options)}}const jx={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Et(r,a),new Et(o,l),new Et(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],p=t[s*3+1],v=t[s*3+2],x=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Et(a,1-l),new Et(c,1-u),new Et(f,1-v),new Et(x,1-d)]:[new Et(o,1-l),new Et(h,1-u),new Et(p,1-v),new Et(m,1-d)]}};function Zx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class xs extends ra{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xs(t.radius,t.detail)}}class mr extends ra{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new mr(t.radius,t.detail)}}class ns extends ze{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,p=new B,v=new Et;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const d=r+m/n*a;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/e+1)/2,v.y=(p.y/e+1)/2,h.push(v.x,v.y)}u+=f}for(let x=0;x<s;x++){const m=x*(n+1);for(let d=0;d<n;d++){const y=d+m,S=y,g=y+n+1,A=y+n+2,E=y+1;o.push(S,g,E),o.push(g,A,E)}}this.setIndex(o),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ns(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Gn extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new B,f=new B,p=[],v=[],x=[],m=[];for(let d=0;d<=n;d++){const y=[],S=d/n;let g=0;d===0&&a===0?g=.5/e:d===n&&l===Math.PI&&(g=-.5/e);for(let A=0;A<=e;A++){const E=A/e;u.x=-t*Math.cos(s+E*r)*Math.sin(a+S*o),u.y=t*Math.cos(a+S*o),u.z=t*Math.sin(s+E*r)*Math.sin(a+S*o),v.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(E+g,1-S),y.push(c++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){const S=h[d][y+1],g=h[d][y],A=h[d+1][y],E=h[d+1][y+1];(d!==0||a>0)&&p.push(S,g,E),(d!==n-1||l<Math.PI)&&p.push(g,A,E)}this.setIndex(p),this.setAttribute("position",new pe(v,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ir extends ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new B,u=new B,f=new B;for(let p=0;p<=n;p++)for(let v=0;v<=s;v++){const x=v/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(v/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let v=1;v<=s;v++){const x=(s+1)*p+v-1,m=(s+1)*(p-1)+v-1,d=(s+1)*(p-1)+v,y=(s+1)*p+v;a.push(x,m,y),a.push(m,d,y)}this.setIndex(a),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Kx extends $e{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Jx extends Ps{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class We extends Ps{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gc extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Qx extends Gc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const tl=new Le,ah=new B,oh=new B;class Ef{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pc,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ah.setFromMatrixPosition(t.matrixWorld),e.position.copy(ah),oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(oh),e.updateMatrixWorld(),tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const lh=new Le,Lr=new B,el=new B;class t_ extends Ef{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new Be(2,1,1,1),new Be(0,1,1,1),new Be(3,1,1,1),new Be(1,1,1,1),new Be(3,0,1,1),new Be(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Lr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Lr),el.copy(n.position),el.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(el),n.updateMatrixWorld(),s.makeTranslation(-Lr.x,-Lr.y,-Lr.z),lh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh)}}class Jr extends Gc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new t_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class e_ extends Ef{constructor(){super(new Dc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class n_ extends Gc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new e_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Tf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ch(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ch();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ch(){return performance.now()}const uh=new Le;class i_{constructor(t,e,n=0,s=1/0){this.ray=new Cc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Rc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return uh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uh),this}intersectObject(t,e=!0,n=[]){return rc(t,this,n,e),n.sort(hh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)rc(t[s],this,n,e);return n.sort(hh),n}}function hh(i,t){return i.distance-t.distance}function rc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)rc(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);const nn=(i,t={})=>new We({color:i,flatShading:!0,...t});function $i(i){const t=i.map(a=>a.toNonIndexed()),e=t.reduce((a,o)=>a+o.attributes.position.count,0),n=new Float32Array(e*3);let s=0;for(const a of t)n.set(a.attributes.position.array,s),s+=a.attributes.position.array.length;const r=new ze;return r.setAttribute("position",new Ge(n,3)),r.computeVertexNormals(),r}function s_(i,t,e,n,s,r){const a=r.id,{heightAt:o,pathDist:l,plinths:c}=t,h=t.lighthouse.pos,u=new Ve,f=new Pt,p=[],v=(U,vt,ut,Kt=2,te=5)=>l(U,vt)>ut&&Math.hypot(U-h.x,vt-h.z)>te&&!c.some(Tt=>Math.hypot(Tt.x-U,Tt.z-vt)<Kt),x=(U,vt,ut=U*20)=>{const Kt=[];for(let te=0;te<ut&&Kt.length<U;te++){const Tt=(n()-.5)*104,Jt=(n()-.5)*104,se=o(Tt,Jt);vt(Tt,Jt,se)&&Kt.push({x:Tt,z:Jt,h:se,r:n(),s:n()})}return Kt},m=(U,vt,ut,Kt,te=!1)=>{const Tt=new gn(U,vt,Math.max(1,ut.length));return Tt.count=ut.length,ut.forEach((Jt,se)=>{Kt(Jt,se,Tt),u.updateMatrix(),Tt.setMatrixAt(se,u.matrix)}),Tt.instanceColor&&(Tt.instanceColor.needsUpdate=!0),Tt.castShadow=te,Tt.receiveShadow=!0,i.add(Tt),Tt},d=(e.mobile?.55:1)*1.8,y=(()=>{const U=[[-.9,.5,.05],[-.45,.68,-.06],[0,.78,.02],[.45,.66,-.04],[.9,.48,.06]].map(([te,Tt,Jt])=>{const se=new Bn(.045,Tt,3);return se.translate(0,Tt/2,0),se.rotateZ(te*.45),se.rotateX(Jt*3),se.translate(te*.09,0,Jt),se}),vt=$i(U),ut=vt.attributes.position,Kt=[];for(let te=0;te<ut.count;te++){const Tt=xe.clamp(ut.getY(te)/.7,0,1),Jt=.5+.7*Tt;Kt.push(Jt,Jt,Jt*.95)}return vt.setAttribute("color",new pe(Kt,3)),vt})(),S=x(Math.round(280*d),(U,vt,ut)=>ut>.8&&v(U,vt,1.7,1.7,4.4));m(y,nn("#ffffff",{vertexColors:!0}),S,(U,vt,ut)=>{u.position.set(U.x,U.h-.05,U.z),u.rotation.set(0,U.r*6,0),u.scale.setScalar(.8+U.s*.7),ut.setColorAt(vt,f.set(a==="vinter"?U.s<.5?"#c8d4c0":"#e6eef4":a==="vulkan"?U.s<.5?"#5a6a3a":"#7a7a4a":U.s<.5?"#7fae4e":"#9cc45e"))});const g=x(Math.round((a==="vinter"?0:a==="vulkan"?30:120)*d),(U,vt,ut)=>ut>.85&&v(U,vt,1.9,2,4.5)),A=new He(.025,.03,.4,4);A.translate(0,.2,0);const E=new xs(.11,0);E.translate(0,.42,0);const b=["#ff8fb0","#ffd54a","#ffffff","#b58cff","#ff7a4a"];if(m(A,nn("#5f8f3a"),g,U=>{u.position.set(U.x,U.h-.03,U.z),u.rotation.set(0,0,0),u.scale.setScalar(.9+U.s*.6)}),m(E,nn("#ffffff"),g,(U,vt,ut)=>{u.position.set(U.x,U.h-.03,U.z),u.scale.setScalar(.9+U.s*.6),ut.setColorAt(vt,f.set(b[Math.floor(U.r*b.length)]))}),a!=="vulkan"){const U=(()=>{const Kt=[],te=[];for(let se=0;se<8;se++){const me=se/8*Math.PI*2,Ee=.32;Kt.push(0,0,0,Math.cos(me)*.12,0,Math.sin(me)*.12,Math.cos(me-Ee)*.045,0,Math.sin(me-Ee)*.045),Kt.push(0,0,0,Math.cos(me+Ee)*.045,0,Math.sin(me+Ee)*.045,Math.cos(me)*.12,0,Math.sin(me)*.12);for(let rn=0;rn<6;rn++)te.push(1,1,1)}for(let se=0;se<6;se++){const me=se/6*Math.PI*2,Ee=(se+1)/6*Math.PI*2;Kt.push(0,.012,0,Math.cos(Ee)*.035,.012,Math.sin(Ee)*.035,Math.cos(me)*.035,.012,Math.sin(me)*.035);for(let rn=0;rn<3;rn++)te.push(1,.78,.18)}const Jt=new ze;return Jt.setAttribute("position",new pe(Kt,3)),Jt.setAttribute("color",new pe(te,3)),Jt.setAttribute("normal",new pe(new Array(Kt.length/3).fill(0).flatMap(()=>[0,1,0]),3)),Jt})(),vt=x(Math.round((a==="vinter"?10:60)*d),(Kt,te,Tt)=>Tt>.9&&v(Kt,te,1.6,2,4.5)),ut=[];for(const Kt of vt){const te=5+Math.floor(Kt.r*9);for(let Tt=0;Tt<te;Tt++){const Jt=n()*6.28,se=Math.sqrt(n())*1.6,me=Kt.x+Math.cos(Jt)*se,Ee=Kt.z+Math.sin(Jt)*se,rn=o(me,Ee);rn>.85&&v(me,Ee,1.4,2,4.5)&&ut.push({x:me,z:Ee,h:rn,r:n(),s:n()})}}m(U,new We({color:"#ffffff",vertexColors:!0,side:Ke}),ut,(Kt,te,Tt)=>{u.position.set(Kt.x,Kt.h+.035,Kt.z),u.rotation.set((Kt.s-.5)*.3,Kt.r*6.28,0),u.scale.setScalar(1.3+Kt.s*.7),Tt.setColorAt(te,f.setRGB(1,.97+Kt.r*.03,.94+Kt.s*.06))})}const C=x(Math.round((a==="tak"?36:0)*d),(U,vt,ut)=>ut>1&&v(U,vt,2.4,2.4,5)),M=new Gn(.22,8,4,0,Math.PI*2,0,Math.PI/2);M.scale(1,.7,1),M.translate(0,.28,0);const _=new He(.07,.09,.3,6);_.translate(0,.14,0),m(_,nn("#f4ead6"),C,U=>{u.position.set(U.x,U.h-.03,U.z),u.rotation.set(0,0,(U.r-.5)*.3),u.scale.setScalar(.8+U.s)},!0),m(M,nn("#ffffff"),C,(U,vt,ut)=>{u.position.set(U.x,U.h-.03,U.z),u.rotation.set(0,0,(U.r-.5)*.3),u.scale.setScalar(.8+U.s),ut.setColorAt(vt,f.set(U.r<.6?"#d8453a":"#c89a5a"))},!0);const T=$i([[-.08,0],[.07,.05],[0,-.07]].map(([U,vt],ut)=>{const Kt=new Bn(.04,1.1+ut*.2,3);return Kt.translate(U,.55+ut*.1,vt),Kt}).concat([(()=>{const U=new fo(.05,.18,2,4);return U.translate(.07,1.25,.05),U})()])),O=x(Math.round(150*d),(U,vt,ut)=>ut>.05&&ut<.55&&v(U,vt,2.2,2,5),6e3),G=m(T,nn(a==="vinter"?"#a89878":a==="vulkan"?"#5a5a3a":"#9aa856"),O,U=>{u.position.set(U.x,U.h-.1,U.z),u.rotation.set(0,U.r*6,0),u.scale.setScalar(.8+U.s*.6)}),D=[],z=[];for(const U of t.paths)for(const vt of[-1,1]){let ut=null,Kt=0,te=0;for(let Tt=2;Tt<U.length-7;Tt+=1.7){const Jt=Tt/U.length,se=U.curve.getPointAt(Jt),me=U.curve.getTangentAt(Jt),Ee=se.x-me.z*vt*2.25,rn=se.z+me.x*vt*2.25,Xn=o(Ee,rn);if(!(Xn>.5&&te<=0&&v(Ee,rn,1.9,2.6,6))){ut=null,te>0&&te--;continue}D.push({x:Ee,z:rn,h:Xn}),ut&&z.push({a:ut,b:{x:Ee,z:rn,h:Xn}}),ut={x:Ee,z:rn,h:Xn},++Kt>4+Math.floor(n()*5)&&(Kt=0,ut=null,te=3+Math.floor(n()*5))}}const k=new Cn(.14,.8,.14);k.translate(0,.4,0);const X=new Cn(1,.07,.06),V=nn("#a07650");m(k,V,D,U=>{u.position.set(U.x,U.h-.05,U.z),u.rotation.set(0,n()*.3,(n()-.5)*.12),u.scale.set(1,1,1)},!0);const j=z.flatMap(U=>[{...U,y:.32},{...U,y:.62}]);m(X,V,j,({a:U,b:vt,y:ut})=>{const Kt=Math.hypot(vt.x-U.x,vt.z-U.z);u.position.set((U.x+vt.x)/2,(U.h+vt.h)/2+ut-.05,(U.z+vt.z)/2),u.rotation.set(0,-Math.atan2(vt.z-U.z,vt.x-U.x),0),u.scale.set(Kt,1,1)},!0);const nt=r.dockTheta??-2.35,rt=new Et(Math.cos(nt),Math.sin(nt)),Ct=s(nt);let kt=Ct-6;for(let U=Ct-10;U<Ct+4;U+=.25)if(o(rt.x*U,rt.y*U)<.3){kt=U;break}const H=new _e,K=nn("#b48a5e"),ht=nn("#6e4a2c"),ot=8,At=kt-2.5;for(let U=0;U<ot/.55;U++){const vt=new oe(new Cn(.5,.12,2.2),K);vt.position.set(At+U*.55,.75+(n()-.5)*.04,0),vt.rotation.y=(n()-.5)*.05,vt.castShadow=vt.receiveShadow=!0,H.add(vt)}for(let U=0;U<=ot;U+=2)for(const vt of[-1,1]){const ut=new oe(new He(.12,.12,2.2,6),ht);ut.position.set(At+U,.1,vt*1.05),ut.castShadow=!0,H.add(ut)}H.rotation.y=-nt,i.add(H);const Dt=new _e,Ut=new He(.9,.9,3.4,10,1,!0,0,Math.PI);Ut.rotateZ(Math.PI/2),Ut.rotateX(Math.PI/2),Ut.scale(1,.6,.7);const Wt=new oe(Ut,nn("#3f6f9a",{side:Ke}));Wt.rotation.y=Math.PI/2,Wt.castShadow=!0,Dt.add(Wt);for(const U of[-.6,.6]){const vt=new oe(new Cn(.3,.08,1.2),K);vt.position.set(U,-.15,0),Dt.add(vt)}const dt=new oe(new Cn(2.4,.06,.12),K);dt.position.set(.2,.05,.4),dt.rotation.y=.3,Dt.add(dt);const _t=rt.x*(At+ot-1)+-rt.y*2.1,F=rt.y*(At+ot-1)+rt.x*2.1;Dt.position.set(_t,.3,F),Dt.rotation.y=-nt,i.add(Dt);const qt=new _e,yt=new oe(new Zn(3,1.4,10,5),new De({color:"#4a3a2a",wireframe:!0}));yt.position.y=1;const Ot=yt.geometry.attributes.position;for(let U=0;U<Ot.count;U++)Ot.setZ(U,Math.sin(Ot.getX(U)/3*Math.PI+1.5)*.15-Math.abs(Ot.getY(U))*.05);qt.add(yt);for(const U of[-1.6,1.6]){const vt=new oe(new He(.07,.09,2,5),ht);vt.position.set(U,.9,0),vt.castShadow=!0,qt.add(vt)}for(let U=0;U<5;U++){const vt=new oe(new Gn(.09,6,4),nn("#f0a43a"));vt.position.set(-1.2+U*.6,1.66,.05),qt.add(vt)}const It=kt-4.5,ee=4.2,Y=rt.x*It-rt.y*ee,R=rt.y*It+rt.x*ee;qt.position.set(Y,o(Y,R)-.1,R),qt.rotation.y=-nt+Math.PI/2,i.add(qt),p.push({x:Y,z:R,r:1.4});const w=new He(.42,.42,.95,10);w.translate(0,.47,0);const W=new He(.44,.44,.08,10),Q=new Cn(.8,.8,.8);Q.translate(0,.4,0);const it=[],st=(U,vt,ut,Kt)=>{for(let te=0;te<60&&ut>0;te++){const Tt=U+(n()-.5)*6,Jt=vt+(n()-.5)*6,se=o(Tt,Jt);se<.4||!v(Tt,Jt,2.3,2.4,4.6)||it.some(me=>Math.hypot(me.x-Tt,me.z-Jt)<1.1)||(it.push({x:Tt,z:Jt,h:se,kind:Kt??(n()<.6?"barrel":"crate"),r:n()}),ut--)}};st(rt.x*(kt-2.5),rt.y*(kt-2.5),5),st(h.x+6,h.z+1,3,"barrel"),st(h.x-6,h.z+2,2);const Ft=it.filter(U=>U.kind==="barrel"),St=it.filter(U=>U.kind==="crate");m(w,nn("#8a5a36"),Ft,U=>{u.position.set(U.x,U.h-.05,U.z),u.rotation.set(0,U.r*6,0),u.scale.setScalar(1)},!0),m(W,nn("#3e3a38"),Ft.flatMap(U=>[{...U,y:.2},{...U,y:.75}]),U=>{u.position.set(U.x,U.h-.05+U.y,U.z)},!1),m(Q,nn("#b8925e"),St,U=>{u.position.set(U.x,U.h-.05,U.z),u.rotation.set(0,U.r*6,0),u.scale.setScalar(.8+U.r*.4)},!0);for(const U of it)p.push({x:U.x,z:U.z,r:.55});const Lt=x(Math.round(380*d),(U,vt,ut)=>ut>.9&&v(U,vt,1.6,1.6,4.4)),re=new xs(.06,0);re.translate(0,.06,0),m(re,new We({color:a==="vulkan"?"#ff9a5a":"#fffdf4"}),Lt,U=>{u.position.set(U.x,U.h-.02,U.z),u.rotation.set(0,0,0),u.scale.setScalar(.8+U.s*.8)});const bt=(U,vt,ut)=>{const Kt=[];for(let te=0;te<U*40&&Kt.length<U;te++){const Tt=(n()-.5)*130,Jt=(n()-.5)*130,se=o(Tt,Jt),me=.05-se;me>vt&&me<ut&&Math.hypot(Tt-h.x,Jt-h.z)>6&&Kt.push({x:Tt,z:Jt,h:se,r:n(),s:n()})}return Kt},Yt=$i([0,1,2].map(U=>{const vt=new Bn(.08,.9+U*.25,3);return vt.translate((U-1)*.12,.45+U*.12,U%2*.1),vt.rotateZ((U-1)*.25),vt})),ae=bt(Math.round(90*d),.35,1.8),le=m(Yt,nn("#4f9a5a"),ae,U=>{u.position.set(U.x,U.h,U.z),u.rotation.set(0,U.r*6,0),u.scale.setScalar(.8+U.s*.7)}),Zt=$i([[0,0,.32],[.3,.1,.22],[-.25,.05,.26],[.05,.3,.2]].map(([U,vt,ut])=>{const Kt=new xs(ut,0);return Kt.translate(U,ut*.8,vt),Kt})),ye=bt(Math.round((a==="tak"?28:0)*d),.5,1.6),ce=["#b58cff","#ff8fa8","#ffc65a","#7fd6ff"];if(m(Zt,nn("#ffffff"),ye,(U,vt,ut)=>{u.position.set(U.x,U.h,U.z),u.rotation.set(0,U.r*6,0),u.scale.setScalar(.8+U.s*.9),ut.setColorAt(vt,f.set(ce[Math.floor(U.r*ce.length)]))}),a==="tak"){const U=$i([[0,0,0,.55],[.12,.05,.4,.42],[-.13,-.04,-.45,.4],[.05,.12,.2,.33],[-.06,-.1,-.15,.36]].map(([Tt,Jt,se,me])=>{const Ee=new Bn(.05,me,4);return Ee.translate(0,me/2,0),Ee.rotateZ(se),Ee.rotateX(Jt*2),Ee.translate(Tt,0,Jt),Ee})),vt=$i([(()=>{const Tt=new He(.12,.16,.12,7);return Tt.translate(0,.06,0),Tt})(),...Array.from({length:7},(Tt,Jt)=>{const se=new Bn(.025,.2,3),me=Jt/7*6.28;return se.translate(0,.1,0),se.rotateZ(.5),se.rotateY(me),se.translate(Math.cos(me)*.08,.12,-Math.sin(me)*.08),se})]),ut=x(Math.round(16*d),(Tt,Jt,se)=>.05-se>.08&&t.landDist(Tt,Jt)>5,3e4).map(Tt=>({...Tt,big:2.4,pool:!0})),Kt=[...bt(Math.round(36*d),.12,.9),...ut],te=["#ff5a80","#a060ff","#ffb820","#ff5a2a","#ff7ad0","#f4d070"];m(U,nn("#ffffff"),Kt.filter((Tt,Jt)=>Jt%2===0),(Tt,Jt,se)=>{u.position.set(Tt.x,Tt.h-.02,Tt.z),u.rotation.set(0,Tt.r*6,0),u.scale.setScalar((.8+Tt.s*.8)*(Tt.big??1)),se.setColorAt(Jt,f.set(te[Math.floor(Tt.r*te.length)]).multiplyScalar(Tt.pool?1.6:1))}),m(vt,nn("#ffffff"),Kt.filter((Tt,Jt)=>Jt%2===1),(Tt,Jt,se)=>{u.position.set(Tt.x,Tt.h-.02,Tt.z),u.rotation.set(0,Tt.r*6,0),u.scale.setScalar((.9+Tt.s*.9)*(Tt.big??1)),se.setColorAt(Jt,f.set(te[(Math.floor(Tt.s*te.length)+2)%te.length]).multiplyScalar(Tt.pool?1.6:1))})}const Se=$i([(()=>{const U=new Gn(.17,7,4);return U.scale(1.2,.5,.85),U.translate(0,.07,0),U})(),...[-1,1].map(U=>{const vt=new Gn(.06,5,3);return vt.scale(1.3,.7,1),vt.translate(U*.17,.08,.15),vt}),...[-1,1].flatMap(U=>[0,1,2].map(vt=>{const ut=new Cn(.16,.02,.02);return ut.rotateZ(U*-.5),ut.translate(U*.18,.04,-.06+vt*.07),ut})),...[-1,1].map(U=>{const vt=new Gn(.025,4,3);return vt.translate(U*.05,.13,.09),vt})]),q=a==="vulkan"?[]:x(Math.round((a==="vinter"?5:18)*d),(U,vt,ut)=>ut>.08&&ut<.42&&v(U,vt,2.2,2,5),12e3).map(U=>({...U,home:{x:U.x,z:U.z},dir:U.r*6.28,t:U.s*4,run:0})),zt=m(Se,nn(a==="vinter"?"#b8584a":"#d8553a"),q,U=>{u.position.set(U.x,U.h,U.z),u.rotation.set(0,U.dir,0),u.scale.setScalar(1)},!0),lt=$i([(()=>{const vt=new Gn(.07,6,4);return vt.scale(.6,.5,1.4),vt})(),(()=>{const vt=new Bn(.06,.1,3);return vt.rotateX(-Math.PI/2),vt.translate(0,0,-.13),vt})()]),xt=[...bt(Math.round(26*d),.1,.8),...x(Math.round(12*d),(U,vt,ut)=>.05-ut>.12&&t.landDist(U,vt)>5,3e4).map(U=>({...U,big:1.5}))].map(U=>({...U,rad:.5+U.s*.9,sp:(.5+U.r)*(U.s<.5?1:-1)})),Bt=["#ff9a3a","#3a7ad8","#f2c94c","#2f8f9a"],Gt=m(lt,nn("#ffffff"),xt,(U,vt,ut)=>{u.position.set(U.x,U.h,U.z),ut.setColorAt(vt,f.set(Bt[vt%Bt.length]))}),ue=new mr(.16,0);ue.scale(.45,.3,1.4);const Fe=bt(e.mobile?5:8,.9,2.6).map(U=>({...U,rad:2+U.s*3,speed:(.25+U.r*.3)*(U.r<.5?1:-1)})),ke=9,we=new gn(ue,new De({color:"#2f5f72",transparent:!0,opacity:.75}),Math.max(1,Fe.length*ke));we.count=Fe.length*ke,we.renderOrder=1,i.add(we);const xn=Array.from({length:ke},()=>[(n()-.5)*1.4,(n()-.5)*.25,(n()-.5)*1.4,n()*6]),dn=U=>{Dt.position.y=.3+Math.sin(U*1.2)*.08,Dt.rotation.z=Math.sin(U*.9)*.04,Dt.rotation.x=Math.sin(U*1.3+1)*.03,Fe.forEach((ut,Kt)=>{const te=U*ut.speed+ut.r*6,Tt=ut.x+Math.cos(te)*ut.rad,Jt=ut.z+Math.sin(te)*ut.rad,se=Math.atan2(-Math.sin(te)*ut.speed,Math.cos(te)*ut.speed);for(let me=0;me<ke;me++){const[Ee,rn,Xn,Jn]=xn[me];u.position.set(Tt+Ee+Math.sin(U*2+Jn)*.1,Math.max(o(Tt,Jt)+.25,-.75)+rn,Jt+Xn),u.rotation.set(0,se+Math.sin(U*6+Jn)*.15,0),u.scale.setScalar(1),u.updateMatrix(),we.setMatrixAt(Kt*ke+me,u.matrix)}}),we.instanceMatrix.needsUpdate=!0,xt.forEach((ut,Kt)=>{const te=U*ut.sp+ut.r*6+Math.sin(U*.7+Kt)*.6,Tt=ut.x+Math.cos(te)*ut.rad,Jt=ut.z+Math.sin(te)*ut.rad;u.position.set(Tt,Math.min(o(Tt,Jt)+.08,0),Jt),u.rotation.set(0,-te+(ut.sp>0?0:Math.PI),Math.sin(U*9+Kt)*.2),u.scale.setScalar((.9+ut.s*.5)*(ut.big??1)),u.updateMatrix(),Gt.setMatrixAt(Kt,u.matrix)}),Gt.instanceMatrix.needsUpdate=!0;const vt=Math.min(.05,Math.max(0,U-(dn.last??U)));dn.last=U,q.forEach((ut,Kt)=>{if(ut.t-=vt,ut.t<=0&&(ut.run>0?(ut.run=0,ut.t=.8+Math.random()*2.5):(ut.run=(Math.random()<.5?-1:1)*(.9+Math.random()*.8),ut.t=.4+Math.random()*.9,Math.random()<.3&&(ut.dir+=(Math.random()-.5)*1.5))),ut.run){const te=ut.x+Math.cos(ut.dir)*ut.run*vt,Tt=ut.z-Math.sin(ut.dir)*ut.run*vt,Jt=o(te,Tt);Jt>.05&&Jt<.5&&Math.hypot(te-ut.home.x,Tt-ut.home.z)<3.5?(ut.x=te,ut.z=Tt,ut.h=Jt):ut.run=-ut.run}u.position.set(ut.x,ut.h+(ut.run?Math.abs(Math.sin(U*30+Kt))*.015:0),ut.z),u.rotation.set(0,ut.dir,ut.run?Math.sin(U*30+Kt)*.08:0),u.scale.setScalar(1),u.updateMatrix(),zt.setMatrixAt(Kt,u.matrix)}),zt.instanceMatrix.needsUpdate=!0,!((U*60|0)%2)&&(O.forEach((ut,Kt)=>{u.position.set(ut.x,ut.h-.1,ut.z),u.rotation.set(Math.sin(U*1.7+ut.x*.3)*.08,ut.r*6,Math.cos(U*1.4+ut.z*.3)*.08),u.scale.setScalar(.8+ut.s*.6),u.updateMatrix(),G.setMatrixAt(Kt,u.matrix)}),G.instanceMatrix.needsUpdate=!0,ae.forEach((ut,Kt)=>{u.position.set(ut.x,ut.h,ut.z),u.rotation.set(Math.sin(U*1.1+ut.x)*.12,ut.r*6,Math.cos(U*.9+ut.z)*.12),u.scale.setScalar(.8+ut.s*.7),u.updateMatrix(),le.setMatrixAt(Kt,u.matrix)}),le.instanceMatrix.needsUpdate=!0)};H.updateMatrixWorld(!0);const Kn=[];return H.children.forEach(U=>{if(U.geometry.type==="CylinderGeometry"){const vt=U.getWorldPosition(new B);Kn.push({x:vt.x,z:vt.z,r:.15})}}),Kn.push({x:_t,z:F,r:.9}),{colliders:p,update:dn,obstacles:Kn}}function fh(i,{heightTex:t,ext:e,grid:n,quality:s,sunDir:r,colors:a,level:o=.05,size:l=220,center:c=[0,0],maxDepth:h=100}){const u=li.merge([Ht.fog,{uTime:{value:0},uHeight:{value:t},uExt:{value:e},uGrid:{value:n},uLevel:{value:o},uMaxDepth:{value:h},uShallow:{value:new Pt(a.shallow)},uMid:{value:new Pt(a.mid)},uDeep:{value:new Pt(a.deep)},uSun:{value:r.clone().normalize()},uCaustic:{value:(s.mobile?.8:1)*a.caustic}}]);u.uHeight.value=t;const f=new $e({uniforms:u,transparent:!0,depthWrite:!1,fog:!0,vertexShader:`
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
      }`}),p=l<50?8:s.mobile?40:64,v=new Zn(l,l,p,p);v.rotateX(-Math.PI/2);const x=new oe(v,f);return x.position.set(c[0],o,c[1]),x.renderOrder=2,i.add(x),{mesh:x,update(m){u.uTime.value=m}}}function dh(i,t){const e=new uo(Float32Array.from(i),t,t,oo,hi);return e.magFilter=e.minFilter=vn,e.generateMipmaps=!1,e.needsUpdate=!0,e}const ac={uOlPx:{value:2},uOlRes:{value:new Et(1,1)},uInk:{value:new Pt("#1f1a1c")}},r_=.16,a_=.65,oc={rock:new Set,tree:new Set,tower:new Set,figure:new Set},lc={rock:!0,tree:!0,tower:!0,figure:!0};function o_(i,t,e,n){ac.uOlPx.value=i*t,ac.uOlRes.value.set(Math.max(1,e*t),Math.max(1,n*t))}function Af(i){for(const t in oc)lc[t]=!!i[t],oc[t].forEach(e=>e.visible=lc[t])}function Cf(i){if(i.attributes.olNormal)return;i.attributes.normal||i.computeVertexNormals();const t=i.attributes.position,e=i.attributes.normal,n=t.count,s=new Map,r=new Array(n);for(let o=0;o<n;o++){const l=`${Math.round(t.getX(o)*1e4)},${Math.round(t.getY(o)*1e4)},${Math.round(t.getZ(o)*1e4)}`;r[o]=l;const c=s.get(l)||[0,0,0];c[0]+=e.getX(o),c[1]+=e.getY(o),c[2]+=e.getZ(o),s.set(l,c)}const a=new Float32Array(n*3);for(let o=0;o<n;o++){const l=s.get(r[o]),c=Math.hypot(l[0],l[1],l[2])||1;a[o*3]=l[0]/c,a[o*3+1]=l[1]/c,a[o*3+2]=l[2]/c}i.setAttribute("olNormal",new Ge(a,3))}const nl=new Map;function Rf(i,t,e,n){const s=`${i?i.uuid:"batch"}|${t}|${e}|${n}`;if(nl.has(s))return nl.get(s);const r=new De({side:Pn,vertexColors:e});return r.color.copy(e||!i?new Pt(1,1,1):i.color).multiplyScalar(r_),r.visible=lc[t],r.onBeforeCompile=a=>{Object.assign(a.uniforms,ac),a.vertexShader=`attribute vec3 olNormal;
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
      diffuseColor.rgb = mix(diffuseColor.rgb, uInk, ${a_.toFixed(2)});`),n&&(a.uniforms.uKeep=gr.uKeep,a.uniforms.uRad=gr.uRad,a.fragmentShader=`uniform vec3 uKeep;
uniform float uRad;
`+a.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        {
          float k = 1.0 - smoothstep(uRad * 0.55, uRad, length(gl_FragCoord.xy - uKeep.xy));
          if (k > 0.0 && vOlZ < uKeep.z + 0.8) { // kronen ligger ~2 enheter nærmere kameraet enn foten
            float b = fract(52.9829189 * fract(dot(floor(gl_FragCoord.xy), vec2(0.06711056, 0.00583715)))); // samme støy som trærne (G7)
            if (k * 0.95 > b + 0.02) discard;
          }
        }`))},r.customProgramCacheKey=()=>`ol${n?"f":""}`,oc[t].add(r),nl.set(s,r),r}const Pf=i=>{const t=i.material;return i.isMesh&&!Array.isArray(t)&&(t.isMeshLambertMaterial||t.isMeshStandardMaterial)&&!t.transparent&&t.side!==Ke};function cc(i,t,e=!1){if(!Pf(i))return null;Cf(i.geometry);const n=!!(i.material.vertexColors&&i.geometry.attributes.color),s=new gn(i.geometry,Rf(i.material,t,n,e),i.instanceMatrix.count);return s.instanceMatrix=i.instanceMatrix,s.count=i.count,s.frustumCulled=!1,s.renderOrder=1,s.onBeforeRender=()=>{s.count=i.count},i.add(s),s}const ph=512,mh=new Map;let uc=null;function l_(i){uc=i}function c_(i,t){const e=`${i.uuid}|${t}`;let n=mh.get(e);if(n)return n;Cf(i);const s=new gn(i,Rf(null,t,!1,!1),ph);return s.instanceMatrix.setUsage(iu),s.setColorAt(0,new Pt),s.instanceColor.setUsage(iu),s.count=0,s.frustumCulled=!1,s.matrixAutoUpdate=!1,s.renderOrder=1,s.raycast=()=>{},n={mesh:s,parts:[]},s.onBeforeRender=()=>{const r=s.instanceMatrix.array,a=s.instanceColor.array;let o=0;for(let l=n.parts.length-1;l>=0;l--){const c=n.parts[l];let h=c,u=!0;for(;h.parent;){if(!h.visible){u=!1;break}h=h.parent}if(h!==uc){++c.userData.olMiss>300&&n.parts.splice(l,1);continue}if(c.userData.olMiss=0,!u||o>=ph)continue;r.set(c.matrixWorld.elements,o*16);const f=c.material.color;a[o*3]=f.r,a[o*3+1]=f.g,a[o*3+2]=f.b,o++}s.count=o,o&&(s.instanceMatrix.clearUpdateRanges(),s.instanceMatrix.addUpdateRange(0,o*16),s.instanceColor.clearUpdateRanges(),s.instanceColor.addUpdateRange(0,o*3),s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0)},uc.add(s),mh.set(e,n),n}function aa(i,t){return i.traverse(e=>{!Pf(e)||e.userData.noOutline||(e.userData.olMiss=0,c_(e.geometry,t).parts.push(e))}),i}function Ts(i){const t=i.map(([u])=>u.index?u.toNonIndexed():u),e=t.reduce((u,f)=>u+f.attributes.position.count,0),n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Pt,a=new B;let o=0;t.forEach((u,f)=>{const p=i[f][1],v=u.attributes.position;for(let x=0;x<v.count;x++)a.fromBufferAttribute(v,x),p(a,r),n.set([a.x,a.y,a.z],(o+x)*3),s.set([r.r,r.g,r.b],(o+x)*3);o+=v.count});const l=new ze;l.setAttribute("position",new Ge(n,3)),l.setAttribute("color",new Ge(s,3)),l.computeVertexNormals();let c=0;const h=l.attributes.normal;return t.forEach((u,f)=>{const p=i[f][2],v=u.attributes.position.count;if(p)for(let x=0;x<v;x++)a.fromBufferAttribute(l.attributes.position,c+x).sub(p).normalize(),h.setXYZ(c+x,a.x,a.y,a.z);c+=v}),l}const hc=.7,fc=3.8;function u_(){const i=[],e=fc/8,n=new Pt("#7a5434"),s=new Pt("#a57a4e");for(let r=0;r<8;r++){const a=r/8,o=(r+1)/8,l=.24-a*.08,c=.24-o*.08,h=new He(c,l*1.12,e,7,1),u=h.attributes.position;for(let f=0;f<u.count;f++){const p=u.getY(f)+e/2+r*e,v=p/fc;u.setXYZ(f,u.getX(f)+hc*v*v,p,u.getZ(f))}i.push([h,(f,p)=>p.copy(n).lerp(s,f.y/e%1).multiplyScalar(.55+.45*xe.smoothstep(f.y,0,1.3))])}return Ts(i)}function h_(i){const n=[],s=[];for(let a=0;a<=12;a++){const o=a/12;s.push(new B(0,.35*o-1.25*o*o,o*2.7))}for(let a=0;a<12;a++){const o=a/12,l=s[a],c=s[a+1],h=.62*Math.sin(Math.PI*Math.min(1,o*1.1+.08))+.05;for(const u of[-1,1]){const f=new B(u*h,l.y-.08-h*.25,l.z+.32);u>0?n.push(l.x,l.y,l.z,c.x,c.y,c.z,f.x,f.y,f.z):n.push(l.x,l.y,l.z,f.x,f.y,f.z,c.x,c.y,c.z)}}const r=new ze;return r.setAttribute("position",new pe(n,3)),r}function f_(){const i=[],t=new Pt("#3f8a3a"),e=new Pt("#9ad25a"),n=8;for(let s=0;s<n;s++){const r=h_();r.rotateX(-.15+s%2*.25),r.rotateY(s/n*Math.PI*2+s%2*.2),i.push([r,(a,o)=>{const l=Math.hypot(a.x,a.z);o.copy(t).lerp(e,Math.min(1,l/2.4))}])}for(let s=0;s<3;s++){const r=new Gn(.16,6,4);r.translate(Math.cos(s*2.1)*.18,-.2,Math.sin(s*2.1)*.18),i.push([r,(a,o)=>o.set("#6b4a2a")])}return Ts(i)}function gh(i,t,e){const n=i.map(([s,r,a,o],l)=>{const c=new xs(o,2),h=c.attributes.position;for(let u=0;u<h.count;u++){const f=h.getX(u),p=h.getY(u),v=h.getZ(u),x=1+.07*Math.sin(f*7+l)*Math.sin(p*6)+.05*Math.sin(v*9+p*4);h.setXYZ(u,f*x,p*x*.92,v*x)}return c.translate(s,r,a),[c,(u,f)=>f.copy(e).lerp(t,xe.smoothstep(u.y,r-o*.6,r+o*.9)).multiplyScalar((.6+.4*xe.smoothstep(u.y,r-o,r))*(.55+.45*xe.smoothstep(Math.hypot(u.x,u.z),.1,.9+o*.5))),new B(s,r,a)]});return Ts(n)}function d_(i){const t=[],e=new Pt("#2f6a48"),n=new Pt("#4a8a5a"),s=new Pt("#ffffff");return[[1.5,1.5,.9],[1.15,1.35,1.8],[.8,1.2,2.6],[.45,.9,3.25]].forEach(([r,a,o])=>{const l=new Bn(r,a,10,2),c=l.attributes.position;for(let h=0;h<c.count;h++)c.getY(h)<-a/2+.01&&c.setY(h,c.getY(h)+Math.sin(h*1.7)*.12);l.translate(0,o,0),t.push([l,(h,u)=>{const f=(h.y-o+a/2)/a;u.copy(e).lerp(n,f),i&&f>.12&&u.lerp(s,Math.min(1,(f-.12)*2.6))}])}),Ts(t)}function p_(){const i=[],t=new He(.12,.26,3,6,4),e=t.attributes.position;for(let n=0;n<e.count;n++){const s=e.getY(n);e.setX(n,e.getX(n)+Math.sin(s*1.7)*.12)}return t.translate(0,1.5,0),i.push([t,(n,s)=>s.set(n.y<.4?"#1e1a18":"#3a302a")]),[[.4,1.9,.9,.7],[-.5,2.3,-.8,.6],[.2,2.7,.6,.5]].forEach(([n,s,r,a])=>{const o=new He(.03,.08,a,4);o.translate(0,a/2,0),o.rotateZ(r),o.translate(n*.3,s,0),i.push([o,(l,c)=>c.set("#2e2622")])}),Ts(i)}const gr={uKeep:{value:new B(-1e4,-1e4,0)},uRad:{value:120}};function vh(i){return i.onBeforeCompile=t=>{t.uniforms.uKeep=gr.uKeep,t.uniforms.uRad=gr.uRad,t.fragmentShader=t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
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
      }`)},i}function m_(i,t,e,n){const s=t.filter(D=>D.kind==="palm"),r=t.filter(D=>D.kind==="round"),a=t.filter(D=>D.kind==="bush"),o=t.filter(D=>D.kind==="pine"),l=t.filter(D=>D.kind==="dead"),c=vh(new We({vertexColors:!0})),h=vh(new We({vertexColors:!0,side:Ke})),u=new Pt(n.trees.leaf[0]),f=new Pt(n.trees.leaf[1]),p=new He(.16,.26,1.6,7);p.translate(0,.8,0);const v=Ts([[p,(D,z)=>z.set("#7a5434").multiplyScalar(.55+.45*xe.smoothstep(D.y,0,1.1))]]),x=gh([[0,2.2,0,1.15],[.8,1.9,.3,.8],[-.7,1.95,-.2,.85],[.1,2,-.85,.75],[-.2,2.9,.2,.8],[.35,1.8,.85,.7]],u,f),m=gh([[0,.45,0,.6],[.5,.35,.2,.45],[-.45,.38,-.15,.48],[.05,.7,.1,.42]],u,f),d=(D,z,k)=>{const X=new gn(D,z,Math.max(1,k));return X.count=k,X.castShadow=!0,X.receiveShadow=!0,i.add(X),cc(X,"tree",!0),X},y=d(u_(),c,s.length),S=d(f_(),h,s.length),g=d(v,c,r.length),A=d(x,c,r.length),E=d(m,c,a.length),b=new He(.14,.22,1.2,6);b.translate(0,.6,0);const C=d(Ts([[b,(D,z)=>z.set("#5a3e2a").multiplyScalar(.55+.45*xe.smoothstep(D.y,0,1))]]),c,o.length),M=d(d_(n.id==="vinter"),c,o.length),_=d(p_(),c,l.length),T=new Ve;s.forEach((D,z)=>{T.position.set(D.x,D.y-.1,D.z),T.rotation.set(0,D.phase,0),T.scale.setScalar(D.s),T.updateMatrix(),y.setMatrixAt(z,T.matrix)}),r.forEach((D,z)=>{T.position.set(D.x,D.y-.1,D.z),T.rotation.set(0,D.phase,0),T.scale.setScalar(D.s),T.updateMatrix(),g.setMatrixAt(z,T.matrix)}),o.forEach((D,z)=>{T.position.set(D.x,D.y-.1,D.z),T.rotation.set(0,D.phase,0),T.scale.setScalar(D.s),T.updateMatrix(),C.setMatrixAt(z,T.matrix)}),l.forEach((D,z)=>{T.position.set(D.x,D.y-.1,D.z),T.rotation.set(0,D.phase,(D.phase%1-.5)*.15),T.scale.setScalar(D.s),T.updateMatrix(),_.setMatrixAt(z,T.matrix)});const O=D=>{s.forEach((z,k)=>{const X=Math.cos(z.phase),V=Math.sin(z.phase);T.position.set(z.x+hc*X*z.s,z.y-.1+fc*z.s,z.z-hc*V*z.s),T.rotation.set(Math.sin(D*1.2+z.phase)*.07,z.phase+Math.sin(D*.7+z.phase)*.05,Math.cos(D*1+z.phase)*.07),T.scale.setScalar(z.s),T.updateMatrix(),S.setMatrixAt(k,T.matrix)}),S.instanceMatrix.needsUpdate=!0,r.forEach((z,k)=>{T.position.set(z.x,z.y-.1,z.z),T.rotation.set(Math.sin(D*1.1+z.phase)*.025,z.phase,Math.cos(D*.9+z.phase)*.025),T.scale.setScalar(z.s),T.updateMatrix(),A.setMatrixAt(k,T.matrix)}),A.instanceMatrix.needsUpdate=!0,a.forEach((z,k)=>{const X=1+Math.sin(D*1.6+z.phase)*.035;T.position.set(z.x,z.y-.12,z.z),T.rotation.set(0,z.phase,0),T.scale.set(z.s*X,z.s/X,z.s*X),T.updateMatrix(),E.setMatrixAt(k,T.matrix)}),E.instanceMatrix.needsUpdate=!0,o.forEach((z,k)=>{T.position.set(z.x,z.y-.1,z.z),T.rotation.set(Math.sin(D*.9+z.phase)*.02,z.phase,Math.cos(D*.8+z.phase)*.02),T.scale.setScalar(z.s),T.updateMatrix(),M.setMatrixAt(k,T.matrix)}),M.instanceMatrix.needsUpdate=!0};return O(0),{colliders:[...s.map(D=>({x:D.x,z:D.z,r:.35*D.s})),...r.map(D=>({x:D.x,z:D.z,r:.4*D.s})),...a.map(D=>({x:D.x,z:D.z,r:.7*D.s})),...o.map(D=>({x:D.x,z:D.z,r:.4*D.s})),...l.map(D=>({x:D.x,z:D.z,r:.3*D.s}))],update:O}}function il(i,t=5){const e=[],n=[],s=new Pt,r=new Pt;for(let o=0;o<t;o++){const l=i()*Math.PI*2,c=i()*.16,h=.28+i()*.3,u=.04+i()*.03,f=Math.cos(l)*c,p=Math.sin(l)*c,v=(i()-.5)*.25,x=i()*Math.PI,m=Math.cos(x)*u,d=Math.sin(x)*u;e.push(f-m,0,p-d,f+m,0,p+d,f+Math.cos(l)*v,h,p+Math.sin(l)*v),s.setRGB(.72,.72,.72),r.setRGB(1.2,1.22,1.12),n.push(s.r,s.g,s.b,s.r,s.g,s.b,r.r,r.g,r.b)}const a=new ze;return a.setAttribute("position",new pe(e,3)),a.setAttribute("color",new pe(n,3)),a.setAttribute("normal",new pe(new Array(e.length/3).fill(0).flatMap(()=>[0,1,0]),3)),a}function g_(){const i=[];for(let a=0;a<3;a++){const o=new Gn(.07,6,3);o.scale(1,.25,1.15);const l=a*2.094;o.translate(Math.cos(l)*.065,.05,Math.sin(l)*.065),i.push(o.toNonIndexed())}const t=i.reduce((a,o)=>a+o.attributes.position.count,0),e=new Float32Array(t*3),n=new Float32Array(t*3);let s=0;for(const a of i)e.set(a.attributes.position.array,s*3),n.set(a.attributes.normal.array,s*3),s+=a.attributes.position.count;const r=new ze;return r.setAttribute("position",new Ge(e,3)),r.setAttribute("normal",new Ge(n,3)),r}function v_(i,t,e,n,s){const{heightAt:r,pathDist:a,plinths:o}=t,l=t.lighthouse.pos,c={uTime:{value:0}},u=(T=>(T.onBeforeCompile=O=>{O.uniforms.uTime=c.uTime,O.vertexShader=O.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          #ifdef USE_INSTANCING
            vec2 ip = instanceMatrix[3].xz;
          #else
            vec2 ip = vec2(0.0);
          #endif
          float sway = sin(uTime * 1.8 + ip.x * 0.35 + ip.y * 0.27) * 0.6 + sin(uTime * 3.1 + ip.x * 1.3) * 0.25;
          transformed.x += sway * transformed.y * 0.22;
          transformed.z += cos(uTime * 1.5 + ip.y * 0.4) * transformed.y * 0.12;`),O.fragmentShader=O.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
  normal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);`)},T))(new We({vertexColors:!0,side:Ke})),f=new We({color:"#ffffff"}),p=[il(s,7),il(s,8),il(s,6)],v=g_(),x={tak:{grass:["#4a8638","#86b452"],density:1,clover:.22,cloverCol:["#3a8a3a","#5aa84a"]},vinter:{grass:["#9a9a7a","#c8c4a0"],density:.18,clover:0,cloverCol:["#fff","#fff"]},vulkan:{grass:["#4a5a30","#6a7a3a"],density:.35,clover:0,cloverCol:["#fff","#fff"]}}[n.id],m=(e.mobile?.45:1)*x.density,d=13,y=8,S=Math.round(720*m),g=[],A=new Ve,E=new Pt,b=new Pt(x.grass[0]),C=new Pt(x.grass[1]),M=(T,O,G)=>{if(G<.72)return!1;const D=a(T,O);if(D<1||D<1.7&&s()<.6||Math.hypot(T-l.x,O-l.z)<4.3||n.volcano&&Math.hypot(T-n.volcano.x,O-n.volcano.z)<n.volcano.r*.7)return!1;for(const z of o)if((z.x-T)**2+(z.z-O)**2<2.6)return!1;return!t.extrasBlock||!t.extrasBlock(T,O)};for(let T=0;T<y;T++)for(let O=0;O<y;O++){const G=-y*d/2+T*d,D=-y*d/2+O*d;for(const[z,k]of[[0,S*.4],[1,S*.35],[2,S*.25]]){const X=[];for(let j=0;j<k*3&&X.length<k;j++){const nt=G+s()*d,rt=D+s()*d,Ct=r(nt,rt);M(nt,rt,Ct)&&X.push([nt,rt,Ct])}if(!X.length)continue;const V=new gn(p[z],u,X.length);V.userData.tier=z,X.forEach(([j,nt,rt],Ct)=>{A.position.set(j,rt-.04,nt),A.rotation.set(0,s()*6.28,0),A.scale.setScalar(.8+s()*.7),A.updateMatrix(),V.setMatrixAt(Ct,A.matrix),V.setColorAt(Ct,E.copy(b).lerp(C,s()).multiplyScalar(t.shadeAt?t.shadeAt(j,nt):1))}),V.receiveShadow=!0,V.computeBoundingSphere(),i.add(V),g.push(V)}if(x.clover>0){const z=[],k=G+s()*d,X=D+s()*d;for(let V=0;V<S*x.clover*3&&z.length<S*x.clover;V++){const j=k+(s()-.5)*6,nt=X+(s()-.5)*6,rt=r(j,nt);M(j,nt,rt)&&z.push([j,nt,rt])}if(z.length){const V=new gn(v,f,z.length),j=new Pt(x.cloverCol[0]),nt=new Pt(x.cloverCol[1]);z.forEach(([rt,Ct,kt],H)=>{A.position.set(rt,kt-.02,Ct),A.rotation.set(0,s()*6.28,0),A.scale.setScalar(.8+s()*.8),A.updateMatrix(),V.setMatrixAt(H,A.matrix),V.setColorAt(H,E.copy(j).lerp(nt,s()).multiplyScalar(t.shadeAt?t.shadeAt(rt,Ct):1))}),V.receiveShadow=!0,V.userData.tier=1,V.computeBoundingSphere(),i.add(V),g.push(V)}}}return{update(T){c.uTime.value=T},setLevel:T=>g.forEach(O=>{O.visible=T==="high"||O.userData.tier===0,O.receiveShadow=T==="high"}),count:g.reduce((T,O)=>T+O.count,0)}}function xh(i,{arms:t=4,rStart:e=56,rEnd:n=4.2,turns:s=.7,a0:r=.35,steps:a=16}={}){const o=[];for(let l=0;l<t;l++){const c=r+l/t*Math.PI*2,h=[];for(let u=0;u<=a;u++){const f=u/a,p=e*(1-f)+n*f,v=c+f*s*Math.PI*2;h.push([i[0]+Math.cos(v)*p,i[1]+Math.sin(v)*p])}o.push(h)}return o}const x_={xc:i=>3*Math.sin(i*.06),w:4.2,bridgeZ:-20,top:50,wall:27},__=[[[-15,56],[-17,40],[-13,24],[-17,8],[-14,-6],[-12,-18],[-11,-26],[-10,-33],[-10,-38.4]],[[17,56],[19,40],[15,24],[18,8],[15,-6],[12,-16],[5,-20],[-2,-20.5],[-8,-22],[-11,-26],[-10,-33],[-10,-38.4]]],M_=[90,210,330].map(i=>i*Math.PI/180),Ka=11,y_=()=>{const i=[];for(let e=0;e<=48;e++){const n=e/48*Math.PI*2;i.push([Math.cos(n)*Ka,Math.sin(n)*Ka])}const t=M_.map(e=>[Ka,20,30,40,50].map((n,s)=>{const r=e+Math.sin(n*.25+s)*.04;return[Math.cos(r)*n,Math.sin(r)*n]}));return[i,...t]},br=[{id:"tak",name:"Tåkeøya",blurb:"Palmer, turkis lagune og en joint som har glødd i hundre år.",seed:1,radius:46,edgeAmp:[4.5,2.6,1.5],lighthouse:[0,0],paths:xh([0,0]),plateausAuto:[{r:6.5,h:4.2},{r:5.5,h:3.4},{r:5,h:3}],waterfall:{poolR:1.9,basinR:2.7},palette:{sand:"#d8bb88",grass:"#6c9f4a",grass2:"#4d8340",path:"#b49c74",deep:"#cdb987",pathMix:.35},water:{shallow:"#a6e6cc",mid:"#45c2ae",deep:"#1f9aa2",caustic:1},sky:{fog:"#c4d8dc",hemiSky:"#dce9ff",hemiGround:"#5a6650",hemi:1.35,sun:"#ffeccc",sunI:2.25,exposure:.92,sunDir:[14,30,10],lantern:.9,grade:{tint:[1.02,1,.965],lift:[.008,.02,.035],sat:.92,vignette:.2}},skyDusk:{fog:"#d9a48e",hemiSky:"#ffd6b0",hemiGround:"#5a4a72",hemi:1.35,sun:"#ffb27a",sunI:2.7,exposure:1.05,sunDir:[24,17,4],grade:{tint:[1.07,1,.9],lift:[.025,.008,.03],sat:1.1,vignette:.3}},trees:{beach:{palm:.75,bush:.25},inland:{palm:.25,round:.45,bush:.3},leaf:["#a2cc5c","#357238"]},rock:["#b6bab8","#7f9f52"],life:["fireflies","butterflies","birds","leaves"],balance:{hp:1.3,count:1.25,speed:1,air:.5,types:{clerk:{hp:.7},complainer:{hp:.7},tank:{hp:.65},gull:{hp:.75}},extra:null},intro:{complainer:2,drone:3,lobbyist:5,heli:6,auditor:7,balloon:8}},{id:"vinter",name:"Vinterfjorden",blurb:"Snø, nordlys og isflak. Forbudsdirektoratet har kledd seg varmt.",seed:2,radius:47,edgeAmp:[3.5,3.2,2.2],lighthouse:[-10,-42.5],paths:__,shape:"fjord",fjord:x_,nes:{x:-10,z0:-20,z1:-45,r:6.5},dockTheta:-1.2,icy:!0,palette:{sand:"#b9bec4",grass:"#f1f5fa",grass2:"#dfe8f2",path:"#c2ccd8",deep:"#9aa8b4"},water:{shallow:"#b8e2ee",mid:"#5a9cc0",deep:"#1d3f66",caustic:.55},sky:{fog:"#2a3550",hemiSky:"#9fb8ff",hemiGround:"#1c2440",hemi:1.1,sun:"#b8ccff",sunI:1.5,exposure:1.15,sunDir:[-12,26,8],grade:{tint:[.96,1,1.06],lift:[0,.01,.03],sat:1.05,vignette:.32}},trees:{beach:{pine:.6,bush:.4},inland:{pine:.8,bush:.2},leaf:["#e8f0f8","#2c5a44"]},rock:["#a9b2bc","#eef4fa"],life:["snow","aurora","icefloes"],balance:{hp:1.5,count:1.2,speed:.97,types:{tank:{hp:.95},clerk:{hp:1},lobbyMini:{hp:.9}},extra:{type:"tank",n:1,gap:4,path:"both",from:3}},intro:{balloon:3,auditor:4,lobbyist:5,drone:5,heli:6,complainer:6}},{id:"vulkan",name:"Vulkanøya",blurb:"Svart sand, lava-elver og glødende stein. Her trenger ingen fyrstikker.",seed:3,radius:48,edgeAmp:[3.5,2.2,1.6],lighthouse:[0,0],dockTheta:.5,paths:xh([0,0],{arms:3,rStart:56,rEnd:4.4,turns:.75,a0:Math.PI/6,steps:24}),lava:y_(),moat:Ka,eruption:{every:60,closed:10},fog:[38,100],palette:{sand:"#3a3533",grass:"#5a6a3c",grass2:"#3f4c2e",path:"#3e3b3a",deep:"#2c2826",pathMix:.15},water:{shallow:"#5a8f90",mid:"#2c5a63",deep:"#122b35",caustic:.4},sky:{fog:"#4a2c2a",hemiSky:"#ff9a6a",hemiGround:"#2a1a1a",hemi:1.15,sun:"#ff7a40",sunI:2.3,exposure:1.1,sunDir:[20,20,6],grade:{tint:[1.05,.98,.94],lift:[.02,0,0],sat:1.08,vignette:.32}},trees:{beach:{dead:.5,bush:.5},inland:{dead:.45,palm:.2,bush:.35},leaf:["#7a9a4a","#2f4a2a"]},rock:["#2e2a2a","#5a3a2a"],life:["ash","embers"],balance:{hp:1.25,count:1.1,speed:1,air:.6,types:{lobbyist:{hp:.6},lobbyMini:{hp:.6},clerk:{hp:.72},complainer:{hp:.72},gull:{hp:.75},drone:{hp:.8}},extra:{type:"gull",n:1,gap:1.4,from:3}},intro:{complainer:2,drone:2,lobbyist:3,heli:4,auditor:5,balloon:7}}];function S_(i){const[t,e,n]=i.edgeAmp,s=i.seed;return r=>i.radius+t*Math.sin(3*r+.4*s)+e*Math.sin(7*r+1.3*s)+n*Math.sin(11*r+s)}const _h={clerk:["complainer","lobbyist"],swarm:["complainer"],tank:["auditor","lobbyist"],gull:["drone","heli","balloon"]},sl={clerk:22,swarm:7,tank:95,gull:16,complainer:17,lobbyist:97,auditor:112,drone:9,heli:62,balloon:150},rl={complainer:.6,lobbyist:1.8,auditor:2.2,drone:.4,heli:2.4,balloon:3.5};function b_(i,t){let e=i.seed*9301+49297;const n=()=>(e=(e*9301+49297)%233280)/233280,s=i.intro||{};return t.map((r,a)=>{const o=a+1,l=r.map(f=>({...f})),c=i.balance.extra;c&&o>=c.from&&l.push({...c,n:c.n+Math.floor((o-c.from)/2),at:5});const h=(f,p,v)=>Math.max(1,Math.round(f*Math.min(1,sl[p]/sl[v]))),u=(f,p)=>{f.n=h(f.n,f.type,p),f.gap=rl[p]??f.gap,f.type=p};for(const[f,p]of Object.entries(s)){if(p!==o)continue;const v=l.find(x=>{var m;return(m=_h[x.type])==null?void 0:m.includes(f)});if(v&&v.n>=2){const x=Math.floor(v.n/2);l.push({...v,type:f,n:h(x,v.type,f),gap:rl[f]??v.gap,at:(v.at??0)+2}),v.n-=x}else v?u(v,f):l.push({type:f,n:Math.max(1,Math.min(3,Math.round(44/sl[f]))),gap:rl[f],path:0,at:6})}for(const f of l){const p=(_h[f.type]||[]).filter(v=>s[v]&&s[v]<o);p.length&&n()<.45&&u(f,p[Math.floor(n()*p.length)])}return l})}function Qr(){try{return Math.max(1,Math.min(br.length,Number(localStorage.getItem("glod-unlocked"))||1))}catch{return 1}}function w_(i){try{i+2>Qr()&&localStorage.setItem("glod-unlocked",String(Math.min(br.length,i+2)))}catch{}}function za(i,t,{color:e,size:n,speed:s,drift:r,additive:a,area:o=46,top:l=22}){const c=new Float32Array(t*3),h=new Float32Array(t);for(let d=0;d<t;d++)c[d*3]=(Math.random()-.5)*o*2,c[d*3+1]=Math.random()*l,c[d*3+2]=(Math.random()-.5)*o*2,h[d]=Math.random()*6.28;const u=new ze;u.setAttribute("position",new Ge(c,3));const f=document.createElement("canvas");f.width=f.height=32;const p=f.getContext("2d"),v=p.createRadialGradient(16,16,0,16,16,16);v.addColorStop(0,"rgba(255,255,255,1)"),v.addColorStop(1,"rgba(255,255,255,0)"),p.fillStyle=v,p.fillRect(0,0,32,32);const x=new ho({color:e,size:n,map:new fi(f),transparent:!0,depthWrite:!1,blending:a?di:Qi,opacity:a?1:.85}),m=new Nc(u,x);return m.frustumCulled=!1,i.add(m),(d,y,S)=>{for(let g=0;g<t;g++){let A=c[g*3+1]-s*d*(.7+h[g]%1*.6);c[g*3]+=Math.sin(S*.7+h[g])*r*d,(s<0?A>l:A<0)&&(A=s<0?0:l,c[g*3]=y.x+(Math.random()-.5)*o*2,c[g*3+2]=y.z+(Math.random()-.5)*o*2),c[g*3+1]=A}u.attributes.position.needsUpdate=!0}}function E_(i,t,e,n,s=160){const r=new Oc(i.map(([u,f])=>new B(u,0,f))),a=r.getLength(),o=[],l=[],c=[];for(let u=0;u<=s;u++){const f=u/s,p=r.getPointAt(f),v=r.getTangentAt(f),x=-v.z,m=v.x,d=t*(.75+.25*Math.sin(f*9));for(const y of[-1,1]){const S=p.x+x*d*y,g=p.z+m*d*y;o.push(S,e(S,g)+n,g),l.push(f*a,(y+1)/2)}if(u<s){const y=u*2;c.push(y,y+1,y+2,y+1,y+3,y+2)}}const h=new ze;return h.setAttribute("position",new pe(o,3)),h.setAttribute("uv",new pe(l,2)),h.setIndex(c),h.computeVertexNormals(),{geo:h,curve:r,len:a}}function T_(i,t,e,n){var x;const{heightAt:s}=t,r=[],a=[],o=[],l=[],c=[],h=e.mobile?.5:1,u=new Set(n.life);if(u.has("aurora")){const m=new $e({transparent:!0,depthWrite:!1,blending:di,side:Ke,fog:!1,uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const[d,y,S]of[[0,-66,0],[-62,-20,Math.PI/2.4],[62,-24,-Math.PI/2.4]]){const g=new oe(new Zn(150,26,96,1),m);g.position.set(d,20,y),g.rotation.y=S,i.add(g)}a.push((d,y,S)=>m.uniforms.uTime.value=S)}if(u.has("snow")&&a.push(za(i,Math.round(900*h),{color:"#ffffff",size:.28,speed:2.2,drift:.8})),u.has("ash")&&a.push(za(i,Math.round(500*h),{color:"#6a625e",size:.22,speed:1.2,drift:.6})),u.has("embers")&&a.push(za(i,Math.round(160*h),{color:"#ff8a3a",size:.25,speed:-1.6,drift:1.2,additive:!0,top:10})),u.has("icefloes")){const m=[];for(let A=0;A<6e3&&m.length<70*h;A++){const E=(Math.random()-.5)*120,b=(Math.random()-.5)*120,C=.05-s(E,b);C>.15&&C<1.4&&m.every(M=>Math.hypot(M.x-E,M.z-b)>2.2)&&m.push({x:E,z:b,s:.6+Math.random()*1.1,r:Math.random()*6})}const d=new He(1,.9,.18,7),y=d.attributes.position;for(let A=0;A<y.count;A++){const E=Math.atan2(y.getZ(A),y.getX(A)),b=.75+.35*Math.abs(Math.sin(E*2.3+A));y.setX(A,y.getX(A)*b),y.setZ(A,y.getZ(A)*b)}d.computeVertexNormals();const S=new gn(d,new We({color:"#eaf6ff"}),Math.max(1,m.length));S.count=m.length,S.receiveShadow=!0,i.add(S);const g=new Ve;a.push((A,E,b)=>{m.forEach((C,M)=>{g.position.set(C.x+Math.sin(b*.1+C.r)*.4,.08+Math.sin(b*1.1+C.r)*.03,C.z),g.rotation.set(Math.sin(b*.9+C.r)*.03,C.r+b*.02,Math.cos(b*.8+C.r)*.03),g.scale.set(C.s,1,C.s),g.updateMatrix(),S.setMatrixAt(M,g.matrix)}),S.instanceMatrix.needsUpdate=!0})}if(n.lava){const m=new $e({uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const g of n.lava){const A=E_(g,1.25,s,.07);i.add(new oe(A.geo,m));const E=[];let b=!1;for(let C=0;C<=1;C+=1.4/A.len){const M=A.curve.getPointAt(Math.min(1,C));if(t.pathDist(M.x,M.z)<2.4){b||c.push({x:M.x,z:M.z,tan:A.curve.getTangentAt(Math.min(1,C))}),b=!0;continue}b=!1,o.push({x:M.x,z:M.z,r:1.4})}for(const C of[.25,.7]){const M=A.curve.getPointAt(C),_=new Jr("#ff6a2a",14,12,1.6);_.position.set(M.x,s(M.x,M.z)+1.2,M.z),i.add(_),E.push(_)}a.push((C,M,_)=>E.forEach((T,O)=>T.intensity=12+3*Math.sin(_*2.3+O)))}a.push((g,A,E)=>m.uniforms.uTime.value=E);const d=new Cn(3.4,.35,4.2),y=new We({color:((x=n.rock)==null?void 0:x[0])??"#555"}),S=new He(2.4,2.4,.1,18);for(const g of c){const A=s(g.x,g.z)+.12,E=new oe(d,y);E.position.set(g.x,A,g.z),E.rotation.y=-Math.atan2(g.tan.z,g.tan.x),E.castShadow=E.receiveShadow=!0,i.add(E);const b=new oe(S,new De({color:new Pt("#ff5a1a").multiplyScalar(2.2),transparent:!0,opacity:0}));b.position.set(g.x,A+.25,g.z),b.visible=!1,i.add(b);const C=new Jr("#ff6a2a",0,14,1.6);C.position.set(g.x,A+1.6,g.z),i.add(C);let M=!1;l.push({x:g.x,z:g.z,get closed(){return M},setClosed(_){M=_,b.visible=_}}),a.push((_,T,O)=>{const G=M?1:0;b.material.opacity+=(G*.9-b.material.opacity)*Math.min(1,_*3),!M&&b.material.opacity<.02&&(b.visible=!1),C.intensity=b.material.opacity*(22+6*Math.sin(O*9))})}}if(n.volcano){const m=n.volcano;o.push({x:m.x,z:m.z,r:m.r*.55});const d=new oe(new pr(m.r*.22,20),new De({color:new Pt("#ff5a1a").multiplyScalar(2.4)}));d.rotation.x=-Math.PI/2,d.position.set(m.x,s(m.x,m.z)+.2,m.z),i.add(d);const y=new po(.35,0),S=[];for(let E=0;E<3e3&&S.length<50*h;E++){const b=(Math.random()-.5)*96,C=(Math.random()-.5)*96,M=s(b,C);M>.4&&t.pathDist(b,C)>2.2&&S.push({x:b,z:C,h:M,s:.5+Math.random()})}const g=new gn(y,new De({color:new Pt("#ff7a2a").multiplyScalar(1.8)}),Math.max(1,S.length));g.count=S.length;const A=new Ve;S.forEach((E,b)=>{A.position.set(E.x,E.h,E.z),A.rotation.set(E.s,E.s*3,0),A.scale.set(E.s,E.s*.5,E.s),A.updateMatrix(),g.setMatrixAt(b,A.matrix)}),i.add(g)}if(n.waterfall&&n.waterfall._lvl!==void 0){const m=n.waterfall,d=m.basin[0]-m.lip[0],y=m.basin[1]-m.lip[1],S=Math.hypot(d,y),g=d/S,A=y/S,E=m._lvl-.1,b=14,C=1.25,M=[],_=[],T=[];for(let j=0;j<=b;j++){const nt=j/b,rt=.35+1.5*nt*nt,Ct=E-(E-.06)*(nt*nt*.6+nt*.4);for(const kt of[-1,1])M.push(m.lip[0]+g*rt-A*C*kt*(.85+nt*.3),Ct,m.lip[1]+A*rt+g*C*kt*(.85+nt*.3)),_.push((kt+1)/2,nt);if(j<b){const kt=j*2;T.push(kt,kt+1,kt+2,kt+1,kt+3,kt+2)}}const O=new ze;O.setAttribute("position",new pe(M,3)),O.setAttribute("uv",new pe(_,2)),O.setIndex(T);const G=new $e({transparent:!0,depthWrite:!1,side:Ke,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform float uTime; varying vec2 vUv;
        float h(float x) { return fract(sin(x * 127.1) * 43758.5); }
        void main() {
          float col = floor(vUv.x * 18.0);
          float streak = fract(vUv.y * (1.6 + h(col) * 1.2) - uTime * (1.4 + h(col + 3.0) * 0.8));
          float s = smoothstep(0.0, 0.25, streak) * (1.0 - smoothstep(0.55, 1.0, streak));
          float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
          vec3 c = mix(vec3(0.45, 0.85, 0.88), vec3(1.0), s * 0.8 + vUv.y * 0.3);
          gl_FragColor = vec4(c, (0.55 + 0.4 * s) * edge);
        }`});i.add(new oe(O,G));const D=(()=>{const j=document.createElement("canvas");j.width=j.height=128;const nt=j.getContext("2d"),rt=(()=>{let kt=9;return()=>(kt=kt*16807%2147483647)/2147483647})();for(let kt=0;kt<260;kt++){const H=rt()*Math.PI*2,K=Math.pow(rt(),.7)*58,ht=1.5+rt()*5*(1-K/70);nt.fillStyle=`rgba(255,255,255,${.55+rt()*.45})`,nt.beginPath(),nt.arc(64+Math.cos(H)*K,64+Math.sin(H)*K,ht,0,Math.PI*2),nt.fill()}nt.globalCompositeOperation="destination-in";const Ct=nt.createRadialGradient(64,64,8,64,64,63);return Ct.addColorStop(0,"rgba(0,0,0,1)"),Ct.addColorStop(.6,"rgba(0,0,0,0.85)"),Ct.addColorStop(1,"rgba(0,0,0,0)"),nt.fillStyle=Ct,nt.fillRect(0,0,128,128),new fi(j)})(),z=new oe(new pr(1.5,20),new De({map:D,color:"#ffffff",transparent:!0,opacity:.9,depthWrite:!1}));z.rotation.x=-Math.PI/2;const k=m.lip[0]+g*1.9,X=m.lip[1]+A*1.9;z.position.set(k,.1,X),i.add(z);const V=za(i,Math.round(60*h),{color:"#ffffff",size:.35,speed:-.9,drift:.6,area:1.4,top:2.2});a.push((j,nt,rt)=>{G.uniforms.uTime.value=rt,z.scale.setScalar(1+Math.sin(rt*5)*.06),z.rotation.z=rt*.4,z.material.opacity=.8+.12*Math.sin(rt*7),V(j,{x:k,z:X},rt)}),o.push({x:k,z:X,r:.9})}const f=(m,d)=>o.some(y=>(y.x-m)**2+(y.z-d)**2<y.r*y.r);let p=0;return{colliders:r,update:(m,d=t.lighthouse.pos)=>{const y=Math.min(.05,Math.max(0,m-p));p=m;for(const S of a)S(y,d,m)},blocks:f,blockers:o,bridges:l}}function Df(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ze;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let v=0;v<p.count;++v)u.push(p.getX(v)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Mh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const p=[];for(let x=0;x<a[h].length;++x)p.push(a[h][x][f]);const v=Mh(p);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(v)}}return l}function Mh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Ge(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,p=h.count;f<p;f++)for(let v=0;v<e;v++){const x=h.getComponent(f,v);o.setComponent(f+u,v,x)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function Lf(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let a=0;const o=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let y=0,S=o.length;y<S;y++){const g=o[y],A=i.attributes[g];l[g]=new A.constructor(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);const E=i.morphAttributes[g];E&&(c[g]||(c[g]=[]),E.forEach((b,C)=>{const M=new b.array.constructor(b.count*b.itemSize);c[g][C]=new b.constructor(M,b.itemSize,b.normalized)}))}const p=t*.5,v=Math.log10(1/t),x=Math.pow(10,v),m=p*x;for(let y=0;y<r;y++){const S=n?n.getX(y):y;let g="";for(let A=0,E=o.length;A<E;A++){const b=o[A],C=i.getAttribute(b),M=C.itemSize;for(let _=0;_<M;_++)g+=`${~~(C[u[_]](S)*x+m)},`}if(g in e)h.push(e[g]);else{for(let A=0,E=o.length;A<E;A++){const b=o[A],C=i.getAttribute(b),M=i.morphAttributes[b],_=C.itemSize,T=l[b],O=c[b];for(let G=0;G<_;G++){const D=u[G],z=f[G];if(T[z](a,C[D](S)),M)for(let k=0,X=M.length;k<X;k++)O[k][z](a,M[k][D](S))}}e[g]=a,h.push(a),a++}}const d=i.clone();for(const y in i.attributes){const S=l[y];if(d.setAttribute(y,new S.constructor(S.array.slice(0,a*S.itemSize),S.itemSize,S.normalized)),y in c)for(let g=0;g<c[y].length;g++){const A=c[y][g];d.morphAttributes[y][g]=new A.constructor(A.array.slice(0,a*A.itemSize),A.itemSize,A.normalized)}}return d.setIndex(h),d}const fe=(i,t={})=>new We({color:i,flatShading:!0,...t}),js=(i,t)=>new De({color:new Pt(i).multiplyScalar(t)}),ft={coat:fe("#f2c23c"),coatDark:fe("#c99a22"),skin:fe("#f1c7a0"),beanieG:fe("#3f8f4a"),beanieY:fe("#f2c94c"),beanieR:fe("#d4553a"),boot:fe("#3a2c22"),eyeW:new De({color:"#ffffff"}),eyeB:new De({color:"#1c1820"}),suit:fe("#6b6f78"),suitDark:fe("#3c4150"),suitNavy:fe("#2c3a5c"),shirt:fe("#f4f1ea"),tie:fe("#b8322a"),paper:fe("#fbfaf4"),stampInk:fe("#a8233a"),woodLight:fe("#c49360"),glasses:fe("#222428"),binderR:fe("#c94f3f"),binderB:fe("#3f6fc9"),binderY:fe("#e6b93f"),gull:fe("#f4f2ee"),gullWing:fe("#c4ccd4"),gullTip:fe("#2e3038"),gullBand:fe("#8e98a4"),beak:fe("#f0a43a"),megaRed:fe("#d8453a"),mouth:new De({color:"#4a2a2a"}),smile:new De({color:"#c8485a"}),wood:fe("#9a6a42"),woodDark:fe("#6e4a2c"),iron:fe("#55585e"),speaker:fe("#2a2a30"),cone:fe("#4a4a52"),rasG:fe("#3f9a4a"),rasY:fe("#f2c94c"),rasR:fe("#d4553a"),chipsBag:fe("#f2b632"),chipsRed:fe("#d8453a"),chip:fe("#f0c860"),ringMat:new We({color:"#f1efe9",transparent:!0,opacity:.8}),ember:js("#ff9a3a",2.4),emberCore:js("#fff1c2",2),rolling:fe("#5a9a5a"),rollingPaper:fe("#fffdf5"),lantern:js("#ffd27a",2.2),hpBg:new De({color:"#2a2020",depthTest:!1,transparent:!0,opacity:.6}),hpFg:new De({color:"#d8553a",depthTest:!1}),levelPip:js("#9fffb0",1.6),bottle:new We({color:"#7fd6ff",transparent:!0,opacity:.8}),bubble:new We({color:"#dff6ff",transparent:!0,opacity:.45,emissive:"#5a7a9a"}),kiteSail:new We({color:"#ff7a5a",side:Ke}),rope:fe("#d9c8a0"),ledger:fe("#2f5a3a"),track:fe("#8a4ac8"),briefcase:fe("#6a3a1a"),brass:fe("#d8b040"),rotor:new De({color:"#cfd6dc",transparent:!0,opacity:.45}),redLight:js("#ff3030",2),balloonA:fe("#e8e4d8"),balloonB:fe("#c8463a"),heli:fe("#f2c23c"),glassDark:fe("#2a3440"),spot:new De({color:"#fff6c8",transparent:!0,opacity:.18,blending:di,depthWrite:!1,side:Ke}),pizza:fe("#e8603a"),pizzaCrust:fe("#e8b866"),lampGlass:new We({color:"#ff8a5a",transparent:!0,opacity:.45,emissive:"#6a1a10"}),lampBlob:js("#ff9a2a",2.2)},mt={sphere:new Gn(1,10,8),lowSphere:new xs(1,1),capsule:new fo(.5,.7,3,8),cyl:new He(1,1,1,10),cone:new Bn(1,1,10),box:new Cn(1,1,1),dome:new Gn(1,10,6,0,Math.PI*2,0,Math.PI/2),ember:new mr(.22,0),leaf:new mr(.3,0),plane:new Zn(1,1),smileArc:new ir(.06,.018,4,10,Math.PI),ring:new ir(.32,.12,6,14),bubbleRing:new ir(.18,.025,4,12)};function gt(i,t,e,n,s,r=0,a=0,o=0,l=!0){const c=new oe(i,t);return c.scale.set(e,n,s),c.position.set(r,a,o),c.castShadow=l,c}function Vc(i,t,e,n,s=.12,r=.18){const a=new _e;a.position.set(t,e,n),a.userData.isEyes=!0;for(const o of[-1,1])a.add(gt(mt.sphere,ft.eyeW,s,s,s,o*r,0,0,!1)),a.add(gt(mt.sphere,ft.eyeB,s*.55,s*.55,s*.55,o*r,.01,-s*.7,!1));return i.add(a),a}const If=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,31);return e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(.6,"rgba(0,0,0,0.25)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new fi(i)})(),A_=new De({map:If,transparent:!0,depthWrite:!1,fog:!1}),Uf=new Zn(1,1).rotateX(-Math.PI/2);function Hc(i,t){const e=new oe(Uf,A_);e.scale.set(t*2,1,t*2),e.position.y=.04,e.renderOrder=1,i.add(e),i.userData.blob=e}function C_(i,t,e=.8){const n=new De({map:If,color:"#000000",transparent:!0,opacity:e,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),s=new gn(Uf,n,Math.max(1,t.length));s.count=t.length;const r=new Ve;return t.forEach((a,o)=>{r.position.set(a.x,a.y+.04,a.z),r.scale.set(a.r*2,1,a.r*2),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.renderOrder=1,i.add(s),s}function Nf(i){const t=[];i.traverse(e=>{e.userData.isEyes&&t.push(e)}),i.userData.eyes=t}function zf(i,t,e,n=1){const s=gt(mt.box,ft.mouth,.14*n,.025*n,.02,0,t,e,!1);s.rotation.z=.15;const r=gt(mt.smileArc,ft.smile,n,n,n,0,t+.03*n,e,!1);return r.rotation.z=Math.PI,r.visible=!1,i.add(s,r),{sour:s,smile:r}}const R_=(()=>{const i=new He(.07,.05,.55,8);return i.rotateZ(Math.PI/2),i})();function Ff(){const i=new _e,t=gt(mt.box,ft.rollingPaper,.55,.012,.26,0,0,0,!1),e=gt(mt.lowSphere,ft.rasG,.22,.06,.07,0,.03,0,!1),n=new oe(R_,ft.rollingPaper),s=gt(mt.cone,ft.rollingPaper,.05,.1,.05,.32,0,0,!1);return s.rotation.z=-Math.PI/2,n.add(s),i.add(t,e,n),i.userData={paper:t,herb:e,joint:n,tip:s},Wc(i,0),i}function Wc(i,t){const{paper:e,herb:n,joint:s,tip:r}=i.userData,a=xe.smoothstep,o=a(t,.08,.45),l=a(t,.5,.85);e.visible=l<.98,e.scale.set(.55,.012,.26*(1-.7*l)),n.visible=o>.01&&l<.98,n.scale.set(.22*o+.001,.06*o+.001,.07*(1-.5*l)+.001),s.visible=l>.02,s.scale.set(1,.35+.65*l,.35+.65*l),r.visible=t>.88}function P_(){const i=new _e,t=new _e;i.add(t),t.add(gt(mt.capsule,ft.coat,.75,.75,.7,0,.75,0)),t.add(gt(mt.cyl,ft.coatDark,.4,.06,.38,0,.62,0));const e=new _e;e.position.y=1.62,e.scale.setScalar(1.22),e.add(gt(mt.sphere,ft.skin,.33,.32,.32)),e.add(gt(mt.cyl,ft.beanieG,.35,.1,.35,0,.14,0)),e.add(gt(mt.cyl,ft.beanieY,.31,.1,.31,0,.24,0)),e.add(gt(mt.dome,ft.beanieR,.27,.22,.27,0,.29,0)),e.add(gt(mt.sphere,ft.beanieY,.08,.08,.08,0,.52,0)),Vc(e,0,.02,-.26,.07,.12);const n=zf(e,-.12,-.3,.8);n.sour.visible=!1,n.smile.visible=!0,t.add(e);const s=[-1,1].map(u=>{const f=gt(mt.capsule,ft.boot,.24,.32,.24,u*.18,.2,0);return t.add(f),f}),r=new _e;r.position.set(.48,1,-.1),r.add(gt(mt.box,ft.iron,.2,.28,.2,0,-.25,0)),r.add(gt(mt.sphere,ft.lantern,.1,.13,.1,0,-.25,0,!1)),t.add(r);const a=new _e;a.position.set(-.46,1.08,0),a.add(gt(mt.capsule,ft.coat,.16,.34,.16,0,-.28,0)),a.add(gt(mt.sphere,ft.skin,.1,.1,.1,0,-.52,0)),t.add(a);const o=new _e;o.add(gt(mt.box,ft.rolling,.7,.12,.42,0,0,0,!1)),o.add(gt(mt.box,ft.rollingPaper,.6,.08,.36,.06,.08,0,!1)),o.add(gt(mt.leaf,ft.rasG,.35,.05,.35,-.12,.07,0,!1)),o.position.y=2.35,o.visible=!1,i.add(o);const l=new _e;l.position.y=2;for(let u=0;u<3;u++)l.add(gt(mt.ember,ft.emberCore,.6,.6,.6,Math.cos(u*2.1)*.45,0,Math.sin(u*2.1)*.45,!1));l.visible=!1,i.add(l);const c=new _e;c.position.set(.46,1.08,0),c.add(gt(mt.capsule,ft.coat,.16,.34,.16,0,-.28,0)),c.add(gt(mt.sphere,ft.skin,.1,.1,.1,0,-.52,0)),c.visible=!1,t.add(c);const h=Ff();return h.position.set(0,1,-.62),h.scale.setScalar(1.6),h.visible=!1,t.add(h),Hc(i,.62),i.userData={body:t,legs:s,head:e,lanternArm:r,armL:a,armR:c,roll:h,carried:o,stars:l,blob:i.userData.blob},Nf(i),i}function mi(i,t){const e=new _e;e.position.y=t;const n=new oe(mt.plane,ft.hpBg);n.scale.set(1,.14,1),n.renderOrder=10;const s=new oe(mt.plane,ft.hpFg.clone());s.scale.set(.96,.09,1),s.position.z=.001,s.renderOrder=11,e.add(n,s),e.visible=!1,i.add(e),i.userData.hpBar=e,i.userData.hpFg=s}function Zs(i,{scale:t=1,suit:e=ft.suit,wide:n=1}={}){const s=t;i.add(gt(mt.capsule,e,.7*s*n,.62*s,.6*s,0,.72*s,0)),i.add(gt(mt.box,ft.shirt,.22*s,.4*s,.05,0,.98*s,-.27*s*Math.min(n,1.2),!1)),i.add(gt(mt.box,ft.tie,.07*s,.32*s,.05,0,.94*s,-.29*s*Math.min(n,1.2),!1));for(const o of[-1,1])i.add(gt(mt.capsule,ft.suitDark,.2*s,.25*s,.2*s,o*.16*s,.17*s,0));const r=new _e;r.position.y=1.5*s,r.add(gt(mt.sphere,ft.skin,.3*s,.3*s,.3*s)),r.add(gt(mt.dome,ft.suitDark,.31*s,.14*s,.31*s,0,.12*s,.02)),Vc(r,0,.03*s,-.25*s,.065*s,.11*s);const a=zf(r,-.12*s,-.28*s,s);return i.add(r),{head:r,mouth:a}}function D_(i){const t=new _e,e=new _e;if(t.add(e),t.userData.body=e,i==="clerk"){const{head:n,mouth:s}=Zs(e);for(const o of[-1,1])n.add(gt(mt.box,ft.glasses,.11,.07,.02,o*.11,.03,-.3,!1));n.add(gt(mt.box,ft.glasses,.08,.015,.02,0,.04,-.3,!1));const r=new _e;r.position.set(.48,.9,-.15),r.add(gt(mt.cyl,ft.woodLight,.06,.25,.06,0,.12,0)),r.add(gt(mt.sphere,ft.woodLight,.09,.09,.09,0,.27,0)),r.add(gt(mt.box,ft.stampInk,.22,.08,.16,0,-.02,0)),e.add(r);const a=gt(mt.box,ft.paper,.3,.38,.02,-.46,.92,-.2);a.rotation.y=.4,e.add(a),t.userData.mouth=s,t.userData.arm=r,mi(t,2.15)}else if(i==="tank"){const{mouth:n}=Zs(e,{scale:1.25,suit:ft.suitNavy,wide:1.45}),s=new _e;s.position.set(0,0,-.95),s.add(gt(mt.box,ft.woodDark,.75,1.05,.45,0,.52,0));const r=gt(mt.box,ft.woodLight,.9,.08,.6,0,1.1,.04);r.rotation.x=.35,s.add(r),s.add(gt(mt.cyl,ft.iron,.02,.45,.02,.18,1.3,.1,!1)),s.add(gt(mt.sphere,ft.speaker,.05,.05,.05,.18,1.52,.04,!1)),e.add(s),t.userData.mouth=n,mi(t,2.6)}else if(i==="gull"){e.add(gt(mt.lowSphere,ft.gull,.36,.3,.6,0,0,0)),e.add(gt(mt.cone,ft.beak,.08,.3,.08,0,0,-.65).rotateX(-Math.PI/2));const n=gt(mt.cone,ft.megaRed,.2,.5,.2,0,-.22,-.65);n.rotation.x=Math.PI/2,e.add(n),e.add(gt(mt.cyl,ft.paper,.21,.06,.21,0,-.22,-.89).rotateX(Math.PI/2));const s=[-1,1].map(r=>{const a=new _e;a.position.set(r*.25,.05,0),a.add(gt(mt.box,ft.gullWing,.6,.06,.42,r*.3,0,0)),a.add(gt(mt.box,ft.gullBand,.58,.065,.1,r*.31,0,.17));const o=gt(mt.box,ft.gullTip,.42,.055,.3,r*.78,0,.04);return o.rotation.y=r*.18,a.add(o),e.add(a),a});t.userData.wings=s,Vc(e,0,.12,-.42,.06,.13),t.userData.mouth=null,mi(t,.8)}else if(i==="swarm"){const{mouth:n}=Zs(e,{scale:.6}),s=[ft.binderR,ft.binderB,ft.binderY],r=gt(mt.box,s[Math.floor(Math.random()*3)],.08,.34,.28,.32,.55,-.08);e.add(r),t.userData.mouth=n,mi(t,1.3)}else if(i==="auditor"){const{head:n,mouth:s}=Zs(e,{scale:1.1,suit:ft.suitDark});for(const a of[-1,1])n.add(gt(mt.box,ft.glasses,.12,.08,.02,a*.12,.03,-.33,!1));const r=new _e;r.position.set(0,.95,-.55),r.add(gt(mt.box,ft.ledger,1.05,1.2,.14)),r.add(gt(mt.box,ft.paper,.95,1.1,.1,0,0,.03,!1)),r.add(gt(mt.box,ft.brass,.3,.3,.02,0,.15,-.08,!1)),e.add(r),t.userData.mouth=s,t.userData.shield=r,mi(t,2.3)}else if(i==="complainer"){const{head:n,mouth:s}=Zs(e,{scale:.85,suit:ft.track});n.add(gt(mt.cyl,ft.rasR,.27,.06,.27,0,.1,0,!1));const r=new _e;r.position.set(.35,1.2,-.1),r.add(gt(mt.cyl,ft.track,.06,.45,.06,0,.2,0)),r.add(gt(mt.box,ft.paper,.32,.42,.02,0,.55,0)),e.add(r),t.userData.mouth=s,t.userData.arm=r,mi(t,1.8)}else if(i==="lobbyist"||i==="lobbyMini"){const n=i==="lobbyMini",{mouth:s}=Zs(e,{scale:n?.55:1.05,suit:ft.suitNavy});e.add(gt(mt.box,ft.brass,.08,.3,.05,0,n?.52:.99,n?-.17:-.32,!1)),e.add(gt(mt.box,ft.briefcase,n?.28:.5,n?.22:.36,.12,n?.3:.55,n?.3:.55,0)),t.userData.mouth=s,mi(t,n?1.2:2.1)}else if(i==="drone"){e.add(gt(mt.box,ft.iron,.42,.14,.42));const n=[];for(const[s,r]of[[1,1],[-1,1],[1,-1],[-1,-1]]){e.add(gt(mt.box,ft.speaker,.5,.04,.05,s*.22,0,r*.22).rotateY(s*r>0?Math.PI/4:-Math.PI/4));const a=gt(mt.cyl,ft.rotor,.2,.01,.2,s*.4,.08,r*.4,!1);e.add(a),n.push(a)}e.add(gt(mt.sphere,ft.redLight,.07,.07,.07,0,-.06,-.22,!1)),t.userData.rotors=n,t.userData.mouth=null,mi(t,.6)}else if(i==="balloon"){e.add(gt(mt.sphere,ft.balloonA,1.1,1.3,1.1,0,1.6,0));for(let n=0;n<4;n++)e.add(gt(mt.cyl,ft.balloonB,1.12-Math.abs(n-1.5)*.18,.18,1.12-Math.abs(n-1.5)*.18,0,1+n*.42,0,!1));e.add(gt(mt.box,ft.woodLight,.6,.4,.6,0,-.1,0)),e.add(gt(mt.sphere,ft.skin,.2,.2,.2,0,.25,0)),e.add(gt(mt.dome,ft.suitDark,.21,.1,.21,0,.32,0,!1));for(const[n,s]of[[1,1],[-1,1],[1,-1],[-1,-1]])e.add(gt(mt.cyl,ft.rope,.015,.8,.015,n*.28,.45,s*.28,!1));t.userData.mouth=null,mi(t,3.3)}else if(i==="heli"){e.add(gt(mt.capsule,ft.heli,.6,.55,.9,0,0,0).rotateX(Math.PI/2)),e.add(gt(mt.sphere,ft.glassDark,.28,.22,.24,0,.05,-.38,!1)),e.add(gt(mt.box,ft.heli,.12,.12,1.1,0,.05,.85));const n=gt(mt.box,ft.speaker,1.9,.02,.12,0,.4,0,!1),s=gt(mt.box,ft.speaker,.04,.5,.08,.08,.1,1.38,!1);e.add(n,s);const r=new oe(new Bn(1.2,4.5,14,1,!0),ft.spot);r.position.set(0,-2.3,-.2),r.visible=!1,e.add(r),t.userData.rotor=n,t.userData.tail=s,t.userData.beam=r,t.userData.mouth=null,mi(t,1)}return Hc(t,{tank:.85,auditor:.7,balloon:.9,heli:.6,swarm:.35,lobbyMini:.35,drone:.35,gull:.45}[i]??.55),Nf(t),t}function L_(i){const t=i.mesh.userData.mouth;t&&(t.sour.visible=!1,t.smile.visible=!0),i.mesh.userData.hpBar.visible=!1}function I_(i){const t=new _e,e=new _e;if(t.add(e),i==="ring"){t.add(gt(mt.box,ft.wood,.9,.5,.9,0,.25,0)),e.position.y=.95;const a=gt(mt.cyl,ft.iron,.32,1.1,.32,0,0,-.15);a.rotation.x=Math.PI/2-.15,e.add(a),e.add(gt(mt.cyl,ft.woodDark,.38,.12,.38,0,.08,-.7).rotateX(Math.PI/2-.15)),e.add(gt(mt.sphere,ft.iron,.42,.42,.42,0,0,.42)),e.add(gt(mt.sphere,ft.ember,.12,.12,.12,0,.1,.8,!1))}else if(i==="chips"){t.add(gt(mt.cyl,ft.iron,.7,.3,.7,0,.15,0)),e.position.y=.3;const a=gt(mt.box,ft.chipsBag,.95,1.1,.6,0,.6,0);a.rotation.x=-.35,e.add(a),e.add(gt(mt.box,ft.chipsRed,.97,.3,.62,0,.55,0).rotateX(-.35));for(let o=0;o<5;o++)e.add(gt(mt.leaf,ft.chip,.3,.08,.3,(o-2)*.17,1.2,-.3-o%2*.1,!1))}else if(i==="speaker"){const a=new _e;a.add(gt(mt.box,ft.speaker,1,1.5,.75,0,.75,0)),a.add(gt(mt.box,ft.rasG,1.02,.12,.77,0,1.38,0,!1)),a.add(gt(mt.box,ft.rasY,1.02,.12,.77,0,1.26,0,!1)),a.add(gt(mt.box,ft.rasR,1.02,.12,.77,0,1.14,0,!1));const o=[];for(const[l,c]of[[.85,.33],[.35,.2]]){const h=gt(mt.cyl,ft.cone,c,.08,c,0,l,-.38,!1);h.rotation.x=Math.PI/2,a.add(h),o.push(h)}e.add(a),t.userData.woofers=o}else if(i==="bubble"){t.add(gt(mt.cyl,ft.speaker,.5,.25,.5,0,.12,0)),e.position.y=.3,e.add(gt(mt.cyl,ft.bottle,.36,1,.36,0,.5,0)),e.add(gt(mt.cyl,ft.rasR,.22,.2,.22,0,1.08,0));const a=gt(mt.cyl,ft.wood,.03,.8,.03,0,1.4,-.2);a.rotation.x=.5,e.add(a),e.add(gt(mt.bubbleRing,ft.rasY,1,1,1,0,1.75,-.42,!1).rotateX(.5));for(let o=0;o<3;o++)e.add(gt(mt.sphere,ft.bubble,.14+o*.04,.14+o*.04,.14+o*.04,.3-o*.25,1.7+o*.3,-.7-o*.15,!1))}else if(i==="kite"){for(let o=0;o<3;o++){const l=o/3*Math.PI*2,c=gt(mt.cyl,ft.wood,.07,1.6,.07,Math.cos(l)*.45,.7,Math.sin(l)*.45);c.rotation.set(Math.sin(l)*.28,0,-Math.cos(l)*.28),t.add(c)}e.position.y=1.55,e.add(gt(mt.cyl,ft.iron,.22,.3,.22,0,0,0).rotateZ(Math.PI/2));const a=Gf();a.position.set(0,.7,0),a.scale.setScalar(.8),e.add(a),t.userData.kite=a}else if(i==="pizza"){t.add(gt(mt.box,ft.wood,1.2,.35,.9,0,.18,0));for(const o of[-1,1])t.add(gt(mt.box,ft.woodDark,.12,.9,.12,o*.45,.65,0));e.position.y=1;const a=new _e;a.add(gt(mt.box,ft.woodLight,.12,.12,1.5,0,0,-.4)),a.add(gt(mt.cyl,ft.pizzaCrust,.32,.06,.32,0,.08,-1.1)),a.add(gt(mt.cyl,ft.pizza,.27,.03,.27,0,.12,-1.1,!1)),a.rotation.x=-.35,e.add(a),t.userData.arm=a}else if(i==="lamp"){t.add(gt(mt.cone,ft.brass,.55,.7,.55,0,.35,0)),e.position.y=.7,e.add(gt(mt.capsule,ft.lampGlass,.75,.9,.75,0,.75,0,!1));const a=[];for(let o=0;o<3;o++){const l=gt(mt.sphere,ft.lampBlob,.16,.2,.16,0,.5+o*.3,0,!1);e.add(l),a.push(l)}e.add(gt(mt.cone,ft.brass,.3,.35,.3,0,1.55,0)),t.userData.blobs=a}const n=[];for(let a=0;a<5;a++){const o=gt(mt.leaf,ft.levelPip,.45,.1,.45,Math.cos(a*1.2566)*.95,.15,Math.sin(a*1.2566)*.95,!1);o.visible=a===0,t.add(o),n.push(o)}const s=new ns(1.45,1.7,40,1,0,Math.PI*2);s.rotateX(-Math.PI/2);const r=new oe(s,new De({color:"#9fffb0",transparent:!0,opacity:.8,depthWrite:!1}));return r.position.y=.06,r.visible=!1,t.add(r),t.traverse(a=>{a.isMesh&&a!==r&&a.material!==ft.levelPip&&(a.castShadow=!0)}),Hc(t,1),t.userData.head=e,t.userData.pips=n,t.userData.ring=r,t}function Of(i,t){i.mesh.userData.pips.forEach((e,n)=>e.visible=n<t),i.mesh.scale.setScalar(1+(t-1)*.08)}function ta(i,t){const e=i.mesh.userData.ring;if(e.visible=t>0,t<=0)return;e.geometry.dispose();const n=new ns(1.45,1.7,40,1,0,Math.PI*2*t);n.rotateX(-Math.PI/2),e.geometry=n}function U_(){const i=new _e;return i.add(gt(mt.ember,ft.ember,1,1.3,1,0,0,0,!1)),i.add(gt(mt.ember,ft.emberCore,.5,.7,.5,0,0,0,!1)),i}function N_(){const i=new oe(mt.ring,ft.ringMat);return i.castShadow=!1,i}function kf(){const i=new _e;return i.add(gt(mt.box,ft.chipsBag,.32,.4,.14,0,0,0,!0)),i.add(gt(mt.box,ft.chipsRed,.33,.12,.15,0,.02,0,!1)),i}function Bf(){const i=new ir(1,.08,4,32);return i.rotateX(Math.PI/2),new oe(i,new De({color:"#c8ffd0",transparent:!0,opacity:.7,depthWrite:!1}))}let Fa=null;function z_(){if(Fa)return Fa;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d");["#d8453a","#f2c94c","#d8453a","#f2c94c","#3f9a4a","#f2c94c","#d8453a","#f2c94c"].forEach((n,s)=>{t.fillStyle=n,t.fillRect(0,s*8,64,8)});const e=new fi(i);return e.colorSpace=mn,e.wrapS=e.wrapT=Mi,e.repeat.set(1,1.4),e.magFilter=vn,Fa=new We({map:e,flatShading:!0}),Fa}function Gf(){const i=new _e,t=new yf([new Et(0,.55),new Et(.38,0),new Et(0,-.75),new Et(-.38,0)]),e=new Bc(t,{depth:.035,bevelEnabled:!1});e.translate(0,0,-.0175);const n=new oe(e,z_());n.rotation.x=-Math.PI/2.4,n.castShadow=!0,i.add(n);const s=gt(mt.box,ft.woodDark,.025,1.3,.025,0,-.1,.03,!1),r=gt(mt.box,ft.woodDark,.76,.025,.025,0,0,.03,!1);n.add(s,r);const a=new _e;a.position.set(0,-.68,0),n.add(a);const o=[ft.rasR,ft.rasY,ft.rasG,ft.rasR,ft.rasY];let l=a;const c=[];for(let h=0;h<o.length;h++){const u=new _e;u.position.y=h?-.2:0,u.add(gt(mt.box,ft.rope,.015,.2,.015,0,-.1,0,!1));const f=new _e;f.position.y=-.2;for(const p of[-1,1]){const v=gt(mt.cone,o[h],.05,.1,.03,p*.05,0,0,!1);v.rotation.z=p*Math.PI/2,f.add(v)}u.add(f),l.add(u),l=u,c.push(u)}return i.userData.tailSegs=c,i}function Vf(){return gt(mt.sphere,ft.bubble,.28,.28,.28,0,0,0,!1)}function F_(){const i=new _e;return i.add(gt(mt.cyl,ft.pizzaCrust,.3,.06,.3,0,0,0,!0)),i.add(gt(mt.cyl,ft.pizza,.25,.03,.25,0,.04,0,!1)),i}const vr=20;function On(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function O_(i){const t=new Oc(i.map(([s,r])=>new B(s,0,r)),!1,"catmullrom",.5),e=t.getLength(),n=t.getSpacedPoints(400);return{curve:t,length:e,samples:n}}function k_(i,t,e,n,s){const a=new Cn(1,1,1,5,5,5),o=a.attributes.position,l=new B,c=new B,h=i/2,u=t/2,f=e/2,p=Math.min(n,h,u,f)*.98,v=s()*10,x=(s()-.5)*.12;for(let d=0;d<o.count;d++){l.set(o.getX(d)*i,o.getY(d)*t,o.getZ(d)*e),c.set(xe.clamp(l.x,-h+p,h-p),xe.clamp(l.y,-u+p,u-p),xe.clamp(l.z,-f+p,f-p)),l.sub(c);const y=l.length();y>0&&l.multiplyScalar(p/y),l.add(c);const S=1+.035*Math.sin(l.x*4.1+v)*Math.sin(l.z*3.7-v)+.025*Math.sin(l.y*6+v*2);l.x*=S,l.z*=S,l.y+=l.x*x,o.setXYZ(d,l.x,l.y,l.z)}a.deleteAttribute("normal"),a.deleteAttribute("uv");const m=Lf(a);return m.computeVertexNormals(),m}function B_(i,t,e,n){const s=new Pt(t),r=new Pt(e),a=new Pt,o=[[[2.3,.85,1.9,0,0,0],[1.6,.7,1.4,.2,-.1,.35]],[[1.5,1.5,1.4,-.35,.1,.1],[1.4,.8,1.3,.75,-.2,-.3],[.9,.6,.85,-.3,.05,.6]],[[2.4,.7,2,0,0,.2],[1.8,.65,1.5,-.15,.15,-.25],[1.1,.55,1,.2,-.1,.5]]][n%3],l=[];let c=0,h=0;o.forEach(([d,y,S,g,A,E],b)=>{const C=.88+i()*.24,M=k_(d*C,y*(.9+i()*.2),S*C,Math.min(d,y,S)*.28,i);M.rotateY(E+(i()-.5)*.3);const _=n%3===1&&b===1?0:c;M.translate(g,_+y/2,A),n%3===1&&b===1||(c=_+y*.92),h=Math.max(h,_+y),l.push(M)});const u=Df(l),f=u.attributes.position,p=u.attributes.normal,v=[],x=.95+i()*.1,m=i()*10;for(let d=0;d<f.count;d++){const y=f.getX(d),S=f.getY(d),g=f.getZ(d);a.copy(s).multiplyScalar(x*(.72+.28*xe.smoothstep(S,0,.9))*(p.getY(d)<-.3?.8:1));const A=Math.sin(y*2.3+m)*Math.sin(g*2.7-m)+.5*Math.sin(y*5.1-g*4.3+m),E=xe.smoothstep(p.getY(d),.6,.9)*xe.smoothstep(S,h-.3,h-.08)*xe.smoothstep(A,-.55,0);a.lerp(r,E),v.push(a.r,a.g,a.b)}return u.setAttribute("color",new pe(v,3)),u}function yh(i,t,e,n,s,r,a=12,o={}){const l=o.dressed?.3:1,c=new He(t,e,n,a,3,!0),h=new ns(.001,t,a,4);h.rotateX(-Math.PI/2),h.translate(0,n/2,0);const u=Df([c,h]),f=u.attributes.position,p=i()*10;for(let E=0;E<f.count;E++){const b=f.getX(E),C=f.getY(E),M=f.getZ(E),_=Math.hypot(b,M);if(_<1e-4)continue;const T=Math.atan2(M,b);let O=1+l*(.05*Math.sin(T*3+p)+.035*Math.sin(T*7-p*2)+.025*Math.sin(C*9+T*4)),G=C;C>n/2-1e-4&&_>t*.97&&(O*=.93,G-=.08),f.setXYZ(E,b*O,G,M*O)}u.deleteAttribute("normal"),u.deleteAttribute("uv");const v=Lf(u);v.computeVertexNormals(),v.translate(0,n/2,0);const x=new Pt(s),m=new Pt(r),d=new Pt,y=[],S=new Pt("#ece3cc"),g=v.attributes.position,A=v.attributes.normal;for(let E=0;E<g.count;E++){const b=g.getX(E),C=g.getY(E),M=g.getZ(E),_=Math.atan2(M,b),T=Math.hypot(b,M);if(d.copy(x).multiplyScalar(.55+.45*xe.smoothstep(C,0,n*.9)),o.dressed){const D=xe.smoothstep(A.getY(E),.75,.95)*xe.smoothstep(C,n-.15,n-.08),z=1-xe.smoothstep(Math.abs(T-t*.72),.04,.1);d.lerp(S,D*(1-.75*z)),d.multiplyScalar(1-.45*z*D),y.push(d.r,d.g,d.b);continue}const O=Math.sin(b*1.9+p)*Math.sin(M*2.3-p)+.5*Math.sin(_*5+p)+.3*Math.sin(T*4),G=xe.smoothstep(C,n-.25,n-.05)*xe.smoothstep(O,0,.5)*xe.smoothstep(A.getY(E),.2,.7);d.lerp(m,G),y.push(d.r,d.g,d.b)}return v.setAttribute("color",new pe(y,3)),v}function Sh(i,t=.55){const e=document.createElement("canvas");e.width=e.height=256;const n=e.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,256,256);const s=On(4242);for(let l=0;l<90;l++){const c=225+s()*30|0;n.fillStyle=`rgba(${c},${c},${c},0.5)`,n.beginPath(),n.ellipse(s()*256,s()*256,8+s()*22,4+s()*10,s()*3,0,Math.PI*2),n.fill()}n.lineCap="round",n.lineJoin="round";const r=(l,c,h,u,f)=>{n.lineWidth=f,n.strokeStyle="rgba(46,44,50,0.85)",n.beginPath(),n.moveTo(l,c);for(let p=0;p<u;p++)h+=(s()-.5)*.9,l+=Math.cos(h)*9,c+=Math.sin(h)*9,n.lineTo(l,c),s()<.12&&f>1.2&&(n.stroke(),r(l,c,h+(s()<.5?1:-1)*(.6+s()*.6),u>>1,f*.7),n.lineWidth=f,n.strokeStyle="rgba(46,44,50,0.85)",n.beginPath(),n.moveTo(l,c));n.stroke()};for(let l=0;l<9;l++){const c=s()*256,h=s()*256,u=s()*6.28,f=5+(s()*7|0),p=1.6+s()*1.2;for(const[v,x]of[[0,0],[256,0],[-256,0],[0,256],[0,-256]])n.save(),n.translate(v,x),r(c,h,u,f,p),n.restore()}const a=new fi(e);a.colorSpace=mn,a.wrapS=a.wrapT=Mi,a.anisotropy=4;const o=new We({vertexColors:!0});return o.onBeforeCompile=l=>{l.uniforms.uCrack={value:a},l.uniforms.uWaterC={value:new Pt(i)},l.vertexShader=`varying vec3 vRP;
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
      }`)},o.customProgramCacheKey=()=>`rock${t}`,o}function G_(i,t,e){const n=S_(e),s=new B(e.lighthouse[0],0,e.lighthouse[1]),r=e.paths.map(O_),a=r.flatMap(L=>L.samples),o=(L,N)=>{let tt=1/0;for(let pt=0;pt<a.length;pt+=3){const Mt=a[pt],Rt=(Mt.x-L)**2+(Mt.z-N)**2;Rt<tt&&(tt=Rt)}return Math.sqrt(tt)};if(e.plateausAuto&&!e.plateaus){const L=On(500+e.seed),N=[];for(const tt of e.plateausAuto){let pt=null,Mt=-1;for(let Rt=0;Rt<500;Rt++){const wt=L()*Math.PI*2,et=12+L()*24,Xt=Math.cos(wt)*et,Vt=Math.sin(wt)*et,he=o(Xt,Vt);if(he<tt.r+3.5||Math.hypot(Xt-s.x,Vt-s.z)<tt.r+9||N.some(Re=>Math.hypot(Re.x-Xt,Re.z-Vt)<Re.r+tt.r+5))continue;const Ae=Math.min(he-tt.r,9)+L()*.5;Ae>Mt&&(Mt=Ae,pt={x:Xt,z:Vt,...tt})}pt&&N.push(pt)}if(e.plateaus=N,e.waterfall&&N[0]){const tt=N[0],pt=e.waterfall;let Mt=0,Rt=-1;for(let Xt=0;Xt<16;Xt++){const Vt=Xt/16*Math.PI*2,he=tt.x+Math.cos(Vt)*(tt.r+3.2),Ae=tt.z+Math.sin(Vt)*(tt.r+3.2),Re=o(he,Ae);Re>Rt&&(Rt=Re,Mt=Vt)}const wt=Math.cos(Mt),et=Math.sin(Mt);pt.pool=[tt.x+wt*(tt.r-2.4),tt.z+et*(tt.r-2.4)],pt.lip=[tt.x+wt*(tt.r-.3),tt.z+et*(tt.r-.3)],pt.basin=[tt.x+wt*(tt.r+3),tt.z+et*(tt.r+3)]}}const l=e.fjord,c=e.nes,h=(L,N)=>{if(e.shape==="fjord"){const tt=N+30+2.2*Math.sin(L*.21)+1.2*Math.sin(L*.53+1),pt=xe.clamp(N,c.z1,c.z0),Mt=c.r-Math.hypot(L-c.x,N-pt)+(N<c.z1?0:.6*Math.sin(N*.7));return Math.max(tt,Mt)}return n(Math.atan2(N,L))-Math.hypot(L,N)},u=(L,N,tt=!1)=>{const pt=xe.smoothstep(h(L,N),-3,7),Mt=.9+.7*Math.sin(L*.17+1)*Math.cos(N*.21)+.35*Math.sin(L*.5+N*.4)+.3*Math.sin(L*.31-N*.23+2.1)+.18*Math.cos(L*.73+N*.61),Rt=2.4*Math.exp(-((L-s.x-2)**2+(N-s.z+1)**2)/60);let wt=-2.2+pt*(2.2+Mt+Rt);if(pt>.85&&wt<.35&&(wt=Math.max(-.42,.35-(.35-wt)*3.2)),l){const et=Math.max(xe.smoothstep(Math.abs(L),l.wall-3,l.wall+6),xe.smoothstep(N,l.top+6,l.top+14));wt+=et*(7+1.5*Math.sin(N*.13+L*.05));const Xt=Math.abs(L-l.xc(N)),Vt=1-xe.smoothstep(N,l.top-6,l.top+2);Xt<l.w+1.5&&Vt>0&&(wt=Math.min(wt,xe.lerp(wt,-1.6,Vt*(1-xe.smoothstep(Xt,l.w-.8,l.w+1.5)))))}for(const et of e.plateaus||[]){const Xt=Math.hypot(L-et.x,N-et.z),Vt=Math.atan2(N-et.z,L-et.x),he=et.r+Math.sin(Vt*5+et.x)*.8+Math.sin(Vt*11)*.3;wt+=et.h*xe.smoothstep(he-Xt,0,1.3)}if(e.waterfall&&!tt){const et=e.waterfall,Xt=Math.hypot(L-et.pool[0],N-et.pool[1]);Xt<et.poolR+.6&&(et._lvl??(et._lvl=u(et.pool[0],et.pool[1],!0)-.12),wt=Math.min(wt,et._lvl-.48*Math.sqrt(Math.max(0,1-Xt/(et.poolR+.6)))));const Vt=xe.clamp(((L-et.pool[0])*(et.lip[0]-et.pool[0])+(N-et.pool[1])*(et.lip[1]-et.pool[1]))/((et.lip[0]-et.pool[0])**2+(et.lip[1]-et.pool[1])**2),0,1),he=et.pool[0]+(et.lip[0]-et.pool[0])*Vt,Ae=et.pool[1]+(et.lip[1]-et.pool[1])*Vt;Math.hypot(L-he,N-Ae)<.75&&et._lvl!==void 0&&(wt=Math.min(wt,et._lvl-.25));const Re=Math.hypot(L-et.basin[0],N-et.basin[1]);Re<et.basinR&&(wt=Math.min(wt,Math.max(-.42,.05-.47*Math.sqrt(1-Re/et.basinR))))}if(e.volcano){const et=e.volcano,Xt=Math.hypot(L-et.x,N-et.z);wt+=et.h*Math.max(0,1-Xt/et.r)**1.4-et.h*.5*Math.max(0,1-Xt/(et.r*.25))}return wt},f=68,p=t.mobile?160:176,v=new Float32Array((p+1)*(p+1)),x=new Float32Array((p+1)*(p+1));for(let L=0;L<=p;L++)for(let N=0;N<=p;N++){const tt=-f+N/p*f*2,pt=-f+L/p*f*2,Mt=o(tt,pt);x[L*(p+1)+N]=Mt;let Rt=u(tt,pt);const wt=xe.smoothstep(Mt,1.4,3.2),et=Math.max(u(tt,pt)*.6+.3,.45);Rt=xe.lerp(Math.min(Rt,et+.1),Rt,wt),l&&Math.abs(pt-l.bridgeZ)<4&&Math.abs(tt-l.xc(pt))<l.w+2&&Mt<2.2&&(Rt=Math.max(Rt,.5)),v[L*(p+1)+N]=Rt}const m=(L,N,tt)=>{const pt=xe.clamp((N+f)/(f*2)*p,0,p-.001),Mt=xe.clamp((tt+f)/(f*2)*p,0,p-.001),Rt=Math.floor(pt),wt=Math.floor(Mt),et=pt-Rt,Xt=Mt-wt,Vt=L[wt*(p+1)+Rt],he=L[wt*(p+1)+Rt+1],Ae=L[(wt+1)*(p+1)+Rt],Re=L[(wt+1)*(p+1)+Rt+1];return(Vt*(1-et)+he*et)*(1-Xt)+(Ae*(1-et)+Re*et)*Xt},d=(L,N)=>m(v,L,N),y=(L,N)=>m(x,L,N),S=(L,N)=>d(L,N)>.35,g=.5,A=(L,N)=>Math.max(Math.abs(d(L+.4,N)-d(L-.4,N)),Math.abs(d(L,N+.4)-d(L,N-.4)))/.8,E=(L,N)=>!!l&&Math.abs(N-l.bridgeZ)<4&&Math.abs(L-l.xc(N))<l.w+1.5&&y(L,N)<2.6,b=new Pt("#cfeaff"),C=(L,N)=>d(L,N)>.05-g&&A(L,N)<1.05,M=t.mobile?170:256,_=new Zn(f*2,f*2,M,M);_.rotateX(-Math.PI/2);const T=_.attributes.position,O=new Float32Array(T.count*3),G=new Float32Array(T.count*3),D=new Float32Array(T.count),z=new Float32Array(T.count*4),k=new Pt,X=new Pt,V=e.palette,j=new Pt(e.rock[0]).multiplyScalar(.7),nt=new Pt(e.rock[0]).multiplyScalar(1.08),rt=new Pt,Ct=new Pt(V.sand),kt=new Pt(V.grass),H=new Pt(V.grass2),K=new Pt(V.path),ht=new Pt(V.deep),ot=new Pt,At=On(7);for(let L=0;L<T.count;L++){const N=T.getX(L),tt=T.getZ(L),pt=d(N,tt);T.setY(L,pt);const Mt=y(N,tt),Rt=(At()-.5)*.04,wt=ot.copy(kt).lerp(H,xe.clamp((pt-1)*.6+At()*.3,0,1)).offsetHSL(0,0,Rt);G.set([wt.r,wt.g,wt.b],L*3),k.copy(ht).lerp(Ct,xe.smoothstep(pt,0,.3)).offsetHSL(0,0,Rt),O.set([k.r,k.g,k.b],L*3);const et=.5+.5*Math.sin(N*1.7+tt*.9)*Math.cos(tt*1.3-N*.6);D[L]=1.9-Math.min(Mt,6)+(et-.5)*(V.pathMix??.3)*2.4-Math.max(0,.3-pt)*2.5;let Xt=0;l&&E(N,tt)&&(X.copy(b),Xt=.85);const Vt=A(N,tt);if(Vt>.75){const he=.5+.5*Math.sin(pt*7.5+Math.sin(N*.7+tt*.5)*1.5);rt.copy(j).lerp(nt,he);const Ae=xe.smoothstep(Vt,.75,1.3);X.copy(Xt?X:rt).lerp(rt,Ae),Xt=Math.max(Xt,Ae)}z.set([X.r,X.g,X.b,Xt],L*4)}_.setAttribute("aLow",new Ge(O,3)),_.setAttribute("aGrass",new Ge(G,3)),_.setAttribute("aPathF",new Ge(D,1)),_.setAttribute("aOver",new Ge(z,4)),_.computeVertexNormals();const Dt=new We({color:"#ffffff"});Dt.onBeforeCompile=L=>{L.vertexShader=L.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTW, vLow, vGrass;
varying vec4 vOver;
varying float vPathF;
attribute vec3 aLow, aGrass;
attribute vec4 aOver;
attribute float aPathF;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vTW = (modelMatrix * vec4(transformed, 1.0)).xyz;
vLow = aLow; vGrass = aGrass; vOver = aOver; vPathF = aPathF;`),L.uniforms.uPath={value:K},L.fragmentShader=L.fragmentShader.replace("#include <common>",`#include <common>
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
        diffuseColor.g *= 1.0 + 0.025 * n1;`)};const Ut=new oe(_,Dt);Ut.receiveShadow=!0,i.add(Ut);const Wt=[],dt=(L,N)=>Math.hypot(L-s.x,N-s.z)>6;for(const[L,N]of r.entries()){let tt=L%2===0?1:-1,pt=0;for(let Mt=.16;Mt<.95&&pt<6;Mt+=.055){const Rt=N.curve.getPointAt(Mt),wt=N.curve.getTangentAt(Mt),et=new B(-wt.z,0,wt.x).normalize();for(const Xt of[tt,-tt]){const Vt=Rt.x+et.x*3.6*Xt,he=Rt.z+et.z*3.6*Xt;if(!(y(Vt,he)<2.7||!S(Vt,he)||!dt(Vt,he))&&!Wt.some(Ae=>Math.hypot(Ae.x-Vt,Ae.z-he)<5.2)&&!(e.volcano&&Math.hypot(Vt-e.volcano.x,he-e.volcano.z)<e.volcano.r+2)){Wt.push({x:Vt,z:he,tower:null}),pt++;break}}tt=-tt}}const _t=Sh(e.water.mid),F=new De({color:new Pt("#ffd27a").multiplyScalar(1.6),transparent:!0,opacity:.75,depthWrite:!1}),qt=new De({color:new Pt("#ffe9a8").multiplyScalar(2),transparent:!0,opacity:.85,depthWrite:!1}),yt=yh(On(61+e.seed),1.3,1.45,.98,e.rock[0],e.rock[1],8,{dressed:!0});yt.translate(0,-.1,0);const Ot=new ns(.55,.75,6);Ot.rotateX(-Math.PI/2);const It=new mr(1,0),ee=Wt.length,Y=new gn(yt,_t,ee),R=new gn(Ot,F,ee),w=new gn(It,qt,ee*3);Y.castShadow=Y.receiveShadow=!0;const W=new Ve;Wt.forEach((L,N)=>{L.y0=d(L.x,L.z),L.y=L.y0+.88,W.position.set(L.x,L.y0,L.z),W.rotation.set(0,N,0),W.scale.setScalar(1),W.updateMatrix(),Y.setMatrixAt(N,W.matrix)}),i.add(Y,R,w),cc(Y,"rock");const Q=L=>{Wt.forEach((N,tt)=>{const pt=!N.tower;W.position.set(N.x,N.y0+.9,N.z),W.rotation.set(0,L*.5,0),W.scale.setScalar(pt?1:0),W.updateMatrix(),R.setMatrixAt(tt,W.matrix);for(let Mt=0;Mt<3;Mt++){const Rt=L*.4+Mt*2.1+N.x,wt=(Rt%1+1)%1;W.position.set(N.x+Math.cos(Rt*2.3)*.55,N.y0+1+wt*1.1,N.z+Math.sin(Rt*2.3)*.55),W.rotation.set(0,Rt*3,0);const et=pt?.07*Math.sin(wt*Math.PI):0;W.scale.set(et,et*1.6,et),W.updateMatrix(),w.setMatrixAt(tt*3+Mt,W.matrix)}}),R.instanceMatrix.needsUpdate=!0,w.instanceMatrix.needsUpdate=!0},it=new _e,st=d(s.x,s.z);it.position.set(s.x,st,s.z);const Ft=(()=>{const L=document.createElement("canvas");L.width=512,L.height=512;const N=L.getContext("2d");N.fillStyle="#f6f1e6",N.fillRect(0,0,512,512);const tt=On(5);for(let Mt=0;Mt<520;Mt++){const Rt=tt()*512,wt=tt()*512,et=2+tt()*9,Xt=tt()<.65;N.fillStyle=Xt?`rgba(${90+tt()*40},${120+tt()*40},${60+tt()*20},${.12+tt()*.18})`:`rgba(${130+tt()*30},${95+tt()*20},60,${.12+tt()*.15})`,N.beginPath(),N.ellipse(Rt,wt,et,et*(.4+tt()*.6),tt()*3,0,Math.PI*2),N.fill()}for(let Mt=0;Mt<1200;Mt++){N.strokeStyle=`rgba(190,170,140,${.04+tt()*.07})`,N.lineWidth=1;const Rt=tt()*512,wt=tt()*512;N.beginPath(),N.moveTo(Rt,wt),N.lineTo(Rt+(tt()-.5)*8,wt+6+tt()*20),N.stroke()}for(let Mt=0;Mt<26;Mt++){const Rt=tt()*512;N.strokeStyle=tt()<.5?"rgba(255,255,255,0.35)":"rgba(150,130,100,0.18)",N.lineWidth=2+tt()*5,N.beginPath(),N.moveTo(Rt,512),N.bezierCurveTo(Rt+40,350,Rt-30,160,Rt+20+tt()*40,0),N.stroke()}N.strokeStyle="rgba(175,145,100,0.55)",N.lineWidth=4,N.beginPath(),N.moveTo(60,512),N.bezierCurveTo(90,330,110,180,150,0),N.stroke();const pt=new fi(L);return pt.colorSpace=mn,pt.wrapS=Mi,pt})(),St=new We({map:Ft}),Lt=(()=>{const L=document.createElement("canvas");L.width=L.height=128;const N=L.getContext("2d");N.fillStyle="#e9dcbf",N.fillRect(0,0,128,128),N.strokeStyle="#a88d62",N.lineWidth=3,N.beginPath();for(let pt=0;pt<Math.PI*9;pt+=.1){const Mt=4+pt*2;N.lineTo(64+Math.cos(pt)*Mt,64+Math.sin(pt)*Mt)}N.stroke();const tt=new fi(L);return tt.colorSpace=mn,tt})(),re=new We({color:"#e6d8b8"}),bt=new We({map:Lt}),Yt=new We({color:"#3a3330",flatShading:!0}),ae=new We({color:"#b8b2aa",flatShading:!0}),le=(()=>{const L=document.createElement("canvas");L.width=256,L.height=128;const N=L.getContext("2d"),tt=N.createLinearGradient(0,0,0,128);tt.addColorStop(0,"#fff0b0"),tt.addColorStop(.45,"#ffb040"),tt.addColorStop(1,"#ff5a10"),N.fillStyle=tt,N.fillRect(0,0,256,128);const pt=On(11);for(let Rt=0;Rt<70;Rt++){const wt=pt();N.fillStyle=wt<.5?`rgba(70,60,55,${.5+pt()*.4})`:`rgba(170,165,160,${.5+pt()*.4})`,N.beginPath(),N.ellipse(pt()*256,20+pt()*108,4+pt()*14,2+pt()*6,pt()*3,0,Math.PI*2),N.fill()}N.strokeStyle="rgba(60,30,20,0.6)",N.lineWidth=1.5;for(let Rt=0;Rt<40;Rt++){const wt=pt()*256,et=pt()*128;N.beginPath(),N.moveTo(wt,et),N.lineTo(wt+(pt()-.5)*30,et+(pt()-.5)*20),N.stroke()}const Mt=new fi(L);return Mt.colorSpace=mn,Mt})(),Zt=new De({map:le,color:new Pt("#ffffff").multiplyScalar(2.2)});function ye({len:L,rTop:N,rBot:tt,crutchH:pt,seg:Mt,bend:Rt,glowMat:wt,shadow:et}){const Xt=new _e,Vt=new oe(new He(tt*.98,tt*.95,pt,Mt),[re,re,bt]);Vt.position.y=pt/2,Vt.castShadow=et,Xt.add(Vt);const he=new He(N,tt,L,Mt,8,!0),Ae=he.attributes.position,Re=On(Math.round(L*100)),wi=Array.from({length:6},()=>[Re()*6.28,Re()*3,.03+Re()*.04]);for(let Ie=0;Ie<Ae.count;Ie++){const ti=Ae.getY(Ie),ei=(ti+L/2)/L,Er=Math.atan2(Ae.getZ(Ie),Ae.getX(Ie));let Is=1+Math.sin(Er*7+ti*3)*.018;for(const[hd,fd,dd]of wi)Is+=Math.cos(Er-hd)*Math.sin(ei*6+fd)*dd*.5;Ae.setXYZ(Ie,Ae.getX(Ie)*Is+Rt*ei*ei*L,ti,Ae.getZ(Ie)*Is)}he.translate(0,L/2,0),he.computeVertexNormals();const Ce=new oe(he,St);Ce.position.y=pt,Ce.castShadow=et,Ce.receiveShadow=!0,Xt.add(Ce);const _n=Rt*L,Qn=pt+L,Mn=new He(N*1.02,N*1.04,N*.35,Mt,1,!0),Un=Mn.attributes.position;for(let Ie=0;Ie<Un.count;Ie++)Un.getY(Ie)>0&&Un.setY(Ie,Un.getY(Ie)+Math.sin(Ie*2.7)*N*.12);Mn.computeVertexNormals();const Nn=new oe(Mn,Yt);Nn.position.set(_n,Qn+N*.12,0),Xt.add(Nn);const Gi=new oe(new Gn(N*.97,Mt,6,0,Math.PI*2,0,Math.PI/2),wt);Gi.scale.y=.38,Gi.position.set(_n,Qn+N*.2,0),Xt.add(Gi);const yo=[];for(let Ie=0;Ie<5;Ie++){const ti=new oe(new po(N*(.2+Ie%3*.07),0),ae),ei=Ie*1.25+.3;ti.position.set(_n+Math.cos(ei)*N*.55,Qn+N*.33,Math.sin(ei)*N*.55),ti.scale.y=.4,Xt.add(ti),yo.push(ti)}const So=new Bn(N*.28,N*1.1,6,4),Ls=So.attributes.position;for(let Ie=0;Ie<Ls.count;Ie++){const ti=Ls.getY(Ie),ei=(ti/(N*1.1)+.5)*2.2,Er=Ls.getX(Ie),Is=Ls.getZ(Ie);Ls.setX(Ie,Er*Math.cos(ei)-Is*Math.sin(ei)+(ti+N*.55)*.25),Ls.setZ(Ie,Er*Math.sin(ei)+Is*Math.cos(ei))}So.computeVertexNormals();const wr=new oe(So,Yt);return wr.position.set(_n+N*.1,Qn+N*.7,N*.1),wr.rotation.z=-.35,Xt.add(wr),Xt.userData={glow:Gi,top:new B(_n,Qn,0),charRing:Nn,ashFlakes:yo,body:Ce,twist:wr,len:L,rTop:N,rBot:tt,bend:Rt,crutchH:pt,base:Ce.geometry.attributes.position.array.slice(),topParts:[Nn,Gi,wr,...yo].map(Ie=>[Ie,Ie.position.clone(),Ie.scale.clone()])},Xt}const ce=new Pt(e.rock[0]).multiplyScalar(.86),Se=new oe(yh(On(67+e.seed),3.3,3.9,1,ce,e.rock[1],16),Sh(e.water.mid,.2));Se.position.y=-.2,Se.castShadow=Se.receiveShadow=!0,it.add(Se),aa(Se,"rock");const q=7.4,zt=1.4,lt=ye({len:q,rTop:2.35,rBot:.95,crutchH:zt,seg:22,bend:.06,glowMat:Zt,shadow:!0});lt.position.y=.75,lt.rotation.set(.06,0,-.03);const xt=lt.userData.charRing;it.add(lt);const Bt=new Ve;Bt.position.y=zt+q+1.2,lt.add(Bt);const Gt=new Jr("#ff8a3a",40,34,1.5);Gt.position.y=zt+q+1.4,lt.add(Gt);const ue=new Bn(2.2,16,16,6,!0);ue.translate(0,-8,0);{const L=ue.attributes.position,N=new Float32Array(L.count*3);for(let tt=0;tt<L.count;tt++){const pt=Math.pow(1-Math.min(1,-L.getY(tt)/16),1.6);N.set([pt,pt,pt],tt*3)}ue.setAttribute("color",new Ge(N,3))}ue.rotateZ(Math.PI/2);const Fe=new De({color:"#ffc890",vertexColors:!0,transparent:!0,opacity:.05,blending:di,depthWrite:!1,side:Ke,fog:!1}),ke=new _e;ke.position.y=zt+q+.8;const we=new oe(ue,Fe),xn=we.clone();xn.rotation.y=Math.PI,ke.add(we,xn),lt.add(ke);const dn=new Jr("#ffa050",12,10,1.4);dn.position.set(0,1.3,4.6),it.add(dn),i.add(it),it.updateMatrixWorld(!0);const Kn=new B;Bt.getWorldPosition(Kn);const U=lt.userData,vt=[Bt,Gt,ke].map(L=>[L,L.position.y]),ut=L=>U.rBot+(U.rTop-U.rBot)*L;function Kt(L){const N=.15+.85*Math.max(0,Math.min(1,L)),tt=U.body.geometry.attributes.position,pt=U.base;for(let et=0;et<tt.count;et++){const Xt=pt[et*3+1],Vt=Xt/U.len,he=Vt*N,Ae=ut(he)/ut(Vt);tt.setXYZ(et,(pt[et*3]-U.bend*Vt*Vt*U.len)*Ae+U.bend*he*he*U.len,he*U.len,pt[et*3+2]*Ae)}tt.needsUpdate=!0,U.body.geometry.computeVertexNormals(),U.body.geometry.computeBoundingSphere();const Mt=(N-1)*U.len,Rt=ut(N)/U.rTop,wt=U.bend*U.len*(N*N-1);for(const[et,Xt,Vt]of U.topParts)et.position.set(U.top.x+(Xt.x-U.top.x)*Rt+wt,Xt.y+Mt,Xt.z*Rt),et.scale.set(Vt.x*Rt,Vt.y*Rt,Vt.z*Rt);for(const[et,Xt]of vt)et.position.y=Xt+Mt;it.updateMatrixWorld(!0),Bt.getWorldPosition(Kn)}const te={tip:Kn,pos:new B(s.x,st,s.z),lights:vr,flamePos(){return Kn.clone()},setLights(L){this.lights=L;const N=L/vr;Kt(N),this.glow=N,dn.intensity=3+9*N,Fe.opacity=.01+.04*N,xt.scale.y*=1+(1-N)*2.5}},Tt=On(42),Jt=[];for(let L=0;L<3e3&&Jt.length<(t.mobile?70:104);L++){const N=(Tt()-.5)*102,tt=(Tt()-.5)*102,pt=d(N,tt);if(pt<.75||y(N,tt)<3.2||!dt(N,tt)||Wt.some(et=>Math.hypot(et.x-N,et.z-tt)<3.2)||Jt.some(et=>Math.hypot(et.x-N,et.z-tt)<2.4)||e.volcano&&Math.hypot(N-e.volcano.x,tt-e.volcano.z)<e.volcano.r)continue;const Mt=pt<1.45?e.trees.beach:e.trees.inland;let Rt=Tt(),wt="bush";for(const[et,Xt]of Object.entries(Mt)){if(Rt<Xt){wt=et;break}Rt-=Xt}Jt.push({x:N,z:tt,y:pt,s:(wt==="bush"?.8:.75)+Tt()*.45,phase:Tt()*6.28,kind:wt})}if(e.trees.inland.bush){const L=On(303+e.seed),N=Jt.filter(tt=>tt.kind!=="bush"&&tt.y>=1);for(const tt of N){if(L()>(t.mobile?.6:.75))continue;const pt=1+Math.floor(L()*3);for(let Mt=0;Mt<pt;Mt++){const Rt=L()*6.28,wt=1.3+L()*1,et=tt.x+Math.cos(Rt)*wt,Xt=tt.z+Math.sin(Rt)*wt,Vt=d(et,Xt);Vt<1||y(et,Xt)<3||!dt(et,Xt)||Wt.some(he=>Math.hypot(he.x-et,he.z-Xt)<3)||Jt.some(he=>he!==tt&&Math.hypot(he.x-et,he.z-Xt)<1.3)||Jt.push({x:et,z:Xt,y:Vt,s:.55+L()*.35,phase:L()*6.28,kind:"bush"})}}}const se=m_(i,Jt,t,e),me=new Ve,Ee=[];for(let L=0;L<1200&&Ee.length<(t.mobile?40:56);L++){const N=Tt()*Math.PI*2,tt=n(N)-3+Tt()*5.5,pt=Math.cos(N)*tt,Mt=Math.sin(N)*tt;y(pt,Mt)<3.4||d(pt,Mt)<-1.2||Ee.some(Rt=>Math.hypot(Rt.x-pt,Rt.z-Mt)<2.2)||Ee.push({x:pt,z:Mt,s:.6+Tt()*1.2,r:Tt()*6})}for(const L of e.plateaus||[]){const N=Math.round(L.r*2*Math.PI/2.3);for(let tt=0;tt<N;tt++){const pt=tt/N*Math.PI*2+Tt()*.2,Mt=L.r+Math.sin(pt*5+L.x)*.8+Math.sin(pt*11)*.3-.2,Rt=L.x+Math.cos(pt)*Mt,wt=L.z+Math.sin(pt)*Mt;e.waterfall&&Math.hypot(Rt-e.waterfall.lip[0],wt-e.waterfall.lip[1])<2.2||y(Rt,wt)<2.6||Ee.push({x:Rt,z:wt,s:1.3+Tt()*.9,r:Tt()*6,cliff:!0})}}[0,1,2].map(L=>B_(On(31+L*7+e.seed),e.rock[0],e.rock[1],L)).map((L,N)=>{const tt=Ee.filter((Mt,Rt)=>Rt%3===N),pt=new gn(L,_t,Math.max(1,tt.length));return pt.count=tt.length,tt.forEach((Mt,Rt)=>{me.position.set(Mt.x,d(Mt.x,Mt.z)-.2*Mt.s,Mt.z),me.rotation.set(0,Mt.r*2,0),me.scale.set(Mt.s*1.1,Mt.s*.9,Mt.s),me.updateMatrix(),pt.setMatrixAt(Rt,me.matrix)}),pt.castShadow=pt.receiveShadow=!0,i.add(pt),cc(pt,"rock"),pt});const Xn=s_(i,{heightAt:d,pathDist:y,plinths:Wt,paths:r,lighthouse:te,landDist:h},t,On(99+e.seed),n,e),Jn=T_(i,{heightAt:d,pathDist:y,paths:r,lighthouse:te,islandEdge:n},t,e),P=[...Jt.map(L=>[L.x,L.z,1.3*L.s]),...Ee.map(L=>[L.x,L.z,L.s*1.6]),...Wt.map(L=>[L.x,L.z,1.9])],Z=(L,N)=>{let tt=1;for(const[pt,Mt,Rt]of P){const wt=(pt-L)**2+(Mt-N)**2;wt<Rt*Rt&&(tt=Math.min(tt,.55+.45*Math.sqrt(wt)/Rt))}return tt},at=v_(i,{heightAt:d,pathDist:y,plinths:Wt,lighthouse:te,extrasBlock:Jn.blocks,shadeAt:Z},t,e,On(7+e.seed)),ct={palm:.9,round:1.45,bush:1,pine:1.35,dead:.6};C_(i,[...Jt.map(L=>({x:L.x,y:L.y,z:L.z,r:(ct[L.kind]??1)*L.s})),...Ee.map(L=>({x:L.x,y:d(L.x,L.z),z:L.z,r:L.s*(L.cliff?1.7:1.55)})).filter(L=>L.y>.05),...Wt.map(L=>({x:L.x,y:L.y0,z:L.z,r:1.95})),{x:s.x,y:st,z:s.z,r:4.8}]);const $=Float32Array.from(v),Nt=[...Ee.map(L=>({x:L.x,z:L.z,r:L.s*.85})),...Xn.obstacles];for(const L of Nt){const N=L.r+1,tt=f*2/p,pt=Math.floor((L.x-N+f)/tt),Mt=Math.ceil((L.x+N+f)/tt),Rt=Math.floor((L.z-N+f)/tt),wt=Math.ceil((L.z+N+f)/tt);for(let et=Math.max(0,Rt);et<=Math.min(p,wt);et++)for(let Xt=Math.max(0,pt);Xt<=Math.min(p,Mt);Xt++){const Vt=-f+Xt*tt,he=-f+et*tt,Ae=Math.max(0,Math.hypot(Vt-L.x,he-L.z)-L.r);if(Ae>.9)continue;const Re=et*(p+1)+Xt,wi=.06-Ae*.35,Ce=1-Ae/.9;$[Re]=Math.max($[Re],$[Re]+(wi-$[Re])*Ce*Ce)}}if(e.waterfall&&e.waterfall._lvl!==void 0){const L=e.waterfall;fh(i,{heightTex:dh($,p+1),ext:f,grid:p,quality:t,sunDir:new B(24,17,4),colors:e.water,level:L._lvl,size:9,maxDepth:.8,center:[(L.pool[0]+L.lip[0])/2,(L.pool[1]+L.lip[1])/2]})}const $t=fh(i,{heightTex:dh($,p+1),ext:f,grid:p,quality:t,sunDir:new B(24,17,4),colors:e.water}),ne=[{x:s.x,z:s.z,r:3.5},...Wt.map(L=>({x:L.x,z:L.z,r:1.4})),...se.colliders,...Ee.filter(L=>d(L.x,L.z)>-.45).map(L=>({x:L.x,z:L.z,r:L.s*.85})),...Xn.colliders,...Jn.colliders];return{def:e,paths:r,plinths:Wt,lighthouse:te,heightAt:d,pathDist:y,slopeAt:A,isLand:S,isIce:E,landDist:h,isWalkable:(L,N)=>C(L,N)&&!Jn.blocks(L,N),colliders:ne,update:L=>{$t.update(L),Xn.update(L),Jn.update(L),at.update(L);const N=te.glow??1,tt=.75+.25*Math.sin(L*1.3)+.1*Math.sin(L*7.1);Zt.color.setRGB(1,.85,.75).multiplyScalar(N>0?(.7+1.5*N)*tt:.12),Gt.intensity=(8+40*N)*tt,ke.rotation.y=L*.6,se.update(L),Q(L)},terrain:Ut,extras:Jn,grass:at}}const Hr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ds{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const V_=new Dc(-1,1,1,-1,0,1);class H_ extends ze{constructor(){super(),this.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pe([0,2,0,0,2,0],2))}}const W_=new H_;class go{constructor(t){this._mesh=new oe(W_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,V_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Hf extends Ds{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof $e?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=li.clone(t.uniforms),this.material=new $e({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new go(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class bh extends Ds{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class X_ extends Ds{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class q_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Et);this._width=n.width,this._height=n.height,e=new In(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hf(Hr),this.copyPass.material.blending=pn,this.clock=new Tf}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}bh!==void 0&&(a instanceof bh?n=!0:a instanceof X_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Y_ extends Ds{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const Oa={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Et},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Le},cameraProjectionMatrixInverse:{value:new Le},cameraWorldMatrix:{value:new Le},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new B(-1,-1,-1)},sceneBoxMax:{value:new B(1,1,1)}},vertexShader:`

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
		}`},ka={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},al={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function $_(i=5){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=j_(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){const o=e[a],l=2*Math.PI*o/n,c=new B(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}const r=new uo(s,t,t);return r.wrapS=Mi,r.wrapT=Mi,r.needsUpdate=!0,r}function j_(i){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0);let s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}const Ba={defines:{SAMPLES:16,SAMPLE_VECTORS:Wf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Et},cameraProjectionMatrixInverse:{value:new Le},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Wf(i,t,e){const n=Z_(i,t,e);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function Z_(i,t,e){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new B(Math.cos(r),Math.sin(r),a))}return n}class K_{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r;const a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,p=c-u,v=t-f,x=e-p;let m,d;v>x?(m=1,d=0):(m=0,d=1);const y=v-m+h,S=x-d+h,g=v-1+2*h,A=x-1+2*h,E=l&255,b=c&255,C=this.perm[E+this.perm[b]]%12,M=this.perm[E+m+this.perm[b+d]]%12,_=this.perm[E+1+this.perm[b+1]]%12;let T=.5-v*v-x*x;T<0?n=0:(T*=T,n=T*T*this.dot(this.grad3[C],v,x));let O=.5-y*y-S*S;O<0?s=0:(O*=O,s=O*O*this.dot(this.grad3[M],y,S));let G=.5-g*g-A*A;return G<0?r=0:(G*=G,r=G*G*this.dot(this.grad3[_],g,A)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o;const c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),f=Math.floor(n+c),p=1/6,v=(h+u+f)*p,x=h-v,m=u-v,d=f-v,y=t-x,S=e-m,g=n-d;let A,E,b,C,M,_;y>=S?S>=g?(A=1,E=0,b=0,C=1,M=1,_=0):y>=g?(A=1,E=0,b=0,C=1,M=0,_=1):(A=0,E=0,b=1,C=1,M=0,_=1):S<g?(A=0,E=0,b=1,C=0,M=1,_=1):y<g?(A=0,E=1,b=0,C=0,M=1,_=1):(A=0,E=1,b=0,C=1,M=1,_=0);const T=y-A+p,O=S-E+p,G=g-b+p,D=y-C+2*p,z=S-M+2*p,k=g-_+2*p,X=y-1+3*p,V=S-1+3*p,j=g-1+3*p,nt=h&255,rt=u&255,Ct=f&255,kt=this.perm[nt+this.perm[rt+this.perm[Ct]]]%12,H=this.perm[nt+A+this.perm[rt+E+this.perm[Ct+b]]]%12,K=this.perm[nt+C+this.perm[rt+M+this.perm[Ct+_]]]%12,ht=this.perm[nt+1+this.perm[rt+1+this.perm[Ct+1]]]%12;let ot=.6-y*y-S*S-g*g;ot<0?s=0:(ot*=ot,s=ot*ot*this.dot3(this.grad3[kt],y,S,g));let At=.6-T*T-O*O-G*G;At<0?r=0:(At*=At,r=At*At*this.dot3(this.grad3[H],T,O,G));let Dt=.6-D*D-z*z-k*k;Dt<0?a=0:(Dt*=Dt,a=Dt*Dt*this.dot3(this.grad3[K],D,z,k));let Ut=.6-X*X-V*V-j*j;return Ut<0?o=0:(Ut*=Ut,o=Ut*Ut*this.dot3(this.grad3[ht],X,V,j)),32*(s+r+a+o)}noise4d(t,e,n,s){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,f,p,v;const x=(t+e+n+s)*l,m=Math.floor(t+x),d=Math.floor(e+x),y=Math.floor(n+x),S=Math.floor(s+x),g=(m+d+y+S)*c,A=m-g,E=d-g,b=y-g,C=S-g,M=t-A,_=e-E,T=n-b,O=s-C,G=M>_?32:0,D=M>T?16:0,z=_>T?8:0,k=M>O?4:0,X=_>O?2:0,V=T>O?1:0,j=G+D+z+k+X+V,nt=a[j][0]>=3?1:0,rt=a[j][1]>=3?1:0,Ct=a[j][2]>=3?1:0,kt=a[j][3]>=3?1:0,H=a[j][0]>=2?1:0,K=a[j][1]>=2?1:0,ht=a[j][2]>=2?1:0,ot=a[j][3]>=2?1:0,At=a[j][0]>=1?1:0,Dt=a[j][1]>=1?1:0,Ut=a[j][2]>=1?1:0,Wt=a[j][3]>=1?1:0,dt=M-nt+c,_t=_-rt+c,F=T-Ct+c,qt=O-kt+c,yt=M-H+2*c,Ot=_-K+2*c,It=T-ht+2*c,ee=O-ot+2*c,Y=M-At+3*c,R=_-Dt+3*c,w=T-Ut+3*c,W=O-Wt+3*c,Q=M-1+4*c,it=_-1+4*c,st=T-1+4*c,Ft=O-1+4*c,St=m&255,Lt=d&255,re=y&255,bt=S&255,Yt=o[St+o[Lt+o[re+o[bt]]]]%32,ae=o[St+nt+o[Lt+rt+o[re+Ct+o[bt+kt]]]]%32,le=o[St+H+o[Lt+K+o[re+ht+o[bt+ot]]]]%32,Zt=o[St+At+o[Lt+Dt+o[re+Ut+o[bt+Wt]]]]%32,ye=o[St+1+o[Lt+1+o[re+1+o[bt+1]]]]%32;let ce=.6-M*M-_*_-T*T-O*O;ce<0?h=0:(ce*=ce,h=ce*ce*this.dot4(r[Yt],M,_,T,O));let Se=.6-dt*dt-_t*_t-F*F-qt*qt;Se<0?u=0:(Se*=Se,u=Se*Se*this.dot4(r[ae],dt,_t,F,qt));let q=.6-yt*yt-Ot*Ot-It*It-ee*ee;q<0?f=0:(q*=q,f=q*q*this.dot4(r[le],yt,Ot,It,ee));let zt=.6-Y*Y-R*R-w*w-W*W;zt<0?p=0:(zt*=zt,p=zt*zt*this.dot4(r[Zt],Y,R,w,W));let lt=.6-Q*Q-it*it-st*st-Ft*Ft;return lt<0?v=0:(lt*=lt,v=lt*lt*this.dot4(r[ye],Q,it,st,Ft)),27*(h+u+f+p+v)}}class gi extends Ds{constructor(t,e,n,s,r,a,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=$_(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new In(this.width,this.height,{type:jn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new $e({defines:Object.assign({},Oa.defines),uniforms:li.clone(Oa.uniforms),vertexShader:Oa.vertexShader,fragmentShader:Oa.fragmentShader,blending:pn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Jx,this.normalMaterial.blending=pn,this.pdMaterial=new $e({defines:Object.assign({},Ba.defines),uniforms:li.clone(Ba.uniforms),vertexShader:Ba.vertexShader,fragmentShader:Ba.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new $e({defines:Object.assign({},ka.defines),uniforms:li.clone(ka.uniforms),vertexShader:ka.vertexShader,fragmentShader:ka.fragmentShader,blending:pn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new $e({uniforms:li.clone(Hr.uniforms),vertexShader:Hr.vertexShader,fragmentShader:Hr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:gl,blendDst:Ur,blendEquation:ai,blendSrcAlpha:ml,blendDstAlpha:Ur,blendEquationAlpha:ai}),this.blendMaterial=new $e({uniforms:li.clone(al.uniforms),vertexShader:al.vertexShader,fragmentShader:al.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:kh,blendSrc:gl,blendDst:Ur,blendEquation:ai,blendSrcAlpha:ml,blendDstAlpha:Ur,blendEquationAlpha:ai}),this.fsQuad=new go(null),this.originalClearColor=new Pt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Ic,this.depthTexture.format=ws,this.depthTexture.type=bs,this.normalRenderTarget=new In(this.width,this.height,{minFilter:vn,magFilter:vn,type:jn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Wf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case gi.OUTPUT.Off:break;case gi.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case gi.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case gi.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case gi.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case gi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case gi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=pn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const s=e.get(n);n.visible=s}),e.clear()}generateNoise(t=64){const e=new K_,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){const l=a,c=o;s[(a*t+o)*4]=(e.noise(l,c)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}const r=new uo(s,t,t,$n,yi);return r.wrapS=Mi,r.wrapT=Mi,r.needsUpdate=!0,r}}gi.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const J_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class xr extends Ds{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Et(t.x,t.y):new Et(256,256),this.clearColor=new Pt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new In(r,a,{type:jn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new In(r,a,{type:jn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new In(r,a,{type:jn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}const o=J_;this.highPassUniforms=li.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new $e({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Et(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Hr;this.copyUniforms=li.clone(h.uniforms),this.blendMaterial=new $e({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:di,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Pt,this.oldClearAlpha=1,this.basic=new De,this.fsQuad=new go(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Et(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=xr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=xr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new $e({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Et(.5,.5)},direction:{value:new Et(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}}xr.BlurDirectionX=new Et(1,0);xr.BlurDirectionY=new Et(0,1);const Q_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class t1 extends Ds{constructor(){super();const t=Q_;this.uniforms=li.clone(t.uniforms),this.material=new Kx({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new go(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Pe.getTransfer(this._outputColorSpace)===Oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Bh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Gh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Vh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_c?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Hh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Wh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const e1={name:"WarmGrade",uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uTint:{value:new B(1,1,1)},uLift:{value:new B},uSat:{value:1.08}},vertexShader:`
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
    }`},n1=new URLSearchParams(location.search).get("ao")==="1";function i1(i,t,e,n={}){const s=new q_(i,new In(1,1,{type:jn})),r=new Y_(t,e),a=new gi(t,e,1,1,void 0,{radius:.8,distanceExponent:1.3,thickness:1.4,scale:1.2,samples:12});a.blendIntensity=1;const o=new xr(new Et(256,256),.6,.55,1),l=new Hf(e1);n.tint&&l.uniforms.uTint.value.set(...n.tint),n.lift&&l.uniforms.uLift.value.set(...n.lift),n.sat&&(l.uniforms.uSat.value=n.sat),l.uniforms.uVignette.value=n.vignette??.25;const c=new t1;for(const v of[r,a,o,l,c])s.addPass(v);let h="high",u=1,f=1;const p={composer:s,get level(){return h},setLevel(v){h=v,a.enabled=v==="high"&&n1,o.strength=v==="high"?.6:.5;const x=v==="high"?4:0;for(const m of[s.renderTarget1,s.renderTarget2])m.samples!==x&&(m.samples=x,m.dispose());p.setSize(u,f)},setSize(v,x){u=v,f=x;const m=i.getPixelRatio();s.setPixelRatio(m),s.setSize(v,x);const d=h==="high"?2:4;o.resolution.set(v*m/d,x*m/d),o.setSize(v*m/d,x*m/d)},render(v){s.render(v)}};return p}function s1(i,t,e,n,s,r=null){const{heightAt:a}=t,o=e.mobile?.5:1,l=new Set(n.life),c=new Ve,h=new Pt,u=[],f=()=>{for(let v=0;v<50;v++){const x=(Math.random()-.5)*80,m=(Math.random()-.5)*80,d=a(x,m);if(d>.8)return{x,z:m,h:d}}return{x:0,z:0,h:1}};if(l.has("butterflies")){const v=Math.round(26*o),x=new pr(.16,6,0,Math.PI);x.scale(1,1.3,1);const d=[-1,1].map(()=>new We({color:"#ffffff",side:Ke})).map(g=>{const A=new gn(x,g,v);return i.add(A),A}),y=Array.from({length:v},(g,A)=>({...f(),a:Math.random()*6,sp:.6+Math.random()*.6,ph:Math.random()*6,home:null})),S=["#ffd84a","#ff9ad0","#9ad8ff","#ffffff","#ffa040"];y.forEach((g,A)=>{g.home={x:g.x,z:g.z},d.forEach(E=>E.setColorAt(A,h.set(S[A%S.length])))}),d.forEach(g=>g.instanceColor.needsUpdate=!0),u.push((g,A)=>{y.forEach((E,b)=>{E.a+=Math.sin(A*.7+E.ph)*1.6*g,E.x+=Math.cos(E.a)*E.sp*g,E.z+=Math.sin(E.a)*E.sp*g,Math.hypot(E.x-E.home.x,E.z-E.home.z)>5&&(E.a=Math.atan2(E.home.z-E.z,E.home.x-E.x));const C=a(E.x,E.z)+.6+Math.sin(A*2+E.ph)*.25,M=Math.sin(A*18+E.ph)*1.1;d.forEach((_,T)=>{c.position.set(E.x,C,E.z),c.rotation.set(0,-E.a+Math.PI/2,0),c.rotateZ((T?1:-1)*(.3+M*.5)),c.rotateX(-Math.PI/2),c.scale.set(T?1:-1,1,1),c.updateMatrix(),_.setMatrixAt(b,c.matrix)})}),d.forEach(E=>E.instanceMatrix.needsUpdate=!0)})}if(l.has("birds")){const x=new ze;x.setAttribute("position",new pe([-.7,.12,.1,0,0,-.15,0,0,.15,0,0,-.15,.7,.12,.1,0,0,.15],3)),x.computeVertexNormals();const m=new gn(x,new We({color:"#f4f4f0",side:Ke}),7);m.castShadow=!0,i.add(m);const d=Array.from({length:7},(y,S)=>({cx:(Math.random()-.5)*50,cz:(Math.random()-.5)*50,r:8+Math.random()*10,y:9+Math.random()*4,sp:.15+Math.random()*.1,ph:S}));u.push((y,S)=>{d.forEach((g,A)=>{const E=S*g.sp+g.ph;c.position.set(g.cx+Math.cos(E)*g.r,g.y+Math.sin(S*.7+A)*.4,g.cz+Math.sin(E)*g.r),c.rotation.set(0,-E,Math.sin(S*.5+A)*.15);const b=1+Math.sin(S*6+A)*.35*(Math.sin(S*.4+A)>.3?1:.1),C=r?xe.smoothstep(c.position.distanceTo(r.position),3,7):1;c.scale.set(1.4*C,b*1.4*C,1.4*C),c.updateMatrix(),m.setMatrixAt(A,c.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(l.has("leaves")){const v=Math.round(60*o),x=new Zn(.16,.1),m=new gn(x,new We({color:"#ffffff",side:Ke}),v);i.add(m);const d=Array.from({length:v},(y,S)=>({...f(),ph:Math.random()*6,sp:1+Math.random()*1.5}));d.forEach((y,S)=>m.setColorAt(S,h.set(["#8fbf4a","#c8b04a","#6a9a3a","#d89a3a"][S%4]))),m.instanceColor.needsUpdate=!0,u.push((y,S)=>{d.forEach((g,A)=>{g.x+=g.sp*y,g.z+=Math.sin(S*.8+g.ph)*.6*y,g.x>45&&Object.assign(g,f(),{x:-45});const E=Math.max(a(g.x,g.z),.1)+.3+Math.abs(Math.sin(S*1.3+g.ph))*.9;c.position.set(g.x,E,g.z),c.rotation.set(S*3+g.ph,S*2+g.ph,S*1.5),c.scale.setScalar(1),c.updateMatrix(),m.setMatrixAt(A,c.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(l.has("fireflies")&&s==="skumring"){const v=Math.round(120*o),x=new Float32Array(v*3),m=new Float32Array(v*3),d=Array.from({length:v},()=>({...f(),ph:Math.random()*6})),y=new ze;y.setAttribute("position",new Ge(x,3)),y.setAttribute("color",new Ge(m,3));const S=document.createElement("canvas");S.width=S.height=32;const g=S.getContext("2d"),A=g.createRadialGradient(16,16,0,16,16,16);A.addColorStop(0,"rgba(255,255,255,1)"),A.addColorStop(1,"rgba(255,255,255,0)"),g.fillStyle=A,g.fillRect(0,0,32,32);const E=new Nc(y,new ho({size:.35,map:new fi(S),vertexColors:!0,transparent:!0,blending:di,depthWrite:!1}));E.frustumCulled=!1,i.add(E),u.push((b,C)=>{d.forEach((M,_)=>{x[_*3]=M.x+Math.sin(C*.4+M.ph)*1.2,x[_*3+1]=M.h+.5+Math.sin(C*.9+M.ph*2)*.4,x[_*3+2]=M.z+Math.cos(C*.35+M.ph)*1.2;const T=Math.max(0,Math.sin(C*1.7+M.ph*3))**3*2.5;m[_*3]=1*T,m[_*3+1]=.9*T,m[_*3+2]=.35*T}),y.attributes.position.needsUpdate=!0,y.attributes.color.needsUpdate=!0})}let p=0;return{update(v){const x=Math.min(.05,Math.max(0,v-p));p=v;for(const m of u)m(x,v)}}}function r1(i,{cell:t=.75,ext:e=68}={}){const n=Math.ceil(e*2/t)+1,s=new Float64Array(n*n),r=new Float32Array(n*n),a=new Float32Array(n*n),o=i.lighthouse.pos,l=(b,C)=>[Math.round((b+e)/t),Math.round((C+e)/t)],c=(b,C)=>[-e+b*t,-e+C*t];let h=()=>!1;function u(){for(let b=0;b<n;b++)for(let C=0;C<n;C++){const[M,_]=c(C,b),T=i.heightAt(M,_),O=b*n+C,G=Math.hypot(M-o.x,_-o.z);let D=1.8;T<-.5||i.slopeAt(M,_)>1.1||i.extras.blocks(M,_)||h(M,_)||G<3.2?D=1/0:i.pathDist(M,_)<1.6?D=.2:T<.05&&(D=2.6),r[O]=D}}function f(){s.fill(1/0),a.fill(0);const b=[],C=(T,O)=>{b.push([T,O]);let G=b.length-1;for(;G>0;){const D=G-1>>1;if(b[D][0]<=b[G][0])break;[b[D],b[G]]=[b[G],b[D]],G=D}},M=()=>{const T=b[0],O=b.pop();if(b.length){b[0]=O;let G=0;for(;;){const D=2*G+1,z=D+1;let k=G;if(D<b.length&&b[D][0]<b[k][0]&&(k=D),z<b.length&&b[z][0]<b[k][0]&&(k=z),k===G)break;[b[k],b[G]]=[b[G],b[k]],G=k}}return T};for(let T=0;T<n;T++)for(let O=0;O<n;O++){const[G,D]=c(O,T),z=Math.hypot(G-o.x,D-o.z);z>=3.2&&z<4.2&&r[T*n+O]<1/0&&(s[T*n+O]=0,C(0,T*n+O))}const _=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;b.length;){const[T,O]=M();if(T>s[O])continue;const G=O%n,D=O/n|0;for(const[z,k,X]of _){const V=G+z,j=D+k;if(V<0||j<0||V>=n||j>=n)continue;const nt=j*n+V,rt=r[nt];if(rt===1/0)continue;const Ct=T+X*t*(rt+r[O])*.5;Ct<s[nt]&&(s[nt]=Ct,a[nt]=a[O]+X*t,C(Ct,nt))}}}const p=(b,C)=>{const[M,_]=l(b,C);return M<0||_<0||M>=n||_>=n?1/0:s[_*n+M]};function v(b,C){const[M,_]=l(b,C);let T=p(b,C),O=0,G=0;for(let z=-1;z<=1;z++)for(let k=-1;k<=1;k++){if(!k&&!z)continue;const X=M+k,V=_+z;if(X<0||V<0||X>=n||V>=n)continue;const j=s[V*n+X];j<T&&(T=j,O=k,G=z)}const D=Math.hypot(O,G)||1;return[O/D,G/D,T]}const x=(b,C)=>{const[M,_]=l(b,C);return M<0||_<0||M>=n||_>=n?-1:_*n+M},m=(b,C)=>{const M=x(b,C);return M<0||s[M]===1/0?0:a[M]};function d(){const b=[];for(const C of i.paths){const M=C.samples.find(_=>i.heightAt(_.x,_.z)>-.4&&m(_.x,_.z)>0);M&&b.push([M.x,M.z])}return b}function y(b,C=22,{near:M=8,minFrac:_=.6}={}){const T=d(),O=Math.max(0,...T.map(([k,X])=>m(k,X))),G=(k,X)=>{const V=i.heightAt(k,X);return V>-.4&&V<.15&&[[4,0],[-4,0],[0,4],[0,-4],[3,3],[-3,3],[3,-3],[-3,-3]].some(([j,nt])=>i.heightAt(k+j,X+nt)<-.9)},D=T.map(([k,X])=>{const V=[],j=[],nt=Math.ceil(M/t),[rt,Ct]=l(k,X);for(let H=-nt;H<=nt;H++)for(let K=-nt;K<=nt;K++){const[ht,ot]=c(rt+K,Ct+H);Math.hypot(ht-k,ot-X)>M||m(ht,ot)<_*O||(G(ht,ot)?V.push([ht,ot]):i.heightAt(ht,ot)>.3&&i.slopeAt(ht,ot)<.6&&j.push([ht,ot]))}return(V.length?V:j).sort(()=>Math.random()-.5)}).filter(k=>k.length).sort(()=>Math.random()-.5),z=[];for(let k=0;z.length<b&&k<4;k++){for(const X of D){const V=X.find(j=>z.every(nt=>Math.hypot(nt[0]-j[0],nt[1]-j[1])>C));if(V&&z.push(V),z.length>=b)break}C=Math.min(C,6)}return z}let S=null;function g(b,C){if(!S){S=new Float32Array(n*n);for(let k=0;k<n;k++)for(let X=0;X<n;X++){const[V,j]=c(X,k);S[k*n+X]=i.isWalkable(V,j)?i.heightAt(V,j)<.05?1.6:1:1/0}}const M=new Float64Array(n*n).fill(1/0),_=[],T=(k,X)=>{_.push([k,X]);let V=_.length-1;for(;V>0;){const j=V-1>>1;if(_[j][0]<=_[V][0])break;[_[j],_[V]]=[_[V],_[j]],V=j}},O=()=>{const k=_[0],X=_.pop();if(_.length){_[0]=X;let V=0;for(;;){const j=2*V+1,nt=j+1;let rt=V;if(j<_.length&&_[j][0]<_[rt][0]&&(rt=j),nt<_.length&&_[nt][0]<_[rt][0]&&(rt=nt),rt===V)break;[_[rt],_[V]]=[_[V],_[rt]],V=rt}}return k},G=x(b,C);if(G<0)return null;M[G]=0,T(0,G);const D=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;_.length;){const[k,X]=O();if(k>M[X])continue;const V=X%n,j=X/n|0;for(const[nt,rt,Ct]of D){const kt=V+nt,H=j+rt;if(kt<0||H<0||kt>=n||H>=n)continue;const K=H*n+kt,ht=S[K];if(ht===1/0)continue;const ot=k+Ct*t*ht;ot<M[K]&&(M[K]=ot,T(ot,K))}}const z=(k,X)=>{const V=x(k,X);return V<0?1/0:M[V]};return{at:z,dir(k,X){const[V,j]=l(k,X);let nt=z(k,X),rt=0,Ct=0;for(let H=-1;H<=1;H++)for(let K=-1;K<=1;K++){if(!K&&!H)continue;const ht=V+K,ot=j+H;ht<0||ot<0||ht>=n||ot>=n||M[ot*n+ht]<nt&&(nt=M[ot*n+ht],rt=K,Ct=H)}const kt=Math.hypot(rt,Ct)||1;return[rt/kt,Ct/kt]}}}const A=()=>{let b=0;for(const C of s)C<1/0&&C>b&&(b=C);return b},E=()=>{u(),f()};return E(),{at:p,dir:v,coastPoints:y,roadEnds:d,routeLen:m,walkField:g,rebuild:E,setBlock(b){h=b,E()},maxDist:A(),N:n,cell:t}}function Xf(i,t=700,{blending:e=di,size:n=.55,opacity:s=1,fadeTo:r=null}={}){const a=new Pt(r||"#000000"),o=new Float32Array(t*3),l=new Float32Array(t*3),c=new Float32Array(t*3),h=new Float32Array(t*3),u=new Float32Array(t),f=new Float32Array(t),p=new Float32Array(t);let v=0;const x=new ze;x.setAttribute("position",new Ge(o,3)),x.setAttribute("color",new Ge(l,3));const m=document.createElement("canvas");m.width=m.height=64;const d=m.getContext("2d"),y=d.createRadialGradient(32,32,0,32,32,32);y.addColorStop(0,"rgba(255,255,255,1)"),y.addColorStop(.4,"rgba(255,255,255,0.6)"),y.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=y,d.fillRect(0,0,64,64);const S=new ho({size:n,map:new fi(m),vertexColors:!0,transparent:!0,opacity:s,blending:e,depthWrite:!1}),g=new Nc(x,S);g.frustumCulled=!1,i.add(g);for(let C=0;C<t;C++)o[C*3+1]=-999;const A=new Pt;function E(C,M,_,{n:T=10,color:O="#ffb347",speed:G=4,up:D=3,life:z=.7,gravity:k=9,spread:X=1}={}){A.set(O);for(let V=0;V<T;V++){const j=v;v=(v+1)%t,o[j*3]=C,o[j*3+1]=M,o[j*3+2]=_;const nt=Math.random()*Math.PI*2,rt=G*(.4+Math.random()*.6)*X;c[j*3]=Math.cos(nt)*rt,c[j*3+1]=D*(.5+Math.random()),c[j*3+2]=Math.sin(nt)*rt,h[j*3]=A.r,h[j*3+1]=A.g,h[j*3+2]=A.b,f[j]=u[j]=z*(.6+Math.random()*.6),p[j]=k}}function b(C){for(let M=0;M<t;M++){if(u[M]<=0)continue;if(u[M]-=C,u[M]<=0){o[M*3+1]=-999,l[M*3]=l[M*3+1]=l[M*3+2]=0;continue}c[M*3+1]-=p[M]*C,o[M*3]+=c[M*3]*C,o[M*3+1]+=c[M*3+1]*C,o[M*3+2]+=c[M*3+2]*C;const _=u[M]/f[M];l[M*3]=h[M*3]*_+a.r*(1-_),l[M*3+1]=h[M*3+1]*_+a.g*(1-_),l[M*3+2]=h[M*3+2]*_+a.b*(1-_)}x.attributes.position.needsUpdate=!0,x.attributes.color.needsUpdate=!0}return{emit:E,update:b}}const a1={xbox:{build:"Ⓐ",carry:"Ⓑ",next:"Ⓨ",sel:"LB/RB",pause:"☰",restart:"View",name:"Xbox"},ps:{build:"✕",carry:"○",next:"△",sel:"L1/R1",pause:"Options",restart:"Select",name:"PlayStation"},switch:{build:"A",carry:"B",next:"X",sel:"L/R",pause:"+",restart:"−",name:"Switch"}},o1={build:"B",carry:"E",next:"N",sel:"Z/X",pause:"Esc",restart:"R",name:"Tastatur"},l1={build:"Bygg",carry:"Bær",next:"Neste bølge",sel:"",pause:"⏸",restart:"⏸ → ↺",name:"Berøring"};function wh(i=""){const t=i.toLowerCase();return/nintendo|pro controller|joy-con|joycon|057e/.test(t)?"switch":/playstation|dualshock|dualsense|wireless controller|054c|sony/.test(t)?"ps":"xbox"}function c1(i){const t=i==="switch";return{build:t?1:0,carry:t?0:1,next:3,prev:4,nextSel:5,zoomOut:6,zoomIn:7,pause:9,back:8}}function u1(i){const t=new Set,e={move:{x:0,z:0},look:0,lookDelta:0,zoom:1,pressed:new Set,clicks:[],device:matchMedia("(pointer: coarse)").matches?"touch":"kb",padKind:"xbox",padId:""},n=g=>e.pressed.add(g),s=g=>{e.device=g};addEventListener("keydown",g=>{if(s("kb"),(g.code==="Space"||g.code.startsWith("Arrow")||g.code==="Tab")&&g.preventDefault(),g.repeat)return;t.add(g.code);const A={KeyE:"carry",Space:"carry",KeyB:"build",Digit1:"b1",Digit2:"b2",Digit3:"b3",Digit4:"b4",Digit5:"b5",Digit6:"b6",Digit7:"b7",Numpad1:"b1",Numpad2:"b2",Numpad3:"b3",Numpad4:"b4",Numpad5:"b5",Numpad6:"b6",Numpad7:"b7",KeyZ:"selPrev",KeyX:"selNext",KeyQ:"selPrev",KeyR:"restart",KeyN:"next",Enter:"next",KeyF:"fps",KeyM:"music",Escape:"pause",KeyP:"pause"};A[g.code]&&n(A[g.code])}),addEventListener("keyup",g=>t.delete(g.code)),addEventListener("blur",()=>t.clear()),i.addEventListener("wheel",g=>{g.preventDefault(),s("kb"),e.zoom=Ga(e.zoom*(g.deltaY>0?1.08:1/1.08),.55,4.5)},{passive:!1}),i.addEventListener("contextmenu",g=>g.preventDefault());const r=new Map;let a=0,o=1,l=null;const c=g=>({x:g.clientX/innerWidth*2-1,y:-(g.clientY/innerHeight)*2+1});i.addEventListener("pointerdown",g=>{if(s(g.pointerType==="touch"?"touch":"kb"),g.pointerType==="mouse"&&g.button===2){l={x:g.clientX},i.setPointerCapture(g.pointerId);return}g.pointerType==="mouse"&&g.button!==0||(r.set(g.pointerId,{e:g,t:performance.now(),x0:g.clientX,y0:g.clientY}),r.size===2&&(a=Eh(r),o=e.zoom))}),i.addEventListener("pointermove",g=>{if(l){e.lookDelta+=(g.clientX-l.x)*.008,l.x=g.clientX;return}const A=r.get(g.pointerId);A&&(A.e=g,r.size===2&&a>0&&(e.zoom=Ga(o*(a/Eh(r)),.55,4.5)))});const h=g=>{if(l&&g.button===2){l=null;return}const A=r.get(g.pointerId);A&&r.size===1&&a===0&&Math.hypot(g.clientX-A.x0,g.clientY-A.y0)<12&&e.clicks.push(c(g)),r.delete(g.pointerId),r.size<2&&(a=0)};i.addEventListener("pointerup",h),i.addEventListener("pointercancel",g=>{r.delete(g.pointerId),l=null,a=0});const u=document.getElementById("stick"),f=document.getElementById("knob"),p={x:0,z:0};let v=null;const x=g=>{const A=u.getBoundingClientRect();let E=g.clientX-(A.left+A.width/2),b=g.clientY-(A.top+A.height/2);const C=A.width/2,M=Math.hypot(E,b);M>C&&(E*=C/M,b*=C/M),f.style.transform=`translate(${E}px, ${b}px)`;const _=M/C<.15?0:1;p.x=E/C*_,p.z=b/C*_};u.addEventListener("pointerdown",g=>{s("touch"),v=g.pointerId,u.setPointerCapture(g.pointerId),x(g)}),u.addEventListener("pointermove",g=>{g.pointerId===v&&x(g)});const m=g=>{g.pointerId===v&&(v=null,p.x=p.z=0,f.style.transform="")};u.addEventListener("pointerup",m),u.addEventListener("pointercancel",m);const d=(g,A)=>g.addEventListener("pointerdown",E=>{E.preventDefault(),E.stopPropagation(),E.pointerType==="touch"&&s("touch"),n(A)});d(document.getElementById("btn-build"),"build"),d(document.getElementById("btn-carry"),"carry"),d(document.getElementById("btn-next"),"next"),d(document.getElementById("btn-pause"),"pause"),document.querySelectorAll("#build-panel button").forEach((g,A)=>d(g,"b"+(A+1)));let y=[];addEventListener("gamepadconnected",g=>{e.padId=g.gamepad.id,e.padKind=wh(g.gamepad.id)});function S(){const A=[...navigator.getGamepads?navigator.getGamepads():[]].find(D=>D&&D.connected);if(!A)return null;A.id!==e.padId&&(e.padId=A.id,e.padKind=wh(A.id));const E=c1(e.padKind),b=A.buttons.map(D=>D.pressed||D.value>.5),C=D=>b[D]&&!y[D],M=D=>Math.abs(D)<.2?0:(D-Math.sign(D)*.2)/.8;let _=M(A.axes[0]||0),T=M(A.axes[1]||0);b[14]&&(_=-1),b[15]&&(_=1),b[12]&&(T=-1),b[13]&&(T=1);const O=M(A.axes[2]||0);return(_||T||O||b.some(Boolean))&&s("pad"),C(E.build)&&n("build"),C(E.carry)&&n("carry"),C(E.next)&&n("next"),C(E.prev)&&n("selPrev"),C(E.nextSel)&&n("selNext"),C(E.pause)&&n("pause"),C(E.back)&&n("restart"),C(2)&&e.padKind!=="switch"&&n("next"),y=b,{x:_,z:T,look:O,zoomIn:b[E.zoomIn],zoomOut:b[E.zoomOut]}}return e.update=g=>{let A=0,E=0;(t.has("KeyA")||t.has("ArrowLeft"))&&(A-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(A+=1),(t.has("KeyW")||t.has("ArrowUp"))&&(E-=1),(t.has("KeyS")||t.has("ArrowDown"))&&(E+=1);const b=S();b&&(b.x||b.z)&&(A=b.x,E=b.z),(p.x||p.z)&&(A=p.x,E=p.z);const C=Math.hypot(A,E);C>1&&(A/=C,E/=C),e.move.x=A,e.move.z=E,e.look=e.lookDelta+(b?b.look*2.2*g:0),e.lookDelta=0,b!=null&&b.zoomIn&&(e.zoom=Ga(e.zoom/(1+g*1.2),.55,4.5)),b!=null&&b.zoomOut&&(e.zoom=Ga(e.zoom*(1+g*1.2),.55,4.5))},e.labels=()=>e.device==="pad"?a1[e.padKind]:e.device==="touch"?l1:o1,e.consume=g=>e.pressed.delete(g),e.clear=()=>{e.pressed.clear(),e.clicks.length=0},e}const Ga=(i,t,e)=>Math.max(t,Math.min(e,i));function Eh(i){const[t,e]=[...i.values()].map(n=>n.e);return Math.hypot(t.clientX-e.clientX,t.clientY-e.clientY)||1}let Xe=null,sr=null,ea=null;function h1(){if(Xe){Xe.resume();return}const i=window.AudioContext||window.webkitAudioContext;if(!i)return;Xe=new i,sr=Xe.createGain(),sr.gain.value=.5,sr.connect(Xe.destination),ea=Xe.createBuffer(1,Xe.sampleRate*2,Xe.sampleRate);const t=ea.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1;f1()}const qf=()=>Xe?{ctx:Xe,noiseBuf:ea}:null;function Ze(i,t,{type:e="sine",vol:n=.2,slide:s=0,delay:r=0}={}){if(!Xe)return;const a=Xe.currentTime+r,o=Xe.createOscillator(),l=Xe.createGain();o.type=e,o.frequency.setValueAtTime(i,a),s&&o.frequency.exponentialRampToValueAtTime(Math.max(30,i+s),a+t),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(n,a+.01),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l).connect(sr),o.start(a),o.stop(a+t+.02)}function cs(i,{vol:t=.3,freq:e=800,q:n=.7,delay:s=0}={}){if(!Xe)return;const r=Xe.currentTime+s,a=Xe.createBufferSource();a.buffer=ea;const o=Xe.createBiquadFilter();o.type="lowpass",o.frequency.value=e,o.Q.value=n;const l=Xe.createGain();l.gain.setValueAtTime(t,r),l.gain.exponentialRampToValueAtTime(1e-4,r+i),a.connect(o).connect(l).connect(sr),a.start(r,Math.random()),a.stop(r+i+.02)}function f1(){const i=Xe.createBufferSource();i.buffer=ea,i.loop=!0;const t=Xe.createBiquadFilter();t.type="lowpass",t.frequency.value=420;const e=Xe.createGain();e.gain.value=.035;const n=Xe.createOscillator(),s=Xe.createGain();n.frequency.value=.12,s.gain.value=.03,n.connect(s).connect(e.gain),i.connect(t).connect(e).connect(sr),i.start(),n.start()}let Th=0;const qe={pickup(){if(!Xe)return;const i=Xe.currentTime,t=i-Th<.4?1.12:1;Th=i,Ze(880*t+Math.random()*60,.12,{type:"triangle",vol:.12}),Ze(1320*t,.1,{type:"sine",vol:.06,delay:.04})},puff(){cs(.18,{vol:.07,freq:600,q:.3}),Ze(240,.12,{vol:.04,slide:-60})},crunch(){for(let i=0;i<4;i++)cs(.05,{vol:.1,freq:3500,delay:i*.03});Ze(130,.18,{vol:.08,slide:-40})},skank(){[[392,494,587],[349,440,523]][Math.random()<.5?0:1].forEach(i=>Ze(i,.11,{type:"square",vol:.025})),Ze(98,.3,{vol:.08})},chill(){Ze(330,.5,{type:"sine",vol:.07,slide:160}),Ze(495,.45,{type:"triangle",vol:.04,slide:120,delay:.08})},shoot(){Ze(520,.07,{type:"square",vol:.03,slide:-300})},mortar(){cs(.12,{vol:.12,freq:500}),Ze(160,.15,{type:"sine",vol:.12,slide:-80})},boom(){cs(.45,{vol:.28,freq:380}),Ze(90,.35,{vol:.18,slide:-50})},horn(){Ze(196,.5,{type:"sawtooth",vol:.035}),Ze(147,.55,{type:"sine",vol:.06})},hit(){cs(.05,{vol:.08,freq:2500})},die(){Ze(420,.18,{type:"triangle",vol:.09,slide:-280}),cs(.12,{vol:.07,freq:1200})},build(){[392,494,587].forEach((i,t)=>Ze(i,.25,{type:"triangle",vol:.1,delay:t*.06}))},upgrade(){[523,659,784,1047].forEach((i,t)=>Ze(i,.22,{type:"triangle",vol:.1,delay:t*.07}))},stone(){Ze(660,.2,{type:"sine",vol:.1,slide:200})},lose(){Ze(220,.6,{type:"sawtooth",vol:.06,slide:-120}),cs(.3,{vol:.08,freq:300})},stun(){Ze(700,.4,{type:"square",vol:.05,slide:-500})},deny(){Ze(150,.12,{type:"square",vol:.05})},wave(){[330,330,440].forEach((i,t)=>Ze(i,.3,{type:"sawtooth",vol:.04,delay:t*.18}))},win(){[523,659,784,1047,1319].forEach((i,t)=>Ze(i,.4,{type:"triangle",vol:.12,delay:t*.12}))}},dc=172,Pi=60/dc/4,us=i=>440*Math.pow(2,(i-69)/12),Ah={tak:{chords:[[50,66,69,73,76],[47,62,66,69,74],[43,59,62,66,71],[45,61,64,69,73]],hook:[[0,78,3],[3,76,3],[6,73,2],[8,74,4],[14,71,2],[16,73,3],[19,74,3],[22,76,6],[28,69,4]],pad:"sawtooth",padCut:2400,arpOct:12,reeseDetune:9,drive:0,space:.35,arpRate:1,lead:"square"},vinter:{chords:[[45,60,64,71,76],[41,57,64,69,72],[48,64,67,72,79],[43,59,62,67,71]],hook:[[0,76,6],[6,74,2],[8,72,6],[16,71,4],[20,72,2],[22,74,4],[26,79,6]],pad:"triangle",padCut:1500,arpOct:24,reeseDetune:6,drive:0,space:.6,arpRate:2,lead:"triangle"},vulkan:{chords:[[40,55,59,64,67],[41,57,60,65,69],[40,55,59,64,71],[38,54,57,62,66]],hook:[[0,64,2],[2,65,2],[4,64,4],[10,62,2],[12,59,4],[16,64,2],[18,67,2],[20,65,4],[26,64,6]],pad:"sawtooth",padCut:900,arpOct:0,reeseDetune:16,drive:.6,space:.25,arpRate:1,lead:"sawtooth"}},ol={A:{k:"x.x.......xx....x.x.......x.....",s:"....x..x.x..x..x....x..x.x..x.x.",g:"..........x...........x.....x..."},B:{k:"x.....x...x.x...x.x...x...x.....",s:"....x.x..x..x.x.....x..xx..x..x.",g:".x.......x.....x.x.......x......"},FILL:{k:"x.x.......x.....x...............",s:"....x..x.x..x..x....x.xxxxxxxxxx",g:"................................"}},Ch=[["build",8],["drop",16],["break",8],["drop",16]];function d1(i,t,e){const n=Ah[e]||Ah.tak,s=i.createDynamicsCompressor();s.threshold.value=-18,s.ratio.value=3,s.attack.value=.01,s.release.value=.2;const r=i.createDynamicsCompressor();r.threshold.value=-3,r.ratio.value=20,r.attack.value=.002,r.release.value=.08;const a=i.createGain();a.gain.value=0,s.connect(r).connect(a).connect(i.destination);const o=i.createAnalyser();o.fftSize=1024,a.connect(o);const l={};for(const Y of["drums","bass","pad","arp","lead"]){const R=i.createGain();R.gain.value=0,R.connect(s),l[Y]=R}const c={};for(const Y of["pad","bass"]){const R=i.createGain();R.gain.value=1,R.connect(l[Y]),c[Y]=R}const h=(Y,R)=>{const w=i.createBuffer(2,Math.floor(i.sampleRate*Y),i.sampleRate);for(let W=0;W<2;W++){const Q=w.getChannelData(W);for(let it=0;it<Q.length;it++)Q[it]=(Math.random()*2-1)*Math.pow(1-it/Q.length,R)}return w},u=i.createConvolver();u.buffer=h(2.4,2.5);const f=i.createGain();f.gain.value=n.space,u.connect(f).connect(s);const p=i.createConvolver();p.buffer=h(.5,.4);const v=i.createGain();v.gain.value=0,p.connect(v).connect(l.drums);const x=i.createDelay(1);x.delayTime.value=Pi*3;const m=i.createGain();m.gain.value=.38;const d=i.createBiquadFilter();d.type="lowpass",d.frequency.value=2400;const y=i.createStereoPanner(),S=i.createOscillator(),g=i.createGain();S.frequency.value=dc/60/3,g.gain.value=.8,S.connect(g).connect(y.pan),S.start(),x.connect(d).connect(m).connect(x),d.connect(y).connect(l.arp);const A=i.createBiquadFilter();A.type="highpass",A.frequency.value=180;const E=i.createBiquadFilter();E.type="lowpass",E.frequency.value=n.padCut,E.Q.value=2;const b=i.createOscillator(),C=i.createGain();b.frequency.value=.07,C.gain.value=n.padCut*.45,b.connect(C).connect(E.frequency),b.start();const M=i.createDelay(.05);M.delayTime.value=.014;const _=i.createOscillator(),T=i.createGain();_.frequency.value=.5,T.gain.value=.004,_.connect(T).connect(M.delayTime),_.start();const O=i.createStereoPanner();O.pan.value=.6,A.connect(E),E.connect(c.pad),E.connect(M).connect(O).connect(c.pad),E.connect(u);const G=i.createBiquadFilter();G.type="lowpass",G.frequency.value=420,G.Q.value=6;const D=i.createOscillator(),z=i.createGain();if(D.frequency.value=dc/60/4,z.gain.value=260,D.connect(z).connect(G.frequency),D.start(),n.drive>0){const Y=i.createWaveShaper(),R=new Float32Array(1024);for(let w=0;w<1024;w++){const W=w/512-1;R[w]=Math.tanh(W*(1+n.drive*6))}Y.curve=R,G.connect(Y).connect(c.bass)}else G.connect(c.bass);const k=i.createBiquadFilter();k.type="lowpass",k.frequency.value=3600,k.Q.value=3,k.connect(l.lead),k.connect(x),k.connect(u);const X=(Y,R,w,W,Q,it)=>{Y.gain.setValueAtTime(1e-4,R),Y.gain.exponentialRampToValueAtTime(W,R+w),Y.gain.setValueAtTime(W,R+Math.max(w,it-Q)),Y.gain.exponentialRampToValueAtTime(1e-4,R+it)},V=(Y,R)=>{const w=i.createStereoPanner();return w.pan.value=R,Y.connect(w),w},j=(Y,R,w,W,Q,it,st="bandpass",Ft=0)=>{const St=i.createBufferSource();St.buffer=t;const Lt=i.createBiquadFilter();Lt.type=st,Lt.frequency.value=w,Lt.Q.value=W;const re=i.createGain();X(re,Y,.001,Q,R*.8,R),St.connect(Lt).connect(re);const bt=Ft?V(re,Ft):re;for(const Yt of it)bt.connect(Yt);St.start(Y,Math.random()*1.5),St.stop(Y+R+.02)},nt=(Y,R=1)=>{const w=i.createOscillator(),W=i.createGain();w.frequency.setValueAtTime(160,Y),w.frequency.exponentialRampToValueAtTime(44,Y+.11),X(W,Y,.002,1*R,.2,.3),w.connect(W).connect(l.drums),w.start(Y),w.stop(Y+.32),j(Y,.012,3500,.7,.35*R,[l.drums],"highpass");for(const Q of Object.values(c))Q.gain.cancelScheduledValues(Y),Q.gain.setValueAtTime(.35,Y),Q.gain.linearRampToValueAtTime(1,Y+.2)},rt=(Y,R=1)=>{j(Y,.17,1900,.8,.5*R,[l.drums,p]);for(const[w,W,Q]of[[200,160,.3],[340,260,.14]]){const it=i.createOscillator(),st=i.createGain();it.type="triangle",it.frequency.setValueAtTime(w,Y),it.frequency.exponentialRampToValueAtTime(W,Y+.08),X(st,Y,.001,Q*R,.06,.11),it.connect(st).connect(l.drums),it.start(Y),it.stop(Y+.13)}v.gain.setValueAtTime(.9*R,Y),v.gain.setValueAtTime(1e-4,Y+.21)};let Ct=1;const kt=(Y,R,w)=>{Ct=-Ct,j(Y,w?.14:.035,9e3,.6,(w?.12:.08)*R,[l.drums],"highpass",Ct*.35)},H=(Y,R,w)=>{for(const it of[-n.reeseDetune,n.reeseDetune]){const st=i.createOscillator(),Ft=i.createGain();st.type="sawtooth",st.frequency.value=us(R),st.detune.value=it,X(Ft,Y,.02,.2,.1,w),V(st.connect(Ft),it>0?.25:-.25).connect(G),st.start(Y),st.stop(Y+w+.05)}const W=i.createOscillator(),Q=i.createGain();W.frequency.value=us(R-12),X(Q,Y,.02,.42,.1,w),W.connect(Q).connect(c.bass),W.start(Y),W.stop(Y+w+.05)},K=(Y,R,w,W=1)=>{for(const Q of R.slice(1))for(const[it,st]of[[-9,-.6],[0,0],[8,.6]]){const Ft=i.createOscillator(),St=i.createGain();Ft.type=n.pad,Ft.frequency.value=us(Q),Ft.detune.value=it,X(St,Y,.8,.026*W,1.4,w),V(Ft.connect(St),st).connect(A),Ft.start(Y),Ft.stop(Y+w+.1)}},ht=(Y,R,w=1)=>{const W=i.createOscillator(),Q=i.createGain();W.type="square",W.frequency.value=us(R+n.arpOct);const it=i.createBiquadFilter();it.type="lowpass",it.frequency.value=3200,X(Q,Y,.003,.05*w,.08,Pi*1.6),W.connect(it).connect(Q),Q.connect(l.arp),Q.connect(x),W.start(Y),W.stop(Y+Pi*2)},ot=(Y,R,w,W)=>{const Q=w*Pi;for(const it of[-6,6]){const st=i.createOscillator(),Ft=i.createGain();st.type=n.lead,W?(st.frequency.setValueAtTime(us(W),Y),st.frequency.exponentialRampToValueAtTime(us(R),Y+.05)):st.frequency.value=us(R),st.detune.value=it;const St=i.createOscillator(),Lt=i.createGain();St.frequency.value=5.5,Lt.gain.value=9,St.connect(Lt).connect(st.detune),St.start(Y+.12),St.stop(Y+Q+.05),X(Ft,Y,.01,.07,Math.min(.12,Q*.4),Q),V(st.connect(Ft),it>0?.2:-.2).connect(k),st.start(Y),st.stop(Y+Q+.05)}};let At=0,Dt=0,Ut=null,Wt=0,dt=.7,_t=!1,F=0;const qt=Ch.reduce((Y,[,R])=>Y+R,0),yt=()=>{if(Wt<.5)return"ambient";let Y=F%qt;for(const[R,w]of Ch){if(Y<w)return R;Y-=w}return"drop"},Ot=()=>{const Y=i.currentTime,R=(W,Q)=>{W.gain.cancelScheduledValues(Y),W.gain.setTargetAtTime(Q,Y,.8)},w=Wt;R(l.drums,.1+.85*w),R(l.bass,.3+.6*w),R(l.pad,.75-.2*w),R(l.arp,.35+.3*w),R(l.lead,.55+.35*w),a.gain.cancelScheduledValues(Y),a.gain.setTargetAtTime(_t?0:dt*.8,Y,.3)},It=Y=>Y%2?Pi*.12:0,ee=()=>{for(;Dt<i.currentTime+.15;){const Y=At%32,R=Math.floor(At/16),w=Math.floor(At/32)%n.chords.length,W=n.chords[w];Y%16===0&&At>0&&Wt>.5&&F++;const Q=yt(),it=Dt+It(Y),st=F%8;if(Q==="drop"||Q==="build"){const St=st%4===3&&Y>=16?ol.FILL:st>=6?ol.B:ol.A,Lt=Q==="build"&&st<4;St.k[Y]==="x"&&!(Lt&&Y%8)&&nt(it),St.s[Y]==="x"&&!Lt&&rt(it,Q==="build"?.7:1),St.g[Y]==="x"&&rt(it,.3),(!Lt||Y%2===0)&&kt(it,Y%2?.6:1,Y%8===6)}else Q==="break"?(Y%4===2&&kt(it,.6,!1),(Y===0||Y===16)&&nt(it,.4)):Y%4===2&&kt(it,.45,!1);if(Y===0&&(K(it,W,Pi*32,Q==="break"?1.3:1),H(it,W[0],Pi*(Q==="drop"?14:30))),Q==="drop"&&Y===16&&H(it,W[0]+(w%2?3:7),Pi*14),Y%n.arpRate===0&&Q!=="break"&&ht(it,W[1+Y/n.arpRate%4]+(Y>=16?12:0),Q==="ambient"?.7:1),Q==="drop"||(Q==="break"||Q==="ambient")&&Math.floor(R/4)%2===1){const St=n.hook.findIndex(([Lt])=>Lt===Y);if(St>=0){const[,Lt,re]=n.hook[St];ot(it,Lt+(Q==="ambient"?-12:0),re,St>0?n.hook[St-1][1]:0)}}Dt+=Pi,At++}};return{start(){Ut||(Dt=i.currentTime+.1,Ut=setInterval(ee,25),Ot())},stop(){clearInterval(Ut),Ut=null,a.gain.setTargetAtTime(0,i.currentTime,.2)},setIntensity(Y){Y>.5&&Wt<=.5&&(F=0),Wt=Y,Ot()},setVolume(Y){dt=Y,Ot()},setMuted(Y){_t=Y,Ot()},get muted(){return _t},get volume(){return dt},rms(){const Y=new Float32Array(o.fftSize);return o.getFloatTimeDomainData(Y),Math.sqrt(Y.reduce((R,w)=>R+w*w,0)/Y.length)},get intensity(){return Wt},get section(){return yt()},tap(Y){a.connect(Y)}}}const Rh=i=>440*Math.pow(2,(i-69)/12),Ir=60/76,Ph={tak:{chords:[[50,62,66,69,73],[47,59,62,66,71],[43,59,62,67,71],[45,57,61,64,69]],scale:[62,64,66,69,71,74,76,78,81],bell:"sine",padCut:1400,nature:"birds"},vinter:{chords:[[45,57,64,67,71],[41,57,60,64,67],[48,60,64,67,74],[43,55,62,67,69]],scale:[64,67,69,71,74,76,79,81,83],bell:"triangle",padCut:1100,nature:"wind"},vulkan:{chords:[[40,52,59,62,67],[41,53,60,64,67],[38,50,57,62,65],[40,52,55,59,64]],scale:[52,55,57,59,62,64,67,69,71],bell:"sine",padCut:800,nature:"rumble"}},Dh=8;function p1(i,t,e){const n=Ph[e]||Ph.tak,s=i.createDynamicsCompressor();s.threshold.value=-20,s.ratio.value=2.5,s.attack.value=.03,s.release.value=.4;const r=i.createGain();r.gain.value=0,s.connect(r).connect(i.destination);const a=i.createAnalyser();a.fftSize=1024,r.connect(a);const o={};for(const H of["pad","bell","nature","pulse"]){const K=i.createGain();K.gain.value=0,K.connect(s),o[H]=K}const l=i.createBuffer(2,Math.floor(i.sampleRate*3.5),i.sampleRate);for(let H=0;H<2;H++){const K=l.getChannelData(H);for(let ht=0;ht<K.length;ht++)K[ht]=(Math.random()*2-1)*Math.pow(1-ht/K.length,3)}const c=i.createConvolver();c.buffer=l;const h=i.createGain();h.gain.value=.55,c.connect(h).connect(s);const u=i.createDelay(2);u.delayTime.value=Ir*.75;const f=i.createGain();f.gain.value=.35;const p=i.createBiquadFilter();p.type="lowpass",p.frequency.value=2200,u.connect(p).connect(f).connect(u),p.connect(o.bell);const v=i.createBiquadFilter();v.type="lowpass",v.frequency.value=n.padCut,v.Q.value=.7;const x=i.createOscillator(),m=i.createGain();x.frequency.value=.05,m.gain.value=n.padCut*.3,x.connect(m).connect(v.frequency),x.start(),v.connect(o.pad),v.connect(c);const d=(H,K,ht,ot,At,Dt)=>{H.gain.setValueAtTime(1e-4,K),H.gain.exponentialRampToValueAtTime(ot,K+ht),H.gain.setValueAtTime(ot,K+Math.max(ht,Dt-At)),H.gain.exponentialRampToValueAtTime(1e-4,K+Dt)},y=(H,K)=>{const ht=i.createStereoPanner();return ht.pan.value=K,H.connect(ht),ht},S=(H,K,ht)=>{for(const ot of K)for(const[At,Dt]of[[-7,-.5],[7,.5]]){const Ut=i.createOscillator(),Wt=i.createGain();Ut.type=ot===K[0]?"sine":"triangle",Ut.frequency.value=Rh(ot),Ut.detune.value=At,d(Wt,H,2.5,ot===K[0]?.05:.022,3,ht),y(Ut.connect(Wt),Dt).connect(v),Ut.start(H),Ut.stop(H+ht+.1)}},g=(H,K,ht=1)=>{const ot=(Math.random()-.5)*.8;for(const[At,Dt,Ut]of[[1,.09,1.6],[4.2,.02,.25],[2,.025,.7]]){const Wt=i.createOscillator(),dt=i.createGain();Wt.type=At===1?n.bell:"sine",Wt.frequency.value=Rh(K)*At,dt.gain.setValueAtTime(1e-4,H),dt.gain.exponentialRampToValueAtTime(Dt*ht,H+.005),dt.gain.exponentialRampToValueAtTime(1e-4,H+Ut);const _t=y(Wt.connect(dt),ot);_t.connect(o.bell),_t.connect(u),_t.connect(c),Wt.start(H),Wt.stop(H+Ut+.05)}},A=(H,K,ht,ot,At,Dt,Ut,Wt=.002)=>{const dt=i.createBufferSource();dt.buffer=t;const _t=i.createBiquadFilter();_t.type=ht,_t.frequency.value=ot,_t.Q.value=At;const F=i.createGain();return d(F,H,Wt,Dt,K*.7,K),dt.connect(_t).connect(F).connect(Ut),dt.start(H,Math.random()*1.5),dt.stop(H+K+.05),_t},E=H=>{const K=i.createOscillator(),ht=i.createGain();K.frequency.setValueAtTime(90,H),K.frequency.exponentialRampToValueAtTime(50,H+.18),d(ht,H,.01,.35,.2,.3),K.connect(ht).connect(o.pulse),K.start(H),K.stop(H+.32)},b=(H,K)=>A(H,.09,"highpass",7e3,.5,.05*K,o.pulse,.02),C=H=>{const K=2+Math.floor(Math.random()*3),ht=2400+Math.random()*1600,ot=(Math.random()-.5)*1.4;for(let At=0;At<K;At++){const Dt=H+At*(.09+Math.random()*.06),Ut=i.createOscillator(),Wt=i.createGain();Ut.frequency.setValueAtTime(ht*(1+Math.random()*.2),Dt),Ut.frequency.exponentialRampToValueAtTime(ht*(.75+Math.random()*.6),Dt+.07),d(Wt,Dt,.008,.03,.04,.08),y(Ut.connect(Wt),ot).connect(o.nature),Ut.start(Dt),Ut.stop(Dt+.1)}};let M=null;const _=()=>{const H=i.createBufferSource();H.buffer=t,H.loop=!0;const K=i.createBiquadFilter(),ht=i.createGain(),ot=i.createOscillator(),At=i.createGain(),Dt=i.createGain();n.nature==="wind"?(K.type="bandpass",K.frequency.value=500,K.Q.value=1.2,ht.gain.value=.05,ot.frequency.value=.08,At.gain.value=.04,Dt.gain.value=350):n.nature==="rumble"?(K.type="lowpass",K.frequency.value=120,K.Q.value=.8,ht.gain.value=.18,ot.frequency.value=.05,At.gain.value=.08,Dt.gain.value=40):(K.type="highpass",K.frequency.value=3e3,K.Q.value=.5,ht.gain.value=.012,ot.frequency.value=.11,At.gain.value=.01,Dt.gain.value=800),ot.connect(At).connect(ht.gain),ot.connect(Dt).connect(K.frequency),H.connect(K).connect(ht).connect(o.nature),H.start(),ot.start(),M={s:H,lfo:ot}};let T=null,O=0,G=.7,D=!1,z=0,k=0,X=0,V=0,j=0,nt=0,rt=4;const Ct=()=>{const H=i.currentTime,K=O,ht=(ot,At)=>{ot.gain.cancelScheduledValues(H),ot.gain.setTargetAtTime(At,H,1.2)};ht(o.pad,.9),ht(o.bell,.7+.2*K),ht(o.nature,.9-.4*K),ht(o.pulse,.55*K),v.frequency.cancelScheduledValues(H),v.frequency.setTargetAtTime(n.padCut*(1+.9*K),H,2),r.gain.cancelScheduledValues(H),r.gain.setTargetAtTime(D?0:G*1.6,H,.4)},kt=()=>{const H=i.currentTime+.3;for(;z<H;)S(z,n.chords[k],Dh+3),k=(k+1)%n.chords.length,z+=Dh;for(;X<H;)Math.random()<.8&&(rt=Math.max(0,Math.min(n.scale.length-1,rt+[-2,-1,-1,1,1,2,0][Math.floor(Math.random()*7)])),g(X,n.scale[rt],.8+Math.random()*.3),Math.random()<.15&&g(X+Ir/4,n.scale[Math.max(0,rt-2)],.6)),X+=Ir*(O>.5?Math.random()<.5?.5:1:[1,1.5,2,3][Math.floor(Math.random()*4)]);for(;V<H;)O>.5&&(j%2===0&&E(V),b(V,1),b(V+Ir/2,.6)),j++,V+=Ir;for(;nt<H;){if(n.nature==="birds"&&Math.random()<.55&&C(nt),n.nature==="wind"&&Math.random()<.3&&A(nt,2.5,"bandpass",1400+Math.random()*900,6,.03,o.nature,.9),n.nature==="rumble")for(let K=0;K<3;K++)Math.random()<.5&&A(nt+Math.random(),.02,"highpass",2500,.5,.12,o.nature);nt+=1.5+Math.random()*2.5}};return{start(){if(T)return;z=X=V=nt=i.currentTime+.1,M||_(),T=setInterval(kt,50),Ct()},stop(){clearInterval(T),T=null,r.gain.setTargetAtTime(0,i.currentTime,.3)},setIntensity(H){O=H,Ct()},setVolume(H){G=H,Ct()},setMuted(H){D=H,Ct()},get muted(){return D},get volume(){return G},rms(){const H=new Float32Array(a.fftSize);return a.getFloatTimeDomainData(H),Math.sqrt(H.reduce((K,ht)=>K+ht*ht,0)/H.length)},get intensity(){return O},get section(){return O>.5?"wave":"calm"},tap(H){r.connect(H)}}}const Qt={startEmbers:225,emberLife:25,expiredRefund:.5,magnet:4.6,reach:2.7,placeAhead:2.3,minTowerGap:2.5,plinthBonus:1.25,lighthouseReach:5.4,stoneCost:30,chargeTime:.4,upgradeTime:[15,20,25,30],keeperSpeed:6.4,carrySlow:.82,wadeSlow:.7,stunTime:1.6,stunLoss:.3,chillMax:100,stressInvuln:1,stressPush:7,airStress:10,faintTime:6,faintLoss:.25,wakeChill:.6,regen:3,regenReach:9,bagChance:.05,bagHeal:25,bagLife:20,hpGrowth:.2,waveBonus:20,waveBonusPer:5,interest:.1,firstPrep:30,prepTime:15,earlyScale:[.55,.65,.8]},rr={ring:{name:"Røykring-kanon",cost:22,range:7.5,dmg:7,cooldown:.65,air:!0,tip:"rask · bakke + luft"},chips:{name:"Chips-mørtel",cost:38,range:10,dmg:18,cooldown:2.2,air:!1,splash:2.5,tip:"splash · kun bakke"},speaker:{name:"Reggae-høyttaler",cost:30,range:5.5,dmg:3,cooldown:1.6,air:!0,slowTime:2.2,tip:"bremser i ring"},bubble:{name:"Bobleblåser",cost:20,range:7,dmg:2.5,cooldown:.38,air:!0,ground:!1,trap:1.4,tip:"fanger flyvere · kun luft"},kite:{name:"Papirdrage",cost:40,range:13,dmg:5,cooldown:2.8,air:!0,ground:!1,zone:3.4,hover:2.4,tip:"sone, lang · kun luft"},pizza:{name:"Pizza-katapult",cost:55,range:14,dmg:24,cooldown:3,air:!1,splash:2.9,tip:"lang splash · kun bakke"},lamp:{name:"Lavalampe",cost:50,range:4.6,dmg:1.1,cooldown:.3,air:!0,slowTime:.5,tip:"aura, bremser alt"}},vo={clerk:{name:"Forbuds-byråkrat",hp:22,speed:2.6,embers:4,anim:12,puff:"#9fffb0",stress:10},tank:{name:"Stortings-tanken",hp:95,speed:1.25,embers:10,anim:5,puff:"#9fffb0",resist:{ring:.5,chips:1.5},stress:15},gull:{name:"Moralpanikk-måke",hp:16,speed:3.4,embers:5,anim:12,puff:"#ffffff",flying:!0,swoop:!0},swarm:{name:"Komité-sverm",hp:7,speed:2.2,embers:1,anim:9,puff:"#ffe08a",stress:8},auditor:{name:"Revisoren",hp:70,speed:1.6,embers:8,anim:7,puff:"#9fffb0",shield:.25,resist:{lamp:1.5},info:"skjold forfra (×0,25), ikke mot aura",stress:14},complainer:{name:"Naboklageren",hp:12,speed:4.3,embers:3,anim:18,puff:"#ffb0f0",resist:{chips:.5,ring:1.5},info:"rask, mørtel bommer",stress:10},lobbyist:{name:"Lobbyisten",hp:55,speed:1.9,embers:6,anim:9,puff:"#ffe08a",splits:3,resist:{speaker:.5,pizza:1.5},noMood:!0,info:"deler seg i tre, immun mot stemning",stress:12},lobbyMini:{name:"Mini-lobbyist",hp:14,speed:2.7,embers:1,anim:14,puff:"#ffe08a",resist:{speaker:.5,pizza:1.5},noMood:!0,stress:8},drone:{name:"Overvåkings-drone",hp:9,speed:4.6,embers:1,anim:30,puff:"#c8d8ff",flying:!0,alt:3.6,resist:{bubble:1.5,lamp:1.5,kite:.5},info:"rask sverm i lufta"},balloon:{name:"Ballong-byråkraten",hp:150,speed:1.05,embers:14,anim:2,puff:"#ffffff",flying:!0,alt:5.6,resist:{bubble:.5,kite:1.5},info:"seig, høyt oppe"},heli:{name:"Mini-helikopteret",hp:48,speed:2.5,embers:7,anim:40,puff:"#ffffff",flying:!0,alt:4.6,blind:{every:6,dur:3,range:9},resist:{ring:.5,kite:1.5},info:"søkelys blender et tårn i 3 s"}},m1=[[{type:"clerk",n:8,gap:1.4,path:0}],[{type:"clerk",n:6,gap:1.3,path:"both"}],[{type:"swarm",n:7,gap:.35,path:1},{type:"clerk",n:6,gap:1.2,path:0,at:4},{type:"swarm",n:7,gap:.35,path:0,at:12}],[{type:"tank",n:3,gap:4,path:0},{type:"clerk",n:6,gap:1,path:1,at:2}],[{type:"gull",n:5,gap:2.5},{type:"clerk",n:7,gap:1,path:"both",at:3}],[{type:"tank",n:3,gap:3.5,path:"both"},{type:"swarm",n:8,gap:.3,path:"both",at:8}],[{type:"gull",n:8,gap:1.6},{type:"clerk",n:9,gap:.8,path:"both",at:2}],[{type:"tank",n:4,gap:3,path:"both"},{type:"swarm",n:10,gap:.3,path:"both",at:6},{type:"gull",n:4,gap:2,at:10}],[{type:"gull",n:10,gap:1.2},{type:"tank",n:4,gap:3,path:"both",at:3},{type:"clerk",n:10,gap:.7,path:"both",at:8}],[{type:"clerk",n:10,gap:.6,path:"both"},{type:"tank",n:5,gap:2.5,path:"both",at:6},{type:"swarm",n:12,gap:.25,path:"both",at:14},{type:"gull",n:12,gap:1,at:18}]],tn=new URLSearchParams(location.search),Yf=tn.has("demo");if(tn.has("unlockall"))try{localStorage.setItem("glod-unlocked",String(br.length))}catch{}let Rn=Number(tn.get("world"));if(!Number.isInteger(Rn))try{Rn=Number(localStorage.getItem("glod-world"))||0}catch{Rn=0}Rn=Math.max(0,Math.min(Qr()-1,Rn));try{localStorage.setItem("glod-world",String(Rn))}catch{}const sn=br[Rn],Xc=b_(sn,m1);function g1(){return 1}const v1=Math.max(1,Math.min(20,Number(tn.get("speed"))||1)),Bi=matchMedia("(pointer: coarse)").matches||tn.has("mobile"),pc={high:{shadow:2048,dprCap:2},low:{shadow:1024,dprCap:2}};let pi=Bi?"low":"high";try{const i=localStorage.getItem("glod-quality");(i==="high"||i==="low")&&(pi=i)}catch{}(tn.get("q")==="high"||tn.get("q")==="low")&&(pi=tn.get("q"));const na={mobile:Bi,shadow:pc[pi].shadow,dprCap:pc[pi].dprCap},x1={high:["rock","tree","tower","figure"],low:["rock","tree","tower","figure"]};function $f(i){const t=tn.has("ol")?tn.get("ol").split(","):x1[i];Af(Object.fromEntries(["rock","tree","tower","figure"].map(e=>[e,t.includes(e)])))}$f(pi);const jf=document.getElementById("game"),wn=new vx({canvas:jf,antialias:!Bi,powerPreference:"high-performance",preserveDrawingBuffer:tn.has("shot")});let Ki=Math.min(devicePixelRatio||1,na.dprCap);wn.setPixelRatio(Ki);wn.shadowMap.enabled=!0;wn.shadowMap.type=Oh;wn.toneMapping=_c;let _s="dag";try{_s=localStorage.getItem("glod-tid")||"dag"}catch{}tn.get("tid")&&(_s=tn.get("tid"));const Hn=_s==="skumring"&&sn.skyDusk?sn.skyDusk:sn.sky;wn.toneMappingExposure=Hn.exposure;wn.info.autoReset=!1;const Te=new xx,Zf=new Pt(Hn.fog);Te.background=Zf;Te.fog=new Uc(Zf,...sn.fog??[55,115]);const Ye=new kn(38,1,.5,200),_1=new Qx(Hn.hemiSky,Hn.hemiGround,Hn.hemi);Te.add(_1);const hn=new n_(Hn.sun,Hn.sunI);hn.castShadow=!0;hn.shadow.mapSize.set(na.shadow,na.shadow);Object.assign(hn.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:90});hn.shadow.bias=-8e-4;hn.shadow.normalBias=.03;Te.add(hn,hn.target);l_(Te);const jt=G_(Te,na,sn);jt.grass.setLevel(pi);const M1=s1(Te,jt,na,sn,_s,Ye),Dn=r1(jt);window.__nav=Dn;const Ne=Xf(Te,Bi?450:800),As=Xf(Te,Bi?120:220,{blending:Qi,size:1.6,opacity:.45,fadeTo:Hn.fog}),oa=i1(wn,Te,Ye,Hn.grade);oa.setLevel(pi);const ve=u1(jf);function la(){const i=innerWidth,t=innerHeight;wn.setSize(i,t,!1),Ye.aspect=i/t,Ye.updateProjectionMatrix(),oa.setSize(i,t),o_(Bi?2:2.2,wn.getPixelRatio(),i,t)}function Kf(i){pi=i;try{localStorage.setItem("glod-quality",i)}catch{}const t=pc[i];hn.shadow.mapSize.set(t.shadow,t.shadow),hn.shadow.map&&(hn.shadow.map.dispose(),hn.shadow.map=null),Ki=Math.min(devicePixelRatio||1,t.dprCap),wn.setPixelRatio(Ki),oa.setLevel(i),jt.grass.setLevel(i),$f(i),la(),document.getElementById("btn-quality").textContent=i==="high"?"Høy":"Lav"}addEventListener("resize",la);la();const J={phase:"title",wave:0,timer:0,embers:Qt.startEmbers,lights:vr,spawnQueue:[],leaks:{},seen:{},time:0,sel:0,paused:!1},ll=Qt.upgradeTime.length+1,ji=["ring","chips","speaker","bubble","kite","pizza","lamp"];let Ui=sn.camYaw??0;const Lh=new i_,Ln=[],Vn=[],ri=[],gs=[],ar=[],Wr=[],Je=aa(P_(),"figure"),I={x:jt.lighthouse.pos.x+1,z:jt.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,walk:0,charge:0,chargeTower:null,face:Math.PI,goal:null,chill:Qt.chillMax,inv:0,faint:0,faints:0};Je.position.set(I.x,jt.heightAt(I.x,I.z),I.z);Te.add(Je);const Jf=Hn.lantern??2.6,qc=new Jr("#ffcf70",Jf,6,1.8);qc.position.set(.8,.45,-.3);Je.add(qc);const de=i=>document.getElementById(i),an={chill:de("hud-chill"),lights:de("hud-lights"),embers:de("hud-embers"),wave:de("hud-wave"),timer:de("hud-timer")},Fi=de("hint"),_i=de("build-panel"),Yc=de("btn-next"),$c=de("fps");tn.has("debug")||$c.classList.add("hidden");let ki={};function Wn(i,t,e,n){ki[t]!==e&&(ki[t]=e,i.querySelector("b").textContent=e,n&&(i.classList.remove(n),i.offsetWidth,i.classList.add(n)))}const y1=4;let Qf=0;function Ih(i){if(Fi.textContent===i)return;Fi.textContent=i,Qf=0,Fi.classList.remove("faded");const t=_i.classList.contains("hidden")?null:_i.getBoundingClientRect();Fi.style.bottom=t&&t.height?`${Math.round(innerHeight-t.top+6)}px`:""}function S1(i){(Qf+=i)>y1&&Fi.classList.add("faded")}function td(i){J.phase="prep",J.timer=i,Yc.classList.remove("hidden"),b1()}function b1(){const i=J.wave+1,t=i===1?1:i<=3?2:2+Math.floor(Math.random()*3);J.spawnPoints=Dn.coastPoints(t,24),J.spawnPoints.length||(J.spawnPoints=Dn.coastPoints(t,8,{near:12,minFrac:.5})),J.spawnPoints.length||(J.spawnPoints=Dn.roadEnds().slice(0,t)),A1()}function ed(){J.wave+=1,J.phase="wave",Yc.classList.add("hidden"),J.spawnQueue=[];for(const i of Xc[J.wave-1]){const t=J.wave<=Qt.earlyScale.length?J.wave-1:-1,e=J.spawnPoints.length,n=vo[i.type].flying?sn.balance.air??1:1,s=Math.max(1,Math.round(i.n*(sn.balance.count||1)*n*(t>=0?Qt.earlyScale[t]:1)));if(i.path==="both"){const r=Math.ceil(s/Math.min(2,e));for(let a=0;a<e;a++)for(let o=0;o<r;o++)J.spawnQueue.push({t:(i.at??0)+o*i.gap+a*.3,type:i.type,path:a})}else{const r=i.path??0;for(let a=0;a<s;a++)J.spawnQueue.push({t:(i.at??0)+a*i.gap,type:i.type,path:(r+a%2)%e})}}J.spawnQueue.sort((i,t)=>i.t-t.t),J.waveClock=0,qe.wave(),Qe==null||Qe.setIntensity(1),Wn(an.wave,"wave",J.wave,"bump")}function jc(i,t){var l,c;const e=vo[i],n=aa(D_(i),"figure"),s=e.hp*(1+Qt.hpGrowth*(J.wave-1))*sn.balance.hp*(((c=(l=sn.balance.types)==null?void 0:l[i])==null?void 0:c.hp)??1)*g1(),r={type:i,def:e,mesh:n,hp:s,maxHp:s,slow:0,phase:Math.random()*6,alive:!0,speedMul:sn.balance.speed*(e.flying?sn.balance.airSpeed??1:1),lane:(Math.random()-.5)*1.4};r.var=.95+Math.random()*.1,r.speedMul*=.95+Math.random()*.1,n.scale.setScalar(r.var),r.blinkT=Math.random()*4;const a=J.spawnPoints[t%J.spawnPoints.length]||[0,50],o=jt.lighthouse.pos;if(e.flying){const h=Math.atan2(a[1]-o.z,a[0]-o.x)+(Math.random()-.5)*.5,u=o.x+Math.cos(h)*66,f=o.z+Math.sin(h)*66;r.x=u,r.z=f,r.y=e.alt||4,r.dist0=Math.hypot(o.x-u,o.z-f),r.hitCd=0}else r.x=a[0]+(Math.random()-.5)*1.5,r.z=a[1]+(Math.random()-.5)*1.5,r.y=jt.heightAt(r.x,r.z),r.remain=Dn.at(r.x,r.z);return n.position.set(r.x,r.y,r.z),Te.add(n),Ln.push(r),!J.seen[i]&&i!=="lobbyMini"&&(J.seen[i]=!0,w1(r)),r}const mc={ring:"💨",chips:"🥔",speaker:"🔊",bubble:"🫧",kite:"🪁",pizza:"🍕",lamp:"🌋"};function nd(i){const t=Object.entries(i.resist||{}),e=t.filter(([,s])=>s<1).map(([s])=>mc[s]).join(""),n=t.filter(([,s])=>s>1).map(([s])=>mc[s]).join("");return{tough:e+(i.shield?"📒":""),weak:n}}const Ii=[],xo=document.createElement("div");xo.id="tags";document.body.appendChild(xo);function w1(i){const{tough:t,weak:e}=nd(i.def),n=document.createElement("div");n.className="enemy-tag",n.innerHTML=`<b>${i.def.flying?"🪶":"🐾"} ${i.def.name}</b>${t?`<span>🛡️${t}</span>`:""}${e?`<span>💥${e}</span>`:""}`,xo.appendChild(n),Ii.push({m:i,el:n,t:0}),(J.wave>1||i.def.flying)&&on(`Ny fiende: ${i.def.name}${t?` · tåler ${t}`:""}${e?` · svak mot ${e}`:""}`)}function E1(i){var n;const t=Ii.length?de("hud").getBoundingClientRect().bottom:0;for(let s=Ii.length-1;s>=0;s--){const r=Ii[s];r.age=(r.age||0)+i,Ue.set(r.m.x,r.m.y+(((n=r.m.mesh.userData.hpBar)==null?void 0:n.position.y)??2.2)+.5,r.m.z).project(Ye);const a=Ue.z<1&&Math.abs(Ue.x)<1&&Math.abs(Ue.y)<1;r.el.style.display=a?"flex":"none",a&&(r.t+=i);const o=r.el.offsetWidth,l=r.el.offsetHeight;r.x=Math.min(Math.max((Ue.x*.5+.5)*innerWidth,o/2+6),innerWidth-o/2-6),r.y=Math.max((-Ue.y*.5+.5)*innerHeight,t+l+6),r.w=o,r.h=l,r.on=a,r.el.style.opacity=String(Math.min(1,(6-r.t)/.6)),(r.t>6||r.age>90||!r.m.alive)&&(r.el.remove(),Ii.splice(s,1))}const e=[];for(const s of Ii.filter(r=>r.on).sort((r,a)=>r.y-a.y)){let r=!0;for(let a=0;r&&a<8;a++){r=!1;for(const o of e)Math.abs(s.x-o.x)<(s.w+o.w)/2+4&&s.y>o.y-o.h-3&&s.y-s.h<o.y+3&&(s.y=o.y+s.h+4,r=!0)}e.push(s)}for(const s of Ii)s.on&&(s.el.style.left=`${s.x}px`,s.el.style.top=`${s.y}px`)}function T1(i){return i.def.flying?1-Math.hypot(jt.lighthouse.pos.x-i.x,jt.lighthouse.pos.z-i.z)/i.dist0:1-Math.min(1,(i.remain??Dn.maxDist)/Dn.maxDist)}const Ja=[],Ms=document.createElement("div");Ms.id="warn";document.body.appendChild(Ms);function A1(){for(const e of Ja)Te.remove(e);Ja.length=0,Ms.innerHTML="";for(const[e,n]of J.spawnPoints){const s=new oe(id,new De({color:"#ff7a3a",transparent:!0,opacity:.8,depthWrite:!1}));s.position.set(e,Math.max(jt.heightAt(e,n),.08)+.1,n);const r=new oe(C1,new De({color:"#ff8a3a",transparent:!0,opacity:.35,blending:di,depthWrite:!1,fog:!1}));r.position.y=4,s.add(r),Te.add(s),Ja.push(s);const a=document.createElement("div");a.className="warn-arrow",a.innerHTML='<span class="arr">➤</span><span class="kind"></span>',Ms.appendChild(a)}const i=J.spawnPoints.length,t=J.spawnPoints.map(()=>({air:!1,ground:!1}));for(const e of Xc[J.wave]||[]){const n=e.path==="both"?t.map((s,r)=>r):[(e.path??0)%i,((e.path??0)+1)%i];for(const s of n)t[s][vo[e.type].flying?"air":"ground"]=!0}t.forEach((e,n)=>{var r;const s=(r=Ms.children[n])==null?void 0:r.querySelector(".kind");s&&(s.textContent=(e.air?"🪶":"")+(e.ground?"🐾":""))})}const id=new ns(1.6,2.2,32);id.rotateX(-Math.PI/2);const C1=new He(.5,1.4,8,12,1,!0);function R1(){var a;const i=J.phase==="prep"||J.phase==="wave"&&J.waveClock<8,t=Ms.children,e=i&&!_i.classList.contains("hidden")?_i.getBoundingClientRect():null,n=e&&Fi.textContent&&!Fi.classList.contains("faded"),s=i?de("hud").getBoundingClientRect().bottom:0;Ms.style.visibility=xo.style.visibility=J.paused?"hidden":"";const r=e?n?Math.min(e.top,Fi.getBoundingClientRect().top):e.top:0;(a=J.spawnPoints)==null||a.forEach(([o,l],c)=>{const h=Ja[c],u=t[c];if(!h||!u)return;h.visible=i;const f=.5+.5*Math.sin(J.time*6);h.scale.setScalar(1+f*.35),h.material.opacity=.35+.5*f,Ue.set(o,h.position.y,l).project(Ye);const p=Math.abs(Ue.x)>.92||Math.abs(Ue.y)>.88||Ue.z>1;if(u.style.display=i?"block":"none",u.classList.toggle("onscreen",!p),i&&!p&&(u.style.left=`${(Ue.x*.5+.5)*innerWidth}px`,u.style.top=`${Math.max((-Ue.y*.5+.5)*innerHeight-30,s+30)}px`,u.style.transform="translate(-50%, -50%)",u.firstChild.style.transform=""),i&&p){let v=Ue.x,x=Ue.y;Ue.z>1&&(v=-v,x=-x);const m=Math.atan2(-x,v),d=Math.max(Math.abs(v),Math.abs(x))||1,y=xe.clamp(v/d,-1,1),S=xe.clamp(x/d,-1,1),g=(y*.46+.5)*innerWidth;let A=(-S*.44+.5)*innerHeight;e&&g>e.left-24&&g<e.right+24&&A>r-24&&(A=r-24),A=Math.max(A,s+30),u.style.left=`${g}px`,u.style.top=`${A}px`,u.style.transform=`translate(-50%, -50%) scale(${1+f*.25})`,u.firstChild.style.transform=`rotate(${m}rad)`}})}function vs(i,t,e){var n;if(i.alive){if(e&&(t*=((n=i.def.resist)==null?void 0:n[e.type])??1,i.def.shield&&e.type!=="lamp")){const s=e.x-i.x,r=e.z-i.z,a=Math.hypot(s,r)||1,o=Math.hypot(i.hx||0,i.hz||0)||1;(s*(i.hx||0)+r*(i.hz||0))/(a*o)>.35&&(t*=i.def.shield,Math.random()<.3&&Ne.emit(i.x,i.y+1,i.z,{n:2,color:"#d8c890",speed:1.5,up:1,life:.3}))}i.hp-=t,i.hitT=.18,i.mesh.userData.hpBar.visible=!0,i.hp<=0&&P1(i)}}function P1(i){i.alive=!1,i.chillT=0,L_(i),Wr.push(i),Ne.emit(i.x,i.y+1.2,i.z,{n:12,color:i.def.puff,speed:1.6,up:2.2,life:.9,gravity:1.5}),qe.chill(),Zc(i.x,i.y+.5,i.z,i.def.embers,i.def.flying),!i.def.flying&&Math.random()<Qt.bagChance&&sd(i.x,i.z);for(let t=0;t<(i.def.splits||0);t++){const e=jc("lobbyMini",0);e.x=i.x+(t-1)*.6,e.z=i.z+(t%2?.5:-.5),e.y=jt.heightAt(e.x,e.z),e.mesh.position.set(e.x,e.y,e.z)}}function D1(i){var t;for(let e=Wr.length-1;e>=0;e--){const n=Wr[e];n.chillT+=i;const s=n.chillT,r=n.mesh.userData.body;if(n.def.flying)n.y+=i*2.5,n.z+=i*3,(t=n.mesh.userData.wings)==null||t.forEach((o,l)=>o.rotation.z=Math.sin(s*6)*.4*(l?-1:1));else if(s<1.4){const o=Math.min(1,s/.4);r.position.y=-.25*o*(n.type==="tank"?1.3:1),r.rotation.x=.25*o,r.rotation.z=Math.sin(s*3)*.05}else{r.rotation.x=0,r.position.y=Math.abs(Math.sin(s*7))*.06;const[o,l]=Dn.dir(n.x,n.z),c=n.x-o*n.def.speed*.45*i,h=n.z-l*n.def.speed*.45*i;jt.isWalkable(c,h)&&(n.x=c,n.z=h),n.y=jt.heightAt(n.x,n.z),(o||l)&&(n.mesh.rotation.y=Math.atan2(o,l))}Math.random()<i*1.5&&Ne.emit(n.x,n.y+1.8,n.z,{n:1,color:"#c8ffb0",speed:.3,up:1,life:.8,gravity:-.4}),s>2.6&&!n.popped&&(n.popped=!0,As.emit(n.x,n.y+.8,n.z,{n:8,color:"#eef6e8",speed:1.4,up:1.2,life:.7,gravity:-.5}));const a=Math.max(0,Math.min(1,(3.2-s)/.6));n.mesh.scale.setScalar(a*(n.var||1)*(s>2.6?1+Math.sin((s-2.6)*10)*.08:1)),n.mesh.position.set(n.x,n.y,n.z),s>3.2&&(Te.remove(n.mesh),Wr.splice(e,1))}}function Zc(i,t,e,n,s=!1,r=1){const a=Math.min(n,n>=6?3:n>=3?2:1);let o=n;for(let l=0;l<a;l++){const c=l===a-1?o:Math.ceil(n/a);o-=c;const h=U_(),u=Math.random()*Math.PI*2,f=(1.2+Math.random()*1.8)*r,p={mesh:h,x:i,y:t,z:e,vx:Math.cos(u)*f,vz:Math.sin(u)*f,vy:5+Math.random()*2,life:Qt.emberLife,value:c,settled:!1,phase:Math.random()*6};h.scale.setScalar(.8+Math.min(c,6)*.08),Te.add(h),gs.push(p)}}function ia(i,t,e,n,s=()=>!0){let r=null,a=n;for(const o of i){if(!s(o))continue;const l=Math.hypot(o.x-t,o.z-e);l<a&&(a=l,r=o)}return r}function Kc(){const i=ia(jt.plinths,I.x,I.z,Qt.reach,l=>!l.tower);if(i)return{x:i.x,z:i.z,y:i.y,plinth:i,ok:!0};const t=-Math.sin(I.face),e=-Math.cos(I.face),n=I.x+t*Qt.placeAhead,s=I.z+e*Qt.placeAhead,r=jt.heightAt(n,s),a=jt.lighthouse.pos;let o="";return r<.35?o="i vannet":jt.extras.blocks(n,s)?o="i lavaen":jt.pathDist(n,s)<1.9?o="på stien":jt.slopeAt(n,s)>.6?o="for bratt":Math.hypot(n-a.x,s-a.z)<5.5?o="for nær fyret":Vn.some(l=>Math.hypot(l.x-n,l.z-s)<Qt.minTowerGap)?o="for nær et annet tårn":jt.plinths.some(l=>Math.hypot(l.x-n,l.z-s)<1.9)?o="oppå en sokkel (gå helt bort til den)":jt.colliders.some(l=>!l.tower&&(l.x-n)**2+(l.z-s)**2<(l.r+.7)**2)&&(o="i veien for et tre eller en stein"),{x:n,z:s,y:r,plinth:null,ok:!o,why:o}}function io(i){const t=Kc();if(!t.ok){qe.deny(),on(`Ikke lov å bygge her: ${t.why}`);return}const e=rr[i];if(J.embers<e.cost){qe.deny(),on(`Trenger ${e.cost} ✦ glør`),Wn(an.embers,"embersBad",Math.random(),"bad");return}J.embers-=e.cost;const n=aa(I_(i),"tower");if(n.position.set(t.x,t.y,t.z),!t.plinth){const r=new oe(L1,I1);r.position.y=.04,r.receiveShadow=!0,n.add(r)}Te.add(n);const s={type:i,def:e,mesh:n,x:t.x,z:t.z,y:t.y,level:1,cd:.3,plinth:t.plinth,onPlinth:!!t.plinth};t.plinth&&(t.plinth.tower=s),Vn.push(s),jt.colliders.push({x:t.x,z:t.z,r:1,tower:s}),Ne.emit(t.x,t.y+.3,t.z,{n:24,color:"#ffe3a0",speed:4,up:3,life:.8,gravity:5}),qe.build(),J.buildMode=!1,t.plinth&&on(`${e.name} på gammel sokkel: +25 % rekkevidde`)}const L1=new He(.95,1.05,.12,10),I1=new We({color:"#8a8478"}),Ni=new _e;{const i=new oe(new pr(1,24),new De({transparent:!0,opacity:.35,depthWrite:!1}));i.rotation.x=-Math.PI/2;const t=new ns(.965,1,64);t.rotateX(-Math.PI/2);const e=new oe(t,new De({transparent:!0,opacity:.6,depthWrite:!1})),n=new oe(new He(.55,.7,1.6,10),new De({transparent:!0,opacity:.25,depthWrite:!1}));n.position.y=.8,Ni.add(i,e,n),Ni.userData={disc:i,ring:e,pillar:n},Ni.visible=!1,Ni.renderOrder=20,Te.add(Ni)}function U1(i,t,e){if(Ni.visible=i,!i)return;const n=t.ok,s=n?t.plinth?"#9fffb0":"#7be06a":"#ff5a4a",r=rr[e].range*(t.plinth?Qt.plinthBonus:1);Ni.position.set(t.x,t.y+.06,t.z);const a=Ni.userData;for(const o of[a.disc,a.ring,a.pillar])o.material.color.set(s);a.ring.scale.setScalar(r),a.ring.visible=n,a.pillar.visible=!t.plinth}const Di=(i,t)=>{const e=i.level-1;return t==="range"?i.def.range*(1+.12*e)*(i.onPlinth?Qt.plinthBonus:1):t==="dmg"?i.def.dmg*[1,1.7,2.6,3.9,5.85][e]:t==="rate"?i.def.cooldown/(1+.15*e):i.def[t]},Qa=[];function N1(i){const t=Ff();Wc(t,1),Je.userData.roll.getWorldPosition(t.position),Te.add(t),Qa.push({mesh:t,from:t.position.clone(),to:new B(i.x,i.y+1.3*i.mesh.scale.y,i.z),age:0})}function z1(i){for(let t=Qa.length-1;t>=0;t--){const e=Qa[t];e.age+=i;const n=Math.min(1,e.age/.45);e.mesh.position.lerpVectors(e.from,e.to,n),e.mesh.position.y+=Math.sin(n*Math.PI)*1.2,e.mesh.rotation.z+=i*14,n>=1&&(Te.remove(e.mesh),Qa.splice(t,1),As.emit(e.to.x,e.to.y+.3,e.to.z,{n:6,color:"#e8e2dc",speed:1.2,up:1.4,life:1.2,gravity:-.3}))}}function F1(i){I.rollP=-1,z1(i);for(const t of Vn){if(t.cd-=i,t.upg){const c=I.stun<=0&&Math.hypot(I.x-t.x,I.z-t.z)<Qt.reach+.3;if(c)t.upg.t+=i,I.rollP=Math.min(1,t.upg.t/t.upg.dur),I.rollTower=t;else if(t.upg.t>0){const h=Je.userData.roll.getWorldPosition(cr);Ne.emit(h.x,h.y,h.z,{n:14,color:"#4f8f3a",speed:1.4,up:.8,life:.8,gravity:6}),Ne.emit(h.x,h.y,h.z,{n:5,color:"#fffdf5",speed:1,up:.6,life:.7,gravity:5}),t.upg.t=0,_o("😩"),on(`Rullingen ble avbrutt! Start på nytt ved ${t.def.name}`)}ta(t,Math.min(1,t.upg.t/t.upg.dur)),c&&Math.random()<i*8&&Ne.emit(I.x,Je.position.y+2.2,I.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),t.upg.t>=t.upg.dur&&(N1(t),I.rollP=-1,t.upg=null,t.level+=1,Of(t,t.level),ta(t,0),Ne.emit(t.x,t.y+1.2,t.z,{n:30,color:"#8ff0ff",speed:4,up:4,life:.9,gravity:5}),qe.upgrade(),on(`${t.def.name} er nå nivå ${t.level}`))}if(t.armBack>0&&(t.armBack-=i,t.armBack<=0&&(t.mesh.userData.arm.rotation.x=-.35)),t.type==="lamp"&&t.mesh.userData.blobs.forEach((c,h)=>c.position.y=.75+Math.sin(J.time*.8+h*2.1)*.35),t.blind>0){t.blind-=i,Math.random()<i*8&&Ne.emit(t.x,t.y+2,t.z,{n:1,color:"#fff6c8",speed:.6,up:.8,life:.5,gravity:-.4});continue}const e=Di(t,"range");let n=null,s=-1;for(const c of Ln){if(!c.alive||(c.def.flying?!t.def.air:t.def.ground===!1)||Math.hypot(c.x-t.x,c.z-t.z)>e)continue;const h=T1(c);h>s&&(s=h,n=c)}const r=t.mesh.userData.head;if(t.type==="speaker"){const c=Math.max(0,Math.sin(J.time*7.3));r.rotation.z=Math.sin(J.time*3.65)*.05,t.mesh.userData.woofers.forEach(h=>h.scale.set(1+c*.15,1,1+c*.15)),n&&(r.rotation.y+=ro(Math.atan2(-(n.x-t.x),-(n.z-t.z)),r.rotation.y)*Math.min(1,i*3))}else if(n){const c=Math.atan2(-(n.x-t.x),-(n.z-t.z));r.rotation.y+=ro(c,r.rotation.y)*Math.min(1,i*10)}if(!n||t.cd>0)continue;t.cd=Di(t,"rate");const a=t.x,o=t.y+1.4*t.mesh.scale.y,l=t.z;if(t.type==="ring"){const c=N_();c.position.set(a,o-.3,l),Te.add(c),ri.push({kind:"bolt",src:t,mesh:c,target:n,dmg:Di(t,"dmg"),tx:n.x,ty:n.y,tz:n.z,age:0}),qe.puff()}else if(t.type==="chips"){const c=kf();c.position.set(a,t.y+1,l),Te.add(c);const[h,u]=n.def.flying?[0,0]:Dn.dir(n.x,n.z),f=n.x+h*n.def.speed*.6,p=n.z+u*n.def.speed*.6;ri.push({kind:"shell",src:t,mesh:c,sx:a,sy:t.y+1,sz:l,ex:f,ez:p,ey:jt.heightAt(f,p),t:0,dur:.95,dmg:Di(t,"dmg"),splash:t.def.splash*(1+.1*(t.level-1))}),Ne.emit(a,t.y+1.3,l,{n:6,color:"#d8d0c0",speed:1,up:2,life:.5,gravity:-1}),qe.mortar()}else if(t.type==="speaker"){for(const h of Ln)!h.alive||Math.hypot(h.x-t.x,h.z-t.z)>e||(h.def.noMood||(h.slow=t.def.slowTime),vs(h,Di(t,"dmg"),t));const c=Bf();c.position.set(t.x,t.y+.3,t.z),Te.add(c),ar.push({mesh:c,t:0,r:e}),Ne.emit(t.x,t.y+1.8,t.z,{n:6,color:["#7be06a","#f2c94c","#ff7a5a"][Math.floor(Math.random()*3)],speed:2.2,up:1.6,life:.9,gravity:.5}),qe.skank()}else if(t.type==="bubble"){const c=Vf();c.position.set(a,o+.2,l),Te.add(c),ri.push({kind:"bubble",src:t,mesh:c,target:n,dmg:Di(t,"dmg"),trap:t.def.trap,tx:n.x,ty:n.y,tz:n.z}),qe.pickup()}else if(t.type==="kite"){if(ri.some(h=>h.kind==="kite"&&h.tower===t)){t.cd=.2;continue}const c=aa(Gf(),"tower");c.position.set(a,o,l),Te.add(c),ri.push({kind:"kite",mesh:c,tower:t,sx:a,sz:l,tx:n.x,tz:n.z,phase:"out",t:0,tick:0,dmg:Di(t,"dmg"),zone:t.def.zone*(1+.1*(t.level-1)),hover:t.def.hover}),qe.puff()}else if(t.type==="pizza"){const c=F_();c.position.set(a,t.y+1.2,l),Te.add(c);const[h,u]=Dn.dir(n.x,n.z),f=n.x+h*n.def.speed*1.1,p=n.z+u*n.def.speed*1.1;ri.push({kind:"shell",src:t,pizza:!0,mesh:c,sx:a,sy:t.y+1.2,sz:l,ex:f,ez:p,ey:jt.heightAt(f,p),t:0,dur:1.3,arc:7,dmg:Di(t,"dmg"),splash:t.def.splash*(1+.1*(t.level-1))}),t.mesh.userData.arm.rotation.x=.9,t.armBack=.5,qe.mortar()}else if(t.type==="lamp"){for(const c of Ln)!c.alive||Math.hypot(c.x-t.x,c.z-t.z)>e||(c.slow=Math.max(c.slow,t.def.slowTime),vs(c,Di(t,"dmg"),t));Math.random()<.3&&Ne.emit(t.x,t.y+1.6,t.z,{n:2,color:"#ff9a3a",speed:.8,up:1.2,life:.8,gravity:-.3})}}}function O1(i){var t;for(let e=ri.length-1;e>=0;e--){const n=ri[e];let s=!1;if(n.kind==="bolt"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y+(n.target.def.flying?0:.5),n.tz=n.target.z);const r=n.mesh.position,a=n.tx-r.x,o=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(a,o,l),h=18*i;n.age+=i,n.mesh.lookAt(n.tx,n.ty,n.tz),n.mesh.scale.setScalar(.7+n.age*2.2),c<=h+.3?(s=!0,n.target.alive&&(vs(n.target,n.dmg,n.src),As.emit(n.tx,n.ty+.3,n.tz,{n:3,color:"#f4f0ea",speed:1,up:.8,life:.8,gravity:-.6}),qe.hit())):r.set(r.x+a/c*h,r.y+o/c*h,r.z+l/c*h)}else if(n.kind==="shell"){n.t+=i/n.dur;const r=Math.min(1,n.t);if(n.mesh.position.set(n.sx+(n.ex-n.sx)*r,n.sy+(n.ey-n.sy)*r+Math.sin(Math.PI*r)*(n.arc||5),n.sz+(n.ez-n.sz)*r),n.mesh.rotation.set(r*9,r*5,0),n.t>=1){s=!0;for(const a of Ln){if(!a.alive||a.def.flying)continue;const o=Math.hypot(a.x-n.ex,a.z-n.ez);o<n.splash&&vs(a,n.dmg*(o<n.splash*.4?1:.6),n.src)}Ne.emit(n.ex,n.ey+.3,n.ez,{n:26,color:n.pizza?"#ff7040":"#ffd060",speed:5,up:5,life:.7,gravity:12}),As.emit(n.ex,n.ey+.3,n.ez,{n:4,color:"#f6e7c0",speed:1.5,up:1,life:.8,gravity:-.3}),qe.crunch(),Yn=Math.max(Yn,.12)}}else if(n.kind==="bubble"){n.target.alive&&(n.tx=n.target.x,n.ty=n.target.y,n.tz=n.target.z);const r=n.mesh.position,a=n.tx-r.x,o=n.ty-r.y,l=n.tz-r.z,c=Math.hypot(a,o,l),h=13*i;n.mesh.scale.setScalar(1+Math.sin(J.time*12)*.06),c<=h+.3?(s=!0,n.target.alive&&(vs(n.target,n.dmg,n.src),n.target.trap=Math.max(n.target.trap||0,n.trap*Math.min(1,((t=n.target.def.resist)==null?void 0:t.bubble)??1))),Ne.emit(n.tx,n.ty,n.tz,{n:6,color:"#dff6ff",speed:2,up:1,life:.35})):r.set(r.x+a/c*h,r.y+o/c*h,r.z+l/c*h)}else if(n.kind==="kite"){n.t+=i;const r=n.mesh.position;if(n.mesh.userData.tailSegs.forEach((a,o)=>{a.rotation.x=Math.sin(J.time*5-o*.9)*.35,a.rotation.z=Math.sin(J.time*3.7-o*.7)*.25}),Vn.includes(n.tower)||(n.phase="back"),n.phase==="out"){const a=n.tx-r.x,o=n.tz-r.z,l=Math.hypot(a,o),c=9*i;r.y+=(4.2-r.y)*Math.min(1,i*2),l<c?(n.phase="hover",n.t=0):(r.x+=a/l*c,r.z+=o/l*c)}else if(n.phase==="hover"){if(r.x=n.tx+Math.sin(J.time*1.7)*.6,r.z=n.tz+Math.cos(J.time*1.3)*.4,r.y=4.2+Math.sin(J.time*2.3)*.3,n.tick-=i,n.tick<=0){n.tick=.25;for(const a of Ln)a.alive&&a.def.flying&&Math.hypot(a.x-r.x,a.z-r.z)<n.zone&&(vs(a,n.dmg*.4,n.tower),a.slow=Math.max(a.slow,.4));Ne.emit(r.x,r.y-.3,r.z,{n:2,color:"#ffd0b0",speed:1.5,up:-.5,life:.5,gravity:0})}n.t>n.hover&&(n.phase="back")}else{const a=n.sx-r.x,o=n.sz-r.z,l=Math.hypot(a,o),c=11*i;l<c?s=!0:(r.x+=a/l*c,r.z+=o/l*c)}n.mesh.rotation.set(Math.sin(J.time*3)*.2,J.time*.5,Math.cos(J.time*2.5)*.25)}s&&(Te.remove(n.mesh),ri.splice(e,1))}for(let e=ar.length-1;e>=0;e--){const n=ar[e];n.t+=i/(n.dur||.6),n.mesh.scale.setScalar(.5+n.t*n.r),n.mesh.material.opacity=.7*(1-n.t),n.t>=1&&(Te.remove(n.mesh),n.mesh.material.dispose(),ar.splice(e,1))}}function k1(i){var t,e;for(const n of Ln){if(!n.alive)continue;n.phase+=i*n.def.anim;const s=n.slow>0?.5:1;n.slow-=i;let r=n.def.speed*s*(n.speedMul||1);n.trap>0?(n.trap-=i,r*=.15,n.bubbleFx||(n.bubbleFx=Vf(),n.bubbleFx.scale.setScalar(3.2),n.mesh.add(n.bubbleFx)),n.bubbleFx.visible=!0):n.bubbleFx&&(n.bubbleFx.visible=!1);const a=n.mesh.userData.body;if(n.def.flying){const l=jt.lighthouse.pos;let c=l.x-n.x,h=l.z-n.z;const u=Math.hypot(I.x-n.x,I.z-n.z);let f=n.trap>0?1.1:n.def.alt||4.2;if(n.def.swoop&&u<6&&I.stun<=0&&n.hitCd<=0&&!(n.trap>0)){const y=Math.hypot(c,h);c=c/y*.5+(I.x-n.x)/u*.9,h=h/y*.5+(I.z-n.z)/u*.9,f=1.5}n.hitCd-=i;const p=Math.hypot(c,h)||1,v=Math.cos(J.time*1.3+n.lane*4)*(n.type==="balloon"?.4:1.2);n.x+=(c/p+-h/p*v*.35)*r*i,n.z+=(h/p+c/p*v*.35)*r*i,n.mesh.rotation.z=-v*(n.type==="balloon"?.05:.25);const x=Math.max(jt.heightAt(n.x,n.z),0);n.y+=(x+f-n.y)*Math.min(1,i*2.5);const m=n.mesh.userData.blob;m&&(m.position.y=(x-n.y)/n.var+.05,m.material.opacity=1,m.scale.setScalar(1)),n.mesh.rotation.y=Math.atan2(-c,-h);const d=n.mesh.userData;if((t=d.wings)==null||t.forEach((y,S)=>y.rotation.z=Math.sin(n.phase)*.45*(S?-1:1)),(e=d.rotors)==null||e.forEach(y=>y.rotation.y+=i*40),d.rotor&&(d.rotor.rotation.y+=i*30,d.tail.rotation.x+=i*30),a.position.y=Math.sin(n.phase*.5)*(n.type==="balloon"?.3:.15),n.def.blind&&(n.blindCd=(n.blindCd??n.def.blind.every*.5)-i,d.beam&&(d.beam.visible=n.blindCd>n.def.blind.every-.8),n.blindCd<=0)){n.blindCd=n.def.blind.every;const y=ia(Vn,n.x,n.z,n.def.blind.range);y&&(y.blind=n.def.blind.dur,on(`${n.def.name} blendet ${y.def.name}!`)),Math.hypot(I.x-n.x,I.z-n.z)<5&&gc(Qt.airStress,n.x,n.z,!0)}n.def.swoop&&u<1.3&&Math.abs(n.y-Je.position.y-1)<1.4&&I.stun<=0&&n.hitCd<=0&&V1(n),Math.hypot(l.x-n.x,l.z-n.z)<3.4&&Uh(n)}else{const[l,c,h]=Dn.dir(n.x,n.z);n.remain=h;const u=jt.lighthouse.pos,f=Math.hypot(u.x-n.x,u.z-n.z);if(f<4.3||h<.6){Uh(n);continue}let p=l,v=c;!p&&!v&&(p=(u.x-n.x)/f,v=(u.z-n.z)/f),n.hx=(n.hx||0)+(p-(n.hx||0))*Math.min(1,i*6),n.hz=(n.hz||0)+(v-(n.hz||0))*Math.min(1,i*6);const x=Math.hypot(n.hx,n.hz)||1,m=n.lane*Math.min(1,f/10);if(n.x+=n.hx/x*r*i+-n.hz/x*m*i*.5,n.z+=n.hz/x*r*i+n.hx/x*m*i*.5,n.y=jt.heightAt(n.x,n.z),n.mesh.rotation.y=Math.atan2(-n.hx,-n.hz),I.inv<=0&&I.faint<=0&&Math.abs(I.x-n.x)<1.2&&Math.abs(I.z-n.z)<1.2&&Math.hypot(I.x-n.x,I.z-n.z)<1.1&&gc(n.def.stress??10,n.x,n.z),n.type==="clerk")a.position.y=Math.abs(Math.sin(n.phase))*.12,a.rotation.z=Math.sin(n.phase)*.06,n.mesh.userData.arm.position.y=.9+Math.max(0,Math.sin(n.phase*.5))*.25;else if(n.type==="tank"){const d=Math.abs(Math.sin(n.phase));a.position.y=d*.05,a.rotation.z=Math.sin(n.phase)*.07;const y=Math.pow(1-d,6);a.scale.set(1+y*.06,1-y*.08,1+y*.06)}else n.type==="swarm"?(a.position.y=Math.abs(Math.sin(n.phase))*.14,a.rotation.y=Math.sin(n.phase*.5)*.3):n.type==="complainer"?(a.position.y=Math.abs(Math.sin(n.phase))*.16,n.mesh.userData.arm.rotation.z=Math.sin(n.phase*.5)*.4):n.type==="lobbyist"||n.type==="lobbyMini"?(a.position.y=Math.abs(Math.sin(n.phase))*.05,a.rotation.z=Math.sin(n.phase*.5)*.17):n.type==="auditor"?(a.position.y=Math.abs(Math.sin(n.phase))*.03,a.rotation.z=0):(a.position.y=Math.abs(Math.sin(n.phase))*.08,a.rotation.z=Math.sin(n.phase)*.05)}if(n.hitT>0){n.hitT-=i;const l=Math.max(0,n.hitT)/.18;a.scale.set(1+l*.16,1-l*.16,1+l*.16),a.position.z=l*.15,n.hitT<=0&&(a.scale.set(1,1,1),a.position.z=0)}n.blinkT-=i,n.blinkT<-.12&&(n.blinkT=2+Math.random()*3.5);for(const l of n.mesh.userData.eyes)l.scale.y=n.blinkT<0?.12:1;n.mesh.position.set(n.x,n.y,n.z),n.slow>0&&Math.random()<i*6&&Ne.emit(n.x,n.y+.8,n.z,{n:1,color:"#b8e6ff",speed:.4,up:.6,life:.6,gravity:-.5});const o=n.mesh.userData.hpBar;if(o.visible){o.quaternion.copy(Ye.quaternion),o.quaternion.premultiply(n.mesh.quaternion.clone().invert());const l=Math.max(0,n.hp/n.maxHp),c=n.mesh.userData.hpFg;c.scale.x=.96*l,c.position.x=-.48*(1-l),c.material.color.setHSL(.33*(1-l),.7,.55)}}for(let n=Ln.length-1;n>=0;n--)Ln[n].alive||Ln.splice(n,1)}function Uh(i){J.leaks[i.type]=(J.leaks[i.type]||0)+1,i.alive=!1,Te.remove(i.mesh),J.lights=Math.max(0,J.lights-1),jt.lighthouse.setLights(J.lights),Wn(an.lights,"lights",J.lights,"bad");const t=jt.lighthouse.flamePos();As.emit(t.x,t.y,t.z,{n:10,color:"#b8b4b0",speed:.8,up:1.6,life:1.8,gravity:-.4}),Ne.emit(t.x,t.y,t.z,{n:14,color:"#8a8580",speed:1.6,up:.6,life:1.6,gravity:4}),on(`${i.def.name} slukket litt glød!`),qe.lose(),Yn=.3,J.lights<=0&&ad(!1)}const or=[],ci=document.createElement("div");ci.id="chillbar";ci.innerHTML="<i></i>";document.body.appendChild(ci);let Nh=0;function _o(i){const t=document.createElement("div");t.className="pop-emoji",t.textContent=i,Ue.set(I.x,Je.position.y+2.6,I.z).project(Ye),t.style.left=`${(Ue.x*.5+.5)*innerWidth}px`,t.style.top=`${(-Ue.y*.5+.5)*innerHeight}px`,document.body.appendChild(t),setTimeout(()=>t.remove(),900)}function gc(i,t,e,n=!1){if(!(I.faint>0||I.inv>0)){if(I.chill=Math.max(0,I.chill-i),I.inv=Qt.stressInvuln,I.flinch=.55,!n){const s=I.x-t,r=I.z-e,a=Math.hypot(s,r)||1;I.vx+=s/a*Qt.stressPush,I.vz+=r/a*Qt.stressPush,I.goal=null}Ne.emit(I.x,Je.position.y+1.4,I.z,{n:8,color:"#ff6a5a",speed:2,up:1.5,life:.4}),_o("😓"),ci.classList.remove("hit"),ci.offsetWidth,ci.classList.add("hit"),Wn(an.chill,"chillBad",Math.random(),"bad"),I.chill<=0&&B1()}}function B1(){I.faint=Qt.faintTime,I.stun=Qt.faintTime,I.faints++,I.goal=null,I.vx=I.vz=0;const i=Math.floor(J.embers*Qt.faintLoss);i>0&&(J.embers-=i,Zc(I.x,Je.position.y+1,I.z,i,!1,1.6)),I.carrying&&(I.carrying=!1),_o("😵"),on(`😵 Vokteren besvimte av stress! Våkner ved fyret om ${Qt.faintTime} s`),qe.stun()}function sd(i,t){const e=kf();e.scale.setScalar(1.8),e.position.set(i,jt.heightAt(i,t)+.5,t),Te.add(e),or.push({mesh:e,x:i,z:t,life:Qt.bagLife})}function G1(i){I.inv-=i;const t=jt.lighthouse.pos;I.faint>0?(I.faint-=i,I.faint<=0&&(I.x=t.x+1,I.z=t.z+7.5,I.vx=I.vz=0,I.stun=0,I.chill=Qt.chillMax*Qt.wakeChill,I.inv=Qt.stressInvuln*2,Ne.emit(I.x,jt.heightAt(I.x,I.z)+1,I.z,{n:14,color:"#9fffb0",speed:2,up:2,life:.7}))):Math.hypot(t.x-I.x,t.z-I.z)<Qt.regenReach&&(I.chill=Math.min(Qt.chillMax,I.chill+Qt.regen*i));for(let s=or.length-1;s>=0;s--){const r=or[s];r.life-=i,r.mesh.rotation.y+=i*1.5,r.mesh.position.y=jt.heightAt(r.x,r.z)+.5+Math.sin(J.time*3+s)*.12,r.mesh.visible=r.life>4||Math.sin(r.life*12)>0,I.faint<=0&&Math.hypot(r.x-I.x,r.z-I.z)<1.4&&(I.chill=Math.min(Qt.chillMax,I.chill+Qt.bagHeal),on(`🥔 Chips! +${Qt.bagHeal} chill`),_o("😌"),qe.pickup(),r.life=0),r.life<=0&&(Te.remove(r.mesh),or.splice(s,1))}const e=Math.round(I.chill);Wn(an.chill,"chill",e),an.chill.classList.toggle("low",e<30),e!==Nh&&(Nh=e,ci.firstChild.style.width=`${100*I.chill/Qt.chillMax}%`,ci.classList.toggle("low",e<30));const n=(e<Qt.chillMax||I.faint>0)&&J.phase!=="title";ci.style.display=n?"block":"none",n&&(Ue.set(I.x,Je.position.y+2.3,I.z).project(Ye),ci.style.left=`${(Ue.x*.5+.5)*innerWidth}px`,ci.style.top=`${(-Ue.y*.5+.5)*innerHeight}px`)}function V1(i){if(gc(Qt.airStress,i.x,i.z,!0),I.faint>0)return;I.stun=Qt.stunTime,i.hitCd=4;const t=Math.floor(J.embers*Qt.stunLoss);t>0&&(J.embers-=t,Zc(I.x,Je.position.y+1,I.z,t,!1,1.6)),I.carrying&&(I.carrying=!1,on("Rullepapiret blåste bort!")),Ne.emit(I.x,Je.position.y+1.5,I.z,{n:16,color:"#ffffff",speed:3,up:2,life:.5}),qe.stun(),Yn=.2}function H1(i){for(let t=gs.length-1;t>=0;t--){const e=gs[t];e.life-=i,e.phase+=i;const n=Math.max(jt.heightAt(e.x,e.z),.1)+.35;e.settled||(e.vy-=16*i,e.x+=e.vx*i,e.z+=e.vz*i,e.y+=e.vy*i,e.y<=n&&(e.y=n,Math.abs(e.vy)>2.5?(e.vy=-e.vy*.4,e.vx*=.6,e.vz*=.6):e.settled=!0));const s=Math.hypot(I.x-e.x,I.z-e.z);if(I.stun<=0&&s<Qt.magnet){const l=(1-s/Qt.magnet)*14+3;e.x+=(I.x-e.x)/s*l*i,e.z+=(I.z-e.z)/s*l*i,e.settled=!0,e.y=n}const r=e.settled?Math.sin(e.phase*3)*.12:0;e.mesh.position.set(e.x,e.y+r,e.z),e.mesh.rotation.y+=i*3;const a=e.life<5,o=(.8+Math.min(e.value,6)*.08)*(a?.55+.45*(e.life/5):1);if(e.mesh.scale.setScalar(o),e.mesh.visible=!a||Math.sin(e.life*(e.life<1.5?30:16))>-.4,Math.random()<i*2.5&&Ne.emit(e.x,e.y+.2,e.z,{n:1,color:"#ffb347",speed:.3,up:1.2,life:.6,gravity:-.5}),I.stun<=0&&s<.9)J.embers+=e.value,Wn(an.embers,"embers",J.embers,"bump"),Ne.emit(e.x,e.y+.3,e.z,{n:8,color:"#ffe08a",speed:2,up:2.5,life:.4}),qe.pickup(),Te.remove(e.mesh),gs.splice(t,1);else if(e.life<=0){const l=Math.max(1,Math.round(e.value*Qt.expiredRefund));J.embers+=l,Ne.emit(e.x,e.y,e.z,{n:6,color:"#555048",speed:.6,up:1,life:.8,gravity:-.6}),Te.remove(e.mesh),gs.splice(t,1)}}}let so=0,rd="";function on(i){so=2,rd=i,Fi.textContent=""}function zh(i){var O,G;const t=Je.userData;(J.phase==="prep"||J.phase==="wave")&&G1(i),I.stun-=i,t.stars.visible=I.stun>0,t.stars.rotation.y+=i*6;let e=0,n=0;if(I.stun<=0&&(J.phase==="prep"||J.phase==="wave")){if(ve.move.x||ve.move.z){I.goal=null;const D=Math.cos(Ui),z=Math.sin(Ui);e=ve.move.x*D+ve.move.z*z,n=-ve.move.x*z+ve.move.z*D}else if(I.goal){const D=I.goal,z=D.x-I.x,k=D.z-I.z;if(D.field===void 0){D.field=null;const j=Math.ceil(Math.hypot(z,k)/.5);for(let nt=1;nt<j;nt++)if(!jt.isWalkable(I.x+z*nt/j,I.z+k*nt/j)){D.field=Dn.walkField(D.x,D.z);break}}const X=D.field?Math.min(D.field.at(I.x,I.z),Math.hypot(z,k)+50):Math.hypot(z,k);D.t+=i;const V=X<.35||D.spot&&Math.hypot(D.spot.x-I.x,D.spot.z-I.z)<D.reach;if(X<D.best-.3&&(D.best=X,D.lastGain=D.t),V||D.t>12||D.t-D.lastGain>1.5)I.goal=null;else{const j=Math.min(1,X/.8),nt=D.field&&Math.hypot(z,k)>1.5?D.field.dir(I.x,I.z):null,rt=nt&&(nt[0]||nt[1])?nt[0]:z/Math.hypot(z,k),Ct=nt&&(nt[0]||nt[1])?nt[1]:k/Math.hypot(z,k);e=rt,n=Ct;for(const H of jt.colliders){if(D.spot&&H.x===D.spot.x&&H.z===D.spot.z)continue;const K=H.x-I.x,ht=H.z-I.z,ot=K*rt+ht*Ct;if(ot<=0||ot>H.r+2.2||ot>X)continue;const At=-K*Ct+ht*rt;if(Math.abs(At)>H.r+.6)continue;const Dt=(1-Math.abs(At)/(H.r+.6))*1.6*(At>=0?1:-1);e-=-Ct*Dt,n-=rt*Dt}const kt=Math.hypot(e,n)||1;e=e/kt*j,n=n/kt*j}}}const r=jt.heightAt(I.x,I.z)<.05,a=Qt.keeperSpeed*(I.carrying?Qt.carrySlow:1)*(r?Qt.wadeSlow:1),o=e*a,l=n*a,c=(O=jt.isIce)!=null&&O.call(jt,I.x,I.z)?1.6:12;I.vx+=(o-I.vx)*Math.min(1,i*c),I.vz+=(l-I.vz)*Math.min(1,i*c);let h=I.x+I.vx*i,u=I.z+I.vz*i;jt.isWalkable(h,u)||(jt.isWalkable(h,I.z)?u=I.z:jt.isWalkable(I.x,u)?h=I.x:(h=I.x,u=I.z));for(const D of jt.colliders){const z=h-D.x,k=u-D.z,X=Math.hypot(z,k),V=D.r+.4;X<V&&X>1e-4&&(h=D.x+z/X*V,u=D.z+k/X*V)}I.x=h,I.z=u;const f=Math.hypot(I.vx,I.vz);if(f>.3){const D=Math.atan2(-I.vx,-I.vz);I.face+=ro(D,I.face)*Math.min(1,i*12),I.walk+=i*f*2.2}if(Je.rotation.y=I.face,Je.position.set(I.x,Math.max(jt.heightAt(I.x,I.z),-.25),I.z),r&&f>1&&(I.splash=(I.splash||0)-i,I.splash<=0)){I.splash=.22,Ne.emit(I.x,.15,I.z,{n:4,color:"#e8fbff",speed:1.6,up:2.2,life:.35,gravity:12});const D=Bf();D.position.set(I.x,.1,I.z),D.material.color.set("#f4fdff"),Te.add(D),ar.push({mesh:D,t:0,r:1.6,dur:.9})}const p=Math.min(1,f/3),v=Math.sin(I.walk)*p;t.legs[0].position.z=v*.2,t.legs[1].position.z=-v*.2,t.legs[0].position.y=.2+Math.max(0,v)*.12,t.legs[1].position.y=.2+Math.max(0,-v)*.12;const x=f>.6;x!==!!I.wasMoving&&(I.sq=x?1:-1,I.wasMoving=x),I.sq=(I.sq||0)*Math.exp(-i*7);const m=f<.3?Math.sin(J.time*2.2)*.025:0;t.body.scale.set(1-m*.5-I.sq*.07,1+m+I.sq*.12,1-m*.5-I.sq*.07);const d=Math.sign(Math.sin(I.walk));f>2&&!r&&d!==I.lastStep&&Ne.emit(I.x,Je.position.y+.1,I.z,{n:2,color:"#d9c9a4",speed:.7,up:.6,life:.45,gravity:1}),I.lastStep=d,I.flinch=Math.max(0,(I.flinch||0)-i),I.cheer=Math.max(0,(I.cheer||0)-i);const y=f>.5&&((G=jt.isIce)==null?void 0:G.call(jt,I.x,I.z)),S=Math.abs(v)*.09+(I.cheer>0?Math.abs(Math.sin(I.cheer*9))*.35:0);t.body.position.y=S,t.body.rotation.x=I.faint>0?0:-.35*Math.min(1,I.flinch*2.5),t.body.rotation.z=I.faint>0?1.45:I.stun>0?.5:v*.05+(y?Math.sin(J.time*7)*.12:0)+(I.flinch>0?Math.sin(I.flinch*40)*.08:0);let g=v*.6,A=-v*.45,E=0,b=0;y&&(E=-1.25+Math.sin(J.time*9)*.25,b=1.25+Math.cos(J.time*8)*.25,g=A=0),I.cheer>0&&(g=A=-2.9,E=-.3,b=.3),I.flinch>0&&(g=-2.5,E=.5);const C=I.rollP>=0&&f<.3&&I.faint<=0;if(C){const D=Math.sin(J.time*7)*.12;g=1.35+D,E=.55,A=1.35-D,b=-.55;const z=I.rollTower,k=Math.atan2(-(z.x-I.x),-(z.z-I.z));if(I.face+=ro(k,I.face)*Math.min(1,i*8),Je.rotation.y=I.face,Wc(t.roll,I.rollP),t.roll.rotation.x=Math.sin(J.time*7)*.5,Math.random()<i*4&&I.rollP<.5){const X=t.roll.getWorldPosition(cr);Ne.emit(X.x,X.y,X.z,{n:1,color:"#5aa84a",speed:.4,up:.3,life:.5,gravity:4})}}t.roll.visible=C,t.armR.visible=C,C?t.lanternArm.position.set(.36,.72,.18):t.lanternArm.position.set(.48,1,-.1);const M=Math.min(1,i*14);t.armL.rotation.x+=(g-t.armL.rotation.x)*M,t.armL.rotation.z+=(E-t.armL.rotation.z)*M;const _=C?t.armR:t.lanternArm;C&&t.lanternArm.rotation.set(0,0,0),_.rotation.x+=(A-_.rotation.x)*M,_.rotation.z+=(b-_.rotation.z)*M,I.idle=f<.3?(I.idle||0)+i:0;const T=I.idle>2?Math.sin(J.time*.55)*.7*Math.min(1,(I.idle-2)/1.5):0;t.head.rotation.y+=(T-t.head.rotation.y)*Math.min(1,i*4),I.blink=(I.blink??2)-i,I.blink<-.12&&(I.blink=2+Math.random()*3);for(const D of t.eyes)D.scale.y=I.faint>0?.1:I.blink<0?.12:1;t.carried.visible=I.carrying,I.chargeTower?(t.carried.position.lerp(cr.set(0,.95,-.5),Math.min(1,i*14)),t.carried.rotation.y=0,t.carried.scale.setScalar(Math.max(.55,t.carried.scale.x-i*3))):(t.carried.rotation.y+=i*2,t.carried.scale.setScalar(1),t.carried.position.set(0,2.35+Math.sin(J.time*3)*.08,0)),qc.intensity=Jf*(1+Math.sin(J.time*11)*.115)}function W1(){for(const i of ve.clicks.splice(0)){Lh.setFromCamera(i,Ye);const t=Lh.intersectObject(jt.terrain)[0];if(!t)continue;let e=t.point.x,n=t.point.z;const s=jt.lighthouse.pos,r=ia(jt.plinths,e,n,2.2)||(Math.hypot(s.x-e,s.z-n)<4.5?{x:s.x,z:s.z,big:!0}:null);if(r){const a=r.big?4.3:1.95;let o=I.x-r.x,l=I.z-r.z;const c=Math.hypot(o,l)||1;e=r.x+o/c*a,n=r.z+l/c*a}I.goal={x:e,z:n,t:0,best:1/0,lastGain:0,spot:r,reach:r?r.big?Qt.lighthouseReach-.4:Qt.reach-.25:0},Ne.emit(e,jt.heightAt(e,n)+.2,n,{n:6,color:"#fff3d0",speed:1.5,up:.5,life:.35,gravity:0})}}function lr(i=!J.paused,t=!1){J.paused=i;const e=ve.labels();de("pause-keys").textContent=`${e.name}: fortsett med ${e.pause} · start på nytt med ${e.restart}`,de("pause").classList.toggle("hidden",!i),de("confirm").classList.toggle("hidden",!t),J.confirming=i&&t}try{sessionStorage.getItem("glod-portrait")&&document.documentElement.classList.add("portrait-ok")}catch{}de("btn-portrait").addEventListener("click",()=>{document.documentElement.classList.add("portrait-ok");try{sessionStorage.setItem("glod-portrait","1")}catch{}la()});de("btn-resume").addEventListener("click",()=>lr(!1));de("btn-restart").addEventListener("click",()=>lr(!0,!0));de("btn-yes").addEventListener("click",()=>Xr());de("btn-no").addEventListener("click",()=>lr(!0,!1));de("btn-worlds").addEventListener("click",()=>{location.href=`${location.pathname}?world=${Rn}`});de("btn-lex").addEventListener("click",()=>{const i=de("lex");i.innerHTML||(i.innerHTML=Object.entries(vo).filter(([t])=>t!=="lobbyMini").map(([t,e])=>{const{tough:n,weak:s}=nd(e);return`<div class="lex-row"><b>${e.flying?"🪶":"🐾"} ${e.name}</b><small>${e.info||(e.flying?"flyr rett mot fyret":"går langs veien")}</small><span>${n?`🛡️ ${n}`:""} ${s?`💥 ${s}`:""}</span></div>`}).join("")+`<p class="lex-key">🛡️ tåler · 💥 svak mot · ${Object.entries(mc).map(([t,e])=>`${e} ${rr[t].name}`).join(" · ")} · 📒 skjold forfra</p>`),i.classList.toggle("hidden")});function Xr(){for(const i of Ii)i.el.remove();Ii.length=0;for(const i of[Ln,Wr,gs,ri,ar]){for(const t of i)t.mesh&&Te.remove(t.mesh);i.length=0}for(const i of Vn)Te.remove(i.mesh);Vn.length=0;for(const i of jt.plinths)i.tower=null;for(let i=jt.colliders.length-1;i>=0;i--)jt.colliders[i].tower&&jt.colliders.splice(i,1);J.buildMode=!1,I.chargeTower&&ta(I.chargeTower,0),Object.assign(J,{phase:"title",wave:0,timer:0,embers:Qt.startEmbers,lights:vr,spawnQueue:[],leaks:{},seen:{},waveClock:0,sel:0,paused:!1,confirming:!1}),Object.assign(I,{x:jt.lighthouse.pos.x+1,z:jt.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,charge:0,chargeTower:null,goal:null,chill:Qt.chillMax,inv:0,faint:0,faints:0});for(const i of or)Te.remove(i.mesh);or.length=0,jt.lighthouse.setLights(vr),Z1(),Yn=0,so=0,ki={},Wn(an.lights,"lights",J.lights),Wn(an.embers,"embers",J.embers),Wn(an.wave,"wave",0),an.timer.textContent="",de("pause").classList.add("hidden"),de("confirm").classList.add("hidden"),de("overlay").classList.add("hidden"),ve.clear(),J.phase="title",Mo(!0),window.__restarts=(window.__restarts||0)+1}function X1(){const i=ve.device;if(ki.device===i+ve.padKind)return;ki.device=i+ve.padKind;const t=ve.labels();de("touch").classList.toggle("hidden",i!=="touch"||J.phase==="title"),_i.querySelectorAll("button i").forEach((e,n)=>{e.textContent=i==="pad"?n===J.sel?t.build:"":i==="touch"?"":String(n+1)}),Yc.textContent="Neste bølge ▶",ki.sel=-1}function q1(i){if(ve.consume("fps")&&$c.classList.toggle("hidden"),ve.consume("music")&&cd(),X1(),J.phase==="title"){["build","carry","next","pause"].some(f=>ve.consume(f))&&Mo(),ve.clear();return}if(Wn(an.embers,"embers",J.embers),!(J.phase==="prep"||J.phase==="wave")){if((J.phase==="won"||J.phase==="lost")&&ve.consume("restart")){Xr();return}ve.clear(),_i.classList.add("hidden"),Ih("");return}if(ve.consume("restart")){J.confirming?Xr():lr(!0,!0);return}if(ve.consume("pause")&&lr(!J.paused),J.confirming){if(ve.consume("build")||ve.consume("next")){Xr();return}ve.consume("carry")&&lr(!0,!1)}if(J.paused){ve.clear();return}W1(),ve.consume("next")&&J.phase==="prep"&&(J.timer=0),ve.consume("selPrev")&&(J.sel=(J.sel+ji.length-1)%ji.length),ve.consume("selNext")&&(J.sel=(J.sel+1)%ji.length);const e=ia(jt.plinths,I.x,I.z,Qt.reach,f=>!f.tower),n=ia(Vn,I.x,I.z,Qt.reach),s=jt.lighthouse.pos,r=Math.hypot(s.x-I.x,s.z-I.z)<Qt.lighthouseReach,a=I.stun>0,o=Kc();ve.consume("build")&&!a&&(J.buildMode||e?io(ji[J.sel]):J.buildMode=!0),ji.forEach((f,p)=>{ve.consume("b"+(p+1))&&!a&&(J.sel=p,io(f))});const l=(J.buildMode||!!e)&&!a&&!I.carrying;U1(l,o,ji[J.sel]),_i.classList.toggle("hidden",!l),l&&(_i.querySelectorAll("button").forEach((f,p)=>{f.disabled=J.embers<rr[f.dataset.tower].cost,f.classList.toggle("sel",p===J.sel)}),ki.sel!==J.sel&&ve.device==="pad"&&(ki.sel=J.sel,_i.querySelectorAll("button i").forEach((f,p)=>f.textContent=p===J.sel?ve.labels().build:""))),ve.consume("carry")&&!a&&(!I.carrying&&r?J.embers>=Qt.stoneCost?(J.embers-=Qt.stoneCost,I.carrying=!0,Wn(an.embers,"embers",J.embers,"bump"),Ne.emit(I.x,Je.position.y+2.3,I.z,{n:14,color:"#8ff0ff",speed:2,up:2,life:.6,gravity:2}),qe.stone()):(qe.deny(),on(`Rullepapir koster ${Qt.stoneCost} ✦`)):I.carrying&&r?(I.carrying=!1,J.embers+=Qt.stoneCost,qe.stone(),on("Rullepapiret er lagt tilbake")):!I.carrying&&J.buildMode?J.buildMode=!1:I.carrying?n||on("Bær rullepapiret til et tårn"):on("Rullepapir hentes ved fyret"));const c=I.carrying&&!a&&n&&n.level<ll&&!n.upg?n:null;c!==I.chargeTower&&(I.chargeTower&&ta(I.chargeTower,0),I.chargeTower=c,I.charge=0),c&&(I.charge+=i/Qt.chargeTime,ta(c,Math.min(1,I.charge)),Math.random()<i*20&&Ne.emit(I.x,Je.position.y+2.2,I.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),I.charge>=1&&(c.upg={t:0,dur:Qt.upgradeTime[c.level-1]},I.carrying=!1,I.chargeTower=null,I.charge=0,Ne.emit(c.x,c.y+1.2,c.z,{n:12,color:"#8ff0ff",speed:2,up:2,life:.6}),qe.stone(),on(`${c.def.name}: bli stående i ${c.upg.dur} s for å oppgradere`)));const h=ve.labels();so-=i;let u="";if(so>0)u=rd;else if(a)u="Moralpanikk! Måka slo deg ut";else if(c)u="Leverer rullepapiret …";else if(n!=null&&n.upg)u=`Lader ${n.def.name} … ${Math.ceil(n.upg.dur-n.upg.t)} s igjen (bli stående)`;else if(I.carrying&&n&&n.level>=ll)u="Tårnet er på maks nivå";else if(I.carrying)u="Bær rullepapiret til et tårn";else if(r&&!I.carrying)u=`${h.carry} = hent rullepapir (${Qt.stoneCost} ✦)`;else if(r&&I.carrying)u=`${h.carry} = legg rullepapiret tilbake`;else if(n&&n.level<ll)u=`${n.def.name} nv. ${n.level} · hent rullepapir ved fyret for å oppgradere`;else if(l&&!o.ok)u=`Ikke lov her: ${o.why} · ${h.carry} = avbryt`;else if(l){const f=`${rr[ji[J.sel]].name} (${rr[ji[J.sel]].tip})`,p=o.plinth?" (sokkel: +25 % rekkevidde)":"";u=ve.device==="pad"?`${h.sel} = velg tårn · ${h.build} = sett ned ${f}${p}`:ve.device==="touch"?`Trykk på et tårn, eller Bygg = ${f}${p}`:`1 / 2 / 3 eller ${h.build} = sett ned ${f}${p}`}else J.phase==="prep"&&J.wave===0&&(u=`${h.build} = bygg et tårn der du står (sokler gir +25 % rekkevidde)`);Ih(u),S1(i)}const ys=new _e;{const i=document.createElement("canvas");i.width=64,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,64,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.5,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,256),t.globalCompositeOperation="destination-in";const n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.2,"rgba(0,0,0,0.8)"),n.addColorStop(.65,"rgba(0,0,0,0.3)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,256);const s=new fi(i);for(let r=0;r<6;r++){const a=new oe(new Zn(1,1),new De({map:s,color:"#ffdcae",transparent:!0,opacity:.05,blending:di,depthWrite:!1,depthTest:!1,fog:!1}));a.scale.set(3.5+r%3*2.4,34,1),a.position.set(-22+r*8.5,9,-4+r%2*6),a.rotation.set(-.95,0,.55),a.userData.phase=r*1.3,ys.add(a)}}ys.visible=sn.id==="tak";ys.renderOrder=50;Te.add(ys);function Y1(i){ys.position.set(An.x,0,An.z),ys.rotation.y=Ui,ys.children.forEach(t=>t.material.opacity=.06+.035*Math.sin(i*.35+t.userData.phase))}let Yn=0;const Ue=new B,cr=new B,Ks=new B,Va=new B,cl=new B,An=new B(I.x,0,I.z);function $1(i){An.x+=(I.x-An.x)*Math.min(1,i*4),An.z+=(I.z-An.z)*Math.min(1,i*4),An.y=Je.position.y;const t=Bi?1.15:1,e=ve.zoom*t,n=Ye.aspect<1.2?1.25:1;Ui+=ve.look;const s=6.6*e*n;Ye.position.set(An.x+Math.sin(Ui)*s,An.y+12.5*e*n,An.z+Math.cos(Ui)*s),Yn=Math.max(0,Yn-i),Yn>0&&(Ye.position.x+=(Math.random()-.5)*Yn*2,Ye.position.y+=(Math.random()-.5)*Yn),Ye.lookAt(An.x-Math.sin(Ui),An.y+.5,An.z-Math.cos(Ui)),Ye.updateMatrixWorld();let r=0,a=0,o=0;const l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([d,y])=>{const S=Ue.set(d,y,.5).unproject(Ye),g=S.sub(Ye.position).normalize(),A=g.y<-.05?(An.y-Ye.position.y)/g.y:80;return[Ye.position.x+g.x*Math.min(A,80),Ye.position.z+g.z*Math.min(A,80)]});for(const[d,y]of l)r+=d/4,a+=y/4;for(const[d,y]of l)o=Math.max(o,Math.hypot(d-r,y-a));const c=xe.clamp(Math.ceil((o+4)/4)*4,16,80);hn.shadow.camera.right!==c&&(Object.assign(hn.shadow.camera,{left:-c,right:c,top:c,bottom:-c}),hn.shadow.camera.updateProjectionMatrix());const h=2*c/hn.shadow.mapSize.x;Ks.set(Hn.sunDir[0],Hn.sunDir[1],Hn.sunDir[2]).normalize(),Va.set(0,1,0).cross(Ks).normalize(),cl.copy(Ks).cross(Va).normalize(),Ue.set(r,An.y,a);const u=Math.round(Ue.dot(Va)/h)*h,f=Math.round(Ue.dot(cl)/h)*h,p=Ue.dot(Ks);cr.copy(Va).multiplyScalar(u).addScaledVector(cl,f).addScaledVector(Ks,p),hn.target.position.copy(cr),hn.position.copy(cr).addScaledVector(Ks,40),hn.shadow.camera.far=40+c+20,Y1(J.time),R1(),Ue.set(I.x,Je.position.y+.9,I.z);const v=-Ue.clone().applyMatrix4(Ye.matrixWorldInverse).z;Ue.project(Ye);const x=innerWidth*wn.getPixelRatio(),m=innerHeight*wn.getPixelRatio();gr.uKeep.value.set((Ue.x*.5+.5)*x,(Ue.y*.5+.5)*m,v),gr.uRad.value=m*.3,E1(J.paused?0:i)}const ul=sn.eruption,hl=jt.extras.bridges??[];let Fr=0,Ji=null;function j1(i){if(!(!ul||!hl.length||J.phase!=="wave")){if(Fr+=i,Ji&&Fr>=ul.closed)Ji.setClosed(!1),Ji=null,Dn.setBlock(()=>!1);else if(!Ji&&Fr>=ul.every){Fr=0;const t=hl[Math.random()*hl.length|0];t.setClosed(!0),Ji=t,Dn.setBlock((e,n)=>(e-t.x)**2+(n-t.z)**2<2.8*2.8),Yn=Math.max(Yn,.35),qe.boom(),on("🌋 Utbrudd! En bro er stengt av lava i 10 s")}}}function Z1(){Ji&&(Ji.setClosed(!1),Dn.setBlock(()=>!1)),Ji=null,Fr=0}function K1(i){if(j1(i),J.phase==="prep")J.timer-=i,an.timer.textContent=`Neste bølge om ${Math.ceil(Math.max(0,J.timer))} s`,J.timer<=0&&(an.timer.textContent="",ed());else if(J.phase==="wave"){for(J.waveClock+=i;J.spawnQueue.length&&J.spawnQueue[0].t<=J.waveClock;){const t=J.spawnQueue.shift();jc(t.type,t.path)}if(an.timer.textContent=`${Ln.length+J.spawnQueue.length} monstre igjen`,!J.spawnQueue.length&&!Ln.length){if(an.timer.textContent="",J.wave>=Xc.length){ad(!0);return}const t=Qt.waveBonus+J.wave*Qt.waveBonusPer+Math.floor(Math.min(J.embers,300)*Qt.interest);J.embers+=t,Wn(an.embers,"embers",J.embers,"bump"),on(`Bølge ${J.wave} slått! +${t} ✦`),I.cheer=1.4,td(Qt.prepTime),Qe==null||Qe.setIntensity(0)}}}function ad(i){J.phase=i?"won":"lost",de("touch").classList.add("hidden"),de("btn-pause").classList.add("hidden"),_i.classList.add("hidden");let t="";if(Qe==null||Qe.setIntensity(0),i){qe.win();const n=Qr();w_(Rn),Qr()>n&&(t=`<p class="lead">🔓 Ny verden låst opp: <b>${br[Rn+1].name}</b>!</p>`)}const e=de("overlay");e.querySelector(".card").innerHTML=i?`<h1>Gløden lever!</h1><p class="lead">Ti bølger med forbud, komitéer og moralpanikk er chillet ned, og ${J.lights} av 20 glødepunkter brenner fortsatt. Øya ånder ut.</p>${t}<div class="menu-row"><button id="btn-again">↺ Spill kartet igjen</button>${t?'<button id="btn-nextworld" class="alt">Neste verden ▶</button>':""}<button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`:`<h1>Gløden sluknet</h1><p class="lead">Byråkratiet vant denne gangen, i bølge ${J.wave}. Rull opp og prøv på nytt.</p><div class="menu-row"><button id="btn-again">↺ Start kartet på nytt</button><button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`,e.classList.remove("hidden"),de("btn-again").addEventListener("click",()=>Xr()),de("btn-worlds2").addEventListener("click",()=>{location.href=`${location.pathname}?world=${Rn}`}),t&&de("btn-nextworld").addEventListener("click",()=>{location.href=`${location.pathname}?world=${Rn+1}`})}let Qe=null;const to=(()=>{try{return JSON.parse(localStorage.getItem("glod-music")||"{}")}catch{return{}}})(),qr=["rolig","dnb","av"],od={rolig:"Rolig",dnb:"DnB",av:"Av"};let ui=qr.includes(to.mode)?to.mode:to.muted?"av":"rolig";tn.get("musikk")&&qr.includes(tn.get("musikk"))&&(ui=tn.get("musikk"));function ld(){try{localStorage.setItem("glod-music",JSON.stringify({vol:Qe.volume,mode:ui}))}catch{}}function J1(i){const t={};let e=null,n=0,s=to.vol??.7;return{use:a=>{const o=a==="dnb"?"dnb":"rolig";e&&e!==t[o]&&e.stop(),t[o]??(t[o]=o==="dnb"?d1(i.ctx,i.noiseBuf,sn.id):p1(i.ctx,i.noiseBuf,sn.id)),e=t[o],e.setVolume(s),e.setIntensity(n),e.setMuted(a==="av"),a==="av"?e.stop():e.start()},setIntensity(a){n=a,e==null||e.setIntensity(a)},setVolume(a){s=a,e==null||e.setVolume(a)},get volume(){return s},get muted(){return ui==="av"},get intensity(){return n},get mode(){return ui},get section(){return e==null?void 0:e.section},rms(){return e?e.rms():0},tap(a){for(const o of Object.values(t))o.tap(a)}}}function Q1(){const i=qf();Qe||!i||tn.has("nomusic")||(Qe=J1(i),Qe.use(ui),de("music-vol").value=Math.round(Qe.volume*100),de("btn-mute").textContent=`M: ${od[ui]}`,window.__music=Qe,window.__audioCtx=i.ctx)}function cd(){Qe&&(ui=qr[(qr.indexOf(ui)+1)%qr.length],Qe.use(ui),de("btn-mute").textContent=`M: ${od[ui]}`,ld(),on({rolig:"🎶 Musikk: rolig",dnb:"🎶 Musikk: drum & bass",av:"🎶 Musikk av"}[ui]))}for(const i of["pointerdown","keydown","touchend"])addEventListener(i,()=>{const t=qf();t&&t.ctx.state!=="running"&&t.ctx.resume()},{passive:!0});de("music-vol").addEventListener("input",i=>{Qe&&(Qe.setVolume(i.target.value/100),ld())});de("btn-mute").addEventListener("click",i=>{i.preventDefault(),cd()});function Mo(i=!1){J.phase==="title"&&(h1(),Q1(),Qe==null||Qe.setIntensity(0),i&&de("touch").classList.toggle("hidden",ve.device!=="touch"),de("overlay").classList.add("hidden"),Bi&&(ve.device="touch"),ki.device=null,de("btn-pause").classList.remove("hidden"),jt.lighthouse.setLights(J.lights),Wn(an.embers,"embers",J.embers),td(Qt.firstPrep),Yf&&tM())}de("btn-start").addEventListener("click",Mo);{const i=de("worlds"),t=Qr();if(br.forEach((e,n)=>{const s=document.createElement("button");s.className="world"+(n===Rn?" sel":"")+(n>=t?" locked":""),s.innerHTML=`<b>${n>=t?"🔒 ":""}${e.name}</b><small>${n>=t?"Vinn forrige verden for å låse opp":e.blurb}</small>`,s.disabled=n>=t,s.addEventListener("click",()=>{n!==Rn&&(location.href=`${location.pathname}?world=${n}`)}),i.appendChild(s)}),de("btn-start").textContent=`Tenn gløden på ${sn.name}`,sn.skyDusk){const e=document.createElement("button");e.id="btn-tod",e.className="tod",e.textContent=_s==="skumring"?"🌅 Skumring (bytt til dag)":"☀️ Dag (bytt til skumring)",e.addEventListener("click",()=>{try{localStorage.setItem("glod-tid",_s==="skumring"?"dag":"skumring")}catch{}location.href=`${location.pathname}?world=${Rn}&tid=${_s==="skumring"?"dag":"skumring"}`}),de("worlds").after(e)}}de("btn-quality").addEventListener("click",()=>Kf(pi==="high"?"low":"high"));addEventListener("keydown",i=>{i.code==="KeyG"&&!i.repeat&&Kf(pi==="high"?"low":"high")});de("btn-quality").textContent=pi==="high"?"Høy":"Lav";de("btn-pause").classList.add("hidden");function tM(){J.embers=999;const i=jt.lighthouse.pos,t=jt.plinths.slice().sort((e,n)=>Math.hypot(e.x-i.x,e.z-i.z-4)-Math.hypot(n.x-i.x,n.z-i.z-4));["ring","chips","speaker","ring","chips","ring"].forEach((e,n)=>{const s=t[n];I.x=s.x+1.9,I.z=s.z,io(e),n<3&&(Vn[Vn.length-1].level=n+1,Of(Vn[Vn.length-1],n+1))}),I.x=i.x+1,I.z=i.z+6,I.carrying=!0,J.wave=Number(tn.get("demo"))||4,J.wave-=1,ed(),J.waveClock=6,J.embers=142}const eM=new Tf;let fl=0,Ha=0,Wa=0;window.__fpsSamples=[];window.__game={S:J,monsters:Ln,towers:Vn,embers:gs,world:jt,K:I,renderer:wn,camera:Ye,input:ve,buildSpot:()=>Kc(),build:i=>io(i),renderOnce:()=>oa.render(0),outlineCats:Af,spawnMonster:jc,projectiles:ri,damage:vs,dropBag:(i,t)=>sd(i,t),ghost:Ni,get camYaw(){return Ui}};window.__errors=[];addEventListener("error",i=>window.__errors.push(String(i.message)));addEventListener("unhandledrejection",i=>window.__errors.push(String(i.reason)));function ud(){requestAnimationFrame(ud);const i=eM.getDelta(),t=Math.min(i,.05);J.paused||(J.time+=t),ve.update(t),J.paused||(jt.update(J.time),M1.update(J.time));for(let e=0;e<v1&&!J.paused&&(J.phase==="prep"||J.phase==="wave");e++)e>0&&(J.time+=t,zh(t)),K1(t),k1(t),F1(t),O1(t),H1(t),D1(t);if(J.paused||zh(t),q1(t),!J.paused){if(Ne.update(t),Math.random()<t*(4+10*(J.lights/vr))){const e=jt.lighthouse.tip;As.emit(e.x,e.y,e.z,{n:1,color:"#e8e2dc",speed:.5,up:1.6,life:3.2,gravity:-.15})}As.update(t)}if($1(t),wn.info.reset(),oa.render(t),fl++,Ha+=i,Ha>=.5){const e=fl/Ha;window.__fpsSamples.push(e),window.__fpsSamples.length>240&&window.__fpsSamples.shift(),$c.textContent=`${e.toFixed(0)} fps · ${wn.info.render.calls} dc`,Wa=e<(Bi?28:45)?Wa+1:0,Wa>=6&&Ki>1&&(Ki=Math.max(1,Ki-.25),wn.setPixelRatio(Ki),la(),Wa=0,window.__dprDrops=(window.__dprDrops||0)+1,tn.has("debug")&&console.info(`[fps] ${e.toFixed(0)} fps over tid → dpr senket til ${Ki}`)),fl=0,Ha=0}}ud();Yf&&tn.has("autostart")&&Mo();function ro(i,t){let e=i-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}
