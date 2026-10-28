(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sl="170",ou=0,Ul=1,lu=2,eh=1,nh=2,ai=3,Pi=0,pn=1,He=2,Ye=0,Ti=1,fi=2,Il=3,Nl=4,ih=5,Fn=100,cu=101,hu=102,uu=103,fu=104,Ws=200,du=201,pu=202,mu=203,ao=204,oo=205,lo=206,gu=207,co=208,vu=209,xu=210,_u=211,Mu=212,yu=213,Su=214,ho=0,uo=1,fo=2,Es=3,po=4,mo=5,go=6,vo=7,rl=0,Eu=1,bu=2,Ai=0,sh=1,rh=2,ah=3,al=4,wu=5,oh=6,lh=7,ch=300,bs=301,ws=302,xo=303,_o=304,aa=306,di=1e3,Hi=1001,Mo=1002,rn=1003,Tu=1004,fr=1005,Yn=1006,Ma=1007,Wi=1008,jn=1009,hh=1010,uh=1011,er=1012,ol=1013,$i=1014,kn=1015,Rn=1016,ll=1017,cl=1018,ji=1020,fh=35902,dh=1021,ph=1022,Cn=1023,mh=1024,gh=1025,Ms=1026,Zi=1027,oa=1028,hl=1029,vh=1030,ul=1031,fl=1033,Yr=33776,$r=33777,jr=33778,Zr=33779,yo=35840,So=35841,Eo=35842,bo=35843,wo=36196,To=37492,Ao=37496,Co=37808,Ro=37809,Po=37810,Do=37811,Lo=37812,Uo=37813,Io=37814,No=37815,Fo=37816,zo=37817,Oo=37818,Bo=37819,ko=37820,Vo=37821,Kr=36492,Go=36494,Ho=36495,xh=36283,Wo=36284,Xo=36285,qo=36286,Au=3200,Cu=3201,dl=0,Ru=1,Ei="",en="srgb",Cs="srgb-linear",la="linear",xe="srgb",ns=7680,Fl=519,Pu=512,Du=513,Lu=514,_h=515,Uu=516,Iu=517,Nu=518,Fu=519,zl=35044,Ol="300 es",ci=2e3,ea=2001;class Rs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bl=1234567;const Ys=Math.PI/180,nr=180/Math.PI;function Ps(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function Ge(i,t,e){return Math.max(t,Math.min(e,i))}function pl(i,t){return(i%t+t)%t}function zu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ou(i,t,e){return i!==t?(e-i)/(t-i):0}function $s(i,t,e){return(1-e)*i+e*t}function Bu(i,t,e,n){return $s(i,t,1-Math.exp(-e*n))}function ku(i,t=1){return t-Math.abs(pl(i,t*2)-t)}function Vu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Gu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Hu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Wu(i,t){return i+Math.random()*(t-i)}function Xu(i){return i*(.5-Math.random())}function qu(i){i!==void 0&&(Bl=i);let t=Bl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yu(i){return i*Ys}function $u(i){return i*nr}function ju(i){return(i&i-1)===0&&i!==0}function Zu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ku(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ju(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),p=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*h,l*p,o*c);break;case"YZY":i.set(l*p,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*p,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const qe={DEG2RAD:Ys,RAD2DEG:nr,generateUUID:Ps,clamp:Ge,euclideanModulo:pl,mapLinear:zu,inverseLerp:Ou,lerp:$s,damp:Bu,pingpong:ku,smoothstep:Vu,smootherstep:Gu,randInt:Hu,randFloat:Wu,randFloatSpread:Xu,seededRandom:qu,degToRad:Yu,radToDeg:$u,isPowerOfTwo:ju,ceilPowerOfTwo:Zu,floorPowerOfTwo:Ku,setQuaternionFromProperEuler:Ju,normalize:cn,denormalize:vs};class _t{constructor(t=0,e=0){_t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ee{constructor(t,e,n,s,r,a,o,l,c){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],p=n[2],d=n[5],g=n[8],x=s[0],m=s[3],f=s[6],_=s[1],M=s[4],v=s[7],w=s[2],C=s[5],P=s[8];return r[0]=a*x+o*_+l*w,r[3]=a*m+o*M+l*C,r[6]=a*f+o*v+l*P,r[1]=c*x+u*_+h*w,r[4]=c*m+u*M+h*C,r[7]=c*f+u*v+h*P,r[2]=p*x+d*_+g*w,r[5]=p*m+d*M+g*C,r[8]=p*f+d*v+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,p=o*l-u*r,d=c*r-a*l,g=e*h+n*p+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(s*c-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=p*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ya.makeScale(t,e)),this}rotate(t){return this.premultiply(ya.makeRotation(-t)),this}translate(t,e){return this.premultiply(ya.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new ee;function Mh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function na(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qu(){const i=na("canvas");return i.style.display="block",i}const kl={};function Xs(i){i in kl||(kl[i]=!0,console.warn(i))}function tf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ef(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function nf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ue={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===xe&&(i.r=hi(i.r),i.g=hi(i.g),i.b=hi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===xe&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ei?la:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Vl=[.64,.33,.3,.6,.15,.06],Gl=[.2126,.7152,.0722],Hl=[.3127,.329],Wl=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xl=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ue.define({[Cs]:{primaries:Vl,whitePoint:Hl,transfer:la,toXYZ:Wl,fromXYZ:Xl,luminanceCoefficients:Gl,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:Vl,whitePoint:Hl,transfer:xe,toXYZ:Wl,fromXYZ:Xl,luminanceCoefficients:Gl,outputColorSpaceConfig:{drawingBufferColorSpace:en}}});let is;class sf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{is===void 0&&(is=na("canvas")),is.width=t.width,is.height=t.height;const n=is.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=is}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=na("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hi(e[n]/255)*255):e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rf=0;class yh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Ps(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Sa(s[a].image)):r.push(Sa(s[a]))}else r=Sa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let af=0;class an extends Rs{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,n=Hi,s=Hi,r=Yn,a=Wi,o=Cn,l=jn,c=an.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Ps(),this.name="",this.source=new yh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case di:t.x=t.x-Math.floor(t.x);break;case Hi:t.x=t.x<0?0:1;break;case Mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case di:t.y=t.y-Math.floor(t.y);break;case Hi:t.y=t.y<0?0:1;break;case Mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=ch;an.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,n=0,s=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],p=l[1],d=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(d+1)/2,w=(f+1)/2,C=(u+p)/4,P=(h+x)/4,D=(g+m)/4;return M>v&&M>w?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=C/n,r=P/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=C/s,r=D/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=P/r,s=D/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(p-u)*(p-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-x)/_,this.z=(p-u)/_,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class of extends Rs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new an(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new yh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends of{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Sh extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lf extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const p=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=p,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(h!==x||l!==p||c!==d||u!==g){let m=1-o;const f=l*p+c*d+u*g+h*x,_=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const w=Math.sqrt(M),C=Math.atan2(w,f*_);m=Math.sin(m*C)/w,o=Math.sin(o*C)/w}const v=o*_;if(l=l*m+p*v,c=c*m+d*v,u=u*m+g*v,h=h*m+x*v,m===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],p=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*d-c*p,t[e+1]=l*g+u*p+c*h-o*d,t[e+2]=c*g+u*d+o*p-l*h,t[e+3]=u*g-o*h-l*p-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),p=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=p*u*h+c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h-p*d*g;break;case"YXZ":this._x=p*u*h+c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h+p*d*g;break;case"ZXY":this._x=p*u*h-c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h-p*d*g;break;case"ZYX":this._x=p*u*h-c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h+p*d*g;break;case"YZX":this._x=p*u*h+c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h-p*d*g;break;case"XZY":this._x=p*u*h-c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],p=n+o+h;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=a*h+this._w*p,this._x=n*h+this._x*p,this._y=s*h+this._y*p,this._z=r*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ql.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ql.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ea.copy(this).projectOnVector(t),this.sub(Ea)}reflect(t){return this.sub(Ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ea=new I,ql=new cr;class Ji{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Un):Un.fromBufferAttribute(r,a),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)),dr.applyMatrix4(t.matrixWorld),this.union(dr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fs),pr.subVectors(this.max,Fs),ss.subVectors(t.a,Fs),rs.subVectors(t.b,Fs),as.subVectors(t.c,Fs),vi.subVectors(rs,ss),xi.subVectors(as,rs),Ui.subVectors(ss,as);let e=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Ui.z,Ui.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Ui.z,0,-Ui.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Ui.y,Ui.x,0];return!ba(e,ss,rs,as,pr)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,ss,rs,as,pr))?!1:(mr.crossVectors(vi,xi),e=[mr.x,mr.y,mr.z],ba(e,ss,rs,as,pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ti=[new I,new I,new I,new I,new I,new I,new I,new I],Un=new I,dr=new Ji,ss=new I,rs=new I,as=new I,vi=new I,xi=new I,Ui=new I,Fs=new I,pr=new I,mr=new I,Ii=new I;function ba(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ii.fromArray(i,r);const o=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=t.dot(Ii),c=e.dot(Ii),u=n.dot(Ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const cf=new Ji,zs=new I,wa=new I;class Ds{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):cf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);const e=zs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(wa)),this.expandByPoint(zs.copy(t.center).sub(wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new I,Ta=new I,gr=new I,_i=new I,Aa=new I,vr=new I,Ca=new I;class ml{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ta.copy(t).add(e).multiplyScalar(.5),gr.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(Ta);const r=t.distanceTo(e)*.5,a=-this.direction.dot(gr),o=_i.dot(this.direction),l=-_i.dot(gr),c=_i.lengthSq(),u=Math.abs(1-a*a);let h,p,d,g;if(u>0)if(h=a*l-o,p=a*o-l,g=r*u,h>=0)if(p>=-g)if(p<=g){const x=1/u;h*=x,p*=x,d=h*(h+a*p+2*o)+p*(a*h+p+2*l)+c}else p=r,h=Math.max(0,-(a*p+o)),d=-h*h+p*(p+2*l)+c;else p=-r,h=Math.max(0,-(a*p+o)),d=-h*h+p*(p+2*l)+c;else p<=-g?(h=Math.max(0,-(-a*r+o)),p=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+p*(p+2*l)+c):p<=g?(h=0,p=Math.min(Math.max(-r,-l),r),d=p*(p+2*l)+c):(h=Math.max(0,-(a*r+o)),p=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+p*(p+2*l)+c);else p=a>0?-r:r,h=Math.max(0,-(a*p+o)),d=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ta).addScaledVector(gr,p),d}intersectSphere(t,e){ei.subVectors(t.center,this.origin);const n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),u>=0?(r=(t.min.y-p.y)*u,a=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,a=(t.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-p.z)*h,l=(t.max.z-p.z)*h):(o=(t.max.z-p.z)*h,l=(t.min.z-p.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,s,r){Aa.subVectors(e,t),vr.subVectors(n,t),Ca.crossVectors(Aa,vr);let a=this.direction.dot(Ca),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,t);const l=o*this.direction.dot(vr.crossVectors(_i,vr));if(l<0)return null;const c=o*this.direction.dot(Aa.cross(_i));if(c<0||l+c>a)return null;const u=-o*_i.dot(Ca);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,s,r,a,o,l,c,u,h,p,d,g,x,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,h,p,d,g,x,m)}set(t,e,n,s,r,a,o,l,c,u,h,p,d,g,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=p,f[3]=d,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/os.setFromMatrixColumn(t,0).length(),r=1/os.setFromMatrixColumn(t,1).length(),a=1/os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const p=a*u,d=a*h,g=o*u,x=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=p-x*c,e[9]=-o*l,e[2]=x-p*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const p=l*u,d=l*h,g=c*u,x=c*h;e[0]=p+x*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=x+p*o,e[10]=a*l}else if(t.order==="ZXY"){const p=l*u,d=l*h,g=c*u,x=c*h;e[0]=p-x*o,e[4]=-a*h,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=x-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const p=a*u,d=a*h,g=o*u,x=o*h;e[0]=l*u,e[4]=g*c-d,e[8]=p*c+x,e[1]=l*h,e[5]=x*c+p,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const p=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=x-p*h,e[8]=g*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*h+g,e[10]=p-x*h}else if(t.order==="XZY"){const p=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=p*h+x,e[5]=a*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=o*u,e[10]=x*h+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hf,t,uf)}lookAt(t,e,n){const s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Mi.crossVectors(n,xn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Mi.crossVectors(n,xn)),Mi.normalize(),xr.crossVectors(xn,Mi),s[0]=Mi.x,s[4]=xr.x,s[8]=xn.x,s[1]=Mi.y,s[5]=xr.y,s[9]=xn.y,s[2]=Mi.z,s[6]=xr.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],p=n[9],d=n[13],g=n[2],x=n[6],m=n[10],f=n[14],_=n[3],M=n[7],v=n[11],w=n[15],C=s[0],P=s[4],D=s[8],y=s[12],S=s[1],R=s[5],z=s[9],G=s[13],N=s[2],B=s[6],q=s[10],Y=s[14],H=s[3],J=s[7],ct=s[11],lt=s[15];return r[0]=a*C+o*S+l*N+c*H,r[4]=a*P+o*R+l*B+c*J,r[8]=a*D+o*z+l*q+c*ct,r[12]=a*y+o*G+l*Y+c*lt,r[1]=u*C+h*S+p*N+d*H,r[5]=u*P+h*R+p*B+d*J,r[9]=u*D+h*z+p*q+d*ct,r[13]=u*y+h*G+p*Y+d*lt,r[2]=g*C+x*S+m*N+f*H,r[6]=g*P+x*R+m*B+f*J,r[10]=g*D+x*z+m*q+f*ct,r[14]=g*y+x*G+m*Y+f*lt,r[3]=_*C+M*S+v*N+w*H,r[7]=_*P+M*R+v*B+w*J,r[11]=_*D+M*z+v*q+w*ct,r[15]=_*y+M*G+v*Y+w*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],p=t[10],d=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*l*h-s*c*h-r*o*p+n*c*p+s*o*d-n*l*d)+x*(+e*l*d-e*c*p+r*a*p-s*a*d+s*c*u-r*l*u)+m*(+e*c*h-e*o*d-r*a*h+n*a*d+r*o*u-n*c*u)+f*(-s*o*u-e*l*h+e*o*p+s*a*h-n*a*p+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],p=t[10],d=t[11],g=t[12],x=t[13],m=t[14],f=t[15],_=h*m*c-x*p*c+x*l*d-o*m*d-h*l*f+o*p*f,M=g*p*c-u*m*c-g*l*d+a*m*d+u*l*f-a*p*f,v=u*x*c-g*h*c+g*o*d-a*x*d-u*o*f+a*h*f,w=g*h*l-u*x*l-g*o*p+a*x*p+u*o*m-a*h*m,C=e*_+n*M+s*v+r*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return t[0]=_*P,t[1]=(x*p*r-h*m*r-x*s*d+n*m*d+h*s*f-n*p*f)*P,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*f+n*l*f)*P,t[3]=(h*l*r-o*p*r-h*s*c+n*p*c+o*s*d-n*l*d)*P,t[4]=M*P,t[5]=(u*m*r-g*p*r+g*s*d-e*m*d-u*s*f+e*p*f)*P,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*f-e*l*f)*P,t[7]=(a*p*r-u*l*r+u*s*c-e*p*c-a*s*d+e*l*d)*P,t[8]=v*P,t[9]=(g*h*r-u*x*r-g*n*d+e*x*d+u*n*f-e*h*f)*P,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*f+e*o*f)*P,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*d-e*o*d)*P,t[12]=w*P,t[13]=(u*x*s-g*h*s+g*n*p-e*x*p-u*n*m+e*h*m)*P,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*P,t[15]=(a*h*s-u*o*s+u*n*l-e*h*l-a*n*p+e*o*p)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,p=r*c,d=r*u,g=r*h,x=a*u,m=a*h,f=o*h,_=l*c,M=l*u,v=l*h,w=n.x,C=n.y,P=n.z;return s[0]=(1-(x+f))*w,s[1]=(d+v)*w,s[2]=(g-M)*w,s[3]=0,s[4]=(d-v)*C,s[5]=(1-(p+f))*C,s[6]=(m+_)*C,s[7]=0,s[8]=(g+M)*P,s[9]=(m-_)*P,s[10]=(1-(p+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=os.set(s[0],s[1],s[2]).length();const a=os.set(s[4],s[5],s[6]).length(),o=os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],In.copy(this);const c=1/r,u=1/a,h=1/o;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,e.setFromRotationMatrix(In),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ci){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),p=(n+s)/(n-s);let d,g;if(o===ci)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ea)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ci){const l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(a-r),p=(e+t)*c,d=(n+s)*u;let g,x;if(o===ci)g=(a+r)*h,x=-2*h;else if(o===ea)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const os=new I,In=new fe,hf=new I(0,0,0),uf=new I(1,1,1),Mi=new I,xr=new I,xn=new I,Yl=new fe,$l=new cr;class Zn{constructor(t=0,e=0,n=0,s=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],p=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $l.setFromEuler(this),this.setFromQuaternion($l,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class gl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ff=0;const jl=new I,ls=new cr,ni=new fe,_r=new I,Os=new I,df=new I,pf=new cr,Zl=new I(1,0,0),Kl=new I(0,1,0),Jl=new I(0,0,1),Ql={type:"added"},mf={type:"removed"},cs={type:"childadded",child:null},Ra={type:"childremoved",child:null};class Se extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new I,e=new Zn,n=new cr,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new ee}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(Zl,t)}rotateY(t){return this.rotateOnAxis(Kl,t)}rotateZ(t){return this.rotateOnAxis(Jl,t)}translateOnAxis(t,e){return jl.copy(t).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zl,t)}translateY(t){return this.translateOnAxis(Kl,t)}translateZ(t){return this.translateOnAxis(Jl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_r.copy(t):_r.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Os,_r,this.up):ni.lookAt(_r,Os,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(ni),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ql),cs.child=t,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mf),Ra.child=t,this.dispatchEvent(Ra),Ra.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ql),cs.child=t,this.dispatchEvent(cs),cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,pf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),p=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Se.DEFAULT_UP=new I(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new I,ii=new I,Pa=new I,si=new I,hs=new I,us=new I,tc=new I,Da=new I,La=new I,Ua=new I,Ia=new ye,Na=new ye,Fa=new ye;class zn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Nn.subVectors(t,e),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Nn.subVectors(s,e),ii.subVectors(n,e),Pa.subVectors(t,e);const a=Nn.dot(Nn),o=Nn.dot(ii),l=Nn.dot(Pa),c=ii.dot(ii),u=ii.dot(Pa),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const p=1/h,d=(c*l-o*u)*p,g=(a*u-o*l)*p;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ia.setScalar(0),Na.setScalar(0),Fa.setScalar(0),Ia.fromBufferAttribute(t,e),Na.fromBufferAttribute(t,n),Fa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ia,r.x),a.addScaledVector(Na,r.y),a.addScaledVector(Fa,r.z),a}static isFrontFacing(t,e,n,s){return Nn.subVectors(n,e),ii.subVectors(t,e),Nn.cross(ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Nn.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return zn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return zn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;hs.subVectors(s,n),us.subVectors(r,n),Da.subVectors(t,n);const l=hs.dot(Da),c=us.dot(Da);if(l<=0&&c<=0)return e.copy(n);La.subVectors(t,s);const u=hs.dot(La),h=us.dot(La);if(u>=0&&h<=u)return e.copy(s);const p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(hs,a);Ua.subVectors(t,r);const d=hs.dot(Ua),g=us.dot(Ua);if(g>=0&&d<=g)return e.copy(r);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(us,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return tc.subVectors(r,s),o=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(tc,o);const f=1/(m+x+p);return a=x*f,o=p*f,e.copy(n).addScaledVector(hs,a).addScaledVector(us,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function za(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=pl(t,1),e=Ge(e,0,1),n=Ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=za(a,r,t+1/3),this.g=za(a,r,t),this.b=za(a,r,t-1/3)}return ue.toWorkingColorSpace(this,s),this}setStyle(t,e=en){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){const n=Eh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return ue.fromWorkingColorSpace(Qe.copy(this),t),Math.round(Ge(Qe.r*255,0,255))*65536+Math.round(Ge(Qe.g*255,0,255))*256+Math.round(Ge(Qe.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(Qe.copy(this),e);const n=Qe.r,s=Qe.g,r=Qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=en){ue.fromWorkingColorSpace(Qe.copy(this),t);const e=Qe.r,n=Qe.g,s=Qe.b;return t!==en?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(Mr);const n=$s(yi.h,Mr.h,e),s=$s(yi.s,Mr.s,e),r=$s(yi.l,Mr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new gt;gt.NAMES=Eh;let gf=0;class Qi extends Rs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Ps(),this.name="",this.blending=Ti,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ao,this.blendDst=oo,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==Pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ao&&(n.blendSrc=this.blendSrc),this.blendDst!==oo&&(n.blendDst=this.blendDst),this.blendEquation!==Fn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Le extends Qi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new I,yr=new _t;class Ie{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zl,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yr.fromBufferAttribute(this,e),yr.applyMatrix3(t),this.setXY(e,yr.x,yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vs(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vs(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vs(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zl&&(t.usage=this.usage),t}}class bh extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wh extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qt extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}}let vf=0;const bn=new fe,Oa=new Se,fs=new I,_n=new Ji,Bs=new Ji,Ve=new I;class Ee extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mh(t)?wh:bh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return Oa.lookAt(t),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Bs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(_n.min,Bs.min),_n.expandByPoint(Ve),Ve.addVectors(_n.max,Bs.max),_n.expandByPoint(Ve)):(_n.expandByPoint(Bs.min),_n.expandByPoint(Bs.max))}_n.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ve.fromBufferAttribute(o,c),l&&(fs.fromBufferAttribute(t,c),Ve.add(fs)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new I,l[D]=new I;const c=new I,u=new I,h=new I,p=new _t,d=new _t,g=new _t,x=new I,m=new I;function f(D,y,S){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,S),p.fromBufferAttribute(r,D),d.fromBufferAttribute(r,y),g.fromBufferAttribute(r,S),u.sub(c),h.sub(c),d.sub(p),g.sub(p);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(R),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(R),o[D].add(x),o[y].add(x),o[S].add(x),l[D].add(m),l[y].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let D=0,y=_.length;D<y;++D){const S=_[D],R=S.start,z=S.count;for(let G=R,N=R+z;G<N;G+=3)f(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const M=new I,v=new I,w=new I,C=new I;function P(D){w.fromBufferAttribute(s,D),C.copy(w);const y=o[D];M.copy(y),M.sub(w.multiplyScalar(w.dot(y))).normalize(),v.crossVectors(C,y);const R=v.dot(l[D])<0?-1:1;a.setXYZW(D,M.x,M.y,M.z,R)}for(let D=0,y=_.length;D<y;++D){const S=_[D],R=S.start,z=S.count;for(let G=R,N=R+z;G<N;G+=3)P(t.getX(G+0)),P(t.getX(G+1)),P(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(t)for(let p=0,d=t.count;p<d;p+=3){const g=t.getX(p+0),x=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,d=e.count;p<d;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,p=new c.constructor(l.length*u);let d=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*u;for(let f=0;f<u;f++)p[g++]=c[d++]}return new Ie(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const p=c[u],d=t(p,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let p=0,d=h.length;p<d;p++)u.push(h[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ec=new fe,Ni=new ml,Sr=new Ds,nc=new I,Er=new I,br=new I,wr=new I,Ba=new I,Tr=new I,ic=new I,Ar=new I;class Jt extends Se{constructor(t=new Ee,e=new Le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Ba.fromBufferAttribute(h,t),a?Tr.addScaledVector(Ba,u):Tr.addScaledVector(Ba.sub(e),u))}e.add(Tr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(r),Ni.copy(t.ray).recast(t.near),!(Sr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Sr,nc)===null||Ni.origin.distanceToSquared(nc)>(t.far-t.near)**2))&&(ec.copy(r).invert(),Ni.copy(t.ray).applyMatrix4(ec),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,p=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=p.length;g<x;g++){const m=p[g],f=a[m.materialIndex],_=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,w=M;v<w;v+=3){const C=o.getX(v),P=o.getX(v+1),D=o.getX(v+2);s=Cr(this,f,t,n,c,u,h,C,P,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,f=x;m<f;m+=3){const _=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);s=Cr(this,a,t,n,c,u,h,_,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=p.length;g<x;g++){const m=p[g],f=a[m.materialIndex],_=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,w=M;v<w;v+=3){const C=v,P=v+1,D=v+2;s=Cr(this,f,t,n,c,u,h,C,P,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,f=x;m<f;m+=3){const _=m,M=m+1,v=m+2;s=Cr(this,a,t,n,c,u,h,_,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function xf(i,t,e,n,s,r,a,o){let l;if(t.side===pn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Pi,o),l===null)return null;Ar.copy(o),Ar.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ar);return c<e.near||c>e.far?null:{distance:c,point:Ar.clone(),object:i}}function Cr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Er),i.getVertexPosition(l,br),i.getVertexPosition(c,wr);const u=xf(i,t,e,n,Er,br,wr,ic);if(u){const h=new I;zn.getBarycoord(ic,Er,br,wr,h),s&&(u.uv=zn.getInterpolatedAttribute(s,o,l,c,h,new _t)),r&&(u.uv1=zn.getInterpolatedAttribute(r,o,l,c,h,new _t)),a&&(u.normal=zn.getInterpolatedAttribute(a,o,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new I,materialIndex:0};zn.getNormal(Er,br,wr,p.normal),u.face=p,u.barycoord=h}return u}class Tn extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let p=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(h,2));function g(x,m,f,_,M,v,w,C,P,D,y){const S=v/P,R=w/D,z=v/2,G=w/2,N=C/2,B=P+1,q=D+1;let Y=0,H=0;const J=new I;for(let ct=0;ct<q;ct++){const lt=ct*R-G;for(let Ft=0;Ft<B;Ft++){const jt=Ft*S-z;J[x]=jt*_,J[m]=lt*M,J[f]=N,c.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[f]=C>0?1:-1,u.push(J.x,J.y,J.z),h.push(Ft/P),h.push(1-ct/D),Y+=1}}for(let ct=0;ct<D;ct++)for(let lt=0;lt<P;lt++){const Ft=p+lt+B*ct,jt=p+lt+B*(ct+1),K=p+(lt+1)+B*(ct+1),ft=p+(lt+1)+B*ct;l.push(Ft,jt,ft),l.push(jt,K,ft),H+=6}o.addGroup(d,H,y),d+=H,p+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ts(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function hn(i){const t={};for(let e=0;e<i.length;e++){const n=Ts(i[e]);for(const s in n)t[s]=n[s]}return t}function _f(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Th(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const On={clone:Ts,merge:hn};var Mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Re extends Qi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mf,this.fragmentShader=yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=_f(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ah extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=ci}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Si=new I,sc=new _t,rc=new _t;class Mn extends Ah{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,sc,rc),e.subVectors(rc,sc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ds=-90,ps=1;class Sf extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn(ds,ps,t,e);s.layers=this.layers,this.add(s);const r=new Mn(ds,ps,t,e);r.layers=this.layers,this.add(r);const a=new Mn(ds,ps,t,e);a.layers=this.layers,this.add(a);const o=new Mn(ds,ps,t,e);o.layers=this.layers,this.add(o);const l=new Mn(ds,ps,t,e);l.layers=this.layers,this.add(l);const c=new Mn(ds,ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,p,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ch extends an{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:bs,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ef extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ch(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tn(5,5,5),r=new Re({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Ye});r.uniforms.tEquirect.value=e;const a=new Jt(s,r),o=e.minFilter;return e.minFilter===Wi&&(e.minFilter=Yn),new Sf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const ka=new I,bf=new I,wf=new ee;class ki{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ka.subVectors(n,e).cross(bf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ka),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||wf.getNormalMatrix(t),s=this.coplanarPoint(ka).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new Ds,Rr=new I;class vl{constructor(t=new ki,e=new ki,n=new ki,s=new ki,r=new ki,a=new ki){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ci){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],p=s[7],d=s[8],g=s[9],x=s[10],m=s[11],f=s[12],_=s[13],M=s[14],v=s[15];if(n[0].setComponents(l-r,p-c,m-d,v-f).normalize(),n[1].setComponents(l+r,p+c,m+d,v+f).normalize(),n[2].setComponents(l+a,p+u,m+g,v+_).normalize(),n[3].setComponents(l-a,p-u,m-g,v-_).normalize(),n[4].setComponents(l-o,p-h,m-x,v-M).normalize(),e===ci)n[5].setComponents(l+o,p+h,m+x,v+M).normalize();else if(e===ea)n[5].setComponents(o,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Rr.x=s.normal.x>0?t.max.x:t.min.x,Rr.y=s.normal.y>0?t.max.y:t.min.y,Rr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Tf(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<h.length;d++){const g=h[p],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++p,h[p]=x)}h.length=p+1;for(let d=0,g=h.length;d<g;d++){const x=h[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Gn extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=t/o,p=e/l,d=[],g=[],x=[],m=[];for(let f=0;f<u;f++){const _=f*p-a;for(let M=0;M<c;M++){const v=M*h-r;g.push(v,-_,0),x.push(0,0,1),m.push(M/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){const M=_+c*f,v=_+c*(f+1),w=_+1+c*(f+1),C=_+1+c*f;d.push(M,v,C),d.push(v,w,C)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cf=`#ifdef USE_ALPHAHASH
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
#endif`,Rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uf=`#ifdef USE_AOMAP
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
#endif`,If=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nf=`#ifdef USE_BATCHING
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
#endif`,Ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kf=`#ifdef USE_IRIDESCENCE
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
#endif`,Vf=`#ifdef USE_BUMPMAP
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
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zf=`#define PI 3.141592653589793
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
} // validated`,Kf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jf=`vec3 transformedNormal = objectNormal;
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
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ed=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,id="gl_FragColor = linearToOutputTexel( gl_FragColor );",sd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rd=`#ifdef USE_ENVMAP
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
#endif`,ad=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,od=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pd=`#ifdef USE_GRADIENTMAP
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
}`,md=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xd=`uniform bool receiveShadow;
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
#endif`,_d=`#ifdef USE_ENVMAP
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
#endif`,Md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bd=`PhysicalMaterial material;
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
#endif`,wd=`struct PhysicalMaterial {
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
}`,Td=`
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
#endif`,Ad=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Id=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fd=`#if defined( USE_POINTS_UV )
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
#endif`,zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Od=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gd=`#ifdef USE_MORPHTARGETS
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
#endif`,Hd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jd=`#ifdef USE_NORMALMAP
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
#endif`,Zd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ep=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,up=`float getShadowMask() {
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
}`,fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dp=`#ifdef USE_SKINNING
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
#endif`,pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mp=`#ifdef USE_SKINNING
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
#endif`,gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_p=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mp=`#ifdef USE_TRANSMISSION
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
#endif`,yp=`#ifdef USE_TRANSMISSION
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ap=`uniform sampler2D t2D;
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
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`#include <common>
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
}`,Up=`#if DEPTH_PACKING == 3200
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
}`,Ip=`#define DISTANCE
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
}`,Np=`#define DISTANCE
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`uniform float scale;
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
}`,Bp=`uniform vec3 diffuse;
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
}`,kp=`#include <common>
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
}`,Vp=`uniform vec3 diffuse;
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
}`,Gp=`#define LAMBERT
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
}`,Hp=`#define LAMBERT
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
}`,Wp=`#define MATCAP
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
}`,Xp=`#define MATCAP
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
}`,qp=`#define NORMAL
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
}`,Yp=`#define NORMAL
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
}`,$p=`#define PHONG
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
}`,jp=`#define PHONG
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
}`,Zp=`#define STANDARD
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
}`,Kp=`#define STANDARD
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
}`,Jp=`#define TOON
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
}`,Qp=`#define TOON
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
}`,tm=`uniform float size;
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
}`,em=`uniform vec3 diffuse;
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
}`,nm=`#include <common>
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
}`,im=`uniform vec3 color;
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
}`,sm=`uniform float rotation;
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
}`,rm=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:Af,alphahash_pars_fragment:Cf,alphamap_fragment:Rf,alphamap_pars_fragment:Pf,alphatest_fragment:Df,alphatest_pars_fragment:Lf,aomap_fragment:Uf,aomap_pars_fragment:If,batching_pars_vertex:Nf,batching_vertex:Ff,begin_vertex:zf,beginnormal_vertex:Of,bsdfs:Bf,iridescence_fragment:kf,bumpmap_pars_fragment:Vf,clipping_planes_fragment:Gf,clipping_planes_pars_fragment:Hf,clipping_planes_pars_vertex:Wf,clipping_planes_vertex:Xf,color_fragment:qf,color_pars_fragment:Yf,color_pars_vertex:$f,color_vertex:jf,common:Zf,cube_uv_reflection_fragment:Kf,defaultnormal_vertex:Jf,displacementmap_pars_vertex:Qf,displacementmap_vertex:td,emissivemap_fragment:ed,emissivemap_pars_fragment:nd,colorspace_fragment:id,colorspace_pars_fragment:sd,envmap_fragment:rd,envmap_common_pars_fragment:ad,envmap_pars_fragment:od,envmap_pars_vertex:ld,envmap_physical_pars_fragment:_d,envmap_vertex:cd,fog_vertex:hd,fog_pars_vertex:ud,fog_fragment:fd,fog_pars_fragment:dd,gradientmap_pars_fragment:pd,lightmap_pars_fragment:md,lights_lambert_fragment:gd,lights_lambert_pars_fragment:vd,lights_pars_begin:xd,lights_toon_fragment:Md,lights_toon_pars_fragment:yd,lights_phong_fragment:Sd,lights_phong_pars_fragment:Ed,lights_physical_fragment:bd,lights_physical_pars_fragment:wd,lights_fragment_begin:Td,lights_fragment_maps:Ad,lights_fragment_end:Cd,logdepthbuf_fragment:Rd,logdepthbuf_pars_fragment:Pd,logdepthbuf_pars_vertex:Dd,logdepthbuf_vertex:Ld,map_fragment:Ud,map_pars_fragment:Id,map_particle_fragment:Nd,map_particle_pars_fragment:Fd,metalnessmap_fragment:zd,metalnessmap_pars_fragment:Od,morphinstance_vertex:Bd,morphcolor_vertex:kd,morphnormal_vertex:Vd,morphtarget_pars_vertex:Gd,morphtarget_vertex:Hd,normal_fragment_begin:Wd,normal_fragment_maps:Xd,normal_pars_fragment:qd,normal_pars_vertex:Yd,normal_vertex:$d,normalmap_pars_fragment:jd,clearcoat_normal_fragment_begin:Zd,clearcoat_normal_fragment_maps:Kd,clearcoat_pars_fragment:Jd,iridescence_pars_fragment:Qd,opaque_fragment:tp,packing:ep,premultiplied_alpha_fragment:np,project_vertex:ip,dithering_fragment:sp,dithering_pars_fragment:rp,roughnessmap_fragment:ap,roughnessmap_pars_fragment:op,shadowmap_pars_fragment:lp,shadowmap_pars_vertex:cp,shadowmap_vertex:hp,shadowmask_pars_fragment:up,skinbase_vertex:fp,skinning_pars_vertex:dp,skinning_vertex:pp,skinnormal_vertex:mp,specularmap_fragment:gp,specularmap_pars_fragment:vp,tonemapping_fragment:xp,tonemapping_pars_fragment:_p,transmission_fragment:Mp,transmission_pars_fragment:yp,uv_pars_fragment:Sp,uv_pars_vertex:Ep,uv_vertex:bp,worldpos_vertex:wp,background_vert:Tp,background_frag:Ap,backgroundCube_vert:Cp,backgroundCube_frag:Rp,cube_vert:Pp,cube_frag:Dp,depth_vert:Lp,depth_frag:Up,distanceRGBA_vert:Ip,distanceRGBA_frag:Np,equirect_vert:Fp,equirect_frag:zp,linedashed_vert:Op,linedashed_frag:Bp,meshbasic_vert:kp,meshbasic_frag:Vp,meshlambert_vert:Gp,meshlambert_frag:Hp,meshmatcap_vert:Wp,meshmatcap_frag:Xp,meshnormal_vert:qp,meshnormal_frag:Yp,meshphong_vert:$p,meshphong_frag:jp,meshphysical_vert:Zp,meshphysical_frag:Kp,meshtoon_vert:Jp,meshtoon_frag:Qp,points_vert:tm,points_frag:em,shadow_vert:nm,shadow_frag:im,sprite_vert:sm,sprite_frag:rm},yt={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},qn={basic:{uniforms:hn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:hn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new gt(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:hn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:hn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:hn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new gt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:hn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:hn([yt.points,yt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:hn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:hn([yt.common,yt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:hn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:hn([yt.sprite,yt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:hn([yt.common,yt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:hn([yt.lights,yt.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};qn.physical={uniforms:hn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const Pr={r:0,b:0,g:0},zi=new Zn,am=new fe;function om(i,t,e,n,s,r,a){const o=new gt(0);let l=r===!0?0:1,c,u,h=null,p=0,d=null;function g(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?e:t).get(M)),M}function x(_){let M=!1;const v=g(_);v===null?f(o,l):v&&v.isColor&&(f(v,1),M=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,M){const v=g(M);v&&(v.isCubeTexture||v.mapping===aa)?(u===void 0&&(u=new Jt(new Tn(1,1,1),new Re({name:"BackgroundCubeMaterial",uniforms:Ts(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),zi.copy(M.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(am.makeRotationFromEuler(zi)),u.material.toneMapped=ue.getTransfer(v.colorSpace)!==xe,(h!==v||p!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,p=v.version,d=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Jt(new Gn(2,2),new Re({name:"BackgroundMaterial",uniforms:Ts(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ue.getTransfer(v.colorSpace)!==xe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,p=v.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,M){_.getRGB(Pr,Th(i)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),l=M,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(o,l)},render:x,addToRenderList:m}}function lm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,a=!1;function o(S,R,z,G,N){let B=!1;const q=h(G,z,R);r!==q&&(r=q,c(r.object)),B=d(S,G,z,N),B&&g(S,G,z,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,v(S,R,z,G),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,R,z){const G=z.wireframe===!0;let N=n[S.id];N===void 0&&(N={},n[S.id]=N);let B=N[R.id];B===void 0&&(B={},N[R.id]=B);let q=B[G];return q===void 0&&(q=p(l()),B[G]=q),q}function p(S){const R=[],z=[],G=[];for(let N=0;N<e;N++)R[N]=0,z[N]=0,G[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:G,object:S,attributes:{},index:null}}function d(S,R,z,G){const N=r.attributes,B=R.attributes;let q=0;const Y=z.getAttributes();for(const H in Y)if(Y[H].location>=0){const ct=N[H];let lt=B[H];if(lt===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(lt=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(lt=S.instanceColor)),ct===void 0||ct.attribute!==lt||lt&&ct.data!==lt.data)return!0;q++}return r.attributesNum!==q||r.index!==G}function g(S,R,z,G){const N={},B=R.attributes;let q=0;const Y=z.getAttributes();for(const H in Y)if(Y[H].location>=0){let ct=B[H];ct===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor));const lt={};lt.attribute=ct,ct&&ct.data&&(lt.data=ct.data),N[H]=lt,q++}r.attributes=N,r.attributesNum=q,r.index=G}function x(){const S=r.newAttributes;for(let R=0,z=S.length;R<z;R++)S[R]=0}function m(S){f(S,0)}function f(S,R){const z=r.newAttributes,G=r.enabledAttributes,N=r.attributeDivisors;z[S]=1,G[S]===0&&(i.enableVertexAttribArray(S),G[S]=1),N[S]!==R&&(i.vertexAttribDivisor(S,R),N[S]=R)}function _(){const S=r.newAttributes,R=r.enabledAttributes;for(let z=0,G=R.length;z<G;z++)R[z]!==S[z]&&(i.disableVertexAttribArray(z),R[z]=0)}function M(S,R,z,G,N,B,q){q===!0?i.vertexAttribIPointer(S,R,z,N,B):i.vertexAttribPointer(S,R,z,G,N,B)}function v(S,R,z,G){x();const N=G.attributes,B=z.getAttributes(),q=R.defaultAttributeValues;for(const Y in B){const H=B[Y];if(H.location>=0){let J=N[Y];if(J===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),J!==void 0){const ct=J.normalized,lt=J.itemSize,Ft=t.get(J);if(Ft===void 0)continue;const jt=Ft.buffer,K=Ft.type,ft=Ft.bytesPerElement,At=K===i.INT||K===i.UNSIGNED_INT||J.gpuType===ol;if(J.isInterleavedBufferAttribute){const mt=J.data,Dt=mt.stride,Lt=J.offset;if(mt.isInstancedInterleavedBuffer){for(let Gt=0;Gt<H.locationSize;Gt++)f(H.location+Gt,mt.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Gt=0;Gt<H.locationSize;Gt++)m(H.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let Gt=0;Gt<H.locationSize;Gt++)M(H.location+Gt,lt/H.locationSize,K,ct,Dt*ft,(Lt+lt/H.locationSize*Gt)*ft,At)}else{if(J.isInstancedBufferAttribute){for(let mt=0;mt<H.locationSize;mt++)f(H.location+mt,J.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let mt=0;mt<H.locationSize;mt++)m(H.location+mt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let mt=0;mt<H.locationSize;mt++)M(H.location+mt,lt/H.locationSize,K,ct,lt*ft,lt/H.locationSize*mt*ft,At)}}else if(q!==void 0){const ct=q[Y];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(H.location,ct);break;case 3:i.vertexAttrib3fv(H.location,ct);break;case 4:i.vertexAttrib4fv(H.location,ct);break;default:i.vertexAttrib1fv(H.location,ct)}}}}_()}function w(){D();for(const S in n){const R=n[S];for(const z in R){const G=R[z];for(const N in G)u(G[N].object),delete G[N];delete R[z]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;const R=n[S.id];for(const z in R){const G=R[z];for(const N in G)u(G[N].object),delete G[N];delete R[z]}delete n[S.id]}function P(S){for(const R in n){const z=n[R];if(z[S.id]===void 0)continue;const G=z[S.id];for(const N in G)u(G[N].object),delete G[N];delete z[S.id]}}function D(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function cm(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function l(c,u,h,p){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*p[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function hm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Cn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const D=P===Rn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==jn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==kn&&!D)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:w,maxSamples:C}}function um(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ki,o=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const d=h.length!==0||p||n!==0||s;return s=p,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,p){e=u(h,p,0)},this.setState=function(h,p,d){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const _=r?0:n,M=_*4;let v=f.clippingState||null;l.value=v,v=u(g,p,M,d);for(let w=0;w!==M;++w)v[w]=e[w];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,p,d,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=d+x*4,_=p.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,v=d;M!==x;++M,v+=4)a.copy(h[M]).applyMatrix4(_,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function fm(i){let t=new WeakMap;function e(a,o){return o===xo?a.mapping=bs:o===_o&&(a.mapping=ws),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===xo||o===_o)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ef(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class xl extends Ah{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const xs=4,ac=[.125,.215,.35,.446,.526,.582],Gi=20,Va=new xl,oc=new gt;let Ga=null,Ha=0,Wa=0,Xa=!1;const Vi=(1+Math.sqrt(5))/2,ms=1/Vi,lc=[new I(-Vi,ms,0),new I(Vi,ms,0),new I(-ms,0,Vi),new I(ms,0,Vi),new I(0,Vi,-ms),new I(0,Vi,ms),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class cc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ga=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ga,Ha,Wa),this._renderer.xr.enabled=Xa,t.scissorTest=!1,Dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ga=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Rn,format:Cn,colorSpace:Cs,depthBuffer:!1},s=hc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dm(r)),this._blurMaterial=pm(r,t,e)}return s}_compileMaterial(t){const e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,Va)}_sceneToCubeUV(t,e,n,s){const o=new Mn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(oc),u.toneMapping=Ai,u.autoClear=!1;const d=new Le({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new Jt(new Tn,d);let x=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(oc),x=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):_===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const M=this._cubeSize;Dr(s,_*M,f>2?M:0,M,M),u.setRenderTarget(s),x&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===bs||t.mapping===ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Jt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Dr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Va)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=lc[(s-r-1)%lc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Jt(this._lodPlanes[s],c),p=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Gi-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Gi;m>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const f=[];let _=0;for(let P=0;P<Gi;++P){const D=P/x,y=Math.exp(-D*D/2);f.push(y),P===0?_+=y:P<m&&(_+=2*y)}for(let P=0;P<f.length;P++)f[P]=f[P]/_;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:M}=this;p.dTheta.value=g,p.mipInt.value=M-n;const v=this._sizeLods[s],w=3*v*(s>M-xs?s-M+xs:0),C=4*(this._cubeSize-v);Dr(e,w,C,3*v,2*v),l.setRenderTarget(e),l.render(h,Va)}}function dm(i){const t=[],e=[],n=[];let s=i;const r=i-xs+1+ac.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-xs?l=ac[a-i+xs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,f=1,_=new Float32Array(x*g*d),M=new Float32Array(m*g*d),v=new Float32Array(f*g*d);for(let C=0;C<d;C++){const P=C%3*2/3-1,D=C>2?0:-1,y=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];_.set(y,x*g*C),M.set(p,m*g*C);const S=[C,C,C,C,C,C];v.set(S,f*g*C)}const w=new Ee;w.setAttribute("position",new Ie(_,x)),w.setAttribute("uv",new Ie(M,m)),w.setAttribute("faceIndex",new Ie(v,f)),t.push(w),s>xs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function hc(i,t,e){const n=new mn(i,t,e);return n.texture.mapping=aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function pm(i,t,e){const n=new Float32Array(Gi),s=new I(0,1,0);return new Re({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_l(),fragmentShader:`

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
		`,blending:Ye,depthTest:!1,depthWrite:!1})}function uc(){return new Re({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

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
		`,blending:Ye,depthTest:!1,depthWrite:!1})}function fc(){return new Re({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ye,depthTest:!1,depthWrite:!1})}function _l(){return`

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
	`}function mm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===xo||l===_o,u=l===bs||l===ws;if(c||u){let h=t.get(o);const p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new cc(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new cc(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function gm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Xs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function vm(i,t,e,n){const s={},r=new WeakMap;function a(h){const p=h.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const x=p.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}p.removeEventListener("dispose",a),delete s[p.id];const d=r.get(p);d&&(t.remove(d),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(h,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function l(h){const p=h.attributes;for(const g in p)t.update(p[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const x=d[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(h){const p=[],d=h.index,g=h.attributes.position;let x=0;if(d!==null){const _=d.array;x=d.version;for(let M=0,v=_.length;M<v;M+=3){const w=_[M+0],C=_[M+1],P=_[M+2];p.push(w,C,C,P,P,w)}}else if(g!==void 0){const _=g.array;x=g.version;for(let M=0,v=_.length/3-1;M<v;M+=3){const w=M+0,C=M+1,P=M+2;p.push(w,C,C,P,P,w)}}else return;const m=new(Mh(p)?wh:bh)(p,1);m.version=x;const f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){const p=r.get(h);if(p){const d=h.index;d!==null&&p.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function xm(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,d){i.drawElements(n,d,r,p*a),e.update(d,n,1)}function c(p,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,p*a,g),e.update(d,n,g))}function u(p,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];e.update(m,n,1)}function h(p,d,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)c(p[f]/a,d[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,p,0,x,0,g);let f=0;for(let _=0;_<g;_++)f+=d[_]*x[_];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function _m(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Mm(i,t,e){const n=new WeakMap,s=new ye;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let p=n.get(o);if(p===void 0||p.count!==h){let S=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var d=S;p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let w=o.attributes.position.count*v,C=1;w>t.maxTextureSize&&(C=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const P=new Float32Array(w*C*4*h),D=new Sh(P,w,C,h);D.type=kn,D.needsUpdate=!0;const y=v*4;for(let R=0;R<h;R++){const z=f[R],G=_[R],N=M[R],B=w*C*4*R;for(let q=0;q<z.count;q++){const Y=q*y;g===!0&&(s.fromBufferAttribute(z,q),P[B+Y+0]=s.x,P[B+Y+1]=s.y,P[B+Y+2]=s.z,P[B+Y+3]=0),x===!0&&(s.fromBufferAttribute(G,q),P[B+Y+4]=s.x,P[B+Y+5]=s.y,P[B+Y+6]=s.z,P[B+Y+7]=0),m===!0&&(s.fromBufferAttribute(N,q),P[B+Y+8]=s.x,P[B+Y+9]=s.y,P[B+Y+10]=s.z,P[B+Y+11]=N.itemSize===4?s.w:1)}}p={count:h,texture:D,size:new _t(w,C)},n.set(o,p),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function ym(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Ml extends an{constructor(t,e,n,s,r,a,o,l,c,u=Ms){if(u!==Ms&&u!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ms&&(n=$i),n===void 0&&u===Zi&&(n=ji),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ph=new an,dc=new Ml(1,1),Dh=new Sh,Lh=new lf,Uh=new Ch,pc=[],mc=[],gc=new Float32Array(16),vc=new Float32Array(9),xc=new Float32Array(4);function Ls(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=pc[s];if(r===void 0&&(r=new Float32Array(s),pc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ca(i,t){let e=mc[t];e===void 0&&(e=new Int32Array(t),mc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Sm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function Tm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;xc.set(n),i.uniformMatrix2fv(this.addr,!1,xc),ke(e,n)}}function Am(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;vc.set(n),i.uniformMatrix3fv(this.addr,!1,vc),ke(e,n)}}function Cm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;gc.set(n),i.uniformMatrix4fv(this.addr,!1,gc),ke(e,n)}}function Rm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function Lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function Um(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function zm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(dc.compareFunction=_h,r=dc):r=Ph,e.setTexture2D(t||r,s)}function Om(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Lh,s)}function Bm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Uh,s)}function km(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Dh,s)}function Vm(i){switch(i){case 5126:return Sm;case 35664:return Em;case 35665:return bm;case 35666:return wm;case 35674:return Tm;case 35675:return Am;case 35676:return Cm;case 5124:case 35670:return Rm;case 35667:case 35671:return Pm;case 35668:case 35672:return Dm;case 35669:case 35673:return Lm;case 5125:return Um;case 36294:return Im;case 36295:return Nm;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return km}}function Gm(i,t){i.uniform1fv(this.addr,t)}function Hm(i,t){const e=Ls(t,this.size,2);i.uniform2fv(this.addr,e)}function Wm(i,t){const e=Ls(t,this.size,3);i.uniform3fv(this.addr,e)}function Xm(i,t){const e=Ls(t,this.size,4);i.uniform4fv(this.addr,e)}function qm(i,t){const e=Ls(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ym(i,t){const e=Ls(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $m(i,t){const e=Ls(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jm(i,t){i.uniform1iv(this.addr,t)}function Zm(i,t){i.uniform2iv(this.addr,t)}function Km(i,t){i.uniform3iv(this.addr,t)}function Jm(i,t){i.uniform4iv(this.addr,t)}function Qm(i,t){i.uniform1uiv(this.addr,t)}function t0(i,t){i.uniform2uiv(this.addr,t)}function e0(i,t){i.uniform3uiv(this.addr,t)}function n0(i,t){i.uniform4uiv(this.addr,t)}function i0(i,t,e){const n=this.cache,s=t.length,r=ca(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ph,r[a])}function s0(i,t,e){const n=this.cache,s=t.length,r=ca(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Lh,r[a])}function r0(i,t,e){const n=this.cache,s=t.length,r=ca(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Uh,r[a])}function a0(i,t,e){const n=this.cache,s=t.length,r=ca(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Dh,r[a])}function o0(i){switch(i){case 5126:return Gm;case 35664:return Hm;case 35665:return Wm;case 35666:return Xm;case 35674:return qm;case 35675:return Ym;case 35676:return $m;case 5124:case 35670:return jm;case 35667:case 35671:return Zm;case 35668:case 35672:return Km;case 35669:case 35673:return Jm;case 5125:return Qm;case 36294:return t0;case 36295:return e0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return s0;case 35680:case 36300:case 36308:case 36293:return r0;case 36289:case 36303:case 36311:case 36292:return a0}}class l0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vm(e.type)}}class c0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=o0(e.type)}}class h0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const qa=/(\w+)(\])?(\[|\.)?/g;function _c(i,t){i.seq.push(t),i.map[t.id]=t}function u0(i,t,e){const n=i.name,s=n.length;for(qa.lastIndex=0;;){const r=qa.exec(n),a=qa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){_c(e,c===void 0?new l0(o,i,t):new c0(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new h0(o),_c(e,h)),e=h}}}class Jr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);u0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Mc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const f0=37297;let d0=0;function p0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const yc=new ee;function m0(i){ue._getMatrix(yc,ue.workingColorSpace,i);const t=`mat3( ${yc.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case la:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Sc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+p0(i.getShaderSource(t),a)}else return s}function g0(i,t){const e=m0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function v0(i,t){let e;switch(t){case sh:e="Linear";break;case rh:e="Reinhard";break;case ah:e="Cineon";break;case al:e="ACESFilmic";break;case oh:e="AgX";break;case lh:e="Neutral";break;case wu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Lr=new I;function x0(){ue.getLuminanceCoefficients(Lr);const i=Lr.x.toFixed(4),t=Lr.y.toFixed(4),e=Lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function M0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function y0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function qs(i){return i!==""}function Ec(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const S0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(i){return i.replace(S0,b0)}const E0=new Map;function b0(i,t){let e=ie[t];if(e===void 0){const n=E0.get(t);if(n!==void 0)e=ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Yo(e)}const w0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wc(i){return i.replace(w0,T0)}function T0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function A0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===eh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===nh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ai&&(t="SHADOWMAP_TYPE_VSM"),t}function C0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bs:case ws:t="ENVMAP_TYPE_CUBE";break;case aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function R0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ws:t="ENVMAP_MODE_REFRACTION";break}return t}function P0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case rl:t="ENVMAP_BLENDING_MULTIPLY";break;case Eu:t="ENVMAP_BLENDING_MIX";break;case bu:t="ENVMAP_BLENDING_ADD";break}return t}function D0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function L0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=A0(e),c=C0(e),u=R0(e),h=P0(e),p=D0(e),d=_0(e),g=M0(r),x=s.createProgram();let m,f,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qs).join(`
`),f.length>0&&(f+=`
`)):(m=[Tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),f=[Tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?ie.tonemapping_pars_fragment:"",e.toneMapping!==Ai?v0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,g0("linearToOutputTexel",e.outputColorSpace),x0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qs).join(`
`)),a=Yo(a),a=Ec(a,e),a=bc(a,e),o=Yo(o),o=Ec(o,e),o=bc(o,e),a=wc(a),o=wc(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=_+m+a,v=_+f+o,w=Mc(s,s.VERTEX_SHADER,M),C=Mc(s,s.FRAGMENT_SHADER,v);s.attachShader(x,w),s.attachShader(x,C),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(R){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(x).trim(),G=s.getShaderInfoLog(w).trim(),N=s.getShaderInfoLog(C).trim();let B=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,C);else{const Y=Sc(s,w,"vertex"),H=Sc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+Y+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(G===""||N==="")&&(q=!1);q&&(R.diagnostics={runnable:B,programLog:z,vertexShader:{log:G,prefix:m},fragmentShader:{log:N,prefix:f}})}s.deleteShader(w),s.deleteShader(C),D=new Jr(s,x),y=y0(s,x)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,f0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=d0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=C,this}let U0=0;class I0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new N0(t),e.set(t,n)),n}}class N0{constructor(t){this.id=U0++,this.code=t,this.usedTimes=0}}function F0(i,t,e,n,s,r,a){const o=new gl,l=new I0,c=new Set,u=[],h=s.logarithmicDepthBuffer,p=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,R,z,G){const N=z.fog,B=G.geometry,q=y.isMeshStandardMaterial?z.environment:null,Y=(y.isMeshStandardMaterial?e:t).get(y.envMap||q),H=Y&&Y.mapping===aa?Y.image.height:null,J=g[y.type];y.precision!==null&&(d=s.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ct=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,lt=ct!==void 0?ct.length:0;let Ft=0;B.morphAttributes.position!==void 0&&(Ft=1),B.morphAttributes.normal!==void 0&&(Ft=2),B.morphAttributes.color!==void 0&&(Ft=3);let jt,K,ft,At;if(J){const Ut=qn[J];jt=Ut.vertexShader,K=Ut.fragmentShader}else jt=y.vertexShader,K=y.fragmentShader,l.update(y),ft=l.getVertexShaderID(y),At=l.getFragmentShaderID(y);const mt=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),Lt=G.isInstancedMesh===!0,Gt=G.isBatchedMesh===!0,pe=!!y.map,qt=!!y.matcap,de=!!Y,k=!!y.aoMap,be=!!y.lightMap,Yt=!!y.bumpMap,zt=!!y.normalMap,Bt=!!y.displacementMap,te=!!y.emissiveMap,Nt=!!y.metalnessMap,L=!!y.roughnessMap,b=y.anisotropy>0,X=y.clearcoat>0,it=y.dispersion>0,rt=y.iridescence>0,nt=y.sheen>0,Pt=y.transmission>0,vt=b&&!!y.anisotropyMap,St=X&&!!y.clearcoatMap,$t=X&&!!y.clearcoatNormalMap,at=X&&!!y.clearcoatRoughnessMap,wt=rt&&!!y.iridescenceMap,kt=rt&&!!y.iridescenceThicknessMap,Vt=nt&&!!y.sheenColorMap,Tt=nt&&!!y.sheenRoughnessMap,Kt=!!y.specularMap,Ht=!!y.specularColorMap,se=!!y.specularIntensityMap,O=Pt&&!!y.transmissionMap,pt=Pt&&!!y.thicknessMap,j=!!y.gradientMap,st=!!y.alphaMap,Et=y.alphaTest>0,Mt=!!y.alphaHash,U=!!y.extensions;let tt=Ai;y.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(tt=i.toneMapping);const bt={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:jt,fragmentShader:K,defines:y.defines,customVertexShaderID:ft,customFragmentShaderID:At,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Gt,batchingColor:Gt&&G._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&G.instanceColor!==null,instancingMorph:Lt&&G.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Cs,alphaToCoverage:!!y.alphaToCoverage,map:pe,matcap:qt,envMap:de,envMapMode:de&&Y.mapping,envMapCubeUVHeight:H,aoMap:k,lightMap:be,bumpMap:Yt,normalMap:zt,displacementMap:p&&Bt,emissiveMap:te,normalMapObjectSpace:zt&&y.normalMapType===Ru,normalMapTangentSpace:zt&&y.normalMapType===dl,metalnessMap:Nt,roughnessMap:L,anisotropy:b,anisotropyMap:vt,clearcoat:X,clearcoatMap:St,clearcoatNormalMap:$t,clearcoatRoughnessMap:at,dispersion:it,iridescence:rt,iridescenceMap:wt,iridescenceThicknessMap:kt,sheen:nt,sheenColorMap:Vt,sheenRoughnessMap:Tt,specularMap:Kt,specularColorMap:Ht,specularIntensityMap:se,transmission:Pt,transmissionMap:O,thicknessMap:pt,gradientMap:j,opaque:y.transparent===!1&&y.blending===Ti&&y.alphaToCoverage===!1,alphaMap:st,alphaTest:Et,alphaHash:Mt,combine:y.combine,mapUv:pe&&x(y.map.channel),aoMapUv:k&&x(y.aoMap.channel),lightMapUv:be&&x(y.lightMap.channel),bumpMapUv:Yt&&x(y.bumpMap.channel),normalMapUv:zt&&x(y.normalMap.channel),displacementMapUv:Bt&&x(y.displacementMap.channel),emissiveMapUv:te&&x(y.emissiveMap.channel),metalnessMapUv:Nt&&x(y.metalnessMap.channel),roughnessMapUv:L&&x(y.roughnessMap.channel),anisotropyMapUv:vt&&x(y.anisotropyMap.channel),clearcoatMapUv:St&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:$t&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&x(y.sheenRoughnessMap.channel),specularMapUv:Kt&&x(y.specularMap.channel),specularColorMapUv:Ht&&x(y.specularColorMap.channel),specularIntensityMapUv:se&&x(y.specularIntensityMap.channel),transmissionMapUv:O&&x(y.transmissionMap.channel),thicknessMapUv:pt&&x(y.thicknessMap.channel),alphaMapUv:st&&x(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(zt||b),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!B.attributes.uv&&(pe||st),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Dt,skinning:G.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Ft,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,decodeVideoTexture:pe&&y.map.isVideoTexture===!0&&ue.getTransfer(y.map.colorSpace)===xe,decodeVideoTextureEmissive:te&&y.emissiveMap.isVideoTexture===!0&&ue.getTransfer(y.emissiveMap.colorSpace)===xe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===He,flipSided:y.side===pn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:U&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(U&&y.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function f(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)S.push(R),S.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(_(S,y),M(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function _(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function M(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){const S=g[y.type];let R;if(S){const z=qn[S];R=On.clone(z.uniforms)}else R=y.uniforms;return R}function w(y,S){let R;for(let z=0,G=u.length;z<G;z++){const N=u[z];if(N.cacheKey===S){R=N,++R.usedTimes;break}}return R===void 0&&(R=new L0(i,S,y,r),u.push(R)),R}function C(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function P(y){l.remove(y)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:w,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:D}}function z0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function O0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ac(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Cc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,p,d,g,x,m){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:p,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[t]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=m),t++,f}function o(h,p,d,g,x,m){const f=a(h,p,d,g,x,m);d.transmission>0?n.push(f):d.transparent===!0?s.push(f):e.push(f)}function l(h,p,d,g,x,m){const f=a(h,p,d,g,x,m);d.transmission>0?n.unshift(f):d.transparent===!0?s.unshift(f):e.unshift(f)}function c(h,p){e.length>1&&e.sort(h||O0),n.length>1&&n.sort(p||Ac),s.length>1&&s.sort(p||Ac)}function u(){for(let h=t,p=i.length;h<p;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function B0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Cc,i.set(n,[a])):s>=r.length?(a=new Cc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function k0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new gt};break;case"SpotLight":e={position:new I,direction:new I,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":e={color:new gt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function V0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let G0=0;function H0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function W0(i){const t=new k0,e=V0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new fe,a=new fe;function o(c){let u=0,h=0,p=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,g=0,x=0,m=0,f=0,_=0,M=0,v=0,w=0,C=0,P=0;c.sort(H0);for(let y=0,S=c.length;y<S;y++){const R=c[y],z=R.color,G=R.intensity,N=R.distance,B=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=z.r*G,h+=z.g*G,p+=z.b*G;else if(R.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(R.sh.coefficients[q],G);P++}else if(R.isDirectionalLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Y=R.shadow,H=e.get(R);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=B,n.directionalShadowMatrix[d]=R.shadow.matrix,_++}n.directional[d]=q,d++}else if(R.isSpotLight){const q=t.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(z).multiplyScalar(G),q.distance=N,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,n.spot[x]=q;const Y=R.shadow;if(R.map&&(n.spotLightMap[w]=R.map,w++,Y.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[x]=Y.matrix,R.castShadow){const H=e.get(R);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=B,v++}x++}else if(R.isRectAreaLight){const q=t.get(R);q.color.copy(z).multiplyScalar(G),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=q,m++}else if(R.isPointLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){const Y=R.shadow,H=e.get(R);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=R.shadow.matrix,M++}n.point[g]=q,g++}else if(R.isHemisphereLight){const q=t.get(R);q.skyColor.copy(R.color).multiplyScalar(G),q.groundColor.copy(R.groundColor).multiplyScalar(G),n.hemi[f]=q,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=p;const D=n.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==_||D.numPointShadows!==M||D.numSpotShadows!==v||D.numSpotMaps!==w||D.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+w-C,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,D.directionalLength=d,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=_,D.numPointShadows=M,D.numSpotShadows=v,D.numSpotMaps=w,D.numLightProbes=P,n.version=G0++)}function l(c,u){let h=0,p=0,d=0,g=0,x=0;const m=u.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){const M=c[f];if(M.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(M.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const v=n.point[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Rc(i){const t=new W0(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function X0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Rc(i),t.set(s,[o])):r>=a.length?(o=new Rc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class q0 extends Qi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Y0 extends Qi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j0=`uniform sampler2D shadow_pass;
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
}`;function Z0(i,t,e){let n=new vl;const s=new _t,r=new _t,a=new ye,o=new q0({depthPacking:Cu}),l=new Y0,c={},u=e.maxTextureSize,h={[Pi]:pn,[pn]:Pi,[He]:He},p=new Re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:$0,fragmentShader:j0}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ee;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Jt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eh;let f=this.type;this.render=function(C,P,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const y=i.getRenderTarget(),S=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Ye),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const G=f!==ai&&this.type===ai,N=f===ai&&this.type!==ai;for(let B=0,q=C.length;B<q;B++){const Y=C[B],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const J=H.getFrameExtents();if(s.multiply(J),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,H.mapSize.y=r.y)),H.map===null||G===!0||N===!0){const lt=this.type!==ai?{minFilter:rn,magFilter:rn}:{};H.map!==null&&H.map.dispose(),H.map=new mn(s.x,s.y,lt),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ct=H.getViewportCount();for(let lt=0;lt<ct;lt++){const Ft=H.getViewport(lt);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),z.viewport(a),H.updateMatrices(Y,lt),n=H.getFrustum(),v(P,D,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===ai&&_(H,D),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,S,R)};function _(C,P){const D=t.update(x);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new mn(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(P,null,D,p,x,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(P,null,D,d,x,null)}function M(C,P,D,y){let S=null;const R=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)S=R;else if(S=D.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const z=S.uuid,G=P.uuid;let N=c[z];N===void 0&&(N={},c[z]=N);let B=N[G];B===void 0&&(B=S.clone(),N[G]=B,P.addEventListener("dispose",w)),S=B}if(S.visible=P.visible,S.wireframe=P.wireframe,y===ai?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:h[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=i.properties.get(S);z.light=D}return S}function v(C,P,D,y,S){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===ai)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const G=t.update(C),N=C.material;if(Array.isArray(N)){const B=G.groups;for(let q=0,Y=B.length;q<Y;q++){const H=B[q],J=N[H.materialIndex];if(J&&J.visible){const ct=M(C,J,y,S);C.onBeforeShadow(i,C,P,D,G,ct,H),i.renderBufferDirect(D,null,G,ct,C,H),C.onAfterShadow(i,C,P,D,G,ct,H)}}}else if(N.visible){const B=M(C,N,y,S);C.onBeforeShadow(i,C,P,D,G,B,null),i.renderBufferDirect(D,null,G,B,C,null),C.onAfterShadow(i,C,P,D,G,B,null)}}const z=C.children;for(let G=0,N=z.length;G<N;G++)v(z[G],P,D,y,S)}function w(C){C.target.removeEventListener("dispose",w);for(const D in c){const y=c[D],S=C.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const K0={[ho]:uo,[fo]:go,[po]:vo,[Es]:mo,[uo]:ho,[go]:fo,[vo]:po,[mo]:Es};function J0(i,t){function e(){let O=!1;const pt=new ye;let j=null;const st=new ye(0,0,0,0);return{setMask:function(Et){j!==Et&&!O&&(i.colorMask(Et,Et,Et,Et),j=Et)},setLocked:function(Et){O=Et},setClear:function(Et,Mt,U,tt,bt){bt===!0&&(Et*=tt,Mt*=tt,U*=tt),pt.set(Et,Mt,U,tt),st.equals(pt)===!1&&(i.clearColor(Et,Mt,U,tt),st.copy(pt))},reset:function(){O=!1,j=null,st.set(-1,0,0,0)}}}function n(){let O=!1,pt=!1,j=null,st=null,Et=null;return{setReversed:function(Mt){if(pt!==Mt){const U=t.get("EXT_clip_control");pt?U.clipControlEXT(U.LOWER_LEFT_EXT,U.ZERO_TO_ONE_EXT):U.clipControlEXT(U.LOWER_LEFT_EXT,U.NEGATIVE_ONE_TO_ONE_EXT);const tt=Et;Et=null,this.setClear(tt)}pt=Mt},getReversed:function(){return pt},setTest:function(Mt){Mt?mt(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(Mt){j!==Mt&&!O&&(i.depthMask(Mt),j=Mt)},setFunc:function(Mt){if(pt&&(Mt=K0[Mt]),st!==Mt){switch(Mt){case ho:i.depthFunc(i.NEVER);break;case uo:i.depthFunc(i.ALWAYS);break;case fo:i.depthFunc(i.LESS);break;case Es:i.depthFunc(i.LEQUAL);break;case po:i.depthFunc(i.EQUAL);break;case mo:i.depthFunc(i.GEQUAL);break;case go:i.depthFunc(i.GREATER);break;case vo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=Mt}},setLocked:function(Mt){O=Mt},setClear:function(Mt){Et!==Mt&&(pt&&(Mt=1-Mt),i.clearDepth(Mt),Et=Mt)},reset:function(){O=!1,j=null,st=null,Et=null,pt=!1}}}function s(){let O=!1,pt=null,j=null,st=null,Et=null,Mt=null,U=null,tt=null,bt=null;return{setTest:function(Ut){O||(Ut?mt(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(Ut){pt!==Ut&&!O&&(i.stencilMask(Ut),pt=Ut)},setFunc:function(Ut,re,Zt){(j!==Ut||st!==re||Et!==Zt)&&(i.stencilFunc(Ut,re,Zt),j=Ut,st=re,Et=Zt)},setOp:function(Ut,re,Zt){(Mt!==Ut||U!==re||tt!==Zt)&&(i.stencilOp(Ut,re,Zt),Mt=Ut,U=re,tt=Zt)},setLocked:function(Ut){O=Ut},setClear:function(Ut){bt!==Ut&&(i.clearStencil(Ut),bt=Ut)},reset:function(){O=!1,pt=null,j=null,st=null,Et=null,Mt=null,U=null,tt=null,bt=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},p=new WeakMap,d=[],g=null,x=!1,m=null,f=null,_=null,M=null,v=null,w=null,C=null,P=new gt(0,0,0),D=0,y=!1,S=null,R=null,z=null,G=null,N=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Y=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=Y>=2);let J=null,ct={};const lt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),jt=new ye().fromArray(lt),K=new ye().fromArray(Ft);function ft(O,pt,j,st){const Et=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(O,Mt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let U=0;U<j;U++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(pt+U,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return Mt}const At={};At[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),mt(i.DEPTH_TEST),a.setFunc(Es),Yt(!1),zt(Ul),mt(i.CULL_FACE),k(Ye);function mt(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function Dt(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function Lt(O,pt){return h[O]!==pt?(i.bindFramebuffer(O,pt),h[O]=pt,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pt),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Gt(O,pt){let j=d,st=!1;if(O){j=p.get(pt),j===void 0&&(j=[],p.set(pt,j));const Et=O.textures;if(j.length!==Et.length||j[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,U=Et.length;Mt<U;Mt++)j[Mt]=i.COLOR_ATTACHMENT0+Mt;j.length=Et.length,st=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,st=!0);st&&i.drawBuffers(j)}function pe(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const qt={[Fn]:i.FUNC_ADD,[cu]:i.FUNC_SUBTRACT,[hu]:i.FUNC_REVERSE_SUBTRACT};qt[uu]=i.MIN,qt[fu]=i.MAX;const de={[Ws]:i.ZERO,[du]:i.ONE,[pu]:i.SRC_COLOR,[ao]:i.SRC_ALPHA,[xu]:i.SRC_ALPHA_SATURATE,[co]:i.DST_COLOR,[lo]:i.DST_ALPHA,[mu]:i.ONE_MINUS_SRC_COLOR,[oo]:i.ONE_MINUS_SRC_ALPHA,[vu]:i.ONE_MINUS_DST_COLOR,[gu]:i.ONE_MINUS_DST_ALPHA,[_u]:i.CONSTANT_COLOR,[Mu]:i.ONE_MINUS_CONSTANT_COLOR,[yu]:i.CONSTANT_ALPHA,[Su]:i.ONE_MINUS_CONSTANT_ALPHA};function k(O,pt,j,st,Et,Mt,U,tt,bt,Ut){if(O===Ye){x===!0&&(Dt(i.BLEND),x=!1);return}if(x===!1&&(mt(i.BLEND),x=!0),O!==ih){if(O!==m||Ut!==y){if((f!==Fn||v!==Fn)&&(i.blendEquation(i.FUNC_ADD),f=Fn,v=Fn),Ut)switch(O){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fi:i.blendFunc(i.ONE,i.ONE);break;case Il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}_=null,M=null,w=null,C=null,P.set(0,0,0),D=0,m=O,y=Ut}return}Et=Et||pt,Mt=Mt||j,U=U||st,(pt!==f||Et!==v)&&(i.blendEquationSeparate(qt[pt],qt[Et]),f=pt,v=Et),(j!==_||st!==M||Mt!==w||U!==C)&&(i.blendFuncSeparate(de[j],de[st],de[Mt],de[U]),_=j,M=st,w=Mt,C=U),(tt.equals(P)===!1||bt!==D)&&(i.blendColor(tt.r,tt.g,tt.b,bt),P.copy(tt),D=bt),m=O,y=!1}function be(O,pt){O.side===He?Dt(i.CULL_FACE):mt(i.CULL_FACE);let j=O.side===pn;pt&&(j=!j),Yt(j),O.blending===Ti&&O.transparent===!1?k(Ye):k(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const st=O.stencilWrite;o.setTest(st),st&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),te(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(O){S!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),S=O)}function zt(O){O!==ou?(mt(i.CULL_FACE),O!==R&&(O===Ul?i.cullFace(i.BACK):O===lu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),R=O}function Bt(O){O!==z&&(q&&i.lineWidth(O),z=O)}function te(O,pt,j){O?(mt(i.POLYGON_OFFSET_FILL),(G!==pt||N!==j)&&(i.polygonOffset(pt,j),G=pt,N=j)):Dt(i.POLYGON_OFFSET_FILL)}function Nt(O){O?mt(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function L(O){O===void 0&&(O=i.TEXTURE0+B-1),J!==O&&(i.activeTexture(O),J=O)}function b(O,pt,j){j===void 0&&(J===null?j=i.TEXTURE0+B-1:j=J);let st=ct[j];st===void 0&&(st={type:void 0,texture:void 0},ct[j]=st),(st.type!==O||st.texture!==pt)&&(J!==j&&(i.activeTexture(j),J=j),i.bindTexture(O,pt||At[O]),st.type=O,st.texture=pt)}function X(){const O=ct[J];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function it(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Vt(O){jt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),jt.copy(O))}function Tt(O){K.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),K.copy(O))}function Kt(O,pt){let j=c.get(pt);j===void 0&&(j=new WeakMap,c.set(pt,j));let st=j.get(O);st===void 0&&(st=i.getUniformBlockIndex(pt,O.name),j.set(O,st))}function Ht(O,pt){const st=c.get(pt).get(O);l.get(pt)!==st&&(i.uniformBlockBinding(pt,st,O.__bindingPointIndex),l.set(pt,st))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},J=null,ct={},h={},p=new WeakMap,d=[],g=null,x=!1,m=null,f=null,_=null,M=null,v=null,w=null,C=null,P=new gt(0,0,0),D=0,y=!1,S=null,R=null,z=null,G=null,N=null,jt.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:mt,disable:Dt,bindFramebuffer:Lt,drawBuffers:Gt,useProgram:pe,setBlending:k,setMaterial:be,setFlipSided:Yt,setCullFace:zt,setLineWidth:Bt,setPolygonOffset:te,setScissorTest:Nt,activeTexture:L,bindTexture:b,unbindTexture:X,compressedTexImage2D:it,compressedTexImage3D:rt,texImage2D:wt,texImage3D:kt,updateUBOMapping:Kt,uniformBlockBinding:Ht,texStorage2D:$t,texStorage3D:at,texSubImage2D:nt,texSubImage3D:Pt,compressedTexSubImage2D:vt,compressedTexSubImage3D:St,scissor:Vt,viewport:Tt,reset:se}}function Pc(i,t,e,n){const s=Q0(n);switch(e){case dh:return i*t;case mh:return i*t;case gh:return i*t*2;case oa:return i*t/s.components*s.byteLength;case hl:return i*t/s.components*s.byteLength;case vh:return i*t*2/s.components*s.byteLength;case ul:return i*t*2/s.components*s.byteLength;case ph:return i*t*3/s.components*s.byteLength;case Cn:return i*t*4/s.components*s.byteLength;case fl:return i*t*4/s.components*s.byteLength;case Yr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jr:case Zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:case bo:return Math.max(i,16)*Math.max(t,8)/4;case yo:case Eo:return Math.max(i,8)*Math.max(t,8)/2;case wo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case No:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ko:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Vo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Kr:case Go:case Ho:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xh:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xo:case qo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Q0(i){switch(i){case jn:case hh:return{byteLength:1,components:1};case er:case uh:case Rn:return{byteLength:2,components:1};case ll:case cl:return{byteLength:2,components:4};case $i:case ol:case kn:return{byteLength:4,components:1};case fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function tg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,u=new WeakMap;let h;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,b){return d?new OffscreenCanvas(L,b):na("canvas")}function x(L,b,X){let it=1;const rt=Nt(L);if((rt.width>X||rt.height>X)&&(it=X/Math.max(rt.width,rt.height)),it<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const nt=Math.floor(it*rt.width),Pt=Math.floor(it*rt.height);h===void 0&&(h=g(nt,Pt));const vt=b?g(nt,Pt):h;return vt.width=nt,vt.height=Pt,vt.getContext("2d").drawImage(L,0,0,nt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+nt+"x"+Pt+")."),vt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),L;return L}function m(L){return L.generateMipmaps}function f(L){i.generateMipmap(L)}function _(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(L,b,X,it,rt=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let nt=b;if(b===i.RED&&(X===i.FLOAT&&(nt=i.R32F),X===i.HALF_FLOAT&&(nt=i.R16F),X===i.UNSIGNED_BYTE&&(nt=i.R8)),b===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(nt=i.R8UI),X===i.UNSIGNED_SHORT&&(nt=i.R16UI),X===i.UNSIGNED_INT&&(nt=i.R32UI),X===i.BYTE&&(nt=i.R8I),X===i.SHORT&&(nt=i.R16I),X===i.INT&&(nt=i.R32I)),b===i.RG&&(X===i.FLOAT&&(nt=i.RG32F),X===i.HALF_FLOAT&&(nt=i.RG16F),X===i.UNSIGNED_BYTE&&(nt=i.RG8)),b===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(nt=i.RG8UI),X===i.UNSIGNED_SHORT&&(nt=i.RG16UI),X===i.UNSIGNED_INT&&(nt=i.RG32UI),X===i.BYTE&&(nt=i.RG8I),X===i.SHORT&&(nt=i.RG16I),X===i.INT&&(nt=i.RG32I)),b===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),X===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),X===i.UNSIGNED_INT&&(nt=i.RGB32UI),X===i.BYTE&&(nt=i.RGB8I),X===i.SHORT&&(nt=i.RGB16I),X===i.INT&&(nt=i.RGB32I)),b===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),X===i.UNSIGNED_INT&&(nt=i.RGBA32UI),X===i.BYTE&&(nt=i.RGBA8I),X===i.SHORT&&(nt=i.RGBA16I),X===i.INT&&(nt=i.RGBA32I)),b===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),b===i.RGBA){const Pt=rt?la:ue.getTransfer(it);X===i.FLOAT&&(nt=i.RGBA32F),X===i.HALF_FLOAT&&(nt=i.RGBA16F),X===i.UNSIGNED_BYTE&&(nt=Pt===xe?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function v(L,b){let X;return L?b===null||b===$i||b===ji?X=i.DEPTH24_STENCIL8:b===kn?X=i.DEPTH32F_STENCIL8:b===er&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===$i||b===ji?X=i.DEPTH_COMPONENT24:b===kn?X=i.DEPTH_COMPONENT32F:b===er&&(X=i.DEPTH_COMPONENT16),X}function w(L,b){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==rn&&L.minFilter!==Yn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function C(L){const b=L.target;b.removeEventListener("dispose",C),D(b),b.isVideoTexture&&u.delete(b)}function P(L){const b=L.target;b.removeEventListener("dispose",P),S(b)}function D(L){const b=n.get(L);if(b.__webglInit===void 0)return;const X=L.source,it=p.get(X);if(it){const rt=it[b.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&y(L),Object.keys(it).length===0&&p.delete(X)}n.remove(L)}function y(L){const b=n.get(L);i.deleteTexture(b.__webglTexture);const X=L.source,it=p.get(X);delete it[b.__cacheKey],a.memory.textures--}function S(L){const b=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(b.__webglFramebuffer[it]))for(let rt=0;rt<b.__webglFramebuffer[it].length;rt++)i.deleteFramebuffer(b.__webglFramebuffer[it][rt]);else i.deleteFramebuffer(b.__webglFramebuffer[it]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[it])}else{if(Array.isArray(b.__webglFramebuffer))for(let it=0;it<b.__webglFramebuffer.length;it++)i.deleteFramebuffer(b.__webglFramebuffer[it]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let it=0;it<b.__webglColorRenderbuffer.length;it++)b.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[it]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const X=L.textures;for(let it=0,rt=X.length;it<rt;it++){const nt=n.get(X[it]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),a.memory.textures--),n.remove(X[it])}n.remove(L)}let R=0;function z(){R=0}function G(){const L=R;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),R+=1,L}function N(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function B(L,b){const X=n.get(L);if(L.isVideoTexture&&Bt(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const it=L.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(X,L,b);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+b)}function q(L,b){const X=n.get(L);if(L.version>0&&X.__version!==L.version){K(X,L,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+b)}function Y(L,b){const X=n.get(L);if(L.version>0&&X.__version!==L.version){K(X,L,b);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+b)}function H(L,b){const X=n.get(L);if(L.version>0&&X.__version!==L.version){ft(X,L,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+b)}const J={[di]:i.REPEAT,[Hi]:i.CLAMP_TO_EDGE,[Mo]:i.MIRRORED_REPEAT},ct={[rn]:i.NEAREST,[Tu]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[Yn]:i.LINEAR,[Ma]:i.LINEAR_MIPMAP_NEAREST,[Wi]:i.LINEAR_MIPMAP_LINEAR},lt={[Pu]:i.NEVER,[Fu]:i.ALWAYS,[Du]:i.LESS,[_h]:i.LEQUAL,[Lu]:i.EQUAL,[Nu]:i.GEQUAL,[Uu]:i.GREATER,[Iu]:i.NOTEQUAL};function Ft(L,b){if(b.type===kn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Yn||b.magFilter===Ma||b.magFilter===fr||b.magFilter===Wi||b.minFilter===Yn||b.minFilter===Ma||b.minFilter===fr||b.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,J[b.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,J[b.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,J[b.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ct[b.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ct[b.minFilter]),b.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,lt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===rn||b.minFilter!==fr&&b.minFilter!==Wi||b.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function jt(L,b){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",C));const it=b.source;let rt=p.get(it);rt===void 0&&(rt={},p.set(it,rt));const nt=N(b);if(nt!==L.__cacheKey){rt[nt]===void 0&&(rt[nt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),rt[nt].usedTimes++;const Pt=rt[L.__cacheKey];Pt!==void 0&&(rt[L.__cacheKey].usedTimes--,Pt.usedTimes===0&&y(b)),L.__cacheKey=nt,L.__webglTexture=rt[nt].texture}return X}function K(L,b,X){let it=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(it=i.TEXTURE_3D);const rt=jt(L,b),nt=b.source;e.bindTexture(it,L.__webglTexture,i.TEXTURE0+X);const Pt=n.get(nt);if(nt.version!==Pt.__version||rt===!0){e.activeTexture(i.TEXTURE0+X);const vt=ue.getPrimaries(ue.workingColorSpace),St=b.colorSpace===Ei?null:ue.getPrimaries(b.colorSpace),$t=b.colorSpace===Ei||vt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let at=x(b.image,!1,s.maxTextureSize);at=te(b,at);const wt=r.convert(b.format,b.colorSpace),kt=r.convert(b.type);let Vt=M(b.internalFormat,wt,kt,b.colorSpace,b.isVideoTexture);Ft(it,b);let Tt;const Kt=b.mipmaps,Ht=b.isVideoTexture!==!0,se=Pt.__version===void 0||rt===!0,O=nt.dataReady,pt=w(b,at);if(b.isDepthTexture)Vt=v(b.format===Zi,b.type),se&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Vt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Vt,at.width,at.height,0,wt,kt,null));else if(b.isDataTexture)if(Kt.length>0){Ht&&se&&e.texStorage2D(i.TEXTURE_2D,pt,Vt,Kt[0].width,Kt[0].height);for(let j=0,st=Kt.length;j<st;j++)Tt=Kt[j],Ht?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Tt.width,Tt.height,wt,kt,Tt.data):e.texImage2D(i.TEXTURE_2D,j,Vt,Tt.width,Tt.height,0,wt,kt,Tt.data);b.generateMipmaps=!1}else Ht?(se&&e.texStorage2D(i.TEXTURE_2D,pt,Vt,at.width,at.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,wt,kt,at.data)):e.texImage2D(i.TEXTURE_2D,0,Vt,at.width,at.height,0,wt,kt,at.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ht&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Vt,Kt[0].width,Kt[0].height,at.depth);for(let j=0,st=Kt.length;j<st;j++)if(Tt=Kt[j],b.format!==Cn)if(wt!==null)if(Ht){if(O)if(b.layerUpdates.size>0){const Et=Pc(Tt.width,Tt.height,b.format,b.type);for(const Mt of b.layerUpdates){const U=Tt.data.subarray(Mt*Et/Tt.data.BYTES_PER_ELEMENT,(Mt+1)*Et/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Mt,Tt.width,Tt.height,1,wt,U)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Tt.width,Tt.height,at.depth,wt,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Vt,Tt.width,Tt.height,at.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Tt.width,Tt.height,at.depth,wt,kt,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Vt,Tt.width,Tt.height,at.depth,0,wt,kt,Tt.data)}else{Ht&&se&&e.texStorage2D(i.TEXTURE_2D,pt,Vt,Kt[0].width,Kt[0].height);for(let j=0,st=Kt.length;j<st;j++)Tt=Kt[j],b.format!==Cn?wt!==null?Ht?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Tt.width,Tt.height,wt,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Vt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Tt.width,Tt.height,wt,kt,Tt.data):e.texImage2D(i.TEXTURE_2D,j,Vt,Tt.width,Tt.height,0,wt,kt,Tt.data)}else if(b.isDataArrayTexture)if(Ht){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Vt,at.width,at.height,at.depth),O)if(b.layerUpdates.size>0){const j=Pc(at.width,at.height,b.format,b.type);for(const st of b.layerUpdates){const Et=at.data.subarray(st*j/at.data.BYTES_PER_ELEMENT,(st+1)*j/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,at.width,at.height,1,wt,kt,Et)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,wt,kt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,at.width,at.height,at.depth,0,wt,kt,at.data);else if(b.isData3DTexture)Ht?(se&&e.texStorage3D(i.TEXTURE_3D,pt,Vt,at.width,at.height,at.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,wt,kt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,at.width,at.height,at.depth,0,wt,kt,at.data);else if(b.isFramebufferTexture){if(se)if(Ht)e.texStorage2D(i.TEXTURE_2D,pt,Vt,at.width,at.height);else{let j=at.width,st=at.height;for(let Et=0;Et<pt;Et++)e.texImage2D(i.TEXTURE_2D,Et,Vt,j,st,0,wt,kt,null),j>>=1,st>>=1}}else if(Kt.length>0){if(Ht&&se){const j=Nt(Kt[0]);e.texStorage2D(i.TEXTURE_2D,pt,Vt,j.width,j.height)}for(let j=0,st=Kt.length;j<st;j++)Tt=Kt[j],Ht?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,wt,kt,Tt):e.texImage2D(i.TEXTURE_2D,j,Vt,wt,kt,Tt);b.generateMipmaps=!1}else if(Ht){if(se){const j=Nt(at);e.texStorage2D(i.TEXTURE_2D,pt,Vt,j.width,j.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,kt,at)}else e.texImage2D(i.TEXTURE_2D,0,Vt,wt,kt,at);m(b)&&f(it),Pt.__version=nt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ft(L,b,X){if(b.image.length!==6)return;const it=jt(L,b),rt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+X);const nt=n.get(rt);if(rt.version!==nt.__version||it===!0){e.activeTexture(i.TEXTURE0+X);const Pt=ue.getPrimaries(ue.workingColorSpace),vt=b.colorSpace===Ei?null:ue.getPrimaries(b.colorSpace),St=b.colorSpace===Ei||Pt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const $t=b.isCompressedTexture||b.image[0].isCompressedTexture,at=b.image[0]&&b.image[0].isDataTexture,wt=[];for(let st=0;st<6;st++)!$t&&!at?wt[st]=x(b.image[st],!0,s.maxCubemapSize):wt[st]=at?b.image[st].image:b.image[st],wt[st]=te(b,wt[st]);const kt=wt[0],Vt=r.convert(b.format,b.colorSpace),Tt=r.convert(b.type),Kt=M(b.internalFormat,Vt,Tt,b.colorSpace),Ht=b.isVideoTexture!==!0,se=nt.__version===void 0||it===!0,O=rt.dataReady;let pt=w(b,kt);Ft(i.TEXTURE_CUBE_MAP,b);let j;if($t){Ht&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Kt,kt.width,kt.height);for(let st=0;st<6;st++){j=wt[st].mipmaps;for(let Et=0;Et<j.length;Et++){const Mt=j[Et];b.format!==Cn?Vt!==null?Ht?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,0,0,Mt.width,Mt.height,Vt,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,Kt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,0,0,Mt.width,Mt.height,Vt,Tt,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et,Kt,Mt.width,Mt.height,0,Vt,Tt,Mt.data)}}}else{if(j=b.mipmaps,Ht&&se){j.length>0&&pt++;const st=Nt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Kt,st.width,st.height)}for(let st=0;st<6;st++)if(at){Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,wt[st].width,wt[st].height,Vt,Tt,wt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Kt,wt[st].width,wt[st].height,0,Vt,Tt,wt[st].data);for(let Et=0;Et<j.length;Et++){const U=j[Et].image[st].image;Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,0,0,U.width,U.height,Vt,Tt,U.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,Kt,U.width,U.height,0,Vt,Tt,U.data)}}else{Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Vt,Tt,wt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Kt,Vt,Tt,wt[st]);for(let Et=0;Et<j.length;Et++){const Mt=j[Et];Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,0,0,Vt,Tt,Mt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Et+1,Kt,Vt,Tt,Mt.image[st])}}}m(b)&&f(i.TEXTURE_CUBE_MAP),nt.__version=rt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function At(L,b,X,it,rt,nt){const Pt=r.convert(X.format,X.colorSpace),vt=r.convert(X.type),St=M(X.internalFormat,Pt,vt,X.colorSpace),$t=n.get(b),at=n.get(X);if(at.__renderTarget=b,!$t.__hasExternalTextures){const wt=Math.max(1,b.width>>nt),kt=Math.max(1,b.height>>nt);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,nt,St,wt,kt,b.depth,0,Pt,vt,null):e.texImage2D(rt,nt,St,wt,kt,0,Pt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),zt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,rt,at.__webglTexture,0,Yt(b)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,rt,at.__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(L,b,X){if(i.bindRenderbuffer(i.RENDERBUFFER,L),b.depthBuffer){const it=b.depthTexture,rt=it&&it.isDepthTexture?it.type:null,nt=v(b.stencilBuffer,rt),Pt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=Yt(b);zt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,nt,b.width,b.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,nt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,nt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,L)}else{const it=b.textures;for(let rt=0;rt<it.length;rt++){const nt=it[rt],Pt=r.convert(nt.format,nt.colorSpace),vt=r.convert(nt.type),St=M(nt.internalFormat,Pt,vt,nt.colorSpace),$t=Yt(b);X&&zt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,St,b.width,b.height):zt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,St,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,St,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=n.get(b.depthTexture);it.__renderTarget=b,(!it.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),B(b.depthTexture,0);const rt=it.__webglTexture,nt=Yt(b);if(b.depthTexture.format===Ms)zt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(b.depthTexture.format===Zi)zt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Lt(L){const b=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const it=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),it){const rt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,it.removeEventListener("dispose",rt)};it.addEventListener("dispose",rt),b.__depthDisposeCallback=rt}b.__boundDepthTexture=it}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Dt(b.__webglFramebuffer,L)}else if(X){b.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[it]),b.__webglDepthbuffer[it]===void 0)b.__webglDepthbuffer[it]=i.createRenderbuffer(),mt(b.__webglDepthbuffer[it],L,!1);else{const rt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=b.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),mt(b.__webglDepthbuffer,L,!1);else{const it=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(L,b,X){const it=n.get(L);b!==void 0&&At(it.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Lt(L)}function pe(L){const b=L.texture,X=n.get(L),it=n.get(b);L.addEventListener("dispose",P);const rt=L.textures,nt=L.isWebGLCubeRenderTarget===!0,Pt=rt.length>1;if(Pt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=b.version,a.memory.textures++),nt){X.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[vt]=[];for(let St=0;St<b.mipmaps.length;St++)X.__webglFramebuffer[vt][St]=i.createFramebuffer()}else X.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let vt=0;vt<b.mipmaps.length;vt++)X.__webglFramebuffer[vt]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let vt=0,St=rt.length;vt<St;vt++){const $t=n.get(rt[vt]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&zt(L)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let vt=0;vt<rt.length;vt++){const St=rt[vt];X.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[vt]);const $t=r.convert(St.format,St.colorSpace),at=r.convert(St.type),wt=M(St.internalFormat,$t,at,St.colorSpace,L.isXRRenderTarget===!0),kt=Yt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,wt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,X.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(X.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,b);for(let vt=0;vt<6;vt++)if(b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)At(X.__webglFramebuffer[vt][St],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,St);else At(X.__webglFramebuffer[vt],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);m(b)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let vt=0,St=rt.length;vt<St;vt++){const $t=rt[vt],at=n.get($t);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),Ft(i.TEXTURE_2D,$t),At(X.__webglFramebuffer,L,$t,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),m($t)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(vt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,it.__webglTexture),Ft(vt,b),b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)At(X.__webglFramebuffer[St],L,b,i.COLOR_ATTACHMENT0,vt,St);else At(X.__webglFramebuffer,L,b,i.COLOR_ATTACHMENT0,vt,0);m(b)&&f(vt),e.unbindTexture()}L.depthBuffer&&Lt(L)}function qt(L){const b=L.textures;for(let X=0,it=b.length;X<it;X++){const rt=b[X];if(m(rt)){const nt=_(L),Pt=n.get(rt).__webglTexture;e.bindTexture(nt,Pt),f(nt),e.unbindTexture()}}}const de=[],k=[];function be(L){if(L.samples>0){if(zt(L)===!1){const b=L.textures,X=L.width,it=L.height;let rt=i.COLOR_BUFFER_BIT;const nt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(L),vt=b.length>1;if(vt)for(let St=0;St<b.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let St=0;St<b.length;St++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[St]);const $t=n.get(b[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,X,it,0,0,X,it,rt,i.NEAREST),l===!0&&(de.length=0,k.length=0,de.push(i.COLOR_ATTACHMENT0+St),L.depthBuffer&&L.resolveDepthBuffer===!1&&(de.push(nt),k.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let St=0;St<b.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[St]);const $t=n.get(b[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const b=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Yt(L){return Math.min(s.maxSamples,L.samples)}function zt(L){const b=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Bt(L){const b=a.render.frame;u.get(L)!==b&&(u.set(L,b),L.update())}function te(L,b){const X=L.colorSpace,it=L.format,rt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==Cs&&X!==Ei&&(ue.getTransfer(X)===xe?(it!==Cn||rt!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}function Nt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=B,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=Gt,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=zt}function eg(i,t){function e(n,s=Ei){let r;const a=ue.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hh)return i.BYTE;if(n===uh)return i.SHORT;if(n===er)return i.UNSIGNED_SHORT;if(n===ol)return i.INT;if(n===$i)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===Rn)return i.HALF_FLOAT;if(n===dh)return i.ALPHA;if(n===ph)return i.RGB;if(n===Cn)return i.RGBA;if(n===mh)return i.LUMINANCE;if(n===gh)return i.LUMINANCE_ALPHA;if(n===Ms)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===oa)return i.RED;if(n===hl)return i.RED_INTEGER;if(n===vh)return i.RG;if(n===ul)return i.RG_INTEGER;if(n===fl)return i.RGBA_INTEGER;if(n===Yr||n===$r||n===jr||n===Zr)if(a===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yo||n===So||n===Eo||n===bo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wo||n===To||n===Ao)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wo||n===To)return a===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ao)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Co||n===Ro||n===Po||n===Do||n===Lo||n===Uo||n===Io||n===No||n===Fo||n===zo||n===Oo||n===Bo||n===ko||n===Vo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Co)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ro)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Po)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Do)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Io)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===No)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ko)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kr||n===Go||n===Ho)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Kr)return a===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xh||n===Wo||n===Xo||n===qo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Kr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class ng extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _e extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ig={type:"move"};class Ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&p>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ig)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new _e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const sg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rg=`
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

}`;class ag{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new an,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Re({vertexShader:sg,fragmentShader:rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new Gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class og extends Rs{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,p=null,d=null,g=null;const x=new ag,m=e.getContextAttributes();let f=null,_=null;const M=[],v=[],w=new _t;let C=null;const P=new Mn;P.viewport=new ye;const D=new Mn;D.viewport=new ye;const y=[P,D],S=new ng;let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ft=M[K];return ft===void 0&&(ft=new Ya,M[K]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(K){let ft=M[K];return ft===void 0&&(ft=new Ya,M[K]=ft),ft.getGripSpace()},this.getHand=function(K){let ft=M[K];return ft===void 0&&(ft=new Ya,M[K]=ft),ft.getHandSpace()};function G(K){const ft=v.indexOf(K.inputSource);if(ft===-1)return;const At=M[ft];At!==void 0&&(At.update(K.inputSource,K.frame,c||a),At.dispatchEvent({type:K.type,data:K.inputSource}))}function N(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",B);for(let K=0;K<M.length;K++){const ft=v[K];ft!==null&&(v[K]=null,M[K].disconnect(ft))}R=null,z=null,x.reset(),t.setRenderTarget(f),d=null,p=null,h=null,s=null,_=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",N),s.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0){const ft={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new mn(d.framebufferWidth,d.framebufferHeight,{format:Cn,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ft=null,At=null,mt=null;m.depth&&(mt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=m.stencil?Zi:Ms,At=m.stencil?ji:$i);const Dt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};h=new XRWebGLBinding(s,e),p=h.createProjectionLayer(Dt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),_=new mn(p.textureWidth,p.textureHeight,{format:Cn,type:jn,depthTexture:new Ml(p.textureWidth,p.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function B(K){for(let ft=0;ft<K.removed.length;ft++){const At=K.removed[ft],mt=v.indexOf(At);mt>=0&&(v[mt]=null,M[mt].disconnect(At))}for(let ft=0;ft<K.added.length;ft++){const At=K.added[ft];let mt=v.indexOf(At);if(mt===-1){for(let Lt=0;Lt<M.length;Lt++)if(Lt>=v.length){v.push(At),mt=Lt;break}else if(v[Lt]===null){v[Lt]=At,mt=Lt;break}if(mt===-1)break}const Dt=M[mt];Dt&&Dt.connect(At)}}const q=new I,Y=new I;function H(K,ft,At){q.setFromMatrixPosition(ft.matrixWorld),Y.setFromMatrixPosition(At.matrixWorld);const mt=q.distanceTo(Y),Dt=ft.projectionMatrix.elements,Lt=At.projectionMatrix.elements,Gt=Dt[14]/(Dt[10]-1),pe=Dt[14]/(Dt[10]+1),qt=(Dt[9]+1)/Dt[5],de=(Dt[9]-1)/Dt[5],k=(Dt[8]-1)/Dt[0],be=(Lt[8]+1)/Lt[0],Yt=Gt*k,zt=Gt*be,Bt=mt/(-k+be),te=Bt*-k;if(ft.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(te),K.translateZ(Bt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Dt[10]===-1)K.projectionMatrix.copy(ft.projectionMatrix),K.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Nt=Gt+Bt,L=pe+Bt,b=Yt-te,X=zt+(mt-te),it=qt*pe/L*Nt,rt=de*pe/L*Nt;K.projectionMatrix.makePerspective(b,X,it,rt,Nt,L),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function J(K,ft){ft===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ft.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ft=K.near,At=K.far;x.texture!==null&&(x.depthNear>0&&(ft=x.depthNear),x.depthFar>0&&(At=x.depthFar)),S.near=D.near=P.near=ft,S.far=D.far=P.far=At,(R!==S.near||z!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,z=S.far),P.layers.mask=K.layers.mask|2,D.layers.mask=K.layers.mask|4,S.layers.mask=P.layers.mask|D.layers.mask;const mt=K.parent,Dt=S.cameras;J(S,mt);for(let Lt=0;Lt<Dt.length;Lt++)J(Dt[Lt],mt);Dt.length===2?H(S,P,D):S.projectionMatrix.copy(P.projectionMatrix),ct(K,S,mt)};function ct(K,ft,At){At===null?K.matrix.copy(ft.matrixWorld):(K.matrix.copy(At.matrixWorld),K.matrix.invert(),K.matrix.multiply(ft.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ft.projectionMatrix),K.projectionMatrixInverse.copy(ft.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=nr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(K){l=K,p!==null&&(p.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let lt=null;function Ft(K,ft){if(u=ft.getViewerPose(c||a),g=ft,u!==null){const At=u.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let mt=!1;At.length!==S.cameras.length&&(S.cameras.length=0,mt=!0);for(let Lt=0;Lt<At.length;Lt++){const Gt=At[Lt];let pe=null;if(d!==null)pe=d.getViewport(Gt);else{const de=h.getViewSubImage(p,Gt);pe=de.viewport,Lt===0&&(t.setRenderTargetTextures(_,de.colorTexture,p.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(_))}let qt=y[Lt];qt===void 0&&(qt=new Mn,qt.layers.enable(Lt),qt.viewport=new ye,y[Lt]=qt),qt.matrix.fromArray(Gt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(Gt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(pe.x,pe.y,pe.width,pe.height),Lt===0&&(S.matrix.copy(qt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),mt===!0&&S.cameras.push(qt)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Lt=h.getDepthInformation(At[0]);Lt&&Lt.isValid&&Lt.texture&&x.init(t,Lt,s.renderState)}}for(let At=0;At<M.length;At++){const mt=v[At],Dt=M[At];mt!==null&&Dt!==void 0&&Dt.update(mt,ft,c||a)}lt&&lt(K,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),g=null}const jt=new Rh;jt.setAnimationLoop(Ft),this.setAnimationLoop=function(K){lt=K},this.dispose=function(){}}}const Oi=new Zn,lg=new fe;function cg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Th(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,_,M,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,_,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===pn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===pn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=t.get(f),M=_.envMap,v=_.envMapRotation;M&&(m.envMap.value=M,Oi.copy(v),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(lg.makeRotationFromEuler(Oi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=M*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===pn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const _=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){const v=M.program;n.uniformBlockBinding(_,v)}function c(_,M){let v=s[_.id];v===void 0&&(g(_),v=u(_),s[_.id]=v,_.addEventListener("dispose",m));const w=M.program;n.updateUBOMapping(_,w);const C=t.render.frame;r[_.id]!==C&&(p(_),r[_.id]=C)}function u(_){const M=h();_.__bindingPointIndex=M;const v=i.createBuffer(),w=_.__size,C=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function h(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){const M=s[_.id],v=_.uniforms,w=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let C=0,P=v.length;C<P;C++){const D=Array.isArray(v[C])?v[C]:[v[C]];for(let y=0,S=D.length;y<S;y++){const R=D[y];if(d(R,C,y,w)===!0){const z=R.__offset,G=Array.isArray(R.value)?R.value:[R.value];let N=0;for(let B=0;B<G.length;B++){const q=G[B],Y=x(q);typeof q=="number"||typeof q=="boolean"?(R.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,z+N,R.__data)):q.isMatrix3?(R.__data[0]=q.elements[0],R.__data[1]=q.elements[1],R.__data[2]=q.elements[2],R.__data[3]=0,R.__data[4]=q.elements[3],R.__data[5]=q.elements[4],R.__data[6]=q.elements[5],R.__data[7]=0,R.__data[8]=q.elements[6],R.__data[9]=q.elements[7],R.__data[10]=q.elements[8],R.__data[11]=0):(q.toArray(R.__data,N),N+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,M,v,w){const C=_.value,P=M+"_"+v;if(w[P]===void 0)return typeof C=="number"||typeof C=="boolean"?w[P]=C:w[P]=C.clone(),!0;{const D=w[P];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return w[P]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(_){const M=_.uniforms;let v=0;const w=16;for(let P=0,D=M.length;P<D;P++){const y=Array.isArray(M[P])?M[P]:[M[P]];for(let S=0,R=y.length;S<R;S++){const z=y[S],G=Array.isArray(z.value)?z.value:[z.value];for(let N=0,B=G.length;N<B;N++){const q=G[N],Y=x(q),H=v%w,J=H%Y.boundary,ct=H+J;v+=J,ct!==0&&w-ct<Y.storage&&(v+=w-ct),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=Y.storage}}}const C=v%w;return C>0&&(v+=w-C),_.__size=v,_.__cache={},this}function x(_){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function m(_){const M=_.target;M.removeEventListener("dispose",m);const v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class ug{constructor(t={}){const{canvas:e=Qu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const _=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this.toneMapping=Ai,this.toneMappingExposure=1;const v=this;let w=!1,C=0,P=0,D=null,y=-1,S=null;const R=new ye,z=new ye;let G=null;const N=new gt(0);let B=0,q=e.width,Y=e.height,H=1,J=null,ct=null;const lt=new ye(0,0,q,Y),Ft=new ye(0,0,q,Y);let jt=!1;const K=new vl;let ft=!1,At=!1;const mt=new fe,Dt=new fe,Lt=new I,Gt=new ye,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function de(){return D===null?H:1}let k=n;function be(T,V){return e.getContext(T,V)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sl}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),k===null){const V="webgl2";if(k=be(V,T),k===null)throw be(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Yt,zt,Bt,te,Nt,L,b,X,it,rt,nt,Pt,vt,St,$t,at,wt,kt,Vt,Tt,Kt,Ht,se,O;function pt(){Yt=new gm(k),Yt.init(),Ht=new eg(k,Yt),zt=new hm(k,Yt,t,Ht),Bt=new J0(k,Yt),zt.reverseDepthBuffer&&p&&Bt.buffers.depth.setReversed(!0),te=new _m(k),Nt=new z0,L=new tg(k,Yt,Bt,Nt,zt,Ht,te),b=new fm(v),X=new mm(v),it=new Tf(k),se=new lm(k,it),rt=new vm(k,it,te,se),nt=new ym(k,rt,it,te),Vt=new Mm(k,zt,L),at=new um(Nt),Pt=new F0(v,b,X,Yt,zt,se,at),vt=new cg(v,Nt),St=new B0,$t=new X0(Yt),kt=new om(v,b,X,Bt,nt,d,l),wt=new Z0(v,nt,zt),O=new hg(k,te,zt,Bt),Tt=new cm(k,Yt,te),Kt=new xm(k,Yt,te),te.programs=Pt.programs,v.capabilities=zt,v.extensions=Yt,v.properties=Nt,v.renderLists=St,v.shadowMap=wt,v.state=Bt,v.info=te}pt();const j=new og(v,k);this.xr=j,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=Yt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Yt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(q,Y,!1))},this.getSize=function(T){return T.set(q,Y)},this.setSize=function(T,V,$=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,Y=V,e.width=Math.floor(T*H),e.height=Math.floor(V*H),$===!0&&(e.style.width=T+"px",e.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(q*H,Y*H).floor()},this.setDrawingBufferSize=function(T,V,$){q=T,Y=V,H=$,e.width=Math.floor(T*$),e.height=Math.floor(V*$),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(lt)},this.setViewport=function(T,V,$,A){T.isVector4?lt.set(T.x,T.y,T.z,T.w):lt.set(T,V,$,A),Bt.viewport(R.copy(lt).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(Ft)},this.setScissor=function(T,V,$,A){T.isVector4?Ft.set(T.x,T.y,T.z,T.w):Ft.set(T,V,$,A),Bt.scissor(z.copy(Ft).multiplyScalar(H).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(T){Bt.setScissorTest(jt=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){ct=T},this.getClearColor=function(T){return T.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(T=!0,V=!0,$=!0){let A=0;if(T){let E=!1;if(D!==null){const F=D.texture.format;E=F===fl||F===ul||F===hl}if(E){const F=D.texture.type,W=F===jn||F===$i||F===er||F===ji||F===ll||F===cl,Z=kt.getClearColor(),Q=kt.getClearAlpha(),dt=Z.r,xt=Z.g,ht=Z.b;W?(g[0]=dt,g[1]=xt,g[2]=ht,g[3]=Q,k.clearBufferuiv(k.COLOR,0,g)):(x[0]=dt,x[1]=xt,x[2]=ht,x[3]=Q,k.clearBufferiv(k.COLOR,0,x))}else A|=k.COLOR_BUFFER_BIT}V&&(A|=k.DEPTH_BUFFER_BIT),$&&(A|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(A)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),St.dispose(),$t.dispose(),Nt.dispose(),b.dispose(),X.dispose(),nt.dispose(),se.dispose(),O.dispose(),Pt.dispose(),j.dispose(),j.removeEventListener("sessionstart",we),j.removeEventListener("sessionend",me),ge.stop()};function st(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const T=te.autoReset,V=wt.enabled,$=wt.autoUpdate,A=wt.needsUpdate,E=wt.type;pt(),te.autoReset=T,wt.enabled=V,wt.autoUpdate=$,wt.needsUpdate=A,wt.type=E}function Mt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function U(T){const V=T.target;V.removeEventListener("dispose",U),tt(V)}function tt(T){bt(T),Nt.remove(T)}function bt(T){const V=Nt.get(T).programs;V!==void 0&&(V.forEach(function($){Pt.releaseProgram($)}),T.isShaderMaterial&&Pt.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,$,A,E,F){V===null&&(V=pe);const W=E.isMesh&&E.matrixWorld.determinant()<0,Z=gi(T,V,$,A,E);Bt.setMaterial(A,W);let Q=$.index,dt=1;if(A.wireframe===!0){if(Q=rt.getWireframeAttribute($),Q===void 0)return;dt=2}const xt=$.drawRange,ht=$.attributes.position;let ut=xt.start*dt,Wt=(xt.start+xt.count)*dt;F!==null&&(ut=Math.max(ut,F.start*dt),Wt=Math.min(Wt,(F.start+F.count)*dt)),Q!==null?(ut=Math.max(ut,0),Wt=Math.min(Wt,Q.count)):ht!=null&&(ut=Math.max(ut,0),Wt=Math.min(Wt,ht.count));const Xt=Wt-ut;if(Xt<0||Xt===1/0)return;se.setup(E,A,Z,$,Q);let ve,oe=Tt;if(Q!==null&&(ve=it.get(Q),oe=Kt,oe.setIndex(ve)),E.isMesh)A.wireframe===!0?(Bt.setLineWidth(A.wireframeLinewidth*de()),oe.setMode(k.LINES)):oe.setMode(k.TRIANGLES);else if(E.isLine){let Ct=A.linewidth;Ct===void 0&&(Ct=1),Bt.setLineWidth(Ct*de()),E.isLineSegments?oe.setMode(k.LINES):E.isLineLoop?oe.setMode(k.LINE_LOOP):oe.setMode(k.LINE_STRIP)}else E.isPoints?oe.setMode(k.POINTS):E.isSprite&&oe.setMode(k.TRIANGLES);if(E.isBatchedMesh)if(E._multiDrawInstances!==null)oe.renderMultiDrawInstances(E._multiDrawStarts,E._multiDrawCounts,E._multiDrawCount,E._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))oe.renderMultiDraw(E._multiDrawStarts,E._multiDrawCounts,E._multiDrawCount);else{const Ct=E._multiDrawStarts,on=E._multiDrawCounts,le=E._multiDrawCount,ln=Q?it.get(Q).bytesPerElement:1,Ln=Nt.get(A).currentProgram.getUniforms();for(let Xe=0;Xe<le;Xe++)Ln.setValue(k,"_gl_DrawID",Xe),oe.render(Ct[Xe]/ln,on[Xe])}else if(E.isInstancedMesh)oe.renderInstances(ut,Xt,E.count);else if($.isInstancedBufferGeometry){const Ct=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,on=Math.min($.instanceCount,Ct);oe.renderInstances(ut,Xt,on)}else oe.render(ut,Xt)};function Ut(T,V,$){T.transparent===!0&&T.side===He&&T.forceSinglePass===!1?(T.side=pn,T.needsUpdate=!0,pi(T,V,$),T.side=Pi,T.needsUpdate=!0,pi(T,V,$),T.side=He):pi(T,V,$)}this.compile=function(T,V,$=null){$===null&&($=T),f=$t.get($),f.init(V),M.push(f),$.traverseVisible(function(E){E.isLight&&E.layers.test(V.layers)&&(f.pushLight(E),E.castShadow&&f.pushShadow(E))}),T!==$&&T.traverseVisible(function(E){E.isLight&&E.layers.test(V.layers)&&(f.pushLight(E),E.castShadow&&f.pushShadow(E))}),f.setupLights();const A=new Set;return T.traverse(function(E){if(!(E.isMesh||E.isPoints||E.isLine||E.isSprite))return;const F=E.material;if(F)if(Array.isArray(F))for(let W=0;W<F.length;W++){const Z=F[W];Ut(Z,$,E),A.add(Z)}else Ut(F,$,E),A.add(F)}),M.pop(),f=null,A},this.compileAsync=function(T,V,$=null){const A=this.compile(T,V,$);return new Promise(E=>{function F(){if(A.forEach(function(W){Nt.get(W).currentProgram.isReady()&&A.delete(W)}),A.size===0){E(T);return}setTimeout(F,10)}Yt.get("KHR_parallel_shader_compile")!==null?F():setTimeout(F,10)})};let re=null;function Zt(T){re&&re(T)}function we(){ge.stop()}function me(){ge.start()}const ge=new Rh;ge.setAnimationLoop(Zt),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(T){re=T,j.setAnimationLoop(T),T===null?ge.stop():ge.start()},j.addEventListener("sessionstart",we),j.addEventListener("sessionend",me),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(V),V=j.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,V,D),f=$t.get(T,M.length),f.init(V),M.push(f),Dt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),K.setFromProjectionMatrix(Dt),At=this.localClippingEnabled,ft=at.init(this.clippingPlanes,At),m=St.get(T,_.length),m.init(),_.push(m),j.enabled===!0&&j.isPresenting===!0){const F=v.xr.getDepthSensingMesh();F!==null&&je(F,V,-1/0,v.sortObjects)}je(T,V,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(J,ct),qt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,qt&&kt.addToRenderList(m,T),this.info.render.frame++,ft===!0&&at.beginShadows();const $=f.state.shadowsArray;wt.render($,T,V),ft===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const A=m.opaque,E=m.transmissive;if(f.setupLights(),V.isArrayCamera){const F=V.cameras;if(E.length>0)for(let W=0,Z=F.length;W<Z;W++){const Q=F[W];Ze(A,E,T,Q)}qt&&kt.render(T);for(let W=0,Z=F.length;W<Z;W++){const Q=F[W];gn(m,T,Q,Q.viewport)}}else E.length>0&&Ze(A,E,T,V),qt&&kt.render(T),gn(m,T,V);D!==null&&(L.updateMultisampleRenderTarget(D),L.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(v,T,V),se.resetDefaultState(),y=-1,S=null,M.pop(),M.length>0?(f=M[M.length-1],ft===!0&&at.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function je(T,V,$,A){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||K.intersectsSprite(T)){A&&Gt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Dt);const W=nt.update(T),Z=T.material;Z.visible&&m.push(T,W,Z,$,Gt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||K.intersectsObject(T))){const W=nt.update(T),Z=T.material;if(A&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Gt.copy(T.boundingSphere.center)):(W.boundingSphere===null&&W.computeBoundingSphere(),Gt.copy(W.boundingSphere.center)),Gt.applyMatrix4(T.matrixWorld).applyMatrix4(Dt)),Array.isArray(Z)){const Q=W.groups;for(let dt=0,xt=Q.length;dt<xt;dt++){const ht=Q[dt],ut=Z[ht.materialIndex];ut&&ut.visible&&m.push(T,W,ut,$,Gt.z,ht)}}else Z.visible&&m.push(T,W,Z,$,Gt.z,null)}}const F=T.children;for(let W=0,Z=F.length;W<Z;W++)je(F[W],V,$,A)}function gn(T,V,$,A){const E=T.opaque,F=T.transmissive,W=T.transparent;f.setupLightsView($),ft===!0&&at.setGlobalState(v.clippingPlanes,$),A&&Bt.viewport(R.copy(A)),E.length>0&&vn(E,V,$),F.length>0&&vn(F,V,$),W.length>0&&vn(W,V,$),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function Ze(T,V,$,A){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[A.id]===void 0&&(f.state.transmissionRenderTarget[A.id]=new mn(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?Rn:jn,minFilter:Wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const F=f.state.transmissionRenderTarget[A.id],W=A.viewport||R;F.setSize(W.z,W.w);const Z=v.getRenderTarget();v.setRenderTarget(F),v.getClearColor(N),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),qt&&kt.render($);const Q=v.toneMapping;v.toneMapping=Ai;const dt=A.viewport;if(A.viewport!==void 0&&(A.viewport=void 0),f.setupLightsView(A),ft===!0&&at.setGlobalState(v.clippingPlanes,A),vn(T,$,A),L.updateMultisampleRenderTarget(F),L.updateRenderTargetMipmap(F),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let ht=0,ut=V.length;ht<ut;ht++){const Wt=V[ht],Xt=Wt.object,ve=Wt.geometry,oe=Wt.material,Ct=Wt.group;if(oe.side===He&&Xt.layers.test(A.layers)){const on=oe.side;oe.side=pn,oe.needsUpdate=!0,va(Xt,$,A,ve,oe,Ct),oe.side=on,oe.needsUpdate=!0,xt=!0}}xt===!0&&(L.updateMultisampleRenderTarget(F),L.updateRenderTargetMipmap(F))}v.setRenderTarget(Z),v.setClearColor(N,B),dt!==void 0&&(A.viewport=dt),v.toneMapping=Q}function vn(T,V,$){const A=V.isScene===!0?V.overrideMaterial:null;for(let E=0,F=T.length;E<F;E++){const W=T[E],Z=W.object,Q=W.geometry,dt=A===null?W.material:A,xt=W.group;Z.layers.test($.layers)&&va(Z,V,$,Q,dt,xt)}}function va(T,V,$,A,E,F){T.onBeforeRender(v,V,$,A,E,F),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),E.onBeforeRender(v,V,$,A,T,F),E.transparent===!0&&E.side===He&&E.forceSinglePass===!1?(E.side=pn,E.needsUpdate=!0,v.renderBufferDirect($,V,A,E,T,F),E.side=Pi,E.needsUpdate=!0,v.renderBufferDirect($,V,A,E,T,F),E.side=He):v.renderBufferDirect($,V,A,E,T,F),T.onAfterRender(v,V,$,A,E,F)}function pi(T,V,$){V.isScene!==!0&&(V=pe);const A=Nt.get(T),E=f.state.lights,F=f.state.shadowsArray,W=E.state.version,Z=Pt.getParameters(T,E.state,F,V,$),Q=Pt.getProgramCacheKey(Z);let dt=A.programs;A.environment=T.isMeshStandardMaterial?V.environment:null,A.fog=V.fog,A.envMap=(T.isMeshStandardMaterial?X:b).get(T.envMap||A.environment),A.envMapRotation=A.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,dt===void 0&&(T.addEventListener("dispose",U),dt=new Map,A.programs=dt);let xt=dt.get(Q);if(xt!==void 0){if(A.currentProgram===xt&&A.lightsStateVersion===W)return Is(T,Z),xt}else Z.uniforms=Pt.getUniforms(T),T.onBeforeCompile(Z,v),xt=Pt.acquireProgram(Z,Q),dt.set(Q,xt),A.uniforms=Z.uniforms;const ht=A.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ht.clippingPlanes=at.uniform),Is(T,Z),A.needsLights=_a(T),A.lightsStateVersion=W,A.needsLights&&(ht.ambientLightColor.value=E.state.ambient,ht.lightProbe.value=E.state.probe,ht.directionalLights.value=E.state.directional,ht.directionalLightShadows.value=E.state.directionalShadow,ht.spotLights.value=E.state.spot,ht.spotLightShadows.value=E.state.spotShadow,ht.rectAreaLights.value=E.state.rectArea,ht.ltc_1.value=E.state.rectAreaLTC1,ht.ltc_2.value=E.state.rectAreaLTC2,ht.pointLights.value=E.state.point,ht.pointLightShadows.value=E.state.pointShadow,ht.hemisphereLights.value=E.state.hemi,ht.directionalShadowMap.value=E.state.directionalShadowMap,ht.directionalShadowMatrix.value=E.state.directionalShadowMatrix,ht.spotShadowMap.value=E.state.spotShadowMap,ht.spotLightMatrix.value=E.state.spotLightMatrix,ht.spotLightMap.value=E.state.spotLightMap,ht.pointShadowMap.value=E.state.pointShadowMap,ht.pointShadowMatrix.value=E.state.pointShadowMatrix),A.currentProgram=xt,A.uniformsList=null,xt}function mi(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=Jr.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function Is(T,V){const $=Nt.get(T);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function gi(T,V,$,A,E){V.isScene!==!0&&(V=pe),L.resetTextureUnits();const F=V.fog,W=A.isMeshStandardMaterial?V.environment:null,Z=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Cs,Q=(A.isMeshStandardMaterial?X:b).get(A.envMap||W),dt=A.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,xt=!!$.attributes.tangent&&(!!A.normalMap||A.anisotropy>0),ht=!!$.morphAttributes.position,ut=!!$.morphAttributes.normal,Wt=!!$.morphAttributes.color;let Xt=Ai;A.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Xt=v.toneMapping);const ve=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,oe=ve!==void 0?ve.length:0,Ct=Nt.get(A),on=f.state.lights;if(ft===!0&&(At===!0||T!==S)){const Ke=T===S&&A.id===y;at.setState(A,T,Ke)}let le=!1;A.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==on.state.version||Ct.outputColorSpace!==Z||E.isBatchedMesh&&Ct.batching===!1||!E.isBatchedMesh&&Ct.batching===!0||E.isBatchedMesh&&Ct.batchingColor===!0&&E.colorTexture===null||E.isBatchedMesh&&Ct.batchingColor===!1&&E.colorTexture!==null||E.isInstancedMesh&&Ct.instancing===!1||!E.isInstancedMesh&&Ct.instancing===!0||E.isSkinnedMesh&&Ct.skinning===!1||!E.isSkinnedMesh&&Ct.skinning===!0||E.isInstancedMesh&&Ct.instancingColor===!0&&E.instanceColor===null||E.isInstancedMesh&&Ct.instancingColor===!1&&E.instanceColor!==null||E.isInstancedMesh&&Ct.instancingMorph===!0&&E.morphTexture===null||E.isInstancedMesh&&Ct.instancingMorph===!1&&E.morphTexture!==null||Ct.envMap!==Q||A.fog===!0&&Ct.fog!==F||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==at.numPlanes||Ct.numIntersection!==at.numIntersection)||Ct.vertexAlphas!==dt||Ct.vertexTangents!==xt||Ct.morphTargets!==ht||Ct.morphNormals!==ut||Ct.morphColors!==Wt||Ct.toneMapping!==Xt||Ct.morphTargetsCount!==oe)&&(le=!0):(le=!0,Ct.__version=A.version);let ln=Ct.currentProgram;le===!0&&(ln=pi(A,V,E));let Ln=!1,Xe=!1,Hn=!1;const Me=ln.getUniforms(),un=Ct.uniforms;if(Bt.useProgram(ln.program)&&(Ln=!0,Xe=!0,Hn=!0),A.id!==y&&(y=A.id,Xe=!0),Ln||S!==T){Bt.buffers.depth.getReversed()?(mt.copy(T.projectionMatrix),ef(mt),nf(mt),Me.setValue(k,"projectionMatrix",mt)):Me.setValue(k,"projectionMatrix",T.projectionMatrix),Me.setValue(k,"viewMatrix",T.matrixWorldInverse);const ae=Me.map.cameraPosition;ae!==void 0&&ae.setValue(k,Lt.setFromMatrixPosition(T.matrixWorld)),zt.logarithmicDepthBuffer&&Me.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshLambertMaterial||A.isMeshBasicMaterial||A.isMeshStandardMaterial||A.isShaderMaterial)&&Me.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,Xe=!0,Hn=!0)}if(E.isSkinnedMesh){Me.setOptional(k,E,"bindMatrix"),Me.setOptional(k,E,"bindMatrixInverse");const Ke=E.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Me.setValue(k,"boneTexture",Ke.boneTexture,L))}E.isBatchedMesh&&(Me.setOptional(k,E,"batchingTexture"),Me.setValue(k,"batchingTexture",E._matricesTexture,L),Me.setOptional(k,E,"batchingIdTexture"),Me.setValue(k,"batchingIdTexture",E._indirectTexture,L),Me.setOptional(k,E,"batchingColorTexture"),E._colorsTexture!==null&&Me.setValue(k,"batchingColorTexture",E._colorsTexture,L));const En=$.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Vt.update(E,$,ln),(Xe||Ct.receiveShadow!==E.receiveShadow)&&(Ct.receiveShadow=E.receiveShadow,Me.setValue(k,"receiveShadow",E.receiveShadow)),A.isMeshGouraudMaterial&&A.envMap!==null&&(un.envMap.value=Q,un.flipEnvMap.value=Q.isCubeTexture&&Q.isRenderTargetTexture===!1?-1:1),A.isMeshStandardMaterial&&A.envMap===null&&V.environment!==null&&(un.envMapIntensity.value=V.environmentIntensity),Xe&&(Me.setValue(k,"toneMappingExposure",v.toneMappingExposure),Ct.needsLights&&xa(un,Hn),F&&A.fog===!0&&vt.refreshFogUniforms(un,F),vt.refreshMaterialUniforms(un,A,H,Y,f.state.transmissionRenderTarget[T.id]),Jr.upload(k,mi(Ct),un,L)),A.isShaderMaterial&&A.uniformsNeedUpdate===!0&&(Jr.upload(k,mi(Ct),un,L),A.uniformsNeedUpdate=!1),A.isSpriteMaterial&&Me.setValue(k,"center",E.center),Me.setValue(k,"modelViewMatrix",E.modelViewMatrix),Me.setValue(k,"normalMatrix",E.normalMatrix),Me.setValue(k,"modelMatrix",E.matrixWorld),A.isShaderMaterial||A.isRawShaderMaterial){const Ke=A.uniformsGroups;for(let ae=0,Fe=Ke.length;ae<Fe;ae++){const fn=Ke[ae];O.update(fn,ln),O.bind(fn,ln)}}return ln}function xa(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function _a(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,V,$){Nt.get(T.texture).__webglTexture=V,Nt.get(T.depthTexture).__webglTexture=$;const A=Nt.get(T);A.__hasExternalTextures=!0,A.__autoAllocateDepthBuffer=$===void 0,A.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),A.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,V){const $=Nt.get(T);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,$=0){D=T,C=V,P=$;let A=!0,E=null,F=!1,W=!1;if(T){const Q=Nt.get(T);if(Q.__useDefaultFramebuffer!==void 0)Bt.bindFramebuffer(k.FRAMEBUFFER,null),A=!1;else if(Q.__webglFramebuffer===void 0)L.setupRenderTarget(T);else if(Q.__hasExternalTextures)L.rebindTextures(T,Nt.get(T.texture).__webglTexture,Nt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ht=T.depthTexture;if(Q.__boundDepthTexture!==ht){if(ht!==null&&Nt.has(ht)&&(T.width!==ht.image.width||T.height!==ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(T)}}const dt=T.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(W=!0);const xt=Nt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(xt[V])?E=xt[V][$]:E=xt[V],F=!0):T.samples>0&&L.useMultisampledRTT(T)===!1?E=Nt.get(T).__webglMultisampledFramebuffer:Array.isArray(xt)?E=xt[$]:E=xt,R.copy(T.viewport),z.copy(T.scissor),G=T.scissorTest}else R.copy(lt).multiplyScalar(H).floor(),z.copy(Ft).multiplyScalar(H).floor(),G=jt;if(Bt.bindFramebuffer(k.FRAMEBUFFER,E)&&A&&Bt.drawBuffers(T,E),Bt.viewport(R),Bt.scissor(z),Bt.setScissorTest(G),F){const Q=Nt.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+V,Q.__webglTexture,$)}else if(W){const Q=Nt.get(T.texture),dt=V||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Q.__webglTexture,$||0,dt)}y=-1},this.readRenderTargetPixels=function(T,V,$,A,E,F,W){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Z=Nt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&W!==void 0&&(Z=Z[W]),Z){Bt.bindFramebuffer(k.FRAMEBUFFER,Z);try{const Q=T.texture,dt=Q.format,xt=Q.type;if(!zt.textureFormatReadable(dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-A&&$>=0&&$<=T.height-E&&k.readPixels(V,$,A,E,Ht.convert(dt),Ht.convert(xt),F)}finally{const Q=D!==null?Nt.get(D).__webglFramebuffer:null;Bt.bindFramebuffer(k.FRAMEBUFFER,Q)}}},this.readRenderTargetPixelsAsync=async function(T,V,$,A,E,F,W){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Z=Nt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&W!==void 0&&(Z=Z[W]),Z){const Q=T.texture,dt=Q.format,xt=Q.type;if(!zt.textureFormatReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=T.width-A&&$>=0&&$<=T.height-E){Bt.bindFramebuffer(k.FRAMEBUFFER,Z);const ht=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ht),k.bufferData(k.PIXEL_PACK_BUFFER,F.byteLength,k.STREAM_READ),k.readPixels(V,$,A,E,Ht.convert(dt),Ht.convert(xt),0);const ut=D!==null?Nt.get(D).__webglFramebuffer:null;Bt.bindFramebuffer(k.FRAMEBUFFER,ut);const Wt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await tf(k,Wt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ht),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,F),k.deleteBuffer(ht),k.deleteSync(Wt),F}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,V=null,$=0){T.isTexture!==!0&&(Xs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1]);const A=Math.pow(2,-$),E=Math.floor(T.image.width*A),F=Math.floor(T.image.height*A),W=V!==null?V.x:0,Z=V!==null?V.y:0;L.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,$,0,0,W,Z,E,F),Bt.unbindTexture()},this.copyTextureToTexture=function(T,V,$=null,A=null,E=0){T.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture function signature has changed."),A=arguments[0]||null,T=arguments[1],V=arguments[2],E=arguments[3]||0,$=null);let F,W,Z,Q,dt,xt,ht,ut,Wt;const Xt=T.isCompressedTexture?T.mipmaps[E]:T.image;$!==null?(F=$.max.x-$.min.x,W=$.max.y-$.min.y,Z=$.isBox3?$.max.z-$.min.z:1,Q=$.min.x,dt=$.min.y,xt=$.isBox3?$.min.z:0):(F=Xt.width,W=Xt.height,Z=Xt.depth||1,Q=0,dt=0,xt=0),A!==null?(ht=A.x,ut=A.y,Wt=A.z):(ht=0,ut=0,Wt=0);const ve=Ht.convert(V.format),oe=Ht.convert(V.type);let Ct;V.isData3DTexture?(L.setTexture3D(V,0),Ct=k.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(L.setTexture2DArray(V,0),Ct=k.TEXTURE_2D_ARRAY):(L.setTexture2D(V,0),Ct=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment);const on=k.getParameter(k.UNPACK_ROW_LENGTH),le=k.getParameter(k.UNPACK_IMAGE_HEIGHT),ln=k.getParameter(k.UNPACK_SKIP_PIXELS),Ln=k.getParameter(k.UNPACK_SKIP_ROWS),Xe=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Xt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Xt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Q),k.pixelStorei(k.UNPACK_SKIP_ROWS,dt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,xt);const Hn=T.isDataArrayTexture||T.isData3DTexture,Me=V.isDataArrayTexture||V.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const un=Nt.get(T),En=Nt.get(V),Ke=Nt.get(un.__renderTarget),ae=Nt.get(En.__renderTarget);Bt.bindFramebuffer(k.READ_FRAMEBUFFER,Ke.__webglFramebuffer),Bt.bindFramebuffer(k.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Fe=0;Fe<Z;Fe++)Hn&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Nt.get(T).__webglTexture,E,xt+Fe),T.isDepthTexture?(Me&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Nt.get(V).__webglTexture,E,Wt+Fe),k.blitFramebuffer(Q,dt,F,W,ht,ut,F,W,k.DEPTH_BUFFER_BIT,k.NEAREST)):Me?k.copyTexSubImage3D(Ct,E,ht,ut,Wt+Fe,Q,dt,F,W):k.copyTexSubImage2D(Ct,E,ht,ut,Wt+Fe,Q,dt,F,W);Bt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Me?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(Ct,E,ht,ut,Wt,F,W,Z,ve,oe,Xt.data):V.isCompressedArrayTexture?k.compressedTexSubImage3D(Ct,E,ht,ut,Wt,F,W,Z,ve,Xt.data):k.texSubImage3D(Ct,E,ht,ut,Wt,F,W,Z,ve,oe,Xt):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,E,ht,ut,F,W,ve,oe,Xt.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,E,ht,ut,Xt.width,Xt.height,ve,Xt.data):k.texSubImage2D(k.TEXTURE_2D,E,ht,ut,F,W,ve,oe,Xt);k.pixelStorei(k.UNPACK_ROW_LENGTH,on),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,le),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ln),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ln),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Xe),E===0&&V.generateMipmaps&&k.generateMipmap(Ct),Bt.unbindTexture()},this.copyTextureToTexture3D=function(T,V,$=null,A=null,E=0){return T.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,A=arguments[1]||null,T=arguments[2],V=arguments[3],E=arguments[4]||0),Xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,V,$,A,E)},this.initRenderTarget=function(T){Nt.get(T).__webglFramebuffer===void 0&&L.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?L.setTextureCube(T,0):T.isData3DTexture?L.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?L.setTexture2DArray(T,0):L.setTexture2D(T,0),Bt.unbindTexture()},this.resetState=function(){C=0,P=0,D=null,Bt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}class yl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new gt(t),this.near=e,this.far=n}clone(){return new yl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class fg extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ha extends an{constructor(t=null,e=1,n=1,s,r,a,o,l,c=rn,u=rn,h,p){super(null,a,o,l,c,u,s,r,h,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dc extends Ie{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const gs=new fe,Lc=new fe,Ur=[],Uc=new Ji,dg=new fe,ks=new Jt,Vs=new Ds;class nn extends Jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Dc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ji),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),Uc.copy(t.boundingBox).applyMatrix4(gs),this.boundingBox.union(Uc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ds),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),Vs.copy(t.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(Vs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(n),t.ray.intersectsSphere(Vs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gs),Lc.multiplyMatrices(n,gs),ks.matrixWorld=Lc,ks.raycast(t,Ur);for(let a=0,o=Ur.length;a<o;a++){const l=Ur[a];l.instanceId=r,l.object=this,e.push(l)}Ur.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Dc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ha(new Float32Array(s*this.count),s,this.count,oa,kn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ua extends Qi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ic=new fe,$o=new ml,Ir=new Ds,Nr=new I;class Sl extends Se{constructor(t=new Ee,e=new ua){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(s),Ir.radius+=r,t.ray.intersectsSphere(Ir)===!1)return;Ic.copy(s).invert(),$o.copy(t.ray).applyMatrix4(Ic);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const p=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=p,x=d;g<x;g++){const m=c.getX(g);Nr.fromBufferAttribute(h,m),Nc(Nr,m,l,s,t,e,this)}}else{const p=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=p,x=d;g<x;g++)Nr.fromBufferAttribute(h,g),Nc(Nr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Nc(i,t,e,n,s,r,a){const o=$o.distanceSqToPoint(i);if(o<e){const l=new I;$o.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class bi extends an{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],p=n[s+1]-u,d=(a-u)/p;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new _t:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],r=[],a=[],o=new I,l=new fe;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ge(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ge(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class El extends Qn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new _t){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*u-d*h+this.aX,c=p*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class pg extends El{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function bl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let p=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;p*=u,d*=u,s(a,o,p,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Fr=new I,$a=new bl,ja=new bl,Za=new bl;class wl extends Qn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Fr.subVectors(s[0],s[1]).add(s[0]),c=Fr);const h=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Fr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Fr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),$a.initNonuniformCatmullRom(c.x,h.x,p.x,u.x,g,x,m),ja.initNonuniformCatmullRom(c.y,h.y,p.y,u.y,g,x,m),Za.initNonuniformCatmullRom(c.z,h.z,p.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&($a.initCatmullRom(c.x,h.x,p.x,u.x,this.tension),ja.initCatmullRom(c.y,h.y,p.y,u.y,this.tension),Za.initCatmullRom(c.z,h.z,p.z,u.z,this.tension));return n.set($a.calc(l),ja.calc(l),Za.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Fc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function mg(i,t){const e=1-i;return e*e*t}function gg(i,t){return 2*(1-i)*i*t}function vg(i,t){return i*i*t}function js(i,t,e,n){return mg(i,t)+gg(i,e)+vg(i,n)}function xg(i,t){const e=1-i;return e*e*e*t}function _g(i,t){const e=1-i;return 3*e*e*i*t}function Mg(i,t){return 3*(1-i)*i*i*t}function yg(i,t){return i*i*i*t}function Zs(i,t,e,n,s){return xg(i,t)+_g(i,e)+Mg(i,n)+yg(i,s)}class Ih extends Qn{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zs(t,s.x,r.x,a.x,o.x),Zs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sg extends Qn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zs(t,s.x,r.x,a.x,o.x),Zs(t,s.y,r.y,a.y,o.y),Zs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Nh extends Qn{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Eg extends Qn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fh extends Qn{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(js(t,s.x,r.x,a.x),js(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bg extends Qn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(js(t,s.x,r.x,a.x),js(t,s.y,r.y,a.y),js(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zh extends Qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Fc(o,l.x,c.x,u.x,h.x),Fc(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new _t().fromArray(s))}return this}}var zc=Object.freeze({__proto__:null,ArcCurve:pg,CatmullRomCurve3:wl,CubicBezierCurve:Ih,CubicBezierCurve3:Sg,EllipseCurve:El,LineCurve:Nh,LineCurve3:Eg,QuadraticBezierCurve:Fh,QuadraticBezierCurve3:bg,SplineCurve:zh});class wg extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new zc[s.type]().fromJSON(s))}return this}}class Tg extends wg{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Nh(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Fh(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Ih(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new zh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new El(t,e,n,s,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Tl extends Ee{constructor(t=[new _t(0,-.5),new _t(.5,0),new _t(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ge(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/e,h=new I,p=new _t,d=new I,g=new I,x=new I;let m=0,f=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,f=t[_+1].y-t[_].y,d.x=f*1,d.y=-m,d.z=f*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,f=t[_+1].y-t[_].y,d.x=f*1,d.y=-m,d.z=f*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let _=0;_<=e;_++){const M=n+_*u*s,v=Math.sin(M),w=Math.cos(M);for(let C=0;C<=t.length-1;C++){h.x=t[C].x*v,h.y=t[C].y,h.z=t[C].x*w,a.push(h.x,h.y,h.z),p.x=_/e,p.y=C/(t.length-1),o.push(p.x,p.y);const P=l[3*C+0]*v,D=l[3*C+1],y=l[3*C+0]*w;c.push(P,D,y)}}for(let _=0;_<e;_++)for(let M=0;M<t.length-1;M++){const v=M+_*t.length,w=v,C=v+t.length,P=v+t.length+1,D=v+1;r.push(w,C,D),r.push(P,D,C)}this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("uv",new Qt(o,2)),this.setAttribute("normal",new Qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tl(t.points,t.segments,t.phiStart,t.phiLength)}}class fa extends Tl{constructor(t=1,e=1,n=4,s=8){const r=new Tg;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new fa(t.radius,t.length,t.capSegments,t.radialSegments)}}class ir extends Ee{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new I,u=new _t;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,p=3;h<=e;h++,p+=3){const d=n+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[p]/t+1)/2,u.y=(a[p+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(o,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class De extends Ee{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],p=[],d=[];let g=0;const x=[],m=n/2;let f=0;_(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Qt(h,3)),this.setAttribute("normal",new Qt(p,3)),this.setAttribute("uv",new Qt(d,2));function _(){const v=new I,w=new I;let C=0;const P=(e-t)/n;for(let D=0;D<=r;D++){const y=[],S=D/r,R=S*(e-t)+t;for(let z=0;z<=s;z++){const G=z/s,N=G*l+o,B=Math.sin(N),q=Math.cos(N);w.x=R*B,w.y=-S*n+m,w.z=R*q,h.push(w.x,w.y,w.z),v.set(B,P,q).normalize(),p.push(v.x,v.y,v.z),d.push(G,1-S),y.push(g++)}x.push(y)}for(let D=0;D<s;D++)for(let y=0;y<r;y++){const S=x[y][D],R=x[y+1][D],z=x[y+1][D+1],G=x[y][D+1];(t>0||y!==0)&&(u.push(S,R,G),C+=3),(e>0||y!==r-1)&&(u.push(R,z,G),C+=3)}c.addGroup(f,C,0),f+=C}function M(v){const w=g,C=new _t,P=new I;let D=0;const y=v===!0?t:e,S=v===!0?1:-1;for(let z=1;z<=s;z++)h.push(0,m*S,0),p.push(0,S,0),d.push(.5,.5),g++;const R=g;for(let z=0;z<=s;z++){const N=z/s*l+o,B=Math.cos(N),q=Math.sin(N);P.x=y*q,P.y=m*S,P.z=y*B,h.push(P.x,P.y,P.z),p.push(0,S,0),C.x=B*.5+.5,C.y=q*.5*S+.5,d.push(C.x,C.y),g++}for(let z=0;z<s;z++){const G=w+z,N=R+z;v===!0?u.push(N,N+1,G):u.push(N+1,N,G),D+=3}c.addGroup(f,D,v===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ui extends De{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ui(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hr extends Ee{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const M=new I,v=new I,w=new I;for(let C=0;C<e.length;C+=3)d(e[C+0],M),d(e[C+1],v),d(e[C+2],w),l(M,v,w,_)}function l(_,M,v,w){const C=w+1,P=[];for(let D=0;D<=C;D++){P[D]=[];const y=_.clone().lerp(v,D/C),S=M.clone().lerp(v,D/C),R=C-D;for(let z=0;z<=R;z++)z===0&&D===C?P[D][z]=y:P[D][z]=y.clone().lerp(S,z/R)}for(let D=0;D<C;D++)for(let y=0;y<2*(C-D)-1;y++){const S=Math.floor(y/2);y%2===0?(p(P[D][S+1]),p(P[D+1][S]),p(P[D][S])):(p(P[D][S+1]),p(P[D+1][S+1]),p(P[D+1][S]))}}function c(_){const M=new I;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(_),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function u(){const _=new I;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];const v=m(_)/2/Math.PI+.5,w=f(_)/Math.PI+.5;a.push(v,1-w)}g(),h()}function h(){for(let _=0;_<a.length;_+=6){const M=a[_+0],v=a[_+2],w=a[_+4],C=Math.max(M,v,w),P=Math.min(M,v,w);C>.9&&P<.1&&(M<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),w<.2&&(a[_+4]+=1))}}function p(_){r.push(_.x,_.y,_.z)}function d(_,M){const v=_*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){const _=new I,M=new I,v=new I,w=new I,C=new _t,P=new _t,D=new _t;for(let y=0,S=0;y<r.length;y+=9,S+=6){_.set(r[y+0],r[y+1],r[y+2]),M.set(r[y+3],r[y+4],r[y+5]),v.set(r[y+6],r[y+7],r[y+8]),C.set(a[S+0],a[S+1]),P.set(a[S+2],a[S+3]),D.set(a[S+4],a[S+5]),w.copy(_).add(M).add(v).divideScalar(3);const R=m(w);x(C,S+0,_,R),x(P,S+2,M,R),x(D,S+4,v,R)}}function x(_,M,v,w){w<0&&_.x===1&&(a[M]=_.x-1),v.x===0&&v.z===0&&(a[M]=w/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.vertices,t.indices,t.radius,t.details)}}class da extends hr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new da(t.radius,t.detail)}}class Ci extends hr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ci(t.radius,t.detail)}}class sr extends hr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new sr(t.radius,t.detail)}}class ur extends Ee{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=t;const p=(e-t)/s,d=new I,g=new _t;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const f=r+m/n*a;d.x=h*Math.cos(f),d.y=h*Math.sin(f),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=p}for(let x=0;x<s;x++){const m=x*(n+1);for(let f=0;f<n;f++){const _=f+m,M=_,v=_+n+1,w=_+n+2,C=_+1;o.push(M,v,C),o.push(v,w,C)}}this.setIndex(o),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ur(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Kn extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new I,p=new I,d=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){const _=[],M=f/n;let v=0;f===0&&a===0?v=.5/e:f===n&&l===Math.PI&&(v=-.5/e);for(let w=0;w<=e;w++){const C=w/e;h.x=-t*Math.cos(s+C*r)*Math.sin(a+M*o),h.y=t*Math.cos(a+M*o),h.z=t*Math.sin(s+C*r)*Math.sin(a+M*o),g.push(h.x,h.y,h.z),p.copy(h).normalize(),x.push(p.x,p.y,p.z),m.push(C+v,1-M),_.push(c++)}u.push(_)}for(let f=0;f<n;f++)for(let _=0;_<e;_++){const M=u[f][_+1],v=u[f][_],w=u[f+1][_],C=u[f+1][_+1];(f!==0||a>0)&&d.push(M,v,C),(f!==n-1||l<Math.PI)&&d.push(v,w,C)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class rr extends Ee{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new I,h=new I,p=new I;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const x=g/s*r,m=d/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(x),h.y=(t+e*Math.cos(m))*Math.sin(x),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),p.subVectors(h,u).normalize(),l.push(p.x,p.y,p.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,f=(s+1)*(d-1)+g,_=(s+1)*d+g;a.push(x,m,_),a.push(m,f,_)}this.setIndex(a),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ag extends Re{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Cg extends Qi{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dl,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Ne extends Qi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dl,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Al extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Rg extends Al{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ka=new fe,Oc=new I,Bc=new I;class Oh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vl,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Oc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Oc),Bc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bc),e.updateMatrixWorld(),Ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const kc=new fe,Gs=new I,Ja=new I;class Pg extends Oh{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Gs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Gs),Ja.copy(n.position),Ja.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ja),n.updateMatrixWorld(),s.makeTranslation(-Gs.x,-Gs.y,-Gs.z),kc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc)}}class ia extends Al{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Pg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Dg extends Oh{constructor(){super(new xl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lg extends Al{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new Dg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Bh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Vc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Vc(){return performance.now()}const Gc=new fe;class Ug{constructor(t,e,n=0,s=1/0){this.ray=new ml(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new gl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Gc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gc),this}intersectObject(t,e=!0,n=[]){return jo(t,this,n,e),n.sort(Hc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)jo(t[s],this,n,e);return n.sort(Hc),n}}function Hc(i,t){return i.distance-t.distance}function jo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)jo(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sl);const tn=(i,t={})=>new Ne({color:i,flatShading:!0,...t});function zr(i){const t=i.map(a=>a.toNonIndexed()),e=t.reduce((a,o)=>a+o.attributes.position.count,0),n=new Float32Array(e*3);let s=0;for(const a of t)n.set(a.attributes.position.array,s),s+=a.attributes.position.array.length;const r=new Ee;return r.setAttribute("position",new Ie(n,3)),r.computeVertexNormals(),r}function Ig(i,t,e,n,s,r){const a=r.id,{heightAt:o,pathDist:l,plinths:c}=t,u=t.lighthouse.pos,h=new Se,p=new gt,d=[],g=(U,tt,bt,Ut=2,re=5)=>l(U,tt)>bt&&Math.hypot(U-u.x,tt-u.z)>re&&!c.some(Zt=>Math.hypot(Zt.x-U,Zt.z-tt)<Ut),x=(U,tt,bt=U*20)=>{const Ut=[];for(let re=0;re<bt&&Ut.length<U;re++){const Zt=(n()-.5)*104,we=(n()-.5)*104,me=o(Zt,we);tt(Zt,we,me)&&Ut.push({x:Zt,z:we,h:me,r:n(),s:n()})}return Ut},m=(U,tt,bt,Ut,re=!1)=>{const Zt=new nn(U,tt,Math.max(1,bt.length));return Zt.count=bt.length,bt.forEach((we,me)=>{Ut(we,me,Zt),h.updateMatrix(),Zt.setMatrixAt(me,h.matrix)}),Zt.instanceColor&&(Zt.instanceColor.needsUpdate=!0),Zt.castShadow=re,Zt.receiveShadow=!0,i.add(Zt),Zt},f=(e.mobile?.55:1)*1.8,_=zr([-.5,0,.5].map(U=>{const tt=new ui(.07,.55,3);return tt.translate(0,.27,0),tt.rotateZ(U*.5),tt.translate(U*.12,0,(U*U-.2)*.1),tt})),M=x(Math.round(280*f),(U,tt,bt)=>bt>.8&&g(U,tt,1.7,1.7,4.4));m(_,tn("#ffffff"),M,(U,tt,bt)=>{h.position.set(U.x,U.h-.05,U.z),h.rotation.set(0,U.r*6,0),h.scale.setScalar(.8+U.s*.7),bt.setColorAt(tt,p.set(a==="vinter"?U.s<.5?"#c8d4c0":"#e6eef4":a==="vulkan"?U.s<.5?"#5a6a3a":"#7a7a4a":U.s<.5?"#7fae4e":"#9cc45e"))});const v=x(Math.round((a==="vinter"?0:a==="vulkan"?30:120)*f),(U,tt,bt)=>bt>.85&&g(U,tt,1.9,2,4.5)),w=new De(.025,.03,.4,4);w.translate(0,.2,0);const C=new Ci(.11,0);C.translate(0,.42,0);const P=["#ff8fb0","#ffd54a","#ffffff","#b58cff","#ff7a4a"];m(w,tn("#5f8f3a"),v,U=>{h.position.set(U.x,U.h-.03,U.z),h.rotation.set(0,0,0),h.scale.setScalar(.9+U.s*.6)}),m(C,tn("#ffffff"),v,(U,tt,bt)=>{h.position.set(U.x,U.h-.03,U.z),h.scale.setScalar(.9+U.s*.6),bt.setColorAt(tt,p.set(P[Math.floor(U.r*P.length)]))});const D=x(Math.round((a==="tak"?36:0)*f),(U,tt,bt)=>bt>1&&g(U,tt,2.4,2.4,5)),y=new Kn(.22,8,4,0,Math.PI*2,0,Math.PI/2);y.scale(1,.7,1),y.translate(0,.28,0);const S=new De(.07,.09,.3,6);S.translate(0,.14,0),m(S,tn("#f4ead6"),D,U=>{h.position.set(U.x,U.h-.03,U.z),h.rotation.set(0,0,(U.r-.5)*.3),h.scale.setScalar(.8+U.s)},!0),m(y,tn("#ffffff"),D,(U,tt,bt)=>{h.position.set(U.x,U.h-.03,U.z),h.rotation.set(0,0,(U.r-.5)*.3),h.scale.setScalar(.8+U.s),bt.setColorAt(tt,p.set(U.r<.6?"#d8453a":"#c89a5a"))},!0);const R=zr([[-.08,0],[.07,.05],[0,-.07]].map(([U,tt],bt)=>{const Ut=new ui(.04,1.1+bt*.2,3);return Ut.translate(U,.55+bt*.1,tt),Ut}).concat([(()=>{const U=new fa(.05,.18,2,4);return U.translate(.07,1.25,.05),U})()])),z=x(Math.round(150*f),(U,tt,bt)=>bt>.05&&bt<.55&&g(U,tt,2.2,2,5),6e3),G=m(R,tn(a==="vinter"?"#a89878":a==="vulkan"?"#5a5a3a":"#9aa856"),z,U=>{h.position.set(U.x,U.h-.1,U.z),h.rotation.set(0,U.r*6,0),h.scale.setScalar(.8+U.s*.6)}),N=[],B=[];for(const U of t.paths)for(const tt of[-1,1]){let bt=null,Ut=0,re=0;for(let Zt=2;Zt<U.length-7;Zt+=1.7){const we=Zt/U.length,me=U.curve.getPointAt(we),ge=U.curve.getTangentAt(we),je=me.x-ge.z*tt*2.25,gn=me.z+ge.x*tt*2.25,Ze=o(je,gn);if(!(Ze>.5&&re<=0&&g(je,gn,1.9,2.6,6))){bt=null,re>0&&re--;continue}N.push({x:je,z:gn,h:Ze}),bt&&B.push({a:bt,b:{x:je,z:gn,h:Ze}}),bt={x:je,z:gn,h:Ze},++Ut>4+Math.floor(n()*5)&&(Ut=0,bt=null,re=3+Math.floor(n()*5))}}const q=new Tn(.14,.8,.14);q.translate(0,.4,0);const Y=new Tn(1,.07,.06),H=tn("#a07650");m(q,H,N,U=>{h.position.set(U.x,U.h-.05,U.z),h.rotation.set(0,n()*.3,(n()-.5)*.12),h.scale.set(1,1,1)},!0);const J=B.flatMap(U=>[{...U,y:.32},{...U,y:.62}]);m(Y,H,J,({a:U,b:tt,y:bt})=>{const Ut=Math.hypot(tt.x-U.x,tt.z-U.z);h.position.set((U.x+tt.x)/2,(U.h+tt.h)/2+bt-.05,(U.z+tt.z)/2),h.rotation.set(0,-Math.atan2(tt.z-U.z,tt.x-U.x),0),h.scale.set(Ut,1,1)},!0);const ct=r.dockTheta??-2.35,lt=new _t(Math.cos(ct),Math.sin(ct)),Ft=s(ct);let jt=Ft-6;for(let U=Ft-10;U<Ft+4;U+=.25)if(o(lt.x*U,lt.y*U)<.3){jt=U;break}const K=new _e,ft=tn("#b48a5e"),At=tn("#6e4a2c"),mt=8,Dt=jt-2.5;for(let U=0;U<mt/.55;U++){const tt=new Jt(new Tn(.5,.12,2.2),ft);tt.position.set(Dt+U*.55,.75+(n()-.5)*.04,0),tt.rotation.y=(n()-.5)*.05,tt.castShadow=tt.receiveShadow=!0,K.add(tt)}for(let U=0;U<=mt;U+=2)for(const tt of[-1,1]){const bt=new Jt(new De(.12,.12,2.2,6),At);bt.position.set(Dt+U,.1,tt*1.05),bt.castShadow=!0,K.add(bt)}K.rotation.y=-ct,i.add(K);const Lt=new _e,Gt=new De(.9,.9,3.4,10,1,!0,0,Math.PI);Gt.rotateZ(Math.PI/2),Gt.rotateX(Math.PI/2),Gt.scale(1,.6,.7);const pe=new Jt(Gt,tn("#3f6f9a",{side:He}));pe.rotation.y=Math.PI/2,pe.castShadow=!0,Lt.add(pe);for(const U of[-.6,.6]){const tt=new Jt(new Tn(.3,.08,1.2),ft);tt.position.set(U,-.15,0),Lt.add(tt)}const qt=new Jt(new Tn(2.4,.06,.12),ft);qt.position.set(.2,.05,.4),qt.rotation.y=.3,Lt.add(qt);const de=lt.x*(Dt+mt-1)+-lt.y*2.1,k=lt.y*(Dt+mt-1)+lt.x*2.1;Lt.position.set(de,.3,k),Lt.rotation.y=-ct,i.add(Lt);const be=new _e,Yt=new Jt(new Gn(3,1.4,10,5),new Le({color:"#4a3a2a",wireframe:!0}));Yt.position.y=1;const zt=Yt.geometry.attributes.position;for(let U=0;U<zt.count;U++)zt.setZ(U,Math.sin(zt.getX(U)/3*Math.PI+1.5)*.15-Math.abs(zt.getY(U))*.05);be.add(Yt);for(const U of[-1.6,1.6]){const tt=new Jt(new De(.07,.09,2,5),At);tt.position.set(U,.9,0),tt.castShadow=!0,be.add(tt)}for(let U=0;U<5;U++){const tt=new Jt(new Kn(.09,6,4),tn("#f0a43a"));tt.position.set(-1.2+U*.6,1.66,.05),be.add(tt)}const Bt=jt-4.5,te=4.2,Nt=lt.x*Bt-lt.y*te,L=lt.y*Bt+lt.x*te;be.position.set(Nt,o(Nt,L)-.1,L),be.rotation.y=-ct+Math.PI/2,i.add(be),d.push({x:Nt,z:L,r:1.4});const b=new De(.42,.42,.95,10);b.translate(0,.47,0);const X=new De(.44,.44,.08,10),it=new Tn(.8,.8,.8);it.translate(0,.4,0);const rt=[],nt=(U,tt,bt,Ut)=>{for(let re=0;re<60&&bt>0;re++){const Zt=U+(n()-.5)*6,we=tt+(n()-.5)*6,me=o(Zt,we);me<.4||!g(Zt,we,2.3,2.4,4.6)||rt.some(ge=>Math.hypot(ge.x-Zt,ge.z-we)<1.1)||(rt.push({x:Zt,z:we,h:me,kind:Ut??(n()<.6?"barrel":"crate"),r:n()}),bt--)}};nt(lt.x*(jt-2.5),lt.y*(jt-2.5),5),nt(u.x+6,u.z+1,3,"barrel"),nt(u.x-6,u.z+2,2);const Pt=rt.filter(U=>U.kind==="barrel"),vt=rt.filter(U=>U.kind==="crate");m(b,tn("#8a5a36"),Pt,U=>{h.position.set(U.x,U.h-.05,U.z),h.rotation.set(0,U.r*6,0),h.scale.setScalar(1)},!0),m(X,tn("#3e3a38"),Pt.flatMap(U=>[{...U,y:.2},{...U,y:.75}]),U=>{h.position.set(U.x,U.h-.05+U.y,U.z)},!1),m(it,tn("#b8925e"),vt,U=>{h.position.set(U.x,U.h-.05,U.z),h.rotation.set(0,U.r*6,0),h.scale.setScalar(.8+U.r*.4)},!0);for(const U of rt)d.push({x:U.x,z:U.z,r:.55});const St=x(Math.round(380*f),(U,tt,bt)=>bt>.9&&g(U,tt,1.6,1.6,4.4)),$t=new Ci(.06,0);$t.translate(0,.06,0),m($t,new Ne({color:a==="vulkan"?"#ff9a5a":"#fffdf4"}),St,U=>{h.position.set(U.x,U.h-.02,U.z),h.rotation.set(0,0,0),h.scale.setScalar(.8+U.s*.8)});const at=(U,tt,bt)=>{const Ut=[];for(let re=0;re<U*40&&Ut.length<U;re++){const Zt=(n()-.5)*130,we=(n()-.5)*130,me=o(Zt,we),ge=.05-me;ge>tt&&ge<bt&&Math.hypot(Zt-u.x,we-u.z)>6&&Ut.push({x:Zt,z:we,h:me,r:n(),s:n()})}return Ut},wt=zr([0,1,2].map(U=>{const tt=new ui(.08,.9+U*.25,3);return tt.translate((U-1)*.12,.45+U*.12,U%2*.1),tt.rotateZ((U-1)*.25),tt})),kt=at(Math.round(90*f),.35,1.8),Vt=m(wt,tn("#4f9a5a"),kt,U=>{h.position.set(U.x,U.h,U.z),h.rotation.set(0,U.r*6,0),h.scale.setScalar(.8+U.s*.7)}),Tt=zr([[0,0,.32],[.3,.1,.22],[-.25,.05,.26],[.05,.3,.2]].map(([U,tt,bt])=>{const Ut=new Ci(bt,0);return Ut.translate(U,bt*.8,tt),Ut})),Kt=at(Math.round((a==="tak"?28:0)*f),.5,1.6),Ht=["#b58cff","#ff8fa8","#ffc65a","#7fd6ff"];m(Tt,tn("#ffffff"),Kt,(U,tt,bt)=>{h.position.set(U.x,U.h,U.z),h.rotation.set(0,U.r*6,0),h.scale.setScalar(.8+U.s*.9),bt.setColorAt(tt,p.set(Ht[Math.floor(U.r*Ht.length)]))});const se=new sr(.16,0);se.scale(.45,.3,1.4);const O=at(e.mobile?5:8,.9,2.6).map(U=>({...U,rad:2+U.s*3,speed:(.25+U.r*.3)*(U.r<.5?1:-1)})),pt=9,j=new nn(se,new Le({color:"#2f5f72",transparent:!0,opacity:.75}),Math.max(1,O.length*pt));j.count=O.length*pt,j.renderOrder=1,i.add(j);const st=Array.from({length:pt},()=>[(n()-.5)*1.4,(n()-.5)*.25,(n()-.5)*1.4,n()*6]),Et=U=>{Lt.position.y=.3+Math.sin(U*1.2)*.08,Lt.rotation.z=Math.sin(U*.9)*.04,Lt.rotation.x=Math.sin(U*1.3+1)*.03,O.forEach((tt,bt)=>{const Ut=U*tt.speed+tt.r*6,re=tt.x+Math.cos(Ut)*tt.rad,Zt=tt.z+Math.sin(Ut)*tt.rad,we=Math.atan2(-Math.sin(Ut)*tt.speed,Math.cos(Ut)*tt.speed);for(let me=0;me<pt;me++){const[ge,je,gn,Ze]=st[me];h.position.set(re+ge+Math.sin(U*2+Ze)*.1,Math.max(o(re,Zt)+.25,-.75)+je,Zt+gn),h.rotation.set(0,we+Math.sin(U*6+Ze)*.15,0),h.scale.setScalar(1),h.updateMatrix(),j.setMatrixAt(bt*pt+me,h.matrix)}}),j.instanceMatrix.needsUpdate=!0,!((U*60|0)%2)&&(z.forEach((tt,bt)=>{h.position.set(tt.x,tt.h-.1,tt.z),h.rotation.set(Math.sin(U*1.7+tt.x*.3)*.08,tt.r*6,Math.cos(U*1.4+tt.z*.3)*.08),h.scale.setScalar(.8+tt.s*.6),h.updateMatrix(),G.setMatrixAt(bt,h.matrix)}),G.instanceMatrix.needsUpdate=!0,kt.forEach((tt,bt)=>{h.position.set(tt.x,tt.h,tt.z),h.rotation.set(Math.sin(U*1.1+tt.x)*.12,tt.r*6,Math.cos(U*.9+tt.z)*.12),h.scale.setScalar(.8+tt.s*.7),h.updateMatrix(),Vt.setMatrixAt(bt,h.matrix)}),Vt.instanceMatrix.needsUpdate=!0)};K.updateMatrixWorld(!0);const Mt=[];return K.children.forEach(U=>{if(U.geometry.type==="CylinderGeometry"){const tt=U.getWorldPosition(new I);Mt.push({x:tt.x,z:tt.z,r:.15})}}),Mt.push({x:de,z:k,r:.9}),{colliders:d,update:Et,obstacles:Mt}}function Wc(i,{heightTex:t,ext:e,grid:n,quality:s,sunDir:r,colors:a,level:o=.05,size:l=220,center:c=[0,0],maxDepth:u=100}){const h=On.merge([yt.fog,{uTime:{value:0},uHeight:{value:t},uExt:{value:e},uGrid:{value:n},uLevel:{value:o},uMaxDepth:{value:u},uShallow:{value:new gt(a.shallow)},uMid:{value:new gt(a.mid)},uDeep:{value:new gt(a.deep)},uSun:{value:r.clone().normalize()},uCaustic:{value:(s.mobile?.8:1)*a.caustic}}]);h.uHeight.value=t;const p=new Re({uniforms:h,transparent:!0,depthWrite:!1,fog:!0,vertexShader:`
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

      void main() {
        float depth = uLevel - ground(vWorld.xz);
        if (depth < -0.02 || depth > uMaxDepth) discard; // maxDepth: små basseng skal ikke tegnes over lavlandet
        float d = max(depth, 0.0);

        // Farge og gjennomsiktighet etter dybde
        vec3 col = mix(uShallow, uMid, smoothstep(0.02, 0.5, d));
        col = mix(col, uDeep, smoothstep(0.9, 2.2, d));
        float alpha = mix(0.3, 0.93, smoothstep(0.0, 1.6, d));
        alpha = max(alpha, 0.72 * smoothstep(0.06, 0.32, d)); // grunne pytter blir turkise, ikke melkehvite

        // Sandriller under grunt vann
        float rip = sin(vWorld.x * 2.1 + sin(vWorld.z * 0.6) * 2.0 + vWorld.z * 0.7);
        col *= 1.0 - 0.05 * rip * (1.0 - smoothstep(0.2, 1.4, d));

        // Kaustikk: to lag med ulik skala og fart, sterkest på grunt/middels vann
        float c1 = voronoiEdge(vWorld.xz * 0.24 + vec2(uTime * 0.03, uTime * 0.02), uTime * 0.45);
        float c2 = voronoiEdge(vWorld.xz * 0.39 - vec2(uTime * 0.025, -uTime * 0.03), uTime * 0.6 + 2.0);
        float caustic = pow(1.0 - smoothstep(0.0, 0.09, c1), 3.0) * 0.6 + pow(1.0 - smoothstep(0.0, 0.07, c2), 3.0) * 0.4;
        float cMask = smoothstep(0.05, 0.35, d) * (1.0 - smoothstep(0.9, 2.1, d));
        col += vec3(0.85, 1.0, 0.95) * caustic * cMask * 0.2 * uCaustic;
        alpha = max(alpha, caustic * cMask * 0.12);

        // Skum: tynn linje som pulserer inn og ut langs kysten, pluss en svakere ute
        float wave = 0.5 + 0.5 * sin(uTime * 1.1 + vWorld.x * 0.08 + vWorld.z * 0.06);
        float edge1 = 0.05 + wave * 0.16;
        // Linjebredden følger dybde-gradienten, så slake bunner (pytter) ikke blir hvite flater
        float fw = max(fwidth(d) * 1.6, 0.006);
        float foam = 1.0 - smoothstep(0.0, min(0.05, fw * 2.0), abs(d - edge1));
        foam += (1.0 - smoothstep(0.0, 0.035, d)) * 0.8;
        float edge2 = 0.42 + wave * 0.18;
        foam += (1.0 - smoothstep(0.0, min(0.05, fw * 2.0), abs(d - edge2))) * 0.35 * smoothstep(0.004, 0.02, fw);
        // brudd i linja så den ikke ser tegnet ut
        foam *= 0.65 + 0.35 * sin(vWorld.x * 1.7 + vWorld.z * 1.3 + uTime * 0.7);
        foam = clamp(foam, 0.0, 1.0);
        col = mix(col, vec3(1.0), foam * 0.9);
        alpha = max(alpha, foam * 0.92);

        // Små krusninger og solglans
        vec3 nrm = normalize(vec3(
          sin(vWorld.x * 1.3 + uTime * 1.4) * 0.06 + sin(vWorld.z * 2.2 - uTime * 1.1) * 0.04, 1.0,
          cos(vWorld.z * 1.1 + uTime * 1.2) * 0.06 + cos(vWorld.x * 1.9 + uTime) * 0.04));
        vec3 viewDir = normalize(cameraPosition - vWorld);
        vec3 h = normalize(uSun + viewDir);
        float spec = pow(max(dot(nrm, h), 0.0), 90.0);
        col += vec3(1.0, 0.9, 0.75) * spec * 0.8 * smoothstep(0.3, 1.5, d);
        alpha = max(alpha, spec * 0.6);

        gl_FragColor = vec4(col, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`}),d=l<50?8:s.mobile?40:64,g=new Gn(l,l,d,d);g.rotateX(-Math.PI/2);const x=new Jt(g,p);return x.position.set(c[0],o,c[1]),x.renderOrder=2,i.add(x),{mesh:x,update(m){h.uTime.value=m}}}function Xc(i,t){const e=new ha(Float32Array.from(i),t,t,oa,kn);return e.magFilter=e.minFilter=rn,e.generateMipmaps=!1,e.needsUpdate=!0,e}function Ki(i){const t=i.map(([h])=>h.index?h.toNonIndexed():h),e=t.reduce((h,p)=>h+p.attributes.position.count,0),n=new Float32Array(e*3),s=new Float32Array(e*3),r=new gt,a=new I;let o=0;t.forEach((h,p)=>{const d=i[p][1],g=h.attributes.position;for(let x=0;x<g.count;x++)a.fromBufferAttribute(g,x),d(a,r),n.set([a.x,a.y,a.z],(o+x)*3),s.set([r.r,r.g,r.b],(o+x)*3);o+=g.count});const l=new Ee;l.setAttribute("position",new Ie(n,3)),l.setAttribute("color",new Ie(s,3)),l.computeVertexNormals();let c=0;const u=l.attributes.normal;return t.forEach((h,p)=>{const d=i[p][2],g=h.attributes.position.count;if(d)for(let x=0;x<g;x++)a.fromBufferAttribute(l.attributes.position,c+x).sub(d).normalize(),u.setXYZ(c+x,a.x,a.y,a.z);c+=g}),l}const Zo=.7,Ko=3.8;function Ng(){const i=[],e=Ko/8,n=new gt("#7a5434"),s=new gt("#a57a4e");for(let r=0;r<8;r++){const a=r/8,o=(r+1)/8,l=.24-a*.08,c=.24-o*.08,u=new De(c,l*1.12,e,7,1),h=u.attributes.position;for(let p=0;p<h.count;p++){const d=h.getY(p)+e/2+r*e,g=d/Ko;h.setXYZ(p,h.getX(p)+Zo*g*g,d,h.getZ(p))}i.push([u,(p,d)=>d.copy(n).lerp(s,p.y/e%1)])}return Ki(i)}function Fg(i){const n=[],s=[];for(let a=0;a<=12;a++){const o=a/12;s.push(new I(0,.35*o-1.25*o*o,o*2.7))}for(let a=0;a<12;a++){const o=a/12,l=s[a],c=s[a+1],u=.62*Math.sin(Math.PI*Math.min(1,o*1.1+.08))+.05;for(const h of[-1,1]){const p=new I(h*u,l.y-.08-u*.25,l.z+.32);n.push(l.x,l.y,l.z,c.x,c.y,c.z,p.x,p.y,p.z)}}const r=new Ee;return r.setAttribute("position",new Qt(n,3)),r}function zg(){const i=[],t=new gt("#3f8a3a"),e=new gt("#9ad25a"),n=8;for(let s=0;s<n;s++){const r=Fg();r.rotateX(-.15+s%2*.25),r.rotateY(s/n*Math.PI*2+s%2*.2),i.push([r,(a,o)=>{const l=Math.hypot(a.x,a.z);o.copy(t).lerp(e,Math.min(1,l/2.4))}])}for(let s=0;s<3;s++){const r=new Kn(.16,6,4);r.translate(Math.cos(s*2.1)*.18,-.2,Math.sin(s*2.1)*.18),i.push([r,(a,o)=>o.set("#6b4a2a")])}return Ki(i)}function qc(i,t,e){const n=i.map(([s,r,a,o],l)=>{const c=new Ci(o,2),u=c.attributes.position;for(let h=0;h<u.count;h++){const p=u.getX(h),d=u.getY(h),g=u.getZ(h),x=1+.07*Math.sin(p*7+l)*Math.sin(d*6)+.05*Math.sin(g*9+d*4);u.setXYZ(h,p*x,d*x*.92,g*x)}return c.translate(s,r,a),[c,(h,p)=>p.copy(e).lerp(t,qe.smoothstep(h.y,r-o*.6,r+o*.9)),new I(s,r,a)]});return Ki(n)}function Og(i){const t=[],e=new gt("#2f6a48"),n=new gt("#4a8a5a"),s=new gt("#ffffff");return[[1.5,1.5,.9],[1.15,1.35,1.8],[.8,1.2,2.6],[.45,.9,3.25]].forEach(([r,a,o])=>{const l=new ui(r,a,10,2),c=l.attributes.position;for(let u=0;u<c.count;u++)c.getY(u)<-a/2+.01&&c.setY(u,c.getY(u)+Math.sin(u*1.7)*.12);l.translate(0,o,0),t.push([l,(u,h)=>{const p=(u.y-o+a/2)/a;h.copy(e).lerp(n,p),i&&p>.12&&h.lerp(s,Math.min(1,(p-.12)*2.6))}])}),Ki(t)}function Bg(){const i=[],t=new De(.12,.26,3,6,4),e=t.attributes.position;for(let n=0;n<e.count;n++){const s=e.getY(n);e.setX(n,e.getX(n)+Math.sin(s*1.7)*.12)}return t.translate(0,1.5,0),i.push([t,(n,s)=>s.set(n.y<.4?"#1e1a18":"#3a302a")]),[[.4,1.9,.9,.7],[-.5,2.3,-.8,.6],[.2,2.7,.6,.5]].forEach(([n,s,r,a])=>{const o=new De(.03,.08,a,4);o.translate(0,a/2,0),o.rotateZ(r),o.translate(n*.3,s,0),i.push([o,(l,c)=>c.set("#2e2622")])}),Ki(i)}function kg(i,t,e,n){const s=t.filter(N=>N.kind==="palm"),r=t.filter(N=>N.kind==="round"),a=t.filter(N=>N.kind==="bush"),o=t.filter(N=>N.kind==="pine"),l=t.filter(N=>N.kind==="dead"),c=new Ne({vertexColors:!0}),u=new Ne({vertexColors:!0,side:He}),h=new gt(n.trees.leaf[0]),p=new gt(n.trees.leaf[1]),d=new De(.16,.26,1.6,7);d.translate(0,.8,0);const g=Ki([[d,(N,B)=>B.set("#7a5434")]]),x=qc([[0,2.2,0,1.15],[.8,1.9,.3,.8],[-.7,1.95,-.2,.85],[.1,2,-.85,.75],[-.2,2.9,.2,.8],[.35,1.8,.85,.7]],h,p),m=qc([[0,.45,0,.6],[.5,.35,.2,.45],[-.45,.38,-.15,.48],[.05,.7,.1,.42]],h,p),f=(N,B,q)=>{const Y=new nn(N,B,Math.max(1,q));return Y.count=q,Y.castShadow=!0,Y.receiveShadow=!0,i.add(Y),Y},_=f(Ng(),c,s.length),M=f(zg(),u,s.length),v=f(g,c,r.length),w=f(x,c,r.length),C=f(m,c,a.length),P=new De(.14,.22,1.2,6);P.translate(0,.6,0);const D=f(Ki([[P,(N,B)=>B.set("#5a3e2a")]]),c,o.length),y=f(Og(n.id==="vinter"),c,o.length),S=f(Bg(),c,l.length),R=new Se;s.forEach((N,B)=>{R.position.set(N.x,N.y-.1,N.z),R.rotation.set(0,N.phase,0),R.scale.setScalar(N.s),R.updateMatrix(),_.setMatrixAt(B,R.matrix)}),r.forEach((N,B)=>{R.position.set(N.x,N.y-.1,N.z),R.rotation.set(0,N.phase,0),R.scale.setScalar(N.s),R.updateMatrix(),v.setMatrixAt(B,R.matrix)}),o.forEach((N,B)=>{R.position.set(N.x,N.y-.1,N.z),R.rotation.set(0,N.phase,0),R.scale.setScalar(N.s),R.updateMatrix(),D.setMatrixAt(B,R.matrix)}),l.forEach((N,B)=>{R.position.set(N.x,N.y-.1,N.z),R.rotation.set(0,N.phase,(N.phase%1-.5)*.15),R.scale.setScalar(N.s),R.updateMatrix(),S.setMatrixAt(B,R.matrix)});const z=N=>{s.forEach((B,q)=>{const Y=Math.cos(B.phase),H=Math.sin(B.phase);R.position.set(B.x+Zo*Y*B.s,B.y-.1+Ko*B.s,B.z-Zo*H*B.s),R.rotation.set(Math.sin(N*1.2+B.phase)*.07,B.phase+Math.sin(N*.7+B.phase)*.05,Math.cos(N*1+B.phase)*.07),R.scale.setScalar(B.s),R.updateMatrix(),M.setMatrixAt(q,R.matrix)}),M.instanceMatrix.needsUpdate=!0,r.forEach((B,q)=>{R.position.set(B.x,B.y-.1,B.z),R.rotation.set(Math.sin(N*1.1+B.phase)*.025,B.phase,Math.cos(N*.9+B.phase)*.025),R.scale.setScalar(B.s),R.updateMatrix(),w.setMatrixAt(q,R.matrix)}),w.instanceMatrix.needsUpdate=!0,a.forEach((B,q)=>{const Y=1+Math.sin(N*1.6+B.phase)*.035;R.position.set(B.x,B.y-.12,B.z),R.rotation.set(0,B.phase,0),R.scale.set(B.s*Y,B.s/Y,B.s*Y),R.updateMatrix(),C.setMatrixAt(q,R.matrix)}),C.instanceMatrix.needsUpdate=!0,o.forEach((B,q)=>{R.position.set(B.x,B.y-.1,B.z),R.rotation.set(Math.sin(N*.9+B.phase)*.02,B.phase,Math.cos(N*.8+B.phase)*.02),R.scale.setScalar(B.s),R.updateMatrix(),y.setMatrixAt(q,R.matrix)}),y.instanceMatrix.needsUpdate=!0};return z(0),{colliders:[...s.map(N=>({x:N.x,z:N.z,r:.35*N.s})),...r.map(N=>({x:N.x,z:N.z,r:.4*N.s})),...a.map(N=>({x:N.x,z:N.z,r:.7*N.s})),...o.map(N=>({x:N.x,z:N.z,r:.4*N.s})),...l.map(N=>({x:N.x,z:N.z,r:.3*N.s}))],update:z}}function Qa(i,t=5){const e=[],n=[],s=new gt,r=new gt;for(let o=0;o<t;o++){const l=i()*Math.PI*2,c=i()*.16,u=.28+i()*.3,h=.04+i()*.03,p=Math.cos(l)*c,d=Math.sin(l)*c,g=(i()-.5)*.25,x=i()*Math.PI,m=Math.cos(x)*h,f=Math.sin(x)*h;e.push(p-m,0,d-f,p+m,0,d+f,p+Math.cos(l)*g,u,d+Math.sin(l)*g),s.setRGB(.72,.72,.72),r.setRGB(1.2,1.22,1.12),n.push(s.r,s.g,s.b,s.r,s.g,s.b,r.r,r.g,r.b)}const a=new Ee;return a.setAttribute("position",new Qt(e,3)),a.setAttribute("color",new Qt(n,3)),a.setAttribute("normal",new Qt(new Array(e.length/3).fill(0).flatMap(()=>[0,1,0]),3)),a}function Vg(){const i=[];for(let a=0;a<3;a++){const o=new Kn(.07,6,3);o.scale(1,.25,1.15);const l=a*2.094;o.translate(Math.cos(l)*.065,.05,Math.sin(l)*.065),i.push(o.toNonIndexed())}const t=i.reduce((a,o)=>a+o.attributes.position.count,0),e=new Float32Array(t*3),n=new Float32Array(t*3);let s=0;for(const a of i)e.set(a.attributes.position.array,s*3),n.set(a.attributes.normal.array,s*3),s+=a.attributes.position.count;const r=new Ee;return r.setAttribute("position",new Ie(e,3)),r.setAttribute("normal",new Ie(n,3)),r}function Gg(i,t,e,n,s){const{heightAt:r,pathDist:a,plinths:o}=t,l=t.lighthouse.pos,c={uTime:{value:0}},h=(R=>(R.onBeforeCompile=z=>{z.uniforms.uTime=c.uTime,z.vertexShader=z.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          #ifdef USE_INSTANCING
            vec2 ip = instanceMatrix[3].xz;
          #else
            vec2 ip = vec2(0.0);
          #endif
          float sway = sin(uTime * 1.8 + ip.x * 0.35 + ip.y * 0.27) * 0.6 + sin(uTime * 3.1 + ip.x * 1.3) * 0.25;
          transformed.x += sway * transformed.y * 0.22;
          transformed.z += cos(uTime * 1.5 + ip.y * 0.4) * transformed.y * 0.12;`),z.fragmentShader=z.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
  normal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);`)},R))(new Ne({vertexColors:!0,side:He})),p=new Ne({color:"#ffffff"}),d=[Qa(s,7),Qa(s,8),Qa(s,6)],g=Vg(),x={tak:{grass:["#3f8a3a","#6fbf4a"],density:1,clover:.22,cloverCol:["#3a8a3a","#5aa84a"]},vinter:{grass:["#9a9a7a","#c8c4a0"],density:.18,clover:0,cloverCol:["#fff","#fff"]},vulkan:{grass:["#4a5a30","#6a7a3a"],density:.35,clover:0,cloverCol:["#fff","#fff"]}}[n.id],m=(e.mobile?.45:1)*x.density,f=13,_=8,M=Math.round(720*m),v=[],w=new Se,C=new gt,P=new gt(x.grass[0]),D=new gt(x.grass[1]),y=(R,z,G)=>{if(G<.72)return!1;const N=a(R,z);if(N<1||N<1.7&&s()<.6||Math.hypot(R-l.x,z-l.z)<4.3||n.volcano&&Math.hypot(R-n.volcano.x,z-n.volcano.z)<n.volcano.r*.7)return!1;for(const B of o)if((B.x-R)**2+(B.z-z)**2<2.6)return!1;return!t.extrasBlock||!t.extrasBlock(R,z)};for(let R=0;R<_;R++)for(let z=0;z<_;z++){const G=-_*f/2+R*f,N=-_*f/2+z*f;for(const[B,q]of[[0,M*.4],[1,M*.35],[2,M*.25]]){const Y=[];for(let J=0;J<q*3&&Y.length<q;J++){const ct=G+s()*f,lt=N+s()*f,Ft=r(ct,lt);y(ct,lt,Ft)&&Y.push([ct,lt,Ft])}if(!Y.length)continue;const H=new nn(d[B],h,Y.length);H.userData.tier=B,Y.forEach(([J,ct,lt],Ft)=>{w.position.set(J,lt-.04,ct),w.rotation.set(0,s()*6.28,0),w.scale.setScalar(.8+s()*.7),w.updateMatrix(),H.setMatrixAt(Ft,w.matrix),H.setColorAt(Ft,C.copy(P).lerp(D,s()))}),H.receiveShadow=!0,H.computeBoundingSphere(),i.add(H),v.push(H)}if(x.clover>0){const B=[],q=G+s()*f,Y=N+s()*f;for(let H=0;H<M*x.clover*3&&B.length<M*x.clover;H++){const J=q+(s()-.5)*6,ct=Y+(s()-.5)*6,lt=r(J,ct);y(J,ct,lt)&&B.push([J,ct,lt])}if(B.length){const H=new nn(g,p,B.length),J=new gt(x.cloverCol[0]),ct=new gt(x.cloverCol[1]);B.forEach(([lt,Ft,jt],K)=>{w.position.set(lt,jt-.02,Ft),w.rotation.set(0,s()*6.28,0),w.scale.setScalar(.8+s()*.8),w.updateMatrix(),H.setMatrixAt(K,w.matrix),H.setColorAt(K,C.copy(J).lerp(ct,s()))}),H.receiveShadow=!0,H.userData.tier=1,H.computeBoundingSphere(),i.add(H),v.push(H)}}}return{update(R){c.uTime.value=R},setLevel:R=>v.forEach(z=>{z.visible=R==="high"||z.userData.tier===0,z.receiveShadow=R==="high"}),count:v.reduce((R,z)=>R+z.count,0)}}const to=[[[-56,4],[-44,6],[-33,1],[-24,-10],[-14,-5],[-7,1],[-2,-.5],[0,-2.4]],[[56,-2],[44,-4],[34,4],[25,-8],[15,-3],[7,2],[2,-.5],[0,-2.4]],[[-30,56],[-25,42],[-14,35],[-21,23],[-11,15],[-4,8],[-1,2],[0,-2.4]],[[31,56],[26,42],[16,33],[23,21],[12,13],[5,7],[1,2],[0,-2.4]]],Us=[{id:"tak",name:"Tåkeøya",blurb:"Palmer, turkis lagune og en joint som har glødd i hundre år.",seed:1,radius:46,edgeAmp:[4.5,2.6,1.5],lighthouse:[0,-6],paths:to,plateaus:[{x:-24,z:-27,r:8,h:4.2},{x:27,z:-25,r:7,h:3.4},{x:-37,z:21,r:6,h:3}],waterfall:{pool:[-24,-21.2],poolR:1.9,lip:[-24,-19],basin:[-24,-15.6],basinR:2.7},palette:{sand:"#d6bf8c",grass:"#5a9e44",grass2:"#3c8236",path:"#9c8462",deep:"#cdb987",pathMix:.35},water:{shallow:"#8fe6d2",mid:"#3cc8c4",deep:"#1a8ea4",caustic:1},sky:{fog:"#b9d4dc",hemiSky:"#eaf4ff",hemiGround:"#4a5a44",hemi:1.1,sun:"#fff1d8",sunI:2.5,exposure:1,sunDir:[14,30,10],grade:{tint:[1,1,.99],lift:[0,.006,.02],sat:1.06,vignette:.22}},skyDusk:{fog:"#d9a48e",hemiSky:"#ffd6b0",hemiGround:"#5a4a72",hemi:1.35,sun:"#ffb27a",sunI:2.7,exposure:1.05,sunDir:[24,17,4],grade:{tint:[1.07,1,.9],lift:[.025,.008,.03],sat:1.1,vignette:.3}},trees:{beach:{palm:.75,bush:.25},inland:{palm:.25,round:.45,bush:.3},leaf:["#a8d85a","#2f7a3a"]},rock:["#a9a49c","#7f9f52"],life:["fireflies","butterflies","birds","leaves"],balance:{hp:1,speed:1,extra:null}},{id:"vinter",name:"Vinterfjorden",blurb:"Snø, nordlys og isflak. Forbudsdirektoratet har kledd seg varmt.",seed:2,radius:47,edgeAmp:[3.5,3.2,2.2],lighthouse:[0,-6],paths:to,palette:{sand:"#b9bec4",grass:"#f1f5fa",grass2:"#dfe8f2",path:"#c2ccd8",deep:"#9aa8b4"},water:{shallow:"#b8e2ee",mid:"#5a9cc0",deep:"#1d3f66",caustic:.55},sky:{fog:"#2a3550",hemiSky:"#9fb8ff",hemiGround:"#1c2440",hemi:1.1,sun:"#b8ccff",sunI:1.5,exposure:1.15,sunDir:[-12,26,8],grade:{tint:[.96,1,1.06],lift:[0,.01,.03],sat:1.05,vignette:.32}},trees:{beach:{pine:.6,bush:.4},inland:{pine:.8,bush:.2},leaf:["#e8f0f8","#2c5a44"]},rock:["#8a929c","#eef4fa"],life:["snow","aurora","icefloes"],balance:{hp:1.15,speed:.92,extra:{type:"tank",n:1,gap:4,path:"both",from:3}}},{id:"vulkan",name:"Vulkanøya",blurb:"Svart sand, lava-elver og glødende stein. Her trenger ingen fyrstikker.",seed:3,radius:45,edgeAmp:[5,2.2,1.8],lighthouse:[0,-6],paths:to,volcano:{x:0,z:-30,h:9,r:11},dockTheta:1.57,lava:[[[-3,-27],[-9,-31],[-16,-36],[-24,-40],[-32,-44],[-40,-46]],[[3,-27],[10,-32],[18,-37],[27,-41],[36,-45]]],palette:{sand:"#3a3533",grass:"#5a6a3c",grass2:"#3f4c2e",path:"#3e3b3a",deep:"#2c2826",pathMix:.15},water:{shallow:"#5a8f90",mid:"#2c5a63",deep:"#122b35",caustic:.4},sky:{fog:"#4a2c2a",hemiSky:"#ff9a6a",hemiGround:"#2a1a1a",hemi:1.15,sun:"#ff7a40",sunI:2.3,exposure:1.1,sunDir:[20,20,6],grade:{tint:[1.05,.98,.94],lift:[.02,0,0],sat:1.08,vignette:.32}},trees:{beach:{dead:.5,bush:.5},inland:{dead:.45,palm:.2,bush:.35},leaf:["#7a9a4a","#2f4a2a"]},rock:["#2e2a2a","#5a3a2a"],life:["ash","embers"],balance:{hp:1.3,speed:1.08,extra:{type:"gull",n:3,gap:1.5,from:2}}}];function Hg(i){const[t,e,n]=i.edgeAmp,s=i.seed;return r=>i.radius+t*Math.sin(3*r+.4*s)+e*Math.sin(7*r+1.3*s)+n*Math.sin(11*r+s)}function Wg(i,t){return t.map((e,n)=>{const s=e.map(a=>({...a})),r=i.balance.extra;return r&&n+1>=r.from&&s.push({...r,n:r.n+Math.floor((n+1-r.from)/2),at:5}),s})}function ar(){try{return Math.max(1,Math.min(Us.length,Number(localStorage.getItem("glod-unlocked"))||1))}catch{return 1}}function Xg(i){try{i+2>ar()&&localStorage.setItem("glod-unlocked",String(Math.min(Us.length,i+2)))}catch{}}function Or(i,t,{color:e,size:n,speed:s,drift:r,additive:a,area:o=46,top:l=22}){const c=new Float32Array(t*3),u=new Float32Array(t);for(let f=0;f<t;f++)c[f*3]=(Math.random()-.5)*o*2,c[f*3+1]=Math.random()*l,c[f*3+2]=(Math.random()-.5)*o*2,u[f]=Math.random()*6.28;const h=new Ee;h.setAttribute("position",new Ie(c,3));const p=document.createElement("canvas");p.width=p.height=32;const d=p.getContext("2d"),g=d.createRadialGradient(16,16,0,16,16,16);g.addColorStop(0,"rgba(255,255,255,1)"),g.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=g,d.fillRect(0,0,32,32);const x=new ua({color:e,size:n,map:new bi(p),transparent:!0,depthWrite:!1,blending:a?fi:Ti,opacity:a?1:.85}),m=new Sl(h,x);return m.frustumCulled=!1,i.add(m),(f,_,M)=>{for(let v=0;v<t;v++){let w=c[v*3+1]-s*f*(.7+u[v]%1*.6);c[v*3]+=Math.sin(M*.7+u[v])*r*f,(s<0?w>l:w<0)&&(w=s<0?0:l,c[v*3]=_.x+(Math.random()-.5)*o*2,c[v*3+2]=_.z+(Math.random()-.5)*o*2),c[v*3+1]=w}h.attributes.position.needsUpdate=!0}}function qg(i,t,e,n,s=160){const r=new wl(i.map(([h,p])=>new I(h,0,p))),a=r.getLength(),o=[],l=[],c=[];for(let h=0;h<=s;h++){const p=h/s,d=r.getPointAt(p),g=r.getTangentAt(p),x=-g.z,m=g.x,f=t*(.75+.25*Math.sin(p*9));for(const _ of[-1,1]){const M=d.x+x*f*_,v=d.z+m*f*_;o.push(M,e(M,v)+n,v),l.push(p*a,(_+1)/2)}if(h<s){const _=h*2;c.push(_,_+1,_+2,_+1,_+3,_+2)}}const u=new Ee;return u.setAttribute("position",new Qt(o,3)),u.setAttribute("uv",new Qt(l,2)),u.setIndex(c),u.computeVertexNormals(),{geo:u,curve:r,len:a}}function Yg(i,t,e,n){const{heightAt:s}=t,r=[],a=[],o=[],l=e.mobile?.5:1,c=new Set(n.life);if(c.has("aurora")){const d=new Re({transparent:!0,depthWrite:!1,blending:fi,side:He,fog:!1,uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const[g,x,m]of[[0,-66,0],[-62,-20,Math.PI/2.4],[62,-24,-Math.PI/2.4]]){const f=new Jt(new Gn(150,26,96,1),d);f.position.set(g,20,x),f.rotation.y=m,i.add(f)}a.push((g,x,m)=>d.uniforms.uTime.value=m)}if(c.has("snow")&&a.push(Or(i,Math.round(900*l),{color:"#ffffff",size:.28,speed:2.2,drift:.8})),c.has("ash")&&a.push(Or(i,Math.round(500*l),{color:"#6a625e",size:.22,speed:1.2,drift:.6})),c.has("embers")&&a.push(Or(i,Math.round(160*l),{color:"#ff8a3a",size:.25,speed:-1.6,drift:1.2,additive:!0,top:10})),c.has("icefloes")){const d=[];for(let _=0;_<6e3&&d.length<70*l;_++){const M=(Math.random()-.5)*120,v=(Math.random()-.5)*120,w=.05-s(M,v);w>.15&&w<1.4&&d.every(C=>Math.hypot(C.x-M,C.z-v)>2.2)&&d.push({x:M,z:v,s:.6+Math.random()*1.1,r:Math.random()*6})}const g=new De(1,.9,.18,7),x=g.attributes.position;for(let _=0;_<x.count;_++){const M=Math.atan2(x.getZ(_),x.getX(_)),v=.75+.35*Math.abs(Math.sin(M*2.3+_));x.setX(_,x.getX(_)*v),x.setZ(_,x.getZ(_)*v)}g.computeVertexNormals();const m=new nn(g,new Ne({color:"#eaf6ff"}),Math.max(1,d.length));m.count=d.length,m.receiveShadow=!0,i.add(m);const f=new Se;a.push((_,M,v)=>{d.forEach((w,C)=>{f.position.set(w.x+Math.sin(v*.1+w.r)*.4,.08+Math.sin(v*1.1+w.r)*.03,w.z),f.rotation.set(Math.sin(v*.9+w.r)*.03,w.r+v*.02,Math.cos(v*.8+w.r)*.03),f.scale.set(w.s,1,w.s),f.updateMatrix(),m.setMatrixAt(C,f.matrix)}),m.instanceMatrix.needsUpdate=!0})}if(n.lava){const d=new Re({uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const g of n.lava){const x=qg(g,1.25,s,.07);i.add(new Jt(x.geo,d));const m=[];for(let f=0;f<=1;f+=1.4/x.len){const _=x.curve.getPointAt(Math.min(1,f));o.push({x:_.x,z:_.z,r:1.4})}for(const f of[.25,.7]){const _=x.curve.getPointAt(f),M=new ia("#ff6a2a",14,12,1.6);M.position.set(_.x,s(_.x,_.z)+1.2,_.z),i.add(M),m.push(M)}a.push((f,_,M)=>m.forEach((v,w)=>v.intensity=12+3*Math.sin(M*2.3+w)))}a.push((g,x,m)=>d.uniforms.uTime.value=m)}if(n.volcano){const d=n.volcano;o.push({x:d.x,z:d.z,r:d.r*.55});const g=new Jt(new ir(d.r*.22,20),new Le({color:new gt("#ff5a1a").multiplyScalar(2.4)}));g.rotation.x=-Math.PI/2,g.position.set(d.x,s(d.x,d.z)+.2,d.z),i.add(g);const x=new da(.35,0),m=[];for(let M=0;M<3e3&&m.length<50*l;M++){const v=(Math.random()-.5)*96,w=(Math.random()-.5)*96,C=s(v,w);C>.4&&t.pathDist(v,w)>2.2&&m.push({x:v,z:w,h:C,s:.5+Math.random()})}const f=new nn(x,new Le({color:new gt("#ff7a2a").multiplyScalar(1.8)}),Math.max(1,m.length));f.count=m.length;const _=new Se;m.forEach((M,v)=>{_.position.set(M.x,M.h,M.z),_.rotation.set(M.s,M.s*3,0),_.scale.set(M.s,M.s*.5,M.s),_.updateMatrix(),f.setMatrixAt(v,_.matrix)}),i.add(f)}if(n.waterfall&&n.waterfall._lvl!==void 0){const d=n.waterfall,g=d.basin[0]-d.lip[0],x=d.basin[1]-d.lip[1],m=Math.hypot(g,x),f=g/m,_=x/m,M=d._lvl-.1,v=14,w=1.25,C=[],P=[],D=[];for(let B=0;B<=v;B++){const q=B/v,Y=.35+1.5*q*q,H=M-(M-.06)*(q*q*.6+q*.4);for(const J of[-1,1])C.push(d.lip[0]+f*Y-_*w*J*(.85+q*.3),H,d.lip[1]+_*Y+f*w*J*(.85+q*.3)),P.push((J+1)/2,q);if(B<v){const J=B*2;D.push(J,J+1,J+2,J+1,J+3,J+2)}}const y=new Ee;y.setAttribute("position",new Qt(C,3)),y.setAttribute("uv",new Qt(P,2)),y.setIndex(D);const S=new Re({transparent:!0,depthWrite:!1,side:He,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform float uTime; varying vec2 vUv;
        float h(float x) { return fract(sin(x * 127.1) * 43758.5); }
        void main() {
          float col = floor(vUv.x * 18.0);
          float streak = fract(vUv.y * (1.6 + h(col) * 1.2) - uTime * (1.4 + h(col + 3.0) * 0.8));
          float s = smoothstep(0.0, 0.25, streak) * (1.0 - smoothstep(0.55, 1.0, streak));
          float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
          vec3 c = mix(vec3(0.45, 0.85, 0.88), vec3(1.0), s * 0.8 + vUv.y * 0.3);
          gl_FragColor = vec4(c, (0.55 + 0.4 * s) * edge);
        }`});i.add(new Jt(y,S));const R=new Jt(new ir(1.4,20),new Le({color:"#ffffff",transparent:!0,opacity:.7,depthWrite:!1}));R.rotation.x=-Math.PI/2;const z=d.lip[0]+f*1.9,G=d.lip[1]+_*1.9;R.position.set(z,.1,G),i.add(R);const N=Or(i,Math.round(60*l),{color:"#ffffff",size:.35,speed:-.9,drift:.6,area:1.4,top:2.2});a.push((B,q,Y)=>{S.uniforms.uTime.value=Y,R.scale.setScalar(1+Math.sin(Y*5)*.08),R.material.opacity=.55+.15*Math.sin(Y*7),N(B,{x:z,z:G},Y)}),o.push({x:z,z:G,r:.9})}const u=(d,g)=>o.some(x=>(x.x-d)**2+(x.z-g)**2<x.r*x.r);let h=0;return{colliders:r,update:(d,g=t.lighthouse.pos)=>{const x=Math.min(.05,Math.max(0,d-h));h=d;for(const m of a)m(x,g,d)},blocks:u,blockers:o}}const Wn=20;function ri(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function $g(i){const t=new wl(i.map(([s,r])=>new I(s,0,r)),!1,"catmullrom",.5),e=t.getLength(),n=t.getSpacedPoints(400);return{curve:t,length:e,samples:n}}function jg(i,t,e,n){const s=3+n%2,r=[],a=[],o=[],l=new gt(t),c=l.clone().multiplyScalar(.72),u=new gt(e),h=new gt;let p=0,d=0,g=0;for(let m=0;m<s;m++){const f=1.25-m*.22+i()*.15,_=.45+i()*.25,M=new Ci(1,2).toNonIndexed(),v=M.attributes.position,w=M.attributes.uv;for(let C=0;C<v.count;C++){let P=v.getX(C),D=v.getY(C),y=v.getZ(C);D=Math.sign(D)*Math.pow(Math.abs(D),.55);const S=1+.12*Math.sin(P*5+m)*Math.sin(y*4+n)+.06*Math.sin(D*9);P*=f*S,y*=f*.85*S,D=D*_*.5;const R=qe.smoothstep(D/(_*.5),.45,.85);h.copy(c).lerp(l,qe.smoothstep(D/(_*.5),-.9,.3)).lerp(u,R*(m===s-1?1:.6)),r.push(P+d,D+p+_*.5,y+g),a.push(h.r,h.g,h.b),o.push(w.getX(C)*2,w.getY(C)*2)}p+=_*.82,d+=(i()-.5)*.4,g+=(i()-.5)*.35}const x=new Ee;return x.setAttribute("position",new Qt(r,3)),x.setAttribute("color",new Qt(a,3)),x.setAttribute("uv",new Qt(o,2)),x.computeVertexNormals(),x}function Zg(i,t,e){const n=Hg(e),s=new I(e.lighthouse[0],0,e.lighthouse[1]),r=e.paths.map($g),a=r.flatMap(A=>A.samples),o=(A,E)=>{let F=1/0;for(let W=0;W<a.length;W+=3){const Z=a[W],Q=(Z.x-A)**2+(Z.z-E)**2;Q<F&&(F=Q)}return Math.sqrt(F)},l=(A,E,F=!1)=>{const W=Math.hypot(A,E),Z=n(Math.atan2(E,A)),Q=qe.smoothstep(Z-W,-3,7),dt=.9+.7*Math.sin(A*.17+1)*Math.cos(E*.21)+.35*Math.sin(A*.5+E*.4)+.3*Math.sin(A*.31-E*.23+2.1)+.18*Math.cos(A*.73+E*.61),xt=2.4*Math.exp(-((A-s.x-2)**2+(E-s.z+1)**2)/60);let ht=-2.2+Q*(2.2+dt+xt);Q>.85&&ht<.35&&(ht=Math.max(-.42,.35-(.35-ht)*3.2));for(const ut of e.plateaus||[]){const Wt=Math.hypot(A-ut.x,E-ut.z),Xt=Math.atan2(E-ut.z,A-ut.x),ve=ut.r+Math.sin(Xt*5+ut.x)*.8+Math.sin(Xt*11)*.3;ht+=ut.h*qe.smoothstep(ve-Wt,0,1.3)}if(e.waterfall&&!F){const ut=e.waterfall,Wt=Math.hypot(A-ut.pool[0],E-ut.pool[1]);Wt<ut.poolR+.6&&(ut._lvl??(ut._lvl=l(ut.pool[0],ut.pool[1],!0)-.12),ht=Math.min(ht,ut._lvl-.48*Math.sqrt(Math.max(0,1-Wt/(ut.poolR+.6)))));const Xt=qe.clamp(((A-ut.pool[0])*(ut.lip[0]-ut.pool[0])+(E-ut.pool[1])*(ut.lip[1]-ut.pool[1]))/((ut.lip[0]-ut.pool[0])**2+(ut.lip[1]-ut.pool[1])**2),0,1),ve=ut.pool[0]+(ut.lip[0]-ut.pool[0])*Xt,oe=ut.pool[1]+(ut.lip[1]-ut.pool[1])*Xt;Math.hypot(A-ve,E-oe)<.75&&ut._lvl!==void 0&&(ht=Math.min(ht,ut._lvl-.25));const Ct=Math.hypot(A-ut.basin[0],E-ut.basin[1]);Ct<ut.basinR&&(ht=Math.min(ht,Math.max(-.42,.05-.47*Math.sqrt(1-Ct/ut.basinR))))}if(e.volcano){const ut=e.volcano,Wt=Math.hypot(A-ut.x,E-ut.z);ht+=ut.h*Math.max(0,1-Wt/ut.r)**1.4-ut.h*.5*Math.max(0,1-Wt/(ut.r*.25))}return ht},c=68,u=t.mobile?160:176,h=new Float32Array((u+1)*(u+1)),p=new Float32Array((u+1)*(u+1));for(let A=0;A<=u;A++)for(let E=0;E<=u;E++){const F=-c+E/u*c*2,W=-c+A/u*c*2,Z=o(F,W);p[A*(u+1)+E]=Z;let Q=l(F,W);const dt=qe.smoothstep(Z,1.4,3.2),xt=Math.max(l(F,W)*.6+.3,.45);Q=qe.lerp(Math.min(Q,xt+.1),Q,dt),h[A*(u+1)+E]=Q}const d=(A,E,F)=>{const W=qe.clamp((E+c)/(c*2)*u,0,u-.001),Z=qe.clamp((F+c)/(c*2)*u,0,u-.001),Q=Math.floor(W),dt=Math.floor(Z),xt=W-Q,ht=Z-dt,ut=A[dt*(u+1)+Q],Wt=A[dt*(u+1)+Q+1],Xt=A[(dt+1)*(u+1)+Q],ve=A[(dt+1)*(u+1)+Q+1];return(ut*(1-xt)+Wt*xt)*(1-ht)+(Xt*(1-xt)+ve*xt)*ht},g=(A,E)=>d(h,A,E),x=(A,E)=>d(p,A,E),m=(A,E)=>g(A,E)>.35,f=.5,_=(A,E)=>Math.max(Math.abs(g(A+.4,E)-g(A-.4,E)),Math.abs(g(A,E+.4)-g(A,E-.4)))/.8,M=(A,E)=>g(A,E)>.05-f&&_(A,E)<1.05,v=t.mobile?170:256,w=new Gn(c*2,c*2,v,v);w.rotateX(-Math.PI/2);const C=w.attributes.position,P=new Float32Array(C.count*3),D=e.palette,y=new gt(e.rock[0]).multiplyScalar(.7),S=new gt(e.rock[0]).multiplyScalar(1.08),R=new gt,z=new gt(D.sand),G=new gt(D.grass),N=new gt(D.grass2),B=new gt(D.path),q=new gt(D.deep),Y=new gt,H=ri(7);for(let A=0;A<C.count;A++){const E=C.getX(A),F=C.getZ(A),W=g(E,F);C.setY(A,W);const Z=x(E,F),Q=Y.copy(G).lerp(N,qe.clamp((W-1)*.6+H()*.3,0,1)).clone();Y.copy(q).lerp(z,qe.smoothstep(W,0,.3)).lerp(Q,qe.smoothstep(W,.62,.95));const dt=.5+.5*Math.sin(E*1.7+F*.9)*Math.cos(F*1.3-E*.6);Z<2.1&&W>.15&&Y.lerp(B,qe.smoothstep(1.9-Z+(dt-.5)*(D.pathMix??.3)*2.4,0,.7));const xt=_(E,F);if(xt>.75){const ht=.5+.5*Math.sin(W*7.5+Math.sin(E*.7+F*.5)*1.5);R.copy(y).lerp(S,ht),Y.lerp(R,qe.smoothstep(xt,.75,1.3))}Y.offsetHSL(0,0,(H()-.5)*.04),P.set([Y.r,Y.g,Y.b],A*3)}w.setAttribute("color",new Ie(P,3)),w.computeVertexNormals();const J=new Ne({vertexColors:!0});J.onBeforeCompile=A=>{A.vertexShader=A.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTW;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vTW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),A.fragmentShader=A.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vTW;`).replace("#include <color_fragment>",`#include <color_fragment>
        float sandMask = 1.0 - smoothstep(0.55, 0.85, vTW.y);
        float rip = sin(vTW.x * 2.3 + sin(vTW.z * 0.5) * 2.2 + vTW.z * 0.8);
        diffuseColor.rgb *= 1.0 - 0.045 * rip * sandMask;
        // Malt overflate: myk to-oktavs støy i lyshet og litt i fargetone
        vec2 q = vTW.xz;
        float n1 = sin(q.x * 0.9 + sin(q.y * 0.7) * 1.7) * sin(q.y * 1.1 + sin(q.x * 0.5) * 1.3);
        float n2 = sin(q.x * 3.7 + q.y * 2.3) * sin(q.y * 3.1 - q.x * 1.9);
        diffuseColor.rgb *= 0.93 + 0.07 * n1 + 0.035 * n2;
        diffuseColor.g *= 1.0 + 0.025 * n1;`)};const ct=new Jt(w,J);ct.receiveShadow=!0,i.add(ct);const lt=[],Ft=(A,E)=>Math.hypot(A-s.x,E-s.z)>6;for(const[A,E]of r.entries()){let F=A%2===0?1:-1,W=0;for(let Z=.16;Z<.95&&W<6;Z+=.055){const Q=E.curve.getPointAt(Z),dt=E.curve.getTangentAt(Z),xt=new I(-dt.z,0,dt.x).normalize();for(const ht of[F,-F]){const ut=Q.x+xt.x*3.6*ht,Wt=Q.z+xt.z*3.6*ht;if(!(x(ut,Wt)<2.7||!m(ut,Wt)||!Ft(ut,Wt))&&!lt.some(Xt=>Math.hypot(Xt.x-ut,Xt.z-Wt)<5.2)&&!(e.volcano&&Math.hypot(ut-e.volcano.x,Wt-e.volcano.z)<e.volcano.r+2)){lt.push({x:ut,z:Wt,tower:null}),W++;break}}F=-F}}const jt=(()=>{const A=document.createElement("canvas");A.width=A.height=256;const E=A.getContext("2d");E.fillStyle="#ffffff",E.fillRect(0,0,256,256);const F=ri(77);for(let Z=0;Z<260;Z++){const Q=200+F()*55|0;E.fillStyle=`rgba(${Q},${Q},${Q-6},${.25+F()*.35})`,E.beginPath(),E.ellipse(F()*256,F()*256,6+F()*26,3+F()*12,F()*3,0,Math.PI*2),E.fill()}E.strokeStyle="rgba(90,90,90,0.35)",E.lineWidth=1.5;for(let Z=0;Z<26;Z++){let Q=F()*256,dt=F()*256;E.beginPath(),E.moveTo(Q,dt);for(let xt=0;xt<4;xt++)Q+=(F()-.5)*30,dt+=F()*18,E.lineTo(Q,dt);E.stroke()}const W=new bi(A);return W.colorSpace=en,W.wrapS=W.wrapT=di,W})(),K=new Ne({color:"#8c8f88",map:jt}),ft=new Ne({color:"#5f8a42",map:jt}),At=new Le({color:"#ffe3a0",transparent:!0,opacity:.28,depthWrite:!1}),mt=new Le({color:"#f5f7f8",transparent:!0,opacity:.12,depthWrite:!1}),Dt=new De(1.25,1.5,.9,8);Dt.translate(0,.35,0);const Lt=new De(1.28,1.28,.12,8);Lt.translate(0,.82,0);const Gt=new ur(.55,.75,6);Gt.rotateX(-Math.PI/2);const pe=new Kn(1,7,5),qt=lt.length,de=new nn(Dt,K,qt),k=new nn(Lt,ft,qt),be=new nn(Gt,At,qt),Yt=new nn(pe,mt,qt*3);de.castShadow=de.receiveShadow=k.receiveShadow=!0;const zt=new Se;lt.forEach((A,E)=>{A.y0=g(A.x,A.z),A.y=A.y0+.88,zt.position.set(A.x,A.y0,A.z),zt.rotation.set(0,E,0),zt.scale.setScalar(1),zt.updateMatrix(),de.setMatrixAt(E,zt.matrix),k.setMatrixAt(E,zt.matrix)}),i.add(de,k,be,Yt);const Bt=A=>{lt.forEach((E,F)=>{const W=!E.tower;zt.position.set(E.x,E.y0+.9,E.z),zt.rotation.set(0,A*.5,0),zt.scale.setScalar(W?1:0),zt.updateMatrix(),be.setMatrixAt(F,zt.matrix);for(let Z=0;Z<3;Z++){const Q=A*.4+Z*2.1+E.x,dt=(Q%1+1)%1;zt.position.set(E.x+Math.cos(Q*2.3)*.9,E.y0+.5+dt*.9,E.z+Math.sin(Q*2.3)*.9),zt.rotation.set(0,0,0),zt.scale.set(W?.6+dt*.5:0,W?.3+dt*.2:0,W?.6+dt*.5:0),zt.updateMatrix(),Yt.setMatrixAt(F*3+Z,zt.matrix)}}),be.instanceMatrix.needsUpdate=!0,Yt.instanceMatrix.needsUpdate=!0},te=new _e,Nt=g(s.x,s.z);te.position.set(s.x,Nt,s.z);const L=(()=>{const A=document.createElement("canvas");A.width=512,A.height=512;const E=A.getContext("2d");E.fillStyle="#f6f1e6",E.fillRect(0,0,512,512);const F=ri(5);for(let Z=0;Z<520;Z++){const Q=F()*512,dt=F()*512,xt=2+F()*9,ht=F()<.65;E.fillStyle=ht?`rgba(${90+F()*40},${120+F()*40},${60+F()*20},${.12+F()*.18})`:`rgba(${130+F()*30},${95+F()*20},60,${.12+F()*.15})`,E.beginPath(),E.ellipse(Q,dt,xt,xt*(.4+F()*.6),F()*3,0,Math.PI*2),E.fill()}for(let Z=0;Z<1200;Z++){E.strokeStyle=`rgba(190,170,140,${.04+F()*.07})`,E.lineWidth=1;const Q=F()*512,dt=F()*512;E.beginPath(),E.moveTo(Q,dt),E.lineTo(Q+(F()-.5)*8,dt+6+F()*20),E.stroke()}for(let Z=0;Z<26;Z++){const Q=F()*512;E.strokeStyle=F()<.5?"rgba(255,255,255,0.35)":"rgba(150,130,100,0.18)",E.lineWidth=2+F()*5,E.beginPath(),E.moveTo(Q,512),E.bezierCurveTo(Q+40,350,Q-30,160,Q+20+F()*40,0),E.stroke()}E.strokeStyle="rgba(175,145,100,0.55)",E.lineWidth=4,E.beginPath(),E.moveTo(60,512),E.bezierCurveTo(90,330,110,180,150,0),E.stroke();const W=new bi(A);return W.colorSpace=en,W.wrapS=di,W})(),b=new Ne({map:L}),X=(()=>{const A=document.createElement("canvas");A.width=A.height=128;const E=A.getContext("2d");E.fillStyle="#e9dcbf",E.fillRect(0,0,128,128),E.strokeStyle="#a88d62",E.lineWidth=3,E.beginPath();for(let W=0;W<Math.PI*9;W+=.1){const Z=4+W*2;E.lineTo(64+Math.cos(W)*Z,64+Math.sin(W)*Z)}E.stroke();const F=new bi(A);return F.colorSpace=en,F})(),it=new Ne({color:"#e6d8b8"}),rt=new Ne({map:X}),nt=new Ne({color:"#3a3330",flatShading:!0}),Pt=new Ne({color:"#b8b2aa",flatShading:!0}),vt=(()=>{const A=document.createElement("canvas");A.width=256,A.height=128;const E=A.getContext("2d"),F=E.createLinearGradient(0,0,0,128);F.addColorStop(0,"#fff0b0"),F.addColorStop(.45,"#ffb040"),F.addColorStop(1,"#ff5a10"),E.fillStyle=F,E.fillRect(0,0,256,128);const W=ri(11);for(let Q=0;Q<70;Q++){const dt=W();E.fillStyle=dt<.5?`rgba(70,60,55,${.5+W()*.4})`:`rgba(170,165,160,${.5+W()*.4})`,E.beginPath(),E.ellipse(W()*256,20+W()*108,4+W()*14,2+W()*6,W()*3,0,Math.PI*2),E.fill()}E.strokeStyle="rgba(60,30,20,0.6)",E.lineWidth=1.5;for(let Q=0;Q<40;Q++){const dt=W()*256,xt=W()*128;E.beginPath(),E.moveTo(dt,xt),E.lineTo(dt+(W()-.5)*30,xt+(W()-.5)*20),E.stroke()}const Z=new bi(A);return Z.colorSpace=en,Z})(),St=new Le({map:vt,color:new gt("#ffffff").multiplyScalar(2.2)});function $t({len:A,rTop:E,rBot:F,crutchH:W,seg:Z,bend:Q,glowMat:dt,shadow:xt}){const ht=new _e,ut=new Jt(new De(F*.98,F*.95,W,Z),[it,it,rt]);ut.position.y=W/2,ut.castShadow=xt,ht.add(ut);const Wt=new De(E,F,A,Z,8,!0),Xt=Wt.attributes.position,ve=ri(Math.round(A*100)),oe=Array.from({length:6},()=>[ve()*6.28,ve()*3,.03+ve()*.04]);for(let ae=0;ae<Xt.count;ae++){const Fe=Xt.getY(ae),fn=(Fe+A/2)/A,Ns=Math.atan2(Xt.getZ(ae),Xt.getX(ae));let es=1+Math.sin(Ns*7+Fe*3)*.018;for(const[su,ru,au]of oe)es+=Math.cos(Ns-su)*Math.sin(fn*6+ru)*au*.5;Xt.setXYZ(ae,Xt.getX(ae)*es+Q*fn*fn*A,Fe,Xt.getZ(ae)*es)}Wt.translate(0,W+A/2,0),Wt.computeVertexNormals();const Ct=new Jt(Wt,b);Ct.castShadow=xt,Ct.receiveShadow=!0,ht.add(Ct);const on=Q*A,le=W+A,ln=new De(E*1.02,E*1.04,E*.35,Z,1,!0),Ln=ln.attributes.position;for(let ae=0;ae<Ln.count;ae++)Ln.getY(ae)>0&&Ln.setY(ae,Ln.getY(ae)+Math.sin(ae*2.7)*E*.12);ln.computeVertexNormals();const Xe=new Jt(ln,nt);Xe.position.set(on,le+E*.12,0),ht.add(Xe);const Hn=new Jt(new Kn(E*.97,Z,6,0,Math.PI*2,0,Math.PI/2),dt);Hn.scale.y=.38,Hn.position.set(on,le+E*.2,0),ht.add(Hn);const Me=[];for(let ae=0;ae<5;ae++){const Fe=new Jt(new da(E*(.2+ae%3*.07),0),Pt),fn=ae*1.25+.3;Fe.position.set(on+Math.cos(fn)*E*.55,le+E*.33,Math.sin(fn)*E*.55),Fe.scale.y=.4,ht.add(Fe),Me.push(Fe)}const un=new ui(E*.28,E*1.1,6,4),En=un.attributes.position;for(let ae=0;ae<En.count;ae++){const Fe=En.getY(ae),fn=(Fe/(E*1.1)+.5)*2.2,Ns=En.getX(ae),es=En.getZ(ae);En.setX(ae,Ns*Math.cos(fn)-es*Math.sin(fn)+(Fe+E*.55)*.25),En.setZ(ae,Ns*Math.sin(fn)+es*Math.cos(fn))}un.computeVertexNormals();const Ke=new Jt(un,nt);return Ke.position.set(on+E*.1,le+E*.7,E*.1),Ke.rotation.z=-.35,ht.add(Ke),ht.userData={glow:Hn,top:new I(on,le,0),charRing:Xe,ashFlakes:Me},ht}const at=new Jt(new De(3.3,3.9,1,9),K);at.position.y=.3,at.castShadow=at.receiveShadow=!0,te.add(at);const wt=7.4,kt=1.4,Vt=$t({len:wt,rTop:2.35,rBot:.95,crutchH:kt,seg:22,bend:.06,glowMat:St,shadow:!0});Vt.position.y=.75,Vt.rotation.set(.06,0,-.03);const Tt=Vt.userData.charRing;te.add(Vt);const Kt=new Se;Kt.position.y=kt+wt+1.2,Vt.add(Kt);const Ht=new ia("#ff8a3a",40,34,1.5);Ht.position.y=kt+wt+1.4,Vt.add(Ht);const se=new ui(2.2,16,16,1,!0);se.translate(0,-8,0),se.rotateZ(Math.PI/2);const O=new Le({color:"#ffc890",transparent:!0,opacity:.05,blending:fi,depthWrite:!1,side:He}),pt=new _e;pt.position.y=kt+wt+.8;const j=new Jt(se,O),st=j.clone();st.rotation.y=Math.PI,pt.add(j,st),Vt.add(pt);const Et=new ia("#ffa050",12,10,1.4);Et.position.set(0,1.3,4.6),te.add(Et);const Mt=[],U=new Le({color:new gt("#ffffff").multiplyScalar(3.2)}),tt=new gt("#ff6a1a"),bt=new gt("#1a1716"),Ut=$t({len:.78,rTop:.16,rBot:.075,crutchH:.16,seg:8,bend:.08,glowMat:U,shadow:!0});Ut.updateMatrixWorld(!0);for(let A=0;A<Wn;A++){const E=A/Wn*Math.PI*2,F=new Se;F.position.set(Math.cos(E)*3.45,.8,Math.sin(E)*3.45),F.scale.setScalar(1.45),F.rotation.set(Math.sin(E)*.35,E,-Math.cos(E)*.35),te.add(F),F.updateMatrix(),Mt.push(F)}let re=null;const Zt=new fe;for(const A of Ut.children){if(!A.isMesh)continue;const E=new nn(A.geometry,A.material,Wn);if(E.castShadow=A.castShadow,Mt.forEach((F,W)=>E.setMatrixAt(W,Zt.multiplyMatrices(F.matrix,A.matrix))),A.material===U){re=E;for(let F=0;F<Wn;F++)E.setColorAt(F,tt)}te.add(E)}i.add(te),te.updateMatrixWorld(!0);const we=new I;Kt.getWorldPosition(we);const me={tip:we,pos:new I(s.x,Nt,s.z),lights:Wn,flamePos(A){const E=new I(0,1,0);return Mt[Math.max(0,Math.min(Wn-1,A))].localToWorld(E)},setLights(A){this.lights=A;for(let F=0;F<Wn;F++)re.setColorAt(F,F<A?tt:bt);re.instanceColor.needsUpdate=!0;const E=A/Wn;this.glow=E,Et.intensity=3+9*E,O.opacity=.01+.04*E,Tt.scale.y=1+(1-E)*2.5}},ge=ri(42),je=[];for(let A=0;A<3e3&&je.length<(t.mobile?70:104);A++){const E=(ge()-.5)*102,F=(ge()-.5)*102,W=g(E,F);if(W<.75||x(E,F)<3.2||!Ft(E,F)||lt.some(xt=>Math.hypot(xt.x-E,xt.z-F)<3.2)||je.some(xt=>Math.hypot(xt.x-E,xt.z-F)<2.4)||e.volcano&&Math.hypot(E-e.volcano.x,F-e.volcano.z)<e.volcano.r)continue;const Z=W<1.45?e.trees.beach:e.trees.inland;let Q=ge(),dt="bush";for(const[xt,ht]of Object.entries(Z)){if(Q<ht){dt=xt;break}Q-=ht}je.push({x:E,z:F,y:W,s:(dt==="bush"?.8:.75)+ge()*.45,phase:ge()*6.28,kind:dt})}const gn=kg(i,je,t,e),Ze=new Se,vn=[];for(let A=0;A<1200&&vn.length<(t.mobile?40:56);A++){const E=ge()*Math.PI*2,F=n(E)-3+ge()*5.5,W=Math.cos(E)*F,Z=Math.sin(E)*F;x(W,Z)<3.4||g(W,Z)<-1.2||vn.some(Q=>Math.hypot(Q.x-W,Q.z-Z)<2.2)||vn.push({x:W,z:Z,s:.6+ge()*1.2,r:ge()*6})}for(const A of e.plateaus||[]){const E=Math.round(A.r*2*Math.PI/2.3);for(let F=0;F<E;F++){const W=F/E*Math.PI*2+ge()*.2,Z=A.r+Math.sin(W*5+A.x)*.8+Math.sin(W*11)*.3-.2,Q=A.x+Math.cos(W)*Z,dt=A.z+Math.sin(W)*Z;e.waterfall&&Math.hypot(Q-e.waterfall.lip[0],dt-e.waterfall.lip[1])<2.2||x(Q,dt)<2.6||vn.push({x:Q,z:dt,s:1.3+ge()*.9,r:ge()*6,cliff:!0})}}[0,1,2].map(A=>jg(ri(31+A*7+e.seed),e.rock[0],e.rock[1],A)).map((A,E)=>{const F=vn.filter((Z,Q)=>Q%3===E),W=new nn(A,new Ne({vertexColors:!0,map:jt}),Math.max(1,F.length));return W.count=F.length,F.forEach((Z,Q)=>{Ze.position.set(Z.x,g(Z.x,Z.z)-.2*Z.s,Z.z),Ze.rotation.set(0,Z.r*2,0),Ze.scale.set(Z.s*1.1,Z.s*.9,Z.s),Ze.updateMatrix(),W.setMatrixAt(Q,Ze.matrix)}),W.castShadow=W.receiveShadow=!0,i.add(W),W});const pi=Ig(i,{heightAt:g,pathDist:x,plinths:lt,paths:r,lighthouse:me},t,ri(99+e.seed),n,e),mi=Yg(i,{heightAt:g,pathDist:x,paths:r,lighthouse:me,islandEdge:n},t,e),Is=Gg(i,{heightAt:g,pathDist:x,plinths:lt,lighthouse:me,extrasBlock:mi.blocks},t,e,ri(7+e.seed)),gi=Float32Array.from(h),xa=[...vn.map(A=>({x:A.x,z:A.z,r:A.s*.85})),...pi.obstacles];for(const A of xa){const E=A.r+1,F=c*2/u,W=Math.floor((A.x-E+c)/F),Z=Math.ceil((A.x+E+c)/F),Q=Math.floor((A.z-E+c)/F),dt=Math.ceil((A.z+E+c)/F);for(let xt=Math.max(0,Q);xt<=Math.min(u,dt);xt++)for(let ht=Math.max(0,W);ht<=Math.min(u,Z);ht++){const ut=-c+ht*F,Wt=-c+xt*F,Xt=Math.max(0,Math.hypot(ut-A.x,Wt-A.z)-A.r);if(Xt>.9)continue;const ve=xt*(u+1)+ht,oe=.06-Xt*.35,Ct=1-Xt/.9;gi[ve]=Math.max(gi[ve],gi[ve]+(oe-gi[ve])*Ct*Ct)}}if(e.waterfall&&e.waterfall._lvl!==void 0){const A=e.waterfall;Wc(i,{heightTex:Xc(gi,u+1),ext:c,grid:u,quality:t,sunDir:new I(24,17,4),colors:e.water,level:A._lvl,size:9,maxDepth:.8,center:[(A.pool[0]+A.lip[0])/2,(A.pool[1]+A.lip[1])/2]})}const _a=Wc(i,{heightTex:Xc(gi,u+1),ext:c,grid:u,quality:t,sunDir:new I(24,17,4),colors:e.water}),T=[{x:s.x,z:s.z,r:3.5},...lt.map(A=>({x:A.x,z:A.z,r:1.4})),...gn.colliders,...vn.filter(A=>g(A.x,A.z)>-.45).map(A=>({x:A.x,z:A.z,r:A.s*.85})),...pi.colliders,...mi.colliders];return{def:e,paths:r,plinths:lt,lighthouse:me,heightAt:g,pathDist:x,isLand:m,isWalkable:(A,E)=>M(A,E)&&!mi.blocks(A,E),colliders:T,update:A=>{_a.update(A),pi.update(A),mi.update(A),Is.update(A);const E=me.glow??1,F=.75+.25*Math.sin(A*1.3)+.1*Math.sin(A*7.1);St.color.setRGB(1,.85,.75).multiplyScalar(E>0?(.7+1.5*E)*F:.12),Ht.intensity=(8+40*E)*F,pt.rotation.y=A*.6,gn.update(A);const W=me._c||(me._c=new gt);for(let Z=0;Z<me.lights;Z++)re.setColorAt(Z,W.copy(tt).multiplyScalar(.75+.25*Math.sin(A*9+Z*1.7)));re.instanceColor.needsUpdate=!0,Bt(A)},terrain:ct,extras:mi,grass:Is}}const ce=(i,t={})=>new Ne({color:i,flatShading:!0,...t}),Br=(i,t)=>new Le({color:new gt(i).multiplyScalar(t)}),Rt={coat:ce("#f2c23c"),coatDark:ce("#c99a22"),skin:ce("#f1c7a0"),beanieG:ce("#3f8f4a"),beanieY:ce("#f2c94c"),beanieR:ce("#d4553a"),boot:ce("#3a2c22"),eyeW:new Le({color:"#ffffff"}),eyeB:new Le({color:"#1c1820"}),suit:ce("#6b6f78"),suitDark:ce("#3c4150"),suitNavy:ce("#2c3a5c"),shirt:ce("#f4f1ea"),tie:ce("#b8322a"),paper:ce("#fbfaf4"),stampInk:ce("#a8233a"),woodLight:ce("#c49360"),glasses:ce("#222428"),binderR:ce("#c94f3f"),binderB:ce("#3f6fc9"),binderY:ce("#e6b93f"),gull:ce("#f4f2ee"),gullWing:ce("#b8c0c8"),beak:ce("#f0a43a"),megaRed:ce("#d8453a"),mouth:new Le({color:"#4a2a2a"}),smile:new Le({color:"#c8485a"}),wood:ce("#9a6a42"),woodDark:ce("#6e4a2c"),iron:ce("#55585e"),speaker:ce("#2a2a30"),cone:ce("#4a4a52"),rasG:ce("#3f9a4a"),rasY:ce("#f2c94c"),rasR:ce("#d4553a"),chipsBag:ce("#f2b632"),chipsRed:ce("#d8453a"),chip:ce("#f0c860"),ringMat:new Ne({color:"#f1efe9",transparent:!0,opacity:.8}),ember:Br("#ff9a3a",2.4),emberCore:Br("#fff1c2",2),rolling:ce("#5a9a5a"),rollingPaper:ce("#fffdf5"),lantern:Br("#ffd27a",2.2),hpBg:new Le({color:"#2a2020",depthTest:!1,transparent:!0,opacity:.6}),hpFg:new Le({color:"#d8553a",depthTest:!1}),levelPip:Br("#9fffb0",1.6)},It={sphere:new Kn(1,10,8),lowSphere:new Ci(1,1),capsule:new fa(.5,.7,3,8),cyl:new De(1,1,1,10),cone:new ui(1,1,10),box:new Tn(1,1,1),dome:new Kn(1,10,6,0,Math.PI*2,0,Math.PI/2),ember:new sr(.22,0),leaf:new sr(.3,0),plane:new Gn(1,1),smileArc:new rr(.06,.018,4,10,Math.PI),ring:new rr(.32,.12,6,14)};function Ot(i,t,e,n,s,r=0,a=0,o=0,l=!0){const c=new Jt(i,t);return c.scale.set(e,n,s),c.position.set(r,a,o),c.castShadow=l,c}function Cl(i,t,e,n,s=.12,r=.18){for(const a of[-1,1])i.add(Ot(It.sphere,Rt.eyeW,s,s,s,t+a*r,e,n,!1)),i.add(Ot(It.sphere,Rt.eyeB,s*.55,s*.55,s*.55,t+a*r,e+.01,n-s*.7,!1))}function kh(i,t,e,n=1){const s=Ot(It.box,Rt.mouth,.14*n,.025*n,.02,0,t,e,!1);s.rotation.z=.15;const r=Ot(It.smileArc,Rt.smile,n,n,n,0,t+.03*n,e,!1);return r.rotation.z=Math.PI,r.visible=!1,i.add(s,r),{sour:s,smile:r}}function Kg(){const i=new _e,t=new _e;i.add(t),t.add(Ot(It.capsule,Rt.coat,.75,.75,.7,0,.75,0)),t.add(Ot(It.cyl,Rt.coatDark,.4,.06,.38,0,.62,0));const e=new _e;e.position.y=1.55,e.add(Ot(It.sphere,Rt.skin,.33,.32,.32)),e.add(Ot(It.cyl,Rt.beanieG,.35,.1,.35,0,.14,0)),e.add(Ot(It.cyl,Rt.beanieY,.31,.1,.31,0,.24,0)),e.add(Ot(It.dome,Rt.beanieR,.27,.22,.27,0,.29,0)),e.add(Ot(It.sphere,Rt.beanieY,.08,.08,.08,0,.52,0)),Cl(e,0,.02,-.26,.07,.12);const n=kh(e,-.12,-.3,.8);n.sour.visible=!1,n.smile.visible=!0,t.add(e);const s=[-1,1].map(l=>{const c=Ot(It.capsule,Rt.boot,.24,.32,.24,l*.18,.2,0);return t.add(c),c}),r=new _e;r.position.set(.48,1,-.1),r.add(Ot(It.box,Rt.iron,.2,.28,.2,0,-.25,0)),r.add(Ot(It.sphere,Rt.lantern,.1,.13,.1,0,-.25,0,!1)),t.add(r);const a=new _e;a.add(Ot(It.box,Rt.rolling,.7,.12,.42,0,0,0,!1)),a.add(Ot(It.box,Rt.rollingPaper,.6,.08,.36,.06,.08,0,!1)),a.add(Ot(It.leaf,Rt.rasG,.35,.05,.35,-.12,.07,0,!1)),a.position.y=2.35,a.visible=!1,i.add(a);const o=new _e;o.position.y=2;for(let l=0;l<3;l++)o.add(Ot(It.ember,Rt.emberCore,.6,.6,.6,Math.cos(l*2.1)*.45,0,Math.sin(l*2.1)*.45,!1));return o.visible=!1,i.add(o),i.userData={body:t,legs:s,head:e,lanternArm:r,carried:a,stars:o},i}function kr(i,t){const e=new _e;e.position.y=t;const n=new Jt(It.plane,Rt.hpBg);n.scale.set(1,.14,1),n.renderOrder=10;const s=new Jt(It.plane,Rt.hpFg.clone());s.scale.set(.96,.09,1),s.position.z=.001,s.renderOrder=11,e.add(n,s),e.visible=!1,i.add(e),i.userData.hpBar=e,i.userData.hpFg=s}function eo(i,{scale:t=1,suit:e=Rt.suit,wide:n=1}={}){const s=t;i.add(Ot(It.capsule,e,.7*s*n,.62*s,.6*s,0,.72*s,0)),i.add(Ot(It.box,Rt.shirt,.22*s,.4*s,.05,0,.98*s,-.27*s*Math.min(n,1.2),!1)),i.add(Ot(It.box,Rt.tie,.07*s,.32*s,.05,0,.94*s,-.29*s*Math.min(n,1.2),!1));for(const o of[-1,1])i.add(Ot(It.capsule,Rt.suitDark,.2*s,.25*s,.2*s,o*.16*s,.17*s,0));const r=new _e;r.position.y=1.5*s,r.add(Ot(It.sphere,Rt.skin,.3*s,.3*s,.3*s)),r.add(Ot(It.dome,Rt.suitDark,.31*s,.14*s,.31*s,0,.12*s,.02)),Cl(r,0,.03*s,-.25*s,.065*s,.11*s);const a=kh(r,-.12*s,-.28*s,s);return i.add(r),{head:r,mouth:a}}function Jg(i){const t=new _e,e=new _e;if(t.add(e),t.userData.body=e,i==="clerk"){const{head:n,mouth:s}=eo(e);for(const o of[-1,1])n.add(Ot(It.box,Rt.glasses,.11,.07,.02,o*.11,.03,-.3,!1));n.add(Ot(It.box,Rt.glasses,.08,.015,.02,0,.04,-.3,!1));const r=new _e;r.position.set(.48,.9,-.15),r.add(Ot(It.cyl,Rt.woodLight,.06,.25,.06,0,.12,0)),r.add(Ot(It.sphere,Rt.woodLight,.09,.09,.09,0,.27,0)),r.add(Ot(It.box,Rt.stampInk,.22,.08,.16,0,-.02,0)),e.add(r);const a=Ot(It.box,Rt.paper,.3,.38,.02,-.46,.92,-.2);a.rotation.y=.4,e.add(a),t.userData.mouth=s,t.userData.arm=r,kr(t,2.15)}else if(i==="tank"){const{mouth:n}=eo(e,{scale:1.25,suit:Rt.suitNavy,wide:1.45}),s=new _e;s.position.set(0,0,-.95),s.add(Ot(It.box,Rt.woodDark,.75,1.05,.45,0,.52,0));const r=Ot(It.box,Rt.woodLight,.9,.08,.6,0,1.1,.04);r.rotation.x=.35,s.add(r),s.add(Ot(It.cyl,Rt.iron,.02,.45,.02,.18,1.3,.1,!1)),s.add(Ot(It.sphere,Rt.speaker,.05,.05,.05,.18,1.52,.04,!1)),e.add(s),t.userData.mouth=n,kr(t,2.6)}else if(i==="gull"){e.add(Ot(It.lowSphere,Rt.gull,.36,.3,.6,0,0,0)),e.add(Ot(It.cone,Rt.beak,.08,.3,.08,0,0,-.65).rotateX(-Math.PI/2));const n=Ot(It.cone,Rt.megaRed,.2,.5,.2,0,-.22,-.65);n.rotation.x=Math.PI/2,e.add(n),e.add(Ot(It.cyl,Rt.paper,.21,.06,.21,0,-.22,-.89).rotateX(Math.PI/2));const s=[-1,1].map(r=>{const a=new _e;return a.position.set(r*.25,.05,0),a.add(Ot(It.box,Rt.gullWing,.95,.05,.42,r*.48,0,0)),e.add(a),a});t.userData.wings=s,Cl(e,0,.12,-.42,.06,.13),t.userData.mouth=null,kr(t,.8)}else if(i==="swarm"){const{mouth:n}=eo(e,{scale:.6}),s=[Rt.binderR,Rt.binderB,Rt.binderY],r=Ot(It.box,s[Math.floor(Math.random()*3)],.08,.34,.28,.32,.55,-.08);e.add(r),t.userData.mouth=n,kr(t,1.3)}return t}function Qg(i){const t=i.mesh.userData.mouth;t&&(t.sour.visible=!1,t.smile.visible=!0),i.mesh.userData.hpBar.visible=!1}function tv(i){const t=new _e,e=new _e;if(t.add(e),i==="ring"){t.add(Ot(It.box,Rt.wood,.9,.5,.9,0,.25,0)),e.position.y=.95;const a=Ot(It.cyl,Rt.iron,.32,1.1,.32,0,0,-.15);a.rotation.x=Math.PI/2-.15,e.add(a),e.add(Ot(It.cyl,Rt.woodDark,.38,.12,.38,0,.08,-.7).rotateX(Math.PI/2-.15)),e.add(Ot(It.sphere,Rt.iron,.42,.42,.42,0,0,.42)),e.add(Ot(It.sphere,Rt.ember,.12,.12,.12,0,.1,.8,!1))}else if(i==="chips"){t.add(Ot(It.cyl,Rt.iron,.7,.3,.7,0,.15,0)),e.position.y=.3;const a=Ot(It.box,Rt.chipsBag,.95,1.1,.6,0,.6,0);a.rotation.x=-.35,e.add(a),e.add(Ot(It.box,Rt.chipsRed,.97,.3,.62,0,.55,0).rotateX(-.35));for(let o=0;o<5;o++)e.add(Ot(It.leaf,Rt.chip,.3,.08,.3,(o-2)*.17,1.2,-.3-o%2*.1,!1))}else if(i==="speaker"){const a=new _e;a.add(Ot(It.box,Rt.speaker,1,1.5,.75,0,.75,0)),a.add(Ot(It.box,Rt.rasG,1.02,.12,.77,0,1.38,0,!1)),a.add(Ot(It.box,Rt.rasY,1.02,.12,.77,0,1.26,0,!1)),a.add(Ot(It.box,Rt.rasR,1.02,.12,.77,0,1.14,0,!1));const o=[];for(const[l,c]of[[.85,.33],[.35,.2]]){const u=Ot(It.cyl,Rt.cone,c,.08,c,0,l,-.38,!1);u.rotation.x=Math.PI/2,a.add(u),o.push(u)}e.add(a),t.userData.woofers=o}const n=[];for(let a=0;a<3;a++){const o=Ot(It.leaf,Rt.levelPip,.6,.12,.6,Math.cos(a*2.09)*.95,.15,Math.sin(a*2.09)*.95,!1);o.visible=a===0,t.add(o),n.push(o)}const s=new ur(1.45,1.7,40,1,0,Math.PI*2);s.rotateX(-Math.PI/2);const r=new Jt(s,new Le({color:"#9fffb0",transparent:!0,opacity:.8,depthWrite:!1}));return r.position.y=.06,r.visible=!1,t.add(r),t.traverse(a=>{a.isMesh&&a!==r&&a.material!==Rt.levelPip&&(a.castShadow=!0)}),t.userData.head=e,t.userData.pips=n,t.userData.ring=r,t}function Vh(i,t){i.mesh.userData.pips.forEach((e,n)=>e.visible=n<t),i.mesh.scale.setScalar(1+(t-1)*.12)}function no(i,t){const e=i.mesh.userData.ring;if(e.visible=t>0,t<=0)return;e.geometry.dispose();const n=new ur(1.45,1.7,40,1,0,Math.PI*2*t);n.rotateX(-Math.PI/2),e.geometry=n}function ev(){const i=new _e;return i.add(Ot(It.ember,Rt.ember,1,1.3,1,0,0,0,!1)),i.add(Ot(It.ember,Rt.emberCore,.5,.7,.5,0,0,0,!1)),i}function nv(){const i=new Jt(It.ring,Rt.ringMat);return i.castShadow=!1,i}function iv(){const i=new _e;return i.add(Ot(It.box,Rt.chipsBag,.32,.4,.14,0,0,0,!0)),i.add(Ot(It.box,Rt.chipsRed,.33,.12,.15,0,.02,0,!1)),i}function Gh(){const i=new rr(1,.08,4,32);return i.rotateX(Math.PI/2),new Jt(i,new Le({color:"#c8ffd0",transparent:!0,opacity:.7,depthWrite:!1}))}const Ks={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ts{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const sv=new xl(-1,1,1,-1,0,1);class rv extends Ee{constructor(){super(),this.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qt([0,2,0,0,2,0],2))}}const av=new rv;class pa{constructor(t){this._mesh=new Jt(av,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,sv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Qr extends ts{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Re?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=On.clone(t.uniforms),this.material=new Re({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new pa(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Yc extends ts{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class ov extends ts{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class lv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new _t);this._width=n.width,this._height=n.height,e=new mn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Rn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qr(Ks),this.copyPass.material.blending=Ye,this.clock=new Bh}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Yc!==void 0&&(a instanceof Yc?n=!0:a instanceof ov&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new _t);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class cv extends ts{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new gt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const Vr={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new _t},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new fe},cameraProjectionMatrixInverse:{value:new fe},cameraWorldMatrix:{value:new fe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new I(-1,-1,-1)},sceneBoxMax:{value:new I(1,1,1)}},vertexShader:`

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
		}`},Gr={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},io={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function hv(i=5){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=uv(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){const o=e[a],l=2*Math.PI*o/n,c=new I(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}const r=new ha(s,t,t);return r.wrapS=di,r.wrapT=di,r.needsUpdate=!0,r}function uv(i){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0);let s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}const Hr={defines:{SAMPLES:16,SAMPLE_VECTORS:Hh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new _t},cameraProjectionMatrixInverse:{value:new fe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Hh(i,t,e){const n=fv(i,t,e);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function fv(i,t,e){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new I(Math.cos(r),Math.sin(r),a))}return n}class dv{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r;const a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),u=(3-Math.sqrt(3))/6,h=(l+c)*u,p=l-h,d=c-h,g=t-p,x=e-d;let m,f;g>x?(m=1,f=0):(m=0,f=1);const _=g-m+u,M=x-f+u,v=g-1+2*u,w=x-1+2*u,C=l&255,P=c&255,D=this.perm[C+this.perm[P]]%12,y=this.perm[C+m+this.perm[P+f]]%12,S=this.perm[C+1+this.perm[P+1]]%12;let R=.5-g*g-x*x;R<0?n=0:(R*=R,n=R*R*this.dot(this.grad3[D],g,x));let z=.5-_*_-M*M;z<0?s=0:(z*=z,s=z*z*this.dot(this.grad3[y],_,M));let G=.5-v*v-w*w;return G<0?r=0:(G*=G,r=G*G*this.dot(this.grad3[S],v,w)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o;const c=(t+e+n)*.3333333333333333,u=Math.floor(t+c),h=Math.floor(e+c),p=Math.floor(n+c),d=1/6,g=(u+h+p)*d,x=u-g,m=h-g,f=p-g,_=t-x,M=e-m,v=n-f;let w,C,P,D,y,S;_>=M?M>=v?(w=1,C=0,P=0,D=1,y=1,S=0):_>=v?(w=1,C=0,P=0,D=1,y=0,S=1):(w=0,C=0,P=1,D=1,y=0,S=1):M<v?(w=0,C=0,P=1,D=0,y=1,S=1):_<v?(w=0,C=1,P=0,D=0,y=1,S=1):(w=0,C=1,P=0,D=1,y=1,S=0);const R=_-w+d,z=M-C+d,G=v-P+d,N=_-D+2*d,B=M-y+2*d,q=v-S+2*d,Y=_-1+3*d,H=M-1+3*d,J=v-1+3*d,ct=u&255,lt=h&255,Ft=p&255,jt=this.perm[ct+this.perm[lt+this.perm[Ft]]]%12,K=this.perm[ct+w+this.perm[lt+C+this.perm[Ft+P]]]%12,ft=this.perm[ct+D+this.perm[lt+y+this.perm[Ft+S]]]%12,At=this.perm[ct+1+this.perm[lt+1+this.perm[Ft+1]]]%12;let mt=.6-_*_-M*M-v*v;mt<0?s=0:(mt*=mt,s=mt*mt*this.dot3(this.grad3[jt],_,M,v));let Dt=.6-R*R-z*z-G*G;Dt<0?r=0:(Dt*=Dt,r=Dt*Dt*this.dot3(this.grad3[K],R,z,G));let Lt=.6-N*N-B*B-q*q;Lt<0?a=0:(Lt*=Lt,a=Lt*Lt*this.dot3(this.grad3[ft],N,B,q));let Gt=.6-Y*Y-H*H-J*J;return Gt<0?o=0:(Gt*=Gt,o=Gt*Gt*this.dot3(this.grad3[At],Y,H,J)),32*(s+r+a+o)}noise4d(t,e,n,s){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,h,p,d,g;const x=(t+e+n+s)*l,m=Math.floor(t+x),f=Math.floor(e+x),_=Math.floor(n+x),M=Math.floor(s+x),v=(m+f+_+M)*c,w=m-v,C=f-v,P=_-v,D=M-v,y=t-w,S=e-C,R=n-P,z=s-D,G=y>S?32:0,N=y>R?16:0,B=S>R?8:0,q=y>z?4:0,Y=S>z?2:0,H=R>z?1:0,J=G+N+B+q+Y+H,ct=a[J][0]>=3?1:0,lt=a[J][1]>=3?1:0,Ft=a[J][2]>=3?1:0,jt=a[J][3]>=3?1:0,K=a[J][0]>=2?1:0,ft=a[J][1]>=2?1:0,At=a[J][2]>=2?1:0,mt=a[J][3]>=2?1:0,Dt=a[J][0]>=1?1:0,Lt=a[J][1]>=1?1:0,Gt=a[J][2]>=1?1:0,pe=a[J][3]>=1?1:0,qt=y-ct+c,de=S-lt+c,k=R-Ft+c,be=z-jt+c,Yt=y-K+2*c,zt=S-ft+2*c,Bt=R-At+2*c,te=z-mt+2*c,Nt=y-Dt+3*c,L=S-Lt+3*c,b=R-Gt+3*c,X=z-pe+3*c,it=y-1+4*c,rt=S-1+4*c,nt=R-1+4*c,Pt=z-1+4*c,vt=m&255,St=f&255,$t=_&255,at=M&255,wt=o[vt+o[St+o[$t+o[at]]]]%32,kt=o[vt+ct+o[St+lt+o[$t+Ft+o[at+jt]]]]%32,Vt=o[vt+K+o[St+ft+o[$t+At+o[at+mt]]]]%32,Tt=o[vt+Dt+o[St+Lt+o[$t+Gt+o[at+pe]]]]%32,Kt=o[vt+1+o[St+1+o[$t+1+o[at+1]]]]%32;let Ht=.6-y*y-S*S-R*R-z*z;Ht<0?u=0:(Ht*=Ht,u=Ht*Ht*this.dot4(r[wt],y,S,R,z));let se=.6-qt*qt-de*de-k*k-be*be;se<0?h=0:(se*=se,h=se*se*this.dot4(r[kt],qt,de,k,be));let O=.6-Yt*Yt-zt*zt-Bt*Bt-te*te;O<0?p=0:(O*=O,p=O*O*this.dot4(r[Vt],Yt,zt,Bt,te));let pt=.6-Nt*Nt-L*L-b*b-X*X;pt<0?d=0:(pt*=pt,d=pt*pt*this.dot4(r[Tt],Nt,L,b,X));let j=.6-it*it-rt*rt-nt*nt-Pt*Pt;return j<0?g=0:(j*=j,g=j*j*this.dot4(r[Kt],it,rt,nt,Pt)),27*(u+h+p+d+g)}}class Xn extends ts{constructor(t,e,n,s,r,a,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=hv(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new mn(this.width,this.height,{type:Rn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Re({defines:Object.assign({},Vr.defines),uniforms:On.clone(Vr.uniforms),vertexShader:Vr.vertexShader,fragmentShader:Vr.fragmentShader,blending:Ye,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Cg,this.normalMaterial.blending=Ye,this.pdMaterial=new Re({defines:Object.assign({},Hr.defines),uniforms:On.clone(Hr.uniforms),vertexShader:Hr.vertexShader,fragmentShader:Hr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Re({defines:Object.assign({},Gr.defines),uniforms:On.clone(Gr.uniforms),vertexShader:Gr.vertexShader,fragmentShader:Gr.fragmentShader,blending:Ye}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Re({uniforms:On.clone(Ks.uniforms),vertexShader:Ks.vertexShader,fragmentShader:Ks.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:co,blendDst:Ws,blendEquation:Fn,blendSrcAlpha:lo,blendDstAlpha:Ws,blendEquationAlpha:Fn}),this.blendMaterial=new Re({uniforms:On.clone(io.uniforms),vertexShader:io.vertexShader,fragmentShader:io.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ih,blendSrc:co,blendDst:Ws,blendEquation:Fn,blendSrcAlpha:lo,blendDstAlpha:Ws,blendEquationAlpha:Fn}),this.fsQuad=new pa(null),this.originalClearColor=new gt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Ml,this.depthTexture.format=Zi,this.depthTexture.type=ji,this.normalRenderTarget=new mn(this.width,this.height,{minFilter:rn,magFilter:rn,type:Rn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Hh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Xn.OUTPUT.Off:break;case Xn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ye,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Xn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ye,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Xn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ye,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Xn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case Xn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ye,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Xn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ye,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const s=e.get(n);n.visible=s}),e.clear()}generateNoise(t=64){const e=new dv,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){const l=a,c=o;s[(a*t+o)*4]=(e.noise(l,c)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}const r=new ha(s,t,t,Cn,jn);return r.wrapS=di,r.wrapT=di,r.needsUpdate=!0,r}}Xn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const pv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new gt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class As extends ts{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new _t(t.x,t.y):new _t(256,256),this.clearColor=new gt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new mn(r,a,{type:Rn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const p=new mn(r,a,{type:Rn});p.texture.name="UnrealBloomPass.h"+h,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const d=new mn(r,a,{type:Rn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=pv;this.highPassUniforms=On.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Re({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new _t(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Ks;this.copyUniforms=On.clone(u.uniforms),this.blendMaterial=new Re({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:fi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new gt,this.oldClearAlpha=1,this.basic=new Le,this.fsQuad=new pa(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new _t(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=As.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=As.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Re({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new _t(.5,.5)},direction:{value:new _t(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Re({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}As.BlurDirectionX=new _t(1,0);As.BlurDirectionY=new _t(0,1);const mv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class gv extends ts{constructor(){super();const t=mv;this.uniforms=On.clone(t.uniforms),this.material=new Ag({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new pa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ue.getTransfer(this._outputColorSpace)===xe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===sh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===rh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ah?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===al?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===oh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===lh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const vv={name:"HorizontalTiltShiftShader",uniforms:{tDiffuse:{value:null},h:{value:1/512},r:{value:.35}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float h;
		uniform float r;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			float hh = h * abs( r - vUv.y );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * hh, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * hh, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * hh, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * hh, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * hh, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * hh, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * hh, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * hh, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`},xv={name:"VerticalTiltShiftShader",uniforms:{tDiffuse:{value:null},v:{value:1/512},r:{value:.35}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float v;
		uniform float r;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			float vv = v * abs( r - vUv.y );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * vv ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * vv ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * vv ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * vv ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * vv ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * vv ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * vv ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * vv ) ) * 0.051;

			gl_FragColor = sum;

		}`},_v={name:"WarmGrade",uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uTint:{value:new I(1,1,1)},uLift:{value:new I},uSat:{value:1.08}},vertexShader:`
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
    }`};function Mv(i,t,e,n={}){const s=new lv(i,new mn(1,1,{type:Rn})),r=new cv(t,e),a=new Xn(t,e,1,1,void 0,{radius:.8,distanceExponent:1.3,thickness:1.4,scale:1.2,samples:12});a.blendIntensity=1;const o=new As(new _t(256,256),.6,.55,1),l=new Qr(vv),c=new Qr(xv);l.uniforms.r.value=c.uniforms.r.value=.52;const u=new Qr(_v);n.tint&&u.uniforms.uTint.value.set(...n.tint),n.lift&&u.uniforms.uLift.value.set(...n.lift),n.sat&&(u.uniforms.uSat.value=n.sat),u.uniforms.uVignette.value=n.vignette??.25;const h=new gv;for(const m of[r,a,o,l,c,u,h])s.addPass(m);let p="high",d=1,g=1;const x={composer:s,get level(){return p},setLevel(m){p=m,a.enabled=m==="high",o.strength=m==="high"?.6:.5,x.setSize(d,g)},setSize(m,f){d=m,g=f;const _=i.getPixelRatio();s.setPixelRatio(_),s.setSize(m,f);const M=p==="high"?2:4;o.resolution.set(m*_/M,f*_/M),o.setSize(m*_/M,f*_/M);const v=p==="high"?.7:.5;l.uniforms.h.value=v/(m*_),c.uniforms.v.value=v/(f*_)},render(m){s.render(m)}};return x}function yv(i,t,e,n,s){const{heightAt:r}=t,a=e.mobile?.5:1,o=new Set(n.life),l=new Se,c=new gt,u=[],h=()=>{for(let d=0;d<50;d++){const g=(Math.random()-.5)*80,x=(Math.random()-.5)*80,m=r(g,x);if(m>.8)return{x:g,z:x,h:m}}return{x:0,z:0,h:1}};if(o.has("butterflies")){const d=Math.round(26*a),g=new ir(.16,6,0,Math.PI);g.scale(1,1.3,1);const m=[-1,1].map(()=>new Ne({color:"#ffffff",side:He})).map(M=>{const v=new nn(g,M,d);return i.add(v),v}),f=Array.from({length:d},(M,v)=>({...h(),a:Math.random()*6,sp:.6+Math.random()*.6,ph:Math.random()*6,home:null})),_=["#ffd84a","#ff9ad0","#9ad8ff","#ffffff","#ffa040"];f.forEach((M,v)=>{M.home={x:M.x,z:M.z},m.forEach(w=>w.setColorAt(v,c.set(_[v%_.length])))}),m.forEach(M=>M.instanceColor.needsUpdate=!0),u.push((M,v)=>{f.forEach((w,C)=>{w.a+=Math.sin(v*.7+w.ph)*1.6*M,w.x+=Math.cos(w.a)*w.sp*M,w.z+=Math.sin(w.a)*w.sp*M,Math.hypot(w.x-w.home.x,w.z-w.home.z)>5&&(w.a=Math.atan2(w.home.z-w.z,w.home.x-w.x));const P=r(w.x,w.z)+.6+Math.sin(v*2+w.ph)*.25,D=Math.sin(v*18+w.ph)*1.1;m.forEach((y,S)=>{l.position.set(w.x,P,w.z),l.rotation.set(0,-w.a+Math.PI/2,0),l.rotateZ((S?1:-1)*(.3+D*.5)),l.rotateX(-Math.PI/2),l.scale.set(S?1:-1,1,1),l.updateMatrix(),y.setMatrixAt(C,l.matrix)})}),m.forEach(w=>w.instanceMatrix.needsUpdate=!0)})}if(o.has("birds")){const g=new Ee;g.setAttribute("position",new Qt([-.7,.12,.1,0,0,-.15,0,0,.15,0,0,-.15,.7,.12,.1,0,0,.15],3)),g.computeVertexNormals();const x=new nn(g,new Ne({color:"#f4f4f0",side:He}),7);x.castShadow=!0,i.add(x);const m=Array.from({length:7},(f,_)=>({cx:(Math.random()-.5)*50,cz:(Math.random()-.5)*50,r:8+Math.random()*10,y:9+Math.random()*4,sp:.15+Math.random()*.1,ph:_}));u.push((f,_)=>{m.forEach((M,v)=>{const w=_*M.sp+M.ph;l.position.set(M.cx+Math.cos(w)*M.r,M.y+Math.sin(_*.7+v)*.4,M.cz+Math.sin(w)*M.r),l.rotation.set(0,-w,Math.sin(_*.5+v)*.15);const C=1+Math.sin(_*6+v)*.35*(Math.sin(_*.4+v)>.3?1:.1);l.scale.set(1.4,C*1.4,1.4),l.updateMatrix(),x.setMatrixAt(v,l.matrix)}),x.instanceMatrix.needsUpdate=!0})}if(o.has("leaves")){const d=Math.round(60*a),g=new Gn(.16,.1),x=new nn(g,new Ne({color:"#ffffff",side:He}),d);i.add(x);const m=Array.from({length:d},(f,_)=>({...h(),ph:Math.random()*6,sp:1+Math.random()*1.5}));m.forEach((f,_)=>x.setColorAt(_,c.set(["#8fbf4a","#c8b04a","#6a9a3a","#d89a3a"][_%4]))),x.instanceColor.needsUpdate=!0,u.push((f,_)=>{m.forEach((M,v)=>{M.x+=M.sp*f,M.z+=Math.sin(_*.8+M.ph)*.6*f,M.x>45&&Object.assign(M,h(),{x:-45});const w=Math.max(r(M.x,M.z),.1)+.3+Math.abs(Math.sin(_*1.3+M.ph))*.9;l.position.set(M.x,w,M.z),l.rotation.set(_*3+M.ph,_*2+M.ph,_*1.5),l.scale.setScalar(1),l.updateMatrix(),x.setMatrixAt(v,l.matrix)}),x.instanceMatrix.needsUpdate=!0})}if(o.has("fireflies")&&s==="skumring"){const d=Math.round(120*a),g=new Float32Array(d*3),x=new Float32Array(d*3),m=Array.from({length:d},()=>({...h(),ph:Math.random()*6})),f=new Ee;f.setAttribute("position",new Ie(g,3)),f.setAttribute("color",new Ie(x,3));const _=document.createElement("canvas");_.width=_.height=32;const M=_.getContext("2d"),v=M.createRadialGradient(16,16,0,16,16,16);v.addColorStop(0,"rgba(255,255,255,1)"),v.addColorStop(1,"rgba(255,255,255,0)"),M.fillStyle=v,M.fillRect(0,0,32,32);const w=new Sl(f,new ua({size:.35,map:new bi(_),vertexColors:!0,transparent:!0,blending:fi,depthWrite:!1}));w.frustumCulled=!1,i.add(w),u.push((C,P)=>{m.forEach((D,y)=>{g[y*3]=D.x+Math.sin(P*.4+D.ph)*1.2,g[y*3+1]=D.h+.5+Math.sin(P*.9+D.ph*2)*.4,g[y*3+2]=D.z+Math.cos(P*.35+D.ph)*1.2;const S=Math.max(0,Math.sin(P*1.7+D.ph*3))**3*2.5;x[y*3]=1*S,x[y*3+1]=.9*S,x[y*3+2]=.35*S}),f.attributes.position.needsUpdate=!0,f.attributes.color.needsUpdate=!0})}let p=0;return{update(d){const g=Math.min(.05,Math.max(0,d-p));p=d;for(const x of u)x(g,d)}}}function Wh(i,t=700,{blending:e=fi,size:n=.55,opacity:s=1,fadeTo:r=null}={}){const a=new gt(r||"#000000"),o=new Float32Array(t*3),l=new Float32Array(t*3),c=new Float32Array(t*3),u=new Float32Array(t*3),h=new Float32Array(t),p=new Float32Array(t),d=new Float32Array(t);let g=0;const x=new Ee;x.setAttribute("position",new Ie(o,3)),x.setAttribute("color",new Ie(l,3));const m=document.createElement("canvas");m.width=m.height=64;const f=m.getContext("2d"),_=f.createRadialGradient(32,32,0,32,32,32);_.addColorStop(0,"rgba(255,255,255,1)"),_.addColorStop(.4,"rgba(255,255,255,0.6)"),_.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=_,f.fillRect(0,0,64,64);const M=new ua({size:n,map:new bi(m),vertexColors:!0,transparent:!0,opacity:s,blending:e,depthWrite:!1}),v=new Sl(x,M);v.frustumCulled=!1,i.add(v);for(let D=0;D<t;D++)o[D*3+1]=-999;const w=new gt;function C(D,y,S,{n:R=10,color:z="#ffb347",speed:G=4,up:N=3,life:B=.7,gravity:q=9,spread:Y=1}={}){w.set(z);for(let H=0;H<R;H++){const J=g;g=(g+1)%t,o[J*3]=D,o[J*3+1]=y,o[J*3+2]=S;const ct=Math.random()*Math.PI*2,lt=G*(.4+Math.random()*.6)*Y;c[J*3]=Math.cos(ct)*lt,c[J*3+1]=N*(.5+Math.random()),c[J*3+2]=Math.sin(ct)*lt,u[J*3]=w.r,u[J*3+1]=w.g,u[J*3+2]=w.b,p[J]=h[J]=B*(.6+Math.random()*.6),d[J]=q}}function P(D){for(let y=0;y<t;y++){if(h[y]<=0)continue;if(h[y]-=D,h[y]<=0){o[y*3+1]=-999,l[y*3]=l[y*3+1]=l[y*3+2]=0;continue}c[y*3+1]-=d[y]*D,o[y*3]+=c[y*3]*D,o[y*3+1]+=c[y*3+1]*D,o[y*3+2]+=c[y*3+2]*D;const S=h[y]/p[y];l[y*3]=u[y*3]*S+a.r*(1-S),l[y*3+1]=u[y*3+1]*S+a.g*(1-S),l[y*3+2]=u[y*3+2]*S+a.b*(1-S)}x.attributes.position.needsUpdate=!0,x.attributes.color.needsUpdate=!0}return{emit:C,update:P}}const Sv={xbox:{build:"Ⓐ",carry:"Ⓑ",next:"Ⓨ",sel:"LB/RB",pause:"☰",name:"Xbox"},ps:{build:"✕",carry:"○",next:"△",sel:"L1/R1",pause:"Options",name:"PlayStation"},switch:{build:"A",carry:"B",next:"X",sel:"L/R",pause:"+",name:"Switch"}},Ev={build:"B",carry:"E",next:"N",sel:"Q/R",pause:"Esc",name:"Tastatur"},bv={build:"Bygg",carry:"Bær",next:"Neste bølge",sel:"",pause:"⏸",name:"Berøring"};function $c(i=""){const t=i.toLowerCase();return/nintendo|pro controller|joy-con|joycon|057e/.test(t)?"switch":/playstation|dualshock|dualsense|wireless controller|054c|sony/.test(t)?"ps":"xbox"}function wv(i){const t=i==="switch";return{build:t?1:0,carry:t?0:1,next:3,prev:4,nextSel:5,zoomOut:6,zoomIn:7,pause:9,back:8}}function Tv(i){const t=new Set,e={move:{x:0,z:0},look:0,lookDelta:0,zoom:1,pressed:new Set,clicks:[],device:matchMedia("(pointer: coarse)").matches?"touch":"kb",padKind:"xbox",padId:""},n=v=>e.pressed.add(v),s=v=>{e.device=v};addEventListener("keydown",v=>{if(s("kb"),(v.code==="Space"||v.code.startsWith("Arrow")||v.code==="Tab")&&v.preventDefault(),v.repeat)return;t.add(v.code);const w={KeyE:"carry",Space:"carry",KeyB:"build",Digit1:"b1",Digit2:"b2",Digit3:"b3",Numpad1:"b1",Numpad2:"b2",Numpad3:"b3",KeyQ:"selPrev",KeyR:"selNext",KeyN:"next",Enter:"next",KeyF:"fps",Escape:"pause",KeyP:"pause"};w[v.code]&&n(w[v.code])}),addEventListener("keyup",v=>t.delete(v.code)),addEventListener("blur",()=>t.clear()),i.addEventListener("wheel",v=>{v.preventDefault(),s("kb"),e.zoom=Wr(e.zoom*(v.deltaY>0?1.08:1/1.08),.55,4.5)},{passive:!1}),i.addEventListener("contextmenu",v=>v.preventDefault());const r=new Map;let a=0,o=1,l=null;const c=v=>({x:v.clientX/innerWidth*2-1,y:-(v.clientY/innerHeight)*2+1});i.addEventListener("pointerdown",v=>{if(s(v.pointerType==="touch"?"touch":"kb"),v.pointerType==="mouse"&&v.button===2){l={x:v.clientX},i.setPointerCapture(v.pointerId);return}v.pointerType==="mouse"&&v.button!==0||(r.set(v.pointerId,{e:v,t:performance.now(),x0:v.clientX,y0:v.clientY}),r.size===2&&(a=jc(r),o=e.zoom))}),i.addEventListener("pointermove",v=>{if(l){e.lookDelta+=(v.clientX-l.x)*.008,l.x=v.clientX;return}const w=r.get(v.pointerId);w&&(w.e=v,r.size===2&&a>0&&(e.zoom=Wr(o*(a/jc(r)),.55,4.5)))});const u=v=>{if(l&&v.button===2){l=null;return}const w=r.get(v.pointerId);w&&r.size===1&&a===0&&Math.hypot(v.clientX-w.x0,v.clientY-w.y0)<12&&e.clicks.push(c(v)),r.delete(v.pointerId),r.size<2&&(a=0)};i.addEventListener("pointerup",u),i.addEventListener("pointercancel",v=>{r.delete(v.pointerId),l=null,a=0});const h=document.getElementById("stick"),p=document.getElementById("knob"),d={x:0,z:0};let g=null;const x=v=>{const w=h.getBoundingClientRect();let C=v.clientX-(w.left+w.width/2),P=v.clientY-(w.top+w.height/2);const D=w.width/2,y=Math.hypot(C,P);y>D&&(C*=D/y,P*=D/y),p.style.transform=`translate(${C}px, ${P}px)`;const S=y/D<.15?0:1;d.x=C/D*S,d.z=P/D*S};h.addEventListener("pointerdown",v=>{s("touch"),g=v.pointerId,h.setPointerCapture(v.pointerId),x(v)}),h.addEventListener("pointermove",v=>{v.pointerId===g&&x(v)});const m=v=>{v.pointerId===g&&(g=null,d.x=d.z=0,p.style.transform="")};h.addEventListener("pointerup",m),h.addEventListener("pointercancel",m);const f=(v,w)=>v.addEventListener("pointerdown",C=>{C.preventDefault(),C.stopPropagation(),C.pointerType==="touch"&&s("touch"),n(w)});f(document.getElementById("btn-build"),"build"),f(document.getElementById("btn-carry"),"carry"),f(document.getElementById("btn-next"),"next"),f(document.getElementById("btn-pause"),"pause"),document.querySelectorAll("#build-panel button").forEach((v,w)=>f(v,"b"+(w+1)));let _=[];addEventListener("gamepadconnected",v=>{e.padId=v.gamepad.id,e.padKind=$c(v.gamepad.id)});function M(){const w=[...navigator.getGamepads?navigator.getGamepads():[]].find(N=>N&&N.connected);if(!w)return null;w.id!==e.padId&&(e.padId=w.id,e.padKind=$c(w.id));const C=wv(e.padKind),P=w.buttons.map(N=>N.pressed||N.value>.5),D=N=>P[N]&&!_[N],y=N=>Math.abs(N)<.2?0:(N-Math.sign(N)*.2)/.8;let S=y(w.axes[0]||0),R=y(w.axes[1]||0);P[14]&&(S=-1),P[15]&&(S=1),P[12]&&(R=-1),P[13]&&(R=1);const z=y(w.axes[2]||0);return(S||R||z||P.some(Boolean))&&s("pad"),D(C.build)&&n("build"),D(C.carry)&&n("carry"),D(C.next)&&n("next"),D(C.prev)&&n("selPrev"),D(C.nextSel)&&n("selNext"),(D(C.pause)||D(C.back))&&n("pause"),D(2)&&e.padKind!=="switch"&&n("next"),_=P,{x:S,z:R,look:z,zoomIn:P[C.zoomIn],zoomOut:P[C.zoomOut]}}return e.update=v=>{let w=0,C=0;(t.has("KeyA")||t.has("ArrowLeft"))&&(w-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(w+=1),(t.has("KeyW")||t.has("ArrowUp"))&&(C-=1),(t.has("KeyS")||t.has("ArrowDown"))&&(C+=1);const P=M();P&&(P.x||P.z)&&(w=P.x,C=P.z),(d.x||d.z)&&(w=d.x,C=d.z);const D=Math.hypot(w,C);D>1&&(w/=D,C/=D),e.move.x=w,e.move.z=C,e.look=e.lookDelta+(P?P.look*2.2*v:0),e.lookDelta=0,P!=null&&P.zoomIn&&(e.zoom=Wr(e.zoom/(1+v*1.2),.55,4.5)),P!=null&&P.zoomOut&&(e.zoom=Wr(e.zoom*(1+v*1.2),.55,4.5))},e.labels=()=>e.device==="pad"?Sv[e.padKind]:e.device==="touch"?bv:Ev,e.consume=v=>e.pressed.delete(v),e.clear=()=>{e.pressed.clear(),e.clicks.length=0},e}const Wr=(i,t,e)=>Math.max(t,Math.min(e,i));function jc(i){const[t,e]=[...i.values()].map(n=>n.e);return Math.hypot(t.clientX-e.clientX,t.clientY-e.clientY)||1}let Ce=null,Ss=null,sa=null;function Av(){if(Ce){Ce.resume();return}const i=window.AudioContext||window.webkitAudioContext;if(!i)return;Ce=new i,Ss=Ce.createGain(),Ss.gain.value=.5,Ss.connect(Ce.destination),sa=Ce.createBuffer(1,Ce.sampleRate*2,Ce.sampleRate);const t=sa.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1;Cv()}function Ue(i,t,{type:e="sine",vol:n=.2,slide:s=0,delay:r=0}={}){if(!Ce)return;const a=Ce.currentTime+r,o=Ce.createOscillator(),l=Ce.createGain();o.type=e,o.frequency.setValueAtTime(i,a),s&&o.frequency.exponentialRampToValueAtTime(Math.max(30,i+s),a+t),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(n,a+.01),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l).connect(Ss),o.start(a),o.stop(a+t+.02)}function Bi(i,{vol:t=.3,freq:e=800,q:n=.7,delay:s=0}={}){if(!Ce)return;const r=Ce.currentTime+s,a=Ce.createBufferSource();a.buffer=sa;const o=Ce.createBiquadFilter();o.type="lowpass",o.frequency.value=e,o.Q.value=n;const l=Ce.createGain();l.gain.setValueAtTime(t,r),l.gain.exponentialRampToValueAtTime(1e-4,r+i),a.connect(o).connect(l).connect(Ss),a.start(r,Math.random()),a.stop(r+i+.02)}function Cv(){const i=Ce.createBufferSource();i.buffer=sa,i.loop=!0;const t=Ce.createBiquadFilter();t.type="lowpass",t.frequency.value=420;const e=Ce.createGain();e.gain.value=.035;const n=Ce.createOscillator(),s=Ce.createGain();n.frequency.value=.12,s.gain.value=.03,n.connect(s).connect(e.gain),i.connect(t).connect(e).connect(Ss),i.start(),n.start()}let Zc=0;const We={pickup(){if(!Ce)return;const i=Ce.currentTime,t=i-Zc<.4?1.12:1;Zc=i,Ue(880*t+Math.random()*60,.12,{type:"triangle",vol:.12}),Ue(1320*t,.1,{type:"sine",vol:.06,delay:.04})},puff(){Bi(.18,{vol:.07,freq:600,q:.3}),Ue(240,.12,{vol:.04,slide:-60})},crunch(){for(let i=0;i<4;i++)Bi(.05,{vol:.1,freq:3500,delay:i*.03});Ue(130,.18,{vol:.08,slide:-40})},skank(){[[392,494,587],[349,440,523]][Math.random()<.5?0:1].forEach(i=>Ue(i,.11,{type:"square",vol:.025})),Ue(98,.3,{vol:.08})},chill(){Ue(330,.5,{type:"sine",vol:.07,slide:160}),Ue(495,.45,{type:"triangle",vol:.04,slide:120,delay:.08})},shoot(){Ue(520,.07,{type:"square",vol:.03,slide:-300})},mortar(){Bi(.12,{vol:.12,freq:500}),Ue(160,.15,{type:"sine",vol:.12,slide:-80})},boom(){Bi(.45,{vol:.28,freq:380}),Ue(90,.35,{vol:.18,slide:-50})},horn(){Ue(196,.5,{type:"sawtooth",vol:.035}),Ue(147,.55,{type:"sine",vol:.06})},hit(){Bi(.05,{vol:.08,freq:2500})},die(){Ue(420,.18,{type:"triangle",vol:.09,slide:-280}),Bi(.12,{vol:.07,freq:1200})},build(){[392,494,587].forEach((i,t)=>Ue(i,.25,{type:"triangle",vol:.1,delay:t*.06}))},upgrade(){[523,659,784,1047].forEach((i,t)=>Ue(i,.22,{type:"triangle",vol:.1,delay:t*.07}))},stone(){Ue(660,.2,{type:"sine",vol:.1,slide:200})},lose(){Ue(220,.6,{type:"sawtooth",vol:.06,slide:-120}),Bi(.3,{vol:.08,freq:300})},stun(){Ue(700,.4,{type:"square",vol:.05,slide:-500})},deny(){Ue(150,.12,{type:"square",vol:.05})},wave(){[330,330,440].forEach((i,t)=>Ue(i,.3,{type:"sawtooth",vol:.04,delay:t*.18}))},win(){[523,659,784,1047,1319].forEach((i,t)=>Ue(i,.4,{type:"triangle",vol:.12,delay:t*.12}))}},Te={startEmbers:90,emberLife:12,magnet:2.4,reach:2.7,lighthouseReach:5.4,stoneCost:30,chargeTime:1.2,keeperSpeed:6.4,carrySlow:.82,wadeSlow:.7,stunTime:1.6,stunLoss:.3,hpGrowth:.2,waveBonus:12,firstPrep:20,prepTime:10},Jo={ring:{name:"Røykring-kanon",cost:30,range:7.5,dmg:7,cooldown:.65,air:!0},chips:{name:"Chips-mørtel",cost:50,range:10,dmg:18,cooldown:2.2,air:!1,splash:2.5},speaker:{name:"Reggae-høyttaler",cost:40,range:5.5,dmg:3,cooldown:1.6,air:!0,slowTime:2.2}},Rv={clerk:{name:"Forbuds-byråkrat",hp:22,speed:2.6,embers:4,anim:12,puff:"#9fffb0"},tank:{name:"Stortings-tanken",hp:95,speed:1.25,embers:10,anim:5,puff:"#9fffb0"},gull:{name:"Moralpanikk-måke",hp:16,speed:3.4,embers:5,anim:12,puff:"#ffffff",flying:!0},swarm:{name:"Komité-sverm",hp:7,speed:2.2,embers:1,anim:9,puff:"#ffe08a"}},Pv=[[{type:"clerk",n:8,gap:1.4,path:0}],[{type:"clerk",n:6,gap:1.3,path:"both"}],[{type:"swarm",n:7,gap:.35,path:1},{type:"clerk",n:6,gap:1.2,path:0,at:4},{type:"swarm",n:7,gap:.35,path:0,at:12}],[{type:"tank",n:3,gap:4,path:0},{type:"clerk",n:6,gap:1,path:1,at:2}],[{type:"gull",n:5,gap:2.5},{type:"clerk",n:7,gap:1,path:"both",at:3}],[{type:"tank",n:3,gap:3.5,path:"both"},{type:"swarm",n:8,gap:.3,path:"both",at:8}],[{type:"gull",n:8,gap:1.6},{type:"clerk",n:9,gap:.8,path:"both",at:2}],[{type:"tank",n:4,gap:3,path:"both"},{type:"swarm",n:10,gap:.3,path:"both",at:6},{type:"gull",n:4,gap:2,at:10}],[{type:"gull",n:10,gap:1.2},{type:"tank",n:4,gap:3,path:"both",at:3},{type:"clerk",n:10,gap:.7,path:"both",at:8}],[{type:"clerk",n:10,gap:.6,path:"both"},{type:"tank",n:5,gap:2.5,path:"both",at:6},{type:"swarm",n:12,gap:.25,path:"both",at:14},{type:"gull",n:12,gap:1,at:18}]],yn=new URLSearchParams(location.search),Xh=yn.has("demo");if(yn.has("unlockall"))try{localStorage.setItem("glod-unlocked",String(Us.length))}catch{}let dn=Number(yn.get("world"));if(!Number.isInteger(dn))try{dn=Number(localStorage.getItem("glod-world"))||0}catch{dn=0}dn=Math.max(0,Math.min(ar()-1,dn));try{localStorage.setItem("glod-world",String(dn))}catch{}const $n=Us[dn],qh=Wg($n,Pv);function Dv(){return 1}const Lv=Math.max(1,Math.min(20,Number(yn.get("speed"))||1)),Li=matchMedia("(pointer: coarse)").matches||yn.has("mobile"),Qo={high:{shadow:2048,dprCap:2},low:{shadow:1024,dprCap:1.25}};let Jn=Li?"low":"high";try{const i=localStorage.getItem("glod-quality");(i==="high"||i==="low")&&(Jn=i)}catch{}(yn.get("q")==="high"||yn.get("q")==="low")&&(Jn=yn.get("q"));const or={mobile:Li,shadow:Qo[Jn].shadow,dprCap:Qo[Jn].dprCap},Yh=document.getElementById("game"),Sn=new ug({canvas:Yh,antialias:!Li,powerPreference:"high-performance",preserveDrawingBuffer:yn.has("shot")});let Xi=Math.min(devicePixelRatio||1,or.dprCap);Sn.setPixelRatio(Xi);Sn.shadowMap.enabled=!0;Sn.shadowMap.type=nh;Sn.toneMapping=al;let Yi="dag";try{Yi=localStorage.getItem("glod-tid")||"dag"}catch{}yn.get("tid")&&(Yi=yn.get("tid"));const Pn=Yi==="skumring"&&$n.skyDusk?$n.skyDusk:$n.sky;Sn.toneMappingExposure=Pn.exposure;Sn.info.autoReset=!1;const Pe=new fg,$h=new gt(Pn.fog);Pe.background=$h;Pe.fog=new yl($h,55,115);const Bn=new Mn(38,1,.5,200),Uv=new Rg(Pn.hemiSky,Pn.hemiGround,Pn.hemi);Pe.add(Uv);const sn=new Lg(Pn.sun,Pn.sunI);sn.castShadow=!0;sn.shadow.mapSize.set(or.shadow,or.shadow);Object.assign(sn.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:90});sn.shadow.bias=-8e-4;sn.shadow.normalBias=.03;Pe.add(sn,sn.target);const ne=Zg(Pe,or,$n);ne.grass.setLevel(Jn);const Iv=yv(Pe,ne,or,$n,Yi),$e=Wh(Pe,Li?450:800),lr=Wh(Pe,Li?120:220,{blending:Ti,size:1.6,opacity:.45,fadeTo:Pn.fog}),ma=Mv(Sn,Pe,Bn,Pn.grade);ma.setLevel(Jn);const he=Tv(Yh);function ga(){const i=innerWidth,t=innerHeight;Sn.setSize(i,t,!1),Bn.aspect=i/t,Bn.updateProjectionMatrix(),ma.setSize(i,t)}function jh(i){Jn=i;try{localStorage.setItem("glod-quality",i)}catch{}const t=Qo[i];sn.shadow.mapSize.set(t.shadow,t.shadow),sn.shadow.map&&(sn.shadow.map.dispose(),sn.shadow.map=null),Xi=Math.min(devicePixelRatio||1,t.dprCap),Sn.setPixelRatio(Xi),ma.setLevel(i),ne.grass.setLevel(i),ga(),document.getElementById("btn-quality").textContent=i==="high"?"Høy":"Lav"}addEventListener("resize",ga);ga();const ot={phase:"title",wave:0,timer:0,embers:Te.startEmbers,lights:Wn,spawnQueue:[],time:0,sel:0,paused:!1},so=["ring","chips","speaker"];let oi=0;const Kc=new Ug,Vn=[],wi=[],Js=[],_s=[],Qs=[],ta=[],Dn=Kg(),et={x:ne.lighthouse.pos.x+1,z:ne.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,walk:0,charge:0,chargeTower:null,face:Math.PI,goal:null};Dn.position.set(et.x,ne.heightAt(et.x,et.z),et.z);Pe.add(Dn);const Rl=new ia("#ffcf70",6,7,1.8);Rl.position.set(.5,1.1,0);Dn.add(Rl);const Ae=i=>document.getElementById(i),An={lights:Ae("hud-lights"),embers:Ae("hud-embers"),wave:Ae("hud-wave"),timer:Ae("hud-timer")},Jc=Ae("hint"),qi=Ae("build-panel"),Pl=Ae("btn-next"),Zh=Ae("fps");let Ri={};function Di(i,t,e,n){Ri[t]!==e&&(Ri[t]=e,i.querySelector("b").textContent=e,n&&(i.classList.remove(n),i.offsetWidth,i.classList.add(n)))}function Qc(i){Jc.textContent!==i&&(Jc.textContent=i)}function Kh(i){ot.phase="prep",ot.timer=i,Pl.classList.remove("hidden")}function Jh(){ot.wave+=1,ot.phase="wave",Pl.classList.add("hidden"),ot.spawnQueue=[];for(const i of qh[ot.wave-1]){const t=ne.paths.length;if(i.path==="both"){const e=Math.ceil(i.n/2);for(let n=0;n<t;n++)for(let s=0;s<e;s++)ot.spawnQueue.push({t:(i.at??0)+s*i.gap+n*.3,type:i.type,path:n})}else{const e=i.path??0;for(let n=0;n<i.n;n++)ot.spawnQueue.push({t:(i.at??0)+n*i.gap,type:i.type,path:(e+n%2*2)%t})}}ot.spawnQueue.sort((i,t)=>i.t-t.t),ot.waveClock=0,We.wave(),Di(An.wave,"wave",ot.wave,"bump")}function Nv(i,t){const e=Rv[i],n=Jg(i),s=e.hp*(1+Te.hpGrowth*(ot.wave-1))*$n.balance.hp*Dv(),r={type:i,def:e,mesh:n,hp:s,maxHp:s,d:0,path:ne.paths[t],slow:0,phase:Math.random()*6,alive:!0,speedMul:$n.balance.speed};if(e.flying){const a=Math.PI*(.15+Math.random()*.7),o=Math.cos(a)*66,l=Math.sin(a)*66;r.x=o,r.z=l,r.y=4,r.dist0=Math.hypot(ne.lighthouse.pos.x-o,ne.lighthouse.pos.z-l),r.hitCd=0}else{const a=r.path.samples[0];r.x=a.x,r.z=a.z,r.y=ne.heightAt(a.x,a.z)}n.position.set(r.x,r.y,r.z),Pe.add(n),Vn.push(r)}function Fv(i){return i.def.flying?1-Math.hypot(ne.lighthouse.pos.x-i.x,ne.lighthouse.pos.z-i.z)/i.dist0:i.d/i.path.length}function Dl(i,t){const e=qe.clamp(t/i.length,0,1)*(i.samples.length-1),n=Math.floor(e),s=e-n,r=i.samples[n],a=i.samples[Math.min(n+1,i.samples.length-1)];return[r.x+(a.x-r.x)*s,r.z+(a.z-r.z)*s,a.x-r.x,a.z-r.z]}function tl(i,t){i.alive&&(i.hp-=t,i.mesh.userData.hpBar.visible=!0,i.hp<=0&&zv(i))}function zv(i){i.alive=!1,i.chillT=0,Qg(i),ta.push(i),$e.emit(i.x,i.y+1.2,i.z,{n:12,color:i.def.puff,speed:1.6,up:2.2,life:.9,gravity:1.5}),We.chill(),Qh(i.x,i.y+.5,i.z,i.def.embers,i.def.flying)}function Ov(i){for(let t=ta.length-1;t>=0;t--){const e=ta[t];e.chillT+=i;const n=e.chillT,s=e.mesh.userData.body;if(e.def.flying)e.y+=i*2.5,e.z+=i*3,e.mesh.userData.wings.forEach((a,o)=>a.rotation.z=Math.sin(n*6)*.5*(o?-1:1));else if(n<1.4){const a=Math.min(1,n/.4);s.position.y=-.25*a*(e.type==="tank"?1.3:1),s.rotation.x=.25*a,s.rotation.z=Math.sin(n*3)*.05}else{s.rotation.x=0,s.position.y=Math.abs(Math.sin(n*7))*.06,e.d=Math.max(0,e.d-e.def.speed*.45*i);const[a,o,l,c]=Dl(e.path,e.d);e.x=a,e.z=o,e.y=ne.heightAt(a,o),e.mesh.rotation.y=Math.atan2(l,c)}Math.random()<i*1.5&&$e.emit(e.x,e.y+1.8,e.z,{n:1,color:"#c8ffb0",speed:.3,up:1,life:.8,gravity:-.4});const r=Math.max(0,Math.min(1,(3.2-n)/.6));e.mesh.scale.setScalar(r),e.mesh.position.set(e.x,e.y,e.z),n>3.2&&(Pe.remove(e.mesh),ta.splice(t,1))}}function Qh(i,t,e,n,s=!1,r=1){const a=Math.min(n,n>=6?3:n>=3?2:1);let o=n;for(let l=0;l<a;l++){const c=l===a-1?o:Math.ceil(n/a);o-=c;const u=ev(),h=Math.random()*Math.PI*2,p=(1.2+Math.random()*1.8)*r,d={mesh:u,x:i,y:t,z:e,vx:Math.cos(h)*p,vz:Math.sin(h)*p,vy:5+Math.random()*2,life:Te.emberLife,value:c,settled:!1,phase:Math.random()*6};u.scale.setScalar(.8+Math.min(c,6)*.08),Pe.add(u),_s.push(d)}}function ra(i,t,e,n,s=()=>!0){let r=null,a=n;for(const o of i){if(!s(o))continue;const l=Math.hypot(o.x-t,o.z-e);l<a&&(a=l,r=o)}return r}function el(i){const t=ra(ne.plinths,et.x,et.z,Te.reach,r=>!r.tower);if(!t){We.deny(),wn("Tårn kan bare bygges på steinsoklene");return}const e=Jo[i];if(ot.embers<e.cost){We.deny(),wn(`Trenger ${e.cost} ✦ glør`),Di(An.embers,"embersBad",Math.random(),"bad");return}ot.embers-=e.cost;const n=tv(i);n.position.set(t.x,t.y,t.z),Pe.add(n);const s={type:i,def:e,mesh:n,x:t.x,z:t.z,y:t.y,level:1,cd:.3,plinth:t};t.tower=s,wi.push(s),$e.emit(t.x,t.y+.3,t.z,{n:24,color:"#ffe3a0",speed:4,up:3,life:.8,gravity:5}),We.build(),qi.classList.add("hidden")}const Hs=(i,t)=>{const e=i.level-1;return t==="range"?i.def.range*(1+.12*e):t==="dmg"?i.def.dmg*[1,1.7,2.6][e]:t==="rate"?i.def.cooldown/(1+.15*e):i.def[t]};function Bv(i){for(const t of wi){t.cd-=i;const e=Hs(t,"range");let n=null,s=-1;for(const c of Vn){if(!c.alive||c.def.flying&&!t.def.air||Math.hypot(c.x-t.x,c.z-t.z)>e)continue;const u=Fv(c);u>s&&(s=u,n=c)}const r=t.mesh.userData.head;if(t.type==="speaker"){const c=Math.max(0,Math.sin(ot.time*7.3));r.rotation.z=Math.sin(ot.time*3.65)*.05,t.mesh.userData.woofers.forEach(u=>u.scale.set(1+c*.15,1,1+c*.15)),n&&(r.rotation.y+=il(Math.atan2(-(n.x-t.x),-(n.z-t.z)),r.rotation.y)*Math.min(1,i*3))}else if(n){const c=Math.atan2(-(n.x-t.x),-(n.z-t.z));r.rotation.y+=il(c,r.rotation.y)*Math.min(1,i*10)}if(!n||t.cd>0)continue;t.cd=Hs(t,"rate");const a=t.x,o=t.y+1.4*t.mesh.scale.y,l=t.z;if(t.type==="ring"){const c=nv();c.position.set(a,o-.3,l),Pe.add(c),Js.push({kind:"bolt",mesh:c,target:n,dmg:Hs(t,"dmg"),tx:n.x,ty:n.y,tz:n.z,age:0}),We.puff()}else if(t.type==="chips"){const c=iv();c.position.set(a,t.y+1,l),Pe.add(c);const[u,h]=n.def.flying?[n.x,n.z]:Dl(n.path,n.d+n.def.speed*.6);Js.push({kind:"shell",mesh:c,sx:a,sy:t.y+1,sz:l,ex:u,ez:h,ey:ne.heightAt(u,h),t:0,dur:.95,dmg:Hs(t,"dmg"),splash:t.def.splash*(1+.1*(t.level-1))}),$e.emit(a,t.y+1.3,l,{n:6,color:"#d8d0c0",speed:1,up:2,life:.5,gravity:-1}),We.mortar()}else if(t.type==="speaker"){for(const u of Vn)!u.alive||Math.hypot(u.x-t.x,u.z-t.z)>e||(u.slow=t.def.slowTime,tl(u,Hs(t,"dmg")));const c=Gh();c.position.set(t.x,t.y+.3,t.z),Pe.add(c),Qs.push({mesh:c,t:0,r:e}),$e.emit(t.x,t.y+1.8,t.z,{n:6,color:["#7be06a","#f2c94c","#ff7a5a"][Math.floor(Math.random()*3)],speed:2.2,up:1.6,life:.9,gravity:.5}),We.skank()}}}function kv(i){for(let t=Js.length-1;t>=0;t--){const e=Js[t];let n=!1;if(e.kind==="bolt"){e.target.alive&&(e.tx=e.target.x,e.ty=e.target.y+(e.target.def.flying?0:.5),e.tz=e.target.z);const s=e.mesh.position,r=e.tx-s.x,a=e.ty-s.y,o=e.tz-s.z,l=Math.hypot(r,a,o),c=18*i;e.age+=i,e.mesh.lookAt(e.tx,e.ty,e.tz),e.mesh.scale.setScalar(.7+e.age*2.2),l<=c+.3?(n=!0,e.target.alive&&(tl(e.target,e.dmg),lr.emit(e.tx,e.ty+.3,e.tz,{n:3,color:"#f4f0ea",speed:1,up:.8,life:.8,gravity:-.6}),We.hit())):s.set(s.x+r/l*c,s.y+a/l*c,s.z+o/l*c)}else if(e.kind==="shell"){e.t+=i/e.dur;const s=Math.min(1,e.t);if(e.mesh.position.set(e.sx+(e.ex-e.sx)*s,e.sy+(e.ey-e.sy)*s+Math.sin(Math.PI*s)*5,e.sz+(e.ez-e.sz)*s),e.mesh.rotation.set(s*9,s*5,0),e.t>=1){n=!0;for(const r of Vn){if(!r.alive||r.def.flying)continue;const a=Math.hypot(r.x-e.ex,r.z-e.ez);a<e.splash&&tl(r,e.dmg*(a<e.splash*.4?1:.6))}$e.emit(e.ex,e.ey+.3,e.ez,{n:26,color:"#ffd060",speed:5,up:5,life:.7,gravity:12}),lr.emit(e.ex,e.ey+.3,e.ez,{n:4,color:"#f6e7c0",speed:1.5,up:1,life:.8,gravity:-.3}),We.crunch(),li=Math.max(li,.12)}}n&&(Pe.remove(e.mesh),Js.splice(t,1))}for(let t=Qs.length-1;t>=0;t--){const e=Qs[t];e.t+=i/(e.dur||.6),e.mesh.scale.setScalar(.5+e.t*e.r),e.mesh.material.opacity=.7*(1-e.t),e.t>=1&&(Pe.remove(e.mesh),e.mesh.material.dispose(),Qs.splice(t,1))}}function Vv(i){for(const t of Vn){if(!t.alive)continue;t.phase+=i*t.def.anim;const e=t.slow>0?.5:1;t.slow-=i;const n=t.def.speed*e*(t.speedMul||1),s=t.mesh.userData.body;if(t.def.flying){const a=ne.lighthouse.pos;let o=a.x-t.x,l=a.z-t.z;const c=Math.hypot(et.x-t.x,et.z-t.z);let u=4.2;if(c<6&&et.stun<=0&&t.hitCd<=0){const d=Math.hypot(o,l);o=o/d*.5+(et.x-t.x)/c*.9,l=l/d*.5+(et.z-t.z)/c*.9,u=1.5}t.hitCd-=i;const h=Math.hypot(o,l)||1;t.x+=o/h*n*i,t.z+=l/h*n*i;const p=Math.max(ne.heightAt(t.x,t.z),0);t.y+=(p+u-t.y)*Math.min(1,i*2.5),t.mesh.rotation.y=Math.atan2(-o,-l),t.mesh.userData.wings.forEach((d,g)=>d.rotation.z=Math.sin(t.phase)*.7*(g?-1:1)),s.position.y=Math.sin(t.phase*.5)*.15,c<1.3&&Math.abs(t.y-Dn.position.y-1)<1.4&&et.stun<=0&&t.hitCd<=0&&Gv(t),Math.hypot(a.x-t.x,a.z-t.z)<3.4&&th(t)}else{if(t.d+=n*i,t.d>=t.path.length){th(t);continue}const[a,o,l,c]=Dl(t.path,t.d);t.x=a,t.z=o,t.y=ne.heightAt(a,o),t.mesh.rotation.y=Math.atan2(-l,-c),t.type==="clerk"?(s.position.y=Math.abs(Math.sin(t.phase))*.12,s.rotation.z=Math.sin(t.phase)*.06,t.mesh.userData.arm.position.y=.9+Math.max(0,Math.sin(t.phase*.5))*.25):t.type==="tank"?(s.position.y=Math.abs(Math.sin(t.phase))*.05,s.rotation.z=Math.sin(t.phase)*.07):t.type==="swarm"&&(s.position.y=Math.abs(Math.sin(t.phase))*.14,s.rotation.y=Math.sin(t.phase*.5)*.3)}t.mesh.position.set(t.x,t.y,t.z),t.slow>0&&Math.random()<i*6&&$e.emit(t.x,t.y+.8,t.z,{n:1,color:"#b8e6ff",speed:.4,up:.6,life:.6,gravity:-.5});const r=t.mesh.userData.hpBar;if(r.visible){r.quaternion.copy(Bn.quaternion),r.quaternion.premultiply(t.mesh.quaternion.clone().invert());const a=Math.max(0,t.hp/t.maxHp),o=t.mesh.userData.hpFg;o.scale.x=.96*a,o.position.x=-.48*(1-a),o.material.color.setHSL(.33*(1-a),.7,.55)}}for(let t=Vn.length-1;t>=0;t--)Vn[t].alive||Vn.splice(t,1)}function th(i){i.alive=!1,Pe.remove(i.mesh),ot.lights=Math.max(0,ot.lights-1),ne.lighthouse.setLights(ot.lights),Di(An.lights,"lights",ot.lights,"bad");const t=ne.lighthouse.flamePos(ot.lights);lr.emit(t.x,t.y,t.z,{n:8,color:"#b8b4b0",speed:.6,up:1.4,life:1.8,gravity:-.4}),wn(`${i.def.name} slukket litt glød!`),We.lose(),li=.3,ot.lights<=0&&nu(!1)}function Gv(i){et.stun=Te.stunTime,i.hitCd=4;const t=Math.floor(ot.embers*Te.stunLoss);t>0&&(ot.embers-=t,Qh(et.x,Dn.position.y+1,et.z,t,!1,1.6)),et.carrying&&(et.carrying=!1,wn("Rullepapiret blåste bort!")),$e.emit(et.x,Dn.position.y+1.5,et.z,{n:16,color:"#ffffff",speed:3,up:2,life:.5}),We.stun(),li=.2}function Hv(i){for(let t=_s.length-1;t>=0;t--){const e=_s[t];e.life-=i,e.phase+=i;const n=Math.max(ne.heightAt(e.x,e.z),.1)+.35;e.settled||(e.vy-=16*i,e.x+=e.vx*i,e.z+=e.vz*i,e.y+=e.vy*i,e.y<=n&&(e.y=n,Math.abs(e.vy)>2.5?(e.vy=-e.vy*.4,e.vx*=.6,e.vz*=.6):e.settled=!0));const s=Math.hypot(et.x-e.x,et.z-e.z);if(et.stun<=0&&s<Te.magnet){const l=(1-s/Te.magnet)*14+3;e.x+=(et.x-e.x)/s*l*i,e.z+=(et.z-e.z)/s*l*i,e.settled=!0,e.y=n}const r=e.settled?Math.sin(e.phase*3)*.12:0;e.mesh.position.set(e.x,e.y+r,e.z),e.mesh.rotation.y+=i*3;const a=e.life<3.5,o=(.8+Math.min(e.value,6)*.08)*(a?.55+.45*(e.life/3.5):1);e.mesh.scale.setScalar(o),e.mesh.visible=!a||Math.sin(e.life*(e.life<1.5?30:16))>-.4,Math.random()<i*2.5&&$e.emit(e.x,e.y+.2,e.z,{n:1,color:"#ffb347",speed:.3,up:1.2,life:.6,gravity:-.5}),et.stun<=0&&s<.9?(ot.embers+=e.value,Di(An.embers,"embers",ot.embers,"bump"),$e.emit(e.x,e.y+.3,e.z,{n:8,color:"#ffe08a",speed:2,up:2.5,life:.4}),We.pickup(),Pe.remove(e.mesh),_s.splice(t,1)):e.life<=0&&($e.emit(e.x,e.y,e.z,{n:6,color:"#555048",speed:.6,up:1,life:.8,gravity:-.6}),Pe.remove(e.mesh),_s.splice(t,1))}}let nl=0,tu="";function wn(i){nl=2,tu=i}function Wv(i){const t=Dn.userData;et.stun-=i,t.stars.visible=et.stun>0,t.stars.rotation.y+=i*6;let e=0,n=0;if(et.stun<=0&&(ot.phase==="prep"||ot.phase==="wave")){if(he.move.x||he.move.z){et.goal=null;const g=Math.cos(oi),x=Math.sin(oi);e=he.move.x*g+he.move.z*x,n=-he.move.x*x+he.move.z*g}else if(et.goal){const g=et.goal,x=g.x-et.x,m=g.z-et.z,f=Math.hypot(x,m);g.t+=i;const _=f<.35||g.spot&&Math.hypot(g.spot.x-et.x,g.spot.z-et.z)<g.reach;if(f<g.best-.3&&(g.best=f,g.lastGain=g.t),_||g.t>12||g.t-g.lastGain>1.5)et.goal=null;else{const M=Math.min(1,f/.8),v=x/f,w=m/f;e=v,n=w;for(const P of ne.colliders){if(g.spot&&P.x===g.spot.x&&P.z===g.spot.z)continue;const D=P.x-et.x,y=P.z-et.z,S=D*v+y*w;if(S<=0||S>P.r+2.2||S>f)continue;const R=-D*w+y*v;if(Math.abs(R)>P.r+.6)continue;const z=(1-Math.abs(R)/(P.r+.6))*1.6*(R>=0?1:-1);e-=-w*z,n-=v*z}const C=Math.hypot(e,n)||1;e=e/C*M,n=n/C*M}}}const r=ne.heightAt(et.x,et.z)<.05,a=Te.keeperSpeed*(et.carrying?Te.carrySlow:1)*(r?Te.wadeSlow:1),o=e*a,l=n*a;et.vx+=(o-et.vx)*Math.min(1,i*12),et.vz+=(l-et.vz)*Math.min(1,i*12);let c=et.x+et.vx*i,u=et.z+et.vz*i;ne.isWalkable(c,u)||(ne.isWalkable(c,et.z)?u=et.z:ne.isWalkable(et.x,u)?c=et.x:(c=et.x,u=et.z));for(const g of ne.colliders){const x=c-g.x,m=u-g.z,f=Math.hypot(x,m),_=g.r+.4;f<_&&f>1e-4&&(c=g.x+x/f*_,u=g.z+m/f*_)}et.x=c,et.z=u;const h=Math.hypot(et.vx,et.vz);if(h>.3){const g=Math.atan2(-et.vx,-et.vz);et.face+=il(g,et.face)*Math.min(1,i*12),et.walk+=i*h*2.2}if(Dn.rotation.y=et.face,Dn.position.set(et.x,Math.max(ne.heightAt(et.x,et.z),-.25),et.z),r&&h>1&&(et.splash=(et.splash||0)-i,et.splash<=0)){et.splash=.22,$e.emit(et.x,.15,et.z,{n:4,color:"#e8fbff",speed:1.6,up:2.2,life:.35,gravity:12});const g=Gh();g.position.set(et.x,.1,et.z),g.material.color.set("#f4fdff"),Pe.add(g),Qs.push({mesh:g,t:0,r:1.6,dur:.9})}const p=Math.sin(et.walk)*Math.min(1,h/3);t.legs[0].position.z=p*.18,t.legs[1].position.z=-p*.18,t.body.position.y=Math.abs(p)*.08;const d=h<.3?Math.sin(ot.time*2.2)*.025:0;t.body.scale.set(1-d*.5,1+d,1-d*.5),t.body.rotation.z=et.stun>0?.5:p*.04,t.lanternArm.rotation.x=-p*.35,t.carried.visible=et.carrying,t.carried.rotation.y+=i*2,t.carried.position.y=2.35+Math.sin(ot.time*3)*.08,Rl.intensity=5+Math.sin(ot.time*11)*.6}function Xv(){for(const i of he.clicks.splice(0)){Kc.setFromCamera(i,Bn);const t=Kc.intersectObject(ne.terrain)[0];if(!t)continue;let e=t.point.x,n=t.point.z;const s=ne.lighthouse.pos,r=ra(ne.plinths,e,n,2.2)||(Math.hypot(s.x-e,s.z-n)<4.5?{x:s.x,z:s.z,big:!0}:null);if(r){const a=r.big?4.3:1.95;let o=et.x-r.x,l=et.z-r.z;const c=Math.hypot(o,l)||1;e=r.x+o/c*a,n=r.z+l/c*a}et.goal={x:e,z:n,t:0,best:1/0,lastGain:0,spot:r,reach:r?r.big?Te.lighthouseReach-.4:Te.reach-.25:0},$e.emit(e,ne.heightAt(e,n)+.2,n,{n:6,color:"#fff3d0",speed:1.5,up:.5,life:.35,gravity:0})}}function eu(i=!ot.paused){ot.paused=i;const t=he.labels();Ae("pause-keys").textContent=`${t.name}: fortsett med ${t.pause}`,Ae("pause").classList.toggle("hidden",!i)}Ae("btn-resume").addEventListener("click",()=>eu(!1));function qv(){const i=he.device;if(Ri.device===i+he.padKind)return;Ri.device=i+he.padKind;const t=he.labels();Ae("touch").classList.toggle("hidden",i!=="touch"||ot.phase==="title"),qi.querySelectorAll("button i").forEach((e,n)=>{e.textContent=i==="pad"?n===ot.sel?t.build:"":i==="touch"?"":String(n+1)}),Pl.textContent="Neste bølge ▶",Ri.sel=-1}function Yv(i){if(he.consume("fps")&&Zh.classList.toggle("hidden"),qv(),ot.phase==="title"){["build","carry","next","pause"].some(h=>he.consume(h))&&Ll(),he.clear();return}if(Di(An.embers,"embers",ot.embers),!(ot.phase==="prep"||ot.phase==="wave")){he.clear(),qi.classList.add("hidden"),Qc("");return}if(he.consume("pause")&&eu(),ot.paused){he.clear();return}Xv(),he.consume("next")&&ot.phase==="prep"&&(ot.timer=0),he.consume("selPrev")&&(ot.sel=(ot.sel+2)%3),he.consume("selNext")&&(ot.sel=(ot.sel+1)%3);const e=ra(ne.plinths,et.x,et.z,Te.reach,h=>!h.tower),n=ra(wi,et.x,et.z,Te.reach),s=ne.lighthouse.pos,r=Math.hypot(s.x-et.x,s.z-et.z)<Te.lighthouseReach,a=et.stun>0;he.consume("build")&&!a&&(e?el(so[ot.sel]):wn(n?`Tårn oppgraderes med rullepapir: hent det ved fyret (${he.labels().carry})`:"Gå til en ledig steinsokkel for å bygge")),so.forEach((h,p)=>{he.consume("b"+(p+1))&&!a&&(ot.sel=p,el(h))});const o=e&&!a;qi.classList.toggle("hidden",!o),o&&(qi.querySelectorAll("button").forEach((h,p)=>{h.disabled=ot.embers<Jo[h.dataset.tower].cost,h.classList.toggle("sel",p===ot.sel)}),Ri.sel!==ot.sel&&he.device==="pad"&&(Ri.sel=ot.sel,qi.querySelectorAll("button i").forEach((h,p)=>h.textContent=p===ot.sel?he.labels().build:""))),he.consume("carry")&&!a&&(!et.carrying&&r?ot.embers>=Te.stoneCost?(ot.embers-=Te.stoneCost,et.carrying=!0,Di(An.embers,"embers",ot.embers,"bump"),$e.emit(et.x,Dn.position.y+2.3,et.z,{n:14,color:"#8ff0ff",speed:2,up:2,life:.6,gravity:2}),We.stone()):(We.deny(),wn(`Rullepapir koster ${Te.stoneCost} ✦`)):et.carrying&&r?(et.carrying=!1,ot.embers+=Te.stoneCost,We.stone(),wn("Rullepapiret er lagt tilbake")):et.carrying?n||wn("Bær rullepapiret til et tårn"):wn("Rullepapir hentes ved fyret"));const l=et.carrying&&!a&&n&&n.level<3?n:null;l!==et.chargeTower&&(et.chargeTower&&no(et.chargeTower,0),et.chargeTower=l,et.charge=0),l&&(et.charge+=i/Te.chargeTime,no(l,Math.min(1,et.charge)),Math.random()<i*20&&$e.emit(et.x,Dn.position.y+2.2,et.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),et.charge>=1&&(l.level+=1,Vh(l,l.level),no(l,0),et.carrying=!1,et.chargeTower=null,et.charge=0,$e.emit(l.x,l.y+1.2,l.z,{n:30,color:"#8ff0ff",speed:4,up:4,life:.9,gravity:5}),We.upgrade(),wn(`${l.def.name} er nå nivå ${l.level}`)));const c=he.labels();nl-=i;let u="";if(nl>0)u=tu;else if(a)u="Moralpanikk! Måka slo deg ut";else if(l)u="Gir tårnet energi … bli stående";else if(et.carrying&&n&&n.level>=3)u="Tårnet er på maks nivå";else if(et.carrying)u="Bær rullepapiret til et tårn";else if(r&&!et.carrying)u=`${c.carry} = hent rullepapir (${Te.stoneCost} ✦)`;else if(r&&et.carrying)u=`${c.carry} = legg rullepapiret tilbake`;else if(n&&n.level<3)u=`${n.def.name} nv. ${n.level} · hent rullepapir ved fyret for å oppgradere`;else if(e){const h=Jo[so[ot.sel]].name;u=he.device==="pad"?`${c.sel} = velg tårn · ${c.build} = bygg ${h}`:he.device==="touch"?`Trykk på et tårn, eller Bygg = ${h}`:`1 / 2 / 3 = bygg · ${c.build} = bygg ${h}`}else ot.phase==="prep"&&ot.wave===0&&(u="Finn en steinsokkel langs stien og bygg et tårn");Qc(u)}const tr=new _e;{const i=document.createElement("canvas");i.width=64,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,64,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.5,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,256),t.globalCompositeOperation="destination-in";const n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"rgba(0,0,0,0.9)"),n.addColorStop(.7,"rgba(0,0,0,0.35)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,256);const s=new bi(i);for(let r=0;r<6;r++){const a=new Jt(new Gn(1,1),new Le({map:s,color:"#ffdcae",transparent:!0,opacity:.08,blending:fi,depthWrite:!1,fog:!1}));a.scale.set(2.5+r%3*1.8,34,1),a.position.set(-22+r*8.5,9,-4+r%2*6),a.rotation.set(-.95,0,.55),a.userData.phase=r*1.3,tr.add(a)}}Pe.add(tr);function $v(i){tr.position.set(Oe.x,0,Oe.z),tr.rotation.y=oi,tr.children.forEach(t=>t.material.opacity=.05+.04*Math.sin(i*.35+t.userData.phase))}let li=0;const Oe=new I(et.x,0,et.z);function jv(i){Oe.x+=(et.x-Oe.x)*Math.min(1,i*4),Oe.z+=(et.z-Oe.z)*Math.min(1,i*4),Oe.y=Dn.position.y;const t=Li?1.15:1,e=he.zoom*t,n=Bn.aspect<1.2?1.25:1;oi+=he.look;const s=6.6*e*n;Bn.position.set(Oe.x+Math.sin(oi)*s,Oe.y+12.5*e*n,Oe.z+Math.cos(oi)*s),li=Math.max(0,li-i),li>0&&(Bn.position.x+=(Math.random()-.5)*li*2,Bn.position.y+=(Math.random()-.5)*li),Bn.lookAt(Oe.x-Math.sin(oi),Oe.y+.5,Oe.z-Math.cos(oi)),sn.position.set(Oe.x+Pn.sunDir[0],Oe.y+Pn.sunDir[1],Oe.z+Pn.sunDir[2]);const r=qe.clamp(15*e*n,15,60);Math.abs(sn.shadow.camera.right-r)>.5&&(Object.assign(sn.shadow.camera,{left:-r,right:r,top:r,bottom:-r}),sn.shadow.camera.updateProjectionMatrix()),sn.target.position.set(Oe.x,Oe.y,Oe.z+3),$v(ot.time)}function Zv(i){if(ot.phase==="prep")ot.timer-=i,An.timer.textContent=`Neste bølge om ${Math.ceil(Math.max(0,ot.timer))} s`,ot.timer<=0&&(An.timer.textContent="",Jh());else if(ot.phase==="wave"){for(ot.waveClock+=i;ot.spawnQueue.length&&ot.spawnQueue[0].t<=ot.waveClock;){const t=ot.spawnQueue.shift();Nv(t.type,t.path)}if(An.timer.textContent=`${Vn.length+ot.spawnQueue.length} monstre igjen`,!ot.spawnQueue.length&&!Vn.length){if(An.timer.textContent="",ot.wave>=qh.length){nu(!0);return}const t=Te.waveBonus+ot.wave*3;ot.embers+=t,Di(An.embers,"embers",ot.embers,"bump"),wn(`Bølge ${ot.wave} slått! +${t} ✦`),Kh(Te.prepTime)}}}function nu(i){ot.phase=i?"won":"lost",Ae("touch").classList.add("hidden"),Ae("btn-pause").classList.add("hidden"),qi.classList.add("hidden");let t="";if(i){We.win();const n=ar();Xg(dn),ar()>n&&(t=`<p class="lead">🔓 Ny verden låst opp: <b>${Us[dn+1].name}</b>!</p>`)}const e=Ae("overlay");e.querySelector(".card").innerHTML=i?`<h1>Gløden lever!</h1><p class="lead">Ti bølger med forbud, komitéer og moralpanikk er chillet ned, og ${ot.lights} av 20 glødepunkter brenner fortsatt. Øya ånder ut.</p>${t}<button id="btn-again">Spill igjen</button>`:`<h1>Gløden sluknet</h1><p class="lead">Byråkratiet vant denne gangen, i bølge ${ot.wave}. Rull opp ermene og prøv igjen.</p><button id="btn-again">Prøv igjen</button>`,e.classList.remove("hidden"),Ae("btn-again").addEventListener("click",()=>{location.href=location.pathname+(t?`?world=${dn+1}`:`?world=${dn}`)})}function Ll(){ot.phase==="title"&&(Av(),Ae("overlay").classList.add("hidden"),Li&&(he.device="touch"),Ri.device=null,Ae("btn-pause").classList.remove("hidden"),ne.lighthouse.setLights(ot.lights),Di(An.embers,"embers",ot.embers),Kh(Te.firstPrep),Xh&&Kv())}Ae("btn-start").addEventListener("click",Ll);{const i=Ae("worlds"),t=ar();if(Us.forEach((e,n)=>{const s=document.createElement("button");s.className="world"+(n===dn?" sel":"")+(n>=t?" locked":""),s.innerHTML=`<b>${n>=t?"🔒 ":""}${e.name}</b><small>${n>=t?"Vinn forrige verden for å låse opp":e.blurb}</small>`,s.disabled=n>=t,s.addEventListener("click",()=>{n!==dn&&(location.href=`${location.pathname}?world=${n}`)}),i.appendChild(s)}),Ae("btn-start").textContent=`Tenn gløden på ${$n.name}`,$n.skyDusk){const e=document.createElement("button");e.id="btn-tod",e.className="tod",e.textContent=Yi==="skumring"?"🌅 Skumring (bytt til dag)":"☀️ Dag (bytt til skumring)",e.addEventListener("click",()=>{try{localStorage.setItem("glod-tid",Yi==="skumring"?"dag":"skumring")}catch{}location.href=`${location.pathname}?world=${dn}&tid=${Yi==="skumring"?"dag":"skumring"}`}),Ae("worlds").after(e)}}Ae("btn-quality").addEventListener("click",()=>jh(Jn==="high"?"low":"high"));addEventListener("keydown",i=>{i.code==="KeyG"&&!i.repeat&&jh(Jn==="high"?"low":"high")});Ae("btn-quality").textContent=Jn==="high"?"Høy":"Lav";Ae("btn-pause").classList.add("hidden");function Kv(){ot.embers=999;const i=ne.lighthouse.pos,t=ne.plinths.slice().sort((e,n)=>Math.hypot(e.x-i.x,e.z-i.z-4)-Math.hypot(n.x-i.x,n.z-i.z-4));["ring","chips","speaker","ring","chips","ring"].forEach((e,n)=>{const s=t[n];et.x=s.x+1.9,et.z=s.z,el(e),n<3&&(wi[wi.length-1].level=n+1,Vh(wi[wi.length-1],n+1))}),et.x=i.x+1,et.z=i.z+6,et.carrying=!0,ot.wave=Number(yn.get("demo"))||4,ot.wave-=1,Jh(),ot.waveClock=6,ot.embers=142}const Jv=new Bh;let ro=0,Xr=0,qr=0;window.__fpsSamples=[];window.__game={S:ot,monsters:Vn,towers:wi,embers:_s,world:ne,K:et,renderer:Sn,camera:Bn,input:he,get camYaw(){return oi}};window.__errors=[];addEventListener("error",i=>window.__errors.push(String(i.message)));addEventListener("unhandledrejection",i=>window.__errors.push(String(i.reason)));function iu(){requestAnimationFrame(iu);const i=Jv.getDelta(),t=Math.min(i,.05);ot.paused||(ot.time+=t),he.update(t),ot.paused||(ne.update(ot.time),Iv.update(ot.time));for(let e=0;e<Lv&&!ot.paused&&(ot.phase==="prep"||ot.phase==="wave");e++)Zv(t),Vv(t),Bv(t),kv(t),Hv(t),Ov(t);if(ot.paused||Wv(t),Yv(t),!ot.paused){if($e.update(t),Math.random()<t*(4+10*(ot.lights/Wn))){const e=ne.lighthouse.tip;lr.emit(e.x,e.y,e.z,{n:1,color:"#e8e2dc",speed:.5,up:1.6,life:3.2,gravity:-.15})}lr.update(t)}if(jv(t),Sn.info.reset(),ma.render(t),ro++,Xr+=i,Xr>=.5){const e=ro/Xr;window.__fpsSamples.push(e),window.__fpsSamples.length>240&&window.__fpsSamples.shift(),Zh.textContent=`${e.toFixed(0)} fps · ${Sn.info.render.calls} dc`,qr=e<(Li?28:45)?qr+1:0,qr>=6&&Xi>1&&(Xi=Math.max(1,Xi-.25),Sn.setPixelRatio(Xi),ga(),qr=0),ro=0,Xr=0}}iu();Xh&&yn.has("autostart")&&Ll();function il(i,t){let e=i-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}
